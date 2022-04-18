const moment = require('moment');
// DB ¸ðµ¨ »ý¼º
module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name : { type: DataTypes.STRING },
            price : { type: DataTypes.INTEGER },
            description : { type: DataTypes.TEXT }
        }
    );

    Products.prototype.dateFormat = (date) => (
        moment(date).format('YYYY-MM-DD')
    );
    
    return Products;
}