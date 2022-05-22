import { FaUserTag, FaCartPlus, FaTruck } from 'react-icons/fa';
import * as RiIcon from "react-icons/ri";
import * as HiIcons from "react-icons/hi";

export const SiderbarData = [
    {
        title:'CUSTOMER',
        path:'/CUSTOMER',
        icon:<FaUserTag/>,
        cName:'nav-text'
    },
    {
        title:'ORDERS',
        path:'/ORDERS',
        icon:<HiIcons.HiDocumentReport/>,
        cName:'nav-text'
    },
    {
        title:'PRODUCTS',
        path:'/PRODUCTS',
        icon:<FaCartPlus/>,
        cName:'nav-text'
    },
    
    {
        title:'PROVIDER',
        path:'/PROVIDER',
        icon:<FaTruck/>,
        cName:'nav-text'
    },
    {
        title:'VENDORS',
        path:'/VENDORS',
        icon:<RiIcon.RiShoppingBag2Fill/>,
        cName:'nav-text'
    }
]