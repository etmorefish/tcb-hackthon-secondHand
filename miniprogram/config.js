var data = {

  //分享配置
  share_title: '武院二手交易',
  share_img: '/images/go.png', 
  share_poster: '#',//必须为网络地址

  bgurl: '/images/go.jpg',
  campus: [{
    name: '2017级',
    id: 0
  },
  {
    name: '2018级',
    id: 1
  },
  {
    name: '2019级',
    id: 2
  },
  {
    name: '2020级',
    id: 3
  },
    {
      name: '2021级',
      id: 4
    },
    {
      name: '2022级',
      id: 5
    },
    {
      name: '2023级',
      id: 6
    },
  ],

}
//时间
function formTime(creatTime) {
  let date = new Date(creatTime),
    Y = date.getFullYear(),
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  if (M < 10) {
    M = '0' + M;
  }
  if (D < 10) {
    D = '0' + D;
  }
  if (H < 10) {
    H = '0' + H;
  }
  if (m < 10) {
    m = '0' + m;
  }
  if (s < 10) {
    s = '0' + s;
  }
  return Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + s;
}

function days() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  let date = year + "" + month + day;
  return date;
}
module.exports = {
  data: JSON.stringify(data),
  formTime: formTime,
  days: days
}