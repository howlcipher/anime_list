import fs from 'fs/promises';

const USERNAME = 'howlcipher';
const API_URL = 'https://graphql.anilist.co';

const query = `
query ($name: String, $page: Int) {
  Page(page: $page, perPage: 50) {
    pageInfo {
      hasNextPage
      currentPage
    }
    mediaList(userName: $name, type: ANIME, status: COMPLETED) {
      score
      media {
        id
        title {
          romaji
          english
          userPreferred
        }
        coverImage {
          extraLarge
          large
          color
        }
        season
        seasonYear
        startDate {
          year
          month
        }
      }
    }
  }
}
`;

function getSeasonFromMonth(month) {
  if (month === 12 || month <= 2) return 'WINTER';
  if (month >= 3 && month <= 5) return 'SPRING';
  if (month >= 6 && month <= 8) return 'SUMMER';
  if (month >= 9 && month <= 11) return 'FALL';
  return 'UNKNOWN';
}

async function fetchAllCompleted() {
  let hasNextPage = true;
  let page = 1;
  const allEntries = [];

  while (hasNextPage) {
    console.log(`Fetching page ${page}...`);
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { name: USERNAME, page }
      })
    });

    const data = await response.json();

    if (data.errors) {
      console.error('API Errors:', data.errors);
      break;
    }

    const pageInfo = data.data.Page.pageInfo;
    const mediaList = data.data.Page.mediaList;
    allEntries.push(...mediaList);

    hasNextPage = pageInfo.hasNextPage;
    page++;
    
    // Slight delay to avoid rate limiting
    await new Promise(res => setTimeout(res, 1000));
  }

  return allEntries;
}

function processEntries(entries) {
  const grouped = {};

  for (const entry of entries) {
    const media = entry.media;
    let season = media.season;
    let year = media.seasonYear;

    if (!season || !year) {
      year = media.startDate.year || 1970;
      season = media.startDate.month ? getSeasonFromMonth(media.startDate.month) : 'UNKNOWN';
    }

    if (!grouped[year]) {
      grouped[year] = { WINTER: [], SPRING: [], SUMMER: [], FALL: [], UNKNOWN: [] };
    }

    grouped[year][season].push({
      id: media.id,
      title: media.title.userPreferred || media.title.english || media.title.romaji,
      cover: media.coverImage.extraLarge || media.coverImage.large,
      color: media.coverImage.color || '#333333',
      score: entry.score
    });
  }

  // Sort years descending
  const sortedYears = Object.keys(grouped).sort((a, b) => b - a);
  const result = [];

  for (const year of sortedYears) {
    result.push({
      year: parseInt(year),
      seasons: {
        WINTER: grouped[year].WINTER,
        SPRING: grouped[year].SPRING,
        SUMMER: grouped[year].SUMMER,
        FALL: grouped[year].FALL,
        UNKNOWN: grouped[year].UNKNOWN,
      }
    });
  }

  return result;
}

async function main() {
  try {
    console.log('Starting data fetch...');
    const rawEntries = await fetchAllCompleted();
    console.log(`Fetched ${rawEntries.length} total entries.`);
    
    const processed = processEntries(rawEntries);
    
    await fs.mkdir('./public', { recursive: true });
    await fs.writeFile('./public/data.json', JSON.stringify(processed, null, 2));
    console.log('Successfully wrote data to ./public/data.json');
  } catch (error) {
    console.error('Failed to fetch/process data:', error);
    process.exit(1);
  }
}

main();
