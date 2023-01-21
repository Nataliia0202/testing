import { TitleForm } from "./Form.styled";
import { Form, FormInput } from './Form.styled';

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
          />
          <FormInput
            type="email"
            name="emeil"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            placeholder="Email"
          />
          <FormInput
            type="tel"
            name="phone"
            placeholder="Phon"
            pattern="[\+]\d{2}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
            minlength="13"
            maxlength="13"
          />
          <p style={{ color: '#7E7E7E', fontSize: 12 }}>
            +38 (XXX) XXX - XX - XX
          </p>
          <p style={{ color: '#7E7E7E', fontSize: 12 }}></p>
        </Form>
      </>
    );
}