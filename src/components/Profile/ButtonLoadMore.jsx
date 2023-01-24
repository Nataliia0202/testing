import { ShowMore } from "./Profile.styled";
import { useDispatch } from "react-redux";
import { fetchUsers } from "redux/operations";


export const ButtonLoadMore = ({text}) => {
  const dispatch = useDispatch();
  return (
    <ShowMore type="button" onClick={() => dispatch(fetchUsers())}>
      {text}
    </ShowMore>
  );
};