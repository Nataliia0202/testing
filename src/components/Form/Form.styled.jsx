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
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 16px;
  outline: none;
  border: 1px solid #d0cfcf;
  margin-top: 50px;
  border-radius: 4px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
