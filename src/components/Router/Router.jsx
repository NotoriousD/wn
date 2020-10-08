import React, { lazy, Suspense } from "react";
import BrandSort from "../BrandSort/BrandSort";
import { Circular } from "../../components/Circular/Circular";
import { DatePicker } from "../DatePicker/DatePicker";
import { Switch, Route } from "react-router-dom";
import "./styles.css";

const routes = [
  {
    id: 1,
    page: lazy(() => import("../../pages/Overview/Overview")),
    path: "/admin/overview",
  },
  {
    id: 2,
    page: lazy(() => import("../../pages/DynamicVariables/DynamicVariables")),
    path: "/admin/dynamic_variable",
  },
  {
    id: 3,
    page: lazy(() => import("../../pages/Daily/Daily")),
    path: "/admin/daily",
  },
  {
    id: 4,
    page: lazy(() => import("../../pages/Monthly/Monthly")),
    path: "/admin/monthly",
  },
  {
    id: 5,
    page: lazy(() => import("../../pages/Casinos/Casinos")),
    path: "/admin/casinos",
  },
  {
    id: 6,
    page: lazy(() => import("../../pages/CasinoDaily/CasinoDaily")),
    path: "/admin/casinos_daily",
  },
  {
    id: 11,
    page: lazy(() => import("../../pages/Compaigns/Compaigns")),
    path: "/admin/compaigns",
  },
  {
    id: 12,
    page: lazy(() => import("../../pages/Assets/Assets")),
    path: "/admin/assets",
  },
  {
    id: 13,
    page: lazy(() => import("../Reports/Reports")),
    path: "/admin/reports",
  },
];

const Router = () => {
  return (
    <div className="main-content">
      <div className="top-line">
        <DatePicker />
        <BrandSort />
      </div>
      <Suspense fallback={<Circular />}>
        <Switch>
          {routes.map(({ id, path, page }) => (
            <Route key={id} exact path={path} component={page} />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
};

export default Router;
