"use strict";

/**
 * HuglaPassport -
 */
class HuglaUserDBAdpter {

	/**
	 * Class Constructor
	 */
	constructor() {
		if (this.constructor.name === "userDBadapter") {
			throw new TypeError("Cannot construct Abstract instances directly");
		}
	}

	/**
	 * Get user interface method
	 *
	 * @param user
	 */
	get(user) {
		console.log("user: ", user);
	}

	/**
	 * Insert user interface method
	 *
	 * @param user
	 */
	insert(user) {
		console.log("insert user: ", user);
	}

	/**
	 * Update user interface method
	 *
	 * @param user
	 */
	update(filter, user) {
		console.log("update user: ", user);
	}

	/**
	 * Remove user interface method
	 *
	 * @param user
	 */
	remove(user) {
		console.log("deleted user", user);
	}

}

module.exports = HuglaUserDBAdpter;