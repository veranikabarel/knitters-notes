export default function Project({ params }: { params: { slug: string } }) {
  return <div>Project {params.slug}</div>;
}
