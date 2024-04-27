import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LazyAbout } from "./pages/about/about.lazy";
import { LazyShop } from "./pages/shop/shop.lazy";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element:  <App />,
        children: [
            {
                path: "/about",
                element:<Suspense  fallback={"loading..."}><LazyAbout /></Suspense>
            },
            {
                path: "/shop",
                element: <Suspense fallback={"loading..."}><LazyShop /></Suspense>
            }
        ]
    },
]);

root.render(
    <RouterProvider router={router} />
);
