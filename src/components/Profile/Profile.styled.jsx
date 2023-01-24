import styled from "styled-components";

export const WrapperProfile = styled.div`
  max-width: 50%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;


export const Avatar = styled.img`
  display: flex;
  max-width: 30%;
  border-radius: 50%;
  border: none;
`;
export const TitelProfile = styled.p`
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;

export const ProfileEmail = styled.a`
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;

export const ProfileTel = styled.a`
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;
export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 140px;
`;

 export const ListItem = styled.li`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #fff;
   padding: 20px 20px;
 `;


