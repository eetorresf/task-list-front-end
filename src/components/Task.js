import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = (props) => {
  // const [complete, setComplete] = useState(props.isComplete);
  const buttonClass = props.isComplete ? '--completed' : '';
 
  return (
    <div>
      <li className="tasks__item">
        <button
          className={`tasks__item__toggle${buttonClass}`}
          onClick={() => props.setComplete(props.id)}
        >
          {props.title}
        </button>
        <button className="tasks_item_remove button" onClick={() => props.onUnregister(props.id)} >x</button>
        
      </li>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  setComplete: PropTypes.func.isRequired,
  onUnregister: PropTypes.func.isRequired,
};
export default Task;