import { RiDeleteBinLine } from "react-icons/ri";

type todoType = { num: number; text: string; date: string; status: string };

interface entry {
    todo: todoType;
    toDoes: todoType[];
    setToDoes: (todos: todoType[]) => void;
}

const ToDo: React.FC<entry> = ({ todo, setToDoes, toDoes }) => {
    // const [todoStatus, setTodoStatus] = useState(todo.status);

    function handleCheck() {
    
        // setTodoStatus((todoStatus) => todoStatus === "complete" ? "incomplete" : "complete");
      
        const s = todo.status === 'complete' ? 'incomplete' : 'complete';

        const newTodoes = toDoes;
        for(let i = 0; i < newTodoes.length; i++) 
            if(newTodoes[i].num === todo.num)
                newTodoes[i].status = s;

        setToDoes([...newTodoes]);
        
    }

    function handleDelete () {
        const newToDoes:todoType[] = [];
        let k = 1;
        for(let i = 0; i < toDoes.length; i++)
            if(toDoes[i].num !== todo.num) {
                toDoes[i].num = k++;
                newToDoes.push(toDoes[i]);
            }

        setToDoes([...newToDoes]);
    }




    return (
        <div className="table-data-container">
            <div className="num">{todo.num}</div>
            <div className={`task ${todo.status === 'complete' && 'complete-todo'}`}>{todo.text}</div>
            <div className={`date ${todo.status === 'complete' && 'complete-todo'}`}>{todo.date}</div>
            <div className="status">
                <div
                    onClick={handleCheck}
                    className={`check-box-container ${
                        todo.status === "complete" ? "complete-status" : ""
                    }`}
                >
                    <div
                        className={`check-status ${
                            todo.status === "complete"
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
