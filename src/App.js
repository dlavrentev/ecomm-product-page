import './App.css';
import Header from './Components/Header/Header';
import Carussel from './Components/Body/Carussel/Carussel';
import Description from './Components/Body/Description/Description';
import MediaQuery from 'react-responsive';
import CarusselDesktop from './Components/Body/Carussel/CarusselDesktop';


function App() {
  const slides = [
    {url: 'http://localhost:3000/image-product-1.jpg', title: 'Shoe1'},
    {url: 'http://localhost:3000/image-product-2.jpg', title: 'Shoe2'},
    {url: 'http://localhost:3000/image-product-3.jpg', title: 'Shoe3'},
    {url: 'http://localhost:3000/image-product-4.jpg', title: 'Shoe4'},
  ]
  return (
    <div className="App">
      <Header />
      <CarusselDesktop />
      <MediaQuery maxWidth={700}>
      <Carussel slides={slides} />
      </MediaQuery>
      <Description />
    </div>
  );
}

export default App;
