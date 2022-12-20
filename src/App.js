import React from 'react';
import { useEffect, useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios'; 

const TASKS = [
  {
    id: 1,
    title: 'Put up Christmas Tree',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Christmas Shopping',
    isComplete: true,
  },
];

const kBaseUrl = 'http://localhost:5000';

const getAllTasksApi = () => {
  return axios.get(`${kBaseUrl}/tasks`)
  .catch(err => {
    console.log(err);
  });
};

const unregisterTaskApi = (id) => {
  return axios.delete(`${kBaseUrl}/tasks/${id}`)
  .catch(error => {
    console.log(error);
  });
};
function App () {
  const [taskData, setTaskData] = useState([]);

  const getAllTasks = () => {
    return getAllTasksApi()
    .then(tasks => {
      setTaskData(tasks);
    });
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const unregisterTask = id => {
    return unregisterTaskApi(id)
    .then(taskResult => {
      return getAllTasks();
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
        <TaskList tasks={TASKS} onUnregister={unregisterTask} />  
    </div>
  );
}

export default App;