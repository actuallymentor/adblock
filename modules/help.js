const colors = require( 'colors' )
const help = (  ) => {
	console.log( '\nAvailable commands:\n'.green )
	console.log( 'Adblock init: make an initial backup' )
	console.log( 'Adblock backup: make a timestamped backup in /etc' )
	console.log( 'Adblock enable: download and apply adblocking hosts rules or use an offline fallback' )
	console.log( 'Adblock disable: reset the hosts file to the one saved by adblock init' )
}
module.exports = help