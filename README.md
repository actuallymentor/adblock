# Hosts File Adblock

Loads known advertising and malware hosts from [this github project]( https://github.com/StevenBlack/hosts ) to the Mac OS X /etc/hosts file.

This results in an incapacity to load these hosts, blocking ads in all programs system wide.

## Getting started

Make sure to have [ NodeJS ]( https://nodejs.org/en/ ) installed. Then use npm to install adblock:

```shell
npm install adblock
```

Start off by making a backup of your hosts file:

```shell
sudo adblock init
```

Then enable and disable adblock as needed

```shell
sudo adblock enable
sudo adblock disable
```

NOTE: The hosts file is a system file, this is why adblock needs to be run with ```sudo```.