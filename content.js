chrome.storage.local.get(['hideStatement'], function(result) {
  if(result.hideStatement) {
    document.body.classList.add('hideStatement');
  }
});
