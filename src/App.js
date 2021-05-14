import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function Recipe() {
  return <div>recipe</div>;
}

function Footer() {
  return <div>footer</div>;
}

function App() {
  return (
    <Router>
      <Header />
      <section className="section has-background-warning-light">
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/recipe" exact>
              <Recipe />
            </Route>
          </Switch>
        </div>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
