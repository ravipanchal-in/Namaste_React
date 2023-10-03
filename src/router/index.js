import { lazy, Suspense } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorComponent from "../components/error-component/ErrorComponent";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import RestaurantDetails from "../components/restaurant-details/RestaurantDetails";
import UserContext from "../utils/UserContext";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
// import Grocery from "../pages/Grocery";

// to improve performance of our large scale application
// chunking
// dynamic import
//Lazy Loading
// Dynamic Bundling
// Code Spliting
const Grocery = lazy(() => import("../pages/Grocery"));

const AppLayout = () => (
  <UserContext.Provider value={{ loggedInUser: "Hare Krishna" }}>
    <UserContext.Provider value={{ loggedInUser: "Hare Ram" }}>
      <Header />
    </UserContext.Provider>
    <Outlet />
    <Footer />
  </UserContext.Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading ....</div>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

export default appRouter;
