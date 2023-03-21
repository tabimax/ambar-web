import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdHome,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { BiBadgeCheck } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: (
      <Icon
        as={MdHome}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Main Store",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Courses",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Badges",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={BiBadgeCheck} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Tasks",
    layout: "/auth",
    path: "/tasks",
    icon: <Icon as={FaTasks} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "My Library",
    layout: "/admin",
    path: "/rtl-default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },
];

export default routes;
