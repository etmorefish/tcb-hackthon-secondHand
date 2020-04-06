
Page({

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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //手动输入isbn
  // isbnInput(e) {
  //   this.data.isbn = e.detail.value;
  // },
  scan: function(event) {

    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['barCode'],
      success: res => {
        // console.log(res.result);
        var isbn = res.result
        if (!(/978[0-9]{10}/.test(isbn))) {
          wx.showToast({
            title: '请检查您的isbn号,987***',
            icon: 'none'
          });
          return false;
        }
        // if (!app.openid) {
        //   wx.showModal({
        //     title: '温馨提示',
        //     content: '该功能需要注册方可使用，是否马上去注册',
        //     success(res) {
          
        //         wx.navigateTo({
        //           url: '/pages/login/login',
        //         })        
        //     }
        //   })
        //   return false;
        // }
        wx.cloud.callFunction({
          // 需调用的云函数名
          name: 'bookinfo',
          // 传给云函数的参数
          data: {
            isbn: isbn
          },
          success: res => {
            var bookString = res.result;
            // console.log(JSON.parse(bookString))
            const db = wx.cloud.database()
            const books = db.collection('books')
            db.collection('books').add({
              // data 字段表示需新增的 JSON 数据
              data: JSON.parse(bookString),
              success: function(res) {
                // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                console.log(res)
                wx.showToast({
                  title: '添加成功',
                  icon: 'none'
                });
              }
            })
          },
          // fail: err => {
          //   console.log(err);
          //   wx.showToast({
          //     title: '扫码失败，请重新扫码或者手动输入',
          //     icon: 'none'
          //   })
          // }

        })
      },
      fail: function(res) {
        console.log(err);
      }
    })
  },

})