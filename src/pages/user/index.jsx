import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import {store} from '../../app'

import addReducer from '../../utils/addReducer'
import addSaga from '../../utils/addSaga'

import reducer from '../../reducers/user'
import saga from '../../sagas/user'

import {
  componentWillMountAction,
  componentDidMountAction,
  componentWillUnMountAction,
  add,
  minus,
} from '../../actions/user'

import './index.css'

addReducer(store,{key: 'user',reducer })
addSaga(store,{key: 'user',saga })

@connect(({ user }) => ({
  user
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
  add (data) {
    dispatch(add(data))
  },
  dec (data) {
    dispatch(minus(data))
  },
}))

class User extends Component {

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

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <View><Text>{this.props.user.data.num}</Text></View>
        <View><Text>我是user</Text></View>
      </View>
    )
  }
}


export default User
