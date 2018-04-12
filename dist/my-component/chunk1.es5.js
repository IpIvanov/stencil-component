/*! Built with http://stenciljs.com */
MyComponent.loadBundle("./chunk1.js", ["exports"], function (e) { window.MyComponent.h; var n = "/", t = "./", r = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g"); function i(e) { return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"); } function a(e) { return e.replace(/([=!:$/()])/g, "\\$1"); } function u(e) { return e && e.sensitive ? "" : "i"; } function o(e, l, c) { return e instanceof RegExp ? function (e, n) { if (!n)
    return e; var t = e.source.match(/\((?!\?)/g); if (t)
    for (var r = 0; r < t.length; r++)
        n.push({ name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, pattern: null }); return e; }(e, l) : Array.isArray(e) ? function (e, n, t) { for (var r = [], i = 0; i < e.length; i++)
    r.push(o(e[i], n, t).source); return new RegExp("(?:" + r.join("|") + ")", u(t)); }(e, l, c) : function (e, o, l) { return function (e, r, a) { for (var o = (a = a || {}).strict, l = !1 !== a.end, c = i(a.delimiter || n), p = a.delimiters || t, s = [].concat(a.endsWith || []).map(i).concat("$").join("|"), f = "", h = !1, d = 0; d < e.length; d++) {
    var g = e[d];
    if ("string" == typeof g)
        f += i(g), h = d === e.length - 1 && p.indexOf(g[g.length - 1]) > -1;
    else {
        var m = i(g.prefix), x = g.repeat ? "(?:" + g.pattern + ")(?:" + m + "(?:" + g.pattern + "))*" : g.pattern;
        r && r.push(g), g.optional ? g.partial ? f += m + "(" + x + ")?" : f += "(?:" + m + "(" + x + "))?" : f += m + "(" + x + ")";
    }
} return l ? (o || (f += "(?:" + c + ")?"), f += "$" === s ? "$" : "(?=" + s + ")") : (o || (f += "(?:" + c + "(?=" + s + "))?"), h || (f += "(?=" + c + "|" + s + ")")), new RegExp("^" + f, u(a)); }(function (e, u) { for (var o, l = [], c = 0, p = 0, s = "", f = u && u.delimiter || n, h = u && u.delimiters || t, d = !1; null !== (o = r.exec(e));) {
    var g = o[0], m = o[1], x = o.index;
    if (s += e.slice(p, x), p = x + g.length, m)
        s += m[1], d = !0;
    else {
        var v = "", y = e[p], $ = o[2], w = o[3], E = o[4], R = o[5];
        if (!d && s.length) {
            var j = s.length - 1;
            h.indexOf(s[j]) > -1 && (v = s[j], s = s.slice(0, j));
        }
        s && (l.push(s), s = "", d = !1);
        var O = "" !== v && void 0 !== y && y !== v, b = "+" === R || "*" === R, k = "?" === R || "*" === R, A = v || f, C = w || E;
        l.push({ name: $ || c++, prefix: v, delimiter: A, optional: k, repeat: b, partial: O, pattern: C ? a(C) : "[^" + i(A) + "]+?" });
    }
} return (s || p < e.length) && l.push(s + e.substr(p)), l; }(e, l), o, l); }(e, l, c); } var l = {}; var c = 0; e.matchPath = function (e, n) {
    if (n === void 0) { n = {}; }
    "string" == typeof n && (n = { path: n });
    var _a = n.path, t = _a === void 0 ? "/" : _a, _b = n.exact, r = _b === void 0 ? !1 : _b, _c = n.strict, i = _c === void 0 ? !1 : _c, _d = function (e, n) { var t = "" + n.end + n.strict, r = l[t] || (l[t] = {}), i = JSON.stringify(e); if (r[i])
        return r[i]; var a = [], u = { re: o(e, a, n), keys: a }; return c < 1e4 && (r[i] = u, c += 1), u; }(t, { end: r, strict: i }), a = _d.re, u = _d.keys, p = a.exec(e);
    if (!p)
        return null;
    var s = p[0], f = p.slice(1), h = e === s;
    return r && !h ? null : { path: t, url: "/" === t && "" === s ? "/" : s, isExact: h, params: u.reduce(function (e, n, t) { return e[n.name] = f[t], e; }, {}) };
}; });
