// 使用了 async await 语法
const cloud = require('wx-server-sdk')


cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  try {
    return await db.collection('books').where({
      _openid: 'oAfPr0DGqh9DzQepM6uogzk4TaV4'
    })
      .update({
        data: {
          source: 'mysql'
        },
      })
  } catch (e) {
    console.error(e)
  }
}