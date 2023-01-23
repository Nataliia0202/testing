import { SuccessIcon } from "./SuccessIcon";
import { SuccessTitle, WrapperSuccess } from './Success.styled';

export const Success = () => {
    return (
      <>
        <WrapperSuccess>
          <SuccessTitle>User successfully registered</SuccessTitle>
          <SuccessIcon />
        </WrapperSuccess>
      </>
    );
}