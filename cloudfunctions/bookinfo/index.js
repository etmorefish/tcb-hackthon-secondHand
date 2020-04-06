// 云函数入口文件
const cloud = require('wx-server-sdk')
const rq = require('request-promise')

cloud.init({})

// 云函数入口函数
exports.main = async (event, context) => {
  var res = rq('https://book.feelyou.top/isbn/' + event.isbn).then( html => {
    return html;
  }).catch( err => {
    console.log(err);
  })
  // console.log(event);
  return res
}