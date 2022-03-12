import styled from 'styled-components'

export const Logo = () => {
  return (
    <LogoWrapper>
      <img src="img/logo-white.png" alt="Natours logo" />
    </LogoWrapper>
  )
}

export const LogoWrapper = styled.div`
  @media only screen and (max-width: 62.5em) {
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
    margin-bottom: 1.5rem;
  }

  img {
    height: 3.5rem;
  }
`
