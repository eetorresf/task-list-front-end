import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';


const TaskList = (props) => {
  // console.log(props.taskData);
    return (
    <>
      <ul>
      {props.taskData.map((task) => (
        <Task 
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          setComplete={props.setComplete}
          onUnregister={props.onUnregister}
          setIncomplete={props.setIncomplete}
        />
      ))}
      </ul>
    </>
  );
  // return <ul className="tasks__list no-bullet">{getTaskListJSX(tasks)}</ul>;
};
TaskList.propTypes = {
  taskData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
      // isDeleted: PropTypes.bool.isRequired,
    })),
    setComplete: PropTypes.func.isRequired,
    onUnregister: PropTypes.func.isRequired,
    setIncomplete: PropTypes.func.isRequired,
};
export default TaskList;
