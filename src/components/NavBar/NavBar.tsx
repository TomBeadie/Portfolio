import Classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <div>
        <a href="#" rel="home" id="logo">
          <span>Tom Beadie</span>
        </a>
      </div>
      <div className={Classes.potato}></div>
      <div className="coords">
        <p>47.6735° N, 116.7812° W</p>
      </div>
      <div className="title">Frontend Web Developer</div>
    </>
  );
};
