(() => {
    var u3 = Object.defineProperty;
    var ga = (t, e) => {
        for (var o in e) u3(t, o, {
            get: e[o],
            enumerable: !0
        })
    };

    function X() {}

    function d3(t, e) {
        for (let o in e) t[o] = e[o];
        return t
    }

    function gl(t) {
        return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function"
    }

    function va(t) {
        return t()
    }

    function mi() {
        return Object.create(null)
    }

    function ft(t) {
        t.forEach(va)
    }

    function hn(t) {
        return typeof t == "function"
    }

    function xt(t, e) {
        return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
    }
    var di;

    function $e(t, e) {
        return t === e ? !0 : (di || (di = document.createElement("a")), di.href = e, t === di.href)
    }

    function pi(t, e) {
        return t != t ? e == e : t !== e
    }

    function vl(t) {
        return Object.keys(t).length === 0
    }

    function hi(t, ...e) {
        if (t == null) {
            for (let r of e) r(void 0);
            return X
        }
        let o = t.subscribe(...e);
        return o.unsubscribe ? () => o.unsubscribe() : o
    }

    function gi(t, e, o) {
        t.$$.on_destroy.push(hi(e, o))
    }

    function xl(t, e, o, r) {
        if (t) {
            let n = bl(t, e, o, r);
            return t[0](n)
        }
    }

    function bl(t, e, o, r) {
        return t[1] && r ? d3(o.ctx.slice(), t[1](r(e))) : o.ctx
    }

    function wl(t, e, o, r) {
        if (t[2] && r) {
            let n = t[2](r(o));
            if (e.dirty === void 0) return n;
            if (typeof n == "object") {
                let i = [],
                    s = Math.max(e.dirty.length, n.length);
                for (let a = 0; a < s; a += 1) i[a] = e.dirty[a] | n[a];
                return i
            }
            return e.dirty | n
        }
        return e.dirty
    }

    function _l(t, e, o, r, n, i) {
        if (n) {
            let s = bl(e, o, r, i);
            t.p(s, n)
        }
    }

    function yl(t) {
        if (t.ctx.length > 32) {
            let e = [],
                o = t.ctx.length / 32;
            for (let r = 0; r < o; r++) e[r] = -1;
            return e
        }
        return -1
    }

    function xa(t, e, o) {
        return t.set(o), e
    }
    var ba = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
    var vi = class t {
        _listeners = "WeakMap" in ba ? new WeakMap : void 0;
        _observer = void 0;
        options;
        constructor(e) {
            this.options = e
        }
        observe(e, o) {
            return this._listeners.set(e, o), this._getObserver().observe(e, this.options), () => {
                this._listeners.delete(e), this._observer.unobserve(e)
            }
        }
        _getObserver() {
            return this._observer ?? (this._observer = new ResizeObserver(e => {
                for (let o of e) t.entries.set(o.target, o), this._listeners.get(o.target)?.(o)
            }))
        }
    };
    vi.entries = "WeakMap" in ba ? new WeakMap : void 0;
    var Ml = !1;

    function kl() {
        Ml = !0
    }

    function Fl() {
        Ml = !1
    }

    function b(t, e) {
        t.appendChild(e)
    }

    function z(t, e, o) {
        t.insertBefore(e, o || null)
    }

    function I(t) {
        t.parentNode && t.parentNode.removeChild(t)
    }

    function Ue(t, e) {
        for (let o = 0; o < t.length; o += 1) t[o] && t[o].d(e)
    }

    function C(t) {
        return document.createElement(t)
    }

    function B(t) {
        return document.createTextNode(t)
    }

    function Le() {
        return B(" ")
    }

    function pe() {
        return B("")
    }

    function De(t, e, o, r) {
        return t.addEventListener(e, o, r), () => t.removeEventListener(e, o, r)
    }

    function F(t, e, o) {
        o == null ? t.removeAttribute(e) : t.getAttribute(e) !== o && t.setAttribute(e, o)
    }

    function Cl(t) {
        return Array.from(t.childNodes)
    }

    function Q(t, e) {
        e = "" + e, t.data !== e && (t.data = e)
    }

    function wr(t, e) {
        t.value = e ?? ""
    }

    function He(t, e, o, r) {
        o == null ? t.style.removeProperty(e) : t.style.setProperty(e, o, r ? "important" : "")
    }

    function xi(t, e, {
        bubbles: o = !1,
        cancelable: r = !1
    } = {}) {
        return new CustomEvent(t, {
            detail: e,
            bubbles: o,
            cancelable: r
        })
    }

    function Al(t) {
        let e = {};
        return t.childNodes.forEach(o => {
            e[o.slot || "default"] = !0
        }), e
    }
    var Fo;

    function Rt(t) {
        Fo = t
    }

    function gn() {
        if (!Fo) throw new Error("Function called outside component initialization");
        return Fo
    }

    function vn(t) {
        gn().$$.on_mount.push(t)
    }

    function wa(t) {
        gn().$$.after_update.push(t)
    }

    function Qt() {
        let t = gn();
        return (e, o, {
            cancelable: r = !1
        } = {}) => {
            let n = t.$$.callbacks[e];
            if (n) {
                let i = xi(e, o, {
                    cancelable: r
                });
                return n.slice().forEach(s => {
                    s.call(t, i)
                }), !i.defaultPrevented
            }
            return !0
        }
    }
    var $o = [];
    var Ho = [],
        yr = [],
        Sl = [],
        w3 = Promise.resolve(),
        ya = !1;

    function Pl() {
        ya || (ya = !0, w3.then(bn))
    }

    function xn(t) {
        yr.push(t)
    }
    var _a = new Set,
        _r = 0;

    function bn() {
        if (_r !== 0) return;
        let t = Fo;
        do {
            try {
                for (; _r < $o.length;) {
                    let e = $o[_r];
                    _r++, Rt(e), _3(e.$$)
                }
            } catch (e) {
                throw $o.length = 0, _r = 0, e
            }
            for (Rt(null), $o.length = 0, _r = 0; Ho.length;) Ho.pop()();
            for (let e = 0; e < yr.length; e += 1) {
                let o = yr[e];
                _a.has(o) || (_a.add(o), o())
            }
            yr.length = 0
        } while ($o.length);
        for (; Sl.length;) Sl.pop()();
        ya = !1, _a.clear(), Rt(t)
    }

    function _3(t) {
        if (t.fragment !== null) {
            t.update(), ft(t.before_update);
            let e = t.dirty;
            t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(xn)
        }
    }

    function El(t) {
        let e = [],
            o = [];
        yr.forEach(r => t.indexOf(r) === -1 ? e.push(r) : o.push(r)), o.forEach(r => r()), yr = e
    }
    var bi = new Set,
        Yo;

    function Ft() {
        Yo = {
            r: 0,
            c: [],
            p: Yo
        }
    }

    function Ct() {
        Yo.r || ft(Yo.c), Yo = Yo.p
    }

    function he(t, e) {
        t && t.i && (bi.delete(t), t.i(e))
    }

    function ye(t, e, o, r) {
        if (t && t.o) {
            if (bi.has(t)) return;
            bi.add(t), Yo.c.push(() => {
                bi.delete(t), r && (o && t.d(1), r())
            }), t.o(e)
        } else r && r()
    }

    function Mr(t, e) {
        let o = e.token = {};

        function r(n, i, s, a) {
            if (e.token !== o) return;
            e.resolved = a;
            let c = e.ctx;
            s !== void 0 && (c = c.slice(), c[s] = a);
            let l = n && (e.current = n)(c),
                f = !1;
            e.block && (e.blocks ? e.blocks.forEach((u, d) => {
                d !== i && u && (Ft(), ye(u, 1, 1, () => {
                    e.blocks[d] === u && (e.blocks[d] = null)
                }), Ct())
            }) : e.block.d(1), l.c(), he(l, 1), l.m(e.mount(), e.anchor), f = !0), e.block = l, e.blocks && (e.blocks[i] = l), f && bn()
        }
        if (gl(t)) {
            let n = gn();
            if (t.then(i => {
                    Rt(n), r(e.then, 1, e.value, i), Rt(null)
                }, i => {
                    if (Rt(n), r(e.catch, 2, e.error, i), Rt(null), !e.hasCatch) throw i
                }), e.current !== e.pending) return r(e.pending, 0), !0
        } else {
            if (e.current !== e.then) return r(e.then, 1, e.value, t), !0;
            e.resolved = t
        }
    }

    function wi(t, e, o) {
        let r = e.slice(),
            {
                resolved: n
            } = t;
        t.current === t.then && (r[t.value] = n), t.current === t.catch && (r[t.error] = n), t.block.p(r, o)
    }

    function le(t) {
        return t?.length !== void 0 ? t : Array.from(t)
    }
    var y3 = ["allowfullscreen", "allowpaymentrequest", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected"],
        M3 = new Set([...y3]);

    function yt(t) {
        t && t.c()
    }

    function bt(t, e, o) {
        let {
            fragment: r,
            after_update: n
        } = t.$$;
        r && r.m(e, o), xn(() => {
            let i = t.$$.on_mount.map(va).filter(hn);
            t.$$.on_destroy ? t.$$.on_destroy.push(...i) : ft(i), t.$$.on_mount = []
        }), n.forEach(xn)
    }

    function wt(t, e) {
        let o = t.$$;
        o.fragment !== null && (El(o.after_update), ft(o.on_destroy), o.fragment && o.fragment.d(e), o.on_destroy = o.fragment = null, o.ctx = [])
    }

    function F3(t, e) {
        t.$$.dirty[0] === -1 && ($o.push(t), Pl(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
    }

    function ut(t, e, o, r, n, i, s = null, a = [-1]) {
        let c = Fo;
        Rt(t);
        let l = t.$$ = {
            fragment: null,
            ctx: [],
            props: i,
            update: X,
            not_equal: n,
            bound: mi(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(e.context || (c ? c.$$.context : [])),
            callbacks: mi(),
            dirty: a,
            skip_bound: !1,
            root: e.target || c.$$.root
        };
        s && s(l.root);
        let f = !1;
        if (l.ctx = o ? o(t, e.props || {}, (u, d, ...m) => {
                let h = m.length ? m[0] : d;
                return l.ctx && n(l.ctx[u], l.ctx[u] = h) && (!l.skip_bound && l.bound[u] && l.bound[u](h), f && F3(t, u)), d
            }) : [], l.update(), f = !0, ft(l.before_update), l.fragment = r ? r(l.ctx) : !1, e.target) {
            if (e.hydrate) {
                kl();
                let u = Cl(e.target);
                l.fragment && l.fragment.l(u), u.forEach(I)
            } else l.fragment && l.fragment.c();
            e.intro && he(t.$$.fragment), bt(t, e.target, e.anchor), Fl(), bn()
        }
        Rt(c)
    }
    var C3;
    typeof HTMLElement == "function" && (C3 = class extends HTMLElement {
        $$ctor;
        $$s;
        $$c;
        $$cn = !1;
        $$d = {};
        $$r = !1;
        $$p_d = {};
        $$l = {};
        $$l_u = new Map;
        constructor(t, e, o) {
            super(), this.$$ctor = t, this.$$s = e, o && this.attachShadow({
                mode: "open"
            })
        }
        addEventListener(t, e, o) {
            if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(e), this.$$c) {
                let r = this.$$c.$on(t, e);
                this.$$l_u.set(e, r)
            }
            super.addEventListener(t, e, o)
        }
        removeEventListener(t, e, o) {
            if (super.removeEventListener(t, e, o), this.$$c) {
                let r = this.$$l_u.get(e);
                r && (r(), this.$$l_u.delete(e))
            }
        }
        async connectedCallback() {
            if (this.$$cn = !0, !this.$$c) {
                let t = function(n) {
                    return () => {
                        let i;
                        return {
                            c: function() {
                                i = C("slot"), n !== "default" && F(i, "name", n)
                            },
                            m: function(c, l) {
                                z(c, i, l)
                            },
                            d: function(c) {
                                c && I(i)
                            }
                        }
                    }
                };
                if (await Promise.resolve(), !this.$$cn) return;
                let e = {},
                    o = Al(this);
                for (let n of this.$$s) n in o && (e[n] = [t(n)]);
                for (let n of this.attributes) {
                    let i = this.$$g_p(n.name);
                    i in this.$$d || (this.$$d[i] = Ma(i, n.value, this.$$p_d, "toProp"))
                }
                for (let n in this.$$p_d) !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
                this.$$c = new this.$$ctor({
                    target: this.shadowRoot || this,
                    props: {
                        ...this.$$d,
                        $$slots: e,
                        $$scope: {
                            ctx: []
                        }
                    }
                });
                let r = () => {
                    this.$$r = !0;
                    for (let n in this.$$p_d)
                        if (this.$$d[n] = this.$$c.$$.ctx[this.$$c.$$.props[n]], this.$$p_d[n].reflect) {
                            let i = Ma(n, this.$$d[n], this.$$p_d, "toAttribute");
                            i == null ? this.removeAttribute(this.$$p_d[n].attribute || n) : this.setAttribute(this.$$p_d[n].attribute || n, i)
                        } this.$$r = !1
                };
                this.$$c.$$.after_update.push(r), r();
                for (let n in this.$$l)
                    for (let i of this.$$l[n]) {
                        let s = this.$$c.$on(n, i);
                        this.$$l_u.set(i, s)
                    }
                this.$$l = {}
            }
        }
        attributeChangedCallback(t, e, o) {
            this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ma(t, o, this.$$p_d, "toProp"), this.$$c?.$set({
                [t]: this.$$d[t]
            }))
        }
        disconnectedCallback() {
            this.$$cn = !1, Promise.resolve().then(() => {
                this.$$cn || (this.$$c.$destroy(), this.$$c = void 0)
            })
        }
        $$g_p(t) {
            return Object.keys(this.$$p_d).find(e => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t) || t
        }
    });

    function Ma(t, e, o, r) {
        let n = o[t]?.type;
        if (e = n === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !o[t]) return e;
        if (r === "toAttribute") switch (n) {
            case "Object":
            case "Array":
                return e == null ? null : JSON.stringify(e);
            case "Boolean":
                return e ? "" : null;
            case "Number":
                return e ?? null;
            default:
                return e
        } else switch (n) {
            case "Object":
            case "Array":
                return e && JSON.parse(e);
            case "Boolean":
                return e;
            case "Number":
                return e != null ? +e : e;
            default:
                return e
        }
    }
    var nt = class {
        $$ = void 0;
        $$set = void 0;
        $destroy() {
            wt(this, 1), this.$destroy = X
        }
        $on(e, o) {
            if (!hn(o)) return X;
            let r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return r.push(o), () => {
                let n = r.indexOf(o);
                n !== -1 && r.splice(n, 1)
            }
        }
        $set(e) {
            this.$$set && !vl(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
        }
    };
    var Ll = "4";
    var kr = [];

    function y(t, e = X) {
        let o, r = new Set;

        function n(a) {
            if (xt(t, a) && (t = a, o)) {
                let c = !kr.length;
                for (let l of r) l[1](), kr.push(l, t);
                if (c) {
                    for (let l = 0; l < kr.length; l += 2) kr[l][0](kr[l + 1]);
                    kr.length = 0
                }
            }
        }

        function i(a) {
            n(a(t))
        }

        function s(a, c = X) {
            let l = [a, c];
            return r.add(l), r.size === 1 && (o = e(n, i) || X), a(t), () => {
                r.delete(l), r.size === 0 && o && (o(), o = null)
            }
        }
        return {
            set: n,
            update: i,
            subscribe: s
        }
    }
    var S6 = y([]),
        P6 = y({
            role: 0,
            nearby: 0,
            exprate: 1,
            itemfind: 1,
            queues: [],
            membercount: 0
        }),
        E6 = y({
            parties: [],
            filterActivity: -1,
            showFull: !0,
            showAuto: !0
        }),
        L6 = y({
            flashing: !1,
            message: "",
            activity: 0,
            listed: !1,
            applications: []
        }),
        D6 = y([]),
        T6 = y(),
        I6 = y([]),
        z6 = y({}),
        V6 = y(),
        _i = y(!1),
        R6 = y(),
        Dl = y(!1),
        yi = y("Loading World"),
        U6 = y([]),
        Tl = y(""),
        B6 = y({}),
        j6 = y({}),
        q6 = y([]),
        N6 = y([]),
        Mi = y(),
        O6 = y("auto"),
        W6 = y(0),
        G6 = y(0),
        $6 = y(0),
        H6 = y([]),
        Y6 = y({}),
        X6 = y({}),
        Q6 = y({
            current: 0,
            max: 1
        }),
        Z6 = y(),
        K6 = y(),
        J6 = y(!1),
        ek = y(0),
        tk = y([0, 0]),
        ok = y(),
        rk = y(),
        nk = y(!1),
        ik = y(new Map),
        sk = y(new Map),
        ak = y(),
        ck = y(),
        lk = y(new Map),
        fk = y(new Set),
        uk = y(),
        dk = y([]),
        mk = y(),
        pk = y(0),
        hk = y(!1),
        gk = y(!1),
        vk = y(),
        xk = y({
            self: [],
            other: [],
            nonOrAcc: [],
            all: []
        }),
        bk = y(),
        wk = y(),
        _k = y(),
        yk = y(),
        Mk = y({}),
        kk = y({}),
        Fk = y({}),
        Ck = y({}),
        Ak = y(),
        Sk = y();
    var Pk = y(),
        Ek = y(!1);
    var Ei = {};
    ga(Ei, {
        activeWorld: () => wn,
        alwaysShowLevel: () => Cf,
        ambienceVolume: () => Wl,
        anisotropy: () => Nl,
        audioVolume: () => Ai,
        audioVolumeLowered: () => Si,
        bloom: () => jl,
        buffCdFlashingDuration: () => eu,
        buffCdFlashingInterval: () => Jf,
        buffcountParty: () => au,
        buffcountUnitframes: () => su,
        buffsHideIrrelevant: () => cu,
        cameraZoom: () => vf,
        cdTextBuffs: () => Kf,
        cdTextSkills: () => Zf,
        charpanelOpen: () => pf,
        chatbubbles: () => Df,
        clanOpen: () => cf,
        classColorBars: () => Sf,
        combatTextPush: () => Af,
        command: () => $l,
        current: () => Ve,
        disableoffscreen: () => Ul,
        dpsmeterMode: () => df,
        dpsmeterOpen: () => tf,
        dpsmeterParty: () => uf,
        dpsmeterTarget: () => mf,
        expmeterOpen: () => rf,
        filteredChannels: () => Vf,
        fogpattern: () => Ol,
        foliage: () => zl,
        fov: () => Fi,
        fxaa: () => Rl,
        inventoryCols: () => Zl,
        inventoryOpen: () => Kl,
        invertMouseX: () => du,
        invertMouseY: () => mu,
        itemProtectQuality: () => Nf,
        itemQualityFilter: () => Uf,
        itemQualityPercent: () => jf,
        itemTypeFilter: () => Rf,
        itemmeterOpen: () => of,
        kbAltBack: () => yu,
        kbAltForward: () => _u,
        kbBack: () => ku,
        kbCharacter: () => Lu,
        kbClan: () => Tu,
        kbForward: () => xu,
        kbInventory: () => Du,
        kbLeft: () => Mu,
        kbMap: () => Pu,
        kbNextParty: () => Au,
        kbNextTarget: () => Cu,
        kbParty: () => zu,
        kbPvp: () => Iu,
        kbRight: () => Fu,
        kbSkillbar1: () => Ru,
        kbSkillbar10: () => $u,
        kbSkillbar11: () => Hu,
        kbSkillbar12: () => Yu,
        kbSkillbar13: () => Xu,
        kbSkillbar14: () => Qu,
        kbSkillbar15: () => Zu,
        kbSkillbar16: () => Ku,
        kbSkillbar17: () => Ju,
        kbSkillbar18: () => ed,
        kbSkillbar19: () => td,
        kbSkillbar2: () => Uu,
        kbSkillbar20: () => od,
        kbSkillbar21: () => rd,
        kbSkillbar22: () => nd,
        kbSkillbar23: () => id,
        kbSkillbar24: () => sd,
        kbSkillbar3: () => Bu,
        kbSkillbar4: () => ju,
        kbSkillbar5: () => qu,
        kbSkillbar6: () => Nu,
        kbSkillbar7: () => Ou,
        kbSkillbar8: () => Wu,
        kbSkillbar9: () => Gu,
        kbSkills: () => Eu,
        kbSocial: () => Vu,
        kbTurnLeft: () => bu,
        kbTurnRight: () => wu,
        kbUntarget: () => Su,
        lang: () => Pi,
        lastConnectedChar: () => _n,
        leaveEmptyParty: () => nu,
        lockedcamera: () => pu,
        mapLowQuality: () => Ef,
        mapShowMonsters: () => Pf,
        mapWindowOpen: () => hf,
        materialQualityFilter: () => Bf,
        mouseSensitivity: () => uu,
        msgExpGain: () => Wf,
        msgFame: () => Gf,
        msgFriendOnlineStatus: () => Qf,
        msgGoldPickUp: () => Xf,
        msgItemPartyPickUp: () => Yf,
        msgItemPartyRoll: () => Hf,
        msgItemPickup: () => $f,
        musicVolume: () => Gl,
        nameShowEnemyPlayers: () => kf,
        nameShowFriendlyPlayers: () => Mf,
        nameShowMonsters: () => yf,
        nameplateShowEnemyPlayers: () => _f,
        nameplateShowFriendlyPlayers: () => wf,
        nameplateShowMonsters: () => bf,
        nameplateShowTransparency: () => Ff,
        nameplateViewRange: () => xf,
        nextFriendlyTargetAllowNonParty: () => gu,
        nextFriendlyTargetCycle: () => vu,
        particles: () => ql,
        partyBuffLimitUpdateRate: () => tu,
        partyOpen: () => af,
        partyWidth: () => ou,
        pointerlock: () => hu,
        pvpOpen: () => ff,
        registerSetting: () => cd,
        resolution: () => Ci,
        settingsOpen: () => Jl,
        shadowmapResolution: () => Vl,
        shadows: () => Bl,
        showFpsPing: () => qf,
        showIncomingDamage: () => If,
        showIncomingHeal: () => Tf,
        showIncomingMana: () => zf,
        showPartyMana: () => iu,
        showSelfInParty: () => ru,
        skillConfigs: () => lu,
        skillPresetVisible: () => fu,
        skillbarAmount: () => ad,
        skillbarsettings: () => gf,
        skillmenuOpen: () => ef,
        socialOpen: () => lf,
        stashCols: () => Hl,
        stashHeight: () => Yl,
        stashShowGroups: () => Xl,
        stashShowSettings: () => Ql,
        subscriptionOpen: () => sf,
        tutprogress: () => Lf,
        twitchOpen: () => nf,
        viewRange: () => ki,
        windowSettings: () => Of
    });
    var ka = {};
    ga(ka, {
        activeWorld: () => wn,
        alwaysShowLevel: () => Cf,
        ambienceVolume: () => Wl,
        anisotropy: () => Nl,
        audioVolume: () => Ai,
        audioVolumeLowered: () => Si,
        bloom: () => jl,
        buffCdFlashingDuration: () => eu,
        buffCdFlashingInterval: () => Jf,
        buffcountParty: () => au,
        buffcountUnitframes: () => su,
        buffsHideIrrelevant: () => cu,
        cameraZoom: () => vf,
        cdTextBuffs: () => Kf,
        cdTextSkills: () => Zf,
        charpanelOpen: () => pf,
        chatbubbles: () => Df,
        clanOpen: () => cf,
        classColorBars: () => Sf,
        combatTextPush: () => Af,
        command: () => $l,
        disableoffscreen: () => Ul,
        dpsmeterMode: () => df,
        dpsmeterOpen: () => tf,
        dpsmeterParty: () => uf,
        dpsmeterTarget: () => mf,
        expmeterOpen: () => rf,
        filteredChannels: () => Vf,
        fogpattern: () => Ol,
        foliage: () => zl,
        fov: () => Fi,
        fxaa: () => Rl,
        inventoryCols: () => Zl,
        inventoryOpen: () => Kl,
        invertMouseX: () => du,
        invertMouseY: () => mu,
        itemProtectQuality: () => Nf,
        itemQualityFilter: () => Uf,
        itemQualityPercent: () => jf,
        itemTypeFilter: () => Rf,
        itemmeterOpen: () => of,
        kbAltBack: () => yu,
        kbAltForward: () => _u,
        kbBack: () => ku,
        kbCharacter: () => Lu,
        kbClan: () => Tu,
        kbForward: () => xu,
        kbInventory: () => Du,
        kbLeft: () => Mu,
        kbMap: () => Pu,
        kbNextParty: () => Au,
        kbNextTarget: () => Cu,
        kbParty: () => zu,
        kbPvp: () => Iu,
        kbRight: () => Fu,
        kbSkillbar1: () => Ru,
        kbSkillbar10: () => $u,
        kbSkillbar11: () => Hu,
        kbSkillbar12: () => Yu,
        kbSkillbar13: () => Xu,
        kbSkillbar14: () => Qu,
        kbSkillbar15: () => Zu,
        kbSkillbar16: () => Ku,
        kbSkillbar17: () => Ju,
        kbSkillbar18: () => ed,
        kbSkillbar19: () => td,
        kbSkillbar2: () => Uu,
        kbSkillbar20: () => od,
        kbSkillbar21: () => rd,
        kbSkillbar22: () => nd,
        kbSkillbar23: () => id,
        kbSkillbar24: () => sd,
        kbSkillbar3: () => Bu,
        kbSkillbar4: () => ju,
        kbSkillbar5: () => qu,
        kbSkillbar6: () => Nu,
        kbSkillbar7: () => Ou,
        kbSkillbar8: () => Wu,
        kbSkillbar9: () => Gu,
        kbSkills: () => Eu,
        kbSocial: () => Vu,
        kbTurnLeft: () => bu,
        kbTurnRight: () => wu,
        kbUntarget: () => Su,
        lang: () => Pi,
        lastConnectedChar: () => _n,
        leaveEmptyParty: () => nu,
        lockedcamera: () => pu,
        mapLowQuality: () => Ef,
        mapShowMonsters: () => Pf,
        mapWindowOpen: () => hf,
        materialQualityFilter: () => Bf,
        mouseSensitivity: () => uu,
        msgExpGain: () => Wf,
        msgFame: () => Gf,
        msgFriendOnlineStatus: () => Qf,
        msgGoldPickUp: () => Xf,
        msgItemPartyPickUp: () => Yf,
        msgItemPartyRoll: () => Hf,
        msgItemPickup: () => $f,
        musicVolume: () => Gl,
        nameShowEnemyPlayers: () => kf,
        nameShowFriendlyPlayers: () => Mf,
        nameShowMonsters: () => yf,
        nameplateShowEnemyPlayers: () => _f,
        nameplateShowFriendlyPlayers: () => wf,
        nameplateShowMonsters: () => bf,
        nameplateShowTransparency: () => Ff,
        nameplateViewRange: () => xf,
        nextFriendlyTargetAllowNonParty: () => gu,
        nextFriendlyTargetCycle: () => vu,
        particles: () => ql,
        partyBuffLimitUpdateRate: () => tu,
        partyOpen: () => af,
        partyWidth: () => ou,
        pointerlock: () => hu,
        pvpOpen: () => ff,
        resolution: () => Ci,
        settingsOpen: () => Jl,
        shadowmapResolution: () => Vl,
        shadows: () => Bl,
        showFpsPing: () => qf,
        showIncomingDamage: () => If,
        showIncomingHeal: () => Tf,
        showIncomingMana: () => zf,
        showPartyMana: () => iu,
        showSelfInParty: () => ru,
        skillConfigs: () => lu,
        skillPresetVisible: () => fu,
        skillbarAmount: () => ad,
        skillbarsettings: () => gf,
        skillmenuOpen: () => ef,
        socialOpen: () => lf,
        stashCols: () => Hl,
        stashHeight: () => Yl,
        stashShowGroups: () => Xl,
        stashShowSettings: () => Ql,
        subscriptionOpen: () => sf,
        tutprogress: () => Lf,
        twitchOpen: () => nf,
        viewRange: () => ki,
        windowSettings: () => Of
    });
    var A3 = new Set(["en", "de", "ru", "zh", "pt", "es", "fr", "ro", "it", "nl", "vi", "hu", "cs", "pl"]),
        S3 = typeof navigator > "u" ? "en" : (navigator.languages || [navigator.language]).map(t => t && t.split("-")[0]).find(t => A3.has(t)) || "en",
        wn = y(""),
        _n = y(0),
        ki = y(60),
        Fi = y(70),
        Ci = y(100),
        zl = y(100),
        Vl = y(2),
        Rl = y(!0),
        Ul = y(!0),
        Bl = y(!0),
        jl = y(!0),
        ql = y(!0),
        Nl = y(4),
        Ol = y(!0),
        Wl = y(40),
        Ai = y(70),
        Si = y(80),
        Gl = y(30),
        Pi = y(S3),
        $l = y("global"),
        Hl = y(8),
        Yl = y(300),
        Xl = y(2),
        Ql = y(!1),
        Zl = y(5),
        Kl = y(!1),
        Jl = y(!1),
        ef = y(!1),
        tf = y(!1),
        of = y(!0),
        rf = y(!0),
        nf = y(!0),
        sf = y(!1),
        af = y(!1),
        cf = y(!1),
        lf = y(!1),
        ff = y(!1),
        uf = y(!0),
        df = y(0),
        mf = y(0),
        pf = y(!1),
        hf = y(!1),
        gf = y({}),
        vf = y(7),
        xf = y(100),
        bf = y(!0),
        wf = y(!0),
        _f = y(!0),
        yf = y(!0),
        Mf = y(!0),
        kf = y(!0),
        Ff = y(!0),
        Cf = y(!1),
        Af = y(!0),
        Sf = y(!1),
        Pf = y(!0),
        Ef = y(!1),
        Lf = y(0),
        Df = y(!0),
        Tf = y(!0),
        If = y(!0),
        zf = y(!0),
        Vf = y([]),
        Rf = y(""),
        Uf = y(0),
        Bf = y(0),
        jf = y(!1),
        qf = y(!1),
        Nf = y(70),
        Of = y([]),
        Wf = y(!1),
        Gf = y(!0),
        $f = y(!0),
        Hf = y(!0),
        Yf = y(!0),
        Xf = y(!0),
        Qf = y(!0),
        Zf = y(!0),
        Kf = y(!0),
        Jf = y(.5),
        eu = y(3),
        tu = y(!0),
        ou = y(200),
        ru = y(!0),
        nu = y(!0),
        iu = y(!1),
        su = y(14),
        au = y(8),
        cu = y(!1),
        lu = y([]),
        fu = y(!1),
        uu = y(1),
        du = y(!1),
        mu = y(!1),
        pu = y(!0),
        hu = y(!0),
        gu = y(!0),
        vu = y(10),
        xu = y("w"),
        bu = y("arrowleft"),
        wu = y("arrowright"),
        _u = y("arrowup"),
        yu = y("arrowdown"),
        Mu = y("a"),
        ku = y("s"),
        Fu = y("d"),
        Cu = y("tab"),
        Au = y("x"),
        Su = y("escape"),
        Pu = y("m"),
        Eu = y("k"),
        Lu = y("c"),
        Du = y("b"),
        Tu = y("g"),
        Iu = y("v"),
        zu = y("p"),
        Vu = y("i"),
        Ru = y("1"),
        Uu = y("2"),
        Bu = y("3"),
        ju = y("4"),
        qu = y("5"),
        Nu = y("6"),
        Ou = y("7"),
        Wu = y("8"),
        Gu = y("9"),
        $u = y("0"),
        Hu = y(""),
        Yu = y(""),
        Xu = y(""),
        Qu = y(""),
        Zu = y(""),
        Ku = y(""),
        Ju = y(""),
        ed = y(""),
        td = y(""),
        od = y(""),
        rd = y(""),
        nd = y(""),
        id = y(""),
        sd = y(""),
        ad = y(12);
    var Fa;
    Fa = {
        ...ka
    };
    var cd = (t, e) => {
            if (t === "activeWorld" || t === "lastConnectedChar") {
                let o = localStorage.getItem(t),
                    r = JSON.parse(o == "undefined" ? null : o);
                r !== null && e.set(r)
            }
            e.subscribe(o => {
                Ve[t] = o, (t === "activeWorld" || t === "lastConnectedChar") && localStorage.setItem(t, JSON.stringify(o))
            })
        },
        Ve = {};
    for (let t in Fa) cd(t, Fa[t]);
    var Z;
    Pi.subscribe(async t => {
        await fetch(`/data/loc/${t}.json?v=8926940`).then(async e => {
            Z = await e.json(), _i.set(!0)
        })
    });

    function Zt() {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }

    function ld(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
    }

    function Ca(t, e) {
        let o = e[0],
            r = e[1],
            n = e[2],
            i = e[3],
            s = e[4],
            a = e[5],
            c = e[6],
            l = e[7],
            f = e[8],
            u = e[9],
            d = e[10],
            m = e[11],
            h = e[12],
            g = e[13],
            M = e[14],
            x = e[15],
            w = o * a - r * s,
            k = o * c - n * s,
            U = o * l - i * s,
            D = r * c - n * a,
            V = r * l - i * a,
            fe = n * l - i * c,
            N = f * g - u * h,
            O = f * M - d * h,
            ne = f * x - m * h,
            J = u * M - d * g,
            re = u * x - m * g,
            P = d * x - m * M,
            G = w * P - k * re + U * J + D * ne - V * O + fe * N;
        return G ? (G = 1 / G, t[0] = (a * P - c * re + l * J) * G, t[1] = (n * re - r * P - i * J) * G, t[2] = (g * fe - M * V + x * D) * G, t[3] = (d * V - u * fe - m * D) * G, t[4] = (c * ne - s * P - l * O) * G, t[5] = (o * P - n * ne + i * O) * G, t[6] = (M * U - h * fe - x * k) * G, t[7] = (f * fe - d * U + m * k) * G, t[8] = (s * re - a * ne + l * N) * G, t[9] = (r * ne - o * re - i * N) * G, t[10] = (h * V - g * U + x * w) * G, t[11] = (u * U - f * V - m * w) * G, t[12] = (a * O - s * J - c * N) * G, t[13] = (o * J - r * O + n * N) * G, t[14] = (g * k - h * D - M * w) * G, t[15] = (f * D - u * k + d * w) * G, t) : null
    }

    function Li(t, e, o) {
        let r = e[0],
            n = e[1],
            i = e[2],
            s = e[3],
            a = e[4],
            c = e[5],
            l = e[6],
            f = e[7],
            u = e[8],
            d = e[9],
            m = e[10],
            h = e[11],
            g = e[12],
            M = e[13],
            x = e[14],
            w = e[15],
            k = o[0],
            U = o[1],
            D = o[2],
            V = o[3];
        return t[0] = k * r + U * a + D * u + V * g, t[1] = k * n + U * c + D * d + V * M, t[2] = k * i + U * l + D * m + V * x, t[3] = k * s + U * f + D * h + V * w, k = o[4], U = o[5], D = o[6], V = o[7], t[4] = k * r + U * a + D * u + V * g, t[5] = k * n + U * c + D * d + V * M, t[6] = k * i + U * l + D * m + V * x, t[7] = k * s + U * f + D * h + V * w, k = o[8], U = o[9], D = o[10], V = o[11], t[8] = k * r + U * a + D * u + V * g, t[9] = k * n + U * c + D * d + V * M, t[10] = k * i + U * l + D * m + V * x, t[11] = k * s + U * f + D * h + V * w, k = o[12], U = o[13], D = o[14], V = o[15], t[12] = k * r + U * a + D * u + V * g, t[13] = k * n + U * c + D * d + V * M, t[14] = k * i + U * l + D * m + V * x, t[15] = k * s + U * f + D * h + V * w, t
    }

    function fd(t, e) {
        return t[0] = e[12], t[1] = e[13], t[2] = e[14], t
    }

    function ud(t) {
        let e = t[0],
            o = t[1],
            r = t[2],
            n = t[4],
            i = t[5],
            s = t[6],
            a = t[8],
            c = t[9],
            l = t[10],
            f = e * e + o * o + r * r,
            u = n * n + i * i + s * s,
            d = a * a + c * c + l * l;
        return Math.sqrt(Math.max(f, u, d))
    }

    function dd(t, e) {
        let o = e[0] + e[5] + e[10],
            r = 0;
        return o > 0 ? (r = Math.sqrt(o + 1) * 2, t[3] = .25 * r, t[0] = (e[6] - e[9]) / r, t[1] = (e[8] - e[2]) / r, t[2] = (e[1] - e[4]) / r) : e[0] > e[5] && e[0] > e[10] ? (r = Math.sqrt(1 + e[0] - e[5] - e[10]) * 2, t[3] = (e[6] - e[9]) / r, t[0] = .25 * r, t[1] = (e[1] + e[4]) / r, t[2] = (e[8] + e[2]) / r) : e[5] > e[10] ? (r = Math.sqrt(1 + e[5] - e[0] - e[10]) * 2, t[3] = (e[8] - e[2]) / r, t[0] = (e[1] + e[4]) / r, t[1] = .25 * r, t[2] = (e[6] + e[9]) / r) : (r = Math.sqrt(1 + e[10] - e[0] - e[5]) * 2, t[3] = (e[1] - e[4]) / r, t[0] = (e[8] + e[2]) / r, t[1] = (e[6] + e[9]) / r, t[2] = .25 * r), t
    }

    function Di(t, e, o, r) {
        let n = e[0],
            i = e[1],
            s = e[2],
            a = e[3],
            c = n + n,
            l = i + i,
            f = s + s,
            u = n * c,
            d = n * l,
            m = n * f,
            h = i * l,
            g = i * f,
            M = s * f,
            x = a * c,
            w = a * l,
            k = a * f,
            U = r[0],
            D = r[1],
            V = r[2];
        return t[0] = (1 - (h + M)) * U, t[1] = (d + k) * U, t[2] = (m - w) * U, t[3] = 0, t[4] = (d - k) * D, t[5] = (1 - (u + M)) * D, t[6] = (g + x) * D, t[7] = 0, t[8] = (m + w) * V, t[9] = (g - x) * V, t[10] = (1 - (u + h)) * V, t[11] = 0, t[12] = o[0], t[13] = o[1], t[14] = o[2], t[15] = 1, t
    }

    function md(t, e, o, r, n) {
        let i = 1 / Math.tan(e / 2),
            s = 1 / (r - n);
        return t[0] = i / o, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = i, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (n + r) * s, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * n * r * s, t[15] = 0, t
    }

    function pd(t, e, o, r, n, i, s) {
        let a = 1 / (e - o),
            c = 1 / (r - n),
            l = 1 / (i - s);
        return t[0] = -2 * a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * c, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * l, t[11] = 0, t[12] = (e + o) * a, t[13] = (n + r) * c, t[14] = (s + i) * l, t[15] = 1, t
    }

    function Aa(t, e, o, r) {
        let n = e[0],
            i = e[1],
            s = e[2],
            a = r[0],
            c = r[1],
            l = r[2],
            f = n - o[0],
            u = i - o[1],
            d = s - o[2],
            m = f * f + u * u + d * d;
        m > 0 && (m = 1 / Math.sqrt(m), f *= m, u *= m, d *= m);
        let h = c * d - l * u,
            g = l * f - a * d,
            M = a * u - c * f;
        return m = h * h + g * g + M * M, m > 0 && (m = 1 / Math.sqrt(m), h *= m, g *= m, M *= m), t[0] = h, t[1] = g, t[2] = M, t[3] = 0, t[4] = u * M - d * g, t[5] = d * h - f * M, t[6] = f * g - u * h, t[7] = 0, t[8] = f, t[9] = u, t[10] = d, t[11] = 0, t[12] = n, t[13] = i, t[14] = s, t[15] = 1, t
    }

    function hd(t, e) {
        return t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1)), Math.abs(e[9]) < .99999 ? (t[1] = Math.atan2(e[8], e[10]), t[2] = Math.atan2(e[1], e[5])) : (t[1] = Math.atan2(-e[2], e[0]), t[2] = 0), t
    }

    function Mn(t) {
        let e = t[0],
            o = t[1],
            r = t[2];
        return Math.sqrt(e * e + o * o + r * r)
    }

    function Be(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
    }

    function se(t, e, o, r) {
        return t[0] = e, t[1] = o, t[2] = r, t
    }

    function Co(t, e) {
        return t[0] = e, t[1] = e, t[2] = e, t
    }

    function io(t, e, o) {
        return t[0] = e[0] + o[0], t[1] = e[1] + o[1], t[2] = e[2] + o[2], t
    }

    function Lt(t, e, o) {
        return t[0] = e[0] - o[0], t[1] = e[1] - o[1], t[2] = e[2] - o[2], t
    }

    function so(t, e, o) {
        return t[0] = e[0] * o, t[1] = e[1] * o, t[2] = e[2] * o, t
    }

    function Ti(t, e, o, r) {
        return t[0] = e[0] + o[0] * r, t[1] = e[1] + o[1] * r, t[2] = e[2] + o[2] * r, t
    }

    function Sa(t, e) {
        let o = e[0] - t[0],
            r = e[1] - t[1],
            n = e[2] - t[2];
        return Math.sqrt(o * o + r * r + n * n)
    }

    function kn(t, e) {
        let o = e[0] - t[0],
            r = e[1] - t[1],
            n = e[2] - t[2];
        return o * o + r * r + n * n
    }

    function gd(t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t
    }

    function no(t, e) {
        let o = e[0],
            r = e[1],
            n = e[2],
            i = o * o + r * r + n * n;
        return i > 0 && (i = 1 / Math.sqrt(i)), t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t
    }

    function Mt(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }

    function ao(t, e, o) {
        let r = e[0],
            n = e[1],
            i = e[2],
            s = o[0],
            a = o[1],
            c = o[2];
        return t[0] = n * c - i * a, t[1] = i * s - r * c, t[2] = r * a - n * s, t
    }

    function Fr(t, e, o, r) {
        let n = e[0],
            i = e[1],
            s = e[2];
        return t[0] = n + r * (o[0] - n), t[1] = i + r * (o[1] - i), t[2] = s + r * (o[2] - s), t
    }

    function Xo(t, e, o) {
        let r = e[0],
            n = e[1],
            i = e[2],
            s = o[3] * r + o[7] * n + o[11] * i + o[15];
        return s = s || 1, t[0] = (o[0] * r + o[4] * n + o[8] * i + o[12]) / s, t[1] = (o[1] * r + o[5] * n + o[9] * i + o[13]) / s, t[2] = (o[2] * r + o[6] * n + o[10] * i + o[14]) / s, t
    }

    function Qo(t, e, o, r, n) {
        return t[0] = n[0] * e + n[4] * o + n[8] * r + n[12], t[1] = n[1] * e + n[5] * o + n[9] * r + n[13], t[2] = n[2] * e + n[6] * o + n[10] * r + n[14], t
    }

    function Ii(t, e, o, r, n) {
        return t[0] = n[0] * e + n[4] * o + n[8] * r, t[1] = n[1] * e + n[5] * o + n[9] * r, t[2] = n[2] * e + n[6] * o + n[10] * r, t
    }

    function Pa(t, e, o) {
        let r = e[0],
            n = e[1],
            i = e[2],
            s = o[0],
            a = o[1],
            c = o[2],
            l = o[3],
            f = a * i - c * n,
            u = c * r - s * i,
            d = s * n - a * r,
            m = a * d - c * u,
            h = c * f - s * d,
            g = s * u - a * f,
            M = l * 2;
        return f *= M, u *= M, d *= M, m *= 2, h *= 2, g *= 2, t[0] = r + f + m, t[1] = n + u + h, t[2] = i + d + g, t
    }
    var Bk = function() {
        let t = [0, 0, 0],
            e = [0, 0, 0];
        return function(o, r) {
            Be(t, o), Be(e, r), no(t, t), no(e, e);
            let n = Mt(t, e);
            return n > 1 ? 0 : n < -1 ? Math.PI : Math.acos(n)
        }
    }();

    function vd(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
    }

    function Ea(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    function Cr(t, e, o, r, n) {
        return t[0] = e, t[1] = o, t[2] = r, t[3] = n, t
    }

    function xd(t, e) {
        let o = e[0],
            r = e[1],
            n = e[2],
            i = e[3],
            s = o * o + r * r + n * n + i * i;
        return s > 0 && (s = 1 / Math.sqrt(s)), t[0] = o * s, t[1] = r * s, t[2] = n * s, t[3] = i * s, t
    }

    function E3(t, e, o) {
        o = o * .5;
        let r = Math.sin(o);
        return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = Math.cos(o), t
    }

    function Da(t, e, o, r) {
        let n = e[0],
            i = e[1],
            s = e[2],
            a = e[3],
            c = o[0],
            l = o[1],
            f = o[2],
            u = o[3],
            d, m, h, g, M;
        return m = n * c + i * l + s * f + a * u, m < 0 && (m = -m, c = -c, l = -l, f = -f, u = -u), 1 - m > 1e-6 ? (d = Math.acos(m), h = Math.sin(d), g = Math.sin((1 - r) * d) / h, M = Math.sin(r * d) / h) : (g = 1 - r, M = r), t[0] = g * n + M * c, t[1] = g * i + M * l, t[2] = g * s + M * f, t[3] = g * a + M * u, t
    }

    function L3(t, e) {
        let o = e[0] + e[4] + e[8],
            r;
        if (o > 0) r = Math.sqrt(o + 1), t[3] = .5 * r, r = .5 / r, t[0] = (e[5] - e[7]) * r, t[1] = (e[6] - e[2]) * r, t[2] = (e[1] - e[3]) * r;
        else {
            let n = 0;
            e[4] > e[0] && (n = 1), e[8] > e[n * 3 + n] && (n = 2);
            let i = (n + 1) % 3,
                s = (n + 2) % 3;
            r = Math.sqrt(e[n * 3 + n] - e[i * 3 + i] - e[s * 3 + s] + 1), t[n] = .5 * r, r = .5 / r, t[3] = (e[i * 3 + s] - e[s * 3 + i]) * r, t[i] = (e[i * 3 + n] + e[n * 3 + i]) * r, t[s] = (e[s * 3 + n] + e[n * 3 + s]) * r
        }
        return t
    }

    function zi(t, e) {
        let o = Math.sin(e[0] * .5),
            r = Math.cos(e[0] * .5),
            n = Math.sin(e[1] * .5),
            i = Math.cos(e[1] * .5),
            s = Math.sin(e[2] * .5),
            a = Math.cos(e[2] * .5);
        return t[0] = o * i * a + r * n * s, t[1] = r * n * a - o * i * s, t[2] = r * i * s - o * n * a, t[3] = r * i * a + o * n * s, t
    }
    var bd = xd;
    var Yk = function() {
            let t = [0, 0, 0],
                e = [1, 0, 0],
                o = [0, 1, 0];
            return function(r, n, i) {
                let s = Mt(n, i);
                return s < -.999999 ? (ao(t, e, n), Mn(t) < 1e-6 && ao(t, o, n), no(t, t), E3(r, t, Math.PI), r) : s > .999999 ? (r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 1, r) : (ao(t, n, i), r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = 1 + s, bd(r, r))
            }
        }(),
        Xk = function() {
            let t = [0, 0, 0, 1],
                e = [0, 0, 0, 1];
            return function(o, r, n, i, s, a) {
                return Da(t, r, s, a), Da(e, n, i, a), Da(o, t, e, 2 * a * (1 - a)), o
            }
        }(),
        Qk = function() {
            let t = [1, 0, 0, 0, 1, 0, 0, 0, 1];
            return function(e, o, r, n) {
                return t[0] = r[0], t[3] = r[1], t[6] = r[2], t[1] = n[0], t[4] = n[1], t[7] = n[2], t[2] = -o[0], t[5] = -o[1], t[8] = -o[2], bd(e, L3(e, t))
            }
        }();
    var Ta = Zt(),
        D3 = () => ({
            parent: null,
            children: [],
            visible: !0,
            geometry: void 0,
            matrix: Zt(),
            worldMatrix: Zt(),
            position: [0, 0, 0],
            scale: [1, 1, 1],
            quaternion: [-0, -0, -0, 1],
            rotation: [-0, -0, -0],
            matrixAutoUpdate: !1,
            matrixNeedsUpdate: !0,
            data: {}
        }),
        Ot = (t, e, o = !0) => {
            o && t.parent !== null && e !== t.parent && I3(t.parent, t, !1), t.parent = e, t.matrixNeedsUpdate = !0, o && e && T3(e, t, !1)
        },
        T3 = (t, e, o = !0) => {
            ~t.children.indexOf(e) || t.children.push(e), o && Ot(e, t, !1)
        },
        I3 = (t, e, o = !0) => {
            ~t.children.indexOf(e) && t.children.splice(t.children.indexOf(e), 1), o && Ot(e, null, !1)
        },
        it = (t, e) => {
            if (!t.visible) return;
            let o = Ri(t),
                r = z3(t, e, o);
            t.children.forEach(n => {
                n.visible && it(n, r)
            })
        },
        Ri = t => !t.matrixAutoUpdate && !t.matrixNeedsUpdate ? !1 : (t.matrixNeedsUpdate = !1, zi(t.quaternion, t.rotation), Di(t.matrix, t.quaternion, t.position, t.scale), !0),
        z3 = (t, e, o) => t.parent !== null ? e || o ? (Li(t.worldMatrix, t.parent.worldMatrix, t.matrix), !0) : !1 : o ? (ld(t.worldMatrix, t.matrix), !0) : !1;
    var Fn = (t, e, o = !1, r) => {
            o ? Aa(Ta, t.position, e, r) : Aa(Ta, e, t.position, r), hd(t.rotation, Ta)
        },
        Vi = [],
        Dt = () => Vi.length > 0 ? Vi.pop() : D3(),
        Ar = t => {
            V3(t), Vi.indexOf(t) < 0 ? Vi.push(t) : console.log("tried returning transform that is already known")
        },
        V3 = t => {
            t.data = {}, t.geometry = void 0, t.visible = !0, t.matrixAutoUpdate = !1, se(t.position, 0, 0, 0), se(t.scale, 1, 1, 1), se(t.rotation, 0, 0, 0), Ot(t, null, !0);
            for (let e = 0; e < t.children.length; ++e) Ot(t.children[e], null);
            t.children.length = 0
        };
    var Ui = [0, 0, 0],
        Cn = (t = .1, e = 100, o = 45, r = 1) => {
            let n = {
                near: t,
                far: e,
                fov: o,
                aspect: r,
                transform: Dt(),
                projectionMatrix: Zt(),
                viewMatrix: Zt(),
                unprojectionViewMatrix: Zt(),
                projectionViewMatrix: Zt(),
                worldPosition: [0, 0, 0],
                frustum: [
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0]
                ],
                frustumConstants: [0, 0, 0, 0, 0, 0]
            };
            return n.transform.matrixAutoUpdate = !0, n
        },
        Zo = t => {
            md(t.projectionMatrix, t.fov * (Math.PI / 180), t.aspect, t.near, t.far)
        },
        _d = (t, e, o, r, n) => {
            pd(t.projectionMatrix, e, o, r, n, t.near, t.far)
        },
        R3 = t => {
            fd(t.worldPosition, t.transform.worldMatrix)
        },
        Bi = (t, e) => {
            it(t.transform, e), Ca(t.viewMatrix, t.transform.worldMatrix), Li(t.projectionViewMatrix, t.projectionMatrix, t.viewMatrix), Ca(t.unprojectionViewMatrix, t.projectionViewMatrix), R3(t)
        };
    var ji = t => {
            let e = t.projectionViewMatrix;
            se(t.frustum[0], e[3] - e[0], e[7] - e[4], e[11] - e[8]), se(t.frustum[1], e[3] + e[0], e[7] + e[4], e[11] + e[8]), se(t.frustum[2], e[3] + e[1], e[7] + e[5], e[11] + e[9]), se(t.frustum[3], e[3] - e[1], e[7] - e[5], e[11] - e[9]), se(t.frustum[4], e[3] - e[2], e[7] - e[6], e[11] - e[10]), se(t.frustum[5], e[3] + e[2], e[7] + e[6], e[11] + e[10]), t.frustumConstants[0] = e[15] - e[12], t.frustumConstants[1] = e[15] + e[12], t.frustumConstants[2] = e[15] + e[13], t.frustumConstants[3] = e[15] - e[13], t.frustumConstants[4] = e[15] - e[14], t.frustumConstants[5] = e[15] + e[14];
            for (let o = 0; o < 6; o++) {
                let r = t.frustum[o],
                    n = 1 / Mn(r);
                so(r, r, n), t.frustumConstants[o] *= n
            }
        },
        yd = (t, e, o) => {
            Be(Ui, e.bounds.center), Xo(Ui, Ui, o.worldMatrix);
            let r = e.bounds.radius * ud(o.worldMatrix);
            return U3(t, Ui, r)
        },
        U3 = (t, e, o) => {
            for (let r = 0; r < 6; r++)
                if (Mt(t.frustum[r], e) + t.frustumConstants[r] < -o) return !1;
            return !0
        };
    var Ao = document.createElement("canvas"),
        v = Ao.getContext("webgl2", {
            depth: !0,
            stencil: !1,
            premultipliedAlpha: !1,
            alpha: !1,
            antialias: !1,
            powerPreference: "high-performance",
            preserveDrawingBuffer: !0
        }),
        An = document.createElement("canvas"),
        Zk = An.getContext("2d", {
            alpha: !0
        }),
        Pr = v.vertexAttribDivisor.bind(v),
        kd = v.drawArraysInstanced.bind(v),
        Fd = v.drawElementsInstanced.bind(v),
        Cd = v.createVertexArray.bind(v),
        qi = v.bindVertexArray.bind(v),
        B3 = v.deleteVertexArray.bind(v),
        Ia = v.getExtension("EXT_texture_filter_anisotropic"),
        Ad = v.getExtension("WEBGL_compressed_texture_s3tc"),
        W = {
            maxTextureUnits: v.getParameter(v.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
            maxAnisotropy: v.getParameter(Ia.MAX_TEXTURE_MAX_ANISOTROPY_EXT),
            blendFunc: {
                src: v.ONE,
                dst: v.ZERO,
                srcAlpha: 0,
                dstAlpha: 0
            },
            blendEquation: {
                modeRGB: v.FUNC_ADD,
                modeAlpha: 0
            },
            frontFace: v.CCW,
            depthFunc: v.LESS,
            cullFace: null,
            depthMask: !0,
            flipY: !1,
            framebuffer: null,
            viewport: {
                width: -1,
                height: -1
            },
            textureUnits: [],
            activeTextureUnit: 0,
            width: 0,
            height: 0,
            currentGeometry: -1,
            currentProgram: -1
        },
        Sd = (t, e) => {
            W.width = t, W.height = e, Ao.width = t, Ao.height = e, An.width = t, An.height = e
        },
        Sn = (t, e) => {
            W.viewport.width === t && W.viewport.height === e || (W.viewport.width = t, W.viewport.height = e, v.viewport(0, 0, t, e))
        },
        Pn = t => {
            W[t] !== !0 && (v.enable(t), W[t] = !0)
        },
        Ni = t => {
            W[t] !== !1 && (v.disable(t), W[t] = !1)
        },
        Pd = (t, e, o, r) => {
            W.blendFunc.src === t && W.blendFunc.dst === e && W.blendFunc.srcAlpha === o && W.blendFunc.dstAlpha === r || (W.blendFunc.src = t, W.blendFunc.dst = e, W.blendFunc.srcAlpha = o, W.blendFunc.dstAlpha = r, o !== void 0 ? v.blendFuncSeparate(t, e, o, r) : v.blendFunc(t, e))
        },
        Ed = (t, e) => {
            W.blendEquation.modeRGB === t && W.blendEquation.modeAlpha === e || (W.blendEquation.modeRGB = t, W.blendEquation.modeAlpha = e, e !== void 0 ? v.blendEquationSeparate(t, e) : v.blendEquation(t))
        },
        Ld = t => {
            W.cullFace !== t && (W.cullFace = t, v.cullFace(t))
        },
        Dd = t => {
            W.frontFace !== t && (W.frontFace = t, v.frontFace(t))
        },
        za = t => {
            W.depthMask !== t && (W.depthMask = t, v.depthMask(t))
        },
        Td = t => {
            W.depthFunc !== t && (W.depthFunc = t, v.depthFunc(t))
        },
        En = t => {
            W.activeTextureUnit !== t && (W.activeTextureUnit = t, v.activeTexture(v.TEXTURE0 + t))
        },
        Md = ({
            target: t = v.FRAMEBUFFER,
            buffer: e = null
        } = {}) => {
            W.framebuffer !== e && (W.framebuffer = e, v.bindFramebuffer(t, e))
        },
        Id = t => {
            t ? (Md(t), Sn(t.width, t.height)) : (Md(), Sn(W.width, W.height))
        },
        Va = t => {
            (!t || !t.depth) && (Pn(v.DEPTH_TEST), za(!0)), v.clear(v.COLOR_BUFFER_BIT | v.DEPTH_BUFFER_BIT)
        };
    var Er = `#version 300 es
in vec2 uv;
in vec2 position;
out vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
}`;
    var zd = [0, 1, 0],
        Vd = [0, 0, 0],
        Me = Cn(.3, 500, 70),
        st = Dt();
    Ot(Me.transform, st);
    se(Me.transform.position, 0, 0, -1);
    Me.transform.rotation[1] = Math.PI;
    st.matrixAutoUpdate = !0;
    var Kt = [],
        Ln = 0,
        Ud = 250,
        Ra = (t, e) => ({
            pos: io([0, 0, 0], Lt([0, 0, 0], t.pos, e.pos), t.pos),
            rot: t.rot
        }),
        Bd = t => {
            if (Kt.length < 2) return;
            Ln += Ud / 300 / Kt.length * t, Ln > 1 && (Ln = 0);
            let e = Ln * Kt.length,
                o = ~~(e / 1),
                r = e % 1,
                n = ~~o,
                i = ~~o + 1,
                s = ~~o + 2,
                a = ~~o + 3,
                c = Kt[n],
                l = Kt[i] || Ra(Kt[n], Kt[n - 1]),
                f = Kt[s] || Ra(l, c),
                u = Kt[a] || Ra(f, l);
            for (let d = 0; d < 3; ++d) st.position[d] = Rd(c.pos[d], l.pos[d], f.pos[d], u.pos[d], r), st.rotation[d] = Rd(c.rot[d], l.rot[d], f.rot[d], u.rot[d], r);
            it(st, !1)
        },
        jd = t => {
            Ln = t
        };
    var qd = t => {
        Ud = t
    };
    var Rd = (t, e, o, r, n) => {
        let i = (o - t) * .5,
            s = (r - e) * .5,
            a = n * n,
            c = n * a;
        return (2 * e - 2 * o + i + s) * c + (-3 * e + 3 * o - 2 * i - s) * a + i * n + e
    };
    var Oi = [0, 0, 0],
        Nd = (t, e, o, r, n) => {
            if (t.length > 0) {
                se(e, 1 / 0, 1 / 0, 1 / 0), se(o, -1 / 0, -1 / 0, -1 / 0);
                for (let i = 0, s = t.length; i < s; i += 3) {
                    let a = t[i],
                        c = t[i + 1],
                        l = t[i + 2];
                    e[0] = Math.min(a, e[0]), e[1] = Math.min(c, e[1]), e[2] = Math.min(l, e[2]), o[0] = Math.max(a, o[0]), o[1] = Math.max(c, o[1]), o[2] = Math.max(l, o[2])
                }
            } else se(e, 0, 0, 0), se(o, -0, -0, -0);
            Lt(n, o, e), so(r, io(r, e, o), .5)
        },
        q3 = t => {
            Nd(t.attributes.position.data, t.bounds.min, t.bounds.max, t.bounds.center, t.bounds.scale), t.bounds.initiated = !0
        },
        N3 = t => {
            let e = 0;
            for (let o = 0, r = t.attributes.position.data.length; o < r; o += 3) Oi[0] = t.attributes.position.data[o], Oi[1] = t.attributes.position.data[o + 1], Oi[2] = t.attributes.position.data[o + 2], e = Math.max(e, kn(t.bounds.center, Oi));
            t.bounds.radius = Math.sqrt(e)
        },
        Od = t => {
            t.bounds.initiated || q3(t), N3(t)
        };
    var O3 = 1,
        W3 = 1,
        dt = t => {
            let e = {
                id: O3++,
                vao: Cd(),
                vaoNeedsUpdate: !0,
                attributes: t,
                drawRangeStart: 0,
                drawRangeCount: 0,
                attrRange: 0,
                instancedCount: 0,
                isInstanced: !1,
                bounds: {
                    min: [0, 0, 0],
                    max: [0, 0, 0],
                    center: [0, 0, 0],
                    scale: [0, 0, 0],
                    radius: 1 / 0,
                    initiated: !1
                }
            };
            return Ua(e, e.attributes), e
        },
        Pt = (t, e) => {
            W.boundBuffer !== e.id && (v.bindBuffer(e.target, e.buffer), W.boundBuffer = e.id), e.bufferLen < e.data.length ? (e.bufferLen = e.data.length, v.bufferData(e.target, e.data, e.bufferMode, 0, e.data.length)) : v.bufferSubData(e.target, 0, e.data, 0, e.data.length)
        },
        Wi = (t, e, o) => {
            W.boundBuffer !== e.id && (v.bindBuffer(e.target, e.buffer), W.boundBuffer = e.id);
            let r = o * e.size;
            e.bufferLen < r ? (e.bufferLen = r, v.bufferData(e.target, e.data, e.bufferMode, 0, r)) : v.bufferSubData(e.target, 0, e.data, 0, r)
        },
        G3 = (t, e, o) => {
            o.id = W3++, o.size = o.size || 1, o.type = o.type || (o.data.constructor === Float32Array ? v.FLOAT : o.data.constructor === Uint16Array ? v.UNSIGNED_SHORT : v.UNSIGNED_INT), o.target = e === "index" ? v.ELEMENT_ARRAY_BUFFER : v.ARRAY_BUFFER, o.normalize = o.normalize || !1, o.count = o.data.length / o.size, o.divisor = o.instanced ? typeof o.instanced == "number" ? o.instanced : 1 : 0, o.bufferMode = o.bufferMode || v.STATIC_DRAW, o.bufferLen = 0, o.buffer || (o.buffer = v.createBuffer()), Pt(t, o)
        },
        $3 = (t, e, o) => {
            if (t.attributes[e] = o, o.divisor) {
                if (t.isInstanced = !0, t.instancedCount && t.instancedCount !== o.count * o.divisor) return t.instancedCount = Math.min(t.instancedCount, o.count * o.divisor);
                t.instancedCount = o.count * o.divisor
            } else e === "index" ? t.drawRangeCount = o.count : t.attributes.index || (t.drawRangeCount = Math.max(t.drawRangeCount, o.count))
        },
        Ua = (t, e) => {
            qi(null), W.currentGeometry = -1;
            for (let o in e) e[o].id === void 0 && G3(t, o, e[o]), $3(t, o, e[o]);
            t.attributes.position && Od(t)
        },
        Gd = (t, e, o) => {
            t.attrRange = o, t.drawRangeStart = e, t.drawRangeCount = o
        },
        Gi = (t, e) => {
            t.instancedCount = e
        },
        H3 = (t, e) => {
            qi(t.vao);
            for (let o = 0; o < e.attributeLocations.length; ++o) {
                let r = e.attributeLocations[o];
                if (!t.attributes[r]) continue;
                let n = t.attributes[r];
                if (v.bindBuffer(v.ARRAY_BUFFER, n.buffer), W.boundBuffer = n.id, n.size > 4) {
                    let i = n.size / 4,
                        s = i * 4,
                        a = s * 4;
                    for (let c = 0; c < i; ++c) v.vertexAttribPointer(o + c, i, v.FLOAT, !1, a, s * c), v.enableVertexAttribArray(o + c), Pr(o + c, 1)
                } else v.vertexAttribPointer(o, n.size, n.type, n.normalize, 0, 0), v.enableVertexAttribArray(o), Pr(o, n.divisor)
            }
            t.attributes.index && v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, t.attributes.index.buffer), t.vaoNeedsUpdate = !1
        },
        Lr = (t, e) => {
            W.currentGeometry !== t.id && (t.vaoNeedsUpdate && H3(t, e), qi(t.vao), W.currentGeometry = t.id)
        },
        Dr = (t, e, o) => {
            Lr(t, e), t.isInstanced ? t.attributes.index ? Fd(o, t.drawRangeCount, t.attributes.index.type, t.drawRangeStart, t.instancedCount) : kd(o, t.drawRangeStart, t.drawRangeCount, t.instancedCount) : t.attributes.index ? v.drawElements(o, t.drawRangeCount, t.attributes.index.type, t.drawRangeStart) : v.drawArrays(o, t.drawRangeStart, t.drawRangeCount)
        };
    var Y3 = 1,
        Ye = ({
            vertex: t,
            fragment: e,
            uniforms: o = {},
            instanced: r = [],
            active: n = !0,
            transparent: i = !1,
            cullFace: s = v.BACK,
            frontFace: a = v.CCW,
            depthTest: c = !0,
            depthWrite: l = !0,
            depthFunc: f = v.LESS,
            globalUniforms: u = {},
            attributeLocations: d
        }) => {
            let m = {
                id: Y3++,
                program: v.createProgram(),
                active: n,
                transparent: i,
                cullFace: s,
                frontFace: a,
                depthTest: c,
                depthWrite: l,
                depthFunc: f,
                blendFunc: {},
                blendEquation: {},
                uniforms: o,
                autoUniforms: [],
                uniformArray: [],
                samplerNames: [],
                samplerTexUnits: [],
                samplerTexArray: [],
                samplerTextures: [],
                globalUniforms: u,
                instancedAttributes: r,
                attributeLocations: d
            };
            m.transparent && !m.blendFunc.src && Tn(m, v.SRC_ALPHA, v.ONE_MINUS_SRC_ALPHA);
            let h = $d(t, v.VERTEX_SHADER),
                g = $d(e, v.FRAGMENT_SHADER);
            for (let M = 0; M < d.length; ++M) v.bindAttribLocation(m.program, M, d[M]);
            return v.attachShader(m.program, h), v.attachShader(m.program, g), v.linkProgram(m.program), v.deleteShader(h), v.deleteShader(g), m
        },
        Hd = (t, e) => {
            v.useProgram(t.program), W.currentProgram = t.id;
            let o = v.getProgramParameter(t.program, v.ACTIVE_UNIFORMS),
                r = 0,
                n = 2;
            for (let i = 0; i < o; i++) {
                let s = v.getActiveUniform(t.program, i),
                    a = v.getUniformLocation(t.program, s.name);
                if (a === null) continue;
                let c = s.name.match(/(\w+)/g)[0],
                    l = s.type,
                    f = l === 35678 || l === 35682 || l === 36289,
                    u = l === 35682;
                if (f) {
                    let d = s.size,
                        m = [];
                    for (let h = 0; h < d; ++h) {
                        let g = u ? r++ : n++;
                        m.push(g), t.samplerNames.push(c), t.samplerTexUnits.push(g), t.samplerTexArray.push(d === 1 ? -1 : h)
                    }
                    d === 1 ? v.uniform1i(a, m[0]) : v.uniform1iv(a, m)
                } else {
                    e[c] ? t.uniforms[c] || (t.uniforms[c] = e[c]) : t.uniforms[c] || (Z3.has(c) || t.autoUniforms.push(c), t.uniforms[c] = {
                        value: void 0
                    });
                    let d = {
                        name: c,
                        location: a,
                        type: l,
                        data: t.uniforms[c],
                        fun: Q3(l, t.uniforms[c].value)
                    };
                    t.uniformArray.push(d)
                }
            }
        },
        Yd = (t, e) => {
            for (let o = 0; o < e.length; ++o) {
                let r = e[o],
                    n = v.getUniformBlockIndex(t.program, r.name);
                n !== v.INVALID_INDEX && r.index >= 0 && v.uniformBlockBinding(t.program, n, r.index)
            }
        },
        Tr = (t, e) => {
            e || (v.useProgram(t.program), W.currentProgram = t.id), Ir(t), ja(t.uniformArray), Dn(t), zr(t)
        },
        pt = (t, e, o, r) => {
            let n = r.samplerNames.indexOf(t);
            n >= 0 ? r.samplerTextures[n + o] = e : console.log("unknown texture type", t, r)
        },
        Ir = t => {
            for (let e = 0; e < t.samplerNames.length; ++e) {
                let o = t.samplerNames[e],
                    r = t.samplerTexArray[e];
                t.globalUniforms[o] && t.globalUniforms[o].value && (r < 0 ? t.samplerTextures[e] = t.globalUniforms[o].value : t.samplerTextures[e] = t.globalUniforms[o].value[r])
            }
        },
        $i = (t, e) => {
            for (let o = 0; o < e.samplerNames.length; ++o) {
                let r = e.samplerNames[o],
                    n = e.samplerTexArray[o];
                t[r] && (n < 0 ? e.samplerTextures[o] = t[r] : e.samplerTextures[o] = t[r][n])
            }
        },
        Dn = t => {
            for (let e = 0; e < t.samplerTexUnits.length; ++e) {
                let o = t.samplerTexUnits[e],
                    r = t.samplerTextures[e];
                r && W.textureUnits[o] !== r.id && (En(o), v.bindTexture(r.target, r.texture), W.textureUnits[o] = r.id)
            }
        },
        Tn = (t, e, o, r, n) => {
            t.blendFunc.src = e, t.blendFunc.dst = o, t.blendFunc.srcAlpha = r, t.blendFunc.dstAlpha = n, e && (t.transparent = !0)
        },
        Ba = {},
        $d = (t, e) => {
            if (Ba[t] !== void 0) return Ba[t];
            let o = Ba[t] = v.createShader(e);
            return v.shaderSource(o, t), v.compileShader(o), o
        },
        zr = t => {
            t.depthTest ? Pn(v.DEPTH_TEST) : Ni(v.DEPTH_TEST), t.cullFace ? Pn(v.CULL_FACE) : Ni(v.CULL_FACE), t.blendFunc.src ? Pn(v.BLEND) : Ni(v.BLEND), t.cullFace && Ld(t.cullFace), Dd(t.frontFace), za(t.depthWrite), Td(t.depthFunc), t.blendFunc.src && Pd(t.blendFunc.src, t.blendFunc.dst, t.blendFunc.srcAlpha, t.blendFunc.dstAlpha), t.blendEquation.modeRGB && Ed(t.blendEquation.modeRGB, t.blendEquation.modeAlpha)
        },
        ja = t => {
            for (let e = 0; e < t.length; ++e) {
                let o = t[e];
                X3(v, o.fun, o.location, o.data.value)
            }
        };
    var X3 = (t, e, o, r) => {
            switch (e) {
                case 12:
                    return t.uniformMatrix4fv(o, !1, r);
                case 9:
                    return t.uniform4fv(o, r);
                case 8:
                    return t.uniform3fv(o, r);
                case 5:
                    return t.uniform1f(o, r);
                case 0:
                    return t.uniform1i(o, r);
                case 1:
                    return t.uniform1iv(o, r);
                case 2:
                    return t.uniform2iv(o, r);
                case 3:
                    return t.uniform3iv(o, r);
                case 4:
                    return t.uniform4iv(o, r);
                case 6:
                    return t.uniform1fv(o, r);
                case 7:
                    return t.uniform2fv(o, r);
                case 10:
                    return t.uniformMatrix2fv(o, !1, r);
                case 11:
                    return t.uniformMatrix3fv(o, !1, r)
            }
        },
        Q3 = (t, e) => {
            switch (t) {
                case 5126:
                    return Array.isArray(e) ? 6 : 5;
                case 35664:
                    return 7;
                case 35665:
                    return 8;
                case 35666:
                    return 9;
                case 35670:
                case 5124:
                case 35678:
                case 35682:
                case 36289:
                case 35680:
                    return Array.isArray(e) ? 1 : 0;
                case 35671:
                case 35667:
                    return 2;
                case 35672:
                case 35668:
                    return 3;
                case 35673:
                case 35669:
                    return 4;
                case 35674:
                    return 10;
                case 35675:
                    return 11;
                case 35676:
                    return 12
            }
        };
    var Z3 = new Set(["projectionViewMatrix", "shadowPVMatrix", "modelMatrix", "viewMatrix", "projectionMatrix", "cameraPosition"]);
    var K3 = 0,
        Bt = (t, e, o, r = Dt(), n = 0) => ({
            id: K3++,
            uniformData: {},
            transform: r,
            geometry: t,
            program: e,
            shadowProgram: n,
            mode: o
        }),
        Wt = (t, e) => {
            e.uniforms.modelMatrix && (e.uniforms.modelMatrix.value = t.transform.worldMatrix);
            for (let o = 0; o < e.autoUniforms.length; ++o) {
                let r = e.autoUniforms[o];
                e.uniforms[r].value = t.uniformData[r]
            }
            $i(t.uniformData, e), Tr(e, W.currentProgram === e.id), Dr(t.geometry, e, t.mode)
        };

    function Xd(t) {
        return t.charCodeAt(0) + (t.charCodeAt(1) << 8) + (t.charCodeAt(2) << 16) + (t.charCodeAt(3) << 24)
    }

    function Qd(t, e, o) {
        switch (t) {
            case Zd:
                return (e + 3 >> 2) * (o + 3 >> 2) * 8;
            case Kd:
                return (e + 3 >> 2) * (o + 3 >> 2) * 16;
            default:
                return 0
        }
    }
    var Zd = 33777,
        Kd = 33778,
        J3 = 131072,
        eb = 31,
        tb = 1,
        ob = 2,
        rb = 3,
        nb = 4,
        ib = 7,
        sb = 21,
        ab = Xd("DXT1"),
        cb = Xd("DXT3");

    function Jd(t) {
        let e = new Int32Array(t, 0, eb),
            o = e[sb],
            r;
        switch (o) {
            case ab:
                r = Zd;
                break;
            case cb:
                r = Kd;
                break;
            default:
                console.error("Unsupported texture" + o)
        }
        let n = 1;
        e[ob] & J3 && (n = Math.max(1, e[ib]));
        let i = e[nb],
            s = e[rb],
            a = e[tb] + 4;
        return {
            data: new Uint8Array(t, a),
            width: i,
            height: s,
            levels: n,
            internalFormat: r
        }
    }
    var fb = 1,
        So = function({
            image: t,
            buffer: e,
            target: o = v.TEXTURE_2D,
            type: r = v.UNSIGNED_BYTE,
            format: n = v.RGBA,
            internalFormat: i = n,
            wrapS: s = v.CLAMP_TO_EDGE,
            wrapT: a = v.CLAMP_TO_EDGE,
            generateMipmaps: c = !0,
            minFilter: l = c ? v.LINEAR_MIPMAP_LINEAR : v.LINEAR,
            magFilter: f = v.LINEAR,
            flipY: u = !0,
            width: d,
            depth: m = 0,
            height: h = d,
            compareMode: g = v.NONE,
            compareFunc: M = v.LEQUAL,
            anisotropy: x = 1
        }) {
            return {
                id: fb++,
                image: t,
                buffer: e,
                target: o,
                type: r,
                format: n,
                internalFormat: i,
                minFilter: l,
                magFilter: f,
                wrapS: s,
                wrapT: a,
                generateMipmaps: c,
                flipY: u,
                width: d,
                height: h,
                depth: m,
                compareMode: g,
                texture: v.createTexture(),
                anisotropy: Math.min(Math.max(1, x), W.maxAnisotropy),
                needsUpdate: !0,
                state: {
                    flipY: !1,
                    minFilter: v.NEAREST_MIPMAP_LINEAR,
                    magFilter: v.LINEAR,
                    wrapS: v.REPEAT,
                    wrapT: v.REPEAT,
                    compareMode: v.NONE,
                    anisotropy: 1,
                    image: void 0
                }
            }
        },
        em = t => {
            W.textureUnits[W.activeTextureUnit] !== t.id && (v.bindTexture(t.target, t.texture), W.textureUnits[W.activeTextureUnit] = t.id)
        },
        Gt = (t, e = 0) => {
            let o = !(t.image === t.state.image && !t.needsUpdate);
            if ((o || W.textureUnits[e] !== t.id) && (En(e), em(t)), !!o) {
                if (t.needsUpdate = !1, t.flipY !== W.flipY && (v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL, t.flipY), W.flipY = t.flipY), t.minFilter !== t.state.minFilter && (v.texParameteri(t.target, v.TEXTURE_MIN_FILTER, t.minFilter), t.state.minFilter = t.minFilter), t.magFilter !== t.state.magFilter && (v.texParameteri(t.target, v.TEXTURE_MAG_FILTER, t.magFilter), t.state.magFilter = t.magFilter), t.wrapS !== t.state.wrapS && (v.texParameteri(t.target, v.TEXTURE_WRAP_S, t.wrapS), t.state.wrapS = t.wrapS), t.wrapT !== t.state.wrapT && (v.texParameteri(t.target, v.TEXTURE_WRAP_T, t.wrapT), t.state.wrapT = t.wrapT), t.anisotropy !== t.state.anisotropy && (v.texParameterf(t.target, Ia.TEXTURE_MAX_ANISOTROPY_EXT, t.anisotropy), t.state.anisotropy = t.anisotropy), t.compareMode !== t.state.compareMode && (v.texParameteri(t.target, v.TEXTURE_COMPARE_MODE, t.compareMode), t.state.compareMode = t.compareMode), t.image) t.image.width && (t.width = t.image.width, t.height = t.image.height), v.texImage2D(t.target, 0, t.internalFormat, t.width, t.height, 0, t.format, t.type, t.image), t.generateMipmaps && v.generateMipmap(t.target);
                else if (t.buffer) {
                    let r = 0,
                        n = t.height,
                        i = t.width,
                        s = t.buffer.data;
                    for (let a = 0; a < t.buffer.levels; ++a) {
                        let c = Qd(t.internalFormat, n, n),
                            l = new Uint8Array(s.buffer, s.byteOffset + r, c);
                        v.compressedTexImage2D(t.target, a, t.internalFormat, i, n, 0, l), i = i >> 1, n = n >> 1, r += c
                    }
                } else t.target !== v.TEXTURE_2D_ARRAY ? v.texImage2D(t.target, 0, t.internalFormat, t.width, t.height, 0, t.format, t.type, null) : v.texImage3D(t.target, 0, t.internalFormat, t.width, t.height, t.depth, 0, t.format, t.type, null);
                t.state.image = t.image
            }
        },
        Hi = (t, e) => {
            t.anisotropy = Math.min(Math.max(1, e), W.maxAnisotropy), t.needsUpdate = !0
        };
    var tm = (t, e, o, r, n) => {
        En(0), em(t), t.flipY !== W.flipY && (v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL, t.flipY), W.flipY = t.flipY), v.texSubImage3D(t.target, 0, 0, 0, e, o, r, 1, t.format, t.type, n), t.generateMipmaps && v.generateMipmap(t.target)
    };
    var ho = (t = v.canvas.width, e = v.canvas.height, o = 1, r = !1, n = v.NONE, i = v.CLAMP_TO_EDGE, s = v.CLAMP_TO_EDGE) => {
            let a = v.LINEAR,
                c = v.LINEAR,
                l = {
                    width: t,
                    height: e,
                    target: v.FRAMEBUFFER,
                    buffer: v.createFramebuffer()
                };
            if (v.bindFramebuffer(l.target, l.buffer), o && (l.colorTexture = So({
                    width: t,
                    height: e,
                    wrapS: i,
                    wrapT: s,
                    minFilter: a,
                    magFilter: c,
                    flipY: !1,
                    generateMipmaps: !1,
                    internalFormat: v.RGBA8
                }), Gt(l.colorTexture), v.framebufferTexture2D(l.target, v.COLOR_ATTACHMENT0, v.TEXTURE_2D, l.colorTexture.texture, 0)), r) {
                let f = n === v.COMPARE_REF_TO_TEXTURE ? v.LINEAR : v.NEAREST;
                l.depthTexture = So({
                    width: t,
                    height: e,
                    wrapS: i,
                    wrapT: s,
                    minFilter: f,
                    magFilter: f,
                    flipY: !1,
                    format: v.DEPTH_COMPONENT,
                    internalFormat: v.DEPTH_COMPONENT24,
                    type: v.UNSIGNED_INT,
                    generateMipmaps: !1,
                    compareMode: n
                }), Gt(l.depthTexture), v.framebufferTexture2D(l.target, v.DEPTH_ATTACHMENT, v.TEXTURE_2D, l.depthTexture.texture, 0)
            }
            return v.bindFramebuffer(l.target, null), l
        },
        In = (t, e, o) => {
            t.colorTexture.width = e, t.colorTexture.height = o, t.colorTexture.needsUpdate = !0, Gt(t.colorTexture), t.depthTexture && (t.depthTexture.width = e, t.depthTexture.height = o, t.depthTexture.needsUpdate = !0, Gt(t.depthTexture)), t.width = e, t.height = o
        };
    var ae, rm = [0, 1, 0];
    var Xe = [0, 0, 0],
        ht = [0, 0, 0],
        Xi = [0, 0, 0],
        eo = [0, 0, 0],
        Qi = [0, 0, 0],
        zn = [0, 0, 0];
    var Jo = [0, 0, 0, 0];
    var a5 = Zt(),
        nm = t => {
            ae = t
        },
        Zi = 0,
        im = t => Zi = t;
    var Ki = class {
        constructor(e) {
            this.id = e.id, this.cd = e.cd !== void 0 ? e.cd : 0, this.costMp = e.costMp, this.targetMode = e.targetMode || 0, this.onCast = e.onCast, this.onPermanent = e.onPermanent, this.range = e.range || 0, this.graceRange = this.range + Math.min(this.range * .2, 10), this.auto = e.auto || !1, this.engineOnly = e.engineOnly || !1, this.minlevel = e.minlevel || 0, this.castLen = e.castLen || 0, this.gcd = e.gcd !== void 0 ? e.gcd : 1.5, this.custom = e.custom, this.skilllevels = Math.min(5, e.skilllevels || 5), this.goldValue = e.goldValue || 0, this.noReward = e.noReward || !1, this.outOfCombat = e.outOfCombat || !1, this.pvpBoundsAdd = e.pvpBoundsAdd || 0, this.ignoreGcd = e.ignoreGcd || !1, this.ignoreIncapacitated = e.ignoreIncapacitated || !1, this.disablingBuffs = e.disablingBuffs || [], this.hasteAffected = e.hasteAffected !== void 0 ? e.hasteAffected : !0, this.skillpoints = e.skillpoints !== void 0 ? e.skillpoints : 1, this.envCast = e.envCast || 0
        }
        can(e, o, r = 0, n) {
            if (this.outOfCombat && !e.stats.combatTimer.done(ae.time)) return 11;
            if (this.costMp !== void 0 && e.stats.getResource(7) < this.costMp(o)) return 5;
            if (this.targetMode !== 1) {
                let i = ae.getEntityById(r),
                    s = i === void 0 || i.stats.alive,
                    a = i === void 0 ? -1 : e.hostility(i);
                if (this.targetMode === 4096) {
                    if ((a === -1 || a === 0) && s) return 3;
                    if (!e.canCombatInteract(i)) return 13
                } else if (this.targetMode === 256) {
                    if ((a === -1 || a !== 0) && s) return 4
                } else if (this.targetMode === 16) i = e;
                else if (this.targetMode === 17 && (i === void 0 || i === e)) return 3;
                if (i !== void 0 && !i.stats.alive) return 10;
                if (i && r !== e.id && i !== e && this.range > 0 && !e.combatRangeCheck(i, n ? this.range : this.graceRange)) return 6
            }
            return this.disablingBuffs.some(i => e.buffs.hasAnyWithTag(i)) ? 12 : 0
        }
    };
    var R = class extends Ki {
        constructor(e) {
            super(e), this.fx = e.fx || {}, this.autoSkillbar = e.autoSkillBar !== !1
        }
    };
    var Vr = (t, e, o, r) => ({
            id: t,
            minlevel: o,
            engineOnly: !1,
            cd: 0,
            custom: r,
            autoSkillBar: !1,
            onPermanent: () => e
        }),
        Tt = (t, e, o, r, n, i, s, a) => ({
            id: t,
            targetMode: 16,
            minlevel: o,
            cd: n,
            costMp: s,
            fx: a,
            onCast: (c, l, f) => ({
                id: e,
                mode: 4,
                stacks: 1,
                duration: r,
                caster: c.id,
                target: c.id,
                aoe: {
                    faction: !0,
                    limit: i,
                    circleRadius: 30,
                    circleHeight: 20
                },
                level: l
            })
        }),
        Ji = (t, e, o, r, n, i, s, a = 5, c) => ({
            id: t,
            targetMode: 256,
            range: 30,
            minlevel: o,
            cd: n,
            castLen: r,
            costMp: s,
            fx: c,
            onCast: (l, f, u) => ({
                id: e,
                mode: a,
                stacks: 1,
                caster: l.id,
                target: u,
                refresh: !0,
                duration: i,
                level: f
            })
        }),
        er = (t, e, o = 0, r = !0, n, i = !1, s = !1, a) => ({
            id: t,
            targetMode: 16,
            cd: e,
            gcd: 0,
            hasteAffected: !1,
            ignoreIncapacitated: i,
            ignoreGcd: !0,
            castLen: o,
            engineOnly: !0,
            outOfCombat: n,
            fx: a
        });
    var sm = new R(Vr(21, 77, 1));
    var am = new R({
        id: 2,
        targetMode: 16,
        minlevel: 5,
        cd: 30,
        gcd: 0,
        costMp: t => 3 + t * 5,
        fx: {
            animCast: 6
        },
        custom: [
            [t => 7 + t * 12, " heal on block"]
        ],
        onCast: (t, e, o) => ({
            id: 59,
            mode: 4,
            stacks: 1,
            duration: 9,
            caster: t.id,
            target: t.id,
            level: e
        })
    });
    var cm = t => .7 + t * .2,
        ub = t => cm(t) + 30 / (250 / 20),
        lm = new R({
            id: 33,
            targetMode: 17,
            skilllevels: 1,
            minlevel: 11,
            cd: 15,
            range: 30,
            disablingBuffs: [4],
            costMp: t => 12,
            custom: [
                [cm, "s stunned at min range"],
                [ub, "s stunned at max range"]
            ],
            onCast: (t, e, o) => {}
        });
    var fm = new R(Tt(20, 76, 15, 300, 150, 20, t => t * 8, {
        animCast: 6
    }));
    var um = new R({
        id: 18,
        cd: 0,
        minlevel: 8,
        autoSkillBar: !1,
        fx: {},
        onPermanent: () => 73
    });
    var dm = new R({
        id: 3,
        targetMode: 1,
        minlevel: 3,
        cd: 6,
        costMp: t => 2 + t * 2,
        fx: {
            animCast: 5,
            effectDirImpact: 9
        },
        onCast: (t, e, o) => ({
            id: 3,
            mode: 0,
            caster: t.id,
            dmg: t.stats.getDamageRoll() * (1 + e * .18),
            type: 1,
            aoe: {
                faction: !1,
                circleRadius: 2 + 5 * t.size
            }
        })
    });
    var mm = new R({
        id: 17,
        targetMode: 16,
        minlevel: 13,
        cd: 50,
        gcd: 0,
        costMp: t => t * 8,
        fx: {
            animCast: 6
        },
        onCast: (t, e, o) => ({
            id: 72,
            mode: 4,
            stacks: 1,
            duration: 17,
            caster: t.id,
            target: t.id,
            level: e
        })
    });
    var pm = new R({
        id: 50,
        targetMode: 1,
        minlevel: 7,
        cd: 30,
        costMp: t => t * 4,
        fx: {
            animCast: 40
        },
        custom: [
            [t => 20 + t * 5, " % missing + 100 HP recovered"]
        ],
        onCast: (t, e, o) => ({
            id: 121,
            mode: 4,
            stacks: 1,
            caster: t.id,
            buffdata: [0],
            sendBuffData: !0,
            duration: 1 + e,
            level: e,
            aoe: {
                faction: !1,
                circleRadius: 8
            }
        })
    });
    var db = t => t * 8,
        hm = new R({
            id: 1,
            targetMode: 4096,
            minlevel: 1,
            cd: 1,
            range: 2,
            custom: [
                [db, "% chance to daze target for 3 seconds"]
            ],
            costMp: t => 1 + t,
            fx: {
                animImpact: 3
            },
            onCast: (t, e, o) => {
                let r = 5 + t.stats.getDamageRoll() * (.38 + e * .39);
                return {
                    id: 1,
                    mode: 0,
                    caster: t.id,
                    target: o,
                    dmg: r,
                    type: 1
                }
            }
        });
    var gm = t => 1e4 + t * 1e4,
        mb = (t, e) => {
            if (e.type === 1) {
                let o = 0;
                e.aggroValues.forEach((r, n) => {
                    r > o && (o = r)
                }), e.aggroValues.set(t.caster, o + gm(t.level)), e.buffs.buffs.has(122) && add({
                    id: 125,
                    mode: 5,
                    stacks: t.level,
                    caster: e.id,
                    target: t.caster,
                    refresh: !0,
                    duration: 60,
                    level: 1
                })
            }
        },
        vm = new R({
            id: 34,
            targetMode: 1,
            minlevel: 6,
            cd: 15,
            costMp: t => t * 4,
            fx: {
                animCast: 7
            },
            custom: [
                [gm, " aggro generation"]
            ],
            onCast: (t, e, o) => ({
                custom: mb,
                id: 89,
                mode: 4,
                stacks: 1,
                caster: t.id,
                duration: 2 + e,
                level: e,
                aoe: {
                    faction: !1,
                    circleRadius: 10
                }
            })
        });
    var xm = new R({
        id: 41,
        targetMode: 16,
        minlevel: 25,
        cd: 30,
        skilllevels: 1,
        gcd: 0,
        costMp: t => 3 + t * 5,
        onCast: (t, e, o) => {}
    });
    var bm = new R(Tt(19, 75, 18, 300, 150, 20, t => t * 8, {
        animCast: 6
    }));
    var wm = new R({
        id: 46,
        targetMode: 1,
        range: 30,
        minlevel: 4,
        cd: 30,
        castLen: 0,
        costMp: t => 10 + t * 3,
        fx: {
            effectTarget: 106
        },
        onCast: (t, e, o) => {}
    });
    var _m = new R(Tt(22, 78, 17, 300, 120, 20, t => 5 + t * 10, {
        animCast: 6
    }));
    var ym = new R(Ji(24, 80, 15, 1.5, 0, 300, t => 2 + t * 3, 4, {
        animCast: 9,
        animChannel: 18
    }));
    var Mm = new R({
        id: 52,
        targetMode: 1,
        minlevel: 7,
        envCast: 7,
        cd: 6,
        range: 25,
        costMp: t => t * 2,
        fx: {
            effectMissile: 107,
            effectTarget: 111
        },
        onCast: (t, e, o, r, n, i) => {}
    });
    var km = new R({
        id: 14,
        targetMode: 1,
        minlevel: 3,
        cd: 25,
        costMp: t => t * 4,
        fx: {
            animCast: 31
        },
        onCast: (t, e, o) => ({
            id: 69,
            mode: 4,
            stacks: 1,
            caster: t.id,
            duration: 5.5 + e * .5,
            level: e,
            aoe: {
                faction: !1,
                circleRadius: 8
            }
        })
    });
    var Fm = new R({
        id: 16,
        targetMode: 16,
        minlevel: 13,
        cd: 45,
        gcd: 0,
        fx: {
            animCast: 6
        },
        onCast: (t, e, o) => ({
            id: 71,
            mode: 4,
            stacks: 1,
            duration: 12,
            caster: t.id,
            target: t.id,
            level: e
        })
    });
    var Cm = new R({
        id: 53,
        targetMode: 16,
        minlevel: 9,
        cd: 80,
        gcd: 0,
        ignoreIncapacitated: !0,
        ignoreGcd: !0,
        costMp: t => t * 5,
        onCast: (t, e, o) => ({
            id: 117,
            mode: 4,
            duration: 5,
            stacks: 1,
            caster: t.id,
            target: t.id,
            level: e
        })
    });
    var Am = new R({
        id: 4,
        targetMode: 4096,
        range: 30,
        minlevel: 1,
        cd: 0,
        castLen: 1.5,
        custom: [
            [t => 100 + t * 10, "% frozen buff multiplier"]
        ],
        costMp: t => 1 + t * 2,
        fx: {
            animCast: 29,
            effectDirImpact: 30,
            animChannel: 30,
            effectMissile: 27
        },
        onCast: (t, e, o) => ({
            id: 4,
            mode: 6,
            speed: 25,
            caster: t.id,
            target: o,
            dmg: 5 + t.stats.getDamageRoll() * (.3 + e * .32),
            type: 1
        }),
        onPermanent: () => 100
    });
    var Sm = t => 2 + t * 2,
        Pm = new R({
            id: 23,
            targetMode: 16,
            minlevel: 5,
            cd: 60,
            gcd: 0,
            costMp: t => t * 5,
            custom: [
                [Sm, " attacks blocked"]
            ],
            fx: {
                animCast: 6
            },
            onCast: (t, e, o) => ({
                id: 79,
                mode: 4,
                stacks: Sm(e),
                duration: 60,
                caster: t.id,
                target: t.id,
                level: e
            })
        });
    var Em = new R({
        id: 15,
        targetMode: 1,
        range: 30,
        minlevel: 8,
        cd: 8,
        castLen: 1.5,
        costMp: t => 5 + t * 5,
        fx: {
            animCast: 29,
            animChannel: 30,
            effectDirImpact: 31,
            effectMissile: 28
        },
        onCast: (t, e, o) => ({
            id: 15,
            mode: 6,
            speed: 10,
            timeout: 2.5,
            caster: t.id,
            rot: t.rot,
            dmg: 10 + t.stats.getDamageRoll() * (.56 + e * .6),
            type: 1,
            aoe: {
                circleRadius: 4 + e * .5,
                faction: !1,
                onlyOnce: []
            }
        })
    });
    var Lm = new R({
        id: 51,
        targetMode: 4096,
        range: 30,
        minlevel: 4,
        cd: 10,
        castLen: 2.8,
        costMp: t => 1 + t * 2,
        fx: {
            animCast: 37,
            effectDirImpact: 119,
            animChannel: 30,
            effectMissile: 118
        },
        onCast: (t, e, o) => ({
            id: 51,
            mode: 6,
            speed: 20,
            caster: t.id,
            target: o,
            dmg: 5 + t.stats.getDamageRoll() * (1.25 + e * 1.33),
            type: 1,
            noBlock: !0
        })
    });
    var pb = () => 12,
        Dm = new R({
            id: 32,
            targetMode: 1,
            skilllevels: 1,
            minlevel: 5,
            gcd: .7,
            cd: 12,
            disablingBuffs: [4],
            costMp: t => t * 4,
            fx: {
                animCast: 32
            },
            custom: [
                [pb, "m distance"]
            ],
            onCast: (t, e, o) => {}
        });
    var Tm = new R({
        id: 37,
        targetMode: 4096,
        range: 30,
        minlevel: 15,
        cd: 40,
        castLen: 2.3,
        costMp: t => 5 + t * 5,
        fx: {
            animCast: 9,
            effectImpact: 50,
            animChannel: 16
        },
        onCast: (t, e, o) => ({
            id: 91,
            mode: 4,
            stacks: 1,
            caster: t.id,
            target: o,
            duration: 2.4 + e * 1,
            level: e
        })
    });
    var Im = new R(Tt(28, 84, 12, 15, 60, 15, t => 1 + t * 3, {
        animCast: 6
    }));
    var zm = new R({
        id: 12,
        targetMode: 4096,
        range: 30 - 5,
        minlevel: 1,
        castLen: 0,
        cd: 3,
        costMp: t => Math.round(1 + t * 4.5),
        fx: {
            animCast: 10,
            effectMissile: 48
        },
        onCast: (t, e, o) => ({
            id: 12,
            mode: 6,
            dmg: 5 + t.stats.getDamageRoll() * (.03 + e * .13),
            type: 1,
            speed: 15,
            caster: t.id,
            target: o,
            level: e
        })
    });
    var je = (t, e, o) => Math.min(Math.max(t, e), o);
    var Vn = (t, e, o) => {
        let r = je((o - t) / (e - t), 0, 1);
        return r * r * (3 - 2 * r)
    };
    var Rn = (t, e, o) => e + je(t, 0, 1) * (o - e),
        jt = {
            linear: t => t,
            easeInQuad: t => t * t,
            easeInQuart: t => t ** 4,
            easeOutQuad: t => t * (2 - t),
            easeOutExpo: t => -Math.pow(2, -10 * t) + 1,
            easeOutFlick: t => 1 - Math.pow(1 - t, 10),
            sin: t => Math.sin(t * 3.14),
            sinReverse: t => 1 - Math.sin(t * 3.14),
            easeInOutCubic: t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
            easeInOutQuint: t => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
            easeBounce: t => t < .36363636363636365 ? 7.5625 * t * t : t < .7272727272727273 ? 7.5625 * (t -= .5454545454545454) * t + .75 : t < .9090909090909091 ? 7.5625 * (t -= .8181818181818182) * t + .9375 : 7.5625 * (t -= .9545454545454546) * t + .984375,
            anticipate: t => -1 / (1 + Math.exp((t - .5) * 50)) + Math.sin((t - .5) * 6.2) * 1.4 * (1 - t * .5) + 1,
            flicker: t => Math.sin(t * 3.14) * (1 + Math.sin(t * 38) * .3)
        };
    var Rr = [jt.linear, jt.easeInQuad, jt.easeInQuart, jt.easeOutQuad, jt.easeOutExpo, jt.easeOutFlick, jt.sin, jt.sinReverse, jt.easeInOutCubic, jt.easeInOutQuint, jt.easeBounce, jt.anticipate, jt.flicker];
    var go = class {
        constructor(e = 0, o = 0) {
            this.start = e, this.end = e + o, this.duration = o
        }
        done(e) {
            return e > this.end
        }
        fraction(e) {
            return je(1 - (this.end - e) / this.duration, 0, 1)
        }
        remaining(e) {
            return this.end - e
        }
        passed(e) {
            return e - this.start
        }
        reset(e, o = this.duration) {
            return this.start = e, this.end = e + o, this.duration = o, !0
        }
        set(e, o) {
            return this.start = e, this.end = o, this.duration = this.end - this.start, !0
        }
    };
    var Vm = new R({
        id: 30,
        targetMode: 1,
        range: 30,
        minlevel: 18,
        cd: 60,
        castLen: 2.3,
        costMp: t => 10 + t * 8,
        fx: {
            effectImpact: 70,
            animCast: 14,
            animChannel: 15,
            effectMissile: 69
        },
        onCast: (t, e, o) => ({
            id: 30,
            mode: 6,
            speed: 0,
            timeout: 30,
            caster: t.id,
            rot: t.rot,
            interval: new go(0, 2),
            heal: t.stats.getDamageRoll() * (.08 + e * .05),
            type: 1,
            aoe: {
                circleRadius: 30,
                circleHeight: 30,
                faction: !0,
                limit: 15
            }
        })
    });
    var Rm = new R(Tt(13, 68, 6, 15, 90, 15, void 0, {
        animCast: 22
    }));
    var Um = new R({
        id: 6,
        targetMode: 256,
        range: 30,
        minlevel: 8,
        cd: 0,
        castLen: 1.7,
        costMp: t => 4 + t * 4,
        fx: {
            animCast: 11,
            effectImpact: 36,
            animChannel: 12
        },
        onCast: (t, e, o) => ({
            id: 6,
            mode: 2,
            caster: t.id,
            target: o,
            heal: 15 + t.stats.getDamageRoll() * (.2 + e * .18)
        })
    });
    var Bm = new R({
        id: 47,
        targetMode: 256,
        range: 30,
        minlevel: 14,
        cd: 12,
        castLen: 0,
        costMp: t => 4 + t * 4,
        fx: {
            animCast: 9,
            effectTarget: 112
        },
        custom: [
            [t => t, " effects removed"]
        ],
        onCast: (t, e, o) => {
            let r = 0;
            return {
                id: 47,
                mode: 2,
                caster: t.id,
                target: o,
                heal: (1 + r) * (15 + t.stats.getDamageRoll() * .25)
            }
        }
    });
    var hb = t => 1 + t * 2,
        gb = t => 1 + t * 2,
        jm = new R(Vr(43, 106, 3, [
            [hb, "% haste per stack"],
            [gb, " jumps"]
        ]));
    var qm = new R(Ji(7, 60, 3, 0, 0, 12, t => 2 + t * 2, 5, {
        animCast: 9
    }));
    var vb = t => Math.round(t * 1.3),
        xb = t => t * 2,
        Nm = new R({
            id: 42,
            targetMode: 1,
            minlevel: 8,
            cd: 8,
            castLen: 0,
            range: 30 - 5,
            custom: [
                [vb, " mana gained per soul"],
                [xb, " extended Decay duration"]
            ],
            costMp: t => 1 + t * 3,
            fx: {
                animCast: 13,
                effectImpact: 46
            },
            onCast: (t, e, o) => ({
                id: 42,
                mode: 1,
                caster: t.id,
                target: 0,
                type: 1,
                dmg: 4 + t.stats.getDamageRoll() * (.25 + e * .4),
                level: e
            })
        });
    var Om = new R({
        id: 105,
        engineOnly: !0,
        cd: 0,
        fx: {
            effectImpact: 47,
            effectMissile: 45
        }
    });
    var Wm = new R({
        id: 36,
        targetMode: 16,
        minlevel: 10,
        cd: 30,
        gcd: 0,
        costMp: t => 8 + t * 2,
        onCast: (t, e, o) => ({
            id: 90,
            mode: 4,
            stacks: 1,
            duration: 5 + e * 5,
            caster: t.id,
            target: t.id,
            level: e
        })
    });
    var Gm = new R({
        id: 35,
        targetMode: 1,
        skilllevels: 1,
        minlevel: 5,
        cd: 120,
        skillpoints: 0,
        castLen: 5,
        outOfCombat: !0,
        hasteAffected: !1,
        pvpBoundsAdd: 5,
        costMp: t => 20 + t * 5,
        fx: {
            animCast: 20,
            animChannel: 21
        },
        onCast: (t, e, o) => {}
    });
    var $m = new R({
        id: 49,
        targetMode: 4096,
        range: 30,
        minlevel: 13,
        cd: 25,
        costMp: t => 1 + t * 1,
        fx: {
            animCast: 38,
            effectMissile: 123,
            animChannel: 28
        },
        onCast: (t, e, o) => ({
            id: 49,
            buffid: 119,
            mode: 7,
            speed: 60,
            caster: t.id,
            level: e,
            stacks: 1,
            duration: 1 + e * 2,
            refresh: !0,
            target: o
        })
    });
    var Hm = new R({
        id: 54,
        targetMode: 4096,
        range: 30,
        minlevel: 8,
        cd: 10,
        castLen: 2.8,
        costMp: t => 8 + t * 3,
        fx: {
            animCast: 39,
            effectDirImpact: 121,
            animChannel: 25,
            effectMissile: 114
        },
        onCast: (t, e, o) => ({
            id: 54,
            mode: 6,
            speed: 60,
            caster: t.id,
            target: o,
            dmg: 5 + t.stats.getDamageRoll() * (1.25 + e * 1.33),
            type: 1,
            noBlock: !0
        })
    });
    var Ym = new R(Vr(26, 82, 15));
    var bb = t => 3 + t * 5,
        Xm = new R({
            id: 11,
            targetMode: 16,
            minlevel: 7,
            cd: 50,
            gcd: 0,
            fx: {
                animCast: 6
            },
            custom: [
                [bb, "% of max mp recovered"]
            ],
            onCast: (t, e, o) => ({
                id: 66,
                mode: 4,
                stacks: 1,
                duration: 17,
                caster: t.id,
                target: t.id,
                level: e
            })
        });
    var Qm = new R(Tt(27, 83, 12, 10, 80, 20, t => 5 + t * 7, {
        animCast: 6
    }));
    var Zm = new R({
        id: 29,
        cd: 0,
        minlevel: 9,
        autoSkillBar: !1,
        onPermanent: () => 85
    });
    var Km = new R({
        id: 9,
        targetMode: 4096,
        range: 30,
        minlevel: 3,
        cd: 6,
        castLen: 1.7,
        costMp: t => 2 + t * 3,
        fx: {
            animCast: 24,
            effectDirImpact: 85,
            animChannel: 25,
            effectMissile: 33
        },
        onCast: (t, e, o) => ({
            id: 9,
            mode: 6,
            speed: 120,
            caster: t.id,
            target: o,
            dmg: 5 + t.stats.getDamageRoll() * (.53 + e * .45),
            type: 1
        })
    });
    var Jm = new R({
        id: 10,
        targetMode: 16,
        minlevel: 5,
        cd: 0,
        autoSkillBar: !1,
        skillpoints: 0,
        onPermanent: () => 65
    });
    var e0 = new R({
        id: 38,
        targetMode: 16,
        minlevel: 5,
        skilllevels: 1,
        cd: 10,
        gcd: 0,
        disablingBuffs: [4],
        costMp: t => 6,
        fx: {
            animCast: 23
        },
        onCast: (t, e, o) => !0
    });
    var t0 = new R({
        id: 31,
        targetMode: 4096,
        range: 30,
        minlevel: 1,
        cd: 0,
        castLen: 1.5,
        costMp: t => 1 + t * 1,
        fx: {
            animCast: 27,
            effectDirImpact: 84,
            effectMissile: 34,
            animChannel: 28
        },
        onCast: (t, e, o) => ({
            id: 31,
            mode: 6,
            speed: 60,
            caster: t.id,
            target: o,
            dmg: 5 + t.stats.getDamageRoll() * (.24 + e * .25),
            type: 1
        })
    });
    var o0 = new R(Tt(25, 81, 18, 300, 120, 20, t => 5 + t * 5, {
        animCast: 6
    }));
    var r0 = new R({
        id: 48,
        targetMode: 4096,
        range: 30,
        minlevel: 6,
        cd: 20,
        ignoreGcd: !0,
        costMp: t => 1 + t * 1,
        fx: {
            animCast: 36,
            effectDirImpact: 115,
            effectMissile: 113,
            animChannel: 28
        },
        custom: [
            [t => t * 120, " HP recovered"]
        ],
        onCast: (t, e, o) => ({
            id: 48,
            mode: 6,
            speed: 80,
            caster: t.id,
            target: o,
            dmg: 5 + t.stats.getDamageRoll() * (.28 + e * .28),
            type: 1
        })
    });
    var n0 = new R({
        id: 106,
        engineOnly: !0,
        cd: 0,
        fx: {
            effectMissile: 116,
            effectImpact: 117
        }
    });
    var i0 = new R({
        id: 45,
        targetMode: 1,
        range: 30,
        minlevel: 4,
        cd: 25,
        castLen: 0,
        costMp: t => 18 + t * 3,
        fx: {
            effectDirImpact: 11,
            effectMissile: 103
        },
        onCast: (t, e, o) => {}
    });
    var wb = {
            medalValue: 1e3,
            goldValue: 8e4,
            buyElo: 1600
        },
        _b = {
            goldValue: 125e4
        },
        qa = [{
            custom: ["Use: Removes all movement limiting effects."],
            useCd: 60,
            incap: !0,
            animCast: 45
        }, {
            custom: ["Use: Protects you against 30% of incoming damage for 10 seconds."],
            useCd: 60,
            animCast: 6,
            incap: !1
        }, {
            custom: ["Use: Increases your damage by 20% for 10 seconds."],
            useCd: 80,
            incap: !1,
            animCast: 6
        }, {
            custom: ["Use: Speeds up your movement by 45 for 8 seconds."],
            useCd: 50,
            incap: !1,
            animCast: 6
        }, {
            custom: ["Use: Attacks made against you grant 20 MP (up to 200) for 20 seconds."],
            useCd: 60,
            incap: !1,
            animCast: 6
        }, {
            custom: ["Passive: Your attacks have a chance to heal you."]
        }, {
            custom: ["Passive: Your attacks have a chance to increase your haste by 15% for 12 seconds."]
        }, {
            custom: ["Passive: Increases your damage by 20% for 12 seconds when your health drops below 50%."]
        }, {
            custom: ["Use: Allows you to breathe underwater, swim faster and jump further while inside water."],
            useCd: 60,
            incap: !1,
            animCast: 6
        }, {
            custom: ["Use: Cover yourself in foliage, slowing your movement and turning you invisible to the enemy while standing still."],
            useCd: 180,
            incap: !1,
            animCast: 6
        }, {
            custom: ["Use: Turns you into a miniature version of yourself, reducing fall damage by 50%."],
            useCd: 60,
            incap: !1,
            animCast: 6
        }, {
            custom: ["Use: The next ability you cast will have no cooldown."],
            useCd: 80,
            incap: !1,
            animCast: 6
        }, {
            custom: ["Use: Blocked attacks deal damage back to the enemy for 12 seconds."],
            useCd: 60,
            incap: !1,
            animCast: 6
        }, {
            custom: ["Use: Transforms you into an orc, granting daze immunity and +10 movement speed."],
            useCd: 60,
            incap: !1,
            animCast: 6
        }, {
            custom: ["Passive: Grants 10% Item Find + 1% for every 10 gold in your inventory. (100% Maximum)"]
        }],
        s0 = t => {
            qa.forEach((e, o) => {
                t["charm" + o] = {
                    ...o <= 4 ? wb : _b,
                    ...e,
                    quality: 90,
                    level: 45,
                    gs: 30,
                    uniqueEquipped: !0,
                    type: "charm",
                    tier: o,
                    useSkill: e.useCd !== void 0 ? 107 + o : void 0
                }
            })
        };
    var a0 = new R(er(100, 30, 0, !0, !0, !1, !1, {
            animCast: 17
        })),
        c0 = new R(er(101, 1.5, 0, !0, !1, !1, !1)),
        l0 = new R(er(104, 1.5, 0, !1, !1, !1, !1, {
            animCast: 6
        })),
        f0 = new R(er(103, 1.5, 3, !0, !0, !1, !1, {
            animCast: 19,
            animChannel: 18
        })),
        u0 = new R(er(102, 1.5, 1.5, !1, !0, !1, !1, {
            animCast: 9,
            animChannel: 18
        })),
        d0 = qa.map((t, e) => new R(er(107 + e, t.useCd, 0, !1, !1, t.incap, !0, {
            animCast: t.animCast
        }))).reduce((t, e) => ({
            ...t,
            ["charm" + e.id]: e
        }), {});
    var m0 = new R({
        id: 5,
        targetMode: 4096,
        range: 30,
        engineOnly: !0,
        auto: !0,
        cd: t => 100 / t.stats.getStat(17),
        fx: {
            animCast: 26,
            effectDirImpact: 11,
            effectMissile: 32
        },
        onCast: (t, e, o) => ({
            id: 5,
            mode: 6,
            speed: 15 * 3,
            caster: t.id,
            target: o,
            dmg: t.stats.getDamageRoll(),
            type: 0
        })
    });
    var p0 = new R({
        id: 56,
        targetMode: 1,
        range: 50,
        cd: 10,
        engineOnly: !0,
        castLen: 2,
        fx: {
            animCast: 41,
            animChannel: 42
        }
    });
    var h0 = new R({
        id: 44,
        targetMode: 1,
        range: 50,
        minlevel: 3,
        cd: 5,
        engineOnly: !0,
        castLen: 1.5,
        costMp: t => t * 4
    });
    var g0 = new R({
        id: 55,
        targetMode: 1,
        range: 50,
        minlevel: 3,
        cd: 20,
        engineOnly: !0,
        castLen: 2,
        fx: {
            effectMissile: 131,
            animCast: 43,
            animChannel: 42
        }
    });
    var v0 = new R({
        id: 58,
        targetMode: 1,
        range: 10,
        cd: 2,
        engineOnly: !0,
        hasteAffected: !1,
        castLen: 30,
        fx: {
            animCast: 9,
            animChannel: 44
        }
    });
    var x0 = new R({
        id: 57,
        targetMode: 4096,
        engineOnly: !0,
        fx: {
            effectMissile: 153,
            effectDirImpact: 154
        }
    });
    var b0 = new R({
        id: 0,
        targetMode: 4096,
        engineOnly: !0,
        auto: !0,
        range: 2,
        cd: t => 100 / t.stats.getStat(17),
        fx: {
            animImpact: 4
        },
        onCast: (t, e, o) => ({
            id: 0,
            mode: 0,
            caster: t.id,
            target: o,
            dmg: t.stats.getDamageRoll(),
            type: 0
        })
    });
    var w0 = new R({
        id: 39,
        engineOnly: !1,
        skilllevels: 1,
        minlevel: 30,
        cd: 0,
        goldValue: 25e3,
        skillpoints: 0,
        noReward: !0,
        autoSkillBar: !1
    });
    var _0 = new R({
        id: 40,
        targetMode: 1,
        engineOnly: !0,
        cd: 300,
        castLen: 5,
        outOfCombat: !0,
        hasteAffected: !1,
        costMp: t => 20 + t * 5,
        fx: {
            animCast: 9,
            animChannel: 8
        },
        onCast: (t, e, o) => {}
    });
    var y0 = new R({
        id: 8,
        engineOnly: !0,
        cd: 0,
        onPermanent: t => t.class + 61
    });
    var yb = {
            ...d0,
            hellspawn_missile: x0,
            conjurer_obeliskport: v0,
            boss_bigaoe: p0,
            boss_puddledot: g0,
            recall: _0,
            arrow: m0,
            melee: b0,
            potion: a0,
            book: c0,
            specialization: y0,
            mount: w0,
            activatemount: u0,
            container: f0,
            boss_flamepits: h0,
            useGeneric: l0
        },
        Mb = {
            relentlessCry: pm,
            whirlwind: wm,
            temper: xm,
            taunt: vm,
            charge: lm,
            warcry: bm,
            courage: fm,
            armorreinforcement: sm,
            enrage: mm,
            slash: hm,
            blockBuff: am,
            crescentStrike: dm,
            crescentBleed: um
        },
        kb = {
            frostcall: Mm,
            iceblock: Cm,
            shatterfrost: Lm,
            teleport: Dm,
            enchantment: ym,
            arcticaura: _m,
            iceshield: Pm,
            hypothermic: Fm,
            frostnova: km,
            icebolt: Am,
            icicle: Em
        },
        Fb = {
            vampiricarrowReturn: n0,
            boneshot: Hm,
            blindingshot: $m,
            vampiricarrow: r0,
            volley: i0,
            snipe: e0,
            poisonarrows: Zm,
            temporaldilation: o0,
            pathfinding: Qm,
            preciseShot: Km,
            serpentArrows: Jm,
            invigorate: Xm,
            swiftshot: t0,
            cranialpunctures: Ym
        },
        Cb = {
            mimirscleanse: Bm,
            soulharvestReturn: Om,
            plaguespreader: jm,
            soulharvest: Nm,
            agonize: Tm,
            caninehowl: Im,
            mana: Rm,
            mend: Um,
            revitalize: qm,
            decay: zm,
            healingtotem: Vm,
            summon: Gm,
            spiritanimal: Wm
        },
        vo = new Map;
    [Mb, kb, Fb, Cb, yb].forEach((t, e) => {
        for (let o in t) e <= 3 && (t[o].class = e), vo.set(t[o].id, t[o])
    });
    vo.set(64, new R({
        id: 64,
        engineOnly: !0
    }));
    var Ab = [1600, 1800, 2e3, 2200],
        lS = Ab.length;
    var tr = "webp",
        Un = "webp",
        Na = "webp",
        Sb = () => new Promise((t, e) => {
            let o = new Image;
            o.onerror = () => {
                e()
            }, o.onload = () => {
                tr = Un = Na = "avif", t(!0)
            }, o.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
        }).catch(() => {
            console.log("Avif not supported", navigator.userAgent)
        });
    Sb();
    var Pb = [0, 0, 1, 1, 2, 3],
        M0 = (t, e) => "book" + (e !== void 0 ? e : "") + Pb[t % 5];
    var Ur = t => `/data/ui/skills/${t}.${Un}?v=8926940`;
    var Oa = t => `/data/ui/classes/${t}.${tr}?v=8926940`,
        Wa = t => `/data/ui/factions/${t}.${tr}?v=8926940`;
    var F0 = t => {
        vo.forEach(e => {
            if (!e.engineOnly)
                for (let o = 0; o < e.skilllevels; ++o) {
                    let r = e.id * 5 + o;
                    t[`book${r}`] = {
                        type: "book",
                        tier: r,
                        level: e.minlevel + o * 8,
                        skillid: e.id,
                        skilllevel: o,
                        class: e.class,
                        noReward: e.noReward || !1,
                        goldValue: e.goldValue || (e.minlevel + o * 5 < 5 ? 4 : 0),
                        quality: Math.round(Math.min(99, 30 + 70 * (o / 5))),
                        art: M0(r, e.class),
                        useSkill: 101
                    }
                }
        })
    };
    var Eb = [{
            id: 0,
            storeValue: 300,
            quality: 90,
            level: 1,
            custom: ["Contains random mount (account bound) of rare or epic quality"],
            bindOnPurchase: 1,
            useSkill: 103
        }, {
            id: 1,
            storeValue: 900,
            quality: 90,
            level: 1,
            custom: ["Adds one month of Elixir to your account"],
            bindOnMerchant: 1,
            useSkill: 103
        }, {
            id: 2,
            storeValue: 700,
            quality: 90,
            level: 1,
            bindOnMerchant: 1,
            custom: ["Used to upgrade rare pets, allowing them to pick up items."]
        }],
        C0 = t => {
            Eb.forEach(e => {
                t["box" + e.id] = {
                    ...e,
                    type: "box",
                    tier: e.id,
                    unsellable: !0
                }
            })
        };
    var or = {
            hammer: {
                baselvl: 0,
                slot: [101],
                tiers: 17,
                drop: .4,
                weight: 1,
                class: 3,
                stats: {
                    10: {
                        base: 1,
                        min: .6,
                        max: 1
                    },
                    11: {
                        base: 3,
                        min: .8,
                        max: 1.7
                    },
                    17: {
                        base: 15,
                        min: .05,
                        max: .1
                    }
                },
                stackable: !1
            },
            bow: {
                baselvl: 0,
                slot: [101],
                tiers: 17,
                drop: .4,
                weight: 1,
                class: 2,
                stats: {
                    10: {
                        base: 1,
                        min: .6,
                        max: 1
                    },
                    11: {
                        base: 3,
                        min: .8,
                        max: 1.7
                    },
                    17: {
                        base: 10,
                        min: .05,
                        max: .1
                    }
                },
                stackable: !1
            },
            staff: {
                baselvl: 0,
                slot: [101],
                tiers: 17,
                drop: .4,
                weight: 1,
                class: 1,
                stats: {
                    10: {
                        base: 1,
                        min: .6,
                        max: 1
                    },
                    11: {
                        base: 3,
                        min: .8,
                        max: 1.7
                    },
                    17: {
                        base: 10,
                        min: .05,
                        max: .1
                    }
                },
                stackable: !1
            },
            sword: {
                baselvl: 0,
                slot: [101],
                tiers: 17,
                drop: .4,
                weight: 1,
                class: 0,
                stats: {
                    10: {
                        base: 1,
                        min: .6,
                        max: 1
                    },
                    11: {
                        base: 3,
                        min: .8,
                        max: 1.7
                    },
                    17: {
                        base: 20,
                        min: .05,
                        max: .1
                    }
                },
                stackable: !1
            },
            armlet: {
                baselvl: 1,
                slot: [102],
                tiers: 13,
                drop: 1,
                weight: .3,
                stats: {
                    6: {
                        base: 10,
                        min: .5,
                        max: .9
                    },
                    12: {
                        base: 7,
                        min: .5,
                        max: .8
                    }
                },
                stackable: !1
            },
            armor: {
                baselvl: 2,
                slot: [103],
                tiers: 11,
                drop: 1,
                weight: 1,
                stats: {
                    12: {
                        base: 10,
                        min: 1.4,
                        max: 2.8
                    },
                    6: {
                        base: 20,
                        min: 1,
                        max: 2
                    }
                },
                stackable: !1
            },
            bag: {
                baselvl: 5,
                slot: [104],
                tiers: 5,
                drop: 1,
                weight: .1,
                stats: {
                    19: {
                        base: 1,
                        min: .1,
                        max: .3
                    }
                },
                stackable: !1
            },
            boot: {
                baselvl: 2,
                slot: [105],
                tiers: 13,
                drop: 1,
                weight: .4,
                stats: {
                    6: {
                        base: 10,
                        min: .6,
                        max: 1
                    },
                    12: {
                        base: 8,
                        min: .6,
                        max: 1.1
                    },
                    15: {
                        base: 3,
                        min: .03,
                        max: .1
                    }
                },
                stackable: !1
            },
            glove: {
                baselvl: 2,
                slot: [106],
                tiers: 13,
                drop: 1,
                weight: .4,
                stats: {
                    6: {
                        base: 10,
                        min: .6,
                        max: 1
                    },
                    12: {
                        base: 8,
                        min: .7,
                        max: 1.1
                    },
                    14: {
                        base: 1,
                        min: .1,
                        max: 1.5
                    }
                },
                stackable: !1
            },
            ring: {
                baselvl: 5,
                slot: [107],
                tiers: 12,
                drop: .8,
                weight: .2,
                stats: {
                    6: {
                        base: 10,
                        min: .5,
                        max: .9
                    },
                    7: {
                        base: 5,
                        min: .6,
                        max: 1
                    }
                },
                stackable: !1
            },
            amulet: {
                baselvl: 7,
                slot: [108],
                tiers: 12,
                drop: .8,
                weight: .3,
                stats: {
                    7: {
                        base: 10,
                        min: 1,
                        max: 1.8
                    },
                    9: {
                        base: 1,
                        min: .2,
                        max: .3
                    }
                },
                stackable: !1
            },
            quiver: {
                baselvl: 2,
                slot: [109],
                tiers: 10,
                drop: .7,
                weight: .5,
                class: 2,
                stats: {
                    14: {
                        base: 5,
                        min: .1,
                        max: .9
                    },
                    9: {
                        base: 1,
                        min: .1,
                        max: .3
                    }
                },
                stackable: !1
            },
            shield: {
                baselvl: 2,
                slot: [109],
                tiers: 10,
                drop: .7,
                weight: .5,
                class: 0,
                stats: {
                    12: {
                        base: 20,
                        min: .8,
                        max: 1.4
                    },
                    13: {
                        base: 4,
                        min: 1,
                        max: 2.8
                    }
                },
                stackable: !1
            },
            totem: {
                baselvl: 2,
                slot: [109],
                tiers: 10,
                drop: .7,
                weight: .5,
                class: 3,
                stats: {
                    12: {
                        base: 10,
                        min: .4,
                        max: .9
                    },
                    9: {
                        base: 1,
                        min: .1,
                        max: .4
                    }
                },
                stackable: !1
            },
            orb: {
                baselvl: 2,
                slot: [109],
                tiers: 10,
                drop: .7,
                weight: .5,
                class: 1,
                stats: {
                    3: {
                        base: 10,
                        min: .3,
                        max: .7
                    },
                    9: {
                        base: 1,
                        min: .1,
                        max: .3
                    }
                },
                stackable: !1
            },
            rune: {
                baselvl: 1,
                tiers: 11,
                drop: .8,
                quality: 70,
                stackable: !0
            },
            misc: {
                drop: 8,
                weight: .1,
                stackable: !0
            },
            book: {
                drop: 1.6,
                weight: .5,
                stackable: !0
            },
            charm: {
                slot: [110, 111],
                noupgrade: !0,
                undroppable: !0,
                drop: 0,
                stackable: !1
            },
            mount: {
                undroppable: !0,
                drop: 0,
                stackable: !1
            },
            box: {
                noupgrade: !0,
                undroppable: !0,
                drop: 0,
                stackable: !1
            },
            pet: {
                undroppable: !0,
                drop: 0,
                stackable: !1
            },
            material: {
                drop: 0,
                stackable: !0
            },
            gold: {
                drop: 24
            }
        },
        bS = Object.keys(or),
        Lb = {
            6: {
                min: .2,
                max: .8,
                round: !0
            },
            7: {
                min: .2,
                max: .5,
                round: !0
            },
            8: {
                min: .1,
                max: 1
            },
            9: {
                min: .1,
                max: .5
            },
            10: {
                min: .03,
                max: .13,
                round: !0
            },
            11: {
                min: .1,
                max: .2,
                round: !0
            },
            12: {
                min: .1,
                max: .8,
                round: !0
            },
            13: {
                min: .1,
                max: .4
            },
            14: {
                min: .1,
                max: .5
            },
            16: {
                min: .1,
                max: .4
            },
            2: {
                min: .08,
                max: .45,
                round: !0
            },
            0: {
                min: .08,
                max: .45,
                round: !0
            },
            3: {
                min: .08,
                max: .45,
                round: !0
            },
            4: {
                min: .08,
                max: .45,
                round: !0
            },
            1: {
                min: .08,
                max: .45,
                round: !0
            },
            5: {
                min: .08,
                max: .45,
                round: !0
            },
            18: {
                min: .01,
                max: .15,
                round: !0
            }
        },
        wS = Object.keys(Lb);
    var A0 = t => {
            for (let e in or)
                if (or[e].tiers) {
                    let o = or[e];
                    for (let r = 0; r < o.tiers; ++r) Tb({
                        type: e,
                        tier: r,
                        stats: o.stats,
                        level: Db(e, r),
                        class: o.class,
                        quality: o.quality
                    }, t)
                }
        },
        Db = (t, e) => or[t].baselvl + Math.floor(e / or[t].tiers * 100),
        Tb = (t, e) => {
            let o = {
                level: t.level,
                type: t.type,
                tier: t.tier,
                stats: t.stats ? new Map : void 0,
                class: t.class,
                quality: t.quality
            };
            t.stats && Object.keys(t.stats).sort((r, n) => r - n).forEach(r => {
                let n = t.stats[r];
                o.stats.set(parseInt(r), {
                    min: n.base + t.level * n.min,
                    max: n.base + (t.level + 10) * n.max
                })
            }), e[t.type + t.tier] = o
        };
    var Ib = [250, 100, 500, 200, 1e3, 300],
        S0 = t => {
            for (let e = 0; e < 6; ++e) {
                let o = Math.floor(e / 2),
                    r = e % 2 == 0;
                t["misc" + e] = {
                    type: "misc",
                    tier: e,
                    level: 1 + o * 20,
                    goldValue: [2, 10, 30][o],
                    quality: 15,
                    custom: ["" + Ib[e] + (r ? " HP recovered" : " MP recovered")],
                    useSkill: 100
                }
            }
        };
    var zb = [{
            lvl: 30,
            g: 1e4,
            qual: 50,
            store: 0,
            skin: 6
        }, {
            lvl: 30,
            g: 2e4,
            qual: 50,
            store: 0,
            skin: 21
        }, {
            lvl: 30,
            g: 5e4,
            qual: 80,
            store: 300,
            skin: 51
        }, {
            lvl: 30,
            g: 5e4,
            qual: 80,
            store: 300,
            skin: 52
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 1200,
            skin: 22
        }, {
            lvl: 30,
            g: 5e4,
            qual: 90,
            store: 600,
            skin: 23
        }, {
            lvl: 30,
            g: 5e4,
            qual: 80,
            store: 300,
            skin: 24
        }, {
            lvl: 30,
            g: 5e4,
            qual: 90,
            store: 600,
            skin: 25
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 1200,
            skin: 27
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 1200,
            skin: 28
        }, {
            lvl: 30,
            g: 5e4,
            qual: 80,
            store: 300,
            skin: 30
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 1200,
            skin: 31
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 1200,
            skin: 32
        }, {
            lvl: 30,
            g: 5e4,
            qual: 85,
            store: 400,
            skin: 29
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 1200,
            skin: 33
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 0,
            skin: 94
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 0,
            skin: 95
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 0,
            skin: 96
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 0,
            skin: 97
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 0,
            skin: 98
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 0,
            skin: 100
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 0,
            skin: 101
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 0,
            skin: 93
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 0,
            skin: 91
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 0,
            skin: 99
        }, {
            lvl: 30,
            g: 5e4,
            qual: 95,
            store: 0,
            skin: 92
        }].map(t => ({
            level: t.lvl,
            goldValue: t.g,
            storeValue: t.store,
            bindOnUse: 1,
            bindOnMerchant: t.store > 0 ? 1 : 0,
            quality: t.qual,
            skin: t.skin
        })),
        P0 = t => {
            zb.forEach((e, o) => {
                t["mount" + o] = {
                    ...e,
                    type: "mount",
                    tier: o,
                    requiredSkill: 39,
                    useSkill: 102
                }
            })
        };
    var Vb = [1919, 1920, 1944, 1945, 1946, 1947, 1948, 1960, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975],
        E0 = t => {
            Vb.forEach((e, o) => {
                t["pet" + o] = {
                    level: 10,
                    unsellable: !0,
                    storeValue: e > 1920 ? 0 : 900,
                    quality: 90,
                    bindOnUse: 1,
                    bindOnMerchant: e >= 1968 ? 0 : 1,
                    type: "pet",
                    tier: o,
                    useSkill: 104,
                    skin: e
                }
            })
        };
    var L0 = t => {
        let e = [2, 0, 1, 1, 0, 2, 2, 0, 1, 2, 0, 1, 1, 0, 0, 2, 1, 0, 1, 2, 0, 0, 0, 2, 2, 1, 1, 2, 1, 0, 0, 0, 2, 2, 0, 1, 0, 1, 1, 0];
        for (let o = 0; o < 40; ++o) {
            let r = e[o],
                n = [25, 60, 80][r],
                i = [350, 700, 1500][r];
            t["material" + o] = {
                type: "material",
                tier: o,
                goldValue: i,
                quality: n,
                art: "bag0"
            }
        }
    };
    var xo = {};
    A0(xo);
    S0(xo);
    F0(xo);
    P0(xo);
    s0(xo);
    E0(xo);
    L0(xo);
    C0(xo);
    var Br = Object.values(xo);
    Br.forEach((t, e) => t.id = e);
    var rr = async (t, e, o) => {
        let r = await fetch(t, {
            method: e !== void 0 ? "POST" : "GET",
            body: e ? JSON.stringify(e) : void 0
        });
        return r.status === 500 ? o(await r.text()) : await r.json()
    };
    var es = new Map,
        ts = new Map,
        os = new Map,
        Rb = new Map,
        Ub = new Map,
        qr = new Map,
        bo = new Map,
        $a = new Map,
        Nr = new Map,
        Or = new Map,
        Ha = new Map,
        Wr = new Map,
        Bb = new Map,
        jb = new Map,
        qb = new Map,
        Nb = new Map,
        Ob = new Map,
        Wb = new Map,
        Gb = new Map,
        $b = new Map,
        Hb = new Map,
        jr = new Map,
        Yb = [],
        Bn = [],
        Ya = new Map,
        Xb = new Map;
    var Ga = t => {
        t.classes.forEach(e => Xb.set(e.id, e)), t.files.forEach(e => qr.set(e.id, e)), t.particles.forEach(e => es.set(e.id, e)), t.effects.forEach(e => ts.set(e.id, e)), t.sounds.forEach(e => os.set(e.id, e)), t.soundsets.forEach(e => Rb.set(e.id, e)), t.soundsetSteps.forEach(e => Ub.set(e.id, e)), t.meshes.forEach(e => bo.set(e.id, e)), t.ribbons.forEach(e => $a.set(e.id, e)), t.areas.forEach(e => Ha.set(e.id, e)), t.terrains.forEach(e => Nr.set(e.id, e)), t.foliages.forEach(e => Or.set(e.id, e)), t.environments.forEach(e => Wr.set(e.id, e)), t.animations.forEach(e => Bb.set(e.id, e)), t.skins.forEach(e => jb.set(e.id, e)), t.skeletons.forEach(e => qb.set(e.id, e)), t.creatures.forEach(e => Nb.set(e.id, e)), t.creaturesMonster.forEach(e => Ob.set(e.id, e)), t.creaturesConjurer.forEach(e => Wb.set(e.id, e)), t.creaturesTrader.forEach(e => Gb.set(e.id, e)), t.traderShopItems.forEach(e => $b.set(e.id, e)), t.worlds.forEach(e => {
            Ya.set(e.id, e)
        }), t.quests.forEach(e => {
            Hb.set(e.id, e), jr.has(e.giver) || jr.set(e.giver, []), jr.get(e.giver).push(e), e.returner !== e.giver && (jr.has(e.returner) || jr.set(e.returner, []), jr.get(e.returner).push(e))
        });
        for (let e = 0; e < t.filesExt.length; ++e) Bn.push(t.filesExt[e]);
        for (let e = 0; e < t.minimap.length; ++e) Yb.push(t.minimap[e])
    };
    var D0 = (t, e) => {
        if (!qr.has(t)) return console.log("unknown file id: " + t), "";
        let o = qr.get(t);
        return `${t}.${e||Bn[o.ext]}`
    };
    var p = 0,
        T0 = {
            string: t => {
                let e = U0(t);
                return $t(e) + e
            },
            varuint: t => $t(t),
            varint: t => Qb(t),
            buffer8: t => {
                let e = t.length;
                return $t(e) + e
            },
            buffer16: (t, e) => {
                let o = t.length * 2,
                    r = $t(o);
                return (e + r) % 2 == 1 && r++, r + o
            }
        };
    var T = (t, e) => {
            if (e > t.length - p) throw new RangeError("length " + e + " exceeds buffer");
            return e
        },
        L = t => {
            let e = 0,
                o = 0,
                r = 0;
            do {
                if (p >= t.length) throw new RangeError("varuint exceeds buffer");
                r = t[p++], e |= (r & 127) << 7 * o, o++
            } while (r & 128);
            return e
        };
    var Po = (t, e) => {
            for (; e > 127;) t[p++] = e & 127 | 128, e >>= 7;
            t[p++] = e & 127
        },
        $t = t => t <= 0 ? 1 : Math.floor(Math.log(t) / Math.log(128)) + 1,
        Qb = t => $t(t << 1 ^ t >> 31),
        to = t => t[p] & 128 ? (255 - t[p] + 1) * -1 : t[p],
        Zb = (t, e) => {
            e < 0 && (e = 255 + e + 1), t[p] = e & 255, p += 1
        },
        j = t => t[p],
        co = (t, e) => {
            t[p] = e, p += 1
        },
        rs = t => {
            let e = t[p] | t[p + 1] << 8;
            return e & 32768 ? e | 4294901760 : e
        },
        Xa = (t, e) => {
            t[p] = e & 255, t[p + 1] = e >>> 8, p += 2
        },
        ve = t => t[p] | t[p + 1] << 8;
    var kt = t => (t[p] | t[p + 1] << 8 | t[p + 2] << 16) + t[p + 3] * 16777216,
        Qa = (t, e) => {
            t[p] = e & 255, t[p + 1] = e >>> 8, t[p + 2] = e >>> 16, t[p + 3] = e >>> 24, p += 4
        },
        Za = new ArrayBuffer(8),
        Eo = new Uint8Array(Za),
        V0 = new Float32Array(Za),
        KS = new Float64Array(Za),
        H = t => (Eo[0] = t[p], Eo[1] = t[p + 1], Eo[2] = t[p + 2], Eo[3] = t[p + 3], V0[0]),
        R0 = (t, e) => {
            V0[0] = e, t[p] = Eo[0], t[p + 1] = Eo[1], t[p + 2] = Eo[2], t[p + 3] = Eo[3], p += 4
        };
    var I0 = t => {
            let e = L(t);
            p % 2 == 1 && p++;
            let o = new Uint16Array(t.buffer, p, e / 2);
            return p += e, o
        },
        U0 = t => {
            let e = t.length;
            for (let o = t.length - 1; o >= 0; o--) {
                let r = t.charCodeAt(o);
                r > 127 && r <= 2047 ? e++ : r > 2047 && r <= 65535 && (e += 2), r >= 56320 && r <= 57343 && o--
            }
            return e
        },
        z0 = (t, e) => {
            let o = U0(e);
            Po(t, o);
            for (let r = 0; r < e.length; r++) {
                let n = e.charCodeAt(r);
                n < 128 ? t[p++] = n : n < 2048 ? (t[p++] = n >> 6 | 192, t[p++] = n & 63 | 128) : (n & 64512) == 55296 && r + 1 < e.length && (e.charCodeAt(r + 1) & 64512) == 56320 ? (n = 65536 + ((n & 1023) << 10) + (e.charCodeAt(++r) & 1023), t[p++] = n >> 18 | 240, t[p++] = n >> 12 & 63 | 128, t[p++] = n >> 6 & 63 | 128, t[p++] = n & 63 | 128) : (t[p++] = n >> 12 | 224, t[p++] = n >> 6 & 63 | 128, t[p++] = n & 63 | 128)
            }
        },
        mt = t => {
            let e = T(t, L(t)),
                o = "",
                r = p + e;
            for (; p < r;) {
                let n = t[p++];
                if (n < 128) o += String.fromCharCode(n);
                else if (n > 191 && n < 224) {
                    let i = t[p++];
                    o += String.fromCharCode((n & 31) << 6 | i & 63)
                } else if (n > 239 && n < 365) {
                    let i = t[p++],
                        s = t[p++],
                        a = t[p++],
                        c = ((n & 7) << 18 | (i & 63) << 12 | (s & 63) << 6 | a & 63) - 65536;
                    o += String.fromCharCode(55296 + (c >> 10)), o += String.fromCharCode(56320 + (c & 1023))
                } else {
                    let i = t[p++],
                        s = t[p++];
                    o += String.fromCharCode((n & 15) << 12 | (i & 63) << 6 | s & 63)
                }
            }
            return o
        },
        B0 = {
            encode: t => {
                let e = t,
                    o = e.doubles,
                    r = e.int8s,
                    n = e.uint16s,
                    i = e.uint8s,
                    s = 0;
                s += 1, s += $t(o.length);
                for (let c = 0; c < o.length; c++) s += 4;
                s += $t(r.length);
                for (let c = 0; c < r.length; c++) s += 1;
                s += $t(n.length);
                for (let c = 0; c < n.length; c++) s += 2;
                s += $t(i.length);
                for (let c = 0; c < i.length; c++) s += 1;
                let a = new Uint8Array(s);
                p = 0, co(a, e._header), Po(a, o.length);
                for (let c = 0; c < o.length; c++) R0(a, o[c]);
                Po(a, r.length);
                for (let c = 0; c < r.length; c++) Zb(a, r[c]);
                Po(a, n.length);
                for (let c = 0; c < n.length; c++) Xa(a, n[c]);
                Po(a, i.length);
                for (let c = 0; c < i.length; c++) co(a, i[c]);
                return a
            }
        },
        j0 = {
            encode: t => {
                let e = t,
                    o = 0;
                o += 1, o += 4;
                let r = new Uint8Array(o);
                return p = 0, co(r, e._header), Qa(r, e.target), r
            }
        },
        q0 = {
            encode: t => {
                let e = t,
                    o = e.info,
                    r = 0;
                r += 1, r += 2, r += $t(o.length);
                for (let i = 0; i < o.length; i++) r += 4;
                let n = new Uint8Array(r);
                p = 0, co(n, e._header), Xa(n, e.id), Po(n, o.length);
                for (let i = 0; i < o.length; i++) Qa(n, o[i]);
                return n
            }
        },
        N0 = {
            encode: t => {
                let e = t,
                    o = e.info,
                    r = e.pos,
                    n = 0;
                n += 1, n += 2, n += $t(o.length);
                for (let s = 0; s < o.length; s++) n += 4;
                n += $t(r.length);
                for (let s = 0; s < r.length; s++) n += 4;
                let i = new Uint8Array(n);
                p = 0, co(i, e._header), Xa(i, e.id), Po(i, o.length);
                for (let s = 0; s < o.length; s++) Qa(i, o[s]);
                Po(i, r.length);
                for (let s = 0; s < r.length; s++) R0(i, r[s]);
                return i
            }
        },
        O0 = {
            encode: t => {
                let e = t,
                    o = 0;
                o += 1, o += 1;
                let r = new Uint8Array(o);
                return p = 0, co(r, e._header), co(r, e.id), r
            }
        },
        W0 = {
            encode: t => {
                let e = t,
                    o = 0;
                o += 1, o += T0.string(e.command, o), o += T0.string(e.string, o);
                let r = new Uint8Array(o);
                return p = 0, co(r, e._header), z0(r, e.command), z0(r, e.string), r
            }
        },
        G0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0, o._header = j(e), p += 1;
                let r = [];
                o.inputs = r;
                let n = T(e, L(e));
                for (let u = 0; u < n; u++) {
                    let d = {};
                    r[u] = d, d.id = kt(e), p += 4, d.jump = j(e), p += 1, d.rot = H(e), p += 4, d.speed = ve(e), p += 2;
                    let m = [];
                    d.steer = m, m[0] = to(e), p += 1;
                    let h = T(e, L(e));
                    for (let g = 1; g < h; g++) m[g] = to(e), p += 1
                }
                let i = [];
                o.log = i;
                let s = T(e, L(e));
                for (let u = 0; u < s; u++) {
                    let d = {};
                    i[u] = d;
                    let m = [];
                    d.data = m;
                    let h = T(e, L(e));
                    for (let g = 0; g < h; g++) m[g] = L(e);
                    d.type = j(e), p += 1
                }
                let a = [];
                o.logPersonal = a;
                let c = T(e, L(e));
                for (let u = 0; u < c; u++) {
                    let d = {};
                    a[u] = d;
                    let m = [];
                    d.data = m;
                    let h = T(e, L(e));
                    for (let g = 0; g < h; g++) m[g] = L(e);
                    d.type = j(e), p += 1
                }
                let l = [];
                o.movements = l;
                let f = T(e, L(e));
                for (let u = 0; u < f; u++) {
                    let d = {};
                    l[u] = d, d.id = kt(e), p += 4;
                    let m = [];
                    d.pos = m, m[0] = H(e), p += 4, m[1] = H(e), p += 4;
                    let h = T(e, L(e));
                    for (let x = 2; x < h; x++) m[x] = H(e), p += 4;
                    let g = [];
                    d.vel = g, g[0] = H(e), p += 4, g[1] = H(e), p += 4;
                    let M = T(e, L(e));
                    for (let x = 2; x < M; x++) g[x] = H(e), p += 4
                }
                return o.tickId = kt(e), p += 4, o
            }
        },
        $0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0, o._header = j(e), p += 1;
                let r = [];
                o.members = r;
                let n = T(e, L(e));
                for (let a = 0; a < n; a++) {
                    let c = {};
                    r[a] = c, c.class = j(e), p += 1, c.entityid = kt(e), p += 4, c.level = j(e), p += 1, c.name = mt(e), c.role = ve(e), p += 2, c.world = mt(e)
                }
                let i = [];
                o.queues = i;
                let s = T(e, L(e));
                for (let a = 0; a < s; a++) i[a] = mt(e);
                return o
            }
        },
        H0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0, o._header = j(e), p += 1, o.contrib = L(e);
                let r = [];
                o.contributors = r;
                let n = T(e, L(e));
                for (let a = 0; a < n; a++) {
                    let c = {};
                    r[a] = c, c.class = j(e), p += 1, c.faction = j(e), p += 1, c.level = j(e), p += 1, c.name = mt(e);
                    let l = [];
                    c.stats = l;
                    let f = T(e, L(e));
                    for (let u = 0; u < f; u++) l[u] = L(e)
                }
                o.duration = L(e);
                let i = [];
                o.kills = i, i[0] = L(e);
                let s = T(e, L(e));
                for (let a = 1; a < s; a++) i[a] = L(e);
                return o.level = L(e), o.reward = L(e), o.status = j(e), p += 1, o
            }
        },
        Y0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0, o._header = j(e), p += 1;
                let r = [];
                o.members = r;
                let n = T(e, L(e));
                for (let i = 0; i < n; i++) {
                    let s = {};
                    r[i] = s, s.entityid = kt(e), p += 4;
                    let a = [];
                    s.pos = a;
                    let c = T(e, L(e));
                    for (let l = 0; l < c; l++) a[l] = ve(e), p += 2
                }
                return o
            }
        },
        X0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0, o._header = j(e), p += 1;
                let r = [];
                o.icons = r;
                let n = T(e, L(e));
                for (let i = 0; i < n; i++) {
                    let s = {};
                    r[i] = s, s.blink = !!to(e), p += 1, s.id = ve(e), p += 2;
                    let a = [];
                    s.pos = a, a[0] = ve(e), p += 2;
                    let c = T(e, L(e));
                    for (let l = 1; l < c; l++) a[l] = ve(e), p += 2
                }
                return o
            }
        },
        Q0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0, o._header = j(e), p += 1, o.channel = mt(e), o.clan = mt(e), o.class = j(e), p += 1, o.faction = j(e), p += 1, o.from = mt(e), o.id = kt(e), p += 4;
                let r = [];
                o.items = r;
                let n = T(e, L(e));
                for (let i = 0; i < n; i++) {
                    let s = {};
                    r[i] = s, s.id = kt(e), p += 4, s.index = ve(e), p += 2;
                    let a = [];
                    s.rolls = a;
                    let c = T(e, L(e));
                    for (let l = 0; l < c; l++) a[l] = ve(e), p += 2;
                    s.stacks = j(e), p += 1, s.tier = ve(e), p += 2, s.type = mt(e), s.upgrade = ve(e), p += 2
                }
                return o.level = j(e), p += 1, o.message = mt(e), o.subscribed = j(e), p += 1, o
            }
        },
        Z0 = {
            decode: t => {
                let e = t,
                    o = {};
                return p = 0, o._header = j(e), p += 1, o.world = mt(e), o
            }
        },
        K0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0, o._header = j(e), p += 1;
                let r = [];
                o.messages = r;
                let n = T(e, L(e));
                for (let i = 0; i < n; i++) {
                    let s = {};
                    r[i] = s, s.message = mt(e), s.type = mt(e)
                }
                return o
            }
        },
        J0 = {
            decode: t => {
                let e = t,
                    o = {};
                return p = 0, o._header = j(e), p += 1, o.file = mt(e), o.playerId = kt(e), p += 4, o.tickId = kt(e), p += 4, o.world = mt(e), o
            }
        },
        ep = {
            decode: t => {
                let e = t,
                    o = {};
                return p = 0, o._header = j(e), p += 1, o.pos = ve(e), p += 2, o
            }
        },
        tp = {
            decode: t => {
                let e = t,
                    o = {};
                return p = 0, o._header = j(e), p += 1, o.id = j(e), p += 1, o
            },
            encode: t => {
                let e = t,
                    o = 0;
                o += 1, o += 1;
                let r = new Uint8Array(o);
                return p = 0, co(r, e._header), co(r, e.id), r
            }
        };
    var op = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0;
                let r = [];
                o.aabb = r;
                let n = T(e, L(e));
                for (let D = 0; D < n; D++) r[D] = H(e), p += 4;
                let i = [];
                o.area = i;
                let s = T(e, L(e));
                for (let D = 0; D < s; D++) i[D] = ve(e), p += 2;
                let a = [];
                o.environment = a;
                let c = T(e, L(e));
                for (let D = 0; D < c; D++) a[D] = ve(e), p += 2;
                let l = [];
                o.holes = l;
                let f = T(e, L(e));
                for (let D = 0; D < f; D++) l[D] = ve(e), p += 2;
                let u = [];
                o.props = u;
                let d = T(e, L(e));
                for (let D = 0; D < d; D++) {
                    let V = {};
                    u[D] = V, V.id = kt(e), p += 4, V.rx = rs(e), p += 2, V.ry = rs(e), p += 2, V.rz = rs(e), p += 2, V.scale = ve(e), p += 2, V.x = ve(e), p += 2, V.y = kt(e), p += 4, V.z = ve(e), p += 2
                }
                let m = [];
                o.shore = m;
                let h = T(e, L(e));
                for (let D = 0; D < h; D++) m[D] = ve(e), p += 2;
                o.terrain = I0(e);
                let g = [];
                o.texture = g;
                let M = T(e, L(e));
                for (let D = 0; D < M; D++) g[D] = I0(e);
                let x = [];
                o.textureid = x;
                let w = T(e, L(e));
                for (let D = 0; D < w; D++) {
                    let V = [];
                    x[D] = V;
                    let fe = T(e, L(e));
                    for (let N = 0; N < fe; N++) V[N] = ve(e), p += 2
                }
                let k = [];
                o.water = k;
                let U = T(e, L(e));
                for (let D = 0; D < U; D++) k[D] = ve(e), p += 2;
                return o
            }
        },
        rp = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0;
                let r = [];
                o.color = r;
                let n = T(e, L(e));
                for (let x = 0; x < n; x++) r[x] = j(e), p += 1;
                let i = [];
                o.flags = i;
                let s = T(e, L(e));
                for (let x = 0; x < s; x++) i[x] = j(e), p += 1;
                let a = [];
                o.index = a;
                let c = T(e, L(e));
                for (let x = 0; x < c; x++) a[x] = L(e);
                let l = [];
                o.indexInvisible = l;
                let f = T(e, L(e));
                for (let x = 0; x < f; x++) l[x] = L(e);
                let u = [];
                o.normal = u;
                let d = T(e, L(e));
                for (let x = 0; x < d; x++) u[x] = to(e), p += 1;
                let m = [];
                o.position = m;
                let h = T(e, L(e));
                for (let x = 0; x < h; x++) m[x] = rs(e), p += 2;
                o.sx = kt(e), p += 4, o.sy = kt(e), p += 4, o.sz = kt(e), p += 4;
                let g = [];
                o.uv = g;
                let M = T(e, L(e));
                for (let x = 0; x < M; x++) g[x] = ve(e), p += 2;
                return o
            }
        },
        np = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0;
                let r = [];
                o.animations = r;
                let n = T(e, L(e));
                for (let q = 0; q < n; q++) {
                    let _ = {};
                    r[q] = _, _.duration = H(e), p += 4;
                    let ie = [];
                    _.effects = ie;
                    let Se = T(e, L(e));
                    for (let ue = 0; ue < Se; ue++) {
                        let we = {};
                        ie[ue] = we, we.body = j(e), p += 1, we.end = H(e), p += 4, we.id = j(e), p += 1, we.priority = j(e), p += 1, we.start = H(e), p += 4, we.type = j(e), p += 1
                    }
                    _.id = j(e), p += 1, _.movement = j(e), p += 1, _.priority = j(e), p += 1;
                    let oe = [];
                    _.sounds = oe;
                    let me = T(e, L(e));
                    for (let ue = 0; ue < me; ue++) {
                        let we = {};
                        oe[ue] = we, we.end = j(e), p += 1, we.id = j(e), p += 1, we.start = H(e), p += 4
                    }
                }
                let i = [];
                o.areas = i;
                let s = T(e, L(e));
                for (let q = 0; q < s; q++) {
                    let _ = {};
                    i[q] = _, _.ambientday = j(e), p += 1, _.ambientnight = j(e), p += 1, _.id = j(e), p += 1, _.music = j(e), p += 1, _.name = mt(e)
                }
                let a = [];
                o.arenas = a;
                let c = T(e, L(e));
                for (let q = 0; q < c; q++) {
                    let _ = {};
                    a[q] = _, _.group = j(e), p += 1, _.id = j(e), p += 1;
                    let ie = [];
                    _.pos = ie;
                    let Se = T(e, L(e));
                    for (let oe = 0; oe < Se; oe++) ie[oe] = H(e), p += 4;
                    _.radius = j(e), p += 1, _.rot = H(e), p += 4, _.type = j(e), p += 1, _.world = j(e), p += 1
                }
                let l = [];
                o.classes = l;
                let f = T(e, L(e));
                for (let q = 0; q < f; q++) {
                    let _ = {};
                    l[q] = _;
                    let ie = [];
                    _.baseStats = ie;
                    let Se = T(e, L(e));
                    for (let de = 0; de < Se; de++) {
                        let rt = [];
                        ie[de] = rt;
                        let be = T(e, L(e));
                        for (let vt = 0; vt < be; vt++) rt[vt] = j(e), p += 1
                    }
                    let oe = [];
                    _.engineSkills = oe;
                    let me = T(e, L(e));
                    for (let de = 0; de < me; de++) oe[de] = j(e), p += 1;
                    _.id = j(e), p += 1;
                    let ue = [];
                    _.startSkills = ue;
                    let we = T(e, L(e));
                    for (let de = 0; de < we; de++) ue[de] = j(e), p += 1;
                    let Pe = [];
                    _.statPerLevel = Pe;
                    let St = T(e, L(e));
                    for (let de = 0; de < St; de++) {
                        let rt = [];
                        Pe[de] = rt;
                        let be = T(e, L(e));
                        for (let vt = 0; vt < be; vt++) rt[vt] = j(e), p += 1
                    }
                }
                let u = [];
                o.creatures = u;
                let d = T(e, L(e));
                for (let q = 0; q < d; q++) {
                    let _ = {};
                    u[q] = _;
                    let ie = [];
                    _.col1 = ie;
                    let Se = T(e, L(e));
                    for (let ue = 0; ue < Se; ue++) ie[ue] = H(e), p += 4;
                    let oe = [];
                    _.col2 = oe;
                    let me = T(e, L(e));
                    for (let ue = 0; ue < me; ue++) oe[ue] = H(e), p += 4;
                    _.drProtection = !!to(e), p += 1, _.faction = j(e), p += 1, _.id = ve(e), p += 2, _.level = j(e), p += 1, _.name = mt(e), _.skin = j(e), p += 1, _.type = j(e), p += 1
                }
                let m = [];
                o.creaturesConjurer = m;
                let h = T(e, L(e));
                for (let q = 0; q < h; q++) {
                    let _ = {};
                    m[q] = _, _.id = ve(e), p += 2, _.war = !!to(e), p += 1
                }
                let g = [];
                o.creaturesMonster = g;
                let M = T(e, L(e));
                for (let q = 0; q < M; q++) {
                    let _ = {};
                    g[q] = _, _.aggroMode = j(e), p += 1, _.id = ve(e), p += 2, _.rarity = j(e), p += 1
                }
                let x = [];
                o.creaturesTrader = x;
                let w = T(e, L(e));
                for (let q = 0; q < w; q++) {
                    let _ = {};
                    x[q] = _, _.id = ve(e), p += 2, _.shop = j(e), p += 1
                }
                let k = [];
                o.effects = k;
                let U = T(e, L(e));
                for (let q = 0; q < U; q++) {
                    let _ = {};
                    k[q] = _, _.duration = H(e), p += 4;
                    let ie = [];
                    _.events = ie;
                    let Se = T(e, L(e));
                    for (let ue = 0; ue < Se; ue++) {
                        let we = {};
                        ie[ue] = we, we.fraction = H(e), p += 4, we.id = j(e), p += 1;
                        let Pe = [];
                        we.params = Pe;
                        let St = T(e, L(e));
                        for (let de = 0; de < St; de++) Pe[de] = H(e), p += 4
                    }
                    _.id = j(e), p += 1;
                    let oe = [];
                    _.periods = oe;
                    let me = T(e, L(e));
                    for (let ue = 0; ue < me; ue++) {
                        let we = {};
                        oe[ue] = we, we.fractionEnd = H(e), p += 4, we.fractionStart = H(e), p += 4, we.id = j(e), p += 1;
                        let Pe = [];
                        we.modifiers = Pe;
                        let St = T(e, L(e));
                        for (let be = 0; be < St; be++) {
                            let vt = {};
                            Pe[be] = vt, vt.id = j(e), p += 1, vt.mode = j(e), p += 1;
                            let Xt = [];
                            vt.params = Xt;
                            let Oo = T(e, L(e));
                            for (let _e = 0; _e < Oo; _e++) Xt[_e] = H(e), p += 4
                        }
                        let de = [];
                        we.params = de;
                        let rt = T(e, L(e));
                        for (let be = 0; be < rt; be++) de[be] = H(e), p += 4
                    }
                }
                let D = [];
                o.environments = D;
                let V = T(e, L(e));
                for (let q = 0; q < V; q++) {
                    let _ = {};
                    D[q] = _;
                    let ie = [];
                    _.ambient = ie;
                    let Se = T(e, L(e));
                    for (let ge = 0; ge < Se; ge++) {
                        let Ie = [];
                        ie[ge] = Ie;
                        let Ee = T(e, L(e));
                        for (let Fe = 0; Fe < Ee; Fe++) Ie[Fe] = H(e), p += 4
                    }
                    let oe = [];
                    _.bloom = oe;
                    let me = T(e, L(e));
                    for (let ge = 0; ge < me; ge++) oe[ge] = H(e), p += 4;
                    let ue = [];
                    _.clouds = ue;
                    let we = T(e, L(e));
                    for (let ge = 0; ge < we; ge++) {
                        let Ie = [];
                        ue[ge] = Ie;
                        let Ee = T(e, L(e));
                        for (let Fe = 0; Fe < Ee; Fe++) Ie[Fe] = H(e), p += 4
                    }
                    let Pe = [];
                    _.direct = Pe;
                    let St = T(e, L(e));
                    for (let ge = 0; ge < St; ge++) {
                        let Ie = [];
                        Pe[ge] = Ie;
                        let Ee = T(e, L(e));
                        for (let Fe = 0; Fe < Ee; Fe++) Ie[Fe] = H(e), p += 4
                    }
                    let de = [];
                    _.fog = de;
                    let rt = T(e, L(e));
                    for (let ge = 0; ge < rt; ge++) {
                        let Ie = [];
                        de[ge] = Ie;
                        let Ee = T(e, L(e));
                        for (let Fe = 0; Fe < Ee; Fe++) Ie[Fe] = H(e), p += 4
                    }
                    let be = [];
                    _.horizon = be;
                    let vt = T(e, L(e));
                    for (let ge = 0; ge < vt; ge++) {
                        let Ie = [];
                        be[ge] = Ie;
                        let Ee = T(e, L(e));
                        for (let Fe = 0; Fe < Ee; Fe++) Ie[Fe] = H(e), p += 4
                    }
                    _.id = j(e), p += 1;
                    let Xt = [];
                    _.skybot = Xt;
                    let Oo = T(e, L(e));
                    for (let ge = 0; ge < Oo; ge++) {
                        let Ie = [];
                        Xt[ge] = Ie;
                        let Ee = T(e, L(e));
                        for (let Fe = 0; Fe < Ee; Fe++) Ie[Fe] = H(e), p += 4
                    }
                    let _e = [];
                    _.skymid = _e;
                    let lt = T(e, L(e));
                    for (let ge = 0; ge < lt; ge++) {
                        let Ie = [];
                        _e[ge] = Ie;
                        let Ee = T(e, L(e));
                        for (let Fe = 0; Fe < Ee; Fe++) Ie[Fe] = H(e), p += 4
                    }
                    let Wo = [];
                    _.skytop = Wo;
                    let Go = T(e, L(e));
                    for (let ge = 0; ge < Go; ge++) {
                        let Ie = [];
                        Wo[ge] = Ie;
                        let Ee = T(e, L(e));
                        for (let Fe = 0; Fe < Ee; Fe++) Ie[Fe] = H(e), p += 4
                    }
                    let mn = [];
                    _.sun = mn;
                    let pa = T(e, L(e));
                    for (let ge = 0; ge < pa; ge++) {
                        let Ie = [];
                        mn[ge] = Ie;
                        let Ee = T(e, L(e));
                        for (let Fe = 0; Fe < Ee; Fe++) Ie[Fe] = H(e), p += 4
                    }
                    let pn = [];
                    _.water = pn;
                    let ha = T(e, L(e));
                    for (let ge = 0; ge < ha; ge++) {
                        let Ie = [];
                        pn[ge] = Ie;
                        let Ee = T(e, L(e));
                        for (let Fe = 0; Fe < Ee; Fe++) Ie[Fe] = H(e), p += 4
                    }
                }
                let fe = [];
                o.files = fe;
                let N = T(e, L(e));
                for (let q = 0; q < N; q++) {
                    let _ = {};
                    fe[q] = _, _.ext = j(e), p += 1, _.id = ve(e), p += 2, _.type = j(e), p += 1
                }
                let O = [];
                o.filesExt = O;
                let ne = T(e, L(e));
                for (let q = 0; q < ne; q++) O[q] = mt(e);
                let J = [];
                o.foliages = J;
                let re = T(e, L(e));
                for (let q = 0; q < re; q++) {
                    let _ = {};
                    J[q] = _, _.id = j(e), p += 1;
                    let ie = [];
                    _.nodes = ie;
                    let Se = T(e, L(e));
                    for (let oe = 0; oe < Se; oe++) {
                        let me = {};
                        ie[oe] = me, me.arc = H(e), p += 4;
                        let ue = [];
                        me.end = ue;
                        let we = T(e, L(e));
                        for (let be = 0; be < we; be++) ue[be] = H(e), p += 4;
                        me.geotype = j(e), p += 1, me.jitter_radius = H(e), p += 4, me.jitter_rotation = H(e), p += 4, me.jitter_size = H(e), p += 4, me.jitter_slant = H(e), p += 4, me.jitter_y = H(e), p += 4, me.leafCount = j(e), p += 1;
                        let Pe = [];
                        me.points = Pe;
                        let St = T(e, L(e));
                        for (let be = 0; be < St; be++) Pe[be] = H(e), p += 4;
                        me.radius = H(e), p += 4, me.size = H(e), p += 4, me.slant = H(e), p += 4;
                        let de = [];
                        me.start = de;
                        let rt = T(e, L(e));
                        for (let be = 0; be < rt; be++) de[be] = H(e), p += 4;
                        me.y = H(e), p += 4
                    }
                    _.seed = kt(e), p += 4, _.texture = ve(e), p += 2, _.type = j(e), p += 1
                }
                let P = [];
                o.meshes = P;
                let G = T(e, L(e));
                for (let q = 0; q < G; q++) {
                    let _ = {};
                    P[q] = _, _.cull = j(e), p += 1;
                    let ie = [];
                    _.effects = ie;
                    let Se = T(e, L(e));
                    for (let oe = 0; oe < Se; oe++) {
                        let me = {};
                        ie[oe] = me, me.id = j(e), p += 1;
                        let ue = [];
                        me.pos = ue;
                        let we = T(e, L(e));
                        for (let be = 0; be < we; be++) ue[be] = H(e), p += 4;
                        let Pe = [];
                        me.rot = Pe;
                        let St = T(e, L(e));
                        for (let be = 0; be < St; be++) Pe[be] = H(e), p += 4;
                        let de = [];
                        me.scale = de;
                        let rt = T(e, L(e));
                        for (let be = 0; be < rt; be++) de[be] = H(e), p += 4
                    }
                    _.geometry = ve(e), p += 2, _.id = ve(e), p += 2, _.shader = j(e), p += 1, _.shadow = j(e), p += 1, _.texture = ve(e), p += 2
                }
                let A = [];
                o.minimap = A;
                let te = T(e, L(e));
                for (let q = 0; q < te; q++) {
                    let _ = {};
                    A[q] = _, _.img = ve(e), p += 2;
                    let ie = [];
                    _.pos = ie;
                    let Se = T(e, L(e));
                    for (let oe = 0; oe < Se; oe++) ie[oe] = ve(e), p += 2;
                    _.world = j(e), p += 1
                }
                let ce = [];
                o.particles = ce;
                let ke = T(e, L(e));
                for (let q = 0; q < ke; q++) {
                    let _ = {};
                    ce[q] = _;
                    let ie = [];
                    _.acc = ie;
                    let Se = T(e, L(e));
                    for (let Pe = 0; Pe < Se; Pe++) ie[Pe] = H(e), p += 4;
                    _.blend = j(e), p += 1;
                    let oe = [];
                    _.colEnd = oe;
                    let me = T(e, L(e));
                    for (let Pe = 0; Pe < me; Pe++) oe[Pe] = H(e), p += 4;
                    let ue = [];
                    _.colStart = ue;
                    let we = T(e, L(e));
                    for (let Pe = 0; Pe < we; Pe++) ue[Pe] = H(e), p += 4;
                    _.duration = H(e), p += 4, _.friction = H(e), p += 4, _.id = j(e), p += 1, _.idEnd = j(e), p += 1, _.idLoop = j(e), p += 1, _.idStart = j(e), p += 1, _.interp = j(e), p += 1, _.randomRota = H(e), p += 4, _.rota = H(e), p += 4, _.rotaEnd = H(e), p += 4, _.scaleEnd = H(e), p += 4, _.scaleStart = H(e), p += 4
                }
                let Re = [];
                o.quests = Re;
                let Ce = T(e, L(e));
                for (let q = 0; q < Ce; q++) {
                    let _ = {};
                    Re[q] = _, _.faction = j(e), p += 1, _.giver = ve(e), p += 2;
                    let ie = [];
                    _.giverPos = ie;
                    let Se = T(e, L(e));
                    for (let de = 0; de < Se; de++) ie[de] = H(e), p += 4;
                    _.giverWorld = j(e), p += 1, _.id = ve(e), p += 2, _.minlevel = j(e), p += 1;
                    let oe = [];
                    _.objectives = oe;
                    let me = T(e, L(e));
                    for (let de = 0; de < me; de++) {
                        let rt = {};
                        oe[de] = rt, rt.amount = ve(e), p += 2;
                        let be = [];
                        rt.polygon = be;
                        let vt = T(e, L(e));
                        for (let _e = 0; _e < vt; _e++) {
                            let lt = [];
                            be[_e] = lt;
                            let Wo = T(e, L(e));
                            for (let Go = 0; Go < Wo; Go++) lt[Go] = H(e), p += 4
                        }
                        let Xt = [];
                        rt.pos = Xt;
                        let Oo = T(e, L(e));
                        for (let _e = 0; _e < Oo; _e++) Xt[_e] = H(e), p += 4;
                        rt.target = ve(e), p += 2, rt.type = j(e), p += 1, rt.world = j(e), p += 1
                    }
                    let ue = [];
                    _.prerequisites = ue;
                    let we = T(e, L(e));
                    for (let de = 0; de < we; de++) ue[de] = ve(e), p += 2;
                    _.returner = ve(e), p += 2, _.returnerCreature = ve(e), p += 2;
                    let Pe = [];
                    _.returnerPos = Pe;
                    let St = T(e, L(e));
                    for (let de = 0; de < St; de++) Pe[de] = H(e), p += 4;
                    _.returnerWorld = j(e), p += 1, _.rewardExp = kt(e), p += 4, _.rewardGold = kt(e), p += 4
                }
                let Ae = [];
                o.ribbons = Ae;
                let at = T(e, L(e));
                for (let q = 0; q < at; q++) {
                    let _ = {};
                    Ae[q] = _;
                    let ie = [];
                    _.colEnd = ie;
                    let Se = T(e, L(e));
                    for (let ue = 0; ue < Se; ue++) ie[ue] = H(e), p += 4;
                    let oe = [];
                    _.colStart = oe;
                    let me = T(e, L(e));
                    for (let ue = 0; ue < me; ue++) oe[ue] = H(e), p += 4;
                    _.id = j(e), p += 1, _.interval = H(e), p += 4, _.steps = j(e), p += 1, _.texture = ve(e), p += 2
                }
                let Ze = [];
                o.skeletons = Ze;
                let zt = T(e, L(e));
                for (let q = 0; q < zt; q++) {
                    let _ = {};
                    Ze[q] = _, _.cape = !!to(e), p += 1, _.groundNormal = !!to(e), p += 1, _.height = H(e), p += 4, _.helmet = !!to(e), p += 1, _.id = j(e), p += 1, _.shoulders = !!to(e), p += 1
                }
                let Oe = [];
                o.skins = Oe;
                let Y = T(e, L(e));
                for (let q = 0; q < Y; q++) {
                    let _ = {};
                    Oe[q] = _, _.animset = j(e), p += 1;
                    let ie = [];
                    _.body = ie;
                    let Se = T(e, L(e));
                    for (let _e = 0; _e < Se; _e++) {
                        let lt = {};
                        ie[_e] = lt, lt.bid = j(e), p += 1;
                        let Wo = [];
                        lt.col = Wo;
                        let Go = T(e, L(e));
                        for (let Ee = 0; Ee < Go; Ee++) Wo[Ee] = H(e), p += 4;
                        lt.colMode = j(e), p += 1, lt.lod = j(e), p += 1, lt.mid = ve(e), p += 2, lt.pid = to(e), p += 1;
                        let mn = [];
                        lt.pos = mn;
                        let pa = T(e, L(e));
                        for (let Ee = 0; Ee < pa; Ee++) mn[Ee] = H(e), p += 4;
                        let pn = [];
                        lt.rot = pn;
                        let ha = T(e, L(e));
                        for (let Ee = 0; Ee < ha; Ee++) pn[Ee] = H(e), p += 4;
                        let ge = [];
                        lt.scl = ge;
                        let Ie = T(e, L(e));
                        for (let Ee = 0; Ee < Ie; Ee++) ge[Ee] = H(e), p += 4;
                        lt.ts = j(e), p += 1
                    }
                    _.capeswing = j(e), p += 1;
                    let oe = [];
                    _.colPrim = oe;
                    let me = T(e, L(e));
                    for (let _e = 0; _e < me; _e++) oe[_e] = H(e), p += 4;
                    let ue = [];
                    _.colSec = ue;
                    let we = T(e, L(e));
                    for (let _e = 0; _e < we; _e++) ue[_e] = H(e), p += 4;
                    let Pe = [];
                    _.effects = Pe;
                    let St = T(e, L(e));
                    for (let _e = 0; _e < St; _e++) {
                        let lt = {};
                        Pe[_e] = lt, lt.bid = j(e), p += 1, lt.id = j(e), p += 1
                    }
                    _.id = j(e), p += 1, _.mountPart = j(e), p += 1;
                    let de = [];
                    _.mountPos = de;
                    let rt = T(e, L(e));
                    for (let _e = 0; _e < rt; _e++) de[_e] = H(e), p += 4;
                    let be = [];
                    _.sheathedPos = be;
                    let vt = T(e, L(e));
                    for (let _e = 0; _e < vt; _e++) be[_e] = H(e), p += 4;
                    _.size = H(e), p += 4, _.skeleton = j(e), p += 1, _.soundset = j(e), p += 1;
                    let Xt = [];
                    _.unsheathedPos = Xt;
                    let Oo = T(e, L(e));
                    for (let _e = 0; _e < Oo; _e++) Xt[_e] = H(e), p += 4
                }
                let Te = [];
                o.sounds = Te;
                let ot = T(e, L(e));
                for (let q = 0; q < ot; q++) {
                    let _ = {};
                    Te[q] = _, _.distance = H(e), p += 4;
                    let ie = [];
                    _.files = ie;
                    let Se = T(e, L(e));
                    for (let oe = 0; oe < Se; oe++) ie[oe] = ve(e), p += 2;
                    _.id = j(e), p += 1
                }
                let et = [];
                o.soundsetSteps = et;
                let ct = T(e, L(e));
                for (let q = 0; q < ct; q++) {
                    let _ = {};
                    et[q] = _, _.id = j(e), p += 1;
                    let ie = [];
                    _.steps = ie;
                    let Se = T(e, L(e));
                    for (let oe = 0; oe < Se; oe++) ie[oe] = j(e), p += 1
                }
                let ze = [];
                o.soundsets = ze;
                let Ke = T(e, L(e));
                for (let q = 0; q < Ke; q++) {
                    let _ = {};
                    ze[q] = _, _.id = j(e), p += 1;
                    let ie = [];
                    _.sounds = ie;
                    let Se = T(e, L(e));
                    for (let oe = 0; oe < Se; oe++) ie[oe] = j(e), p += 1;
                    _.steps = j(e), p += 1
                }
                let Vt = [];
                o.terrains = Vt;
                let We = T(e, L(e));
                for (let q = 0; q < We; q++) {
                    let _ = {};
                    Vt[q] = _, _.brightest = j(e), p += 1, _.darkest = j(e), p += 1;
                    let ie = [];
                    _.foliage = ie;
                    let Se = T(e, L(e));
                    for (let oe = 0; oe < Se; oe++) {
                        let me = [];
                        ie[oe] = me;
                        let ue = T(e, L(e));
                        for (let we = 0; we < ue; we++) me[we] = j(e), p += 1
                    }
                    _.id = j(e), p += 1, _.scale = j(e), p += 1, _.spec = j(e), p += 1, _.texture = ve(e), p += 2
                }
                let mo = [];
                o.traderShopItems = mo;
                let E = T(e, L(e));
                for (let q = 0; q < E; q++) {
                    let _ = {};
                    mo[q] = _, _.bind = j(e), p += 1, _.id = j(e), p += 1;
                    let ie = [];
                    _.itemCost = ie;
                    let Se = T(e, L(e));
                    for (let oe = 0; oe < Se; oe++) {
                        let me = {};
                        ie[oe] = me, me.stacks = ve(e), p += 2, me.tier = ve(e), p += 2, me.type = mt(e)
                    }
                    _.shop = j(e), p += 1, _.stacks = j(e), p += 1, _.tier = ve(e), p += 2, _.type = mt(e), _.upgrade = j(e), p += 1
                }
                let ee = [];
                o.worlds = ee;
                let $ = T(e, L(e));
                for (let q = 0; q < $; q++) {
                    let _ = {};
                    ee[q] = _, _.chunkAmount = j(e), p += 1, _.id = j(e), p += 1, _.minlevel = j(e), p += 1, _.music = j(e), p += 1, _.name = mt(e)
                }
                return o
            }
        };
    var jn = {
            clientPlayerInput: B0,
            clientPlayerChangeTarget: j0,
            clientPlayerSkill: q0,
            clientPlayerEnvSkill: N0,
            clientPlayerInteract: O0,
            clientCommand: W0,
            serverOnClientConnect: J0,
            serverEntityDelta: G0,
            serverPartyUpdate: $0,
            serverWarUpdate: H0,
            serverPartyPositions: Y0,
            serverChangeWorld: Z0,
            serverMapUpdate: X0,
            serverChat: Q0,
            serverSystemMessage: K0,
            serverQueue: ep,
            ping: tp
        },
        Gr = {
            chunk: op,
            gamedata: np,
            modelformat: rp
        },
        Jb = [],
        ew = 0;
    for (let t in jn) jn[t] && (jn[t].header = ew++, jn[t].packData = function(e) {
        return e._header = this.header, this.encode(e)
    }, Jb.push(jn[t]));
    var tw = 127,
        ow = 254,
        Ka = 2 ** 15 - 1,
        rw = 2 ** 16 - 1,
        Ja = 2 ** 32 - 1;
    var ip = t => {
        let e = Gr.modelformat.decode(t),
            o = Ka / (Ja / e.sx),
            r = Ka / (Ja / e.sy),
            n = Ka / (Ja / e.sz);
        for (let i = 0; i < e.position.length; i += 3) e.position[i + 0] = e.position[i + 0] / o, e.position[i + 1] = e.position[i + 1] / r, e.position[i + 2] = e.position[i + 2] / n;
        for (let i = 0; i < e.uv.length; ++i) e.uv[i] /= rw;
        for (let i = 0; i < e.color.length; ++i) e.color[i] /= ow;
        for (let i = 0, s = e.normal.length; i < s; i++) e.normal[i] = e.normal[i] / tw;
        return e
    };
    var ec = async (t, e, o, r, n, i = 3) => {
        switch (e.split(".").pop()) {
            case "jpg":
            case "png":
            case "avif":
            case "webp": {
                let s = new Image;
                s.onload = () => {
                    o[e] = r(s), n(o[e], t + e), s.onload = void 0
                }, s.src = t + e + "?v=8926940";
                break
            }
            default: {
                fetch(t + e + "?v=8926940").then(s => {
                    if (!s.ok) throw new Error;
                    s.arrayBuffer().then(async a => {
                        o[e] = await r(a), n(o[e], t + e)
                    })
                }).catch(s => {
                    console.log(e + " fetch failed"), i > 1 && ec(t, e, o, r, n, --i)
                });
                break
            }
        }
    };
    var nr = {},
        iw = (t, e) => {
            for (let o = 0, r = nr[e].length; o < r; ++o) nr[e][o](...t);
            nr[e] = void 0
        },
        qn = async (t, e, o, r, n) => {
            o[e] ? n(...o[e]) : nr[t + e] ? nr[t + e].push(n) : (nr[t + e] = [], nr[t + e].push(n), ec(t, e, o, r, iw))
        }, sw = t => {
            let e = ip(new Uint8Array(t));
            return [{
                index: {
                    type: 5125,
                    data: new Uint32Array(e.index)
                },
                position: {
                    size: 3,
                    data: new Float32Array(e.position)
                },
                normal: {
                    size: 3,
                    data: new Float32Array(e.normal)
                },
                uv: {
                    size: 2,
                    data: new Float32Array(e.uv)
                },
                color: {
                    size: 4,
                    data: new Float32Array(e.color)
                }
            }, e]
        }, aw = {}, Lo = (t, e) => loadMeshGeometry(t, e);
    var On, Nn, sp = () => {
            On = Bt(dt({
                position: {
                    size: 2,
                    data: new Float32Array([-1, -1, 3, -1, -1, 3])
                },
                uv: {
                    size: 2,
                    data: new Float32Array([0, 0, 2, 0, 0, 2])
                }
            }), 0, v.TRIANGLES), fetch("/data/items/atlas.json?v=8926940").then(async t => {
                Nn = await t.json();
                for (let e in Nn) e != "s" && (Nn[e] = Nn[e].map(o => o / Nn.s))
            })
        },
        cw = t => {
            let e = So({
                image: t,
                wrapS: v.REPEAT,
                wrapT: v.REPEAT,
                minFilter: v.LINEAR_MIPMAP_LINEAR,
                anisotropy: 2 ** Ve.anisotropy
            });
            return Gt(e), [e]
        },
        lw = t => {
            let e = Jd(t),
                o = So({
                    buffer: e,
                    minFilter: v.LINEAR_MIPMAP_LINEAR,
                    wrapS: v.REPEAT,
                    wrapT: v.REPEAT,
                    width: e.width,
                    height: e.height,
                    anisotropy: 2 ** Ve.anisotropy,
                    format: e.internalFormat,
                    internalFormat: e.internalFormat
                });
            return Gt(o), [o]
        },
        tc = {},
        Et = (t, e) => loadTexture(t, e),
        ap, cp = (t, e, o) => {
            ap = e, qn("data/assets/", t + ".ogg", tc, fw, o)
        },
        fw = async t => [await ap.decodeAudioData(t)];
    var gt = (t, e) => t + Math.random() * (e - t),
        oc = (t, e) => Math.floor(Math.random() * (e - t + 1)) + t;
    var ns = t => uw(t, Math.random()),
        uw = (t, e) => t[Math.floor(e * t.length)];
    var tt, sr = [],
        Do = new Map,
        To = new Map,
        nc = new Set,
        up = t => {
            tt && (dw(), mw(t), nc.clear())
        },
        dw = () => {
            dp(tt.listener, Me.transform.worldMatrix), dd(Jo, st.worldMatrix), se(Xe, 0, 0, 1), Pa(Xe, Xe, Jo), se(ht, 0, 1, 0), Pa(ht, ht, Jo), tt.listener.setOrientation(Xe[0], Xe[1], Xe[2], ht[0], ht[1], ht[2])
        },
        mw = t => {
            let e = 0,
                o = 0;
            for (; o < sr.length;) {
                let r = sr[o];
                r.ended ? pw(r.id) : (sr[e] = r, e++), ++o
            }
            sr.length = e
        },
        dp = (t, e) => {
            t.setPosition(e[12], e[13], e[14])
        },
        mp = function() {
            this.ended = !0
        },
        pw = t => {
            To.set(t, Math.max(0, To.get(t) - 1))
        },
        lp = (t, e) => {
            if (!To.has(t)) To.set(t, 1);
            else {
                if (To.get(t) >= e) return !1;
                To.set(t, To.get(t) + 1)
            }
            return !0
        },
        rc = {},
        pp = (t, e) => {
            let o = ns(t);
            rc[o] !== void 0 ? e.buffer = rc[o] : cp(o, tt, r => {
                rc[o] = r, e.buffer = r
            })
        },
        ic = (t, e, o, r, n) => {
            if (tt === void 0 || tt.state == "suspended" || nc.has(t)) return;
            if (o === 0) {
                if (sr.length > 35 || (se(Xe, e.worldMatrix[12], e.worldMatrix[13], e.worldMatrix[14]), 1 / ((To.get(t) || 0) + 10 + Sa(st.position, Xe)) * 1e3 / (sr.length + 20) ** 1.2 < .4) || !lp(t, 2)) return
            } else if (o === 1 && !lp(t, 5)) return;
            let i = os.get(t);
            if (!i) {
                console.log("unknown sound id:" + t);
                return
            }
            nc.add(t);
            let s = tt.createBufferSource();
            s.id = t, s.loop = r, s.playbackRate.value = n, pp(i.files, s);
            let a = Do.get(o).in;
            return s.panner = tt.createPanner(), s.panner.distanceModel = "exponential", s.panner.refDistance = i.distance, s.panner.rolloffFactor = 1, dp(s.panner, e.worldMatrix), s.connect(s.panner), s.panner.connect(a), s.start(0, 0), s.onended = mp, sr.push(s), s
        },
        hp = t => {
            tt = new(window.AudioContext || window.webkitAudioContext), ["ambience", "music"].forEach((i, s) => {
                let a = tt.createGain();
                a.connect(tt.destination), Do.set(2 + s, {
                    gain: a,
                    in: a
                }), Ei[i + "Volume"].subscribe(c => {
                    Do.get(2 + s).gain.gain.value = (c / 100) ** 2
                })
            });
            let e = tt.createDynamicsCompressor(),
                o = tt.createGain();
            e.threshold.value = 0, e.knee.value = 0, e.ratio.value = 15, e.attack.value = .005, e.release.value = .05, e.connect(o), o.connect(tt.destination);
            let r = tt.createGain();
            r.gain.value = 2, r.connect(e);
            let n = tt.createGain();
            n.gain.value = .4, n.connect(e), Do.set(1, {
                gain: o,
                in: r
            }), Do.set(0, {
                gain: o,
                in: n
            }), Ai.subscribe(i => {
                Do.get(1).gain.gain.value = (i / 150) ** 2
            }), Si.subscribe(i => {
                Do.get(0).in.gain.value = i / 100
            }), Dl.set(!0), document.removeEventListener("click", hp)
        },
        fp = !1,
        gp = (t, e) => {
            fp || (fp = !0, hp(), tt.state === "suspended" && document.addEventListener("click", () => tt.resume(), {
                once: !0
            }))
        };
    var vp = (t, e, o, r) => {
        if (tt === void 0 || tt.state == "suspended") return;
        let n = os.get(t);
        if (!n) return;
        let i = tt.createBufferSource();
        i.id = t, i.loop = o, pp(n.files, i);
        let s = Do.get(e).in;
        return r && (i.gain = tt.createGain(), i.gain.connect(s), s = i.gain), i.connect(s), i.start(0, o ? gt(0, 1) : 0), i.onended = mp, i
    };
    var xp = (t, e) => vp(t, e, !0, !0),
        bp = (t, e) => vp(t, e, !1, !0);
    var ac = 0,
        Ht = 0,
        cc = 0,
        lc = 5,
        Wn = 10,
        Gn = 10,
        kp = 0,
        gw = 0,
        fc = 0,
        uc = 0,
        dc = 0,
        mc = 0,
        fs = (t, e) => {
            t = Math.max(150, Math.min(1500, t)), Ht = t * .8, cc = Math.min(Ht, 150), ac = 20, fc = Ht, mc = Ht ** 2, uc = Math.min(Ht, 50), dc = Math.min(Ht / 32, gfxFolFade.value / 32) ** 2, Me.far = kp = t, gw = t ** 2, Zo(Me), Gn = Math.min(Ht, 100 + e * 50), Wn = Math.min(Ht, 40 + e * 10), lc = (Gn + Wn) / 2, _t = Math.ceil(t * 2 / 32), _t += _t % 2, wo = _t / 2, wo += wo % 2, vw()
        },
        sc = [],
        Io = [],
        is = [],
        ar = [],
        wp = 0,
        _p = 0,
        ss = -1 / 0,
        as = -1 / 0,
        cs = -1 / 0,
        ls = -1 / 0,
        zo = -1 / 0,
        $n = -1 / 0,
        Vo = -1 / 0,
        Hn = -1 / 0,
        _t = 0,
        wo = 0,
        vw = () => {
            let t = wo,
                e = (Math.min(Ht * .7, 250) / 32) ** 2,
                o = (Math.max(e, Ht) / 32) ** 2,
                r = (kp / 32) ** 2;
            sc.length = 0, Io.length = 0;
            for (let n = 0; n < _t; ++n)
                for (let i = 0; i < _t; ++i) {
                    let s = (t - i) ** 2 + (t - n) ** 2,
                        a = 0;
                    s > r ? a = 3 : s > o ? a = 2 : s > e && (a = 1), sc.push(s), Io.push(a)
                }
            is.length = 0;
            for (let n = 0; n < _t; ++n)
                for (let i = 0; i < _t; ++i) {
                    let s = i % 2,
                        c = n % 2 * 2 + s,
                        l = Math.min(Io[i + n * _t], 2);
                    if (l < 2) {
                        let f = Io[Math.min(_t - 1, i + 1) + n * _t] > l,
                            u = Io[Math.max(0, i - 1) + n * _t] > l,
                            d = Io[i + Math.max(0, n - 1) * _t] > l,
                            m = Io[i + Math.min(_t - 1, n + 1) * _t] > l,
                            h = c * 33 + l * 16 + ((u ? 1 : 0) | (d ? 2 : 0) | (f ? 4 : 0) | (m ? 8 : 0));
                        is.push(h)
                    } else is.push(c * 33 + l * 16)
                }
        },
        pc = (t, e) => {
            if (t < zo || t >= $n || e < Vo || e >= Hn) return 3;
            let o = t - zo,
                r = e - Vo;
            return Io[o + r * _t]
        },
        Fp = (t, e) => {
            if (t < zo || t >= $n || e < Vo || e >= Hn) return 1 / 0;
            let o = t - zo,
                r = e - Vo;
            return sc[o + r * _t]
        },
        Cp = (t, e) => {
            if (t < zo || t >= $n || e < Vo || e >= Hn) return 2 * 16;
            let o = t - zo,
                r = e - Vo;
            return is[o + r * _t]
        },
        yp = -1 / 0,
        Mp = -1 / 0,
        xw = (t, e, o) => {
            if (t = Math.floor(t / 64) * 2, e = Math.floor(e / 64) * 2, t !== yp || e !== Mp) {
                zo = t - wo, $n = t + wo, Vo = e - wo, Hn = e + wo, ss = Math.min(Math.max(0, Math.floor(zo / 2)), o - 1), as = Math.min(Math.max(0, Math.ceil($n / 2)), o - 1), cs = Math.min(Math.max(0, Math.floor(Vo / 2)), o - 1), ls = Math.min(Math.max(0, Math.ceil(Hn / 2)), o - 1), wp = Math.floor(t / 2), _p = Math.floor(e / 2), yp = t, Mp = e, ar.length = 0;
                let r = new Map,
                    n = 0;
                for (let i = ss; i <= as; ++i)
                    for (let s = cs; s <= ls; ++s) {
                        let a = (i - wp) ** 2 + (s - _p) ** 2;
                        a > ((wo + 1) / 2) ** 2 || (a = ~~a | 0, r.has(a) || r.set(a, []), r.get(a).push(s * o + i, i, s), a > n && (n = a))
                    }
                for (let i = 0; i <= n; ++i)
                    if (r.has(i)) {
                        let s = r.get(i);
                        for (let a = 0; a < s.length; ++a) ar.push(s[a])
                    } return !0
            }
            return !1
        },
        hc = !0,
        Ap = (t, e) => {
            hc = xw(st.position[0], st.position[2], e)
        };
    var bw = 0,
        Pp = (t, e, o, r = 0, n = !1, i = !1) => {
            let s = {
                id: bw++,
                geometry: dt({}),
                program: t,
                shadowProgram: r,
                mode: e,
                uniformData: {},
                individualFrustums: i,
                dynamic: n,
                needsUpdate: !1,
                lastUpdateCamPos: [0, 0, 0],
                drawCount: 0,
                cullFace: 1029,
                instances: [],
                instancedAttributeNames: [],
                instancedAttributes: [],
                instancedData: []
            };
            for (let a = 0; a < o.length; ++a) {
                let c = o[a];
                Sp(s, c.name, c.size)
            }
            return Sp(s, "worldMatrix", 16), s
        },
        Sp = (t, e, o) => {
            t.instancedAttributes.push({
                name: e,
                instanced: !0,
                bufferMode: t.dynamic ? 35048 : 35044,
                size: o,
                data: new Float32Array(o)
            }), t.instancedAttributeNames.push(e), t.instancedData.push([])
        },
        gc = t => {
            let e = Dt();
            e.geometry = t.geometry, e.data.multi = t, t.instances.push(e);
            for (let o = 0; o < t.instancedAttributes.length; ++o) {
                let r = t.instancedAttributes[o],
                    n = t.instancedAttributeNames[o];
                t.instancedData[o].push(e.data[n] = n === "worldMatrix" ? e.worldMatrix : Array(r.size).fill(1))
            }
            return t.needsUpdate = !0, e
        };
    var us = (t, e) => {
        let o = t.instances.indexOf(e);
        t.instances.splice(o, 1);
        for (let r = 0; r < t.instancedAttributes.length; ++r) t.instancedData[r].splice(o, 1);
        t.needsUpdate = !0, Ar(e)
    };
    var ww = (t, e) => {
            t.needsUpdate = t.dynamic;
            for (let a = 0; a < t.instancedAttributes.length; ++a) {
                let c = t.instancedAttributes[a];
                _w(c, c.size, t.instances.length)
            }
            let o = t.dynamic,
                r = t.individualFrustums,
                n = t.instancedData,
                i = t.instances,
                s = 0;
            for (let a = 0; a < i.length; ++a) {
                let c = i[a];
                if (c.visible && (!o || !r || yd(e, c.geometry, c))) {
                    for (let f = 0; f < t.instancedAttributes.length; ++f) {
                        let u = t.instancedAttributes[f],
                            d = u.data,
                            m = n[f][a],
                            h = s * u.size,
                            g = h + u.size;
                        for (let M = h, x = 0; M < g; ++M, ++x) d[M] = m[x]
                    }
                    s++
                }
            }
            if (t.drawCount = s, Gi(t.geometry, t.drawCount), t.drawCount !== 0)
                for (let a = 0; a < t.instancedAttributes.length; ++a) {
                    let c = t.instancedAttributes[a];
                    Wi(t.geometry, c, s)
                }
        },
        $r = (t, e, o, r) => {
            if (o && t.needsUpdate && ww(t, r), e.active && t.drawCount > 0) {
                e.cullFace = t.cullFace;
                for (let n = 0; n < e.autoUniforms.length; ++n) {
                    let i = e.autoUniforms[n];
                    e.uniforms[i].value = t.uniformData[i]
                }
                $i(t.uniformData, e), Tr(e, W.currentProgram === e.id), Dr(t.geometry, e, t.mode)
            }
        },
        Ep = (t, e) => {
            let o = {
                ...e
            };
            for (let r = 0; r < t.instancedAttributeNames.length; ++r) o[t.instancedAttributeNames[r]] = t.instancedAttributes[r];
            Ua(t.geometry, o)
        },
        _w = (t, e, o) => {
            t.data = t.data.byteLength >= e * o * 4 ? t.data : new Float32Array(e * (o + 5))
        };
    var Hr = [],
        Yr, oo, _o, cr, lr, Lp = t => {
            let e = W.width,
                o = W.height;
            for (let r = 0; r < 2; ++r) Hr.push(ho(t, t, 0, !0, v.COMPARE_REF_TO_TEXTURE));
            Yr = ho(t, t, 0, !0, v.COMPARE_REF_TO_TEXTURE), oo = ho(e, o, 1, !0), _o = ho(e, o, 1, !0), cr = ho(Math.ceil(e / 4), Math.ceil(o / 4)), lr = ho(Math.ceil(e / 4), Math.ceil(o / 4)), createExtraBuffers(e, o)
        },
        Dp = (t, e) => {
            In(oo, t, e), In(_o, t, e), In(cr, Math.ceil(t / 4), Math.ceil(e / 4)), In(lr, Math.ceil(t / 4), Math.ceil(e / 4)), resizeExtraBuffers(t, e)
        };
    var Fs = {};
    ga(Fs, {
        bloom: () => wc,
        bloomMerge: () => _c,
        drop: () => ms,
        foliagePlant: () => ps,
        foliageStatic: () => hs,
        fxaa: () => yc,
        multimeshEffect: () => gs,
        multimeshFlat: () => vs,
        multimeshSimple: () => xs,
        multimeshTextured: () => Yn,
        multimeshTexturedVcol: () => bs,
        multimeshTree: () => vc,
        particles: () => ws,
        particles_additive: () => xc,
        particles_normal: () => bc,
        ribbon: () => Xn,
        ribbonTextured: () => kc,
        shadowInstanced: () => Qn,
        shadowInstancedAlpha: () => Fc,
        simple: () => _s,
        simpleTextured: () => b_,
        simpleVcol: () => w_,
        sky: () => Cc,
        skyStarTex: () => Ac,
        sun: () => Sc,
        terrain: () => ys,
        terrainEditorAreas: () => __,
        terrainEditorGrid: () => y_,
        terrainEditorHeights: () => M_,
        terrainEditorTiles: () => k_,
        terrainFog: () => Ms,
        tint: () => Mc,
        water: () => ks,
        waterEditorGrid: () => F_
    });
    var Ip = `#version 300 es
precision highp float;precision highp int;out vec4 fragColor;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform sampler2D diffuse;in vec2 vUv;in float vShine;void main(){if(vCameraDistance>fog[1][1]){fragColor=vec4(fog[0],1.0);return;}vec4 a=texture(diffuse,vUv);if(a.a<0.5)discard;a.rgb=mix(a.rgb*worldlight[1],a.rgb*1.1,smoothstep(-0.7,0.7,sin(time*6.0+vShine)));float b=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);a.rgb=mix(fog[0],a.rgb,b);fragColor=a;}`;
    var zp = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};out float vCameraDistance;out vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};in vec2 uv;in vec3 position;in vec3 normal;in mat4 worldMatrix;in vec4 uvshift;in float shine;out float vShine;out vec2 vUv;void main(){vShine=shine;vWorldPos=worldMatrix*vec4(position,1.0);vUv=uvshift.zw-uv*uvshift.xy;vCameraDistance=length(cameraPosition-vWorldPos.xyz);gl_Position=projectionViewMatrix*worldMatrix*vec4(position,1.0);}`;
    var Vp = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];uniform sampler2D foliageDiffuse;in vec3 vLight;in vec3 vLightAmb;in vec3 vLightDir;in vec2 vUv;out vec4 fragColor;void main(){vec4 b=texture(foliageDiffuse,vUv);float c=0.1;b.a=b.a*smoothstep(1.0,0.0,(vCameraDistance-110.0)/20.0);if(b.a<c){discard;};float d=1.0;if(a==1&&vCameraDistance<shadowRange[2]){float e=smoothstep(shadowRange[1],shadowRange[2],vCameraDistance);if(vCameraDistance>shadowRange[0]){vec4 f=shadowPVMatrix[1]*(vWorldPos);vec3 g=(f.xyz/f.w)*0.5+0.5;d=texture(shadowMaps[1],g);}else{vec4 f=shadowPVMatrix[0]*(vWorldPos);vec3 g=(f.xyz/f.w)*0.5+0.5;d=texture(shadowMaps[0],g);}d=d;d=max(d,e);}b.rgb=b.rgb*(vLight+vLightAmb+vLightDir*d);float h=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);b.rgb=mix(fog[0],b.rgb,h);fragColor=b;}`;
    var Rp = `#version 300 es
precision highp float;precision highp int;precision highp sampler2DShadow;
uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};

out float vCameraDistance;
out vec4 vWorldPos;

uniform Pointlights{vec4 lightCols[16];vec3 lightPos[16];int lightCount;};

out vec3 vLight;

uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};
const int a=
#SHADOWS;

uniform sampler2DShadow shadowMaps[2];

uniform Camera{
    mat4 projectionMatrix;
    mat4 viewMatrix;
    mat4 projectionViewMatrix;
    vec3 cameraPosition;
};

uniform Screen{vec2 resolution;};

in vec4 instPos;
in vec3 instNorm;
in vec3 position;
in vec2 uv;

out vec3 vLightAmb;
out vec3 vLightDir;
out vec2 vUv;

uniform float u_rainAmount;

void main(){
    vUv=uv;

    vec3 b=vec3(0.0);

    for(int c=0;c<lightCount;++c){
        vec3 d=lightPos[c]-instPos.xyz;

        float e=lightCols[c].w-dot(d,d);

        if(e>0.0){
            e/=(lightCols[c].w);
            e=e*e;
            b+=0.3*lightCols[c].rgb*e;
        }
    }

    vLight=b;

    vLightAmb=worldlight[1];

    vLightDir=
        worldlight[0]
        *max(0.0,dot(instNorm.xyz,worldlight[2]));

    vec3 f=position;

    float phase=
        instPos.x*0.25
        +instPos.z*0.25;

    mat3 g;

    g[1]=instNorm.xyz;

    g[2]=normalize(
        cross(
            vec3(
                sin(instPos.x*100.0),
                0.0,
                cos(instPos.z*100.0)
            ),
            g[1]
        )
    );

    g[0]=normalize(cross(g[1],g[2]));

    vec3 h=g*f;

    float sway=
        sin(time*1.35+phase);

    float gust1=
        sin(time*0.45+phase*0.7);

    float gust2=
        sin(time*1.8+phase*2.4)
        *0.5;

    float stormWave=
        sin(time*0.12+instPos.x*0.04+instPos.z*0.03);

    float baseAmp=0.18;

    float stormAmp=
        0.8*u_rainAmount;

    float gustAmp=
        gust1*(0.08+u_rainAmount*0.25);

    float turbulence=
        gust2*(0.02+u_rainAmount*0.12);

    float waveAmp=
        stormWave*u_rainAmount*0.25;

    float windAmp=
        baseAmp
        +stormAmp
        +gustAmp
        +turbulence
        +waveAmp;

    vec3 stormOffset=vec3(
        sway*windAmp,
        0.0,
        cos(time*1.1+phase)*windAmp*0.22*u_rainAmount
    );

    stormOffset *= position.y;

    stormOffset *= instPos.w;

    vWorldPos=vec4(
        h*instPos.w
        +instPos.xyz
        +stormOffset,
        1.0
    );

    vCameraDistance=
        length(cameraPosition-vWorldPos.xyz);

    gl_Position=
        projectionViewMatrix*vWorldPos;
}`;
    var Up = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];uniform sampler2D foliageDiffuse;in vec3 vLightAmb;in vec3 vLightDir;in vec3 vLight;in vec2 vUv;out vec4 fragColor;void main(){vec4 b=texture(foliageDiffuse,vUv);b.a=b.a*smoothstep(1.0,0.0,(vCameraDistance-110.0)/20.0);if(b.a<0.5){discard;};float c=1.0;if(a==1&&vCameraDistance<shadowRange[2]){float d=smoothstep(shadowRange[1],shadowRange[2],vCameraDistance);if(vCameraDistance>shadowRange[0]){vec4 e=shadowPVMatrix[1]*(vWorldPos);vec3 f=(e.xyz/e.w)*0.5+0.5;c=texture(shadowMaps[1],f);}else{vec4 e=shadowPVMatrix[0]*(vWorldPos);vec3 f=(e.xyz/e.w)*0.5+0.5;c=texture(shadowMaps[0],f);}c=c;c=max(c,d);}b.rgb=b.rgb*(vLight+vLightAmb+vLightDir*c);float g=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);b.rgb=mix(fog[0],b.rgb,g);fragColor=b;}`;
    var Bp = `#version 300 es
precision highp float;precision highp int;precision highp sampler2DShadow;
uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};

out float vCameraDistance;
out vec4 vWorldPos;

uniform Pointlights{vec4 lightCols[16];vec3 lightPos[16];int lightCount;};

out vec3 vLight;

uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};
const int a=
#SHADOWS;

uniform sampler2DShadow shadowMaps[2];

uniform Camera{
    mat4 projectionMatrix;
    mat4 viewMatrix;
    mat4 projectionViewMatrix;
    vec3 cameraPosition;
};

uniform Screen{vec2 resolution;};

in vec4 instPos;
in vec3 instNorm;
in vec3 position;
in vec2 uv;

out vec2 vUv;
out vec3 vLightAmb;
out vec3 vLightDir;

uniform float u_rainAmount;

void main(){
    vUv=uv;

    vec3 b=vec3(0.0);

    for(int c=0;c<lightCount;++c){
        vec3 d=lightPos[c]-instPos.xyz;

        float e=lightCols[c].w-dot(d,d);

        if(e>0.0){
            e/=(lightCols[c].w);
            e=e*e;
            b+=0.3*lightCols[c].rgb*e;
        }
    }

    vLight=b;

    vLightAmb=worldlight[1];

    vLightDir=
        worldlight[0]
        *max(0.0,dot(instNorm.xyz,worldlight[2]));

    vec3 f=position;

    float phase=
        instPos.x*0.18
        +instPos.z*0.25;

    mat3 g;

    g[1]=instNorm.xyz;

    g[2]=normalize(
        cross(
            vec3(
                sin(instPos.x*100.0),
                0.0,
                cos(instPos.z*100.0)
            ),
            g[1]
        )
    );

    g[0]=normalize(cross(g[1],g[2]));

    vec3 h=g*f;

    float sway=
        sin(time*1.35+phase);

    float gust1=
        sin(time*0.45+phase*0.7);

    float gust2=
        sin(time*1.8+phase*2.4)
        *0.5;

    float stormWave=
        sin(time*0.12+instPos.x*0.04+instPos.z*0.03);

    float baseAmp=0.18;

    float stormAmp=
        0.8*u_rainAmount;

    float gustAmp=
        gust1*(0.08+u_rainAmount*0.25);

    float turbulence=
        gust2*(0.02+u_rainAmount*0.12);

    float waveAmp=
        stormWave*u_rainAmount*0.25;

    float windAmp=
        baseAmp
        +stormAmp
        +gustAmp
        +turbulence
        +waveAmp;

    vec3 stormOffset=vec3(
        sway*windAmp,
        0.0,
        cos(time*1.1+phase)*windAmp*0.22*u_rainAmount
    );

    stormOffset *= position.y;
    stormOffset *= instPos.w;

    vWorldPos=vec4(
        h*instPos.w
        +instPos.xyz
        +stormOffset,
        1.0
    );

    vCameraDistance=
        length(cameraPosition-vWorldPos.xyz);

    gl_Position=
        projectionViewMatrix*vWorldPos;
}`;
    var jp = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform sampler2D diffuse;in vec3 vNormal;in vec2 vUv;in vec4 vCol;in vec2 vYcutoff;in vec4 vUvshift;out vec4 fragColor;void main(){if(vCameraDistance>fog[1][1]){fragColor=vec4(fog[0],1.0);return;}vec2 a=vec2((vUv.x+vUvshift.x)*vUvshift.z,(vUv.y+vUvshift.y)*vUvshift.w);vec4 b=vec4(1.0,1.0,1.0,texture(diffuse,a).r)*vCol;b.a*=min(1.0,max(0.0,vUv.y/vYcutoff[0]));b.a*=min(1.0,max(0.0,(vYcutoff[1]-vUv.y)/(1.0-vYcutoff[1])));if(b.a<0.01){discard;}float c=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);b.rgb=mix(fog[0],b.rgb,c);fragColor=b;fragColor.rgb*=fragColor.a;}`;
    var qp = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};out float vCameraDistance;out vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};in vec2 uv;in vec3 position;in vec3 normal;in mat4 worldMatrix;in vec4 uvshift;in vec2 ycutoff;in vec4 color;out vec3 vNormal;out vec2 vUv;out vec4 vCol;out vec2 vYcutoff;out vec4 vUvshift;void main(){vNormal=normalize(mat3(worldMatrix)*normal);vUv=uv;vUvshift=uvshift;vCol=color;vYcutoff=ycutoff;vWorldPos=worldMatrix*vec4(position,1.0);vCameraDistance=length(cameraPosition-vWorldPos.xyz);gl_Position=projectionViewMatrix*vWorldPos;}`;
    var Np = `#version 300 es
precision highp float;precision highp int;precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};in vec3 vLight;in vec4 vColor;in vec3 vNormal;in vec4 vInteriorlight;in float vAlpha;in vec3 vViewDir;vec3 b(vec3 c,vec3 d,vec3 e,vec3 f,float g,vec3 h,float i){f=normalize(f);float j=clamp(dot(f,worldlight[2]),0.0,g);vec3 k=c*mix(0.7,1.1,0.5+(0.5*j));vec3 l=normalize(worldlight[2]+vViewDir);vec3 m=d*pow(max(0.0,dot(l,f)),20.0)*i*max(g*0.7+0.2,0.2)*20.0;vec3 n=k+d*j+h;return n*e+m;}out vec4 fragColor;void main(){if(vCameraDistance>fog[1][1]){fragColor=vec4(fog[0],1.0);return;}float o=1.0;if(a==1&&vCameraDistance<shadowRange[2]){float p=smoothstep(shadowRange[1],shadowRange[2],vCameraDistance);if(vCameraDistance>shadowRange[0]){vec4 q=shadowPVMatrix[1]*(vWorldPos);vec3 r=(q.xyz/q.w)*0.5+0.5;o=texture(shadowMaps[1],r);}else{vec4 q=shadowPVMatrix[0]*(vWorldPos);vec3 r=(q.xyz/q.w)*0.5+0.5;o=texture(shadowMaps[0],r);}o=o;o=max(o,p);}vec3 s=worldlight[1];vec3 t=worldlight[0];s=mix(s,vInteriorlight.rgb*0.5,vInteriorlight.a);t=mix(t,vInteriorlight.rgb,vInteriorlight.a);float u=max(0.0,min(1.0,vColor[3]*0.2));vec4 v=vec4(b(s,t,vColor.rgb,vNormal,o,vLight,u),vAlpha);float w=max(0.0,min(1.0,-vColor[3]));v.rgb=mix(v.rgb,vColor.rgb,w);float x=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);v.rgb=mix(fog[0],v.rgb,x);fragColor=v;}`;
    var Op = `#version 300 es
precision highp float;precision highp int;uniform Pointlights{vec4 lightCols[16];vec3 lightPos[16];int lightCount;};out vec3 vLight;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};out float vCameraDistance;out vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};in vec3 position;in vec3 normal;in vec4 color;in vec4 interiorlight;in float alpha;in mat4 worldMatrix;out vec4 vColor;out vec3 vNormal;out vec4 vInteriorlight;out float vAlpha;out vec3 vViewDir;void main(){vNormal=normalize(mat3(worldMatrix)*normal);vWorldPos=worldMatrix*vec4(position,1.0);vColor=color;vAlpha=alpha;vInteriorlight=interiorlight;vCameraDistance=length(cameraPosition-vWorldPos.xyz);vec3 a=vec3(0.0);for(int b=0;b<lightCount;++b){vec3 c=lightPos[b]-vWorldPos.xyz;float d=lightCols[b].w-dot(c,c);if(d>0.0){d/=(lightCols[b].w);d=d*d;a+=max(0.0,dot(normalize(c),vNormal))*lightCols[b].rgb*d;}}vLight=a;vViewDir=-normalize(vWorldPos.xyz-cameraPosition);gl_Position=projectionViewMatrix*vWorldPos;}`;
    var Wp = `#version 300 es
precision highp float;precision highp int;in vec4 vColor;out vec4 fragColor;void main(){fragColor=vColor;fragColor.a=1.0;}`;
    var Gp = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};in vec3 position;in vec4 color;in mat4 worldMatrix;out vec4 vColor;void main(){vColor=color;gl_Position=projectionViewMatrix*worldMatrix*vec4(position,1.0);;}`;
    var $p = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];uniform Circle{vec4 circlePos;vec4 circleInfo;};in vec3 vLight;uniform sampler2D diffuse;in vec3 vNormal;in vec2 vUv;in vec4 vInteriorlight;in vec3 vViewDir;vec3 b(vec3 c,vec3 d,vec3 e,vec3 f,float g,vec3 h,float i){f=normalize(f);float j=clamp(dot(f,worldlight[2]),0.0,g);vec3 k=c*mix(0.7,1.1,0.5+(0.5*j));vec3 l=normalize(worldlight[2]+vViewDir);vec3 m=d*pow(max(0.0,dot(l,f)),20.0)*i*max(g*0.7+0.2,0.2)*20.0;vec3 n=k+d*j+h;return n*e+m;}out vec4 fragColor;void main(){if(vCameraDistance>fog[1][1]){fragColor=vec4(fog[0],1.0);return;}vec4 o=texture(diffuse,vUv);if(o.a<0.5)discard;float p=1.0;if(a==1&&vCameraDistance<shadowRange[2]){float q=smoothstep(shadowRange[1],shadowRange[2],vCameraDistance);if(vCameraDistance>shadowRange[0]){vec4 r=shadowPVMatrix[1]*(vWorldPos);vec3 s=(r.xyz/r.w)*0.5+0.5;p=texture(shadowMaps[1],s);}else{vec4 r=shadowPVMatrix[0]*(vWorldPos);vec3 s=(r.xyz/r.w)*0.5+0.5;p=texture(shadowMaps[0],s);}p=p;p=max(p,q);}vec3 t=worldlight[1];vec3 u=worldlight[0];t=mix(t,vInteriorlight.rgb*0.5,vInteriorlight.a);u=mix(u,vInteriorlight.rgb,vInteriorlight.a);o.rgb=b(t,u,o.rgb,vNormal,p,vLight,0.0);o.rgb/=o.a;float v=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);o.rgb=mix(fog[0],o.rgb,v);float w=distance(vWorldPos.xz,circlePos.xz);float x=min(1.0,max(0.0,4.0-abs(vWorldPos.y-circlePos.y)));if(w<circlePos.w+0.1&&x>0.0){o.rgb=mix(o.rgb,circleInfo.rgb,x*circleInfo.a*((w<circlePos.w?w/circlePos.w*0.5:0.0)+max(0.,(0.1-abs(circlePos.w-w))/0.1)));}fragColor=o;}`;
    var Hp = `#version 300 es
precision highp float;precision highp int;uniform Pointlights{vec4 lightCols[16];vec3 lightPos[16];int lightCount;};out vec3 vLight;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};out float vCameraDistance;out vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};in vec2 uv;in vec3 position;in vec3 normal;in vec4 interiorlight;in mat4 worldMatrix;out vec3 vNormal;out vec2 vUv;out vec4 vInteriorlight;out vec3 vViewDir;void main(){vNormal=normalize(mat3(worldMatrix)*normal);vUv=uv;vWorldPos=worldMatrix*vec4(position,1.0);vInteriorlight=interiorlight;vCameraDistance=length(cameraPosition-vWorldPos.xyz);vec3 a=vec3(0.0);for(int b=0;b<lightCount;++b){vec3 c=lightPos[b]-vWorldPos.xyz;float d=lightCols[b].w-dot(c,c);if(d>0.0){d/=(lightCols[b].w);d=d*d;a+=max(0.0,dot(normalize(c),vNormal))*lightCols[b].rgb*d;}}vLight=a;vViewDir=-normalize(vWorldPos.xyz-cameraPosition);gl_Position=projectionViewMatrix*vWorldPos;}`;
    var Yp = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];uniform Circle{vec4 circlePos;vec4 circleInfo;};in vec3 vLight;uniform sampler2D diffuse;in vec3 vNormal;in vec2 vUv;in vec4 vCol;in vec3 vViewDir;vec3 b(vec3 c,vec3 d,vec3 e,vec3 f,float g,vec3 h,float i){f=normalize(f);float j=clamp(dot(f,worldlight[2]),0.0,g);vec3 k=c*mix(0.7,1.1,0.5+(0.5*j));vec3 l=normalize(worldlight[2]+vViewDir);vec3 m=d*pow(max(0.0,dot(l,f)),20.0)*i*max(g*0.7+0.2,0.2)*20.0;vec3 n=k+d*j+h;return n*e+m;}out vec4 fragColor;void main(){if(vCameraDistance>fog[1][1]){fragColor=vec4(fog[0],1.0);return;}vec4 o=texture(diffuse,vUv);if(o.a<0.5)discard;float p=(float(gl_FrontFacing)*2.0-1.0);float q=1.0;if(a==1&&vCameraDistance<shadowRange[2]){float r=smoothstep(shadowRange[1],shadowRange[2],vCameraDistance);if(vCameraDistance>shadowRange[0]){vec4 s=shadowPVMatrix[1]*(vWorldPos);vec3 t=(s.xyz/s.w)*0.5+0.5;q=texture(shadowMaps[1],t);}else{vec4 s=shadowPVMatrix[0]*(vWorldPos);vec3 t=(s.xyz/s.w)*0.5+0.5;q=texture(shadowMaps[0],t);}q=q;q=max(q,r);}vec3 u=mix(worldlight[1],vCol.rgb,vCol.a);vec3 v=worldlight[0]*(1.0-vCol.a);o.rgb=b(u,v,o.rgb,vNormal,q,vLight,0.0);float w=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);o.rgb=mix(fog[0],o.rgb,w);float x=distance(vWorldPos.xz,circlePos.xz);float y=min(1.0,max(0.0,4.0-abs(vWorldPos.y-circlePos.y)));if(x<circlePos.w+0.1&&y>0.0){o.rgb=mix(o.rgb,circleInfo.rgb,y*circleInfo.a*((x<circlePos.w?x/circlePos.w*0.5:0.0)+max(0.,(0.1-abs(circlePos.w-x))/0.1)));}fragColor=o;}`;
    var Xp = `#version 300 es
precision highp float;precision highp int;uniform Pointlights{vec4 lightCols[16];vec3 lightPos[16];int lightCount;};out vec3 vLight;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};out float vCameraDistance;out vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};in vec2 uv;in vec3 position;in vec3 normal;in vec4 color;in mat4 worldMatrix;out vec3 vNormal;out vec2 vUv;out vec4 vCol;out vec3 vViewDir;void main(){vNormal=normalize(mat3(worldMatrix)*normal);vUv=uv;vCol=color;vWorldPos=worldMatrix*vec4(position,1.0);vCameraDistance=length(cameraPosition-vWorldPos.xyz);vec3 a=vec3(0.0);for(int b=0;b<lightCount;++b){vec3 c=lightPos[b]-vWorldPos.xyz;float d=lightCols[b].w-dot(c,c);if(d>0.0){d/=(lightCols[b].w);d=d*d;a+=max(0.0,dot(normalize(c),vNormal))*lightCols[b].rgb*d;}}vLight=a;vViewDir=-normalize(vWorldPos.xyz-cameraPosition);gl_Position=projectionViewMatrix*vWorldPos;}`;
    var Qp = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];in vec3 vLight;uniform sampler2D diffuse;in vec3 vNormal;in vec2 vUv;in vec3 vViewDir;vec3 b(vec3 c,vec3 d,vec3 e,vec3 f,float g,vec3 h,float i){f=normalize(f);float j=clamp(dot(f,worldlight[2]),0.0,g);vec3 k=c*mix(0.7,1.1,0.5+(0.5*j));vec3 l=normalize(worldlight[2]+vViewDir);vec3 m=d*pow(max(0.0,dot(l,f)),20.0)*i*max(g*0.7+0.2,0.2)*20.0;vec3 n=k+d*j+h;return n*e+m;}out vec4 fragColor;void main(){vec4 o=texture(diffuse,vUv);if(o.a<0.7)discard;if(vCameraDistance>fog[1][1]){fragColor=vec4(fog[0],1.0);return;}float p=1.0;if(a==1&&vCameraDistance<shadowRange[2]){float q=smoothstep(shadowRange[1],shadowRange[2],vCameraDistance);if(vCameraDistance>shadowRange[0]){vec4 r=shadowPVMatrix[1]*(vWorldPos);vec3 s=(r.xyz/r.w)*0.5+0.5;p=texture(shadowMaps[1],s);}else{vec4 r=shadowPVMatrix[0]*(vWorldPos);vec3 s=(r.xyz/r.w)*0.5+0.5;p=texture(shadowMaps[0],s);}p=p;p=max(p,q);}o.rgb=b(worldlight[1],worldlight[0],o.rgb,vNormal,p,vLight,0.0);o.rgb/=o.a;float t=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);o.rgb=mix(fog[0],o.rgb,t);fragColor=o;}`;
    var Zp = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform Screen{vec2 resolution;};in vec3 position;in vec4 info;in vec2 progress;in vec4 scaleRota;in vec4 colStart;in vec4 colEnd;out vec4 vCol;out float vRotationCos;out float vRotationSin;out vec2 vOffset;void main(){float a=min(info[3]-1.0,floor(mix(info[2],info[3],mod(info[0]*progress[0],1.0))));vOffset=vec2(fract(a*0.125),-floor(a/8.0)*0.125);vCol=mix(colStart,colEnd,progress[1]);float b=mix(scaleRota[2],scaleRota[3],progress[0]);vRotationCos=cos(b);vRotationSin=sin(b);float c=mix(scaleRota[0],scaleRota[1],progress[1])*(abs(vRotationSin)+abs(vRotationCos));vec4 d=viewMatrix*vec4(position,1.0);gl_PointSize=c*resolution[1]*projectionMatrix[1][1]/length(d.xyz);gl_Position=projectionMatrix*d;}`;
    var Kp = `#version 300 es
precision highp float;precision highp int;uniform sampler2D particleDiffuse;in vec4 vCol;in vec2 vOffset;in float vRotationCos;in float vRotationSin;out vec4 fragColor;const float a=1.0/(1024.0/8.0);void main(){float b=0.5;float c=abs(vRotationSin)+abs(vRotationCos);vec2 d=vec2(gl_PointCoord.x-b,gl_PointCoord.y-b)*c;vec2 e=d*vRotationCos;vec2 f=d*vRotationSin;d=vec2(e.x+f.y+b,e.y-f.x+b);if(d.x<a||d.x>1.0-a||d.y>1.0-a||d.y<a){discard;}d.x*=0.125;d.y=1.0-d.y*0.125;vec4 g=vec4(1.0,1.0,1.0,texture(particleDiffuse,d+vOffset).r);g*=vCol;if(g.a<0.01){discard;}fragColor=g;fragColor.rgb*=fragColor.a;fragColor.a*=0.33;}`;
    var Jp = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform sampler2D particleDiffuse;in vec4 vCol;in vec2 vOffset;in float vRotationCos;in float vRotationSin;out vec4 fragColor;const float a=1.0/(1024.0/8.0);void main(){float b=0.5;float c=abs(vRotationSin)+abs(vRotationCos);vec2 d=vec2(gl_PointCoord.x-b,gl_PointCoord.y-b)*c;vec2 e=d*vRotationCos;vec2 f=d*vRotationSin;d=vec2(e.x+f.y+b,e.y-f.x+b);if(d.x<a||d.x>1.0-a||d.y>1.0-a||d.y<a){discard;}d.x*=0.125;d.y=1.0-d.y*0.125;vec3 g=texture(particleDiffuse,d+vOffset).rgb;if((g.r+g.g+g.b)<0.1){discard;}fragColor=vec4(g.rgb,1.0);}`;
    var e1 = `#version 300 es
precision highp float;precision highp int;uniform Screen{vec2 resolution;};uniform sampler2D inputA;uniform vec2 offset[4];uniform vec4 amount;in vec2 vUv;out vec4 fragColor;void main(){vec3 a=texture(inputA,vUv+offset[0]).rgb*amount[0];a+=texture(inputA,vUv+offset[1]).rgb*amount[1];a+=texture(inputA,vUv+offset[2]).rgb*amount[2];a+=texture(inputA,vUv+offset[3]).rgb*amount[3];fragColor=vec4(a,1.0);}`;
    var t1 = `#version 300 es
precision highp float;precision highp int;uniform Screen{vec2 resolution;};uniform sampler2D inputA;uniform sampler2D inputB;uniform float amount;in vec2 vUv;out vec4 fragColor;void main(){vec4 a=texture(inputA,vUv);vec3 b=texture(inputB,vUv).rgb;b=b*b;fragColor.w=a.w;fragColor.xyz=b*amount+a.xyz;}`;
    var o1 = `#version 300 es
precision highp float;precision highp int;uniform Screen{vec2 resolution;};uniform sampler2D inputA;in vec2 vUv;out vec4 fragColor;
#define a  4.0
#define b (1.0/a)
#define c (1.0/128.0)
#define d (1.0/8.0)
vec3 e(vec4 f,sampler2D g,vec2 h){vec3 i=textureLod(g,f.zw,0.0).xyz;vec3 j=textureLod(g,f.zw+vec2(1,0)*h.xy,0.0).xyz;vec3 k=textureLod(g,f.zw+vec2(0,1)*h.xy,0.0).xyz;vec3 l=textureLod(g,f.zw+vec2(1,1)*h.xy,0.0).xyz;vec3 m=textureLod(g,f.xy,0.0).xyz;vec3 n=vec3(0.299,0.587,0.114);float o=dot(i,n);float p=dot(j,n);float q=dot(k,n);float r=dot(l,n);float s=dot(m,n);float t=min(s,min(min(o,p),min(q,r)));float u=max(s,max(max(o,p),max(q,r)));vec2 v;v.x=-((o+p)-(q+r));v.y=((o+q)-(p+r));float w=max((o+p+q+r)*(0.25*b),c);float x=1.0/(min(abs(v.x),abs(v.y))+w);v=min(vec2(a,a),max(vec2(-a,-a),v*x))*h.xy;vec3 y=(1.0/2.0)*(textureLod(g,f.xy+v*(1.0/3.0-0.5),0.0).xyz+textureLod(g,f.xy+v*(2.0/3.0-0.5),0.0).xyz);vec3 az=y*(1.0/2.0)+(1.0/4.0)*(textureLod(g,f.xy+v*(0.0/3.0-0.5),0.0).xyz+textureLod(g,f.xy+v*(3.0/3.0-0.5),0.0).xyz);float aa=dot(az,n);if((aa<t)||(aa>u))return y;return az;}void main(){vec2 h=1.0/resolution;vec4 f=vec4(vUv,vUv-(h*(0.5+d)));vec3 ab=e(f,inputA,1.0/resolution);fragColor=vec4(ab,1.);}`;
    var r1 = `#version 300 es
precision highp float;precision highp int;uniform Screen{vec2 resolution;};uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform sampler2D inputA;uniform vec4 tint;uniform float warp;in vec2 vUv;out vec4 fragColor;void main(){float a=0.01;float b=5.0;vec2 c;c.x=sin(vUv.y*10.0+time)*a;c.y=cos(vUv.x*10.0+time)*a;vec4 d=texture(inputA,vUv);vec4 e=texture(inputA,vUv+c);vec4 f=mix(d,e,warp);f.rgb=mix(f.rgb,tint.rgb*0.2+0.8*tint.rgb*length(f.rgb),tint.a);fragColor=f;}`;
    var n1 = `#version 300 es
precision highp float;precision highp int;uniform vec4 colStart;uniform vec4 colEnd;uniform vec2 offset;in vec2 vUv;out vec4 fragColor;void main(){fragColor=mix(colStart,colEnd,vUv.x);if(fragColor.a<0.01){discard;}fragColor.rgb*=fragColor.a;fragColor.a*=0.5;}`;
    var i1 = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform vec2 offset;in vec3 position;in vec2 uv;out vec2 vUv;void main(){vUv=vec2(uv.x-min(uv.x/offset.y,1.0)*offset.x,uv.y);gl_Position=projectionViewMatrix*vec4(position,1.0);}`;
    var s1 = `#version 300 es
precision highp float;precision highp int;uniform vec4 colStart;uniform vec4 colEnd;uniform vec2 offset;uniform sampler2D diffuse;in vec2 vUv;out vec4 fragColor;void main(){fragColor=texture(diffuse,vUv);fragColor*=mix(colStart,colEnd,vUv.x);if(fragColor.a<0.01){discard;}}`;
    var a1 = `#version 300 es
precision highp float;precision highp int;void main(){}`;
    var c1 = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};in mat4 worldMatrix;in vec3 position;in vec2 uv;out vec2 vUv;void main(){vUv=uv;gl_Position=projectionViewMatrix*worldMatrix*vec4(position,1.0);}`;
    var l1 = `#version 300 es
precision highp float;precision highp int;in vec2 vUv;uniform sampler2D diffuse;void main(){if(texture(diffuse,vUv).a<0.7)discard;}`;
    var f1 = `#version 300 es
precision highp float;precision highp int;uniform vec4 color;out vec4 fragColor;void main(){fragColor=color;}`;
    var u1 = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform mat4 modelMatrix;in vec3 position;in vec2 uv;in vec3 normal;out vec2 vUv;out vec3 vNormal;out vec3 vPos;void main(){vUv=uv;vNormal=normal;vPos=position;gl_Position=projectionViewMatrix*modelMatrix*vec4(position,1.0);}`;
    var d1 = `#version 300 es
precision highp float;precision highp int;uniform sampler2D diffuse;in vec2 vUv;out vec4 fragColor;void main(){vec4 a=texture(diffuse,vUv);vec3 b=normalize(vec3(1.0,1.0,0.3));fragColor=a;if(fragColor.a<0.2)discard;}`;
    var m1 = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform mat4 modelMatrix;in vec2 uv;in vec3 position;in vec3 normal;out vec2 vUv;out vec3 vNormal;void main(){vUv=uv;gl_Position=projectionViewMatrix*modelMatrix*vec4(position,1.0);}`;
    var p1 = `#version 300 es
precision highp float;precision highp int;in vec4 vColor;out vec4 fragColor;void main(){fragColor=vColor;}`;
    var h1 = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform mat4 modelMatrix;in vec3 position;in vec4 color;out vec4 vColor;void main(){vColor=color;gl_Position=projectionViewMatrix*modelMatrix*vec4(position,1.0);}`;
    var g1 = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform Sky{vec3 skycolors[5];vec3 suncolor;};uniform sampler2D skyDiffuse;uniform sampler2D cloudDiffuse;in vec2 vUv;in vec3 vPos;out vec4 fragColor;void main(){gl_FragDepth=0.999999;vec3 a=vec3(0.0);float b=vPos.y/0.5;if(b>0.4){a=mix(skycolors[1],skycolors[0],smoothstep(0.4,1.0,b));}else if(b>0.25){a=mix(skycolors[2],skycolors[1],smoothstep(0.25,0.4,b));}else if(b>0.06){a=mix(skycolors[3],skycolors[2],smoothstep(0.06,0.25,b));}else{a=mix(fog[0],skycolors[3],smoothstep(0.0,0.06,b));}float c=1.0-sin(daycycle*6.28)+0.02;float d=smoothstep(0.1,0.5,b)*smoothstep(0.9,0.6,b);a+=texture(skyDiffuse,vUv*vec2(4.0,1.0)).rgb*c*d;float e=texture(cloudDiffuse,vec2(vUv.x+time/80.0,vUv.y*0.6+time/120.0)).r*texture(cloudDiffuse,vec2(vUv.x*2.0+time/300.0,vUv.y*0.6)).r;e=e*smoothstep(0.0,0.1,b)*smoothstep(1.0,0.85,b);e=smoothstep(0.25,0.7,e);a=mix(a,skycolors[4],e);fragColor=vec4(a,1.0);}`;
    var v1 = `#version 300 es
precision highp float;precision highp int;in vec2 vUv;uniform float seed;float a(in vec2 uv,float scale){uv*=scale;vec2 b=floor(uv),f=fract(uv),p;float c=3.,d;p=.5+.35*sin(11.*fract(sin((b+p+scale)*mat2(7,3,6,5))*5.))-f;d=length(p);c=min(d,c);return smoothstep(0.,c,sin(f.x+f.y)*0.003);}vec2 d(vec2 e){e=vec2(dot(e,vec2(127.1,311.7)),dot(e,vec2(269.5,183.3)));return-1.0+2.0*fract(sin(e)*43758.5453123);}float f(in vec2 e){const float g=0.366025404;const float h=0.211324865;vec2 i=floor(e+(e.x+e.y)*g);vec2 j=e-i+(i.x+i.y)*h;vec2 l=(j.x>j.y)?vec2(1.0,0.0):vec2(0.0,1.0);vec2 m=j-l+h;vec2 n=j-1.0+2.0*h;vec3 q=max(0.5-vec3(dot(j,j),dot(m,m),dot(n,n)),0.0);vec3 r=q*q*q*vec3(dot(j,d(i+0.0)),dot(m,d(i+l)),dot(n,d(i+1.0)));float t=dot(r,vec3(70.0));return smoothstep(-1.0,1.0,t);}out vec4 fragColor;void main(){vec2 u=vec2(vUv.x+seed,vUv.y);float r=a(vUv,10.0);r+=a(vUv,20.0)*0.5;r+=a(vUv,30.0)*0.2;r*=f(vUv*20.0);fragColor.rgb+=r*4.0;}`;
    var x1 = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform Sky{vec3 skycolors[5];vec3 suncolor;};uniform float u_rain;in vec2 vUv;in vec3 vPos;out vec4 fragColor;void main(){gl_FragDepth=0.999998;float a=length(vec2(0.5,0.5)-vUv);float b=smoothstep(0.3,0.2,a)*2.0;b+=smoothstep(0.5,0.1,a);b*=smoothstep(0.08,0.15,(vPos.y+0.2)*0.2+abs(sin(daycycle*6.282)));b*=1.0-u_rain;fragColor.rgba=vec4(suncolor,b);}`;
    var b1 = `#version 300 es
precision highp float;precision highp int;uniform Circle{vec4 circlePos;vec4 circleInfo;};precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform MeshTerrain{mat4 modelMatrix;vec4 terrainInfo[4];int quadrant;};const float b=256.0;const float c=4.0;precision highp sampler2DArray;uniform sampler2DArray atlas;uniform sampler2D diffuse[4];in vec3 vLight;in vec3 vNormal;in vec3 vViewDir;in vec3 vUvChannel;in vec2 vUvTexture[4];vec4 d;float e;vec3 f(vec3 g,vec3 h,vec3 i,vec3 j,float k,vec3 l,float m){j=normalize(j);float n=clamp(dot(j,worldlight[2]),0.0,k);vec3 o=g*mix(0.7,1.1,0.5+(0.5*n));vec3 p=normalize(worldlight[2]+vViewDir);vec3 q=h*pow(max(0.0,dot(p,j)),20.0)*m*max(k*0.7+0.2,0.2)*20.0;vec3 r=o+h*n+l;return r*i+q;}void s(vec4 t,float u,vec4 v){float w=t.x+t.y+t.z;e+=v[3]*smoothstep(v[1],v[2],w)*u;t.a=u;t.rgb*=u;d+=t;}out vec4 fragColor;void main(){if(vCameraDistance>fog[1][1]){fragColor=vec4(fog[0],1.0);return;}vec4 x=texture(atlas,vUvChannel);x[3]=max(0.0,min(1.0,1.0-(x.r+x.g+x.b)));if(x[0]==1.0&&x[1]==1.0&&x[2]==1.0)discard;s(texture(diffuse[0],vUvTexture[0]),x[0],terrainInfo[0]);s(texture(diffuse[1],vUvTexture[1]),x[1],terrainInfo[1]);s(texture(diffuse[2],vUvTexture[2]),x[2],terrainInfo[2]);s(texture(diffuse[3],vUvTexture[3]),x[3],terrainInfo[3]);d.rgb/=d.a;e/=d.a;d.a=1.0;float y=1.0;if(a==1&&vCameraDistance<shadowRange[2]){float az=smoothstep(shadowRange[1],shadowRange[2],vCameraDistance);if(vCameraDistance>shadowRange[0]){vec4 aa=shadowPVMatrix[1]*(vWorldPos);vec3 ab=(aa.xyz/aa.w)*0.5+0.5;y=texture(shadowMaps[1],ab);}else{vec4 aa=shadowPVMatrix[0]*(vWorldPos);vec3 ab=(aa.xyz/aa.w)*0.5+0.5;y=texture(shadowMaps[0],ab);}y=y;y=max(y,az);}d.rgb=f(worldlight[1],worldlight[0],d.rgb,vNormal,y,vLight,e);float ac=distance(vWorldPos.xz,circlePos.xz);float ad=min(1.0,max(0.0,4.0-abs(vWorldPos.y-circlePos.y)));if(ac<circlePos.w+0.1&&ad>0.0){d.rgb=mix(d.rgb,circleInfo.rgb,ad*circleInfo.a*((ac<circlePos.w?ac/circlePos.w*0.5:0.0)+max(0.,(0.1-abs(circlePos.w-ac))/0.1)));}float ae=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);d.rgb=mix(fog[0],d.rgb,ae);fragColor=d;}`;
    var w1 = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};out float vCameraDistance;out vec4 vWorldPos;uniform Pointlights{vec4 lightCols[16];vec3 lightPos[16];int lightCount;};out vec3 vLight;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform MeshTerrain{mat4 modelMatrix;vec4 terrainInfo[4];int quadrant;};const float a=256.0;const float b=4.0;in vec3 position;in vec3 normal;out vec3 vNormal;out vec3 vUvChannel;out vec2 vUvTexture[4];out vec3 vViewDir;void main(){vNormal=normal;vWorldPos=modelMatrix*vec4(position,1.0);vUvChannel=vec3(position[0],position[2],0.0)/32.0;int c=quadrant%2;int d=int(quadrant%4);if(c==1)vUvChannel.x-=1.0;if(d>1)vUvChannel.y-=1.0;vUvChannel.z=float(quadrant);vec2 e=vec2(-vWorldPos[0],vWorldPos[2])/4.0;vUvTexture[0]=e*terrainInfo[0][0];vUvTexture[1]=e*terrainInfo[1][0];vUvTexture[2]=e*terrainInfo[2][0];vUvTexture[3]=e*terrainInfo[3][0];for(int f=0;f<lightCount;++f){vec3 g=lightPos[f]-vWorldPos.xyz;float h=lightCols[f].w-dot(g,g);if(h>0.0){h/=(lightCols[f].w);h=h*h;vLight+=0.2*lightCols[f].rgb*h;}}vViewDir=-normalize(vWorldPos.xyz-cameraPosition);vCameraDistance=length(cameraPosition-vWorldPos.xyz);gl_Position=projectionViewMatrix*vWorldPos;}`;
    var _1 = `#version 300 es
precision highp float;precision highp int;in vec4 vWorldPos;out vec4 fragColor;uniform vec4 colors[576];uniform int divider;void main(){float a=64.0/float(divider);int b=int(floor(mod(vWorldPos.x,64.0)/a)+floor(mod(vWorldPos.z,64.0)/a)*float(divider));fragColor.rgba=colors[b];}`;
    var y1 = `#version 300 es
precision highp float;precision highp int;in vec3 vPos;in vec3 vNormal;out vec4 fragColor;void main(){float a=0.0;if(vNormal.y<0.93){a=1.0;}fragColor=vec4(0.0,0.0,a,0.4+a*0.6);if(abs(vPos.x-0.0)<0.001||abs(vPos.x-64.0)<0.001||abs(vPos.z-0.0)<0.001||abs(vPos.z-64.0)<0.001)fragColor=vec4(1.0,1.0,0.0,1.0);if((abs(vPos.x-32.0)<0.001&&mod(vPos.z,1.0)<0.5)||(abs(vPos.z-32.0)<0.001&&mod(vPos.x,1.0)<0.5))fragColor=vec4(1.0,1.0,0.0,1.0);}`;
    var M1 = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform mat4 modelMatrix;in vec3 normal;in vec3 position;out vec3 vPos;out vec3 vNormal;void main(){vNormal=normal;vPos=position;gl_Position=projectionViewMatrix*modelMatrix*vec4(position[0],position[1]+0.05,position[2],1.0);}`;
    var k1 = `#version 300 es
precision highp float;precision highp int;uniform Circle{vec4 circlePos;vec4 circleInfo;};precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform MeshTerrain{mat4 modelMatrix;vec4 terrainInfo[4];int quadrant;};const float b=256.0;const float c=4.0;precision highp sampler2DArray;uniform sampler2DArray atlas;uniform sampler2D diffuse[4];in vec3 vLight;in vec3 vNormal;in vec3 vViewDir;in vec3 vUvChannel;in vec2 vUvTexture[4];vec4 d;float e;void f(vec4 g,float h,vec4 i){float j=g.x+g.y+g.z;e+=i[3]*smoothstep(i[1],i[2],j)*h;g.a=h;g.rgb*=h;d+=g;}out vec4 fragColor;void main(){vec4 k=texture(atlas,vUvChannel);k[3]=max(0.0,min(1.0,1.0-(k.r+k.g+k.b)));if(k[0]==1.0&&k[1]==1.0&&k[2]==1.0)discard;f(texture(diffuse[0],vUvTexture[0]),k[0],terrainInfo[0]);f(texture(diffuse[1],vUvTexture[1]),k[1],terrainInfo[1]);f(texture(diffuse[2],vUvTexture[2]),k[2],terrainInfo[2]);f(texture(diffuse[3],vUvTexture[3]),k[3],terrainInfo[3]);d.rgb/=d.a;e/=d.a;d.a=1.0;if(mod(vWorldPos.y,2.0)<0.2){d.rgb=mix(d.rgb,vec3(0.8),0.5);}else{d.rgb=mix(d.rgb,vec3(0.2),0.5);}vec3 l=worldlight[2];l.y*=0.5;l=normalize(l);d.rgb*=max(0.3,min(1.0,dot(l,vNormal)*0.5+0.5));float m=distance(vWorldPos.xz,circlePos.xz);if(m<circlePos.w+0.1){d.rgb=mix(d.rgb,circleInfo.rgb,circleInfo.a*(max(0.,(0.3-abs(circlePos.w-m))/0.3)));}float n=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);d.rgb=mix(fog[0],d.rgb,n);fragColor=d;}`;
    var F1 = `#version 300 es
precision highp float;precision highp int;uniform Circle{vec4 circlePos;vec4 circleInfo;};precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform MeshTerrain{mat4 modelMatrix;vec4 terrainInfo[4];int quadrant;};const float b=256.0;const float c=4.0;precision highp sampler2DArray;uniform sampler2DArray atlas;uniform sampler2D diffuse[4];in vec3 vLight;in vec3 vNormal;in vec3 vViewDir;in vec3 vUvChannel;in vec2 vUvTexture[4];vec4 d;float e;void f(vec4 g,float h,vec4 i){float j=g.x+g.y+g.z;e+=i[3]*smoothstep(i[1],i[2],j)*h;g.a=h;g.rgb*=h;d+=g;}out vec4 fragColor;void main(){vec4 k=texture(atlas,vUvChannel);k[3]=max(0.0,min(1.0,1.0-(k.r+k.g+k.b)));if(k[0]==1.0&&k[1]==1.0&&k[2]==1.0)discard;d.rgb=texture(diffuse[0],vUvTexture[0]).rgb;float l=64.0/12.0;float m=l/2.0;bool n=mod(vWorldPos.z,l)>m;if(mod(vWorldPos.x,l)<m){if(n){d.rgb=vec3(0.45);}else{d.rgb=vec3(0.55);}}else{if(n){d.rgb=vec3(0.55);}else{d.rgb=vec3(0.45);}}vec3 o=worldlight[2];o.y*=0.5;o=normalize(o);d.rgb*=max(0.3,min(1.0,dot(o,vNormal)*0.5+0.5));float p=distance(vWorldPos.xz,circlePos.xz);if(p<circlePos.w+0.1){d.rgb=mix(d.rgb,circleInfo.rgb,circleInfo.a*(max(0.,(0.3-abs(circlePos.w-p))/0.3)));}float q=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);d.rgb=mix(fog[0],d.rgb,q);fragColor=d;}`;
    var C1 = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;out vec4 fragColor;void main(){fragColor.rgb=fog[0];}`;
    var A1 = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform MeshTerrain{mat4 modelMatrix;vec4 terrainInfo[4];int quadrant;};in vec3 position;void main(){vec4 a=modelMatrix*vec4(position,1.0);gl_Position=projectionViewMatrix*a;}`;
    var S1 = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform Screen{vec2 resolution;};uniform sampler2D waterLines;uniform sampler2D waterNoise;uniform sampler2D bufferPongColor;uniform sampler2D bufferPongDepth;in vec2 vUv;out vec4 fragColor;void main(){float a=length(cameraPosition-vWorldPos.xyz);float b=(texture(waterNoise,vUv.yx/4.0+time*0.1).r-0.5);float c=gl_FragCoord.z;c=c*2.0-1.0;c=projectionMatrix[3][2]/(c+projectionMatrix[2][2]);if(a>fog[1][1]){fragColor=vec4(fog[0],1.0);return;}vec2 d=gl_FragCoord.xy/resolution;float e=texture(bufferPongDepth,d.xy).r;e=e*2.0-1.0;e=projectionMatrix[3][2]/(e+projectionMatrix[2][2]);float f=e-c;vec2 g=vec2(b*0.05,0.0);float h=f;float i=1.0-clamp(h/0.1,0.0,1.0);float j=1.0-clamp(h/0.6,0.0,1.0);float k=1.0-clamp(h/2.0,0.0,1.0);float l=1.0-clamp(h/10.0,0.0,1.0);float m=1.0-clamp(h/100.0+0.5,0.0,1.0);float n=texture(waterLines,vUv.yx+b*0.15).r;vec3 o=mix(watercolors[2],watercolors[1],l);vec3 p=texture(bufferPongColor,d.xy+g).rgb;vec3 q=(worldlight[0]+worldlight[1]);vec3 r=mix(o,p*o,m)+n*watercolors[0]*(0.05+k*0.3);r=mix(r,watercolors[0],j)*q;vec4 s=vec4(r,1.0-i);float t=min(1.0,max(0.0,(n*(b+0.3)*0.5)));s.rgb+=t*worldlight[0];float u=clamp((fog[1][1]-a)/(fog[1][1]-fog[1][0]),0.0,1.0);s.rgb=mix(fog[0],s.rgb,u);fragColor=s;}`;
    var P1 = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};out float vCameraDistance;out vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform Water{vec3 verts[4];};in vec3 position;in vec3 color;in vec3 colorFoam;in vec3 colorShallow;out vec2 vUv;void main(){vWorldPos.xyz=verts[gl_VertexID];vWorldPos.w=1.0;vUv=vWorldPos.xz/2.0;gl_Position=projectionViewMatrix*vWorldPos;}`;
    var E1 = `#version 300 es
precision highp float;precision highp int;in vec4 vWorldPos;out vec4 fragColor;void main(){fragColor.rgba=vec4(1.0,mod(vWorldPos.y+0.001,1.0),0.0,0.5);}`;
    var ms = {
            frag: Ip,
            vert: zp
        },
        ps = {
            frag: Vp,
            vert: Rp
        },
        hs = {
            frag: Up,
            vert: Bp
        },
        gs = {
            frag: jp,
            vert: qp
        },
        vs = {
            frag: Np,
            vert: Op
        },
        xs = {
            frag: Wp,
            vert: Gp
        },
        Yn = {
            frag: $p,
            vert: Hp
        },
        bs = {
            frag: Yp,
            vert: Xp
        },
        vc = {
            frag: Qp
        },
        ws = {
            vert: Zp
        },
        xc = {
            frag: Kp
        },
        bc = {
            frag: Jp
        },
        wc = {
            frag: e1
        },
        _c = {
            frag: t1
        },
        yc = {
            frag: o1
        },
        Mc = {
            frag: r1
        },
        Xn = {
            frag: n1,
            vert: i1
        },
        kc = {
            frag: s1
        },
        Qn = {
            frag: a1,
            vert: c1
        },
        Fc = {
            frag: l1
        },
        _s = {
            frag: f1,
            vert: u1
        },
        b_ = {
            frag: d1,
            vert: m1
        },
        w_ = {
            frag: p1,
            vert: h1
        },
        Cc = {
            frag: g1
        },
        Ac = {
            frag: v1
        },
        Sc = {
            frag: x1
        },
        ys = {
            frag: b1,
            vert: w1
        },
        __ = {
            frag: _1
        },
        y_ = {
            frag: y1,
            vert: M1
        },
        M_ = {
            frag: k1
        },
        k_ = {
            frag: F1
        },
        Ms = {
            frag: C1,
            vert: A1
        },
        ks = {
            frag: S1,
            vert: P1
        },
        F_ = {
            frag: E1
        };
    var D1 = (t, e, o) => {
            let r = v.getUniformBlockIndex(t, e),
                n = v.getActiveUniformBlockParameter(t, r, v.UNIFORM_BLOCK_DATA_SIZE),
                i = {
                    name: e,
                    size: n,
                    uniforms: [],
                    index: o
                },
                s = v.getActiveUniformBlockParameter(t, r, v.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES),
                a = v.getActiveUniforms(t, s, v.UNIFORM_OFFSET);
            for (let c = 0; c < s.length; ++c) {
                let l = s[c],
                    f = v.getActiveUniform(t, l),
                    u = a[c],
                    d = f.size,
                    m = 0,
                    h = 0,
                    g = !1;
                f.type === v.FLOAT_VEC3 ? (m = 3, h = d > 1 ? 4 : 3) : f.type === v.FLOAT_VEC2 ? (m = 2, h = d > 1 ? 4 : 2) : f.type === v.FLOAT_VEC4 ? (m = 4, h = 4) : f.type === v.FLOAT_MAT4 ? (m = 16, h = 16) : f.type === v.FLOAT ? (m = 1, h = 1) : f.type === v.INT && (m = 1, h = 1, g = !0), d *= m;
                let M = {
                    name: f.name.replace("[0]", ""),
                    size: d,
                    offset: u,
                    divisor: h,
                    elements: m,
                    isInt: g
                };
                i.uniforms.push(M)
            }
            return i.uniforms.sort((c, l) => c.offset - l.offset), i
        },
        Xr = t => {
            let e = {
                layout: t,
                buffer: v.createBuffer(),
                data: {},
                dataArray: []
            };
            v.bindBuffer(v.UNIFORM_BUFFER, e.buffer), v.bufferData(v.UNIFORM_BUFFER, t.size, v.DYNAMIC_DRAW), v.bindBuffer(v.UNIFORM_BUFFER, null);
            for (let o = 0; o < t.uniforms.length; ++o) {
                let r = t.uniforms[o],
                    n = [];
                for (let i = 0; i < r.size; ++i) n.push(0);
                e.data[r.name] = n, e.dataArray.push(n)
            }
            return e
        },
        fr = t => {
            v.bindBufferBase(v.UNIFORM_BUFFER, t.layout.index, t.buffer)
        },
        yo = (t, e, o, r = 0) => {
            r === 0 && (r = e.length);
            for (let n = 0; n < r; ++n) t[n + o] = e[n]
        },
        T1 = new ArrayBuffer(1e3),
        C_ = new Int32Array(T1),
        L1 = new Float32Array(T1),
        Cs = t => {
            for (let e = 0; e < t.layout.uniforms.length; ++e) {
                let o = t.layout.uniforms[e];
                t.data[o.name] !== t.dataArray[e] && (t.dataArray[e] = t.data[o.name])
            }
        },
        It = t => {
            let e = 0;
            for (let o = 0; o < t.layout.uniforms.length; ++o) {
                let r = t.layout.uniforms[o],
                    n = t.dataArray[o],
                    i = r.isInt ? C_ : L1,
                    s = 0;
                for (; s < n.length;)
                    for (let a = 0; a < r.divisor; ++a) a < r.elements && (i[e] = n[s], s++), e++
            }
            v.bindBuffer(v.UNIFORM_BUFFER, t.buffer), v.bufferSubData(v.UNIFORM_BUFFER, 0, L1, 0, t.layout.size / 4), v.bindBuffer(v.UNIFORM_BUFFER, null)
        };

    function As(t, e, o) {
        return t[0] = e, t[1] = o, t
    }

    function I1(t) {
        let e = t[0],
            o = t[1];
        return Math.sqrt(e * e + o * o)
    }
    var assetVersion = "8926940";
    var settingDefaults = {
        cinematicLighting: false,
        ssao: false,
        ssaoRadius: 9,
        ssaoBias: 9,
        ssaoFadeDist: 300,
        ssaoBlur: true,
        ssaoIncludeFoliage: false,
        ssaoIGN: true,
        godRays: false,
        godRaysIntensity: 19,
        godRaysDistance: 70,
        godRaysPhase: 44,
        godRaysHeight: 26,
        godRaysContrast: 500,
        godRaysDust: 100,
        godRaysGate: 28,
        shadowAlpha: 0,
        tonemap: false,
        tonemapMode: 0,
        tonemapExposure: 100,
        tonemapContrast: 100,
        tonemapSaturation: 100,
        tonemapDither: true,
        bloomHQ: false,
        bloomThreshold: 75,
        bloomKnee: 50,
        bloomIntensity: 100,
        bloomRadius: 100,
        bloomSky: 25,
        simpleSky: false,
        classicSky: false,
        classicWater: false,
        foliageDistance: 130,
        sharpenAmount: 0,
        ambienceTint: false,
        ambienceTintColor: "#ffffff",
        tintSunStrength: 50,
        tintSunColor: false,
        timeSlider: 0,
        timeToIngame: false,
        rainEnabled: true,
        rainForce: false,
        rainNoDesert: true,
        rainDurMin: 50,
        rainDurMax: 140,
        rainWindowMin: 1,
        rainWindowMax: 5,
        rainEaseSpeed: 300,
        faivelRetexture: true,
        menuTrack: null,
        menuTrackEnabled: true,
        menuTrackSpeed: 30,
        menuTrackLoop: true
    };
    var gfe = {};
    for (let k in settingDefaults) {
        let val = settingDefaults[k];
        try {
            let s = localStorage.getItem(k),
                p = JSON.parse(s == "undefined" ? null : s);
            p !== null && (val = p);
        } catch (e) {}
        gfe[k] = val;
    }
    var cinematicOverrides = {
        shadowAlpha: 20,
        ssaoRadius: 9,
        ssaoBias: 9,
        ssaoFadeDist: 300,
        godRaysIntensity: 120,
        godRaysDistance: 250,
        godRaysPhase: 50,
        godRaysHeight: 50,
        godRaysContrast: 160,
        godRaysDust: 50,
        godRaysGate: 150,
        tonemapMode: 1,
        tonemapExposure: 130,
        tonemapContrast: 100,
        tonemapSaturation: 90,
        tonemapDither: true,
        bloomThreshold: 18,
        bloomKnee: 55,
        bloomIntensity: 100,
        bloomRadius: 100,
        bloomSky: 25
    };
    var gfx = k => gfe.cinematicLighting && cinematicOverrides[k] !== undefined ? cinematicOverrides[k] : gfe[k];
    var shadowAlphaVal = gfx("shadowAlpha") / 100,
        ssaoRadiusVal = gfx("ssaoRadius") / 100,
        ssaoBiasVal = gfx("ssaoBias") / 10,
        ssaoFadeVal = gfx("ssaoFadeDist"),
        gfxFolFade = {
            value: Math.max(16, gfe.foliageDistance || 130)
        };

    function hexParts(hex) {
        return [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
    }
    var setStyle = (rl, prop, value) => rl.style.setProperty(prop, value);
    var bindSampler = (name, tex, idx, prog) => prog.samplerNames.indexOf(name) >= 0 && pt(name, tex, idx, prog);
    var gfxPatchShader = (t, name) => {
        if (!t) return t;
        let e = t,
            n = "";

        if (shadowAlphaVal > 0 && e.indexOf("texture(shadowMaps") >= 0 && e.indexOf("/*sa*/") < 0)
            e = e.replace(/\b([A-Za-z_]\w*)\s*=\s*max\(\1\s*,\s*[A-Za-z_]\w*\)\s*;/, (o, i) => o + "/*sa*/" + i + "=mix(" + shadowAlphaVal.toFixed(4) + ",1.0," + i + ");");
        e = e.replace(/b\.a=b\.a\*smoothstep\(1\.0,0\.0,\(vCameraDistance-[0-9.]+\)\/20\.0\);/, () => (n += "uniform float folFadeEnd;", "b.a=b.a*smoothstep(1.0,0.0,(vCameraDistance-folFadeEnd*0.8461538)/(folFadeEnd*0.1538462));"));
        return n ? e.replace("precision highp int;", "precision highp int;" + n) : e;
    };

    var ssaoSamples = (() => {
        const $ = 32;
        const phi = Math.PI * (3 - Math.sqrt(5));
        let out = [];
        for (let s = 0; s < $; s++) {
            let B = (s + 0.5) / $;
            let r = Math.sqrt(1 - B * B);
            let a = phi * s;
            let w = Math.cos(a) * r;
            let y = Math.sin(a) * r;
            let t = s / ($ - 1);
            let scale = 0.1 + 0.9 * t * t;
            out.push(`vec3(${(w * scale).toFixed(4)},${(y * scale).toFixed(4)},${(B * scale).toFixed(4)})`);
        }
        return out.join(",\n");
    })();
    var glslColorLib = `
vec3 srgbToLinear(vec3 c){
    return mix(c / 12.92, pow((max(c, vec3(0.0)) + 0.055) / 1.055, vec3(2.4)), step(vec3(0.04045), c));
}
vec3 linearToSrgb(vec3 c){
    c = max(c, vec3(0.0));
    return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));
}
float luma(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
`;

    var glslToneLib = `
vec3 tmACES(vec3 x){
    const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
    return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}
vec3 tmReinhardJodie(vec3 x){
    float l = luma(x);
    vec3 tv = x / (1.0 + x);
    return clamp(mix(x / (1.0 + l), tv, tv), 0.0, 1.0);
}
vec3 tmNeutral(vec3 color){
    const float startCompression = 0.8 - 0.04;
    const float desaturation = 0.15;
    color = max(color, vec3(0.0));
    float x = min(color.r, min(color.g, color.b));
    float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
    color -= offset;
    float peak = max(color.r, max(color.g, color.b));
    if(peak < startCompression) return color;
    float d = 1.0 - startCompression;
    float newPeak = 1.0 - d * d / (peak + d - startCompression);
    color *= newPeak / peak;
    float g = 1.0 - 1.0 / (desaturation * (peak - newPeak) + 1.0);
    return mix(color, vec3(newPeak), g);
}
vec3 applyTonemap(vec3 c, float mode){
    if(mode < 0.5) return tmNeutral(c);
    if(mode < 1.5) return tmACES(c);
    return tmReinhardJodie(c);
}
vec3 applyGrade(vec3 c, float contrast, float saturation){
    c = max((c - 0.18) * contrast + 0.18, vec3(0.0));
    return max(mix(vec3(luma(c)), c, saturation), vec3(0.0));
}
vec3 applyDither(vec3 c, vec2 fc, float amount){
    float n0 = fract(sin(dot(fc, vec2(12.9898, 78.233))) * 43758.5453);
    float n1 = fract(sin(dot(fc + vec2(37.17, 11.93), vec2(12.9898, 78.233))) * 43758.5453);
    return c + (n0 + n1 - 1.0) * (amount / 255.0);
}
`;

    var tonemapFrag = `#version 300 es
precision highp float;precision highp int;

uniform sampler2D inputA;
uniform float exposure;
uniform float contrast;
uniform float saturation;
uniform float tonemapMode;
uniform float ditherAmount;

in vec2 vUv;
out vec4 fragColor;
${glslColorLib}
${glslToneLib}

void main(){
    vec4 src = texture(inputA, vUv);
    vec3 c = srgbToLinear(src.rgb) * exposure;
    c = applyTonemap(c, tonemapMode);
    c = applyGrade(c, contrast, saturation);
    c = linearToSrgb(c);
    c = applyDither(c, gl_FragCoord.xy, ditherAmount);
    fragColor = vec4(c, src.a);
}`;

    var bloomDownFrag = `#version 300 es
precision highp float;precision highp int;

uniform sampler2D inputA;
uniform sampler2D depthTex;
uniform vec2 texelSize;
uniform float prefilter;
uniform float skyBloom;
uniform vec4 filterCurve;

in vec2 vUv;
out vec4 fragColor;
${glslColorLib}

vec3 fetchSrc(vec2 uv){
    vec3 c = texture(inputA, uv).rgb;
    if(prefilter <= 0.5) return c;
    
    float sky = step(0.9999, texture(depthTex, uv).r);
    return srgbToLinear(c) * mix(1.0, skyBloom, sky);
}

float karisWeight(vec3 c){
    return 1.0 / (1.0 + luma(c));
}

void main(){
    vec2 t = texelSize;

    vec3 a = fetchSrc(vUv + t * vec2(-2.0,  2.0));
    vec3 b = fetchSrc(vUv + t * vec2( 0.0,  2.0));
    vec3 c = fetchSrc(vUv + t * vec2( 2.0,  2.0));
    vec3 d = fetchSrc(vUv + t * vec2(-1.0,  1.0));
    vec3 e = fetchSrc(vUv + t * vec2( 1.0,  1.0));
    vec3 f = fetchSrc(vUv + t * vec2(-2.0,  0.0));
    vec3 g = fetchSrc(vUv);
    vec3 h = fetchSrc(vUv + t * vec2( 2.0,  0.0));
    vec3 i = fetchSrc(vUv + t * vec2(-1.0, -1.0));
    vec3 k = fetchSrc(vUv + t * vec2( 1.0, -1.0));
    vec3 l = fetchSrc(vUv + t * vec2(-2.0, -2.0));
    vec3 m = fetchSrc(vUv + t * vec2( 0.0, -2.0));
    vec3 n = fetchSrc(vUv + t * vec2( 2.0, -2.0));

    vec3 g0 = (d + e + i + k) * 0.25;
    vec3 g1 = (a + b + f + g) * 0.25;
    vec3 g2 = (b + c + g + h) * 0.25;
    vec3 g3 = (f + g + l + m) * 0.25;
    vec3 g4 = (g + h + m + n) * 0.25;

    vec3 result;
    if(prefilter > 0.5){
        float w0 = karisWeight(g0) * 0.5;
        float w1 = karisWeight(g1) * 0.125;
        float w2 = karisWeight(g2) * 0.125;
        float w3 = karisWeight(g3) * 0.125;
        float w4 = karisWeight(g4) * 0.125;
        float wSum = max(w0 + w1 + w2 + w3 + w4, 1e-5);
        result = (g0 * w0 + g1 * w1 + g2 * w2 + g3 * w3 + g4 * w4) / wSum;

        float br = max(result.r, max(result.g, result.b));
        float soft = clamp(br - filterCurve.y, 0.0, filterCurve.z);
        soft = filterCurve.w * soft * soft;
        float contribution = max(soft, br - filterCurve.x) / max(br, 1e-5);
        result *= contribution;
    } else {
        result = g0 * 0.5 + (g1 + g2 + g3 + g4) * 0.125;
    }

    fragColor = vec4(max(result, vec3(0.0)), 1.0);
}`;

    var bloomUpFrag = `#version 300 es
precision highp float;precision highp int;

uniform sampler2D inputA;
uniform vec2 texelSize;
uniform float bloomRadius;

in vec2 vUv;
out vec4 fragColor;

void main(){
    vec2 t = texelSize * bloomRadius;

    vec3 sum = texture(inputA, vUv + vec2(-t.x,  t.y)).rgb;
    sum += texture(inputA, vUv + vec2( 0.0,  t.y)).rgb * 2.0;
    sum += texture(inputA, vUv + vec2( t.x,  t.y)).rgb;
    sum += texture(inputA, vUv + vec2(-t.x,  0.0)).rgb * 2.0;
    sum += texture(inputA, vUv).rgb * 4.0;
    sum += texture(inputA, vUv + vec2( t.x,  0.0)).rgb * 2.0;
    sum += texture(inputA, vUv + vec2(-t.x, -t.y)).rgb;
    sum += texture(inputA, vUv + vec2( 0.0, -t.y)).rgb * 2.0;
    sum += texture(inputA, vUv + vec2( t.x, -t.y)).rgb;

    fragColor = vec4(sum * (1.0 / 16.0), 1.0);
}`;

    var bloomMergeHQFrag = `#version 300 es
precision highp float;precision highp int;

uniform sampler2D inputA;
uniform sampler2D inputB;
uniform float bloomAmount;
uniform float exposure;
uniform float contrast;
uniform float saturation;
uniform float tonemapMode;
uniform float ditherAmount;
uniform float tonemapEnabled;

in vec2 vUv;
out vec4 fragColor;
${glslColorLib}
${glslToneLib}

void main(){
    vec4 src = texture(inputA, vUv);
    vec3 c = srgbToLinear(src.rgb) + texture(inputB, vUv).rgb * bloomAmount;

    if(tonemapEnabled > 0.5){
        c *= exposure;
        c = applyTonemap(c, tonemapMode);
        c = applyGrade(c, contrast, saturation);
    } else {
        c = clamp(c, 0.0, 1.0);
    }

    c = linearToSrgb(c);
    c = applyDither(c, gl_FragCoord.xy, ditherAmount);
    fragColor = vec4(c, src.a);
}`;

    var sharpenFrag = `#version 300 es
precision highp float;precision highp int;

uniform sampler2D inputA;
uniform vec2 texelSize;
uniform float sharpAmount;

in vec2 vUv;
out vec4 fragColor;
${glslColorLib}

void main(){
    vec3 c = texture(inputA, vUv).rgb;
    vec3 n = texture(inputA, vUv + vec2(0.0, -texelSize.y)).rgb;
    vec3 s = texture(inputA, vUv + vec2(0.0,  texelSize.y)).rgb;
    vec3 w = texture(inputA, vUv + vec2(-texelSize.x, 0.0)).rgb;
    vec3 e = texture(inputA, vUv + vec2( texelSize.x, 0.0)).rgb;

    vec3 mn = min(c, min(min(n, s), min(w, e)));
    vec3 mx = max(c, max(max(n, s), max(w, e)));

    vec3 headroom = min(mn, 1.0 - mx) / max(mx, vec3(1e-4));
    vec3 amp = sqrt(clamp(headroom, 0.0, 1.0));
    vec3 wgt = -amp * (sharpAmount * 0.2);
    vec3 rcp = 1.0 / (1.0 + 4.0 * wgt);

    vec3 res = (c + (n + s + w + e) * wgt) * rcp;
    fragColor = vec4(clamp(res, 0.0, 1.0), texture(inputA, vUv).a);
}`;

    var ssaoFrag = `#version 300 es
precision highp float;precision highp int;

uniform Camera{
    mat4 projectionMatrix;
    mat4 viewMatrix;
    mat4 projectionViewMatrix;
    vec3 cameraPosition;
};

uniform Screen{vec2 resolution;};

uniform sampler2D depthTex;
uniform sampler2D inputA;

in vec2 vUv;
out vec4 fragColor;

bool isFoliage(vec2 uv){
    return ${gfe.ssaoIncludeFoliage ? "false" : "texture(inputA, uv).a < 0.02"};
}

const int zr=32;

const vec3 Rs[32]=vec3[32](
${ssaoSamples}
);

float rand(vec2 co){
    return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);
}

vec3 getViewPos(vec2 uv,float depth){
    float z = -projectionMatrix[3][2] /
              (projectionMatrix[2][2] + depth*2.0 - 1.0);

    return vec3(
        (uv*2.0-1.0)*(-z) /
        vec2(projectionMatrix[0][0],projectionMatrix[1][1]),
        z
    );
}

vec3 getNormal(vec2 uv,float depth){
    vec2 texel = 1.0 / resolution;
    float dR = texture(depthTex, uv + vec2(texel.x,0)).r;
    float dL = texture(depthTex, uv - vec2(texel.x,0)).r;
    float dU = texture(depthTex, uv + vec2(0,texel.y)).r;
    float dD = texture(depthTex, uv - vec2(0,texel.y)).r;

    float skyPen = 1e6;
    float ddR = (dR >= 0.9999) ? skyPen : abs(dR - depth);
    float ddL = (dL >= 0.9999) ? skyPen : abs(dL - depth);
    float ddU = (dU >= 0.9999) ? skyPen : abs(dU - depth);
    float ddD = (dD >= 0.9999) ? skyPen : abs(dD - depth);

    vec3 p = getViewPos(uv, depth);
    vec3 dPdx = (ddR < ddL)
        ? (getViewPos(uv + vec2(texel.x,0), dR) - p)
        : (p - getViewPos(uv - vec2(texel.x,0), dL));
    vec3 dPdy = (ddU < ddD)
        ? (getViewPos(uv + vec2(0,texel.y), dU) - p)
        : (p - getViewPos(uv - vec2(0,texel.y), dD));

    return normalize(cross(dPdx, dPdy));
}

void main(){

    float depth = texture(depthTex,vUv).r;

    if(depth >= 0.9999){
        fragColor = vec4(1.0);
        return;
    }

    vec3 pos = getViewPos(vUv, depth);
    vec3 normal = getNormal(vUv, depth);

    ${gfe.ssaoIGN ? `
    float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
    float ang = ign * 6.2831853;

    vec3 up = abs(normal.y) < 0.999 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
    vec3 t0 = normalize(cross(up, normal));
    vec3 b0 = cross(normal, t0);
    float c = cos(ang), s = sin(ang);
    vec3 tangent   = t0 * c + b0 * s;
    vec3 bitangent = cross(normal, tangent);
    mat3 TBN = mat3(tangent, bitangent, normal);
    ` : `
    mat3 invViewRot = transpose(mat3(viewMatrix));
    vec3 wPos = invViewRot * pos + cameraPosition;
    vec2 noiseSeed = floor(wPos.xz * 4.0);
    vec3 randVec = normalize(vec3(
        rand(noiseSeed),
        rand(noiseSeed + 17.0),
        rand(noiseSeed.yx + 3.0)
    ));

    vec3 tangent = normalize(randVec - normal * dot(randVec, normal));
    vec3 bitangent = cross(normal, tangent);
    mat3 TBN = mat3(tangent, bitangent, normal);
    `}

    float radius = clamp(-pos.z * ${ssaoRadiusVal}, 0.25, 5.0);

    {
        float onSurface = 0.0;
        vec3 cardinals[4];
        cardinals[0] = vec3( radius, 0.0, 0.0);
        cardinals[1] = vec3(-radius, 0.0, 0.0);
        cardinals[2] = vec3(0.0,  radius, 0.0);
        cardinals[3] = vec3(0.0, -radius, 0.0);
        for (int ei = 0; ei < 4; ei++) {
            vec4 cp = projectionMatrix * vec4(pos + cardinals[ei], 1.0);
            cp.xyz /= cp.w;
            vec2 cuv = cp.xy * 0.5 + 0.5;
            if (cuv.x < 0.0 || cuv.x > 1.0 || cuv.y < 0.0 || cuv.y > 1.0) continue;
            float cd = texture(depthTex, cuv).r;
            if (cd >= 0.9999) continue;
            vec3 cvp = getViewPos(cuv, cd);
            if (abs(cvp.z - pos.z) < radius * 0.5) onSurface += 1.0;
        }
        radius *= mix(1.0, 1.0, onSurface / 4.0);
    }

    float bias = radius * 0.15;

    float occlusion = 0.0;
    float totalWeight = 0.0;

    for(int i=0;i<zr;i++){

        vec3 sampleVec = TBN * Rs[i];
        vec3 samplePos = pos + sampleVec * radius;

        float cosW = dot(normal, normalize(sampleVec));
        totalWeight += cosW;

        vec4 offset = projectionMatrix * vec4(samplePos,1.0);
        offset.xyz /= offset.w;

        vec2 sampleUV = offset.xy * 0.5 + 0.5;

        if(sampleUV.x < 0.0 || sampleUV.x > 1.0 || sampleUV.y < 0.0 || sampleUV.y > 1.0) continue;

        float sampleDepth = texture(depthTex, sampleUV).r;
        if(sampleDepth >= 0.9999) continue;
        if(isFoliage(sampleUV)) continue;

        vec3 sampleViewPos = getViewPos(sampleUV, sampleDepth);

        float rangeCheck = smoothstep(0.0, 1.0, radius / abs(pos.z - sampleViewPos.z));

        float occ = (sampleViewPos.z >= samplePos.z + bias) ? cosW : 0.0;

        occlusion += occ * rangeCheck;
    }

    occlusion = (totalWeight > 0.001) ? occlusion / totalWeight : 0.0;

    occlusion = 1.0 - occlusion;
    occlusion = pow(occlusion, ${ssaoBiasVal});

    float t = smoothstep(5.0, 60.0, -pos.z);
    t = t * t;
    float occFloor = mix(0.05, 0.5, t);
    occlusion = max(occlusion, occFloor);

    float distFade = 1.0 - smoothstep(20.0, float(${ssaoFadeVal}), -pos.z);
    occlusion = mix(1.0, occlusion, distFade);

    fragColor = vec4(vec3(occlusion), 1.0);
}`;

    var ssaoBlurRadius = gfe.ssaoBlur ? 3 : 0;
    var ssaoBlurWeights = (() => {
        let sigma = Math.max(1, ssaoBlurRadius) * 0.5;
        let x = [];
        for (let s = 0; s <= ssaoBlurRadius; s++) x.push(Math.exp(-(s * s) / (2 * sigma * sigma)));
        return x.map(w => w.toFixed(6));
    })();

    var ssaoBlurFrag = `#version 300 es
precision highp float;precision highp int;

uniform Camera{
    mat4 projectionMatrix;
    mat4 viewMatrix;
    mat4 projectionViewMatrix;
    vec3 cameraPosition;
};
uniform Screen{vec2 resolution;};

uniform sampler2D inputA;
uniform sampler2D depthTex;
uniform int blurStep;

in vec2 vUv;
out vec4 fragColor;

const float classicHalo = 1.0;
const float weight[${ssaoBlurRadius + 1}] = float[${ssaoBlurRadius + 1}](${ssaoBlurWeights.join(', ')});

float linearZ(float depth){
    return -projectionMatrix[3][2] / (projectionMatrix[2][2] + depth * 2.0 - 1.0);
}

void main(){
    vec2 texel = 1.0 / resolution;
    float centerDepth = texture(depthTex, vUv).r;

    if(centerDepth >= 0.9999){
        fragColor = vec4(texture(inputA, vUv).rgb, 1.0);
        return;
    }

    float zCenter = linearZ(centerDepth);
    float sigmaZ = max(0.05, abs(zCenter) * 0.03);
    float invTwoSigmaZSq = 1.0 / (2.0 * sigmaZ * sigmaZ);

    vec3 result = texture(inputA, vUv).rgb * weight[0];
    float wSum = weight[0];

    vec2 step = (blurStep == 0) ? vec2(texel.x, 0.0) : vec2(0.0, texel.y);

    int rEff = classicHalo > 0.5 ? ${ssaoBlurRadius} : int(floor(mix(1.0, float(${ssaoBlurRadius}), smoothstep(5.0, 60.0, abs(zCenter))) + 0.5));

    for(int i = 1; i < ${ssaoBlurRadius + 1}; i++){
        if(i > rEff) break;
        vec2 offset = step * float(i);

        vec2 uvP = vUv + offset;
        float dP = texture(depthTex, uvP).r;
        if(dP < 0.9999){
            float dz = linearZ(dP) - zCenter;
            float w = weight[i] * mix(exp(-dz * dz * invTwoSigmaZSq), 1.0, classicHalo);
            result += texture(inputA, uvP).rgb * w;
            wSum += w;
        }

        vec2 uvN = vUv - offset;
        float dN = texture(depthTex, uvN).r;
        if(dN < 0.9999){
            float dz = linearZ(dN) - zCenter;
            float w = weight[i] * mix(exp(-dz * dz * invTwoSigmaZSq), 1.0, classicHalo);
            result += texture(inputA, uvN).rgb * w;
            wSum += w;
        }
    }

    result /= wSum;

    fragColor = vec4(result, 1.0);
}`;
    var ssaoTemporalFrag = `#version 300 es
precision highp float;precision highp int;

uniform Camera{
    mat4 projectionMatrix;
    mat4 viewMatrix;
    mat4 projectionViewMatrix;
    vec3 cameraPosition;
};

uniform sampler2D inputA;
uniform sampler2D inputB;
uniform sampler2D depthTex;
uniform mat4 prevProjectionViewMatrix;
uniform float blendAlpha;

in vec2 vUv;
out vec4 fragColor;

vec3 viewPos(vec2 uv, float depth){
    float z = -projectionMatrix[3][2] /
              (projectionMatrix[2][2] + depth * 2.0 - 1.0);
    return vec3(
        (uv * 2.0 - 1.0) * (-z) /
        vec2(projectionMatrix[0][0], projectionMatrix[1][1]),
        z
    );
}

void main(){
    float curr = texture(inputA, vUv).r;
    float depth = texture(depthTex, vUv).r;

    if(depth >= 0.9999){
        fragColor = vec4(curr, curr, curr, 1.0);
        return;
    }

    vec3 vp = viewPos(vUv, depth);
    mat3 invViewRot = transpose(mat3(viewMatrix));
    vec3 wp = invViewRot * vp + cameraPosition;

    vec4 prevClip = prevProjectionViewMatrix * vec4(wp, 1.0);
    vec3 prevNDC = prevClip.xyz / prevClip.w;
    vec2 prevUV = prevNDC.xy * 0.5 + 0.5;

    float result = curr;
    if(prevUV.x >= 0.0 && prevUV.x <= 1.0 && prevUV.y >= 0.0 && prevUV.y <= 1.0 && prevClip.w > 0.0){
        float hist = texture(inputB, prevUV).r;
        result = mix(hist, curr, blendAlpha);
    }

    fragColor = vec4(result, result, result, 1.0);
}`;
    var ssaoCompositeFrag = `#version 300 es
precision highp float;precision highp int;

uniform sampler2D inputA;
uniform sampler2D inputB;
uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};
in vec2 vUv;
out vec4 fragColor;

void main(){
    vec3 ao = texture(inputA, vUv).rgb;
    ao = mix(worldlight[1] * 0.2, vec3(1.0), ao.r);
    fragColor = vec4(ao * texture(inputB, vUv).rgb, 1.0);
}`;


    var fireflyVert = `#version 300 es
precision highp float;precision highp int;

uniform Camera{
    mat4 projectionMatrix;
    mat4 viewMatrix;
    mat4 projectionViewMatrix;
    vec3 cameraPosition;
};
uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};

uniform float ffRange;
uniform float ffBaseY;
uniform float ffHeight;
uniform float ffSize;
uniform float ffDrift;

in vec2 corner;
in float fid;

out vec2 vUv;
out float vGlow;
out float vDist;

vec3 hash31(float p){
    vec3 p3 = fract(vec3(p) * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xxy + p3.yzz) * p3.zyx);
}

void main(){
    vec3 h = hash31(fid);
    vec3 h2 = hash31(fid + 71.3);

    vec2 rel = h.xz * ffRange - cameraPosition.xz;
    rel = mod(rel + ffRange * 0.5, ffRange) - ffRange * 0.5;

    float vh = ffHeight * 2.0;
    float relY = mod(h2.y * vh - ffBaseY + vh * 0.5, vh) - vh * 0.5;
    float heightFade = 1.0 - smoothstep(ffHeight * 0.45, ffHeight * 0.95, abs(relY));

    vec3 pos = vec3(cameraPosition.x + rel.x, ffBaseY + relY, cameraPosition.z + rel.y);

    float t = time;
    pos += vec3(
        sin(t * 0.41 + h2.x * 6.2831),
        sin(t * 0.29 + h2.y * 6.2831) * 0.6,
        cos(t * 0.35 + h2.z * 6.2831)
    ) * ffDrift;

    float rate = 0.35 + h2.z * 0.5;
    float blink = sin(t * rate * 6.2831 + h.z * 6.2831) * 0.5 + 0.5;
    blink = pow(blink, 4.0);

    float night = clamp((1.0 - sin(daycycle * 6.28)) * 0.5, 0.0, 1.0);
    night = smoothstep(0.45, 0.9, night);

    vDist = length(pos - cameraPosition);
    float nearFade = smoothstep(1.0, 4.0, vDist);
    float farFade = 1.0 - smoothstep(ffRange * 0.32, ffRange * 0.5, vDist);

    vGlow = blink * night * nearFade * farFade * heightFade * (0.55 + h.x * 0.45);

    if(vGlow <= 0.002){
        gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
        vUv = corner;
        return;
    }

    vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
    vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
    float s = ffSize * (0.7 + h.y * 0.6);

    vUv = corner;
    gl_Position = projectionViewMatrix * vec4(pos + (right * corner.x + up * corner.y) * s, 1.0);
}`;

    var fireflyFrag = `#version 300 es
precision highp float;precision highp int;

uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};

uniform vec3 ffColor;
uniform float ffBrightness;

in vec2 vUv;
in float vGlow;
in float vDist;
out vec4 fragColor;

void main(){
    float d2 = dot(vUv, vUv);
    if(d2 > 1.0) discard;

    float core = exp(-d2 * 9.0);
    float halo = exp(-d2 * 2.0) * 0.32;

    float a = (core + halo) * vGlow * ffBrightness;
    a *= clamp((fog[1][1] - vDist) / max(fog[1][1] - fog[1][0], 0.001), 0.0, 1.0);
    if(a <= 0.002) discard;

    fragColor = vec4(ffColor * a, a);
}`;

    var godRayFrag = `#version 300 es
precision highp float;precision highp int;

precision highp sampler2DShadow;

uniform Camera{
    mat4 projectionMatrix;
    mat4 viewMatrix;
    mat4 projectionViewMatrix;
    vec3 cameraPosition;
};
uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};
uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};
uniform sampler2DShadow shadowMaps[2];

uniform sampler2D inputA;
uniform sampler2D depthTex;
uniform float grIntensity;
uniform float grDistance;
uniform float grPhase;
uniform float grHeight;
uniform float grContrast;
uniform float grDust;
uniform float grGate;
uniform float grRain;

in vec2 vUv;
out vec4 fragColor;

const int grSteps = 48;
const int grStepsFar = 24;
const float grFarStart = 100.0;
const float grNormDist = 90.0;
const float grGateFloor = 0.55;

float grHash(vec3 p){
    p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float grNoise(vec3 p){
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(mix(grHash(i + vec3(0.0, 0.0, 0.0)), grHash(i + vec3(1.0, 0.0, 0.0)), f.x),
            mix(grHash(i + vec3(0.0, 1.0, 0.0)), grHash(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
        mix(mix(grHash(i + vec3(0.0, 0.0, 1.0)), grHash(i + vec3(1.0, 0.0, 1.0)), f.x),
            mix(grHash(i + vec3(0.0, 1.0, 1.0)), grHash(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}

float grDensity(vec3 wp){
    float d = exp(-max(wp.y - cameraPosition.y, 0.0) / max(grHeight, 1.0));
    if(grDust > 0.001){
        vec3 q = wp * 0.055 + vec3(time * 0.03, time * 0.008, time * 0.021);
        d *= mix(1.0, grNoise(q) * 1.7 + 0.15, grDust);
    }
    return d;
}

vec3 getViewPos(vec2 uv, float depth){
    float z = -projectionMatrix[3][2] /
              (projectionMatrix[2][2] + depth * 2.0 - 1.0);
    return vec3(
        (uv * 2.0 - 1.0) * (-z) /
        vec2(projectionMatrix[0][0], projectionMatrix[1][1]),
        z
    );
}

float sunlightAt(vec3 wp, float d){
    if(d >= shadowRange[2]) return 1.0;

    float lit;
    if(d > shadowRange[0]){
        vec4 sc = shadowPVMatrix[1] * vec4(wp, 1.0);
        vec3 sp = (sc.xyz / sc.w) * 0.5 + 0.5;
        if(sp.x < 0.0 || sp.x > 1.0 || sp.y < 0.0 || sp.y > 1.0 || sp.z > 1.0) return 1.0;
        lit = texture(shadowMaps[1], sp);
    } else {
        vec4 sc = shadowPVMatrix[0] * vec4(wp, 1.0);
        vec3 sp = (sc.xyz / sc.w) * 0.5 + 0.5;
        if(sp.x < 0.0 || sp.x > 1.0 || sp.y < 0.0 || sp.y > 1.0 || sp.z > 1.0) return 1.0;
        lit = texture(shadowMaps[0], sp);
    }

    return max(lit, smoothstep(shadowRange[1], shadowRange[2], d));
}

void main(){
    vec4 src = texture(inputA, vUv);
    float depth = texture(depthTex, vUv).r;

    vec3 vp = getViewPos(vUv, depth);
    mat3 invViewRot = transpose(mat3(viewMatrix));
    vec3 ray = (invViewRot * vp + cameraPosition) - cameraPosition;

    float rl = length(ray);
    if(rl < 1e-4){
        fragColor = src;
        return;
    }

    vec3 rd = ray / rl;
    float marchDist = min(rl, grDistance);
    
    float farT = clamp((marchDist - grFarStart) / max(grDistance - grFarStart, 1.0), 0.0, 1.0);
    int steps = int(mix(float(grSteps), float(grStepsFar), farT) + 0.5);
    float stepLen = marchDist / float(steps);

    float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));

    const float grNearSkip = 6.0;
    float lit = 0.0;
    float litSq = 0.0;
    float den = 0.0;
    for(int i = 0; i < steps; i++){
        float t = stepLen * (float(i) + ign) + grNearSkip;
        vec3 sp = cameraPosition + rd * t;
        float d = grDensity(sp);
        float s = sunlightAt(sp, t);
        den += d;
        lit += d * s;
        litSq += d * s * s;
    }

    float litFrac = den > 1e-5 ? clamp(lit / den, 0.0, 1.0) : 0.0;
    float avgDen = den / float(steps);

    float variance = den > 1e-5 ? max(litSq / den - litFrac * litFrac, 0.0) : 0.0;
    float structure = clamp(sqrt(variance) * 2.0, 0.0, 1.0);
    
    float gate = mix(1.0, max(structure, grGateFloor), grGate);

    float cosT = dot(rd, worldlight[2]);
    float g = clamp(grPhase, 0.0, 0.94);
    float gg = g * g;
    float hg = (1.0 - gg) / pow(max(1.0 + gg - 2.0 * g * cosT, 1e-4), 1.5);
    float hgMin = (1.0 - gg) / pow(1.0 + g, 3.0);
    float hgMax = (1.0 - gg) / pow(max(1.0 - g, 1e-3), 3.0);
    float hgN = clamp((hg - hgMin) / max(hgMax - hgMin, 1e-4), 0.0, 1.0);
    float phase = mix(1.0, hgN, g);

    
    float reach = min(marchDist / grNormDist, 1.0);

    float scatter = pow(litFrac, grContrast) * gate * avgDen * phase * grIntensity * reach;

    vec3 lumW = vec3(0.299, 0.587, 0.114);
    vec3 rainCol = fog[0] * (dot(worldlight[0], lumW) / max(dot(fog[0], lumW), 1e-4)) * 0.75;
    fragColor = vec4(src.rgb + mix(worldlight[0], rainCol, grRain) * scatter, src.a);
}`;

    var rainMistFrag = `#version 300 es
precision highp float;precision highp int;

precision highp sampler2DShadow;

uniform Camera{
    mat4 projectionMatrix;
    mat4 viewMatrix;
    mat4 projectionViewMatrix;
    vec3 cameraPosition;
};
uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};
uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};
uniform sampler2DShadow shadowMaps[2];

uniform sampler2D inputA;
uniform sampler2D depthTex;
uniform float mistAmount;
uniform vec2 mistWind;
uniform float mistShadows;

in vec2 vUv;
out vec4 fragColor;

const int mistSteps = 20;
const float mistHaze = 0.0012;
const float mistPeak = 0.075;
const float mistSpeed = 0.3;
const float mistMaxDist = 420.0;
const float mistRestMax = 200.0;
const float mistCloudBase = 160.0;
const float mistCloudThick = 80.0;
const float mistCloudFade = 10.0;
const float mistCoverage = 0.2;
const float mistSoft = 0.5;
const float mistErode = 0.1;
const float mistWarpAmt = 0.6;
const float mistDistFade = 0.9;

float mHash(vec3 p){
    p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float mNoise(vec3 p){
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(mix(mHash(i + vec3(0.0, 0.0, 0.0)), mHash(i + vec3(1.0, 0.0, 0.0)), f.x),
            mix(mHash(i + vec3(0.0, 1.0, 0.0)), mHash(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
        mix(mix(mHash(i + vec3(0.0, 0.0, 1.0)), mHash(i + vec3(1.0, 0.0, 1.0)), f.x),
            mix(mHash(i + vec3(0.0, 1.0, 1.0)), mHash(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}

vec3 mistQ(vec3 wp){
    float mt = time * mistSpeed;
    return (wp - vec3(mistWind.x, 0.0, mistWind.y) * (mt * 2.0)) * vec3(0.025, 0.042, 0.025) + vec3(0.0, mt * 0.03, 0.0);
}

vec2 mistWarp(vec3 q){
    float mt = time * mistSpeed;
    return vec2(
        mNoise(q * 0.5 + vec3(0.0, mt * 0.13, 0.0)),
        mNoise(q * 0.5 + vec3(5.2, mt * 0.11, 9.7))
    ) - 0.5;
}

float mistFbm(vec3 p){
    float f = mNoise(p);
    f += mNoise(p * 2.02 + vec3(1.7, 9.2, 4.3)) * 0.5;
    f += mNoise(p * 4.07 + vec3(8.3, 2.8, 1.1)) * 0.25;
    return f * 0.5714;
}

float mistRound(float n, float layer){
    float s = smoothstep(mistCoverage, mistCoverage + mistSoft, n * mix(mistErode, 1.0, layer));
    return s * s * (3.0 - 2.0 * s);
}

float mistShape(vec3 q, vec2 warp, float layer){
    q.xz += warp * mistWarpAmt;
    return mistRound(mistFbm(q), layer);
}

float mistShapeLite(vec3 q, vec2 warp, float layer){
    q.xz += warp * mistWarpAmt;
    return mistRound((mNoise(q) + mNoise(q * 2.02 + vec3(1.7, 9.2, 4.3)) * 0.5) * 0.6667, layer);
}

float mistDetail(vec3 wp, vec2 warp){
    float mt = time * mistSpeed;
    vec3 wind = vec3(mistWind.x, 0.0, mistWind.y);
    vec3 side = vec3(-mistWind.y, 0.0, mistWind.x);
    vec3 p = (wp - (wind * 3.0 + side * 1.2) * mt) * vec3(0.1, 0.2, 0.1) + vec3(4.1 + warp.x * 2.0, mt * 0.08, 8.3 + warp.y * 2.0);
    return mNoise(p) * 0.65 + mNoise(p * 2.1 + vec3(3.3, 1.1, 7.2)) * 0.35;
}

float mistLayer(vec3 wp){
    float base = cameraPosition.y + mistCloudBase;
    float top = base + mistCloudThick;
    return smoothstep(base, base + mistCloudFade, wp.y) *
           (1.0 - smoothstep(top - mistCloudFade, top, wp.y));
}

vec3 getViewPos(vec2 uv, float depth){
    float z = -projectionMatrix[3][2] /
              (projectionMatrix[2][2] + depth * 2.0 - 1.0);
    return vec3(
        (uv * 2.0 - 1.0) * (-z) /
        vec2(projectionMatrix[0][0], projectionMatrix[1][1]),
        z
    );
}

float sunlightAt(vec3 wp, float d){
    if(d >= shadowRange[2]) return 1.0;

    float lit;
    if(d > shadowRange[0]){
        vec4 sc = shadowPVMatrix[1] * vec4(wp, 1.0);
        vec3 sp = (sc.xyz / sc.w) * 0.5 + 0.5;
        if(sp.x < 0.0 || sp.x > 1.0 || sp.y < 0.0 || sp.y > 1.0 || sp.z > 1.0) return 1.0;
        lit = texture(shadowMaps[1], sp);
    } else {
        vec4 sc = shadowPVMatrix[0] * vec4(wp, 1.0);
        vec3 sp = (sc.xyz / sc.w) * 0.5 + 0.5;
        if(sp.x < 0.0 || sp.x > 1.0 || sp.y < 0.0 || sp.y > 1.0 || sp.z > 1.0) return 1.0;
        lit = texture(shadowMaps[0], sp);
    }

    return max(lit, smoothstep(shadowRange[1], shadowRange[2], d));
}

void main(){
    vec4 src = texture(inputA, vUv);
    float depth = texture(depthTex, vUv).r;

    vec3 ray = transpose(mat3(viewMatrix)) * getViewPos(vUv, depth);
    float rl = length(ray);
    if(rl < 1e-4 || mistAmount < 1e-4){
        fragColor = src;
        return;
    }

    vec3 rd = ray / rl;
    vec3 baseCol = fog[0];

    float t0 = rd.y > 1e-3 ? mistCloudBase / rd.y : rl;
    float t1 = rd.y > 1e-3 ? (mistCloudBase + mistCloudThick) / rd.y : rl;
    float hazeA = 1.0 - exp(-mistHaze * mistAmount * min(min(t0, rl), mistMaxDist + mistRestMax));
    if(t0 >= rl){
        fragColor = vec4(mix(src.rgb, baseCol, hazeA), src.a);
        return;
    }

    float marchDist = min(min(t1, rl) - t0, mistMaxDist);
    float stepLen = marchDist / float(mistSteps);
    float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));

    float cosT = dot(rd, worldlight[2]);
    float phase = 0.5 + 1.2 * pow(max(cosT, 0.0), 6.0);
    vec3 sunCol = worldlight[0] * phase * 0.25;

    float trans = 1.0 - hazeA;
    vec3 inscatter = baseCol * hazeA;
    for(int i = 0; i < mistSteps; i++){
        float t = t0 + stepLen * (float(i) + ign);
        vec3 sp = cameraPosition + rd * t;
        float layer = mistLayer(sp);
        float sigma = mistHaze;
        float shade = 1.0;
        float sun = 1.0;
        vec3 q = mistQ(sp);
        vec2 warp = mistWarp(q);
        float shape = mistShape(q, warp, layer);
        if(shape > 0.01 && layer > 0.01){
            float rim = 1.0 - shape;
            float d = shape * mix(1.0, mix(0.45, 1.0, smoothstep(0.2, 0.8, mistDetail(sp, warp))), rim);
            sigma += mistPeak * d * (1.0 - mistDistFade * smoothstep(120.0, mistMaxDist, t));
            vec3 lp = sp + worldlight[2] * 4.0;
            shade = exp(-mistShapeLite(mistQ(lp), warp, mistLayer(lp)) * mistPeak * 14.0);
            if(mistShadows > 0.5) sun = sunlightAt(sp, t);
        }
        sigma *= mistAmount;
        float a = 1.0 - exp(-sigma * stepLen);
        inscatter += trans * a * (baseCol * mix(0.55, 1.0, shade) + sunCol * sun * shade);
        trans *= 1.0 - a;
        if(trans < 0.01) break;
    }

    float rest = min(rl - t0 - marchDist, mistRestMax);
    if(rest > 0.0){
        float restSigma = (mistHaze + mistPeak * 0.25 * mistLayer(cameraPosition + rd * (t0 + marchDist))) * mistAmount;
        float a = 1.0 - exp(-restSigma * rest);
        inscatter += trans * a * (baseCol + sunCol);
        trans *= 1.0 - a;
    }

    fragColor = vec4(src.rgb * trans + inscatter, src.a);
}`;
    var classicSkyFrag = `#version 300 es

precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};uniform Sky{vec3 skycolors[5];vec3 suncolor;};uniform sampler2D skyDiffuse;uniform float u_rain;in vec2 vUv;in vec3 vPos;out vec4 fragColor;

vec2 chash(vec2 p){p=vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3)));return -1.0+2.0*fract(sin(p)*43758.5453123);}

float cnoise(vec2 p){const float K1=0.366025404;const float K2=0.211324865;vec2 i=floor(p+(p.x+p.y)*K1);vec2 a=p-i+(i.x+i.y)*K2;vec2 o=(a.x>a.y)?vec2(1.0,0.0):vec2(0.0,1.0);vec2 b=a-o+K2;vec2 c=a-1.0+2.0*K2;vec3 h=max(0.5-vec3(dot(a,a),dot(b,b),dot(c,c)),0.0);vec3 n=h*h*h*vec3(dot(a,chash(i)),dot(b,chash(i+o)),dot(c,chash(i+1.0)));return smoothstep(-1.0,1.0,dot(n,vec3(70.0)));}

float cloudTex(vec2 p){float n=0.0;for(int i=1;i<8;++i){float f=float(i);n+=cnoise(p*pow(f,1.2+f*0.05)+vec2(pow(f,3.5)*0.0002,f))/f;}n+=cnoise(p*25.0)/15.0;n+=cnoise(p*40.0)/35.0;n=n/3.0*0.8+0.05;return n;}

void main(){gl_FragDepth=0.999999;vec3 sky=skycolors[1];vec3 dir=normalize(vPos);float cn=dot(worldlight[2],dir);float tf=pow((1.0+cn)*0.5,3.0);vec3 hz=fog[0];float c=pow(clamp((1.0-(0.5+vPos.y))*2.0,0.0,1.0),3.0);float pp=c<0.85?smoothstep(0.85-tf*0.8,0.85,c):1.0-smoothstep(0.85,1.0,c);c=pow(max(c,1e-5),max((1.0-tf)*3.0,1e-3));hz+=worldlight[0]*pp*0.4*tf;vec3 top=mix(sky*0.8,sky,tf);vec3 a=mix(top,hz,c);

float night=1.0-sin(daycycle*6.28)+0.02;vec3 sd=dir*260.0;vec3 si=floor(sd);vec3 sf=fract(sd)-0.5;float sh=fract(sin(dot(si,vec3(127.1,311.7,74.7)))*43758.5453);float st=step(0.982,sh)*smoothstep(0.3,0.05,length(sf))*(0.5+0.5*sin(time*2.0+sh*400.0));a+=vec3(st)*night*clamp(vPos.y*5.0,0.0,1.0)*0.5;

vec2 cp=dir.xz/(max(dir.y,0.0)+0.25)*0.45+vec2(time*0.008,time*0.003);float cl=cloudTex(cp)+sin(daycycle*6.28)*0.04-0.035+u_rain*0.2;float ca=cl<0.17?0.0:smoothstep(0.3,0.6,cl);ca*=smoothstep(0.0,0.3,vPos.y);float sg=pow(max(cn,0.0),6.0)*0.3;a=mix(a,mix(fog[0]+sg+vec3(0.3),fog[0]+sg+vec3(0.1),ca),ca);

fragColor=vec4(a,1.0);}`;
    var classicWaterVert = `#version 300 es

precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};out float vCameraDistance;out vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform Water{vec3 verts[4];};in vec3 position;out vec2 vUv;void main(){vec3 a=mix(verts[0],verts[1],position.x);vec3 b=mix(verts[2],verts[3],position.x);vWorldPos=vec4(mix(a,b,position.z),1.0);vWorldPos.y+=cos(vWorldPos.z*0.25)*sin(vWorldPos.x*0.1+vWorldPos.z*0.4+time*1.2)*0.2;vUv=vWorldPos.xz/2.0;vCameraDistance=length(cameraPosition-vWorldPos.xyz);gl_Position=projectionViewMatrix*vWorldPos;}`;
    var classicSunPatch = s => s.replace("fragColor.rgba=vec4(suncolor,b);", "float sh=clamp(abs(sin(daycycle*6.282))+vUv.y*0.1-0.15,0.0,1.0);fragColor.rgba=vec4(mix(vec3(1.0),fog[0],min(1.0,pow(1.0-sh*sh,100.0))),b);");
    var waterGridCache = null,
        waterGrid = () => {
            if (waterGridCache) return waterGridCache;
            let n = 32,
                pos = [],
                idx = [];
            for (let z = 0; z <= n; ++z)
                for (let x = 0; x <= n; ++x) pos.push(x / n, 0, z / n);
            for (let z = 0; z < n; ++z)
                for (let x = 0; x < n; ++x) {
                    let i = x + z * (n + 1);
                    idx.push(i, i + n + 1, i + 1, i + n + 1, i + n + 2, i + 1);
                }
            return waterGridCache = {
                pos: new Float32Array(pos),
                idx: new Uint32Array(idx)
            };
        };

    var ssaoShader = {
            frag: ssaoFrag
        },
        ssaoBlurShader = {
            frag: ssaoBlurFrag
        },
        ssaoTemporalShader = {
            frag: ssaoTemporalFrag
        },
        ssaoCompositeShader = {
            frag: ssaoCompositeFrag
        };

    const rainDim = 0.5;
    const rainDimScale = 0.7;
    const rainDimDay = 0.55;
    const bloomDayIntensity = 10;
    const bloomNightIntensity = 17;
    const tonemapDayExposure = 55;
    const tonemapNightExposure = 45;
    var bloomAmountVal = bloomDayIntensity / 100,
        tonemapExposureVal = tonemapDayExposure / 100,
        rainFogTint = [0.92, 0.98, 1.1];

    var ssaoFb1, ssaoFb2, ssaoHistA, ssaoHistB, bloomMips = [],
        bloomMipCount = 6,
        bloomMipSize = (t, e) => Math.max(1, Math.ceil(t / (2 << e))),
        createExtraBuffers = (e, n) => {
            ssaoFb1 = ho(e, n, 1, !1), ssaoFb2 = ho(e, n, 1, !1), ssaoHistA = ho(e, n, 1, !1), ssaoHistB = ho(e, n, 1, !1);
            bloomMips.length = 0;
            for (let o = 0; o < bloomMipCount; ++o) bloomMips.push(ho(bloomMipSize(e, o), bloomMipSize(n, o), 1, !1));
        },
        resizeExtraBuffers = (t, e) => {
            In(ssaoFb1, t, e), In(ssaoFb2, t, e), In(ssaoHistA, t, e), In(ssaoHistB, t, e);
            for (let n = 0; n < bloomMips.length; ++n) In(bloomMips[n], bloomMipSize(t, n), bloomMipSize(e, n));
        };

    var ssaoHistIdx = 0,
        ssaoFirstFrame = true,
        ssaoPrevPVMat = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        pfxFullscreen = (t, e) => {
            bindSampler("inputA", oo.colorTexture, 0, K[t]);
            bindSampler("depthTex", oo.depthTexture, 0, K[t]);
            for (let n = 0; n < e.length; ++n) K[t].uniforms[e[n][0]].value = e[n][1];
            ui(_o), Wt(On, K[t]), ia(_o, oo, v.COLOR_BUFFER_BIT);
        },
        pfxToneArgs = () => [
            ["exposure", tonemapExposureVal],
            ["contrast", gfx("tonemapContrast") / 100],
            ["saturation", gfx("tonemapSaturation") / 100],
            ["tonemapMode", gfx("tonemapMode") | 0],
            ["ditherAmount", gfx("tonemapDither") ? 1 : 0]
        ],
        bloomHQChain = t => {
            let e = gfx("bloomThreshold") / 100,
                n = Math.max(1e-4, e * (gfx("bloomKnee") / 100)),
                o = [e, e - n, 2 * n, .25 / n],
                i = t;
            bindSampler("depthTex", oo.depthTexture, 0, K[40]);
            for (let s = 0; s < bloomMips.length; ++s) fn(40, bloomMips[s], i, null, [
                ["texelSize", [1 / i.width, 1 / i.height]],
                ["prefilter", s === 0 ? 1 : 0],
                ["skyBloom", gfx("bloomSky") / 100],
                ["filterCurve", o]
            ]), i = bloomMips[s];
            for (let s = bloomMips.length - 1; s > 0; --s) fn(41, bloomMips[s - 1], bloomMips[s], null, [
                ["texelSize", [1 / bloomMips[s].width, 1 / bloomMips[s].height]],
                ["bloomRadius", gfx("bloomRadius") / 100]
            ]);
            return bloomMips[0];
        },
        ssaoDefersFoliage = () => gfe.ssao && !gfe.ssaoIncludeFoliage,
        postScene = e => {
            if (gfe.ssao) {
                bindSampler("depthTex", oo.depthTexture, 0, K[35]);
                bindSampler("inputA", oo.colorTexture, 0, K[35]);
                ui(ssaoFb1);
                v.clear(v.COLOR_BUFFER_BIT);
                Wt(On, K[35]);

                bindSampler("depthTex", oo.depthTexture, 0, K[36]);
                fn(36, ssaoFb2, ssaoFb1, null, [
                    ["blurStep", 0]
                ]);

                bindSampler("inputA", ssaoFb2.colorTexture, 0, K[36]);
                bindSampler("depthTex", oo.depthTexture, 0, K[36]);
                K[36].uniforms.blurStep.value = 1;
                ui(ssaoFb1);
                Wt(On, K[36]);

                let histPrev = ssaoHistIdx === 0 ? ssaoHistA : ssaoHistB,
                    histNext = ssaoHistIdx === 0 ? ssaoHistB : ssaoHistA;

                bindSampler("inputA", ssaoFb1.colorTexture, 0, K[37]);
                bindSampler("inputB", histPrev.colorTexture, 0, K[37]);
                bindSampler("depthTex", oo.depthTexture, 0, K[37]);
                K[37].uniforms.prevProjectionViewMatrix.value = ssaoPrevPVMat;
                K[37].uniforms.blendAlpha.value = ssaoFirstFrame ? 1.0 : 0.1;
                ui(histNext);
                Wt(On, K[37]);

                bindSampler("inputA", histNext.colorTexture, 0, K[38]);
                bindSampler("inputB", oo.colorTexture, 0, K[38]);
                ui(_o);
                Wt(On, K[38]);
                ia(_o, oo, v.COLOR_BUFFER_BIT);

                if (z1) yo(ssaoPrevPVMat, z1.projectionViewMatrix, 0);
                ssaoHistIdx ^= 1;
                ssaoFirstFrame = false;

                ssaoDefersFoliage() && (ui(oo), Uh(e), qy(e));
            } else {
                ssaoFirstFrame = true;
            }
            let mistRain = window.rainAmount || 0;
            if (mistRain > 0.002) pfxFullscreen(48, [
                ["mistAmount", mistRain],
                ["mistShadows", Ve.shadows ? 1 : 0]
            ]);
            if (gfe.godRays && Ve.shadows) pfxFullscreen(45, [
                ["grRain", mistRain],
                ["grIntensity", gfx("godRaysIntensity") / 100],
                ["grDistance", gfx("godRaysDistance")],
                ["grPhase", gfx("godRaysPhase") / 100],
                ["grHeight", gfx("godRaysHeight")],
                ["grContrast", gfx("godRaysContrast") / 100],
                ["grDust", gfx("godRaysDust") / 100],
                ["grGate", gfx("godRaysGate") / 100]
            ]);
            if (gfe.sharpenAmount > 0) pfxFullscreen(47, [
                ["texelSize", [1 / oo.width, 1 / oo.height]],
                ["sharpAmount", gfe.sharpenAmount / 100]
            ]);
        };

    var fireflyMesh = null,
        fireflyMax = 3e3,
        fireflyPreset = {
            color: "#b6ff5e",
            count: 50,
            range: 160,
            height: 30,
            size: 40,
            drift: 150,
            brightness: 150
        },
        fireflyDraw = () => {
            if (!gfe.cinematicLighting) return;
            let e = K[46];
            if (!e || !e.active) return;
            if (!fireflyMesh) {
                let n = new Float32Array(fireflyMax);
                for (let o = 0; o < fireflyMax; ++o) n[o] = o + 1;
                fireflyMesh = Bt(dt({
                    corner: {
                        size: 2,
                        data: new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1])
                    },
                    fid: {
                        size: 1,
                        data: n,
                        instanced: 1
                    }
                }), 46, v.TRIANGLE_STRIP);
            }
            let n = Ne.camera && Ne.camera.data,
                o = n ? n.cameraPosition[1] - 8 : 0;
            try {
                if (n && ae && ae.getHeight) o = ae.getHeight(n.cameraPosition[0], n.cameraPosition[2]) + 1;
            } catch (i) {}
            fireflyMesh.geometry.instancedCount = Math.max(1, Math.min(fireflyMax, fireflyPreset.count));
            e.uniforms.ffRange.value = fireflyPreset.range;
            e.uniforms.ffBaseY.value = o;
            e.uniforms.ffHeight.value = fireflyPreset.height;
            e.uniforms.ffSize.value = fireflyPreset.size / 100;
            e.uniforms.ffDrift.value = fireflyPreset.drift / 100;
            e.uniforms.ffBrightness.value = fireflyPreset.brightness / 100;
            let s = hexParts(fireflyPreset.color);
            e.uniforms.ffColor.value = [s[0] / 255, s[1] / 255, s[2] / 255];
            Wt(fireflyMesh, e);
        };

    var updateEnvironment = (t, e, o, r, n, i, s) => {
            let _ra = window.rainAmount || 0,
                dayLit = 1 - Math.min(1, Math.max(0, (1 - Math.sin(t * 6.28)) * 0.5)),
                rainDarken = 1 - (1 - (1 - rainDim) * _ra) * (1 - rainDimDay * dayLit * _ra),
                _dm = 1 - rainDarken * rainDimScale,
                a = Ne.environment.data;
            if (_ra > 0)
                for (let k = 0; k < 15; k++) s.skycolors[k] *= _dm;
            if (gfe.simpleSky) Ge.fog = Ge.skymid;
            fo(a.worldlight, 0, Ge.direct[n], Ge.direct[i], r), fo(a.worldlight, 3, Ge.ambient[n], Ge.ambient[i], r), a.worldlight[6] = tn[0], a.worldlight[7] = tn[1], a.worldlight[8] = tn[2];
            if (_ra > 0)
                for (let k = 0; k < 6; k++) a.worldlight[k] *= _dm;
            if (gfe.ambienceTint) {
                let nc = hexParts(gfe.ambienceTintColor),
                    is = gfe.tintSunStrength / 100,
                    tint = (arr, off, count) => {
                        if (!arr || is <= 0) return;
                        for (let k = 0; k < count; ++k) {
                            let c = arr[off + k];
                            arr[off + k] = c + (c * (nc[k % 3] / 255) - c) * is;
                        }
                    };
                tint(a.worldlight, 0, 3);
                gfe.tintSunColor && tint(s.suncolor, 0, 3);
            }
            fo(a.fog, 0, Ge.fog[n], Ge.fog[i], r), a.fog[3] = o > 0 ? -100 : ac, a.fog[4] = o > 0 ? cc : Ht, a.daycycle[0] = t, a.time[0] = e % 3600, K[31].uniforms.amount.value = Rn(r, Ge.bloom[n], Ge.bloom[i]);
            if (_ra > 0) {
                for (let k = 0; k < 3; k++) a.fog[k] *= _dm;
                for (let k = 0; k < 3; k++) a.fog[k] += ((a.worldlight[3 + k] * 1.1 + a.worldlight[k] * 0.15) * rainFogTint[k] - a.fog[k]) * _ra;
                for (let k = 0; k < 3; k++) s.skycolors[9 + k] += (a.fog[k] - s.skycolors[9 + k]) * _ra;
            }
            let night = Math.min(1, Math.max(0, (1 - Math.sin(t * 6.28)) * 0.5));
            bloomAmountVal = (bloomDayIntensity + (bloomNightIntensity - bloomDayIntensity) * night) / 100 * (gfx("bloomIntensity") / 100);
            tonemapExposureVal = (tonemapDayExposure + (tonemapNightExposure - tonemapDayExposure) * night) / 100 * ((gfx("tonemapExposure") + 50 * _ra) / 100);
            K[11] && K[11].uniforms && K[11].uniforms.u_rain && (K[11].uniforms.u_rain.value = _ra);
            K[12] && K[12].uniforms && K[12].uniforms.u_rain && (K[12].uniforms.u_rain.value = _ra);
            K[13] && K[13].uniforms && K[13].uniforms.u_rainAmount && (K[13].uniforms.u_rainAmount.value = _ra);
            K[14] && K[14].uniforms && K[14].uniforms.u_rainAmount && (K[14].uniforms.u_rainAmount.value = _ra);
        },
        timeOfDay = o => {
            if (gfe.timeSlider !== 0) o = gfe.timeSlider / 1000;
            if (gfe.timeToIngame) {
                let now = new Date(),
                    h = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600,
                    nightStart = 0.8735,
                    nightEnd = 0.9139,
                    dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)),
                    season = (Math.cos((2 * Math.PI * (dayOfYear - 172)) / 365.25) + 1) / 2,
                    realNightStart = 17 + (21 - 17) * season,
                    realNightEnd = 7 + (4 - 7) * season;
                if (h >= realNightStart || h < realNightEnd) {
                    let nightLength = (24 - realNightStart) + realNightEnd,
                        t = h >= realNightStart ? (h - realNightStart) / nightLength : (h + 24 - realNightStart) / nightLength;
                    o = nightStart + (nightEnd - nightStart) * t;
                } else {
                    o = (nightEnd + (1 + nightStart - nightEnd) * ((h - realNightEnd) / (realNightStart - realNightEnd))) % 1;
                }
            }
            return o;
        };

    var textureOverrides = new Map,
        meshOverrides = new Map,
        foliageOverrides = new Map,
        embeddedGeometry = new Map,
        litTextures = {},
        derivedGeometryId = 7800,
        dxtSwap4 = [1, 0, 3, 2],
        dxtSwap3 = [1, 0, 2, 3],
        makeColorFilter = o => {
            let l = o.light == null ? null : typeof o.light == "number" ? [o.light, o.light, o.light] : o.light,
                ev = o.exposure || 0,
                dt = o.contrast == null ? 1 : o.contrast,
                bd = o.hue || 0;
            if (!l && !ev && dt === 1 && !bd) return null;
            let gain = Math.pow(2, ev),
                pr = l ? l[0] : 1,
                mg = l ? l[1] : 1,
                hb = l ? l[2] : 1,
                a = bd * Math.PI / 180,
                cs = Math.cos(a),
                dn = Math.sin(a),
                m = bd ? [
                    .299 + .701 * cs + .168 * dn, .587 - .587 * cs + .330 * dn, .114 - .114 * cs - .497 * dn,
                    .299 - .299 * cs - .328 * dn, .587 + .413 * cs + .035 * dn, .114 - .114 * cs + .292 * dn,
                    .299 - .300 * cs + 1.250 * dn, .587 - .588 * cs - 1.050 * dn, .114 + .886 * cs - .203 * dn
                ] : null;
            return c => {
                let r = c[0] * gain,
                    g = c[1] * gain,
                    x = c[2] * gain;
                if (dt !== 1) r = (r - .5) * dt + .5, g = (g - .5) * dt + .5, x = (x - .5) * dt + .5;
                if (m) {
                    let lr = m[0] * r + m[1] * g + m[2] * x,
                        cg = m[3] * r + m[4] * g + m[5] * x,
                        fb = m[6] * r + m[7] * g + m[8] * x;
                    r = lr, g = cg, x = fb;
                }
                return c[0] = r * pr, c[1] = g * mg, c[2] = x * hb, c;
            };
        },
        filterKey = o => [o.light, o.exposure, o.contrast, o.hue].join("/"),
        applyDxtFilter = (buffer, pn) => {
            let head = new Int32Array(buffer, 0, eb),
                dxt3 = head[sb] === cb,
                stride = dxt3 ? 16 : 8,
                cOff = dxt3 ? 8 : 0,
                out = buffer.slice(0),
                x = new Uint8Array(out, head[tb] + 4),
                xx = [0, 0, 0];
            for (let p = 0; p + stride <= x.length; p += stride) {
                let o = p + cOff,
                    was4 = (x[o] | x[o + 1] << 8) > (x[o + 2] | x[o + 3] << 8);
                for (let k = 0; k < 2; ++k) {
                    let j = o + k * 2,
                        c = x[j] | x[j + 1] << 8;
                    xx[0] = (c >> 11 & 31) / 31, xx[1] = (c >> 5 & 63) / 63, xx[2] = (c & 31) / 31;
                    pn(xx);
                    let r = Math.max(0, Math.min(31, Math.round(xx[0] * 31))),
                        g = Math.max(0, Math.min(63, Math.round(xx[1] * 63))),
                        d = Math.max(0, Math.min(31, Math.round(xx[2] * 31))),
                        n = r << 11 | g << 5 | d;
                    x[j] = n & 255, x[j + 1] = n >> 8;
                }
                if (dxt3) continue;
                let d0 = x[o] | x[o + 1] << 8,
                    d1 = x[o + 2] | x[o + 3] << 8;
                if (was4 === d0 > d1) continue;
                if (was4 && d0 === d1) {
                    d1 & 31 ? d1-- : d1 >> 5 & 63 ? d1 -= 32 : d1 >> 11 ? d1 -= 2048 : d0 = 1;
                    x[o] = d0 & 255, x[o + 1] = d0 >> 8, x[o + 2] = d1 & 255, x[o + 3] = d1 >> 8;
                    continue;
                }
                x[o] = d1 & 255, x[o + 1] = d1 >> 8, x[o + 2] = d0 & 255, x[o + 3] = d0 >> 8;
                let map = was4 ? dxtSwap4 : dxtSwap3;
                for (let k = 4; k < 8; ++k) {
                    let x = x[o + k],
                        y = 0;
                    for (let s = 0; s < 8; s += 2) y |= map[x >> s & 3] << s;
                    x[o + k] = y;
                }
            }
            return out;
        },
        tintImage = (t, pn) => {
            let c = document.createElement("canvas");
            c.width = t.width, c.height = t.height;
            let x = c.getContext("2d");
            x.drawImage(t, 0, 0);
            let u = x.getImageData(0, 0, c.width, c.height),
                p = u.data;
            let j = [0, 0, 0];
            for (let i = 0; i < p.length; i += 4) {
                j[0] = p[i] / 255, j[1] = p[i + 1] / 255, j[2] = p[i + 2] / 255, pn(j);
                p[i] = Math.max(0, Math.min(255, Math.round(j[0] * 255))), p[i + 1] = Math.max(0, Math.min(255, Math.round(j[1] * 255))), p[i + 2] = Math.max(0, Math.min(255, Math.round(j[2] * 255)));
            }
            return x.putImageData(u, 0, 0), c;
        },
        cloneGeometry = t => {
            let o = {};
            for (let k in t) o[k] = k === "position" ? {
                size: t[k].size,
                data: new Float32Array(t[k].data)
            } : t[k];
            return o;
        },
        scaleTriple = t => t == null ? [1, 1, 1] : typeof t == "number" ? [t, t, t] : Array.isArray(t) ? t.length === 2 ? [t[0] == null ? 1 : t[0], t[1] == null ? 1 : t[1], t[0] == null ? 1 : t[0]] : [t[0] == null ? 1 : t[0], t[1] == null ? 1 : t[1], t[2] == null ? 1 : t[2]] : [t.x == null ? 1 : t.x, t.y == null ? 1 : t.y, t.z == null ? (t.x == null ? 1 : t.x) : t.z],
        offsetTriple = t => t == null ? [0, 0, 0] : typeof t == "number" ? [0, t, 0] : Array.isArray(t) ? [t[0] || 0, t[1] || 0, t[2] || 0] : [t.x || 0, t.y || 0, t.z || 0],
        transformGeometry = (geo, o) => {
            let p = geo.position.data,
                s = scaleTriple(o.scale),
                fx = s[0],
                my = s[1],
                sz = s[2];
            if (fx !== 1 || my !== 1 || sz !== 1)
                for (let i = 0; i < p.length; i += 3) p[i] *= fx, p[i + 1] *= my, p[i + 2] *= sz;
            let f = offsetTriple(o.offset),
                hx = f[0],
                xy = f[1],
                dz = f[2];
            if (o.ground) {
                let lo = 1 / 0;
                for (let i = 1; i < p.length; i += 3) p[i] < lo && (lo = p[i]);
                lo < 1 / 0 && (xy -= lo);
            }
            if (hx || xy || dz)
                for (let i = 0; i < p.length; i += 3) p[i] += hx, p[i + 1] += xy, p[i + 2] += dz;
            return geo;
        },
        addDerivedGeometry = (from, o) => {
            let lu = derivedGeometryId++;
            return qr.set(lu, {
                ext: 0,
                id: lu,
                type: 1
            }), embeddedGeometry.set(lu, {
                from: from,
                scale: o.scale,
                offset: o.offset,
                ground: o.ground
            }), lu;
        },
        loadMeshGeometry = (t, e) => {
            if (embeddedGeometry.has(t)) {
                let k = "embed:" + t;
                if (sw[k]) return void e(...sw[k]);
                let g = embeddedGeometry.get(t);
                return void qn("data/assets/", D0(g.from), sw, sw, (geo, dec) => {
                    e(...(sw[k] = [transformGeometry(cloneGeometry(geo), g), dec]));
                });
            }
            qn("data/assets/", D0(t), sw, sw, e);
        },
        loadTexture = (t, e) => {
            let ovr = textureOverrides.get(t),
                pn = null,
                fkey = "";
            if (ovr !== void 0) {
                let lu = typeof ovr == "object" ? ovr.id : ovr;
                lu != null && (qr.has(lu) ? t = lu : console.log("texture override " + t + " -> " + lu + " skipped: unknown file id"));
                typeof ovr == "object" && (pn = makeColorFilter(ovr), fkey = filterKey(ovr));
            }
            qr.has(t) || console.log("unknown file id: " + t);
            let o = qr.get(t),
                dds = o.ext === 3 && Ad,
                name = `${t}.${dds ? Bn[o.ext] : Na || Bn[o.ext]}`;
            if (!pn) return void qn("data/assets/", name, tc, dds ? lw : cw, e);
            let key = name + "|" + fkey;
            if (litTextures[key]) return void e(...litTextures[key]);
            if (dds) fetch("data/assets/" + name + "?v=" + assetVersion).then(r => r.arrayBuffer()).then(r => {
                e(...(litTextures[key] = lw(applyDxtFilter(r, pn))));
            });
            else {
                let img = new Image;
                img.onload = () => {
                    e(...(litTextures[key] = cw(tintImage(img, pn)))), img.onload = void 0;
                }, img.src = "data/assets/" + name + "?v=" + assetVersion;
            }
        },
        gridCellFoliage = (base, o) => {
            let g = o.grid || 4,
                s = 1 / g,
                col = o.cell % g,
                row = Math.floor(o.cell / g),
                y0 = col * s,
                C0 = row * s,
                y1 = y0 + s,
                C1 = C0 + s,
                dx = (y0 + y1) / 2,
                c0 = base.nodes && base.nodes[0];
            return {
                id: base.id,
                texture: o.texture == null ? base.texture : o.texture,
                type: o.type == null ? base.type : o.type,
                seed: o.seed == null ? base.seed : o.seed,
                nodes: [{
                    geotype: 0,
                    leafCount: o.leafCount == null ? 2 : o.leafCount,
                    points: [y0, C1, y1, C1, y0, C0, y1, C0],
                    start: [dx, C1],
                    end: [dx, C0],
                    size: o.size == null ? (c0 ? c0.size : 4) : o.size,
                    radius: o.radius || 0,
                    slant: 0,
                    arc: 0,
                    y: o.y || 0,
                    jitter_radius: o.jitter_radius || 0,
                    jitter_rotation: o.jitter_rotation == null ? .4 : o.jitter_rotation,
                    jitter_size: o.jitter_size == null ? .25 : o.jitter_size,
                    jitter_slant: 0,
                    jitter_y: 0
                }]
            };
        },
        applyFoliageOverrides = () => {
            foliageOverrides.forEach((o, lu) => {
                let base = Or.get(lu);
                if (!base) return console.log("foliage override " + lu + ": unknown foliage id");
                if (o.hide) return;
                if (o.texture != null && !qr.has(o.texture)) return console.log("foliage override " + lu + ": unknown texture " + o.texture);
                Or.set(lu, o.cell == null ? Object.assign({}, base, o) : gridCellFoliage(base, o));
            });
        },
        setFoliageSheet = (ids, texture, cells, o) => {
            let hide = o && o.hide != null ? new Set([].concat(o.hide)) : null,
                rest = Object.assign({}, o);
            delete rest.hide;
            for (let i = 0; i < ids.length; ++i) foliageOverrides.set(ids[i], hide && hide.has(ids[i]) ? {
                hide: !0
            } : Object.assign({
                texture: texture,
                cell: cells[i % cells.length]
            }, rest));
        },
        applyMeshOverrides = () => {
            meshOverrides.forEach((o, lu) => {
                let base = bo.get(lu);
                if (!base) return console.log("mesh override " + lu + ": unknown mesh id");
                let next = Object.assign({}, base);
                if (o.mesh != null) {
                    let donor = bo.get(o.mesh);
                    if (!donor) return console.log("mesh override " + lu + ": unknown donor mesh " + o.mesh);
                    next.geometry = donor.geometry, next.texture = donor.texture, next.shader = donor.shader, next.cull = donor.cull, next.shadow = donor.shadow;
                }
                if (o.model != null) {
                    if (qr.has(o.model) && qr.get(o.model).ext === 0) next.geometry = o.model;
                    else if (bo.has(o.model)) next.geometry = bo.get(o.model).geometry;
                    else console.log("mesh override " + lu + ": model " + o.model + " is neither a geometry file nor a mesh id");
                }
                if (o.texture != null) next.texture = !o.texture || qr.has(o.texture) ? o.texture : (console.log("mesh override " + lu + ": unknown texture file " + o.texture + ", keeping " + next.texture), next.texture);
                o.shader != null && (next.shader = o.shader), o.cull != null && (next.cull = o.cull), o.shadow != null && (next.shadow = o.shadow);
                (o.scale != null || o.offset != null || o.ground) && next.geometry && (next.geometry = addDerivedGeometry(next.geometry, o));
                next.geometry !== base.geometry && (next.collisionGeometry = base.collisionGeometry == null ? base.geometry : base.collisionGeometry);
                bo.set(lu, next);
            });
        },
        applyFaivel = () => {
        /* faivel retexture (disabled, replaced by the classic sky mod):
        if (fe.faivelRetexture) {
            textureOverrides.set(2124, {
                id: 2124,
                exposure: 0.08,
                hue: -4.2,
                contrast: 1
            })
            textureOverrides.set(2118, {
                id: 2118,
                exposure: -.2,
                hue: -13.1,
                contrast: .9
            })
            textureOverrides.set(2125, {
                id: 2051,
                exposure: 0,
                hue: -10.4,
                contrast: 1.1
            })
            meshOverrides.set(1662, {
                model: 1482,
                texture: 1224,
                scale: [1.2, 1.4],
                offset: {
                    y: -3
                },
                ground: true
            })
            meshOverrides.set(1663, {
                model: 1482,
                texture: 1224,
                scale: [1.5, 1.7],
                offset: {
                    y: -2
                },
                ground: true
            })
            meshOverrides.set(1664, {
                model: 1482,
                texture: 1224,
                scale: [0.8, 0.8],
                offset: {
                    y: -3
                },
                ground: true
            })
            meshOverrides.set(1661, {
                model: 1482,
                texture: 1224,
                scale: [4.2, 4.3],
                ground: true
            })
            textureOverrides.set(2060, 1229)
            applyMeshOverrides();
            //setFoliageSheet([56, 57, 58, 59, 60, 61, 62, 63], 1213, [13, 5, 6, 7, 15, 4, 0]);
            applyFoliageOverrides();
        }
        */
        };

    var presetTracks = [{"world":{"id":"main","file":"main"},"keys":[{"pos":[4123.79,588.93,3755.63],"rot":[0.3136,5.7459,0]},{"pos":[4114.39,584.64,3773.47],"rot":[0.3416,5.3509,0]},{"pos":[4095.64,575.6,3793.13],"rot":[0.3612,5.6059,0]},{"pos":[4090.99,575.52,3804.42],"rot":[0.1204,6.6459,0]},{"pos":[4098.26,580.85,3820.24],"rot":[-0.042,6.8309,0]},{"pos":[4111.56,586.07,3847.16],"rot":[-0.056,6.7759,0]},{"pos":[4126.62,593.19,3870.49],"rot":[-0.1064,6.6659,0]},{"pos":[4134.44,601.02,3883.84],"rot":[-0.0784,6.5709,0]},{"pos":[4148.37,606.67,3897.32],"rot":[0.1876,6.5159,0]},{"pos":[4158.39,607.5,3907.6],"rot":[0.294,6.1909,0]},{"pos":[4162.62,611.43,3911.38],"rot":[0.476,5.8509,0]},{"pos":[4165.77,616.85,3932.79],"rot":[0.4844,5.9709,0]},{"pos":[4158.47,616.85,3948.43],"rot":[0.3808,6.5459,0]},{"pos":[4151.15,623.09,3975.16],"rot":[0.5152,7.2309,0]},{"pos":[4147.25,628.67,3999.93],"rot":[0.4032,6.5809,0]},{"pos":[4148.57,635.08,4015.95],"rot":[0.3444,6.4059,0]},{"pos":[4145.21,631.53,4035.2],"rot":[0.364,5.7559,0]},{"pos":[4139.34,631.9,4055.19],"rot":[0.3808,6.3159,0]},{"pos":[4132.57,626.43,4068.09],"rot":[0.3388,7.1009,0]},{"pos":[4145.31,637.75,4083.99],"rot":[0.2744,7.0209,0]},{"pos":[4169.95,644.07,4114.3],"rot":[0.14,6.8559,0]},{"pos":[4190.48,637.79,4130.8],"rot":[0.3472,6.4659,0]},{"pos":[4198.93,630.38,4150.91],"rot":[0.5684,6.3059,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[4228.03,548.14,4207.47],"rot":[0.2716,6.0577,0]},{"pos":[4222.96,543.45,4232.39],"rot":[0.2856,5.3777,0]},{"pos":[4222.22,543.6,4255.42],"rot":[0.266,5.7929,0]},{"pos":[4219.98,543.6,4279.94],"rot":[0.3024,5.4777,0]},{"pos":[4202.57,547.17,4295.37],"rot":[0.3024,5.4027,0]},{"pos":[4177.67,546.31,4300.52],"rot":[0.3332,5.8427,0]},{"pos":[4156.29,547.29,4292.22],"rot":[0.3584,5.2677,0]},{"pos":[4138.13,547.74,4282.94],"rot":[0.4004,5.0727,0]},{"pos":[4112.39,547.74,4278.58],"rot":[0.3584,4.5677,0]},{"pos":[4097.08,546.33,4290.06],"rot":[0.4004,4.1827,0]},{"pos":[4069.13,548.1,4284.5],"rot":[0.4116,4.3477,0]},{"pos":[4043.38,554.25,4269.28],"rot":[0.42,5.2027,0]},{"pos":[4017.32,554.29,4263.2],"rot":[0.5208,5.6627,0]},{"pos":[3995.78,554.29,4259.63],"rot":[0.4984,4.9428,0]},{"pos":[3963.48,554.29,4263.78],"rot":[0.5432,3.6679,0]},{"pos":[3942.73,548,4249.85],"rot":[0.448,3.3027,0]},{"pos":[3925.96,541.17,4220.25],"rot":[0.462,4.0327,0]},{"pos":[3911.4,541.17,4204.48],"rot":[0.4032,4.6377,0]},{"pos":[3884.75,541.17,4186.36],"rot":[0.1876,4.9527,0]},{"pos":[3862.43,548.93,4202.47],"rot":[0.1876,4.5777,0]},{"pos":[3839.57,555.87,4223.48],"rot":[0.1399,4.7426,0]},{"pos":[3812.14,562.18,4235.34],"rot":[0.0336,5.0777,0]},{"pos":[3777.4,569.63,4249.39],"rot":[0.0867,4.3878,0]},{"pos":[3755.95,577.1,4249.16],"rot":[-0.0476,4.0177,0]},{"pos":[3720.43,591.19,4246.35],"rot":[0.3332,3.5277,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3659.64,541.04,4363.48],"rot":[0.2716,0.9146,0]},{"pos":[3670.91,541.04,4380.71],"rot":[0.2352,0.2696,0]},{"pos":[3681.21,541.04,4390.11],"rot":[0.2324,0.0696,0]},{"pos":[3687.91,546.12,4401.79],"rot":[0.2492,-0.0454,0]},{"pos":[3684.73,546.32,4412.36],"rot":[0.2212,0.1695,0]},{"pos":[3681.62,546.32,4430.04],"rot":[0.2268,0.4746,0]},{"pos":[3680.84,546.32,4443.79],"rot":[0.182,0.7296,0]},{"pos":[3684.99,549.84,4460.39],"rot":[0.1175,0.8996,0]},{"pos":[3698.72,555.55,4469.47],"rot":[0.168,0.6547,0]},{"pos":[3714.87,555.85,4490.61],"rot":[0.252,1.5245,0]},{"pos":[3734.12,552.68,4493.37],"rot":[0.3416,1.9396,0]},{"pos":[3751.09,552.66,4484.53],"rot":[0.4116,1.7996,0]},{"pos":[3766.92,552.66,4471.96],"rot":[0.4788,1.6996,0]},{"pos":[3782.15,545.2,4457.71],"rot":[0.5264,1.3399,0]},{"pos":[3799.23,533.9,4449.66],"rot":[0.5208,1.3796,0]},{"pos":[3832.55,525.36,4437.52],"rot":[0.4396,1.1096,0]},{"pos":[3848.25,524.88,4446.16],"rot":[0.4032,1.2095,0]},{"pos":[3862.77,524.88,4463.12],"rot":[0.2772,1.6845,0]},{"pos":[3883.82,524.88,4468.01],"rot":[0.2632,2.0195,0]},{"pos":[3902.31,530.53,4478.56],"rot":[0.2408,1.5296,0]},{"pos":[3906.85,538.51,4491.76],"rot":[0.3471,0.8796,0]},{"pos":[3911.93,544.69,4502.19],"rot":[0.3444,-0.1751,0]},{"pos":[3914.27,552.65,4521.59],"rot":[0.1708,-1.5704,0]},{"pos":[3907.58,563.21,4529.94],"rot":[-0.0616,-2.0354,0]},{"pos":[3890.79,571.31,4550.62],"rot":[-0.0924,-2.7305,0]},{"pos":[3876.86,576.04,4547.26],"rot":[-0.1036,-3.4004,0]},{"pos":[3861.3,582.46,4528.33],"rot":[-0.1204,-4.0854,0]},{"pos":[3859.22,587.77,4525.22],"rot":[-0.0896,-4.3304,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[4093.5,508.12,4791.48],"rot":[0.0588,4.2277,0]},{"pos":[4085.29,514.73,4768.98],"rot":[0.1736,4.6227,0]},{"pos":[4067.17,506.87,4763.8],"rot":[0.2856,5.2777,0]},{"pos":[4053.63,506.79,4772.53],"rot":[0.2968,4.7327,0]},{"pos":[4026.04,506.79,4777.33],"rot":[0.1316,4.6977,0]},{"pos":[4014.03,511.18,4782.49],"rot":[-0.0532,4.8578,0]},{"pos":[3999.27,515.48,4789.89],"rot":[-0.0672,4.5477,0]},{"pos":[3973.07,523.42,4804.46],"rot":[0.0812,4.2778,0]},{"pos":[3950.87,523.63,4810.72],"rot":[0.2688,4.2427,0]},{"pos":[3935.3,528.55,4804.31],"rot":[0.126,4.3228,0]},{"pos":[3922.77,534.99,4789.9],"rot":[0.3024,4.4377,0]},{"pos":[3897.83,535.49,4769.75],"rot":[0.3276,4.7177,0]},{"pos":[3870.75,527.77,4751.56],"rot":[0.1008,4.6127,0]},{"pos":[3859.6,535.07,4727.86],"rot":[0.126,4.9877,0]},{"pos":[3833.04,535.07,4717.85],"rot":[0.0084,5.0628,0]},{"pos":[3814.18,540.63,4726.54],"rot":[0.042,4.7278,0]},{"pos":[3798.07,546.79,4740.48],"rot":[0.1316,4.5927,0]},{"pos":[3780.44,547.76,4761.24],"rot":[0.2828,4.1027,0]},{"pos":[3761.52,552.89,4774.52],"rot":[0.0868,3.9678,0]},{"pos":[3751.31,559.49,4776.06],"rot":[0.2632,3.7777,0]},{"pos":[3737.16,559.56,4767.15],"rot":[0.2772,4.1127,0]},{"pos":[3722.88,554.02,4756.59],"rot":[0.2716,3.5727,0]},{"pos":[3707.08,556.81,4761.81],"rot":[0.3276,3.2777,0]},{"pos":[3692.03,561.57,4765.69],"rot":[0.3864,3.0027,0]},{"pos":[3683.46,561.59,4755.93],"rot":[0.0756,2.9777,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3530.92,572.41,4583.12],"rot":[0.4116,5.0028,0]},{"pos":[3509.54,566.96,4603.99],"rot":[0.6354,5.1024,0]},{"pos":[3515.21,555.5,4632.62],"rot":[0.63,5.7127,0]},{"pos":[3501.93,541.56,4657.57],"rot":[0.5236,5.4527,0]},{"pos":[3500.03,541.31,4685.49],"rot":[0.2436,5.3378,0]},{"pos":[3489.46,537.36,4711.55],"rot":[0.2772,4.9028,0]},{"pos":[3475.5,537.36,4723.29],"rot":[0.406,4.4077,0]},{"pos":[3464.19,531.8,4728.2],"rot":[0.2828,3.9378,0]},{"pos":[3448.07,525.49,4721.01],"rot":[0.0952,3.7528,0]},{"pos":[3433.97,525.42,4712.87],"rot":[0.0196,4.0877,0]},{"pos":[3433.58,525.42,4693.53],"rot":[-0.0392,4.2627,0]},{"pos":[3443.16,532.17,4676.81],"rot":[-0.0084,4.2126,0]},{"pos":[3446.58,532.53,4659.37],"rot":[0.098,3.8528,0]},{"pos":[3447.33,537.76,4636.63],"rot":[0.0084,3.5878,0]},{"pos":[3421.12,538.35,4619.4],"rot":[0.0952,3.5577,0]},{"pos":[3416.43,538.35,4589.55],"rot":[-0.0056,4.0077,0]},{"pos":[3409.25,543.59,4568.04],"rot":[0.0336,4.1327,0]},{"pos":[3389.07,547.66,4544.94],"rot":[-0.1792,4.6377,0]},{"pos":[3372.47,560.98,4533.64],"rot":[-0.1904,5.2677,0]},{"pos":[3354.09,581.02,4540.07],"rot":[-0.1597,5.8726,0]},{"pos":[3333.22,587.76,4556.43],"rot":[0.2016,6.3777,0]},{"pos":[3322.68,581.54,4584.87],"rot":[0.6075,6.4877,0]},{"pos":[3325.28,581.34,4609.44],"rot":[0.3808,5.9078,0]},{"pos":[3330.42,587.8,4620.25],"rot":[-0.0728,5.6478,0]},{"pos":[3320.17,596.8,4632.42],"rot":[0.0504,4.8027,0]},{"pos":[3263.03,587.77,4651.49],"rot":[0.3303,3.7617,0]},{"pos":[3237.9,587.75,4641.23],"rot":[0.3304,2.9928,0]},{"pos":[3220.06,591.06,4633.11],"rot":[0.0616,3.577,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3219.35,527.81,4352.57],"rot":[0.322,4.3827,0]},{"pos":[3187.58,523.01,4353.61],"rot":[0.336,3.8127,0]},{"pos":[3172.9,522.86,4353.31],"rot":[0.364,3.4927,0]},{"pos":[3157.41,522.86,4337.52],"rot":[0.3136,3.1978,0]},{"pos":[3163.27,522.86,4325.05],"rot":[0.3052,3.1926,0]},{"pos":[3179.04,528.38,4303.79],"rot":[0.1876,3.4627,0]},{"pos":[3187.18,531,4278.17],"rot":[0.1652,2.2327,0]},{"pos":[3195.4,531.06,4264.54],"rot":[0.2156,1.7727,0]},{"pos":[3204.65,531.06,4252.12],"rot":[0.2268,1.5378,0]},{"pos":[3225.9,537.1,4254.21],"rot":[0.1932,1.8027,0]},{"pos":[3262.15,537.21,4248.78],"rot":[0.0952,1.9177,0]},{"pos":[3285.74,543.75,4249.46],"rot":[0.1036,2.2778,0]},{"pos":[3323.11,544.79,4246.44],"rot":[0.0924,2.3977,0]},{"pos":[3340.01,551.41,4235.42],"rot":[0.1148,2.6178,0]},{"pos":[3348.64,551.5,4212.53],"rot":[0.1904,3.1628,0]},{"pos":[3347.41,551.5,4192.83],"rot":[0.1288,3.4977,0]},{"pos":[3351.98,551.5,4178.4],"rot":[0.098,3.6527,0]},{"pos":[3357.18,551.28,4160.14],"rot":[0.1148,3.9427,0]},{"pos":[3351.93,560.09,4146.65],"rot":[-0.0028,3.9877,0]},{"pos":[3337.91,565.79,4131.4],"rot":[-0.0896,3.5627,0]},{"pos":[3329.4,573.65,4115.94],"rot":[-0.1036,3.1127,0]},{"pos":[3314.71,585.79,4097.99],"rot":[-0.1932,2.6127,0]},{"pos":[3308.03,592.38,4088.6],"rot":[-0.0308,2.2527,0]},{"pos":[3309.34,600.73,4075.68],"rot":[-0.1792,1.9478,0]},{"pos":[3312.83,608.46,4062.62],"rot":[-0.2464,1.5577,0]},{"pos":[3350.09,625.67,4046.97],"rot":[-0.4312,1.5977,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3776.23,554.14,3737.46],"rot":[0.14,2.0677,0]},{"pos":[3797.73,557.28,3735.15],"rot":[0.1064,2.4177,0]},{"pos":[3814.72,565.41,3726.34],"rot":[0.1456,2.5477,0]},{"pos":[3831.38,568.13,3710.05],"rot":[0.3192,2.6477,0]},{"pos":[3839.95,566.85,3696.15],"rot":[0.3332,2.1178,0]},{"pos":[3863.83,569.41,3680.4],"rot":[0.3136,1.6927,0]},{"pos":[3895.5,571.03,3677.89],"rot":[0.322,1.3278,0]},{"pos":[3912.77,570.81,3678.76],"rot":[0.2296,1.6427,0]},{"pos":[3932.34,577.31,3680.14],"rot":[0.2128,2.1676,0]},{"pos":[3953.6,577.44,3675.74],"rot":[0.2408,2.5977,0]},{"pos":[3967.74,577.44,3668.06],"rot":[0.2408,2.9527,0]},{"pos":[3976.19,585.3,3659.81],"rot":[0.2856,3.1777,0]},{"pos":[3984.25,580.29,3631.99],"rot":[0.2968,3.4377,0]},{"pos":[3981.04,579.57,3614.45],"rot":[0.3668,3.6627,0]},{"pos":[3965.19,578.35,3606.43],"rot":[0.3948,3.3877,0]},{"pos":[3950.35,578.34,3593.96],"rot":[0.4032,3.2227,0]},{"pos":[3936.51,572.25,3580.57],"rot":[0.4564,3.3477,0]},{"pos":[3938.36,571.97,3562.39],"rot":[0.4424,3.6827,0]},{"pos":[3950.58,570.02,3538.18],"rot":[0.3416,3.8277,0]},{"pos":[3954.85,570.69,3518.06],"rot":[0.2492,3.8977,0]},{"pos":[3955.95,570.69,3494.52],"rot":[0.126,3.3978,0]},{"pos":[3945.66,577.81,3478.19],"rot":[0.084,3.1877,0]},{"pos":[3943.21,582.75,3456.01],"rot":[0.1232,2.9277,0]},{"pos":[3944.51,589.77,3433.88],"rot":[0.2324,3.0927,0]},{"pos":[3946.28,589.93,3415.8],"rot":[0.3556,3.3077,0]},{"pos":[3956.23,589.94,3402.28],"rot":[0.3836,3.5927,0]},{"pos":[3959.01,589.94,3381.17],"rot":[0.3808,3.7777,0]},{"pos":[3956.51,589.94,3357.74],"rot":[0.3668,4.0127,0]},{"pos":[3945.57,585.21,3341.09],"rot":[0.322,4.1977,0]},{"pos":[3931.94,584.96,3333.62],"rot":[0.3052,4.4127,0]},{"pos":[3918.35,584.96,3330.6],"rot":[0.2716,4.5527,0]},{"pos":[3901.56,584.96,3326.98],"rot":[-0.0196,4.7627,0]},{"pos":[3880.62,584.96,3326.24],"rot":[-0.2212,5.3627,0]},{"pos":[3853.37,590.68,3329.91],"rot":[-0.2492,5.8527,0]},{"pos":[3835.51,597.98,3338.68],"rot":[-0.2912,6.1078,0]},{"pos":[3810.65,603.3,3352.39],"rot":[-0.3304,6.3327,0]},{"pos":[3799.06,611.43,3362.56],"rot":[-0.3444,6.3177,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[4255.85,529.49,3296.64],"rot":[0.1736,0.5045,0]},{"pos":[4284.76,529.6,3313.01],"rot":[0.1232,0.3096,0]},{"pos":[4290.23,529.6,3339.99],"rot":[0.1092,0.6646,0]},{"pos":[4291.89,529.6,3357.74],"rot":[0.1288,0.9095,0]},{"pos":[4291.48,529.6,3369.59],"rot":[0.112,0.9795,0]},{"pos":[4294.16,529.6,3385.82],"rot":[0.1316,1.1446,0]},{"pos":[4297.54,535.25,3397.76],"rot":[0.1372,1.2195,0]},{"pos":[4309.28,535.66,3409.38],"rot":[0.1848,1.2896,0]},{"pos":[4319.99,541,3420.15],"rot":[0.224,1.4046,0]},{"pos":[4335.9,547.21,3423.81],"rot":[0.1736,1.0646,0]},{"pos":[4350.22,547.62,3421.8],"rot":[0.2044,0.8696,0]},{"pos":[4363.99,547.63,3421.28],"rot":[0.3332,0.6496,0]},{"pos":[4390.18,542.88,3426.67],"rot":[0.3248,0.3546,0]},{"pos":[4400.02,542.53,3439.17],"rot":[0.2744,0.1646,0]},{"pos":[4408.47,542.52,3456.37],"rot":[0.294,0.3445,0]},{"pos":[4405.96,542.52,3476.37],"rot":[0.2968,0.6245,0]},{"pos":[4405.65,542.52,3499.03],"rot":[0.2576,0.7446,0]},{"pos":[4407.98,536.37,3521.05],"rot":[0.1932,1.1345,0]},{"pos":[4417.31,530.82,3539.8],"rot":[0.1652,1.2996,0]},{"pos":[4432.06,530.57,3552.1],"rot":[0.084,1.1746,0]},{"pos":[4453.3,530.56,3557.17],"rot":[0.1148,0.4796,0]},{"pos":[4474.4,530.56,3560.56],"rot":[0.1651,0.5446,0]},{"pos":[4490.33,530.56,3561.26],"rot":[0.21,0.8645,0]},{"pos":[4510.08,530.56,3557.27],"rot":[0.1792,1.0395,0]},{"pos":[4526.62,530.56,3556.96],"rot":[0.168,1.3945,0]},{"pos":[4545.46,530.56,3565.38],"rot":[0.1596,1.6496,0]},{"pos":[4561.16,536.78,3572.73],"rot":[0.0868,1.7996,0]},{"pos":[4584.82,543.96,3578.03],"rot":[-0.1148,1.4646,0]},{"pos":[4601.26,549.85,3586.26],"rot":[0.0672,0.8446,0]},{"pos":[4616.64,554.98,3587.81],"rot":[0.1512,0.1846,0]},{"pos":[4630.17,560.83,3598.94],"rot":[0.1036,-0.2004,0]},{"pos":[4639.34,568.53,3616.35],"rot":[-0.0056,-0.5204,0]},{"pos":[4646.15,575.92,3634.21],"rot":[-0.1092,-0.7054,0]},{"pos":[4642.13,584.91,3672.89],"rot":[-0.1176,-1.2304,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[4592.86,528.3,4007.23],"rot":[0.1624,0.5796,0]},{"pos":[4616.01,529.87,4007.06],"rot":[0.1652,0.4346,0]},{"pos":[4622.17,529.68,4020.82],"rot":[0.154,0.5645,0]},{"pos":[4630.7,529.68,4040.27],"rot":[0.14,0.8896,0]},{"pos":[4630.77,529.68,4051.13],"rot":[0.1708,0.9845,0]},{"pos":[4633.37,534,4061.99],"rot":[0.1904,1.1395,0]},{"pos":[4638.18,534.44,4077.39],"rot":[0.28,1.1795,0]},{"pos":[4657.36,534.45,4084.33],"rot":[0.3416,1.0896,0]},{"pos":[4681.4,534.45,4092.59],"rot":[0.322,0.9895,0]},{"pos":[4699.7,530.67,4096.48],"rot":[0.2716,0.5496,0]},{"pos":[4711.7,530.49,4100.95],"rot":[0.196,0.2646,0]},{"pos":[4724.41,525.8,4109.53],"rot":[0.1092,0.0396,0]},{"pos":[4739.81,527.93,4122.65],"rot":[0.0224,-0.3304,0]},{"pos":[4747.09,532.96,4137.56],"rot":[0.0336,-0.4404,0]},{"pos":[4746.71,540.07,4152.73],"rot":[-0.0784,-0.4955,0]},{"pos":[4732.24,547.18,4163.92],"rot":[0.0083,-0.2204,0]},{"pos":[4717.92,549.3,4183.95],"rot":[0.1176,-0.0705,0]},{"pos":[4706.4,550.23,4197.96],"rot":[-0.0056,0.0646,0]},{"pos":[4698.55,557.84,4210.01],"rot":[0.0224,0.0296,0]},{"pos":[4703.18,557.85,4224.68],"rot":[0.0224,-0.3654,0]},{"pos":[4704.64,564.63,4240.17],"rot":[-0.0252,-0.8104,0]},{"pos":[4694.81,571.72,4256.28],"rot":[-0.0756,-0.5755,0]},{"pos":[4680.76,579.1,4269.02],"rot":[-0.1876,0.0246,0]},{"pos":[4684.56,591.33,4286.44],"rot":[-0.3136,0.3245,0]},{"pos":[4682.8,600.96,4300.63],"rot":[-0.3472,0.4896,0]},{"pos":[4678.29,607.54,4311.68],"rot":[-0.5096,0.4196,0]},{"pos":[4675.53,619.26,4322.04],"rot":[-0.6496,0.0646,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[4683.86,526.77,4525.72],"rot":[0.1652,1.0496,0]},{"pos":[4702.61,533.59,4528.97],"rot":[0.1876,0.6596,0]},{"pos":[4720.9,529.49,4534.06],"rot":[0.1484,0.4696,0]},{"pos":[4727.7,528.84,4547.86],"rot":[0.1456,0.5744,0]},{"pos":[4729.09,528.83,4559.52],"rot":[0.1959,0.7197,0]},{"pos":[4736.09,528.83,4568.55],"rot":[0.168,0.6248,0]},{"pos":[4748.65,528.83,4576.81],"rot":[0.1456,0.1349,0]},{"pos":[4755.35,530.01,4591.07],"rot":[0.154,-0.1504,0]},{"pos":[4752.14,535.44,4600.27],"rot":[0.1008,-0.0459,0]},{"pos":[4749.55,536.04,4619.41],"rot":[0.1315,-0.4401,0]},{"pos":[4749.46,541.86,4635],"rot":[0.2041,-1.034,0]},{"pos":[4739.73,537.93,4651.52],"rot":[0.1932,-1.4851,0]},{"pos":[4719.96,537.5,4658.36],"rot":[0.154,-2.0205,0]},{"pos":[4704.17,543.23,4652.43],"rot":[0.1148,-1.4406,0]},{"pos":[4680.61,545.41,4640.51],"rot":[0.0476,-0.9655,0]},{"pos":[4665.08,550.8,4637],"rot":[0.0336,-1.0303,0]},{"pos":[4647.02,557.22,4634.53],"rot":[-0.0084,-0.9654,0]},{"pos":[4624.2,564,4634.66],"rot":[-0.0112,-0.7606,0]},{"pos":[4608.54,570.13,4638.32],"rot":[0,-0.5205,0]},{"pos":[4587.79,575.61,4647.3],"rot":[0.1204,-0.3504,0]},{"pos":[4576.04,580.65,4656.01],"rot":[-0.0811,-0.0855,0]},{"pos":[4570.24,584.9,4665.83],"rot":[-0.1708,-0.2104,0]},{"pos":[4567.84,592.49,4680.01],"rot":[-0.2016,-0.6354,0]},{"pos":[4567.96,598.44,4690],"rot":[-0.266,-1.0153,0]},{"pos":[4551.86,604.03,4710.77],"rot":[-0.2884,-1.1803,0]},{"pos":[4543.42,611.48,4720.26],"rot":[-0.2688,-1.4704,0]},{"pos":[4523.86,629.37,4730.94],"rot":[-0.224,-1.7154,0]},{"pos":[4507.8,637.74,4724.9],"rot":[-0.1456,-1.5955,0]},{"pos":[4492.24,657.96,4714.02],"rot":[-0.1792,-1.4454,0]},{"pos":[4471.06,677.82,4706.08],"rot":[-0.0252,-1.3354,0]},{"pos":[4454.76,692.12,4715.14],"rot":[0.1652,-1.7604,0]},{"pos":[4439.18,706.77,4723.8],"rot":[0.1932,-2.0104,0]},{"pos":[4418.72,716.96,4737.78],"rot":[0.434,-2.0804,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[4636.2,548.15,5048.03],"rot":[0.3108,0.6846,0]},{"pos":[4648.15,549.54,5061.6],"rot":[0.2856,0.9646,0]},{"pos":[4671.29,549.26,5061.53],"rot":[0.1316,1.0545,0]},{"pos":[4688.83,555.99,5066.97],"rot":[0.0336,1.1745,0]},{"pos":[4712.17,556.56,5073.94],"rot":[0.0644,1.6145,0]},{"pos":[4723.4,556.57,5085.84],"rot":[0.0057,1.5143,0]},{"pos":[4744.99,556.57,5090.8],"rot":[-0.0028,1.9895,0]},{"pos":[4762.39,556.57,5088.63],"rot":[-0.0644,2.3145,0]},{"pos":[4770.36,564.31,5075.89],"rot":[-0.0897,2.4396,0]},{"pos":[4781.1,564.94,5064.96],"rot":[-0.0364,1.8757,0]},{"pos":[4788.33,564.95,5054.14],"rot":[-0.0588,1.6796,0]},{"pos":[4799.96,564.96,5039.74],"rot":[0.0308,1.4696,0]},{"pos":[4810.24,570.42,5033.77],"rot":[0.0308,1.3247,0]},{"pos":[4828.58,573.64,5028.29],"rot":[-0.0196,1.2346,0]},{"pos":[4842.37,577.87,5027.12],"rot":[-0.0056,1.4394,0]},{"pos":[4861.08,578.39,5029.54],"rot":[-0.0251,1.4053,0]},{"pos":[4877.68,583.14,5030.09],"rot":[-0.0028,1.5845,0]},{"pos":[4894.05,583.33,5034.51],"rot":[-0.042,1.7595,0]},{"pos":[4913.52,587.15,5035.3],"rot":[-0.0448,2.0646,0]},{"pos":[4925.45,585.6,5032.11],"rot":[0.0504,2.0496,0]},{"pos":[4932.79,589.64,5035.34],"rot":[0.0504,2.0496,0]},{"pos":[4941.9,596.19,5032.79],"rot":[0.0588,1.82,0]},{"pos":[4953.58,599.73,5023.87],"rot":[0.0532,1.6046,0]},{"pos":[4961.83,605.35,5016.6],"rot":[0.0532,1.6046,0]},{"pos":[4981.16,607.97,5006.94],"rot":[0.2296,1.8546,0]},{"pos":[4988.03,607.97,4994.77],"rot":[0.1932,1.5747,0]},{"pos":[5001.55,609.78,4989.1],"rot":[0.0756,1.7246,0]},{"pos":[5013.81,609.8,4992.44],"rot":[0.1232,1.8696,0]},{"pos":[5027.03,606.51,4994.29],"rot":[0.1428,2.1645,0]},{"pos":[5040.76,600.14,4996.69],"rot":[0.126,2.3046,0]},{"pos":[5062.15,598.34,4989.27],"rot":[0.14,2.4796,0]},{"pos":[5071.78,597.75,4985.5],"rot":[0.0308,2.6795,0]},{"pos":[5083.92,593.04,4974.8],"rot":[-0.0084,2.5746,0]},{"pos":[5088.66,593.5,4950.2],"rot":[0.098,1.7796,0]},{"pos":[5094.46,595.91,4948.93],"rot":[-0.112,2.0245,0]},{"pos":[5099.81,599.42,4946.34],"rot":[-0.2212,2.1896,0]},{"pos":[5106.3,596.22,4941.53],"rot":[-0.2716,2.2096,0]},{"pos":[5113,589.89,4936.99],"rot":[-0.0644,2.1496,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3212.59,523.83,1328.75],"rot":[0.0336,1.2718,0]},{"pos":[3230.43,523.83,1327.79],"rot":[-0.1568,0.3868,0]},{"pos":[3238.13,523.83,1336.25],"rot":[0.1764,-0.1032,0]},{"pos":[3240.11,520.94,1367.04],"rot":[0.3416,-0.4532,0]},{"pos":[3220.49,520.91,1388.49],"rot":[0.364,-0.5082,0]},{"pos":[3206.4,525.7,1395.28],"rot":[0.1848,0.1368,0]},{"pos":[3191.91,525.71,1412.75],"rot":[0.126,0.7568,0]},{"pos":[3204,528.21,1439.43],"rot":[0.1232,0.7268,0]},{"pos":[3214.55,528.26,1441.43],"rot":[-0.0784,0.3268,0]},{"pos":[3224.55,528.26,1450.51],"rot":[-0.1232,-0.0882,0]},{"pos":[3231.44,531.35,1465.62],"rot":[0.1148,-0.1632,0]},{"pos":[3229.18,531.43,1495],"rot":[0.3248,-0.0132,0]},{"pos":[3225.61,526.82,1527.07],"rot":[0.308,0.0368,0]},{"pos":[3228.39,522.65,1544.75],"rot":[0.3388,0.1368,0]},{"pos":[3225.19,524.28,1564.31],"rot":[0.0084,0.5918,0]},{"pos":[3216.54,524.29,1578.11],"rot":[-0.098,0.6818,0]},{"pos":[3230.02,519.5,1617.6],"rot":[0.084,-0.3982,0]},{"pos":[3216.57,519.46,1663.26],"rot":[0.2296,-0.5982,0]},{"pos":[3191.62,519.46,1692.29],"rot":[0.1148,-0.2132,0]},{"pos":[3179.18,519.46,1703.39],"rot":[-0.0868,0.6318,0]},{"pos":[3173.62,519.87,1712.19],"rot":[-0.0364,0.8018,0]},{"pos":[3172.74,519.84,1728.56],"rot":[-0.056,1.3368,0]},{"pos":[3190.98,522.09,1755.97],"rot":[0.0448,1.1767,0]},{"pos":[3214.72,527.34,1777.17],"rot":[0.1428,1.6468,0]},{"pos":[3251.52,531.55,1779.64],"rot":[-0.0308,3.3018,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3131.02,516.6,2187.73],"rot":[0.2436,4.4918,0]},{"pos":[3117.36,515.12,2194.29],"rot":[0.2044,4.0768,0]},{"pos":[3097.3,511.15,2189.22],"rot":[0.2436,3.7668,0]},{"pos":[3074.36,511.13,2174.58],"rot":[0.2156,3.9668,0]},{"pos":[3041.74,511.51,2144.76],"rot":[0.2884,3.8468,0]},{"pos":[3024.85,511.44,2097.07],"rot":[0.1904,4.4218,0]},{"pos":[3008.75,511.44,2077.43],"rot":[0.1876,4.7268,0]},{"pos":[2990.93,506.52,2066.58],"rot":[0.1288,4.7768,0]},{"pos":[2968.64,506.49,2055.61],"rot":[-0.0672,4.9767,0]},{"pos":[2932.83,506.49,2048.52],"rot":[-0.1764,5.2568,0]},{"pos":[2900.72,509.46,2067.22],"rot":[0.0112,5.1468,0]},{"pos":[2835.29,523.3,2095.79],"rot":[-0.0896,5.0218,0]},{"pos":[2787.89,539.29,2111.01],"rot":[0.0728,4.4368,0]},{"pos":[2770.85,542.81,2109.37],"rot":[0.3752,3.6818,0]},{"pos":[2745.08,545.24,2102.17],"rot":[0.3948,3.3518,0]},{"pos":[2724.53,530.78,2065.62],"rot":[0.364,3.4668,0]},{"pos":[2717.16,523.77,2035.98],"rot":[0.3164,4.0168,0]},{"pos":[2691.34,520.1,2020.17],"rot":[0.2772,4.8668,0]},{"pos":[2669.36,513.73,2012.27],"rot":[0.0924,5.2118,0]},{"pos":[2650.42,513.72,2008.73],"rot":[-0.0504,5.4968,0]},{"pos":[2621.53,513.72,2014.53],"rot":[-0.112,5.7018,0]},{"pos":[2594.07,520.65,2021.73],"rot":[-0.0308,5.8468,0]},{"pos":[2578.77,526.98,2029.39],"rot":[-0.0952,6.1368,0]},{"pos":[2572.23,531.94,2044.46],"rot":[-0.14,6.3368,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[2963.9,511.03,2445.62],"rot":[0.1904,4.4718,0]},{"pos":[2946.84,516.09,2427.64],"rot":[-0.056,4.8718,0]},{"pos":[2925.1,520.72,2416.94],"rot":[-0.0784,5.1618,0]},{"pos":[2890.76,520.72,2420.57],"rot":[0.1512,5.2018,0]},{"pos":[2837.55,521.69,2440.22],"rot":[0.3248,5.8817,0]},{"pos":[2808.07,516.74,2465.44],"rot":[0.0756,6.5618,0]},{"pos":[2801.44,517.62,2487.67],"rot":[-0.0784,7.0268,0]},{"pos":[2804.46,517.59,2507.28],"rot":[-0.1736,7.1968,0]},{"pos":[2809.77,517.59,2517.37],"rot":[-0.2072,6.8968,0]},{"pos":[2824.7,517.59,2525.15],"rot":[-0.3164,6.1968,0]},{"pos":[2833.7,517.59,2538.77],"rot":[0.042,6.0518,0]},{"pos":[2839.95,517.59,2560.8],"rot":[0.1988,5.972,0]},{"pos":[2838.1,517.59,2582.6],"rot":[0.2744,5.8518,0]},{"pos":[2827.62,517.59,2602.86],"rot":[0.2548,5.7967,0]},{"pos":[2809.85,517.59,2627.93],"rot":[0.1456,6.1718,0]},{"pos":[2806.51,517.59,2654.72],"rot":[0.0392,6.4168,0]},{"pos":[2793.04,523.48,2689.31],"rot":[-0.3052,6.7268,0]},{"pos":[2782.36,535.06,2718.42],"rot":[-0.3444,6.9017,0]},{"pos":[2783.2,556.87,2767.88],"rot":[-0.2856,7.0868,0]},{"pos":[2786.19,576.31,2791.23],"rot":[-0.1624,7.2018,0]},{"pos":[2797.2,612.44,2832.51],"rot":[0.0027,7.3167,0]},{"pos":[2804.8,639.42,2863.44],"rot":[0.07,7.3017,0]},{"pos":[2816.88,663.79,2898.65],"rot":[0.1008,7.3568,0]},{"pos":[2832.78,674.68,2936.7],"rot":[0.1092,7.4366,0]},{"pos":[2850.86,684.01,2970.27],"rot":[0.1176,7.4618,0]},{"pos":[2908.68,693.75,3019.03],"rot":[-0.0755,7.3668,0]},{"pos":[2946.63,709.17,3031.05],"rot":[-0.0308,7.0519,0]},{"pos":[2972.17,719.17,3043.26],"rot":[0.0644,6.6718,0]},{"pos":[2998.79,725.78,3058.53],"rot":[0.2212,6.6018,0]},{"pos":[3023.96,722.78,3076.17],"rot":[0.3584,6.6865,0]},{"pos":[3041.8,722.35,3091.24],"rot":[0.2968,6.2018,0]},{"pos":[3048.28,722.35,3095.75],"rot":[-0.0224,6.2568,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3153.8,674.63,3097.84],"rot":[0.0616,5.9568,0]},{"pos":[3149.64,677.6,3119.57],"rot":[0.098,5.8668,0]},{"pos":[3137.23,677.82,3144.94],"rot":[0.1176,5.7968,0]},{"pos":[3118.61,677.82,3167.56],"rot":[0.1288,5.9967,0]},{"pos":[3104.15,680.85,3178.74],"rot":[0.0868,6.2068,0]},{"pos":[3088.71,681.38,3194.14],"rot":[0.0812,6.3968,0]},{"pos":[3081.12,681.38,3212.3],"rot":[0.14,6.3168,0]},{"pos":[3082.22,681.38,3232],"rot":[0.1708,6.2718,0]},{"pos":[3084.7,681.38,3257.31],"rot":[0.1764,6.2568,0]},{"pos":[3084.18,681.38,3288.43],"rot":[0.0504,6.2618,0]},{"pos":[3079,684.83,3297.54],"rot":[-0.0588,6.3718,0]},{"pos":[3079.44,684.87,3308.99],"rot":[-0.1008,6.2718,0]},{"pos":[3077.67,684.87,3353.22],"rot":[-0.0784,6.2518,0]},{"pos":[3073.43,686.62,3396.12],"rot":[-0.0392,6.2518,0]},{"pos":[3069.92,686.67,3431.21],"rot":[-0.0952,6.2718,0]},{"pos":[3069.57,677.85,3464.17],"rot":[-0.098,6.2768,0]},{"pos":[3067.5,672.89,3489.43],"rot":[-0.1232,6.3618,0]},{"pos":[3059.71,669.73,3495.15],"rot":[0.0728,6.6168,0]},{"pos":[3055.16,669.85,3501.73],"rot":[-0.028,6.5118,0]},{"pos":[3051.03,669.85,3503.49],"rot":[-0.1092,6.6318,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3171.69,620.75,3284.09],"rot":[0.1736,2.5418,0]},{"pos":[3180.52,622.25,3259.75],"rot":[0.0224,2.1718,0]},{"pos":[3194.23,622.21,3229.16],"rot":[-0.0699,2.5767,0]},{"pos":[3209.65,622.86,3206.48],"rot":[-0.1372,3.1067,0]},{"pos":[3229.89,628.85,3161.14],"rot":[-0.154,3.2468,0]},{"pos":[3227.77,633.53,3132.36],"rot":[-0.0056,3.1918,0]},{"pos":[3223.85,640.26,3089.64],"rot":[0.1288,3.0468,0]},{"pos":[3222.31,644.8,3063.94],"rot":[0.1652,2.8418,0]},{"pos":[3217.93,647.56,3027.81],"rot":[0.2128,2.6768,0]},{"pos":[3226.28,647.71,3014.4],"rot":[0.2884,2.7517,0]},{"pos":[3238.85,647.71,3005.64],"rot":[0.4004,2.8968,0]},{"pos":[3251.89,645.2,2994.22],"rot":[0.392,3.0217,0]},{"pos":[3264.68,630.27,2985.68],"rot":[0.3668,3.3168,0]},{"pos":[3280.89,618.74,2973.09],"rot":[0.3024,3.4318,0]},{"pos":[3291.65,611.41,2957.65],"rot":[0.2632,3.5268,0]},{"pos":[3293.2,596.03,2926.39],"rot":[0.3612,3.6268,0]},{"pos":[3285.1,595.84,2905.17],"rot":[0.4004,3.4368,0]},{"pos":[3273.21,592.09,2880.85],"rot":[0.518,3.0718,0]},{"pos":[3252.15,576.94,2836.67],"rot":[0.3948,2.8218,0]},{"pos":[3246.78,570.83,2808.76],"rot":[0.2156,2.6068,0]},{"pos":[3249.87,564.97,2783.78],"rot":[0.0392,2.4018,0]},{"pos":[3261.57,564.89,2755.23],"rot":[0.0028,2.1268,0]},{"pos":[3278.58,564.89,2741.92],"rot":[-0.0588,2.0318,0]},{"pos":[3300.56,564.89,2738.19],"rot":[-0.1092,2.2217,0]},{"pos":[3320.25,564.89,2733.19],"rot":[-0.1904,2.3268,0]},{"pos":[3345.27,564.89,2735.27],"rot":[-0.2464,2.6167,0]},{"pos":[3367.35,566.68,2724.85],"rot":[-0.2688,2.9067,0]},{"pos":[3381.19,571.25,2713.25],"rot":[-0.2744,3.1568,0]},{"pos":[3398.83,578.61,2668.01],"rot":[-0.0868,3.2268,0]},{"pos":[3394.95,569.32,2642.37],"rot":[0.2295,3.4716,0]},{"pos":[3383.49,562.65,2632.11],"rot":[0.4479,4.0115,0]},{"pos":[3365.82,562.24,2615.52],"rot":[0.0392,4.5568,0]},{"pos":[3355.11,568.62,2611.98],"rot":[-0.3472,5.1868,0]},{"pos":[3341.25,587.54,2622.05],"rot":[-0.4368,5.4718,0]},{"pos":[3325.36,606.44,2635.8],"rot":[-0.3108,4.7618,0]},{"pos":[3387.22,562.44,2612.89],"rot":[0.1344,2.9068,0]},{"pos":[3397.8,561.55,2593.01],"rot":[0.2184,3.5016,0]},{"pos":[3398.79,557.92,2569.17],"rot":[0.4228,3.5868,0]},{"pos":[3390.73,554.26,2547.45],"rot":[0.4508,3.6018,0]},{"pos":[3378.05,543.5,2522.46],"rot":[0.4452,3.5868,0]},{"pos":[3358.54,532.53,2500.2],"rot":[0.0616,2.9868,0]},{"pos":[3351.31,532.53,2498.11],"rot":[-0.1596,2.7168,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3646.97,513.08,2552.39],"rot":[0.1792,1.2018,0]},{"pos":[3667.42,513.08,2546.99],"rot":[0.0252,1.0118,0]},{"pos":[3690.44,519.21,2553.32],"rot":[0.0196,1.2168,0]},{"pos":[3722,519.26,2568.04],"rot":[0.0476,1.3818,0]},{"pos":[3754.34,519.26,2570.24],"rot":[0.07,1.4568,0]},{"pos":[3781.3,519.26,2572.62],"rot":[0.084,1.6417,0]},{"pos":[3792.06,519.26,2579.26],"rot":[0.0252,1.8418,0]},{"pos":[3805.92,518.04,2585.6],"rot":[-0.07,2.1868,0]},{"pos":[3824.11,518.62,2588.78],"rot":[-0.0224,2.2368,0]},{"pos":[3843.25,518.72,2581.91],"rot":[0.1428,2.1918,0]},{"pos":[3861.66,518.72,2566.59],"rot":[0.1848,1.9368,0]},{"pos":[3904.61,518.72,2537.27],"rot":[0.154,1.8468,0]},{"pos":[3926,524.4,2531.56],"rot":[0.1372,1.5518,0]},{"pos":[3960.01,524.52,2534.8],"rot":[0.1848,1.6817,0]},{"pos":[3984.36,524.52,2532.32],"rot":[0.2324,2.0017,0]},{"pos":[4004.94,522.54,2526.53],"rot":[0.1176,2.3667,0]},{"pos":[4021.36,519.28,2520.36],"rot":[0.0532,2.6317,0]},{"pos":[4035.59,519.19,2512.14],"rot":[-0.0112,2.8117,0]},{"pos":[4047.49,513.75,2500.86],"rot":[-0.0252,3.0468,0]},{"pos":[4059.09,511.96,2469.48],"rot":[0.112,2.9768,0]},{"pos":[4065.02,508.87,2444.19],"rot":[0.0029,3.4266,0]},{"pos":[4072.48,508.75,2410.82],"rot":[-0.1036,3.4418,0]},{"pos":[4078.4,513.76,2395.23],"rot":[-0.196,3.5118,0]},{"pos":[4086.11,519.59,2367.17],"rot":[-0.2436,3.6718,0]},{"pos":[4092.13,524.56,2307.06],"rot":[-0.2716,3.7668,0]},{"pos":[4077.44,529.24,2279.51],"rot":[-0.3248,3.7668,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3721.41,504.6,2245.11],"rot":[0.0616,2.8318,0]},{"pos":[3734.03,504.33,2220.51],"rot":[0.0532,2.9717,0]},{"pos":[3741.55,504.33,2210.57],"rot":[0.0616,3.0718,0]},{"pos":[3744.02,504.33,2198.42],"rot":[-0.0084,3.1118,0]},{"pos":[3745.1,504.33,2187.3],"rot":[-0.084,2.9618,0]},{"pos":[3747.92,506.94,2175.6],"rot":[-0.112,2.8218,0]},{"pos":[3751.63,508.74,2163.71],"rot":[0.0756,3.0267,0]},{"pos":[3760.35,508.61,2120.78],"rot":[0.1008,3.1117,0]},{"pos":[3754.95,508.61,2087.83],"rot":[0.1568,3.1618,0]},{"pos":[3739.35,514.61,2049.87],"rot":[0.1428,2.9518,0]},{"pos":[3734.93,514.65,2034.24],"rot":[0.1092,2.5018,0]},{"pos":[3740.96,519.91,2013.21],"rot":[0.1316,2.2668,0]},{"pos":[3745.76,519.93,1991.89],"rot":[0.0196,2.3768,0]},{"pos":[3744.76,519.93,1983.93],"rot":[-0.1764,2.4718,0]},{"pos":[3750.47,524.25,1964.61],"rot":[-0.1848,2.8118,0]},{"pos":[3770.02,529.59,1934.24],"rot":[-0.0532,2.8268,0]},{"pos":[3775.29,535.54,1917.08],"rot":[0.028,2.8468,0]},{"pos":[3784.72,542.03,1886.77],"rot":[0.0868,2.8318,0]},{"pos":[3795.24,547.23,1857.31],"rot":[0.1204,2.6968,0]},{"pos":[3811.37,554.12,1836.62],"rot":[0.1988,2.8268,0]},{"pos":[3827.97,554.19,1825.2],"rot":[0.1988,2.9668,0]},{"pos":[3854.14,557.88,1785.34],"rot":[0.1316,2.785,0]},{"pos":[3887.9,555.01,1750.7],"rot":[0.1932,2.9999,0]},{"pos":[3925.42,530.63,1711.48],"rot":[0.1456,3.1499,0]},{"pos":[3940.41,520.83,1682.48],"rot":[0.1484,3.7697,0]},{"pos":[3946.45,515.18,1653.95],"rot":[0.0952,4.2699,0]},{"pos":[3932.96,515.12,1634.24],"rot":[0.028,4.9399,0]},{"pos":[3916.39,515.12,1626.47],"rot":[-0.0924,5.4199,0]},{"pos":[3902.96,521.32,1627.06],"rot":[-0.126,5.745,0]},{"pos":[3892.95,521.33,1630.89],"rot":[-0.1652,5.9849,0]},{"pos":[3877.03,521.33,1643.24],"rot":[-0.21,6.285,0]},{"pos":[3871.43,521.33,1650.26],"rot":[-0.3864,6.3,0]},{"pos":[3868.64,528.75,1660.05],"rot":[-0.4396,6.295,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3553.55,557.47,1476.65],"rot":[0.336,1.665,0]},{"pos":[3565.23,551.88,1477.11],"rot":[0.4452,1.9699,0]},{"pos":[3576.93,545.69,1473.41],"rot":[0.5376,2.2,0]},{"pos":[3591.89,543.4,1465.47],"rot":[0.6748,2.2949,0]},{"pos":[3612.24,523.39,1444.02],"rot":[0.6832,2.5099,0]},{"pos":[3632.19,514.92,1404.77],"rot":[0.2352,2.76,0]},{"pos":[3643.52,514.91,1367.23],"rot":[0.07,2.97,0]},{"pos":[3663.38,521.58,1352.46],"rot":[0.0532,2.95,0]},{"pos":[3678.7,528.12,1335.77],"rot":[0.1092,2.9849,0]},{"pos":[3685.19,528.12,1311.39],"rot":[0.0476,3.5049,0]},{"pos":[3688.9,531.07,1293.74],"rot":[-0.028,3.5549,0]},{"pos":[3694.8,531.15,1278.53],"rot":[-0.1651,3.6849,0]},{"pos":[3690.51,536.06,1251.75],"rot":[-0.28,3.705,0]},{"pos":[3666.62,536.07,1216.69],"rot":[-0.0168,3.675,0]},{"pos":[3652.77,533.81,1201.67],"rot":[0.182,3.4602,0]},{"pos":[3633.03,530.82,1184.62],"rot":[0.2856,3.3252,0]},{"pos":[3618.29,527.02,1165.25],"rot":[0.322,3.215,0]},{"pos":[3605.22,526.98,1136.74],"rot":[0.3528,3.14,0]},{"pos":[3598.62,526.98,1092.94],"rot":[0.4844,3.215,0]},{"pos":[3597.4,526.98,1063.58],"rot":[0.4928,3.3349,0]},{"pos":[3600.6,520.84,1032.15],"rot":[0.2857,3.6646,0]},{"pos":[3597.44,520.66,1001.62],"rot":[0.1848,3.9199,0]},{"pos":[3595.15,520.66,979.86],"rot":[0.0448,4.0949,0]},{"pos":[3590.99,516.43,957.99],"rot":[-0.0952,4.3747,0]},{"pos":[3580.36,512.85,938.84],"rot":[-0.1595,4.5747,0]},{"pos":[3565.86,516.67,922.1],"rot":[-0.1456,4.925,0]},{"pos":[3534.43,516.68,908.74],"rot":[0.0055,5.4246,0]},{"pos":[3511.74,516.68,907.97],"rot":[0.1484,5.43,0]},{"pos":[3485.72,516.68,919.43],"rot":[0.2156,5.41,0]},{"pos":[3451,516.68,950.97],"rot":[0.1988,4.895,0]},{"pos":[3402.32,516.68,971.97],"rot":[0.1484,4.455,0]},{"pos":[3367.06,516.68,967.79],"rot":[0.1512,4.4399,0]},{"pos":[3326.19,516.68,953.55],"rot":[0.1568,4.5648,0]},{"pos":[3287.83,516.68,935.2],"rot":[0.0953,5.0098,0]},{"pos":[3244.08,516.68,948.14],"rot":[-0.0448,5.7399,0]},{"pos":[3231.03,522.87,976.91],"rot":[-0.0616,6.0499,0]},{"pos":[3208.5,522.91,1012.01],"rot":[-0.1511,6.3547,0]},{"pos":[3200.05,522.91,1027.52],"rot":[-0.2296,6.4199,0]},{"pos":[3195.15,527.18,1042.22],"rot":[-0.28,6.4999,0]},{"pos":[3189.82,531.11,1055.34],"rot":[-0.3136,6.5499,0]},{"pos":[3186.74,542.41,1070.14],"rot":[-0.3248,6.5999,0]},{"pos":[3184.47,542.82,1083.81],"rot":[-0.3388,6.7349,0]},{"pos":[3200.72,542.68,1116.35],"rot":[-0.2436,6.81,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[2778.53,516.9,1486.83],"rot":[0.1344,2.0268,0]},{"pos":[2788.81,516.9,1475.12],"rot":[0.1204,1.8918,0]},{"pos":[2802.43,520.66,1464.47],"rot":[-0.0252,1.5268,0]},{"pos":[2829.17,520.92,1465.2],"rot":[0.0084,1.6518,0]},{"pos":[2847.89,520.92,1467.33],"rot":[0.0728,2.1316,0]},{"pos":[2863.47,520.92,1469.06],"rot":[0.098,2.3667,0]},{"pos":[2878.04,520.92,1477.24],"rot":[0.0644,2.7715,0]},{"pos":[2896.38,520.92,1481.86],"rot":[0.0588,3.0367,0]},{"pos":[2913.43,525.62,1473.9],"rot":[-0.0028,2.8168,0]},{"pos":[2923.6,530.62,1461.94],"rot":[-0.0168,2.4968,0]},{"pos":[2934.58,530.85,1447.04],"rot":[0.0445,2.2918,0]},{"pos":[2954.02,530.85,1427.25],"rot":[0.0672,2.0468,0]},{"pos":[2977.32,534.71,1416.8],"rot":[0.0504,1.8118,0]},{"pos":[3002.21,539.7,1411.95],"rot":[0.0589,1.927,0]},{"pos":[3017.54,546.65,1404.48],"rot":[-0.0168,1.3068,0]},{"pos":[3035.57,556.08,1404.08],"rot":[-0.1372,0.7669,0]},{"pos":[3049.58,563.05,1405.02],"rot":[-0.126,0.4721,0]},{"pos":[3064.47,568.11,1412.71],"rot":[-0.056,0.2768,0]},{"pos":[3071.17,570.61,1428.81],"rot":[0.0112,0.1818,0]},{"pos":[3074.4,570.68,1447.06],"rot":[0.0504,0.1668,0]},{"pos":[3076.19,570.68,1456.95],"rot":[0.1036,0.2068,0]},{"pos":[3085.89,570.68,1512.49],"rot":[0.0645,-0.1983,0]},{"pos":[3091.23,577.71,1526.9],"rot":[-0.0364,-0.5732,0]},{"pos":[3096.11,578,1537.63],"rot":[-0.112,-0.7382,0]},{"pos":[3085.5,586.99,1562.3],"rot":[-0.3696,-1.1082,0]},{"pos":[3068.16,608.77,1581.04],"rot":[-0.2688,-1.4382,0]},{"pos":[3049.37,606.84,1604.53],"rot":[-0.1652,-1.6832,0]},{"pos":[3039.63,611.99,1621.46],"rot":[-0.3668,-1.7182,0]},{"pos":[3027.54,619.02,1631.77],"rot":[-0.4676,-2.2082,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3067.14,513.37,1740.18],"rot":[0.1792,4.3718,0]},{"pos":[3053.67,513.37,1738.67],"rot":[0.1316,4.8415,0]},{"pos":[3031.35,517.85,1742.66],"rot":[0.0952,5.4817,0]},{"pos":[3012.1,518.11,1764.42],"rot":[0.1204,5.5918,0]},{"pos":[2991.28,518.11,1793.2],"rot":[0.0868,5.6267,0]},{"pos":[2980.99,518.11,1811.77],"rot":[0.0532,5.2271,0]},{"pos":[2970.34,522.76,1823.5],"rot":[-0.0532,4.6068,0]},{"pos":[2946.6,523.08,1821.24],"rot":[-0.0281,4.6916,0]},{"pos":[2925.19,529.66,1821.98],"rot":[0.0082,4.7769,0]},{"pos":[2900.58,536.55,1824.08],"rot":[0.0252,4.7568,0]},{"pos":[2876.18,536.79,1825.34],"rot":[0.0252,4.102,0]},{"pos":[2862.92,542.38,1827.2],"rot":[0.0168,3.7719,0]},{"pos":[2849.91,542.53,1821.71],"rot":[-0.0334,3.5424,0]},{"pos":[2841.66,547.69,1812.13],"rot":[-0.0896,3.2818,0]},{"pos":[2834.56,549.61,1791.39],"rot":[0.0111,3.6666,0]},{"pos":[2823.19,549.27,1780.76],"rot":[0.0951,3.9762,0]},{"pos":[2800.64,549.27,1756.27],"rot":[0.1624,3.7168,0]},{"pos":[2796.18,552.96,1733.59],"rot":[0.126,3.102,0]},{"pos":[2800.64,553.68,1694.18],"rot":[0.196,3.0068,0]},{"pos":[2805.53,553.68,1672.97],"rot":[0.1736,2.5471,0]},{"pos":[2814.13,553.68,1663.73],"rot":[0.1372,2.0169,0]},{"pos":[2822.49,553.68,1658],"rot":[0.0505,1.6418,0]},{"pos":[2827.9,553.68,1659.09],"rot":[-0.1316,1.5918,0]},{"pos":[2839.28,553.68,1658.14],"rot":[-0.252,1.6618,0]},{"pos":[2847.1,558.38,1657.38],"rot":[-0.2687,1.6817,0]},{"pos":[2859.5,558.92,1658.69],"rot":[-0.2884,1.7667,0]},{"pos":[2864.43,558.93,1660.94],"rot":[-0.308,2.0318,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3609.53,559.97,2889.69],"rot":[0.3752,1.8486,0]},{"pos":[3628.35,556.57,2885.63],"rot":[0.5012,1.8636,0]},{"pos":[3669.96,550.41,2867.28],"rot":[0.4593,1.9236,0]},{"pos":[3695.93,539.75,2855.08],"rot":[0.4648,1.7536,0]},{"pos":[3708.79,538.03,2844.1],"rot":[0.4088,1.5887,0]},{"pos":[3720.34,533.26,2838.19],"rot":[0.3108,1.4086,0]},{"pos":[3736.39,532.88,2832.62],"rot":[0.1933,1.2137,0]},{"pos":[3755.64,532.6,2834.16],"rot":[-0.0475,0.8836,0]},{"pos":[3770.36,532.6,2844.62],"rot":[-0.1596,1.0436,0]},{"pos":[3782.7,532.6,2857.01],"rot":[-0.2156,1.5431,0]},{"pos":[3804.17,532.6,2862.5],"rot":[-0.1487,1.9965,0]},{"pos":[3831.28,528.45,2860.46],"rot":[-0.0084,1.8836,0]},{"pos":[3861.34,528.15,2861.69],"rot":[0.1428,1.8186,0]},{"pos":[3905.23,524.23,2848.89],"rot":[0.3024,1.9486,0]},{"pos":[3928.52,524.16,2844.91],"rot":[0.2298,2.2283,0]},{"pos":[3961.79,524.16,2833.01],"rot":[0.2072,2.4736,0]},{"pos":[3986.01,524.16,2826.7],"rot":[0.1736,2.5186,0]},{"pos":[4028.76,524.16,2808.3],"rot":[0.0589,2.7386,0]},{"pos":[4043.76,524.16,2792.68],"rot":[0.0028,2.5786,0]},{"pos":[4060.44,524.16,2748.83],"rot":[0.2016,2.3686,0]},{"pos":[4085.2,520.51,2718.07],"rot":[0.2072,2.0585,0]},{"pos":[4111.09,520.45,2690.74],"rot":[0.2128,1.8486,0]},{"pos":[4150.04,520.45,2670.27],"rot":[0.1764,1.6536,0]},{"pos":[4191.14,520.45,2664.2],"rot":[0.028,1.3586,0]},{"pos":[4228.92,520.45,2670.93],"rot":[-0.098,1.0389,0]},{"pos":[4269.48,520.45,2693.77],"rot":[0,1.6285,0]},{"pos":[4299.69,524.77,2703.33],"rot":[0.0588,2.1435,0]},{"pos":[4360.77,524.8,2696.26],"rot":[0.2016,2.4979,0]},{"pos":[4395.71,521.27,2669.7],"rot":[0.2828,2.6086,0]},{"pos":[4423.51,520.98,2638.24],"rot":[0.308,2.7286,0]},{"pos":[4462.7,520.98,2577.16],"rot":[0.28,2.2987,0]},{"pos":[4499.83,520.98,2547.38],"rot":[0.2464,2.0086,0]},{"pos":[4532.54,520.98,2511.04],"rot":[0.2324,1.9586,0]},{"pos":[4585.93,520.98,2478.08],"rot":[0.2352,1.9536,0]},{"pos":[4676.29,520.98,2452.6],"rot":[0.154,2.5835,0]},{"pos":[4717.2,520.98,2426.6],"rot":[0.0617,2.9181,0]},{"pos":[4730.77,520.98,2412.77],"rot":[0.0336,2.9785,0]},{"pos":[4750.31,520.98,2390.01],"rot":[-0.0392,3.0386,0]},{"pos":[4783.02,531.61,2363.8],"rot":[-0.0784,3.2636,0]},{"pos":[4804,531.63,2307.49],"rot":[-0.0168,3.5036,0]},{"pos":[4811.89,531.63,2277.01],"rot":[0.0448,3.6586,0]},{"pos":[4816.19,531.63,2236.33],"rot":[0.0728,3.9836,0]},{"pos":[4812.29,531.63,2203.37],"rot":[0.1008,4.2881,0]},{"pos":[4800.51,529.02,2180.91],"rot":[0.14,4.6485,0]},{"pos":[4789.21,522.21,2170.47],"rot":[0.1183,5.3628,0]},{"pos":[4774.64,513.28,2171.54],"rot":[0.0312,6.2713,0]},{"pos":[4771.66,512.77,2179.01],"rot":[-0.0644,6.8285,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[1893.43,561.13,3823.37],"rot":[-0.0028,2.6788,0]},{"pos":[1904.24,560.28,3823.21],"rot":[-0.056,3.1588,0]},{"pos":[1911.91,563.12,3809.89],"rot":[0.0028,3.9438,0]},{"pos":[1908.16,563.97,3793.64],"rot":[0.0559,4.2838,0]},{"pos":[1894.83,560.01,3770.17],"rot":[0.0504,4.4488,0]},{"pos":[1865.27,560.97,3760.92],"rot":[0.1148,4.3788,0]},{"pos":[1851.3,557.77,3761.51],"rot":[0.0224,3.7688,0]},{"pos":[1836.88,563.08,3763.42],"rot":[0.126,3.0591,0]},{"pos":[1830.08,564.6,3753.79],"rot":[0.21,2.7788,0]},{"pos":[1831.42,556.97,3743.68],"rot":[0.3472,3.3441,0]},{"pos":[1826.09,547.89,3710.94],"rot":[0.3864,4.1338,0]},{"pos":[1788.49,535.95,3676.28],"rot":[0.3892,4.9988,0]},{"pos":[1733.09,535.96,3680.66],"rot":[0.1512,6.5088,0]},{"pos":[1720.19,537.48,3700.88],"rot":[-0.1456,7.1488,0]},{"pos":[1731.92,551.98,3739.33],"rot":[-0.1092,7.8138,0]},{"pos":[1769,560.68,3712.94],"rot":[-0.0812,6.6438,0]},{"pos":[1785.28,566.82,3721.51],"rot":[-0.0477,6.3339,0]},{"pos":[1800.07,578.1,3728.89],"rot":[0.0839,6.114,0]},{"pos":[1816.16,588.21,3740.08],"rot":[0.1708,6.0189,0]},{"pos":[1831.75,593.02,3755.97],"rot":[0.2435,5.829,0]},{"pos":[1851.21,594.52,3777],"rot":[0.3388,5.3041,0]},{"pos":[1856.79,591.84,3793.52],"rot":[0.1652,4.9539,0]},{"pos":[1856.57,593.34,3792.83],"rot":[-0.2352,5.1838,0]},{"pos":[1855.93,593.82,3793.85],"rot":[-0.3444,5.4237,0]},{"pos":[1846.86,598.07,3794.09],"rot":[-0.3752,5.6338,0]},{"pos":[1833.7,597.86,3795.34],"rot":[-0.392,6.0788,0]},{"pos":[1829.05,594.72,3804.28],"rot":[-0.4284,6.2688,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[1990.84,509.19,3625.68],"rot":[0.084,0.1156,0]},{"pos":[1985.4,509.22,3635.29],"rot":[0.0224,0.4806,0]},{"pos":[1990.75,509.03,3643.13],"rot":[0.0224,0.7406,0]},{"pos":[2007.89,514.81,3663.97],"rot":[0.2912,0.9755,0]},{"pos":[2036.21,513.83,3682.83],"rot":[0.2464,0.7856,0]},{"pos":[2055.71,514.59,3728.34],"rot":[0.252,1.4205,0]},{"pos":[2057.87,508.05,3756],"rot":[0.0896,1.6455,0]},{"pos":[2089.22,509.16,3785.24],"rot":[0.084,1.7856,0]},{"pos":[2128.63,516.41,3793.27],"rot":[0.0672,2.3206,0]},{"pos":[2149.48,524.72,3782.96],"rot":[0.2072,2.3156,0]},{"pos":[2174.73,525.84,3769.05],"rot":[0.2716,2.1506,0]},{"pos":[2212.24,526.06,3762.46],"rot":[0.2856,3.1856,0]},{"pos":[2219.12,521.66,3754.18],"rot":[0.21,3.5356,0]},{"pos":[2224.58,524.03,3746.47],"rot":[0.1036,3.8656,0]},{"pos":[2228.01,522.99,3733.09],"rot":[0.0308,4.1006,0]},{"pos":[2229.15,527.78,3721.92],"rot":[-0.0644,4.3056,0]},{"pos":[2218.06,527.22,3712.03],"rot":[-0.126,4.3005,0]},{"pos":[2201.67,545.55,3693.3],"rot":[-0.1484,4.1157,0]},{"pos":[2193.24,558.66,3679.85],"rot":[-0.252,3.9456,0]},{"pos":[2174.07,570.64,3678.47],"rot":[-0.1904,3.6756,0]},{"pos":[2154.64,570.41,3676.17],"rot":[-0.2212,3.3857,0]},{"pos":[2139.12,575.3,3670.01],"rot":[-0.1652,3.0258,0]},{"pos":[2127.51,581.77,3661.19],"rot":[-0.1148,2.6707,0]},{"pos":[2121.83,582.85,3648.15],"rot":[-0.056,2.0957,0]},{"pos":[2122.8,590.4,3631.42],"rot":[0.0308,1.4906,0]},{"pos":[2131.46,589.99,3618.86],"rot":[0,0.9209,0]},{"pos":[2142.48,588.97,3612.42],"rot":[-0.0644,0.4056,0]},{"pos":[2151.45,586.74,3612.81],"rot":[-0.2044,0.0956,0]},{"pos":[2160.68,584.2,3616.44],"rot":[-0.3696,-0.2044,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[2010.21,495.83,3556.2],"rot":[0.2072,2.327,0]},{"pos":[2009.71,496.97,3522.98],"rot":[0.1429,1.587,0]},{"pos":[2027.59,496.19,3501.65],"rot":[0.0532,0.927,0]},{"pos":[2038.38,500.36,3493.95],"rot":[-0.0168,0.7221,0]},{"pos":[2054.82,499.99,3490.1],"rot":[-0.056,0.532,0]},{"pos":[2073.14,504.93,3502.68],"rot":[-0.0448,0.8569,0]},{"pos":[2097.32,511.89,3521.59],"rot":[0.0168,1.147,0]},{"pos":[2121.92,521.38,3538.78],"rot":[0.112,1.307,0]},{"pos":[2138.92,528.56,3551.59],"rot":[0.1314,1.4469,0]},{"pos":[2168.78,530.35,3557.49],"rot":[0.224,1.517,0]},{"pos":[2181.16,529.06,3565.61],"rot":[0.1428,1.6819,0]},{"pos":[2188.66,527.72,3571.07],"rot":[0.0588,1.877,0]},{"pos":[2194.45,527.6,3578.76],"rot":[0.0504,2.307,0]},{"pos":[2211.6,528.41,3584.92],"rot":[0.168,3.167,0]},{"pos":[2217.41,526.67,3574.07],"rot":[0.3107,3.232,0]},{"pos":[2213.06,526.01,3562.02],"rot":[0.4087,2.9923,0]},{"pos":[2205.96,517.5,3545.47],"rot":[0.4032,2.527,0]},{"pos":[2200.15,510.84,3531.69],"rot":[0.3528,2.1921,0]},{"pos":[2201.55,509.3,3509.76],"rot":[0.2716,1.697,0]},{"pos":[2213.32,508.57,3492.3],"rot":[0.224,1.282,0]},{"pos":[2233.94,508.17,3479.99],"rot":[0.1988,0.8775,0]},{"pos":[2258.95,513.28,3483.17],"rot":[0.2324,0.907,0]},{"pos":[2291.56,514.15,3488.87],"rot":[0.2603,0.9519,0]},{"pos":[2327.95,514.72,3510.9],"rot":[0.2968,0.982,0]},{"pos":[2352.37,511.56,3541.17],"rot":[0.2464,1.3869,0]},{"pos":[2380.99,508.46,3559.68],"rot":[0.2856,1.667,0]},{"pos":[2406.22,502.89,3569.33],"rot":[0.1904,2.017,0]},{"pos":[2430.01,505.81,3573.62],"rot":[0.098,2.447,0]},{"pos":[2457.05,504.5,3570],"rot":[0.0084,2.802,0]},{"pos":[2495.85,505.66,3532.35],"rot":[0.0812,2.647,0]},{"pos":[2524.66,506.23,3479.54],"rot":[0.1176,2.8269,0]},{"pos":[2531.77,503.36,3454.75],"rot":[0.1764,2.257,0]},{"pos":[2544.27,503.64,3437.59],"rot":[0.2016,1.937,0]},{"pos":[2558.84,504.11,3415.91],"rot":[0.2324,1.532,0]},{"pos":[2575.56,503.59,3402.31],"rot":[0.1988,1.297,0]},{"pos":[2598.01,503.24,3389.28],"rot":[0.1764,0.982,0]},{"pos":[2619.53,502.57,3381.25],"rot":[0.1344,0.5822,0]},{"pos":[2638.49,501.45,3376.55],"rot":[0.0644,0.0971,0]},{"pos":[2651.24,500.57,3379.69],"rot":[0.0084,-0.158,0]},{"pos":[2665.77,500.52,3385.06],"rot":[0.0056,-0.638,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[2168.26,499.65,3145.93],"rot":[0.2604,2.5288,0]},{"pos":[2166.19,500.76,3133.82],"rot":[0.2016,2.1688,0]},{"pos":[2167.82,503.72,3123.63],"rot":[0.1988,2.0688,0]},{"pos":[2173.47,503.06,3111.87],"rot":[0.196,1.9488,0]},{"pos":[2188.53,505.28,3096.26],"rot":[0.168,1.8488,0]},{"pos":[2203.24,505.45,3094.83],"rot":[0.1708,1.9637,0]},{"pos":[2215.16,505.59,3096.87],"rot":[0.1792,2.2838,0]},{"pos":[2244.62,505.68,3096.04],"rot":[0.1848,2.6988,0]},{"pos":[2265.18,507.77,3086.9],"rot":[0.1736,2.6638,0]},{"pos":[2299.28,510.82,3077.46],"rot":[0.0364,3.0938,0]},{"pos":[2329.25,519.46,3057.06],"rot":[0.0896,3.6935,0]},{"pos":[2337.4,518.97,3040.62],"rot":[0.0336,4.1188,0]},{"pos":[2340.02,519.51,3017.9],"rot":[0.0672,4.5786,0]},{"pos":[2343.97,520.7,2986.67],"rot":[0.1428,4.7787,0]},{"pos":[2338.99,516.5,2961.67],"rot":[0.1568,5.0938,0]},{"pos":[2326.2,510.32,2941.56],"rot":[0.0448,5.5438,0]},{"pos":[2299.83,518.2,2935.82],"rot":[0.2436,4.6238,0]},{"pos":[2280.03,521.15,2923.23],"rot":[0.2324,4.7488,0]},{"pos":[2254.49,520.86,2916.57],"rot":[0.2184,5.2337,0]},{"pos":[2228.2,521.29,2931],"rot":[0.2464,5.0038,0]},{"pos":[2194.39,516.63,2941.21],"rot":[0.2184,4.5389,0]},{"pos":[2156.77,516.96,2944.5],"rot":[0.2464,4.5038,0]},{"pos":[2129.21,516.78,2945.47],"rot":[0.238,4.3188,0]},{"pos":[2102.66,517.08,2928.37],"rot":[0.2576,4.9088,0]},{"pos":[2080.01,517.21,2917.16],"rot":[0.266,5.6087,0]},{"pos":[2055.41,516.52,2939.97],"rot":[0.2212,6.2939,0]},{"pos":[2027.86,515.24,2961.64],"rot":[0.14,6.6738,0]},{"pos":[2019.09,516.71,2995.89],"rot":[0.1428,7.1588,0]},{"pos":[2021.9,519.76,3021.13],"rot":[0.0924,7.5088,0]},{"pos":[2042.33,521.2,3048.75],"rot":[0.168,8.0088,0]},{"pos":[2054.55,526.39,3053.77],"rot":[0.1512,8.6238,0]},{"pos":[2069.89,526.37,3052.82],"rot":[0.3136,8.6838,0]},{"pos":[2082.67,518.83,3045.39],"rot":[0.3528,8.4589,0]},{"pos":[2096.75,513.19,3031.2],"rot":[0.364,8.3488,0]},{"pos":[2112.07,512.43,3016.78],"rot":[0.3192,7.9189,0]},{"pos":[2131.37,510.93,3007.18],"rot":[0.2212,7.5438,0]},{"pos":[2148.1,508.23,3000.71],"rot":[0.0504,6.9638,0]},{"pos":[2167.31,507.06,3001.86],"rot":[-0.0224,6.4038,0]},{"pos":[2182.14,505.64,3006.83],"rot":[-0.112,5.8388,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[1841.86,503.91,3402.17],"rot":[0.0728,5.6388,0]},{"pos":[1826.45,504.59,3403.71],"rot":[0.1176,5.8438,0]},{"pos":[1805.67,506.19,3408.96],"rot":[0.2184,5.9787,0]},{"pos":[1788.37,504.64,3413.02],"rot":[0.1204,6.1638,0]},{"pos":[1774.71,499.58,3413.61],"rot":[0.0644,6.3138,0]},{"pos":[1753.21,499.34,3420.42],"rot":[0.056,6.3688,0]},{"pos":[1736.18,499.54,3443.49],"rot":[0.1288,6.2738,0]},{"pos":[1712.05,498.31,3465.6],"rot":[0.0896,6.4788,0]},{"pos":[1709.06,496.94,3506.2],"rot":[0.1988,6.5738,0]},{"pos":[1722.35,497.11,3524.85],"rot":[0.2128,6.4438,0]},{"pos":[1733.8,499.69,3554.53],"rot":[0.2352,6.9238,0]},{"pos":[1732.61,499.54,3572.06],"rot":[0.2184,7.3938,0]},{"pos":[1737.66,498.34,3591.6],"rot":[0.1428,7.8538,0]},{"pos":[1753,495.26,3595.14],"rot":[0.14,7.9588,0]},{"pos":[1773.16,496.01,3592.06],"rot":[0.1876,8.2038,0]},{"pos":[1777.38,496.19,3588.04],"rot":[0.1988,9.2088,0]},{"pos":[1777.06,496.62,3580.1],"rot":[0.2268,9.2288,0]},{"pos":[1772.16,496.9,3572.52],"rot":[0.2436,8.7738,0]},{"pos":[1775.37,497.57,3557.49],"rot":[0.0168,7.1238,0]},{"pos":[1791.97,497.61,3551.37],"rot":[0.0168,6.6589,0]},{"pos":[1815.69,497.98,3561.24],"rot":[0.0392,5.9738,0]},{"pos":[1824.97,497.61,3575.6],"rot":[0.0168,5.4488,0]},{"pos":[1822.45,501.72,3606.78],"rot":[0.042,4.604,0]},{"pos":[1803.88,502.67,3621.45],"rot":[0.1008,4.0738,0]},{"pos":[1793.99,501.72,3625.19],"rot":[0.042,3.6638,0]},{"pos":[1796.61,506.53,3604.12],"rot":[0.0616,3.9485,0]},{"pos":[1802.94,511.89,3583.82],"rot":[0.0616,4.5337,0]},{"pos":[1799.46,513.88,3564.73],"rot":[0.1792,5.1288,0]},{"pos":[1779.68,514.18,3554.23],"rot":[0.1988,6.0688,0]},{"pos":[1755.35,515.14,3554],"rot":[0.2604,6.5938,0]},{"pos":[1740.11,511.69,3559.29],"rot":[0.042,6.7738,0]},{"pos":[1725.77,504.7,3566.39],"rot":[-0.2016,7.0338,0]},{"pos":[1707.06,505.79,3574.65],"rot":[-0.1316,7.2938,0]},{"pos":[1691.72,504.83,3580.65],"rot":[-0.1932,7.1388,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[2072.45,496.31,3833.11],"rot":[0.0028,6.2088,0]},{"pos":[2063.05,496.48,3841.13],"rot":[0.014,6.4887,0]},{"pos":[2056.83,498.67,3854.15],"rot":[0.1512,6.7688,0]},{"pos":[2068.73,500.21,3864.96],"rot":[0.2492,7.0238,0]},{"pos":[2082.55,500.03,3882.2],"rot":[0.238,6.4339,0]},{"pos":[2082.76,499.92,3894.1],"rot":[0.1792,6.6588,0]},{"pos":[2097.95,500.54,3923.92],"rot":[0.1932,6.8988,0]},{"pos":[2118.87,503.15,3933],"rot":[0.0924,6.5788,0]},{"pos":[2134.16,506.74,3940.59],"rot":[-0.0448,6.1988,0]},{"pos":[2142.68,510.3,3948.32],"rot":[-0.0196,6.0288,0]},{"pos":[2144.91,513.33,3959.87],"rot":[0.2435,5.9688,0]},{"pos":[2143.12,511.51,3970.6],"rot":[0.3164,5.7788,0]},{"pos":[2122.98,510.12,3989.56],"rot":[0.2912,6.6438,0]},{"pos":[2118.34,511.45,4006.03],"rot":[0.2016,7.2887,0]},{"pos":[2122.25,510.97,4017.76],"rot":[0.1596,7.6888,0]},{"pos":[2137.14,509.58,4022.2],"rot":[0.182,8.0538,0]},{"pos":[2147.37,511.12,4020.26],"rot":[0.196,8.6588,0]},{"pos":[2154.69,515.15,4013.23],"rot":[0.1736,8.3788,0]},{"pos":[2167.28,515.87,4011.1],"rot":[0.2156,9.2687,0]},{"pos":[2175.51,515.47,3998.9],"rot":[0.1904,10.0087,0]},{"pos":[2175.95,513.53,3986.45],"rot":[0.0672,10.6938,0]},{"pos":[2181.39,515.75,3967.5],"rot":[-0.0196,11.3188,0]},{"pos":[2194.18,512.88,3950.5],"rot":[-0.2128,11.2538,0]},{"pos":[2198.11,512.54,3927.59],"rot":[-0.2352,11.6438,0]},{"pos":[2189.96,524.28,3916.96],"rot":[-0.0924,11.8688,0]},{"pos":[2197.62,530.38,3896.84],"rot":[-0.1344,12.0088,0]},{"pos":[2196.5,531.99,3892.55],"rot":[-0.1988,12.2438,0]},{"pos":[2197.6,547.11,3886.13],"rot":[-0.2548,12.3388,0]},{"pos":[2200.12,546.19,3875.33],"rot":[-0.3164,12.5538,0]},{"pos":[2206.51,545.99,3869.55],"rot":[-0.3304,12.5838,0]},{"pos":[2207.53,548.57,3851.07],"rot":[-0.3024,12.5138,0]},{"pos":[2207.74,548.57,3847.05],"rot":[-0.3024,12.5138,0]},{"pos":[2207.66,548.57,3848.63],"rot":[-0.3024,12.5138,0]},{"pos":[2207.46,546.81,3849.29],"rot":[-0.42,12.5238,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[2255.78,497.67,4082.97],"rot":[0.0784,5.9006,0]},{"pos":[2248.36,499.2,4101.8],"rot":[0.0868,6.2456,0]},{"pos":[2248.26,496.54,4113.48],"rot":[-0.0644,6.3756,0]},{"pos":[2250.25,495.69,4131.54],"rot":[-0.1176,6.0956,0]},{"pos":[2252,502.95,4148.37],"rot":[0.0193,5.621,0]},{"pos":[2243.91,508.52,4158.06],"rot":[0.1959,5.6405,0]},{"pos":[2230.01,508.31,4178.83],"rot":[0.1932,5.5106,0]},{"pos":[2199.7,508.97,4206.24],"rot":[0.2352,6.0856,0]},{"pos":[2196.08,505.28,4223.44],"rot":[0.0028,6.5656,0]},{"pos":[2192.17,506.1,4234.55],"rot":[0.0532,6.7755,0]},{"pos":[2183.86,507.11,4250.23],"rot":[0.1176,6.9756,0]},{"pos":[2196.67,503.66,4276.43],"rot":[0.2548,7.1006,0]},{"pos":[2214.9,502.13,4301.72],"rot":[0.1736,7.3506,0]},{"pos":[2225.9,505.27,4324.88],"rot":[0.0952,7.5205,0]},{"pos":[2235.5,504.78,4344.19],"rot":[0.0336,7.5206,0]},{"pos":[2249.33,505.71,4369.05],"rot":[0.0924,7.7806,0]},{"pos":[2267.18,505.9,4385.95],"rot":[0.1036,8.1606,0]},{"pos":[2291.03,507.4,4388.83],"rot":[0.1988,8.4107,0]},{"pos":[2308.63,504.85,4380.67],"rot":[0.2688,8.1806,0]},{"pos":[2336.43,502.86,4369.23],"rot":[0.3752,8.3106,0]},{"pos":[2354.22,498.4,4355.29],"rot":[0.2688,8.2357,0]},{"pos":[2365.25,498.05,4343.03],"rot":[0.2492,7.7607,0]},{"pos":[2379.25,497.97,4338.82],"rot":[0.2436,7.3807,0]},{"pos":[2400.99,497.26,4339.03],"rot":[0.1988,6.8107,0]},{"pos":[2415.81,499.91,4343.3],"rot":[0.0728,6.4657,0]},{"pos":[2425.93,498.75,4350.39],"rot":[-0.0224,6.3606,0]},{"pos":[2448.57,497.24,4368.71],"rot":[-0.1176,6.2756,0]},{"pos":[2466.87,495.86,4375.54],"rot":[-0.2044,6.0056,0]},{"pos":[2484.91,496.25,4382.63],"rot":[-0.1792,5.7006,0]},{"pos":[2520.48,495.04,4403.99],"rot":[-0.28,5.4056,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[2548.94,511.99,4056.09],"rot":[0.0924,5.6893,0]},{"pos":[2545.38,512.66,4060.24],"rot":[0.1344,5.8692,0]},{"pos":[2542.98,513.38,4067.59],"rot":[0.1792,6.1142,0]},{"pos":[2540.78,512.17,4080.38],"rot":[0.2184,6.7193,0]},{"pos":[2546.1,510.82,4099.21],"rot":[0.3556,6.8443,0]},{"pos":[2551.88,507.98,4122.05],"rot":[0.322,6.9543,0]},{"pos":[2554.77,506.48,4140.49],"rot":[0.2296,7.0692,0]},{"pos":[2571.76,507.04,4173.47],"rot":[0.266,7.1893,0]},{"pos":[2597.18,507.23,4205.01],"rot":[0.2772,7.7992,0]},{"pos":[2617.5,506.09,4219.75],"rot":[0.2044,8.2491,0]},{"pos":[2644.45,509.99,4213.66],"rot":[0.2352,8.6892,0]},{"pos":[2668.77,505.77,4201.91],"rot":[0.1904,8.9942,0]},{"pos":[2696.33,499.83,4181.61],"rot":[0.2072,9.1093,0]},{"pos":[2707.4,499.71,4151.04],"rot":[0.2044,9.5292,0]},{"pos":[2705.79,499.53,4125.35],"rot":[0.1932,9.8393,0]},{"pos":[2676.17,501.61,4092.92],"rot":[0.1848,9.6143,0]},{"pos":[2651.84,501.57,4069.54],"rot":[0.2016,9.3643,0]},{"pos":[2637.62,501.38,4056.1],"rot":[0.1904,9.1743,0]},{"pos":[2624.23,501.43,4039.59],"rot":[0.1932,8.9793,0]},{"pos":[2612.79,500.82,4020.16],"rot":[0.154,8.7993,0]},{"pos":[2615.67,501.34,3992.29],"rot":[0.1876,8.9343,0]},{"pos":[2625.51,501.26,3964.95],"rot":[0.182,9.1342,0]},{"pos":[2630.4,496.23,3926.59],"rot":[0.196,9.2593,0]},{"pos":[2635.25,498.71,3898.56],"rot":[0.1792,9.3043,0]},{"pos":[2638.38,498.75,3871.35],"rot":[0.1708,9.7892,0]},{"pos":[2630.78,499.45,3853.17],"rot":[0.2156,10.1643,0]},{"pos":[2608.98,498.98,3834.69],"rot":[0.1848,9.5894,0]},{"pos":[2592.44,498.89,3817.3],"rot":[0.1792,8.8543,0]},{"pos":[2588.68,501.27,3784.63],"rot":[0.1484,7.8443,0]},{"pos":[2603.89,500.43,3768.4],"rot":[0.0924,7.1793,0]},{"pos":[2621.93,504.77,3767.72],"rot":[0.0728,6.8145,0]},{"pos":[2635.69,511.12,3771.63],"rot":[0.1064,6.6543,0]},{"pos":[2654.09,518.83,3780.82],"rot":[0.1344,6.4043,0]},{"pos":[2664.15,525.73,3790.03],"rot":[0.1428,6.2643,0]},{"pos":[2672.45,529.6,3796.59],"rot":[0,6.1093,0]},{"pos":[2671.57,528.87,3808.59],"rot":[-0.1764,6.2043,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[2193.35,530.8,4156.62],"rot":[0.0784,5.4143,0]},{"pos":[2196.14,532.4,4170.23],"rot":[0.1792,5.4743,0]},{"pos":[2196.06,527.15,4181.49],"rot":[0.196,5.3643,0]},{"pos":[2188,524.95,4191.05],"rot":[0.2743,5.2193,0]},{"pos":[2171.24,521.84,4200.6],"rot":[0.406,5.0243,0]},{"pos":[2159.12,519.81,4202.63],"rot":[0.294,5.3042,0]},{"pos":[2144.1,516.07,4205.85],"rot":[0.2548,5.5042,0]},{"pos":[2127.49,511.84,4205.6],"rot":[0.1652,5.8092,0]},{"pos":[2116.65,510.46,4220.31],"rot":[0.2156,5.9443,0]},{"pos":[2111.96,505.68,4231.36],"rot":[0.2688,5.8043,0]},{"pos":[2108.01,505.57,4246.71],"rot":[0.28,5.4395,0]},{"pos":[2104.38,505.14,4261.12],"rot":[0.252,4.8745,0]},{"pos":[2092.21,504.67,4275.49],"rot":[0.2212,4.2945,0]},{"pos":[2077.66,504.37,4277.9],"rot":[0.2016,4.1093,0]},{"pos":[2061.98,504.37,4271.33],"rot":[0.2016,4.1192,0]},{"pos":[2034.63,501.08,4262.26],"rot":[0.1904,4.1443,0]},{"pos":[2005.46,500.88,4255.98],"rot":[0.2016,4.4842,0]},{"pos":[1945.04,500.1,4239.45],"rot":[0.1988,4.4943,0]},{"pos":[1922.77,500.01,4226.83],"rot":[0.196,4.6092,0]},{"pos":[1895.55,497.02,4215.56],"rot":[0.1904,4.7943,0]},{"pos":[1878.68,501.76,4199.81],"rot":[0.1848,4.9443,0]},{"pos":[1866.22,501.54,4191.88],"rot":[0.1512,4.9443,0]},{"pos":[1844.71,501.25,4180.87],"rot":[0.1316,5.0393,0]},{"pos":[1829.84,501.01,4166.78],"rot":[0.1176,5.0991,0]},{"pos":[1817.14,501.01,4144.67],"rot":[0.1176,5.3842,0]},{"pos":[1801.9,497.46,4127.84],"rot":[0.0952,5.6541,0]},{"pos":[1790.67,497.11,4115.76],"rot":[0.0924,5.8642,0]},{"pos":[1776.68,497.11,4096.51],"rot":[0.0924,5.9942,0]},{"pos":[1755.04,497.2,4081.64],"rot":[0.098,6.2792,0]},{"pos":[1734.2,497.35,4070.13],"rot":[0.1064,6.3743,0]},{"pos":[1712.19,496.98,4061.4],"rot":[0.084,6.5592,0]},{"pos":[1695.7,494.71,4057.69],"rot":[-0.0588,6.5843,0]},{"pos":[1675.76,495.9,4049.95],"rot":[-0.154,6.4842,0]},{"pos":[1659.03,495.41,4049.5],"rot":[-0.1792,6.5193,0]},{"pos":[1650.89,495.25,4051.65],"rot":[-0.1904,6.5893,0]},{"pos":[1652.77,499.31,4058.44],"rot":[-0.1904,6.3593,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[1639.83,496.07,4227.3],"rot":[0.2436,3.5193,0]},{"pos":[1628.7,498.68,4221.28],"rot":[0.2296,3.3843,0]},{"pos":[1614.46,498.08,4212.78],"rot":[0.1289,3.1243,0]},{"pos":[1603.56,496.49,4203.61],"rot":[0.0281,2.7643,0]},{"pos":[1604.32,496.53,4191.65],"rot":[0.0308,2.8042,0]},{"pos":[1614.82,497.12,4172.76],"rot":[0.0672,3.2387,0]},{"pos":[1623.76,497.6,4144.29],"rot":[0.098,3.7293,0]},{"pos":[1617.97,498.1,4131.62],"rot":[0.1288,3.7942,0]},{"pos":[1607.52,498.01,4121.13],"rot":[0.1232,3.6093,0]},{"pos":[1591.17,497.66,4115.04],"rot":[0.1008,3.1994,0]},{"pos":[1577.15,497.51,4105.34],"rot":[0.0924,2.8593,0]},{"pos":[1569.57,497.38,4091.42],"rot":[0.084,2.6794,0]},{"pos":[1568.32,498.22,4071.78],"rot":[0.1372,2.6093,0]},{"pos":[1580.72,499.06,4049.09],"rot":[0.1904,2.7542,0]},{"pos":[1589.96,497.04,4029.02],"rot":[0.2044,2.9842,0]},{"pos":[1593.32,496.25,3997.05],"rot":[0.1568,3.4993,0]},{"pos":[1585,501.44,3978.03],"rot":[0.1204,3.3593,0]},{"pos":[1573.42,501.33,3963.04],"rot":[0.1064,3.1593,0]},{"pos":[1552.99,502.43,3928.96],"rot":[0.0952,3.0293,0]},{"pos":[1543.15,508,3897.29],"rot":[0.056,3.0592,0]},{"pos":[1544.77,508.91,3882.98],"rot":[0.1008,3.4492,0]},{"pos":[1542.89,508.86,3868.2],"rot":[0.098,3.7192,0]},{"pos":[1541.41,509.08,3853.48],"rot":[0.112,3.8742,0]},{"pos":[1527.51,509.48,3836.73],"rot":[0.1372,3.5844,0]},{"pos":[1525.25,509.41,3820.28],"rot":[0.1316,3.1494,0]},{"pos":[1532.23,509.93,3785.95],"rot":[0.1652,3.1593,0]},{"pos":[1531.55,510.16,3752.81],"rot":[0.1792,3.1943,0]},{"pos":[1534.43,510.11,3732.32],"rot":[0.1764,3.3192,0]},{"pos":[1539.19,510.32,3718.62],"rot":[0.1904,3.5642,0]},{"pos":[1542.23,509.01,3697.63],"rot":[0.2324,3.7442,0]},{"pos":[1546.76,509.67,3677.46],"rot":[0.2604,4.209,0]},{"pos":[1542.83,507.61,3665.78],"rot":[0.2268,4.6043,0]},{"pos":[1534.46,504.18,3655.87],"rot":[0.1708,5.1342,0]},{"pos":[1521.11,500.9,3650.69],"rot":[0.0308,5.6642,0]},{"pos":[1505.35,501.21,3653.99],"rot":[0.0504,5.9692,0]},{"pos":[1492.34,500.62,3660.71],"rot":[0.014,6.2793,0]},{"pos":[1480.92,499.28,3673.29],"rot":[-0.07,6.5093,0]},{"pos":[1478.08,498.17,3677.27],"rot":[-0.14,6.5943,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3497.04,542.54,4052.41],"rot":[0.1764,0.6961,0]},{"pos":[3508.35,541.9,4073.16],"rot":[0.1708,0.5361,0]},{"pos":[3521.53,546.36,4097.83],"rot":[0.2044,0.4011,0]},{"pos":[3528.46,550.4,4118.07],"rot":[0.1652,0.6559,0]},{"pos":[3538.38,552.65,4141.78],"rot":[0.1344,1.191,0]},{"pos":[3554.22,558.94,4150.58],"rot":[0.0224,1.3361,0]},{"pos":[3571.47,566.17,4155.31],"rot":[0.1288,1.4011,0]},{"pos":[3586.63,574.35,4154.52],"rot":[0.3919,1.4212,0]},{"pos":[3597.7,575.04,4155.15],"rot":[0.6101,1.3413,0]},{"pos":[3616.99,566.96,4147.84],"rot":[0.8064,1.3761,0]},{"pos":[3628.04,553.8,4135.73],"rot":[0.6188,0.7961,0]},{"pos":[3640.62,545.68,4131.36],"rot":[0.4592,0.5011,0]},{"pos":[3653.61,536.36,4126.09],"rot":[0.2716,0.5711,0]},{"pos":[3670.79,532.64,4131.43],"rot":[0.2548,0.931,0]},{"pos":[3687.18,532.66,4135.91],"rot":[0.168,1.2961,0]},{"pos":[3700.45,529.09,4139.45],"rot":[0.056,1.2711,0]},{"pos":[3718.7,532.48,4144.36],"rot":[-0.0028,1.2261,0]},{"pos":[3729.8,536.5,4152.57],"rot":[-0.1092,1.4061,0]},{"pos":[3741.57,537.8,4164.17],"rot":[-0.0476,1.276,0]},{"pos":[3746.48,541.94,4179.36],"rot":[-0.0085,1.4508,0]},{"pos":[3744.58,544.21,4207.26],"rot":[0.1092,1.4361,0]},{"pos":[3751.7,539.28,4236.36],"rot":[0.1064,1.8608,0]},{"pos":[3765.6,539.55,4244.87],"rot":[0.1456,1.9011,0]},{"pos":[3786.26,537.85,4249.83],"rot":[0.2324,1.7662,0]},{"pos":[3805.07,533.6,4250.45],"rot":[0.2912,1.4862,0]},{"pos":[3830.79,533.72,4258.46],"rot":[0.3024,1.4311,0]},{"pos":[3854.4,533.25,4273.11],"rot":[0.2716,1.5911,0]},{"pos":[3871.81,531.55,4282.29],"rot":[0.1624,1.946,0]},{"pos":[3891.99,526.97,4288.57],"rot":[0.07,2.296,0]},{"pos":[3905.86,526.21,4288.88],"rot":[0.028,2.476,0]},{"pos":[3916.66,525.61,4288.35],"rot":[-0.0084,2.6411,0]},{"pos":[3925.53,525.17,4290.33],"rot":[-0.0364,2.816,0]},{"pos":[3951.9,526.27,4292.14],"rot":[0.0028,3.1561,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3911.31,582.36,4062.15],"rot":[0.098,0.9661,0]},{"pos":[3924.13,591.47,4075.21],"rot":[0.154,1.2561,0]},{"pos":[3928.82,591.74,4090.28],"rot":[0.1652,1.456,0]},{"pos":[3944.56,592.53,4104.04],"rot":[0.2156,1.2811,0]},{"pos":[3963.69,592.53,4105.3],"rot":[0.2156,1.0912,0]},{"pos":[3990.07,593.06,4112.66],"rot":[0.2492,1.0361,0]},{"pos":[4016.74,594.52,4131.62],"rot":[0.3444,1.711,0]},{"pos":[4036.14,593.75,4123.84],"rot":[0.4424,1.8511,0]},{"pos":[4060.58,593.59,4112.06],"rot":[0.5068,1.5861,0]},{"pos":[4080.15,582.15,4109.61],"rot":[0.3528,1.5161,0]},{"pos":[4100.3,584.17,4102.3],"rot":[0.294,1.0961,0]},{"pos":[4116.93,584.09,4110.19],"rot":[0.21,1.0111,0]},{"pos":[4131.05,588.26,4113.35],"rot":[0.0924,0.8461,0]},{"pos":[4143.4,592.44,4116.53],"rot":[0.084,0.4062,0]},{"pos":[4146.29,592.17,4120.42],"rot":[0.0392,0.1961,0]}]}],
        trackData = void 0,
        trackState = null,
        trackPos = 0,
        validKeys = keys => {
            let ok3 = a => Array.isArray(a) && a.length === 3 && a.every(n => typeof n == "number" && isFinite(n));
            return Array.isArray(keys) ? keys.filter(k => k && ok3(k.pos) && ok3(k.rot)) : [];
        },
        customTrack = () => {
            if (trackData !== void 0) return trackData;
            let t = gfe.menuTrack,
                keys = gfe.menuTrackEnabled && t ? validKeys(t.keys) : [];
            return trackData = keys.length >= 2 ? {
                world: t.world,
                keys
            } : null;
        },
        presetList = null,
        presetIndex = -1,
        presetHoldTime = 10,
        presetDriftEase = 5,
        presetHold = 0,
        presetDrift = null,
        pickPreset = () => {
            presetList || (presetList = [Rg].concat(presetTracks.filter(t => !t.world || t.world.id === "main").map(t => validKeys(t.keys))).filter(k => k.length >= 2));
            let all = presetList,
                last = presetIndex,
                i;
            if (last < 0) try {
                let s = localStorage.getItem("menuLastTrack");
                s !== null && (last = +s);
            } catch (e) {}
            do i = Math.floor(Math.random() * all.length); while (all.length > 1 && i === last);
            presetIndex = i;
            try {
                localStorage.setItem("menuLastTrack", String(i));
            } catch (e) {}
            trackPos = 0;
            presetHold = 0;
            presetDrift = null;
            return trackState = {
                keys: all[i],
                loop: !1,
                preset: !0
            };
        },
        trackWorld = () => {
            let t = customTrack(),
                b = t && t.world;
            return b && b.id && b.file && Ya.some(r => r.name === b.file) ? [b.id, b.file] : ["main", "main"];
        },
        startTick = () => {
            let t = Math.random(),
                r = t < .4 ? t / .4 * .7 : .7 + (t - .4) / .6 * .3;
            return Math.floor((r - .9 + 1) % 1 * 3600 * 60);
        },
        trackSample = (keys, loop, p, pos, rot) => {
            let m = keys.length,
                n = Math.floor(p),
                f = p - n,
                key = i => keys[loop ? (i % m + m) % m : Math.max(0, Math.min(m - 1, i))],
                near = (x, ref) => ref + Math.atan2(Math.sin(x - ref), Math.cos(x - ref)),
                a = key(n - 1),
                x = key(n),
                c = key(n + 1),
                u = key(n + 2);
            for (let d = 0; d < 3; ++d) {
                let rb = x.rot[d],
                    sc = near(c.rot[d], rb);
                pos[d] = Rd(a.pos[d], x.pos[d], c.pos[d], u.pos[d], f);
                rot[d] = Rd(near(a.rot[d], rb), rb, sc, near(u.rot[d], sc), f);
            }
        },
        endDrift = (keys, span) => {
            let h = 1e-3,
                rate = gfe.menuTrackSpeed / 300,
                pos = [0, 0, 0],
                rot = [0, 0, 0],
                pPrev = [0, 0, 0],
                rPrev = [0, 0, 0];
            trackSample(keys, !1, span, pos, rot);
            trackSample(keys, !1, span - h, pPrev, rPrev);
            return {
                pos,
                rot,
                vPos: pos.map((x, d) => (x - pPrev[d]) / h * rate),
                vRot: rot.map((x, d) => (x - rPrev[d]) / h * rate)
            };
        },
        trackUpdate = ht => {
            if (!trackState) {
                let t = customTrack();
                t ? trackState = {
                    keys: t.keys,
                    loop: gfe.menuTrackLoop
                } : pickPreset();
            }
            let keys = trackState.keys,
                m = keys.length,
                loop = trackState.loop,
                span = loop ? m : m - 1;
            trackPos += gfe.menuTrackSpeed / 300 * Math.min(ht, 1);
            if (trackPos >= span) {
                if (trackState.preset) {
                    trackPos = span;
                    presetDrift || (presetDrift = endDrift(keys, span));
                    presetHold += Math.min(ht, 1);
                    if (presetHold >= presetHoldTime) return pickPreset(), trackUpdate(0);
                    let s = presetDrift,
                        k = presetDriftEase * (1 - Math.exp(-presetHold / presetDriftEase));
                    for (let d = 0; d < 3; ++d) {
                        st.position[d] = s.pos[d] + s.vPos[d] * k;
                        st.rotation[d] = s.rot[d] + s.vRot[d] * k;
                    }
                    return it(st, !1), !0;
                }
                trackPos %= span;
            }
            trackSample(keys, loop, trackPos, st.position, st.rotation);
            return it(st, !1), !0;
        };

    (function initRain() {
        let gameCanvas = Ao && Ao.parentNode ? Ao : null;
        if (!gameCanvas) {
            setTimeout(initRain, 50);
            return;
        }

        let rainCanvas = document.createElement("canvas");
        rainCanvas.id = "modRainCanvas";
        setStyle(rainCanvas, "position", "fixed");
        setStyle(rainCanvas, "left", "0");
        setStyle(rainCanvas, "top", "0");
        setStyle(rainCanvas, "width", "100%");
        setStyle(rainCanvas, "height", "100%");
        setStyle(rainCanvas, "pointer-events", "none");
        setStyle(rainCanvas, "z-index", /^-?\d+$/.test(getComputedStyle(gameCanvas).zIndex) ? getComputedStyle(gameCanvas).zIndex : "0");
        gameCanvas.after(rainCanvas);

        function resize() {
            rainCanvas.width = window.innerWidth;
            rainCanvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener("resize", resize);

        let Gl = rainCanvas.getContext("webgl2", {
            alpha: true,
            premultipliedAlpha: false
        });
        if (!Gl) {
            console.warn("Rain: WebGL2 unavailable");
            return;
        }

        const rainVertSrc = `#version 300 es
precision highp float;
uniform mat4 u_pv;
uniform vec3 u_cam;
in vec3 a_pos;
in float a_a;
out float v_a;
out float v_dist;
void main(){
    gl_Position = u_pv * vec4(a_pos,1.0);
    float d = length(a_pos - u_cam);
    v_a = a_a * smoothstep(3.0,9.0,d) * smoothstep(110.0,70.0,d);
    v_dist = d;
}`;

        const rainFragSrc = `#version 300 es
precision mediump float;
uniform float u_light;
in float v_a;
in float v_dist;
out vec4 c;
void main(){
    float fog = smoothstep(18.0, 80.0, v_dist);

    vec3 col = mix(vec3(0.60,0.80,1.0), vec3(0.50,0.64,0.86), fog);

    col *= mix(0.36, 1.46, u_light);

    c = vec4(col, v_a * 0.68 * (1.0 - fog * 0.1) * mix(1.0, 1.15, u_light));
}`;

        function mkShader(t, src) {
            let i = Gl.createShader(t);
            Gl.shaderSource(i, src);
            Gl.compileShader(i);
            if (!Gl.getShaderParameter(i, Gl.COMPILE_STATUS)) {
                console.error("Rain shader:", Gl.getShaderInfoLog(i));
                return null;
            }
            return i;
        }

        let prog = Gl.createProgram();
        Gl.attachShader(prog, mkShader(Gl.VERTEX_SHADER, rainVertSrc));
        Gl.attachShader(prog, mkShader(Gl.FRAGMENT_SHADER, rainFragSrc));
        Gl.linkProgram(prog);

        if (!Gl.getProgramParameter(prog, Gl.LINK_STATUS)) {
            console.error("Rain link:", Gl.getProgramInfoLog(prog));
            return;
        }

        let locPV = Gl.getUniformLocation(prog, "u_pv");
        let locCam = Gl.getUniformLocation(prog, "u_cam");
        let locLight = Gl.getUniformLocation(prog, "u_light");
        let locPos = Gl.getAttribLocation(prog, "a_pos");
        let locA = Gl.getAttribLocation(prog, "a_a");

        let dropCount = 8000,
            spread = 80,
            vRange = 95,
            fall = 85,
            windX = 1.8,
            windZ = 1.0,
            streakLen = 4.4;

        let drops = new Float32Array(dropCount * 6);
        let posD = new Float32Array(dropCount * 6);
        let alpD = new Float32Array(dropCount * 2);
        let invN = 1 / dropCount;

        let vao = Gl.createVertexArray(),
            q3 = Gl.createBuffer(),
            ab = Gl.createBuffer();

        Gl.bindVertexArray(vao);

        Gl.bindBuffer(Gl.ARRAY_BUFFER, q3);
        Gl.bufferData(Gl.ARRAY_BUFFER, posD, Gl.DYNAMIC_DRAW);
        Gl.enableVertexAttribArray(locPos);
        Gl.vertexAttribPointer(locPos, 3, Gl.FLOAT, false, 0, 0);

        Gl.bindBuffer(Gl.ARRAY_BUFFER, ab);
        Gl.bufferData(Gl.ARRAY_BUFFER, alpD, Gl.DYNAMIC_DRAW);
        Gl.enableVertexAttribArray(locA);
        Gl.vertexAttribPointer(locA, 1, Gl.FLOAT, false, 0, 0);

        Gl.bindVertexArray(null);

        function spawnDrop(s, cx, cy, f$, top) {
            let bx = cx + (Math.random() - 0.5) * spread * 2;
            let k$ = f$ + (Math.random() - 0.5) * spread * 2;

            drops[s * 6 + 0] = bx;
            drops[s * 6 + 1] =
                top ?
                cy + vRange * 0.5 + Math.random() * vRange * 0.4 :
                cy + (Math.random() - 0.5) * vRange;

            drops[s * 6 + 2] = k$;
            drops[s * 6 + 3] = 0.55 + Math.random() * 0.45;
            drops[s * 6 + 4] = 0.6 + Math.random() * 0.8;
            drops[s * 6 + 5] =
                (ae && ae.getHeight) ?
                ae.getHeight(bx, k$) :
                (cy - 5);
        }

        for (let s = 0; s < dropCount; s++) {
            spawnDrop(s, 0, 10, 0, false);
        }

        function mulberry32(a) {
            return function() {
                a |= 0;
                a = a + 0x6D2B79F5 | 0;

                let t = Math.imul(a ^ a >>> 15, 1 | a);
                t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;

                return ((t ^ t >>> 14) >>> 0) / 4294967296;
            };
        }

        let today = new Date();
        let seed =
            today.getFullYear() * 10000 +
            (today.getMonth() + 1) * 100 +
            today.getDate();

        let rainWindows = [];

        function buildRainWindows() {
            let rng = mulberry32(seed);

            let count = Math.round(
                gfe.rainWindowMin +
                rng() * (gfe.rainWindowMax - gfe.rainWindowMin)
            );

            let minH = gfe.rainDurMin / 60;
            let maxH = gfe.rainDurMax / 60;

            rainWindows = [];

            for (let s = 0; s < count; s++) {
                let start = rng() * 22;
                let dur = minH + rng() * (maxH - minH);

                rainWindows.push([start, start + dur]);
            }
        }

        buildRainWindows();

        

        const desertEnvs = [
            "Desert",
            "Marrowlands",
            "Oasis",
            "Headless Ruins"
        ];

        function isRaining() {
            if (gfe.rainForce) return true;

            let n = new Date();

            let g =
                n.getHours() +
                n.getMinutes() / 60 +
                n.getSeconds() / 3600;

            return rainWindows.some(
                x => g >= x[0] && g < x[1]
            );
        }

        function checkRainDisables() {
            if (!gfe.rainEnabled) return true;

            if (gfe.rainNoDesert && ae && ae.player) {
                try {
                    let areaId =
                        ae.getAreaId(
                            ae.player.pos[0],
                            ae.player.pos[2]
                        );

                    let area = areaId && Ha.get(areaId);

                    if (
                        area &&
                        desertEnvs.some(
                            n => area.name && area.name.includes(n)
                        )
                    ) {
                        return true;
                    }
                } catch (e) {}
            }

            return false;
        }

        const spreadBorder = spread + 6;
        const tiltX = windX * (streakLen / fall);
        const tiltZ = windZ * (streakLen / fall);
        const groundFadeDist = 6;

        let lightSmooth = 1;

        function sampleWorldLight() {
            let lum = 1;

            try {
                let sa = Ne.environment.data.worldlight;

                let r = Math.min(
                    1,
                    sa[0] * 0.5 + sa[3]
                );

                let h = Math.min(
                    1,
                    sa[1] * 0.5 + sa[4]
                );

                let b = Math.min(
                    1,
                    sa[2] * 0.5 + sa[5]
                );

                lum = Math.min(
                    1,
                    (0.299 * r + 0.587 * h + 0.114 * b) / 0.6
                );
            } catch (e) {}

            lightSmooth +=
                (lum - lightSmooth) * 0.05;

            return lightSmooth;
        }

        let last = performance.now();

        let rainCheckTimer = 0,
            pauseCheckTimer = 0;

        let raining = isRaining(),
            paused = checkRainDisables();

        let rainAmount = raining ? 1 : 0;

        let prevActiveDrops = 0;

        const raycastPerFrame = 150;

        let visD =
            new Float32Array(dropCount).fill(1.0);

        let rcCursor = 0;

        function frame(now) {
            requestAnimationFrame(frame);

            let cam;

            try {
                cam = Ne.camera.data;
            } catch (e) {
                return;
            }

            if (
                !cam ||
                !cam.projectionViewMatrix ||
                !cam.cameraPosition
            ) {
                return;
            }

            let cx = cam.cameraPosition[0],
                cy = cam.cameraPosition[1],
                f$ = cam.cameraPosition[2];

            let dt = Math.min(
                (now - last) / 1000,
                0.05
            );

            last = now;

            rainCheckTimer -= dt;

            if (rainCheckTimer <= 0) {
                rainCheckTimer = 1;
                raining = isRaining();
            }

            pauseCheckTimer -= dt;

            if (pauseCheckTimer <= 0) {
                pauseCheckTimer = 0;
                paused = checkRainDisables();
            }

            let targetRain = raining ? 1 : 0;

            let rainEase = gfe.rainEaseSpeed;

            rainAmount +=
                (targetRain - rainAmount) *
                (1.0 - Math.exp(-dt / rainEase));

            let renderRainAmount =
                paused ? 0 : rainAmount;

            window.rainAmount = renderRainAmount;

            if (renderRainAmount <= 0) {
                if (prevActiveDrops > 0) {
                    alpD.fill(
                        0,
                        0,
                        prevActiveDrops * 2
                    );

                    Gl.bindBuffer(
                        Gl.ARRAY_BUFFER,
                        ab
                    );

                    Gl.bufferSubData(
                        Gl.ARRAY_BUFFER,
                        0,
                        alpD,
                        0,
                        prevActiveDrops * 2
                    );

                    prevActiveDrops = 0;
                }

                setStyle(rainCanvas, "display", "none");
                return;
            }

            setStyle(rainCanvas, "display", "");

            let activeDrops =
                Math.ceil(
                    dropCount * renderRainAmount
                );

            let wxdt = windX * dt,
                wzdt = windZ * dt,
                falldt = fall * dt;

            let fadeEdgeStart = Math.floor(
                (renderRainAmount - 0.1) *
                dropCount
            );

            if (fadeEdgeStart < 0) {
                fadeEdgeStart = 0;
            }

            if (fadeEdgeStart > activeDrops) {
                fadeEdgeStart = activeDrops;
            }

            for (let s = 0; s < activeDrops; s++) {
                let base = s * 6;

                let spd = drops[base + 4];

                let nx =
                    drops[base] +
                    wxdt * spd;

                let Cw =
                    drops[base + 1] -
                    falldt * spd;

                let s$ =
                    drops[base + 2] +
                    wzdt * spd;

                let dx = nx - cx,
                    g$ = s$ - f$;

                if (
                    Cw < drops[base + 5] ||
                    dx < -spreadBorder ||
                    dx > spreadBorder ||
                    g$ < -spreadBorder ||
                    g$ > spreadBorder
                ) {
                    spawnDrop(
                        s,
                        cx,
                        cy,
                        f$,
                        true
                    );

                    nx = drops[base];
                    Cw = drops[base + 1];
                    s$ = drops[base + 2];
                } else {
                    drops[base] = nx;
                    drops[base + 1] = Cw;
                    drops[base + 2] = s$;
                }

                let pbase = s * 6;

                posD[pbase] = nx - tiltX;
                posD[pbase + 1] = Cw + streakLen;
                posD[pbase + 2] = s$ - tiltZ;

                posD[pbase + 3] = nx;
                posD[pbase + 4] = Cw;
                posD[pbase + 5] = s$;

                let fade;

                if (s < fadeEdgeStart) {
                    fade = 1.0;
                } else {
                    fade =
                        (renderRainAmount - s * invN) *
                        10.0;

                    if (fade < 0) {
                        fade = 0;
                    } else if (fade > 1) {
                        fade = 1;
                    }
                }

                let baseAlpha =
                    drops[base + 3] *
                    fade *
                    visD[s];

                let abase = s * 2;

                let aboveGround = Cw - drops[base + 5],
                    fadeTop = Math.min(Math.max((aboveGround + streakLen) / groundFadeDist, 0), 1),
                    fadeBot = Math.min(Math.max(aboveGround / groundFadeDist, 0), 1);

                alpD[abase] = baseAlpha * fadeTop;
                alpD[abase + 1] =
                    baseAlpha * 0.25 * fadeBot;
            }

            if (
                ae &&
                ae.raycastEnvironmentAny &&
                activeDrops > 0
            ) {
                rcCursor =
                    rcCursor % activeDrops;

                for (
                    let r = 0; r < raycastPerFrame; r++
                ) {
                    let s = rcCursor;

                    rcCursor =
                        (rcCursor + 1) %
                        activeDrops;

                    let rbase = s * 6;

                    let bx = drops[rbase],
                        by =
                        drops[rbase + 1] +
                        streakLen * 0.5,
                        k$ = drops[rbase + 2];

                    let hit = false;

                    try {
                        hit = ae.raycastEnvironmentAny(
                            cx,
                            cy,
                            f$,
                            bx - cx,
                            by - cy,
                            k$ - f$,
                            0
                        );
                    } catch (e) {}

                    visD[s] +=
                        ((hit ? 0.0 : 1.0) -
                            visD[s]) *
                        0.5;
                }
            }

            if (activeDrops < prevActiveDrops) {
                alpD.fill(
                    0,
                    activeDrops * 2,
                    prevActiveDrops * 2
                );
            }

            let uploadAlpCount =
                Math.max(
                    activeDrops,
                    prevActiveDrops
                );

            prevActiveDrops = activeDrops;

            Gl.viewport(
                0,
                0,
                rainCanvas.width,
                rainCanvas.height
            );

            Gl.clearColor(0, 0, 0, 0);
            Gl.clear(Gl.COLOR_BUFFER_BIT);

            Gl.enable(Gl.BLEND);

            Gl.blendFunc(
                Gl.SRC_ALPHA,
                Gl.ONE_MINUS_SRC_ALPHA
            );

            Gl.useProgram(prog);

            Gl.uniformMatrix4fv(
                locPV,
                false,
                cam.projectionViewMatrix
            );

            Gl.uniform3f(
                locCam,
                cx,
                cy,
                f$
            );

            Gl.uniform1f(
                locLight,
                sampleWorldLight()
            );

            Gl.bindBuffer(
                Gl.ARRAY_BUFFER,
                q3
            );

            Gl.bufferSubData(
                Gl.ARRAY_BUFFER,
                0,
                posD,
                0,
                activeDrops * 6
            );

            Gl.bindBuffer(
                Gl.ARRAY_BUFFER,
                ab
            );

            Gl.bufferSubData(
                Gl.ARRAY_BUFFER,
                0,
                alpD,
                0,
                uploadAlpCount * 2
            );

            Gl.bindVertexArray(vao);

            Gl.drawArrays(
                Gl.LINES,
                0,
                activeDrops * 2
            );

            Gl.bindVertexArray(null);
        }

        requestAnimationFrame(frame);
    })();

    var K = [],
        Ec = [],
        Qe = {},
        Ne = {},
        Zn = {},
        V1 = () => {
            Qe = {
                shadowMaps: {
                    value: [Yr.depthTexture, Hr[1].depthTexture]
                },
                folFadeEnd: gfxFolFade
            };
            for (let e in Fs) {
                let o = Fs[e];
                o.vert && (o.vert = o.vert.replace("#SHADOWS", Ve.shadows ? 1 : 0)), o.frag && (o.frag = o.frag.replace("#SHADOWS", Ve.shadows ? 1 : 0)), o.frag && (o.frag = gfxPatchShader(o.frag, e))
            }
            let t = {
                mesh: ["position", "uv", "normal", "color", "interiorlight", "alpha", "worldMatrix"],
                effect: ["position", "uv", "normal", "color", "uvshift", "ycutoff", "worldMatrix"],
                drop: ["position", "shine", "uv", "uvshift", "worldMatrix"],
                particle: ["position", "info", "progress", "scaleRota", "colStart", "colEnd"],
                ribbon: ["position", "uv"],
                foliage: ["position", "uv", "instPos", "instNorm"],
                post: ["position", "uv"]
            };
            K[13] = Ye({
                vertex: ps.vert,
                fragment: ps.frag,
                cullFace: null,
                uniforms: {
                    u_rainAmount: {
                        value: 0
                    }
                },
                instanced: [{
                    name: "instPos",
                    size: 4
                }, {
                    name: "instNorm",
                    size: 3
                }],
                globalUniforms: Qe,
                transparent: !0,
                attributeLocations: t.foliage
            }), K[14] = Ye({
                vertex: hs.vert,
                fragment: hs.frag,
                cullFace: null,
                uniforms: {
                    u_rainAmount: {
                        value: 0
                    }
                },
                instanced: [{
                    name: "instPos",
                    size: 4
                }, {
                    name: "instNorm",
                    size: 3
                }],
                globalUniforms: Qe,
                transparent: !0,
                attributeLocations: t.foliage
            }), K[3] = Ye({
                vertex: vs.vert,
                fragment: vs.frag,
                instanced: [{
                    name: "color",
                    size: 4
                }, {
                    name: "alpha",
                    size: 1
                }, {
                    name: "interiorlight",
                    size: 4
                }],
                globalUniforms: Qe,
                attributeLocations: t.mesh,
                transparent: !0
            }), K[4] = Ye({
                vertex: Yn.vert,
                fragment: Yn.frag,
                instanced: [{
                    name: "interiorlight",
                    size: 4
                }],
                globalUniforms: Qe,
                attributeLocations: t.mesh
            }), K[5] = Ye({
                vertex: bs.vert,
                fragment: bs.frag,
                globalUniforms: Qe,
                attributeLocations: t.mesh
            }), K[15] = Ye({
                vertex: gs.vert,
                fragment: gs.frag,
                globalUniforms: Qe,
                transparent: !0,
                depthWrite: !1,
                instanced: [{
                    name: "color",
                    size: 4
                }, {
                    name: "uvshift",
                    size: 4
                }, {
                    name: "ycutoff",
                    size: 2
                }],
                attributeLocations: t.effect
            }), K[6] = Ye({
                vertex: Yn.vert,
                fragment: vc.frag,
                globalUniforms: Qe,
                instanced: [{
                    name: "interiorlight",
                    size: 4
                }],
                attributeLocations: t.mesh
            }), K[7] = Ye({
                vertex: xs.vert,
                fragment: xs.frag,
                instanced: [{
                    name: "color",
                    size: 4
                }],
                globalUniforms: Qe,
                attributeLocations: t.mesh
            }), K[10] = Ye({
                vertex: ms.vert,
                fragment: ms.frag,
                instanced: [{
                    name: "uvshift",
                    size: 4
                }, {
                    name: "shine",
                    size: 1
                }],
                globalUniforms: Qe,
                attributeLocations: t.drop
            }), K[8] = Ye({
                vertex: ys.vert,
                fragment: ys.frag,
                globalUniforms: Qe,
                attributeLocations: t.mesh
            }), K[9] = Ye({
                vertex: Ms.vert,
                fragment: Ms.frag,
                globalUniforms: Qe,
                attributeLocations: t.mesh
            }), K[12] = Ye({
                vertex: _s.vert,
                fragment: gfe.classicSky ? classicSunPatch(Sc.frag) : Sc.frag,
                transparent: !0,
                uniforms: {
                    u_rain: {
                        value: 0
                    }
                },
                globalUniforms: Qe,
                attributeLocations: t.mesh
            }), K[20] = Ye({
                vertex: gfe.classicWater ? classicWaterVert : ks.vert,
                fragment: ks.frag,
                transparent: !0,
                cullFace: !1,
                globalUniforms: Qe,
                attributeLocations: t.mesh
            }), K[11] = Ye({
                vertex: _s.vert,
                fragment: gfe.classicSky ? classicSkyFrag : Cc.frag,
                cullFace: null,
                depthTest: !0,
                uniforms: {
                    u_rain: {
                        value: 0
                    }
                },
                globalUniforms: Qe,
                attributeLocations: t.mesh
            }), K[1] = Ye({
                cullFace: null,
                vertex: Qn.vert,
                fragment: Fc.frag,
                globalUniforms: Qe,
                attributeLocations: t.mesh
            }), K[2] = Ye({
                vertex: Qn.vert,
                fragment: Qn.frag,
                globalUniforms: Qe,
                attributeLocations: t.mesh
            }), K[16] = Ye({
                vertex: ws.vert,
                fragment: xc.frag,
                transparent: !0,
                depthWrite: !1,
                globalUniforms: Qe,
                attributeLocations: t.particle
            }), K[17] = Ye({
                vertex: ws.vert,
                fragment: bc.frag,
                transparent: !1,
                globalUniforms: Qe,
                attributeLocations: t.particle
            }), K[18] = Ye({
                vertex: Xn.vert,
                fragment: Xn.frag,
                transparent: !0,
                cullFace: null,
                depthWrite: !1,
                globalUniforms: Qe,
                attributeLocations: t.ribbon
            }), K[19] = Ye({
                vertex: Xn.vert,
                fragment: kc.frag,
                transparent: !0,
                cullFace: null,
                depthWrite: !1,
                globalUniforms: Qe,
                attributeLocations: t.ribbon
            }), K[32] = Ye({
                vertex: Er,
                fragment: yc.frag,
                depthWrite: !1,
                depthTest: !1,
                globalUniforms: Qe,
                uniforms: {
                    inputA: {
                        value: null
                    }
                },
                attributeLocations: t.post
            }), K[30] = Ye({
                vertex: Er,
                fragment: wc.frag,
                depthWrite: !1,
                depthTest: !1,
                uniforms: {
                    inputA: {
                        value: null
                    },
                    offset: {
                        value: [0, 0, 0, 0, 0, 0, 0, 0]
                    },
                    amount: {
                        value: [0, 0, 0, 0]
                    }
                },
                globalUniforms: Qe,
                attributeLocations: t.post
            }), K[31] = Ye({
                vertex: Er,
                fragment: _c.frag,
                depthWrite: !1,
                depthTest: !1,
                uniforms: {
                    inputA: {
                        value: null
                    },
                    inputB: {
                        value: null
                    },
                    amount: {
                        value: 1
                    }
                },
                globalUniforms: Qe,
                attributeLocations: t.post
            }), K[33] = Ye({
                vertex: Er,
                fragment: Mc.frag,
                depthWrite: !1,
                depthTest: !1,
                globalUniforms: Qe,
                uniforms: {
                    inputA: {
                        value: null
                    },
                    tint: {
                        value: [0, 0, 0, 0]
                    },
                    warp: {
                        value: .5
                    }
                },
                attributeLocations: t.post
            }), K[34] = Ye({
                vertex: Er,
                fragment: Ac.frag,
                uniforms: {
                    seed: {
                        value: Date.now() % 1e3
                    }
                },
                attributeLocations: ["position", "uv"]
            }), K[35] = Ye({
                vertex: Er,
                fragment: ssaoShader.frag,
                depthWrite: !1,
                depthTest: !1,
                globalUniforms: Qe,
                uniforms: {
                    inputA: {
                        value: null
                    }
                },
                attributeLocations: t.post
            }), K[36] = Ye({
                vertex: Er,
                fragment: ssaoBlurShader.frag,
                depthWrite: !1,
                depthTest: !1,
                globalUniforms: Qe,
                uniforms: {
                    inputA: {
                        value: null
                    },
                    depthTex: {
                        value: null
                    },
                    blurStep: {
                        value: 0
                    }
                },
                attributeLocations: t.post
            }), K[37] = Ye({
                vertex: Er,
                fragment: ssaoTemporalShader.frag,
                depthWrite: !1,
                depthTest: !1,
                globalUniforms: Qe,
                uniforms: {
                    inputA: {
                        value: null
                    },
                    inputB: {
                        value: null
                    },
                    depthTex: {
                        value: null
                    },
                    prevProjectionViewMatrix: {
                        value: new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                    },
                    blendAlpha: {
                        value: 1.0
                    }
                },
                attributeLocations: t.post
            }), K[38] = Ye({
                vertex: Er,
                fragment: ssaoCompositeShader.frag,
                depthWrite: !1,
                depthTest: !1,
                uniforms: {
                    inputA: {
                        value: null
                    },
                    inputB: {
                        value: null
                    }
                },
                attributeLocations: t.post
            }), K[39] = Ye({
                vertex: Er,
                fragment: tonemapFrag,
                depthWrite: !1,
                depthTest: !1,
                uniforms: {
                    inputA: {
                        value: null
                    },
                    exposure: {
                        value: 1
                    },
                    contrast: {
                        value: 1
                    },
                    saturation: {
                        value: 1
                    },
                    tonemapMode: {
                        value: 0
                    },
                    ditherAmount: {
                        value: 1
                    }
                },
                attributeLocations: t.post
            }), K[40] = Ye({
                vertex: Er,
                fragment: bloomDownFrag,
                depthWrite: !1,
                depthTest: !1,
                uniforms: {
                    inputA: {
                        value: null
                    },
                    texelSize: {
                        value: [1, 1]
                    },
                    prefilter: {
                        value: 0
                    },
                    skyBloom: {
                        value: .25
                    },
                    depthTex: {
                        value: null
                    },
                    filterCurve: {
                        value: [1, 1, 1, 1]
                    }
                },
                attributeLocations: t.post
            }), K[41] = Ye({
                vertex: Er,
                fragment: bloomUpFrag,
                depthWrite: !1,
                depthTest: !1,
                uniforms: {
                    inputA: {
                        value: null
                    },
                    texelSize: {
                        value: [1, 1]
                    },
                    bloomRadius: {
                        value: 1
                    }
                },
                attributeLocations: t.post
            }), K[42] = Ye({
                vertex: Er,
                fragment: bloomMergeHQFrag,
                depthWrite: !1,
                depthTest: !1,
                uniforms: {
                    inputA: {
                        value: null
                    },
                    inputB: {
                        value: null
                    },
                    bloomAmount: {
                        value: .3
                    },
                    exposure: {
                        value: 1
                    },
                    contrast: {
                        value: 1
                    },
                    saturation: {
                        value: 1
                    },
                    tonemapMode: {
                        value: 0
                    },
                    ditherAmount: {
                        value: 1
                    },
                    tonemapEnabled: {
                        value: 0
                    }
                },
                attributeLocations: t.post
            }), K[45] = Ye({
                vertex: Er,
                fragment: godRayFrag,
                depthWrite: !1,
                depthTest: !1,
                globalUniforms: Qe,
                uniforms: {
                    inputA: {
                        value: null
                    },
                    depthTex: {
                        value: null
                    },
                    grIntensity: {
                        value: .2
                    },
                    grDistance: {
                        value: 120
                    },
                    grPhase: {
                        value: .5
                    },
                    grHeight: {
                        value: 60
                    },
                    grContrast: {
                        value: 2
                    },
                    grDust: {
                        value: .45
                    },
                    grGate: {
                        value: .7
                    },
                    grRain: {
                        value: 0
                    }
                },
                attributeLocations: t.post
            }), K[46] = Ye({
                vertex: fireflyVert,
                fragment: fireflyFrag,
                cullFace: null,
                depthTest: !0,
                depthWrite: !1,
                transparent: !0,
                globalUniforms: Qe,
                uniforms: {
                    ffRange: {
                        value: 70
                    },
                    ffBaseY: {
                        value: 0
                    },
                    ffHeight: {
                        value: 8
                    },
                    ffSize: {
                        value: .12
                    },
                    ffDrift: {
                        value: 1.5
                    },
                    ffColor: {
                        value: [.71, 1, .37]
                    },
                    ffBrightness: {
                        value: 1
                    }
                },
                attributeLocations: ["corner", "fid"]
            }), K[47] = Ye({
                vertex: Er,
                fragment: sharpenFrag,
                depthWrite: !1,
                depthTest: !1,
                uniforms: {
                    inputA: {
                        value: null
                    },
                    texelSize: {
                        value: [1, 1]
                    },
                    sharpAmount: {
                        value: .4
                    }
                },
                attributeLocations: t.post
            }), K[48] = Ye({
                vertex: Er,
                fragment: rainMistFrag,
                depthWrite: !1,
                depthTest: !1,
                globalUniforms: Qe,
                uniforms: {
                    inputA: {
                        value: null
                    },
                    depthTex: {
                        value: null
                    },
                    mistAmount: {
                        value: 0
                    },
                    mistWind: {
                        value: [1.8, 1]
                    },
                    mistShadows: {
                        value: 0
                    }
                },
                attributeLocations: t.post
            }), Tn(K[46], v.ONE, v.ONE), Tn(K[13], v.SRC_ALPHA, v.ONE_MINUS_SRC_ALPHA, v.ZERO, v.ZERO), Tn(K[14], v.SRC_ALPHA, v.ONE_MINUS_SRC_ALPHA, v.ZERO, v.ZERO), A_(K, Qe), Tn(K[18], v.ONE, v.ONE_MINUS_SRC_ALPHA), Tn(K[16], v.ONE, v.ONE_MINUS_SRC_ALPHA), Tn(K[15], v.ONE, v.ONE_MINUS_SRC_ALPHA), Ec.push(3, 4, 6, 7, 10, 15, 5)
        },
        A_ = (t, e) => {
            let o = t[4].program,
                r = ["Environment", "Camera", "Pointlights", "Shadows", "Circle", "Screen", "Sky", "MeshTerrain", "Water"],
                n = [o, o, o, o, o, t[32].program, t[11].program, t[8].program, t[20].program],
                i = [!0, !0, !0, !0, !0, !0, !0, !1, !1],
                s = [];
            for (let a = 0; a < r.length; ++a) {
                let c = r[a],
                    l = D1(n[a], c, a),
                    f = c.toLowerCase();
                if (Zn[f] = l, s.push(l), i[a]) {
                    let u = Xr(l);
                    fr(u), Ne[f] = u
                }
            }
            for (let a = 0; a < t.length; ++a) {
                let c = t[a];
                c && (Hd(c, e), Yd(c, s))
            }
        },
        z1, Ss = (t, e) => {
            if (t !== z1 || e) {
                let o = Ne.camera.data;
                z1 = t, yo(o.cameraPosition, t.worldPosition, 0), yo(o.viewMatrix, t.viewMatrix, 0), yo(o.projectionMatrix, t.projectionMatrix, 0), yo(o.projectionViewMatrix, t.projectionViewMatrix, 0), It(Ne.camera)
            }
        },
        R1 = (t, e) => {
            As(Ne.screen.data.resolution, t, e), It(Ne.screen)
        };
    var dr = [],
        U1 = (10 + 1) * 6,
        ur = new Uint32Array(U1);
    for (let t = 0, e = 0; t < U1; t += 6, e += 2) ur[t + 0] = e, ur[t + 1] = e + 1, ur[t + 2] = e + 3, ur[t + 3] = e, ur[t + 4] = e + 3, ur[t + 5] = e + 2;
    var Ps = new Map,
        B1 = (t, e, o, r, n, i) => {
            let s = $a.get(t),
                a = Ps.get(s.steps),
                c;
            return !a || a.length === 0 ? c = new Lc(s) : c = a.pop(), c.reset(s, e, o, r, n, i), dr.push(c), c
        },
        j1 = (t, e) => {
            for (let o = 0; o < dr.length; o++)
                if (dr[o].tick(t, e), dr[o].remove) {
                    let r = dr.splice(o--, 1)[0];
                    P_(r)
                }
        },
        P_ = t => {
            Ps.has(t.maxSteps) || Ps.set(t.maxSteps, []), Ps.get(t.maxSteps).push(t), t.onCache()
        };
    var q1 = () => {
            for (let t = 0; t < dr.length; ++t) {
                let e = dr[t];
                e.mesh.transform.visible && Wt(e.mesh, K[e.mesh.program])
            }
        },
        Lc = class {
            constructor(e) {
                this.maxSteps = e.steps, this.stepTimer = new go(0, 1), this.duration = new go(0, 1), this.remove = !1, this.a = [0, 0, 0], this.b = [0, 0, 0], this.timeoutSteps = 0;
                let o = this.maxSteps + 1;
                this.uv = new Float32Array(o * 4), this.positions = new Float32Array(o * 6);
                for (let r = 0, n = 0; r < o; ++r, n += 4) this.uv[n] = r / this.maxSteps, this.uv[n + 2] = r / this.maxSteps, this.uv[n + 1] = 1, this.uv[n + 3] = 0;
                this.geometry = dt({
                    position: {
                        size: 3,
                        data: this.positions
                    },
                    uv: {
                        size: 2,
                        data: this.uv
                    },
                    index: {
                        type: v.UNSIGNED_INT,
                        data: ur.subarray(0, 6 * this.maxSteps)
                    }
                }), Wi(this.geometry, this.geometry.attributes.uv, o), this.mesh = Bt(this.geometry, 19, v.TRIANGLES), this.mesh.uniformData.offset = [0, 0], this.waitingForTexture = !1, this.parent = null
            }
            reset(e, o, r, n, i, s) {
                this.stepTimer.reset(0, e.interval), this.duration.reset(s, i), this.currentStep = 0, this.a = Be(this.a, r), this.b = Be(this.b, n), this.mesh.uniformData.offset[1] = 1 / (this.maxSteps + 1), this.remove = !1, this.timeoutSteps = 0, this.geometry.drawRangeCount = 0, this.mesh.uniformData.colStart = e.colStart, this.mesh.uniformData.colEnd = e.colEnd, e.texture > 0 ? (this.waitingForTexture = !0, this.mesh.program = 19, Et(e.texture, a => {
                    this.mesh.uniformData.diffuse = a, this.waitingForTexture = !1
                })) : (this.waitingForTexture = !1, this.mesh.program = 18, this.mesh.uniformData.diffuse = void 0), this.parent = o
            }
            tick(e, o) {
                if (this.waitingForTexture) {
                    this.mesh.transform.visible = !1;
                    return
                }
                if (this.duration.duration > 0 && this.duration.done(o)) {
                    this.remove = !0;
                    return
                }
                if (this.parent !== null) {
                    if (this.mesh.transform.visible = this.parent.visible && (!this.parent.parent || this.parent.parent.visible), !this.mesh.transform.visible) return;
                    this.mesh.transform.visible && this.timeoutSteps == 0 && (this.positions.set(Xo(Xe, this.a, this.parent.worldMatrix), 0), this.positions.set(Xo(Xe, this.b, this.parent.worldMatrix), 3))
                }
                this.stepTimer.done(o) && (this.stepTimer.reset(o), this.step()), Pt(this.geometry, this.geometry.attributes.position);
                let r = this.stepTimer.fraction(o);
                this.mesh.uniformData.offset[0] = (1 - r) / this.maxSteps
            }
            detach() {
                this.timeoutSteps = Math.max(1, this.currentStep), this.parent = null
            }
            step() {
                this.currentStep = Math.min(this.maxSteps, this.currentStep + 1), this.positions.copyWithin(6, 0), this.geometry.drawRangeCount = this.currentStep * 6, this.timeoutSteps > 0 && (this.timeoutSteps--, this.timeoutSteps == 0 && (this.remove = !0))
            }
            onCache() {
                this.mesh.transform.visible = !1, this.parent = null
            }
        };
    var Es = [],
        mr = 1e3,
        L_ = 500,
        Zr = L_,
        Bo = [],
        O1 = () => {
            V_();
            for (let t = 0; t < mr; ++t) Es.push({
                pos: [-0, -0, -0],
                vel: [-0, -0, -0],
                info: es.get(1),
                distance: 0,
                start: 0,
                end: 1.01,
                forced: !1,
                scaleRota: [0, 0, 0, 0],
                infoVec: [0, 0, 0, 0],
                progVec: [0, 0]
            })
        },
        Ls = (t, e, o, r) => {
            let n = e,
                i = o,
                s = !0,
                a = o;
            for (; e - o < 0;) s ? t[a].distance > t[e].distance ? (N1(t, a, e), a = e, o--, s = !s) : e++ : t[a].distance >= t[o].distance ? o-- : (N1(t, a, o), e++, a = o, s = !s);
            a - 1 > n && Ls(t, n, a - 1, r), a + 1 < i && Ls(t, a + 1, i, r)
        },
        N1 = (t, e, o) => {
            let r = t[e];
            t[e] = t[o], t[o] = r
        },
        D_ = (t, e, o) => {
            let r = [
                    [],
                    []
                ],
                n = 0,
                i = 0;
            for (; n < Bo.length;) {
                let s = Bo[n];
                if (s.start < 0 || s.end > t) {
                    if (Bo[i] = s, i++, s.pos[0] > -1e3) {
                        let a = s.pos,
                            c = s.vel,
                            l = s.info.acc;
                        if (a[0] += (c[0] += l[0] * e) * e, a[1] += (c[1] += l[1] * e) * e, a[2] += (c[2] += l[2] * e) * e, s.info.friction > 0) {
                            let f = 1 - s.info.friction;
                            c[0] *= f, c[1] *= f, c[2] *= f
                        }
                        if (s.distance = Mt(o.frustum[5], a) + o.frustumConstants[5], s.distance < uc && s.distance > 0) {
                            let f = s.start < 0 ? (Math.sin(t / s.info.duration) + 1) * .5 : (t - s.start) / s.info.duration;
                            s.progVec[0] = f, s.progVec[1] = Rr[s.info.interp](f), r[s.info.blend].push(s)
                        }
                    }
                } else Zr += s.forced ? 1 : 0, Es.push(s);
                ++n
            }
            return Bo.length = i, Ls(r[0], 0, r[0].length - 1, r[0].length), Ls(r[1], 0, r[1].length - 1, r[1].length), r
        },
        T_ = t => {
            for (let e = 0; e < 2; ++e) z_(t[e], Kn[e]), I_(t[e], Kn[e], pr[e])
        },
        I_ = (t, e, o) => {
            t.length > 0 ? (o.transform.visible = !0, Gd(e, 0, t.length), Pt(e, e.attributes.position), Pt(e, e.attributes.info), Pt(e, e.attributes.progress), Pt(e, e.attributes.scaleRota), Pt(e, e.attributes.colStart), Pt(e, e.attributes.colEnd)) : o.transform.visible = !1
        },
        z_ = (t, e) => {
            let o = e.attributes.position.data,
                r = e.attributes.progress.data,
                n = e.attributes.info.data,
                i = e.attributes.scaleRota.data,
                s = e.attributes.colStart.data,
                a = e.attributes.colEnd.data;
            for (let c = 0; c < t.length; ++c) {
                let l = t[c],
                    f = l.pos,
                    u = l.infoVec,
                    d = l.progVec,
                    m = l.scaleRota,
                    h = l.info.colStart,
                    g = l.info.colEnd,
                    M = c * 2,
                    x = c * 3,
                    w = c * 4;
                o[x] = f[0], o[x + 1] = f[1], o[x + 2] = f[2], n[w] = u[0], n[w + 1] = u[1], n[w + 2] = u[2], n[w + 3] = u[3], r[M] = d[0], r[M + 1] = d[1], i[w] = m[0], i[w + 1] = m[1], i[w + 2] = m[2], i[w + 3] = m[3], s[w] = h[0], s[w + 1] = h[1], s[w + 2] = h[2], s[w + 3] = h[3], a[w] = g[0], a[w + 1] = g[1], a[w + 2] = g[2], a[w + 3] = g[3]
            }
        },
        W1 = t => {
            let e = D_(Zi, t, Me);
            T_(e)
        },
        Uo = [0, 0, 0],
        jo = (t, e, o = 0, r = 0, n = 0, i = 0, s = 0, a = 0, c = !1) => {
            if (e ? Qo(Uo, o, r, n, e) : se(Uo, o, r, n), c) {
                if (Zr <= 0) return
            } else {
                if (Mt(Me.frustum[0], Uo) + Me.frustumConstants[0] < 0 || Mt(Me.frustum[1], Uo) + Me.frustumConstants[1] < 0) return;
                let h = Mt(Me.frustum[5], Uo) + Me.frustumConstants[5];
                if (h < 0 || h * 10 > Es.length) return
            }
            let l = Es.pop();
            if (!l) {
                let h = Bo.length - 1;
                for (; h >= 0 && Bo[h].forced;) --h;
                h >= 0 && (l = Bo.splice(h, 1)[0])
            }
            if (!l) return;
            let f = 1;
            if (e) {
                let h = e[0],
                    g = e[1],
                    M = e[2];
                f = Math.sqrt(h * h + g * g + M * M), Ii(l.vel, i, s, a, e)
            } else se(l.vel, i, s, a);
            l.pos[0] = Uo[0], l.pos[1] = Uo[1], l.pos[2] = Uo[2];
            let u = es.get(t);
            l.info = u, l.start = c ? -1 : Zi, l.end = l.start + l.info.duration;
            let d = Math.random() * u.randomRota,
                m = d + u.rota;
            return Math.random() < .5 && (d *= -1, m *= -1), Cr(l.scaleRota, u.scaleStart * f, u.scaleEnd * f, d, m), Cr(l.infoVec, u.idLoop, 0, u.idStart, u.idEnd + 1), As(l.progVec, 0, 0), l.forced = c, Bo.push(l), c && Zr--, l
        },
        pr = [],
        Kn = [],
        V_ = () => {
            for (let t = 0; t < 2; ++t) Kn[t] = dt({
                position: {
                    size: 3,
                    data: new Float32Array(3 * mr)
                },
                progress: {
                    size: 2,
                    data: new Float32Array(2 * mr)
                },
                info: {
                    size: 4,
                    data: new Float32Array(4 * mr)
                },
                scaleRota: {
                    size: 4,
                    data: new Float32Array(4 * mr)
                },
                colStart: {
                    size: 4,
                    data: new Float32Array(4 * mr)
                },
                colEnd: {
                    size: 4,
                    data: new Float32Array(4 * mr)
                }
            });
            pr[0] = Bt(Kn[0], 17, v.POINTS), pr[1] = Bt(Kn[1], 16, v.POINTS), Et(1215, t => {
                pt("particleDiffuse", t, 0, K[17]), pt("particleDiffuse", t, 0, K[16])
            })
        };
    var G1 = () => {
            let t = K[17];
            t.active && pr[0].transform.visible && Wt(pr[0], t)
        },
        $1 = () => {
            let t = K[16];
            t.active && pr[1].transform.visible && Wt(pr[1], t)
        };
    var Ds = [],
        Ts, Jn, H1, Y1 = () => {
            Jn = Ne.pointlights.data.lightCols, Ts = Ne.pointlights.data.lightPos, H1 = Ne.pointlights.data.lightCount
        },
        X1 = t => {
            let e = [0, 0, 0],
                o = [];
            for (let n = 0, i = Ds.length; n < i; ++n) {
                let s = Ds[n];
                s.remove ? (Ds.splice(n, 1), --n, --i) : s.transform.visible && (se(e, s.transform.worldMatrix[12], s.transform.worldMatrix[13], s.transform.worldMatrix[14]), s.distance = kn(Me.worldPosition, e), s.distance < mc && o.push(s))
            }
            o.sort((n, i) => n.distance - i.distance);
            let r = Math.min(o.length, 16);
            for (let n = 0; n < r; ++n) {
                let i = o[n],
                    s = n * 4,
                    a = n * 3;
                Ts[a] = i.transform.worldMatrix[12], Ts[a + 1] = i.transform.worldMatrix[13], Ts[a + 2] = i.transform.worldMatrix[14], Jn[s] = i.value[0], Jn[s + 1] = i.value[1], Jn[s + 2] = i.value[2], Jn[s + 3] = i.value[3]
            }
            H1[0] = r, It(Ne.pointlights)
        },
        Q1 = (t, e, o) => {
            let r = {
                transform: o,
                distance: 0,
                remove: !1,
                value: [...t, e]
            };
            return Ds.push(r), r
        };
    var hr = [Cn(1, 1), Cn(1, 1)],
        Kr = !1,
        Z1 = 0,
        K1 = t => {
            Z1 = t
        },
        ei = t => {
            Kr = t
        },
        J1 = t => {
            let o = [Wn, Gn],
                r = [5, 20];
            for (let n = 0; n < hr.length; ++n) {
                let i = hr[n],
                    s = o[n],
                    a = [0, 0, 0];
                Ii(a, 1, 1, 1, i.transform.worldMatrix);
                let c = [...st.position],
                    l = r[n];
                for (let m = 0; m < 3; ++m) c[m] = Math.floor(c[m] / l) * l;
                let f = (Math.abs(Math.cos(-1)) + Math.abs(Math.sin(-1))) * s,
                    u = s,
                    d = [u, f, f];
                for (let m = 0; m < 3; ++m) {
                    let h = d[m] * 2 / Z1,
                        g = c[m] * a[m];
                    g = g - g % h, g = g / a[m], c[m] = g
                }
                vd(i.transform.position, c) || (Be(i.transform.position, c), se(i.transform.rotation, -1, 0, 0), i.far = f, i.near = -1e3, _d(i, -u, u, -f, f), Bi(i, !0), ji(i), Kr = !0)
            }
            if (Kr) {
                let n = Ne.shadows.data;
                yo(n.shadowRange, [Wn, lc, Gn], 0), yo(n.shadowPVMatrix, hr[0].projectionViewMatrix, 0), yo(n.shadowPVMatrix, hr[1].projectionViewMatrix, 16), It(Ne.shadows)
            }
            return Kr ? 1 : 0
        };
    var Dc = new Map,
        Is = [],
        zs = [],
        Vs = [],
        Rs = [],
        Us = [],
        Bs = (t, e, o, r) => {
            let n = t << 1 | e;
            if (n = n << 1 | o, n = n << 1 | r, Dc.has(n)) return gc(Dc.get(n));
            {
                let i = B_(t, e, o, r);
                return Dc.set(n, i), gc(i)
            }
        },
        th = (t, e, o, r) => {
            t ? e ? zs.push(r) : Vs.push(r) : Is.push(r), o === 2 ? (ei(!0), Rs.push(r)) : o === 1 && (ei(!0), Us.push(r))
        },
        B_ = (t, e, o, r) => {
            let n = bo.get(t),
                i = Ec[n.shader],
                s = K[i],
                a = Ve.shadows && e ? n.texture ? 1 : 2 : 0,
                c = Pp(i, v.TRIANGLES, s.instancedAttributes, a, o, r);
            c.cullFace = n.cull ? v.BACK : v.NONE;
            let l = !1,
                f = !1;
            return n.texture ? Et(n.texture, u => {
                f = !0, c.uniformData.diffuse = u, l && th(s.transparent, s.depthWrite, Ve.shadows && e ? o ? 2 : 1 : 0, c)
            }) : f = !0, Lo(n.geometry, u => {
                Ep(c, u), l = !0, f && th(s.transparent, s.depthWrite, Ve.shadows && e ? o ? 2 : 1 : 0, c)
            }), c
        };
    var oh = [{
        fun: (t, e, o) => {
            jo(e[0], t.transform.worldMatrix, e[1], e[2], e[3], e[4], e[5], e[6], !1)
        }
    }, {
        fun: (t, e, o) => {
            let r = e[1],
                n = Math.PI * 2 / r;
            for (let i = 0; i < r; ++i) {
                let s = Math.sin(i * n),
                    a = Math.cos(i * n);
                jo(e[0], t.transform.worldMatrix, s * e[6] + e[2], e[3], a * e[6] + e[4], s * e[5], 0, a * e[5], !1)
            }
        }
    }, {
        fun: (t, e, o) => {
            for (let r = 0; r < e[1]; ++r) jo(e[0], t.transform.worldMatrix, e[2], e[3], e[4], gt(e[5], e[6]), gt(e[7], e[8]), gt(e[9], e[10]), !1)
        }
    }, {
        fun: (t, e, o) => {
            ic(e[0], t.transform, t.priority, !1, 1)
        }
    }];
    var Ic = [{
            create: (t, e) => Q1([e[0], e[1], e[2]], e[3], t.transform),
            tick: (t, e, o, r, n) => {},
            end: (t, e, o) => {
                o.remove = !0
            },
            show: (t, e, o) => {},
            hide: (t, e, o) => {},
            modifiers: [(t, e, o, r, n) => {
                let i = Rr[e[2]](n);
                o.value[3] = e[0] + i * (e[1] - e[0])
            }]
        }, {
            create: (t, e) => [0, 0, 0, 0],
            tick: (t, e, o, r, n) => {
                o[0] >= e[1] && (o[0] = 0, jo(e[0], t.transform.worldMatrix, gt(e[2], e[3]) + o[1], gt(e[4], e[5]) + o[2], gt(e[6], e[7]) + o[3], gt(e[8], e[9]), gt(e[10], e[11]), gt(e[12], e[13]), !1)), o[0] += ~~(r * 1e3)
            },
            end: (t, e, o) => {},
            show: (t, e, o) => {},
            hide: (t, e, o) => {},
            modifiers: [(t, e, o, r, n) => {
                let i = e[1] * n;
                o[1] = Math.sin(i) * e[0], o[3] = Math.cos(i) * e[0]
            }]
        }, {
            create: (t, e) => {
                if (Zr > 0) return jo(e[0], t.transform.worldMatrix, 0, 0, 0, 0, 0, 0, !0)
            },
            tick: (t, e, o, r, n) => {},
            end: (t, e, o) => {
                o.start = 1, o.end = 1
            },
            show: (t, e, o) => {},
            hide: (t, e, o) => {
                o.pos[0] = -1e3
            },
            modifiers: [(t, e, o, r, n) => {
                let i = e[1] * n;
                Qo(o.pos, Math.sin(i) * e[0], 0, Math.cos(i) * e[0], t.transform.worldMatrix)
            }, (t, e, o, r, n) => {
                Qo(o.pos, e[0], e[1], e[2], t.transform.worldMatrix)
            }]
        }, {
            create: (t, e) => ic(e[0], t.transform, t.priority, !0, 1),
            tick: (t, e, o, r, n) => {},
            end: (t, e, o) => {
                o.stop()
            },
            show: (t, e, o) => {},
            hide: (t, e, o) => {},
            modifiers: []
        }, {
            create: (t, e) => {
                let o = Bs(e[0], !1, !0, !0);
                return se(o.position, e[1], e[2], e[3]), se(o.scale, e[4], e[5], e[6]), se(o.rotation, e[7], e[8], e[9]), Ot(o, t.transform), it(o, !1), o
            },
            tick: (t, e, o, r, n) => {},
            end: (t, e, o) => {
                us(o.data.multi, o)
            },
            show: (t, e, o) => {
                o.visible = !0
            },
            hide: (t, e, o) => {
                o.visible = !1
            },
            modifiers: [(t, e, o, r, n) => {
                let i = e[1] * n;
                o.rotation[1] = e[2] + i, o.position[0] = Math.sin(i) * e[0], o.position[2] = Math.cos(i) * e[0], o.matrixNeedsUpdate = !0, it(o, !1)
            }, (t, e, o, r, n) => {
                let i = o.data.multi.instancedAttributes[e[0]];
                for (let s = 0; s < i.size; ++s) o.data[i.name][s] = e[1 + s]
            }, (t, e, o, r, n) => {
                let i = o.data.multi.instancedAttributes[e[0]];
                for (let s = 0; s < i.size; ++s) {
                    let a = e[1 + s],
                        c = e[5 + s];
                    o.data[i.name][s] = a + n * (c - a)
                }
            }, (t, e, o, r, n) => {
                let i = Rr[e[6]](n);
                o.scale[0] = e[0] + i * (e[3] - e[0]), o.scale[1] = e[1] + i * (e[4] - e[1]), o.scale[2] = e[2] + i * (e[5] - e[2]), o.matrixNeedsUpdate = !0
            }, (t, e, o, r, n) => {
                let i = Rr[e[6]](n);
                o.rotation[0] = e[0] + i * (e[3] - e[0]), o.rotation[1] = e[1] + i * (e[4] - e[1]), o.rotation[2] = e[2] + i * (e[5] - e[2]), o.matrixNeedsUpdate = !0
            }]
        }, {
            create: (t, e) => B1(e[0], t.transform, [e[1], e[2], e[3]], [e[4], e[5], e[6]], 0, 0),
            tick: (t, e, o, r, n) => {},
            end: (t, e, o) => {
                o.detach()
            },
            show: (t, e, o) => {},
            hide: (t, e, o) => {},
            modifiers: [(t, e, o, r, n) => {
                let i = e[1] * n;
                o.b[0] = o.a[0] = Math.sin(i) * e[0], o.b[2] = o.a[2] = Math.cos(i) * e[0]
            }]
        }, {
            create: (t, e) => {
                if (Zr < e[1]) return;
                let o = [];
                for (let r = 0; r < e[1]; ++r) o.push(jo(e[0], t.transform.worldMatrix, 0, 0, 0, 0, 0, 0, !0));
                return o
            },
            tick: (t, e, o, r, n) => {},
            end: (t, e, o) => {
                for (let r = 0; r < o.length; ++r) {
                    let n = o[r];
                    n.start = n.end = 1
                }
            },
            show: (t, e, o) => {},
            hide: (t, e, o) => {
                for (let r = 0; r < o.length; ++r) {
                    let n = o[r];
                    n.pos[0] = -1e3
                }
            },
            modifiers: [(t, e, o, r, n) => {
                let i = o.length,
                    s = 6.283 / i,
                    a = e[0],
                    c = e[1] * n;
                for (let l = 0; l < i; ++l) {
                    let f = o[l],
                        u = s * l + c;
                    Qo(f.pos, Math.sin(u) * a, e[2], Math.cos(u) * a, t.transform.worldMatrix)
                }
            }]
        }, {
            create: (t, e) => [0, 0],
            tick: (t, e, o, r, n) => {
                if (o[0] >= e[6]) {
                    o[0] = 0;
                    let i = e[1],
                        s = Math.PI * 2 / i;
                    for (let a = 0; a < i; ++a) jo(e[0], t.transform.worldMatrix, e[2], e[3], e[4], Math.sin(a * s + o[1]) * e[5], 0, Math.cos(a * s + o[1]) * e[5], !1)
                }
                o[0] += ~~(r * 1e3)
            },
            end: (t, e, o) => {},
            show: (t, e, o) => {},
            hide: (t, e, o) => {},
            modifiers: [(t, e, o, r, n) => {
                o[1] = e[0] * n
            }]
        }, {
            create: (t, e) => [0],
            tick: (t, e, o, r, n) => {
                if (o[0] >= e[1]) {
                    o[0] = 0;
                    let i = Dt();
                    se(i.rotation, gt(e[8], e[9]), gt(e[10], e[11]), gt(e[12], e[13])), Tc(e[0], i, t.priority, !0), Qo(i.position, gt(e[2], e[3]), gt(e[4], e[5]), gt(e[6], e[7]), t.transform.worldMatrix), Ri(i)
                }
                o[0] += ~~(r * 1e3)
            },
            end: (t, e, o) => {},
            show: (t, e, o) => {},
            hide: (t, e, o) => {},
            modifiers: []
        }, {
            create: (t, e) => {
                let o = Math.sin(t.transform.rotation[1]) * Math.cos(t.transform.rotation[0]) * e[0],
                    r = -Math.sin(t.transform.rotation[0]) * e[0],
                    n = Math.cos(t.transform.rotation[1]) * Math.cos(t.transform.rotation[0]) * e[0],
                    i = t.info.duration,
                    s = i;
                if (e[1]) {
                    let a = ae.raycastEnvironmentClosest(t.transform.position[0], t.transform.position[1], t.transform.position[2], o * i, r * i, n * i);
                    a < 1 && (s = i * a)
                }
                return [o, r, n, s]
            },
            tick: (t, e, o, r, n) => {
                if (e[1] && (o[3] -= r, o[3] <= 0)) {
                    t.done = !0;
                    return
                }
                t.transform.position[0] += o[0] * r, t.transform.position[1] += o[1] * r, t.transform.position[2] += o[2] * r, t.transform.matrixNeedsUpdate = !0, it(t.transform, !1)
            },
            end: (t, e, o) => {},
            show: (t, e, o) => {},
            hide: (t, e, o) => {},
            modifiers: []
        }, {
            create: (t, e) => [],
            tick: (t, e, o, r, n) => {},
            end: (t, e, o) => {
                let r = Dt();
                Be(r.position, t.transform.position), Be(r.rotation, t.transform.rotation), Tc(e[0], r, t.priority, !0), Ri(r)
            },
            show: (t, e, o) => {},
            hide: (t, e, o) => {},
            modifiers: []
        }],
        Tc, rh = t => {
            Tc = t
        };
    var lo = [],
        Jr = [],
        en = [],
        zc = [],
        nh = (t, e) => {
            let o = fc;
            G_(t, e, o), $_(t, e, o), H_(t, e, o), Y_(t, e), X_(t, e), Q_(t, e);
            for (let r = 0; r < lo.length; ++r) {
                let n = lo[r],
                    i = n.visible !== n.transform.visible;
                if (n.visible = n.transform.visible, n.visible)
                    for (let s = 0; s < n.info.events.length; ++s) {
                        let a = n.info.events[s];
                        (n.loops === 0 || a.fraction > 0) && n.fractionLast <= a.fraction && n.fractionNow > a.fraction && oh[a.id].fun(n, a.params, t)
                    }
                for (let s = 0; s < n.info.periods.length; ++s) {
                    let a = n.info.periods[s],
                        c = Ic[a.id],
                        l = n.periodData[s] !== void 0,
                        f = n.fractionNow >= a.fractionStart && n.fractionNow <= a.fractionEnd,
                        u = !1;
                    if (n.visible && f && !l && n.fractionLast <= a.fractionStart && (l = (n.periodData[s] = c.create(n, a.params, t)) !== void 0, u = l), f && l && (i && (n.visible ? c.show(n, a.params, n.periodData[s]) : c.hide(n, a.params, n.periodData[s])), n.visible)) {
                        let d = n.periodData[s],
                            m = (n.fractionNow - a.fractionStart) / (a.fractionEnd - a.fractionStart);
                        c.tick(n, a.params, d, t, m);
                        for (let h = 0; h < a.modifiers.length; ++h) {
                            let g = a.modifiers[h];
                            (u || i || g.mode === 1) && c.modifiers[g.id](n, g.params, d, t, m)
                        }
                    }!f && l && (c.end(n, a.params, n.periodData[s]), n.periodData[s] = void 0)
                }
                n.visible && n.returnTransform && n.transform.parent === null && it(n.transform, !1)
            }
        },
        Vc = [],
        ih = (t, e, o, r) => Vc.length > 0 ? N_(Vc.pop(), t, e, o, r) : q_(t, e, o, r),
        q_ = (t, e, o, r) => ({
            info: t,
            priority: o,
            transform: e,
            returnTransform: r,
            visible: !0,
            fractionNow: 0,
            fractionLast: 0,
            timeEnd: 0,
            periodData: [],
            done: !1,
            loops: 0
        }),
        N_ = (t, e, o, r, n) => (t.info = e, t.priority = r, t.transform = o, t.returnTransform = n, t),
        O_ = t => (t.visible = !0, t.fractionNow = 0, t.fractionLast = 0, t.timeEnd = 0, t.periodData.length = 0, t.done = !1, t.loops = 0, t),
        Rc = t => {
            Z_(t), t.returnTransform && Ar(t.transform), Vc.push(O_(t))
        },
        W_ = (t, e, o, r) => {
            let n = ts.get(t),
                i = ih(n, e, o, r);
            return lo.push(i), Jr.push(i), i
        },
        Uc = (t, e, o, r) => {
            let n = ts.get(t),
                i = ih(n, e, o, r);
            return lo.push(i), en.push(i), i
        };
    var G_ = (t, e, o) => {
            for (let r = 0; r < Jr.length; ++r) {
                let n = Jr[r];
                n.info.duration === 0 ? n.timeEnd === 0 ? (n.timeEnd = e + n.info.duration, n.fractionLast = 0, n.fractionNow = .999) : (n.fractionLast = 0, n.fractionNow = 1) : (n.timeEnd === 0 && (n.timeEnd = e + n.info.duration), n.fractionLast = n.fractionNow, n.fractionNow = je(1 - (n.timeEnd - e) / n.info.duration, 0, 1))
            }
        },
        $_ = t => {
            for (let e = 0; e < en.length; ++e) {
                let o = en[e];
                o.fractionLast = o.fractionNow, o.fractionNow = (o.fractionNow + t / o.info.duration) % 1, o.fractionLast > o.fractionNow && (o.fractionLast = 0, o.loops++)
            }
        },
        H_ = (t, e, o) => {},
        Y_ = (t, e, o) => {
            let r = Jr.length;
            for (; r--;) {
                let n = Jr[r];
                (n.fractionNow === 1 || n.done) && (Jr.splice(r, 1), lo.splice(lo.indexOf(n), 1), Rc(n))
            }
        },
        X_ = (t, e, o) => {
            let r = en.length;
            for (; r--;) {
                let n = en[r];
                n.done && (en.splice(r, 1), lo.splice(lo.indexOf(n), 1), Rc(n))
            }
        },
        Q_ = (t, e, o) => {
            let r = zc.length;
            for (; r--;) {
                let n = zc[r];
                n.done && (zc.splice(r, 1), lo.splice(lo.indexOf(n), 1), Rc(n))
            }
        },
        Z_ = t => {
            for (let e = 0; e < t.info.periods.length; ++e) {
                let o = t.info.periods[e],
                    r = Ic[o.id];
                t.periodData[e] !== void 0 && (r.end(t, o.params, t.periodData[e]), t.periodData[e] = void 0)
            }
        };
    rh(W_);
    var tn = [0, 2, 2.3],
        on = [0, 0, 0];
    no(tn, tn);
    var Ge = {},
        Ns = ["fog", "sun", "direct", "ambient", "skytop", "skymid", "skybot", "horizon", "water", "clouds"],
        Os = ["bloom"];
    for (let t = 0; t < Ns.length; ++t) Ge[Ns[t]] = [
        [.5, .5, .5],
        [.5, .5, .5],
        [.5, .5, .5]
    ];
    for (let t = 0; t < Os.length; ++t) Ge[Os[t]] = [0, 0, 0];
    var sh = (t, e, o, r) => {
            ty(), ny(t, o, e), oy(), e > 0 && ry(e, r), It(Ne.sky), It(Ne.environment);
            let n = Ne.environment.data;
            v.clearColor(n.fog[0], n.fog[1], n.fog[2], 1)
        },
        J_ = (t, e, o, r, n, i, s) => {
            let a = [0, 0, 0],
                c = [0, 0, 0];
            Fr(a, e, o, i), Fr(c, r, n, i), Fr(t, a, c, s)
        },
        ey = (t, e, o, r, n, i) => {
            let s = Rn(n, t, e),
                a = Rn(n, o, r);
            return Rn(i, s, a)
        },
        fo = (t, e, o, r, n) => {
            let i = [0, 0, 0],
                s = [0, 0, 0];
            so(i, o, 1 - n), so(s, r, n), t[e] = i[0] + s[0], t[e + 1] = i[1] + s[1], t[e + 2] = i[2] + s[2]
        },
        ty = () => {
            let t = st.position[0],
                e = st.position[2],
                o = t,
                r = e,
                n = t + 32,
                i = e + 32,
                s = Wr.get(ae.getEnvironmentId(o, r)),
                a = Wr.get(ae.getEnvironmentId(n, r)),
                c = Wr.get(ae.getEnvironmentId(o, i)),
                l = Wr.get(ae.getEnvironmentId(n, i));
            if (!s || !a || !c || !l) return;
            let f = t / 32 % 1,
                u = e / 32 % 1;
            for (let d = 0; d < Ns.length; ++d) {
                let m = Ns[d];
                for (let h = 0; h < 3; ++h) J_(Ge[m][h], s[m][h], a[m][h], c[m][h], l[m][h], f, u)
            }
            for (let d = 0; d < Os.length; ++d) {
                let m = Os[d];
                for (let h = 0; h < 3; ++h) Ge[m][h] = ey(s[m][h], a[m][h], c[m][h], l[m][h], f, u)
            }
        },
        oy = () => {
            let t = Ne.environment.data.watercolors;
            for (let e = 0; e < 9; ++e) t[e] = Ge.water[Math.floor(e / 3)][e % 3]
        },
        ry = (t, e) => {
            let o = Ne.environment.data.worldlight,
                r = [0, 0, 0],
                n = Math.max(0, 1 - t / 80),
                i = Math.min(1, 1 - n);
            fo(r, 0, Ge.water[1], Ge.water[2], i);
            let s = [0, 0, 0];
            s[0] = (o[0] + o[3]) * r[0] * 1.5, s[1] = (o[1] + o[4]) * r[1] * 1.5, s[2] = (o[2] + o[5]) * r[2] * 1.5;
            let a = Ne.sky.data.skycolors,
                c = Ne.sky.data.suncolor,
                l = Ne.environment.data.worldlight,
                f = Ne.environment.data.fog,
                u = Math.max(.2, .5 * n),
                d = Math.min(.4, Math.max(.1, .5 * n)),
                m = Math.max(.3, .7 * n);
            for (let h = 0; h < 15; ++h) a[h] = u * s[h % 3];
            se(f, u * s[0], u * s[1], u * s[2]), Be(c, f);
            for (let h = 0; h < 9; ++h) Ne.environment.data.watercolors[h] = d;
            for (let h = 0; h < 6; ++h) l[h] = m * s[h % 3]
        },
        js = 0,
        Mo = 1,
        qs = 2,
        Ws = [{
            from: Mo,
            to: js,
            start: 0,
            end: 0,
            dur: 0
        }, {
            from: js,
            to: js,
            start: 0,
            end: 0,
            dur: 0
        }, {
            from: js,
            to: Mo,
            start: 0,
            end: 0,
            dur: 0
        }, {
            from: Mo,
            to: Mo,
            start: 0,
            end: 0,
            dur: 0
        }, {
            from: Mo,
            to: qs,
            start: 0,
            end: 0,
            dur: 0
        }, {
            from: qs,
            to: qs,
            start: 0,
            end: 0,
            dur: 0
        }, {
            from: qs,
            to: Mo,
            start: 0,
            end: 0,
            dur: 0
        }, {
            from: Mo,
            to: Mo,
            start: 0,
            end: 0,
            dur: 0
        }],
        ah = 0;
    Ws.forEach(t => {
        let e = t.from !== t.to,
            o = !e && t.from !== Mo;
        e ? t.dur = .5 : o ? t.dur = 5 : t.dur = 1.5, ah += t.dur
    });
    var Bc = 0;
    Ws.forEach(t => {
        t.start = Bc, Bc = t.end = Bc + 1 / ah * t.dur
    });
    var ny = (t, e, o) => {
        t = je(t, 0, 1);
        let r = .5,
            n = 0,
            i = 0;
        for (let c = 0; c < Ws.length; ++c) {
            let l = Ws[c];
            if (l.end >= t) {
                r = Vn(l.start, l.end, t), n = l.from, i = l.to;
                break
            }
        }
        let s = Ne.sky.data;
        gfe.simpleSky && (Ge.skybot = Ge.skymid, Ge.horizon = Ge.skymid);
        fo(s.skycolors, 0, Ge.skytop[n], Ge.skytop[i], r), fo(s.skycolors, 3, Ge.skymid[n], Ge.skymid[i], r), fo(s.skycolors, 6, Ge.skybot[n], Ge.skybot[i], r), fo(s.skycolors, 9, Ge.horizon[n], Ge.horizon[i], r), fo(s.skycolors, 12, Ge.clouds[n], Ge.clouds[i], r), fo(s.suncolor, 0, Ge.sun[n], Ge.sun[i], r), Be(on, tn), on[1] = Math.abs(Math.sin(t * 6.282)), no(on, on);
        updateEnvironment(t, e, o, r, n, i, s)
    };
    var iy = [],
        sy = [],
        lh = (t, e) => {
            if (tt === void 0 || tt.suspended) return;
            let o = tt.currentTime,
                r = Ha.get(ae.getAreaId(st.position[0], st.position[2])),
                i = t > .5 ? r.ambientnight : r.ambientday,
                s = 5;
            e > 0 && (i = 167, s = .5), ch(iy, o, s, i, !1), ch(sy, o, 5, r.music, !0)
        },
        ch = (t, e, o, r, n) => {
            let i = !1;
            for (let s = t.length - 1; s >= 0; --s) {
                let a = t[s],
                    c = a.sound,
                    l = c.gain.gain;
                a.id === r && !c.ended ? (i = !0, a.fade !== 1 && (a.fade = 1, l.setTargetAtTime(1, e, o))) : l.value < .02 || c.ended ? (c.stop(), t.splice(s, 1)) : a.fade !== 0 && (a.fade = 0, l.setTargetAtTime(0, e, a.fadeDuration))
            }
            if (!i && r !== 0) {
                let s = n ? bp(r, 3) : xp(r, 2);
                s && (s.gain.gain.setValueAtTime(0, e), t.push({
                    id: r,
                    sound: s,
                    fade: 0,
                    fadeDuration: o
                }))
            }
        };
    var ti = [0, 0, 0, 0],
        fh = (t, e, o, r) => {
            if (e > 0) {
                let n = Ne.environment.data.fog;
                ti[0] = n[0], ti[1] = n[1], ti[2] = n[2], ti[3] = .5, r.add(33), K[33].uniforms.warp.value = .3, K[31].uniforms.amount.value = Math.min(3, Math.max(.3, e / 10))
            }
            K[33].uniforms.tint.value = ti
        };
    var uh = () => {},
        jc = 0;
    var dh = (t, e, o) => {
        let r = timeOfDay((e / 3600 + .9) % 1);
        r < .7 ? r = Vn(0, .7, r) * .4 : r = .4 + Vn(.7, 1, r) * .6, sh(r, jc, e, o), fh(r, jc, e, o), lh(r, jc)
    };
    var kL = Math.PI * 2,
        FL = Math.PI * 3;
    var oi = (t, e, o, r) => (Lt(ht, r, o), Lt(Xe, e, o), ao(ht, ht, Xe), no(t, ht));
    var mh = t => {
        let e = Math.atan2(t[0], t[1]);
        return e < 0 && (e += 2 * Math.PI), e
    };
    var Gs = (t, e, o, r, n, i) => {
        Lt(Xe, e, t), Lt(ht, o, t), ao(Xi, Xe, ht);
        let s = Mt(n, Xi),
            a;
        if (s > 0) {
            if (!i) return 1 / 0;
            a = 1
        } else if (s < 0) a = -1, s = -s;
        else return 1 / 0;
        Lt(eo, r, t);
        let c = a * Mt(n, ao(ht, eo, ht));
        if (c < 0) return 1 / 0;
        let l = a * Mt(n, ao(Xe, Xe, eo));
        if (l < 0 || c + l > s) return 1 / 0;
        let f = -a * Mt(eo, Xi);
        return f < 0 ? 1 / 0 : f / s
    };
    var ph = (t, e, o, r) => {
        let n = 0,
            i = 0,
            s = 1;
        e.length > 2 && (n = r.findIndex(f => f >= o), n < 0 && (n = r.length), i = n > 0 ? r[n - 1] : 0, s = n >= r.length ? 1 : r[n]);
        let a = e[n],
            c = e[n + 1],
            l = (o - i) / (s - i);
        return Fr(t, a, c, l), n
    };
    var ri = () => [-0, -0, -0, -0, -0, -0],
        uo = ri();
    var hh = (t, e) => !(t[3] < e[0] || t[0] > e[3] || t[4] < e[1] || t[1] > e[4] || t[5] < e[2] || t[2] > e[5]),
        qc = (t, e, o, r, n) => (t[0] = e[0], t[3] = e[0] + o, t[1] = e[1], t[4] = e[1] + r, t[2] = e[2], t[5] = e[2] + n, t);
    var gh = (t, e) => {
        t[0] = t[1] = t[2] = 1 / 0, t[3] = t[4] = t[5] = -1 / 0;
        for (let o = 0; o < e.length; ++o) {
            let r = e[o];
            t[0] = Math.min(t[0], r[0]), t[3] = Math.max(t[3], r[0]), t[1] = Math.min(t[1], r[1]), t[4] = Math.max(t[4], r[1]), t[2] = Math.min(t[2], r[2]), t[5] = Math.max(t[5], r[2])
        }
        return t
    };
    var vh = (t, e, o, r, n) => (se(Xe, e[0] - o / 2, e[1] - r / 2, e[2] - n / 2), qc(t, Xe, o, r, n));
    var xh = (t, e, o, r, n) => {
        let i = (t[0] - e[0]) * o[0],
            s = (t[1] - e[1]) * o[1],
            a = (t[2] - e[2]) * o[2],
            c = (t[3] - e[0]) * o[0],
            l = (t[4] - e[1]) * o[1],
            f = (t[5] - e[2]) * o[2],
            u = Math.max(r, Math.min(i, c), Math.min(s, l), Math.min(a, f)),
            d = Math.min(n, Math.max(i, c), Math.max(s, l), Math.max(a, f));
        return !(d < 0 || u > d)
    };
    var $s = (t, e, o) => {
        let r = [0, 0, 0];
        for (let n = 0; n < 6; ++n) {
            let i = e[n],
                s = o[n];
            if (i[0] > 0 ? r[0] = t[3] : r[0] = t[0], i[1] > 0 ? r[1] = t[4] : r[1] = t[1], i[2] > 0 ? r[2] = t[5] : r[2] = t[2], Mt(i, r) + s < 0) return !1
        }
        return !0
    };
    var Hs = class {
            constructor() {
                this.id = 0, this.pos = [-0, -0, -0], this.rot = [-0, -0, -0], this.scale = 1, this.matrix = void 0, this.loaded = !1
            }
            setWorldMatrix(e, o) {
                this.matrix = e, io(Xe, o, this.pos), Co(ht, this.scale), zi(Jo, this.rot), Di(this.matrix, Jo, Xe, ht)
            }
            loadGeometry(e, o) {
                if (!this.loaded) {
                    let r = bo.get(this.id);
                    this.loaded = !0, r.geometry === 0 ? this.postGeometryLoad(e, o) : Lo(r.geometry, (n, i) => {
                        let s = !e.finishedLoadingChunks.has(o.id);
                        this.addMesh(e, o), s && this.addCollider(e, o, n, i), this.postGeometryLoad(e, o)
                    })
                }
            }
            onUpdate(e, o, r) {}
            addMesh() {}
            postGeometryLoad(e, o) {
                o.loadingProps--
            }
            handleColliderGeometry(e, o, r, n) {
                let i = this.matrix,
                    s = r.position,
                    a = r.color,
                    c = r.flags;
                for (let l = 0, f = o.length; l < f; l += 3) {
                    let u = o[l],
                        d = o[l + 1],
                        m = o[l + 2],
                        h = Nc(u * 3, n, s, i),
                        g = Nc(d * 3, n, s, i),
                        M = Nc(m * 3, n, s, i),
                        x = [h, g, M],
                        w = gh(ri(), x);
                    if (c[u] & 1 && c[d] & 1 && c[m] & 1) {
                        if (x.push(oi([0, 0, 0], h, g, M)), a.length) {
                            let k = [(a[u * 4 + 0] + a[d * 4 + 0] + a[m * 4 + 0]) / 3, (a[u * 4 + 1] + a[d * 4 + 1] + a[m * 4 + 1]) / 3, (a[u * 4 + 2] + a[d * 4 + 2] + a[m * 4 + 2]) / 3, (a[u * 4 + 3] + a[d * 4 + 3] + a[m * 4 + 3]) / 3];
                            x.push(k)
                        }
                        e.triangleGrid.add(x, w)
                    }
                }
            }
            addCollider(e, o, r, n) {
                let i = new Map;
                this.handleColliderGeometry(e, n.index, n, i), this.handleColliderGeometry(e, n.indexInvisible, n, i)
            }
            onRemove() {}
        },
        Nc = (t, e, o, r) => {
            if (e.has(t)) return e.get(t);
            {
                let n = [o[t], o[t + 1], o[t + 2]];
                return Xo(n, n, r), e.set(t, n), n
            }
        };
    var Ys = class extends Hs {
        constructor() {
            super(), this.mesh = void 0, this.effects = [], this.isEffectProp = !1, this.effectsCreated = !1
        }
        onUpdate(e, o, r) {
            this.mesh !== void 0 && this.updateMesh(o), super.onUpdate(e, o, r)
        }
        updateMesh(e) {
            this.setWorldMatrix(this.mesh.worldMatrix, e), io(this.mesh.position, e, this.pos), se(this.mesh.rotation, this.rot[0], this.rot[1], this.rot[2]), Co(this.mesh.scale, this.scale), this.mesh.data.multi && (this.mesh.data.multi.needsUpdate = !0)
        }
        onRemove(e) {
            super.onRemove(e), bo.get(this.id).effects.length && this.deleteEffects(), this.mesh && (this.mesh.data.multi ? us(this.mesh.data.multi, this.mesh) : Ar(this.mesh), this.mesh = void 0)
        }
        addMesh(e, o) {
            if (this.mesh === void 0) {
                let r = bo.get(this.id);
                this.mesh = Bs(this.id, r.shadow, !1, !0), this.mesh.visible = !1, this.updateMesh(o.origin), r.effects.length && (this.isEffectProp = !0)
            }
        }
        onChunkRebuild(e) {
            this.mesh && this.mesh.data && this.mesh.data.interiorlight && ae.getInteriorLight(this.mesh.data.interiorlight, vh(uo, this.mesh.position, 3, 3, 3))
        }
        createEffects() {
            if (this.isEffectProp = !0, !this.effectsCreated) {
                let e = bo.get(this.id).effects;
                for (let o = 0; o < e.length; ++o) {
                    let r = e[o],
                        n = Dt();
                    Be(n.position, r.pos), Be(n.scale, r.scale), Be(n.rotation, r.rot), Ot(n, this.mesh), it(n, !0);
                    let i = Uc(r.id, n, 0, !0);
                    this.effects.push(i)
                }
                this.effectsCreated = !0
            }
        }
        deleteEffects() {
            if (this.effectsCreated) {
                for (let e = 0; e < this.effects.length; ++e) this.effects[e].done = !0;
                this.effects.length = 0, this.effectsCreated = !1
            }
        }
        setVisible(e) {
            this.mesh.visible !== e && (this.mesh.visible = !0, this.mesh.data.multi.needsUpdate = !0)
        }
        setEffectVisible(e) {
            this.isEffectProp && this.effectsCreated !== e && (e ? this.createEffects() : this.deleteEffects())
        }
    };
    var wh = (t, e, o) => {
            e[o] = (t & 31) * 8, e[o + 1] = (t >> 5 & 31) * 8, e[o + 2] = (t >> 10 & 31) * 8
        },
        bh = 65536 / 64,
        cy = 2147483647 / 2e3,
        Oc = 65536 / (Math.PI * 2),
        ly = 65536 / 100;
    var _h = (t, e) => (t.id = e.id, se(t.pos, e.x / bh, e.y / cy, e.z / bh), se(t.rot, e.rx / Oc, e.ry / Oc, e.rz / Oc), t.scale = Math.max(e.scale, 100) / ly, t);
    var yh = (t, e, o, r) => {
            t.id = e, t.x = o, t.z = r, t.origin[0] = o * 64, t.origin[2] = r * 64, t.deserialized = !1, t.props.length = 0, t.data = void 0, t.loadingProps = 0
        },
        Mh = (t, e) => {
            t.data = e, kh(t), fy(t, !0), t.deserialized = !0
        },
        ro = (t, e, o) => {
            e /= 2.6666666666666665, o /= 2.6666666666666665;
            let r = e % 1,
                n = o % 1;
            if (r === 0 && n === 0) return t.data.terrain[e + 25 * o] * .030517578125;
            {
                let i = Math.floor(e),
                    s = Math.floor(o),
                    a = r + n < 1,
                    c = t.data.terrain[i + 25 * s + (a ? 0 : 1)],
                    l = t.data.terrain[i + 25 * Math.min(24, s + 1)],
                    f = t.data.terrain[i + 1 + 25 * (s + (a ? 0 : 1))],
                    u = a ? -(r - 1 + n) : -(n - 1),
                    d = a ? n : -(r - 1),
                    m = 1 - u - d;
                return (u * c + d * l + m * f) * .030517578125
            }
        },
        ii = (t, e, o) => {
            if (t.data.holes.length === 0) return !1;
            e /= 2.6666666666666665, o /= 2.6666666666666665;
            let r = Math.floor(e) + Math.floor(o) * 24;
            return t.data.holes.indexOf(r) >= 0
        },
        si = (t, e, o) => {
            if (t.data.water.length === 0) return -1;
            e /= 64, o /= 64;
            let r = e % 1,
                n = o % 1;
            if (r === 0 && n === 0) return t.data.water[e + 2 * o] * .030517578125;
            {
                let i = Math.floor(e),
                    s = Math.floor(o),
                    a = r + n < 1,
                    c = t.data.water[i + 2 * s + (a ? 0 : 1)],
                    l = t.data.water[i + 2 * Math.min(2 - 1, s + 1)],
                    f = t.data.water[i + 1 + 2 * (s + (a ? 0 : 1))],
                    u = a ? -(r - 1 + n) : -(n - 1),
                    d = a ? n : -(r - 1),
                    m = 1 - u - d;
                return (u * c + d * l + m * f) * .030517578125
            }
        };
    var Wc = (t, e, o) => {
            e /= 16, o /= 16;
            let n = Math.floor(e) + Math.floor(o) * 4;
            return t.data.area[n] || 0
        },
        Gc = (t, e, o) => {
            e /= 32, o /= 32;
            let n = Math.floor(e) + Math.floor(o) * 2;
            return t.data.environment[n] || 0
        },
        kh = t => {
            let e = [-0, -0, -0];
            for (let o = 0; o < 24; ++o)
                for (let r = 0; r < 24; ++r) {
                    let n = (r * 2 + 24 * o * 2) * 3,
                        i = r * 2.6666666666666665,
                        s = o * 2.6666666666666665;
                    se(eo, i, ro(t, i, s), s), se(Qi, i, ro(t, i, s + 2.6666666666666665), s + 2.6666666666666665), se(zn, i + 2.6666666666666665, ro(t, i + 2.6666666666666665, s), s), oi(e, eo, Qi, zn), t.normals[n] = e[0], t.normals[n + 1] = e[1], t.normals[n + 2] = e[2], se(eo, i + 2.6666666666666665, ro(t, i + 2.6666666666666665, s), s), se(zn, i + 2.6666666666666665, ro(t, i + 2.6666666666666665, s + 2.6666666666666665), s + 2.6666666666666665), oi(e, eo, Qi, zn), t.normals[n + 3] = e[0], t.normals[n + 4] = e[1], t.normals[n + 5] = e[2]
                }
        };
    var fy = (t, e) => {
            for (let o = 0, r = t.data.props.length; o < r; ++o) {
                let n = t.data.props[o],
                    i = _h(new Ys, n);
                t.props.push(i), e && t.loadingProps++
            }
            for (let o = 0; o < t.props.length; ++o) {
                let r = t.props[o];
                r.onUpdate(ae, t.origin, ae.bounds), r.loadGeometry(ae, t)
            }
        },
        uy = t => {
            for (let e = 0; e < t.props.length; ++e) t.props[e].onRemove(t);
            t.props.length = 0
        },
        Fh = t => {
            uy(t)
        },
        Ch = (t, e) => Math.floor(t % 64 / 32) + Math.floor(e % 64 / 32) * 2,
        Ah = (t, e) => Math.floor(t % 32 * 3) + Math.floor(e % 32 * 3) * 96;
    var ai = 1,
        Xs = t => {
            ai = t % 2147483647, ai <= 0 && (ai += 2147483646), gr(), gr()
        },
        gr = () => ai = ai * 16807 % 2147483647,
        ci = () => (gr() - 1) / 2147483647,
        rn = (t, e) => ci() * (e - t) + t;
    var Zs, Ks, Js, qt = [0, 0, 0],
        nn, sn, an, dy = [21, 56, 50, 44, 13, 19, 7, 42],
        Hc = 3758102380,
        Yc = (t, e) => t >> e & 1,
        qo = (t, e, o, r) => dy[Yc(t, r) << 2 | Yc(e, r) << 1 | Yc(o, r)],
        Qs = t => {
            let e = (qt[0] + qt[1] + qt[2]) / 6,
                o = nn - qt[0] + e,
                r = sn - qt[1] + e,
                n = an - qt[2] + e,
                i = .6 - o * o - r * r - n * n,
                s = my(Zs + qt[0], Ks + qt[1], Js + qt[2]);
            if (qt[t]++, i < 0) return 0;
            let a = s >> 5 & 1,
                c = s >> 4 & 1,
                l = s >> 3 & 1,
                f = s >> 2 & 1,
                u = s & 3,
                d = u === 1 ? o : u === 2 ? r : n,
                m = u === 1 ? r : u === 2 ? n : o,
                h = u === 1 ? n : u === 2 ? o : r;
            return d = a === l ? -d : d, m = a === c ? -m : m, h = a !== (c ^ l) ? -h : h, i *= i, 8 * i * i * (d + (u === 0 ? m + h : f === 0 ? m : h))
        },
        my = (t, e, o) => qo(t, e, o, 0) + qo(e, o, t, 1) + qo(o, t, e, 2) + qo(t, e, o, 3) + qo(e, o, t, 4) + qo(o, t, e, 5) + qo(t, e, o, 6) + qo(e, o, t, 7),
        Ph = (t, e, o) => {
            let r = t + Hc,
                n = e + Hc,
                i = o + Hc,
                s = (r + n + i) / 3;
            Zs = Math.floor(r + s), Ks = Math.floor(n + s), Js = Math.floor(i + s), s = (Zs + Ks + Js) / 6, nn = r - Zs + s, sn = n - Ks + s, an = i - Js + s, qt[0] = qt[1] = qt[2] = 0;
            let a = nn >= an ? nn >= sn ? 0 : 1 : sn >= an ? 1 : 2,
                c = nn < an ? nn < sn ? 0 : 1 : sn < an ? 1 : 2;
            return Qs(a) + Qs(3 - a - c) + Qs(c) + Qs(0)
        };
    var Eh = t => {
        let e = 0,
            o = 0,
            r = 0;
        for (let u = 0; u < t.nodes.length; ++u) {
            let d = t.nodes[u],
                m = d.leafCount,
                h = d.points.length / 2;
            e += h * 3 * m, o += h * 2 * m, r += Math.max(0, (h - 2) * 3) * m, d.geotype === 1 && (r += 3 * m * Math.min(1, d.points.length))
        }
        let n = new Float32Array(e),
            i = new Float32Array(o),
            s = new Uint32Array(r);
        Xs(t.seed);
        let a = 0,
            c = 0,
            l = 0,
            f = 0;
        for (let u = 0; u < t.nodes.length; ++u) {
            let d = t.nodes[u],
                m = d.start,
                h = d.end,
                g = Math.atan2(h[1] - m[1], h[0] - m[0]),
                {
                    geotype: M,
                    leafCount: x,
                    y: w,
                    radius: k,
                    slant: U,
                    size: D,
                    arc: V,
                    jitter_slant: fe,
                    jitter_size: N,
                    jitter_rotation: O,
                    jitter_radius: ne,
                    jitter_y: J
                } = d,
                re = d.points.length / 2,
                P = Math.PI * 2 / (x === 2 ? 4 : x);
            for (let G = 0; G < x; ++G) {
                let A = G * P + rn(-O, O),
                    te = U + rn(-fe, fe),
                    ce = D * rn(1 - N, 1),
                    ke = k * rn(1 - ne, 1),
                    Re = w * rn(1 - J, 1);
                for (let Ce = 0; Ce < re; ++Ce) {
                    let Ae = d.points[Ce * 2],
                        at = d.points[Ce * 2 + 1],
                        Ze = Ae - m[0],
                        zt = at - m[1],
                        Oe = Ze * Math.cos(-g) - zt * Math.sin(-g),
                        Y = Ze * Math.sin(-g) + zt * Math.cos(-g),
                        Te = 0,
                        ot = 0,
                        et = 0;
                    if (d.geotype === 0) {
                        let Ke = te + V * Oe;
                        Te = Math.sin(Ke) * Oe, ot = Math.cos(Ke) * Oe, et = Y
                    } else Te = Oe, ot = V * (Math.abs(Oe) + Math.abs(Y)), et = Y;
                    let ct = Te * Math.cos(A) - et * Math.sin(A),
                        ze = Te * Math.sin(A) + et * Math.cos(A);
                    n[a] = ct * ce + Math.cos(A) * ke, n[a + 1] = Re + ot * ce, n[a + 2] = ze * ce + Math.sin(A) * ke, i[c] = Ae, i[c + 1] = 1 - at, a += 3, c += 2
                }
                if (M === 0)
                    for (let Ce = 0; Ce < re - 2; ++Ce) s[l] = f + Ce, s[l + 1] = f + Ce + 1, s[l + 2] = f + Ce + 2, l += 3;
                else
                    for (let Ce = 0; Ce < re - 1; ++Ce) {
                        let Ae = Ce === re - 2;
                        s[l] = f, s[l + 1] = Ae ? f + re - 1 : f + Ce + 1, s[l + 2] = Ae ? f + 1 : f + Ce + 2, l += 3
                    }
                f += re
            }
        }
        return dt({
            position: {
                size: 3,
                data: n
            },
            uv: {
                size: 2,
                data: i
            },
            index: {
                type: 5125,
                data: s
            }
        })
    };
    var Dh = Math.floor(64 ** 2 * (Ve.foliage / 100)),
        Th = [],
        ea = [],
        Ih = [];
    for (let t = 0; t < 64 * 64; ++t) {
        let e = Math.max(0, Ph(Math.floor(t / 64) / 7, t % 64 / 7, 1));
        Ih.push(e)
    }
    for (let t = 0; t < 8; ++t) Th.push(new Float32Array(7 * Dh)), ea.push([]);
    var zh = (t, e) => {
            if (Ve.foliage === 0 || !e) return;
            gy(t, v), Xs(t.id + 1e3);
            let o = t.geometry.foliage.folIds,
                r = [],
                n = t.geometry.foliage.instances,
                i = [];
            for (let l = 0; l < o.length; ++l) r.push(Or.get(o[l])), i.push(0);
            let s = Ve.foliage,
                a = !1;
            t.data.holes.length > 0 && (a = !0);
            let c = [-1, -1, -1, -1];
            for (let l = 0; l < 4; ++l) {
                let f = t.data.textureid[l];
                for (let u = 0; u < 4; ++u) f[u] === 27 && (c[l] = u)
            }
            for (let l = 0; l < 64; ++l)
                for (let f = 0; f < 64; ++f) {
                    if (gr() % 100 > s) continue;
                    let u = l + t.origin[0],
                        d = f + t.origin[2],
                        m = ae.getNormal(u, d);
                    if (m[1] < .6 || a && ii(t, l, f) || si(t, l, f) > ro(t, l, f) + 80) continue;
                    let h = Ch(l, f),
                        g = Ah(l, f),
                        M = t.data.texture[h][g],
                        x = M & 31,
                        w = M >> 5 & 31,
                        k = M >> 10 & 31,
                        U = c[h];
                    U >= 0 && (U === 0 && x > 0 ? x = 255 : U === 1 && w > 0 ? w = 255 : U === 2 && k > 0 && (k = 255));
                    let D = gr() % Math.max(32, x + w + k),
                        V = 3;
                    D < x ? V = 0 : D < x + w ? V = 1 : D < x + w + k && (V = 2);
                    let fe = t.data.textureid[h][V],
                        N = Nr.get(fe).foliage,
                        O = Ih[u % 64 + d % 64 * 64];
                    for (let ne = 0; ne < N.length; ++ne) {
                        let J = N[ne],
                            re = J[1];
                        if (gr() % 255 > re || J[2] && O <= 0) continue;
                        let P = J[0],
                            G = o.indexOf(P);
                        if (i[G] >= Dh || G < 0) continue;
                        let A = n[G].attributes.inst.data,
                            te = i[G] * 7,
                            ce = Math.max(0, Math.min(64, l - .25 + ci() * .5)),
                            ke = Math.max(0, Math.min(64, f - .25 + ci() * .5)),
                            Re = ro(t, ce, ke);
                        A[te] = ce + t.origin[0], A[te + 1] = Re, A[te + 2] = ke + t.origin[2], A[te + 3] = J[2] ? .5 + Math.min(1.4, O * 1.5) : .5 + ci(), A[te + 4] = m[0] + .001, A[te + 5] = m[1], A[te + 6] = m[2], i[G]++
                    }
                }
            for (let l = 0; l < o.length; ++l) {
                let f = n[l],
                    u = i[l];
                Gi(f, u), Pt(f, f.attributes.inst), f.bounds = t.geometry.terrain.bounds
            }
        },
        ta = new Map,
        Xc = new Map,
        Lh = new Set,
        py = t => ea[t].length < 1 ? dt({
            inst: {
                instanced: !0,
                size: 7,
                data: Th[t]
            }
        }) : ea[t].pop(),
        hy = (t, e) => {
            ea[t].push(e)
        },
        gy = (t, e) => {
            if (!t.geometry.foliage) {
                let o = t.geometry.foliage = {
                    instances: [],
                    folIds: []
                };
                for (let r = 0; r < 4; ++r) {
                    let n = t.data.textureid[r];
                    for (let i = 0; i < 4; ++i) {
                        let s = Nr.get(n[i]).foliage;
                        for (let a = 0; a < s.length; ++a) o.folIds.indexOf(s[a][0]) < 0 && o.folIds.push(s[a][0])
                    }
                }
                o.folIds.length > 8 && (o.folIds.length = 8);
                for (let r = 0; r < o.folIds.length; ++r) {
                    let n = o.folIds[r];
                    o.instances.push(py(r));
                    let i = Or.get(n);
                    ta.has(i.id) || ta.set(i.id, Eh(i)), Lh.has(i.texture) || (Lh.add(i.texture), Et(i.texture, s => {
                        Hi(s, 16), Gt(s), Xc.set(i.texture, s)
                    }))
                }
            }
        },
        Vh = t => {
            if (t.geometry.foliage) {
                for (let e = 0; e < t.geometry.foliage.instances.length; ++e) hy(e, t.geometry.foliage.instances[e]);
                t.geometry.foliage = void 0
            }
        },
        Rh = (t, e) => {},
        Uh = t => {
            if (!Ve.foliage) return;
            let e = 3,
                o = 2,
                r = [],
                n = [],
                i = [];
            for (let s = 0, a = t.length; s < a; ++s) {
                let c = t[s];
                if (Fp(c.x * 2, c.z * 2) < dc) {
                    let l = c.geometry.foliage;
                    for (let f = 0; f < l.folIds.length; ++f) {
                        let u = l.folIds[f],
                            d = r.indexOf(u);
                        d < 0 && (r.push(u), n.push([]), i.push(Or.get(u).type === 0 ? 13 : 14), d = r.length - 1), n[d].push(l.instances[f])
                    }
                }
            }
            for (let s = 0; s < r.length; ++s) {
                let a = Or.get(r[s]);
                if (ta.has(a.id) && Xc.has(a.texture)) {
                    let c = i[s],
                        l = K[c];
                    W.currentProgram !== l.id && (v.useProgram(l.program), W.currentProgram = l.id, zr(l), Ir(l), ja(l.uniformArray));
                    let f = ta.get(a.id);
                    Lr(f, l), pt("foliageDiffuse", Xc.get(a.texture), 0, l), Dn(l);
                    let u = n[s];
                    for (let d = 0; d < u.length; ++d) {
                        let m = u[d];
                        v.bindBuffer(v.ARRAY_BUFFER, m.attributes.inst.buffer), v.vertexAttribPointer(e, 3, v.FLOAT, !1, 7 * 4, 4 * 4), v.enableVertexAttribArray(e), Pr(e, 1), v.vertexAttribPointer(o, 4, v.FLOAT, !1, 7 * 4, 0), v.enableVertexAttribArray(o), Pr(o, 1), W.boundBuffer = m.attributes.inst.id, v.drawElementsInstanced(v.TRIANGLES, f.drawRangeCount, f.attributes.index.type, f.drawRangeStart, m.instancedCount)
                    }
                }
            }
        };
    var xy = new Map,
        by = new Map,
        Bh = new Map,
        wy = new Map,
        _y = new Map,
        oa = new Map;
    vo.forEach(t => {
        t.fx !== void 0 && (t.fx.effectDirImpact !== void 0 && Bh.set(t.id, t.fx.effectDirImpact), t.fx.animImpact !== void 0 && xy.set(t.id, t.fx.animImpact), t.fx.effectTarget !== void 0 && wy.set(t.id, t.fx.effectTarget), t.fx.effectImpact !== void 0 && by.set(t.id, t.fx.effectImpact), t.fx.animCast !== void 0 && _y.set(t.id, t.fx.animCast), t.fx.effectMissile !== void 0 && oa.set(t.id, t.fx.effectMissile))
    });
    oa.set(59, 166);
    oa.set(62, 170);
    Bh.set(62, 169);
    var jh = [],
        qh = [],
        Nh = new Map;
    var yy = (t, e) => {
            if (!ae.isEntityIdTaken(t.targetid) || t.timer.done(ae.smoothtime)) {
                jh.splice(e, 1), t.effect.done = !0, Nh.delete(t.mId);
                return
            }
            let o = ae.entity(t.targetid),
                r = Lt(t.effect.transform.position, o.visualPosition, t.start);
            Ti(t.effect.transform.position, t.start, r, t.timer.fraction(ae.smoothtime));
            let n = ae.getHeight(t.effect.transform.position[0], t.effect.transform.position[2]) + .3;
            n > t.effect.transform.position[1] && (t.effect.transform.position[1] = n), Fn(t.effect.transform, o.visualPosition, !1, rm), t.timer.passed(ae.smoothtime) > .5 && (Be(t.start, t.effect.transform.position), t.timer.reset(ae.smoothtime, t.timer.end - ae.smoothtime)), it(t.effect.transform, !1)
        },
        My = (t, e) => {
            if (t.timer.done(ae.smoothtime)) {
                qh.splice(e, 1), t.effect.done = !0, Nh.delete(t.mId);
                return
            }
            let o = Math.max(0, Math.min(1, t.timer.fraction(ae.smoothtime)));
            t.currentIndex = ph(t.effect.transform.position, t.path, o, t.fractions), it(t.effect.transform, !1)
        },
        Oh = () => {
            jh.forEach(yy), qh.forEach(My)
        };
    var Yt, Wh = () => {
            Yt = Bt(void 0, 11, v.TRIANGLES), Co(Yt.transform.scale, 40), Yt.transform.visible = !1, Yt.transform.matrixAutoUpdate = !0, Lo(1456, t => {
                let e = dt(t);
                Yt.geometry = e;
                let o = ho(1024, 1024, 1, !1, v.NONE, v.REPEAT, v.REPEAT);
                Id(o), Wt(On, K[34]);
                let r = o.colorTexture;
                pt("skyDiffuse", r, 0, K[11]), Et(1748, n => {
                    Yt.transform.visible = !0, pt("cloudDiffuse", n, 0, K[11])
                })
            })
        },
        Gh = () => {
            se(Yt.transform.position, Me.transform.worldMatrix[12], Me.transform.worldMatrix[13], Me.transform.worldMatrix[14]), it(Yt.transform, !1)
        },
        $h = () => {
            Yt.transform.visible && Wt(Yt, K[11])
        };
    var Nt, Hh = () => {
            Nt = Bt(void 0, 12, v.TRIANGLES), Co(Nt.transform.scale, .1), Ot(Nt.transform, Yt.transform), Nt.transform.visible = !1, Lo(1455, t => {
                Nt.geometry = dt(t), Nt.transform.visible = !0
            })
        },
        Yh = () => {
            Be(Nt.transform.position, on), so(Nt.transform.position, Nt.transform.position, .45), Fn(Nt.transform, Vd, !1, zd), Nt.transform.matrixNeedsUpdate = !0
        },
        Xh = () => {
            Nt.transform.visible && Wt(Nt, K[12])
        };
    var na = 24,
        xe = na + 1,
        Jh = xe ** 2,
        Qc = new Map,
        No = 96,
        Qh = 96 / 12,
        cn = 8,
        li = new Uint8Array(3 * No ** 2),
        Zc = new Map,
        ra = na / 2,
        Zh = 3,
        Kh = [1, 2, 4, 8],
        vr = [0],
        qe = [],
        Ay = (t, e, o, r) => {
            let n = e + o * xe,
                i = e + (o + r) * xe,
                s = e + (o + r) * xe + r,
                a = e + o * xe + r;
            qe.push(n), qe.push(i), qe.push(a), qe.push(i), qe.push(s), qe.push(a)
        };
    for (let t = 0; t < 2; ++t)
        for (let e = 0; e < 2; ++e)
            for (let o = 0; o < Zh; ++o) {
                let r = Kh[o],
                    n = Kh[o + 1],
                    i = e * ra,
                    s = (e + 1) * ra,
                    a = t * ra,
                    c = (t + 1) * ra;
                for (let l = 0; l < (o === Zh - 1 ? 1 : 16); ++l) {
                    let f = 1 & l,
                        u = 2 & l,
                        d = 4 & l,
                        m = 8 & l,
                        h = i + (f ? r : 0),
                        g = s - (d ? r : 0),
                        M = a + (u ? r : 0),
                        x = c - (m ? r : 0);
                    for (let w = M; w < x; w += r)
                        for (let k = h; k < g; k += r) Ay(qe, k, w, r);
                    if (f) {
                        for (let w = a; w < c; w += n) {
                            let k = i + w * xe,
                                U = i + (w + n) * xe,
                                D = i + (w + r) * xe + r;
                            if (qe.push(k, U, D), w < c - n) {
                                let V = D + r * xe,
                                    fe = V + r * xe;
                                qe.push(D, U, V), qe.push(V, U, fe)
                            }
                        }
                        u || qe.push(i + a * xe, i + (a + r) * xe + r, i + a * xe + r), m || qe.push(i + c * xe, i + c * xe + r, i + (c - r) * xe + r)
                    }
                    if (u) {
                        for (let w = i; w < s; w += n) {
                            let k = w + a * xe,
                                U = w + a * xe + n,
                                D = w + (a + r) * xe + r;
                            if (qe.push(k, D, U), w < s - n) {
                                let V = D + r;
                                qe.push(D, V, U), qe.push(V, V + r, U)
                            }
                        }
                        f || qe.push(i + a * xe, i + (a + r) * xe, i + (a + r) * xe + r), d || qe.push(s + a * xe, s + (a + r) * xe - r, s + (a + r) * xe)
                    }
                    if (d) {
                        for (let w = a; w < c; w += n) {
                            let k = s + w * xe,
                                U = s + (w + n) * xe,
                                D = s + (w + r) * xe - r;
                            if (qe.push(k, D, U), w < c - n) {
                                let V = D + r * xe,
                                    fe = V + r * xe;
                                qe.push(D, V, U), qe.push(V, fe, U)
                            }
                        }
                        u || qe.push(s + a * xe, s + a * xe - r, s + (a + r) * xe - r), m || qe.push(s + c * xe, s + (c - r) * xe - r, s + c * xe - r)
                    }
                    if (m) {
                        for (let w = i; w < s; w += n) {
                            let k = w + c * xe,
                                U = w + c * xe + n,
                                D = w + (c - r) * xe + r;
                            if (qe.push(k, U, D), w < s - n) {
                                let V = D + r,
                                    fe = V + r;
                                qe.push(D, U, V), qe.push(V, U, fe)
                            }
                        }
                        f || qe.push(i + c * xe, i + (c - r) * xe + r, i + (c - r) * xe), d || qe.push(s + c * xe, s + (c - r) * xe, s + (c - r) * xe - r)
                    }
                    vr.push(qe.length)
                }
            }
    var Sy = {
            type: v.UNSIGNED_INT,
            data: new Uint32Array(qe)
        },
        Kc = new Float32Array(Jh * 3),
        Py = new Float32Array(Jh * 3);
    for (let t = 0, e = 0; t <= na; ++t)
        for (let o = 0; o <= na; ++o, ++e) Kc[e * 3 + 0] = o * 2.6666666666666665, Kc[e * 3 + 2] = t * 2.6666666666666665;
    var eg = () => {},
        tg = (t, e, o) => {
            if (Ly(t), e) {
                let r = t.geometry.terrain,
                    n = r.attributes.position.data,
                    i = r.attributes.normal.data;
                for (let a = 0; a < 25; ++a)
                    for (let c = 0; c < 25; ++c) {
                        let l = c + 25 * a,
                            f = t.data.terrain[l] * .030517578125;
                        n[l * 3 + 1] = f
                    }
                let s = t.normals;
                for (let a = 0; a < 25 * 25 * 3; ++a) i[a] = 0;
                for (let a = 0; a < 24; ++a)
                    for (let c = 0; c < 24; ++c) {
                        let l = (c * 2 + 24 * a * 2) * 3,
                            f = s[l],
                            u = s[l + 1],
                            d = s[l + 2],
                            m = s[l + 3],
                            h = s[l + 4],
                            g = s[l + 5],
                            M = (c + 25 * a) * 3,
                            x = (c + 25 * (a + 1)) * 3,
                            w = (c + 1 + 25 * a) * 3,
                            k = (c + 1 + 25 * (a + 1)) * 3;
                        i[M] += f, i[M + 1] += u, i[M + 2] += d, i[x] += f + m, i[x + 1] += u + h, i[x + 2] += d + g, i[w] += f + m, i[w + 1] += u + h, i[w + 2] += d + g, i[k] += m, i[k + 1] += h, i[k + 2] += g
                    }
                if (t.z > 0) {
                    let c = ae.getChunk(t.x, t.z - 1).normals,
                        l = 24 - 1;
                    for (let f = 0; f < 24; ++f) {
                        let u = (f * 2 + 24 * l * 2) * 3,
                            d = c[u],
                            m = c[u + 1],
                            h = c[u + 2],
                            g = c[u + 3],
                            M = c[u + 4],
                            x = c[u + 5],
                            w = (f + 1) * 3,
                            k = f * 3;
                        i[k] += d + g, i[k + 1] += m + M, i[k + 2] += h + x, i[w] += g, i[w + 1] += M, i[w + 2] += x
                    }
                }
                if (t.z + 1 < ae.chunkAmount) {
                    let c = ae.getChunk(t.x, t.z + 1).normals,
                        l = 0,
                        f = 25 - 1;
                    for (let u = 0; u < 24; ++u) {
                        let d = (u * 2 + 24 * l * 2) * 3,
                            m = c[d],
                            h = c[d + 1],
                            g = c[d + 2],
                            M = c[d + 3],
                            x = c[d + 4],
                            w = c[d + 5],
                            k = (u + 25 * f) * 3,
                            U = (u + 1 + 25 * f) * 3;
                        i[k] += m, i[k + 1] += h, i[k + 2] += g, i[U] += m + M, i[U + 1] += h + x, i[U + 2] += g + w
                    }
                }
                if (t.x > 0) {
                    let c = ae.getChunk(t.x - 1, t.z).normals,
                        l = 24 - 1;
                    for (let f = 0; f < 24; ++f) {
                        let u = (l * 2 + 24 * f * 2) * 3,
                            d = c[u],
                            m = c[u + 1],
                            h = c[u + 2],
                            g = c[u + 3],
                            M = c[u + 4],
                            x = c[u + 5],
                            w = 25 * f * 3,
                            k = 25 * (f + 1) * 3;
                        i[w] += d + g, i[w + 1] += m + M, i[w + 2] += h + x, i[k] += g, i[k + 1] += M, i[k + 2] += x
                    }
                }
                if (t.x + 1 < ae.chunkAmount) {
                    let c = ae.getChunk(t.x + 1, t.z).normals,
                        l = 0,
                        f = 25 - 1;
                    for (let u = 0; u < 24; ++u) {
                        let d = (l * 2 + 24 * u * 2) * 3,
                            m = c[d],
                            h = c[d + 1],
                            g = c[d + 2],
                            M = c[d + 3],
                            x = c[d + 4],
                            w = c[d + 5],
                            k = (f + 25 * u) * 3,
                            U = (f + 25 * (u + 1)) * 3;
                        i[U] += m + M, i[U + 1] += h + x, i[U + 2] += g + w, i[k] += m, i[k + 1] += h, i[k + 2] += g
                    }
                }
                for (let a = 0; a < 25; ++a)
                    for (let c = 0; c < 25; ++c) {
                        let l = (c + 25 * a) * 3,
                            f = i[l],
                            u = i[l + 1],
                            d = i[l + 2],
                            m = 1 / Math.sqrt(f * f + u * u + d * d);
                        i[l] = f * m, i[l + 1] = u * m, i[l + 2] = d * m
                    }
                Pt(r, r.attributes.position), Pt(r, r.attributes.normal)
            }
            if (o) {
                let r = t.x * 2 % cn * 2 + t.z * 2 % cn * cn;
                t.meshes.atlas = Dy(t), t.meshes.texSet = t.data.textureid.map(Ty);
                let n = t.data.holes.length > 0;
                for (let i = 0; i < 2; ++i)
                    for (let s = 0; s < 2; ++s) {
                        let a = s * 2 + i,
                            c = t.data.texture[a];
                        for (let f = 0; f < No; ++f)
                            for (let u = 0; u < No; ++u) {
                                let d = f * No + u,
                                    m = d * 3;
                                if (wh(c[d], li, m), n) {
                                    let h = i * 12 + Math.floor(u / Qh) + (Math.floor(f / Qh) + s * 12) * 24;
                                    t.data.holes.indexOf(h) >= 0 && (li[m + 0] = 255, li[m + 1] = 255, li[m + 2] = 255)
                                }
                            }
                        tm(t.meshes.atlas, r + a, No, No, li);
                        let l = t.meshes.quadrantUbos[a];
                        l.data.quadrant[0] = r + a, l.data.terrainInfo = t.meshes.texSet[a].info, Cs(l), It(l)
                    }
            }
        },
        Ey = {
            min: [0, 0, 0],
            max: [64, 64, 64],
            center: [32, 32, 32],
            scale: [64, 64, 64],
            radius: 60,
            initiated: !0
        },
        Ly = t => {
            if (t.geometry.terrain || (t.geometry.terrain = dt({
                    position: {
                        size: 3,
                        data: Kc
                    },
                    normal: {
                        size: 3,
                        data: Py
                    },
                    index: Sy
                }), Object.assign(t.geometry.terrain.bounds, Ey)), !t.meshes.terrain) {
                let e = Bt(t.geometry.terrain, 8, v.TRIANGLES);
                t.meshes.terrain = e, t.meshes.quadrantUbos = [];
                for (let o = 0; o < 4; ++o) {
                    let r = Xr(Zn.meshterrain);
                    r.data.modelMatrix = e.transform.matrix, t.meshes.quadrantUbos.push(r)
                }
            }
            Be(t.meshes.terrain.transform.position, t.origin), t.meshes.terrain.transform.matrixNeedsUpdate = !0, it(t.meshes.terrain.transform, !1), t.state = Math.max(t.state, 5)
        },
        Dy = t => {
            let e = Math.floor(t.x * 2 / cn),
                o = Math.floor(t.z * 2 / cn),
                r = e + 1e3 * o;
            if (!Qc.has(r)) {
                let n = So({
                    width: No,
                    height: No,
                    target: v.TEXTURE_2D_ARRAY,
                    format: v.RGB,
                    internalFormat: v.RGB565,
                    depth: cn ** 2,
                    flipY: !1,
                    generateMipmaps: !1
                });
                Hi(n, 4), Gt(n), Qc.set(r, n)
            }
            return Qc.get(r)
        },
        Ty = t => {
            let e = t.join(",");
            if (!Zc.has(e)) {
                let o = {
                    info: [],
                    diffuse: [],
                    loaded: 0
                };
                t.forEach((r, n) => {
                    let i = Nr.get(r);
                    o.info[n * 4 + 0] = i.scale / 127, o.info[n * 4 + 1] = i.darkest / 255 * 3, o.info[n * 4 + 2] = i.brightest / 255 * 3, o.info[n * 4 + 3] = i.spec / 255, Et(i.texture, s => {
                        o.diffuse[n] = s, o.loaded++
                    })
                }), Zc.set(e, o)
            }
            return Zc.get(e)
        },
        og = t => {},
        rg = (t, e) => {},
        ng = () => {},
        ig = t => {
            let e = K[8];
            if (!e.active) return;
            v.useProgram(e.program), W.currentProgram = e.id, zr(e), Ir(e);
            let o, r, n = 1;
            for (let s = 0; s < t.length; ++s) {
                let a = t[s],
                    c = a.meshes.terrain,
                    l = c.geometry;
                o !== a.meshes.atlas && (pt("atlas", a.meshes.atlas, 0, e), o = a.meshes.atlas), Lr(l, e);
                for (let f = 0; f < 4; ++f)
                    if (a.quadrantlod[f] <= n) {
                        let u = a.meshes.texSet[f];
                        if (u.loaded < 4) continue;
                        let d = a.meshes.quadrantUbos[f];
                        if (fr(d), r !== u) {
                            for (let M = 0; M < 4; ++M) pt("diffuse", u.diffuse[M], M, e);
                            r = u
                        }
                        Dn(e);
                        let m = a.quadrantmask[f],
                            h = vr[m] * 4,
                            g = vr[m + 1] - vr[m];
                        v.drawElements(c.mode, g, l.attributes.index.type, h)
                    }
            }
            let i = K[9];
            if (i.active) {
                v.useProgram(i.program), W.currentProgram = i.id, zr(i), Ir(e);
                for (let s = 0; s < t.length; ++s) {
                    let a = t[s],
                        c = a.meshes.terrain,
                        l = c.geometry,
                        f = a.meshes.quadrantUbos[0];
                    fr(f), Lr(l, i);
                    for (let u = 0; u < 4; ++u)
                        if (a.quadrantlod[u] > n) {
                            let d = a.quadrantmask[u],
                                m = vr[d] * 4,
                                h = vr[d + 1] - vr[d];
                            v.drawElements(c.mode, h, l.attributes.index.type, m)
                        }
                }
            }
        };
    var sg, ag = () => {
            sg = dt({
                position: {
                    size: 3,
                    data: gfe.classicWater ? waterGrid().pos : new Float32Array([0, 0, 0, 64, 0, 0, 0, 0, 64, 64, 0, 64])
                },
                index: {
                    type: v.UNSIGNED_INT,
                    data: gfe.classicWater ? waterGrid().idx : new Uint32Array([0, 2, 1, 2, 3, 1])
                }
            }), Et(1748, t => pt("waterNoise", t, 0, K[20])), Et(1243, t => pt("waterLines", t, 0, K[20])), pt("bufferPongColor", _o.colorTexture, 0, K[20]), pt("bufferPongDepth", _o.depthTexture, 0, K[20])
        },
        cg = (t, e) => {
            if (!e || t.data.water.length === 0) return;
            t.meshes.waterubo || (t.meshes.waterubo = Xr(Zn.water));
            let o = t.origin[0],
                r = t.origin[2],
                n = t.meshes.waterubo.data.verts;
            for (let i = 0; i < 4; ++i) {
                let s = t.data.water[i] * .030517578125;
                n[i * 3] = o + i % 2 * 64, n[i * 3 + 1] = s, n[i * 3 + 2] = r + Math.floor(i / 2) * 64
            }
            Cs(t.meshes.waterubo), It(t.meshes.waterubo)
        },
        lg = t => {},
        fg = t => {
            let e = K[20];
            Tr(e, W.currentProgram === e.id);
            for (let o = 0, r = t.length; o < r; ++o) {
                let n = t[o];
                n.data.water.length !== 0 && (fr(n.meshes.waterubo), Dr(sg, e, v.TRIANGLES))
            }
        };
    var ug = t => {
            sp(), V1(), K1(t), uh(), ag(), O1(), Y1(), Wh(), Hh(), ng()
        },
        dg = (t, e, o) => {
            dh(t, e, o), eg(), J1(e), Oh(), nh(t, e), W1(t), X1(t), j1(t, e), Gh(), Yh(), up(t)
        },
        mg = (t, e) => {
            gp(t, e), rg(t, e), Rh(t, e)
        };
    var ln = [],
        pg = t => {
            ln.push(t)
        },
        Jc = t => {
            ln.splice(ln.indexOf(t), 1)
        },
        hg = t => {
            ig(t), G1(), $h(), ssaoDefersFoliage() || Uh(t)
        },
        gg = t => {
            Xh()
        },
        vg = t => {
            fg(t), $1(), q1()
        },
        xg = (t, e, o, r, n, i, s) => {
            if (t.state !== 8 && (tg(t, e, o), zh(t, r), cg(t, i), n))
                for (let a = 0; a < t.props.length; ++a) t.props[a].onChunkRebuild(t)
        },
        bg = t => {
            og(t), Vh(t), lg(t)
        };
    var _g = () => ({
            id: 0,
            x: 0,
            z: 0,
            origin: [0, 0, 0],
            deserialized: !1,
            props: [],
            normals: new Float32Array(3456),
            data: void 0,
            loadingProps: 0,
            center2d: [0, 0],
            geometry: {},
            meshes: {},
            state: 0,
            neighbors: [],
            quadrantlod: [0, 0, 0, 0],
            quadrantmask: [0, 49, 98, 147],
            inRange: !1,
            isMeshVisible: !1,
            isEffectsVisible: !1,
            reloadAttempts: 0,
            abort: new AbortController
        }),
        el = (t, e, o, r, n) => {
            yh(t, e, o, r), t.reloadAttempts = 0, t.center2d[0] = t.origin[0] + 64 / 2, t.center2d[1] = t.origin[2] + 64 / 2, t.neighbors.length = 0;
            for (let i = Math.max(0, o - 1); i <= Math.min(n - 1, o + 1); i++)
                for (let s = Math.max(0, r - 1); s <= Math.min(n - 1, r + 1); s++) {
                    let a = i + s * n;
                    a !== t.id && t.neighbors.push(a)
                }
            t.state = 0
        },
        yg = t => t.state >= 2 ? !1 : (t.state = 2, Vy(t), !0),
        Vy = async t => {
            try {
                t.abort = new AbortController;
                let o = await (await fetch(`data/world/${ae.file}/${t.id}?v=8926940`, {
                    signal: t.abort.signal,
                    cache: "default"
                })).arrayBuffer();
                if (t.reloadAttempts = 0, t.state > 2) return;
                Ry(new Uint8Array(o), t)
            } catch (e) {
                t.state === 2 && t.reloadAttempts++ < 5 ? (t.state = 2 - 1, yg(t)) : console.log(`failed to load chunk ${t.id}, giving up`, e)
            }
        }, Ry = (t, e) => {
            e.state = 3, Mh(e, Gr.chunk.decode(t)), tl(e)
        }, tl = t => {
            if (t.inRange = pc(t.x * 2, t.z * 2) < 3, t.inRange)
                for (let e = 0; e < 2; ++e)
                    for (let o = 0; o < 2; ++o) {
                        let r = o * 2 + e,
                            n = Math.min(2, pc(t.x * 2 + e, t.z * 2 + o)),
                            i = Cp(t.x * 2 + e, t.z * 2 + o);
                        t.quadrantlod[r] = n, t.quadrantmask[r] = i
                    }
        }, Mg = (t, e) => {
            let o = t.state;
            if (o === 0 || o === 3) {
                if (t.inRange) {
                    o === 0 && (t.state = 1);
                    let r = t.loadingProps === 0;
                    for (let n = 0; n < t.neighbors.length; ++n) {
                        let i = e.chunksMap.get(t.neighbors[n]);
                        i ? i.state < 3 && (i.state === 0 && (i.state = 1), r = !1) : r = !1
                    }
                    o === 3 && r && (t.state = 4, Uy(t, !0, !0, !0, !0, !0, !0))
                }
            } else o >= 5 ? t.inRange && t.state < 7 ? (pg(t), t.state = 7) : !t.inRange && t.state === 7 && (Jc(t), fi(t, !1, !1), t.state = 6) : o === 1 && yg(t) && (t.state = 2)
        }, fi = (t, e, o) => {
            if (t.isMeshVisible !== e) {
                t.isMeshVisible = e;
                for (let r = 0; r < t.props.length; ++r) t.props[r].setVisible(e)
            }
            if (!o && t.isEffectsVisible !== e) {
                t.isEffectsVisible = e;
                for (let r = 0; r < t.props.length; ++r) t.props[r].setEffectVisible(e)
            }
        }, Uy = (t, e, o, r, n, i, s) => {
            xg(t, e, o, r, n, i, s)
        }, kg = t => {
            Fh(t);
            let e = t.state === 2;
            t.state === 7 && (Jc(t), fi(t, !1, !1), t.state = 6), bg(t), t.state = 8, e && t.abort.abort()
        };
    var Cg = (t, e, o) => {
            let r = [];
            for (let n = 0; n < t.length; ++n) {
                let i = t[n];
                $s(i.data.aabb, e.frustum, e.frustumConstants) ? (r.push(i), fi(i, !0, o)) : fi(i, !1, o)
            }
            return r
        },
        By = () => {
            let t = ln;
            if (v.enable(v.POLYGON_OFFSET_FILL), v.polygonOffset(1.3, 3), Kr) {
                for (let e = 1; e >= 0; --e) {
                    let o = Hr[e],
                        r = hr[e];
                    Ss(r, !0), ui(o), Va(o), t = Cg(t, r, !0);
                    for (let n = 0, i = Us.length; n < i; ++n) {
                        let s = Us[n];
                        $r(s, K[s.shadowProgram], !0, r)
                    }
                }
                ei(!1)
            }
            Ss(hr[0], !0), ia(Hr[0], Yr, v.DEPTH_BUFFER_BIT), ui(Yr);
            for (let e = 0, o = Rs.length; e < o; ++e) {
                let r = Rs[e];
                $r(r, K[r.shadowProgram], !1, Me)
            }
            v.disable(v.POLYGON_OFFSET_FILL)
        },
        jy = t => {
            Ss(Me, !0), ui(oo), Va(oo);
            for (let e = 0, o = Is.length; e < o; ++e) {
                let r = Is[e];
                $r(r, K[r.program], !0, Me)
            }
            hg(t)
        },
        qy = t => {
            gg(t);
            for (let e = 0, o = zs.length; e < o; ++e) {
                let r = zs[e];
                $r(r, K[r.program], !0, Me)
            }
            ia(oo, _o, v.DEPTH_BUFFER_BIT), ia(oo, _o, v.COLOR_BUFFER_BIT), ui(oo), vg(t);
            for (let e = 0, o = Vs.length; e < o; ++e) {
                let r = Vs[e];
                $r(r, K[r.program], !0, Me)
            }
            fireflyDraw()
        },
        fn = (t, e, o, r, n) => {
            let i = K[t];
            o && pt("inputA", o.colorTexture, 0, i), r && pt("inputB", r.colorTexture, 0, i);
            for (let s = 0; s < n.length; ++s) {
                let a = i.uniforms[n[s][0]];
                a.value = n[s][1]
            }
            ui(e), Wt(On, i)
        },
        Ny = t => {
            let e = _o,
                o = oo;
            if (t.has(32) && (t.delete(32), fn(32, e, o, null, []), [e, o] = [o, e]), t.has(33) && (t.delete(33), fn(33, e, o, null, []), [e, o] = [o, e]), t.has(30)) {
                t.delete(30);
                if (gfe.bloomHQ) return void fn(42, null, o, bloomHQChain(o), pfxToneArgs().concat([
                    ["bloomAmount", bloomAmountVal],
                    ["tonemapEnabled", gfe.tonemap ? 1 : 0]
                ]));
                let r = .5 / cr.width,
                    n = .5 / cr.height;
                fn(30, lr, o, null, [
                    ["offset", [-r, -n, r, -n, r, n, -r, n]],
                    ["amount", [.25, .25, .25, .25]]
                ]);
                let i = ["amount", [.125, .375, .375, .125]];
                r *= 2, n *= 2, fn(30, cr, lr, null, [
                    ["offset", [-r * 2, 0, -r, 0, r, 0, r * 2, 0]], i
                ]), fn(30, lr, cr, null, [
                    ["offset", [0, -n * 2, 0, -n, 0, n, 0, n * 2]], i
                ]), gfe.tonemap ? (fn(31, e, o, lr, []), [e, o] = [o, e], fn(39, null, o, null, pfxToneArgs())) : fn(31, null, o, lr, [])
            } else gfe.tonemap ? fn(39, null, o, null, pfxToneArgs()) : ia(o, null, v.COLOR_BUFFER_BIT)
        },
        ia = (t, e, o, r = v.NEAREST) => {
            let n = t.width,
                i = t.height,
                s = e !== null ? e.width : oo.width,
                a = e !== null ? e.height : oo.height;
            v.bindFramebuffer(v.READ_FRAMEBUFFER, t.buffer), v.bindFramebuffer(v.DRAW_FRAMEBUFFER, e !== null ? e.buffer : null), v.blitFramebuffer(0, 0, n, i, 0, 0, s, a, o, r)
        },
        ui = t => {
            t ? (v.bindFramebuffer(v.FRAMEBUFFER, t.buffer), Sn(t.width, t.height)) : (v.bindFramebuffer(v.FRAMEBUFFER, null), Sn(W.width, W.height))
        },
        Ag = t => {
            Lp(t)
        },
        Sg = t => {
            By();
            let e = Cg(ln, Me, !1);
            jy(e), ssaoDefersFoliage() || qy(e), postScene(e), Ny(t)
        };
    var un = Ve.resolution / 100,
        Eg = !1,
        Pg = [256, 512, 1024, 2048][Ve.shadowmapResolution] || 1024,
        Lg = () => {
            v || (alert("WebGL2 problem found."), window.location.href = "/technical"), Dg(), Ag(Pg), ug(Pg), Ig(W.width, W.height), An.className = "l-canvas", Ao.className = "l-canvas", Ao.style.pointerEvents = "all", window.addEventListener("resize", Tg, !1)
        };
    ki.subscribe(t => {
        fs(t ** 2 / 10, Ve.shadowmapResolution)
    });
    Fi.subscribe(t => {
        Me.fov = t, Zo(Me)
    });
    yi.subscribe(t => {
        Eg = !t
    });
    var Dg = () => {
            let t = window.innerWidth * un,
                e = window.innerHeight * un;
            Sd(t, e)
        },
        Tg = () => {
            let t = window.innerWidth * un,
                e = window.innerHeight * un;
            Dg(), Dp(t, e), Ig(t, e)
        },
        Ig = (t, e) => {
            Me.aspect = t / e, Zo(Me), R1(t, e)
        };
    Ci.subscribe(t => {
        let e = t / 100,
            o = un !== e;
        un = e, Ve.resolutionScale = e, o && Tg()
    });
    var zg = (t, e) => {
            ji(Me);
            let o = new Set;
            Ve.fxaa && o.add(32), Ve.bloom && o.add(30), Eg && (dg(t, e.smoothtime, o), Sg(o))
        },
        Vg = (t, e) => {
            mg(t, e)
        };
    var sa = class {
        constructor() {
            this.nodes = new Map, this.width = -0, this.height = -0, this.depth = -0, this.yd = -0, this.zd = -0, this.xm = -0, this.ym = -0, this.zm = -0, this.xs = -0, this.ys = -0, this.zs = -0, this.dirty = !1
        }
        setDimensions(e, o, r, n, i, s) {
            this.clear(), this.dirty = !0;
            let a = Math.floor(e / n),
                c = Math.floor(o / i),
                l = Math.floor(r / s);
            this.width = e, this.height = o, this.depth = r, this.yd = c, this.zd = l, this.xm = a - 1, this.ym = c - 1, this.zm = l - 1, this.xs = e / a, this.ys = o / c, this.zs = r / l
        }
        clear() {
            this.nodes.clear()
        }
        add(e, o) {
            let r = Math.max(0, Math.min(this.xm, ~~(o[0] / this.xs))),
                n = Math.max(0, Math.min(this.ym, ~~(o[1] / this.ys))),
                i = Math.max(0, Math.min(this.zm, ~~(o[2] / this.zs))),
                s = Math.max(0, Math.min(this.xm, ~~(o[3] / this.xs))),
                a = Math.max(0, Math.min(this.ym, ~~(o[4] / this.ys))),
                c = Math.max(0, Math.min(this.zm, ~~(o[5] / this.zs)));
            for (let l = r; l <= s; ++l)
                for (let f = n; f <= a; ++f)
                    for (let u = i; u <= c; ++u) {
                        let d = l * this.yd * this.zd + f * this.zd + u;
                        this.nodes.has(d) || this.nodes.set(d, {
                            aabbs: [],
                            content: [],
                            count: 0
                        });
                        let m = this.nodes.get(d);
                        m.content.push(e), m.aabbs.push(o), m.count++
                    }
        }
        queryAABB(e) {
            let o = Math.max(0, Math.min(this.xm, ~~(e[0] / this.xs))),
                r = Math.max(0, Math.min(this.ym, ~~(e[1] / this.ys))),
                n = Math.max(0, Math.min(this.zm, ~~(e[2] / this.zs))),
                i = Math.max(0, Math.min(this.xm, ~~(e[3] / this.xs))),
                s = Math.max(0, Math.min(this.ym, ~~(e[4] / this.ys))),
                a = Math.max(0, Math.min(this.zm, ~~(e[5] / this.zs))),
                c = [];
            for (let l = o; l <= i; ++l)
                for (let f = r; f <= s; ++f)
                    for (let u = n; u <= a; ++u) {
                        let d = l * this.yd * this.zd + f * this.zd + u;
                        if (this.nodes.has(d)) {
                            let m = this.nodes.get(d);
                            for (let h = 0; h < m.count; ++h) {
                                let g = m.content[h];
                                hh(m.aabbs[h], e) && !c.includes(g) && c.push(g)
                            }
                        }
                    }
            return c
        }
        queryRay(e, o, r) {
            let n = e[0] + o[0],
                i = e[1] + o[1],
                s = e[2] + o[2],
                a = Math.max(0, Math.min(this.xm, ~~(Math.min(e[0], n) / this.xs))),
                c = Math.max(0, Math.min(this.ym, ~~(Math.min(e[1], i) / this.ys))),
                l = Math.max(0, Math.min(this.zm, ~~(Math.min(e[2], s) / this.zs))),
                f = Math.max(0, Math.min(this.xm, ~~(Math.max(e[0], n) / this.xs))),
                u = Math.max(0, Math.min(this.ym, ~~(Math.max(e[1], i) / this.ys))),
                d = Math.max(0, Math.min(this.zm, ~~(Math.max(e[2], s) / this.zs))),
                m = [];
            for (let h = a; h <= f; ++h)
                for (let g = c; g <= u; ++g)
                    for (let M = l; M <= d; ++M) {
                        let x = h * this.yd * this.zd + g * this.zd + M;
                        if (this.nodes.has(x)) {
                            let w = this.nodes.get(x);
                            for (let k = 0; k < w.count; ++k) {
                                let U = w.content[k];
                                xh(w.aabbs[k], e, r, 0, 1) && !m.includes(U) && m.push(U)
                            }
                        }
                    }
            return m
        }
        queryNodeContents(e, o, r) {
            e = Math.max(0, Math.min(this.xm, ~~(e / this.xs))), o = Math.max(0, Math.min(this.ym, ~~(o / this.ys))), r = Math.max(0, Math.min(this.zm, ~~(r / this.zs)));
            let n = e * this.yd * this.zd + o * this.zd + r;
            return this.nodes.has(n) ? this.nodes.get(n).content : []
        }
    };
    var At = {
            origin: [0, 0, 0],
            dir: [0, -1, 0],
            invDir: [0, 0, 0]
        },
        aa = (t, e, o, r, n, i, s) => {
            se(t.origin, e, o, r), se(t.dir, n, i, s), gd(t.invDir, t.dir)
        };
    var ol = [-0, -1, -0],
        ca = class {
            constructor() {
                this.id = "", this.idInt = 0, this.file = "", this.bounds = 0, this.chunkAmount = 0, this.chunksMap = new Map, this.chunksArray = [], this.finishedLoadingChunks = new Set, this.time = this.accum = -0, this.timestep = 1 / 60, this.tickId = 0, this.data = void 0, this.triangleGrid = new sa
            }
            load(e, o) {
                this.id = e, this.file = o, Ya.forEach(r => {
                    r.name === o && (this.data = r, this.idInt = r.id)
                }), this.parse(!1)
            }
            tickIdToTimestamp(e) {
                return e * this.timestep
            }
            setTimeFromTickId(e) {
                return this.tickId = e, this.time = this.tickIdToTimestamp(e), this.tickId
            }
            getHeight(e, o) {
                e = je(e, 0, this.bounds), o = je(o, 0, this.bounds);
                let r = this.chunksMap.get(Math.min(Math.floor(e / 64), this.chunkAmount - 1) + Math.min(Math.floor(o / 64), this.chunkAmount - 1) * this.chunkAmount);
                return !r || !r.deserialized ? -0 : ro(r, e >= this.bounds ? 63 : e % 64, o >= this.bounds ? 63 : o % 64)
            }
            getHole(e, o) {
                e = je(e, 0, this.bounds), o = je(o, 0, this.bounds);
                let r = this.chunksMap.get(Math.min(Math.floor(e / 64), this.chunkAmount - 1) + Math.min(Math.floor(o / 64), this.chunkAmount - 1) * this.chunkAmount);
                return !r || !r.deserialized ? -0 : ii(r, e >= this.bounds ? 63 : e % 64, o >= this.bounds ? 63 : o % 64)
            }
            getWaterHeight(e, o) {
                e = je(e, 0, this.bounds), o = je(o, 0, this.bounds);
                let r = this.chunksMap.get(Math.min(Math.floor(e / 64), this.chunkAmount - 1) + Math.min(Math.floor(o / 64), this.chunkAmount - 1) * this.chunkAmount);
                return !r || !r.deserialized ? -1 : si(r, e >= this.bounds ? 63 : e % 64, o >= this.bounds ? 63 : o % 64)
            }
            getAreaId(e, o) {
                e = je(e, 0, this.bounds), o = je(o, 0, this.bounds);
                let r = this.chunksMap.get(Math.min(Math.floor(e / 64), this.chunkAmount - 1) + Math.min(Math.floor(o / 64), this.chunkAmount - 1) * this.chunkAmount);
                return !r || !r.deserialized ? -0 : Wc(r, e >= this.bounds ? 63 : e % 64, o >= this.bounds ? 63 : o % 64)
            }
            getEnvironmentId(e, o) {
                e = je(e, 0, this.bounds), o = je(o, 0, this.bounds);
                let r = this.chunksMap.get(Math.min(Math.floor(e / 64), this.chunkAmount - 1) + Math.min(Math.floor(o / 64), this.chunkAmount - 1) * this.chunkAmount);
                return !r || !r.deserialized ? -0 : Gc(r, e >= this.bounds ? 63 : e % 64, o >= this.bounds ? 63 : o % 64)
            }
            getNormal(e, o) {
                e = je(e, 0, this.bounds), o = je(o, 0, this.bounds);
                let r = this.chunksMap.get(Math.min(Math.floor(e / 64), this.chunkAmount - 1) + Math.min(Math.floor(o / 64), this.chunkAmount - 1) * this.chunkAmount);
                if (!r || !r.deserialized) se(ol, 0, 0, 0);
                else {
                    e = e >= this.bounds ? 63 : e % 64, o = o >= this.bounds ? 63 : o % 64, e /= 2.6666666666666665, o /= 2.6666666666666665;
                    let n = Math.floor(e) * 2 + 24 * Math.floor(o) * 2;
                    e % 1 + o % 1 > 1 && n++, n *= 3, se(ol, r.normals[n], r.normals[n + 1], r.normals[n + 2])
                }
                return ol
            }
            clampV3(e) {
                return e[0] = je(e[0], 0, this.bounds), e[1] = je(e[1], 0, 2e3), e[2] = je(e[2], 0, this.bounds), e
            }
            getChunkFromWorld(e, o) {
                return e = je(e, 0, this.bounds), o = je(o, 0, this.bounds), e = Math.min(Math.floor(e / 64), this.chunkAmount - 1), o = Math.min(Math.floor(o / 64), this.chunkAmount - 1), this.chunksMap.get(e + o * this.chunkAmount)
            }
            getChunk(e, o) {
                if (!(e < 0 || o < 0 || e >= this.chunkAmount || o >= this.chunkAmount)) return this.chunksMap.get(e + o * this.chunkAmount)
            }
            parse(e) {
                e || (this.chunkAmount = this.data.chunkAmount, this.bounds = 64 * this.chunkAmount, this.setGrids(), this.finishedLoadingChunks.clear(), this.createChunks())
            }
            setGrids() {
                this.triangleGrid.setDimensions(this.bounds, this.bounds, this.bounds, 15, 15, 15)
            }
            rebuildTriangleOctree() {
                this.triangleGrid.clear(), this.chunksMap.forEach(e => {
                    for (let o = 0; o < e.props.length; ++o) {
                        let r = e.props[o];
                        r.loaded = !1, r.loadGeometry(this, e)
                    }
                })
            }
            triangleRaycastClosest(e, o, r, n, i, s) {
                aa(At, e, o, r, n, i, s);
                let a = 1,
                    c = this.triangleGrid.queryRay(At.origin, At.dir, At.invDir);
                for (let l = 0; l < c.length; ++l) {
                    let f = c[l];
                    a = Math.min(a, Gs(f[0], f[1], f[2], At.origin, At.dir, !1))
                }
                return a
            }
            triangleRaycastAny(e, o, r, n, i, s, a) {
                aa(At, e, o, r, n, i, s);
                let c = this.triangleGrid.queryRay(At.origin, At.dir, At.invDir);
                for (let l = 0; l < c.length; ++l) {
                    let f = c[l];
                    if (Gs(f[0], f[1], f[2], At.origin, At.dir, a) < 1) return !0
                }
                return !1
            }
            raycastEnvironmentClosest(e, o, r, n, i, s) {
                let a = this.getHeight(e, r) > o,
                    c = this.triangleRaycastClosest(e, o, r, n, i, s);
                c < 1 && (n *= c, i *= c, s *= c);
                let l = 0,
                    f = 0,
                    u = .1;
                if (a) f = 1;
                else
                    for (; l < 100 && f < 1;) {
                        let d = f + u,
                            m = e + n * d,
                            h = o + i * d,
                            g = r + s * d,
                            M = this.getHole(e, r) ? 0 : this.getHeight(m, g),
                            x = h - M;
                        x < 0 ? x > -.05 ? (f += u, l = 100) : u *= .5 : f += u, l++
                    }
                return Math.min(f, c, 1)
            }
            raycastEnvironmentAny(e, o, r, n, i, s, a) {
                let c = Math.sqrt(n * n + i * i + s * s),
                    l = 3 / c,
                    f = n * l,
                    u = i * l,
                    d = s * l,
                    m = e,
                    h = o + a,
                    g = r,
                    M = Math.floor(c / 3),
                    x = 0;
                for (; x < M;)
                    if (++x, m += f, h += u, g += d, this.getHeight(m, g) > h) return !0;
                return this.triangleRaycastAny(e, o, r, n, i, s, !0)
            }
            raycastEnvironmentHeight(e, o, r, n, i) {
                let a = this.getHole(e, o) ? 0 : this.getHeight(e, o),
                    c = 0;
                r > a && (i !== void 0 && Be(i, this.getNormal(e, o)), c = a);
                let l = r - n;
                uo[0] = uo[3] = e, uo[5] = uo[2] = o, uo[4] = r, uo[1] = n;
                let f = this.triangleGrid.queryAABB(uo);
                if (f.length > 0) {
                    let u = 1 / 0;
                    aa(At, e, r, o, 0, -l, 0);
                    for (let d = 0; d < f.length; ++d) {
                        let m = f[d],
                            h = Gs(m[0], m[1], m[2], At.origin, At.dir, !1);
                        if (h < u) {
                            u = h;
                            let g = r - h * l;
                            g > c && (c = g, i !== void 0 && Be(i, m[3]))
                        }
                    }
                }
                return c
            }
            addChunk(e) {
                this.chunksMap.set(e.id, e), this.chunksArray.push(e)
            }
            removeChunk(e) {
                this.chunksMap.delete(e.id), this.chunksArray.splice(this.chunksArray.indexOf(e), 1)
            }
        };
    var la = class extends ca {
        constructor(e) {
            super(), this.smoothtime = 0, this.chunkCache = []
        }
        tick(e) {
            for (e = Math.min(e, 1), this.accum += e; this.accum > this.timestep;) this.accum -= this.timestep, this.setTimeFromTickId(this.tickId + 1);
            this.setSmoothTime(e), this.manageChunks(e)
        }
        load(e, o) {
            super.load(e, o)
        }
        parse(e) {
            super.parse(e), Vg(this, !e)
        }
        setSmoothTime(e) {
            let o = this.smoothtime - this.time;
            Math.abs(o) > 1 ? this.smoothtime = this.time : o > .05 ? this.smoothtime += e * .5 : o < -.05 ? this.smoothtime += e * 2 : this.smoothtime += e
        }
        getInteriorLight(e, o) {
            let r = this.triangleGrid.queryAABB(o);
            for (let n = 0; n < r.length; ++n)
                if (r[n].length > 4) {
                    Ea(e, r[n][4]);
                    return
                } Cr(e, 0, 0, 0, 0)
        }
        createChunks() {}
        createCachedChunk(e, o, r) {
            if (this.chunkCache.length) {
                let n = this.chunkCache.pop();
                return el(n, e, o, r, this.chunkAmount), n
            } else {
                let n = _g();
                return el(n, e, o, r, this.chunkAmount), n
            }
        }
        returnCachedChunk(e) {
            this.chunkCache.push(e)
        }
        manageChunks(e) {
            Ap(e, this.chunkAmount);
            let o = ri(),
                r = 0,
                n = 0;
            for (; r < ar.length && !(n > 10);) {
                let s = ar[r],
                    a = ar[r + 1],
                    c = ar[r + 2];
                if (qc(o, [a * 64 - 64, 0, c * 64 - 64], 64 * 3, 1e4, 64 * 3), $s(o, Me.frustum, Me.frustumConstants))
                    if (this.chunksMap.has(s)) this.chunksMap.get(s).state < 3 && n++;
                    else {
                        let l = this.createCachedChunk(s, a, c);
                        this.addChunk(l), l.state = 1, n++
                    } r += 3
            }
            let i = [];
            for (let s = 0; s < this.chunksArray.length; ++s) {
                let a = this.chunksArray[s];
                hc && (a.x + 5 < ss || a.z + 5 < cs || a.x - 5 > as || a.z - 5 > ls ? i.push(a) : tl(a)), Mg(a, this)
            }
            for (let s = i.length - 1; s >= 0; s--) {
                let a = i[s];
                this.returnCachedChunk(a), this.removeChunk(a), kg(a)
            }
        }
    };
    var Rg = [{
        pos: [3409.58, 539.37, 3440.82],
        rot: [-12371.65, 36581.29, 0]
    }, {
        pos: [3420.63, 542.02, 3453.37],
        rot: [-12371.68, 36581.34, 0]
    }, {
        pos: [3433.17, 543.24, 3460.29],
        rot: [-12371.78, 36581.13, 0]
    }, {
        pos: [3435.17, 541.49, 3471.82],
        rot: [-12371.79, 36581.02, 0]
    }, {
        pos: [3437.78, 544.85, 3494.54],
        rot: [-12371.66, 36580.69, 0]
    }, {
        pos: [3427.13, 543.9, 3538.96],
        rot: [-12371.53, 36580.36, 0]
    }, {
        pos: [3404.25, 538.48, 3581.52],
        rot: [-12371.51, 36580.55, 0]
    }, {
        pos: [3378.02, 533.87, 3642.36],
        rot: [-12371.54, 36580.87, 0]
    }, {
        pos: [3381.97, 535.02, 3730.51],
        rot: [-12371.54, 36580.74, 0]
    }, {
        pos: [3391.1, 557.83, 3793.43],
        rot: [-12371.78, 36580.77, 0]
    }, {
        pos: [3399.21, 610.38, 3861.78],
        rot: [-12371.87, 36580.79, 0]
    }, {
        pos: [3402.1, 656.86, 3939.39],
        rot: [-12372.1, 36580.71, 0]
    }];
    var Wy = performance,
        Ug = () => Wy.now();
    var rl = y({
        last: 0,
        dtLow: 0,
        dtHigh: 0,
        dtAvg: 0,
        dtLowTrack: 0,
        dtHighTrack: 1 / 0
    });
    window.onload = async () => {
        console.log("Hordes 0.51.8926 Live");
        let t = await fetch("data/game/game.bin?v=8926940");
        Ga(Gr.gamedata.decode(new Uint8Array(await t.arrayBuffer()))), applyFaivel(), Lg(), document.body.appendChild(Ao);
        let e = new la({});
        nm(e), e.load(...trackWorld()), e.setTimeFromTickId(startTick()), qd(gfe.menuTrackSpeed), jd(.03), Kt.push(...Rg), Me.fov = 65, Zo(Me), fs(400, 2), Ve.fxaa = !0, Ve.bloom = !0, yi.set(!1), jg()
    };
    var Bg = 0,
        jg = () => {
            let t = Ug(),
                e = (t - (Bg || 1e3 / 60)) / 1e3;
            Bg = t, Gy(e, t), requestAnimationFrame(jg)
        },
        Gy = (t, e) => {
            trackUpdate(t) || Bd(t), it(st, !0), Bi(Me, !0), im(e), ae.tick(t), zg(t, ae), rl.update(o => (o.dtAvg = (o.dtAvg * 10 + t) / 11, o.dtHighTrack = Math.min(o.dtAvg, o.dtHighTrack), o.dtLowTrack = Math.max(o.dtAvg, o.dtLowTrack), o.last + 1e3 < e && (o.last = e, o.dtLow = o.dtLowTrack, o.dtHigh = o.dtHighTrack, o.dtLowTrack = 0, o.dtHighTrack = 1 / 0), o))
        };
    typeof window < "u" && (window.__svelte || (window.__svelte = {
        v: new Set
    })).v.add(Ll);

    function qg(t, e, o) {
        let r = t.slice();
        return r[4] = e[o], r
    }

    function Ng(t, e, o) {
        let r = t.slice();
        return r[4] = e[o], r
    }

    function Og(t) {
        let e, o = t[4].name + "",
            r, n, i, s;
        return {
            c() {
                e = C("a"), r = B(o), F(e, "style", n = t[4].style), F(e, "class", i = "navlink " + (window.location.pathname === t[4].ref ? "bold textwhite" : "") + " svelte-dgj98e"), F(e, "href", s = t[4].ref)
            },
            m(a, c) {
                z(a, e, c), b(e, r)
            },
            p: X,
            d(a) {
                a && I(e)
            }
        }
    }

    function Wg(t) {
        let e, o = le(t[2]),
            r = [];
        for (let n = 0; n < o.length; n += 1) r[n] = Gg(qg(t, o, n));
        return {
            c() {
                for (let n = 0; n < r.length; n += 1) r[n].c();
                e = pe()
            },
            m(n, i) {
                for (let s = 0; s < r.length; s += 1) r[s] && r[s].m(n, i);
                z(n, e, i)
            },
            p(n, i) {
                if (i & 4) {
                    o = le(n[2]);
                    let s;
                    for (s = 0; s < o.length; s += 1) {
                        let a = qg(n, o, s);
                        r[s] ? r[s].p(a, i) : (r[s] = Gg(a), r[s].c(), r[s].m(e.parentNode, e))
                    }
                    for (; s < r.length; s += 1) r[s].d(1);
                    r.length = o.length
                }
            },
            d(n) {
                n && I(e), Ue(r, n)
            }
        }
    }

    function Gg(t) {
        let e, o = t[4].name + "",
            r, n, i, s;
        return {
            c() {
                e = C("a"), r = B(o), F(e, "style", n = t[4].style), F(e, "class", i = "menulink " + (window.location.pathname === t[4].ref ? "bold textwhite" : "") + " svelte-dgj98e"), F(e, "href", s = t[4].ref)
            },
            m(a, c) {
                z(a, e, c), b(e, r)
            },
            p: X,
            d(a) {
                a && I(e)
            }
        }
    }

    function Hy(t) {
        let e, o, r, n, i, s, a, c, l, f = le(t[2]),
            u = [];
        for (let m = 0; m < f.length; m += 1) u[m] = Og(Ng(t, f, m));
        let d = t[1] && Wg(t);
        return {
            c() {
                e = C("div"), o = C("div"), r = C("a"), r.innerHTML = '<img alt="Hordes.io" class="icon svelte-dgj98e" src="/data/ui/icon.svg?v=8926940"/>', n = C("nav");
                for (let m = 0; m < u.length; m += 1) u[m].c();
                i = C("img"), d && d.c(), F(r, "href", "/"), F(n, "class", "nav svelte-dgj98e"), F(i, "class", "icon menubtn svelte-dgj98e"), $e(i.src, s = "/data/ui/icons/menu.svg?v=8926940") || F(i, "src", s), F(o, "class", "navcontainer svelte-dgj98e"), F(e, "class", "row svelte-dgj98e"), F(e, "style", a = t[0] ? "text-align: center;" : "")
            },
            m(m, h) {
                z(m, e, h), b(e, o), b(o, r), b(o, n);
                for (let g = 0; g < u.length; g += 1) u[g] && u[g].m(n, null);
                b(o, i), d && d.m(e, null), c || (l = De(i, "click", t[3]), c = !0)
            },
            p(m, [h]) {
                if (h & 4) {
                    f = le(m[2]);
                    let g;
                    for (g = 0; g < f.length; g += 1) {
                        let M = Ng(m, f, g);
                        u[g] ? u[g].p(M, h) : (u[g] = Og(M), u[g].c(), u[g].m(n, null))
                    }
                    for (; g < u.length; g += 1) u[g].d(1);
                    u.length = f.length
                }
                m[1] ? d ? d.p(m, h) : (d = Wg(m), d.c(), d.m(e, null)) : d && (d.d(1), d = null), h & 1 && a !== (a = m[0] ? "text-align: center;" : "") && F(e, "style", a)
            },
            i: X,
            o: X,
            d(m) {
                m && I(e), Ue(u, m), d && d.d(), c = !1, l()
            }
        }
    }

    function Yy(t, e, o) {
        let {
            center: r = !1
        } = e, n = [{
            name: "Leaderboards",
            ref: "/leaderboards"
        }, {
            name: "Clans",
            ref: "/clans"
        }, {
            name: "PVP",
            ref: "/pvp"
        }, {
            name: "Items",
            ref: "/info/items"
        }, {
            name: "Skills",
            ref: "/info/skills"
        }, {
            name: "Store",
            ref: "/store",
            style: "margin-left:auto;"
        }, {
            name: "Account",
            ref: "/account"
        }], i = !1, s = a => o(1, i = !i);
        return t.$$set = a => {
            "center" in a && o(0, r = a.center)
        }, [r, i, n, s]
    }
    var nl = class extends nt {
            constructor(e) {
                super(), ut(this, e, Yy, Hy, xt, {
                    center: 0
                })
            }
        },
        $g = nl;

    function Xy(t) {
        let e;
        return {
            c() {
                e = C("div"), e.innerHTML = '<div class="bounce1 svelte-twvoek"></div><div class="bounce2 svelte-twvoek"></div><div class="bounce3 svelte-twvoek"></div>', F(e, "class", "spinner svelte-twvoek")
            },
            m(o, r) {
                z(o, e, r)
            },
            p: X,
            i: X,
            o: X,
            d(o) {
                o && I(e)
            }
        }
    }
    var il = class extends nt {
            constructor(e) {
                super(), ut(this, e, null, Xy, pi, {})
            }
        },
        xr = il;

    function Qy(t) {
        let e;
        return {
            c() {
                e = C("div")
            },
            m(o, r) {
                z(o, e, r), t[2](e)
            },
            p: X,
            i: X,
            o: X,
            d(o) {
                o && I(e), t[2](null)
            }
        }
    }

    function Zy(t, e, o) {
        let r = Qt(),
            n, {
                width: i = 300
            } = e;
        window.google ? (window.google.accounts.id.initialize({
            client_id: "1073044439987-o7ehn7j7ip8scfcdi41ve1jqtv9mfgjb.apps.googleusercontent.com",
            callback: async (c, l, f) => {
                await rr("/auth/google", c) === "ok" && r("signin")
            }
        }), wa(() => {
            window.google.accounts.id.renderButton(n, {
                theme: "filled_blue",
                size: "large",
                width: i,
                logo_aligment: "left"
            })
        })) : alert("Google Sign-In is not loading properly.");

        function s(a) {
            Ho[a ? "unshift" : "push"](() => {
                n = a, o(0, n)
            })
        }
        return t.$$set = a => {
            "width" in a && o(1, i = a.width)
        }, [n, i, s]
    }
    var sl = class extends nt {
            constructor(e) {
                super(), ut(this, e, Zy, Qy, xt, {
                    width: 1
                })
            }
        },
        Hg = sl;
    var ko = [{
        sub: !1,
        stash: 20,
        inventory: 15,
        auction: 10,
        auctionHours: 12
    }, {
        sub: !0,
        stash: 150,
        inventory: 35,
        auction: 100,
        auctionHours: 48
    }];

    function Ky(t) {
        let e, o, r, n, i, s, a, c, l = Z.ui.elixir.chatsupport + "",
            f, u, d, m, h, g = Z.ui.elixir.noads + "",
            M, x, w, k, U, D, V, fe, N, O = Z.ui.elixir.bagslots + "",
            ne, J, re, P, G, A, te, ce, ke, Re = Z.ui.elixir.stashstorage + "",
            Ce, Ae, at, Ze, zt, Oe, Y, Te, ot, et = Z.ui.elixir.merchantlimit + "",
            ct, ze, Ke, Vt, We, mo, E, ee, $, q = Z.ui.elixir.merchantduration + "",
            _;
        return {
            c() {
                e = C("div"), o = C("div"), o.innerHTML = '<img class="artwork svelte-cbx1m" src="/data/ui/elixir.svg?v=8926940"/><div class="sparkle svelte-cbx1m" style="font-size:35px; left:30%; top:30%; animation-delay: -1s;">+</div><div class="sparkle svelte-cbx1m" style="font-size:50px; left:40%; top:60%; animation-delay: -2s;">+</div><div class="sparkle svelte-cbx1m" style="font-size:80px; left:60%; top:20%; animation-delay: -3s;">+</div>', r = C("div"), n = C("h1"), n.innerHTML = 'Hordes <span class="textsub">Elixir</span>', i = C("div"), s = C("img"), c = Le(), f = B(l), u = C("div"), d = C("img"), h = Le(), M = B(g), x = C("div"), w = C("img"), U = Le(), D = C("span"), D.textContent = `${ko[0].inventory}`, V = Le(), fe = C("span"), fe.textContent = `${ko[1].inventory}`, N = Le(), ne = B(O), J = C("div"), re = C("img"), G = Le(), A = C("span"), A.textContent = `${ko[0].stash}`, te = Le(), ce = C("span"), ce.textContent = `${ko[1].stash}`, ke = Le(), Ce = B(Re), Ae = C("div"), at = C("img"), zt = Le(), Oe = C("span"), Oe.textContent = `${ko[0].auction}`, Y = Le(), Te = C("span"), Te.textContent = `${ko[1].auction}`, ot = Le(), ct = B(et), ze = C("div"), Ke = C("img"), We = Le(), mo = C("span"), mo.textContent = `${ko[0].auctionHours}h`, E = Le(), ee = C("span"), ee.textContent = `${ko[1].auctionHours}h`, $ = Le(), _ = B(q), F(o, "class", "artcontainer svelte-cbx1m"), F(n, "class", "textprimary"), F(s, "class", "svgicon"), $e(s.src, a = "/data/ui/icons/gem.svg?v=8926940") || F(s, "src", a), F(i, "class", "textwhite"), F(d, "class", "svgicon"), $e(d.src, m = "/data/ui/icons/check.svg?v=8926940") || F(d, "src", m), F(u, "class", "textwhite"), F(w, "class", "svgicon"), $e(w.src, k = "/data/ui/icons/check.svg?v=8926940") || F(w, "src", k), F(D, "class", "old svelte-cbx1m"), F(fe, "class", "textsub"), F(x, "class", "textwhite"), F(re, "class", "svgicon"), $e(re.src, P = "/data/ui/icons/check.svg?v=8926940") || F(re, "src", P), F(A, "class", "old svelte-cbx1m"), F(ce, "class", "textsub"), F(J, "class", "textwhite"), F(at, "class", "svgicon"), $e(at.src, Ze = "/data/ui/icons/check.svg?v=8926940") || F(at, "src", Ze), F(Oe, "class", "old svelte-cbx1m"), F(Te, "class", "textsub"), F(Ae, "class", "textwhite"), F(Ke, "class", "svgicon"), $e(Ke.src, Vt = "/data/ui/icons/check.svg?v=8926940") || F(Ke, "src", Vt), F(mo, "class", "old svelte-cbx1m"), F(ee, "class", "textsub"), F(ze, "class", "textwhite"), F(e, "class", "split svelte-cbx1m")
            },
            m(ie, Se) {
                z(ie, e, Se), b(e, o), b(e, r), b(r, n), b(r, i), b(i, s), b(i, c), b(i, f), b(r, u), b(u, d), b(u, h), b(u, M), b(r, x), b(x, w), b(x, U), b(x, D), b(x, V), b(x, fe), b(x, N), b(x, ne), b(r, J), b(J, re), b(J, G), b(J, A), b(J, te), b(J, ce), b(J, ke), b(J, Ce), b(r, Ae), b(Ae, at), b(Ae, zt), b(Ae, Oe), b(Ae, Y), b(Ae, Te), b(Ae, ot), b(Ae, ct), b(r, ze), b(ze, Ke), b(ze, We), b(ze, mo), b(ze, E), b(ze, ee), b(ze, $), b(ze, _)
            },
            p: X,
            i: X,
            o: X,
            d(ie) {
                ie && I(e)
            }
        }
    }
    var al = class extends nt {
            constructor(e) {
                super(), ut(this, e, null, Ky, xt, {})
            }
        },
        Yg = al;
    var Xg = async t => {
        let o = await (await fetch("api/user/join", {
            method: "POST",
            body: JSON.stringify({
                id: t
            })
        })).json();
        if (o.world) wn.set(o.world), _n.set(t);
        else throw wn.set(void 0), _n.set(void 0), o.result || "Unknown Error";
        return !0
    };

    function Qg(t, e, o) {
        let r = t.slice();
        return r[23] = e[o], r
    }

    function Zg(t, e, o) {
        let r = t.slice();
        return r[26] = e[o], r[28] = o, r
    }

    function Jy(t) {
        let e, o;
        return e = new xr({}), {
            c() {
                yt(e.$$.fragment)
            },
            m(r, n) {
                bt(e, r, n), o = !0
            },
            p: X,
            i(r) {
                o || (he(e.$$.fragment, r), o = !0)
            },
            o(r) {
                ye(e.$$.fragment, r), o = !1
            },
            d(r) {
                wt(e, r)
            }
        }
    }

    function e4(t) {
        let e, o, r, n = {
            ctx: t,
            current: null,
            token: null,
            hasCatch: !0,
            pending: n4,
            then: r4,
            catch: o4,
            value: 22,
            error: 29,
            blocks: [, , , ]
        };
        return Mr(o = t[7], n), {
            c() {
                e = pe(), n.block.c()
            },
            m(i, s) {
                z(i, e, s), n.block.m(i, n.anchor = s), n.mount = () => e.parentNode, n.anchor = e, r = !0
            },
            p(i, s) {
                t = i, n.ctx = t, s & 128 && o !== (o = t[7]) && Mr(o, n) || wi(n, t, s)
            },
            i(i) {
                r || (he(n.block), r = !0)
            },
            o(i) {
                for (let s = 0; s < 3; s += 1) {
                    let a = n.blocks[s];
                    ye(a)
                }
                r = !1
            },
            d(i) {
                i && I(e), n.block.d(i), n.token = null, n = null
            }
        }
    }

    function t4(t) {
        let e, o, r, n, i = t[6] > 0 ? " in  " + t[6] : "",
            s, a, c, l, f, u;
        return e = new Yg({}), {
            c() {
                yt(e.$$.fragment), o = C("div"), r = C("div"), n = B("Continue "), s = B(i), c = C("div"), c.textContent = "Buy", F(r, "class", a = "btn textcenter bigbtn " + (t[6] > 0 ? "disabled textwhite" : "grey textprimary") + " svelte-2d3bbt"), F(c, "class", "btn textcenter bigbtn primary svelte-2d3bbt"), F(o, "class", "grid two"), He(o, "grid-gap", "22px"), He(o, "margin-top", "33px"), He(o, "margin-bottom", "13px")
            },
            m(d, m) {
                bt(e, d, m), z(d, o, m), b(o, r), b(r, n), b(r, s), b(o, c), l = !0, f || (u = [De(r, "click", t[14]), De(c, "click", t[15])], f = !0)
            },
            p(d, m) {
                (!l || m & 64) && i !== (i = d[6] > 0 ? " in  " + d[6] : "") && Q(s, i), (!l || m & 64 && a !== (a = "btn textcenter bigbtn " + (d[6] > 0 ? "disabled textwhite" : "grey textprimary") + " svelte-2d3bbt")) && F(r, "class", a)
            },
            i(d) {
                l || (he(e.$$.fragment, d), l = !0)
            },
            o(d) {
                ye(e.$$.fragment, d), l = !1
            },
            d(d) {
                d && I(o), wt(e, d), f = !1, ft(u)
            }
        }
    }

    function o4(t) {
        let e, o = t[29] + "",
            r, n, i, s;
        return {
            c() {
                e = C("p"), r = B(o), n = C("div"), n.textContent = `${Z.ui.ok}`, F(n, "class", "btn textcenter bigbtn playbtn primary svelte-2d3bbt")
            },
            m(a, c) {
                z(a, e, c), b(e, r), z(a, n, c), i || (s = De(n, "click", t[20]), i = !0)
            },
            p(a, c) {
                c & 128 && o !== (o = a[29] + "") && Q(r, o)
            },
            i: X,
            o: X,
            d(a) {
                a && (I(e), I(n)), i = !1, s()
            }
        }
    }

    function r4(t) {
        let e, o, r, n, i, s, a = Z.ui.charmenu.select.enterWorld + "",
            c, l, f, u, d = t[3] > -1 && Kg(t),
            m = le(t[0]),
            h = [];
        for (let x = 0; x < m.length; x += 1) h[x] = Jg(Zg(t, m, x));
        let g = le(t[8]),
            M = [];
        for (let x = 0; x < g.length; x += 1) M[x] = ev(Qg(t, g, x));
        return {
            c() {
                e = C("div"), o = C("div"), r = C("h2"), r.textContent = `${Z.ui.charmenu.select.title}`, d && d.c(), n = C("div");
                for (let x = 0; x < h.length; x += 1) h[x].c();
                i = pe();
                for (let x = 0; x < M.length; x += 1) M[x].c();
                s = C("div"), c = B(a), F(r, "class", "svelte-2d3bbt"), F(o, "class", "header svelte-2d3bbt"), F(n, "class", "list svelte-2d3bbt"), F(s, "class", l = "btn textcenter bigbtn playbtn " + (t[3] > -1 ? "primary" : "disabled") + " svelte-2d3bbt"), F(e, "class", "fadeIn")
            },
            m(x, w) {
                z(x, e, w), b(e, o), b(o, r), d && d.m(o, null), b(e, n);
                for (let k = 0; k < h.length; k += 1) h[k] && h[k].m(n, null);
                b(n, i);
                for (let k = 0; k < M.length; k += 1) M[k] && M[k].m(n, null);
                b(e, s), b(s, c), f || (u = De(s, "click", t[19]), f = !0)
            },
            p(x, w) {
                if (x[3] > -1 ? d ? d.p(x, w) : (d = Kg(x), d.c(), d.m(o, null)) : d && (d.d(1), d = null), w & 9) {
                    m = le(x[0]);
                    let k;
                    for (k = 0; k < m.length; k += 1) {
                        let U = Zg(x, m, k);
                        h[k] ? h[k].p(U, w) : (h[k] = Jg(U), h[k].c(), h[k].m(n, i))
                    }
                    for (; k < h.length; k += 1) h[k].d(1);
                    h.length = m.length
                }
                if (w & 768) {
                    g = le(x[8]);
                    let k;
                    for (k = 0; k < g.length; k += 1) {
                        let U = Qg(x, g, k);
                        M[k] ? M[k].p(U, w) : (M[k] = ev(U), M[k].c(), M[k].m(n, null))
                    }
                    for (; k < M.length; k += 1) M[k].d(1);
                    M.length = g.length
                }
                w & 8 && l !== (l = "btn textcenter bigbtn playbtn " + (x[3] > -1 ? "primary" : "disabled") + " svelte-2d3bbt") && F(s, "class", l)
            },
            i: X,
            o: X,
            d(x) {
                x && I(e), d && d.d(), Ue(h, x), Ue(M, x), f = !1, u()
            }
        }
    }

    function Kg(t) {
        let e, o, r;
        return {
            c() {
                e = C("div"), e.textContent = `\u{1F5D1}\uFE0F ${Z.ui.charmenu.delete.title}`, F(e, "class", "delbtn marg-top svelte-2d3bbt")
            },
            m(n, i) {
                z(n, e, i), o || (r = De(e, "click", t[16]), o = !0)
            },
            p: X,
            d(n) {
                n && I(e), o = !1, r()
            }
        }
    }

    function Jg(t) {
        let e, o, r = t[26].name + "",
            n, i, s, a, c, l, f, u = t[26].level + "",
            d, m, h = Z.classes[t[26].class].name + "",
            g, M, x, w = t[26].world + "",
            k, U, D, V;

        function fe() {
            return t[17](t[28])
        }
        return {
            c() {
                e = C("div"), o = C("p"), n = B(r), i = C("p"), s = C("img"), c = C("img"), f = B("Lv. "), d = B(u), m = Le(), g = B(h), M = Le(), x = C("span"), k = B(w), F(o, "class", "name textprimary svelte-2d3bbt"), F(s, "class", "texticon"), $e(s.src, a = Wa(t[26].faction)) || F(s, "src", a), F(c, "class", "texticon"), $e(c.src, l = Oa(t[26].class)) || F(c, "src", l), F(x, "class", "textgrey loctext capitalize"), F(i, "class", "textwhite svelte-2d3bbt"), F(e, "class", U = "charbtn btn " + (t[3] == t[28] ? "border primary selec" : "") + " svelte-2d3bbt")
            },
            m(N, O) {
                z(N, e, O), b(e, o), b(o, n), b(e, i), b(i, s), b(i, c), b(i, f), b(i, d), b(i, m), b(i, g), b(i, M), b(i, x), b(x, k), D || (V = De(e, "click", fe), D = !0)
            },
            p(N, O) {
                t = N, O & 1 && r !== (r = t[26].name + "") && Q(n, r), O & 1 && !$e(s.src, a = Wa(t[26].faction)) && F(s, "src", a), O & 1 && !$e(c.src, l = Oa(t[26].class)) && F(c, "src", l), O & 1 && u !== (u = t[26].level + "") && Q(d, u), O & 1 && h !== (h = Z.classes[t[26].class].name + "") && Q(g, h), O & 1 && w !== (w = t[26].world + "") && Q(k, w), O & 8 && U !== (U = "charbtn btn " + (t[3] == t[28] ? "border primary selec" : "") + " svelte-2d3bbt") && F(e, "class", U)
            },
            d(N) {
                N && I(e), D = !1, V()
            }
        }
    }

    function ev(t) {
        let e, o, r, n, i;
        return {
            c() {
                e = C("div"), o = C("p"), o.textContent = `${Z.ui.charmenu.select.emptySlot}`, r = C("p"), r.textContent = `${Z.ui.charmenu.select.create}`, F(o, "class", "name textgrey svelte-2d3bbt"), F(r, "class", "info textgrey svelte-2d3bbt"), F(e, "class", "charbtn btn svelte-2d3bbt")
            },
            m(s, a) {
                z(s, e, a), b(e, o), b(e, r), n || (i = De(e, "click", t[18]), n = !0)
            },
            p: X,
            d(s) {
                s && I(e), n = !1, i()
            }
        }
    }

    function n4(t) {
        let e, o;
        return e = new xr({}), {
            c() {
                yt(e.$$.fragment)
            },
            m(r, n) {
                bt(e, r, n), o = !0
            },
            p: X,
            i(r) {
                o || (he(e.$$.fragment, r), o = !0)
            },
            o(r) {
                ye(e.$$.fragment, r), o = !1
            },
            d(r) {
                wt(e, r)
            }
        }
    }

    function i4(t) {
        let e, o, r, n, i = [t4, e4, Jy],
            s = [];

        function a(c, l) {
            return c[5] ? 0 : c[4] ? 2 : 1
        }
        return o = a(t, -1), r = s[o] = i[o](t), {
            c() {
                e = C("div"), r.c(), He(e, "min-height", t[2] + "px"), He(e, "width", t[1] + "px")
            },
            m(c, l) {
                z(c, e, l), s[o].m(e, null), n = !0
            },
            p(c, [l]) {
                let f = o;
                o = a(c, l), o === f ? s[o].p(c, l) : (Ft(), ye(s[f], 1, 1, () => {
                    s[f] = null
                }), Ct(), r = s[o], r ? r.p(c, l) : (r = s[o] = i[o](c), r.c()), he(r, 1), r.m(e, null)), (!n || l & 4) && He(e, "min-height", c[2] + "px"), (!n || l & 2) && He(e, "width", c[1] + "px")
            },
            i(c) {
                n || (he(r), n = !0)
            },
            o(c) {
                ye(r), n = !1
            },
            d(c) {
                c && I(e), s[o].d()
            }
        }
    }

    function s4(t, e, o) {
        let r, n = Qt(),
            {
                elixir: i = !1
            } = e,
            s = !1,
            a = 300,
            c = 417,
            l = [],
            f = -1,
            u = async () => {
                let O = await fetch("/api/user/players"),
                    ne = await O.json();
                O.ok && (o(0, l = ne), s = l.some(J => J.level > 40))
            }, d = !1, m = async () => {
                if (!(d || f < 0)) {
                    o(4, d = !0);
                    try {
                        await Xg(l[f].id), window.location.href = "/play", o(4, d = !1)
                    } catch (O) {
                        throw o(1, a = 300), o(2, c = 417), o(4, d = !1), O
                    }
                }
            }, h = !1, g = 3, M = () => {
                if (i || !s) o(7, x = m());
                else {
                    o(5, h = !0), o(1, a = 405), o(2, c = 0);
                    let O = setInterval(() => {
                        o(6, g--, g), g < 1 && clearInterval(O)
                    }, 1e3)
                }
            }, x = u(), w = () => {
                o(7, x = m()), o(5, h = !1)
            }, k = () => {
                window.location.href = "/account"
            }, U = O => n("message", {
                state: "delete",
                ...l[f]
            }), D = O => o(3, f = O), V = O => n("message", {
                state: "create"
            }), fe = () => {
                M()
            }, N = () => {
                o(7, x = u())
            };
        return t.$$set = O => {
            "elixir" in O && o(13, i = O.elixir)
        }, t.$$.update = () => {
            t.$$.dirty & 1 && o(8, r = new Array(Math.max(0, 5 - l.length)))
        }, [l, a, c, f, d, h, g, x, r, n, u, m, M, i, w, k, U, D, V, fe, N]
    }
    var cl = class extends nt {
            constructor(e) {
                super(), ut(this, e, s4, i4, xt, {
                    elixir: 13
                })
            }
        },
        tv = cl;

    function ov(t) {
        let e, o;
        return {
            c() {
                e = C("p"), o = B(t[1]), F(e, "class", "textred")
            },
            m(r, n) {
                z(r, e, n), b(e, o)
            },
            p(r, n) {
                n & 2 && Q(o, r[1])
            },
            d(r) {
                r && I(e)
            }
        }
    }

    function a4(t) {
        let e, o = Z.ui.charmenu.delete.title + "",
            r, n, i = t[0].name + "",
            s, a, c, l, f, u = Z.ui.charmenu.delete.title + "",
            d, m, h, g, M, x = t[1] !== void 0 && ov(t);
        return {
            c() {
                e = C("h2"), r = B(o), n = Le(), s = B(i), a = C("p"), a.textContent = `${Z.ui.charmenu.delete.info}`, x && x.c(), c = C("input"), f = C("div"), d = B(u), h = C("div"), h.textContent = `${Z.ui.back}`, F(e, "class", "textred"), F(c, "type", "text"), F(c, "placeholder", l = Z.ui.charmenu.delete.placeholder), F(f, "class", m = "btn delbtn " + (t[2] == t[0].name ? "red textwhite" : "disabled") + " svelte-m8q1kq"), F(h, "class", "btn delbtn grey textwhite svelte-m8q1kq")
            },
            m(w, k) {
                z(w, e, k), b(e, r), b(e, n), b(e, s), z(w, a, k), x && x.m(w, k), z(w, c, k), wr(c, t[2]), z(w, f, k), b(f, d), z(w, h, k), g || (M = [De(c, "input", t[5]), De(f, "click", t[4]), De(h, "click", t[6])], g = !0)
            },
            p(w, [k]) {
                k & 1 && i !== (i = w[0].name + "") && Q(s, i), w[1] !== void 0 ? x ? x.p(w, k) : (x = ov(w), x.c(), x.m(c.parentNode, c)) : x && (x.d(1), x = null), k & 4 && c.value !== w[2] && wr(c, w[2]), k & 5 && m !== (m = "btn delbtn " + (w[2] == w[0].name ? "red textwhite" : "disabled") + " svelte-m8q1kq") && F(f, "class", m)
            },
            i: X,
            o: X,
            d(w) {
                w && (I(e), I(a), I(c), I(f), I(h)), x && x.d(w), g = !1, ft(M)
            }
        }
    }

    function c4(t, e, o) {
        let r = Qt(),
            {
                detail: n
            } = e,
            i, s = "",
            a = async () => {
                if (s !== n.name) return;
                let f = await rr("/api/player/delete", {
                    id: n.id
                });
                f.result == "ok" ? r("message", {
                    state: "charlist"
                }) : o(1, i = f.reason || "Unknown error")
            };

        function c() {
            s = this.value, o(2, s)
        }
        let l = () => r("message", {
            state: "charlist"
        });
        return t.$$set = f => {
            "detail" in f && o(0, n = f.detail)
        }, [n, i, s, r, a, c, l]
    }
    var ll = class extends nt {
            constructor(e) {
                super(), ut(this, e, c4, a4, xt, {
                    detail: 0
                })
            }
        },
        rv = ll;
    var fa = new Map,
        l4 = !1;
    var nv = (t, e, o) => {
        l4 && e && t !== e.step && (e.cdimg !== void 0 && (fa.get(o)[e.step].push(e.removeChild(e.cdimg)), e.cdimg = void 0), (e.step = t) > 0 && (fa.get(o)[e.step].length === 1 ? e.cdimg = fa.get(o)[e.step][0].cloneNode() : e.cdimg = fa.get(o)[e.step].pop(), e.appendChild(e.cdimg)))
    };

    function iv(t) {
        let e, o;
        return {
            c() {
                e = C("span"), o = B(t[1]), F(e, "class", "slottext key svelte-zp79uy")
            },
            m(r, n) {
                z(r, e, n), b(e, o)
            },
            p(r, n) {
                n[0] & 2 && Q(o, r[1])
            },
            d(r) {
                r && I(e)
            }
        }
    }

    function sv(t) {
        let e, o;
        return {
            c() {
                e = C("span"), o = B(t[2]), F(e, "class", "slottext stacks svelte-zp79uy")
            },
            m(r, n) {
                z(r, e, n), b(e, o)
            },
            p(r, n) {
                n[0] & 4 && Q(o, r[2])
            },
            d(r) {
                r && I(e)
            }
        }
    }

    function av(t) {
        let e, o = (t[4] > 99 ? Math.round(t[4] / 60) + "'" : t[4] <= 3 ? t[4].toFixed(1) : Math.ceil(t[4])) + "",
            r;
        return {
            c() {
                e = C("div"), r = B(o), F(e, "class", "time absCentered slottext svelte-zp79uy")
            },
            m(n, i) {
                z(n, e, i), b(e, r)
            },
            p(n, i) {
                i[0] & 16 && o !== (o = (n[4] > 99 ? Math.round(n[4] / 60) + "'" : n[4] <= 3 ? n[4].toFixed(1) : Math.ceil(n[4])) + "") && Q(r, o)
            },
            d(n) {
                n && I(e)
            }
        }
    }

    function cv(t) {
        let e;
        return {
            c() {
                e = C("div"), F(e, "class", "active-indicator")
            },
            m(o, r) {
                z(o, e, r)
            },
            d(o) {
                o && I(e)
            }
        }
    }

    function lv(t) {
        let e, o, r, n = t[31].default,
            i = xl(n, t, t[30], null);
        return {
            c() {
                e = C("div"), i && i.c(), F(e, "class", o = "border " + t[5] + " slotdescription svelte-zp79uy"), F(e, "style", t[9])
            },
            m(s, a) {
                z(s, e, a), i && i.m(e, null), t[33](e), r = !0
            },
            p(s, a) {
                i && i.p && (!r || a[0] & 1073741824) && _l(i, n, s, s[30], r ? wl(n, s[30], a, null) : yl(s[30]), null), (!r || a[0] & 32 && o !== (o = "border " + s[5] + " slotdescription svelte-zp79uy")) && F(e, "class", o), (!r || a[0] & 512) && F(e, "style", s[9])
            },
            i(s) {
                r || (he(i, s), r = !0)
            },
            o(s) {
                ye(i, s), r = !1
            },
            d(s) {
                s && I(e), i && i.d(s), t[33](null)
            }
        }
    }

    function f4(t) {
        let e, o, r, n, i, s, a, c, l, f, u, d, m = t[1] !== void 0 && iv(t),
            h = t[2] !== void 0 && sv(t),
            g = Ve.cdTextSkills && t[4] !== void 0 && av(t),
            M = t[10] && cv(t),
            x = t[8] && t[11] && !t[15] && lv(t);
        return {
            c() {
                e = C("div"), m && m.c(), o = pe(), h && h.c(), r = pe(), g && g.c(), n = C("div"), M && M.c(), s = C("img"), x && x.c(), F(n, "class", i = "overlay " + t[16] + " " + (!t[14] || t[3] > 0 && t[3] < 10 ? "" : "offCd") + " svelte-zp79uy"), F(s, "class", a = "icon " + t[6] + " svelte-zp79uy"), $e(s.src, c = t[17]) || F(s, "src", c), F(e, "id", t[7]), F(e, "class", l = "border " + t[5] + " " + (t[15] && t[15].data == t[0] ? "grey" : "") + " slot " + (t[11] ? "hover" : "") + " " + (t[0] !== void 0 || t[15] ? "filled" : "") + " svelte-zp79uy")
            },
            m(w, k) {
                z(w, e, k), m && m.m(e, null), b(e, o), h && h.m(e, null), b(e, r), g && g.m(e, null), b(e, n), t[32](n), M && M.m(e, null), b(e, s), x && x.m(e, null), f = !0, u || (d = [De(e, "pointerenter", t[20]), De(e, "pointerleave", t[21]), De(e, "pointerdown", t[18]), De(e, "pointerup", t[19])], u = !0)
            },
            p(w, k) {
                w[1] !== void 0 ? m ? m.p(w, k) : (m = iv(w), m.c(), m.m(e, o)) : m && (m.d(1), m = null), w[2] !== void 0 ? h ? h.p(w, k) : (h = sv(w), h.c(), h.m(e, r)) : h && (h.d(1), h = null), Ve.cdTextSkills && w[4] !== void 0 ? g ? g.p(w, k) : (g = av(w), g.c(), g.m(e, n)) : g && (g.d(1), g = null), (!f || k[0] & 81928 && i !== (i = "overlay " + w[16] + " " + (!w[14] || w[3] > 0 && w[3] < 10 ? "" : "offCd") + " svelte-zp79uy")) && F(n, "class", i), w[10] ? M || (M = cv(w), M.c(), M.m(e, s)) : M && (M.d(1), M = null), (!f || k[0] & 64 && a !== (a = "icon " + w[6] + " svelte-zp79uy")) && F(s, "class", a), (!f || k[0] & 131072 && !$e(s.src, c = w[17])) && F(s, "src", c), w[8] && w[11] && !w[15] ? x ? (x.p(w, k), k[0] & 35072 && he(x, 1)) : (x = lv(w), x.c(), he(x, 1), x.m(e, null)) : x && (Ft(), ye(x, 1, 1, () => {
                    x = null
                }), Ct()), (!f || k[0] & 128) && F(e, "id", w[7]), (!f || k[0] & 34849 && l !== (l = "border " + w[5] + " " + (w[15] && w[15].data == w[0] ? "grey" : "") + " slot " + (w[11] ? "hover" : "") + " " + (w[0] !== void 0 || w[15] ? "filled" : "") + " svelte-zp79uy")) && F(e, "class", l)
            },
            i(w) {
                f || (he(x), f = !0)
            },
            o(w) {
                ye(x), f = !1
            },
            d(w) {
                w && I(e), m && m.d(), h && h.d(), g && g.d(), t[32](null), M && M.d(), x && x.d(), u = !1, ft(d)
            }
        }
    }

    function u4(t, e, o) {
        let r, n, i, s;
        gi(t, Mi, Y => o(15, s = Y));
        let {
            $$slots: a = {},
            $$scope: c
        } = e, {
            data: l = void 0
        } = e, {
            key: f
        } = e, {
            stacks: u
        } = e, {
            cd: d
        } = e, {
            remaining: m
        } = e, {
            border: h = "grey"
        } = e, {
            img: g
        } = e, {
            meta: M
        } = e, {
            css: x = ""
        } = e, {
            id: w = ""
        } = e, {
            describe: k = !0
        } = e, {
            queued: U = !1
        } = e, {
            pickable: D = !0
        } = e, {
            descRoot: V
        } = e, {
            descPos: fe = "bottom: 100%; right: 100%;"
        } = e, {
            auto: N = !1
        } = e, {
            status: O = 0
        } = e, {
            clickToUse: ne = !1
        } = e, {
            shift: J = !1
        } = e, re = !1, P = !1, G = (Y, Te) => Y ? "queued" : Te == 5 ? "oom" : Te == 6 ? "range" : Te == 11 || Te == 9 ? "combat" : "", A, te = Y => {
            Y.altKey || (ne && !J ? at("use", {
                e: Y,
                ...M
            }) : (P = !0, o(11, re = !1), at("click", M)))
        }, ce = Y => {
            Y.button == 2 ? J ? at("use", {
                e: Y,
                ...M
            }) : at("context", {
                e: Y,
                ...M
            }) : s ? (at("move", {
                from: s.meta,
                to: M
            }), s.meta && s.meta.store && s.meta.store.set(), xa(Mi, s = void 0, s)) : ne ? J && Ae() : Y.altKey ? M.item && M.item.dbid && Tl.update(Te => Te + `>${M.item.dbid}`) : Ae(), P = !1
        }, ke = Y => {
            o(11, re = !0)
        }, Re = () => {
            at("discard")
        }, Ce = Y => {
            o(11, re = !1), l && P && (P = !1, Ae())
        }, Ae = () => {
            !l || D === !1 || l.moving || xa(Mi, s = {
                data: l,
                img: g,
                meta: M,
                border: h,
                css: x,
                discard: Re
            }, s)
        }, at = Qt(), Ze;

        function zt(Y) {
            Ho[Y ? "unshift" : "push"](() => {
                Ze = Y, o(13, Ze)
            })
        }

        function Oe(Y) {
            Ho[Y ? "unshift" : "push"](() => {
                A = Y, o(12, A)
            })
        }
        return t.$$set = Y => {
            "data" in Y && o(0, l = Y.data), "key" in Y && o(1, f = Y.key), "stacks" in Y && o(2, u = Y.stacks), "cd" in Y && o(3, d = Y.cd), "remaining" in Y && o(4, m = Y.remaining), "border" in Y && o(5, h = Y.border), "img" in Y && o(22, g = Y.img), "meta" in Y && o(23, M = Y.meta), "css" in Y && o(6, x = Y.css), "id" in Y && o(7, w = Y.id), "describe" in Y && o(8, k = Y.describe), "queued" in Y && o(24, U = Y.queued), "pickable" in Y && o(25, D = Y.pickable), "descRoot" in Y && o(26, V = Y.descRoot), "descPos" in Y && o(9, fe = Y.descPos), "auto" in Y && o(10, N = Y.auto), "status" in Y && o(27, O = Y.status), "clickToUse" in Y && o(28, ne = Y.clickToUse), "shift" in Y && o(29, J = Y.shift), "$$scope" in Y && o(30, c = Y.$$scope)
        }, t.$$.update = () => {
            t.$$.dirty[0] & 16392 && o(14, r = r || d > 0), t.$$.dirty[0] & 138446856 && o(17, n = g ? s && re || d > 0 || O == -1 ? g.replace(".", "_grey.").replace(/_q[0-9]/g, "") : g : `/data/ui/slotbg/bg.${Un}?v=8926940`), t.$$.dirty[0] & 150995968 && o(16, i = G(N || U, O)), t.$$.dirty[0] & 67112960 && A && V && V.appendChild(A), t.$$.dirty[0] & 8200 && nv(Math.floor(d || 0), Ze, 40)
        }, [l, f, u, d, m, h, x, w, k, fe, N, re, A, Ze, r, s, i, n, te, ce, ke, Ce, g, M, U, D, V, O, ne, J, c, a, zt, Oe]
    }
    var fl = class extends nt {
            constructor(e) {
                super(), ut(this, e, u4, f4, pi, {
                    data: 0,
                    key: 1,
                    stacks: 2,
                    cd: 3,
                    remaining: 4,
                    border: 5,
                    img: 22,
                    meta: 23,
                    css: 6,
                    id: 7,
                    describe: 8,
                    queued: 24,
                    pickable: 25,
                    descRoot: 26,
                    descPos: 9,
                    auto: 10,
                    status: 27,
                    clickToUse: 28,
                    shift: 29
                }, null, [-1, -1])
            }
        },
        fv = fl;
    var uv = (t, e) => typeof t == "function" ? t(e) : t;
    var ul = Object.keys({
            onBlock: 0,
            statsStatic: 0,
            statsConvert: 0,
            statsOverride: 0,
            onInterval: 0,
            multiplyIncomingHeal: 0,
            multiplyIncomingDamage: 0,
            addIncomingHeal: 0,
            addIncomingDamage: 0,
            addIncomingCrit: 0,
            afterDamageEnemy: 0,
            afterHealAlly: 0,
            beforeDamageEnemy: 0,
            beforeIncomingDamage: 0,
            afterIncomingDamage: 0,
            movementOverride: 0,
            incapacitated: 0,
            breakOnMove: 0,
            breakOnCast: 0,
            instantCast: 0,
            onCast: 0,
            onEnd: 0,
            immuneAll: 0,
            immuneCC: 0,
            breakAfterPercentDamage: 0
        }),
        S = class {
            constructor(e) {
                this.id = e.id, this.intervalHaste = e.intervalHaste !== !1, this.intervalDuration = e.intervalDuration, this.intervalOnApply = e.intervalOnApply || !1, this.maxStacks = e.maxStacks, this.passive = e.passive || !1, this.broadcastPassive = e.broadcastPassive || !1, this.clearOnDeath = e.clearOnDeath !== !1, this.custom = e.custom, this.unique = e.unique || !1, this.dr = e.dr || 0, this.type = e.type || 0, this.tags = e.tags || new Set, this.immuneAll = e.immuneAll || !1, this.immuneCC = e.immuneCC || !1, ul.forEach(o => {
                    this[o] = e[o]
                }), this.customIcon = e.customIcon, this.icon = e.icon, this.fx = e.fx || {}
            }
            onSet(e, o, r) {
                this.tags.forEach(n => {
                    r.tags.get(n).add(e)
                }), ul.forEach(n => {
                    this[n] && (n !== "incapacitated" && n !== "movementOverride" || r.immuneCC.size <= 0) && r[n].add(e)
                })
            }
            onRemove(e, o, r) {
                this.tags.forEach(n => {
                    r.tags.get(n).delete(e)
                }), ul.forEach(n => {
                    this[n] && r[n].delete(e)
                })
            }
        };
    var dv = new S({
        id: 77,
        passive: !0,
        statsStatic: (t, e) => {
            e.addStat(12, Math.round(t.level * 40)), e.addStat(31, Math.round(t.level * 200))
        }
    });
    var mv = new S({
        id: 59,
        tags: new Set([11]),
        icon: "ui/skills/2",
        fx: {
            stick: 15
        },
        statsStatic: (t, e) => {
            e.addStat(13, 300 + t.level * 40)
        }
    });
    var pv = (t, e) => {
        let o = e / 65535;
        return [(t >>> 16) * o, (t & 65535) * o]
    };
    var dn = (t, e) => {
        if (t.static || !e.data) return !1;
        let o = pv(e.data[0] * 2, 6400),
            r = [o[0] - t.pos[0], o[1] - t.pos[2]];
        return I1(r) > t.size ? (t.setSteer(0, 1), t.setRot(mh(r)), t.setJump(0), !0) : (t.setSteer(0, 0), !1)
    };
    var hv = new S({
        id: 87,
        incapacitated: !0,
        icon: "ui/skills/33",
        fx: {
            stick: 74,
            endSound: 65
        },
        statsOverride: (t, e) => {
            e.stat.set(15, 250)
        },
        movementOverride: (t, e, o, r, n) => {
            dn(r, n) || r.buffs.removeBuff(n.id, r.id)
        }
    });
    var gv = new S({
        id: 76,
        icon: "ui/skills/20",
        fx: {
            stick: 53
        },
        unique: !0,
        statsStatic: (t, e) => {
            e.addStat(12, Math.round(t.level * 30)), e.addStat(9, Math.round(t.level * 22))
        }
    });
    var vv = new S({
        id: 73,
        passive: !0,
        icon: "ui/skills/17",
        custom: [
            [t => 93 + t * 32, "% as additional damage over 10 seconds"]
        ],
        afterDamageEnemy: {
            3: (t, e, o) => {}
        }
    });
    var xv = new S({
        id: 74,
        type: 1,
        tags: new Set([1]),
        maxStacks: 3,
        icon: "ui/skills/18",
        fx: {
            stick: 38,
            color: [.7, .1, .1, .5]
        },
        intervalDuration: 1.5,
        onInterval: (t, e, o) => ({
            id: 18,
            mode: 1,
            caster: t.caster,
            target: e.id,
            dmg: t.level * t.stacks,
            noDaze: !0,
            type: 1
        })
    });
    var bv = new S({
        id: 72,
        icon: "ui/skills/17",
        fx: {
            stick: 18,
            color: [.9, .3, .1, .7]
        },
        custom: [
            [t => t * 12, "% increased damage"]
        ]
    });
    var wv = new S({
        id: 121,
        incapacitated: !0,
        type: 1,
        tags: new Set([7]),
        dr: 3,
        breakAfterPercentDamage: .1,
        icon: "ui/skills/50",
        fx: {
            stick: 86,
            incapacitated: !0
        },
        statsOverride: (t, e) => {
            e.stat.get(15) > 100 && e.stat.set(15, 100)
        },
        movementOverride: (t, e, o, r, n) => {
            dn(r, n)
        },
        intervalDuration: 1
    });
    var _v = new S({
        id: 61,
        passive: !0,
        icon: "ui/skills/8",
        statsConvert: [
            [0, .3, 10],
            [0, .3, 11],
            [0, .3, 8]
        ]
    });
    var yv = new S({
        id: 89,
        type: 1,
        tags: new Set([3]),
        icon: "ui/skills/34",
        statsStatic: (t, e) => {
            e.maxStat(32, 10 + t.level * 10)
        }
    });
    var Mv = new S({
        id: 105,
        maxStacks: 3,
        icon: "ui/skills/temperBoostBuff",
        fx: {
            stick: 24,
            color: [.2, .2, .25, .95]
        },
        statsStatic: (t, e) => {
            e.addStat(15, 20)
        }
    });
    var kv = new S({
        id: 104,
        maxStacks: 3,
        tags: new Set([3, 4]),
        icon: "ui/skills/41",
        fx: {
            stick: 23,
            color: [.1, .1, .1, .92]
        },
        intervalDuration: .5,
        onInterval: (t, e, o) => !0
    });
    var Fv = new S({
        id: 75,
        icon: "ui/skills/19",
        fx: {
            stick: 54
        },
        unique: !0,
        statsStatic: (t, e) => {
            e.addStat(10, t.level * 3), e.addStat(11, t.level * 4), e.addStat(6, t.level * 50)
        }
    });
    var Cv = new S({
        id: 115,
        incapacitated: !0,
        tags: new Set([8]),
        immuneCC: !0,
        icon: "ui/skills/46",
        fx: {
            anim: 34
        },
        statsStatic: (t, e) => {
            e.maxStat(32, 40)
        },
        statsOverride: (t, e) => {
            e.stat.set(13, 0)
        },
        intervalDuration: .5,
        onInterval: (t, e, o) => !0
    });
    var Av = new S({
        id: 91,
        type: 1,
        tags: new Set([6]),
        incapacitated: !0,
        dr: 3,
        icon: "ui/skills/37",
        fx: {
            visual: 20,
            stick: 88,
            endSound: 69
        },
        statsStatic: (t, e) => {
            e.maxStat(32, 30 + t.level * 7), e.maxStat(33, 20 + t.level * 5)
        }
    });
    var Sv = new S({
        id: 84,
        icon: "ui/skills/28",
        fx: {
            stick: 65
        },
        unique: !0,
        statsStatic: (t, e) => {
            e.addStat(16, 100 + t.level * 60)
        }
    });
    var Pv = new S({
        id: 67,
        type: 1,
        tags: new Set([3, 1]),
        icon: "ui/skills/12",
        fx: {
            apply: 50,
            stick: 49,
            color: [.5, .4, .05, .5]
        },
        statsStatic: (t, e) => {
            e.maxStat(32, 20 + t.level * 3)
        },
        intervalDuration: 1.5,
        onInterval: (t, e, o) => ({
            id: 12,
            mode: 1,
            caster: t.caster,
            target: e.id,
            dmg: 1 + o.stats.getDamageRoll() * (.1 + t.level * .08),
            type: 1,
            noDaze: !0
        })
    });
    var Ev = new S({
        id: 68,
        icon: "ui/skills/13",
        fx: {
            stick: 52
        },
        intervalDuration: 1,
        custom: [
            [t => 30 + 40 * t, "MP recovered"]
        ],
        onInterval: (t, e, o) => {}
    });
    var Lv = new S({
        id: 107,
        maxStacks: 5,
        icon: "ui/skills/43",
        fx: {
            stick: 20
        }
    });
    var Dv = new S({
        id: 106,
        passive: !0
    });
    var Tv = new S({
        id: 60,
        maxStacks: 3,
        icon: "ui/skills/7",
        fx: {
            stick: 37
        },
        intervalDuration: 1,
        multiplyIncomingHeal: {
            6: t => 1 + t.stacks * .3,
            7: t => 1 + (t.stacks - 1) * .3
        },
        onInterval: (t, e, o) => ({
            id: 7,
            mode: 2,
            caster: t.caster,
            target: e.id,
            heal: 6 + o.stats.getDamageRoll() * (.028 + t.level * .024)
        })
    });
    var Iv = new S({
        id: 64,
        passive: !0,
        icon: "ui/skills/8",
        statsConvert: [
            [4, .4, 10],
            [4, .4, 11]
        ]
    });
    var zv = new S({
        id: 90,
        breakOnCast: !0,
        icon: "ui/skills/36",
        fx: {
            visual: 26,
            apply: 76,
            endSound: 69
        },
        statsStatic: (t, e) => {
            e.addStat(15, 8 + t.level * 12)
        }
    });
    var Vv = new S({
        id: 119,
        incapacitated: !0,
        type: 1,
        tags: new Set([7]),
        dr: 3,
        breakAfterPercentDamage: .1,
        icon: "ui/skills/49",
        fx: {
            incapacitated: !0,
            apply: 122,
            stick: 124
        },
        statsOverride: (t, e) => {
            e.stat.get(15) > 50 && e.stat.set(15, 50)
        },
        movementOverride: (t, e, o, r, n) => {
            dn(r, n)
        }
    });
    var Rv = new S({
        id: 120,
        passive: !0
    });
    var Uv = new S({
        id: 82,
        passive: !0,
        statsStatic: (t, e) => {
            e.addStat(14, Math.round(t.level * 30))
        }
    });
    var Bv = new S({
        id: 66,
        icon: "ui/skills/11",
        fx: {
            stick: 39,
            endSound: 69
        },
        custom: [
            [t => t * 9, "% increased damage"]
        ]
    });
    var jv = new S({
        id: 83,
        icon: "ui/skills/27",
        fx: {
            stick: 63
        },
        unique: !0,
        statsStatic: (t, e) => {
            e.addStat(15, 5 + t.level * 13)
        }
    });
    var qv = new S({
        id: 85,
        passive: !0,
        icon: "ui/skills/29",
        custom: [
            [t => 40 + t * 21, "% per stack as additional damage over 10 seconds"]
        ],
        afterDamageEnemy: {
            9: (t, e, o) => {}
        }
    });
    var Nv = new S({
        id: 86,
        type: 1,
        maxStacks: 3,
        tags: new Set([3, 1]),
        icon: "ui/skills/29",
        fx: {
            apply: 51,
            stick: 66,
            color: [.1, 1, .3, .3]
        },
        statsStatic: (t, e) => {
            e.maxStat(32, 30)
        },
        intervalDuration: 1.5,
        onInterval: (t, e, o) => ({
            id: 29,
            mode: 1,
            caster: t.caster,
            target: e.id,
            dmg: t.level * t.stacks,
            type: 1,
            noDaze: !0
        })
    });
    var Ov = new S({
        id: 95,
        maxStacks: 4,
        icon: "ui/skills/31",
        instantCast: new Set([31]),
        beforeDamageEnemy: {
            31: (t, e, o, r) => {}
        }
    });
    var Wv = new S({
        id: 65,
        passive: !0,
        icon: "ui/skills/10",
        custom: [
            [t => 2 + t * 1, " Jumps"],
            [t => 15 + t * 12.5, "% damage per Jump"]
        ],
        afterDamageEnemy: {
            9: (t, e, o) => {}
        }
    });
    var Gv = new S({
        id: 92,
        icon: "ui/skills/38",
        fx: {
            stick: 77
        },
        statsStatic: (t, e) => {
            e.addStat(15, 30)
        },
        instantCast: new Set([9]),
        onCast: {
            9: (t, e) => {}
        }
    });
    var $v = new S({
        id: 96,
        passive: !1,
        incapacitated: !0,
        icon: "ui/skills/38",
        statsOverride: (t, e) => {
            e.stat.set(15, 400)
        },
        movementOverride: (t, e, o, r, n) => {
            r.setSteer(n.data[0] - 1, n.data[1] - 1)
        }
    });
    var Hv = new S({
        id: 63,
        passive: !0,
        icon: "ui/skills/8",
        statsConvert: [
            [2, .4, 10],
            [2, .4, 11]
        ]
    });
    var Yv = new S({
        id: 81,
        icon: "ui/skills/25",
        fx: {
            stick: 64
        },
        unique: !0,
        statsStatic: (t, e) => {
            e.addStat(16, t.level * 30)
        }
    });
    var Xv = new S({
        id: 118,
        passive: !0
    });
    var Qv = new S({
        id: 114,
        incapacitated: !0,
        tags: new Set([8]),
        icon: "ui/skills/45",
        fx: {
            anim: 33
        },
        intervalHaste: !1,
        intervalDuration: .25,
        statsStatic: (t, e) => {
            e.maxStat(32, 15)
        },
        onInterval: (t, e, o) => !0
    });
    var Zv = new S({
        id: 78,
        icon: "ui/skills/22",
        fx: {
            stick: 60
        },
        unique: !0,
        statsStatic: (t, e) => {
            e.addStat(14, t.level * 30)
        }
    });
    var Kv = new S({
        id: 101,
        type: 1,
        tags: new Set([5]),
        incapacitated: !0,
        dr: 1,
        icon: "ui/skills/deepFrozen",
        fx: {
            stick: 57,
            color: [.1, .9, .8, .9],
            frozen: !0
        },
        statsStatic: (t, e) => {
            e.maxStat(32, 100)
        },
        multiplyIncomingDamage: {
            4: t => 1 + t.level * .1,
            15: t => 1 + t.level * .1,
            51: t => 1 + t.level * .1
        }
    });
    var Jv = new S({
        id: 80,
        icon: "ui/skills/24",
        fx: {
            stick: 91
        },
        unique: !0,
        statsStatic: (t, e) => {
            e.addStat(10, Math.floor(2 + t.level * 1.5)), e.addStat(11, Math.floor(3 + t.level * 3.5))
        }
    });
    var ex = new S({
        id: 108,
        icon: "ui/skills/extraBolt",
        fx: {
            stick: 22
        }
    });
    var tx = new S({
        id: 116,
        incapacitated: !0,
        tags: new Set([8, 10]),
        breakOnMove: !0,
        icon: "ui/skills/52",
        fx: {
            anim: 35
        },
        intervalDuration: 1,
        intervalOnApply: 1,
        onInterval: (t, e, o) => !0
    });
    var ox = new S({
        id: 69,
        type: 1,
        tags: new Set([4]),
        dr: 2,
        icon: "ui/skills/14",
        fx: {
            stick: 56,
            color: [.7, .7, 1, .4]
        },
        statsStatic: (t, e) => {
            e.maxStat(32, 100)
        },
        addIncomingCrit: {
            4: t => 10 + t.level * 30,
            15: t => 20 + t.level * 30
        },
        intervalDuration: 1.5,
        onInterval: (t, e, o) => ({
            id: 14,
            mode: 1,
            caster: t.caster,
            target: e.id,
            dmg: o.stats.getDamageRoll() * (.09 + t.level * .27),
            type: 1,
            noDaze: !0
        })
    });
    var rx = new S({
        id: 99,
        type: 1,
        tags: new Set([3]),
        maxStacks: 4,
        icon: "ui/skills/frozenBuff",
        fx: {
            stick: 58,
            color: [.1, .1, .8, .5]
        },
        statsStatic: (t, e) => {
            e.maxStat(32, 20)
        }
    });
    var nx = new S({
        id: 71,
        icon: "ui/skills/16",
        fx: {
            stick: 40,
            endSound: 69
        },
        statsStatic: (t, e) => {
            e.addStat(16, 30 + t.level * 70), e.addStat(30, 2 + t.level * 8)
        }
    });
    var ix = new S({
        id: 117,
        incapacitated: !0,
        tags: new Set([9, 11, 12]),
        immuneAll: !0,
        intervalDuration: 1,
        intervalHaste: !1,
        icon: "ui/skills/53",
        fx: {
            stick: 120,
            frozen: !0
        },
        statsStatic: (t, e) => {
            e.maxStat(32, 100)
        },
        onInterval: (t, e, o) => ({
            id: 53,
            mode: 2,
            caster: t.caster,
            target: o.id,
            heal: t.level * 50,
            nocrit: !0
        })
    });
    var sx = new S({
        id: 100,
        passive: !0
    });
    var ax = new S({
        id: 79,
        icon: "ui/skills/23",
        fx: {
            stick: 17
        }
    });
    var cx = new S({
        id: 70,
        passive: !0
    });
    var lx = new S({
        id: 62,
        passive: !0,
        icon: "ui/skills/8",
        statsConvert: [
            [3, .4, 10],
            [3, .4, 11]
        ]
    });
    var fx = new S({
        id: 112,
        type: 0,
        icon: "ui/skills/charm4",
        fx: {
            stick: 42,
            color: [0, 0, 1, .7]
        }
    });
    var ux = new S({
        id: 113,
        type: 1,
        tags: new Set([1]),
        maxStacks: 10,
        icon: "ui/skills/firebuff",
        fx: {
            stick: 67,
            color: [2, 1, .3, 1]
        }
    });
    var dx = new S({
        id: 126,
        type: 1,
        tags: new Set([1]),
        maxStacks: 5,
        icon: "ui/skills/firebuff",
        fx: {
            stick: 132,
            apply: 135,
            color: [.7, .1, 1.5, 1]
        }
    });
    var mx = new S({
        id: 94,
        type: 1,
        tags: new Set([3]),
        icon: "ui/skills/dazedBuff",
        fx: {
            stick: 73
        },
        statsStatic: (t, e) => {
            e.maxStat(32, 30)
        }
    });
    var px = new S({
        id: 110,
        type: 0,
        icon: "ui/skills/charm2",
        fx: {
            stick: 21,
            color: [1, 0, 0, .8]
        },
        statsStatic: (t, e) => {
            e.addStat(30, t.level)
        }
    });
    var hx = new S({
        id: 124,
        passive: !1,
        icon: "ui/skills/hellspawn",
        fx: {
            stick: 160
        }
    });
    var gx = new S({
        id: 109,
        type: 0,
        icon: "ui/skills/charm1",
        fx: {
            stick: 61,
            color: [.3, .3, .3, .9]
        }
    });
    var vx = new S({
        id: 123,
        passive: !0
    });
    var xx = new S({
        id: 93,
        breakOnCast: !0,
        tags: new Set([12]),
        icon: "ui/skills/39",
        customIcon: t => "items/mount/mount" + Br[t.data[0]].tier + "_q1",
        fx: {
            mount: t => Br[t.data[0]].skin,
            apply: 76,
            endSound: 69
        },
        statsStatic: (t, e) => {
            e.addStat(15, 60 + (t.data[1] || 0) * 8)
        }
    });
    var bx = new S({
        id: 130,
        clearOnDeath: !1,
        tags: new Set([12]),
        icon: "ui/skills/39",
        customIcon: t => "items/pet/pet" + Br[t.data[0]].tier + "_q1"
    });
    var wx = new S({
        id: 111,
        type: 0,
        icon: "ui/skills/charm3",
        fx: {
            stick: 62,
            color: [.3, 0, .6, .8]
        },
        statsStatic: (t, e) => {
            e.addStat(15, t.level)
        }
    });
    var _x = new S({
        id: 127,
        type: 0,
        maxStacks: 8,
        clearOnDeath: !1,
        icon: "ui/skills/obeliskbuff"
    });
    var yx = new S({
        id: 125,
        maxStacks: 25,
        type: 1,
        icon: "ui/skills/pierce",
        multiplyIncomingDamage: {
            0: t => 1 + t.stacks * .2,
            64: t => 1 + t.stacks * .2
        }
    });
    var Mx = new S({
        id: 103,
        icon: "ui/skills/postsummon",
        fx: {
            stick: 80
        },
        unique: !0,
        statsStatic: (t, e) => {
            e.addStat(15, 20)
        }
    });
    var dl = ["potionhp", "potionMp"].map((t, e) => new S({
        id: [97, 98][e],
        maxStacks: 1,
        icon: "ui/skills/" + t,
        fx: {
            stick: [43, 83][e]
        },
        intervalHaste: !1,
        intervalDuration: .5,
        onInterval: (o, r, n) => ({
            id: 100,
            mode: [2, 3][e],
            caster: o.caster,
            target: r.id,
            heal: e == 1 ? void 0 : o.level,
            mprec: e == 0 ? void 0 : o.level,
            nocrit: !0
        })
    }));
    var kx = new S({
        id: 88,
        type: 1,
        tags: new Set([5]),
        dr: 1,
        incapacitated: !0,
        icon: "ui/skills/stunBuff",
        fx: {
            stick: 86,
            incapacitated: !0
        },
        movementOverride: (t, e, o, r, n) => {
            r.setSteer(0, 0), r.setJump(0)
        }
    });
    var Fx = new S({
        id: 102,
        maxStacks: 99,
        icon: "ui/skills/suddenDeath",
        statsStatic: (t, e) => {
            e.maxStat(33, t.stacks)
        }
    });
    var Cx = new S({
        id: 122,
        passive: !1,
        immuneCC: !0,
        icon: "ui/skills/21",
        statsStatic: (t, e) => {
            e.addStat(6, t.stacks * 5e5), t.level > 1 && (e.addStat(17, 30), e.addStat(16, 1e3), e.addStat(15, 200), e.addStat(10, 500), e.addStat(11, 500))
        },
        onCast: {
            0: (t, e, o, r, n) => {}
        }
    });
    var Ax = new S({
        id: 131,
        passive: !0
    });
    var Sx = new S({
        id: 132,
        passive: !0
    });
    var Px = new S({
        id: 128,
        type: 0,
        tags: new Set([12]),
        icon: "ui/skills/ghost",
        fx: {
            color: [.9, 1.2, .8, .8],
            alpha: [.3]
        }
    });
    var Ex = new S({
        id: 129,
        type: 0,
        icon: "ui/skills/moderator",
        fx: {
            color: [.3, 1.2, .9, .7],
            alpha: [.3]
        }
    });
    var Lx = new S({
        id: 133,
        passive: !0
    });
    var Dx = new S({
            id: 134,
            passive: !0
        }),
        Tx = new S({
            id: 135,
            type: 0,
            icon: "items/charm/charm6_q1",
            fx: {
                stick: 161,
                color: [1.3, .9, .2, .4],
                endSound: 69
            }
        });
    var Ix = new S({
            id: 136,
            passive: !0
        }),
        zx = new S({
            id: 137,
            type: 0,
            icon: "items/charm/charm7_q1",
            fx: {
                stick: 167,
                color: [.2, -1, -1, .4]
            }
        });
    var Vx = new S({
        id: 138,
        tags: new Set([12, 13]),
        icon: "items/charm/charm8_q1",
        fx: {
            stick: 165,
            endSound: 69,
            color: [0, .7, 1.2, .55]
        }
    });
    var Rx = new S({
        id: 141,
        tags: new Set([12, 15]),
        icon: "items/charm/charm10_q1",
        fx: {
            endSound: 69,
            stick: 164,
            color: [.5, 0, .5, .7]
        }
    });
    var Ux = new S({
            id: 139,
            tags: new Set([12]),
            icon: "items/charm/charm9_q1",
            fx: {
                stick: 162,
                endSound: 69,
                color: [.4, 1.2, .2, .5],
                alpha: [.7]
            }
        }),
        Bx = new S({
            id: 140,
            icon: "items/charm/charm9_q1",
            fx: {
                alpha: [.05]
            }
        });
    var jx = new S({
        id: 142,
        icon: "items/charm/charm11_q1",
        fx: {
            stick: 171,
            endSound: 69,
            color: [.3, .6, 1.3, .4]
        }
    });
    var qx = new S({
        id: 143,
        icon: "items/charm/charm12_q1",
        fx: {
            stick: 168,
            endSound: 69,
            color: [.9, .5, .3, .7]
        }
    });
    var Nx = new S({
        id: 144,
        tags: new Set([12, 14]),
        icon: "items/charm/charm13_q1",
        fx: {
            visual: 108,
            endSound: 69,
            apply: 76
        }
    });
    var Ox = new S({
        id: 145,
        icon: "items/charm/charm14_q1",
        fx: {
            stick: 163,
            endSound: 69,
            color: [1.2, .9, .2, .3]
        }
    });
    var Wx = new S({
        id: 146,
        passive: !1,
        clearOnDeath: !1,
        immuneCC: !0,
        icon: "ui/skills/suddenDeath"
    });
    var ml = new Map;
    [Wx, Ux, Bx, Ox, Nx, qx, jx, Rx, Vx, Ix, zx, Dx, Tx, Lx, Px, Ex, _x, dx, yx, Ax, vx, hx, Cx, ux, fx, wx, px, gx, Mx, Fx, dl[0], dl[1], kx, xx, bx, mx, wv, Cv, Mv, kv, yv, hv, Fv, gv, dv, xv, vv, bv, mv, _v, Lv, Dv, Av, zv, Sv, Ev, Tv, Iv, Pv, ix, tx, ex, Kv, sx, rx, Jv, Zv, ax, cx, ox, lx, nx, Rv, Sx, Vv, Xv, Qv, $v, Ov, Gv, qv, Nv, Yv, jv, Uv, Hv, Wv, Bv].forEach(t => {
        ml.set(t.id, t)
    });
    var ua = class {
        constructor(e) {
            this.entity = e, this.alive = !0, this.stat = new Map, this.resource = new Map, this.combatTimer = new go(-1, 6)
        }
        tick(e, o) {
            this.combatTimer.start > 0 && this.combatTimer.done(o) && this.onCombatEnd(o)
        }
        die() {
            return this.alive ? (this.alive = !1, this.entity.skills.onDeath(), this.entity.buffs.onDeath(), !0) : !1
        }
        getStat(e) {
            return this.stat.get(e) | 0
        }
        getResource(e) {
            return this.resource.get(e) | 0
        }
        addStat(e, o) {
            this.stat.set(e, (this.stat.get(e) | 0) + o)
        }
        maxStat(e, o) {
            this.stat.set(e, Math.max(this.stat.get(e) | 0, o))
        }
        multiplyStat(e, o) {
            this.stat.set(e, (this.stat.get(e) | 0) * o)
        }
        setResource(e, o) {
            let r = Math.round(je(o, 0, this.getStat(e)));
            return this.resource.set(e, r), r
        }
        changeResource(e, o) {
            return this.setResource(e, this.getResource(e) + o)
        }
        respawn() {
            this.alive = !0, this.onCombatEnd()
        }
        clear() {}
        refreshCombatTimer(e, o) {
            this.combatTimer.end < e + o && this.combatTimer.reset(e, o)
        }
        onCombatEnd() {
            this.combatTimer.reset(-1)
        }
        getDamageRoll() {
            return Math.round((this.getStat(10) + this.getStat(11)) / 2)
        }
    };
    var da = (t, e = !0) => {
        let o = Object.entries(t);
        return o.forEach(r => {
            r[0] = parseInt(r[0]), e && typeof r[1] == "object" && (r[1] = da(r[1]))
        }), new Map(o)
    };
    var Gx = da({
            14: .1,
            13: .1,
            9: .1,
            8: .1,
            16: .1
        }),
        h4 = da({
            14: "%",
            13: "%",
            16: "%",
            18: "%"
        }),
        br = (t, e) => (Gx.has(t) && (e *= Gx.get(t), e = e.toFixed(e >= .1 ? 1 : 2)), e + (h4.get(t) || ""));

    function $x(t, e, o) {
        let r = t.slice();
        return r[12] = e[o], r
    }

    function Hx(t, e, o) {
        let r = t.slice();
        return r[15] = e[o], r
    }

    function Yx(t, e, o) {
        let r = t.slice();
        return r[18] = e[o], r
    }

    function Xx(t, e, o) {
        let r = t.slice();
        return r[18] = e[o], r
    }

    function Qx(t, e, o) {
        let r = t.slice();
        return r[23] = e[o], r
    }

    function Zx(t, e, o) {
        let r = t.slice();
        return r[26] = e[o], r
    }

    function Kx(t, e, o) {
        let r = t.slice();
        return r[23] = e[o], r
    }

    function Jx(t, e, o) {
        let r = t.slice();
        return r[26] = e[o], r
    }

    function e2(t, e, o) {
        let r = t.slice();
        return r[33] = e[o], r
    }

    function t2(t, e, o) {
        let r = t.slice();
        return r[26] = e[o], r
    }

    function g4(t) {
        let e, o, r, n, i, s, a, c, l, f, u, d, m, h, g, M, x, w, k, U, D, V, fe, N = !t[2] && t[0].parent === void 0 && o2(t),
            O = t[0].actiontype && r2(t),
            ne = t[0].auto && n2(t),
            J = t[0].costMp && i2(t),
            re = t[0].castLen && s2(t),
            P = t[0].cd && a2(t),
            G = t[0].duration > 0 && c2(t),
            A = t[0].unique && l2(t),
            te = t[0].refresh && f2(t),
            ce = t[0].range && u2(t),
            ke = t[6][t[0].targetMode] && d2(t),
            Re = t[0].maxStacks && m2(t),
            Ce = t[0].dmg && p2(t),
            Ae = t[0].heal && h2(t),
            at = le([t[0].multiplyIncomingHeal, t[0].multiplyIncomingDamage]),
            Ze = [];
        for (let E = 0; E < 2; E += 1) Ze[E] = v2(e2(t, at, E));
        let zt = le([t[0].addIncomingHeal, t[0].addIncomingDamage]),
            Oe = [];
        for (let E = 0; E < 2; E += 1) Oe[E] = b2(Kx(t, zt, E));
        let Y = le([t[0].addIncomingCrit]),
            Te = [];
        for (let E = 0; E < 1; E += 1) Te[E] = _2(Qx(t, Y, E));
        let ot = t[0].statsStatic && y2(t),
            et = t[0].statsConvert && k2(t),
            ct = t[0].custom && C2(t),
            ze = t[0].aoe && t[0].aoe.circleRadius && S2(t),
            Ke = !t[0].parent && P2(t),
            Vt = le(t[5]),
            We = [];
        for (let E = 0; E < Vt.length; E += 1) We[E] = E2($x(t, Vt, E));
        let mo = E => ye(We[E], 1, 1, () => {
            We[E] = null
        });
        return {
            c() {
                N && N.c(), e = C("div"), O && O.c(), o = pe(), ne && ne.c(), r = pe(), J && J.c(), n = pe(), re && re.c(), i = pe(), P && P.c(), s = pe(), G && G.c(), a = pe(), A && A.c(), c = pe(), te && te.c(), l = C("div"), ce && ce.c(), f = pe(), ke && ke.c(), Re && Re.c(), u = pe(), Ce && Ce.c(), d = pe(), Ae && Ae.c(), m = pe();
                for (let E = 0; E < 2; E += 1) Ze[E].c();
                h = pe();
                for (let E = 0; E < 2; E += 1) Oe[E].c();
                g = pe();
                for (let E = 0; E < 1; E += 1) Te[E].c();
                M = pe(), ot && ot.c(), x = pe(), et && et.c(), w = pe(), ct && ct.c(), k = pe(), ze && ze.c(), U = pe(), Ke && Ke.c(), D = pe();
                for (let E = 0; E < We.length; E += 1) We[E].c();
                V = pe(), F(e, "class", "pad textgreen svelte-14w0l4b")
            },
            m(E, ee) {
                N && N.m(E, ee), z(E, e, ee), O && O.m(e, null), b(e, o), ne && ne.m(e, null), b(e, r), J && J.m(e, null), b(e, n), re && re.m(e, null), b(e, i), P && P.m(e, null), b(e, s), G && G.m(e, null), b(e, a), A && A.m(e, null), b(e, c), te && te.m(e, null), b(e, l), ce && ce.m(l, null), b(l, f), ke && ke.m(l, null), Re && Re.m(E, ee), z(E, u, ee), Ce && Ce.m(E, ee), z(E, d, ee), Ae && Ae.m(E, ee), z(E, m, ee);
                for (let $ = 0; $ < 2; $ += 1) Ze[$] && Ze[$].m(E, ee);
                z(E, h, ee);
                for (let $ = 0; $ < 2; $ += 1) Oe[$] && Oe[$].m(E, ee);
                z(E, g, ee);
                for (let $ = 0; $ < 1; $ += 1) Te[$] && Te[$].m(E, ee);
                z(E, M, ee), ot && ot.m(E, ee), z(E, x, ee), et && et.m(E, ee), z(E, w, ee), ct && ct.m(E, ee), z(E, k, ee), ze && ze.m(E, ee), z(E, U, ee), Ke && Ke.m(E, ee), z(E, D, ee);
                for (let $ = 0; $ < We.length; $ += 1) We[$] && We[$].m(E, ee);
                z(E, V, ee), fe = !0
            },
            p(E, ee) {
                if (!E[2] && E[0].parent === void 0 ? N ? N.p(E, ee) : (N = o2(E), N.c(), N.m(e.parentNode, e)) : N && (N.d(1), N = null), E[0].actiontype ? O ? O.p(E, ee) : (O = r2(E), O.c(), O.m(e, o)) : O && (O.d(1), O = null), E[0].auto ? ne || (ne = n2(E), ne.c(), ne.m(e, r)) : ne && (ne.d(1), ne = null), E[0].costMp ? J ? J.p(E, ee) : (J = i2(E), J.c(), J.m(e, n)) : J && (J.d(1), J = null), E[0].castLen ? re ? re.p(E, ee) : (re = s2(E), re.c(), re.m(e, i)) : re && (re.d(1), re = null), E[0].cd ? P ? P.p(E, ee) : (P = a2(E), P.c(), P.m(e, s)) : P && (P.d(1), P = null), E[0].duration > 0 ? G ? G.p(E, ee) : (G = c2(E), G.c(), G.m(e, a)) : G && (G.d(1), G = null), E[0].unique ? A || (A = l2(E), A.c(), A.m(e, c)) : A && (A.d(1), A = null), E[0].refresh ? te || (te = f2(E), te.c(), te.m(e, l)) : te && (te.d(1), te = null), E[0].range ? ce ? ce.p(E, ee) : (ce = u2(E), ce.c(), ce.m(l, f)) : ce && (ce.d(1), ce = null), E[6][E[0].targetMode] ? ke ? ke.p(E, ee) : (ke = d2(E), ke.c(), ke.m(l, null)) : ke && (ke.d(1), ke = null), E[0].maxStacks ? Re ? Re.p(E, ee) : (Re = m2(E), Re.c(), Re.m(u.parentNode, u)) : Re && (Re.d(1), Re = null), E[0].dmg ? Ce ? Ce.p(E, ee) : (Ce = p2(E), Ce.c(), Ce.m(d.parentNode, d)) : Ce && (Ce.d(1), Ce = null), E[0].heal ? Ae ? Ae.p(E, ee) : (Ae = h2(E), Ae.c(), Ae.m(m.parentNode, m)) : Ae && (Ae.d(1), Ae = null), ee[0] & 129) {
                    at = le([E[0].multiplyIncomingHeal, E[0].multiplyIncomingDamage]);
                    let $;
                    for ($ = 0; $ < 2; $ += 1) {
                        let q = e2(E, at, $);
                        Ze[$] ? Ze[$].p(q, ee) : (Ze[$] = v2(q), Ze[$].c(), Ze[$].m(h.parentNode, h))
                    }
                    for (; $ < 2; $ += 1) Ze[$].d(1)
                }
                if (ee[0] & 129) {
                    zt = le([E[0].addIncomingHeal, E[0].addIncomingDamage]);
                    let $;
                    for ($ = 0; $ < 2; $ += 1) {
                        let q = Kx(E, zt, $);
                        Oe[$] ? Oe[$].p(q, ee) : (Oe[$] = b2(q), Oe[$].c(), Oe[$].m(g.parentNode, g))
                    }
                    for (; $ < 2; $ += 1) Oe[$].d(1)
                }
                if (ee[0] & 129) {
                    Y = le([E[0].addIncomingCrit]);
                    let $;
                    for ($ = 0; $ < 1; $ += 1) {
                        let q = Qx(E, Y, $);
                        Te[$] ? Te[$].p(q, ee) : (Te[$] = _2(q), Te[$].c(), Te[$].m(M.parentNode, M))
                    }
                    for (; $ < 1; $ += 1) Te[$].d(1)
                }
                if (E[0].statsStatic ? ot ? ot.p(E, ee) : (ot = y2(E), ot.c(), ot.m(x.parentNode, x)) : ot && (ot.d(1), ot = null), E[0].statsConvert ? et ? et.p(E, ee) : (et = k2(E), et.c(), et.m(w.parentNode, w)) : et && (et.d(1), et = null), E[0].custom ? ct ? ct.p(E, ee) : (ct = C2(E), ct.c(), ct.m(k.parentNode, k)) : ct && (ct.d(1), ct = null), E[0].aoe && E[0].aoe.circleRadius ? ze ? ze.p(E, ee) : (ze = S2(E), ze.c(), ze.m(U.parentNode, U)) : ze && (ze.d(1), ze = null), E[0].parent ? Ke && (Ke.d(1), Ke = null) : Ke ? Ke.p(E, ee) : (Ke = P2(E), Ke.c(), Ke.m(D.parentNode, D)), ee[0] & 34) {
                    Vt = le(E[5]);
                    let $;
                    for ($ = 0; $ < Vt.length; $ += 1) {
                        let q = $x(E, Vt, $);
                        We[$] ? (We[$].p(q, ee), he(We[$], 1)) : (We[$] = E2(q), We[$].c(), he(We[$], 1), We[$].m(V.parentNode, V))
                    }
                    for (Ft(), $ = Vt.length; $ < We.length; $ += 1) mo($);
                    Ct()
                }
            },
            i(E) {
                if (!fe) {
                    for (let ee = 0; ee < Vt.length; ee += 1) he(We[ee]);
                    fe = !0
                }
            },
            o(E) {
                We = We.filter(Boolean);
                for (let ee = 0; ee < We.length; ee += 1) ye(We[ee]);
                fe = !1
            },
            d(E) {
                E && (I(e), I(u), I(d), I(m), I(h), I(g), I(M), I(x), I(w), I(k), I(U), I(D), I(V)), N && N.d(E), O && O.d(), ne && ne.d(), J && J.d(), re && re.d(), P && P.d(), G && G.d(), A && A.d(), te && te.d(), ce && ce.d(), ke && ke.d(), Re && Re.d(E), Ce && Ce.d(E), Ae && Ae.d(E), Ue(Ze, E), Ue(Oe, E), Ue(Te, E), ot && ot.d(E), et && et.d(E), ct && ct.d(E), ze && ze.d(E), Ke && Ke.d(E), Ue(We, E)
            }
        }
    }

    function v4(t) {
        let e, o = t[0].item + "",
            r;
        return {
            c() {
                e = C("div"), r = B(o)
            },
            m(n, i) {
                z(n, e, i), b(e, r)
            },
            p(n, i) {
                i[0] & 1 && o !== (o = n[0].item + "") && Q(r, o)
            },
            i: X,
            o: X,
            d(n) {
                n && I(e)
            }
        }
    }

    function o2(t) {
        let e, o, r, n, i = Z.items.book[t[0].id].name + "",
            s, a = t[0].engineOnly ? "" : " Lv. " + t[1],
            c;
        return {
            c() {
                e = C("div"), o = C("img"), n = Le(), s = B(i), c = B(a), F(o, "class", "texticon"), $e(o.src, r = Ur(t[0].id)) || F(o, "src", r), F(e, "class", "slottitle textprimary")
            },
            m(l, f) {
                z(l, e, f), b(e, o), b(e, n), b(e, s), b(e, c)
            },
            p(l, f) {
                f[0] & 1 && !$e(o.src, r = Ur(l[0].id)) && F(o, "src", r), f[0] & 1 && i !== (i = Z.items.book[l[0].id].name + "") && Q(s, i), f[0] & 3 && a !== (a = l[0].engineOnly ? "" : " Lv. " + l[1]) && Q(c, a)
            },
            d(l) {
                l && I(e)
            }
        }
    }

    function r2(t) {
        let e, o = t[8][t[0].mode] + "",
            r, n, i = t[0].actiontype + "",
            s;
        return {
            c() {
                e = C("div"), r = B(o), n = Le(), s = B(i), F(e, "class", "textwhite")
            },
            m(a, c) {
                z(a, e, c), b(e, r), b(e, n), b(e, s)
            },
            p(a, c) {
                c[0] & 1 && o !== (o = a[8][a[0].mode] + "") && Q(r, o), c[0] & 1 && i !== (i = a[0].actiontype + "") && Q(s, i)
            },
            d(a) {
                a && I(e)
            }
        }
    }

    function n2(t) {
        let e;
        return {
            c() {
                e = C("div"), e.textContent = "Auto cast"
            },
            m(o, r) {
                z(o, e, r)
            },
            d(o) {
                o && I(e)
            }
        }
    }

    function i2(t) {
        let e, o, r = t[0].costMp(t[1]) + "",
            n, i, s = Z.ui.stats.array[7] + "",
            a;
        return {
            c() {
                e = C("div"), o = B("Cost: "), n = B(r), i = Le(), a = B(s)
            },
            m(c, l) {
                z(c, e, l), b(e, o), b(e, n), b(e, i), b(e, a)
            },
            p(c, l) {
                l[0] & 3 && r !== (r = c[0].costMp(c[1]) + "") && Q(n, r)
            },
            d(c) {
                c && I(e)
            }
        }
    }

    function s2(t) {
        let e, o = t[7](t[0].castLen) + "",
            r, n;
        return {
            c() {
                e = C("div"), r = B(o), n = B("s Cast time")
            },
            m(i, s) {
                z(i, e, s), b(e, r), b(e, n)
            },
            p(i, s) {
                s[0] & 1 && o !== (o = i[7](i[0].castLen) + "") && Q(r, o)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function a2(t) {
        let e, o = t[7](t[0].cd) + "",
            r, n;
        return {
            c() {
                e = C("div"), r = B(o), n = B("s Cooldown")
            },
            m(i, s) {
                z(i, e, s), b(e, r), b(e, n)
            },
            p(i, s) {
                s[0] & 1 && o !== (o = i[7](i[0].cd) + "") && Q(r, o)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function c2(t) {
        let e, o = t[7](t[0].duration) + "",
            r, n;
        return {
            c() {
                e = C("div"), r = B(o), n = B("s Duration")
            },
            m(i, s) {
                z(i, e, s), b(e, r), b(e, n)
            },
            p(i, s) {
                s[0] & 1 && o !== (o = i[7](i[0].duration) + "") && Q(r, o)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function l2(t) {
        let e;
        return {
            c() {
                e = C("div"), e.textContent = "Unique"
            },
            m(o, r) {
                z(o, e, r)
            },
            d(o) {
                o && I(e)
            }
        }
    }

    function f2(t) {
        let e;
        return {
            c() {
                e = C("div"), e.textContent = "Stacks refresh duration"
            },
            m(o, r) {
                z(o, e, r)
            },
            d(o) {
                o && I(e)
            }
        }
    }

    function u2(t) {
        let e, o = t[7](t[0].range) + "",
            r, n;
        return {
            c() {
                e = C("span"), r = B(o), n = B("m range ")
            },
            m(i, s) {
                z(i, e, s), b(e, r), b(e, n)
            },
            p(i, s) {
                s[0] & 1 && o !== (o = i[7](i[0].range) + "") && Q(r, o)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function d2(t) {
        let e, o = t[6][t[0].targetMode] + "",
            r;
        return {
            c() {
                e = C("span"), r = B(o)
            },
            m(n, i) {
                z(n, e, i), b(e, r)
            },
            p(n, i) {
                i[0] & 1 && o !== (o = n[6][n[0].targetMode] + "") && Q(r, o)
            },
            d(n) {
                n && I(e)
            }
        }
    }

    function m2(t) {
        let e, o, r, n = t[4].stacks + "",
            i, s, a, c;
        return {
            c() {
                e = C("div"), o = C("u"), r = B("At "), i = B(n), s = B(" stacks"), a = B(":"), c = C("span"), c.textContent = "(Press shift to toggle)", F(e, "class", "pad textsecondary svelte-14w0l4b"), F(c, "class", "textgrey")
            },
            m(l, f) {
                z(l, e, f), b(e, o), b(o, r), b(o, i), b(o, s), b(e, a), z(l, c, f)
            },
            p(l, f) {
                f[0] & 16 && n !== (n = l[4].stacks + "") && Q(i, n)
            },
            d(l) {
                l && (I(e), I(c))
            }
        }
    }

    function p2(t) {
        let e, o = t[7](t[0].dmg) + "",
            r, n;
        return {
            c() {
                e = C("div"), r = B(o), n = B(" DMG"), F(e, "class", "textgreen")
            },
            m(i, s) {
                z(i, e, s), b(e, r), b(e, n)
            },
            p(i, s) {
                s[0] & 1 && o !== (o = i[7](i[0].dmg) + "") && Q(r, o)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function h2(t) {
        let e, o = t[7](t[0].heal) + "",
            r, n;
        return {
            c() {
                e = C("div"), r = B(o), n = B(" Heal"), F(e, "class", "textgreen")
            },
            m(i, s) {
                z(i, e, s), b(e, r), b(e, n)
            },
            p(i, s) {
                s[0] & 1 && o !== (o = i[7](i[0].heal) + "") && Q(r, o)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function g2(t) {
        let e, o, r = Z.items.book[t[26]].name + "",
            n, i, s = Math.round(100 * t[7](t[33][t[26]](t[0])) - 100) + "",
            a, c;
        return {
            c() {
                e = C("div"), o = B("Empower "), n = B(r), i = B(" by "), a = B(s), c = B("%"), F(e, "class", "textcyan")
            },
            m(l, f) {
                z(l, e, f), b(e, o), b(e, n), b(e, i), b(e, a), b(e, c)
            },
            p(l, f) {
                f[0] & 1 && r !== (r = Z.items.book[l[26]].name + "") && Q(n, r), f[0] & 1 && s !== (s = Math.round(100 * l[7](l[33][l[26]](l[0])) - 100) + "") && Q(a, s)
            },
            d(l) {
                l && I(e)
            }
        }
    }

    function v2(t) {
        let e, o = le(Object.keys(t[33] || {})),
            r = [];
        for (let n = 0; n < o.length; n += 1) r[n] = g2(t2(t, o, n));
        return {
            c() {
                for (let n = 0; n < r.length; n += 1) r[n].c();
                e = pe()
            },
            m(n, i) {
                for (let s = 0; s < r.length; s += 1) r[s] && r[s].m(n, i);
                z(n, e, i)
            },
            p(n, i) {
                if (i[0] & 129) {
                    o = le(Object.keys(n[33] || {}));
                    let s;
                    for (s = 0; s < o.length; s += 1) {
                        let a = t2(n, o, s);
                        r[s] ? r[s].p(a, i) : (r[s] = g2(a), r[s].c(), r[s].m(e.parentNode, e))
                    }
                    for (; s < r.length; s += 1) r[s].d(1);
                    r.length = o.length
                }
            },
            d(n) {
                n && I(e), Ue(r, n)
            }
        }
    }

    function x2(t) {
        let e, o, r = Z.items.book[t[26]].name + "",
            n, i, s = t[7](t[23][t[26]](t[0])) + "",
            a;
        return {
            c() {
                e = C("div"), o = B("Empower "), n = B(r), i = B(" by "), a = B(s), F(e, "class", "textcyan")
            },
            m(c, l) {
                z(c, e, l), b(e, o), b(e, n), b(e, i), b(e, a)
            },
            p(c, l) {
                l[0] & 1 && r !== (r = Z.items.book[c[26]].name + "") && Q(n, r), l[0] & 1 && s !== (s = c[7](c[23][c[26]](c[0])) + "") && Q(a, s)
            },
            d(c) {
                c && I(e)
            }
        }
    }

    function b2(t) {
        let e, o = le(Object.keys(t[23] || {})),
            r = [];
        for (let n = 0; n < o.length; n += 1) r[n] = x2(Jx(t, o, n));
        return {
            c() {
                for (let n = 0; n < r.length; n += 1) r[n].c();
                e = pe()
            },
            m(n, i) {
                for (let s = 0; s < r.length; s += 1) r[s] && r[s].m(n, i);
                z(n, e, i)
            },
            p(n, i) {
                if (i[0] & 129) {
                    o = le(Object.keys(n[23] || {}));
                    let s;
                    for (s = 0; s < o.length; s += 1) {
                        let a = Jx(n, o, s);
                        r[s] ? r[s].p(a, i) : (r[s] = x2(a), r[s].c(), r[s].m(e.parentNode, e))
                    }
                    for (; s < r.length; s += 1) r[s].d(1);
                    r.length = o.length
                }
            },
            d(n) {
                n && I(e), Ue(r, n)
            }
        }
    }

    function w2(t) {
        let e, o, r = Z.items.book[t[26]].name + "",
            n, i, s = br(14, t[7](t[23][t[26]](t[0]))) + "",
            a;
        return {
            c() {
                e = C("div"), o = B("Empower Crit% of "), n = B(r), i = B(" by "), a = B(s), F(e, "class", "textcyan")
            },
            m(c, l) {
                z(c, e, l), b(e, o), b(e, n), b(e, i), b(e, a)
            },
            p(c, l) {
                l[0] & 1 && r !== (r = Z.items.book[c[26]].name + "") && Q(n, r), l[0] & 1 && s !== (s = br(14, c[7](c[23][c[26]](c[0]))) + "") && Q(a, s)
            },
            d(c) {
                c && I(e)
            }
        }
    }

    function _2(t) {
        let e, o = le(Object.keys(t[23] || {})),
            r = [];
        for (let n = 0; n < o.length; n += 1) r[n] = w2(Zx(t, o, n));
        return {
            c() {
                for (let n = 0; n < r.length; n += 1) r[n].c();
                e = pe()
            },
            m(n, i) {
                for (let s = 0; s < r.length; s += 1) r[s] && r[s].m(n, i);
                z(n, e, i)
            },
            p(n, i) {
                if (i[0] & 129) {
                    o = le(Object.keys(n[23] || {}));
                    let s;
                    for (s = 0; s < o.length; s += 1) {
                        let a = Zx(n, o, s);
                        r[s] ? r[s].p(a, i) : (r[s] = w2(a), r[s].c(), r[s].m(e.parentNode, e))
                    }
                    for (; s < r.length; s += 1) r[s].d(1);
                    r.length = o.length
                }
            },
            d(n) {
                n && I(e), Ue(r, n)
            }
        }
    }

    function y2(t) {
        let e, o = le(Array.from(t[3].stat)),
            r = [];
        for (let n = 0; n < o.length; n += 1) r[n] = M2(Xx(t, o, n));
        return {
            c() {
                for (let n = 0; n < r.length; n += 1) r[n].c();
                e = pe()
            },
            m(n, i) {
                for (let s = 0; s < r.length; s += 1) r[s] && r[s].m(n, i);
                z(n, e, i)
            },
            p(n, i) {
                if (i[0] & 8) {
                    o = le(Array.from(n[3].stat));
                    let s;
                    for (s = 0; s < o.length; s += 1) {
                        let a = Xx(n, o, s);
                        r[s] ? r[s].p(a, i) : (r[s] = M2(a), r[s].c(), r[s].m(e.parentNode, e))
                    }
                    for (; s < r.length; s += 1) r[s].d(1);
                    r.length = o.length
                }
            },
            d(n) {
                n && I(e), Ue(r, n)
            }
        }
    }

    function M2(t) {
        let e, o, r = br(t[18][0], t[18][1]) + "",
            n, i, s = Z.ui.stats.array[t[18][0]] + "",
            a, c;
        return {
            c() {
                e = C("div"), o = B("+"), n = B(r), i = Le(), a = B(s), c = Le(), F(e, "class", "textcyan")
            },
            m(l, f) {
                z(l, e, f), b(e, o), b(e, n), b(e, i), b(e, a), b(e, c)
            },
            p(l, f) {
                f[0] & 8 && r !== (r = br(l[18][0], l[18][1]) + "") && Q(n, r), f[0] & 8 && s !== (s = Z.ui.stats.array[l[18][0]] + "") && Q(a, s)
            },
            d(l) {
                l && I(e)
            }
        }
    }

    function k2(t) {
        let e, o = le(t[0].statsConvert),
            r = [];
        for (let n = 0; n < o.length; n += 1) r[n] = F2(Yx(t, o, n));
        return {
            c() {
                for (let n = 0; n < r.length; n += 1) r[n].c();
                e = pe()
            },
            m(n, i) {
                for (let s = 0; s < r.length; s += 1) r[s] && r[s].m(n, i);
                z(n, e, i)
            },
            p(n, i) {
                if (i[0] & 1) {
                    o = le(n[0].statsConvert);
                    let s;
                    for (s = 0; s < o.length; s += 1) {
                        let a = Yx(n, o, s);
                        r[s] ? r[s].p(a, i) : (r[s] = F2(a), r[s].c(), r[s].m(e.parentNode, e))
                    }
                    for (; s < r.length; s += 1) r[s].d(1);
                    r.length = o.length
                }
            },
            d(n) {
                n && I(e), Ue(r, n)
            }
        }
    }

    function F2(t) {
        let e, o = Z.ui.skilldescription.statincrement[0] + "",
            r, n, i = Z.ui.stats.array[t[18][0]] + "",
            s, a, c = Z.ui.skilldescription.statincrement[1] + "",
            l, f, u = br(t[18][0], t[18][1]) + "",
            d, m, h = Z.ui.stats.array[t[18][2]] + "",
            g, M, x = Z.ui.skilldescription.statincrement[2] + "",
            w;
        return {
            c() {
                e = C("div"), r = B(o), n = Le(), s = B(i), a = Le(), l = B(c), f = Le(), d = B(u), m = Le(), g = B(h), M = Le(), w = B(x), F(e, "class", "textcyan")
            },
            m(k, U) {
                z(k, e, U), b(e, r), b(e, n), b(e, s), b(e, a), b(e, l), b(e, f), b(e, d), b(e, m), b(e, g), b(e, M), b(e, w)
            },
            p(k, U) {
                U[0] & 1 && i !== (i = Z.ui.stats.array[k[18][0]] + "") && Q(s, i), U[0] & 1 && u !== (u = br(k[18][0], k[18][1]) + "") && Q(d, u), U[0] & 1 && h !== (h = Z.ui.stats.array[k[18][2]] + "") && Q(g, h)
            },
            d(k) {
                k && I(e)
            }
        }
    }

    function C2(t) {
        let e, o = le(t[0].custom),
            r = [];
        for (let n = 0; n < o.length; n += 1) r[n] = A2(Hx(t, o, n));
        return {
            c() {
                for (let n = 0; n < r.length; n += 1) r[n].c();
                e = pe()
            },
            m(n, i) {
                for (let s = 0; s < r.length; s += 1) r[s] && r[s].m(n, i);
                z(n, e, i)
            },
            p(n, i) {
                if (i[0] & 131) {
                    o = le(n[0].custom);
                    let s;
                    for (s = 0; s < o.length; s += 1) {
                        let a = Hx(n, o, s);
                        r[s] ? r[s].p(a, i) : (r[s] = A2(a), r[s].c(), r[s].m(e.parentNode, e))
                    }
                    for (; s < r.length; s += 1) r[s].d(1);
                    r.length = o.length
                }
            },
            d(n) {
                n && I(e), Ue(r, n)
            }
        }
    }

    function A2(t) {
        let e, o = t[7](t[15][0](t[1])) + "",
            r, n = t[15][1] + "",
            i;
        return {
            c() {
                e = C("div"), r = B(o), i = B(n), F(e, "class", "textcyan")
            },
            m(s, a) {
                z(s, e, a), b(e, r), b(e, i)
            },
            p(s, a) {
                a[0] & 3 && o !== (o = s[7](s[15][0](s[1])) + "") && Q(r, o), a[0] & 1 && n !== (n = s[15][1] + "") && Q(i, n)
            },
            d(s) {
                s && I(e)
            }
        }
    }

    function S2(t) {
        let e, o = t[0].aoe.limit ? "Up to " + t[0].aoe.limit : "All",
            r, n, i = t[0].aoe.faction ? "allies" : "enemies",
            s, a, c = t[7](t[0].aoe.circleRadius) + "",
            l, f;
        return {
            c() {
                e = C("div"), r = B(o), n = Le(), s = B(i), a = B(" within "), l = B(c), f = B("m"), F(e, "class", "textpvp")
            },
            m(u, d) {
                z(u, e, d), b(e, r), b(e, n), b(e, s), b(e, a), b(e, l), b(e, f)
            },
            p(u, d) {
                d[0] & 1 && o !== (o = u[0].aoe.limit ? "Up to " + u[0].aoe.limit : "All") && Q(r, o), d[0] & 1 && i !== (i = u[0].aoe.faction ? "allies" : "enemies") && Q(s, i), d[0] & 1 && c !== (c = u[7](u[0].aoe.circleRadius) + "") && Q(l, c)
            },
            d(u) {
                u && I(e)
            }
        }
    }

    function P2(t) {
        let e, o, r, n = Z.items.book[t[0].id].description + "",
            i;
        return {
            c() {
                e = C("div"), o = C("u"), o.textContent = "Effect", r = B(": "), i = B(n), F(e, "class", "textsecondary pad svelte-14w0l4b")
            },
            m(s, a) {
                z(s, e, a), b(e, o), b(e, r), b(e, i)
            },
            p(s, a) {
                a[0] & 1 && n !== (n = Z.items.book[s[0].id].description + "") && Q(i, n)
            },
            d(s) {
                s && I(e)
            }
        }
    }

    function E2(t) {
        let e, o, r;
        return o = new ma({
            props: {
                level: t[1],
                skill: t[12]
            }
        }), {
            c() {
                e = C("div"), yt(o.$$.fragment), F(e, "class", "pad svelte-14w0l4b")
            },
            m(n, i) {
                z(n, e, i), bt(o, e, null), r = !0
            },
            p(n, i) {
                let s = {};
                i[0] & 2 && (s.level = n[1]), i[0] & 32 && (s.skill = n[12]), o.$set(s)
            },
            i(n) {
                r || (he(o.$$.fragment, n), r = !0)
            },
            o(n) {
                ye(o.$$.fragment, n), r = !1
            },
            d(n) {
                n && I(e), wt(o)
            }
        }
    }

    function x4(t) {
        let e, o, r, n, i = [v4, g4],
            s = [];

        function a(c, l) {
            return c[0].item ? 0 : 1
        }
        return o = a(t, [-1, -1]), r = s[o] = i[o](t), {
            c() {
                e = C("div"), r.c(), F(e, "class", "container textsecondary svelte-14w0l4b")
            },
            m(c, l) {
                z(c, e, l), s[o].m(e, null), n = !0
            },
            p(c, l) {
                let f = o;
                o = a(c, l), o === f ? s[o].p(c, l) : (Ft(), ye(s[f], 1, 1, () => {
                    s[f] = null
                }), Ct(), r = s[o], r ? r.p(c, l) : (r = s[o] = i[o](c), r.c()), he(r, 1), r.m(e, null))
            },
            i(c) {
                n || (he(r), n = !0)
            },
            o(c) {
                ye(r), n = !1
            },
            d(c) {
                c && I(e), s[o].d()
            }
        }
    }

    function b4(t, e, o) {
        let {
            skill: r
        } = e, {
            level: n
        } = e, {
            asItemDescription: i = !1
        } = e, {
            shift: s = !1
        } = e, a = {
            1: "Requires no target",
            16: "Self cast",
            256: "on Allies",
            4096: "on Enemy"
        }, c = (g, M = ae && ae.player) => {
            if (!M) return "?";
            let x = uv(g, M);
            return x % 1 === 0 ? x : x.toFixed(1)
        }, l = {
            0: "Melee attack",
            1: "Magic attack",
            2: "Heal",
            4: "Buff",
            5: "Stackable buff",
            6: "Ranged missile",
            7: "Ranged effect",
            9: "Effect"
        }, f = [], u, d = {}, m = g => {
            if (ae) return g.onCast && h("on cast", g.onCast, ae.player, n), g.onBlock && h("on block", g.onBlock, d, ae.player), g.onInterval && h(`every ${g.intervalDuration.toFixed(1)}s`, g.onInterval, d, ae.player, ae.player), g.onPermanent && h("permanently", () => ({
                id: g.onPermanent(ae.player),
                mode: 4
            }), ae.player, n), g
        }, h = (g, M, x, w, k) => {
            let U = M(x, w, k);
            if (!U || U === !0) return;
            let D = Object.assign({}, U);
            if (D.actiontype = g, D.parent || (D.parent = []), D.parent.push(r), D.mode === 4 || D.mode === 5) {
                let V = ml.get(D.id);
                f.unshift(m({
                    ...D,
                    ...V
                }))
            } else if (r.id === D.id) r.parent || (D.parent = void 0), o(0, r = {
                ...r,
                ...D
            });
            else {
                if (r.parent) {
                    let V = r.parent.find(fe => fe.id == D.id);
                    if (V) {
                        V.parent || (D.parent = void 0), Object.assign(V, D);
                        return
                    }
                }
                f.unshift(m(D))
            }
        };
        return t.$$set = g => {
            "skill" in g && o(0, r = g.skill), "level" in g && o(1, n = g.level), "asItemDescription" in g && o(2, i = g.asItemDescription), "shift" in g && o(9, s = g.shift)
        }, t.$$.update = () => {
            t.$$.dirty[0] & 539 && (o(4, d = {
                stacks: 1,
                level: n
            }), o(4, d.stacks = r.maxStacks ? s ? 1 : r.maxStacks : 1, d), o(0, r.stacks = d.stacks, r), o(5, f = []), r.parent || m(r), r.statsStatic && (o(3, u = new ua), r.statsStatic(d, u)))
        }, [r, n, i, u, d, f, a, c, l, s]
    }
    var ma = class extends nt {
            constructor(e) {
                super(), ut(this, e, b4, x4, xt, {
                    skill: 0,
                    level: 1,
                    asItemDescription: 2,
                    shift: 9
                }, null, [-1, -1])
            }
        },
        L2 = ma;
    var w4 = ["acaru", "achi", "acti", "ael", "aelle", "aelo", "aer", "aeri", "aero", "aesh", "aez", "aias", "aid", "aien", "aile", "aist", "akda", "ale", "alle", "alpha", "ambi", "amlug", "amne", "amni", "amo", "amoe", "amu", "ana", "andro", "ani", "anke", "anse", "anti", "aol", "aqua", "arae", "arc", "argo", "aria", "ariel", "aries", "arius", "arje", "ark", "arrow", "arti", "arvel", "arye", "aryn", "ash", "astri", "athen", "aukh", "aura", "aveni", "axe", "axna", "az", "azci", "azo", "azri", "azu", "azure", "bag", "bain", "bais", "bando", "bane", "baph", "bard", "baro", "baron", "bat", "battle", "beef", "ber", "bhol", "bhul", "bik", "bird", "bith", "blade", "blaze", "bloch", "blok", "blood", "bloom", "bo", "boink", "bokh", "bomb", "bone", "bonk", "bore", "borne", "boro", "bound", "bow", "brain", "brass", "brie", "brir", "bris", "broke", "bry", "bryr", "bubble", "bugo", "caen", "calm", "canis", "cape", "capri", "carp", "cary", "cassi", "cat", "cavi", "celo", "cern", "charm", "chea", "chef", "cherry", "ciea", "cili", "cill", "ciri", "claw", "clear", "cone", "contra", "copi", "corba", "corn", "craft", "cri", "cris", "cry", "cryo", "crypt", "cua", "cya", "cye", "cygni", "cyra", "daar", "dae", "daemo", "dagg", "dakk", "dale", "dali", "dalia", "dall", "dane", "dania", "danus", "dao", "daru", "dawn", "daz", "dazar", "dead", "deaf", "deci", "deer", "dei", "delia", "delra", "delta", "dema", "demo", "deo", "dero", "deus", "deux", "dhai", "dhar", "dhrar", "dhug", "dhyl", "dia", "dieri", "dio", "doe", "dog", "dohr", "doom", "dorr", "down", "drae", "drakh", "drakk", "dran", "dre", "drea", "dread", "dream", "dris", "drop", "druk", "dry", "dryd", "dryn", "dryr", "dryto", "duin", "duirn", "duke", "duo", "dusk", "dy", "dya", "dyas", "dysra", "eago", "eal", "earl", "eas", "echo", "ecto", "edo", "eerie", "eevo", "egg", "ego", "eina", "eine", "eiri", "elia", "elle", "elma", "elo", "elyo", "elyor", "elys", "endo", "equi", "equu", "erdy", "eris", "erra", "erri", "erth", "ervi", "essa", "eua", "euda", "eudo", "eumo", "evack", "eve", "eye", "eyre", "fa", "fade", "fael", "fai", "fang", "far", "fare", "fauca", "feia", "filau", "fire", "fish", "fizz", "flame", "flero", "flesh", "flock", "foe", "fois", "forh", "fous", "fray", "fror", "frost", "fulvu", "fume", "fur", "fyn", "fyr", "fyre", "gabo", "gaia", "galaz", "gali", "galo", "gami", "gamma", "gax", "gaz", "gecko", "geo", "ghal", "ghaz", "ghi", "ghiri", "ghost", "ghyr", "gias", "giko", "gin", "gio", "giri", "git", "giu", "glass", "glee", "glerk", "gley", "glio", "gloo", "glow", "gnci", "gnorr", "godh", "gog", "gogu", "gold", "gonda", "goner", "gonzu", "gore", "grand", "grape", "gras", "grato", "grauf", "graz", "grel", "grex", "grim", "grin", "grind", "groku", "grow", "gru", "guac", "gui", "guiza", "guke", "gulum", "gun", "gurk", "guru", "gwen", "gyn", "gyrna", "hag", "haju", "hammer", "hari", "hatch", "hate", "heim", "heir", "heis", "hek", "hell", "helm", "hera", "hercu", "heria", "hex", "hexa", "hexi", "hexo", "hirt", "hole", "homa", "hong", "horn", "horo", "howl", "hydra", "hysta", "iar", "ice", "ida", "idra", "iele", "ievi", "ieze", "igni", "ikto", "ilae", "ili", "illae", "ilno", "ilye", "inde", "ink", "int", "inte", "intra", "intro", "iola", "iope", "ior", "iqra", "ira", "iraei", "irag", "irius", "iuna", "iyja", "iyra", "jaed", "jard", "jasia", "jassi", "jerky", "jiji", "jinx", "joy", "juan", "jui", "jurio", "kae", "kaga", "kai", "kar", "kash", "kaz", "kei", "kery", "key", "khad", "khon", "khuza", "khyr", "klee", "klip", "knight", "knod", "kom", "kotr", "krata", "kreo", "kriod", "kron", "krono", "kuhr", "kuvok", "kwyl", "kyri", "kyto", "la", "lach", "lae", "laea", "laer", "laeth", "lair", "lamb", "lanc", "lase", "laude", "laza", "lea", "lee", "lei", "leif", "lenai", "lenda", "lene", "leo", "lere", "lessa", "lethe", "lex", "lhor", "li", "lia", "libra", "liel", "lieu", "life", "light", "limbo", "limp", "lingo", "lio", "lirai", "liro", "lith", "llien", "lloe", "lo", "lock", "lofty", "loi", "lone", "lopo", "lore", "lort", "love", "low", "lozz", "lua", "luim", "lumo", "luna", "lush", "lust", "lya", "lymph", "lynx", "lyra", "lyre", "lys", "lyvi", "mae", "mage", "magi", "magno", "maie", "major", "mali", "malo", "manca", "mane", "mango", "manto", "marco", "marrow", "marsh", "max", "medi", "medu", "meen", "mel", "melia", "mell", "melng", "melon", "meph", "merc", "mese", "meso", "metal", "miki", "mince", "mini", "miri", "misia", "mistra", "mizu", "mmior", "mo", "mock", "moi", "moor", "morb", "more", "morgh", "morja", "morl", "moss", "moza", "mozo", "mroer", "mua", "muami", "mugg", "muku", "mulae", "muno", "muo", "mutt", "muzor", "mydra", "myr", "myri", "myth", "nae", "nai", "nail", "nando", "nari", "naul", "nava", "naz", "neazu", "ned", "neia", "neme", "nemo", "neo", "nep", "nera", "nero", "night", "nill", "niroi", "nise", "niye", "nobnar", "noi", "nose", "nox", "noxi", "nua", "nuanyi", "nuck", "nuk", "numzu", "nye", "nyel", "nymph", "nyri", "nyx", "oah", "oak", "ocea", "ocia", "octa", "octo", "odd", "odin", "odio", "odis", "odru", "oghm", "ogu", "oia", "oisse", "ola", "olg", "olle", "omega", "omni", "oni", "only", "onos", "onty", "oper", "ophe", "ophi", "opi", "orb", "orc", "ordi", "ore", "orio", "orlo", "ouch", "our", "outro", "over", "owl", "ozy", "pain", "pais", "pale", "paleo", "path", "paw", "paylo", "peak", "pear", "pearl", "pecto", "peia", "peli", "pemo", "pepe", "peri", "perlo", "perse", "pery", "peso", "phae", "phar", "phau", "pheh", "pheia", "pheus", "phi", "phiel", "phine", "phio", "phoi", "phono", "phy", "phyr", "phyre", "pika", "pilia", "pine", "piol", "piuc", "plor", "pluto", "poe", "pore", "pox", "prae", "pres", "prio", "pseu", "psy", "purla", "py", "pyro", "pytho", "pyxi", "qaas", "qae", "qama", "qas", "qash", "qasi", "qaso", "qasu", "qi", "qindi", "qis", "qish", "qisi", "qo", "qos", "qoui", "qry", "qu", "qua", "quas", "quasi", "quaso", "quila", "quo", "quoi", "quon", "qurza", "quti", "quul", "qwert", "qyph", "rael", "raer", "raes", "raesh", "raeth", "rage", "rai", "raor", "rash", "rath", "raven", "razz", "reap", "reav", "reens", "reme", "reo", "rethe", "reve", "rhor", "rhya", "riad", "riel", "rienn", "rift", "rind", "rine", "ring", "rio", "rismo", "rissa", "riznu", "roar", "rock", "roe", "rof", "rog", "rol", "roll", "rolu", "rone", "rori", "rose", "rosi", "roth", "rune", "runi", "ruth", "rya", "ryas", "rym", "rynn", "ryo", "sael", "saew", "sai", "sale", "salt", "salty", "sarya", "sau", "sauce", "sauth", "scaf", "scar", "sces", "schi", "scia", "scorp", "scum", "sea", "see", "seir", "sela", "semi", "seus", "shade", "shard", "shear", "shemu", "shie", "shine", "shon", "shrub", "shuk", "shur", "sia", "sie", "sigma", "sil", "silk", "sill", "sima", "sirie", "skin", "skull", "sky", "smith", "so", "soi", "solar", "soul", "spear", "speed", "splint", "spring", "stag", "star", "stone", "storm", "stout", "stra", "strau", "stris", "styx", "sub", "swift", "sword", "sya", "syl", "sys", "tae", "taer", "tala", "tale", "tali", "talle", "tan", "tango", "tarmi", "tarre", "tau", "taug", "tear", "teava", "teni", "terra", "teu", "teus", "thae", "than", "thano", "thau", "theia", "theo", "thera", "thin", "thorn", "thras", "thro", "thry", "thual", "thuen", "thye", "thyn", "tia", "tiara", "tiik", "tike", "tilre", "tima", "timni", "tiri", "to", "tona", "tone", "tor", "toxi", "tran", "tree", "tren", "tri", "trila", "trin", "tris", "triss", "trith", "trog", "troll", "trove", "true", "tryl", "tryn", "tusk", "tusso", "tuts", "tyr", "tyra", "tyrg", "ues", "ugly", "ui", "uie", "uipho", "ujuy", "uku", "ulvu", "under", "uni", "uozi", "up", "urlu", "uro", "us", "uth", "utha", "utta", "uugu", "uvy", "vaal", "vae", "vaen", "vaez", "vain", "vang", "varo", "varr", "vat", "vayne", "vazu", "veba", "veda", "veni", "vephie", "vesla", "veth", "vigo", "virgo", "vitro", "vizi", "vlor", "voda", "void", "vois", "volno", "volo", "volt", "vomi", "vonth", "vord", "vors", "vox", "vugz", "vulen", "vulpe", "waaz", "wake", "war", "wasu", "weap", "wei", "wenk", "willo", "wind", "wing", "wirya", "wise", "witch", "wix", "wolf", "world", "wrath", "xas", "xhan", "xhi", "xih", "xilo", "xio", "xiza", "xor", "xugu", "xuk", "xuxu", "xyli", "yae", "yare", "yari", "yeno", "yir", "yiryo", "ylla", "yo", "yoer", "yore", "yrgo", "yrie", "yrni", "ytia", "zak", "zal", "zaph", "zaro", "zedh", "zee", "zel", "zele", "zeli", "zelph", "zera", "zest", "zhem", "zia", "zog", "zoi", "zon", "zort", "zoti", "zug", "zul", "zur", "zutu", "zuvi", "zvon", "zzuk"],
        D2 = (t = 2, e = 6, o = 8) => {
            let r = Math.min(oc(t, e), oc(t, e)),
                n = "";
            for (let i = r; i > 0 && n.length < o; --i) n += ns(w4);
            return n.charAt(0).toUpperCase() + n.slice(1)
        };

    function T2(t, e, o) {
        let r = t.slice();
        return r[26] = e[o], r[25] = o, r
    }

    function I2(t, e, o) {
        let r = t.slice();
        return r[20] = e[o], r[22] = o, r
    }

    function z2(t, e, o) {
        let r = t.slice();
        return r[23] = e[o], r[25] = o, r
    }

    function _4(t) {
        let e, o, r, n, i, s, a, c, l, f, u = {
            ctx: t,
            current: null,
            token: null,
            hasCatch: !0,
            pending: C4,
            then: F4,
            catch: k4,
            value: 28,
            blocks: [, , , ]
        };
        return Mr(a = t[5], u), {
            c() {
                e = C("h3"), e.textContent = `${Z.ui.charmenu.create.enterName}`, o = C("p"), o.textContent = `${Z.ui.charmenu.create.nameReq}`, r = C("div"), n = C("input"), i = C("div"), i.textContent = "\u{1F3B2}", s = C("div"), u.block.c(), F(e, "class", "textwhite"), F(o, "class", "textprimary"), F(n, "maxlength", "16"), F(n, "type", "text"), F(n, "placeholder", "Name"), F(i, "class", "btn green"), F(r, "class", "namearea svelte-etr17z"), F(s, "class", "createResponse svelte-etr17z")
            },
            m(d, m) {
                z(d, e, m), z(d, o, m), z(d, r, m), b(r, n), wr(n, t[2]), b(r, i), z(d, s, m), u.block.m(s, u.anchor = null), u.mount = () => s, u.anchor = null, c = !0, l || (f = [De(n, "input", t[16]), De(i, "click", t[8])], l = !0)
            },
            p(d, m) {
                t = d, m & 4 && n.value !== t[2] && wr(n, t[2]), u.ctx = t, m & 32 && a !== (a = t[5]) && Mr(a, u) || wi(u, t, m)
            },
            i(d) {
                c || (he(u.block), c = !0)
            },
            o(d) {
                for (let m = 0; m < 3; m += 1) {
                    let h = u.blocks[m];
                    ye(h)
                }
                c = !1
            },
            d(d) {
                d && (I(e), I(o), I(r), I(s)), u.block.d(), u.token = null, u = null, l = !1, ft(f)
            }
        }
    }

    function y4(t) {
        let e, o = (t[1] >= 0 ? "Faction: " + Z.factions[t[1]].name : Z.ui.charmenu.create.selectFaction) + "",
            r, n, i = t[6] === t[1] ? " (Recommended)" : "",
            s, a, c, l = (t[1] >= 0 ? Z.factions[t[1]].description : Z.ui.charmenu.create.pressIcon) + "",
            f, u = le(Z.factions),
            d = [];
        for (let m = 0; m < u.length; m += 1) d[m] = V2(T2(t, u, m));
        return {
            c() {
                e = C("h3"), r = B(o), n = C("span"), s = B(i), a = C("div");
                for (let m = 0; m < d.length; m += 1) d[m].c();
                c = C("p"), f = B(l), F(n, "class", "textgreen"), F(e, "class", "textwhite"), F(a, "class", "selectbtn svelte-etr17z"), He(a, "grid-template-columns", "repeat(2,auto)"), F(c, "class", "textprimary descr svelte-etr17z")
            },
            m(m, h) {
                z(m, e, h), b(e, r), b(e, n), b(n, s), z(m, a, h);
                for (let g = 0; g < d.length; g += 1) d[g] && d[g].m(a, null);
                z(m, c, h), b(c, f)
            },
            p(m, h) {
                if (h & 2 && o !== (o = (m[1] >= 0 ? "Faction: " + Z.factions[m[1]].name : Z.ui.charmenu.create.selectFaction) + "") && Q(r, o), h & 66 && i !== (i = m[6] === m[1] ? " (Recommended)" : "") && Q(s, i), h & 2) {
                    u = le(Z.factions);
                    let g;
                    for (g = 0; g < u.length; g += 1) {
                        let M = T2(m, u, g);
                        d[g] ? d[g].p(M, h) : (d[g] = V2(M), d[g].c(), d[g].m(a, null))
                    }
                    for (; g < d.length; g += 1) d[g].d(1);
                    d.length = u.length
                }
                h & 2 && l !== (l = (m[1] >= 0 ? Z.factions[m[1]].description : Z.ui.charmenu.create.pressIcon) + "") && Q(f, l)
            },
            i: X,
            o: X,
            d(m) {
                m && (I(e), I(a), I(c)), Ue(d, m)
            }
        }
    }

    function M4(t) {
        let e, o = (t[0] >= 0 ? "Class: " + Z.classes[t[0]].name : Z.ui.charmenu.create.selectClass) + "",
            r, n, i, s = (t[0] >= 0 ? Z.classes[t[0]].description : Z.ui.charmenu.create.pressIcon) + "",
            a, c, l = le(Z.classes),
            f = [];
        for (let d = 0; d < l.length; d += 1) f[d] = R2(z2(t, l, d));
        let u = t[0] >= 0 && U2(t);
        return {
            c() {
                e = C("h3"), r = B(o), n = C("div");
                for (let d = 0; d < f.length; d += 1) f[d].c();
                u && u.c(), i = C("p"), a = B(s), F(e, "class", "textwhite"), F(n, "class", "selectbtn svelte-etr17z"), He(n, "grid-template-columns", "repeat(4,auto)"), F(i, "class", "textprimary descr svelte-etr17z")
            },
            m(d, m) {
                z(d, e, m), b(e, r), z(d, n, m);
                for (let h = 0; h < f.length; h += 1) f[h] && f[h].m(n, null);
                u && u.m(d, m), z(d, i, m), b(i, a), c = !0
            },
            p(d, m) {
                if ((!c || m & 1) && o !== (o = (d[0] >= 0 ? "Class: " + Z.classes[d[0]].name : Z.ui.charmenu.create.selectClass) + "") && Q(r, o), m & 1) {
                    l = le(Z.classes);
                    let h;
                    for (h = 0; h < l.length; h += 1) {
                        let g = z2(d, l, h);
                        f[h] ? f[h].p(g, m) : (f[h] = R2(g), f[h].c(), f[h].m(n, null))
                    }
                    for (; h < f.length; h += 1) f[h].d(1);
                    f.length = l.length
                }
                d[0] >= 0 ? u ? (u.p(d, m), m & 1 && he(u, 1)) : (u = U2(d), u.c(), he(u, 1), u.m(i.parentNode, i)) : u && (Ft(), ye(u, 1, 1, () => {
                    u = null
                }), Ct()), (!c || m & 1) && s !== (s = (d[0] >= 0 ? Z.classes[d[0]].description : Z.ui.charmenu.create.pressIcon) + "") && Q(a, s)
            },
            i(d) {
                c || (he(u), c = !0)
            },
            o(d) {
                ye(u), c = !1
            },
            d(d) {
                d && (I(e), I(n), I(i)), Ue(f, d), u && u.d(d)
            }
        }
    }

    function k4(t) {
        let e;
        return {
            c() {
                e = B("Error")
            },
            m(o, r) {
                z(o, e, r)
            },
            p: X,
            i: X,
            o: X,
            d(o) {
                o && I(e)
            }
        }
    }

    function F4(t) {
        let e;
        return {
            c() {
                e = B(t[4])
            },
            m(o, r) {
                z(o, e, r)
            },
            p(o, r) {
                r & 16 && Q(e, o[4])
            },
            i: X,
            o: X,
            d(o) {
                o && I(e)
            }
        }
    }

    function C4(t) {
        let e, o;
        return e = new xr({}), {
            c() {
                yt(e.$$.fragment)
            },
            m(r, n) {
                bt(e, r, n), o = !0
            },
            p: X,
            i(r) {
                o || (he(e.$$.fragment, r), o = !0)
            },
            o(r) {
                ye(e.$$.fragment, r), o = !1
            },
            d(r) {
                wt(e, r)
            }
        }
    }

    function A4(t) {
        let e, o, r, n, i;

        function s() {
            return t[15](t[25])
        }
        return {
            c() {
                e = C("img"), F(e, "class", o = "btn icon " + (t[1] == t[25] ? "grey selec" : "") + " svelte-etr17z"), $e(e.src, r = "/data/ui/factions/" + t[25] + "." + tr) || F(e, "src", r)
            },
            m(a, c) {
                z(a, e, c), n || (i = De(e, "click", s), n = !0)
            },
            p(a, c) {
                t = a, c & 2 && o !== (o = "btn icon " + (t[1] == t[25] ? "grey selec" : "") + " svelte-etr17z") && F(e, "class", o)
            },
            d(a) {
                a && I(e), n = !1, i()
            }
        }
    }

    function V2(t) {
        let e, o = t[25] < 2 && A4(t);
        return {
            c() {
                o && o.c(), e = pe()
            },
            m(r, n) {
                o && o.m(r, n), z(r, e, n)
            },
            p(r, n) {
                r[25] < 2 && o.p(r, n)
            },
            d(r) {
                r && I(e), o && o.d(r)
            }
        }
    }

    function S4(t) {
        let e, o, r, n, i;

        function s() {
            return t[13](t[25])
        }
        return {
            c() {
                e = C("img"), F(e, "class", o = "btn icon " + (t[0] == t[25] ? "grey selec" : "") + " svelte-etr17z"), $e(e.src, r = "/data/ui/classes/" + t[25] + "." + tr) || F(e, "src", r)
            },
            m(a, c) {
                z(a, e, c), n || (i = De(e, "click", s), n = !0)
            },
            p(a, c) {
                t = a, c & 1 && o !== (o = "btn icon " + (t[0] == t[25] ? "grey selec" : "") + " svelte-etr17z") && F(e, "class", o)
            },
            d(a) {
                a && I(e), n = !1, i()
            }
        }
    }

    function R2(t) {
        let e, o = t[25] < 4 && S4(t);
        return {
            c() {
                o && o.c(), e = pe()
            },
            m(r, n) {
                o && o.m(r, n), z(r, e, n)
            },
            p(r, n) {
                r[25] < 4 && o.p(r, n)
            },
            d(r) {
                r && I(e), o && o.d(r)
            }
        }
    }

    function U2(t) {
        let e, o, r, n = le(Array.from(vo).map(j2).sort(q2).filter(t[14])),
            i = [];
        for (let a = 0; a < n.length; a += 1) i[a] = B2(I2(t, n, a));
        let s = a => ye(i[a], 1, 1, () => {
            i[a] = null
        });
        return {
            c() {
                e = C("p"), e.textContent = "Available Skills", o = C("div");
                for (let a = 0; a < i.length; a += 1) i[a].c();
                F(e, "class", "textwhite"), He(o, "display", "grid"), He(o, "grid-gap", "2px"), He(o, "grid-template-columns", "repeat(8, auto)"), He(o, "font-size", "14px"), He(o, "text-align", "left")
            },
            m(a, c) {
                z(a, e, c), z(a, o, c);
                for (let l = 0; l < i.length; l += 1) i[l] && i[l].m(o, null);
                r = !0
            },
            p(a, c) {
                if (c & 1) {
                    n = le(Array.from(vo).map(j2).sort(q2).filter(a[14]));
                    let l;
                    for (l = 0; l < n.length; l += 1) {
                        let f = I2(a, n, l);
                        i[l] ? (i[l].p(f, c), he(i[l], 1)) : (i[l] = B2(f), i[l].c(), he(i[l], 1), i[l].m(o, null))
                    }
                    for (Ft(), l = n.length; l < i.length; l += 1) s(l);
                    Ct()
                }
            },
            i(a) {
                if (!r) {
                    for (let c = 0; c < n.length; c += 1) he(i[c]);
                    r = !0
                }
            },
            o(a) {
                i = i.filter(Boolean);
                for (let c = 0; c < i.length; c += 1) ye(i[c]);
                r = !1
            },
            d(a) {
                a && (I(e), I(o)), Ue(i, a)
            }
        }
    }

    function P4(t) {
        let e, o;
        return e = new L2({
            props: {
                level: 1,
                skill: t[20]
            }
        }), {
            c() {
                yt(e.$$.fragment)
            },
            m(r, n) {
                bt(e, r, n), o = !0
            },
            p(r, n) {
                let i = {};
                n & 1 && (i.skill = r[20]), e.$set(i)
            },
            i(r) {
                o || (he(e.$$.fragment, r), o = !0)
            },
            o(r) {
                ye(e.$$.fragment, r), o = !1
            },
            d(r) {
                wt(e, r)
            }
        }
    }

    function B2(t) {
        let e, o;
        return e = new fv({
            props: {
                img: Ur(t[20].id),
                $$slots: {
                    default: [P4]
                },
                $$scope: {
                    ctx: t
                }
            }
        }), {
            c() {
                yt(e.$$.fragment)
            },
            m(r, n) {
                bt(e, r, n), o = !0
            },
            p(r, n) {
                let i = {};
                n & 1 && (i.img = Ur(r[20].id)), n & 536870913 && (i.$$scope = {
                    dirty: n,
                    ctx: r
                }), e.$set(i)
            },
            i(r) {
                o || (he(e.$$.fragment, r), o = !0)
            },
            o(r) {
                ye(e.$$.fragment, r), o = !1
            },
            d(r) {
                wt(e, r)
            }
        }
    }

    function E4(t) {
        let e, o, r, n, i, s, a, c = Z.ui.ok + "",
            l, f, u, d, m, h = [M4, y4, _4],
            g = [];

        function M(x, w) {
            return x[9][x[3]] == "class" ? 0 : x[9][x[3]] == "faction" ? 1 : x[9][x[3]] == "name" ? 2 : -1
        }
        return ~(r = M(t, -1)) && (n = g[r] = h[r](t)), {
            c() {
                e = C("h2"), e.textContent = `${Z.ui.charmenu.create.title}`, o = Le(), n && n.c(), i = C("div"), s = C("div"), s.textContent = `${Z.ui.back}`, a = C("div"), l = B(c), F(e, "class", "textprimary"), F(s, "class", "btn border grey svelte-etr17z"), F(a, "class", f = "btn " + (t[7] ? "border primary" : "disabled") + " svelte-etr17z"), F(i, "class", "grid two navbtn textcenter svelte-etr17z")
            },
            m(x, w) {
                z(x, e, w), z(x, o, w), ~r && g[r].m(x, w), z(x, i, w), b(i, s), b(i, a), b(a, l), u = !0, d || (m = [De(s, "click", t[11]), De(a, "click", t[10])], d = !0)
            },
            p(x, [w]) {
                let k = r;
                r = M(x, w), r === k ? ~r && g[r].p(x, w) : (n && (Ft(), ye(g[k], 1, 1, () => {
                    g[k] = null
                }), Ct()), ~r ? (n = g[r], n ? n.p(x, w) : (n = g[r] = h[r](x), n.c()), he(n, 1), n.m(i.parentNode, i)) : n = null), (!u || w & 128 && f !== (f = "btn " + (x[7] ? "border primary" : "disabled") + " svelte-etr17z")) && F(a, "class", f)
            },
            i(x) {
                u || (he(n), u = !0)
            },
            o(x) {
                ye(n), u = !1
            },
            d(x) {
                x && (I(e), I(o), I(i)), ~r && g[r].d(x), d = !1, ft(m)
            }
        }
    }
    var j2 = t => t[1],
        q2 = (t, e) => t.minlevel - e.minlevel;

    function L4(t, e, o) {
        let r, n;
        ae.player || (ae.player = {
            stats: {
                getDamageRoll: () => 100
            }
        });
        let i = Qt(),
            s, a, c = "",
            l = () => {
                o(2, c = D2())
            },
            f = ["class", "faction", "name"],
            u = 0,
            d = () => {
                n && u < f.length - 1 ? o(3, u++, u) : n && o(5, g = M())
            },
            m = () => {
                u > 0 ? o(3, u--, u) : i("message", {
                    state: "charlist"
                })
            },
            h = "",
            g, M = async () => {
                o(7, n = !1);
                let V = await rr("/api/player/create", r);
                V.result == "ok" ? (setTimeout(() => i("message", {
                    state: "charlist"
                }), 1e3), o(4, h = "\u2714\uFE0F")) : o(4, h = V.result)
            }, x = null;
        vn(() => {
            fetch("/api/world/recfaction").then(V => V.json()).then(V => {
                if (V.result == "error") throw null;
                o(6, x = V.result), o(1, a = x)
            }).catch(V => {})
        });
        let w = V => o(0, s = V),
            k = V => !V.engineOnly && V.class == s,
            U = V => o(1, a = V);

        function D() {
            c = this.value, o(2, c)
        }
        return t.$$.update = () => {
            t.$$.dirty & 7 && o(12, r = {
                class: s,
                faction: a,
                name: c == "" ? void 0 : c
            }), t.$$.dirty & 4104 && o(7, n = r[f[u]] !== void 0)
        }, [s, a, c, u, h, g, x, n, l, f, d, m, r, w, k, U, D]
    }
    var pl = class extends nt {
            constructor(e) {
                super(), ut(this, e, L4, E4, xt, {})
            }
        },
        N2 = pl;
    var O2 = t => {
        let e = ~~(t / 86400),
            o = ~~(t / (60 * 60) % 24),
            r = ~~(t / 60 % 60),
            n = ~~(t % 60);
        return `${e?e+"d ":""}${o?o+"h ":""}${r?r+"m ":""}${n?n+"s":""}`
    };

    function W2(t, e, o) {
        let r = t.slice();
        return r[19] = e[o], r
    }

    function G2(t, e, o) {
        let r = t.slice();
        return r[19] = e[o], r
    }

    function $2(t, e, o) {
        let r = t.slice();
        return r[19] = e[o], r
    }

    function H2(t, e, o) {
        let r = t.slice();
        return r[19] = e[o], r
    }

    function Y2(t, e, o) {
        let r = t.slice();
        return r[19] = e[o], r
    }

    function X2(t, e, o) {
        let r = t.slice();
        return r[19] = e[o], r
    }

    function Q2(t, e, o) {
        let r = t.slice();
        return r[19] = e[o], r
    }

    function D4(t) {
        let e, o, r, n, i = [N4, q4, j4, B4, U4, R4, V4, z4, I4],
            s = [];

        function a(c, l) {
            return c[2] === "signuppanel" ? 0 : c[2] === "awaiting" ? 1 : c[2] === "secret" ? 2 : c[2] === "charlist" && c[8] ? 3 : c[2] === "create" && c[8] ? 4 : c[2] === "delete" && c[8] ? 5 : c[2] === "lock" && c[8] ? 6 : c[2] === "error" ? 7 : 8
        }
        return o = a(t, [-1, -1]), r = s[o] = i[o](t), {
            c() {
                e = C("div"), r.c(), F(e, "class", "fadeIn panel-black mainpanel svelte-1ua636q")
            },
            m(c, l) {
                z(c, e, l), s[o].m(e, null), n = !0
            },
            p(c, l) {
                let f = o;
                o = a(c, l), o === f ? s[o].p(c, l) : (Ft(), ye(s[f], 1, 1, () => {
                    s[f] = null
                }), Ct(), r = s[o], r ? r.p(c, l) : (r = s[o] = i[o](c), r.c()), he(r, 1), r.m(e, null))
            },
            i(c) {
                n || (he(r), n = !0)
            },
            o(c) {
                ye(r), n = !1
            },
            d(c) {
                c && I(e), s[o].d()
            }
        }
    }

    function T4(t) {
        let e, o, r;
        return {
            c() {
                e = C("div"), e.textContent = "SIGN UP", F(e, "class", "btn signupbtn svelte-1ua636q")
            },
            m(n, i) {
                z(n, e, i), o || (r = De(e, "click", t[12]), o = !0)
            },
            p: X,
            i: X,
            o: X,
            d(n) {
                n && I(e), o = !1, r()
            }
        }
    }

    function I4(t) {
        let e, o, r;
        return o = new xr({}), {
            c() {
                e = C("div"), yt(o.$$.fragment), He(e, "width", "300px")
            },
            m(n, i) {
                z(n, e, i), bt(o, e, null), r = !0
            },
            p: X,
            i(n) {
                r || (he(o.$$.fragment, n), r = !0)
            },
            o(n) {
                ye(o.$$.fragment, n), r = !1
            },
            d(n) {
                n && I(e), wt(o)
            }
        }
    }

    function z4(t) {
        let e;
        return {
            c() {
                e = C("div"), e.innerHTML = '<p class="textprimary textcenter">Network currently busy, please try again later.</p>', He(e, "width", "300px")
            },
            m(o, r) {
                z(o, e, r)
            },
            p: X,
            i: X,
            o: X,
            d(o) {
                o && I(e)
            }
        }
    }

    function V4(t) {
        let e, o, r, n, i, s, a, c;
        return {
            c() {
                e = C("div"), o = C("h3"), o.textContent = "Account playable in", r = C("h1"), n = B(t[4]), i = C("p"), s = B("Reason: "), a = C("span"), c = B(t[3]), F(o, "class", "textprimary textcenter"), F(r, "class", "textgreen textcenter"), F(a, "class", "textwhite"), F(i, "class", "textprimary textcenter"), He(e, "width", "300px")
            },
            m(l, f) {
                z(l, e, f), b(e, o), b(e, r), b(r, n), b(e, i), b(i, s), b(i, a), b(a, c)
            },
            p(l, f) {
                f[0] & 16 && Q(n, l[4]), f[0] & 8 && Q(c, l[3])
            },
            i: X,
            o: X,
            d(l) {
                l && I(e)
            }
        }
    }

    function R4(t) {
        let e, o, r;
        return o = new rv({
            props: {
                detail: t[1]
            }
        }), o.$on("message", t[10]), {
            c() {
                e = C("div"), yt(o.$$.fragment), He(e, "width", "300px")
            },
            m(n, i) {
                z(n, e, i), bt(o, e, null), r = !0
            },
            p(n, i) {
                let s = {};
                i[0] & 2 && (s.detail = n[1]), o.$set(s)
            },
            i(n) {
                r || (he(o.$$.fragment, n), r = !0)
            },
            o(n) {
                ye(o.$$.fragment, n), r = !1
            },
            d(n) {
                n && I(e), wt(o)
            }
        }
    }

    function U4(t) {
        let e, o, r;
        return o = new N2({}), o.$on("message", t[10]), {
            c() {
                e = C("div"), yt(o.$$.fragment), He(e, "width", "350px")
            },
            m(n, i) {
                z(n, e, i), bt(o, e, null), r = !0
            },
            p: X,
            i(n) {
                r || (he(o.$$.fragment, n), r = !0)
            },
            o(n) {
                ye(o.$$.fragment, n), r = !1
            },
            d(n) {
                n && I(e), wt(o)
            }
        }
    }

    function B4(t) {
        let e, o;
        return e = new tv({
            props: {
                elixir: t[5]
            }
        }), e.$on("message", t[10]), {
            c() {
                yt(e.$$.fragment)
            },
            m(r, n) {
                bt(e, r, n), o = !0
            },
            p(r, n) {
                let i = {};
                n[0] & 32 && (i.elixir = r[5]), e.$set(i)
            },
            i(r) {
                o || (he(e.$$.fragment, r), o = !0)
            },
            o(r) {
                ye(e.$$.fragment, r), o = !1
            },
            d(r) {
                wt(e, r)
            }
        }
    }

    function j4(t) {
        let e, o, r, n, i = Math.round(1 / t[7].dtLow) + "",
            s, a, c, l = Math.round(1 / t[7].dtAvg) + "",
            f, u, d, m = Math.round(1 / t[7].dtHigh) + "",
            h, g, M, x;
        return {
            c() {
                e = C("h5"), e.textContent = "\u{1F9D9}\u200D\u2642\uFE0F Secret debug menu", o = C("div"), r = C("div"), n = B("FPS Low "), s = B(i), a = C("div"), c = B("FPS Avg "), f = B(l), u = C("div"), d = B("FPS Max "), h = B(m), g = C("small"), g.textContent = "\u2190 Back", F(e, "class", "textprimary"), He(o, "margin", "2em 0"), He(o, "font-size", "small"), F(g, "class", "btn invi textgrey")
            },
            m(w, k) {
                z(w, e, k), z(w, o, k), b(o, r), b(r, n), b(r, s), b(o, a), b(a, c), b(a, f), b(o, u), b(u, d), b(u, h), z(w, g, k), M || (x = De(g, "click", t[14]), M = !0)
            },
            p(w, k) {
                k[0] & 128 && i !== (i = Math.round(1 / w[7].dtLow) + "") && Q(s, i), k[0] & 128 && l !== (l = Math.round(1 / w[7].dtAvg) + "") && Q(f, l), k[0] & 128 && m !== (m = Math.round(1 / w[7].dtHigh) + "") && Q(h, m)
            },
            i: X,
            o: X,
            d(w) {
                w && (I(e), I(o), I(g)), M = !1, x()
            }
        }
    }

    function q4(t) {
        let e;
        return {
            c() {
                e = C("div"), e.innerHTML = '<h1 class="title success svelte-1ua636q">Success!</h1><p>Thank you for signing up! Your account has not yet been unlocked. Please check back in the future for PTR tests.</p><a href="https://discord.gg/hordes" target="_blank" rel="noopener"><img class="social svelte-1ua636q" src="/data/ui/interface/discord-icon.svg?v=8926940"/></a>', He(e, "width", "300px")
            },
            m(o, r) {
                z(o, e, r)
            },
            p: X,
            i: X,
            o: X,
            d(o) {
                o && I(e)
            }
        }
    }

    function N4(t) {
        let e, o, r, n, i, s, a, c, l;
        return n = new Hg({}), n.$on("signin", t[9]), {
            c() {
                e = C("div"), o = C("h2"), o.textContent = "Sign Up", r = C("p"), r.textContent = "Create or log in to your Hordes.io account.", yt(n.$$.fragment), i = C("p"), s = C("small"), s.textContent = "\u2190 Back", F(o, "class", "textprimary"), F(r, "class", "textgrey"), F(s, "class", "btn invi textgrey marg-top"), He(e, "width", "300px")
            },
            m(f, u) {
                z(f, e, u), b(e, o), b(e, r), bt(n, e, null), b(e, i), b(i, s), a = !0, c || (l = De(s, "click", t[13]), c = !0)
            },
            p: X,
            i(f) {
                a || (he(n.$$.fragment, f), a = !0)
            },
            o(f) {
                ye(n.$$.fragment, f), a = !1
            },
            d(f) {
                f && I(e), wt(n), c = !1, l()
            }
        }
    }

    function Z2(t) {
        let e, o, r, n, i, s, a, c, l, f, u = t[6].version && K2(t),
            d = t[6].description && J2(t),
            m = le(t[6].archer || []),
            h = [];
        for (let P = 0; P < m.length; P += 1) h[P] = e3(Q2(t, m, P));
        let g = le(t[6].mage || []),
            M = [];
        for (let P = 0; P < g.length; P += 1) M[P] = t3(X2(t, g, P));
        let x = le(t[6].warrior || []),
            w = [];
        for (let P = 0; P < x.length; P += 1) w[P] = o3(Y2(t, x, P));
        let k = le(t[6].shaman || []),
            U = [];
        for (let P = 0; P < k.length; P += 1) U[P] = r3(H2(t, k, P));
        let D = le(t[6].general || []),
            V = [];
        for (let P = 0; P < D.length; P += 1) V[P] = n3($2(t, D, P));
        let fe = le(t[6].ui || []),
            N = [];
        for (let P = 0; P < fe.length; P += 1) N[P] = i3(G2(t, fe, P));
        let O = le(t[6].bugs || []),
            ne = [];
        for (let P = 0; P < O.length; P += 1) ne[P] = s3(W2(t, O, P));
        let J = t[6].motd.notice && a3(t),
            re = t[6].motd.maintext && c3(t);
        return {
            c() {
                u && u.c(), e = pe(), d && d.c(), o = C("div");
                for (let P = 0; P < h.length; P += 1) h[P].c();
                r = pe();
                for (let P = 0; P < M.length; P += 1) M[P].c();
                n = pe();
                for (let P = 0; P < w.length; P += 1) w[P].c();
                i = pe();
                for (let P = 0; P < U.length; P += 1) U[P].c();
                s = pe();
                for (let P = 0; P < V.length; P += 1) V[P].c();
                a = pe();
                for (let P = 0; P < N.length; P += 1) N[P].c();
                c = pe();
                for (let P = 0; P < ne.length; P += 1) ne[P].c();
                J && J.c(), l = pe(), re && re.c(), f = pe(), F(o, "class", "patchlog scrollbar bold svelte-1ua636q")
            },
            m(P, G) {
                u && u.m(P, G), z(P, e, G), d && d.m(P, G), z(P, o, G);
                for (let A = 0; A < h.length; A += 1) h[A] && h[A].m(o, null);
                b(o, r);
                for (let A = 0; A < M.length; A += 1) M[A] && M[A].m(o, null);
                b(o, n);
                for (let A = 0; A < w.length; A += 1) w[A] && w[A].m(o, null);
                b(o, i);
                for (let A = 0; A < U.length; A += 1) U[A] && U[A].m(o, null);
                b(o, s);
                for (let A = 0; A < V.length; A += 1) V[A] && V[A].m(o, null);
                b(o, a);
                for (let A = 0; A < N.length; A += 1) N[A] && N[A].m(o, null);
                b(o, c);
                for (let A = 0; A < ne.length; A += 1) ne[A] && ne[A].m(o, null);
                J && J.m(P, G), z(P, l, G), re && re.m(P, G), z(P, f, G)
            },
            p(P, G) {
                if (P[6].version ? u ? u.p(P, G) : (u = K2(P), u.c(), u.m(e.parentNode, e)) : u && (u.d(1), u = null), P[6].description ? d ? d.p(P, G) : (d = J2(P), d.c(), d.m(o.parentNode, o)) : d && (d.d(1), d = null), G[0] & 64) {
                    m = le(P[6].archer || []);
                    let A;
                    for (A = 0; A < m.length; A += 1) {
                        let te = Q2(P, m, A);
                        h[A] ? h[A].p(te, G) : (h[A] = e3(te), h[A].c(), h[A].m(o, r))
                    }
                    for (; A < h.length; A += 1) h[A].d(1);
                    h.length = m.length
                }
                if (G[0] & 64) {
                    g = le(P[6].mage || []);
                    let A;
                    for (A = 0; A < g.length; A += 1) {
                        let te = X2(P, g, A);
                        M[A] ? M[A].p(te, G) : (M[A] = t3(te), M[A].c(), M[A].m(o, n))
                    }
                    for (; A < M.length; A += 1) M[A].d(1);
                    M.length = g.length
                }
                if (G[0] & 64) {
                    x = le(P[6].warrior || []);
                    let A;
                    for (A = 0; A < x.length; A += 1) {
                        let te = Y2(P, x, A);
                        w[A] ? w[A].p(te, G) : (w[A] = o3(te), w[A].c(), w[A].m(o, i))
                    }
                    for (; A < w.length; A += 1) w[A].d(1);
                    w.length = x.length
                }
                if (G[0] & 64) {
                    k = le(P[6].shaman || []);
                    let A;
                    for (A = 0; A < k.length; A += 1) {
                        let te = H2(P, k, A);
                        U[A] ? U[A].p(te, G) : (U[A] = r3(te), U[A].c(), U[A].m(o, s))
                    }
                    for (; A < U.length; A += 1) U[A].d(1);
                    U.length = k.length
                }
                if (G[0] & 64) {
                    D = le(P[6].general || []);
                    let A;
                    for (A = 0; A < D.length; A += 1) {
                        let te = $2(P, D, A);
                        V[A] ? V[A].p(te, G) : (V[A] = n3(te), V[A].c(), V[A].m(o, a))
                    }
                    for (; A < V.length; A += 1) V[A].d(1);
                    V.length = D.length
                }
                if (G[0] & 64) {
                    fe = le(P[6].ui || []);
                    let A;
                    for (A = 0; A < fe.length; A += 1) {
                        let te = G2(P, fe, A);
                        N[A] ? N[A].p(te, G) : (N[A] = i3(te), N[A].c(), N[A].m(o, c))
                    }
                    for (; A < N.length; A += 1) N[A].d(1);
                    N.length = fe.length
                }
                if (G[0] & 64) {
                    O = le(P[6].bugs || []);
                    let A;
                    for (A = 0; A < O.length; A += 1) {
                        let te = W2(P, O, A);
                        ne[A] ? ne[A].p(te, G) : (ne[A] = s3(te), ne[A].c(), ne[A].m(o, null))
                    }
                    for (; A < ne.length; A += 1) ne[A].d(1);
                    ne.length = O.length
                }
                P[6].motd.notice ? J ? J.p(P, G) : (J = a3(P), J.c(), J.m(l.parentNode, l)) : J && (J.d(1), J = null), P[6].motd.maintext ? re ? re.p(P, G) : (re = c3(P), re.c(), re.m(f.parentNode, f)) : re && (re.d(1), re = null)
            },
            d(P) {
                P && (I(e), I(o), I(l), I(f)), u && u.d(P), d && d.d(P), Ue(h, P), Ue(M, P), Ue(w, P), Ue(U, P), Ue(V, P), Ue(N, P), Ue(ne, P), J && J.d(P), re && re.d(P)
            }
        }
    }

    function K2(t) {
        let e, o, r = t[6].version + "",
            n, i, s = t[6].date + "",
            a;
        return {
            c() {
                e = C("p"), o = C("small"), n = B(r), i = B(" \u2014 "), a = B(s), F(e, "class", "textprimary")
            },
            m(c, l) {
                z(c, e, l), b(e, o), b(o, n), b(o, i), b(o, a)
            },
            p(c, l) {
                l[0] & 64 && r !== (r = c[6].version + "") && Q(n, r), l[0] & 64 && s !== (s = c[6].date + "") && Q(a, s)
            },
            d(c) {
                c && I(e)
            }
        }
    }

    function J2(t) {
        let e, o = t[6].description + "",
            r;
        return {
            c() {
                e = C("p"), r = B(o), F(e, "class", "textwhite")
            },
            m(n, i) {
                z(n, e, i), b(e, r)
            },
            p(n, i) {
                i[0] & 64 && o !== (o = n[6].description + "") && Q(r, o)
            },
            d(n) {
                n && I(e)
            }
        }
    }

    function e3(t) {
        let e, o, r = t[19] + "",
            n;
        return {
            c() {
                e = C("div"), o = B("\u{1F3F9} "), n = B(r)
            },
            m(i, s) {
                z(i, e, s), b(e, o), b(e, n)
            },
            p(i, s) {
                s[0] & 64 && r !== (r = i[19] + "") && Q(n, r)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function t3(t) {
        let e, o, r = t[19] + "",
            n;
        return {
            c() {
                e = C("div"), o = B("\u{1F52E} "), n = B(r)
            },
            m(i, s) {
                z(i, e, s), b(e, o), b(e, n)
            },
            p(i, s) {
                s[0] & 64 && r !== (r = i[19] + "") && Q(n, r)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function o3(t) {
        let e, o, r = t[19] + "",
            n;
        return {
            c() {
                e = C("div"), o = B("\u2694\uFE0F "), n = B(r)
            },
            m(i, s) {
                z(i, e, s), b(e, o), b(e, n)
            },
            p(i, s) {
                s[0] & 64 && r !== (r = i[19] + "") && Q(n, r)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function r3(t) {
        let e, o, r = t[19] + "",
            n;
        return {
            c() {
                e = C("div"), o = B("\u{1F300} "), n = B(r)
            },
            m(i, s) {
                z(i, e, s), b(e, o), b(e, n)
            },
            p(i, s) {
                s[0] & 64 && r !== (r = i[19] + "") && Q(n, r)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function n3(t) {
        let e, o, r = t[19] + "",
            n;
        return {
            c() {
                e = C("div"), o = B("\u{1F31F} "), n = B(r)
            },
            m(i, s) {
                z(i, e, s), b(e, o), b(e, n)
            },
            p(i, s) {
                s[0] & 64 && r !== (r = i[19] + "") && Q(n, r)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function i3(t) {
        let e, o, r = t[19] + "",
            n;
        return {
            c() {
                e = C("div"), o = B("\u{1F5A5}\uFE0F "), n = B(r)
            },
            m(i, s) {
                z(i, e, s), b(e, o), b(e, n)
            },
            p(i, s) {
                s[0] & 64 && r !== (r = i[19] + "") && Q(n, r)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function s3(t) {
        let e, o, r = t[19] + "",
            n;
        return {
            c() {
                e = C("div"), o = B("\u{1F41B} "), n = B(r)
            },
            m(i, s) {
                z(i, e, s), b(e, o), b(e, n)
            },
            p(i, s) {
                s[0] & 64 && r !== (r = i[19] + "") && Q(n, r)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function a3(t) {
        let e, o = t[6].motd.notice + "",
            r;
        return {
            c() {
                e = C("p"), r = B(o), F(e, "class", "notice svelte-1ua636q")
            },
            m(n, i) {
                z(n, e, i), b(e, r)
            },
            p(n, i) {
                i[0] & 64 && o !== (o = n[6].motd.notice + "") && Q(r, o)
            },
            d(n) {
                n && I(e)
            }
        }
    }

    function c3(t) {
        let e, o = t[6].motd.maintext + "",
            r;
        return {
            c() {
                e = C("p"), r = B(o), F(e, "class", "textprimary")
            },
            m(n, i) {
                z(n, e, i), b(e, r)
            },
            p(n, i) {
                i[0] & 64 && o !== (o = n[6].motd.maintext + "") && Q(r, o)
            },
            d(n) {
                n && I(e)
            }
        }
    }

    function l3(t) {
        let e, o;
        return {
            c() {
                e = C("span"), e.innerHTML = '<img class="svgicon texticon" src="/data/ui/icons/gem.svg?v=8926940"/> Elixir Active', o = B(" | "), F(e, "class", "textsub")
            },
            m(r, n) {
                z(r, e, n), z(r, o, n)
            },
            d(r) {
                r && (I(e), I(o))
            }
        }
    }

    function O4(t) {
        let e, o, r, n, i, s, a, c, l, f, u, d, m, h, g, M, x, w, k, U, D, V, fe, N, O, ne, J;
        r = new $g({});
        let re = [T4, D4],
            P = [];

        function G(ce, ke) {
            return ce[2] === "denied" ? 0 : 1
        }
        h = G(t, [-1, -1]), g = P[h] = re[h](t);
        let A = t[6] && Z2(t),
            te = t[5] === !0 && l3(t);
        return {
            c() {
                e = C("div"), o = C("div"), yt(r.$$.fragment), n = C("div"), i = C("img"), c = C("img"), u = C("div"), d = B("Live"), g.c(), M = C("div"), x = C("div"), w = C("div"), A && A.c(), k = C("p"), k.innerHTML = '<a class="btn small cyan" href="https://twitter.com/shatterspine" target="_blank">@shatterspine</a> <a class="btn small purp" href="https://discord.gg/hordes" target="_blank">Discord</a>', U = C("div"), D = C("small"), D.innerHTML = '<a class="textgrey" href="/terms#terms-and-conditions">Terms</a> | <a class="textgrey" href="/terms#privacy-policy">Privacy</a>', V = C("small"), te && te.c(), fe = C("span"), fe.textContent = "0.51.8926 Live", N = C("div"), F(o, "class", "textshadow svelte-1ua636q"), F(i, "alt", "Sword"), $e(i.src, s = "/data/ui/sword.svg?v=8926940") || F(i, "src", s), F(i, "class", a = "sword " + (t[2] !== "denied" ? "logosmall" : "") + " svelte-1ua636q"), F(c, "alt", "Logo"), $e(c.src, l = "/data/ui/logo.svg?v=8926940") || F(c, "src", l), F(c, "class", f = "logo " + (t[2] !== "denied" ? "logosmall" : "") + " svelte-1ua636q"), F(u, "class", m = "inlinetag versionbox " + (t[2] !== "denied" ? "logosmall" : "") + " svelte-1ua636q"), F(n, "class", "menu svelte-1ua636q"), F(w, "class", "textshadow svelte-1ua636q"), F(x, "class", "row messagebox svelte-1ua636q"), F(D, "class", "textgrey "), F(V, "class", "textgrey"), F(U, "class", "row footerwrapper textshadow svelte-1ua636q"), F(e, "class", "l-menu menuwrapper svelte-1ua636q"), F(N, "class", "l-menu darkgradient svelte-1ua636q")
            },
            m(ce, ke) {
                z(ce, e, ke), b(e, o), bt(r, o, null), b(e, n), b(n, i), b(n, c), b(n, u), b(u, d), P[h].m(n, null), b(e, M), b(M, x), b(x, w), A && A.m(w, null), b(x, k), b(M, U), b(U, D), b(U, V), te && te.m(V, null), b(V, fe), z(ce, N, ke), O = !0, ne || (J = De(u, "click", t[11]), ne = !0)
            },
            p(ce, ke) {
                (!O || ke[0] & 4 && a !== (a = "sword " + (ce[2] !== "denied" ? "logosmall" : "") + " svelte-1ua636q")) && F(i, "class", a), (!O || ke[0] & 4 && f !== (f = "logo " + (ce[2] !== "denied" ? "logosmall" : "") + " svelte-1ua636q")) && F(c, "class", f), (!O || ke[0] & 4 && m !== (m = "inlinetag versionbox " + (ce[2] !== "denied" ? "logosmall" : "") + " svelte-1ua636q")) && F(u, "class", m);
                let Re = h;
                h = G(ce, ke), h === Re ? P[h].p(ce, ke) : (Ft(), ye(P[Re], 1, 1, () => {
                    P[Re] = null
                }), Ct(), g = P[h], g ? g.p(ce, ke) : (g = P[h] = re[h](ce), g.c()), he(g, 1), g.m(n, null)), ce[6] ? A ? A.p(ce, ke) : (A = Z2(ce), A.c(), A.m(w, null)) : A && (A.d(1), A = null), ce[5] === !0 ? te || (te = l3(ce), te.c(), te.m(V, fe)) : te && (te.d(1), te = null)
            },
            i(ce) {
                O || (he(r.$$.fragment, ce), he(g), O = !0)
            },
            o(ce) {
                ye(r.$$.fragment, ce), ye(g), O = !1
            },
            d(ce) {
                ce && (I(e), I(N)), wt(r), P[h].d(), A && A.d(), te && te.d(), ne = !1, J()
            }
        }
    }

    function W4(t, e, o) {
        let r, n = X,
            i = () => (n(), n = hi(a, N => o(7, r = N)), a),
            s;
        gi(t, _i, N => o(8, s = N)), t.$$.on_destroy.push(() => n());
        let {
            perf: a
        } = e;
        i();
        let c, l = "denied",
            f, u, d, m, h, g = async () => {
                try {
                    let O = await (await fetch("/api/user/info")).json();
                    O.status === "user" ? (o(5, h = O.subscribed), O.lock ? (o(2, l = "lock"), f = new Date(O.lock), o(3, u = O.lockreason), d = setInterval(x, 1e3), x()) : o(2, l = "charlist")) : o(2, l = O.status)
                } catch {
                    o(2, l = "error")
                }
            }, M = N => {
                o(2, l = N.detail.state), o(1, c = N.detail)
            }, x = () => {
                let N = new Date,
                    O = f - N;
                o(4, m = O2(O / 1e3)), f < N && (clearInterval(d), o(2, l = "charlist"))
            }, w;
        (async () => {
            let N = await fetch("/api/changelog");
            o(6, w = await N.json())
        })(), vn(g);
        let U = N => o(2, l = "secret"),
            D = N => o(2, l = "signuppanel"),
            V = N => o(2, l = "denied"),
            fe = N => o(2, l = "denied");
        return t.$$set = N => {
            "perf" in N && i(o(0, a = N.perf))
        }, [a, c, l, u, m, h, w, r, s, g, M, U, D, V, fe]
    }
    var hl = class extends nt {
            constructor(e) {
                super(), ut(this, e, W4, O4, xt, {
                    perf: 0
                }, null, [-1, -1])
            }
        },
        f3 = hl;
    new f3({
        target: document.body,
        props: {
            perf: rl
        }
    });
})();