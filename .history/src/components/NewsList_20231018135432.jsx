const NewsList = ({ item }) => {
  return (
    <>
      <li className="text-white">
        <div>{item.title}</div>
        <div>{item.description}</div>
        <img src={item.url} alt="" />
        <div>{}</div>
      </li>
    </>
  )
}

export default NewsList
