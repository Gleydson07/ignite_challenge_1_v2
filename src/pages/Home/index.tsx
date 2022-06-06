import React, { useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';

import styles from './styles.module.scss';

import {PlusCircle} from "phosphor-react";
import Task from '../../components/Task';

import clipboardImg from '../../assets/clipboard.svg'

interface TaskItemProps {
  id: number,
  description: string,
  active: boolean
}

const Home: React.FC = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([] as TaskItemProps[]);

  const handleCreateTask = () => {
    const newTask = {
      id: tasks.length+1,
      description: task,
      active: false
    }

    setTasks([...tasks, newTask])
    setTask('')
  }

  const handleDeleteTask = (id: number) => {
    const newTasks = tasks.filter(item => item.id !== id);
    setTasks(newTasks)
  }

  const handleToggleActiveTask = (id: number) => {
    const allTasks = tasks.filter(item => item.id !== id);
    const changeTaskIndex = tasks.findIndex(item => item.id === id)
    setTasks([
      ...allTasks, 
      {
        ...tasks[changeTaskIndex], 
        active: !tasks[changeTaskIndex].active
      }
    ])
  }

  const countTasksCreated = () => {
    return tasks.length
  }

  const countTasksFinished = () => {
    return `${tasks.filter(item => !item.active).length} de ${tasks.length}`
  }

  return (
    <>
      <Header/>
      <div className={styles.containerInput}>
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder='Adicione uma nova tarefa'
        />
        <button className={styles.button} onClick={handleCreateTask}>
          Criar
          <PlusCircle size={24} />
        </button>
      </div>

      <div className={styles.containerList}>
        <div className={styles.informations}>
          <strong>Tarefas criadas <span>{countTasksCreated()}</span></strong>
          <strong>Concluídas <span>{countTasksFinished()}</span></strong>
        </div>

        <div className={styles.tasks}>
          {tasks.length ? tasks.map(item => (
            <Task
              key={item.id}
              id={item.id}
              description={item.description}
              active={item.active}
              onChange={() => handleToggleActiveTask(item.id)}
              onRemove={() => handleDeleteTask(item.id)}
            />))
            :
            <div className={styles.clipboard}>
              <img src={clipboardImg} alt="" />
              <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default Home;