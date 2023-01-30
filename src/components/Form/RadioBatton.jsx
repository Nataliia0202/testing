import { Text } from './Form.styled';
import { useDispatch} from 'react-redux';
import { togglePosition } from 'redux/operations';

export const RadioBatton = (positions) => {
    const dispatch = useDispatch();
    

    return (
      <>
        <input
          type="radio"
          name="positions"
          value={positions.name}
          onChange={() => dispatch(togglePosition(positions.id))}
        />
        <Text>{positions.name}</Text>
      </>
    );
}













// {/* <WrapperRadio>
//   <input
//     type="radio"
//     name="positions"
//     checked={positions}
//     onChange={() => setPosition(handleToggle)}
//   />
//   <Text>Frontend developer</Text>
// </WrapperRadio>; */}