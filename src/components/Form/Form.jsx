import React from "react";
import { TitleForm } from "./Form.styled";
import {
  Form,
  FormInput,
  FormButton,
  LabelInputPhoto,
  PhotoFormInput,
  WrapperPhoto,
  Wrapper,
  Text,
  WrapperRadio,
} from './Form.styled';


import { addNewUser, togglePosition } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import {  selectPosition } from 'redux/selector';

export const FormSubmit = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [position, setPosition] = useState({});
  const positions = useSelector(selectPosition);
  

  const handleToggle = () => dispatch(togglePosition(positions));

  
  const dispatch = useDispatch();

  const handleChange = event => {
    console.log(event.target.files)
    setSelectedFile(event.target.files[0]);
  }

  const onSubmitForm = event => {
    event.preventDefault();
    const form = event.target;
    

    dispatch(
      addNewUser({
        name: name,
        phone: phone,
        email: email,
        photo: selectedFile,
        position: position,
      })
    );


    form.reset();
  }

  
  return (
    <>
      <TitleForm>Working with POST request</TitleForm>
      <Form onSubmit={onSubmitForm}>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          placeholder="Your name"
          autocomplete="off"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <FormInput
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
          placeholder="Email"
          autocomplete="off"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <FormInput
          type="tel"
          name="phone"
          placeholder="Phon"
          pattern="[\+]\d{2}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
          minlength="13"
          maxlength="13"
          autocomplete="off"
          value={phone}
          onChange={event => setPhone(event.target.value)}
        />
        <p style={{ color: '#7E7E7E', fontSize: 12, marginTop: 4 }}>
          +38 (XXX) XXX - XX - XX
        </p>
        <p
          style={{
            color: '#7E7E7E',
            fontSize: 16,
            marginTop: 25,
            marginBottom: 11,
          }}
        >
          Select your position
        </p>
        <Wrapper>
          <WrapperRadio>
            <input
              type="radio"
              name="positions"
              checked={positions}
              onChange={() => setPosition(handleToggle)}
            />
            <Text>Frontend developer</Text>
          </WrapperRadio>

          <WrapperRadio>
            <input
              type="radio"
              name="positions"
              checked={positions}
              onChange={() => setPosition(handleToggle)}
            />
            <Text>Backend developer</Text>
          </WrapperRadio>

          <WrapperRadio>
            <input
              type="radio"
              name="positions"
              checked={positions}
              onChange={() => setPosition(handleToggle)}
            />
            <Text>Designer</Text>
          </WrapperRadio>

          <WrapperRadio>
            <input
              type="radio"
              name="positions"
              checked={positions}
              onChange={() => setPosition(handleToggle)}
            />
            <Text>QA</Text>
          </WrapperRadio>
        </Wrapper>
        <WrapperPhoto>
          <p style={{ marginLeft: 90, color: '#7E7E7E' }}>Upload your photo</p>
          <LabelInputPhoto>
            <p style={{ marginLeft: 12, color: 'rgba(0, 0, 0, 0.87)' }}>
              Upload
            </p>
            <PhotoFormInput
              type="file"
              accept="image/*,.png,.jpg,.gif,.web" 
              onChange={handleChange}
              style={{ opacity: 0, height: 0, width: 0, lineHeight:0, overflow: 'hidden', padding: 0, margin: 0 }}
            />
          </LabelInputPhoto>
        </WrapperPhoto>

        <FormButton type="submit">Sign up</FormButton>
      </Form>
    </>
  );
};