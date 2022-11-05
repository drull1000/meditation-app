import Header from "../components/header"
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
        <Header />
        <Outlet/>
    </>
  );
}