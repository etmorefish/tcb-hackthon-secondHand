// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  sh_book: function(){
    wx.navigateTo({
      url: '/pages/scan/scan',
    })

  },
  sh_goods: function () {
    wx.navigateTo({
      url: '/pages/publi/publi',
    })

  },
  sh_info: function (event) {
console.log(event)
    // if (event.currentTarget.dataset.type == '0') {
    //   if (!app.openid) {
    //     wx.showModal({
    //       title: '温馨提示',
    //       content: '该功能需要注册方可使用，是否马上去注册',
    //       success(res) {
    //         if (res.confirm) {
    //           wx.navigateTo({
    //             url: '/pages/login/login',
    //           })
    //         }
    //       }
    //     })
    //     return false
    //   }
    // }
    // wx.navigateTo({
    //   url: event.currentTarget.dataset.go
    // })
    wx.navigateTo({
      url: '/pages/publi/publi',
    })

  },
    go(e) {
    if (e.currentTarget.dataset.status == '0') {
      if (!app.openid) {
        wx.showModal({
          title: '温馨提示',
          content: '该功能需要注册方可使用，是否马上去注册',
          success(res) {
            if (res.confirm) {
              wx.navigateTo({
                url: '/pages/login/login',
              })
            }
          }
        })
        return false
      }
    }
    wx.navigateTo({
      url: e.currentTarget.dataset.go
    })
  },
  
})