(() => {
  var e = {
      613: function (e, t) {
        var n;
        /*!
         * jQuery JavaScript Library v3.7.1
         * https://jquery.com/
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2023-08-28T13:37Z
         */ !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document",
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (r, o) {
          "use strict";
          var i = [],
            a = Object.getPrototypeOf,
            s = i.slice,
            u = i.flat
              ? function (e) {
                  return i.flat.call(e);
                }
              : function (e) {
                  return i.concat.apply([], e);
                },
            l = i.push,
            c = i.indexOf,
            f = {},
            p = f.toString,
            d = f.hasOwnProperty,
            h = d.toString,
            g = h.call(Object),
            v = {},
            y = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            m = function (e) {
              return null != e && e === e.window;
            },
            x = r.document,
            b = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
            var r,
              o,
              i = (n = n || x).createElement("script");
            if (((i.text = e), t))
              for (r in b)
                (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i);
          }
          function T(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
                ? f[p.call(e)] || "object"
                : typeof e;
          }
          var C = "3.7.1",
            k = /HTML$/i,
            S = function (e, t) {
              return new S.fn.init(e, t);
            };
          function E(e) {
            var t = !!e && "length" in e && e.length,
              n = T(e);
            return (
              !y(e) &&
              !m(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          function j(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          (S.fn = S.prototype =
            {
              jquery: C,
              constructor: S,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
                  : e < 0
                    ? this[e + this.length]
                    : this[e];
              },
              pushStack: function (e) {
                var t = S.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return S.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  S.map(this, function (t, n) {
                    return e.call(t, n, t);
                  }),
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  S.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  }),
                );
              },
              odd: function () {
                return this.pushStack(
                  S.grep(this, function (e, t) {
                    return t % 2;
                  }),
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: l,
              sort: i.sort,
              splice: i.splice,
            }),
            (S.extend = S.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  o,
                  i,
                  a = arguments[0] || {},
                  s = 1,
                  u = arguments.length,
                  l = !1;
                for (
                  "boolean" == typeof a &&
                    ((l = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || y(a) || (a = {}),
                    s === u && ((a = this), s--);
                  s < u;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (r = e[t]),
                        "__proto__" !== t &&
                          a !== r &&
                          (l &&
                          r &&
                          (S.isPlainObject(r) || (o = Array.isArray(r)))
                            ? ((n = a[t]),
                              (i =
                                o && !Array.isArray(n)
                                  ? []
                                  : o || S.isPlainObject(n)
                                    ? n
                                    : {}),
                              (o = !1),
                              (a[t] = S.extend(l, i, r)))
                            : void 0 !== r && (a[t] = r));
                return a;
              }),
            S.extend({
              expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== p.call(e)) &&
                  (!(t = a(e)) ||
                    ("function" ==
                      typeof (n = d.call(t, "constructor") && t.constructor) &&
                      h.call(n) === g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                w(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (E(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              text: function (e) {
                var t,
                  n = "",
                  r = 0,
                  o = e.nodeType;
                if (!o) for (; (t = e[r++]); ) n += S.text(t);
                return 1 === o || 11 === o
                  ? e.textContent
                  : 9 === o
                    ? e.documentElement.textContent
                    : 3 === o || 4 === o
                      ? e.nodeValue
                      : n;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (E(Object(e))
                      ? S.merge(n, "string" == typeof e ? [e] : e)
                      : l.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : c.call(t, e, n);
              },
              isXMLDoc: function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !k.test(t || (n && n.nodeName) || "HTML");
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                  e[o++] = t[r];
                return (e.length = o), e;
              },
              grep: function (e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                  !t(e[o], o) !== a && r.push(e[o]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  o,
                  i = 0,
                  a = [];
                if (E(e))
                  for (r = e.length; i < r; i++)
                    null != (o = t(e[i], i, n)) && a.push(o);
                else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                return u(a);
              },
              guid: 1,
              support: v,
            }),
            "function" == typeof Symbol &&
              (S.fn[Symbol.iterator] = i[Symbol.iterator]),
            S.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " ",
              ),
              function (e, t) {
                f["[object " + t + "]"] = t.toLowerCase();
              },
            );
          var D = i.pop,
            A = i.sort,
            N = i.splice,
            O = "[\\x20\\t\\r\\n\\f]",
            q = new RegExp(
              "^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$",
              "g",
            );
          S.contains = function (e, t) {
            var n = t && t.parentNode;
            return (
              e === n ||
              !(
                !n ||
                1 !== n.nodeType ||
                !(e.contains
                  ? e.contains(n)
                  : e.compareDocumentPosition &&
                    16 & e.compareDocumentPosition(n))
              )
            );
          };
          var L = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
          function H(e, t) {
            return t
              ? "\0" === e
                ? "�"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          }
          S.escapeSelector = function (e) {
            return (e + "").replace(L, H);
          };
          var P = x,
            R = l;
          !(function () {
            var e,
              t,
              n,
              o,
              a,
              u,
              l,
              f,
              p,
              h,
              g = R,
              y = S.expando,
              m = 0,
              x = 0,
              b = ee(),
              w = ee(),
              T = ee(),
              C = ee(),
              k = function (e, t) {
                return e === t && (a = !0), 0;
              },
              E =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              L =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                O +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              H =
                "\\[" +
                O +
                "*(" +
                L +
                ")(?:" +
                O +
                "*([*^$|!~]?=)" +
                O +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                L +
                "))|)" +
                O +
                "*\\]",
              M =
                ":(" +
                L +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                H +
                ")*)|.*)\\)|)",
              _ = new RegExp(O + "+", "g"),
              I = new RegExp("^" + O + "*," + O + "*"),
              F = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
              W = new RegExp(O + "|>"),
              $ = new RegExp(M),
              B = new RegExp("^" + L + "$"),
              U = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + M),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    O +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    O +
                    "*(?:([+-]|)" +
                    O +
                    "*(\\d+)|))" +
                    O +
                    "*\\)|)",
                  "i",
                ),
                bool: new RegExp("^(?:" + E + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    O +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    O +
                    "*((?:-\\d)?\\d*)" +
                    O +
                    "*\\)|)(?=[^-]|$)",
                  "i",
                ),
              },
              z = /^(?:input|select|textarea|button)$/i,
              X = /^h\d$/i,
              V = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              Y = /[+~]/,
              G = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + O + "?|\\\\([^\\r\\n\\f])",
                "g",
              ),
              Q = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320,
                      ))
                );
              },
              J = function () {
                ue();
              },
              K = pe(
                function (e) {
                  return !0 === e.disabled && j(e, "fieldset");
                },
                { dir: "parentNode", next: "legend" },
              );
            try {
              g.apply((i = s.call(P.childNodes)), P.childNodes),
                i[P.childNodes.length].nodeType;
            } catch (e) {
              g = {
                apply: function (e, t) {
                  R.apply(e, s.call(t));
                },
                call: function (e) {
                  R.apply(e, s.call(arguments, 1));
                },
              };
            }
            function Z(e, t, n, r) {
              var o,
                i,
                a,
                s,
                l,
                c,
                d,
                h = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
              if (
                ((n = n || []),
                "string" != typeof e || !e || (1 !== m && 9 !== m && 11 !== m))
              )
                return n;
              if (!r && (ue(t), (t = t || u), f)) {
                if (11 !== m && (l = V.exec(e)))
                  if ((o = l[1])) {
                    if (9 === m) {
                      if (!(a = t.getElementById(o))) return n;
                      if (a.id === o) return g.call(n, a), n;
                    } else if (
                      h &&
                      (a = h.getElementById(o)) &&
                      Z.contains(t, a) &&
                      a.id === o
                    )
                      return g.call(n, a), n;
                  } else {
                    if (l[2]) return g.apply(n, t.getElementsByTagName(e)), n;
                    if ((o = l[3]) && t.getElementsByClassName)
                      return g.apply(n, t.getElementsByClassName(o)), n;
                  }
                if (!(C[e + " "] || (p && p.test(e)))) {
                  if (((d = e), (h = t), 1 === m && (W.test(e) || F.test(e)))) {
                    for (
                      ((h = (Y.test(e) && se(t.parentNode)) || t) == t &&
                        v.scope) ||
                        ((s = t.getAttribute("id"))
                          ? (s = S.escapeSelector(s))
                          : t.setAttribute("id", (s = y))),
                        i = (c = ce(e)).length;
                      i--;

                    )
                      c[i] = (s ? "#" + s : ":scope") + " " + fe(c[i]);
                    d = c.join(",");
                  }
                  try {
                    return g.apply(n, h.querySelectorAll(d)), n;
                  } catch (t) {
                    C(e, !0);
                  } finally {
                    s === y && t.removeAttribute("id");
                  }
                }
              }
              return me(e.replace(q, "$1"), t, n, r);
            }
            function ee() {
              var e = [];
              return function n(r, o) {
                return (
                  e.push(r + " ") > t.cacheLength && delete n[e.shift()],
                  (n[r + " "] = o)
                );
              };
            }
            function te(e) {
              return (e[y] = !0), e;
            }
            function ne(e) {
              var t = u.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function re(e) {
              return function (t) {
                return j(t, "input") && t.type === e;
              };
            }
            function oe(e) {
              return function (t) {
                return (j(t, "input") || j(t, "button")) && t.type === e;
              };
            }
            function ie(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && K(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ae(e) {
              return te(function (t) {
                return (
                  (t = +t),
                  te(function (n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; )
                      n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                  })
                );
              });
            }
            function se(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            function ue(e) {
              var n,
                r = e ? e.ownerDocument || e : P;
              return r != u && 9 === r.nodeType && r.documentElement
                ? ((l = (u = r).documentElement),
                  (f = !S.isXMLDoc(u)),
                  (h =
                    l.matches ||
                    l.webkitMatchesSelector ||
                    l.msMatchesSelector),
                  l.msMatchesSelector &&
                    P != u &&
                    (n = u.defaultView) &&
                    n.top !== n &&
                    n.addEventListener("unload", J),
                  (v.getById = ne(function (e) {
                    return (
                      (l.appendChild(e).id = S.expando),
                      !u.getElementsByName ||
                        !u.getElementsByName(S.expando).length
                    );
                  })),
                  (v.disconnectedMatch = ne(function (e) {
                    return h.call(e, "*");
                  })),
                  (v.scope = ne(function () {
                    return u.querySelectorAll(":scope");
                  })),
                  (v.cssHas = ne(function () {
                    try {
                      return u.querySelector(":has(*,:jqfake)"), !1;
                    } catch (e) {
                      return !0;
                    }
                  })),
                  v.getById
                    ? ((t.filter.ID = function (e) {
                        var t = e.replace(G, Q);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (t.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && f) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((t.filter.ID = function (e) {
                        var t = e.replace(G, Q);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (t.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && f) {
                          var n,
                            r,
                            o,
                            i = t.getElementById(e);
                          if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                              return [i];
                            for (
                              o = t.getElementsByName(e), r = 0;
                              (i = o[r++]);

                            )
                              if (
                                (n = i.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [i];
                          }
                          return [];
                        }
                      })),
                  (t.find.TAG = function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : t.querySelectorAll(e);
                  }),
                  (t.find.CLASS = function (e, t) {
                    if (void 0 !== t.getElementsByClassName && f)
                      return t.getElementsByClassName(e);
                  }),
                  (p = []),
                  ne(function (e) {
                    var t;
                    (l.appendChild(e).innerHTML =
                      "<a id='" +
                      y +
                      "' href='' disabled='disabled'></a><select id='" +
                      y +
                      "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                      e.querySelectorAll("[selected]").length ||
                        p.push("\\[" + O + "*(?:value|" + E + ")"),
                      e.querySelectorAll("[id~=" + y + "-]").length ||
                        p.push("~="),
                      e.querySelectorAll("a#" + y + "+*").length ||
                        p.push(".#.+[+~]"),
                      e.querySelectorAll(":checked").length ||
                        p.push(":checked"),
                      (t = u.createElement("input")).setAttribute(
                        "type",
                        "hidden",
                      ),
                      e.appendChild(t).setAttribute("name", "D"),
                      (l.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        p.push(":enabled", ":disabled"),
                      (t = u.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length ||
                        p.push(
                          "\\[" + O + "*name" + O + "*=" + O + "*(?:''|\"\")",
                        );
                  }),
                  v.cssHas || p.push(":has"),
                  (p = p.length && new RegExp(p.join("|"))),
                  (k = function (e, t) {
                    if (e === t) return (a = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (e.ownerDocument || e) == (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!v.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === u || (e.ownerDocument == P && Z.contains(P, e))
                          ? -1
                          : t === u ||
                              (t.ownerDocument == P && Z.contains(P, t))
                            ? 1
                            : o
                              ? c.call(o, e) - c.call(o, t)
                              : 0
                        : 4 & n
                          ? -1
                          : 1)
                    );
                  }),
                  u)
                : u;
            }
            for (e in ((Z.matches = function (e, t) {
              return Z(e, null, null, t);
            }),
            (Z.matchesSelector = function (e, t) {
              if ((ue(e), f && !C[t + " "] && (!p || !p.test(t))))
                try {
                  var n = h.call(e, t);
                  if (
                    n ||
                    v.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return n;
                } catch (e) {
                  C(t, !0);
                }
              return Z(t, u, null, [e]).length > 0;
            }),
            (Z.contains = function (e, t) {
              return (e.ownerDocument || e) != u && ue(e), S.contains(e, t);
            }),
            (Z.attr = function (e, n) {
              (e.ownerDocument || e) != u && ue(e);
              var r = t.attrHandle[n.toLowerCase()],
                o =
                  r && d.call(t.attrHandle, n.toLowerCase())
                    ? r(e, n, !f)
                    : void 0;
              return void 0 !== o ? o : e.getAttribute(n);
            }),
            (Z.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (S.uniqueSort = function (e) {
              var t,
                n = [],
                r = 0,
                i = 0;
              if (
                ((a = !v.sortStable),
                (o = !v.sortStable && s.call(e, 0)),
                A.call(e, k),
                a)
              ) {
                for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
                for (; r--; ) N.call(e, n[r], 1);
              }
              return (o = null), e;
            }),
            (S.fn.uniqueSort = function () {
              return this.pushStack(S.uniqueSort(s.apply(this)));
            }),
            (t = S.expr =
              {
                cacheLength: 50,
                createPseudo: te,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(G, Q)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(G, Q)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || Z.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && Z.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return U.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            $.test(n) &&
                            (t = ce(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(G, Q).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return j(e, t);
                        };
                  },
                  CLASS: function (e) {
                    var t = b[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + O + ")" + e + "(" + O + "|$)",
                      )) &&
                        b(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              "",
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var o = Z.attr(r, e);
                      return null == o
                        ? "!=" === t
                        : !t ||
                            ((o += ""),
                            "=" === t
                              ? o === n
                              : "!=" === t
                                ? o !== n
                                : "^=" === t
                                  ? n && 0 === o.indexOf(n)
                                  : "*=" === t
                                    ? n && o.indexOf(n) > -1
                                    : "$=" === t
                                      ? n && o.slice(-n.length) === n
                                      : "~=" === t
                                        ? (
                                            " " +
                                            o.replace(_, " ") +
                                            " "
                                          ).indexOf(n) > -1
                                        : "|=" === t &&
                                          (o === n ||
                                            o.slice(0, n.length + 1) ===
                                              n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === r && 0 === o
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, u) {
                          var l,
                            c,
                            f,
                            p,
                            d,
                            h = i !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            x = !u && !s,
                            b = !1;
                          if (g) {
                            if (i) {
                              for (; h; ) {
                                for (f = t; (f = f[h]); )
                                  if (s ? j(f, v) : 1 === f.nodeType) return !1;
                                d = h = "only" === e && !d && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((d = [a ? g.firstChild : g.lastChild]), a && x)
                            ) {
                              for (
                                b =
                                  (p =
                                    (l =
                                      (c = g[y] || (g[y] = {}))[e] || [])[0] ===
                                      m && l[1]) && l[2],
                                  f = p && g.childNodes[p];
                                (f =
                                  (++p && f && f[h]) || (b = p = 0) || d.pop());

                              )
                                if (1 === f.nodeType && ++b && f === t) {
                                  c[e] = [m, p, b];
                                  break;
                                }
                            } else if (
                              (x &&
                                (b = p =
                                  (l =
                                    (c = t[y] || (t[y] = {}))[e] || [])[0] ===
                                    m && l[1]),
                              !1 === b)
                            )
                              for (
                                ;
                                (f =
                                  (++p && f && f[h]) ||
                                  (b = p = 0) ||
                                  d.pop()) &&
                                (!(s ? j(f, v) : 1 === f.nodeType) ||
                                  !++b ||
                                  (x && ((c = f[y] || (f[y] = {}))[e] = [m, b]),
                                  f !== t));

                              );
                            return (b -= o) === r || (b % r == 0 && b / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, n) {
                    var r,
                      o =
                        t.pseudos[e] ||
                        t.setFilters[e.toLowerCase()] ||
                        Z.error("unsupported pseudo: " + e);
                    return o[y]
                      ? o(n)
                      : o.length > 1
                        ? ((r = [e, e, "", n]),
                          t.setFilters.hasOwnProperty(e.toLowerCase())
                            ? te(function (e, t) {
                                for (var r, i = o(e, n), a = i.length; a--; )
                                  e[(r = c.call(e, i[a]))] = !(t[r] = i[a]);
                              })
                            : function (e) {
                                return o(e, 0, r);
                              })
                        : o;
                  },
                },
                pseudos: {
                  not: te(function (e) {
                    var t = [],
                      n = [],
                      r = ye(e.replace(q, "$1"));
                    return r[y]
                      ? te(function (e, t, n, o) {
                          for (
                            var i, a = r(e, null, o, []), s = e.length;
                            s--;

                          )
                            (i = a[s]) && (e[s] = !(t[s] = i));
                        })
                      : function (e, o, i) {
                          return (
                            (t[0] = e),
                            r(t, null, i, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: te(function (e) {
                    return function (t) {
                      return Z(e, t).length > 0;
                    };
                  }),
                  contains: te(function (e) {
                    return (
                      (e = e.replace(G, Q)),
                      function (t) {
                        return (t.textContent || S.text(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: te(function (e) {
                    return (
                      B.test(e || "") || Z.error("unsupported lang: " + e),
                      (e = e.replace(G, Q).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = f
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (e) {
                    var t = r.location && r.location.hash;
                    return t && t.slice(1) === e.id;
                  },
                  root: function (e) {
                    return e === l;
                  },
                  focus: function (e) {
                    return (
                      e ===
                        (function () {
                          try {
                            return u.activeElement;
                          } catch (e) {}
                        })() &&
                      u.hasFocus() &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ie(!1),
                  disabled: ie(!0),
                  checked: function (e) {
                    return (
                      (j(e, "input") && !!e.checked) ||
                      (j(e, "option") && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !t.pseudos.empty(e);
                  },
                  header: function (e) {
                    return X.test(e.nodeName);
                  },
                  input: function (e) {
                    return z.test(e.nodeName);
                  },
                  button: function (e) {
                    return (
                      (j(e, "input") && "button" === e.type) || j(e, "button")
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      j(e, "input") &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ae(function () {
                    return [0];
                  }),
                  last: ae(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ae(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ae(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ae(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ae(function (e, t, n) {
                    var r;
                    for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                    return e;
                  }),
                  gt: ae(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }),
            (t.pseudos.nth = t.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              t.pseudos[e] = re(e);
            for (e in { submit: !0, reset: !0 }) t.pseudos[e] = oe(e);
            function le() {}
            function ce(e, n) {
              var r,
                o,
                i,
                a,
                s,
                u,
                l,
                c = w[e + " "];
              if (c) return n ? 0 : c.slice(0);
              for (s = e, u = [], l = t.preFilter; s; ) {
                for (a in ((r && !(o = I.exec(s))) ||
                  (o && (s = s.slice(o[0].length) || s), u.push((i = []))),
                (r = !1),
                (o = F.exec(s)) &&
                  ((r = o.shift()),
                  i.push({ value: r, type: o[0].replace(q, " ") }),
                  (s = s.slice(r.length))),
                t.filter))
                  !(o = U[a].exec(s)) ||
                    (l[a] && !(o = l[a](o))) ||
                    ((r = o.shift()),
                    i.push({ value: r, type: a, matches: o }),
                    (s = s.slice(r.length)));
                if (!r) break;
              }
              return n ? s.length : s ? Z.error(e) : w(e, u).slice(0);
            }
            function fe(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function pe(e, t, n) {
              var r = t.dir,
                o = t.next,
                i = o || r,
                a = n && "parentNode" === i,
                s = x++;
              return t.first
                ? function (t, n, o) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, o);
                    return !1;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f = [m, s];
                    if (u) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (((c = t[y] || (t[y] = {})), o && j(t, o)))
                            t = t[r] || t;
                          else {
                            if ((l = c[i]) && l[0] === m && l[1] === s)
                              return (f[2] = l[2]);
                            if (((c[i] = f), (f[2] = e(t, n, u)))) return !0;
                          }
                    return !1;
                  };
            }
            function de(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function he(e, t, n, r, o) {
              for (
                var i, a = [], s = 0, u = e.length, l = null != t;
                s < u;
                s++
              )
                (i = e[s]) &&
                  ((n && !n(i, r, o)) || (a.push(i), l && t.push(s)));
              return a;
            }
            function ge(e, t, n, r, o, i) {
              return (
                r && !r[y] && (r = ge(r)),
                o && !o[y] && (o = ge(o, i)),
                te(function (i, a, s, u) {
                  var l,
                    f,
                    p,
                    d,
                    h = [],
                    v = [],
                    y = a.length,
                    m =
                      i ||
                      (function (e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++) Z(e, t[r], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    x = !e || (!i && t) ? m : he(m, h, e, s, u);
                  if (
                    (n
                      ? n(x, (d = o || (i ? e : y || r) ? [] : a), s, u)
                      : (d = x),
                    r)
                  )
                    for (l = he(d, v), r(l, [], s, u), f = l.length; f--; )
                      (p = l[f]) && (d[v[f]] = !(x[v[f]] = p));
                  if (i) {
                    if (o || e) {
                      if (o) {
                        for (l = [], f = d.length; f--; )
                          (p = d[f]) && l.push((x[f] = p));
                        o(null, (d = []), l, u);
                      }
                      for (f = d.length; f--; )
                        (p = d[f]) &&
                          (l = o ? c.call(i, p) : h[f]) > -1 &&
                          (i[l] = !(a[l] = p));
                    }
                  } else
                    (d = he(d === a ? d.splice(y, d.length) : d)),
                      o ? o(null, a, d, u) : g.apply(a, d);
                })
              );
            }
            function ve(e) {
              for (
                var r,
                  o,
                  i,
                  a = e.length,
                  s = t.relative[e[0].type],
                  u = s || t.relative[" "],
                  l = s ? 1 : 0,
                  f = pe(
                    function (e) {
                      return e === r;
                    },
                    u,
                    !0,
                  ),
                  p = pe(
                    function (e) {
                      return c.call(r, e) > -1;
                    },
                    u,
                    !0,
                  ),
                  d = [
                    function (e, t, o) {
                      var i =
                        (!s && (o || t != n)) ||
                        ((r = t).nodeType ? f(e, t, o) : p(e, t, o));
                      return (r = null), i;
                    },
                  ];
                l < a;
                l++
              )
                if ((o = t.relative[e[l].type])) d = [pe(de(d), o)];
                else {
                  if ((o = t.filter[e[l].type].apply(null, e[l].matches))[y]) {
                    for (i = ++l; i < a && !t.relative[e[i].type]; i++);
                    return ge(
                      l > 1 && de(d),
                      l > 1 &&
                        fe(
                          e
                            .slice(0, l - 1)
                            .concat({
                              value: " " === e[l - 2].type ? "*" : "",
                            }),
                        ).replace(q, "$1"),
                      o,
                      l < i && ve(e.slice(l, i)),
                      i < a && ve((e = e.slice(i))),
                      i < a && fe(e),
                    );
                  }
                  d.push(o);
                }
              return de(d);
            }
            function ye(e, r) {
              var o,
                i = [],
                a = [],
                s = T[e + " "];
              if (!s) {
                for (r || (r = ce(e)), o = r.length; o--; )
                  (s = ve(r[o]))[y] ? i.push(s) : a.push(s);
                (s = T(
                  e,
                  (function (e, r) {
                    var o = r.length > 0,
                      i = e.length > 0,
                      a = function (a, s, l, c, p) {
                        var d,
                          h,
                          v,
                          y = 0,
                          x = "0",
                          b = a && [],
                          w = [],
                          T = n,
                          C = a || (i && t.find.TAG("*", p)),
                          k = (m += null == T ? 1 : Math.random() || 0.1),
                          E = C.length;
                        for (
                          p && (n = s == u || s || p);
                          x !== E && null != (d = C[x]);
                          x++
                        ) {
                          if (i && d) {
                            for (
                              h = 0,
                                s || d.ownerDocument == u || (ue(d), (l = !f));
                              (v = e[h++]);

                            )
                              if (v(d, s || u, l)) {
                                g.call(c, d);
                                break;
                              }
                            p && (m = k);
                          }
                          o && ((d = !v && d) && y--, a && b.push(d));
                        }
                        if (((y += x), o && x !== y)) {
                          for (h = 0; (v = r[h++]); ) v(b, w, s, l);
                          if (a) {
                            if (y > 0)
                              for (; x--; ) b[x] || w[x] || (w[x] = D.call(c));
                            w = he(w);
                          }
                          g.apply(c, w),
                            p &&
                              !a &&
                              w.length > 0 &&
                              y + r.length > 1 &&
                              S.uniqueSort(c);
                        }
                        return p && ((m = k), (n = T)), b;
                      };
                    return o ? te(a) : a;
                  })(a, i),
                )),
                  (s.selector = e);
              }
              return s;
            }
            function me(e, n, r, o) {
              var i,
                a,
                s,
                u,
                l,
                c = "function" == typeof e && e,
                p = !o && ce((e = c.selector || e));
              if (((r = r || []), 1 === p.length)) {
                if (
                  (a = p[0] = p[0].slice(0)).length > 2 &&
                  "ID" === (s = a[0]).type &&
                  9 === n.nodeType &&
                  f &&
                  t.relative[a[1].type]
                ) {
                  if (
                    !(n = (t.find.ID(s.matches[0].replace(G, Q), n) || [])[0])
                  )
                    return r;
                  c && (n = n.parentNode),
                    (e = e.slice(a.shift().value.length));
                }
                for (
                  i = U.needsContext.test(e) ? 0 : a.length;
                  i-- && ((s = a[i]), !t.relative[(u = s.type)]);

                )
                  if (
                    (l = t.find[u]) &&
                    (o = l(
                      s.matches[0].replace(G, Q),
                      (Y.test(a[0].type) && se(n.parentNode)) || n,
                    ))
                  ) {
                    if ((a.splice(i, 1), !(e = o.length && fe(a))))
                      return g.apply(r, o), r;
                    break;
                  }
              }
              return (
                (c || ye(e, p))(
                  o,
                  n,
                  !f,
                  r,
                  !n || (Y.test(e) && se(n.parentNode)) || n,
                ),
                r
              );
            }
            (le.prototype = t.filters = t.pseudos),
              (t.setFilters = new le()),
              (v.sortStable = y.split("").sort(k).join("") === y),
              ue(),
              (v.sortDetached = ne(function (e) {
                return (
                  1 & e.compareDocumentPosition(u.createElement("fieldset"))
                );
              })),
              (S.find = Z),
              (S.expr[":"] = S.expr.pseudos),
              (S.unique = S.uniqueSort),
              (Z.compile = ye),
              (Z.select = me),
              (Z.setDocument = ue),
              (Z.tokenize = ce),
              (Z.escape = S.escapeSelector),
              (Z.getText = S.text),
              (Z.isXML = S.isXMLDoc),
              (Z.selectors = S.expr),
              (Z.support = S.support),
              (Z.uniqueSort = S.uniqueSort);
          })();
          var M = function (e, t, n) {
              for (
                var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (o && S(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            _ = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            I = S.expr.match.needsContext,
            F =
              /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function W(e, t, n) {
            return y(t)
              ? S.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
                ? S.grep(e, function (e) {
                    return (e === t) !== n;
                  })
                : "string" != typeof t
                  ? S.grep(e, function (e) {
                      return c.call(t, e) > -1 !== n;
                    })
                  : S.filter(t, e, n);
          }
          (S.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? S.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : S.find.matches(
                    e,
                    S.grep(t, function (e) {
                      return 1 === e.nodeType;
                    }),
                  )
            );
          }),
            S.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  o = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    S(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (S.contains(o[t], this)) return !0;
                    }),
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  S.find(e, o[t], n);
                return r > 1 ? S.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(W(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(W(this, e || [], !0));
              },
              is: function (e) {
                return !!W(
                  this,
                  "string" == typeof e && I.test(e) ? S(e) : e || [],
                  !1,
                ).length;
              },
            });
          var $,
            B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((S.fn.init = function (e, t, n) {
            var r, o;
            if (!e) return this;
            if (((n = n || $), "string" == typeof e)) {
              if (
                !(r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : B.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof S ? t[0] : t),
                  S.merge(
                    this,
                    S.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : x,
                      !0,
                    ),
                  ),
                  F.test(r[1]) && S.isPlainObject(t))
                )
                  for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (o = x.getElementById(r[2])) &&
                  ((this[0] = o), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : y(e)
                ? void 0 !== n.ready
                  ? n.ready(e)
                  : e(S)
                : S.makeArray(e, this);
          }).prototype = S.fn),
            ($ = S(x));
          var U = /^(?:parents|prev(?:Until|All))/,
            z = { children: !0, contents: !0, next: !0, prev: !0 };
          function X(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          S.fn.extend({
            has: function (e) {
              var t = S(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (S.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && S(e);
              if (!I.test(e))
                for (; r < o; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && S.find.matchesSelector(n, e))
                    ) {
                      i.push(n);
                      break;
                    }
              return this.pushStack(i.length > 1 ? S.uniqueSort(i) : i);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? c.call(S(e), this[0])
                  : c.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                  ? this.first().prevAll().length
                  : -1;
            },
            add: function (e, t) {
              return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e),
              );
            },
          }),
            S.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return M(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return M(e, "parentNode", n);
                },
                next: function (e) {
                  return X(e, "nextSibling");
                },
                prev: function (e) {
                  return X(e, "previousSibling");
                },
                nextAll: function (e) {
                  return M(e, "nextSibling");
                },
                prevAll: function (e) {
                  return M(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return M(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return M(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return _((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return _(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (j(e, "template") && (e = e.content || e),
                      S.merge([], e.childNodes));
                },
              },
              function (e, t) {
                S.fn[e] = function (n, r) {
                  var o = S.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (o = S.filter(r, o)),
                    this.length > 1 &&
                      (z[e] || S.uniqueSort(o), U.test(e) && o.reverse()),
                    this.pushStack(o)
                  );
                };
              },
            );
          var V = /[^\x20\t\r\n\f]+/g;
          function Y(e) {
            return e;
          }
          function G(e) {
            throw e;
          }
          function Q(e, t, n, r) {
            var o;
            try {
              e && y((o = e.promise))
                ? o.call(e).done(t).fail(n)
                : e && y((o = e.then))
                  ? o.call(e, t, n)
                  : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (S.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      S.each(e.match(V) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : S.extend({}, e);
            var t,
              n,
              r,
              o,
              i = [],
              a = [],
              s = -1,
              u = function () {
                for (o = o || e.once, r = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < i.length; )
                    !1 === i[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = i.length), (n = !1));
                e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
              },
              l = {
                add: function () {
                  return (
                    i &&
                      (n && !t && ((s = i.length - 1), a.push(n)),
                      (function t(n) {
                        S.each(n, function (n, r) {
                          y(r)
                            ? (e.unique && l.has(r)) || i.push(r)
                            : r && r.length && "string" !== T(r) && t(r);
                        });
                      })(arguments),
                      n && !t && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    S.each(arguments, function (e, t) {
                      for (var n; (n = S.inArray(t, i, n)) > -1; )
                        i.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? S.inArray(e, i) > -1 : i.length > 0;
                },
                empty: function () {
                  return i && (i = []), this;
                },
                disable: function () {
                  return (o = a = []), (i = n = ""), this;
                },
                disabled: function () {
                  return !i;
                },
                lock: function () {
                  return (o = a = []), n || t || (i = n = ""), this;
                },
                locked: function () {
                  return !!o;
                },
                fireWith: function (e, n) {
                  return (
                    o ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || u()),
                    this
                  );
                },
                fire: function () {
                  return l.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return l;
          }),
            S.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      S.Callbacks("memory"),
                      S.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      S.Callbacks("once memory"),
                      S.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      S.Callbacks("once memory"),
                      S.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  o = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return i.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return o.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return S.Deferred(function (n) {
                        S.each(t, function (t, r) {
                          var o = y(e[r[4]]) && e[r[4]];
                          i[r[1]](function () {
                            var e = o && o.apply(this, arguments);
                            e && y(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, o ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, o) {
                      var i = 0;
                      function a(e, t, n, o) {
                        return function () {
                          var s = this,
                            u = arguments,
                            l = function () {
                              var r, l;
                              if (!(e < i)) {
                                if ((r = n.apply(s, u)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution",
                                  );
                                (l =
                                  r &&
                                  ("object" == typeof r ||
                                    "function" == typeof r) &&
                                  r.then),
                                  y(l)
                                    ? o
                                      ? l.call(r, a(i, t, Y, o), a(i, t, G, o))
                                      : (i++,
                                        l.call(
                                          r,
                                          a(i, t, Y, o),
                                          a(i, t, G, o),
                                          a(i, t, Y, t.notifyWith),
                                        ))
                                    : (n !== Y && ((s = void 0), (u = [r])),
                                      (o || t.resolveWith)(s, u));
                              }
                            },
                            c = o
                              ? l
                              : function () {
                                  try {
                                    l();
                                  } catch (r) {
                                    S.Deferred.exceptionHook &&
                                      S.Deferred.exceptionHook(r, c.error),
                                      e + 1 >= i &&
                                        (n !== G && ((s = void 0), (u = [r])),
                                        t.rejectWith(s, u));
                                  }
                                };
                          e
                            ? c()
                            : (S.Deferred.getErrorHook
                                ? (c.error = S.Deferred.getErrorHook())
                                : S.Deferred.getStackHook &&
                                  (c.error = S.Deferred.getStackHook()),
                              r.setTimeout(c));
                        };
                      }
                      return S.Deferred(function (r) {
                        t[0][3].add(a(0, r, y(o) ? o : Y, r.notifyWith)),
                          t[1][3].add(a(0, r, y(e) ? e : Y)),
                          t[2][3].add(a(0, r, y(n) ? n : G));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? S.extend(e, o) : o;
                    },
                  },
                  i = {};
                return (
                  S.each(t, function (e, r) {
                    var a = r[2],
                      s = r[5];
                    (o[r[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock,
                        ),
                      a.add(r[3].fire),
                      (i[r[0]] = function () {
                        return (
                          i[r[0] + "With"](
                            this === i ? void 0 : this,
                            arguments,
                          ),
                          this
                        );
                      }),
                      (i[r[0] + "With"] = a.fireWith);
                  }),
                  o.promise(i),
                  e && e.call(i, i),
                  i
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  o = s.call(arguments),
                  i = S.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (o[e] = arguments.length > 1 ? s.call(arguments) : n),
                        --t || i.resolveWith(r, o);
                    };
                  };
                if (
                  t <= 1 &&
                  (Q(e, i.done(a(n)).resolve, i.reject, !t),
                  "pending" === i.state() || y(o[n] && o[n].then))
                )
                  return i.then();
                for (; n--; ) Q(o[n], a(n), i.reject);
                return i.promise();
              },
            });
          var J = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (S.Deferred.exceptionHook = function (e, t) {
            r.console &&
              r.console.warn &&
              e &&
              J.test(e.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t,
              );
          }),
            (S.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var K = S.Deferred();
          function Z() {
            x.removeEventListener("DOMContentLoaded", Z),
              r.removeEventListener("load", Z),
              S.ready();
          }
          (S.fn.ready = function (e) {
            return (
              K.then(e).catch(function (e) {
                S.readyException(e);
              }),
              this
            );
          }),
            S.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) ||
                  ((S.isReady = !0),
                  (!0 !== e && --S.readyWait > 0) || K.resolveWith(x, [S]));
              },
            }),
            (S.ready.then = K.then),
            "complete" === x.readyState ||
            ("loading" !== x.readyState && !x.documentElement.doScroll)
              ? r.setTimeout(S.ready)
              : (x.addEventListener("DOMContentLoaded", Z),
                r.addEventListener("load", Z));
          var ee = function (e, t, n, r, o, i, a) {
              var s = 0,
                u = e.length,
                l = null == n;
              if ("object" === T(n))
                for (s in ((o = !0), n)) ee(e, t, s, n[s], !0, i, a);
              else if (
                void 0 !== r &&
                ((o = !0),
                y(r) || (a = !0),
                l &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((l = t),
                      (t = function (e, t, n) {
                        return l.call(S(e), n);
                      }))),
                t)
              )
                for (; s < u; s++)
                  t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
            },
            te = /^-ms-/,
            ne = /-([a-z])/g;
          function re(e, t) {
            return t.toUpperCase();
          }
          function oe(e) {
            return e.replace(te, "ms-").replace(ne, re);
          }
          var ie = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function ae() {
            this.expando = S.expando + ae.uid++;
          }
          (ae.uid = 1),
            (ae.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    ie(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  o = this.cache(e);
                if ("string" == typeof t) o[oe(t)] = n;
                else for (r in t) o[oe(r)] = t[r];
                return o;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][oe(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(oe)
                      : (t = oe(t)) in r
                        ? [t]
                        : t.match(V) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || S.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t);
              },
            });
          var se = new ae(),
            ue = new ae(),
            le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ce = /[A-Z]/g;
          function fe(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(ce, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                            ? +e
                            : le.test(e)
                              ? JSON.parse(e)
                              : e))
                    );
                  })(n);
                } catch (e) {}
                ue.set(e, t, n);
              } else n = void 0;
            return n;
          }
          S.extend({
            hasData: function (e) {
              return ue.hasData(e) || se.hasData(e);
            },
            data: function (e, t, n) {
              return ue.access(e, t, n);
            },
            removeData: function (e, t) {
              ue.remove(e, t);
            },
            _data: function (e, t, n) {
              return se.access(e, t, n);
            },
            _removeData: function (e, t) {
              se.remove(e, t);
            },
          }),
            S.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  o,
                  i = this[0],
                  a = i && i.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((o = ue.get(i)),
                    1 === i.nodeType && !se.get(i, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf("data-") &&
                        ((r = oe(r.slice(5))), fe(i, r, o[r]));
                    se.set(i, "hasDataAttrs", !0);
                  }
                  return o;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      ue.set(this, e);
                    })
                  : ee(
                      this,
                      function (t) {
                        var n;
                        if (i && void 0 === t)
                          return void 0 !== (n = ue.get(i, e)) ||
                            void 0 !== (n = fe(i, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          ue.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0,
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  ue.remove(this, e);
                });
              },
            }),
            S.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = se.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = se.access(e, t, S.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = S.queue(e, t),
                  r = n.length,
                  o = n.shift(),
                  i = S._queueHooks(e, t);
                "inprogress" === o && ((o = n.shift()), r--),
                  o &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete i.stop,
                    o.call(
                      e,
                      function () {
                        S.dequeue(e, t);
                      },
                      i,
                    )),
                  !r && i && i.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  se.get(e, n) ||
                  se.access(e, n, {
                    empty: S.Callbacks("once memory").add(function () {
                      se.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            S.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? S.queue(this[0], e)
                    : void 0 === t
                      ? this
                      : this.each(function () {
                          var n = S.queue(this, e, t);
                          S._queueHooks(this, e),
                            "fx" === e &&
                              "inprogress" !== n[0] &&
                              S.dequeue(this, e);
                        })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  S.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  o = S.Deferred(),
                  i = this,
                  a = this.length,
                  s = function () {
                    --r || o.resolveWith(i, [i]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = se.get(i[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), o.promise(t);
              },
            });
          var pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            de = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"),
            he = ["Top", "Right", "Bottom", "Left"],
            ge = x.documentElement,
            ve = function (e) {
              return S.contains(e.ownerDocument, e);
            },
            ye = { composed: !0 };
          ge.getRootNode &&
            (ve = function (e) {
              return (
                S.contains(e.ownerDocument, e) ||
                e.getRootNode(ye) === e.ownerDocument
              );
            });
          var me = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ve(e) &&
                "none" === S.css(e, "display"))
            );
          };
          function xe(e, t, n, r) {
            var o,
              i,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return S.css(e, t, "");
                  },
              u = s(),
              l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (S.cssNumber[t] || ("px" !== l && +u)) &&
                de.exec(S.css(e, t));
            if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; a--; )
                S.style(e, t, c + l),
                  (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0),
                  (c /= i);
              (c *= 2), S.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = o))),
              o
            );
          }
          var be = {};
          function we(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              o = be[r];
            return (
              o ||
              ((t = n.body.appendChild(n.createElement(r))),
              (o = S.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === o && (o = "block"),
              (be[r] = o),
              o)
            );
          }
          function Te(e, t) {
            for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
              (r = e[i]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((o[i] = se.get(r, "display") || null),
                      o[i] || (r.style.display = "")),
                    "" === r.style.display && me(r) && (o[i] = we(r)))
                  : "none" !== n && ((o[i] = "none"), se.set(r, "display", n)));
            for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
            return e;
          }
          S.fn.extend({
            show: function () {
              return Te(this, !0);
            },
            hide: function () {
              return Te(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    me(this) ? S(this).show() : S(this).hide();
                  });
            },
          });
          var Ce,
            ke,
            Se = /^(?:checkbox|radio)$/i,
            Ee = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            je = /^$|^module$|\/(?:java|ecma)script/i;
          (Ce = x.createDocumentFragment().appendChild(x.createElement("div"))),
            (ke = x.createElement("input")).setAttribute("type", "radio"),
            ke.setAttribute("checked", "checked"),
            ke.setAttribute("name", "t"),
            Ce.appendChild(ke),
            (v.checkClone = Ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (Ce.innerHTML = "<textarea>x</textarea>"),
            (v.noCloneChecked = !!Ce.cloneNode(!0).lastChild.defaultValue),
            (Ce.innerHTML = "<option></option>"),
            (v.option = !!Ce.lastChild);
          var De = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function Ae(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                    ? e.querySelectorAll(t || "*")
                    : []),
              void 0 === t || (t && j(e, t)) ? S.merge([e], n) : n
            );
          }
          function Ne(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              se.set(e[n], "globalEval", !t || se.get(t[n], "globalEval"));
          }
          (De.tbody = De.tfoot = De.colgroup = De.caption = De.thead),
            (De.th = De.td),
            v.option ||
              (De.optgroup = De.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Oe = /<|&#?\w+;/;
          function qe(e, t, n, r, o) {
            for (
              var i,
                a,
                s,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
              d < h;
              d++
            )
              if ((i = e[d]) || 0 === i)
                if ("object" === T(i)) S.merge(p, i.nodeType ? [i] : i);
                else if (Oe.test(i)) {
                  for (
                    a = a || f.appendChild(t.createElement("div")),
                      s = (Ee.exec(i) || ["", ""])[1].toLowerCase(),
                      u = De[s] || De._default,
                      a.innerHTML = u[1] + S.htmlPrefilter(i) + u[2],
                      c = u[0];
                    c--;

                  )
                    a = a.lastChild;
                  S.merge(p, a.childNodes),
                    ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(i));
            for (f.textContent = "", d = 0; (i = p[d++]); )
              if (r && S.inArray(i, r) > -1) o && o.push(i);
              else if (
                ((l = ve(i)),
                (a = Ae(f.appendChild(i), "script")),
                l && Ne(a),
                n)
              )
                for (c = 0; (i = a[c++]); ) je.test(i.type || "") && n.push(i);
            return f;
          }
          var Le = /^([^.]*)(?:\.(.+)|)/;
          function He() {
            return !0;
          }
          function Pe() {
            return !1;
          }
          function Re(e, t, n, r, o, i) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                Re(e, s, n, r, t[s], i);
              return e;
            }
            if (
              (null == r && null == o
                ? ((o = n), (r = n = void 0))
                : null == o &&
                  ("string" == typeof n
                    ? ((o = r), (r = void 0))
                    : ((o = r), (r = n), (n = void 0))),
              !1 === o)
            )
              o = Pe;
            else if (!o) return e;
            return (
              1 === i &&
                ((a = o),
                (o = function (e) {
                  return S().off(e), a.apply(this, arguments);
                }),
                (o.guid = a.guid || (a.guid = S.guid++))),
              e.each(function () {
                S.event.add(this, t, o, r, n);
              })
            );
          }
          function Me(e, t, n) {
            n
              ? (se.set(e, t, !1),
                S.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var n,
                      r = se.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (r)
                        (S.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((r = s.call(arguments)),
                        se.set(this, t, r),
                        this[t](),
                        (n = se.get(this, t)),
                        se.set(this, t, !1),
                        r !== n)
                      )
                        return (
                          e.stopImmediatePropagation(), e.preventDefault(), n
                        );
                    } else
                      r &&
                        (se.set(
                          this,
                          t,
                          S.event.trigger(r[0], r.slice(1), this),
                        ),
                        e.stopPropagation(),
                        (e.isImmediatePropagationStopped = He));
                  },
                }))
              : void 0 === se.get(e, t) && S.event.add(e, t, He);
          }
          (S.event = {
            global: {},
            add: function (e, t, n, r, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = se.get(e);
              if (ie(e))
                for (
                  n.handler && ((n = (i = n).handler), (o = i.selector)),
                    o && S.find.matchesSelector(ge, o),
                    n.guid || (n.guid = S.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (a = v.handle) ||
                      (a = v.handle =
                        function (t) {
                          return void 0 !== S && S.event.triggered !== t.type
                            ? S.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    l = (t = (t || "").match(V) || [""]).length;
                  l--;

                )
                  (d = g = (s = Le.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d &&
                      ((f = S.event.special[d] || {}),
                      (d = (o ? f.delegateType : f.bindType) || d),
                      (f = S.event.special[d] || {}),
                      (c = S.extend(
                        {
                          type: d,
                          origType: g,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: o,
                          needsContext: o && S.expr.match.needsContext.test(o),
                          namespace: h.join("."),
                        },
                        i,
                      )),
                      (p = u[d]) ||
                        (((p = u[d] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                          (e.addEventListener && e.addEventListener(d, a))),
                      f.add &&
                        (f.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      o ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                      (S.event.global[d] = !0));
            },
            remove: function (e, t, n, r, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = se.hasData(e) && se.get(e);
              if (v && (u = v.events)) {
                for (l = (t = (t || "").match(V) || [""]).length; l--; )
                  if (
                    ((d = g = (s = Le.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d)
                  ) {
                    for (
                      f = S.event.special[d] || {},
                        p =
                          u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)",
                          ),
                        a = i = p.length;
                      i--;

                    )
                      (c = p[i]),
                        (!o && g !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (s && !s.test(c.namespace)) ||
                          (r &&
                            r !== c.selector &&
                            ("**" !== r || !c.selector)) ||
                          (p.splice(i, 1),
                          c.selector && p.delegateCount--,
                          f.remove && f.remove.call(e, c));
                    a &&
                      !p.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                        S.removeEvent(e, d, v.handle),
                      delete u[d]);
                  } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && se.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                s = new Array(arguments.length),
                u = S.event.fix(e),
                l =
                  (se.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
              for (s[0] = u, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
              ) {
                for (
                  a = S.event.handlers.call(this, u, l), t = 0;
                  (o = a[t++]) && !u.isPropagationStopped();

                )
                  for (
                    u.currentTarget = o.elem, n = 0;
                    (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();

                  )
                    (u.rnamespace &&
                      !1 !== i.namespace &&
                      !u.rnamespace.test(i.namespace)) ||
                      ((u.handleObj = i),
                      (u.data = i.data),
                      void 0 !==
                        (r = (
                          (S.event.special[i.origType] || {}).handle ||
                          i.handler
                        ).apply(o.elem, s)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                o,
                i,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
              if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                  if (
                    1 === l.nodeType &&
                    ("click" !== e.type || !0 !== l.disabled)
                  ) {
                    for (i = [], a = {}, n = 0; n < u; n++)
                      void 0 === a[(o = (r = t[n]).selector + " ")] &&
                        (a[o] = r.needsContext
                          ? S(o, this).index(l) > -1
                          : S.find(o, this, null, [l]).length),
                        a[o] && i.push(r);
                    i.length && s.push({ elem: l, handlers: i });
                  }
              return (
                (l = this),
                u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(S.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: y(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[S.expando] ? e : new S.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    Se.test(t.type) &&
                      t.click &&
                      j(t, "input") &&
                      Me(t, "click", !0),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    Se.test(t.type) &&
                      t.click &&
                      j(t, "input") &&
                      Me(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (Se.test(t.type) &&
                      t.click &&
                      j(t, "input") &&
                      se.get(t, "click")) ||
                    j(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (S.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (S.Event = function (e, t) {
              if (!(this instanceof S.Event)) return new S.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? He
                      : Pe),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && S.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[S.expando] = !0);
            }),
            (S.Event.prototype = {
              constructor: S.Event,
              isDefaultPrevented: Pe,
              isPropagationStopped: Pe,
              isImmediatePropagationStopped: Pe,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = He),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = He),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = He),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            S.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              S.event.addProp,
            ),
            S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              function n(e) {
                if (x.documentMode) {
                  var n = se.get(this, "handle"),
                    r = S.event.fix(e);
                  (r.type = "focusin" === e.type ? "focus" : "blur"),
                    (r.isSimulated = !0),
                    n(e),
                    r.target === r.currentTarget && n(r);
                } else S.event.simulate(t, e.target, S.event.fix(e));
              }
              (S.event.special[e] = {
                setup: function () {
                  var r;
                  if ((Me(this, e, !0), !x.documentMode)) return !1;
                  (r = se.get(this, t)) || this.addEventListener(t, n),
                    se.set(this, t, (r || 0) + 1);
                },
                trigger: function () {
                  return Me(this, e), !0;
                },
                teardown: function () {
                  var e;
                  if (!x.documentMode) return !1;
                  (e = se.get(this, t) - 1)
                    ? se.set(this, t, e)
                    : (this.removeEventListener(t, n), se.remove(this, t));
                },
                _default: function (t) {
                  return se.get(t.target, e);
                },
                delegateType: t,
              }),
                (S.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = x.documentMode ? this : r,
                      i = se.get(o, t);
                    i ||
                      (x.documentMode
                        ? this.addEventListener(t, n)
                        : r.addEventListener(e, n, !0)),
                      se.set(o, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = x.documentMode ? this : r,
                      i = se.get(o, t) - 1;
                    i
                      ? se.set(o, t, i)
                      : (x.documentMode
                          ? this.removeEventListener(t, n)
                          : r.removeEventListener(e, n, !0),
                        se.remove(o, t));
                  },
                });
            }),
            S.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                S.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = e.relatedTarget,
                      o = e.handleObj;
                    return (
                      (r && (r === this || S.contains(this, r))) ||
                        ((e.type = o.origType),
                        (n = o.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              },
            ),
            S.fn.extend({
              on: function (e, t, n, r) {
                return Re(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return Re(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    S(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler,
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (o in e) this.off(o, t, e[o]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Pe),
                  this.each(function () {
                    S.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var _e = /<script|<style|<link/i,
            Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Fe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function We(e, t) {
            return (
              (j(e, "table") &&
                j(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                S(e).children("tbody")[0]) ||
              e
            );
          }
          function $e(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Be(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Ue(e, t) {
            var n, r, o, i, a, s;
            if (1 === t.nodeType) {
              if (se.hasData(e) && (s = se.get(e).events))
                for (o in (se.remove(t, "handle events"), s))
                  for (n = 0, r = s[o].length; n < r; n++)
                    S.event.add(t, o, s[o][n]);
              ue.hasData(e) &&
                ((i = ue.access(e)), (a = S.extend({}, i)), ue.set(t, a));
            }
          }
          function ze(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Se.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Xe(e, t, n, r) {
            t = u(t);
            var o,
              i,
              a,
              s,
              l,
              c,
              f = 0,
              p = e.length,
              d = p - 1,
              h = t[0],
              g = y(h);
            if (
              g ||
              (p > 1 && "string" == typeof h && !v.checkClone && Ie.test(h))
            )
              return e.each(function (o) {
                var i = e.eq(o);
                g && (t[0] = h.call(this, o, i.html())), Xe(i, t, n, r);
              });
            if (
              p &&
              ((i = (o = qe(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === o.childNodes.length && (o = i),
              i || r)
            ) {
              for (s = (a = S.map(Ae(o, "script"), $e)).length; f < p; f++)
                (l = o),
                  f !== d &&
                    ((l = S.clone(l, !0, !0)),
                    s && S.merge(a, Ae(l, "script"))),
                  n.call(e[f], l, f);
              if (s)
                for (
                  c = a[a.length - 1].ownerDocument, S.map(a, Be), f = 0;
                  f < s;
                  f++
                )
                  (l = a[f]),
                    je.test(l.type || "") &&
                      !se.access(l, "globalEval") &&
                      S.contains(c, l) &&
                      (l.src && "module" !== (l.type || "").toLowerCase()
                        ? S._evalUrl &&
                          !l.noModule &&
                          S._evalUrl(
                            l.src,
                            { nonce: l.nonce || l.getAttribute("nonce") },
                            c,
                          )
                        : w(l.textContent.replace(Fe, ""), l, c));
            }
            return e;
          }
          function Ve(e, t, n) {
            for (
              var r, o = t ? S.filter(t, e) : e, i = 0;
              null != (r = o[i]);
              i++
            )
              n || 1 !== r.nodeType || S.cleanData(Ae(r)),
                r.parentNode &&
                  (n && ve(r) && Ne(Ae(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          S.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                o,
                i,
                a,
                s = e.cloneNode(!0),
                u = ve(e);
              if (
                !(
                  v.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  S.isXMLDoc(e)
                )
              )
                for (a = Ae(s), r = 0, o = (i = Ae(e)).length; r < o; r++)
                  ze(i[r], a[r]);
              if (t)
                if (n)
                  for (
                    i = i || Ae(e), a = a || Ae(s), r = 0, o = i.length;
                    r < o;
                    r++
                  )
                    Ue(i[r], a[r]);
                else Ue(e, s);
              return (
                (a = Ae(s, "script")).length > 0 &&
                  Ne(a, !u && Ae(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, o = S.event.special, i = 0;
                void 0 !== (n = e[i]);
                i++
              )
                if (ie(n)) {
                  if ((t = n[se.expando])) {
                    if (t.events)
                      for (r in t.events)
                        o[r]
                          ? S.event.remove(n, r)
                          : S.removeEvent(n, r, t.handle);
                    n[se.expando] = void 0;
                  }
                  n[ue.expando] && (n[ue.expando] = void 0);
                }
            },
          }),
            S.fn.extend({
              detach: function (e) {
                return Ve(this, e, !0);
              },
              remove: function (e) {
                return Ve(this, e);
              },
              text: function (e) {
                return ee(
                  this,
                  function (e) {
                    return void 0 === e
                      ? S.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length,
                );
              },
              append: function () {
                return Xe(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    We(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Xe(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = We(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Xe(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Xe(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (S.cleanData(Ae(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return S.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return ee(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !_e.test(e) &&
                      !De[(Ee.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = S.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (S.cleanData(Ae(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length,
                );
              },
              replaceWith: function () {
                var e = [];
                return Xe(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    S.inArray(this, e) < 0 &&
                      (S.cleanData(Ae(this)), n && n.replaceChild(t, this));
                  },
                  e,
                );
              },
            }),
            S.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                S.fn[e] = function (e) {
                  for (
                    var n, r = [], o = S(e), i = o.length - 1, a = 0;
                    a <= i;
                    a++
                  )
                    (n = a === i ? this : this.clone(!0)),
                      S(o[a])[t](n),
                      l.apply(r, n.get());
                  return this.pushStack(r);
                };
              },
            );
          var Ye = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"),
            Ge = /^--/,
            Qe = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            Je = function (e, t, n) {
              var r,
                o,
                i = {};
              for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
              for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
              return r;
            },
            Ke = new RegExp(he.join("|"), "i");
          function Ze(e, t, n) {
            var r,
              o,
              i,
              a,
              s = Ge.test(t),
              u = e.style;
            return (
              (n = n || Qe(e)) &&
                ((a = n.getPropertyValue(t) || n[t]),
                s && a && (a = a.replace(q, "$1") || void 0),
                "" !== a || ve(e) || (a = S.style(e, t)),
                !v.pixelBoxStyles() &&
                  Ye.test(a) &&
                  Ke.test(t) &&
                  ((r = u.width),
                  (o = u.minWidth),
                  (i = u.maxWidth),
                  (u.minWidth = u.maxWidth = u.width = a),
                  (a = n.width),
                  (u.width = r),
                  (u.minWidth = o),
                  (u.maxWidth = i))),
              void 0 !== a ? a + "" : a
            );
          }
          function et(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (c) {
                (l.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ge.appendChild(l).appendChild(c);
                var e = r.getComputedStyle(c);
                (n = "1%" !== e.top),
                  (u = 12 === t(e.marginLeft)),
                  (c.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (o = 36 === t(e.width)),
                  (c.style.position = "absolute"),
                  (i = 12 === t(c.offsetWidth / 3)),
                  ge.removeChild(l),
                  (c = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              o,
              i,
              a,
              s,
              u,
              l = x.createElement("div"),
              c = x.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (v.clearCloneStyle = "content-box" === c.style.backgroundClip),
              S.extend(v, {
                boxSizingReliable: function () {
                  return e(), o;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), u;
                },
                scrollboxSize: function () {
                  return e(), i;
                },
                reliableTrDimensions: function () {
                  var e, t, n, o;
                  return (
                    null == s &&
                      ((e = x.createElement("table")),
                      (t = x.createElement("tr")),
                      (n = x.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText =
                        "box-sizing:content-box;border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      ge.appendChild(e).appendChild(t).appendChild(n),
                      (o = r.getComputedStyle(t)),
                      (s =
                        parseInt(o.height, 10) +
                          parseInt(o.borderTopWidth, 10) +
                          parseInt(o.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      ge.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var tt = ["Webkit", "Moz", "ms"],
            nt = x.createElement("div").style,
            rt = {};
          function ot(e) {
            var t = S.cssProps[e] || rt[e];
            return (
              t ||
              (e in nt
                ? e
                : (rt[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = tt.length;
                        n--;

                      )
                        if ((e = tt[n] + t) in nt) return e;
                    })(e) || e))
            );
          }
          var it = /^(none|table(?!-c[ea]).+)/,
            at = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            st = { letterSpacing: "0", fontWeight: "400" };
          function ut(e, t, n) {
            var r = de.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function lt(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              u = 0,
              l = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (l += S.css(e, n + he[a], !0, o)),
                r
                  ? ("content" === n &&
                      (u -= S.css(e, "padding" + he[a], !0, o)),
                    "margin" !== n &&
                      (u -= S.css(e, "border" + he[a] + "Width", !0, o)))
                  : ((u += S.css(e, "padding" + he[a], !0, o)),
                    "padding" !== n
                      ? (u += S.css(e, "border" + he[a] + "Width", !0, o))
                      : (s += S.css(e, "border" + he[a] + "Width", !0, o)));
            return (
              !r &&
                i >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        i -
                        u -
                        s -
                        0.5,
                    ),
                  ) || 0),
              u + l
            );
          }
          function ct(e, t, n) {
            var r = Qe(e),
              o =
                (!v.boxSizingReliable() || n) &&
                "border-box" === S.css(e, "boxSizing", !1, r),
              i = o,
              a = Ze(e, t, r),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ye.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!v.boxSizingReliable() && o) ||
                (!v.reliableTrDimensions() && j(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((o = "border-box" === S.css(e, "boxSizing", !1, r)),
                (i = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                lt(e, t, n || (o ? "border" : "content"), i, r, a) +
                "px"
            );
          }
          function ft(e, t, n, r, o) {
            return new ft.prototype.init(e, t, n, r, o);
          }
          S.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ze(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              aspectRatio: !0,
              borderImageSlice: !0,
              columnCount: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              scale: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
              fillOpacity: !0,
              floodOpacity: !0,
              stopOpacity: !0,
              strokeMiterlimit: !0,
              strokeOpacity: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                  i,
                  a,
                  s = oe(t),
                  u = Ge.test(t),
                  l = e.style;
                if (
                  (u || (t = ot(s)),
                  (a = S.cssHooks[t] || S.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (o = a.get(e, !1, r))
                    ? o
                    : l[t];
                "string" === (i = typeof n) &&
                  (o = de.exec(n)) &&
                  o[1] &&
                  ((n = xe(e, t, o)), (i = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== i ||
                      u ||
                      (n += (o && o[3]) || (S.cssNumber[s] ? "" : "px")),
                    v.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (l[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (u ? l.setProperty(t, n) : (l[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var o,
                i,
                a,
                s = oe(t);
              return (
                Ge.test(t) || (t = ot(s)),
                (a = S.cssHooks[t] || S.cssHooks[s]) &&
                  "get" in a &&
                  (o = a.get(e, !0, n)),
                void 0 === o && (o = Ze(e, t, r)),
                "normal" === o && t in st && (o = st[t]),
                "" === n || n
                  ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
                  : o
              );
            },
          }),
            S.each(["height", "width"], function (e, t) {
              S.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !it.test(S.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? ct(e, t, r)
                      : Je(e, at, function () {
                          return ct(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var o,
                    i = Qe(e),
                    a = !v.scrollboxSize() && "absolute" === i.position,
                    s =
                      (a || r) && "border-box" === S.css(e, "boxSizing", !1, i),
                    u = r ? lt(e, t, r, s, i) : 0;
                  return (
                    s &&
                      a &&
                      (u -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(i[t]) -
                          lt(e, t, "border", !1, i) -
                          0.5,
                      )),
                    u &&
                      (o = de.exec(n)) &&
                      "px" !== (o[3] || "px") &&
                      ((e.style[t] = n), (n = S.css(e, t))),
                    ut(0, n, u)
                  );
                },
              };
            }),
            (S.cssHooks.marginLeft = et(v.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ze(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Je(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            S.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (S.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        o = {},
                        i = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      o[e + he[r] + t] = i[r] || i[r - 2] || i[0];
                    return o;
                  },
                }),
                  "margin" !== e && (S.cssHooks[e + t].set = ut);
              },
            ),
            S.fn.extend({
              css: function (e, t) {
                return ee(
                  this,
                  function (e, t, n) {
                    var r,
                      o,
                      i = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = Qe(e), o = t.length; a < o; a++)
                        i[t[a]] = S.css(e, t[a], !1, r);
                      return i;
                    }
                    return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1,
                );
              },
            }),
            (S.Tween = ft),
            (ft.prototype = {
              constructor: ft,
              init: function (e, t, n, r, o, i) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = o || S.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = i || (S.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = ft.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : ft.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = ft.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        S.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration,
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : ft.propHooks._default.set(this),
                  this
                );
              },
            }),
            (ft.prototype.init.prototype = ft.prototype),
            (ft.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                      ? t
                      : 0;
                },
                set: function (e) {
                  S.fx.step[e.prop]
                    ? S.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                        (!S.cssHooks[e.prop] &&
                          null == e.elem.style[ot(e.prop)])
                      ? (e.elem[e.prop] = e.now)
                      : S.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (ft.propHooks.scrollTop = ft.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (S.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (S.fx = ft.prototype.init),
            (S.fx.step = {});
          var pt,
            dt,
            ht = /^(?:toggle|show|hide)$/,
            gt = /queueHooks$/;
          function vt() {
            dt &&
              (!1 === x.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(vt)
                : r.setTimeout(vt, S.fx.interval),
              S.fx.tick());
          }
          function yt() {
            return (
              r.setTimeout(function () {
                pt = void 0;
              }),
              (pt = Date.now())
            );
          }
          function mt(e, t) {
            var n,
              r = 0,
              o = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              o["margin" + (n = he[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o;
          }
          function xt(e, t, n) {
            for (
              var r,
                o = (bt.tweeners[t] || []).concat(bt.tweeners["*"]),
                i = 0,
                a = o.length;
              i < a;
              i++
            )
              if ((r = o[i].call(n, t, e))) return r;
          }
          function bt(e, t, n) {
            var r,
              o,
              i = 0,
              a = bt.prefilters.length,
              s = S.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (o) return !1;
                for (
                  var t = pt || yt(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = 1 - (n / l.duration || 0),
                    i = 0,
                    a = l.tweens.length;
                  i < a;
                  i++
                )
                  l.tweens[i].run(r);
                return (
                  s.notifyWith(e, [l, r, n]),
                  r < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [l, 1, 0]),
                      s.resolveWith(e, [l]),
                      !1)
                );
              },
              l = s.promise({
                elem: e,
                props: S.extend({}, t),
                opts: S.extend(
                  !0,
                  { specialEasing: {}, easing: S.easing._default },
                  n,
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || yt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = S.Tween(
                    e,
                    l.opts,
                    t,
                    n,
                    l.opts.specialEasing[t] || l.opts.easing,
                  );
                  return l.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? l.tweens.length : 0;
                  if (o) return this;
                  for (o = !0; n < r; n++) l.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                      : s.rejectWith(e, [l, t]),
                    this
                  );
                },
              }),
              c = l.props;
            for (
              !(function (e, t) {
                var n, r, o, i, a;
                for (n in e)
                  if (
                    ((o = t[(r = oe(n))]),
                    (i = e[n]),
                    Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                    n !== r && ((e[r] = i), delete e[n]),
                    (a = S.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((i = a.expand(i)), delete e[r], i))
                      (n in e) || ((e[n] = i[n]), (t[n] = o));
                  else t[r] = o;
              })(c, l.opts.specialEasing);
              i < a;
              i++
            )
              if ((r = bt.prefilters[i].call(l, e, c, l.opts)))
                return (
                  y(r.stop) &&
                    (S._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              S.map(c, xt, l),
              y(l.opts.start) && l.opts.start.call(e, l),
              l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
              S.fx.timer(
                S.extend(u, { elem: e, anim: l, queue: l.opts.queue }),
              ),
              l
            );
          }
          (S.Animation = S.extend(bt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return xe(n.elem, e, de.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              y(e) ? ((t = e), (e = ["*"])) : (e = e.match(V));
              for (var n, r = 0, o = e.length; r < o; r++)
                (n = e[r]),
                  (bt.tweeners[n] = bt.tweeners[n] || []),
                  bt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f = "width" in t || "height" in t,
                  p = this,
                  d = {},
                  h = e.style,
                  g = e.nodeType && me(e),
                  v = se.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = S._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((o = t[r]), ht.test(o))) {
                    if (
                      (delete t[r],
                      (i = i || "toggle" === o),
                      o === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== o || !v || void 0 === v[r]) continue;
                      g = !0;
                    }
                    d[r] = (v && v[r]) || S.style(e, r);
                  }
                if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                  for (r in (f &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (l = v && v.display) && (l = se.get(e, "display")),
                    "none" === (c = S.css(e, "display")) &&
                      (l
                        ? (c = l)
                        : (Te([e], !0),
                          (l = e.style.display || l),
                          (c = S.css(e, "display")),
                          Te([e]))),
                    ("inline" === c || ("inline-block" === c && null != l)) &&
                      "none" === S.css(e, "float") &&
                      (u ||
                        (p.done(function () {
                          h.display = l;
                        }),
                        null == l &&
                          ((c = h.display), (l = "none" === c ? "" : c))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  d))
                    u ||
                      (v
                        ? "hidden" in v && (g = v.hidden)
                        : (v = se.access(e, "fxshow", { display: l })),
                      i && (v.hidden = !g),
                      g && Te([e], !0),
                      p.done(function () {
                        for (r in (g || Te([e]), se.remove(e, "fxshow"), d))
                          S.style(e, r, d[r]);
                      })),
                      (u = xt(g ? v[r] : 0, r, p)),
                      r in v ||
                        ((v[r] = u.start),
                        g && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? bt.prefilters.unshift(e) : bt.prefilters.push(e);
            },
          })),
            (S.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? S.extend({}, e)
                  : {
                      complete: n || (!n && t) || (y(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !y(t) && t),
                    };
              return (
                S.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in S.fx.speeds
                      ? (r.duration = S.fx.speeds[r.duration])
                      : (r.duration = S.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  y(r.old) && r.old.call(this),
                    r.queue && S.dequeue(this, r.queue);
                }),
                r
              );
            }),
            S.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(me)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var o = S.isEmptyObject(e),
                  i = S.speed(t, n, r),
                  a = function () {
                    var t = bt(this, S.extend({}, e), i);
                    (o || se.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      o = null != e && e + "queueHooks",
                      i = S.timers,
                      a = se.get(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                      for (o in a) a[o] && a[o].stop && gt.test(o) && r(a[o]);
                    for (o = i.length; o--; )
                      i[o].elem !== this ||
                        (null != e && i[o].queue !== e) ||
                        (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                    (!t && n) || S.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = se.get(this),
                      r = n[e + "queue"],
                      o = n[e + "queueHooks"],
                      i = S.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        S.queue(this, e, []),
                        o && o.stop && o.stop.call(this, !0),
                        t = i.length;
                      t--;

                    )
                      i[t].elem === this &&
                        i[t].queue === e &&
                        (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            S.each(["toggle", "show", "hide"], function (e, t) {
              var n = S.fn[t];
              S.fn[t] = function (e, r, o) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(mt(t, !0), e, r, o);
              };
            }),
            S.each(
              {
                slideDown: mt("show"),
                slideUp: mt("hide"),
                slideToggle: mt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                S.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              },
            ),
            (S.timers = []),
            (S.fx.tick = function () {
              var e,
                t = 0,
                n = S.timers;
              for (pt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || S.fx.stop(), (pt = void 0);
            }),
            (S.fx.timer = function (e) {
              S.timers.push(e), S.fx.start();
            }),
            (S.fx.interval = 13),
            (S.fx.start = function () {
              dt || ((dt = !0), vt());
            }),
            (S.fx.stop = function () {
              dt = null;
            }),
            (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (S.fn.delay = function (e, t) {
              return (
                (e = (S.fx && S.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var o = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(o);
                  };
                })
              );
            }),
            (function () {
              var e = x.createElement("input"),
                t = x
                  .createElement("select")
                  .appendChild(x.createElement("option"));
              (e.type = "checkbox"),
                (v.checkOn = "" !== e.value),
                (v.optSelected = t.selected),
                ((e = x.createElement("input")).value = "t"),
                (e.type = "radio"),
                (v.radioValue = "t" === e.value);
            })();
          var wt,
            Tt = S.expr.attrHandle;
          S.fn.extend({
            attr: function (e, t) {
              return ee(this, S.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                S.removeAttr(this, e);
              });
            },
          }),
            S.extend({
              attr: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return void 0 === e.getAttribute
                    ? S.prop(e, t, n)
                    : ((1 === i && S.isXMLDoc(e)) ||
                        (o =
                          S.attrHooks[t.toLowerCase()] ||
                          (S.expr.match.bool.test(t) ? wt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void S.removeAttr(e, t)
                          : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                            ? r
                            : (e.setAttribute(t, n + ""), n)
                        : o && "get" in o && null !== (r = o.get(e, t))
                          ? r
                          : null == (r = S.find.attr(e, t))
                            ? void 0
                            : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!v.radioValue && "radio" === t && j(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  o = t && t.match(V);
                if (o && 1 === e.nodeType)
                  for (; (n = o[r++]); ) e.removeAttribute(n);
              },
            }),
            (wt = {
              set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = Tt[t] || S.find.attr;
              Tt[t] = function (e, t, r) {
                var o,
                  i,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((i = Tt[a]),
                    (Tt[a] = o),
                    (o = null != n(e, t, r) ? a : null),
                    (Tt[a] = i)),
                  o
                );
              };
            });
          var Ct = /^(?:input|select|textarea|button)$/i,
            kt = /^(?:a|area)$/i;
          function St(e) {
            return (e.match(V) || []).join(" ");
          }
          function Et(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function jt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(V)) || [];
          }
          S.fn.extend({
            prop: function (e, t) {
              return ee(this, S.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[S.propFix[e] || e];
              });
            },
          }),
            S.extend({
              prop: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return (
                    (1 === i && S.isXMLDoc(e)) ||
                      ((t = S.propFix[t] || t), (o = S.propHooks[t])),
                    void 0 !== n
                      ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : o && "get" in o && null !== (r = o.get(e, t))
                        ? r
                        : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = S.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : Ct.test(e.nodeName) || (kt.test(e.nodeName) && e.href)
                        ? 0
                        : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            v.optSelected ||
              (S.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            S.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                S.propFix[this.toLowerCase()] = this;
              },
            ),
            S.fn.extend({
              addClass: function (e) {
                var t, n, r, o, i, a;
                return y(e)
                  ? this.each(function (t) {
                      S(this).addClass(e.call(this, t, Et(this)));
                    })
                  : (t = jt(e)).length
                    ? this.each(function () {
                        if (
                          ((r = Et(this)),
                          (n = 1 === this.nodeType && " " + St(r) + " "))
                        ) {
                          for (i = 0; i < t.length; i++)
                            (o = t[i]),
                              n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                          (a = St(n)), r !== a && this.setAttribute("class", a);
                        }
                      })
                    : this;
              },
              removeClass: function (e) {
                var t, n, r, o, i, a;
                return y(e)
                  ? this.each(function (t) {
                      S(this).removeClass(e.call(this, t, Et(this)));
                    })
                  : arguments.length
                    ? (t = jt(e)).length
                      ? this.each(function () {
                          if (
                            ((r = Et(this)),
                            (n = 1 === this.nodeType && " " + St(r) + " "))
                          ) {
                            for (i = 0; i < t.length; i++)
                              for (o = t[i]; n.indexOf(" " + o + " ") > -1; )
                                n = n.replace(" " + o + " ", " ");
                            (a = St(n)),
                              r !== a && this.setAttribute("class", a);
                          }
                        })
                      : this
                    : this.attr("class", "");
              },
              toggleClass: function (e, t) {
                var n,
                  r,
                  o,
                  i,
                  a = typeof e,
                  s = "string" === a || Array.isArray(e);
                return y(e)
                  ? this.each(function (n) {
                      S(this).toggleClass(e.call(this, n, Et(this), t), t);
                    })
                  : "boolean" == typeof t && s
                    ? t
                      ? this.addClass(e)
                      : this.removeClass(e)
                    : ((n = jt(e)),
                      this.each(function () {
                        if (s)
                          for (i = S(this), o = 0; o < n.length; o++)
                            (r = n[o]),
                              i.hasClass(r) ? i.removeClass(r) : i.addClass(r);
                        else
                          (void 0 !== e && "boolean" !== a) ||
                            ((r = Et(this)) && se.set(this, "__className__", r),
                            this.setAttribute &&
                              this.setAttribute(
                                "class",
                                r || !1 === e
                                  ? ""
                                  : se.get(this, "__className__") || "",
                              ));
                      }));
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + St(Et(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var Dt = /\r/g;
          S.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                o = this[0];
              return arguments.length
                ? ((r = y(e)),
                  this.each(function (n) {
                    var o;
                    1 === this.nodeType &&
                      (null == (o = r ? e.call(this, n, S(this).val()) : e)
                        ? (o = "")
                        : "number" == typeof o
                          ? (o += "")
                          : Array.isArray(o) &&
                            (o = S.map(o, function (e) {
                              return null == e ? "" : e + "";
                            })),
                      ((t =
                        S.valHooks[this.type] ||
                        S.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, o, "value")) ||
                        (this.value = o));
                  }))
                : o
                  ? (t =
                      S.valHooks[o.type] ||
                      S.valHooks[o.nodeName.toLowerCase()]) &&
                    "get" in t &&
                    void 0 !== (n = t.get(o, "value"))
                    ? n
                    : "string" == typeof (n = o.value)
                      ? n.replace(Dt, "")
                      : null == n
                        ? ""
                        : n
                  : void 0;
            },
          }),
            S.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : St(S.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      o = e.options,
                      i = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      u = a ? i + 1 : o.length;
                    for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                      if (
                        ((n = o[r]).selected || r === i) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))
                      ) {
                        if (((t = S(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, o = e.options, i = S.makeArray(t), a = o.length;
                      a--;

                    )
                      ((r = o[a]).selected =
                        S.inArray(S.valHooks.option.get(r), i) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), i;
                  },
                },
              },
            }),
            S.each(["radio", "checkbox"], function () {
              (S.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = S.inArray(S(e).val(), t) > -1);
                },
              }),
                v.checkOn ||
                  (S.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            });
          var At = r.location,
            Nt = { guid: Date.now() },
            Ot = /\?/;
          S.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                S.error(
                  "Invalid XML: " +
                    (n
                      ? S.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e),
                ),
              t
            );
          };
          var qt = /^(?:focusinfocus|focusoutblur)$/,
            Lt = function (e) {
              e.stopPropagation();
            };
          S.extend(S.event, {
            trigger: function (e, t, n, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                h = [n || x],
                g = d.call(e, "type") ? e.type : e,
                v = d.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = p = s = n = n || x),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !qt.test(g + S.event.triggered) &&
                  (g.indexOf(".") > -1 &&
                    ((v = g.split(".")), (g = v.shift()), v.sort()),
                  (l = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[S.expando]
                    ? e
                    : new S.Event(g, "object" == typeof e && e)).isTrigger = o
                    ? 2
                    : 3),
                  (e.namespace = v.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)",
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : S.makeArray(t, [e])),
                  (f = S.event.special[g] || {}),
                  o || !f.trigger || !1 !== f.trigger.apply(n, t)))
              ) {
                if (!o && !f.noBubble && !m(n)) {
                  for (
                    u = f.delegateType || g,
                      qt.test(u + g) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (s = a);
                  s === (n.ownerDocument || x) &&
                    h.push(s.defaultView || s.parentWindow || r);
                }
                for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); )
                  (p = a),
                    (e.type = i > 1 ? u : f.bindType || g),
                    (c =
                      (se.get(a, "events") || Object.create(null))[e.type] &&
                      se.get(a, "handle")) && c.apply(a, t),
                    (c = l && a[l]) &&
                      c.apply &&
                      ie(a) &&
                      ((e.result = c.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  o ||
                    e.isDefaultPrevented() ||
                    (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                    !ie(n) ||
                    (l &&
                      y(n[g]) &&
                      !m(n) &&
                      ((s = n[l]) && (n[l] = null),
                      (S.event.triggered = g),
                      e.isPropagationStopped() && p.addEventListener(g, Lt),
                      n[g](),
                      e.isPropagationStopped() && p.removeEventListener(g, Lt),
                      (S.event.triggered = void 0),
                      s && (n[l] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
              S.event.trigger(r, null, t);
            },
          }),
            S.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  S.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0);
              },
            });
          var Ht = /\[\]$/,
            Pt = /\r?\n/g,
            Rt = /^(?:submit|button|image|reset|file)$/i,
            Mt = /^(?:input|select|textarea|keygen)/i;
          function _t(e, t, n, r) {
            var o;
            if (Array.isArray(t))
              S.each(t, function (t, o) {
                n || Ht.test(e)
                  ? r(e, o)
                  : _t(
                      e +
                        "[" +
                        ("object" == typeof o && null != o ? t : "") +
                        "]",
                      o,
                      n,
                      r,
                    );
              });
            else if (n || "object" !== T(t)) r(e, t);
            else for (o in t) _t(e + "[" + o + "]", t[o], n, r);
          }
          (S.param = function (e, t) {
            var n,
              r = [],
              o = function (e, t) {
                var n = y(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
              S.each(e, function () {
                o(this.name, this.value);
              });
            else for (n in e) _t(n, e[n], t, o);
            return r.join("&");
          }),
            S.fn.extend({
              serialize: function () {
                return S.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = S.prop(this, "elements");
                  return e ? S.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !S(this).is(":disabled") &&
                      Mt.test(this.nodeName) &&
                      !Rt.test(e) &&
                      (this.checked || !Se.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = S(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                        ? S.map(n, function (e) {
                            return {
                              name: t.name,
                              value: e.replace(Pt, "\r\n"),
                            };
                          })
                        : { name: t.name, value: n.replace(Pt, "\r\n") };
                  })
                  .get();
              },
            });
          var It = /%20/g,
            Ft = /#.*$/,
            Wt = /([?&])_=[^&]*/,
            $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Bt = /^(?:GET|HEAD)$/,
            Ut = /^\/\//,
            zt = {},
            Xt = {},
            Vt = "*/".concat("*"),
            Yt = x.createElement("a");
          function Gt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                o = 0,
                i = t.toLowerCase().match(V) || [];
              if (y(n))
                for (; (r = i[o++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function Qt(e, t, n, r) {
            var o = {},
              i = e === Xt;
            function a(s) {
              var u;
              return (
                (o[s] = !0),
                S.each(e[s] || [], function (e, s) {
                  var l = s(t, n, r);
                  return "string" != typeof l || i || o[l]
                    ? i
                      ? !(u = l)
                      : void 0
                    : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
              );
            }
            return a(t.dataTypes[0]) || (!o["*"] && a("*"));
          }
          function Jt(e, t) {
            var n,
              r,
              o = S.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && S.extend(!0, e, r), e;
          }
          (Yt.href = At.href),
            S.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: At.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    At.protocol,
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Vt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": S.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Jt(Jt(e, S.ajaxSettings), t) : Jt(S.ajaxSettings, e);
              },
              ajaxPrefilter: Gt(zt),
              ajaxTransport: Gt(Xt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f,
                  p,
                  d = S.ajaxSetup({}, t),
                  h = d.context || d,
                  g = d.context && (h.nodeType || h.jquery) ? S(h) : S.event,
                  v = S.Deferred(),
                  y = S.Callbacks("once memory"),
                  m = d.statusCode || {},
                  b = {},
                  w = {},
                  T = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (l) {
                        if (!a)
                          for (a = {}; (t = $t.exec(i)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return l ? i : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == l &&
                          ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                          (b[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == l && (d.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (l) C.always(e[C.status]);
                        else for (t in e) m[t] = [m[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), k(0, t), this;
                    },
                  };
                if (
                  (v.promise(C),
                  (d.url = ((e || d.url || At.href) + "").replace(
                    Ut,
                    At.protocol + "//",
                  )),
                  (d.type = t.method || t.type || d.method || d.type),
                  (d.dataTypes = (d.dataType || "*").toLowerCase().match(V) || [
                    "",
                  ]),
                  null == d.crossDomain)
                ) {
                  u = x.createElement("a");
                  try {
                    (u.href = d.url),
                      (u.href = u.href),
                      (d.crossDomain =
                        Yt.protocol + "//" + Yt.host !=
                        u.protocol + "//" + u.host);
                  } catch (e) {
                    d.crossDomain = !0;
                  }
                }
                if (
                  (d.data &&
                    d.processData &&
                    "string" != typeof d.data &&
                    (d.data = S.param(d.data, d.traditional)),
                  Qt(zt, d, t, C),
                  l)
                )
                  return C;
                for (f in ((c = S.event && d.global) &&
                  0 == S.active++ &&
                  S.event.trigger("ajaxStart"),
                (d.type = d.type.toUpperCase()),
                (d.hasContent = !Bt.test(d.type)),
                (o = d.url.replace(Ft, "")),
                d.hasContent
                  ? d.data &&
                    d.processData &&
                    0 ===
                      (d.contentType || "").indexOf(
                        "application/x-www-form-urlencoded",
                      ) &&
                    (d.data = d.data.replace(It, "+"))
                  : ((p = d.url.slice(o.length)),
                    d.data &&
                      (d.processData || "string" == typeof d.data) &&
                      ((o += (Ot.test(o) ? "&" : "?") + d.data), delete d.data),
                    !1 === d.cache &&
                      ((o = o.replace(Wt, "$1")),
                      (p = (Ot.test(o) ? "&" : "?") + "_=" + Nt.guid++ + p)),
                    (d.url = o + p)),
                d.ifModified &&
                  (S.lastModified[o] &&
                    C.setRequestHeader("If-Modified-Since", S.lastModified[o]),
                  S.etag[o] && C.setRequestHeader("If-None-Match", S.etag[o])),
                ((d.data && d.hasContent && !1 !== d.contentType) ||
                  t.contentType) &&
                  C.setRequestHeader("Content-Type", d.contentType),
                C.setRequestHeader(
                  "Accept",
                  d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                    ? d.accepts[d.dataTypes[0]] +
                        ("*" !== d.dataTypes[0] ? ", " + Vt + "; q=0.01" : "")
                    : d.accepts["*"],
                ),
                d.headers))
                  C.setRequestHeader(f, d.headers[f]);
                if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || l))
                  return C.abort();
                if (
                  ((T = "abort"),
                  y.add(d.complete),
                  C.done(d.success),
                  C.fail(d.error),
                  (n = Qt(Xt, d, t, C)))
                ) {
                  if (
                    ((C.readyState = 1), c && g.trigger("ajaxSend", [C, d]), l)
                  )
                    return C;
                  d.async &&
                    d.timeout > 0 &&
                    (s = r.setTimeout(function () {
                      C.abort("timeout");
                    }, d.timeout));
                  try {
                    (l = !1), n.send(b, k);
                  } catch (e) {
                    if (l) throw e;
                    k(-1, e);
                  }
                } else k(-1, "No Transport");
                function k(e, t, a, u) {
                  var f,
                    p,
                    x,
                    b,
                    w,
                    T = t;
                  l ||
                    ((l = !0),
                    s && r.clearTimeout(s),
                    (n = void 0),
                    (i = u || ""),
                    (C.readyState = e > 0 ? 4 : 0),
                    (f = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (b = (function (e, t, n) {
                        for (
                          var r, o, i, a, s = e.contents, u = e.dataTypes;
                          "*" === u[0];

                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (o in s)
                            if (s[o] && s[o].test(r)) {
                              u.unshift(o);
                              break;
                            }
                        if (u[0] in n) i = u[0];
                        else {
                          for (o in n) {
                            if (!u[0] || e.converters[o + " " + u[0]]) {
                              i = o;
                              break;
                            }
                            a || (a = o);
                          }
                          i = i || a;
                        }
                        if (i) return i !== u[0] && u.unshift(i), n[i];
                      })(d, C, a)),
                    !f &&
                      S.inArray("script", d.dataTypes) > -1 &&
                      S.inArray("json", d.dataTypes) < 0 &&
                      (d.converters["text script"] = function () {}),
                    (b = (function (e, t, n, r) {
                      var o,
                        i,
                        a,
                        s,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (a in e.converters)
                          l[a.toLowerCase()] = e.converters[a];
                      for (i = c.shift(); i; )
                        if (
                          (e.responseFields[i] && (n[e.responseFields[i]] = t),
                          !u &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (u = i),
                          (i = c.shift()))
                        )
                          if ("*" === i) i = u;
                          else if ("*" !== u && u !== i) {
                            if (!(a = l[u + " " + i] || l["* " + i]))
                              for (o in l)
                                if (
                                  (s = o.split(" "))[1] === i &&
                                  (a = l[u + " " + s[0]] || l["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = l[o])
                                    : !0 !== l[o] &&
                                      ((i = s[0]), c.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? e
                                      : "No conversion from " + u + " to " + i,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(d, b, C, f)),
                    f
                      ? (d.ifModified &&
                          ((w = C.getResponseHeader("Last-Modified")) &&
                            (S.lastModified[o] = w),
                          (w = C.getResponseHeader("etag")) && (S.etag[o] = w)),
                        204 === e || "HEAD" === d.type
                          ? (T = "nocontent")
                          : 304 === e
                            ? (T = "notmodified")
                            : ((T = b.state),
                              (p = b.data),
                              (f = !(x = b.error))))
                      : ((x = T),
                        (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                    (C.status = e),
                    (C.statusText = (t || T) + ""),
                    f
                      ? v.resolveWith(h, [p, T, C])
                      : v.rejectWith(h, [C, T, x]),
                    C.statusCode(m),
                    (m = void 0),
                    c &&
                      g.trigger(f ? "ajaxSuccess" : "ajaxError", [
                        C,
                        d,
                        f ? p : x,
                      ]),
                    y.fireWith(h, [C, T]),
                    c &&
                      (g.trigger("ajaxComplete", [C, d]),
                      --S.active || S.event.trigger("ajaxStop")));
                }
                return C;
              },
              getJSON: function (e, t, n) {
                return S.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return S.get(e, void 0, t, "script");
              },
            }),
            S.each(["get", "post"], function (e, t) {
              S[t] = function (e, n, r, o) {
                return (
                  y(n) && ((o = o || r), (r = n), (n = void 0)),
                  S.ajax(
                    S.extend(
                      { url: e, type: t, dataType: o, data: n, success: r },
                      S.isPlainObject(e) && e,
                    ),
                  )
                );
              };
            }),
            S.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (S._evalUrl = function (e, t, n) {
              return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  S.globalEval(e, t, n);
                },
              });
            }),
            S.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (y(e) && (e = e.call(this[0])),
                    (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return y(e)
                  ? this.each(function (t) {
                      S(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = S(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = y(e);
                return this.each(function (n) {
                  S(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      S(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (S.expr.pseudos.hidden = function (e) {
              return !S.expr.pseudos.visible(e);
            }),
            (S.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (S.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var Kt = { 0: 200, 1223: 204 },
            Zt = S.ajaxSettings.xhr();
          (v.cors = !!Zt && "withCredentials" in Zt),
            (v.ajax = Zt = !!Zt),
            S.ajaxTransport(function (e) {
              var t, n;
              if (v.cors || (Zt && !e.crossDomain))
                return {
                  send: function (o, i) {
                    var a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      o["X-Requested-With"] ||
                      (o["X-Requested-With"] = "XMLHttpRequest"),
                    o))
                      s.setRequestHeader(a, o[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                              ? "number" != typeof s.status
                                ? i(0, "error")
                                : i(s.status, s.statusText)
                              : i(
                                  Kt[s.status] || s.status,
                                  s.statusText,
                                  "text" !== (s.responseType || "text") ||
                                    "string" != typeof s.responseText
                                    ? { binary: s.response }
                                    : { text: s.responseText },
                                  s.getAllResponseHeaders(),
                                ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              r.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            S.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            S.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return S.globalEval(e), e;
                },
              },
            }),
            S.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            S.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, o) {
                    (t = S("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && o("error" === e.type ? 404 : 200, e.type);
                        }),
                      )),
                      x.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var en,
            tn = [],
            nn = /(=)\?(?=&|$)|\?\?/;
          S.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = tn.pop() || S.expando + "_" + Nt.guid++;
              return (this[e] = !0), e;
            },
          }),
            S.ajaxPrefilter("json jsonp", function (e, t, n) {
              var o,
                i,
                a,
                s =
                  !1 !== e.jsonp &&
                  (nn.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded",
                        ) &&
                      nn.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (o = e.jsonpCallback =
                    y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(nn, "$1" + o))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Ot.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                  (e.converters["script json"] = function () {
                    return a || S.error(o + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (i = r[o]),
                  (r[o] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === i ? S(r).removeProp(o) : (r[o] = i),
                      e[o] && ((e.jsonpCallback = t.jsonpCallback), tn.push(o)),
                      a && y(i) && i(a[0]),
                      (a = i = void 0);
                  }),
                  "script"
                );
            }),
            (v.createHTMLDocument =
              (((en = x.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === en.childNodes.length)),
            (S.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (v.createHTMLDocument
                      ? (((r = (t =
                          x.implementation.createHTMLDocument(
                            "",
                          )).createElement("base")).href = x.location.href),
                        t.head.appendChild(r))
                      : (t = x)),
                  (i = !n && []),
                  (o = F.exec(e))
                    ? [t.createElement(o[1])]
                    : ((o = qe([e], t, i)),
                      i && i.length && S(i).remove(),
                      S.merge([], o.childNodes)));
              var r, o, i;
            }),
            (S.fn.load = function (e, t, n) {
              var r,
                o,
                i,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((r = St(e.slice(s))), (e = e.slice(0, s))),
                y(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (o = "POST"),
                a.length > 0 &&
                  S.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (i = arguments),
                        a.html(
                          r ? S("<div>").append(S.parseHTML(e)).find(r) : e,
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, i || [e.responseText, t, e]);
                          });
                        },
                    ),
                this
              );
            }),
            (S.expr.pseudos.animated = function (e) {
              return S.grep(S.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (S.offset = {
              setOffset: function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l = S.css(e, "position"),
                  c = S(e),
                  f = {};
                "static" === l && (e.style.position = "relative"),
                  (s = c.offset()),
                  (i = S.css(e, "top")),
                  (u = S.css(e, "left")),
                  ("absolute" === l || "fixed" === l) &&
                  (i + u).indexOf("auto") > -1
                    ? ((a = (r = c.position()).top), (o = r.left))
                    : ((a = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
                  y(t) && (t = t.call(e, n, S.extend({}, s))),
                  null != t.top && (f.top = t.top - s.top + a),
                  null != t.left && (f.left = t.left - s.left + o),
                  "using" in t ? t.using.call(e, f) : c.css(f);
              },
            }),
            S.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        S.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    o = { top: 0, left: 0 };
                  if ("fixed" === S.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === S.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((o = S(e).offset()).top += S.css(
                        e,
                        "borderTopWidth",
                        !0,
                      )),
                      (o.left += S.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - o.top - S.css(r, "marginTop", !0),
                    left: t.left - o.left - S.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === S.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ge;
                });
              },
            }),
            S.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                S.fn[e] = function (r) {
                  return ee(
                    this,
                    function (e, r, o) {
                      var i;
                      if (
                        (m(e)
                          ? (i = e)
                          : 9 === e.nodeType && (i = e.defaultView),
                        void 0 === o)
                      )
                        return i ? i[t] : e[r];
                      i
                        ? i.scrollTo(
                            n ? i.pageXOffset : o,
                            n ? o : i.pageYOffset,
                          )
                        : (e[r] = o);
                    },
                    e,
                    r,
                    arguments.length,
                  );
                };
              },
            ),
            S.each(["top", "left"], function (e, t) {
              S.cssHooks[t] = et(v.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Ze(e, t)), Ye.test(n) ? S(e).position()[t] + "px" : n
                  );
              });
            }),
            S.each({ Height: "height", Width: "width" }, function (e, t) {
              S.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  S.fn[r] = function (o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                      s = n || (!0 === o || !0 === i ? "margin" : "border");
                    return ee(
                      this,
                      function (t, n, o) {
                        var i;
                        return m(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                            ? ((i = t.documentElement),
                              Math.max(
                                t.body["scroll" + e],
                                i["scroll" + e],
                                t.body["offset" + e],
                                i["offset" + e],
                                i["client" + e],
                              ))
                            : void 0 === o
                              ? S.css(t, n, s)
                              : S.style(t, n, o, s);
                      },
                      t,
                      a ? o : void 0,
                      a,
                    );
                  };
                },
              );
            }),
            S.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                S.fn[t] = function (e) {
                  return this.on(t, e);
                };
              },
            ),
            S.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.on("mouseenter", e).on("mouseleave", t || e);
              },
            }),
            S.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " ",
              ),
              function (e, t) {
                S.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              },
            );
          var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (S.proxy = function (e, t) {
            var n, r, o;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
              return (
                (r = s.call(arguments, 2)),
                (o = function () {
                  return e.apply(t || this, r.concat(s.call(arguments)));
                }),
                (o.guid = e.guid = e.guid || S.guid++),
                o
              );
          }),
            (S.holdReady = function (e) {
              e ? S.readyWait++ : S.ready(!0);
            }),
            (S.isArray = Array.isArray),
            (S.parseJSON = JSON.parse),
            (S.nodeName = j),
            (S.isFunction = y),
            (S.isWindow = m),
            (S.camelCase = oe),
            (S.type = T),
            (S.now = Date.now),
            (S.isNumeric = function (e) {
              var t = S.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (S.trim = function (e) {
              return null == e ? "" : (e + "").replace(rn, "$1");
            }),
            void 0 ===
              (n = function () {
                return S;
              }.apply(t, [])) || (e.exports = n);
          var on = r.jQuery,
            an = r.$;
          return (
            (S.noConflict = function (e) {
              return (
                r.$ === S && (r.$ = an),
                e && r.jQuery === S && (r.jQuery = on),
                S
              );
            }),
            void 0 === o && (r.jQuery = r.$ = S),
            S
          );
        });
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
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
      const t = (e) => {
        const t = e.split("/videos/")[1],
          n = /[\D]+(?=[\_])|[\d]+_?[\d]+/g;
        let r;
        if (((r = t ? t.match(n) : e.split("/watch/")[1].match(n)), r)) {
          var o;
          let e = 0;
          for (; r[e] && r[e].length < 15; ) e++;
          return null !== (o = r[e]) && void 0 !== o ? o : null;
        }
        return null;
      };
      function r(e) {
        return (
          (r =
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
          r(e)
        );
      }
      function o(e) {
        var t = (function (e, t) {
          if ("object" != r(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" != r(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == r(t) ? t : t + "";
      }
      function i(e, t, n) {
        return (
          (t = o(t)) in e
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
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      const u = (e, t, n) => {
        const r = { filename: e, type: "video", url: t };
        return n
          ? new Promise((e) => {
              e(s(s({}, r), {}, { headers: n }));
            })
          : (async (e) => {
              const t = await fetch(e, { method: "HEAD" }),
                n = {};
              return (
                t.headers.forEach((e, t) => {
                  n[t] = e;
                }),
                n
              );
            })(t).then((e) => s(s({}, r), {}, { headers: e }));
      };
      var l = n(613),
        c = n.n(l);
      const f = "VD_ext_class",
        p = function () {
          c()("video")
            .not("." + f)
            .each((n, r) => {
              const o = c()(r);
              o.addClass(f);
              const i =
                  o.closest(
                    ".x1ey2m1c.xds687c.x5yr21d.x10l6tqk.x17qophe.x13vifvy.xh8yej3",
                  )[0] ||
                  o.closest(
                    ".xal61yo.x5yr21d.x6ikm8r.x10wlt62.x1n2onr6.xh8yej3",
                  )[0] ||
                  o.closest(
                    ".x5yr21d.x6ikm8r.x10wlt62.x1n2onr6.xh8yej3.x2bj2ny",
                  )[0],
                a = c()(i);
              let s;
              var l;
              0 === a.find("a").length
                ? (s = t(window.location.href))
                : (s = t(
                    null !== (l = a.find("a").attr("href")) && void 0 !== l
                      ? l
                      : "",
                  ));
              s &&
                chrome.storage.local.get(["currentFb_dtsgToken"], (t) => {
                  const n = t.currentFb_dtsgToken;
                  if (n && "string" == typeof s) {
                    const t = ((e) => {
                        let t = ("; " + document.cookie).split("; " + e + "=");
                        var n;
                        if (2 === t.length)
                          return null === (n = t.pop()) || void 0 === n
                            ? void 0
                            : n.split(";").shift();
                      })("c_user"),
                      r = {},
                      o = [];
                    fetch(
                      "https://www.facebook.com/video/video_data_async/?video_id="
                        .concat(s, "&fb_dtsg_ag=")
                        .concat(n, "&__user=")
                        .concat(t, "&__a=1"),
                    )
                      .then((e) => e.text())
                      .then((e) => JSON.parse(e.replace("for (;;);", "")))
                      .then((t) => {
                        (r.hd_src = t.payload.hd_src),
                          (r.sd_src = t.payload.sd_src),
                          u(
                            "video_".concat(s),
                            r.hd_src || r.sd_src || "",
                          ).then((t) => {
                            var n;
                            o.push(t),
                              (n = {
                                list: o,
                                header: "video_".concat(s),
                                id: s,
                              }),
                              chrome.runtime.sendMessage({
                                action: e.Default,
                                body: n,
                              });
                          });
                      });
                  }
                });
            });
        };
      c()(window).on("load", function () {
        setInterval(() => {
          p();
        }, 1e3);
      }),
        chrome.runtime.onMessage.addListener((e) => {
          "pageUpdated" === e.action && p();
        });
    })();
})();
//# sourceMappingURL=facebookContent.js.map
