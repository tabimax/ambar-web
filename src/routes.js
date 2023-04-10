import { Icon } from "@chakra-ui/react";
import {
  MdHome,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { BiBadgeCheck } from "react-icons/bi";
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";

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
    name: "Badges",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={BiBadgeCheck} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Ambar Store",
    layout: "/admin",
    path: "/store",
    icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
];

export default routes;
