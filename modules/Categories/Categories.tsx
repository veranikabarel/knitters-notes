const url = process.env.RAVELRY_BASE_URL;
const username = process.env.RAVELRY_USERNAME;
const password = process.env.RAVELRY_PASSWORD;

async function getData() {
  const res = await fetch(`${url}/pattern_categories/list.json`, {
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

export default async function Categories() {
  const data = await getData();

  return (
    <>
      {data?.pattern_categories?.children.map((pattern: any) => {
        return <div key={pattern.id}>{pattern.long_name}</div>;
      })}
    </>
  );
}
