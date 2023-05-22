import { PencilIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import {
  Card,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { ModalTrans } from "@Components";

const TABLE_HEAD = [
  "No",
  "User",
  "Trip",
  "Bukti Transfer",
  "Status Payment",
  "Action",
];

const TABLE_ROWS = [
  {
    no: "1",
    user: "Radif Ganteng",
    trip: "6D/4N Fun Tassie Vacation...",
    img: "bca.jpg",
    status: "Pending",
  },
  {
    no: "2",
    user: "Haris Rahman",
    trip: "6D/4N Fun Exciting Summer...",
    img: "bni.jpg",
    status: "Approve",
  },
  {
    no: "3",
    user: "Amin Subagiyo",
    trip: "6D/4N Fun Tassie Vacation...",
    img: "permata.jpg",
    status: "cancel",
  },
  {
    no: "4",
    user: "Radif Ganteng",
    trip: "6D/4N Fun Tassie Vacation...",
    img: "bca.jpg",
    status: "cancel",
  },
  {
    no: "5",
    user: "Radif Ganteng",
    trip: "6D/4N Fun Tassie Vacation...",
    img: "bca.jpg",
    status: "Pending",
  },
  {
    no: "6",
    user: "Radif Ganteng",
    trip: "6D/4N Fun Tassie Vacation...",
    img: "bca.jpg",
    status: "Approve",
    status2: "Approve",
    status3: "Approve",
  },
];

export default function HomeAdmin() {
  const [open, setOpen] = useState(false);
  const [selected,setSelected] = useState()
  const handleOpen = (params) => {
    const selectedTrip = TABLE_ROWS.find((james) => james.no === params);
    setSelected(selectedTrip)
    setOpen(!open);
  };
  console.log(selected);

  return (
    <div className="m-12">
      <div className=" flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div className="p-4 mt-10">
          <Typography variant="h5" color="blue-gray">
            Incoming Transactions
          </Typography>
        </div>
      </div>
      <ModalTrans handleOpen={handleOpen} open={open} />
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
              {TABLE_ROWS.map(({ no, user, trip, img, status }, index) => {
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
                          {no}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {user}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {trip}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal capitalize"
                        >
                          {img}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={status}
                          color={
                            status === "Approve"
                              ? "green"
                              : status === "Pending"
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
                          onClick={() => handleOpen(no)}
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
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button variant="outlined" color="blue-gray" size="sm">
            Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton variant="outlined" color="blue-gray" size="sm">
              1
            </IconButton>
            <IconButton variant="text" color="blue-gray" size="sm">
              2
            </IconButton>
            <IconButton variant="text" color="blue-gray" size="sm">
              3
            </IconButton>
            <IconButton variant="text" color="blue-gray" size="sm">
              ...
            </IconButton>
            <IconButton variant="text" color="blue-gray" size="sm">
              8
            </IconButton>
            <IconButton variant="text" color="blue-gray" size="sm">
              9
            </IconButton>
            <IconButton variant="text" color="blue-gray" size="sm">
              10
            </IconButton>
          </div>
          <Button variant="outlined" color="blue-gray" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
