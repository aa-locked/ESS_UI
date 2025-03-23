import { MdDashboard } from "react-icons/md";
import { MdCoPresent } from "react-icons/md";
import { FcLeave } from "react-icons/fc";
import { TbReceiptTax } from "react-icons/tb";
import { MdCardTravel } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
export const navRoutes = [
    {
        url: "/",
        label: "Dashboard",
        icon: <MdDashboard size={30} />
    },
    {
        url: "/attendance",
        label: "Attendance",
        icon: <MdCoPresent size={30} />
    },
    {
        url: "/leave",
        label: "Leave",
        icon: <FcLeave size={30} />
    },
    {
        url: "/tds",
        label: "TDS",
        icon: <TbReceiptTax size={30} />
    },
    {
        url: "/taod",
        label: "TA/OD",
        icon: <MdCardTravel size={30} />
    }
    ,
    {
        url: "/report",
        label: "Reports",
        icon: <TbReportSearch size={30} />
    }
];

