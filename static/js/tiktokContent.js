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
  function t(e) {
    return (
      (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      t(e)
    );
  }
  function r(e) {
    var r = (function (e, r) {
      if ("object" != t(e) || !e) return e;
      var o = e[Symbol.toPrimitive];
      if (void 0 !== o) {
        var n = o.call(e, r || "default");
        if ("object" != t(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(e);
    })(e, "string");
    return "symbol" == t(r) ? r : r + "";
  }
  function o(e, t, o) {
    return (
      (t = r(t)) in e
        ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = o),
      e
    );
  }
  function n(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t &&
        (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        r.push.apply(r, o);
    }
    return r;
  }
  function i(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? n(Object(r), !0).forEach(function (t) {
            o(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : n(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t),
              );
            });
    }
    return e;
  }
  const u = (e, t, r) => {
      const o = { filename: e, type: "video", url: t };
      return r
        ? new Promise((e) => {
            e(i(i({}, o), {}, { headers: r }));
          })
        : (async (e) => {
            const t = await fetch(e, { method: "HEAD" }),
              r = {};
            return (
              t.headers.forEach((e, t) => {
                r[t] = e;
              }),
              r
            );
          })(t).then((e) => i(i({}, o), {}, { headers: e }));
    },
    a = function () {
      const t = window.location.href;
      2 === t.split("/video/").length &&
        chrome.runtime.sendMessage({ action: e.TikTok, url: t });
    };
  a(),
    chrome.runtime.onMessage.addListener((t) => {
      if (("pageUpdated" === t.action && a(), t.action === e.TikTokResponse)) {
        const r = [];
        u(t.data.title, t.data.url, t.data.headers).then((o) => {
          var n;
          r.push(o),
            (n = { list: r, header: t.data.title, id: window.location.href }),
            chrome.runtime.sendMessage({ action: e.Default, body: n });
        });
      }
    });
})();
//# sourceMappingURL=tiktokContent.js.map
