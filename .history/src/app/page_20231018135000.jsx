'use client'
import NewsList from '@/components/NewsList'
import { useEffect, useState } from 'react'

export default function Home() {
  const [newsList, setNewList] = useState([])

  const fetchNewsData = () => {
    const url =
      'https://newsapi.org/v2/everything?q=tesla&from=2023-09-18&sortBy=publishedAt&apiKey=ea74632310774b6b9b0f1f677b4206b1'

    const req = new Request(url)

    const res = fetch(req)
      .then((res) => res.json())
      .then((data) => data.articles)

    return res
  }

  console.log(newsList)

  useEffect(() => {
    const fetchNewsInfo = async () => {
      const newsData = await fetchNewsData()
      setNewList(newsData)
    }

    fetchNewsInfo()
  }, [])

  return (
    <main>
      <div>
        <ul className="flex">
          {newsList.length > 0 &&
            newsList.map((item) => (
              <NewsList key={item.index} newsList={newsList} />
            ))}
        </ul>
      </div>
    </main>
  )
}
