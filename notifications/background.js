browser.browserAction.onClicked.addListener(handleClick);

function handleClick(){
    browser.notifications.create({
        "type":"basic",
        "iconUrl":"bell.png",
        "title": "My Notification",
        "message": "My first notification to user"
    });
}