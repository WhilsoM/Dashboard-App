import React from 'react'

import { TaskList } from '../taskList/TaskList'
import s from './ui/LastTasks.module.scss'

export const LastTasks = () => {
  return (
    <section className={s.tasks}>
      <div>
				<h2>Last tasks</h2>
        <p className={s.proceedResolve}>
          <span className={s.total}>117 total,</span>
          {' '}
          proceed to resolve them
        </p>

        <div className={s.status}>
          <div className={s.status__wrapper}>
            <input className='checkbox' type="checkbox" />
            <p>Name</p>
          </div>
          
          <div className={s.admin_right}>
            <p>Admin</p>
          </div>

          <div>
            <p>Members</p>
          </div>

          <div>
            <p>Status</p>
          </div>

          <div>
            <p>Run time</p>
          </div>

          <div className={s.flexEnd}>
            <p>Finish date</p>
          </div>
        </div>

        <TaskList />
      </div>
		</section>
  )
}
