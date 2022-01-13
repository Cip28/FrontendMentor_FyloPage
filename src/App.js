
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="">
        <div className="heading">
          <Navbar />
          <Header />
        </div>     
      <div className='content'>
        <Content />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
