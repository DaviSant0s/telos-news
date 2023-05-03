import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import HeaderNews from './components/headerNews';
import Home from './pages/home';
import PostNews from './pages/postNews';
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
