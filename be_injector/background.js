window.injector = {
  themes: [],
  active: null
};

var getLocales = function(callback) {
  chrome.runtime.getPackageDirectoryEntry(function(root) {
    root.getDirectory("themes", {create: false}, function(localesdir) {
      var reader = localesdir.createReader();
      // Assumes that there are fewer than 100 locales; otherwise see DirectoryReader docs
      reader.readEntries(function(results) {
        callback(results.map(function(de){return de.name;}).sort());
      });
    });
  });
}

getLocales(function(themes) {
  window.injector.themes = themes;
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.tabs.executeScript(null, {file: 'themes/cleaner.js'});
  if (changeInfo.status != 'complete') {
    return;
  }
  if (window.injector.active) {
    //chrome.tabs.executeScript(null, {file: 'themes/cleaner.js'});
    chrome.tabs.executeScript(null, {file: 'themes/' + window.injector.active + '/js/script.js'});
    chrome.tabs.insertCSS(null, {file: 'themes/' + window.injector.active + '/css/style.css'});
  }
  
  //console.log(window.injector);
});