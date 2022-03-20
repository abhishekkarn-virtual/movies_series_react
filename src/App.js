import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header"
import {Home} from "./views/Home";
import { MoviesPage } from './views/Movies';
import { SeriesPage } from './views/Series';
import {Switch,Route} from "react-router-dom";


function App() {
  return (
    <Switch>
      <Route path='/movies' exact>
        <MoviesPage/>
      </Route>

      <Route path='/series' exact>
        <SeriesPage/>
      </Route>

      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
