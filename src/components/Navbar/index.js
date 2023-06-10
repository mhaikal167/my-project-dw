import { Avatar, Bill, DefaultProfile, Logout, Profile, Trip } from "@Assets/images";
import Logo from "@Assets/images/Icon.png";
import { Modal, Modals } from "@Components";
import { logoutInitiate } from "@Utils/redux/actions/authAction";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Navbar({ wall }) {
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const [openR, setOpenR] = useState(false);
  const [data, setData] = useState();
  const user = useSelector((state) => state.auth.user);
  const d = useDispatch()

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("dataLogin"));
    if (storedData) {
      setData(storedData);
    }
  }, []);
  const handleOpen = () => {
    setOpen(!open);
    setOpenR(false);
  };

  const handleOpenR = () => {
    setOpenR(!openR);
    setOpen(false);
  };
  const handleLogout = () => {
    setTimeout(() => {
      d(logoutInitiate())
    },1000)
   
  };
  return (
    <>
      <img src={wall} alt="bg" className="absolute -z-10 w-full" />
      <div className="bg-cover">
        <nav className="bg-transparent w-full ">
          <div className="flex flex-wrap items-center justify-between mx-auto pb-2 px-10">
            <a href="/" className="flex items-center">
              <img src={Logo} className="h-17 mx-7 w-[190px]" alt=" Logo" />
            </a>
            {user?.role === "user" ? (
              <ul className=" px-24 pt-2">
                <Menu className="mr-20">
                  <MenuHandler>
                    <button className="border-2 border-yellow-400 rounded-full">
                      <img src={user?.picture ? user?.picture : DefaultProfile} alt="avatar" className="rounded-full w-[50px] h-[50px] object-cover"/>
                    </button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem
                      className="flex items-center justify-between pr-12"
                      onClick={() => nav("/profile")}
                    >
                      <img src={Profile} alt="logout" />
                      Profile
                    </MenuItem>
                    <MenuItem
                      className="flex items-center justify-between pr-16"
                      onClick={() => nav("/payment")}
                    >
                      <img src={Bill} alt="logout" />
                      Pay
                    </MenuItem>
                    <hr className="my-2" />
                    <MenuItem
                      onClick={handleLogout}
                      className="flex items-center justify-between pr-12"
                    >
                      <img src={Logout} alt="logout" />
                      Logout
                    </MenuItem>
                  </MenuList>
                </Menu>
              </ul>
            ) : user?.role === "admin" ? (
              <ul className=" px-24 pt-2">
                <Menu className="mr-20">
                  <MenuHandler>
                    <button>
                      <img src={Avatar} alt="avatar" />
                    </button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem
                      className="flex items-center justify-between pr-16"
                      onClick={() => nav("/trip")}
                    >
                      <img src={Trip} alt="logout" />
                      Trip
                    </MenuItem>
                    <hr className="my-2" />
                    <MenuItem
                      onClick={handleLogout}
                      className="flex items-center justify-between pr-12"
                    >
                      <img src={Logout} alt="logout" />
                      Logout
                    </MenuItem>
                  </MenuList>
                </Menu>
              </ul>
            ) : (
              <ul className="flex m-3 flex-end justify-evenly text-center">
                <li>
                  <Button
                    variant="outlined"
                    color="gray"
                    className=" text-white mr-5 w-[100px]"
                    onClick={handleOpen}
                  >
                    Login
                  </Button>
                </li>
                <li>
                  <Button
                    color="amber"
                    className="text-white mr-5   "
                    onClick={handleOpenR}
                  >
                    Register
                  </Button>
                </li>
              </ul>
            )}
          </div>
        </nav>
        <Modal handleOpen={handleOpenR} open={openR} handleOpenR={handleOpen} />
        <Modals handleOpen={handleOpen} open={open} handleOpenR={handleOpenR} />
      </div>
    </>
  );
}
