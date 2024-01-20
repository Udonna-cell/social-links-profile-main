import profile from "./assets/images/avatar-jessica.jpeg";
import "./App.css";

function Buttton({name}) {
  return (
    <button>{name}</button>
  )
}
function App() {
  return (
    <section className="card">
      <figure>
        <img src={profile} alt="profile" draggable="false" />
      </figure>
      <h1>Jessica Randall</h1>
      <p className="location">London, United Kingdom</p>
      <p>"Front-end developer and avid reader."</p>
      <Buttton name="GitHub" />
      <Buttton name="Frontend Mentor" />
      <Buttton name="LinkedIn" />
      <Buttton name="Twitter" />
      <Buttton name="Instagram" />
    </section>
  );
}

export default App;
