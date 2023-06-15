async function getData() {
  const url = process.env.RAVELRY_BASE_URL;
  const username = process.env.RAVELRY_USERNAME;
  const password = process.env.RAVELRY_PASSWORD;

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

export default async function PatternLibrary() {
  const data = await getData();
  console.log('data', data.pattern_categories.children);

  return (
    <div>
      <h2>Categories</h2>
      {data?.pattern_categories?.children.map((pattern: any) => {
        return <div key={pattern.id}>{pattern.long_name}</div>;
      })}
    </div>
  );
}
