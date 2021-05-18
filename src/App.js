import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import Recipe from "./page/Recipe";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <section
          className="section bg-black"
          style={{ paddingTop: "24px", paddingBottom: "24px" }}
        >
          <div className="container">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/recipe/:name" exact>
                <Recipe />
              </Route>
            </Switch>
          </div>
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
