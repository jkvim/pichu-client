import * as React from 'react'
import NavBar from 'components/navbar'
import PichuContent from 'components/pichu-content'
import CategoryDropDown from 'components/category-dropdown'
import HomeTab from 'components/home-tab'

export default class Home extends React.Component<any> {
  render() {
    return (
      <div>
        <NavBar />
        <PichuContent>
          <CategoryDropDown />
          <HomeTab />
          <ul>
            <li>Hello World</li>
            <li>Hello World</li>
            <li>Hello World</li>
            <li>Hello World</li>
            <li>Hello World</li>
            <li>Hello World</li>
          </ul>
        </PichuContent>
      </div>
    )
  }
}
