import {Navigate, type RouteObject} from "react-router";
import Workbench from "@/pages/dashboard/workbench";
import DefaultLayout from "@/layouts/default";
import {Component} from "@/routes/utils";

export const routersSection: RouteObject[] = [

  {
    element: (
      <DefaultLayout />
    ),
    children: [
      {path: '/', element: <Workbench />},
      {path: 'analysis', element: Component("/pages/analysis")}
    ]
  }
];