import { createBrowserRouter } from "react-router-dom";
import Applayout from "./components/applayout";
import Landing from "./components/landing";
import About from "./components/about";
import NewsLetter from "./components/newsletter";
import { Journal, Other, Special } from "./components/publications";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Landing />
          </>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/newsletters",
        element: <NewsLetter />,
      },
      {
        path: "journal",
        element: <Journal />,
      },
      {
        path: "special",
        element: <Special />,
      },
      {
        path: "other",
        element: <Other />,
      },
    ],
  },
]);
