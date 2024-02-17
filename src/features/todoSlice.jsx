import { createSlice , nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const data = localStorage.getItem("mytodo") !== null ? JSON.parse(localStorage.getItem("mytodo")) : []
const initialState = {
    todo :  data,
    isEdit: false,
    editId:null,
    edittext:"",
    alreadyPresent: false,
}



export const createtodo = createSlice({
        name:"todo",
        initialState,
        reducers : {

            addtodo :(state,action) =>{
                state.alreadyPresent = false;
                const temp = {
                    task : action.payload,
                    id:nanoid(),
                }

                state.todo.forEach((items)=>{
                    if(items.task.toLowerCase() === action.payload.toLowerCase()){
                        toast.warning("The task is already present");
                        state.alreadyPresent = true;
                    }
                })
                
               if(!state.alreadyPresent){
                   state.todo.push(temp);
                   toast.success("Task is Added");
               }
                

            },

            deletetodo :(state,action) =>{

                console.log(action.payload);
                state.todo = state.todo.filter((items)=> items.id !== action.payload);
                toast.error('Deleted');
               
                // const filterdata = state.todo.filter((items)=> items.id !== action.payload);
                // state.todo.push(filterdata);

            },
            edittodo :(state,action)=>{
                state.isEdit = !state.isEdit;
                // state.isEdit = true;
                state.editId = action.payload;
                const value = state.todo.filter((items)=> items.id === action.payload); 
                state.edittext = value[0]?.task;
            },

            updatetodo : (state,action)=>{
                    // console.log(state.editId);
                    state.todo.forEach((items)=>{
                    if(items.id === state.editId){
                        items.task = action.payload;
                    }
                })
                toast.success('Task updated');
                state.isEdit = false;
                state.edittext = "";

            },
            noupdate : (state)=>{
                state.isEdit = false;
                state.edittext = "";
                state.editId = null;
            }
            ,
        
        }
});

export const {addtodo , deletetodo , edittodo,changemode,updatetodo,noupdate} = createtodo.actions;
export default createtodo.reducer;

