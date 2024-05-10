import { getServerSession } from "next-auth";
import { Fragment } from "react";
import SidebarApp from "./_components/SidebarApp";
import { authOptions } from "@/lib/auth-option";
import prisma from "@/lib/db";
import type { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function ApplicationLayout({children}: {children:React.ReactNode}){
    const session:any = await getServerSession(authOptions)
    const user = await prisma.user.findUnique({where:{id:session.user.id, email:session.user.email}})
    if(!user){
        signOut()
        redirect('/auth-to-do')
    }
    return (
        <Fragment>
            <SidebarApp user={user as User}></SidebarApp>
            {children}
        </Fragment>
    )
}