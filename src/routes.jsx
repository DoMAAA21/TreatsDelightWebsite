import { Route, Routes} from 'react-router-dom';
//Layouts
import DefaultLayout from './layouts/defaultLayout'; 
import DashboardLayout from './layouts/dashboardLayout';
//Components
import Home from './components/home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout/>}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
