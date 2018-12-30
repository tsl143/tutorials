chrome.commands.onCommand.addListener(function(name){
    if(name == 'my-shortcut') {
        chrome.notifications.create({
            type: "basic",
            title: "My Shortcut",
            message: "my shortcut works",
            iconUrl: "icon.png"
        })
    }
})

chrome.commands.update({
    name: "my-shortcut",
    shortcut: "Ctrl+Shift+L"
})

chrome.commands.reset('my-shortcut');