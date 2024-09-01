import Login from './components/Login'
import useLocalStorage from './hooks/useLocalStorage'
import Dashboard from './components/Dashboard'

function App() {
  const [userId , setUserId] = useLocalStorage('userId')

  return userId ? <Dashboard userId={userId} /> : <Login onUserIdSubmit={setUserId} userId={userId} />
}

export default App
