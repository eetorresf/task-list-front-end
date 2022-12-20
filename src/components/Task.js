import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = ({ id, title, isComplete, isDeleted }) => {
  const [complete, setComplete] = useState(isComplete);
  const buttonClass = complete ? 'tasks_item_toggle--completed' : '';
  // const [deleted, setDeleted] = useState(isDeleted);
  return (
    <div>
      <li className="tasks__item">
        <button
          className={tasks__item__toggle ${buttonClass}}
          onClick={() => setComplete(!complete)}
        >
          {title}
        </button>
        <button className="tasks_item_remove button">x</button>
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