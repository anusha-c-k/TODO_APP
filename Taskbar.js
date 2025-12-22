import React, {useRef,useState} from 'react'
import './Task.css';

function Taskbar() {
    const [todoList, setTodoList]=useState([]);
    const [filter,setFilter]=useState('all');
    
    const inputRef = useRef(null);
    const priorityRef=useRef(null);

    const add = ()=>{
            const inputText=inputRef.current.value.trim();
            const priority =priorityRef.current.value;
            inputRef.current.value="";
            if (inputText === ""){
                return null;
            }
            const newTodo={
                id:Date.now(),
                text:inputText,
                priority:priority,
                isComplete:false,
                date:new Date().toLocaleDateString()
            };

            setTodoList((prev) =>[...prev,newTodo]);
            inputRef.current.value="";

            const filteredTasks = todoList.filter(task => {
                if (filter === "active") return ! task.completed;
                if (filter === "done") return task.completed;
                return true;
                });

    };
    const deleteItem=(id)=>{
      setTodoList(todoList.filter(item => item.id !==id));
    }
  
  return (
    <div className="content">
        <div className="main-section">
            <div className="input-area">
                <input ref={inputRef} type="text"  placeholder="Add a new task..." />
                <select ref={priorityRef} defaultValue="Medium" id="prioritySelect">
                    <option  className='low' value="low">Low</option>
                    <option className='Medium' value="medium" selected>Medium</option>
                    <option  className='high' value="high" >High</option>
                </select>
                <button onClick={add} id="addBtn" >Add Task</button>
            </div>

            <div className="filters">
                <button className={filter === 'all' ? "active" : ""} onClick={() =>setFilter("all")} data-filter="all">All ({todoList.length})</button>
                <button className={filter === 'active' ? "active" : ""} onClick={() =>setFilter("active")} data-filter="active">Active ({todoList.filter(t =>! t.completed).length})</button>
                <button className={filter === 'done' ? "done" : ""} onClick={() =>setFilter("done")} data-filter="done">Done ({todoList.filter(t=> t.completed).length})</button>
            </div>


           
       
          
            {todoList.map(item => (
            <div> <input type='checkbox'></input>
            <div className="task-list" key={item.id}>
            <span className='task-text' >{item.text}</span>
            <small className={`priority  ${item.priority}`}> {item.priority}</small>
            <span className='date'>{new Date().toLocaleDateString()}</span>
            <small className='delete-btn' onClick={()=> deleteItem(item.id)}>🗑️</small>
          </div>
          </div>
          
        ))}
         
        {todoList.length === 0 && (
          
          <div className="empty-message">
            📝 No tasks yet. Add one to get started!
          </div>
        )}

        </div>

  </div>

    
)
}



export default Taskbar
