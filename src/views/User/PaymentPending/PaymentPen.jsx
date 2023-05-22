import { Icon2 } from "@Assets/images";
import { Button, Card, Typography, Dialog } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Bukti } from "@Assets/temp-image";
export default function PaymentPending(props) {
  console.log(props);
  const [payment, setPayment] = useState([]);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("tourPending"));
    if (storedData) {
      setPayment(storedData);
    }
  }, []);

  const TABLE_HEAD = ["No", "Full Name", "Gender", "Phone", "", ""];

  const TABLE_ROWS = [
    {
      no: "1",
      fullName: "Radif Ganteng",
      gender: "Male",
      phone: "083896833112",
      qty: "Qty",
      total: payment.qty,
    },
    {
      no: "",
      fullName: "",
      gender: "",
      phone: "",
      qty: "Total",
      total: payment.price?.toLocaleString("en-ID", {
        style: "currency",
        currency: "IDR",
      }),
    },
  ];
  return (
    <>
      <div className="w-screen p-12 m-auto">
        <Card className="w-full p-12 border border-gray-200">
          <div className="flex justify-between">
            <img src={Icon2} alt="icon" className="w-48" />
            <div className="w-[220px] flex justify-center flex-col p-4">
              <p className="text-end text-2xl pr-2">Booking</p>
              <p className="text-center">
                <b>Saturday,</b> 22 July 2020
              </p>
            </div>
          </div>
          <div className="flex justify-between mb-20">
            <div className="mx-12 mt-5 items-center">
              <h1 className="font-extrabold text-2xl text-black">
                {payment.title}
              </h1>
              <p className="text-gray-500">{payment.desc}</p>
              <p className="bg-[#ec7a7a48] text-[#ec7a7ad4] font-bold px-3 mt-10 font-avenir w-[160px] rounded ">
                Waiting Approve
              </p>
            </div>
            <div className=" flex flex-col justify-start">
              <div>
                <div className=" p-4">
                  <b className="text-xl text-black">Date Trip</b>
                  <p>26 August 2020</p>
                </div>
                <div className=" p-4">
                  <b className="text-xl text-black">Accomodation</b>
                  <p>Hotel {payment.hotel} Night</p>
                </div>
              </div>
            </div>
            <div className="items-center flex flex-col mr-20">
              <div>
                <div className=" p-4">
                  <b className="text-xl text-black">Duration</b>
                  <p>{payment.duration}</p>
                </div>
                <div className=" p-4">
                  <b className="text-xl text-black">Transportation</b>
                  <p>Qatar Always</p>
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
        <div className="flex justify-end mr-4 my-5">
        </div>
      </div>
   
    </>
  );
}
