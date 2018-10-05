import * as React from 'react'
import NavBar from 'components/navbar'
import UserHeader from 'components/user-header'
import NavTabs from 'components/nav-tabs'
import PichuContent from 'components/pichu-content'

export default class User extends React.Component<any> {
  routes = [
    { label: '概要', path: 'summary' },
    { label: '活动', path: 'activity' },
    { label: '消息', path: 'messages' },
    { label: '设置', path: 'settings' },
  ]

  render() {
    const { userId, children } = this.props
    return (
      <div>
        <NavBar />
        <UserHeader username={userId} />
        <PichuContent >
          <NavTabs routes={this.routes} />
          {children}
        </PichuContent>
      </div>
    )
  }
}
