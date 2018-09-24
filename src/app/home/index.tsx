import * as React from 'react'
import NavBar from 'components/navbar'
import PichuContent from 'components/pichu-content'
import CategoryDropDown from 'components/category-dropdown'
import HomeTab from 'components/home-tab'
import SessionList from 'components/session-list'

export default class Home extends React.Component<any> {
  render() {
    return (
      <div>
        <NavBar />
        <PichuContent>
          <CategoryDropDown />
          <HomeTab />
          <SessionList />
        </PichuContent>
      </div>
    )
  }
}
