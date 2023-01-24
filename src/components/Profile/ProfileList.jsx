import { Profile } from "./ProfileItem";
import { List, ListItem } from "./Profile.styled";
import { useSelector} from 'react-redux';
import { selectUsers } from "redux/selector";
import { TitleForm } from 'components/Form/Form.styled';

export const ProfileList = () => {
    
    const users = useSelector(selectUsers);

    return (
      <>
        <TitleForm>Working with GET request</TitleForm>
        <List>
          {users?.map(({ id, photo, name, position, email, phone }) => {
            return (
              <ListItem key={id}>
                <Profile
                  id={id}
                  photo={photo}
                  name={name}
                  position={position}
                  email={email}
                  phone={phone}
                />
              </ListItem>
            );
          })}
        </List>
      </>
    );
}