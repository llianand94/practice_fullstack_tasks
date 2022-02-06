'use strict';

const generateString = (length) => {
  var result= '';
  var characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

const generateTasks = (num=20) =>(
  new Array(num).fill(null).map((task)=>({
    body:generateString(10),
    is_done: false,
    author: generateString(6),
    created_at: new Date(),
    updated_at: new Date()
    }))
  );


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', generateTasks(), {});    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
    
  }
};
