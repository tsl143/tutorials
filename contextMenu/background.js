// create a context menu
browser.contextMenus.create({
    id: "ddg",
    title: "Seacrh on duckduckGo",
    contexts: ["selection"]
});

//add action listener to the context menu
browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab) {
    const url = "https://duckduckgo.com/?q="+info.selectionText;
    browser.tabs.create({url: url});
}