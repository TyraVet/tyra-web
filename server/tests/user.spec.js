const mockingoose = require('mockingoose').default
const UserModel = require('../models/user.js')

describe('User Model', () => {
	it('Should return the User with findById', () => {
		const _user = {
			_id: '507f191e810c19729de860ea',
			username: 'admin',
			password: 'admin12',
			type: ({
				_id: '507f191e810c19729de860eb',
				name: 'admin'
			})
		}

		mockingoose(UserModel).toReturn(_user, 'findOne')

		return UserModel.findById({ _id: _user._id })
						.then(user => {
							expect(JSON.parse(JSON.stringify(user))).toMatchObject(_user)
						})
	})

	it('Should return the User with findOne', () => {
		const _user = {
			_id: '507f191e810c19729de860ea',
			username: 'admin',
			password: 'admin12',
			type: ({
				_id: '507f191e810c19729de860eb',
				name: 'admin'
			})
		}

		mockingoose(UserModel).toReturn(_user, 'findOne')

		return UserModel.findOne({ username: _user.username })
						.then(user => {
							expect(JSON.parse(JSON.stringify(user))).toMatchObject(_user)
						})
	})
})
