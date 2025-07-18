! function(e) {
    function t(t) {
        for (var i, r, s = t[0], l = t[1], u = t[2], h = 0, d = []; h < s.length; h++) r = s[h], a[r] && d.push(a[r][0]), a[r] = 0;
        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
        for (c && c(t); d.length;) d.shift()();
        return o.push.apply(o, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], i = !0, s = 1; s < n.length; s++) {
                var l = n[s];
                0 !== a[l] && (i = !1)
            }
            i && (o.splice(t--, 1), e = r(r.s = n[0]))
        }
        return e
    }
    var i = {},
        a = {
            0: 0
        },
        o = [];

    function r(t) {
        if (i[t]) return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = e, r.c = i, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "/assets/js/";
    var s = window.webpackJsonp = window.webpackJsonp || [],
        l = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var u = 0; u < s.length; u++) t(s[u]);
    var c = l;
    o.push([105, 1]), n()
}([function(e, t, n) {
    "use strict";
    (function(e) {
        var n = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            i = function() {
                function t() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this._list = [], this._promiseList = []
                }
                return n(t, [{
                    key: "add",
                    value: function() {
                        var t = this,
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function(e) {};
                        this._list.push(function() {
                            var i = new e(function(e) {
                                n(e)
                            });
                            return t._promiseList.push(i), i
                        })
                    }
                }, {
                    key: "done",
                    value: function() {
                        var t = this,
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                        this._list.reduce(function(e, t) {
                            return e.then(t)
                        }, e.resolve()).then(function() {
                            e.all(t._promiseList).then(n)
                        })
                    }
                }], [{
                    key: "wait",
                    value: function(t) {
                        return new e(function(e) {
                            setTimeout(function() {
                                e()
                            }, t)
                        })
                    }
                }]), t
            }();
        t.a = i
    }).call(this, n(4))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var i = n(38),
            a = n.n(i),
            o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            r = function() {
                function t() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                return o(t, null, [{
                    key: "Deferred",
                    value: function() {
                        return new function() {
                            this.resolve = null, this.reject = null, this.promise = new e(function(e, t) {
                                this.resolve = e, this.reject = t
                            }.bind(this))
                        }
                    }
                }, {
                    key: "getCubicCurve",
                    value: function(e, t, n, i) {
                        return a.a.create("custom", "M0,0 C" + Number(e) + "," + Number(t) + " " + Number(n) + "," + Number(i) + " 1,1")
                    }
                }, {
                    key: "hexToRgb",
                    value: function(e) {
                        return Color.hexToRgb(e)
                    }
                }, {
                    key: "rgbToHex",
                    value: function(e, t, n) {
                        return Color.rgbToHex(e, t, n)
                    }
                }, {
                    key: "zeroPadding",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            i = "";
                        return e = ("00" + e).slice(-t), n ? (e = e.split("")).forEach(function(e, t) {
                            i += '<span class="js-split p-split">' + e + "</span>"
                        }) : i = e, i
                    }
                }, {
                    key: "getTargetOffsetTop",
                    value: function(e) {
                        var t = e.getBoundingClientRect(),
                            n = window.pageYOffset || document.documentElement.scrollTop;
                        return t.top + n
                    }
                }, {
                    key: "getTargetOffsetLeft",
                    value: function(e) {
                        if (e) {
                            var t = e.getBoundingClientRect(),
                                n = window.pageXOffset || document.documentElement.scrollLeft;
                            return t.left + n
                        }
                    }
                }, {
                    key: "getTargetOffsetCenterTop",
                    value: function(e, t) {
                        var n = e.getBoundingClientRect(),
                            i = n.height,
                            a = window.innerHeight,
                            o = t || window.pageYOffset || document.documentElement.scrollTop;
                        return a > i ? n.top + o - .5 * (a - i) : n.top + o + .5 * (i - a)
                    }
                }, {
                    key: "clearTween",
                    value: function(e) {
                        e && (e.pause(), e.kill(), e = null)
                    }
                }, {
                    key: "noScroll",
                    value: function() {
                        var e = "onwheel" in document ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll";
                        window.addEventListener(e, function(e) {
                            e.preventDefault()
                        }, !1)
                    }
                }, {
                    key: "returnScroll",
                    value: function() {
                        var e = "onwheel" in document ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll";
                        window.removeEventListener(e, function(e) {
                            e.preventDefault()
                        }, !1)
                    }
                }, {
                    key: "imageLoad",
                    value: function(t) {
                        return new e(function(e) {
                            var n = new Image;
                            n.src = t, n.onload = function() {
                                e(n)
                            }, n.onerror = function() {
                                e("")
                            }
                        })
                    }
                }, {
                    key: "triggerEvent",
                    value: function(e, t) {
                        if ("resize" === t && (PROJECT.resizeManager.canOnResize = !0), document.createEvent) {
                            var n = document.createEvent("HTMLEvents");
                            return n.initEvent(t, !0, !0), e.dispatchEvent(n)
                        }
                        var i = document.createEventObject();
                        return e.fireEvent("on" + t, i)
                    }
                }]), t
            }();
        t.a = r
    }).call(this, n(4))
}, function(e, t, n) {
    "use strict";
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        a = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return i(e, null, [{
                key: "clamp",
                value: function(e, t, n) {
                    return Math.min(Math.max(e, t), n)
                }
            }, {
                key: "radToDeg",
                value: function(e) {
                    return e / Math.PI * 180
                }
            }, {
                key: "digToRad",
                value: function(e) {
                    return e * Math.PI / 180
                }
            }, {
                key: "followUp",
                value: function(e, t, n) {
                    return e + (t - e) * n
                }
            }]), e
        }();
    t.a = a
}, function(e, t, n) {
    "use strict";
    var i = n(1);
    t.a = function e() {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.easeInSine = i.a.getCubicCurve(.47, 0, .745, .715), this.easeInCubic = i.a.getCubicCurve(.55, .055, .675, .19), this.easeInQuint = i.a.getCubicCurve(.755, .05, .855, .06), this.easeInQuad = i.a.getCubicCurve(.55, .085, .68, .53), this.easeInQuart = i.a.getCubicCurve(.895, .03, .685, .22), this.easeInExpo = i.a.getCubicCurve(.95, .05, .795, .035), this.out = i.a.getCubicCurve(0, .6, .2, 1), this.out2 = i.a.getCubicCurve(.225, 1, .325, 1), this.out3 = i.a.getCubicCurve(.225, 1, .325, 1), this.outQuad = i.a.getCubicCurve(.25, .46, .45, .94), this.outQuart = i.a.getCubicCurve(.165, .84, .44, 1), this.outExpo = i.a.getCubicCurve(.2, 1, .25, 1), this.outBounce1 = i.a.getCubicCurve(.25, .9, .3, 1.25), this.inOut = i.a.getCubicCurve(.725, 0, .175, 1), this.inOut2 = i.a.getCubicCurve(.4, 0, .25, 1), this.inOut3 = i.a.getCubicCurve(.15, 0, .25, 1), this.inOutBq = i.a.getCubicCurve(.6, 0, .3, 1), this.inOutQuad = i.a.getCubicCurve(.455, .03, .515, .955), this.inOutQuart = i.a.getCubicCurve(.75, 0, .175, 1), this.inOutExpo = i.a.getCubicCurve(1, 0, 0, 1), this.linear = i.a.getCubicCurve(0, 0, 1, 1)
    }
}, , , , , function(e, t, n) {
    "use strict";
    (function(e, i) {
        var a = n(1),
            o = n(3),
            r = n(52),
            s = n(53),
            l = n(28),
            u = n(54),
            c = n(55),
            h = n(56),
            d = n(57),
            g = n(58),
            f = n(59),
            p = n(25),
            v = n(60),
            m = n(11),
            y = n.n(m),
            w = n(26),
            T = n(80),
            C = n(82),
            R = n(81),
            M = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            S = function() {
                function t(n) {
                    var m = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.ease = new o.a, this.content = n, window.pageInitialized || (PROJECT.resizeHandler = [], PROJECT.scrollHandler = [], PROJECT.renderHandler = [], PROJECT.mousePositionHandler = [], this.langChangeManager = new r.a, this.langChangeManager.startUpFunction = function() {
                        return new e(function(e) {
                            document.querySelector("html").classList.add("is-langChange"), PROJECT.screenFix.addNoKeyDown(), PROJECT.screenFix.addNoKeyUp(), PROJECT.screenFix.addNoWheel(), i.to("body,html", .7, {
                                scrollTop: 0,
                                ease: m.ease.inOutBq
                            }), i.to(document.querySelector(".js-target--langContent"), .7, {
                                opacity: 0,
                                onComplete: e
                            })
                        })
                    }, this.langChangeManager.onCompleteFunction = function() {
                        return new e(function(e) {
                            a.a.triggerEvent(window, "resize"), i.to(document.querySelector(".js-target--langContent"), .7, {
                                ease: m.ease.inOut2,
                                delay: .1,
                                opacity: 1,
                                onComplete: function() {
                                    document.querySelector("html").classList.remove("is-langChange"), PROJECT.screenFix.clearFix(), a.a.triggerEvent(window, "resize"), e()
                                }
                            })
                        })
                    }, this.hoverManager = new p.a(document.querySelector(".js-header")), this.hoverManager.run(), this.hoverManager2 = new p.a(document.querySelector("#side-contact")), this.hoverManager2.run(), PROJECT.scrollManager = new s.a, PROJECT.resizeManager = new l.a, PROJECT.renderMangaer = new u.a, PROJECT.mousePositionManager = new d.a, PROJECT.smoothScrollManager = MOBILE || TABLET ? new h.a : new c.a, PROJECT.headerManager = new g.a, PROJECT.resizeManager.resizeHandler = PROJECT.resizeHandler, PROJECT.scrollManager.scrollHandler = PROJECT.scrollHandler, PROJECT.renderMangaer.renderHandler = PROJECT.renderHandler, PROJECT.mousePositionManager.mousePositionHandler = PROJECT.mousePositionHandler, PROJECT.springManagerInit = function() {
                        MOBILE || TABLET || (PROJECT.springManagers = new v.a, PROJECT.springManagers.run(), PROJECT.resizeHandler.push(function(e, t, n, i) {
                            PROJECT.springManagers.onResize()
                        }), PROJECT.renderHandler.push(function(e) {
                            PROJECT.springManagers.onUpdate()
                        }), PROJECT.mousePositionHandler.push(function(e) {
                            PROJECT.springManagers.onMouseMove(e)
                        }))
                    }, this.startUpFunction = function() {}), this.stringTrimmer = new f.a, this.contentHoverManager = ""
                }
                return M(t, [{
                    key: "viewWillAppear",
                    value: function() {
                        window.pageInitialized || (this.langChangeManager.run(), PROJECT.resizeManager.run(), PROJECT.scrollManager.run(), PROJECT.renderMangaer.run(), PROJECT.mousePositionManager.run(), PROJECT.resizeHandler.push(function(e, n, i, a) {
                            PROJECT.smoothScrollManager.onResize(e), PROJECT.mousePositionManager.onResize(n, i), t.onResizeWorksPage()
                        }), PROJECT.scrollHandler.push(function(e) {
                            PROJECT.smoothScrollManager.onScroll(e)
                        }), PROJECT.renderHandler.push(function(e) {
                            PROJECT.smoothScrollManager.onUpdate(e), PROJECT.mousePositionManager.onUpdate()
                        }), PROJECT.smoothScrollManager.run(), t.setWorksList(), document.querySelector("#app-canvas") && (y.a.use(w.a), new y.a({
                            el: "#app-canvas",
                            components: {
                                Stage: T.a
                            },
                            template: "<Stage></Stage>"
                        })), !document.querySelector("#app-indicator") || MOBILE || TABLET || (y.a.use(w.a), new y.a({
                            el: "#app-indicator",
                            components: {
                                Indicator: C.a
                            },
                            template: "<Indicator></Indicator>"
                        })), !document.querySelector("#app-mousePointer") || MOBILE || TABLET || IE || (y.a.use(w.a), new y.a({
                            el: "#app-mousePointer",
                            components: {
                                MousePointer: R.a
                            },
                            template: "<MousePointer></MousePointer>"
                        })), this.startUpFunction = PROJECT.othersPageStartUp, (MOBILE || TABLET) && l.a.resize()), PROJECT.mousePositionManager.$targetToPointerStateChangeContentChildren = [], PROJECT.mousePositionManager.setNodeListContentChildren(this.content, PROJECT.mousePositionManager.$targetToPointerStateChangeContentChildren), this.contentHoverManager = new p.a(this.content), this.contentHoverManager.run(), a.a.triggerEvent(window, "resize")
                    }
                }, {
                    key: "viewDidAppear",
                    value: function() {
                        PROJECT.mousePositionManager.setEventTargetStateChange(PROJECT.mousePositionManager.$targetToPointerStateChangeContentChildren), a.a.triggerEvent(window, "resize"), a.a.triggerEvent(window, "scroll")
                    }
                }, {
                    key: "viewWillDisappear",
                    value: function() {}
                }, {
                    key: "viewDidDisappear",
                    value: function() {}
                }], [{
                    key: "setWorksList",
                    value: function() {
                        var e = document.querySelectorAll(".js-canvas__target");
                        PROJECT.worksTitleList = [], PROJECT.worksThumbList = [], PROJECT.worksZoomList = [], PROJECT.worksUrlList = [];
                        for (var t = 0; t < e.length; t++) PROJECT.worksThumbList[t] = 0 === t ? e[t].getAttribute("data-canvas-zoom") : e[t].getAttribute("data-canvas-thumb"), PROJECT.worksTitleList[t] = e[t].innerHTML, PROJECT.worksZoomList[t] = e[t].getAttribute("data-canvas-zoom"), PROJECT.worksUrlList[t] = e[t].getAttribute("data-canvas-url")
                    }
                }, {
                    key: "onResizeWorksPage",
                    value: function() {
                        for (var e = document.querySelectorAll(".p-works__text"), t = document.querySelectorAll(".p-works__thumb"), n = 0; n < e.length; n++) {
                            var i = Math.round(.5 * t[n].getBoundingClientRect().width);
                            e[n].querySelector(".js-target--parallax").setAttribute("data-parallax-move-range-y", i), e[n].style["margin-top"] = i + 10 + "px"
                        }
                    }
                }]), t
            }();
        t.a = S
    }).call(this, n(4), n(5))
}, function(e, t, n) {
    "use strict";
    (function(e, i) {
        var a = n(13),
            o = n.n(a),
            r = n(18),
            s = n.n(r),
            l = n(0),
            u = n(19),
            c = n(36),
            h = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            d = function() {
                function t(e, n, i) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.controllerManager = new u.a(n), this.prefetch = new c.a, this._processQueue = [], this.isRunning = !1, this.useAjax = i, this.debug = !1, this._requests = [], this._prev = null, this._fx = e, this.pageInitialized = !1, this.hashChange = !1, this.sendAnalytics = function(e) {
                        gtag("config", "UA-135279002-1", {
                            page_path: e
                        })
                    }
                }
                return h(t, [{
                    key: "boot",
                    value: function() {
                        var e = this;
                        this.prefetch.init(), "not-found" === document.querySelector(".page-content").getAttribute("id") && (this.useAjax = !1), this.useAjax ? (history.scrollRestoration = "manual", o.a.exit("*", function(t, n) {
                            PROJECT.addTransition(!0), e._pageExit(t, n)
                        }), o()("*", function(t) {
                            e._pageEnter(t)
                        }), o()()) : this._safeBoot()
                    }
                }, {
                    key: "_safeBoot",
                    value: function() {
                        var e = this,
                            t = new l.a;
                        t.add(this._fx["none --\x3e none"](null, null, null, null, this.controllerManager, function() {
                            e.pageInitialized = !0, e.controllerManager.use("current").viewDidAppear()
                        })), t.done(function() {})
                    }
                }, {
                    key: "_apply",
                    value: function(t, n, i, a) {
                        var o = t + " --\x3e *",
                            r = t + " --\x3e " + n,
                            s = "* --\x3e " + n,
                            u = "* --\x3e *",
                            c = new l.a,
                            h = this;
                        return new e(function(e) {
                            [r, o, s, u].some(function(e, o) {
                                if (e in h._fx) return h.debug && (console.log("%c" + e, "color: #03A9F4;"), console.group("%cViewController", "color: #00C853;")), c.add(function(o) {
                                    h._fx[e](t, n, i, a, h.controllerManager, o)()
                                }), !0
                            }), c.done(function(t) {
                                e(t), h.debug
                            })
                        })
                    }
                }, {
                    key: "_pageEnter",
                    value: function(e) {
                        var t = this;
                        !0 !== e.cancel && (this.debug && (console.group("%c         app         ", "color: #B3E5FC;background-color: #03A9F4;"), console.log("%cpage enter", "color: #03A9F4;")), e.init ? this._apply("none", "none", null, null).then(function() {
                            t.pageInitialized = !0, t.controllerManager.use("current").viewDidAppear(), t._processQueue.length && t.run()
                        }) : (this._addRequestQueue({
                            from: this._prev,
                            to: e
                        }), this._processQueue.length < 2 ? this._processQueue.push(this._pageChange.bind(this, this, e)) : this._processQueue[this._processQueue.length - 1] = this._pageChange.bind(this, this, e), this.pageInitialized && this.run()))
                    }
                }, {
                    key: "run",
                    value: function() {
                        var e = this;
                        this.isRunning || (this.isRunning = !0, this._processQueue[0]().then(function() {
                            e._processQueue.shift(), e.isRunning = !1, e._processQueue.length && e.run()
                        }))
                    }
                }, {
                    key: "_pageExit",
                    value: function(e, t) {
                        if (!this.hashChange && ("" === e.hash || 0 !== e.hash.length)) {
                            if (this._prev = e, !this.pageInitialized) return t();
                            if (!0 === e.cancelExit) return t();
                            this.controllerManager.use("current").viewWillDisappear(), this.debug && (console.groupEnd("ViewController"), console.log("%cpage exit", "color: #03A9F4;"), console.groupEnd("app")), t()
                        }
                    }
                }, {
                    key: "_pageChange",
                    value: function(t, n) {
                        var a = this,
                            o = t._getRequestQueue();
                        return new e(function(n) {
                            if (!1 === o) return n();
                            o.to.fromChildPage || o.to.toChildPage;
                            var r = o.to.path;
                            r.match(location.origin) || (r = location.origin + r);
                            var l = a.prefetch.getCache(r),
                                u = "";
                            l && l._result ? l.then(function(e) {
                                u = e.data, Array.isArray(u) && (u = e[0]), t._showPage(u, o).then(n), t._current = o.to, t.sendAnalytics(o.to.path)
                            }) : a.prefetch.setCache(r, new e(function(e) {
                                s.a.get(o.to.path).then(function(i) {
                                    u = i.data, Array.isArray(u) && (u = i[0]), t._showPage(u, o).then(n), t._current = o.to, t.sendAnalytics(o.to.path), e(i)
                                }).catch(function(e) {
                                    i.to(document.body, .7, {
                                        opacity: 0,
                                        onComplete: function() {
                                            location.reload()
                                        }
                                    })
                                })
                            }))
                        })
                    }
                }, {
                    key: "_showPage",
                    value: function(n, i) {
                        var a = this,
                            o = t._purseHTML(n),
                            r = n.match(/<title>(.*)<\/title>/),
                            s = document.querySelector(".page-content").getAttribute("id"),
                            l = o.querySelector(".page-content").getAttribute("id");
                        return new e(function(e) {
                            r = o.querySelector("title").textContent ? o.querySelector("title").textContent : document.querySelector("title").textContent, a._apply(s, l, o, i).then(function() {
                                document.querySelector("title").textContent = r, PROJECT.addTransition(!1), a.controllerManager.use("current").viewDidAppear(), e()
                            })
                        })
                    }
                }, {
                    key: "_getRequestQueue",
                    value: function() {
                        var e = this._requests;
                        if (0 === e.length) return !1;
                        var t = e[e.length - 1];
                        return this._requests = [], t
                    }
                }, {
                    key: "_addRequestQueue",
                    value: function(e) {
                        this._requests[this._requests.length] = e
                    }
                }], [{
                    key: "triggerPageTransition",
                    value: function(e) {
                        o()(e)
                    }
                }, {
                    key: "_purseHTML",
                    value: function(e) {
                        var t = document.createElement("div");
                        return t.innerHTML = e, t
                    }
                }, {
                    key: "_setNavActive",
                    value: function(e) {}
                }]), t
            }();
        t.a = d
    }).call(this, n(4), n(5))
}, , , , , , function(e, t, n) {
    "use strict";
    (function(e, i) {
            var a = n(62),
                o = n.n(a),
                r = n(1),
                s = n(2),
                l = n(63),
                u = n(0),
                c = n(9),
                h = n(64),
                d = n(74),
                g = n(75),
                f = n(76);
            window.PROJECT = window.PROJECT || {}, PROJECT.onStartUp = PROJECT.onStartUp || new u.a;
            var p = new l.a,
                v = 1 / Math.PI,
                m = 2 * Math.PI,
                y = 1 / m,
                w = -.5 * Math.PI,
                T = Math.PI / 180;
            t.a = {
                name: "Stage",
                data: function() {
                    return {
                        canUpdate: !1,
                        canDrag: !1,
                        canClick: !1,
                        canUpdateOnWheel: !1,
                        canAutoPlay: !1,
                        canDrawFront: !1,
                        canMouseLeaveEffect: !0,
                        canUpdateMouseMove: !1,
                        isCompletedOnOpeningAnimation: !1,
                        isShowTitleTransition: !1,
                        isTransition: !1,
                        transitionTitle: PROJECT.worksTitleList[0],
                        titleScaleSize: 1,
                        titleFontSize: 0,
                        dashArray: 0,
                        dashArrayBack: 0,
                        dashArrayWorks: 0,
                        dashArrayColor: "#fff",
                        indicatorOffset: [],
                        nowSt: 0,
                        isShowPieBack: !1,
                        isDevelop: !1,
                        isAutoPlay: !0,
                        isCompletedDashArrayBackAnimation: !1,
                        isShowRoll: !0,
                        isOnEnterWorksList: !1,
                        isOnLeaveWorksList: !1,
                        isAnimatingOnEnterWorksList: !1,
                        mouseEnterWorksListCurrent: 0,
                        slideLength: 0,
                        slideLengthRatio: 0,
                        slideState: {
                            prev: 0,
                            current: 0,
                            next: 1
                        },
                        slideNumState: {
                            prev: 0,
                            current: 0,
                            next: 1
                        },
                        slideTask: [],
                        slideImage: PROJECT.worksThumbList,
                        slideImageFull: PROJECT.worksZoomList,
                        slideTitle: PROJECT.worksTitleList,
                        slideUrl: PROJECT.worksUrlList,
                        slideYear: [],
                        isMouseDowning: !1,
                        isMouseDownEventing: !1,
                        isMouseWheeling: !1,
                        isClickEventing: !1,
                        isSliding: !1,
                        isTimerEventing: !1,
                        mouseNow: {
                            x: 0,
                            y: 0
                        },
                        mousePos: {
                            x: 0,
                            y: 0
                        },
                        radian: w,
                        isInitCompleted: !1,
                        difference: 0,
                        force: 0,
                        slideForce: 0,
                        slideForceRatio: 0,
                        taskMaxLength: 2,
                        rollElementHeight: 0,
                        rollNumberElementHeight: 0,
                        rollY: 0,
                        rollNumberY: 0,
                        rollOpacityRatio: 0,
                        rollOpacityNextRatio: 0,
                        wheelProgressPower: 0,
                        wheelPosY: 0,
                        progress: 0,
                        currentProgress: 0,
                        arcEndPointValue: 0,
                        windowInnerWidth: 0,
                        windowInnerHeight: 0,
                        windowInnerWidthRatio: 0,
                        windowInnerHeightRatio: 0,
                        contentHeightRatio: 0,
                        titleScaleRatio: 1,
                        current: 0,
                        lineWidth: 0,
                        controllerWidth: 80,
                        pieStateCounter: 0,
                        dashOffset: 0,
                        dashArrayAll: 0,
                        dashOffsetAll: 0,
                        timerValue: 0,
                        toggleWrapper: "",
                        toggle: "",
                        timer: "",
                        pieSize: 0,
                        toggleSize: 0,
                        toggleWrapperSize: 0,
                        toggleWrapperSizePI: 0,
                        toggleInnerSize: 0,
                        togglePointSize: 0,
                        toggleRadian: 0,
                        togglePos: {
                            x: 0,
                            y: 0
                        },
                        zoomInRotationValue: 0,
                        canvasInfoOpacity: 1,
                        tweenSlide: null,
                        tweenArc: null,
                        tweenToggle: null,
                        tweenToggleWrapper: null,
                        tweenMouseMove: null,
                        tweenTimer: null,
                        pieSizeRatio: PROJECT.isMobileSize ? 1.97 : 1,
                        strokeWidth: 1
                    }
                },
                methods: {
                    onInitIndex: function() {
                        var e = this;
                        this.isInitCompleted = !0, this.stopUpdate2dCanvas(), this.setOnEventFlag(!0), this.canUpdate = !0, this.$nextTick(function() {
                            e.setMouseSpringEvent(), e.setMouseWheelEvent(), PROJECT.renderHandler.push(function(t) {
                                PROJECT.mouseSpringManager.onUpdate(t), e.onUpdateStage(t)
                            }), PROJECT.readyPageTransitionFromTopOfCanvas = function(t, n, i) {
                                return e.readyPageTransitionFromTop(t, n, i)
                            }, PROJECT.scrollRecognizeManager.canPrevent = !1, PROJECT.scrollRecognizeManager.canWheel = !1
                        })
                    },
                    initProgress: function() {
                        this.timer = document.querySelector(".js-timer"), this.canAutoPlay = this.isAutoPlay, this.runProgress()
                    },
                    setKeyTypeEvent: function() {
                        var e = this;
                        window.addEventListener("keydown", function(t) {
                            var n = null;
                            t.keyCode ? n = event.keyCode : t.which && (n = event.which), 37 === n && e.onClickController(-1), 39 === n && e.onClickController(1)
                        })
                    },
                    setMouseWheelEvent: function() {
                        var e = this;
                        PROJECT.scrollRecognizeManager = new d.a({
                            wheelRatio: 1,
                            dragRatio: 50
                        }), PROJECT.scrollRecognizeManager.behavior = function(t, n, i) {
                            e.onMouseWheel(t, n, i)
                        }, PROJECT.scrollRecognizeManager.run(), this.canUpdateOnWheel = !0
                    },
                    setMouseSpringEvent: function() {
                        this.toggle = document.querySelector(".js-toggle"), PROJECT.mouseSpringManager = new g.a, PROJECT.mouseSpringManager.setup()
                    },
                    setOnEventFlag: function(e) {
                        this.canDrag = e, this.canClick = e, this.canUpdateOnWheel = e
                    },
                    stopUpdate2dCanvas: function() {
                        PROJECT.glManager.frontRawShaderMesh.canNeedsUpdateFrontPie = !1, PROJECT.glManager.backRawShaderMesh.canNeedsUpdateBackPie = !1, PROJECT.glManager.frontPie.canDraw = !1, PROJECT.glManager.backPie.canDraw = !1
                    },
                    disableCanvasEvent: function() {
                        PROJECT.scrollRecognizeManager.canPrevent = !1, PROJECT.scrollRecognizeManager.canWheel = !1, this.setOnEventFlag(!1)
                    },
                    stop: function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.setOnEventFlag(!1), this.canUpdate = !1, PROJECT.scrollRecognizeManager && (PROJECT.scrollRecognizeManager.canPrevent = !1, PROJECT.scrollRecognizeManager.canWheel = !1, PROJECT.scrollRecognizeManager.speed = 0), e && (this.force = 0, this.resetProgress(0, !1)), setTimeout(this.canAutoPlay = !1, 10)
                    },
                    reStart: function() {
                        this.force = -this.slideNumState.current, this.canUpdate = !0, PROJECT.scrollRecognizeManager.canPrevent = !0, PROJECT.scrollRecognizeManager.canWheel = !0, this.setOnEventFlag(!0), this.canAutoPlay = !0, this.runProgress(), PROJECT.glManager.setTexture(this.slideNumState)
                    },
                    reSet: function() {
                        PROJECT.glManager.canUpdate = !0, this.force = -this.slideNumState.current, this.current = (Math.floor(-this.force % this.slideLength) + this.slideLength) % this.slideLength, this.setSlideState(this.slideNumState, this.current), this.setSlideState(this.slideState, this.current), PROJECT.glManager.setTexture(this.slideNumState), this.progress = (-this.force % this.slideLength + this.slideLength) % this.slideLength, this.currentProgress = this.progress - this.slideNumState.current, this.onUpdateRoll(), this.onUpdateGLValue()
                    },
                    refresh: function() {
                        var t = this;
                        return PROJECT.glManager.canUpdate = !0, this.canUpdate = !0, PROJECT.scrollRecognizeManager.speed = 0, this.force = Math.round(this.force), this.difference = 0, new e(function(e) {
                            setTimeout(function() {
                                PROJECT.glManager.canUpdate = !1, t.canUpdate = !1, e()
                            }, 100)
                        })
                    },
                    readyPageTransitionFromTop: function(t, n, a) {
                        var o = this;
                        return new e(function(e) {
                            var n, r, s = void 0,
                                l = void 0;
                            if (o.isTransition = !0, s = !1, l = .4, n = Math.round(o.progress), r = Math.round(o.currentProgress), o.progress === n === 0) return o.nextPageImageLoaded(t, e);
                            i.to(o, .7, {
                                ease: p.inOut,
                                rollY: -r * o.rollElementHeight,
                                rollNumberY: -r * o.rollNumberElementHeight,
                                rollOpacityRatio: Math.max(0, 1 - 4 * r),
                                rollOpacityNextRatio: Math.max(0, r),
                                dashOffset: -o.toggleWrapperSizePI,
                                dashArray: 0,
                                onComplete: function() {
                                    o.dashOffset = o.toggleWrapperSizePI, o.dashArray = o.toggleWrapperSizePI, o.isTransition = !1, o.canUpdate = !1, 1 === r ? (o.setSlideState(o.slideNumState, (n - 1) % o.slideLength), o.setSlideState(o.slideState, (n - 1) % o.slideLength), o.currentProgress = 0, PROJECT.glManager.setTexture({
                                        current: (n - 1) % o.slideLength,
                                        next: n % o.slideLength
                                    }), o.onUpdateGLValue(), o.transitionNumber = o.slideNumState.next + 1, o.transitionYear = o.slideYear[o.slideNumState.next], o.transitionTitle = o.slideTitle[o.slideNumState.next], o.slideNumState.current = o.slideNumState.next) : (o.transitionNumber = o.slideNumState.current + 1, o.transitionYear = o.slideYear[o.slideNumState.current], o.transitionTitle = o.slideTitle[o.slideNumState.current]), "works-detail" === a && (o.isShowTitleTransition = !0), "works" === a && (s = !0), "about" === a && (l = 0), o.nextPageImageLoaded(t, e, s, l)
                                }
                            }), i.to(o, .7, {
                                ease: p.inOutQuad,
                                currentProgress: r,
                                onUpdate: function() {
                                    o.onUpdateGLValue()
                                }
                            })
                        })
                    },
                    nextPageImageLoaded: function(e, t) {
                        var n = this,
                            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .4;
                        this.canUpdate = !1;
                        var r = new f.a(e);
                        r.onUpdateFunction = function(e) {
                            n.dashOffset = n.toggleWrapperSizePI - n.toggleWrapperSizePI * e, PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleGradationRatio.value = PROJECT.glManager.vignetteGuiCtrl.gradation_ratio - .13 * e, PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleGradationRatio.value = PROJECT.glManager.vignetteGuiCtrl.gradation_ratio - .13 * e
                        }, r.onCompleteFunction = function() {
                            n.titleScaleRatio = 1, n.canMouseLeaveEffect = !0, n.dashOffset = Math.ceil(n.dashOffset), a || i.to(document.querySelectorAll(".p-pie__circle.back")[0], o, {
                                ease: p.linear,
                                opacity: 0,
                                onComplete: function() {
                                    n.isShowPieBack = !1, document.querySelectorAll(".p-pie__circle.back")[0].style.opacity = ""
                                }
                            }), t()
                        }, r.init()
                    },
                    setTransitionToWorksDetail: function(e, t) {
                        t.preventDefault(), this.isTransition = !0, this.tweenTimer.pause();
                        var n = Math.round(this.progress) % this.slideLength;
                        PROJECT.pageTransitionState.topToWorksDetail = 1, c.a.triggerPageTransition(this.slideUrl[n])
                    },
                    getMousePos: function(e) {
                        return {
                            x: (2 * e.clientX - this.windowInnerWidth) * this.windowInnerHeightRatio,
                            y: (2 * e.clientY - this.windowInnerHeight) * this.windowInnerHeightRatio
                        }
                    },
                    onMouseEnterSlideTitle: function() {
                        var e = this;
                        MOBILE || TABLET || (i.to(this, 1, {
                            ease: r.a.getCubicCurve(.45, 0, 0, 1),
                            titleScaleRatio: 1.06,
                            onUpdate: function() {
                                e.titleScaleSize = e.titleScaleRatio
                            }
                        }), i.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uHoverScale, 1, {
                            ease: r.a.getCubicCurve(.45, 0, 0, 1),
                            value: .2
                        }), i.to(PROJECT.glManager.backRawShaderMesh.uniforms.uHoverScale, 1, {
                            ease: r.a.getCubicCurve(.45, 0, 0, 1),
                            value: .1
                        }))
                    },
                    onMouseLeaveSlideTitle: function() {
                        var e = this;
                        !this.canMouseLeaveEffect || MOBILE || TABLET || (i.to(this, .7, {
                            ease: p.outQuad,
                            titleScaleRatio: 1,
                            onUpdate: function() {
                                e.titleScaleSize = e.titleScaleRatio
                            }
                        }), i.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uHoverScale, .7, {
                            delay: .1,
                            ease: p.outQuad,
                            value: 0
                        }), i.to(PROJECT.glManager.backRawShaderMesh.uniforms.uHoverScale, .7, {
                            delay: .2,
                            ease: p.outQuad,
                            value: 0
                        }))
                    },
                    getSlideDirection: function(e, t) {
                        return t.length || (t = this.slideState.current > e ? "prev" : "next", 0 === this.slideState.current && e === this.slideLength - 1 && (t = "prev"), this.slideState.current === this.slideLength - 1 && 0 === e && (t = "next")), t
                    },
                    onMouseWheel: function() {
                        this.isTimerEventing && this.resetProgress(1.4, !1)
                    },
                    onUpdateMouseWheel: function() {
                        if (this.canUpdateOnWheel) {
                            MOBILE && TABLET && (PROJECT.scrollRecognizeManager.speed = s.a.clamp(PROJECT.scrollRecognizeManager.speed, -.055, .055)), this.force += PROJECT.scrollRecognizeManager.speed, this.force %= this.slideLength, PROJECT.scrollRecognizeManager.speed *= .9375;
                            var e = Math.round(this.force);
                            this.difference = e - this.force;
                            var t;
                            t = this.isTransition ? .05 : .025, this.force += this.difference * t, Math.abs(e - this.force) < 75e-5 && (this.force = e)
                        }
                    },
                    onUpdateDashArray: function() {
                        r.a.clearTween(this.tweenArc), this.tweenArc = i.to(this, .1, {
                            dashOffset: this.toggleWrapperSizePI - this.toggleWrapperSizePI * this.progress * this.slideLengthRatio
                        })
                    },
                    onUpdateToggle: function() {
                        this.toggleRadian = this.progress * this.slideLengthRatio * 360 * T, this.togglePos = {
                            x: Math.sin(this.toggleRadian) * this.pieSize,
                            y: -Math.cos(this.toggleRadian) * this.pieSize
                        }, r.a.clearTween(this.tweenToggle), this.tweenToggle = i.to(this.toggle, .1, {
                            force3D: !0,
                            x: .5 * this.togglePos.x,
                            y: .5 * this.togglePos.y
                        })
                    },
                    onUpdateRoll: function() {
                        this.rollY = -this.currentProgress * this.rollElementHeight, this.rollNumberY = -this.currentProgress * this.rollNumberElementHeight, this.rollOpacityRatio = Math.max(0, 1 - 4 * this.currentProgress), this.rollOpacityNextRatio = Math.max(0, this.currentProgress)
                    },
                    onUpdateStage: function(e) {
                        this.canUpdate && (this.current = (Math.floor(-this.force % this.slideLength) + this.slideLength) % this.slideLength, this.canDrawFront = this.progress !== this.current, this.isMouseWheeling = this.progress !== this.current, this.setSlideState(this.slideNumState, this.current), this.setSlideState(this.slideState, this.current), PROJECT.glManager.setTexture(this.slideNumState), this.progress = (-this.force % this.slideLength + this.slideLength) % this.slideLength, this.currentProgress = this.progress - this.slideNumState.current, this.onUpdateDashArray(), this.onUpdateToggle(), this.onUpdateRoll(), this.onUpdateGLValue(), this.onUpdateMouseWheel(e), this.onUpdateMouseMove(e))
                    },
                    onUpdateGLValue: function() {
                        PROJECT.glManager.backRawShaderMesh.uniforms.uNextMaskXRatio.value = this.calcMaskRatio(-this.currentProgress), PROJECT.glManager.frontRawShaderMesh.uniforms.uNextScaleRatio.value = this.calcScaleRatio(this.currentProgress), PROJECT.glManager.frontRawShaderMesh.uniforms.uCurrentScaleRatio.value = this.calcScaleRatio(1 - this.currentProgress), PROJECT.glManager.backRawShaderMesh.uniforms.uNextScaleRatio.value = this.calcScaleRatio(this.currentProgress), PROJECT.glManager.backRawShaderMesh.uniforms.uCurrentScaleRatio.value = this.calcScaleRatio(1 - this.currentProgress), MOBILE || TABLET || (PROJECT.glManager.frontRawShaderMesh.uniforms.uNoiseNextRatio.value = .02 * (1 - Math.abs(2 * (this.currentProgress - .5)))), PROJECT.glManager.frontRawShaderMesh.uniforms.uUvCurrentTranslateRatio.value = .18 * this.currentProgress, PROJECT.glManager.frontRawShaderMesh.uniforms.uUvNextTranslateRatio.value = this.calcTranslateRatio(.18, this.currentProgress, -1), PROJECT.glManager.backRawShaderMesh.uniforms.uUvCurrentTranslateRatio.value = .12 * this.currentProgress, PROJECT.glManager.backRawShaderMesh.uniforms.uUvNextTranslateRatio.value = this.calcTranslateRatio(.12, this.currentProgress, -1), PROJECT.glManager.frontNextPie.arcEndPointValue = m * Math.max(0, this.currentProgress) + w, PROJECT.glManager.frontRawShaderMesh.uniforms.uNextPieMapRatio.value = Math.max(0, this.currentProgress), PROJECT.glManager.frontRawShaderMesh.uniforms.uNextPieEdgeRatio.value = this.currentProgress
                    },
                    onTransitionSlide: function(t) {
                        var n = this,
                            a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return new e(function(e) {
                            n.slideForce = Math.round(n.force) - t, (a && Math.abs(n.force) > n.slideLength || Math.abs(n.force) > n.slideLength - 1) && (n.slideForce %= n.slideLength), r.a.clearTween(n.tweenSlide), n.slideForceRatio = 1 - Math.abs(n.force - n.slideForce), n.tweenSlide = i.to(n, 1.4 - 1.4 * n.slideForceRatio * .5, {
                                ease: p.inOut,
                                force: n.slideForce,
                                onComplete: e
                            }), u.a.wait(1500).then(e)
                        })
                    },
                    onClickController: function(e) {
                        var t = this;
                        arguments.length > 1 && void 0 !== arguments[1] && arguments[1], this.canClick && this.postTask(this.onTransitionSlide.bind(this, e), function() {
                            t.isClickEventing = !0
                        }, function() {
                            t.isClickEventing = !1
                        })
                    },
                    postTask: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                        this.slideTask.length < this.taskMaxLength ? this.slideTask.push(e) : this.slideTask.push[this.slideTask.length - 1] = e, this.isSliding || this.startTask(t, n)
                    },
                    startTask: function(e, t) {
                        var n = this;
                        this.isSliding = !0, e(), this.slideTask[0]().then(function() {
                            n.isSliding = !1, t(), n.slideTask.shift(), n.slideTask.length && n.startTask(e, t)
                        })
                    },
                    onMouseDown: function(e) {
                        e.preventDefault(), this.canDrag && (PROJECT.mousePointer && PROJECT.mousePointer.hidePointer(), this.isMouseDowning = !0, this.isMouseDownEventing = !0, this.zoomRotationBackGround(), this.onMouseMove(e, .3))
                    },
                    onMouseUp: function(e) {
                        var t = this;
                        e.preventDefault(), this.isMouseDowning && (PROJECT.mousePointer && PROJECT.mousePointer.showPointer(), this.isMouseDowning = !1, this.zoomRotationBackGround(!1, !1, 1.2), setTimeout(function() {
                            t.postTask(t.onTransitionSlide.bind(t, 0, !0), function() {
                                t.isMouseDownEventing = !0
                            }, function() {
                                PROJECT.mouseSpringManager.canUpdate = !0, t.isMouseDownEventing = !1
                            })
                        }, 0))
                    },
                    onMouseMove: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        e.preventDefault(), this.canUpdateMouseMove = !0, this.mouseNow = this.getMousePos(e), this.mouseMoveDuration = t, this.isMouseDowning && (PROJECT.mouseSpringManager.canUpdate = !1, this.isMouseDownEventing = !0)
                    },
                    onUpdateMouseMove: function() {
                        this.canUpdateMouseMove && (Math.abs(this.mousePos.x - this.mouseNow.x) < .001 && Math.abs(this.mousePos.y - this.mouseNow.y) < .001 && (this.canUpdateMouseMove = !1), this.mousePos.x = s.a.followUp(this.mousePos.x, this.mouseNow.x, .085), this.mousePos.y = s.a.followUp(this.mousePos.y, this.mouseNow.y, .085), this.radian = Math.atan2(this.mousePos.y, this.mousePos.x), this.radian < w && (this.radian = Math.PI + (1 - Math.abs(this.radian) * v) * Math.PI), this.isMouseDowning && (r.a.clearTween(this.tweenMouseMove), 0 === this.force ? this.mouseNow.x < 0 ? this.tweenMouseMove = i.to(this, this.mouseMoveDuration || 0, {
                            force: this.slideLength - (this.radian * y + .25) * this.slideLength
                        }) : this.tweenMouseMove = i.to(this, this.mouseMoveDuration || 0, {
                            force: -(this.radian * y + .25) * this.slideLength
                        }) : this.force < 0 ? Math.sign(this.force) === Math.sign(this.mouseNow.x) && (Math.abs(this.progress) < 1 || Math.abs(this.progress) > this.slideLength - 2) ? this.tweenMouseMove = i.to(this, this.mouseMoveDuration || 0, {
                            force: this.slideLength - (this.radian * y + .25) * this.slideLength
                        }) : this.tweenMouseMove = i.to(this, this.mouseMoveDuration || 0, {
                            force: -(this.radian * y + .25) * this.slideLength
                        }) : Math.sign(this.force) === Math.sign(this.mouseNow.x) && (Math.abs(this.progress) < 1 || Math.abs(this.progress) > this.slideLength - 2) ? this.tweenMouseMove = i.to(this, this.mouseMoveDuration || 0, {
                            force: -(this.radian * y + .25) * this.slideLength
                        }) : this.tweenMouseMove = i.to(this, this.mouseMoveDuration || 0, {
                            force: this.slideLength - (this.radian * y + .25) * this.slideLength
                        })))
                    },
                    runProgress: function() {
                        var e = this;
                        this.isAutoPlay && this.canAutoPlay && this.timer && (this.tweenTimer && (this.tweenTimer.pause(), r.a.clearTween(this.tweenTimer)), this.tweenTimer = i.to(this, 15, {
                            ease: p.linear,
                            timerValue: 1,
                            onUpdate: function() {
                                e.timer.style.transform = "translate3d(0,0,0) scaleX(" + e.timerValue + ")"
                            },
                            onComplete: function() {
                                e.postTask(e.onTransitionSlide.bind(e, 1), function() {
                                    e.isTimerEventing = !0, e.resetProgress()
                                }, function() {
                                    e.isTimerEventing = !1
                                })
                            }
                        }))
                    },
                    resetProgress: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1.4,
                            t = this,
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                        this.timer && (this.tweenTimer && (this.tweenTimer.pause(), r.a.clearTween(this.tweenTimer)), this.tweenTimer = i.to(this, e, {
                            ease: p.inOutQuart,
                            timerValue: 0,
                            onUpdate: function() {
                                t.timer.style.transform = "translate3d(0,0,1px) scaleX(" + t.timerValue + ")"
                            },
                            onComplete: function() {
                                a(), n && t.runProgress()
                            }
                        }))
                    },
                    stopProgress: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                        this.resetProgress(1.4, !1, e)
                    },
                    zoomRotationBackGround: function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            t = this,
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9,
                            o = 1,
                            r = 0;
                        n && (r = .05), e || (o = 0), i.set(PROJECT.glManager.backRawShaderMesh.uniforms.uUseUvSin, {
                            value: o
                        }), i.to(this, a, {
                            zoomInRotationValue: o,
                            ease: p.outExpo,
                            onUpdate: function() {
                                setTimeout(function() {
                                    PROJECT.glManager.backRawShaderMesh.uniforms.uRotationRatio.value = -.45 * t.zoomInRotationValue
                                }, r), PROJECT.glManager.frontRawShaderMesh.uniforms.uRotationRatio.value = -.45 * t.zoomInRotationValue, PROJECT.glManager.backRawShaderMesh.uniforms.uDragScaleRatio.value = 1 - (1 - 1.4) * t.zoomInRotationValue, PROJECT.glManager.frontRawShaderMesh.uniforms.uBlackOutRatio.value = .6 * t.zoomInRotationValue, PROJECT.glManager.backRawShaderMesh.uniforms.uBlackOutRatio.value = .6 * t.zoomInRotationValue, PROJECT.glManager.backRawShaderMesh.uniforms.uUseNoise.value = 1 - t.zoomInRotationValue
                            }
                        })
                    },
                    zoomRotationBackGround2: function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            t = this,
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9,
                            o = 1,
                            r = 0;
                        n && (r = .05), e || (o = 0), i.set(PROJECT.glManager.backRawShaderMesh.uniforms.uUseUvSin, {
                            value: o
                        }), i.to(this, a, {
                            zoomInRotationValue: o,
                            ease: p.outExpo,
                            onUpdate: function() {
                                setTimeout(function() {
                                    PROJECT.glManager.backRawShaderMesh.uniforms.uRotationRatio.value = -.45 * t.zoomInRotationValue
                                }, r), PROJECT.glManager.frontRawShaderMesh.uniforms.uRotationRatio.value = -.45 * t.zoomInRotationValue, PROJECT.glManager.backRawShaderMesh.uniforms.uDragScaleRatio.value = 1 - (1 - 1.4) * t.zoomInRotationValue, PROJECT.glManager.frontRawShaderMesh.uniforms.uBlackOutRatio.value = .6 * t.zoomInRotationValue, PROJECT.glManager.backRawShaderMesh.uniforms.uBlackOutRatio.value = .6 * t.zoomInRotationValue
                            }
                        })
                    },
                    zeroPadding: function(e) {
                        return r.a.zeroPadding(e, 2)
                    },
                    onResize: function() {
                        var e = this;
                        this.$nextTick(function() {
                            e.windowInnerWidth = window.innerWidth, e.windowInnerHeight = window.innerHeight, e.windowInnerWidthRatio = 1 / e.windowInnerWidth, e.windowInnerHeightRatio = 1 / e.windowInnerHeight, e.contentHeightRatio = 1 / (document.querySelector(".js-smooth-scroll-wrapper").scrollHeight - e.windowInnerHeight), e.rollElementHeight = Math.round(.03 * e.windowInnerHeight), e.rollNumberElementHeight = Math.round(.03 * e.windowInnerHeight * .2), e.windowInnerHeight / e.windowInnerWidth < .6875 ? (e.titleFontSize = PROJECT.isMobileSize ? 1.4 : Math.max(1, Math.round(.027 * e.windowInnerHeight) / 10), e.pieSize = .7 * window.innerHeight, PROJECT.glManager.frontRawShaderMesh.uniforms.uAspectRatio.value = 1, e.toggleWrapperSize = e.pieSize, e.toggleWrapperSizePI = e.toggleWrapperSize * Math.PI, e.dashArray = e.toggleWrapperSizePI, e.isInitCompleted || (e.dashOffset = e.toggleWrapperSizePI), e.toggleSize = Math.round(.3 * e.windowInnerHeight), e.toggleInnerSize = Math.round(.08 * e.windowInnerHeight), e.togglePointSize = Math.round(.01 * e.windowInnerHeight), e.lineWidth = e.calcLineWidth(1)) : (e.titleFontSize = PROJECT.isMobileSize ? 1.4 : Math.max(1, Math.round(.6875 * e.windowInnerWidth * .027) / 10), e.pieSize = .6875 * e.windowInnerWidth * .7 * e.pieSizeRatio, PROJECT.glManager.frontRawShaderMesh.uniforms.uAspectRatio.value = 0, e.toggleWrapperSize = e.pieSize, e.toggleWrapperSizePI = e.toggleWrapperSize * Math.PI, e.dashArray = e.toggleWrapperSizePI, e.isInitCompleted || (e.dashOffset = e.toggleWrapperSizePI), e.toggleSize = Math.round(.6875 * e.windowInnerWidth * .3), e.toggleInnerSize = Math.round(.6875 * e.windowInnerWidth * .08), e.togglePointSize = Math.round(.6875 * e.windowInnerWidth * .01), e.lineWidth = e.calcLineWidth(-1)), e.isCompletedDashArrayBackAnimation && (e.dashArrayBack = e.toggleWrapperSizePI)
                        })
                    },
                    hideCanvasDom: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            o = document.querySelectorAll(".js-line"),
                            r = document.querySelectorAll(".js-control__text"),
                            s = document.querySelector(".js-opening-roll");
                        this.isShowPieBack = n, t && (i.set(this, {
                            dashOffset: this.toggleWrapperSizePI
                        }), a && (this.dashArrayBack = 0)), i.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionScale, {
                            value: .15
                        }), i.set(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionScale, {
                            value: .15
                        }), i.set(o, {
                            force3D: !0,
                            scaleX: 0
                        }), i.set(r, {
                            force3D: !0,
                            y: 10,
                            opacity: 0
                        }), e && i.set(s, {
                            force3D: !0,
                            y: 20,
                            opacity: 0
                        })
                    },
                    showCanvasDom: function() {
                        var t = this,
                            n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            o = document.querySelectorAll(".js-line"),
                            r = document.querySelectorAll(".js-control__text"),
                            s = document.querySelector(".js-opening-roll");
                        return new e(function(e) {
                            a && (t.dashArrayBack = 0, i.to(t, 1.3, {
                                ease: p.inOutQuart,
                                delay: .2,
                                dashArrayBack: t.toggleWrapperSizePI
                            })), i.to(t, 1.3, {
                                delay: .3,
                                ease: p.inOutQuart,
                                dashOffset: t.toggleWrapperSizePI - t.toggleWrapperSizePI * t.slideNumState.current * t.slideLengthRatio,
                                onComplete: function() {
                                    setTimeout(function() {
                                        e()
                                    }, 150)
                                }
                            }), i.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionScale, 1, {
                                ease: p.inOutQuad,
                                value: 0
                            }), i.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionScale, 1, {
                                ease: p.inOutQuad,
                                value: 0
                            }), i.to(o, .7, {
                                delay: .9,
                                ease: p.inOut2,
                                force3D: !0,
                                scaleX: 1
                            }), i.to(r, .7, {
                                force3D: !0,
                                delay: 1,
                                ease: p.inOut2,
                                y: 0,
                                opacity: 1
                            }), n && i.to(s, .7, {
                                delay: .3,
                                ease: p.inOut2,
                                force3D: !0,
                                y: 0,
                                opacity: 1
                            })
                        })
                    },
                    calcLineWidth: function(e) {
                        var t = this.windowInnerWidth,
                            n = this.windowInnerHeight;
                        return e > 0 ? .5 * (t - n) - .0625 * t - this.controllerWidth + .075 * n : .5 * (t - .6875 * t) - .0625 * t - this.controllerWidth + .6875 * t * .075
                    },
                    calcMaskRatio: function(e) {
                        return 1 + e
                    },
                    calcScaleRatio: function(e) {
                        return {
                            x: .75 + .25 * e,
                            y: .75 + .25 * e
                        }
                    },
                    calcTranslateRatio: function(e, t, n) {
                        return e * n + t * e
                    },
                    setSlideState: function(e, t) {
                        e.prev = this.validateSlideState(t - 1), e.current = this.validateSlideState(t), e.next = this.validateSlideState(t + 1)
                    },
                    validateSlideState: function(e) {
                        return 0 > e ? e + this.slideLength : e > this.slideLength - 1 ? e - this.slideLength : e
                    },
                    completeDashArray: function() {
                        this.dashArray = this.toggleWrapperSizePI * this.progress * this.slideLengthRatio
                    }
                },
                mounted: function() {
                    var t = this;
                    PROJECT.stage = this, PROJECT.onMouseEnterWorksList = function(e) {
                        t.isOnEnterWorksList = !0, t.mouseEnterWorksListCurrent = e, t.isAnimatingOnEnterWorksList || (t.isAnimatingOnEnterWorksList = !0, PROJECT.glManager.backRawShaderMesh.uniforms.uTextureHoverImage.value = PROJECT.glManager.imageTexture[e], i.to(PROJECT.glManager.backRawShaderMesh.uniforms.uHoverWorksListRatio, .6, {
                            ease: p.linear,
                            value: 0,
                            onComplete: function() {
                                PROJECT.glManager.backRawShaderMesh.uniforms.uTextureCurrentImage.value = PROJECT.glManager.imageTexture[e], PROJECT.glManager.backRawShaderMesh.uniforms.uHoverWorksListRatio.value = 1, t.isAnimatingOnEnterWorksList = !1, t.isOnEnterWorksList && e !== t.isOnEnterWorksList && PROJECT.onMouseEnterWorksList(t.mouseEnterWorksListCurrent)
                            }
                        }))
                    }, PROJECT.onMouseLeaveWorksList = function() {
                        t.isOnEnterWorksList = !1
                    }, PROJECT.frontCircleBackAnimation = function() {
                        var n = parseFloat(t.dashArray);
                        return new e(function(e) {
                            i.to(t, 1.3, {
                                delay: .2,
                                ease: p.inOutQuart,
                                dashArray: 0,
                                onComplete: function() {
                                    t.dashArray = n, e()
                                }
                            })
                        })
                    }, PROJECT.othersPageStartUp = function(e) {
                        var n = new u.a;
                        n.add(function(e) {
                            document.body.classList.remove("is-ready"), document.querySelector(".p-header__languageList__item.line").style.display = "block", PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleSize.value = 0, PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleSize.value = 0, PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value = 1, PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value = 1, PROJECT.glManager.frontRawShaderMesh.scaleIn(PROJECT.glManager.frontRawShaderMesh.uniforms.uCurrentScaleRatio.value, 0, 0), PROJECT.glManager.backRawShaderMesh.scaleIn(PROJECT.glManager.backRawShaderMesh.uniforms.uCurrentScaleRatio.value, 0, 0), PROJECT.glManager.frontPie.drawArc(0, 0), PROJECT.glManager.backPie.drawArc(0, 0), t.dashArrayBack = t.toggleWrapperSizePI, setTimeout(function() {
                                i.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteMaxWhiteRatio, {
                                    value: PROJECT.glManager.vignetteGuiCtrl.white_ratio
                                }), i.set(PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteMaxWhiteRatio, {
                                    value: PROJECT.glManager.vignetteGuiCtrl.white_ratio
                                }), i.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleSize, {
                                    value: PROJECT.glManager.vignetteGuiCtrl.circle_size
                                }), i.set(PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleSize, {
                                    value: PROJECT.glManager.vignetteGuiCtrl.circle_size
                                }), t.isCompletedOnOpeningAnimation = !0, t.canUpdate = !0, t.isCompletedDashArrayBackAnimation = !0, u.a.wait(200).then(e)
                            }, 100)
                        }), n.done(function() {
                            t.stop(), PROJECT.mousePositionManager.setNodeListOthersChildren(), PROJECT.mousePositionManager.setEventTargetStateChange(PROJECT.mousePositionManager.$targetToPointerStateChangeOthersChildren), PROJECT.springManagerInit(), t.setKeyTypeEvent(), setTimeout(function() {
                                e(), PROJECT.glManager.canUpdate = !1
                            }, 100)
                        })
                    }, PROJECT.topPageStartUp = function(n) {
                        t.isShowRoll = !1, t.isShowPieBack = !0, PROJECT.smoothScrollManager.destroy(), PROJECT.addTransition(!0), PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleSize.value = 0, PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleSize.value = 0, PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value = 1, PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value = 1, t._dashArray = 0;
                        var a = document.querySelectorAll(".js-line"),
                            o = document.querySelectorAll(".js-control__text"),
                            r = document.querySelectorAll(".js-logo"),
                            s = document.querySelectorAll(".js-nav"),
                            l = document.querySelectorAll(".js-timer-wrap");
                        t.dashArrayBack = 0, i.set(o, {
                            opacity: 0,
                            force3D: !0,
                            y: 10
                        }), i.set(r, {
                            opacity: 0,
                            force3D: !0,
                            y: 10
                        }), i.set(s, {
                            opacity: 0,
                            force3D: !0,
                            y: 10
                        }), i.set(a, {
                            scaleX: 0,
                            force3D: !0
                        }), i.set(l, {
                            opacity: 0,
                            force3D: !0,
                            y: 10
                        }), e.all([PROJECT.glManager.frontRawShaderMesh.scaleIn(), PROJECT.glManager.backRawShaderMesh.scaleIn(), PROJECT.glManager.frontPie.drawArc(), PROJECT.glManager.backPie.drawArc()]).then(function() {
                            t.isShowRoll = !0, t.$nextTick(function() {
                                document.body.classList.remove("is-ready"), document.querySelector(".p-header__languageList__item.line").style.display = "block", t.isCompletedOnOpeningAnimation = !0;
                                var e = document.querySelector(".js-opening-roll");
                                i.set(e, {
                                    opacity: 0,
                                    force3D: !0,
                                    y: 15
                                }), t.vignetteTweenValue = 0, i.to(t, 1, {
                                    ease: p.linear,
                                    vignetteTweenValue: 1,
                                    onUpdate: function() {
                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value = 1 - t.vignetteTweenValue * (1 - PROJECT.glManager.vignetteGuiCtrl.white_ratio), PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value = 1 - t.vignetteTweenValue * (1 - PROJECT.glManager.vignetteGuiCtrl.white_ratio), PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleSize.value = t.vignetteTweenValue * PROJECT.glManager.vignetteGuiCtrl.circle_size, PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleSize.value = t.vignetteTweenValue * PROJECT.glManager.vignetteGuiCtrl.circle_size
                                    }
                                }), i.to(e, .7, {
                                    delay: .3,
                                    ease: p.inOut2,
                                    opacity: 1,
                                    y: 0,
                                    onComplete: function() {
                                        e.style.transform = "", e.style.opacity = ""
                                    }
                                }), i.to(t, 1.25, {
                                    delay: .3,
                                    ease: p.inOutQuart,
                                    _dashArray: 1,
                                    onUpdate: function() {
                                        t.dashArrayBack = t._dashArray * t.toggleWrapperSizePI
                                    },
                                    onComplete: function() {
                                        t.isCompletedDashArrayBackAnimation = !0, t.dashArrayBack = t._dashArray * t.toggleWrapperSizePI
                                    }
                                }), i.to(a, .7, {
                                    delay: 1.25,
                                    ease: p.inOut2,
                                    force3D: !0,
                                    scaleX: 1,
                                    onComplete: function() {
                                        for (var e = 0; e < this.target.length; e++) this.target[e].style.transform = ""
                                    }
                                }), i.to(o, .7, {
                                    force3D: !0,
                                    delay: 1.3,
                                    ease: p.inOut2,
                                    opacity: 1,
                                    y: 0,
                                    onComplete: function() {
                                        for (var e = 0; e < this.target.length; e++) this.target[e].style.transform = "", this.target[e].style.opacity = ""
                                    }
                                }), i.to(r, .7, {
                                    force3D: !0,
                                    delay: 1.4,
                                    ease: p.inOut2,
                                    opacity: 1,
                                    y: 0,
                                    onComplete: function() {
                                        for (var e = 0; e < this.target.length; e++) this.target[e].style.opacity = "", this.target[e].style.transform = ""
                                    }
                                }), i.to(l, .7, {
                                    force3D: !0,
                                    delay: 1.4,
                                    ease: p.inOut2,
                                    opacity: 1,
                                    y: 0,
                                    onComplete: function() {
                                        for (var e = 0; e < this.target.length; e++) this.target[e].style.opacity = "", this.target[e].style.transform = ""
                                    }
                                }), i.to(s, .7, {
                                    force3D: !0,
                                    delay: 1.4,
                                    ease: p.inOut2,
                                    opacity: 1,
                                    y: 0,
                                    onComplete: function() {
                                        t.vignetteTweenValue = 0;
                                        for (var e = 0; e < s.length; e++) s[e].style.transform = "", s[e].style.opacity = "";
                                        setTimeout(function() {
                                            PROJECT.scrollRecognizeManager && (PROJECT.scrollRecognizeManager.canPrevent = !0, PROJECT.scrollRecognizeManager.canWheel = !0), PROJECT.glManager.enableMouseMove(), PROJECT.addTransition(!1), PROJECT.mousePositionManager.setNodeListOthersChildren(), PROJECT.mousePositionManager.setEventTargetStateChange(PROJECT.mousePositionManager.$targetToPointerStateChangeOthersChildren), PROJECT.springManagerInit(), t.setKeyTypeEvent(), n()
                                        }, 200)
                                    }
                                })
                            })
                        })
                    }, PROJECT.notFoundPageStartUp = function(e) {
                        t.isShowPieBack = !0, PROJECT.smoothScrollManager.destroy(), PROJECT.addTransition(!0), PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleSize.value = 0, PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleSize.value = 0, PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value = 1, PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value = 1, PROJECT.glManager.frontRawShaderMesh.scaleIn(PROJECT.glManager.frontRawShaderMesh.uniforms.uCurrentScaleRatio.value, 0, 0), PROJECT.glManager.backRawShaderMesh.scaleIn(PROJECT.glManager.backRawShaderMesh.uniforms.uCurrentScaleRatio.value, 0, 0), i.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteMaxWhiteRatio, {
                            value: 1
                        }), i.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleSize, {
                            value: 0
                        }), MOBILE = !1, TABLET = !1, i.set(PROJECT.glManager.backRawShaderMesh.uniforms.uOpacity, {
                            value: 0
                        }), PROJECT.glManager.frontPie.drawArc(0, 0), PROJECT.glManager.backPie.drawArc(0, 0), document.body.classList.remove("is-ready"), t.dashArrayBack = t._dashArray * t.toggleWrapperSizePI, t.canUpdate = !0, t.isCompletedDashArrayBackAnimation = !0, t.vignetteTweenValue = 0, PROJECT.glManager._mousePos.x = .1, PROJECT.glManager._mousePos.y = .1, PROJECT.glManager._mouse.x = .1, PROJECT.glManager._mouse.y = .1, PROJECT.glManager.frontRawShaderMesh.uniforms.uMouse.value = {
                            x: .01,
                            y: .01
                        }, PROJECT.addTransition(!1), PROJECT.mousePositionManager.setNodeListOthersChildren(), PROJECT.mousePositionManager.setEventTargetStateChange(PROJECT.mousePositionManager.$targetToPointerStateChangeOthersChildren), e()
                    }, this.addLoaderFunction = function() {
                        return new e(function(e) {
                            o.a.load({
                                google: {
                                    families: ["Assistant:l3"]
                                },
                                active: function() {
                                    e()
                                },
                                inactive: function() {
                                    e()
                                },
                                timeout: 5e3
                            })
                        })
                    }
                }), PROJECT.resizeHandler.push(function(e, t, n, i) {
                PROJECT.glManager.onResize(e, t, n, i)
            }), PROJECT.glManager.setup().then(function() {
                PROJECT.glManager.addGui(), PROJECT.renderHandler.push(function(e) {
                    PROJECT.glManager.onRender(e)
                }), PROJECT.mousePositionHandler.push(function(e) {
                    PROJECT.glManager.onMouseMove(e)
                }), t.onResize(), PROJECT.onStartUp.done(), t.onResize(), PROJECT.resizeHandler.push(function() {
                    t.onResize()
                }), setTimeout(function() {
                    PROJECT.glManager.setDrawFlag("both", !1)
                }, 200)
            })
        },
        watch: {
            isCompletedOnOpeningAnimation: function(e) {
                e && this.onInitIndex()
            },
            canDrawFront: function(e) {
                e ? PROJECT.glManager.setDrawFlag("next", !0) : PROJECT.glManager.setDrawFlag("next", !1)
            },
            isMouseWheeling: function(e) {
                var t = this;
                e ? this.$nextTick(function() {
                    document.body.classList.add("is-slide__on-wheel"), t.resetProgress(1.4, !1)
                }) : this.$nextTick(function() {
                    document.body.classList.remove("is-slide__on-wheel"), t.resetProgress(1.4 * t.timerValue, !0)
                })
            },
            isMouseDowning: function(e) {
                e ? this.$nextTick(function() {
                    PROJECT.mouseSpringManager.isDraged = !0, document.body.classList.add("is-slide__on-drag")
                }) : this.$nextTick(function() {
                    PROJECT.mouseSpringManager.isDraged = !1, document.body.classList.remove("is-slide__on-drag")
                })
            },
            isMouseDownEventing: function(e) {
                var t = this;
                e ? this.$nextTick(function() {
                    PROJECT.scrollRecognizeManager.canWheel = !1, t.resetProgress(1.4, !1), t.canUpdateOnWheel = !1
                }) : this.$nextTick(function() {
                    PROJECT.scrollRecognizeManager.canWheel = !0, t.resetProgress(1.4 * t.timerValue, !0), t.canUpdateOnWheel = !0
                })
            },
            isClickEventing: function(e) {
                var t = this;
                e ? this.$nextTick(function() {
                    document.body.classList.add("is-slide__on-click"), t.resetProgress(1.4, !1), PROJECT.scrollRecognizeManager.canWheel = !1
                }) : this.$nextTick(function() {
                    document.body.classList.remove("is-slide__on-click"), t.resetProgress(0, !0), PROJECT.scrollRecognizeManager.canWheel = !0
                })
            },
            isTimerEventing: function(e) {
                e ? document.body.classList.add("is-slide__on-timer") : document.body.classList.remove("is-slide__on-timer")
            }
        }
    }).call(this, n(4), n(5))
}, function(e, t, n) {
"use strict";
(function(e, i) {
    var a = n(1),
        o = n(3);
    window.PROJECT = window.PROJECT || {}, t.a = {
        data: function() {
            return {
                ease: new o.a,
                isTaskPlaying: !1,
                task: [],
                prevNum: 0,
                currentNumDummy: 1,
                currentNum: 1,
                nextNum: 2,
                now: 1,
                tweenCountBefore: null,
                tweenCountCurrent: null,
                tweenCountNext: null,
                tweenLine: null,
                parent1: "",
                parent2: "",
                parent3: "",
                target1: "",
                target2: "",
                target3: "",
                line: "",
                listLength: 0,
                indicatorOffset: [],
                isShow: !1,
                canUpdate: !1
            }
        },
        methods: {
            zeroPadding: function(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                return a.a.zeroPadding(e, t, n)
            },
            onUpdate: function() {
                if (this.isShow && this.canUpdate)
                    for (var e = this.listLength; e--;)
                        if (this.indicatorOffset[e] <= PROJECT.scrollManager.st) {
                            this.currentNumDummy = e + 1, this.now !== this.currentNumDummy && (this.now - this.currentNumDummy > 0 ? this.setTask(this.countDown.bind(this, parseInt(this.currentNumDummy))) : this.setTask(this.countUp.bind(this, parseInt(this.currentNumDummy)))), this.now = this.currentNumDummy;
                            break
                        }
            },
            setTask: function(e) {
                this.task.length < 2 ? this.task.push(e) : this.task[this.task.length - 1] = e, this.isTaskPlaying || this.startTask()
            },
            startTask: function() {
                var e = this;
                this.isTaskPlaying = !0, this.task[0]().then(function() {
                    setTimeout(function() {
                        e.isTaskPlaying = !1, e.task.shift(), e.task.length && e.startTask()
                    }, 0)
                })
            },
            countDown: function(t) {
                var n = this;
                return new e(function(e) {
                    n.prevNum = t, n.nextNum = t, n.$nextTick(function() {
                        n.setSelector(), n.resetTween(n.tweenLine), n.tweenCountBefore = i.staggerTo(n.target1, .5, {
                            force3D: !0,
                            ease: n.ease.inOutQuart,
                            y: "100%",
                            onComplete: function() {}
                        }, .12), n.tweenCountCurrent = i.staggerTo(n.target2, .5, {
                            force3D: !0,
                            ease: n.ease.inOutQuart,
                            y: "100%",
                            onComplete: function() {}
                        }, .12, function() {
                            n.currentNum = t, setTimeout(function() {
                                i.set(n.target1, {
                                    force3D: !0,
                                    y: "0%"
                                }), i.set(n.target2, {
                                    force3D: !0,
                                    y: "0%"
                                }), e()
                            }, 0)
                        }), n.tweenLine = i.to(n.line, .5, {
                            force3D: !0,
                            ease: n.ease.linear,
                            scaleX: t / n.listLength
                        })
                    })
                })
            },
            countUp: function(t) {
                var n = this;
                return new e(function(e) {
                    n.prevNum = t, n.nextNum = t, n.$nextTick(function() {
                        n.setSelector(), n.resetTween(n.tweenLine), n.tweenCountCurrent = i.staggerTo(n.target2, .5, {
                            force3D: !0,
                            ease: n.ease.inOutQuart,
                            y: "-100%",
                            onComplete: function() {}
                        }, .12, function() {
                            n.currentNum = t, setTimeout(function() {
                                i.set(n.target3, {
                                    force3D: !0,
                                    y: "0%"
                                }), i.set(n.target2, {
                                    force3D: !0,
                                    y: "0%"
                                }), e()
                            }, 0)
                        }), n.tweenCountNext = i.staggerTo(n.target3, .5, {
                            force3D: !0,
                            ease: n.ease.inOutQuart,
                            y: "-100%"
                        }, .12), n.tweenLine = i.to(n.line, .5, {
                            force3D: !0,
                            ease: n.ease.linear,
                            scaleX: t / n.listLength
                        })
                    })
                })
            },
            setSelector: function() {
                this.parent1 = document.getElementById("indicatorTarget").children[0], this.parent2 = document.getElementById("indicatorTarget").children[1], this.parent3 = document.getElementById("indicatorTarget").children[2], this.target1 = this.parent1.children, this.target2 = this.parent2.children, this.target3 = this.parent3.children, this.line = document.querySelector(".js-indicator__line").children[0]
            },
            resetTween: function(e) {
                e && (e.kill(), e = null)
            },
            init: function() {
                this.currentNum = 1, this.currentNumDummy = 1, this.now = 1, this.task = [], this.isTaskPlaying = !1, this.setSelector(), this.resetTween(this.tweenLine), i.set(this.target1, {
                    force3D: !0,
                    y: "0%"
                }), i.set(this.target2, {
                    force3D: !0,
                    y: "0%"
                }), i.set(this.target3, {
                    force3D: !0,
                    y: "0%"
                }), i.set(this.line, {
                    force3D: !0,
                    scaleX: 1 / this.listLength
                })
            }
        },
        created: function() {},
        mounted: function() {
            var e = this;
            window.PROJECT.indicator = this, PROJECT.renderHandler.push(function(t) {
                e.onUpdate(t)
            })
        }
    }
}).call(this, n(4), n(5))
}, function(e, t, n) {
"use strict";
(function(e, i) {
    var a = n(1),
        o = n(3),
        r = n(2);
    window.PROJECT = window.PROJECT || {};
    var s = new o.a;
    t.a = {
        name: "MousePointer",
        data: function() {
            return {
                canShow: !0,
                canUpdate: !0,
                canMouseMove: !0,
                canResize: !0,
                canClick: !1,
                canShowBar: !1,
                isPointerOnWindow: !1,
                isOnStateChangeTarget: !1,
                isClicked: !1,
                mouseEnterType: null,
                stageSize: {
                    width: 0,
                    height: 0
                },
                pointerSize: {
                    width: 100,
                    height: 100
                },
                calcBasePosition: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                mousePosition: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                calcPointerPosition: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                pointerPosition: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                pointerPositionBar: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                mouseDist: {
                    x: 0,
                    y: 0
                },
                amount: {
                    x: 0,
                    y: 0
                },
                deg: 0,
                scaleRatioX: 0,
                scaleRatioY: 0,
                scaleRatio: 0,
                scale: 0,
                pointerStyle: {
                    opacity: 0,
                    pointerInnerScale: 0
                },
                bg2Length: 0,
                chasePointerInnerNode: null,
                tween: {
                    opacity: null,
                    pointerInnerScale: null
                }
            }
        },
        methods: {
            init: function() {},
            addStyleOpacity: function() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .45;
                return new e(function(e) {
                    a.a.clearTween(t.tween.opacity), t.tween.opacity = i.to(t.pointerStyle, o, {
                        ease: s.linear,
                        opacity: n,
                        onComplete: e
                    })
                })
            },
            addStyleScale: function() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .15,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .45;
                return new e(function(e) {
                    a.a.clearTween(t.tween.pointerInnerScale), t.tween.pointerInnerScale = i.to(t.pointerStyle, o, {
                        ease: s.outBounce1,
                        pointerInnerScale: n,
                        onComplete: e
                    })
                })
            },
            onUpdate: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0], (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.canUpdate) && (PROJECT.mousePositionManager.isOnStateChangeTargetInner ? (this.mouseDist.x = PROJECT.mousePositionManager.hoverTargetInnerPos.x - .5 * this.pointerSize.width, this.mouseDist.y = PROJECT.mousePositionManager.hoverTargetInnerPos.y - .5 * this.pointerSize.height, this.amount.x = r.a.followUp(this.pointerPosition.x, this.mouseDist.x, .13125), this.amount.y = r.a.followUp(this.pointerPosition.y, this.mouseDist.y, .13125), this.pointerPosition.x = this.amount.x, this.pointerPosition.y = this.amount.y, this.pointerPositionBar.x = r.a.followUp(this.pointerPositionBar.x, this.mousePosition.x, .115625), this.pointerPositionBar.y = r.a.followUp(this.pointerPositionBar.y, this.mousePosition.y, .115625), Math.abs(this.pointerPosition.x - this.mousePosition.x) < .01 && Math.abs(this.pointerPosition.y - this.mousePosition.y) && (this.canUpdate = !1, this.pointerPosition.x = Math.round(this.pointerPosition.x), this.pointerPosition.y = Math.round(this.pointerPosition.y), this.pointerPositionBar.x = Math.round(this.pointerPositionBar.x), this.pointerPositionBar.y = Math.round(this.pointerPositionBar.y)), this.deg = .125 * r.a.digToRad(this.amount.x * this.amount.y) * 1.05, this.deg = 0, this.scale = 0) : (this.pointerPosition.x = r.a.followUp(this.pointerPosition.x, this.mousePosition.x, .125), this.pointerPosition.y = r.a.followUp(this.pointerPosition.y, this.mousePosition.y, .125), this.pointerPositionBar.x = r.a.followUp(this.pointerPositionBar.x, this.mousePosition.x, .1125), this.pointerPositionBar.y = r.a.followUp(this.pointerPositionBar.y, this.mousePosition.y, .1125), this.calcPointerPosition.x = r.a.followUp(this.calcPointerPosition.x, this.calcBasePosition.x, .125), this.calcPointerPosition.y = r.a.followUp(this.calcPointerPosition.y, this.calcBasePosition.y, .125), Math.abs(this.pointerPosition.x - this.mousePosition.x) < .01 && Math.abs(this.pointerPosition.y - this.mousePosition.y) && (this.canUpdate = !1, this.pointerPosition.x = Math.round(this.pointerPosition.x), this.pointerPosition.y = Math.round(this.pointerPosition.y), this.pointerPositionBar.x = Math.round(this.pointerPositionBar.x), this.pointerPositionBar.y = Math.round(this.pointerPositionBar.y), this.calcPointerPosition.x = Math.round(this.calcPointerPosition.x), this.calcPointerPosition.y = Math.round(this.calcPointerPosition.y)), this.deg = 180 * Math.atan2(this.calcBasePosition.y - this.calcPointerPosition.y, this.calcBasePosition.x - this.calcPointerPosition.x) / Math.PI, this.scaleRatioX = Math.max(Math.min(Math.floor(Math.abs(this.calcBasePosition.x - this.calcPointerPosition.x) / this.calcPointerPosition.x * 1e3) / 1e3, 1), 0), this.scaleRatioY = Math.max(Math.min(Math.floor(Math.abs(this.calcBasePosition.y - this.calcPointerPosition.y) / this.calcPointerPosition.y * 1e3) / 1e3, 1), 0), this.scaleRatio = this.scaleRatioX + .7 * this.scaleRatioY, this.scale = .7 * this.scaleRatio))
            },
            onMouseMove: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    x: 0,
                    y: 0
                };
                this.canMouseMove && (this.canUpdate = !0, this.calcBasePosition.x = e.x + .5 * this.pointerSize.width, this.calcBasePosition.y = e.y + .5 * this.pointerSize.width, this.mousePosition.x = e.x - .5 * this.pointerSize.width, this.mousePosition.y = e.y - .5 * this.pointerSize.height)
            },
            onResize: function(e, t) {
                this.canResize && (this.stageSize.width = e || document.body.clientWidth, this.stageSize.height = t || window.innerHeight)
            },
            onClick: function() {
                var t = this;
                return new e(function(e) {
                    if (!t.canClick) return e();
                    t.chasePointerInnerNode || (t.chasePointerInnerNode = document.querySelector(".js-chasePointer"));
                    for (var n = 0; n < 2; n++) t.chasePointerInnerNode.insertAdjacentHTML("afterbegin", '<div class="p-chasePointer__bg--02"></div>');
                    var a = document.querySelectorAll(".p-chasePointer__bg--02");
                    t.bg2Length = a.length;
                    for (var o = 0; o < 2; o++) i.to(a[o], 1.5, {
                        force3D: !0,
                        ease: s.out2,
                        scale: 1.3,
                        opacity: 0,
                        delay: .15 * o,
                        onComplete: function() {
                            var e = document.querySelectorAll(".p-chasePointer__bg--02");
                            t.bg2Length = e.length, t.bg2Length && t.chasePointerInnerNode.removeChild(e[t.bg2Length - 1])
                        }
                    })
                })
            },
            hidePointer: function() {
                var e = this;
                this.addStyleScale(0), this.addStyleOpacity(0).then(function() {
                    e.canClick = !1, e.canUpdate = !1, e.canShow = !1, e.canMouseMove = !1
                })
            },
            showPointer: function() {
                this.canShow = !0, this.canClick = !0, this.canMouseMove = !0, this.canUpdate = !0, this.addStyleOpacity(1), this.addStyleScale().then(function() {})
            }
        },
        mounted: function() {
            var e = this;
            PROJECT.mousePointer = this, window.addEventListener("click", this.onClick.bind(this), !1), this.canClick = !0, PROJECT.mousePositionHandler.push(function(t, n, i, a, o) {
                e.isPointerOnWindow = n, e.isOnStateChangeTarget = i, e.isClicked = o, e.mouseEnterType = a, e.onMouseMove(t)
            }), PROJECT.renderHandler.push(function(t) {
                e.onUpdate(t)
            }), PROJECT.resizeHandler.push(function(t, n, i) {
                e.onResize(n, i)
            }), a.a.triggerEvent(window, "resize")
        },
        watch: {
            isPointerOnWindow: function(e) {
                if (e) switch (this.addStyleOpacity(1), this.mouseEnterType) {
                    case "zoom":
                        this.canShowBar = !0, document.body.classList.add("is-pointer-zoom-ready"), this.isOnStateChangeTarget ? this.addStyleScale(.45) : this.addStyleScale();
                        break;
                    default:
                        this.canShowBar = !1, document.body.classList.remove("is-pointer-zoom-ready"), this.isOnStateChangeTarget ? this.addStyleScale(.4) : this.addStyleScale()
                } else this.addStyleOpacity(0), this.addStyleScale(0)
            },
            mouseEnterType: function(e) {
                switch (e) {
                    case "zoom":
                        this.canShowBar = !0, document.body.classList.add("is-pointer-zoom-ready"), this.isOnStateChangeTarget ? this.addStyleScale(.45) : this.addStyleScale();
                        break;
                    default:
                        this.canShowBar = !1, document.body.classList.remove("is-pointer-zoom-ready"), this.isOnStateChangeTarget ? this.addStyleScale(.4) : this.addStyleScale()
                }
            },
            isOnStateChangeTarget: function(e) {
                if (this.isPointerOnWindow)
                    if (e) switch (this.mouseEnterType) {
                        case "zoom":
                            this.addStyleScale(.45);
                            break;
                        default:
                            this.addStyleScale(.4)
                    } else this.addStyleScale()
            }
        }
    }
}).call(this, n(4), n(5))
}, , function(e, t, n) {
"use strict";
var i = n(19),
    a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    o = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.controllerManager = new i.a, this._fx = t
        }
        return a(e, [{
            key: "boot",
            value: function() {}
        }]), e
    }();
t.a = o
}, function(e, t, n) {
"use strict";
n.r(t);
var i = n(35),
    a = n(9),
    o = n(19),
    r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    s = function(e) {
        function t(e, n, i) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var a = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return a.router = n, a.useAjax = i, a
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.a), r(t, [{
            key: "getController",
            value: function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = {
                        id: null,
                        path: location.pathname,
                        notice_flag: !1,
                        secret_mode: !1,
                        useAjax: this.useAjax,
                        sort: 0,
                        parentId: null
                    }, i = location.pathname.split("/"), a = i.length - 1; a >= 0; a--)
                    if (i[a] in this.router) {
                        n.id = this.router[i[a]].id, n.textureId = this.router[i[a]].texture_id, n.parentId = this.router[i[a]].parent_id, n.sort = this.router[i[a]].sort, n.locationName = this.router[i[a]].name, n.notice_flag = 0 !== Number(this.router[i[a]].notice_flag), n.secret_mode = 0 !== Number(this.router[i[a]].secret_mode);
                        break
                    } var o;
                return o = null !== e && null !== this._VC[e] && void 0 !== this._VC[e] ? new this._VC[e](t, n) : null !== t && isSet(this._VC[t.getAttribute("data-use-controller")]) ? new(this._VC[t.getAttribute("data-use-controller")])(t, n) : null !== t && isSet(this._VC[t.getAttribute("id")]) ? new(this._VC[t.getAttribute("id")])(t, n) : new this._VC.default(t, n), Object.defineProperty(o, "info", {
                    value: n
                }), o
            }
        }]), t
    }(),
    l = function(e) {
        function t(e, n, i) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var a = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, i));
            return a.controllerManager = new s(n, e, i), a
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, a.a), t
    }(),
    u = n(37),
    c = n(0),
    h = n(1),
    d = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    g = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return d(e, [{
            key: "run",
            value: function(e, t, n, i, a, o) {
                return function() {
                    location.reload();
                    var i = document.body,
                        r = document.querySelector("#" + e),
                        s = n.querySelector("#" + t),
                        l = r.getAttribute("id"),
                        u = s.getAttribute("id"),
                        h = document.querySelector("#contents"),
                        d = "top" !== e && "top" === t || "top" === e && "top" === t ? "index" : "sub",
                        g = new c.a;
                    g.add(function(e) {
                        c.a.wait(10).then(e)
                    }), g.add(function(e) {
                        i.classList.remove("page-" + l), i.classList.add("page-" + u), h.appendChild(s), r.parentNode.removeChild(r), i.classList.remove("index"), i.classList.remove("sub"), i.classList.add(d), c.a.wait(10).then(e)
                    }), g.add(function(e) {
                        r && (a.add(t, s), a.use("prev").viewDidDisappear(), a.pop()), c.a.wait(10).then(e)
                    }), g.add(function(e) {
                        a.use("current").viewWillAppear(), c.a.wait(10).then(e)
                    }), g.done(function() {
                        o(null)
                    })
                }
            }
        }]), e
    }(),
    f = n(39),
    p = n(40),
    v = n(41),
    m = n(42),
    y = n(43),
    w = n(44),
    T = n(45),
    C = n(46),
    R = n(48),
    M = n(49),
    S = n(50),
    P = n(51),
    O = {
        "top --\x3e about": (new f.a).run,
        "top --\x3e works": (new p.a).run,
        "top --\x3e works-detail": (new R.a).run,
        "works-detail --\x3e top": (new M.a).run,
        "works-detail --\x3e about": (new S.a).run,
        "works-detail --\x3e works": (new P.a).run,
        "about --\x3e top": (new v.a).run,
        "about --\x3e works": (new y.a).run,
        "about --\x3e works-detail": (new m.a).run,
        "works --\x3e top": (new w.a).run,
        "works --\x3e about": (new T.a).run,
        "works --\x3e works-detail": (new C.a).run,
        "none --\x3e none": (new u.a).run,
        "* --\x3e *": (new g).run
    },
    E = n(8),
    k = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    b = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var a = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === a) {
            var o = Object.getPrototypeOf(t);
            return null === o ? void 0 : e(o, n, i)
        }
        if ("value" in a) return a.value;
        var r = a.get;
        return void 0 !== r ? r.call(i) : void 0
    },
    _ = function(e) {
        function t(e) {
            return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, E.a), k(t, [{
            key: "viewWillAppear",
            value: function() {
                b(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewWillAppear", this).call(this), PROJECT.worksMode = "top", this.startUpFunction = PROJECT.topPageStartUp
            }
        }, {
            key: "viewDidAppear",
            value: function() {
                b(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewDidAppear", this).call(this), PROJECT.stage.initProgress(), PROJECT.screenFix.fix()
            }
        }, {
            key: "viewWillDisappear",
            value: function() {
                b(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewWillDisappear", this).call(this), PROJECT.screenFix.clearFix()
            }
        }, {
            key: "viewDidDisappear",
            value: function() {
                b(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewDidDisappear", this).call(this)
            }
        }]), t
    }(),
    x = n(3),
    J = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    L = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var a = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === a) {
            var o = Object.getPrototypeOf(t);
            return null === o ? void 0 : e(o, n, i)
        }
        if ("value" in a) return a.value;
        var r = a.get;
        return void 0 !== r ? r.call(i) : void 0
    },
    I = function(e) {
        function t(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.ease = new x.a, n.$pageTransitionTrigger = e.querySelectorAll(".js-trigger--pageTransition"), n.pageTransitionTriggerLength = n.$pageTransitionTrigger.length, n._clickEvent = "click", n.$worksList = document.querySelectorAll(".js-hover__works-list"), n.isMouseEnter = !1, n.isMouseLeave = !1, n.mouseEnterCurrentNum = 0, n
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, E.a), J(t, [{
            key: "viewWillAppear",
            value: function() {
                L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewWillAppear", this).call(this), window.pageInitialized || (PROJECT.stage.isShowPieBack = !0), PROJECT.worksMode = "list", PROJECT.smoothScrollManager.run(), this._setPageTransitionEvent()
            }
        }, {
            key: "viewDidAppear",
            value: function() {
                L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewDidAppear", this).call(this), document.body.classList.add("is-stage-hide")
            }
        }, {
            key: "viewWillDisappear",
            value: function() {
                L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewWillDisappear", this).call(this), document.body.classList.remove("is-stage-hide")
            }
        }, {
            key: "viewDidDisappear",
            value: function() {
                L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewDidDisappear", this).call(this)
            }
        }, {
            key: "_setPageTransitionEvent",
            value: function() {
                var e = this;
                if (this.pageTransitionTriggerLength)
                    for (var n = function(n) {
                            e.$pageTransitionTrigger[n].addEventListener(e._clickEvent, function(e) {
                                t.pageTransition(e, n)
                            }, !1)
                        }, i = 0; i < this.pageTransitionTriggerLength; i++) n(i)
            }
        }, {
            key: "_setTexture",
            value: function() {}
        }], [{
            key: "pageTransition",
            value: function(e, t) {
                e.preventDefault(), e.currentTarget.classList.add("is-clicked"), document.body.classList.add("is-transition");
                var n = e.currentTarget.getAttribute("href") || "/";
                a.a.triggerPageTransition(n)
            }
        }]), t
    }(),
    D = n(77),
    z = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    A = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var a = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === a) {
            var o = Object.getPrototypeOf(t);
            return null === o ? void 0 : e(o, n, i)
        }
        if ("value" in a) return a.value;
        var r = a.get;
        return void 0 !== r ? r.call(i) : void 0
    },
    N = function(e) {
        function t(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.$sideContactInner = document.querySelector(".p-sideContact__inner"), n.$aboutClose = document.querySelector(".js-target__aboutClose"), n.$indicatorTarget = e.querySelectorAll(".js-target--indicator"), n.$targetSideFixPosition = e.querySelector(".js-target--sideFixPosition"), n.$targetSideFix = document.querySelector(".js-target--sideFix"), n.$aboutHoverTrigger = e.querySelector(".js-trigger--aboutHover"), n._eventEnter = "", n._eventLeave = "", n.isAnimatingContactHover = !1, n.isHoveringContactHover = !1, n.offsetSideFixPosition = 0, n.$transitionToWorksDetail = e.querySelectorAll(".js-target--transition__toWorksDetail"), n.stringTrimmer.targets = n.content.querySelectorAll(".js-target--split"), n.stringTrimmer.run(), n
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, E.a), z(t, [{
            key: "viewWillAppear",
            value: function() {
                var e = this;
                A(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewWillAppear", this).call(this), window.pageInitialized || (this.$sideContactInner.style.visibility = "visible", this.$sideContactInner.style.opacity = 1), MOBILE || TABLET ? (this._setIndicator = function() {}, this._setIndicatorTargetOffset = function() {}, this._onUpdateSideFixPos = function() {}) : this._setIndicator(), PROJECT.resizeHandler[20] = function(t) {
                    e._onResize(t)
                }, PROJECT.renderHandler[20] = function(t) {
                    e._onUpdate(t)
                }, PROJECT.smoothScrollManager.run(), MOBILE || TABLET || this._setSideFixPosition(), this._setHoverEvent(), this._setClickEventTransitionToWorksDetail()
            }
        }, {
            key: "viewDidAppear",
            value: function() {
                A(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewDidAppear", this).call(this), document.body.classList.add("is-stage-hide"), this._setSideFixPosition()
            }
        }, {
            key: "viewWillDisappear",
            value: function() {
                A(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewWillDisappear", this).call(this), document.body.classList.remove("is-stage-hide")
            }
        }, {
            key: "viewDidDisappear",
            value: function() {
                A(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewDidDisappear", this).call(this), PROJECT.renderHandler[20] = function() {}, PROJECT.resizeHandler[20] = function() {}, this.$aboutClose.setAttribute("href", "/"), this.$targetSideFix && (this.$targetSideFix.style.transform = "")
            }
        }, {
            key: "_onResize",
            value: function() {
                this._setIndicator(), this._setSideFixPosition()
            }
        }, {
            key: "_onUpdate",
            value: function() {
                this._setIndicatorTargetOffset(), this._onUpdateSideFixPos()
            }
        }, {
            key: "_setClickEventTransitionToWorksDetail",
            value: function() {
                for (var e = 0; e < this.$transitionToWorksDetail.length; e++) this.$transitionToWorksDetail[e].addEventListener("click", function(e) {
                    e.preventDefault();
                    var t = e.currentTarget.getAttribute("href") || "";
                    if (!t) return !1;
                    PROJECT.pageTransitionState.aboutToWorksDetail = 1, a.a.triggerPageTransition(t)
                })
            }
        }, {
            key: "_setIndicator",
            value: function() {
                PROJECT.indicator.listLength = this.$indicatorTarget.length, this._setIndicatorTargetOffset(), PROJECT.indicator.canUpdate = !0, PROJECT.indicator.isShow = !0
            }
        }, {
            key: "_setIndicatorTargetOffset",
            value: function() {
                for (var e = 0; e < PROJECT.indicator.listLength; e++) PROJECT.indicator.indicatorOffset[e] = h.a.getTargetOffsetTop(this.$indicatorTarget[e]) - PROJECT.resizeManager.height
            }
        }, {
            key: "_setSideFixPosition",
            value: function() {
                this.offsetSideFixPosition = h.a.getTargetOffsetTop(this.$targetSideFixPosition) - PROJECT.resizeManager.height - (95 - Math.min(100, .0625 * document.body.clientWidth)), this._onUpdateSideFixPos()
            }
        }, {
            key: "_onUpdateSideFixPos",
            value: function() {
                PROJECT.smoothScrollManager.now >= this.offsetSideFixPosition ? this.$targetSideFix.style.transform = "translate3d(0," + -(PROJECT.smoothScrollManager.now - this.offsetSideFixPosition) + "px,0)" : this.$targetSideFix.style.transform = ""
            }
        }, {
            key: "_setHoverEvent",
            value: function() {
                var e = this;
                this._eventEnter = function(t) {
                    t.preventDefault(), e._hoverOverEvent(t.currentTarget)
                }, this._eventLeave = function(t) {
                    t.preventDefault(), e._hoverOutEvent(t.currentTarget)
                }, this.$aboutHoverTrigger.addEventListener("mouseenter", this._eventEnter, !1), this.$aboutHoverTrigger.addEventListener("mouseleave", this._eventLeave, !1)
            }
        }, {
            key: "_hoverOverEvent",
            value: function(e) {
                this.isHoveringContactHover = !0, this.isAnimatingContactHover || this._startHoverOver(e)
            }
        }, {
            key: "_hoverOutEvent",
            value: function(e) {
                this.isHoveringContactHover = !1, this.isAnimatingContactHover || this._startHoverOut(e)
            }
        }, {
            key: "_startHoverOver",
            value: function(e) {
                var t = this,
                    n = Number(e.dataset.hoverInTime);
                this.isAnimatingContactHover = !0, e.classList.add("is-hover"), document.body.classList.add("is-contact-hover"), setTimeout(function() {
                    t._completeHoverOver(e)
                }, n)
            }
        }, {
            key: "_startHoverOut",
            value: function(e) {
                var t = this,
                    n = Number(e.dataset.hoverOutTime);
                this.isAnimatingContactHover = !0, e.classList.add("is-hover-out"), document.body.classList.add("is-contact-hover-out"), e.classList.remove("is-hover"), document.body.classList.remove("is-contact-hover"), setTimeout(function() {
                    t._completeHoverOut(e)
                }, n)
            }
        }, {
            key: "_completeHoverOver",
            value: function(e) {
                this.isAnimatingContactHover = !1, this.isHoveringContactHover || this._startHoverOut(e)
            }
        }, {
            key: "_completeHoverOut",
            value: function(e) {
                var t = this;
                this.isAnimatingContactHover = !1, e.classList.remove("is-hover-out"), document.body.classList.remove("is-contact-hover-out"), setTimeout(function() {
                    t.isHoveringContactHover && t._startHoverOver(e)
                }, 50)
            }
        }]), t
    }(),
    j = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    U = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var a = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === a) {
            var o = Object.getPrototypeOf(t);
            return null === o ? void 0 : e(o, n, i)
        }
        if ("value" in a) return a.value;
        var r = a.get;
        return void 0 !== r ? r.call(i) : void 0
    },
    W = function(e) {
        function t(e) {
            return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, E.a), j(t, [{
            key: "viewWillAppear",
            value: function() {
                U(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewWillAppear", this).call(this), this.startUpFunction = PROJECT.notFoundPageStartUp
            }
        }, {
            key: "viewDidAppear",
            value: function() {
                U(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewDidAppear", this).call(this), PROJECT.resizeHandler.push(function() {
                    document.querySelector(".p-notFound__title").querySelector("em").style.fontSize = .15 * window.innerHeight + "px", document.querySelector(".p-notFound__title").querySelector("span").style.fontSize = .016 * window.innerHeight + "px"
                })
            }
        }, {
            key: "viewWillDisappear",
            value: function() {
                U(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewWillDisappear", this).call(this)
            }
        }, {
            key: "viewDidDisappear",
            value: function() {
                U(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewDidDisappear", this).call(this)
            }
        }]), t
    }(),
    q = {
        default: E.a,
        top: _,
        works: I,
        "works-detail": D.a,
        about: N,
        "not-found": W
    },
    H = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    F = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this._wheelEvent = "onwheel" in document ? "wheel" : "mousewheel", this._keyDownEvent = "keydown", this._keyUpEvent = "keyup", this._toocuMoveEvent = "ontouchmove" in document ? "touchmove" : "click", this._preventKey = function(e) {
                var t = null;
                e.keyCode ? t = event.keyCode : e.which && (t = event.which), 38 !== t && 40 !== t || e.preventDefault()
            }, this._preventWheel = function(e) {
                e.cancelable && e.preventDefault()
            }
        }
        return H(e, [{
            key: "fix",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.querySelector("#wrapper");
                e.wrapperFix(t), this.addNoKeyDown(), this.addNoKeyUp(), this.addNoWheel()
            }
        }, {
            key: "clearFix",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.querySelector("#wrapper");
                e.wrapperClearFix(t), this.removeNoKeyDown(), this.removeNoKeyUp(), this.removeNoWheel()
            }
        }, {
            key: "addNoKeyDown",
            value: function() {
                window.addEventListener(this._keyDownEvent, this._preventKey, !1)
            }
        }, {
            key: "removeNoKeyDown",
            value: function() {
                window.removeEventListener(this._keyDownEvent, this._preventKey)
            }
        }, {
            key: "addNoKeyUp",
            value: function() {
                window.addEventListener(this._keyUpEvent, this._preventKey, !1)
            }
        }, {
            key: "removeNoKeyUp",
            value: function() {
                window.removeEventListener(this._keyUpEvent, this._preventKey)
            }
        }, {
            key: "addNoWheel",
            value: function() {
                window.addEventListener(this._wheelEvent, this._preventWheel, {
                    passive: !1
                }), IE || window.addEventListener(this._toocuMoveEvent, this._preventWheel, {
                    passive: !1
                })
            }
        }, {
            key: "removeNoWheel",
            value: function() {
                window.removeEventListener(this._wheelEvent, this._preventWheel), IE || window.removeEventListener(this._toocuMoveEvent, this._preventWheel, {
                    passive: !1
                })
            }
        }], [{
            key: "wrapperClearFix",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.querySelector("#wrapper");
                e && (e.style.position = null, e.style.top = null, e.style.right = null, e.style.width = null, e.style.height = null, e.style.marginTop = null, e.style.overflow = null)
            }
        }, {
            key: "wrapperFix",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.querySelector("#wrapper");
                e && (e.style.position = "fixed", e.style.top = "1px", e.style.right = 0, e.style.width = "100%", e.style.height = "100vh", e.style.marginTop = "-1px", e.style.overflow = "hidden")
            }
        }]), e
    }();
if (n(106), "serviceWorker" in navigator && window.addEventListener("load", function() {
        navigator.serviceWorker.register("/sw.js").then(function(e) {}).catch(function(e) {})
    }), Object(i.a)(window), window.PROJECT = window.PROJECT || {}, PROJECT.breakPoint = 768, PROJECT.isLegacyBrowser = !1, PROJECT.isMobileSize = PROJECT.breakPoint > document.body.clientWidth, PROJECT.onStartUp = PROJECT.onStartUp || new c.a, PROJECT.worksMode = null, PROJECT.currentUrl = "", PROJECT.currentWorksNum = 0, PROJECT.addTransition = function() {
        arguments.length > 0 && void 0 !== arguments[0] && !arguments[0] ? (document.querySelector("html").classList.remove("is-transition"), setTimeout(function() {
            document.querySelector("html").classList.contains("is-transition") || document.querySelector("html").classList.remove("is-waitLoad")
        }, 620)) : (document.querySelector("html").classList.add("is-transition"), document.querySelector("html").classList.add("is-waitLoad"))
    }, PROJECT.pageTransitionState = {
        topToWorksDetail: 0,
        aboutToWorksDetail: 0,
        worksDetailToTop: 0,
        worksDetailToWorks: 0,
        worksToWorksDetail: 0
    }, PROJECT.screenFix = new F, window.APP = new l(O, q, !0), APP.sendAnalytics = function(e) {
        gtag("config", "UA-135279002-1", {
            page_path: e
        })
    }, PROJECT.addTransition(!0), PROJECT.screenFix.fix(), PROJECT.initScreenHeight = window.innerHeight, window.addEventListener("resize", function() {
        PROJECT.isMobileSize ? document.body.clientWidth >= 768 && location.reload() : document.body.clientWidth < 768 && location.reload()
    }, !1), MOBILE || TABLET) {
    var B = !1;
    document.addEventListener("touchend", function(e) {
        B ? e.preventDefault() : (B = !0, setTimeout(function() {
            B = !1
        }, 500))
    }, !0);
    var $ = window.orientation;
    window.addEventListener("orientationchange", function() {
        90 === Math.abs($ - Math.abs(window.orientation)) && location.reload()
    }), MOBILE && 0 === $ && APP.boot(), TABLET && 90 === Math.abs($) && APP.boot()
} else APP.boot()
}, function(e, t, n) {
"use strict";
n.r(t);
var i = n(79),
    a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    o = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.tablet = !1, this.mobile = !1, this.android = !1, this.iphone = !1, this._init(), this._addDevice()
        }
        return a(e, [{
            key: "_init",
            value: function() {
                var e = window.navigator.userAgent.toLowerCase();
                this.tablet = -1 !== e.indexOf("windows") && -1 !== e.indexOf("touch") && -1 === e.indexOf("tablet pc") || -1 !== e.indexOf("ipad") || -1 !== e.indexOf("android") && -1 === e.indexOf("mobile") || -1 !== e.indexOf("firefox") && -1 !== e.indexOf("tablet") || -1 !== e.indexOf("kindle") || -1 !== e.indexOf("silk") || -1 !== e.indexOf("playbook"), this.mobile = -1 !== e.indexOf("windows") && -1 !== e.indexOf("phone") || -1 !== e.indexOf("iphone") || -1 !== e.indexOf("ipod") || -1 !== e.indexOf("android") && -1 !== e.indexOf("mobile") || -1 !== e.indexOf("firefox") && -1 !== e.indexOf("mobile") || -1 !== e.indexOf("blackberry"), this.android = -1 !== e.indexOf("android") && -1 !== e.indexOf("mobile"), this.iphone = -1 !== e.indexOf("iphone") || -1 !== e.indexOf("ipod")
            }
        }, {
            key: "_addDevice",
            value: function() {
                var e = document.querySelector("html");
                this.tablet ? e.setAttribute("class", "is-tablet") : this.mobile ? e.setAttribute("class", "is-mobile") : this.android ? e.setAttribute("class", "is-android") : this.iphone ? e.setAttribute("class", "is-iphone") : e.setAttribute("class", "is-others")
            }
        }, {
            key: "getBrowser",
            value: function() {
                var e = window.navigator.userAgent.toLowerCase(),
                    t = (window.navigator.appVersion.toLowerCase(), "unknown"),
                    n = null,
                    i = null,
                    a = window.navigator.userAgent.toLowerCase();
                return a.match(/(msie|MSIE)/) || a.match(/(T|t)rident/) || -1 !== a.indexOf("edge") ? (n = !0, a.match(/(msie|MSIE)/) || a.match(/(T|t)rident/) ? (i = a.match(/((msie|MSIE)\s|rv:)([\d\.]+)/)[3], i = parseInt(i)) : i = "edge") : n = !1, n ? t = "ie" + i : -1 !== e.indexOf("chrome") ? t = "chrome" : -1 !== e.indexOf("safari") ? t = "safari" : -1 !== e.indexOf("opera") ? t = "opera" : -1 !== e.indexOf("firefox") && (t = "firefox"), t
            }
        }, {
            key: "isSupported",
            value: function(e) {
                for (var t = this.getBrowser(), n = 0; n < e.length; n++)
                    if (e[n] === t) return !0;
                return !1
            }
        }, {
            key: "androidVersion",
            value: function() {
                var e = window.navigator.userAgent.toLowerCase();
                return e.indexOf("android") > 0 ? parseFloat(e.slice(e.indexOf("android") + 8)) : null
            }
        }, {
            key: "isMajor",
            value: function() {
                return !(-1 === window.navigator.userAgent.indexOf("DoCoMo") && -1 === window.navigator.userAgent.indexOf("KDDI") && -1 === window.navigator.userAgent.indexOf("Vodafone") && -1 === window.navigator.userAgent.indexOf("SoftBank"))
            }
        }, {
            key: "iphoneVersion",
            value: function() {
                var e = window.navigator.userAgent.toLowerCase(),
                    t = e.match(/iphone os ([\d]+)_([\d]+)_([\d]+)/);
                return t || (t = e.match(/iphone os ([\d]+)_([\d]+)/)), t
            }
        }, {
            key: "isAndroidBrowser",
            value: function() {
                var e = window.navigator.userAgent.toLowerCase();
                return /android/.test(e) && /linux; u;/.test(e) && !/chrome/.test(e)
            }
        }, {
            key: "viewPort",
            value: function(e, t) {
                this[e] && document.querySelector('meta[name="viewport"]').setAttribute("content", "width=" + t + ",user-scalable=no")
            }
        }]), e
    }();
setTimeout(console.log.bind(console, "%cCreated By https://baqemono.jp", "color: #fff;background-color: rgb(76, 76, 76);border:6px solid rgb(76, 76, 76);")), n(104), window.ua = new o, window.MOBILE = ua.mobile, window.TABLET = ua.tablet, window.OTHER = !MOBILE && !TABLET, window.uaName = ua.getBrowser(), window.IE = uaName.match(/ie/), document.querySelector("html").classList.add("is-" + uaName), IE && document.querySelector("html").classList.add("is-ie"), window.pageInitialized = !1, window.notification = new i.a, window.WHEEL_RATIO = "firefox" === ua.getBrowser() ? 100 : 1
}]);