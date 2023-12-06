import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SubBar from './components/SubBar';

function App()
{
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SubBar />

      <div className='flex justify-around w-full flex-wrap max-sm:gap-1'>
        <div className=''>
          <Card image={"image1"} title={"Arno Wood Chair"} subtitle={"New in Rochester"} colorArray={["bg-blue-500", "bg-red-500", "bg-green-500"]} price={"$910"} />
        </div>
        <div>
          <Card image={"image1"} title={"Arno Wood Chair"} subtitle={"New in Rochester"} colorArray={["bg-blue-500", "bg-red-500", "bg-green-500"]} price={"$910"} />
        </div>
        <div>
          <Card image={"image1"} title={"Arno Wood Chair"} subtitle={"New in Rochester"} colorArray={["bg-blue-500", "bg-red-500", "bg-green-500"]} price={"$910"} />
        </div>

      </div>

    </div>
  );
}

export default App;
