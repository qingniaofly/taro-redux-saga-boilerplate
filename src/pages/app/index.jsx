import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import {store} from '../../app'

import addReducer from '../../utils/addReducer'
import addSaga from '../../utils/addSaga'

import reducer from '../../reducers/app'
import saga from '../../sagas/app'

import {
  componentWillMountAction,
  componentDidMountAction,
  componentWillUnMountAction,
} from '../../actions/app'

import './index.css'

addReducer(store,{key: 'app',reducer })
addSaga(store,{key: 'app',saga })

@connect(({ app }) => ({
app
}), (dispatch) => ({
  componentWillMountAction(data){
    dispatch(componentWillMountAction(data))
  },
  componentDidMountAction(data){
    dispatch(componentDidMountAction(data))
  },
  componentWillUnMountAction(data){
    dispatch(componentWillUnMountAction(data))
  },
}))

class App extends Component {

  componentWillMount() {
    this.props.componentWillMountAction()
  }

  componentDidMount() {
    const data = {
      a:1,b:2,c:3
    }
    this.props.componentDidMountAction(data)
  }

  componentWillReceiveProps(nextProps, nextContext) {}

  componentWillUnmount () {
    this.props.componentWillUnMountAction()
  }

  componentDidShow () { }

  componentDidHide () { }

  toUser(){
    // 传入参数 id=2&type=test
    Taro.navigateTo({
      url: '/pages/user/index?id=2&type=test'
    })
  }

  render () {
    return (
      <View className='app'>
        <View><Text>Hello, World</Text></View>
        <View><Text>我是app</Text></View>
        <Button className='dec_btn' onClick={this.toUser}>跳转到用户</Button>
      </View>
    )
  }
}


export default App
