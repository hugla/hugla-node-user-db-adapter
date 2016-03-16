"use strict";

/**
 * HuglaPassport -
 */
class HuglaUserDBAdpter {

	/**
	 * Class constructor
	 * @param {object} app Hugla app
	 * @param {object} app.config Configuration object
	 * @param {object} app.config.passport passport config object
	 */
	constructor() {
		if (this.constructor.name === "userDBadapter") {
			throw new TypeError("Cannot construct Abstract instances directly");
		}
		console.log("load",this.constructor.name);
	}

	/**
	 * @param {object} app Express app
	 */
		get(user){
		console.log("useer: ",user);
	}
		insert(user){
		console.log("insert useer: ",user);
	}
		update(user,filter){
		console.log("update useer: ",user);
	}
		remove(user){
		console.log("deleted user",user);
	}

}

module.exports = userDBadapter;