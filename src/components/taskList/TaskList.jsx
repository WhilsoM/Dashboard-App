import React from 'react'
import { TASKS } from '../../constants/constants'
import { TaskItem } from '../task-item/TaskItem'

export const TaskList = () => {
  return (
    <div>
      {TASKS.map(task => (
        <TaskItem key={task.name + task.admin} task={task} />
      ))}
    </div>
  )
}
