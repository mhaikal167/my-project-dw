import { Fragment } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { PalmLeft, Flower } from "@Assets/images";

export default function Modal({ handleOpen, open, handleOpenR }) {
  return (
    <Fragment>
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card
          className={
            "mx-auto w-full max-w-[26rem] h-[500px] overflow-scroll no-scrollbar"
          }
        >
          <img src={PalmLeft} className="w-[133px]" alt="icon" />
          <img src={Flower} className="w-[90px] absolute right-0" alt="icon" />
          <h1 className="text-center font-avenir text-4xl font-bold">
            Register
          </h1>
          <CardBody className="flex flex-col gap-4">
            <label className="px-2">Full Name</label>
            <input className="bg-[#d2d2d25b] py-2 rounded-md px-4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            <label className="px-2">Email</label>
            <input className="bg-[#d2d2d25b] py-2 rounded-md px-4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            <label className="px-2">Phone</label>
            <input className="bg-[#d2d2d25b] py-2 rounded-md px-4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            <label className="px-2">Address</label>
            <textarea className="bg-[#d2d2d25b] py-2 rounded-md px-4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 resize-none h-[100px]"></textarea>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              className="text-white"
              color="amber"
              onClick={handleOpen}
              fullWidth
            >
              Register
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
        </Card>
      </Dialog>
    </Fragment>
  );
}
