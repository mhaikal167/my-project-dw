import * as ELEMENT from "@Views";

const routeAdmin = [
    {
        path: "/trip",
        element: <ELEMENT.IncomeTrip/>
    },
    {
        path: "/admin",
        element: <ELEMENT.HomeAdmin/>
    },
    {
        path: "/add-trip",
        element: <ELEMENT.AddTrip/>
    },
]

export {routeAdmin}