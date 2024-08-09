import React, { Suspense, lazy } from "react";
import ReactDOM  from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
// import Contact from "./components/Contact";
import ResMenu from "./components/ResMenu";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

const Contact = lazy(()=>import("./components/Contact"));
const AppLayout = () =>{
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
};
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Suspense fallback={<h1> LOADINGGGGGGGGGGGGGGGGGGGGGG...</h1>}><Contact/></Suspense>,
            },
            {
                path:"/restaurants/:resID",
                element:<ResMenu />,
            },
        ],
    }, 
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(Heading);
//root.render(<HeadingComponent2/>)
// root.render(<AppLayout />)
root.render(<RouterProvider router={appRouter}/>)

