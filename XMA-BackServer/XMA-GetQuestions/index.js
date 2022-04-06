// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'xiaomi-answer-2goch6zbbc11614e'
})

// 云函数入口函数
exports.main = async (event, context) => {

  // 连接数据库
  const db = cloud.database()
  const Questions = db.collection('xiaomi-answer-questions')

  // 获取演讲类
  const YJlist = await Questions.where({
    type:'YJ'
  }).get()
  // 获取参数类
  const CSlist = await Questions.where({
    type:'CS'
  }).get()

  // 随机抽题
  for(let i=0;i<YJlist.data.length;i++){
    let point = Math.floor(Math.random()*YJlist.data.length); 
    let hand = YJlist.data[i]
    YJlist.data[i] = YJlist.data[point]
    YJlist.data[point] = hand
  }
  for(let i=0;i<CSlist.data.length;i++){
    let point = Math.floor(Math.random()*CSlist.data.length); 
    let hand = CSlist.data[i]
    CSlist.data[i] = CSlist.data[point]
    CSlist.data[point] = hand
  }
  
  var questions = []
  for(let i=0;i<3;i++){
    questions.push(YJlist.data[i])
    questions.push(CSlist.data[i])
  }

  var res = 'callbackFunc'+'('+JSON.stringify(questions)+")"

  return {
    questions
  }
}