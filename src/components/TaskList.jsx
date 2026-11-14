import React from 'react'
export default function TaskList({tasks, updateTask, deleteTask}) {
    const toggleTaskCompletion = (index) => {
        const updateTask={...tasks[index], completed: !tasks[index].completed};
        updateTask(updateTask, index);
    };
    return (
        <ul className='task-list'>
            {tasks.map((task) => (
                <li key={index} className={task.completed ? 'completed' : ''}>
                    <div>
                        <span>{task.text}</span>
                        <small>{task.priority},{task.category}</small>
                    </div>
                    <div>
                        <button onClick={() => toggleTaskCompletion(task.index)}>{task.completed ? 'Undo' : 'Complete'}</button>
                        <button>Edit</button>
                        <button>Delete</button>

                    </div>
                </li>
            ))}

        </ul>
    )
}
