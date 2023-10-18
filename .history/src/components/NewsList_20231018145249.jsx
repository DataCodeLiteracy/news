import Image from 'next/image'

const NewsList = ({ item }) => {
  return (
    <>
      <li className="text-white border-white border-2">
        <div>{item.title}</div>
        <div>{item.description}</div>
        {/* <Image
          src={item.urlToImage}
          alt={item.title}
          width={500}
          height={300}
        /> */}
        <div>{}</div>
      </li>
    </>
  )
}

export default NewsList
