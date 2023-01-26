import { TitleForm } from "./Form.styled";
import {
  Form,
  FormInput,
  FormButton,
  LabelInputPhoto,
  PhotoFormInput,
  WrapperPhoto,
} from './Form.styled';
import { RadioButtons } from "./RadioButtons";
// import { useDispatch, useSelector } from 'react-redux';
import { addNewUser } from "redux/operations";
import { useDispatch} from "react-redux";
import { useState } from "react";
// import { selectUsers } from "redux/selector";

export const FormSubmit = ({ positions_id }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setFile] = useState('');
  // const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const onSubmitForm = event => {
    event.preventDefault();

    const newUser = {
      name,
      email,
      phone,
      photo,
    };

    dispatch(addNewUser(newUser));
    reset();
  }

  const reset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setFile('');
  };

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
        <RadioButtons />
        <WrapperPhoto>
          <p style={{ marginLeft: 90, color: '#7E7E7E' }}>Upload your photo</p>
          <LabelInputPhoto>
            <p style={{ marginLeft: 12, color: 'rgba(0, 0, 0, 0.87)' }}>
              Upload
            </p>
            <PhotoFormInput
              type="file"
              name="photo"
              id="uploade-file"
              placeholder="Upload your photo"
              style={{ opacity: 0 }}
              value={photo}
              onChange={event => setFile(event.target.value)}
            />
          </LabelInputPhoto>
        </WrapperPhoto>

        <FormButton type="submit">Sign up</FormButton>
      </Form>
    </>
  );
};