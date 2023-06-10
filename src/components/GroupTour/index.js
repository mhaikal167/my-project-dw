import { Card } from "@Components/index";
import { getTours } from "@Utils/redux/actions/tourAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function GroupTour(props) {
  const { tours } = useSelector((state) => state.tours);
  const [dataTour, setDataTour] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTours());
  }, []);

  const Alert = () => {
    const Toast = Swal.mixin({
      position: "center",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "warning",
      title: "Out of Booked",
    });
  };
  useEffect(() => {
    if (tours.length > 0) {
      setDataTour(tours);
    }
  }, [tours]);
  // console.log(dataTour,'ni');

  return (
    <>
      <div className="my-10">
        <h1 className="text-center text-5xl font-bold">Group Tour</h1>
        <div className="flex mt-10 justify-center flex-wrap">
          {dataTour?.filter((data) => {
          if (props.search == "") {
            return data
          } else if (data?.country?.name?.toLowerCase().includes(props?.search?.toLowerCase())) {
            return data
          } else if (data?.title?.toLowerCase().includes(props?.search?.toLowerCase())) {
            return data
          }
        }).map((data, index) => {
            return (
              <Link to={`/detail-tour/${data?.id_tour}`}>
                <Card
                  key={index}
                  className={
                    data?.quota === data?.quota_current
                      ? `w-[350px] h-[350px] relative bg-red-700 `
                      : `w-[350px] h-[350px] relative `
                  }
                >
                  {data?.quota === data?.quota_current ? (
                    <div className="w-full transform rotate-45 absolute mt-30 top-36 flex items-center justify-center cursor-default">
                      <h5 className="text-5xl font-bold tracking-tight text-red-400">
                        Out of Booked
                      </h5>
                    </div>
                  ) : (
                    <></>
                  )}
                  <div className="flex justify-center mb-3">
                    <img
                      src={data?.image}
                      alt="icon"
                      className="h-[241px] object-cover"
                    />
                  </div>

                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-start truncate ">
                    {data?.title}
                  </h5>

                  {data?.quota === data?.quota_current ? (
                    <div className="absolute top-7 right-5 p-2 rounded-l-lg bg-red-900">
                      <p className="text-white italic">Full Booked</p>
                    </div>
                  ) : (
                    <p className="bg-white absolute top-7 right-5 p-2 rounded-l-lg">
                      {data?.quota_current} / {data?.quota}
                    </p>
                  )}
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
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
