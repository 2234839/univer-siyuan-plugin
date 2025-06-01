var pi = { env: {} };
/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const W = pi.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Pt = pi.env.NODE_ENV !== "production" ? Object.freeze([]) : [], X = () => {
}, Or = () => !1, Kt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), cn = (e) => e.startsWith("onUpdate:"), Q = Object.assign, io = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Dr = Object.prototype.hasOwnProperty, H = (e, t) => Dr.call(e, t), $ = Array.isArray, ht = (e) => Nn(e) === "[object Map]", xr = (e) => Nn(e) === "[object Set]", P = (e) => typeof e == "function", G = (e) => typeof e == "string", bt = (e) => typeof e == "symbol", J = (e) => e !== null && typeof e == "object", ro = (e) => (J(e) || P(e)) && P(e.then) && P(e.catch), wr = Object.prototype.toString, Nn = (e) => wr.call(e), so = (e) => Nn(e).slice(8, -1), Vr = (e) => Nn(e) === "[object Object]", lo = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, At = /* @__PURE__ */ Nt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Sr = /* @__PURE__ */ Nt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Cr = /-(\w)/g, be = bn(
  (e) => e.replace(Cr, (t, n) => n ? n.toUpperCase() : "")
), Tr = /\B([A-Z])/g, Xe = bn(
  (e) => e.replace(Tr, "-$1").toLowerCase()
), yn = bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), nt = bn(
  (e) => e ? `on${yn(e)}` : ""
), it = (e, t) => !Object.is(e, t), Vt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, fn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, $r = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Io;
const Wt = () => Io || (Io = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function co(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = G(o) ? Mr(o) : co(o);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (G(e) || J(e))
    return e;
}
const Ir = /;(?![^(]*\))/g, Pr = /:([^]+)/, Ar = /\/\*[^]*?\*\//g;
function Mr(e) {
  const t = {};
  return e.replace(Ar, "").split(Ir).forEach((n) => {
    if (n) {
      const o = n.split(Pr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function fo(e) {
  let t = "";
  if (G(e))
    t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const o = fo(e[n]);
      o && (t += o + " ");
    }
  else if (J(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Rr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fr = /* @__PURE__ */ Nt(Rr);
function hi(e) {
  return !!e || e === "";
}
var k = { env: { DEV_MODE: "production" } };
function Fe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ue;
class jr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ue, !t && ue && (this.index = (ue.scopes || (ue.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ue;
      try {
        return ue = this, t();
      } finally {
        ue = n;
      }
    } else k.env.NODE_ENV !== "production" && Fe("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ue, ue = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ue = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Hr() {
  return ue;
}
let L;
const Pn = /* @__PURE__ */ new WeakSet();
class gi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ue && ue.active && ue.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Pn.has(this) && (Pn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || vi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Po(this), Ei(this);
    const t = L, n = ye;
    L = this, ye = !0;
    try {
      return this.fn();
    } finally {
      k.env.NODE_ENV !== "production" && L !== this && Fe(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), mi(this), L = t, ye = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        po(t);
      this.deps = this.depsTail = void 0, Po(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Pn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Wn(this) && this.run();
  }
  get dirty() {
    return Wn(this);
  }
}
let _i = 0, Mt, Rt;
function vi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Rt, Rt = e;
    return;
  }
  e.next = Mt, Mt = e;
}
function uo() {
  _i++;
}
function ao() {
  if (--_i > 0)
    return;
  if (Rt) {
    let t = Rt;
    for (Rt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Mt; ) {
    let t = Mt;
    for (Mt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ei(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function mi(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const i = o.prevDep;
    o.version === -1 ? (o === n && (n = i), po(o), Lr(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i;
  }
  e.deps = t, e.depsTail = n;
}
function Wn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ni(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ni(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === jt) || (e.globalVersion = jt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Wn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = L, o = ye;
  L = e, ye = !0;
  try {
    Ei(e);
    const i = e.fn(e._value);
    (t.version === 0 || it(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    L = n, ye = o, mi(e), e.flags &= -3;
  }
}
function po(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: i } = e;
  if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), k.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      po(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Lr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ye = !0;
const bi = [];
function De() {
  bi.push(ye), ye = !1;
}
function xe() {
  const e = bi.pop();
  ye = e === void 0 ? !0 : e;
}
function Po(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = L;
    L = void 0;
    try {
      t();
    } finally {
      L = n;
    }
  }
}
let jt = 0;
class Ur {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class yi {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, k.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!L || !ye || L === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== L)
      n = this.activeLink = new Ur(L, this), L.deps ? (n.prevDep = L.depsTail, L.depsTail.nextDep = n, L.depsTail = n) : L.deps = L.depsTail = n, Oi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = L.depsTail, n.nextDep = void 0, L.depsTail.nextDep = n, L.depsTail = n, L.deps === n && (L.deps = o);
    }
    return k.env.NODE_ENV !== "production" && L.onTrack && L.onTrack(
      Q(
        {
          effect: L
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, jt++, this.notify(t);
  }
  notify(t) {
    uo();
    try {
      if (k.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Q(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ao();
    }
  }
}
function Oi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Oi(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), k.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Bn = /* @__PURE__ */ new WeakMap(), rt = Symbol(
  k.env.NODE_ENV !== "production" ? "Object iterate" : ""
), qn = Symbol(
  k.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Ht = Symbol(
  k.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function z(e, t, n) {
  if (ye && L) {
    let o = Bn.get(e);
    o || Bn.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || (o.set(n, i = new yi()), i.map = o, i.key = n), k.env.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function Pe(e, t, n, o, i, r) {
  const s = Bn.get(e);
  if (!s) {
    jt++;
    return;
  }
  const c = (u) => {
    u && (k.env.NODE_ENV !== "production" ? u.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: i,
      oldTarget: r
    }) : u.trigger());
  };
  if (uo(), t === "clear")
    s.forEach(c);
  else {
    const u = $(e), g = u && lo(n);
    if (u && n === "length") {
      const p = Number(o);
      s.forEach((a, _) => {
        (_ === "length" || _ === Ht || !bt(_) && _ >= p) && c(a);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && c(s.get(n)), g && c(s.get(Ht)), t) {
        case "add":
          u ? g && c(s.get("length")) : (c(s.get(rt)), ht(e) && c(s.get(qn)));
          break;
        case "delete":
          u || (c(s.get(rt)), ht(e) && c(s.get(qn)));
          break;
        case "set":
          ht(e) && c(s.get(rt));
          break;
      }
  }
  ao();
}
function ut(e) {
  const t = M(e);
  return t === e ? t : (z(t, "iterate", Ht), _e(e) ? t : t.map(ge));
}
function ho(e) {
  return z(e = M(e), "iterate", Ht), e;
}
const Kr = {
  __proto__: null,
  [Symbol.iterator]() {
    return An(this, Symbol.iterator, ge);
  },
  concat(...e) {
    return ut(this).concat(
      ...e.map((t) => $(t) ? ut(t) : t)
    );
  },
  entries() {
    return An(this, "entries", (e) => (e[1] = ge(e[1]), e));
  },
  every(e, t) {
    return Le(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Le(this, "filter", e, t, (n) => n.map(ge), arguments);
  },
  find(e, t) {
    return Le(this, "find", e, t, ge, arguments);
  },
  findIndex(e, t) {
    return Le(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Le(this, "findLast", e, t, ge, arguments);
  },
  findLastIndex(e, t) {
    return Le(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Le(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Mn(this, "includes", e);
  },
  indexOf(...e) {
    return Mn(this, "indexOf", e);
  },
  join(e) {
    return ut(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Mn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Le(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return St(this, "pop");
  },
  push(...e) {
    return St(this, "push", e);
  },
  reduce(e, ...t) {
    return Ao(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ao(this, "reduceRight", e, t);
  },
  shift() {
    return St(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Le(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return St(this, "splice", e);
  },
  toReversed() {
    return ut(this).toReversed();
  },
  toSorted(e) {
    return ut(this).toSorted(e);
  },
  toSpliced(...e) {
    return ut(this).toSpliced(...e);
  },
  unshift(...e) {
    return St(this, "unshift", e);
  },
  values() {
    return An(this, "values", ge);
  }
};
function An(e, t, n) {
  const o = ho(e), i = o[t]();
  return o !== e && !_e(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.value && (r.value = n(r.value)), r;
  }), i;
}
const Wr = Array.prototype;
function Le(e, t, n, o, i, r) {
  const s = ho(e), c = s !== e && !_e(e), u = s[t];
  if (u !== Wr[t]) {
    const a = u.apply(e, r);
    return c ? ge(a) : a;
  }
  let g = n;
  s !== e && (c ? g = function(a, _) {
    return n.call(this, ge(a), _, e);
  } : n.length > 2 && (g = function(a, _) {
    return n.call(this, a, _, e);
  }));
  const p = u.call(s, g, o);
  return c && i ? i(p) : p;
}
function Ao(e, t, n, o) {
  const i = ho(e);
  let r = n;
  return i !== e && (_e(e) ? n.length > 3 && (r = function(s, c, u) {
    return n.call(this, s, c, u, e);
  }) : r = function(s, c, u) {
    return n.call(this, s, ge(c), u, e);
  }), i[t](r, ...o);
}
function Mn(e, t, n) {
  const o = M(e);
  z(o, "iterate", Ht);
  const i = o[t](...n);
  return (i === -1 || i === !1) && un(n[0]) ? (n[0] = M(n[0]), o[t](...n)) : i;
}
function St(e, t, n = []) {
  De(), uo();
  const o = M(e)[t].apply(e, n);
  return ao(), xe(), o;
}
const Br = /* @__PURE__ */ Nt("__proto__,__v_isRef,__isVue"), Di = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(bt)
);
function qr(e) {
  bt(e) || (e = String(e));
  const t = M(this);
  return z(t, "has", e), t.hasOwnProperty(e);
}
class xi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (i ? r ? $i : Ti : r ? Ci : Si).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = $(t);
    if (!i) {
      let u;
      if (s && (u = Kr[n]))
        return u;
      if (n === "hasOwnProperty")
        return qr;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Z(t) ? t : o
    );
    return (bt(n) ? Di.has(n) : Br(n)) || (i || z(t, "get", n), r) ? c : Z(c) ? s && lo(n) ? c : c.value : J(c) ? i ? Ii(c) : go(c) : c;
  }
}
class wi extends xi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let r = t[n];
    if (!this._isShallow) {
      const u = Ze(r);
      if (!_e(o) && !Ze(o) && (r = M(r), o = M(o)), !$(t) && Z(r) && !Z(o))
        return u ? !1 : (r.value = o, !0);
    }
    const s = $(t) && lo(n) ? Number(n) < t.length : H(t, n), c = Reflect.set(
      t,
      n,
      o,
      Z(t) ? t : i
    );
    return t === M(i) && (s ? it(o, r) && Pe(t, "set", n, o, r) : Pe(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = H(t, n), i = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Pe(t, "delete", n, void 0, i), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!bt(n) || !Di.has(n)) && z(t, "has", n), o;
  }
  ownKeys(t) {
    return z(
      t,
      "iterate",
      $(t) ? "length" : rt
    ), Reflect.ownKeys(t);
  }
}
class Vi extends xi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return k.env.NODE_ENV !== "production" && Fe(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return k.env.NODE_ENV !== "production" && Fe(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Jr = /* @__PURE__ */ new wi(), kr = /* @__PURE__ */ new Vi(), Yr = /* @__PURE__ */ new wi(!0), Gr = /* @__PURE__ */ new Vi(!0), Jn = (e) => e, zt = (e) => Reflect.getPrototypeOf(e);
function zr(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, r = M(i), s = ht(r), c = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, g = i[e](...o), p = n ? Jn : t ? kn : ge;
    return !t && z(
      r,
      "iterate",
      u ? qn : rt
    ), {
      // iterator protocol
      next() {
        const { value: a, done: _ } = g.next();
        return _ ? { value: a, done: _ } : {
          value: c ? [p(a[0]), p(a[1])] : p(a),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Xt(e) {
  return function(...t) {
    if (k.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Fe(
        `${yn(e)} operation ${n}failed: target is readonly.`,
        M(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xr(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, s = M(r), c = M(i);
      e || (it(i, c) && z(s, "get", i), z(s, "get", c));
      const { has: u } = zt(s), g = t ? Jn : e ? kn : ge;
      if (u.call(s, i))
        return g(r.get(i));
      if (u.call(s, c))
        return g(r.get(c));
      r !== s && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && z(M(i), "iterate", rt), Reflect.get(i, "size", i);
    },
    has(i) {
      const r = this.__v_raw, s = M(r), c = M(i);
      return e || (it(i, c) && z(s, "has", i), z(s, "has", c)), i === c ? r.has(i) : r.has(i) || r.has(c);
    },
    forEach(i, r) {
      const s = this, c = s.__v_raw, u = M(c), g = t ? Jn : e ? kn : ge;
      return !e && z(u, "iterate", rt), c.forEach((p, a) => i.call(r, g(p), g(a), s));
    }
  };
  return Q(
    n,
    e ? {
      add: Xt("add"),
      set: Xt("set"),
      delete: Xt("delete"),
      clear: Xt("clear")
    } : {
      add(i) {
        !t && !_e(i) && !Ze(i) && (i = M(i));
        const r = M(this);
        return zt(r).has.call(r, i) || (r.add(i), Pe(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !_e(r) && !Ze(r) && (r = M(r));
        const s = M(this), { has: c, get: u } = zt(s);
        let g = c.call(s, i);
        g ? k.env.NODE_ENV !== "production" && Mo(s, c, i) : (i = M(i), g = c.call(s, i));
        const p = u.call(s, i);
        return s.set(i, r), g ? it(r, p) && Pe(s, "set", i, r, p) : Pe(s, "add", i, r), this;
      },
      delete(i) {
        const r = M(this), { has: s, get: c } = zt(r);
        let u = s.call(r, i);
        u ? k.env.NODE_ENV !== "production" && Mo(r, s, i) : (i = M(i), u = s.call(r, i));
        const g = c ? c.call(r, i) : void 0, p = r.delete(i);
        return u && Pe(r, "delete", i, void 0, g), p;
      },
      clear() {
        const i = M(this), r = i.size !== 0, s = k.env.NODE_ENV !== "production" ? ht(i) ? new Map(i) : new Set(i) : void 0, c = i.clear();
        return r && Pe(
          i,
          "clear",
          void 0,
          void 0,
          s
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = zr(i, e, t);
  }), n;
}
function On(e, t) {
  const n = Xr(e, t);
  return (o, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    H(n, i) && i in o ? n : o,
    i,
    r
  );
}
const Zr = {
  get: /* @__PURE__ */ On(!1, !1)
}, Qr = {
  get: /* @__PURE__ */ On(!1, !0)
}, es = {
  get: /* @__PURE__ */ On(!0, !1)
}, ts = {
  get: /* @__PURE__ */ On(!0, !0)
};
function Mo(e, t, n) {
  const o = M(n);
  if (o !== n && t.call(e, o)) {
    const i = so(e);
    Fe(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Si = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), $i = /* @__PURE__ */ new WeakMap();
function ns(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function os(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ns(so(e));
}
function go(e) {
  return Ze(e) ? e : Dn(
    e,
    !1,
    Jr,
    Zr,
    Si
  );
}
function is(e) {
  return Dn(
    e,
    !1,
    Yr,
    Qr,
    Ci
  );
}
function Ii(e) {
  return Dn(
    e,
    !0,
    kr,
    es,
    Ti
  );
}
function Me(e) {
  return Dn(
    e,
    !0,
    Gr,
    ts,
    $i
  );
}
function Dn(e, t, n, o, i) {
  if (!J(e))
    return k.env.NODE_ENV !== "production" && Fe(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = os(e);
  if (r === 0)
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const c = new Proxy(
    e,
    r === 2 ? o : n
  );
  return i.set(e, c), c;
}
function gt(e) {
  return Ze(e) ? gt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
function _e(e) {
  return !!(e && e.__v_isShallow);
}
function un(e) {
  return e ? !!e.__v_raw : !1;
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function rs(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && fn(e, "__v_skip", !0), e;
}
const ge = (e) => J(e) ? go(e) : e, kn = (e) => J(e) ? Ii(e) : e;
function Z(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ss(e) {
  return Z(e) ? e.value : e;
}
const ls = {
  get: (e, t, n) => t === "__v_raw" ? e : ss(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return Z(i) && !Z(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Pi(e) {
  return gt(e) ? e : new Proxy(e, ls);
}
class cs {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new yi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = jt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    L !== this)
      return vi(this, !0), !0;
  }
  get value() {
    const t = k.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Ni(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : k.env.NODE_ENV !== "production" && Fe("Write operation failed: computed value is readonly");
  }
}
function fs(e, t, n = !1) {
  let o, i;
  return P(e) ? o = e : (o = e.get, i = e.set), new cs(o, i, n);
}
const Zt = {}, an = /* @__PURE__ */ new WeakMap();
let ot;
function us(e, t = !1, n = ot) {
  if (n) {
    let o = an.get(n);
    o || an.set(n, o = []), o.push(e);
  } else k.env.NODE_ENV !== "production" && !t && Fe(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function as(e, t, n = W) {
  const { immediate: o, deep: i, once: r, scheduler: s, augmentJob: c, call: u } = n, g = (T) => {
    (n.onWarn || Fe)(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (T) => i ? T : _e(T) || i === !1 || i === 0 ? Ye(T, 1) : Ye(T);
  let a, _, w, S, A = !1, ne = !1;
  if (Z(e) ? (_ = () => e.value, A = _e(e)) : gt(e) ? (_ = () => p(e), A = !0) : $(e) ? (ne = !0, A = e.some((T) => gt(T) || _e(T)), _ = () => e.map((T) => {
    if (Z(T))
      return T.value;
    if (gt(T))
      return p(T);
    if (P(T))
      return u ? u(T, 2) : T();
    k.env.NODE_ENV !== "production" && g(T);
  })) : P(e) ? t ? _ = u ? () => u(e, 2) : e : _ = () => {
    if (w) {
      De();
      try {
        w();
      } finally {
        xe();
      }
    }
    const T = ot;
    ot = a;
    try {
      return u ? u(e, 3, [S]) : e(S);
    } finally {
      ot = T;
    }
  } : (_ = X, k.env.NODE_ENV !== "production" && g(e)), t && i) {
    const T = _, ee = i === !0 ? 1 / 0 : i;
    _ = () => Ye(T(), ee);
  }
  const B = Hr(), Y = () => {
    a.stop(), B && B.active && io(B.effects, a);
  };
  if (r && t) {
    const T = t;
    t = (...ee) => {
      T(...ee), Y();
    };
  }
  let U = ne ? new Array(e.length).fill(Zt) : Zt;
  const de = (T) => {
    if (!(!(a.flags & 1) || !a.dirty && !T))
      if (t) {
        const ee = a.run();
        if (i || A || (ne ? ee.some((ve, oe) => it(ve, U[oe])) : it(ee, U))) {
          w && w();
          const ve = ot;
          ot = a;
          try {
            const oe = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              U === Zt ? void 0 : ne && U[0] === Zt ? [] : U,
              S
            ];
            U = ee, u ? u(t, 3, oe) : (
              // @ts-expect-error
              t(...oe)
            );
          } finally {
            ot = ve;
          }
        }
      } else
        a.run();
  };
  return c && c(de), a = new gi(_), a.scheduler = s ? () => s(de, !1) : de, S = (T) => us(T, !1, a), w = a.onStop = () => {
    const T = an.get(a);
    if (T) {
      if (u)
        u(T, 4);
      else
        for (const ee of T) ee();
      an.delete(a);
    }
  }, k.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? de(!0) : U = a.run() : s ? s(de.bind(null, !0), !0) : a.run(), Y.pause = a.pause.bind(a), Y.resume = a.resume.bind(a), Y.stop = Y, Y;
}
function Ye(e, t = 1 / 0, n) {
  if (t <= 0 || !J(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Z(e))
    Ye(e.value, t, n);
  else if ($(e))
    for (let o = 0; o < e.length; o++)
      Ye(e[o], t, n);
  else if (xr(e) || ht(e))
    e.forEach((o) => {
      Ye(o, t, n);
    });
  else if (Vr(e)) {
    for (const o in e)
      Ye(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Ye(e[o], t, n);
  }
  return e;
}
var d = { env: { DEV_MODE: "production" } };
const st = [];
function Qt(e) {
  st.push(e);
}
function en() {
  st.pop();
}
let Rn = !1;
function O(e, ...t) {
  if (Rn) return;
  Rn = !0, De();
  const n = st.length ? st[st.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = ds();
  if (o)
    yt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var s, c;
          return (c = (s = r.toString) == null ? void 0 : s.call(r)) != null ? c : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: r }) => `at <${Sn(n, r.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    i.length && r.push(`
`, ...ps(i)), console.warn(...r);
  }
  xe(), Rn = !1;
}
function ds() {
  let e = st[st.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function ps(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...hs(n));
  }), t;
}
function hs({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${Sn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [i, ...gs(e.props), r] : [i + r];
}
function gs(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Ai(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ai(e, t, n) {
  return G(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Z(t) ? (t = Ai(e, M(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : P(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = M(t), n ? t : [`${e}=`, t]);
}
const _o = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function yt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    Bt(i, t, n);
  }
}
function je(e, t, n, o) {
  if (P(e)) {
    const i = yt(e, t, n, o);
    return i && ro(i) && i.catch((r) => {
      Bt(r, t, n);
    }), i;
  }
  if ($(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(je(e[r], t, n, o));
    return i;
  } else d.env.NODE_ENV !== "production" && O(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Bt(e, t, n, o = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || W;
  if (t) {
    let c = t.parent;
    const u = t.proxy, g = d.env.NODE_ENV !== "production" ? _o[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const p = c.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, u, g) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      De(), yt(r, null, 10, [
        e,
        u,
        g
      ]), xe();
      return;
    }
  }
  _s(e, n, i, o, s);
}
function _s(e, t, n, o = !0, i = !1) {
  if (d.env.NODE_ENV !== "production") {
    const r = _o[t];
    if (n && Qt(n), O(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && en(), o)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const se = [];
let $e = -1;
const _t = [];
let Je = null, pt = 0;
const Mi = /* @__PURE__ */ Promise.resolve();
let dn = null;
const vs = 100;
function Es(e) {
  const t = dn || Mi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ms(e) {
  let t = $e + 1, n = se.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = se[o], r = Lt(i);
    r < e || r === e && i.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function xn(e) {
  if (!(e.flags & 1)) {
    const t = Lt(e), n = se[se.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Lt(n) ? se.push(e) : se.splice(ms(t), 0, e), e.flags |= 1, Ri();
  }
}
function Ri() {
  dn || (dn = Mi.then(Hi));
}
function Fi(e) {
  $(e) ? _t.push(...e) : Je && e.id === -1 ? Je.splice(pt + 1, 0, e) : e.flags & 1 || (_t.push(e), e.flags |= 1), Ri();
}
function Ro(e, t, n = $e + 1) {
  for (d.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < se.length; n++) {
    const o = se[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || d.env.NODE_ENV !== "production" && vo(t, o))
        continue;
      se.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function ji(e) {
  if (_t.length) {
    const t = [...new Set(_t)].sort(
      (n, o) => Lt(n) - Lt(o)
    );
    if (_t.length = 0, Je) {
      Je.push(...t);
      return;
    }
    for (Je = t, d.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), pt = 0; pt < Je.length; pt++) {
      const n = Je[pt];
      d.env.NODE_ENV !== "production" && vo(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Je = null, pt = 0;
  }
}
const Lt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Hi(e) {
  d.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = d.env.NODE_ENV !== "production" ? (n) => vo(e, n) : X;
  try {
    for ($e = 0; $e < se.length; $e++) {
      const n = se[$e];
      if (n && !(n.flags & 8)) {
        if (d.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), yt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; $e < se.length; $e++) {
      const n = se[$e];
      n && (n.flags &= -2);
    }
    $e = -1, se.length = 0, ji(e), dn = null, (se.length || _t.length) && Hi(e);
  }
}
function vo(e, t) {
  const n = e.get(t) || 0;
  if (n > vs) {
    const o = t.i, i = o && Er(o.type);
    return Bt(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Re = !1;
const tn = /* @__PURE__ */ new Map();
d.env.NODE_ENV !== "production" && (Wt().__VUE_HMR_RUNTIME__ = {
  createRecord: Fn(Li),
  rerender: Fn(ys),
  reload: Fn(Os)
});
const ct = /* @__PURE__ */ new Map();
function Ns(e) {
  const t = e.type.__hmrId;
  let n = ct.get(t);
  n || (Li(t, e.type), n = ct.get(t)), n.instances.add(e);
}
function bs(e) {
  ct.get(e.type.__hmrId).instances.delete(e);
}
function Li(e, t) {
  return ct.has(e) ? !1 : (ct.set(e, {
    initialDef: pn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function pn(e) {
  return mr(e) ? e.__vccOpts : e;
}
function ys(e, t) {
  const n = ct.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, pn(o.type).render = t), o.renderCache = [], Re = !0, o.update(), Re = !1;
  }));
}
function Os(e, t) {
  const n = ct.get(e);
  if (!n) return;
  t = pn(t), Fo(n.initialDef, t);
  const o = [...n.instances];
  for (let i = 0; i < o.length; i++) {
    const r = o[i], s = pn(r.type);
    let c = tn.get(s);
    c || (s !== n.initialDef && Fo(s, t), tn.set(s, c = /* @__PURE__ */ new Set())), c.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (c.add(r), r.ceReload(t.styles), c.delete(r)) : r.parent ? xn(() => {
      Re = !0, r.parent.update(), Re = !1, c.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(s);
  }
  Fi(() => {
    tn.clear();
  });
}
function Fo(e, t) {
  Q(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Fn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ae, $t = [], Yn = !1;
function qt(e, ...t) {
  Ae ? Ae.emit(e, ...t) : Yn || $t.push({ event: e, args: t });
}
function Ui(e, t) {
  var n, o;
  Ae = e, Ae ? (Ae.enabled = !0, $t.forEach(({ event: i, args: r }) => Ae.emit(i, ...r)), $t = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Ui(r, t);
  }), setTimeout(() => {
    Ae || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Yn = !0, $t = []);
  }, 3e3)) : (Yn = !0, $t = []);
}
function Ds(e, t) {
  qt("app:init", e, t, {
    Fragment: Ie,
    Text: Jt,
    Comment: Oe,
    Static: rn
  });
}
function xs(e) {
  qt("app:unmount", e);
}
const ws = /* @__PURE__ */ Eo(
  "component:added"
  /* COMPONENT_ADDED */
), Ki = /* @__PURE__ */ Eo(
  "component:updated"
  /* COMPONENT_UPDATED */
), Vs = /* @__PURE__ */ Eo(
  "component:removed"
  /* COMPONENT_REMOVED */
), Ss = (e) => {
  Ae && typeof Ae.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ae.cleanupBuffer(e) && Vs(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Eo(e) {
  return (t) => {
    qt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Cs = /* @__PURE__ */ Wi(
  "perf:start"
  /* PERFORMANCE_START */
), Ts = /* @__PURE__ */ Wi(
  "perf:end"
  /* PERFORMANCE_END */
);
function Wi(e) {
  return (t, n, o) => {
    qt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function $s(e, t, n) {
  qt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ae = null, Bi = null;
function hn(e) {
  const t = ae;
  return ae = e, Bi = e && e.type.__scopeId || null, t;
}
function Is(e, t = ae, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && Go(-1);
    const r = hn(t);
    let s;
    try {
      s = e(...i);
    } finally {
      hn(r), o._d && Go(1);
    }
    return d.env.NODE_ENV !== "production" && Ki(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function qi(e) {
  Sr(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function et(e, t, n, o) {
  const i = e.dirs, r = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const c = i[s];
    r && (c.oldValue = r[s].value);
    let u = c.dir[o];
    u && (De(), je(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), xe());
  }
}
const Ps = Symbol("_vte"), As = (e) => e.__isTeleport;
function mo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, mo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ji(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Ms = /* @__PURE__ */ new WeakSet();
function gn(e, t, n, o, i = !1) {
  if ($(e)) {
    e.forEach(
      (S, A) => gn(
        S,
        t && ($(t) ? t[A] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (Ft(o) && !i) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && gn(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? Vo(o.component) : o.el, s = i ? null : r, { i: c, r: u } = e;
  if (d.env.NODE_ENV !== "production" && !c) {
    O(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const g = t && t.r, p = c.refs === W ? c.refs = {} : c.refs, a = c.setupState, _ = M(a), w = a === W ? () => !1 : (S) => d.env.NODE_ENV !== "production" && (H(_, S) && !Z(_[S]) && O(
    `Template ref "${S}" used on a non-ref value. It will not work in the production build.`
  ), Ms.has(_[S])) ? !1 : H(_, S);
  if (g != null && g !== u && (G(g) ? (p[g] = null, w(g) && (a[g] = null)) : Z(g) && (g.value = null)), P(u))
    yt(u, c, 12, [s, p]);
  else {
    const S = G(u), A = Z(u);
    if (S || A) {
      const ne = () => {
        if (e.f) {
          const B = S ? w(u) ? a[u] : p[u] : u.value;
          i ? $(B) && io(B, r) : $(B) ? B.includes(r) || B.push(r) : S ? (p[u] = [r], w(u) && (a[u] = p[u])) : (u.value = [r], e.k && (p[e.k] = u.value));
        } else S ? (p[u] = s, w(u) && (a[u] = s)) : A ? (u.value = s, e.k && (p[e.k] = s)) : d.env.NODE_ENV !== "production" && O("Invalid template ref type:", u, `(${typeof u})`);
      };
      s ? (ne.id = -1, he(ne, n)) : ne();
    } else d.env.NODE_ENV !== "production" && O("Invalid template ref type:", u, `(${typeof u})`);
  }
}
Wt().requestIdleCallback;
Wt().cancelIdleCallback;
const Ft = (e) => !!e.type.__asyncLoader, No = (e) => e.type.__isKeepAlive;
function Rs(e, t) {
  ki(e, "a", t);
}
function Fs(e, t) {
  ki(e, "da", t);
}
function ki(e, t, n = te) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (wn(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      No(i.parent.vnode) && js(o, t, n, i), i = i.parent;
  }
}
function js(e, t, n, o) {
  const i = wn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Yi(() => {
    io(o[t], i);
  }, n);
}
function wn(e, t, n = te, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      De();
      const c = kt(n), u = je(t, n, e, s);
      return c(), xe(), u;
    });
    return o ? i.unshift(r) : i.push(r), r;
  } else if (d.env.NODE_ENV !== "production") {
    const i = nt(_o[e].replace(/ hook$/, ""));
    O(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ke = (e) => (t, n = te) => {
  (!Ut || e === "sp") && wn(e, (...o) => t(...o), n);
}, Hs = Ke("bm"), Ls = Ke("m"), Us = Ke(
  "bu"
), Ks = Ke("u"), Ws = Ke(
  "bum"
), Yi = Ke("um"), Bs = Ke(
  "sp"
), qs = Ke("rtg"), Js = Ke("rtc");
function ks(e, t = te) {
  wn("ec", e, t);
}
const Ys = Symbol.for("v-ndc"), Gn = (e) => e ? _r(e) ? Vo(e) : Gn(e.parent) : null, lt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Q(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => d.env.NODE_ENV !== "production" ? Me(e.props) : e.props,
    $attrs: (e) => d.env.NODE_ENV !== "production" ? Me(e.attrs) : e.attrs,
    $slots: (e) => d.env.NODE_ENV !== "production" ? Me(e.slots) : e.slots,
    $refs: (e) => d.env.NODE_ENV !== "production" ? Me(e.refs) : e.refs,
    $parent: (e) => Gn(e.parent),
    $root: (e) => Gn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Xi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      xn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Es.bind(e.proxy)),
    $watch: (e) => Vl.bind(e)
  })
), bo = (e) => e === "_" || e === "$", jn = (e, t) => e !== W && !e.__isScriptSetup && H(e, t), Gi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: i, props: r, accessCache: s, type: c, appContext: u } = e;
    if (d.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let g;
    if (t[0] !== "$") {
      const w = s[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return o[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (jn(o, t))
          return s[t] = 1, o[t];
        if (i !== W && H(i, t))
          return s[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (g = e.propsOptions[0]) && H(g, t)
        )
          return s[t] = 3, r[t];
        if (n !== W && H(n, t))
          return s[t] = 4, n[t];
        zn && (s[t] = 0);
      }
    }
    const p = lt[t];
    let a, _;
    if (p)
      return t === "$attrs" ? (z(e.attrs, "get", ""), d.env.NODE_ENV !== "production" && En()) : d.env.NODE_ENV !== "production" && t === "$slots" && z(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (a = c.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== W && H(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      _ = u.config.globalProperties, H(_, t)
    )
      return _[t];
    d.env.NODE_ENV !== "production" && ae && (!G(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== W && bo(t[0]) && H(i, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ae && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: r } = e;
    return jn(i, t) ? (i[t] = n, !0) : d.env.NODE_ENV !== "production" && i.__isScriptSetup && H(i, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== W && H(o, t) ? (o[t] = n, !0) : H(e.props, t) ? (d.env.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (d.env.NODE_ENV !== "production" && O(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (d.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: i, propsOptions: r }
  }, s) {
    let c;
    return !!n[s] || e !== W && H(e, s) || jn(t, s) || (c = r[0]) && H(c, s) || H(o, s) || H(lt, s) || H(i.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
d.env.NODE_ENV !== "production" && (Gi.ownKeys = (e) => (O(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Gs(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(lt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => lt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: X
    });
  }), t;
}
function zs(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: X
    });
  });
}
function Xs(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(M(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (bo(o[0])) {
        O(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: X
      });
    }
  });
}
function jo(e) {
  return $(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Zs() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? O(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let zn = !0;
function Qs(e) {
  const t = Xi(e), n = e.proxy, o = e.ctx;
  zn = !1, t.beforeCreate && Ho(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: s,
    watch: c,
    provide: u,
    inject: g,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: _,
    beforeUpdate: w,
    updated: S,
    activated: A,
    deactivated: ne,
    beforeDestroy: B,
    beforeUnmount: Y,
    destroyed: U,
    unmounted: de,
    render: T,
    renderTracked: ee,
    renderTriggered: ve,
    errorCaptured: oe,
    serverPrefetch: le,
    // public API
    expose: He,
    inheritAttrs: We,
    // assets
    components: Ee,
    directives: Yt,
    filters: So
  } = t, Be = d.env.NODE_ENV !== "production" ? Zs() : null;
  if (d.env.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const R in F)
        Be("Props", R);
  }
  if (g && el(g, o, Be), s)
    for (const F in s) {
      const R = s[F];
      P(R) ? (d.env.NODE_ENV !== "production" ? Object.defineProperty(o, F, {
        value: R.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[F] = R.bind(n), d.env.NODE_ENV !== "production" && Be("Methods", F)) : d.env.NODE_ENV !== "production" && O(
        `Method "${F}" has type "${typeof R}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    d.env.NODE_ENV !== "production" && !P(i) && O(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const F = i.call(n, n);
    if (d.env.NODE_ENV !== "production" && ro(F) && O(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !J(F))
      d.env.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = go(F), d.env.NODE_ENV !== "production")
      for (const R in F)
        Be("Data", R), bo(R[0]) || Object.defineProperty(o, R, {
          configurable: !0,
          enumerable: !0,
          get: () => F[R],
          set: X
        });
  }
  if (zn = !0, r)
    for (const F in r) {
      const R = r[F], we = P(R) ? R.bind(n, n) : P(R.get) ? R.get.bind(n, n) : X;
      d.env.NODE_ENV !== "production" && we === X && O(`Computed property "${F}" has no getter.`);
      const Tn = !P(R) && P(R.set) ? R.set.bind(n) : d.env.NODE_ENV !== "production" ? () => {
        O(
          `Write operation failed: computed property "${F}" is readonly.`
        );
      } : X, Ot = Zl({
        get: we,
        set: Tn
      });
      Object.defineProperty(o, F, {
        enumerable: !0,
        configurable: !0,
        get: () => Ot.value,
        set: (ft) => Ot.value = ft
      }), d.env.NODE_ENV !== "production" && Be("Computed", F);
    }
  if (c)
    for (const F in c)
      zi(c[F], o, n, F);
  if (u) {
    const F = P(u) ? u.call(n) : u;
    Reflect.ownKeys(F).forEach((R) => {
      sl(R, F[R]);
    });
  }
  p && Ho(p, e, "c");
  function ce(F, R) {
    $(R) ? R.forEach((we) => F(we.bind(n))) : R && F(R.bind(n));
  }
  if (ce(Hs, a), ce(Ls, _), ce(Us, w), ce(Ks, S), ce(Rs, A), ce(Fs, ne), ce(ks, oe), ce(Js, ee), ce(qs, ve), ce(Ws, Y), ce(Yi, de), ce(Bs, le), $(He))
    if (He.length) {
      const F = e.exposed || (e.exposed = {});
      He.forEach((R) => {
        Object.defineProperty(F, R, {
          get: () => n[R],
          set: (we) => n[R] = we
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === X && (e.render = T), We != null && (e.inheritAttrs = We), Ee && (e.components = Ee), Yt && (e.directives = Yt), le && Ji(e);
}
function el(e, t, n = X) {
  $(e) && (e = Xn(e));
  for (const o in e) {
    const i = e[o];
    let r;
    J(i) ? "default" in i ? r = nn(
      i.from || o,
      i.default,
      !0
    ) : r = nn(i.from || o) : r = nn(i), Z(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[o] = r, d.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Ho(e, t, n) {
  je(
    $(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zi(e, t, n, o) {
  let i = o.includes(".") ? fr(n, o) : () => n[o];
  if (G(e)) {
    const r = t[e];
    P(r) ? Ln(i, r) : d.env.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, r);
  } else if (P(e))
    Ln(i, e.bind(n));
  else if (J(e))
    if ($(e))
      e.forEach((r) => zi(r, t, n, o));
    else {
      const r = P(e.handler) ? e.handler.bind(n) : t[e.handler];
      P(r) ? Ln(i, r, e) : d.env.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else d.env.NODE_ENV !== "production" && O(`Invalid watch option: "${o}"`, e);
}
function Xi(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !i.length && !n && !o ? u = t : (u = {}, i.length && i.forEach(
    (g) => _n(u, g, s, !0)
  ), _n(u, t, s)), J(t) && r.set(t, u), u;
}
function _n(e, t, n, o = !1) {
  const { mixins: i, extends: r } = t;
  r && _n(e, r, n, !0), i && i.forEach(
    (s) => _n(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      d.env.NODE_ENV !== "production" && O(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = tl[s] || n && n[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const tl = {
  data: Lo,
  props: Uo,
  emits: Uo,
  // objects
  methods: It,
  computed: It,
  // lifecycle
  beforeCreate: re,
  created: re,
  beforeMount: re,
  mounted: re,
  beforeUpdate: re,
  updated: re,
  beforeDestroy: re,
  beforeUnmount: re,
  destroyed: re,
  unmounted: re,
  activated: re,
  deactivated: re,
  errorCaptured: re,
  serverPrefetch: re,
  // assets
  components: It,
  directives: It,
  // watch
  watch: ol,
  // provide / inject
  provide: Lo,
  inject: nl
};
function Lo(e, t) {
  return t ? e ? function() {
    return Q(
      P(e) ? e.call(this, this) : e,
      P(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function nl(e, t) {
  return It(Xn(e), Xn(t));
}
function Xn(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function re(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function It(e, t) {
  return e ? Q(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Uo(e, t) {
  return e ? $(e) && $(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Q(
    /* @__PURE__ */ Object.create(null),
    jo(e),
    jo(t ?? {})
  ) : t;
}
function ol(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Q(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = re(e[o], t[o]);
  return n;
}
function Zi() {
  return {
    app: null,
    config: {
      isNativeTag: Or,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let il = 0;
function rl(e, t) {
  return function(o, i = null) {
    P(o) || (o = Q({}, o)), i != null && !J(i) && (d.env.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), i = null);
    const r = Zi(), s = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const g = r.app = {
      _uid: il++,
      _component: o,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Qo,
      get config() {
        return r.config;
      },
      set config(p) {
        d.env.NODE_ENV !== "production" && O(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return s.has(p) ? d.env.NODE_ENV !== "production" && O("Plugin has already been applied to target app.") : p && P(p.install) ? (s.add(p), p.install(g, ...a)) : P(p) ? (s.add(p), p(g, ...a)) : d.env.NODE_ENV !== "production" && O(
          'A plugin must either be a function or an object with an "install" function.'
        ), g;
      },
      mixin(p) {
        return r.mixins.includes(p) ? d.env.NODE_ENV !== "production" && O(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), g;
      },
      component(p, a) {
        return d.env.NODE_ENV !== "production" && no(p, r.config), a ? (d.env.NODE_ENV !== "production" && r.components[p] && O(`Component "${p}" has already been registered in target app.`), r.components[p] = a, g) : r.components[p];
      },
      directive(p, a) {
        return d.env.NODE_ENV !== "production" && qi(p), a ? (d.env.NODE_ENV !== "production" && r.directives[p] && O(`Directive "${p}" has already been registered in target app.`), r.directives[p] = a, g) : r.directives[p];
      },
      mount(p, a, _) {
        if (u)
          d.env.NODE_ENV !== "production" && O(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          d.env.NODE_ENV !== "production" && p.__vue_app__ && O(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const w = g._ceVNode || Ne(o, i);
          return w.appContext = r, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), d.env.NODE_ENV !== "production" && (r.reload = () => {
            const S = Qe(w);
            S.el = null, e(S, p, _);
          }), e(w, p, _), u = !0, g._container = p, p.__vue_app__ = g, d.env.NODE_ENV !== "production" && (g._instance = w.component, Ds(g, Qo)), Vo(w.component);
        }
      },
      onUnmount(p) {
        d.env.NODE_ENV !== "production" && typeof p != "function" && O(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), c.push(p);
      },
      unmount() {
        u ? (je(
          c,
          g._instance,
          16
        ), e(null, g._container), d.env.NODE_ENV !== "production" && (g._instance = null, xs(g)), delete g._container.__vue_app__) : d.env.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return d.env.NODE_ENV !== "production" && p in r.provides && (H(r.provides, p) ? O(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ) : O(
          `App already provides property with key "${String(p)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[p] = a, g;
      },
      runWithContext(p) {
        const a = vt;
        vt = g;
        try {
          return p();
        } finally {
          vt = a;
        }
      }
    };
    return g;
  };
}
let vt = null;
function sl(e, t) {
  if (!te)
    d.env.NODE_ENV !== "production" && O("provide() can only be used inside setup().");
  else {
    let n = te.provides;
    const o = te.parent && te.parent.provides;
    o === n && (n = te.provides = Object.create(o)), n[e] = t;
  }
}
function nn(e, t, n = !1) {
  const o = te || ae;
  if (o || vt) {
    let i = vt ? vt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && P(t) ? t.call(o && o.proxy) : t;
    d.env.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else d.env.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
const Qi = {}, er = () => Object.create(Qi), tr = (e) => Object.getPrototypeOf(e) === Qi;
function ll(e, t, n, o = !1) {
  const i = {}, r = er();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), nr(e, t, i, r);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  d.env.NODE_ENV !== "production" && ir(t || {}, i, e), n ? e.props = o ? i : is(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function cl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function fl(e, t, n, o) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, c = M(i), [u] = e.propsOptions;
  let g = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(d.env.NODE_ENV !== "production" && cl(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let _ = p[a];
        if (Vn(e.emitsOptions, _))
          continue;
        const w = t[_];
        if (u)
          if (H(r, _))
            w !== r[_] && (r[_] = w, g = !0);
          else {
            const S = be(_);
            i[S] = Zn(
              u,
              c,
              S,
              w,
              e,
              !1
            );
          }
        else
          w !== r[_] && (r[_] = w, g = !0);
      }
    }
  } else {
    nr(e, t, i, r) && (g = !0);
    let p;
    for (const a in c)
      (!t || // for camelCase
      !H(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Xe(a)) === a || !H(t, p))) && (u ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (i[a] = Zn(
        u,
        c,
        a,
        void 0,
        e,
        !0
      )) : delete i[a]);
    if (r !== c)
      for (const a in r)
        (!t || !H(t, a)) && (delete r[a], g = !0);
  }
  g && Pe(e.attrs, "set", ""), d.env.NODE_ENV !== "production" && ir(t || {}, i, e);
}
function nr(e, t, n, o) {
  const [i, r] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let u in t) {
      if (At(u))
        continue;
      const g = t[u];
      let p;
      i && H(i, p = be(u)) ? !r || !r.includes(p) ? n[p] = g : (c || (c = {}))[p] = g : Vn(e.emitsOptions, u) || (!(u in o) || g !== o[u]) && (o[u] = g, s = !0);
    }
  if (r) {
    const u = M(n), g = c || W;
    for (let p = 0; p < r.length; p++) {
      const a = r[p];
      n[a] = Zn(
        i,
        u,
        a,
        g[a],
        e,
        !H(g, a)
      );
    }
  }
  return s;
}
function Zn(e, t, n, o, i, r) {
  const s = e[n];
  if (s != null) {
    const c = H(s, "default");
    if (c && o === void 0) {
      const u = s.default;
      if (s.type !== Function && !s.skipFactory && P(u)) {
        const { propsDefaults: g } = i;
        if (n in g)
          o = g[n];
        else {
          const p = kt(i);
          o = g[n] = u.call(
            null,
            t
          ), p();
        }
      } else
        o = u;
      i.ce && i.ce._setProp(n, o);
    }
    s[
      0
      /* shouldCast */
    ] && (r && !c ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Xe(n)) && (o = !0));
  }
  return o;
}
const ul = /* @__PURE__ */ new WeakMap();
function or(e, t, n = !1) {
  const o = n ? ul : t.propsCache, i = o.get(e);
  if (i)
    return i;
  const r = e.props, s = {}, c = [];
  let u = !1;
  if (!P(e)) {
    const p = (a) => {
      u = !0;
      const [_, w] = or(a, t, !0);
      Q(s, _), w && c.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !u)
    return J(e) && o.set(e, Pt), Pt;
  if ($(r))
    for (let p = 0; p < r.length; p++) {
      d.env.NODE_ENV !== "production" && !G(r[p]) && O("props must be strings when using array syntax.", r[p]);
      const a = be(r[p]);
      Ko(a) && (s[a] = W);
    }
  else if (r) {
    d.env.NODE_ENV !== "production" && !J(r) && O("invalid props options", r);
    for (const p in r) {
      const a = be(p);
      if (Ko(a)) {
        const _ = r[p], w = s[a] = $(_) || P(_) ? { type: _ } : Q({}, _), S = w.type;
        let A = !1, ne = !0;
        if ($(S))
          for (let B = 0; B < S.length; ++B) {
            const Y = S[B], U = P(Y) && Y.name;
            if (U === "Boolean") {
              A = !0;
              break;
            } else U === "String" && (ne = !1);
          }
        else
          A = P(S) && S.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = A, w[
          1
          /* shouldCastTrue */
        ] = ne, (A || H(w, "default")) && c.push(a);
      }
    }
  }
  const g = [s, c];
  return J(e) && o.set(e, g), g;
}
function Ko(e) {
  return e[0] !== "$" && !At(e) ? !0 : (d.env.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function al(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function ir(e, t, n) {
  const o = M(t), i = n.propsOptions[0], r = Object.keys(e).map((s) => be(s));
  for (const s in i) {
    let c = i[s];
    c != null && dl(
      s,
      o[s],
      c,
      d.env.NODE_ENV !== "production" ? Me(o) : o,
      !r.includes(s)
    );
  }
}
function dl(e, t, n, o, i) {
  const { type: r, required: s, validator: c, skipCheck: u } = n;
  if (s && i) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !u) {
      let g = !1;
      const p = $(r) ? r : [r], a = [];
      for (let _ = 0; _ < p.length && !g; _++) {
        const { valid: w, expectedType: S } = hl(t, p[_]);
        a.push(S || ""), g = w;
      }
      if (!g) {
        O(gl(e, t, a));
        return;
      }
    }
    c && !c(t, o) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const pl = /* @__PURE__ */ Nt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function hl(e, t) {
  let n;
  const o = al(t);
  if (o === "null")
    n = e === null;
  else if (pl(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else o === "Object" ? n = J(e) : o === "Array" ? n = $(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function gl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(yn).join(" | ")}`;
  const i = n[0], r = so(t), s = Wo(t, i), c = Wo(t, r);
  return n.length === 1 && Bo(i) && !_l(i, r) && (o += ` with value ${s}`), o += `, got ${r} `, Bo(r) && (o += `with value ${c}.`), o;
}
function Wo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Bo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function _l(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const yo = (e) => e[0] === "_" || e === "$stable", Oo = (e) => $(e) ? e.map(me) : [me(e)], vl = (e, t, n) => {
  if (t._n)
    return t;
  const o = Is((...i) => (d.env.NODE_ENV !== "production" && te && !(n === null && ae) && !(n && n.root !== te.root) && O(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Oo(t(...i))), n);
  return o._c = !1, o;
}, rr = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if (yo(i)) continue;
    const r = e[i];
    if (P(r))
      t[i] = vl(i, r, o);
    else if (r != null) {
      d.env.NODE_ENV !== "production" && O(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const s = Oo(r);
      t[i] = () => s;
    }
  }
}, sr = (e, t) => {
  d.env.NODE_ENV !== "production" && !No(e.vnode) && O(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Oo(t);
  e.slots.default = () => n;
}, Qn = (e, t, n) => {
  for (const o in t)
    (n || !yo(o)) && (e[o] = t[o]);
}, El = (e, t, n) => {
  const o = e.slots = er();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Qn(o, t, n), n && fn(o, "_", i, !0)) : rr(t, o);
  } else t && sr(e, t);
}, ml = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let r = !0, s = W;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? d.env.NODE_ENV !== "production" && Re ? (Qn(i, t, n), Pe(e, "set", "$slots")) : n && c === 1 ? r = !1 : Qn(i, t, n) : (r = !t.$stable, rr(t, i)), s = t;
  } else t && (sr(e, t), s = { default: 1 });
  if (r)
    for (const c in i)
      !yo(c) && s[c] == null && delete i[c];
};
let Ct, Ge;
function at(e, t) {
  e.appContext.config.performance && vn() && Ge.mark(`vue-${t}-${e.uid}`), d.env.NODE_ENV !== "production" && Cs(e, t, vn() ? Ge.now() : Date.now());
}
function dt(e, t) {
  if (e.appContext.config.performance && vn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Ge.mark(o), Ge.measure(
      `<${Sn(e, e.type)}> ${t}`,
      n,
      o
    ), Ge.clearMarks(n), Ge.clearMarks(o);
  }
  d.env.NODE_ENV !== "production" && Ts(e, t, vn() ? Ge.now() : Date.now());
}
function vn() {
  return Ct !== void 0 || (typeof window < "u" && window.performance ? (Ct = !0, Ge = window.performance) : Ct = !1), Ct;
}
function Nl() {
  const e = [];
  if (d.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const he = Al;
function bl(e) {
  return yl(e);
}
function yl(e, t) {
  Nl();
  const n = Wt();
  n.__VUE__ = !0, d.env.NODE_ENV !== "production" && Ui(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: i,
    patchProp: r,
    createElement: s,
    createText: c,
    createComment: u,
    setText: g,
    setElementText: p,
    parentNode: a,
    nextSibling: _,
    setScopeId: w = X,
    insertStaticContent: S
  } = e, A = (l, f, h, m = null, v = null, E = null, D = void 0, y = null, b = d.env.NODE_ENV !== "production" && Re ? !1 : !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !Tt(l, f) && (m = Gt(l), qe(l, v, E, !0), l = null), f.patchFlag === -2 && (b = !1, f.dynamicChildren = null);
    const { type: N, ref: C, shapeFlag: x } = f;
    switch (N) {
      case Jt:
        ne(l, f, h, m);
        break;
      case Oe:
        B(l, f, h, m);
        break;
      case rn:
        l == null ? Y(f, h, m, D) : d.env.NODE_ENV !== "production" && U(l, f, h, D);
        break;
      case Ie:
        Yt(
          l,
          f,
          h,
          m,
          v,
          E,
          D,
          y,
          b
        );
        break;
      default:
        x & 1 ? ee(
          l,
          f,
          h,
          m,
          v,
          E,
          D,
          y,
          b
        ) : x & 6 ? So(
          l,
          f,
          h,
          m,
          v,
          E,
          D,
          y,
          b
        ) : x & 64 || x & 128 ? N.process(
          l,
          f,
          h,
          m,
          v,
          E,
          D,
          y,
          b,
          xt
        ) : d.env.NODE_ENV !== "production" && O("Invalid VNode type:", N, `(${typeof N})`);
    }
    C != null && v && gn(C, l && l.ref, E, f || l, !f);
  }, ne = (l, f, h, m) => {
    if (l == null)
      o(
        f.el = c(f.children),
        h,
        m
      );
    else {
      const v = f.el = l.el;
      f.children !== l.children && g(v, f.children);
    }
  }, B = (l, f, h, m) => {
    l == null ? o(
      f.el = u(f.children || ""),
      h,
      m
    ) : f.el = l.el;
  }, Y = (l, f, h, m) => {
    [l.el, l.anchor] = S(
      l.children,
      f,
      h,
      m,
      l.el,
      l.anchor
    );
  }, U = (l, f, h, m) => {
    if (f.children !== l.children) {
      const v = _(l.anchor);
      T(l), [f.el, f.anchor] = S(
        f.children,
        h,
        v,
        m
      );
    } else
      f.el = l.el, f.anchor = l.anchor;
  }, de = ({ el: l, anchor: f }, h, m) => {
    let v;
    for (; l && l !== f; )
      v = _(l), o(l, h, m), l = v;
    o(f, h, m);
  }, T = ({ el: l, anchor: f }) => {
    let h;
    for (; l && l !== f; )
      h = _(l), i(l), l = h;
    i(f);
  }, ee = (l, f, h, m, v, E, D, y, b) => {
    f.type === "svg" ? D = "svg" : f.type === "math" && (D = "mathml"), l == null ? ve(
      f,
      h,
      m,
      v,
      E,
      D,
      y,
      b
    ) : He(
      l,
      f,
      v,
      E,
      D,
      y,
      b
    );
  }, ve = (l, f, h, m, v, E, D, y) => {
    let b, N;
    const { props: C, shapeFlag: x, transition: V, dirs: I } = l;
    if (b = l.el = s(
      l.type,
      E,
      C && C.is,
      C
    ), x & 8 ? p(b, l.children) : x & 16 && le(
      l.children,
      b,
      null,
      m,
      v,
      Hn(l, E),
      D,
      y
    ), I && et(l, null, m, "created"), oe(b, l, l.scopeId, D, m), C) {
      for (const q in C)
        q !== "value" && !At(q) && r(b, q, null, C[q], E, m);
      "value" in C && r(b, "value", null, C.value, E), (N = C.onVnodeBeforeMount) && Te(N, m, l);
    }
    d.env.NODE_ENV !== "production" && (fn(b, "__vnode", l, !0), fn(b, "__vueParentComponent", m, !0)), I && et(l, null, m, "beforeMount");
    const j = Ol(v, V);
    j && V.beforeEnter(b), o(b, f, h), ((N = C && C.onVnodeMounted) || j || I) && he(() => {
      N && Te(N, m, l), j && V.enter(b), I && et(l, null, m, "mounted");
    }, v);
  }, oe = (l, f, h, m, v) => {
    if (h && w(l, h), m)
      for (let E = 0; E < m.length; E++)
        w(l, m[E]);
    if (v) {
      let E = v.subTree;
      if (d.env.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && (E = Do(E.children) || E), f === E || dr(E.type) && (E.ssContent === f || E.ssFallback === f)) {
        const D = v.vnode;
        oe(
          l,
          D,
          D.scopeId,
          D.slotScopeIds,
          v.parent
        );
      }
    }
  }, le = (l, f, h, m, v, E, D, y, b = 0) => {
    for (let N = b; N < l.length; N++) {
      const C = l[N] = y ? ke(l[N]) : me(l[N]);
      A(
        null,
        C,
        f,
        h,
        m,
        v,
        E,
        D,
        y
      );
    }
  }, He = (l, f, h, m, v, E, D) => {
    const y = f.el = l.el;
    d.env.NODE_ENV !== "production" && (y.__vnode = f);
    let { patchFlag: b, dynamicChildren: N, dirs: C } = f;
    b |= l.patchFlag & 16;
    const x = l.props || W, V = f.props || W;
    let I;
    if (h && tt(h, !1), (I = V.onVnodeBeforeUpdate) && Te(I, h, f, l), C && et(f, l, h, "beforeUpdate"), h && tt(h, !0), d.env.NODE_ENV !== "production" && Re && (b = 0, D = !1, N = null), (x.innerHTML && V.innerHTML == null || x.textContent && V.textContent == null) && p(y, ""), N ? (We(
      l.dynamicChildren,
      N,
      y,
      h,
      m,
      Hn(f, v),
      E
    ), d.env.NODE_ENV !== "production" && on(l, f)) : D || we(
      l,
      f,
      y,
      null,
      h,
      m,
      Hn(f, v),
      E,
      !1
    ), b > 0) {
      if (b & 16)
        Ee(y, x, V, h, v);
      else if (b & 2 && x.class !== V.class && r(y, "class", null, V.class, v), b & 4 && r(y, "style", x.style, V.style, v), b & 8) {
        const j = f.dynamicProps;
        for (let q = 0; q < j.length; q++) {
          const K = j[q], pe = x[K], fe = V[K];
          (fe !== pe || K === "value") && r(y, K, pe, fe, v, h);
        }
      }
      b & 1 && l.children !== f.children && p(y, f.children);
    } else !D && N == null && Ee(y, x, V, h, v);
    ((I = V.onVnodeUpdated) || C) && he(() => {
      I && Te(I, h, f, l), C && et(f, l, h, "updated");
    }, m);
  }, We = (l, f, h, m, v, E, D) => {
    for (let y = 0; y < f.length; y++) {
      const b = l[y], N = f[y], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === Ie || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Tt(b, N) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 198) ? a(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      A(
        b,
        N,
        C,
        null,
        m,
        v,
        E,
        D,
        !0
      );
    }
  }, Ee = (l, f, h, m, v) => {
    if (f !== h) {
      if (f !== W)
        for (const E in f)
          !At(E) && !(E in h) && r(
            l,
            E,
            f[E],
            null,
            v,
            m
          );
      for (const E in h) {
        if (At(E)) continue;
        const D = h[E], y = f[E];
        D !== y && E !== "value" && r(l, E, y, D, v, m);
      }
      "value" in h && r(l, "value", f.value, h.value, v);
    }
  }, Yt = (l, f, h, m, v, E, D, y, b) => {
    const N = f.el = l ? l.el : c(""), C = f.anchor = l ? l.anchor : c("");
    let { patchFlag: x, dynamicChildren: V, slotScopeIds: I } = f;
    d.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Re || x & 2048) && (x = 0, b = !1, V = null), I && (y = y ? y.concat(I) : I), l == null ? (o(N, h, m), o(C, h, m), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      h,
      C,
      v,
      E,
      D,
      y,
      b
    )) : x > 0 && x & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (We(
      l.dynamicChildren,
      V,
      h,
      v,
      E,
      D,
      y
    ), d.env.NODE_ENV !== "production" ? on(l, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || v && f === v.subTree) && on(
        l,
        f,
        !0
        /* shallow */
      )
    )) : we(
      l,
      f,
      h,
      C,
      v,
      E,
      D,
      y,
      b
    );
  }, So = (l, f, h, m, v, E, D, y, b) => {
    f.slotScopeIds = y, l == null ? f.shapeFlag & 512 ? v.ctx.activate(
      f,
      h,
      m,
      D,
      b
    ) : Be(
      f,
      h,
      m,
      v,
      E,
      D,
      b
    ) : ce(l, f, b);
  }, Be = (l, f, h, m, v, E, D) => {
    const y = l.component = Kl(
      l,
      m,
      v
    );
    if (d.env.NODE_ENV !== "production" && y.type.__hmrId && Ns(y), d.env.NODE_ENV !== "production" && (Qt(l), at(y, "mount")), No(l) && (y.ctx.renderer = xt), d.env.NODE_ENV !== "production" && at(y, "init"), ql(y, !1, D), d.env.NODE_ENV !== "production" && dt(y, "init"), d.env.NODE_ENV !== "production" && Re && (l.el = null), y.asyncDep) {
      if (v && v.registerDep(y, F, D), !l.el) {
        const b = y.subTree = Ne(Oe);
        B(null, b, f, h);
      }
    } else
      F(
        y,
        l,
        f,
        h,
        v,
        E,
        D
      );
    d.env.NODE_ENV !== "production" && (en(), dt(y, "mount"));
  }, ce = (l, f, h) => {
    const m = f.component = l.component;
    if (Il(l, f, h))
      if (m.asyncDep && !m.asyncResolved) {
        d.env.NODE_ENV !== "production" && Qt(f), R(m, f, h), d.env.NODE_ENV !== "production" && en();
        return;
      } else
        m.next = f, m.update();
    else
      f.el = l.el, m.vnode = f;
  }, F = (l, f, h, m, v, E, D) => {
    const y = () => {
      if (l.isMounted) {
        let { next: x, bu: V, u: I, parent: j, vnode: q } = l;
        {
          const Se = lr(l);
          if (Se) {
            x && (x.el = q.el, R(l, x, D)), Se.asyncDep.then(() => {
              l.isUnmounted || y();
            });
            return;
          }
        }
        let K = x, pe;
        d.env.NODE_ENV !== "production" && Qt(x || l.vnode), tt(l, !1), x ? (x.el = q.el, R(l, x, D)) : x = q, V && Vt(V), (pe = x.props && x.props.onVnodeBeforeUpdate) && Te(pe, j, x, q), tt(l, !0), d.env.NODE_ENV !== "production" && at(l, "render");
        const fe = Jo(l);
        d.env.NODE_ENV !== "production" && dt(l, "render");
        const Ve = l.subTree;
        l.subTree = fe, d.env.NODE_ENV !== "production" && at(l, "patch"), A(
          Ve,
          fe,
          // parent may have changed if it's in a teleport
          a(Ve.el),
          // anchor may have changed if it's in a fragment
          Gt(Ve),
          l,
          v,
          E
        ), d.env.NODE_ENV !== "production" && dt(l, "patch"), x.el = fe.el, K === null && Pl(l, fe.el), I && he(I, v), (pe = x.props && x.props.onVnodeUpdated) && he(
          () => Te(pe, j, x, q),
          v
        ), d.env.NODE_ENV !== "production" && Ki(l), d.env.NODE_ENV !== "production" && en();
      } else {
        let x;
        const { el: V, props: I } = f, { bm: j, m: q, parent: K, root: pe, type: fe } = l, Ve = Ft(f);
        tt(l, !1), j && Vt(j), !Ve && (x = I && I.onVnodeBeforeMount) && Te(x, K, f), tt(l, !0);
        {
          pe.ce && pe.ce._injectChildStyle(fe), d.env.NODE_ENV !== "production" && at(l, "render");
          const Se = l.subTree = Jo(l);
          d.env.NODE_ENV !== "production" && dt(l, "render"), d.env.NODE_ENV !== "production" && at(l, "patch"), A(
            null,
            Se,
            h,
            m,
            l,
            v,
            E
          ), d.env.NODE_ENV !== "production" && dt(l, "patch"), f.el = Se.el;
        }
        if (q && he(q, v), !Ve && (x = I && I.onVnodeMounted)) {
          const Se = f;
          he(
            () => Te(x, K, Se),
            v
          );
        }
        (f.shapeFlag & 256 || K && Ft(K.vnode) && K.vnode.shapeFlag & 256) && l.a && he(l.a, v), l.isMounted = !0, d.env.NODE_ENV !== "production" && ws(l), f = h = m = null;
      }
    };
    l.scope.on();
    const b = l.effect = new gi(y);
    l.scope.off();
    const N = l.update = b.run.bind(b), C = l.job = b.runIfDirty.bind(b);
    C.i = l, C.id = l.uid, b.scheduler = () => xn(C), tt(l, !0), d.env.NODE_ENV !== "production" && (b.onTrack = l.rtc ? (x) => Vt(l.rtc, x) : void 0, b.onTrigger = l.rtg ? (x) => Vt(l.rtg, x) : void 0), N();
  }, R = (l, f, h) => {
    f.component = l;
    const m = l.vnode.props;
    l.vnode = f, l.next = null, fl(l, f.props, m, h), ml(l, f.children, h), De(), Ro(l), xe();
  }, we = (l, f, h, m, v, E, D, y, b = !1) => {
    const N = l && l.children, C = l ? l.shapeFlag : 0, x = f.children, { patchFlag: V, shapeFlag: I } = f;
    if (V > 0) {
      if (V & 128) {
        Ot(
          N,
          x,
          h,
          m,
          v,
          E,
          D,
          y,
          b
        );
        return;
      } else if (V & 256) {
        Tn(
          N,
          x,
          h,
          m,
          v,
          E,
          D,
          y,
          b
        );
        return;
      }
    }
    I & 8 ? (C & 16 && Dt(N, v, E), x !== N && p(h, x)) : C & 16 ? I & 16 ? Ot(
      N,
      x,
      h,
      m,
      v,
      E,
      D,
      y,
      b
    ) : Dt(N, v, E, !0) : (C & 8 && p(h, ""), I & 16 && le(
      x,
      h,
      m,
      v,
      E,
      D,
      y,
      b
    ));
  }, Tn = (l, f, h, m, v, E, D, y, b) => {
    l = l || Pt, f = f || Pt;
    const N = l.length, C = f.length, x = Math.min(N, C);
    let V;
    for (V = 0; V < x; V++) {
      const I = f[V] = b ? ke(f[V]) : me(f[V]);
      A(
        l[V],
        I,
        h,
        null,
        v,
        E,
        D,
        y,
        b
      );
    }
    N > C ? Dt(
      l,
      v,
      E,
      !0,
      !1,
      x
    ) : le(
      f,
      h,
      m,
      v,
      E,
      D,
      y,
      b,
      x
    );
  }, Ot = (l, f, h, m, v, E, D, y, b) => {
    let N = 0;
    const C = f.length;
    let x = l.length - 1, V = C - 1;
    for (; N <= x && N <= V; ) {
      const I = l[N], j = f[N] = b ? ke(f[N]) : me(f[N]);
      if (Tt(I, j))
        A(
          I,
          j,
          h,
          null,
          v,
          E,
          D,
          y,
          b
        );
      else
        break;
      N++;
    }
    for (; N <= x && N <= V; ) {
      const I = l[x], j = f[V] = b ? ke(f[V]) : me(f[V]);
      if (Tt(I, j))
        A(
          I,
          j,
          h,
          null,
          v,
          E,
          D,
          y,
          b
        );
      else
        break;
      x--, V--;
    }
    if (N > x) {
      if (N <= V) {
        const I = V + 1, j = I < C ? f[I].el : m;
        for (; N <= V; )
          A(
            null,
            f[N] = b ? ke(f[N]) : me(f[N]),
            h,
            j,
            v,
            E,
            D,
            y,
            b
          ), N++;
      }
    } else if (N > V)
      for (; N <= x; )
        qe(l[N], v, E, !0), N++;
    else {
      const I = N, j = N, q = /* @__PURE__ */ new Map();
      for (N = j; N <= V; N++) {
        const ie = f[N] = b ? ke(f[N]) : me(f[N]);
        ie.key != null && (d.env.NODE_ENV !== "production" && q.has(ie.key) && O(
          "Duplicate keys found during update:",
          JSON.stringify(ie.key),
          "Make sure keys are unique."
        ), q.set(ie.key, N));
      }
      let K, pe = 0;
      const fe = V - j + 1;
      let Ve = !1, Se = 0;
      const wt = new Array(fe);
      for (N = 0; N < fe; N++) wt[N] = 0;
      for (N = I; N <= x; N++) {
        const ie = l[N];
        if (pe >= fe) {
          qe(ie, v, E, !0);
          continue;
        }
        let Ce;
        if (ie.key != null)
          Ce = q.get(ie.key);
        else
          for (K = j; K <= V; K++)
            if (wt[K - j] === 0 && Tt(ie, f[K])) {
              Ce = K;
              break;
            }
        Ce === void 0 ? qe(ie, v, E, !0) : (wt[Ce - j] = N + 1, Ce >= Se ? Se = Ce : Ve = !0, A(
          ie,
          f[Ce],
          h,
          null,
          v,
          E,
          D,
          y,
          b
        ), pe++);
      }
      const To = Ve ? Dl(wt) : Pt;
      for (K = To.length - 1, N = fe - 1; N >= 0; N--) {
        const ie = j + N, Ce = f[ie], $o = ie + 1 < C ? f[ie + 1].el : m;
        wt[N] === 0 ? A(
          null,
          Ce,
          h,
          $o,
          v,
          E,
          D,
          y,
          b
        ) : Ve && (K < 0 || N !== To[K] ? ft(Ce, h, $o, 2) : K--);
      }
    }
  }, ft = (l, f, h, m, v = null) => {
    const { el: E, type: D, transition: y, children: b, shapeFlag: N } = l;
    if (N & 6) {
      ft(l.component.subTree, f, h, m);
      return;
    }
    if (N & 128) {
      l.suspense.move(f, h, m);
      return;
    }
    if (N & 64) {
      D.move(l, f, h, xt);
      return;
    }
    if (D === Ie) {
      o(E, f, h);
      for (let x = 0; x < b.length; x++)
        ft(b[x], f, h, m);
      o(l.anchor, f, h);
      return;
    }
    if (D === rn) {
      de(l, f, h);
      return;
    }
    if (m !== 2 && N & 1 && y)
      if (m === 0)
        y.beforeEnter(E), o(E, f, h), he(() => y.enter(E), v);
      else {
        const { leave: x, delayLeave: V, afterLeave: I } = y, j = () => {
          l.ctx.isUnmounted ? i(E) : o(E, f, h);
        }, q = () => {
          x(E, () => {
            j(), I && I();
          });
        };
        V ? V(E, j, q) : q();
      }
    else
      o(E, f, h);
  }, qe = (l, f, h, m = !1, v = !1) => {
    const {
      type: E,
      props: D,
      ref: y,
      children: b,
      dynamicChildren: N,
      shapeFlag: C,
      patchFlag: x,
      dirs: V,
      cacheIndex: I
    } = l;
    if (x === -2 && (v = !1), y != null && (De(), gn(y, null, h, l, !0), xe()), I != null && (f.renderCache[I] = void 0), C & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const j = C & 1 && V, q = !Ft(l);
    let K;
    if (q && (K = D && D.onVnodeBeforeUnmount) && Te(K, f, l), C & 6)
      yr(l.component, h, m);
    else {
      if (C & 128) {
        l.suspense.unmount(h, m);
        return;
      }
      j && et(l, null, f, "beforeUnmount"), C & 64 ? l.type.remove(
        l,
        f,
        h,
        xt,
        m
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== Ie || x > 0 && x & 64) ? Dt(
        N,
        f,
        h,
        !1,
        !0
      ) : (E === Ie && x & 384 || !v && C & 16) && Dt(b, f, h), m && $n(l);
    }
    (q && (K = D && D.onVnodeUnmounted) || j) && he(() => {
      K && Te(K, f, l), j && et(l, null, f, "unmounted");
    }, h);
  }, $n = (l) => {
    const { type: f, el: h, anchor: m, transition: v } = l;
    if (f === Ie) {
      d.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && v && !v.persisted ? l.children.forEach((D) => {
        D.type === Oe ? i(D.el) : $n(D);
      }) : br(h, m);
      return;
    }
    if (f === rn) {
      T(l);
      return;
    }
    const E = () => {
      i(h), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (l.shapeFlag & 1 && v && !v.persisted) {
      const { leave: D, delayLeave: y } = v, b = () => D(h, E);
      y ? y(l.el, E, b) : b();
    } else
      E();
  }, br = (l, f) => {
    let h;
    for (; l !== f; )
      h = _(l), i(l), l = h;
    i(f);
  }, yr = (l, f, h) => {
    d.env.NODE_ENV !== "production" && l.type.__hmrId && bs(l);
    const {
      bum: m,
      scope: v,
      job: E,
      subTree: D,
      um: y,
      m: b,
      a: N,
      parent: C,
      slots: { __: x }
    } = l;
    qo(b), qo(N), m && Vt(m), C && $(x) && x.forEach((V) => {
      C.renderCache[V] = void 0;
    }), v.stop(), E && (E.flags |= 8, qe(D, l, f, h)), y && he(y, f), he(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), d.env.NODE_ENV !== "production" && Ss(l);
  }, Dt = (l, f, h, m = !1, v = !1, E = 0) => {
    for (let D = E; D < l.length; D++)
      qe(l[D], f, h, m, v);
  }, Gt = (l) => {
    if (l.shapeFlag & 6)
      return Gt(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const f = _(l.anchor || l.el), h = f && f[Ps];
    return h ? _(h) : f;
  };
  let In = !1;
  const Co = (l, f, h) => {
    l == null ? f._vnode && qe(f._vnode, null, null, !0) : A(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      h
    ), f._vnode = l, In || (In = !0, Ro(), ji(), In = !1);
  }, xt = {
    p: A,
    um: qe,
    m: ft,
    r: $n,
    mt: Be,
    mc: le,
    pc: we,
    pbc: We,
    n: Gt,
    o: e
  };
  return {
    render: Co,
    hydrate: void 0,
    createApp: rl(Co)
  };
}
function Hn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function tt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ol(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function on(e, t, n = !1) {
  const o = e.children, i = t.children;
  if ($(o) && $(i))
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      let c = i[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[r] = ke(i[r]), c.el = s.el), !n && c.patchFlag !== -2 && on(s, c)), c.type === Jt && (c.el = s.el), c.type === Oe && !c.el && (c.el = s.el), d.env.NODE_ENV !== "production" && c.el && (c.el.__vnode = c);
    }
}
function Dl(e) {
  const t = e.slice(), n = [0];
  let o, i, r, s, c;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const g = e[o];
    if (g !== 0) {
      if (i = n[n.length - 1], e[i] < g) {
        t[o] = i, n.push(o);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        c = r + s >> 1, e[n[c]] < g ? r = c + 1 : s = c;
      g < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function lr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : lr(t);
}
function qo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const xl = Symbol.for("v-scx"), wl = () => {
  {
    const e = nn(xl);
    return e || d.env.NODE_ENV !== "production" && O(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Ln(e, t, n) {
  return d.env.NODE_ENV !== "production" && !P(t) && O(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), cr(e, t, n);
}
function cr(e, t, n = W) {
  const { immediate: o, deep: i, flush: r, once: s } = n;
  d.env.NODE_ENV !== "production" && !t && (o !== void 0 && O(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && O(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && O(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = Q({}, n);
  d.env.NODE_ENV !== "production" && (c.onWarn = O);
  const u = t && o || !t && r !== "post";
  let g;
  if (Ut) {
    if (r === "sync") {
      const w = wl();
      g = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!u) {
      const w = () => {
      };
      return w.stop = X, w.resume = X, w.pause = X, w;
    }
  }
  const p = te;
  c.call = (w, S, A) => je(w, p, S, A);
  let a = !1;
  r === "post" ? c.scheduler = (w) => {
    he(w, p && p.suspense);
  } : r !== "sync" && (a = !0, c.scheduler = (w, S) => {
    S ? w() : xn(w);
  }), c.augmentJob = (w) => {
    t && (w.flags |= 4), a && (w.flags |= 2, p && (w.id = p.uid, w.i = p));
  };
  const _ = as(e, t, c);
  return Ut && (g ? g.push(_) : u && _()), _;
}
function Vl(e, t, n) {
  const o = this.proxy, i = G(e) ? e.includes(".") ? fr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  P(t) ? r = t : (r = t.handler, n = t);
  const s = kt(this), c = cr(i, r.bind(o), n);
  return s(), c;
}
function fr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
const Sl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${be(t)}Modifiers`] || e[`${Xe(t)}Modifiers`];
function Cl(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || W;
  if (d.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(nt(be(t)) in a)) && O(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${nt(be(t))}" prop.`
        );
      else {
        const _ = p[t];
        P(_) && (_(...n) || O(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const r = t.startsWith("update:"), s = r && Sl(o, t.slice(7));
  if (s && (s.trim && (i = n.map((p) => G(p) ? p.trim() : p)), s.number && (i = n.map($r))), d.env.NODE_ENV !== "production" && $s(e, t, i), d.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[nt(p)] && O(
      `Event "${p}" is emitted in component ${Sn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Xe(
        t
      )}" instead of "${t}".`
    );
  }
  let c, u = o[c = nt(t)] || // also try camelCase event handler (#2249)
  o[c = nt(be(t))];
  !u && r && (u = o[c = nt(Xe(t))]), u && je(
    u,
    e,
    6,
    i
  );
  const g = o[c + "Once"];
  if (g) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, je(
      g,
      e,
      6,
      i
    );
  }
}
function ur(e, t, n = !1) {
  const o = t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let s = {}, c = !1;
  if (!P(e)) {
    const u = (g) => {
      const p = ur(g, t, !0);
      p && (c = !0, Q(s, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (J(e) && o.set(e, null), null) : ($(r) ? r.forEach((u) => s[u] = null) : Q(s, r), J(e) && o.set(e, s), s);
}
function Vn(e, t) {
  return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, Xe(t)) || H(e, t));
}
let eo = !1;
function En() {
  eo = !0;
}
function Jo(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: i,
    propsOptions: [r],
    slots: s,
    attrs: c,
    emit: u,
    render: g,
    renderCache: p,
    props: a,
    data: _,
    setupState: w,
    ctx: S,
    inheritAttrs: A
  } = e, ne = hn(e);
  let B, Y;
  d.env.NODE_ENV !== "production" && (eo = !1);
  try {
    if (n.shapeFlag & 4) {
      const T = i || o, ee = d.env.NODE_ENV !== "production" && w.__isScriptSetup ? new Proxy(T, {
        get(ve, oe, le) {
          return O(
            `Property '${String(
              oe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ve, oe, le);
        }
      }) : T;
      B = me(
        g.call(
          ee,
          T,
          p,
          d.env.NODE_ENV !== "production" ? Me(a) : a,
          w,
          _,
          S
        )
      ), Y = c;
    } else {
      const T = t;
      d.env.NODE_ENV !== "production" && c === a && En(), B = me(
        T.length > 1 ? T(
          d.env.NODE_ENV !== "production" ? Me(a) : a,
          d.env.NODE_ENV !== "production" ? {
            get attrs() {
              return En(), Me(c);
            },
            slots: s,
            emit: u
          } : { attrs: c, slots: s, emit: u }
        ) : T(
          d.env.NODE_ENV !== "production" ? Me(a) : a,
          null
        )
      ), Y = t.props ? c : Tl(c);
    }
  } catch (T) {
    Bt(T, e, 1), B = Ne(Oe);
  }
  let U = B, de;
  if (d.env.NODE_ENV !== "production" && B.patchFlag > 0 && B.patchFlag & 2048 && ([U, de] = ar(B)), Y && A !== !1) {
    const T = Object.keys(Y), { shapeFlag: ee } = U;
    if (T.length) {
      if (ee & 7)
        r && T.some(cn) && (Y = $l(
          Y,
          r
        )), U = Qe(U, Y, !1, !0);
      else if (d.env.NODE_ENV !== "production" && !eo && U.type !== Oe) {
        const ve = Object.keys(c), oe = [], le = [];
        for (let He = 0, We = ve.length; He < We; He++) {
          const Ee = ve[He];
          Kt(Ee) ? cn(Ee) || oe.push(Ee[2].toLowerCase() + Ee.slice(3)) : le.push(Ee);
        }
        le.length && O(
          `Extraneous non-props attributes (${le.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), oe.length && O(
          `Extraneous non-emits event listeners (${oe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (d.env.NODE_ENV !== "production" && !ko(U) && O(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), U = Qe(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && (d.env.NODE_ENV !== "production" && !ko(U) && O(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), mo(U, n.transition)), d.env.NODE_ENV !== "production" && de ? de(U) : B = U, hn(ne), B;
}
const ar = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Do(t, !1);
  if (o) {
    if (d.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return ar(o);
  } else return [e, void 0];
  const i = t.indexOf(o), r = n ? n.indexOf(o) : -1, s = (c) => {
    t[i] = c, n && (r > -1 ? n[r] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [me(o), s];
};
function Do(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (Et(i)) {
      if (i.type !== Oe || i.children === "v-if") {
        if (n)
          return;
        if (n = i, d.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Do(n.children);
      }
    } else
      return;
  }
  return n;
}
const Tl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Kt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, $l = (e, t) => {
  const n = {};
  for (const o in e)
    (!cn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, ko = (e) => e.shapeFlag & 7 || e.type === Oe;
function Il(e, t, n) {
  const { props: o, children: i, component: r } = e, { props: s, children: c, patchFlag: u } = t, g = r.emitsOptions;
  if (d.env.NODE_ENV !== "production" && (i || c) && Re || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Yo(o, s, g) : !!s;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const _ = p[a];
        if (s[_] !== o[_] && !Vn(g, _))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : o === s ? !1 : o ? s ? Yo(o, s, g) : !0 : !!s;
  return !1;
}
function Yo(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    if (t[r] !== e[r] && !Vn(n, r))
      return !0;
  }
  return !1;
}
function Pl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const dr = (e) => e.__isSuspense;
function Al(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : Fi(e);
}
const Ie = Symbol.for("v-fgt"), Jt = Symbol.for("v-txt"), Oe = Symbol.for("v-cmt"), rn = Symbol.for("v-stc");
let ze = null, xo = 1;
function Go(e, t = !1) {
  xo += e, e < 0 && ze && t && (ze.hasOnce = !0);
}
function Et(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Tt(e, t) {
  if (d.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = tn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Ml = (...e) => hr(
  ...e
), pr = ({ key: e }) => e ?? null, sn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || Z(e) || P(e) ? { i: ae, r: e, k: t, f: !!n } : e : null);
function Rl(e, t = null, n = null, o = 0, i = null, r = e === Ie ? 0 : 1, s = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && pr(t),
    ref: t && sn(t),
    scopeId: Bi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ae
  };
  return c ? (wo(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= G(n) ? 8 : 16), d.env.NODE_ENV !== "production" && u.key !== u.key && O("VNode created with invalid key (NaN). VNode type:", u.type), xo > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  ze && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ze.push(u), u;
}
const Ne = d.env.NODE_ENV !== "production" ? Ml : hr;
function hr(e, t = null, n = null, o = 0, i = null, r = !1) {
  if ((!e || e === Ys) && (d.env.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = Oe), Et(e)) {
    const c = Qe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && wo(c, n), xo > 0 && !r && ze && (c.shapeFlag & 6 ? ze[ze.indexOf(e)] = c : ze.push(c)), c.patchFlag = -2, c;
  }
  if (mr(e) && (e = e.__vccOpts), t) {
    t = Fl(t);
    let { class: c, style: u } = t;
    c && !G(c) && (t.class = fo(c)), J(u) && (un(u) && !$(u) && (u = Q({}, u)), t.style = co(u));
  }
  const s = G(e) ? 1 : dr(e) ? 128 : As(e) ? 64 : J(e) ? 4 : P(e) ? 2 : 0;
  return d.env.NODE_ENV !== "production" && s & 4 && un(e) && (e = M(e), O(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Rl(
    e,
    t,
    n,
    o,
    i,
    s,
    r,
    !0
  );
}
function Fl(e) {
  return e ? un(e) || tr(e) ? Q({}, e) : e : null;
}
function Qe(e, t, n = !1, o = !1) {
  const { props: i, ref: r, patchFlag: s, children: c, transition: u } = e, g = t ? Hl(i || {}, t) : i, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: g,
    key: g && pr(g),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? $(r) ? r.concat(sn(t)) : [r, sn(t)] : sn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: d.env.NODE_ENV !== "production" && s === -1 && $(c) ? c.map(gr) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ie ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Qe(e.ssContent),
    ssFallback: e.ssFallback && Qe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && mo(
    p,
    u.clone(p)
  ), p;
}
function gr(e) {
  const t = Qe(e);
  return $(e.children) && (t.children = e.children.map(gr)), t;
}
function jl(e = " ", t = 0) {
  return Ne(Jt, null, e, t);
}
function me(e) {
  return e == null || typeof e == "boolean" ? Ne(Oe) : $(e) ? Ne(
    Ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Et(e) ? ke(e) : Ne(Jt, null, String(e));
}
function ke(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qe(e);
}
function wo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if ($(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), wo(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !tr(t) ? t._ctx = ae : i === 3 && ae && (ae.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else P(t) ? (t = { default: t, _ctx: ae }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [jl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Hl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = fo([t.class, o.class]));
      else if (i === "style")
        t.style = co([t.style, o.style]);
      else if (Kt(i)) {
        const r = t[i], s = o[i];
        s && r !== s && !($(r) && r.includes(s)) && (t[i] = r ? [].concat(r, s) : s);
      } else i !== "" && (t[i] = o[i]);
  }
  return t;
}
function Te(e, t, n, o = null) {
  je(e, t, 7, [
    n,
    o
  ]);
}
const Ll = Zi();
let Ul = 0;
function Kl(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || Ll, r = {
    uid: Ul++,
    vnode: e,
    type: o,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new jr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: or(o, i),
    emitsOptions: ur(o, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: W,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: W,
    data: W,
    props: W,
    attrs: W,
    slots: W,
    refs: W,
    setupState: W,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return d.env.NODE_ENV !== "production" ? r.ctx = Gs(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Cl.bind(null, r), e.ce && e.ce(r), r;
}
let te = null;
const Wl = () => te || ae;
let mn, to;
{
  const e = Wt(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (r) => {
      i.length > 1 ? i.forEach((s) => s(r)) : i[0](r);
    };
  };
  mn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => te = n
  ), to = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ut = n
  );
}
const kt = (e) => {
  const t = te;
  return mn(e), e.scope.on(), () => {
    e.scope.off(), mn(t);
  };
}, zo = () => {
  te && te.scope.off(), mn(null);
}, Bl = /* @__PURE__ */ Nt("slot,component");
function no(e, { isNativeTag: t }) {
  (Bl(e) || t(e)) && O(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function _r(e) {
  return e.vnode.shapeFlag & 4;
}
let Ut = !1;
function ql(e, t = !1, n = !1) {
  t && to(t);
  const { props: o, children: i } = e.vnode, r = _r(e);
  ll(e, o, r, t), El(e, i, n || t);
  const s = r ? Jl(e, t) : void 0;
  return t && to(!1), s;
}
function Jl(e, t) {
  var n;
  const o = e.type;
  if (d.env.NODE_ENV !== "production") {
    if (o.name && no(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let s = 0; s < r.length; s++)
        no(r[s], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let s = 0; s < r.length; s++)
        qi(r[s]);
    }
    o.compilerOptions && kl() && O(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Gi), d.env.NODE_ENV !== "production" && zs(e);
  const { setup: i } = o;
  if (i) {
    De();
    const r = e.setupContext = i.length > 1 ? Gl(e) : null, s = kt(e), c = yt(
      i,
      e,
      0,
      [
        d.env.NODE_ENV !== "production" ? Me(e.props) : e.props,
        r
      ]
    ), u = ro(c);
    if (xe(), s(), (u || e.sp) && !Ft(e) && Ji(e), u) {
      if (c.then(zo, zo), t)
        return c.then((g) => {
          Xo(e, g, t);
        }).catch((g) => {
          Bt(g, e, 0);
        });
      if (e.asyncDep = c, d.env.NODE_ENV !== "production" && !e.suspense) {
        const g = (n = o.name) != null ? n : "Anonymous";
        O(
          `Component <${g}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Xo(e, c, t);
  } else
    vr(e, t);
}
function Xo(e, t, n) {
  P(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : J(t) ? (d.env.NODE_ENV !== "production" && Et(t) && O(
    "setup() should not return VNodes directly - return a render function instead."
  ), d.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Pi(t), d.env.NODE_ENV !== "production" && Xs(e)) : d.env.NODE_ENV !== "production" && t !== void 0 && O(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), vr(e, n);
}
const kl = () => !0;
function vr(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || X);
  {
    const i = kt(e);
    De();
    try {
      Qs(e);
    } finally {
      xe(), i();
    }
  }
  d.env.NODE_ENV !== "production" && !o.render && e.render === X && !t && (o.template ? O(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : O("Component is missing template or render function: ", o));
}
const Zo = d.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return En(), z(e, "get", ""), e[t];
  },
  set() {
    return O("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return O("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return z(e, "get", ""), e[t];
  }
};
function Yl(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return z(e, "get", "$slots"), t[n];
    }
  });
}
function Gl(e) {
  const t = (n) => {
    if (d.env.NODE_ENV !== "production" && (e.exposed && O("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && ($(n) ? o = "array" : Z(n) && (o = "ref")), o !== "object" && O(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (d.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Zo));
      },
      get slots() {
        return o || (o = Yl(e));
      },
      get emit() {
        return (i, ...r) => e.emit(i, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Zo),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Vo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Pi(rs(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in lt)
        return lt[n](e);
    },
    has(t, n) {
      return n in t || n in lt;
    }
  })) : e.proxy;
}
const zl = /(?:^|[-_])(\w)/g, Xl = (e) => e.replace(zl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Er(e, t = !0) {
  return P(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Sn(e, t, n = !1) {
  let o = Er(t);
  if (!o && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (o = i[1]);
  }
  if (!o && e && e.parent) {
    const i = (r) => {
      for (const s in r)
        if (r[s] === t)
          return s;
    };
    o = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return o ? Xl(o) : n ? "App" : "Anonymous";
}
function mr(e) {
  return P(e) && "__vccOpts" in e;
}
const Zl = (e, t) => {
  const n = fs(e, t, Ut);
  if (d.env.NODE_ENV !== "production") {
    const o = Wl();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function wc(e, t, n) {
  const o = arguments.length;
  return o === 2 ? J(t) && !$(t) ? Et(t) ? Ne(e, null, [t]) : Ne(e, t) : Ne(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Et(n) && (n = [n]), Ne(e, t, n));
}
function Ql() {
  if (d.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!J(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (Z(a)) {
        De();
        const _ = a.value;
        return xe(), [
          "div",
          {},
          ["span", e, p(a)],
          "<",
          c(_),
          ">"
        ];
      } else {
        if (gt(a))
          return [
            "div",
            {},
            ["span", e, _e(a) ? "ShallowReactive" : "Reactive"],
            "<",
            c(a),
            `>${Ze(a) ? " (readonly)" : ""}`
          ];
        if (Ze(a))
          return [
            "div",
            {},
            ["span", e, _e(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            c(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const _ = [];
    a.type.props && a.props && _.push(s("props", M(a.props))), a.setupState !== W && _.push(s("setup", a.setupState)), a.data !== W && _.push(s("data", M(a.data)));
    const w = u(a, "computed");
    w && _.push(s("computed", w));
    const S = u(a, "inject");
    return S && _.push(s("injected", S)), _.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), _;
  }
  function s(a, _) {
    return _ = Q({}, _), Object.keys(_).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(_).map((w) => [
          "div",
          {},
          ["span", o, w + ": "],
          c(_[w], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(a, _ = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : J(a) ? ["object", { object: _ ? M(a) : a }] : ["span", n, String(a)];
  }
  function u(a, _) {
    const w = a.type;
    if (P(w))
      return;
    const S = {};
    for (const A in a.ctx)
      g(w, A, _) && (S[A] = a.ctx[A]);
    return S;
  }
  function g(a, _, w) {
    const S = a[w];
    if ($(S) && S.includes(_) || J(S) && _ in S || a.extends && g(a.extends, _, w) || a.mixins && a.mixins.some((A) => g(A, _, w)))
      return !0;
  }
  function p(a) {
    return _e(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Qo = "3.5.16", Cn = d.env.NODE_ENV !== "production" ? O : X;
var mt = { env: {} };
let oo;
const ei = typeof window < "u" && window.trustedTypes;
if (ei)
  try {
    oo = /* @__PURE__ */ ei.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    mt.env.NODE_ENV !== "production" && Cn(`Error creating trusted types policy: ${e}`);
  }
const Nr = oo ? (e) => oo.createHTML(e) : (e) => e, ec = "http://www.w3.org/2000/svg", tc = "http://www.w3.org/1998/Math/MathML", Ue = typeof document < "u" ? document : null, ti = Ue && /* @__PURE__ */ Ue.createElement("template"), nc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Ue.createElementNS(ec, e) : t === "mathml" ? Ue.createElementNS(tc, e) : n ? Ue.createElement(e, { is: n }) : Ue.createElement(e);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Ue.createTextNode(e),
  createComment: (e) => Ue.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ue.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, i, r) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      ti.innerHTML = Nr(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const c = ti.content;
      if (o === "svg" || o === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, oc = Symbol("_vtc");
function ic(e, t, n) {
  const o = e[oc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ni = Symbol("_vod"), rc = Symbol("_vsh"), sc = Symbol(mt.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), lc = /(^|;)\s*display\s*:/;
function cc(e, t, n) {
  const o = e.style, i = G(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (G(t))
        for (const s of t.split(";")) {
          const c = s.slice(0, s.indexOf(":")).trim();
          n[c] == null && ln(o, c, "");
        }
      else
        for (const s in t)
          n[s] == null && ln(o, s, "");
    for (const s in n)
      s === "display" && (r = !0), ln(o, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = o[sc];
      s && (n += ";" + s), o.cssText = n, r = lc.test(n);
    }
  } else t && e.removeAttribute("style");
  ni in e && (e[ni] = r ? o.display : "", e[rc] && (o.display = "none"));
}
const fc = /[^\\];\s*$/, oi = /\s*!important$/;
function ln(e, t, n) {
  if ($(n))
    n.forEach((o) => ln(e, t, o));
  else if (n == null && (n = ""), mt.env.NODE_ENV !== "production" && fc.test(n) && Cn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = uc(e, t);
    oi.test(n) ? e.setProperty(
      Xe(o),
      n.replace(oi, ""),
      "important"
    ) : e[o] = n;
  }
}
const ii = ["Webkit", "Moz", "ms"], Un = {};
function uc(e, t) {
  const n = Un[t];
  if (n)
    return n;
  let o = be(t);
  if (o !== "filter" && o in e)
    return Un[t] = o;
  o = yn(o);
  for (let i = 0; i < ii.length; i++) {
    const r = ii[i] + o;
    if (r in e)
      return Un[t] = r;
  }
  return t;
}
const ri = "http://www.w3.org/1999/xlink";
function si(e, t, n, o, i, r = Fr(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ri, t.slice(6, t.length)) : e.setAttributeNS(ri, t, n) : n == null || r && !hi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : bt(n) ? String(n) : n
  );
}
function li(e, t, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Nr(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = hi(n) : n == null && c === "string" ? (n = "", s = !0) : c === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (c) {
    mt.env.NODE_ENV !== "production" && !s && Cn(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      c
    );
  }
  s && e.removeAttribute(i || t);
}
function ac(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function dc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const ci = Symbol("_vei");
function pc(e, t, n, o, i = null) {
  const r = e[ci] || (e[ci] = {}), s = r[t];
  if (o && s)
    s.value = mt.env.NODE_ENV !== "production" ? ui(o, t) : o;
  else {
    const [c, u] = hc(t);
    if (o) {
      const g = r[t] = vc(
        mt.env.NODE_ENV !== "production" ? ui(o, t) : o,
        i
      );
      ac(e, c, g, u);
    } else s && (dc(e, c, s, u), r[t] = void 0);
  }
}
const fi = /(?:Once|Passive|Capture)$/;
function hc(e) {
  let t;
  if (fi.test(e)) {
    t = {};
    let o;
    for (; o = e.match(fi); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Xe(e.slice(2)), t];
}
let Kn = 0;
const gc = /* @__PURE__ */ Promise.resolve(), _c = () => Kn || (gc.then(() => Kn = 0), Kn = Date.now());
function vc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    je(
      Ec(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = _c(), n;
}
function ui(e, t) {
  return P(e) || $(e) ? e : (Cn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), X);
}
function Ec(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const ai = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, mc = (e, t, n, o, i, r) => {
  const s = i === "svg";
  t === "class" ? ic(e, o, s) : t === "style" ? cc(e, n, o) : Kt(t) ? cn(t) || pc(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nc(e, t, o, s)) ? (li(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && si(e, t, o, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !G(o)) ? li(e, be(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), si(e, t, o, s));
};
function Nc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ai(t) && P(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return ai(t) && G(n) ? !1 : t in e;
}
const bc = /* @__PURE__ */ Q({ patchProp: mc }, nc);
let di;
function yc() {
  return di || (di = bl(bc));
}
const Vc = (...e) => {
  yc().render(...e);
};
var Oc = { env: {} };
function Dc() {
  Ql();
}
Oc.env.NODE_ENV !== "production" && Dc();
export {
  Oe as Comment,
  jr as EffectScope,
  Ie as Fragment,
  gi as ReactiveEffect,
  rn as Static,
  Jt as Text,
  je as callWithAsyncErrorHandling,
  yt as callWithErrorHandling,
  be as camelize,
  yn as capitalize,
  Qe as cloneVNode,
  Zl as computed,
  Rl as createElementVNode,
  bl as createRenderer,
  jl as createTextVNode,
  Ne as createVNode,
  Wl as getCurrentInstance,
  Hr as getCurrentScope,
  Fl as guardReactiveProps,
  wc as h,
  Bt as handleError,
  Ql as initCustomFormatter,
  nn as inject,
  un as isProxy,
  gt as isReactive,
  Ze as isReadonly,
  Z as isRef,
  kl as isRuntimeOnly,
  _e as isShallow,
  Et as isVNode,
  rs as markRaw,
  Hl as mergeProps,
  Es as nextTick,
  fo as normalizeClass,
  co as normalizeStyle,
  Rs as onActivated,
  Hs as onBeforeMount,
  Ws as onBeforeUnmount,
  Us as onBeforeUpdate,
  Fs as onDeactivated,
  ks as onErrorCaptured,
  Ls as onMounted,
  Js as onRenderTracked,
  qs as onRenderTriggered,
  Bs as onServerPrefetch,
  Yi as onUnmounted,
  Ks as onUpdated,
  us as onWatcherCleanup,
  sl as provide,
  Pi as proxyRefs,
  Fi as queuePostFlushCb,
  go as reactive,
  Ii as readonly,
  Vc as render,
  Go as setBlockTracking,
  mo as setTransitionHooks,
  is as shallowReactive,
  Me as shallowReadonly,
  xl as ssrContextKey,
  nt as toHandlerKey,
  M as toRaw,
  ss as unref,
  wl as useSSRContext,
  Qo as version,
  Cn as warn,
  Ln as watch,
  Is as withCtx
};
