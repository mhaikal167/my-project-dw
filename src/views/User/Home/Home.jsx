import * as IMG from "@Assets/images";
import { Card, GroupTour, Modals } from "@Components/index";
import { useState } from "react";

export default function Home(props) {
  const [search ,setSearch] = useState("")
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
              className="w-full rounded-l-lg border border-none p-2"
              onChange={(e) => setSearch(e.target.value)}
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
        {/* <Aleale/> */}
      <GroupTour search={search}/>
      </div>
      <Modals />
    </>
  );
}
