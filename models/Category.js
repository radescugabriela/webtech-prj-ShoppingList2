"use strict";

module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    name: {
        type: DataTypes.STRING,
        field: 'name',
        allowNull:false
      },
  }, {
    timestamps: false,
    tableName: 'categories',
    classMethods: {
      associate: function(models) {
        Category.hasMany(models.List, { foreignKey: 'categoryId'})
      }
    }
  }
  );

  return Category;
};