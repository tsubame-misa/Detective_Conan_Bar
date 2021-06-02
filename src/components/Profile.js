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
import キャンティImg from "../img/キャンティ.PNG";
import コルンImg from "../img/コルン.PNG";

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
  {
    name: "キャンティ",
    img: キャンティImg,
  },
  {
    name: "コルン",
    img: コルンImg,
  },
];

function Profile({ data, n }) {
  const idx = imgData
    .map((item, i) => {
      if (item.name === data.name) {
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
      style={{
        height: "450px",
        width: "auto",
        minWidth: "250px",
        backgroundColor: n % 2 === 0 ? "rgb(44 45 49)" : "rgb(84 84 84)",
      }}
    >
      <h2 className="text-2xl text-center py-3">{data.name}</h2>
      <div className="flex p-3" style={{ height: "30%" }}>
        {idx[0] !== -1 ? (
          <div
            className="origin-center"
            style={{ width: "60vh", border: "none" }}
          >
            <img src={imgData[idx[0]].img}></img>
          </div>
        ) : (
          <div
            className="origin-center"
            style={{ width: "60vh", border: "none" }}
          >
            <img src={sampleImg}></img>
          </div>
        )}
        <p style={{ minHeight: "30%" }} className="text-sm origin-center px-2">
          {data.character}
        </p>
      </div>
      <div
        className="text-sm pt-5 px-4 origin-center"
        style={{ height: "35%" }}
      >
        {data.detail}
      </div>
      <div className="text-center pt-3 pb-5 has-text-danger">
        {data.data ? (
          <button className="button is-white is-hovered">
            <Link to={`/recipe/${data.name}`} className="has-text-black">
              カクテルを見る
            </Link>
          </button>
        ) : (
          <p style={{ color: "grey" }}>ごめんね。準備中だよ！</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
