(() => {
  "use strict";
  (() => {
    const t = document.getElementById("movie_player").getPlayerResponse();
    if (!t) return;
    const e = [17, 18, 43, 44, 22, 45],
      o = {
        17: { format: "3GP", quality: "240p", ext: "3gp", note: "" },
        18: { format: "MP4", quality: "360p", ext: "mp4", note: "" },
        22: { format: "MP4", quality: "720p", ext: "mp4", note: "" },
        43: { format: "WebM", quality: "360p", ext: "webm", note: "" },
        44: { format: "WebM", quality: "480p", ext: "webm", note: "" },
        45: { format: "WebM", quality: "720p", ext: "webm", note: "" },
        46: { format: "WebM", quality: "1080p", ext: "webm", note: "" },
        135: { format: "MP4", quality: "480p", ext: "mp4", note: "no audio" },
        136: { format: "MP4", quality: "720p", ext: "mp4", note: "no audio" },
        137: { format: "MP4", quality: "1080p", ext: "mp4", note: "no audio" },
        138: { format: "MP4", quality: "2160p", ext: "mp4", note: "no audio" },
        140: {
          format: "M4A",
          quality: "128kbps",
          ext: "m4a",
          note: "audio only",
        },
        247: { format: "WebM", quality: "720p", ext: "webm", note: "no audio" },
        264: { format: "MP4", quality: "1440p", ext: "mp4", note: "no audio" },
        266: { format: "MP4", quality: "2160p", ext: "mp4", note: "no audio" },
        298: {
          format: "MP4",
          quality: "720p60fps",
          ext: "mp4",
          note: "no audio",
        },
        299: {
          format: "MP4",
          quality: "1080p60fps",
          ext: "mp4",
          note: "no audio",
        },
      };
    let a = t.streamingData.formats.concat(t.streamingData.adaptiveFormats);
    console.log(a),
      a.forEach(function (t, a) {
        if (-1 === e.indexOf(t.itag)) return 0;
        let i;
        if (t.url) i = t.url;
        else if (t.cipher) i = t.cipher;
        else if (t.signatureCipher) {
          (i = t.signatureCipher),
            (i = i.split("&url=")),
            (i = decodeURIComponent(i[1] + "&" + i[0]));
          var n = new URLSearchParams(i);
          n.get("sp") &&
            (i = i + "&" + n.get("sp") + "=" + n.get("s") + "&dec=1");
        }
        console.log(a, i), i && o[t.itag] && (o[t.itag].url = i);
      }),
      localStorage.setItem("videoDataStr", JSON.stringify(o));
  })();
})();
//# sourceMappingURL=ytScript.js.map
