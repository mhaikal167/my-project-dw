import { Flower, PalmLeft } from "@Assets/images";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Typography,
} from "@material-tailwind/react";
import { Fragment, useState } from "react";

import { loginInitiate } from "@Utils/redux/actions/authAction";
import { useDispatch } from "react-redux";

export default function Modals({ handleOpen, open, handleOpenR }) {
  const [dataLogin, setDataLogin] = useState([]);
  const d = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    d(loginInitiate(dataLogin))
    handleOpen()
  }; 
 


  // useEffect(() => {
  //   if (dataLogin.isAdmin || dataLogin.isUser) {
  //     localStorage.setItem('dataLogin', JSON.stringify(dataLogin));
  //   }
  // }, [dataLogin]);
  return (
    <Fragment>
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card
          className={"mx-auto w-full   h-[500px] overflow-scroll no-scrollbar"}
        >
          <form onSubmit={handleSubmit}>
            <img src={PalmLeft} className="w-[133px]" alt="icon"/>
            <img src={Flower} className="w-[90px] absolute right-0 top-0" alt="icon"/>
            <h1 className="text-center font-avenir text-4xl font-bold">
              Login
            </h1>
            <CardBody className="flex flex-col gap-4">
              <label className="px-2">Email</label>
              <input
                id="email"
                type="email"
                className="bg-[#d2d2d25b] py-2 rounded-md px-4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                onChange={(e) =>
                  setDataLogin({ ...dataLogin, email: e.target.value })
                }
              />
              <label className="px-2">Password</label>
              <input
                id="password"
                type="password"
                className="bg-[#d2d2d25b] py-2 rounded-md px-4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                onChange={(e) =>
                  setDataLogin({ ...dataLogin, password: e.target.value })
                }
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                variant="gradient"
                className="text-white"
                color="amber"
                type="submit"
                fullWidth
              >
                Sign In
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account? Click
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  className="ml-1 font-bold"
                  onClick={handleOpenR}
                >
                  Here
                </Typography>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </Fragment>
  );
}
