import './App.css'
import './index.css'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import { filterData, apiUrl } from './data'
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react'
import Spinner from './components/Spinner'

function App () {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].title)

  async function fetchData () {
    setLoading(true)
    try {
      const response = await fetch(apiUrl)
      const output = await response.json()
      setCourses(output.data)
    } catch (error) {
      toast.error('Something went wrong')
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='mainDiv'>
      <div className='navBar'>
        <Navbar />
      </div>
      <div className='filter_cards'>
        <div className='filter'>
          <Filter Info={filterData} category={category} setCategory={setCategory} />
        </div>
        <div className='cards'>
          {loading ? <Spinner /> : <Cards category={category} courses={courses} />}
        </div>
      </div>
    </div>
  )
}

export default App
