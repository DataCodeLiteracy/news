'use client'
import NewsList from '@/components/NewsList'
import { useEffect, useState } from 'react'

export default function Home() {
  const [newsList, setNewList] = useState([])

  const fetchNewsData = () => {
    const url =
      'https://newsapi.org/v2/everything?' +
      'q=Apple&' +
      'from=2023-10-18&' +
      'sortBy=popularity&' +
      'apiKey=ea74632310774b6b9b0f1f677b4206b1'

    const req = new Request(url)

    const res = fetch(req)
      .then((res) => res.json())
      .then((data) => data)

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
      <div>1</div>
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
