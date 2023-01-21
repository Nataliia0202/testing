import { NavTitle, Header, Logo } from './SharedLayout.styled';
import { SvgIcon } from './SvgIcon';

export const SharedLayout = () => {
  return (
    <>
      
        <Header>
          <Logo>
            <SvgIcon/>
            TESTTASK
          </Logo>
          <nav>
            <NavTitle>Users</NavTitle>

            <NavTitle>Sign up</NavTitle>
          </nav>
        </Header>
      
    </>
  );
};
