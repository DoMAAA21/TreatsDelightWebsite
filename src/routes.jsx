import { Route, Routes, useRoutes} from 'react-router-dom';
//Layouts
import DefaultLayout from './layouts/defaultLayout'; 
import DashboardLayout from './layouts/dashboardLayout';
//Components
import Home from './components/home';
import User from './components/admin/user';

const AppRoutes = () => {

  const routes = useRoutes([
    {
      path: '/admin',
      element: <DashboardLayout />,
      children:[
        { path: 'home', element: <Home /> },
        { path: 'user', element: <User /> },
      ]

    },
    {
      path: '/',
      element: <DefaultLayout />,
      children:[
        { path: 'home', element: <Home /> },
        { path: 'user', element: <User /> },
      ]

    },

    ])
    return routes;
};

export default AppRoutes;

