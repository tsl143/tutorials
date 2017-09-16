function letsDoThis(){
    document.body.style.border="20px solid green"
}

browser.runtime.onMessage.addListener(letsDoThis)

