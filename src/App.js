
import './App.css';
import { Route,Routes } from 'react-router-dom';
import MobilePage from './Pages/MobilePage';
import HomePage from './Pages/HomePage';
import ComputerPage from './Pages/ComputerPage';
import WatchesPage from './Pages/WatchesPage';
import MobileSingle from './single/MobileSingle';
import NavBar from './components/NavBar';
import LaptopSingle from './single/LaptopSingle';
import WatchSingle from './single/WatchSingle';
import MenFashionPage from './Pages/MenFashionPage';
import MenSingle from './single/MenSingle';
import WomenFashionPage from './Pages/WomenFashionPage';
import WomenSingle from './single/WomenSingle';
import AcPage from './Pages/AcPage';
import AcSingle from './single/AcSingle';
import TvPage from './Pages/TvPage';
import TvSingle from './single/TvSingle';
import FurniturePage from './Pages/FurniturePage';
import FurnitureSingle from './single/FurnitureSingle';
import UserCart from './UserCart';
 
function App() {
  <NavBar />
  return (
      <div className='body'>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/mobiles' element={<MobilePage />}/>
          <Route path='/laptops' element={<ComputerPage />}/>
          <Route path='/watches' element={<WatchesPage />}/>
          <Route path='/menwear' element={<MenFashionPage />}/>
          <Route path='/womenwear' element={<WomenFashionPage />}/>
          <Route path='/ac' element={<AcPage />}/>
          <Route path='/tv' element={<TvPage />}/>
          <Route path='/furniture' element={<FurniturePage />}/>
          
          <Route path='/mobiles/:id' element={<MobileSingle />}/>
          <Route path='/laptops/:id' element={<LaptopSingle />}/>
          <Route path='/watches/:id' element={<WatchSingle />}/>
          <Route path='/menwear/:id' element={<MenSingle />}/>
          <Route path='/womenwear/:id' element={<WomenSingle />}/>
          <Route path='/ac/:id' element={<AcSingle />}/>
          <Route path='/tv/:id' element={<TvSingle />}/>
          <Route path='/furniture/:id' element={<FurnitureSingle />}/>

          <Route path='/cart' element={<UserCart />}/>
        </Routes>
      </div>
  );
}  
export default App;