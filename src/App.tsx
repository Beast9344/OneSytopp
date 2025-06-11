
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LocationPage from './pages/LocationPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="rentals/:slug" element={<ProductPage />} />
          <Route path="locations/:slug" element={<LocationPage />} />
          <Route path="*" element={<HomePage />} /> 
        </Route>
      </Routes>
  );
}

export default App;
