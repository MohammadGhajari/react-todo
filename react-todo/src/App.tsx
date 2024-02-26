import React, { useState } from "react";
import AddToDo from "./components/AddToDo";
import Header from "./components/Header";
import ToDos from "./components/ToDos";
import "./css/app.css";

const App: React.FC = () => {
    const [toDoes, setToDoes] = useState<
        { num: number; text: string; date: string; status: string }[]
    >([
        { num: 1, text: "do homework", date: "25/02", status: "complete" },
        { num: 2, text: "fucking a monkey", date: "25/02", status: "incomplete" },
    ]);

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
