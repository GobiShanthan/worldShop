import "./App.styled.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AppContainer,MainAppContainer } from "./App.styled";

//COMPONENTS IMPORTS
import Menu from "./components/Menu/Menu";

//PAGES IMPORTS
import ProductPage from './pages/ProductPage/ProductPage'
import {Products} from "./pages/Products/Products";
import { MenuContainer } from "./components/Menu/Menu.styled.jsx";
import Cart from './pages/Cart/Cart'

import Checkout from "./pages/Checkout/Checkout.jsx";


export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Products/>}/>
          <Route path="/products/:productId" element={<ProductPage />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


//ROOT FOR REACT ROUTER 
const Root = () => {
  return (
    <AppContainer>
      <MenuContainer>
        <Menu />
      </MenuContainer>

      <MainAppContainer>
        <Outlet />
      </MainAppContainer>
    </AppContainer>
  );
};
