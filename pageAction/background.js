//add listner to browser tab update
browser.tabs.onUpdated.addListener(tabId => {
    initialize(tabId);
});

function initialize(tabId){
    browser.pageAction.setIcon({
        tabId: tabId,
        path: "icons/logo.png"
    })
    browser.pageAction.setTitle({
        tabId: tabId,
        title: "MY ACTION"
    });
    browser.pageAction.show(tabId);
    browser.pageAction.setPopup({
        tabId: tabId,
        popup: "popup/index.html"
    })
}