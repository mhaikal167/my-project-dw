import { Icon2 } from "@Assets/images";
import { Bukti } from "@Assets/temp-image";
import {
  Card,
  Chip,
  Dialog,
  Typography
} from "@material-tailwind/react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
export default function ModalTrans({ handleOpen, open, data }) {

  const d = useDispatch()

  const dateConvert = (params) => {
    var date = new Date(params);
    var options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate
  }
  // const dateObject = new Date(data?.tour.date_trip);
  const TABLE_HEAD = ["No", "Full Name", "Gender", "Phone", "", ""];
  const TABLE_ROWS = [
    {
      no: "1",
      fullName: data?.user.fullName,
      gender: "Male",
      phone: data?.user.phone,
      qty: "Qty",
      total: data?.counter_qty,
    },
    {
      no: "",
      fullName: "",
      gender: "",
      phone: "",
      qty: "Total",
      total: data?.total?.toLocaleString("en-US", {
        style: "currency",
        currency: "IDR",
      }),
    },
  ];

  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen} size="xl">
        <Card className="w-full p-12 border border-gray-200 shadow-none">
          <div className="flex justify-between">
            <img src={Icon2} alt="icon" className="w-48" />
            <div className="w-[220px] flex justify-center flex-col p-4">
              <p className="text-end text-2xl pr-2">Booking</p>
              <p className="text-center">
                {dateConvert(data?.created_at)}
              </p>
            </div>
          </div>
          <div className="flex justify-between mb-20">
            <div className="mx-12 mt-5 items-center">
              <h1 className="font-extrabold text-2xl text-black"></h1>
              <p className="text-gray-500"></p>
              <div className="w-max">
                <Chip
                  size="sm"
                  variant="ghost"
                  value={data?.status}
                  color={
                    data?.status === "success"
                      ? "green"
                      : data?.status === "pending"
                      ? "amber"
                      : "red"
                  }
                />
              </div>
            </div>
            <div className=" flex flex-col justify-start">
              <div>
                <div className=" p-4">
                  <b className="text-xl text-black">Date Trip</b>
                  <p>{dateConvert(data?.tour.date_trip)}</p>
                </div>
                <div className=" p-4">
                  <b className="text-xl text-black">Accomodation</b>
                  <p>{data?.tour.accomodation}</p>
                </div>
              </div>
            </div>
            <div className="items-center flex flex-col mr-20">
              <div>
                <div className=" p-4">
                  <b className="text-xl text-black">Duration</b>
                  <p>{data?.tour.day} Day {data?.tour.night} Night</p>
                </div>
                <div className=" p-4">
                  <b className="text-xl text-black">Transportation</b>
                  <p>{data?.tour.transport}</p>
                </div>
              </div>
            </div>
            <div className="items-end mr-5 ml-20">
              <img src={Bukti} alt="" />
              <p>upload payment proof</p>
            </div>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-500  p-4 w-[100px]"
                  >
                    <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                ({ no, fullName, gender, phone, qty, total }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4 text-[#FF0000]"
                    : "p-4 border-b border-blue-gray-500 ";

                  return (
                    <tr key={no}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {no}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {fullName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {gender}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {phone}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold text-end text-xl"
                        >
                          {qty}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          variant="small"
                          className="font-bold text-xl "
                        >
                          : {total}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </Card>
      </Dialog>
    </Fragment>
  );
}
