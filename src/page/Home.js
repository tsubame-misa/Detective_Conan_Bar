import { Link } from "react-router-dom";
import { data } from "../data/member";
import img from "../img/img.PNG";

function Home() {
  console.log(data);
  return (
    <div className="section has-text-white">
      <h1 className=" text-center text-3xl border-b-2">menue</h1>
      <div className="container" style={{ paddingTop: "2rem" }}>
        <div className="grid  grid-cols-3 grid-rows-6 gap-5">
          {data.map((item, key) => {
            return (
              <div key={key} className="border">
                <h2 className="text-xl text-center">{item.name}</h2>
                <div className="flex">
                  <img
                    src={img}
                    alt=""
                    style={{ width: "25%", height: "25%" }}
                  />
                  <p className="text-sm" style={{ minHeight: "30%" }}>
                    {item.character}
                  </p>
                </div>
                <div className="text-sm p-2">{item.detail}</div>
                <div className="text-center">
                  <Link to={`/recipe/${item.name}`}>カクテルを見る</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
