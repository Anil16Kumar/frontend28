import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as SiIcons from "react-icons/si";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome size={18} />,
  },
  {
    title: "About Us",
    path: "/about-us",
    icon: <BiIcons.BiBuildings size={18} />,
    iconClosed: <RiIcons.RiArrowDownSFill size={18} />,
    iconOpened: <RiIcons.RiArrowUpSFill size={18} />,

    subNav: [
      {
        title: "Our Aim",
        path: "/about-us/aim",
        icon: <IoIcons.IoIosPaper size={18} />,
      },
      {
        title: "Our Vision",
        path: "/about-us/vision",
        icon: <IoIcons.IoIosPaper size={18} />,
      },
    ],
  },
  {
    title: "Insurance Plans",
    path: "/insurancePolicy",
    icon: <IoIcons.IoIosPaper size={18} />,
    iconClosed: <RiIcons.RiArrowDownSFill size={18} />,
    iconOpened: <RiIcons.RiArrowUpSFill size={18} />,

    subNav: [
      {
        title: "1.Protection Plans",
        path: "/insurancePolicy/insurancePolicy1",
        icon: <IoIcons.IoIosPaper size={18} />,
        cName: "sub-nav",
      },
      {
        title: "2.Child plans",
        path: "/insurancePolicy/insurancePolicy2",
        icon: <IoIcons.IoIosPaper size={18} />,
        cName: "sub-nav",
      },
      {
        title: "3.Savings Plans",
        path: "/insurancePolicy/InsurancePolicy3",
        icon: <IoIcons.IoIosPaper size={18} />,
      },
      {
        title: "4.Growth Plans",
        path: "/insurancePolicy/insurancePolicy4",
        icon: <IoIcons.IoIosPaper size={18} />,
        cName: "sub-nav",
      },
      {
        title: "5.Group Plans",
        path: "/insurancePolicy/insurancePolicy5",
        icon: <IoIcons.IoIosPaper size={18} />,
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "Customer Login",
    path: "/login",
    icon: <BiIcons.BiSolidLogInCircle size={23} />,
  },
  {
    title: "Agent Login",
    path: "/agentLogin",
    icon: <BiIcons.BiSolidLogInCircle size={23} />,
  },
  {
    title: "Employee Login",
    path: "/employeeLogin",
    icon: <BiIcons.BiSolidLogInCircle size={23} />,
  },
  {
    title: "Admin Login",
    path: "/adminLogin",
    icon: <BiIcons.BiSolidLogInCircle size={23} />,
  },
  {
    title: "Register",
    path: "/register",
    icon: <BiIcons.BiSolidRegistered size={23} />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone size={18} />,
  },
  {
    title: "Events",
    path: "/events",
    icon: <FaIcons.FaEnvelopeOpenText size={18} />,
    iconClosed: <RiIcons.RiArrowDownSFill size={18} />,
    iconOpened: <RiIcons.RiArrowUpSFill size={18} />,

    subNav: [
      {
        title: "Event 1",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper size={18} />,
      },
      {
        title: "Event 2",
        path: "/events/events2",
        icon: <IoIcons.IoIosPaper size={18} />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle size={18} />,
  },
];