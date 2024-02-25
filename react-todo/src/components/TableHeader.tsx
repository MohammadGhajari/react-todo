import React from 'react';


const TableHeader:React.FC = () => {
    return <div className='table-header-container'>
        <div className="num">Num</div>
        <div className="task">Task</div>
        <div className="data">Date</div>
        <div className="status">Status</div>
        <div className="delete">Delete</div>
    </div>
}

export default TableHeader;