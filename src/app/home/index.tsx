import * as React from 'react'
import NavBar from 'components/navbar'
import PichuContent from 'components/pichu-content'
import CategoryDropDown from 'components/category-dropdown'

export default class Home extends React.Component<any> {
  render() {
    return (
      <div>
        <NavBar />
        <PichuContent>
          <CategoryDropDown />
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
