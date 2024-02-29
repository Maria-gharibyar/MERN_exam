const projectController=require('../controller/project.controller');

module.exports=(app)=>{
     app.get('/api/user',projectController.getUser)
     app.patch('/api/user/:id',projectController.changeState)
    app.post('/api/user',projectController.createUser)
    app.post('/api/register',projectController.register)
    // app.patch('/api/user/:id',userController.UpdateOne)
    // app.delete('/api/user/:id',userController.DeleteOne)
}