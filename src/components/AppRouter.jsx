import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../views/HomePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/aboutme" component={AboutmePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
