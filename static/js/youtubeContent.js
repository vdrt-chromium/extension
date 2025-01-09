(() => {
  "use strict";
  let e = (function (e) {
    return (
      (e.Default = "default"),
      (e.Twitter = "twitter"),
      (e.PageUpdated = "pageUpdated"),
      (e.TwitterResponse = "twitterResponse"),
      (e.Error = "error"),
      (e.TikTok = "tikTok"),
      (e.TikTokResponse = "tikTokResponse"),
      (e.YouTube = "youTube"),
      (e.YouTubeResponse = "youTubeResponse"),
      e
    );
  })({});
  const o = () => {
    chrome.runtime.sendMessage({
      action: e.Error,
      error:
        "Sorry, due to YouTube Policy we do not support downloading from YouTube",
    });
  };
  o(),
    chrome.runtime.onMessage.addListener((e) => {
      "pageUpdated" === e.action && o();
    });
})();
//# sourceMappingURL=youtubeContent.js.map
