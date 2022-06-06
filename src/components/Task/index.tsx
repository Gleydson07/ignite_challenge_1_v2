import React from 'react';
import { Trash } from 'phosphor-react';

import styles from './styles.module.scss';

interface TaskProps {
  id: number,
  description: string,
  active: boolean,
  onChange: () => void,
  onRemove: () => void,
}

const Task: React.FC<TaskProps> = ({id, description, active, onChange, onRemove}) => {
  return (
    <div id={String(id)} className={`${styles.task} ${!active ? styles.finished : ''}`}>
      <div>
        <input type="checkbox" checked={active} onChange={onChange}/>
        <p>{description}</p>
      </div>
      <button onClick={onRemove}>
        <Trash size={20} />
      </button>
    </div>
  );
}

export default Task;