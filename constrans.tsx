import { FiPieChart } from "react-icons/fi";
import { SideItemType } from '@/types/types';
import { SiCivicrm } from "react-icons/si";
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";
import { PiUsersThree } from "react-icons/pi";
import { BsCash } from "react-icons/bs";
import { MdChecklist } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { RxPlus } from "react-icons/rx";
import { GiReceiveMoney } from "react-icons/gi";
import { FaPlusMinus } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
export const sideItems:SideItemType[]=[
    {
        icon: <FiPieChart/>,
        label: 'Dashboard',
        
    },
    {
        label:"CRM",
        icon:<SiCivicrm/>,
        links:[
            {
                label:"Client",
                link:"",
                icon:<AiOutlineUserDelete/>,
                links:[
                    {
                        label:"Add Client",
                        link:"/client/add-client",
                        icon:<AiOutlineUserAdd/>,
                    },
                    {
                        label:"Client List",
                        link:"/client/client-list",
                        icon:<PiUsersThree/>,
                    },

                ]
            },
            {
                label:"Supplier",
                link:"",
                icon:<AiOutlineUserAdd/>,
                links:[
                    {
                        label:"Add Supplier",
                        link:"/supplier/add-supplier",
                        icon:<AiOutlineUserAdd/>,
                    },
                    {
                        label:"Supplier List",
                        link:"/supplier/supplier-list",
                        icon:<PiUsersThree/>,
                    },

                ]
            },

        ]
    },
    {
        icon:<BsCash/>,
        label:"Account",
        links:[
           
            {
                label:"Account Lists",
                link:"/account/account-list",
                icon:<MdChecklist/>,
            },
            {
                label:"Account Statements",
                link:"/account/statements",
                icon:<MdChecklist/>,
            },

        ]
    },
    {
        icon:<AiOutlineProduct/>,
        label:"Products",
        links:[
            {
                label:"Product Lists",
                link:"/product/products",
                icon:<MdChecklist/>,
            },
            {
                label:"Product Categories",
                link:"",
                icon:<MdChecklist/>,
            },
            {
                label:"Add Product",
                link:"/product/add-product",
                icon:<RxPlus/>,
            }
        ]
    },
    {
        icon:<GiReceiveMoney/>,
        label:"Purchase",
        links:[
            {
                label:"Purchase List",
                link:"/purchase/purchase-list",
                icon:<GiReceiveMoney/>,
            },
            {
                label:"Add New",
                link:"/purchase/purchase-item",
                icon:<FaPlusMinus/>,
            },

        ]
    },
    {
        icon:<GiReceiveMoney/>,
        label:"Sales",
        links:[
            {
                label:"Sales List",
                link:"/sale/sale-list",
                icon:<GiReceiveMoney/>,
            },
            {
                label:"Add New",
                link:"/sale/sale-item",
                icon:<FaPlusMinus/>,
            },

        ]
    },
    {
        icon:<RiMoneyDollarCircleLine/>,
        label:"Expense",
        links:[
            {
                label:"Pay Bill",
                link:"/bill/pay-bill",
                icon:<RiMoneyDollarCircleLine/>,
            },
            {
                label:"All Expenses",
                link:"/bill/bill-list",
                icon:<RiMoneyDollarCircleLine/>,
            },

        ]
    },
    {
        icon:<PiUsersThree/>,
        label:"Staff",
        links:[
            {
                label:"Add Staff",
                link:"",
                icon:<FaPlusMinus/>,
            },
            {
                label:"Staff List",
                link:"",
                icon:<PiUsersThree/>,
            },

        ]
    }
]

export const demoDashData:{icon:any,label:string,amount:number,link:string}[]=[
    {
        icon:<FiPieChart/>,
        label:'Total Sales',
        amount:120000,
        link:'sale'
    },
 
    {
        icon:<BsCash/>,
        label:'Total Accounts',
        amount:500,
        link:'balance'

    },
  
    {
        icon:<GiReceiveMoney/>,
        label:'Total Purchase',
        amount:120000,
        link:'purchase'
    },
    {
        icon:<RiMoneyDollarCircleLine/>,
        label:'Total Expenses',
        amount:80000,
        link:'bill'
    },
  
]
