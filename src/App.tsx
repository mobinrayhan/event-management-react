import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home.tsx";
import Root from "./pages/Root.tsx";
import SessionPage from "./pages/Session.tsx";
import SessionsPage from "./pages/Sessions.tsx";
import BookingCtxProvider from "./store/booking-ctx.tsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "sessions", element: <SessionsPage /> },
      { path: "sessions/:id", element: <SessionPage /> },
    ],
  },
]);

function App() {
  return (
    <BookingCtxProvider>
      <RouterProvider router={Router} />
    </BookingCtxProvider>
  );
}

export default App;
