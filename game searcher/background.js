const gamivoMenuItemId = "searchOnGamivo";
const cdkeysMenuItemId = "searchOnCDKeys";
const allKeyShopMenuItemId = "searchOnAllKeyShop";

chrome.contextMenus.create({
  id: gamivoMenuItemId,
  title: "Search Gamivo",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  id: cdkeysMenuItemId,
  title: "Search on CDKeys",
  contexts: ["selection"],
});

chrome.contextMenus.create({
    id: allKeyShopMenuItemId,
    title: "Search on All Key Shop",
    contexts: ["selection"],
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === gamivoMenuItemId) {
        searchOnSite("https://www.gamivo.com/search/", info.selectionText);
    } else if (info.menuItemId === cdkeysMenuItemId) {
        searchOnSite("https://www.cdkeys.com/search?q=", info.selectionText);
    }else{
        searchOnSite("https://www.allkeyshop.com/blog/catalogue/search-", info.selectionText);
    }
  });
  
  function searchOnSite(url, query) {
    chrome.tabs.create({ url: url + encodeURIComponent(query) });
  }
  