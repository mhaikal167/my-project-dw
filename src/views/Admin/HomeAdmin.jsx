import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

import { ModalTrans } from "@Components";
import { getTransInitiate } from "@Utils/redux/actions/transactionAction";
import {
  Card,
  CardBody,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";

export default function HomeAdmin() {
  const [TABLE_ROWS, SET_TABLE_ROWS] = useState([]);
  const [open, setOpen] = useState(false);
  const d = useDispatch();
  const { transaction } = useSelector((state) => state);
  const [selected, setSelected] = useState();
  const handleOpen = (params) => {
    const selectedTrip = TABLE_ROWS.find((james) => james.id === params);
    setSelected(selectedTrip);
    setOpen(!open);
  };
  console.log(selected ,"ini selecc");

  useEffect(() => {
    d(getTransInitiate());
  }, []);
  useEffect(() => {
    if (transaction?.payment != []) {
      SET_TABLE_ROWS(transaction?.payment);
    }
  }, [transaction?.payment]);
  const TABLE_HEAD = [
    "No",
    "User",
    "Trip",
    "Status Payment",
    "Action",
  ];
  return (
    <div className="m-12">
      <div className=" flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div className="p-4 mt-10">
          <button
            className="bg-blue-gray-600 text-white p-12"
            onClick={() => d.dispatch.authDispatch({ type: "TEST DOANG" })}
          >
            Click me
          </button>
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
                {TABLE_HEAD?.map((head) => {
                  return (
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
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS?.map((item, index) => {
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
                          {index+1}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.user.fullName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.tour.title}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={item?.status}
                          color={
                            item?.status === "success"
                              ? "green"
                              : item?.status === "pending"
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
                          onClick={() => handleOpen(item.id)}
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
