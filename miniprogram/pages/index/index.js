const db = wx.cloud.database()
const _ = db.command
const $ = db.command.aggregate
const books = db.collection('books')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'cloud://xly-31wma.786c-xly-31wma-1301595367/banner01.jpg',
      'cloud://xly-31wma.786c-xly-31wma-1301595367/banner02.jpg'
    ],
    list: ['学习资料', '美妆', '数码', '电器', '服饰', '其他'],
    booklist: [],
    items: []



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('sh_items').orderBy('pub_time', 'desc').get().then(res => {
      // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
      console.log(res.data[1]);
      // console.log(res.data[1].labels)
      // console.log(this);
      this.setData({
        items: res.data
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
    
  },
  changeChoice:function(){
    // 切换板块
  }
  
  // 热门分类 通过关键字查询返回分类数据
})