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
import Home from "./pages/Home/Home";
import {apiLoader,Products} from "./pages/Products/Products";
import { MenuContainer } from "./components/Menu/Menu.styled.jsx";


export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
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