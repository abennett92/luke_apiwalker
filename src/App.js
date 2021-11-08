import Display from './components/Display';
import Search from './components/Search';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

const App = (props) => {

  return (
    <BrowserRouter>
      <div><h1>Welcome!</h1></div>
      <Search></Search>
        <Switch>

          <Route exact path="/:category/:id">
            <Display></Display>
          </Route>

        </Switch>
      </BrowserRouter>
  );
}
export default App;
