import styled from 'styled-components';

export const NavTitle = styled.button`
  width: 100px;
  height: 32px;
  padding: 4px 22px;
  margin-left: 10px;
  border: none;
  border-radius: 80px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 400;
  font-size: 16px;
  background-color: #f4e041;
  
  
`;


export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  
  padding: 13px 0;
  background-color: #fff;
  

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 400;
  margin: 0;
  display: flex;
  align-items: center;
`;

