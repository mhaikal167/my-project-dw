import { Upload } from "@Assets/images";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const getDataFromLS = () => {
    const data = localStorage.getItem("dataTrip");
    if(data){
        return JSON.parse(data)
    }else{
        return []
    }
}
export default function AddTrip() {
  const style =
    "bg-[#d2d2d25b] py-2 border-blue-gray-800  border  rounded-md px-4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";

  const [tempDataTrip, setTempDataTrip] = useState([]);

  const [dataTrip,setDataTrip] = useState(getDataFromLS())
  console.log(dataTrip);


  function handleSubmit() {
    setDataTrip([...dataTrip,tempDataTrip])

    setTempDataTrip('')
  }
  
  useEffect(() => {
    localStorage.setItem("dataTrip",JSON.stringify(dataTrip))
  },[dataTrip])

  console.log(dataTrip);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col p-20 font-avenir gap-4">
          <h1 className="text-2xl font-bold p-2">Add Trip</h1>
          <label className="px-2">Title Trip</label>
          <input
            className={style}
            onChange={(e) => {
              setTempDataTrip((prev) => ({ ...prev, title: e.target.value }));
            }}
            required
            value={tempDataTrip?.title}
          />

          <label className="px-2">Country</label>
          <select
            className={style}
            onChange={(e) => {
              setTempDataTrip((prev) => ({ ...prev, country: e.target.value }));
            }}
            defaultValue="PLACEHOLDER"
            value={tempDataTrip?.country}
          >
            <option selected={true} disabled="disabled" value="PLACEHOLDER">
              Please Select Country
            </option>
            <option value="Indonesia">Indonesia</option>
            <option value="South Korea">South Korea</option>
            <option value="Australia">Australia</option>
            <option value="Japan">Japan</option>
            <option value="Singapore">Singapore</option>
          </select>

          <label className="px-2">Accommodation</label>
          <input
            className={style}
            onChange={(e) => {
              setTempDataTrip((prev) => ({
                ...prev,
                accommodation: e.target.value,
              }));
            }}
            required
            value={tempDataTrip?.accommodation}
          />

          <label className="px-2">Transportation</label>
          <input
            className={style}
            onChange={(e) => {
              setTempDataTrip((prev) => ({ ...prev, transport: e.target.value }));
            }}
            required
            value={tempDataTrip?.transport}
          />

          <label className="px-2">Eat</label>
          <input
            className={style}
            onChange={(e) => {
              setTempDataTrip((prev) => ({ ...prev, eat: e.target.value }));
            }}
            required
            value={tempDataTrip?.eat}
          />

          <label className="px-2">Duration</label>
          <div className="flex flex-row items-center gap-4">
            <input
              className={style}
              onChange={(e) => {
                setTempDataTrip((prev) => ({ ...prev, day: e.target.value }));
              }}
              required
              value={tempDataTrip?.day}
            />
            <label className="px-2">Day</label>
            <input
              className={style}
              onChange={(e) => {
                setTempDataTrip((prev) => ({ ...prev, night: e.target.value }));
              }}
              required
              value={tempDataTrip?.night}
            />
            <label className="px-2">Night</label>
          </div>

          <label className="px-2">Date Trip</label>
          <input
            className={style}
            type="date"
            onChange={(e) => {
              setTempDataTrip((prev) => ({ ...prev, dateTrip: e.target.value }));
            }}
            required
            value={tempDataTrip?.dateTrip}  
          />

          <label className="px-2">Price</label>
          <input
            className={style}
            type="number"
            onChange={(e) => {
              setTempDataTrip((prev) => ({ ...prev, price: e.target.value }));
            }}
            required
            value={tempDataTrip?.price}
          />
          <label className="px-2">Quota</label>
          <input
            className={style}
            onChange={(e) => {
              setTempDataTrip((prev) => ({ ...prev, quota: e.target.value }));
            }}
            required
            value={tempDataTrip?.quota}
          />
          <label className="px-2">Description</label>
          <textarea
            className={`${style} h-[100px] resize-none pr-12`}
            onChange={(e) => {
              setTempDataTrip((prev) => ({ ...prev, desc: e.target.value }));
            }}
            required
            value={tempDataTrip?.desc}
          ></textarea>

          <label className="px-2">Images</label>
          <div className=" relative w-[300px]">
            <input
              className={`${style} `}
              type="file"
              onChange={(e) => {
                const fileObject = URL.createObjectURL(e.target.files[0])
                setTempDataTrip((prev) => ({ ...prev, images: fileObject }));
              }}
              required
            />
            <img src={Upload} className="absolute top-1 -right-3 " />
          </div>
          <div className="flex justify-center mt-10">
            <Button color="amber" className="text-white py-4 px-24" type="submit">
              Add Trip
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
