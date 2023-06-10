import {
  Card,
  Dialog,
} from "@material-tailwind/react";
import { Fragment } from "react";
export default function NotFound() {
  return (
    <Fragment>
      <Dialog open={true} size="xl">
        <Card className="w-full p-12 border border-gray-200 shadow-none">
          NOT FOUND
        </Card>
      </Dialog>
      <div>
        <div className="w-full h-screen border border-black">

        </div>
      </div>
    </Fragment>
  );
}
