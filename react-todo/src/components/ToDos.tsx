import React from "react";
import TableHeader from './TableHeader';
import ToDo from './ToDo';


type todoType = { num: number; text: string; date: string; status: string; };

interface entry {
    toDoes: todoType[];
}


const ToDos: React.FC<entry> = ({toDoes}) => {
    return (
        <div className="todos-container">
            <TableHeader />
            {toDoes.map((todo) => (
                <ToDo key={todo.num} todo={todo} />
            ))}
        </div>
    );
};

export default ToDos;
