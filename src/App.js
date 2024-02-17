
import './App.css';
import Header from './components/Header';
import Todocard from "./components/Todocard"
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  // localStorage.clear();
  const {todo} = useSelector(state => state.Mytask);

  return (
    <>
    <div className="w-screen h-screen bg-gray-400 flex justify-center items-center relative">
     <div className='border-2 border-black rounded-xl sm:w-[60%] h-[80%] w-[90%] flex flex-col relative z-1'>

      <div>
        <h1 className='text-center md:text-2xl text-xl font-semibold mt-3 w-[90%] mx-auto border-2 border-gray-600 p-2 rounded-3xl'>Your TodoTask</h1>
      </div>
      <Header/>
      <div className='w-[90%] mt-5 h-[420px] overflow-y-scroll no-scrollbar mx-auto'>
        {
          todo.length === 0 ? <div className='w-full h-full flex justify-center items-center'> <div className='text-2xl italic font-bold'>No task to show</div> </div>:  <Todocard/>
        }
    
      </div>
     </div>
     
          <ToastContainer autoClose="2000"/>
   
    </div>
    </>
  );
}

export default App;
