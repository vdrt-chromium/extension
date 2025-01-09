(() => {
  "use strict";
  ((e) => {
    document.head.setAttribute("VideoUrlForStory", "null"),
      document.head.setAttribute("PostUrlForStory", "null");
    const t = 2 === document.location.href.split("/reels/").length,
      r = document.querySelectorAll("video");
    let n = null;
    for (var p = r.length - 1; p >= 0; p--) {
      if (0 === r[p].offsetHeight) continue;
      var l = "";
      const e = Object.keys(r[p]);
      for (var a = 0; a < e.length; a++)
        if (-1 !== e[a].indexOf("__reactFiber")) {
          l = e[a].split("__reactFiber")[1];
          break;
        }
      if (t) {
        if (
          document.location.pathname.split("/")[2] !==
          r[p].parentElement.parentElement.parentElement.parentElement
            .parentElement.parentElement.parentElement.parentElement
            .parentElement.parentElement["__reactProps" + l].children[p].props
            .children.props.children.props.queryReference.code
        )
          continue;
      }
      try {
        const e =
          r[p].parentElement.parentElement.parentElement.parentElement
            .parentElement.parentElement.parentElement["__reactProps" + l]
            .children.props.children[0].props.children.props.children.props.post
            .displayResources.length;
        e >= 2
          ? (storyPostUrl =
              r[p].parentElement.parentElement.parentElement.parentElement
                .parentElement.parentElement.parentElement["__reactProps" + l]
                .children.props.children[0].props.children.props.children.props
                .post.displayResources[e - 2].src)
          : 1 === e &&
            (storyPostUrl =
              r[p].parentElement.parentElement.parentElement.parentElement
                .parentElement.parentElement.parentElement["__reactProps" + l]
                .children.props.children[0].props.children.props.children.props
                .post.displayResources[0].src);
      } catch (e) {}
      try {
        n =
          r[p].parentElement.parentElement.parentElement.parentElement[
            "__reactProps" + l
          ].children.props.children.props.implementations[0].data.hdSrc;
      } catch (e) {}
      if (null == n)
        try {
          n =
            r[p].parentElement.parentElement.parentElement.parentElement[
              "__reactProps" + l
            ].children[0].props.children.props.implementations[1].data.hdSrc;
        } catch (e) {}
      if (null == n)
        try {
          n =
            r[p].parentElement.parentElement.parentElement.parentElement[
              "__reactProps" + l
            ].children.props.children.props.implementations[0].data.sdSrc;
        } catch (e) {}
      if (null == n)
        try {
          n =
            r[p].parentElement.parentElement.parentElement.parentElement[
              "__reactProps" + l
            ].children[0].props.children.props.implementations[1].data.sdSrc;
        } catch (e) {}
      if (null == n)
        try {
          n =
            r[p].parentElement.parentElement.parentElement.parentElement[
              "__reactProps" + l
            ].children.props.children.props.implementations[1].data.hdSrc;
        } catch (e) {}
      if (null == n)
        try {
          n =
            r[p].parentElement.parentElement.parentElement.parentElement[
              "__reactProps" + l
            ].children.props.children.props.implementations[1].data.sdSrc;
        } catch (e) {}
      if (null == n)
        try {
          n =
            r[p]["__reactFiber" + l].return.stateNode.props.videoData.$1.hd_src;
        } catch (e) {}
      if (null == n)
        try {
          n =
            r[p]["__reactFiber" + l].return.stateNode.props.videoData.$1.sd_src;
        } catch (e) {}
      if (null != n) break;
    }
    document.head.setAttribute(
      "VideoUrlForStory",
      null !== (e = n) && void 0 !== e ? e : "",
    );
  })();
})();
//# sourceMappingURL=instagramStoryScript.js.map
