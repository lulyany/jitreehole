const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database({ env: 'ji-9gng9vk76e3c65f1' })
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  const Post_id = event.Post_id
  return db.collection('Assistant_DataSheet').doc(Post_id).update({
    data: {
      Up_Record_num: _.inc(1)
    },
  }).then(res => {
    console.log(res)
  })
}