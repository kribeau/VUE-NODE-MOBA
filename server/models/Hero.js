const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  //英雄名称
  name: { type: String },
  //英雄头像
  avatar: { type: String },
  //banner图
  banner: { type: String },
  //英雄称号（例如亚索的称号是疾风剑豪）
  title: { type: String },
  //英雄职业（标签）
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  //英雄评分
  scores: {
    difficult: { type: Number },
    skills: { type: Number },
    attack: { type: Number },
    survive: { type: Number }
  },
  //技能描述
  skills: [
    {
      icon: { type: String },
      name: { type: String },
      delay: { type: String },
      cost: { type: String },
      description: { type: String },
      tips: { type: String }
    }
  ],
  //items1:顺风出装，items2：逆风出装
  items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  //使用技巧
  usageTips: { type: String },
  //对线技巧
  battleTips: { type: String },
  //团战技巧
  teamTips: { type: String },
  //搭档
  partners: [
    {
      hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
      description: { type: String }
    }
  ]
})

module.exports = mongoose.model('Hero', schema, 'heroes')
