import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/home';
import NavigationBar from './components/navbar';
import VideoPage from './pages/video/video';
import ProfilePage from './pages/profile/profile';

function App() {
    return (
        <BrowserRouter>
            <div id="App" className="App">
                <NavigationBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/video/:videoId" component={VideoPage} />
                    <Route path="/profile" component={ProfilePage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
