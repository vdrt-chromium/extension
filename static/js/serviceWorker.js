(() => {
  "use strict";
  function e(t) {
    return (
      (e =
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
      e(t)
    );
  }
  function t(t) {
    var o = (function (t, o) {
      if ("object" != e(t) || !t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
        var n = r.call(t, o || "default");
        if ("object" != e(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === o ? String : Number)(t);
    })(t, "string");
    return "symbol" == e(o) ? o : o + "";
  }
  function o(e, o, r) {
    return (
      (o = t(o)) in e
        ? Object.defineProperty(e, o, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[o] = r),
      e
    );
  }
  function r(e, t) {
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
  function n(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? r(Object(n), !0).forEach(function (t) {
            o(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : r(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t),
              );
            });
    }
    return e;
  }
  const a = (e) => {
    chrome.action.setBadgeText({ text: e });
  };
  let i = (function (e) {
    return (
      (e.CurrentTab = "currentTab"),
      (e.Errors = "errors"),
      (e.VimeoToken = "vimeoToken"),
      (e.Domains = "domains"),
      e
    );
  })({});
  const c = (e) => "".concat(+e > 99 ? "99+" : +e <= 0 ? "" : e),
    s = (e) => {
      chrome.storage.local.get([e], (t) => {
        var o;
        const r = null !== (o = t[e]) && void 0 !== o ? o : [],
          n = r.length ? c(r.length) : "";
        a(n);
      }),
        chrome.storage.local.set({ [i.CurrentTab]: e });
    };
  let d = (function (e) {
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
  const l = (e, t) => {
      chrome.storage.local.get([i.Errors], (o) => {
        var r, n, a;
        const c = null !== (r = o[i.Errors]) && void 0 !== r ? r : {};
        (c[
          null !== (n = null === (a = t.tab) || void 0 === a ? void 0 : a.id) &&
          void 0 !== n
            ? n
            : 0
        ] = e.error),
          chrome.storage.local.set({ [i.Errors]: c });
      });
    },
    u = (e) => {
      chrome.storage.local.get([i.Errors], (t) => {
        var o;
        const r = null !== (o = t[i.Errors]) && void 0 !== o ? o : {};
        delete r[e], chrome.storage.local.set({ [i.Errors]: r });
      });
    };
  function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
      o = "";
    const r = e.length;
    for (let n = 0; n < t; n++) o += e.charAt(Math.floor(Math.random() * r));
    return o;
  }
  const b = (e, t, o) => {
    const r = { filename: e, type: "video", url: t };
    return o
      ? new Promise((e) => {
          e(n(n({}, r), {}, { headers: o }));
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
        })(t).then((e) => n(n({}, r), {}, { headers: e }));
  };
  chrome.runtime.onMessage.addListener((e, t) => {
    switch (e.action) {
      case d.Default:
        ((e, t) => {
          var o;
          let { body: r } = e;
          chrome.storage.local.get(
            ["".concat(null === (o = t.tab) || void 0 === o ? void 0 : o.id)],
            (e) => {
              var o, n;
              const i =
                null !==
                  (o =
                    e[
                      "".concat(
                        null === (n = t.tab) || void 0 === n ? void 0 : n.id,
                      )
                    ]) && void 0 !== o
                  ? o
                  : [];
              if (
                !~i.findIndex((e) => {
                  let { id: t } = e;
                  return t === r.id;
                })
              ) {
                var s;
                const e = i.findIndex((e) => e.header === r.header);
                ~e ? (i[e].list = [...r.list, ...i[e].list]) : i.unshift(r),
                  chrome.storage.local.set({
                    ["".concat(
                      null === (s = t.tab) || void 0 === s ? void 0 : s.id,
                    )]: i,
                  }),
                  a(c(i.length));
              }
            },
          );
        })(e, t);
        break;
      case d.Twitter:
        (async (e, t) => {
          const o = "https://api.twitter.com/2/timeline/conversation/".concat(
            e.body.tweetId,
            ".json?include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&skip_status=1&cards_platform=Web-12&include_cards=1&include_composer_source=true&include_ext_alt_text=true&include_reply_count=1&tweet_mode=extended&include_entities=true&include_user_entities=true&include_ext_media_color=true&include_ext_media_availability=true&send_error_codes=true&simple_quoted_tweets=true&count=20&ext=mediaStats%252ChighlightedLabel%252CcameraMoment",
          );
          chrome.storage.local.get("currentTwitterHeaders", (r) => {
            const a = r.currentTwitterHeaders.reduce((e, t) => {
              let { name: o, value: r } = t;
              return n(n({}, e), {}, { [o]: r });
            });
            fetch(o, { method: "GET", headers: a })
              .then((e) => e.json())
              .then((o) => {
                var r, n, a, i, c;
                if (o.errors)
                  return (
                    console.error(o.errors),
                    l(
                      {
                        action: d.Error,
                        error: "Login on twitter to download from this site",
                      },
                      t,
                    ),
                    chrome.storage.local.remove([
                      "".concat(
                        null === (i = t.tab) || void 0 === i ? void 0 : i.id,
                      ),
                    ]),
                    void s(
                      "".concat(
                        null === (c = t.tab) || void 0 === c ? void 0 : c.id,
                      ),
                    )
                  );
                u(null === (r = t.tab) || void 0 === r ? void 0 : r.id);
                const m =
                    o.globalObjects.tweets[e.body.tweetId].extended_entities
                      .media[0].video_info.variants,
                  b =
                    o.globalObjects.users[
                      o.globalObjects.tweets[e.body.tweetId].user_id_str
                    ].name,
                  v = "Video by ".concat(b, " (").concat(e.body.tweetId, ")"),
                  h = m.filter((e) => "video/mp4" === e.content_type);
                chrome.tabs.sendMessage(
                  null !==
                    (n =
                      null === (a = t.tab) || void 0 === a ? void 0 : a.id) &&
                    void 0 !== n
                    ? n
                    : 0,
                  { action: d.TwitterResponse, body: { urls: h, title: v } },
                  () => {},
                );
              });
          });
        })(e, t);
        break;
      case d.Error:
        l(e, t);
        break;
      case d.TikTok:
        ((e, t) => {
          const o = Math.round(Date.now() / 1e3),
            r = {
              aweme_id: e.url.split("/video/")[1],
              version_name: "26.1.2",
              version_code: "260102",
              build_number: "26.1.2",
              manifest_version_code: "260102",
              update_version_code: "260102",
              openudid: m("0123456789abcdef"),
              uuid: m("0123456789"),
              _rticket: 1e3 * o,
              ts: o,
              device_brand: "Google",
              device_type: "Pixel 4",
              device_platform: "android",
              resolution: "1080*1920",
              dpi: 420,
              os_version: "10",
              os_api: "29",
              carrier_region: "US",
              sys_region: "US",
              region: "US",
              app_name: "trill",
              app_language: "en",
              language: "en",
              timezone_name: "America/New_York",
              timezone_offset: "-14400",
              channel: "googleplay",
              ac: "wifi",
              mcc_mnc: "310260",
              is_my_cn: 0,
              aid: 1180,
              ssmix: "a",
              as: "a1qwert123",
              cp: "cbfhckdckkde1",
            },
            n =
              "https://"
                .concat("api16-normal-c-useast1a.tiktokv.com", "/aweme/")
                .concat("v1", "/")
                .concat("feed", "/") +
              Object.keys(r)
                .map(function (e, t) {
                  return ""
                    .concat(t > 0 ? "&" : "?")
                    .concat(e, "=")
                    .concat(r[e]);
                })
                .join("");
          fetch(n)
            .then((e) => e.json())
            .then((e) => {
              var o, r;
              const n = e.aweme_list[0],
                a = {
                  "content-length": n.video.play_addr.data_size,
                  "content-type": "video/mp4",
                };
              chrome.tabs.sendMessage(
                null !==
                  (o = null === (r = t.tab) || void 0 === r ? void 0 : r.id) &&
                  void 0 !== o
                  ? o
                  : 0,
                {
                  action: d.TikTokResponse,
                  data: {
                    url: n.video.play_addr.url_list[0],
                    title: n.desc || n.aweme_id,
                    headers: a,
                  },
                },
                () => {},
              );
            });
        })(e, t);
        break;
      case d.YouTube:
        ((e, t) => {
          const o = encodeURIComponent(e.url);
          fetch(
            "https://vidow.me/chromium/getinfo.php?" +
              new URLSearchParams({ videourl: o }),
          )
            .then((e) => e.json())
            .then((e) => {
              var r;
              const n =
                  null !== (r = null == e ? void 0 : e.baseurl) && void 0 !== r
                    ? r
                    : null == e
                      ? void 0
                      : e.streaming_url,
                a = null == e ? void 0 : e._filename,
                i = [];
              n &&
                b(a, n).then((e) => {
                  var r, n;
                  "0" !== e.headers["content-length"] &&
                    (i.push(e),
                    chrome.tabs.sendMessage(
                      null !==
                        (r =
                          null === (n = t.tab) || void 0 === n
                            ? void 0
                            : n.id) && void 0 !== r
                        ? r
                        : 0,
                      {
                        action: d.YouTubeResponse,
                        data: { list: i, header: a, id: o },
                      },
                      () => {},
                    ));
                });
            });
        })(e, t);
    }
  }),
    chrome.tabs.onActivated.addListener((e) => {
      s("".concat(e.tabId));
    }),
    chrome.tabs.onUpdated.addListener((e) => {
      chrome.tabs.sendMessage(e, { action: "pageUpdated" }, () => {}),
        s("".concat(e));
    }),
    chrome.tabs.onUpdated.addListener(function (e, t) {
      if (t.url) {
        const o = new URL(t.url).hostname;
        chrome.storage.local.get([i.Domains], (t) => {
          var r;
          const a = null !== (r = t[i.Domains]) && void 0 !== r ? r : {};
          a[e]
            ? a[e] !== o &&
              (chrome.storage.local.remove(["".concat(e)]),
              chrome.storage.local.set({
                [i.Domains]: n(n({}, a), {}, { ["".concat(e)]: o }),
              }),
              u(e))
            : chrome.storage.local.set({
                [i.Domains]: n(n({}, a), {}, { ["".concat(e)]: o }),
              });
        });
      }
    }),
    chrome.webRequest.onBeforeSendHeaders.addListener(
      (e) => {
        const t = new URL(e.url).searchParams.get("fb_dtsg_ag");
        t && chrome.storage.local.set({ currentFb_dtsgToken: t }, () => {});
      },
      {
        urls: [
          "*://*.facebook.com/video/video_data_async/*",
          "*://*.facebook.com/ajax/*",
        ],
      },
      ["requestHeaders"],
    ),
    chrome.webRequest.onBeforeSendHeaders.addListener(
      function (e) {
        var t;
        const o = null !== (t = e.requestHeaders) && void 0 !== t ? t : [];
        let r = null;
        for (let e = 0; e < o.length; ++e)
          if ("Authorization" === o[e].name) {
            r = o[e].value;
            break;
          }
        r && chrome.storage.local.set({ [i.VimeoToken]: r }, () => {});
      },
      { urls: ["*://api.vimeo.com/*"] },
      ["requestHeaders"],
    ),
    chrome.webRequest.onBeforeSendHeaders.addListener(
      (e) => {
        e.requestHeaders &&
          chrome.storage.local.set(
            { currentTwitterHeaders: e.requestHeaders },
            () => {},
          );
      },
      { urls: ["*://*.twitter.com/i/api/*"] },
      ["requestHeaders"],
    );
})();
//# sourceMappingURL=serviceWorker.js.map
