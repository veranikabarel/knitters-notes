'use client';

const url = process.env.RAVELRY_BASE_URL;
const username = process.env.RAVELRY_USERNAME;
const password = process.env.RAVELRY_PASSWORD;

// async function getPatterns() {
//   const res = await fetch(`${url}/patterns.json?ids=600+601`, {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Basic ${btoa(username + ':' + password)}`,
//     },
//   });
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }

export default async function PatternLibrary() {
  // const data = await getPatterns();
  // console.log(data);

  return <div>PatternLibrary</div>;
}
