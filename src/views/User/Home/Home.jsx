import { Card, Modals } from "@Components/index";
import * as IMG from "@Assets/images";
import * as IMGS from "@Assets/temp-image";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const nav = useNavigate();
  const cardList = [
    {
      title: "Best Price Guaranteed",
      img: IMG.Guaranteed,
      desc: "A small river named Duren flows by their place and supplies",
    },
    {
      title: "Travellers Love Us",
      img: IMG.Heart,
      desc: "A small river named Duren flows by their place and supplies",
    },
    {
      title: "Best Travel Agent",
      img: IMG.Agent,
      desc: "A small river named Duren flows by their place and supplies",
    },
    {
      title: "Our Dedicated Support",
      img: IMG.Support,
      desc: "A small river named Duren flows by their place and supplies",
    },
  ];
  const tourList = [
    {
      No:1,
      title: "6D/4N Fun Tassie Vacation...",
      img: IMGS.Tassie,
      desc: "Australia",
      price: 12938000,
      pages: "12/15"
    },
    {
      No:2,
      title: "6D/4N Exciting Summer in...",
      img: IMGS.Summer,
      desc: "South Korea",
      price: 10288000,
      pages: "14/15"
    },
    {
      No:3,
      title: "8D/6N Wonderful Autumn...",
      img: IMGS.Autumn,
      desc: "Japan",
      price: 28999000,
      pages: "10/15"
    },
    {
      No:4,
      title: "4D/3N Overland Jakarta B...",
      img: IMGS.Overland,
      desc: "Indonesia",
      price: 3188000,
      pages: "8/10"
    },
    {
      No:5,
      title: "4D/3N Labuan Bajo Delight",
      img: IMGS.Bajo,
      desc: "Indonesia",
      price: 10488000,
      pages: "14/15"
    },
    {
      No:6,
      title: "5D/4N Magic Tokyo Fun",
      img: IMGS.Tokyo,
      desc: "Japan",
      price: 11188000,
      pages: "15/15"
    },
  ];
  return (
    <>
      <img
        src={IMG.Wallpaper}
        className="w-full absolute -z-[1] h-[83vh] lg:h-[80%] top-0 brightness-75"
        alt="wallpaper"
      />
      <div className="m-16 p-2">
        <h1 className="text-white text-[64px] font-bold font-avenir">
          Explore
        </h1>
        <p className="text-white text-[64px] font-thin font-avenir ">
          your amazing city together
        </p>

        <div className="mt-12">
          <p className="text-white text-xl font-normal my-2 font-avenir">
            Find great places to holiday
          </p>
          <div className="flex">
            <input
              type="text"
              className="w-full rounded-l-lg border border-none"
            />
            <button className="bg-[#FFAF00] text-white py-2 px-4 rounded-r-lg hover:bg-[#a77812] font-avenir">
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-wrap px-7 justify-center mt-10">
          {cardList?.map((data, index) => {
            return (
              <Card key={index} className="w-[250px] h-[350px]">
                <div className="flex justify-center mb-3">
                  <img src={data?.img} alt="icon" />
                </div>

                <h5 className="mb-12 mt-6 text-2xl font-bold text-gray-900 text-center ">
                  {data?.title}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                  {data?.desc}
                </p>
              </Card>
            );
          })}
        </div>
        <div className="my-10">
          <h1 className="text-center text-5xl font-bold">Group Tour</h1>
          <div className="flex mt-10 justify-center flex-wrap">
            {tourList?.map((data, index) => {
              return (
                <Card key={index} className="w-[350px] h-[350px] relative">
                  <div className="flex justify-center mb-3">
                    <img src={data?.img} alt="icon" />
                  </div>
                  <a href={`/detail-tour/${data.No}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-start ">
                      {data?.title}
                    </h5>
                  </a>
                  <p className="bg-white absolute top-7 right-5 p-2 rounded-l-lg">
                    {data?.pages}
                  </p>
                  <div className="flex justify-between">
                    <p className="mb-3 font-black text-[#FFAF00]  text-justify font-avenir">
                      {data?.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </p>
                    <p className="mb-3 font-normal text-gray-400  text-justify font-avenir">
                      {data?.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <Modals />
    </>
  );
}
