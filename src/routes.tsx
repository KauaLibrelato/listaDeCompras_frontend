import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { List } from './screens/List';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/List" element={<List />} />

      <Route path="*" element={<List />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
