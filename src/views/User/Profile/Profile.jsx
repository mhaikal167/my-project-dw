import { DefaultProfile, Email, Maps, Name, Phone } from "@Assets/images";
import { ModalProfile } from "@Components";
import { Button, Card } from "@material-tailwind/react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Profile(props) {

  const [openProfile,setOpenProfile] = useState(false)
  const {auth} = useSelector((state) =>state)
  return (
    <>
      <div className="mb-40">
        <ModalProfile handleProfile={setOpenProfile} openProfile={openProfile} user={auth?.user}/>

        <Card className="p-4 border border-gray-200 w-[900px] m-auto mt-10 font-avenir  px-10 ">
          <div className="relative">
            <h1 className="mb-3 text-2xl font-bold ">Personal Info</h1>
            <div className="flex gap-4 justify-between">
              <div className="w-full flex gap-7 mb-4 flex-col">
                <div className="flex gap-7 mb-4 ">
                  <img src={Name} alt="icon" />
                  <p className="font-bold">
                    {auth?.user.fullName}
                    <p className="text-gray-500 font-normal">Full Name</p>
                  </p>
                </div>
                <div className="flex gap-7 mb-4 ">
                  <img src={Email} alt="icon" />
                  <p className="font-bold">
                    {auth?.user.email}
                    <p className="text-gray-500 font-normal">Email</p>
                  </p>
                </div>
                <div className="flex gap-7 mb-4 ">
                  <img src={Phone} alt="icon" />
                  <p className="font-bold">
                    {auth?.user.phone}
                    <p className="text-gray-500 font-normal">Phone</p>
                  </p>
                </div>
                <div className="flex gap-7 mb-4 ">
                  <img src={Maps} alt="icon" />
                  <p className="font-bold">
                    {auth?.user.address}
                    <p className="text-gray-500 font-normal">Address</p>
                  </p>
                </div>
              </div>
              <div className="w-[500px]">
                <img src={auth?.user.picture ? auth?.user.picture :  DefaultProfile} alt="icon" className="w-full h-[300px] object-fill" />
                <Button color="amber" className="w-full text-white mt-5" onClick={() => setOpenProfile((prev) => !prev)}>
                  Change Photo Profile
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>  
    </>
  );
}
