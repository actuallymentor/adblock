const request = require( 'request' )
const fs = require( 'fs' )

const gethosts = ( target, callback ) => {
	request( 'https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts', ( err, resp, body ) => {
		if ( err ) callback ( err )
		fs.writeFile( target, body, err => {
			if ( err ) callback( err )
			callback( )
		} )
	} )
}

module.exports = gethosts