import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import "../css/app.css";



const AddToDo: React.FC = () => {
    return <div className='input-container'>
        <input type="text" placeholder='Add your task...' />
        <button className='add-todo-btn'><IoIosAddCircleOutline /></button>
    </div>
}

export default AddToDo;