
import './App.css';
import citynight from "./assets/citynight.png"
import Profile from './Profile';
import Journey from './Journey';
import Project from './Project';

function App() {
  return (
    <>
      <img className="profile__background" src={citynight} alt="background" />
      <div className="container">
        <Profile />
        <Journey />
        <Project />
      </div>
    </>
  );
}

export default App;
