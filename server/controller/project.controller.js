const Projectmodel=require("../model/project.model")
 
module.exports.createUser=(req,res)=>{
    Projectmodel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json(err))
}
 
module.exports.register=(req,res)=>{
    Projectmodel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}

module.exports.getUser=(req,res)=>{
    Projectmodel.find()
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}
module.exports.changeState = (req, res) => {
    Projectmodel.findOne({ _id: req.params.id })
        .then(project => {
            project.state = req.body.state;
            return project.save();
        })
        .then(updatedProject => res.json(updatedProject))
        .catch(err => res.status(400).json(err));
}