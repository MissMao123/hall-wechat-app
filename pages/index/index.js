const API = require('../../service/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    inputText:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  getText(e){
    this.setData({
      inputText:e.detail.value
    })
  },
  save(){
    let text = this.data.inputText
    if(text === ''){
      wx.showToast({
        title: '请输入内容！',
        icon:'none'
      })
      return
    }
    let data = {
      content: text
    }
    API.add(data).then((res)=>{
      console.log(res)
      this.data.list.push(text)
      this.setData({
        list: this.data.list,
        inputText: ''
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
