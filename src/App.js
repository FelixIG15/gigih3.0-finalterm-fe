import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/home';
import NavigationBar from './components/navbar';
import VideoPage from './pages/video/video';

function App() {
  return (
    <Router>
      <Switch>
        <div id="App" className="App">
          <NavigationBar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/video/:videoId">
            <VideoPage />
          </Route>
          <Route path="/profile/:profileId">
            <h1>Profile Page</h1>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
