import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = (props) => {
  const [complete, setComplete] = useState(props.isComplete);
  const buttonClass = complete ? '--completed' : '';
  // const [deleted, setDeleted] = useState(isDeleted);
  // const deleteClass = complete ? 'tasks_item_remove--deleted' : '';
  return (
    <div>
      <li className="tasks__item">
        <button
          className={`tasks__item__toggle${buttonClass}`}
          onClick={() => setComplete(!complete)}
        >
          {props.title}
        </button>
        <button className="tasks_item_remove button" onClick={() => props.isDeleted(props.id)}>x</button>
      </li>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  isDeleted: PropTypes.bool.isRequired,
};
export default Task;