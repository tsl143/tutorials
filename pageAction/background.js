const CSS = "body { border: 20px solid red; }";
const TITLE_APPLY = "Apply";
const TITLE_REMOVE = "Remove";
const WITH_POPUP = true;

// Setup the page action (icon, title)
function initializePageAction(tab) {

    browser.pageAction.setIcon({tabId: tab.id, path: "icons/off.svg"});
    browser.pageAction.setTitle({tabId: tab.id, title: TITLE_APPLY});
    browser.pageAction.show(tab.id);

    if(WITH_POPUP){
      browser.pageAction.setPopup({
        tabId: tab.id,
        popup: "popup/index.html"
      });  
    }
    
}

// initialize page acion on each tab update
browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  initializePageAction(tab);
});

// listen click action on page action
if(!WITH_POPUP) {
  browser.pageAction.onClicked.addListener(toggleCSS);
}

function toggleCSS(tab) {

  var gettingTitle = browser.pageAction.getTitle({tabId: tab.id});
  gettingTitle.then(gotTitle);    

  function gotTitle(title) {
    if (title === TITLE_APPLY) {
      browser.pageAction.setIcon({tabId: tab.id, path: "icons/on.svg"});
      browser.pageAction.setTitle({tabId: tab.id, title: TITLE_REMOVE});
      browser.tabs.insertCSS({code: CSS});
    } else {
      browser.pageAction.setIcon({tabId: tab.id, path: "icons/off.svg"});
      browser.pageAction.setTitle({tabId: tab.id, title: TITLE_APPLY});
      browser.tabs.removeCSS({code: CSS});
    }
  }
}

