import { createBrowserRouter } from "react-router";
import App from "../App";
import DashboardPage from "../Pages/DashboardPage";
import DetailPage from "../Pages/DetailPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: DashboardPage
            },
            {
                path: "/detail-page/:uniqueId",
                Component: DetailPage
            }
        ]
    }
])