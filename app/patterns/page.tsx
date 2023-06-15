import SearchBar from '@//modules/SearchBar/SearchBar';
import Categories from '@/modules/Categories/Categories';
import PatternGallery from '@/modules/PatternGallery/PatternGallery';

const url = process.env.RAVELRY_BASE_URL;
const username = process.env.RAVELRY_USERNAME;
const password = process.env.RAVELRY_PASSWORD;

async function getPatterns() {
  const res = await fetch(`${url}/patterns.json?ids=600+601`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(username + ':' + password)}`,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function PatternLibrary() {
  const data = await getPatterns();
  console.log(data);

  return (
    <div>
      <div>
        {/* @ts-expect-error Server Component */}
        <SearchBar />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          {/* @ts-expect-error Server Component */}
          <Categories />
        </div>
        <div>
          <PatternGallery />
        </div>
      </div>
    </div>
  );
}
