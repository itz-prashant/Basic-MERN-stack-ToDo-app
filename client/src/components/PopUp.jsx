import axios from 'axios'
import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { baseURL } from '../utils/constant'

const PopUp = ({setshowPopup, setPopContent, setUpdateUi}) => {
    const [input, setInput] = useState(setPopContent.text)

    const updateTodo = ()=>{
        axios.put(`${baseURL}/update/${setPopContent.id}`, {toDo: input}).then((res)=>{
            console.log(res.data);
            setUpdateUi((prev)=> !prev)
            setshowPopup(false)
        })
    }
  return (
    <div className='backdrop'>
        <div className="popup">
            <RxCross1 className='cross' onClick={()=> setshowPopup(false)}/>
            <h1>Upate Todo</h1>
            <div className="popup__input_holder">
            <input 
                value={input}
                onChange={(e)=> setInput(e.target.value)}
                type="text" placeholder='Update ToDo' />
                <button onClick={updateTodo}>Update</button>
            </div>
        </div>
    </div>
  )
}

export default PopUp