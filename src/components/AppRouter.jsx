import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "../views/HomePage";
import ProjectsPage from "../views/ProjectsPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
