import React from "react";
import { StatsCard } from "../StatsCard/StatsCard";

export const Dashboard = ({ stats }) => {
  return (
    <div className="dashboard">
      <StatsCard title={"Clicks"} value={stats.clicks} />
      <StatsCard title={"Registrations"} value={stats.registrations} />
      <StatsCard title={"FTD"} value={stats.ftd} />
      <StatsCard title={"Commission"} value={stats.commission} symbol={"£"} />
      <StatsCard title={"Deposits"} value={stats.deposits} symbol={"£"} />
      <StatsCard title={"Net Cash"} symbol={"£"} value={stats.net_cash} />
    </div>
  );
};
