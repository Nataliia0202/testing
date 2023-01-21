import styled from 'styled-components';
import imgMobile from '../../images/imag360.jpg';
import imgTablet from '../../images/image768.jpg';
import imgDacktop from '../../images/imag1024.jpg';
import imgDacktopBig from '../../images/imag2560.jpg';

export const HeroTitel = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const HeroSection = styled.section`
  @media screen and (min-width: 360px) {
    background-image: url(${imgMobile});
    height: 500px;
  }
  @media screen and (min-width: 768px) {
    background-image: url(${imgTablet});
    height: 500px;
  }

  @media screen and (min-width: 1024px) {
    background-image: url(${imgDacktop});

    height: 650px;
  }

  @media screen and (min-width: 1170px) {
    background-image: url(${imgDacktopBig});

    height: 650px;
  }

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-left: auto;
  margin-right: auto;
  overflow: overlay;
  display: block;
  max-width: 1170px;
  object-fit: contain;
`;

export const HeroText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
`;

export const HeroButton = styled.button`
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
 export const HeroWraper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 30px 20px;
   gap: 32px;
   @media screen and (min-width: 768px) {
     
     padding: 89px 194px;
   }

   @media screen and (min-width: 1024px) {
     
     padding: 164px 322px;
   }

   @media screen and (min-width: 2560px) {
     padding: 164px 395px;
   }
 `;

