import styled from 'styled-components'

export const HeaderContainer = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap');

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Roboto Mono', monospace;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
      }
      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
