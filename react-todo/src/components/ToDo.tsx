import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCheckboxOutline } from "react-icons/io5";


interface entry {
     todo: { num: number; text: string; date: string; status: string; }
}

const ToDo:React.FC<entry> = ({todo}) => {

    return <div className='table-data-container'>
    <div className="num">{todo.num}</div>
    <div className="task">{todo.text}</div>
    <div className="data">{todo.date}</div>
    <div className="status">{todo.status === 'complete' ? 'complete': <button><IoCheckboxOutline /></button>}</div>
    <div className="delete"><button><RiDeleteBinLine /></button></div>
</div>
}

export default ToDo;