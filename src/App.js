import './App.css';
import Login from './components/Login';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if(isLoading) return <div>Loading...</div>
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
