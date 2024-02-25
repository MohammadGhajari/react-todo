import React from "react";


interface entry {
    totalToDo: number,
    completedCount: number,
    pendingCount: number
}

const Header: React.FC<entry> = ({totalToDo, completedCount, pendingCount}) => {
    return (
        <header>
            <h1>To-Do list</h1>
            <span></span>
            <h3>{`Total:${totalToDo}, Complete:${completedCount}, Pending${pendingCount}`}</h3>
        </header>
    );
};

export default Header;