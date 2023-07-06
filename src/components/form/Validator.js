const validator = {
	validate(value, setting, column) {
		switch (setting.type.toLowerCase()) {
			case 'email':
				if (value === null || value === '') return column + ' is required.'
				if (this.checkEmail(value) === false) return column + ' is invalid.'
				return true
			case 'text':
				if (value === null || value === '') return column + ' is required.'
				if (value.length < setting.size) return column + ' requires atleast ' + setting.size + ' characters.'
				return true
			case 'phone_number':
				if (value === null || value === '') return column + ' is required.'
				if (value.length < 8) return column + ' requires atleast ' + setting.size + ' digits.'
				if (isNaN(value)) return column + ' is invalid'
				return true
			case 'text_without_space':
				if (value === null || value === '') return column + ' is required.'
				if (value.length < setting.size) return column + ' requires atleast ' + setting.size + ' characters.'
				// if(value != null && value != '' && value.indexOf(' ') >= 0) return column + ' should not contain spaces.'
				return true
			case 'number':
				if (value === null || value === '') return column + ' is required.'
				if (isNaN(value) === true) return column + ' is invalid.'
				return true
			default:
				break
		}
	},
	checkEmail(value) {
		let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/
		let reqWhiteSpace = /\s/
		if (reqWhiteSpace.test(value)) {
			return false
		}
		if (reg.test(value) === false) {
			return false
		} else {
			return true
		}
	}
}
export default validator;