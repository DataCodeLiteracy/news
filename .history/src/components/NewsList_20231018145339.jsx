import Image from 'next/image'

const NewsList = ({ item }) => {
  return (
    <>
      <li className="text-white border-white border-2">
        <div className="mb-10 text-3xl">TITLE : {item.title}</div>
        <div>DESCRIPTION: {item.description}</div>
        {/* <Image
          src={item.urlToImage}
          alt={item.title}
          width={500}
          height={300}
        /> */}
      </li>
    </>
  )
}

export default NewsList
