import React, {useEffect, useState} from "react";
import AddToDo from "./AddToDo";
import Header from "./Header";
import ToDos from "./ToDos";
const Page: React.FC = () => {
    const [toDoes, setToDoes] = useState<
        { num: number; text: string; date: string; status: string }[]
    >([]);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("todoes")!))
            setToDoes(JSON.parse(localStorage.getItem("todoes")!));
    }, []);

    const totalToDo = toDoes.length;
    const completedCount = toDoes.filter(
        (elem) => elem.status === "complete"
    ).length;
    const pendingCount = totalToDo - completedCount;

    return (
        <div className="page">
            <Header
                totalToDo={totalToDo}
                completedCount={completedCount}
                pendingCount={pendingCount}
            />
            <AddToDo setToDoes={setToDoes} todos={toDoes} />
            <ToDos setToDoes={setToDoes} toDoes={toDoes} />
        </div>
    );
};

export default Page;
