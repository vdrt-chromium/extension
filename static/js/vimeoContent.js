(() => {
  "use strict";
  let e = (function (e) {
    return (
      (e.CurrentTab = "currentTab"),
      (e.Errors = "errors"),
      (e.VimeoToken = "vimeoToken"),
      (e.Domains = "domains"),
      e
    );
  })({});
  let t = (function (e) {
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
  function o(e) {
    return (
      (o =
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
      o(e)
    );
  }
  function r(e) {
    var t = (function (e, t) {
      if ("object" != o(e) || !e) return e;
      var r = e[Symbol.toPrimitive];
      if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" != o(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == o(t) ? t : t + "";
  }
  function n(e, t, o) {
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
  function i(e, t) {
    var o = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        o.push.apply(o, r);
    }
    return o;
  }
  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? i(Object(o), !0).forEach(function (t) {
            n(e, t, o[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
          : i(Object(o)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(o, t),
              );
            });
    }
    return e;
  }
  const c = (e, t, o) => {
      const r = { filename: e, type: "video", url: t };
      return o
        ? new Promise((e) => {
            e(s(s({}, r), {}, { headers: o }));
          })
        : (async (e) => {
            const t = await fetch(e, { method: "HEAD" }),
              o = {};
            return (
              t.headers.forEach((e, t) => {
                o[t] = e;
              }),
              o
            );
          })(t).then((e) => s(s({}, r), {}, { headers: e }));
    },
    u = function () {
      const o = window.location.pathname;
      chrome.storage.local.get([e.VimeoToken], (r) => {
        var n;
        const i = null !== (n = r[e.VimeoToken]) && void 0 !== n ? n : "";
        if (i) {
          const e = { Authorization: i, "Content-Type": "application/json" },
            r = "https://api.vimeo.com/videos/".concat(o);
          fetch(r, { headers: e })
            .then((e) => {
              if (e.ok) return e.json();
              throw new Error("HTTP error: ".concat(e.status));
            })
            .then((e) => {
              const o = [],
                r = [];
              null == e ||
                e.files.forEach((t) => {
                  const n = c(
                    null == e ? void 0 : e.name,
                    null == t ? void 0 : t.link,
                    {
                      "content-length": "".concat(null == t ? void 0 : t.size),
                      "content-type": null == t ? void 0 : t.type,
                      expires: null == t ? void 0 : t.expires,
                      "last-modified": null == t ? void 0 : t.created_time,
                    },
                  ).then((e) => {
                    o.push(e);
                  });
                  r.push(n);
                }),
                Promise.all(r).then(() => {
                  !(function (e) {
                    chrome.runtime.sendMessage({ action: t.Default, body: e });
                  })({
                    list: o,
                    header: null == e ? void 0 : e.name,
                    id: null == e ? void 0 : e.link,
                  });
                });
            })
            .catch((e) => {
              console.error(e);
            });
        } else
          chrome.storage.onChanged.addListener(() => {
            u();
          }),
            chrome.runtime.sendMessage({
              action: t.Error,
              error: "Login on vimeo to download from this site",
            });
      });
    };
  u(),
    chrome.runtime.onMessage.addListener(
      (e) => ("pageUpdated" === e.action && u(), !0),
    );
})();
//# sourceMappingURL=vimeoContent.js.map
