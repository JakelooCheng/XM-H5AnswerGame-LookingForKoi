// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'xiaomi-answer-2goch6zbbc11614e'
})

// 云函数入口函数
exports.main = async (event, context) => {
  // 连接数据库
  const db = cloud.database()
  const _ = db.command
  const Users = db.collection('xiaomi-answer-user')

  // 获得锦鲤用户
  // var result2 = await Users.where({
  //   isJL:true
  // }).get()

  // if(result2.data.length != 0){
  //   result2 = result2.data[0]
  //   jlface = result2.xmface
  //   jlname = result2.xmname
  // }

  // 获得总数量并处理
  // var total = await Users.count()
  // var jlnum = parseFloat(parseInt(total.total)).toLocaleString()

  const sp = Math.floor(Math.random()*(total-40))/3;

  // 获得批量用户
  var result = await Users.skip(parseInt(sp)).limit(60).get()
  result = result.data
  var jlfaces1 = []
  var jlfaces2 = []
  result.forEach(function(item,index){
    if(index%2==0)jlfaces1.push(item.xmface)
    else jlfaces2.push(item.xmface)
  });

  return {
    jlfaces1,
    jlfaces2,
    jlnum,
    jlname,
    jlface
  }
}