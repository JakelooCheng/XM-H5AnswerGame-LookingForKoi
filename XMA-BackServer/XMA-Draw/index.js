// 云函数入口文件
const cloud = require('wx-server-sdk')
const crypto = require('crypto');
const request = require('request-promise');
const { resolve } = require('path');

cloud.init({
  env: 'xiaomi-answer-2goch6zbbc11614e'
})

// 云函数入口函数
exports.main = async (event, context) => {
  // 处理原始数据
  const activity_id = // 小米提供的抽奖ID
  const xmid = event.xmid
  var score = event.score
  var accept = event.accept

  // 连接数据库
  const db = cloud.database()
  const _ = db.command
  const Users = db.collection('xiaomi-answer-user')

  // 处理用户信息
  var result = await Users.where({
    xmid:xmid
  }).get()

  result.data = result.data[0]
  var dataid = result.data._id

  // 抽锦鲤
  if(Number(result.data.maxScore)!=6&&Number(score)==6){
    cloud.callFunction({
      name: 'XMA-SubmitJL',
      data: {
        xmid: xmid,
        dataid: dataid,
      }
    })
  }

  
  if(Number(result.data.maxScore) > Number(score))
    score = result.data.maxScore
  if(!result.data.accept)
    accept = false

  // 这两个数据需要处理
  // 已删除 与服务器的电子签名 sign
  

  if(true){
    const getRepoData = () => {
      return new Promise((resolve, reject) => {
        request({
          url: // 抽奖链接,
          method: "POST",
          json: true,
          form: {
              "data": base64Str,
              "sign": sign
          },
          headers: {
              "content-Type": "application/x-www-form-urlencoded",
          }
        },(err, res, body) => {
          console.log(xmid)
          console.log(body)
          if (err) {
            reject(err);
          }
          if(body.code == 0){
            Users.doc(dataid).update({
              data: {
                lastDraw:new Date(),
                cardBag:_.push(body.data.prize_name),
                maxScore:score,
                accept:accept
              },
            })
          }else{
            Users.doc(dataid).update({
              data: {
                lastDraw:new Date(),
                maxScore:score,
                accept:accept
              },
            })
          }
          resolve(body);
        });
    })}
    const prize_name = await getRepoData();
    if(prize_name.code == 0)return prize_name.data.prize_name
    else return 401
  }else{
    return
  }
}