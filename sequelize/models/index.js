var Sequelize = require('sequelize');
var path = require('path');
var fs = require('fs');
// dotenv를 require로 가져옴
var dotenv = require('dotenv');

dotenv.config(); //LOAD CONFIG

// process.env.[환경변수명] 으로 필요한 정보를 불러옴
const sequelize = new Sequelize( process.env.DATABASE,
process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: 'mysql',
    timezone: '+09:00', //한국 시간 셋팅
    operatorsAliases: Sequelize.Op,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

let db = [];

fs.readdirSync(__dirname)
    .filter(file => {
        return file.indexOf('.js')&& file !== 'index.js'
    })
    .forEach(file => {
        var model = sequelize.import(path.join(__dirname,
            file));
            db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if("associate" in db[modelName]){
        // 테이블간의 관계도, 외래키 관련
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;