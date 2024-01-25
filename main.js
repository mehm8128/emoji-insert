chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  if (info.status === 'complete' && /https:\/\/github.com\//.test(tab.url)) {
    chrome.scripting.executeScript({
			target: { tabId },
			files: ["insertEmoji.js"],
  	});
  }
});
