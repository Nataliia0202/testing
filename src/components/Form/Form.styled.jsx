import styled from 'styled-components';


export const TitleForm = styled.h2`
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  
  color: rgba(0, 0, 0, 0.87);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  

  
`;

export const FormInput = styled.input`
  display: block;
  width: 380px;
  height: 54px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 16px;
  outline: none;
  border: 1px solid #d0cfcf;
  margin-top: 50px;
  border-radius: 4px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
  &:hover,
  &:focus {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  gap: 12px;
  flex-flow: column wrap;
`;

export const Text = styled.p`
  flex-grow: 1;
  font-size: 16px;
  line-height: 26px;
  margin-left:12px
`;
export const WrapperRadio = styled.div`
    display: flex;
 `;

export const FormButton = styled.button`
  width: 100px;
  height: 32px;
  padding: 4px 22px;
  margin-left: 10px;
  margin-top: 50px;
  border: none;
  border-radius: 80px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 400;
  font-size: 16px;
  background-color: #b4b4b4;
`;

export const ButtonInputPhoto = styled.button`
  display: inline-block;
  width: 83px;
  height: 54px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: 4px 0px 0px 4px;
`;


export const PhotoFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 54px;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 16px;
  
`;

export const WrapperPhoto = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  margin-top: 47px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #d0cfcf;
  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;