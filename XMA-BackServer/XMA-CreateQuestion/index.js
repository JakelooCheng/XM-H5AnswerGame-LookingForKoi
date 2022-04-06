// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: 'xiaomi-answer-2goch6zbbc11614e'
})

// 云函数入口函数
exports.main = async (event, context) => {
  const q = event.q
  const o = event.o
  const a = event.a
  const db = cloud.database()
  const Questions = db.collection('xiaomi-answer-questions')
  Questions.add({
    data: {
      question:q,
      options:o,
      answer:a,
      type:'YJ'
    },
    success: function(res) {
      
    }
  })

  return {
    event,
  }
}