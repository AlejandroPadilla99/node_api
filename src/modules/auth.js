const jwt = require('jsonwebtoken')

const createJWT = (user) => {
		const token = jwt.sign({
				id: user.id,
				username: user.username
				}, process.env.JWT_SECRET
		)
		return token;
}

const protect = (req, res) => {
		const bearer = req.headers.authorization;
		
		if(!bearer){
				res.status(401);
				res.json({message: 'not authorized'});
				return
		}
}

module.exports = {
		createJWT,
		protect
}
