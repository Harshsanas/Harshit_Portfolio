/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { featuredPortfolio, bolgPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "blog",
      title: "Blogs",
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(featuredPortfolio);
        break;
      case "blog":
        setData(bolgPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id} key={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id}>
            <img src={d.img} alt="" />
            <h3>
              <a href={d.link} target="_blank">
                {d.title}
              </a>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
