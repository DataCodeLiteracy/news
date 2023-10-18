const NewsList = () => {
  const fecthNewsData = async () => {
    const url = ''

    const req = new Request(url)

    const res = await fetch(req)
    const data = res.json()

    console.log(data)
  }
  return <li></li>
}

export default NewsList
