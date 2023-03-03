import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;

    label {
      font-weight: bold;
      color: red;
    }

    button {
      background-color: ${(props) => props.theme.primary};
      cursor: pointer;
      font-weight: bold;
      border: 0;
      padding: 15px;
      border-radius: 5px;
    }
`

export default function Button(props) {
  return (
    <ButtonContainer>
      <button {...props}></button>
    </ButtonContainer>
  )  
}
