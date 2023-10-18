import { useEffect, useState } from 'react'

const NewsList = () => {
  useEffect(() => {
    setNewList(fetchNewsData())
  }, [])

  return <li></li>
}

export default NewsList
