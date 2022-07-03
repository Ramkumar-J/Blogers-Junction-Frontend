import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import Blogs from './Routes/Blogs';
import YourBlog from './Routes/YourBlog';
import Footer from './Components/Footer';
import ReadBlog from './Components/ReadBlog';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/yourblog" element={<YourBlog />}></Route>
          <Route path="/readblog" element={<ReadBlog />}></Route>
        </Routes>
      </main>
      {/* <footer>
        <Footer></Footer>
      </footer> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
