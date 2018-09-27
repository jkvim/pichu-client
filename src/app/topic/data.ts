export default {
  id: '0001',
  title: 'React-router4简约教程',
  category: '分享',
  content: `
    React-router和React-router-dom的选择
    很多刚使用react的同学在接触到react-router的时候就会很蛋疼，什么react-router和react-router-dom？往往开始会比较懵逼。下面我们就来一探究竟。

    React-router
    React-router提供了一些router的核心api，包括Router, Route, Switch等，但是它没有提供dom操作进行跳转的api。

    React-router-dom
    React-router-dom提供了BrowserRouter, Route, Link等api,我们可以通过dom的事件控制路由。例如点击一个按钮进行跳转，大多数情况下我们是这种情况，所以在开发过程中，我们更多是使用React-router-dom。安装很简单npm i react-router-dom --save,安装了淘宝镜像的就用cnpm吧。

    React-router-dom的核心用法
    HashRouter和BrowserRouter
    它们两个是路由的基本，就像盖房子必须有地基一样，我们需要将它们包裹在最外层，我们只要选择其一就可以了。现在讲它们的不同：

    HashRouter
    如果你使用过react-router2或3或者vue-router，你经常会发现一个现象就是url中会有个#，例如localhost:3000/#，HashRouter就会出现这种情况，它是通过hash值来对路由进行控制。如果你使用HashRouter，你的路由就会默认有这个#。
  `,
  createDate: '2018-05-01',
  lastComment: {
    id: '3',
    createDate: '2018-08-09',
  },
  author: {
    id: '1',
    username: 'jkvim',
  },
  comments: [
    {
      id: "1",
      author: {
        id: '1',
        username: 'jkvim',
      },
      content: '感谢作者的分享,这篇文章非常适合已经对路由又过相应了解的半新手,谢谢!!!',
      likes: 0,
      createDate: '2018-10-01'
    },
    {
      id: "2",
      author: {
        id: '1',
        username: 'jkvim',
      },
      content: '感谢作者的分享,这篇文章非常适合已经对路由又过相应了解的半新手,谢谢!!!',
      likes: 0,
      createDate: '2018-10-01'
    },
    {
      id: "3",
      author: {
        id: '1',
        username: 'jkvim',
      },
      content: '感谢作者的分享,这篇文章非常适合已经对路由又过相应了解的半新手,谢谢!!!',
      likes: 1,
      createDate: '2018-10-01'
    }
  ]
}