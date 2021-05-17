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
import キュラソーImg from "../img/キュラソー.PNG";

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
  {
    name: "キュラソー",
    img: キュラソーImg,
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
    <div
      //className="border"
      style={{
        height: "auto",
        backgroundColor:
          data.data.name.length % 2 === 0 ? "rgb(44 45 49)" : "#232323",
      }}
    >
      <h2 className="text-2xl text-center py-3">{data.data.name}</h2>
      <div className="flex p-3 ">
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
        <p style={{ minHeight: "30%" }} className="text-sm origin-center px-2">
          {data.data.character}
        </p>
      </div>
      <div className="text-sm pt-5 px-4 origin-center">{data.data.detail}</div>
      <div className="text-center pt-3 pb-5 has-text-danger">
        {data.data.data ? (
          <Link to={`/recipe/${data.data.name}`} className="has-text-link">
            カクテルを見る
          </Link>
        ) : (
          <p style={{ color: "grey" }}>ごめんね。準備中だよ！</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
