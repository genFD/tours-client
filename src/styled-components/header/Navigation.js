import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
  }
`
export const ToursNavigation = styled(Nav)`
  flex: 0 1 40%;

  @media only screen and (max-width: 62.5em) {
    margin-bottom: 1.5rem;
  }
  @media only screen and (max-width: 37.5em) {
    margin-bottom: 0;
  }
`
export const UserNavigation = styled(Nav)`
  -webkit-box-flex: 0;
  -ms-flex: 0 1 40%;
  flex: 0 1 40%;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`
