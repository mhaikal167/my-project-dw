import { Flower, PalmLeft } from "@Assets/images";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
} from "@material-tailwind/react";
import { Fragment, useState } from "react";

import { addCountries, getCountries } from "@Utils/redux/actions/countryAction";
import { useDispatch, useSelector } from "react-redux";

export default function ModalCountry({ handleCountry, openCountry }) {
  const [country, setCountry] = useState();
  const d = useDispatch();
  const { auth } = useSelector((state) => state);
  const handleSubmit = (e) => {
    e.preventDefault();
    d(addCountries(country, auth?.token));
    d(getCountries());
    handleCountry();
  };
  // console.log(country,"ini country");

  // useEffect(() => {
  //   if (dataLogin.isAdmin || dataLogin.isUser) {
  //     localStorage.setItem('dataLogin', JSON.stringify(dataLogin));
  //   }
  // }, [dataLogin]);
  return (
    <Fragment>
      <Dialog
        size="sm"
        open={openCountry}
        handler={handleCountry}
        className="bg-transparent shadow-none"
      >
        <Card
          className={"mx-auto w-full   h-[400px] overflow-scroll no-scrollbar"}
        >
          <form onSubmit={handleSubmit}>
            <img src={PalmLeft} className="w-[133px]" alt="icon" />
            <img
              src={Flower}
              className="w-[90px] absolute right-0 top-0"
              alt="icon"
            />
            <h1 className="text-center font-avenir text-4xl font-bold">
              Add Country
            </h1>
            <CardBody className="flex flex-col gap-4">
              <label className="px-2">Name Country</label>
              <input
                className="bg-[#d2d2d25b] py-2 rounded-md px-4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                type="text"
                onChange={(e) => setCountry({ name: e.target.value.toLowerCase() })}
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
                Add Country
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </Fragment>
  );
}
