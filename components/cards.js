import { useState } from "react"
import Card from "./card"

function Cards({courses,category}){

    let allCourses = []
    const [likedCourses, setLikedCourses]=useState([])

    if(category==='All'){
        for(let key in courses){
                for(let value of courses[key]){
                    allCourses.push(value)
                }
        }
    }
    else{
        allCourses=(courses[category]);
    }
  
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4 text-white">
            {   allCourses.length===0 ? <h4>No Courses Found</h4> :
                allCourses.map((data)=>{
                    return <Card key={data.id} {...data}  likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                })
            }
        </div>
        );
}

export default Cards

