import { Icon2 } from "@Assets/images";
import { DummyImg } from "@Assets/temp-image";
import { paymentInitiate, paymentPendingRemove } from "@Utils/redux/actions/transactionAction";
import { Button, Card, Dialog, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Payment(props) {
  const [payment, setPayment] = useState();
  const [paySuccess, setPaySuccess] = useState(false);
  const [openDialog,setOpenDialog] = useState(false)
  const [user, setUser] = useState();
  const [status, setStatus] = useState("");
  const [preview, setPreview] = useState(null);
  const { auth, transaction,tours } = useSelector((state) => state);
  const d = useDispatch()
  const dataPayment = tours.tour

  const TABLE_HEAD = ["No", "Full Name", "Gender", "Phone", "", ""];

  useEffect(() => {
    if (auth?.user) {
      setUser(auth.user);
    } else {
      setUser([]);
    }
  }, [auth?.user]);

  useEffect(() => {
    if (transaction?.paymentPen) {
      setPayment(transaction.paymentPen);
    } else {
      setPayment([]);
      setOpenDialog((prev) => !prev)
    }
  }, [transaction?.paymentPen]);

  console.log(payment);
  const handleSubmitPayment = (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.set('counter_qty',payment?.counter_qty);
    formData.set('total',payment?.total);
    formData.set('status',"Waiting Approve");
    formData.set('tour_id',payment?.tour_id);

    d(paymentInitiate(formData,auth.token))
    d(paymentPendingRemove())
    setPaySuccess(true)
  }
  const TABLE_ROWS = [
    {
      no: "1",
      fullName: user?.fullName,
      gender: user?.gender,
      phone: user?.phone,
      qty: "Qty",
      total: payment?.counter_qty,
    },
    {
      no: "",
      fullName: "",
      gender: "",
      phone: "",
      qty: "Total",
      total: payment?.total?.toLocaleString("en-ID", {
        style: "currency",
        currency: "IDR",
      }),
    },
  ];

  return (
    <>
    <div className="w-screen p-12 m-auto">
        <form onSubmit={handleSubmitPayment}>
        <Card className="w-full p-12 border border-gray-200">
          <div className="flex justify-between">
            <img src={Icon2} alt="icon" className="w-48" />
            <div className="w-[220px] flex justify-center flex-col p-4">
              <p className="text-end text-2xl pr-2">Booking</p>
              <p className="text-center">{payment?.book}</p>
            </div>
          </div>
          <div className="flex justify-between mb-20">
            <div className="mx-12 mt-5 items-center">
              <h1 className="font-extrabold text-2xl text-black">
                {payment?.title}
              </h1>
              <p className="text-gray-500">{payment?.desc}</p>
              <p className="bg-[#ec7a7a48] text-[#ec7a7ad4] font-bold px-3 mt-10 font-avenir w-[160px] rounded ">
                {payment?.status}
              </p>
            </div>
            <div className=" flex flex-col justify-start">
              <div>
                <div className=" p-4">
                  <b className="text-xl text-black">Date Trip</b>
                  <p>{dataPayment?.date_trip}</p>
                </div>
                <div className=" p-4">
                  <b className="text-xl text-black">Accomodation</b>
                  <p>{dataPayment?.accomodation}</p>
                </div>
              </div>
            </div>
            <div className="items-center flex flex-col mr-20">
              <div>
                <div className=" p-4">
                  <b className="text-xl text-black">Duration</b>
                  <p>{dataPayment?.day} Day {dataPayment?.night} Night</p>
                </div>
                <div className=" p-4">
                  <b className="text-xl text-black">Transportation</b>
                  <p>{dataPayment?.transport}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="items-end mr-5 ml-20 relative bg-transparent z-10">
                <img
                  src={DummyImg}
                  alt=""
                  className="absolute w-[200px] h-full -z-10 object-cover"
                />
              </div>
              <p className="text-center">upload payment proof</p>
            </div>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-500  p-4 w-[100px]"
                  >
                    <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                ({ no, fullName, gender, phone, qty, total }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4 text-[#FF0000]"
                    : "p-4 border-b border-blue-gray-500 ";

                  return (
                    <tr key={no}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {no}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {fullName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {gender}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {phone}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold text-end text-xl"
                        >
                          {qty}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          variant="small"
                          className="font-bold text-xl "
                        >
                          : {total}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </Card>
        <div className="flex justify-end mr-4 my-5">
          <Button
            color="amber"
            className="text-white w-[198px]"
            type="submit"
            >
            Pay
          </Button>
        </div>
        </form>
      </div>
      <>
      {/* <div className="h-screen">

      </div>
      <Dialog
        size="lg"
        open={openDialog}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full">
          <div className=" max-h-full px-28">
            <p className="text-center text-2xl text-black">Belum ada payment yang dibuat <a href="/" className="underline font-bold"> Buatlah dulu </a>
               thank you
            </p>
          </div>
        </Card>
      </Dialog> */}
      </>
      
      <Dialog
        size="lg"
        open={paySuccess}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full">
          <div className=" max-h-full px-28">
            <p className="text-center text-2xl text-black">
              Your payment will be confirmed within 1 x 24 hours To see orders
              click{" "}
              <a href="/payment-pending" className="underline font-bold">
                Here
              </a>{" "}
              thank you
            </p>
          </div>
        </Card>
      </Dialog>
    </>
  );
}
