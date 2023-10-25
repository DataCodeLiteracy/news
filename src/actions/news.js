import { newsSliceActions } from '@/store'

export const fetchNewsData = () => async (dispatch) => {
  const url =
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ea74632310774b6b9b0f1f677b4206b1'

  const req = new Request(url)

  const res = await fetch(req)
    .then((res) => res.json())
    .then((data) => data.articles)

  dispatch(newsSliceActions.fetchData(res))
}
