import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Neocities from './pages/Neocities'
import Stroper from './pages/Stroper'
import Portfolio from './pages/Portfolio'
import KonijnenOpvang from './pages/KonijnenOpvang'
import Unity2D from './pages/Unity2D'
import Unity3D from './pages/Unity3D'
import GameMaker from './pages/GameMaker'
import VN from './pages/VN'
import WiiVR from './pages/WiiVR'
import Twine from './pages/Twine'
import NoPage from './pages/NoPage'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} /> 
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/neocities" element={<Neocities/>} />
          <Route path="/stroper" element={<Stroper/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/konijnenopvang" element={<KonijnenOpvang/>} />
          <Route path="/unity2D" element={<Unity2D/>} />
          <Route path="/unity3D" element={<Unity3D/>} />
          <Route path="/GameMaker" element={<GameMaker/>} />
          <Route path="/VN" element={<VN/>} />
          <Route path="/WiiVR" element={<WiiVR/>} />
          <Route path="/Twine" element={<Twine/>} />
          <Route path= "*" element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}