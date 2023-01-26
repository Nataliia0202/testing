import { Wrapper, Text, WrapperRadio } from "./Form.styled";
import { useDispatch } from "react-redux";
import { togglePosition } from "redux/operations";


export const RadioButtons = ({ data }) => {
  const dispatch = useDispatch();
  const handleToggle = () => dispatch(togglePosition(data));
  return (
    <Wrapper>
      <WrapperRadio>
        <input type="radio" onChange={handleToggle}  />
        <Text>Frontend developer</Text>
      </WrapperRadio>

      <WrapperRadio>
        <input type="radio" onChange={handleToggle} />
        <Text>Backend developer</Text>
      </WrapperRadio>

      <WrapperRadio>
        <input type="radio" onChange={handleToggle} />
        <Text>Designer</Text>
      </WrapperRadio>

      <WrapperRadio>
        <input type="radio" onChange={handleToggle} />
        <Text>QA</Text>
      </WrapperRadio>
    </Wrapper>
  );
};