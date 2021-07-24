import { useEffect, useState } from "react";
import "./works.scss";
import { TechStack } from "../../data";

export default function Works() {
  const [selected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "tech":
        setData(TechStack);
        break;
      default:
        setData(TechStack);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="works">
      <h1>TECH STACK LANGUAGE</h1>
      
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id}>
            <img className="techstackimg" src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
