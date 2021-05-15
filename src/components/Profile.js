import { Link } from "react-router-dom";
import "./style.css";

import ジンImg from "../img/ジン.PNG";
import ウォッカImg from "../img/ウォッカ.PNG";
import キールImg from "../img/キール.PNG";
import スコッチImg from "../img/スコッチ.PNG";
import ベルモットImg from "../img/ベルモット.PNG";
import ライImg from "../img/ライ.PNG";
import バーボンImg from "../img/バーボン.PNG";
import sampleImg from "../img/sample.PNG";
import シェリーImg from "../img/シェリー.PNG";
const imgData = [
  { name: "ジン", img: ジンImg },
  { name: "ウォッカ", img: ウォッカImg },
  { name: "キール", img: キールImg },
  { name: "スコッチ", img: スコッチImg },
  { name: "ベルモット", img: ベルモットImg },
  { name: "ライ", img: ライImg },
  { name: "バーボン", img: バーボンImg },
  {
    name: "シェリー",
    img: シェリーImg,
  },
];

function Profile(data) {
  const idx = imgData
    .map((item, i) => {
      if (item.name === data.data.name) {
        return i;
      } else {
        return -1;
      }
    })
    .filter((item) => item !== -1);
  if (idx.length === 0) {
    idx.push(-1);
  }

  return (
    <div className="border" style={{ height: "350px" }}>
      <h2 className="text-xl text-center py-2">{data.data.name}</h2>
      <div className="flex">
        {idx[0] !== -1 ? (
          <img
            className="origin-center"
            src={imgData[idx[0]].img}
            style={{ width: "40%", height: "40%", padding: "0px 10px" }}
          ></img>
        ) : (
          <img
            className="origin-center"
            src={sampleImg}
            style={{ width: "35%", height: "35%", paddingRight: "0px 15px" }}
          ></img>
        )}
        <p
          className="text-sm"
          style={{ minHeight: "30%" }}
          className="origin-center"
        >
          {data.data.character}
        </p>
      </div>
      <div className="text-sm p-4 origin-center">{data.data.detail}</div>
      <div className="text-center">
        <Link to={`/recipe/${data.data.name}`}>カクテルを見る</Link>
      </div>
    </div>
  );
}

export default Profile;
