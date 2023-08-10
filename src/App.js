
import './App.css';
import Corousel from './fragments/Corousel';
import Download from './fragments/Download';

import FurnitureRange from './fragments/FurnitureRange';
import IconsHomepage from './fragments/IconsHomepage';
import MoreToExplore from './fragments/MoreToExplore';
import PopularAcrossSite from './fragments/PopularAcrossSite';
import Reviews from './fragments/Reviews';
import SignupForm from './fragments/SignupForm';

function App() {
  return (
    <div className="App">
     <Corousel/>
      <FurnitureRange/>
       <SignupForm/>
       <MoreToExplore/>
       <PopularAcrossSite/>
       <Reviews/>
       <IconsHomepage />
       <Download />
       
    </div>
  );
}

export default App;
