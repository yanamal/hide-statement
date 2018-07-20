
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.storage.local.get(['hideStatement'], function(result) {
    let newHideValue = ! result.hideStatement
    if(newHideValue) {
      chrome.browserAction.setIcon({path: "enabled.png", tabId:tab.id});
      chrome.tabs.executeScript(tab.id, {code:"document.body.classList.add('hideStatement');"});
    }
    else {
      chrome.browserAction.setIcon({path: "disabled.png", tabId:tab.id});
      chrome.tabs.executeScript(tab.id, {code:"document.body.classList.remove('hideStatement');"});
    }
    chrome.storage.local.set({hideStatement: newHideValue}, function() {});
  });
});


chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({hideStatement: true}, function() {
    console.log("Hiding statement");
  });
});
