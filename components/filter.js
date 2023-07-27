
function Filter({fBtn,category,setCategory}){
    const clickHandler=(title)=>{
        setCategory(title)
    }

    return (
        <div className="space-x-4 gap-y-4 py-4 container">
        {   
            fBtn.map( (btn)=>{
                return <button onClick={ () => clickHandler(btn.title) } className={`text-lg px-2 py-1 rounded-md font-medium 
                text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                ${category === btn.title ?
                "bg-opacity-60 border-white" :
                "bg-opacity-40 border-transparent"}
                `}
                     key={btn.id}>{btn.title}</button>
            })
        }
        </div>
    );
}

export default Filter