import { Link } from "react-router-dom";
import { data } from "../data/member";
import Profile from "../components/Profile";

function Home() {
  console.log(data);
  return (
    <div className="section has-text-white">
      <h1
        className=" text-center text-3xl border-b-2"
        style={{ fontFamily: "fantasy" }}
      >
        menu
      </h1>
      <div className="container" style={{ paddingTop: "2rem" }}>
        <div className="columns is-vcentered is-multiline">
          {data.map((item, key) => {
            return (
              <div className="column is-4" key={key}>
                <Profile data={item} key={key} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
