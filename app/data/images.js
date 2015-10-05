var DESIGN_IMGS = require('./designteamdata.js').images.arrayForPreload();
var MEI_IMGS = require('./meidata.js').images.arrayForPreload();
var MOUNT_IMGS = require('./mountdata.js').images.arrayForPreload();
var PRISM_IMGS = require('./mountdata.js').images.arrayForPreload();
var ROCHE_IMGS = require('./rochedata.js').images.arrayForPreload();
var SNAP_IMGS = require('./snapdata.js').images.arrayForPreload();
var SUMMIT_IMGS = require('./summitdata.js').images.arrayForPreload();

var IMG_ARRAY = [DESIGN_IMGS, MEI_IMGS, MOUNT_IMGS, PRISM_IMGS, ROCHE_IMGS, SNAP_IMGS, SUMMIT_IMGS]

module.exports = IMG_ARRAY;