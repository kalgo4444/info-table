import { useState } from 'react'
import Header from './components/Header/Header'
import Table from './components/Table/Table'

const App = () => {
  const [info, setInfo] = useState([])

  return (
    <>
      <Header setInfo={setInfo} />
      <Table date={info} />
    </>
  )
}

export default App
