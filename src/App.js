import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import HeaderNews from './components/headerNews';
import Home from './pages/home';
import PostNews from './pages/postNews';

function App() {
  return (
    <div className="App">
      {/* <HeaderNews/> 
      <PostNews/>  */}
      <Header/>
      {/* <Home/> */}
      <Footer/>
    </div>
  );
}

export default App;
