import React from 'react'
import {
  HeaderWrapper,
  ToursNavigation,
  AllTours,
  HeaderForm,
  Logo,
  UserNavigation,
  UserPhoto,
  BookingsLink,
} from '../styled-components/index'

export const Header = () => {
  return (
    <HeaderWrapper>
      <ToursNavigation>
        <AllTours />
        <HeaderForm />
      </ToursNavigation>

      <Logo />

      {/* <UserNavigation>
        <BookingsLink />
        <UserPhoto />
      </UserNavigation> */}
    </HeaderWrapper>
  )
}
