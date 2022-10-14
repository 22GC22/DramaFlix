import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'components/navbar'
import NavBar from './components/navbar';
import Banner from './components/banner';
import Release from './components/release';
import WatchNow from './components/watchNow';
import Footer from './components/footer';
import Continue from './components/continue';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Continue />
      <Release />
      <WatchNow />
      <Footer />
    </div>
  );
}

export default App;
