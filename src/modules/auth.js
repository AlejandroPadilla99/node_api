const jwt = require('jsonwebtoken')

export const createJWT = (user) => {
		const token = jwt.sing({
				id: user.id,
				username: user.username
				}, process.env.JWT_SECRET
		)
		return token;
}
