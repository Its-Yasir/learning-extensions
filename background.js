chrome.runtime.onInstalled.addListener(()=>{
  chrome.storage.sync.get(['geminiAPIKey'], ({ geminiAPIKey }) => {
    if(!geminiAPIKey){
      chrome.tabs.create({url : "options.html"})
    }
  })
})