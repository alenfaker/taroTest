import Taro, { Component } from '@tarojs/taro'
import { View, Button ,Image, Input, Swiper} from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      // 原实例
      // <View className='index'>
      //   <Button className='add_btn' onClick={this.props.add}>+</Button>
      //   <Button className='dec_btn' onClick={this.props.dec}>-</Button>
      //   <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
      //   <View>{this.props.counter.num}</View>
      //   <View>Hello, World</View>
      // </View>
      // 页面
      <View className='page'>
      <View className="wrap">
      {/* 首页搜索 */}
      <View className="flex-wrp search">
      <View className="bread flex-item">
      <Image
      style ='width: 20px;height: 16px;'
      src='http://218.17.46.176:7182//test/images/index/index_bread.png'/> 
      </View>
      <Input type="text" className='search-input' style='height: 30px; background: #fff; border-radius: 7px; padding-left:15px;' placeholder='输入商品' focus />
      <View className="message flex-item">
      <Image
      style ='width: 20px;height: 30px; margin-top: -5px;margin-left: 5px;'
      src='http://218.17.46.176:7182//test/images/index/index_messages.png'/>
      </View>
      </View> 
      {/* banner */}
      <View className="auto-play">
      <Swiper className='banner'
      indicatorDots
      indicatorColor='#fff'
      autoplay
      interval='3000'
      >
      <swiper-item><Image style='width: 100%; height: 100%' src='http://218.17.46.176:7182//test/images/index/index_banner01.png'/></swiper-item>
      <swiper-item><Image style='width: 100%; height: 100%' src='http://218.17.46.176:7182//test/images/index/index_banner02.png'/></swiper-item>
      <swiper-item><Image style='width: 100%; height: 100%' src='http://218.17.46.176:7182//test/images/index/index_banner03.png'/></swiper-item>
      </Swiper>
      </View> 
      {/* 导航菜单 */}
      <View className="nav-menus flex-wrp">
      <View className="flexitem"></View>
      <View className="flexitem"></View>
      <View className="flexitem"></View>
      <View className="flexitem"></View>
      <View className="flexitem"></View>
      <View className="flexitem"></View>
      <View className="flexitem"></View>
      <View className="flexitem"></View>
      <View className="flexitem"></View>
      <View className="flexitem"></View>
      </View>
      </View>
      </View>
    )
  }
}

export default Index
