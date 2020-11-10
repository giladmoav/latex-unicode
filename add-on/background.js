chrome.contextMenus.create({
    "id": "Convert",
    "title": "Convert latex to unicode",
    "contexts": ["editable"]
  });

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "Convert"){    
        chrome.tabs.executeScript({
            file: 'content-output.js'
          });
    }
});