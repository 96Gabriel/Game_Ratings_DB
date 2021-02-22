import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './Game';
import Rate from './Rate';
import AddGame from './AddGame';

//let access_token = ''

function App() {
  /*let response = null
  fetch('https://id.twitch.tv/oauth2/token?client_id=z3tf2rhmcos3pib2uep4ppvnkx4ssh&client_secret=z4c03ctbdmi8u8jdgh31ppzuuyu361&grant_type=client_credentials', {
    method: 'POST'
  }).then(response => {
    let responseJSON = response
    console.log(responseJSON)
  })*/
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/game/:id'>
              <Game/>
            </Route>
            <Route path='/rate/:id'>
              <Rate/>
            </Route>
            <Route path='/add'>
              <AddGame/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
