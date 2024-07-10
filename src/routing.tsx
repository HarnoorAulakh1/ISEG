import { createBrowserRouter } from "react-router-dom";
import Applayout from "./components/applayout";
import Landing from "./components/landing";

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
            }
        ]
    }
]);
