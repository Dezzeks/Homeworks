const userMainPage = (req, res) => {
    res.render('users')
}
const postNewUser = (req, res) => {
    let newUser = new User(
        {
            username: req.body.username,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
	        password: req.body.password,
        }
        );
    newUser.save()       
    res.redirect('/')
}
const usersList = async(req, res) => {
    let allUsers = await User.find({});
    // console.log(allUsers)
    res.render('usersInfo', {users:allUsers})
}
const editUsers = async(req, res) =>{
    let userId = await User.findOne({_id:req.query.id});
    res.render('userEdit', {userIds:userId})
}
const editInfo = async(req, res) =>{
    await User.findOneAndUpdate({_id: req.query.id},req.body, {new: true});
    console.log(req.query)
    console.log(req.body)
    res.redirect('/user-edit?id='+req.query.id)
}
const userDelete = async(req, res) =>{
    await User.findByIdAndDelete({_id:req.query.id})
    res.redirect('/users-info')
}

module.exports = {userMainPage, postNewUser, usersList, editUsers, editInfo, userDelete} 