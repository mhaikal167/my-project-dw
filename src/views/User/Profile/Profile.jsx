import { Icon2, Maps, Phone, Email, Name, Avatar2 , QR } from "@Assets/images";
import { Button, Card, Typography, Dialog } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Bukti } from "@Assets/temp-image";
export default function Profile(props) {
  const [payment, setPayment] = useState([]);
  const [paySuccess, setPaySuccess] = useState(false);
  const TABLE_HEAD = ["No", "Full Name", "Gender", "Phone", "", ""];

  const TABLE_ROWS = [
    {
      no: "1",
      fullName: "Radif Ganteng",
      gender: "Male",
      phone: "083896833112",
      qty: "Qty",
      total: "1",
    },
    {
      no: "",
      fullName: "",
      gender: "",
      phone: "",
      qty: "Total",
      total: "IDR.12,939,000",
    },
  ];
  return (
    <>
      <div>
        <Card className="p-4 border border-gray-200 w-[900px] m-auto mt-10 font-avenir  px-10">
          <div className="relative">
            <h1 className="mb-3 text-2xl font-bold ">Personal Info</h1>
            <div className="flex gap-4 justify-between">
              <div className="w-full flex gap-7 mb-4 flex-col">
                <div className="flex gap-7 mb-4 ">
                  <img src={Name} alt="icon" />
                  <p className="font-bold">
                    Radif Ganteng
                    <p className="text-gray-500 font-normal">Full Name</p>
                  </p>
                </div>
                <div className="flex gap-7 mb-4 ">
                  <img src={Email} alt="icon" />
                  <p className="font-bold">
                    radifgans@gmail.com
                    <p className="text-gray-500 font-normal">Email</p>
                  </p>
                </div>
                <div className="flex gap-7 mb-4 ">
                  <img src={Phone} alt="icon" />
                  <p className="font-bold">
                    0812-8623-8911
                    <p className="text-gray-500 font-normal">Phone</p>
                  </p>
                </div>
                <div className="flex gap-7 mb-4 ">
                  <img src={Maps} alt="icon" />
                  <p className="font-bold">
                    Perumahan Permata Bintaro Residence C-3
                    <p className="text-gray-500 font-normal">Address</p>
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0">
                <img src={Avatar2} alt="icon" className="w-full" />
                <Button color="amber" className="w-full text-white mt-5">
                  Change Photo Profile
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-screen p-24 m-auto">
        <h1 className="text-2xl font-bold mb-5">History Trip</h1>
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
              <p className="bg-[#3bf71e52] text-[#0BDC5F] text-[#ec7a7ad4] font-bold px-3 mt-10 font-avenir w-[160px] rounded text-center ">
                Approve
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
              <img src={QR} alt="" />
              <p>TCK0101</p>
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
      </div>
    </>
  );
}
