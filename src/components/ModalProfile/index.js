import { Flower, PalmLeft } from "@Assets/images";
import { DummyImg } from "@Assets/temp-image";
import { updateUserInitiate } from "@Utils/redux/actions/authAction";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
} from "@material-tailwind/react";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ModalProfile({ handleProfile, openProfile, user }) {
  const [dataProfile, setDataProfile] = useState({
    name:"",
    email:"",
    phone:"",
    gender:"",
    address:"",
    image:""
  });
  const [preview, setPreview] = useState(null);
  const {auth} = useSelector((state) => state)
  const d = useDispatch();
  const idUser = auth?.user.id
  const token= auth?.token

  useEffect(() => {
    setDataProfile(user)
  },[])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.set("name", dataProfile.fullName);
    formData.set("email", dataProfile.email);
    formData.set("phone", dataProfile.phone);
    formData.set("address", dataProfile.address);
    formData.set("image", dataProfile.image[0], dataProfile.image[0].name);

    d(updateUserInitiate(idUser,formData,token))
    handleProfile()
  };
  return (
    <Fragment>
      <Dialog
        size="sm"
        open={openProfile}
        handler={handleProfile}
        className="bg-transparent shadow-none"
      >
        <Card
          className={"mx-auto w-full h-[500px] overflow-scroll no-scrollbar"}
        >
          <form onSubmit={handleSubmit}>
            <img src={PalmLeft} className="w-[133px]" alt="icon" />
            <img
              src={Flower}
              className="w-[90px] absolute right-0 top-0"
              alt="icon"
            />
            <h1 className="text-center font-avenir text-4xl font-bold">
              Profile
            </h1>
            <CardBody className="flex flex-col gap-4">
              <label className="px-2">Full Name</label>
              <input
                className="bg-[#d2d2d25b] py-2 rounded-md px-4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                type="text"
                value={dataProfile?.fullName}
                onChange={(e) =>
                  setDataProfile({ ...dataProfile, fullName: e.target.value })
                }
              />
              <label className="px-2">Email</label>
              <input
                className="bg-[#d2d2d25b] py-2 rounded-md px-4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                type="email"
                value={dataProfile?.email}
                onChange={(e) =>
                  setDataProfile({ ...dataProfile, email: e.target.value })
                }
              />
              <label className="px-2">Phone</label>
              <input
                className="bg-[#d2d2d25b] py-2 rounded-md px-4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                type="text"
                value={dataProfile?.phone}
                onChange={(e) =>
                  setDataProfile({ ...dataProfile, phone: e.target.value })
                }
              />
              <label className="px-2">Gender</label>
              <select
                onChange={(e) =>
                  setDataProfile({ ...dataProfile, gender: e.target.value })
                }
                className="bg-[#d2d2d25b] py-2 border-blue-gray-800  border  rounded-md px-4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              >
                <option disabled value="PLACEHOLDER">
                  {" "}
                  Please Select Gender
                </option>
                <option
                  selected={dataProfile?.gender === "Male" ? true : false}
                  value="Male"
                >
                  Male
                </option>
                <option
                  selected={dataProfile?.gender === "Female" ? true : false}
                  value="Female"
                >
                  Female
                </option>
              </select>
              <label className="px-2">Address</label>
              <textarea
                className="bg-[#d2d2d25b] py-2 rounded-md px-4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 resize-none h-[100px]"
                value={dataProfile?.address}
                onChange={(e) =>
                  setDataProfile({
                    ...dataProfile,
                    address: e.target.value,
                  })
                }
              ></textarea>
             <div className="flex justify-center">
              <div className="items-center mr-5 relative bg-transparent z-10 ">
                <img
                  src={preview ? preview : dataProfile?.picture ? dataProfile?.picture : DummyImg}
                  alt=""
                  className="absolute w-[200px] h-full -z-10 object-cover rounded-2xl"
                />
                <input
                  type="file"
                  className="z-20 w-[200px] h-[200px] p-2"
                  onChange={(e) => {
                    let url = URL.createObjectURL(e.target.files[0]);
                    if(dataProfile?.picture){
                      setPreview(dataProfile?.picture);
                    }
                    setPreview(url)
                    setDataProfile((prev) => ({ ...prev, image: e.target.files}));
                  }}
                />
              </div>
            </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                variant="gradient"
                className="text-white"
                color="amber"
                type="submit"
                fullWidth
              >
                Profile
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </Fragment>
  );
}
