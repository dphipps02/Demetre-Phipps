var frameModule = require("ui/frame");

function buttonForwardTap(args){
    var topmost = frameModule.topmost();

topmost.navigate("components/page2/page2");
}

exports.buttonForwardTap = buttonForwardTap;

function buttonBackTap(args){
    var topmost= frameModule.topmost();
    topmost.goBack();
}

exports.buttonBackTap = buttonBackTap;

var dialogs = require("ui/dialogs");

function pageNavigatedTo(navigationEntry){
    var name = navigationEntry.context.info.name;
    var age = navigationEntry.context.info.age;
    dialogs.alert(name+", age "+age)
}
exports.pageNavigatedTo= pageNavigatedTo;