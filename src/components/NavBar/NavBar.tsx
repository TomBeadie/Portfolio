import Classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <div className={Classes["navbar-wrapper"]}>
        <a href="#" rel="home" id="logo">
          <span className={Classes.name}>
            Tom <br></br>
            <span className={Classes['semi-bold']}>Beadie</span>
          </span>
        </a>

        <div>
          <p className="coords">47.6735° N, 116.7812° W</p>
        </div>
        <div className="title">Frontend Web Developer</div>
        <div className={Classes.contact}>
          <a href="#">
            <button>Pen Pals?</button>
          </a>
        </div>
      </div>
    </>
  );
}
