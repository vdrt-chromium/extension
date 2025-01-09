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
    c = function () {
      const t = document.querySelectorAll("video"),
        r = [];
      t.forEach((t) => {
        let o;
        var n, i;
        t.src
          ? (o = t.src)
          : (o =
              null !==
                (n =
                  null === (i = t.querySelector("source")) || void 0 === i
                    ? void 0
                    : i.src) && void 0 !== n
                ? n
                : "");
        o &&
          u(document.title, o).then((t) => {
            var n;
            r.push(t),
              (n = { list: r, header: o, id: o }),
              chrome.runtime.sendMessage({ action: e.Default, body: n });
          });
      });
    };
  c(),
    chrome.runtime.onMessage.addListener((e) => {
      "pageUpdated" === e.action && c();
    });
  let s = "";
  chrome.runtime.onMessage.addListener((e) => {
    "changeTab" === e.action && (s = e.tabID), s === e.tabID && c();
  });
})();
//# sourceMappingURL=otherSitesContent.js.map
