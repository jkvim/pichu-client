import * as React from 'react'
import NavBar from 'components/navbar'
import PichuContent from 'components/pichu-content'

export default class Home extends React.Component<any> {
  render() {
    return (
      <div>
        <NavBar />
        <PichuContent>
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
