import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Task } from "../interfaces/interface";

export default function AddTask() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [addTaskStatus, setAddTaskStatus] = useState(false);
    const [taskName, setTaskName] = useState("");
    function clickAddTask() {
        setAddTaskStatus(!addTaskStatus)
    }
    function addTask() {
        const newTask: Task = {
            id: Date.now(),
            name: taskName,
            completed: false
        };
        setTasks((prev) => [...prev, newTask]);
    }
    return (
        <div className="add-task">
            {addTaskStatus ?
                <div className="add-task__field">
                    <textarea onChange={(e) => { setTaskName(e.target.value) }} value={taskName} className="add-task__task-name" name="task-name"></textarea>
                    <div className="add-task__buttons">
                        <span className="add-task__close" onClick={clickAddTask}>close</span>
                        <span className="add-task__save" onClick={addTask}>save</span>
                    </div>
                </div> : null
            }
            <p className="add-task__button" onClick={clickAddTask}>
                <FontAwesomeIcon icon={faPlus} className="add-task__icon" />
                Add task
            </p>
        </div>
    )
}