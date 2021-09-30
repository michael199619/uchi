import { createBrowserHistory } from "history";
import {Router} from "react-router";
import 'normalize.css';
import './App.css'
import Main from "./pages/Main";

const history = createBrowserHistory();

function App() {
  return (
      <Router history={history}>
        <Main />
      </Router>
  );
}

export default App;
