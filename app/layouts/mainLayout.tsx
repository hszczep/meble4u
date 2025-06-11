import { Outlet } from "react-router";

import Footer from "~/components/Footer";
import Topbar from "~/components/Topbar";

export default function MainLayout() {
  return (
    <>
      <Topbar />
      <Outlet />
      <Footer />
    </>
  )
}