// pages/publi/publi.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    columns: [],
    // bookType: ['教科书', '辅导资料', '小说', '文学', '历史', '哲学', '艺术', '散文', '其他'],
    goodsType: ['学习资料', '美妆','数码', '电器', '服饰', '其他'],
    showPopup: false,
    params: {
      g_type: '',
      isNew: false,
      title: '',
      description: '',
      price: '',
      pricein: '',
      phone: '',
      info: "",
      pub_type: -1,
      pic_url: new Array()
    },

    tempFilePaths: [],
    phone_err: '',
    price_err: '',
    descrip_err: '',
    title_err: ''
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('****', options)
    let { pub_type } = options;
    const { goodsType, bookType, params } = this.data;
    pub_type = parseInt(pub_type, 10);
    params['pub_type'] = pub_type;
    console.log(pub_type === 1);
    if (pub_type) {
      this.setData({
        params,
        columns: bookType
      })
    } else {
      this.setData({
        params,
        columns: goodsType
      })
    }
  },

  onClosePopup() {
    this.setData({
      showPopup: false
    })
  },

  tapToShow() {
    this.setData({
      showPopup: true
    })
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
  onConfirm(event) {
    console.log(event)
    const { value } = event.detail;
    const { params } = this.data;
    params['g_type'] = value;
    console.log(value);
    this.setData({
      params,
      showPopup: false
    })
  },
  // 保存信息
  saveMessage(e) {
    console.log(e);
    // console.log(this.data);
    const { type } = e.currentTarget.dataset;
    // console.log({type})
    const { params } = this.data;
    console.log({params})
    // console.log(e.detail)
    params[type] = e.detail;
// console.log(params[type])
console.log(params)
    this.setData({
      params,
      phone_err: '',
      price_err: '',
      descrip_err: '',
      title_err: ''
    })
  },
  // 上传图片
  doUpload(filePath) {
    const that = this;
    const arr = filePath.split('/');
    const name = arr[arr.length - 1];
    // 上传图片
    // const filePath = res.tempFilePaths[0]
    const cloudPath = 'secondhand-pic/'+`${Date.now()}-${Math.floor(Math.random(0, 1) * 10000)}` + filePath.match(/\.[^.]+?$/)[0]

    // const cloudPath = 'secondhand-pic/' + name;

    wx.cloud.uploadFile({
      cloudPath,
      filePath
    }).then(res => {
      console.log('上传图片 成功：', res)
      const { params } = that.data;
      const { pic_url } = params;
      pic_url.push(res.fileID);
      params['pic_url'] = pic_url;
      that.setData({
        params
      });
    }).catch(error => {
      console.error('上传文件失败：', error);
      wx.showToast({
        title: '上传失败',
        duration: 1000
      })
    })

  },
// 删除照片
  deletePic(e) {
    console.log(e);
    const { index } = e.currentTarget.dataset;
    const { tempFilePaths } = this.data;
    tempFilePaths.splice(index, 1);
    this.setData({
      tempFilePaths
    })

  },
  chooseImage: function () {
    const that = this;
    // 选择图片
    wx.chooseImage({
      count: 3,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        const filePath = res.tempFilePaths;
        //将选择的图片上传
        filePath.forEach((path, index) => {
          that.doUpload(path);
        });
        const { tempFilePaths } = that.data;
        that.setData({
          tempFilePaths: tempFilePaths.concat(filePath)
        }, () => {
          console.log(that.data.tempFilePaths)
        })
      },
      fail: e => {
        console.error(e)
      }
    })
  },
  // 校验填入的信息
  checkParams(params) {
    const { g_type, title, description, price, phone,info, pub_type } = params;
    let temp = 1;
    //判断手机号格式是否正确
    if (phone === '') {
      this.setData({
        phone_err: '请输入手机号'
      })
      temp = 0;
    } else if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(phone))) {
      this.setData({
        phone_err: '手机号输入有误'
      });
      temp = 0;
    }

    // //校检手机
    // let phone = that.data.phone;
    // if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(phone))) {
    //   wx.showToast({
    //     title: '请先正确填写您的电话',
    //     icon: 'none',
    //     duration: 2000
    //   });
    //   return false
    // }

    //判断商品类型是否为空
    let msg = '**'
    if (pub_type === 0) {
      msg = '请选择商品类型';
    } else if (pub_type === 1) {
      msg = '请选择书籍类型';
    }
    if (!g_type) {
      wx.showToast({
        title: msg,
        duration: 1000
      });
      temp = 0;
    }

    //判断描述是否为空
    if (!description) {
      this.setData({
        descrip_err: '请填写描述信息'
      });
      temp = 0;
    }

    //判断标题是否为空
    if (!title) {
      this.setData({
        title_err: '请填写标题'
      });
      temp = 0;
    }

    //判断价格是否为空
    if (!price) {
      this.setData({
        price_err: '请填写价格'
      });
      temp = 0;
    }
    return temp;
  },
  // 获取当前时间 和login方法不同
  timeConvert(time) {
    const changeTime = num => {
      if (num < 10) {
        num = `0${num}`;
      }
      return num;
    }
    const y = time.getFullYear();
    let m = time.getMonth() + 1;
    let d = time.getDate();
    let h = time.getHours();
    let mm = time.getMinutes();
    let s = time.getSeconds();
    m = changeTime(m);
    d = changeTime(d);
    h = changeTime(h);
    mm = changeTime(mm);
    s = changeTime(s);
    return `${y}-${m}-${d} ${h}:${mm}:${s}`;
  },
// 发布
  toPublish() {
    const { params } = this.data;

    //发布前校验
    const temp = this.checkParams(params);
    if (temp) {
      wx.showLoading({
        title: '发布中',
      });

      // const { nickName, avatarUrl } = app.globalData.userInfo;
      // params.userDetail = {
      //   nickName,
      //   avatarUrl
      // }
      params['pub_time'] = this.timeConvert(new Date());
      console.log(params);

      wx.cloud.callFunction({
        name: 'publi_goods',
        data: params,

        success: res => {
          wx.hideLoading();
          wx.showToast({
            title: '发布成功',
            icon: 'success',
            duration: 1000,
            success: () => {
              setTimeout(() => {
                wx.navigateBack();
              }, 1000)
            }
          })
        },
        fail: err => {
          console.log(err);
          wx.hideLoading();
          wx.showToast({
            title: '发布失败',
            duration: 1000,
            success: () => {
              setTimeout(() => {
                wx.navigateBack();
              }, 1000)
            }
          })
        }
      })
    }
  }

})
