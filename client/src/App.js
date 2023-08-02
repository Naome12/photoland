import React from 'react';

import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
//pages
import Home from './pages/Home'
import Products from './pages/Products'
import ProductionDetails from './pages/ProductionDetails'
import Search from './pages/Search'
//components
import Header from './components/Header'
import Footer from './components/Footer'
//layout
const Layout = ()=>{
  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
};

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {path:'/',element: <Home />},
      {path:'/products/:id',element: <Products />},
      {path:'/product/:id',element: <ProductionDetails />},
      {path:'/search',element: <Search />},
    
    

    ]
  }
])


const App = () => {
  return <div>
  <RouterProvider router={router}/>
  </div>;
};

export default App;