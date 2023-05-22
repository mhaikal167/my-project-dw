import { Card, Modals } from "@Components/index";
import * as IMG from "@Assets/images";
import * as IMGS from "@Assets/temp-image";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function IncomeTrip(props) {
  const nav = useNavigate();
  const [trip, setTrip] = useState([]);

  //   const items = Object.keys(dataTrips)?.map((key) => {
  //     const item = dataTrips[key];
  //     return (
  //       <div key={key}>
  //         <Card key={key} className="w-[350px] h-[350px] relative">
  //                 <div className="flex justify-center mb-3">
  //                   {/* <img src={URL.createObjectURL(item?.images)} alt="icon" /> */}
  //                 </div>

  //                 <a href={`/detail-tour/${item?.No}`}>
  //                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-start ">
  //                     {item?.title}
  //                   </h5>
  //                 </a>
  //                 <p className="bg-white absolute top-7 right-5 p-2 rounded-l-lg">
  //                   12 / {item?.quota}
  //                 </p>
  //                 <div className="flex justify-between">
  //                   <p className="mb-3 font-black text-[#FFAF00]  text-justify font-avenir">
  //                     {item?.price}
  //                   </p>
  //                   <p className="mb-3 font-normal text-gray-400  text-justify font-avenir">
  //                     {item?.desc}
  //                   </p>
  //                 </div>
  //               </Card>
  //       </div>
  //     );
  //   });
  useEffect(() => {
    const dataTrips = JSON.parse(localStorage.getItem("dataTrip"));
    if (dataTrips) {
      setTrip(dataTrips);
    }
  }, []);
  console.log(trip);
  return (
    <>
      <div className="mt-10">
        <div className="flex justify-center">
          <div className="flex justify-between w-full mx-36">
            <h1 className="text-center text-4xl font-bold">Income Trip</h1>
            <Button
              color="amber"
              className="text-white w-[128px] h-[40px]"
              onClick={() => {
                nav("/add-trip");
              }}
            >
              Add Trip
            </Button>
          </div>
        </div>
        <div className="flex mt-10 justify-center flex-wrap">
          {/* {items} */}
          {trip.map((item, idx) => {
            return (
              <Card key={item.title} className="w-[350px] h-[350px] relative">
                <div className="flex justify-center mb-3">
                  <img src={IMGS.DummyImg} alt="icon" />
                </div>
                <a href={`/detail-tour/${item.No}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-start ">
                    {item?.title}
                  </h5>
                </a>
                <p className="bg-white absolute top-7 right-5 p-2 rounded-l-lg">
                  0 / {item?.quota}
                </p>
                <div className="flex justify-between">
                  <p className="mb-3 font-black text-[#FFAF00]  text-justify font-avenir">
                    {parseInt(item?.price, 10).toLocaleString("en-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                  <p className="mb-3 font-normal text-gray-400  text-justify font-avenir">
                    {item?.country}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <Modals />
    </>
  );
}
