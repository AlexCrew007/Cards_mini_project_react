import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

function Card({id, title, description, image,likedCourses,setLikedCourses}){

    function clickHandler(){
        if(likedCourses.includes(id)){
            setLikedCourses((prev) => prev.filter((cid) => (cid)!==id));
            toast.warning("like removed")
        }
        else{
            setLikedCourses((prev) => [...prev, id]);
            toast.success("like added")
        }
    }
    return (
        <div className="w-[300px] bg-secondary rounded-md overflow-hidden">
            <div className="relative">
                <img src={image.url} alt={image.alt}></img>
                    <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
                        <button onClick={clickHandler}>
                        {
                            likedCourses.includes(id)? (<FcLike fontSize="1.75rem"></FcLike>) : (<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>) 
                        }
                            
                        </button>
                    </div>
            </div>
            
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{title}</p>
                <p className="mt-2 text-white">
                { description.length >100 ? `${description.substr(0,100)}...` : description }
                </p>
            </div>
        </div>
    )
};

export default Card;