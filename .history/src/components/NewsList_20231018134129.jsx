const NewsList = ({ newsList }) => {
  return (
    <>
      <div>1</div>
      <li className="text-white">
        <div>{newsList.status}</div>
        <div>{newsList.totalResults}</div>
        <div>{newsList.articles}</div>
        <div>1</div>
      </li>
    </>
  )
}

export default NewsList
