import React from "react";
import TableHeader from './TableHeader';
import ToDo from './ToDo';


type todoType = { num: number; text: string; date: string; status: string; };

interface entry {
    toDoes: todoType[];
    setToDoes: (todos: todoType[]) => void;
}


const ToDos: React.FC<entry> = ({toDoes, setToDoes}) => {
    return (
        <div className="todos-container">
            <TableHeader />
            {toDoes.map((todo) => (
                <ToDo key={todo.num} todo={todo} setToDoes={setToDoes} toDoes={toDoes}/>
            ))}
        </div>
    );
};

export default ToDos;
