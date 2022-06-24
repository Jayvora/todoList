import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashboardActions } from "../../store/dashboard";
import { getRandomId } from "../../utils/globalUtils";
import s from "./AddList.module.css";

const AddList = () => {
  const [listName, setListName] = useState("");
  const dispatch = useDispatch();
  const cardsList = useSelector((state) => state.dashboard.cardsList);

  const dispatchState = (field, value) => {
    dispatch(dashboardActions.updateState({ field, value }));
  };

  const onChangeListName = (e) => {
    setListName(e.target.value);
  };

  const onAddList = () => {
    const list = {
      id: getRandomId(),
      name: listName,
      cards: [],
    };
    const updatedCardsList = [...cardsList, list];
    dispatchState("cardsList", updatedCardsList);
    setListName("");
  };

  return (
    <div className={s.addList}>
      <input
        type="text"
        placeholder="Enter List title"
        value={listName}
        onChange={onChangeListName}
      />
      <button type="button" onClick={onAddList}>
        Add List
      </button>
    </div>
  );
};

export default AddList;
