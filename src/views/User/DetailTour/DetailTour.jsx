import { useEffect, useState } from "react";
import { Plus, Minus } from "@Assets/images";
import {
  Button,
  Carousel,
  Typography,
  Dialog,
  Card,
} from "@material-tailwind/react";
import * as SVG from "@Assets/svg";
import { useNavigate, useParams } from "react-router-dom";
import * as IMGS from "@Assets/temp-image";
import { useDispatch, useSelector } from "react-redux";
import { getTourInitiate, removeTour } from "@Utils/redux/actions/tourAction";
import {
  getPaymentPending,
  paymentPendingRemove,
} from "@Utils/redux/actions/transactionAction";
export default function DetailTour() {
  const { id } = useParams();
  const d = useDispatch();
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState();
  const [tourDetail, setTourDetail] = useState();
  const [payment, setPayment] = useState(null);
  const [notif, setNotif] = useState(false);
  const [notifP, setNotifP] = useState(false);
  const nav = useNavigate();
  const { tours, auth, transaction } = useSelector((state) => state);
  var date = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  var formattedDate = date.toLocaleDateString("en-US", options);

  const handleBook = () => {
    if (auth.user) {
      if (transaction.paymentPen) {
        setNotifP(true);
      } else {
        setPayment({
          counter_qty: qty,
          total: total,
          status: "Waiting Payment",
          tour_id: tourDetail.id_tour,
          book: formattedDate,
        });
      }
    } else {
      setNotif(true);
    }
  };

  const handleCancel = () => {
    setPayment({
      counter_qty: qty,
      total: total,
      status: "Waiting Payment",
      tour_id: tourDetail.id_tour,
      book: formattedDate,
    });
    d(paymentPendingRemove())
    // setNotifP(!notifP)
  };

  const handleContinue = () => {
    setTimeout(() => {
      nav("/payment");
    }, 1000);
  };

  useEffect(() => {
    if (payment) {
      d(getPaymentPending(payment));
      setTimeout(() => {
        nav("/payment");
      }, 1000);
    }
  }, [payment, id, nav]);

  useEffect(() => {
    if (tours) {
      setTourDetail(tours.tour);
    }
  }, [tours]);

  useEffect(() => {
    if (id && id !== "") {
      d(getTourInitiate(id));
    } else {
      d(removeTour());
    }
  }, [id, d]);

  useEffect(() => {
    setTotal(qty * tourDetail?.price);
  }, [tourDetail, qty]);

  return (
    <>
      <div className="container m-auto px-20 font-avenir">
        {/* body section start */}
        <div className="mt-10 p-2">
          <h1 className="text-5xl">{tourDetail?.title}</h1>
          <h1>{tourDetail?.country.name}</h1>
          <div className="grid grid-cols-3 gap-2">
            <Carousel className="rounded-xl h-[361px] w-full col-span-3">
              <img
                src={tourDetail?.image}
                alt="image1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image2"
                className="h-full w-full object-cor"
              />
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image3"
                className="h-full w-full object-cover"
              />
            </Carousel>
            <img src={IMGS.Caro1} alt="" className="w-full" />
            <img src={IMGS.Caro2} alt="" className="w-full" />
            <img src={IMGS.Caro3} alt="" className="w-full" />
          </div>
          {/* information section start */}
          <div>
            <h1 className="font-bold px-4 pt-4 ">Information Trip</h1>
            <div className="flex gap-10 justify-between px-12">
              <div>
                <label className="text-gray-500 mb-2">Accomodation</label>
                <div className="flex gap-2">
                  <img src={SVG.Hotel} className="w-[30px]" alt="icon" />
                  <p>{tourDetail?.accomodation}</p>
                </div>
              </div>
              <div>
                <label className="text-gray-500">Transportation</label>
                <div className="flex gap-2">
                  <img src={SVG.Plane} className="w-[30px]" alt="icon" />
                  <p>{tourDetail?.transport}</p>
                </div>
              </div>
              <div>
                <label className="text-gray-500">Eat</label>
                <div className="flex gap-2">
                  <img src={SVG.Meal} className="w-[30px]" alt="icon" />
                  <p>{tourDetail?.eat}</p>
                </div>
              </div>
              <div>
                <label className="text-gray-500">Duration</label>
                <div className="flex gap-2">
                  <img src={SVG.Time} className="w-[30px]" alt="icon" />
                  <p>
                    {tourDetail?.day} Day {tourDetail?.night} Night
                  </p>
                </div>
              </div>
              <div>
                <label className="text-gray-500">Date Trip</label>
                <div className="flex gap-2 flex-row">
                  <img src={SVG.Calender} className="w-[30px]" alt="icon" />
                  <p>{tourDetail?.date_trip}</p>
                </div>
              </div>
            </div>
            {/* information sestion end */}

            {/* description section start*/}
            <h1 className="mt-10 font-bold p-4">Description</h1>
            <Typography className="px-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
            <div className="px-4 pt-10 flex justify-between">
              <b className="text-[#FFAF00] text-2xl">
                {tourDetail?.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}{" "}
                <span className="text-black">/ Person</span>
              </b>
              <div className="flex gap-4 items-center">
                <button
                  className=" text-white rounded-lg p-1 font-extrabold"
                  onClick={() => {
                    if (qty > 1) {
                      setQty(qty - 1);
                    } else {
                      alert("gaboleh kurang dari 1 ,gajadi mesen dong");
                    }
                  }}
                >
                  <img src={Minus} className="m-auto" alt="icon" />
                </button>
                <p>{qty}</p>
                <button
                  className=" text-white rounded-lg p-1 font-extrabold"
                  onClick={() => {
                    setQty(qty + 1);
                  }}
                >
                  <img src={Plus} className="m-auto" alt="icon" />
                </button>
              </div>
            </div>
            <hr className=" h-[1px] mx-auto my-4 bg-gray-400 border-0 rounded " />
            <div className="px-4 pt-10 flex justify-between">
              <span className="text-black font-bold text-2xl">Total</span>
              <div className="flex gap-4 items-center">
                <b className="text-[#FFAF00] text-2xl">
                  {total?.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </b>
              </div>
            </div>
            <hr className=" h-[1px] mx-auto my-4 bg-gray-400 border-0 rounded " />
            <div className="flex justify-end m-4">
              <Button
                color="amber"
                className="text-white w-[213px]"
                onClick={handleBook}
              >
                Book Now
              </Button>
            </div>
          </div>
          {/* body section end */}
          {/* modal non login start */}
          <Dialog
            size="sm"
            open={notif}
            handler={() => setNotif(!notif)}
            className="bg-transparent shadow-none"
          >
            <Card className="mx-auto w-full h-[150px]">
              <div className=" max-h-full m-auto">
                <p className="text-center text-2xl text-black ">
                  Please Login for book tour
                </p>
              </div>
            </Card>
          </Dialog>
          {/* modal non login end */}

          {/* modal already got payment */}
          <Dialog
            size="sm"
            open={notifP}
            handler={() => setNotifP(!notifP)}
            className="bg-transparent shadow-none"
          >
            <Card className="mx-auto w-[500px] p-8">
              <div className=" max-h-full m-auto ">
                <p className="text-center text-2xl text-black ">
                  You already book before ,wanna continue or cancel and replace
                  it?
                </p>
                <div className="flex justify-center gap-4 mt-5">
                  <Button
                    color="red"
                    className="text-white"
                    onClick={handleCancel}
                  >
                    Cancel and Replace
                  </Button>
                  <Button
                    color="green"
                    className="text-white "
                    onClick={handleContinue}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </Card>
          </Dialog>

          {/* modal already got payment */}
        </div>
      </div>
    </>
  );
}
