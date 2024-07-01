import { getServerSession } from "next-auth";
import { Fragment } from "react";
import SidebarApp from "./_components/SidebarApp";
import { authOptions, getCredential } from "@/lib/auth-option";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

export default async function ApplicationLayout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  const session: any = await getServerSession(authOptions);
  if (!session) {
    signOut();
    redirect("/auth-to-do");
  }
  const user = await getCredential(session.email);
  if (!user) {
    signOut();
    redirect("/auth-to-do");
  }
  return (
    <Fragment>
      <Toaster />
      <SidebarApp user={user}></SidebarApp>
      {children}
      {modal}
    </Fragment>
  );
}
