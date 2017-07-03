var frameModule = require("ui/frame");

function buttonBackTap(args){
    var topmost = frameModule.topmost();
    topmost.goBack();
}

exports.buttonBackTap = buttonBackTap;