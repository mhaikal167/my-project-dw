import { Card } from "@Components/index";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "@Utils/redux/actions/tourAction";
import { Link } from "react-router-dom";
export default function GroupTour(){
  const {tours} = useSelector((state) => state.tours)
  const [dataTour,setDataTour] = useState()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTours())
  },[])

  useEffect(() => {
    if(tours.length > 0){
      setDataTour(tours)
    }
  },[tours])
  // console.log(dataTour,'ni');

    return (
        <>
          <div className="my-10">
          <h1 className="text-center text-5xl font-bold">Group Tour</h1>
          <div className="flex mt-10 justify-center flex-wrap">
             {dataTour?.map((data, index) => {
              return (
                <Card key={index} className="w-[350px] h-[350px] relative">
                  <div className="flex justify-center mb-3">
                    <img src={data?.image} alt="icon" className="h-[241px] object-cover"/>
                  </div>
                  <Link to={`/detail-tour/${data.id_tour}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-start truncate ">
                      {data?.title}
                    </h5>
                  </Link>
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
        </>
    )
}