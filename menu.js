(() => {
    var s3 = Object.defineProperty;
    var ua = (t, e) => {
        for (var o in e) s3(t, o, {
            get: e[o],
            enumerable: !0
        })
    };

    function $() {}

    function a3(t, e) {
        for (let o in e) t[o] = e[o];
        return t
    }

    function ul(t) {
        return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function"
    }

    function ma(t) {
        return t()
    }

    function ci() {
        return Object.create(null)
    }

    function it(t) {
        t.forEach(ma)
    }

    function fn(t) {
        return typeof t == "function"
    }

    function ut(t, e) {
        return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
    }
    var ai;

    function Ne(t, e) {
        return t === e ? !0 : (ai || (ai = document.createElement("a")), ai.href = e, t === ai.href)
    }

    function li(t, e) {
        return t != t ? e == e : t !== e
    }

    function ml(t) {
        return Object.keys(t).length === 0
    }

    function fi(t, ...e) {
        if (t == null) {
            for (let r of e) r(void 0);
            return $
        }
        let o = t.subscribe(...e);
        return o.unsubscribe ? () => o.unsubscribe() : o
    }

    function di(t, e, o) {
        t.$$.on_destroy.push(fi(e, o))
    }

    function pl(t, e, o, r) {
        if (t) {
            let n = hl(t, e, o, r);
            return t[0](n)
        }
    }

    function hl(t, e, o, r) {
        return t[1] && r ? a3(o.ctx.slice(), t[1](r(e))) : o.ctx
    }

    function gl(t, e, o, r) {
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

    function vl(t, e, o, r, n, i) {
        if (n) {
            let s = hl(e, o, r, i);
            t.p(s, n)
        }
    }

    function xl(t) {
        if (t.ctx.length > 32) {
            let e = [],
                o = t.ctx.length / 32;
            for (let r = 0; r < o; r++) e[r] = -1;
            return e
        }
        return -1
    }

    function pa(t, e, o) {
        return t.set(o), e
    }
    var ha = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
    var ui = class t {
        _listeners = "WeakMap" in ha ? new WeakMap : void 0;
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
    ui.entries = "WeakMap" in ha ? new WeakMap : void 0;
    var bl = !1;

    function wl() {
        bl = !0
    }

    function _l() {
        bl = !1
    }

    function w(t, e) {
        t.appendChild(e)
    }

    function z(t, e, o) {
        t.insertBefore(e, o || null)
    }

    function I(t) {
        t.parentNode && t.parentNode.removeChild(t)
    }

    function ze(t, e) {
        for (let o = 0; o < t.length; o += 1) t[o] && t[o].d(e)
    }

    function C(t) {
        return document.createElement(t)
    }

    function B(t) {
        return document.createTextNode(t)
    }

    function Ae() {
        return B(" ")
    }

    function fe() {
        return B("")
    }

    function Pe(t, e, o, r) {
        return t.addEventListener(e, o, r), () => t.removeEventListener(e, o, r)
    }

    function F(t, e, o) {
        o == null ? t.removeAttribute(e) : t.getAttribute(e) !== o && t.setAttribute(e, o)
    }

    function yl(t) {
        return Array.from(t.childNodes)
    }

    function Y(t, e) {
        e = "" + e, t.data !== e && (t.data = e)
    }

    function pr(t, e) {
        t.value = e ?? ""
    }

    function We(t, e, o, r) {
        o == null ? t.style.removeProperty(e) : t.style.setProperty(e, o, r ? "important" : "")
    }

    function mi(t, e, {
        bubbles: o = !1,
        cancelable: r = !1
    } = {}) {
        return new CustomEvent(t, {
            detail: e,
            bubbles: o,
            cancelable: r
        })
    }

    function Ml(t) {
        let e = {};
        return t.childNodes.forEach(o => {
            e[o.slot || "default"] = !0
        }), e
    }
    var yo;

    function It(t) {
        yo = t
    }

    function dn() {
        if (!yo) throw new Error("Function called outside component initialization");
        return yo
    }

    function un(t) {
        dn().$$.on_mount.push(t)
    }

    function ga(t) {
        dn().$$.after_update.push(t)
    }

    function Ht() {
        let t = dn();
        return (e, o, {
            cancelable: r = !1
        } = {}) => {
            let n = t.$$.callbacks[e];
            if (n) {
                let i = mi(e, o, {
                    cancelable: r
                });
                return n.slice().forEach(s => {
                    s.call(t, i)
                }), !i.defaultPrevented
            }
            return !0
        }
    }
    var jo = [];
    var qo = [],
        gr = [],
        kl = [],
        h3 = Promise.resolve(),
        xa = !1;

    function Fl() {
        xa || (xa = !0, h3.then(pn))
    }

    function mn(t) {
        gr.push(t)
    }
    var va = new Set,
        hr = 0;

    function pn() {
        if (hr !== 0) return;
        let t = yo;
        do {
            try {
                for (; hr < jo.length;) {
                    let e = jo[hr];
                    hr++, It(e), g3(e.$$)
                }
            } catch (e) {
                throw jo.length = 0, hr = 0, e
            }
            for (It(null), jo.length = 0, hr = 0; qo.length;) qo.pop()();
            for (let e = 0; e < gr.length; e += 1) {
                let o = gr[e];
                va.has(o) || (va.add(o), o())
            }
            gr.length = 0
        } while (jo.length);
        for (; kl.length;) kl.pop()();
        xa = !1, va.clear(), It(t)
    }

    function g3(t) {
        if (t.fragment !== null) {
            t.update(), it(t.before_update);
            let e = t.dirty;
            t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(mn)
        }
    }

    function Cl(t) {
        let e = [],
            o = [];
        gr.forEach(r => t.indexOf(r) === -1 ? e.push(r) : o.push(r)), o.forEach(r => r()), gr = e
    }
    var pi = new Set,
        Oo;

    function wt() {
        Oo = {
            r: 0,
            c: [],
            p: Oo
        }
    }

    function _t() {
        Oo.r || it(Oo.c), Oo = Oo.p
    }

    function de(t, e) {
        t && t.i && (pi.delete(t), t.i(e))
    }

    function pe(t, e, o, r) {
        if (t && t.o) {
            if (pi.has(t)) return;
            pi.add(t), Oo.c.push(() => {
                pi.delete(t), r && (o && t.d(1), r())
            }), t.o(e)
        } else r && r()
    }

    function vr(t, e) {
        let o = e.token = {};

        function r(n, i, s, a) {
            if (e.token !== o) return;
            e.resolved = a;
            let c = e.ctx;
            s !== void 0 && (c = c.slice(), c[s] = a);
            let l = n && (e.current = n)(c),
                f = !1;
            e.block && (e.blocks ? e.blocks.forEach((d, u) => {
                u !== i && d && (wt(), pe(d, 1, 1, () => {
                    e.blocks[u] === d && (e.blocks[u] = null)
                }), _t())
            }) : e.block.d(1), l.c(), de(l, 1), l.m(e.mount(), e.anchor), f = !0), e.block = l, e.blocks && (e.blocks[i] = l), f && pn()
        }
        if (ul(t)) {
            let n = dn();
            if (t.then(i => {
                    It(n), r(e.then, 1, e.value, i), It(null)
                }, i => {
                    if (It(n), r(e.catch, 2, e.error, i), It(null), !e.hasCatch) throw i
                }), e.current !== e.pending) return r(e.pending, 0), !0
        } else {
            if (e.current !== e.then) return r(e.then, 1, e.value, t), !0;
            e.resolved = t
        }
    }

    function hi(t, e, o) {
        let r = e.slice(),
            {
                resolved: n
            } = t;
        t.current === t.then && (r[t.value] = n), t.current === t.catch && (r[t.error] = n), t.block.p(r, o)
    }

    function se(t) {
        return t?.length !== void 0 ? t : Array.from(t)
    }
    var v3 = ["allowfullscreen", "allowpaymentrequest", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected"],
        x3 = new Set([...v3]);

    function vt(t) {
        t && t.c()
    }

    function mt(t, e, o) {
        let {
            fragment: r,
            after_update: n
        } = t.$$;
        r && r.m(e, o), mn(() => {
            let i = t.$$.on_mount.map(ma).filter(fn);
            t.$$.on_destroy ? t.$$.on_destroy.push(...i) : it(i), t.$$.on_mount = []
        }), n.forEach(mn)
    }

    function pt(t, e) {
        let o = t.$$;
        o.fragment !== null && (Cl(o.after_update), it(o.on_destroy), o.fragment && o.fragment.d(e), o.on_destroy = o.fragment = null, o.ctx = [])
    }

    function w3(t, e) {
        t.$$.dirty[0] === -1 && (jo.push(t), Fl(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
    }

    function st(t, e, o, r, n, i, s = null, a = [-1]) {
        let c = yo;
        It(t);
        let l = t.$$ = {
            fragment: null,
            ctx: [],
            props: i,
            update: $,
            not_equal: n,
            bound: ci(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(e.context || (c ? c.$$.context : [])),
            callbacks: ci(),
            dirty: a,
            skip_bound: !1,
            root: e.target || c.$$.root
        };
        s && s(l.root);
        let f = !1;
        if (l.ctx = o ? o(t, e.props || {}, (d, u, ...m) => {
                let h = m.length ? m[0] : u;
                return l.ctx && n(l.ctx[d], l.ctx[d] = h) && (!l.skip_bound && l.bound[d] && l.bound[d](h), f && w3(t, d)), u
            }) : [], l.update(), f = !0, it(l.before_update), l.fragment = r ? r(l.ctx) : !1, e.target) {
            if (e.hydrate) {
                wl();
                let d = yl(e.target);
                l.fragment && l.fragment.l(d), d.forEach(I)
            } else l.fragment && l.fragment.c();
            e.intro && de(t.$$.fragment), mt(t, e.target, e.anchor), _l(), pn()
        }
        It(c)
    }
    var _3;
    typeof HTMLElement == "function" && (_3 = class extends HTMLElement {
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
                    o = Ml(this);
                for (let n of this.$$s) n in o && (e[n] = [t(n)]);
                for (let n of this.attributes) {
                    let i = this.$$g_p(n.name);
                    i in this.$$d || (this.$$d[i] = ba(i, n.value, this.$$p_d, "toProp"))
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
                            let i = ba(n, this.$$d[n], this.$$p_d, "toAttribute");
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
            this.$$r || (t = this.$$g_p(t), this.$$d[t] = ba(t, o, this.$$p_d, "toProp"), this.$$c?.$set({
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

    function ba(t, e, o, r) {
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
    var et = class {
        $$ = void 0;
        $$set = void 0;
        $destroy() {
            pt(this, 1), this.$destroy = $
        }
        $on(e, o) {
            if (!fn(o)) return $;
            let r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return r.push(o), () => {
                let n = r.indexOf(o);
                n !== -1 && r.splice(n, 1)
            }
        }
        $set(e) {
            this.$$set && !ml(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
        }
    };
    var Al = "4";
    var xr = [];

    function y(t, e = $) {
        let o, r = new Set;

        function n(a) {
            if (ut(t, a) && (t = a, o)) {
                let c = !xr.length;
                for (let l of r) l[1](), xr.push(l, t);
                if (c) {
                    for (let l = 0; l < xr.length; l += 2) xr[l][0](xr[l + 1]);
                    xr.length = 0
                }
            }
        }

        function i(a) {
            n(a(t))
        }

        function s(a, c = $) {
            let l = [a, c];
            return r.add(l), r.size === 1 && (o = e(n, i) || $), a(t), () => {
                r.delete(l), r.size === 0 && o && (o(), o = null)
            }
        }
        return {
            set: n,
            update: i,
            subscribe: s
        }
    }
    var w6 = y([]),
        _6 = y({
            role: 0,
            nearby: 0,
            exprate: 1,
            itemfind: 1,
            queues: [],
            membercount: 0
        }),
        y6 = y({
            parties: [],
            filterActivity: -1,
            showFull: !0,
            showAuto: !0
        }),
        M6 = y({
            flashing: !1,
            message: "",
            activity: 0,
            listed: !1,
            applications: []
        }),
        k6 = y([]),
        F6 = y(),
        C6 = y([]),
        A6 = y({}),
        S6 = y(),
        gi = y(!1),
        P6 = y(),
        Sl = y(!1),
        vi = y("Loading World"),
        L6 = y([]),
        Pl = y(""),
        D6 = y({}),
        E6 = y({}),
        T6 = y([]),
        I6 = y([]),
        xi = y(),
        z6 = y("auto"),
        V6 = y(0),
        R6 = y(0),
        U6 = y(0),
        B6 = y([]),
        j6 = y({}),
        q6 = y({}),
        O6 = y({
            current: 0,
            max: 1
        }),
        N6 = y(),
        W6 = y(),
        G6 = y(!1),
        H6 = y(0),
        $6 = y([0, 0]),
        Y6 = y(),
        X6 = y(),
        Q6 = y(!1),
        Z6 = y(new Map),
        J6 = y(new Map),
        K6 = y(),
        e5 = y(),
        t5 = y(),
        o5 = y([]),
        r5 = y(),
        n5 = y(0),
        i5 = y(!1),
        s5 = y(!1),
        a5 = y(),
        c5 = y({
            self: [],
            other: [],
            nonOrAcc: [],
            all: []
        }),
        l5 = y(),
        f5 = y(),
        d5 = y(),
        u5 = y(),
        m5 = y({}),
        p5 = y({}),
        h5 = y({}),
        g5 = y({}),
        v5 = y(),
        x5 = y();
    var b5 = y(),
        w5 = y(!1);
    var Fi = {};
    ua(Fi, {
        activeWorld: () => hn,
        alwaysShowLevel: () => _f,
        ambienceVolume: () => jl,
        anisotropy: () => Ul,
        audioVolume: () => yi,
        audioVolumeLowered: () => Mi,
        bloom: () => Vl,
        buffCdFlashingDuration: () => Xf,
        buffCdFlashingInterval: () => Yf,
        buffcountParty: () => od,
        buffcountUnitframes: () => td,
        buffsHideIrrelevant: () => rd,
        cameraZoom: () => uf,
        cdTextBuffs: () => $f,
        cdTextSkills: () => Hf,
        charpanelOpen: () => ff,
        chatbubbles: () => Af,
        clanOpen: () => rf,
        classColorBars: () => Mf,
        combatTextPush: () => yf,
        command: () => Ol,
        current: () => Te,
        disableoffscreen: () => Il,
        dpsmeterMode: () => cf,
        dpsmeterOpen: () => Zl,
        dpsmeterParty: () => af,
        dpsmeterTarget: () => lf,
        expmeterOpen: () => Kl,
        filteredChannels: () => Df,
        fogpattern: () => Bl,
        foliage: () => Dl,
        fov: () => wi,
        fxaa: () => Tl,
        inventoryCols: () => $l,
        inventoryOpen: () => Yl,
        invertMouseX: () => ad,
        invertMouseY: () => cd,
        itemProtectQuality: () => Rf,
        itemQualityFilter: () => Tf,
        itemQualityPercent: () => zf,
        itemTypeFilter: () => Ef,
        itemmeterOpen: () => Jl,
        kbAltBack: () => vd,
        kbAltForward: () => gd,
        kbBack: () => bd,
        kbCharacter: () => Cd,
        kbClan: () => Sd,
        kbForward: () => md,
        kbInventory: () => Ad,
        kbLeft: () => xd,
        kbMap: () => kd,
        kbNextParty: () => yd,
        kbNextTarget: () => _d,
        kbParty: () => Ld,
        kbPvp: () => Pd,
        kbRight: () => wd,
        kbSkillbar1: () => Ed,
        kbSkillbar10: () => qd,
        kbSkillbar11: () => Od,
        kbSkillbar12: () => Nd,
        kbSkillbar13: () => Wd,
        kbSkillbar14: () => Gd,
        kbSkillbar15: () => Hd,
        kbSkillbar16: () => $d,
        kbSkillbar17: () => Yd,
        kbSkillbar18: () => Xd,
        kbSkillbar19: () => Qd,
        kbSkillbar2: () => Td,
        kbSkillbar20: () => Zd,
        kbSkillbar21: () => Jd,
        kbSkillbar22: () => Kd,
        kbSkillbar23: () => eu,
        kbSkillbar24: () => tu,
        kbSkillbar3: () => Id,
        kbSkillbar4: () => zd,
        kbSkillbar5: () => Vd,
        kbSkillbar6: () => Rd,
        kbSkillbar7: () => Ud,
        kbSkillbar8: () => Bd,
        kbSkillbar9: () => jd,
        kbSkills: () => Fd,
        kbSocial: () => Dd,
        kbTurnLeft: () => pd,
        kbTurnRight: () => hd,
        kbUntarget: () => Md,
        lang: () => ki,
        lastConnectedChar: () => gn,
        leaveEmptyParty: () => Kf,
        lockedcamera: () => ld,
        mapLowQuality: () => Ff,
        mapShowMonsters: () => kf,
        materialQualityFilter: () => If,
        mouseSensitivity: () => sd,
        msgExpGain: () => Bf,
        msgFame: () => jf,
        msgFriendOnlineStatus: () => Gf,
        msgGoldPickUp: () => Wf,
        msgItemPartyPickUp: () => Nf,
        msgItemPartyRoll: () => Of,
        msgItemPickup: () => qf,
        musicVolume: () => ql,
        nameShowEnemyPlayers: () => bf,
        nameShowFriendlyPlayers: () => xf,
        nameShowMonsters: () => vf,
        nameplateShowEnemyPlayers: () => gf,
        nameplateShowFriendlyPlayers: () => hf,
        nameplateShowMonsters: () => pf,
        nameplateShowTransparency: () => wf,
        nameplateViewRange: () => mf,
        nextFriendlyTargetAllowNonParty: () => dd,
        nextFriendlyTargetCycle: () => ud,
        particles: () => Rl,
        partyBuffLimitUpdateRate: () => Qf,
        partyOpen: () => of,
        partyWidth: () => Zf,
        pointerlock: () => fd,
        pvpOpen: () => sf,
        registerSetting: () => ru,
        resolution: () => _i,
        settingsOpen: () => Xl,
        shadowmapResolution: () => El,
        shadows: () => zl,
        showFpsPing: () => Vf,
        showIncomingDamage: () => Pf,
        showIncomingHeal: () => Sf,
        showIncomingMana: () => Lf,
        showPartyMana: () => ed,
        showSelfInParty: () => Jf,
        skillConfigs: () => nd,
        skillPresetVisible: () => id,
        skillbarAmount: () => ou,
        skillbarsettings: () => df,
        skillmenuOpen: () => Ql,
        socialOpen: () => nf,
        stashCols: () => Nl,
        stashHeight: () => Wl,
        stashShowGroups: () => Gl,
        stashShowSettings: () => Hl,
        subscriptionOpen: () => tf,
        tutprogress: () => Cf,
        twitchOpen: () => ef,
        viewRange: () => bi,
        windowSettings: () => Uf
    });
    var wa = {};
    ua(wa, {
        activeWorld: () => hn,
        alwaysShowLevel: () => _f,
        ambienceVolume: () => jl,
        anisotropy: () => Ul,
        audioVolume: () => yi,
        audioVolumeLowered: () => Mi,
        bloom: () => Vl,
        buffCdFlashingDuration: () => Xf,
        buffCdFlashingInterval: () => Yf,
        buffcountParty: () => od,
        buffcountUnitframes: () => td,
        buffsHideIrrelevant: () => rd,
        cameraZoom: () => uf,
        cdTextBuffs: () => $f,
        cdTextSkills: () => Hf,
        charpanelOpen: () => ff,
        chatbubbles: () => Af,
        clanOpen: () => rf,
        classColorBars: () => Mf,
        combatTextPush: () => yf,
        command: () => Ol,
        disableoffscreen: () => Il,
        dpsmeterMode: () => cf,
        dpsmeterOpen: () => Zl,
        dpsmeterParty: () => af,
        dpsmeterTarget: () => lf,
        expmeterOpen: () => Kl,
        filteredChannels: () => Df,
        fogpattern: () => Bl,
        foliage: () => Dl,
        fov: () => wi,
        fxaa: () => Tl,
        inventoryCols: () => $l,
        inventoryOpen: () => Yl,
        invertMouseX: () => ad,
        invertMouseY: () => cd,
        itemProtectQuality: () => Rf,
        itemQualityFilter: () => Tf,
        itemQualityPercent: () => zf,
        itemTypeFilter: () => Ef,
        itemmeterOpen: () => Jl,
        kbAltBack: () => vd,
        kbAltForward: () => gd,
        kbBack: () => bd,
        kbCharacter: () => Cd,
        kbClan: () => Sd,
        kbForward: () => md,
        kbInventory: () => Ad,
        kbLeft: () => xd,
        kbMap: () => kd,
        kbNextParty: () => yd,
        kbNextTarget: () => _d,
        kbParty: () => Ld,
        kbPvp: () => Pd,
        kbRight: () => wd,
        kbSkillbar1: () => Ed,
        kbSkillbar10: () => qd,
        kbSkillbar11: () => Od,
        kbSkillbar12: () => Nd,
        kbSkillbar13: () => Wd,
        kbSkillbar14: () => Gd,
        kbSkillbar15: () => Hd,
        kbSkillbar16: () => $d,
        kbSkillbar17: () => Yd,
        kbSkillbar18: () => Xd,
        kbSkillbar19: () => Qd,
        kbSkillbar2: () => Td,
        kbSkillbar20: () => Zd,
        kbSkillbar21: () => Jd,
        kbSkillbar22: () => Kd,
        kbSkillbar23: () => eu,
        kbSkillbar24: () => tu,
        kbSkillbar3: () => Id,
        kbSkillbar4: () => zd,
        kbSkillbar5: () => Vd,
        kbSkillbar6: () => Rd,
        kbSkillbar7: () => Ud,
        kbSkillbar8: () => Bd,
        kbSkillbar9: () => jd,
        kbSkills: () => Fd,
        kbSocial: () => Dd,
        kbTurnLeft: () => pd,
        kbTurnRight: () => hd,
        kbUntarget: () => Md,
        lang: () => ki,
        lastConnectedChar: () => gn,
        leaveEmptyParty: () => Kf,
        lockedcamera: () => ld,
        mapLowQuality: () => Ff,
        mapShowMonsters: () => kf,
        materialQualityFilter: () => If,
        mouseSensitivity: () => sd,
        msgExpGain: () => Bf,
        msgFame: () => jf,
        msgFriendOnlineStatus: () => Gf,
        msgGoldPickUp: () => Wf,
        msgItemPartyPickUp: () => Nf,
        msgItemPartyRoll: () => Of,
        msgItemPickup: () => qf,
        musicVolume: () => ql,
        nameShowEnemyPlayers: () => bf,
        nameShowFriendlyPlayers: () => xf,
        nameShowMonsters: () => vf,
        nameplateShowEnemyPlayers: () => gf,
        nameplateShowFriendlyPlayers: () => hf,
        nameplateShowMonsters: () => pf,
        nameplateShowTransparency: () => wf,
        nameplateViewRange: () => mf,
        nextFriendlyTargetAllowNonParty: () => dd,
        nextFriendlyTargetCycle: () => ud,
        particles: () => Rl,
        partyBuffLimitUpdateRate: () => Qf,
        partyOpen: () => of,
        partyWidth: () => Zf,
        pointerlock: () => fd,
        pvpOpen: () => sf,
        resolution: () => _i,
        settingsOpen: () => Xl,
        shadowmapResolution: () => El,
        shadows: () => zl,
        showFpsPing: () => Vf,
        showIncomingDamage: () => Pf,
        showIncomingHeal: () => Sf,
        showIncomingMana: () => Lf,
        showPartyMana: () => ed,
        showSelfInParty: () => Jf,
        skillConfigs: () => nd,
        skillPresetVisible: () => id,
        skillbarAmount: () => ou,
        skillbarsettings: () => df,
        skillmenuOpen: () => Ql,
        socialOpen: () => nf,
        stashCols: () => Nl,
        stashHeight: () => Wl,
        stashShowGroups: () => Gl,
        stashShowSettings: () => Hl,
        subscriptionOpen: () => tf,
        tutprogress: () => Cf,
        twitchOpen: () => ef,
        viewRange: () => bi,
        windowSettings: () => Uf
    });
    var hn = y(""),
        gn = y(0),
        bi = y(60),
        wi = y(70),
        _i = y(100),
        Dl = y(100),
        El = y(2),
        Tl = y(!0),
        Il = y(!0),
        zl = y(!0),
        Vl = y(!0),
        Rl = y(!0),
        Ul = y(4),
        Bl = y(!0),
        jl = y(40),
        yi = y(70),
        Mi = y(80),
        ql = y(30),
        ki = y("en"),
        Ol = y("faction"),
        Nl = y(8),
        Wl = y(300),
        Gl = y(2),
        Hl = y(!1),
        $l = y(5),
        Yl = y(!1),
        Xl = y(!1),
        Ql = y(!1),
        Zl = y(!1),
        Jl = y(!0),
        Kl = y(!0),
        ef = y(!0),
        tf = y(!1),
        of = y(!1),
        rf = y(!1),
        nf = y(!1),
        sf = y(!1),
        af = y(!0),
        cf = y(0),
        lf = y(0),
        ff = y(!1),
        df = y({}),
        uf = y(7),
        mf = y(100),
        pf = y(!0),
        hf = y(!0),
        gf = y(!0),
        vf = y(!0),
        xf = y(!0),
        bf = y(!0),
        wf = y(!0),
        _f = y(!1),
        yf = y(!0),
        Mf = y(!1),
        kf = y(!0),
        Ff = y(!1),
        Cf = y(0),
        Af = y(!0),
        Sf = y(!0),
        Pf = y(!0),
        Lf = y(!0),
        Df = y([]),
        Ef = y(""),
        Tf = y(0),
        If = y(0),
        zf = y(!1),
        Vf = y(!1),
        Rf = y(70),
        Uf = y([]),
        Bf = y(!1),
        jf = y(!0),
        qf = y(!0),
        Of = y(!0),
        Nf = y(!0),
        Wf = y(!0),
        Gf = y(!0),
        Hf = y(!0),
        $f = y(!0),
        Yf = y(.5),
        Xf = y(3),
        Qf = y(!0),
        Zf = y(200),
        Jf = y(!0),
        Kf = y(!0),
        ed = y(!1),
        td = y(14),
        od = y(8),
        rd = y(!1),
        nd = y([]),
        id = y(!1),
        sd = y(1),
        ad = y(!1),
        cd = y(!1),
        ld = y(!0),
        fd = y(!0),
        dd = y(!0),
        ud = y(10),
        md = y("w"),
        pd = y("arrowleft"),
        hd = y("arrowright"),
        gd = y("arrowup"),
        vd = y("arrowdown"),
        xd = y("a"),
        bd = y("s"),
        wd = y("d"),
        _d = y("tab"),
        yd = y("x"),
        Md = y("escape"),
        kd = y("m"),
        Fd = y("k"),
        Cd = y("c"),
        Ad = y("b"),
        Sd = y("g"),
        Pd = y("v"),
        Ld = y("p"),
        Dd = y("i"),
        Ed = y("1"),
        Td = y("2"),
        Id = y("3"),
        zd = y("4"),
        Vd = y("5"),
        Rd = y("6"),
        Ud = y("7"),
        Bd = y("8"),
        jd = y("9"),
        qd = y("0"),
        Od = y(""),
        Nd = y(""),
        Wd = y(""),
        Gd = y(""),
        Hd = y(""),
        $d = y(""),
        Yd = y(""),
        Xd = y(""),
        Qd = y(""),
        Zd = y(""),
        Jd = y(""),
        Kd = y(""),
        eu = y(""),
        tu = y(""),
        ou = y(12);
    var _a;
    _a = {
        ...wa
    };
    var ru = (t, e) => {
            if (t === "activeWorld" || t === "lastConnectedChar") {
                let o = localStorage.getItem(t),
                    r = JSON.parse(o == "undefined" ? null : o);
                r !== null && e.set(r)
            }
            e.subscribe(o => {
                Te[t] = o, (t === "activeWorld" || t === "lastConnectedChar") && localStorage.setItem(t, JSON.stringify(o))
            })
        },
        Te = {};
    for (let t in _a) ru(t, _a[t]);
    var X;
    ki.subscribe(async t => {
        await fetch(`/data/loc/${t}.json?v=8862189`).then(async e => {
            X = await e.json(), gi.set(!0)
        })
    });

    function $t() {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }

    function nu(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
    }

    function ya(t, e) {
        let o = e[0],
            r = e[1],
            n = e[2],
            i = e[3],
            s = e[4],
            a = e[5],
            c = e[6],
            l = e[7],
            f = e[8],
            d = e[9],
            u = e[10],
            m = e[11],
            h = e[12],
            g = e[13],
            M = e[14],
            b = e[15],
            _ = o * a - r * s,
            k = o * c - n * s,
            U = o * l - i * s,
            T = r * c - n * a,
            V = r * l - i * a,
            ae = n * l - i * c,
            q = f * g - d * h,
            O = f * M - u * h,
            oe = f * b - m * h,
            Z = d * M - u * g,
            te = d * b - m * g,
            L = u * b - m * M,
            W = _ * L - k * te + U * Z + T * oe - V * O + ae * q;
        return W ? (W = 1 / W, t[0] = (a * L - c * te + l * Z) * W, t[1] = (n * te - r * L - i * Z) * W, t[2] = (g * ae - M * V + b * T) * W, t[3] = (u * V - d * ae - m * T) * W, t[4] = (c * oe - s * L - l * O) * W, t[5] = (o * L - n * oe + i * O) * W, t[6] = (M * U - h * ae - b * k) * W, t[7] = (f * ae - u * U + m * k) * W, t[8] = (s * te - a * oe + l * q) * W, t[9] = (r * oe - o * te - i * q) * W, t[10] = (h * V - g * U + b * _) * W, t[11] = (d * U - f * V - m * _) * W, t[12] = (a * O - s * Z - c * q) * W, t[13] = (o * Z - r * O + n * q) * W, t[14] = (g * k - h * T - M * _) * W, t[15] = (f * T - d * k + u * _) * W, t) : null
    }

    function Ci(t, e, o) {
        let r = e[0],
            n = e[1],
            i = e[2],
            s = e[3],
            a = e[4],
            c = e[5],
            l = e[6],
            f = e[7],
            d = e[8],
            u = e[9],
            m = e[10],
            h = e[11],
            g = e[12],
            M = e[13],
            b = e[14],
            _ = e[15],
            k = o[0],
            U = o[1],
            T = o[2],
            V = o[3];
        return t[0] = k * r + U * a + T * d + V * g, t[1] = k * n + U * c + T * u + V * M, t[2] = k * i + U * l + T * m + V * b, t[3] = k * s + U * f + T * h + V * _, k = o[4], U = o[5], T = o[6], V = o[7], t[4] = k * r + U * a + T * d + V * g, t[5] = k * n + U * c + T * u + V * M, t[6] = k * i + U * l + T * m + V * b, t[7] = k * s + U * f + T * h + V * _, k = o[8], U = o[9], T = o[10], V = o[11], t[8] = k * r + U * a + T * d + V * g, t[9] = k * n + U * c + T * u + V * M, t[10] = k * i + U * l + T * m + V * b, t[11] = k * s + U * f + T * h + V * _, k = o[12], U = o[13], T = o[14], V = o[15], t[12] = k * r + U * a + T * d + V * g, t[13] = k * n + U * c + T * u + V * M, t[14] = k * i + U * l + T * m + V * b, t[15] = k * s + U * f + T * h + V * _, t
    }

    function iu(t, e) {
        return t[0] = e[12], t[1] = e[13], t[2] = e[14], t
    }

    function su(t) {
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
            d = n * n + i * i + s * s,
            u = a * a + c * c + l * l;
        return Math.sqrt(Math.max(f, d, u))
    }

    function au(t, e) {
        let o = e[0] + e[5] + e[10],
            r = 0;
        return o > 0 ? (r = Math.sqrt(o + 1) * 2, t[3] = .25 * r, t[0] = (e[6] - e[9]) / r, t[1] = (e[8] - e[2]) / r, t[2] = (e[1] - e[4]) / r) : e[0] > e[5] && e[0] > e[10] ? (r = Math.sqrt(1 + e[0] - e[5] - e[10]) * 2, t[3] = (e[6] - e[9]) / r, t[0] = .25 * r, t[1] = (e[1] + e[4]) / r, t[2] = (e[8] + e[2]) / r) : e[5] > e[10] ? (r = Math.sqrt(1 + e[5] - e[0] - e[10]) * 2, t[3] = (e[8] - e[2]) / r, t[0] = (e[1] + e[4]) / r, t[1] = .25 * r, t[2] = (e[6] + e[9]) / r) : (r = Math.sqrt(1 + e[10] - e[0] - e[5]) * 2, t[3] = (e[1] - e[4]) / r, t[0] = (e[8] + e[2]) / r, t[1] = (e[6] + e[9]) / r, t[2] = .25 * r), t
    }

    function Ai(t, e, o, r) {
        let n = e[0],
            i = e[1],
            s = e[2],
            a = e[3],
            c = n + n,
            l = i + i,
            f = s + s,
            d = n * c,
            u = n * l,
            m = n * f,
            h = i * l,
            g = i * f,
            M = s * f,
            b = a * c,
            _ = a * l,
            k = a * f,
            U = r[0],
            T = r[1],
            V = r[2];
        return t[0] = (1 - (h + M)) * U, t[1] = (u + k) * U, t[2] = (m - _) * U, t[3] = 0, t[4] = (u - k) * T, t[5] = (1 - (d + M)) * T, t[6] = (g + b) * T, t[7] = 0, t[8] = (m + _) * V, t[9] = (g - b) * V, t[10] = (1 - (d + h)) * V, t[11] = 0, t[12] = o[0], t[13] = o[1], t[14] = o[2], t[15] = 1, t
    }

    function cu(t, e, o, r, n) {
        let i = 1 / Math.tan(e / 2),
            s = 1 / (r - n);
        return t[0] = i / o, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = i, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (n + r) * s, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * n * r * s, t[15] = 0, t
    }

    function lu(t, e, o, r, n, i, s) {
        let a = 1 / (e - o),
            c = 1 / (r - n),
            l = 1 / (i - s);
        return t[0] = -2 * a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * c, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * l, t[11] = 0, t[12] = (e + o) * a, t[13] = (n + r) * c, t[14] = (s + i) * l, t[15] = 1, t
    }

    function Ma(t, e, o, r) {
        let n = e[0],
            i = e[1],
            s = e[2],
            a = r[0],
            c = r[1],
            l = r[2],
            f = n - o[0],
            d = i - o[1],
            u = s - o[2],
            m = f * f + d * d + u * u;
        m > 0 && (m = 1 / Math.sqrt(m), f *= m, d *= m, u *= m);
        let h = c * u - l * d,
            g = l * f - a * u,
            M = a * d - c * f;
        return m = h * h + g * g + M * M, m > 0 && (m = 1 / Math.sqrt(m), h *= m, g *= m, M *= m), t[0] = h, t[1] = g, t[2] = M, t[3] = 0, t[4] = d * M - u * g, t[5] = u * h - f * M, t[6] = f * g - d * h, t[7] = 0, t[8] = f, t[9] = d, t[10] = u, t[11] = 0, t[12] = n, t[13] = i, t[14] = s, t[15] = 1, t
    }

    function fu(t, e) {
        return t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1)), Math.abs(e[9]) < .99999 ? (t[1] = Math.atan2(e[8], e[10]), t[2] = Math.atan2(e[1], e[5])) : (t[1] = Math.atan2(-e[2], e[0]), t[2] = 0), t
    }

    function xn(t) {
        let e = t[0],
            o = t[1],
            r = t[2];
        return Math.sqrt(e * e + o * o + r * r)
    }

    function Ve(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
    }

    function re(t, e, o, r) {
        return t[0] = e, t[1] = o, t[2] = r, t
    }

    function Mo(t, e) {
        return t[0] = e, t[1] = e, t[2] = e, t
    }

    function to(t, e, o) {
        return t[0] = e[0] + o[0], t[1] = e[1] + o[1], t[2] = e[2] + o[2], t
    }

    function At(t, e, o) {
        return t[0] = e[0] - o[0], t[1] = e[1] - o[1], t[2] = e[2] - o[2], t
    }

    function oo(t, e, o) {
        return t[0] = e[0] * o, t[1] = e[1] * o, t[2] = e[2] * o, t
    }

    function Si(t, e, o, r) {
        return t[0] = e[0] + o[0] * r, t[1] = e[1] + o[1] * r, t[2] = e[2] + o[2] * r, t
    }

    function ka(t, e) {
        let o = e[0] - t[0],
            r = e[1] - t[1],
            n = e[2] - t[2];
        return Math.sqrt(o * o + r * r + n * n)
    }

    function bn(t, e) {
        let o = e[0] - t[0],
            r = e[1] - t[1],
            n = e[2] - t[2];
        return o * o + r * r + n * n
    }

    function du(t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t
    }

    function eo(t, e) {
        let o = e[0],
            r = e[1],
            n = e[2],
            i = o * o + r * r + n * n;
        return i > 0 && (i = 1 / Math.sqrt(i)), t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t
    }

    function xt(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }

    function ro(t, e, o) {
        let r = e[0],
            n = e[1],
            i = e[2],
            s = o[0],
            a = o[1],
            c = o[2];
        return t[0] = n * c - i * a, t[1] = i * s - r * c, t[2] = r * a - n * s, t
    }

    function br(t, e, o, r) {
        let n = e[0],
            i = e[1],
            s = e[2];
        return t[0] = n + r * (o[0] - n), t[1] = i + r * (o[1] - i), t[2] = s + r * (o[2] - s), t
    }

    function No(t, e, o) {
        let r = e[0],
            n = e[1],
            i = e[2],
            s = o[3] * r + o[7] * n + o[11] * i + o[15];
        return s = s || 1, t[0] = (o[0] * r + o[4] * n + o[8] * i + o[12]) / s, t[1] = (o[1] * r + o[5] * n + o[9] * i + o[13]) / s, t[2] = (o[2] * r + o[6] * n + o[10] * i + o[14]) / s, t
    }

    function Wo(t, e, o, r, n) {
        return t[0] = n[0] * e + n[4] * o + n[8] * r + n[12], t[1] = n[1] * e + n[5] * o + n[9] * r + n[13], t[2] = n[2] * e + n[6] * o + n[10] * r + n[14], t
    }

    function Pi(t, e, o, r, n) {
        return t[0] = n[0] * e + n[4] * o + n[8] * r, t[1] = n[1] * e + n[5] * o + n[9] * r, t[2] = n[2] * e + n[6] * o + n[10] * r, t
    }

    function Fa(t, e, o) {
        let r = e[0],
            n = e[1],
            i = e[2],
            s = o[0],
            a = o[1],
            c = o[2],
            l = o[3],
            f = a * i - c * n,
            d = c * r - s * i,
            u = s * n - a * r,
            m = a * u - c * d,
            h = c * f - s * u,
            g = s * d - a * f,
            M = l * 2;
        return f *= M, d *= M, u *= M, m *= 2, h *= 2, g *= 2, t[0] = r + f + m, t[1] = n + d + h, t[2] = i + u + g, t
    }
    var P5 = function() {
        let t = [0, 0, 0],
            e = [0, 0, 0];
        return function(o, r) {
            Ve(t, o), Ve(e, r), eo(t, t), eo(e, e);
            let n = xt(t, e);
            return n > 1 ? 0 : n < -1 ? Math.PI : Math.acos(n)
        }
    }();

    function uu(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
    }

    function Ca(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    function wr(t, e, o, r, n) {
        return t[0] = e, t[1] = o, t[2] = r, t[3] = n, t
    }

    function mu(t, e) {
        let o = e[0],
            r = e[1],
            n = e[2],
            i = e[3],
            s = o * o + r * r + n * n + i * i;
        return s > 0 && (s = 1 / Math.sqrt(s)), t[0] = o * s, t[1] = r * s, t[2] = n * s, t[3] = i * s, t
    }

    function M3(t, e, o) {
        o = o * .5;
        let r = Math.sin(o);
        return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = Math.cos(o), t
    }

    function Sa(t, e, o, r) {
        let n = e[0],
            i = e[1],
            s = e[2],
            a = e[3],
            c = o[0],
            l = o[1],
            f = o[2],
            d = o[3],
            u, m, h, g, M;
        return m = n * c + i * l + s * f + a * d, m < 0 && (m = -m, c = -c, l = -l, f = -f, d = -d), 1 - m > 1e-6 ? (u = Math.acos(m), h = Math.sin(u), g = Math.sin((1 - r) * u) / h, M = Math.sin(r * u) / h) : (g = 1 - r, M = r), t[0] = g * n + M * c, t[1] = g * i + M * l, t[2] = g * s + M * f, t[3] = g * a + M * d, t
    }

    function k3(t, e) {
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

    function Li(t, e) {
        let o = Math.sin(e[0] * .5),
            r = Math.cos(e[0] * .5),
            n = Math.sin(e[1] * .5),
            i = Math.cos(e[1] * .5),
            s = Math.sin(e[2] * .5),
            a = Math.cos(e[2] * .5);
        return t[0] = o * i * a + r * n * s, t[1] = r * n * a - o * i * s, t[2] = r * i * s - o * n * a, t[3] = r * i * a + o * n * s, t
    }
    var pu = mu;
    var U5 = function() {
            let t = [0, 0, 0],
                e = [1, 0, 0],
                o = [0, 1, 0];
            return function(r, n, i) {
                let s = xt(n, i);
                return s < -.999999 ? (ro(t, e, n), xn(t) < 1e-6 && ro(t, o, n), eo(t, t), M3(r, t, Math.PI), r) : s > .999999 ? (r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 1, r) : (ro(t, n, i), r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = 1 + s, pu(r, r))
            }
        }(),
        B5 = function() {
            let t = [0, 0, 0, 1],
                e = [0, 0, 0, 1];
            return function(o, r, n, i, s, a) {
                return Sa(t, r, s, a), Sa(e, n, i, a), Sa(o, t, e, 2 * a * (1 - a)), o
            }
        }(),
        j5 = function() {
            let t = [1, 0, 0, 0, 1, 0, 0, 0, 1];
            return function(e, o, r, n) {
                return t[0] = r[0], t[3] = r[1], t[6] = r[2], t[1] = n[0], t[4] = n[1], t[7] = n[2], t[2] = -o[0], t[5] = -o[1], t[8] = -o[2], pu(e, k3(e, t))
            }
        }();
    var Pa = $t(),
        F3 = () => ({
            parent: null,
            children: [],
            visible: !0,
            geometry: void 0,
            matrix: $t(),
            worldMatrix: $t(),
            position: [0, 0, 0],
            scale: [1, 1, 1],
            quaternion: [-0, -0, -0, 1],
            rotation: [-0, -0, -0],
            matrixAutoUpdate: !1,
            matrixNeedsUpdate: !0,
            data: {}
        }),
        jt = (t, e, o = !0) => {
            o && t.parent !== null && e !== t.parent && A3(t.parent, t, !1), t.parent = e, t.matrixNeedsUpdate = !0, o && e && C3(e, t, !1)
        },
        C3 = (t, e, o = !0) => {
            ~t.children.indexOf(e) || t.children.push(e), o && jt(e, t, !1)
        },
        A3 = (t, e, o = !0) => {
            ~t.children.indexOf(e) && t.children.splice(t.children.indexOf(e), 1), o && jt(e, null, !1)
        },
        tt = (t, e) => {
            if (!t.visible) return;
            let o = Ei(t),
                r = S3(t, e, o);
            t.children.forEach(n => {
                n.visible && tt(n, r)
            })
        },
        Ei = t => !t.matrixAutoUpdate && !t.matrixNeedsUpdate ? !1 : (t.matrixNeedsUpdate = !1, Li(t.quaternion, t.rotation), Ai(t.matrix, t.quaternion, t.position, t.scale), !0),
        S3 = (t, e, o) => t.parent !== null ? e || o ? (Ci(t.worldMatrix, t.parent.worldMatrix, t.matrix), !0) : !1 : o ? (nu(t.worldMatrix, t.matrix), !0) : !1;
    var wn = (t, e, o = !1, r) => {
            o ? Ma(Pa, t.position, e, r) : Ma(Pa, e, t.position, r), fu(t.rotation, Pa)
        },
        Di = [],
        St = () => Di.length > 0 ? Di.pop() : F3(),
        _r = t => {
            P3(t), Di.indexOf(t) < 0 ? Di.push(t) : console.log("tried returning transform that is already known")
        },
        P3 = t => {
            t.data = {}, t.geometry = void 0, t.visible = !0, t.matrixAutoUpdate = !1, re(t.position, 0, 0, 0), re(t.scale, 1, 1, 1), re(t.rotation, 0, 0, 0), jt(t, null, !0);
            for (let e = 0; e < t.children.length; ++e) jt(t.children[e], null);
            t.children.length = 0
        };
    var Ti = [0, 0, 0],
        _n = (t = .1, e = 100, o = 45, r = 1) => {
            let n = {
                near: t,
                far: e,
                fov: o,
                aspect: r,
                transform: St(),
                projectionMatrix: $t(),
                viewMatrix: $t(),
                unprojectionViewMatrix: $t(),
                projectionViewMatrix: $t(),
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
        Go = t => {
            cu(t.projectionMatrix, t.fov * (Math.PI / 180), t.aspect, t.near, t.far)
        },
        gu = (t, e, o, r, n) => {
            lu(t.projectionMatrix, e, o, r, n, t.near, t.far)
        },
        L3 = t => {
            iu(t.worldPosition, t.transform.worldMatrix)
        },
        Ii = (t, e) => {
            tt(t.transform, e), ya(t.viewMatrix, t.transform.worldMatrix), Ci(t.projectionViewMatrix, t.projectionMatrix, t.viewMatrix), ya(t.unprojectionViewMatrix, t.projectionViewMatrix), L3(t)
        };
    var zi = t => {
            let e = t.projectionViewMatrix;
            re(t.frustum[0], e[3] - e[0], e[7] - e[4], e[11] - e[8]), re(t.frustum[1], e[3] + e[0], e[7] + e[4], e[11] + e[8]), re(t.frustum[2], e[3] + e[1], e[7] + e[5], e[11] + e[9]), re(t.frustum[3], e[3] - e[1], e[7] - e[5], e[11] - e[9]), re(t.frustum[4], e[3] - e[2], e[7] - e[6], e[11] - e[10]), re(t.frustum[5], e[3] + e[2], e[7] + e[6], e[11] + e[10]), t.frustumConstants[0] = e[15] - e[12], t.frustumConstants[1] = e[15] + e[12], t.frustumConstants[2] = e[15] + e[13], t.frustumConstants[3] = e[15] - e[13], t.frustumConstants[4] = e[15] - e[14], t.frustumConstants[5] = e[15] + e[14];
            for (let o = 0; o < 6; o++) {
                let r = t.frustum[o],
                    n = 1 / xn(r);
                oo(r, r, n), t.frustumConstants[o] *= n
            }
        },
        vu = (t, e, o) => {
            Ve(Ti, e.bounds.center), No(Ti, Ti, o.worldMatrix);
            let r = e.bounds.radius * su(o.worldMatrix);
            return D3(t, Ti, r)
        },
        D3 = (t, e, o) => {
            for (let r = 0; r < 6; r++)
                if (xt(t.frustum[r], e) + t.frustumConstants[r] < -o) return !1;
            return !0
        };
    var ko = document.createElement("canvas"),
        v = ko.getContext("webgl2", {
            depth: !0,
            stencil: !1,
            premultipliedAlpha: !1,
            alpha: !1,
            antialias: !1,
            powerPreference: "high-performance",
            preserveDrawingBuffer: !0
        }),
        yn = document.createElement("canvas"),
        q5 = yn.getContext("2d", {
            alpha: !0
        }),
        Mr = v.vertexAttribDivisor.bind(v),
        bu = v.drawArraysInstanced.bind(v),
        wu = v.drawElementsInstanced.bind(v),
        _u = v.createVertexArray.bind(v),
        Vi = v.bindVertexArray.bind(v),
        E3 = v.deleteVertexArray.bind(v),
        La = v.getExtension("EXT_texture_filter_anisotropic"),
        yu = v.getExtension("WEBGL_compressed_texture_s3tc"),
        N = {
            maxTextureUnits: v.getParameter(v.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
            maxAnisotropy: v.getParameter(La.MAX_TEXTURE_MAX_ANISOTROPY_EXT),
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
        Mu = (t, e) => {
            N.width = t, N.height = e, ko.width = t, ko.height = e, yn.width = t, yn.height = e
        },
        Mn = (t, e) => {
            N.viewport.width === t && N.viewport.height === e || (N.viewport.width = t, N.viewport.height = e, v.viewport(0, 0, t, e))
        },
        kn = t => {
            N[t] !== !0 && (v.enable(t), N[t] = !0)
        },
        Ri = t => {
            N[t] !== !1 && (v.disable(t), N[t] = !1)
        },
        ku = (t, e, o, r) => {
            N.blendFunc.src === t && N.blendFunc.dst === e && N.blendFunc.srcAlpha === o && N.blendFunc.dstAlpha === r || (N.blendFunc.src = t, N.blendFunc.dst = e, N.blendFunc.srcAlpha = o, N.blendFunc.dstAlpha = r, o !== void 0 ? v.blendFuncSeparate(t, e, o, r) : v.blendFunc(t, e))
        },
        Fu = (t, e) => {
            N.blendEquation.modeRGB === t && N.blendEquation.modeAlpha === e || (N.blendEquation.modeRGB = t, N.blendEquation.modeAlpha = e, e !== void 0 ? v.blendEquationSeparate(t, e) : v.blendEquation(t))
        },
        Cu = t => {
            N.cullFace !== t && (N.cullFace = t, v.cullFace(t))
        },
        Au = t => {
            N.frontFace !== t && (N.frontFace = t, v.frontFace(t))
        },
        Da = t => {
            N.depthMask !== t && (N.depthMask = t, v.depthMask(t))
        },
        Su = t => {
            N.depthFunc !== t && (N.depthFunc = t, v.depthFunc(t))
        },
        Fn = t => {
            N.activeTextureUnit !== t && (N.activeTextureUnit = t, v.activeTexture(v.TEXTURE0 + t))
        },
        xu = ({
            target: t = v.FRAMEBUFFER,
            buffer: e = null
        } = {}) => {
            N.framebuffer !== e && (N.framebuffer = e, v.bindFramebuffer(t, e))
        },
        Pu = t => {
            t ? (xu(t), Mn(t.width, t.height)) : (xu(), Mn(N.width, N.height))
        },
        Ea = t => {
            (!t || !t.depth) && (kn(v.DEPTH_TEST), Da(!0)), v.clear(v.COLOR_BUFFER_BIT | v.DEPTH_BUFFER_BIT)
        };
    var kr = `#version 300 es
in vec2 uv;
in vec2 position;
out vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
}`;
    var Lu = [0, 1, 0],
        Du = [0, 0, 0],
        he = _n(.3, 500, 70),
        ot = St();
    jt(he.transform, ot);
    re(he.transform.position, 0, 0, -1);
    he.transform.rotation[1] = Math.PI;
    ot.matrixAutoUpdate = !0;
    var Yt = [],
        Cn = 0,
        Tu = 250,
        Ta = (t, e) => ({
            pos: to([0, 0, 0], At([0, 0, 0], t.pos, e.pos), t.pos),
            rot: t.rot
        }),
        Iu = t => {
            if (Yt.length < 2) return;
            Cn += Tu / 300 / Yt.length * t, Cn > 1 && (Cn = 0);
            let e = Cn * Yt.length,
                o = ~~(e / 1),
                r = e % 1,
                n = ~~o,
                i = ~~o + 1,
                s = ~~o + 2,
                a = ~~o + 3,
                c = Yt[n],
                l = Yt[i] || Ta(Yt[n], Yt[n - 1]),
                f = Yt[s] || Ta(l, c),
                d = Yt[a] || Ta(f, l);
            for (let u = 0; u < 3; ++u) ot.position[u] = Eu(c.pos[u], l.pos[u], f.pos[u], d.pos[u], r), ot.rotation[u] = Eu(c.rot[u], l.rot[u], f.rot[u], d.rot[u], r);
            tt(ot, !1)
        },
        zu = t => {
            Cn = t
        };
    var Vu = t => {
        Tu = t
    };
    var Eu = (t, e, o, r, n) => {
        let i = (o - t) * .5,
            s = (r - e) * .5,
            a = n * n,
            c = n * a;
        return (2 * e - 2 * o + i + s) * c + (-3 * e + 3 * o - 2 * i - s) * a + i * n + e
    };
    var Ui = [0, 0, 0],
        Ru = (t, e, o, r, n) => {
            if (t.length > 0) {
                re(e, 1 / 0, 1 / 0, 1 / 0), re(o, -1 / 0, -1 / 0, -1 / 0);
                for (let i = 0, s = t.length; i < s; i += 3) {
                    let a = t[i],
                        c = t[i + 1],
                        l = t[i + 2];
                    e[0] = Math.min(a, e[0]), e[1] = Math.min(c, e[1]), e[2] = Math.min(l, e[2]), o[0] = Math.max(a, o[0]), o[1] = Math.max(c, o[1]), o[2] = Math.max(l, o[2])
                }
            } else re(e, 0, 0, 0), re(o, -0, -0, -0);
            At(n, o, e), oo(r, to(r, e, o), .5)
        },
        I3 = t => {
            Ru(t.attributes.position.data, t.bounds.min, t.bounds.max, t.bounds.center, t.bounds.scale), t.bounds.initiated = !0
        },
        z3 = t => {
            let e = 0;
            for (let o = 0, r = t.attributes.position.data.length; o < r; o += 3) Ui[0] = t.attributes.position.data[o], Ui[1] = t.attributes.position.data[o + 1], Ui[2] = t.attributes.position.data[o + 2], e = Math.max(e, bn(t.bounds.center, Ui));
            t.bounds.radius = Math.sqrt(e)
        },
        Uu = t => {
            t.bounds.initiated || I3(t), z3(t)
        };
    var V3 = 1,
        R3 = 1,
        at = t => {
            let e = {
                id: V3++,
                vao: _u(),
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
            return Ia(e, e.attributes), e
        },
        kt = (t, e) => {
            N.boundBuffer !== e.id && (v.bindBuffer(e.target, e.buffer), N.boundBuffer = e.id), e.bufferLen < e.data.length ? (e.bufferLen = e.data.length, v.bufferData(e.target, e.data, e.bufferMode, 0, e.data.length)) : v.bufferSubData(e.target, 0, e.data, 0, e.data.length)
        },
        Bi = (t, e, o) => {
            N.boundBuffer !== e.id && (v.bindBuffer(e.target, e.buffer), N.boundBuffer = e.id);
            let r = o * e.size;
            e.bufferLen < r ? (e.bufferLen = r, v.bufferData(e.target, e.data, e.bufferMode, 0, r)) : v.bufferSubData(e.target, 0, e.data, 0, r)
        },
        U3 = (t, e, o) => {
            o.id = R3++, o.size = o.size || 1, o.type = o.type || (o.data.constructor === Float32Array ? v.FLOAT : o.data.constructor === Uint16Array ? v.UNSIGNED_SHORT : v.UNSIGNED_INT), o.target = e === "index" ? v.ELEMENT_ARRAY_BUFFER : v.ARRAY_BUFFER, o.normalize = o.normalize || !1, o.count = o.data.length / o.size, o.divisor = o.instanced ? typeof o.instanced == "number" ? o.instanced : 1 : 0, o.bufferMode = o.bufferMode || v.STATIC_DRAW, o.bufferLen = 0, o.buffer || (o.buffer = v.createBuffer()), kt(t, o)
        },
        B3 = (t, e, o) => {
            if (t.attributes[e] = o, o.divisor) {
                if (t.isInstanced = !0, t.instancedCount && t.instancedCount !== o.count * o.divisor) return t.instancedCount = Math.min(t.instancedCount, o.count * o.divisor);
                t.instancedCount = o.count * o.divisor
            } else e === "index" ? t.drawRangeCount = o.count : t.attributes.index || (t.drawRangeCount = Math.max(t.drawRangeCount, o.count))
        },
        Ia = (t, e) => {
            Vi(null), N.currentGeometry = -1;
            for (let o in e) e[o].id === void 0 && U3(t, o, e[o]), B3(t, o, e[o]);
            t.attributes.position && Uu(t)
        },
        ju = (t, e, o) => {
            t.attrRange = o, t.drawRangeStart = e, t.drawRangeCount = o
        },
        ji = (t, e) => {
            t.instancedCount = e
        },
        j3 = (t, e) => {
            Vi(t.vao);
            for (let o = 0; o < e.attributeLocations.length; ++o) {
                let r = e.attributeLocations[o];
                if (!t.attributes[r]) continue;
                let n = t.attributes[r];
                if (v.bindBuffer(v.ARRAY_BUFFER, n.buffer), N.boundBuffer = n.id, n.size > 4) {
                    let i = n.size / 4,
                        s = i * 4,
                        a = s * 4;
                    for (let c = 0; c < i; ++c) v.vertexAttribPointer(o + c, i, v.FLOAT, !1, a, s * c), v.enableVertexAttribArray(o + c), Mr(o + c, 1)
                } else v.vertexAttribPointer(o, n.size, n.type, n.normalize, 0, 0), v.enableVertexAttribArray(o), Mr(o, n.divisor)
            }
            t.attributes.index && v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, t.attributes.index.buffer), t.vaoNeedsUpdate = !1
        },
        Fr = (t, e) => {
            N.currentGeometry !== t.id && (t.vaoNeedsUpdate && j3(t, e), Vi(t.vao), N.currentGeometry = t.id)
        },
        Cr = (t, e, o) => {
            Fr(t, e), t.isInstanced ? t.attributes.index ? wu(o, t.drawRangeCount, t.attributes.index.type, t.drawRangeStart, t.instancedCount) : bu(o, t.drawRangeStart, t.drawRangeCount, t.instancedCount) : t.attributes.index ? v.drawElements(o, t.drawRangeCount, t.attributes.index.type, t.drawRangeStart) : v.drawArrays(o, t.drawRangeStart, t.drawRangeCount)
        };
    var q3 = 1,
        Ge = ({
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
            globalUniforms: d = {},
            attributeLocations: u
        }) => {
            let m = {
                id: q3++,
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
                globalUniforms: d,
                instancedAttributes: r,
                attributeLocations: u
            };
            m.transparent && !m.blendFunc.src && Sn(m, v.SRC_ALPHA, v.ONE_MINUS_SRC_ALPHA);
            let h = qu(t, v.VERTEX_SHADER),
                g = qu(e, v.FRAGMENT_SHADER);
            for (let M = 0; M < u.length; ++M) v.bindAttribLocation(m.program, M, u[M]);
            return v.attachShader(m.program, h), v.attachShader(m.program, g), v.linkProgram(m.program), v.deleteShader(h), v.deleteShader(g), m
        },
        Ou = (t, e) => {
            v.useProgram(t.program), N.currentProgram = t.id;
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
                    d = l === 35682;
                if (f) {
                    let u = s.size,
                        m = [];
                    for (let h = 0; h < u; ++h) {
                        let g = d ? r++ : n++;
                        m.push(g), t.samplerNames.push(c), t.samplerTexUnits.push(g), t.samplerTexArray.push(u === 1 ? -1 : h)
                    }
                    u === 1 ? v.uniform1i(a, m[0]) : v.uniform1iv(a, m)
                } else {
                    e[c] ? t.uniforms[c] || (t.uniforms[c] = e[c]) : t.uniforms[c] || (W3.has(c) || t.autoUniforms.push(c), t.uniforms[c] = {
                        value: void 0
                    });
                    let u = {
                        name: c,
                        location: a,
                        type: l,
                        data: t.uniforms[c],
                        fun: N3(l, t.uniforms[c].value)
                    };
                    t.uniformArray.push(u)
                }
            }
        },
        Nu = (t, e) => {
            for (let o = 0; o < e.length; ++o) {
                let r = e[o],
                    n = v.getUniformBlockIndex(t.program, r.name);
                n !== v.INVALID_INDEX && r.index >= 0 && v.uniformBlockBinding(t.program, n, r.index)
            }
        },
        Ar = (t, e) => {
            e || (v.useProgram(t.program), N.currentProgram = t.id), Sr(t), Va(t.uniformArray), An(t), Pr(t)
        },
        lt = (t, e, o, r) => {
            let n = r.samplerNames.indexOf(t);
            n >= 0 ? r.samplerTextures[n + o] = e : console.log("unknown texture type", t, r)
        },
        Sr = t => {
            for (let e = 0; e < t.samplerNames.length; ++e) {
                let o = t.samplerNames[e],
                    r = t.samplerTexArray[e];
                t.globalUniforms[o] && t.globalUniforms[o].value && (r < 0 ? t.samplerTextures[e] = t.globalUniforms[o].value : t.samplerTextures[e] = t.globalUniforms[o].value[r])
            }
        },
        qi = (t, e) => {
            for (let o = 0; o < e.samplerNames.length; ++o) {
                let r = e.samplerNames[o],
                    n = e.samplerTexArray[o];
                t[r] && (n < 0 ? e.samplerTextures[o] = t[r] : e.samplerTextures[o] = t[r][n])
            }
        },
        An = t => {
            for (let e = 0; e < t.samplerTexUnits.length; ++e) {
                let o = t.samplerTexUnits[e],
                    r = t.samplerTextures[e];
                r && N.textureUnits[o] !== r.id && (Fn(o), v.bindTexture(r.target, r.texture), N.textureUnits[o] = r.id)
            }
        },
        Sn = (t, e, o, r, n) => {
            t.blendFunc.src = e, t.blendFunc.dst = o, t.blendFunc.srcAlpha = r, t.blendFunc.dstAlpha = n, e && (t.transparent = !0)
        },
        za = {},
        qu = (t, e) => {
            if (za[t] !== void 0) return za[t];
            let o = za[t] = v.createShader(e);
            return v.shaderSource(o, t), v.compileShader(o), o
        },
        Pr = t => {
            t.depthTest ? kn(v.DEPTH_TEST) : Ri(v.DEPTH_TEST), t.cullFace ? kn(v.CULL_FACE) : Ri(v.CULL_FACE), t.blendFunc.src ? kn(v.BLEND) : Ri(v.BLEND), t.cullFace && Cu(t.cullFace), Au(t.frontFace), Da(t.depthWrite), Su(t.depthFunc), t.blendFunc.src && ku(t.blendFunc.src, t.blendFunc.dst, t.blendFunc.srcAlpha, t.blendFunc.dstAlpha), t.blendEquation.modeRGB && Fu(t.blendEquation.modeRGB, t.blendEquation.modeAlpha)
        },
        Va = t => {
            for (let e = 0; e < t.length; ++e) {
                let o = t[e];
                O3(v, o.fun, o.location, o.data.value)
            }
        };
    var O3 = (t, e, o, r) => {
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
        N3 = (t, e) => {
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
    var W3 = new Set(["projectionViewMatrix", "shadowPVMatrix", "modelMatrix", "viewMatrix", "projectionMatrix", "cameraPosition"]);
    var G3 = 0,
        Vt = (t, e, o, r = St(), n = 0) => ({
            id: G3++,
            uniformData: {},
            transform: r,
            geometry: t,
            program: e,
            shadowProgram: n,
            mode: o
        }),
        qt = (t, e) => {
            e.uniforms.modelMatrix && (e.uniforms.modelMatrix.value = t.transform.worldMatrix);
            for (let o = 0; o < e.autoUniforms.length; ++o) {
                let r = e.autoUniforms[o];
                e.uniforms[r].value = t.uniformData[r]
            }
            qi(t.uniformData, e), Ar(e, N.currentProgram === e.id), Cr(t.geometry, e, t.mode)
        };

    function Wu(t) {
        return t.charCodeAt(0) + (t.charCodeAt(1) << 8) + (t.charCodeAt(2) << 16) + (t.charCodeAt(3) << 24)
    }

    function Gu(t, e, o) {
        switch (t) {
            case Hu:
                return (e + 3 >> 2) * (o + 3 >> 2) * 8;
            case $u:
                return (e + 3 >> 2) * (o + 3 >> 2) * 16;
            default:
                return 0
        }
    }
    var Hu = 33777,
        $u = 33778,
        H3 = 131072,
        $3 = 31,
        Y3 = 1,
        X3 = 2,
        Q3 = 3,
        Z3 = 4,
        J3 = 7,
        K3 = 21,
        eb = Wu("DXT1"),
        tb = Wu("DXT3");

    function Yu(t) {
        let e = new Int32Array(t, 0, $3),
            o = e[K3],
            r;
        switch (o) {
            case eb:
                r = Hu;
                break;
            case tb:
                r = $u;
                break;
            default:
                console.error("Unsupported texture" + o)
        }
        let n = 1;
        e[X3] & H3 && (n = Math.max(1, e[J3]));
        let i = e[Z3],
            s = e[Q3],
            a = e[Y3] + 4;
        return {
            data: new Uint8Array(t, a),
            width: i,
            height: s,
            levels: n,
            internalFormat: r
        }
    }
    var rb = 1,
        Fo = function({
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
            flipY: d = !0,
            width: u,
            depth: m = 0,
            height: h = u,
            compareMode: g = v.NONE,
            compareFunc: M = v.LEQUAL,
            anisotropy: b = 1
        }) {
            return {
                id: rb++,
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
                flipY: d,
                width: u,
                height: h,
                depth: m,
                compareMode: g,
                texture: v.createTexture(),
                anisotropy: Math.min(Math.max(1, b), N.maxAnisotropy),
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
        Xu = t => {
            N.textureUnits[N.activeTextureUnit] !== t.id && (v.bindTexture(t.target, t.texture), N.textureUnits[N.activeTextureUnit] = t.id)
        },
        Ot = (t, e = 0) => {
            let o = !(t.image === t.state.image && !t.needsUpdate);
            if ((o || N.textureUnits[e] !== t.id) && (Fn(e), Xu(t)), !!o) {
                if (t.needsUpdate = !1, t.flipY !== N.flipY && (v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL, t.flipY), N.flipY = t.flipY), t.minFilter !== t.state.minFilter && (v.texParameteri(t.target, v.TEXTURE_MIN_FILTER, t.minFilter), t.state.minFilter = t.minFilter), t.magFilter !== t.state.magFilter && (v.texParameteri(t.target, v.TEXTURE_MAG_FILTER, t.magFilter), t.state.magFilter = t.magFilter), t.wrapS !== t.state.wrapS && (v.texParameteri(t.target, v.TEXTURE_WRAP_S, t.wrapS), t.state.wrapS = t.wrapS), t.wrapT !== t.state.wrapT && (v.texParameteri(t.target, v.TEXTURE_WRAP_T, t.wrapT), t.state.wrapT = t.wrapT), t.anisotropy !== t.state.anisotropy && (v.texParameterf(t.target, La.TEXTURE_MAX_ANISOTROPY_EXT, t.anisotropy), t.state.anisotropy = t.anisotropy), t.compareMode !== t.state.compareMode && (v.texParameteri(t.target, v.TEXTURE_COMPARE_MODE, t.compareMode), t.state.compareMode = t.compareMode), t.image) t.image.width && (t.width = t.image.width, t.height = t.image.height), v.texImage2D(t.target, 0, t.internalFormat, t.width, t.height, 0, t.format, t.type, t.image), t.generateMipmaps && v.generateMipmap(t.target);
                else if (t.buffer) {
                    let r = 0,
                        n = t.height,
                        i = t.width,
                        s = t.buffer.data;
                    for (let a = 0; a < t.buffer.levels; ++a) {
                        let c = Gu(t.internalFormat, n, n),
                            l = new Uint8Array(s.buffer, s.byteOffset + r, c);
                        v.compressedTexImage2D(t.target, a, t.internalFormat, i, n, 0, l), i = i >> 1, n = n >> 1, r += c
                    }
                } else t.target !== v.TEXTURE_2D_ARRAY ? v.texImage2D(t.target, 0, t.internalFormat, t.width, t.height, 0, t.format, t.type, null) : v.texImage3D(t.target, 0, t.internalFormat, t.width, t.height, t.depth, 0, t.format, t.type, null);
                t.state.image = t.image
            }
        },
        Oi = (t, e) => {
            t.anisotropy = Math.min(Math.max(1, e), N.maxAnisotropy), t.needsUpdate = !0
        };
    var Qu = (t, e, o, r, n) => {
        Fn(0), Xu(t), t.flipY !== N.flipY && (v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL, t.flipY), N.flipY = t.flipY), v.texSubImage3D(t.target, 0, 0, 0, e, o, r, 1, t.format, t.type, n), t.generateMipmaps && v.generateMipmap(t.target)
    };
    var fo = (t = v.canvas.width, e = v.canvas.height, o = 1, r = !1, n = v.NONE, i = v.CLAMP_TO_EDGE, s = v.CLAMP_TO_EDGE) => {
            let a = v.LINEAR,
                c = v.LINEAR,
                l = {
                    width: t,
                    height: e,
                    target: v.FRAMEBUFFER,
                    buffer: v.createFramebuffer()
                };
            if (v.bindFramebuffer(l.target, l.buffer), o && (l.colorTexture = Fo({
                    width: t,
                    height: e,
                    wrapS: i,
                    wrapT: s,
                    minFilter: a,
                    magFilter: c,
                    flipY: !1,
                    generateMipmaps: !1,
                    internalFormat: v.RGBA8
                }), Ot(l.colorTexture), v.framebufferTexture2D(l.target, v.COLOR_ATTACHMENT0, v.TEXTURE_2D, l.colorTexture.texture, 0)), r) {
                let f = n === v.COMPARE_REF_TO_TEXTURE ? v.LINEAR : v.NEAREST;
                l.depthTexture = Fo({
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
                }), Ot(l.depthTexture), v.framebufferTexture2D(l.target, v.DEPTH_ATTACHMENT, v.TEXTURE_2D, l.depthTexture.texture, 0)
            }
            return v.bindFramebuffer(l.target, null), l
        },
        Pn = (t, e, o) => {
            t.colorTexture.width = e, t.colorTexture.height = o, t.colorTexture.needsUpdate = !0, Ot(t.colorTexture), t.depthTexture && (t.depthTexture.width = e, t.depthTexture.height = o, t.depthTexture.needsUpdate = !0, Ot(t.depthTexture)), t.width = e, t.height = o
        };
    var ne, Ju = [0, 1, 0];
    var He = [0, 0, 0],
        ft = [0, 0, 0],
        Wi = [0, 0, 0],
        Qt = [0, 0, 0],
        Gi = [0, 0, 0],
        Ln = [0, 0, 0];
    var $o = [0, 0, 0, 0];
    var Z5 = $t(),
        Ku = t => {
            ne = t
        },
        Hi = 0,
        em = t => Hi = t;
    var $i = class {
        constructor(e) {
            this.id = e.id, this.cd = e.cd !== void 0 ? e.cd : 0, this.costMp = e.costMp, this.targetMode = e.targetMode || 0, this.onCast = e.onCast, this.onPermanent = e.onPermanent, this.range = e.range || 0, this.graceRange = this.range + Math.min(this.range * .2, 10), this.auto = e.auto || !1, this.engineOnly = e.engineOnly || !1, this.minlevel = e.minlevel || 0, this.castLen = e.castLen || 0, this.gcd = e.gcd !== void 0 ? e.gcd : 1.5, this.custom = e.custom, this.skilllevels = Math.min(5, e.skilllevels || 5), this.goldValue = e.goldValue || 0, this.noReward = e.noReward || !1, this.outOfCombat = e.outOfCombat || !1, this.pvpBoundsAdd = e.pvpBoundsAdd || 0, this.ignoreGcd = e.ignoreGcd || !1, this.ignoreIncapacitated = e.ignoreIncapacitated || !1, this.disablingBuffs = e.disablingBuffs || [], this.hasteAffected = e.hasteAffected !== void 0 ? e.hasteAffected : !0, this.skillpoints = e.skillpoints !== void 0 ? e.skillpoints : 1, this.envCast = e.envCast || 0
        }
        can(e, o, r = 0, n) {
            if (this.outOfCombat && !e.stats.combatTimer.done(ne.time)) return 11;
            if (this.costMp !== void 0 && e.stats.getResource(7) < this.costMp(o)) return 5;
            if (this.targetMode !== 1) {
                let i = ne.getEntityById(r),
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
    var R = class extends $i {
        constructor(e) {
            super(e), this.fx = e.fx || {}, this.autoSkillbar = e.autoSkillBar !== !1
        }
    };
    var Lr = (t, e, o, r) => ({
            id: t,
            minlevel: o,
            engineOnly: !1,
            cd: 0,
            custom: r,
            autoSkillBar: !1,
            onPermanent: () => e
        }),
        Pt = (t, e, o, r, n, i, s, a) => ({
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
        Yi = (t, e, o, r, n, i, s, a = 5, c) => ({
            id: t,
            targetMode: 256,
            range: 30,
            minlevel: o,
            cd: n,
            castLen: r,
            costMp: s,
            fx: c,
            onCast: (l, f, d) => ({
                id: e,
                mode: a,
                stacks: 1,
                caster: l.id,
                target: d,
                refresh: !0,
                duration: i,
                level: f
            })
        }),
        Yo = (t, e, o = 0, r = !0, n, i = !1, s = !1, a) => ({
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
    var tm = new R(Lr(21, 77, 1));
    var om = new R({
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
    var rm = t => .7 + t * .2,
        nb = t => rm(t) + 30 / (250 / 20),
        nm = new R({
            id: 33,
            targetMode: 17,
            skilllevels: 1,
            minlevel: 11,
            cd: 15,
            range: 30,
            disablingBuffs: [4],
            costMp: t => 12,
            custom: [
                [rm, "s stunned at min range"],
                [nb, "s stunned at max range"]
            ],
            onCast: (t, e, o) => {}
        });
    var im = new R(Pt(20, 76, 15, 300, 150, 20, t => t * 8, {
        animCast: 6
    }));
    var sm = new R({
        id: 18,
        cd: 0,
        minlevel: 8,
        autoSkillBar: !1,
        fx: {},
        onPermanent: () => 73
    });
    var am = new R({
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
    var cm = new R({
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
    var lm = new R({
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
    var ib = t => t * 8,
        fm = new R({
            id: 1,
            targetMode: 4096,
            minlevel: 1,
            cd: 1,
            range: 2,
            custom: [
                [ib, "% chance to daze target for 3 seconds"]
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
    var dm = t => 1e4 + t * 1e4,
        sb = (t, e) => {
            if (e.type === 1) {
                let o = 0;
                e.aggroValues.forEach((r, n) => {
                    r > o && (o = r)
                }), e.aggroValues.set(t.caster, o + dm(t.level)), e.buffs.buffs.has(122) && add({
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
        um = new R({
            id: 34,
            targetMode: 1,
            minlevel: 6,
            cd: 15,
            costMp: t => t * 4,
            fx: {
                animCast: 7
            },
            custom: [
                [dm, " aggro generation"]
            ],
            onCast: (t, e, o) => ({
                custom: sb,
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
    var mm = new R({
        id: 41,
        targetMode: 16,
        minlevel: 25,
        cd: 30,
        skilllevels: 1,
        gcd: 0,
        costMp: t => 3 + t * 5,
        onCast: (t, e, o) => {}
    });
    var pm = new R(Pt(19, 75, 18, 300, 150, 20, t => t * 8, {
        animCast: 6
    }));
    var hm = new R({
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
    var gm = new R(Pt(22, 78, 17, 300, 120, 20, t => 5 + t * 10, {
        animCast: 6
    }));
    var vm = new R(Yi(24, 80, 15, 1.5, 0, 300, t => 2 + t * 3, 4, {
        animCast: 9,
        animChannel: 18
    }));
    var xm = new R({
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
    var bm = new R({
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
    var wm = new R({
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
    var _m = new R({
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
    var ym = new R({
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
    var Mm = t => 2 + t * 2,
        km = new R({
            id: 23,
            targetMode: 16,
            minlevel: 5,
            cd: 60,
            gcd: 0,
            costMp: t => t * 5,
            custom: [
                [Mm, " attacks blocked"]
            ],
            fx: {
                animCast: 6
            },
            onCast: (t, e, o) => ({
                id: 79,
                mode: 4,
                stacks: Mm(e),
                duration: 60,
                caster: t.id,
                target: t.id,
                level: e
            })
        });
    var Fm = new R({
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
    var Cm = new R({
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
    var ab = () => 12,
        Am = new R({
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
                [ab, "m distance"]
            ],
            onCast: (t, e, o) => {}
        });
    var Sm = new R({
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
    var Pm = new R(Pt(28, 84, 12, 15, 60, 15, t => 1 + t * 3, {
        animCast: 6
    }));
    var Lm = new R({
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
    var Re = (t, e, o) => Math.min(Math.max(t, e), o);
    var Dn = (t, e, o) => {
        let r = Re((o - t) / (e - t), 0, 1);
        return r * r * (3 - 2 * r)
    };
    var En = (t, e, o) => e + Re(t, 0, 1) * (o - e),
        Rt = {
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
    var Dr = [Rt.linear, Rt.easeInQuad, Rt.easeInQuart, Rt.easeOutQuad, Rt.easeOutExpo, Rt.easeOutFlick, Rt.sin, Rt.sinReverse, Rt.easeInOutCubic, Rt.easeInOutQuint, Rt.easeBounce, Rt.anticipate, Rt.flicker];
    var uo = class {
        constructor(e = 0, o = 0) {
            this.start = e, this.end = e + o, this.duration = o
        }
        done(e) {
            return e > this.end
        }
        fraction(e) {
            return Re(1 - (this.end - e) / this.duration, 0, 1)
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
    var Dm = new R({
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
            interval: new uo(0, 2),
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
    var Em = new R(Pt(13, 68, 6, 15, 90, 15, void 0, {
        animCast: 22
    }));
    var Tm = new R({
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
    var Im = new R({
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
    var cb = t => 1 + t * 2,
        lb = t => 1 + t * 2,
        zm = new R(Lr(43, 106, 3, [
            [cb, "% haste per stack"],
            [lb, " jumps"]
        ]));
    var Vm = new R(Yi(7, 60, 3, 0, 0, 12, t => 2 + t * 2, 5, {
        animCast: 9
    }));
    var fb = t => Math.round(t * 1.3),
        db = t => t * 2,
        Rm = new R({
            id: 42,
            targetMode: 1,
            minlevel: 8,
            cd: 8,
            castLen: 0,
            range: 30 - 5,
            custom: [
                [fb, " mana gained per soul"],
                [db, " extended Decay duration"]
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
    var Um = new R({
        id: 105,
        engineOnly: !0,
        cd: 0,
        fx: {
            effectImpact: 47,
            effectMissile: 45
        }
    });
    var Bm = new R({
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
    var jm = new R({
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
    var qm = new R({
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
    var Om = new R({
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
    var Nm = new R(Lr(26, 82, 15));
    var ub = t => 3 + t * 5,
        Wm = new R({
            id: 11,
            targetMode: 16,
            minlevel: 7,
            cd: 50,
            gcd: 0,
            fx: {
                animCast: 6
            },
            custom: [
                [ub, "% of max mp recovered"]
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
    var Gm = new R(Pt(27, 83, 12, 10, 80, 20, t => 5 + t * 7, {
        animCast: 6
    }));
    var Hm = new R({
        id: 29,
        cd: 0,
        minlevel: 9,
        autoSkillBar: !1,
        onPermanent: () => 85
    });
    var $m = new R({
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
    var Ym = new R({
        id: 10,
        targetMode: 16,
        minlevel: 5,
        cd: 0,
        autoSkillBar: !1,
        skillpoints: 0,
        onPermanent: () => 65
    });
    var Xm = new R({
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
    var Qm = new R({
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
    var Zm = new R(Pt(25, 81, 18, 300, 120, 20, t => 5 + t * 5, {
        animCast: 6
    }));
    var Jm = new R({
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
    var Km = new R({
        id: 106,
        engineOnly: !0,
        cd: 0,
        fx: {
            effectMissile: 116,
            effectImpact: 117
        }
    });
    var e0 = new R({
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
    var mb = {
            medalValue: 1e3,
            goldValue: 8e4,
            buyElo: 1600
        },
        pb = {
            goldValue: 125e4
        },
        Ra = [{
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
        t0 = t => {
            Ra.forEach((e, o) => {
                t["charm" + o] = {
                    ...o <= 4 ? mb : pb,
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
    var o0 = new R(Yo(100, 30, 0, !0, !0, !1, !1, {
            animCast: 17
        })),
        r0 = new R(Yo(101, 1.5, 0, !0, !1, !1, !1)),
        n0 = new R(Yo(104, 1.5, 0, !1, !1, !1, !1, {
            animCast: 6
        })),
        i0 = new R(Yo(103, 1.5, 3, !0, !0, !1, !1, {
            animCast: 19,
            animChannel: 18
        })),
        s0 = new R(Yo(102, 1.5, 1.5, !1, !0, !1, !1, {
            animCast: 9,
            animChannel: 18
        })),
        a0 = Ra.map((t, e) => new R(Yo(107 + e, t.useCd, 0, !1, !1, t.incap, !0, {
            animCast: t.animCast
        }))).reduce((t, e) => ({
            ...t,
            ["charm" + e.id]: e
        }), {});
    var c0 = new R({
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
    var l0 = new R({
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
    var f0 = new R({
        id: 44,
        targetMode: 1,
        range: 50,
        minlevel: 3,
        cd: 5,
        engineOnly: !0,
        castLen: 1.5,
        costMp: t => t * 4
    });
    var d0 = new R({
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
    var u0 = new R({
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
    var m0 = new R({
        id: 57,
        targetMode: 4096,
        engineOnly: !0,
        fx: {
            effectMissile: 153,
            effectDirImpact: 154
        }
    });
    var p0 = new R({
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
    var h0 = new R({
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
    var g0 = new R({
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
    var v0 = new R({
        id: 8,
        engineOnly: !0,
        cd: 0,
        onPermanent: t => t.class + 61
    });
    var hb = {
            ...a0,
            hellspawn_missile: m0,
            conjurer_obeliskport: u0,
            boss_bigaoe: l0,
            boss_puddledot: d0,
            recall: g0,
            arrow: c0,
            melee: p0,
            potion: o0,
            book: r0,
            specialization: v0,
            mount: h0,
            activatemount: s0,
            container: i0,
            boss_flamepits: f0,
            useGeneric: n0
        },
        gb = {
            relentlessCry: lm,
            whirlwind: hm,
            temper: mm,
            taunt: um,
            charge: nm,
            warcry: pm,
            courage: im,
            armorreinforcement: tm,
            enrage: cm,
            slash: fm,
            blockBuff: om,
            crescentStrike: am,
            crescentBleed: sm
        },
        vb = {
            frostcall: xm,
            iceblock: _m,
            shatterfrost: Cm,
            teleport: Am,
            enchantment: vm,
            arcticaura: gm,
            iceshield: km,
            hypothermic: wm,
            frostnova: bm,
            icebolt: ym,
            icicle: Fm
        },
        xb = {
            vampiricarrowReturn: Km,
            boneshot: Om,
            blindingshot: qm,
            vampiricarrow: Jm,
            volley: e0,
            snipe: Xm,
            poisonarrows: Hm,
            temporaldilation: Zm,
            pathfinding: Gm,
            preciseShot: $m,
            serpentArrows: Ym,
            invigorate: Wm,
            swiftshot: Qm,
            cranialpunctures: Nm
        },
        bb = {
            mimirscleanse: Im,
            soulharvestReturn: Um,
            plaguespreader: zm,
            soulharvest: Rm,
            agonize: Sm,
            caninehowl: Pm,
            mana: Em,
            mend: Tm,
            revitalize: Vm,
            decay: Lm,
            healingtotem: Dm,
            summon: jm,
            spiritanimal: Bm
        },
        mo = new Map;
    [gb, vb, xb, bb, hb].forEach((t, e) => {
        for (let o in t) e <= 3 && (t[o].class = e), mo.set(t[o].id, t[o])
    });
    mo.set(64, new R({
        id: 64,
        engineOnly: !0
    }));
    var wb = [1600, 1800, 2e3, 2200],
        KA = wb.length;
    var Xo = "webp",
        Tn = "webp",
        Ua = "webp",
        _b = () => new Promise((t, e) => {
            let o = new Image;
            o.onerror = () => {
                e()
            }, o.onload = () => {
                Xo = Tn = Ua = "avif", t(!0)
            }, o.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
        }).catch(() => {
            console.log("Avif not supported", navigator.userAgent)
        });
    _b();
    var yb = [0, 0, 1, 1, 2, 3],
        x0 = (t, e) => "book" + (e !== void 0 ? e : "") + yb[t % 5];
    var Er = t => `/data/ui/skills/${t}.${Tn}?v=8862189`;
    var Ba = t => `/data/ui/classes/${t}.${Xo}?v=8862189`,
        ja = t => `/data/ui/factions/${t}.${Xo}?v=8862189`;
    var w0 = t => {
        mo.forEach(e => {
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
                        art: x0(r, e.class),
                        useSkill: 101
                    }
                }
        })
    };
    var Mb = [{
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
        _0 = t => {
            Mb.forEach(e => {
                t["box" + e.id] = {
                    ...e,
                    type: "box",
                    tier: e.id,
                    unsellable: !0
                }
            })
        };
    var Qo = {
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
        lS = Object.keys(Qo),
        kb = {
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
        fS = Object.keys(kb);
    var y0 = t => {
            for (let e in Qo)
                if (Qo[e].tiers) {
                    let o = Qo[e];
                    for (let r = 0; r < o.tiers; ++r) Cb({
                        type: e,
                        tier: r,
                        stats: o.stats,
                        level: Fb(e, r),
                        class: o.class,
                        quality: o.quality
                    }, t)
                }
        },
        Fb = (t, e) => Qo[t].baselvl + Math.floor(e / Qo[t].tiers * 100),
        Cb = (t, e) => {
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
    var Ab = [250, 100, 500, 200, 1e3, 300],
        M0 = t => {
            for (let e = 0; e < 6; ++e) {
                let o = Math.floor(e / 2),
                    r = e % 2 == 0;
                t["misc" + e] = {
                    type: "misc",
                    tier: e,
                    level: 1 + o * 20,
                    goldValue: [2, 10, 30][o],
                    quality: 15,
                    custom: ["" + Ab[e] + (r ? " HP recovered" : " MP recovered")],
                    useSkill: 100
                }
            }
        };
    var Sb = [{
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
        k0 = t => {
            Sb.forEach((e, o) => {
                t["mount" + o] = {
                    ...e,
                    type: "mount",
                    tier: o,
                    requiredSkill: 39,
                    useSkill: 102
                }
            })
        };
    var Pb = [1919, 1920, 1944, 1945, 1946, 1947, 1948, 1960, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975],
        F0 = t => {
            Pb.forEach((e, o) => {
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
    var C0 = t => {
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
    var po = {};
    y0(po);
    M0(po);
    w0(po);
    k0(po);
    t0(po);
    F0(po);
    C0(po);
    _0(po);
    var Tr = Object.values(po);
    Tr.forEach((t, e) => t.id = e);
    var Zo = async (t, e, o) => {
        let r = await fetch(t, {
            method: e !== void 0 ? "POST" : "GET",
            body: e ? JSON.stringify(e) : void 0
        });
        return r.status === 500 ? o(await r.text()) : await r.json()
    };
    var Xi = new Map,
        Qi = new Map,
        Zi = new Map,
        Lb = new Map,
        Db = new Map,
        Ir = new Map,
        ho = new Map,
        Oa = new Map,
        zr = new Map,
        Vr = new Map,
        Na = new Map,
        Rr = new Map,
        Eb = new Map,
        Tb = new Map,
        Ib = new Map,
        zb = new Map,
        Vb = new Map,
        Rb = new Map,
        Ub = new Map,
        Bb = new Map,
        jb = [],
        In = [],
        Wa = new Map,
        qb = new Map;
    var qa = t => {
        t.classes.forEach(e => qb.set(e.id, e)), t.files.forEach(e => Ir.set(e.id, e)), t.particles.forEach(e => Xi.set(e.id, e)), t.effects.forEach(e => Qi.set(e.id, e)), t.sounds.forEach(e => Zi.set(e.id, e)), t.soundsets.forEach(e => Lb.set(e.id, e)), t.soundsetSteps.forEach(e => Db.set(e.id, e)), t.meshes.forEach(e => ho.set(e.id, e)), t.ribbons.forEach(e => Oa.set(e.id, e)), t.areas.forEach(e => Na.set(e.id, e)), t.terrains.forEach(e => zr.set(e.id, e)), t.foliages.forEach(e => Vr.set(e.id, e)), t.environments.forEach(e => Rr.set(e.id, e)), t.animations.forEach(e => Eb.set(e.id, e)), t.skins.forEach(e => Tb.set(e.id, e)), t.skeletons.forEach(e => Ib.set(e.id, e)), t.creatures.forEach(e => zb.set(e.id, e)), t.creaturesMonster.forEach(e => Vb.set(e.id, e)), t.creaturesConjurer.forEach(e => Rb.set(e.id, e)), t.creaturesTrader.forEach(e => Ub.set(e.id, e)), t.traderShopItems.forEach(e => Bb.set(e.id, e)), t.worlds.forEach(e => {
            Wa.set(e.id, e)
        });
        for (let e = 0; e < t.filesExt.length; ++e) In.push(t.filesExt[e]);
        for (let e = 0; e < t.minimap.length; ++e) jb.push(t.minimap[e])
    };
    var A0 = (t, e) => {
        if (!Ir.has(t)) return console.log("unknown file id: " + t), "";
        let o = Ir.get(t);
        return `${t}.${e||In[o.ext]}`
    };
    var p = 0,
        S0 = {
            string: t => {
                let e = T0(t);
                return Nt(e) + e
            },
            varuint: t => Nt(t),
            varint: t => Ob(t),
            buffer8: t => {
                let e = t.length;
                return Nt(e) + e
            },
            buffer16: (t, e) => {
                let o = t.length * 2,
                    r = Nt(o);
                return (e + r) % 2 == 1 && r++, r + o
            }
        };
    var E = t => {
        let e = 0,
            o = 0,
            r = 0;
        do r = t[p++], e |= (r & 127) << 7 * o, o++; while (r & 128);
        return e
    };
    var Co = (t, e) => {
            for (; e > 127;) t[p++] = e & 127 | 128, e >>= 7;
            t[p++] = e & 127
        },
        Nt = t => t <= 0 ? 1 : Math.floor(Math.log(t) / Math.log(128)) + 1,
        Ob = t => Nt(t << 1 ^ t >> 31),
        Zt = t => t[p] & 128 ? (255 - t[p] + 1) * -1 : t[p],
        Nb = (t, e) => {
            e < 0 && (e = 255 + e + 1), t[p] = e & 255, p += 1
        },
        j = t => t[p],
        no = (t, e) => {
            t[p] = e, p += 1
        },
        Ji = t => {
            let e = t[p] | t[p + 1] << 8;
            return e & 32768 ? e | 4294901760 : e
        },
        Ga = (t, e) => {
            t[p] = e & 255, t[p + 1] = e >>> 8, p += 2
        },
        we = t => t[p] | t[p + 1] << 8;
    var Ft = t => (t[p] | t[p + 1] << 8 | t[p + 2] << 16) + t[p + 3] * 16777216,
        Ha = (t, e) => {
            t[p] = e & 255, t[p + 1] = e >>> 8, t[p + 2] = e >>> 16, t[p + 3] = e >>> 24, p += 4
        },
        $a = new ArrayBuffer(8),
        Ao = new Uint8Array($a),
        D0 = new Float32Array($a),
        BS = new Float64Array($a),
        G = t => (Ao[0] = t[p], Ao[1] = t[p + 1], Ao[2] = t[p + 2], Ao[3] = t[p + 3], D0[0]),
        E0 = (t, e) => {
            D0[0] = e, t[p] = Ao[0], t[p + 1] = Ao[1], t[p + 2] = Ao[2], t[p + 3] = Ao[3], p += 4
        };
    var P0 = t => {
            let e = E(t);
            p % 2 == 1 && p++;
            let o = new Uint16Array(t.buffer, p, e / 2);
            return p += e, o
        },
        T0 = t => {
            let e = t.length;
            for (let o = t.length - 1; o >= 0; o--) {
                let r = t.charCodeAt(o);
                r > 127 && r <= 2047 ? e++ : r > 2047 && r <= 65535 && (e += 2), r >= 56320 && r <= 57343 && o--
            }
            return e
        },
        L0 = (t, e) => {
            let o = T0(e);
            Co(t, o);
            for (let r = 0; r < e.length; r++) {
                let n = e.charCodeAt(r);
                n < 128 ? t[p++] = n : n < 2048 ? (t[p++] = n >> 6 | 192, t[p++] = n & 63 | 128) : (n & 64512) == 55296 && r + 1 < e.length && (e.charCodeAt(r + 1) & 64512) == 56320 ? (n = 65536 + ((n & 1023) << 10) + (e.charCodeAt(++r) & 1023), t[p++] = n >> 18 | 240, t[p++] = n >> 12 & 63 | 128, t[p++] = n >> 6 & 63 | 128, t[p++] = n & 63 | 128) : (t[p++] = n >> 12 | 224, t[p++] = n >> 6 & 63 | 128, t[p++] = n & 63 | 128)
            }
        },
        ct = t => {
            let e = E(t),
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
        I0 = {
            encode: t => {
                let e = t,
                    o = e.doubles,
                    r = e.int8s,
                    n = e.uint16s,
                    i = e.uint8s,
                    s = 0;
                s += 1, s += Nt(o.length);
                for (let c = 0; c < o.length; c++) s += 4;
                s += Nt(r.length);
                for (let c = 0; c < r.length; c++) s += 1;
                s += Nt(n.length);
                for (let c = 0; c < n.length; c++) s += 2;
                s += Nt(i.length);
                for (let c = 0; c < i.length; c++) s += 1;
                let a = new Uint8Array(s);
                p = 0, no(a, e._header), Co(a, o.length);
                for (let c = 0; c < o.length; c++) E0(a, o[c]);
                Co(a, r.length);
                for (let c = 0; c < r.length; c++) Nb(a, r[c]);
                Co(a, n.length);
                for (let c = 0; c < n.length; c++) Ga(a, n[c]);
                Co(a, i.length);
                for (let c = 0; c < i.length; c++) no(a, i[c]);
                return a
            }
        },
        z0 = {
            encode: t => {
                let e = t,
                    o = 0;
                o += 1, o += 4;
                let r = new Uint8Array(o);
                return p = 0, no(r, e._header), Ha(r, e.target), r
            }
        },
        V0 = {
            encode: t => {
                let e = t,
                    o = e.info,
                    r = 0;
                r += 1, r += 2, r += Nt(o.length);
                for (let i = 0; i < o.length; i++) r += 4;
                let n = new Uint8Array(r);
                p = 0, no(n, e._header), Ga(n, e.id), Co(n, o.length);
                for (let i = 0; i < o.length; i++) Ha(n, o[i]);
                return n
            }
        },
        R0 = {
            encode: t => {
                let e = t,
                    o = e.info,
                    r = e.pos,
                    n = 0;
                n += 1, n += 2, n += Nt(o.length);
                for (let s = 0; s < o.length; s++) n += 4;
                n += Nt(r.length);
                for (let s = 0; s < r.length; s++) n += 4;
                let i = new Uint8Array(n);
                p = 0, no(i, e._header), Ga(i, e.id), Co(i, o.length);
                for (let s = 0; s < o.length; s++) Ha(i, o[s]);
                Co(i, r.length);
                for (let s = 0; s < r.length; s++) E0(i, r[s]);
                return i
            }
        },
        U0 = {
            encode: t => {
                let e = t,
                    o = 0;
                o += 1, o += 1;
                let r = new Uint8Array(o);
                return p = 0, no(r, e._header), no(r, e.id), r
            }
        },
        B0 = {
            encode: t => {
                let e = t,
                    o = 0;
                o += 1, o += S0.string(e.command, o), o += S0.string(e.string, o);
                let r = new Uint8Array(o);
                return p = 0, no(r, e._header), L0(r, e.command), L0(r, e.string), r
            }
        },
        j0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0, o._header = j(e), p += 1;
                let r = [];
                o.inputs = r;
                let n = E(e);
                for (let d = 0; d < n; d++) {
                    let u = {};
                    r[d] = u, u.id = Ft(e), p += 4, u.jump = j(e), p += 1, u.rot = G(e), p += 4, u.speed = we(e), p += 2;
                    let m = [];
                    u.steer = m, m[0] = Zt(e), p += 1;
                    let h = E(e);
                    for (let g = 1; g < h; g++) m[g] = Zt(e), p += 1
                }
                let i = [];
                o.log = i;
                let s = E(e);
                for (let d = 0; d < s; d++) {
                    let u = {};
                    i[d] = u;
                    let m = [];
                    u.data = m;
                    let h = E(e);
                    for (let g = 0; g < h; g++) m[g] = E(e);
                    u.type = j(e), p += 1
                }
                let a = [];
                o.logPersonal = a;
                let c = E(e);
                for (let d = 0; d < c; d++) {
                    let u = {};
                    a[d] = u;
                    let m = [];
                    u.data = m;
                    let h = E(e);
                    for (let g = 0; g < h; g++) m[g] = E(e);
                    u.type = j(e), p += 1
                }
                let l = [];
                o.movements = l;
                let f = E(e);
                for (let d = 0; d < f; d++) {
                    let u = {};
                    l[d] = u, u.id = Ft(e), p += 4;
                    let m = [];
                    u.pos = m, m[0] = G(e), p += 4, m[1] = G(e), p += 4;
                    let h = E(e);
                    for (let b = 2; b < h; b++) m[b] = G(e), p += 4;
                    let g = [];
                    u.vel = g, g[0] = G(e), p += 4, g[1] = G(e), p += 4;
                    let M = E(e);
                    for (let b = 2; b < M; b++) g[b] = G(e), p += 4
                }
                return o.tickId = Ft(e), p += 4, o
            }
        },
        q0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0, o._header = j(e), p += 1;
                let r = [];
                o.members = r;
                let n = E(e);
                for (let a = 0; a < n; a++) {
                    let c = {};
                    r[a] = c, c.class = j(e), p += 1, c.entityid = Ft(e), p += 4, c.level = j(e), p += 1, c.name = ct(e), c.role = we(e), p += 2, c.world = ct(e)
                }
                let i = [];
                o.queues = i;
                let s = E(e);
                for (let a = 0; a < s; a++) i[a] = ct(e);
                return o
            }
        },
        O0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0, o._header = j(e), p += 1, o.contrib = E(e);
                let r = [];
                o.contributors = r;
                let n = E(e);
                for (let a = 0; a < n; a++) {
                    let c = {};
                    r[a] = c, c.class = j(e), p += 1, c.faction = j(e), p += 1, c.level = j(e), p += 1, c.name = ct(e);
                    let l = [];
                    c.stats = l;
                    let f = E(e);
                    for (let d = 0; d < f; d++) l[d] = E(e)
                }
                o.duration = E(e);
                let i = [];
                o.kills = i, i[0] = E(e);
                let s = E(e);
                for (let a = 1; a < s; a++) i[a] = E(e);
                return o.level = E(e), o.reward = E(e), o.status = j(e), p += 1, o
            }
        },
        N0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0, o._header = j(e), p += 1;
                let r = [];
                o.members = r;
                let n = E(e);
                for (let i = 0; i < n; i++) {
                    let s = {};
                    r[i] = s, s.entityid = Ft(e), p += 4;
                    let a = [];
                    s.pos = a;
                    let c = E(e);
                    for (let l = 0; l < c; l++) a[l] = we(e), p += 2
                }
                return o
            }
        },
        W0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0, o._header = j(e), p += 1;
                let r = [];
                o.icons = r;
                let n = E(e);
                for (let i = 0; i < n; i++) {
                    let s = {};
                    r[i] = s, s.blink = !!Zt(e), p += 1, s.id = we(e), p += 2;
                    let a = [];
                    s.pos = a, a[0] = we(e), p += 2;
                    let c = E(e);
                    for (let l = 1; l < c; l++) a[l] = we(e), p += 2
                }
                return o
            }
        },
        G0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0, o._header = j(e), p += 1, o.channel = ct(e), o.clan = ct(e), o.class = j(e), p += 1, o.faction = j(e), p += 1, o.from = ct(e), o.id = Ft(e), p += 4;
                let r = [];
                o.items = r;
                let n = E(e);
                for (let i = 0; i < n; i++) {
                    let s = {};
                    r[i] = s, s.id = Ft(e), p += 4, s.index = we(e), p += 2;
                    let a = [];
                    s.rolls = a;
                    let c = E(e);
                    for (let l = 0; l < c; l++) a[l] = we(e), p += 2;
                    s.stacks = j(e), p += 1, s.tier = we(e), p += 2, s.type = ct(e), s.upgrade = we(e), p += 2
                }
                return o.level = j(e), p += 1, o.message = ct(e), o.subscribed = j(e), p += 1, o
            }
        },
        H0 = {
            decode: t => {
                let e = t,
                    o = {};
                return p = 0, o._header = j(e), p += 1, o.world = ct(e), o
            }
        },
        $0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0, o._header = j(e), p += 1;
                let r = [];
                o.messages = r;
                let n = E(e);
                for (let i = 0; i < n; i++) {
                    let s = {};
                    r[i] = s, s.message = ct(e), s.type = ct(e)
                }
                return o
            }
        },
        Y0 = {
            decode: t => {
                let e = t,
                    o = {};
                return p = 0, o._header = j(e), p += 1, o.file = ct(e), o.playerId = Ft(e), p += 4, o.tickId = Ft(e), p += 4, o.world = ct(e), o
            }
        },
        X0 = {
            decode: t => {
                let e = t,
                    o = {};
                return p = 0, o._header = j(e), p += 1, o.pos = we(e), p += 2, o
            }
        },
        Q0 = {
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
                return p = 0, no(r, e._header), no(r, e.id), r
            }
        };
    var Z0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0;
                let r = [];
                o.aabb = r;
                let n = E(e);
                for (let T = 0; T < n; T++) r[T] = G(e), p += 4;
                let i = [];
                o.area = i;
                let s = E(e);
                for (let T = 0; T < s; T++) i[T] = we(e), p += 2;
                let a = [];
                o.environment = a;
                let c = E(e);
                for (let T = 0; T < c; T++) a[T] = we(e), p += 2;
                let l = [];
                o.holes = l;
                let f = E(e);
                for (let T = 0; T < f; T++) l[T] = we(e), p += 2;
                let d = [];
                o.props = d;
                let u = E(e);
                for (let T = 0; T < u; T++) {
                    let V = {};
                    d[T] = V, V.id = Ft(e), p += 4, V.rx = Ji(e), p += 2, V.ry = Ji(e), p += 2, V.rz = Ji(e), p += 2, V.scale = we(e), p += 2, V.x = we(e), p += 2, V.y = Ft(e), p += 4, V.z = we(e), p += 2
                }
                let m = [];
                o.shore = m;
                let h = E(e);
                for (let T = 0; T < h; T++) m[T] = we(e), p += 2;
                o.terrain = P0(e);
                let g = [];
                o.texture = g;
                let M = E(e);
                for (let T = 0; T < M; T++) g[T] = P0(e);
                let b = [];
                o.textureid = b;
                let _ = E(e);
                for (let T = 0; T < _; T++) {
                    let V = [];
                    b[T] = V;
                    let ae = E(e);
                    for (let q = 0; q < ae; q++) V[q] = we(e), p += 2
                }
                let k = [];
                o.water = k;
                let U = E(e);
                for (let T = 0; T < U; T++) k[T] = we(e), p += 2;
                return o
            }
        },
        J0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0;
                let r = [];
                o.color = r;
                let n = E(e);
                for (let b = 0; b < n; b++) r[b] = j(e), p += 1;
                let i = [];
                o.flags = i;
                let s = E(e);
                for (let b = 0; b < s; b++) i[b] = j(e), p += 1;
                let a = [];
                o.index = a;
                let c = E(e);
                for (let b = 0; b < c; b++) a[b] = E(e);
                let l = [];
                o.indexInvisible = l;
                let f = E(e);
                for (let b = 0; b < f; b++) l[b] = E(e);
                let d = [];
                o.normal = d;
                let u = E(e);
                for (let b = 0; b < u; b++) d[b] = Zt(e), p += 1;
                let m = [];
                o.position = m;
                let h = E(e);
                for (let b = 0; b < h; b++) m[b] = Ji(e), p += 2;
                o.sx = Ft(e), p += 4, o.sy = Ft(e), p += 4, o.sz = Ft(e), p += 4;
                let g = [];
                o.uv = g;
                let M = E(e);
                for (let b = 0; b < M; b++) g[b] = we(e), p += 2;
                return o
            }
        },
        K0 = {
            decode: t => {
                let e = t,
                    o = {};
                p = 0;
                let r = [];
                o.animations = r;
                let n = E(e);
                for (let P = 0; P < n; P++) {
                    let x = {};
                    r[P] = x, x.duration = G(e), p += 4;
                    let K = [];
                    x.effects = K;
                    let Me = E(e);
                    for (let ce = 0; ce < Me; ce++) {
                        let ve = {};
                        K[ce] = ve, ve.body = j(e), p += 1, ve.end = G(e), p += 4, ve.id = j(e), p += 1, ve.priority = j(e), p += 1, ve.start = G(e), p += 4, ve.type = j(e), p += 1
                    }
                    x.id = j(e), p += 1, x.movement = j(e), p += 1, x.priority = j(e), p += 1;
                    let ee = [];
                    x.sounds = ee;
                    let le = E(e);
                    for (let ce = 0; ce < le; ce++) {
                        let ve = {};
                        ee[ce] = ve, ve.end = j(e), p += 1, ve.id = j(e), p += 1, ve.start = G(e), p += 4
                    }
                }
                let i = [];
                o.areas = i;
                let s = E(e);
                for (let P = 0; P < s; P++) {
                    let x = {};
                    i[P] = x, x.ambientday = j(e), p += 1, x.ambientnight = j(e), p += 1, x.id = j(e), p += 1, x.music = j(e), p += 1, x.name = ct(e)
                }
                let a = [];
                o.arenas = a;
                let c = E(e);
                for (let P = 0; P < c; P++) {
                    let x = {};
                    a[P] = x, x.group = j(e), p += 1, x.id = j(e), p += 1;
                    let K = [];
                    x.pos = K;
                    let Me = E(e);
                    for (let ee = 0; ee < Me; ee++) K[ee] = G(e), p += 4;
                    x.radius = j(e), p += 1, x.rot = G(e), p += 4, x.type = j(e), p += 1, x.world = j(e), p += 1
                }
                let l = [];
                o.classes = l;
                let f = E(e);
                for (let P = 0; P < f; P++) {
                    let x = {};
                    l[P] = x;
                    let K = [];
                    x.baseStats = K;
                    let Me = E(e);
                    for (let Fe = 0; Fe < Me; Fe++) {
                        let Mt = [];
                        K[Fe] = Mt;
                        let ge = E(e);
                        for (let bt = 0; bt < ge; bt++) Mt[bt] = j(e), p += 1
                    }
                    let ee = [];
                    x.engineSkills = ee;
                    let le = E(e);
                    for (let Fe = 0; Fe < le; Fe++) ee[Fe] = j(e), p += 1;
                    x.id = j(e), p += 1;
                    let ce = [];
                    x.startSkills = ce;
                    let ve = E(e);
                    for (let Fe = 0; Fe < ve; Fe++) ce[Fe] = j(e), p += 1;
                    let Se = [];
                    x.statPerLevel = Se;
                    let Tt = E(e);
                    for (let Fe = 0; Fe < Tt; Fe++) {
                        let Mt = [];
                        Se[Fe] = Mt;
                        let ge = E(e);
                        for (let bt = 0; bt < ge; bt++) Mt[bt] = j(e), p += 1
                    }
                }
                let d = [];
                o.creatures = d;
                let u = E(e);
                for (let P = 0; P < u; P++) {
                    let x = {};
                    d[P] = x;
                    let K = [];
                    x.col1 = K;
                    let Me = E(e);
                    for (let ce = 0; ce < Me; ce++) K[ce] = G(e), p += 4;
                    let ee = [];
                    x.col2 = ee;
                    let le = E(e);
                    for (let ce = 0; ce < le; ce++) ee[ce] = G(e), p += 4;
                    x.drProtection = !!Zt(e), p += 1, x.faction = j(e), p += 1, x.id = we(e), p += 2, x.level = j(e), p += 1, x.name = ct(e), x.skin = j(e), p += 1, x.type = j(e), p += 1
                }
                let m = [];
                o.creaturesConjurer = m;
                let h = E(e);
                for (let P = 0; P < h; P++) {
                    let x = {};
                    m[P] = x, x.id = we(e), p += 2, x.war = !!Zt(e), p += 1
                }
                let g = [];
                o.creaturesMonster = g;
                let M = E(e);
                for (let P = 0; P < M; P++) {
                    let x = {};
                    g[P] = x, x.aggroMode = j(e), p += 1, x.id = we(e), p += 2, x.rarity = j(e), p += 1
                }
                let b = [];
                o.creaturesTrader = b;
                let _ = E(e);
                for (let P = 0; P < _; P++) {
                    let x = {};
                    b[P] = x, x.id = we(e), p += 2, x.shop = j(e), p += 1
                }
                let k = [];
                o.effects = k;
                let U = E(e);
                for (let P = 0; P < U; P++) {
                    let x = {};
                    k[P] = x, x.duration = G(e), p += 4;
                    let K = [];
                    x.events = K;
                    let Me = E(e);
                    for (let ce = 0; ce < Me; ce++) {
                        let ve = {};
                        K[ce] = ve, ve.fraction = G(e), p += 4, ve.id = j(e), p += 1;
                        let Se = [];
                        ve.params = Se;
                        let Tt = E(e);
                        for (let Fe = 0; Fe < Tt; Fe++) Se[Fe] = G(e), p += 4
                    }
                    x.id = j(e), p += 1;
                    let ee = [];
                    x.periods = ee;
                    let le = E(e);
                    for (let ce = 0; ce < le; ce++) {
                        let ve = {};
                        ee[ce] = ve, ve.fractionEnd = G(e), p += 4, ve.fractionStart = G(e), p += 4, ve.id = j(e), p += 1;
                        let Se = [];
                        ve.modifiers = Se;
                        let Tt = E(e);
                        for (let ge = 0; ge < Tt; ge++) {
                            let bt = {};
                            Se[ge] = bt, bt.id = j(e), p += 1, bt.mode = j(e), p += 1;
                            let _o = [];
                            bt.params = _o;
                            let sn = E(e);
                            for (let Ce = 0; Ce < sn; Ce++) _o[Ce] = G(e), p += 4
                        }
                        let Fe = [];
                        ve.params = Fe;
                        let Mt = E(e);
                        for (let ge = 0; ge < Mt; ge++) Fe[ge] = G(e), p += 4
                    }
                }
                let T = [];
                o.environments = T;
                let V = E(e);
                for (let P = 0; P < V; P++) {
                    let x = {};
                    T[P] = x;
                    let K = [];
                    x.ambient = K;
                    let Me = E(e);
                    for (let ue = 0; ue < Me; ue++) {
                        let De = [];
                        K[ue] = De;
                        let ke = E(e);
                        for (let be = 0; be < ke; be++) De[be] = G(e), p += 4
                    }
                    let ee = [];
                    x.bloom = ee;
                    let le = E(e);
                    for (let ue = 0; ue < le; ue++) ee[ue] = G(e), p += 4;
                    let ce = [];
                    x.clouds = ce;
                    let ve = E(e);
                    for (let ue = 0; ue < ve; ue++) {
                        let De = [];
                        ce[ue] = De;
                        let ke = E(e);
                        for (let be = 0; be < ke; be++) De[be] = G(e), p += 4
                    }
                    let Se = [];
                    x.direct = Se;
                    let Tt = E(e);
                    for (let ue = 0; ue < Tt; ue++) {
                        let De = [];
                        Se[ue] = De;
                        let ke = E(e);
                        for (let be = 0; be < ke; be++) De[be] = G(e), p += 4
                    }
                    let Fe = [];
                    x.fog = Fe;
                    let Mt = E(e);
                    for (let ue = 0; ue < Mt; ue++) {
                        let De = [];
                        Fe[ue] = De;
                        let ke = E(e);
                        for (let be = 0; be < ke; be++) De[be] = G(e), p += 4
                    }
                    let ge = [];
                    x.horizon = ge;
                    let bt = E(e);
                    for (let ue = 0; ue < bt; ue++) {
                        let De = [];
                        ge[ue] = De;
                        let ke = E(e);
                        for (let be = 0; be < ke; be++) De[be] = G(e), p += 4
                    }
                    x.id = j(e), p += 1;
                    let _o = [];
                    x.skybot = _o;
                    let sn = E(e);
                    for (let ue = 0; ue < sn; ue++) {
                        let De = [];
                        _o[ue] = De;
                        let ke = E(e);
                        for (let be = 0; be < ke; be++) De[be] = G(e), p += 4
                    }
                    let Ce = [];
                    x.skymid = Ce;
                    let gt = E(e);
                    for (let ue = 0; ue < gt; ue++) {
                        let De = [];
                        Ce[ue] = De;
                        let ke = E(e);
                        for (let be = 0; be < ke; be++) De[be] = G(e), p += 4
                    }
                    let an = [];
                    x.skytop = an;
                    let la = E(e);
                    for (let ue = 0; ue < la; ue++) {
                        let De = [];
                        an[ue] = De;
                        let ke = E(e);
                        for (let be = 0; be < ke; be++) De[be] = G(e), p += 4
                    }
                    let cn = [];
                    x.sun = cn;
                    let fa = E(e);
                    for (let ue = 0; ue < fa; ue++) {
                        let De = [];
                        cn[ue] = De;
                        let ke = E(e);
                        for (let be = 0; be < ke; be++) De[be] = G(e), p += 4
                    }
                    let ln = [];
                    x.water = ln;
                    let da = E(e);
                    for (let ue = 0; ue < da; ue++) {
                        let De = [];
                        ln[ue] = De;
                        let ke = E(e);
                        for (let be = 0; be < ke; be++) De[be] = G(e), p += 4
                    }
                }
                let ae = [];
                o.files = ae;
                let q = E(e);
                for (let P = 0; P < q; P++) {
                    let x = {};
                    ae[P] = x, x.ext = j(e), p += 1, x.id = we(e), p += 2, x.type = j(e), p += 1
                }
                let O = [];
                o.filesExt = O;
                let oe = E(e);
                for (let P = 0; P < oe; P++) O[P] = ct(e);
                let Z = [];
                o.foliages = Z;
                let te = E(e);
                for (let P = 0; P < te; P++) {
                    let x = {};
                    Z[P] = x, x.id = j(e), p += 1;
                    let K = [];
                    x.nodes = K;
                    let Me = E(e);
                    for (let ee = 0; ee < Me; ee++) {
                        let le = {};
                        K[ee] = le, le.arc = G(e), p += 4;
                        let ce = [];
                        le.end = ce;
                        let ve = E(e);
                        for (let ge = 0; ge < ve; ge++) ce[ge] = G(e), p += 4;
                        le.geotype = j(e), p += 1, le.jitter_radius = G(e), p += 4, le.jitter_rotation = G(e), p += 4, le.jitter_size = G(e), p += 4, le.jitter_slant = G(e), p += 4, le.jitter_y = G(e), p += 4, le.leafCount = j(e), p += 1;
                        let Se = [];
                        le.points = Se;
                        let Tt = E(e);
                        for (let ge = 0; ge < Tt; ge++) Se[ge] = G(e), p += 4;
                        le.radius = G(e), p += 4, le.size = G(e), p += 4, le.slant = G(e), p += 4;
                        let Fe = [];
                        le.start = Fe;
                        let Mt = E(e);
                        for (let ge = 0; ge < Mt; ge++) Fe[ge] = G(e), p += 4;
                        le.y = G(e), p += 4
                    }
                    x.seed = Ft(e), p += 4, x.texture = we(e), p += 2, x.type = j(e), p += 1
                }
                let L = [];
                o.meshes = L;
                let W = E(e);
                for (let P = 0; P < W; P++) {
                    let x = {};
                    L[P] = x, x.cull = j(e), p += 1;
                    let K = [];
                    x.effects = K;
                    let Me = E(e);
                    for (let ee = 0; ee < Me; ee++) {
                        let le = {};
                        K[ee] = le, le.id = j(e), p += 1;
                        let ce = [];
                        le.pos = ce;
                        let ve = E(e);
                        for (let ge = 0; ge < ve; ge++) ce[ge] = G(e), p += 4;
                        let Se = [];
                        le.rot = Se;
                        let Tt = E(e);
                        for (let ge = 0; ge < Tt; ge++) Se[ge] = G(e), p += 4;
                        let Fe = [];
                        le.scale = Fe;
                        let Mt = E(e);
                        for (let ge = 0; ge < Mt; ge++) Fe[ge] = G(e), p += 4
                    }
                    x.geometry = we(e), p += 2, x.id = we(e), p += 2, x.shader = j(e), p += 1, x.shadow = j(e), p += 1, x.texture = we(e), p += 2
                }
                let A = [];
                o.minimap = A;
                let J = E(e);
                for (let P = 0; P < J; P++) {
                    let x = {};
                    A[P] = x, x.img = we(e), p += 2;
                    let K = [];
                    x.pos = K;
                    let Me = E(e);
                    for (let ee = 0; ee < Me; ee++) K[ee] = we(e), p += 2;
                    x.world = j(e), p += 1
                }
                let ie = [];
                o.particles = ie;
                let xe = E(e);
                for (let P = 0; P < xe; P++) {
                    let x = {};
                    ie[P] = x;
                    let K = [];
                    x.acc = K;
                    let Me = E(e);
                    for (let Se = 0; Se < Me; Se++) K[Se] = G(e), p += 4;
                    x.blend = j(e), p += 1;
                    let ee = [];
                    x.colEnd = ee;
                    let le = E(e);
                    for (let Se = 0; Se < le; Se++) ee[Se] = G(e), p += 4;
                    let ce = [];
                    x.colStart = ce;
                    let ve = E(e);
                    for (let Se = 0; Se < ve; Se++) ce[Se] = G(e), p += 4;
                    x.duration = G(e), p += 4, x.friction = G(e), p += 4, x.id = j(e), p += 1, x.idEnd = j(e), p += 1, x.idLoop = j(e), p += 1, x.idStart = j(e), p += 1, x.interp = j(e), p += 1, x.randomRota = G(e), p += 4, x.rota = G(e), p += 4, x.rotaEnd = G(e), p += 4, x.scaleEnd = G(e), p += 4, x.scaleStart = G(e), p += 4
                }
                let Ie = [];
                o.ribbons = Ie;
                let _e = E(e);
                for (let P = 0; P < _e; P++) {
                    let x = {};
                    Ie[P] = x;
                    let K = [];
                    x.colEnd = K;
                    let Me = E(e);
                    for (let ce = 0; ce < Me; ce++) K[ce] = G(e), p += 4;
                    let ee = [];
                    x.colStart = ee;
                    let le = E(e);
                    for (let ce = 0; ce < le; ce++) ee[ce] = G(e), p += 4;
                    x.id = j(e), p += 1, x.interval = G(e), p += 4, x.steps = j(e), p += 1, x.texture = we(e), p += 2
                }
                let ye = [];
                o.skeletons = ye;
                let rt = E(e);
                for (let P = 0; P < rt; P++) {
                    let x = {};
                    ye[P] = x, x.cape = !!Zt(e), p += 1, x.groundNormal = !!Zt(e), p += 1, x.height = G(e), p += 4, x.helmet = !!Zt(e), p += 1, x.id = j(e), p += 1, x.shoulders = !!Zt(e), p += 1
                }
                let Ye = [];
                o.skins = Ye;
                let Dt = E(e);
                for (let P = 0; P < Dt; P++) {
                    let x = {};
                    Ye[P] = x, x.animset = j(e), p += 1;
                    let K = [];
                    x.body = K;
                    let Me = E(e);
                    for (let Ce = 0; Ce < Me; Ce++) {
                        let gt = {};
                        K[Ce] = gt, gt.bid = j(e), p += 1;
                        let an = [];
                        gt.col = an;
                        let la = E(e);
                        for (let ke = 0; ke < la; ke++) an[ke] = G(e), p += 4;
                        gt.colMode = j(e), p += 1, gt.lod = j(e), p += 1, gt.mid = we(e), p += 2, gt.pid = Zt(e), p += 1;
                        let cn = [];
                        gt.pos = cn;
                        let fa = E(e);
                        for (let ke = 0; ke < fa; ke++) cn[ke] = G(e), p += 4;
                        let ln = [];
                        gt.rot = ln;
                        let da = E(e);
                        for (let ke = 0; ke < da; ke++) ln[ke] = G(e), p += 4;
                        let ue = [];
                        gt.scl = ue;
                        let De = E(e);
                        for (let ke = 0; ke < De; ke++) ue[ke] = G(e), p += 4;
                        gt.ts = j(e), p += 1
                    }
                    x.capeswing = j(e), p += 1;
                    let ee = [];
                    x.colPrim = ee;
                    let le = E(e);
                    for (let Ce = 0; Ce < le; Ce++) ee[Ce] = G(e), p += 4;
                    let ce = [];
                    x.colSec = ce;
                    let ve = E(e);
                    for (let Ce = 0; Ce < ve; Ce++) ce[Ce] = G(e), p += 4;
                    let Se = [];
                    x.effects = Se;
                    let Tt = E(e);
                    for (let Ce = 0; Ce < Tt; Ce++) {
                        let gt = {};
                        Se[Ce] = gt, gt.bid = j(e), p += 1, gt.id = j(e), p += 1
                    }
                    x.id = j(e), p += 1, x.mountPart = j(e), p += 1;
                    let Fe = [];
                    x.mountPos = Fe;
                    let Mt = E(e);
                    for (let Ce = 0; Ce < Mt; Ce++) Fe[Ce] = G(e), p += 4;
                    let ge = [];
                    x.sheathedPos = ge;
                    let bt = E(e);
                    for (let Ce = 0; Ce < bt; Ce++) ge[Ce] = G(e), p += 4;
                    x.size = G(e), p += 4, x.skeleton = j(e), p += 1, x.soundset = j(e), p += 1;
                    let _o = [];
                    x.unsheathedPos = _o;
                    let sn = E(e);
                    for (let Ce = 0; Ce < sn; Ce++) _o[Ce] = G(e), p += 4
                }
                let je = [];
                o.sounds = je;
                let H = E(e);
                for (let P = 0; P < H; P++) {
                    let x = {};
                    je[P] = x, x.distance = G(e), p += 4;
                    let K = [];
                    x.files = K;
                    let Me = E(e);
                    for (let ee = 0; ee < Me; ee++) K[ee] = we(e), p += 2;
                    x.id = j(e), p += 1
                }
                let Le = [];
                o.soundsetSteps = Le;
                let Ke = E(e);
                for (let P = 0; P < Ke; P++) {
                    let x = {};
                    Le[P] = x, x.id = j(e), p += 1;
                    let K = [];
                    x.steps = K;
                    let Me = E(e);
                    for (let ee = 0; ee < Me; ee++) K[ee] = j(e), p += 1
                }
                let Ze = [];
                o.soundsets = Ze;
                let nt = E(e);
                for (let P = 0; P < nt; P++) {
                    let x = {};
                    Ze[P] = x, x.id = j(e), p += 1;
                    let K = [];
                    x.sounds = K;
                    let Me = E(e);
                    for (let ee = 0; ee < Me; ee++) K[ee] = j(e), p += 1;
                    x.steps = j(e), p += 1
                }
                let Ee = [];
                o.terrains = Ee;
                let Xe = E(e);
                for (let P = 0; P < Xe; P++) {
                    let x = {};
                    Ee[P] = x, x.brightest = j(e), p += 1, x.darkest = j(e), p += 1;
                    let K = [];
                    x.foliage = K;
                    let Me = E(e);
                    for (let ee = 0; ee < Me; ee++) {
                        let le = [];
                        K[ee] = le;
                        let ce = E(e);
                        for (let ve = 0; ve < ce; ve++) le[ve] = j(e), p += 1
                    }
                    x.id = j(e), p += 1, x.scale = j(e), p += 1, x.spec = j(e), p += 1, x.texture = we(e), p += 2
                }
                let Et = [];
                o.traderShopItems = Et;
                let qe = E(e);
                for (let P = 0; P < qe; P++) {
                    let x = {};
                    Et[P] = x, x.bind = j(e), p += 1, x.id = j(e), p += 1;
                    let K = [];
                    x.itemCost = K;
                    let Me = E(e);
                    for (let ee = 0; ee < Me; ee++) {
                        let le = {};
                        K[ee] = le, le.stacks = we(e), p += 2, le.tier = we(e), p += 2, le.type = ct(e)
                    }
                    x.shop = j(e), p += 1, x.stacks = j(e), p += 1, x.tier = we(e), p += 2, x.type = ct(e), x.upgrade = j(e), p += 1
                }
                let co = [];
                o.worlds = co;
                let D = E(e);
                for (let P = 0; P < D; P++) {
                    let x = {};
                    co[P] = x, x.chunkAmount = j(e), p += 1, x.id = j(e), p += 1, x.minlevel = j(e), p += 1, x.music = j(e), p += 1, x.name = ct(e)
                }
                return o
            }
        };
    var zn = {
            clientPlayerInput: I0,
            clientPlayerChangeTarget: z0,
            clientPlayerSkill: V0,
            clientPlayerEnvSkill: R0,
            clientPlayerInteract: U0,
            clientCommand: B0,
            serverOnClientConnect: Y0,
            serverEntityDelta: j0,
            serverPartyUpdate: q0,
            serverWarUpdate: O0,
            serverPartyPositions: N0,
            serverChangeWorld: H0,
            serverMapUpdate: W0,
            serverChat: G0,
            serverSystemMessage: $0,
            serverQueue: X0,
            ping: Q0
        },
        Ur = {
            chunk: Z0,
            gamedata: K0,
            modelformat: J0
        },
        Gb = [],
        Hb = 0;
    for (let t in zn) zn[t] && (zn[t].header = Hb++, zn[t].packData = function(e) {
        return e._header = this.header, this.encode(e)
    }, Gb.push(zn[t]));
    var $b = 127,
        Yb = 254,
        Ya = 2 ** 15 - 1,
        Xb = 2 ** 16 - 1,
        Xa = 2 ** 32 - 1;
    var ep = t => {
        let e = Ur.modelformat.decode(t),
            o = Ya / (Xa / e.sx),
            r = Ya / (Xa / e.sy),
            n = Ya / (Xa / e.sz);
        for (let i = 0; i < e.position.length; i += 3) e.position[i + 0] = e.position[i + 0] / o, e.position[i + 1] = e.position[i + 1] / r, e.position[i + 2] = e.position[i + 2] / n;
        for (let i = 0; i < e.uv.length; ++i) e.uv[i] /= Xb;
        for (let i = 0; i < e.color.length; ++i) e.color[i] /= Yb;
        for (let i = 0, s = e.normal.length; i < s; i++) e.normal[i] = e.normal[i] / $b;
        return e
    };
    var Qa = async (t, e, o, r, n, i = 3) => {
        switch (e.split(".").pop()) {
            case "jpg":
            case "png":
            case "avif":
            case "webp": {
                let s = new Image;
                s.onload = () => {
                    o[e] = r(s), n(o[e], t + e), s.onload = void 0
                }, s.src = t + e + "?v=8862189";
                break
            }
            default: {
                fetch(t + e + "?v=8862189").then(s => {
                    if (!s.ok) throw new Error;
                    s.arrayBuffer().then(async a => {
                        o[e] = await r(a), n(o[e], t + e)
                    })
                }).catch(s => {
                    console.log(e + " fetch failed"), i > 1 && Qa(t, e, o, r, n, --i)
                });
                break
            }
        }
    };
    var Jo = {},
        Zb = (t, e) => {
            for (let o = 0, r = Jo[e].length; o < r; ++o) Jo[e][o](...t);
            Jo[e] = void 0
        },
        Vn = async (t, e, o, r, n) => {
            o[e] ? n(...o[e]) : Jo[t + e] ? Jo[t + e].push(n) : (Jo[t + e] = [], Jo[t + e].push(n), Qa(t, e, o, r, Zb))
        }, Jb = t => {
            let e = ep(new Uint8Array(t));
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
        }, Kb = {}, So = (t, e) => loadMeshGeometry(t, e);
    var Un, Rn, tp = () => {
            Un = Vt(at({
                position: {
                    size: 2,
                    data: new Float32Array([-1, -1, 3, -1, -1, 3])
                },
                uv: {
                    size: 2,
                    data: new Float32Array([0, 0, 2, 0, 0, 2])
                }
            }), 0, v.TRIANGLES), fetch("/data/items/atlas.json?v=8862189").then(async t => {
                Rn = await t.json();
                for (let e in Rn) e != "s" && (Rn[e] = Rn[e].map(o => o / Rn.s))
            })
        },
        ew = t => {
            let e = Fo({
                image: t,
                wrapS: v.REPEAT,
                wrapT: v.REPEAT,
                minFilter: v.LINEAR_MIPMAP_LINEAR,
                anisotropy: 2 ** Te.anisotropy
            });
            return Ot(e), [e]
        },
        tw = t => {
            let e = Yu(t),
                o = Fo({
                    buffer: e,
                    minFilter: v.LINEAR_MIPMAP_LINEAR,
                    wrapS: v.REPEAT,
                    wrapT: v.REPEAT,
                    width: e.width,
                    height: e.height,
                    anisotropy: 2 ** Te.anisotropy,
                    format: e.internalFormat,
                    internalFormat: e.internalFormat
                });
            return Ot(o), [o]
        },
        Za = {},
        Ct = (t, e) => loadTexture(t, e),
        op, rp = (t, e, o) => {
            op = e, Vn("data/assets/", t + ".ogg", Za, ow, o)
        },
        ow = async t => [await op.decodeAudioData(t)];
    var dt = (t, e) => t + Math.random() * (e - t),
        Ja = (t, e) => Math.floor(Math.random() * (e - t + 1)) + t;
    var Ki = t => rw(t, Math.random()),
        rw = (t, e) => t[Math.floor(e * t.length)];
    var Je, er = [],
        Po = new Map,
        Lo = new Map,
        ec = new Set,
        sp = t => {
            Je && (nw(), iw(t), ec.clear())
        },
        nw = () => {
            ap(Je.listener, he.transform.worldMatrix), au($o, ot.worldMatrix), re(He, 0, 0, 1), Fa(He, He, $o), re(ft, 0, 1, 0), Fa(ft, ft, $o), Je.listener.setOrientation(He[0], He[1], He[2], ft[0], ft[1], ft[2])
        },
        iw = t => {
            let e = 0,
                o = 0;
            for (; o < er.length;) {
                let r = er[o];
                r.ended ? sw(r.id) : (er[e] = r, e++), ++o
            }
            er.length = e
        },
        ap = (t, e) => {
            t.setPosition(e[12], e[13], e[14])
        },
        cp = function() {
            this.ended = !0
        },
        sw = t => {
            Lo.set(t, Math.max(0, Lo.get(t) - 1))
        },
        np = (t, e) => {
            if (!Lo.has(t)) Lo.set(t, 1);
            else {
                if (Lo.get(t) >= e) return !1;
                Lo.set(t, Lo.get(t) + 1)
            }
            return !0
        },
        Ka = {},
        lp = (t, e) => {
            let o = Ki(t);
            Ka[o] !== void 0 ? e.buffer = Ka[o] : rp(o, Je, r => {
                Ka[o] = r, e.buffer = r
            })
        },
        tc = (t, e, o, r, n) => {
            if (Je === void 0 || Je.state == "suspended" || ec.has(t)) return;
            if (o === 0) {
                if (er.length > 35 || (re(He, e.worldMatrix[12], e.worldMatrix[13], e.worldMatrix[14]), 1 / ((Lo.get(t) || 0) + 10 + ka(ot.position, He)) * 1e3 / (er.length + 20) ** 1.2 < .4) || !np(t, 2)) return
            } else if (o === 1 && !np(t, 5)) return;
            let i = Zi.get(t);
            if (!i) {
                console.log("unknown sound id:" + t);
                return
            }
            ec.add(t);
            let s = Je.createBufferSource();
            s.id = t, s.loop = r, s.playbackRate.value = n, lp(i.files, s);
            let a = Po.get(o).in;
            return s.panner = Je.createPanner(), s.panner.distanceModel = "exponential", s.panner.refDistance = i.distance, s.panner.rolloffFactor = 1, ap(s.panner, e.worldMatrix), s.connect(s.panner), s.panner.connect(a), s.start(0, 0), s.onended = cp, er.push(s), s
        },
        fp = t => {
            Je = new(window.AudioContext || window.webkitAudioContext), ["ambience", "music"].forEach((i, s) => {
                let a = Je.createGain();
                a.connect(Je.destination), Po.set(2 + s, {
                    gain: a,
                    in: a
                }), Fi[i + "Volume"].subscribe(c => {
                    Po.get(2 + s).gain.gain.value = (c / 100) ** 2
                })
            });
            let e = Je.createDynamicsCompressor(),
                o = Je.createGain();
            e.threshold.value = 0, e.knee.value = 0, e.ratio.value = 15, e.attack.value = .005, e.release.value = .05, e.connect(o), o.connect(Je.destination);
            let r = Je.createGain();
            r.gain.value = 2, r.connect(e);
            let n = Je.createGain();
            n.gain.value = .4, n.connect(e), Po.set(1, {
                gain: o,
                in: r
            }), Po.set(0, {
                gain: o,
                in: n
            }), yi.subscribe(i => {
                Po.get(1).gain.gain.value = (i / 150) ** 2
            }), Mi.subscribe(i => {
                Po.get(0).in.gain.value = i / 100
            }), Sl.set(!0), document.removeEventListener("click", fp)
        },
        ip = !1,
        dp = (t, e) => {
            ip || (ip = !0, fp(), Je.state === "suspended" && document.addEventListener("click", () => Je.resume(), {
                once: !0
            }))
        };
    var up = (t, e, o, r) => {
        if (Je === void 0 || Je.state == "suspended") return;
        let n = Zi.get(t);
        if (!n) return;
        let i = Je.createBufferSource();
        i.id = t, i.loop = o, lp(n.files, i);
        let s = Po.get(e).in;
        return r && (i.gain = Je.createGain(), i.gain.connect(s), s = i.gain), i.connect(s), i.start(0, o ? dt(0, 1) : 0), i.onended = cp, i
    };
    var mp = (t, e) => up(t, e, !0, !0),
        pp = (t, e) => up(t, e, !1, !0);
    var rc = 0,
        Wt = 0,
        nc = 0,
        ic = 5,
        Bn = 10,
        jn = 10,
        bp = 0,
        cw = 0,
        sc = 0,
        ac = 0,
        cc = 0,
        lc = 0,
        is = (t, e) => {
            t = Math.max(150, Math.min(1500, t)), Wt = t * .8, nc = Math.min(Wt, 150), rc = 20, sc = Wt, lc = Wt ** 2, ac = Math.min(Wt, 50), cc = Math.min(Wt / 32, gfxFolFade.value / 32) ** 2, he.far = bp = t, cw = t ** 2, Go(he), jn = Math.min(Wt, 100 + e * 50), Bn = Math.min(Wt, 40 + e * 10), ic = (jn + Bn) / 2, ht = Math.ceil(t * 2 / 32), ht += ht % 2, go = ht / 2, go += go % 2, lw()
        },
        oc = [],
        Do = [],
        es = [],
        tr = [],
        hp = 0,
        gp = 0,
        ts = -1 / 0,
        os = -1 / 0,
        rs = -1 / 0,
        ns = -1 / 0,
        Eo = -1 / 0,
        qn = -1 / 0,
        To = -1 / 0,
        On = -1 / 0,
        ht = 0,
        go = 0,
        lw = () => {
            let t = go,
                e = (Math.min(Wt * .7, 250) / 32) ** 2,
                o = (Math.max(e, Wt) / 32) ** 2,
                r = (bp / 32) ** 2;
            oc.length = 0, Do.length = 0;
            for (let n = 0; n < ht; ++n)
                for (let i = 0; i < ht; ++i) {
                    let s = (t - i) ** 2 + (t - n) ** 2,
                        a = 0;
                    s > r ? a = 3 : s > o ? a = 2 : s > e && (a = 1), oc.push(s), Do.push(a)
                }
            es.length = 0;
            for (let n = 0; n < ht; ++n)
                for (let i = 0; i < ht; ++i) {
                    let s = i % 2,
                        c = n % 2 * 2 + s,
                        l = Math.min(Do[i + n * ht], 2);
                    if (l < 2) {
                        let f = Do[Math.min(ht - 1, i + 1) + n * ht] > l,
                            d = Do[Math.max(0, i - 1) + n * ht] > l,
                            u = Do[i + Math.max(0, n - 1) * ht] > l,
                            m = Do[i + Math.min(ht - 1, n + 1) * ht] > l,
                            h = c * 33 + l * 16 + ((d ? 1 : 0) | (u ? 2 : 0) | (f ? 4 : 0) | (m ? 8 : 0));
                        es.push(h)
                    } else es.push(c * 33 + l * 16)
                }
        },
        fc = (t, e) => {
            if (t < Eo || t >= qn || e < To || e >= On) return 3;
            let o = t - Eo,
                r = e - To;
            return Do[o + r * ht]
        },
        wp = (t, e) => {
            if (t < Eo || t >= qn || e < To || e >= On) return 1 / 0;
            let o = t - Eo,
                r = e - To;
            return oc[o + r * ht]
        },
        _p = (t, e) => {
            if (t < Eo || t >= qn || e < To || e >= On) return 2 * 16;
            let o = t - Eo,
                r = e - To;
            return es[o + r * ht]
        },
        vp = -1 / 0,
        xp = -1 / 0,
        fw = (t, e, o) => {
            if (t = Math.floor(t / 64) * 2, e = Math.floor(e / 64) * 2, t !== vp || e !== xp) {
                Eo = t - go, qn = t + go, To = e - go, On = e + go, ts = Math.min(Math.max(0, Math.floor(Eo / 2)), o - 1), os = Math.min(Math.max(0, Math.ceil(qn / 2)), o - 1), rs = Math.min(Math.max(0, Math.floor(To / 2)), o - 1), ns = Math.min(Math.max(0, Math.ceil(On / 2)), o - 1), hp = Math.floor(t / 2), gp = Math.floor(e / 2), vp = t, xp = e, tr.length = 0;
                let r = new Map,
                    n = 0;
                for (let i = ts; i <= os; ++i)
                    for (let s = rs; s <= ns; ++s) {
                        let a = (i - hp) ** 2 + (s - gp) ** 2;
                        a > ((go + 1) / 2) ** 2 || (a = ~~a | 0, r.has(a) || r.set(a, []), r.get(a).push(s * o + i, i, s), a > n && (n = a))
                    }
                for (let i = 0; i <= n; ++i)
                    if (r.has(i)) {
                        let s = r.get(i);
                        for (let a = 0; a < s.length; ++a) tr.push(s[a])
                    } return !0
            }
            return !1
        },
        dc = !0,
        yp = (t, e) => {
            dc = fw(ot.position[0], ot.position[2], e)
        };
    var dw = 0,
        kp = (t, e, o, r = 0, n = !1, i = !1) => {
            let s = {
                id: dw++,
                geometry: at({}),
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
                Mp(s, c.name, c.size)
            }
            return Mp(s, "worldMatrix", 16), s
        },
        Mp = (t, e, o) => {
            t.instancedAttributes.push({
                name: e,
                instanced: !0,
                bufferMode: t.dynamic ? 35048 : 35044,
                size: o,
                data: new Float32Array(o)
            }), t.instancedAttributeNames.push(e), t.instancedData.push([])
        },
        uc = t => {
            let e = St();
            e.geometry = t.geometry, e.data.multi = t, t.instances.push(e);
            for (let o = 0; o < t.instancedAttributes.length; ++o) {
                let r = t.instancedAttributes[o],
                    n = t.instancedAttributeNames[o];
                t.instancedData[o].push(e.data[n] = n === "worldMatrix" ? e.worldMatrix : Array(r.size).fill(1))
            }
            return t.needsUpdate = !0, e
        };
    var ss = (t, e) => {
        let o = t.instances.indexOf(e);
        t.instances.splice(o, 1);
        for (let r = 0; r < t.instancedAttributes.length; ++r) t.instancedData[r].splice(o, 1);
        t.needsUpdate = !0, _r(e)
    };
    var uw = (t, e) => {
            t.needsUpdate = t.dynamic;
            for (let a = 0; a < t.instancedAttributes.length; ++a) {
                let c = t.instancedAttributes[a];
                mw(c, c.size, t.instances.length)
            }
            let o = t.dynamic,
                r = t.individualFrustums,
                n = t.instancedData,
                i = t.instances,
                s = 0;
            for (let a = 0; a < i.length; ++a) {
                let c = i[a];
                if (c.visible && (!o || !r || vu(e, c.geometry, c))) {
                    for (let f = 0; f < t.instancedAttributes.length; ++f) {
                        let d = t.instancedAttributes[f],
                            u = d.data,
                            m = n[f][a],
                            h = s * d.size,
                            g = h + d.size;
                        for (let M = h, b = 0; M < g; ++M, ++b) u[M] = m[b]
                    }
                    s++
                }
            }
            if (t.drawCount = s, ji(t.geometry, t.drawCount), t.drawCount !== 0)
                for (let a = 0; a < t.instancedAttributes.length; ++a) {
                    let c = t.instancedAttributes[a];
                    Bi(t.geometry, c, s)
                }
        },
        Br = (t, e, o, r) => {
            if (o && t.needsUpdate && uw(t, r), e.active && t.drawCount > 0) {
                e.cullFace = t.cullFace;
                for (let n = 0; n < e.autoUniforms.length; ++n) {
                    let i = e.autoUniforms[n];
                    e.uniforms[i].value = t.uniformData[i]
                }
                qi(t.uniformData, e), Ar(e, N.currentProgram === e.id), Cr(t.geometry, e, t.mode)
            }
        },
        Fp = (t, e) => {
            let o = {
                ...e
            };
            for (let r = 0; r < t.instancedAttributeNames.length; ++r) o[t.instancedAttributeNames[r]] = t.instancedAttributes[r];
            Ia(t.geometry, o)
        },
        mw = (t, e, o) => {
            t.data = t.data.byteLength >= e * o * 4 ? t.data : new Float32Array(e * (o + 5))
        };
    var jr = [],
        qr, Jt, vo, or, rr, Cp = t => {
            let e = N.width,
                o = N.height;
            for (let r = 0; r < 2; ++r) jr.push(fo(t, t, 0, !0, v.COMPARE_REF_TO_TEXTURE));
            qr = fo(t, t, 0, !0, v.COMPARE_REF_TO_TEXTURE), Jt = fo(e, o, 1, !0), vo = fo(e, o, 1, !0), or = fo(Math.ceil(e / 4), Math.ceil(o / 4)), rr = fo(Math.ceil(e / 4), Math.ceil(o / 4)), createExtraBuffers(e, o)
        },
        Ap = (t, e) => {
            Pn(Jt, t, e), Pn(vo, t, e), Pn(or, Math.ceil(t / 4), Math.ceil(e / 4)), Pn(rr, Math.ceil(t / 4), Math.ceil(e / 4)), resizeExtraBuffers(t, e)
        };
    var ws = {};
    ua(ws, {
        bloom: () => gc,
        bloomMerge: () => vc,
        drop: () => cs,
        foliagePlant: () => ls,
        foliageStatic: () => fs,
        fxaa: () => xc,
        multimeshEffect: () => ds,
        multimeshFlat: () => us,
        multimeshSimple: () => ms,
        multimeshTextured: () => Nn,
        multimeshTexturedVcol: () => ps,
        multimeshTree: () => mc,
        particles: () => hs,
        particles_additive: () => pc,
        particles_normal: () => hc,
        ribbon: () => Wn,
        ribbonTextured: () => wc,
        shadowInstanced: () => Gn,
        shadowInstancedAlpha: () => _c,
        simple: () => gs,
        simpleTextured: () => d_,
        simpleVcol: () => u_,
        sky: () => yc,
        skyStarTex: () => Mc,
        sun: () => kc,
        terrain: () => vs,
        terrainEditorAreas: () => m_,
        terrainEditorGrid: () => p_,
        terrainEditorHeights: () => h_,
        terrainEditorTiles: () => g_,
        terrainFog: () => xs,
        tint: () => bc,
        water: () => bs,
        waterEditorGrid: () => v_
    });
    var Pp = `#version 300 es
precision highp float;precision highp int;out vec4 fragColor;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform sampler2D diffuse;in vec2 vUv;in float vShine;void main(){if(vCameraDistance>fog[1][1]){fragColor=vec4(fog[0],1.0);return;}vec4 a=texture(diffuse,vUv);if(a.a<0.5)discard;a.rgb=mix(a.rgb*worldlight[1],a.rgb*1.1,smoothstep(-0.7,0.7,sin(time*6.0+vShine)));float b=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);a.rgb=mix(fog[0],a.rgb,b);fragColor=a;}`;
    var Lp = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};out float vCameraDistance;out vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};in vec2 uv;in vec3 position;in vec3 normal;in mat4 worldMatrix;in vec4 uvshift;in float shine;out float vShine;out vec2 vUv;void main(){vShine=shine;vWorldPos=worldMatrix*vec4(position,1.0);vUv=uvshift.zw-uv*uvshift.xy;vCameraDistance=length(cameraPosition-vWorldPos.xyz);gl_Position=projectionViewMatrix*worldMatrix*vec4(position,1.0);}`;
    var Dp = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];uniform sampler2D foliageDiffuse;in vec3 vLight;in vec3 vLightAmb;in vec3 vLightDir;in vec2 vUv;out vec4 fragColor;void main(){vec4 b=texture(foliageDiffuse,vUv);float c=0.1;b.a=b.a*smoothstep(1.0,0.0,(vCameraDistance-110.0)/20.0);if(b.a<c){discard;};float d=1.0;if(a==1&&vCameraDistance<shadowRange[2]){float e=smoothstep(shadowRange[1],shadowRange[2],vCameraDistance);if(vCameraDistance>shadowRange[0]){vec4 f=shadowPVMatrix[1]*(vWorldPos);vec3 g=(f.xyz/f.w)*0.5+0.5;d=texture(shadowMaps[1],g);}else{vec4 f=shadowPVMatrix[0]*(vWorldPos);vec3 g=(f.xyz/f.w)*0.5+0.5;d=texture(shadowMaps[0],g);}d=d;d=max(d,e);}b.rgb=b.rgb*(vLight+vLightAmb+vLightDir*d);float h=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);b.rgb=mix(fog[0],b.rgb,h);fragColor=b;}`;
    var Ep = `#version 300 es
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
    var Tp = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];uniform sampler2D foliageDiffuse;in vec3 vLightAmb;in vec3 vLightDir;in vec3 vLight;in vec2 vUv;out vec4 fragColor;void main(){vec4 b=texture(foliageDiffuse,vUv);b.a=b.a*smoothstep(1.0,0.0,(vCameraDistance-110.0)/20.0);if(b.a<0.5){discard;};float c=1.0;if(a==1&&vCameraDistance<shadowRange[2]){float d=smoothstep(shadowRange[1],shadowRange[2],vCameraDistance);if(vCameraDistance>shadowRange[0]){vec4 e=shadowPVMatrix[1]*(vWorldPos);vec3 f=(e.xyz/e.w)*0.5+0.5;c=texture(shadowMaps[1],f);}else{vec4 e=shadowPVMatrix[0]*(vWorldPos);vec3 f=(e.xyz/e.w)*0.5+0.5;c=texture(shadowMaps[0],f);}c=c;c=max(c,d);}b.rgb=b.rgb*(vLight+vLightAmb+vLightDir*c);float g=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);b.rgb=mix(fog[0],b.rgb,g);fragColor=b;}`;
    var Ip = `#version 300 es
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
    var zp = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform sampler2D diffuse;in vec3 vNormal;in vec2 vUv;in vec4 vCol;in vec2 vYcutoff;in vec4 vUvshift;out vec4 fragColor;void main(){if(vCameraDistance>fog[1][1]){fragColor=vec4(fog[0],1.0);return;}vec2 a=vec2((vUv.x+vUvshift.x)*vUvshift.z,(vUv.y+vUvshift.y)*vUvshift.w);vec4 b=vec4(1.0,1.0,1.0,texture(diffuse,a).r)*vCol;b.a*=min(1.0,max(0.0,vUv.y/vYcutoff[0]));b.a*=min(1.0,max(0.0,(vYcutoff[1]-vUv.y)/(1.0-vYcutoff[1])));if(b.a<0.01){discard;}float c=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);b.rgb=mix(fog[0],b.rgb,c);fragColor=b;fragColor.rgb*=fragColor.a;}`;
    var Vp = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};out float vCameraDistance;out vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};in vec2 uv;in vec3 position;in vec3 normal;in mat4 worldMatrix;in vec4 uvshift;in vec2 ycutoff;in vec4 color;out vec3 vNormal;out vec2 vUv;out vec4 vCol;out vec2 vYcutoff;out vec4 vUvshift;void main(){vNormal=normalize(mat3(worldMatrix)*normal);vUv=uv;vUvshift=uvshift;vCol=color;vYcutoff=ycutoff;vWorldPos=worldMatrix*vec4(position,1.0);vCameraDistance=length(cameraPosition-vWorldPos.xyz);gl_Position=projectionViewMatrix*vWorldPos;}`;
    var Rp = `#version 300 es
precision highp float;precision highp int;precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};in vec3 vLight;in vec4 vColor;in vec3 vNormal;in vec4 vInteriorlight;in float vAlpha;in vec3 vViewDir;vec3 b(vec3 c,vec3 d,vec3 e,vec3 f,float g,vec3 h,float i){f=normalize(f);float j=clamp(dot(f,worldlight[2]),0.0,g);vec3 k=c*mix(0.7,1.1,0.5+(0.5*j));vec3 l=normalize(worldlight[2]+vViewDir);vec3 m=d*pow(max(0.0,dot(l,f)),20.0)*i*max(g*0.7+0.2,0.2)*20.0;vec3 n=k+d*j+h;return n*e+m;}out vec4 fragColor;void main(){if(vCameraDistance>fog[1][1]){fragColor=vec4(fog[0],1.0);return;}float o=1.0;if(a==1&&vCameraDistance<shadowRange[2]){float p=smoothstep(shadowRange[1],shadowRange[2],vCameraDistance);if(vCameraDistance>shadowRange[0]){vec4 q=shadowPVMatrix[1]*(vWorldPos);vec3 r=(q.xyz/q.w)*0.5+0.5;o=texture(shadowMaps[1],r);}else{vec4 q=shadowPVMatrix[0]*(vWorldPos);vec3 r=(q.xyz/q.w)*0.5+0.5;o=texture(shadowMaps[0],r);}o=o;o=max(o,p);}vec3 s=worldlight[1];vec3 t=worldlight[0];s=mix(s,vInteriorlight.rgb*0.5,vInteriorlight.a);t=mix(t,vInteriorlight.rgb,vInteriorlight.a);float u=max(0.0,min(1.0,vColor[3]*0.2));vec4 v=vec4(b(s,t,vColor.rgb,vNormal,o,vLight,u),vAlpha);float w=max(0.0,min(1.0,-vColor[3]));v.rgb=mix(v.rgb,vColor.rgb,w);float x=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);v.rgb=mix(fog[0],v.rgb,x);fragColor=v;}`;
    var Up = `#version 300 es
precision highp float;precision highp int;uniform Pointlights{vec4 lightCols[16];vec3 lightPos[16];int lightCount;};out vec3 vLight;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};out float vCameraDistance;out vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};in vec3 position;in vec3 normal;in vec4 color;in vec4 interiorlight;in float alpha;in mat4 worldMatrix;out vec4 vColor;out vec3 vNormal;out vec4 vInteriorlight;out float vAlpha;out vec3 vViewDir;void main(){vNormal=normalize(mat3(worldMatrix)*normal);vWorldPos=worldMatrix*vec4(position,1.0);vColor=color;vAlpha=alpha;vInteriorlight=interiorlight;vCameraDistance=length(cameraPosition-vWorldPos.xyz);vec3 a=vec3(0.0);for(int b=0;b<lightCount;++b){vec3 c=lightPos[b]-vWorldPos.xyz;float d=lightCols[b].w-dot(c,c);if(d>0.0){d/=(lightCols[b].w);d=d*d;a+=max(0.0,dot(normalize(c),vNormal))*lightCols[b].rgb*d;}}vLight=a;vViewDir=-normalize(vWorldPos.xyz-cameraPosition);gl_Position=projectionViewMatrix*vWorldPos;}`;
    var Bp = `#version 300 es
precision highp float;precision highp int;in vec4 vColor;out vec4 fragColor;void main(){fragColor=vColor;fragColor.a=1.0;}`;
    var jp = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};in vec3 position;in vec4 color;in mat4 worldMatrix;out vec4 vColor;void main(){vColor=color;gl_Position=projectionViewMatrix*worldMatrix*vec4(position,1.0);;}`;
    var qp = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];uniform Circle{vec4 circlePos;vec4 circleInfo;};in vec3 vLight;uniform sampler2D diffuse;in vec3 vNormal;in vec2 vUv;in vec4 vInteriorlight;in vec3 vViewDir;vec3 b(vec3 c,vec3 d,vec3 e,vec3 f,float g,vec3 h,float i){f=normalize(f);float j=clamp(dot(f,worldlight[2]),0.0,g);vec3 k=c*mix(0.7,1.1,0.5+(0.5*j));vec3 l=normalize(worldlight[2]+vViewDir);vec3 m=d*pow(max(0.0,dot(l,f)),20.0)*i*max(g*0.7+0.2,0.2)*20.0;vec3 n=k+d*j+h;return n*e+m;}out vec4 fragColor;void main(){if(vCameraDistance>fog[1][1]){fragColor=vec4(fog[0],1.0);return;}vec4 o=texture(diffuse,vUv);if(o.a<0.5)discard;float p=1.0;if(a==1&&vCameraDistance<shadowRange[2]){float q=smoothstep(shadowRange[1],shadowRange[2],vCameraDistance);if(vCameraDistance>shadowRange[0]){vec4 r=shadowPVMatrix[1]*(vWorldPos);vec3 s=(r.xyz/r.w)*0.5+0.5;p=texture(shadowMaps[1],s);}else{vec4 r=shadowPVMatrix[0]*(vWorldPos);vec3 s=(r.xyz/r.w)*0.5+0.5;p=texture(shadowMaps[0],s);}p=p;p=max(p,q);}vec3 t=worldlight[1];vec3 u=worldlight[0];t=mix(t,vInteriorlight.rgb*0.5,vInteriorlight.a);u=mix(u,vInteriorlight.rgb,vInteriorlight.a);o.rgb=b(t,u,o.rgb,vNormal,p,vLight,0.0);o.rgb/=o.a;float v=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);o.rgb=mix(fog[0],o.rgb,v);float w=distance(vWorldPos.xz,circlePos.xz);float x=min(1.0,max(0.0,4.0-abs(vWorldPos.y-circlePos.y)));if(w<circlePos.w+0.1&&x>0.0){o.rgb=mix(o.rgb,circleInfo.rgb,x*circleInfo.a*((w<circlePos.w?w/circlePos.w*0.5:0.0)+max(0.,(0.1-abs(circlePos.w-w))/0.1)));}fragColor=o;}`;
    var Op = `#version 300 es
precision highp float;precision highp int;uniform Pointlights{vec4 lightCols[16];vec3 lightPos[16];int lightCount;};out vec3 vLight;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};out float vCameraDistance;out vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};in vec2 uv;in vec3 position;in vec3 normal;in vec4 interiorlight;in mat4 worldMatrix;out vec3 vNormal;out vec2 vUv;out vec4 vInteriorlight;out vec3 vViewDir;void main(){vNormal=normalize(mat3(worldMatrix)*normal);vUv=uv;vWorldPos=worldMatrix*vec4(position,1.0);vInteriorlight=interiorlight;vCameraDistance=length(cameraPosition-vWorldPos.xyz);vec3 a=vec3(0.0);for(int b=0;b<lightCount;++b){vec3 c=lightPos[b]-vWorldPos.xyz;float d=lightCols[b].w-dot(c,c);if(d>0.0){d/=(lightCols[b].w);d=d*d;a+=max(0.0,dot(normalize(c),vNormal))*lightCols[b].rgb*d;}}vLight=a;vViewDir=-normalize(vWorldPos.xyz-cameraPosition);gl_Position=projectionViewMatrix*vWorldPos;}`;
    var Np = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];uniform Circle{vec4 circlePos;vec4 circleInfo;};in vec3 vLight;uniform sampler2D diffuse;in vec3 vNormal;in vec2 vUv;in vec4 vCol;in vec3 vViewDir;vec3 b(vec3 c,vec3 d,vec3 e,vec3 f,float g,vec3 h,float i){f=normalize(f);float j=clamp(dot(f,worldlight[2]),0.0,g);vec3 k=c*mix(0.7,1.1,0.5+(0.5*j));vec3 l=normalize(worldlight[2]+vViewDir);vec3 m=d*pow(max(0.0,dot(l,f)),20.0)*i*max(g*0.7+0.2,0.2)*20.0;vec3 n=k+d*j+h;return n*e+m;}out vec4 fragColor;void main(){if(vCameraDistance>fog[1][1]){fragColor=vec4(fog[0],1.0);return;}vec4 o=texture(diffuse,vUv);if(o.a<0.5)discard;float p=(float(gl_FrontFacing)*2.0-1.0);float q=1.0;if(a==1&&vCameraDistance<shadowRange[2]){float r=smoothstep(shadowRange[1],shadowRange[2],vCameraDistance);if(vCameraDistance>shadowRange[0]){vec4 s=shadowPVMatrix[1]*(vWorldPos);vec3 t=(s.xyz/s.w)*0.5+0.5;q=texture(shadowMaps[1],t);}else{vec4 s=shadowPVMatrix[0]*(vWorldPos);vec3 t=(s.xyz/s.w)*0.5+0.5;q=texture(shadowMaps[0],t);}q=q;q=max(q,r);}vec3 u=mix(worldlight[1],vCol.rgb,vCol.a);vec3 v=worldlight[0]*(1.0-vCol.a);o.rgb=b(u,v,o.rgb,vNormal,q,vLight,0.0);float w=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);o.rgb=mix(fog[0],o.rgb,w);float x=distance(vWorldPos.xz,circlePos.xz);float y=min(1.0,max(0.0,4.0-abs(vWorldPos.y-circlePos.y)));if(x<circlePos.w+0.1&&y>0.0){o.rgb=mix(o.rgb,circleInfo.rgb,y*circleInfo.a*((x<circlePos.w?x/circlePos.w*0.5:0.0)+max(0.,(0.1-abs(circlePos.w-x))/0.1)));}fragColor=o;}`;
    var Wp = `#version 300 es
precision highp float;precision highp int;uniform Pointlights{vec4 lightCols[16];vec3 lightPos[16];int lightCount;};out vec3 vLight;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};out float vCameraDistance;out vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};in vec2 uv;in vec3 position;in vec3 normal;in vec4 color;in mat4 worldMatrix;out vec3 vNormal;out vec2 vUv;out vec4 vCol;out vec3 vViewDir;void main(){vNormal=normalize(mat3(worldMatrix)*normal);vUv=uv;vCol=color;vWorldPos=worldMatrix*vec4(position,1.0);vCameraDistance=length(cameraPosition-vWorldPos.xyz);vec3 a=vec3(0.0);for(int b=0;b<lightCount;++b){vec3 c=lightPos[b]-vWorldPos.xyz;float d=lightCols[b].w-dot(c,c);if(d>0.0){d/=(lightCols[b].w);d=d*d;a+=max(0.0,dot(normalize(c),vNormal))*lightCols[b].rgb*d;}}vLight=a;vViewDir=-normalize(vWorldPos.xyz-cameraPosition);gl_Position=projectionViewMatrix*vWorldPos;}`;
    var Gp = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];in vec3 vLight;uniform sampler2D diffuse;in vec3 vNormal;in vec2 vUv;in vec3 vViewDir;vec3 b(vec3 c,vec3 d,vec3 e,vec3 f,float g,vec3 h,float i){f=normalize(f);float j=clamp(dot(f,worldlight[2]),0.0,g);vec3 k=c*mix(0.7,1.1,0.5+(0.5*j));vec3 l=normalize(worldlight[2]+vViewDir);vec3 m=d*pow(max(0.0,dot(l,f)),20.0)*i*max(g*0.7+0.2,0.2)*20.0;vec3 n=k+d*j+h;return n*e+m;}out vec4 fragColor;void main(){vec4 o=texture(diffuse,vUv);if(o.a<0.7)discard;if(vCameraDistance>fog[1][1]){fragColor=vec4(fog[0],1.0);return;}float p=1.0;if(a==1&&vCameraDistance<shadowRange[2]){float q=smoothstep(shadowRange[1],shadowRange[2],vCameraDistance);if(vCameraDistance>shadowRange[0]){vec4 r=shadowPVMatrix[1]*(vWorldPos);vec3 s=(r.xyz/r.w)*0.5+0.5;p=texture(shadowMaps[1],s);}else{vec4 r=shadowPVMatrix[0]*(vWorldPos);vec3 s=(r.xyz/r.w)*0.5+0.5;p=texture(shadowMaps[0],s);}p=p;p=max(p,q);}o.rgb=b(worldlight[1],worldlight[0],o.rgb,vNormal,p,vLight,0.0);o.rgb/=o.a;float t=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);o.rgb=mix(fog[0],o.rgb,t);fragColor=o;}`;
    var Hp = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform Screen{vec2 resolution;};in vec3 position;in vec4 info;in vec2 progress;in vec4 scaleRota;in vec4 colStart;in vec4 colEnd;out vec4 vCol;out float vRotationCos;out float vRotationSin;out vec2 vOffset;void main(){float a=min(info[3]-1.0,floor(mix(info[2],info[3],mod(info[0]*progress[0],1.0))));vOffset=vec2(fract(a*0.125),-floor(a/8.0)*0.125);vCol=mix(colStart,colEnd,progress[1]);float b=mix(scaleRota[2],scaleRota[3],progress[0]);vRotationCos=cos(b);vRotationSin=sin(b);float c=mix(scaleRota[0],scaleRota[1],progress[1])*(abs(vRotationSin)+abs(vRotationCos));vec4 d=viewMatrix*vec4(position,1.0);gl_PointSize=c*resolution[1]*projectionMatrix[1][1]/length(d.xyz);gl_Position=projectionMatrix*d;}`;
    var $p = `#version 300 es
precision highp float;precision highp int;uniform sampler2D particleDiffuse;in vec4 vCol;in vec2 vOffset;in float vRotationCos;in float vRotationSin;out vec4 fragColor;const float a=1.0/(1024.0/8.0);void main(){float b=0.5;float c=abs(vRotationSin)+abs(vRotationCos);vec2 d=vec2(gl_PointCoord.x-b,gl_PointCoord.y-b)*c;vec2 e=d*vRotationCos;vec2 f=d*vRotationSin;d=vec2(e.x+f.y+b,e.y-f.x+b);if(d.x<a||d.x>1.0-a||d.y>1.0-a||d.y<a){discard;}d.x*=0.125;d.y=1.0-d.y*0.125;vec4 g=vec4(1.0,1.0,1.0,texture(particleDiffuse,d+vOffset).r);g*=vCol;if(g.a<0.01){discard;}fragColor=g;fragColor.rgb*=fragColor.a;fragColor.a*=0.33;}`;
    var Yp = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform sampler2D particleDiffuse;in vec4 vCol;in vec2 vOffset;in float vRotationCos;in float vRotationSin;out vec4 fragColor;const float a=1.0/(1024.0/8.0);void main(){float b=0.5;float c=abs(vRotationSin)+abs(vRotationCos);vec2 d=vec2(gl_PointCoord.x-b,gl_PointCoord.y-b)*c;vec2 e=d*vRotationCos;vec2 f=d*vRotationSin;d=vec2(e.x+f.y+b,e.y-f.x+b);if(d.x<a||d.x>1.0-a||d.y>1.0-a||d.y<a){discard;}d.x*=0.125;d.y=1.0-d.y*0.125;vec3 g=texture(particleDiffuse,d+vOffset).rgb;if((g.r+g.g+g.b)<0.1){discard;}fragColor=vec4(g.rgb,1.0);}`;
    var Xp = `#version 300 es
precision highp float;precision highp int;uniform Screen{vec2 resolution;};uniform sampler2D inputA;uniform vec2 offset[4];uniform vec4 amount;in vec2 vUv;out vec4 fragColor;void main(){vec3 a=texture(inputA,vUv+offset[0]).rgb*amount[0];a+=texture(inputA,vUv+offset[1]).rgb*amount[1];a+=texture(inputA,vUv+offset[2]).rgb*amount[2];a+=texture(inputA,vUv+offset[3]).rgb*amount[3];fragColor=vec4(a,1.0);}`;
    var Qp = `#version 300 es
precision highp float;precision highp int;uniform Screen{vec2 resolution;};uniform sampler2D inputA;uniform sampler2D inputB;uniform float amount;in vec2 vUv;out vec4 fragColor;void main(){vec4 a=texture(inputA,vUv);vec3 b=texture(inputB,vUv).rgb;b=b*b;fragColor.w=a.w;fragColor.xyz=b*amount+a.xyz;}`;
    var Zp = `#version 300 es
precision highp float;precision highp int;uniform Screen{vec2 resolution;};uniform sampler2D inputA;in vec2 vUv;out vec4 fragColor;
#define a  4.0
#define b (1.0/a)
#define c (1.0/128.0)
#define d (1.0/8.0)
vec3 e(vec4 f,sampler2D g,vec2 h){vec3 i=textureLod(g,f.zw,0.0).xyz;vec3 j=textureLod(g,f.zw+vec2(1,0)*h.xy,0.0).xyz;vec3 k=textureLod(g,f.zw+vec2(0,1)*h.xy,0.0).xyz;vec3 l=textureLod(g,f.zw+vec2(1,1)*h.xy,0.0).xyz;vec3 m=textureLod(g,f.xy,0.0).xyz;vec3 n=vec3(0.299,0.587,0.114);float o=dot(i,n);float p=dot(j,n);float q=dot(k,n);float r=dot(l,n);float s=dot(m,n);float t=min(s,min(min(o,p),min(q,r)));float u=max(s,max(max(o,p),max(q,r)));vec2 v;v.x=-((o+p)-(q+r));v.y=((o+q)-(p+r));float w=max((o+p+q+r)*(0.25*b),c);float x=1.0/(min(abs(v.x),abs(v.y))+w);v=min(vec2(a,a),max(vec2(-a,-a),v*x))*h.xy;vec3 y=(1.0/2.0)*(textureLod(g,f.xy+v*(1.0/3.0-0.5),0.0).xyz+textureLod(g,f.xy+v*(2.0/3.0-0.5),0.0).xyz);vec3 az=y*(1.0/2.0)+(1.0/4.0)*(textureLod(g,f.xy+v*(0.0/3.0-0.5),0.0).xyz+textureLod(g,f.xy+v*(3.0/3.0-0.5),0.0).xyz);float aa=dot(az,n);if((aa<t)||(aa>u))return y;return az;}void main(){vec2 h=1.0/resolution;vec4 f=vec4(vUv,vUv-(h*(0.5+d)));vec3 ab=e(f,inputA,1.0/resolution);fragColor=vec4(ab,1.);}`;
    var Jp = `#version 300 es
precision highp float;precision highp int;uniform Screen{vec2 resolution;};uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform sampler2D inputA;uniform vec4 tint;uniform float warp;in vec2 vUv;out vec4 fragColor;void main(){float a=0.01;float b=5.0;vec2 c;c.x=sin(vUv.y*10.0+time)*a;c.y=cos(vUv.x*10.0+time)*a;vec4 d=texture(inputA,vUv);vec4 e=texture(inputA,vUv+c);vec4 f=mix(d,e,warp);f.rgb=mix(f.rgb,tint.rgb*0.2+0.8*tint.rgb*length(f.rgb),tint.a);fragColor=f;}`;
    var Kp = `#version 300 es
precision highp float;precision highp int;uniform vec4 colStart;uniform vec4 colEnd;uniform vec2 offset;in vec2 vUv;out vec4 fragColor;void main(){fragColor=mix(colStart,colEnd,vUv.x);if(fragColor.a<0.01){discard;}fragColor.rgb*=fragColor.a;fragColor.a*=0.5;}`;
    var e1 = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform vec2 offset;in vec3 position;in vec2 uv;out vec2 vUv;void main(){vUv=vec2(uv.x-min(uv.x/offset.y,1.0)*offset.x,uv.y);gl_Position=projectionViewMatrix*vec4(position,1.0);}`;
    var t1 = `#version 300 es
precision highp float;precision highp int;uniform vec4 colStart;uniform vec4 colEnd;uniform vec2 offset;uniform sampler2D diffuse;in vec2 vUv;out vec4 fragColor;void main(){fragColor=texture(diffuse,vUv);fragColor*=mix(colStart,colEnd,vUv.x);if(fragColor.a<0.01){discard;}}`;
    var o1 = `#version 300 es
precision highp float;precision highp int;void main(){}`;
    var r1 = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};in mat4 worldMatrix;in vec3 position;in vec2 uv;out vec2 vUv;void main(){vUv=uv;gl_Position=projectionViewMatrix*worldMatrix*vec4(position,1.0);}`;
    var n1 = `#version 300 es
precision highp float;precision highp int;in vec2 vUv;uniform sampler2D diffuse;void main(){if(texture(diffuse,vUv).a<0.7)discard;}`;
    var i1 = `#version 300 es
precision highp float;precision highp int;uniform vec4 color;out vec4 fragColor;void main(){fragColor=color;}`;
    var s1 = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform mat4 modelMatrix;in vec3 position;in vec2 uv;in vec3 normal;out vec2 vUv;out vec3 vNormal;out vec3 vPos;void main(){vUv=uv;vNormal=normal;vPos=position;gl_Position=projectionViewMatrix*modelMatrix*vec4(position,1.0);}`;
    var a1 = `#version 300 es
precision highp float;precision highp int;uniform sampler2D diffuse;in vec2 vUv;out vec4 fragColor;void main(){vec4 a=texture(diffuse,vUv);vec3 b=normalize(vec3(1.0,1.0,0.3));fragColor=a;if(fragColor.a<0.2)discard;}`;
    var c1 = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform mat4 modelMatrix;in vec2 uv;in vec3 position;in vec3 normal;out vec2 vUv;out vec3 vNormal;void main(){vUv=uv;gl_Position=projectionViewMatrix*modelMatrix*vec4(position,1.0);}`;
    var l1 = `#version 300 es
precision highp float;precision highp int;in vec4 vColor;out vec4 fragColor;void main(){fragColor=vColor;}`;
    var f1 = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform mat4 modelMatrix;in vec3 position;in vec4 color;out vec4 vColor;void main(){vColor=color;gl_Position=projectionViewMatrix*modelMatrix*vec4(position,1.0);}`;
    var d1 = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform Sky{vec3 skycolors[5];vec3 suncolor;};uniform sampler2D skyDiffuse;uniform sampler2D cloudDiffuse;in vec2 vUv;in vec3 vPos;out vec4 fragColor;void main(){gl_FragDepth=0.999999;vec3 a=vec3(0.0);float b=vPos.y/0.5;if(b>0.4){a=mix(skycolors[1],skycolors[0],smoothstep(0.4,1.0,b));}else if(b>0.25){a=mix(skycolors[2],skycolors[1],smoothstep(0.25,0.4,b));}else if(b>0.06){a=mix(skycolors[3],skycolors[2],smoothstep(0.06,0.25,b));}else{a=mix(fog[0],skycolors[3],smoothstep(0.0,0.06,b));}float c=1.0-sin(daycycle*6.28)+0.02;float d=smoothstep(0.1,0.5,b)*smoothstep(0.9,0.6,b);a+=texture(skyDiffuse,vUv*vec2(4.0,1.0)).rgb*c*d;float e=texture(cloudDiffuse,vec2(vUv.x+time/80.0,vUv.y*0.6+time/120.0)).r*texture(cloudDiffuse,vec2(vUv.x*2.0+time/300.0,vUv.y*0.6)).r;e=e*smoothstep(0.0,0.1,b)*smoothstep(1.0,0.85,b);e=smoothstep(0.25,0.7,e);a=mix(a,skycolors[4],e);fragColor=vec4(a,1.0);}`;
    var u1 = `#version 300 es
precision highp float;precision highp int;in vec2 vUv;uniform float seed;float a(in vec2 uv,float scale){uv*=scale;vec2 b=floor(uv),f=fract(uv),p;float c=3.,d;p=.5+.35*sin(11.*fract(sin((b+p+scale)*mat2(7,3,6,5))*5.))-f;d=length(p);c=min(d,c);return smoothstep(0.,c,sin(f.x+f.y)*0.003);}vec2 d(vec2 e){e=vec2(dot(e,vec2(127.1,311.7)),dot(e,vec2(269.5,183.3)));return-1.0+2.0*fract(sin(e)*43758.5453123);}float f(in vec2 e){const float g=0.366025404;const float h=0.211324865;vec2 i=floor(e+(e.x+e.y)*g);vec2 j=e-i+(i.x+i.y)*h;vec2 l=(j.x>j.y)?vec2(1.0,0.0):vec2(0.0,1.0);vec2 m=j-l+h;vec2 n=j-1.0+2.0*h;vec3 q=max(0.5-vec3(dot(j,j),dot(m,m),dot(n,n)),0.0);vec3 r=q*q*q*vec3(dot(j,d(i+0.0)),dot(m,d(i+l)),dot(n,d(i+1.0)));float t=dot(r,vec3(70.0));return smoothstep(-1.0,1.0,t);}out vec4 fragColor;void main(){vec2 u=vec2(vUv.x+seed,vUv.y);float r=a(vUv,10.0);r+=a(vUv,20.0)*0.5;r+=a(vUv,30.0)*0.2;r*=f(vUv*20.0);fragColor.rgb+=r*4.0;}`;
    var m1 = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform Sky{vec3 skycolors[5];vec3 suncolor;};uniform float u_rain;in vec2 vUv;in vec3 vPos;out vec4 fragColor;void main(){gl_FragDepth=0.999998;float a=length(vec2(0.5,0.5)-vUv);float b=smoothstep(0.3,0.2,a)*2.0;b+=smoothstep(0.5,0.1,a);b*=smoothstep(0.08,0.15,(vPos.y+0.2)*0.2+abs(sin(daycycle*6.282)));b*=1.0-u_rain;fragColor.rgba=vec4(suncolor,b);}`;
    var p1 = `#version 300 es
precision highp float;precision highp int;uniform Circle{vec4 circlePos;vec4 circleInfo;};precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform MeshTerrain{mat4 modelMatrix;vec4 terrainInfo[4];int quadrant;};const float b=256.0;const float c=4.0;precision highp sampler2DArray;uniform sampler2DArray atlas;uniform sampler2D diffuse[4];in vec3 vLight;in vec3 vNormal;in vec3 vViewDir;in vec3 vUvChannel;in vec2 vUvTexture[4];vec4 d;float e;vec3 f(vec3 g,vec3 h,vec3 i,vec3 j,float k,vec3 l,float m){j=normalize(j);float n=clamp(dot(j,worldlight[2]),0.0,k);vec3 o=g*mix(0.7,1.1,0.5+(0.5*n));vec3 p=normalize(worldlight[2]+vViewDir);vec3 q=h*pow(max(0.0,dot(p,j)),20.0)*m*max(k*0.7+0.2,0.2)*20.0;vec3 r=o+h*n+l;return r*i+q;}void s(vec4 t,float u,vec4 v){float w=t.x+t.y+t.z;e+=v[3]*smoothstep(v[1],v[2],w)*u;t.a=u;t.rgb*=u;d+=t;}out vec4 fragColor;void main(){if(vCameraDistance>fog[1][1]){fragColor=vec4(fog[0],1.0);return;}vec4 x=texture(atlas,vUvChannel);x[3]=max(0.0,min(1.0,1.0-(x.r+x.g+x.b)));if(x[0]==1.0&&x[1]==1.0&&x[2]==1.0)discard;s(texture(diffuse[0],vUvTexture[0]),x[0],terrainInfo[0]);s(texture(diffuse[1],vUvTexture[1]),x[1],terrainInfo[1]);s(texture(diffuse[2],vUvTexture[2]),x[2],terrainInfo[2]);s(texture(diffuse[3],vUvTexture[3]),x[3],terrainInfo[3]);d.rgb/=d.a;e/=d.a;d.a=1.0;float y=1.0;if(a==1&&vCameraDistance<shadowRange[2]){float az=smoothstep(shadowRange[1],shadowRange[2],vCameraDistance);if(vCameraDistance>shadowRange[0]){vec4 aa=shadowPVMatrix[1]*(vWorldPos);vec3 ab=(aa.xyz/aa.w)*0.5+0.5;y=texture(shadowMaps[1],ab);}else{vec4 aa=shadowPVMatrix[0]*(vWorldPos);vec3 ab=(aa.xyz/aa.w)*0.5+0.5;y=texture(shadowMaps[0],ab);}y=y;y=max(y,az);}d.rgb=f(worldlight[1],worldlight[0],d.rgb,vNormal,y,vLight,e);float ac=distance(vWorldPos.xz,circlePos.xz);float ad=min(1.0,max(0.0,4.0-abs(vWorldPos.y-circlePos.y)));if(ac<circlePos.w+0.1&&ad>0.0){d.rgb=mix(d.rgb,circleInfo.rgb,ad*circleInfo.a*((ac<circlePos.w?ac/circlePos.w*0.5:0.0)+max(0.,(0.1-abs(circlePos.w-ac))/0.1)));}float ae=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);d.rgb=mix(fog[0],d.rgb,ae);fragColor=d;}`;
    var h1 = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};out float vCameraDistance;out vec4 vWorldPos;uniform Pointlights{vec4 lightCols[16];vec3 lightPos[16];int lightCount;};out vec3 vLight;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform MeshTerrain{mat4 modelMatrix;vec4 terrainInfo[4];int quadrant;};const float a=256.0;const float b=4.0;in vec3 position;in vec3 normal;out vec3 vNormal;out vec3 vUvChannel;out vec2 vUvTexture[4];out vec3 vViewDir;void main(){vNormal=normal;vWorldPos=modelMatrix*vec4(position,1.0);vUvChannel=vec3(position[0],position[2],0.0)/32.0;int c=quadrant%2;int d=int(quadrant%4);if(c==1)vUvChannel.x-=1.0;if(d>1)vUvChannel.y-=1.0;vUvChannel.z=float(quadrant);vec2 e=vec2(-vWorldPos[0],vWorldPos[2])/4.0;vUvTexture[0]=e*terrainInfo[0][0];vUvTexture[1]=e*terrainInfo[1][0];vUvTexture[2]=e*terrainInfo[2][0];vUvTexture[3]=e*terrainInfo[3][0];for(int f=0;f<lightCount;++f){vec3 g=lightPos[f]-vWorldPos.xyz;float h=lightCols[f].w-dot(g,g);if(h>0.0){h/=(lightCols[f].w);h=h*h;vLight+=0.2*lightCols[f].rgb*h;}}vViewDir=-normalize(vWorldPos.xyz-cameraPosition);vCameraDistance=length(cameraPosition-vWorldPos.xyz);gl_Position=projectionViewMatrix*vWorldPos;}`;
    var g1 = `#version 300 es
precision highp float;precision highp int;in vec4 vWorldPos;out vec4 fragColor;uniform vec4 colors[576];uniform int divider;void main(){float a=64.0/float(divider);int b=int(floor(mod(vWorldPos.x,64.0)/a)+floor(mod(vWorldPos.z,64.0)/a)*float(divider));fragColor.rgba=colors[b];}`;
    var v1 = `#version 300 es
precision highp float;precision highp int;in vec3 vPos;in vec3 vNormal;out vec4 fragColor;void main(){float a=0.0;if(vNormal.y<0.93){a=1.0;}fragColor=vec4(0.0,0.0,a,0.4+a*0.6);if(abs(vPos.x-0.0)<0.001||abs(vPos.x-64.0)<0.001||abs(vPos.z-0.0)<0.001||abs(vPos.z-64.0)<0.001)fragColor=vec4(1.0,1.0,0.0,1.0);if((abs(vPos.x-32.0)<0.001&&mod(vPos.z,1.0)<0.5)||(abs(vPos.z-32.0)<0.001&&mod(vPos.x,1.0)<0.5))fragColor=vec4(1.0,1.0,0.0,1.0);}`;
    var x1 = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform mat4 modelMatrix;in vec3 normal;in vec3 position;out vec3 vPos;out vec3 vNormal;void main(){vNormal=normal;vPos=position;gl_Position=projectionViewMatrix*modelMatrix*vec4(position[0],position[1]+0.05,position[2],1.0);}`;
    var b1 = `#version 300 es
precision highp float;precision highp int;uniform Circle{vec4 circlePos;vec4 circleInfo;};precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform MeshTerrain{mat4 modelMatrix;vec4 terrainInfo[4];int quadrant;};const float b=256.0;const float c=4.0;precision highp sampler2DArray;uniform sampler2DArray atlas;uniform sampler2D diffuse[4];in vec3 vLight;in vec3 vNormal;in vec3 vViewDir;in vec3 vUvChannel;in vec2 vUvTexture[4];vec4 d;float e;void f(vec4 g,float h,vec4 i){float j=g.x+g.y+g.z;e+=i[3]*smoothstep(i[1],i[2],j)*h;g.a=h;g.rgb*=h;d+=g;}out vec4 fragColor;void main(){vec4 k=texture(atlas,vUvChannel);k[3]=max(0.0,min(1.0,1.0-(k.r+k.g+k.b)));if(k[0]==1.0&&k[1]==1.0&&k[2]==1.0)discard;f(texture(diffuse[0],vUvTexture[0]),k[0],terrainInfo[0]);f(texture(diffuse[1],vUvTexture[1]),k[1],terrainInfo[1]);f(texture(diffuse[2],vUvTexture[2]),k[2],terrainInfo[2]);f(texture(diffuse[3],vUvTexture[3]),k[3],terrainInfo[3]);d.rgb/=d.a;e/=d.a;d.a=1.0;if(mod(vWorldPos.y,2.0)<0.2){d.rgb=mix(d.rgb,vec3(0.8),0.5);}else{d.rgb=mix(d.rgb,vec3(0.2),0.5);}vec3 l=worldlight[2];l.y*=0.5;l=normalize(l);d.rgb*=max(0.3,min(1.0,dot(l,vNormal)*0.5+0.5));float m=distance(vWorldPos.xz,circlePos.xz);if(m<circlePos.w+0.1){d.rgb=mix(d.rgb,circleInfo.rgb,circleInfo.a*(max(0.,(0.3-abs(circlePos.w-m))/0.3)));}float n=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);d.rgb=mix(fog[0],d.rgb,n);fragColor=d;}`;
    var w1 = `#version 300 es
precision highp float;precision highp int;uniform Circle{vec4 circlePos;vec4 circleInfo;};precision highp sampler2DShadow;uniform Shadows{uniform mat4 shadowPVMatrix[2];uniform vec3 shadowRange;};const int a=
#SHADOWS;uniform sampler2DShadow shadowMaps[2];uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform MeshTerrain{mat4 modelMatrix;vec4 terrainInfo[4];int quadrant;};const float b=256.0;const float c=4.0;precision highp sampler2DArray;uniform sampler2DArray atlas;uniform sampler2D diffuse[4];in vec3 vLight;in vec3 vNormal;in vec3 vViewDir;in vec3 vUvChannel;in vec2 vUvTexture[4];vec4 d;float e;void f(vec4 g,float h,vec4 i){float j=g.x+g.y+g.z;e+=i[3]*smoothstep(i[1],i[2],j)*h;g.a=h;g.rgb*=h;d+=g;}out vec4 fragColor;void main(){vec4 k=texture(atlas,vUvChannel);k[3]=max(0.0,min(1.0,1.0-(k.r+k.g+k.b)));if(k[0]==1.0&&k[1]==1.0&&k[2]==1.0)discard;d.rgb=texture(diffuse[0],vUvTexture[0]).rgb;float l=64.0/12.0;float m=l/2.0;bool n=mod(vWorldPos.z,l)>m;if(mod(vWorldPos.x,l)<m){if(n){d.rgb=vec3(0.45);}else{d.rgb=vec3(0.55);}}else{if(n){d.rgb=vec3(0.55);}else{d.rgb=vec3(0.45);}}vec3 o=worldlight[2];o.y*=0.5;o=normalize(o);d.rgb*=max(0.3,min(1.0,dot(o,vNormal)*0.5+0.5));float p=distance(vWorldPos.xz,circlePos.xz);if(p<circlePos.w+0.1){d.rgb=mix(d.rgb,circleInfo.rgb,circleInfo.a*(max(0.,(0.3-abs(circlePos.w-p))/0.3)));}float q=clamp((fog[1][1]-vCameraDistance)/(fog[1][1]-fog[1][0]),0.0,1.0);d.rgb=mix(fog[0],d.rgb,q);fragColor=d;}`;
    var _1 = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;out vec4 fragColor;void main(){fragColor.rgb=fog[0];}`;
    var y1 = `#version 300 es
precision highp float;precision highp int;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform MeshTerrain{mat4 modelMatrix;vec4 terrainInfo[4];int quadrant;};in vec3 position;void main(){vec4 a=modelMatrix*vec4(position,1.0);gl_Position=projectionViewMatrix*a;}`;
    var M1 = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};in float vCameraDistance;in vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform Screen{vec2 resolution;};uniform sampler2D waterLines;uniform sampler2D waterNoise;uniform sampler2D bufferPongColor;uniform sampler2D bufferPongDepth;in vec2 vUv;out vec4 fragColor;void main(){float a=length(cameraPosition-vWorldPos.xyz);float b=(texture(waterNoise,vUv.yx/4.0+time*0.1).r-0.5);float c=gl_FragCoord.z;c=c*2.0-1.0;c=projectionMatrix[3][2]/(c+projectionMatrix[2][2]);if(a>fog[1][1]){fragColor=vec4(fog[0],1.0);return;}vec2 d=gl_FragCoord.xy/resolution;float e=texture(bufferPongDepth,d.xy).r;e=e*2.0-1.0;e=projectionMatrix[3][2]/(e+projectionMatrix[2][2]);float f=e-c;vec2 g=vec2(b*0.05,0.0);float h=f;float i=1.0-clamp(h/0.1,0.0,1.0);float j=1.0-clamp(h/0.6,0.0,1.0);float k=1.0-clamp(h/2.0,0.0,1.0);float l=1.0-clamp(h/10.0,0.0,1.0);float m=1.0-clamp(h/100.0+0.5,0.0,1.0);float n=texture(waterLines,vUv.yx+b*0.15).r;vec3 o=mix(watercolors[2],watercolors[1],l);vec3 p=texture(bufferPongColor,d.xy+g).rgb;vec3 q=(worldlight[0]+worldlight[1]);vec3 r=mix(o,p*o,m)+n*watercolors[0]*(0.05+k*0.3);r=mix(r,watercolors[0],j)*q;vec4 s=vec4(r,1.0-i);float t=min(1.0,max(0.0,(n*(b+0.3)*0.5)));s.rgb+=t*worldlight[0];float u=clamp((fog[1][1]-a)/(fog[1][1]-fog[1][0]),0.0,1.0);s.rgb=mix(fog[0],s.rgb,u);fragColor=s;}`;
    var k1 = `#version 300 es
precision highp float;precision highp int;uniform Environment{vec3 worldlight[3];vec3 fog[2];vec3 watercolors[3];float time;float daycycle;};out float vCameraDistance;out vec4 vWorldPos;uniform Camera{mat4 projectionMatrix;mat4 viewMatrix;mat4 projectionViewMatrix;vec3 cameraPosition;};uniform Water{vec3 verts[4];};in vec3 position;in vec3 color;in vec3 colorFoam;in vec3 colorShallow;out vec2 vUv;void main(){vWorldPos.xyz=verts[gl_VertexID];vWorldPos.w=1.0;vUv=vWorldPos.xz/2.0;gl_Position=projectionViewMatrix*vWorldPos;}`;
    var F1 = `#version 300 es
precision highp float;precision highp int;in vec4 vWorldPos;out vec4 fragColor;void main(){fragColor.rgba=vec4(1.0,mod(vWorldPos.y+0.001,1.0),0.0,0.5);}`;
    var cs = {
            frag: Pp,
            vert: Lp
        },
        ls = {
            frag: Dp,
            vert: Ep
        },
        fs = {
            frag: Tp,
            vert: Ip
        },
        ds = {
            frag: zp,
            vert: Vp
        },
        us = {
            frag: Rp,
            vert: Up
        },
        ms = {
            frag: Bp,
            vert: jp
        },
        Nn = {
            frag: qp,
            vert: Op
        },
        ps = {
            frag: Np,
            vert: Wp
        },
        mc = {
            frag: Gp
        },
        hs = {
            vert: Hp
        },
        pc = {
            frag: $p
        },
        hc = {
            frag: Yp
        },
        gc = {
            frag: Xp
        },
        vc = {
            frag: Qp
        },
        xc = {
            frag: Zp
        },
        bc = {
            frag: Jp
        },
        Wn = {
            frag: Kp,
            vert: e1
        },
        wc = {
            frag: t1
        },
        Gn = {
            frag: o1,
            vert: r1
        },
        _c = {
            frag: n1
        },
        gs = {
            frag: i1,
            vert: s1
        },
        d_ = {
            frag: a1,
            vert: c1
        },
        u_ = {
            frag: l1,
            vert: f1
        },
        yc = {
            frag: d1
        },
        Mc = {
            frag: u1
        },
        kc = {
            frag: m1
        },
        vs = {
            frag: p1,
            vert: h1
        },
        m_ = {
            frag: g1
        },
        p_ = {
            frag: v1,
            vert: x1
        },
        h_ = {
            frag: b1
        },
        g_ = {
            frag: w1
        },
        xs = {
            frag: _1,
            vert: y1
        },
        bs = {
            frag: M1,
            vert: k1
        },
        v_ = {
            frag: F1
        };
    var A1 = (t, e, o) => {
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
                    d = a[c],
                    u = f.size,
                    m = 0,
                    h = 0,
                    g = !1;
                f.type === v.FLOAT_VEC3 ? (m = 3, h = u > 1 ? 4 : 3) : f.type === v.FLOAT_VEC2 ? (m = 2, h = u > 1 ? 4 : 2) : f.type === v.FLOAT_VEC4 ? (m = 4, h = 4) : f.type === v.FLOAT_MAT4 ? (m = 16, h = 16) : f.type === v.FLOAT ? (m = 1, h = 1) : f.type === v.INT && (m = 1, h = 1, g = !0), u *= m;
                let M = {
                    name: f.name.replace("[0]", ""),
                    size: u,
                    offset: d,
                    divisor: h,
                    elements: m,
                    isInt: g
                };
                i.uniforms.push(M)
            }
            return i.uniforms.sort((c, l) => c.offset - l.offset), i
        },
        Or = t => {
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
        nr = t => {
            v.bindBufferBase(v.UNIFORM_BUFFER, t.layout.index, t.buffer)
        },
        xo = (t, e, o, r = 0) => {
            r === 0 && (r = e.length);
            for (let n = 0; n < r; ++n) t[n + o] = e[n]
        },
        S1 = new ArrayBuffer(1e3),
        x_ = new Int32Array(S1),
        C1 = new Float32Array(S1),
        _s = t => {
            for (let e = 0; e < t.layout.uniforms.length; ++e) {
                let o = t.layout.uniforms[e];
                t.data[o.name] !== t.dataArray[e] && (t.dataArray[e] = t.data[o.name])
            }
        },
        Lt = t => {
            let e = 0;
            for (let o = 0; o < t.layout.uniforms.length; ++o) {
                let r = t.layout.uniforms[o],
                    n = t.dataArray[o],
                    i = r.isInt ? x_ : C1,
                    s = 0;
                for (; s < n.length;)
                    for (let a = 0; a < r.divisor; ++a) a < r.elements && (i[e] = n[s], s++), e++
            }
            v.bindBuffer(v.UNIFORM_BUFFER, t.buffer), v.bufferSubData(v.UNIFORM_BUFFER, 0, C1, 0, t.layout.size / 4), v.bindBuffer(v.UNIFORM_BUFFER, null)
        };

    function ys(t, e, o) {
        return t[0] = e, t[1] = o, t
    }

    function P1(t) {
        let e = t[0],
            o = t[1];
        return Math.sqrt(e * e + o * o)
    }
    var assetVersion = "8862189";
    var settingDefaults = {
        cinematicLighting: false,
        ssao: false,
        ssaoRadius: 9,
        ssaoBias: 9,
        ssaoFadeDist: 300,
        ssaoBlur: true,
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
    var setStyle = (el, prop, value) => el.style.setProperty(prop, value);
    var bindSampler = (name, tex, idx, prog) => prog.samplerNames.indexOf(name) >= 0 && lt(name, tex, idx, prog);
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
        const N = 32;
        const phi = Math.PI * (3 - Math.sqrt(5));
        let out = [];
        for (let i = 0; i < N; i++) {
            let z = (i + 0.5) / N;
            let r = Math.sqrt(1 - z * z);
            let a = phi * i;
            let x = Math.cos(a) * r;
            let y = Math.sin(a) * r;
            let t = i / (N - 1);
            let scale = 0.1 + 0.9 * t * t;
            out.push(`vec3(${(x * scale).toFixed(4)},${(y * scale).toFixed(4)},${(z * scale).toFixed(4)})`);
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
    return texture(inputA, uv).a < 0.02;
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
        let w = [];
        for (let i = 0; i <= ssaoBlurRadius; i++) w.push(Math.exp(-(i * i) / (2 * sigma * sigma)));
        return w.map(x => x.toFixed(6));
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

    int rEff = int(floor(mix(1.0, float(${ssaoBlurRadius}), smoothstep(5.0, 60.0, abs(zCenter))) + 0.5));

    for(int i = 1; i < ${ssaoBlurRadius + 1}; i++){
        if(i > rEff) break;
        vec2 offset = step * float(i);

        vec2 uvP = vUv + offset;
        float dP = texture(depthTex, uvP).r;
        if(dP < 0.9999){
            float dz = linearZ(dP) - zCenter;
            float w = weight[i] * exp(-dz * dz * invTwoSigmaZSq);
            result += texture(inputA, uvP).rgb * w;
            wSum += w;
        }

        vec2 uvN = vUv - offset;
        float dN = texture(depthTex, uvN).r;
        if(dN < 0.9999){
            float dz = linearZ(dN) - zCenter;
            float w = weight[i] * exp(-dz * dz * invTwoSigmaZSq);
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

in vec2 vUv;
out vec4 fragColor;

void main(){
    fragColor = vec4(texture(inputA, vUv).rgb * texture(inputB, vUv).rgb, 1.0);
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
            ssaoFb1 = fo(e, n, 1, !1), ssaoFb2 = fo(e, n, 1, !1), ssaoHistA = fo(e, n, 1, !1), ssaoHistB = fo(e, n, 1, !1);
            bloomMips.length = 0;
            for (let o = 0; o < bloomMipCount; ++o) bloomMips.push(fo(bloomMipSize(e, o), bloomMipSize(n, o), 1, !1));
        },
        resizeExtraBuffers = (t, e) => {
            Pn(ssaoFb1, t, e), Pn(ssaoFb2, t, e), Pn(ssaoHistA, t, e), Pn(ssaoHistB, t, e);
            for (let n = 0; n < bloomMips.length; ++n) Pn(bloomMips[n], bloomMipSize(t, n), bloomMipSize(e, n));
        };

    var ssaoHistIdx = 0,
        ssaoFirstFrame = true,
        ssaoPrevPVMat = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        pfxFullscreen = (t, e) => {
            bindSampler("inputA", Jt.colorTexture, 0, Q[t]);
            bindSampler("depthTex", Jt.depthTexture, 0, Q[t]);
            for (let n = 0; n < e.length; ++n) Q[t].uniforms[e[n][0]].value = e[n][1];
            si(vo), qt(Un, Q[t]), ea(vo, Jt, v.COLOR_BUFFER_BIT);
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
            bindSampler("depthTex", Jt.depthTexture, 0, Q[40]);
            for (let s = 0; s < bloomMips.length; ++s) on(40, bloomMips[s], i, null, [
                ["texelSize", [1 / i.width, 1 / i.height]],
                ["prefilter", s === 0 ? 1 : 0],
                ["skyBloom", gfx("bloomSky") / 100],
                ["filterCurve", o]
            ]), i = bloomMips[s];
            for (let s = bloomMips.length - 1; s > 0; --s) on(41, bloomMips[s - 1], bloomMips[s], null, [
                ["texelSize", [1 / bloomMips[s].width, 1 / bloomMips[s].height]],
                ["bloomRadius", gfx("bloomRadius") / 100]
            ]);
            return bloomMips[0];
        },
        postScene = e => {
            if (gfe.ssao) {
                bindSampler("depthTex", Jt.depthTexture, 0, Q[35]);
                bindSampler("inputA", Jt.colorTexture, 0, Q[35]);
                si(ssaoFb1);
                v.clear(v.COLOR_BUFFER_BIT);
                qt(Un, Q[35]);

                bindSampler("depthTex", Jt.depthTexture, 0, Q[36]);
                on(36, ssaoFb2, ssaoFb1, null, [
                    ["blurStep", 0]
                ]);

                bindSampler("inputA", ssaoFb2.colorTexture, 0, Q[36]);
                bindSampler("depthTex", Jt.depthTexture, 0, Q[36]);
                Q[36].uniforms.blurStep.value = 1;
                si(ssaoFb1);
                qt(Un, Q[36]);

                let histPrev = ssaoHistIdx === 0 ? ssaoHistA : ssaoHistB,
                    histNext = ssaoHistIdx === 0 ? ssaoHistB : ssaoHistA;

                bindSampler("inputA", ssaoFb1.colorTexture, 0, Q[37]);
                bindSampler("inputB", histPrev.colorTexture, 0, Q[37]);
                bindSampler("depthTex", Jt.depthTexture, 0, Q[37]);
                Q[37].uniforms.prevProjectionViewMatrix.value = ssaoPrevPVMat;
                Q[37].uniforms.blendAlpha.value = ssaoFirstFrame ? 1.0 : 0.1;
                si(histNext);
                qt(Un, Q[37]);

                bindSampler("inputA", histNext.colorTexture, 0, Q[38]);
                bindSampler("inputB", Jt.colorTexture, 0, Q[38]);
                si(vo);
                qt(Un, Q[38]);
                ea(vo, Jt, v.COLOR_BUFFER_BIT);

                if (L1) xo(ssaoPrevPVMat, L1.projectionViewMatrix, 0);
                ssaoHistIdx ^= 1;
                ssaoFirstFrame = false;

                si(Jt), Th(e), Ty(e);
            } else {
                ssaoFirstFrame = true;
            }
            let mistRain = window.rainAmount || 0;
            if (mistRain > 0.002) pfxFullscreen(48, [
                ["mistAmount", mistRain],
                ["mistShadows", Te.shadows ? 1 : 0]
            ]);
            if (gfe.godRays && Te.shadows) pfxFullscreen(45, [
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
                ["texelSize", [1 / Jt.width, 1 / Jt.height]],
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
            let e = Q[46];
            if (!e || !e.active) return;
            if (!fireflyMesh) {
                let n = new Float32Array(fireflyMax);
                for (let o = 0; o < fireflyMax; ++o) n[o] = o + 1;
                fireflyMesh = Vt(at({
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
            let n = Be.camera && Be.camera.data,
                o = n ? n.cameraPosition[1] - 8 : 0;
            try {
                if (n && ne && ne.getHeight) o = ne.getHeight(n.cameraPosition[0], n.cameraPosition[2]) + 1;
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
            qt(fireflyMesh, e);
        };

    var updateEnvironment = (t, e, o, r, n, i, s) => {
            let _ra = window.rainAmount || 0,
                dayLit = 1 - Math.min(1, Math.max(0, (1 - Math.sin(t * 6.28)) * 0.5)),
                rainDarken = 1 - (1 - (1 - rainDim) * _ra) * (1 - rainDimDay * dayLit * _ra),
                _dm = 1 - rainDarken * rainDimScale,
                a = Be.environment.data;
            if (_ra > 0)
                for (let k = 0; k < 15; k++) s.skycolors[k] *= _dm;
            if (gfe.simpleSky) Oe.fog = Oe.skymid;
            so(a.worldlight, 0, Oe.direct[n], Oe.direct[i], r), so(a.worldlight, 3, Oe.ambient[n], Oe.ambient[i], r), a.worldlight[6] = Yr[0], a.worldlight[7] = Yr[1], a.worldlight[8] = Yr[2];
            if (_ra > 0)
                for (let k = 0; k < 6; k++) a.worldlight[k] *= _dm;
            if (gfe.ambienceTint) {
                let tc = hexParts(gfe.ambienceTintColor),
                    ts = gfe.tintSunStrength / 100,
                    tint = (arr, off, count) => {
                        if (!arr || ts <= 0) return;
                        for (let k = 0; k < count; ++k) {
                            let c = arr[off + k];
                            arr[off + k] = c + (c * (tc[k % 3] / 255) - c) * ts;
                        }
                    };
                tint(a.worldlight, 0, 3);
                gfe.tintSunColor && tint(s.suncolor, 0, 3);
            }
            so(a.fog, 0, Oe.fog[n], Oe.fog[i], r), a.fog[3] = o > 0 ? -100 : rc, a.fog[4] = o > 0 ? nc : Wt, a.daycycle[0] = t, a.time[0] = e % 3600, Q[31].uniforms.amount.value = En(r, Oe.bloom[n], Oe.bloom[i]);
            if (_ra > 0) {
                for (let k = 0; k < 3; k++) a.fog[k] *= _dm;
                for (let k = 0; k < 3; k++) a.fog[k] += ((a.worldlight[3 + k] * 1.1 + a.worldlight[k] * 0.15) * rainFogTint[k] - a.fog[k]) * _ra;
                for (let k = 0; k < 3; k++) s.skycolors[9 + k] += (a.fog[k] - s.skycolors[9 + k]) * _ra;
            }
            let night = Math.min(1, Math.max(0, (1 - Math.sin(t * 6.28)) * 0.5));
            bloomAmountVal = (bloomDayIntensity + (bloomNightIntensity - bloomDayIntensity) * night) / 100 * (gfx("bloomIntensity") / 100);
            tonemapExposureVal = (tonemapDayExposure + (tonemapNightExposure - tonemapDayExposure) * night) / 100 * ((gfx("tonemapExposure") + 50 * _ra) / 100);
            Q[12] && Q[12].uniforms && Q[12].uniforms.u_rain && (Q[12].uniforms.u_rain.value = _ra);
            Q[13] && Q[13].uniforms && Q[13].uniforms.u_rainAmount && (Q[13].uniforms.u_rainAmount.value = _ra);
            Q[14] && Q[14].uniforms && Q[14].uniforms.u_rainAmount && (Q[14].uniforms.u_rainAmount.value = _ra);
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
                ct = o.contrast == null ? 1 : o.contrast,
                hu = o.hue || 0;
            if (!l && !ev && ct === 1 && !hu) return null;
            let gain = Math.pow(2, ev),
                lr = l ? l[0] : 1,
                lg = l ? l[1] : 1,
                lb = l ? l[2] : 1,
                a = hu * Math.PI / 180,
                cs = Math.cos(a),
                sn = Math.sin(a),
                m = hu ? [
                    .299 + .701 * cs + .168 * sn, .587 - .587 * cs + .330 * sn, .114 - .114 * cs - .497 * sn,
                    .299 - .299 * cs - .328 * sn, .587 + .413 * cs + .035 * sn, .114 - .114 * cs + .292 * sn,
                    .299 - .300 * cs + 1.250 * sn, .587 - .588 * cs - 1.050 * sn, .114 + .886 * cs - .203 * sn
                ] : null;
            return c => {
                let r = c[0] * gain,
                    g = c[1] * gain,
                    b = c[2] * gain;
                if (ct !== 1) r = (r - .5) * ct + .5, g = (g - .5) * ct + .5, b = (b - .5) * ct + .5;
                if (m) {
                    let nr = m[0] * r + m[1] * g + m[2] * b,
                        ng = m[3] * r + m[4] * g + m[5] * b,
                        nb = m[6] * r + m[7] * g + m[8] * b;
                    r = nr, g = ng, b = nb;
                }
                return c[0] = r * lr, c[1] = g * lg, c[2] = b * lb, c;
            };
        },
        filterKey = o => [o.light, o.exposure, o.contrast, o.hue].join("/"),
        applyDxtFilter = (buffer, fn) => {
            let head = new Int32Array(buffer, 0, $3),
                dxt3 = head[K3] === tb,
                stride = dxt3 ? 16 : 8,
                cOff = dxt3 ? 8 : 0,
                out = buffer.slice(0),
                b = new Uint8Array(out, head[Y3] + 4),
                px = [0, 0, 0];
            for (let p = 0; p + stride <= b.length; p += stride) {
                let o = p + cOff,
                    was4 = (b[o] | b[o + 1] << 8) > (b[o + 2] | b[o + 3] << 8);
                for (let k = 0; k < 2; ++k) {
                    let q = o + k * 2,
                        c = b[q] | b[q + 1] << 8;
                    px[0] = (c >> 11 & 31) / 31, px[1] = (c >> 5 & 63) / 63, px[2] = (c & 31) / 31;
                    fn(px);
                    let r = Math.max(0, Math.min(31, Math.round(px[0] * 31))),
                        g = Math.max(0, Math.min(63, Math.round(px[1] * 63))),
                        u = Math.max(0, Math.min(31, Math.round(px[2] * 31))),
                        n = r << 11 | g << 5 | u;
                    b[q] = n & 255, b[q + 1] = n >> 8;
                }
                if (dxt3) continue;
                let c0 = b[o] | b[o + 1] << 8,
                    c1 = b[o + 2] | b[o + 3] << 8;
                if (was4 === c0 > c1) continue;
                if (was4 && c0 === c1) {
                    c1 & 31 ? c1-- : c1 >> 5 & 63 ? c1 -= 32 : c1 >> 11 ? c1 -= 2048 : c0 = 1;
                    b[o] = c0 & 255, b[o + 1] = c0 >> 8, b[o + 2] = c1 & 255, b[o + 3] = c1 >> 8;
                    continue;
                }
                b[o] = c1 & 255, b[o + 1] = c1 >> 8, b[o + 2] = c0 & 255, b[o + 3] = c0 >> 8;
                let map = was4 ? dxtSwap4 : dxtSwap3;
                for (let k = 4; k < 8; ++k) {
                    let x = b[o + k],
                        y = 0;
                    for (let s = 0; s < 8; s += 2) y |= map[x >> s & 3] << s;
                    b[o + k] = y;
                }
            }
            return out;
        },
        tintImage = (t, fn) => {
            let c = document.createElement("canvas");
            c.width = t.width, c.height = t.height;
            let x = c.getContext("2d");
            x.drawImage(t, 0, 0);
            let d = x.getImageData(0, 0, c.width, c.height),
                p = d.data;
            let q = [0, 0, 0];
            for (let i = 0; i < p.length; i += 4) {
                q[0] = p[i] / 255, q[1] = p[i + 1] / 255, q[2] = p[i + 2] / 255, fn(q);
                p[i] = Math.max(0, Math.min(255, Math.round(q[0] * 255))), p[i + 1] = Math.max(0, Math.min(255, Math.round(q[1] * 255))), p[i + 2] = Math.max(0, Math.min(255, Math.round(q[2] * 255)));
            }
            return x.putImageData(d, 0, 0), c;
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
                sx = s[0],
                sy = s[1],
                sz = s[2];
            if (sx !== 1 || sy !== 1 || sz !== 1)
                for (let i = 0; i < p.length; i += 3) p[i] *= sx, p[i + 1] *= sy, p[i + 2] *= sz;
            let f = offsetTriple(o.offset),
                dx = f[0],
                dy = f[1],
                dz = f[2];
            if (o.ground) {
                let lo = 1 / 0;
                for (let i = 1; i < p.length; i += 3) p[i] < lo && (lo = p[i]);
                lo < 1 / 0 && (dy -= lo);
            }
            if (dx || dy || dz)
                for (let i = 0; i < p.length; i += 3) p[i] += dx, p[i + 1] += dy, p[i + 2] += dz;
            return geo;
        },
        addDerivedGeometry = (from, o) => {
            let id = derivedGeometryId++;
            return Ir.set(id, {
                ext: 0,
                id: id,
                type: 1
            }), embeddedGeometry.set(id, {
                from: from,
                scale: o.scale,
                offset: o.offset,
                ground: o.ground
            }), id;
        },
        loadMeshGeometry = (t, e) => {
            if (embeddedGeometry.has(t)) {
                let k = "embed:" + t;
                if (Kb[k]) return void e(...Kb[k]);
                let g = embeddedGeometry.get(t);
                return void Vn("data/assets/", A0(g.from), Kb, Jb, (geo, dec) => {
                    e(...(Kb[k] = [transformGeometry(cloneGeometry(geo), g), dec]));
                });
            }
            Vn("data/assets/", A0(t), Kb, Jb, e);
        },
        loadTexture = (t, e) => {
            let ovr = textureOverrides.get(t),
                fn = null,
                fkey = "";
            if (ovr !== void 0) {
                let id = typeof ovr == "object" ? ovr.id : ovr;
                id != null && (Ir.has(id) ? t = id : console.log("texture override " + t + " -> " + id + " skipped: unknown file id"));
                typeof ovr == "object" && (fn = makeColorFilter(ovr), fkey = filterKey(ovr));
            }
            Ir.has(t) || console.log("unknown file id: " + t);
            let o = Ir.get(t),
                dds = o.ext === 3 && yu,
                name = `${t}.${dds ? In[o.ext] : Ua || In[o.ext]}`;
            if (!fn) return void Vn("data/assets/", name, Za, dds ? tw : ew, e);
            let key = name + "|" + fkey;
            if (litTextures[key]) return void e(...litTextures[key]);
            if (dds) fetch("data/assets/" + name + "?v=" + assetVersion).then(r => r.arrayBuffer()).then(r => {
                e(...(litTextures[key] = tw(applyDxtFilter(r, fn))));
            });
            else {
                let img = new Image;
                img.onload = () => {
                    e(...(litTextures[key] = ew(tintImage(img, fn)))), img.onload = void 0;
                }, img.src = "data/assets/" + name + "?v=" + assetVersion;
            }
        },
        gridCellFoliage = (base, o) => {
            let g = o.grid || 4,
                s = 1 / g,
                col = o.cell % g,
                row = Math.floor(o.cell / g),
                x0 = col * s,
                y0 = row * s,
                x1 = x0 + s,
                y1 = y0 + s,
                cx = (x0 + x1) / 2,
                n0 = base.nodes && base.nodes[0];
            return {
                id: base.id,
                texture: o.texture == null ? base.texture : o.texture,
                type: o.type == null ? base.type : o.type,
                seed: o.seed == null ? base.seed : o.seed,
                nodes: [{
                    geotype: 0,
                    leafCount: o.leafCount == null ? 2 : o.leafCount,
                    points: [x0, y1, x1, y1, x0, y0, x1, y0],
                    start: [cx, y1],
                    end: [cx, y0],
                    size: o.size == null ? (n0 ? n0.size : 4) : o.size,
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
            foliageOverrides.forEach((o, id) => {
                let base = Vr.get(id);
                if (!base) return console.log("foliage override " + id + ": unknown foliage id");
                if (o.hide) return;
                if (o.texture != null && !Ir.has(o.texture)) return console.log("foliage override " + id + ": unknown texture " + o.texture);
                Vr.set(id, o.cell == null ? Object.assign({}, base, o) : gridCellFoliage(base, o));
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
            meshOverrides.forEach((o, id) => {
                let base = ho.get(id);
                if (!base) return console.log("mesh override " + id + ": unknown mesh id");
                let next = Object.assign({}, base);
                if (o.mesh != null) {
                    let donor = ho.get(o.mesh);
                    if (!donor) return console.log("mesh override " + id + ": unknown donor mesh " + o.mesh);
                    next.geometry = donor.geometry, next.texture = donor.texture, next.shader = donor.shader, next.cull = donor.cull, next.shadow = donor.shadow;
                }
                if (o.model != null) {
                    if (Ir.has(o.model) && Ir.get(o.model).ext === 0) next.geometry = o.model;
                    else if (ho.has(o.model)) next.geometry = ho.get(o.model).geometry;
                    else console.log("mesh override " + id + ": model " + o.model + " is neither a geometry file nor a mesh id");
                }
                if (o.texture != null) next.texture = !o.texture || Ir.has(o.texture) ? o.texture : (console.log("mesh override " + id + ": unknown texture file " + o.texture + ", keeping " + next.texture), next.texture);
                o.shader != null && (next.shader = o.shader), o.cull != null && (next.cull = o.cull), o.shadow != null && (next.shadow = o.shadow);
                (o.scale != null || o.offset != null || o.ground) && next.geometry && (next.geometry = addDerivedGeometry(next.geometry, o));
                next.geometry !== base.geometry && (next.collisionGeometry = base.collisionGeometry == null ? base.geometry : base.collisionGeometry);
                ho.set(id, next);
            });
        },
        applyFaivel = () => {
        if (gfe.faivelRetexture) {
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
            /*             textureOverrides.set(2119, {
                            id: 2119,
                            hue: 5,
                        })  */
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
        };

    var presetTracks = [{"world":{"id":"main","file":"main"},"keys":[{"pos":[4123.79,588.93,3755.63],"rot":[0.3136,5.7459,0]},{"pos":[4114.39,584.64,3773.47],"rot":[0.3416,5.3509,0]},{"pos":[4095.64,575.6,3793.13],"rot":[0.3612,5.6059,0]},{"pos":[4090.99,575.52,3804.42],"rot":[0.1204,6.6459,0]},{"pos":[4098.26,580.85,3820.24],"rot":[-0.042,6.8309,0]},{"pos":[4111.56,586.07,3847.16],"rot":[-0.056,6.7759,0]},{"pos":[4126.62,593.19,3870.49],"rot":[-0.1064,6.6659,0]},{"pos":[4134.44,601.02,3883.84],"rot":[-0.0784,6.5709,0]},{"pos":[4148.37,606.67,3897.32],"rot":[0.1876,6.5159,0]},{"pos":[4158.39,607.5,3907.6],"rot":[0.294,6.1909,0]},{"pos":[4162.62,611.43,3911.38],"rot":[0.476,5.8509,0]},{"pos":[4165.77,616.85,3932.79],"rot":[0.4844,5.9709,0]},{"pos":[4158.47,616.85,3948.43],"rot":[0.3808,6.5459,0]},{"pos":[4151.15,623.09,3975.16],"rot":[0.5152,7.2309,0]},{"pos":[4147.25,628.67,3999.93],"rot":[0.4032,6.5809,0]},{"pos":[4148.57,635.08,4015.95],"rot":[0.3444,6.4059,0]},{"pos":[4145.21,631.53,4035.2],"rot":[0.364,5.7559,0]},{"pos":[4139.34,631.9,4055.19],"rot":[0.3808,6.3159,0]},{"pos":[4132.57,626.43,4068.09],"rot":[0.3388,7.1009,0]},{"pos":[4145.31,637.75,4083.99],"rot":[0.2744,7.0209,0]},{"pos":[4169.95,644.07,4114.3],"rot":[0.14,6.8559,0]},{"pos":[4190.48,637.79,4130.8],"rot":[0.3472,6.4659,0]},{"pos":[4198.93,630.38,4150.91],"rot":[0.5684,6.3059,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[4228.03,548.14,4207.47],"rot":[0.2716,6.0577,0]},{"pos":[4222.96,543.45,4232.39],"rot":[0.2856,5.3777,0]},{"pos":[4222.22,543.6,4255.42],"rot":[0.266,5.7929,0]},{"pos":[4219.98,543.6,4279.94],"rot":[0.3024,5.4777,0]},{"pos":[4202.57,547.17,4295.37],"rot":[0.3024,5.4027,0]},{"pos":[4177.67,546.31,4300.52],"rot":[0.3332,5.8427,0]},{"pos":[4156.29,547.29,4292.22],"rot":[0.3584,5.2677,0]},{"pos":[4138.13,547.74,4282.94],"rot":[0.4004,5.0727,0]},{"pos":[4112.39,547.74,4278.58],"rot":[0.3584,4.5677,0]},{"pos":[4097.08,546.33,4290.06],"rot":[0.4004,4.1827,0]},{"pos":[4069.13,548.1,4284.5],"rot":[0.4116,4.3477,0]},{"pos":[4043.38,554.25,4269.28],"rot":[0.42,5.2027,0]},{"pos":[4017.32,554.29,4263.2],"rot":[0.5208,5.6627,0]},{"pos":[3995.78,554.29,4259.63],"rot":[0.4984,4.9428,0]},{"pos":[3963.48,554.29,4263.78],"rot":[0.5432,3.6679,0]},{"pos":[3942.73,548,4249.85],"rot":[0.448,3.3027,0]},{"pos":[3925.96,541.17,4220.25],"rot":[0.462,4.0327,0]},{"pos":[3911.4,541.17,4204.48],"rot":[0.4032,4.6377,0]},{"pos":[3884.75,541.17,4186.36],"rot":[0.1876,4.9527,0]},{"pos":[3862.43,548.93,4202.47],"rot":[0.1876,4.5777,0]},{"pos":[3839.57,555.87,4223.48],"rot":[0.1399,4.7426,0]},{"pos":[3812.14,562.18,4235.34],"rot":[0.0336,5.0777,0]},{"pos":[3777.4,569.63,4249.39],"rot":[0.0867,4.3878,0]},{"pos":[3755.95,577.1,4249.16],"rot":[-0.0476,4.0177,0]},{"pos":[3720.43,591.19,4246.35],"rot":[0.3332,3.5277,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3659.64,541.04,4363.48],"rot":[0.2716,0.9146,0]},{"pos":[3670.91,541.04,4380.71],"rot":[0.2352,0.2696,0]},{"pos":[3681.21,541.04,4390.11],"rot":[0.2324,0.0696,0]},{"pos":[3687.91,546.12,4401.79],"rot":[0.2492,-0.0454,0]},{"pos":[3684.73,546.32,4412.36],"rot":[0.2212,0.1695,0]},{"pos":[3681.62,546.32,4430.04],"rot":[0.2268,0.4746,0]},{"pos":[3680.84,546.32,4443.79],"rot":[0.182,0.7296,0]},{"pos":[3684.99,549.84,4460.39],"rot":[0.1175,0.8996,0]},{"pos":[3698.72,555.55,4469.47],"rot":[0.168,0.6547,0]},{"pos":[3714.87,555.85,4490.61],"rot":[0.252,1.5245,0]},{"pos":[3734.12,552.68,4493.37],"rot":[0.3416,1.9396,0]},{"pos":[3751.09,552.66,4484.53],"rot":[0.4116,1.7996,0]},{"pos":[3766.92,552.66,4471.96],"rot":[0.4788,1.6996,0]},{"pos":[3782.15,545.2,4457.71],"rot":[0.5264,1.3399,0]},{"pos":[3799.23,533.9,4449.66],"rot":[0.5208,1.3796,0]},{"pos":[3832.55,525.36,4437.52],"rot":[0.4396,1.1096,0]},{"pos":[3848.25,524.88,4446.16],"rot":[0.4032,1.2095,0]},{"pos":[3862.77,524.88,4463.12],"rot":[0.2772,1.6845,0]},{"pos":[3883.82,524.88,4468.01],"rot":[0.2632,2.0195,0]},{"pos":[3902.31,530.53,4478.56],"rot":[0.2408,1.5296,0]},{"pos":[3906.85,538.51,4491.76],"rot":[0.3471,0.8796,0]},{"pos":[3911.93,544.69,4502.19],"rot":[0.3444,-0.1751,0]},{"pos":[3914.27,552.65,4521.59],"rot":[0.1708,-1.5704,0]},{"pos":[3907.58,563.21,4529.94],"rot":[-0.0616,-2.0354,0]},{"pos":[3890.79,571.31,4550.62],"rot":[-0.0924,-2.7305,0]},{"pos":[3876.86,576.04,4547.26],"rot":[-0.1036,-3.4004,0]},{"pos":[3861.3,582.46,4528.33],"rot":[-0.1204,-4.0854,0]},{"pos":[3859.22,587.77,4525.22],"rot":[-0.0896,-4.3304,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[4093.5,508.12,4791.48],"rot":[0.0588,4.2277,0]},{"pos":[4085.29,514.73,4768.98],"rot":[0.1736,4.6227,0]},{"pos":[4067.17,506.87,4763.8],"rot":[0.2856,5.2777,0]},{"pos":[4053.63,506.79,4772.53],"rot":[0.2968,4.7327,0]},{"pos":[4026.04,506.79,4777.33],"rot":[0.1316,4.6977,0]},{"pos":[4014.03,511.18,4782.49],"rot":[-0.0532,4.8578,0]},{"pos":[3999.27,515.48,4789.89],"rot":[-0.0672,4.5477,0]},{"pos":[3973.07,523.42,4804.46],"rot":[0.0812,4.2778,0]},{"pos":[3950.87,523.63,4810.72],"rot":[0.2688,4.2427,0]},{"pos":[3935.3,528.55,4804.31],"rot":[0.126,4.3228,0]},{"pos":[3922.77,534.99,4789.9],"rot":[0.3024,4.4377,0]},{"pos":[3897.83,535.49,4769.75],"rot":[0.3276,4.7177,0]},{"pos":[3870.75,527.77,4751.56],"rot":[0.1008,4.6127,0]},{"pos":[3859.6,535.07,4727.86],"rot":[0.126,4.9877,0]},{"pos":[3833.04,535.07,4717.85],"rot":[0.0084,5.0628,0]},{"pos":[3814.18,540.63,4726.54],"rot":[0.042,4.7278,0]},{"pos":[3798.07,546.79,4740.48],"rot":[0.1316,4.5927,0]},{"pos":[3780.44,547.76,4761.24],"rot":[0.2828,4.1027,0]},{"pos":[3761.52,552.89,4774.52],"rot":[0.0868,3.9678,0]},{"pos":[3751.31,559.49,4776.06],"rot":[0.2632,3.7777,0]},{"pos":[3737.16,559.56,4767.15],"rot":[0.2772,4.1127,0]},{"pos":[3722.88,554.02,4756.59],"rot":[0.2716,3.5727,0]},{"pos":[3707.08,556.81,4761.81],"rot":[0.3276,3.2777,0]},{"pos":[3692.03,561.57,4765.69],"rot":[0.3864,3.0027,0]},{"pos":[3683.46,561.59,4755.93],"rot":[0.0756,2.9777,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3530.92,572.41,4583.12],"rot":[0.4116,5.0028,0]},{"pos":[3509.54,566.96,4603.99],"rot":[0.6354,5.1024,0]},{"pos":[3515.21,555.5,4632.62],"rot":[0.63,5.7127,0]},{"pos":[3501.93,541.56,4657.57],"rot":[0.5236,5.4527,0]},{"pos":[3500.03,541.31,4685.49],"rot":[0.2436,5.3378,0]},{"pos":[3489.46,537.36,4711.55],"rot":[0.2772,4.9028,0]},{"pos":[3475.5,537.36,4723.29],"rot":[0.406,4.4077,0]},{"pos":[3464.19,531.8,4728.2],"rot":[0.2828,3.9378,0]},{"pos":[3448.07,525.49,4721.01],"rot":[0.0952,3.7528,0]},{"pos":[3433.97,525.42,4712.87],"rot":[0.0196,4.0877,0]},{"pos":[3433.58,525.42,4693.53],"rot":[-0.0392,4.2627,0]},{"pos":[3443.16,532.17,4676.81],"rot":[-0.0084,4.2126,0]},{"pos":[3446.58,532.53,4659.37],"rot":[0.098,3.8528,0]},{"pos":[3447.33,537.76,4636.63],"rot":[0.0084,3.5878,0]},{"pos":[3421.12,538.35,4619.4],"rot":[0.0952,3.5577,0]},{"pos":[3416.43,538.35,4589.55],"rot":[-0.0056,4.0077,0]},{"pos":[3409.25,543.59,4568.04],"rot":[0.0336,4.1327,0]},{"pos":[3389.07,547.66,4544.94],"rot":[-0.1792,4.6377,0]},{"pos":[3372.47,560.98,4533.64],"rot":[-0.1904,5.2677,0]},{"pos":[3354.09,581.02,4540.07],"rot":[-0.1597,5.8726,0]},{"pos":[3333.22,587.76,4556.43],"rot":[0.2016,6.3777,0]},{"pos":[3322.68,581.54,4584.87],"rot":[0.6075,6.4877,0]},{"pos":[3325.28,581.34,4609.44],"rot":[0.3808,5.9078,0]},{"pos":[3330.42,587.8,4620.25],"rot":[-0.0728,5.6478,0]},{"pos":[3320.17,596.8,4632.42],"rot":[0.0504,4.8027,0]},{"pos":[3263.03,587.77,4651.49],"rot":[0.3303,3.7617,0]},{"pos":[3237.9,587.75,4641.23],"rot":[0.3304,2.9928,0]},{"pos":[3220.06,591.06,4633.11],"rot":[0.0616,3.577,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3219.35,527.81,4352.57],"rot":[0.322,4.3827,0]},{"pos":[3187.58,523.01,4353.61],"rot":[0.336,3.8127,0]},{"pos":[3172.9,522.86,4353.31],"rot":[0.364,3.4927,0]},{"pos":[3157.41,522.86,4337.52],"rot":[0.3136,3.1978,0]},{"pos":[3163.27,522.86,4325.05],"rot":[0.3052,3.1926,0]},{"pos":[3179.04,528.38,4303.79],"rot":[0.1876,3.4627,0]},{"pos":[3187.18,531,4278.17],"rot":[0.1652,2.2327,0]},{"pos":[3195.4,531.06,4264.54],"rot":[0.2156,1.7727,0]},{"pos":[3204.65,531.06,4252.12],"rot":[0.2268,1.5378,0]},{"pos":[3225.9,537.1,4254.21],"rot":[0.1932,1.8027,0]},{"pos":[3262.15,537.21,4248.78],"rot":[0.0952,1.9177,0]},{"pos":[3285.74,543.75,4249.46],"rot":[0.1036,2.2778,0]},{"pos":[3323.11,544.79,4246.44],"rot":[0.0924,2.3977,0]},{"pos":[3340.01,551.41,4235.42],"rot":[0.1148,2.6178,0]},{"pos":[3348.64,551.5,4212.53],"rot":[0.1904,3.1628,0]},{"pos":[3347.41,551.5,4192.83],"rot":[0.1288,3.4977,0]},{"pos":[3351.98,551.5,4178.4],"rot":[0.098,3.6527,0]},{"pos":[3357.18,551.28,4160.14],"rot":[0.1148,3.9427,0]},{"pos":[3351.93,560.09,4146.65],"rot":[-0.0028,3.9877,0]},{"pos":[3337.91,565.79,4131.4],"rot":[-0.0896,3.5627,0]},{"pos":[3329.4,573.65,4115.94],"rot":[-0.1036,3.1127,0]},{"pos":[3314.71,585.79,4097.99],"rot":[-0.1932,2.6127,0]},{"pos":[3308.03,592.38,4088.6],"rot":[-0.0308,2.2527,0]},{"pos":[3309.34,600.73,4075.68],"rot":[-0.1792,1.9478,0]},{"pos":[3312.83,608.46,4062.62],"rot":[-0.2464,1.5577,0]},{"pos":[3350.09,625.67,4046.97],"rot":[-0.4312,1.5977,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3776.23,554.14,3737.46],"rot":[0.14,2.0677,0]},{"pos":[3797.73,557.28,3735.15],"rot":[0.1064,2.4177,0]},{"pos":[3814.72,565.41,3726.34],"rot":[0.1456,2.5477,0]},{"pos":[3831.38,568.13,3710.05],"rot":[0.3192,2.6477,0]},{"pos":[3839.95,566.85,3696.15],"rot":[0.3332,2.1178,0]},{"pos":[3863.83,569.41,3680.4],"rot":[0.3136,1.6927,0]},{"pos":[3895.5,571.03,3677.89],"rot":[0.322,1.3278,0]},{"pos":[3912.77,570.81,3678.76],"rot":[0.2296,1.6427,0]},{"pos":[3932.34,577.31,3680.14],"rot":[0.2128,2.1676,0]},{"pos":[3953.6,577.44,3675.74],"rot":[0.2408,2.5977,0]},{"pos":[3967.74,577.44,3668.06],"rot":[0.2408,2.9527,0]},{"pos":[3976.19,585.3,3659.81],"rot":[0.2856,3.1777,0]},{"pos":[3984.25,580.29,3631.99],"rot":[0.2968,3.4377,0]},{"pos":[3981.04,579.57,3614.45],"rot":[0.3668,3.6627,0]},{"pos":[3965.19,578.35,3606.43],"rot":[0.3948,3.3877,0]},{"pos":[3950.35,578.34,3593.96],"rot":[0.4032,3.2227,0]},{"pos":[3936.51,572.25,3580.57],"rot":[0.4564,3.3477,0]},{"pos":[3938.36,571.97,3562.39],"rot":[0.4424,3.6827,0]},{"pos":[3950.58,570.02,3538.18],"rot":[0.3416,3.8277,0]},{"pos":[3954.85,570.69,3518.06],"rot":[0.2492,3.8977,0]},{"pos":[3955.95,570.69,3494.52],"rot":[0.126,3.3978,0]},{"pos":[3945.66,577.81,3478.19],"rot":[0.084,3.1877,0]},{"pos":[3943.21,582.75,3456.01],"rot":[0.1232,2.9277,0]},{"pos":[3944.51,589.77,3433.88],"rot":[0.2324,3.0927,0]},{"pos":[3946.28,589.93,3415.8],"rot":[0.3556,3.3077,0]},{"pos":[3956.23,589.94,3402.28],"rot":[0.3836,3.5927,0]},{"pos":[3959.01,589.94,3381.17],"rot":[0.3808,3.7777,0]},{"pos":[3956.51,589.94,3357.74],"rot":[0.3668,4.0127,0]},{"pos":[3945.57,585.21,3341.09],"rot":[0.322,4.1977,0]},{"pos":[3931.94,584.96,3333.62],"rot":[0.3052,4.4127,0]},{"pos":[3918.35,584.96,3330.6],"rot":[0.2716,4.5527,0]},{"pos":[3901.56,584.96,3326.98],"rot":[-0.0196,4.7627,0]},{"pos":[3880.62,584.96,3326.24],"rot":[-0.2212,5.3627,0]},{"pos":[3853.37,590.68,3329.91],"rot":[-0.2492,5.8527,0]},{"pos":[3835.51,597.98,3338.68],"rot":[-0.2912,6.1078,0]},{"pos":[3810.65,603.3,3352.39],"rot":[-0.3304,6.3327,0]},{"pos":[3799.06,611.43,3362.56],"rot":[-0.3444,6.3177,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[4255.85,529.49,3296.64],"rot":[0.1736,0.5045,0]},{"pos":[4284.76,529.6,3313.01],"rot":[0.1232,0.3096,0]},{"pos":[4290.23,529.6,3339.99],"rot":[0.1092,0.6646,0]},{"pos":[4291.89,529.6,3357.74],"rot":[0.1288,0.9095,0]},{"pos":[4291.48,529.6,3369.59],"rot":[0.112,0.9795,0]},{"pos":[4294.16,529.6,3385.82],"rot":[0.1316,1.1446,0]},{"pos":[4297.54,535.25,3397.76],"rot":[0.1372,1.2195,0]},{"pos":[4309.28,535.66,3409.38],"rot":[0.1848,1.2896,0]},{"pos":[4319.99,541,3420.15],"rot":[0.224,1.4046,0]},{"pos":[4335.9,547.21,3423.81],"rot":[0.1736,1.0646,0]},{"pos":[4350.22,547.62,3421.8],"rot":[0.2044,0.8696,0]},{"pos":[4363.99,547.63,3421.28],"rot":[0.3332,0.6496,0]},{"pos":[4390.18,542.88,3426.67],"rot":[0.3248,0.3546,0]},{"pos":[4400.02,542.53,3439.17],"rot":[0.2744,0.1646,0]},{"pos":[4408.47,542.52,3456.37],"rot":[0.294,0.3445,0]},{"pos":[4405.96,542.52,3476.37],"rot":[0.2968,0.6245,0]},{"pos":[4405.65,542.52,3499.03],"rot":[0.2576,0.7446,0]},{"pos":[4407.98,536.37,3521.05],"rot":[0.1932,1.1345,0]},{"pos":[4417.31,530.82,3539.8],"rot":[0.1652,1.2996,0]},{"pos":[4432.06,530.57,3552.1],"rot":[0.084,1.1746,0]},{"pos":[4453.3,530.56,3557.17],"rot":[0.1148,0.4796,0]},{"pos":[4474.4,530.56,3560.56],"rot":[0.1651,0.5446,0]},{"pos":[4490.33,530.56,3561.26],"rot":[0.21,0.8645,0]},{"pos":[4510.08,530.56,3557.27],"rot":[0.1792,1.0395,0]},{"pos":[4526.62,530.56,3556.96],"rot":[0.168,1.3945,0]},{"pos":[4545.46,530.56,3565.38],"rot":[0.1596,1.6496,0]},{"pos":[4561.16,536.78,3572.73],"rot":[0.0868,1.7996,0]},{"pos":[4584.82,543.96,3578.03],"rot":[-0.1148,1.4646,0]},{"pos":[4601.26,549.85,3586.26],"rot":[0.0672,0.8446,0]},{"pos":[4616.64,554.98,3587.81],"rot":[0.1512,0.1846,0]},{"pos":[4630.17,560.83,3598.94],"rot":[0.1036,-0.2004,0]},{"pos":[4639.34,568.53,3616.35],"rot":[-0.0056,-0.5204,0]},{"pos":[4646.15,575.92,3634.21],"rot":[-0.1092,-0.7054,0]},{"pos":[4642.13,584.91,3672.89],"rot":[-0.1176,-1.2304,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[4592.86,528.3,4007.23],"rot":[0.1624,0.5796,0]},{"pos":[4616.01,529.87,4007.06],"rot":[0.1652,0.4346,0]},{"pos":[4622.17,529.68,4020.82],"rot":[0.154,0.5645,0]},{"pos":[4630.7,529.68,4040.27],"rot":[0.14,0.8896,0]},{"pos":[4630.77,529.68,4051.13],"rot":[0.1708,0.9845,0]},{"pos":[4633.37,534,4061.99],"rot":[0.1904,1.1395,0]},{"pos":[4638.18,534.44,4077.39],"rot":[0.28,1.1795,0]},{"pos":[4657.36,534.45,4084.33],"rot":[0.3416,1.0896,0]},{"pos":[4681.4,534.45,4092.59],"rot":[0.322,0.9895,0]},{"pos":[4699.7,530.67,4096.48],"rot":[0.2716,0.5496,0]},{"pos":[4711.7,530.49,4100.95],"rot":[0.196,0.2646,0]},{"pos":[4724.41,525.8,4109.53],"rot":[0.1092,0.0396,0]},{"pos":[4739.81,527.93,4122.65],"rot":[0.0224,-0.3304,0]},{"pos":[4747.09,532.96,4137.56],"rot":[0.0336,-0.4404,0]},{"pos":[4746.71,540.07,4152.73],"rot":[-0.0784,-0.4955,0]},{"pos":[4732.24,547.18,4163.92],"rot":[0.0083,-0.2204,0]},{"pos":[4717.92,549.3,4183.95],"rot":[0.1176,-0.0705,0]},{"pos":[4706.4,550.23,4197.96],"rot":[-0.0056,0.0646,0]},{"pos":[4698.55,557.84,4210.01],"rot":[0.0224,0.0296,0]},{"pos":[4703.18,557.85,4224.68],"rot":[0.0224,-0.3654,0]},{"pos":[4704.64,564.63,4240.17],"rot":[-0.0252,-0.8104,0]},{"pos":[4694.81,571.72,4256.28],"rot":[-0.0756,-0.5755,0]},{"pos":[4680.76,579.1,4269.02],"rot":[-0.1876,0.0246,0]},{"pos":[4684.56,591.33,4286.44],"rot":[-0.3136,0.3245,0]},{"pos":[4682.8,600.96,4300.63],"rot":[-0.3472,0.4896,0]},{"pos":[4678.29,607.54,4311.68],"rot":[-0.5096,0.4196,0]},{"pos":[4675.53,619.26,4322.04],"rot":[-0.6496,0.0646,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[4683.86,526.77,4525.72],"rot":[0.1652,1.0496,0]},{"pos":[4702.61,533.59,4528.97],"rot":[0.1876,0.6596,0]},{"pos":[4720.9,529.49,4534.06],"rot":[0.1484,0.4696,0]},{"pos":[4727.7,528.84,4547.86],"rot":[0.1456,0.5744,0]},{"pos":[4729.09,528.83,4559.52],"rot":[0.1959,0.7197,0]},{"pos":[4736.09,528.83,4568.55],"rot":[0.168,0.6248,0]},{"pos":[4748.65,528.83,4576.81],"rot":[0.1456,0.1349,0]},{"pos":[4755.35,530.01,4591.07],"rot":[0.154,-0.1504,0]},{"pos":[4752.14,535.44,4600.27],"rot":[0.1008,-0.0459,0]},{"pos":[4749.55,536.04,4619.41],"rot":[0.1315,-0.4401,0]},{"pos":[4749.46,541.86,4635],"rot":[0.2041,-1.034,0]},{"pos":[4739.73,537.93,4651.52],"rot":[0.1932,-1.4851,0]},{"pos":[4719.96,537.5,4658.36],"rot":[0.154,-2.0205,0]},{"pos":[4704.17,543.23,4652.43],"rot":[0.1148,-1.4406,0]},{"pos":[4680.61,545.41,4640.51],"rot":[0.0476,-0.9655,0]},{"pos":[4665.08,550.8,4637],"rot":[0.0336,-1.0303,0]},{"pos":[4647.02,557.22,4634.53],"rot":[-0.0084,-0.9654,0]},{"pos":[4624.2,564,4634.66],"rot":[-0.0112,-0.7606,0]},{"pos":[4608.54,570.13,4638.32],"rot":[0,-0.5205,0]},{"pos":[4587.79,575.61,4647.3],"rot":[0.1204,-0.3504,0]},{"pos":[4576.04,580.65,4656.01],"rot":[-0.0811,-0.0855,0]},{"pos":[4570.24,584.9,4665.83],"rot":[-0.1708,-0.2104,0]},{"pos":[4567.84,592.49,4680.01],"rot":[-0.2016,-0.6354,0]},{"pos":[4567.96,598.44,4690],"rot":[-0.266,-1.0153,0]},{"pos":[4551.86,604.03,4710.77],"rot":[-0.2884,-1.1803,0]},{"pos":[4543.42,611.48,4720.26],"rot":[-0.2688,-1.4704,0]},{"pos":[4523.86,629.37,4730.94],"rot":[-0.224,-1.7154,0]},{"pos":[4507.8,637.74,4724.9],"rot":[-0.1456,-1.5955,0]},{"pos":[4492.24,657.96,4714.02],"rot":[-0.1792,-1.4454,0]},{"pos":[4471.06,677.82,4706.08],"rot":[-0.0252,-1.3354,0]},{"pos":[4454.76,692.12,4715.14],"rot":[0.1652,-1.7604,0]},{"pos":[4439.18,706.77,4723.8],"rot":[0.1932,-2.0104,0]},{"pos":[4418.72,716.96,4737.78],"rot":[0.434,-2.0804,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[4636.2,548.15,5048.03],"rot":[0.3108,0.6846,0]},{"pos":[4648.15,549.54,5061.6],"rot":[0.2856,0.9646,0]},{"pos":[4671.29,549.26,5061.53],"rot":[0.1316,1.0545,0]},{"pos":[4688.83,555.99,5066.97],"rot":[0.0336,1.1745,0]},{"pos":[4712.17,556.56,5073.94],"rot":[0.0644,1.6145,0]},{"pos":[4723.4,556.57,5085.84],"rot":[0.0057,1.5143,0]},{"pos":[4744.99,556.57,5090.8],"rot":[-0.0028,1.9895,0]},{"pos":[4762.39,556.57,5088.63],"rot":[-0.0644,2.3145,0]},{"pos":[4770.36,564.31,5075.89],"rot":[-0.0897,2.4396,0]},{"pos":[4781.1,564.94,5064.96],"rot":[-0.0364,1.8757,0]},{"pos":[4788.33,564.95,5054.14],"rot":[-0.0588,1.6796,0]},{"pos":[4799.96,564.96,5039.74],"rot":[0.0308,1.4696,0]},{"pos":[4810.24,570.42,5033.77],"rot":[0.0308,1.3247,0]},{"pos":[4828.58,573.64,5028.29],"rot":[-0.0196,1.2346,0]},{"pos":[4842.37,577.87,5027.12],"rot":[-0.0056,1.4394,0]},{"pos":[4861.08,578.39,5029.54],"rot":[-0.0251,1.4053,0]},{"pos":[4877.68,583.14,5030.09],"rot":[-0.0028,1.5845,0]},{"pos":[4894.05,583.33,5034.51],"rot":[-0.042,1.7595,0]},{"pos":[4913.52,587.15,5035.3],"rot":[-0.0448,2.0646,0]},{"pos":[4925.45,585.6,5032.11],"rot":[0.0504,2.0496,0]},{"pos":[4932.79,589.64,5035.34],"rot":[0.0504,2.0496,0]},{"pos":[4941.9,596.19,5032.79],"rot":[0.0588,1.82,0]},{"pos":[4953.58,599.73,5023.87],"rot":[0.0532,1.6046,0]},{"pos":[4961.83,605.35,5016.6],"rot":[0.0532,1.6046,0]},{"pos":[4981.16,607.97,5006.94],"rot":[0.2296,1.8546,0]},{"pos":[4988.03,607.97,4994.77],"rot":[0.1932,1.5747,0]},{"pos":[5001.55,609.78,4989.1],"rot":[0.0756,1.7246,0]},{"pos":[5013.81,609.8,4992.44],"rot":[0.1232,1.8696,0]},{"pos":[5027.03,606.51,4994.29],"rot":[0.1428,2.1645,0]},{"pos":[5040.76,600.14,4996.69],"rot":[0.126,2.3046,0]},{"pos":[5062.15,598.34,4989.27],"rot":[0.14,2.4796,0]},{"pos":[5071.78,597.75,4985.5],"rot":[0.0308,2.6795,0]},{"pos":[5083.92,593.04,4974.8],"rot":[-0.0084,2.5746,0]},{"pos":[5088.66,593.5,4950.2],"rot":[0.098,1.7796,0]},{"pos":[5094.46,595.91,4948.93],"rot":[-0.112,2.0245,0]},{"pos":[5099.81,599.42,4946.34],"rot":[-0.2212,2.1896,0]},{"pos":[5106.3,596.22,4941.53],"rot":[-0.2716,2.2096,0]},{"pos":[5113,589.89,4936.99],"rot":[-0.0644,2.1496,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3212.59,523.83,1328.75],"rot":[0.0336,1.2718,0]},{"pos":[3230.43,523.83,1327.79],"rot":[-0.1568,0.3868,0]},{"pos":[3238.13,523.83,1336.25],"rot":[0.1764,-0.1032,0]},{"pos":[3240.11,520.94,1367.04],"rot":[0.3416,-0.4532,0]},{"pos":[3220.49,520.91,1388.49],"rot":[0.364,-0.5082,0]},{"pos":[3206.4,525.7,1395.28],"rot":[0.1848,0.1368,0]},{"pos":[3191.91,525.71,1412.75],"rot":[0.126,0.7568,0]},{"pos":[3204,528.21,1439.43],"rot":[0.1232,0.7268,0]},{"pos":[3214.55,528.26,1441.43],"rot":[-0.0784,0.3268,0]},{"pos":[3224.55,528.26,1450.51],"rot":[-0.1232,-0.0882,0]},{"pos":[3231.44,531.35,1465.62],"rot":[0.1148,-0.1632,0]},{"pos":[3229.18,531.43,1495],"rot":[0.3248,-0.0132,0]},{"pos":[3225.61,526.82,1527.07],"rot":[0.308,0.0368,0]},{"pos":[3228.39,522.65,1544.75],"rot":[0.3388,0.1368,0]},{"pos":[3225.19,524.28,1564.31],"rot":[0.0084,0.5918,0]},{"pos":[3216.54,524.29,1578.11],"rot":[-0.098,0.6818,0]},{"pos":[3230.02,519.5,1617.6],"rot":[0.084,-0.3982,0]},{"pos":[3216.57,519.46,1663.26],"rot":[0.2296,-0.5982,0]},{"pos":[3191.62,519.46,1692.29],"rot":[0.1148,-0.2132,0]},{"pos":[3179.18,519.46,1703.39],"rot":[-0.0868,0.6318,0]},{"pos":[3173.62,519.87,1712.19],"rot":[-0.0364,0.8018,0]},{"pos":[3172.74,519.84,1728.56],"rot":[-0.056,1.3368,0]},{"pos":[3190.98,522.09,1755.97],"rot":[0.0448,1.1767,0]},{"pos":[3214.72,527.34,1777.17],"rot":[0.1428,1.6468,0]},{"pos":[3251.52,531.55,1779.64],"rot":[-0.0308,3.3018,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3131.02,516.6,2187.73],"rot":[0.2436,4.4918,0]},{"pos":[3117.36,515.12,2194.29],"rot":[0.2044,4.0768,0]},{"pos":[3097.3,511.15,2189.22],"rot":[0.2436,3.7668,0]},{"pos":[3074.36,511.13,2174.58],"rot":[0.2156,3.9668,0]},{"pos":[3041.74,511.51,2144.76],"rot":[0.2884,3.8468,0]},{"pos":[3024.85,511.44,2097.07],"rot":[0.1904,4.4218,0]},{"pos":[3008.75,511.44,2077.43],"rot":[0.1876,4.7268,0]},{"pos":[2990.93,506.52,2066.58],"rot":[0.1288,4.7768,0]},{"pos":[2968.64,506.49,2055.61],"rot":[-0.0672,4.9767,0]},{"pos":[2932.83,506.49,2048.52],"rot":[-0.1764,5.2568,0]},{"pos":[2900.72,509.46,2067.22],"rot":[0.0112,5.1468,0]},{"pos":[2835.29,523.3,2095.79],"rot":[-0.0896,5.0218,0]},{"pos":[2787.89,539.29,2111.01],"rot":[0.0728,4.4368,0]},{"pos":[2770.85,542.81,2109.37],"rot":[0.3752,3.6818,0]},{"pos":[2745.08,545.24,2102.17],"rot":[0.3948,3.3518,0]},{"pos":[2724.53,530.78,2065.62],"rot":[0.364,3.4668,0]},{"pos":[2717.16,523.77,2035.98],"rot":[0.3164,4.0168,0]},{"pos":[2691.34,520.1,2020.17],"rot":[0.2772,4.8668,0]},{"pos":[2669.36,513.73,2012.27],"rot":[0.0924,5.2118,0]},{"pos":[2650.42,513.72,2008.73],"rot":[-0.0504,5.4968,0]},{"pos":[2621.53,513.72,2014.53],"rot":[-0.112,5.7018,0]},{"pos":[2594.07,520.65,2021.73],"rot":[-0.0308,5.8468,0]},{"pos":[2578.77,526.98,2029.39],"rot":[-0.0952,6.1368,0]},{"pos":[2572.23,531.94,2044.46],"rot":[-0.14,6.3368,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[2963.9,511.03,2445.62],"rot":[0.1904,4.4718,0]},{"pos":[2946.84,516.09,2427.64],"rot":[-0.056,4.8718,0]},{"pos":[2925.1,520.72,2416.94],"rot":[-0.0784,5.1618,0]},{"pos":[2890.76,520.72,2420.57],"rot":[0.1512,5.2018,0]},{"pos":[2837.55,521.69,2440.22],"rot":[0.3248,5.8817,0]},{"pos":[2808.07,516.74,2465.44],"rot":[0.0756,6.5618,0]},{"pos":[2801.44,517.62,2487.67],"rot":[-0.0784,7.0268,0]},{"pos":[2804.46,517.59,2507.28],"rot":[-0.1736,7.1968,0]},{"pos":[2809.77,517.59,2517.37],"rot":[-0.2072,6.8968,0]},{"pos":[2824.7,517.59,2525.15],"rot":[-0.3164,6.1968,0]},{"pos":[2833.7,517.59,2538.77],"rot":[0.042,6.0518,0]},{"pos":[2839.95,517.59,2560.8],"rot":[0.1988,5.972,0]},{"pos":[2838.1,517.59,2582.6],"rot":[0.2744,5.8518,0]},{"pos":[2827.62,517.59,2602.86],"rot":[0.2548,5.7967,0]},{"pos":[2809.85,517.59,2627.93],"rot":[0.1456,6.1718,0]},{"pos":[2806.51,517.59,2654.72],"rot":[0.0392,6.4168,0]},{"pos":[2793.04,523.48,2689.31],"rot":[-0.3052,6.7268,0]},{"pos":[2782.36,535.06,2718.42],"rot":[-0.3444,6.9017,0]},{"pos":[2783.2,556.87,2767.88],"rot":[-0.2856,7.0868,0]},{"pos":[2786.19,576.31,2791.23],"rot":[-0.1624,7.2018,0]},{"pos":[2797.2,612.44,2832.51],"rot":[0.0027,7.3167,0]},{"pos":[2804.8,639.42,2863.44],"rot":[0.07,7.3017,0]},{"pos":[2816.88,663.79,2898.65],"rot":[0.1008,7.3568,0]},{"pos":[2832.78,674.68,2936.7],"rot":[0.1092,7.4366,0]},{"pos":[2850.86,684.01,2970.27],"rot":[0.1176,7.4618,0]},{"pos":[2908.68,693.75,3019.03],"rot":[-0.0755,7.3668,0]},{"pos":[2946.63,709.17,3031.05],"rot":[-0.0308,7.0519,0]},{"pos":[2972.17,719.17,3043.26],"rot":[0.0644,6.6718,0]},{"pos":[2998.79,725.78,3058.53],"rot":[0.2212,6.6018,0]},{"pos":[3023.96,722.78,3076.17],"rot":[0.3584,6.6865,0]},{"pos":[3041.8,722.35,3091.24],"rot":[0.2968,6.2018,0]},{"pos":[3048.28,722.35,3095.75],"rot":[-0.0224,6.2568,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3153.8,674.63,3097.84],"rot":[0.0616,5.9568,0]},{"pos":[3149.64,677.6,3119.57],"rot":[0.098,5.8668,0]},{"pos":[3137.23,677.82,3144.94],"rot":[0.1176,5.7968,0]},{"pos":[3118.61,677.82,3167.56],"rot":[0.1288,5.9967,0]},{"pos":[3104.15,680.85,3178.74],"rot":[0.0868,6.2068,0]},{"pos":[3088.71,681.38,3194.14],"rot":[0.0812,6.3968,0]},{"pos":[3081.12,681.38,3212.3],"rot":[0.14,6.3168,0]},{"pos":[3082.22,681.38,3232],"rot":[0.1708,6.2718,0]},{"pos":[3084.7,681.38,3257.31],"rot":[0.1764,6.2568,0]},{"pos":[3084.18,681.38,3288.43],"rot":[0.0504,6.2618,0]},{"pos":[3079,684.83,3297.54],"rot":[-0.0588,6.3718,0]},{"pos":[3079.44,684.87,3308.99],"rot":[-0.1008,6.2718,0]},{"pos":[3077.67,684.87,3353.22],"rot":[-0.0784,6.2518,0]},{"pos":[3073.43,686.62,3396.12],"rot":[-0.0392,6.2518,0]},{"pos":[3069.92,686.67,3431.21],"rot":[-0.0952,6.2718,0]},{"pos":[3069.57,677.85,3464.17],"rot":[-0.098,6.2768,0]},{"pos":[3067.5,672.89,3489.43],"rot":[-0.1232,6.3618,0]},{"pos":[3059.71,669.73,3495.15],"rot":[0.0728,6.6168,0]},{"pos":[3055.16,669.85,3501.73],"rot":[-0.028,6.5118,0]},{"pos":[3051.03,669.85,3503.49],"rot":[-0.1092,6.6318,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3171.69,620.75,3284.09],"rot":[0.1736,2.5418,0]},{"pos":[3180.52,622.25,3259.75],"rot":[0.0224,2.1718,0]},{"pos":[3194.23,622.21,3229.16],"rot":[-0.0699,2.5767,0]},{"pos":[3209.65,622.86,3206.48],"rot":[-0.1372,3.1067,0]},{"pos":[3229.89,628.85,3161.14],"rot":[-0.154,3.2468,0]},{"pos":[3227.77,633.53,3132.36],"rot":[-0.0056,3.1918,0]},{"pos":[3223.85,640.26,3089.64],"rot":[0.1288,3.0468,0]},{"pos":[3222.31,644.8,3063.94],"rot":[0.1652,2.8418,0]},{"pos":[3217.93,647.56,3027.81],"rot":[0.2128,2.6768,0]},{"pos":[3226.28,647.71,3014.4],"rot":[0.2884,2.7517,0]},{"pos":[3238.85,647.71,3005.64],"rot":[0.4004,2.8968,0]},{"pos":[3251.89,645.2,2994.22],"rot":[0.392,3.0217,0]},{"pos":[3264.68,630.27,2985.68],"rot":[0.3668,3.3168,0]},{"pos":[3280.89,618.74,2973.09],"rot":[0.3024,3.4318,0]},{"pos":[3291.65,611.41,2957.65],"rot":[0.2632,3.5268,0]},{"pos":[3293.2,596.03,2926.39],"rot":[0.3612,3.6268,0]},{"pos":[3285.1,595.84,2905.17],"rot":[0.4004,3.4368,0]},{"pos":[3273.21,592.09,2880.85],"rot":[0.518,3.0718,0]},{"pos":[3252.15,576.94,2836.67],"rot":[0.3948,2.8218,0]},{"pos":[3246.78,570.83,2808.76],"rot":[0.2156,2.6068,0]},{"pos":[3249.87,564.97,2783.78],"rot":[0.0392,2.4018,0]},{"pos":[3261.57,564.89,2755.23],"rot":[0.0028,2.1268,0]},{"pos":[3278.58,564.89,2741.92],"rot":[-0.0588,2.0318,0]},{"pos":[3300.56,564.89,2738.19],"rot":[-0.1092,2.2217,0]},{"pos":[3320.25,564.89,2733.19],"rot":[-0.1904,2.3268,0]},{"pos":[3345.27,564.89,2735.27],"rot":[-0.2464,2.6167,0]},{"pos":[3367.35,566.68,2724.85],"rot":[-0.2688,2.9067,0]},{"pos":[3381.19,571.25,2713.25],"rot":[-0.2744,3.1568,0]},{"pos":[3398.83,578.61,2668.01],"rot":[-0.0868,3.2268,0]},{"pos":[3394.95,569.32,2642.37],"rot":[0.2295,3.4716,0]},{"pos":[3383.49,562.65,2632.11],"rot":[0.4479,4.0115,0]},{"pos":[3365.82,562.24,2615.52],"rot":[0.0392,4.5568,0]},{"pos":[3355.11,568.62,2611.98],"rot":[-0.3472,5.1868,0]},{"pos":[3341.25,587.54,2622.05],"rot":[-0.4368,5.4718,0]},{"pos":[3325.36,606.44,2635.8],"rot":[-0.3108,4.7618,0]},{"pos":[3387.22,562.44,2612.89],"rot":[0.1344,2.9068,0]},{"pos":[3397.8,561.55,2593.01],"rot":[0.2184,3.5016,0]},{"pos":[3398.79,557.92,2569.17],"rot":[0.4228,3.5868,0]},{"pos":[3390.73,554.26,2547.45],"rot":[0.4508,3.6018,0]},{"pos":[3378.05,543.5,2522.46],"rot":[0.4452,3.5868,0]},{"pos":[3358.54,532.53,2500.2],"rot":[0.0616,2.9868,0]},{"pos":[3351.31,532.53,2498.11],"rot":[-0.1596,2.7168,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3646.97,513.08,2552.39],"rot":[0.1792,1.2018,0]},{"pos":[3667.42,513.08,2546.99],"rot":[0.0252,1.0118,0]},{"pos":[3690.44,519.21,2553.32],"rot":[0.0196,1.2168,0]},{"pos":[3722,519.26,2568.04],"rot":[0.0476,1.3818,0]},{"pos":[3754.34,519.26,2570.24],"rot":[0.07,1.4568,0]},{"pos":[3781.3,519.26,2572.62],"rot":[0.084,1.6417,0]},{"pos":[3792.06,519.26,2579.26],"rot":[0.0252,1.8418,0]},{"pos":[3805.92,518.04,2585.6],"rot":[-0.07,2.1868,0]},{"pos":[3824.11,518.62,2588.78],"rot":[-0.0224,2.2368,0]},{"pos":[3843.25,518.72,2581.91],"rot":[0.1428,2.1918,0]},{"pos":[3861.66,518.72,2566.59],"rot":[0.1848,1.9368,0]},{"pos":[3904.61,518.72,2537.27],"rot":[0.154,1.8468,0]},{"pos":[3926,524.4,2531.56],"rot":[0.1372,1.5518,0]},{"pos":[3960.01,524.52,2534.8],"rot":[0.1848,1.6817,0]},{"pos":[3984.36,524.52,2532.32],"rot":[0.2324,2.0017,0]},{"pos":[4004.94,522.54,2526.53],"rot":[0.1176,2.3667,0]},{"pos":[4021.36,519.28,2520.36],"rot":[0.0532,2.6317,0]},{"pos":[4035.59,519.19,2512.14],"rot":[-0.0112,2.8117,0]},{"pos":[4047.49,513.75,2500.86],"rot":[-0.0252,3.0468,0]},{"pos":[4059.09,511.96,2469.48],"rot":[0.112,2.9768,0]},{"pos":[4065.02,508.87,2444.19],"rot":[0.0029,3.4266,0]},{"pos":[4072.48,508.75,2410.82],"rot":[-0.1036,3.4418,0]},{"pos":[4078.4,513.76,2395.23],"rot":[-0.196,3.5118,0]},{"pos":[4086.11,519.59,2367.17],"rot":[-0.2436,3.6718,0]},{"pos":[4092.13,524.56,2307.06],"rot":[-0.2716,3.7668,0]},{"pos":[4077.44,529.24,2279.51],"rot":[-0.3248,3.7668,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3721.41,504.6,2245.11],"rot":[0.0616,2.8318,0]},{"pos":[3734.03,504.33,2220.51],"rot":[0.0532,2.9717,0]},{"pos":[3741.55,504.33,2210.57],"rot":[0.0616,3.0718,0]},{"pos":[3744.02,504.33,2198.42],"rot":[-0.0084,3.1118,0]},{"pos":[3745.1,504.33,2187.3],"rot":[-0.084,2.9618,0]},{"pos":[3747.92,506.94,2175.6],"rot":[-0.112,2.8218,0]},{"pos":[3751.63,508.74,2163.71],"rot":[0.0756,3.0267,0]},{"pos":[3760.35,508.61,2120.78],"rot":[0.1008,3.1117,0]},{"pos":[3754.95,508.61,2087.83],"rot":[0.1568,3.1618,0]},{"pos":[3739.35,514.61,2049.87],"rot":[0.1428,2.9518,0]},{"pos":[3734.93,514.65,2034.24],"rot":[0.1092,2.5018,0]},{"pos":[3740.96,519.91,2013.21],"rot":[0.1316,2.2668,0]},{"pos":[3745.76,519.93,1991.89],"rot":[0.0196,2.3768,0]},{"pos":[3744.76,519.93,1983.93],"rot":[-0.1764,2.4718,0]},{"pos":[3750.47,524.25,1964.61],"rot":[-0.1848,2.8118,0]},{"pos":[3770.02,529.59,1934.24],"rot":[-0.0532,2.8268,0]},{"pos":[3775.29,535.54,1917.08],"rot":[0.028,2.8468,0]},{"pos":[3784.72,542.03,1886.77],"rot":[0.0868,2.8318,0]},{"pos":[3795.24,547.23,1857.31],"rot":[0.1204,2.6968,0]},{"pos":[3811.37,554.12,1836.62],"rot":[0.1988,2.8268,0]},{"pos":[3827.97,554.19,1825.2],"rot":[0.1988,2.9668,0]},{"pos":[3854.14,557.88,1785.34],"rot":[0.1316,2.785,0]},{"pos":[3887.9,555.01,1750.7],"rot":[0.1932,2.9999,0]},{"pos":[3925.42,530.63,1711.48],"rot":[0.1456,3.1499,0]},{"pos":[3940.41,520.83,1682.48],"rot":[0.1484,3.7697,0]},{"pos":[3946.45,515.18,1653.95],"rot":[0.0952,4.2699,0]},{"pos":[3932.96,515.12,1634.24],"rot":[0.028,4.9399,0]},{"pos":[3916.39,515.12,1626.47],"rot":[-0.0924,5.4199,0]},{"pos":[3902.96,521.32,1627.06],"rot":[-0.126,5.745,0]},{"pos":[3892.95,521.33,1630.89],"rot":[-0.1652,5.9849,0]},{"pos":[3877.03,521.33,1643.24],"rot":[-0.21,6.285,0]},{"pos":[3871.43,521.33,1650.26],"rot":[-0.3864,6.3,0]},{"pos":[3868.64,528.75,1660.05],"rot":[-0.4396,6.295,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3553.55,557.47,1476.65],"rot":[0.336,1.665,0]},{"pos":[3565.23,551.88,1477.11],"rot":[0.4452,1.9699,0]},{"pos":[3576.93,545.69,1473.41],"rot":[0.5376,2.2,0]},{"pos":[3591.89,543.4,1465.47],"rot":[0.6748,2.2949,0]},{"pos":[3612.24,523.39,1444.02],"rot":[0.6832,2.5099,0]},{"pos":[3632.19,514.92,1404.77],"rot":[0.2352,2.76,0]},{"pos":[3643.52,514.91,1367.23],"rot":[0.07,2.97,0]},{"pos":[3663.38,521.58,1352.46],"rot":[0.0532,2.95,0]},{"pos":[3678.7,528.12,1335.77],"rot":[0.1092,2.9849,0]},{"pos":[3685.19,528.12,1311.39],"rot":[0.0476,3.5049,0]},{"pos":[3688.9,531.07,1293.74],"rot":[-0.028,3.5549,0]},{"pos":[3694.8,531.15,1278.53],"rot":[-0.1651,3.6849,0]},{"pos":[3690.51,536.06,1251.75],"rot":[-0.28,3.705,0]},{"pos":[3666.62,536.07,1216.69],"rot":[-0.0168,3.675,0]},{"pos":[3652.77,533.81,1201.67],"rot":[0.182,3.4602,0]},{"pos":[3633.03,530.82,1184.62],"rot":[0.2856,3.3252,0]},{"pos":[3618.29,527.02,1165.25],"rot":[0.322,3.215,0]},{"pos":[3605.22,526.98,1136.74],"rot":[0.3528,3.14,0]},{"pos":[3598.62,526.98,1092.94],"rot":[0.4844,3.215,0]},{"pos":[3597.4,526.98,1063.58],"rot":[0.4928,3.3349,0]},{"pos":[3600.6,520.84,1032.15],"rot":[0.2857,3.6646,0]},{"pos":[3597.44,520.66,1001.62],"rot":[0.1848,3.9199,0]},{"pos":[3595.15,520.66,979.86],"rot":[0.0448,4.0949,0]},{"pos":[3590.99,516.43,957.99],"rot":[-0.0952,4.3747,0]},{"pos":[3580.36,512.85,938.84],"rot":[-0.1595,4.5747,0]},{"pos":[3565.86,516.67,922.1],"rot":[-0.1456,4.925,0]},{"pos":[3534.43,516.68,908.74],"rot":[0.0055,5.4246,0]},{"pos":[3511.74,516.68,907.97],"rot":[0.1484,5.43,0]},{"pos":[3485.72,516.68,919.43],"rot":[0.2156,5.41,0]},{"pos":[3451,516.68,950.97],"rot":[0.1988,4.895,0]},{"pos":[3402.32,516.68,971.97],"rot":[0.1484,4.455,0]},{"pos":[3367.06,516.68,967.79],"rot":[0.1512,4.4399,0]},{"pos":[3326.19,516.68,953.55],"rot":[0.1568,4.5648,0]},{"pos":[3287.83,516.68,935.2],"rot":[0.0953,5.0098,0]},{"pos":[3244.08,516.68,948.14],"rot":[-0.0448,5.7399,0]},{"pos":[3231.03,522.87,976.91],"rot":[-0.0616,6.0499,0]},{"pos":[3208.5,522.91,1012.01],"rot":[-0.1511,6.3547,0]},{"pos":[3200.05,522.91,1027.52],"rot":[-0.2296,6.4199,0]},{"pos":[3195.15,527.18,1042.22],"rot":[-0.28,6.4999,0]},{"pos":[3189.82,531.11,1055.34],"rot":[-0.3136,6.5499,0]},{"pos":[3186.74,542.41,1070.14],"rot":[-0.3248,6.5999,0]},{"pos":[3184.47,542.82,1083.81],"rot":[-0.3388,6.7349,0]},{"pos":[3200.72,542.68,1116.35],"rot":[-0.2436,6.81,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[2778.53,516.9,1486.83],"rot":[0.1344,2.0268,0]},{"pos":[2788.81,516.9,1475.12],"rot":[0.1204,1.8918,0]},{"pos":[2802.43,520.66,1464.47],"rot":[-0.0252,1.5268,0]},{"pos":[2829.17,520.92,1465.2],"rot":[0.0084,1.6518,0]},{"pos":[2847.89,520.92,1467.33],"rot":[0.0728,2.1316,0]},{"pos":[2863.47,520.92,1469.06],"rot":[0.098,2.3667,0]},{"pos":[2878.04,520.92,1477.24],"rot":[0.0644,2.7715,0]},{"pos":[2896.38,520.92,1481.86],"rot":[0.0588,3.0367,0]},{"pos":[2913.43,525.62,1473.9],"rot":[-0.0028,2.8168,0]},{"pos":[2923.6,530.62,1461.94],"rot":[-0.0168,2.4968,0]},{"pos":[2934.58,530.85,1447.04],"rot":[0.0445,2.2918,0]},{"pos":[2954.02,530.85,1427.25],"rot":[0.0672,2.0468,0]},{"pos":[2977.32,534.71,1416.8],"rot":[0.0504,1.8118,0]},{"pos":[3002.21,539.7,1411.95],"rot":[0.0589,1.927,0]},{"pos":[3017.54,546.65,1404.48],"rot":[-0.0168,1.3068,0]},{"pos":[3035.57,556.08,1404.08],"rot":[-0.1372,0.7669,0]},{"pos":[3049.58,563.05,1405.02],"rot":[-0.126,0.4721,0]},{"pos":[3064.47,568.11,1412.71],"rot":[-0.056,0.2768,0]},{"pos":[3071.17,570.61,1428.81],"rot":[0.0112,0.1818,0]},{"pos":[3074.4,570.68,1447.06],"rot":[0.0504,0.1668,0]},{"pos":[3076.19,570.68,1456.95],"rot":[0.1036,0.2068,0]},{"pos":[3085.89,570.68,1512.49],"rot":[0.0645,-0.1983,0]},{"pos":[3091.23,577.71,1526.9],"rot":[-0.0364,-0.5732,0]},{"pos":[3096.11,578,1537.63],"rot":[-0.112,-0.7382,0]},{"pos":[3085.5,586.99,1562.3],"rot":[-0.3696,-1.1082,0]},{"pos":[3068.16,608.77,1581.04],"rot":[-0.2688,-1.4382,0]},{"pos":[3049.37,606.84,1604.53],"rot":[-0.1652,-1.6832,0]},{"pos":[3039.63,611.99,1621.46],"rot":[-0.3668,-1.7182,0]},{"pos":[3027.54,619.02,1631.77],"rot":[-0.4676,-2.2082,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3067.14,513.37,1740.18],"rot":[0.1792,4.3718,0]},{"pos":[3053.67,513.37,1738.67],"rot":[0.1316,4.8415,0]},{"pos":[3031.35,517.85,1742.66],"rot":[0.0952,5.4817,0]},{"pos":[3012.1,518.11,1764.42],"rot":[0.1204,5.5918,0]},{"pos":[2991.28,518.11,1793.2],"rot":[0.0868,5.6267,0]},{"pos":[2980.99,518.11,1811.77],"rot":[0.0532,5.2271,0]},{"pos":[2970.34,522.76,1823.5],"rot":[-0.0532,4.6068,0]},{"pos":[2946.6,523.08,1821.24],"rot":[-0.0281,4.6916,0]},{"pos":[2925.19,529.66,1821.98],"rot":[0.0082,4.7769,0]},{"pos":[2900.58,536.55,1824.08],"rot":[0.0252,4.7568,0]},{"pos":[2876.18,536.79,1825.34],"rot":[0.0252,4.102,0]},{"pos":[2862.92,542.38,1827.2],"rot":[0.0168,3.7719,0]},{"pos":[2849.91,542.53,1821.71],"rot":[-0.0334,3.5424,0]},{"pos":[2841.66,547.69,1812.13],"rot":[-0.0896,3.2818,0]},{"pos":[2834.56,549.61,1791.39],"rot":[0.0111,3.6666,0]},{"pos":[2823.19,549.27,1780.76],"rot":[0.0951,3.9762,0]},{"pos":[2800.64,549.27,1756.27],"rot":[0.1624,3.7168,0]},{"pos":[2796.18,552.96,1733.59],"rot":[0.126,3.102,0]},{"pos":[2800.64,553.68,1694.18],"rot":[0.196,3.0068,0]},{"pos":[2805.53,553.68,1672.97],"rot":[0.1736,2.5471,0]},{"pos":[2814.13,553.68,1663.73],"rot":[0.1372,2.0169,0]},{"pos":[2822.49,553.68,1658],"rot":[0.0505,1.6418,0]},{"pos":[2827.9,553.68,1659.09],"rot":[-0.1316,1.5918,0]},{"pos":[2839.28,553.68,1658.14],"rot":[-0.252,1.6618,0]},{"pos":[2847.1,558.38,1657.38],"rot":[-0.2687,1.6817,0]},{"pos":[2859.5,558.92,1658.69],"rot":[-0.2884,1.7667,0]},{"pos":[2864.43,558.93,1660.94],"rot":[-0.308,2.0318,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3609.53,559.97,2889.69],"rot":[0.3752,1.8486,0]},{"pos":[3628.35,556.57,2885.63],"rot":[0.5012,1.8636,0]},{"pos":[3669.96,550.41,2867.28],"rot":[0.4593,1.9236,0]},{"pos":[3695.93,539.75,2855.08],"rot":[0.4648,1.7536,0]},{"pos":[3708.79,538.03,2844.1],"rot":[0.4088,1.5887,0]},{"pos":[3720.34,533.26,2838.19],"rot":[0.3108,1.4086,0]},{"pos":[3736.39,532.88,2832.62],"rot":[0.1933,1.2137,0]},{"pos":[3755.64,532.6,2834.16],"rot":[-0.0475,0.8836,0]},{"pos":[3770.36,532.6,2844.62],"rot":[-0.1596,1.0436,0]},{"pos":[3782.7,532.6,2857.01],"rot":[-0.2156,1.5431,0]},{"pos":[3804.17,532.6,2862.5],"rot":[-0.1487,1.9965,0]},{"pos":[3831.28,528.45,2860.46],"rot":[-0.0084,1.8836,0]},{"pos":[3861.34,528.15,2861.69],"rot":[0.1428,1.8186,0]},{"pos":[3905.23,524.23,2848.89],"rot":[0.3024,1.9486,0]},{"pos":[3928.52,524.16,2844.91],"rot":[0.2298,2.2283,0]},{"pos":[3961.79,524.16,2833.01],"rot":[0.2072,2.4736,0]},{"pos":[3986.01,524.16,2826.7],"rot":[0.1736,2.5186,0]},{"pos":[4028.76,524.16,2808.3],"rot":[0.0589,2.7386,0]},{"pos":[4043.76,524.16,2792.68],"rot":[0.0028,2.5786,0]},{"pos":[4060.44,524.16,2748.83],"rot":[0.2016,2.3686,0]},{"pos":[4085.2,520.51,2718.07],"rot":[0.2072,2.0585,0]},{"pos":[4111.09,520.45,2690.74],"rot":[0.2128,1.8486,0]},{"pos":[4150.04,520.45,2670.27],"rot":[0.1764,1.6536,0]},{"pos":[4191.14,520.45,2664.2],"rot":[0.028,1.3586,0]},{"pos":[4228.92,520.45,2670.93],"rot":[-0.098,1.0389,0]},{"pos":[4269.48,520.45,2693.77],"rot":[0,1.6285,0]},{"pos":[4299.69,524.77,2703.33],"rot":[0.0588,2.1435,0]},{"pos":[4360.77,524.8,2696.26],"rot":[0.2016,2.4979,0]},{"pos":[4395.71,521.27,2669.7],"rot":[0.2828,2.6086,0]},{"pos":[4423.51,520.98,2638.24],"rot":[0.308,2.7286,0]},{"pos":[4462.7,520.98,2577.16],"rot":[0.28,2.2987,0]},{"pos":[4499.83,520.98,2547.38],"rot":[0.2464,2.0086,0]},{"pos":[4532.54,520.98,2511.04],"rot":[0.2324,1.9586,0]},{"pos":[4585.93,520.98,2478.08],"rot":[0.2352,1.9536,0]},{"pos":[4676.29,520.98,2452.6],"rot":[0.154,2.5835,0]},{"pos":[4717.2,520.98,2426.6],"rot":[0.0617,2.9181,0]},{"pos":[4730.77,520.98,2412.77],"rot":[0.0336,2.9785,0]},{"pos":[4750.31,520.98,2390.01],"rot":[-0.0392,3.0386,0]},{"pos":[4783.02,531.61,2363.8],"rot":[-0.0784,3.2636,0]},{"pos":[4804,531.63,2307.49],"rot":[-0.0168,3.5036,0]},{"pos":[4811.89,531.63,2277.01],"rot":[0.0448,3.6586,0]},{"pos":[4816.19,531.63,2236.33],"rot":[0.0728,3.9836,0]},{"pos":[4812.29,531.63,2203.37],"rot":[0.1008,4.2881,0]},{"pos":[4800.51,529.02,2180.91],"rot":[0.14,4.6485,0]},{"pos":[4789.21,522.21,2170.47],"rot":[0.1183,5.3628,0]},{"pos":[4774.64,513.28,2171.54],"rot":[0.0312,6.2713,0]},{"pos":[4771.66,512.77,2179.01],"rot":[-0.0644,6.8285,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[1891.64,561.12,3826.95],"rot":[-0.0028,2.6788,0]},{"pos":[1904.31,560.06,3827.2],"rot":[-0.056,3.1588,0]},{"pos":[1914.79,563.13,3812.67],"rot":[0.0028,3.9438,0]},{"pos":[1911.79,564.19,3795.3],"rot":[0.0559,4.2838,0]},{"pos":[1898.69,560.21,3771.21],"rot":[0.0504,4.4488,0]},{"pos":[1869.02,561.43,3762.22],"rot":[0.1148,4.3788,0]},{"pos":[1853.65,557.86,3764.75],"rot":[0.0224,3.7688,0]},{"pos":[1836.55,563.58,3767.37],"rot":[0.126,3.0591,0]},{"pos":[1828.69,565.43,3757.45],"rot":[0.21,2.7788,0]},{"pos":[1832.18,558.33,3747.36],"rot":[0.3472,3.3441,0]},{"pos":[1829.19,549.4,3712.97],"rot":[0.3864,4.1338,0]},{"pos":[1792.04,537.47,3675.23],"rot":[0.3892,4.9988,0]},{"pos":[1732.21,536.56,3676.81],"rot":[0.1512,6.5088,0]},{"pos":[1717.18,536.9,3698.31],"rot":[-0.1456,7.1488,0]},{"pos":[1727.95,551.54,3739.17],"rot":[-0.1092,7.8138,0]},{"pos":[1767.59,560.36,3709.21],"rot":[-0.0812,6.6438,0]},{"pos":[1785.08,566.63,3717.52],"rot":[-0.0477,6.3339,0]},{"pos":[1800.74,578.44,3724.96],"rot":[0.0839,6.114,0]},{"pos":[1817.19,588.89,3736.28],"rot":[0.1708,6.0189,0]},{"pos":[1833.45,593.98,3752.48],"rot":[0.2435,5.829,0]},{"pos":[1854.34,595.85,3774.9],"rot":[0.3388,5.3041,0]},{"pos":[1860.62,592.5,3792.58],"rot":[0.1652,4.9539,0]},{"pos":[1860.04,592.41,3791.06],"rot":[-0.2352,5.1838,0]},{"pos":[1858.78,592.47,3791.39],"rot":[-0.3444,5.4237,0]},{"pos":[1849.11,596.6,3791.13],"rot":[-0.3752,5.6338,0]},{"pos":[1834.45,596.33,3791.72],"rot":[-0.392,6.0788,0]},{"pos":[1829.1,593.06,3800.64],"rot":[-0.4284,6.2688,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[1990.38,509.53,3621.72],"rot":[0.084,0.1156,0]},{"pos":[1983.55,509.31,3631.74],"rot":[0.0224,0.4806,0]},{"pos":[1988.05,509.12,3640.18],"rot":[0.0224,0.7406,0]},{"pos":[2004.72,515.96,3661.82],"rot":[0.2912,0.9755,0]},{"pos":[2033.47,514.81,3680.09],"rot":[0.2464,0.7856,0]},{"pos":[2051.88,515.59,3727.76],"rot":[0.252,1.4205,0]},{"pos":[2053.9,508.41,3756.3],"rot":[0.0896,1.6455,0]},{"pos":[2085.33,509.5,3786.09],"rot":[0.084,1.7856,0]},{"pos":[2125.71,516.68,3795.99],"rot":[0.0672,2.3206,0]},{"pos":[2146.6,525.54,3785.61],"rot":[0.2072,2.3156,0]},{"pos":[2171.51,526.91,3771.16],"rot":[0.2716,2.1506,0]},{"pos":[2212.41,527.19,3766.29],"rot":[0.2856,3.1856,0]},{"pos":[2220.62,522.49,3757.79],"rot":[0.21,3.5356,0]},{"pos":[2227.22,524.44,3749.45],"rot":[0.1036,3.8656,0]},{"pos":[2231.28,523.11,3735.39],"rot":[0.0308,4.1006,0]},{"pos":[2232.82,527.52,3723.5],"rot":[-0.0644,4.3056,0]},{"pos":[2221.7,526.72,3713.62],"rot":[-0.126,4.3005,0]},{"pos":[2204.94,544.96,3695.52],"rot":[-0.1484,4.1157,0]},{"pos":[2196.03,557.66,3682.54],"rot":[-0.252,3.9456,0]},{"pos":[2176.07,569.88,3681.85],"rot":[-0.1904,3.6756,0]},{"pos":[2155.58,569.53,3679.96],"rot":[-0.2212,3.3857,0]},{"pos":[2138.66,574.64,3673.93],"rot":[-0.1652,3.0258,0]},{"pos":[2125.71,581.31,3664.73],"rot":[-0.1148,2.6707,0]},{"pos":[2118.37,582.63,3650.15],"rot":[-0.056,2.0957,0]},{"pos":[2118.81,590.52,3631.1],"rot":[0.0308,1.4906,0]},{"pos":[2128.28,589.99,3616.44],"rot":[0,0.9209,0]},{"pos":[2140.9,588.71,3608.75],"rot":[-0.0644,0.4056,0]},{"pos":[2151.08,585.93,3608.91],"rot":[-0.2044,0.0956,0]},{"pos":[2161.44,582.76,3612.79],"rot":[-0.3696,-0.2044,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[2007.36,496.65,3558.89],"rot":[0.2072,2.327,0]},{"pos":[2005.75,497.54,3523.04],"rot":[0.1429,1.587,0]},{"pos":[2024.4,496.4,3499.25],"rot":[0.0532,0.927,0]},{"pos":[2035.74,500.29,3490.95],"rot":[-0.0168,0.7221,0]},{"pos":[2052.79,499.77,3486.66],"rot":[-0.056,0.532,0]},{"pos":[2070.12,504.75,3500.06],"rot":[-0.0448,0.8569,0]},{"pos":[2093.67,511.96,3519.95],"rot":[0.0168,1.147,0]},{"pos":[2118.08,521.83,3537.74],"rot":[0.112,1.307,0]},{"pos":[2134.98,529.08,3551.1],"rot":[0.1314,1.4469,0]},{"pos":[2164.89,531.24,3557.28],"rot":[0.224,1.517,0]},{"pos":[2177.23,529.63,3566.05],"rot":[0.1428,1.6819,0]},{"pos":[2184.85,527.96,3572.27],"rot":[0.0588,1.877,0]},{"pos":[2191.49,527.8,3581.44],"rot":[0.0504,2.307,0]},{"pos":[2211.7,529.08,3588.86],"rot":[0.168,3.167,0]},{"pos":[2217.75,527.89,3577.86],"rot":[0.3107,3.232,0]},{"pos":[2212.51,527.6,3565.65],"rot":[0.4087,2.9923,0]},{"pos":[2203.84,519.07,3548.48],"rot":[0.4032,2.527,0]},{"pos":[2197.1,512.22,3533.87],"rot":[0.3528,2.1921,0]},{"pos":[2197.73,510.37,3510.25],"rot":[0.2716,1.697,0]},{"pos":[2209.58,509.46,3491.19],"rot":[0.224,1.282,0]},{"pos":[2230.92,508.96,3477.48],"rot":[0.1988,0.8775,0]},{"pos":[2255.88,514.2,3480.77],"rot":[0.2324,0.907,0]},{"pos":[2288.41,515.18,3486.63],"rot":[0.2603,0.9519,0]},{"pos":[2324.77,515.89,3508.78],"rot":[0.2968,0.982,0]},{"pos":[2348.56,512.54,3540.46],"rot":[0.2464,1.3869,0]},{"pos":[2377.17,509.59,3560.05],"rot":[0.2856,1.667,0]},{"pos":[2402.68,503.65,3571.02],"rot":[0.1904,2.017,0]},{"pos":[2427.46,506.2,3576.68],"rot":[0.098,2.447,0]},{"pos":[2455.72,504.53,3573.77],"rot":[0.0084,2.802,0]},{"pos":[2493.96,505.98,3535.86],"rot":[0.0812,2.647,0]},{"pos":[2523.43,506.7,3483.32],"rot":[0.1176,2.8269,0]},{"pos":[2528.72,504.06,3457.25],"rot":[0.1764,2.257,0]},{"pos":[2540.61,504.44,3438.99],"rot":[0.2016,1.937,0]},{"pos":[2554.95,505.03,3415.76],"rot":[0.2324,1.532,0]},{"pos":[2571.78,504.38,3401.25],"rot":[0.1988,1.297,0]},{"pos":[2594.74,503.94,3387.09],"rot":[0.1764,0.982,0]},{"pos":[2617.35,503.11,3377.94],"rot":[0.1344,0.5822,0]},{"pos":[2638.1,501.71,3372.58],"rot":[0.0644,0.0971,0]},{"pos":[2651.87,500.6,3375.74],"rot":[0.0084,-0.158,0]},{"pos":[2668.15,500.54,3381.85],"rot":[0.0056,-0.638,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[2166.04,500.68,3149.09],"rot":[0.2604,2.5288,0]},{"pos":[2162.95,501.56,3136.03],"rot":[0.2016,2.1688,0]},{"pos":[2164.38,504.51,3125.5],"rot":[0.1988,2.0688,0]},{"pos":[2169.82,503.84,3113.32],"rot":[0.196,1.9488,0]},{"pos":[2184.74,505.95,3097.34],"rot":[0.168,1.8488,0]},{"pos":[2199.6,506.13,3096.34],"rot":[0.1708,1.9637,0]},{"pos":[2212.18,506.3,3099.44],"rot":[0.1792,2.2838,0]},{"pos":[2242.94,506.41,3099.59],"rot":[0.1848,2.6988,0]},{"pos":[2263.37,508.46,3090.4],"rot":[0.1736,2.6638,0]},{"pos":[2299.09,510.97,3081.45],"rot":[0.0364,3.0938,0]},{"pos":[2331.34,519.82,3060.45],"rot":[0.0896,3.6935,0]},{"pos":[2340.71,519.1,3042.86],"rot":[0.0336,4.1188,0]},{"pos":[2343.98,519.78,3018.43],"rot":[0.0672,4.5786,0]},{"pos":[2347.92,521.27,2986.41],"rot":[0.1428,4.7787,0]},{"pos":[2342.66,517.12,2960.2],"rot":[0.1568,5.0938,0]},{"pos":[2328.89,510.5,2938.61],"rot":[0.0448,5.5438,0]},{"pos":[2303.7,519.16,2936.16],"rot":[0.2436,4.6238,0]},{"pos":[2283.92,522.07,2923.09],"rot":[0.2324,4.7488,0]},{"pos":[2257.88,521.73,2914.63],"rot":[0.2184,5.2337,0]},{"pos":[2231.92,522.27,2929.89],"rot":[0.2464,5.0038,0]},{"pos":[2198.24,517.5,2941.88],"rot":[0.2184,4.5389,0]},{"pos":[2160.57,517.94,2945.3],"rot":[0.2464,4.5038,0]},{"pos":[2132.8,517.72,2946.96],"rot":[0.238,4.3188,0]},{"pos":[2106.45,518.1,2927.62],"rot":[0.2576,4.9088,0]},{"pos":[2082.42,518.26,2914.15],"rot":[0.266,5.6087,0]},{"pos":[2055.37,517.4,2936.07],"rot":[0.2212,6.2939,0]},{"pos":[2026.35,515.8,2957.98],"rot":[0.14,6.6738,0]},{"pos":[2016.05,517.28,2993.35],"rot":[0.1428,7.1588,0]},{"pos":[2018.15,520.13,3019.78],"rot":[0.0924,7.5088,0]},{"pos":[2038.43,521.87,3049.36],"rot":[0.168,8.0088,0]},{"pos":[2051.71,526.99,3056.52],"rot":[0.1512,8.6238,0]},{"pos":[2067.32,527.6,3055.63],"rot":[0.3136,8.6838,0]},{"pos":[2079.58,520.21,3047.52],"rot":[0.3528,8.4589,0]},{"pos":[2093.46,514.61,3032.98],"rot":[0.364,8.3488,0]},{"pos":[2108.28,513.69,3017.03],"rot":[0.3192,7.9189,0]},{"pos":[2127.65,511.81,3005.99],"rot":[0.2212,7.5438,0]},{"pos":[2145.59,508.43,2997.61],"rot":[0.0504,6.9638,0]},{"pos":[2166.83,506.97,2997.89],"rot":[-0.0224,6.4038,0]},{"pos":[2183.85,505.19,3003.24],"rot":[-0.112,5.8388,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[1844.26,504.2,3398.98],"rot":[0.0728,5.6388,0]},{"pos":[1828.14,505.06,3400.11],"rot":[0.1176,5.8438,0]},{"pos":[1806.84,507.06,3405.23],"rot":[0.2184,5.9787,0]},{"pos":[1788.84,505.12,3409.08],"rot":[0.1204,6.1638,0]},{"pos":[1774.59,499.84,3409.62],"rot":[0.0644,6.3138,0]},{"pos":[1752.87,499.56,3416.44],"rot":[0.056,6.3688,0]},{"pos":[1736.22,500.05,3439.52],"rot":[0.1288,6.2738,0]},{"pos":[1711.28,498.67,3461.69],"rot":[0.0896,6.4788,0]},{"pos":[1707.94,497.73,3502.44],"rot":[0.1988,6.5738,0]},{"pos":[1721.72,497.95,3520.99],"rot":[0.2128,6.4438,0]},{"pos":[1731.48,500.62,3551.41],"rot":[0.2352,6.9238,0]},{"pos":[1729.11,500.41,3570.33],"rot":[0.2184,7.3938,0]},{"pos":[1733.7,498.91,3591.6],"rot":[0.1428,7.8538,0]},{"pos":[1749.06,495.82,3595.55],"rot":[0.14,7.9588,0]},{"pos":[1769.47,496.76,3593.41],"rot":[0.1876,8.2038,0]},{"pos":[1776.54,496.98,3591.87],"rot":[0.1988,9.2088,0]},{"pos":[1776.3,497.52,3583.92],"rot":[0.2268,9.2288,0]},{"pos":[1769.81,497.86,3575.61],"rot":[0.2436,8.7738,0]},{"pos":[1772.39,497.64,3554.82],"rot":[0.0168,7.1238,0]},{"pos":[1790.5,497.68,3547.65],"rot":[0.0168,6.6589,0]},{"pos":[1816.91,498.14,3557.43],"rot":[0.0392,5.9738,0]},{"pos":[1827.93,497.68,3572.91],"rot":[0.0168,5.4488,0]},{"pos":[1826.42,501.89,3607.21],"rot":[0.042,4.604,0]},{"pos":[1807.08,503.07,3623.82],"rot":[0.1008,4.0738,0]},{"pos":[1795.98,501.89,3628.65],"rot":[0.042,3.6638,0]},{"pos":[1799.49,506.78,3606.88],"rot":[0.0616,3.9485,0]},{"pos":[1806.87,512.14,3584.53],"rot":[0.0616,4.5337,0]},{"pos":[1803.06,514.59,3563.14],"rot":[0.1792,5.1288,0]},{"pos":[1780.51,514.97,3550.4],"rot":[0.1988,6.0688,0]},{"pos":[1754.17,516.17,3550.32],"rot":[0.2604,6.5938,0]},{"pos":[1738.23,511.86,3555.76],"rot":[0.042,6.7738,0]},{"pos":[1723.1,503.9,3563.52],"rot":[-0.2016,7.0338,0]},{"pos":[1703.7,505.27,3572.54],"rot":[-0.1316,7.2938,0]},{"pos":[1688.76,504.06,3578.08],"rot":[-0.1932,7.1388,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[2072.75,496.32,3829.12],"rot":[0.0028,6.2088,0]},{"pos":[2062.23,496.54,3837.21],"rot":[0.014,6.4887,0]},{"pos":[2054.98,499.27,3850.65],"rot":[0.1512,6.7688,0]},{"pos":[2066.11,501.2,3862.1],"rot":[0.2492,7.0238,0]},{"pos":[2081.97,500.97,3878.36],"rot":[0.238,6.4339,0]},{"pos":[2081.32,500.63,3890.44],"rot":[0.1792,6.6588,0]},{"pos":[2095.68,501.31,3920.72],"rot":[0.1932,6.8988,0]},{"pos":[2117.71,503.52,3929.19],"rot":[0.0924,6.5788,0]},{"pos":[2134.5,506.56,3936.61],"rot":[-0.0448,6.1988,0]},{"pos":[2143.69,510.22,3944.45],"rot":[-0.0196,6.0288,0]},{"pos":[2146.11,514.29,3956.18],"rot":[0.2435,5.9688,0]},{"pos":[2144.96,512.75,3967.27],"rot":[0.3164,5.7788,0]},{"pos":[2121.63,511.27,3985.97],"rot":[0.2912,6.6438,0]},{"pos":[2115.03,512.25,4003.93],"rot":[0.2016,7.2887,0]},{"pos":[2118.35,511.61,4017.11],"rot":[0.1596,7.6888,0]},{"pos":[2133.28,510.3,4022.98],"rot":[0.182,8.0538,0]},{"pos":[2144.65,511.9,4023.09],"rot":[0.196,8.6588,0]},{"pos":[2151.28,515.84,4015.2],"rot":[0.1736,8.3788,0]},{"pos":[2166.67,516.73,4014.96],"rot":[0.2156,9.2687,0]},{"pos":[2177.68,516.23,4002.18],"rot":[0.1904,10.0087,0]},{"pos":[2179.76,513.8,3987.64],"rot":[0.0672,10.6938,0]},{"pos":[2185.18,515.67,3966.23],"rot":[-0.0196,11.3188,0]},{"pos":[2197.96,512.04,3949.5],"rot":[-0.2128,11.2538,0]},{"pos":[2201.21,511.61,3925.24],"rot":[-0.2352,11.6438,0]},{"pos":[2192.52,523.91,3913.91],"rot":[-0.0924,11.8688,0]},{"pos":[2199.72,529.84,3893.48],"rot":[-0.1344,12.0088,0]},{"pos":[2197.74,531.2,3888.83],"rot":[-0.1988,12.2438,0]},{"pos":[2198.47,546.1,3882.36],"rot":[-0.2548,12.3388,0]},{"pos":[2200.17,544.95,3871.53],"rot":[-0.3164,12.5538,0]},{"pos":[2206.44,544.69,3865.77],"rot":[-0.3304,12.5838,0]},{"pos":[2207.73,547.38,3847.26],"rot":[-0.3024,12.5138,0]},{"pos":[2207.94,547.38,3843.24],"rot":[-0.3024,12.5138,0]},{"pos":[2207.86,547.38,3844.82],"rot":[-0.3024,12.5138,0]},{"pos":[2207.62,545.18,3845.64],"rot":[-0.42,12.5238,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[2257.27,497.98,4079.27],"rot":[0.0784,5.9006,0]},{"pos":[2248.51,499.55,4097.82],"rot":[0.0868,6.2456,0]},{"pos":[2247.89,496.28,4109.51],"rot":[-0.0644,6.3756,0]},{"pos":[2250.99,495.22,4127.64],"rot":[-0.1176,6.0956,0]},{"pos":[2254.46,503.03,4145.22],"rot":[0.0193,5.621,0]},{"pos":[2246.26,509.3,4154.92],"rot":[0.1959,5.6405,0]},{"pos":[2232.75,509.08,4176.02],"rot":[0.1932,5.5106,0]},{"pos":[2200.46,509.9,4202.43],"rot":[0.2352,6.0856,0]},{"pos":[2194.97,505.29,4219.6],"rot":[0.0028,6.5656,0]},{"pos":[2190.28,506.31,4231.03],"rot":[0.0532,6.7755,0]},{"pos":[2181.32,507.58,4247.17],"rot":[0.1176,6.9756,0]},{"pos":[2193.85,504.67,4273.78],"rot":[0.2548,7.1006,0]},{"pos":[2211.45,502.82,4299.82],"rot":[0.1736,7.3506,0]},{"pos":[2222.14,505.65,4323.58],"rot":[0.0952,7.5205,0]},{"pos":[2231.72,504.91,4342.88],"rot":[0.0336,7.5206,0]},{"pos":[2245.36,506.08,4368.76],"rot":[0.0924,7.7806,0]},{"pos":[2263.39,506.31,4387.15],"rot":[0.1036,8.1606,0]},{"pos":[2287.7,508.19,4390.9],"rot":[0.1988,8.4107,0]},{"pos":[2304.98,505.91,4381.91],"rot":[0.2688,8.1806,0]},{"pos":[2333.09,504.33,4370.87],"rot":[0.3752,8.3106,0]},{"pos":[2350.64,499.46,4356.73],"rot":[0.2688,8.2357,0]},{"pos":[2361.39,499.04,4342.67],"rot":[0.2492,7.7607,0]},{"pos":[2375.79,498.93,4337.05],"rot":[0.2436,7.3807,0]},{"pos":[2399.02,498.05,4335.64],"rot":[0.1988,6.8107,0]},{"pos":[2415.09,500.2,4339.38],"rot":[0.0728,6.4657,0]},{"pos":[2425.62,498.66,4346.4],"rot":[-0.0224,6.3606,0]},{"pos":[2448.6,496.77,4364.74],"rot":[-0.1176,6.2756,0]},{"pos":[2467.94,495.05,4371.77],"rot":[-0.2044,6.0056,0]},{"pos":[2487.08,495.54,4379.34],"rot":[-0.1792,5.7006,0]},{"pos":[2523.44,493.93,4401.53],"rot":[-0.28,5.4056,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[2551.17,512.36,4052.79],"rot":[0.0924,5.6893,0]},{"pos":[2546.97,513.2,4056.61],"rot":[0.1344,5.8692,0]},{"pos":[2543.64,514.09,4063.71],"rot":[0.1792,6.1142,0]},{"pos":[2539.13,513.04,4076.84],"rot":[0.2184,6.7193,0]},{"pos":[2544.1,512.21,4096.04],"rot":[0.3556,6.8443,0]},{"pos":[2549.52,509.25,4119.08],"rot":[0.322,6.9543,0]},{"pos":[2552.01,507.39,4137.74],"rot":[0.2296,7.0692,0]},{"pos":[2568.72,508.09,4171.09],"rot":[0.266,7.1893,0]},{"pos":[2593.34,508.32,4204.8],"rot":[0.2772,7.7992,0]},{"pos":[2613.89,506.9,4221.26],"rot":[0.2044,8.2491,0]},{"pos":[2641.84,510.92,4216.54],"rot":[0.2352,8.6892,0]},{"pos":[2667.13,506.53,4205.48],"rot":[0.1904,8.9942,0]},{"pos":[2695.12,500.65,4185.33],"rot":[0.2072,9.1093,0]},{"pos":[2707.81,500.52,4154.94],"rot":[0.2044,9.5292,0]},{"pos":[2707.37,500.3,4128.94],"rot":[0.1932,9.8393,0]},{"pos":[2676.91,502.34,4096.78],"rot":[0.1848,9.6143,0]},{"pos":[2651.6,502.37,4073.45],"rot":[0.2016,9.3643,0]},{"pos":[2636.65,502.14,4059.91],"rot":[0.1904,9.1743,0]},{"pos":[2622.54,502.2,4043.13],"rot":[0.1932,8.9793,0]},{"pos":[2610.48,501.43,4023.36],"rot":[0.154,8.7993,0]},{"pos":[2613.82,502.09,3995.76],"rot":[0.1876,8.9343,0]},{"pos":[2624.38,501.98,3968.72],"rot":[0.182,9.1342,0]},{"pos":[2629.75,497.01,3930.46],"rot":[0.196,9.2593,0]},{"pos":[2634.78,499.42,3902.47],"rot":[0.1792,9.3043,0]},{"pos":[2639.78,499.43,3875.03],"rot":[0.1708,9.7892,0]},{"pos":[2633.41,500.31,3856.06],"rot":[0.2156,10.1643,0]},{"pos":[2609.62,499.71,3838.57],"rot":[0.1848,9.5894,0]},{"pos":[2590.31,499.6,3820.61],"rot":[0.1792,8.8543,0]},{"pos":[2584.72,501.86,3784.59],"rot":[0.1484,7.8443,0]},{"pos":[2600.78,500.8,3765.91],"rot":[0.0924,7.1793,0]},{"pos":[2619.91,505.06,3764.28],"rot":[0.0728,6.8145,0]},{"pos":[2634.25,511.54,3767.92],"rot":[0.1064,6.6543,0]},{"pos":[2653.61,519.37,3776.89],"rot":[0.1344,6.4043,0]},{"pos":[2664.22,526.3,3786.07],"rot":[0.1428,6.2643,0]},{"pos":[2673.14,529.6,3792.65],"rot":[0,6.1093,0]},{"pos":[2671.88,528.17,3804.66],"rot":[-0.1764,6.2043,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[2196.4,531.11,4154.05],"rot":[0.0784,5.4143,0]},{"pos":[2198.99,533.11,4167.51],"rot":[0.1792,5.4743,0]},{"pos":[2199.18,527.93,4179.11],"rot":[0.196,5.3643,0]},{"pos":[2191.37,526.03,4189.18],"rot":[0.2743,5.2193,0]},{"pos":[2174.74,523.42,4199.47],"rot":[0.406,5.0243,0]},{"pos":[2162.3,520.97,4200.49],"rot":[0.294,5.3042,0]},{"pos":[2146.82,517.08,4203.1],"rot":[0.2548,5.5042,0]},{"pos":[2129.29,512.5,4202.09],"rot":[0.1652,5.8092,0]},{"pos":[2117.95,511.32,4216.62],"rot":[0.2156,5.9443,0]},{"pos":[2113.74,506.74,4227.94],"rot":[0.2688,5.8043,0]},{"pos":[2110.88,506.68,4244.15],"rot":[0.28,5.4395,0]},{"pos":[2108.2,506.14,4260.49],"rot":[0.252,4.8745,0]},{"pos":[2095.78,505.55,4277.07],"rot":[0.2212,4.2945,0]},{"pos":[2080.89,505.17,4280.12],"rot":[0.2016,4.1093,0]},{"pos":[2065.23,505.17,4273.52],"rot":[0.2016,4.1192,0]},{"pos":[2037.94,501.84,4264.37],"rot":[0.1904,4.1443,0]},{"pos":[2009.28,501.68,4256.87],"rot":[0.2016,4.4842,0]},{"pos":[1948.87,500.89,4240.3],"rot":[0.1988,4.4943,0]},{"pos":[1926.67,500.79,4227.23],"rot":[0.196,4.6092,0]},{"pos":[1899.46,497.78,4215.24],"rot":[0.1904,4.7943,0]},{"pos":[1882.51,502.49,4198.91],"rot":[0.1848,4.9443,0]},{"pos":[1870.07,502.14,4190.97],"rot":[0.1512,4.9443,0]},{"pos":[1848.47,501.77,4179.6],"rot":[0.1316,5.0393,0]},{"pos":[1833.52,501.48,4165.28],"rot":[0.1176,5.0991,0]},{"pos":[1820.25,501.48,4142.2],"rot":[0.1176,5.3842,0]},{"pos":[1804.24,497.84,4124.62],"rot":[0.0952,5.6541,0]},{"pos":[1792.29,497.48,4112.12],"rot":[0.0924,5.8642,0]},{"pos":[1777.82,497.48,4092.69],"rot":[0.0924,5.9942,0]},{"pos":[1755.06,497.59,4077.66],"rot":[0.098,6.2792,0]},{"pos":[1733.84,497.77,4066.17],"rot":[0.1064,6.3743,0]},{"pos":[1711.1,497.32,4057.56],"rot":[0.084,6.5592,0]},{"pos":[1694.52,494.47,4053.88],"rot":[-0.0588,6.5843,0]},{"pos":[1674.97,495.29,4046.08],"rot":[-0.154,6.4842,0]},{"pos":[1658.11,494.7,4045.67],"rot":[-0.1792,6.5193,0]},{"pos":[1649.71,494.49,4047.9],"rot":[-0.1904,6.5893,0]},{"pos":[1652.47,498.55,4054.52],"rot":[-0.1904,6.3593,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[1641.26,497.03,4230.91],"rot":[0.2436,3.5193,0]},{"pos":[1629.64,499.59,4225.06],"rot":[0.2296,3.3843,0]},{"pos":[1614.39,498.59,4216.75],"rot":[0.1289,3.1243,0]},{"pos":[1602.09,496.6,4207.33],"rot":[0.0281,2.7643,0]},{"pos":[1603,496.65,4195.42],"rot":[0.0308,2.8042,0]},{"pos":[1615.21,497.39,4176.73],"rot":[0.0672,3.2387,0]},{"pos":[1625.97,497.99,4147.6],"rot":[0.098,3.7293,0]},{"pos":[1620.38,498.61,4134.77],"rot":[0.1288,3.7942,0]},{"pos":[1609.31,498.5,4124.67],"rot":[0.1232,3.6093,0]},{"pos":[1591.4,498.06,4119.01],"rot":[0.1008,3.1994,0]},{"pos":[1576.04,497.88,4109.17],"rot":[0.0924,2.8593,0]},{"pos":[1567.79,497.72,4094.99],"rot":[0.084,2.6794,0]},{"pos":[1566.31,498.77,4075.19],"rot":[0.1372,2.6093,0]},{"pos":[1579.24,499.82,4052.73],"rot":[0.1904,2.7542,0]},{"pos":[1589.35,497.85,4032.89],"rot":[0.2044,2.9842,0]},{"pos":[1594.7,496.87,4000.75],"rot":[0.1568,3.4993,0]},{"pos":[1585.86,501.92,3981.91],"rot":[0.1204,3.3593,0]},{"pos":[1573.49,501.75,3967.02],"rot":[0.1064,3.1593,0]},{"pos":[1552.54,502.81,3932.92],"rot":[0.0952,3.0293,0]},{"pos":[1542.82,508.22,3901.27],"rot":[0.056,3.0592,0]},{"pos":[1545.97,509.31,3886.77],"rot":[0.1008,3.4492,0]},{"pos":[1545.06,509.25,3871.54],"rot":[0.098,3.7192,0]},{"pos":[1544.07,509.53,3856.44],"rot":[0.112,3.8742,0]},{"pos":[1529.21,510.03,3840.31],"rot":[0.1372,3.5844,0]},{"pos":[1525.28,509.93,3824.25],"rot":[0.1316,3.1494,0]},{"pos":[1532.3,510.59,3789.89],"rot":[0.1652,3.1593,0]},{"pos":[1531.76,510.87,3756.74],"rot":[0.1792,3.1943,0]},{"pos":[1535.13,510.81,3736.2],"rot":[0.1764,3.3192,0]},{"pos":[1540.8,511.08,3722.2],"rot":[0.1904,3.5642,0]},{"pos":[1544.44,509.93,3700.84],"rot":[0.2324,3.7442,0]},{"pos":[1550.15,510.7,3679.32],"rot":[0.2604,4.209,0]},{"pos":[1546.7,508.51,3666.2],"rot":[0.2268,4.6043,0]},{"pos":[1538.06,504.86,3654.26],"rot":[0.1708,5.1342,0]},{"pos":[1523.43,501.02,3647.43],"rot":[0.0308,5.6642,0]},{"pos":[1506.58,501.41,3650.19],"rot":[0.0504,5.9692,0]},{"pos":[1492.36,500.68,3656.71],"rot":[0.014,6.2793,0]},{"pos":[1480.03,499,3669.4],"rot":[-0.07,6.5093,0]},{"pos":[1476.87,497.61,3673.5],"rot":[-0.14,6.5943,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3494.51,543.24,4049.39],"rot":[0.1764,0.6961,0]},{"pos":[3506.34,542.58,4069.77],"rot":[0.1708,0.5361,0]},{"pos":[3520,547.17,4094.22],"rot":[0.2044,0.4011,0]},{"pos":[3526.05,551.06,4114.94],"rot":[0.1652,0.6559,0]},{"pos":[3534.7,553.19,4140.31],"rot":[0.1344,1.191,0]},{"pos":[3550.33,559.03,4149.65],"rot":[0.0224,1.3361,0]},{"pos":[3567.56,566.68,4154.64],"rot":[0.1288,1.4011,0]},{"pos":[3582.97,575.88,4153.97],"rot":[0.3919,1.4212,0]},{"pos":[3594.51,577.33,4154.4],"rot":[0.6101,1.3413,0]},{"pos":[3614.27,569.85,4147.3],"rot":[0.8064,1.3761,0]},{"pos":[3625.71,556.12,4133.45],"rot":[0.6188,0.7961,0]},{"pos":[3638.9,547.45,4128.22],"rot":[0.4592,0.5011,0]},{"pos":[3651.53,537.43,4122.85],"rot":[0.2716,0.5711,0]},{"pos":[3667.68,533.65,4129.12],"rot":[0.2548,0.931,0]},{"pos":[3683.38,533.33,4134.84],"rot":[0.168,1.2961,0]},{"pos":[3696.63,529.31,4138.27],"rot":[0.056,1.2711,0]},{"pos":[3714.94,532.47,4143.01],"rot":[-0.0028,1.2261,0]},{"pos":[3725.88,536.06,4151.92],"rot":[-0.1092,1.4061,0]},{"pos":[3737.75,537.61,4163.01],"rot":[-0.0476,1.276,0]},{"pos":[3742.51,541.91,4178.88],"rot":[-0.0085,1.4508,0]},{"pos":[3740.64,544.65,4206.73],"rot":[0.1092,1.4361,0]},{"pos":[3747.89,539.7,4237.5],"rot":[0.1064,1.8608,0]},{"pos":[3761.86,540.13,4246.15],"rot":[0.1456,1.9011,0]},{"pos":[3782.44,538.77,4250.59],"rot":[0.2324,1.7662,0]},{"pos":[3801.25,534.75,4250.13],"rot":[0.2912,1.4862,0]},{"pos":[3827.01,534.91,4257.93],"rot":[0.3024,1.4311,0]},{"pos":[3850.55,534.32,4273.19],"rot":[0.2716,1.5911,0]},{"pos":[3868.14,532.2,4283.74],"rot":[0.1624,1.946,0]},{"pos":[3889,527.25,4291.22],"rot":[0.07,2.296,0]},{"pos":[3903.39,526.32,4292.02],"rot":[0.028,2.476,0]},{"pos":[3914.74,525.58,4291.86],"rot":[-0.0084,2.6411,0]},{"pos":[3924.25,525.02,4294.12],"rot":[-0.0364,2.816,0]},{"pos":[3951.96,526.28,4296.14],"rot":[0.0028,3.1561,0]}]},{"world":{"id":"main","file":"main"},"keys":[{"pos":[3908.04,582.75,4059.89],"rot":[0.098,0.9661,0]},{"pos":[3920.37,592.08,4073.99],"rot":[0.154,1.2561,0]},{"pos":[3924.9,592.4,4089.83],"rot":[0.1652,1.456,0]},{"pos":[3940.82,593.39,4102.92],"rot":[0.2156,1.2811,0]},{"pos":[3960.22,593.39,4103.5],"rot":[0.2156,1.0912,0]},{"pos":[3986.73,594.05,4110.68],"rot":[0.2492,1.0361,0]},{"pos":[4013.01,595.87,4132.15],"rot":[0.3444,1.711,0]},{"pos":[4032.67,595.46,4124.84],"rot":[0.4424,1.8511,0]},{"pos":[4057.08,595.53,4112.11],"rot":[0.5068,1.5861,0]},{"pos":[4076.4,583.53,4109.4],"rot":[0.3528,1.5161,0]},{"pos":[4096.89,585.33,4100.55],"rot":[0.294,1.0961,0]},{"pos":[4113.61,584.92,4108.11],"rot":[0.21,1.0111,0]},{"pos":[4128.07,588.63,4110.71],"rot":[0.0924,0.8461,0]},{"pos":[4141.83,592.78,4112.87],"rot":[0.084,0.4062,0]},{"pos":[4145.51,592.33,4116.5],"rot":[0.0392,0.1961,0]}]}],
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
            presetList || (presetList = [Eg].concat(presetTracks.filter(t => !t.world || t.world.id === "main").map(t => validKeys(t.keys))).filter(k => k.length >= 2));
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
                w = t && t.world;
            return w && w.id && w.file && Wa.some(r => r.name === w.file) ? [w.id, w.file] : ["main", "main"];
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
                b = key(n),
                c = key(n + 1),
                d = key(n + 2);
            for (let u = 0; u < 3; ++u) {
                let rb = b.rot[u],
                    rc = near(c.rot[u], rb);
                pos[u] = Eu(a.pos[u], b.pos[u], c.pos[u], d.pos[u], f);
                rot[u] = Eu(near(a.rot[u], rb), rb, rc, near(d.rot[u], rc), f);
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
                vPos: pos.map((x, u) => (x - pPrev[u]) / h * rate),
                vRot: rot.map((x, u) => (x - rPrev[u]) / h * rate)
            };
        },
        trackUpdate = dt => {
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
            trackPos += gfe.menuTrackSpeed / 300 * Math.min(dt, 1);
            if (trackPos >= span) {
                if (trackState.preset) {
                    trackPos = span;
                    presetDrift || (presetDrift = endDrift(keys, span));
                    presetHold += Math.min(dt, 1);
                    if (presetHold >= presetHoldTime) return pickPreset(), trackUpdate(0);
                    let s = presetDrift,
                        k = presetDriftEase * (1 - Math.exp(-presetHold / presetDriftEase));
                    for (let u = 0; u < 3; ++u) {
                        ot.position[u] = s.pos[u] + s.vPos[u] * k;
                        ot.rotation[u] = s.rot[u] + s.vRot[u] * k;
                    }
                    return tt(ot, !1), !0;
                }
                trackPos %= span;
            }
            trackSample(keys, loop, trackPos, ot.position, ot.rotation);
            return tt(ot, !1), !0;
        };

    (function initRain() {
        let gameCanvas = ko && ko.parentNode ? ko : null;
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

        let gl = rainCanvas.getContext("webgl2", {
            alpha: true,
            premultipliedAlpha: false
        });
        if (!gl) {
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
            let s = gl.createShader(t);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
                console.error("Rain shader:", gl.getShaderInfoLog(s));
                return null;
            }
            return s;
        }

        let prog = gl.createProgram();
        gl.attachShader(prog, mkShader(gl.VERTEX_SHADER, rainVertSrc));
        gl.attachShader(prog, mkShader(gl.FRAGMENT_SHADER, rainFragSrc));
        gl.linkProgram(prog);

        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
            console.error("Rain link:", gl.getProgramInfoLog(prog));
            return;
        }

        let locPV = gl.getUniformLocation(prog, "u_pv");
        let locCam = gl.getUniformLocation(prog, "u_cam");
        let locLight = gl.getUniformLocation(prog, "u_light");
        let locPos = gl.getAttribLocation(prog, "a_pos");
        let locA = gl.getAttribLocation(prog, "a_a");

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

        let vao = gl.createVertexArray(),
            pb = gl.createBuffer(),
            ab = gl.createBuffer();

        gl.bindVertexArray(vao);

        gl.bindBuffer(gl.ARRAY_BUFFER, pb);
        gl.bufferData(gl.ARRAY_BUFFER, posD, gl.DYNAMIC_DRAW);
        gl.enableVertexAttribArray(locPos);
        gl.vertexAttribPointer(locPos, 3, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, ab);
        gl.bufferData(gl.ARRAY_BUFFER, alpD, gl.DYNAMIC_DRAW);
        gl.enableVertexAttribArray(locA);
        gl.vertexAttribPointer(locA, 1, gl.FLOAT, false, 0, 0);

        gl.bindVertexArray(null);

        function spawnDrop(i, cx, cy, cz, top) {
            let bx = cx + (Math.random() - 0.5) * spread * 2;
            let yz = cz + (Math.random() - 0.5) * spread * 2;

            drops[i * 6 + 0] = bx;
            drops[i * 6 + 1] =
                top ?
                cy + vRange * 0.5 + Math.random() * vRange * 0.4 :
                cy + (Math.random() - 0.5) * vRange;

            drops[i * 6 + 2] = yz;
            drops[i * 6 + 3] = 0.55 + Math.random() * 0.45;
            drops[i * 6 + 4] = 0.6 + Math.random() * 0.8;
            drops[i * 6 + 5] =
                (ne && ne.getHeight) ?
                ne.getHeight(bx, yz) :
                (cy - 5);
        }

        for (let i = 0; i < dropCount; i++) {
            spawnDrop(i, 0, 10, 0, false);
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

            for (let i = 0; i < count; i++) {
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

            let h =
                n.getHours() +
                n.getMinutes() / 60 +
                n.getSeconds() / 3600;

            return rainWindows.some(
                w => h >= w[0] && h < w[1]
            );
        }

        function checkRainDisables() {
            if (!gfe.rainEnabled) return true;

            if (gfe.rainNoDesert && ne && ne.player) {
                try {
                    let areaId =
                        ne.getAreaId(
                            ne.player.pos[0],
                            ne.player.pos[2]
                        );

                    let area = areaId && Na.get(areaId);

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
                let wl = Be.environment.data.worldlight;

                let r = Math.min(
                    1,
                    wl[0] * 0.5 + wl[3]
                );

                let g = Math.min(
                    1,
                    wl[1] * 0.5 + wl[4]
                );

                let b = Math.min(
                    1,
                    wl[2] * 0.5 + wl[5]
                );

                lum = Math.min(
                    1,
                    (0.299 * r + 0.587 * g + 0.114 * b) / 0.6
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
                cam = Be.camera.data;
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
                cz = cam.cameraPosition[2];

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

                    gl.bindBuffer(
                        gl.ARRAY_BUFFER,
                        ab
                    );

                    gl.bufferSubData(
                        gl.ARRAY_BUFFER,
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

            for (let i = 0; i < activeDrops; i++) {
                let base = i * 6;

                let spd = drops[base + 4];

                let nx =
                    drops[base] +
                    wxdt * spd;

                let ny =
                    drops[base + 1] -
                    falldt * spd;

                let oz =
                    drops[base + 2] +
                    wzdt * spd;

                let dx = nx - cx,
                    hz = oz - cz;

                if (
                    ny < drops[base + 5] ||
                    dx < -spreadBorder ||
                    dx > spreadBorder ||
                    hz < -spreadBorder ||
                    hz > spreadBorder
                ) {
                    spawnDrop(
                        i,
                        cx,
                        cy,
                        cz,
                        true
                    );

                    nx = drops[base];
                    ny = drops[base + 1];
                    oz = drops[base + 2];
                } else {
                    drops[base] = nx;
                    drops[base + 1] = ny;
                    drops[base + 2] = oz;
                }

                let pbase = i * 6;

                posD[pbase] = nx - tiltX;
                posD[pbase + 1] = ny + streakLen;
                posD[pbase + 2] = oz - tiltZ;

                posD[pbase + 3] = nx;
                posD[pbase + 4] = ny;
                posD[pbase + 5] = oz;

                let fade;

                if (i < fadeEdgeStart) {
                    fade = 1.0;
                } else {
                    fade =
                        (renderRainAmount - i * invN) *
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
                    visD[i];

                let abase = i * 2;

                let aboveGround = ny - drops[base + 5],
                    fadeTop = Math.min(Math.max((aboveGround + streakLen) / groundFadeDist, 0), 1),
                    fadeBot = Math.min(Math.max(aboveGround / groundFadeDist, 0), 1);

                alpD[abase] = baseAlpha * fadeTop;
                alpD[abase + 1] =
                    baseAlpha * 0.25 * fadeBot;
            }

            if (
                ne &&
                ne.raycastEnvironmentAny &&
                activeDrops > 0
            ) {
                rcCursor =
                    rcCursor % activeDrops;

                for (
                    let r = 0; r < raycastPerFrame; r++
                ) {
                    let i = rcCursor;

                    rcCursor =
                        (rcCursor + 1) %
                        activeDrops;

                    let rbase = i * 6;

                    let bx = drops[rbase],
                        by =
                        drops[rbase + 1] +
                        streakLen * 0.5,
                        yz = drops[rbase + 2];

                    let hit = false;

                    try {
                        hit = ne.raycastEnvironmentAny(
                            cx,
                            cy,
                            cz,
                            bx - cx,
                            by - cy,
                            yz - cz,
                            0
                        );
                    } catch (e) {}

                    visD[i] +=
                        ((hit ? 0.0 : 1.0) -
                            visD[i]) *
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

            gl.viewport(
                0,
                0,
                rainCanvas.width,
                rainCanvas.height
            );

            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.enable(gl.BLEND);

            gl.blendFunc(
                gl.SRC_ALPHA,
                gl.ONE_MINUS_SRC_ALPHA
            );

            gl.useProgram(prog);

            gl.uniformMatrix4fv(
                locPV,
                false,
                cam.projectionViewMatrix
            );

            gl.uniform3f(
                locCam,
                cx,
                cy,
                cz
            );

            gl.uniform1f(
                locLight,
                sampleWorldLight()
            );

            gl.bindBuffer(
                gl.ARRAY_BUFFER,
                pb
            );

            gl.bufferSubData(
                gl.ARRAY_BUFFER,
                0,
                posD,
                0,
                activeDrops * 6
            );

            gl.bindBuffer(
                gl.ARRAY_BUFFER,
                ab
            );

            gl.bufferSubData(
                gl.ARRAY_BUFFER,
                0,
                alpD,
                0,
                uploadAlpCount * 2
            );

            gl.bindVertexArray(vao);

            gl.drawArrays(
                gl.LINES,
                0,
                activeDrops * 2
            );

            gl.bindVertexArray(null);
        }

        requestAnimationFrame(frame);
    })();

    var Q = [],
        Cc = [],
        $e = {},
        Be = {},
        Hn = {},
        D1 = () => {
            $e = {
                shadowMaps: {
                    value: [qr.depthTexture, jr[1].depthTexture]
                },
                folFadeEnd: gfxFolFade
            };
            for (let e in ws) {
                let o = ws[e];
                o.vert && (o.vert = o.vert.replace("#SHADOWS", Te.shadows ? 1 : 0)), o.frag && (o.frag = o.frag.replace("#SHADOWS", Te.shadows ? 1 : 0)), o.frag && (o.frag = gfxPatchShader(o.frag, e))
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
            Q[13] = Ge({
                vertex: ls.vert,
                fragment: ls.frag,
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
                globalUniforms: $e,
                transparent: !0,
                attributeLocations: t.foliage
            }), Q[14] = Ge({
                vertex: fs.vert,
                fragment: fs.frag,
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
                globalUniforms: $e,
                transparent: !0,
                attributeLocations: t.foliage
            }), Q[3] = Ge({
                vertex: us.vert,
                fragment: us.frag,
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
                globalUniforms: $e,
                attributeLocations: t.mesh,
                transparent: !0
            }), Q[4] = Ge({
                vertex: Nn.vert,
                fragment: Nn.frag,
                instanced: [{
                    name: "interiorlight",
                    size: 4
                }],
                globalUniforms: $e,
                attributeLocations: t.mesh
            }), Q[5] = Ge({
                vertex: ps.vert,
                fragment: ps.frag,
                globalUniforms: $e,
                attributeLocations: t.mesh
            }), Q[15] = Ge({
                vertex: ds.vert,
                fragment: ds.frag,
                globalUniforms: $e,
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
            }), Q[6] = Ge({
                vertex: Nn.vert,
                fragment: mc.frag,
                globalUniforms: $e,
                instanced: [{
                    name: "interiorlight",
                    size: 4
                }],
                attributeLocations: t.mesh
            }), Q[7] = Ge({
                vertex: ms.vert,
                fragment: ms.frag,
                instanced: [{
                    name: "color",
                    size: 4
                }],
                globalUniforms: $e,
                attributeLocations: t.mesh
            }), Q[10] = Ge({
                vertex: cs.vert,
                fragment: cs.frag,
                instanced: [{
                    name: "uvshift",
                    size: 4
                }, {
                    name: "shine",
                    size: 1
                }],
                globalUniforms: $e,
                attributeLocations: t.drop
            }), Q[8] = Ge({
                vertex: vs.vert,
                fragment: vs.frag,
                globalUniforms: $e,
                attributeLocations: t.mesh
            }), Q[9] = Ge({
                vertex: xs.vert,
                fragment: xs.frag,
                globalUniforms: $e,
                attributeLocations: t.mesh
            }), Q[12] = Ge({
                vertex: gs.vert,
                fragment: kc.frag,
                transparent: !0,
                uniforms: {
                    u_rain: {
                        value: 0
                    }
                },
                globalUniforms: $e,
                attributeLocations: t.mesh
            }), Q[20] = Ge({
                vertex: bs.vert,
                fragment: bs.frag,
                transparent: !0,
                cullFace: !1,
                globalUniforms: $e,
                attributeLocations: t.mesh
            }), Q[11] = Ge({
                vertex: gs.vert,
                fragment: yc.frag,
                cullFace: null,
                depthTest: !0,
                globalUniforms: $e,
                attributeLocations: t.mesh
            }), Q[1] = Ge({
                cullFace: null,
                vertex: Gn.vert,
                fragment: _c.frag,
                globalUniforms: $e,
                attributeLocations: t.mesh
            }), Q[2] = Ge({
                vertex: Gn.vert,
                fragment: Gn.frag,
                globalUniforms: $e,
                attributeLocations: t.mesh
            }), Q[16] = Ge({
                vertex: hs.vert,
                fragment: pc.frag,
                transparent: !0,
                depthWrite: !1,
                globalUniforms: $e,
                attributeLocations: t.particle
            }), Q[17] = Ge({
                vertex: hs.vert,
                fragment: hc.frag,
                transparent: !1,
                globalUniforms: $e,
                attributeLocations: t.particle
            }), Q[18] = Ge({
                vertex: Wn.vert,
                fragment: Wn.frag,
                transparent: !0,
                cullFace: null,
                depthWrite: !1,
                globalUniforms: $e,
                attributeLocations: t.ribbon
            }), Q[19] = Ge({
                vertex: Wn.vert,
                fragment: wc.frag,
                transparent: !0,
                cullFace: null,
                depthWrite: !1,
                globalUniforms: $e,
                attributeLocations: t.ribbon
            }), Q[32] = Ge({
                vertex: kr,
                fragment: xc.frag,
                depthWrite: !1,
                depthTest: !1,
                globalUniforms: $e,
                uniforms: {
                    inputA: {
                        value: null
                    }
                },
                attributeLocations: t.post
            }), Q[30] = Ge({
                vertex: kr,
                fragment: gc.frag,
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
                globalUniforms: $e,
                attributeLocations: t.post
            }), Q[31] = Ge({
                vertex: kr,
                fragment: vc.frag,
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
                globalUniforms: $e,
                attributeLocations: t.post
            }), Q[33] = Ge({
                vertex: kr,
                fragment: bc.frag,
                depthWrite: !1,
                depthTest: !1,
                globalUniforms: $e,
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
            }), Q[34] = Ge({
                vertex: kr,
                fragment: Mc.frag,
                uniforms: {
                    seed: {
                        value: Date.now() % 1e3
                    }
                },
                attributeLocations: ["position", "uv"]
            }), Q[35] = Ge({
                vertex: kr,
                fragment: ssaoShader.frag,
                depthWrite: !1,
                depthTest: !1,
                globalUniforms: $e,
                uniforms: {
                    inputA: {
                        value: null
                    }
                },
                attributeLocations: t.post
            }), Q[36] = Ge({
                vertex: kr,
                fragment: ssaoBlurShader.frag,
                depthWrite: !1,
                depthTest: !1,
                globalUniforms: $e,
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
            }), Q[37] = Ge({
                vertex: kr,
                fragment: ssaoTemporalShader.frag,
                depthWrite: !1,
                depthTest: !1,
                globalUniforms: $e,
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
            }), Q[38] = Ge({
                vertex: kr,
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
            }), Q[39] = Ge({
                vertex: kr,
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
            }), Q[40] = Ge({
                vertex: kr,
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
            }), Q[41] = Ge({
                vertex: kr,
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
            }), Q[42] = Ge({
                vertex: kr,
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
            }), Q[45] = Ge({
                vertex: kr,
                fragment: godRayFrag,
                depthWrite: !1,
                depthTest: !1,
                globalUniforms: $e,
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
            }), Q[46] = Ge({
                vertex: fireflyVert,
                fragment: fireflyFrag,
                cullFace: null,
                depthTest: !0,
                depthWrite: !1,
                transparent: !0,
                globalUniforms: $e,
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
            }), Q[47] = Ge({
                vertex: kr,
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
            }), Q[48] = Ge({
                vertex: kr,
                fragment: rainMistFrag,
                depthWrite: !1,
                depthTest: !1,
                globalUniforms: $e,
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
            }), Sn(Q[46], v.ONE, v.ONE), Sn(Q[13], v.SRC_ALPHA, v.ONE_MINUS_SRC_ALPHA, v.ZERO, v.ZERO), Sn(Q[14], v.SRC_ALPHA, v.ONE_MINUS_SRC_ALPHA, v.ZERO, v.ZERO), b_(Q, $e), Sn(Q[18], v.ONE, v.ONE_MINUS_SRC_ALPHA), Sn(Q[16], v.ONE, v.ONE_MINUS_SRC_ALPHA), Sn(Q[15], v.ONE, v.ONE_MINUS_SRC_ALPHA), Cc.push(3, 4, 6, 7, 10, 15, 5)
        },
        b_ = (t, e) => {
            let o = t[4].program,
                r = ["Environment", "Camera", "Pointlights", "Shadows", "Circle", "Screen", "Sky", "MeshTerrain", "Water"],
                n = [o, o, o, o, o, t[32].program, t[11].program, t[8].program, t[20].program],
                i = [!0, !0, !0, !0, !0, !0, !0, !1, !1],
                s = [];
            for (let a = 0; a < r.length; ++a) {
                let c = r[a],
                    l = A1(n[a], c, a),
                    f = c.toLowerCase();
                if (Hn[f] = l, s.push(l), i[a]) {
                    let d = Or(l);
                    nr(d), Be[f] = d
                }
            }
            for (let a = 0; a < t.length; ++a) {
                let c = t[a];
                c && (Ou(c, e), Nu(c, s))
            }
        },
        L1, Ms = (t, e) => {
            if (t !== L1 || e) {
                let o = Be.camera.data;
                L1 = t, xo(o.cameraPosition, t.worldPosition, 0), xo(o.viewMatrix, t.viewMatrix, 0), xo(o.projectionMatrix, t.projectionMatrix, 0), xo(o.projectionViewMatrix, t.projectionViewMatrix, 0), Lt(Be.camera)
            }
        },
        E1 = (t, e) => {
            ys(Be.screen.data.resolution, t, e), Lt(Be.screen)
        };
    var sr = [],
        T1 = (10 + 1) * 6,
        ir = new Uint32Array(T1);
    for (let t = 0, e = 0; t < T1; t += 6, e += 2) ir[t + 0] = e, ir[t + 1] = e + 1, ir[t + 2] = e + 3, ir[t + 3] = e, ir[t + 4] = e + 3, ir[t + 5] = e + 2;
    var ks = new Map,
        I1 = (t, e, o, r, n, i) => {
            let s = Oa.get(t),
                a = ks.get(s.steps),
                c;
            return !a || a.length === 0 ? c = new Ac(s) : c = a.pop(), c.reset(s, e, o, r, n, i), sr.push(c), c
        },
        z1 = (t, e) => {
            for (let o = 0; o < sr.length; o++)
                if (sr[o].tick(t, e), sr[o].remove) {
                    let r = sr.splice(o--, 1)[0];
                    __(r)
                }
        },
        __ = t => {
            ks.has(t.maxSteps) || ks.set(t.maxSteps, []), ks.get(t.maxSteps).push(t), t.onCache()
        };
    var V1 = () => {
            for (let t = 0; t < sr.length; ++t) {
                let e = sr[t];
                e.mesh.transform.visible && qt(e.mesh, Q[e.mesh.program])
            }
        },
        Ac = class {
            constructor(e) {
                this.maxSteps = e.steps, this.stepTimer = new uo(0, 1), this.duration = new uo(0, 1), this.remove = !1, this.a = [0, 0, 0], this.b = [0, 0, 0], this.timeoutSteps = 0;
                let o = this.maxSteps + 1;
                this.uv = new Float32Array(o * 4), this.positions = new Float32Array(o * 6);
                for (let r = 0, n = 0; r < o; ++r, n += 4) this.uv[n] = r / this.maxSteps, this.uv[n + 2] = r / this.maxSteps, this.uv[n + 1] = 1, this.uv[n + 3] = 0;
                this.geometry = at({
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
                        data: ir.subarray(0, 6 * this.maxSteps)
                    }
                }), Bi(this.geometry, this.geometry.attributes.uv, o), this.mesh = Vt(this.geometry, 19, v.TRIANGLES), this.mesh.uniformData.offset = [0, 0], this.waitingForTexture = !1, this.parent = null
            }
            reset(e, o, r, n, i, s) {
                this.stepTimer.reset(0, e.interval), this.duration.reset(s, i), this.currentStep = 0, this.a = Ve(this.a, r), this.b = Ve(this.b, n), this.mesh.uniformData.offset[1] = 1 / (this.maxSteps + 1), this.remove = !1, this.timeoutSteps = 0, this.geometry.drawRangeCount = 0, this.mesh.uniformData.colStart = e.colStart, this.mesh.uniformData.colEnd = e.colEnd, e.texture > 0 ? (this.waitingForTexture = !0, this.mesh.program = 19, Ct(e.texture, a => {
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
                    this.mesh.transform.visible && this.timeoutSteps == 0 && (this.positions.set(No(He, this.a, this.parent.worldMatrix), 0), this.positions.set(No(He, this.b, this.parent.worldMatrix), 3))
                }
                this.stepTimer.done(o) && (this.stepTimer.reset(o), this.step()), kt(this.geometry, this.geometry.attributes.position);
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
    var Fs = [],
        ar = 1e3,
        M_ = 500,
        Wr = M_,
        Vo = [],
        U1 = () => {
            S_();
            for (let t = 0; t < ar; ++t) Fs.push({
                pos: [-0, -0, -0],
                vel: [-0, -0, -0],
                info: Xi.get(1),
                distance: 0,
                start: 0,
                end: 1.01,
                forced: !1,
                scaleRota: [0, 0, 0, 0],
                infoVec: [0, 0, 0, 0],
                progVec: [0, 0]
            })
        },
        Cs = (t, e, o, r) => {
            let n = e,
                i = o,
                s = !0,
                a = o;
            for (; e - o < 0;) s ? t[a].distance > t[e].distance ? (R1(t, a, e), a = e, o--, s = !s) : e++ : t[a].distance >= t[o].distance ? o-- : (R1(t, a, o), e++, a = o, s = !s);
            a - 1 > n && Cs(t, n, a - 1, r), a + 1 < i && Cs(t, a + 1, i, r)
        },
        R1 = (t, e, o) => {
            let r = t[e];
            t[e] = t[o], t[o] = r
        },
        k_ = (t, e, o) => {
            let r = [
                    [],
                    []
                ],
                n = 0,
                i = 0;
            for (; n < Vo.length;) {
                let s = Vo[n];
                if (s.start < 0 || s.end > t) {
                    if (Vo[i] = s, i++, s.pos[0] > -1e3) {
                        let a = s.pos,
                            c = s.vel,
                            l = s.info.acc;
                        if (a[0] += (c[0] += l[0] * e) * e, a[1] += (c[1] += l[1] * e) * e, a[2] += (c[2] += l[2] * e) * e, s.info.friction > 0) {
                            let f = 1 - s.info.friction;
                            c[0] *= f, c[1] *= f, c[2] *= f
                        }
                        if (s.distance = xt(o.frustum[5], a) + o.frustumConstants[5], s.distance < ac && s.distance > 0) {
                            let f = s.start < 0 ? (Math.sin(t / s.info.duration) + 1) * .5 : (t - s.start) / s.info.duration;
                            s.progVec[0] = f, s.progVec[1] = Dr[s.info.interp](f), r[s.info.blend].push(s)
                        }
                    }
                } else Wr += s.forced ? 1 : 0, Fs.push(s);
                ++n
            }
            return Vo.length = i, Cs(r[0], 0, r[0].length - 1, r[0].length), Cs(r[1], 0, r[1].length - 1, r[1].length), r
        },
        F_ = t => {
            for (let e = 0; e < 2; ++e) A_(t[e], $n[e]), C_(t[e], $n[e], cr[e])
        },
        C_ = (t, e, o) => {
            t.length > 0 ? (o.transform.visible = !0, ju(e, 0, t.length), kt(e, e.attributes.position), kt(e, e.attributes.info), kt(e, e.attributes.progress), kt(e, e.attributes.scaleRota), kt(e, e.attributes.colStart), kt(e, e.attributes.colEnd)) : o.transform.visible = !1
        },
        A_ = (t, e) => {
            let o = e.attributes.position.data,
                r = e.attributes.progress.data,
                n = e.attributes.info.data,
                i = e.attributes.scaleRota.data,
                s = e.attributes.colStart.data,
                a = e.attributes.colEnd.data;
            for (let c = 0; c < t.length; ++c) {
                let l = t[c],
                    f = l.pos,
                    d = l.infoVec,
                    u = l.progVec,
                    m = l.scaleRota,
                    h = l.info.colStart,
                    g = l.info.colEnd,
                    M = c * 2,
                    b = c * 3,
                    _ = c * 4;
                o[b] = f[0], o[b + 1] = f[1], o[b + 2] = f[2], n[_] = d[0], n[_ + 1] = d[1], n[_ + 2] = d[2], n[_ + 3] = d[3], r[M] = u[0], r[M + 1] = u[1], i[_] = m[0], i[_ + 1] = m[1], i[_ + 2] = m[2], i[_ + 3] = m[3], s[_] = h[0], s[_ + 1] = h[1], s[_ + 2] = h[2], s[_ + 3] = h[3], a[_] = g[0], a[_ + 1] = g[1], a[_ + 2] = g[2], a[_ + 3] = g[3]
            }
        },
        B1 = t => {
            let e = k_(Hi, t, he);
            F_(e)
        },
        zo = [0, 0, 0],
        Ro = (t, e, o = 0, r = 0, n = 0, i = 0, s = 0, a = 0, c = !1) => {
            if (e ? Wo(zo, o, r, n, e) : re(zo, o, r, n), c) {
                if (Wr <= 0) return
            } else {
                if (xt(he.frustum[0], zo) + he.frustumConstants[0] < 0 || xt(he.frustum[1], zo) + he.frustumConstants[1] < 0) return;
                let h = xt(he.frustum[5], zo) + he.frustumConstants[5];
                if (h < 0 || h * 10 > Fs.length) return
            }
            let l = Fs.pop();
            if (!l) {
                let h = Vo.length - 1;
                for (; h >= 0 && Vo[h].forced;) --h;
                h >= 0 && (l = Vo.splice(h, 1)[0])
            }
            if (!l) return;
            let f = 1;
            if (e) {
                let h = e[0],
                    g = e[1],
                    M = e[2];
                f = Math.sqrt(h * h + g * g + M * M), Pi(l.vel, i, s, a, e)
            } else re(l.vel, i, s, a);
            l.pos[0] = zo[0], l.pos[1] = zo[1], l.pos[2] = zo[2];
            let d = Xi.get(t);
            l.info = d, l.start = c ? -1 : Hi, l.end = l.start + l.info.duration;
            let u = Math.random() * d.randomRota,
                m = u + d.rota;
            return Math.random() < .5 && (u *= -1, m *= -1), wr(l.scaleRota, d.scaleStart * f, d.scaleEnd * f, u, m), wr(l.infoVec, d.idLoop, 0, d.idStart, d.idEnd + 1), ys(l.progVec, 0, 0), l.forced = c, Vo.push(l), c && Wr--, l
        },
        cr = [],
        $n = [],
        S_ = () => {
            for (let t = 0; t < 2; ++t) $n[t] = at({
                position: {
                    size: 3,
                    data: new Float32Array(3 * ar)
                },
                progress: {
                    size: 2,
                    data: new Float32Array(2 * ar)
                },
                info: {
                    size: 4,
                    data: new Float32Array(4 * ar)
                },
                scaleRota: {
                    size: 4,
                    data: new Float32Array(4 * ar)
                },
                colStart: {
                    size: 4,
                    data: new Float32Array(4 * ar)
                },
                colEnd: {
                    size: 4,
                    data: new Float32Array(4 * ar)
                }
            });
            cr[0] = Vt($n[0], 17, v.POINTS), cr[1] = Vt($n[1], 16, v.POINTS), Ct(1215, t => {
                lt("particleDiffuse", t, 0, Q[17]), lt("particleDiffuse", t, 0, Q[16])
            })
        };
    var j1 = () => {
            let t = Q[17];
            t.active && cr[0].transform.visible && qt(cr[0], t)
        },
        q1 = () => {
            let t = Q[16];
            t.active && cr[1].transform.visible && qt(cr[1], t)
        };
    var As = [],
        Ss, Yn, O1, N1 = () => {
            Yn = Be.pointlights.data.lightCols, Ss = Be.pointlights.data.lightPos, O1 = Be.pointlights.data.lightCount
        },
        W1 = t => {
            let e = [0, 0, 0],
                o = [];
            for (let n = 0, i = As.length; n < i; ++n) {
                let s = As[n];
                s.remove ? (As.splice(n, 1), --n, --i) : s.transform.visible && (re(e, s.transform.worldMatrix[12], s.transform.worldMatrix[13], s.transform.worldMatrix[14]), s.distance = bn(he.worldPosition, e), s.distance < lc && o.push(s))
            }
            o.sort((n, i) => n.distance - i.distance);
            let r = Math.min(o.length, 16);
            for (let n = 0; n < r; ++n) {
                let i = o[n],
                    s = n * 4,
                    a = n * 3;
                Ss[a] = i.transform.worldMatrix[12], Ss[a + 1] = i.transform.worldMatrix[13], Ss[a + 2] = i.transform.worldMatrix[14], Yn[s] = i.value[0], Yn[s + 1] = i.value[1], Yn[s + 2] = i.value[2], Yn[s + 3] = i.value[3]
            }
            O1[0] = r, Lt(Be.pointlights)
        },
        G1 = (t, e, o) => {
            let r = {
                transform: o,
                distance: 0,
                remove: !1,
                value: [...t, e]
            };
            return As.push(r), r
        };
    var lr = [_n(1, 1), _n(1, 1)],
        Gr = !1,
        H1 = 0,
        $1 = t => {
            H1 = t
        },
        Xn = t => {
            Gr = t
        },
        Y1 = t => {
            let o = [Bn, jn],
                r = [5, 20];
            for (let n = 0; n < lr.length; ++n) {
                let i = lr[n],
                    s = o[n],
                    a = [0, 0, 0];
                Pi(a, 1, 1, 1, i.transform.worldMatrix);
                let c = [...ot.position],
                    l = r[n];
                for (let m = 0; m < 3; ++m) c[m] = Math.floor(c[m] / l) * l;
                let f = (Math.abs(Math.cos(-1)) + Math.abs(Math.sin(-1))) * s,
                    d = s,
                    u = [d, f, f];
                for (let m = 0; m < 3; ++m) {
                    let h = u[m] * 2 / H1,
                        g = c[m] * a[m];
                    g = g - g % h, g = g / a[m], c[m] = g
                }
                uu(i.transform.position, c) || (Ve(i.transform.position, c), re(i.transform.rotation, -1, 0, 0), i.far = f, i.near = -1e3, gu(i, -d, d, -f, f), Ii(i, !0), zi(i), Gr = !0)
            }
            if (Gr) {
                let n = Be.shadows.data;
                xo(n.shadowRange, [Bn, ic, jn], 0), xo(n.shadowPVMatrix, lr[0].projectionViewMatrix, 0), xo(n.shadowPVMatrix, lr[1].projectionViewMatrix, 16), Lt(Be.shadows)
            }
            return Gr ? 1 : 0
        };
    var Sc = new Map,
        Ps = [],
        Ls = [],
        Ds = [],
        Es = [],
        Ts = [],
        Is = (t, e, o, r) => {
            let n = t << 1 | e;
            if (n = n << 1 | o, n = n << 1 | r, Sc.has(n)) return uc(Sc.get(n));
            {
                let i = D_(t, e, o, r);
                return Sc.set(n, i), uc(i)
            }
        },
        Q1 = (t, e, o, r) => {
            t ? e ? Ls.push(r) : Ds.push(r) : Ps.push(r), o === 2 ? (Xn(!0), Es.push(r)) : o === 1 && (Xn(!0), Ts.push(r))
        },
        D_ = (t, e, o, r) => {
            let n = ho.get(t),
                i = Cc[n.shader],
                s = Q[i],
                a = Te.shadows && e ? n.texture ? 1 : 2 : 0,
                c = kp(i, v.TRIANGLES, s.instancedAttributes, a, o, r);
            c.cullFace = n.cull ? v.BACK : v.NONE;
            let l = !1,
                f = !1;
            return n.texture ? Ct(n.texture, d => {
                f = !0, c.uniformData.diffuse = d, l && Q1(s.transparent, s.depthWrite, Te.shadows && e ? o ? 2 : 1 : 0, c)
            }) : f = !0, So(n.geometry, d => {
                Fp(c, d), l = !0, f && Q1(s.transparent, s.depthWrite, Te.shadows && e ? o ? 2 : 1 : 0, c)
            }), c
        };
    var Z1 = [{
        fun: (t, e, o) => {
            Ro(e[0], t.transform.worldMatrix, e[1], e[2], e[3], e[4], e[5], e[6], !1)
        }
    }, {
        fun: (t, e, o) => {
            let r = e[1],
                n = Math.PI * 2 / r;
            for (let i = 0; i < r; ++i) {
                let s = Math.sin(i * n),
                    a = Math.cos(i * n);
                Ro(e[0], t.transform.worldMatrix, s * e[6] + e[2], e[3], a * e[6] + e[4], s * e[5], 0, a * e[5], !1)
            }
        }
    }, {
        fun: (t, e, o) => {
            for (let r = 0; r < e[1]; ++r) Ro(e[0], t.transform.worldMatrix, e[2], e[3], e[4], dt(e[5], e[6]), dt(e[7], e[8]), dt(e[9], e[10]), !1)
        }
    }, {
        fun: (t, e, o) => {
            tc(e[0], t.transform, t.priority, !1, 1)
        }
    }];
    var Lc = [{
            create: (t, e) => G1([e[0], e[1], e[2]], e[3], t.transform),
            tick: (t, e, o, r, n) => {},
            end: (t, e, o) => {
                o.remove = !0
            },
            show: (t, e, o) => {},
            hide: (t, e, o) => {},
            modifiers: [(t, e, o, r, n) => {
                let i = Dr[e[2]](n);
                o.value[3] = e[0] + i * (e[1] - e[0])
            }]
        }, {
            create: (t, e) => [0, 0, 0, 0],
            tick: (t, e, o, r, n) => {
                o[0] >= e[1] && (o[0] = 0, Ro(e[0], t.transform.worldMatrix, dt(e[2], e[3]) + o[1], dt(e[4], e[5]) + o[2], dt(e[6], e[7]) + o[3], dt(e[8], e[9]), dt(e[10], e[11]), dt(e[12], e[13]), !1)), o[0] += ~~(r * 1e3)
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
                if (Wr > 0) return Ro(e[0], t.transform.worldMatrix, 0, 0, 0, 0, 0, 0, !0)
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
                Wo(o.pos, Math.sin(i) * e[0], 0, Math.cos(i) * e[0], t.transform.worldMatrix)
            }, (t, e, o, r, n) => {
                Wo(o.pos, e[0], e[1], e[2], t.transform.worldMatrix)
            }]
        }, {
            create: (t, e) => tc(e[0], t.transform, t.priority, !0, 1),
            tick: (t, e, o, r, n) => {},
            end: (t, e, o) => {
                o.stop()
            },
            show: (t, e, o) => {},
            hide: (t, e, o) => {},
            modifiers: []
        }, {
            create: (t, e) => {
                let o = Is(e[0], !1, !0, !0);
                return re(o.position, e[1], e[2], e[3]), re(o.scale, e[4], e[5], e[6]), re(o.rotation, e[7], e[8], e[9]), jt(o, t.transform), tt(o, !1), o
            },
            tick: (t, e, o, r, n) => {},
            end: (t, e, o) => {
                ss(o.data.multi, o)
            },
            show: (t, e, o) => {
                o.visible = !0
            },
            hide: (t, e, o) => {
                o.visible = !1
            },
            modifiers: [(t, e, o, r, n) => {
                let i = e[1] * n;
                o.rotation[1] = e[2] + i, o.position[0] = Math.sin(i) * e[0], o.position[2] = Math.cos(i) * e[0], o.matrixNeedsUpdate = !0, tt(o, !1)
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
                let i = Dr[e[6]](n);
                o.scale[0] = e[0] + i * (e[3] - e[0]), o.scale[1] = e[1] + i * (e[4] - e[1]), o.scale[2] = e[2] + i * (e[5] - e[2]), o.matrixNeedsUpdate = !0
            }, (t, e, o, r, n) => {
                let i = Dr[e[6]](n);
                o.rotation[0] = e[0] + i * (e[3] - e[0]), o.rotation[1] = e[1] + i * (e[4] - e[1]), o.rotation[2] = e[2] + i * (e[5] - e[2]), o.matrixNeedsUpdate = !0
            }]
        }, {
            create: (t, e) => I1(e[0], t.transform, [e[1], e[2], e[3]], [e[4], e[5], e[6]], 0, 0),
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
                if (Wr < e[1]) return;
                let o = [];
                for (let r = 0; r < e[1]; ++r) o.push(Ro(e[0], t.transform.worldMatrix, 0, 0, 0, 0, 0, 0, !0));
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
                        d = s * l + c;
                    Wo(f.pos, Math.sin(d) * a, e[2], Math.cos(d) * a, t.transform.worldMatrix)
                }
            }]
        }, {
            create: (t, e) => [0, 0],
            tick: (t, e, o, r, n) => {
                if (o[0] >= e[6]) {
                    o[0] = 0;
                    let i = e[1],
                        s = Math.PI * 2 / i;
                    for (let a = 0; a < i; ++a) Ro(e[0], t.transform.worldMatrix, e[2], e[3], e[4], Math.sin(a * s + o[1]) * e[5], 0, Math.cos(a * s + o[1]) * e[5], !1)
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
                    let i = St();
                    re(i.rotation, dt(e[8], e[9]), dt(e[10], e[11]), dt(e[12], e[13])), Pc(e[0], i, t.priority, !0), Wo(i.position, dt(e[2], e[3]), dt(e[4], e[5]), dt(e[6], e[7]), t.transform.worldMatrix), Ei(i)
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
                    let a = ne.raycastEnvironmentClosest(t.transform.position[0], t.transform.position[1], t.transform.position[2], o * i, r * i, n * i);
                    a < 1 && (s = i * a)
                }
                return [o, r, n, s]
            },
            tick: (t, e, o, r, n) => {
                if (e[1] && (o[3] -= r, o[3] <= 0)) {
                    t.done = !0;
                    return
                }
                t.transform.position[0] += o[0] * r, t.transform.position[1] += o[1] * r, t.transform.position[2] += o[2] * r, t.transform.matrixNeedsUpdate = !0, tt(t.transform, !1)
            },
            end: (t, e, o) => {},
            show: (t, e, o) => {},
            hide: (t, e, o) => {},
            modifiers: []
        }, {
            create: (t, e) => [],
            tick: (t, e, o, r, n) => {},
            end: (t, e, o) => {
                let r = St();
                Ve(r.position, t.transform.position), Ve(r.rotation, t.transform.rotation), Pc(e[0], r, t.priority, !0), Ei(r)
            },
            show: (t, e, o) => {},
            hide: (t, e, o) => {},
            modifiers: []
        }],
        Pc, J1 = t => {
            Pc = t
        };
    var io = [],
        Hr = [],
        $r = [],
        Dc = [],
        K1 = (t, e) => {
            let o = sc;
            R_(t, e, o), U_(t, e, o), B_(t, e, o), j_(t, e), q_(t, e), O_(t, e);
            for (let r = 0; r < io.length; ++r) {
                let n = io[r],
                    i = n.visible !== n.transform.visible;
                if (n.visible = n.transform.visible, n.visible)
                    for (let s = 0; s < n.info.events.length; ++s) {
                        let a = n.info.events[s];
                        (n.loops === 0 || a.fraction > 0) && n.fractionLast <= a.fraction && n.fractionNow > a.fraction && Z1[a.id].fun(n, a.params, t)
                    }
                for (let s = 0; s < n.info.periods.length; ++s) {
                    let a = n.info.periods[s],
                        c = Lc[a.id],
                        l = n.periodData[s] !== void 0,
                        f = n.fractionNow >= a.fractionStart && n.fractionNow <= a.fractionEnd,
                        d = !1;
                    if (n.visible && f && !l && n.fractionLast <= a.fractionStart && (l = (n.periodData[s] = c.create(n, a.params, t)) !== void 0, d = l), f && l && (i && (n.visible ? c.show(n, a.params, n.periodData[s]) : c.hide(n, a.params, n.periodData[s])), n.visible)) {
                        let u = n.periodData[s],
                            m = (n.fractionNow - a.fractionStart) / (a.fractionEnd - a.fractionStart);
                        c.tick(n, a.params, u, t, m);
                        for (let h = 0; h < a.modifiers.length; ++h) {
                            let g = a.modifiers[h];
                            (d || i || g.mode === 1) && c.modifiers[g.id](n, g.params, u, t, m)
                        }
                    }!f && l && (c.end(n, a.params, n.periodData[s]), n.periodData[s] = void 0)
                }
                n.visible && n.returnTransform && n.transform.parent === null && tt(n.transform, !1)
            }
        },
        Ec = [],
        eh = (t, e, o, r) => Ec.length > 0 ? I_(Ec.pop(), t, e, o, r) : T_(t, e, o, r),
        T_ = (t, e, o, r) => ({
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
        I_ = (t, e, o, r, n) => (t.info = e, t.priority = r, t.transform = o, t.returnTransform = n, t),
        z_ = t => (t.visible = !0, t.fractionNow = 0, t.fractionLast = 0, t.timeEnd = 0, t.periodData.length = 0, t.done = !1, t.loops = 0, t),
        Tc = t => {
            N_(t), t.returnTransform && _r(t.transform), Ec.push(z_(t))
        },
        V_ = (t, e, o, r) => {
            let n = Qi.get(t),
                i = eh(n, e, o, r);
            return io.push(i), Hr.push(i), i
        },
        Ic = (t, e, o, r) => {
            let n = Qi.get(t),
                i = eh(n, e, o, r);
            return io.push(i), $r.push(i), i
        };
    var R_ = (t, e, o) => {
            for (let r = 0; r < Hr.length; ++r) {
                let n = Hr[r];
                n.info.duration === 0 ? n.timeEnd === 0 ? (n.timeEnd = e + n.info.duration, n.fractionLast = 0, n.fractionNow = .999) : (n.fractionLast = 0, n.fractionNow = 1) : (n.timeEnd === 0 && (n.timeEnd = e + n.info.duration), n.fractionLast = n.fractionNow, n.fractionNow = Re(1 - (n.timeEnd - e) / n.info.duration, 0, 1))
            }
        },
        U_ = t => {
            for (let e = 0; e < $r.length; ++e) {
                let o = $r[e];
                o.fractionLast = o.fractionNow, o.fractionNow = (o.fractionNow + t / o.info.duration) % 1, o.fractionLast > o.fractionNow && (o.fractionLast = 0, o.loops++)
            }
        },
        B_ = (t, e, o) => {},
        j_ = (t, e, o) => {
            let r = Hr.length;
            for (; r--;) {
                let n = Hr[r];
                (n.fractionNow === 1 || n.done) && (Hr.splice(r, 1), io.splice(io.indexOf(n), 1), Tc(n))
            }
        },
        q_ = (t, e, o) => {
            let r = $r.length;
            for (; r--;) {
                let n = $r[r];
                n.done && ($r.splice(r, 1), io.splice(io.indexOf(n), 1), Tc(n))
            }
        },
        O_ = (t, e, o) => {
            let r = Dc.length;
            for (; r--;) {
                let n = Dc[r];
                n.done && (Dc.splice(r, 1), io.splice(io.indexOf(n), 1), Tc(n))
            }
        },
        N_ = t => {
            for (let e = 0; e < t.info.periods.length; ++e) {
                let o = t.info.periods[e],
                    r = Lc[o.id];
                t.periodData[e] !== void 0 && (r.end(t, o.params, t.periodData[e]), t.periodData[e] = void 0)
            }
        };
    J1(V_);
    var Yr = [0, 2, 2.3],
        Xr = [0, 0, 0];
    eo(Yr, Yr);
    var Oe = {},
        Rs = ["fog", "sun", "direct", "ambient", "skytop", "skymid", "skybot", "horizon", "water", "clouds"],
        Us = ["bloom"];
    for (let t = 0; t < Rs.length; ++t) Oe[Rs[t]] = [
        [.5, .5, .5],
        [.5, .5, .5],
        [.5, .5, .5]
    ];
    for (let t = 0; t < Us.length; ++t) Oe[Us[t]] = [0, 0, 0];
    var th = (t, e, o, r) => {
            $_(), Q_(t, o, e), Y_(), e > 0 && X_(e, r), Lt(Be.sky), Lt(Be.environment);
            let n = Be.environment.data;
            v.clearColor(n.fog[0], n.fog[1], n.fog[2], 1)
        },
        G_ = (t, e, o, r, n, i, s) => {
            let a = [0, 0, 0],
                c = [0, 0, 0];
            br(a, e, o, i), br(c, r, n, i), br(t, a, c, s)
        },
        H_ = (t, e, o, r, n, i) => {
            let s = En(n, t, e),
                a = En(n, o, r);
            return En(i, s, a)
        },
        so = (t, e, o, r, n) => {
            let i = [0, 0, 0],
                s = [0, 0, 0];
            oo(i, o, 1 - n), oo(s, r, n), t[e] = i[0] + s[0], t[e + 1] = i[1] + s[1], t[e + 2] = i[2] + s[2]
        },
        $_ = () => {
            let t = ot.position[0],
                e = ot.position[2],
                o = t,
                r = e,
                n = t + 32,
                i = e + 32,
                s = Rr.get(ne.getEnvironmentId(o, r)),
                a = Rr.get(ne.getEnvironmentId(n, r)),
                c = Rr.get(ne.getEnvironmentId(o, i)),
                l = Rr.get(ne.getEnvironmentId(n, i));
            if (!s || !a || !c || !l) return;
            let f = t / 32 % 1,
                d = e / 32 % 1;
            for (let u = 0; u < Rs.length; ++u) {
                let m = Rs[u];
                for (let h = 0; h < 3; ++h) G_(Oe[m][h], s[m][h], a[m][h], c[m][h], l[m][h], f, d)
            }
            for (let u = 0; u < Us.length; ++u) {
                let m = Us[u];
                for (let h = 0; h < 3; ++h) Oe[m][h] = H_(s[m][h], a[m][h], c[m][h], l[m][h], f, d)
            }
        },
        Y_ = () => {
            let t = Be.environment.data.watercolors;
            for (let e = 0; e < 9; ++e) t[e] = Oe.water[Math.floor(e / 3)][e % 3]
        },
        X_ = (t, e) => {
            let o = Be.environment.data.worldlight,
                r = [0, 0, 0],
                n = Math.max(0, 1 - t / 80),
                i = Math.min(1, 1 - n);
            so(r, 0, Oe.water[1], Oe.water[2], i);
            let s = [0, 0, 0];
            s[0] = (o[0] + o[3]) * r[0] * 1.5, s[1] = (o[1] + o[4]) * r[1] * 1.5, s[2] = (o[2] + o[5]) * r[2] * 1.5;
            let a = Be.sky.data.skycolors,
                c = Be.sky.data.suncolor,
                l = Be.environment.data.worldlight,
                f = Be.environment.data.fog,
                d = Math.max(.2, .5 * n),
                u = Math.min(.4, Math.max(.1, .5 * n)),
                m = Math.max(.3, .7 * n);
            for (let h = 0; h < 15; ++h) a[h] = d * s[h % 3];
            re(f, d * s[0], d * s[1], d * s[2]), Ve(c, f);
            for (let h = 0; h < 9; ++h) Be.environment.data.watercolors[h] = u;
            for (let h = 0; h < 6; ++h) l[h] = m * s[h % 3]
        },
        zs = 0,
        bo = 1,
        Vs = 2,
        Bs = [{
            from: bo,
            to: zs,
            start: 0,
            end: 0,
            dur: 0
        }, {
            from: zs,
            to: zs,
            start: 0,
            end: 0,
            dur: 0
        }, {
            from: zs,
            to: bo,
            start: 0,
            end: 0,
            dur: 0
        }, {
            from: bo,
            to: bo,
            start: 0,
            end: 0,
            dur: 0
        }, {
            from: bo,
            to: Vs,
            start: 0,
            end: 0,
            dur: 0
        }, {
            from: Vs,
            to: Vs,
            start: 0,
            end: 0,
            dur: 0
        }, {
            from: Vs,
            to: bo,
            start: 0,
            end: 0,
            dur: 0
        }, {
            from: bo,
            to: bo,
            start: 0,
            end: 0,
            dur: 0
        }],
        oh = 0;
    Bs.forEach(t => {
        let e = t.from !== t.to,
            o = !e && t.from !== bo;
        e ? t.dur = .5 : o ? t.dur = 5 : t.dur = 1.5, oh += t.dur
    });
    var zc = 0;
    Bs.forEach(t => {
        t.start = zc, zc = t.end = zc + 1 / oh * t.dur
    });
    var Q_ = (t, e, o) => {
        t = Re(t, 0, 1);
        let r = .5,
            n = 0,
            i = 0;
        for (let c = 0; c < Bs.length; ++c) {
            let l = Bs[c];
            if (l.end >= t) {
                r = Dn(l.start, l.end, t), n = l.from, i = l.to;
                break
            }
        }
        let s = Be.sky.data;
        gfe.simpleSky && (Oe.skybot = Oe.skymid, Oe.horizon = Oe.skymid);
        so(s.skycolors, 0, Oe.skytop[n], Oe.skytop[i], r), so(s.skycolors, 3, Oe.skymid[n], Oe.skymid[i], r), so(s.skycolors, 6, Oe.skybot[n], Oe.skybot[i], r), so(s.skycolors, 9, Oe.horizon[n], Oe.horizon[i], r), so(s.skycolors, 12, Oe.clouds[n], Oe.clouds[i], r), so(s.suncolor, 0, Oe.sun[n], Oe.sun[i], r), Ve(Xr, Yr), Xr[1] = Math.abs(Math.sin(t * 6.282)), eo(Xr, Xr);
        updateEnvironment(t, e, o, r, n, i, s)
    };
    var Z_ = [],
        J_ = [],
        nh = (t, e) => {
            if (Je === void 0 || Je.suspended) return;
            let o = Je.currentTime,
                r = Na.get(ne.getAreaId(ot.position[0], ot.position[2])),
                i = t > .5 ? r.ambientnight : r.ambientday,
                s = 5;
            e > 0 && (i = 167, s = .5), rh(Z_, o, s, i, !1), rh(J_, o, 5, r.music, !0)
        },
        rh = (t, e, o, r, n) => {
            let i = !1;
            for (let s = t.length - 1; s >= 0; --s) {
                let a = t[s],
                    c = a.sound,
                    l = c.gain.gain;
                a.id === r && !c.ended ? (i = !0, a.fade !== 1 && (a.fade = 1, l.setTargetAtTime(1, e, o))) : l.value < .02 || c.ended ? (c.stop(), t.splice(s, 1)) : a.fade !== 0 && (a.fade = 0, l.setTargetAtTime(0, e, a.fadeDuration))
            }
            if (!i && r !== 0) {
                let s = n ? pp(r, 3) : mp(r, 2);
                s && (s.gain.gain.setValueAtTime(0, e), t.push({
                    id: r,
                    sound: s,
                    fade: 0,
                    fadeDuration: o
                }))
            }
        };
    var Qn = [0, 0, 0, 0],
        ih = (t, e, o, r) => {
            if (e > 0) {
                let n = Be.environment.data.fog;
                Qn[0] = n[0], Qn[1] = n[1], Qn[2] = n[2], Qn[3] = .5, r.add(33), Q[33].uniforms.warp.value = .3, Q[31].uniforms.amount.value = Math.min(3, Math.max(.3, e / 10))
            }
            Q[33].uniforms.tint.value = Qn
        };
    var sh = () => {},
        Vc = 0;
    var ah = (t, e, o) => {
        let r = timeOfDay((e / 3600 + .9) % 1);
        r < .7 ? r = Dn(0, .7, r) * .4 : r = .4 + Dn(.7, 1, r) * .6, th(r, Vc, e, o), ih(r, Vc, e, o), nh(r, Vc)
    };
    var dD = Math.PI * 2,
        uD = Math.PI * 3;
    var Zn = (t, e, o, r) => (At(ft, r, o), At(He, e, o), ro(ft, ft, He), eo(t, ft));
    var ch = t => {
        let e = Math.atan2(t[0], t[1]);
        return e < 0 && (e += 2 * Math.PI), e
    };
    var js = (t, e, o, r, n, i) => {
        At(He, e, t), At(ft, o, t), ro(Wi, He, ft);
        let s = xt(n, Wi),
            a;
        if (s > 0) {
            if (!i) return 1 / 0;
            a = 1
        } else if (s < 0) a = -1, s = -s;
        else return 1 / 0;
        At(Qt, r, t);
        let c = a * xt(n, ro(ft, Qt, ft));
        if (c < 0) return 1 / 0;
        let l = a * xt(n, ro(He, He, Qt));
        if (l < 0 || c + l > s) return 1 / 0;
        let f = -a * xt(Qt, Wi);
        return f < 0 ? 1 / 0 : f / s
    };
    var lh = (t, e, o, r) => {
        let n = 0,
            i = 0,
            s = 1;
        e.length > 2 && (n = r.findIndex(f => f >= o), n < 0 && (n = r.length), i = n > 0 ? r[n - 1] : 0, s = n >= r.length ? 1 : r[n]);
        let a = e[n],
            c = e[n + 1],
            l = (o - i) / (s - i);
        return br(t, a, c, l), n
    };
    var Jn = () => [-0, -0, -0, -0, -0, -0],
        ao = Jn();
    var fh = (t, e) => !(t[3] < e[0] || t[0] > e[3] || t[4] < e[1] || t[1] > e[4] || t[5] < e[2] || t[2] > e[5]),
        Rc = (t, e, o, r, n) => (t[0] = e[0], t[3] = e[0] + o, t[1] = e[1], t[4] = e[1] + r, t[2] = e[2], t[5] = e[2] + n, t);
    var dh = (t, e) => {
        t[0] = t[1] = t[2] = 1 / 0, t[3] = t[4] = t[5] = -1 / 0;
        for (let o = 0; o < e.length; ++o) {
            let r = e[o];
            t[0] = Math.min(t[0], r[0]), t[3] = Math.max(t[3], r[0]), t[1] = Math.min(t[1], r[1]), t[4] = Math.max(t[4], r[1]), t[2] = Math.min(t[2], r[2]), t[5] = Math.max(t[5], r[2])
        }
        return t
    };
    var uh = (t, e, o, r, n) => (re(He, e[0] - o / 2, e[1] - r / 2, e[2] - n / 2), Rc(t, He, o, r, n));
    var mh = (t, e, o, r, n) => {
        let i = (t[0] - e[0]) * o[0],
            s = (t[1] - e[1]) * o[1],
            a = (t[2] - e[2]) * o[2],
            c = (t[3] - e[0]) * o[0],
            l = (t[4] - e[1]) * o[1],
            f = (t[5] - e[2]) * o[2],
            d = Math.max(r, Math.min(i, c), Math.min(s, l), Math.min(a, f)),
            u = Math.min(n, Math.max(i, c), Math.max(s, l), Math.max(a, f));
        return !(u < 0 || d > u)
    };
    var qs = (t, e, o) => {
        let r = [0, 0, 0];
        for (let n = 0; n < 6; ++n) {
            let i = e[n],
                s = o[n];
            if (i[0] > 0 ? r[0] = t[3] : r[0] = t[0], i[1] > 0 ? r[1] = t[4] : r[1] = t[1], i[2] > 0 ? r[2] = t[5] : r[2] = t[2], xt(i, r) + s < 0) return !1
        }
        return !0
    };
    var Os = class {
            constructor() {
                this.id = 0, this.pos = [-0, -0, -0], this.rot = [-0, -0, -0], this.scale = 1, this.matrix = void 0, this.loaded = !1
            }
            setWorldMatrix(e, o) {
                this.matrix = e, to(He, o, this.pos), Mo(ft, this.scale), Li($o, this.rot), Ai(this.matrix, $o, He, ft)
            }
            loadGeometry(e, o) {
                if (!this.loaded) {
                    let r = ho.get(this.id);
                    this.loaded = !0, r.geometry === 0 ? this.postGeometryLoad(e, o) : So(r.geometry, (n, i) => {
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
                    let d = o[l],
                        u = o[l + 1],
                        m = o[l + 2],
                        h = Uc(d * 3, n, s, i),
                        g = Uc(u * 3, n, s, i),
                        M = Uc(m * 3, n, s, i),
                        b = [h, g, M],
                        _ = dh(Jn(), b);
                    if (c[d] & 1 && c[u] & 1 && c[m] & 1) {
                        if (b.push(Zn([0, 0, 0], h, g, M)), a.length) {
                            let k = [(a[d * 4 + 0] + a[u * 4 + 0] + a[m * 4 + 0]) / 3, (a[d * 4 + 1] + a[u * 4 + 1] + a[m * 4 + 1]) / 3, (a[d * 4 + 2] + a[u * 4 + 2] + a[m * 4 + 2]) / 3, (a[d * 4 + 3] + a[u * 4 + 3] + a[m * 4 + 3]) / 3];
                            b.push(k)
                        }
                        e.triangleGrid.add(b, _)
                    }
                }
            }
            addCollider(e, o, r, n) {
                let i = new Map;
                this.handleColliderGeometry(e, n.index, n, i), this.handleColliderGeometry(e, n.indexInvisible, n, i)
            }
            onRemove() {}
        },
        Uc = (t, e, o, r) => {
            if (e.has(t)) return e.get(t);
            {
                let n = [o[t], o[t + 1], o[t + 2]];
                return No(n, n, r), e.set(t, n), n
            }
        };
    var Ns = class extends Os {
        constructor() {
            super(), this.mesh = void 0, this.effects = [], this.isEffectProp = !1, this.effectsCreated = !1
        }
        onUpdate(e, o, r) {
            this.mesh !== void 0 && this.updateMesh(o), super.onUpdate(e, o, r)
        }
        updateMesh(e) {
            this.setWorldMatrix(this.mesh.worldMatrix, e), to(this.mesh.position, e, this.pos), re(this.mesh.rotation, this.rot[0], this.rot[1], this.rot[2]), Mo(this.mesh.scale, this.scale), this.mesh.data.multi && (this.mesh.data.multi.needsUpdate = !0)
        }
        onRemove(e) {
            super.onRemove(e), ho.get(this.id).effects.length && this.deleteEffects(), this.mesh && (this.mesh.data.multi ? ss(this.mesh.data.multi, this.mesh) : _r(this.mesh), this.mesh = void 0)
        }
        addMesh(e, o) {
            if (this.mesh === void 0) {
                let r = ho.get(this.id);
                this.mesh = Is(this.id, r.shadow, !1, !0), this.mesh.visible = !1, this.updateMesh(o.origin), r.effects.length && (this.isEffectProp = !0)
            }
        }
        onChunkRebuild(e) {
            this.mesh && this.mesh.data && this.mesh.data.interiorlight && ne.getInteriorLight(this.mesh.data.interiorlight, uh(ao, this.mesh.position, 3, 3, 3))
        }
        createEffects() {
            if (this.isEffectProp = !0, !this.effectsCreated) {
                let e = ho.get(this.id).effects;
                for (let o = 0; o < e.length; ++o) {
                    let r = e[o],
                        n = St();
                    Ve(n.position, r.pos), Ve(n.scale, r.scale), Ve(n.rotation, r.rot), jt(n, this.mesh), tt(n, !0);
                    let i = Ic(r.id, n, 0, !0);
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
    var hh = (t, e, o) => {
            e[o] = (t & 31) * 8, e[o + 1] = (t >> 5 & 31) * 8, e[o + 2] = (t >> 10 & 31) * 8
        },
        ph = 65536 / 64,
        ey = 2147483647 / 2e3,
        Bc = 65536 / (Math.PI * 2),
        ty = 65536 / 100;
    var gh = (t, e) => (t.id = e.id, re(t.pos, e.x / ph, e.y / ey, e.z / ph), re(t.rot, e.rx / Bc, e.ry / Bc, e.rz / Bc), t.scale = Math.max(e.scale, 100) / ty, t);
    var vh = (t, e, o, r) => {
            t.id = e, t.x = o, t.z = r, t.origin[0] = o * 64, t.origin[2] = r * 64, t.deserialized = !1, t.props.length = 0, t.data = void 0, t.loadingProps = 0
        },
        xh = (t, e) => {
            t.data = e, bh(t), oy(t, !0), t.deserialized = !0
        },
        Kt = (t, e, o) => {
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
                    d = a ? -(r - 1 + n) : -(n - 1),
                    u = a ? n : -(r - 1),
                    m = 1 - d - u;
                return (d * c + u * l + m * f) * .030517578125
            }
        },
        ei = (t, e, o) => {
            if (t.data.holes.length === 0) return !1;
            e /= 2.6666666666666665, o /= 2.6666666666666665;
            let r = Math.floor(e) + Math.floor(o) * 24;
            return t.data.holes.indexOf(r) >= 0
        },
        ti = (t, e, o) => {
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
                    d = a ? -(r - 1 + n) : -(n - 1),
                    u = a ? n : -(r - 1),
                    m = 1 - d - u;
                return (d * c + u * l + m * f) * .030517578125
            }
        };
    var jc = (t, e, o) => {
            e /= 16, o /= 16;
            let n = Math.floor(e) + Math.floor(o) * 4;
            return t.data.area[n] || 0
        },
        qc = (t, e, o) => {
            e /= 32, o /= 32;
            let n = Math.floor(e) + Math.floor(o) * 2;
            return t.data.environment[n] || 0
        },
        bh = t => {
            let e = [-0, -0, -0];
            for (let o = 0; o < 24; ++o)
                for (let r = 0; r < 24; ++r) {
                    let n = (r * 2 + 24 * o * 2) * 3,
                        i = r * 2.6666666666666665,
                        s = o * 2.6666666666666665;
                    re(Qt, i, Kt(t, i, s), s), re(Gi, i, Kt(t, i, s + 2.6666666666666665), s + 2.6666666666666665), re(Ln, i + 2.6666666666666665, Kt(t, i + 2.6666666666666665, s), s), Zn(e, Qt, Gi, Ln), t.normals[n] = e[0], t.normals[n + 1] = e[1], t.normals[n + 2] = e[2], re(Qt, i + 2.6666666666666665, Kt(t, i + 2.6666666666666665, s), s), re(Ln, i + 2.6666666666666665, Kt(t, i + 2.6666666666666665, s + 2.6666666666666665), s + 2.6666666666666665), Zn(e, Qt, Gi, Ln), t.normals[n + 3] = e[0], t.normals[n + 4] = e[1], t.normals[n + 5] = e[2]
                }
        };
    var oy = (t, e) => {
            for (let o = 0, r = t.data.props.length; o < r; ++o) {
                let n = t.data.props[o],
                    i = gh(new Ns, n);
                t.props.push(i), e && t.loadingProps++
            }
            for (let o = 0; o < t.props.length; ++o) {
                let r = t.props[o];
                r.onUpdate(ne, t.origin, ne.bounds), r.loadGeometry(ne, t)
            }
        },
        ry = t => {
            for (let e = 0; e < t.props.length; ++e) t.props[e].onRemove(t);
            t.props.length = 0
        },
        wh = t => {
            ry(t)
        },
        _h = (t, e) => Math.floor(t % 64 / 32) + Math.floor(e % 64 / 32) * 2,
        yh = (t, e) => Math.floor(t % 32 * 3) + Math.floor(e % 32 * 3) * 96;
    var oi = 1,
        Ws = t => {
            oi = t % 2147483647, oi <= 0 && (oi += 2147483646), fr(), fr()
        },
        fr = () => oi = oi * 16807 % 2147483647,
        ri = () => (fr() - 1) / 2147483647,
        Qr = (t, e) => ri() * (e - t) + t;
    var Hs, $s, Ys, Ut = [0, 0, 0],
        Zr, Jr, Kr, ny = [21, 56, 50, 44, 13, 19, 7, 42],
        Nc = 3758102380,
        Wc = (t, e) => t >> e & 1,
        Uo = (t, e, o, r) => ny[Wc(t, r) << 2 | Wc(e, r) << 1 | Wc(o, r)],
        Gs = t => {
            let e = (Ut[0] + Ut[1] + Ut[2]) / 6,
                o = Zr - Ut[0] + e,
                r = Jr - Ut[1] + e,
                n = Kr - Ut[2] + e,
                i = .6 - o * o - r * r - n * n,
                s = iy(Hs + Ut[0], $s + Ut[1], Ys + Ut[2]);
            if (Ut[t]++, i < 0) return 0;
            let a = s >> 5 & 1,
                c = s >> 4 & 1,
                l = s >> 3 & 1,
                f = s >> 2 & 1,
                d = s & 3,
                u = d === 1 ? o : d === 2 ? r : n,
                m = d === 1 ? r : d === 2 ? n : o,
                h = d === 1 ? n : d === 2 ? o : r;
            return u = a === l ? -u : u, m = a === c ? -m : m, h = a !== (c ^ l) ? -h : h, i *= i, 8 * i * i * (u + (d === 0 ? m + h : f === 0 ? m : h))
        },
        iy = (t, e, o) => Uo(t, e, o, 0) + Uo(e, o, t, 1) + Uo(o, t, e, 2) + Uo(t, e, o, 3) + Uo(e, o, t, 4) + Uo(o, t, e, 5) + Uo(t, e, o, 6) + Uo(e, o, t, 7),
        kh = (t, e, o) => {
            let r = t + Nc,
                n = e + Nc,
                i = o + Nc,
                s = (r + n + i) / 3;
            Hs = Math.floor(r + s), $s = Math.floor(n + s), Ys = Math.floor(i + s), s = (Hs + $s + Ys) / 6, Zr = r - Hs + s, Jr = n - $s + s, Kr = i - Ys + s, Ut[0] = Ut[1] = Ut[2] = 0;
            let a = Zr >= Kr ? Zr >= Jr ? 0 : 1 : Jr >= Kr ? 1 : 2,
                c = Zr < Kr ? Zr < Jr ? 0 : 1 : Jr < Kr ? 1 : 2;
            return Gs(a) + Gs(3 - a - c) + Gs(c) + Gs(0)
        };
    var Fh = t => {
        let e = 0,
            o = 0,
            r = 0;
        for (let d = 0; d < t.nodes.length; ++d) {
            let u = t.nodes[d],
                m = u.leafCount,
                h = u.points.length / 2;
            e += h * 3 * m, o += h * 2 * m, r += Math.max(0, (h - 2) * 3) * m, u.geotype === 1 && (r += 3 * m * Math.min(1, u.points.length))
        }
        let n = new Float32Array(e),
            i = new Float32Array(o),
            s = new Uint32Array(r);
        Ws(t.seed);
        let a = 0,
            c = 0,
            l = 0,
            f = 0;
        for (let d = 0; d < t.nodes.length; ++d) {
            let u = t.nodes[d],
                m = u.start,
                h = u.end,
                g = Math.atan2(h[1] - m[1], h[0] - m[0]),
                {
                    geotype: M,
                    leafCount: b,
                    y: _,
                    radius: k,
                    slant: U,
                    size: T,
                    arc: V,
                    jitter_slant: ae,
                    jitter_size: q,
                    jitter_rotation: O,
                    jitter_radius: oe,
                    jitter_y: Z
                } = u,
                te = u.points.length / 2,
                L = Math.PI * 2 / (b === 2 ? 4 : b);
            for (let W = 0; W < b; ++W) {
                let A = W * L + Qr(-O, O),
                    J = U + Qr(-ae, ae),
                    ie = T * Qr(1 - q, 1),
                    xe = k * Qr(1 - oe, 1),
                    Ie = _ * Qr(1 - Z, 1);
                for (let _e = 0; _e < te; ++_e) {
                    let ye = u.points[_e * 2],
                        rt = u.points[_e * 2 + 1],
                        Ye = ye - m[0],
                        Dt = rt - m[1],
                        je = Ye * Math.cos(-g) - Dt * Math.sin(-g),
                        H = Ye * Math.sin(-g) + Dt * Math.cos(-g),
                        Le = 0,
                        Ke = 0,
                        Ze = 0;
                    if (u.geotype === 0) {
                        let Xe = J + V * je;
                        Le = Math.sin(Xe) * je, Ke = Math.cos(Xe) * je, Ze = H
                    } else Le = je, Ke = V * (Math.abs(je) + Math.abs(H)), Ze = H;
                    let nt = Le * Math.cos(A) - Ze * Math.sin(A),
                        Ee = Le * Math.sin(A) + Ze * Math.cos(A);
                    n[a] = nt * ie + Math.cos(A) * xe, n[a + 1] = Ie + Ke * ie, n[a + 2] = Ee * ie + Math.sin(A) * xe, i[c] = ye, i[c + 1] = 1 - rt, a += 3, c += 2
                }
                if (M === 0)
                    for (let _e = 0; _e < te - 2; ++_e) s[l] = f + _e, s[l + 1] = f + _e + 1, s[l + 2] = f + _e + 2, l += 3;
                else
                    for (let _e = 0; _e < te - 1; ++_e) {
                        let ye = _e === te - 2;
                        s[l] = f, s[l + 1] = ye ? f + te - 1 : f + _e + 1, s[l + 2] = ye ? f + 1 : f + _e + 2, l += 3
                    }
                f += te
            }
        }
        return at({
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
    var Ah = Math.floor(64 ** 2 * (Te.foliage / 100)),
        Sh = [],
        Xs = [],
        Ph = [];
    for (let t = 0; t < 64 * 64; ++t) {
        let e = Math.max(0, kh(Math.floor(t / 64) / 7, t % 64 / 7, 1));
        Ph.push(e)
    }
    for (let t = 0; t < 8; ++t) Sh.push(new Float32Array(7 * Ah)), Xs.push([]);
    var Lh = (t, e) => {
            if (Te.foliage === 0 || !e) return;
            cy(t, v), Ws(t.id + 1e3);
            let o = t.geometry.foliage.folIds,
                r = [],
                n = t.geometry.foliage.instances,
                i = [];
            for (let l = 0; l < o.length; ++l) r.push(Vr.get(o[l])), i.push(0);
            let s = Te.foliage,
                a = !1;
            t.data.holes.length > 0 && (a = !0);
            let c = [-1, -1, -1, -1];
            for (let l = 0; l < 4; ++l) {
                let f = t.data.textureid[l];
                for (let d = 0; d < 4; ++d) f[d] === 27 && (c[l] = d)
            }
            for (let l = 0; l < 64; ++l)
                for (let f = 0; f < 64; ++f) {
                    if (fr() % 100 > s) continue;
                    let d = l + t.origin[0],
                        u = f + t.origin[2],
                        m = ne.getNormal(d, u);
                    if (m[1] < .6 || a && ei(t, l, f) || ti(t, l, f) > Kt(t, l, f) + 80) continue;
                    let h = _h(l, f),
                        g = yh(l, f),
                        M = t.data.texture[h][g],
                        b = M & 31,
                        _ = M >> 5 & 31,
                        k = M >> 10 & 31,
                        U = c[h];
                    U >= 0 && (U === 0 && b > 0 ? b = 255 : U === 1 && _ > 0 ? _ = 255 : U === 2 && k > 0 && (k = 255));
                    let T = fr() % Math.max(32, b + _ + k),
                        V = 3;
                    T < b ? V = 0 : T < b + _ ? V = 1 : T < b + _ + k && (V = 2);
                    let ae = t.data.textureid[h][V],
                        q = zr.get(ae).foliage,
                        O = Ph[d % 64 + u % 64 * 64];
                    for (let oe = 0; oe < q.length; ++oe) {
                        let Z = q[oe],
                            te = Z[1];
                        if (fr() % 255 > te || Z[2] && O <= 0) continue;
                        let L = Z[0],
                            W = o.indexOf(L);
                        if (i[W] >= Ah || W < 0) continue;
                        let A = n[W].attributes.inst.data,
                            J = i[W] * 7,
                            ie = Math.max(0, Math.min(64, l - .25 + ri() * .5)),
                            xe = Math.max(0, Math.min(64, f - .25 + ri() * .5)),
                            Ie = Kt(t, ie, xe);
                        A[J] = ie + t.origin[0], A[J + 1] = Ie, A[J + 2] = xe + t.origin[2], A[J + 3] = Z[2] ? .5 + Math.min(1.4, O * 1.5) : .5 + ri(), A[J + 4] = m[0] + .001, A[J + 5] = m[1], A[J + 6] = m[2], i[W]++
                    }
                }
            for (let l = 0; l < o.length; ++l) {
                let f = n[l],
                    d = i[l];
                ji(f, d), kt(f, f.attributes.inst), f.bounds = t.geometry.terrain.bounds
            }
        },
        Qs = new Map,
        Gc = new Map,
        Ch = new Set,
        sy = t => Xs[t].length < 1 ? at({
            inst: {
                instanced: !0,
                size: 7,
                data: Sh[t]
            }
        }) : Xs[t].pop(),
        ay = (t, e) => {
            Xs[t].push(e)
        },
        cy = (t, e) => {
            if (!t.geometry.foliage) {
                let o = t.geometry.foliage = {
                    instances: [],
                    folIds: []
                };
                for (let r = 0; r < 4; ++r) {
                    let n = t.data.textureid[r];
                    for (let i = 0; i < 4; ++i) {
                        let s = zr.get(n[i]).foliage;
                        for (let a = 0; a < s.length; ++a) o.folIds.indexOf(s[a][0]) < 0 && o.folIds.push(s[a][0])
                    }
                }
                o.folIds.length > 8 && (o.folIds.length = 8);
                for (let r = 0; r < o.folIds.length; ++r) {
                    let n = o.folIds[r];
                    o.instances.push(sy(r));
                    let i = Vr.get(n);
                    Qs.has(i.id) || Qs.set(i.id, Fh(i)), Ch.has(i.texture) || (Ch.add(i.texture), Ct(i.texture, s => {
                        Oi(s, 16), Ot(s), Gc.set(i.texture, s)
                    }))
                }
            }
        },
        Dh = t => {
            if (t.geometry.foliage) {
                for (let e = 0; e < t.geometry.foliage.instances.length; ++e) ay(e, t.geometry.foliage.instances[e]);
                t.geometry.foliage = void 0
            }
        },
        Eh = (t, e) => {},
        Th = t => {
            if (!Te.foliage) return;
            let e = 3,
                o = 2,
                r = [],
                n = [],
                i = [];
            for (let s = 0, a = t.length; s < a; ++s) {
                let c = t[s];
                if (wp(c.x * 2, c.z * 2) < cc) {
                    let l = c.geometry.foliage;
                    for (let f = 0; f < l.folIds.length; ++f) {
                        let d = l.folIds[f],
                            u = r.indexOf(d);
                        u < 0 && (r.push(d), n.push([]), i.push(Vr.get(d).type === 0 ? 13 : 14), u = r.length - 1), n[u].push(l.instances[f])
                    }
                }
            }
            for (let s = 0; s < r.length; ++s) {
                let a = Vr.get(r[s]);
                if (Qs.has(a.id) && Gc.has(a.texture)) {
                    let c = i[s],
                        l = Q[c];
                    N.currentProgram !== l.id && (v.useProgram(l.program), N.currentProgram = l.id, Pr(l), Sr(l), Va(l.uniformArray));
                    let f = Qs.get(a.id);
                    Fr(f, l), lt("foliageDiffuse", Gc.get(a.texture), 0, l), An(l);
                    let d = n[s];
                    for (let u = 0; u < d.length; ++u) {
                        let m = d[u];
                        v.bindBuffer(v.ARRAY_BUFFER, m.attributes.inst.buffer), v.vertexAttribPointer(e, 3, v.FLOAT, !1, 7 * 4, 4 * 4), v.enableVertexAttribArray(e), Mr(e, 1), v.vertexAttribPointer(o, 4, v.FLOAT, !1, 7 * 4, 0), v.enableVertexAttribArray(o), Mr(o, 1), N.boundBuffer = m.attributes.inst.id, v.drawElementsInstanced(v.TRIANGLES, f.drawRangeCount, f.attributes.index.type, f.drawRangeStart, m.instancedCount)
                    }
                }
            }
        };
    var fy = new Map,
        dy = new Map,
        Ih = new Map,
        uy = new Map,
        my = new Map,
        Zs = new Map;
    mo.forEach(t => {
        t.fx !== void 0 && (t.fx.effectDirImpact !== void 0 && Ih.set(t.id, t.fx.effectDirImpact), t.fx.animImpact !== void 0 && fy.set(t.id, t.fx.animImpact), t.fx.effectTarget !== void 0 && uy.set(t.id, t.fx.effectTarget), t.fx.effectImpact !== void 0 && dy.set(t.id, t.fx.effectImpact), t.fx.animCast !== void 0 && my.set(t.id, t.fx.animCast), t.fx.effectMissile !== void 0 && Zs.set(t.id, t.fx.effectMissile))
    });
    Zs.set(59, 166);
    Zs.set(62, 170);
    Ih.set(62, 169);
    var zh = [],
        Vh = [],
        Rh = new Map;
    var py = (t, e) => {
            if (!ne.isEntityIdTaken(t.targetid) || t.timer.done(ne.smoothtime)) {
                zh.splice(e, 1), t.effect.done = !0, Rh.delete(t.mId);
                return
            }
            let o = ne.entity(t.targetid),
                r = At(t.effect.transform.position, o.visualPosition, t.start);
            Si(t.effect.transform.position, t.start, r, t.timer.fraction(ne.smoothtime));
            let n = ne.getHeight(t.effect.transform.position[0], t.effect.transform.position[2]) + .3;
            n > t.effect.transform.position[1] && (t.effect.transform.position[1] = n), wn(t.effect.transform, o.visualPosition, !1, Ju), t.timer.passed(ne.smoothtime) > .5 && (Ve(t.start, t.effect.transform.position), t.timer.reset(ne.smoothtime, t.timer.end - ne.smoothtime)), tt(t.effect.transform, !1)
        },
        hy = (t, e) => {
            if (t.timer.done(ne.smoothtime)) {
                Vh.splice(e, 1), t.effect.done = !0, Rh.delete(t.mId);
                return
            }
            let o = Math.max(0, Math.min(1, t.timer.fraction(ne.smoothtime)));
            t.currentIndex = lh(t.effect.transform.position, t.path, o, t.fractions), tt(t.effect.transform, !1)
        },
        Uh = () => {
            zh.forEach(py), Vh.forEach(hy)
        };
    var Gt, Bh = () => {
            Gt = Vt(void 0, 11, v.TRIANGLES), Mo(Gt.transform.scale, 40), Gt.transform.visible = !1, Gt.transform.matrixAutoUpdate = !0, So(1456, t => {
                let e = at(t);
                Gt.geometry = e;
                let o = fo(1024, 1024, 1, !1, v.NONE, v.REPEAT, v.REPEAT);
                Pu(o), qt(Un, Q[34]);
                let r = o.colorTexture;
                lt("skyDiffuse", r, 0, Q[11]), Ct(1748, n => {
                    Gt.transform.visible = !0, lt("cloudDiffuse", n, 0, Q[11])
                })
            })
        },
        jh = () => {
            re(Gt.transform.position, he.transform.worldMatrix[12], he.transform.worldMatrix[13], he.transform.worldMatrix[14]), tt(Gt.transform, !1)
        },
        qh = () => {
            Gt.transform.visible && qt(Gt, Q[11])
        };
    var Bt, Oh = () => {
            Bt = Vt(void 0, 12, v.TRIANGLES), Mo(Bt.transform.scale, .1), jt(Bt.transform, Gt.transform), Bt.transform.visible = !1, So(1455, t => {
                Bt.geometry = at(t), Bt.transform.visible = !0
            })
        },
        Nh = () => {
            Ve(Bt.transform.position, Xr), oo(Bt.transform.position, Bt.transform.position, .45), wn(Bt.transform, Du, !1, Lu), Bt.transform.matrixNeedsUpdate = !0
        },
        Wh = () => {
            Bt.transform.visible && qt(Bt, Q[12])
        };
    var Ks = 24,
        me = Ks + 1,
        Yh = me ** 2,
        Hc = new Map,
        Bo = 96,
        Gh = 96 / 12,
        en = 8,
        ni = new Uint8Array(3 * Bo ** 2),
        $c = new Map,
        Js = Ks / 2,
        Hh = 3,
        $h = [1, 2, 4, 8],
        dr = [0],
        Ue = [],
        by = (t, e, o, r) => {
            let n = e + o * me,
                i = e + (o + r) * me,
                s = e + (o + r) * me + r,
                a = e + o * me + r;
            Ue.push(n), Ue.push(i), Ue.push(a), Ue.push(i), Ue.push(s), Ue.push(a)
        };
    for (let t = 0; t < 2; ++t)
        for (let e = 0; e < 2; ++e)
            for (let o = 0; o < Hh; ++o) {
                let r = $h[o],
                    n = $h[o + 1],
                    i = e * Js,
                    s = (e + 1) * Js,
                    a = t * Js,
                    c = (t + 1) * Js;
                for (let l = 0; l < (o === Hh - 1 ? 1 : 16); ++l) {
                    let f = 1 & l,
                        d = 2 & l,
                        u = 4 & l,
                        m = 8 & l,
                        h = i + (f ? r : 0),
                        g = s - (u ? r : 0),
                        M = a + (d ? r : 0),
                        b = c - (m ? r : 0);
                    for (let _ = M; _ < b; _ += r)
                        for (let k = h; k < g; k += r) by(Ue, k, _, r);
                    if (f) {
                        for (let _ = a; _ < c; _ += n) {
                            let k = i + _ * me,
                                U = i + (_ + n) * me,
                                T = i + (_ + r) * me + r;
                            if (Ue.push(k, U, T), _ < c - n) {
                                let V = T + r * me,
                                    ae = V + r * me;
                                Ue.push(T, U, V), Ue.push(V, U, ae)
                            }
                        }
                        d || Ue.push(i + a * me, i + (a + r) * me + r, i + a * me + r), m || Ue.push(i + c * me, i + c * me + r, i + (c - r) * me + r)
                    }
                    if (d) {
                        for (let _ = i; _ < s; _ += n) {
                            let k = _ + a * me,
                                U = _ + a * me + n,
                                T = _ + (a + r) * me + r;
                            if (Ue.push(k, T, U), _ < s - n) {
                                let V = T + r;
                                Ue.push(T, V, U), Ue.push(V, V + r, U)
                            }
                        }
                        f || Ue.push(i + a * me, i + (a + r) * me, i + (a + r) * me + r), u || Ue.push(s + a * me, s + (a + r) * me - r, s + (a + r) * me)
                    }
                    if (u) {
                        for (let _ = a; _ < c; _ += n) {
                            let k = s + _ * me,
                                U = s + (_ + n) * me,
                                T = s + (_ + r) * me - r;
                            if (Ue.push(k, T, U), _ < c - n) {
                                let V = T + r * me,
                                    ae = V + r * me;
                                Ue.push(T, V, U), Ue.push(V, ae, U)
                            }
                        }
                        d || Ue.push(s + a * me, s + a * me - r, s + (a + r) * me - r), m || Ue.push(s + c * me, s + (c - r) * me - r, s + c * me - r)
                    }
                    if (m) {
                        for (let _ = i; _ < s; _ += n) {
                            let k = _ + c * me,
                                U = _ + c * me + n,
                                T = _ + (c - r) * me + r;
                            if (Ue.push(k, U, T), _ < s - n) {
                                let V = T + r,
                                    ae = V + r;
                                Ue.push(T, U, V), Ue.push(V, U, ae)
                            }
                        }
                        f || Ue.push(i + c * me, i + (c - r) * me + r, i + (c - r) * me), u || Ue.push(s + c * me, s + (c - r) * me, s + (c - r) * me - r)
                    }
                    dr.push(Ue.length)
                }
            }
    var wy = {
            type: v.UNSIGNED_INT,
            data: new Uint32Array(Ue)
        },
        Yc = new Float32Array(Yh * 3),
        _y = new Float32Array(Yh * 3);
    for (let t = 0, e = 0; t <= Ks; ++t)
        for (let o = 0; o <= Ks; ++o, ++e) Yc[e * 3 + 0] = o * 2.6666666666666665, Yc[e * 3 + 2] = t * 2.6666666666666665;
    var Xh = () => {},
        Qh = (t, e, o) => {
            if (My(t), e) {
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
                            d = s[l + 1],
                            u = s[l + 2],
                            m = s[l + 3],
                            h = s[l + 4],
                            g = s[l + 5],
                            M = (c + 25 * a) * 3,
                            b = (c + 25 * (a + 1)) * 3,
                            _ = (c + 1 + 25 * a) * 3,
                            k = (c + 1 + 25 * (a + 1)) * 3;
                        i[M] += f, i[M + 1] += d, i[M + 2] += u, i[b] += f + m, i[b + 1] += d + h, i[b + 2] += u + g, i[_] += f + m, i[_ + 1] += d + h, i[_ + 2] += u + g, i[k] += m, i[k + 1] += h, i[k + 2] += g
                    }
                if (t.z > 0) {
                    let c = ne.getChunk(t.x, t.z - 1).normals,
                        l = 24 - 1;
                    for (let f = 0; f < 24; ++f) {
                        let d = (f * 2 + 24 * l * 2) * 3,
                            u = c[d],
                            m = c[d + 1],
                            h = c[d + 2],
                            g = c[d + 3],
                            M = c[d + 4],
                            b = c[d + 5],
                            _ = (f + 1) * 3,
                            k = f * 3;
                        i[k] += u + g, i[k + 1] += m + M, i[k + 2] += h + b, i[_] += g, i[_ + 1] += M, i[_ + 2] += b
                    }
                }
                if (t.z + 1 < ne.chunkAmount) {
                    let c = ne.getChunk(t.x, t.z + 1).normals,
                        l = 0,
                        f = 25 - 1;
                    for (let d = 0; d < 24; ++d) {
                        let u = (d * 2 + 24 * l * 2) * 3,
                            m = c[u],
                            h = c[u + 1],
                            g = c[u + 2],
                            M = c[u + 3],
                            b = c[u + 4],
                            _ = c[u + 5],
                            k = (d + 25 * f) * 3,
                            U = (d + 1 + 25 * f) * 3;
                        i[k] += m, i[k + 1] += h, i[k + 2] += g, i[U] += m + M, i[U + 1] += h + b, i[U + 2] += g + _
                    }
                }
                if (t.x > 0) {
                    let c = ne.getChunk(t.x - 1, t.z).normals,
                        l = 24 - 1;
                    for (let f = 0; f < 24; ++f) {
                        let d = (l * 2 + 24 * f * 2) * 3,
                            u = c[d],
                            m = c[d + 1],
                            h = c[d + 2],
                            g = c[d + 3],
                            M = c[d + 4],
                            b = c[d + 5],
                            _ = 25 * f * 3,
                            k = 25 * (f + 1) * 3;
                        i[_] += u + g, i[_ + 1] += m + M, i[_ + 2] += h + b, i[k] += g, i[k + 1] += M, i[k + 2] += b
                    }
                }
                if (t.x + 1 < ne.chunkAmount) {
                    let c = ne.getChunk(t.x + 1, t.z).normals,
                        l = 0,
                        f = 25 - 1;
                    for (let d = 0; d < 24; ++d) {
                        let u = (l * 2 + 24 * d * 2) * 3,
                            m = c[u],
                            h = c[u + 1],
                            g = c[u + 2],
                            M = c[u + 3],
                            b = c[u + 4],
                            _ = c[u + 5],
                            k = (f + 25 * d) * 3,
                            U = (f + 25 * (d + 1)) * 3;
                        i[U] += m + M, i[U + 1] += h + b, i[U + 2] += g + _, i[k] += m, i[k + 1] += h, i[k + 2] += g
                    }
                }
                for (let a = 0; a < 25; ++a)
                    for (let c = 0; c < 25; ++c) {
                        let l = (c + 25 * a) * 3,
                            f = i[l],
                            d = i[l + 1],
                            u = i[l + 2],
                            m = 1 / Math.sqrt(f * f + d * d + u * u);
                        i[l] = f * m, i[l + 1] = d * m, i[l + 2] = u * m
                    }
                kt(r, r.attributes.position), kt(r, r.attributes.normal)
            }
            if (o) {
                let r = t.x * 2 % en * 2 + t.z * 2 % en * en;
                t.meshes.atlas = ky(t), t.meshes.texSet = t.data.textureid.map(Fy);
                let n = t.data.holes.length > 0;
                for (let i = 0; i < 2; ++i)
                    for (let s = 0; s < 2; ++s) {
                        let a = s * 2 + i,
                            c = t.data.texture[a];
                        for (let f = 0; f < Bo; ++f)
                            for (let d = 0; d < Bo; ++d) {
                                let u = f * Bo + d,
                                    m = u * 3;
                                if (hh(c[u], ni, m), n) {
                                    let h = i * 12 + Math.floor(d / Gh) + (Math.floor(f / Gh) + s * 12) * 24;
                                    t.data.holes.indexOf(h) >= 0 && (ni[m + 0] = 255, ni[m + 1] = 255, ni[m + 2] = 255)
                                }
                            }
                        Qu(t.meshes.atlas, r + a, Bo, Bo, ni);
                        let l = t.meshes.quadrantUbos[a];
                        l.data.quadrant[0] = r + a, l.data.terrainInfo = t.meshes.texSet[a].info, _s(l), Lt(l)
                    }
            }
        },
        yy = {
            min: [0, 0, 0],
            max: [64, 64, 64],
            center: [32, 32, 32],
            scale: [64, 64, 64],
            radius: 60,
            initiated: !0
        },
        My = t => {
            if (t.geometry.terrain || (t.geometry.terrain = at({
                    position: {
                        size: 3,
                        data: Yc
                    },
                    normal: {
                        size: 3,
                        data: _y
                    },
                    index: wy
                }), Object.assign(t.geometry.terrain.bounds, yy)), !t.meshes.terrain) {
                let e = Vt(t.geometry.terrain, 8, v.TRIANGLES);
                t.meshes.terrain = e, t.meshes.quadrantUbos = [];
                for (let o = 0; o < 4; ++o) {
                    let r = Or(Hn.meshterrain);
                    r.data.modelMatrix = e.transform.matrix, t.meshes.quadrantUbos.push(r)
                }
            }
            Ve(t.meshes.terrain.transform.position, t.origin), t.meshes.terrain.transform.matrixNeedsUpdate = !0, tt(t.meshes.terrain.transform, !1), t.state = Math.max(t.state, 5)
        },
        ky = t => {
            let e = Math.floor(t.x * 2 / en),
                o = Math.floor(t.z * 2 / en),
                r = e + 1e3 * o;
            if (!Hc.has(r)) {
                let n = Fo({
                    width: Bo,
                    height: Bo,
                    target: v.TEXTURE_2D_ARRAY,
                    format: v.RGB,
                    internalFormat: v.RGB565,
                    depth: en ** 2,
                    flipY: !1,
                    generateMipmaps: !1
                });
                Oi(n, 4), Ot(n), Hc.set(r, n)
            }
            return Hc.get(r)
        },
        Fy = t => {
            let e = t.join(",");
            if (!$c.has(e)) {
                let o = {
                    info: [],
                    diffuse: [],
                    loaded: 0
                };
                t.forEach((r, n) => {
                    let i = zr.get(r);
                    o.info[n * 4 + 0] = i.scale / 127, o.info[n * 4 + 1] = i.darkest / 255 * 3, o.info[n * 4 + 2] = i.brightest / 255 * 3, o.info[n * 4 + 3] = i.spec / 255, Ct(i.texture, s => {
                        o.diffuse[n] = s, o.loaded++
                    })
                }), $c.set(e, o)
            }
            return $c.get(e)
        },
        Zh = t => {},
        Jh = (t, e) => {},
        Kh = () => {},
        eg = t => {
            let e = Q[8];
            if (!e.active) return;
            v.useProgram(e.program), N.currentProgram = e.id, Pr(e), Sr(e);
            let o, r, n = 1;
            for (let s = 0; s < t.length; ++s) {
                let a = t[s],
                    c = a.meshes.terrain,
                    l = c.geometry;
                o !== a.meshes.atlas && (lt("atlas", a.meshes.atlas, 0, e), o = a.meshes.atlas), Fr(l, e);
                for (let f = 0; f < 4; ++f)
                    if (a.quadrantlod[f] <= n) {
                        let d = a.meshes.texSet[f];
                        if (d.loaded < 4) continue;
                        let u = a.meshes.quadrantUbos[f];
                        if (nr(u), r !== d) {
                            for (let M = 0; M < 4; ++M) lt("diffuse", d.diffuse[M], M, e);
                            r = d
                        }
                        An(e);
                        let m = a.quadrantmask[f],
                            h = dr[m] * 4,
                            g = dr[m + 1] - dr[m];
                        v.drawElements(c.mode, g, l.attributes.index.type, h)
                    }
            }
            let i = Q[9];
            if (i.active) {
                v.useProgram(i.program), N.currentProgram = i.id, Pr(i), Sr(e);
                for (let s = 0; s < t.length; ++s) {
                    let a = t[s],
                        c = a.meshes.terrain,
                        l = c.geometry,
                        f = a.meshes.quadrantUbos[0];
                    nr(f), Fr(l, i);
                    for (let d = 0; d < 4; ++d)
                        if (a.quadrantlod[d] > n) {
                            let u = a.quadrantmask[d],
                                m = dr[u] * 4,
                                h = dr[u + 1] - dr[u];
                            v.drawElements(c.mode, h, l.attributes.index.type, m)
                        }
                }
            }
        };
    var tg, og = () => {
            tg = at({
                position: {
                    size: 3,
                    data: new Float32Array([0, 0, 0, 64, 0, 0, 0, 0, 64, 64, 0, 64])
                },
                index: {
                    type: v.UNSIGNED_INT,
                    data: new Uint32Array([0, 2, 1, 2, 3, 1])
                }
            }), Ct(1748, t => lt("waterNoise", t, 0, Q[20])), Ct(1243, t => lt("waterLines", t, 0, Q[20])), lt("bufferPongColor", vo.colorTexture, 0, Q[20]), lt("bufferPongDepth", vo.depthTexture, 0, Q[20])
        },
        rg = (t, e) => {
            if (!e || t.data.water.length === 0) return;
            t.meshes.waterubo || (t.meshes.waterubo = Or(Hn.water));
            let o = t.origin[0],
                r = t.origin[2],
                n = t.meshes.waterubo.data.verts;
            for (let i = 0; i < 4; ++i) {
                let s = t.data.water[i] * .030517578125;
                n[i * 3] = o + i % 2 * 64, n[i * 3 + 1] = s, n[i * 3 + 2] = r + Math.floor(i / 2) * 64
            }
            _s(t.meshes.waterubo), Lt(t.meshes.waterubo)
        },
        ng = t => {},
        ig = t => {
            let e = Q[20];
            Ar(e, N.currentProgram === e.id);
            for (let o = 0, r = t.length; o < r; ++o) {
                let n = t[o];
                n.data.water.length !== 0 && (nr(n.meshes.waterubo), Cr(tg, e, v.TRIANGLES))
            }
        };
    var sg = t => {
            tp(), D1(), $1(t), sh(), og(), U1(), N1(), Bh(), Oh(), Kh()
        },
        ag = (t, e, o) => {
            ah(t, e, o), Xh(), Y1(e), Uh(), K1(t, e), B1(t), W1(t), z1(t, e), jh(), Nh(), sp(t)
        },
        cg = (t, e) => {
            dp(t, e), Jh(t, e), Eh(t, e)
        };
    var tn = [],
        lg = t => {
            tn.push(t)
        },
        Xc = t => {
            tn.splice(tn.indexOf(t), 1)
        },
        fg = t => {
            eg(t), j1(), qh(), gfe.ssao || Th(t)
        },
        dg = t => {
            Wh()
        },
        ug = t => {
            ig(t), q1(), V1()
        },
        mg = (t, e, o, r, n, i, s) => {
            if (t.state !== 8 && (Qh(t, e, o), Lh(t, r), rg(t, i), n))
                for (let a = 0; a < t.props.length; ++a) t.props[a].onChunkRebuild(t)
        },
        pg = t => {
            Zh(t), Dh(t), ng(t)
        };
    var gg = () => ({
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
        Qc = (t, e, o, r, n) => {
            vh(t, e, o, r), t.reloadAttempts = 0, t.center2d[0] = t.origin[0] + 64 / 2, t.center2d[1] = t.origin[2] + 64 / 2, t.neighbors.length = 0;
            for (let i = Math.max(0, o - 1); i <= Math.min(n - 1, o + 1); i++)
                for (let s = Math.max(0, r - 1); s <= Math.min(n - 1, r + 1); s++) {
                    let a = i + s * n;
                    a !== t.id && t.neighbors.push(a)
                }
            t.state = 0
        },
        vg = t => t.state >= 2 ? !1 : (t.state = 2, Sy(t), !0),
        Sy = async t => {
            try {
                t.abort = new AbortController;
                let o = await (await fetch(`data/world/${ne.file}/${t.id}?v=8862189`, {
                    signal: t.abort.signal,
                    cache: "default"
                })).arrayBuffer();
                if (t.reloadAttempts = 0, t.state > 2) return;
                Py(new Uint8Array(o), t)
            } catch (e) {
                t.state === 2 && t.reloadAttempts++ < 5 ? (t.state = 2 - 1, vg(t)) : console.log(`failed to load chunk ${t.id}, giving up`, e)
            }
        }, Py = (t, e) => {
            e.state = 3, xh(e, Ur.chunk.decode(t)), Zc(e)
        }, Zc = t => {
            if (t.inRange = fc(t.x * 2, t.z * 2) < 3, t.inRange)
                for (let e = 0; e < 2; ++e)
                    for (let o = 0; o < 2; ++o) {
                        let r = o * 2 + e,
                            n = Math.min(2, fc(t.x * 2 + e, t.z * 2 + o)),
                            i = _p(t.x * 2 + e, t.z * 2 + o);
                        t.quadrantlod[r] = n, t.quadrantmask[r] = i
                    }
        }, xg = (t, e) => {
            let o = t.state;
            if (o === 0 || o === 3) {
                if (t.inRange) {
                    o === 0 && (t.state = 1);
                    let r = t.loadingProps === 0;
                    for (let n = 0; n < t.neighbors.length; ++n) {
                        let i = e.chunksMap.get(t.neighbors[n]);
                        i ? i.state < 3 && (i.state === 0 && (i.state = 1), r = !1) : r = !1
                    }
                    o === 3 && r && (t.state = 4, Ly(t, !0, !0, !0, !0, !0, !0))
                }
            } else o >= 5 ? t.inRange && t.state < 7 ? (lg(t), t.state = 7) : !t.inRange && t.state === 7 && (Xc(t), ii(t, !1, !1), t.state = 6) : o === 1 && vg(t) && (t.state = 2)
        }, ii = (t, e, o) => {
            if (t.isMeshVisible !== e) {
                t.isMeshVisible = e;
                for (let r = 0; r < t.props.length; ++r) t.props[r].setVisible(e)
            }
            if (!o && t.isEffectsVisible !== e) {
                t.isEffectsVisible = e;
                for (let r = 0; r < t.props.length; ++r) t.props[r].setEffectVisible(e)
            }
        }, Ly = (t, e, o, r, n, i, s) => {
            mg(t, e, o, r, n, i, s)
        }, bg = t => {
            wh(t);
            let e = t.state === 2;
            t.state === 7 && (Xc(t), ii(t, !1, !1), t.state = 6), pg(t), t.state = 8, e && t.abort.abort()
        };
    var _g = (t, e, o) => {
            let r = [];
            for (let n = 0; n < t.length; ++n) {
                let i = t[n];
                qs(i.data.aabb, e.frustum, e.frustumConstants) ? (r.push(i), ii(i, !0, o)) : ii(i, !1, o)
            }
            return r
        },
        Dy = () => {
            let t = tn;
            if (v.enable(v.POLYGON_OFFSET_FILL), v.polygonOffset(1.3, 3), Gr) {
                for (let e = 1; e >= 0; --e) {
                    let o = jr[e],
                        r = lr[e];
                    Ms(r, !0), si(o), Ea(o), t = _g(t, r, !0);
                    for (let n = 0, i = Ts.length; n < i; ++n) {
                        let s = Ts[n];
                        Br(s, Q[s.shadowProgram], !0, r)
                    }
                }
                Xn(!1)
            }
            Ms(lr[0], !0), ea(jr[0], qr, v.DEPTH_BUFFER_BIT), si(qr);
            for (let e = 0, o = Es.length; e < o; ++e) {
                let r = Es[e];
                Br(r, Q[r.shadowProgram], !1, he)
            }
            v.disable(v.POLYGON_OFFSET_FILL)
        },
        Ey = t => {
            Ms(he, !0), si(Jt), Ea(Jt);
            for (let e = 0, o = Ps.length; e < o; ++e) {
                let r = Ps[e];
                Br(r, Q[r.program], !0, he)
            }
            fg(t)
        },
        Ty = t => {
            dg(t);
            for (let e = 0, o = Ls.length; e < o; ++e) {
                let r = Ls[e];
                Br(r, Q[r.program], !0, he)
            }
            ea(Jt, vo, v.DEPTH_BUFFER_BIT), ea(Jt, vo, v.COLOR_BUFFER_BIT), si(Jt), ug(t);
            for (let e = 0, o = Ds.length; e < o; ++e) {
                let r = Ds[e];
                Br(r, Q[r.program], !0, he)
            }
            fireflyDraw()
        },
        on = (t, e, o, r, n) => {
            let i = Q[t];
            o && lt("inputA", o.colorTexture, 0, i), r && lt("inputB", r.colorTexture, 0, i);
            for (let s = 0; s < n.length; ++s) {
                let a = i.uniforms[n[s][0]];
                a.value = n[s][1]
            }
            si(e), qt(Un, i)
        },
        Iy = t => {
            let e = vo,
                o = Jt;
            if (t.has(32) && (t.delete(32), on(32, e, o, null, []), [e, o] = [o, e]), t.has(33) && (t.delete(33), on(33, e, o, null, []), [e, o] = [o, e]), t.has(30)) {
                t.delete(30);
                if (gfe.bloomHQ) return void on(42, null, o, bloomHQChain(o), pfxToneArgs().concat([
                    ["bloomAmount", bloomAmountVal],
                    ["tonemapEnabled", gfe.tonemap ? 1 : 0]
                ]));
                let r = .5 / or.width,
                    n = .5 / or.height;
                on(30, rr, o, null, [
                    ["offset", [-r, -n, r, -n, r, n, -r, n]],
                    ["amount", [.25, .25, .25, .25]]
                ]);
                let i = ["amount", [.125, .375, .375, .125]];
                r *= 2, n *= 2, on(30, or, rr, null, [
                    ["offset", [-r * 2, 0, -r, 0, r, 0, r * 2, 0]], i
                ]), on(30, rr, or, null, [
                    ["offset", [0, -n * 2, 0, -n, 0, n, 0, n * 2]], i
                ]), gfe.tonemap ? (on(31, e, o, rr, []), [e, o] = [o, e], on(39, null, o, null, pfxToneArgs())) : on(31, null, o, rr, [])
            } else gfe.tonemap ? on(39, null, o, null, pfxToneArgs()) : ea(o, null, v.COLOR_BUFFER_BIT)
        },
        ea = (t, e, o, r = v.NEAREST) => {
            let n = t.width,
                i = t.height,
                s = e !== null ? e.width : Jt.width,
                a = e !== null ? e.height : Jt.height;
            v.bindFramebuffer(v.READ_FRAMEBUFFER, t.buffer), v.bindFramebuffer(v.DRAW_FRAMEBUFFER, e !== null ? e.buffer : null), v.blitFramebuffer(0, 0, n, i, 0, 0, s, a, o, r)
        },
        si = t => {
            t ? (v.bindFramebuffer(v.FRAMEBUFFER, t.buffer), Mn(t.width, t.height)) : (v.bindFramebuffer(v.FRAMEBUFFER, null), Mn(N.width, N.height))
        },
        yg = t => {
            Cp(t)
        },
        Mg = t => {
            Dy();
            let e = _g(tn, he, !1);
            Ey(e), gfe.ssao || Ty(e), postScene(e), Iy(t)
        };
    var rn = Te.resolution / 100,
        Fg = !1,
        kg = [256, 512, 1024, 2048][Te.shadowmapResolution] || 1024,
        Cg = () => {
            v || (alert("WebGL2 problem found."), window.location.href = "/technical"), Ag(), yg(kg), sg(kg), Pg(N.width, N.height), yn.className = "l-canvas", ko.className = "l-canvas", ko.style.pointerEvents = "all", window.addEventListener("resize", Sg, !1)
        };
    bi.subscribe(t => {
        is(t ** 2 / 10, Te.shadowmapResolution)
    });
    wi.subscribe(t => {
        he.fov = t, Go(he)
    });
    vi.subscribe(t => {
        Fg = !t
    });
    var Ag = () => {
            let t = window.innerWidth * rn,
                e = window.innerHeight * rn;
            Mu(t, e)
        },
        Sg = () => {
            let t = window.innerWidth * rn,
                e = window.innerHeight * rn;
            Ag(), Ap(t, e), Pg(t, e)
        },
        Pg = (t, e) => {
            he.aspect = t / e, Go(he), E1(t, e)
        };
    _i.subscribe(t => {
        let e = t / 100,
            o = rn !== e;
        rn = e, Te.resolutionScale = e, o && Sg()
    });
    var Lg = (t, e) => {
            zi(he);
            let o = new Set;
            Te.fxaa && o.add(32), Te.bloom && o.add(30), Fg && (ag(t, e.smoothtime, o), Mg(o))
        },
        Dg = (t, e) => {
            cg(t, e)
        };
    var ta = class {
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
                    for (let d = i; d <= c; ++d) {
                        let u = l * this.yd * this.zd + f * this.zd + d;
                        this.nodes.has(u) || this.nodes.set(u, {
                            aabbs: [],
                            content: [],
                            count: 0
                        });
                        let m = this.nodes.get(u);
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
                    for (let d = n; d <= a; ++d) {
                        let u = l * this.yd * this.zd + f * this.zd + d;
                        if (this.nodes.has(u)) {
                            let m = this.nodes.get(u);
                            for (let h = 0; h < m.count; ++h) {
                                let g = m.content[h];
                                fh(m.aabbs[h], e) && !c.includes(g) && c.push(g)
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
                d = Math.max(0, Math.min(this.ym, ~~(Math.max(e[1], i) / this.ys))),
                u = Math.max(0, Math.min(this.zm, ~~(Math.max(e[2], s) / this.zs))),
                m = [];
            for (let h = a; h <= f; ++h)
                for (let g = c; g <= d; ++g)
                    for (let M = l; M <= u; ++M) {
                        let b = h * this.yd * this.zd + g * this.zd + M;
                        if (this.nodes.has(b)) {
                            let _ = this.nodes.get(b);
                            for (let k = 0; k < _.count; ++k) {
                                let U = _.content[k];
                                mh(_.aabbs[k], e, r, 0, 1) && !m.includes(U) && m.push(U)
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
    var yt = {
            origin: [0, 0, 0],
            dir: [0, -1, 0],
            invDir: [0, 0, 0]
        },
        oa = (t, e, o, r, n, i, s) => {
            re(t.origin, e, o, r), re(t.dir, n, i, s), du(t.invDir, t.dir)
        };
    var Jc = [-0, -1, -0],
        ra = class {
            constructor() {
                this.id = "", this.idInt = 0, this.file = "", this.bounds = 0, this.chunkAmount = 0, this.chunksMap = new Map, this.chunksArray = [], this.finishedLoadingChunks = new Set, this.time = this.accum = -0, this.timestep = 1 / 60, this.tickId = 0, this.data = void 0, this.triangleGrid = new ta
            }
            load(e, o) {
                this.id = e, this.file = o, Wa.forEach(r => {
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
                e = Re(e, 0, this.bounds), o = Re(o, 0, this.bounds);
                let r = this.chunksMap.get(Math.min(Math.floor(e / 64), this.chunkAmount - 1) + Math.min(Math.floor(o / 64), this.chunkAmount - 1) * this.chunkAmount);
                return !r || !r.deserialized ? -0 : Kt(r, e >= this.bounds ? 63 : e % 64, o >= this.bounds ? 63 : o % 64)
            }
            getHole(e, o) {
                e = Re(e, 0, this.bounds), o = Re(o, 0, this.bounds);
                let r = this.chunksMap.get(Math.min(Math.floor(e / 64), this.chunkAmount - 1) + Math.min(Math.floor(o / 64), this.chunkAmount - 1) * this.chunkAmount);
                return !r || !r.deserialized ? -0 : ei(r, e >= this.bounds ? 63 : e % 64, o >= this.bounds ? 63 : o % 64)
            }
            getWaterHeight(e, o) {
                e = Re(e, 0, this.bounds), o = Re(o, 0, this.bounds);
                let r = this.chunksMap.get(Math.min(Math.floor(e / 64), this.chunkAmount - 1) + Math.min(Math.floor(o / 64), this.chunkAmount - 1) * this.chunkAmount);
                return !r || !r.deserialized ? -1 : ti(r, e >= this.bounds ? 63 : e % 64, o >= this.bounds ? 63 : o % 64)
            }
            getAreaId(e, o) {
                e = Re(e, 0, this.bounds), o = Re(o, 0, this.bounds);
                let r = this.chunksMap.get(Math.min(Math.floor(e / 64), this.chunkAmount - 1) + Math.min(Math.floor(o / 64), this.chunkAmount - 1) * this.chunkAmount);
                return !r || !r.deserialized ? -0 : jc(r, e >= this.bounds ? 63 : e % 64, o >= this.bounds ? 63 : o % 64)
            }
            getEnvironmentId(e, o) {
                e = Re(e, 0, this.bounds), o = Re(o, 0, this.bounds);
                let r = this.chunksMap.get(Math.min(Math.floor(e / 64), this.chunkAmount - 1) + Math.min(Math.floor(o / 64), this.chunkAmount - 1) * this.chunkAmount);
                return !r || !r.deserialized ? -0 : qc(r, e >= this.bounds ? 63 : e % 64, o >= this.bounds ? 63 : o % 64)
            }
            getNormal(e, o) {
                e = Re(e, 0, this.bounds), o = Re(o, 0, this.bounds);
                let r = this.chunksMap.get(Math.min(Math.floor(e / 64), this.chunkAmount - 1) + Math.min(Math.floor(o / 64), this.chunkAmount - 1) * this.chunkAmount);
                if (!r || !r.deserialized) re(Jc, 0, 0, 0);
                else {
                    e = e >= this.bounds ? 63 : e % 64, o = o >= this.bounds ? 63 : o % 64, e /= 2.6666666666666665, o /= 2.6666666666666665;
                    let n = Math.floor(e) * 2 + 24 * Math.floor(o) * 2;
                    e % 1 + o % 1 > 1 && n++, n *= 3, re(Jc, r.normals[n], r.normals[n + 1], r.normals[n + 2])
                }
                return Jc
            }
            clampV3(e) {
                return e[0] = Re(e[0], 0, this.bounds), e[1] = Re(e[1], 0, 2e3), e[2] = Re(e[2], 0, this.bounds), e
            }
            getChunkFromWorld(e, o) {
                return e = Re(e, 0, this.bounds), o = Re(o, 0, this.bounds), e = Math.min(Math.floor(e / 64), this.chunkAmount - 1), o = Math.min(Math.floor(o / 64), this.chunkAmount - 1), this.chunksMap.get(e + o * this.chunkAmount)
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
                oa(yt, e, o, r, n, i, s);
                let a = 1,
                    c = this.triangleGrid.queryRay(yt.origin, yt.dir, yt.invDir);
                for (let l = 0; l < c.length; ++l) {
                    let f = c[l];
                    a = Math.min(a, js(f[0], f[1], f[2], yt.origin, yt.dir, !1))
                }
                return a
            }
            triangleRaycastAny(e, o, r, n, i, s, a) {
                oa(yt, e, o, r, n, i, s);
                let c = this.triangleGrid.queryRay(yt.origin, yt.dir, yt.invDir);
                for (let l = 0; l < c.length; ++l) {
                    let f = c[l];
                    if (js(f[0], f[1], f[2], yt.origin, yt.dir, a) < 1) return !0
                }
                return !1
            }
            raycastEnvironmentClosest(e, o, r, n, i, s) {
                let a = this.getHeight(e, r) > o,
                    c = this.triangleRaycastClosest(e, o, r, n, i, s);
                c < 1 && (n *= c, i *= c, s *= c);
                let l = 0,
                    f = 0,
                    d = .1;
                if (a) f = 1;
                else
                    for (; l < 100 && f < 1;) {
                        let u = f + d,
                            m = e + n * u,
                            h = o + i * u,
                            g = r + s * u,
                            M = this.getHole(e, r) ? 0 : this.getHeight(m, g),
                            b = h - M;
                        b < 0 ? b > -.05 ? (f += d, l = 100) : d *= .5 : f += d, l++
                    }
                return Math.min(f, c, 1)
            }
            raycastEnvironmentAny(e, o, r, n, i, s, a) {
                let c = Math.sqrt(n * n + i * i + s * s),
                    l = 3 / c,
                    f = n * l,
                    d = i * l,
                    u = s * l,
                    m = e,
                    h = o + a,
                    g = r,
                    M = Math.floor(c / 3),
                    b = 0;
                for (; b < M;)
                    if (++b, m += f, h += d, g += u, this.getHeight(m, g) > h) return !0;
                return this.triangleRaycastAny(e, o, r, n, i, s, !0)
            }
            raycastEnvironmentHeight(e, o, r, n, i) {
                let a = this.getHole(e, o) ? 0 : this.getHeight(e, o),
                    c = 0;
                r > a && (i !== void 0 && Ve(i, this.getNormal(e, o)), c = a);
                let l = r - n;
                ao[0] = ao[3] = e, ao[5] = ao[2] = o, ao[4] = r, ao[1] = n;
                let f = this.triangleGrid.queryAABB(ao);
                if (f.length > 0) {
                    let d = 1 / 0;
                    oa(yt, e, r, o, 0, -l, 0);
                    for (let u = 0; u < f.length; ++u) {
                        let m = f[u],
                            h = js(m[0], m[1], m[2], yt.origin, yt.dir, !1);
                        if (h < d) {
                            d = h;
                            let g = r - h * l;
                            g > c && (c = g, i !== void 0 && Ve(i, m[3]))
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
    var na = class extends ra {
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
            super.parse(e), Dg(this, !e)
        }
        setSmoothTime(e) {
            let o = this.smoothtime - this.time;
            Math.abs(o) > 1 ? this.smoothtime = this.time : o > .05 ? this.smoothtime += e * .5 : o < -.05 ? this.smoothtime += e * 2 : this.smoothtime += e
        }
        getInteriorLight(e, o) {
            let r = this.triangleGrid.queryAABB(o);
            for (let n = 0; n < r.length; ++n)
                if (r[n].length > 4) {
                    Ca(e, r[n][4]);
                    return
                } wr(e, 0, 0, 0, 0)
        }
        createChunks() {}
        createCachedChunk(e, o, r) {
            if (this.chunkCache.length) {
                let n = this.chunkCache.pop();
                return Qc(n, e, o, r, this.chunkAmount), n
            } else {
                let n = gg();
                return Qc(n, e, o, r, this.chunkAmount), n
            }
        }
        returnCachedChunk(e) {
            this.chunkCache.push(e)
        }
        manageChunks(e) {
            yp(e, this.chunkAmount);
            let o = Jn(),
                r = 0,
                n = 0;
            for (; r < tr.length && !(n > 10);) {
                let s = tr[r],
                    a = tr[r + 1],
                    c = tr[r + 2];
                if (Rc(o, [a * 64 - 64, 0, c * 64 - 64], 64 * 3, 1e4, 64 * 3), qs(o, he.frustum, he.frustumConstants))
                    if (this.chunksMap.has(s)) this.chunksMap.get(s).state < 3 && n++;
                    else {
                        let l = this.createCachedChunk(s, a, c);
                        this.addChunk(l), l.state = 1, n++
                    } r += 3
            }
            let i = [];
            for (let s = 0; s < this.chunksArray.length; ++s) {
                let a = this.chunksArray[s];
                dc && (a.x + 5 < ts || a.z + 5 < rs || a.x - 5 > os || a.z - 5 > ns ? i.push(a) : Zc(a)), xg(a, this)
            }
            for (let s = i.length - 1; s >= 0; s--) {
                let a = i[s];
                this.returnCachedChunk(a), this.removeChunk(a), bg(a)
            }
        }
    };
    var Eg = [{
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
    var Vy = performance,
        Tg = () => Vy.now();
    var Kc = y({
        last: 0,
        dtLow: 0,
        dtHigh: 0,
        dtAvg: 0,
        dtLowTrack: 0,
        dtHighTrack: 1 / 0
    });
    window.onload = async () => {
        console.log("Hordes 0.51.8862 Live");
        let t = await fetch("data/game/game.bin?v=8862189");
        qa(Ur.gamedata.decode(new Uint8Array(await t.arrayBuffer()))), applyFaivel(), Cg(), document.body.appendChild(ko);
        let e = new na({});
        Ku(e), e.load(...trackWorld()), e.setTimeFromTickId(startTick()), Vu(gfe.menuTrackSpeed), zu(.03), Yt.push(...Eg), he.fov = 65, Go(he), is(400, 2), Te.fxaa = !0, Te.bloom = !0, vi.set(!1), zg()
    };
    var Ig = 0,
        zg = () => {
            let t = Tg(),
                e = (t - (Ig || 1e3 / 60)) / 1e3;
            Ig = t, Ry(e, t), requestAnimationFrame(zg)
        },
        Ry = (t, e) => {
            trackUpdate(t) || Iu(t), tt(ot, !0), Ii(he, !0), em(e), ne.tick(t), Lg(t, ne), Kc.update(o => (o.dtAvg = (o.dtAvg * 10 + t) / 11, o.dtHighTrack = Math.min(o.dtAvg, o.dtHighTrack), o.dtLowTrack = Math.max(o.dtAvg, o.dtLowTrack), o.last + 1e3 < e && (o.last = e, o.dtLow = o.dtLowTrack, o.dtHigh = o.dtHighTrack, o.dtLowTrack = 0, o.dtHighTrack = 1 / 0), o))
        };
    typeof window < "u" && (window.__svelte || (window.__svelte = {
        v: new Set
    })).v.add(Al);

    function Vg(t, e, o) {
        let r = t.slice();
        return r[4] = e[o], r
    }

    function Rg(t, e, o) {
        let r = t.slice();
        return r[4] = e[o], r
    }

    function Ug(t) {
        let e, o = t[4].name + "",
            r, n, i, s;
        return {
            c() {
                e = C("a"), r = B(o), F(e, "style", n = t[4].style), F(e, "class", i = "navlink " + (window.location.pathname === t[4].ref ? "bold textwhite" : "") + " svelte-dgj98e"), F(e, "href", s = t[4].ref)
            },
            m(a, c) {
                z(a, e, c), w(e, r)
            },
            p: $,
            d(a) {
                a && I(e)
            }
        }
    }

    function Bg(t) {
        let e, o = se(t[2]),
            r = [];
        for (let n = 0; n < o.length; n += 1) r[n] = jg(Vg(t, o, n));
        return {
            c() {
                for (let n = 0; n < r.length; n += 1) r[n].c();
                e = fe()
            },
            m(n, i) {
                for (let s = 0; s < r.length; s += 1) r[s] && r[s].m(n, i);
                z(n, e, i)
            },
            p(n, i) {
                if (i & 4) {
                    o = se(n[2]);
                    let s;
                    for (s = 0; s < o.length; s += 1) {
                        let a = Vg(n, o, s);
                        r[s] ? r[s].p(a, i) : (r[s] = jg(a), r[s].c(), r[s].m(e.parentNode, e))
                    }
                    for (; s < r.length; s += 1) r[s].d(1);
                    r.length = o.length
                }
            },
            d(n) {
                n && I(e), ze(r, n)
            }
        }
    }

    function jg(t) {
        let e, o = t[4].name + "",
            r, n, i, s;
        return {
            c() {
                e = C("a"), r = B(o), F(e, "style", n = t[4].style), F(e, "class", i = "menulink " + (window.location.pathname === t[4].ref ? "bold textwhite" : "") + " svelte-dgj98e"), F(e, "href", s = t[4].ref)
            },
            m(a, c) {
                z(a, e, c), w(e, r)
            },
            p: $,
            d(a) {
                a && I(e)
            }
        }
    }

    function By(t) {
        let e, o, r, n, i, s, a, c, l, f = se(t[2]),
            d = [];
        for (let m = 0; m < f.length; m += 1) d[m] = Ug(Rg(t, f, m));
        let u = t[1] && Bg(t);
        return {
            c() {
                e = C("div"), o = C("div"), r = C("a"), r.innerHTML = '<img alt="Hordes.io" class="icon svelte-dgj98e" src="/data/ui/icon.svg?v=8862189"/>', n = C("nav");
                for (let m = 0; m < d.length; m += 1) d[m].c();
                i = C("img"), u && u.c(), F(r, "href", "/"), F(n, "class", "nav svelte-dgj98e"), F(i, "class", "icon menubtn svelte-dgj98e"), Ne(i.src, s = "/data/ui/icons/menu.svg?v=8862189") || F(i, "src", s), F(o, "class", "navcontainer svelte-dgj98e"), F(e, "class", "row svelte-dgj98e"), F(e, "style", a = t[0] ? "text-align: center;" : "")
            },
            m(m, h) {
                z(m, e, h), w(e, o), w(o, r), w(o, n);
                for (let g = 0; g < d.length; g += 1) d[g] && d[g].m(n, null);
                w(o, i), u && u.m(e, null), c || (l = Pe(i, "click", t[3]), c = !0)
            },
            p(m, [h]) {
                if (h & 4) {
                    f = se(m[2]);
                    let g;
                    for (g = 0; g < f.length; g += 1) {
                        let M = Rg(m, f, g);
                        d[g] ? d[g].p(M, h) : (d[g] = Ug(M), d[g].c(), d[g].m(n, null))
                    }
                    for (; g < d.length; g += 1) d[g].d(1);
                    d.length = f.length
                }
                m[1] ? u ? u.p(m, h) : (u = Bg(m), u.c(), u.m(e, null)) : u && (u.d(1), u = null), h & 1 && a !== (a = m[0] ? "text-align: center;" : "") && F(e, "style", a)
            },
            i: $,
            o: $,
            d(m) {
                m && I(e), ze(d, m), u && u.d(), c = !1, l()
            }
        }
    }

    function jy(t, e, o) {
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
    var el = class extends et {
            constructor(e) {
                super(), st(this, e, jy, By, ut, {
                    center: 0
                })
            }
        },
        qg = el;

    function qy(t) {
        let e;
        return {
            c() {
                e = C("div"), e.innerHTML = '<div class="bounce1 svelte-twvoek"></div><div class="bounce2 svelte-twvoek"></div><div class="bounce3 svelte-twvoek"></div>', F(e, "class", "spinner svelte-twvoek")
            },
            m(o, r) {
                z(o, e, r)
            },
            p: $,
            i: $,
            o: $,
            d(o) {
                o && I(e)
            }
        }
    }
    var tl = class extends et {
            constructor(e) {
                super(), st(this, e, null, qy, li, {})
            }
        },
        ur = tl;

    function Oy(t) {
        let e;
        return {
            c() {
                e = C("div")
            },
            m(o, r) {
                z(o, e, r), t[2](e)
            },
            p: $,
            i: $,
            o: $,
            d(o) {
                o && I(e), t[2](null)
            }
        }
    }

    function Ny(t, e, o) {
        let r = Ht(),
            n, {
                width: i = 300
            } = e;
        window.google ? (window.google.accounts.id.initialize({
            client_id: "1073044439987-o7ehn7j7ip8scfcdi41ve1jqtv9mfgjb.apps.googleusercontent.com",
            callback: async (c, l, f) => {
                await Zo("/auth/google", c) === "ok" && r("signin")
            }
        }), ga(() => {
            window.google.accounts.id.renderButton(n, {
                theme: "filled_blue",
                size: "large",
                width: i,
                logo_aligment: "left"
            })
        })) : alert("Google Sign-In is not loading properly.");

        function s(a) {
            qo[a ? "unshift" : "push"](() => {
                n = a, o(0, n)
            })
        }
        return t.$$set = a => {
            "width" in a && o(1, i = a.width)
        }, [n, i, s]
    }
    var ol = class extends et {
            constructor(e) {
                super(), st(this, e, Ny, Oy, ut, {
                    width: 1
                })
            }
        },
        Og = ol;
    var wo = [{
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

    function Wy(t) {
        let e, o, r, n, i, s, a, c, l = X.ui.elixir.chatsupport + "",
            f, d, u, m, h, g = X.ui.elixir.noads + "",
            M, b, _, k, U, T, V, ae, q, O = X.ui.elixir.bagslots + "",
            oe, Z, te, L, W, A, J, ie, xe, Ie = X.ui.elixir.stashstorage + "",
            _e, ye, rt, Ye, Dt, je, H, Le, Ke, Ze = X.ui.elixir.merchantlimit + "",
            nt, Ee, Xe, Et, qe, co, D, P, x, K = X.ui.elixir.merchantduration + "",
            Me;
        return {
            c() {
                e = C("div"), o = C("div"), o.innerHTML = '<img class="artwork svelte-cbx1m" src="/data/ui/elixir.svg?v=8862189"/><div class="sparkle svelte-cbx1m" style="font-size:35px; left:30%; top:30%; animation-delay: -1s;">+</div><div class="sparkle svelte-cbx1m" style="font-size:50px; left:40%; top:60%; animation-delay: -2s;">+</div><div class="sparkle svelte-cbx1m" style="font-size:80px; left:60%; top:20%; animation-delay: -3s;">+</div>', r = C("div"), n = C("h1"), n.innerHTML = 'Hordes <span class="textsub">Elixir</span>', i = C("div"), s = C("img"), c = Ae(), f = B(l), d = C("div"), u = C("img"), h = Ae(), M = B(g), b = C("div"), _ = C("img"), U = Ae(), T = C("span"), T.textContent = `${wo[0].inventory}`, V = Ae(), ae = C("span"), ae.textContent = `${wo[1].inventory}`, q = Ae(), oe = B(O), Z = C("div"), te = C("img"), W = Ae(), A = C("span"), A.textContent = `${wo[0].stash}`, J = Ae(), ie = C("span"), ie.textContent = `${wo[1].stash}`, xe = Ae(), _e = B(Ie), ye = C("div"), rt = C("img"), Dt = Ae(), je = C("span"), je.textContent = `${wo[0].auction}`, H = Ae(), Le = C("span"), Le.textContent = `${wo[1].auction}`, Ke = Ae(), nt = B(Ze), Ee = C("div"), Xe = C("img"), qe = Ae(), co = C("span"), co.textContent = `${wo[0].auctionHours}h`, D = Ae(), P = C("span"), P.textContent = `${wo[1].auctionHours}h`, x = Ae(), Me = B(K), F(o, "class", "artcontainer svelte-cbx1m"), F(n, "class", "textprimary"), F(s, "class", "svgicon"), Ne(s.src, a = "/data/ui/icons/gem.svg?v=8862189") || F(s, "src", a), F(i, "class", "textwhite"), F(u, "class", "svgicon"), Ne(u.src, m = "/data/ui/icons/check.svg?v=8862189") || F(u, "src", m), F(d, "class", "textwhite"), F(_, "class", "svgicon"), Ne(_.src, k = "/data/ui/icons/check.svg?v=8862189") || F(_, "src", k), F(T, "class", "old svelte-cbx1m"), F(ae, "class", "textsub"), F(b, "class", "textwhite"), F(te, "class", "svgicon"), Ne(te.src, L = "/data/ui/icons/check.svg?v=8862189") || F(te, "src", L), F(A, "class", "old svelte-cbx1m"), F(ie, "class", "textsub"), F(Z, "class", "textwhite"), F(rt, "class", "svgicon"), Ne(rt.src, Ye = "/data/ui/icons/check.svg?v=8862189") || F(rt, "src", Ye), F(je, "class", "old svelte-cbx1m"), F(Le, "class", "textsub"), F(ye, "class", "textwhite"), F(Xe, "class", "svgicon"), Ne(Xe.src, Et = "/data/ui/icons/check.svg?v=8862189") || F(Xe, "src", Et), F(co, "class", "old svelte-cbx1m"), F(P, "class", "textsub"), F(Ee, "class", "textwhite"), F(e, "class", "split svelte-cbx1m")
            },
            m(ee, le) {
                z(ee, e, le), w(e, o), w(e, r), w(r, n), w(r, i), w(i, s), w(i, c), w(i, f), w(r, d), w(d, u), w(d, h), w(d, M), w(r, b), w(b, _), w(b, U), w(b, T), w(b, V), w(b, ae), w(b, q), w(b, oe), w(r, Z), w(Z, te), w(Z, W), w(Z, A), w(Z, J), w(Z, ie), w(Z, xe), w(Z, _e), w(r, ye), w(ye, rt), w(ye, Dt), w(ye, je), w(ye, H), w(ye, Le), w(ye, Ke), w(ye, nt), w(r, Ee), w(Ee, Xe), w(Ee, qe), w(Ee, co), w(Ee, D), w(Ee, P), w(Ee, x), w(Ee, Me)
            },
            p: $,
            i: $,
            o: $,
            d(ee) {
                ee && I(e)
            }
        }
    }
    var rl = class extends et {
            constructor(e) {
                super(), st(this, e, null, Wy, ut, {})
            }
        },
        Ng = rl;
    var Wg = async t => {
        let o = await (await fetch("api/user/join", {
            method: "POST",
            body: JSON.stringify({
                id: t
            })
        })).json();
        if (o.world) hn.set(o.world), gn.set(t);
        else throw hn.set(void 0), gn.set(void 0), o.result || "Unknown Error";
        return !0
    };

    function Gg(t, e, o) {
        let r = t.slice();
        return r[23] = e[o], r
    }

    function Hg(t, e, o) {
        let r = t.slice();
        return r[26] = e[o], r[28] = o, r
    }

    function Gy(t) {
        let e, o;
        return e = new ur({}), {
            c() {
                vt(e.$$.fragment)
            },
            m(r, n) {
                mt(e, r, n), o = !0
            },
            p: $,
            i(r) {
                o || (de(e.$$.fragment, r), o = !0)
            },
            o(r) {
                pe(e.$$.fragment, r), o = !1
            },
            d(r) {
                pt(e, r)
            }
        }
    }

    function Hy(t) {
        let e, o, r, n = {
            ctx: t,
            current: null,
            token: null,
            hasCatch: !0,
            pending: Qy,
            then: Xy,
            catch: Yy,
            value: 22,
            error: 29,
            blocks: [, , , ]
        };
        return vr(o = t[7], n), {
            c() {
                e = fe(), n.block.c()
            },
            m(i, s) {
                z(i, e, s), n.block.m(i, n.anchor = s), n.mount = () => e.parentNode, n.anchor = e, r = !0
            },
            p(i, s) {
                t = i, n.ctx = t, s & 128 && o !== (o = t[7]) && vr(o, n) || hi(n, t, s)
            },
            i(i) {
                r || (de(n.block), r = !0)
            },
            o(i) {
                for (let s = 0; s < 3; s += 1) {
                    let a = n.blocks[s];
                    pe(a)
                }
                r = !1
            },
            d(i) {
                i && I(e), n.block.d(i), n.token = null, n = null
            }
        }
    }

    function $y(t) {
        let e, o, r, n, i = t[6] > 0 ? " in  " + t[6] : "",
            s, a, c, l, f, d;
        return e = new Ng({}), {
            c() {
                vt(e.$$.fragment), o = C("div"), r = C("div"), n = B("Continue "), s = B(i), c = C("div"), c.textContent = "Buy", F(r, "class", a = "btn textcenter bigbtn " + (t[6] > 0 ? "disabled textwhite" : "grey textprimary") + " svelte-2d3bbt"), F(c, "class", "btn textcenter bigbtn primary svelte-2d3bbt"), F(o, "class", "grid two"), We(o, "grid-gap", "22px"), We(o, "margin-top", "33px"), We(o, "margin-bottom", "13px")
            },
            m(u, m) {
                mt(e, u, m), z(u, o, m), w(o, r), w(r, n), w(r, s), w(o, c), l = !0, f || (d = [Pe(r, "click", t[14]), Pe(c, "click", t[15])], f = !0)
            },
            p(u, m) {
                (!l || m & 64) && i !== (i = u[6] > 0 ? " in  " + u[6] : "") && Y(s, i), (!l || m & 64 && a !== (a = "btn textcenter bigbtn " + (u[6] > 0 ? "disabled textwhite" : "grey textprimary") + " svelte-2d3bbt")) && F(r, "class", a)
            },
            i(u) {
                l || (de(e.$$.fragment, u), l = !0)
            },
            o(u) {
                pe(e.$$.fragment, u), l = !1
            },
            d(u) {
                u && I(o), pt(e, u), f = !1, it(d)
            }
        }
    }

    function Yy(t) {
        let e, o = t[29] + "",
            r, n, i, s;
        return {
            c() {
                e = C("p"), r = B(o), n = C("div"), n.textContent = `${X.ui.ok}`, F(n, "class", "btn textcenter bigbtn playbtn primary svelte-2d3bbt")
            },
            m(a, c) {
                z(a, e, c), w(e, r), z(a, n, c), i || (s = Pe(n, "click", t[20]), i = !0)
            },
            p(a, c) {
                c & 128 && o !== (o = a[29] + "") && Y(r, o)
            },
            i: $,
            o: $,
            d(a) {
                a && (I(e), I(n)), i = !1, s()
            }
        }
    }

    function Xy(t) {
        let e, o, r, n, i, s, a = X.ui.charmenu.select.enterWorld + "",
            c, l, f, d, u = t[3] > -1 && $g(t),
            m = se(t[0]),
            h = [];
        for (let b = 0; b < m.length; b += 1) h[b] = Yg(Hg(t, m, b));
        let g = se(t[8]),
            M = [];
        for (let b = 0; b < g.length; b += 1) M[b] = Xg(Gg(t, g, b));
        return {
            c() {
                e = C("div"), o = C("div"), r = C("h2"), r.textContent = `${X.ui.charmenu.select.title}`, u && u.c(), n = C("div");
                for (let b = 0; b < h.length; b += 1) h[b].c();
                i = fe();
                for (let b = 0; b < M.length; b += 1) M[b].c();
                s = C("div"), c = B(a), F(r, "class", "svelte-2d3bbt"), F(o, "class", "header svelte-2d3bbt"), F(n, "class", "list svelte-2d3bbt"), F(s, "class", l = "btn textcenter bigbtn playbtn " + (t[3] > -1 ? "primary" : "disabled") + " svelte-2d3bbt"), F(e, "class", "fadeIn")
            },
            m(b, _) {
                z(b, e, _), w(e, o), w(o, r), u && u.m(o, null), w(e, n);
                for (let k = 0; k < h.length; k += 1) h[k] && h[k].m(n, null);
                w(n, i);
                for (let k = 0; k < M.length; k += 1) M[k] && M[k].m(n, null);
                w(e, s), w(s, c), f || (d = Pe(s, "click", t[19]), f = !0)
            },
            p(b, _) {
                if (b[3] > -1 ? u ? u.p(b, _) : (u = $g(b), u.c(), u.m(o, null)) : u && (u.d(1), u = null), _ & 9) {
                    m = se(b[0]);
                    let k;
                    for (k = 0; k < m.length; k += 1) {
                        let U = Hg(b, m, k);
                        h[k] ? h[k].p(U, _) : (h[k] = Yg(U), h[k].c(), h[k].m(n, i))
                    }
                    for (; k < h.length; k += 1) h[k].d(1);
                    h.length = m.length
                }
                if (_ & 768) {
                    g = se(b[8]);
                    let k;
                    for (k = 0; k < g.length; k += 1) {
                        let U = Gg(b, g, k);
                        M[k] ? M[k].p(U, _) : (M[k] = Xg(U), M[k].c(), M[k].m(n, null))
                    }
                    for (; k < M.length; k += 1) M[k].d(1);
                    M.length = g.length
                }
                _ & 8 && l !== (l = "btn textcenter bigbtn playbtn " + (b[3] > -1 ? "primary" : "disabled") + " svelte-2d3bbt") && F(s, "class", l)
            },
            i: $,
            o: $,
            d(b) {
                b && I(e), u && u.d(), ze(h, b), ze(M, b), f = !1, d()
            }
        }
    }

    function $g(t) {
        let e, o, r;
        return {
            c() {
                e = C("div"), e.textContent = `\u{1F5D1}\uFE0F ${X.ui.charmenu.delete.title}`, F(e, "class", "delbtn marg-top svelte-2d3bbt")
            },
            m(n, i) {
                z(n, e, i), o || (r = Pe(e, "click", t[16]), o = !0)
            },
            p: $,
            d(n) {
                n && I(e), o = !1, r()
            }
        }
    }

    function Yg(t) {
        let e, o, r = t[26].name + "",
            n, i, s, a, c, l, f, d = t[26].level + "",
            u, m, h = X.classes[t[26].class].name + "",
            g, M, b, _ = t[26].world + "",
            k, U, T, V;

        function ae() {
            return t[17](t[28])
        }
        return {
            c() {
                e = C("div"), o = C("p"), n = B(r), i = C("p"), s = C("img"), c = C("img"), f = B("Lv. "), u = B(d), m = Ae(), g = B(h), M = Ae(), b = C("span"), k = B(_), F(o, "class", "name textprimary svelte-2d3bbt"), F(s, "class", "texticon"), Ne(s.src, a = ja(t[26].faction)) || F(s, "src", a), F(c, "class", "texticon"), Ne(c.src, l = Ba(t[26].class)) || F(c, "src", l), F(b, "class", "textgrey loctext capitalize"), F(i, "class", "textwhite svelte-2d3bbt"), F(e, "class", U = "charbtn btn " + (t[3] == t[28] ? "border primary selec" : "") + " svelte-2d3bbt")
            },
            m(q, O) {
                z(q, e, O), w(e, o), w(o, n), w(e, i), w(i, s), w(i, c), w(i, f), w(i, u), w(i, m), w(i, g), w(i, M), w(i, b), w(b, k), T || (V = Pe(e, "click", ae), T = !0)
            },
            p(q, O) {
                t = q, O & 1 && r !== (r = t[26].name + "") && Y(n, r), O & 1 && !Ne(s.src, a = ja(t[26].faction)) && F(s, "src", a), O & 1 && !Ne(c.src, l = Ba(t[26].class)) && F(c, "src", l), O & 1 && d !== (d = t[26].level + "") && Y(u, d), O & 1 && h !== (h = X.classes[t[26].class].name + "") && Y(g, h), O & 1 && _ !== (_ = t[26].world + "") && Y(k, _), O & 8 && U !== (U = "charbtn btn " + (t[3] == t[28] ? "border primary selec" : "") + " svelte-2d3bbt") && F(e, "class", U)
            },
            d(q) {
                q && I(e), T = !1, V()
            }
        }
    }

    function Xg(t) {
        let e, o, r, n, i;
        return {
            c() {
                e = C("div"), o = C("p"), o.textContent = `${X.ui.charmenu.select.emptySlot}`, r = C("p"), r.textContent = `${X.ui.charmenu.select.create}`, F(o, "class", "name textgrey svelte-2d3bbt"), F(r, "class", "info textgrey svelte-2d3bbt"), F(e, "class", "charbtn btn svelte-2d3bbt")
            },
            m(s, a) {
                z(s, e, a), w(e, o), w(e, r), n || (i = Pe(e, "click", t[18]), n = !0)
            },
            p: $,
            d(s) {
                s && I(e), n = !1, i()
            }
        }
    }

    function Qy(t) {
        let e, o;
        return e = new ur({}), {
            c() {
                vt(e.$$.fragment)
            },
            m(r, n) {
                mt(e, r, n), o = !0
            },
            p: $,
            i(r) {
                o || (de(e.$$.fragment, r), o = !0)
            },
            o(r) {
                pe(e.$$.fragment, r), o = !1
            },
            d(r) {
                pt(e, r)
            }
        }
    }

    function Zy(t) {
        let e, o, r, n, i = [$y, Hy, Gy],
            s = [];

        function a(c, l) {
            return c[5] ? 0 : c[4] ? 2 : 1
        }
        return o = a(t, -1), r = s[o] = i[o](t), {
            c() {
                e = C("div"), r.c(), We(e, "min-height", t[2] + "px"), We(e, "width", t[1] + "px")
            },
            m(c, l) {
                z(c, e, l), s[o].m(e, null), n = !0
            },
            p(c, [l]) {
                let f = o;
                o = a(c, l), o === f ? s[o].p(c, l) : (wt(), pe(s[f], 1, 1, () => {
                    s[f] = null
                }), _t(), r = s[o], r ? r.p(c, l) : (r = s[o] = i[o](c), r.c()), de(r, 1), r.m(e, null)), (!n || l & 4) && We(e, "min-height", c[2] + "px"), (!n || l & 2) && We(e, "width", c[1] + "px")
            },
            i(c) {
                n || (de(r), n = !0)
            },
            o(c) {
                pe(r), n = !1
            },
            d(c) {
                c && I(e), s[o].d()
            }
        }
    }

    function Jy(t, e, o) {
        let r, n = Ht(),
            {
                elixir: i = !1
            } = e,
            s = !1,
            a = 300,
            c = 417,
            l = [],
            f = -1,
            d = async () => {
                let O = await fetch("/api/user/players"),
                    oe = await O.json();
                O.ok && (o(0, l = oe), s = l.some(Z => Z.level > 40))
            }, u = !1, m = async () => {
                if (!(u || f < 0)) {
                    o(4, u = !0);
                    try {
                        await Wg(l[f].id), window.location.href = "/play", o(4, u = !1)
                    } catch (O) {
                        throw o(1, a = 300), o(2, c = 417), o(4, u = !1), O
                    }
                }
            }, h = !1, g = 3, M = () => {
                if (i || !s) o(7, b = m());
                else {
                    o(5, h = !0), o(1, a = 405), o(2, c = 0);
                    let O = setInterval(() => {
                        o(6, g--, g), g < 1 && clearInterval(O)
                    }, 1e3)
                }
            }, b = d(), _ = () => {
                o(7, b = m()), o(5, h = !1)
            }, k = () => {
                window.location.href = "/account"
            }, U = O => n("message", {
                state: "delete",
                ...l[f]
            }), T = O => o(3, f = O), V = O => n("message", {
                state: "create"
            }), ae = () => {
                M()
            }, q = () => {
                o(7, b = d())
            };
        return t.$$set = O => {
            "elixir" in O && o(13, i = O.elixir)
        }, t.$$.update = () => {
            t.$$.dirty & 1 && o(8, r = new Array(Math.max(0, 5 - l.length)))
        }, [l, a, c, f, u, h, g, b, r, n, d, m, M, i, _, k, U, T, V, ae, q]
    }
    var nl = class extends et {
            constructor(e) {
                super(), st(this, e, Jy, Zy, ut, {
                    elixir: 13
                })
            }
        },
        Qg = nl;

    function Zg(t) {
        let e, o;
        return {
            c() {
                e = C("p"), o = B(t[1]), F(e, "class", "textred")
            },
            m(r, n) {
                z(r, e, n), w(e, o)
            },
            p(r, n) {
                n & 2 && Y(o, r[1])
            },
            d(r) {
                r && I(e)
            }
        }
    }

    function Ky(t) {
        let e, o = X.ui.charmenu.delete.title + "",
            r, n, i = t[0].name + "",
            s, a, c, l, f, d = X.ui.charmenu.delete.title + "",
            u, m, h, g, M, b = t[1] !== void 0 && Zg(t);
        return {
            c() {
                e = C("h2"), r = B(o), n = Ae(), s = B(i), a = C("p"), a.textContent = `${X.ui.charmenu.delete.info}`, b && b.c(), c = C("input"), f = C("div"), u = B(d), h = C("div"), h.textContent = `${X.ui.back}`, F(e, "class", "textred"), F(c, "type", "text"), F(c, "placeholder", l = X.ui.charmenu.delete.placeholder), F(f, "class", m = "btn delbtn " + (t[2] == t[0].name ? "red textwhite" : "disabled") + " svelte-m8q1kq"), F(h, "class", "btn delbtn grey textwhite svelte-m8q1kq")
            },
            m(_, k) {
                z(_, e, k), w(e, r), w(e, n), w(e, s), z(_, a, k), b && b.m(_, k), z(_, c, k), pr(c, t[2]), z(_, f, k), w(f, u), z(_, h, k), g || (M = [Pe(c, "input", t[5]), Pe(f, "click", t[4]), Pe(h, "click", t[6])], g = !0)
            },
            p(_, [k]) {
                k & 1 && i !== (i = _[0].name + "") && Y(s, i), _[1] !== void 0 ? b ? b.p(_, k) : (b = Zg(_), b.c(), b.m(c.parentNode, c)) : b && (b.d(1), b = null), k & 4 && c.value !== _[2] && pr(c, _[2]), k & 5 && m !== (m = "btn delbtn " + (_[2] == _[0].name ? "red textwhite" : "disabled") + " svelte-m8q1kq") && F(f, "class", m)
            },
            i: $,
            o: $,
            d(_) {
                _ && (I(e), I(a), I(c), I(f), I(h)), b && b.d(_), g = !1, it(M)
            }
        }
    }

    function e4(t, e, o) {
        let r = Ht(),
            {
                detail: n
            } = e,
            i, s = "",
            a = async () => {
                if (s !== n.name) return;
                let f = await Zo("/api/player/delete", {
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
    var il = class extends et {
            constructor(e) {
                super(), st(this, e, e4, Ky, ut, {
                    detail: 0
                })
            }
        },
        Jg = il;
    var ia = new Map,
        t4 = !1;
    var Kg = (t, e, o) => {
        t4 && e && t !== e.step && (e.cdimg !== void 0 && (ia.get(o)[e.step].push(e.removeChild(e.cdimg)), e.cdimg = void 0), (e.step = t) > 0 && (ia.get(o)[e.step].length === 1 ? e.cdimg = ia.get(o)[e.step][0].cloneNode() : e.cdimg = ia.get(o)[e.step].pop(), e.appendChild(e.cdimg)))
    };

    function ev(t) {
        let e, o;
        return {
            c() {
                e = C("span"), o = B(t[1]), F(e, "class", "slottext key svelte-ctcp9l")
            },
            m(r, n) {
                z(r, e, n), w(e, o)
            },
            p(r, n) {
                n[0] & 2 && Y(o, r[1])
            },
            d(r) {
                r && I(e)
            }
        }
    }

    function tv(t) {
        let e, o;
        return {
            c() {
                e = C("span"), o = B(t[2]), F(e, "class", "slottext stacks svelte-ctcp9l")
            },
            m(r, n) {
                z(r, e, n), w(e, o)
            },
            p(r, n) {
                n[0] & 4 && Y(o, r[2])
            },
            d(r) {
                r && I(e)
            }
        }
    }

    function ov(t) {
        let e, o = (t[4] > 99 ? Math.round(t[4] / 60) + "'" : t[4] <= 3 ? t[4].toFixed(1) : Math.ceil(t[4])) + "",
            r;
        return {
            c() {
                e = C("div"), r = B(o), F(e, "class", "time absCentered slottext svelte-ctcp9l")
            },
            m(n, i) {
                z(n, e, i), w(e, r)
            },
            p(n, i) {
                i[0] & 16 && o !== (o = (n[4] > 99 ? Math.round(n[4] / 60) + "'" : n[4] <= 3 ? n[4].toFixed(1) : Math.ceil(n[4])) + "") && Y(r, o)
            },
            d(n) {
                n && I(e)
            }
        }
    }

    function rv(t) {
        let e;
        return {
            c() {
                e = C("div"), F(e, "class", "autocast svelte-ctcp9l")
            },
            m(o, r) {
                z(o, e, r)
            },
            d(o) {
                o && I(e)
            }
        }
    }

    function nv(t) {
        let e, o, r, n = t[31].default,
            i = pl(n, t, t[30], null);
        return {
            c() {
                e = C("div"), i && i.c(), F(e, "class", o = "border " + t[5] + " slotdescription svelte-ctcp9l"), F(e, "style", t[9])
            },
            m(s, a) {
                z(s, e, a), i && i.m(e, null), t[33](e), r = !0
            },
            p(s, a) {
                i && i.p && (!r || a[0] & 1073741824) && vl(i, n, s, s[30], r ? gl(n, s[30], a, null) : xl(s[30]), null), (!r || a[0] & 32 && o !== (o = "border " + s[5] + " slotdescription svelte-ctcp9l")) && F(e, "class", o), (!r || a[0] & 512) && F(e, "style", s[9])
            },
            i(s) {
                r || (de(i, s), r = !0)
            },
            o(s) {
                pe(i, s), r = !1
            },
            d(s) {
                s && I(e), i && i.d(s), t[33](null)
            }
        }
    }

    function o4(t) {
        let e, o, r, n, i, s, a, c, l, f, d, u, m = t[1] !== void 0 && ev(t),
            h = t[2] !== void 0 && tv(t),
            g = Te.cdTextSkills && t[4] !== void 0 && ov(t),
            M = t[10] && rv(t),
            b = t[8] && t[11] && !t[15] && nv(t);
        return {
            c() {
                e = C("div"), m && m.c(), o = fe(), h && h.c(), r = fe(), g && g.c(), n = C("div"), M && M.c(), s = C("img"), b && b.c(), F(n, "class", i = "overlay " + t[16] + " " + (!t[14] || t[3] > 0 && t[3] < 10 ? "" : "offCd") + " svelte-ctcp9l"), F(s, "class", a = "icon " + t[6] + " svelte-ctcp9l"), Ne(s.src, c = t[17]) || F(s, "src", c), F(e, "id", t[7]), F(e, "class", l = "border " + t[5] + " " + (t[15] && t[15].data == t[0] ? "grey" : "") + " slot " + (t[11] ? "hover" : "") + " " + (t[0] !== void 0 || t[15] ? "filled" : "") + " svelte-ctcp9l")
            },
            m(_, k) {
                z(_, e, k), m && m.m(e, null), w(e, o), h && h.m(e, null), w(e, r), g && g.m(e, null), w(e, n), t[32](n), M && M.m(e, null), w(e, s), b && b.m(e, null), f = !0, d || (u = [Pe(e, "pointerenter", t[20]), Pe(e, "pointerleave", t[21]), Pe(e, "pointerdown", t[18]), Pe(e, "pointerup", t[19])], d = !0)
            },
            p(_, k) {
                _[1] !== void 0 ? m ? m.p(_, k) : (m = ev(_), m.c(), m.m(e, o)) : m && (m.d(1), m = null), _[2] !== void 0 ? h ? h.p(_, k) : (h = tv(_), h.c(), h.m(e, r)) : h && (h.d(1), h = null), Te.cdTextSkills && _[4] !== void 0 ? g ? g.p(_, k) : (g = ov(_), g.c(), g.m(e, n)) : g && (g.d(1), g = null), (!f || k[0] & 81928 && i !== (i = "overlay " + _[16] + " " + (!_[14] || _[3] > 0 && _[3] < 10 ? "" : "offCd") + " svelte-ctcp9l")) && F(n, "class", i), _[10] ? M || (M = rv(_), M.c(), M.m(e, s)) : M && (M.d(1), M = null), (!f || k[0] & 64 && a !== (a = "icon " + _[6] + " svelte-ctcp9l")) && F(s, "class", a), (!f || k[0] & 131072 && !Ne(s.src, c = _[17])) && F(s, "src", c), _[8] && _[11] && !_[15] ? b ? (b.p(_, k), k[0] & 35072 && de(b, 1)) : (b = nv(_), b.c(), de(b, 1), b.m(e, null)) : b && (wt(), pe(b, 1, 1, () => {
                    b = null
                }), _t()), (!f || k[0] & 128) && F(e, "id", _[7]), (!f || k[0] & 34849 && l !== (l = "border " + _[5] + " " + (_[15] && _[15].data == _[0] ? "grey" : "") + " slot " + (_[11] ? "hover" : "") + " " + (_[0] !== void 0 || _[15] ? "filled" : "") + " svelte-ctcp9l")) && F(e, "class", l)
            },
            i(_) {
                f || (de(b), f = !0)
            },
            o(_) {
                pe(b), f = !1
            },
            d(_) {
                _ && I(e), m && m.d(), h && h.d(), g && g.d(), t[32](null), M && M.d(), b && b.d(), d = !1, it(u)
            }
        }
    }

    function r4(t, e, o) {
        let r, n, i, s;
        di(t, xi, H => o(15, s = H));
        let {
            $$slots: a = {},
            $$scope: c
        } = e, {
            data: l = void 0
        } = e, {
            key: f
        } = e, {
            stacks: d
        } = e, {
            cd: u
        } = e, {
            remaining: m
        } = e, {
            border: h = "grey"
        } = e, {
            img: g
        } = e, {
            meta: M
        } = e, {
            css: b = ""
        } = e, {
            id: _ = ""
        } = e, {
            describe: k = !0
        } = e, {
            queued: U = !1
        } = e, {
            pickable: T = !0
        } = e, {
            descRoot: V
        } = e, {
            descPos: ae = "bottom: 100%; right: 100%;"
        } = e, {
            auto: q = !1
        } = e, {
            status: O = 0
        } = e, {
            clickToUse: oe = !1
        } = e, {
            shift: Z = !1
        } = e, te = !1, L = !1, W = (H, Le) => H ? "queued" : Le == 5 ? "oom" : Le == 6 ? "range" : Le == 11 || Le == 9 ? "combat" : "", A, J = H => {
            H.altKey || (oe && !Z ? rt("use", {
                e: H,
                ...M
            }) : (L = !0, o(11, te = !1), rt("click", M)))
        }, ie = H => {
            H.button == 2 ? Z ? rt("use", {
                e: H,
                ...M
            }) : rt("context", {
                e: H,
                ...M
            }) : s ? (rt("move", {
                from: s.meta,
                to: M
            }), s.meta && s.meta.store && s.meta.store.set(), pa(xi, s = void 0, s)) : oe ? Z && ye() : H.altKey ? M.item && M.item.dbid && Pl.update(Le => Le + `>${M.item.dbid}`) : ye(), L = !1
        }, xe = H => {
            o(11, te = !0)
        }, Ie = () => {
            rt("discard")
        }, _e = H => {
            o(11, te = !1), l && L && (L = !1, ye())
        }, ye = () => {
            !l || T === !1 || l.moving || pa(xi, s = {
                data: l,
                img: g,
                meta: M,
                border: h,
                css: b,
                discard: Ie
            }, s)
        }, rt = Ht(), Ye;

        function Dt(H) {
            qo[H ? "unshift" : "push"](() => {
                Ye = H, o(13, Ye)
            })
        }

        function je(H) {
            qo[H ? "unshift" : "push"](() => {
                A = H, o(12, A)
            })
        }
        return t.$$set = H => {
            "data" in H && o(0, l = H.data), "key" in H && o(1, f = H.key), "stacks" in H && o(2, d = H.stacks), "cd" in H && o(3, u = H.cd), "remaining" in H && o(4, m = H.remaining), "border" in H && o(5, h = H.border), "img" in H && o(22, g = H.img), "meta" in H && o(23, M = H.meta), "css" in H && o(6, b = H.css), "id" in H && o(7, _ = H.id), "describe" in H && o(8, k = H.describe), "queued" in H && o(24, U = H.queued), "pickable" in H && o(25, T = H.pickable), "descRoot" in H && o(26, V = H.descRoot), "descPos" in H && o(9, ae = H.descPos), "auto" in H && o(10, q = H.auto), "status" in H && o(27, O = H.status), "clickToUse" in H && o(28, oe = H.clickToUse), "shift" in H && o(29, Z = H.shift), "$$scope" in H && o(30, c = H.$$scope)
        }, t.$$.update = () => {
            t.$$.dirty[0] & 16392 && o(14, r = r || u > 0), t.$$.dirty[0] & 138446856 && o(17, n = g ? s && te || u > 0 || O == -1 ? g.replace(".", "_grey.").replace(/_q[0-9]/g, "") : g : `/data/ui/slotbg/bg.${Tn}?v=8862189`), t.$$.dirty[0] & 150995968 && o(16, i = W(q || U, O)), t.$$.dirty[0] & 67112960 && A && V && V.appendChild(A), t.$$.dirty[0] & 8200 && Kg(Math.floor(u || 0), Ye, 40)
        }, [l, f, d, u, m, h, b, _, k, ae, q, te, A, Ye, r, s, i, n, J, ie, xe, _e, g, M, U, T, V, O, oe, Z, c, a, Dt, je]
    }
    var sl = class extends et {
            constructor(e) {
                super(), st(this, e, r4, o4, li, {
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
        iv = sl;
    var sv = (t, e) => typeof t == "function" ? t(e) : t;
    var al = Object.keys({
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
                this.id = e.id, this.intervalHaste = e.intervalHaste !== !1, this.intervalDuration = e.intervalDuration, this.intervalOnApply = e.intervalOnApply || !1, this.maxStacks = e.maxStacks, this.passive = e.passive || !1, this.broadcastPassive = e.broadcastPassive || !1, this.clearOnDeath = e.clearOnDeath !== !1, this.custom = e.custom, this.unique = e.unique || !1, this.dr = e.dr || 0, this.type = e.type || 0, this.tags = e.tags || new Set, this.immuneAll = e.immuneAll || !1, this.immuneCC = e.immuneCC || !1, al.forEach(o => {
                    this[o] = e[o]
                }), this.customIcon = e.customIcon, this.icon = e.icon, this.fx = e.fx || {}
            }
            onSet(e, o, r) {
                this.tags.forEach(n => {
                    r.tags.get(n).add(e)
                }), al.forEach(n => {
                    this[n] && (n !== "incapacitated" && n !== "movementOverride" || r.immuneCC.size <= 0) && r[n].add(e)
                })
            }
            onRemove(e, o, r) {
                this.tags.forEach(n => {
                    r.tags.get(n).delete(e)
                }), al.forEach(n => {
                    this[n] && r[n].delete(e)
                })
            }
        };
    var av = new S({
        id: 77,
        passive: !0,
        statsStatic: (t, e) => {
            e.addStat(12, Math.round(t.level * 40)), e.addStat(31, Math.round(t.level * 200))
        }
    });
    var cv = new S({
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
    var lv = (t, e) => {
        let o = e / 65535;
        return [(t >>> 16) * o, (t & 65535) * o]
    };
    var nn = (t, e) => {
        if (t.static || !e.data) return !1;
        let o = lv(e.data[0] * 2, 6400),
            r = [o[0] - t.pos[0], o[1] - t.pos[2]];
        return P1(r) > t.size ? (t.setSteer(0, 1), t.setRot(ch(r)), t.setJump(0), !0) : (t.setSteer(0, 0), !1)
    };
    var fv = new S({
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
            nn(r, n) || r.buffs.removeBuff(n.id, r.id)
        }
    });
    var dv = new S({
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
    var uv = new S({
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
    var mv = new S({
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
    var pv = new S({
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
    var hv = new S({
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
            nn(r, n)
        },
        intervalDuration: 1
    });
    var gv = new S({
        id: 61,
        passive: !0,
        icon: "ui/skills/8",
        statsConvert: [
            [0, .3, 10],
            [0, .3, 11],
            [0, .3, 8]
        ]
    });
    var vv = new S({
        id: 89,
        type: 1,
        tags: new Set([3]),
        icon: "ui/skills/34",
        statsStatic: (t, e) => {
            e.maxStat(32, 10 + t.level * 10)
        }
    });
    var xv = new S({
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
    var bv = new S({
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
    var wv = new S({
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
    var _v = new S({
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
    var yv = new S({
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
    var Mv = new S({
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
    var kv = new S({
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
    var Fv = new S({
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
    var Cv = new S({
        id: 107,
        maxStacks: 5,
        icon: "ui/skills/43",
        fx: {
            stick: 20
        }
    });
    var Av = new S({
        id: 106,
        passive: !0
    });
    var Sv = new S({
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
    var Pv = new S({
        id: 64,
        passive: !0,
        icon: "ui/skills/8",
        statsConvert: [
            [4, .4, 10],
            [4, .4, 11]
        ]
    });
    var Lv = new S({
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
    var Dv = new S({
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
            nn(r, n)
        }
    });
    var Ev = new S({
        id: 120,
        passive: !0
    });
    var Tv = new S({
        id: 82,
        passive: !0,
        statsStatic: (t, e) => {
            e.addStat(14, Math.round(t.level * 30))
        }
    });
    var Iv = new S({
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
    var zv = new S({
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
    var Vv = new S({
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
    var Rv = new S({
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
    var Uv = new S({
        id: 95,
        maxStacks: 4,
        icon: "ui/skills/31",
        instantCast: new Set([31]),
        beforeDamageEnemy: {
            31: (t, e, o, r) => {}
        }
    });
    var Bv = new S({
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
    var jv = new S({
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
    var qv = new S({
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
    var Ov = new S({
        id: 63,
        passive: !0,
        icon: "ui/skills/8",
        statsConvert: [
            [2, .4, 10],
            [2, .4, 11]
        ]
    });
    var Nv = new S({
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
    var Wv = new S({
        id: 118,
        passive: !0
    });
    var Gv = new S({
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
    var Hv = new S({
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
    var $v = new S({
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
    var Yv = new S({
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
    var Xv = new S({
        id: 108,
        icon: "ui/skills/extraBolt",
        fx: {
            stick: 22
        }
    });
    var Qv = new S({
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
    var Zv = new S({
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
    var Jv = new S({
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
    var Kv = new S({
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
    var ex = new S({
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
    var tx = new S({
        id: 100,
        passive: !0
    });
    var ox = new S({
        id: 79,
        icon: "ui/skills/23",
        fx: {
            stick: 17
        }
    });
    var rx = new S({
        id: 70,
        passive: !0
    });
    var nx = new S({
        id: 62,
        passive: !0,
        icon: "ui/skills/8",
        statsConvert: [
            [3, .4, 10],
            [3, .4, 11]
        ]
    });
    var ix = new S({
        id: 112,
        type: 0,
        icon: "ui/skills/charm4",
        fx: {
            stick: 42,
            color: [0, 0, 1, .7]
        }
    });
    var sx = new S({
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
    var ax = new S({
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
    var cx = new S({
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
    var lx = new S({
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
    var fx = new S({
        id: 124,
        passive: !1,
        icon: "ui/skills/hellspawn",
        fx: {
            stick: 160
        }
    });
    var dx = new S({
        id: 109,
        type: 0,
        icon: "ui/skills/charm1",
        fx: {
            stick: 61,
            color: [.3, .3, .3, .9]
        }
    });
    var ux = new S({
        id: 123,
        passive: !0
    });
    var mx = new S({
        id: 93,
        breakOnCast: !0,
        tags: new Set([12]),
        icon: "ui/skills/39",
        customIcon: t => "items/mount/mount" + Tr[t.data[0]].tier + "_q1",
        fx: {
            mount: t => Tr[t.data[0]].skin,
            apply: 76,
            endSound: 69
        },
        statsStatic: (t, e) => {
            e.addStat(15, 60 + (t.data[1] || 0) * 8)
        }
    });
    var px = new S({
        id: 130,
        clearOnDeath: !1,
        tags: new Set([12]),
        icon: "ui/skills/39",
        customIcon: t => "items/pet/pet" + Tr[t.data[0]].tier + "_q1"
    });
    var hx = new S({
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
    var gx = new S({
        id: 127,
        type: 0,
        maxStacks: 8,
        clearOnDeath: !1,
        icon: "ui/skills/obeliskbuff"
    });
    var vx = new S({
        id: 125,
        maxStacks: 25,
        type: 1,
        icon: "ui/skills/pierce",
        multiplyIncomingDamage: {
            0: t => 1 + t.stacks * .2,
            64: t => 1 + t.stacks * .2
        }
    });
    var xx = new S({
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
    var cl = ["potionhp", "potionMp"].map((t, e) => new S({
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
    var bx = new S({
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
    var wx = new S({
        id: 102,
        maxStacks: 99,
        icon: "ui/skills/suddenDeath",
        statsStatic: (t, e) => {
            e.maxStat(33, t.stacks)
        }
    });
    var _x = new S({
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
    var yx = new S({
        id: 131,
        passive: !0
    });
    var Mx = new S({
        id: 132,
        passive: !0
    });
    var kx = new S({
        id: 128,
        type: 0,
        tags: new Set([12]),
        icon: "ui/skills/ghost",
        fx: {
            color: [.9, 1.2, .8, .8],
            alpha: [.3]
        }
    });
    var Fx = new S({
        id: 129,
        type: 0,
        icon: "ui/skills/moderator",
        fx: {
            color: [.3, 1.2, .9, .7],
            alpha: [.3]
        }
    });
    var Cx = new S({
        id: 133,
        passive: !0
    });
    var Ax = new S({
            id: 134,
            passive: !0
        }),
        Sx = new S({
            id: 135,
            type: 0,
            icon: "items/charm/charm6_q1",
            fx: {
                stick: 161,
                color: [1.3, .9, .2, .4],
                endSound: 69
            }
        });
    var Px = new S({
            id: 136,
            passive: !0
        }),
        Lx = new S({
            id: 137,
            type: 0,
            icon: "items/charm/charm7_q1",
            fx: {
                stick: 167,
                color: [.2, -1, -1, .4]
            }
        });
    var Dx = new S({
        id: 138,
        tags: new Set([12, 13]),
        icon: "items/charm/charm8_q1",
        fx: {
            stick: 165,
            endSound: 69,
            color: [0, .7, 1.2, .55]
        }
    });
    var Ex = new S({
        id: 141,
        tags: new Set([12, 15]),
        icon: "items/charm/charm10_q1",
        fx: {
            endSound: 69,
            stick: 164,
            color: [.5, 0, .5, .7]
        }
    });
    var Tx = new S({
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
        Ix = new S({
            id: 140,
            icon: "items/charm/charm9_q1",
            fx: {
                alpha: [.05]
            }
        });
    var zx = new S({
        id: 142,
        icon: "items/charm/charm11_q1",
        fx: {
            stick: 171,
            endSound: 69,
            color: [.3, .6, 1.3, .4]
        }
    });
    var Vx = new S({
        id: 143,
        icon: "items/charm/charm12_q1",
        fx: {
            stick: 168,
            endSound: 69,
            color: [.9, .5, .3, .7]
        }
    });
    var Rx = new S({
        id: 144,
        tags: new Set([12, 14]),
        icon: "items/charm/charm13_q1",
        fx: {
            visual: 108,
            endSound: 69,
            apply: 76
        }
    });
    var Ux = new S({
        id: 145,
        icon: "items/charm/charm14_q1",
        fx: {
            stick: 163,
            endSound: 69,
            color: [1.2, .9, .2, .3]
        }
    });
    var Bx = new S({
        id: 146,
        passive: !1,
        clearOnDeath: !1,
        immuneCC: !0,
        icon: "ui/skills/suddenDeath"
    });
    var ll = new Map;
    [Bx, Tx, Ix, Ux, Rx, Vx, zx, Ex, Dx, Px, Lx, Ax, Sx, Cx, kx, Fx, gx, ax, vx, yx, ux, fx, _x, sx, ix, hx, lx, dx, xx, wx, cl[0], cl[1], bx, mx, px, cx, hv, _v, xv, bv, vv, fv, wv, dv, av, mv, uv, pv, cv, gv, Cv, Av, yv, Lv, Mv, Fv, Sv, Pv, kv, ex, Qv, Xv, $v, tx, Jv, Yv, Hv, ox, rx, Zv, nx, Kv, Ev, Mx, Dv, Wv, Gv, qv, Uv, jv, Vv, Rv, Nv, zv, Tv, Ov, Bv, Iv].forEach(t => {
        ll.set(t.id, t)
    });
    var sa = class {
        constructor(e) {
            this.entity = e, this.alive = !0, this.stat = new Map, this.resource = new Map, this.combatTimer = new uo(-1, 6)
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
            let r = Math.round(Re(o, 0, this.getStat(e)));
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
    var aa = (t, e = !0) => {
        let o = Object.entries(t);
        return o.forEach(r => {
            r[0] = parseInt(r[0]), e && typeof r[1] == "object" && (r[1] = aa(r[1]))
        }), new Map(o)
    };
    var jx = aa({
            14: .1,
            13: .1,
            9: .1,
            8: .1,
            16: .1
        }),
        a4 = aa({
            14: "%",
            13: "%",
            16: "%",
            18: "%"
        }),
        mr = (t, e) => (jx.has(t) && (e *= jx.get(t), e = e.toFixed(e >= .1 ? 1 : 2)), e + (a4.get(t) || ""));

    function qx(t, e, o) {
        let r = t.slice();
        return r[12] = e[o], r
    }

    function Ox(t, e, o) {
        let r = t.slice();
        return r[15] = e[o], r
    }

    function Nx(t, e, o) {
        let r = t.slice();
        return r[18] = e[o], r
    }

    function Wx(t, e, o) {
        let r = t.slice();
        return r[18] = e[o], r
    }

    function Gx(t, e, o) {
        let r = t.slice();
        return r[23] = e[o], r
    }

    function Hx(t, e, o) {
        let r = t.slice();
        return r[26] = e[o], r
    }

    function $x(t, e, o) {
        let r = t.slice();
        return r[23] = e[o], r
    }

    function Yx(t, e, o) {
        let r = t.slice();
        return r[26] = e[o], r
    }

    function Xx(t, e, o) {
        let r = t.slice();
        return r[33] = e[o], r
    }

    function Qx(t, e, o) {
        let r = t.slice();
        return r[26] = e[o], r
    }

    function c4(t) {
        let e, o, r, n, i, s, a, c, l, f, d, u, m, h, g, M, b, _, k, U, T, V, ae, q = !t[2] && t[0].parent === void 0 && Zx(t),
            O = t[0].actiontype && Jx(t),
            oe = t[0].auto && Kx(t),
            Z = t[0].costMp && e2(t),
            te = t[0].castLen && t2(t),
            L = t[0].cd && o2(t),
            W = t[0].duration > 0 && r2(t),
            A = t[0].unique && n2(t),
            J = t[0].refresh && i2(t),
            ie = t[0].range && s2(t),
            xe = t[6][t[0].targetMode] && a2(t),
            Ie = t[0].maxStacks && c2(t),
            _e = t[0].dmg && l2(t),
            ye = t[0].heal && f2(t),
            rt = se([t[0].multiplyIncomingHeal, t[0].multiplyIncomingDamage]),
            Ye = [];
        for (let D = 0; D < 2; D += 1) Ye[D] = u2(Xx(t, rt, D));
        let Dt = se([t[0].addIncomingHeal, t[0].addIncomingDamage]),
            je = [];
        for (let D = 0; D < 2; D += 1) je[D] = p2($x(t, Dt, D));
        let H = se([t[0].addIncomingCrit]),
            Le = [];
        for (let D = 0; D < 1; D += 1) Le[D] = g2(Gx(t, H, D));
        let Ke = t[0].statsStatic && v2(t),
            Ze = t[0].statsConvert && b2(t),
            nt = t[0].custom && _2(t),
            Ee = t[0].aoe && t[0].aoe.circleRadius && M2(t),
            Xe = !t[0].parent && k2(t),
            Et = se(t[5]),
            qe = [];
        for (let D = 0; D < Et.length; D += 1) qe[D] = F2(qx(t, Et, D));
        let co = D => pe(qe[D], 1, 1, () => {
            qe[D] = null
        });
        return {
            c() {
                q && q.c(), e = C("div"), O && O.c(), o = fe(), oe && oe.c(), r = fe(), Z && Z.c(), n = fe(), te && te.c(), i = fe(), L && L.c(), s = fe(), W && W.c(), a = fe(), A && A.c(), c = fe(), J && J.c(), l = C("div"), ie && ie.c(), f = fe(), xe && xe.c(), Ie && Ie.c(), d = fe(), _e && _e.c(), u = fe(), ye && ye.c(), m = fe();
                for (let D = 0; D < 2; D += 1) Ye[D].c();
                h = fe();
                for (let D = 0; D < 2; D += 1) je[D].c();
                g = fe();
                for (let D = 0; D < 1; D += 1) Le[D].c();
                M = fe(), Ke && Ke.c(), b = fe(), Ze && Ze.c(), _ = fe(), nt && nt.c(), k = fe(), Ee && Ee.c(), U = fe(), Xe && Xe.c(), T = fe();
                for (let D = 0; D < qe.length; D += 1) qe[D].c();
                V = fe(), F(e, "class", "pad textgreen svelte-14w0l4b")
            },
            m(D, P) {
                q && q.m(D, P), z(D, e, P), O && O.m(e, null), w(e, o), oe && oe.m(e, null), w(e, r), Z && Z.m(e, null), w(e, n), te && te.m(e, null), w(e, i), L && L.m(e, null), w(e, s), W && W.m(e, null), w(e, a), A && A.m(e, null), w(e, c), J && J.m(e, null), w(e, l), ie && ie.m(l, null), w(l, f), xe && xe.m(l, null), Ie && Ie.m(D, P), z(D, d, P), _e && _e.m(D, P), z(D, u, P), ye && ye.m(D, P), z(D, m, P);
                for (let x = 0; x < 2; x += 1) Ye[x] && Ye[x].m(D, P);
                z(D, h, P);
                for (let x = 0; x < 2; x += 1) je[x] && je[x].m(D, P);
                z(D, g, P);
                for (let x = 0; x < 1; x += 1) Le[x] && Le[x].m(D, P);
                z(D, M, P), Ke && Ke.m(D, P), z(D, b, P), Ze && Ze.m(D, P), z(D, _, P), nt && nt.m(D, P), z(D, k, P), Ee && Ee.m(D, P), z(D, U, P), Xe && Xe.m(D, P), z(D, T, P);
                for (let x = 0; x < qe.length; x += 1) qe[x] && qe[x].m(D, P);
                z(D, V, P), ae = !0
            },
            p(D, P) {
                if (!D[2] && D[0].parent === void 0 ? q ? q.p(D, P) : (q = Zx(D), q.c(), q.m(e.parentNode, e)) : q && (q.d(1), q = null), D[0].actiontype ? O ? O.p(D, P) : (O = Jx(D), O.c(), O.m(e, o)) : O && (O.d(1), O = null), D[0].auto ? oe || (oe = Kx(D), oe.c(), oe.m(e, r)) : oe && (oe.d(1), oe = null), D[0].costMp ? Z ? Z.p(D, P) : (Z = e2(D), Z.c(), Z.m(e, n)) : Z && (Z.d(1), Z = null), D[0].castLen ? te ? te.p(D, P) : (te = t2(D), te.c(), te.m(e, i)) : te && (te.d(1), te = null), D[0].cd ? L ? L.p(D, P) : (L = o2(D), L.c(), L.m(e, s)) : L && (L.d(1), L = null), D[0].duration > 0 ? W ? W.p(D, P) : (W = r2(D), W.c(), W.m(e, a)) : W && (W.d(1), W = null), D[0].unique ? A || (A = n2(D), A.c(), A.m(e, c)) : A && (A.d(1), A = null), D[0].refresh ? J || (J = i2(D), J.c(), J.m(e, l)) : J && (J.d(1), J = null), D[0].range ? ie ? ie.p(D, P) : (ie = s2(D), ie.c(), ie.m(l, f)) : ie && (ie.d(1), ie = null), D[6][D[0].targetMode] ? xe ? xe.p(D, P) : (xe = a2(D), xe.c(), xe.m(l, null)) : xe && (xe.d(1), xe = null), D[0].maxStacks ? Ie ? Ie.p(D, P) : (Ie = c2(D), Ie.c(), Ie.m(d.parentNode, d)) : Ie && (Ie.d(1), Ie = null), D[0].dmg ? _e ? _e.p(D, P) : (_e = l2(D), _e.c(), _e.m(u.parentNode, u)) : _e && (_e.d(1), _e = null), D[0].heal ? ye ? ye.p(D, P) : (ye = f2(D), ye.c(), ye.m(m.parentNode, m)) : ye && (ye.d(1), ye = null), P[0] & 129) {
                    rt = se([D[0].multiplyIncomingHeal, D[0].multiplyIncomingDamage]);
                    let x;
                    for (x = 0; x < 2; x += 1) {
                        let K = Xx(D, rt, x);
                        Ye[x] ? Ye[x].p(K, P) : (Ye[x] = u2(K), Ye[x].c(), Ye[x].m(h.parentNode, h))
                    }
                    for (; x < 2; x += 1) Ye[x].d(1)
                }
                if (P[0] & 129) {
                    Dt = se([D[0].addIncomingHeal, D[0].addIncomingDamage]);
                    let x;
                    for (x = 0; x < 2; x += 1) {
                        let K = $x(D, Dt, x);
                        je[x] ? je[x].p(K, P) : (je[x] = p2(K), je[x].c(), je[x].m(g.parentNode, g))
                    }
                    for (; x < 2; x += 1) je[x].d(1)
                }
                if (P[0] & 129) {
                    H = se([D[0].addIncomingCrit]);
                    let x;
                    for (x = 0; x < 1; x += 1) {
                        let K = Gx(D, H, x);
                        Le[x] ? Le[x].p(K, P) : (Le[x] = g2(K), Le[x].c(), Le[x].m(M.parentNode, M))
                    }
                    for (; x < 1; x += 1) Le[x].d(1)
                }
                if (D[0].statsStatic ? Ke ? Ke.p(D, P) : (Ke = v2(D), Ke.c(), Ke.m(b.parentNode, b)) : Ke && (Ke.d(1), Ke = null), D[0].statsConvert ? Ze ? Ze.p(D, P) : (Ze = b2(D), Ze.c(), Ze.m(_.parentNode, _)) : Ze && (Ze.d(1), Ze = null), D[0].custom ? nt ? nt.p(D, P) : (nt = _2(D), nt.c(), nt.m(k.parentNode, k)) : nt && (nt.d(1), nt = null), D[0].aoe && D[0].aoe.circleRadius ? Ee ? Ee.p(D, P) : (Ee = M2(D), Ee.c(), Ee.m(U.parentNode, U)) : Ee && (Ee.d(1), Ee = null), D[0].parent ? Xe && (Xe.d(1), Xe = null) : Xe ? Xe.p(D, P) : (Xe = k2(D), Xe.c(), Xe.m(T.parentNode, T)), P[0] & 34) {
                    Et = se(D[5]);
                    let x;
                    for (x = 0; x < Et.length; x += 1) {
                        let K = qx(D, Et, x);
                        qe[x] ? (qe[x].p(K, P), de(qe[x], 1)) : (qe[x] = F2(K), qe[x].c(), de(qe[x], 1), qe[x].m(V.parentNode, V))
                    }
                    for (wt(), x = Et.length; x < qe.length; x += 1) co(x);
                    _t()
                }
            },
            i(D) {
                if (!ae) {
                    for (let P = 0; P < Et.length; P += 1) de(qe[P]);
                    ae = !0
                }
            },
            o(D) {
                qe = qe.filter(Boolean);
                for (let P = 0; P < qe.length; P += 1) pe(qe[P]);
                ae = !1
            },
            d(D) {
                D && (I(e), I(d), I(u), I(m), I(h), I(g), I(M), I(b), I(_), I(k), I(U), I(T), I(V)), q && q.d(D), O && O.d(), oe && oe.d(), Z && Z.d(), te && te.d(), L && L.d(), W && W.d(), A && A.d(), J && J.d(), ie && ie.d(), xe && xe.d(), Ie && Ie.d(D), _e && _e.d(D), ye && ye.d(D), ze(Ye, D), ze(je, D), ze(Le, D), Ke && Ke.d(D), Ze && Ze.d(D), nt && nt.d(D), Ee && Ee.d(D), Xe && Xe.d(D), ze(qe, D)
            }
        }
    }

    function l4(t) {
        let e, o = t[0].item + "",
            r;
        return {
            c() {
                e = C("div"), r = B(o)
            },
            m(n, i) {
                z(n, e, i), w(e, r)
            },
            p(n, i) {
                i[0] & 1 && o !== (o = n[0].item + "") && Y(r, o)
            },
            i: $,
            o: $,
            d(n) {
                n && I(e)
            }
        }
    }

    function Zx(t) {
        let e, o, r, n, i = X.items.book[t[0].id].name + "",
            s, a = t[0].engineOnly ? "" : " Lv. " + t[1],
            c;
        return {
            c() {
                e = C("div"), o = C("img"), n = Ae(), s = B(i), c = B(a), F(o, "class", "texticon"), Ne(o.src, r = Er(t[0].id)) || F(o, "src", r), F(e, "class", "slottitle textprimary")
            },
            m(l, f) {
                z(l, e, f), w(e, o), w(e, n), w(e, s), w(e, c)
            },
            p(l, f) {
                f[0] & 1 && !Ne(o.src, r = Er(l[0].id)) && F(o, "src", r), f[0] & 1 && i !== (i = X.items.book[l[0].id].name + "") && Y(s, i), f[0] & 3 && a !== (a = l[0].engineOnly ? "" : " Lv. " + l[1]) && Y(c, a)
            },
            d(l) {
                l && I(e)
            }
        }
    }

    function Jx(t) {
        let e, o = t[8][t[0].mode] + "",
            r, n, i = t[0].actiontype + "",
            s;
        return {
            c() {
                e = C("div"), r = B(o), n = Ae(), s = B(i), F(e, "class", "textwhite")
            },
            m(a, c) {
                z(a, e, c), w(e, r), w(e, n), w(e, s)
            },
            p(a, c) {
                c[0] & 1 && o !== (o = a[8][a[0].mode] + "") && Y(r, o), c[0] & 1 && i !== (i = a[0].actiontype + "") && Y(s, i)
            },
            d(a) {
                a && I(e)
            }
        }
    }

    function Kx(t) {
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

    function e2(t) {
        let e, o, r = t[0].costMp(t[1]) + "",
            n, i, s = X.ui.stats.array[7] + "",
            a;
        return {
            c() {
                e = C("div"), o = B("Cost: "), n = B(r), i = Ae(), a = B(s)
            },
            m(c, l) {
                z(c, e, l), w(e, o), w(e, n), w(e, i), w(e, a)
            },
            p(c, l) {
                l[0] & 3 && r !== (r = c[0].costMp(c[1]) + "") && Y(n, r)
            },
            d(c) {
                c && I(e)
            }
        }
    }

    function t2(t) {
        let e, o = t[7](t[0].castLen) + "",
            r, n;
        return {
            c() {
                e = C("div"), r = B(o), n = B("s Cast time")
            },
            m(i, s) {
                z(i, e, s), w(e, r), w(e, n)
            },
            p(i, s) {
                s[0] & 1 && o !== (o = i[7](i[0].castLen) + "") && Y(r, o)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function o2(t) {
        let e, o = t[7](t[0].cd) + "",
            r, n;
        return {
            c() {
                e = C("div"), r = B(o), n = B("s Cooldown")
            },
            m(i, s) {
                z(i, e, s), w(e, r), w(e, n)
            },
            p(i, s) {
                s[0] & 1 && o !== (o = i[7](i[0].cd) + "") && Y(r, o)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function r2(t) {
        let e, o = t[7](t[0].duration) + "",
            r, n;
        return {
            c() {
                e = C("div"), r = B(o), n = B("s Duration")
            },
            m(i, s) {
                z(i, e, s), w(e, r), w(e, n)
            },
            p(i, s) {
                s[0] & 1 && o !== (o = i[7](i[0].duration) + "") && Y(r, o)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function n2(t) {
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

    function i2(t) {
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

    function s2(t) {
        let e, o = t[7](t[0].range) + "",
            r, n;
        return {
            c() {
                e = C("span"), r = B(o), n = B("m range ")
            },
            m(i, s) {
                z(i, e, s), w(e, r), w(e, n)
            },
            p(i, s) {
                s[0] & 1 && o !== (o = i[7](i[0].range) + "") && Y(r, o)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function a2(t) {
        let e, o = t[6][t[0].targetMode] + "",
            r;
        return {
            c() {
                e = C("span"), r = B(o)
            },
            m(n, i) {
                z(n, e, i), w(e, r)
            },
            p(n, i) {
                i[0] & 1 && o !== (o = n[6][n[0].targetMode] + "") && Y(r, o)
            },
            d(n) {
                n && I(e)
            }
        }
    }

    function c2(t) {
        let e, o, r, n = t[4].stacks + "",
            i, s, a, c;
        return {
            c() {
                e = C("div"), o = C("u"), r = B("At "), i = B(n), s = B(" stacks"), a = B(":"), c = C("span"), c.textContent = "(Press shift to toggle)", F(e, "class", "pad textsecondary svelte-14w0l4b"), F(c, "class", "textgrey")
            },
            m(l, f) {
                z(l, e, f), w(e, o), w(o, r), w(o, i), w(o, s), w(e, a), z(l, c, f)
            },
            p(l, f) {
                f[0] & 16 && n !== (n = l[4].stacks + "") && Y(i, n)
            },
            d(l) {
                l && (I(e), I(c))
            }
        }
    }

    function l2(t) {
        let e, o = t[7](t[0].dmg) + "",
            r, n;
        return {
            c() {
                e = C("div"), r = B(o), n = B(" DMG"), F(e, "class", "textgreen")
            },
            m(i, s) {
                z(i, e, s), w(e, r), w(e, n)
            },
            p(i, s) {
                s[0] & 1 && o !== (o = i[7](i[0].dmg) + "") && Y(r, o)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function f2(t) {
        let e, o = t[7](t[0].heal) + "",
            r, n;
        return {
            c() {
                e = C("div"), r = B(o), n = B(" Heal"), F(e, "class", "textgreen")
            },
            m(i, s) {
                z(i, e, s), w(e, r), w(e, n)
            },
            p(i, s) {
                s[0] & 1 && o !== (o = i[7](i[0].heal) + "") && Y(r, o)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function d2(t) {
        let e, o, r = X.items.book[t[26]].name + "",
            n, i, s = Math.round(100 * t[7](t[33][t[26]](t[0])) - 100) + "",
            a, c;
        return {
            c() {
                e = C("div"), o = B("Empower "), n = B(r), i = B(" by "), a = B(s), c = B("%"), F(e, "class", "textcyan")
            },
            m(l, f) {
                z(l, e, f), w(e, o), w(e, n), w(e, i), w(e, a), w(e, c)
            },
            p(l, f) {
                f[0] & 1 && r !== (r = X.items.book[l[26]].name + "") && Y(n, r), f[0] & 1 && s !== (s = Math.round(100 * l[7](l[33][l[26]](l[0])) - 100) + "") && Y(a, s)
            },
            d(l) {
                l && I(e)
            }
        }
    }

    function u2(t) {
        let e, o = se(Object.keys(t[33] || {})),
            r = [];
        for (let n = 0; n < o.length; n += 1) r[n] = d2(Qx(t, o, n));
        return {
            c() {
                for (let n = 0; n < r.length; n += 1) r[n].c();
                e = fe()
            },
            m(n, i) {
                for (let s = 0; s < r.length; s += 1) r[s] && r[s].m(n, i);
                z(n, e, i)
            },
            p(n, i) {
                if (i[0] & 129) {
                    o = se(Object.keys(n[33] || {}));
                    let s;
                    for (s = 0; s < o.length; s += 1) {
                        let a = Qx(n, o, s);
                        r[s] ? r[s].p(a, i) : (r[s] = d2(a), r[s].c(), r[s].m(e.parentNode, e))
                    }
                    for (; s < r.length; s += 1) r[s].d(1);
                    r.length = o.length
                }
            },
            d(n) {
                n && I(e), ze(r, n)
            }
        }
    }

    function m2(t) {
        let e, o, r = X.items.book[t[26]].name + "",
            n, i, s = t[7](t[23][t[26]](t[0])) + "",
            a;
        return {
            c() {
                e = C("div"), o = B("Empower "), n = B(r), i = B(" by "), a = B(s), F(e, "class", "textcyan")
            },
            m(c, l) {
                z(c, e, l), w(e, o), w(e, n), w(e, i), w(e, a)
            },
            p(c, l) {
                l[0] & 1 && r !== (r = X.items.book[c[26]].name + "") && Y(n, r), l[0] & 1 && s !== (s = c[7](c[23][c[26]](c[0])) + "") && Y(a, s)
            },
            d(c) {
                c && I(e)
            }
        }
    }

    function p2(t) {
        let e, o = se(Object.keys(t[23] || {})),
            r = [];
        for (let n = 0; n < o.length; n += 1) r[n] = m2(Yx(t, o, n));
        return {
            c() {
                for (let n = 0; n < r.length; n += 1) r[n].c();
                e = fe()
            },
            m(n, i) {
                for (let s = 0; s < r.length; s += 1) r[s] && r[s].m(n, i);
                z(n, e, i)
            },
            p(n, i) {
                if (i[0] & 129) {
                    o = se(Object.keys(n[23] || {}));
                    let s;
                    for (s = 0; s < o.length; s += 1) {
                        let a = Yx(n, o, s);
                        r[s] ? r[s].p(a, i) : (r[s] = m2(a), r[s].c(), r[s].m(e.parentNode, e))
                    }
                    for (; s < r.length; s += 1) r[s].d(1);
                    r.length = o.length
                }
            },
            d(n) {
                n && I(e), ze(r, n)
            }
        }
    }

    function h2(t) {
        let e, o, r = X.items.book[t[26]].name + "",
            n, i, s = mr(14, t[7](t[23][t[26]](t[0]))) + "",
            a;
        return {
            c() {
                e = C("div"), o = B("Empower Crit% of "), n = B(r), i = B(" by "), a = B(s), F(e, "class", "textcyan")
            },
            m(c, l) {
                z(c, e, l), w(e, o), w(e, n), w(e, i), w(e, a)
            },
            p(c, l) {
                l[0] & 1 && r !== (r = X.items.book[c[26]].name + "") && Y(n, r), l[0] & 1 && s !== (s = mr(14, c[7](c[23][c[26]](c[0]))) + "") && Y(a, s)
            },
            d(c) {
                c && I(e)
            }
        }
    }

    function g2(t) {
        let e, o = se(Object.keys(t[23] || {})),
            r = [];
        for (let n = 0; n < o.length; n += 1) r[n] = h2(Hx(t, o, n));
        return {
            c() {
                for (let n = 0; n < r.length; n += 1) r[n].c();
                e = fe()
            },
            m(n, i) {
                for (let s = 0; s < r.length; s += 1) r[s] && r[s].m(n, i);
                z(n, e, i)
            },
            p(n, i) {
                if (i[0] & 129) {
                    o = se(Object.keys(n[23] || {}));
                    let s;
                    for (s = 0; s < o.length; s += 1) {
                        let a = Hx(n, o, s);
                        r[s] ? r[s].p(a, i) : (r[s] = h2(a), r[s].c(), r[s].m(e.parentNode, e))
                    }
                    for (; s < r.length; s += 1) r[s].d(1);
                    r.length = o.length
                }
            },
            d(n) {
                n && I(e), ze(r, n)
            }
        }
    }

    function v2(t) {
        let e, o = se(Array.from(t[3].stat)),
            r = [];
        for (let n = 0; n < o.length; n += 1) r[n] = x2(Wx(t, o, n));
        return {
            c() {
                for (let n = 0; n < r.length; n += 1) r[n].c();
                e = fe()
            },
            m(n, i) {
                for (let s = 0; s < r.length; s += 1) r[s] && r[s].m(n, i);
                z(n, e, i)
            },
            p(n, i) {
                if (i[0] & 8) {
                    o = se(Array.from(n[3].stat));
                    let s;
                    for (s = 0; s < o.length; s += 1) {
                        let a = Wx(n, o, s);
                        r[s] ? r[s].p(a, i) : (r[s] = x2(a), r[s].c(), r[s].m(e.parentNode, e))
                    }
                    for (; s < r.length; s += 1) r[s].d(1);
                    r.length = o.length
                }
            },
            d(n) {
                n && I(e), ze(r, n)
            }
        }
    }

    function x2(t) {
        let e, o, r = mr(t[18][0], t[18][1]) + "",
            n, i, s = X.ui.stats.array[t[18][0]] + "",
            a, c;
        return {
            c() {
                e = C("div"), o = B("+"), n = B(r), i = Ae(), a = B(s), c = Ae(), F(e, "class", "textcyan")
            },
            m(l, f) {
                z(l, e, f), w(e, o), w(e, n), w(e, i), w(e, a), w(e, c)
            },
            p(l, f) {
                f[0] & 8 && r !== (r = mr(l[18][0], l[18][1]) + "") && Y(n, r), f[0] & 8 && s !== (s = X.ui.stats.array[l[18][0]] + "") && Y(a, s)
            },
            d(l) {
                l && I(e)
            }
        }
    }

    function b2(t) {
        let e, o = se(t[0].statsConvert),
            r = [];
        for (let n = 0; n < o.length; n += 1) r[n] = w2(Nx(t, o, n));
        return {
            c() {
                for (let n = 0; n < r.length; n += 1) r[n].c();
                e = fe()
            },
            m(n, i) {
                for (let s = 0; s < r.length; s += 1) r[s] && r[s].m(n, i);
                z(n, e, i)
            },
            p(n, i) {
                if (i[0] & 1) {
                    o = se(n[0].statsConvert);
                    let s;
                    for (s = 0; s < o.length; s += 1) {
                        let a = Nx(n, o, s);
                        r[s] ? r[s].p(a, i) : (r[s] = w2(a), r[s].c(), r[s].m(e.parentNode, e))
                    }
                    for (; s < r.length; s += 1) r[s].d(1);
                    r.length = o.length
                }
            },
            d(n) {
                n && I(e), ze(r, n)
            }
        }
    }

    function w2(t) {
        let e, o = X.ui.skilldescription.statincrement[0] + "",
            r, n, i = X.ui.stats.array[t[18][0]] + "",
            s, a, c = X.ui.skilldescription.statincrement[1] + "",
            l, f, d = mr(t[18][0], t[18][1]) + "",
            u, m, h = X.ui.stats.array[t[18][2]] + "",
            g, M, b = X.ui.skilldescription.statincrement[2] + "",
            _;
        return {
            c() {
                e = C("div"), r = B(o), n = Ae(), s = B(i), a = Ae(), l = B(c), f = Ae(), u = B(d), m = Ae(), g = B(h), M = Ae(), _ = B(b), F(e, "class", "textcyan")
            },
            m(k, U) {
                z(k, e, U), w(e, r), w(e, n), w(e, s), w(e, a), w(e, l), w(e, f), w(e, u), w(e, m), w(e, g), w(e, M), w(e, _)
            },
            p(k, U) {
                U[0] & 1 && i !== (i = X.ui.stats.array[k[18][0]] + "") && Y(s, i), U[0] & 1 && d !== (d = mr(k[18][0], k[18][1]) + "") && Y(u, d), U[0] & 1 && h !== (h = X.ui.stats.array[k[18][2]] + "") && Y(g, h)
            },
            d(k) {
                k && I(e)
            }
        }
    }

    function _2(t) {
        let e, o = se(t[0].custom),
            r = [];
        for (let n = 0; n < o.length; n += 1) r[n] = y2(Ox(t, o, n));
        return {
            c() {
                for (let n = 0; n < r.length; n += 1) r[n].c();
                e = fe()
            },
            m(n, i) {
                for (let s = 0; s < r.length; s += 1) r[s] && r[s].m(n, i);
                z(n, e, i)
            },
            p(n, i) {
                if (i[0] & 131) {
                    o = se(n[0].custom);
                    let s;
                    for (s = 0; s < o.length; s += 1) {
                        let a = Ox(n, o, s);
                        r[s] ? r[s].p(a, i) : (r[s] = y2(a), r[s].c(), r[s].m(e.parentNode, e))
                    }
                    for (; s < r.length; s += 1) r[s].d(1);
                    r.length = o.length
                }
            },
            d(n) {
                n && I(e), ze(r, n)
            }
        }
    }

    function y2(t) {
        let e, o = t[7](t[15][0](t[1])) + "",
            r, n = t[15][1] + "",
            i;
        return {
            c() {
                e = C("div"), r = B(o), i = B(n), F(e, "class", "textcyan")
            },
            m(s, a) {
                z(s, e, a), w(e, r), w(e, i)
            },
            p(s, a) {
                a[0] & 3 && o !== (o = s[7](s[15][0](s[1])) + "") && Y(r, o), a[0] & 1 && n !== (n = s[15][1] + "") && Y(i, n)
            },
            d(s) {
                s && I(e)
            }
        }
    }

    function M2(t) {
        let e, o = t[0].aoe.limit ? "Up to " + t[0].aoe.limit : "All",
            r, n, i = t[0].aoe.faction ? "allies" : "enemies",
            s, a, c = t[7](t[0].aoe.circleRadius) + "",
            l, f;
        return {
            c() {
                e = C("div"), r = B(o), n = Ae(), s = B(i), a = B(" within "), l = B(c), f = B("m"), F(e, "class", "textpvp")
            },
            m(d, u) {
                z(d, e, u), w(e, r), w(e, n), w(e, s), w(e, a), w(e, l), w(e, f)
            },
            p(d, u) {
                u[0] & 1 && o !== (o = d[0].aoe.limit ? "Up to " + d[0].aoe.limit : "All") && Y(r, o), u[0] & 1 && i !== (i = d[0].aoe.faction ? "allies" : "enemies") && Y(s, i), u[0] & 1 && c !== (c = d[7](d[0].aoe.circleRadius) + "") && Y(l, c)
            },
            d(d) {
                d && I(e)
            }
        }
    }

    function k2(t) {
        let e, o, r, n = X.items.book[t[0].id].description + "",
            i;
        return {
            c() {
                e = C("div"), o = C("u"), o.textContent = "Effect", r = B(": "), i = B(n), F(e, "class", "textsecondary pad svelte-14w0l4b")
            },
            m(s, a) {
                z(s, e, a), w(e, o), w(e, r), w(e, i)
            },
            p(s, a) {
                a[0] & 1 && n !== (n = X.items.book[s[0].id].description + "") && Y(i, n)
            },
            d(s) {
                s && I(e)
            }
        }
    }

    function F2(t) {
        let e, o, r;
        return o = new ca({
            props: {
                level: t[1],
                skill: t[12]
            }
        }), {
            c() {
                e = C("div"), vt(o.$$.fragment), F(e, "class", "pad svelte-14w0l4b")
            },
            m(n, i) {
                z(n, e, i), mt(o, e, null), r = !0
            },
            p(n, i) {
                let s = {};
                i[0] & 2 && (s.level = n[1]), i[0] & 32 && (s.skill = n[12]), o.$set(s)
            },
            i(n) {
                r || (de(o.$$.fragment, n), r = !0)
            },
            o(n) {
                pe(o.$$.fragment, n), r = !1
            },
            d(n) {
                n && I(e), pt(o)
            }
        }
    }

    function f4(t) {
        let e, o, r, n, i = [l4, c4],
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
                o = a(c, l), o === f ? s[o].p(c, l) : (wt(), pe(s[f], 1, 1, () => {
                    s[f] = null
                }), _t(), r = s[o], r ? r.p(c, l) : (r = s[o] = i[o](c), r.c()), de(r, 1), r.m(e, null))
            },
            i(c) {
                n || (de(r), n = !0)
            },
            o(c) {
                pe(r), n = !1
            },
            d(c) {
                c && I(e), s[o].d()
            }
        }
    }

    function d4(t, e, o) {
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
        }, c = (g, M = ne && ne.player) => {
            if (!M) return "?";
            let b = sv(g, M);
            return b % 1 === 0 ? b : b.toFixed(1)
        }, l = {
            0: "Melee attack",
            1: "Magic attack",
            2: "Heal",
            4: "Buff",
            5: "Stackable buff",
            6: "Ranged missile",
            7: "Ranged effect",
            9: "Effect"
        }, f = [], d, u = {}, m = g => {
            if (ne) return g.onCast && h("on cast", g.onCast, ne.player, n), g.onBlock && h("on block", g.onBlock, u, ne.player), g.onInterval && h(`every ${g.intervalDuration.toFixed(1)}s`, g.onInterval, u, ne.player, ne.player), g.onPermanent && h("permanently", () => ({
                id: g.onPermanent(ne.player),
                mode: 4
            }), ne.player, n), g
        }, h = (g, M, b, _, k) => {
            let U = M(b, _, k);
            if (!U || U === !0) return;
            let T = Object.assign({}, U);
            if (T.actiontype = g, T.parent || (T.parent = []), T.parent.push(r), T.mode === 4 || T.mode === 5) {
                let V = ll.get(T.id);
                f.unshift(m({
                    ...T,
                    ...V
                }))
            } else if (r.id === T.id) r.parent || (T.parent = void 0), o(0, r = {
                ...r,
                ...T
            });
            else {
                if (r.parent) {
                    let V = r.parent.find(ae => ae.id == T.id);
                    if (V) {
                        V.parent || (T.parent = void 0), Object.assign(V, T);
                        return
                    }
                }
                f.unshift(m(T))
            }
        };
        return t.$$set = g => {
            "skill" in g && o(0, r = g.skill), "level" in g && o(1, n = g.level), "asItemDescription" in g && o(2, i = g.asItemDescription), "shift" in g && o(9, s = g.shift)
        }, t.$$.update = () => {
            t.$$.dirty[0] & 539 && (o(4, u = {
                stacks: 1,
                level: n
            }), o(4, u.stacks = r.maxStacks ? s ? 1 : r.maxStacks : 1, u), o(0, r.stacks = u.stacks, r), o(5, f = []), r.parent || m(r), r.statsStatic && (o(3, d = new sa), r.statsStatic(u, d)))
        }, [r, n, i, d, u, f, a, c, l, s]
    }
    var ca = class extends et {
            constructor(e) {
                super(), st(this, e, d4, f4, ut, {
                    skill: 0,
                    level: 1,
                    asItemDescription: 2,
                    shift: 9
                }, null, [-1, -1])
            }
        },
        C2 = ca;
    var u4 = ["acaru", "achi", "acti", "ael", "aelle", "aelo", "aer", "aeri", "aero", "aesh", "aez", "aias", "aid", "aien", "aile", "aist", "akda", "ale", "alle", "alpha", "ambi", "amlug", "amne", "amni", "amo", "amoe", "amu", "ana", "andro", "ani", "anke", "anse", "anti", "aol", "aqua", "arae", "arc", "argo", "aria", "ariel", "aries", "arius", "arje", "ark", "arrow", "arti", "arvel", "arye", "aryn", "ash", "astri", "athen", "aukh", "aura", "aveni", "axe", "axna", "az", "azci", "azo", "azri", "azu", "azure", "bag", "bain", "bais", "bando", "bane", "baph", "bard", "baro", "baron", "bat", "battle", "beef", "ber", "bhol", "bhul", "bik", "bird", "bith", "blade", "blaze", "bloch", "blok", "blood", "bloom", "bo", "boink", "bokh", "bomb", "bone", "bonk", "bore", "borne", "boro", "bound", "bow", "brain", "brass", "brie", "brir", "bris", "broke", "bry", "bryr", "bubble", "bugo", "caen", "calm", "canis", "cape", "capri", "carp", "cary", "cassi", "cat", "cavi", "celo", "cern", "charm", "chea", "chef", "cherry", "ciea", "cili", "cill", "ciri", "claw", "clear", "cone", "contra", "copi", "corba", "corn", "craft", "cri", "cris", "cry", "cryo", "crypt", "cua", "cya", "cye", "cygni", "cyra", "daar", "dae", "daemo", "dagg", "dakk", "dale", "dali", "dalia", "dall", "dane", "dania", "danus", "dao", "daru", "dawn", "daz", "dazar", "dead", "deaf", "deci", "deer", "dei", "delia", "delra", "delta", "dema", "demo", "deo", "dero", "deus", "deux", "dhai", "dhar", "dhrar", "dhug", "dhyl", "dia", "dieri", "dio", "doe", "dog", "dohr", "doom", "dorr", "down", "drae", "drakh", "drakk", "dran", "dre", "drea", "dread", "dream", "dris", "drop", "druk", "dry", "dryd", "dryn", "dryr", "dryto", "duin", "duirn", "duke", "duo", "dusk", "dy", "dya", "dyas", "dysra", "eago", "eal", "earl", "eas", "echo", "ecto", "edo", "eerie", "eevo", "egg", "ego", "eina", "eine", "eiri", "elia", "elle", "elma", "elo", "elyo", "elyor", "elys", "endo", "equi", "equu", "erdy", "eris", "erra", "erri", "erth", "ervi", "essa", "eua", "euda", "eudo", "eumo", "evack", "eve", "eye", "eyre", "fa", "fade", "fael", "fai", "fang", "far", "fare", "fauca", "feia", "filau", "fire", "fish", "fizz", "flame", "flero", "flesh", "flock", "foe", "fois", "forh", "fous", "fray", "fror", "frost", "fulvu", "fume", "fur", "fyn", "fyr", "fyre", "gabo", "gaia", "galaz", "gali", "galo", "gami", "gamma", "gax", "gaz", "gecko", "geo", "ghal", "ghaz", "ghi", "ghiri", "ghost", "ghyr", "gias", "giko", "gin", "gio", "giri", "git", "giu", "glass", "glee", "glerk", "gley", "glio", "gloo", "glow", "gnci", "gnorr", "godh", "gog", "gogu", "gold", "gonda", "goner", "gonzu", "gore", "grand", "grape", "gras", "grato", "grauf", "graz", "grel", "grex", "grim", "grin", "grind", "groku", "grow", "gru", "guac", "gui", "guiza", "guke", "gulum", "gun", "gurk", "guru", "gwen", "gyn", "gyrna", "hag", "haju", "hammer", "hari", "hatch", "hate", "heim", "heir", "heis", "hek", "hell", "helm", "hera", "hercu", "heria", "hex", "hexa", "hexi", "hexo", "hirt", "hole", "homa", "hong", "horn", "horo", "howl", "hydra", "hysta", "iar", "ice", "ida", "idra", "iele", "ievi", "ieze", "igni", "ikto", "ilae", "ili", "illae", "ilno", "ilye", "inde", "ink", "int", "inte", "intra", "intro", "iola", "iope", "ior", "iqra", "ira", "iraei", "irag", "irius", "iuna", "iyja", "iyra", "jaed", "jard", "jasia", "jassi", "jerky", "jiji", "jinx", "joy", "juan", "jui", "jurio", "kae", "kaga", "kai", "kar", "kash", "kaz", "kei", "kery", "key", "khad", "khon", "khuza", "khyr", "klee", "klip", "knight", "knod", "kom", "kotr", "krata", "kreo", "kriod", "kron", "krono", "kuhr", "kuvok", "kwyl", "kyri", "kyto", "la", "lach", "lae", "laea", "laer", "laeth", "lair", "lamb", "lanc", "lase", "laude", "laza", "lea", "lee", "lei", "leif", "lenai", "lenda", "lene", "leo", "lere", "lessa", "lethe", "lex", "lhor", "li", "lia", "libra", "liel", "lieu", "life", "light", "limbo", "limp", "lingo", "lio", "lirai", "liro", "lith", "llien", "lloe", "lo", "lock", "lofty", "loi", "lone", "lopo", "lore", "lort", "love", "low", "lozz", "lua", "luim", "lumo", "luna", "lush", "lust", "lya", "lymph", "lynx", "lyra", "lyre", "lys", "lyvi", "mae", "mage", "magi", "magno", "maie", "major", "mali", "malo", "manca", "mane", "mango", "manto", "marco", "marrow", "marsh", "max", "medi", "medu", "meen", "mel", "melia", "mell", "melng", "melon", "meph", "merc", "mese", "meso", "metal", "miki", "mince", "mini", "miri", "misia", "mistra", "mizu", "mmior", "mo", "mock", "moi", "moor", "morb", "more", "morgh", "morja", "morl", "moss", "moza", "mozo", "mroer", "mua", "muami", "mugg", "muku", "mulae", "muno", "muo", "mutt", "muzor", "mydra", "myr", "myri", "myth", "nae", "nai", "nail", "nando", "nari", "naul", "nava", "naz", "neazu", "ned", "neia", "neme", "nemo", "neo", "nep", "nera", "nero", "night", "nill", "niroi", "nise", "niye", "nobnar", "noi", "nose", "nox", "noxi", "nua", "nuanyi", "nuck", "nuk", "numzu", "nye", "nyel", "nymph", "nyri", "nyx", "oah", "oak", "ocea", "ocia", "octa", "octo", "odd", "odin", "odio", "odis", "odru", "oghm", "ogu", "oia", "oisse", "ola", "olg", "olle", "omega", "omni", "oni", "only", "onos", "onty", "oper", "ophe", "ophi", "opi", "orb", "orc", "ordi", "ore", "orio", "orlo", "ouch", "our", "outro", "over", "owl", "ozy", "pain", "pais", "pale", "paleo", "path", "paw", "paylo", "peak", "pear", "pearl", "pecto", "peia", "peli", "pemo", "pepe", "peri", "perlo", "perse", "pery", "peso", "phae", "phar", "phau", "pheh", "pheia", "pheus", "phi", "phiel", "phine", "phio", "phoi", "phono", "phy", "phyr", "phyre", "pika", "pilia", "pine", "piol", "piuc", "plor", "pluto", "poe", "pore", "pox", "prae", "pres", "prio", "pseu", "psy", "purla", "py", "pyro", "pytho", "pyxi", "qaas", "qae", "qama", "qas", "qash", "qasi", "qaso", "qasu", "qi", "qindi", "qis", "qish", "qisi", "qo", "qos", "qoui", "qry", "qu", "qua", "quas", "quasi", "quaso", "quila", "quo", "quoi", "quon", "qurza", "quti", "quul", "qwert", "qyph", "rael", "raer", "raes", "raesh", "raeth", "rage", "rai", "raor", "rash", "rath", "raven", "razz", "reap", "reav", "reens", "reme", "reo", "rethe", "reve", "rhor", "rhya", "riad", "riel", "rienn", "rift", "rind", "rine", "ring", "rio", "rismo", "rissa", "riznu", "roar", "rock", "roe", "rof", "rog", "rol", "roll", "rolu", "rone", "rori", "rose", "rosi", "roth", "rune", "runi", "ruth", "rya", "ryas", "rym", "rynn", "ryo", "sael", "saew", "sai", "sale", "salt", "salty", "sarya", "sau", "sauce", "sauth", "scaf", "scar", "sces", "schi", "scia", "scorp", "scum", "sea", "see", "seir", "sela", "semi", "seus", "shade", "shard", "shear", "shemu", "shie", "shine", "shon", "shrub", "shuk", "shur", "sia", "sie", "sigma", "sil", "silk", "sill", "sima", "sirie", "skin", "skull", "sky", "smith", "so", "soi", "solar", "soul", "spear", "speed", "splint", "spring", "stag", "star", "stone", "storm", "stout", "stra", "strau", "stris", "styx", "sub", "swift", "sword", "sya", "syl", "sys", "tae", "taer", "tala", "tale", "tali", "talle", "tan", "tango", "tarmi", "tarre", "tau", "taug", "tear", "teava", "teni", "terra", "teu", "teus", "thae", "than", "thano", "thau", "theia", "theo", "thera", "thin", "thorn", "thras", "thro", "thry", "thual", "thuen", "thye", "thyn", "tia", "tiara", "tiik", "tike", "tilre", "tima", "timni", "tiri", "to", "tona", "tone", "tor", "toxi", "tran", "tree", "tren", "tri", "trila", "trin", "tris", "triss", "trith", "trog", "troll", "trove", "true", "tryl", "tryn", "tusk", "tusso", "tuts", "tyr", "tyra", "tyrg", "ues", "ugly", "ui", "uie", "uipho", "ujuy", "uku", "ulvu", "under", "uni", "uozi", "up", "urlu", "uro", "us", "uth", "utha", "utta", "uugu", "uvy", "vaal", "vae", "vaen", "vaez", "vain", "vang", "varo", "varr", "vat", "vayne", "vazu", "veba", "veda", "veni", "vephie", "vesla", "veth", "vigo", "virgo", "vitro", "vizi", "vlor", "voda", "void", "vois", "volno", "volo", "volt", "vomi", "vonth", "vord", "vors", "vox", "vugz", "vulen", "vulpe", "waaz", "wake", "war", "wasu", "weap", "wei", "wenk", "willo", "wind", "wing", "wirya", "wise", "witch", "wix", "wolf", "world", "wrath", "xas", "xhan", "xhi", "xih", "xilo", "xio", "xiza", "xor", "xugu", "xuk", "xuxu", "xyli", "yae", "yare", "yari", "yeno", "yir", "yiryo", "ylla", "yo", "yoer", "yore", "yrgo", "yrie", "yrni", "ytia", "zak", "zal", "zaph", "zaro", "zedh", "zee", "zel", "zele", "zeli", "zelph", "zera", "zest", "zhem", "zia", "zog", "zoi", "zon", "zort", "zoti", "zug", "zul", "zur", "zutu", "zuvi", "zvon", "zzuk"],
        A2 = (t = 2, e = 6, o = 8) => {
            let r = Math.min(Ja(t, e), Ja(t, e)),
                n = "";
            for (let i = r; i > 0 && n.length < o; --i) n += Ki(u4);
            return n.charAt(0).toUpperCase() + n.slice(1)
        };

    function S2(t, e, o) {
        let r = t.slice();
        return r[26] = e[o], r[25] = o, r
    }

    function P2(t, e, o) {
        let r = t.slice();
        return r[20] = e[o], r[22] = o, r
    }

    function L2(t, e, o) {
        let r = t.slice();
        return r[23] = e[o], r[25] = o, r
    }

    function m4(t) {
        let e, o, r, n, i, s, a, c, l, f, d = {
            ctx: t,
            current: null,
            token: null,
            hasCatch: !0,
            pending: x4,
            then: v4,
            catch: g4,
            value: 28,
            blocks: [, , , ]
        };
        return vr(a = t[5], d), {
            c() {
                e = C("h3"), e.textContent = `${X.ui.charmenu.create.enterName}`, o = C("p"), o.textContent = `${X.ui.charmenu.create.nameReq}`, r = C("div"), n = C("input"), i = C("div"), i.textContent = "\u{1F3B2}", s = C("div"), d.block.c(), F(e, "class", "textwhite"), F(o, "class", "textprimary"), F(n, "maxlength", "16"), F(n, "type", "text"), F(n, "placeholder", "Name"), F(i, "class", "btn green"), F(r, "class", "namearea svelte-etr17z"), F(s, "class", "createResponse svelte-etr17z")
            },
            m(u, m) {
                z(u, e, m), z(u, o, m), z(u, r, m), w(r, n), pr(n, t[2]), w(r, i), z(u, s, m), d.block.m(s, d.anchor = null), d.mount = () => s, d.anchor = null, c = !0, l || (f = [Pe(n, "input", t[16]), Pe(i, "click", t[8])], l = !0)
            },
            p(u, m) {
                t = u, m & 4 && n.value !== t[2] && pr(n, t[2]), d.ctx = t, m & 32 && a !== (a = t[5]) && vr(a, d) || hi(d, t, m)
            },
            i(u) {
                c || (de(d.block), c = !0)
            },
            o(u) {
                for (let m = 0; m < 3; m += 1) {
                    let h = d.blocks[m];
                    pe(h)
                }
                c = !1
            },
            d(u) {
                u && (I(e), I(o), I(r), I(s)), d.block.d(), d.token = null, d = null, l = !1, it(f)
            }
        }
    }

    function p4(t) {
        let e, o = (t[1] >= 0 ? "Faction: " + X.factions[t[1]].name : X.ui.charmenu.create.selectFaction) + "",
            r, n, i = t[6] === t[1] ? " (Recommended)" : "",
            s, a, c, l = (t[1] >= 0 ? X.factions[t[1]].description : X.ui.charmenu.create.pressIcon) + "",
            f, d = se(X.factions),
            u = [];
        for (let m = 0; m < d.length; m += 1) u[m] = D2(S2(t, d, m));
        return {
            c() {
                e = C("h3"), r = B(o), n = C("span"), s = B(i), a = C("div");
                for (let m = 0; m < u.length; m += 1) u[m].c();
                c = C("p"), f = B(l), F(n, "class", "textgreen"), F(e, "class", "textwhite"), F(a, "class", "selectbtn svelte-etr17z"), We(a, "grid-template-columns", "repeat(2,auto)"), F(c, "class", "textprimary descr svelte-etr17z")
            },
            m(m, h) {
                z(m, e, h), w(e, r), w(e, n), w(n, s), z(m, a, h);
                for (let g = 0; g < u.length; g += 1) u[g] && u[g].m(a, null);
                z(m, c, h), w(c, f)
            },
            p(m, h) {
                if (h & 2 && o !== (o = (m[1] >= 0 ? "Faction: " + X.factions[m[1]].name : X.ui.charmenu.create.selectFaction) + "") && Y(r, o), h & 66 && i !== (i = m[6] === m[1] ? " (Recommended)" : "") && Y(s, i), h & 2) {
                    d = se(X.factions);
                    let g;
                    for (g = 0; g < d.length; g += 1) {
                        let M = S2(m, d, g);
                        u[g] ? u[g].p(M, h) : (u[g] = D2(M), u[g].c(), u[g].m(a, null))
                    }
                    for (; g < u.length; g += 1) u[g].d(1);
                    u.length = d.length
                }
                h & 2 && l !== (l = (m[1] >= 0 ? X.factions[m[1]].description : X.ui.charmenu.create.pressIcon) + "") && Y(f, l)
            },
            i: $,
            o: $,
            d(m) {
                m && (I(e), I(a), I(c)), ze(u, m)
            }
        }
    }

    function h4(t) {
        let e, o = (t[0] >= 0 ? "Class: " + X.classes[t[0]].name : X.ui.charmenu.create.selectClass) + "",
            r, n, i, s = (t[0] >= 0 ? X.classes[t[0]].description : X.ui.charmenu.create.pressIcon) + "",
            a, c, l = se(X.classes),
            f = [];
        for (let u = 0; u < l.length; u += 1) f[u] = E2(L2(t, l, u));
        let d = t[0] >= 0 && T2(t);
        return {
            c() {
                e = C("h3"), r = B(o), n = C("div");
                for (let u = 0; u < f.length; u += 1) f[u].c();
                d && d.c(), i = C("p"), a = B(s), F(e, "class", "textwhite"), F(n, "class", "selectbtn svelte-etr17z"), We(n, "grid-template-columns", "repeat(4,auto)"), F(i, "class", "textprimary descr svelte-etr17z")
            },
            m(u, m) {
                z(u, e, m), w(e, r), z(u, n, m);
                for (let h = 0; h < f.length; h += 1) f[h] && f[h].m(n, null);
                d && d.m(u, m), z(u, i, m), w(i, a), c = !0
            },
            p(u, m) {
                if ((!c || m & 1) && o !== (o = (u[0] >= 0 ? "Class: " + X.classes[u[0]].name : X.ui.charmenu.create.selectClass) + "") && Y(r, o), m & 1) {
                    l = se(X.classes);
                    let h;
                    for (h = 0; h < l.length; h += 1) {
                        let g = L2(u, l, h);
                        f[h] ? f[h].p(g, m) : (f[h] = E2(g), f[h].c(), f[h].m(n, null))
                    }
                    for (; h < f.length; h += 1) f[h].d(1);
                    f.length = l.length
                }
                u[0] >= 0 ? d ? (d.p(u, m), m & 1 && de(d, 1)) : (d = T2(u), d.c(), de(d, 1), d.m(i.parentNode, i)) : d && (wt(), pe(d, 1, 1, () => {
                    d = null
                }), _t()), (!c || m & 1) && s !== (s = (u[0] >= 0 ? X.classes[u[0]].description : X.ui.charmenu.create.pressIcon) + "") && Y(a, s)
            },
            i(u) {
                c || (de(d), c = !0)
            },
            o(u) {
                pe(d), c = !1
            },
            d(u) {
                u && (I(e), I(n), I(i)), ze(f, u), d && d.d(u)
            }
        }
    }

    function g4(t) {
        let e;
        return {
            c() {
                e = B("Error")
            },
            m(o, r) {
                z(o, e, r)
            },
            p: $,
            i: $,
            o: $,
            d(o) {
                o && I(e)
            }
        }
    }

    function v4(t) {
        let e;
        return {
            c() {
                e = B(t[4])
            },
            m(o, r) {
                z(o, e, r)
            },
            p(o, r) {
                r & 16 && Y(e, o[4])
            },
            i: $,
            o: $,
            d(o) {
                o && I(e)
            }
        }
    }

    function x4(t) {
        let e, o;
        return e = new ur({}), {
            c() {
                vt(e.$$.fragment)
            },
            m(r, n) {
                mt(e, r, n), o = !0
            },
            p: $,
            i(r) {
                o || (de(e.$$.fragment, r), o = !0)
            },
            o(r) {
                pe(e.$$.fragment, r), o = !1
            },
            d(r) {
                pt(e, r)
            }
        }
    }

    function b4(t) {
        let e, o, r, n, i;

        function s() {
            return t[15](t[25])
        }
        return {
            c() {
                e = C("img"), F(e, "class", o = "btn icon " + (t[1] == t[25] ? "grey selec" : "") + " svelte-etr17z"), Ne(e.src, r = "/data/ui/factions/" + t[25] + "." + Xo) || F(e, "src", r)
            },
            m(a, c) {
                z(a, e, c), n || (i = Pe(e, "click", s), n = !0)
            },
            p(a, c) {
                t = a, c & 2 && o !== (o = "btn icon " + (t[1] == t[25] ? "grey selec" : "") + " svelte-etr17z") && F(e, "class", o)
            },
            d(a) {
                a && I(e), n = !1, i()
            }
        }
    }

    function D2(t) {
        let e, o = t[25] < 2 && b4(t);
        return {
            c() {
                o && o.c(), e = fe()
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

    function w4(t) {
        let e, o, r, n, i;

        function s() {
            return t[13](t[25])
        }
        return {
            c() {
                e = C("img"), F(e, "class", o = "btn icon " + (t[0] == t[25] ? "grey selec" : "") + " svelte-etr17z"), Ne(e.src, r = "/data/ui/classes/" + t[25] + "." + Xo) || F(e, "src", r)
            },
            m(a, c) {
                z(a, e, c), n || (i = Pe(e, "click", s), n = !0)
            },
            p(a, c) {
                t = a, c & 1 && o !== (o = "btn icon " + (t[0] == t[25] ? "grey selec" : "") + " svelte-etr17z") && F(e, "class", o)
            },
            d(a) {
                a && I(e), n = !1, i()
            }
        }
    }

    function E2(t) {
        let e, o = t[25] < 4 && w4(t);
        return {
            c() {
                o && o.c(), e = fe()
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

    function T2(t) {
        let e, o, r, n = se(Array.from(mo).map(z2).sort(V2).filter(t[14])),
            i = [];
        for (let a = 0; a < n.length; a += 1) i[a] = I2(P2(t, n, a));
        let s = a => pe(i[a], 1, 1, () => {
            i[a] = null
        });
        return {
            c() {
                e = C("p"), e.textContent = "Available Skills", o = C("div");
                for (let a = 0; a < i.length; a += 1) i[a].c();
                F(e, "class", "textwhite"), We(o, "display", "grid"), We(o, "grid-gap", "2px"), We(o, "grid-template-columns", "repeat(8, auto)"), We(o, "font-size", "14px"), We(o, "text-align", "left")
            },
            m(a, c) {
                z(a, e, c), z(a, o, c);
                for (let l = 0; l < i.length; l += 1) i[l] && i[l].m(o, null);
                r = !0
            },
            p(a, c) {
                if (c & 1) {
                    n = se(Array.from(mo).map(z2).sort(V2).filter(a[14]));
                    let l;
                    for (l = 0; l < n.length; l += 1) {
                        let f = P2(a, n, l);
                        i[l] ? (i[l].p(f, c), de(i[l], 1)) : (i[l] = I2(f), i[l].c(), de(i[l], 1), i[l].m(o, null))
                    }
                    for (wt(), l = n.length; l < i.length; l += 1) s(l);
                    _t()
                }
            },
            i(a) {
                if (!r) {
                    for (let c = 0; c < n.length; c += 1) de(i[c]);
                    r = !0
                }
            },
            o(a) {
                i = i.filter(Boolean);
                for (let c = 0; c < i.length; c += 1) pe(i[c]);
                r = !1
            },
            d(a) {
                a && (I(e), I(o)), ze(i, a)
            }
        }
    }

    function _4(t) {
        let e, o;
        return e = new C2({
            props: {
                level: 1,
                skill: t[20]
            }
        }), {
            c() {
                vt(e.$$.fragment)
            },
            m(r, n) {
                mt(e, r, n), o = !0
            },
            p(r, n) {
                let i = {};
                n & 1 && (i.skill = r[20]), e.$set(i)
            },
            i(r) {
                o || (de(e.$$.fragment, r), o = !0)
            },
            o(r) {
                pe(e.$$.fragment, r), o = !1
            },
            d(r) {
                pt(e, r)
            }
        }
    }

    function I2(t) {
        let e, o;
        return e = new iv({
            props: {
                img: Er(t[20].id),
                $$slots: {
                    default: [_4]
                },
                $$scope: {
                    ctx: t
                }
            }
        }), {
            c() {
                vt(e.$$.fragment)
            },
            m(r, n) {
                mt(e, r, n), o = !0
            },
            p(r, n) {
                let i = {};
                n & 1 && (i.img = Er(r[20].id)), n & 536870913 && (i.$$scope = {
                    dirty: n,
                    ctx: r
                }), e.$set(i)
            },
            i(r) {
                o || (de(e.$$.fragment, r), o = !0)
            },
            o(r) {
                pe(e.$$.fragment, r), o = !1
            },
            d(r) {
                pt(e, r)
            }
        }
    }

    function y4(t) {
        let e, o, r, n, i, s, a, c = X.ui.ok + "",
            l, f, d, u, m, h = [h4, p4, m4],
            g = [];

        function M(b, _) {
            return b[9][b[3]] == "class" ? 0 : b[9][b[3]] == "faction" ? 1 : b[9][b[3]] == "name" ? 2 : -1
        }
        return ~(r = M(t, -1)) && (n = g[r] = h[r](t)), {
            c() {
                e = C("h2"), e.textContent = `${X.ui.charmenu.create.title}`, o = Ae(), n && n.c(), i = C("div"), s = C("div"), s.textContent = `${X.ui.back}`, a = C("div"), l = B(c), F(e, "class", "textprimary"), F(s, "class", "btn border grey svelte-etr17z"), F(a, "class", f = "btn " + (t[7] ? "border primary" : "disabled") + " svelte-etr17z"), F(i, "class", "grid two navbtn textcenter svelte-etr17z")
            },
            m(b, _) {
                z(b, e, _), z(b, o, _), ~r && g[r].m(b, _), z(b, i, _), w(i, s), w(i, a), w(a, l), d = !0, u || (m = [Pe(s, "click", t[11]), Pe(a, "click", t[10])], u = !0)
            },
            p(b, [_]) {
                let k = r;
                r = M(b, _), r === k ? ~r && g[r].p(b, _) : (n && (wt(), pe(g[k], 1, 1, () => {
                    g[k] = null
                }), _t()), ~r ? (n = g[r], n ? n.p(b, _) : (n = g[r] = h[r](b), n.c()), de(n, 1), n.m(i.parentNode, i)) : n = null), (!d || _ & 128 && f !== (f = "btn " + (b[7] ? "border primary" : "disabled") + " svelte-etr17z")) && F(a, "class", f)
            },
            i(b) {
                d || (de(n), d = !0)
            },
            o(b) {
                pe(n), d = !1
            },
            d(b) {
                b && (I(e), I(o), I(i)), ~r && g[r].d(b), u = !1, it(m)
            }
        }
    }
    var z2 = t => t[1],
        V2 = (t, e) => t.minlevel - e.minlevel;

    function M4(t, e, o) {
        let r, n;
        ne.player || (ne.player = {
            stats: {
                getDamageRoll: () => 100
            }
        });
        let i = Ht(),
            s, a, c = "",
            l = () => {
                o(2, c = A2())
            },
            f = ["class", "faction", "name"],
            d = 0,
            u = () => {
                n && d < f.length - 1 ? o(3, d++, d) : n && o(5, g = M())
            },
            m = () => {
                d > 0 ? o(3, d--, d) : i("message", {
                    state: "charlist"
                })
            },
            h = "",
            g, M = async () => {
                o(7, n = !1);
                let V = await Zo("/api/player/create", r);
                V.result == "ok" ? (setTimeout(() => i("message", {
                    state: "charlist"
                }), 1e3), o(4, h = "\u2714\uFE0F")) : o(4, h = V.result)
            }, b = null;
        un(() => {
            fetch("/api/world/recfaction").then(V => V.json()).then(V => {
                if (V.result == "error") throw null;
                o(6, b = V.result), o(1, a = b)
            }).catch(V => {})
        });
        let _ = V => o(0, s = V),
            k = V => !V.engineOnly && V.class == s,
            U = V => o(1, a = V);

        function T() {
            c = this.value, o(2, c)
        }
        return t.$$.update = () => {
            t.$$.dirty & 7 && o(12, r = {
                class: s,
                faction: a,
                name: c == "" ? void 0 : c
            }), t.$$.dirty & 4104 && o(7, n = r[f[d]] !== void 0)
        }, [s, a, c, d, h, g, b, n, l, f, u, m, r, _, k, U, T]
    }
    var fl = class extends et {
            constructor(e) {
                super(), st(this, e, M4, y4, ut, {})
            }
        },
        R2 = fl;
    var U2 = t => {
        let e = ~~(t / 86400),
            o = ~~(t / (60 * 60) % 24),
            r = ~~(t / 60 % 60),
            n = ~~(t % 60);
        return `${e?e+"d ":""}${o?o+"h ":""}${r?r+"m ":""}${n?n+"s":""}`
    };

    function B2(t, e, o) {
        let r = t.slice();
        return r[19] = e[o], r
    }

    function j2(t, e, o) {
        let r = t.slice();
        return r[19] = e[o], r
    }

    function q2(t, e, o) {
        let r = t.slice();
        return r[19] = e[o], r
    }

    function O2(t, e, o) {
        let r = t.slice();
        return r[19] = e[o], r
    }

    function N2(t, e, o) {
        let r = t.slice();
        return r[19] = e[o], r
    }

    function W2(t, e, o) {
        let r = t.slice();
        return r[19] = e[o], r
    }

    function G2(t, e, o) {
        let r = t.slice();
        return r[19] = e[o], r
    }

    function k4(t) {
        let e, o, r, n, i = [I4, T4, E4, D4, L4, P4, S4, A4, C4],
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
                o = a(c, l), o === f ? s[o].p(c, l) : (wt(), pe(s[f], 1, 1, () => {
                    s[f] = null
                }), _t(), r = s[o], r ? r.p(c, l) : (r = s[o] = i[o](c), r.c()), de(r, 1), r.m(e, null))
            },
            i(c) {
                n || (de(r), n = !0)
            },
            o(c) {
                pe(r), n = !1
            },
            d(c) {
                c && I(e), s[o].d()
            }
        }
    }

    function F4(t) {
        let e, o, r;
        return {
            c() {
                e = C("div"), e.textContent = "SIGN UP", F(e, "class", "btn signupbtn svelte-1ua636q")
            },
            m(n, i) {
                z(n, e, i), o || (r = Pe(e, "click", t[12]), o = !0)
            },
            p: $,
            i: $,
            o: $,
            d(n) {
                n && I(e), o = !1, r()
            }
        }
    }

    function C4(t) {
        let e, o, r;
        return o = new ur({}), {
            c() {
                e = C("div"), vt(o.$$.fragment), We(e, "width", "300px")
            },
            m(n, i) {
                z(n, e, i), mt(o, e, null), r = !0
            },
            p: $,
            i(n) {
                r || (de(o.$$.fragment, n), r = !0)
            },
            o(n) {
                pe(o.$$.fragment, n), r = !1
            },
            d(n) {
                n && I(e), pt(o)
            }
        }
    }

    function A4(t) {
        let e;
        return {
            c() {
                e = C("div"), e.innerHTML = '<p class="textprimary textcenter">Network currently busy, please try again later.</p>', We(e, "width", "300px")
            },
            m(o, r) {
                z(o, e, r)
            },
            p: $,
            i: $,
            o: $,
            d(o) {
                o && I(e)
            }
        }
    }

    function S4(t) {
        let e, o, r, n, i, s, a, c;
        return {
            c() {
                e = C("div"), o = C("h3"), o.textContent = "Account playable in", r = C("h1"), n = B(t[4]), i = C("p"), s = B("Reason: "), a = C("span"), c = B(t[3]), F(o, "class", "textprimary textcenter"), F(r, "class", "textgreen textcenter"), F(a, "class", "textwhite"), F(i, "class", "textprimary textcenter"), We(e, "width", "300px")
            },
            m(l, f) {
                z(l, e, f), w(e, o), w(e, r), w(r, n), w(e, i), w(i, s), w(i, a), w(a, c)
            },
            p(l, f) {
                f[0] & 16 && Y(n, l[4]), f[0] & 8 && Y(c, l[3])
            },
            i: $,
            o: $,
            d(l) {
                l && I(e)
            }
        }
    }

    function P4(t) {
        let e, o, r;
        return o = new Jg({
            props: {
                detail: t[1]
            }
        }), o.$on("message", t[10]), {
            c() {
                e = C("div"), vt(o.$$.fragment), We(e, "width", "300px")
            },
            m(n, i) {
                z(n, e, i), mt(o, e, null), r = !0
            },
            p(n, i) {
                let s = {};
                i[0] & 2 && (s.detail = n[1]), o.$set(s)
            },
            i(n) {
                r || (de(o.$$.fragment, n), r = !0)
            },
            o(n) {
                pe(o.$$.fragment, n), r = !1
            },
            d(n) {
                n && I(e), pt(o)
            }
        }
    }

    function L4(t) {
        let e, o, r;
        return o = new R2({}), o.$on("message", t[10]), {
            c() {
                e = C("div"), vt(o.$$.fragment), We(e, "width", "350px")
            },
            m(n, i) {
                z(n, e, i), mt(o, e, null), r = !0
            },
            p: $,
            i(n) {
                r || (de(o.$$.fragment, n), r = !0)
            },
            o(n) {
                pe(o.$$.fragment, n), r = !1
            },
            d(n) {
                n && I(e), pt(o)
            }
        }
    }

    function D4(t) {
        let e, o;
        return e = new Qg({
            props: {
                elixir: t[5]
            }
        }), e.$on("message", t[10]), {
            c() {
                vt(e.$$.fragment)
            },
            m(r, n) {
                mt(e, r, n), o = !0
            },
            p(r, n) {
                let i = {};
                n[0] & 32 && (i.elixir = r[5]), e.$set(i)
            },
            i(r) {
                o || (de(e.$$.fragment, r), o = !0)
            },
            o(r) {
                pe(e.$$.fragment, r), o = !1
            },
            d(r) {
                pt(e, r)
            }
        }
    }

    function E4(t) {
        let e, o, r, n, i = Math.round(1 / t[7].dtLow) + "",
            s, a, c, l = Math.round(1 / t[7].dtAvg) + "",
            f, d, u, m = Math.round(1 / t[7].dtHigh) + "",
            h, g, M, b;
        return {
            c() {
                e = C("h5"), e.textContent = "\u{1F9D9}\u200D\u2642\uFE0F Secret debug menu", o = C("div"), r = C("div"), n = B("FPS Low "), s = B(i), a = C("div"), c = B("FPS Avg "), f = B(l), d = C("div"), u = B("FPS Max "), h = B(m), g = C("small"), g.textContent = "\u2190 Back", F(e, "class", "textprimary"), We(o, "margin", "2em 0"), We(o, "font-size", "small"), F(g, "class", "btn invi textgrey")
            },
            m(_, k) {
                z(_, e, k), z(_, o, k), w(o, r), w(r, n), w(r, s), w(o, a), w(a, c), w(a, f), w(o, d), w(d, u), w(d, h), z(_, g, k), M || (b = Pe(g, "click", t[14]), M = !0)
            },
            p(_, k) {
                k[0] & 128 && i !== (i = Math.round(1 / _[7].dtLow) + "") && Y(s, i), k[0] & 128 && l !== (l = Math.round(1 / _[7].dtAvg) + "") && Y(f, l), k[0] & 128 && m !== (m = Math.round(1 / _[7].dtHigh) + "") && Y(h, m)
            },
            i: $,
            o: $,
            d(_) {
                _ && (I(e), I(o), I(g)), M = !1, b()
            }
        }
    }

    function T4(t) {
        let e;
        return {
            c() {
                e = C("div"), e.innerHTML = '<h1 class="title success svelte-1ua636q">Success!</h1><p>Thank you for signing up! Your account has not yet been unlocked. Please check back in the future for PTR tests.</p><a href="https://discord.gg/hordes" target="_blank" rel="noopener"><img class="social svelte-1ua636q" src="/data/ui/interface/discord-icon.svg?v=8862189"/></a>', We(e, "width", "300px")
            },
            m(o, r) {
                z(o, e, r)
            },
            p: $,
            i: $,
            o: $,
            d(o) {
                o && I(e)
            }
        }
    }

    function I4(t) {
        let e, o, r, n, i, s, a, c, l;
        return n = new Og({}), n.$on("signin", t[9]), {
            c() {
                e = C("div"), o = C("h2"), o.textContent = "Sign Up", r = C("p"), r.textContent = "Create or log in to your Hordes.io account.", vt(n.$$.fragment), i = C("p"), s = C("small"), s.textContent = "\u2190 Back", F(o, "class", "textprimary"), F(r, "class", "textgrey"), F(s, "class", "btn invi textgrey marg-top"), We(e, "width", "300px")
            },
            m(f, d) {
                z(f, e, d), w(e, o), w(e, r), mt(n, e, null), w(e, i), w(i, s), a = !0, c || (l = Pe(s, "click", t[13]), c = !0)
            },
            p: $,
            i(f) {
                a || (de(n.$$.fragment, f), a = !0)
            },
            o(f) {
                pe(n.$$.fragment, f), a = !1
            },
            d(f) {
                f && I(e), pt(n), c = !1, l()
            }
        }
    }

    function H2(t) {
        let e, o, r, n, i, s, a, c, l, f, d = t[6].version && $2(t),
            u = t[6].description && Y2(t),
            m = se(t[6].archer || []),
            h = [];
        for (let L = 0; L < m.length; L += 1) h[L] = X2(G2(t, m, L));
        let g = se(t[6].mage || []),
            M = [];
        for (let L = 0; L < g.length; L += 1) M[L] = Q2(W2(t, g, L));
        let b = se(t[6].warrior || []),
            _ = [];
        for (let L = 0; L < b.length; L += 1) _[L] = Z2(N2(t, b, L));
        let k = se(t[6].shaman || []),
            U = [];
        for (let L = 0; L < k.length; L += 1) U[L] = J2(O2(t, k, L));
        let T = se(t[6].general || []),
            V = [];
        for (let L = 0; L < T.length; L += 1) V[L] = K2(q2(t, T, L));
        let ae = se(t[6].ui || []),
            q = [];
        for (let L = 0; L < ae.length; L += 1) q[L] = e3(j2(t, ae, L));
        let O = se(t[6].bugs || []),
            oe = [];
        for (let L = 0; L < O.length; L += 1) oe[L] = t3(B2(t, O, L));
        let Z = t[6].motd.notice && o3(t),
            te = t[6].motd.maintext && r3(t);
        return {
            c() {
                d && d.c(), e = fe(), u && u.c(), o = C("div");
                for (let L = 0; L < h.length; L += 1) h[L].c();
                r = fe();
                for (let L = 0; L < M.length; L += 1) M[L].c();
                n = fe();
                for (let L = 0; L < _.length; L += 1) _[L].c();
                i = fe();
                for (let L = 0; L < U.length; L += 1) U[L].c();
                s = fe();
                for (let L = 0; L < V.length; L += 1) V[L].c();
                a = fe();
                for (let L = 0; L < q.length; L += 1) q[L].c();
                c = fe();
                for (let L = 0; L < oe.length; L += 1) oe[L].c();
                Z && Z.c(), l = fe(), te && te.c(), f = fe(), F(o, "class", "patchlog scrollbar bold svelte-1ua636q")
            },
            m(L, W) {
                d && d.m(L, W), z(L, e, W), u && u.m(L, W), z(L, o, W);
                for (let A = 0; A < h.length; A += 1) h[A] && h[A].m(o, null);
                w(o, r);
                for (let A = 0; A < M.length; A += 1) M[A] && M[A].m(o, null);
                w(o, n);
                for (let A = 0; A < _.length; A += 1) _[A] && _[A].m(o, null);
                w(o, i);
                for (let A = 0; A < U.length; A += 1) U[A] && U[A].m(o, null);
                w(o, s);
                for (let A = 0; A < V.length; A += 1) V[A] && V[A].m(o, null);
                w(o, a);
                for (let A = 0; A < q.length; A += 1) q[A] && q[A].m(o, null);
                w(o, c);
                for (let A = 0; A < oe.length; A += 1) oe[A] && oe[A].m(o, null);
                Z && Z.m(L, W), z(L, l, W), te && te.m(L, W), z(L, f, W)
            },
            p(L, W) {
                if (L[6].version ? d ? d.p(L, W) : (d = $2(L), d.c(), d.m(e.parentNode, e)) : d && (d.d(1), d = null), L[6].description ? u ? u.p(L, W) : (u = Y2(L), u.c(), u.m(o.parentNode, o)) : u && (u.d(1), u = null), W[0] & 64) {
                    m = se(L[6].archer || []);
                    let A;
                    for (A = 0; A < m.length; A += 1) {
                        let J = G2(L, m, A);
                        h[A] ? h[A].p(J, W) : (h[A] = X2(J), h[A].c(), h[A].m(o, r))
                    }
                    for (; A < h.length; A += 1) h[A].d(1);
                    h.length = m.length
                }
                if (W[0] & 64) {
                    g = se(L[6].mage || []);
                    let A;
                    for (A = 0; A < g.length; A += 1) {
                        let J = W2(L, g, A);
                        M[A] ? M[A].p(J, W) : (M[A] = Q2(J), M[A].c(), M[A].m(o, n))
                    }
                    for (; A < M.length; A += 1) M[A].d(1);
                    M.length = g.length
                }
                if (W[0] & 64) {
                    b = se(L[6].warrior || []);
                    let A;
                    for (A = 0; A < b.length; A += 1) {
                        let J = N2(L, b, A);
                        _[A] ? _[A].p(J, W) : (_[A] = Z2(J), _[A].c(), _[A].m(o, i))
                    }
                    for (; A < _.length; A += 1) _[A].d(1);
                    _.length = b.length
                }
                if (W[0] & 64) {
                    k = se(L[6].shaman || []);
                    let A;
                    for (A = 0; A < k.length; A += 1) {
                        let J = O2(L, k, A);
                        U[A] ? U[A].p(J, W) : (U[A] = J2(J), U[A].c(), U[A].m(o, s))
                    }
                    for (; A < U.length; A += 1) U[A].d(1);
                    U.length = k.length
                }
                if (W[0] & 64) {
                    T = se(L[6].general || []);
                    let A;
                    for (A = 0; A < T.length; A += 1) {
                        let J = q2(L, T, A);
                        V[A] ? V[A].p(J, W) : (V[A] = K2(J), V[A].c(), V[A].m(o, a))
                    }
                    for (; A < V.length; A += 1) V[A].d(1);
                    V.length = T.length
                }
                if (W[0] & 64) {
                    ae = se(L[6].ui || []);
                    let A;
                    for (A = 0; A < ae.length; A += 1) {
                        let J = j2(L, ae, A);
                        q[A] ? q[A].p(J, W) : (q[A] = e3(J), q[A].c(), q[A].m(o, c))
                    }
                    for (; A < q.length; A += 1) q[A].d(1);
                    q.length = ae.length
                }
                if (W[0] & 64) {
                    O = se(L[6].bugs || []);
                    let A;
                    for (A = 0; A < O.length; A += 1) {
                        let J = B2(L, O, A);
                        oe[A] ? oe[A].p(J, W) : (oe[A] = t3(J), oe[A].c(), oe[A].m(o, null))
                    }
                    for (; A < oe.length; A += 1) oe[A].d(1);
                    oe.length = O.length
                }
                L[6].motd.notice ? Z ? Z.p(L, W) : (Z = o3(L), Z.c(), Z.m(l.parentNode, l)) : Z && (Z.d(1), Z = null), L[6].motd.maintext ? te ? te.p(L, W) : (te = r3(L), te.c(), te.m(f.parentNode, f)) : te && (te.d(1), te = null)
            },
            d(L) {
                L && (I(e), I(o), I(l), I(f)), d && d.d(L), u && u.d(L), ze(h, L), ze(M, L), ze(_, L), ze(U, L), ze(V, L), ze(q, L), ze(oe, L), Z && Z.d(L), te && te.d(L)
            }
        }
    }

    function $2(t) {
        let e, o, r = t[6].version + "",
            n, i, s = t[6].date + "",
            a;
        return {
            c() {
                e = C("p"), o = C("small"), n = B(r), i = B(" \u2014 "), a = B(s), F(e, "class", "textprimary")
            },
            m(c, l) {
                z(c, e, l), w(e, o), w(o, n), w(o, i), w(o, a)
            },
            p(c, l) {
                l[0] & 64 && r !== (r = c[6].version + "") && Y(n, r), l[0] & 64 && s !== (s = c[6].date + "") && Y(a, s)
            },
            d(c) {
                c && I(e)
            }
        }
    }

    function Y2(t) {
        let e, o = t[6].description + "",
            r;
        return {
            c() {
                e = C("p"), r = B(o), F(e, "class", "textwhite")
            },
            m(n, i) {
                z(n, e, i), w(e, r)
            },
            p(n, i) {
                i[0] & 64 && o !== (o = n[6].description + "") && Y(r, o)
            },
            d(n) {
                n && I(e)
            }
        }
    }

    function X2(t) {
        let e, o, r = t[19] + "",
            n;
        return {
            c() {
                e = C("div"), o = B("\u{1F3F9} "), n = B(r)
            },
            m(i, s) {
                z(i, e, s), w(e, o), w(e, n)
            },
            p(i, s) {
                s[0] & 64 && r !== (r = i[19] + "") && Y(n, r)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function Q2(t) {
        let e, o, r = t[19] + "",
            n;
        return {
            c() {
                e = C("div"), o = B("\u{1F52E} "), n = B(r)
            },
            m(i, s) {
                z(i, e, s), w(e, o), w(e, n)
            },
            p(i, s) {
                s[0] & 64 && r !== (r = i[19] + "") && Y(n, r)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function Z2(t) {
        let e, o, r = t[19] + "",
            n;
        return {
            c() {
                e = C("div"), o = B("\u2694\uFE0F "), n = B(r)
            },
            m(i, s) {
                z(i, e, s), w(e, o), w(e, n)
            },
            p(i, s) {
                s[0] & 64 && r !== (r = i[19] + "") && Y(n, r)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function J2(t) {
        let e, o, r = t[19] + "",
            n;
        return {
            c() {
                e = C("div"), o = B("\u{1F300} "), n = B(r)
            },
            m(i, s) {
                z(i, e, s), w(e, o), w(e, n)
            },
            p(i, s) {
                s[0] & 64 && r !== (r = i[19] + "") && Y(n, r)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function K2(t) {
        let e, o, r = t[19] + "",
            n;
        return {
            c() {
                e = C("div"), o = B("\u{1F31F} "), n = B(r)
            },
            m(i, s) {
                z(i, e, s), w(e, o), w(e, n)
            },
            p(i, s) {
                s[0] & 64 && r !== (r = i[19] + "") && Y(n, r)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function e3(t) {
        let e, o, r = t[19] + "",
            n;
        return {
            c() {
                e = C("div"), o = B("\u{1F5A5}\uFE0F "), n = B(r)
            },
            m(i, s) {
                z(i, e, s), w(e, o), w(e, n)
            },
            p(i, s) {
                s[0] & 64 && r !== (r = i[19] + "") && Y(n, r)
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
                e = C("div"), o = B("\u{1F41B} "), n = B(r)
            },
            m(i, s) {
                z(i, e, s), w(e, o), w(e, n)
            },
            p(i, s) {
                s[0] & 64 && r !== (r = i[19] + "") && Y(n, r)
            },
            d(i) {
                i && I(e)
            }
        }
    }

    function o3(t) {
        let e, o = t[6].motd.notice + "",
            r;
        return {
            c() {
                e = C("p"), r = B(o), F(e, "class", "notice svelte-1ua636q")
            },
            m(n, i) {
                z(n, e, i), w(e, r)
            },
            p(n, i) {
                i[0] & 64 && o !== (o = n[6].motd.notice + "") && Y(r, o)
            },
            d(n) {
                n && I(e)
            }
        }
    }

    function r3(t) {
        let e, o = t[6].motd.maintext + "",
            r;
        return {
            c() {
                e = C("p"), r = B(o), F(e, "class", "textprimary")
            },
            m(n, i) {
                z(n, e, i), w(e, r)
            },
            p(n, i) {
                i[0] & 64 && o !== (o = n[6].motd.maintext + "") && Y(r, o)
            },
            d(n) {
                n && I(e)
            }
        }
    }

    function n3(t) {
        let e, o;
        return {
            c() {
                e = C("span"), e.innerHTML = '<img class="svgicon texticon" src="/data/ui/icons/gem.svg?v=8862189"/> Elixir Active', o = B(" | "), F(e, "class", "textsub")
            },
            m(r, n) {
                z(r, e, n), z(r, o, n)
            },
            d(r) {
                r && (I(e), I(o))
            }
        }
    }

    function z4(t) {
        let e, o, r, n, i, s, a, c, l, f, d, u, m, h, g, M, b, _, k, U, T, V, ae, q, O, oe, Z;
        r = new qg({});
        let te = [F4, k4],
            L = [];

        function W(ie, xe) {
            return ie[2] === "denied" ? 0 : 1
        }
        h = W(t, [-1, -1]), g = L[h] = te[h](t);
        let A = t[6] && H2(t),
            J = t[5] === !0 && n3(t);
        return {
            c() {
                e = C("div"), o = C("div"), vt(r.$$.fragment), n = C("div"), i = C("img"), c = C("img"), d = C("div"), u = B("Live"), g.c(), M = C("div"), b = C("div"), _ = C("div"), A && A.c(), k = C("p"), k.innerHTML = '<a class="btn small cyan" href="https://twitter.com/shatterspine" target="_blank">@shatterspine</a> <a class="btn small purp" href="https://discord.gg/hordes" target="_blank">Discord</a>', U = C("div"), T = C("small"), T.innerHTML = '<a class="textgrey" href="/terms#terms-and-conditions">Terms</a> | <a class="textgrey" href="/terms#privacy-policy">Privacy</a>', V = C("small"), J && J.c(), ae = C("span"), ae.textContent = "0.51.8862 Live", q = C("div"), F(o, "class", "textshadow svelte-1ua636q"), F(i, "alt", "Sword"), Ne(i.src, s = "/data/ui/sword.svg?v=8862189") || F(i, "src", s), F(i, "class", a = "sword " + (t[2] !== "denied" ? "logosmall" : "") + " svelte-1ua636q"), F(c, "alt", "Logo"), Ne(c.src, l = "/data/ui/logo.svg?v=8862189") || F(c, "src", l), F(c, "class", f = "logo " + (t[2] !== "denied" ? "logosmall" : "") + " svelte-1ua636q"), F(d, "class", m = "inlinetag versionbox " + (t[2] !== "denied" ? "logosmall" : "") + " svelte-1ua636q"), F(n, "class", "menu svelte-1ua636q"), F(_, "class", "textshadow svelte-1ua636q"), F(b, "class", "row messagebox svelte-1ua636q"), F(T, "class", "textgrey "), F(V, "class", "textgrey"), F(U, "class", "row footerwrapper textshadow svelte-1ua636q"), F(e, "class", "l-menu menuwrapper svelte-1ua636q"), F(q, "class", "l-menu darkgradient svelte-1ua636q")
            },
            m(ie, xe) {
                z(ie, e, xe), w(e, o), mt(r, o, null), w(e, n), w(n, i), w(n, c), w(n, d), w(d, u), L[h].m(n, null), w(e, M), w(M, b), w(b, _), A && A.m(_, null), w(b, k), w(M, U), w(U, T), w(U, V), J && J.m(V, null), w(V, ae), z(ie, q, xe), O = !0, oe || (Z = Pe(d, "click", t[11]), oe = !0)
            },
            p(ie, xe) {
                (!O || xe[0] & 4 && a !== (a = "sword " + (ie[2] !== "denied" ? "logosmall" : "") + " svelte-1ua636q")) && F(i, "class", a), (!O || xe[0] & 4 && f !== (f = "logo " + (ie[2] !== "denied" ? "logosmall" : "") + " svelte-1ua636q")) && F(c, "class", f), (!O || xe[0] & 4 && m !== (m = "inlinetag versionbox " + (ie[2] !== "denied" ? "logosmall" : "") + " svelte-1ua636q")) && F(d, "class", m);
                let Ie = h;
                h = W(ie, xe), h === Ie ? L[h].p(ie, xe) : (wt(), pe(L[Ie], 1, 1, () => {
                    L[Ie] = null
                }), _t(), g = L[h], g ? g.p(ie, xe) : (g = L[h] = te[h](ie), g.c()), de(g, 1), g.m(n, null)), ie[6] ? A ? A.p(ie, xe) : (A = H2(ie), A.c(), A.m(_, null)) : A && (A.d(1), A = null), ie[5] === !0 ? J || (J = n3(ie), J.c(), J.m(V, ae)) : J && (J.d(1), J = null)
            },
            i(ie) {
                O || (de(r.$$.fragment, ie), de(g), O = !0)
            },
            o(ie) {
                pe(r.$$.fragment, ie), pe(g), O = !1
            },
            d(ie) {
                ie && (I(e), I(q)), pt(r), L[h].d(), A && A.d(), J && J.d(), oe = !1, Z()
            }
        }
    }

    function V4(t, e, o) {
        let r, n = $,
            i = () => (n(), n = fi(a, q => o(7, r = q)), a),
            s;
        di(t, gi, q => o(8, s = q)), t.$$.on_destroy.push(() => n());
        let {
            perf: a
        } = e;
        i();
        let c, l = "denied",
            f, d, u, m, h, g = async () => {
                try {
                    let O = await (await fetch("/api/user/info")).json();
                    O.status === "user" ? (o(5, h = O.subscribed), O.lock ? (o(2, l = "lock"), f = new Date(O.lock), o(3, d = O.lockreason), u = setInterval(b, 1e3), b()) : o(2, l = "charlist")) : o(2, l = O.status)
                } catch {
                    o(2, l = "error")
                }
            }, M = q => {
                o(2, l = q.detail.state), o(1, c = q.detail)
            }, b = () => {
                let q = new Date,
                    O = f - q;
                o(4, m = U2(O / 1e3)), f < q && (clearInterval(u), o(2, l = "charlist"))
            }, _;
        (async () => {
            let q = await fetch("/api/changelog");
            o(6, _ = await q.json())
        })(), un(g);
        let U = q => o(2, l = "secret"),
            T = q => o(2, l = "signuppanel"),
            V = q => o(2, l = "denied"),
            ae = q => o(2, l = "denied");
        return t.$$set = q => {
            "perf" in q && i(o(0, a = q.perf))
        }, [a, c, l, d, m, h, _, r, s, g, M, U, T, V, ae]
    }
    var dl = class extends et {
            constructor(e) {
                super(), st(this, e, V4, z4, ut, {
                    perf: 0
                }, null, [-1, -1])
            }
        },
        i3 = dl;
    new i3({
        target: document.body,
        props: {
            perf: Kc
        }
    });
})();