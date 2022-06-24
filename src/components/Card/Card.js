import s from "./Card.module.css";
import close from "../../icons/close.svg";

const Card = ({ card = {}, onRemoveCard }) => {
  return (
    <div className={s.card} draggable={true}>
      <div className={s.title}>
        <h3>{card?.title}</h3>
        <img src={close} alt="close" onClick={onRemoveCard} />
      </div>
      <div>{card?.description}</div>
    </div>
  );
};

export default Card;
