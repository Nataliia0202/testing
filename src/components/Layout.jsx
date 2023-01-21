import styled from 'styled-components';
export const Container = styled.div`
  min-width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 360px) {
    width: 360px;
    padding: 0 16px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding: 0 60px;
  }

  @media screen and (min-width: 1170px) {
    width: 1170px;
  }
`;