import { getServerSession } from "next-auth";
import { Fragment } from "react";

export default async function ApplicationLayout({children}: {children:React.ReactNode}){
    // getServerSession()
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}