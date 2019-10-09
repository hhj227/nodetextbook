const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development'; // production
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.Sequelize = Sequelize; // package
db.sequelize = sequelize; // instance

db.User = require('./user')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

// 시퀄라이즈 관계 설정
db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });

module.exports = db;