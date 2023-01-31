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
 
  WrapperRadio,
} from './Form.styled';


import { addNewUser, togglePosition, getToken } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef } from "react";
import { selectPosition, selectUsers } from 'redux/selector';
import { RadioBatton } from "./RadioBatton";
import { useEffect } from "react";


export const FormSubmit = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const filePicker = useRef(null);
  const userToken = useSelector(selectUsers);
  const allradioButton = useSelector(selectPosition);
  // const [uploaded, setUploaded] = useState(null);
  const dispatch = useDispatch();

  const [topping, setTopping] = useState(null);

  const onOptionChange = e => {
    setTopping(e.target.value);
  };

  const handleChange = event => {
    console.log(event.target.files);
    setSelectedFile(event.target.files[0]);
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  const onSubmitForm = event => {
    event.preventDefault();
    const form = event.target;

    if (!selectedFile) {
      alert('Please select a file');
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedFile);

   

    dispatch(
      addNewUser({
        name: name,
        phone: phone,
        email: email,
        photo: formData,
        position_id: topping,
      })
    );
    dispatch(getToken(userToken));

    form.reset();
  };
  useEffect(() => {
    dispatch(togglePosition());
  }, [dispatch]);

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
          placeholder="Phone"
          pattern="^[\+]{0,1}380([0-9]{9})$"
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
          {allradioButton.map(({ id, name }) => {
            return (
              <WrapperRadio key={id}>
                <RadioBatton
                  id={id}
                  name={name}
                  value={name}
                  checked={topping === name}
                  onChange={onOptionChange}
                />
              </WrapperRadio>
            );
          })}
        </Wrapper>
        <WrapperPhoto>
          {selectedFile ? (
            <p style={{ marginLeft: 90, color: '#7E7E7E' }}>
              {selectedFile.name}
            </p>
          ) : (
            <p style={{ marginLeft: 90, color: '#7E7E7E' }}>
              Upload your photo
            </p>
          )}
          <LabelInputPhoto type="button" onClick={handlePick}>
            Upload
          </LabelInputPhoto>

          <PhotoFormInput
            type="file"
            accept="image/*,.png,.jpg,.gif,.web"
            onChange={handleChange}
            ref={filePicker}
            style={{
              opacity: 0,
              height: 0,
              width: 0,
              lineHeight: 0,
              overflow: 'hidden',
              padding: 0,
              margin: 0,
            }}
          />
        </WrapperPhoto>

        <FormButton type="submit">Sign up</FormButton>
      </Form>
    </>
  );
};