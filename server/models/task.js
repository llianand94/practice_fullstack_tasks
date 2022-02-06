'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    body: {
      type:DataTypes.TEXT,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    isDone: {
      field:"is_done",
      type:DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull:false
    },
    author: {
      type:DataTypes.STRING(32),
      allowNull:false,
      validate:{
        is:/^[a-zA-Z0-9]{3,32}$/
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
    underscored: true
  });
  return Task;
};