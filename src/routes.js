import { Icon } from "@chakra-ui/react";
import {
  MdHome,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { BiBadgeCheck } from "react-icons/bi";
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
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
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={BiBadgeCheck} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Tasks",
    layout: "/admin",
    path: "/tasks",
    icon: <Icon as={FaTasks} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },
  {
    name: "Ambar Store",
    layout: "/admin",
    path: "/store",
    icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Courses",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/courses",
    component: RTL,
  },
  {
    name: "route",
    layout: "/auth",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/default",
    component: SignInCentered,
  },
  {
    name: "route",
    layout: "/api",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/oauth2",
    component: SignInCentered,
  },
];

export default routes;
