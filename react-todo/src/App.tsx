import React, { useState } from "react";
import AddToDo from './components/AddToDo';
import "./css/app.css";


const App: React.FC = () => {
    
    const [toDoes, setToDoes] = useState<{num: number, text: string, data: string, status: string}[]>([])
    


    const totalToDo = toDoes.length;
    const completeCount = toDoes.filter(elem => elem.status === 'complete').length;
    const pendingCount = totalToDo - completeCount;


    return (
        <div className="app">
            <div className="page">
                <header>
                    <h1>To-Do list</h1>
                    <h3>{`Total:${totalToDo}, Complete:${completeCount}, Pending${pendingCount}`}</h3>
                </header>
                <AddToDo />
            </div>
        </div>
    );
};

export default App;
