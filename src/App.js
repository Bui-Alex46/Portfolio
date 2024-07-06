import logo from './logo.svg';
import './App.css';
import profile from './images/profile_pic.JPG'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="header-container header-container-s header-container-m">
          <h1 className="name name-s name-m">Alex Bui</h1>
          <h1 className="header-2 header-2-s header-2-m">
            Web Developer / Full-Stack Engineer
          </h1>
        </div>
        <img src={profile} alt="profile-pic" className="profile-pic profile-pic-s profile-pic-m" />
      </div>
    </div>
    
  );
}


export default App;
