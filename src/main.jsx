import { ConfigProvider } from "antd";
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from "./router.jsx";

createRoot(document.getElementById('root')).render(
    <ConfigProvider>
        <Router/>
    </ConfigProvider>
)
