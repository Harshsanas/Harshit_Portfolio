import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "B.K. Birla College, Kalyan",
      title: "TYBSc (Comp. Science)",
      img: "https://www.jagranjosh.com/imported/images/E/Articles/B-K-Birla-College-in-Kalyan-got-Autonomous-Status-by-UGC-and-University-of-Mumbai.jpg",
      duration: "2014 - 2017.",
    },
    {
      id: 2,
      name: "Masai School",
      title: "Full Stack Web Development",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAoE0up6ZDDJEB17bl7u1bolHaRFU2SnMQ4LhBKiEC0wSzZLqKih84aDbkoBnSivhJ34&usqp=CAU",
      featured: true,
      duration: "Jan 2021 - August 2021",
    },
    {
      id: 3,
      name: "Model College, Kalyan",
      title: "HSc (Information Technology)",
      img: "https://cdn5.vectorstock.com/i/1000x1000/74/94/black-white-alphabet-letter-mc-m-c-logo-icon-vector-20647494.jpg",
      duration: "2012 - 2014.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>EDUCATION</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
              <h5>{d.duration}</h5>
            </div>
            <div>{d.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
