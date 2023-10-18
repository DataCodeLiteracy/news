const NewsList = ({ newsList }) => {
  return (
    <>
      <li className="text-white">
        <div>{newsList.title}</div>
        <div>{newsList.description}</div>
        <img src={newsList.url} alt="" />
        <div>{newsList}</div>
      </li>
    </>
  )
}

export default NewsList
