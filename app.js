#! /usr/bin/env node

// include libraries
const fs = require( 'fs' )
const colors = require( 'colors' )
const help = require( __dirname + '/modules/help' )
const gethosts = require( __dirname + '/modules/gethosts' )

// Variables
const sudo = process.env.SUDO_UID ? true : false
const action = process.argv[ 2 ]

// Interpret the command line
switch( action ){ 

	// Make an initial backup of the hosts file
	case "init":
		if ( !sudo ) return
		console.log( 'Making an initial backup of your original hosts file'.yellow )

		// Read the hosts file
		fs.readFile( '/etc/hosts', ( err, originalhosts ) => {
			if ( err ) throw err
			// Write hosts file to backup file
			fs.writeFile( '/etc/hosts.bak', originalhosts, err => { if ( err ) throw err } )
		} )

	break

	// Make a timestamped backup if the hosts file
	case "backup":
		if ( !sudo ) return
		console.log( 'Backing up the current hosts file'.yellow )

		// Read current hosts file
		fs.readFile( '/etc/hosts', ( err, originalhosts ) => {
			if ( err ) throw err
			// Write to timestamped
			fs.writeFile( '/etc/hosts.bak.' + new Date( ).getTime( ), originalhosts, err => { if ( err ) throw err } )
		} )
	break

	// Revert to the hosts file saved using init
	case "disable":
		if ( !sudo ) return
		console.log( 'Disabling adblock'.yellow )

		// Read the backup file
		fs.readFile( '/etc/hosts.bak', ( err, originalhosts ) => {
			if ( err ) throw err

			// 
			fs.writeFile( '/etc/hosts', originalhosts, err => { if ( err ) throw err } )
		} )
	break

	// Enable adblock
	case "enable":
		if ( !sudo ) return
		console.log( 'Enabling adblock'.green )

		// Get the latest available hosts file
		gethosts( __dirname + '/modules/hosts.latest', err => {
			// If we can't get yhe newest hosts, use a local backup
			if ( err ) {
				fs.readFile( __dirname + '/modules/hosts.default', ( err, defaulthosts ) => {
					if ( err ) throw err
					fs.writeFile( '/etc/hosts', defaulthosts, err => { 
						if ( err ) throw err
						fs.readFile( '/etc/hosts.bak', ( err, customhosts ) => {
							if ( err ) throw err
							fs.appendFile( '/etc/hosts', customhosts, err => { if ( err ) throw err } )
						} )
					} )
				} )
			} else {
				// Grab a fallback hosts file I manually downloaded
				fs.readFile( __dirname + '/modules/hosts.latest', ( err, latesthosts ) => {
					if ( err ) throw err
					fs.writeFile( '/etc/hosts', latesthosts, err => {
						if ( err ) throw err
						fs.readFile( '/etc/hosts.bak', ( err, customhosts ) => {
							if ( err ) throw err
							fs.appendFile( '/etc/hosts', customhosts, err => { if ( err ) throw err } )
						} )
					})
				} )
			}
		} )
	break

	// No command specified
	default:
		console.log( '\nI do not recognise this command'.red.underline )
		help()
	break

}