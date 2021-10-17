import WxValidate from '../../utils/WxValidate.js'
 
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    showTopTips: false,
    form:{
      beforeTax: 10000,//税前
      insurance: 0,//五险一金
      otherDeduct: 0,//附加扣除
      threshold: 5000//起征点 
    },
    taxArray: [
      { level: 1, name: '未超过3000元的部分', minTax: 0,rate:3, deduct:0 },
      { level: 2, name: '超过3000至12000元的部分', minTax: 3000,rate: 10, deduct: 210 },
      { level: 3, name: '超过12000至25000元的部分', minTax: 12000,rate: 20, deduct: 1410 },
      { level: 4, name: '超过25000至35000元的部分', minTax: 25000,rate: 25, deduct: 2660 },
      { level: 5, name: '超过35000至55000元的部分', minTax: 35000,rate: 30, deduct: 4410 },
      { level: 6, name: '超过55000至80000元的部分', minTax: 55000,rate: 35, deduct: 7160 },
      { level: 7, name: '超过80000元的部分', minTax: 80000, rate: 45, deduct: 15160 }    
    ]
  },
  calTax: function () {
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //初始化表单
    this.initValidate();
  },
    //验证表单字段
  initValidate() {
    const rules = {
      beforeTax: {
        required: true,
        number: true
      },
      insurance: {
        required: true,
        number: true
      },
      otherDeduct: {
        required: true,
        digits: true
      }
    }
    const messages = {
      beforeTax: {
        required: '请填写税前工资',
        number: '请输入正确格式的税前工资'
      },
      insurance: {
        required: '请填写五险一金',
        number: '请填写正确格式的五险一金'
      },
      otherDeduct: {
        required: '请填写附加扣除',
        digits: '附加扣除只能为整数'
      }
    }
    this.WxValidate = new WxValidate(rules, messages)
  },
  //报错 
  showMessage(error) {
    /*wx.showModal({
      content: error.msg,
      showCancel: false,
    })*/
    wx.showToast({
      title: error.msg,
      icon: 'none',
      duration: 3000
    });
  },
  //调用验证函数
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带的数据为：', e.detail.value)
    const params = e.detail.value
    //校验表单
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0]
      this.showMessage(error)
      return false
    }
    
    var resAfterDeduct = 0;//应纳所得
    var resTaxRate = 0;//税率
    var resQuickDeduct = 0;//速算扣除
    var resTax = 0;//应缴税款
    var resAfterTax = 0;//实发工资
 
    resAfterDeduct = params.beforeTax - params.insurance - params.otherDeduct - params.threshold;
    if (resAfterDeduct < 0){
      resAfterDeduct = 0;
    }else{
      var arr = this.data.taxArray;
      var arrLength = arr.length;
      for (var i = arrLength - 1; i >= 0; i--) {
        if (resAfterDeduct > arr[i].minTax) {
          resTaxRate = arr[i].rate;
          resQuickDeduct = arr[i].deduct;
          break;
        }
      }
      resTax = resAfterDeduct * (resTaxRate / 100) - resQuickDeduct;
      resAfterTax = params.beforeTax - params.insurance - resTax;
    }
    
      this.setData({
      resAfterDeduct: resAfterDeduct,
      resTaxRate: resTaxRate,
      resQuickDeduct: resQuickDeduct,
      resTax: resTax,
      resAfterTax: resAfterTax
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