import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCheckboxOutline } from "react-icons/io5";

type todoType = { num: number; text: string; date: string; status: string };

interface entry {
    todo: todoType;
    toDoes: todoType[];
    setToDoes: (todos: todoType[]) => void;
}

const ToDo: React.FC<entry> = ({ todo, setToDoes, toDoes }) => {
    const [todoStatus, setTodoStatus] = useState(todo.status);

    function handleCheck() {
        setTodoStatus((todoStatus) =>
            todoStatus === "complete" ? "incomplete" : "complete"
        );
    }

    function handleDelete () {
        const newToDoes:todoType[] = [];
        let k = 1;
        for(let i = 0; i < toDoes.length; i++)
            if(toDoes[i].num !== todo.num) {
                toDoes[i].num = k++;
                newToDoes.push(toDoes[i]);
            }

        setToDoes(newToDoes);
    }

    return (
        <div className="table-data-container">
            <div className="num">{todo.num}</div>
            <div className="task">{todo.text}</div>
            <div className="data">{todo.date}</div>
            <div className="status">
                <div
                    onClick={handleCheck}
                    className={`check-box-container ${
                        todoStatus === "complete" ? "complete-status" : ""
                    }`}
                >
                    <div
                        className={`check-status ${
                            todoStatus === "complete"
                                ? "check-complete-status"
                                : ""
                        }`}
                    ></div>
                </div>
            </div>
            <div className="delete">
                <button onClick={handleDelete}>
                    <RiDeleteBinLine />
                </button>
            </div>
        </div>
    );
};

export default ToDo;
