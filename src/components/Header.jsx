import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addtodo,updatetodo} from '../features/todoSlice';

function Header() {

    const[task , settask] = useState("");
    const[error , seterror] = useState(false);
    const {alreadyPresent,edittext,isEdit,editId} = useSelector(state=> state.Mytask)

    const dispatch = useDispatch();

    useEffect(()=>{
       
          settask(edittext);
        
        // console.log(isEdit);
        // console.log(editId);
        // console.log(edittext);
      },[isEdit])
    

    function addtodotask(e){
        if(task == ""){
            seterror(true)
        }

        else if((e.key === "Enter" || e === "addbtn") && task != "" ){
            seterror(false);
           
            dispatch(addtodo(task));
            settask("");
        }
    }

    function updatetask(e){
        if(task == ""){
            seterror(true)
        }

        else if((e.key === "Enter" || e === "updatebtn") && task != "" ){
            seterror(false);
            dispatch(updatetodo(task));
            settask("");
        }
    }
    // console.log(task);



  return (
    <div className='sm:w-[80%] w-[85%] mt-5 mx-auto'>
        <div className='flex justify-between'>
        <div className='w-[80%] border-b-2 border-b-white'>
            <input className={`w-full md:text-xl text-lg pb-1 bg-transparent placeholder:text-white placeholder:italic text-white outline-none ${isEdit ? 'text-red-700' :null }`} autoFocus type="text" placeholder='Write your todo ...'  value={task} onChange={(e)=>{settask(e.target.value)}} maxLength={40}/>
         
        </div>
       
        <div className='sm:w-[15%] w-[18%]'>
          {isEdit ? (<button className='w-full bg-red-500 font-semibold text-white rounded-md h-full sm:text-sm text-[10px]' onClick={()=>{updatetask("updatebtn")}}>Update</button>) : ( <button className='w-full bg-green-500 font-semibold text-white rounded-md h-full' onClick={()=>{addtodotask("addbtn")}}>Add</button>)}
           
           
        </div>
        </div>
        {error && <p className="text-red-800 text-lg font-bold italic">Field is Empty</p>}

       
        
    </div>
  )
}

export default Header