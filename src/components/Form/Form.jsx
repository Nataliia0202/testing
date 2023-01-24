import { TitleForm } from "./Form.styled";
import {
  Form,
  FormInput,
  FormButton,
  ButtonInputPhoto,
  PhotoFormInput,
  WrapperPhoto,
} from './Form.styled';
import { RadioButtons } from "./RadioButtons";
// import { useDispatch, useSelector } from 'react-redux';

export const FormSubmit = () => {
    return (
      <>
        <TitleForm>Working with POST request</TitleForm>
        <Form>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            placeholder="Your name"
            autocomplete="off"
          />
          <FormInput
            type="email"
            name="emeil"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            placeholder="Email"
            autocomplete="off"
          />
          <FormInput
            type="tel"
            name="phone"
            placeholder="Phon"
            pattern="[\+]\d{2}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
            minlength="13"
            maxlength="13"
            autocomplete="off"
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
            <ButtonInputPhoto
              type="file"
              name="photo"
              id="photo-upload"
              autoComplete="off"
              placeholder="Upload your photo"
            >
              Upload
            </ButtonInputPhoto>
            <PhotoFormInput />
          </WrapperPhoto>

          <FormButton>Sign up</FormButton>
        </Form>
      </>
    );
}