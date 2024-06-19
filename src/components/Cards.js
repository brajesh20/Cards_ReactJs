import React from 'react'
import Card from './Card'
import { useState } from 'react'

function Cards ({ courses, category }) {
  const [likedCourses, setLikedCourses] = useState([])

  function getAllCourses () {
    if (category === 'All') {
      let allCourses = []
      Object.keys(courses).forEach(category => {
        courses[category].forEach(course => {
          allCourses.push(course)
        })
      })
      return allCourses
    }
    else
    {
      return courses[category]
    }
  }

  return (
    <div className='cardDiv'>
      {getAllCourses().map(course => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  )
}

export default Cards
