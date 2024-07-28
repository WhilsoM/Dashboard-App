import React, { useState } from 'react'
import s from './ui/TaskItem.module.scss'

export const TaskItem = ({ task }) => {
  const [stateStatus, setStateStatus] = useState('In progress')
  
  const getStyleForStatus = () => {  
    if (stateStatus === 'In progress') {
      return s.inProgress
    }
  
    return stateStatus === 'Done' ? s.done : ''
  }
  
  const switchStatus = (e) => {
    const isChecked = e.target.checked
    
    if (isChecked) setStateStatus('Done')
    else setStateStatus('In progress')
  }

  return (
    <div className={s.tasks__wrapper}>
      <div className={s.tasksWrapper__checkbox_name}>
        <input 
          type="checkbox"
          className='checkbox'
          onChange={switchStatus} 
        />
        
        <p className={s.name}>{task.name}</p>
      </div>

      <div className={s.admin__right}>
        <p className={s.admin}>{task.admin}</p>
      </div>

      <div>
        <p className={s.members}>{task.members}</p>
      </div>

      <div>
        <p 
          className={`${s.status} ${getStyleForStatus()}`}
        >
          {stateStatus}
        </p>
      </div>

      <div>
        <p className={s.runTime}>{task.runTime}</p>
      </div>

      <div className={s.finishDate__wrapper}>
        <p className={s.finishDate}>{task.finishDate}</p>
      </div>
    </div>
  )
}


