import "./global.css";
import App from './App.tsx'
import { createBrowserRouter, Outlet, RouterProvider} from "react-router";
import ErrorBoundary from "./routes/error-pages/ErrorBoundary.tsx";
import {routersSection} from "./routes/sections";
import ReactDOM from "react-dom/client";
const router = createBrowserRouter([
  {
    Component:() => (
      //根路由组件，渲染App组件并包含Outlet用于渲染子路由
      <App>
        {/* Outlet：用于渲染当前路由的子路由组件 */}
        <Outlet></Outlet>
      </App>
    ),
    // 错误边界组件，当路由渲染出现错误时显示
    errorElement: <ErrorBoundary />,
    children: routersSection
  }
],
  {
    basename: '/'
  }

)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
