//first one to reflect the view
var observable = require("data/observable");
//needed to load the image files into the app as image objects
var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");
//needed for the collection where the image objects will be stored
var observableArrayModule = require("data/observable-array");
//gives access to the image encoding enumeration that will be needed when you upload images to the cloud in Lesson 2. 
var enums = require("ui/enums");

//
var localImagesArray = new observableArrayModule.ObservableArray();
var directory = "/../../res/";

function imageFromSource(imageName) {
    return imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + imageName));
};
//images 1-6 is being pushed, image 7 and 8 will be pushed by a button
var item1 = {itemImage: imageFromSource("01.jpg")}; 
var item2 = {itemImage: imageFromSource("02.jpg")}; 
var item3 = {itemImage: imageFromSource("03.jpg")}; 
var item4 = {itemImage: imageFromSource("04.jpg")}; 
var item5 = {itemImage: imageFromSource("05.jpg")}; 
var item6 = {itemImage: imageFromSource("06.jpg")};
//pushing images 1-6 to array
localImagesArray.push([item1, item2, item3, item4, item5, item6]);
//images 7 and 8
var item7 = {itemImage: imageFromSource("07.jpg")}; 
var item8 = {itemImage: imageFromSource("08.jpg")};

//creating the view model as an instance of type Observable
//bind controls properties from the main page to properties in the view model.
var photoAlbumModel = new observable.Observable();

photoAlbumModel.set("message", "Add new photos");




Object.defineProperty(photoAlbumModel, "photoItems",{

    get: function(){
        return localImagesArray;
    }, 
    enumerable: true, 
    configurable: true
})


photoAlbumModel.tapAction = function(){
    //push images 7 and 8
    localImagesArray.push(item7);
    localImagesArray.push(item8);
    //to inform the user about the new images
    photoAlbumModel.set("message", "Images added. Total images: "+localImagesArray.length);
};
exports.photoAlbumModel = photoAlbumModel;

