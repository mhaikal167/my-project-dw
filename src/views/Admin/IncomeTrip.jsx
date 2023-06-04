import { Card, Modals } from "@Components/index";
import { useNavigate} from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getTours } from "@Utils/redux/actions/tourAction";

export default function IncomeTrip(props) {
  const nav = useNavigate();
  const [trip, setTrip] = useState([]);
  const {tours} = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTours())
  },[])

  useEffect(() => {
    if (tours?.tours) {
      setTrip(tours?.tours);
    }
  }, [tours?.tours]);
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
          {trip.map((data, idx) => {
            return (
              <Card key={idx} className="w-[350px] h-[350px] relative">
              <div className="flex justify-center mb-3">
                <img src={data?.image} alt="icon" className="h-[241px] object-cover"/>
              </div>
            
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-start truncate ">
                  {data?.title}
                </h5>
             
              <p className="bg-white absolute top-7 right-5 p-2 rounded-l-lg">
                0 / {data?.quota}
              </p>
              <div className="flex justify-between">
                <p className="mb-3 font-black text-[#FFAF00]  text-justify font-avenir">
                  {data?.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                <p className="mb-3 font-normal text-gray-400  text-justify font-avenir">
                  {data?.country.name}
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
