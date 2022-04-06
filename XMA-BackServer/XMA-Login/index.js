// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'xiaomi-answer-2goch6zbbc11614e'
})

// 云函数入口函数
exports.main = async (event, context) => {
  let xmid = event.xmid
  let xmname = event.xmname
  let xmface = event.xmface


  // 连接数据库
  const db = cloud.database()
  const Users = db.collection('xiaomi-answer-user')

  // 查找是否存在
  var result = await Users.where({
    xmid:xmid
  }).get()
  

  // 不存在则创建用户
  if(result.data.length == 0){
    if(xmname == "")xmname = "匿名用户"
    if(xmface == "")xmface = "./img/defauthead.svg"
    result = await Users.add({
      data: {
        lastDraw:new Date("2021-01-01"),
        maxScore:0,
        cardBag:[],
        xmid:xmid,
        xmname:xmname,
        xmface:xmface,
        isJL:false,
        accept:true,
      }
    })
    result.data = await Users.doc(result._id).get()
  }else{
    result.data = result.data[0]
  }

  return {
    result,
    active_end:(new Date() - new Date("2021-08-16T09:00:00.0") > 0)
  }
}