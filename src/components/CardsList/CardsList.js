import React, { useState } from "react";
import { getRandomId } from "../../utils/globalUtils";
import Card from "../Card/Card";
import s from "./CardsList.module.css";
import close from "../../icons/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { dashboardActions } from "../../store/dashboard";

const CardsList = ({ list }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const cardsList = useSelector((state) => state.dashboard.cardsList);

  const dispatchState = (field, value) => {
    dispatch(dashboardActions.updateState({ field, value }));
  };

  const onAddCard = () => {
    const cardDetails = {
      id: getRandomId(),
      title: title,
      description: description,
    };
    const updatedCards = [...list.cards, cardDetails];
    const updatedList = cardsList.map((item) => {
      if (item.id === list.id) {
        return { ...item, cards: updatedCards };
      }
      return { ...item };
    });
    dispatchState("cardsList", updatedList);
  };

  const onRemoveList = () => {
    const updatedList = cardsList.filter((_) => _.id !== list.id);
    dispatchState("cardsList", updatedList);
  };

  const onRemoveCard = (card) => {
    const updatedCardList = cardsList.map((item) => {
      if (item.id === list.id) {
        const updatedCards = item?.cards.filter((_) => _.id !== card.id);
        return { ...item, cards: updatedCards };
      }
      return { ...item };
    });
    dispatchState("cardsList", updatedCardList);
  };

  return (
    <div className={s.cardList}>
      <div className={s.title}>
        <h1>{list?.name}</h1>
        <img src={close} alt="close" onClick={onRemoveList} />
      </div>
      {list?.cards?.map((card) => {
        return (
          <React.Fragment key={getRandomId()}>
            <Card card={card} onRemoveCard={() => onRemoveCard(card)} />
          </React.Fragment>
        );
      })}
      <div className={s.cardDetails}>
        <input
          type="text"
          value={title}
          placeholder="Enter Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="Enter the text for this card"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="button" onClick={onAddCard}>
          Add Card
        </button>
      </div>
    </div>
  );
};

export default CardsList;
