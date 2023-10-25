import { useDispatch, useSelector } from 'react-redux'
import NewsList from './NewsList'
import { useEffect } from 'react'
import { fetchNewsData } from '@/actions/news'
import { newsSliceActions } from '@/store'

const News = () => {
  const dispatch = useDispatch()
  const newsList = useSelector((state) => state)

  useEffect(() => {
    dispatch(fetchNewsData())
  }, [dispatch])

  console.log(newsList)

  return (
    <ul className="flex-wrap">
      {newsList.length > 0 &&
        newsList.map((item, index) => <NewsList key={index} item={item} />)}
    </ul>
  )
}

export default News
