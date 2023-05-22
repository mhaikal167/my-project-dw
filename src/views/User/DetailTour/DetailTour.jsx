import { useEffect, useState } from "react";
import { Wallpaper2, Plus, Minus } from "@Assets/images";
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
export default function DetailTour() {
  const login = JSON.parse(localStorage.getItem("dataLogin"));
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState();
  const [tour, setTour] = useState();
  const [notif, setNotif] = useState(false);
  const nav = useNavigate();
  const tourList = [
    {
      No: "1",
      title: "6D/4N Fun Tassie Vacation...",
      img: IMGS.Tassie,
      desc: "Australia",
      price: 12938000,
      pages: "12/15",
      duration: "6 Day 4 Night",
      hotel: "4",
    },
    {
      No: "2",
      title: "6D/4N Exciting Summer in...",
      img: IMGS.Summer,
      desc: "South Korea",
      price: 10288000,
      pages: "14/15",
      duration: "6 Day 4 Night",
      hotel: "4",
    },
    {
      No: "3",
      title: "8D/6N Wonderful Autumn...",
      img: IMGS.Autumn,
      desc: "Japan",
      price: 28999000,
      pages: "10/15",
      duration: "8 Day 6 Night",
      hotel: "6",
    },
    {
      No: "4",
      title: "4D/3N Overland Jakarta B...",
      img: IMGS.Overland,
      desc: "Indonesia",
      price: 3188000,
      pages: "8/10",
      duration: "4 Day 3 Night",
      hotel: "3",
    },
    {
      No: "5",
      title: "4D/3N Labuan Bajo Delight",
      img: IMGS.Bajo,
      desc: "Indonesia",
      price: 10488000,
      pages: "14/15",
      duration: "4 Day 3 Night",
      hotel: "3",
    },
    {
      No: "6",
      title: "5D/4N Magic Tokyo Fun",
      img: IMGS.Tokyo,
      desc: "Japan",
      price: 11188000,
      pages: "15/15",
      duration: "5 Day 4 Night",
      hotel: "4",
    },
  ];

  const handleBook = () => {
    localStorage.setItem("tourBook", JSON.stringify(tour));
    console.log("terrendder kan");
    if (login?.isUser) {
      setTimeout(() => {
        nav("/payment");
      }, 1000);
    } else {
      setNotif(true);
    }
  };

  const selectedTour = tourList.find((james) => james.No === id);

  useEffect(() => {
    setTotal(qty * selectedTour.price);
  }, [selectedTour, qty]);

  useEffect(() => {
    setTour({ ...selectedTour, qty: qty, price: total, book: true });
  }, [total, qty]);

  //   useEffect(() => {
  //     const storedData = JSON.parse(localStorage.getItem('tourBook'));
  //     if (storedData) {
  //       localStorage.removeItem("tourBook")
  //     }
  //     console.log(storedData,'deleted');
  //    },[])

  //  useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem('tourBook'));
  //   if (storedData) {
  //     setTour(storedData);
  //   }
  //   console.log(storedData,'detail kan');
  //  },[])
  return (
    <>
      <div className="container m-auto px-20 font-avenir">
        {/* body section start */}
        <div className="mt-10 p-2">
          <h1 className="text-5xl">{selectedTour.title}</h1>
          <h1>{selectedTour.desc}</h1>
          <div className="grid grid-cols-3 gap-2">
            <Carousel className="rounded-xl h-[361px] w-full col-span-3">
              <img
                src={selectedTour.img}
                alt="image1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image2"
                className="h-full w-full object-cor"
              />ve
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image3"
                className="h-full w-full object-cover"
              />
            </Carousel>
              <img src={IMGS.Caro1} alt="" className="w-full"/>
              <img src={IMGS.Caro2} alt="" className="w-full"/>
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
                  <p>Hotel {selectedTour.hotel} Night</p>
                </div>
              </div>
              <div>
                <label className="text-gray-500">Transportation</label>
                <div className="flex gap-2">
                  <img src={SVG.Plane} className="w-[30px]" alt="icon" />
                  <p>Qatar Always</p>
                </div>
              </div>
              <div>
                <label className="text-gray-500">Eat</label>
                <div className="flex gap-2">
                  <img src={SVG.Meal} className="w-[30px]" alt="icon" />
                  <p>Included as Itinerary</p>
                </div>
              </div>
              <div>
                <label className="text-gray-500">Duration</label>
                <div className="flex gap-2">
                  <img src={SVG.Time} className="w-[30px]" alt="icon" />
                  <p>{selectedTour.duration}</p>
                </div>
              </div>
              <div>
                <label className="text-gray-500">Date Trip</label>
                <div className="flex gap-2 flex-row">
                  <img src={SVG.Calender} className="w-[30px]" alt="icon" />
                  <p>26 August 2020</p>
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
                {selectedTour.price.toLocaleString("id-ID", {
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
        </div>
      </div>
    </>
  );
}
