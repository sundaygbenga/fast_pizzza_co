import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ id }) {
  const dispatch = useDispatch();
  function handleDeleteCartItem(id) {
    dispatch(deleteItem(id));
  }

  return (
    <Button type="small" onClick={() => handleDeleteCartItem(id)}>
      Delete
    </Button>
  );
}

export default DeleteItem;
