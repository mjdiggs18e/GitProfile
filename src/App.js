import LandingPage from './components/LandingPage';
import UserDetails from './components/UserDetails';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/user/:id'>
          <UserDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
