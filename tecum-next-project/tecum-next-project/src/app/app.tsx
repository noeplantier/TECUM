import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './page';
import Colliers from './pages/colliers';
import Bagues from './pages/bagues';
import Diademes from './pages/diademes';
import BouclesOreilles from './pages/bouclesoreilles';
import Montres from './pages/montres';
import Piercings from './pages/piercings';
import Pendentifs from './pages/pendentifs';
import Vetements from './pages/vetements';
// importer les autres pages...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/colliers" element={<Colliers />} />
        <Route path="/bagues" element={<Bagues />} />
        <Route path="/diademes" element={<Diademes />} />
        <Route path="/boucles-oreilles" element={<BouclesOreilles />} />
        <Route path="/montres" element={<Montres />} />
        <Route path="/piercings" element={<Piercings />} />
        <Route path="/pendentifs" element={<Pendentifs />} />
        <Route path="/vetements" element={<Vetements />} />
      </Routes>
    </Router>
  );
}

export default App;
