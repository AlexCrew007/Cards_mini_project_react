import './App.css';
import {filterData, apiUrl} from './new_data';
import Navbar from './components/navbar';
import Filter from './components/filter';
import Cards from './components/cards';
import Spinner from './components/spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';


function App() {

  const filterBtn = filterData;
  const [courses, setCourses] =useState([]);
  const [loading, setLoading]=useState(true);
  const [category, setCategory]=useState(filterData[0].title)
  
  async function fetchData(){
    setLoading(true);
    try{
        let response = await fetch(apiUrl);
        let output = await response.json();
        setCourses(output.data);
        
    }
    catch(error){
      toast.error("Netweok Issue or Something Went Wrong");
    }
    setLoading(false);
  }
 
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="App min-h-screen flex flex-col bg-dark">
      <ToastContainer></ToastContainer>
      <div className='flex flex-col'>
        <Navbar></Navbar>
      </div>
      <div>
        <div>
          <Filter category={category} setCategory={setCategory} fBtn={filterBtn}></Filter>
        </div>
        
        <div className='w-11/12 max-w-[1200px]
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading ? (<Spinner></Spinner>) : <Cards category={category} courses={courses}></Cards> 
          }
        </div>
      </div>
      
    </div>
  );
}

export default App;
