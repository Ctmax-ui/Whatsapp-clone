import Login from './components/Login'
import useLocalStorage from './hooks/useLocalStorage'
import Dashboard from './components/Dashboard'

function App() {
  const [userId , setUserId] = useLocalStorage('userId')
  const [userDetails , setUserDetails] = useLocalStorage('userDetails')

  return userId ? <div className=' relative '><div className="bg-green-700 absolute top-0 left-0 h-28 w-screen -z-10"></div><Dashboard userId={userId} userDetails={userDetails} /></div>  : <Login onUserIdSubmit={setUserId} onUserDetailsSubmit={setUserDetails} userId={userId} userDetails={userDetails}  />
}

export default App
