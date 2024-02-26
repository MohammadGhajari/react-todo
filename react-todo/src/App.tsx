import React, { useEffect, useState } from "react";
import AddToDo from "./components/AddToDo";
import Header from "./components/Header";
import ToDos from "./components/ToDos";
import "./css/app.css";

const App: React.FC = () => {

    const [toDoes, setToDoes] = useState<{ num: number; text: string; date: string; status: string }[]>([]);
   
    useEffect(() => {
        if(JSON.parse(localStorage.getItem('todoes')!)) 
            setToDoes(JSON.parse(localStorage.getItem('todoes')!));
        
    }, []); 
    


    const totalToDo = toDoes.length;
    const completedCount = toDoes.filter(
        (elem) => elem.status === "complete"
    ).length;
    const pendingCount = totalToDo - completedCount;

    return (
        <div className="app">

            <div className="page">
                <Header
                    totalToDo={totalToDo}
                    completedCount={completedCount}
                    pendingCount={pendingCount}
                />
                <AddToDo setToDoes={setToDoes} todos={toDoes} />
                <ToDos setToDoes={setToDoes} toDoes={toDoes} />
            </div>
        </div>
    );
};

export default App;
