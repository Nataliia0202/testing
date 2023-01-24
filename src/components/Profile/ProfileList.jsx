import { Profile } from "./ProfileItem";
import { List, ListItem } from "./Profile.styled";
import { useSelector} from 'react-redux';
import { selectUsers } from "redux/selector";


export const ProfileList = () => {
    
    const users = useSelector(selectUsers);
    return (
      <>
            <List>{users.map((user =>
            <ListItem key={user.id}>
                <Profile user={user} />
            </ListItem>))}
            </List>
      </>
    );
}