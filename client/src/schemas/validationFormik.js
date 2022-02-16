const Yup = require ('yup');


module.exports.updateSchema = Yup.object().shape({
  taskId: Yup.number().integer().positive().required('Id is required!'),
  body: Yup.string().matches(/^[\w\s]{3,}$/, 'Enter text three or more characters'),
  author: Yup.string().matches(/^[\w\s]{3,}$/,'Please enter text four min char'),
  isDone:Yup.boolean().default(false)
})
module.exports.createSchema = Yup.object().shape({  
  body: Yup.string().min(3,'Need more').max(50, 'To much').required(),
  author: Yup.string().min(3,'Need more').max(50, 'To much').required()
})

