import {
  WrapperProfile,
  Avatar,
  TitelProfile,
  ProfileEmail,
  ProfileTel,
} from './Profile.styled';

export const Profile = ({ photo, name, position, email, phone }) => {
  return (
    <>
      <WrapperProfile>
        <Avatar src={photo} alt="User avatar" />
        <TitelProfile>{name}</TitelProfile>
        <TitelProfile>{position}</TitelProfile>
        <ProfileEmail>{email}</ProfileEmail>
        <ProfileTel>{phone}</ProfileTel>
      </WrapperProfile>
    </>
  );
};