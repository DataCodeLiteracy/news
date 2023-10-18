import { useEffect, useState } from 'react'

const NewsList = () => {
  const [newsList, setNewList] = useState([])

  const fetchNewsData = async () => {
    const url =
      'https://newsapi.org/v2/everything?' +
      'q=Apple&' +
      'from=2023-10-18&' +
      'sortBy=popularity&' +
      'apiKey=ea74632310774b6b9b0f1f677b4206b1'

    const req = new Request(url)

    const res = await fetch(req)
    const data = res.json()

    return data
    console.log(data)
  }

  useEffect(() => {
    fetchNewsData()
  }, [])

  return <li></li>
}

export default NewsList
