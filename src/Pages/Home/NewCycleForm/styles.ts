import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  padding-bottom: 3rem;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  width: 100%;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
    border-color: ${(props) => props.theme['green-500']};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const TaskInput = styled(BaseInput)`
  width: 28%;
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 8%;
`
