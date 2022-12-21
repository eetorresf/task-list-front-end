import React from 'react';
import { useEffect, useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios'; 

const kBaseUrl = 'https://task-list-api-c17.herokuapp.com';

const convertFromApi = (apiTask) => {
  // eslint-disable-next-line camelcase
  const {is_complete, ...rest} = apiTask;
  // eslint-disable-next-line camelcase
  const newTask = {isComplete: is_complete, ...rest};
  return newTask;
};

const setCompleteApi = (id) => {
  return axios.patch(`${kBaseUrl}/tasks/${id}/mark_complete`)
  .then(response => {
    return convertFromApi(response.data);
  })
  .catch(error => {
    console.log(error);
  });
};

const setIncompleteApi = (id) => {
  return axios.patch(`${kBaseUrl}/tasks/${id}/mark_incomplete`)
  .then(response => {
    return convertFromApi(response.data);
  })
  .catch(error => {
    console.log(error);
  });
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
  const [isComplete, setIsComplete] = useState(!'');
  const [isIncomplete, setIsIncomplete] = useState(!'');

  // const setComplete = id => {
  //   if (task.isComplete === false) {
  //     return setCompleteApi(id) 
  //     .then(taskResult => {
  //       setTaskData(task);
  //     })
  //   else (task.isComplete === true) {
  //     return setIncompleteApi(id)
  //     .then(taskResult => {
  //       setTaskData(task);
  //     });
  //   };

  //   return setCompleteApi(id)
  //   .then(taskResult => {
  //     setTaskData(taskData => taskData.map(task => {
  //       if (task.isComplete === false) {
  //         return taskResult;
  //       } else {
  //         return setIncompleteApi(id);
  //       }
  //     }));
  //   });
  // };

  const setComplete = id => {
    return setCompleteApi(id) 
    .then(taskResult => {
      return getAllTasks();
    });
  };

  const setIncomplete = id => {
    return setIncompleteApi(id) 
    .then(taskResult => {
      return getAllTasks();
    });
  };

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
      <TaskList 
        taskData={taskData} 
        onUnregister={unregisterTask} 
        setComplete={setComplete} 
        setIncomplete={setIncomplete} 
      />  
    </div>
  );
}

export default App;