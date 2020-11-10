chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["editable"]
  });

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "sampleContextMenu" && clickData.selectionText){    
        alert(clickData.selectionText)
    }
});