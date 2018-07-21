class userhelper{
	postsignup(req,res,next){
		if(!req.body.name || !req.body.email || !req.body.password){
			return res.status(400).json({ message : 'Bad Values' });
		}
		next();
	}
}
userhelper  = new userhelper;
module.exports = userhelper;
