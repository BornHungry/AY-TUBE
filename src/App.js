import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import FavoritesPage from "./pages/Favorites";
import RegisterPage from "./pages/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./pages/Error";

function App() {
  // const router = createBrowserRouter([
  //   { path: "/", element: <LoginPage /> },
  //   { path: "/signin", element: <RegisterPage /> },
  //   { path: "/home", element: <HomePage /> },
  //   { path: "/favorites", element: <FavoritesPage user={user} /> },
  // ]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/signin" element={<RegisterPage />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router}></RouterProvider> */}
    </>
  );
}

export default App;
