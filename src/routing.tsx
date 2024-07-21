import { createBrowserRouter } from "react-router-dom";
import Applayout from "./components/applayout";
import Landing from "./components/landing";
import About, { Article } from "./components/about.tsx";
import NewsLetter from "./components/newsletter";
import { Journal, Other, Special } from "./components/publications";
import { Members1, Members2, Membership } from "./components/members";
import Contact from "./components/contact";
import Help from "./components/help";
import Egcon from "./components/egcon";

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
        path: "iseg",
        element: <About />,
      },
      {
        path: "article",
        element: <Article />,
      },
      {
        path: "newsletters",
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
      {
        path: "member-iseg",
        element: <Members1 />,
      },
      {
        path: "member-iaeg",
        element: <Members2 />,
      },
      {
        path: "membership",
        element: <Membership />,
      },
      {
        path: "contact-secretariat",
        element: <Contact />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "egcon",
        element: <Egcon />,
      },
    ],
  },
]);
