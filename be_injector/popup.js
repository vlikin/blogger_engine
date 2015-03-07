var createMenu = function(document, bg_window) {
  var themes = bg_window.injector.themes;
  var container = document.getElementById('theme-container');
  for (var index in themes) {
    var theme_name = themes[index];
    var theme = document.createElement('div');
    theme.innerText = theme_name;
    theme.className = 'item';
    if (theme_name == bg_window.injector.active) {
      theme.className = 'item active';
    }
    theme.addEventListener('click', function() {
      var menu_item = this;
      chrome.runtime.getBackgroundPage(function (bg_window) {
        bg_window.injector.active = menu_item.innerText;
        chrome.tabs.reload();
        window.close();
      })
    });
    container.appendChild(theme);
  }
}

window.onload = function() {
  chrome.runtime.getBackgroundPage(function (bg_window) {
    createMenu(document, bg_window);
  })
}