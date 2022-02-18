import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
const TaskList = (props) => {
  return props.taskList.map((val, idx) => {
    let projectName = `projectName-${idx}`,
      task = `task-${idx}`,
      taskNotes = `taskNotes-${idx}`;
    return (
      <tr key={val.index}>
        <td>
          <input
            type="date"
            name="date"
            id={task}
            data-id={idx}
            className="form-control"
            placeholder="Enter Date"
          />
        </td>
        <td>
          <input
            type="text"
            name="task"
            id={task}
            data-id={idx}
            className="form-control "
          />
        </td>
        <td>
          <input
            name="taskNotes"
            id={taskNotes}
            data-id={idx}
            className="form-control"
          ></input>
        </td>

        <td>
          {idx === 0 ? (
            <button
              onClick={() => props.add()}
              type="button"
              className="btn btn-primary text-center"
            >
              <AiOutlinePlus size={20} />
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => props.delete(val)}
            >
              <IoIosClose size={22} />
            </button>
          )}
        </td>
      </tr>
    );
  });
};
export default TaskList;
