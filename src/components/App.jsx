import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyle } from './GlobalStyles';
import { Hero } from './Hero/Hero';
import { FormSubmit } from './Form/Form';  
import { Container } from './Layout';
  
export const App = () => {
  return (
    <>
      <Container>
        <SharedLayout />
        <Hero />
        <FormSubmit />
      </Container>

      <GlobalStyle />
    </>
  );
};

// {/* <div
//   style={{
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 40,
//     color: '#010101',
//   }}
// >
//   React homework template
//   <GlobalStyle />
// </div>; */}
