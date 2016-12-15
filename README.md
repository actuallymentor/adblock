# Hosts File Adblock
[![npm version](https://badge.fury.io/js/adblock.svg)](https://badge.fury.io/js/adblock) [![NSP Status](https://nodesecurity.io/orgs/open-source-projects/projects/24c3e1ac-5186-4cad-a7d0-092d0500c6c4/badge)](https://nodesecurity.io/orgs/open-source-projects/projects/24c3e1ac-5186-4cad-a7d0-092d0500c6c4)

Blocks ad & malware URLs system wide in all applications, not just in the browser. Loads known advertising and malware hosts from [this github project]( https://github.com/StevenBlack/hosts ) to the Mac OS X /etc/hosts file. This results in an incapacity to load these hosts, blocking ads in all programs system wide.

**Compatibility:** tested on Mac OSX Sierra.

## Getting started

Make sure to have [ NodeJS ]( https://nodejs.org/en/ ) installed. Then use npm to globally install adblock:

```shell
npm install -g adblock
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

## Caveats

The hosts file blocks system wie network calls. If you need to be able to reach certain ad/tracking domains (e.g. Google Analytics) you will have to disable adblock.