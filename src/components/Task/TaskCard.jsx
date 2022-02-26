import { useState } from 'react';

import { TaskCardTitle } from './TaskCardTitle';
import { TaskCardDeleteButton } from './Button/TaskCardDeleteButton';
import { TaskAddInput } from './Input/TaskAddInput';
import { Tasks } from './Tasks';

export const TaskCard = () => {
  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="taskCard">
      <div className='taskCardHeader'>
        <TaskCardTitle />
        <TaskCardDeleteButton />
      </div>
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        setTaskList={setTaskList}
        taskList={taskList}
      />
      <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};
