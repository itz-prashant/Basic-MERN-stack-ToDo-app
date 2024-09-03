import axios from 'axios';
import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md";
import { baseURL } from '../utils/constant';

const Todo = ({text, id, setUpdateUi, setshowPopup, setsetPopContent}) => {
    
  const deleteToDo = ()=>{

    axios.delete(`${baseURL}/delete/${id}`).then((res)=>{
      console.log(res.data);
      setUpdateUi((prev)=> !prev)
    })
  }

  const updateTodo = ()=>{
    setsetPopContent({text, id});
    setshowPopup(true);
};

  return (
    <div className='toDo'>
        {text}
        <div className="icons">
            <MdEdit className='icon' onClick={updateTodo}/>
            <MdDelete className='icon' onClick={deleteToDo}/>
        </div>
    </div>
  )
}

export default Todo