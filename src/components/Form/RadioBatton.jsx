import { Text } from './Form.styled';




export const RadioBatton = (positions) => {
    
    
    return (
      <>
        <input
          type="radio"
          name="positions"
        />
        <Text>{positions.name}</Text>
      </>
    );
}
