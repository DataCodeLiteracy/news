const NewsList = ({ newsList }) => {
  return (
    <li className="text-white">
      <div>{newsList.status}</div>
      <div>{newsList.totalResults}</div>
      <div>{newsList.articles}</div>
    </li>
  )
}

export default NewsList
