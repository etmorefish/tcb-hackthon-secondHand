// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    des: '感谢同学使用该小程序，本程序基于微信云开发完成，是本人参与腾讯布道师培训完成的一个项目，主要在于解决校园二手物品的问题，数据存储使用小程序云开发功能，全套程序已开源在Github主页。灵感的起源，来自身边朋友及武院丹桂信箱，很多学长学姐们即将毕业一些好的好的学习考研资料，还有很多舍不得的物品但有不舍得丢掉想要很好的处理，还有一些书籍，希望这些东西能找到自己最好的归宿。\n\n从产品设计到UI再到所有页面逻辑代码皆有本人一人完成，出现一些BUG应该也很正常，发现了请及时和本人反馈。'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onReady: function () {

  },
  //复制
  copy(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.copy,
      success: res => {
        wx.showToast({
          title: '复制' + e.currentTarget.dataset.name + '成功',
          icon: 'success',
          duration: 1000,
        })
      }
    })
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