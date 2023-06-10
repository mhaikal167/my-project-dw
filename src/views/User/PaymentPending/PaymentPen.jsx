import { Icon2, QR } from "@Assets/images";
import { Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";
// import { Bukti } from "@Assets/temp-image";
import { useSelector } from "react-redux";

export default function PaymentPending() {
  const [payment, setPayment] = useState([]);
  const { auth } = useSelector((state) => state);

  const dateConvert = (params) => {
    var params = new Date();
    var options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    var formattedDate = params.toLocaleDateString("en-US", options);
    return formattedDate
  }
 
  useEffect(() => {
    if (auth?.user.transaction) {
      setPayment(auth?.user.transaction);
    }
  }, [auth?.user.transaction]);
  // const selectedTour = payment.filter((james) => james.status === "Waiting Approve");
  // console.log(selectedTour);
  return (
    <>
      <div className="w-screen p-12 m-auto">
        {/*  */}
        <h1 className="text-2xl font-extrabold px-5">History Trip</h1>
        {payment?.map((item, idx) => {
          return (
            <>
              <Card
                className="w-full p-12 border border-gray-200 mt-10"
                key={idx}
              >
                <div className="flex justify-between">
                  <img src={Icon2} alt="icon" className="w-48" />
                  <div className="w-[220px] flex justify-center flex-col p-4">
                    <p className="text-start text-2xl px-1">Booking</p>
                    <p className="text-center pr-2">
                      {dateConvert(item?.created_at)}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mb-20">
                  <div className="mx-12 mt-5 items-center">
                    <h1 className="font-extrabold text-2xl text-black">
                      {item.tour.title}
                    </h1>
                    <p className="text-gray-500">{item.desc}</p>
                    <p
                      className={`${
                        item.status === "pending"
                          ? `bg-[#ff99001a] text-[#FF9900]`
                          : item.status === "success"
                          ? `bg-[#0bdc5f20] text-[#3CF71E]`
                          : `bg-[#ec7a7a48] text-[#ec7a7ad4]`
                      } font-bold px-3 mt-10 font-avenir w-[160px] rounded text-center `}
                    >
                      {item.status}
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
                        <p>{item.tour.accomodation}</p>
                      </div>
                    </div>
                  </div>
                  <div className="items-center flex flex-col mr-20">
                    <div>
                      <div className=" p-4">
                        <b className="text-xl text-black">Duration</b>
                        <p>
                          {item.tour.day} Day {item.tour.night} Night
                        </p>
                      </div>
                      <div className=" p-4">
                        <b className="text-xl text-black">Transportation</b>
                        <p>{item.tour.transport}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mx-24 my-6">
                    <img src={QR} alt="icon" className="mb-4"/>
                    <p>TCK0101</p>
                  </div>
                </div>
                <div className="grid grid-cols-12 px-8 mb-4">
                  <b className="col-span-2">No</b>
                  <b className="col-span-2">Full Name</b>
                  <b className="col-span-2">Gender</b>
                  <b className="col-span-2">Phone</b>
                </div>
                <div className="bg-black w-full p-[1px]"></div>
                <div className="grid grid-cols-12 px-8 my-3">
                  <p className="col-span-2">1</p>
                  <p className="col-span-2">{auth?.user.fullName}</p>
                  <p className="col-span-2">{auth?.user.gender}</p>
                  <p className="col-span-2">{auth?.user.phone}</p>
                  <b className="col-span-2 text-center">Qty</b>
                  <b className="col-span-1 text-start">:</b>
                  <b className="col-span-1 text-start">{item.counter_qty}</b>
                </div>
                <div className="bg-black w-full p-[1px]"></div>
                <div className="grid grid-cols-12 px-8 my-3">
                  <b className="col-span-8 text-center"></b>
                  <b className="col-span-2 text-center">Total</b>
                  <p className="col-span-1 text-start">:</p>
                  <p className="col-span-1 text-start text-[#FF0000]">
                    {item.total.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                </div>
              </Card>
            </>
          );
        })}

        <div className="flex justify-end mr-4 my-5"></div>
      </div>
    </>
  );
}
