const db = wx.cloud.database()
const _ = db.command
const $ = db.command.aggregate
const books = db.collection('books')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    booklist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.cloud.callFunction({ name: "batchupdate", compete: res => console.log(res) })
    db.collection('books').orderBy('publish_date', 'desc').get().then(res => {
      // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
      // console.log(res.data[1]);
      // console.log(res.data[1].labels)
      // console.log(this);
      this.setData({
        booklist: res.data
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
    wx.startPullDownRefresh();
    wx.showNavigationBarLoading()  //在标题栏中显示加载
    this.update()  //重新加载数据
    //模拟加载  1秒
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1000);
  },
  update: function () {
    var that = this
    db.collection('books').orderBy('publish_date', 'desc').get().then(res => {
      // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
      // console.log(res.data[1]);
      // console.log(res.data[1].labels)
      // console.log(this);
      this.setData({
        booklist: res.data
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // viewItem: function (event) {
  //   var id = event.currentTarget.dataset.id;
  //   wx.navigateTo({
  //     url: '../bookDetails/bookDetails?id=' + id
  //   });
  // }
  viewItem: function (event) {
    console.log(event)
    db.collection('books').where({
      _id: _.eq(event.currentTarget.dataset.id)
    })
      .get({
        success: function (res) {
          var openid = res.data[0]._openid
          console.log(openid)
          db.collection('sh_user').where({
            _openid: openid
          })
            .get({
              success: function (result) {
                var phone = result.data[0].phone
                console.log(result)
                console.log(result.data[0].phone)
                wx.makePhoneCall({
                  phoneNumber: phone //仅为示例，并非真实的电话号码
                })
              }
            })
        }
      })
  }

})