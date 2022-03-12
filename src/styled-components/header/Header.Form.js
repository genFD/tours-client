import styled from 'styled-components'
import SearchButton from './SearchButton'

export const HeaderForm = () => {
  return (
    <HeaderFormWrapper>
      <input type="text" placeholder="Search tours" class="nav__search-input" />
      <button class="nav__search-btn">
        <svg>
          <use xlinkHref="img/icons.svg#icon-search"></use>
        </svg>
      </button>
    </HeaderFormWrapper>
  )
}

export const HeaderFormWrapper = styled.form`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  @media only screen and (max-width: 37.5em) {
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
    margin-bottom: 1.2rem;
  }
  .nav__search-btn {
    background: none;
    border: none;
    margin-right: 0.8rem;
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
  .nav__search-btn svg {
    height: 2rem;
    width: 2rem;
    fill: #f7f7f7;
  }
  .nav__search-input {
    font-family: inherit;
    font-weight: inherit;
    text-transform: uppercase;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #f7f7f7;
    padding-bottom: 3px;
    border-bottom: 1px solid #999;
    width: 18rem;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .nav__search-input::-webkit-input-placeholder {
    color: #999;
  }
  .nav__search-input:-ms-input-placeholder {
    color: #999;
  }
  .nav__search-input::-ms-input-placeholder {
    color: #999;
  }
  .nav__search-input::placeholder {
    color: #999;
  }
  .nav__search-input:focus {
    outline: none;
    width: 25rem;
    border-bottom: 1px solid currentColor;
  }
`
