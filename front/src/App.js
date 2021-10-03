import {Route, Switch} from "react-router";
import 'normalize.css';
import './App.css'
import Theme from "./pages/Theme";
import Home from "./pages/Home";
import Sidebar from "./component/Sidebar";
import LayoutWithtSidebar from "./component/layouts/LayoutWithSidebar";

function App() {
    const Content = () => (
        <Switch>
            <Route path="/find" component={Theme} />
            <Route path="/" component={Home} />
        </Switch>
    )

  return (
      <LayoutWithtSidebar sidebar={ <Sidebar /> } main={ <Content /> } />
  );
}

export default App;
