import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.scss'

class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      list: []
    }
  }

  handleBtnClick = () => {
    setTimeout(() => {
      this.setState({
        list: [1]
      })
    }, 0)
  }

  render () {
    let { list } = this.state
    let length = !list.length
    return (
      <View className='index'>
        <Button disabled={!list.length} className='add_btn'>{
          !list.length ? '禁用' : '启用'
        }</Button>
        <Button disabled={length} className='add_btn'>{
          !list.length ? '禁用' : '启用'
        }</Button>
        <Button onClick={this.handleBtnClick}>点击</Button>
      </View>
    )
  }
}

export default Index
