import * as React from 'react'
import NavBar from 'components/navbar'
import UserHeader from 'components/user-header'

export default class User extends React.Component<any> {
  render() {
    const { userId } = this.props
    return (
      <div>
        <NavBar />
        <UserHeader username={userId} />
      </div>
    )
  }
}
