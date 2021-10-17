// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
 data: {
  imgUrls:[{
      img: "../../image/cand.jpg",
      openpath: "../../pages/cand/cand"
  },
    {
      img: "../../image/waimai.jpg",
      openpath: "../../pages/meituan/meituan"
    }
  ],
    server: [
      {
        img: "../../image/jisuanqi.jpg",
        openpath: "../../pages/calc/calc",
        text: "计算器"
      },
      {
        img: "../../image/wxyj.png",
        openpath: "../../pages/wxyj/wxyj",
        text: "五险一金"
      },
      {
        img: "../../image/tax.jpg",
        openpath: "../../pages/tax/tax",
        text: "个税"
      },
      {
        img: "../../image/morgage.png",
        openpath: "../../pages/mortgage/mortgage",
        text: "贷款"
      }
    ],
    unserver: [
      {
        img: "../../image/ruzhi.jpg",
        openpath: "../../pages/ruzhi/ruzhi",
        text: "入职天数"
      },
      {
        img: "../../image/daoshuri.jpg",
        openpath: "../../pages/backday/backday",
        text: "倒数日"
      },
      {
        img: "../../image/date.jpg",
        openpath: "../../pages/date/date",
        text: "纪念日"
      },
      
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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