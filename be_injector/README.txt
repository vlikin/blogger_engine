=== TIPS ===
* This background script is the only one that’ll have access to the current Tab object and to the chrome.* .
* To get the background window object.
chrome.extension.getBackgroundPage().variable = 42;
* To get a popup window object.
var popups = chrome.extension.getViews({type: "popup"});


=== Links ===
* Get started - https://developer.chrome.com/extensions/getstarted
* Chrome extension tut - https://blog.hartleybrody.com/chrome-extension/
* Communication between background and popup scripts - http://stackoverflow.com/questions/10340481/popup-window-in-chrome-extension
