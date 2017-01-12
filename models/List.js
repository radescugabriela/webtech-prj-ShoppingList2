module.exports = function(sequelize, DataTypes) {
    // define entity
      var List=sequelize.define('List',{
    product: {
        type:  DataTypes.STRING,
        field: 'product',
        allowNull:false
    },
    category: {
        type:  DataTypes.INTEGER,
        field: 'category'
    },
    quantity: {
        type:  DataTypes.INTEGER,
        field: 'quantity'
    },
    price: {
        type:  DataTypes.FLOAT,
        field: 'price'
    }
}, {
    timestamps: false,
     tableName: 'lists',
     classMethods: {
     associate: function(models) {
     List.belongsTo(models.Category, {  
     onDelete: "CASCADE",
     foreignKey:'categoryId'
        });
      }
    }
    });
    
    return List;
}
