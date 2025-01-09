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
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var o = n.call(e, r || "default");
        if ("object" != t(o)) return o;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(e);
    })(e, "string");
    return "symbol" == t(r) ? r : r + "";
  }
  function n(e, t, n) {
    return (
      (t = r(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function o(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function i(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? o(Object(r), !0).forEach(function (t) {
            n(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : o(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t),
              );
            });
    }
    return e;
  }
  const c = (e, t, r) => {
      const n = { filename: e, type: "video", url: t };
      return r
        ? new Promise((e) => {
            e(i(i({}, n), {}, { headers: r }));
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
          })(t).then((e) => i(i({}, n), {}, { headers: e }));
    },
    u = window.location,
    s = function () {
      const e = u.pathname;
      fetch("https://www.dailymotion.com/player/metadata".concat(e))
        .then((e) => e.json())
        .then((e) => a(e.qualities.auto[0].url));
    },
    a = function (e) {
      var t = new XMLHttpRequest();
      t.open("GET", e, !1), t.send(), p(t.responseText);
    },
    p = function (e) {
      const t = e.split("\n").map((e) => e.split(",")),
        r = [];
      t.forEach((e) => {
        e.length < 6 || r.push(e);
      });
      const n = r
        .filter((e, t) => !(t % 2))
        .map((e) => {
          if (e[5]) {
            var t;
            const r =
              null === (t = /PROGRESSIVE-URI="(.*)"/) || void 0 === t
                ? void 0
                : t.exec(e);
            return r ? r[1] : "";
          }
          return "";
        })
        .filter((e) => "" !== e);
      l(n);
    },
    l = function (t) {
      const r = document.title.split(" ");
      r.splice(-3, 3);
      const n = r.join(" "),
        o = [],
        i = [];
      t.forEach((e) => {
        const t = c(n, e).then((e) => {
          o.push(e);
        });
        i.push(t);
      }),
        Promise.all(i).then(() => {
          var t;
          (t = { list: o, header: n, id: new Date().toString() }),
            chrome.runtime.sendMessage({ action: e.Default, body: t });
        });
    };
  s(),
    chrome.runtime.onMessage.addListener((e) => {
      "pageUpdated" === e.action && s();
    });
})();
//# sourceMappingURL=dailymotionContent.js.map
