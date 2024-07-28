import React from 'react'
import { LastTasks } from '../../components/last-tasks/LastTasks'
import { Productivity } from '../../components/productivity/Productivity'
import { ProjectsInProgress } from '../../components/projects-in-progress/ProjectsInProgress'

const TaskList = () => {
	return (
		<>
			<LastTasks />
			<Productivity />
			<ProjectsInProgress />
		</>
	)
}

export default TaskList
