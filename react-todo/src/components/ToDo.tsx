import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCheckboxOutline } from "react-icons/io5";

interface entry {
    todo: { num: number; text: string; date: string; status: string };
}

const ToDo: React.FC<entry> = ({ todo }) => {
    const [todoStatus, setTodoStatus] = useState(todo.status);

    function handleCheck() {
        setTodoStatus((todoStatus) =>
            todoStatus === "complete" ? "incomplete" : "complete"
        );
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
                <button>
                    <RiDeleteBinLine />
                </button>
            </div>
        </div>
    );
};

export default ToDo;
