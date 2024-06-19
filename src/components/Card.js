import React from 'react'
import { FcLike } from 'react-icons/fc'
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify'

function Card ({ course , likedCourses, setLikedCourses}) {

    function likedHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev)=> prev.filter((cid)=>cid!==course.id))
            toast.warning("Like removed")
        }
        else
        {
            if(likedCourses.length===0)
                setLikedCourses([course.id])
            else
            {
                setLikedCourses((prev)=>[...prev,course.id])
            }
            toast.success("Liked Successfully")
        }
    }   


  return (
    <div className='card'>
      <div className='cardImage'>
        <img style={{ width: '300px', objectFit:'cover'}} src={course.image.url} alt={course.image.alt} />
        <div className='heart'>
          <button onClick={likedHandler} style={{borderRadius:'19px', width:'34px', height:'34px'}}>
            {
                likedCourses.includes(course.id) ? <FcLike fontSize='1.65rem' /> : <FcLikePlaceholder fontSize='1.65rem' />
            }
          </button>
        </div>
      </div>
      <div className='card-content'>
        <h2>{course.title}</h2>
        <p>{`${course.description.substring(0,139)}...`}</p>
      </div>
    </div>
  )
}

export default Card
