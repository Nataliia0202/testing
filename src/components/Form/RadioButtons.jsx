import { Wrapper, Text, WrapperRadio } from "./Form.styled";


export const RadioButtons = () => {
    return (
      <Wrapper>
        <WrapperRadio>
          <input type="radio" />
          <Text>Frontend developer</Text>
        </WrapperRadio>

        <WrapperRadio>
          <input type="radio" />
          <Text>Backend developer</Text>
        </WrapperRadio>

        <WrapperRadio>
          <input type="radio" />
          <Text>Designer</Text>
        </WrapperRadio>

        <WrapperRadio>
          <input type="radio" />
          <Text>QA</Text>
        </WrapperRadio>
      </Wrapper>
    );
}