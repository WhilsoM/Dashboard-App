import React from 'react'
import { LastTasks } from '../../components/last-tasks/LastTasks'
import { Productivity } from '../../components/productivity/Productivity'
import { ProjectsInProgress } from '../../components/projects-in-progress/ProjectsInProgress'
import s from './ui/TaskList.module.scss'

const TaskList = () => {
	return (
		<>
			<LastTasks />

      <div className={s.taskList__wrapper}>
        <Productivity />
        <ProjectsInProgress />
      </div>
		</>
	)
}

export default TaskList
