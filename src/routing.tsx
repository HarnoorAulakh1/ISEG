import { createBrowserRouter } from "react-router-dom";
import Applayout from "./components/applayout";
import Landing from "./components/landing";
import About from "./components/about";
import NewsLetter from "./components/newsletter";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path:"/",
                element:
                <>
                <Landing/>
                </>
            },
            {
                path: "/about",
                element:<About/>
            },
            {
                path: "/newsletters",
                element:<NewsLetter/>
            }
        ]
    }
]);
