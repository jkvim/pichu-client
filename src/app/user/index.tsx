import * as React from 'react'
import NavBar from 'components/navbar'

export default class User extends React.Component<any> {
  render() {
    const { userId } = this.props
    return (
      <div>
        <NavBar />
        <h1>User {userId}</h1>
      </div>
    )
  }
}
