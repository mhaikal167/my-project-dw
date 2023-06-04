import { PencilIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";

import {
  Card,
  Typography,
  CardBody,
  Chip,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { AppContext } from "@Utils/context/AppContext";
import { ModalTrans } from "@Components";
import Swal from 'sweetalert2'

const TABLE_HEAD = [
  "No",
  "User",
  "Trip",
  "Bukti Transfer",
  "Status Payment",
  "Action",
];


export default function HomeAdmin() {
  const [TABLE_ROWS , SET_TABLE_ROWS] = useState([]);
  const [open, setOpen] = useState(false);
const [s,d] = useContext(AppContext)

  const [selected,setSelected] = useState()
  const handleOpen = (params) => {
    const selectedTrip = TABLE_ROWS.find((james) => james.no === params);
    setSelected(selectedTrip)
    setOpen(!open);
  };
  console.log(s ,'iniiii state');
  // console.log(dispatch() ,'iniiii dispatch');

  return (
    <div className="m-12">
      <div className=" flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div className="p-4 mt-10">
          <button className="bg-blue-gray-600 text-white p-12" onClick={() => d.dispatch.authDispatch({type:"TEST DOANG"})} >Click me</button>
          <Typography variant="h5" color="blue-gray">
            Incoming Transactions
          </Typography>
        </div>
      </div>
      <ModalTrans handleOpen={handleOpen} open={open} data={selected} />
      <Card className="h-full w-full">
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((item, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {item.no}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.user}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.trip}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal capitalize"
                        >
                          {item.img}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={item?.status}
                          color={
                            item?.status === "Approve"
                              ? "green"
                              : item?.status === "Pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit Transaction">
                        <IconButton
                          variant="text"
                          color="blue-gray"
                          onClick={() => handleOpen(item.no)}
                        >
                          <MagnifyingGlassIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
       
      </Card>
    </div>
  );
}
