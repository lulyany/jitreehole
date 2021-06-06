// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database({ env: 'ji-9gng9vk76e3c65f1' })
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  const select_record = event.youid
  return db.collection('Record_picture').doc(select_record).remove({
  }).then(res => {
    console.log(res)
  })

}