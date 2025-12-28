import { Outlet } from "react-router";
import {Suspense} from "react";

export default function Main() {
  return <>
    <div className="main">
      <Suspense>
          <Outlet />
      </Suspense>
    </div>
  </>
}
