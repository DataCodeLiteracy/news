import { useSelector } from 'react-redux'

export default function NewsDetailPage({ params }) {
  const newsList = useSelector((state) => state)
  return (
    <div>
      <h1>News Details for Slug: {params.slug}</h1>
    </div>
  )
}
