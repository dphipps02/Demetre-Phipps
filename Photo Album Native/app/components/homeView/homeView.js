var modelModule = require("./homeView-view-model");
var model = modelModule.photoAlbumModel;

function onPageLoaded(args){
    var page = args.object;
    //set bindingContext to view model
    page.bindingContext = model;
}

exports.onPageLoaded = onPageLoaded;