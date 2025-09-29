import { useState } from 'react';
import './App.css';

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // eslint-disable-next-line
  const [isComplete, setIsComplete] = useState(false);

  // Task Addition
  const AddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { name: task.trim(), isComplete: false}])
      setTask("");
      setIsComplete(false);
    }
  };

  // Task Deletion
  const DeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  };
  

  // Task Completion
  const MarkAsComplete = (index) => {
    const completedTasks = [...tasks];
    completedTasks[index].isComplete = !completedTasks[index].isComplete;
    setTasks(completedTasks);
  };

  return (
     <div className="container">
      <header>
        <h2 className="header-title">To-Do List</h2>
        <p className="header-subtitle">Complete tasks
          using this simple to-do list
        </p>
      </header>

      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What's the plan?"
        />
        <button className="add-btn" onClick={AddTask}>Add Task</button>
      </div>
     
      {tasks.length === 0 
      ? <p className="no-task-msg">It's empty here...</p>
      :  
      <div className="task-container"> 
        {tasks.map((item, index) => (
          <div key={index} className="task-card">
            <input 
              type="checkbox"
              checked={item.isComplete}
              onChange={() => MarkAsComplete(index)}
              />

              <span style={{textDecoration: item.isComplete ? "line-through" : "none",
                        textDecorationColor: item.isComplete ? "black" : "none",
                        textDecorationThickness: item.isComplete ? "2px" : "initial",}}
             
              >
              {item.name}
              </span>
              <span className="del-btn-wrapper">
                <button className="del-btn" onClick={() => DeleteTask(index)}>✕</button>
              </span>
           
          </div>
        ))}
      </div>
    }
    </div>
  );
}

export default App;
