import './App.css'
import { Routes, Route } from 'react-router-dom';
import BrowseCharacters from './Components/BrowseCharacters';
import CharacterDetail from './Components/CharacterDetail';
import Home from './Components/Home';
import Comics from './Components/Comics';
import NavigationBar from './Components/Navbar';
import NotFound from './Components/NotFound';



function App() {

  return (
    <>
    <NavigationBar />
    
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/BrowseCharacters/*" element={<BrowseCharacters />} />
         <Route path="/CharacterDetail/:id" element={<CharacterDetail />} />
         <Route path="/Comics" element={<Comics />} />
         <Route path="*" element={<NotFound />} />
       </Routes>
    </>
  )
}

export default App;
