export default function Card({ img, title, text }) {
  return (
    <div className="card">
      <a href="">
        <img src={img} alt="" />
      </a>
      <div className="card-text">
        <h2>
          <a href="">{title}</a>
        </h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
