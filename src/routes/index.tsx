import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import AddProduct from "../pages/product/AddProduct";
import ProductList from "../pages/product/ProductList";
import MessageList from "../pages/contact/MassageList";
import DashboardLayout from "../components/layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
            {
                path: "",
                element: <Dashboard/>
            },
            {
                path: "add-product",
                element: <AddProduct/>
            },
            {
                path: "product-list",
                element: <ProductList/>
            },
            {
                path: "messages",
                element: <MessageList/>
            }
        ]
    }
])

export default router