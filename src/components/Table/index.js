import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["No", "Full Name", "Gender", "Phone", ""];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
];
 
export default function Example() {
  return (
    <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 p-4">
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
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}