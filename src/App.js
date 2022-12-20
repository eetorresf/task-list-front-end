import React from 'react';
import { useEffect, useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios'; 

// const TASKS = [
//   {
//     id: 1,
//     title: 'Put up Christmas Tree',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Christmas Shopping',
//     isComplete: true,
//   },
// ];

const kBaseUrl = 'https://task-list-api-c17.herokuapp.com';

const convertFromApi = (apiTask) => {
  // eslint-disable-next-line camelcase
  const {is_complete, ...rest} = apiTask;
  // eslint-disable-next-line camelcase
  const newTask = {isComplete: is_complete, ...rest};
  return newTask;
};

const getAllTasksApi = () => {
  return axios.get(`${kBaseUrl}/tasks`)
  .then(response => {
  return response.data.map(convertFromApi);
})
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
  const 

  const getAllTasks = () => {
    return getAllTasksApi()
    .then(task => {
      setTaskData(task);
      // console.log(task);
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
      <TaskList taskData={taskData} onUnregister={unregisterTask} onSetComplete={setComplete} />  
    </div>
  );
}

export default App;