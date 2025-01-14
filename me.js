// miniprogram/pages/me/me.js
var app = getApp();
Page({

  actioncnt: function() {        
    wx.showActionSheet({            
      itemList:  ['群聊',  '好友',  '朋友圈'],
      success: function(res)  {
        console.log(res.tapIndex)
      },
      fail: function(res)  {
        console.log(res.errMsg)
      }
    })   
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  /**
   * WorkAholic
   */
  onCollectClick:function(event){
    wx.navigateTo({
      url: '../product/product',
    })
  },
  /**
   * 开发者
   */
  onHistoryClick:function(event){
    wx.navigateTo({
      url: '../about-me/about-me',
    })
  },

  /**
   * 意见反馈
   */
  onAdvanceClick:function(event){
    wx.navigateTo({
      url: '../advance/advance',
    })
  },


  clickInvitivation: function(event) {
    this.actioncnt();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(event) {
    console.log(event);
  }
})