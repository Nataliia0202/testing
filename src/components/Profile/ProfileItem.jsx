import {
  WrapperProfile,
  Avatar,
  TitelProfile,
  ProfileEmail,
  ProfileTel,
} from './Profile.styled';

export const Profile = ({users}) => {
    return (
      <>
        <WrapperProfile>
          <Avatar src={users.photo} alt="User avatar" />
          <TitelProfile>{users.name}</TitelProfile>
          <TitelProfile>{users.position}</TitelProfile>
          <ProfileEmail>{users.email}</ProfileEmail>
          <ProfileTel>{users.phone}</ProfileTel>
        </WrapperProfile>
      </>
    );
}