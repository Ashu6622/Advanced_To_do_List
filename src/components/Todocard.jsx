import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { deletetodo,edittodo } from '../features/todoSlice';
import { IoClose } from "react-icons/io5";
import { noupdate } from '../features/todoSlice';

function Todocard() {

 const task = useSelector(state => state.Mytask.todo);
 const Id = useSelector(state => state.Mytask.editId);
 const isEdit = useSelector(state => state.Mytask.isEdit);
 localStorage.setItem("mytodo",JSON.stringify(task));
 const dispatch = useDispatch();

  return (
    
      <div >

    {task?.map((items)=>{
      return(
    
        <div key={items.id} className={`flex items-center border-2 border-gray-500 mb-4 p-[6px] ${(Id === items.id && isEdit) ? 'bg-red-400/[0.4]': null}`}>
        <div className='w-full rounded-md md:text-2xl font-semibold'>{items?.task}</div>
        <div className='flex items-center gap-3'>
          <MdDelete className='md:text-3xl text-red-800 hover:text-red-500 cursor-pointer' onClick={()=>{dispatch(deletetodo(items?.id))}}/>

          { isEdit && Id === items.id ? <IoClose className='md:text-2xl text-yellow-800  hover:text-yellow-500 cursor-pointer' onClick={()=>{dispatch(noupdate())}}/> : <FaEdit className='md:text-2xl text-green-800  hover:text-green-600 cursor-pointer' onClick={()=>{dispatch(edittodo(items?.id))}}/>}
          
        </div>
        </div>
  )
})}

      </div>
        
   
  )
}

export default Todocard