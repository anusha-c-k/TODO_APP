import React, {useRef,useState} from 'react'
import './Task.css';
import './SIde.css';

function Taskbar() {
  
    const [todoList, setTodoList] = useState([]);
    const [filter,setFilter] = useState('all');
    
    const inputRef = useRef(null);
    const priorityRef=useRef(null);

    const add = ()=>{
            const inputText=inputRef.current.value;
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
                
            };

            setTodoList((prev) =>[...prev,newTodo]);
            // inputRef.current.value="";

            const filteredTask = todoList.filter(task => {
              
                if (filter === "active") return ! task.completed;
                if (filter === "done") return task.completed;
                
                return true;
                });

    };
    const deleteItem=(id)=>{
      setTodoList(todoList.filter(item => item.id !== id));
    }

    //  const CheckBox=()=>{
    //   setTodoList(todoList.filter(t=> t.completed).length);
    //  }

     const ClearAll=()=>{
      setTodoList(todoList.filter(item=>item === ''));
     }
  
  return (
    <div className="cont">
        <div className="main">
            <div className="box">
                <input ref={inputRef} type="text"  placeholder="Add a new task..." />
                <select ref={priorityRef} defaultValue="Medium" id="prioritySelect">
                    <option  className='low' value='low' >Low</option>
                    <option className='Medium'  value='medium' >Medium</option>
                    <option  className='high' value='high' >High</option>
                </select>
                <button onClick={add} id="addBtn" >Add Task</button>
            </div>

            <div className="filters">
                <button className={filter === 'all' ? "active" : ""} onClick={() =>setFilter("all")} data-filter="all">All ({todoList.length})</button>
                <button className={filter === 'active' ? "active" : ""} onClick={() =>setFilter("active")} data-filter="active">Active ({todoList.filter(t =>! t.completed).length})</button>
                <button className={filter === 'done' ? "active" : ""} onClick={() =>setFilter("done")} data-filter="done">Done ({todoList.filter(t=> t.completed).length})</button>
            </div>


            {todoList.map(item => (
              <>
              <div className="task-list" key={item.id} >
             {/* <span> <input type='checkbox'  data-filter="done"></input></span>   */}
            <span className='task-text' >{item.text}</span>
            <small className={`priority  ${item.priority}`}> {item.priority}</small>
            <span className='date'>{new Date().toLocaleDateString()}</span> 
            <small className='delete-btn' onClick={()=> deleteItem(item.id)}>🗑️</small>
          </div> 
         </>
          
        ))}
         
        {todoList.length === 0 && (
          
          <div className="lines">
             No tasks yet. Add one to get started!
          </div>
        )}
  </div>


    {/* sidebar code */}

        <div className='sidebar'>
        <div className='card'>
            <div className='title-name'> Statistics</div>
            <div className='item'>
                <span>Total</span>
                <span className='value'>{todoList.length}</span>
            </div>
             <div className='item'>
                <span>Active</span>
                <span className='value'>{todoList.filter(t =>! t.completed).length}</span>
            </div>
             <div className='item'>
                <span>Completed</span>
                <span className='value'>{todoList.filter(t=> t.completed).length}</span>
            </div>
             <div className='item'>
                <span>High Priority</span>
                <span className='value' id='value'>{todoList.filter(t=>t.priority ==="high").length}</span>
            </div>
        </div>

        <div className='card1'>
            <div className='title-name'> Actions</div>
            <div >
                <button className='action-buttons'>Clear Completed</button>
     
                <button className='btn-danger' onClick={ClearAll}>Clear All</button>
            </div>
        </div>
    </div>
        
  </div> 
  
    
)
}
export default Taskbar



