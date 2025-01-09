(() => {
  var e,
    t,
    n = {
      730: (e, t, n) => {
        "use strict";
        /**
         * @license React
         * react-dom.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var r = n(43),
          o = n(853);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function c(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var u = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = g.hasOwnProperty(t) ? g[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
                ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
                : ((t = o.attributeName),
                  (r = o.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n =
                        3 === (o = o.type) || (4 === o && !0 === n)
                          ? ""
                          : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1,
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          w = Symbol.for("react.fragment"),
          C = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          _ = Symbol.for("react.provider"),
          O = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          j = Symbol.for("react.suspense"),
          T = Symbol.for("react.suspense_list"),
          N = Symbol.for("react.memo"),
          M = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var z = Symbol.iterator;
        function R(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (z && e[z]) || e["@@iterator"])
              ? e
              : null;
        }
        var I,
          A = Object.assign;
        function H(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || "";
            }
          return "\n" + I + e;
        }
        var B = !1;
        function F(e, t) {
          if (!e || B) return "";
          B = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (t) {
            if (t && r && "string" == typeof t.stack) {
              for (
                var o = t.stack.split("\n"),
                  a = r.stack.split("\n"),
                  i = o.length - 1,
                  l = a.length - 1;
                1 <= i && 0 <= l && o[i] !== a[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || o[i] !== a[l])) {
                        var c = "\n" + o[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (B = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? H(e) : "";
        }
        function D(e) {
          switch (e.tag) {
            case 5:
              return H(e.type);
            case 16:
              return H("Lazy");
            case 13:
              return H("Suspense");
            case 19:
              return H("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = F(e.type, !1));
            case 11:
              return (e = F(e.type.render, !1));
            case 1:
              return (e = F(e.type, !0));
            default:
              return "";
          }
        }
        function U(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case w:
              return "Fragment";
            case k:
              return "Portal";
            case E:
              return "Profiler";
            case C:
              return "StrictMode";
            case j:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case O:
                return (e.displayName || "Context") + ".Consumer";
              case _:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case N:
                return null !== (t = e.displayName || null)
                  ? t
                  : U(e.type) || "Memo";
              case M:
                (t = e._payload), (e = e._init);
                try {
                  return U(e(t));
                } catch (e) {}
            }
          return null;
        }
        function V(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return U(t);
            case 8:
              return t === C ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" == typeof t)
                return t.displayName || t.name || null;
              if ("string" == typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function G(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== n &&
                "function" == typeof n.get &&
                "function" == typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function X(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Q(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function K(e, t) {
          var n = t.checked;
          return A({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function q(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Y(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          Y(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return A({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function ae(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ce(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
              ? "http://www.w3.org/1999/xhtml"
              : e;
        }
        var se,
          ue,
          de =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : n ||
                "number" != typeof t ||
                0 === t ||
                (pe.hasOwnProperty(e) && pe[e])
              ? ("" + t).trim()
              : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = A(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        );
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" != typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" != typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          we = null,
          Ce = null;
        function Ee(e) {
          if ((e = xo(e))) {
            if ("function" != typeof ke) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = ko(t)), ke(e.stateNode, e.type, t));
          }
        }
        function _e(e) {
          we ? (Ce ? Ce.push(e) : (Ce = [e])) : (we = e);
        }
        function Oe() {
          if (we) {
            var e = we,
              t = Ce;
            if (((Ce = we = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function je() {}
        var Te = !1;
        function Ne(e, t, n) {
          if (Te) return e(t, n);
          Te = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Te = !1), (null !== we || null !== Ce) && (je(), Oe());
          }
        }
        function Me(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ko(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (u)
          try {
            var ze = {};
            Object.defineProperty(ze, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", ze, ze),
              window.removeEventListener("test", ze, ze);
          } catch (ue) {
            Le = !1;
          }
        function Re(e, t, n, r, o, a, i, l, c) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (e) {
            this.onError(e);
          }
        }
        var Ie = !1,
          Ae = null,
          He = !1,
          Be = null,
          Fe = {
            onError: function (e) {
              (Ie = !0), (Ae = e);
            },
          };
        function De(e, t, n, r, o, a, i, l, c) {
          (Ie = !1), (Ae = null), Re.apply(Fe, arguments);
        }
        function Ue(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              !!(4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (Ue(e) !== e) throw Error(a(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ue(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return We(o), e;
                    if (i === r) return We(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var l = !1, c = o.child; c; ) {
                    if (c === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    if (c === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    c = c.sibling;
                  }
                  if (!l) {
                    for (c = i.child; c; ) {
                      if (c === n) {
                        (l = !0), (n = i), (r = o);
                        break;
                      }
                      if (c === r) {
                        (l = !0), (r = i), (n = o);
                        break;
                      }
                      c = c.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ge(e)
            : null;
        }
        function Ge(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ge(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Xe = o.unstable_scheduleCallback,
          Qe = o.unstable_cancelCallback,
          Ke = o.unstable_shouldYield,
          qe = o.unstable_requestPaint,
          Ye = o.unstable_now,
          Ze = o.unstable_getCurrentPriorityLevel,
          Je = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          at = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / ct) | 0)) | 0;
              },
          lt = Math.log,
          ct = Math.LN2;
        var st = 64,
          ut = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~o;
            0 !== l ? (r = dt(l)) : 0 !== (a &= i) && (r = dt(a));
          } else 0 !== (i = n & ~o) ? (r = dt(i)) : 0 !== a && (r = dt(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            !(t & o) &&
            ((o = r & -r) >= (a = t & -t) || (16 === o && 4194240 & a))
          )
            return t;
          if ((4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0;
        }
        function mt() {
          var e = st;
          return !(4194240 & (st <<= 1)) && (st = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 268435455 & e
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var St,
          kt,
          wt,
          Ct,
          Et,
          _t = !1,
          Ot = [],
          Pt = null,
          jt = null,
          Tt = null,
          Nt = new Map(),
          Mt = new Map(),
          Lt = [],
          zt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function Rt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              jt = null;
              break;
            case "mouseover":
            case "mouseout":
              Tt = null;
              break;
            case "pointerover":
            case "pointerout":
              Nt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Mt.delete(t.pointerId);
          }
        }
        function It(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = xo(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function At(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = Ue(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      wt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ht(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = xo(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Bt(e, t, n) {
          Ht(e) && n.delete(t);
        }
        function Ft() {
          (_t = !1),
            null !== Pt && Ht(Pt) && (Pt = null),
            null !== jt && Ht(jt) && (jt = null),
            null !== Tt && Ht(Tt) && (Tt = null),
            Nt.forEach(Bt),
            Mt.forEach(Bt);
        }
        function Dt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            _t ||
              ((_t = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, Ft)));
        }
        function Ut(e) {
          function t(t) {
            return Dt(t, e);
          }
          if (0 < Ot.length) {
            Dt(Ot[0], e);
            for (var n = 1; n < Ot.length; n++) {
              var r = Ot[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Dt(Pt, e),
              null !== jt && Dt(jt, e),
              null !== Tt && Dt(Tt, e),
              Nt.forEach(t),
              Mt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            At(n), null === n.blockedOn && Lt.shift();
        }
        var Vt = x.ReactCurrentBatchConfig,
          Wt = !0;
        function $t(e, t, n, r) {
          var o = bt,
            a = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 1), Xt(e, t, n, r);
          } finally {
            (bt = o), (Vt.transition = a);
          }
        }
        function Gt(e, t, n, r) {
          var o = bt,
            a = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 4), Xt(e, t, n, r);
          } finally {
            (bt = o), (Vt.transition = a);
          }
        }
        function Xt(e, t, n, r) {
          if (Wt) {
            var o = Kt(e, t, n, r);
            if (null === o) Wr(e, t, r, Qt, n), Rt(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return (Pt = It(Pt, e, t, n, r, o)), !0;
                  case "dragenter":
                    return (jt = It(jt, e, t, n, r, o)), !0;
                  case "mouseover":
                    return (Tt = It(Tt, e, t, n, r, o)), !0;
                  case "pointerover":
                    var a = o.pointerId;
                    return Nt.set(a, It(Nt.get(a) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return (
                      (a = o.pointerId),
                      Mt.set(a, It(Mt.get(a) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Rt(e, r), 4 & t && -1 < zt.indexOf(e))) {
              for (; null !== o; ) {
                var a = xo(o);
                if (
                  (null !== a && St(a),
                  null === (a = Kt(e, t, n, r)) && Wr(e, t, r, Qt, n),
                  a === o)
                )
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Qt = null;
        function Kt(e, t, n, r) {
          if (((Qt = null), null !== (e = bo((e = Se(r))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
        }
        function qt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Yt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            o = "value" in Yt ? Yt.value : Yt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (Jt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            A(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          ln,
          cn,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = on(sn),
          dn = A({}, sn, { view: 0, detail: 0 }),
          fn = on(dn),
          pn = A({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== cn &&
                    (cn && "mousemove" === e.type
                      ? ((an = e.screenX - cn.screenX),
                        (ln = e.screenY - cn.screenY))
                      : (ln = an = 0),
                    (cn = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = on(pn),
          mn = on(A({}, pn, { dataTransfer: 0 })),
          gn = on(A({}, dn, { relatedTarget: 0 })),
          vn = on(
            A({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yn = A({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = on(yn),
          xn = on(A({}, sn, { data: 0 })),
          Sn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          wn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Cn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = wn[e]) && !!t[e];
        }
        function En() {
          return Cn;
        }
        var _n = A({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? kn[e.keyCode] || "Unidentified"
                  : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
          On = on(_n),
          Pn = on(
            A({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          jn = on(
            A({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            }),
          ),
          Tn = on(
            A({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Nn = A({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Mn = on(Nn),
          Ln = [9, 13, 27, 32],
          zn = u && "CompositionEvent" in window,
          Rn = null;
        u && "documentMode" in document && (Rn = document.documentMode);
        var In = u && "TextEvent" in window && !Rn,
          An = u && (!zn || (Rn && 8 < Rn && 11 >= Rn)),
          Hn = String.fromCharCode(32),
          Bn = !1;
        function Fn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Dn(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Un = !1;
        var Vn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          _e(r),
            0 < (t = Gr(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Gn = null,
          Xn = null;
        function Qn(e) {
          Hr(e, 0);
        }
        function Kn(e) {
          if (X(So(e))) return e;
        }
        function qn(e, t) {
          if ("change" === e) return t;
        }
        var Yn = !1;
        if (u) {
          var Zn;
          if (u) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" == typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Yn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Gn && (Gn.detachEvent("onpropertychange", nr), (Xn = Gn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Kn(Xn)) {
            var t = [];
            $n(t, Xn, e, Se(e)), Ne(Qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Xn = n), (Gn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function or(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kn(Xn);
        }
        function ar(e, t) {
          if ("click" === e) return Kn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Kn(t);
        }
        var lr =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              };
        function cr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!d.call(t, o) || !lr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ur(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  a = Math.min(r.start, o);
                (r = void 0 === r.end ? a : Math.min(r.end, o)),
                  !e.extend && a > r && ((o = r), (r = a), (a = o)),
                  (o = ur(n, a));
                var i = ur(n, r);
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" == typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = u && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          br ||
            null == gr ||
            gr !== Q(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && cr(yr, r)) ||
              ((yr = r),
              0 < (r = Gr(vr, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: Sr("Animation", "AnimationEnd"),
            animationiteration: Sr("Animation", "AnimationIteration"),
            animationstart: Sr("Animation", "AnimationStart"),
            transitionend: Sr("Transition", "TransitionEnd"),
          },
          wr = {},
          Cr = {};
        function Er(e) {
          if (wr[e]) return wr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Cr) return (wr[e] = n[t]);
          return e;
        }
        u &&
          ((Cr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var _r = Er("animationend"),
          Or = Er("animationiteration"),
          Pr = Er("animationstart"),
          jr = Er("transitionend"),
          Tr = new Map(),
          Nr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Mr(e, t) {
          Tr.set(e, t), c(t, [e]);
        }
        for (var Lr = 0; Lr < Nr.length; Lr++) {
          var zr = Nr[Lr];
          Mr(zr.toLowerCase(), "on" + (zr[0].toUpperCase() + zr.slice(1)));
        }
        Mr(_r, "onAnimationEnd"),
          Mr(Or, "onAnimationIteration"),
          Mr(Pr, "onAnimationStart"),
          Mr("dblclick", "onDoubleClick"),
          Mr("focusin", "onFocus"),
          Mr("focusout", "onBlur"),
          Mr(jr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          c(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          c(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          c("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          c(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          c(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          c(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          );
        var Rr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Ir = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Rr),
          );
        function Ar(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, i, l, c, s) {
              if ((De.apply(this, arguments), Ie)) {
                if (!Ie) throw Error(a(198));
                var u = Ae;
                (Ie = !1), (Ae = null), He || ((He = !0), (Be = u));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Hr(e, t) {
          t = !!(4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    c = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), c !== a && o.isPropagationStopped()))
                    break e;
                  Ar(o, l, s), (a = c);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((c = (l = r[i]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    c !== a && o.isPropagationStopped())
                  )
                    break e;
                  Ar(o, l, s), (a = c);
                }
            }
          }
          if (He) throw ((e = Be), (He = !1), (Be = null), e);
        }
        function Br(e, t) {
          var n = t[go];
          void 0 === n && (n = t[go] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function Fr(e, t, n) {
          var r = 0;
          t && (r |= 4), Vr(n, e, r, t);
        }
        var Dr = "_reactListening" + Math.random().toString(36).slice(2);
        function Ur(e) {
          if (!e[Dr]) {
            (e[Dr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ir.has(t) || Fr(t, !1, e), Fr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Dr] || ((t[Dr] = !0), Fr("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (qt(t)) {
            case 1:
              var o = $t;
              break;
            case 4:
              o = Gt;
              break;
            default:
              o = Xt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
                ? e.addEventListener(t, n, { passive: o })
                : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, o) {
          var a = r;
          if (!(1 & t || 2 & t || null === r))
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var c = i.tag;
                    if (
                      (3 === c || 4 === c) &&
                      ((c = i.stateNode.containerInfo) === o ||
                        (8 === c.nodeType && c.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = bo(l))) return;
                  if (5 === (c = i.tag) || 6 === c) {
                    r = a = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Ne(function () {
            var r = a,
              o = Se(n),
              i = [];
            e: {
              var l = Tr.get(e);
              if (void 0 !== l) {
                var c = un,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    c = On;
                    break;
                  case "focusin":
                    (s = "focus"), (c = gn);
                    break;
                  case "focusout":
                    (s = "blur"), (c = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    c = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    c = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    c = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    c = jn;
                    break;
                  case _r:
                  case Or:
                  case Pr:
                    c = vn;
                    break;
                  case jr:
                    c = Tn;
                    break;
                  case "scroll":
                    c = fn;
                    break;
                  case "wheel":
                    c = Mn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    c = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    c = Pn;
                }
                var u = !!(4 & t),
                  d = !u && "scroll" === e,
                  f = u ? (null !== l ? l + "Capture" : null) : l;
                u = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Me(h, f)) &&
                        u.push($r(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < u.length &&
                  ((l = new c(l, s, null, n, o)),
                  i.push({ event: l, listeners: u }));
              }
            }
            if (!(7 & t)) {
              if (
                ((c = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!bo(s) && !s[mo])) &&
                  (c || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                        ? l.defaultView || l.parentWindow
                        : window),
                  c
                    ? ((c = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? bo(s)
                          : null) &&
                        (s !== (d = Ue(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((c = null), (s = r)),
                  c !== s))
              ) {
                if (
                  ((u = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = Pn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == c ? l : So(c)),
                  (p = null == s ? l : So(s)),
                  ((l = new u(m, h + "leave", c, n, o)).target = d),
                  (l.relatedTarget = p),
                  (m = null),
                  bo(o) === r &&
                    (((u = new u(f, h + "enter", s, n, o)).target = p),
                    (u.relatedTarget = d),
                    (m = u)),
                  (d = m),
                  c && s)
                )
                  e: {
                    for (f = s, h = 0, p = u = c; p; p = Xr(p)) h++;
                    for (p = 0, m = f; m; m = Xr(m)) p++;
                    for (; 0 < h - p; ) (u = Xr(u)), h--;
                    for (; 0 < p - h; ) (f = Xr(f)), p--;
                    for (; h--; ) {
                      if (u === f || (null !== f && u === f.alternate)) break e;
                      (u = Xr(u)), (f = Xr(f));
                    }
                    u = null;
                  }
                else u = null;
                null !== c && Qr(i, l, c, u, !1),
                  null !== s && null !== d && Qr(i, d, s, u, !0);
              }
              if (
                "select" ===
                  (c =
                    (l = r ? So(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === c && "file" === l.type)
              )
                var g = qn;
              else if (Wn(l))
                if (Yn) g = ir;
                else {
                  g = or;
                  var v = rr;
                }
              else
                (c = l.nodeName) &&
                  "input" === c.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (g = ar);
              switch (
                (g && (g = g(e, r))
                  ? $n(i, g, n, o)
                  : (v && v(e, l, r),
                    "focusout" === e &&
                      (v = l._wrapperState) &&
                      v.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (v = r ? So(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), xr(i, n, o);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  xr(i, n, o);
              }
              var y;
              if (zn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Un
                  ? Fn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (An &&
                  "ko" !== n.locale &&
                  (Un || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Un && (y = en())
                    : ((Zt = "value" in (Yt = o) ? Yt.value : Yt.textContent),
                      (Un = !0))),
                0 < (v = Gr(r, b)).length &&
                  ((b = new xn(b, e, null, n, o)),
                  i.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Dn(n)) && (b.data = y))),
                (y = In
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Dn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Bn = !0), Hn);
                        case "textInput":
                          return (e = t.data) === Hn && Bn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return "compositionend" === e || (!zn && Fn(e, t))
                          ? ((e = en()), (Jt = Zt = Yt = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return An && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Gr(r, "onBeforeInput")).length &&
                  ((o = new xn("onBeforeInput", "beforeinput", null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = y));
            }
            Hr(i, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Gr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Me(e, n)) && r.unshift($r(e, a, o)),
              null != (a = Me(e, t)) && r.push($r(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function Xr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              c = l.alternate,
              s = l.stateNode;
            if (null !== c && c === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              o
                ? null != (c = Me(n, a)) && i.unshift($r(n, c, l))
                : o || (null != (c = Me(n, a)) && i.push($r(n, c, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Kr = /\r\n?/g,
          qr = /\u0000|\uFFFD/g;
        function Yr(e) {
          return ("string" == typeof e ? e : "" + e)
            .replace(Kr, "\n")
            .replace(qr, "");
        }
        function Zr(e, t, n) {
          if (((t = Yr(t)), Yr(e) !== t && n)) throw Error(a(425));
        }
        function Jr() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = "function" == typeof setTimeout ? setTimeout : void 0,
          oo = "function" == typeof clearTimeout ? clearTimeout : void 0,
          ao = "function" == typeof Promise ? Promise : void 0,
          io =
            "function" == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== ao
                ? function (e) {
                    return ao.resolve(null).then(e).catch(lo);
                  }
                : ro;
        function lo(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function co(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Ut(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = o;
          } while (n);
          Ut(t);
        }
        function so(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function uo(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          po = "__reactFiber$" + fo,
          ho = "__reactProps$" + fo,
          mo = "__reactContainer$" + fo,
          go = "__reactEvents$" + fo,
          vo = "__reactListeners$" + fo,
          yo = "__reactHandles$" + fo;
        function bo(e) {
          var t = e[po];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[mo] || n[po])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = uo(e); null !== e; ) {
                  if ((n = e[po])) return n;
                  e = uo(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function xo(e) {
          return !(e = e[po] || e[mo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function So(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function ko(e) {
          return e[ho] || null;
        }
        var wo = [],
          Co = -1;
        function Eo(e) {
          return { current: e };
        }
        function _o(e) {
          0 > Co || ((e.current = wo[Co]), (wo[Co] = null), Co--);
        }
        function Oo(e, t) {
          Co++, (wo[Co] = e.current), (e.current = t);
        }
        var Po = {},
          jo = Eo(Po),
          To = Eo(!1),
          No = Po;
        function Mo(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Po;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Lo(e) {
          return null != (e = e.childContextTypes);
        }
        function zo() {
          _o(To), _o(jo);
        }
        function Ro(e, t, n) {
          if (jo.current !== Po) throw Error(a(168));
          Oo(jo, t), Oo(To, n);
        }
        function Io(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" != typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(a(108, V(e) || "Unknown", o));
          return A({}, n, r);
        }
        function Ao(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Po),
            (No = jo.current),
            Oo(jo, e),
            Oo(To, To.current),
            !0
          );
        }
        function Ho(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Io(e, t, No)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              _o(To),
              _o(jo),
              Oo(jo, e))
            : _o(To),
            Oo(To, n);
        }
        var Bo = null,
          Fo = !1,
          Do = !1;
        function Uo(e) {
          null === Bo ? (Bo = [e]) : Bo.push(e);
        }
        function Vo() {
          if (!Do && null !== Bo) {
            Do = !0;
            var e = 0,
              t = bt;
            try {
              var n = Bo;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Bo = null), (Fo = !1);
            } catch (t) {
              throw (null !== Bo && (Bo = Bo.slice(e + 1)), Xe(Je, Vo), t);
            } finally {
              (bt = t), (Do = !1);
            }
          }
          return null;
        }
        var Wo = [],
          $o = 0,
          Go = null,
          Xo = 0,
          Qo = [],
          Ko = 0,
          qo = null,
          Yo = 1,
          Zo = "";
        function Jo(e, t) {
          (Wo[$o++] = Xo), (Wo[$o++] = Go), (Go = e), (Xo = t);
        }
        function ea(e, t, n) {
          (Qo[Ko++] = Yo), (Qo[Ko++] = Zo), (Qo[Ko++] = qo), (qo = e);
          var r = Yo;
          e = Zo;
          var o = 32 - it(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - it(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (o -= i),
              (Yo = (1 << (32 - it(t) + o)) | (n << o) | r),
              (Zo = a + e);
          } else (Yo = (1 << a) | (n << o) | r), (Zo = e);
        }
        function ta(e) {
          null !== e.return && (Jo(e, 1), ea(e, 1, 0));
        }
        function na(e) {
          for (; e === Go; )
            (Go = Wo[--$o]), (Wo[$o] = null), (Xo = Wo[--$o]), (Wo[$o] = null);
          for (; e === qo; )
            (qo = Qo[--Ko]),
              (Qo[Ko] = null),
              (Zo = Qo[--Ko]),
              (Qo[Ko] = null),
              (Yo = Qo[--Ko]),
              (Qo[Ko] = null);
        }
        var ra = null,
          oa = null,
          aa = !1,
          ia = null;
        function la(e, t) {
          var n = Ns(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ca(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ra = e), (oa = so(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ra = e), (oa = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== qo ? { id: Yo, overflow: Zo } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ns(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ra = e),
                (oa = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sa(e) {
          return !(!(1 & e.mode) || 128 & e.flags);
        }
        function ua(e) {
          if (aa) {
            var t = oa;
            if (t) {
              var n = t;
              if (!ca(e, t)) {
                if (sa(e)) throw Error(a(418));
                t = so(n.nextSibling);
                var r = ra;
                t && ca(e, t)
                  ? la(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e));
              }
            } else {
              if (sa(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e);
            }
          }
        }
        function da(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ra = e;
        }
        function fa(e) {
          if (e !== ra) return !1;
          if (!aa) return da(e), (aa = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !no(e.type, e.memoizedProps)),
            t && (t = oa))
          ) {
            if (sa(e)) throw (pa(), Error(a(418)));
            for (; t; ) la(e, t), (t = so(t.nextSibling));
          }
          if ((da(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      oa = so(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              oa = null;
            }
          } else oa = ra ? so(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pa() {
          for (var e = oa; e; ) e = so(e.nextSibling);
        }
        function ha() {
          (oa = ra = null), (aa = !1);
        }
        function ma(e) {
          null === ia ? (ia = [e]) : ia.push(e);
        }
        var ga = x.ReactCurrentBatchConfig;
        function va(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" != typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function ya(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            ))
          );
        }
        function ba(e) {
          return (0, e._init)(e._payload);
        }
        function xa(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Ls(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function c(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = As(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var a = n.type;
            return a === w
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === a ||
                    ("object" == typeof a &&
                      null !== a &&
                      a.$$typeof === M &&
                      ba(a) === t.type))
                ? (((r = o(t, n.props)).ref = va(e, t, n)), (r.return = e), r)
                : (((r = zs(n.type, n.key, n.props, null, e.mode, r)).ref = va(
                    e,
                    t,
                    n,
                  )),
                  (r.return = e),
                  r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Hs(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Rs(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" == typeof t && "" !== t) || "number" == typeof t)
              return ((t = As("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = zs(t.type, t.key, t.props, null, e.mode, n)).ref = va(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Hs(t, e.mode, n)).return = e), t;
                case M:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || R(t))
                return ((t = Rs(t, e.mode, n, null)).return = e), t;
              ya(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (("string" == typeof n && "" !== n) || "number" == typeof n)
              return null !== o ? null : c(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === o ? s(e, t, n, r) : null;
                case k:
                  return n.key === o ? u(e, t, n, r) : null;
                case M:
                  return p(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || R(n)) return null !== o ? null : d(e, t, n, r, null);
              ya(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if (("string" == typeof r && "" !== r) || "number" == typeof r)
              return c(t, (e = e.get(n) || null), "" + r, o);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o,
                  );
                case k:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o,
                  );
                case M:
                  return h(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || R(r))
                return d(t, (e = e.get(n) || null), r, o, null);
              ya(t, r);
            }
            return null;
          }
          function m(o, a, l, c) {
            for (
              var s = null, u = null, d = a, m = (a = 0), g = null;
              null !== d && m < l.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var v = p(o, d, l[m], c);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(o, d),
                (a = i(v, a, m)),
                null === u ? (s = v) : (u.sibling = v),
                (u = v),
                (d = g);
            }
            if (m === l.length) return n(o, d), aa && Jo(o, m), s;
            if (null === d) {
              for (; m < l.length; m++)
                null !== (d = f(o, l[m], c)) &&
                  ((a = i(d, a, m)),
                  null === u ? (s = d) : (u.sibling = d),
                  (u = d));
              return aa && Jo(o, m), s;
            }
            for (d = r(o, d); m < l.length; m++)
              null !== (g = h(d, o, m, l[m], c)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (a = i(g, a, m)),
                null === u ? (s = g) : (u.sibling = g),
                (u = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Jo(o, m),
              s
            );
          }
          function g(o, l, c, s) {
            var u = R(c);
            if ("function" != typeof u) throw Error(a(150));
            if (null == (c = u.call(c))) throw Error(a(151));
            for (
              var d = (u = null), m = l, g = (l = 0), v = null, y = c.next();
              null !== m && !y.done;
              g++, y = c.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = p(o, m, y.value, s);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (l = i(b, l, g)),
                null === d ? (u = b) : (d.sibling = b),
                (d = b),
                (m = v);
            }
            if (y.done) return n(o, m), aa && Jo(o, g), u;
            if (null === m) {
              for (; !y.done; g++, y = c.next())
                null !== (y = f(o, y.value, s)) &&
                  ((l = i(y, l, g)),
                  null === d ? (u = y) : (d.sibling = y),
                  (d = y));
              return aa && Jo(o, g), u;
            }
            for (m = r(o, m); !y.done; g++, y = c.next())
              null !== (y = h(m, o, g, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (l = i(y, l, g)),
                null === d ? (u = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Jo(o, g),
              u
            );
          }
          return function e(r, a, i, c) {
            if (
              ("object" == typeof i &&
                null !== i &&
                i.type === w &&
                null === i.key &&
                (i = i.props.children),
              "object" == typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case S:
                  e: {
                    for (var s = i.key, u = a; null !== u; ) {
                      if (u.key === s) {
                        if ((s = i.type) === w) {
                          if (7 === u.tag) {
                            n(r, u.sibling),
                              ((a = o(u, i.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          u.elementType === s ||
                          ("object" == typeof s &&
                            null !== s &&
                            s.$$typeof === M &&
                            ba(s) === u.type)
                        ) {
                          n(r, u.sibling),
                            ((a = o(u, i.props)).ref = va(r, u, i)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, u);
                        break;
                      }
                      t(r, u), (u = u.sibling);
                    }
                    i.type === w
                      ? (((a = Rs(i.props.children, r.mode, c, i.key)).return =
                          r),
                        (r = a))
                      : (((c = zs(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          c,
                        )).ref = va(r, a, i)),
                        (c.return = r),
                        (r = c));
                  }
                  return l(r);
                case k:
                  e: {
                    for (u = i.key; null !== a; ) {
                      if (a.key === u) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = o(a, i.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Hs(i, r.mode, c)).return = r), (r = a);
                  }
                  return l(r);
                case M:
                  return e(r, a, (u = i._init)(i._payload), c);
              }
              if (te(i)) return m(r, a, i, c);
              if (R(i)) return g(r, a, i, c);
              ya(r, i);
            }
            return ("string" == typeof i && "" !== i) || "number" == typeof i
              ? ((i = "" + i),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
                  : (n(r, a), ((a = As(i, r.mode, c)).return = r), (r = a)),
                l(r))
              : n(r, a);
          };
        }
        var Sa = xa(!0),
          ka = xa(!1),
          wa = Eo(null),
          Ca = null,
          Ea = null,
          _a = null;
        function Oa() {
          _a = Ea = Ca = null;
        }
        function Pa(e) {
          var t = wa.current;
          _o(wa), (e._currentValue = t);
        }
        function ja(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ta(e, t) {
          (Ca = e),
            (_a = Ea = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (!!(e.lanes & t) && (bl = !0), (e.firstContext = null));
        }
        function Na(e) {
          var t = e._currentValue;
          if (_a !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Ea)
            ) {
              if (null === Ca) throw Error(a(308));
              (Ea = e), (Ca.dependencies = { lanes: 0, firstContext: e });
            } else Ea = Ea.next = e;
          return t;
        }
        var Ma = null;
        function La(e) {
          null === Ma ? (Ma = [e]) : Ma.push(e);
        }
        function za(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o
              ? ((n.next = n), La(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            Ra(e, r)
          );
        }
        function Ra(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ia = !1;
        function Aa(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ha(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ba(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Fa(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 2 & Pc)) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              Ra(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), La(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            Ra(e, n)
          );
        }
        function Da(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Ua(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Va(e, t, n, r) {
          var o = e.updateQueue;
          Ia = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var c = l,
              s = c.next;
            (c.next = null), null === i ? (a = s) : (i.next = s), (i = c);
            var u = e.alternate;
            null !== u &&
              (l = (u = u.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (u.firstBaseUpdate = s) : (l.next = s),
              (u.lastBaseUpdate = c));
          }
          if (null !== a) {
            var d = o.baseState;
            for (i = 0, u = s = c = null, l = a; ; ) {
              var f = l.lane,
                p = l.eventTime;
              if ((r & f) === f) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = l;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" == typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (f =
                          "function" == typeof (h = m.payload)
                            ? h.call(p, d, f)
                            : h)
                      )
                        break e;
                      d = A({}, d, f);
                      break e;
                    case 2:
                      Ia = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (f = o.effects) ? (o.effects = [l]) : f.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === u ? ((s = u = p), (c = d)) : (u = u.next = p),
                  (i |= f);
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                (l = (f = l).next),
                  (f.next = null),
                  (o.lastBaseUpdate = f),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === u && (c = d),
              (o.baseState = c),
              (o.firstBaseUpdate = s),
              (o.lastBaseUpdate = u),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (i |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (Ic |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Wa(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" != typeof o))
                  throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var $a = {},
          Ga = Eo($a),
          Xa = Eo($a),
          Qa = Eo($a);
        function Ka(e) {
          if (e === $a) throw Error(a(174));
          return e;
        }
        function qa(e, t) {
          switch ((Oo(Qa, t), Oo(Xa, e), Oo(Ga, $a), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ce(null, "");
              break;
            default:
              t = ce(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          _o(Ga), Oo(Ga, t);
        }
        function Ya() {
          _o(Ga), _o(Xa), _o(Qa);
        }
        function Za(e) {
          Ka(Qa.current);
          var t = Ka(Ga.current),
            n = ce(t, e.type);
          t !== n && (Oo(Xa, e), Oo(Ga, n));
        }
        function Ja(e) {
          Xa.current === e && (_o(Ga), _o(Xa));
        }
        var ei = Eo(0);
        function ti(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (128 & t.flags) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ni = [];
        function ri() {
          for (var e = 0; e < ni.length; e++)
            ni[e]._workInProgressVersionPrimary = null;
          ni.length = 0;
        }
        var oi = x.ReactCurrentDispatcher,
          ai = x.ReactCurrentBatchConfig,
          ii = 0,
          li = null,
          ci = null,
          si = null,
          ui = !1,
          di = !1,
          fi = 0,
          pi = 0;
        function hi() {
          throw Error(a(321));
        }
        function mi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function gi(e, t, n, r, o, i) {
          if (
            ((ii = i),
            (li = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (oi.current = null === e || null === e.memoizedState ? Ji : el),
            (e = n(r, o)),
            di)
          ) {
            i = 0;
            do {
              if (((di = !1), (fi = 0), 25 <= i)) throw Error(a(301));
              (i += 1),
                (si = ci = null),
                (t.updateQueue = null),
                (oi.current = tl),
                (e = n(r, o));
            } while (di);
          }
          if (
            ((oi.current = Zi),
            (t = null !== ci && null !== ci.next),
            (ii = 0),
            (si = ci = li = null),
            (ui = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function vi() {
          var e = 0 !== fi;
          return (fi = 0), e;
        }
        function yi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === si ? (li.memoizedState = si = e) : (si = si.next = e), si
          );
        }
        function bi() {
          if (null === ci) {
            var e = li.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ci.next;
          var t = null === si ? li.memoizedState : si.next;
          if (null !== t) (si = t), (ci = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (ci = e).memoizedState,
              baseState: ci.baseState,
              baseQueue: ci.baseQueue,
              queue: ci.queue,
              next: null,
            }),
              null === si ? (li.memoizedState = si = e) : (si = si.next = e);
          }
          return si;
        }
        function xi(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function Si(e) {
          var t = bi(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = ci,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var l = o.next;
              (o.next = i.next), (i.next = l);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (i = o.next), (r = r.baseState);
            var c = (l = null),
              s = null,
              u = i;
            do {
              var d = u.lane;
              if ((ii & d) === d)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.hasEagerState ? u.eagerState : e(r, u.action));
              else {
                var f = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === s ? ((c = s = f), (l = r)) : (s = s.next = f),
                  (li.lanes |= d),
                  (Ic |= d);
              }
              u = u.next;
            } while (null !== u && u !== i);
            null === s ? (l = r) : (s.next = c),
              lr(r, t.memoizedState) || (bl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (i = o.lane), (li.lanes |= i), (Ic |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ki(e) {
          var t = bi(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== o);
            lr(i, t.memoizedState) || (bl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function wi() {}
        function Ci(e, t) {
          var n = li,
            r = bi(),
            o = t(),
            i = !lr(r.memoizedState, o);
          if (
            (i && ((r.memoizedState = o), (bl = !0)),
            (r = r.queue),
            Ii(Oi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== si && 1 & si.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ni(9, _i.bind(null, n, r, o, t), void 0, null),
              null === jc)
            )
              throw Error(a(349));
            30 & ii || Ei(n, t, o);
          }
          return o;
        }
        function Ei(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = li.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (li.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e);
        }
        function _i(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Pi(t) && ji(e);
        }
        function Oi(e, t, n) {
          return n(function () {
            Pi(t) && ji(e);
          });
        }
        function Pi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (e) {
            return !0;
          }
        }
        function ji(e) {
          var t = Ra(e, 1);
          null !== t && ns(t, e, 1, -1);
        }
        function Ti(e) {
          var t = yi();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: xi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Qi.bind(null, li, e)),
            [t.memoizedState, e]
          );
        }
        function Ni(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = li.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (li.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next),
                  (n.next = e),
                  (e.next = r),
                  (t.lastEffect = e)),
            e
          );
        }
        function Mi() {
          return bi().memoizedState;
        }
        function Li(e, t, n, r) {
          var o = yi();
          (li.flags |= e),
            (o.memoizedState = Ni(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function zi(e, t, n, r) {
          var o = bi();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== ci) {
            var i = ci.memoizedState;
            if (((a = i.destroy), null !== r && mi(r, i.deps)))
              return void (o.memoizedState = Ni(t, n, a, r));
          }
          (li.flags |= e), (o.memoizedState = Ni(1 | t, n, a, r));
        }
        function Ri(e, t) {
          return Li(8390656, 8, e, t);
        }
        function Ii(e, t) {
          return zi(2048, 8, e, t);
        }
        function Ai(e, t) {
          return zi(4, 2, e, t);
        }
        function Hi(e, t) {
          return zi(4, 4, e, t);
        }
        function Bi(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function Fi(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            zi(4, 4, Bi.bind(null, t, e), n)
          );
        }
        function Di() {}
        function Ui(e, t) {
          var n = bi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Vi(e, t) {
          var n = bi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Wi(e, t, n) {
          return 21 & ii
            ? (lr(n, t) ||
                ((n = mt()), (li.lanes |= n), (Ic |= n), (e.baseState = !0)),
              t)
            : (e.baseState && ((e.baseState = !1), (bl = !0)),
              (e.memoizedState = n));
        }
        function $i(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ai.transition;
          ai.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ai.transition = r);
          }
        }
        function Gi() {
          return bi().memoizedState;
        }
        function Xi(e, t, n) {
          var r = ts(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Ki(e))
          )
            qi(t, n);
          else if (null !== (n = za(e, t, n, r))) {
            ns(n, e, r, es()), Yi(n, t, r);
          }
        }
        function Qi(e, t, n) {
          var r = ts(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Ki(e)) qi(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = a(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), lr(l, i))) {
                  var c = t.interleaved;
                  return (
                    null === c
                      ? ((o.next = o), La(t))
                      : ((o.next = c.next), (c.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (e) {}
            null !== (n = za(e, t, o, r)) &&
              (ns(n, e, r, (o = es())), Yi(n, t, r));
          }
        }
        function Ki(e) {
          var t = e.alternate;
          return e === li || (null !== t && t === li);
        }
        function qi(e, t) {
          di = ui = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Yi(e, t, n) {
          if (4194240 & n) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var Zi = {
            readContext: Na,
            useCallback: hi,
            useContext: hi,
            useEffect: hi,
            useImperativeHandle: hi,
            useInsertionEffect: hi,
            useLayoutEffect: hi,
            useMemo: hi,
            useReducer: hi,
            useRef: hi,
            useState: hi,
            useDebugValue: hi,
            useDeferredValue: hi,
            useTransition: hi,
            useMutableSource: hi,
            useSyncExternalStore: hi,
            useId: hi,
            unstable_isNewReconciler: !1,
          },
          Ji = {
            readContext: Na,
            useCallback: function (e, t) {
              return (yi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Na,
            useEffect: Ri,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                Li(4194308, 4, Bi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Li(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Li(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = yi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = yi();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Xi.bind(null, li, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (yi().memoizedState = e);
            },
            useState: Ti,
            useDebugValue: Di,
            useDeferredValue: function (e) {
              return (yi().memoizedState = e);
            },
            useTransition: function () {
              var e = Ti(!1),
                t = e[0];
              return (
                (e = $i.bind(null, e[1])), (yi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = li,
                o = yi();
              if (aa) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === jc)) throw Error(a(349));
                30 & ii || Ei(r, t, n);
              }
              o.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (o.queue = i),
                Ri(Oi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ni(9, _i.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = yi(),
                t = jc.identifierPrefix;
              if (aa) {
                var n = Zo;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Yo & ~(1 << (32 - it(Yo) - 1))).toString(32) + n)),
                  0 < (n = fi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = pi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          el = {
            readContext: Na,
            useCallback: Ui,
            useContext: Na,
            useEffect: Ii,
            useImperativeHandle: Fi,
            useInsertionEffect: Ai,
            useLayoutEffect: Hi,
            useMemo: Vi,
            useReducer: Si,
            useRef: Mi,
            useState: function () {
              return Si(xi);
            },
            useDebugValue: Di,
            useDeferredValue: function (e) {
              return Wi(bi(), ci.memoizedState, e);
            },
            useTransition: function () {
              return [Si(xi)[0], bi().memoizedState];
            },
            useMutableSource: wi,
            useSyncExternalStore: Ci,
            useId: Gi,
            unstable_isNewReconciler: !1,
          },
          tl = {
            readContext: Na,
            useCallback: Ui,
            useContext: Na,
            useEffect: Ii,
            useImperativeHandle: Fi,
            useInsertionEffect: Ai,
            useLayoutEffect: Hi,
            useMemo: Vi,
            useReducer: ki,
            useRef: Mi,
            useState: function () {
              return ki(xi);
            },
            useDebugValue: Di,
            useDeferredValue: function (e) {
              var t = bi();
              return null === ci
                ? (t.memoizedState = e)
                : Wi(t, ci.memoizedState, e);
            },
            useTransition: function () {
              return [ki(xi)[0], bi().memoizedState];
            },
            useMutableSource: wi,
            useSyncExternalStore: Ci,
            useId: Gi,
            unstable_isNewReconciler: !1,
          };
        function nl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = A({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function rl(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : A({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ol = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ue(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              o = ts(e),
              a = Ba(r, o);
            (a.payload = t),
              null != n && (a.callback = n),
              null !== (t = Fa(e, a, o)) && (ns(t, e, o, r), Da(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              o = ts(e),
              a = Ba(r, o);
            (a.tag = 1),
              (a.payload = t),
              null != n && (a.callback = n),
              null !== (t = Fa(e, a, o)) && (ns(t, e, o, r), Da(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = es(),
              r = ts(e),
              o = Ba(n, r);
            (o.tag = 2),
              null != t && (o.callback = t),
              null !== (t = Fa(e, o, r)) && (ns(t, e, r, n), Da(t, e, r));
          },
        };
        function al(e, t, n, r, o, a, i) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !cr(n, r) ||
                !cr(o, a);
        }
        function il(e, t, n) {
          var r = !1,
            o = Po,
            a = t.contextType;
          return (
            "object" == typeof a && null !== a
              ? (a = Na(a))
              : ((o = Lo(t) ? No : jo.current),
                (a = (r = null != (r = t.contextTypes)) ? Mo(e, o) : Po)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ol),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function ll(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ol.enqueueReplaceState(t, t.state, null);
        }
        function cl(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Aa(e);
          var a = t.contextType;
          "object" == typeof a && null !== a
            ? (o.context = Na(a))
            : ((a = Lo(t) ? No : jo.current), (o.context = Mo(e, a))),
            (o.state = e.memoizedState),
            "function" == typeof (a = t.getDerivedStateFromProps) &&
              (rl(e, t, a, n), (o.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof o.getSnapshotBeforeUpdate ||
              ("function" != typeof o.UNSAFE_componentWillMount &&
                "function" != typeof o.componentWillMount) ||
              ((t = o.state),
              "function" == typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" == typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && ol.enqueueReplaceState(o, o.state, null),
              Va(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" == typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function sl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += D(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (e) {
            o = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function ul(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        var fl = "function" == typeof WeakMap ? WeakMap : Map;
        function pl(e, t, n) {
          ((n = Ba(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wc || ((Wc = !0), ($c = r)), dl(0, t);
            }),
            n
          );
        }
        function hl(e, t, n) {
          (n = Ba(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" == typeof a.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" != typeof r &&
                    (null === Gc ? (Gc = new Set([this])) : Gc.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fl();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = Es.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vl(e, t, n, r, o) {
          return 1 & e.mode
            ? ((e.flags |= 65536), (e.lanes = o), e)
            : (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ba(-1, 1)).tag = 2), Fa(n, t, 1))),
                  (n.lanes |= 1)),
              e);
        }
        var yl = x.ReactCurrentOwner,
          bl = !1;
        function xl(e, t, n, r) {
          t.child = null === e ? ka(t, null, n, r) : Sa(t, e.child, n, r);
        }
        function Sl(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            Ta(t, o),
            (r = gi(e, t, n, r, a, o)),
            (n = vi()),
            null === e || bl
              ? (aa && n && ta(t), (t.flags |= 1), xl(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Wl(e, t, o))
          );
        }
        function kl(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return "function" != typeof a ||
              Ms(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = zs(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), wl(e, t, a, r, o));
          }
          if (((a = e.child), !(e.lanes & o))) {
            var i = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : cr)(i, r) &&
              e.ref === t.ref
            )
              return Wl(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Ls(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function wl(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (cr(a, r) && e.ref === t.ref) {
              if (((bl = !1), (t.pendingProps = r = a), !(e.lanes & o)))
                return (t.lanes = e.lanes), Wl(e, t, o);
              131072 & e.flags && (bl = !0);
            }
          }
          return _l(e, t, n, r, o);
        }
        function Cl(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (1 & t.mode) {
              if (!(1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Oo(Lc, Mc),
                  (Mc |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                Oo(Lc, Mc),
                (Mc |= r);
            } else
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Oo(Lc, Mc),
                (Mc |= n);
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Oo(Lc, Mc),
              (Mc |= r);
          return xl(e, t, o, n), t.child;
        }
        function El(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function _l(e, t, n, r, o) {
          var a = Lo(n) ? No : jo.current;
          return (
            (a = Mo(t, a)),
            Ta(t, o),
            (n = gi(e, t, n, r, a, o)),
            (r = vi()),
            null === e || bl
              ? (aa && r && ta(t), (t.flags |= 1), xl(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Wl(e, t, o))
          );
        }
        function Ol(e, t, n, r, o) {
          if (Lo(n)) {
            var a = !0;
            Ao(t);
          } else a = !1;
          if ((Ta(t, o), null === t.stateNode))
            Vl(e, t), il(t, n, r), cl(t, n, r, o), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var c = i.context,
              s = n.contextType;
            "object" == typeof s && null !== s
              ? (s = Na(s))
              : (s = Mo(t, (s = Lo(n) ? No : jo.current)));
            var u = n.getDerivedStateFromProps,
              d =
                "function" == typeof u ||
                "function" == typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((l !== r || c !== s) && ll(t, i, r, s)),
              (Ia = !1);
            var f = t.memoizedState;
            (i.state = f),
              Va(t, r, i, o),
              (c = t.memoizedState),
              l !== r || f !== c || To.current || Ia
                ? ("function" == typeof u &&
                    (rl(t, n, u, r), (c = t.memoizedState)),
                  (l = Ia || al(t, n, l, r, f, c, s))
                    ? (d ||
                        ("function" != typeof i.UNSAFE_componentWillMount &&
                          "function" != typeof i.componentWillMount) ||
                        ("function" == typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" == typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" == typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" == typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = c)),
                  (i.props = r),
                  (i.state = c),
                  (i.context = s),
                  (r = l))
                : ("function" == typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Ha(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : nl(t.type, l)),
              (i.props = s),
              (d = t.pendingProps),
              (f = i.context),
              "object" == typeof (c = n.contextType) && null !== c
                ? (c = Na(c))
                : (c = Mo(t, (c = Lo(n) ? No : jo.current)));
            var p = n.getDerivedStateFromProps;
            (u =
              "function" == typeof p ||
              "function" == typeof i.getSnapshotBeforeUpdate) ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((l !== d || f !== c) && ll(t, i, r, c)),
              (Ia = !1),
              (f = t.memoizedState),
              (i.state = f),
              Va(t, r, i, o);
            var h = t.memoizedState;
            l !== d || f !== h || To.current || Ia
              ? ("function" == typeof p &&
                  (rl(t, n, p, r), (h = t.memoizedState)),
                (s = Ia || al(t, n, s, r, f, h, c) || !1)
                  ? (u ||
                      ("function" != typeof i.UNSAFE_componentWillUpdate &&
                        "function" != typeof i.componentWillUpdate) ||
                      ("function" == typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, c),
                      "function" == typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, c)),
                    "function" == typeof i.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" != typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = c),
                (r = s))
              : ("function" != typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Pl(e, t, n, r, a, o);
        }
        function Pl(e, t, n, r, o, a) {
          El(e, t);
          var i = !!(128 & t.flags);
          if (!r && !i) return o && Ho(t, n, !1), Wl(e, t, a);
          (r = t.stateNode), (yl.current = t);
          var l =
            i && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Sa(t, e.child, null, a)),
                (t.child = Sa(t, null, l, a)))
              : xl(e, t, l, a),
            (t.memoizedState = r.state),
            o && Ho(t, n, !0),
            t.child
          );
        }
        function jl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ro(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ro(0, t.context, !1),
            qa(e, t.containerInfo);
        }
        function Tl(e, t, n, r, o) {
          return ha(), ma(o), (t.flags |= 256), xl(e, t, n, r), t.child;
        }
        var Nl,
          Ml,
          Ll,
          zl,
          Rl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Il(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Al(e, t, n) {
          var r,
            o = t.pendingProps,
            i = ei.current,
            l = !1,
            c = !!(128 & t.flags);
          if (
            ((r = c) ||
              (r = (null === e || null !== e.memoizedState) && !!(2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Oo(ei, 1 & i),
            null === e)
          )
            return (
              ua(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (1 & t.mode
                    ? "$!" === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824)
                    : (t.lanes = 1),
                  null)
                : ((c = o.children),
                  (e = o.fallback),
                  l
                    ? ((o = t.mode),
                      (l = t.child),
                      (c = { mode: "hidden", children: c }),
                      1 & o || null === l
                        ? (l = Is(c, o, 0, null))
                        : ((l.childLanes = 0), (l.pendingProps = c)),
                      (e = Rs(e, o, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Il(n)),
                      (t.memoizedState = Rl),
                      e)
                    : Hl(t, c))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, o, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Bl(e, t, l, (r = ul(Error(a(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((i = r.fallback),
                      (o = t.mode),
                      (r = Is(
                        { mode: "visible", children: r.children },
                        o,
                        0,
                        null,
                      )),
                      ((i = Rs(i, o, l, null)).flags |= 2),
                      (r.return = t),
                      (i.return = t),
                      (r.sibling = i),
                      (t.child = r),
                      1 & t.mode && Sa(t, e.child, null, l),
                      (t.child.memoizedState = Il(l)),
                      (t.memoizedState = Rl),
                      i);
              if (!(1 & t.mode)) return Bl(e, t, l, null);
              if ("$!" === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset))
                  var c = r.dgst;
                return (
                  (r = c), Bl(e, t, l, (r = ul((i = Error(a(419))), r, void 0)))
                );
              }
              if (((c = !!(l & e.childLanes)), bl || c)) {
                if (null !== (r = jc)) {
                  switch (l & -l) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = o & (r.suspendedLanes | l) ? 0 : o) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), Ra(e, o), ns(r, e, o, -1));
                }
                return ms(), Bl(e, t, l, (r = ul(Error(a(421)))));
              }
              return "$?" === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Os.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (oa = so(o.nextSibling)),
                  (ra = t),
                  (aa = !0),
                  (ia = null),
                  null !== e &&
                    ((Qo[Ko++] = Yo),
                    (Qo[Ko++] = Zo),
                    (Qo[Ko++] = qo),
                    (Yo = e.id),
                    (Zo = e.overflow),
                    (qo = t)),
                  (t = Hl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, c, o, r, i, n);
          if (l) {
            (l = o.fallback), (c = t.mode), (r = (i = e.child).sibling);
            var s = { mode: "hidden", children: o.children };
            return (
              1 & c || t.child === i
                ? ((o = Ls(i, s)).subtreeFlags = 14680064 & i.subtreeFlags)
                : (((o = t.child).childLanes = 0),
                  (o.pendingProps = s),
                  (t.deletions = null)),
              null !== r
                ? (l = Ls(r, l))
                : ((l = Rs(l, c, n, null)).flags |= 2),
              (l.return = t),
              (o.return = t),
              (o.sibling = l),
              (t.child = o),
              (o = l),
              (l = t.child),
              (c =
                null === (c = e.child.memoizedState)
                  ? Il(n)
                  : {
                      baseLanes: c.baseLanes | n,
                      cachePool: null,
                      transitions: c.transitions,
                    }),
              (l.memoizedState = c),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Rl),
              o
            );
          }
          return (
            (e = (l = e.child).sibling),
            (o = Ls(l, { mode: "visible", children: o.children })),
            !(1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Hl(e, t) {
          return (
            ((t = Is(
              { mode: "visible", children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function Bl(e, t, n, r) {
          return (
            null !== r && ma(r),
            Sa(t, e.child, null, n),
            ((e = Hl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Fl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), ja(e.return, t, n);
        }
        function Dl(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o));
        }
        function Ul(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((xl(e, t, r.children, n), 2 & (r = ei.current)))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 128 & e.flags)
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Fl(e, n, t);
                else if (19 === e.tag) Fl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Oo(ei, r), 1 & t.mode))
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ti(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Dl(t, !1, o, n, a);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ti(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Dl(t, !0, n, null, a);
                break;
              case "together":
                Dl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          else t.memoizedState = null;
          return t.child;
        }
        function Vl(e, t) {
          !(1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ic |= t.lanes),
            !(n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Ls((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ls(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function $l(e, t) {
          if (!aa)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Gl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Xl(e, t, n) {
          var r = t.pendingProps;
          switch ((na(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Gl(t), null;
            case 1:
            case 17:
              return Lo(t.type) && zo(), Gl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Ya(),
                _o(To),
                _o(jo),
                ri(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ia && (is(ia), (ia = null)))),
                Ml(e, t),
                Gl(t),
                null
              );
            case 5:
              Ja(t);
              var o = Ka(Qa.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ll(e, t, n, r, o),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Gl(t), null;
                }
                if (((e = Ka(Ga.current)), fa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (((r[po] = t), (r[ho] = i), (e = !!(1 & t.mode)), n)) {
                    case "dialog":
                      Br("cancel", r), Br("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Br("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < Rr.length; o++) Br(Rr[o], r);
                      break;
                    case "source":
                      Br("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Br("error", r), Br("load", r);
                      break;
                    case "details":
                      Br("toggle", r);
                      break;
                    case "input":
                      q(r, i), Br("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Br("invalid", r);
                      break;
                    case "textarea":
                      oe(r, i), Br("invalid", r);
                  }
                  for (var c in (ye(n, i), (o = null), i))
                    if (i.hasOwnProperty(c)) {
                      var s = i[c];
                      "children" === c
                        ? "string" == typeof s
                          ? r.textContent !== s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (o = ["children", s]))
                          : "number" == typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (o = ["children", "" + s]))
                        : l.hasOwnProperty(c) &&
                          null != s &&
                          "onScroll" === c &&
                          Br("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      G(r), J(r, i, !0);
                      break;
                    case "textarea":
                      G(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof i.onClick && (r.onclick = Jr);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (c = 9 === o.nodeType ? o : o.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = c.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                          ? (e = c.createElement(n, { is: r.is }))
                          : ((e = c.createElement(n)),
                            "select" === n &&
                              ((c = e),
                              r.multiple
                                ? (c.multiple = !0)
                                : r.size && (c.size = r.size)))
                      : (e = c.createElementNS(e, n)),
                    (e[po] = t),
                    (e[ho] = r),
                    Nl(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((c = be(n, r)), n)) {
                      case "dialog":
                        Br("cancel", e), Br("close", e), (o = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Br("load", e), (o = r);
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < Rr.length; o++) Br(Rr[o], e);
                        o = r;
                        break;
                      case "source":
                        Br("error", e), (o = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Br("error", e), Br("load", e), (o = r);
                        break;
                      case "details":
                        Br("toggle", e), (o = r);
                        break;
                      case "input":
                        q(e, r), (o = K(e, r)), Br("invalid", e);
                        break;
                      case "option":
                      default:
                        o = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = A({}, r, { value: void 0 })),
                          Br("invalid", e);
                        break;
                      case "textarea":
                        oe(e, r), (o = re(e, r)), Br("invalid", e);
                    }
                    for (i in (ye(n, o), (s = o)))
                      if (s.hasOwnProperty(i)) {
                        var u = s[i];
                        "style" === i
                          ? ge(e, u)
                          : "dangerouslySetInnerHTML" === i
                            ? null != (u = u ? u.__html : void 0) && de(e, u)
                            : "children" === i
                              ? "string" == typeof u
                                ? ("textarea" !== n || "" !== u) && fe(e, u)
                                : "number" == typeof u && fe(e, "" + u)
                              : "suppressContentEditableWarning" !== i &&
                                "suppressHydrationWarning" !== i &&
                                "autoFocus" !== i &&
                                (l.hasOwnProperty(i)
                                  ? null != u &&
                                    "onScroll" === i &&
                                    Br("scroll", e)
                                  : null != u && b(e, i, u, c));
                      }
                    switch (n) {
                      case "input":
                        G(e), J(e, r, !1);
                        break;
                      case "textarea":
                        G(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" == typeof o.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Gl(t), null;
            case 6:
              if (e && null != t.stateNode) zl(e, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = Ka(Qa.current)), Ka(Ga.current), fa(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[po] = t),
                    (i = r.nodeValue !== n) && null !== (e = ra))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, !!(1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, !!(1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[po] = t),
                    (t.stateNode = r);
              }
              return Gl(t), null;
            case 13:
              if (
                (_o(ei),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (aa && null !== oa && 1 & t.mode && !(128 & t.flags))
                  pa(), ha(), (t.flags |= 98560), (i = !1);
                else if (((i = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(a(317));
                    i[po] = t;
                  } else
                    ha(),
                      !(128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Gl(t), (i = !1);
                } else null !== ia && (is(ia), (ia = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 128 & t.flags
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    1 & t.mode &&
                      (null === e || 1 & ei.current
                        ? 0 === zc && (zc = 3)
                        : ms())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Gl(t),
                  null);
            case 4:
              return (
                Ya(),
                Ml(e, t),
                null === e && Ur(t.stateNode.containerInfo),
                Gl(t),
                null
              );
            case 10:
              return Pa(t.type._context), Gl(t), null;
            case 19:
              if ((_o(ei), null === (i = t.memoizedState))) return Gl(t), null;
              if (((r = !!(128 & t.flags)), null === (c = i.rendering)))
                if (r) $l(i, !1);
                else {
                  if (0 !== zc || (null !== e && 128 & e.flags))
                    for (e = t.child; null !== e; ) {
                      if (null !== (c = ti(e))) {
                        for (
                          t.flags |= 128,
                            $l(i, !1),
                            null !== (r = c.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (c = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = c.childLanes),
                                (i.lanes = c.lanes),
                                (i.child = c.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = c.memoizedProps),
                                (i.memoizedState = c.memoizedState),
                                (i.updateQueue = c.updateQueue),
                                (i.type = c.type),
                                (e = c.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Oo(ei, (1 & ei.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ye() > Uc &&
                    ((t.flags |= 128),
                    (r = !0),
                    $l(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ti(c))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      $l(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !c.alternate &&
                        !aa)
                    )
                      return Gl(t), null;
                  } else
                    2 * Ye() - i.renderingStartTime > Uc &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      $l(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((c.sibling = t.child), (t.child = c))
                  : (null !== (n = i.last) ? (n.sibling = c) : (t.child = c),
                    (i.last = c));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ye()),
                  (t.sibling = null),
                  (n = ei.current),
                  Oo(ei, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Gl(t), null);
            case 22:
            case 23:
              return (
                ds(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 1 & t.mode
                  ? !!(1073741824 & Mc) &&
                    (Gl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Gl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Ql(e, t) {
          switch ((na(t), t.tag)) {
            case 1:
              return (
                Lo(t.type) && zo(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Ya(),
                _o(To),
                _o(jo),
                ri(),
                65536 & (e = t.flags) && !(128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Ja(t), null;
            case 13:
              if (
                (_o(ei),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                ha();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return _o(ei), null;
            case 4:
              return Ya(), null;
            case 10:
              return Pa(t.type._context), null;
            case 22:
            case 23:
              return ds(), null;
            default:
              return null;
          }
        }
        (Nl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ml = function () {}),
          (Ll = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), Ka(Ga.current);
              var a,
                i = null;
              switch (n) {
                case "input":
                  (o = K(e, o)), (r = K(e, r)), (i = []);
                  break;
                case "select":
                  (o = A({}, o, { value: void 0 })),
                    (r = A({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (o = re(e, o)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" != typeof o.onClick &&
                    "function" == typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (u in (ye(n, r), (n = null), o))
                if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && null != o[u])
                  if ("style" === u) {
                    var c = o[u];
                    for (a in c)
                      c.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (l.hasOwnProperty(u)
                        ? i || (i = [])
                        : (i = i || []).push(u, null));
              for (u in r) {
                var s = r[u];
                if (
                  ((c = null != o ? o[u] : void 0),
                  r.hasOwnProperty(u) && s !== c && (null != s || null != c))
                )
                  if ("style" === u)
                    if (c) {
                      for (a in c)
                        !c.hasOwnProperty(a) ||
                          (s && s.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in s)
                        s.hasOwnProperty(a) &&
                          c[a] !== s[a] &&
                          (n || (n = {}), (n[a] = s[a]));
                    } else n || (i || (i = []), i.push(u, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((s = s ? s.__html : void 0),
                        (c = c ? c.__html : void 0),
                        null != s && c !== s && (i = i || []).push(u, s))
                      : "children" === u
                        ? ("string" != typeof s && "number" != typeof s) ||
                          (i = i || []).push(u, "" + s)
                        : "suppressContentEditableWarning" !== u &&
                          "suppressHydrationWarning" !== u &&
                          (l.hasOwnProperty(u)
                            ? (null != s && "onScroll" === u && Br("scroll", e),
                              i || c === s || (i = []))
                            : (i = i || []).push(u, s));
              }
              n && (i = i || []).push("style", n);
              var u = i;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (zl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Kl = !1,
          ql = !1,
          Yl = "function" == typeof WeakSet ? WeakSet : Set,
          Zl = null;
        function Jl(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" == typeof n)
              try {
                n(null);
              } catch (n) {
                Cs(e, t, n);
              }
            else n.current = null;
        }
        function ec(e, t, n) {
          try {
            n();
          } catch (n) {
            Cs(e, t, n);
          }
        }
        var tc = !1;
        function nc(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), void 0 !== a && ec(t, n, a);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function rc(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function oc(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
          }
        }
        function ac(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ac(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po],
              delete t[ho],
              delete t[go],
              delete t[vo],
              delete t[yo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ic(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function lc(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ic(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function cc(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (cc(e, t, n), e = e.sibling; null !== e; )
              cc(e, t, n), (e = e.sibling);
        }
        function sc(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (sc(e, t, n), e = e.sibling; null !== e; )
              sc(e, t, n), (e = e.sibling);
        }
        var uc = null,
          dc = !1;
        function fc(e, t, n) {
          for (n = n.child; null !== n; ) pc(e, t, n), (n = n.sibling);
        }
        function pc(e, t, n) {
          if (at && "function" == typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(ot, n);
            } catch (e) {}
          switch (n.tag) {
            case 5:
              ql || Jl(n, t);
            case 6:
              var r = uc,
                o = dc;
              (uc = null),
                fc(e, t, n),
                (dc = o),
                null !== (uc = r) &&
                  (dc
                    ? ((e = uc),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : uc.removeChild(n.stateNode));
              break;
            case 18:
              null !== uc &&
                (dc
                  ? ((e = uc),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? co(e.parentNode, n)
                      : 1 === e.nodeType && co(e, n),
                    Ut(e))
                  : co(uc, n.stateNode));
              break;
            case 4:
              (r = uc),
                (o = dc),
                (uc = n.stateNode.containerInfo),
                (dc = !0),
                fc(e, t, n),
                (uc = r),
                (dc = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !ql &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next;
                do {
                  var a = o,
                    i = a.destroy;
                  (a = a.tag),
                    void 0 !== i && (2 & a || 4 & a) && ec(n, t, i),
                    (o = o.next);
                } while (o !== r);
              }
              fc(e, t, n);
              break;
            case 1:
              if (
                !ql &&
                (Jl(n, t),
                "function" == typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (e) {
                  Cs(n, t, e);
                }
              fc(e, t, n);
              break;
            case 21:
              fc(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((ql = (r = ql) || null !== n.memoizedState),
                  fc(e, t, n),
                  (ql = r))
                : fc(e, t, n);
              break;
            default:
              fc(e, t, n);
          }
        }
        function hc(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Yl()),
              t.forEach(function (t) {
                var r = Ps.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function mc(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var i = e,
                  l = t,
                  c = l;
                e: for (; null !== c; ) {
                  switch (c.tag) {
                    case 5:
                      (uc = c.stateNode), (dc = !1);
                      break e;
                    case 3:
                    case 4:
                      (uc = c.stateNode.containerInfo), (dc = !0);
                      break e;
                  }
                  c = c.return;
                }
                if (null === uc) throw Error(a(160));
                pc(i, l, o), (uc = null), (dc = !1);
                var s = o.alternate;
                null !== s && (s.return = null), (o.return = null);
              } catch (e) {
                Cs(o, t, e);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gc(t, e), (t = t.sibling);
        }
        function gc(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((mc(t, e), vc(e), 4 & r)) {
                try {
                  nc(3, e, e.return), rc(3, e);
                } catch (t) {
                  Cs(e, e.return, t);
                }
                try {
                  nc(5, e, e.return);
                } catch (t) {
                  Cs(e, e.return, t);
                }
              }
              break;
            case 1:
              mc(t, e), vc(e), 512 & r && null !== n && Jl(n, n.return);
              break;
            case 5:
              if (
                (mc(t, e),
                vc(e),
                512 & r && null !== n && Jl(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode;
                try {
                  fe(o, "");
                } catch (t) {
                  Cs(e, e.return, t);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  c = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === c &&
                      "radio" === i.type &&
                      null != i.name &&
                      Y(o, i),
                      be(c, l);
                    var u = be(c, i);
                    for (l = 0; l < s.length; l += 2) {
                      var d = s[l],
                        f = s[l + 1];
                      "style" === d
                        ? ge(o, f)
                        : "dangerouslySetInnerHTML" === d
                          ? de(o, f)
                          : "children" === d
                            ? fe(o, f)
                            : b(o, d, f, u);
                    }
                    switch (c) {
                      case "input":
                        Z(o, i);
                        break;
                      case "textarea":
                        ae(o, i);
                        break;
                      case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(o, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(o, !!i.multiple, i.defaultValue, !0)
                              : ne(o, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    o[ho] = i;
                  } catch (t) {
                    Cs(e, e.return, t);
                  }
              }
              break;
            case 6:
              if ((mc(t, e), vc(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                  o.nodeValue = i;
                } catch (t) {
                  Cs(e, e.return, t);
                }
              }
              break;
            case 3:
              if (
                (mc(t, e),
                vc(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ut(t.containerInfo);
                } catch (t) {
                  Cs(e, e.return, t);
                }
              break;
            case 4:
            default:
              mc(t, e), vc(e);
              break;
            case 13:
              mc(t, e),
                vc(e),
                8192 & (o = e.child).flags &&
                  ((i = null !== o.memoizedState),
                  (o.stateNode.isHidden = i),
                  !i ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (Dc = Ye())),
                4 & r && hc(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((ql = (u = ql) || d), mc(t, e), (ql = u))
                  : mc(t, e),
                vc(e),
                8192 & r)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !d && 1 & e.mode)
                )
                  for (Zl = e, d = e.child; null !== d; ) {
                    for (f = Zl = d; null !== Zl; ) {
                      switch (((h = (p = Zl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nc(4, p, p.return);
                          break;
                        case 1:
                          Jl(p, p.return);
                          var m = p.stateNode;
                          if ("function" == typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (e) {
                              Cs(r, n, e);
                            }
                          }
                          break;
                        case 5:
                          Jl(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            Sc(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zl = h)) : Sc(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (o = f.stateNode),
                          u
                            ? "function" == typeof (i = o.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((c = f.stateNode),
                              (l =
                                null != (s = f.memoizedProps.style) &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (c.style.display = me("display", l)));
                      } catch (t) {
                        Cs(e, e.return, t);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                      } catch (t) {
                        Cs(e, e.return, t);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              mc(t, e), vc(e), 4 & r && hc(e);
            case 21:
          }
        }
        function vc(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ic(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (fe(o, ""), (r.flags &= -33)),
                    sc(e, lc(e), o);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  cc(e, lc(e), i);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (t) {
              Cs(e, e.return, t);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function yc(e, t, n) {
          (Zl = e), bc(e, t, n);
        }
        function bc(e, t, n) {
          for (var r = !!(1 & e.mode); null !== Zl; ) {
            var o = Zl,
              a = o.child;
            if (22 === o.tag && r) {
              var i = null !== o.memoizedState || Kl;
              if (!i) {
                var l = o.alternate,
                  c = (null !== l && null !== l.memoizedState) || ql;
                l = Kl;
                var s = ql;
                if (((Kl = i), (ql = c) && !s))
                  for (Zl = o; null !== Zl; )
                    (c = (i = Zl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? kc(o)
                        : null !== c
                          ? ((c.return = i), (Zl = c))
                          : kc(o);
                for (; null !== a; ) (Zl = a), bc(a, t, n), (a = a.sibling);
                (Zl = o), (Kl = l), (ql = s);
              }
              xc(e);
            } else
              8772 & o.subtreeFlags && null !== a
                ? ((a.return = o), (Zl = a))
                : xc(e);
          }
        }
        function xc(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (8772 & t.flags) {
              var n = t.alternate;
              try {
                if (8772 & t.flags)
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ql || rc(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !ql)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : nl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Wa(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Wa(t, l, n);
                      }
                      break;
                    case 5:
                      var c = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = c;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Ut(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                ql || (512 & t.flags && oc(t));
              } catch (e) {
                Cs(t, t.return, e);
              }
            }
            if (t === e) {
              Zl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function Sc(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (t === e) {
              Zl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function kc(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rc(4, t);
                  } catch (e) {
                    Cs(t, n, e);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" == typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (e) {
                      Cs(t, o, e);
                    }
                  }
                  var a = t.return;
                  try {
                    oc(t);
                  } catch (e) {
                    Cs(t, a, e);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    oc(t);
                  } catch (e) {
                    Cs(t, i, e);
                  }
              }
            } catch (e) {
              Cs(t, t.return, e);
            }
            if (t === e) {
              Zl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Zl = l);
              break;
            }
            Zl = t.return;
          }
        }
        var wc,
          Cc = Math.ceil,
          Ec = x.ReactCurrentDispatcher,
          _c = x.ReactCurrentOwner,
          Oc = x.ReactCurrentBatchConfig,
          Pc = 0,
          jc = null,
          Tc = null,
          Nc = 0,
          Mc = 0,
          Lc = Eo(0),
          zc = 0,
          Rc = null,
          Ic = 0,
          Ac = 0,
          Hc = 0,
          Bc = null,
          Fc = null,
          Dc = 0,
          Uc = 1 / 0,
          Vc = null,
          Wc = !1,
          $c = null,
          Gc = null,
          Xc = !1,
          Qc = null,
          Kc = 0,
          qc = 0,
          Yc = null,
          Zc = -1,
          Jc = 0;
        function es() {
          return 6 & Pc ? Ye() : -1 !== Zc ? Zc : (Zc = Ye());
        }
        function ts(e) {
          return 1 & e.mode
            ? 2 & Pc && 0 !== Nc
              ? Nc & -Nc
              : null !== ga.transition
                ? (0 === Jc && (Jc = mt()), Jc)
                : 0 !== (e = bt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : qt(e.type))
            : 1;
        }
        function ns(e, t, n, r) {
          if (50 < qc) throw ((qc = 0), (Yc = null), Error(a(185)));
          vt(e, n, r),
            (2 & Pc && e === jc) ||
              (e === jc && (!(2 & Pc) && (Ac |= n), 4 === zc && ls(e, Nc)),
              rs(e, r),
              1 === n &&
                0 === Pc &&
                !(1 & t.mode) &&
                ((Uc = Ye() + 500), Fo && Vo()));
        }
        function rs(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var i = 31 - it(a),
                l = 1 << i,
                c = o[i];
              -1 === c
                ? (l & n && !(l & r)) || (o[i] = pt(l, t))
                : c <= t && (e.expiredLanes |= l),
                (a &= ~l);
            }
          })(e, t);
          var r = ft(e, e === jc ? Nc : 0);
          if (0 === r)
            null !== n && Qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fo = !0), Uo(e);
                  })(cs.bind(null, e))
                : Uo(cs.bind(null, e)),
                io(function () {
                  !(6 & Pc) && Vo();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = js(n, os.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function os(e, t) {
          if (((Zc = -1), (Jc = 0), 6 & Pc)) throw Error(a(327));
          var n = e.callbackNode;
          if (ks() && e.callbackNode !== n) return null;
          var r = ft(e, e === jc ? Nc : 0);
          if (0 === r) return null;
          if (30 & r || r & e.expiredLanes || t) t = gs(e, r);
          else {
            t = r;
            var o = Pc;
            Pc |= 2;
            var i = hs();
            for (
              (jc === e && Nc === t) ||
              ((Vc = null), (Uc = Ye() + 500), fs(e, t));
              ;

            )
              try {
                ys();
                break;
              } catch (t) {
                ps(e, t);
              }
            Oa(),
              (Ec.current = i),
              (Pc = o),
              null !== Tc ? (t = 0) : ((jc = null), (Nc = 0), (t = zc));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = ht(e)) && ((r = o), (t = as(e, o))),
              1 === t)
            )
              throw ((n = Rc), fs(e, 0), ls(e, r), rs(e, Ye()), n);
            if (6 === t) ls(e, r);
            else {
              if (
                ((o = e.current.alternate),
                !(
                  30 & r ||
                  (function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              a = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!lr(a(), o)) return !1;
                            } catch (e) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) ||
                  ((t = gs(e, r)),
                  2 === t &&
                    ((i = ht(e)), 0 !== i && ((r = i), (t = as(e, i)))),
                  1 !== t)
                ))
              )
                throw ((n = Rc), fs(e, 0), ls(e, r), rs(e, Ye()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  Ss(e, Fc, Vc);
                  break;
                case 3:
                  if (
                    (ls(e, r),
                    (130023424 & r) === r && 10 < (t = Dc + 500 - Ye()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      es(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(Ss.bind(null, e, Fc, Vc), t);
                    break;
                  }
                  Ss(e, Fc, Vc);
                  break;
                case 4:
                  if ((ls(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > o && (o = l), (r &= ~i);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Ye() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * Cc(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(Ss.bind(null, e, Fc, Vc), r);
                    break;
                  }
                  Ss(e, Fc, Vc);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return rs(e, Ye()), e.callbackNode === n ? os.bind(null, e) : null;
        }
        function as(e, t) {
          var n = Bc;
          return (
            e.current.memoizedState.isDehydrated && (fs(e, t).flags |= 256),
            2 !== (e = gs(e, t)) && ((t = Fc), (Fc = n), null !== t && is(t)),
            e
          );
        }
        function is(e) {
          null === Fc ? (Fc = e) : Fc.push.apply(Fc, e);
        }
        function ls(e, t) {
          for (
            t &= ~Hc,
              t &= ~Ac,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function cs(e) {
          if (6 & Pc) throw Error(a(327));
          ks();
          var t = ft(e, 0);
          if (!(1 & t)) return rs(e, Ye()), null;
          var n = gs(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = as(e, r)));
          }
          if (1 === n) throw ((n = Rc), fs(e, 0), ls(e, t), rs(e, Ye()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Ss(e, Fc, Vc),
            rs(e, Ye()),
            null
          );
        }
        function ss(e, t) {
          var n = Pc;
          Pc |= 1;
          try {
            return e(t);
          } finally {
            0 === (Pc = n) && ((Uc = Ye() + 500), Fo && Vo());
          }
        }
        function us(e) {
          null !== Qc && 0 === Qc.tag && !(6 & Pc) && ks();
          var t = Pc;
          Pc |= 1;
          var n = Oc.transition,
            r = bt;
          try {
            if (((Oc.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Oc.transition = n), !(6 & (Pc = t)) && Vo();
          }
        }
        function ds() {
          (Mc = Lc.current), _o(Lc);
        }
        function fs(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Tc))
            for (n = Tc.return; null !== n; ) {
              var r = n;
              switch ((na(r), r.tag)) {
                case 1:
                  null != (r = r.type.childContextTypes) && zo();
                  break;
                case 3:
                  Ya(), _o(To), _o(jo), ri();
                  break;
                case 5:
                  Ja(r);
                  break;
                case 4:
                  Ya();
                  break;
                case 13:
                case 19:
                  _o(ei);
                  break;
                case 10:
                  Pa(r.type._context);
                  break;
                case 22:
                case 23:
                  ds();
              }
              n = n.return;
            }
          if (
            ((jc = e),
            (Tc = e = Ls(e.current, null)),
            (Nc = Mc = t),
            (zc = 0),
            (Rc = null),
            (Hc = Ac = Ic = 0),
            (Fc = Bc = null),
            null !== Ma)
          ) {
            for (t = 0; t < Ma.length; t++)
              if (null !== (r = (n = Ma[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  a = n.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = o), (r.next = i);
                }
                n.pending = r;
              }
            Ma = null;
          }
          return e;
        }
        function ps(e, t) {
          for (;;) {
            var n = Tc;
            try {
              if ((Oa(), (oi.current = Zi), ui)) {
                for (var r = li.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                ui = !1;
              }
              if (
                ((ii = 0),
                (si = ci = li = null),
                (di = !1),
                (fi = 0),
                (_c.current = null),
                null === n || null === n.return)
              ) {
                (zc = 1), (Rc = t), (Tc = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  c = n,
                  s = t;
                if (
                  ((t = Nc),
                  (c.flags |= 32768),
                  null !== s &&
                    "object" == typeof s &&
                    "function" == typeof s.then)
                ) {
                  var u = s,
                    d = c,
                    f = d.tag;
                  if (!(1 & d.mode || (0 !== f && 11 !== f && 15 !== f))) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = gl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      vl(h, l, c, 0, t),
                      1 & h.mode && ml(i, u, t),
                      (s = u);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(s), (t.updateQueue = g);
                    } else m.add(s);
                    break e;
                  }
                  if (!(1 & t)) {
                    ml(i, u, t), ms();
                    break e;
                  }
                  s = Error(a(426));
                } else if (aa && 1 & c.mode) {
                  var v = gl(l);
                  if (null !== v) {
                    !(65536 & v.flags) && (v.flags |= 256),
                      vl(v, l, c, 0, t),
                      ma(sl(s, c));
                    break e;
                  }
                }
                (i = s = sl(s, c)),
                  4 !== zc && (zc = 2),
                  null === Bc ? (Bc = [i]) : Bc.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Ua(i, pl(0, s, t));
                      break e;
                    case 1:
                      c = s;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        !(
                          128 & i.flags ||
                          ("function" != typeof y.getDerivedStateFromError &&
                            (null === b ||
                              "function" != typeof b.componentDidCatch ||
                              (null !== Gc && Gc.has(b))))
                        )
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Ua(i, hl(i, c, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              xs(n);
            } catch (e) {
              (t = e), Tc === n && null !== n && (Tc = n = n.return);
              continue;
            }
            break;
          }
        }
        function hs() {
          var e = Ec.current;
          return (Ec.current = Zi), null === e ? Zi : e;
        }
        function ms() {
          (0 !== zc && 3 !== zc && 2 !== zc) || (zc = 4),
            null === jc ||
              (!(268435455 & Ic) && !(268435455 & Ac)) ||
              ls(jc, Nc);
        }
        function gs(e, t) {
          var n = Pc;
          Pc |= 2;
          var r = hs();
          for ((jc === e && Nc === t) || ((Vc = null), fs(e, t)); ; )
            try {
              vs();
              break;
            } catch (t) {
              ps(e, t);
            }
          if ((Oa(), (Pc = n), (Ec.current = r), null !== Tc))
            throw Error(a(261));
          return (jc = null), (Nc = 0), zc;
        }
        function vs() {
          for (; null !== Tc; ) bs(Tc);
        }
        function ys() {
          for (; null !== Tc && !Ke(); ) bs(Tc);
        }
        function bs(e) {
          var t = wc(e.alternate, e, Mc);
          (e.memoizedProps = e.pendingProps),
            null === t ? xs(e) : (Tc = t),
            (_c.current = null);
        }
        function xs(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 32768 & t.flags)) {
              if (null !== (n = Ql(n, t)))
                return (n.flags &= 32767), void (Tc = n);
              if (null === e) return (zc = 6), void (Tc = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            } else if (null !== (n = Xl(n, t, Mc))) return void (Tc = n);
            if (null !== (t = t.sibling)) return void (Tc = t);
            Tc = t = e;
          } while (null !== t);
          0 === zc && (zc = 5);
        }
        function Ss(e, t, n) {
          var r = bt,
            o = Oc.transition;
          try {
            (Oc.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ks();
                } while (null !== Qc);
                if (6 & Pc) throw Error(a(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - it(n),
                        a = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                    }
                  })(e, i),
                  e === jc && ((Tc = jc = null), (Nc = 0)),
                  (!(2064 & n.subtreeFlags) && !(2064 & n.flags)) ||
                    Xc ||
                    ((Xc = !0),
                    js(tt, function () {
                      return ks(), null;
                    })),
                  (i = !!(15990 & n.flags)),
                  !!(15990 & n.subtreeFlags) || i)
                ) {
                  (i = Oc.transition), (Oc.transition = null);
                  var l = bt;
                  bt = 1;
                  var c = Pc;
                  (Pc |= 4),
                    (_c.current = null),
                    (function (e, t) {
                      if (((eo = Wt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (e) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                c = -1,
                                s = -1,
                                u = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== o && 3 !== f.nodeType) ||
                                    (c = l + o),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (s = l + r),
                                    3 === f.nodeType &&
                                      (l += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++u === o && (c = l),
                                    p === i && ++d === r && (s = l),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === c || -1 === s
                                  ? null
                                  : { start: c, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          Zl = t;
                        null !== Zl;

                      )
                        if (
                          ((e = (t = Zl).child),
                          1028 & t.subtreeFlags && null !== e)
                        )
                          (e.return = t), (Zl = e);
                        else
                          for (; null !== Zl; ) {
                            t = Zl;
                            try {
                              var m = t.alternate;
                              if (1024 & t.flags)
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : nl(t.type, g),
                                          v,
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (e) {
                              Cs(t, t.return, e);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zl = e);
                              break;
                            }
                            Zl = t.return;
                          }
                      (m = tc), (tc = !1);
                    })(e, n),
                    gc(n, e),
                    hr(to),
                    (Wt = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    yc(n, e, o),
                    qe(),
                    (Pc = c),
                    (bt = l),
                    (Oc.transition = i);
                } else e.current = n;
                if (
                  (Xc && ((Xc = !1), (Qc = e), (Kc = o)),
                  (i = e.pendingLanes),
                  0 === i && (Gc = null),
                  (function (e) {
                    if (at && "function" == typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          !(128 & ~e.current.flags),
                        );
                      } catch (e) {}
                  })(n.stateNode),
                  rs(e, Ye()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]),
                      r(o.value, { componentStack: o.stack, digest: o.digest });
                if (Wc) throw ((Wc = !1), (e = $c), ($c = null), e);
                !!(1 & Kc) && 0 !== e.tag && ks(),
                  (i = e.pendingLanes),
                  1 & i ? (e === Yc ? qc++ : ((qc = 0), (Yc = e))) : (qc = 0),
                  Vo();
              })(e, t, n, r);
          } finally {
            (Oc.transition = o), (bt = r);
          }
          return null;
        }
        function ks() {
          if (null !== Qc) {
            var e = xt(Kc),
              t = Oc.transition,
              n = bt;
            try {
              if (((Oc.transition = null), (bt = 16 > e ? 16 : e), null === Qc))
                var r = !1;
              else {
                if (((e = Qc), (Qc = null), (Kc = 0), 6 & Pc))
                  throw Error(a(331));
                var o = Pc;
                for (Pc |= 4, Zl = e.current; null !== Zl; ) {
                  var i = Zl,
                    l = i.child;
                  if (16 & Zl.flags) {
                    var c = i.deletions;
                    if (null !== c) {
                      for (var s = 0; s < c.length; s++) {
                        var u = c[s];
                        for (Zl = u; null !== Zl; ) {
                          var d = Zl;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nc(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zl = f);
                          else
                            for (; null !== Zl; ) {
                              var p = (d = Zl).sibling,
                                h = d.return;
                              if ((ac(d), d === u)) {
                                Zl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zl = p);
                                break;
                              }
                              Zl = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Zl = i;
                    }
                  }
                  if (2064 & i.subtreeFlags && null !== l)
                    (l.return = i), (Zl = l);
                  else
                    e: for (; null !== Zl; ) {
                      if (2048 & (i = Zl).flags)
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nc(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Zl = y);
                        break e;
                      }
                      Zl = i.return;
                    }
                }
                var b = e.current;
                for (Zl = b; null !== Zl; ) {
                  var x = (l = Zl).child;
                  if (2064 & l.subtreeFlags && null !== x)
                    (x.return = l), (Zl = x);
                  else
                    e: for (l = b; null !== Zl; ) {
                      if (2048 & (c = Zl).flags)
                        try {
                          switch (c.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rc(9, c);
                          }
                        } catch (e) {
                          Cs(c, c.return, e);
                        }
                      if (c === l) {
                        Zl = null;
                        break e;
                      }
                      var S = c.sibling;
                      if (null !== S) {
                        (S.return = c.return), (Zl = S);
                        break e;
                      }
                      Zl = c.return;
                    }
                }
                if (
                  ((Pc = o),
                  Vo(),
                  at && "function" == typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(ot, e);
                  } catch (e) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Oc.transition = t);
            }
          }
          return !1;
        }
        function ws(e, t, n) {
          (e = Fa(e, (t = pl(0, (t = sl(n, t)), 1)), 1)),
            (t = es()),
            null !== e && (vt(e, 1, t), rs(e, t));
        }
        function Cs(e, t, n) {
          if (3 === e.tag) ws(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                ws(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" == typeof t.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === Gc || !Gc.has(r)))
                ) {
                  (t = Fa(t, (e = hl(t, (e = sl(n, e)), 1)), 1)),
                    (e = es()),
                    null !== t && (vt(t, 1, e), rs(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Es(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = es()),
            (e.pingedLanes |= e.suspendedLanes & n),
            jc === e &&
              (Nc & n) === n &&
              (4 === zc ||
              (3 === zc && (130023424 & Nc) === Nc && 500 > Ye() - Dc)
                ? fs(e, 0)
                : (Hc |= n)),
            rs(e, t);
        }
        function _s(e, t) {
          0 === t &&
            (1 & e.mode
              ? ((t = ut), !(130023424 & (ut <<= 1)) && (ut = 4194304))
              : (t = 1));
          var n = es();
          null !== (e = Ra(e, t)) && (vt(e, t, n), rs(e, n));
        }
        function Os(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), _s(e, n);
        }
        function Ps(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), _s(e, n);
        }
        function js(e, t) {
          return Xe(e, t);
        }
        function Ts(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ns(e, t, n, r) {
          return new Ts(e, t, n, r);
        }
        function Ms(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ls(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ns(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function zs(e, t, n, r, o, i) {
          var l = 2;
          if (((r = e), "function" == typeof e)) Ms(e) && (l = 1);
          else if ("string" == typeof e) l = 5;
          else
            e: switch (e) {
              case w:
                return Rs(n.children, o, i, t);
              case C:
                (l = 8), (o |= 8);
                break;
              case E:
                return (
                  ((e = Ns(12, n, t, 2 | o)).elementType = E), (e.lanes = i), e
                );
              case j:
                return (
                  ((e = Ns(13, n, t, o)).elementType = j), (e.lanes = i), e
                );
              case T:
                return (
                  ((e = Ns(19, n, t, o)).elementType = T), (e.lanes = i), e
                );
              case L:
                return Is(n, o, i, t);
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case _:
                      l = 10;
                      break e;
                    case O:
                      l = 9;
                      break e;
                    case P:
                      l = 11;
                      break e;
                    case N:
                      l = 14;
                      break e;
                    case M:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ns(l, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Rs(e, t, n, r) {
          return ((e = Ns(7, e, r, t)).lanes = n), e;
        }
        function Is(e, t, n, r) {
          return (
            ((e = Ns(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function As(e, t, n) {
          return ((e = Ns(6, e, null, t)).lanes = n), e;
        }
        function Hs(e, t, n) {
          return (
            ((t = Ns(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Bs(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Fs(e, t, n, r, o, a, i, l, c) {
          return (
            (e = new Bs(e, t, n, l, c)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Ns(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Aa(a),
            e
          );
        }
        function Ds(e) {
          if (!e) return Po;
          e: {
            if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Lo(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Lo(n)) return Io(e, n, t);
          }
          return t;
        }
        function Us(e, t, n, r, o, a, i, l, c) {
          return (
            ((e = Fs(n, r, !0, e, 0, a, 0, l, c)).context = Ds(null)),
            (n = e.current),
            ((a = Ba((r = es()), (o = ts(n)))).callback = null != t ? t : null),
            Fa(n, a, o),
            (e.current.lanes = o),
            vt(e, o, r),
            rs(e, r),
            e
          );
        }
        function Vs(e, t, n, r) {
          var o = t.current,
            a = es(),
            i = ts(o);
          return (
            (n = Ds(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ba(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Fa(o, t, i)) && (ns(e, o, i, a), Da(e, o, i)),
            i
          );
        }
        function Ws(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function $s(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Gs(e, t) {
          $s(e, t), (e = e.alternate) && $s(e, t);
        }
        wc = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || To.current) bl = !0;
            else {
              if (!(e.lanes & n || 128 & t.flags))
                return (
                  (bl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        jl(t), ha();
                        break;
                      case 5:
                        Za(t);
                        break;
                      case 1:
                        Lo(t.type) && Ao(t);
                        break;
                      case 4:
                        qa(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        Oo(wa, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Oo(ei, 1 & ei.current), (t.flags |= 128), null)
                            : n & t.child.childLanes
                              ? Al(e, t, n)
                              : (Oo(ei, 1 & ei.current),
                                null !== (e = Wl(e, t, n)) ? e.sibling : null);
                        Oo(ei, 1 & ei.current);
                        break;
                      case 19:
                        if (((r = !!(n & t.childLanes)), 128 & e.flags)) {
                          if (r) return Ul(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          Oo(ei, ei.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cl(e, t, n);
                    }
                    return Wl(e, t, n);
                  })(e, t, n)
                );
              bl = !!(131072 & e.flags);
            }
          else (bl = !1), aa && 1048576 & t.flags && ea(t, Xo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vl(e, t), (e = t.pendingProps);
              var o = Mo(t, jo.current);
              Ta(t, n), (o = gi(null, t, r, e, o, n));
              var i = vi();
              return (
                (t.flags |= 1),
                "object" == typeof o &&
                null !== o &&
                "function" == typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Lo(r) ? ((i = !0), Ao(t)) : (i = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    Aa(t),
                    (o.updater = ol),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    cl(t, r, e, n),
                    (t = Pl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    aa && i && ta(t),
                    xl(null, t, o, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vl(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ("function" == typeof e) return Ms(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === N) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = nl(r, e)),
                  o)
                ) {
                  case 0:
                    t = _l(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ol(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Sl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = kl(null, t, r, nl(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                _l(e, t, r, (o = t.elementType === r ? o : nl(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ol(e, t, r, (o = t.elementType === r ? o : nl(r, o)), n)
              );
            case 3:
              e: {
                if ((jl(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (o = (i = t.memoizedState).element),
                  Ha(e, t),
                  Va(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Tl(e, t, r, n, (o = sl(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Tl(e, t, r, n, (o = sl(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    oa = so(t.stateNode.containerInfo.firstChild),
                      ra = t,
                      aa = !0,
                      ia = null,
                      n = ka(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ha(), r === o)) {
                    t = Wl(e, t, n);
                    break e;
                  }
                  xl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Za(t),
                null === e && ua(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = o.children),
                no(r, o)
                  ? (l = null)
                  : null !== i && no(r, i) && (t.flags |= 32),
                El(e, t),
                xl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && ua(t), null;
            case 13:
              return Al(e, t, n);
            case 4:
              return (
                qa(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Sa(t, null, r, n)) : xl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Sl(e, t, r, (o = t.elementType === r ? o : nl(r, o)), n)
              );
            case 7:
              return xl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = o.value),
                  Oo(wa, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === o.children && !To.current) {
                      t = Wl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var c = i.dependencies;
                      if (null !== c) {
                        l = i.child;
                        for (var s = c.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === i.tag) {
                              (s = Ba(-1, n & -n)).tag = 2;
                              var u = i.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d
                                  ? (s.next = s)
                                  : ((s.next = d.next), (d.next = s)),
                                  (u.pending = s);
                              }
                            }
                            (i.lanes |= n),
                              null !== (s = i.alternate) && (s.lanes |= n),
                              ja(i.return, n, t),
                              (c.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(a(341));
                        (l.lanes |= n),
                          null !== (c = l.alternate) && (c.lanes |= n),
                          ja(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                xl(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Ta(t, n),
                (r = r((o = Na(o)))),
                (t.flags |= 1),
                xl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = nl((r = t.type), t.pendingProps)),
                kl(e, t, r, (o = nl(r.type, o)), n)
              );
            case 15:
              return wl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : nl(r, o)),
                Vl(e, t),
                (t.tag = 1),
                Lo(r) ? ((e = !0), Ao(t)) : (e = !1),
                Ta(t, n),
                il(t, r, o),
                cl(t, r, o, n),
                Pl(null, t, r, !0, e, n)
              );
            case 19:
              return Ul(e, t, n);
            case 22:
              return Cl(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Xs =
          "function" == typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Qs(e) {
          this._internalRoot = e;
        }
        function Ks(e) {
          this._internalRoot = e;
        }
        function qs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ys(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zs() {}
        function Js(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a;
            if ("function" == typeof o) {
              var l = o;
              o = function () {
                var e = Ws(i);
                l.call(e);
              };
            }
            Vs(t, i, e, o);
          } else
            i = (function (e, t, n, r, o) {
              if (o) {
                if ("function" == typeof r) {
                  var a = r;
                  r = function () {
                    var e = Ws(i);
                    a.call(e);
                  };
                }
                var i = Us(t, r, e, 0, null, !1, 0, "", Zs);
                return (
                  (e._reactRootContainer = i),
                  (e[mo] = i.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  us(),
                  i
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ("function" == typeof r) {
                var l = r;
                r = function () {
                  var e = Ws(c);
                  l.call(e);
                };
              }
              var c = Fs(e, 0, !1, null, 0, !1, 0, "", Zs);
              return (
                (e._reactRootContainer = c),
                (e[mo] = c.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                us(function () {
                  Vs(t, c, n, r);
                }),
                c
              );
            })(n, t, e, o, r);
          return Ws(i);
        }
        (Ks.prototype.render = Qs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Vs(e, t, null, null);
          }),
          (Ks.prototype.unmount = Qs.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                us(function () {
                  Vs(null, e, null, null);
                }),
                  (t[mo] = null);
              }
            }),
          (Ks.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Ct();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && At(e);
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    rs(t, Ye()),
                    !(6 & Pc) && ((Uc = Ye() + 500), Vo()));
                }
                break;
              case 13:
                us(function () {
                  var t = Ra(e, 1);
                  if (null !== t) {
                    var n = es();
                    ns(t, e, 1, n);
                  }
                }),
                  Gs(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Ra(e, 134217728);
              if (null !== t) ns(t, e, 134217728, es());
              Gs(e, 134217728);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = ts(e),
                n = Ra(e, t);
              if (null !== n) ns(n, e, t, es());
              Gs(e, t);
            }
          }),
          (Ct = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" +
                        JSON.stringify("" + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = ko(r);
                      if (!o) throw Error(a(90));
                      X(r), Z(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = ss),
          (je = us);
        var eu = {
            usingClientEntryPoint: !1,
            Events: [xo, So, ko, _e, Oe, ss],
          },
          tu = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nu = {
            bundleType: tu.bundleType,
            version: tu.version,
            rendererPackageName: tu.rendererPackageName,
            rendererConfig: tu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ru.isDisabled && ru.supportsFiber)
            try {
              (ot = ru.inject(nu)), (at = ru);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!qs(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!qs(e)) throw Error(a(299));
            var n = !1,
              r = "",
              o = Xs;
            return (
              null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Fs(e, 1, !1, null, 0, n, 0, r, o)),
              (e[mo] = t.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              new Qs(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" == typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return us(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ys(t)) throw Error(a(200));
            return Js(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!qs(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              i = "",
              l = Xs;
            if (
              (null != n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Us(t, null, e, 1, null != n ? n : null, o, 0, i, l)),
              (e[mo] = t.current),
              Ur(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Ks(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ys(t)) throw Error(a(200));
            return Js(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ys(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (us(function () {
                Js(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[mo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ss),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ys(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return Js(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        "use strict";
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(730));
      },
      82: (e, t) => {
        "use strict";
        var n,
          r = Symbol.for("react.element"),
          o = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          c = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.server_context"),
          d = Symbol.for("react.forward_ref"),
          f = Symbol.for("react.suspense"),
          p = Symbol.for("react.suspense_list"),
          h = Symbol.for("react.memo"),
          m = Symbol.for("react.lazy"),
          g = Symbol.for("react.offscreen");
        /**
         * @license React
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ function v(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case a:
                  case l:
                  case i:
                  case f:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case u:
                      case s:
                      case d:
                      case m:
                      case h:
                      case c:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        (n = Symbol.for("react.module.reference")),
          (t.ForwardRef = d),
          (t.isMemo = function (e) {
            return v(e) === h;
          });
      },
      86: (e, t, n) => {
        "use strict";
        e.exports = n(82);
      },
      153: (e, t, n) => {
        "use strict";
        /**
         * @license React
         * react-jsx-runtime.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var r = n(43),
          o = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          c = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            a = {},
            s = null,
            u = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            i.call(t, r) && !c.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: s,
            ref: u,
            props: a,
            _owner: l.current,
          };
        }
        (t.Fragment = a), (t.jsx = s), (t.jsxs = s);
      },
      202: (e, t) => {
        "use strict";
        /**
         * @license React
         * react.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          c = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var x = (b.prototype = new y());
        (x.constructor = b), m(x, v.prototype), (x.isPureReactComponent = !0);
        var S = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          w = { current: null },
          C = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var o,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, o) && !C.hasOwnProperty(o) && (a[o] = t[o]);
          var c = arguments.length - 2;
          if (1 === c) a.children = r;
          else if (1 < c) {
            for (var s = Array(c), u = 0; u < c; u++) s[u] = arguments[u + 2];
            a.children = s;
          }
          if (e && e.defaultProps)
            for (o in (c = e.defaultProps)) void 0 === a[o] && (a[o] = c[o]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: w.current,
          };
        }
        function _(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var O = /\/+/g;
        function P(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function j(e, t, o, a, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var c = !1;
          if (null === e) c = !0;
          else
            switch (l) {
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    c = !0;
                }
            }
          if (c)
            return (
              (i = i((c = e))),
              (e = "" === a ? "." + P(c, 0) : a),
              S(i)
                ? ((o = ""),
                  null != e && (o = e.replace(O, "$&/") + "/"),
                  j(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (_(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (c && c.key === i.key)
                          ? ""
                          : ("" + i.key).replace(O, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((c = 0), (a = "" === a ? "." : a + ":"), S(e)))
            for (var s = 0; s < e.length; s++) {
              var u = a + P((l = e[s]), s);
              c += j(l, t, o, u, i);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" == typeof u)
          )
            for (e = u.call(e), s = 0; !(l = e.next()).done; )
              c += j((l = l.value), t, o, (u = a + P(l, s++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return c;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            j(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function N(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var M = { current: null },
          L = { transition: null },
          z = {
            ReactCurrentDispatcher: M,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: w,
          };
        function R() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!_(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
          (t.act = R),
          (t.cloneElement = function (e, t, r) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var o = m({}, e.props),
              a = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = w.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var c = e.type.defaultProps;
              for (s in t)
                k.call(t, s) &&
                  !C.hasOwnProperty(s) &&
                  (o[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) o.children = r;
            else if (1 < s) {
              c = Array(s);
              for (var u = 0; u < s; u++) c[u] = arguments[u + 2];
              o.children = c;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: c,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = _),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: N,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = R),
          (t.useCallback = function (e, t) {
            return M.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return M.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return M.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return M.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return M.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return M.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return M.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return M.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return M.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return M.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return M.current.useRef(e);
          }),
          (t.useState = function (e) {
            return M.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return M.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return M.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        "use strict";
        e.exports = n(202);
      },
      579: (e, t, n) => {
        "use strict";
        e.exports = n(153);
      },
      234: (e, t) => {
        "use strict";
        /**
         * @license React
         * scheduler.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                c = e[l],
                s = l + 1,
                u = e[s];
              if (0 > a(c, n))
                s < o && 0 > a(u, c)
                  ? ((e[r] = u), (e[s] = n), (r = s))
                  : ((e[r] = c), (e[l] = n), (r = l));
              else {
                if (!(s < o && 0 > a(u, n))) break e;
                (e[r] = u), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" == typeof performance &&
          "function" == typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            c = l.now();
          t.unstable_now = function () {
            return l.now() - c;
          };
        }
        var s = [],
          u = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = "function" == typeof setTimeout ? setTimeout : null,
          y = "function" == typeof clearTimeout ? clearTimeout : null,
          b = "undefined" != typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) o(u);
            else {
              if (!(t.startTime <= e)) break;
              o(u), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(u);
          }
        }
        function S(e) {
          if (((g = !1), x(e), !m))
            if (null !== r(s)) (m = !0), L(k);
            else {
              var t = r(u);
              null !== t && z(S, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), g && ((g = !1), y(_), (_ = -1)), (h = !0);
          var a = p;
          try {
            for (
              x(n), f = r(s);
              null !== f && (!(f.expirationTime > n) || (e && !j()));

            ) {
              var i = f.callback;
              if ("function" == typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var l = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" == typeof l
                    ? (f.callback = l)
                    : f === r(s) && o(s),
                  x(n);
              } else o(s);
              f = r(s);
            }
            if (null !== f) var c = !0;
            else {
              var d = r(u);
              null !== d && z(S, d.startTime - n), (c = !1);
            }
            return c;
          } finally {
            (f = null), (p = a), (h = !1);
          }
        }
        "undefined" != typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var w,
          C = !1,
          E = null,
          _ = -1,
          O = 5,
          P = -1;
        function j() {
          return !(t.unstable_now() - P < O);
        }
        function T() {
          if (null !== E) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? w() : ((C = !1), (E = null));
            }
          } else C = !1;
        }
        if ("function" == typeof b)
          w = function () {
            b(T);
          };
        else if ("undefined" != typeof MessageChannel) {
          var N = new MessageChannel(),
            M = N.port2;
          (N.port1.onmessage = T),
            (w = function () {
              M.postMessage(null);
            });
        } else
          w = function () {
            v(T, 0);
          };
        function L(e) {
          (E = e), C || ((C = !0), w());
        }
        function z(e, n) {
          _ = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), L(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (O = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (
              ("object" == typeof a && null !== a
                ? (a = "number" == typeof (a = a.delay) && 0 < a ? i + a : i)
                : (a = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  n(u, e),
                  null === r(s) &&
                    e === r(u) &&
                    (g ? (y(_), (_ = -1)) : (g = !0), z(S, a - i)))
                : ((e.sortIndex = l), n(s, e), m || h || ((m = !0), L(k))),
              e
            );
          }),
          (t.unstable_shouldYield = j),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        "use strict";
        e.exports = n(234);
      },
      139: (e, t) => {
        var n;
        /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function o() {
            for (var e = "", t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              n && (e = i(e, a(n)));
            }
            return e;
          }
          function a(e) {
            if ("string" == typeof e || "number" == typeof e) return e;
            if ("object" != typeof e) return "";
            if (Array.isArray(e)) return o.apply(null, e);
            if (
              e.toString !== Object.prototype.toString &&
              !e.toString.toString().includes("[native code]")
            )
              return e.toString();
            var t = "";
            for (var n in e) r.call(e, n) && e[n] && (t = i(t, n));
            return t;
          }
          function i(e, t) {
            return t ? (e ? e + " " + t : e + t) : e;
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (n = function () {
                  return o;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
    },
    r = {};
  function o(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var a = (r[e] = { exports: {} });
    return n[e](a, a.exports, o), a.exports;
  }
  (o.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return o.d(t, { a: t }), t;
  }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (o.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ("object" == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && "function" == typeof n.then) return n;
      }
      var a = Object.create(null);
      o.r(a);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var l = 2 & r && n; "object" == typeof l && !~e.indexOf(l); l = t(l))
        Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => n[e]));
      return (i.default = () => n), o.d(a, i), a;
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      var e = o(43),
        t = o.t(e, 2),
        n = o(391);
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
      function a(e) {
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
          (t = a(t)) in e
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
      function l(e, t) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (t.includes(r)) continue;
            n[r] = e[r];
          }
        return n;
      }
      function u(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = s(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.includes(n) ||
                ({}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      const d = "styles_header__5IzpB",
        f = {
          tiny: "styles_tiny__6Bexq",
          tinyVR: "styles_tinyVR__u1Qal",
          tinyHR: "styles_tinyHR__zdOQw",
          tinyTop: "styles_tinyTop__vvnmu",
          tinyRight: "styles_tinyRight__lDFMC",
          tinyBottom: "styles_tinyBottom__DOtYj",
          tinyLeft: "styles_tinyLeft__OkkPg",
          small: "styles_small__Vakjp",
          smallVR: "styles_smallVR__JDvzE",
          smallHR: "styles_smallHR__ouihU",
          smallTop: "styles_smallTop__3N6lU",
          smallRight: "styles_smallRight__IypnK",
          smallBottom: "styles_smallBottom__d2IEp",
          smallLeft: "styles_smallLeft__D+1xx",
          medium: "styles_medium__Aor0H",
          mediumVR: "styles_mediumVR__HKMBd",
          mediumHR: "styles_mediumHR__YWZFo",
          mediumTop: "styles_mediumTop__+fTAX",
          mediumRight: "styles_mediumRight__t0OIY",
          mediumBottom: "styles_mediumBottom__I6wAG",
          mediumLeft: "styles_mediumLeft__Wx-3A",
          large: "styles_large__90f06",
          largeVR: "styles_largeVR__fF61A",
          largeHR: "styles_largeHR__h2-fX",
          largeTop: "styles_largeTop__KGCzk",
          largeRight: "styles_largeRight__-H5hq",
          largeBottom: "styles_largeBottom__-rhfK",
          largeLeft: "styles_largeLeft__yU-CN",
        };
      var p = o(139),
        h = o.n(p),
        m = o(579);
      const g = ["children", "render", "className", "style"],
        v = (e) => {
          let { children: t, render: n, className: r, style: o } = e,
            a = u(e, g);
          const i = h()(
            Object.keys(a)
              .filter((e) => a[e])
              .map((e) => f[e]),
            r,
          );
          return n
            ? n({ className: i, style: o, children: t })
            : (0, m.jsx)("div", { style: o, className: i, children: t });
        },
        y = {
          flexBox: "styles_flexBox__+mUCI",
          gap_tiny: "styles_gap_tiny__bMEeU",
          gap_small: "styles_gap_small__5uGoz",
          gap_medium: "styles_gap_medium__1aMgf",
          gap_large: "styles_gap_large__8jbWS",
          column: "styles_column__1Hlmm",
        };
      function b(e) {
        if (Array.isArray(e)) return e;
      }
      function x(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function S(e, t) {
        if (e) {
          if ("string" == typeof e) return x(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? x(e, t)
                : void 0
          );
        }
      }
      function k() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      function w(e, t) {
        return (
          b(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a,
                i,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = a.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          S(e, t) ||
          k()
        );
      }
      function C(e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function E(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return x(e);
          })(e) ||
          C(e) ||
          S(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      const _ = function (e) {
        for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
          (t =
            1540483477 *
              (65535 &
                (t =
                  (255 & e.charCodeAt(r)) |
                  ((255 & e.charCodeAt(++r)) << 8) |
                  ((255 & e.charCodeAt(++r)) << 16) |
                  ((255 & e.charCodeAt(++r)) << 24))) +
            ((59797 * (t >>> 16)) << 16)),
            (n =
              (1540483477 * (65535 & (t ^= t >>> 24)) +
                ((59797 * (t >>> 16)) << 16)) ^
              (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
        switch (o) {
          case 3:
            n ^= (255 & e.charCodeAt(r + 2)) << 16;
          case 2:
            n ^= (255 & e.charCodeAt(r + 1)) << 8;
          case 1:
            n =
              1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
              ((59797 * (n >>> 16)) << 16);
        }
        return (
          ((n =
            1540483477 * (65535 & (n ^= n >>> 13)) +
            ((59797 * (n >>> 16)) << 16)) ^
            (n >>> 15)) >>>
          0
        ).toString(36);
      };
      function O() {
        return !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      }
      var P = "data-rc-order",
        j = "data-rc-priority",
        T = new Map();
      function N() {
        var e = (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        ).mark;
        return e
          ? e.startsWith("data-")
            ? e
            : "data-".concat(e)
          : "rc-util-key";
      }
      function M(e) {
        return e.attachTo
          ? e.attachTo
          : document.querySelector("head") || document.body;
      }
      function L(e) {
        return Array.from((T.get(e) || e).children).filter(function (e) {
          return "STYLE" === e.tagName;
        });
      }
      function z(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!O()) return null;
        var n = t.csp,
          r = t.prepend,
          o = t.priority,
          a = void 0 === o ? 0 : o,
          i = (function (e) {
            return "queue" === e ? "prependQueue" : e ? "prepend" : "append";
          })(r),
          l = "prependQueue" === i,
          c = document.createElement("style");
        c.setAttribute(P, i),
          l && a && c.setAttribute(j, "".concat(a)),
          null != n && n.nonce && (c.nonce = null == n ? void 0 : n.nonce),
          (c.innerHTML = e);
        var s = M(t),
          u = s.firstChild;
        if (r) {
          if (l) {
            var d = (t.styles || L(s)).filter(function (e) {
              if (!["prepend", "prependQueue"].includes(e.getAttribute(P)))
                return !1;
              var t = Number(e.getAttribute(j) || 0);
              return a >= t;
            });
            if (d.length)
              return s.insertBefore(c, d[d.length - 1].nextSibling), c;
          }
          s.insertBefore(c, u);
        } else s.appendChild(c);
        return c;
      }
      function R(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = M(t);
        return (t.styles || L(n)).find(function (n) {
          return n.getAttribute(N(t)) === e;
        });
      }
      function I(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = R(e, t);
        n && M(t).removeChild(n);
      }
      function A(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = M(n),
          o = L(r),
          a = c(c({}, n), {}, { styles: o });
        !(function (e, t) {
          var n = T.get(e);
          if (
            !n ||
            !(function (e, t) {
              if (!e) return !1;
              if (e.contains) return e.contains(t);
              for (var n = t; n; ) {
                if (n === e) return !0;
                n = n.parentNode;
              }
              return !1;
            })(document, n)
          ) {
            var r = z("", t),
              o = r.parentNode;
            T.set(e, o), e.removeChild(r);
          }
        })(r, a);
        var i = R(t, a);
        if (i) {
          var l, s, u;
          if (
            null !== (l = a.csp) &&
            void 0 !== l &&
            l.nonce &&
            i.nonce !==
              (null === (s = a.csp) || void 0 === s ? void 0 : s.nonce)
          )
            i.nonce = null === (u = a.csp) || void 0 === u ? void 0 : u.nonce;
          return i.innerHTML !== e && (i.innerHTML = e), i;
        }
        var d = z(e, a);
        return d.setAttribute(N(a), t), d;
      }
      function H(t, n, r) {
        var o = e.useRef({});
        return (
          ("value" in o.current && !r(o.current.condition, n)) ||
            ((o.current.value = t()), (o.current.condition = n)),
          o.current.value
        );
      }
      var B = {},
        F = [];
      function D(e, t) {}
      function U(e, t) {}
      function V(e, t, n) {
        t || B[n] || (e(!1, n), (B[n] = !0));
      }
      function W(e, t) {
        V(D, e, t);
      }
      (W.preMessage = function (e) {
        F.push(e);
      }),
        (W.resetWarned = function () {
          B = {};
        }),
        (W.noteOnce = function (e, t) {
          V(U, e, t);
        });
      const $ = W;
      const G = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o = new Set();
        return (function e(t, a) {
          var i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            l = o.has(t);
          if (($(!l, "Warning: There may be circular references"), l))
            return !1;
          if (t === a) return !0;
          if (n && i > 1) return !1;
          o.add(t);
          var c = i + 1;
          if (Array.isArray(t)) {
            if (!Array.isArray(a) || t.length !== a.length) return !1;
            for (var s = 0; s < t.length; s++) if (!e(t[s], a[s], c)) return !1;
            return !0;
          }
          if (t && a && "object" === r(t) && "object" === r(a)) {
            var u = Object.keys(t);
            return (
              u.length === Object.keys(a).length &&
              u.every(function (n) {
                return e(t[n], a[n], c);
              })
            );
          }
          return !1;
        })(e, t);
      };
      function X(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Q(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, a(r.key), r);
        }
      }
      function K(e, t, n) {
        return (
          t && Q(e.prototype, t),
          n && Q(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function q(e) {
        return e.join("%");
      }
      var Y = (function () {
        function e(t) {
          X(this, e),
            i(this, "instanceId", void 0),
            i(this, "cache", new Map()),
            (this.instanceId = t);
        }
        return (
          K(e, [
            {
              key: "get",
              value: function (e) {
                return this.opGet(q(e));
              },
            },
            {
              key: "opGet",
              value: function (e) {
                return this.cache.get(e) || null;
              },
            },
            {
              key: "update",
              value: function (e, t) {
                return this.opUpdate(q(e), t);
              },
            },
            {
              key: "opUpdate",
              value: function (e, t) {
                var n = t(this.cache.get(e));
                null === n ? this.cache.delete(e) : this.cache.set(e, n);
              },
            },
          ]),
          e
        );
      })();
      const Z = Y;
      var J = "data-token-hash",
        ee = "data-css-hash",
        te = "__cssinjs_instance__";
      function ne() {
        var e = Math.random().toString(12).slice(2);
        if ("undefined" != typeof document && document.head && document.body) {
          var t =
              document.body.querySelectorAll("style[".concat(ee, "]")) || [],
            n = document.head.firstChild;
          Array.from(t).forEach(function (t) {
            (t[te] = t[te] || e),
              t[te] === e && document.head.insertBefore(t, n);
          });
          var r = {};
          Array.from(
            document.querySelectorAll("style[".concat(ee, "]")),
          ).forEach(function (t) {
            var n,
              o = t.getAttribute(ee);
            r[o]
              ? t[te] === e &&
                (null === (n = t.parentNode) ||
                  void 0 === n ||
                  n.removeChild(t))
              : (r[o] = !0);
          });
        }
        return new Z(e);
      }
      var re = e.createContext({
        hashPriority: "low",
        cache: ne(),
        defaultCache: !0,
      });
      const oe = re;
      var ae = "CALC_UNIT";
      new RegExp(ae, "g");
      var ie = (function () {
        function e() {
          X(this, e),
            i(this, "cache", void 0),
            i(this, "keys", void 0),
            i(this, "cacheCallTimes", void 0),
            (this.cache = new Map()),
            (this.keys = []),
            (this.cacheCallTimes = 0);
        }
        return (
          K(e, [
            {
              key: "size",
              value: function () {
                return this.keys.length;
              },
            },
            {
              key: "internalGet",
              value: function (e) {
                var t,
                  n,
                  r =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  o = { map: this.cache };
                return (
                  e.forEach(function (e) {
                    var t;
                    o
                      ? (o =
                          null === (t = o) ||
                          void 0 === t ||
                          null === (t = t.map) ||
                          void 0 === t
                            ? void 0
                            : t.get(e))
                      : (o = void 0);
                  }),
                  null !== (t = o) &&
                    void 0 !== t &&
                    t.value &&
                    r &&
                    (o.value[1] = this.cacheCallTimes++),
                  null === (n = o) || void 0 === n ? void 0 : n.value
                );
              },
            },
            {
              key: "get",
              value: function (e) {
                var t;
                return null === (t = this.internalGet(e, !0)) || void 0 === t
                  ? void 0
                  : t[0];
              },
            },
            {
              key: "has",
              value: function (e) {
                return !!this.internalGet(e);
              },
            },
            {
              key: "set",
              value: function (t, n) {
                var r = this;
                if (!this.has(t)) {
                  if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
                    var o = this.keys.reduce(
                        function (e, t) {
                          var n = w(e, 2)[1];
                          return r.internalGet(t)[1] < n
                            ? [t, r.internalGet(t)[1]]
                            : e;
                        },
                        [this.keys[0], this.cacheCallTimes],
                      ),
                      a = w(o, 1)[0];
                    this.delete(a);
                  }
                  this.keys.push(t);
                }
                var i = this.cache;
                t.forEach(function (e, o) {
                  if (o === t.length - 1)
                    i.set(e, { value: [n, r.cacheCallTimes++] });
                  else {
                    var a = i.get(e);
                    a
                      ? a.map || (a.map = new Map())
                      : i.set(e, { map: new Map() }),
                      (i = i.get(e).map);
                  }
                });
              },
            },
            {
              key: "deleteByPath",
              value: function (e, t) {
                var n,
                  r = e.get(t[0]);
                if (1 === t.length)
                  return (
                    r.map ? e.set(t[0], { map: r.map }) : e.delete(t[0]),
                    null === (n = r.value) || void 0 === n ? void 0 : n[0]
                  );
                var o = this.deleteByPath(r.map, t.slice(1));
                return (
                  (r.map && 0 !== r.map.size) || r.value || e.delete(t[0]), o
                );
              },
            },
            {
              key: "delete",
              value: function (e) {
                if (this.has(e))
                  return (
                    (this.keys = this.keys.filter(function (t) {
                      return !(function (e, t) {
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < e.length; n++)
                          if (e[n] !== t[n]) return !1;
                        return !0;
                      })(t, e);
                    })),
                    this.deleteByPath(this.cache, e)
                  );
              },
            },
          ]),
          e
        );
      })();
      i(ie, "MAX_CACHE_SIZE", 20), i(ie, "MAX_CACHE_OFFSET", 5);
      var le = 0,
        ce = (function () {
          function e(t) {
            X(this, e),
              i(this, "derivatives", void 0),
              i(this, "id", void 0),
              (this.derivatives = Array.isArray(t) ? t : [t]),
              (this.id = le),
              0 === t.length && t.length,
              (le += 1);
          }
          return (
            K(e, [
              {
                key: "getDerivativeToken",
                value: function (e) {
                  return this.derivatives.reduce(
                    function (t, n) {
                      return n(e, t);
                    },
                    void 0,
                  );
                },
              },
            ]),
            e
          );
        })(),
        se = new ie();
      function ue(e) {
        var t = Array.isArray(e) ? e : [e];
        return se.has(t) || se.set(t, new ce(t)), se.get(t);
      }
      var de = new WeakMap(),
        fe = {};
      var pe = new WeakMap();
      function he(e) {
        var t = pe.get(e) || "";
        return (
          t ||
            (Object.keys(e).forEach(function (n) {
              var o = e[n];
              (t += n),
                o instanceof ce
                  ? (t += o.id)
                  : o && "object" === r(o)
                    ? (t += he(o))
                    : (t += o);
            }),
            (t = _(t)),
            pe.set(e, t)),
          t
        );
      }
      function me(e, t) {
        return _("".concat(t, "_").concat(he(e)));
      }
      "random-"
        .concat(Date.now(), "-")
        .concat(Math.random())
        .replace(/\./g, "");
      var ge = O();
      function ve(e) {
        return "number" == typeof e ? "".concat(e, "px") : e;
      }
      function ye(e, t, n) {
        var r;
        if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
          return e;
        var o = c(
            c(
              {},
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            ),
            {},
            (i((r = {}), J, t), i(r, ee, n), r),
          ),
          a = Object.keys(o)
            .map(function (e) {
              var t = o[e];
              return t ? "".concat(e, '="').concat(t, '"') : null;
            })
            .filter(function (e) {
              return e;
            })
            .join(" ");
        return "<style ".concat(a, ">").concat(e, "</style>");
      }
      var be = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return "--"
            .concat(t ? "".concat(t, "-") : "")
            .concat(e)
            .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
            .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2")
            .replace(/([a-z])([A-Z0-9])/g, "$1-$2")
            .toLowerCase();
        },
        xe = function (e, t, n) {
          return Object.keys(e).length
            ? "."
                .concat(t)
                .concat(null != n && n.scope ? ".".concat(n.scope) : "", "{")
                .concat(
                  Object.entries(e)
                    .map(function (e) {
                      var t = w(e, 2),
                        n = t[0],
                        r = t[1];
                      return "".concat(n, ":").concat(r, ";");
                    })
                    .join(""),
                  "}",
                )
            : "";
        },
        Se = function (e, t, n) {
          var r = {},
            o = {};
          return (
            Object.entries(e).forEach(function (e) {
              var t,
                a,
                i = w(e, 2),
                l = i[0],
                c = i[1];
              if (
                null != n &&
                null !== (t = n.preserve) &&
                void 0 !== t &&
                t[l]
              )
                o[l] = c;
              else if (
                !(
                  ("string" != typeof c && "number" != typeof c) ||
                  (null != n && null !== (a = n.ignore) && void 0 !== a && a[l])
                )
              ) {
                var s,
                  u = be(l, null == n ? void 0 : n.prefix);
                (r[u] =
                  "number" != typeof c ||
                  (null != n &&
                    null !== (s = n.unitless) &&
                    void 0 !== s &&
                    s[l])
                    ? String(c)
                    : "".concat(c, "px")),
                  (o[l] = "var(".concat(u, ")"));
              }
            }),
            [o, xe(r, t, { scope: null == n ? void 0 : n.scope })]
          );
        },
        ke = O() ? e.useLayoutEffect : e.useEffect,
        we = function (t, n) {
          var r = e.useRef(!0);
          ke(function () {
            return t(r.current);
          }, n),
            ke(function () {
              return (
                (r.current = !1),
                function () {
                  r.current = !0;
                }
              );
            }, []);
        },
        Ce = function (e, t) {
          we(function (t) {
            if (!t) return e();
          }, t);
        };
      const Ee = we;
      var _e = c({}, t).useInsertionEffect;
      const Oe = _e
        ? function (e, t, n) {
            return _e(function () {
              return e(), t();
            }, n);
          }
        : function (t, n, r) {
            e.useMemo(t, r),
              Ee(function () {
                return n(!0);
              }, r);
          };
      const Pe =
        void 0 !== c({}, t).useInsertionEffect
          ? function (t) {
              var n = [],
                r = !1;
              return (
                e.useEffect(function () {
                  return (
                    (r = !1),
                    function () {
                      (r = !0),
                        n.length &&
                          n.forEach(function (e) {
                            return e();
                          });
                    }
                  );
                }, t),
                function (e) {
                  r || n.push(e);
                }
              );
            }
          : function () {
              return function (e) {
                e();
              };
            };
      const je = function () {
        return !1;
      };
      function Te(t, n, r, o, a) {
        var i = e.useContext(oe).cache,
          l = q([t].concat(E(n))),
          c = Pe([l]),
          s =
            (je(),
            function (e) {
              i.opUpdate(l, function (t) {
                var n = w(t || [void 0, void 0], 2),
                  o = n[0];
                var a = [void 0 === o ? 0 : o, n[1] || r()];
                return e ? e(a) : a;
              });
            });
        e.useMemo(
          function () {
            s();
          },
          [l],
        );
        var u = i.opGet(l)[1];
        return (
          Oe(
            function () {
              null == a || a(u);
            },
            function (e) {
              return (
                s(function (t) {
                  var n = w(t, 2),
                    r = n[0],
                    o = n[1];
                  return e && 0 === r && (null == a || a(u)), [r + 1, o];
                }),
                function () {
                  i.opUpdate(l, function (t) {
                    var n = w(t || [], 2),
                      r = n[0],
                      a = void 0 === r ? 0 : r,
                      s = n[1];
                    return 0 === a - 1
                      ? (c(function () {
                          (!e && i.opGet(l)) || null == o || o(s, !1);
                        }),
                        null)
                      : [a - 1, s];
                  });
                }
              );
            },
            [l],
          ),
          u
        );
      }
      var Ne = {},
        Me = new Map();
      function Le(e, t) {
        Me.set(e, (Me.get(e) || 0) - 1);
        var n = Array.from(Me.keys()),
          r = n.filter(function (e) {
            return (Me.get(e) || 0) <= 0;
          });
        n.length - r.length > 0 &&
          r.forEach(function (e) {
            !(function (e, t) {
              "undefined" != typeof document &&
                document
                  .querySelectorAll("style[".concat(J, '="').concat(e, '"]'))
                  .forEach(function (e) {
                    var n;
                    e[te] === t &&
                      (null === (n = e.parentNode) ||
                        void 0 === n ||
                        n.removeChild(e));
                  });
            })(e, t),
              Me.delete(e);
          });
      }
      var ze = function (e, t, n, r) {
          var o = c(c({}, n.getDerivativeToken(e)), t);
          return r && (o = r(o)), o;
        },
        Re = "token";
      function Ie(t, n) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = (0, e.useContext)(oe),
          a = o.cache.instanceId,
          i = o.container,
          l = r.salt,
          s = void 0 === l ? "" : l,
          u = r.override,
          d = void 0 === u ? Ne : u,
          f = r.formatToken,
          p = r.getComputedToken,
          h = r.cssVar,
          m = (function (e, t) {
            for (var n = de, r = 0; r < t.length; r += 1) {
              var o = t[r];
              n.has(o) || n.set(o, new WeakMap()), (n = n.get(o));
            }
            return n.has(fe) || n.set(fe, e()), n.get(fe);
          })(function () {
            return Object.assign.apply(Object, [{}].concat(E(n)));
          }, n),
          g = he(m),
          v = he(d),
          y = h ? he(h) : "",
          b = Te(
            Re,
            [s, t.id, g, v, y],
            function () {
              var e,
                n = p ? p(m, d, t) : ze(m, d, t, f),
                r = c({}, n),
                o = "";
              if (h) {
                var a = w(
                  Se(n, h.key, {
                    prefix: h.prefix,
                    ignore: h.ignore,
                    unitless: h.unitless,
                    preserve: h.preserve,
                  }),
                  2,
                );
                (n = a[0]), (o = a[1]);
              }
              var i = me(n, s);
              (n._tokenKey = i), (r._tokenKey = me(r, s));
              var l =
                null !== (e = null == h ? void 0 : h.key) && void 0 !== e
                  ? e
                  : i;
              (n._themeKey = l),
                (function (e) {
                  Me.set(e, (Me.get(e) || 0) + 1);
                })(l);
              var u = "".concat("css", "-").concat(_(i));
              return (
                (n._hashId = u),
                [n, u, r, o, (null == h ? void 0 : h.key) || ""]
              );
            },
            function (e) {
              Le(e[0]._themeKey, a);
            },
            function (e) {
              var t = w(e, 4),
                n = t[0],
                r = t[3];
              if (h && r) {
                var o = A(r, _("css-variables-".concat(n._themeKey)), {
                  mark: ee,
                  prepend: "queue",
                  attachTo: i,
                  priority: -999,
                });
                (o[te] = a), o.setAttribute(J, n._themeKey);
              }
            },
          );
        return b;
      }
      function Ae() {
        return (
          (Ae = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ae.apply(null, arguments)
        );
      }
      const He = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
      var Be = "comm",
        Fe = "rule",
        De = "decl",
        Ue = Math.abs,
        Ve = String.fromCharCode;
      Object.assign;
      function We(e) {
        return e.trim();
      }
      function $e(e, t, n) {
        return e.replace(t, n);
      }
      function Ge(e, t, n) {
        return e.indexOf(t, n);
      }
      function Xe(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function Qe(e, t, n) {
        return e.slice(t, n);
      }
      function Ke(e) {
        return e.length;
      }
      function qe(e, t) {
        return t.push(e), e;
      }
      function Ye(e, t) {
        for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
        return n;
      }
      function Ze(e, t, n, r) {
        switch (e.type) {
          case "@layer":
            if (e.children.length) break;
          case "@import":
          case De:
            return (e.return = e.return || e.value);
          case Be:
            return "";
          case "@keyframes":
            return (e.return = e.value + "{" + Ye(e.children, r) + "}");
          case Fe:
            if (!Ke((e.value = e.props.join(",")))) return "";
        }
        return Ke((n = Ye(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      var Je = 1,
        et = 1,
        tt = 0,
        nt = 0,
        rt = 0,
        ot = "";
      function at(e, t, n, r, o, a, i, l) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: o,
          children: a,
          line: Je,
          column: et,
          length: i,
          return: "",
          siblings: l,
        };
      }
      function it() {
        return (
          (rt = nt > 0 ? Xe(ot, --nt) : 0),
          et--,
          10 === rt && ((et = 1), Je--),
          rt
        );
      }
      function lt() {
        return (
          (rt = nt < tt ? Xe(ot, nt++) : 0),
          et++,
          10 === rt && ((et = 1), Je++),
          rt
        );
      }
      function ct() {
        return Xe(ot, nt);
      }
      function st() {
        return nt;
      }
      function ut(e, t) {
        return Qe(ot, e, t);
      }
      function dt(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function ft(e) {
        return (Je = et = 1), (tt = Ke((ot = e))), (nt = 0), [];
      }
      function pt(e) {
        return (ot = ""), e;
      }
      function ht(e) {
        return We(ut(nt - 1, vt(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function mt(e) {
        for (; (rt = ct()) && rt < 33; ) lt();
        return dt(e) > 2 || dt(rt) > 3 ? "" : " ";
      }
      function gt(e, t) {
        for (
          ;
          --t &&
          lt() &&
          !(
            rt < 48 ||
            rt > 102 ||
            (rt > 57 && rt < 65) ||
            (rt > 70 && rt < 97)
          );

        );
        return ut(e, st() + (t < 6 && 32 == ct() && 32 == lt()));
      }
      function vt(e) {
        for (; lt(); )
          switch (rt) {
            case e:
              return nt;
            case 34:
            case 39:
              34 !== e && 39 !== e && vt(rt);
              break;
            case 40:
              41 === e && vt(e);
              break;
            case 92:
              lt();
          }
        return nt;
      }
      function yt(e, t) {
        for (; lt() && e + rt !== 57 && (e + rt !== 84 || 47 !== ct()); );
        return "/*" + ut(t, nt - 1) + "*" + Ve(47 === e ? e : lt());
      }
      function bt(e) {
        for (; !dt(ct()); ) lt();
        return ut(e, nt);
      }
      function xt(e) {
        return pt(St("", null, null, null, [""], (e = ft(e)), 0, [0], e));
      }
      function St(e, t, n, r, o, a, i, l, c) {
        for (
          var s = 0,
            u = 0,
            d = i,
            f = 0,
            p = 0,
            h = 0,
            m = 1,
            g = 1,
            v = 1,
            y = 0,
            b = "",
            x = o,
            S = a,
            k = r,
            w = b;
          g;

        )
          switch (((h = y), (y = lt()))) {
            case 40:
              if (108 != h && 58 == Xe(w, d - 1)) {
                -1 !=
                  Ge(
                    (w += $e(ht(y), "&", "&\f")),
                    "&\f",
                    Ue(s ? l[s - 1] : 0),
                  ) && (v = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              w += ht(y);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              w += mt(h);
              break;
            case 92:
              w += gt(st() - 1, 7);
              continue;
            case 47:
              switch (ct()) {
                case 42:
                case 47:
                  qe(wt(yt(lt(), st()), t, n, c), c),
                    (5 != dt(h || 1) && 5 != dt(ct() || 1)) ||
                      !Ke(w) ||
                      " " === Qe(w, -1, void 0) ||
                      (w += " ");
                  break;
                default:
                  w += "/";
              }
              break;
            case 123 * m:
              l[s++] = Ke(w) * v;
            case 125 * m:
            case 59:
            case 0:
              switch (y) {
                case 0:
                case 125:
                  g = 0;
                case 59 + u:
                  -1 == v && (w = $e(w, /\f/g, "")),
                    p > 0 &&
                      (Ke(w) - d || (0 === m && 47 === h)) &&
                      qe(
                        p > 32
                          ? Ct(w + ";", r, n, d - 1, c)
                          : Ct($e(w, " ", "") + ";", r, n, d - 2, c),
                        c,
                      );
                  break;
                case 59:
                  w += ";";
                default:
                  if (
                    (qe(
                      (k = kt(
                        w,
                        t,
                        n,
                        s,
                        u,
                        o,
                        l,
                        b,
                        (x = []),
                        (S = []),
                        d,
                        a,
                      )),
                      a,
                    ),
                    123 === y)
                  )
                    if (0 === u) St(w, t, k, k, x, a, d, l, S);
                    else
                      switch (99 === f && 110 === Xe(w, 3) ? 100 : f) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          St(
                            e,
                            k,
                            k,
                            r &&
                              qe(
                                kt(e, k, k, 0, 0, o, l, b, o, (x = []), d, S),
                                S,
                              ),
                            o,
                            S,
                            d,
                            l,
                            r ? x : S,
                          );
                          break;
                        default:
                          St(w, k, k, k, [""], S, 0, l, S);
                      }
              }
              (s = u = p = 0), (m = v = 1), (b = w = ""), (d = i);
              break;
            case 58:
              (d = 1 + Ke(w)), (p = h);
            default:
              if (m < 1)
                if (123 == y) --m;
                else if (125 == y && 0 == m++ && 125 == it()) continue;
              switch (((w += Ve(y)), y * m)) {
                case 38:
                  v = u > 0 ? 1 : ((w += "\f"), -1);
                  break;
                case 44:
                  (l[s++] = (Ke(w) - 1) * v), (v = 1);
                  break;
                case 64:
                  45 === ct() && (w += ht(lt())),
                    (f = ct()),
                    (u = d = Ke((b = w += bt(st())))),
                    y++;
                  break;
                case 45:
                  45 === h && 2 == Ke(w) && (m = 0);
              }
          }
        return a;
      }
      function kt(e, t, n, r, o, a, i, l, c, s, u, d) {
        for (
          var f = o - 1,
            p = 0 === o ? a : [""],
            h = (function (e) {
              return e.length;
            })(p),
            m = 0,
            g = 0,
            v = 0;
          m < r;
          ++m
        )
          for (
            var y = 0, b = Qe(e, f + 1, (f = Ue((g = i[m])))), x = e;
            y < h;
            ++y
          )
            (x = We(g > 0 ? p[y] + " " + b : $e(b, /&\f/g, p[y]))) &&
              (c[v++] = x);
        return at(e, t, n, 0 === o ? Fe : l, c, s, u, d);
      }
      function wt(e, t, n, r) {
        return at(e, t, n, Be, Ve(rt), Qe(e, 2, -2), 0, r);
      }
      function Ct(e, t, n, r, o) {
        return at(e, t, n, De, Qe(e, 0, r), Qe(e, r + 1, -1), r, o);
      }
      var Et,
        _t = "data-ant-cssinjs-cache-path",
        Ot = "_FILE_STYLE__";
      var Pt = !0;
      function jt(e) {
        return (
          (function () {
            if (!Et && ((Et = {}), O())) {
              var e = document.createElement("div");
              (e.className = _t),
                (e.style.position = "fixed"),
                (e.style.visibility = "hidden"),
                (e.style.top = "-9999px"),
                document.body.appendChild(e);
              var t = getComputedStyle(e).content || "";
              (t = t.replace(/^"/, "").replace(/"$/, ""))
                .split(";")
                .forEach(function (e) {
                  var t = w(e.split(":"), 2),
                    n = t[0],
                    r = t[1];
                  Et[n] = r;
                });
              var n,
                r = document.querySelector("style[".concat(_t, "]"));
              r &&
                ((Pt = !1),
                null === (n = r.parentNode) ||
                  void 0 === n ||
                  n.removeChild(r)),
                document.body.removeChild(e);
            }
          })(),
          !!Et[e]
        );
      }
      var Tt = "_multi_value_";
      function Nt(e) {
        return Ye(xt(e), Ze).replace(/\{%%%\:[^;];}/g, ";");
      }
      function Mt(e, t, n) {
        if (!t) return e;
        var r = ".".concat(t),
          o = "low" === n ? ":where(".concat(r, ")") : r;
        return e
          .split(",")
          .map(function (e) {
            var t,
              n = e.trim().split(/\s+/),
              r = n[0] || "",
              a =
                (null === (t = r.match(/^\w+/)) || void 0 === t
                  ? void 0
                  : t[0]) || "";
            return [(r = "".concat(a).concat(o).concat(r.slice(a.length)))]
              .concat(E(n.slice(1)))
              .join(" ");
          })
          .join(",");
      }
      var Lt = function e(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { root: !0, parentSelectors: [] },
          a = o.root,
          i = o.injectHash,
          l = o.parentSelectors,
          s = n.hashId,
          u = n.layer,
          d = (n.path, n.hashPriority),
          f = n.transformers,
          p = void 0 === f ? [] : f,
          h = (n.linters, ""),
          m = {};
        function g(t) {
          var r = t.getName(s);
          if (!m[r]) {
            var o = w(e(t.style, n, { root: !1, parentSelectors: l }), 1)[0];
            m[r] = "@keyframes ".concat(t.getName(s)).concat(o);
          }
        }
        var v = (function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return (
            t.forEach(function (t) {
              Array.isArray(t) ? e(t, n) : t && n.push(t);
            }),
            n
          );
        })(Array.isArray(t) ? t : [t]);
        return (
          v.forEach(function (t) {
            var o = "string" != typeof t || a ? t : {};
            if ("string" == typeof o) h += "".concat(o, "\n");
            else if (o._keyframe) g(o);
            else {
              var u = p.reduce(function (e, t) {
                var n;
                return (
                  (null == t || null === (n = t.visit) || void 0 === n
                    ? void 0
                    : n.call(t, e)) || e
                );
              }, o);
              Object.keys(u).forEach(function (t) {
                var o = u[t];
                if (
                  "object" !== r(o) ||
                  !o ||
                  ("animationName" === t && o._keyframe) ||
                  (function (e) {
                    return (
                      "object" === r(e) && e && ("_skip_check_" in e || Tt in e)
                    );
                  })(o)
                ) {
                  var f;
                  function C(e, t) {
                    var n = e.replace(/[A-Z]/g, function (e) {
                        return "-".concat(e.toLowerCase());
                      }),
                      r = t;
                    He[e] ||
                      "number" != typeof r ||
                      0 === r ||
                      (r = "".concat(r, "px")),
                      "animationName" === e &&
                        null != t &&
                        t._keyframe &&
                        (g(t), (r = t.getName(s))),
                      (h += "".concat(n, ":").concat(r, ";"));
                  }
                  var p =
                    null !== (f = null == o ? void 0 : o.value) && void 0 !== f
                      ? f
                      : o;
                  "object" === r(o) && null != o && o[Tt] && Array.isArray(p)
                    ? p.forEach(function (e) {
                        C(t, e);
                      })
                    : C(t, p);
                } else {
                  var v = !1,
                    y = t.trim(),
                    b = !1;
                  (a || i) && s
                    ? y.startsWith("@")
                      ? (v = !0)
                      : (y = Mt("&" === y ? "" : t, s, d))
                    : !a ||
                      s ||
                      ("&" !== y && "" !== y) ||
                      ((y = ""), (b = !0));
                  var x = w(
                      e(o, n, {
                        root: b,
                        injectHash: v,
                        parentSelectors: [].concat(E(l), [y]),
                      }),
                      2,
                    ),
                    S = x[0],
                    k = x[1];
                  (m = c(c({}, m), k)), (h += "".concat(y).concat(S));
                }
              });
            }
          }),
          a
            ? u &&
              (h && (h = "@layer ".concat(u.name, " {").concat(h, "}")),
              u.dependencies &&
                (m["@layer ".concat(u.name)] = u.dependencies
                  .map(function (e) {
                    return "@layer ".concat(e, ", ").concat(u.name, ";");
                  })
                  .join("\n")))
            : (h = "{".concat(h, "}")),
          [h, m]
        );
      };
      function zt(e, t) {
        return _("".concat(e.join("%")).concat(t));
      }
      function Rt() {
        return null;
      }
      var It = "style";
      function At(t, n) {
        var r = t.token,
          o = t.path,
          a = t.hashId,
          l = t.layer,
          s = t.nonce,
          u = t.clientOnly,
          d = t.order,
          f = void 0 === d ? 0 : d,
          p = e.useContext(oe),
          h = p.autoClear,
          m = (p.mock, p.defaultCache),
          g = p.hashPriority,
          v = p.container,
          y = p.ssrInline,
          b = p.transformers,
          x = p.linters,
          S = p.cache,
          k = p.layer,
          C = r._tokenKey,
          _ = [C];
        k && _.push("layer"), _.push.apply(_, E(o));
        var P = ge;
        var j = Te(
            It,
            _,
            function () {
              var e = _.join("|");
              if (jt(e)) {
                var t = (function (e) {
                    var t = Et[e],
                      n = null;
                    if (t && O())
                      if (Pt) n = Ot;
                      else {
                        var r = document.querySelector(
                          "style[".concat(ee, '="').concat(Et[e], '"]'),
                        );
                        r ? (n = r.innerHTML) : delete Et[e];
                      }
                    return [n, t];
                  })(e),
                  r = w(t, 2),
                  i = r[0],
                  c = r[1];
                if (i) return [i, C, c, {}, u, f];
              }
              var s = n(),
                d = w(
                  Lt(s, {
                    hashId: a,
                    hashPriority: g,
                    layer: k ? l : void 0,
                    path: o.join("-"),
                    transformers: b,
                    linters: x,
                  }),
                  2,
                ),
                p = d[0],
                h = d[1],
                m = Nt(p),
                v = zt(_, m);
              return [m, C, v, h, u, f];
            },
            function (e, t) {
              var n = w(e, 3)[2];
              (t || h) && ge && I(n, { mark: ee });
            },
            function (e) {
              var t = w(e, 4),
                n = t[0],
                r = (t[1], t[2]),
                o = t[3];
              if (P && n !== Ot) {
                var a = {
                    mark: ee,
                    prepend: !k && "queue",
                    attachTo: v,
                    priority: f,
                  },
                  i = "function" == typeof s ? s() : s;
                i && (a.csp = { nonce: i });
                var l = [],
                  u = [];
                Object.keys(o).forEach(function (e) {
                  e.startsWith("@layer") ? l.push(e) : u.push(e);
                }),
                  l.forEach(function (e) {
                    A(
                      Nt(o[e]),
                      "_layer-".concat(e),
                      c(c({}, a), {}, { prepend: !0 }),
                    );
                  });
                var d = A(n, r, a);
                (d[te] = S.instanceId),
                  d.setAttribute(J, C),
                  u.forEach(function (e) {
                    A(Nt(o[e]), "_effect-".concat(e), a);
                  });
              }
            },
          ),
          T = w(j, 3),
          N = T[0],
          M = T[1],
          L = T[2];
        return function (t) {
          var n, r;
          y && !P && m
            ? (n = e.createElement(
                "style",
                Ae({}, (i((r = {}), J, M), i(r, ee, L), r), {
                  dangerouslySetInnerHTML: { __html: N },
                }),
              ))
            : (n = e.createElement(Rt, null));
          return e.createElement(e.Fragment, null, n, t);
        };
      }
      var Ht = "cssVar";
      const Bt = function (t, n) {
        var r = t.key,
          o = t.prefix,
          a = t.unitless,
          i = t.ignore,
          l = t.token,
          c = t.scope,
          s = void 0 === c ? "" : c,
          u = (0, e.useContext)(oe),
          d = u.cache.instanceId,
          f = u.container,
          p = l._tokenKey,
          h = [].concat(E(t.path), [r, s, p]),
          m = Te(
            Ht,
            h,
            function () {
              var e = n(),
                t = w(
                  Se(e, r, { prefix: o, unitless: a, ignore: i, scope: s }),
                  2,
                ),
                l = t[0],
                c = t[1];
              return [l, c, zt(h, c), r];
            },
            function (e) {
              var t = w(e, 3)[2];
              ge && I(t, { mark: ee });
            },
            function (e) {
              var t = w(e, 3),
                n = t[1],
                o = t[2];
              if (n) {
                var a = A(n, o, {
                  mark: ee,
                  prepend: "queue",
                  attachTo: f,
                  priority: -999,
                });
                (a[te] = d), a.setAttribute(J, r);
              }
            },
          );
        return m;
      };
      var Ft;
      i((Ft = {}), It, function (e, t, n) {
        var r = w(e, 6),
          o = r[0],
          a = r[1],
          i = r[2],
          l = r[3],
          c = r[4],
          s = r[5],
          u = (n || {}).plain;
        if (c) return null;
        var d = o,
          f = {
            "data-rc-order": "prependQueue",
            "data-rc-priority": "".concat(s),
          };
        return (
          (d = ye(o, a, i, f, u)),
          l &&
            Object.keys(l).forEach(function (e) {
              if (!t[e]) {
                t[e] = !0;
                var n = ye(Nt(l[e]), a, "_effect-".concat(e), f, u);
                e.startsWith("@layer") ? (d = n + d) : (d += n);
              }
            }),
          [s, i, d]
        );
      }),
        i(Ft, Re, function (e, t, n) {
          var r = w(e, 5),
            o = r[2],
            a = r[3],
            i = r[4],
            l = (n || {}).plain;
          if (!a) return null;
          var c = o._tokenKey;
          return [
            -999,
            c,
            ye(
              a,
              i,
              c,
              {
                "data-rc-order": "prependQueue",
                "data-rc-priority": "".concat(-999),
              },
              l,
            ),
          ];
        }),
        i(Ft, Ht, function (e, t, n) {
          var r = w(e, 4),
            o = r[1],
            a = r[2],
            i = r[3],
            l = (n || {}).plain;
          if (!o) return null;
          return [
            -999,
            a,
            ye(
              o,
              i,
              a,
              {
                "data-rc-order": "prependQueue",
                "data-rc-priority": "".concat(-999),
              },
              l,
            ),
          ];
        });
      function Dt(e) {
        return (e.notSplit = !0), e;
      }
      Dt(["borderTop", "borderBottom"]),
        Dt(["borderTop"]),
        Dt(["borderBottom"]),
        Dt(["borderLeft", "borderRight"]),
        Dt(["borderLeft"]),
        Dt(["borderRight"]);
      const Ut = Math.round;
      function Vt(e, t) {
        const n =
            e
              .replace(/^[^(]*\((.*)/, "$1")
              .replace(/\).*/, "")
              .match(/\d*\.?\d+%?/g) || [],
          r = n.map((e) => parseFloat(e));
        for (let e = 0; e < 3; e += 1) r[e] = t(r[e] || 0, n[e] || "", e);
        return (
          n[3] ? (r[3] = n[3].includes("%") ? r[3] / 100 : r[3]) : (r[3] = 1), r
        );
      }
      const Wt = (e, t, n) => (0 === n ? e : e / 100);
      function $t(e, t) {
        const n = t || 255;
        return e > n ? n : e < 0 ? 0 : e;
      }
      class Gt {
        constructor(e) {
          function t(t) {
            return t[0] in e && t[1] in e && t[2] in e;
          }
          if (
            (i(this, "isValid", !0),
            i(this, "r", 0),
            i(this, "g", 0),
            i(this, "b", 0),
            i(this, "a", 1),
            i(this, "_h", void 0),
            i(this, "_s", void 0),
            i(this, "_l", void 0),
            i(this, "_v", void 0),
            i(this, "_max", void 0),
            i(this, "_min", void 0),
            i(this, "_brightness", void 0),
            e)
          )
            if ("string" == typeof e) {
              const n = e.trim();
              function r(e) {
                return n.startsWith(e);
              }
              /^#?[A-F\d]{3,8}$/i.test(n)
                ? this.fromHexString(n)
                : r("rgb")
                  ? this.fromRgbString(n)
                  : r("hsl")
                    ? this.fromHslString(n)
                    : (r("hsv") || r("hsb")) && this.fromHsvString(n);
            } else if (e instanceof Gt)
              (this.r = e.r),
                (this.g = e.g),
                (this.b = e.b),
                (this.a = e.a),
                (this._h = e._h),
                (this._s = e._s),
                (this._l = e._l),
                (this._v = e._v);
            else if (t("rgb"))
              (this.r = $t(e.r)),
                (this.g = $t(e.g)),
                (this.b = $t(e.b)),
                (this.a = "number" == typeof e.a ? $t(e.a, 1) : 1);
            else if (t("hsl")) this.fromHsl(e);
            else {
              if (!t("hsv"))
                throw new Error(
                  "@ant-design/fast-color: unsupported input " +
                    JSON.stringify(e),
                );
              this.fromHsv(e);
            }
          else;
        }
        setR(e) {
          return this._sc("r", e);
        }
        setG(e) {
          return this._sc("g", e);
        }
        setB(e) {
          return this._sc("b", e);
        }
        setA(e) {
          return this._sc("a", e, 1);
        }
        setHue(e) {
          const t = this.toHsv();
          return (t.h = e), this._c(t);
        }
        getLuminance() {
          function e(e) {
            const t = e / 255;
            return t <= 0.03928
              ? t / 12.92
              : Math.pow((t + 0.055) / 1.055, 2.4);
          }
          return 0.2126 * e(this.r) + 0.7152 * e(this.g) + 0.0722 * e(this.b);
        }
        getHue() {
          if (void 0 === this._h) {
            const e = this.getMax() - this.getMin();
            this._h =
              0 === e
                ? 0
                : Ut(
                    60 *
                      (this.r === this.getMax()
                        ? (this.g - this.b) / e + (this.g < this.b ? 6 : 0)
                        : this.g === this.getMax()
                          ? (this.b - this.r) / e + 2
                          : (this.r - this.g) / e + 4),
                  );
          }
          return this._h;
        }
        getSaturation() {
          if (void 0 === this._s) {
            const e = this.getMax() - this.getMin();
            this._s = 0 === e ? 0 : e / this.getMax();
          }
          return this._s;
        }
        getLightness() {
          return (
            void 0 === this._l &&
              (this._l = (this.getMax() + this.getMin()) / 510),
            this._l
          );
        }
        getValue() {
          return void 0 === this._v && (this._v = this.getMax() / 255), this._v;
        }
        getBrightness() {
          return (
            void 0 === this._brightness &&
              (this._brightness =
                (299 * this.r + 587 * this.g + 114 * this.b) / 1e3),
            this._brightness
          );
        }
        darken() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
          const t = this.getHue(),
            n = this.getSaturation();
          let r = this.getLightness() - e / 100;
          return r < 0 && (r = 0), this._c({ h: t, s: n, l: r, a: this.a });
        }
        lighten() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
          const t = this.getHue(),
            n = this.getSaturation();
          let r = this.getLightness() + e / 100;
          return r > 1 && (r = 1), this._c({ h: t, s: n, l: r, a: this.a });
        }
        mix(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50;
          const n = this._c(e),
            r = t / 100,
            o = (e) => (n[e] - this[e]) * r + this[e],
            a = {
              r: Ut(o("r")),
              g: Ut(o("g")),
              b: Ut(o("b")),
              a: Ut(100 * o("a")) / 100,
            };
          return this._c(a);
        }
        tint() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
          return this.mix({ r: 255, g: 255, b: 255, a: 1 }, e);
        }
        shade() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
          return this.mix({ r: 0, g: 0, b: 0, a: 1 }, e);
        }
        onBackground(e) {
          const t = this._c(e),
            n = this.a + t.a * (1 - this.a),
            r = (e) => Ut((this[e] * this.a + t[e] * t.a * (1 - this.a)) / n);
          return this._c({ r: r("r"), g: r("g"), b: r("b"), a: n });
        }
        isDark() {
          return this.getBrightness() < 128;
        }
        isLight() {
          return this.getBrightness() >= 128;
        }
        equals(e) {
          return (
            this.r === e.r && this.g === e.g && this.b === e.b && this.a === e.a
          );
        }
        clone() {
          return this._c(this);
        }
        toHexString() {
          let e = "#";
          const t = (this.r || 0).toString(16);
          e += 2 === t.length ? t : "0" + t;
          const n = (this.g || 0).toString(16);
          e += 2 === n.length ? n : "0" + n;
          const r = (this.b || 0).toString(16);
          if (
            ((e += 2 === r.length ? r : "0" + r),
            "number" == typeof this.a && this.a >= 0 && this.a < 1)
          ) {
            const t = Ut(255 * this.a).toString(16);
            e += 2 === t.length ? t : "0" + t;
          }
          return e;
        }
        toHsl() {
          return {
            h: this.getHue(),
            s: this.getSaturation(),
            l: this.getLightness(),
            a: this.a,
          };
        }
        toHslString() {
          const e = this.getHue(),
            t = Ut(100 * this.getSaturation()),
            n = Ut(100 * this.getLightness());
          return 1 !== this.a
            ? "hsla("
                .concat(e, ",")
                .concat(t, "%,")
                .concat(n, "%,")
                .concat(this.a, ")")
            : "hsl(".concat(e, ",").concat(t, "%,").concat(n, "%)");
        }
        toHsv() {
          return {
            h: this.getHue(),
            s: this.getSaturation(),
            v: this.getValue(),
            a: this.a,
          };
        }
        toRgb() {
          return { r: this.r, g: this.g, b: this.b, a: this.a };
        }
        toRgbString() {
          return 1 !== this.a
            ? "rgba("
                .concat(this.r, ",")
                .concat(this.g, ",")
                .concat(this.b, ",")
                .concat(this.a, ")")
            : "rgb("
                .concat(this.r, ",")
                .concat(this.g, ",")
                .concat(this.b, ")");
        }
        toString() {
          return this.toRgbString();
        }
        _sc(e, t, n) {
          const r = this.clone();
          return (r[e] = $t(t, n)), r;
        }
        _c(e) {
          return new this.constructor(e);
        }
        getMax() {
          return (
            void 0 === this._max &&
              (this._max = Math.max(this.r, this.g, this.b)),
            this._max
          );
        }
        getMin() {
          return (
            void 0 === this._min &&
              (this._min = Math.min(this.r, this.g, this.b)),
            this._min
          );
        }
        fromHexString(e) {
          const t = e.replace("#", "");
          function n(e, n) {
            return parseInt(t[e] + t[n || e], 16);
          }
          t.length < 6
            ? ((this.r = n(0)),
              (this.g = n(1)),
              (this.b = n(2)),
              (this.a = t[3] ? n(3) / 255 : 1))
            : ((this.r = n(0, 1)),
              (this.g = n(2, 3)),
              (this.b = n(4, 5)),
              (this.a = t[6] ? n(6, 7) / 255 : 1));
        }
        fromHsl(e) {
          let { h: t, s: n, l: r, a: o } = e;
          if (
            ((this._h = t % 360),
            (this._s = n),
            (this._l = r),
            (this.a = "number" == typeof o ? o : 1),
            n <= 0)
          ) {
            const e = Ut(255 * r);
            (this.r = e), (this.g = e), (this.b = e);
          }
          let a = 0,
            i = 0,
            l = 0;
          const c = t / 60,
            s = (1 - Math.abs(2 * r - 1)) * n,
            u = s * (1 - Math.abs((c % 2) - 1));
          c >= 0 && c < 1
            ? ((a = s), (i = u))
            : c >= 1 && c < 2
              ? ((a = u), (i = s))
              : c >= 2 && c < 3
                ? ((i = s), (l = u))
                : c >= 3 && c < 4
                  ? ((i = u), (l = s))
                  : c >= 4 && c < 5
                    ? ((a = u), (l = s))
                    : c >= 5 && c < 6 && ((a = s), (l = u));
          const d = r - s / 2;
          (this.r = Ut(255 * (a + d))),
            (this.g = Ut(255 * (i + d))),
            (this.b = Ut(255 * (l + d)));
        }
        fromHsv(e) {
          let { h: t, s: n, v: r, a: o } = e;
          (this._h = t % 360),
            (this._s = n),
            (this._v = r),
            (this.a = "number" == typeof o ? o : 1);
          const a = Ut(255 * r);
          if (((this.r = a), (this.g = a), (this.b = a), n <= 0)) return;
          const i = t / 60,
            l = Math.floor(i),
            c = i - l,
            s = Ut(r * (1 - n) * 255),
            u = Ut(r * (1 - n * c) * 255),
            d = Ut(r * (1 - n * (1 - c)) * 255);
          switch (l) {
            case 0:
              (this.g = d), (this.b = s);
              break;
            case 1:
              (this.r = u), (this.b = s);
              break;
            case 2:
              (this.r = s), (this.b = d);
              break;
            case 3:
              (this.r = s), (this.g = u);
              break;
            case 4:
              (this.r = d), (this.g = s);
              break;
            default:
              (this.g = s), (this.b = u);
          }
        }
        fromHsvString(e) {
          const t = Vt(e, Wt);
          this.fromHsv({ h: t[0], s: t[1], v: t[2], a: t[3] });
        }
        fromHslString(e) {
          const t = Vt(e, Wt);
          this.fromHsl({ h: t[0], s: t[1], l: t[2], a: t[3] });
        }
        fromRgbString(e) {
          const t = Vt(e, (e, t) =>
            t.includes("%") ? Ut((e / 100) * 255) : e,
          );
          (this.r = t[0]), (this.g = t[1]), (this.b = t[2]), (this.a = t[3]);
        }
      }
      var Xt = [
        { index: 7, amount: 15 },
        { index: 6, amount: 25 },
        { index: 5, amount: 30 },
        { index: 5, amount: 45 },
        { index: 5, amount: 65 },
        { index: 5, amount: 85 },
        { index: 4, amount: 90 },
        { index: 3, amount: 95 },
        { index: 2, amount: 97 },
        { index: 1, amount: 98 },
      ];
      function Qt(e, t, n) {
        var r;
        return (
          (r =
            Math.round(e.h) >= 60 && Math.round(e.h) <= 240
              ? n
                ? Math.round(e.h) - 2 * t
                : Math.round(e.h) + 2 * t
              : n
                ? Math.round(e.h) + 2 * t
                : Math.round(e.h) - 2 * t) < 0
            ? (r += 360)
            : r >= 360 && (r -= 360),
          r
        );
      }
      function Kt(e, t, n) {
        return 0 === e.h && 0 === e.s
          ? e.s
          : ((r = n ? e.s - 0.16 * t : 4 === t ? e.s + 0.16 : e.s + 0.05 * t) >
              1 && (r = 1),
            n && 5 === t && r > 0.1 && (r = 0.1),
            r < 0.06 && (r = 0.06),
            Math.round(100 * r) / 100);
        var r;
      }
      function qt(e, t, n) {
        var r;
        return (
          (r = n ? e.v + 0.05 * t : e.v - 0.15 * t),
          (r = Math.max(0, Math.min(1, r))),
          Math.round(100 * r) / 100
        );
      }
      function Yt(e) {
        for (
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = [],
            r = new Gt(e),
            o = r.toHsv(),
            a = 5;
          a > 0;
          a -= 1
        ) {
          var i = new Gt({ h: Qt(o, a, !0), s: Kt(o, a, !0), v: qt(o, a, !0) });
          n.push(i);
        }
        n.push(r);
        for (var l = 1; l <= 4; l += 1) {
          var c = new Gt({ h: Qt(o, l), s: Kt(o, l), v: qt(o, l) });
          n.push(c);
        }
        return "dark" === t.theme
          ? Xt.map(function (e) {
              var r = e.index,
                o = e.amount;
              return new Gt(t.backgroundColor || "#141414")
                .mix(n[r], o)
                .toHexString();
            })
          : n.map(function (e) {
              return e.toHexString();
            });
      }
      var Zt = {
          red: "#F5222D",
          volcano: "#FA541C",
          orange: "#FA8C16",
          gold: "#FAAD14",
          yellow: "#FADB14",
          lime: "#A0D911",
          green: "#52C41A",
          cyan: "#13C2C2",
          blue: "#1677FF",
          geekblue: "#2F54EB",
          purple: "#722ED1",
          magenta: "#EB2F96",
          grey: "#666666",
        },
        Jt = [
          "#fff1f0",
          "#ffccc7",
          "#ffa39e",
          "#ff7875",
          "#ff4d4f",
          "#f5222d",
          "#cf1322",
          "#a8071a",
          "#820014",
          "#5c0011",
        ];
      Jt.primary = Jt[5];
      var en = [
        "#fff2e8",
        "#ffd8bf",
        "#ffbb96",
        "#ff9c6e",
        "#ff7a45",
        "#fa541c",
        "#d4380d",
        "#ad2102",
        "#871400",
        "#610b00",
      ];
      en.primary = en[5];
      var tn = [
        "#fff7e6",
        "#ffe7ba",
        "#ffd591",
        "#ffc069",
        "#ffa940",
        "#fa8c16",
        "#d46b08",
        "#ad4e00",
        "#873800",
        "#612500",
      ];
      tn.primary = tn[5];
      var nn = [
        "#fffbe6",
        "#fff1b8",
        "#ffe58f",
        "#ffd666",
        "#ffc53d",
        "#faad14",
        "#d48806",
        "#ad6800",
        "#874d00",
        "#613400",
      ];
      nn.primary = nn[5];
      var rn = [
        "#feffe6",
        "#ffffb8",
        "#fffb8f",
        "#fff566",
        "#ffec3d",
        "#fadb14",
        "#d4b106",
        "#ad8b00",
        "#876800",
        "#614700",
      ];
      rn.primary = rn[5];
      var on = [
        "#fcffe6",
        "#f4ffb8",
        "#eaff8f",
        "#d3f261",
        "#bae637",
        "#a0d911",
        "#7cb305",
        "#5b8c00",
        "#3f6600",
        "#254000",
      ];
      on.primary = on[5];
      var an = [
        "#f6ffed",
        "#d9f7be",
        "#b7eb8f",
        "#95de64",
        "#73d13d",
        "#52c41a",
        "#389e0d",
        "#237804",
        "#135200",
        "#092b00",
      ];
      an.primary = an[5];
      var ln = [
        "#e6fffb",
        "#b5f5ec",
        "#87e8de",
        "#5cdbd3",
        "#36cfc9",
        "#13c2c2",
        "#08979c",
        "#006d75",
        "#00474f",
        "#002329",
      ];
      ln.primary = ln[5];
      var cn = [
        "#e6f4ff",
        "#bae0ff",
        "#91caff",
        "#69b1ff",
        "#4096ff",
        "#1677ff",
        "#0958d9",
        "#003eb3",
        "#002c8c",
        "#001d66",
      ];
      cn.primary = cn[5];
      var sn = [
        "#f0f5ff",
        "#d6e4ff",
        "#adc6ff",
        "#85a5ff",
        "#597ef7",
        "#2f54eb",
        "#1d39c4",
        "#10239e",
        "#061178",
        "#030852",
      ];
      sn.primary = sn[5];
      var un = [
        "#f9f0ff",
        "#efdbff",
        "#d3adf7",
        "#b37feb",
        "#9254de",
        "#722ed1",
        "#531dab",
        "#391085",
        "#22075e",
        "#120338",
      ];
      un.primary = un[5];
      var dn = [
        "#fff0f6",
        "#ffd6e7",
        "#ffadd2",
        "#ff85c0",
        "#f759ab",
        "#eb2f96",
        "#c41d7f",
        "#9e1068",
        "#780650",
        "#520339",
      ];
      dn.primary = dn[5];
      var fn = [
        "#a6a6a6",
        "#999999",
        "#8c8c8c",
        "#808080",
        "#737373",
        "#666666",
        "#404040",
        "#1a1a1a",
        "#000000",
        "#000000",
      ];
      fn.primary = fn[5];
      var pn = {
          red: Jt,
          volcano: en,
          orange: tn,
          gold: nn,
          yellow: rn,
          lime: on,
          green: an,
          cyan: ln,
          blue: cn,
          geekblue: sn,
          purple: un,
          magenta: dn,
          grey: fn,
        },
        hn = [
          "#2a1215",
          "#431418",
          "#58181c",
          "#791a1f",
          "#a61d24",
          "#d32029",
          "#e84749",
          "#f37370",
          "#f89f9a",
          "#fac8c3",
        ];
      hn.primary = hn[5];
      var mn = [
        "#2b1611",
        "#441d12",
        "#592716",
        "#7c3118",
        "#aa3e19",
        "#d84a1b",
        "#e87040",
        "#f3956a",
        "#f8b692",
        "#fad4bc",
      ];
      mn.primary = mn[5];
      var gn = [
        "#2b1d11",
        "#442a11",
        "#593815",
        "#7c4a15",
        "#aa6215",
        "#d87a16",
        "#e89a3c",
        "#f3b765",
        "#f8cf8d",
        "#fae3b7",
      ];
      gn.primary = gn[5];
      var vn = [
        "#2b2111",
        "#443111",
        "#594214",
        "#7c5914",
        "#aa7714",
        "#d89614",
        "#e8b339",
        "#f3cc62",
        "#f8df8b",
        "#faedb5",
      ];
      vn.primary = vn[5];
      var yn = [
        "#2b2611",
        "#443b11",
        "#595014",
        "#7c6e14",
        "#aa9514",
        "#d8bd14",
        "#e8d639",
        "#f3ea62",
        "#f8f48b",
        "#fafab5",
      ];
      yn.primary = yn[5];
      var bn = [
        "#1f2611",
        "#2e3c10",
        "#3e4f13",
        "#536d13",
        "#6f9412",
        "#8bbb11",
        "#a9d134",
        "#c9e75d",
        "#e4f88b",
        "#f0fab5",
      ];
      bn.primary = bn[5];
      var xn = [
        "#162312",
        "#1d3712",
        "#274916",
        "#306317",
        "#3c8618",
        "#49aa19",
        "#6abe39",
        "#8fd460",
        "#b2e58b",
        "#d5f2bb",
      ];
      xn.primary = xn[5];
      var Sn = [
        "#112123",
        "#113536",
        "#144848",
        "#146262",
        "#138585",
        "#13a8a8",
        "#33bcb7",
        "#58d1c9",
        "#84e2d8",
        "#b2f1e8",
      ];
      Sn.primary = Sn[5];
      var kn = [
        "#111a2c",
        "#112545",
        "#15325b",
        "#15417e",
        "#1554ad",
        "#1668dc",
        "#3c89e8",
        "#65a9f3",
        "#8dc5f8",
        "#b7dcfa",
      ];
      kn.primary = kn[5];
      var wn = [
        "#131629",
        "#161d40",
        "#1c2755",
        "#203175",
        "#263ea0",
        "#2b4acb",
        "#5273e0",
        "#7f9ef3",
        "#a8c1f8",
        "#d2e0fa",
      ];
      wn.primary = wn[5];
      var Cn = [
        "#1a1325",
        "#24163a",
        "#301c4d",
        "#3e2069",
        "#51258f",
        "#642ab5",
        "#854eca",
        "#ab7ae0",
        "#cda8f0",
        "#ebd7fa",
      ];
      Cn.primary = Cn[5];
      var En = [
        "#291321",
        "#40162f",
        "#551c3b",
        "#75204f",
        "#a02669",
        "#cb2b83",
        "#e0529c",
        "#f37fb7",
        "#f8a8cc",
        "#fad2e3",
      ];
      En.primary = En[5];
      var _n = [
        "#151515",
        "#1f1f1f",
        "#2d2d2d",
        "#393939",
        "#494949",
        "#5a5a5a",
        "#6a6a6a",
        "#7b7b7b",
        "#888888",
        "#969696",
      ];
      _n.primary = _n[5];
      const On = {
          blue: "#1677FF",
          purple: "#722ED1",
          cyan: "#13C2C2",
          green: "#52C41A",
          magenta: "#EB2F96",
          pink: "#EB2F96",
          red: "#F5222D",
          orange: "#FA8C16",
          yellow: "#FADB14",
          volcano: "#FA541C",
          geekblue: "#2F54EB",
          gold: "#FAAD14",
          lime: "#A0D911",
        },
        Pn = Object.assign(Object.assign({}, On), {
          colorPrimary: "#1677ff",
          colorSuccess: "#52c41a",
          colorWarning: "#faad14",
          colorError: "#ff4d4f",
          colorInfo: "#1677ff",
          colorLink: "",
          colorTextBase: "",
          colorBgBase: "",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",
          fontFamilyCode:
            "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
          fontSize: 14,
          lineWidth: 1,
          lineType: "solid",
          motionUnit: 0.1,
          motionBase: 0,
          motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
          motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
          motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
          motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
          motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
          motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
          motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
          borderRadius: 6,
          sizeUnit: 4,
          sizeStep: 4,
          sizePopupArrow: 16,
          controlHeight: 32,
          zIndexBase: 0,
          zIndexPopupBase: 1e3,
          opacityImage: 1,
          wireframe: !1,
          motion: !0,
        });
      function jn(e, t) {
        let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t;
        const {
            colorSuccess: o,
            colorWarning: a,
            colorError: i,
            colorInfo: l,
            colorPrimary: c,
            colorBgBase: s,
            colorTextBase: u,
          } = e,
          d = n(c),
          f = n(o),
          p = n(a),
          h = n(i),
          m = n(l),
          g = r(s, u),
          v = n(e.colorLink || e.colorInfo),
          y = new Gt(h[1]).mix(new Gt(h[3]), 50).toHexString();
        return Object.assign(Object.assign({}, g), {
          colorPrimaryBg: d[1],
          colorPrimaryBgHover: d[2],
          colorPrimaryBorder: d[3],
          colorPrimaryBorderHover: d[4],
          colorPrimaryHover: d[5],
          colorPrimary: d[6],
          colorPrimaryActive: d[7],
          colorPrimaryTextHover: d[8],
          colorPrimaryText: d[9],
          colorPrimaryTextActive: d[10],
          colorSuccessBg: f[1],
          colorSuccessBgHover: f[2],
          colorSuccessBorder: f[3],
          colorSuccessBorderHover: f[4],
          colorSuccessHover: f[4],
          colorSuccess: f[6],
          colorSuccessActive: f[7],
          colorSuccessTextHover: f[8],
          colorSuccessText: f[9],
          colorSuccessTextActive: f[10],
          colorErrorBg: h[1],
          colorErrorBgHover: h[2],
          colorErrorBgFilledHover: y,
          colorErrorBgActive: h[3],
          colorErrorBorder: h[3],
          colorErrorBorderHover: h[4],
          colorErrorHover: h[5],
          colorError: h[6],
          colorErrorActive: h[7],
          colorErrorTextHover: h[8],
          colorErrorText: h[9],
          colorErrorTextActive: h[10],
          colorWarningBg: p[1],
          colorWarningBgHover: p[2],
          colorWarningBorder: p[3],
          colorWarningBorderHover: p[4],
          colorWarningHover: p[4],
          colorWarning: p[6],
          colorWarningActive: p[7],
          colorWarningTextHover: p[8],
          colorWarningText: p[9],
          colorWarningTextActive: p[10],
          colorInfoBg: m[1],
          colorInfoBgHover: m[2],
          colorInfoBorder: m[3],
          colorInfoBorderHover: m[4],
          colorInfoHover: m[4],
          colorInfo: m[6],
          colorInfoActive: m[7],
          colorInfoTextHover: m[8],
          colorInfoText: m[9],
          colorInfoTextActive: m[10],
          colorLinkHover: v[4],
          colorLink: v[6],
          colorLinkActive: v[7],
          colorBgMask: new Gt("#000").setA(0.45).toRgbString(),
          colorWhite: "#fff",
        });
      }
      const Tn = (e) => {
        let t = e,
          n = e,
          r = e,
          o = e;
        return (
          e < 6 && e >= 5
            ? (t = e + 1)
            : e < 16 && e >= 6
              ? (t = e + 2)
              : e >= 16 && (t = 16),
          e < 7 && e >= 5
            ? (n = 4)
            : e < 8 && e >= 7
              ? (n = 5)
              : e < 14 && e >= 8
                ? (n = 6)
                : e < 16 && e >= 14
                  ? (n = 7)
                  : e >= 16 && (n = 8),
          e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
          e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
          {
            borderRadius: e,
            borderRadiusXS: r,
            borderRadiusSM: n,
            borderRadiusLG: t,
            borderRadiusOuter: o,
          }
        );
      };
      const Nn = (e) => {
        const { controlHeight: t } = e;
        return {
          controlHeightSM: 0.75 * t,
          controlHeightXS: 0.5 * t,
          controlHeightLG: 1.25 * t,
        };
      };
      function Mn(e) {
        return (e + 8) / e;
      }
      const Ln = (e) => {
        const t = (function (e) {
            const t = new Array(10).fill(null).map((t, n) => {
              const r = n - 1,
                o = e * Math.pow(Math.E, r / 5),
                a = n > 1 ? Math.floor(o) : Math.ceil(o);
              return 2 * Math.floor(a / 2);
            });
            return (t[1] = e), t.map((e) => ({ size: e, lineHeight: Mn(e) }));
          })(e),
          n = t.map((e) => e.size),
          r = t.map((e) => e.lineHeight),
          o = n[1],
          a = n[0],
          i = n[2],
          l = r[1],
          c = r[0],
          s = r[2];
        return {
          fontSizeSM: a,
          fontSize: o,
          fontSizeLG: i,
          fontSizeXL: n[3],
          fontSizeHeading1: n[6],
          fontSizeHeading2: n[5],
          fontSizeHeading3: n[4],
          fontSizeHeading4: n[3],
          fontSizeHeading5: n[2],
          lineHeight: l,
          lineHeightLG: s,
          lineHeightSM: c,
          fontHeight: Math.round(l * o),
          fontHeightLG: Math.round(s * i),
          fontHeightSM: Math.round(c * a),
          lineHeightHeading1: r[6],
          lineHeightHeading2: r[5],
          lineHeightHeading3: r[4],
          lineHeightHeading4: r[3],
          lineHeightHeading5: r[2],
        };
      };
      const zn = (e, t) => new Gt(e).setA(t).toRgbString(),
        Rn = (e, t) => new Gt(e).darken(t).toHexString(),
        In = (e) => {
          const t = Yt(e);
          return {
            1: t[0],
            2: t[1],
            3: t[2],
            4: t[3],
            5: t[4],
            6: t[5],
            7: t[6],
            8: t[4],
            9: t[5],
            10: t[6],
          };
        },
        An = (e, t) => {
          const n = e || "#fff",
            r = t || "#000";
          return {
            colorBgBase: n,
            colorTextBase: r,
            colorText: zn(r, 0.88),
            colorTextSecondary: zn(r, 0.65),
            colorTextTertiary: zn(r, 0.45),
            colorTextQuaternary: zn(r, 0.25),
            colorFill: zn(r, 0.15),
            colorFillSecondary: zn(r, 0.06),
            colorFillTertiary: zn(r, 0.04),
            colorFillQuaternary: zn(r, 0.02),
            colorBgSolid: zn(r, 1),
            colorBgSolidHover: zn(r, 0.75),
            colorBgSolidActive: zn(r, 0.95),
            colorBgLayout: Rn(n, 4),
            colorBgContainer: Rn(n, 0),
            colorBgElevated: Rn(n, 0),
            colorBgSpotlight: zn(r, 0.85),
            colorBgBlur: "transparent",
            colorBorder: Rn(n, 15),
            colorBorderSecondary: Rn(n, 6),
          };
        };
      function Hn(e) {
        (Zt.pink = Zt.magenta), (pn.pink = pn.magenta);
        const t = Object.keys(On)
          .map((t) => {
            const n = e[t] === Zt[t] ? pn[t] : Yt(e[t]);
            return new Array(10)
              .fill(1)
              .reduce(
                (e, r, o) => (
                  (e["".concat(t, "-").concat(o + 1)] = n[o]),
                  (e["".concat(t).concat(o + 1)] = n[o]),
                  e
                ),
                {},
              );
          })
          .reduce((e, t) => (e = Object.assign(Object.assign({}, e), t)), {});
        return Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, e), t),
                  jn(e, {
                    generateColorPalettes: In,
                    generateNeutralColorPalettes: An,
                  }),
                ),
                Ln(e.fontSize),
              ),
              (function (e) {
                const { sizeUnit: t, sizeStep: n } = e;
                return {
                  sizeXXL: t * (n + 8),
                  sizeXL: t * (n + 4),
                  sizeLG: t * (n + 2),
                  sizeMD: t * (n + 1),
                  sizeMS: t * n,
                  size: t * n,
                  sizeSM: t * (n - 1),
                  sizeXS: t * (n - 2),
                  sizeXXS: t * (n - 3),
                };
              })(e),
            ),
            Nn(e),
          ),
          (function (e) {
            const {
              motionUnit: t,
              motionBase: n,
              borderRadius: r,
              lineWidth: o,
            } = e;
            return Object.assign(
              {
                motionDurationFast: "".concat((n + t).toFixed(1), "s"),
                motionDurationMid: "".concat((n + 2 * t).toFixed(1), "s"),
                motionDurationSlow: "".concat((n + 3 * t).toFixed(1), "s"),
                lineWidthBold: o + 1,
              },
              Tn(r),
            );
          })(e),
        );
      }
      const Bn = ue(Hn),
        Fn = { token: Pn, override: { override: Pn }, hashed: !0 },
        Dn = e.createContext(Fn);
      function Un(e) {
        return e >= 0 && e <= 255;
      }
      const Vn = function (e, t) {
        const { r: n, g: r, b: o, a } = new Gt(e).toRgb();
        if (a < 1) return e;
        const { r: i, g: l, b: c } = new Gt(t).toRgb();
        for (let e = 0.01; e <= 1; e += 0.01) {
          const t = Math.round((n - i * (1 - e)) / e),
            a = Math.round((r - l * (1 - e)) / e),
            s = Math.round((o - c * (1 - e)) / e);
          if (Un(t) && Un(a) && Un(s))
            return new Gt({
              r: t,
              g: a,
              b: s,
              a: Math.round(100 * e) / 100,
            }).toRgbString();
        }
        return new Gt({ r: n, g: r, b: o, a: 1 }).toRgbString();
      };
      var Wn = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      };
      function $n(e) {
        const { override: t } = e,
          n = Wn(e, ["override"]),
          r = Object.assign({}, t);
        Object.keys(Pn).forEach((e) => {
          delete r[e];
        });
        const o = Object.assign(Object.assign({}, n), r),
          a = 1200,
          i = 1600;
        if (!1 === o.motion) {
          const e = "0s";
          (o.motionDurationFast = e),
            (o.motionDurationMid = e),
            (o.motionDurationSlow = e);
        }
        return Object.assign(
          Object.assign(Object.assign({}, o), {
            colorFillContent: o.colorFillSecondary,
            colorFillContentHover: o.colorFill,
            colorFillAlter: o.colorFillQuaternary,
            colorBgContainerDisabled: o.colorFillTertiary,
            colorBorderBg: o.colorBgContainer,
            colorSplit: Vn(o.colorBorderSecondary, o.colorBgContainer),
            colorTextPlaceholder: o.colorTextQuaternary,
            colorTextDisabled: o.colorTextQuaternary,
            colorTextHeading: o.colorText,
            colorTextLabel: o.colorTextSecondary,
            colorTextDescription: o.colorTextTertiary,
            colorTextLightSolid: o.colorWhite,
            colorHighlight: o.colorError,
            colorBgTextHover: o.colorFillSecondary,
            colorBgTextActive: o.colorFill,
            colorIcon: o.colorTextTertiary,
            colorIconHover: o.colorText,
            colorErrorOutline: Vn(o.colorErrorBg, o.colorBgContainer),
            colorWarningOutline: Vn(o.colorWarningBg, o.colorBgContainer),
            fontSizeIcon: o.fontSizeSM,
            lineWidthFocus: 3 * o.lineWidth,
            lineWidth: o.lineWidth,
            controlOutlineWidth: 2 * o.lineWidth,
            controlInteractiveSize: o.controlHeight / 2,
            controlItemBgHover: o.colorFillTertiary,
            controlItemBgActive: o.colorPrimaryBg,
            controlItemBgActiveHover: o.colorPrimaryBgHover,
            controlItemBgActiveDisabled: o.colorFill,
            controlTmpOutline: o.colorFillQuaternary,
            controlOutline: Vn(o.colorPrimaryBg, o.colorBgContainer),
            lineType: o.lineType,
            borderRadius: o.borderRadius,
            borderRadiusXS: o.borderRadiusXS,
            borderRadiusSM: o.borderRadiusSM,
            borderRadiusLG: o.borderRadiusLG,
            fontWeightStrong: 600,
            opacityLoading: 0.65,
            linkDecoration: "none",
            linkHoverDecoration: "none",
            linkFocusDecoration: "none",
            controlPaddingHorizontal: 12,
            controlPaddingHorizontalSM: 8,
            paddingXXS: o.sizeXXS,
            paddingXS: o.sizeXS,
            paddingSM: o.sizeSM,
            padding: o.size,
            paddingMD: o.sizeMD,
            paddingLG: o.sizeLG,
            paddingXL: o.sizeXL,
            paddingContentHorizontalLG: o.sizeLG,
            paddingContentVerticalLG: o.sizeMS,
            paddingContentHorizontal: o.sizeMS,
            paddingContentVertical: o.sizeSM,
            paddingContentHorizontalSM: o.size,
            paddingContentVerticalSM: o.sizeXS,
            marginXXS: o.sizeXXS,
            marginXS: o.sizeXS,
            marginSM: o.sizeSM,
            margin: o.size,
            marginMD: o.sizeMD,
            marginLG: o.sizeLG,
            marginXL: o.sizeXL,
            marginXXL: o.sizeXXL,
            boxShadow:
              "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            boxShadowSecondary:
              "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            boxShadowTertiary:
              "\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ",
            screenXS: 480,
            screenXSMin: 480,
            screenXSMax: 575,
            screenSM: 576,
            screenSMMin: 576,
            screenSMMax: 767,
            screenMD: 768,
            screenMDMin: 768,
            screenMDMax: 991,
            screenLG: 992,
            screenLGMin: 992,
            screenLGMax: 1199,
            screenXL: a,
            screenXLMin: a,
            screenXLMax: 1599,
            screenXXL: i,
            screenXXLMin: i,
            boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
            boxShadowCard: "\n      0 1px 2px -2px "
              .concat(
                new Gt("rgba(0, 0, 0, 0.16)").toRgbString(),
                ",\n      0 3px 6px 0 ",
              )
              .concat(
                new Gt("rgba(0, 0, 0, 0.12)").toRgbString(),
                ",\n      0 5px 12px 4px ",
              )
              .concat(new Gt("rgba(0, 0, 0, 0.09)").toRgbString(), "\n    "),
            boxShadowDrawerRight:
              "\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            boxShadowDrawerLeft:
              "\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            boxShadowDrawerUp:
              "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            boxShadowDrawerDown:
              "\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            boxShadowTabsOverflowLeft:
              "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowRight:
              "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowTop:
              "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowBottom:
              "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
          }),
          r,
        );
      }
      var Gn = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      };
      const Xn = {
          lineHeight: !0,
          lineHeightSM: !0,
          lineHeightLG: !0,
          lineHeightHeading1: !0,
          lineHeightHeading2: !0,
          lineHeightHeading3: !0,
          lineHeightHeading4: !0,
          lineHeightHeading5: !0,
          opacityLoading: !0,
          fontWeightStrong: !0,
          zIndexPopupBase: !0,
          zIndexBase: !0,
          opacityImage: !0,
        },
        Qn = {
          size: !0,
          sizeSM: !0,
          sizeLG: !0,
          sizeMD: !0,
          sizeXS: !0,
          sizeXXS: !0,
          sizeMS: !0,
          sizeXL: !0,
          sizeXXL: !0,
          sizeUnit: !0,
          sizeStep: !0,
          motionBase: !0,
          motionUnit: !0,
        },
        Kn = {
          screenXS: !0,
          screenXSMin: !0,
          screenXSMax: !0,
          screenSM: !0,
          screenSMMin: !0,
          screenSMMax: !0,
          screenMD: !0,
          screenMDMin: !0,
          screenMDMax: !0,
          screenLG: !0,
          screenLGMin: !0,
          screenLGMax: !0,
          screenXL: !0,
          screenXLMin: !0,
          screenXLMax: !0,
          screenXXL: !0,
          screenXXLMin: !0,
        },
        qn = (e, t, n) => {
          const r = n.getDerivativeToken(e),
            { override: o } = t,
            a = Gn(t, ["override"]);
          let i = Object.assign(Object.assign({}, r), { override: o });
          return (
            (i = $n(i)),
            a &&
              Object.entries(a).forEach((e) => {
                let [t, n] = e;
                const { theme: r } = n,
                  o = Gn(n, ["theme"]);
                let a = o;
                r &&
                  (a = qn(
                    Object.assign(Object.assign({}, i), o),
                    { override: o },
                    r,
                  )),
                  (i[t] = a);
              }),
            i
          );
        };
      function Yn() {
        const {
            token: t,
            hashed: n,
            theme: r,
            override: o,
            cssVar: a,
          } = e.useContext(Dn),
          i = "".concat("5.23.0", "-").concat(n || ""),
          l = r || Bn,
          [c, s, u] = Ie(l, [Pn, t], {
            salt: i,
            override: o,
            getComputedToken: qn,
            formatToken: $n,
            cssVar: a && {
              prefix: a.prefix,
              key: a.key,
              unitless: Xn,
              ignore: Qn,
              preserve: Kn,
            },
          });
        return [l, u, n ? s : "", c, a];
      }
      const Zn = ["xxl", "xl", "lg", "md", "sm", "xs"];
      function Jn() {
        const [, t] = Yn(),
          n = ((e) => ({
            xs: "(max-width: ".concat(e.screenXSMax, "px)"),
            sm: "(min-width: ".concat(e.screenSM, "px)"),
            md: "(min-width: ".concat(e.screenMD, "px)"),
            lg: "(min-width: ".concat(e.screenLG, "px)"),
            xl: "(min-width: ".concat(e.screenXL, "px)"),
            xxl: "(min-width: ".concat(e.screenXXL, "px)"),
          }))(
            ((e) => {
              const t = e,
                n = [].concat(Zn).reverse();
              return (
                n.forEach((e, r) => {
                  const o = e.toUpperCase(),
                    a = "screen".concat(o, "Min"),
                    i = "screen".concat(o);
                  if (!(t[a] <= t[i]))
                    throw new Error(
                      ""
                        .concat(a, "<=")
                        .concat(i, " fails : !(")
                        .concat(t[a], "<=")
                        .concat(t[i], ")"),
                    );
                  if (r < n.length - 1) {
                    const e = "screen".concat(o, "Max");
                    if (!(t[i] <= t[e]))
                      throw new Error(
                        ""
                          .concat(i, "<=")
                          .concat(e, " fails : !(")
                          .concat(t[i], "<=")
                          .concat(t[e], ")"),
                      );
                    const a = n[r + 1].toUpperCase(),
                      l = "screen".concat(a, "Min");
                    if (!(t[e] <= t[l]))
                      throw new Error(
                        ""
                          .concat(e, "<=")
                          .concat(l, " fails : !(")
                          .concat(t[e], "<=")
                          .concat(t[l], ")"),
                      );
                  }
                }),
                e
              );
            })(t),
          );
        return e.useMemo(() => {
          const e = new Map();
          let t = -1,
            r = {};
          return {
            matchHandlers: {},
            dispatch: (t) => ((r = t), e.forEach((e) => e(r)), e.size >= 1),
            subscribe(n) {
              return e.size || this.register(), (t += 1), e.set(t, n), n(r), t;
            },
            unsubscribe(t) {
              e.delete(t), e.size || this.unregister();
            },
            unregister() {
              Object.keys(n).forEach((e) => {
                const t = n[e],
                  r = this.matchHandlers[t];
                null == r ||
                  r.mql.removeListener(null == r ? void 0 : r.listener);
              }),
                e.clear();
            },
            register() {
              Object.keys(n).forEach((e) => {
                const t = n[e],
                  o = (t) => {
                    let { matches: n } = t;
                    this.dispatch(
                      Object.assign(Object.assign({}, r), { [e]: n }),
                    );
                  },
                  a = window.matchMedia(t);
                a.addListener(o),
                  (this.matchHandlers[t] = { mql: a, listener: o }),
                  o(a);
              });
            },
            responsiveMap: n,
          };
        }, [t]);
      }
      const er = "ant",
        tr = "anticon",
        nr = e.createContext({
          getPrefixCls: (e, t) => t || (e ? "".concat(er, "-").concat(e) : er),
          iconPrefixCls: tr,
        }),
        { Consumer: rr } = nr,
        or = (0, e.createContext)({});
      function ar(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function ir(e, t) {
        return (
          (ir = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          ir(e, t)
        );
      }
      function lr(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && ir(e, t);
      }
      function cr(e) {
        return (
          (cr = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          cr(e)
        );
      }
      function sr() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (sr = function () {
          return !!e;
        })();
      }
      function ur(e) {
        var t = sr();
        return function () {
          var n,
            o = cr(e);
          if (t) {
            var a = cr(this).constructor;
            n = Reflect.construct(o, arguments, a);
          } else n = o.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" == r(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return ar(e);
          })(this, n);
        };
      }
      const dr = K(function e() {
        X(this, e);
      });
      var fr = "CALC_UNIT",
        pr = new RegExp(fr, "g");
      function hr(e) {
        return "number" == typeof e ? "".concat(e).concat(fr) : e;
      }
      var mr = (function (e) {
        lr(n, e);
        var t = ur(n);
        function n(e, o) {
          var a;
          X(this, n),
            i(ar((a = t.call(this))), "result", ""),
            i(ar(a), "unitlessCssVar", void 0),
            i(ar(a), "lowPriority", void 0);
          var l = r(e);
          return (
            (a.unitlessCssVar = o),
            e instanceof n
              ? (a.result = "(".concat(e.result, ")"))
              : "number" === l
                ? (a.result = hr(e))
                : "string" === l && (a.result = e),
            a
          );
        }
        return (
          K(n, [
            {
              key: "add",
              value: function (e) {
                return (
                  e instanceof n
                    ? (this.result = ""
                        .concat(this.result, " + ")
                        .concat(e.getResult()))
                    : ("number" != typeof e && "string" != typeof e) ||
                      (this.result = ""
                        .concat(this.result, " + ")
                        .concat(hr(e))),
                  (this.lowPriority = !0),
                  this
                );
              },
            },
            {
              key: "sub",
              value: function (e) {
                return (
                  e instanceof n
                    ? (this.result = ""
                        .concat(this.result, " - ")
                        .concat(e.getResult()))
                    : ("number" != typeof e && "string" != typeof e) ||
                      (this.result = ""
                        .concat(this.result, " - ")
                        .concat(hr(e))),
                  (this.lowPriority = !0),
                  this
                );
              },
            },
            {
              key: "mul",
              value: function (e) {
                return (
                  this.lowPriority &&
                    (this.result = "(".concat(this.result, ")")),
                  e instanceof n
                    ? (this.result = ""
                        .concat(this.result, " * ")
                        .concat(e.getResult(!0)))
                    : ("number" != typeof e && "string" != typeof e) ||
                      (this.result = "".concat(this.result, " * ").concat(e)),
                  (this.lowPriority = !1),
                  this
                );
              },
            },
            {
              key: "div",
              value: function (e) {
                return (
                  this.lowPriority &&
                    (this.result = "(".concat(this.result, ")")),
                  e instanceof n
                    ? (this.result = ""
                        .concat(this.result, " / ")
                        .concat(e.getResult(!0)))
                    : ("number" != typeof e && "string" != typeof e) ||
                      (this.result = "".concat(this.result, " / ").concat(e)),
                  (this.lowPriority = !1),
                  this
                );
              },
            },
            {
              key: "getResult",
              value: function (e) {
                return this.lowPriority || e
                  ? "(".concat(this.result, ")")
                  : this.result;
              },
            },
            {
              key: "equal",
              value: function (e) {
                var t = this,
                  n = (e || {}).unit,
                  r = !0;
                return (
                  "boolean" == typeof n
                    ? (r = n)
                    : Array.from(this.unitlessCssVar).some(function (e) {
                        return t.result.includes(e);
                      }) && (r = !1),
                  (this.result = this.result.replace(pr, r ? "px" : "")),
                  void 0 !== this.lowPriority
                    ? "calc(".concat(this.result, ")")
                    : this.result
                );
              },
            },
          ]),
          n
        );
      })(dr);
      const gr = (function (e) {
        lr(n, e);
        var t = ur(n);
        function n(e) {
          var r;
          return (
            X(this, n),
            i(ar((r = t.call(this))), "result", 0),
            e instanceof n
              ? (r.result = e.result)
              : "number" == typeof e && (r.result = e),
            r
          );
        }
        return (
          K(n, [
            {
              key: "add",
              value: function (e) {
                return (
                  e instanceof n
                    ? (this.result += e.result)
                    : "number" == typeof e && (this.result += e),
                  this
                );
              },
            },
            {
              key: "sub",
              value: function (e) {
                return (
                  e instanceof n
                    ? (this.result -= e.result)
                    : "number" == typeof e && (this.result -= e),
                  this
                );
              },
            },
            {
              key: "mul",
              value: function (e) {
                return (
                  e instanceof n
                    ? (this.result *= e.result)
                    : "number" == typeof e && (this.result *= e),
                  this
                );
              },
            },
            {
              key: "div",
              value: function (e) {
                return (
                  e instanceof n
                    ? (this.result /= e.result)
                    : "number" == typeof e && (this.result /= e),
                  this
                );
              },
            },
            {
              key: "equal",
              value: function () {
                return this.result;
              },
            },
          ]),
          n
        );
      })(dr);
      const vr = function (e, t) {
        var n = "css" === e ? mr : gr;
        return function (e) {
          return new n(e, t);
        };
      };
      const yr = function (e, t) {
        return "".concat(
          [
            t,
            e
              .replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2")
              .replace(/([a-z])([A-Z])/g, "$1-$2"),
          ]
            .filter(Boolean)
            .join("-"),
        );
      };
      function br(t) {
        var n = e.useRef();
        n.current = t;
        var r = e.useCallback(function () {
          for (var e, t = arguments.length, r = new Array(t), o = 0; o < t; o++)
            r[o] = arguments[o];
          return null === (e = n.current) || void 0 === e
            ? void 0
            : e.call.apply(e, [n].concat(r));
        }, []);
        return r;
      }
      function xr(t) {
        var n = e.useRef(!1),
          r = w(e.useState(t), 2),
          o = r[0],
          a = r[1];
        return (
          e.useEffect(function () {
            return (
              (n.current = !1),
              function () {
                n.current = !0;
              }
            );
          }, []),
          [
            o,
            function (e, t) {
              (t && n.current) || a(e);
            },
          ]
        );
      }
      function Sr(e) {
        return void 0 !== e;
      }
      var kr = o(86),
        wr = Symbol.for("react.element"),
        Cr = Symbol.for("react.transitional.element"),
        Er = Symbol.for("react.fragment");
      function _r(e) {
        return (
          e &&
          "object" === r(e) &&
          (e.$$typeof === wr || e.$$typeof === Cr) &&
          e.type === Er
        );
      }
      var Or = function (e, t) {
          "function" == typeof e
            ? e(t)
            : "object" === r(e) && e && "current" in e && (e.current = t);
        },
        Pr = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t.filter(Boolean);
          return r.length <= 1
            ? r[0]
            : function (e) {
                t.forEach(function (t) {
                  Or(t, e);
                });
              };
        },
        jr = function (e) {
          var t, n;
          if (!e) return !1;
          if (Tr(e) && e.props.propertyIsEnumerable("ref")) return !0;
          var r = (0, kr.isMemo)(e) ? e.type.type : e.type;
          return (
            !!(
              "function" != typeof r ||
              (null !== (t = r.prototype) && void 0 !== t && t.render) ||
              r.$$typeof === kr.ForwardRef
            ) &&
            !!(
              "function" != typeof e ||
              (null !== (n = e.prototype) && void 0 !== n && n.render) ||
              e.$$typeof === kr.ForwardRef
            )
          );
        };
      function Tr(t) {
        return (0, e.isValidElement)(t) && !_r(t);
      }
      var Nr = function (e) {
        if (e && Tr(e)) {
          var t = e;
          return t.props.propertyIsEnumerable("ref") ? t.props.ref : t.ref;
        }
        return null;
      };
      function Mr(e, t) {
        for (var n = e, r = 0; r < t.length; r += 1) {
          if (null == n) return;
          n = n[t[r]];
        }
        return n;
      }
      function Lr(e, t, n, r) {
        if (!t.length) return n;
        var o,
          a,
          i = b((o = t)) || C(o) || S(o) || k(),
          l = i[0],
          s = i.slice(1);
        return (
          (a =
            e || "number" != typeof l
              ? Array.isArray(e)
                ? E(e)
                : c({}, e)
              : []),
          r && void 0 === n && 1 === s.length
            ? delete a[l][s[0]]
            : (a[l] = Lr(a[l], s, n, r)),
          a
        );
      }
      function zr(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return t.length && r && void 0 === n && !Mr(e, t.slice(0, -1))
          ? e
          : Lr(e, t, n, r);
      }
      function Rr(e) {
        return Array.isArray(e) ? [] : {};
      }
      var Ir = "undefined" == typeof Reflect ? Object.keys : Reflect.ownKeys;
      function Ar() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var o = Rr(t[0]);
        return (
          t.forEach(function (e) {
            !(function t(n, a) {
              var i,
                l = new Set(a),
                c = Mr(e, n),
                s = Array.isArray(c);
              if (
                s ||
                ("object" === r((i = c)) &&
                  null !== i &&
                  Object.getPrototypeOf(i) === Object.prototype)
              ) {
                if (!l.has(c)) {
                  l.add(c);
                  var u = Mr(o, n);
                  s
                    ? (o = zr(o, n, []))
                    : (u && "object" === r(u)) || (o = zr(o, n, Rr(c))),
                    Ir(c).forEach(function (e) {
                      t([].concat(E(n), [e]), l);
                    });
                }
              } else o = zr(o, n, c);
            })([]);
          }),
          o
        );
      }
      const Hr = function (e, t, n, r) {
        var o = c({}, t[e]);
        null != r &&
          r.deprecatedTokens &&
          r.deprecatedTokens.forEach(function (e) {
            var t,
              n = w(e, 2),
              r = n[0],
              a = n[1];
            ((null != o && o[r]) || (null != o && o[a])) &&
              ((null !== (t = o[a]) && void 0 !== t) ||
                (o[a] = null == o ? void 0 : o[r]));
          });
        var a = c(c({}, n), o);
        return (
          Object.keys(a).forEach(function (e) {
            a[e] === t[e] && delete a[e];
          }),
          a
        );
      };
      var Br = "undefined" != typeof CSSINJS_STATISTIC,
        Fr = !0;
      function Dr() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (!Br) return Object.assign.apply(Object, [{}].concat(t));
        Fr = !1;
        var o = {};
        return (
          t.forEach(function (e) {
            "object" === r(e) &&
              Object.keys(e).forEach(function (t) {
                Object.defineProperty(o, t, {
                  configurable: !0,
                  enumerable: !0,
                  get: function () {
                    return e[t];
                  },
                });
              });
          }),
          (Fr = !0),
          o
        );
      }
      var Ur = {};
      function Vr() {}
      const Wr = function (e) {
        var t,
          n = e,
          r = Vr;
        return (
          Br &&
            "undefined" != typeof Proxy &&
            ((t = new Set()),
            (n = new Proxy(e, {
              get: function (e, n) {
                var r;
                Fr && (null === (r = t) || void 0 === r || r.add(n));
                return e[n];
              },
            })),
            (r = function (e, n) {
              var r;
              Ur[e] = {
                global: Array.from(t),
                component: c(
                  c(
                    {},
                    null === (r = Ur[e]) || void 0 === r ? void 0 : r.component,
                  ),
                  n,
                ),
              };
            })),
          { token: n, keys: t, flush: r }
        );
      };
      const $r = function (e, t, n) {
        var r;
        return "function" == typeof n
          ? n(Dr(t, null !== (r = t[e]) && void 0 !== r ? r : {}))
          : null != n
            ? n
            : {};
      };
      const Gr = function (e) {
        return "js" === e
          ? { max: Math.max, min: Math.min }
          : {
              max: function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                return "max(".concat(
                  t
                    .map(function (e) {
                      return ve(e);
                    })
                    .join(","),
                  ")",
                );
              },
              min: function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                return "min(".concat(
                  t
                    .map(function (e) {
                      return ve(e);
                    })
                    .join(","),
                  ")",
                );
              },
            };
      };
      var Xr = (function () {
          function e() {
            X(this, e),
              i(this, "map", new Map()),
              i(this, "objectIDMap", new WeakMap()),
              i(this, "nextID", 0),
              i(this, "lastAccessBeat", new Map()),
              i(this, "accessBeat", 0);
          }
          return (
            K(e, [
              {
                key: "set",
                value: function (e, t) {
                  this.clear();
                  var n = this.getCompositeKey(e);
                  this.map.set(n, t), this.lastAccessBeat.set(n, Date.now());
                },
              },
              {
                key: "get",
                value: function (e) {
                  var t = this.getCompositeKey(e),
                    n = this.map.get(t);
                  return (
                    this.lastAccessBeat.set(t, Date.now()),
                    (this.accessBeat += 1),
                    n
                  );
                },
              },
              {
                key: "getCompositeKey",
                value: function (e) {
                  var t = this;
                  return e
                    .map(function (e) {
                      return e && "object" === r(e)
                        ? "obj_".concat(t.getObjectID(e))
                        : "".concat(r(e), "_").concat(e);
                    })
                    .join("|");
                },
              },
              {
                key: "getObjectID",
                value: function (e) {
                  if (this.objectIDMap.has(e)) return this.objectIDMap.get(e);
                  var t = this.nextID;
                  return this.objectIDMap.set(e, t), (this.nextID += 1), t;
                },
              },
              {
                key: "clear",
                value: function () {
                  var e = this;
                  if (this.accessBeat > 1e4) {
                    var t = Date.now();
                    this.lastAccessBeat.forEach(function (n, r) {
                      t - n > 6e5 &&
                        (e.map.delete(r), e.lastAccessBeat.delete(r));
                    }),
                      (this.accessBeat = 0);
                  }
                },
              },
            ]),
            e
          );
        })(),
        Qr = new Xr();
      const Kr = function (t, n) {
        return e.useMemo(function () {
          var e = Qr.get(n);
          if (e) return e;
          var r = t();
          return Qr.set(n, r), r;
        }, n);
      };
      const qr = function () {
        return {};
      };
      const Yr = function (t) {
          var n = t.useCSP,
            o = void 0 === n ? qr : n,
            a = t.useToken,
            l = t.usePrefix,
            s = t.getResetStyles,
            u = t.getCommonStyle,
            d = t.getCompUnitless;
          function f(e, n, i) {
            var d =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
              f = Array.isArray(e) ? e : [e, e],
              p = w(f, 1)[0],
              h = f.join("-"),
              m = t.layer || { name: "antd" };
            return function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : e,
                f = a(),
                g = f.theme,
                v = f.realToken,
                y = f.hashId,
                b = f.token,
                x = f.cssVar,
                S = l(),
                k = S.rootPrefixCls,
                w = S.iconPrefixCls,
                C = o(),
                E = x ? "css" : "js",
                _ = Kr(
                  function () {
                    var e = new Set();
                    return (
                      x &&
                        Object.keys(d.unitless || {}).forEach(function (t) {
                          e.add(be(t, x.prefix)), e.add(be(t, yr(p, x.prefix)));
                        }),
                      vr(E, e)
                    );
                  },
                  [E, p, null == x ? void 0 : x.prefix],
                ),
                O = Gr(E),
                P = O.max,
                j = O.min,
                T = {
                  theme: g,
                  token: b,
                  hashId: y,
                  nonce: function () {
                    return C.nonce;
                  },
                  clientOnly: d.clientOnly,
                  layer: m,
                  order: d.order || -999,
                };
              return (
                "function" == typeof s &&
                  At(
                    c(c({}, T), {}, { clientOnly: !1, path: ["Shared", k] }),
                    function () {
                      return s(b, {
                        prefix: { rootPrefixCls: k, iconPrefixCls: w },
                        csp: C,
                      });
                    },
                  ),
                [
                  At(c(c({}, T), {}, { path: [h, e, w] }), function () {
                    if (!1 === d.injectStyle) return [];
                    var o = Wr(b),
                      a = o.token,
                      l = o.flush,
                      c = $r(p, v, i),
                      s = ".".concat(e),
                      f = Hr(p, v, c, { deprecatedTokens: d.deprecatedTokens });
                    x &&
                      c &&
                      "object" === r(c) &&
                      Object.keys(c).forEach(function (e) {
                        c[e] = "var(".concat(be(e, yr(p, x.prefix)), ")");
                      });
                    var h = Dr(
                        a,
                        {
                          componentCls: s,
                          prefixCls: e,
                          iconCls: ".".concat(w),
                          antCls: ".".concat(k),
                          calc: _,
                          max: P,
                          min: j,
                        },
                        x ? c : f,
                      ),
                      m = n(h, {
                        hashId: y,
                        prefixCls: e,
                        rootPrefixCls: k,
                        iconPrefixCls: w,
                      });
                    l(p, f);
                    var g =
                      "function" == typeof u ? u(h, e, t, d.resetFont) : null;
                    return [!1 === d.resetStyle ? null : g, m];
                  }),
                  y,
                ]
              );
            };
          }
          return {
            genStyleHooks: function (t, n, r, o) {
              var l = Array.isArray(t) ? t[0] : t;
              function s(e) {
                return ""
                  .concat(String(l))
                  .concat(e.slice(0, 1).toUpperCase())
                  .concat(e.slice(1));
              }
              var u = (null == o ? void 0 : o.unitless) || {},
                p = c(
                  c({}, "function" == typeof d ? d(t) : {}),
                  {},
                  i({}, s("zIndexPopup"), !0),
                );
              Object.keys(u).forEach(function (e) {
                p[s(e)] = u[e];
              });
              var h = c(c({}, o), {}, { unitless: p, prefixToken: s }),
                m = f(t, n, r, h),
                g = (function (t, n, r) {
                  var o = r.unitless,
                    i = r.injectStyle,
                    l = void 0 === i || i,
                    c = r.prefixToken,
                    s = r.ignore,
                    u = function (e) {
                      var i = e.rootCls,
                        l = e.cssVar,
                        u = void 0 === l ? {} : l,
                        d = a().realToken;
                      return (
                        Bt(
                          {
                            path: [t],
                            prefix: u.prefix,
                            key: u.key,
                            unitless: o,
                            ignore: s,
                            token: d,
                            scope: i,
                          },
                          function () {
                            var e = $r(t, d, n),
                              o = Hr(t, d, e, {
                                deprecatedTokens:
                                  null == r ? void 0 : r.deprecatedTokens,
                              });
                            return (
                              Object.keys(e).forEach(function (e) {
                                (o[c(e)] = o[e]), delete o[e];
                              }),
                              o
                            );
                          },
                        ),
                        null
                      );
                    },
                    d = function (n) {
                      var r = a().cssVar;
                      return [
                        function (o) {
                          return l && r
                            ? e.createElement(
                                e.Fragment,
                                null,
                                e.createElement(u, {
                                  rootCls: n,
                                  cssVar: r,
                                  component: t,
                                }),
                                o,
                              )
                            : o;
                        },
                        null == r ? void 0 : r.key,
                      ];
                    };
                  return d;
                })(l, r, h);
              return function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : e,
                  n = w(m(e, t), 2)[1],
                  r = w(g(t), 2);
                return [r[0], n, r[1]];
              };
            },
            genSubStyleComponent: function (e, t, n) {
              var r = f(
                e,
                t,
                n,
                c(
                  { resetStyle: !1, order: -998 },
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                ),
              );
              return function (e) {
                var t = e.prefixCls,
                  n = e.rootCls;
                return r(t, void 0 === n ? t : n), null;
              };
            },
            genComponentStyleHook: f,
          };
        },
        Zr = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            color: e.colorText,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            listStyle: "none",
            fontFamily: t ? "inherit" : e.fontFamily,
          };
        },
        Jr = (e) => ({
          a: {
            color: e.colorLink,
            textDecoration: e.linkDecoration,
            backgroundColor: "transparent",
            outline: "none",
            cursor: "pointer",
            transition: "color ".concat(e.motionDurationSlow),
            "-webkit-text-decoration-skip": "objects",
            "&:hover": { color: e.colorLinkHover },
            "&:active": { color: e.colorLinkActive },
            "&:active, &:hover": {
              textDecoration: e.linkHoverDecoration,
              outline: 0,
            },
            "&:focus": { textDecoration: e.linkFocusDecoration, outline: 0 },
            "&[disabled]": {
              color: e.colorTextDisabled,
              cursor: "not-allowed",
            },
          },
        }),
        eo = (e, t) => ({
          outline: ""
            .concat(ve(e.lineWidthFocus), " solid ")
            .concat(e.colorPrimaryBorder),
          outlineOffset: null != t ? t : 1,
          transition: "outline-offset 0s, outline 0s",
        }),
        to = (e, t) => ({ "&:focus-visible": Object.assign({}, eo(e, t)) }),
        no = (e) => ({
          [".".concat(e)]: Object.assign(
            Object.assign(
              {},
              {
                display: "inline-flex",
                alignItems: "center",
                color: "inherit",
                fontStyle: "normal",
                lineHeight: 0,
                textAlign: "center",
                textTransform: "none",
                verticalAlign: "-0.125em",
                textRendering: "optimizeLegibility",
                "-webkit-font-smoothing": "antialiased",
                "-moz-osx-font-smoothing": "grayscale",
                "> *": { lineHeight: 1 },
                svg: { display: "inline-block" },
              },
            ),
            { [".".concat(e, " .").concat(e, "-icon")]: { display: "block" } },
          ),
        }),
        {
          genStyleHooks: ro,
          genComponentStyleHook: oo,
          genSubStyleComponent: ao,
        } = Yr({
          usePrefix: () => {
            const { getPrefixCls: t, iconPrefixCls: n } = (0, e.useContext)(nr);
            return { rootPrefixCls: t(), iconPrefixCls: n };
          },
          useToken: () => {
            const [e, t, n, r, o] = Yn();
            return { theme: e, realToken: t, hashId: n, token: r, cssVar: o };
          },
          useCSP: () => {
            const { csp: t } = (0, e.useContext)(nr);
            return null != t ? t : {};
          },
          getResetStyles: (e, t) => {
            var n;
            return [
              { "&": Jr(e) },
              no(
                null !== (n = null == t ? void 0 : t.prefix.iconPrefixCls) &&
                  void 0 !== n
                  ? n
                  : tr,
              ),
            ];
          },
          getCommonStyle: (e, t, n, r) => {
            const o = '[class^="'.concat(t, '"], [class*=" ').concat(t, '"]'),
              a = n ? ".".concat(n) : o,
              i = {
                boxSizing: "border-box",
                "&::before, &::after": { boxSizing: "border-box" },
              };
            let l = {};
            return (
              !1 !== r &&
                (l = { fontFamily: e.fontFamily, fontSize: e.fontSize }),
              {
                [a]: Object.assign(Object.assign(Object.assign({}, l), i), {
                  [o]: i,
                }),
              }
            );
          },
          getCompUnitless: () => Xn,
        }),
        io = (e) => {
          const { componentCls: t } = e;
          return {
            [t]: { position: "relative", maxWidth: "100%", minHeight: 1 },
          };
        },
        lo = (e, t) =>
          ((e, t) => {
            const { prefixCls: n, componentCls: r, gridColumns: o } = e,
              a = {};
            for (let e = o; e >= 0; e--)
              0 === e
                ? ((a["".concat(r).concat(t, "-").concat(e)] = {
                    display: "none",
                  }),
                  (a["".concat(r, "-push-").concat(e)] = {
                    insetInlineStart: "auto",
                  }),
                  (a["".concat(r, "-pull-").concat(e)] = {
                    insetInlineEnd: "auto",
                  }),
                  (a["".concat(r).concat(t, "-push-").concat(e)] = {
                    insetInlineStart: "auto",
                  }),
                  (a["".concat(r).concat(t, "-pull-").concat(e)] = {
                    insetInlineEnd: "auto",
                  }),
                  (a["".concat(r).concat(t, "-offset-").concat(e)] = {
                    marginInlineStart: 0,
                  }),
                  (a["".concat(r).concat(t, "-order-").concat(e)] = {
                    order: 0,
                  }))
                : ((a["".concat(r).concat(t, "-").concat(e)] = [
                    { "--ant-display": "block", display: "block" },
                    {
                      display: "var(--ant-display)",
                      flex: "0 0 ".concat((e / o) * 100, "%"),
                      maxWidth: "".concat((e / o) * 100, "%"),
                    },
                  ]),
                  (a["".concat(r).concat(t, "-push-").concat(e)] = {
                    insetInlineStart: "".concat((e / o) * 100, "%"),
                  }),
                  (a["".concat(r).concat(t, "-pull-").concat(e)] = {
                    insetInlineEnd: "".concat((e / o) * 100, "%"),
                  }),
                  (a["".concat(r).concat(t, "-offset-").concat(e)] = {
                    marginInlineStart: "".concat((e / o) * 100, "%"),
                  }),
                  (a["".concat(r).concat(t, "-order-").concat(e)] = {
                    order: e,
                  }));
            return (
              (a["".concat(r).concat(t, "-flex")] = {
                flex: "var(--".concat(n).concat(t, "-flex)"),
              }),
              a
            );
          })(e, t),
        co = ro(
          "Grid",
          (e) => {
            const { componentCls: t } = e;
            return {
              [t]: {
                display: "flex",
                flexFlow: "row wrap",
                minWidth: 0,
                "&::before, &::after": { display: "flex" },
                "&-no-wrap": { flexWrap: "nowrap" },
                "&-start": { justifyContent: "flex-start" },
                "&-center": { justifyContent: "center" },
                "&-end": { justifyContent: "flex-end" },
                "&-space-between": { justifyContent: "space-between" },
                "&-space-around": { justifyContent: "space-around" },
                "&-space-evenly": { justifyContent: "space-evenly" },
                "&-top": { alignItems: "flex-start" },
                "&-middle": { alignItems: "center" },
                "&-bottom": { alignItems: "flex-end" },
              },
            };
          },
          () => ({}),
        ),
        so = ro(
          "Grid",
          (e) => {
            const t = Dr(e, { gridColumns: 24 }),
              n = ((e) => ({
                xs: e.screenXSMin,
                sm: e.screenSMMin,
                md: e.screenMDMin,
                lg: e.screenLGMin,
                xl: e.screenXLMin,
                xxl: e.screenXXLMin,
              }))(t);
            return (
              delete n.xs,
              [
                io(t),
                lo(t, ""),
                lo(t, "-xs"),
                Object.keys(n)
                  .map((e) =>
                    ((e, t, n) => ({
                      ["@media (min-width: ".concat(ve(t), ")")]: Object.assign(
                        {},
                        lo(e, n),
                      ),
                    }))(t, n[e], "-".concat(e)),
                  )
                  .reduce((e, t) => Object.assign(Object.assign({}, e), t), {}),
              ]
            );
          },
          () => ({}),
        );
      var uo = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      };
      function fo(t, n) {
        const [r, o] = e.useState("string" == typeof t ? t : "");
        return (
          e.useEffect(() => {
            (() => {
              if (("string" == typeof t && o(t), "object" == typeof t))
                for (let e = 0; e < Zn.length; e++) {
                  const r = Zn[e];
                  if (!n[r]) continue;
                  const a = t[r];
                  if (void 0 !== a) return void o(a);
                }
            })();
          }, [JSON.stringify(t), n]),
          r
        );
      }
      const po = e.forwardRef((t, n) => {
        const {
            prefixCls: r,
            justify: o,
            align: a,
            className: i,
            style: l,
            children: c,
            gutter: s = 0,
            wrap: u,
          } = t,
          d = uo(t, [
            "prefixCls",
            "justify",
            "align",
            "className",
            "style",
            "children",
            "gutter",
            "wrap",
          ]),
          { getPrefixCls: f, direction: p } = e.useContext(nr),
          [m, g] = e.useState({
            xs: !0,
            sm: !0,
            md: !0,
            lg: !0,
            xl: !0,
            xxl: !0,
          }),
          [v, y] = e.useState({
            xs: !1,
            sm: !1,
            md: !1,
            lg: !1,
            xl: !1,
            xxl: !1,
          }),
          b = fo(a, v),
          x = fo(o, v),
          S = e.useRef(s),
          k = Jn();
        e.useEffect(() => {
          const e = k.subscribe((e) => {
            y(e);
            const t = S.current || 0;
            ((!Array.isArray(t) && "object" == typeof t) ||
              (Array.isArray(t) &&
                ("object" == typeof t[0] || "object" == typeof t[1]))) &&
              g(e);
          });
          return () => k.unsubscribe(e);
        }, []);
        const w = f("row", r),
          [C, E, _] = co(w),
          O = (() => {
            const e = [void 0, void 0];
            return (
              (Array.isArray(s) ? s : [s, void 0]).forEach((t, n) => {
                if ("object" == typeof t)
                  for (let r = 0; r < Zn.length; r++) {
                    const o = Zn[r];
                    if (m[o] && void 0 !== t[o]) {
                      e[n] = t[o];
                      break;
                    }
                  }
                else e[n] = t;
              }),
              e
            );
          })(),
          P = h()(
            w,
            {
              ["".concat(w, "-no-wrap")]: !1 === u,
              ["".concat(w, "-").concat(x)]: x,
              ["".concat(w, "-").concat(b)]: b,
              ["".concat(w, "-rtl")]: "rtl" === p,
            },
            i,
            E,
            _,
          ),
          j = {},
          T = null != O[0] && O[0] > 0 ? O[0] / -2 : void 0;
        T && ((j.marginLeft = T), (j.marginRight = T));
        const [N, M] = O;
        j.rowGap = M;
        const L = e.useMemo(() => ({ gutter: [N, M], wrap: u }), [N, M, u]);
        return C(
          e.createElement(
            or.Provider,
            { value: L },
            e.createElement(
              "div",
              Object.assign({}, d, {
                className: P,
                style: Object.assign(Object.assign({}, j), l),
                ref: n,
              }),
              c,
            ),
          ),
        );
      });
      const ho = po,
        mo = ["gap", "children", "column", "className"],
        go = (e) => {
          let { gap: t, children: n, column: r, className: o } = e,
            a = u(e, mo);
          const i = h()(o, {
            [y.flexBox]: !0,
            [y["gap_".concat(t)]]: !!t,
            [y.column]: r,
          });
          return (0, m.jsx)(ho, c(c({ className: i }, a), {}, { children: n }));
        },
        vo = ["children"],
        yo = (e) => {
          let { children: t } = e,
            n = u(e, vo);
          return (0, m.jsx)(
            "svg",
            c(c({}, n), {}, { width: "24px", height: "24px", children: t }),
          );
        },
        bo = "styles_icon__7a0Jh",
        xo = "styles_mainColor__9LfW5",
        So = () =>
          (0, m.jsx)(yo, {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: (0, m.jsxs)("g", {
              transform: "translate(-18 -28.362)",
              fillOpacity: ".941",
              className: xo,
              children: [
                (0, m.jsx)("rect", {
                  ry: "0",
                  y: "32.362",
                  x: "20",
                  height: "3",
                  width: "20",
                }),
                (0, m.jsx)("rect", {
                  ry: "0",
                  y: "38.362",
                  x: "20",
                  height: "3",
                  width: "20",
                }),
                (0, m.jsx)("rect", {
                  ry: "0",
                  y: "44.362",
                  x: "20",
                  height: "3",
                  width: "20",
                }),
              ],
            }),
          }),
        ko = "styles_button__tVn0B";
      function wo(e, t) {
        var n = Object.assign({}, e);
        return (
          Array.isArray(t) &&
            t.forEach(function (e) {
              delete n[e];
            }),
          n
        );
      }
      function Co(t, n) {
        return ((t, n, r) =>
          e.isValidElement(t)
            ? e.cloneElement(t, "function" == typeof r ? r(t.props || {}) : r)
            : n)(t, t, n);
      }
      const Eo = (e) => {
          const { componentCls: t, colorPrimary: n } = e;
          return {
            [t]: {
              position: "absolute",
              background: "transparent",
              pointerEvents: "none",
              boxSizing: "border-box",
              color: "var(--wave-color, ".concat(n, ")"),
              boxShadow: "0 0 0 0 currentcolor",
              opacity: 0.2,
              "&.wave-motion-appear": {
                transition: [
                  "box-shadow 0.4s ".concat(e.motionEaseOutCirc),
                  "opacity 2s ".concat(e.motionEaseOutCirc),
                ].join(","),
                "&-active": { boxShadow: "0 0 0 6px currentcolor", opacity: 0 },
                "&.wave-quick": {
                  transition: [
                    "box-shadow "
                      .concat(e.motionDurationSlow, " ")
                      .concat(e.motionEaseInOut),
                    "opacity "
                      .concat(e.motionDurationSlow, " ")
                      .concat(e.motionEaseInOut),
                  ].join(","),
                },
              },
            },
          };
        },
        _o = oo("Wave", (e) => [Eo(e)]);
      var Oo = function (e) {
          return +setTimeout(e, 16);
        },
        Po = function (e) {
          return clearTimeout(e);
        };
      "undefined" != typeof window &&
        "requestAnimationFrame" in window &&
        ((Oo = function (e) {
          return window.requestAnimationFrame(e);
        }),
        (Po = function (e) {
          return window.cancelAnimationFrame(e);
        }));
      var jo = 0,
        To = new Map();
      function No(e) {
        To.delete(e);
      }
      var Mo = function (e) {
        var t = (jo += 1);
        return (
          (function n(r) {
            if (0 === r) No(t), e();
            else {
              var o = Oo(function () {
                n(r - 1);
              });
              To.set(t, o);
            }
          })(
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ),
          t
        );
      };
      Mo.cancel = function (e) {
        var t = To.get(e);
        return No(e), Po(t);
      };
      const Lo = Mo,
        zo = "".concat(er, "-wave-target");
      var Ro = o(950),
        Io = o.t(Ro, 2);
      function Ao(e) {
        return e instanceof HTMLElement || e instanceof SVGElement;
      }
      function Ho(t) {
        var n,
          o = (function (e) {
            return e && "object" === r(e) && Ao(e.nativeElement)
              ? e.nativeElement
              : Ao(e)
                ? e
                : null;
          })(t);
        return (
          o ||
          (t instanceof e.Component
            ? null === (n = Ro.findDOMNode) || void 0 === n
              ? void 0
              : n.call(Ro, t)
            : null)
        );
      }
      var Bo = ["children"],
        Fo = e.createContext({});
      function Do(t) {
        var n = t.children,
          r = u(t, Bo);
        return e.createElement(Fo.Provider, { value: r }, n);
      }
      const Uo = (function (e) {
        lr(n, e);
        var t = ur(n);
        function n() {
          return X(this, n), t.apply(this, arguments);
        }
        return (
          K(n, [
            {
              key: "render",
              value: function () {
                return this.props.children;
              },
            },
          ]),
          n
        );
      })(e.Component);
      var Vo = "none",
        Wo = "appear",
        $o = "enter",
        Go = "leave",
        Xo = "none",
        Qo = "prepare",
        Ko = "start",
        qo = "active",
        Yo = "end",
        Zo = "prepared";
      function Jo(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit".concat(e)] = "webkit".concat(t)),
          (n["Moz".concat(e)] = "moz".concat(t)),
          (n["ms".concat(e)] = "MS".concat(t)),
          (n["O".concat(e)] = "o".concat(t.toLowerCase())),
          n
        );
      }
      var ea = (function (e, t) {
          var n = {
            animationend: Jo("Animation", "AnimationEnd"),
            transitionend: Jo("Transition", "TransitionEnd"),
          };
          return (
            e &&
              ("AnimationEvent" in t || delete n.animationend.animation,
              "TransitionEvent" in t || delete n.transitionend.transition),
            n
          );
        })(O(), "undefined" != typeof window ? window : {}),
        ta = {};
      if (O()) {
        var na = document.createElement("div");
        ta = na.style;
      }
      var ra = {};
      function oa(e) {
        if (ra[e]) return ra[e];
        var t = ea[e];
        if (t)
          for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
            var a = n[o];
            if (Object.prototype.hasOwnProperty.call(t, a) && a in ta)
              return (ra[e] = t[a]), ra[e];
          }
        return "";
      }
      var aa = oa("animationend"),
        ia = oa("transitionend"),
        la = !(!aa || !ia),
        ca = aa || "animationend",
        sa = ia || "transitionend";
      function ua(e, t) {
        if (!e) return null;
        if ("object" === r(e)) {
          var n = t.replace(/-\w/g, function (e) {
            return e[1].toUpperCase();
          });
          return e[n];
        }
        return "".concat(e, "-").concat(t);
      }
      const da = O() ? e.useLayoutEffect : e.useEffect;
      var fa = [Qo, Ko, qo, Yo],
        pa = [Qo, Zo],
        ha = !1;
      function ma(e) {
        return e === qo || e === Yo;
      }
      const ga = function (t, n, r) {
        var o = w(xr(Xo), 2),
          a = o[0],
          i = o[1],
          l = (function () {
            var t = e.useRef(null);
            function n() {
              Lo.cancel(t.current);
            }
            return (
              e.useEffect(function () {
                return function () {
                  n();
                };
              }, []),
              [
                function e(r) {
                  var o =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 2;
                  n();
                  var a = Lo(function () {
                    o <= 1
                      ? r({
                          isCanceled: function () {
                            return a !== t.current;
                          },
                        })
                      : e(r, o - 1);
                  });
                  t.current = a;
                },
                n,
              ]
            );
          })(),
          c = w(l, 2),
          s = c[0],
          u = c[1];
        var d = n ? pa : fa;
        return (
          da(
            function () {
              if (a !== Xo && a !== Yo) {
                var e = d.indexOf(a),
                  t = d[e + 1],
                  n = r(a);
                n === ha
                  ? i(t, !0)
                  : t &&
                    s(function (e) {
                      function r() {
                        e.isCanceled() || i(t, !0);
                      }
                      !0 === n ? r() : Promise.resolve(n).then(r);
                    });
              }
            },
            [t, a],
          ),
          e.useEffect(function () {
            return function () {
              u();
            };
          }, []),
          [
            function () {
              i(Qo, !0);
            },
            a,
          ]
        );
      };
      function va(t, n, r, o) {
        var a,
          l,
          s,
          u = o.motionEnter,
          d = void 0 === u || u,
          f = o.motionAppear,
          p = void 0 === f || f,
          h = o.motionLeave,
          m = void 0 === h || h,
          g = o.motionDeadline,
          v = o.motionLeaveImmediately,
          y = o.onAppearPrepare,
          b = o.onEnterPrepare,
          x = o.onLeavePrepare,
          S = o.onAppearStart,
          k = o.onEnterStart,
          C = o.onLeaveStart,
          E = o.onAppearActive,
          _ = o.onEnterActive,
          O = o.onLeaveActive,
          P = o.onAppearEnd,
          j = o.onEnterEnd,
          T = o.onLeaveEnd,
          N = o.onVisibleChanged,
          M = w(xr(), 2),
          L = M[0],
          z = M[1],
          R =
            ((a = Vo),
            (l = w(
              e.useReducer(function (e) {
                return e + 1;
              }, 0),
              2,
            )[1]),
            (s = e.useRef(a)),
            [
              br(function () {
                return s.current;
              }),
              br(function (e) {
                (s.current = "function" == typeof e ? e(s.current) : e), l();
              }),
            ]),
          I = w(R, 2),
          A = I[0],
          H = I[1],
          B = w(xr(null), 2),
          F = B[0],
          D = B[1],
          U = A(),
          V = (0, e.useRef)(!1),
          W = (0, e.useRef)(null);
        function $() {
          return r();
        }
        var G = (0, e.useRef)(!1);
        function X() {
          H(Vo), D(null, !0);
        }
        var Q = br(function (e) {
            var t = A();
            if (t !== Vo) {
              var n = $();
              if (!e || e.deadline || e.target === n) {
                var r,
                  o = G.current;
                t === Wo && o
                  ? (r = null == P ? void 0 : P(n, e))
                  : t === $o && o
                    ? (r = null == j ? void 0 : j(n, e))
                    : t === Go && o && (r = null == T ? void 0 : T(n, e)),
                  o && !1 !== r && X();
              }
            }
          }),
          K = (function (t) {
            var n = (0, e.useRef)();
            function r(e) {
              e && (e.removeEventListener(sa, t), e.removeEventListener(ca, t));
            }
            return (
              e.useEffect(function () {
                return function () {
                  r(n.current);
                };
              }, []),
              [
                function (e) {
                  n.current && n.current !== e && r(n.current),
                    e &&
                      e !== n.current &&
                      (e.addEventListener(sa, t),
                      e.addEventListener(ca, t),
                      (n.current = e));
                },
                r,
              ]
            );
          })(Q),
          q = w(K, 1)[0],
          Y = function (e) {
            switch (e) {
              case Wo:
                return i(i(i({}, Qo, y), Ko, S), qo, E);
              case $o:
                return i(i(i({}, Qo, b), Ko, k), qo, _);
              case Go:
                return i(i(i({}, Qo, x), Ko, C), qo, O);
              default:
                return {};
            }
          },
          Z = e.useMemo(
            function () {
              return Y(U);
            },
            [U],
          ),
          J = w(
            ga(U, !t, function (e) {
              if (e === Qo) {
                var t = Z[Qo];
                return t ? t($()) : ha;
              }
              var n;
              te in Z &&
                D(
                  (null === (n = Z[te]) || void 0 === n
                    ? void 0
                    : n.call(Z, $(), null)) || null,
                );
              return (
                te === qo &&
                  U !== Vo &&
                  (q($()),
                  g > 0 &&
                    (clearTimeout(W.current),
                    (W.current = setTimeout(function () {
                      Q({ deadline: !0 });
                    }, g)))),
                te === Zo && X(),
                true
              );
            }),
            2,
          ),
          ee = J[0],
          te = J[1],
          ne = ma(te);
        G.current = ne;
        var re = (0, e.useRef)(null);
        da(
          function () {
            if (!V.current || re.current !== n) {
              z(n);
              var e,
                r = V.current;
              (V.current = !0),
                !r && n && p && (e = Wo),
                r && n && d && (e = $o),
                ((r && !n && m) || (!r && v && !n && m)) && (e = Go);
              var o = Y(e);
              e && (t || o[Qo]) ? (H(e), ee()) : H(Vo), (re.current = n);
            }
          },
          [n],
        ),
          (0, e.useEffect)(
            function () {
              ((U === Wo && !p) || (U === $o && !d) || (U === Go && !m)) &&
                H(Vo);
            },
            [p, d, m],
          ),
          (0, e.useEffect)(function () {
            return function () {
              (V.current = !1), clearTimeout(W.current);
            };
          }, []);
        var oe = e.useRef(!1);
        (0, e.useEffect)(
          function () {
            L && (oe.current = !0),
              void 0 !== L &&
                U === Vo &&
                ((oe.current || L) && (null == N || N(L)), (oe.current = !0));
          },
          [L, U],
        );
        var ae = F;
        return (
          Z[Qo] && te === Ko && (ae = c({ transition: "none" }, ae)),
          [U, te, ae, null != L ? L : n]
        );
      }
      const ya = (function (t) {
        var n = t;
        "object" === r(t) && (n = t.transitionSupport);
        var o = e.forwardRef(function (t, r) {
          var o = t.visible,
            a = void 0 === o || o,
            l = t.removeOnLeave,
            s = void 0 === l || l,
            u = t.forceRender,
            d = t.children,
            f = t.motionName,
            p = t.leavedClassName,
            m = t.eventProps,
            g = (function (e, t) {
              return !(!e.motionName || !n || !1 === t);
            })(t, e.useContext(Fo).motion),
            v = (0, e.useRef)(),
            y = (0, e.useRef)();
          var b = w(
              va(
                g,
                a,
                function () {
                  try {
                    return v.current instanceof HTMLElement
                      ? v.current
                      : Ho(y.current);
                  } catch (e) {
                    return null;
                  }
                },
                t,
              ),
              4,
            ),
            x = b[0],
            S = b[1],
            k = b[2],
            C = b[3],
            E = e.useRef(C);
          C && (E.current = !0);
          var _,
            O = e.useCallback(
              function (e) {
                (v.current = e), Or(r, e);
              },
              [r],
            ),
            P = c(c({}, m), {}, { visible: a });
          if (d)
            if (x === Vo)
              _ = C
                ? d(c({}, P), O)
                : !s && E.current && p
                  ? d(c(c({}, P), {}, { className: p }), O)
                  : u || (!s && !p)
                    ? d(c(c({}, P), {}, { style: { display: "none" } }), O)
                    : null;
            else {
              var j;
              S === Qo
                ? (j = "prepare")
                : ma(S)
                  ? (j = "active")
                  : S === Ko && (j = "start");
              var T = ua(f, "".concat(x, "-").concat(j));
              _ = d(
                c(
                  c({}, P),
                  {},
                  {
                    className: h()(
                      ua(f, x),
                      i(i({}, T, T && j), f, "string" == typeof f),
                    ),
                    style: k,
                  },
                ),
                O,
              );
            }
          else _ = null;
          e.isValidElement(_) &&
            jr(_) &&
            (Nr(_) || (_ = e.cloneElement(_, { ref: O })));
          return e.createElement(Uo, { ref: y }, _);
        });
        return (o.displayName = "CSSMotion"), o;
      })(la);
      var ba = "add",
        xa = "keep",
        Sa = "remove",
        ka = "removed";
      function wa(e) {
        var t;
        return c(
          c({}, (t = e && "object" === r(e) && "key" in e ? e : { key: e })),
          {},
          { key: String(t.key) },
        );
      }
      function Ca() {
        return (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
        ).map(wa);
      }
      var Ea = ["component", "children", "onVisibleChanged", "onAllRemoved"],
        _a = ["status"],
        Oa = [
          "eventProps",
          "visible",
          "children",
          "motionName",
          "motionAppear",
          "motionEnter",
          "motionLeave",
          "motionLeaveImmediately",
          "motionDeadline",
          "removeOnLeave",
          "leavedClassName",
          "onAppearPrepare",
          "onAppearStart",
          "onAppearActive",
          "onAppearEnd",
          "onEnterStart",
          "onEnterActive",
          "onEnterEnd",
          "onLeaveStart",
          "onLeaveActive",
          "onLeaveEnd",
        ];
      !(function () {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ya,
          n = (function (n) {
            lr(o, n);
            var r = ur(o);
            function o() {
              var e;
              X(this, o);
              for (
                var t = arguments.length, n = new Array(t), a = 0;
                a < t;
                a++
              )
                n[a] = arguments[a];
              return (
                i(ar((e = r.call.apply(r, [this].concat(n)))), "state", {
                  keyEntities: [],
                }),
                i(ar(e), "removeKey", function (t) {
                  e.setState(
                    function (e) {
                      return {
                        keyEntities: e.keyEntities.map(function (e) {
                          return e.key !== t
                            ? e
                            : c(c({}, e), {}, { status: ka });
                        }),
                      };
                    },
                    function () {
                      0 ===
                        e.state.keyEntities.filter(function (e) {
                          return e.status !== ka;
                        }).length &&
                        e.props.onAllRemoved &&
                        e.props.onAllRemoved();
                    },
                  );
                }),
                e
              );
            }
            return (
              K(
                o,
                [
                  {
                    key: "render",
                    value: function () {
                      var n = this,
                        r = this.state.keyEntities,
                        o = this.props,
                        a = o.component,
                        i = o.children,
                        l = o.onVisibleChanged,
                        s = (o.onAllRemoved, u(o, Ea)),
                        d = a || e.Fragment,
                        f = {};
                      return (
                        Oa.forEach(function (e) {
                          (f[e] = s[e]), delete s[e];
                        }),
                        delete s.keys,
                        e.createElement(
                          d,
                          s,
                          r.map(function (r, o) {
                            var a = r.status,
                              s = u(r, _a),
                              d = a === ba || a === xa;
                            return e.createElement(
                              t,
                              Ae({}, f, {
                                key: s.key,
                                visible: d,
                                eventProps: s,
                                onVisibleChanged: function (e) {
                                  null == l || l(e, { key: s.key }),
                                    e || n.removeKey(s.key);
                                },
                              }),
                              function (e, t) {
                                return i(c(c({}, e), {}, { index: o }), t);
                              },
                            );
                          }),
                        )
                      );
                    },
                  },
                ],
                [
                  {
                    key: "getDerivedStateFromProps",
                    value: function (e, t) {
                      var n = e.keys,
                        r = t.keyEntities,
                        o = Ca(n),
                        a = (function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : [],
                            n = [],
                            r = 0,
                            o = t.length,
                            a = Ca(e),
                            i = Ca(t);
                          a.forEach(function (e) {
                            for (var t = !1, a = r; a < o; a += 1) {
                              var l = i[a];
                              if (l.key === e.key) {
                                r < a &&
                                  ((n = n.concat(
                                    i.slice(r, a).map(function (e) {
                                      return c(c({}, e), {}, { status: ba });
                                    }),
                                  )),
                                  (r = a)),
                                  n.push(c(c({}, l), {}, { status: xa })),
                                  (r += 1),
                                  (t = !0);
                                break;
                              }
                            }
                            t || n.push(c(c({}, e), {}, { status: Sa }));
                          }),
                            r < o &&
                              (n = n.concat(
                                i.slice(r).map(function (e) {
                                  return c(c({}, e), {}, { status: ba });
                                }),
                              ));
                          var l = {};
                          return (
                            n.forEach(function (e) {
                              var t = e.key;
                              l[t] = (l[t] || 0) + 1;
                            }),
                            Object.keys(l)
                              .filter(function (e) {
                                return l[e] > 1;
                              })
                              .forEach(function (e) {
                                (n = n.filter(function (t) {
                                  var n = t.key,
                                    r = t.status;
                                  return n !== e || r !== Sa;
                                })).forEach(function (t) {
                                  t.key === e && (t.status = xa);
                                });
                              }),
                            n
                          );
                        })(r, o);
                      return {
                        keyEntities: a.filter(function (e) {
                          var t = r.find(function (t) {
                            var n = t.key;
                            return e.key === n;
                          });
                          return !t || t.status !== ka || e.status !== Sa;
                        }),
                      };
                    },
                  },
                ],
              ),
              o
            );
          })(e.Component);
        i(n, "defaultProps", { component: "div" });
      })(la);
      const Pa = ya;
      function ja() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        ja = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          o = n.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          l = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          s = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (e) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function d(e, t, n, r) {
          var o = t && t.prototype instanceof y ? t : y,
            i = Object.create(o.prototype),
            l = new N(r || []);
          return a(i, "_invoke", { value: O(e, n, l) }), i;
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = d;
        var p = "suspendedStart",
          h = "suspendedYield",
          m = "executing",
          g = "completed",
          v = {};
        function y() {}
        function b() {}
        function x() {}
        var S = {};
        u(S, l, function () {
          return this;
        });
        var k = Object.getPrototypeOf,
          w = k && k(k(M([])));
        w && w !== n && o.call(w, l) && (S = w);
        var C = (x.prototype = y.prototype = Object.create(S));
        function E(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function _(e, t) {
          function n(a, i, l, c) {
            var s = f(e[a], e, i);
            if ("throw" !== s.type) {
              var u = s.arg,
                d = u.value;
              return d && "object" == r(d) && o.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      n("next", e, l, c);
                    },
                    function (e) {
                      n("throw", e, l, c);
                    },
                  )
                : t.resolve(d).then(
                    function (e) {
                      (u.value = e), l(u);
                    },
                    function (e) {
                      return n("throw", e, l, c);
                    },
                  );
            }
            c(s.arg);
          }
          var i;
          a(this, "_invoke", {
            value: function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function O(t, n, r) {
          var o = p;
          return function (a, i) {
            if (o === m) throw Error("Generator is already running");
            if (o === g) {
              if ("throw" === a) throw i;
              return { value: e, done: !0 };
            }
            for (r.method = a, r.arg = i; ; ) {
              var l = r.delegate;
              if (l) {
                var c = P(l, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === p) throw ((o = g), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = m;
              var s = f(t, n, r);
              if ("normal" === s.type) {
                if (((o = r.done ? g : h), s.arg === v)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((o = g), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function P(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                P(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              v
            );
          var a = f(o, t.iterator, n.arg);
          if ("throw" === a.type)
            return (
              (n.method = "throw"), (n.arg = a.arg), (n.delegate = null), v
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((n[t.resultName] = i.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                v)
              : i
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function j(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function T(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function N(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(j, this),
            this.reset(!0);
        }
        function M(t) {
          if (t || "" === t) {
            var n = t[l];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var a = -1,
                i = function n() {
                  for (; ++a < t.length; )
                    if (o.call(t, a)) return (n.value = t[a]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(r(t) + " is not iterable");
        }
        return (
          (b.prototype = x),
          a(C, "constructor", { value: x, configurable: !0 }),
          a(x, "constructor", { value: b, configurable: !0 }),
          (b.displayName = u(x, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === b || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, x)
                : ((e.__proto__ = x), u(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(C)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          E(_.prototype),
          u(_.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = _),
          (t.async = function (e, n, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new _(d(e, n, r, o), a);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(C),
          u(C, s, "Generator"),
          u(C, l, function () {
            return this;
          }),
          u(C, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = M),
          (N.prototype = {
            constructor: N,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(T),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    o.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function r(r, o) {
                return (
                  (l.type = "throw"),
                  (l.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  l = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var c = o.call(i, "catchLoc"),
                    s = o.call(i, "finallyLoc");
                  if (c && s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  o.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var a = r;
                  break;
                }
              }
              a &&
                ("break" === e || "continue" === e) &&
                a.tryLoc <= t &&
                t <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), v)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                v
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), T(n), v;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    T(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: M(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                v
              );
            },
          }),
          t
        );
      }
      function Ta(e, t, n, r, o, a, i) {
        try {
          var l = e[a](i),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function Na(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = e.apply(t, n);
            function i(e) {
              Ta(a, r, o, i, l, "next", e);
            }
            function l(e) {
              Ta(a, r, o, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      var Ma,
        La = c({}, Io),
        za = La.version,
        Ra = La.render,
        Ia = La.unmountComponentAtNode;
      try {
        Number((za || "").split(".")[0]) >= 18 && (Ma = La.createRoot);
      } catch (e) {}
      function Aa(e) {
        var t = La.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        t && "object" === r(t) && (t.usingClientEntryPoint = e);
      }
      var Ha = "__rc_react_root__";
      function Ba(e, t) {
        Ma
          ? (function (e, t) {
              Aa(!0);
              var n = t[Ha] || Ma(t);
              Aa(!1), n.render(e), (t[Ha] = n);
            })(e, t)
          : (function (e, t) {
              null == Ra || Ra(e, t);
            })(e, t);
      }
      function Fa(e) {
        return Da.apply(this, arguments);
      }
      function Da() {
        return (Da = Na(
          ja().mark(function e(t) {
            return ja().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Promise.resolve().then(function () {
                        var e;
                        null === (e = t[Ha]) || void 0 === e || e.unmount(),
                          delete t[Ha];
                      }),
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Ua(e) {
        Ia(e);
      }
      function Va() {
        return (Va = Na(
          ja().mark(function e(t) {
            return ja().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (void 0 === Ma) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", Fa(t));
                  case 2:
                    Ua(t);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      let Wa = (e, t) => (
        Ba(e, t),
        () =>
          (function (e) {
            return Va.apply(this, arguments);
          })(t)
      );
      function $a(e) {
        return (
          e &&
          "#fff" !== e &&
          "#ffffff" !== e &&
          "rgb(255, 255, 255)" !== e &&
          "rgba(255, 255, 255, 1)" !== e &&
          !/rgba\((?:\d*, ){3}0\)/.test(e) &&
          "transparent" !== e
        );
      }
      function Ga(e) {
        return Number.isNaN(e) ? 0 : e;
      }
      const Xa = (t) => {
          const {
              className: n,
              target: r,
              component: o,
              registerUnmount: a,
            } = t,
            i = e.useRef(null),
            l = e.useRef(null);
          e.useEffect(() => {
            l.current = a();
          }, []);
          const [c, s] = e.useState(null),
            [u, d] = e.useState([]),
            [f, p] = e.useState(0),
            [m, g] = e.useState(0),
            [v, y] = e.useState(0),
            [b, x] = e.useState(0),
            [S, k] = e.useState(!1),
            w = {
              left: f,
              top: m,
              width: v,
              height: b,
              borderRadius: u.map((e) => "".concat(e, "px")).join(" "),
            };
          function C() {
            const e = getComputedStyle(r);
            s(
              (function (e) {
                const {
                  borderTopColor: t,
                  borderColor: n,
                  backgroundColor: r,
                } = getComputedStyle(e);
                return $a(t) ? t : $a(n) ? n : $a(r) ? r : null;
              })(r),
            );
            const t = "static" === e.position,
              { borderLeftWidth: n, borderTopWidth: o } = e;
            p(t ? r.offsetLeft : Ga(-parseFloat(n))),
              g(t ? r.offsetTop : Ga(-parseFloat(o))),
              y(r.offsetWidth),
              x(r.offsetHeight);
            const {
              borderTopLeftRadius: a,
              borderTopRightRadius: i,
              borderBottomLeftRadius: l,
              borderBottomRightRadius: c,
            } = e;
            d([a, i, c, l].map((e) => Ga(parseFloat(e))));
          }
          if (
            (c && (w["--wave-color"] = c),
            e.useEffect(() => {
              if (r) {
                const e = Lo(() => {
                  C(), k(!0);
                });
                let t;
                return (
                  "undefined" != typeof ResizeObserver &&
                    ((t = new ResizeObserver(C)), t.observe(r)),
                  () => {
                    Lo.cancel(e), null == t || t.disconnect();
                  }
                );
              }
            }, []),
            !S)
          )
            return null;
          const E =
            ("Checkbox" === o || "Radio" === o) &&
            (null == r ? void 0 : r.classList.contains(zo));
          return e.createElement(
            Pa,
            {
              visible: !0,
              motionAppear: !0,
              motionName: "wave-motion",
              motionDeadline: 5e3,
              onAppearEnd: (e, t) => {
                var n, r;
                if (t.deadline || "opacity" === t.propertyName) {
                  const e =
                    null === (n = i.current) || void 0 === n
                      ? void 0
                      : n.parentElement;
                  null === (r = l.current) ||
                    void 0 === r ||
                    r.call(l).then(() => {
                      null == e || e.remove();
                    });
                }
                return !1;
              },
            },
            (t, r) => {
              let { className: o } = t;
              return e.createElement("div", {
                ref: Pr(i, r),
                className: h()(n, o, { "wave-quick": E }),
                style: w,
              });
            },
          );
        },
        Qa = (t, n) => {
          var r;
          const { component: o } = n;
          if (
            "Checkbox" === o &&
            !(null === (r = t.querySelector("input")) || void 0 === r
              ? void 0
              : r.checked)
          )
            return;
          const a = document.createElement("div");
          (a.style.position = "absolute"),
            (a.style.left = "0px"),
            (a.style.top = "0px"),
            null == t || t.insertBefore(a, null == t ? void 0 : t.firstChild);
          let i = null;
          i = Wa(
            e.createElement(
              Xa,
              Object.assign({}, n, {
                target: t,
                registerUnmount: function () {
                  return i;
                },
              }),
            ),
            a,
          );
        },
        Ka = (t, n, r) => {
          const { wave: o } = e.useContext(nr),
            [, a, i] = Yn(),
            l = br((e) => {
              const l = t.current;
              if ((null == o ? void 0 : o.disabled) || !l) return;
              const c = l.querySelector(".".concat(zo)) || l,
                { showEffect: s } = o || {};
              (s || Qa)(c, {
                className: n,
                token: a,
                component: r,
                event: e,
                hashId: i,
              });
            }),
            c = e.useRef(null);
          return (e) => {
            Lo.cancel(c.current),
              (c.current = Lo(() => {
                l(e);
              }));
          };
        };
      const qa = (t) => {
          const { children: n, disabled: r, component: o } = t,
            { getPrefixCls: a } = (0, e.useContext)(nr),
            i = (0, e.useRef)(null),
            l = a("wave"),
            [, c] = _o(l),
            s = Ka(i, h()(l, c), o);
          if (
            (e.useEffect(() => {
              const e = i.current;
              if (!e || 1 !== e.nodeType || r) return;
              const t = (t) => {
                !(function (e) {
                  if (!e) return !1;
                  if (e instanceof Element) {
                    if (e.offsetParent) return !0;
                    if (e.getBBox) {
                      var t = e.getBBox(),
                        n = t.width,
                        r = t.height;
                      if (n || r) return !0;
                    }
                    if (e.getBoundingClientRect) {
                      var o = e.getBoundingClientRect(),
                        a = o.width,
                        i = o.height;
                      if (a || i) return !0;
                    }
                  }
                  return !1;
                })(t.target) ||
                  !e.getAttribute ||
                  e.getAttribute("disabled") ||
                  e.disabled ||
                  e.className.includes("disabled") ||
                  e.className.includes("-leave") ||
                  s(t);
              };
              return (
                e.addEventListener("click", t, !0),
                () => {
                  e.removeEventListener("click", t, !0);
                }
              );
            }, [r]),
            !e.isValidElement(n))
          )
            return null != n ? n : null;
          return Co(n, { ref: jr(n) ? Pr(Nr(n), i) : i });
        },
        Ya = e.createContext(!1),
        Za = (t) => {
          let { children: n, disabled: r } = t;
          const o = e.useContext(Ya);
          return e.createElement(Ya.Provider, { value: null != r ? r : o }, n);
        },
        Ja = Ya,
        ei = e.createContext(void 0),
        ti = (t) => {
          let { children: n, size: r } = t;
          const o = e.useContext(ei);
          return e.createElement(ei.Provider, { value: r || o }, n);
        },
        ni = ei,
        ri = (t) => {
          const n = e.useContext(ni);
          return e.useMemo(
            () =>
              t
                ? "string" == typeof t
                  ? null != t
                    ? t
                    : n
                  : t instanceof Function
                    ? t(n)
                    : n
                : n,
            [t, n],
          );
        };
      function oi(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = [];
        return (
          e.Children.forEach(t, function (e) {
            (null != e || n.keepEmpty) &&
              (Array.isArray(e)
                ? (r = r.concat(oi(e)))
                : _r(e) && e.props
                  ? (r = r.concat(oi(e.props.children, n)))
                  : r.push(e));
          }),
          r
        );
      }
      const ai = e.createContext(null);
      var ii = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      };
      const li = e.createContext(void 0),
        ci = (t) => {
          const { getPrefixCls: n, direction: r } = e.useContext(nr),
            { prefixCls: o, size: a, className: i } = t,
            l = ii(t, ["prefixCls", "size", "className"]),
            c = n("btn-group", o),
            [, , s] = Yn();
          let u = "";
          switch (a) {
            case "large":
              u = "lg";
              break;
            case "small":
              u = "sm";
          }
          const d = h()(
            c,
            {
              ["".concat(c, "-").concat(u)]: u,
              ["".concat(c, "-rtl")]: "rtl" === r,
            },
            i,
            s,
          );
          return e.createElement(
            li.Provider,
            { value: a },
            e.createElement("div", Object.assign({}, l, { className: d })),
          );
        },
        si = [
          "blue",
          "purple",
          "cyan",
          "green",
          "magenta",
          "pink",
          "red",
          "orange",
          "yellow",
          "volcano",
          "geekblue",
          "lime",
          "gold",
        ],
        ui = /^[\u4E00-\u9FA5]{2}$/,
        di = ui.test.bind(ui);
      function fi(e) {
        return "string" == typeof e;
      }
      function pi(e) {
        return "text" === e || "link" === e;
      }
      function hi(t, n) {
        if (null == t) return;
        const r = n ? " " : "";
        return "string" != typeof t &&
          "number" != typeof t &&
          fi(t.type) &&
          di(t.props.children)
          ? Co(t, { children: t.props.children.split("").join(r) })
          : fi(t)
            ? di(t)
              ? e.createElement("span", null, t.split("").join(r))
              : e.createElement("span", null, t)
            : (function (t) {
                  return t && e.isValidElement(t) && t.type === e.Fragment;
                })(t)
              ? e.createElement("span", null, t)
              : t;
      }
      ["default", "primary", "danger"].concat(E(si));
      const mi = (0, e.forwardRef)((t, n) => {
          const { className: r, style: o, children: a, prefixCls: i } = t,
            l = h()("".concat(i, "-icon"), r);
          return e.createElement("span", { ref: n, className: l, style: o }, a);
        }),
        gi = mi;
      const vi = {
        icon: {
          tag: "svg",
          attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
          children: [
            {
              tag: "path",
              attrs: {
                d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z",
              },
            },
          ],
        },
        name: "loading",
        theme: "outlined",
      };
      const yi = (0, e.createContext)({});
      function bi(e) {
        var t;
        return null == e || null === (t = e.getRootNode) || void 0 === t
          ? void 0
          : t.call(e);
      }
      function xi(e) {
        return (function (e) {
          return bi(e) instanceof ShadowRoot;
        })(e)
          ? bi(e)
          : null;
      }
      function Si(e) {
        return (
          "object" === r(e) &&
          "string" == typeof e.name &&
          "string" == typeof e.theme &&
          ("object" === r(e.icon) || "function" == typeof e.icon)
        );
      }
      function ki() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Object.keys(e).reduce(function (t, n) {
          var r,
            o = e[n];
          if ("class" === n) (t.className = o), delete t.class;
          else
            delete t[n],
              (t[
                ((r = n),
                r.replace(/-(.)/g, function (e, t) {
                  return t.toUpperCase();
                }))
              ] = o);
          return t;
        }, {});
      }
      function wi(t, n, r) {
        return r
          ? e.createElement(
              t.tag,
              c(c({ key: n }, ki(t.attrs)), r),
              (t.children || []).map(function (e, r) {
                return wi(e, "".concat(n, "-").concat(t.tag, "-").concat(r));
              }),
            )
          : e.createElement(
              t.tag,
              c({ key: n }, ki(t.attrs)),
              (t.children || []).map(function (e, r) {
                return wi(e, "".concat(n, "-").concat(t.tag, "-").concat(r));
              }),
            );
      }
      function Ci(e) {
        return Yt(e)[0];
      }
      function Ei(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      var _i = [
          "icon",
          "className",
          "onClick",
          "style",
          "primaryColor",
          "secondaryColor",
        ],
        Oi = {
          primaryColor: "#333",
          secondaryColor: "#E6E6E6",
          calculated: !1,
        };
      var Pi = function (t) {
        var n,
          r,
          o,
          a,
          i,
          l,
          s,
          d = t.icon,
          f = t.className,
          p = t.onClick,
          h = t.style,
          m = t.primaryColor,
          g = t.secondaryColor,
          v = u(t, _i),
          y = e.useRef(),
          b = Oi;
        if (
          (m && (b = { primaryColor: m, secondaryColor: g || Ci(m) }),
          (n = y),
          (r = (0, e.useContext)(yi)),
          (o = r.csp),
          (a = r.prefixCls),
          (i =
            "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n"),
          a && (i = i.replace(/anticon/g, a)),
          (0, e.useEffect)(function () {
            var e = xi(n.current);
            A(i, "@ant-design-icons", { prepend: !0, csp: o, attachTo: e });
          }, []),
          (l = Si(d)),
          (s = "icon should be icon definiton, but got ".concat(d)),
          $(l, "[@ant-design/icons] ".concat(s)),
          !Si(d))
        )
          return null;
        var x = d;
        return (
          x &&
            "function" == typeof x.icon &&
            (x = c(
              c({}, x),
              {},
              { icon: x.icon(b.primaryColor, b.secondaryColor) },
            )),
          wi(
            x.icon,
            "svg-".concat(x.name),
            c(
              c(
                {
                  className: f,
                  onClick: p,
                  style: h,
                  "data-icon": x.name,
                  width: "1em",
                  height: "1em",
                  fill: "currentColor",
                  "aria-hidden": "true",
                },
                v,
              ),
              {},
              { ref: y },
            ),
          )
        );
      };
      (Pi.displayName = "IconReact"),
        (Pi.getTwoToneColors = function () {
          return c({}, Oi);
        }),
        (Pi.setTwoToneColors = function (e) {
          var t = e.primaryColor,
            n = e.secondaryColor;
          (Oi.primaryColor = t),
            (Oi.secondaryColor = n || Ci(t)),
            (Oi.calculated = !!n);
        });
      const ji = Pi;
      function Ti(e) {
        var t = w(Ei(e), 2),
          n = t[0],
          r = t[1];
        return ji.setTwoToneColors({ primaryColor: n, secondaryColor: r });
      }
      var Ni = [
        "className",
        "icon",
        "spin",
        "rotate",
        "tabIndex",
        "onClick",
        "twoToneColor",
      ];
      Ti(cn.primary);
      var Mi = e.forwardRef(function (t, n) {
        var r = t.className,
          o = t.icon,
          a = t.spin,
          l = t.rotate,
          c = t.tabIndex,
          s = t.onClick,
          d = t.twoToneColor,
          f = u(t, Ni),
          p = e.useContext(yi),
          m = p.prefixCls,
          g = void 0 === m ? "anticon" : m,
          v = p.rootClassName,
          y = h()(
            v,
            g,
            i(
              i({}, "".concat(g, "-").concat(o.name), !!o.name),
              "".concat(g, "-spin"),
              !!a || "loading" === o.name,
            ),
            r,
          ),
          b = c;
        void 0 === b && s && (b = -1);
        var x = l
            ? {
                msTransform: "rotate(".concat(l, "deg)"),
                transform: "rotate(".concat(l, "deg)"),
              }
            : void 0,
          S = w(Ei(d), 2),
          k = S[0],
          C = S[1];
        return e.createElement(
          "span",
          Ae({ role: "img", "aria-label": o.name }, f, {
            ref: n,
            tabIndex: b,
            onClick: s,
            className: y,
          }),
          e.createElement(ji, {
            icon: o,
            primaryColor: k,
            secondaryColor: C,
            style: x,
          }),
        );
      });
      (Mi.displayName = "AntdIcon"),
        (Mi.getTwoToneColor = function () {
          var e = ji.getTwoToneColors();
          return e.calculated
            ? [e.primaryColor, e.secondaryColor]
            : e.primaryColor;
        }),
        (Mi.setTwoToneColor = Ti);
      const Li = Mi;
      var zi = function (t, n) {
        return e.createElement(Li, Ae({}, t, { ref: n, icon: vi }));
      };
      /**![loading](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTk4OCA1NDhjLTE5LjkgMC0zNi0xNi4xLTM2LTM2IDAtNTkuNC0xMS42LTExNy0zNC42LTE3MS4zYTQ0MC40NSA0NDAuNDUgMCAwMC05NC4zLTEzOS45IDQzNy43MSA0MzcuNzEgMCAwMC0xMzkuOS05NC4zQzYyOSA4My42IDU3MS40IDcyIDUxMiA3MmMtMTkuOSAwLTM2LTE2LjEtMzYtMzZzMTYuMS0zNiAzNi0zNmM2OS4xIDAgMTM2LjIgMTMuNSAxOTkuMyA0MC4zQzc3Mi4zIDY2IDgyNyAxMDMgODc0IDE1MGM0NyA0NyA4My45IDEwMS44IDEwOS43IDE2Mi43IDI2LjcgNjMuMSA0MC4yIDEzMC4yIDQwLjIgMTk5LjMuMSAxOS45LTE2IDM2LTM1LjkgMzZ6IiAvPjwvc3ZnPg==) */ const Ri =
          e.forwardRef(zi),
        Ii = (0, e.forwardRef)((t, n) => {
          const { prefixCls: r, className: o, style: a, iconClassName: i } = t,
            l = h()("".concat(r, "-loading-icon"), o);
          return e.createElement(
            gi,
            { prefixCls: r, className: l, style: a, ref: n },
            e.createElement(Ri, { className: i }),
          );
        }),
        Ai = () => ({ width: 0, opacity: 0, transform: "scale(0)" }),
        Hi = (e) => ({
          width: e.scrollWidth,
          opacity: 1,
          transform: "scale(1)",
        }),
        Bi = (t) => {
          const {
              prefixCls: n,
              loading: r,
              existIcon: o,
              className: a,
              style: i,
              mount: l,
            } = t,
            c = !!r;
          return o
            ? e.createElement(Ii, { prefixCls: n, className: a, style: i })
            : e.createElement(
                Pa,
                {
                  visible: c,
                  motionName: "".concat(n, "-loading-icon-motion"),
                  motionAppear: !l,
                  motionEnter: !l,
                  motionLeave: !l,
                  removeOnLeave: !0,
                  onAppearStart: Ai,
                  onAppearActive: Hi,
                  onEnterStart: Ai,
                  onEnterActive: Hi,
                  onLeaveStart: Hi,
                  onLeaveActive: Ai,
                },
                (t, r) => {
                  let { className: o, style: l } = t;
                  const c = Object.assign(Object.assign({}, i), l);
                  return e.createElement(Ii, {
                    prefixCls: n,
                    className: h()(a, o),
                    style: c,
                    ref: r,
                  });
                },
              );
        },
        Fi = (e, t) => ({
          ["> span, > ".concat(e)]: {
            "&:not(:last-child)": {
              ["&, & > ".concat(e)]: {
                "&:not(:disabled)": { borderInlineEndColor: t },
              },
            },
            "&:not(:first-child)": {
              ["&, & > ".concat(e)]: {
                "&:not(:disabled)": { borderInlineStartColor: t },
              },
            },
          },
        }),
        Di = (e) => {
          const {
            componentCls: t,
            fontSize: n,
            lineWidth: r,
            groupBorderColor: o,
            colorErrorHover: a,
          } = e;
          return {
            ["".concat(t, "-group")]: [
              {
                position: "relative",
                display: "inline-flex",
                ["> span, > ".concat(t)]: {
                  "&:not(:last-child)": {
                    ["&, & > ".concat(t)]: {
                      borderStartEndRadius: 0,
                      borderEndEndRadius: 0,
                    },
                  },
                  "&:not(:first-child)": {
                    marginInlineStart: e.calc(r).mul(-1).equal(),
                    ["&, & > ".concat(t)]: {
                      borderStartStartRadius: 0,
                      borderEndStartRadius: 0,
                    },
                  },
                },
                [t]: {
                  position: "relative",
                  zIndex: 1,
                  "&:hover, &:focus, &:active": { zIndex: 2 },
                  "&[disabled]": { zIndex: 0 },
                },
                ["".concat(t, "-icon-only")]: { fontSize: n },
              },
              Fi("".concat(t, "-primary"), o),
              Fi("".concat(t, "-danger"), a),
            ],
          };
        };
      var Ui = ["b"],
        Vi = ["v"],
        Wi = function (e) {
          return Math.round(Number(e || 0));
        },
        $i = (function (e) {
          lr(n, e);
          var t = ur(n);
          function n(e) {
            return (
              X(this, n),
              t.call(
                this,
                (function (e) {
                  if (e instanceof Gt) return e;
                  if (e && "object" === r(e) && "h" in e && "b" in e) {
                    var t = e,
                      n = t.b;
                    return c(c({}, u(t, Ui)), {}, { v: n });
                  }
                  return "string" == typeof e && /hsb/.test(e)
                    ? e.replace(/hsb/, "hsv")
                    : e;
                })(e),
              )
            );
          }
          return (
            K(n, [
              {
                key: "toHsbString",
                value: function () {
                  var e = this.toHsb(),
                    t = Wi(100 * e.s),
                    n = Wi(100 * e.b),
                    r = Wi(e.h),
                    o = e.a,
                    a = "hsb(".concat(r, ", ").concat(t, "%, ").concat(n, "%)"),
                    i = "hsba("
                      .concat(r, ", ")
                      .concat(t, "%, ")
                      .concat(n, "%, ")
                      .concat(o.toFixed(0 === o ? 0 : 2), ")");
                  return 1 === o ? a : i;
                },
              },
              {
                key: "toHsb",
                value: function () {
                  var e = this.toHsv(),
                    t = e.v;
                  return c(c({}, u(e, Vi)), {}, { b: t, a: this.a });
                },
              },
            ]),
            n
          );
        })(Gt),
        Gi = function (e) {
          return e instanceof $i ? e : new $i(e);
        };
      Gi("#1677ff");
      let Xi = (function () {
        return K(
          function e(t) {
            var n;
            if ((X(this, e), (this.cleared = !1), t instanceof e))
              return (
                (this.metaColor = t.metaColor.clone()),
                (this.colors =
                  null === (n = t.colors) || void 0 === n
                    ? void 0
                    : n.map((t) => ({
                        color: new e(t.color),
                        percent: t.percent,
                      }))),
                void (this.cleared = t.cleared)
              );
            const r = Array.isArray(t);
            r && t.length
              ? ((this.colors = t.map((t) => {
                  let { color: n, percent: r } = t;
                  return { color: new e(n), percent: r };
                })),
                (this.metaColor = new $i(this.colors[0].color.metaColor)))
              : (this.metaColor = new $i(r ? "" : t)),
              (!t || (r && !this.colors)) &&
                ((this.metaColor = this.metaColor.setA(0)),
                (this.cleared = !0));
          },
          [
            {
              key: "toHsb",
              value: function () {
                return this.metaColor.toHsb();
              },
            },
            {
              key: "toHsbString",
              value: function () {
                return this.metaColor.toHsbString();
              },
            },
            {
              key: "toHex",
              value: function () {
                return (
                  (e = this.toHexString()),
                  (t = this.metaColor.a < 1),
                  e
                    ? ((e, t) =>
                        (null == e
                          ? void 0
                          : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) ||
                        "")(e, t)
                    : ""
                );
                var e, t;
              },
            },
            {
              key: "toHexString",
              value: function () {
                return this.metaColor.toHexString();
              },
            },
            {
              key: "toRgb",
              value: function () {
                return this.metaColor.toRgb();
              },
            },
            {
              key: "toRgbString",
              value: function () {
                return this.metaColor.toRgbString();
              },
            },
            {
              key: "isGradient",
              value: function () {
                return !!this.colors && !this.cleared;
              },
            },
            {
              key: "getColors",
              value: function () {
                return this.colors || [{ color: this, percent: 0 }];
              },
            },
            {
              key: "toCssString",
              value: function () {
                const { colors: e } = this;
                if (e) {
                  const t = e
                    .map((e) =>
                      ""
                        .concat(e.color.toRgbString(), " ")
                        .concat(e.percent, "%"),
                    )
                    .join(", ");
                  return "linear-gradient(90deg, ".concat(t, ")");
                }
                return this.metaColor.toRgbString();
              },
            },
            {
              key: "equals",
              value: function (e) {
                return (
                  !(!e || this.isGradient() !== e.isGradient()) &&
                  (this.isGradient()
                    ? this.colors.length === e.colors.length &&
                      this.colors.every((t, n) => {
                        const r = e.colors[n];
                        return (
                          t.percent === r.percent && t.color.equals(r.color)
                        );
                      })
                    : this.toHexString() === e.toHexString())
                );
              },
            },
          ],
        );
      })();
      const Qi = (e, t) => {
          const { r: n, g: r, b: o, a } = e.toRgb(),
            i = new $i(e.toRgbString()).onBackground(t).toHsv();
          return a <= 0.5 ? i.v > 0.5 : 0.299 * n + 0.587 * r + 0.114 * o > 192;
        },
        Ki = (e) => {
          const { paddingInline: t, onlyIconSize: n } = e;
          return Dr(e, {
            buttonPaddingHorizontal: t,
            buttonPaddingVertical: 0,
            buttonIconOnlyFontSize: n,
          });
        },
        qi = (e) => {
          var t, n, r, o, a, i;
          const l =
              null !== (t = e.contentFontSize) && void 0 !== t ? t : e.fontSize,
            c =
              null !== (n = e.contentFontSizeSM) && void 0 !== n
                ? n
                : e.fontSize,
            s =
              null !== (r = e.contentFontSizeLG) && void 0 !== r
                ? r
                : e.fontSizeLG,
            u = null !== (o = e.contentLineHeight) && void 0 !== o ? o : Mn(l),
            d =
              null !== (a = e.contentLineHeightSM) && void 0 !== a ? a : Mn(c),
            f =
              null !== (i = e.contentLineHeightLG) && void 0 !== i ? i : Mn(s),
            p = Qi(new Xi(e.colorBgSolid), "#fff") ? "#000" : "#fff";
          return {
            fontWeight: 400,
            defaultShadow: "0 "
              .concat(e.controlOutlineWidth, "px 0 ")
              .concat(e.controlTmpOutline),
            primaryShadow: "0 "
              .concat(e.controlOutlineWidth, "px 0 ")
              .concat(e.controlOutline),
            dangerShadow: "0 "
              .concat(e.controlOutlineWidth, "px 0 ")
              .concat(e.colorErrorOutline),
            primaryColor: e.colorTextLightSolid,
            dangerColor: e.colorTextLightSolid,
            borderColorDisabled: e.colorBorder,
            defaultGhostColor: e.colorBgContainer,
            ghostBg: "transparent",
            defaultGhostBorderColor: e.colorBgContainer,
            paddingInline: e.paddingContentHorizontal - e.lineWidth,
            paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
            paddingInlineSM: 8 - e.lineWidth,
            onlyIconSize: e.fontSizeLG,
            onlyIconSizeSM: e.fontSizeLG - 2,
            onlyIconSizeLG: e.fontSizeLG + 2,
            groupBorderColor: e.colorPrimaryHover,
            linkHoverBg: "transparent",
            textTextColor: e.colorText,
            textTextHoverColor: e.colorText,
            textTextActiveColor: e.colorText,
            textHoverBg: e.colorFillTertiary,
            defaultColor: e.colorText,
            defaultBg: e.colorBgContainer,
            defaultBorderColor: e.colorBorder,
            defaultBorderColorDisabled: e.colorBorder,
            defaultHoverBg: e.colorBgContainer,
            defaultHoverColor: e.colorPrimaryHover,
            defaultHoverBorderColor: e.colorPrimaryHover,
            defaultActiveBg: e.colorBgContainer,
            defaultActiveColor: e.colorPrimaryActive,
            defaultActiveBorderColor: e.colorPrimaryActive,
            solidTextColor: p,
            contentFontSize: l,
            contentFontSizeSM: c,
            contentFontSizeLG: s,
            contentLineHeight: u,
            contentLineHeightSM: d,
            contentLineHeightLG: f,
            paddingBlock: Math.max(
              (e.controlHeight - l * u) / 2 - e.lineWidth,
              0,
            ),
            paddingBlockSM: Math.max(
              (e.controlHeightSM - c * d) / 2 - e.lineWidth,
              0,
            ),
            paddingBlockLG: Math.max(
              (e.controlHeightLG - s * f) / 2 - e.lineWidth,
              0,
            ),
          };
        },
        Yi = (e) => {
          const {
            componentCls: t,
            iconCls: n,
            fontWeight: r,
            opacityLoading: o,
            motionDurationSlow: a,
            motionEaseInOut: i,
            marginXS: l,
            calc: c,
          } = e;
          return {
            [t]: {
              outline: "none",
              position: "relative",
              display: "inline-flex",
              gap: e.marginXS,
              alignItems: "center",
              justifyContent: "center",
              fontWeight: r,
              whiteSpace: "nowrap",
              textAlign: "center",
              backgroundImage: "none",
              background: "transparent",
              border: ""
                .concat(ve(e.lineWidth), " ")
                .concat(e.lineType, " transparent"),
              cursor: "pointer",
              transition: "all "
                .concat(e.motionDurationMid, " ")
                .concat(e.motionEaseInOut),
              userSelect: "none",
              touchAction: "manipulation",
              color: e.colorText,
              "&:disabled > *": { pointerEvents: "none" },
              ["".concat(t, "-icon > svg")]: {
                display: "inline-flex",
                alignItems: "center",
                color: "inherit",
                fontStyle: "normal",
                lineHeight: 0,
                textAlign: "center",
                textTransform: "none",
                verticalAlign: "-0.125em",
                textRendering: "optimizeLegibility",
                "-webkit-font-smoothing": "antialiased",
                "-moz-osx-font-smoothing": "grayscale",
                "> *": { lineHeight: 1 },
                svg: { display: "inline-block" },
              },
              "> a": { color: "currentColor" },
              "&:not(:disabled)": to(e),
              ["&".concat(t, "-two-chinese-chars::first-letter")]: {
                letterSpacing: "0.34em",
              },
              ["&".concat(t, "-two-chinese-chars > *:not(").concat(n, ")")]: {
                marginInlineEnd: "-0.34em",
                letterSpacing: "0.34em",
              },
              ["&".concat(t, "-icon-only")]: {
                paddingInline: 0,
                ["&".concat(t, "-compact-item")]: { flex: "none" },
                ["&".concat(t, "-round")]: { width: "auto" },
              },
              ["&".concat(t, "-loading")]: { opacity: o, cursor: "default" },
              ["".concat(t, "-loading-icon")]: {
                transition: ["width", "opacity", "margin"]
                  .map((e) => "".concat(e, " ").concat(a, " ").concat(i))
                  .join(","),
              },
              ["&:not(".concat(t, "-icon-end)")]: {
                ["".concat(t, "-loading-icon-motion")]: {
                  "&-appear-start, &-enter-start": {
                    marginInlineEnd: c(l).mul(-1).equal(),
                  },
                  "&-appear-active, &-enter-active": { marginInlineEnd: 0 },
                  "&-leave-start": { marginInlineEnd: 0 },
                  "&-leave-active": { marginInlineEnd: c(l).mul(-1).equal() },
                },
              },
              "&-icon-end": {
                flexDirection: "row-reverse",
                ["".concat(t, "-loading-icon-motion")]: {
                  "&-appear-start, &-enter-start": {
                    marginInlineStart: c(l).mul(-1).equal(),
                  },
                  "&-appear-active, &-enter-active": { marginInlineStart: 0 },
                  "&-leave-start": { marginInlineStart: 0 },
                  "&-leave-active": { marginInlineStart: c(l).mul(-1).equal() },
                },
              },
            },
          };
        },
        Zi = (e, t, n) => ({
          ["&:not(:disabled):not(".concat(e, "-disabled)")]: {
            "&:hover": t,
            "&:active": n,
          },
        }),
        Ji = (e) => ({
          minWidth: e.controlHeight,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          borderRadius: "50%",
        }),
        el = (e) => ({
          borderRadius: e.controlHeight,
          paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
          paddingInlineEnd: e.calc(e.controlHeight).div(2).equal(),
        }),
        tl = (e) => ({
          cursor: "not-allowed",
          borderColor: e.borderColorDisabled,
          color: e.colorTextDisabled,
          background: e.colorBgContainerDisabled,
          boxShadow: "none",
        }),
        nl = (e, t, n, r, o, a, i, l) => ({
          ["&".concat(e, "-background-ghost")]: Object.assign(
            Object.assign(
              {
                color: n || void 0,
                background: t,
                borderColor: r || void 0,
                boxShadow: "none",
              },
              Zi(
                e,
                Object.assign({ background: t }, i),
                Object.assign({ background: t }, l),
              ),
            ),
            {
              "&:disabled": {
                cursor: "not-allowed",
                color: o || void 0,
                borderColor: a || void 0,
              },
            },
          ),
        }),
        rl = (e) => ({
          ["&:disabled, &".concat(e.componentCls, "-disabled")]: Object.assign(
            {},
            tl(e),
          ),
        }),
        ol = (e) => ({
          ["&:disabled, &".concat(e.componentCls, "-disabled")]: {
            cursor: "not-allowed",
            color: e.colorTextDisabled,
          },
        }),
        al = (e, t, n, r) => {
          const o = r && ["link", "text"].includes(r) ? ol : rl;
          return Object.assign(
            Object.assign({}, o(e)),
            Zi(e.componentCls, t, n),
          );
        },
        il = (e, t, n, r, o) => ({
          ["&".concat(e.componentCls, "-variant-solid")]: Object.assign(
            { color: t, background: n },
            al(e, r, o),
          ),
        }),
        ll = (e, t, n, r, o) => ({
          ["&"
            .concat(e.componentCls, "-variant-outlined, &")
            .concat(e.componentCls, "-variant-dashed")]: Object.assign(
            { borderColor: t, background: n },
            al(e, r, o),
          ),
        }),
        cl = (e) => ({
          ["&".concat(e.componentCls, "-variant-dashed")]: {
            borderStyle: "dashed",
          },
        }),
        sl = (e, t, n, r) => ({
          ["&".concat(e.componentCls, "-variant-filled")]: Object.assign(
            { boxShadow: "none", background: t },
            al(e, n, r),
          ),
        }),
        ul = (e, t, n, r, o) => ({
          ["&".concat(e.componentCls, "-variant-").concat(n)]: Object.assign(
            { color: t, boxShadow: "none" },
            al(e, r, o, n),
          ),
        }),
        dl = (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    { color: e.defaultColor, boxShadow: e.defaultShadow },
                    il(
                      e,
                      e.solidTextColor,
                      e.colorBgSolid,
                      {
                        color: e.solidTextColor,
                        background: e.colorBgSolidHover,
                      },
                      {
                        color: e.solidTextColor,
                        background: e.colorBgSolidActive,
                      },
                    ),
                  ),
                  cl(e),
                ),
                sl(
                  e,
                  e.colorFillTertiary,
                  { background: e.colorFillSecondary },
                  { background: e.colorFill },
                ),
              ),
              ul(
                e,
                e.textTextColor,
                "link",
                { color: e.colorLinkHover, background: e.linkHoverBg },
                { color: e.colorLinkActive },
              ),
            ),
            nl(
              e.componentCls,
              e.ghostBg,
              e.defaultGhostColor,
              e.defaultGhostBorderColor,
              e.colorTextDisabled,
              e.colorBorder,
            ),
          ),
        fl = (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    { color: e.colorPrimary, boxShadow: e.primaryShadow },
                    ll(
                      e,
                      e.colorPrimary,
                      e.colorBgContainer,
                      {
                        color: e.colorPrimaryTextHover,
                        borderColor: e.colorPrimaryHover,
                        background: e.colorBgContainer,
                      },
                      {
                        color: e.colorPrimaryTextActive,
                        borderColor: e.colorPrimaryActive,
                        background: e.colorBgContainer,
                      },
                    ),
                  ),
                  cl(e),
                ),
                sl(
                  e,
                  e.colorPrimaryBg,
                  { background: e.colorPrimaryBgHover },
                  { background: e.colorPrimaryBorder },
                ),
              ),
              ul(
                e,
                e.colorLink,
                "text",
                {
                  color: e.colorPrimaryTextHover,
                  background: e.colorPrimaryBg,
                },
                {
                  color: e.colorPrimaryTextActive,
                  background: e.colorPrimaryBorder,
                },
              ),
            ),
            nl(
              e.componentCls,
              e.ghostBg,
              e.colorPrimary,
              e.colorPrimary,
              e.colorTextDisabled,
              e.colorBorder,
              { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
              {
                color: e.colorPrimaryActive,
                borderColor: e.colorPrimaryActive,
              },
            ),
          ),
        pl = (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        { color: e.colorError, boxShadow: e.dangerShadow },
                        il(
                          e,
                          e.dangerColor,
                          e.colorError,
                          { background: e.colorErrorHover },
                          { background: e.colorErrorActive },
                        ),
                      ),
                      ll(
                        e,
                        e.colorError,
                        e.colorBgContainer,
                        {
                          color: e.colorErrorHover,
                          borderColor: e.colorErrorBorderHover,
                        },
                        {
                          color: e.colorErrorActive,
                          borderColor: e.colorErrorActive,
                        },
                      ),
                    ),
                    cl(e),
                  ),
                  sl(
                    e,
                    e.colorErrorBg,
                    { background: e.colorErrorBgFilledHover },
                    { background: e.colorErrorBgActive },
                  ),
                ),
                ul(
                  e,
                  e.colorError,
                  "text",
                  { color: e.colorErrorHover, background: e.colorErrorBg },
                  {
                    color: e.colorErrorHover,
                    background: e.colorErrorBgActive,
                  },
                ),
              ),
              ul(
                e,
                e.colorError,
                "link",
                { color: e.colorErrorHover },
                { color: e.colorErrorActive },
              ),
            ),
            nl(
              e.componentCls,
              e.ghostBg,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder,
              { color: e.colorErrorHover, borderColor: e.colorErrorHover },
              { color: e.colorErrorActive, borderColor: e.colorErrorActive },
            ),
          ),
        hl = (e) => {
          const { componentCls: t } = e;
          return Object.assign(
            {
              ["".concat(t, "-color-default")]: dl(e),
              ["".concat(t, "-color-primary")]: fl(e),
              ["".concat(t, "-color-dangerous")]: pl(e),
            },
            ((e) => {
              const { componentCls: t } = e;
              return si.reduce((n, r) => {
                const o = e["".concat(r, "6")],
                  a = e["".concat(r, "1")],
                  i = e["".concat(r, "5")],
                  l = e["".concat(r, "2")],
                  c = e["".concat(r, "3")],
                  s = e["".concat(r, "7")],
                  u = "0 "
                    .concat(e.controlOutlineWidth, " 0 ")
                    .concat(e["".concat(r, "1")]);
                return Object.assign(Object.assign({}, n), {
                  ["&".concat(t, "-color-").concat(r)]: Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              { color: o, boxShadow: u },
                              il(
                                e,
                                e.colorTextLightSolid,
                                o,
                                { background: i },
                                { background: s },
                              ),
                            ),
                            ll(
                              e,
                              o,
                              e.colorBgContainer,
                              {
                                color: i,
                                borderColor: i,
                                background: e.colorBgContainer,
                              },
                              {
                                color: s,
                                borderColor: s,
                                background: e.colorBgContainer,
                              },
                            ),
                          ),
                          cl(e),
                        ),
                        sl(e, a, { background: l }, { background: c }),
                      ),
                      ul(e, o, "link", { color: i }, { color: s }),
                    ),
                    ul(
                      e,
                      o,
                      "text",
                      { color: i, background: a },
                      { color: s, background: c },
                    ),
                  ),
                });
              }, {});
            })(e),
          );
        },
        ml = (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  ll(
                    e,
                    e.defaultBorderColor,
                    e.defaultBg,
                    {
                      color: e.defaultHoverColor,
                      borderColor: e.defaultHoverBorderColor,
                      background: e.defaultHoverBg,
                    },
                    {
                      color: e.defaultActiveColor,
                      borderColor: e.defaultActiveBorderColor,
                      background: e.defaultActiveBg,
                    },
                  ),
                ),
                ul(
                  e,
                  e.textTextColor,
                  "text",
                  { color: e.textTextHoverColor, background: e.textHoverBg },
                  {
                    color: e.textTextActiveColor,
                    background: e.colorBgTextActive,
                  },
                ),
              ),
              il(
                e,
                e.primaryColor,
                e.colorPrimary,
                { background: e.colorPrimaryHover, color: e.primaryColor },
                { background: e.colorPrimaryActive, color: e.primaryColor },
              ),
            ),
            ul(
              e,
              e.colorLink,
              "link",
              { color: e.colorLinkHover, background: e.linkHoverBg },
              { color: e.colorLinkActive },
            ),
          ),
        gl = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const {
            componentCls: n,
            controlHeight: r,
            fontSize: o,
            borderRadius: a,
            buttonPaddingHorizontal: i,
            iconCls: l,
            buttonPaddingVertical: c,
            buttonIconOnlyFontSize: s,
          } = e;
          return [
            {
              [t]: {
                fontSize: o,
                height: r,
                padding: "".concat(ve(c), " ").concat(ve(i)),
                borderRadius: a,
                ["&".concat(n, "-icon-only")]: {
                  width: r,
                  [l]: { fontSize: s, verticalAlign: "calc(-0.125em - 1px)" },
                },
              },
            },
            { ["".concat(n).concat(n, "-circle").concat(t)]: Ji(e) },
            { ["".concat(n).concat(n, "-round").concat(t)]: el(e) },
          ];
        },
        vl = (e) => {
          const t = Dr(e, { fontSize: e.contentFontSize });
          return gl(t, e.componentCls);
        },
        yl = (e) => {
          const t = Dr(e, {
            controlHeight: e.controlHeightSM,
            fontSize: e.contentFontSizeSM,
            padding: e.paddingXS,
            buttonPaddingHorizontal: e.paddingInlineSM,
            buttonPaddingVertical: 0,
            borderRadius: e.borderRadiusSM,
            buttonIconOnlyFontSize: e.onlyIconSizeSM,
          });
          return gl(t, "".concat(e.componentCls, "-sm"));
        },
        bl = (e) => {
          const t = Dr(e, {
            controlHeight: e.controlHeightLG,
            fontSize: e.contentFontSizeLG,
            buttonPaddingHorizontal: e.paddingInlineLG,
            buttonPaddingVertical: 0,
            borderRadius: e.borderRadiusLG,
            buttonIconOnlyFontSize: e.onlyIconSizeLG,
          });
          return gl(t, "".concat(e.componentCls, "-lg"));
        },
        xl = (e) => {
          const { componentCls: t } = e;
          return { [t]: { ["&".concat(t, "-block")]: { width: "100%" } } };
        },
        Sl = ro(
          "Button",
          (e) => {
            const t = Ki(e);
            return [Yi(t), vl(t), yl(t), bl(t), xl(t), hl(t), ml(t), Di(t)];
          },
          qi,
          {
            unitless: {
              fontWeight: !0,
              contentLineHeight: !0,
              contentLineHeightSM: !0,
              contentLineHeightLG: !0,
            },
          },
        );
      function kl(e, t, n) {
        const { focusElCls: r, focus: o, borderElCls: a } = n,
          i = a ? "> *" : "",
          l = ["hover", o ? "focus" : null, "active"]
            .filter(Boolean)
            .map((e) => "&:".concat(e, " ").concat(i))
            .join(",");
        return {
          ["&-item:not(".concat(t, "-last-item)")]: {
            marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
          },
          "&-item": Object.assign(
            Object.assign(
              { [l]: { zIndex: 2 } },
              r ? { ["&".concat(r)]: { zIndex: 2 } } : {},
            ),
            { ["&[disabled] ".concat(i)]: { zIndex: 0 } },
          ),
        };
      }
      function wl(e, t, n) {
        const { borderElCls: r } = n,
          o = r ? "> ".concat(r) : "";
        return {
          ["&-item:not("
            .concat(t, "-first-item):not(")
            .concat(t, "-last-item) ")
            .concat(o)]: { borderRadius: 0 },
          ["&-item:not(".concat(t, "-last-item)").concat(t, "-first-item")]: {
            ["& "
              .concat(o, ", &")
              .concat(e, "-sm ")
              .concat(o, ", &")
              .concat(e, "-lg ")
              .concat(o)]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
          },
          ["&-item:not(".concat(t, "-first-item)").concat(t, "-last-item")]: {
            ["& "
              .concat(o, ", &")
              .concat(e, "-sm ")
              .concat(o, ", &")
              .concat(e, "-lg ")
              .concat(o)]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0,
            },
          },
        };
      }
      function Cl(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { focus: !0 };
        const { componentCls: n } = e,
          r = "".concat(n, "-compact");
        return {
          [r]: Object.assign(Object.assign({}, kl(e, r, t)), wl(n, r, t)),
        };
      }
      function El(e, t) {
        return {
          ["&-item:not(".concat(t, "-last-item)")]: {
            marginBottom: e.calc(e.lineWidth).mul(-1).equal(),
          },
          "&-item": {
            "&:hover,&:focus,&:active": { zIndex: 2 },
            "&[disabled]": { zIndex: 0 },
          },
        };
      }
      function _l(e) {
        const t = "".concat(e.componentCls, "-compact-vertical");
        return {
          [t]: Object.assign(
            Object.assign({}, El(e, t)),
            ((n = e.componentCls),
            (r = t),
            {
              ["&-item:not("
                .concat(r, "-first-item):not(")
                .concat(r, "-last-item)")]: { borderRadius: 0 },
              ["&-item".concat(r, "-first-item:not(").concat(r, "-last-item)")]:
                {
                  ["&, &".concat(n, "-sm, &").concat(n, "-lg")]: {
                    borderEndEndRadius: 0,
                    borderEndStartRadius: 0,
                  },
                },
              ["&-item".concat(r, "-last-item:not(").concat(r, "-first-item)")]:
                {
                  ["&, &".concat(n, "-sm, &").concat(n, "-lg")]: {
                    borderStartStartRadius: 0,
                    borderStartEndRadius: 0,
                  },
                },
            }),
          ),
        };
        var n, r;
      }
      const Ol = (e) => {
          const {
              componentCls: t,
              colorPrimaryHover: n,
              lineWidth: r,
              calc: o,
            } = e,
            a = o(r).mul(-1).equal(),
            i = (e) => ({
              [""
                .concat(t, "-compact")
                .concat(e ? "-vertical" : "", "-item")
                .concat(t, "-primary:not([disabled])")]: {
                "& + &::before": {
                  position: "absolute",
                  top: e ? a : 0,
                  insetInlineStart: e ? 0 : a,
                  backgroundColor: n,
                  content: '""',
                  width: e ? "100%" : r,
                  height: e ? r : "100%",
                },
              },
            });
          return Object.assign(Object.assign({}, i()), i(!0));
        },
        Pl = ao(
          ["Button", "compact"],
          (e) => {
            const t = Ki(e);
            return [Cl(t), _l(t), Ol(t)];
          },
          qi,
        );
      var jl = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      };
      const Tl = {
          default: ["default", "outlined"],
          primary: ["primary", "solid"],
          dashed: ["default", "dashed"],
          link: ["primary", "link"],
          text: ["default", "text"],
        },
        Nl = e.forwardRef((t, n) => {
          var r, o, a, i;
          const {
              loading: l = !1,
              prefixCls: c,
              color: s,
              variant: u,
              type: d,
              danger: f = !1,
              shape: p = "default",
              size: m,
              styles: g,
              disabled: v,
              className: y,
              rootClassName: b,
              children: x,
              icon: S,
              iconPosition: k = "start",
              ghost: w = !1,
              block: C = !1,
              htmlType: E = "button",
              classNames: _,
              style: O = {},
              autoInsertSpace: P,
              autoFocus: j,
            } = t,
            T = jl(t, [
              "loading",
              "prefixCls",
              "color",
              "variant",
              "type",
              "danger",
              "shape",
              "size",
              "styles",
              "disabled",
              "className",
              "rootClassName",
              "children",
              "icon",
              "iconPosition",
              "ghost",
              "block",
              "htmlType",
              "classNames",
              "style",
              "autoInsertSpace",
              "autoFocus",
            ]),
            N = d || "default",
            [M, L] = (0, e.useMemo)(() => {
              if (s && u) return [s, u];
              const e = Tl[N] || [];
              return f ? ["danger", e[1]] : e;
            }, [d, s, u, f]),
            z = "danger" === M ? "dangerous" : M,
            {
              getPrefixCls: R,
              direction: I,
              button: A,
            } = (0, e.useContext)(nr),
            B =
              null ===
                (r = null != P ? P : null == A ? void 0 : A.autoInsertSpace) ||
              void 0 === r ||
              r,
            F = R("btn", c),
            [D, U, V] = Sl(F),
            W = (0, e.useContext)(Ja),
            $ = null != v ? v : W,
            G = (0, e.useContext)(li),
            X = (0, e.useMemo)(
              () =>
                (function (e) {
                  if ("object" == typeof e && e) {
                    let t = null == e ? void 0 : e.delay;
                    return (
                      (t = Number.isNaN(t) || "number" != typeof t ? 0 : t),
                      { loading: t <= 0, delay: t }
                    );
                  }
                  return { loading: !!e, delay: 0 };
                })(l),
              [l],
            ),
            [Q, K] = (0, e.useState)(X.loading),
            [q, Y] = (0, e.useState)(!1),
            Z = (0, e.useRef)(null),
            J = (function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return H(
                function () {
                  return Pr.apply(void 0, t);
                },
                t,
                function (e, t) {
                  return (
                    e.length !== t.length ||
                    e.every(function (e, n) {
                      return e !== t[n];
                    })
                  );
                },
              );
            })(n, Z),
            ee = 1 === e.Children.count(x) && !S && !pi(L),
            te = (0, e.useRef)(!0);
          e.useEffect(
            () => (
              (te.current = !1),
              () => {
                te.current = !0;
              }
            ),
            [],
          ),
            (0, e.useEffect)(() => {
              let e = null;
              return (
                X.delay > 0
                  ? (e = setTimeout(() => {
                      (e = null), K(!0);
                    }, X.delay))
                  : K(X.loading),
                function () {
                  e && (clearTimeout(e), (e = null));
                }
              );
            }, [X]),
            (0, e.useEffect)(() => {
              if (!Z.current || !B) return;
              const e = Z.current.textContent || "";
              ee && di(e) ? q || Y(!0) : q && Y(!1);
            }),
            (0, e.useEffect)(() => {
              j && Z.current && Z.current.focus();
            }, []);
          const ne = e.useCallback(
            (e) => {
              var n;
              Q || $
                ? e.preventDefault()
                : null === (n = t.onClick) || void 0 === n || n.call(t, e);
            },
            [t.onClick, Q, $],
          );
          const { compactSize: re, compactItemClassnames: oe } = ((t, n) => {
              const r = e.useContext(ai),
                o = e.useMemo(() => {
                  if (!r) return "";
                  const {
                      compactDirection: e,
                      isFirstItem: o,
                      isLastItem: a,
                    } = r,
                    i = "vertical" === e ? "-vertical-" : "-";
                  return h()("".concat(t, "-compact").concat(i, "item"), {
                    ["".concat(t, "-compact").concat(i, "first-item")]: o,
                    ["".concat(t, "-compact").concat(i, "last-item")]: a,
                    ["".concat(t, "-compact").concat(i, "item-rtl")]:
                      "rtl" === n,
                  });
                }, [t, n, r]);
              return {
                compactSize: null == r ? void 0 : r.compactSize,
                compactDirection: null == r ? void 0 : r.compactDirection,
                compactItemClassnames: o,
              };
            })(F, I),
            ae = { large: "lg", small: "sm", middle: void 0 },
            ie = ri((e) => {
              var t, n;
              return null !==
                (n =
                  null !== (t = null != m ? m : re) && void 0 !== t ? t : G) &&
                void 0 !== n
                ? n
                : e;
            }),
            le = ie && null !== (o = ae[ie]) && void 0 !== o ? o : "",
            ce = Q ? "loading" : S,
            se = wo(T, ["navigate"]),
            ue = h()(
              F,
              U,
              V,
              {
                ["".concat(F, "-").concat(p)]: "default" !== p && p,
                ["".concat(F, "-").concat(N)]: N,
                ["".concat(F, "-dangerous")]: f,
                ["".concat(F, "-color-").concat(z)]: z,
                ["".concat(F, "-variant-").concat(L)]: L,
                ["".concat(F, "-").concat(le)]: le,
                ["".concat(F, "-icon-only")]: !x && 0 !== x && !!ce,
                ["".concat(F, "-background-ghost")]: w && !pi(L),
                ["".concat(F, "-loading")]: Q,
                ["".concat(F, "-two-chinese-chars")]: q && B && !Q,
                ["".concat(F, "-block")]: C,
                ["".concat(F, "-rtl")]: "rtl" === I,
                ["".concat(F, "-icon-end")]: "end" === k,
              },
              oe,
              y,
              b,
              null == A ? void 0 : A.className,
            ),
            de = Object.assign(
              Object.assign({}, null == A ? void 0 : A.style),
              O,
            ),
            fe = h()(
              null == _ ? void 0 : _.icon,
              null === (a = null == A ? void 0 : A.classNames) || void 0 === a
                ? void 0
                : a.icon,
            ),
            pe = Object.assign(
              Object.assign({}, (null == g ? void 0 : g.icon) || {}),
              (null === (i = null == A ? void 0 : A.styles) || void 0 === i
                ? void 0
                : i.icon) || {},
            ),
            he =
              S && !Q
                ? e.createElement(
                    gi,
                    { prefixCls: F, className: fe, style: pe },
                    S,
                  )
                : "object" == typeof l && l.icon
                  ? e.createElement(
                      gi,
                      { prefixCls: F, className: fe, style: pe },
                      l.icon,
                    )
                  : e.createElement(Bi, {
                      existIcon: !!S,
                      prefixCls: F,
                      loading: Q,
                      mount: te.current,
                    }),
            me =
              x || 0 === x
                ? (function (t, n) {
                    let r = !1;
                    const o = [];
                    return (
                      e.Children.forEach(t, (e) => {
                        const t = typeof e,
                          n = "string" === t || "number" === t;
                        if (r && n) {
                          const t = o.length - 1,
                            n = o[t];
                          o[t] = "".concat(n).concat(e);
                        } else o.push(e);
                        r = n;
                      }),
                      e.Children.map(o, (e) => hi(e, n))
                    );
                  })(x, ee && B)
                : null;
          if (void 0 !== se.href)
            return D(
              e.createElement(
                "a",
                Object.assign({}, se, {
                  className: h()(ue, { ["".concat(F, "-disabled")]: $ }),
                  href: $ ? void 0 : se.href,
                  style: de,
                  onClick: ne,
                  ref: J,
                  tabIndex: $ ? -1 : 0,
                }),
                he,
                me,
              ),
            );
          let ge = e.createElement(
            "button",
            Object.assign({}, T, {
              type: E,
              className: ue,
              style: de,
              onClick: ne,
              disabled: $,
              ref: J,
            }),
            he,
            me,
            oe && e.createElement(Pl, { prefixCls: F }),
          );
          return (
            pi(L) ||
              (ge = e.createElement(
                qa,
                { component: "Button", disabled: Q },
                ge,
              )),
            D(ge)
          );
        }),
        Ml = Nl;
      (Ml.Group = ci), (Ml.__ANT_BUTTON = !0);
      const Ll = Ml,
        zl = ["className"],
        Rl = (e) => {
          let { className: t } = e,
            n = u(e, zl);
          const r = h()(t, ko);
          return (0, m.jsx)(Ll, c({ className: r }, n));
        },
        Il = ["children"],
        Al = (e) => {
          let { setIsMenuVisible: t } = e;
          return (0, m.jsx)("header", {
            className: d,
            children: (0, m.jsxs)(v, {
              tinyVR: !0,
              mediumHR: !0,
              render: (e) => {
                let { children: t } = e,
                  n = u(e, Il);
                return (0, m.jsx)(
                  go,
                  c(
                    c({ align: "middle", justify: "space-between" }, n),
                    {},
                    { children: t },
                  ),
                );
              },
              children: [
                (0, m.jsxs)(go, {
                  gap: "small",
                  children: [
                    (0, m.jsx)(Rl, {
                      type: "text",
                      htmlType: "button",
                      icon: (0, m.jsx)(So, {}),
                      onClick: () => t(!0),
                    }),
                    (0, m.jsx)(go, {
                      column: !0,
                      align: "middle",
                      justify: "center",
                      children: (0, m.jsx)("span", { children: "Name" }),
                    }),
                  ],
                }),
                (0, m.jsx)(v, {
                  mediumHR: !0,
                  children: (0, m.jsxs)(go, {
                    gap: "medium",
                    children: [
                      (0, m.jsx)("span", { children: "Format" }),
                      (0, m.jsx)("span", { children: "Size" }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        Hl = "styles_menuContainer__iMsU2",
        Bl = "styles_menu__WfuEe",
        Fl = "styles_background__VrCAR",
        Dl = "styles_menuContainer_visible__D4Yle",
        Ul = "styles_menuContainer_hidden__MTexx",
        Vl = "styles_menuContainer_hiddenDone__iSpj1";
      var Wl = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      };
      function $l(e) {
        return "number" == typeof e
          ? "".concat(e, " ").concat(e, " auto")
          : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e)
            ? "0 0 ".concat(e)
            : e;
      }
      const Gl = ["xs", "sm", "md", "lg", "xl", "xxl"],
        Xl = e.forwardRef((t, n) => {
          const { getPrefixCls: r, direction: o } = e.useContext(nr),
            { gutter: a, wrap: i } = e.useContext(or),
            {
              prefixCls: l,
              span: c,
              order: s,
              offset: u,
              push: d,
              pull: f,
              className: p,
              children: m,
              flex: g,
              style: v,
            } = t,
            y = Wl(t, [
              "prefixCls",
              "span",
              "order",
              "offset",
              "push",
              "pull",
              "className",
              "children",
              "flex",
              "style",
            ]),
            b = r("col", l),
            [x, S, k] = so(b),
            w = {};
          let C = {};
          Gl.forEach((e) => {
            let n = {};
            const r = t[e];
            "number" == typeof r
              ? (n.span = r)
              : "object" == typeof r && (n = r || {}),
              delete y[e],
              (C = Object.assign(Object.assign({}, C), {
                ["".concat(b, "-").concat(e, "-").concat(n.span)]:
                  void 0 !== n.span,
                ["".concat(b, "-").concat(e, "-order-").concat(n.order)]:
                  n.order || 0 === n.order,
                ["".concat(b, "-").concat(e, "-offset-").concat(n.offset)]:
                  n.offset || 0 === n.offset,
                ["".concat(b, "-").concat(e, "-push-").concat(n.push)]:
                  n.push || 0 === n.push,
                ["".concat(b, "-").concat(e, "-pull-").concat(n.pull)]:
                  n.pull || 0 === n.pull,
                ["".concat(b, "-rtl")]: "rtl" === o,
              })),
              n.flex &&
                ((C["".concat(b, "-").concat(e, "-flex")] = !0),
                (w["--".concat(b, "-").concat(e, "-flex")] = $l(n.flex)));
          });
          const E = h()(
              b,
              {
                ["".concat(b, "-").concat(c)]: void 0 !== c,
                ["".concat(b, "-order-").concat(s)]: s,
                ["".concat(b, "-offset-").concat(u)]: u,
                ["".concat(b, "-push-").concat(d)]: d,
                ["".concat(b, "-pull-").concat(f)]: f,
              },
              p,
              C,
              S,
              k,
            ),
            _ = {};
          if (a && a[0] > 0) {
            const e = a[0] / 2;
            (_.paddingLeft = e), (_.paddingRight = e);
          }
          return (
            g && ((_.flex = $l(g)), !1 !== i || _.minWidth || (_.minWidth = 0)),
            x(
              e.createElement(
                "div",
                Object.assign({}, y, {
                  style: Object.assign(
                    Object.assign(Object.assign({}, _), v),
                    w,
                  ),
                  className: E,
                  ref: n,
                }),
                m,
              ),
            )
          );
        });
      const Ql = Xl;
      function Kl(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          ir(e, t);
      }
      function ql(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      const Yl = !1,
        Zl = e.createContext(null);
      var Jl = function (e) {
          return e.scrollTop;
        },
        ec = "unmounted",
        tc = "exited",
        nc = "entering",
        rc = "entered",
        oc = "exiting",
        ac = (function (t) {
          function n(e, n) {
            var r;
            r = t.call(this, e, n) || this;
            var o,
              a = n && !n.isMounting ? e.enter : e.appear;
            return (
              (r.appearStatus = null),
              e.in
                ? a
                  ? ((o = tc), (r.appearStatus = nc))
                  : (o = rc)
                : (o = e.unmountOnExit || e.mountOnEnter ? ec : tc),
              (r.state = { status: o }),
              (r.nextCallback = null),
              r
            );
          }
          Kl(n, t),
            (n.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === ec ? { status: tc } : null;
            });
          var r = n.prototype;
          return (
            (r.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (r.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== nc && n !== rc && (t = nc)
                  : (n !== nc && n !== rc) || (t = oc);
              }
              this.updateStatus(!1, t);
            }),
            (r.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (r.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" != typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (r.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === nc)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : Ro.findDOMNode(this);
                    n && Jl(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === tc &&
                  this.setState({ status: ec });
            }),
            (r.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                o = this.props.nodeRef ? [r] : [Ro.findDOMNode(this), r],
                a = o[0],
                i = o[1],
                l = this.getTimeouts(),
                c = r ? l.appear : l.enter;
              (!e && !n) || Yl
                ? this.safeSetState({ status: rc }, function () {
                    t.props.onEntered(a);
                  })
                : (this.props.onEnter(a, i),
                  this.safeSetState({ status: nc }, function () {
                    t.props.onEntering(a, i),
                      t.onTransitionEnd(c, function () {
                        t.safeSetState({ status: rc }, function () {
                          t.props.onEntered(a, i);
                        });
                      });
                  }));
            }),
            (r.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : Ro.findDOMNode(this);
              t && !Yl
                ? (this.props.onExit(r),
                  this.safeSetState({ status: oc }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: tc }, function () {
                          e.props.onExited(r);
                        });
                      });
                  }))
                : this.safeSetState({ status: tc }, function () {
                    e.props.onExited(r);
                  });
            }),
            (r.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (r.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (r.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (r.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : Ro.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (n && !r) {
                if (this.props.addEndListener) {
                  var o = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    a = o[0],
                    i = o[1];
                  this.props.addEndListener(a, i);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (r.render = function () {
              var t = this.state.status;
              if (t === ec) return null;
              var n = this.props,
                r = n.children,
                o =
                  (n.in,
                  n.mountOnEnter,
                  n.unmountOnExit,
                  n.appear,
                  n.enter,
                  n.exit,
                  n.timeout,
                  n.addEndListener,
                  n.onEnter,
                  n.onEntering,
                  n.onEntered,
                  n.onExit,
                  n.onExiting,
                  n.onExited,
                  n.nodeRef,
                  s(n, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return e.createElement(
                Zl.Provider,
                { value: null },
                "function" == typeof r
                  ? r(t, o)
                  : e.cloneElement(e.Children.only(r), o),
              );
            }),
            n
          );
        })(e.Component);
      function ic() {}
      (ac.contextType = Zl),
        (ac.propTypes = {}),
        (ac.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: ic,
          onEntering: ic,
          onEntered: ic,
          onExit: ic,
          onExiting: ic,
          onExited: ic,
        }),
        (ac.UNMOUNTED = ec),
        (ac.EXITED = tc),
        (ac.ENTERING = nc),
        (ac.ENTERED = rc),
        (ac.EXITING = oc);
      const lc = ac;
      var cc = function (e, t) {
          return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
              return (
                (r = t),
                void ((n = e).classList
                  ? n.classList.remove(r)
                  : "string" == typeof n.className
                    ? (n.className = ql(n.className, r))
                    : n.setAttribute(
                        "class",
                        ql((n.className && n.className.baseVal) || "", r),
                      ))
              );
              var n, r;
            })
          );
        },
        sc = (function (t) {
          function n() {
            for (
              var e, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(r)) || this).appliedClasses =
                { appear: {}, enter: {}, exit: {} }),
              (e.onEnter = function (t, n) {
                var r = e.resolveArguments(t, n),
                  o = r[0],
                  a = r[1];
                e.removeClasses(o, "exit"),
                  e.addClass(o, a ? "appear" : "enter", "base"),
                  e.props.onEnter && e.props.onEnter(t, n);
              }),
              (e.onEntering = function (t, n) {
                var r = e.resolveArguments(t, n),
                  o = r[0],
                  a = r[1] ? "appear" : "enter";
                e.addClass(o, a, "active"),
                  e.props.onEntering && e.props.onEntering(t, n);
              }),
              (e.onEntered = function (t, n) {
                var r = e.resolveArguments(t, n),
                  o = r[0],
                  a = r[1] ? "appear" : "enter";
                e.removeClasses(o, a),
                  e.addClass(o, a, "done"),
                  e.props.onEntered && e.props.onEntered(t, n);
              }),
              (e.onExit = function (t) {
                var n = e.resolveArguments(t)[0];
                e.removeClasses(n, "appear"),
                  e.removeClasses(n, "enter"),
                  e.addClass(n, "exit", "base"),
                  e.props.onExit && e.props.onExit(t);
              }),
              (e.onExiting = function (t) {
                var n = e.resolveArguments(t)[0];
                e.addClass(n, "exit", "active"),
                  e.props.onExiting && e.props.onExiting(t);
              }),
              (e.onExited = function (t) {
                var n = e.resolveArguments(t)[0];
                e.removeClasses(n, "exit"),
                  e.addClass(n, "exit", "done"),
                  e.props.onExited && e.props.onExited(t);
              }),
              (e.resolveArguments = function (t, n) {
                return e.props.nodeRef ? [e.props.nodeRef.current, t] : [t, n];
              }),
              (e.getClassNames = function (t) {
                var n = e.props.classNames,
                  r = "string" == typeof n,
                  o = r ? "" + (r && n ? n + "-" : "") + t : n[t];
                return {
                  baseClassName: o,
                  activeClassName: r ? o + "-active" : n[t + "Active"],
                  doneClassName: r ? o + "-done" : n[t + "Done"],
                };
              }),
              e
            );
          }
          Kl(n, t);
          var r = n.prototype;
          return (
            (r.addClass = function (e, t, n) {
              var r = this.getClassNames(t)[n + "ClassName"],
                o = this.getClassNames("enter").doneClassName;
              "appear" === t && "done" === n && o && (r += " " + o),
                "active" === n && e && Jl(e),
                r &&
                  ((this.appliedClasses[t][n] = r),
                  (function (e, t) {
                    e &&
                      t &&
                      t.split(" ").forEach(function (t) {
                        return (
                          (r = t),
                          void ((n = e).classList
                            ? n.classList.add(r)
                            : (function (e, t) {
                                return e.classList
                                  ? !!t && e.classList.contains(t)
                                  : -1 !==
                                      (
                                        " " +
                                        (e.className.baseVal || e.className) +
                                        " "
                                      ).indexOf(" " + t + " ");
                              })(n, r) ||
                              ("string" == typeof n.className
                                ? (n.className = n.className + " " + r)
                                : n.setAttribute(
                                    "class",
                                    ((n.className && n.className.baseVal) ||
                                      "") +
                                      " " +
                                      r,
                                  )))
                        );
                        var n, r;
                      });
                  })(e, r));
            }),
            (r.removeClasses = function (e, t) {
              var n = this.appliedClasses[t],
                r = n.base,
                o = n.active,
                a = n.done;
              (this.appliedClasses[t] = {}),
                r && cc(e, r),
                o && cc(e, o),
                a && cc(e, a);
            }),
            (r.render = function () {
              var t = this.props,
                n = (t.classNames, s(t, ["classNames"]));
              return e.createElement(
                lc,
                Ae({}, n, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                }),
              );
            }),
            n
          );
        })(e.Component);
      (sc.defaultProps = { classNames: "" }), (sc.propTypes = {});
      const uc = sc,
        dc = (0, e.createContext)(void 0);
      function fc() {
        return (0, e.useContext)(dc);
      }
      const pc = (t) => {
        let { children: n } = t;
        const [r, o] = (0, e.useState)(!1);
        return (0, m.jsx)(dc.Provider, {
          value: {
            state: r,
            updateState: () => {
              o((e) => !e);
            },
          },
          children: n,
        });
      };
      let hc = (function (e) {
        return (
          (e.CurrentTab = "currentTab"),
          (e.Errors = "errors"),
          (e.VimeoToken = "vimeoToken"),
          (e.Domains = "domains"),
          e
        );
      })({});
      const mc = (e) => {
        chrome.storage.local.get([e], (t) => {
          var n;
          const r = null !== (n = t[e]) && void 0 !== n ? n : [];
          var o;
          ((e) => {
            chrome.action.setBadgeText({ text: e });
          })(
            r.length
              ? ((o = r.length), "".concat(+o > 99 ? "99+" : +o <= 0 ? "" : o))
              : "",
          );
        }),
          chrome.storage.local.set({ [hc.CurrentTab]: e });
      };
      const gc = () =>
          (0, m.jsx)(yo, {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: (0, m.jsx)("path", {
              d: "M3 6v18h18V6H3zm3 2h2v14H6V8zm5 0h2v14h-2V8zm5 0h2v14h-2V8zM9 0v1H2v3h20V1h-7V0z",
              className: xo,
              fillOpacity: ".941",
            }),
          }),
        vc = () =>
          (0, m.jsxs)(yo, {
            viewBox: "0 0 512 512",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, m.jsx)("path", {
                d: "M511.999 432c0 44.183-35.816 80-80 80H80c-44.183 0-80-35.817-80-80V80C0 35.817 35.817 0 80 0h351.999c44.184 0 80 35.817 80 80v352z",
                fill: "#3D5A98",
              }),
              (0, m.jsx)("path", {
                d: "M335.271 512V313.727h66.553l9.965-77.272h-76.518V187.12c0-22.372 6.211-37.618 38.295-37.618l40.917-.019v-69.11c-7.077-.94-31.366-3.044-59.624-3.044-58.994 0-99.383 36.01-99.383 102.141v56.985h-66.724v77.272h66.724V512h79.795z",
                fill: "#FFF",
              }),
            ],
          }),
        yc = () =>
          (0, m.jsx)(yo, {
            xmlns: "http://www.w3.org/2000/svg",
            width: "682.667",
            height: "682.667",
            viewBox: "0 0 512.000000 512.000000",
            children: (0, m.jsx)("path", {
              d: "M230.5 44.1c-31.8 4-65.4 16.4-91.5 33.6-53 35.1-87.3 90.7-95 154.3-1.3 10.9-1.3 37.1 0 48 7.7 63.5 42.1 119.4 94.9 154.2 62.2 41.1 143.3 46.3 210.6 13.4 22.3-11 38.8-22.8 57.1-41 18.2-18.3 30-34.8 41-57.1 28.7-58.8 28.7-128.1 0-187C415.7 97.1 353.1 52.9 280 44c-10-1.2-39.5-1.1-49.5.1zm51.5 66.7c13.2 4.4 23.7 10.8 33.5 20.6 18.2 18.1 26.2 38.1 25.2 63.1-.8 22-5.7 31.3-29.1 55.5-8.8 9.1-17.7 18.7-19.9 21.5-8.2 10.3-12.6 23-14.2 40.7l-.7 7.8H235v-10.4c0-11.8 1.8-21.7 5.7-31.4 5.4-13.7 9.9-19.7 30.6-40.9 16.4-16.8 20.3-21.3 22.7-26.6 6-12.8 6-24.6.1-37.3-7.6-16.1-26.3-26.2-43.8-23.5-20 3.1-33.5 17.2-36.8 38.3l-.6 3.8h-42.2l.6-8.3c.7-10.8 5.3-24.9 11.3-35.2 9.6-16.3 27.8-31.1 45.4-37 11.8-3.9 15.5-4.4 30.5-4.1 12.5.3 15 .7 23.5 3.4zM277 384v21h-42v-42h42v21z",
              fill: "#4CAF48",
            }),
          });
      const bc = {
        icon: {
          tag: "svg",
          attrs: { viewBox: "64 64 896 896", focusable: "false" },
          children: [
            {
              tag: "path",
              attrs: {
                d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z",
              },
            },
          ],
        },
        name: "star",
        theme: "filled",
      };
      var xc = function (t, n) {
        return e.createElement(Li, Ae({}, t, { ref: n, icon: bc }));
      };
      /**![star](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkwOC4xIDM1My4xbC0yNTMuOS0zNi45TDU0MC43IDg2LjFjLTMuMS02LjMtOC4yLTExLjQtMTQuNS0xNC41LTE1LjgtNy44LTM1LTEuMy00Mi45IDE0LjVMMzY5LjggMzE2LjJsLTI1My45IDM2LjljLTcgMS0xMy40IDQuMy0xOC4zIDkuM2EzMi4wNSAzMi4wNSAwIDAwLjYgNDUuM2wxODMuNyAxNzkuMS00My40IDI1Mi45YTMxLjk1IDMxLjk1IDAgMDA0Ni40IDMzLjdMNTEyIDc1NGwyMjcuMSAxMTkuNGM2LjIgMy4zIDEzLjQgNC40IDIwLjMgMy4yIDE3LjQtMyAyOS4xLTE5LjUgMjYuMS0zNi45bC00My40LTI1Mi45IDE4My43LTE3OS4xYzUtNC45IDguMy0xMS4zIDkuMy0xOC4zIDIuNy0xNy41LTkuNS0zMy43LTI3LTM2LjN6IiAvPjwvc3ZnPg==) */ const Sc =
          e.forwardRef(xc),
        kc = () =>
          (0, m.jsx)(Sc, { style: { color: "#FF7500" }, className: bo }),
        wc = "https://chrome.google.com/webstore/detail/video-downloader-pro/",
        Cc = "https://chrome.google.com/webstore/detail/video-downloader-pro/",
        Ec =
          "http://www.facebook.com/sharer.php?u=https://chrome.google.com/webstore/detail/video-downloader-pro/",
        _c = (e) => [
          {
            onClick: () => {
              chrome.storage.local.get([hc.CurrentTab], (e) => {
                var t;
                const n =
                  null !== (t = e[hc.CurrentTab]) && void 0 !== t ? t : 0;
                chrome.storage.local.remove(["".concat(n)]), mc("".concat(n));
              });
            },
            title: "Clear",
            icon: gc,
          },
          { href: "".concat(Ec).concat(e), title: "Facebook", icon: vc },
          { href: "".concat(Cc).concat(e), title: "Help", icon: yc },
          { href: "".concat(wc).concat(e), title: "Rate us", icon: kc },
        ],
        Oc = ["children"],
        Pc = (t) => {
          let { isMenuVisible: n, setIsMenuVisible: r } = t;
          const o = (0, e.useRef)(null),
            { updateState: a } = fc(),
            { extensionId: i } = (() => {
              const [t, n] = (0, e.useState)("");
              return (
                (0, e.useEffect)(() => {
                  chrome.management.getSelf().then((e) => {
                    let { id: t } = e;
                    n(t);
                  });
                }, []),
                { extensionId: t }
              );
            })(),
            l = () => {
              r(!1);
            };
          return (0, m.jsx)(uc, {
            in: n,
            timeout: 300,
            nodeRef: o,
            mountOnEnter: !0,
            unmountOnExit: !0,
            classNames: {
              enterActive: Dl,
              enterDone: Dl,
              exitActive: Ul,
              exitDone: Vl,
            },
            children: (0, m.jsxs)("div", {
              className: Hl,
              ref: o,
              children: [
                (0, m.jsx)("div", { className: Fl, onClick: l }),
                (0, m.jsxs)(v, {
                  className: Bl,
                  tinyVR: !0,
                  mediumHR: !0,
                  render: (e) => {
                    let { children: t } = e,
                      n = u(e, Oc);
                    return (0, m.jsx)(
                      go,
                      c(
                        c({ gap: "medium", column: !0 }, n),
                        {},
                        { children: t },
                      ),
                    );
                  },
                  children: [
                    (0, m.jsx)(Rl, {
                      type: "link",
                      block: !0,
                      onClick: l,
                      children: (0, m.jsxs)(go, {
                        align: "middle",
                        gutter: 24,
                        children: [
                          (0, m.jsx)(So, {}),
                          (0, m.jsx)(Ql, { children: "Menu" }),
                        ],
                      }),
                    }),
                    (0, m.jsx)(go, {
                      column: !0,
                      gap: "tiny",
                      children: _c(i).map((e) => {
                        let { icon: t, title: n, onClick: r, href: o } = e;
                        const i = t,
                          l =
                            "Clear" === n
                              ? () => {
                                  r && (r(), a());
                                }
                              : void 0;
                        return (0, m.jsx)(
                          Rl,
                          {
                            type: "text",
                            block: !0,
                            onClick: l,
                            href: o,
                            target: "_blank",
                            children: (0, m.jsxs)(go, {
                              align: "middle",
                              gutter: 24,
                              children: [
                                (0, m.jsx)(i, {}),
                                (0, m.jsx)(Ql, { children: n }),
                              ],
                            }),
                          },
                          n,
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        jc = "styles_mainContent__waaq+";
      const Tc = {
        icon: {
          tag: "svg",
          attrs: { viewBox: "64 64 896 896", focusable: "false" },
          children: [
            {
              tag: "path",
              attrs: {
                d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z",
              },
            },
          ],
        },
        name: "right",
        theme: "outlined",
      };
      var Nc = function (t, n) {
        return e.createElement(Li, Ae({}, t, { ref: n, icon: Tc }));
      };
      /**![right](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTc2NS43IDQ4Ni44TDMxNC45IDEzNC43QTcuOTcgNy45NyAwIDAwMzAyIDE0MXY3Ny4zYzAgNC45IDIuMyA5LjYgNi4xIDEyLjZsMzYwIDI4MS4xLTM2MCAyODEuMWMtMy45IDMtNi4xIDcuNy02LjEgMTIuNlY4ODNjMCA2LjcgNy43IDEwLjQgMTIuOSA2LjNsNDUwLjgtMzUyLjFhMzEuOTYgMzEuOTYgMCAwMDAtNTAuNHoiIC8+PC9zdmc+) */ const Mc =
        e.forwardRef(Nc);
      var Lc = {
        MAC_ENTER: 3,
        BACKSPACE: 8,
        TAB: 9,
        NUM_CENTER: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        QUESTION_MARK: 63,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLOCK: 144,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        WIN_KEY: 224,
        MAC_FF_META: 224,
        WIN_IME: 229,
        isTextModifyingKeyEvent: function (e) {
          var t = e.keyCode;
          if (
            (e.altKey && !e.ctrlKey) ||
            e.metaKey ||
            (t >= Lc.F1 && t <= Lc.F12)
          )
            return !1;
          switch (t) {
            case Lc.ALT:
            case Lc.CAPS_LOCK:
            case Lc.CONTEXT_MENU:
            case Lc.CTRL:
            case Lc.DOWN:
            case Lc.END:
            case Lc.ESC:
            case Lc.HOME:
            case Lc.INSERT:
            case Lc.LEFT:
            case Lc.MAC_FF_META:
            case Lc.META:
            case Lc.NUMLOCK:
            case Lc.NUM_CENTER:
            case Lc.PAGE_DOWN:
            case Lc.PAGE_UP:
            case Lc.PAUSE:
            case Lc.PRINT_SCREEN:
            case Lc.RIGHT:
            case Lc.SHIFT:
            case Lc.UP:
            case Lc.WIN_KEY:
            case Lc.WIN_KEY_RIGHT:
              return !1;
            default:
              return !0;
          }
        },
        isCharacterKey: function (e) {
          if (e >= Lc.ZERO && e <= Lc.NINE) return !0;
          if (e >= Lc.NUM_ZERO && e <= Lc.NUM_MULTIPLY) return !0;
          if (e >= Lc.A && e <= Lc.Z) return !0;
          if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e)
            return !0;
          switch (e) {
            case Lc.SPACE:
            case Lc.QUESTION_MARK:
            case Lc.NUM_PLUS:
            case Lc.NUM_MINUS:
            case Lc.NUM_PERIOD:
            case Lc.NUM_DIVISION:
            case Lc.SEMICOLON:
            case Lc.DASH:
            case Lc.EQUALS:
            case Lc.COMMA:
            case Lc.PERIOD:
            case Lc.SLASH:
            case Lc.APOSTROPHE:
            case Lc.SINGLE_QUOTE:
            case Lc.OPEN_SQUARE_BRACKET:
            case Lc.BACKSLASH:
            case Lc.CLOSE_SQUARE_BRACKET:
              return !0;
            default:
              return !1;
          }
        },
      };
      const zc = Lc;
      var Rc = e.forwardRef(function (t, n) {
        var r = t.prefixCls,
          o = t.forceRender,
          a = t.className,
          l = t.style,
          c = t.children,
          s = t.isActive,
          u = t.role,
          d = t.classNames,
          f = t.styles,
          p = w(e.useState(s || o), 2),
          m = p[0],
          g = p[1];
        return (
          e.useEffect(
            function () {
              (o || s) && g(!0);
            },
            [o, s],
          ),
          m
            ? e.createElement(
                "div",
                {
                  ref: n,
                  className: h()(
                    "".concat(r, "-content"),
                    i(
                      i({}, "".concat(r, "-content-active"), s),
                      "".concat(r, "-content-inactive"),
                      !s,
                    ),
                    a,
                  ),
                  style: l,
                  role: u,
                },
                e.createElement(
                  "div",
                  {
                    className: h()(
                      "".concat(r, "-content-box"),
                      null == d ? void 0 : d.body,
                    ),
                    style: null == f ? void 0 : f.body,
                  },
                  c,
                ),
              )
            : null
        );
      });
      Rc.displayName = "PanelContent";
      const Ic = Rc;
      var Ac = [
          "showArrow",
          "headerClass",
          "isActive",
          "onItemClick",
          "forceRender",
          "className",
          "classNames",
          "styles",
          "prefixCls",
          "collapsible",
          "accordion",
          "panelKey",
          "extra",
          "header",
          "expandIcon",
          "openMotion",
          "destroyInactivePanel",
          "children",
        ],
        Hc = e.forwardRef(function (t, n) {
          var r = t.showArrow,
            o = void 0 === r || r,
            a = t.headerClass,
            l = t.isActive,
            s = t.onItemClick,
            d = t.forceRender,
            f = t.className,
            p = t.classNames,
            m = void 0 === p ? {} : p,
            g = t.styles,
            v = void 0 === g ? {} : g,
            y = t.prefixCls,
            b = t.collapsible,
            x = t.accordion,
            S = t.panelKey,
            k = t.extra,
            w = t.header,
            C = t.expandIcon,
            E = t.openMotion,
            _ = t.destroyInactivePanel,
            O = t.children,
            P = u(t, Ac),
            j = "disabled" === b,
            T = null != k && "boolean" != typeof k,
            N = i(
              i(
                i(
                  {
                    onClick: function () {
                      null == s || s(S);
                    },
                    onKeyDown: function (e) {
                      ("Enter" !== e.key &&
                        e.keyCode !== zc.ENTER &&
                        e.which !== zc.ENTER) ||
                        null == s ||
                        s(S);
                    },
                    role: x ? "tab" : "button",
                  },
                  "aria-expanded",
                  l,
                ),
                "aria-disabled",
                j,
              ),
              "tabIndex",
              j ? -1 : 0,
            ),
            M =
              "function" == typeof C
                ? C(t)
                : e.createElement("i", { className: "arrow" }),
            L =
              M &&
              e.createElement(
                "div",
                Ae(
                  { className: "".concat(y, "-expand-icon") },
                  ["header", "icon"].includes(b) ? N : {},
                ),
                M,
              ),
            z = h()(
              "".concat(y, "-item"),
              i(
                i({}, "".concat(y, "-item-active"), l),
                "".concat(y, "-item-disabled"),
                j,
              ),
              f,
            ),
            R = c(
              {
                className: h()(
                  a,
                  "".concat(y, "-header"),
                  i({}, "".concat(y, "-collapsible-").concat(b), !!b),
                  m.header,
                ),
                style: v.header,
              },
              ["header", "icon"].includes(b) ? {} : N,
            );
          return e.createElement(
            "div",
            Ae({}, P, { ref: n, className: z }),
            e.createElement(
              "div",
              R,
              o && L,
              e.createElement(
                "span",
                Ae(
                  { className: "".concat(y, "-header-text") },
                  "header" === b ? N : {},
                ),
                w,
              ),
              T &&
                e.createElement(
                  "div",
                  { className: "".concat(y, "-extra") },
                  k,
                ),
            ),
            e.createElement(
              Pa,
              Ae(
                {
                  visible: l,
                  leavedClassName: "".concat(y, "-content-hidden"),
                },
                E,
                { forceRender: d, removeOnLeave: _ },
              ),
              function (t, n) {
                var r = t.className,
                  o = t.style;
                return e.createElement(
                  Ic,
                  {
                    ref: n,
                    prefixCls: y,
                    className: r,
                    classNames: m,
                    style: o,
                    styles: v,
                    isActive: l,
                    forceRender: d,
                    role: x ? "tabpanel" : void 0,
                  },
                  O,
                );
              },
            ),
          );
        });
      const Bc = Hc;
      var Fc = [
        "children",
        "label",
        "key",
        "collapsible",
        "onItemClick",
        "destroyInactivePanel",
      ];
      const Dc = function (t, n, r) {
        return Array.isArray(t)
          ? (function (t, n) {
              var r = n.prefixCls,
                o = n.accordion,
                a = n.collapsible,
                i = n.destroyInactivePanel,
                l = n.onItemClick,
                c = n.activeKey,
                s = n.openMotion,
                d = n.expandIcon;
              return t.map(function (t, n) {
                var f = t.children,
                  p = t.label,
                  h = t.key,
                  m = t.collapsible,
                  g = t.onItemClick,
                  v = t.destroyInactivePanel,
                  y = u(t, Fc),
                  b = String(null != h ? h : n),
                  x = null != m ? m : a,
                  S = null != v ? v : i,
                  k = !1;
                return (
                  (k = o ? c[0] === b : c.indexOf(b) > -1),
                  e.createElement(
                    Bc,
                    Ae({}, y, {
                      prefixCls: r,
                      key: b,
                      panelKey: b,
                      isActive: k,
                      accordion: o,
                      openMotion: s,
                      expandIcon: d,
                      header: p,
                      collapsible: x,
                      onItemClick: function (e) {
                        "disabled" !== x && (l(e), null == g || g(e));
                      },
                      destroyInactivePanel: S,
                    }),
                    f,
                  )
                );
              });
            })(t, r)
          : oi(n).map(function (t, n) {
              return (function (t, n, r) {
                if (!t) return null;
                var o = r.prefixCls,
                  a = r.accordion,
                  i = r.collapsible,
                  l = r.destroyInactivePanel,
                  c = r.onItemClick,
                  s = r.activeKey,
                  u = r.openMotion,
                  d = r.expandIcon,
                  f = t.key || String(n),
                  p = t.props,
                  h = p.header,
                  m = p.headerClass,
                  g = p.destroyInactivePanel,
                  v = p.collapsible,
                  y = p.onItemClick,
                  b = !1;
                b = a ? s[0] === f : s.indexOf(f) > -1;
                var x = null != v ? v : i,
                  S = {
                    key: f,
                    panelKey: f,
                    header: h,
                    headerClass: m,
                    isActive: b,
                    prefixCls: o,
                    destroyInactivePanel: null != g ? g : l,
                    openMotion: u,
                    accordion: a,
                    children: t.props.children,
                    onItemClick: function (e) {
                      "disabled" !== x && (c(e), null == y || y(e));
                    },
                    expandIcon: d,
                    collapsible: x,
                  };
                return "string" == typeof t.type
                  ? t
                  : (Object.keys(S).forEach(function (e) {
                      void 0 === S[e] && delete S[e];
                    }),
                    e.cloneElement(t, S));
              })(t, n, r);
            });
      };
      var Uc = ""
        .concat(
          "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap",
          " ",
        )
        .concat(
          "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError",
        )
        .split(/[\s\n]+/);
      function Vc(e, t) {
        return 0 === e.indexOf(t);
      }
      function Wc(e) {
        var t = e;
        if (!Array.isArray(t)) {
          var n = r(t);
          t = "number" === n || "string" === n ? [t] : [];
        }
        return t.map(function (e) {
          return String(e);
        });
      }
      var $c = e.forwardRef(function (t, n) {
        var r,
          o,
          a,
          i,
          l,
          s,
          u,
          d,
          f,
          p,
          m,
          g,
          v,
          y,
          b,
          x = t.prefixCls,
          S = void 0 === x ? "rc-collapse" : x,
          k = t.destroyInactivePanel,
          C = void 0 !== k && k,
          _ = t.style,
          O = t.accordion,
          P = t.className,
          j = t.children,
          T = t.collapsible,
          N = t.openMotion,
          M = t.expandIcon,
          L = t.activeKey,
          z = t.defaultActiveKey,
          R = t.onChange,
          I = t.items,
          A = h()(S, P),
          H =
            ((r = []),
            (a = (o =
              {
                value: L,
                onChange: function (e) {
                  return null == R ? void 0 : R(e);
                },
                defaultValue: z,
                postState: Wc,
              } || {}).defaultValue),
            (i = o.value),
            (l = o.onChange),
            (s = o.postState),
            (u = w(
              xr(function () {
                return Sr(i)
                  ? i
                  : Sr(a)
                    ? "function" == typeof a
                      ? a()
                      : a
                    : "function" == typeof r
                      ? r()
                      : r;
              }),
              2,
            )),
            (d = u[0]),
            (f = u[1]),
            (p = void 0 !== i ? i : d),
            (m = s ? s(p) : p),
            (g = br(l)),
            (v = w(xr([p]), 2)),
            (y = v[0]),
            (b = v[1]),
            Ce(
              function () {
                var e = y[0];
                d !== e && g(d, e);
              },
              [y],
            ),
            Ce(
              function () {
                Sr(i) || f(i);
              },
              [i],
            ),
            [
              m,
              br(function (e, t) {
                f(e, t), b([p], t);
              }),
            ]),
          B = w(H, 2),
          F = B[0],
          D = B[1];
        $(
          !j,
          "[rc-collapse] `children` will be removed in next major version. Please use `items` instead.",
        );
        var U = Dc(I, j, {
          prefixCls: S,
          accordion: O,
          openMotion: N,
          expandIcon: M,
          collapsible: T,
          destroyInactivePanel: C,
          onItemClick: function (e) {
            return D(function () {
              return O
                ? F[0] === e
                  ? []
                  : [e]
                : F.indexOf(e) > -1
                  ? F.filter(function (t) {
                      return t !== e;
                    })
                  : [].concat(E(F), [e]);
            });
          },
          activeKey: F,
        });
        return e.createElement(
          "div",
          Ae(
            { ref: n, className: A, style: _, role: O ? "tablist" : void 0 },
            (function (e) {
              var t,
                n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              t =
                !1 === n
                  ? { aria: !0, data: !0, attr: !0 }
                  : !0 === n
                    ? { aria: !0 }
                    : c({}, n);
              var r = {};
              return (
                Object.keys(e).forEach(function (n) {
                  ((t.aria && ("role" === n || Vc(n, "aria-"))) ||
                    (t.data && Vc(n, "data-")) ||
                    (t.attr && Uc.includes(n))) &&
                    (r[n] = e[n]);
                }),
                r
              );
            })(t, { aria: !0, data: !0 }),
          ),
          U,
        );
      });
      const Gc = Object.assign($c, { Panel: Bc }),
        Xc = Gc;
      Gc.Panel;
      const Qc = () => ({ height: 0, opacity: 0 }),
        Kc = (e) => {
          const { scrollHeight: t } = e;
          return { height: t, opacity: 1 };
        },
        qc = (e) => ({ height: e ? e.offsetHeight : 0 }),
        Yc = (e, t) =>
          !0 === (null == t ? void 0 : t.deadline) ||
          "height" === t.propertyName,
        Zc = function () {
          return {
            motionName: "".concat(
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : er,
              "-motion-collapse",
            ),
            onAppearStart: Qc,
            onEnterStart: Qc,
            onAppearActive: Kc,
            onEnterActive: Kc,
            onLeaveStart: qc,
            onLeaveActive: Qc,
            onAppearEnd: Yc,
            onEnterEnd: Yc,
            onLeaveEnd: Yc,
            motionDeadline: 500,
          };
        },
        Jc = e.forwardRef((t, n) => {
          const { getPrefixCls: r } = e.useContext(nr),
            { prefixCls: o, className: a, showArrow: i = !0 } = t,
            l = r("collapse", o),
            c = h()({ ["".concat(l, "-no-arrow")]: !i }, a);
          return e.createElement(
            Xc.Panel,
            Object.assign({ ref: n }, t, { prefixCls: l, className: c }),
          );
        }),
        es = (e) => ({
          [e.componentCls]: {
            ["".concat(e.antCls, "-motion-collapse-legacy")]: {
              overflow: "hidden",
              "&-active": {
                transition: "height "
                  .concat(e.motionDurationMid, " ")
                  .concat(e.motionEaseInOut, ",\n        opacity ")
                  .concat(e.motionDurationMid, " ")
                  .concat(e.motionEaseInOut, " !important"),
              },
            },
            ["".concat(e.antCls, "-motion-collapse")]: {
              overflow: "hidden",
              transition: "height "
                .concat(e.motionDurationMid, " ")
                .concat(e.motionEaseInOut, ",\n        opacity ")
                .concat(e.motionDurationMid, " ")
                .concat(e.motionEaseInOut, " !important"),
            },
          },
        }),
        ts = (e) => {
          const {
              componentCls: t,
              contentBg: n,
              padding: r,
              headerBg: o,
              headerPadding: a,
              collapseHeaderPaddingSM: i,
              collapseHeaderPaddingLG: l,
              collapsePanelBorderRadius: c,
              lineWidth: s,
              lineType: u,
              colorBorder: d,
              colorText: f,
              colorTextHeading: p,
              colorTextDisabled: h,
              fontSizeLG: m,
              lineHeight: g,
              lineHeightLG: v,
              marginSM: y,
              paddingSM: b,
              paddingLG: x,
              paddingXS: S,
              motionDurationSlow: k,
              fontSizeIcon: w,
              contentPadding: C,
              fontHeight: E,
              fontHeightLG: _,
            } = e,
            O = "".concat(ve(s), " ").concat(u, " ").concat(d);
          return {
            [t]: Object.assign(Object.assign({}, Zr(e)), {
              backgroundColor: o,
              border: O,
              borderRadius: c,
              "&-rtl": { direction: "rtl" },
              ["& > ".concat(t, "-item")]: {
                borderBottom: O,
                "&:first-child": {
                  ["\n            &,\n            & > ".concat(t, "-header")]: {
                    borderRadius: "".concat(ve(c), " ").concat(ve(c), " 0 0"),
                  },
                },
                "&:last-child": {
                  ["\n            &,\n            & > ".concat(t, "-header")]: {
                    borderRadius: "0 0 ".concat(ve(c), " ").concat(ve(c)),
                  },
                },
                ["> ".concat(t, "-header")]: Object.assign(
                  Object.assign(
                    {
                      position: "relative",
                      display: "flex",
                      flexWrap: "nowrap",
                      alignItems: "flex-start",
                      padding: a,
                      color: p,
                      lineHeight: g,
                      cursor: "pointer",
                      transition: "all ".concat(k, ", visibility 0s"),
                    },
                    to(e),
                  ),
                  {
                    ["> ".concat(t, "-header-text")]: { flex: "auto" },
                    ["".concat(t, "-expand-icon")]: {
                      height: E,
                      display: "flex",
                      alignItems: "center",
                      paddingInlineEnd: y,
                    },
                    ["".concat(t, "-arrow")]: Object.assign(
                      Object.assign(
                        {},
                        {
                          display: "inline-flex",
                          alignItems: "center",
                          color: "inherit",
                          fontStyle: "normal",
                          lineHeight: 0,
                          textAlign: "center",
                          textTransform: "none",
                          verticalAlign: "-0.125em",
                          textRendering: "optimizeLegibility",
                          "-webkit-font-smoothing": "antialiased",
                          "-moz-osx-font-smoothing": "grayscale",
                          "> *": { lineHeight: 1 },
                          svg: { display: "inline-block" },
                        },
                      ),
                      {
                        fontSize: w,
                        transition: "transform ".concat(k),
                        svg: { transition: "transform ".concat(k) },
                      },
                    ),
                    ["".concat(t, "-header-text")]: { marginInlineEnd: "auto" },
                  },
                ),
                ["".concat(t, "-collapsible-header")]: {
                  cursor: "default",
                  ["".concat(t, "-header-text")]: {
                    flex: "none",
                    cursor: "pointer",
                  },
                },
                ["".concat(t, "-collapsible-icon")]: {
                  cursor: "unset",
                  ["".concat(t, "-expand-icon")]: { cursor: "pointer" },
                },
              },
              ["".concat(t, "-content")]: {
                color: f,
                backgroundColor: n,
                borderTop: O,
                ["& > ".concat(t, "-content-box")]: { padding: C },
                "&-hidden": { display: "none" },
              },
              "&-small": {
                ["> ".concat(t, "-item")]: {
                  ["> ".concat(t, "-header")]: {
                    padding: i,
                    paddingInlineStart: S,
                    ["> ".concat(t, "-expand-icon")]: {
                      marginInlineStart: e.calc(b).sub(S).equal(),
                    },
                  },
                  ["> ".concat(t, "-content > ").concat(t, "-content-box")]: {
                    padding: b,
                  },
                },
              },
              "&-large": {
                ["> ".concat(t, "-item")]: {
                  fontSize: m,
                  lineHeight: v,
                  ["> ".concat(t, "-header")]: {
                    padding: l,
                    paddingInlineStart: r,
                    ["> ".concat(t, "-expand-icon")]: {
                      height: _,
                      marginInlineStart: e.calc(x).sub(r).equal(),
                    },
                  },
                  ["> ".concat(t, "-content > ").concat(t, "-content-box")]: {
                    padding: x,
                  },
                },
              },
              ["".concat(t, "-item:last-child")]: {
                borderBottom: 0,
                ["> ".concat(t, "-content")]: {
                  borderRadius: "0 0 ".concat(ve(c), " ").concat(ve(c)),
                },
              },
              ["& ".concat(t, "-item-disabled > ").concat(t, "-header")]: {
                "\n          &,\n          & > .arrow\n        ": {
                  color: h,
                  cursor: "not-allowed",
                },
              },
              ["&".concat(t, "-icon-position-end")]: {
                ["& > ".concat(t, "-item")]: {
                  ["> ".concat(t, "-header")]: {
                    ["".concat(t, "-expand-icon")]: {
                      order: 1,
                      paddingInlineEnd: 0,
                      paddingInlineStart: y,
                    },
                  },
                },
              },
            }),
          };
        },
        ns = (e) => {
          const { componentCls: t } = e,
            n = "> "
              .concat(t, "-item > ")
              .concat(t, "-header ")
              .concat(t, "-arrow");
          return {
            ["".concat(t, "-rtl")]: { [n]: { transform: "rotate(180deg)" } },
          };
        },
        rs = (e) => {
          const {
            componentCls: t,
            headerBg: n,
            paddingXXS: r,
            colorBorder: o,
          } = e;
          return {
            ["".concat(t, "-borderless")]: {
              backgroundColor: n,
              border: 0,
              ["> ".concat(t, "-item")]: {
                borderBottom: "1px solid ".concat(o),
              },
              ["\n        > "
                .concat(t, "-item:last-child,\n        > ")
                .concat(t, "-item:last-child ")
                .concat(t, "-header\n      ")]: { borderRadius: 0 },
              ["> ".concat(t, "-item:last-child")]: { borderBottom: 0 },
              ["> ".concat(t, "-item > ").concat(t, "-content")]: {
                backgroundColor: "transparent",
                borderTop: 0,
              },
              ["> "
                .concat(t, "-item > ")
                .concat(t, "-content > ")
                .concat(t, "-content-box")]: { paddingTop: r },
            },
          };
        },
        os = (e) => {
          const { componentCls: t, paddingSM: n } = e;
          return {
            ["".concat(t, "-ghost")]: {
              backgroundColor: "transparent",
              border: 0,
              ["> ".concat(t, "-item")]: {
                borderBottom: 0,
                ["> ".concat(t, "-content")]: {
                  backgroundColor: "transparent",
                  border: 0,
                  ["> ".concat(t, "-content-box")]: { paddingBlock: n },
                },
              },
            },
          };
        },
        as = ro(
          "Collapse",
          (e) => {
            const t = Dr(e, {
              collapseHeaderPaddingSM: ""
                .concat(ve(e.paddingXS), " ")
                .concat(ve(e.paddingSM)),
              collapseHeaderPaddingLG: ""
                .concat(ve(e.padding), " ")
                .concat(ve(e.paddingLG)),
              collapsePanelBorderRadius: e.borderRadiusLG,
            });
            return [ts(t), rs(t), os(t), ns(t), es(t)];
          },
          (e) => ({
            headerPadding: ""
              .concat(e.paddingSM, "px ")
              .concat(e.padding, "px"),
            headerBg: e.colorFillAlter,
            contentPadding: "".concat(e.padding, "px 16px"),
            contentBg: e.colorBgContainer,
          }),
        ),
        is = e.forwardRef((t, n) => {
          const {
              getPrefixCls: r,
              direction: o,
              collapse: a,
            } = e.useContext(nr),
            {
              prefixCls: i,
              className: l,
              rootClassName: c,
              style: s,
              bordered: u = !0,
              ghost: d,
              size: f,
              expandIconPosition: p = "start",
              children: m,
              expandIcon: g,
            } = t,
            v = ri((e) => {
              var t;
              return null !== (t = null != f ? f : e) && void 0 !== t
                ? t
                : "middle";
            }),
            y = r("collapse", i),
            b = r(),
            [x, S, k] = as(y);
          const w = e.useMemo(
              () => ("left" === p ? "start" : "right" === p ? "end" : p),
              [p],
            ),
            C = null != g ? g : null == a ? void 0 : a.expandIcon,
            E = e.useCallback(
              function () {
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                const n =
                  "function" == typeof C
                    ? C(t)
                    : e.createElement(Mc, {
                        rotate: t.isActive ? 90 : void 0,
                        "aria-label": t.isActive ? "expanded" : "collapsed",
                      });
                return Co(n, () => {
                  var e;
                  return {
                    className: h()(
                      null === (e = null == n ? void 0 : n.props) ||
                        void 0 === e
                        ? void 0
                        : e.className,
                      "".concat(y, "-arrow"),
                    ),
                  };
                });
              },
              [C, y],
            ),
            _ = h()(
              "".concat(y, "-icon-position-").concat(w),
              {
                ["".concat(y, "-borderless")]: !u,
                ["".concat(y, "-rtl")]: "rtl" === o,
                ["".concat(y, "-ghost")]: !!d,
                ["".concat(y, "-").concat(v)]: "middle" !== v,
              },
              null == a ? void 0 : a.className,
              l,
              c,
              S,
              k,
            ),
            O = Object.assign(Object.assign({}, Zc(b)), {
              motionAppear: !1,
              leavedClassName: "".concat(y, "-content-hidden"),
            }),
            P = e.useMemo(
              () =>
                m
                  ? oi(m).map((e, t) => {
                      var n, r;
                      const o = e.props;
                      if (null == o ? void 0 : o.disabled) {
                        const a =
                          null !== (n = e.key) && void 0 !== n ? n : String(t);
                        return Co(
                          e,
                          Object.assign(
                            Object.assign({}, wo(e.props, ["disabled"])),
                            {
                              key: a,
                              collapsible:
                                null !== (r = o.collapsible) && void 0 !== r
                                  ? r
                                  : "disabled",
                            },
                          ),
                        );
                      }
                      return e;
                    })
                  : null,
              [m],
            );
          return x(
            e.createElement(
              Xc,
              Object.assign(
                { ref: n, openMotion: O },
                wo(t, ["rootClassName"]),
                {
                  expandIcon: E,
                  prefixCls: y,
                  className: _,
                  style: Object.assign(
                    Object.assign({}, null == a ? void 0 : a.style),
                    s,
                  ),
                },
              ),
              P,
            ),
          );
        });
      const ls = Object.assign(is, { Panel: Jc });
      const cs = {
        icon: {
          tag: "svg",
          attrs: { viewBox: "64 64 896 896", focusable: "false" },
          children: [
            {
              tag: "path",
              attrs: {
                d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm-88-532h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zm224 0h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8z",
              },
            },
          ],
        },
        name: "pause-circle",
        theme: "outlined",
      };
      var ss = function (t, n) {
        return e.createElement(Li, Ae({}, t, { ref: n, icon: cs }));
      };
      /**![pause-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MiAzNzIgMTY2LjYgMzcyIDM3Mi0xNjYuNiAzNzItMzcyIDM3MnptLTg4LTUzMmgtNDhjLTQuNCAwLTggMy42LTggOHYzMDRjMCA0LjQgMy42IDggOCA4aDQ4YzQuNCAwIDgtMy42IDgtOFYzNjBjMC00LjQtMy42LTgtOC04em0yMjQgMGgtNDhjLTQuNCAwLTggMy42LTggOHYzMDRjMCA0LjQgMy42IDggOCA4aDQ4YzQuNCAwIDgtMy42IDgtOFYzNjBjMC00LjQtMy42LTgtOC04eiIgLz48L3N2Zz4=) */ const us =
          e.forwardRef(ss),
        ds = () => {
          const e = h()(bo, xo);
          return (0, m.jsx)(us, { className: e });
        };
      const fs = {
        icon: {
          tag: "svg",
          attrs: { viewBox: "64 64 896 896", focusable: "false" },
          children: [
            {
              tag: "path",
              attrs: {
                d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
              },
            },
            {
              tag: "path",
              attrs: {
                d: "M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z",
              },
            },
          ],
        },
        name: "play-circle",
        theme: "outlined",
      };
      var ps = function (t, n) {
        return e.createElement(Li, Ae({}, t, { ref: n, icon: fs }));
      };
      /**![play-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MiAzNzIgMTY2LjYgMzcyIDM3Mi0xNjYuNiAzNzItMzcyIDM3MnoiIC8+PHBhdGggZD0iTTcxOS40IDQ5OS4xbC0yOTYuMS0yMTVBMTUuOSAxNS45IDAgMDAzOTggMjk3djQzMGMwIDEzLjEgMTQuOCAyMC41IDI1LjMgMTIuOWwyOTYuMS0yMTVhMTUuOSAxNS45IDAgMDAwLTI1Ljh6bS0yNTcuNiAxMzRWMzkwLjlMNjI4LjUgNTEyIDQ2MS44IDYzMy4xeiIgLz48L3N2Zz4=) */ const hs =
          e.forwardRef(ps),
        ms = () => {
          const e = h()(bo, xo);
          return (0, m.jsx)(hs, { className: e });
        },
        gs = (e) => {
          let { isActive: t } = e;
          return (0, m.jsx)(m.Fragment, {
            children: t
              ? (0, m.jsx)(Rl, {
                  type: "link",
                  htmlType: "button",
                  icon: (0, m.jsx)(ds, {}),
                  style: { transform: "translateY(5px)" },
                })
              : (0, m.jsx)(Rl, {
                  type: "link",
                  htmlType: "button",
                  icon: (0, m.jsx)(ms, {}),
                  style: { transform: "translateY(5px)" },
                }),
          });
        };
      const vs = {
        icon: {
          tag: "svg",
          attrs: { viewBox: "64 64 896 896", focusable: "false" },
          children: [
            {
              tag: "path",
              attrs: {
                d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z",
              },
            },
          ],
        },
        name: "download",
        theme: "outlined",
      };
      var ys = function (t, n) {
        return e.createElement(Li, Ae({}, t, { ref: n, icon: vs }));
      };
      /**![download](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwNS43IDY2MWE4IDggMCAwMDEyLjYgMGwxMTItMTQxLjdjNC4xLTUuMi40LTEyLjktNi4zLTEyLjloLTc0LjFWMTY4YzAtNC40LTMuNi04LTgtOGgtNjBjLTQuNCAwLTggMy42LTggOHYzMzguM0g0MDBjLTYuNyAwLTEwLjQgNy43LTYuMyAxMi45bDExMiAxNDEuOHpNODc4IDYyNmgtNjBjLTQuNCAwLTggMy42LTggOHYxNTRIMjE0VjYzNGMwLTQuNC0zLjYtOC04LThoLTYwYy00LjQgMC04IDMuNi04IDh2MTk4YzAgMTcuNyAxNC4zIDMyIDMyIDMyaDY4NGMxNy43IDAgMzItMTQuMyAzMi0zMlY2MzRjMC00LjQtMy42LTgtOC04eiIgLz48L3N2Zz4=) */ const bs =
          e.forwardRef(ys),
        xs = () => {
          const e = h()(bo, xo);
          return (0, m.jsx)(bs, { className: e });
        },
        Ss = "styles_title__lezXp",
        ks = (e) => {
          let { url: t, title: n, size: r, format: o } = e;
          return (0, m.jsxs)(go, {
            gap: "medium",
            justify: "space-between",
            align: "middle",
            children: [
              (0, m.jsx)(Rl, {
                type: "text",
                htmlType: "button",
                icon: (0, m.jsx)(xs, {}),
                onClick: (e) => {
                  e.stopPropagation(),
                    chrome.downloads.download({ url: null != t ? t : "" });
                },
              }),
              (0, m.jsx)("div", { className: Ss, title: n, children: n }),
              (0, m.jsx)("div", { children: o }),
              (0, m.jsx)("div", { children: r }),
            ],
          });
        },
        { Panel: ws } = ls,
        Cs = (t) => {
          let {
            data: { filename: n, url: r, headers: o },
          } = t;
          const a = (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              if (!+e) return "0B";
              const n = t < 0 ? 0 : t,
                r = Math.floor(Math.log(+e) / Math.log(1024));
              return ""
                .concat(parseFloat((+e / Math.pow(1024, r)).toFixed(n)))
                .concat(
                  ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][r],
                );
            })(o["content-length"]),
            i = ((e) => e.split("/")[1])(o["content-type"]),
            l = (0, e.useRef)(null),
            [c, s] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            l.current && l.current.subscribeToStateChange(u);
          }, [l.current]);
          const u = (e) => {
            e.error && s(!0);
          };
          return (0, m.jsx)(v, {
            tinyBottom: !0,
            children: (0, m.jsx)(ls, {
              accordion: !0,
              expandIcon: (e) => {
                let { isActive: t } = e;
                return (0, m.jsx)(gs, { isActive: t });
              },
              onChange: (e) => {
                l.current &&
                  (0 === e.length ? l.current.pause() : l.current.play());
              },
              children: (0, m.jsx)(
                ws,
                {
                  header: (0, m.jsx)(ks, {
                    title: n,
                    url: null != r ? r : "",
                    size: a,
                    format: i,
                  }),
                  children: c
                    ? (0, m.jsxs)(m.Fragment, {
                        children: [
                          "Something went wrong. Try to watch this video in ",
                          (0, m.jsx)("a", {
                            href: r,
                            target: "_blank",
                            rel: "noreferrer",
                            children: "NEW TAB",
                          }),
                        ],
                      })
                    : (0, m.jsx)("video", {
                        style: { width: "100%" },
                        crossOrigin: "anonymous",
                        src: r,
                        autoPlay: !0,
                        controls: !0,
                        ref: l,
                      }),
                },
                n,
              ),
            }),
          });
        },
        Es = (e) => {
          let { data: t } = e;
          return (0, m.jsx)(m.Fragment, {
            children: t.map((e) =>
              (0, m.jsx)(
                Cs,
                { data: e },
                e.filename + e.headers["content-length"],
              ),
            ),
          });
        },
        _s = "styles_errorContent__5oXuR",
        Os = (e) => {
          let { error: t } = e;
          return (0, m.jsx)(v, {
            largeHR: !0,
            children: (0, m.jsx)(go, {
              justify: "center",
              align: "middle",
              className: _s,
              children: t,
            }),
          });
        },
        { Panel: Ps } = ls,
        js = () => {
          const [t, n] = (0, e.useState)([]),
            [r, o] = (0, e.useState)(""),
            a = !t.length,
            { state: i } = fc();
          return (
            (0, e.useEffect)(() => {
              chrome.storage.local.get([hc.CurrentTab], (e) => {
                var t;
                const r =
                  null !== (t = e[hc.CurrentTab]) && void 0 !== t ? t : 0;
                chrome.storage.local.get([r], (e) => {
                  var t;
                  const o = null !== (t = e[r]) && void 0 !== t ? t : [];
                  n(o);
                });
              }),
                chrome.storage.local.get([hc.Errors], (e) => {
                  var t;
                  const n =
                    null !== (t = e[hc.Errors]) && void 0 !== t ? t : {};
                  chrome.storage.local.get([hc.CurrentTab], (e) => {
                    var t, r;
                    const a =
                      null !== (t = e[hc.CurrentTab]) && void 0 !== t ? t : 0;
                    o(null !== (r = n[a]) && void 0 !== r ? r : "");
                  });
                });
            }, [i]),
            (0, m.jsx)("div", {
              className: jc,
              children: r
                ? (0, m.jsx)(Os, { error: r })
                : (0, m.jsx)(m.Fragment, {
                    children: a
                      ? (0, m.jsx)(go, {
                          justify: "center",
                          align: "middle",
                          className: jc,
                          children: "(empty)",
                        })
                      : (0, m.jsx)(ls, {
                          accordion: !0,
                          size: "small",
                          children: t.map((e) => {
                            let { header: t, list: n, id: r } = e;
                            return (0, m.jsx)(
                              Ps,
                              {
                                header: t,
                                children: (0, m.jsx)(Es, { data: n }, r),
                              },
                              r,
                            );
                          }),
                        }),
                  }),
            })
          );
        };
      function Ts() {}
      const Ns = e.createContext({}),
        Ms = () => {
          const e = () => {};
          return (e.deprecated = Ts), e;
        },
        Ls = (0, e.createContext)(void 0);
      const zs = {
        items_per_page: "/ page",
        jump_to: "Go to",
        jump_to_confirm: "confirm",
        page: "Page",
        prev_page: "Previous Page",
        next_page: "Next Page",
        prev_5: "Previous 5 Pages",
        next_5: "Next 5 Pages",
        prev_3: "Previous 3 Pages",
        next_3: "Next 3 Pages",
        page_size: "Page Size",
      };
      const Rs = c(
          c(
            {},
            {
              yearFormat: "YYYY",
              dayFormat: "D",
              cellMeridiemFormat: "A",
              monthBeforeYear: !0,
            },
          ),
          {},
          {
            locale: "en_US",
            today: "Today",
            now: "Now",
            backToToday: "Back to today",
            ok: "OK",
            clear: "Clear",
            month: "Month",
            year: "Year",
            timeSelect: "select time",
            dateSelect: "select date",
            weekSelect: "Choose a week",
            monthSelect: "Choose a month",
            yearSelect: "Choose a year",
            decadeSelect: "Choose a decade",
            dateFormat: "M/D/YYYY",
            dateTimeFormat: "M/D/YYYY HH:mm:ss",
            previousMonth: "Previous month (PageUp)",
            nextMonth: "Next month (PageDown)",
            previousYear: "Last year (Control + left)",
            nextYear: "Next year (Control + right)",
            previousDecade: "Last decade",
            nextDecade: "Next decade",
            previousCentury: "Last century",
            nextCentury: "Next century",
          },
        ),
        Is = {
          placeholder: "Select time",
          rangePlaceholder: ["Start time", "End time"],
        },
        As = {
          lang: Object.assign(
            {
              placeholder: "Select date",
              yearPlaceholder: "Select year",
              quarterPlaceholder: "Select quarter",
              monthPlaceholder: "Select month",
              weekPlaceholder: "Select week",
              rangePlaceholder: ["Start date", "End date"],
              rangeYearPlaceholder: ["Start year", "End year"],
              rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
              rangeMonthPlaceholder: ["Start month", "End month"],
              rangeWeekPlaceholder: ["Start week", "End week"],
            },
            Rs,
          ),
          timePickerLocale: Object.assign({}, Is),
        },
        Hs = "${label} is not a valid ${type}",
        Bs = {
          locale: "en",
          Pagination: zs,
          DatePicker: As,
          TimePicker: Is,
          Calendar: As,
          global: { placeholder: "Please select" },
          Table: {
            filterTitle: "Filter menu",
            filterConfirm: "OK",
            filterReset: "Reset",
            filterEmptyText: "No filters",
            filterCheckall: "Select all items",
            filterSearchPlaceholder: "Search in filters",
            emptyText: "No data",
            selectAll: "Select current page",
            selectInvert: "Invert current page",
            selectNone: "Clear all data",
            selectionAll: "Select all data",
            sortTitle: "Sort",
            expand: "Expand row",
            collapse: "Collapse row",
            triggerDesc: "Click to sort descending",
            triggerAsc: "Click to sort ascending",
            cancelSort: "Click to cancel sorting",
          },
          Tour: { Next: "Next", Previous: "Previous", Finish: "Finish" },
          Modal: { okText: "OK", cancelText: "Cancel", justOkText: "OK" },
          Popconfirm: { okText: "OK", cancelText: "Cancel" },
          Transfer: {
            titles: ["", ""],
            searchPlaceholder: "Search here",
            itemUnit: "item",
            itemsUnit: "items",
            remove: "Remove",
            selectCurrent: "Select current page",
            removeCurrent: "Remove current page",
            selectAll: "Select all data",
            deselectAll: "Deselect all data",
            removeAll: "Remove all data",
            selectInvert: "Invert current page",
          },
          Upload: {
            uploading: "Uploading...",
            removeFile: "Remove file",
            uploadError: "Upload error",
            previewFile: "Preview file",
            downloadFile: "Download file",
          },
          Empty: { description: "No data" },
          Icon: { icon: "icon" },
          Text: {
            edit: "Edit",
            copy: "Copy",
            copied: "Copied",
            expand: "Expand",
            collapse: "Collapse",
          },
          Form: {
            optional: "(optional)",
            defaultValidateMessages: {
              default: "Field validation error for ${label}",
              required: "Please enter ${label}",
              enum: "${label} must be one of [${enum}]",
              whitespace: "${label} cannot be a blank character",
              date: {
                format: "${label} date format is invalid",
                parse: "${label} cannot be converted to a date",
                invalid: "${label} is an invalid date",
              },
              types: {
                string: Hs,
                method: Hs,
                array: Hs,
                object: Hs,
                number: Hs,
                date: Hs,
                boolean: Hs,
                integer: Hs,
                float: Hs,
                regexp: Hs,
                email: Hs,
                url: Hs,
                hex: Hs,
              },
              string: {
                len: "${label} must be ${len} characters",
                min: "${label} must be at least ${min} characters",
                max: "${label} must be up to ${max} characters",
                range: "${label} must be between ${min}-${max} characters",
              },
              number: {
                len: "${label} must be equal to ${len}",
                min: "${label} must be minimum ${min}",
                max: "${label} must be maximum ${max}",
                range: "${label} must be between ${min}-${max}",
              },
              array: {
                len: "Must be ${len} ${label}",
                min: "At least ${min} ${label}",
                max: "At most ${max} ${label}",
                range: "The amount of ${label} must be between ${min}-${max}",
              },
              pattern: {
                mismatch: "${label} does not match the pattern ${pattern}",
              },
            },
          },
          Image: { preview: "Preview" },
          QRCode: {
            expired: "QR code expired",
            refresh: "Refresh",
            scanned: "Scanned",
          },
          ColorPicker: {
            presetEmpty: "Empty",
            transparent: "Transparent",
            singleColor: "Single",
            gradientColor: "Gradient",
          },
        };
      let Fs = Object.assign({}, Bs.Modal),
        Ds = [];
      const Us = () =>
        Ds.reduce((e, t) => Object.assign(Object.assign({}, e), t), Bs.Modal);
      const Vs = (0, e.createContext)(void 0);
      const Ws = (t) => {
          const { locale: n = {}, children: r, _ANT_MARK__: o } = t;
          e.useEffect(() => {
            const e = (function (e) {
              if (e) {
                const t = Object.assign({}, e);
                return (
                  Ds.push(t),
                  (Fs = Us()),
                  () => {
                    (Ds = Ds.filter((e) => e !== t)), (Fs = Us());
                  }
                );
              }
              Fs = Object.assign({}, Bs.Modal);
            })(null == n ? void 0 : n.Modal);
            return e;
          }, [n]);
          const a = e.useMemo(
            () => Object.assign(Object.assign({}, n), { exist: !0 }),
            [n],
          );
          return e.createElement(Vs.Provider, { value: a }, r);
        },
        $s = "-ant-".concat(Date.now(), "-").concat(Math.random());
      function Gs(e, t) {
        const n = (function (e, t) {
          const n = {},
            r = (e, t) => {
              let n = e.clone();
              return (n = (null == t ? void 0 : t(n)) || n), n.toRgbString();
            },
            o = (e, t) => {
              const o = new Gt(e),
                a = Yt(o.toRgbString());
              (n["".concat(t, "-color")] = r(o)),
                (n["".concat(t, "-color-disabled")] = a[1]),
                (n["".concat(t, "-color-hover")] = a[4]),
                (n["".concat(t, "-color-active")] = a[6]),
                (n["".concat(t, "-color-outline")] = o
                  .clone()
                  .setA(0.2)
                  .toRgbString()),
                (n["".concat(t, "-color-deprecated-bg")] = a[0]),
                (n["".concat(t, "-color-deprecated-border")] = a[2]);
            };
          if (t.primaryColor) {
            o(t.primaryColor, "primary");
            const e = new Gt(t.primaryColor),
              a = Yt(e.toRgbString());
            a.forEach((e, t) => {
              n["primary-".concat(t + 1)] = e;
            }),
              (n["primary-color-deprecated-l-35"] = r(e, (e) => e.lighten(35))),
              (n["primary-color-deprecated-l-20"] = r(e, (e) => e.lighten(20))),
              (n["primary-color-deprecated-t-20"] = r(e, (e) => e.tint(20))),
              (n["primary-color-deprecated-t-50"] = r(e, (e) => e.tint(50))),
              (n["primary-color-deprecated-f-12"] = r(e, (e) =>
                e.setA(0.12 * e.a),
              ));
            const i = new Gt(a[0]);
            (n["primary-color-active-deprecated-f-30"] = r(i, (e) =>
              e.setA(0.3 * e.a),
            )),
              (n["primary-color-active-deprecated-d-02"] = r(i, (e) =>
                e.darken(2),
              ));
          }
          t.successColor && o(t.successColor, "success"),
            t.warningColor && o(t.warningColor, "warning"),
            t.errorColor && o(t.errorColor, "error"),
            t.infoColor && o(t.infoColor, "info");
          const a = Object.keys(n).map((t) =>
            "--".concat(e, "-").concat(t, ": ").concat(n[t], ";"),
          );
          return "\n  :root {\n    ".concat(a.join("\n"), "\n  }\n  ").trim();
        })(e, t);
        O() && A(n, "".concat($s, "-dynamic-theme"));
      }
      const Xs = function () {
          return {
            componentDisabled: (0, e.useContext)(Ja),
            componentSize: (0, e.useContext)(ni),
          };
        },
        Qs = Object.assign({}, t),
        { useId: Ks } = Qs,
        qs = void 0 === Ks ? () => "" : Ks;
      function Ys(t) {
        const { children: n } = t,
          [, r] = Yn(),
          { motion: o } = r,
          a = e.useRef(!1);
        return (
          (a.current = a.current || !1 === o),
          a.current ? e.createElement(Do, { motion: o }, n) : n
        );
      }
      const Zs = () => null,
        Js = (e, t) => {
          const [n, r] = Yn();
          return At(
            {
              theme: n,
              token: r,
              hashId: "",
              path: ["ant-design-icons", e],
              nonce: () => (null == t ? void 0 : t.nonce),
              layer: { name: "antd" },
            },
            () => [no(e)],
          );
        };
      var eu = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      };
      const tu = [
        "getTargetContainer",
        "getPopupContainer",
        "renderEmpty",
        "input",
        "pagination",
        "form",
        "select",
        "button",
      ];
      let nu, ru, ou, au;
      function iu() {
        return nu || er;
      }
      const lu = (t) => {
          const {
              children: n,
              csp: r,
              autoInsertSpaceInButton: o,
              alert: a,
              anchor: i,
              form: l,
              locale: c,
              componentSize: s,
              direction: u,
              space: d,
              splitter: f,
              virtual: p,
              dropdownMatchSelectWidth: h,
              popupMatchSelectWidth: m,
              popupOverflow: g,
              legacyLocale: v,
              parentContext: y,
              iconPrefixCls: b,
              theme: x,
              componentDisabled: S,
              segmented: k,
              statistic: w,
              spin: C,
              calendar: E,
              carousel: _,
              cascader: O,
              collapse: P,
              typography: j,
              checkbox: T,
              descriptions: N,
              divider: M,
              drawer: L,
              skeleton: z,
              steps: R,
              image: I,
              layout: A,
              list: B,
              mentions: F,
              modal: D,
              progress: U,
              result: V,
              slider: W,
              breadcrumb: $,
              menu: X,
              pagination: Q,
              input: K,
              textArea: q,
              empty: Y,
              badge: Z,
              radio: J,
              rate: ee,
              switch: te,
              transfer: ne,
              avatar: re,
              message: oe,
              tag: ae,
              table: ie,
              card: le,
              tabs: ce,
              timeline: se,
              timePicker: de,
              upload: fe,
              notification: pe,
              tree: he,
              colorPicker: me,
              datePicker: ge,
              rangePicker: ve,
              flex: ye,
              wave: be,
              dropdown: xe,
              warning: Se,
              tour: ke,
              tooltip: we,
              popover: Ce,
              popconfirm: Ee,
              floatButtonGroup: _e,
              variant: Oe,
              inputNumber: Pe,
              treeSelect: je,
            } = t,
            Te = e.useCallback(
              (e, n) => {
                const { prefixCls: r } = t;
                if (n) return n;
                const o = r || y.getPrefixCls("");
                return e ? "".concat(o, "-").concat(e) : o;
              },
              [y.getPrefixCls, t.prefixCls],
            ),
            Ne = b || y.iconPrefixCls || tr,
            Me = r || y.csp;
          Js(Ne, Me);
          const Le = (function (e, t, n) {
            var r;
            Ms("ConfigProvider");
            const o = e || {},
              a =
                !1 !== o.inherit && t
                  ? t
                  : Object.assign(Object.assign({}, Fn), {
                      hashed:
                        null !== (r = null == t ? void 0 : t.hashed) &&
                        void 0 !== r
                          ? r
                          : Fn.hashed,
                      cssVar: null == t ? void 0 : t.cssVar,
                    }),
              i = qs();
            return H(
              () => {
                var r, l;
                if (!e) return t;
                const c = Object.assign({}, a.components);
                Object.keys(e.components || {}).forEach((t) => {
                  c[t] = Object.assign(
                    Object.assign({}, c[t]),
                    e.components[t],
                  );
                });
                const s = "css-var-".concat(i.replace(/:/g, "")),
                  u =
                    (null !== (r = o.cssVar) && void 0 !== r ? r : a.cssVar) &&
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          { prefix: null == n ? void 0 : n.prefixCls },
                          "object" == typeof a.cssVar ? a.cssVar : {},
                        ),
                        "object" == typeof o.cssVar ? o.cssVar : {},
                      ),
                      {
                        key:
                          ("object" == typeof o.cssVar &&
                            (null === (l = o.cssVar) || void 0 === l
                              ? void 0
                              : l.key)) ||
                          s,
                      },
                    );
                return Object.assign(Object.assign(Object.assign({}, a), o), {
                  token: Object.assign(Object.assign({}, a.token), o.token),
                  components: c,
                  cssVar: u,
                });
              },
              [o, a],
              (e, t) =>
                e.some((e, n) => {
                  const r = t[n];
                  return !G(e, r, !0);
                }),
            );
          })(x, y.theme, { prefixCls: Te("") });
          const ze = {
            csp: Me,
            autoInsertSpaceInButton: o,
            alert: a,
            anchor: i,
            locale: c || v,
            direction: u,
            space: d,
            splitter: f,
            virtual: p,
            popupMatchSelectWidth: null != m ? m : h,
            popupOverflow: g,
            getPrefixCls: Te,
            iconPrefixCls: Ne,
            theme: Le,
            segmented: k,
            statistic: w,
            spin: C,
            calendar: E,
            carousel: _,
            cascader: O,
            collapse: P,
            typography: j,
            checkbox: T,
            descriptions: N,
            divider: M,
            drawer: L,
            skeleton: z,
            steps: R,
            image: I,
            input: K,
            textArea: q,
            layout: A,
            list: B,
            mentions: F,
            modal: D,
            progress: U,
            result: V,
            slider: W,
            breadcrumb: $,
            menu: X,
            pagination: Q,
            empty: Y,
            badge: Z,
            radio: J,
            rate: ee,
            switch: te,
            transfer: ne,
            avatar: re,
            message: oe,
            tag: ae,
            table: ie,
            card: le,
            tabs: ce,
            timeline: se,
            timePicker: de,
            upload: fe,
            notification: pe,
            tree: he,
            colorPicker: me,
            datePicker: ge,
            rangePicker: ve,
            flex: ye,
            wave: be,
            dropdown: xe,
            warning: Se,
            tour: ke,
            tooltip: we,
            popover: Ce,
            popconfirm: Ee,
            floatButtonGroup: _e,
            variant: Oe,
            inputNumber: Pe,
            treeSelect: je,
          };
          const Re = Object.assign({}, y);
          Object.keys(ze).forEach((e) => {
            void 0 !== ze[e] && (Re[e] = ze[e]);
          }),
            tu.forEach((e) => {
              const n = t[e];
              n && (Re[e] = n);
            }),
            void 0 !== o &&
              (Re.button = Object.assign({ autoInsertSpace: o }, Re.button));
          const Ie = H(
              () => Re,
              Re,
              (e, t) => {
                const n = Object.keys(e),
                  r = Object.keys(t);
                return n.length !== r.length || n.some((n) => e[n] !== t[n]);
              },
            ),
            Ae = e.useMemo(() => ({ prefixCls: Ne, csp: Me }), [Ne, Me]);
          let He = e.createElement(
            e.Fragment,
            null,
            e.createElement(Zs, { dropdownMatchSelectWidth: h }),
            n,
          );
          const Be = e.useMemo(() => {
            var e, t, n, r;
            return Ar(
              (null === (e = Bs.Form) || void 0 === e
                ? void 0
                : e.defaultValidateMessages) || {},
              (null ===
                (n =
                  null === (t = Ie.locale) || void 0 === t ? void 0 : t.Form) ||
              void 0 === n
                ? void 0
                : n.defaultValidateMessages) || {},
              (null === (r = Ie.form) || void 0 === r
                ? void 0
                : r.validateMessages) || {},
              (null == l ? void 0 : l.validateMessages) || {},
            );
          }, [Ie, null == l ? void 0 : l.validateMessages]);
          Object.keys(Be).length > 0 &&
            (He = e.createElement(Ls.Provider, { value: Be }, He)),
            c &&
              (He = e.createElement(
                Ws,
                { locale: c, _ANT_MARK__: "internalMark" },
                He,
              )),
            (Ne || Me) &&
              (He = e.createElement(yi.Provider, { value: Ae }, He)),
            s && (He = e.createElement(ti, { size: s }, He)),
            (He = e.createElement(Ys, null, He));
          const Fe = e.useMemo(() => {
            const e = Le || {},
              { algorithm: t, token: n, components: r, cssVar: o } = e,
              a = eu(e, ["algorithm", "token", "components", "cssVar"]),
              i = t && (!Array.isArray(t) || t.length > 0) ? ue(t) : Bn,
              l = {};
            Object.entries(r || {}).forEach((e) => {
              let [t, n] = e;
              const r = Object.assign({}, n);
              "algorithm" in r &&
                (!0 === r.algorithm
                  ? (r.theme = i)
                  : (Array.isArray(r.algorithm) ||
                      "function" == typeof r.algorithm) &&
                    (r.theme = ue(r.algorithm)),
                delete r.algorithm),
                (l[t] = r);
            });
            const c = Object.assign(Object.assign({}, Pn), n);
            return Object.assign(Object.assign({}, a), {
              theme: i,
              token: c,
              components: l,
              override: Object.assign({ override: c }, l),
              cssVar: o,
            });
          }, [Le]);
          return (
            x && (He = e.createElement(Dn.Provider, { value: Fe }, He)),
            Ie.warning &&
              (He = e.createElement(Ns.Provider, { value: Ie.warning }, He)),
            void 0 !== S && (He = e.createElement(Za, { disabled: S }, He)),
            e.createElement(nr.Provider, { value: Ie }, He)
          );
        },
        cu = (t) => {
          const n = e.useContext(nr),
            r = e.useContext(Vs);
          return e.createElement(
            lu,
            Object.assign({ parentContext: n, legacyLocale: r }, t),
          );
        };
      (cu.ConfigContext = nr),
        (cu.SizeContext = ni),
        (cu.config = (e) => {
          const {
            prefixCls: t,
            iconPrefixCls: n,
            theme: r,
            holderRender: o,
          } = e;
          void 0 !== t && (nu = t),
            void 0 !== n && (ru = n),
            "holderRender" in e && (au = o),
            r &&
              (!(function (e) {
                return Object.keys(e).some((e) => e.endsWith("Color"));
              })(r)
                ? (ou = r)
                : Gs(iu(), r));
        }),
        (cu.useConfig = Xs),
        Object.defineProperty(cu, "SizeContext", { get: () => ni });
      const su = cu,
        uu = (e) => {
          const t = (null == e ? void 0 : e.algorithm)
              ? ue(e.algorithm)
              : ue(Hn),
            n = Object.assign(
              Object.assign({}, Pn),
              null == e ? void 0 : e.token,
            );
          return ze(n, { override: null == e ? void 0 : e.token }, t, $n);
        };
      const du = (e, t) => {
          const n = null != t ? t : Hn(e),
            r = n.fontSizeSM,
            o = n.controlHeight - 4;
          return Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign({}, n),
                  (function (e) {
                    const { sizeUnit: t, sizeStep: n } = e,
                      r = n - 2;
                    return {
                      sizeXXL: t * (r + 10),
                      sizeXL: t * (r + 6),
                      sizeLG: t * (r + 2),
                      sizeMD: t * (r + 2),
                      sizeMS: t * (r + 1),
                      size: t * r,
                      sizeSM: t * r,
                      sizeXS: t * (r - 1),
                      sizeXXS: t * (r - 1),
                    };
                  })(null != t ? t : e),
                ),
                Ln(r),
              ),
              { controlHeight: o },
            ),
            Nn(Object.assign(Object.assign({}, n), { controlHeight: o })),
          );
        },
        fu = (e, t) => new Gt(e).setA(t).toRgbString(),
        pu = (e, t) => new Gt(e).lighten(t).toHexString(),
        hu = (e) => {
          const t = Yt(e, { theme: "dark" });
          return {
            1: t[0],
            2: t[1],
            3: t[2],
            4: t[3],
            5: t[6],
            6: t[5],
            7: t[4],
            8: t[6],
            9: t[5],
            10: t[4],
          };
        },
        mu = (e, t) => {
          const n = e || "#000",
            r = t || "#fff";
          return {
            colorBgBase: n,
            colorTextBase: r,
            colorText: fu(r, 0.85),
            colorTextSecondary: fu(r, 0.65),
            colorTextTertiary: fu(r, 0.45),
            colorTextQuaternary: fu(r, 0.25),
            colorFill: fu(r, 0.18),
            colorFillSecondary: fu(r, 0.12),
            colorFillTertiary: fu(r, 0.08),
            colorFillQuaternary: fu(r, 0.04),
            colorBgSolid: fu(r, 0.95),
            colorBgSolidHover: fu(r, 1),
            colorBgSolidActive: fu(r, 0.9),
            colorBgElevated: pu(n, 12),
            colorBgContainer: pu(n, 8),
            colorBgLayout: pu(n, 0),
            colorBgSpotlight: pu(n, 26),
            colorBgBlur: fu(r, 0.04),
            colorBorder: pu(n, 26),
            colorBorderSecondary: pu(n, 19),
          };
        },
        gu = (e, t) => {
          const n = Object.keys(On)
              .map((t) => {
                const n = Yt(e[t], { theme: "dark" });
                return new Array(10)
                  .fill(1)
                  .reduce(
                    (e, r, o) => (
                      (e["".concat(t, "-").concat(o + 1)] = n[o]),
                      (e["".concat(t).concat(o + 1)] = n[o]),
                      e
                    ),
                    {},
                  );
              })
              .reduce(
                (e, t) => (e = Object.assign(Object.assign({}, e), t)),
                {},
              ),
            r = null != t ? t : Hn(e);
          return Object.assign(
            Object.assign(Object.assign({}, r), n),
            jn(e, {
              generateColorPalettes: hu,
              generateNeutralColorPalettes: mu,
            }),
          );
        };
      const vu = {
          defaultSeed: Fn.token,
          useToken: function () {
            const [e, t, n] = Yn();
            return { theme: e, token: t, hashId: n };
          },
          defaultAlgorithm: Hn,
          darkAlgorithm: gu,
          compactAlgorithm: du,
          getDesignToken: uu,
          defaultConfig: Fn,
          _internalContext: Dn,
        },
        yu = () => {
          const [t, n] = (0, e.useState)(!1);
          return (
            (0, e.useEffect)(() => {
              const e = window.matchMedia("(prefers-color-scheme: dark)");
              n(e.matches);
              const t = (e) => n(e.matches);
              return (
                e.addEventListener("change", t),
                () => e.removeEventListener("change", t)
              );
            }, []),
            t
          );
        },
        bu = (e) => {
          let { children: t } = e;
          const n = yu();
          return (0, m.jsx)(pc, {
            children: (0, m.jsx)(su, {
              theme: { algorithm: n ? vu.darkAlgorithm : vu.defaultAlgorithm },
              children: t,
            }),
          });
        };
      const xu = function () {
        const [t, n] = (0, e.useState)(!1);
        return (0, m.jsxs)(bu, {
          children: [
            (0, m.jsx)(Al, { setIsMenuVisible: n }),
            (0, m.jsx)(js, {}),
            (0, m.jsx)(Pc, { setIsMenuVisible: n, isMenuVisible: t }),
          ],
        });
      };
      n.createRoot(document.getElementById("root")).render(
        (0, m.jsx)(e.StrictMode, { children: (0, m.jsx)(xu, {}) }),
      );
    })();
})();
//# sourceMappingURL=popup.js.map
