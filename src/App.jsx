import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Chat from './pages/chat/Chat'
import Dashboard from './pages/dashboard/Dashboard'
import Notifications from './pages/notifications/Notifications'
import Projects from './pages/projects/Projects'
import Services from './pages/services/Services'
import TaskList from './pages/task-list/TaskList'

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='projects' element={<Projects />} />
          <Route path='task-list' element={<TaskList />} />
          <Route path='services' element={<Services />} />
          <Route path='notifications' element={<Notifications />} />
          <Route path='chat' element={<Chat />} />
        </Route>
      </Routes>
	)
}

export default App
