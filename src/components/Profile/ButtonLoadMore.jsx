import { ShowMore } from "./Profile.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "redux/operations";
// import { useState } from "react";
import { selectPage } from "redux/selector";

export const ButtonLoadMore = ({ text }) => {
  // const [page, setPage] = useState(1)
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  

  return (
    <ShowMore type="button" onClick={() => dispatch(fetchUsers(page))}>
      {text}
    </ShowMore>
  );
};