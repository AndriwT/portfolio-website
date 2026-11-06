import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../views/HomePage";
import NavBar from "./NavBar";
import Footer from "./Footer";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <main id="main" className="not-found shell">
        <p className="eyebrow">404</p>
        <h1>That page isn’t here.</h1>
        <p className="lede">The work, the story, and the links all live on the home page.</p>
        <a className="btn" href="/">
          Back home
        </a>
      </main>
      <Footer />
    </>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/projects"
          render={() => <Redirect to={{ pathname: "/", hash: "#work" }} />}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
