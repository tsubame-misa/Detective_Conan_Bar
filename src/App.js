import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import Recipe from "./page/Recipe";

function Footer() {
  return (
    <div
      className="bg-black text-center  has-text-white p-5 text-sm"
      style={{ backgroundColor: "rgb(44 45 49)", marginTop: "1.5rem" }}
    >
      <p>このサイトは以下のAPIを使用しました</p>
      <a href="https://cocktail-f.com/api">Cocktail -f liquor</a>
      <p>また以下の記事やwebサイト様を参考に作成しています</p>
      <ul>
        <li>
          <a href="https://cocktail-f.com/">Cocktail -f liquor</a> &emsp;
          <a href="https://www.barrel365.com/type/">
            世界7大ウイスキーの種類と人気銘柄一覧/味の違いと特徴
          </a>
          <br />
          <a href="https://www.conan-portal.com/#newsContent">
            名探偵コナン 原作公式サイト
          </a>
          <br />
          <a href="https://pickup.cinemacafe.net/articles/2504">
            『名探偵コナン』コナンが戦う「黒の組織」のメンバー23名を大紹介！
          </a>
          <br />
          <a href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8">
            Wikipedia
          </a>
        </li>
      </ul>
    </div>
  );
}

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
