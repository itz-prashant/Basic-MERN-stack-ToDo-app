import React, { useEffect, useState } from 'react'
import Todo from './components/Todo'
import axios from 'axios';
import { baseURL } from './utils/constant';
import PopUp from './components/PopUp';


const App = () => {

  const [toDos, settoDos] = useState([])
  const [input, setInput] = useState("")
  const [updateUi, setUpdateUi] = useState(false)
  const [showPopup, setshowPopup] = useState(false)
  const [setPopContent, setsetPopContent] = useState({})

  useEffect(()=>{
    axios.get(`${baseURL}/get`).then((res)=>{
      settoDos(res.data)
      
    }).catch(err => console.log(err)
    )
  }, [updateUi])

  const saveToDo = ()=>{
    axios.post(`${baseURL}/save`, {toDo: input}).then((res)=>{
      setUpdateUi((prev)=> !prev)
      setInput("")
    }).catch(err => console.log(err)
    )
  }

  return (
    <main>
      <div className='container'>
        <h1 className='title'>Todo App</h1>
        <div className="input_holder">
          <input 
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          type="text" placeholder='Add a ToDo' />
          <button onClick={saveToDo}>Add</button>
        </div>
        <div className="list">
          {toDos.map(el => <Todo key={el._id} setsetPopContent={setsetPopContent} setshowPopup={setshowPopup} setUpdateUi={setUpdateUi} text={el.toDo} id={el._id}/>)}
        </div>
      </div>
      {showPopup && <PopUp setshowPopup={setshowPopup} setUpdateUi={setUpdateUi} setPopContent={setPopContent}/>}
    </main>
  )
}

export default App
