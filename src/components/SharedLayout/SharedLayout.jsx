import { NavTitle, Header, Logo, ContainerHeder } from './SharedLayout.styled';
import { SvgIcon } from './SvgIcon';

export const SharedLayout = () => {
  return (
    <>
      <ContainerHeder>
        <Header>
          <Logo>
            <SvgIcon />
            TESTTASK
          </Logo>
          <nav>
            <NavTitle>Users</NavTitle>

            <NavTitle>Sign up</NavTitle>
          </nav>
        </Header>
      </ContainerHeder>
    </>
  );
};
