import styled from "styled-components";




export const Avatar = styled.img`
  display: flex;
  max-width: 30%;
  border-radius: 50%;
  border: none;
`;
export const TitelProfile = styled.p`
  font-size: 16px;
  line-height: 26px;
  margin-top: 20px;
  
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
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  grid-column-gap: 0px;

  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  margin-top: 50px;
  @media screen and (min-width: 1024px) {
    width: 1170px;
  }
`;

 export const ListItem = styled.li`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #fff;
   padding: 20px 20px;
   @media screen and (min-width: 767px) {
     width: 328px;
   }

   @media screen and (max-width: 768px) {
     width: 344px;
   }

   @media screen and (min-width: 1024px) {
     width: 282px;
   }

 `;

export const ShowMore = styled.button`
   display: block;
   margin: 0 auto;
   margin-bottom: 140px;
   width: 130px;
   height: 34px;
   padding: 4px 22px;
   border: none;
   border-radius: 80px;
   text-align: center;
   color: rgba(0, 0, 0, 0.87);
   font-weight: 400;
   font-size: 16px;
   line-height: 26px;
   background-color: #f4e041;
 `;


