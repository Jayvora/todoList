import React from "react";
import { useSelector } from "react-redux";
import { getRandomId } from "../../utils/globalUtils";
import AddList from "../AddList/AddList";
import CardsList from "../CardsList/CardsList";
import s from "./Dashboard.module.css";

const Dashboard = () => {
  const cardsList = useSelector((state) => state.dashboard.cardsList);

  return (
    <div className={s.list}>
      {cardsList.map((list) => {
        return (
          <React.Fragment key={getRandomId()}>
            <CardsList list={list} />
          </React.Fragment>
        );
      })}
      <AddList />
    </div>
  );
};

export default Dashboard;
