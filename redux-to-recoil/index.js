
var e = require("preact/compat"),
    t = require("react-redux"),
    o = require("recoil"),
    immmpath = require("./impath");

function c(e) {
  return e && "object" == typeof e && "default" in e ? e : {
    default: e
  };
}

var a = /*#__PURE__*/c(e);

function i() {
  return i = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];

      for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }

    return e;
  }, i.apply(this, arguments);
}

var u = {
  readEnabled: !0,
  writeEnabled: !0,
  batchWrites: !1,
  _reduxStateAtomKey: "redux-to-recoil:state",
  _recoilSelectorAtomKey: "redux-to-recoil:atom",
  _recoilSelectorExtraOptions: {}
};
"production" !== process.env.NODE_ENV && Object.freeze(u);

var s,
    l,
    d,
    p,
    f = i({}, u),
    x = function (e) {
  return "production" !== process.env.NODE_ENV && Object.keys(e).forEach(function (e) {
    Object.prototype.hasOwnProperty.call(f, e) || console.warn('SyncReduxToRecoil: Unrecognized option "' + e + '"');
  }), Object.assign(f, e), f;
},
    m = function (e, t) {
  for (var o = e, n = 0; n < t.length; n++) {
    var c = t[n],
        a = c[0],
        i = c[1];
    o = a ? immmpath.set(o, a, i) : i;
  }

  return o;
},
    _ = {
  c: null
},
    y = function () {
  return s && f._reduxStateAtomKey === l || (s = o.atom({
    key: f._reduxStateAtomKey,
    default: null
  }), l = f._reduxStateAtomKey), s;
},
    E = {
  c: null
},
    S = u._recoilSelectorAtomKey,
    R = u._reduxStateAtomKey,
    O = 0,
    h = function (e) {
  return {
    type: "SYNC_CHANGES_FROM_RECOIL",
    payload: e
  };
},
    b = {
  __proto__: null,
  applyChangesToObject: m,
  pendingChangesRef: _,
  getReduxStateAtom: y,
  reduxStoreRef: E,
  resetStateBetweenTests: function () {
    O++, Object.assign(f, {
      _recoilSelectorAtomKey: "" + S + O,
      _reduxStateAtomKey: "" + R + O
    });
  },
  SYNC_CHANGES_FROM_RECOIL: "SYNC_CHANGES_FROM_RECOIL",
  syncChangesFromRecoilAction: h
},
    g = function (e) {
  return e;
},
    v = function () {
  var r = f.readEnabled;
  E.c = t.useStore(), e.useEffect(function () {
    return function () {
      E.c = null;
    };
  }, []);
  var n = y(),
      c = o.useRecoilState(n),
      a = c[0],
      i = c[1],
      u = t.useSelector(g);
  e.useEffect(function () {
    r && u !== a && !_.c && i(u);
  }, [r, _.c, u, a, i]);
},
    N = ["children"],
    C = 0;

exports.SyncReduxToRecoil = function (t) {
  var o = t.children,
      r = function (e, t) {
    if (null == e) return {};
    var o,
        r,
        n = {},
        c = Object.keys(e);

    for (r = 0; r < c.length; r++) t.indexOf(o = c[r]) >= 0 || (n[o] = e[o]);

    return n;
  }(t, N);

  return x(r), v(), "production" !== process.env.NODE_ENV && o && console.warn("Passing children to <SyncReduxToRecoil> is not recommended because they will rerender on *every* Redux change"), a.default.createElement(e.Fragment, null, o);
}, exports._internals = b, exports.atomFromRedux = function (e) {
  var t = "." === e.charAt(0) ? e.substr(1) : e;
  return (d && f._recoilSelectorAtomKey === p || ("production" !== process.env.NODE_ENV && f._recoilSelectorExtraOptions.get && console.warn("options._recoilSelectorExtraOptions.get is not supported: core atomFromRedux functionality cannot be replaced"), "production" !== process.env.NODE_ENV && f._recoilSelectorExtraOptions.set && console.warn("options._recoilSelectorExtraOptions.set is not supported: core atomFromRedux functionality cannot be replaced"), d = o.selectorFamily(i({
    key: "redux-to-recoil:atom"
  }, f._recoilSelectorExtraOptions, {
    get: function (e) {
      return function (t) {
        var o = t.get,
            r = E.c;
        if (!r) throw new Error("Cannot read from Redux because <SyncReduxToRecoil> is not mounted");
        var c = o(y()) || r && r.getState();
        if (null != c) return e ? immmpath.get(c, e) : c;
        "production" === process.env.NODE_ENV || f.readEnabled || console.warn("Cannot access Redux state because reads have never been enabled");
      };
    },
    set: function (e) {
      return function (t, o) {
        var r = t.get,
            n = t.set,
            c = E.c;

        if (f.writeEnabled) {
          if (!c) throw new Error("Cannot dispatch to Redux because <SyncReduxToRecoil> is not mounted");
          var a = r(y()),
              i = [e, o],
              u = [i],
              s = m(a, u);
          n(y(), s), f.batchWrites ? _.c ? _.c.push(i) : (_.c = u, setTimeout(function () {
            _.c ? c.dispatch(h(_.c)) : "production" !== process.env.NODE_ENV && console.warn("Could not dispatch changes from Recoil to Redux: no changes pending. This should not happen."), _.c = null;
          })) : c.dispatch(h(u));
        } else console.error("Cannot dispatch to Redux because writes are disabled");
      };
    }
  })), p = f._recoilSelectorAtomKey), d)(t);
}, exports.defaultOptions = u, exports.options = f, exports.selectorFromReselect = function (e, t) {
  return void 0 === t && (t = {}), C++, "production" !== process.env.NODE_ENV && t.get && console.warn("extraSelectorOptions.get is not supported: core selectorFromReselect functionality cannot be replaced"), o.selector(i({
    key: "redux-to-recoil:selector:" + C + e.name
  }, t, {
    get: function (t) {
      var o = E.c,
          r = (0, t.get)(y()) || o && o.getState();
      return e(r);
    }
  }));
}, exports.setOptions = x, exports.syncChangesFromRecoil = function (e) {
  return function (t, o) {
    return "SYNC_CHANGES_FROM_RECOIL" === o.type ? m(t, o.payload) : e(t, o);
  };
}, exports.useSyncReduxToRecoil = v;
