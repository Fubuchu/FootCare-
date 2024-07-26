//Tyler Nguyen
//Last updated: 7/25/24 10:50pm

//import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
import Menu from "./components/Menu";
import "./App.css";

// Line 17 ~ 23 is temporary until I find a more effiecient method - Tyler

function App() {
  return (
    <div className="App">
      <html>
        <header />
        <nav className="navBar">
          <ul className="nav-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <body>
          <Menu />
        </body>
        <footer />
      </html>
    </div>
  );
}
export default App;
