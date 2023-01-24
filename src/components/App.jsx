import React from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyle } from './GlobalStyles';
import { Hero } from './Hero/Hero';
import { FormSubmit } from './Form/Form';
import { Container } from './Layout';
import { Success } from './Success/Success';
import { useDispatch } from 'react-redux';
// import { selectIsLoading,  selectUsers } from 'redux/selector';
import { useEffect } from 'react';
import { fetchUsers } from 'redux/operations';
import { ProfileList } from './Profile/ProfileList';

export const App = () => {
  const dispatch = useDispatch();
  // const users = useSelector(selectUsers);
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Container>
        <SharedLayout />
        <Hero />
        <ProfileList />
        <FormSubmit />
        <Success />
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
