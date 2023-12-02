import { useState } from 'react';
import { FaBars } from "react-icons/fa6";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    const sidebarItems = [
        "Dashboard",
        "Sales Analytics",
        "Product Management",
        "Order Management",
        "Inventory Tracking",
        "Notifications and Alerts",
    ];

    return (
        <div className={`w-1/5 bg-gray-900 text-white min-h-screen transition-all transform ${!isOpen ? 'translate-x-0' : '-translate-x-3/4'}`}>
            <div className="py-4 text-center">
                <h1 className="text-2xl font-bold mt-4"></h1>
            </div>
            <ul className="text-gray-300">
                {sidebarItems.map((item, index) => (
                    <li
                        key={index}
                        className="py-2 pl-4 cursor-pointer hover:bg-gray-800"
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <div className={`cursor-pointer absolute top-4 text-3xl transition-all  ${!isOpen ? 'left-4' : 'right-6'}`} onClick={toggleSidebar}>
            <FaBars />
            </div>
        </div>
    );
};

const Content = () => {
    return (
        <div className="w-4/5 p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="bg-white p-4 rounded shadow-md mt-4">
                {/* Your admin content goes here */}
            </div>
        </div>
    );
};

const Dashboard = () => {
    return (
        <div className="bg-gray-100 flex">
            <Sidebar />
            <Content />
        </div>
    );
};

export default Dashboard;
