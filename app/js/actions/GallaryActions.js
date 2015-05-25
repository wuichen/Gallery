var Reflux = require('reflux');
var GallaryActions = Reflux.createActions(
    ["loadMoreArts", "switchArt"]
);
module.exports = GallaryActions;