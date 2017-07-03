var frameModule = require("ui/frame");
function buttonForwardTap(args) {
    var topmost = frameModule.topmost();
    var navigationEntry = {
        moduleName: "components/page1/page1", context: { info: {name:"John", age: "22"},
        },
        animated:false
    };
    topmost.navigate(navigationEntry);
}
exports.buttonForwardTap = buttonForwardTap;