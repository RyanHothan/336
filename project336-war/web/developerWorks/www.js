/* 20150212 1516 */
/*
 Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
 Available via Academic Free License >= 2.1 OR the modified BSD license.
 see: http://dojotoolkit.org/license for details
 */

/*
 This is an optimized version of Dojo, built for deployment and not for
 development. To get sources and documentation, please visit:
 
 http://dojotoolkit.org
 */

(function () {
    eval("var djConfig = {locale:\"en-us\",ibmForceConfig:\"\",isDebug:false,parseOnLoad:false,baseUrl:\"./\",modulePaths:{\"ibmweb\":\"//1.www.s81c.com/common/js/dojo/1.6/ibmweb\",\"ext\":\"//1.www.s81c.com/common/js/dojo/1.6/ext\"},useXDomain:true,xdWaitSeconds:15,xdDojoPath:\"//1.www.s81c.com/common/js/dojo/1.6\"};");
    var _1 = null;
    if ((_1 || (typeof djConfig != "undefined" && djConfig.scopeMap)) && (typeof window != "undefined")) {
        var _2 = "", _3 = "", _4 = "", _5 = {}, _6 = {};
        _1 = _1 || djConfig.scopeMap;
        for (var i = 0; i < _1.length; i++) {
            var _7 = _1[i];
            _2 += "var " + _7[0] + " = {}; " + _7[1] + " = " + _7[0] + ";" + _7[1] + "._scopeName = '" + _7[1] + "';";
            _3 += (i == 0 ? "" : ",") + _7[0];
            _4 += (i == 0 ? "" : ",") + _7[1];
            _5[_7[0]] = _7[1];
            _6[_7[1]] = _7[0];
        }
        eval(_2 + "dojo._scopeArgs = [" + _4 + "];");
        dojo._scopePrefixArgs = _3;
        dojo._scopePrefix = "(function(" + _3 + "){";
        dojo._scopeSuffix = "})(" + _4 + ")";
        dojo._scopeMap = _5;
        dojo._scopeMapRev = _6;
    }
    (function () {
        if (typeof this["loadFirebugConsole"] == "function") {
            this["loadFirebugConsole"]();
        } else {
            this.console = this.console || {};
            var cn = ["assert", "count", "debug", "dir", "dirxml", "error", "group", "groupEnd", "info", "profile", "profileEnd", "time", "timeEnd", "trace", "warn", "log"];
            var i = 0, tn;
            while ((tn = cn[i++])) {
                if (!console[tn]) {
                    (function () {
                        var _8 = tn + "";
                        console[_8] = ("log" in console) ? function () {
                            var a = Array.apply({}, arguments);
                            a.unshift(_8 + ":");
                            console["log"](a.join(" "));
                        } : function () {
                        };
                        console[_8]._fake = true;
                    })();
                }
            }
        }
        if (typeof dojo == "undefined") {
            dojo = {_scopeName: "dojo", _scopePrefix: "", _scopePrefixArgs: "", _scopeSuffix: "", _scopeMap: {}, _scopeMapRev: {}};
        }
        var d = dojo;
        if (typeof dijit == "undefined") {
            dijit = {_scopeName: "dijit"};
        }
        if (typeof dojox == "undefined") {
            dojox = {_scopeName: "dojox"};
        }
        if (!d._scopeArgs) {
            d._scopeArgs = [dojo, dijit, dojox];
        }
        d.global = this;
        d.config = {isDebug: false, debugAtAllCosts: false};
        var _9 = typeof djConfig != "undefined" ? djConfig : typeof dojoConfig != "undefined" ? dojoConfig : null;
        if (_9) {
            for (var c in _9) {
                d.config[c] = _9[c];
            }
        }
        dojo.locale = d.config.locale;
        var _a = "$Rev: 23843 $".match(/\d+/);
        dojo.version = {major: 1, minor: 6, patch: 0, flag: "-ibm", revision: _a ? +_a[0] : NaN, toString: function () {
                with (d.version) {
                    return major + "." + minor + "." + patch + flag + " (" + revision + ")";
                }
            }};
        if (typeof OpenAjax != "undefined") {
            OpenAjax.hub.registerLibrary(dojo._scopeName, "http://dojotoolkit.org", d.version.toString());
        }
        var _b, _c, _d = {};
        for (var i in {toString: 1}) {
            _b = [];
            break;
        }
        dojo._extraNames = _b = _b || ["hasOwnProperty", "valueOf", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "constructor"];
        _c = _b.length;
        dojo._mixin = function (_e, _f) {
            var _10, s, i;
            for (_10 in _f) {
                s = _f[_10];
                if (!(_10 in _e) || (_e[_10] !== s && (!(_10 in _d) || _d[_10] !== s))) {
                    _e[_10] = s;
                }
            }
            if (_c && _f) {
                for (i = 0; i < _c; ++i) {
                    _10 = _b[i];
                    s = _f[_10];
                    if (!(_10 in _e) || (_e[_10] !== s && (!(_10 in _d) || _d[_10] !== s))) {
                        _e[_10] = s;
                    }
                }
            }
            return _e;
        };
        dojo.mixin = function (obj, _11) {
            if (!obj) {
                obj = {};
            }
            for (var i = 1, l = arguments.length; i < l; i++) {
                d._mixin(obj, arguments[i]);
            }
            return obj;
        };
        dojo._getProp = function (_12, _13, _14) {
            var obj = _14 || d.global;
            for (var i = 0, p; obj && (p = _12[i]); i++) {
                if (i == 0 && d._scopeMap[p]) {
                    p = d._scopeMap[p];
                }
                obj = (p in obj ? obj[p] : (_13 ? obj[p] = {} : undefined));
            }
            return obj;
        };
        dojo.setObject = function (_15, _16, _17) {
            var _18 = _15.split("."), p = _18.pop(), obj = d._getProp(_18, true, _17);
            return obj && p ? (obj[p] = _16) : undefined;
        };
        dojo.getObject = function (_19, _1a, _1b) {
            return d._getProp(_19.split("."), _1a, _1b);
        };
        dojo.exists = function (_1c, obj) {
            return d.getObject(_1c, false, obj) !== undefined;
        };
        dojo["eval"] = function (_1d) {
            return d.global.eval ? d.global.eval(_1d) : eval(_1d);
        };
        d.deprecated = d.experimental = function () {
        };
    })();
    (function () {
        var d = dojo, _1e;
        d.mixin(d, {_loadedModules: {}, _inFlightCount: 0, _hasResource: {}, _modulePrefixes: {dojo: {name: "dojo", value: "."}, doh: {name: "doh", value: "../util/doh"}, tests: {name: "tests", value: "tests"}}, _moduleHasPrefix: function (_1f) {
                var mp = d._modulePrefixes;
                return !!(mp[_1f] && mp[_1f].value);
            }, _getModulePrefix: function (_20) {
                var mp = d._modulePrefixes;
                if (d._moduleHasPrefix(_20)) {
                    return mp[_20].value;
                }
                return _20;
            }, _loadedUrls: [], _postLoad: false, _loaders: [], _unloaders: [], _loadNotifying: false});
        dojo._loadUriAndCheck = function (uri, _21, cb) {
            var ok = false;
            try {
                ok = d._loadUri(uri, cb);
            } catch (e) {
            }
            return !!(ok && d._loadedModules[_21]);
        };
        dojo.loaded = function () {
            d._loadNotifying = true;
            d._postLoad = true;
            var mll = d._loaders;
            d._loaders = [];
            for (var x = 0; x < mll.length; x++) {
                mll[x]();
            }
            d._loadNotifying = false;
            if (d._postLoad && d._inFlightCount == 0 && mll.length) {
                d._callLoaded();
            }
        };
        dojo.unloaded = function () {
            var mll = d._unloaders;
            while (mll.length) {
                (mll.pop())();
            }
        };
        d._onto = function (arr, obj, fn) {
            if (!fn) {
                arr.push(obj);
            } else {
                if (fn) {
                    var _22 = (typeof fn == "string") ? obj[fn] : fn;
                    arr.push(function () {
                        _22.call(obj);
                    });
                }
            }
        };
        dojo.ready = dojo.addOnLoad = function (obj, _23) {
            d._onto(d._loaders, obj, _23);
            if (d._postLoad && d._inFlightCount == 0 && !d._loadNotifying) {
                d._callLoaded();
            }
        };
        var dca = d.config.addOnLoad;
        if (dca) {
            d.addOnLoad[(dca instanceof Array ? "apply" : "call")](d, dca);
        }
        dojo._modulesLoaded = function () {
            if (d._postLoad) {
                return;
            }
            if (d._inFlightCount > 0) {
                return;
            }
            d._callLoaded();
        };
        dojo._callLoaded = function () {
            if (typeof setTimeout == "object" || (d.config.useXDomain && d.isOpera)) {
                setTimeout(d.isAIR ? function () {
                    d.loaded();
                } : d._scopeName + ".loaded();", 0);
            } else {
                d.loaded();
            }
        };
        dojo._getModuleSymbols = function (_24) {
            var _25 = _24.split(".");
            for (var i = _25.length; i > 0; i--) {
                var _26 = _25.slice(0, i).join(".");
                if (i == 1 && !d._moduleHasPrefix(_26)) {
                    _25[0] = "../" + _25[0];
                } else {
                    var _27 = d._getModulePrefix(_26);
                    if (_27 != _26) {
                        _25.splice(0, i, _27);
                        break;
                    }
                }
            }
            return _25;
        };
        dojo._global_omit_module_check = false;
        dojo.loadInit = function (_28) {
            _28();
        };
        dojo._loadModule = dojo.require = function (_29, _2a) {
            _2a = d._global_omit_module_check || _2a;
            var _2b = d._loadedModules[_29];
            if (_2b) {
                return _2b;
            }
            var _2c = d._getModuleSymbols(_29).join("/") + ".js";
            var _2d = !_2a ? _29 : null;
            var ok = d._loadPath(_2c, _2d);
            if (!ok && !_2a) {
                throw new Error("Could not load '" + _29 + "'; last tried '" + _2c + "'");
            }
            if (!_2a && !d._isXDomain) {
                _2b = d._loadedModules[_29];
                if (!_2b) {
                    throw new Error("symbol '" + _29 + "' is not defined after loading '" + _2c + "'");
                }
            }
            return _2b;
        };
        dojo.provide = function (_2e) {
            _2e = _2e + "";
            return (d._loadedModules[_2e] = d.getObject(_2e, true));
        };
        dojo.platformRequire = function (_2f) {
            var _30 = _2f.common || [];
            var _31 = _30.concat(_2f[d._name] || _2f["default"] || []);
            for (var x = 0; x < _31.length; x++) {
                var _32 = _31[x];
                if (_32.constructor == Array) {
                    d._loadModule.apply(d, _32);
                } else {
                    d._loadModule(_32);
                }
            }
        };
        dojo.requireIf = function (_33, _34) {
            if (_33 === true) {
                var _35 = [];
                for (var i = 1; i < arguments.length; i++) {
                    _35.push(arguments[i]);
                }
                d.require.apply(d, _35);
            }
        };
        dojo.requireAfterIf = d.requireIf;
        dojo.registerModulePath = function (_36, _37) {
            d._modulePrefixes[_36] = {name: _36, value: _37};
        };
        if (typeof dojo.config["useXDomain"] == "undefined") {
            dojo.config.useXDomain = true;
        }
        dojo.registerModulePath("dojo", "//1.www.s81c.com/common/js/dojo/1.6/dojo");
        dojo.registerModulePath("dijit", "//1.www.s81c.com/common/js/dojo/1.6/dijit");
        dojo.registerModulePath("dojox", "//1.www.s81c.com/common/js/dojo/1.6/dojox");
        dojo.requireLocalization = function (_38, _39, _3a, _3b) {
            d.require("dojo.i18n");
            d.i18n._requireLocalization.apply(d.hostenv, arguments);
        };
        var ore = new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"), ire = new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");
        dojo._Url = function () {
            var n = null, _3c = arguments, uri = [_3c[0]];
            for (var i = 1; i < _3c.length; i++) {
                if (!_3c[i]) {
                    continue;
                }
                var _3d = new d._Url(_3c[i] + ""), _3e = new d._Url(uri[0] + "");
                if (_3d.path == "" && !_3d.scheme && !_3d.authority && !_3d.query) {
                    if (_3d.fragment != n) {
                        _3e.fragment = _3d.fragment;
                    }
                    _3d = _3e;
                } else {
                    if (!_3d.scheme) {
                        _3d.scheme = _3e.scheme;
                        if (!_3d.authority) {
                            _3d.authority = _3e.authority;
                            if (_3d.path.charAt(0) != "/") {
                                var _3f = _3e.path.substring(0, _3e.path.lastIndexOf("/") + 1) + _3d.path;
                                var _40 = _3f.split("/");
                                for (var j = 0; j < _40.length; j++) {
                                    if (_40[j] == ".") {
                                        if (j == _40.length - 1) {
                                            _40[j] = "";
                                        } else {
                                            _40.splice(j, 1);
                                            j--;
                                        }
                                    } else {
                                        if (j > 0 && !(j == 1 && _40[0] == "") && _40[j] == ".." && _40[j - 1] != "..") {
                                            if (j == (_40.length - 1)) {
                                                _40.splice(j, 1);
                                                _40[j - 1] = "";
                                            } else {
                                                _40.splice(j - 1, 2);
                                                j -= 2;
                                            }
                                        }
                                    }
                                }
                                _3d.path = _40.join("/");
                            }
                        }
                    }
                }
                uri = [];
                if (_3d.scheme) {
                    uri.push(_3d.scheme, ":");
                }
                if (_3d.authority) {
                    uri.push("//", _3d.authority);
                }
                uri.push(_3d.path);
                if (_3d.query) {
                    uri.push("?", _3d.query);
                }
                if (_3d.fragment) {
                    uri.push("#", _3d.fragment);
                }
            }
            this.uri = uri.join("");
            var r = this.uri.match(ore);
            this.scheme = r[2] || (r[1] ? "" : n);
            this.authority = r[4] || (r[3] ? "" : n);
            this.path = r[5];
            this.query = r[7] || (r[6] ? "" : n);
            this.fragment = r[9] || (r[8] ? "" : n);
            if (this.authority != n) {
                r = this.authority.match(ire);
                this.user = r[3] || n;
                this.password = r[4] || n;
                this.host = r[6] || r[7];
                this.port = r[9] || n;
            }
        };
        dojo._Url.prototype.toString = function () {
            return this.uri;
        };
        dojo.moduleUrl = function (_41, url) {
            var loc = d._getModuleSymbols(_41).join("/");
            if (!loc) {
                return null;
            }
            if (loc.lastIndexOf("/") != loc.length - 1) {
                loc += "/";
            }
            var _42 = loc.indexOf(":");
            if (loc.charAt(0) != "/" && (_42 == -1 || _42 > loc.indexOf("/"))) {
                loc = d.baseUrl + loc;
            }
            return new d._Url(loc, url);
        };
    })();
    dojo.provide("dojo._base._loader.loader_xd");
    dojo._xdReset = function () {
        dojo._isXDomain = dojo.config.useXDomain || false;
        dojo._xdClearInterval();
        dojo._xdInFlight = {};
        dojo._xdOrderedReqs = [];
        dojo._xdDepMap = {};
        dojo._xdContents = [];
        dojo._xdDefList = [];
    };
    dojo._xdClearInterval = function () {
        if (dojo._xdTimer) {
            clearInterval(dojo._xdTimer);
            dojo._xdTimer = 0;
        }
    };
    dojo._xdReset();
    dojo._xdCreateResource = function (_43, _44, _45) {
        var _46 = _43.replace(/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg, "");
        var _47 = [];
        var _48 = /dojo.(require|requireIf|provide|requireAfterIf|platformRequire|requireLocalization)\s*\(([\w\W]*?)\)/mg;
        var _49;
        while ((_49 = _48.exec(_46)) != null) {
            if (_49[1] == "requireLocalization") {
                eval(_49[0]);
            } else {
                _47.push("\"" + _49[1] + "\", " + _49[2]);
            }
        }
        var _4a = [];
        _4a.push(dojo._scopeName + "._xdResourceLoaded(function(" + dojo._scopePrefixArgs + "){\n");
        var _4b = dojo._xdExtractLoadInits(_43);
        if (_4b) {
            _43 = _4b[0];
            for (var i = 1; i < _4b.length; i++) {
                _4a.push(_4b[i] + ";\n");
            }
        }
        _4a.push("return {");
        if (_47.length > 0) {
            _4a.push("depends: [");
            for (i = 0; i < _47.length; i++) {
                if (i > 0) {
                    _4a.push(",\n");
                }
                _4a.push("[" + _47[i] + "]");
            }
            _4a.push("],");
        }
        _4a.push("\ndefineResource: function(" + dojo._scopePrefixArgs + "){");
        if (!dojo.config["debugAtAllCosts"] || _44 == "dojo._base._loader.loader_debug") {
            _4a.push(_43);
        }
        _4a.push("\n}, resourceName: '" + _44 + "', resourcePath: '" + _45 + "'};});");
        return _4a.join("");
    };
    dojo._xdExtractLoadInits = function (_4c) {
        var _4d = /dojo.loadInit\s*\(/g;
        _4d.lastIndex = 0;
        var _4e = /[\(\)]/g;
        _4e.lastIndex = 0;
        var _4f = [];
        var _50;
        while ((_50 = _4d.exec(_4c))) {
            _4e.lastIndex = _4d.lastIndex;
            var _51 = 1;
            var _52;
            while ((_52 = _4e.exec(_4c))) {
                if (_52[0] == ")") {
                    _51 -= 1;
                } else {
                    _51 += 1;
                }
                if (_51 == 0) {
                    break;
                }
            }
            if (_51 != 0) {
                throw "unmatched paren around character " + _4e.lastIndex + " in: " + _4c;
            }
            var _53 = _4d.lastIndex - _50[0].length;
            _4f.push(_4c.substring(_53, _4e.lastIndex));
            var _54 = _4e.lastIndex - _53;
            _4c = _4c.substring(0, _53) + _4c.substring(_4e.lastIndex, _4c.length);
            _4d.lastIndex = _4e.lastIndex - _54;
            _4d.lastIndex = _4e.lastIndex;
        }
        if (_4f.length > 0) {
            _4f.unshift(_4c);
        }
        return (_4f.length ? _4f : null);
    };
    dojo._xdIsXDomainPath = function (_55) {
        var _56 = _55.indexOf(":");
        var _57 = _55.indexOf("/");
        if (_56 > 0 && _56 < _57 || _55.indexOf("//") === 0) {
            return true;
        } else {
            var url = dojo.baseUrl;
            _56 = url.indexOf(":");
            _57 = url.indexOf("/");
            if (url.indexOf("//") === 0 || (_56 > 0 && _56 < _57 && (!location.host || url.indexOf("http://" + location.host) != 0))) {
                return true;
            }
        }
        return false;
    };
    dojo._loadPath = function (_58, _59, cb) {
        var _5a = dojo._xdIsXDomainPath(_58);
        dojo._isXDomain |= _5a;
        var uri = ((_58.charAt(0) == "/" || _58.match(/^\w+:/)) ? "" : dojo.baseUrl) + _58;
        try {
            return ((!_59 || dojo._isXDomain) ? dojo._loadUri(uri, cb, _5a, _59) : dojo._loadUriAndCheck(uri, _59, cb));
        } catch (e) {
            return false;
        }
    };
    dojo._xdCharSet = "utf-8";
    dojo._loadUri = function (uri, cb, _5b, _5c) {
        if (dojo._loadedUrls[uri]) {
            return 1;
        }
        if (dojo._isXDomain && _5c && _5c != "dojo.i18n") {
            dojo._xdOrderedReqs.push(_5c);
            if (_5b || uri.indexOf("/nls/") == -1) {
                dojo._xdInFlight[_5c] = true;
                dojo._inFlightCount++;
            }
            if (!dojo._xdTimer) {
                if (dojo.isAIR) {
                    dojo._xdTimer = setInterval(function () {
                        dojo._xdWatchInFlight();
                    }, 100);
                } else {
                    dojo._xdTimer = setInterval(dojo._scopeName + "._xdWatchInFlight();", 100);
                }
            }
            dojo._xdStartTime = (new Date()).getTime();
        }
        if (_5b) {
            var _5d = uri.lastIndexOf(".");
            if (_5d <= 0) {
                _5d = uri.length - 1;
            }
            var _5e = uri.substring(0, _5d) + ".xd";
            if (_5d != uri.length - 1) {
                _5e += uri.substring(_5d, uri.length);
            }
            if (dojo.isAIR) {
                _5e = _5e.replace("app:/", "/");
            }
            var _5f = document.createElement("script");
            _5f.type = "text/javascript";
            if (dojo._xdCharSet) {
                _5f.charset = dojo._xdCharSet;
            }
            _5f.src = _5e;
            if (!dojo.headElement) {
                dojo._headElement = document.getElementsByTagName("head")[0];
                if (!dojo._headElement) {
                    dojo._headElement = document.getElementsByTagName("html")[0];
                }
            }
            dojo._headElement.appendChild(_5f);
        } else {
            var _60 = dojo._getText(uri, null, true);
            if (_60 == null) {
                return 0;
            }
            if (dojo._isXDomain && uri.indexOf("/nls/") == -1 && _5c != "dojo.i18n") {
                var res = dojo._xdCreateResource(_60, _5c, uri);
                dojo.eval(res);
            } else {
                if (cb) {
                    _60 = "(" + _60 + ")";
                } else {
                    _60 = dojo._scopePrefix + _60 + dojo._scopeSuffix;
                }
                if (!dojo.isIE) {
                    _60 += "\r\n//@ sourceURL=" + uri;
                }
                var _61 = dojo["eval"](_60);
                if (cb) {
                    cb(_61);
                }
            }
        }
        dojo._loadedUrls[uri] = true;
        dojo._loadedUrls.push(uri);
        return true;
    };
    dojo._xdResourceLoaded = function (res) {
        res = res.apply(dojo.global, dojo._scopeArgs);
        var _62 = res.depends;
        var _63 = null;
        var _64 = null;
        var _65 = [];
        if (_62 && _62.length > 0) {
            var dep = null;
            var _66 = 0;
            var _67 = false;
            for (var i = 0; i < _62.length; i++) {
                dep = _62[i];
                if (dep[0] == "provide") {
                    _65.push(dep[1]);
                } else {
                    if (!_63) {
                        _63 = [];
                    }
                    if (!_64) {
                        _64 = [];
                    }
                    var _68 = dojo._xdUnpackDependency(dep);
                    if (_68.requires) {
                        _63 = _63.concat(_68.requires);
                    }
                    if (_68.requiresAfter) {
                        _64 = _64.concat(_68.requiresAfter);
                    }
                }
                var _69 = dep[0];
                var _6a = _69.split(".");
                if (_6a.length == 2) {
                    dojo[_6a[0]][_6a[1]].apply(dojo[_6a[0]], dep.slice(1));
                } else {
                    dojo[_69].apply(dojo, dep.slice(1));
                }
            }
            if (_65.length == 1 && _65[0] == "dojo._base._loader.loader_debug") {
                res.defineResource(dojo);
            } else {
                var _6b = dojo._xdContents.push({content: res.defineResource, resourceName: res["resourceName"], resourcePath: res["resourcePath"], isDefined: false}) - 1;
                for (i = 0; i < _65.length; i++) {
                    dojo._xdDepMap[_65[i]] = {requires: _63, requiresAfter: _64, contentIndex: _6b};
                }
            }
            for (i = 0; i < _65.length; i++) {
                dojo._xdInFlight[_65[i]] = false;
            }
        }
    };
    dojo._xdLoadFlattenedBundle = function (_6c, _6d, _6e, _6f) {
        _6e = _6e || "root";
        var _70 = dojo.i18n.normalizeLocale(_6e).replace("-", "_");
        var _71 = [_6c, "nls", _6d].join(".");
        var _72 = dojo["provide"](_71);
        _72[_70] = _6f;
        var _73 = [_6c, _70, _6d].join(".");
        var _74 = dojo._xdBundleMap[_73];
        if (_74) {
            for (var _75 in _74) {
                _72[_75] = _6f;
            }
        }
    };
    dojo._xdInitExtraLocales = function () {
        var _76 = dojo.config.extraLocale;
        if (_76) {
            if (!_76 instanceof Array) {
                _76 = [_76];
            }
            dojo._xdReqLoc = dojo.xdRequireLocalization;
            dojo.xdRequireLocalization = function (m, b, _77, _78) {
                dojo._xdReqLoc(m, b, _77, _78);
                if (_77) {
                    return;
                }
                for (var i = 0; i < _76.length; i++) {
                    dojo._xdReqLoc(m, b, _76[i], _78);
                }
            };
        }
    };
    dojo._xdBundleMap = {};
    dojo.xdRequireLocalization = function (_79, _7a, _7b, _7c) {
        if (dojo._xdInitExtraLocales) {
            dojo._xdInitExtraLocales();
            dojo._xdInitExtraLocales = null;
            dojo.xdRequireLocalization.apply(dojo, arguments);
            return;
        }
        var _7d = _7c.split(",");
        var _7e = dojo.i18n.normalizeLocale(_7b);
        var _7f = "";
        for (var i = 0; i < _7d.length; i++) {
            if (_7e.indexOf(_7d[i]) == 0) {
                if (_7d[i].length > _7f.length) {
                    _7f = _7d[i];
                }
            }
        }
        var _80 = _7f.replace("-", "_");
        var _81 = dojo.getObject([_79, "nls", _7a].join("."));
        if (!_81 || !_81[_80]) {
            var _82 = [_79, (_80 || "root"), _7a].join(".");
            var _83 = dojo._xdBundleMap[_82];
            if (!_83) {
                _83 = dojo._xdBundleMap[_82] = {};
            }
            _83[_7e.replace("-", "_")] = true;
            dojo.require(_79 + ".nls" + (_7f ? "." + _7f : "") + "." + _7a);
        }
    };
    dojo._xdRealRequireLocalization = dojo.requireLocalization;
    dojo.requireLocalization = function (_84, _85, _86, _87) {
        var _88 = dojo.moduleUrl(_84).toString();
        if (dojo._xdIsXDomainPath(_88)) {
            return dojo.xdRequireLocalization.apply(dojo, arguments);
        } else {
            return dojo._xdRealRequireLocalization.apply(dojo, arguments);
        }
    };
    dojo._xdUnpackDependency = function (dep) {
        var _89 = null;
        var _8a = null;
        switch (dep[0]) {
            case "requireIf":
            case "requireAfterIf":
                if (dep[1] === true) {
                    _89 = [{name: dep[2], content: null}];
                }
                break;
            case "platformRequire":
                var _8b = dep[1];
                var _8c = _8b["common"] || [];
                _89 = (_8b[dojo.hostenv.name_]) ? _8c.concat(_8b[dojo.hostenv.name_] || []) : _8c.concat(_8b["default"] || []);
                if (_89) {
                    for (var i = 0; i < _89.length; i++) {
                        if (_89[i] instanceof Array) {
                            _89[i] = {name: _89[i][0], content: null};
                        } else {
                            _89[i] = {name: _89[i], content: null};
                        }
                    }
                }
                break;
            case "require":
                _89 = [{name: dep[1], content: null}];
                break;
            case "i18n._preloadLocalizations":
                dojo.i18n._preloadLocalizations.apply(dojo.i18n._preloadLocalizations, dep.slice(1));
                break;
        }
        if (dep[0] == "requireAfterIf" || dep[0] == "requireIf") {
            _8a = _89;
            _89 = null;
        }
        return {requires: _89, requiresAfter: _8a};
    };
    dojo._xdWalkReqs = function () {
        var _8d = null;
        var req;
        for (var i = 0; i < dojo._xdOrderedReqs.length; i++) {
            req = dojo._xdOrderedReqs[i];
            if (dojo._xdDepMap[req]) {
                _8d = [req];
                _8d[req] = true;
                dojo._xdEvalReqs(_8d);
            }
        }
    };
    dojo._xdEvalReqs = function (_8e) {
        while (_8e.length > 0) {
            var req = _8e[_8e.length - 1];
            var res = dojo._xdDepMap[req];
            var i, _8f, _90;
            if (res) {
                _8f = res.requires;
                if (_8f && _8f.length > 0) {
                    for (i = 0; i < _8f.length; i++) {
                        _90 = _8f[i].name;
                        if (_90 && !_8e[_90]) {
                            _8e.push(_90);
                            _8e[_90] = true;
                            dojo._xdEvalReqs(_8e);
                        }
                    }
                }
                var _91 = dojo._xdContents[res.contentIndex];
                if (!_91.isDefined) {
                    var _92 = _91.content;
                    _92["resourceName"] = _91["resourceName"];
                    _92["resourcePath"] = _91["resourcePath"];
                    dojo._xdDefList.push(_92);
                    _91.isDefined = true;
                }
                dojo._xdDepMap[req] = null;
                _8f = res.requiresAfter;
                if (_8f && _8f.length > 0) {
                    for (i = 0; i < _8f.length; i++) {
                        _90 = _8f[i].name;
                        if (_90 && !_8e[_90]) {
                            _8e.push(_90);
                            _8e[_90] = true;
                            dojo._xdEvalReqs(_8e);
                        }
                    }
                }
            }
            _8e.pop();
        }
    };
    dojo._xdWatchInFlight = function () {
        var _93 = "";
        var _94 = (dojo.config.xdWaitSeconds || 15) * 1000;
        var _95 = (dojo._xdStartTime + _94) < (new Date()).getTime();
        for (var _96 in dojo._xdInFlight) {
            if (dojo._xdInFlight[_96] === true) {
                if (_95) {
                    _93 += _96 + " ";
                } else {
                    return;
                }
            }
        }
        dojo._xdClearInterval();
        if (_95) {
            throw "Could not load cross-domain resources: " + _93;
        }
        dojo._xdWalkReqs();
        var _97 = dojo._xdDefList.length;
        for (var i = 0; i < _97; i++) {
            var _98 = dojo._xdDefList[i];
            if (dojo.config["debugAtAllCosts"] && _98["resourceName"]) {
                if (!dojo["_xdDebugQueue"]) {
                    dojo._xdDebugQueue = [];
                }
                dojo._xdDebugQueue.push({resourceName: _98.resourceName, resourcePath: _98.resourcePath});
            } else {
                _98.apply(dojo.global, dojo._scopeArgs);
            }
        }
        for (i = 0; i < dojo._xdContents.length; i++) {
            var _99 = dojo._xdContents[i];
            if (_99.content && !_99.isDefined) {
                _99.content.apply(dojo.global, dojo._scopeArgs);
            }
        }
        dojo._xdReset();
        if (dojo["_xdDebugQueue"] && dojo._xdDebugQueue.length > 0) {
            dojo._xdDebugFileLoaded();
        } else {
            dojo._xdNotifyLoaded();
        }
    };
    dojo._xdNotifyLoaded = function () {
        for (var _9a in dojo._xdInFlight) {
            if (typeof dojo._xdInFlight[_9a] == "boolean") {
                return;
            }
        }
        dojo._inFlightCount = 0;
        if (dojo._initFired && !dojo._loadNotifying) {
            dojo._callLoaded();
        }
    };
    if (typeof window != "undefined") {
        dojo.isBrowser = true;
        dojo._name = "browser";
        (function () {
            var d = dojo;
            if (document && document.getElementsByTagName) {
                var _9b = document.getElementsByTagName("script");
                var _9c = /dojo(\.xd)?\.js(\W|$)/i;
                for (var i = 0; i < _9b.length; i++) {
                    var src = _9b[i].getAttribute("src");
                    if (!src) {
                        continue;
                    }
                    var m = src.match(_9c);
                    if (m) {
                        if (!d.config.baseUrl) {
                            d.config.baseUrl = src.substring(0, m.index);
                        }
                        var cfg = (_9b[i].getAttribute("djConfig") || _9b[i].getAttribute("data-dojo-config"));
                        if (cfg) {
                            var _9d = eval("({ " + cfg + " })");
                            for (var x in _9d) {
                                dojo.config[x] = _9d[x];
                            }
                        }
                        break;
                    }
                }
            }
            d.baseUrl = d.config.baseUrl;
            var n = navigator;
            var dua = n.userAgent, dav = n.appVersion, tv = parseFloat(dav);
            if (dua.indexOf("Opera") >= 0) {
                d.isOpera = tv;
            }
            if (dua.indexOf("AdobeAIR") >= 0) {
                d.isAIR = 1;
            }
            d.isKhtml = (dav.indexOf("Konqueror") >= 0) ? tv : 0;
            d.isWebKit = parseFloat(dua.split("WebKit/")[1]) || undefined;
            d.isChrome = parseFloat(dua.split("Chrome/")[1]) || undefined;
            d.isMac = dav.indexOf("Macintosh") >= 0;
            var _9e = Math.max(dav.indexOf("WebKit"), dav.indexOf("Safari"), 0);
            if (_9e && !dojo.isChrome) {
                d.isSafari = parseFloat(dav.split("Version/")[1]);
                if (!d.isSafari || parseFloat(dav.substr(_9e + 7)) <= 419.3) {
                    d.isSafari = 2;
                }
            }
            if (dua.indexOf("Gecko") >= 0 && !d.isKhtml && !d.isWebKit) {
                d.isMozilla = d.isMoz = tv;
            }
            if (d.isMoz) {
                d.isFF = parseFloat(dua.split("Firefox/")[1] || dua.split("Minefield/")[1]) || undefined;
            }
            if (document.all && !d.isOpera) {
                d.isIE = parseFloat(dav.split("MSIE ")[1]) || undefined;
                var _9f = document.documentMode;
                if (_9f && _9f != 5 && Math.floor(d.isIE) != _9f) {
                    d.isIE = _9f;
                }
            }
            if (dojo.isIE && window.location.protocol === "file:") {
                dojo.config.ieForceActiveXXhr = true;
            }
            d.isQuirks = document.compatMode == "BackCompat";
            d.locale = dojo.config.locale || (d.isIE ? n.userLanguage : n.language).toLowerCase();
            d._XMLHTTP_PROGIDS = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"];
            d._xhrObj = function () {
                var _a0, _a1;
                if (!dojo.isIE || !dojo.config.ieForceActiveXXhr) {
                    try {
                        _a0 = new XMLHttpRequest();
                    } catch (e) {
                    }
                }
                if (!_a0) {
                    for (var i = 0; i < 3; ++i) {
                        var _a2 = d._XMLHTTP_PROGIDS[i];
                        try {
                            _a0 = new ActiveXObject(_a2);
                        } catch (e) {
                            _a1 = e;
                        }
                        if (_a0) {
                            d._XMLHTTP_PROGIDS = [_a2];
                            break;
                        }
                    }
                }
                if (!_a0) {
                    throw new Error("XMLHTTP not available: " + _a1);
                }
                return _a0;
            };
            d._isDocumentOk = function (_a3) {
                var _a4 = _a3.status || 0;
                return (_a4 >= 200 && _a4 < 300) || _a4 == 304 || _a4 == 1223 || !_a4;
            };
            var _a5 = window.location + "";
            var _a6 = document.getElementsByTagName("base");
            var _a7 = (_a6 && _a6.length > 0);
            d._getText = function (uri, _a8) {
                var _a9 = d._xhrObj();
                if (!_a7 && dojo._Url) {
                    uri = (new dojo._Url(_a5, uri)).toString();
                }
                if (d.config.cacheBust) {
                    uri += "";
                    uri += (uri.indexOf("?") == -1 ? "?" : "&") + String(d.config.cacheBust).replace(/\W+/g, "");
                }
                _a9.open("GET", uri, false);
                try {
                    _a9.send(null);
                    if (!d._isDocumentOk(_a9)) {
                        var err = Error("Unable to load " + uri + " status:" + _a9.status);
                        err.status = _a9.status;
                        err.responseText = _a9.responseText;
                        throw err;
                    }
                } catch (e) {
                    if (_a8) {
                        return null;
                    }
                    throw e;
                }
                return _a9.responseText;
            };
            var _aa = window;
            var _ab = function (_ac, fp) {
                var _ad = _aa.attachEvent || _aa.addEventListener;
                _ac = _aa.attachEvent ? _ac : _ac.substring(2);
                _ad(_ac, function () {
                    fp.apply(_aa, arguments);
                }, false);
            };
            d._windowUnloaders = [];
            d.windowUnloaded = function () {
                var mll = d._windowUnloaders;
                while (mll.length) {
                    (mll.pop())();
                }
                d = null;
            };
            var _ae = 0;
            d.addOnWindowUnload = function (obj, _af) {
                d._onto(d._windowUnloaders, obj, _af);
                if (!_ae) {
                    _ae = 1;
                    _ab("onunload", d.windowUnloaded);
                }
            };
            var _b0 = 0;
            d.addOnUnload = function (obj, _b1) {
                d._onto(d._unloaders, obj, _b1);
                if (!_b0) {
                    _b0 = 1;
                    _ab("onbeforeunload", dojo.unloaded);
                }
            };
        })();
        dojo._initFired = false;
        dojo._loadInit = function (e) {
            if (dojo._scrollIntervalId) {
                clearInterval(dojo._scrollIntervalId);
                dojo._scrollIntervalId = 0;
            }
            if (!dojo._initFired) {
                dojo._initFired = true;
                if (!dojo.config.afterOnLoad && window.detachEvent) {
                    window.detachEvent("onload", dojo._loadInit);
                }
                if (dojo._inFlightCount == 0) {
                    dojo._modulesLoaded();
                }
            }
        };
        if (!dojo.config.afterOnLoad) {
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", dojo._loadInit, false);
                window.addEventListener("load", dojo._loadInit, false);
            } else {
                if (window.attachEvent) {
                    window.attachEvent("onload", dojo._loadInit);
                    if (!dojo.config.skipIeDomLoaded && self === self.top) {
                        dojo._scrollIntervalId = setInterval(function () {
                            try {
                                if (document.body) {
                                    document.documentElement.doScroll("left");
                                    dojo._loadInit();
                                }
                            } catch (e) {
                            }
                        }, 30);
                    }
                }
            }
        }
        if (dojo.isIE) {
            try {
                (function () {
                    document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
                    var _b2 = ["*", "group", "roundrect", "oval", "shape", "rect", "imagedata", "path", "textpath", "text"], i = 0, l = 1, s = document.createStyleSheet();
                    if (dojo.isIE >= 8) {
                        i = 1;
                        l = _b2.length;
                    }
                    for (; i < l; ++i) {
                        s.addRule("v\\:" + _b2[i], "behavior:url(#default#VML); display:inline-block");
                    }
                })();
            } catch (e) {
            }
        }
    }
    (function () {
        var mp = dojo.config["modulePaths"];
        if (mp) {
            for (var _b3 in mp) {
                dojo.registerModulePath(_b3, mp[_b3]);
            }
        }
    })();
    if (dojo.config.isDebug) {
        dojo.require("dojo._firebug.firebug");
    }
    if (dojo.config.debugAtAllCosts) {
        dojo.require("dojo._base._loader.loader_debug");
    }
    if (!dojo._hasResource["dojo._base.lang"]) {
        dojo._hasResource["dojo._base.lang"] = true;
        dojo.provide("dojo._base.lang");
        (function () {
            var d = dojo, _b4 = Object.prototype.toString;
            dojo.isString = function (it) {
                return (typeof it == "string" || it instanceof String);
            };
            dojo.isArray = function (it) {
                return it && (it instanceof Array || typeof it == "array");
            };
            dojo.isFunction = function (it) {
                return _b4.call(it) === "[object Function]";
            };
            dojo.isObject = function (it) {
                return it !== undefined && (it === null || typeof it == "object" || d.isArray(it) || d.isFunction(it));
            };
            dojo.isArrayLike = function (it) {
                return it && it !== undefined && !d.isString(it) && !d.isFunction(it) && !(it.tagName && it.tagName.toLowerCase() == "form") && (d.isArray(it) || isFinite(it.length));
            };
            dojo.isAlien = function (it) {
                return it && !d.isFunction(it) && /\{\s*\[native code\]\s*\}/.test(String(it));
            };
            dojo.extend = function (_b5, _b6) {
                for (var i = 1, l = arguments.length; i < l; i++) {
                    d._mixin(_b5.prototype, arguments[i]);
                }
                return _b5;
            };
            dojo._hitchArgs = function (_b7, _b8) {
                var pre = d._toArray(arguments, 2);
                var _b9 = d.isString(_b8);
                return function () {
                    var _ba = d._toArray(arguments);
                    var f = _b9 ? (_b7 || d.global)[_b8] : _b8;
                    return f && f.apply(_b7 || this, pre.concat(_ba));
                };
            };
            dojo.hitch = function (_bb, _bc) {
                if (arguments.length > 2) {
                    return d._hitchArgs.apply(d, arguments);
                }
                if (!_bc) {
                    _bc = _bb;
                    _bb = null;
                }
                if (d.isString(_bc)) {
                    _bb = _bb || d.global;
                    if (!_bb[_bc]) {
                        throw (["dojo.hitch: scope[\"", _bc, "\"] is null (scope=\"", _bb, "\")"].join(""));
                    }
                    return function () {
                        return _bb[_bc].apply(_bb, arguments || []);
                    };
                }
                return !_bb ? _bc : function () {
                    return _bc.apply(_bb, arguments || []);
                };
            };
            dojo.delegate = dojo._delegate = (function () {
                function TMP() {
                }
                ;
                return function (obj, _bd) {
                    TMP.prototype = obj;
                    var tmp = new TMP();
                    TMP.prototype = null;
                    if (_bd) {
                        d._mixin(tmp, _bd);
                    }
                    return tmp;
                };
            })();
            var _be = function (obj, _bf, _c0) {
                return (_c0 || []).concat(Array.prototype.slice.call(obj, _bf || 0));
            };
            var _c1 = function (obj, _c2, _c3) {
                var arr = _c3 || [];
                for (var x = _c2 || 0; x < obj.length; x++) {
                    arr.push(obj[x]);
                }
                return arr;
            };
            dojo._toArray = d.isIE ? function (obj) {
                return ((obj.item) ? _c1 : _be).apply(this, arguments);
            } : _be;
            dojo.partial = function (_c4) {
                var arr = [null];
                return d.hitch.apply(d, arr.concat(d._toArray(arguments)));
            };
            var _c5 = d._extraNames, _c6 = _c5.length, _c7 = {};
            dojo.clone = function (o) {
                if (!o || typeof o != "object" || d.isFunction(o)) {
                    return o;
                }
                if (o.nodeType && "cloneNode" in o) {
                    return o.cloneNode(true);
                }
                if (o instanceof Date) {
                    return new Date(o.getTime());
                }
                if (o instanceof RegExp) {
                    return new RegExp(o);
                }
                var r, i, l, s, _c8;
                if (d.isArray(o)) {
                    r = [];
                    for (i = 0, l = o.length; i < l; ++i) {
                        if (i in o) {
                            r.push(d.clone(o[i]));
                        }
                    }
                } else {
                    r = o.constructor ? new o.constructor() : {};
                }
                for (_c8 in o) {
                    s = o[_c8];
                    if (!(_c8 in r) || (r[_c8] !== s && (!(_c8 in _c7) || _c7[_c8] !== s))) {
                        r[_c8] = d.clone(s);
                    }
                }
                if (_c6) {
                    for (i = 0; i < _c6; ++i) {
                        _c8 = _c5[i];
                        s = o[_c8];
                        if (!(_c8 in r) || (r[_c8] !== s && (!(_c8 in _c7) || _c7[_c8] !== s))) {
                            r[_c8] = s;
                        }
                    }
                }
                return r;
            };
            dojo.trim = String.prototype.trim ? function (str) {
                return str.trim();
            } : function (str) {
                return str.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
            };
            var _c9 = /\{([^\}]+)\}/g;
            dojo.replace = function (_ca, map, _cb) {
                return _ca.replace(_cb || _c9, d.isFunction(map) ? map : function (_cc, k) {
                    return d.getObject(k, false, map);
                });
            };
        })();
    }
    if (!dojo._hasResource["dojo._base.array"]) {
        dojo._hasResource["dojo._base.array"] = true;
        dojo.provide("dojo._base.array");
        (function () {
            var _cd = function (arr, obj, cb) {
                return [(typeof arr == "string") ? arr.split("") : arr, obj || dojo.global, (typeof cb == "string") ? new Function("item", "index", "array", cb) : cb];
            };
            var _ce = function (_cf, arr, _d0, _d1) {
                var _d2 = _cd(arr, _d1, _d0);
                arr = _d2[0];
                for (var i = 0, l = arr.length; i < l; ++i) {
                    var _d3 = !!_d2[2].call(_d2[1], arr[i], i, arr);
                    if (_cf ^ _d3) {
                        return _d3;
                    }
                }
                return _cf;
            };
            dojo.mixin(dojo, {indexOf: function (_d4, _d5, _d6, _d7) {
                    var _d8 = 1, end = _d4.length || 0, i = 0;
                    if (_d7) {
                        i = end - 1;
                        _d8 = end = -1;
                    }
                    if (_d6 != undefined) {
                        i = _d6;
                    }
                    if ((_d7 && i > end) || i < end) {
                        for (; i != end; i += _d8) {
                            if (_d4[i] == _d5) {
                                return i;
                            }
                        }
                    }
                    return -1;
                }, lastIndexOf: function (_d9, _da, _db) {
                    return dojo.indexOf(_d9, _da, _db, true);
                }, forEach: function (arr, _dc, _dd) {
                    if (!arr || !arr.length) {
                        return;
                    }
                    var _de = _cd(arr, _dd, _dc);
                    arr = _de[0];
                    for (var i = 0, l = arr.length; i < l; ++i) {
                        _de[2].call(_de[1], arr[i], i, arr);
                    }
                }, every: function (arr, _df, _e0) {
                    return _ce(true, arr, _df, _e0);
                }, some: function (arr, _e1, _e2) {
                    return _ce(false, arr, _e1, _e2);
                }, map: function (arr, _e3, _e4) {
                    var _e5 = _cd(arr, _e4, _e3);
                    arr = _e5[0];
                    var _e6 = (arguments[3] ? (new arguments[3]()) : []);
                    for (var i = 0, l = arr.length; i < l; ++i) {
                        _e6.push(_e5[2].call(_e5[1], arr[i], i, arr));
                    }
                    return _e6;
                }, filter: function (arr, _e7, _e8) {
                    var _e9 = _cd(arr, _e8, _e7);
                    arr = _e9[0];
                    var _ea = [];
                    for (var i = 0, l = arr.length; i < l; ++i) {
                        if (_e9[2].call(_e9[1], arr[i], i, arr)) {
                            _ea.push(arr[i]);
                        }
                    }
                    return _ea;
                }});
        })();
    }
    if (!dojo._hasResource["dojo._base.declare"]) {
        dojo._hasResource["dojo._base.declare"] = true;
        dojo.provide("dojo._base.declare");
        (function () {
            var d = dojo, mix = d._mixin, op = Object.prototype, _eb = op.toString, _ec = new Function, _ed = 0, _ee = "constructor";
            function err(msg, cls) {
                throw new Error("declare" + (cls ? " " + cls : "") + ": " + msg);
            }
            ;
            function _ef(_f0, _f1) {
                var _f2 = [], _f3 = [{cls: 0, refs: []}], _f4 = {}, _f5 = 1, l = _f0.length, i = 0, j, lin, _f6, top, _f7, rec, _f8, _f9;
                for (; i < l; ++i) {
                    _f6 = _f0[i];
                    if (!_f6) {
                        err("mixin #" + i + " is unknown. Did you use dojo.require to pull it in?", _f1);
                    } else {
                        if (_eb.call(_f6) != "[object Function]") {
                            err("mixin #" + i + " is not a callable constructor.", _f1);
                        }
                    }
                    lin = _f6._meta ? _f6._meta.bases : [_f6];
                    top = 0;
                    for (j = lin.length - 1; j >= 0; --j) {
                        _f7 = lin[j].prototype;
                        if (!_f7.hasOwnProperty("declaredClass")) {
                            _f7.declaredClass = "uniqName_" + (_ed++);
                        }
                        _f8 = _f7.declaredClass;
                        if (!_f4.hasOwnProperty(_f8)) {
                            _f4[_f8] = {count: 0, refs: [], cls: lin[j]};
                            ++_f5;
                        }
                        rec = _f4[_f8];
                        if (top && top !== rec) {
                            rec.refs.push(top);
                            ++top.count;
                        }
                        top = rec;
                    }
                    ++top.count;
                    _f3[0].refs.push(top);
                }
                while (_f3.length) {
                    top = _f3.pop();
                    _f2.push(top.cls);
                    --_f5;
                    while (_f9 = top.refs, _f9.length == 1) {
                        top = _f9[0];
                        if (!top || --top.count) {
                            top = 0;
                            break;
                        }
                        _f2.push(top.cls);
                        --_f5;
                    }
                    if (top) {
                        for (i = 0, l = _f9.length; i < l; ++i) {
                            top = _f9[i];
                            if (!--top.count) {
                                _f3.push(top);
                            }
                        }
                    }
                }
                if (_f5) {
                    err("can't build consistent linearization", _f1);
                }
                _f6 = _f0[0];
                _f2[0] = _f6 ? _f6._meta && _f6 === _f2[_f2.length - _f6._meta.bases.length] ? _f6._meta.bases.length : 1 : 0;
                return _f2;
            }
            ;
            function _fa(_fb, a, f) {
                var _fc, _fd, _fe, _ff, meta, base, _100, opf, pos, _101 = this._inherited = this._inherited || {};
                if (typeof _fb == "string") {
                    _fc = _fb;
                    _fb = a;
                    a = f;
                }
                f = 0;
                _ff = _fb.callee;
                _fc = _fc || _ff.nom;
                if (!_fc) {
                    err("can't deduce a name to call inherited()", this.declaredClass);
                }
                meta = this.constructor._meta;
                _fe = meta.bases;
                pos = _101.p;
                if (_fc != _ee) {
                    if (_101.c !== _ff) {
                        pos = 0;
                        base = _fe[0];
                        meta = base._meta;
                        if (meta.hidden[_fc] !== _ff) {
                            _fd = meta.chains;
                            if (_fd && typeof _fd[_fc] == "string") {
                                err("calling chained method with inherited: " + _fc, this.declaredClass);
                            }
                            do {
                                meta = base._meta;
                                _100 = base.prototype;
                                if (meta && (_100[_fc] === _ff && _100.hasOwnProperty(_fc) || meta.hidden[_fc] === _ff)) {
                                    break;
                                }
                            } while (base = _fe[++pos]);
                            pos = base ? pos : -1;
                        }
                    }
                    base = _fe[++pos];
                    if (base) {
                        _100 = base.prototype;
                        if (base._meta && _100.hasOwnProperty(_fc)) {
                            f = _100[_fc];
                        } else {
                            opf = op[_fc];
                            do {
                                _100 = base.prototype;
                                f = _100[_fc];
                                if (f && (base._meta ? _100.hasOwnProperty(_fc) : f !== opf)) {
                                    break;
                                }
                            } while (base = _fe[++pos]);
                        }
                    }
                    f = base && f || op[_fc];
                } else {
                    if (_101.c !== _ff) {
                        pos = 0;
                        meta = _fe[0]._meta;
                        if (meta && meta.ctor !== _ff) {
                            _fd = meta.chains;
                            if (!_fd || _fd.constructor !== "manual") {
                                err("calling chained constructor with inherited", this.declaredClass);
                            }
                            while (base = _fe[++pos]) {
                                meta = base._meta;
                                if (meta && meta.ctor === _ff) {
                                    break;
                                }
                            }
                            pos = base ? pos : -1;
                        }
                    }
                    while (base = _fe[++pos]) {
                        meta = base._meta;
                        f = meta ? meta.ctor : base;
                        if (f) {
                            break;
                        }
                    }
                    f = base && f;
                }
                _101.c = f;
                _101.p = pos;
                if (f) {
                    return a === true ? f : f.apply(this, a || _fb);
                }
            }
            ;
            function _102(name, args) {
                if (typeof name == "string") {
                    return this.inherited(name, args, true);
                }
                return this.inherited(name, true);
            }
            ;
            function _103(cls) {
                var _104 = this.constructor._meta.bases;
                for (var i = 0, l = _104.length; i < l; ++i) {
                    if (_104[i] === cls) {
                        return true;
                    }
                }
                return this instanceof cls;
            }
            ;
            function _105(_106, _107) {
                var name, i = 0, l = d._extraNames.length;
                for (name in _107) {
                    if (name != _ee && _107.hasOwnProperty(name)) {
                        _106[name] = _107[name];
                    }
                }
                for (; i < l; ++i) {
                    name = d._extraNames[i];
                    if (name != _ee && _107.hasOwnProperty(name)) {
                        _106[name] = _107[name];
                    }
                }
            }
            ;
            function _108(_109, _10a) {
                var name, t, i = 0, l = d._extraNames.length;
                for (name in _10a) {
                    t = _10a[name];
                    if ((t !== op[name] || !(name in op)) && name != _ee) {
                        if (_eb.call(t) == "[object Function]") {
                            t.nom = name;
                        }
                        _109[name] = t;
                    }
                }
                for (; i < l; ++i) {
                    name = d._extraNames[i];
                    t = _10a[name];
                    if ((t !== op[name] || !(name in op)) && name != _ee) {
                        if (_eb.call(t) == "[object Function]") {
                            t.nom = name;
                        }
                        _109[name] = t;
                    }
                }
                return _109;
            }
            ;
            function _10b(_10c) {
                _108(this.prototype, _10c);
                return this;
            }
            ;
            function _10d(_10e, _10f) {
                return function () {
                    var a = arguments, args = a, a0 = a[0], f, i, m, l = _10e.length, _110;
                    if (!(this instanceof a.callee)) {
                        return _111(a);
                    }
                    if (_10f && (a0 && a0.preamble || this.preamble)) {
                        _110 = new Array(_10e.length);
                        _110[0] = a;
                        for (i = 0; ; ) {
                            a0 = a[0];
                            if (a0) {
                                f = a0.preamble;
                                if (f) {
                                    a = f.apply(this, a) || a;
                                }
                            }
                            f = _10e[i].prototype;
                            f = f.hasOwnProperty("preamble") && f.preamble;
                            if (f) {
                                a = f.apply(this, a) || a;
                            }
                            if (++i == l) {
                                break;
                            }
                            _110[i] = a;
                        }
                    }
                    for (i = l - 1; i >= 0; --i) {
                        f = _10e[i];
                        m = f._meta;
                        f = m ? m.ctor : f;
                        if (f) {
                            f.apply(this, _110 ? _110[i] : a);
                        }
                    }
                    f = this.postscript;
                    if (f) {
                        f.apply(this, args);
                    }
                };
            }
            ;
            function _112(ctor, _113) {
                return function () {
                    var a = arguments, t = a, a0 = a[0], f;
                    if (!(this instanceof a.callee)) {
                        return _111(a);
                    }
                    if (_113) {
                        if (a0) {
                            f = a0.preamble;
                            if (f) {
                                t = f.apply(this, t) || t;
                            }
                        }
                        f = this.preamble;
                        if (f) {
                            f.apply(this, t);
                        }
                    }
                    if (ctor) {
                        ctor.apply(this, a);
                    }
                    f = this.postscript;
                    if (f) {
                        f.apply(this, a);
                    }
                };
            }
            ;
            function _114(_115) {
                return function () {
                    var a = arguments, i = 0, f, m;
                    if (!(this instanceof a.callee)) {
                        return _111(a);
                    }
                    for (; f = _115[i]; ++i) {
                        m = f._meta;
                        f = m ? m.ctor : f;
                        if (f) {
                            f.apply(this, a);
                            break;
                        }
                    }
                    f = this.postscript;
                    if (f) {
                        f.apply(this, a);
                    }
                };
            }
            ;
            function _116(name, _117, _118) {
                return function () {
                    var b, m, f, i = 0, step = 1;
                    if (_118) {
                        i = _117.length - 1;
                        step = -1;
                    }
                    for (; b = _117[i]; i += step) {
                        m = b._meta;
                        f = (m ? m.hidden : b.prototype)[name];
                        if (f) {
                            f.apply(this, arguments);
                        }
                    }
                };
            }
            ;
            function _119(ctor) {
                _ec.prototype = ctor.prototype;
                var t = new _ec;
                _ec.prototype = null;
                return t;
            }
            ;
            function _111(args) {
                var ctor = args.callee, t = _119(ctor);
                ctor.apply(t, args);
                return t;
            }
            ;
            d.declare = function (_11a, _11b, _11c) {
                if (typeof _11a != "string") {
                    _11c = _11b;
                    _11b = _11a;
                    _11a = "";
                }
                _11c = _11c || {};
                var _11d, i, t, ctor, name, _11e, _11f, _120 = 1, _121 = _11b;
                if (_eb.call(_11b) == "[object Array]") {
                    _11e = _ef(_11b, _11a);
                    t = _11e[0];
                    _120 = _11e.length - t;
                    _11b = _11e[_120];
                } else {
                    _11e = [0];
                    if (_11b) {
                        if (_eb.call(_11b) == "[object Function]") {
                            t = _11b._meta;
                            _11e = _11e.concat(t ? t.bases : _11b);
                        } else {
                            err("base class is not a callable constructor.", _11a);
                        }
                    } else {
                        if (_11b !== null) {
                            err("unknown base class. Did you use dojo.require to pull it in?", _11a);
                        }
                    }
                }
                if (_11b) {
                    for (i = _120 - 1; ; --i) {
                        _11d = _119(_11b);
                        if (!i) {
                            break;
                        }
                        t = _11e[i];
                        (t._meta ? _105 : mix)(_11d, t.prototype);
                        ctor = new Function;
                        ctor.superclass = _11b;
                        ctor.prototype = _11d;
                        _11b = _11d.constructor = ctor;
                    }
                } else {
                    _11d = {};
                }
                _108(_11d, _11c);
                t = _11c.constructor;
                if (t !== op.constructor) {
                    t.nom = _ee;
                    _11d.constructor = t;
                }
                for (i = _120 - 1; i; --i) {
                    t = _11e[i]._meta;
                    if (t && t.chains) {
                        _11f = mix(_11f || {}, t.chains);
                    }
                }
                if (_11d["-chains-"]) {
                    _11f = mix(_11f || {}, _11d["-chains-"]);
                }
                t = !_11f || !_11f.hasOwnProperty(_ee);
                _11e[0] = ctor = (_11f && _11f.constructor === "manual") ? _114(_11e) : (_11e.length == 1 ? _112(_11c.constructor, t) : _10d(_11e, t));
                ctor._meta = {bases: _11e, hidden: _11c, chains: _11f, parents: _121, ctor: _11c.constructor};
                ctor.superclass = _11b && _11b.prototype;
                ctor.extend = _10b;
                ctor.prototype = _11d;
                _11d.constructor = ctor;
                _11d.getInherited = _102;
                _11d.inherited = _fa;
                _11d.isInstanceOf = _103;
                if (_11a) {
                    _11d.declaredClass = _11a;
                    d.setObject(_11a, ctor);
                }
                if (_11f) {
                    for (name in _11f) {
                        if (_11d[name] && typeof _11f[name] == "string" && name != _ee) {
                            t = _11d[name] = _116(name, _11e, _11f[name] === "after");
                            t.nom = name;
                        }
                    }
                }
                return ctor;
            };
            d.safeMixin = _108;
        })();
    }
    if (!dojo._hasResource["dojo._base.connect"]) {
        dojo._hasResource["dojo._base.connect"] = true;
        dojo.provide("dojo._base.connect");
        dojo._listener = {getDispatcher: function () {
                return function () {
                    var ap = Array.prototype, c = arguments.callee, ls = c._listeners, t = c.target, r = t && t.apply(this, arguments), i, lls = [].concat(ls);
                    for (i in lls) {
                        if (!(i in ap)) {
                            lls[i].apply(this, arguments);
                        }
                    }
                    return r;
                };
            }, add: function (_122, _123, _124) {
                _122 = _122 || dojo.global;
                var f = _122[_123];
                if (!f || !f._listeners) {
                    var d = dojo._listener.getDispatcher();
                    d.target = f;
                    d._listeners = [];
                    f = _122[_123] = d;
                }
                return f._listeners.push(_124);
            }, remove: function (_125, _126, _127) {
                var f = (_125 || dojo.global)[_126];
                if (f && f._listeners && _127--) {
                    delete f._listeners[_127];
                }
            }};
        dojo.connect = function (obj, _128, _129, _12a, _12b) {
            var a = arguments, args = [], i = 0;
            args.push(dojo.isString(a[0]) ? null : a[i++], a[i++]);
            var a1 = a[i + 1];
            args.push(dojo.isString(a1) || dojo.isFunction(a1) ? a[i++] : null, a[i++]);
            for (var l = a.length; i < l; i++) {
                args.push(a[i]);
            }
            return dojo._connect.apply(this, args);
        };
        dojo._connect = function (obj, _12c, _12d, _12e) {
            var l = dojo._listener, h = l.add(obj, _12c, dojo.hitch(_12d, _12e));
            return [obj, _12c, h, l];
        };
        dojo.disconnect = function (_12f) {
            if (_12f && _12f[0] !== undefined) {
                dojo._disconnect.apply(this, _12f);
                delete _12f[0];
            }
        };
        dojo._disconnect = function (obj, _130, _131, _132) {
            _132.remove(obj, _130, _131);
        };
        dojo._topics = {};
        dojo.subscribe = function (_133, _134, _135) {
            return [_133, dojo._listener.add(dojo._topics, _133, dojo.hitch(_134, _135))];
        };
        dojo.unsubscribe = function (_136) {
            if (_136) {
                dojo._listener.remove(dojo._topics, _136[0], _136[1]);
            }
        };
        dojo.publish = function (_137, args) {
            var f = dojo._topics[_137];
            if (f) {
                f.apply(this, args || []);
            }
        };
        dojo.connectPublisher = function (_138, obj, _139) {
            var pf = function () {
                dojo.publish(_138, arguments);
            };
            return _139 ? dojo.connect(obj, _139, pf) : dojo.connect(obj, pf);
        };
    }
    if (!dojo._hasResource["dojo._base.Deferred"]) {
        dojo._hasResource["dojo._base.Deferred"] = true;
        dojo.provide("dojo._base.Deferred");
        (function () {
            var _13a = function () {
            };
            var _13b = Object.freeze || function () {
            };
            dojo.Deferred = function (_13c) {
                var _13d, _13e, _13f, head, _140;
                var _141 = (this.promise = {});
                function _142(_143) {
                    if (_13e) {
                        throw new Error("This deferred has already been resolved");
                    }
                    _13d = _143;
                    _13e = true;
                    _144();
                }
                ;
                function _144() {
                    var _145;
                    while (!_145 && _140) {
                        var _146 = _140;
                        _140 = _140.next;
                        if ((_145 = (_146.progress == _13a))) {
                            _13e = false;
                        }
                        var func = (_13f ? _146.error : _146.resolved);
                        if (func) {
                            try {
                                var _147 = func(_13d);
                                if (_147 && typeof _147.then === "function") {
                                    _147.then(dojo.hitch(_146.deferred, "resolve"), dojo.hitch(_146.deferred, "reject"));
                                    continue;
                                }
                                var _148 = _145 && _147 === undefined;
                                if (_145 && !_148) {
                                    _13f = _147 instanceof Error;
                                }
                                _146.deferred[_148 && _13f ? "reject" : "resolve"](_148 ? _13d : _147);
                            } catch (e) {
                                _146.deferred.reject(e);
                            }
                        } else {
                            if (_13f) {
                                _146.deferred.reject(_13d);
                            } else {
                                _146.deferred.resolve(_13d);
                            }
                        }
                    }
                }
                ;
                this.resolve = this.callback = function (_149) {
                    this.fired = 0;
                    this.results = [_149, null];
                    _142(_149);
                };
                this.reject = this.errback = function (_14a) {
                    _13f = true;
                    this.fired = 1;
                    _142(_14a);
                    this.results = [null, _14a];
                    if (!_14a || _14a.log !== false) {
                        (dojo.config.deferredOnError || function (x) {
                        })(_14a);
                    }
                };
                this.progress = function (_14b) {
                    var _14c = _140;
                    while (_14c) {
                        var _14d = _14c.progress;
                        _14d && _14d(_14b);
                        _14c = _14c.next;
                    }
                };
                this.addCallbacks = function (_14e, _14f) {
                    this.then(_14e, _14f, _13a);
                    return this;
                };
                this.then = _141.then = function (_150, _151, _152) {
                    var _153 = _152 == _13a ? this : new dojo.Deferred(_141.cancel);
                    var _154 = {resolved: _150, error: _151, progress: _152, deferred: _153};
                    if (_140) {
                        head = head.next = _154;
                    } else {
                        _140 = head = _154;
                    }
                    if (_13e) {
                        _144();
                    }
                    return _153.promise;
                };
                var _155 = this;
                this.cancel = _141.cancel = function () {
                    if (!_13e) {
                        var _156 = _13c && _13c(_155);
                        if (!_13e) {
                            if (!(_156 instanceof Error)) {
                                _156 = new Error(_156);
                            }
                            _156.log = false;
                            _155.reject(_156);
                        }
                    }
                };
                _13b(_141);
            };
            dojo.extend(dojo.Deferred, {addCallback: function (_157) {
                    return this.addCallbacks(dojo.hitch.apply(dojo, arguments));
                }, addErrback: function (_158) {
                    return this.addCallbacks(null, dojo.hitch.apply(dojo, arguments));
                }, addBoth: function (_159) {
                    var _15a = dojo.hitch.apply(dojo, arguments);
                    return this.addCallbacks(_15a, _15a);
                }, fired: -1});
        })();
        dojo.when = function (_15b, _15c, _15d, _15e) {
            if (_15b && typeof _15b.then === "function") {
                return _15b.then(_15c, _15d, _15e);
            }
            return _15c(_15b);
        };
    }
    if (!dojo._hasResource["dojo._base.json"]) {
        dojo._hasResource["dojo._base.json"] = true;
        dojo.provide("dojo._base.json");
        dojo.fromJson = function (json) {
            return eval("(" + json + ")");
        };
        dojo._escapeString = function (str) {
            return ("\"" + str.replace(/(["\\])/g, "\\$1") + "\"").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r");
        };
        dojo.toJsonIndentStr = "\t";
        dojo.toJson = function (it, _15f, _160) {
            if (it === undefined) {
                return "undefined";
            }
            var _161 = typeof it;
            if (_161 == "number" || _161 == "boolean") {
                return it + "";
            }
            if (it === null) {
                return "null";
            }
            if (dojo.isString(it)) {
                return dojo._escapeString(it);
            }
            var _162 = arguments.callee;
            var _163;
            _160 = _160 || "";
            var _164 = _15f ? _160 + dojo.toJsonIndentStr : "";
            var tf = it.__json__ || it.json;
            if (dojo.isFunction(tf)) {
                _163 = tf.call(it);
                if (it !== _163) {
                    return _162(_163, _15f, _164);
                }
            }
            if (it.nodeType && it.cloneNode) {
                throw new Error("Can't serialize DOM nodes");
            }
            var sep = _15f ? " " : "";
            var _165 = _15f ? "\n" : "";
            if (dojo.isArray(it)) {
                var res = dojo.map(it, function (obj) {
                    var val = _162(obj, _15f, _164);
                    if (typeof val != "string") {
                        val = "undefined";
                    }
                    return _165 + _164 + val;
                });
                return "[" + res.join("," + sep) + _165 + _160 + "]";
            }
            if (_161 == "function") {
                return null;
            }
            var _166 = [], key;
            for (key in it) {
                var _167, val;
                if (typeof key == "number") {
                    _167 = "\"" + key + "\"";
                } else {
                    if (typeof key == "string") {
                        _167 = dojo._escapeString(key);
                    } else {
                        continue;
                    }
                }
                val = _162(it[key], _15f, _164);
                if (typeof val != "string") {
                    continue;
                }
                _166.push(_165 + _164 + _167 + ":" + sep + val);
            }
            return "{" + _166.join("," + sep) + _165 + _160 + "}";
        };
    }
    if (!dojo._hasResource["dojo._base.Color"]) {
        dojo._hasResource["dojo._base.Color"] = true;
        dojo.provide("dojo._base.Color");
        (function () {
            var d = dojo;
            dojo.Color = function (_168) {
                if (_168) {
                    this.setColor(_168);
                }
            };
            dojo.Color.named = {black: [0, 0, 0], silver: [192, 192, 192], gray: [128, 128, 128], white: [255, 255, 255], maroon: [128, 0, 0], red: [255, 0, 0], purple: [128, 0, 128], fuchsia: [255, 0, 255], green: [0, 128, 0], lime: [0, 255, 0], olive: [128, 128, 0], yellow: [255, 255, 0], navy: [0, 0, 128], blue: [0, 0, 255], teal: [0, 128, 128], aqua: [0, 255, 255], transparent: d.config.transparentColor || [255, 255, 255]};
            dojo.extend(dojo.Color, {r: 255, g: 255, b: 255, a: 1, _set: function (r, g, b, a) {
                    var t = this;
                    t.r = r;
                    t.g = g;
                    t.b = b;
                    t.a = a;
                }, setColor: function (_169) {
                    if (d.isString(_169)) {
                        d.colorFromString(_169, this);
                    } else {
                        if (d.isArray(_169)) {
                            d.colorFromArray(_169, this);
                        } else {
                            this._set(_169.r, _169.g, _169.b, _169.a);
                            if (!(_169 instanceof d.Color)) {
                                this.sanitize();
                            }
                        }
                    }
                    return this;
                }, sanitize: function () {
                    return this;
                }, toRgb: function () {
                    var t = this;
                    return [t.r, t.g, t.b];
                }, toRgba: function () {
                    var t = this;
                    return [t.r, t.g, t.b, t.a];
                }, toHex: function () {
                    var arr = d.map(["r", "g", "b"], function (x) {
                        var s = this[x].toString(16);
                        return s.length < 2 ? "0" + s : s;
                    }, this);
                    return "#" + arr.join("");
                }, toCss: function (_16a) {
                    var t = this, rgb = t.r + ", " + t.g + ", " + t.b;
                    return (_16a ? "rgba(" + rgb + ", " + t.a : "rgb(" + rgb) + ")";
                }, toString: function () {
                    return this.toCss(true);
                }});
            dojo.blendColors = function (_16b, end, _16c, obj) {
                var t = obj || new d.Color();
                d.forEach(["r", "g", "b", "a"], function (x) {
                    t[x] = _16b[x] + (end[x] - _16b[x]) * _16c;
                    if (x != "a") {
                        t[x] = Math.round(t[x]);
                    }
                });
                return t.sanitize();
            };
            dojo.colorFromRgb = function (_16d, obj) {
                var m = _16d.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
                return m && dojo.colorFromArray(m[1].split(/\s*,\s*/), obj);
            };
            dojo.colorFromHex = function (_16e, obj) {
                var t = obj || new d.Color(), bits = (_16e.length == 4) ? 4 : 8, mask = (1 << bits) - 1;
                _16e = Number("0x" + _16e.substr(1));
                if (isNaN(_16e)) {
                    return null;
                }
                d.forEach(["b", "g", "r"], function (x) {
                    var c = _16e & mask;
                    _16e >>= bits;
                    t[x] = bits == 4 ? 17 * c : c;
                });
                t.a = 1;
                return t;
            };
            dojo.colorFromArray = function (a, obj) {
                var t = obj || new d.Color();
                t._set(Number(a[0]), Number(a[1]), Number(a[2]), Number(a[3]));
                if (isNaN(t.a)) {
                    t.a = 1;
                }
                return t.sanitize();
            };
            dojo.colorFromString = function (str, obj) {
                var a = d.Color.named[str];
                return a && d.colorFromArray(a, obj) || d.colorFromRgb(str, obj) || d.colorFromHex(str, obj);
            };
        })();
    }
    if (!dojo._hasResource["dojo._base.window"]) {
        dojo._hasResource["dojo._base.window"] = true;
        dojo.provide("dojo._base.window");
        dojo.doc = window["document"] || null;
        dojo.body = function () {
            return dojo.doc.body || dojo.doc.getElementsByTagName("body")[0];
        };
        dojo.setContext = function (_16f, _170) {
            dojo.global = _16f;
            dojo.doc = _170;
        };
        dojo.withGlobal = function (_171, _172, _173, _174) {
            var _175 = dojo.global;
            try {
                dojo.global = _171;
                return dojo.withDoc.call(null, _171.document, _172, _173, _174);
            } finally {
                dojo.global = _175;
            }
        };
        dojo.withDoc = function (_176, _177, _178, _179) {
            var _17a = dojo.doc, _17b = dojo._bodyLtr, oldQ = dojo.isQuirks;
            try {
                dojo.doc = _176;
                delete dojo._bodyLtr;
                dojo.isQuirks = dojo.doc.compatMode == "BackCompat";
                if (_178 && typeof _177 == "string") {
                    _177 = _178[_177];
                }
                return _177.apply(_178, _179 || []);
            } finally {
                dojo.doc = _17a;
                delete dojo._bodyLtr;
                if (_17b !== undefined) {
                    dojo._bodyLtr = _17b;
                }
                dojo.isQuirks = oldQ;
            }
        };
    }
    if (!dojo._hasResource["dojo._base.event"]) {
        dojo._hasResource["dojo._base.event"] = true;
        dojo.provide("dojo._base.event");
        (function () {
            var del = (dojo._event_listener = {add: function (node, name, fp) {
                    if (!node) {
                        return;
                    }
                    name = del._normalizeEventName(name);
                    fp = del._fixCallback(name, fp);
                    if (!dojo.isIE && (name == "mouseenter" || name == "mouseleave")) {
                        var ofp = fp;
                        name = (name == "mouseenter") ? "mouseover" : "mouseout";
                        fp = function (e) {
                            if (!dojo.isDescendant(e.relatedTarget, node)) {
                                return ofp.call(this, e);
                            }
                        };
                    }
                    node.addEventListener(name, fp, false);
                    return fp;
                }, remove: function (node, _17c, _17d) {
                    if (node) {
                        _17c = del._normalizeEventName(_17c);
                        if (!dojo.isIE && (_17c == "mouseenter" || _17c == "mouseleave")) {
                            _17c = (_17c == "mouseenter") ? "mouseover" : "mouseout";
                        }
                        node.removeEventListener(_17c, _17d, false);
                    }
                }, _normalizeEventName: function (name) {
                    return name.slice(0, 2) == "on" ? name.slice(2) : name;
                }, _fixCallback: function (name, fp) {
                    return name != "keypress" ? fp : function (e) {
                        return fp.call(this, del._fixEvent(e, this));
                    };
                }, _fixEvent: function (evt, _17e) {
                    switch (evt.type) {
                        case "keypress":
                            del._setKeyChar(evt);
                            break;
                    }
                    return evt;
                }, _setKeyChar: function (evt) {
                    evt.keyChar = evt.charCode >= 32 ? String.fromCharCode(evt.charCode) : "";
                    evt.charOrCode = evt.keyChar || evt.keyCode;
                }, _punctMap: {106: 42, 111: 47, 186: 59, 187: 43, 188: 44, 189: 45, 190: 46, 191: 47, 192: 96, 219: 91, 220: 92, 221: 93, 222: 39}});
            dojo.fixEvent = function (evt, _17f) {
                return del._fixEvent(evt, _17f);
            };
            dojo.stopEvent = function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
            };
            var _180 = dojo._listener;
            dojo._connect = function (obj, _181, _182, _183, _184) {
                var _185 = obj && (obj.nodeType || obj.attachEvent || obj.addEventListener);
                var lid = _185 ? (_184 ? 2 : 1) : 0, l = [dojo._listener, del, _180][lid];
                var h = l.add(obj, _181, dojo.hitch(_182, _183));
                return [obj, _181, h, lid];
            };
            dojo._disconnect = function (obj, _186, _187, _188) {
                ([dojo._listener, del, _180][_188]).remove(obj, _186, _187);
            };
            dojo.keys = {BACKSPACE: 8, TAB: 9, CLEAR: 12, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, META: dojo.isSafari ? 91 : 224, PAUSE: 19, CAPS_LOCK: 20, ESCAPE: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT_ARROW: 37, UP_ARROW: 38, RIGHT_ARROW: 39, DOWN_ARROW: 40, INSERT: 45, DELETE: 46, HELP: 47, LEFT_WINDOW: 91, RIGHT_WINDOW: 92, SELECT: 93, NUMPAD_0: 96, NUMPAD_1: 97, NUMPAD_2: 98, NUMPAD_3: 99, NUMPAD_4: 100, NUMPAD_5: 101, NUMPAD_6: 102, NUMPAD_7: 103, NUMPAD_8: 104, NUMPAD_9: 105, NUMPAD_MULTIPLY: 106, NUMPAD_PLUS: 107, NUMPAD_ENTER: 108, NUMPAD_MINUS: 109, NUMPAD_PERIOD: 110, NUMPAD_DIVIDE: 111, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, F13: 124, F14: 125, F15: 126, NUM_LOCK: 144, SCROLL_LOCK: 145, copyKey: dojo.isMac && !dojo.isAIR ? (dojo.isSafari ? 91 : 224) : 17};
            var _189 = dojo.isMac ? "metaKey" : "ctrlKey";
            dojo.isCopyKey = function (e) {
                return e[_189];
            };
            if (dojo.isIE < 9 || (dojo.isIE && dojo.isQuirks)) {
                dojo.mouseButtons = {LEFT: 1, MIDDLE: 4, RIGHT: 2, isButton: function (e, _18a) {
                        return e.button & _18a;
                    }, isLeft: function (e) {
                        return e.button & 1;
                    }, isMiddle: function (e) {
                        return e.button & 4;
                    }, isRight: function (e) {
                        return e.button & 2;
                    }};
            } else {
                dojo.mouseButtons = {LEFT: 0, MIDDLE: 1, RIGHT: 2, isButton: function (e, _18b) {
                        return e.button == _18b;
                    }, isLeft: function (e) {
                        return e.button == 0;
                    }, isMiddle: function (e) {
                        return e.button == 1;
                    }, isRight: function (e) {
                        return e.button == 2;
                    }};
            }
            if (dojo.isIE) {
                var _18c = function (e, code) {
                    try {
                        return (e.keyCode = code);
                    } catch (e) {
                        return 0;
                    }
                };
                var iel = dojo._listener;
                var _18d = (dojo._ieListenersName = "_" + dojo._scopeName + "_listeners");
                if (!dojo.config._allow_leaks) {
                    _180 = iel = dojo._ie_listener = {handlers: [], add: function (_18e, _18f, _190) {
                            _18e = _18e || dojo.global;
                            var f = _18e[_18f];
                            if (!f || !f[_18d]) {
                                var d = dojo._getIeDispatcher();
                                d.target = f && (ieh.push(f) - 1);
                                d[_18d] = [];
                                f = _18e[_18f] = d;
                            }
                            return f[_18d].push(ieh.push(_190) - 1);
                        }, remove: function (_191, _192, _193) {
                            var f = (_191 || dojo.global)[_192], l = f && f[_18d];
                            if (f && l && _193--) {
                                delete ieh[l[_193]];
                                delete l[_193];
                            }
                        }};
                    var ieh = iel.handlers;
                }
                dojo.mixin(del, {add: function (node, _194, fp) {
                        if (!node) {
                            return;
                        }
                        _194 = del._normalizeEventName(_194);
                        if (_194 == "onkeypress") {
                            var kd = node.onkeydown;
                            if (!kd || !kd[_18d] || !kd._stealthKeydownHandle) {
                                var h = del.add(node, "onkeydown", del._stealthKeyDown);
                                kd = node.onkeydown;
                                kd._stealthKeydownHandle = h;
                                kd._stealthKeydownRefs = 1;
                            } else {
                                kd._stealthKeydownRefs++;
                            }
                        }
                        return iel.add(node, _194, del._fixCallback(fp));
                    }, remove: function (node, _195, _196) {
                        _195 = del._normalizeEventName(_195);
                        iel.remove(node, _195, _196);
                        if (_195 == "onkeypress") {
                            var kd = node.onkeydown;
                            if (--kd._stealthKeydownRefs <= 0) {
                                iel.remove(node, "onkeydown", kd._stealthKeydownHandle);
                                delete kd._stealthKeydownHandle;
                            }
                        }
                    }, _normalizeEventName: function (_197) {
                        return _197.slice(0, 2) != "on" ? "on" + _197 : _197;
                    }, _nop: function () {
                    }, _fixEvent: function (evt, _198) {
                        if (!evt) {
                            var w = _198 && (_198.ownerDocument || _198.document || _198).parentWindow || window;
                            evt = w.event;
                        }
                        if (!evt) {
                            return (evt);
                        }
                        evt.target = evt.srcElement;
                        evt.currentTarget = (_198 || evt.srcElement);
                        evt.layerX = evt.offsetX;
                        evt.layerY = evt.offsetY;
                        var se = evt.srcElement, doc = (se && se.ownerDocument) || document;
                        var _199 = ((dojo.isIE < 6) || (doc["compatMode"] == "BackCompat")) ? doc.body : doc.documentElement;
                        var _19a = dojo._getIeDocumentElementOffset();
                        evt.pageX = evt.clientX + dojo._fixIeBiDiScrollLeft(_199.scrollLeft || 0) - _19a.x;
                        evt.pageY = evt.clientY + (_199.scrollTop || 0) - _19a.y;
                        if (evt.type == "mouseover") {
                            evt.relatedTarget = evt.fromElement;
                        }
                        if (evt.type == "mouseout") {
                            evt.relatedTarget = evt.toElement;
                        }
                        if (dojo.isIE < 9 || dojo.isQuirks) {
                            evt.stopPropagation = del._stopPropagation;
                            evt.preventDefault = del._preventDefault;
                        }
                        return del._fixKeys(evt);
                    }, _fixKeys: function (evt) {
                        switch (evt.type) {
                            case "keypress":
                                var c = ("charCode" in evt ? evt.charCode : evt.keyCode);
                                if (c == 10) {
                                    c = 0;
                                    evt.keyCode = 13;
                                } else {
                                    if (c == 13 || c == 27) {
                                        c = 0;
                                    } else {
                                        if (c == 3) {
                                            c = 99;
                                        }
                                    }
                                }
                                evt.charCode = c;
                                del._setKeyChar(evt);
                                break;
                        }
                        return evt;
                    }, _stealthKeyDown: function (evt) {
                        var kp = evt.currentTarget.onkeypress;
                        if (!kp || !kp[_18d]) {
                            return;
                        }
                        var k = evt.keyCode;
                        var _19b = (k != 13 || (dojo.isIE >= 9 && !dojo.isQuirks)) && k != 32 && k != 27 && (k < 48 || k > 90) && (k < 96 || k > 111) && (k < 186 || k > 192) && (k < 219 || k > 222);
                        if (_19b || evt.ctrlKey) {
                            var c = _19b ? 0 : k;
                            if (evt.ctrlKey) {
                                if (k == 3 || k == 13) {
                                    return;
                                } else {
                                    if (c > 95 && c < 106) {
                                        c -= 48;
                                    } else {
                                        if ((!evt.shiftKey) && (c >= 65 && c <= 90)) {
                                            c += 32;
                                        } else {
                                            c = del._punctMap[c] || c;
                                        }
                                    }
                                }
                            }
                            var faux = del._synthesizeEvent(evt, {type: "keypress", faux: true, charCode: c});
                            kp.call(evt.currentTarget, faux);
                            if (dojo.isIE < 9 || (dojo.isIE && dojo.isQuirks)) {
                                evt.cancelBubble = faux.cancelBubble;
                            }
                            evt.returnValue = faux.returnValue;
                            _18c(evt, faux.keyCode);
                        }
                    }, _stopPropagation: function () {
                        this.cancelBubble = true;
                    }, _preventDefault: function () {
                        this.bubbledKeyCode = this.keyCode;
                        if (this.ctrlKey) {
                            _18c(this, 0);
                        }
                        this.returnValue = false;
                    }});
                dojo.stopEvent = (dojo.isIE < 9 || dojo.isQuirks) ? function (evt) {
                    evt = evt || window.event;
                    del._stopPropagation.call(evt);
                    del._preventDefault.call(evt);
                } : dojo.stopEvent;
            }
            del._synthesizeEvent = function (evt, _19c) {
                var faux = dojo.mixin({}, evt, _19c);
                del._setKeyChar(faux);
                faux.preventDefault = function () {
                    evt.preventDefault();
                };
                faux.stopPropagation = function () {
                    evt.stopPropagation();
                };
                return faux;
            };
            if (dojo.isOpera) {
                dojo.mixin(del, {_fixEvent: function (evt, _19d) {
                        switch (evt.type) {
                            case "keypress":
                                var c = evt.which;
                                if (c == 3) {
                                    c = 99;
                                }
                                c = c < 41 && !evt.shiftKey ? 0 : c;
                                if (evt.ctrlKey && !evt.shiftKey && c >= 65 && c <= 90) {
                                    c += 32;
                                }
                                return del._synthesizeEvent(evt, {charCode: c});
                        }
                        return evt;
                    }});
            }
            if (dojo.isWebKit) {
                del._add = del.add;
                del._remove = del.remove;
                dojo.mixin(del, {add: function (node, _19e, fp) {
                        if (!node) {
                            return;
                        }
                        var _19f = del._add(node, _19e, fp);
                        if (del._normalizeEventName(_19e) == "keypress") {
                            _19f._stealthKeyDownHandle = del._add(node, "keydown", function (evt) {
                                var k = evt.keyCode;
                                var _1a0 = k != 13 && k != 32 && (k < 48 || k > 90) && (k < 96 || k > 111) && (k < 186 || k > 192) && (k < 219 || k > 222);
                                if (_1a0 || evt.ctrlKey) {
                                    var c = _1a0 ? 0 : k;
                                    if (evt.ctrlKey) {
                                        if (k == 3 || k == 13) {
                                            return;
                                        } else {
                                            if (c > 95 && c < 106) {
                                                c -= 48;
                                            } else {
                                                if (!evt.shiftKey && c >= 65 && c <= 90) {
                                                    c += 32;
                                                } else {
                                                    c = del._punctMap[c] || c;
                                                }
                                            }
                                        }
                                    }
                                    var faux = del._synthesizeEvent(evt, {type: "keypress", faux: true, charCode: c});
                                    fp.call(evt.currentTarget, faux);
                                }
                            });
                        }
                        return _19f;
                    }, remove: function (node, _1a1, _1a2) {
                        if (node) {
                            if (_1a2._stealthKeyDownHandle) {
                                del._remove(node, "keydown", _1a2._stealthKeyDownHandle);
                            }
                            del._remove(node, _1a1, _1a2);
                        }
                    }, _fixEvent: function (evt, _1a3) {
                        switch (evt.type) {
                            case "keypress":
                                if (evt.faux) {
                                    return evt;
                                }
                                var c = evt.charCode;
                                c = c >= 32 ? c : 0;
                                return del._synthesizeEvent(evt, {charCode: c, faux: true});
                        }
                        return evt;
                    }});
            }
        })();
        if (dojo.isIE) {
            dojo._ieDispatcher = function (args, _1a4) {
                var ap = Array.prototype, h = dojo._ie_listener.handlers, c = args.callee, ls = c[dojo._ieListenersName], t = h[c.target];
                var r = t && t.apply(_1a4, args);
                var lls = [].concat(ls);
                for (var i in lls) {
                    var f = h[lls[i]];
                    if (!(i in ap) && f) {
                        f.apply(_1a4, args);
                    }
                }
                return r;
            };
            dojo._getIeDispatcher = function () {
                return new Function(dojo._scopeName + "._ieDispatcher(arguments, this)");
            };
            dojo._event_listener._fixCallback = function (fp) {
                var f = dojo._event_listener._fixEvent;
                return function (e) {
                    return fp.call(this, f(e, this));
                };
            };
        }
    }
    if (!dojo._hasResource["dojo._base.html"]) {
        dojo._hasResource["dojo._base.html"] = true;
        dojo.provide("dojo._base.html");
        try {
            document.execCommand("BackgroundImageCache", false, true);
        } catch (e) {
        }
        if (dojo.isIE) {
            dojo.byId = function (id, doc) {
                if (typeof id != "string") {
                    return id;
                }
                var _1a5 = doc || dojo.doc, te = _1a5.getElementById(id);
                if (te && (te.attributes.id.value == id || te.id == id)) {
                    return te;
                } else {
                    var eles = _1a5.all[id];
                    if (!eles || eles.nodeName) {
                        eles = [eles];
                    }
                    var i = 0;
                    while ((te = eles[i++])) {
                        if ((te.attributes && te.attributes.id && te.attributes.id.value == id) || te.id == id) {
                            return te;
                        }
                    }
                }
            };
        } else {
            dojo.byId = function (id, doc) {
                return ((typeof id == "string") ? (doc || dojo.doc).getElementById(id) : id) || null;
            };
        }
        (function () {
            var d = dojo;
            var byId = d.byId;
            var _1a6 = null, _1a7;
            d.addOnWindowUnload(function () {
                _1a6 = null;
            });
            dojo._destroyElement = dojo.destroy = function (node) {
                node = byId(node);
                try {
                    var doc = node.ownerDocument;
                    if (!_1a6 || _1a7 != doc) {
                        _1a6 = doc.createElement("div");
                        _1a7 = doc;
                    }
                    _1a6.appendChild(node.parentNode ? node.parentNode.removeChild(node) : node);
                    _1a6.innerHTML = "";
                } catch (e) {
                }
            };
            dojo.isDescendant = function (node, _1a8) {
                try {
                    node = byId(node);
                    _1a8 = byId(_1a8);
                    while (node) {
                        if (node == _1a8) {
                            return true;
                        }
                        node = node.parentNode;
                    }
                } catch (e) {
                }
                return false;
            };
            dojo.setSelectable = function (node, _1a9) {
                node = byId(node);
                if (d.isMozilla) {
                    node.style.MozUserSelect = _1a9 ? "" : "none";
                } else {
                    if (d.isKhtml || d.isWebKit) {
                        node.style.KhtmlUserSelect = _1a9 ? "auto" : "none";
                    } else {
                        if (d.isIE) {
                            var v = (node.unselectable = _1a9 ? "" : "on");
                            d.query("*", node).forEach("item.unselectable = '" + v + "'");
                        }
                    }
                }
            };
            var _1aa = function (node, ref) {
                var _1ab = ref.parentNode;
                if (_1ab) {
                    _1ab.insertBefore(node, ref);
                }
            };
            var _1ac = function (node, ref) {
                var _1ad = ref.parentNode;
                if (_1ad) {
                    if (_1ad.lastChild == ref) {
                        _1ad.appendChild(node);
                    } else {
                        _1ad.insertBefore(node, ref.nextSibling);
                    }
                }
            };
            dojo.place = function (node, _1ae, _1af) {
                _1ae = byId(_1ae);
                if (typeof node == "string") {
                    node = /^\s*</.test(node) ? d._toDom(node, _1ae.ownerDocument) : byId(node);
                }
                if (typeof _1af == "number") {
                    var cn = _1ae.childNodes;
                    if (!cn.length || cn.length <= _1af) {
                        _1ae.appendChild(node);
                    } else {
                        _1aa(node, cn[_1af < 0 ? 0 : _1af]);
                    }
                } else {
                    switch (_1af) {
                        case "before":
                            _1aa(node, _1ae);
                            break;
                        case "after":
                            _1ac(node, _1ae);
                            break;
                        case "replace":
                            _1ae.parentNode.replaceChild(node, _1ae);
                            break;
                        case "only":
                            d.empty(_1ae);
                            _1ae.appendChild(node);
                            break;
                        case "first":
                            if (_1ae.firstChild) {
                                _1aa(node, _1ae.firstChild);
                                break;
                            }
                        default:
                            _1ae.appendChild(node);
                        }
                }
                return node;
            };
            dojo.boxModel = "content-box";
            if (d.isIE) {
                d.boxModel = document.compatMode == "BackCompat" ? "border-box" : "content-box";
            }
            var gcs;
            if (d.isWebKit) {
                gcs = function (node) {
                    var s;
                    if (node.nodeType == 1) {
                        var dv = node.ownerDocument.defaultView;
                        s = dv.getComputedStyle(node, null);
                        if (!s && node.style) {
                            node.style.display = "";
                            s = dv.getComputedStyle(node, null);
                        }
                    }
                    return s || {};
                };
            } else {
                if (d.isIE) {
                    gcs = function (node) {
                        return node.nodeType == 1 ? node.currentStyle : {};
                    };
                } else {
                    gcs = function (node) {
                        return node.nodeType == 1 ? node.ownerDocument.defaultView.getComputedStyle(node, null) : {};
                    };
                }
            }
            dojo.getComputedStyle = gcs;
            if (!d.isIE) {
                d._toPixelValue = function (_1b0, _1b1) {
                    return parseFloat(_1b1) || 0;
                };
            } else {
                d._toPixelValue = function (_1b2, _1b3) {
                    if (!_1b3) {
                        return 0;
                    }
                    if (_1b3 == "medium") {
                        return 4;
                    }
                    if (_1b3.slice && _1b3.slice(-2) == "px") {
                        return parseFloat(_1b3);
                    }
                    with (_1b2) {
                        var _1b4 = style.left;
                        var _1b5 = runtimeStyle.left;
                        runtimeStyle.left = currentStyle.left;
                        try {
                            style.left = _1b3;
                            _1b3 = style.pixelLeft;
                        } catch (e) {
                            _1b3 = 0;
                        }
                        style.left = _1b4;
                        runtimeStyle.left = _1b5;
                    }
                    return _1b3;
                };
            }
            var px = d._toPixelValue;
            var astr = "DXImageTransform.Microsoft.Alpha";
            var af = function (n, f) {
                try {
                    return n.filters.item(astr);
                } catch (e) {
                    return f ? {} : null;
                }
            };
            dojo._getOpacity = d.isIE < 9 ? function (node) {
                try {
                    return af(node).Opacity / 100;
                } catch (e) {
                    return 1;
                }
            } : function (node) {
                return gcs(node).opacity;
            };
            dojo._setOpacity = d.isIE < 9 ? function (node, _1b6) {
                var ov = _1b6 * 100, _1b7 = _1b6 == 1;
                node.style.zoom = _1b7 ? "" : 1;
                if (!af(node)) {
                    if (_1b7) {
                        return _1b6;
                    }
                    node.style.filter += " progid:" + astr + "(Opacity=" + ov + ")";
                } else {
                    af(node, 1).Opacity = ov;
                }
                af(node, 1).Enabled = !_1b7;
                if (node.nodeName.toLowerCase() == "tr") {
                    d.query("> td", node).forEach(function (i) {
                        d._setOpacity(i, _1b6);
                    });
                }
                return _1b6;
            } : function (node, _1b8) {
                return node.style.opacity = _1b8;
            };
            var _1b9 = {left: true, top: true};
            var _1ba = /margin|padding|width|height|max|min|offset/;
            var _1bb = function (node, type, _1bc) {
                type = type.toLowerCase();
                if (d.isIE) {
                    if (_1bc == "auto") {
                        if (type == "height") {
                            return node.offsetHeight;
                        }
                        if (type == "width") {
                            return node.offsetWidth;
                        }
                    }
                    if (type == "fontweight") {
                        switch (_1bc) {
                            case 700:
                                return "bold";
                            case 400:
                            default:
                                return "normal";
                            }
                    }
                }
                if (!(type in _1b9)) {
                    _1b9[type] = _1ba.test(type);
                }
                return _1b9[type] ? px(node, _1bc) : _1bc;
            };
            var _1bd = d.isIE ? "styleFloat" : "cssFloat", _1be = {"cssFloat": _1bd, "styleFloat": _1bd, "float": _1bd};
            dojo.style = function (node, _1bf, _1c0) {
                var n = byId(node), args = arguments.length, op = (_1bf == "opacity");
                _1bf = _1be[_1bf] || _1bf;
                if (args == 3) {
                    return op ? d._setOpacity(n, _1c0) : n.style[_1bf] = _1c0;
                }
                if (args == 2 && op) {
                    return d._getOpacity(n);
                }
                var s = gcs(n);
                if (args == 2 && typeof _1bf != "string") {
                    for (var x in _1bf) {
                        d.style(node, x, _1bf[x]);
                    }
                    return s;
                }
                return (args == 1) ? s : _1bb(n, _1bf, s[_1bf] || n.style[_1bf]);
            };
            dojo._getPadExtents = function (n, _1c1) {
                var s = _1c1 || gcs(n), l = px(n, s.paddingLeft), t = px(n, s.paddingTop);
                return {l: l, t: t, w: l + px(n, s.paddingRight), h: t + px(n, s.paddingBottom)};
            };
            dojo._getBorderExtents = function (n, _1c2) {
                var ne = "none", s = _1c2 || gcs(n), bl = (s.borderLeftStyle != ne ? px(n, s.borderLeftWidth) : 0), bt = (s.borderTopStyle != ne ? px(n, s.borderTopWidth) : 0);
                return {l: bl, t: bt, w: bl + (s.borderRightStyle != ne ? px(n, s.borderRightWidth) : 0), h: bt + (s.borderBottomStyle != ne ? px(n, s.borderBottomWidth) : 0)};
            };
            dojo._getPadBorderExtents = function (n, _1c3) {
                var s = _1c3 || gcs(n), p = d._getPadExtents(n, s), b = d._getBorderExtents(n, s);
                return {l: p.l + b.l, t: p.t + b.t, w: p.w + b.w, h: p.h + b.h};
            };
            dojo._getMarginExtents = function (n, _1c4) {
                var s = _1c4 || gcs(n), l = px(n, s.marginLeft), t = px(n, s.marginTop), r = px(n, s.marginRight), b = px(n, s.marginBottom);
                if (d.isWebKit && (s.position != "absolute")) {
                    r = l;
                }
                return {l: l, t: t, w: l + r, h: t + b};
            };
            dojo._getMarginBox = function (node, _1c5) {
                var s = _1c5 || gcs(node), me = d._getMarginExtents(node, s);
                var l = node.offsetLeft - me.l, t = node.offsetTop - me.t, p = node.parentNode;
                if (d.isMoz) {
                    var sl = parseFloat(s.left), st = parseFloat(s.top);
                    if (!isNaN(sl) && !isNaN(st)) {
                        l = sl, t = st;
                    } else {
                        if (p && p.style) {
                            var pcs = gcs(p);
                            if (pcs.overflow != "visible") {
                                var be = d._getBorderExtents(p, pcs);
                                l += be.l, t += be.t;
                            }
                        }
                    }
                } else {
                    if (d.isOpera || (d.isIE > 7 && !d.isQuirks)) {
                        if (p) {
                            be = d._getBorderExtents(p);
                            l -= be.l;
                            t -= be.t;
                        }
                    }
                }
                return {l: l, t: t, w: node.offsetWidth + me.w, h: node.offsetHeight + me.h};
            };
            dojo._getMarginSize = function (node, _1c6) {
                node = byId(node);
                var me = d._getMarginExtents(node, _1c6 || gcs(node));
                var size = node.getBoundingClientRect();
                return {w: (size.right - size.left) + me.w, h: (size.bottom - size.top) + me.h};
            };
            dojo._getContentBox = function (node, _1c7) {
                var s = _1c7 || gcs(node), pe = d._getPadExtents(node, s), be = d._getBorderExtents(node, s), w = node.clientWidth, h;
                if (!w) {
                    w = node.offsetWidth, h = node.offsetHeight;
                } else {
                    h = node.clientHeight, be.w = be.h = 0;
                }
                if (d.isOpera) {
                    pe.l += be.l;
                    pe.t += be.t;
                }
                return {l: pe.l, t: pe.t, w: w - pe.w - be.w, h: h - pe.h - be.h};
            };
            dojo._getBorderBox = function (node, _1c8) {
                var s = _1c8 || gcs(node), pe = d._getPadExtents(node, s), cb = d._getContentBox(node, s);
                return {l: cb.l - pe.l, t: cb.t - pe.t, w: cb.w + pe.w, h: cb.h + pe.h};
            };
            dojo._setBox = function (node, l, t, w, h, u) {
                u = u || "px";
                var s = node.style;
                if (!isNaN(l)) {
                    s.left = l + u;
                }
                if (!isNaN(t)) {
                    s.top = t + u;
                }
                if (w >= 0) {
                    s.width = w + u;
                }
                if (h >= 0) {
                    s.height = h + u;
                }
            };
            dojo._isButtonTag = function (node) {
                return node.tagName == "BUTTON" || node.tagName == "INPUT" && (node.getAttribute("type") || "").toUpperCase() == "BUTTON";
            };
            dojo._usesBorderBox = function (node) {
                var n = node.tagName;
                return d.boxModel == "border-box" || n == "TABLE" || d._isButtonTag(node);
            };
            dojo._setContentSize = function (node, _1c9, _1ca, _1cb) {
                if (d._usesBorderBox(node)) {
                    var pb = d._getPadBorderExtents(node, _1cb);
                    if (_1c9 >= 0) {
                        _1c9 += pb.w;
                    }
                    if (_1ca >= 0) {
                        _1ca += pb.h;
                    }
                }
                d._setBox(node, NaN, NaN, _1c9, _1ca);
            };
            dojo._setMarginBox = function (node, _1cc, _1cd, _1ce, _1cf, _1d0) {
                var s = _1d0 || gcs(node), bb = d._usesBorderBox(node), pb = bb ? _1d1 : d._getPadBorderExtents(node, s);
                if (d.isWebKit) {
                    if (d._isButtonTag(node)) {
                        var ns = node.style;
                        if (_1ce >= 0 && !ns.width) {
                            ns.width = "4px";
                        }
                        if (_1cf >= 0 && !ns.height) {
                            ns.height = "4px";
                        }
                    }
                }
                var mb = d._getMarginExtents(node, s);
                if (_1ce >= 0) {
                    _1ce = Math.max(_1ce - pb.w - mb.w, 0);
                }
                if (_1cf >= 0) {
                    _1cf = Math.max(_1cf - pb.h - mb.h, 0);
                }
                d._setBox(node, _1cc, _1cd, _1ce, _1cf);
            };
            var _1d1 = {l: 0, t: 0, w: 0, h: 0};
            dojo.marginBox = function (node, box) {
                var n = byId(node), s = gcs(n), b = box;
                return !b ? d._getMarginBox(n, s) : d._setMarginBox(n, b.l, b.t, b.w, b.h, s);
            };
            dojo.contentBox = function (node, box) {
                var n = byId(node), s = gcs(n), b = box;
                return !b ? d._getContentBox(n, s) : d._setContentSize(n, b.w, b.h, s);
            };
            var _1d2 = function (node, prop) {
                if (!(node = (node || 0).parentNode)) {
                    return 0;
                }
                var val, _1d3 = 0, _1d4 = d.body();
                while (node && node.style) {
                    if (gcs(node).position == "fixed") {
                        return 0;
                    }
                    val = node[prop];
                    if (val) {
                        _1d3 += val - 0;
                        if (node == _1d4) {
                            break;
                        }
                    }
                    node = node.parentNode;
                }
                return _1d3;
            };
            dojo._docScroll = function () {
                var n = d.global;
                return "pageXOffset" in n ? {x: n.pageXOffset, y: n.pageYOffset} : (n = d.isQuirks ? d.doc.body : d.doc.documentElement, {x: d._fixIeBiDiScrollLeft(n.scrollLeft || 0), y: n.scrollTop || 0});
            };
            dojo._isBodyLtr = function () {
                return "_bodyLtr" in d ? d._bodyLtr : d._bodyLtr = (d.body().dir || d.doc.documentElement.dir || "ltr").toLowerCase() == "ltr";
            };
            dojo._getIeDocumentElementOffset = function () {
                var de = d.doc.documentElement;
                if (d.isIE < 8) {
                    var r = de.getBoundingClientRect();
                    var l = r.left, t = r.top;
                    if (d.isIE < 7) {
                        l += de.clientLeft;
                        t += de.clientTop;
                    }
                    return {x: l < 0 ? 0 : l, y: t < 0 ? 0 : t};
                } else {
                    return {x: 0, y: 0};
                }
            };
            dojo._fixIeBiDiScrollLeft = function (_1d5) {
                var ie = d.isIE;
                if (ie && !d._isBodyLtr()) {
                    var qk = d.isQuirks, de = qk ? d.doc.body : d.doc.documentElement;
                    if (ie == 6 && !qk && d.global.frameElement && de.scrollHeight > de.clientHeight) {
                        _1d5 += de.clientLeft;
                    }
                    return (ie < 8 || qk) ? (_1d5 + de.clientWidth - de.scrollWidth) : -_1d5;
                }
                return _1d5;
            };
            dojo._abs = dojo.position = function (node, _1d6) {
                node = byId(node);
                var db = d.body(), dh = db.parentNode, ret = node.getBoundingClientRect();
                ret = {x: ret.left, y: ret.top, w: ret.right - ret.left, h: ret.bottom - ret.top};
                if (d.isIE) {
                    var _1d7 = d._getIeDocumentElementOffset();
                    ret.x -= _1d7.x + (d.isQuirks ? db.clientLeft + db.offsetLeft : 0);
                    ret.y -= _1d7.y + (d.isQuirks ? db.clientTop + db.offsetTop : 0);
                } else {
                    if (d.isFF == 3) {
                        var cs = gcs(dh);
                        ret.x -= px(dh, cs.marginLeft) + px(dh, cs.borderLeftWidth);
                        ret.y -= px(dh, cs.marginTop) + px(dh, cs.borderTopWidth);
                    }
                }
                if (_1d6) {
                    var _1d8 = d._docScroll();
                    ret.x += _1d8.x;
                    ret.y += _1d8.y;
                }
                return ret;
            };
            dojo.coords = function (node, _1d9) {
                var n = byId(node), s = gcs(n), mb = d._getMarginBox(n, s);
                var abs = d.position(n, _1d9);
                mb.x = abs.x;
                mb.y = abs.y;
                return mb;
            };
            var _1da = {"class": "className", "for": "htmlFor", tabindex: "tabIndex", readonly: "readOnly", colspan: "colSpan", frameborder: "frameBorder", rowspan: "rowSpan", valuetype: "valueType"}, _1db = {classname: "class", htmlfor: "for", tabindex: "tabIndex", readonly: "readOnly"}, _1dc = {innerHTML: 1, className: 1, htmlFor: d.isIE, value: 1};
            var _1dd = function (name) {
                return _1db[name.toLowerCase()] || name;
            };
            var _1de = function (node, name) {
                var attr = node.getAttributeNode && node.getAttributeNode(name);
                return attr && attr.specified;
            };
            dojo.hasAttr = function (node, name) {
                var lc = name.toLowerCase();
                return _1dc[_1da[lc] || name] || _1de(byId(node), _1db[lc] || name);
            };
            var _1df = {}, _1e0 = 0, _1e1 = dojo._scopeName + "attrid", _1e2 = {col: 1, colgroup: 1, table: 1, tbody: 1, tfoot: 1, thead: 1, tr: 1, title: 1};
            dojo.attr = function (node, name, _1e3) {
                node = byId(node);
                var args = arguments.length, prop;
                if (args == 2 && typeof name != "string") {
                    for (var x in name) {
                        d.attr(node, x, name[x]);
                    }
                    return node;
                }
                var lc = name.toLowerCase(), _1e4 = _1da[lc] || name, _1e5 = _1dc[_1e4], _1e6 = _1db[lc] || name;
                if (args == 3) {
                    do {
                        if (_1e4 == "style" && typeof _1e3 != "string") {
                            d.style(node, _1e3);
                            break;
                        }
                        if (_1e4 == "innerHTML") {
                            if (d.isIE && node.tagName.toLowerCase() in _1e2) {
                                d.empty(node);
                                node.appendChild(d._toDom(_1e3, node.ownerDocument));
                            } else {
                                node[_1e4] = _1e3;
                            }
                            break;
                        }
                        if (d.isFunction(_1e3)) {
                            var _1e7 = d.attr(node, _1e1);
                            if (!_1e7) {
                                _1e7 = _1e0++;
                                d.attr(node, _1e1, _1e7);
                            }
                            if (!_1df[_1e7]) {
                                _1df[_1e7] = {};
                            }
                            var h = _1df[_1e7][_1e4];
                            if (h) {
                                d.disconnect(h);
                            } else {
                                try {
                                    delete node[_1e4];
                                } catch (e) {
                                }
                            }
                            _1df[_1e7][_1e4] = d.connect(node, _1e4, _1e3);
                            break;
                        }
                        if (_1e5 || typeof _1e3 == "boolean") {
                            node[_1e4] = _1e3;
                            break;
                        }
                        node.setAttribute(_1e6, _1e3);
                    } while (false);
                    return node;
                }
                _1e3 = node[_1e4];
                if (_1e5 && typeof _1e3 != "undefined") {
                    return _1e3;
                }
                if (_1e4 != "href" && (typeof _1e3 == "boolean" || d.isFunction(_1e3))) {
                    return _1e3;
                }
                return _1de(node, _1e6) ? node.getAttribute(_1e6) : null;
            };
            dojo.removeAttr = function (node, name) {
                byId(node).removeAttribute(_1dd(name));
            };
            dojo.getNodeProp = function (node, name) {
                node = byId(node);
                var lc = name.toLowerCase(), _1e8 = _1da[lc] || name;
                if ((_1e8 in node) && _1e8 != "href") {
                    return node[_1e8];
                }
                var _1e9 = _1db[lc] || name;
                return _1de(node, _1e9) ? node.getAttribute(_1e9) : null;
            };
            dojo.create = function (tag, _1ea, _1eb, pos) {
                var doc = d.doc;
                if (_1eb) {
                    _1eb = byId(_1eb);
                    doc = _1eb.ownerDocument;
                }
                if (typeof tag == "string") {
                    tag = doc.createElement(tag);
                }
                if (_1ea) {
                    d.attr(tag, _1ea);
                }
                if (_1eb) {
                    d.place(tag, _1eb, pos);
                }
                return tag;
            };
            d.empty = d.isIE ? function (node) {
                node = byId(node);
                for (var c; c = node.lastChild; ) {
                    d.destroy(c);
                }
            } : function (node) {
                byId(node).innerHTML = "";
            };
            var _1ec = {option: ["select"], tbody: ["table"], thead: ["table"], tfoot: ["table"], tr: ["table", "tbody"], td: ["table", "tbody", "tr"], th: ["table", "thead", "tr"], legend: ["fieldset"], caption: ["table"], colgroup: ["table"], col: ["table", "colgroup"], li: ["ul"]}, _1ed = /<\s*([\w\:]+)/, _1ee = {}, _1ef = 0, _1f0 = "__" + d._scopeName + "ToDomId";
            for (var _1f1 in _1ec) {
                if (_1ec.hasOwnProperty(_1f1)) {
                    var tw = _1ec[_1f1];
                    tw.pre = _1f1 == "option" ? "<select multiple=\"multiple\">" : "<" + tw.join("><") + ">";
                    tw.post = "</" + tw.reverse().join("></") + ">";
                }
            }
            d._toDom = function (frag, doc) {
                doc = doc || d.doc;
                var _1f2 = doc[_1f0];
                if (!_1f2) {
                    doc[_1f0] = _1f2 = ++_1ef + "";
                    _1ee[_1f2] = doc.createElement("div");
                }
                frag += "";
                var _1f3 = frag.match(_1ed), tag = _1f3 ? _1f3[1].toLowerCase() : "", _1f4 = _1ee[_1f2], wrap, i, fc, df;
                if (_1f3 && _1ec[tag]) {
                    wrap = _1ec[tag];
                    _1f4.innerHTML = wrap.pre + frag + wrap.post;
                    for (i = wrap.length; i; --i) {
                        _1f4 = _1f4.firstChild;
                    }
                } else {
                    _1f4.innerHTML = frag;
                }
                if (_1f4.childNodes.length == 1) {
                    return _1f4.removeChild(_1f4.firstChild);
                }
                df = doc.createDocumentFragment();
                while (fc = _1f4.firstChild) {
                    df.appendChild(fc);
                }
                return df;
            };
            var _1f5 = "className";
            dojo.hasClass = function (node, _1f6) {
                return ((" " + byId(node)[_1f5] + " ").indexOf(" " + _1f6 + " ") >= 0);
            };
            var _1f7 = /\s+/, a1 = [""], _1f8 = {}, _1f9 = function (s) {
                if (typeof s == "string" || s instanceof String) {
                    if (s.indexOf(" ") < 0) {
                        a1[0] = s;
                        return a1;
                    } else {
                        return s.split(_1f7);
                    }
                }
                return s || "";
            };
            dojo.addClass = function (node, _1fa) {
                node = byId(node);
                _1fa = _1f9(_1fa);
                var cls = node[_1f5], _1fb;
                cls = cls ? " " + cls + " " : " ";
                _1fb = cls.length;
                for (var i = 0, len = _1fa.length, c; i < len; ++i) {
                    c = _1fa[i];
                    if (c && cls.indexOf(" " + c + " ") < 0) {
                        cls += c + " ";
                    }
                }
                if (_1fb < cls.length) {
                    node[_1f5] = cls.substr(1, cls.length - 2);
                }
            };
            dojo.removeClass = function (node, _1fc) {
                node = byId(node);
                var cls;
                if (_1fc !== undefined) {
                    _1fc = _1f9(_1fc);
                    cls = " " + node[_1f5] + " ";
                    for (var i = 0, len = _1fc.length; i < len; ++i) {
                        cls = cls.replace(" " + _1fc[i] + " ", " ");
                    }
                    cls = d.trim(cls);
                } else {
                    cls = "";
                }
                if (node[_1f5] != cls) {
                    node[_1f5] = cls;
                }
            };
            dojo.replaceClass = function (node, _1fd, _1fe) {
                node = byId(node);
                _1f8.className = node.className;
                dojo.removeClass(_1f8, _1fe);
                dojo.addClass(_1f8, _1fd);
                if (node.className !== _1f8.className) {
                    node.className = _1f8.className;
                }
            };
            dojo.toggleClass = function (node, _1ff, _200) {
                if (_200 === undefined) {
                    _200 = !d.hasClass(node, _1ff);
                }
                d[_200 ? "addClass" : "removeClass"](node, _1ff);
            };
        })();
    }
    if (!dojo._hasResource["dojo._base.NodeList"]) {
        dojo._hasResource["dojo._base.NodeList"] = true;
        dojo.provide("dojo._base.NodeList");
        (function () {
            var d = dojo;
            var ap = Array.prototype, aps = ap.slice, apc = ap.concat;
            var tnl = function (a, _201, _202) {
                if (!a.sort) {
                    a = aps.call(a, 0);
                }
                var ctor = _202 || this._NodeListCtor || d._NodeListCtor;
                a.constructor = ctor;
                dojo._mixin(a, ctor.prototype);
                a._NodeListCtor = ctor;
                return _201 ? a._stash(_201) : a;
            };
            var _203 = function (f, a, o) {
                a = [0].concat(aps.call(a, 0));
                o = o || d.global;
                return function (node) {
                    a[0] = node;
                    return f.apply(o, a);
                };
            };
            var _204 = function (f, o) {
                return function () {
                    this.forEach(_203(f, arguments, o));
                    return this;
                };
            };
            var _205 = function (f, o) {
                return function () {
                    return this.map(_203(f, arguments, o));
                };
            };
            var _206 = function (f, o) {
                return function () {
                    return this.filter(_203(f, arguments, o));
                };
            };
            var _207 = function (f, g, o) {
                return function () {
                    var a = arguments, body = _203(f, a, o);
                    if (g.call(o || d.global, a)) {
                        return this.map(body);
                    }
                    this.forEach(body);
                    return this;
                };
            };
            var _208 = function (a) {
                return a.length == 1 && (typeof a[0] == "string");
            };
            var _209 = function (node) {
                var p = node.parentNode;
                if (p) {
                    p.removeChild(node);
                }
            };
            dojo.NodeList = function () {
                return tnl(Array.apply(null, arguments));
            };
            d._NodeListCtor = d.NodeList;
            var nl = d.NodeList, nlp = nl.prototype;
            nl._wrap = nlp._wrap = tnl;
            nl._adaptAsMap = _205;
            nl._adaptAsForEach = _204;
            nl._adaptAsFilter = _206;
            nl._adaptWithCondition = _207;
            d.forEach(["slice", "splice"], function (name) {
                var f = ap[name];
                nlp[name] = function () {
                    return this._wrap(f.apply(this, arguments), name == "slice" ? this : null);
                };
            });
            d.forEach(["indexOf", "lastIndexOf", "every", "some"], function (name) {
                var f = d[name];
                nlp[name] = function () {
                    return f.apply(d, [this].concat(aps.call(arguments, 0)));
                };
            });
            d.forEach(["attr", "style"], function (name) {
                nlp[name] = _207(d[name], _208);
            });
            d.forEach(["connect", "addClass", "removeClass", "replaceClass", "toggleClass", "empty", "removeAttr"], function (name) {
                nlp[name] = _204(d[name]);
            });
            dojo.extend(dojo.NodeList, {_normalize: function (_20a, _20b) {
                    var _20c = _20a.parse === true ? true : false;
                    if (typeof _20a.template == "string") {
                        var _20d = _20a.templateFunc || (dojo.string && dojo.string.substitute);
                        _20a = _20d ? _20d(_20a.template, _20a) : _20a;
                    }
                    var type = (typeof _20a);
                    if (type == "string" || type == "number") {
                        _20a = dojo._toDom(_20a, (_20b && _20b.ownerDocument));
                        if (_20a.nodeType == 11) {
                            _20a = dojo._toArray(_20a.childNodes);
                        } else {
                            _20a = [_20a];
                        }
                    } else {
                        if (!dojo.isArrayLike(_20a)) {
                            _20a = [_20a];
                        } else {
                            if (!dojo.isArray(_20a)) {
                                _20a = dojo._toArray(_20a);
                            }
                        }
                    }
                    if (_20c) {
                        _20a._runParse = true;
                    }
                    return _20a;
                }, _cloneNode: function (node) {
                    return node.cloneNode(true);
                }, _place: function (ary, _20e, _20f, _210) {
                    if (_20e.nodeType != 1 && _20f == "only") {
                        return;
                    }
                    var _211 = _20e, _212;
                    var _213 = ary.length;
                    for (var i = _213 - 1; i >= 0; i--) {
                        var node = (_210 ? this._cloneNode(ary[i]) : ary[i]);
                        if (ary._runParse && dojo.parser && dojo.parser.parse) {
                            if (!_212) {
                                _212 = _211.ownerDocument.createElement("div");
                            }
                            _212.appendChild(node);
                            dojo.parser.parse(_212);
                            node = _212.firstChild;
                            while (_212.firstChild) {
                                _212.removeChild(_212.firstChild);
                            }
                        }
                        if (i == _213 - 1) {
                            dojo.place(node, _211, _20f);
                        } else {
                            _211.parentNode.insertBefore(node, _211);
                        }
                        _211 = node;
                    }
                }, _stash: function (_214) {
                    this._parent = _214;
                    return this;
                }, end: function () {
                    if (this._parent) {
                        return this._parent;
                    } else {
                        return new this._NodeListCtor();
                    }
                }, concat: function (item) {
                    var t = d.isArray(this) ? this : aps.call(this, 0), m = d.map(arguments, function (a) {
                        return a && !d.isArray(a) && (typeof NodeList != "undefined" && a.constructor === NodeList || a.constructor === this._NodeListCtor) ? aps.call(a, 0) : a;
                    });
                    return this._wrap(apc.apply(t, m), this);
                }, map: function (func, obj) {
                    return this._wrap(d.map(this, func, obj), this);
                }, forEach: function (_215, _216) {
                    d.forEach(this, _215, _216);
                    return this;
                }, coords: _205(d.coords), position: _205(d.position), place: function (_217, _218) {
                    var item = d.query(_217)[0];
                    return this.forEach(function (node) {
                        d.place(node, item, _218);
                    });
                }, orphan: function (_219) {
                    return (_219 ? d._filterQueryResult(this, _219) : this).forEach(_209);
                }, adopt: function (_21a, _21b) {
                    return d.query(_21a).place(this[0], _21b)._stash(this);
                }, query: function (_21c) {
                    if (!_21c) {
                        return this;
                    }
                    var ret = this.map(function (node) {
                        return d.query(_21c, node).filter(function (_21d) {
                            return _21d !== undefined;
                        });
                    });
                    return this._wrap(apc.apply([], ret), this);
                }, filter: function (_21e) {
                    var a = arguments, _21f = this, _220 = 0;
                    if (typeof _21e == "string") {
                        _21f = d._filterQueryResult(this, a[0]);
                        if (a.length == 1) {
                            return _21f._stash(this);
                        }
                        _220 = 1;
                    }
                    return this._wrap(d.filter(_21f, a[_220], a[_220 + 1]), this);
                }, addContent: function (_221, _222) {
                    _221 = this._normalize(_221, this[0]);
                    for (var i = 0, node; (node = this[i]); i++) {
                        this._place(_221, node, _222, i > 0);
                    }
                    return this;
                }, instantiate: function (_223, _224) {
                    var c = d.isFunction(_223) ? _223 : d.getObject(_223);
                    _224 = _224 || {};
                    return this.forEach(function (node) {
                        new c(_224, node);
                    });
                }, at: function () {
                    var t = new this._NodeListCtor();
                    d.forEach(arguments, function (i) {
                        if (i < 0) {
                            i = this.length + i;
                        }
                        if (this[i]) {
                            t.push(this[i]);
                        }
                    }, this);
                    return t._stash(this);
                }});
            nl.events = ["blur", "focus", "change", "click", "error", "keydown", "keypress", "keyup", "load", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "submit"];
            d.forEach(nl.events, function (evt) {
                var _225 = "on" + evt;
                nlp[_225] = function (a, b) {
                    return this.connect(_225, a, b);
                };
            });
        })();
    }
    if (!dojo._hasResource["dojo._base.query"]) {
        dojo._hasResource["dojo._base.query"] = true;
        (function () {
            var _226 = function (d) {
                var trim = d.trim;
                var each = d.forEach;
                var qlc = (d._NodeListCtor = d.NodeList);
                var _227 = function () {
                    return d.doc;
                };
                var _228 = ((d.isWebKit || d.isMozilla) && ((_227().compatMode) == "BackCompat"));
                var _229 = ">~+";
                var _22a = false;
                var _22b = function () {
                    return true;
                };
                var _22c = function (_22d) {
                    if (_229.indexOf(_22d.slice(-1)) >= 0) {
                        _22d += " * ";
                    } else {
                        _22d += " ";
                    }
                    var ts = function (s, e) {
                        return trim(_22d.slice(s, e));
                    };
                    var _22e = [];
                    var _22f = -1, _230 = -1, _231 = -1, _232 = -1, _233 = -1, inId = -1, _234 = -1, lc = "", cc = "", _235;
                    var x = 0, ql = _22d.length, _236 = null, _237 = null;
                    var _238 = function () {
                        if (_234 >= 0) {
                            var tv = (_234 == x) ? null : ts(_234, x);
                            _236[(_229.indexOf(tv) < 0) ? "tag" : "oper"] = tv;
                            _234 = -1;
                        }
                    };
                    var _239 = function () {
                        if (inId >= 0) {
                            _236.id = ts(inId, x).replace(/\\/g, "");
                            inId = -1;
                        }
                    };
                    var _23a = function () {
                        if (_233 >= 0) {
                            _236.classes.push(ts(_233 + 1, x).replace(/\\/g, ""));
                            _233 = -1;
                        }
                    };
                    var _23b = function () {
                        _239();
                        _238();
                        _23a();
                    };
                    var _23c = function () {
                        _23b();
                        if (_232 >= 0) {
                            _236.pseudos.push({name: ts(_232 + 1, x)});
                        }
                        _236.loops = (_236.pseudos.length || _236.attrs.length || _236.classes.length);
                        _236.oquery = _236.query = ts(_235, x);
                        _236.otag = _236.tag = (_236["oper"]) ? null : (_236.tag || "*");
                        if (_236.tag) {
                            _236.tag = _236.tag.toUpperCase();
                        }
                        if (_22e.length && (_22e[_22e.length - 1].oper)) {
                            _236.infixOper = _22e.pop();
                            _236.query = _236.infixOper.query + " " + _236.query;
                        }
                        _22e.push(_236);
                        _236 = null;
                    };
                    for (; lc = cc, cc = _22d.charAt(x), x < ql; x++) {
                        if (lc == "\\") {
                            continue;
                        }
                        if (!_236) {
                            _235 = x;
                            _236 = {query: null, pseudos: [], attrs: [], classes: [], tag: null, oper: null, id: null, getTag: function () {
                                    return (_22a) ? this.otag : this.tag;
                                }};
                            _234 = x;
                        }
                        if (_22f >= 0) {
                            if (cc == "]") {
                                if (!_237.attr) {
                                    _237.attr = ts(_22f + 1, x);
                                } else {
                                    _237.matchFor = ts((_231 || _22f + 1), x);
                                }
                                var cmf = _237.matchFor;
                                if (cmf) {
                                    if ((cmf.charAt(0) == "\"") || (cmf.charAt(0) == "'")) {
                                        _237.matchFor = cmf.slice(1, -1);
                                    }
                                }
                                _236.attrs.push(_237);
                                _237 = null;
                                _22f = _231 = -1;
                            } else {
                                if (cc == "=") {
                                    var _23d = ("|~^$*".indexOf(lc) >= 0) ? lc : "";
                                    _237.type = _23d + cc;
                                    _237.attr = ts(_22f + 1, x - _23d.length);
                                    _231 = x + 1;
                                }
                            }
                        } else {
                            if (_230 >= 0) {
                                if (cc == ")") {
                                    if (_232 >= 0) {
                                        _237.value = ts(_230 + 1, x);
                                    }
                                    _232 = _230 = -1;
                                }
                            } else {
                                if (cc == "#") {
                                    _23b();
                                    inId = x + 1;
                                } else {
                                    if (cc == ".") {
                                        _23b();
                                        _233 = x;
                                    } else {
                                        if (cc == ":") {
                                            _23b();
                                            _232 = x;
                                        } else {
                                            if (cc == "[") {
                                                _23b();
                                                _22f = x;
                                                _237 = {};
                                            } else {
                                                if (cc == "(") {
                                                    if (_232 >= 0) {
                                                        _237 = {name: ts(_232 + 1, x), value: null};
                                                        _236.pseudos.push(_237);
                                                    }
                                                    _230 = x;
                                                } else {
                                                    if ((cc == " ") && (lc != cc)) {
                                                        _23c();
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return _22e;
                };
                var _23e = function (_23f, _240) {
                    if (!_23f) {
                        return _240;
                    }
                    if (!_240) {
                        return _23f;
                    }
                    return function () {
                        return _23f.apply(window, arguments) && _240.apply(window, arguments);
                    };
                };
                var _241 = function (i, arr) {
                    var r = arr || [];
                    if (i) {
                        r.push(i);
                    }
                    return r;
                };
                var _242 = function (n) {
                    return (1 == n.nodeType);
                };
                var _243 = "";
                var _244 = function (elem, attr) {
                    if (!elem) {
                        return _243;
                    }
                    if (attr == "class") {
                        return elem.className || _243;
                    }
                    if (attr == "for") {
                        return elem.htmlFor || _243;
                    }
                    if (attr == "style") {
                        return elem.style.cssText || _243;
                    }
                    return (_22a ? elem.getAttribute(attr) : elem.getAttribute(attr, 2)) || _243;
                };
                var _245 = {"*=": function (attr, _246) {
                        return function (elem) {
                            return (_244(elem, attr).indexOf(_246) >= 0);
                        };
                    }, "^=": function (attr, _247) {
                        return function (elem) {
                            return (_244(elem, attr).indexOf(_247) == 0);
                        };
                    }, "$=": function (attr, _248) {
                        var tval = " " + _248;
                        return function (elem) {
                            var ea = " " + _244(elem, attr);
                            return (ea.lastIndexOf(_248) == (ea.length - _248.length));
                        };
                    }, "~=": function (attr, _249) {
                        var tval = " " + _249 + " ";
                        return function (elem) {
                            var ea = " " + _244(elem, attr) + " ";
                            return (ea.indexOf(tval) >= 0);
                        };
                    }, "|=": function (attr, _24a) {
                        var _24b = " " + _24a + "-";
                        return function (elem) {
                            var ea = " " + _244(elem, attr);
                            return ((ea == _24a) || (ea.indexOf(_24b) == 0));
                        };
                    }, "=": function (attr, _24c) {
                        return function (elem) {
                            return (_244(elem, attr) == _24c);
                        };
                    }};
                var _24d = (typeof _227().firstChild.nextElementSibling == "undefined");
                var _24e = !_24d ? "nextElementSibling" : "nextSibling";
                var _24f = !_24d ? "previousElementSibling" : "previousSibling";
                var _250 = (_24d ? _242 : _22b);
                var _251 = function (node) {
                    while (node = node[_24f]) {
                        if (_250(node)) {
                            return false;
                        }
                    }
                    return true;
                };
                var _252 = function (node) {
                    while (node = node[_24e]) {
                        if (_250(node)) {
                            return false;
                        }
                    }
                    return true;
                };
                var _253 = function (node) {
                    var root = node.parentNode;
                    var i = 0, tret = root.children || root.childNodes, ci = (node["_i"] || -1), cl = (root["_l"] || -1);
                    if (!tret) {
                        return -1;
                    }
                    var l = tret.length;
                    if (cl == l && ci >= 0 && cl >= 0) {
                        return ci;
                    }
                    root["_l"] = l;
                    ci = -1;
                    for (var te = root["firstElementChild"] || root["firstChild"]; te; te = te[_24e]) {
                        if (_250(te)) {
                            te["_i"] = ++i;
                            if (node === te) {
                                ci = i;
                            }
                        }
                    }
                    return ci;
                };
                var _254 = function (elem) {
                    return !((_253(elem)) % 2);
                };
                var _255 = function (elem) {
                    return ((_253(elem)) % 2);
                };
                var _256 = {"checked": function (name, _257) {
                        return function (elem) {
                            return !!("checked" in elem ? elem.checked : elem.selected);
                        };
                    }, "first-child": function () {
                        return _251;
                    }, "last-child": function () {
                        return _252;
                    }, "only-child": function (name, _258) {
                        return function (node) {
                            if (!_251(node)) {
                                return false;
                            }
                            if (!_252(node)) {
                                return false;
                            }
                            return true;
                        };
                    }, "empty": function (name, _259) {
                        return function (elem) {
                            var cn = elem.childNodes;
                            var cnl = elem.childNodes.length;
                            for (var x = cnl - 1; x >= 0; x--) {
                                var nt = cn[x].nodeType;
                                if ((nt === 1) || (nt == 3)) {
                                    return false;
                                }
                            }
                            return true;
                        };
                    }, "contains": function (name, _25a) {
                        var cz = _25a.charAt(0);
                        if (cz == "\"" || cz == "'") {
                            _25a = _25a.slice(1, -1);
                        }
                        return function (elem) {
                            return (elem.innerHTML.indexOf(_25a) >= 0);
                        };
                    }, "not": function (name, _25b) {
                        var p = _22c(_25b)[0];
                        var _25c = {el: 1};
                        if (p.tag != "*") {
                            _25c.tag = 1;
                        }
                        if (!p.classes.length) {
                            _25c.classes = 1;
                        }
                        var ntf = _25d(p, _25c);
                        return function (elem) {
                            return (!ntf(elem));
                        };
                    }, "nth-child": function (name, _25e) {
                        var pi = parseInt;
                        if (_25e == "odd") {
                            return _255;
                        } else {
                            if (_25e == "even") {
                                return _254;
                            }
                        }
                        if (_25e.indexOf("n") != -1) {
                            var _25f = _25e.split("n", 2);
                            var pred = _25f[0] ? ((_25f[0] == "-") ? -1 : pi(_25f[0])) : 1;
                            var idx = _25f[1] ? pi(_25f[1]) : 0;
                            var lb = 0, ub = -1;
                            if (pred > 0) {
                                if (idx < 0) {
                                    idx = (idx % pred) && (pred + (idx % pred));
                                } else {
                                    if (idx > 0) {
                                        if (idx >= pred) {
                                            lb = idx - idx % pred;
                                        }
                                        idx = idx % pred;
                                    }
                                }
                            } else {
                                if (pred < 0) {
                                    pred *= -1;
                                    if (idx > 0) {
                                        ub = idx;
                                        idx = idx % pred;
                                    }
                                }
                            }
                            if (pred > 0) {
                                return function (elem) {
                                    var i = _253(elem);
                                    return (i >= lb) && (ub < 0 || i <= ub) && ((i % pred) == idx);
                                };
                            } else {
                                _25e = idx;
                            }
                        }
                        var _260 = pi(_25e);
                        return function (elem) {
                            return (_253(elem) == _260);
                        };
                    }};
                var _261 = (d.isIE < 9 || (dojo.isIE && dojo.isQuirks)) ? function (cond) {
                    var clc = cond.toLowerCase();
                    if (clc == "class") {
                        cond = "className";
                    }
                    return function (elem) {
                        return (_22a ? elem.getAttribute(cond) : elem[cond] || elem[clc]);
                    };
                } : function (cond) {
                    return function (elem) {
                        return (elem && elem.getAttribute && elem.hasAttribute(cond));
                    };
                };
                var _25d = function (_262, _263) {
                    if (!_262) {
                        return _22b;
                    }
                    _263 = _263 || {};
                    var ff = null;
                    if (!("el" in _263)) {
                        ff = _23e(ff, _242);
                    }
                    if (!("tag" in _263)) {
                        if (_262.tag != "*") {
                            ff = _23e(ff, function (elem) {
                                return (elem && (elem.tagName == _262.getTag()));
                            });
                        }
                    }
                    if (!("classes" in _263)) {
                        each(_262.classes, function (_264, idx, arr) {
                            var re = new RegExp("(?:^|\\s)" + _264 + "(?:\\s|$)");
                            ff = _23e(ff, function (elem) {
                                return re.test(elem.className);
                            });
                            ff.count = idx;
                        });
                    }
                    if (!("pseudos" in _263)) {
                        each(_262.pseudos, function (_265) {
                            var pn = _265.name;
                            if (_256[pn]) {
                                ff = _23e(ff, _256[pn](pn, _265.value));
                            }
                        });
                    }
                    if (!("attrs" in _263)) {
                        each(_262.attrs, function (attr) {
                            var _266;
                            var a = attr.attr;
                            if (attr.type && _245[attr.type]) {
                                _266 = _245[attr.type](a, attr.matchFor);
                            } else {
                                if (a.length) {
                                    _266 = _261(a);
                                }
                            }
                            if (_266) {
                                ff = _23e(ff, _266);
                            }
                        });
                    }
                    if (!("id" in _263)) {
                        if (_262.id) {
                            ff = _23e(ff, function (elem) {
                                return (!!elem && (elem.id == _262.id));
                            });
                        }
                    }
                    if (!ff) {
                        if (!("default" in _263)) {
                            ff = _22b;
                        }
                    }
                    return ff;
                };
                var _267 = function (_268) {
                    return function (node, ret, bag) {
                        while (node = node[_24e]) {
                            if (_24d && (!_242(node))) {
                                continue;
                            }
                            if ((!bag || _269(node, bag)) && _268(node)) {
                                ret.push(node);
                            }
                            break;
                        }
                        return ret;
                    };
                };
                var _26a = function (_26b) {
                    return function (root, ret, bag) {
                        var te = root[_24e];
                        while (te) {
                            if (_250(te)) {
                                if (bag && !_269(te, bag)) {
                                    break;
                                }
                                if (_26b(te)) {
                                    ret.push(te);
                                }
                            }
                            te = te[_24e];
                        }
                        return ret;
                    };
                };
                var _26c = function (_26d) {
                    _26d = _26d || _22b;
                    return function (root, ret, bag) {
                        var te, x = 0, tret = root.children || root.childNodes;
                        while (te = tret[x++]) {
                            if (_250(te) && (!bag || _269(te, bag)) && (_26d(te, x))) {
                                ret.push(te);
                            }
                        }
                        return ret;
                    };
                };
                var _26e = function (node, root) {
                    var pn = node.parentNode;
                    while (pn) {
                        if (pn == root) {
                            break;
                        }
                        pn = pn.parentNode;
                    }
                    return !!pn;
                };
                var _26f = {};
                var _270 = function (_271) {
                    var _272 = _26f[_271.query];
                    if (_272) {
                        return _272;
                    }
                    var io = _271.infixOper;
                    var oper = (io ? io.oper : "");
                    var _273 = _25d(_271, {el: 1});
                    var qt = _271.tag;
                    var _274 = ("*" == qt);
                    var ecs = _227()["getElementsByClassName"];
                    if (!oper) {
                        if (_271.id) {
                            _273 = (!_271.loops && _274) ? _22b : _25d(_271, {el: 1, id: 1});
                            _272 = function (root, arr) {
                                var te = d.byId(_271.id, (root.ownerDocument || root));
                                if (!te || !_273(te)) {
                                    return;
                                }
                                if (9 == root.nodeType) {
                                    return _241(te, arr);
                                } else {
                                    if (_26e(te, root)) {
                                        return _241(te, arr);
                                    }
                                }
                            };
                        } else {
                            if (ecs && /\{\s*\[native code\]\s*\}/.test(String(ecs)) && _271.classes.length && !_228) {
                                _273 = _25d(_271, {el: 1, classes: 1, id: 1});
                                var _275 = _271.classes.join(" ");
                                _272 = function (root, arr, bag) {
                                    var ret = _241(0, arr), te, x = 0;
                                    var tret = root.getElementsByClassName(_275);
                                    while ((te = tret[x++])) {
                                        if (_273(te, root) && _269(te, bag)) {
                                            ret.push(te);
                                        }
                                    }
                                    return ret;
                                };
                            } else {
                                if (!_274 && !_271.loops) {
                                    _272 = function (root, arr, bag) {
                                        var ret = _241(0, arr), te, x = 0;
                                        var tret = root.getElementsByTagName(_271.getTag());
                                        while ((te = tret[x++])) {
                                            if (_269(te, bag)) {
                                                ret.push(te);
                                            }
                                        }
                                        return ret;
                                    };
                                } else {
                                    _273 = _25d(_271, {el: 1, tag: 1, id: 1});
                                    _272 = function (root, arr, bag) {
                                        var ret = _241(0, arr), te, x = 0;
                                        var tret = root.getElementsByTagName(_271.getTag());
                                        while ((te = tret[x++])) {
                                            if (_273(te, root) && _269(te, bag)) {
                                                ret.push(te);
                                            }
                                        }
                                        return ret;
                                    };
                                }
                            }
                        }
                    } else {
                        var _276 = {el: 1};
                        if (_274) {
                            _276.tag = 1;
                        }
                        _273 = _25d(_271, _276);
                        if ("+" == oper) {
                            _272 = _267(_273);
                        } else {
                            if ("~" == oper) {
                                _272 = _26a(_273);
                            } else {
                                if (">" == oper) {
                                    _272 = _26c(_273);
                                }
                            }
                        }
                    }
                    return _26f[_271.query] = _272;
                };
                var _277 = function (root, _278) {
                    var _279 = _241(root), qp, x, te, qpl = _278.length, bag, ret;
                    for (var i = 0; i < qpl; i++) {
                        ret = [];
                        qp = _278[i];
                        x = _279.length - 1;
                        if (x > 0) {
                            bag = {};
                            ret.nozip = true;
                        }
                        var gef = _270(qp);
                        for (var j = 0; (te = _279[j]); j++) {
                            gef(te, ret, bag);
                        }
                        if (!ret.length) {
                            break;
                        }
                        _279 = ret;
                    }
                    return ret;
                };
                var _27a = {}, _27b = {};
                var _27c = function (_27d) {
                    var _27e = _22c(trim(_27d));
                    if (_27e.length == 1) {
                        var tef = _270(_27e[0]);
                        return function (root) {
                            var r = tef(root, new qlc());
                            if (r) {
                                r.nozip = true;
                            }
                            return r;
                        };
                    }
                    return function (root) {
                        return _277(root, _27e);
                    };
                };
                var nua = navigator.userAgent;
                var wk = "WebKit/";
                var _27f = (d.isWebKit && (nua.indexOf(wk) > 0) && (parseFloat(nua.split(wk)[1]) > 528));
                var _280 = d.isIE ? "commentStrip" : "nozip";
                var qsa = "querySelectorAll";
                var _281 = (!!_227()[qsa] && (!d.isSafari || (d.isSafari > 3.1) || _27f));
                var _282 = /n\+\d|([^ ])?([>~+])([^ =])?/g;
                var _283 = function (_284, pre, ch, post) {
                    return ch ? (pre ? pre + " " : "") + ch + (post ? " " + post : "") : _284;
                };
                var _285 = function (_286, _287) {
                    _286 = _286.replace(_282, _283);
                    if (_281) {
                        var _288 = _27b[_286];
                        if (_288 && !_287) {
                            return _288;
                        }
                    }
                    var _289 = _27a[_286];
                    if (_289) {
                        return _289;
                    }
                    var qcz = _286.charAt(0);
                    var _28a = (-1 == _286.indexOf(" "));
                    if ((_286.indexOf("#") >= 0) && (_28a)) {
                        _287 = true;
                    }
                    var _28b = (_281 && (!_287) && (_229.indexOf(qcz) == -1) && (!d.isIE || (_286.indexOf(":") == -1)) && (!(_228 && (_286.indexOf(".") >= 0))) && (_286.indexOf(":contains") == -1) && (_286.indexOf(":checked") == -1) && (_286.indexOf("|=") == -1));
                    if (_28b) {
                        var tq = (_229.indexOf(_286.charAt(_286.length - 1)) >= 0) ? (_286 + " *") : _286;
                        return _27b[_286] = function (root) {
                            try {
                                if (!((9 == root.nodeType) || _28a)) {
                                    throw "";
                                }
                                var r = root[qsa](tq);
                                r[_280] = true;
                                return r;
                            } catch (e) {
                                return _285(_286, true)(root);
                            }
                        };
                    } else {
                        var _28c = _286.split(/\s*,\s*/);
                        return _27a[_286] = ((_28c.length < 2) ? _27c(_286) : function (root) {
                            var _28d = 0, ret = [], tp;
                            while ((tp = _28c[_28d++])) {
                                ret = ret.concat(_27c(tp)(root));
                            }
                            return ret;
                        });
                    }
                };
                var _28e = 0;
                var _28f = d.isIE ? function (node) {
                    if (_22a) {
                        return (node.getAttribute("_uid") || node.setAttribute("_uid", ++_28e) || _28e);
                    } else {
                        return node.uniqueID;
                    }
                } : function (node) {
                    return (node._uid || (node._uid = ++_28e));
                };
                var _269 = function (node, bag) {
                    if (!bag) {
                        return 1;
                    }
                    var id = _28f(node);
                    if (!bag[id]) {
                        return bag[id] = 1;
                    }
                    return 0;
                };
                var _290 = "_zipIdx";
                var _291 = function (arr) {
                    if (arr && arr.nozip) {
                        return (qlc._wrap) ? qlc._wrap(arr) : arr;
                    }
                    var ret = new qlc();
                    if (!arr || !arr.length) {
                        return ret;
                    }
                    if (arr[0]) {
                        ret.push(arr[0]);
                    }
                    if (arr.length < 2) {
                        return ret;
                    }
                    _28e++;
                    if (d.isIE && _22a) {
                        var _292 = _28e + "";
                        arr[0].setAttribute(_290, _292);
                        for (var x = 1, te; te = arr[x]; x++) {
                            if (arr[x].getAttribute(_290) != _292) {
                                ret.push(te);
                            }
                            te.setAttribute(_290, _292);
                        }
                    } else {
                        if (d.isIE && arr.commentStrip) {
                            try {
                                for (var x = 1, te; te = arr[x]; x++) {
                                    if (_242(te)) {
                                        ret.push(te);
                                    }
                                }
                            } catch (e) {
                            }
                        } else {
                            if (arr[0]) {
                                arr[0][_290] = _28e;
                            }
                            for (var x = 1, te; te = arr[x]; x++) {
                                if (arr[x][_290] != _28e) {
                                    ret.push(te);
                                }
                                te[_290] = _28e;
                            }
                        }
                    }
                    return ret;
                };
                d.query = function (_293, root) {
                    qlc = d._NodeListCtor;
                    if (!_293) {
                        return new qlc();
                    }
                    if (_293.constructor == qlc) {
                        return _293;
                    }
                    if (typeof _293 != "string") {
                        return new qlc(_293);
                    }
                    if (typeof root == "string") {
                        root = d.byId(root);
                        if (!root) {
                            return new qlc();
                        }
                    }
                    root = root || _227();
                    var od = root.ownerDocument || root.documentElement;
                    _22a = (root.contentType && root.contentType == "application/xml") || (d.isOpera && (root.doctype || od.toString() == "[object XMLDocument]")) || (!!od) && (d.isIE ? od.xml : (root.xmlVersion || od.xmlVersion));
                    var r = _285(_293)(root);
                    if (r && r.nozip && !qlc._wrap) {
                        return r;
                    }
                    return _291(r);
                };
                d.query.pseudos = _256;
                d._filterQueryResult = function (_294, _295, root) {
                    var _296 = new d._NodeListCtor(), _297 = _22c(_295), _298 = (_297.length == 1 && !/[^\w#\.]/.test(_295)) ? _25d(_297[0]) : function (node) {
                        return dojo.query(_295, root).indexOf(node) != -1;
                    };
                    for (var x = 0, te; te = _294[x]; x++) {
                        if (_298(te)) {
                            _296.push(te);
                        }
                    }
                    return _296;
                };
            };
            var _299 = function () {
                acme = {trim: function (str) {
                        str = str.replace(/^\s+/, "");
                        for (var i = str.length - 1; i >= 0; i--) {
                            if (/\S/.test(str.charAt(i))) {
                                str = str.substring(0, i + 1);
                                break;
                            }
                        }
                        return str;
                    }, forEach: function (arr, _29a, _29b) {
                        if (!arr || !arr.length) {
                            return;
                        }
                        for (var i = 0, l = arr.length; i < l; ++i) {
                            _29a.call(_29b || window, arr[i], i, arr);
                        }
                    }, byId: function (id, doc) {
                        if (typeof id == "string") {
                            return (doc || document).getElementById(id);
                        } else {
                            return id;
                        }
                    }, doc: document, NodeList: Array};
                var n = navigator;
                var dua = n.userAgent;
                var dav = n.appVersion;
                var tv = parseFloat(dav);
                acme.isOpera = (dua.indexOf("Opera") >= 0) ? tv : undefined;
                acme.isKhtml = (dav.indexOf("Konqueror") >= 0) ? tv : undefined;
                acme.isWebKit = parseFloat(dua.split("WebKit/")[1]) || undefined;
                acme.isChrome = parseFloat(dua.split("Chrome/")[1]) || undefined;
                var _29c = Math.max(dav.indexOf("WebKit"), dav.indexOf("Safari"), 0);
                if (_29c && !acme.isChrome) {
                    acme.isSafari = parseFloat(dav.split("Version/")[1]);
                    if (!acme.isSafari || parseFloat(dav.substr(_29c + 7)) <= 419.3) {
                        acme.isSafari = 2;
                    }
                }
                if (document.all && !acme.isOpera) {
                    acme.isIE = parseFloat(dav.split("MSIE ")[1]) || undefined;
                }
                Array._wrap = function (arr) {
                    return arr;
                };
                return acme;
            };
            if (this["dojo"]) {
                dojo.provide("dojo._base.query");
                _226(this["queryPortability"] || this["acme"] || dojo);
            } else {
                _226(this["queryPortability"] || this["acme"] || _299());
            }
        })();
    }
    if (!dojo._hasResource["dojo._base.xhr"]) {
        dojo._hasResource["dojo._base.xhr"] = true;
        dojo.provide("dojo._base.xhr");
        (function () {
            var _29d = dojo, cfg = _29d.config;
            function _29e(obj, name, _29f) {
                if (_29f === null) {
                    return;
                }
                var val = obj[name];
                if (typeof val == "string") {
                    obj[name] = [val, _29f];
                } else {
                    if (_29d.isArray(val)) {
                        val.push(_29f);
                    } else {
                        obj[name] = _29f;
                    }
                }
            }
            ;
            dojo.fieldToObject = function (_2a0) {
                var ret = null;
                var item = _29d.byId(_2a0);
                if (item) {
                    var _2a1 = item.name;
                    var type = (item.type || "").toLowerCase();
                    if (_2a1 && type && !item.disabled) {
                        if (type == "radio" || type == "checkbox") {
                            if (item.checked) {
                                ret = item.value;
                            }
                        } else {
                            if (item.multiple) {
                                ret = [];
                                _29d.query("option", item).forEach(function (opt) {
                                    if (opt.selected) {
                                        ret.push(opt.value);
                                    }
                                });
                            } else {
                                ret = item.value;
                            }
                        }
                    }
                }
                return ret;
            };
            dojo.formToObject = function (_2a2) {
                var ret = {};
                var _2a3 = "file|submit|image|reset|button|";
                _29d.forEach(dojo.byId(_2a2).elements, function (item) {
                    var _2a4 = item.name;
                    var type = (item.type || "").toLowerCase();
                    if (_2a4 && type && _2a3.indexOf(type) == -1 && !item.disabled) {
                        _29e(ret, _2a4, _29d.fieldToObject(item));
                        if (type == "image") {
                            ret[_2a4 + ".x"] = ret[_2a4 + ".y"] = ret[_2a4].x = ret[_2a4].y = 0;
                        }
                    }
                });
                return ret;
            };
            dojo.objectToQuery = function (map) {
                var enc = encodeURIComponent;
                var _2a5 = [];
                var _2a6 = {};
                for (var name in map) {
                    var _2a7 = map[name];
                    if (_2a7 != _2a6[name]) {
                        var _2a8 = enc(name) + "=";
                        if (_29d.isArray(_2a7)) {
                            for (var i = 0; i < _2a7.length; i++) {
                                _2a5.push(_2a8 + enc(_2a7[i]));
                            }
                        } else {
                            _2a5.push(_2a8 + enc(_2a7));
                        }
                    }
                }
                return _2a5.join("&");
            };
            dojo.formToQuery = function (_2a9) {
                return _29d.objectToQuery(_29d.formToObject(_2a9));
            };
            dojo.formToJson = function (_2aa, _2ab) {
                return _29d.toJson(_29d.formToObject(_2aa), _2ab);
            };
            dojo.queryToObject = function (str) {
                var ret = {};
                var qp = str.split("&");
                var dec = decodeURIComponent;
                _29d.forEach(qp, function (item) {
                    if (item.length) {
                        var _2ac = item.split("=");
                        var name = dec(_2ac.shift());
                        var val = dec(_2ac.join("="));
                        if (typeof ret[name] == "string") {
                            ret[name] = [ret[name]];
                        }
                        if (_29d.isArray(ret[name])) {
                            ret[name].push(val);
                        } else {
                            ret[name] = val;
                        }
                    }
                });
                return ret;
            };
            dojo._blockAsync = false;
            var _2ad = _29d._contentHandlers = dojo.contentHandlers = {text: function (xhr) {
                    return xhr.responseText;
                }, json: function (xhr) {
                    return _29d.fromJson(xhr.responseText || null);
                }, "json-comment-filtered": function (xhr) {
                    if (!dojo.config.useCommentedJson) {
                    }
                    var _2ae = xhr.responseText;
                    var _2af = _2ae.indexOf("/*");
                    var _2b0 = _2ae.lastIndexOf("*/");
                    if (_2af == -1 || _2b0 == -1) {
                        throw new Error("JSON was not comment filtered");
                    }
                    return _29d.fromJson(_2ae.substring(_2af + 2, _2b0));
                }, javascript: function (xhr) {
                    return _29d.eval(xhr.responseText);
                }, xml: function (xhr) {
                    var _2b1 = xhr.responseXML;
                    if (_29d.isIE && (!_2b1 || !_2b1.documentElement)) {
                        var ms = function (n) {
                            return "MSXML" + n + ".DOMDocument";
                        };
                        var dp = ["Microsoft.XMLDOM", ms(6), ms(4), ms(3), ms(2)];
                        _29d.some(dp, function (p) {
                            try {
                                var dom = new ActiveXObject(p);
                                dom.async = false;
                                dom.loadXML(xhr.responseText);
                                _2b1 = dom;
                            } catch (e) {
                                return false;
                            }
                            return true;
                        });
                    }
                    return _2b1;
                }, "json-comment-optional": function (xhr) {
                    if (xhr.responseText && /^[^{\[]*\/\*/.test(xhr.responseText)) {
                        return _2ad["json-comment-filtered"](xhr);
                    } else {
                        return _2ad["json"](xhr);
                    }
                }};
            dojo._ioSetArgs = function (args, _2b2, _2b3, _2b4) {
                var _2b5 = {args: args, url: args.url};
                var _2b6 = null;
                if (args.form) {
                    var form = _29d.byId(args.form);
                    var _2b7 = form.getAttributeNode("action");
                    _2b5.url = _2b5.url || (_2b7 ? _2b7.value : null);
                    _2b6 = _29d.formToObject(form);
                }
                var _2b8 = [{}];
                if (_2b6) {
                    _2b8.push(_2b6);
                }
                if (args.content) {
                    _2b8.push(args.content);
                }
                if (args.preventCache) {
                    _2b8.push({"dojo.preventCache": new Date().valueOf()});
                }
                _2b5.query = _29d.objectToQuery(_29d.mixin.apply(null, _2b8));
                _2b5.handleAs = args.handleAs || "text";
                var d = new _29d.Deferred(_2b2);
                d.addCallbacks(_2b3, function (_2b9) {
                    return _2b4(_2b9, d);
                });
                var ld = args.load;
                if (ld && _29d.isFunction(ld)) {
                    d.addCallback(function (_2ba) {
                        return ld.call(args, _2ba, _2b5);
                    });
                }
                var err = args.error;
                if (err && _29d.isFunction(err)) {
                    d.addErrback(function (_2bb) {
                        return err.call(args, _2bb, _2b5);
                    });
                }
                var _2bc = args.handle;
                if (_2bc && _29d.isFunction(_2bc)) {
                    d.addBoth(function (_2bd) {
                        return _2bc.call(args, _2bd, _2b5);
                    });
                }
                if (cfg.ioPublish && _29d.publish && _2b5.args.ioPublish !== false) {
                    d.addCallbacks(function (res) {
                        _29d.publish("/dojo/io/load", [d, res]);
                        return res;
                    }, function (res) {
                        _29d.publish("/dojo/io/error", [d, res]);
                        return res;
                    });
                    d.addBoth(function (res) {
                        _29d.publish("/dojo/io/done", [d, res]);
                        return res;
                    });
                }
                d.ioArgs = _2b5;
                return d;
            };
            var _2be = function (dfd) {
                dfd.canceled = true;
                var xhr = dfd.ioArgs.xhr;
                var _2bf = typeof xhr.abort;
                if (_2bf == "function" || _2bf == "object" || _2bf == "unknown") {
                    xhr.abort();
                }
                var err = dfd.ioArgs.error;
                if (!err) {
                    err = new Error("xhr cancelled");
                    err.dojoType = "cancel";
                }
                return err;
            };
            var _2c0 = function (dfd) {
                var ret = _2ad[dfd.ioArgs.handleAs](dfd.ioArgs.xhr);
                return ret === undefined ? null : ret;
            };
            var _2c1 = function (_2c2, dfd) {
                if (!dfd.ioArgs.args.failOk) {
                }
                return _2c2;
            };
            var _2c3 = null;
            var _2c4 = [];
            var _2c5 = 0;
            var _2c6 = function (dfd) {
                if (_2c5 <= 0) {
                    _2c5 = 0;
                    if (cfg.ioPublish && _29d.publish && (!dfd || dfd && dfd.ioArgs.args.ioPublish !== false)) {
                        _29d.publish("/dojo/io/stop");
                    }
                }
            };
            var _2c7 = function () {
                var now = (new Date()).getTime();
                if (!_29d._blockAsync) {
                    for (var i = 0, tif; i < _2c4.length && (tif = _2c4[i]); i++) {
                        var dfd = tif.dfd;
                        var func = function () {
                            if (!dfd || dfd.canceled || !tif.validCheck(dfd)) {
                                _2c4.splice(i--, 1);
                                _2c5 -= 1;
                            } else {
                                if (tif.ioCheck(dfd)) {
                                    _2c4.splice(i--, 1);
                                    tif.resHandle(dfd);
                                    _2c5 -= 1;
                                } else {
                                    if (dfd.startTime) {
                                        if (dfd.startTime + (dfd.ioArgs.args.timeout || 0) < now) {
                                            _2c4.splice(i--, 1);
                                            var err = new Error("timeout exceeded");
                                            err.dojoType = "timeout";
                                            dfd.errback(err);
                                            dfd.cancel();
                                            _2c5 -= 1;
                                        }
                                    }
                                }
                            }
                        };
                        if (dojo.config.debugAtAllCosts) {
                            func.call(this);
                        } else {
                            try {
                                func.call(this);
                            } catch (e) {
                                dfd.errback(e);
                            }
                        }
                    }
                }
                _2c6(dfd);
                if (!_2c4.length) {
                    clearInterval(_2c3);
                    _2c3 = null;
                    return;
                }
            };
            dojo._ioCancelAll = function () {
                try {
                    _29d.forEach(_2c4, function (i) {
                        try {
                            i.dfd.cancel();
                        } catch (e) {
                        }
                    });
                } catch (e) {
                }
            };
            if (_29d.isIE) {
                _29d.addOnWindowUnload(_29d._ioCancelAll);
            }
            _29d._ioNotifyStart = function (dfd) {
                if (cfg.ioPublish && _29d.publish && dfd.ioArgs.args.ioPublish !== false) {
                    if (!_2c5) {
                        _29d.publish("/dojo/io/start");
                    }
                    _2c5 += 1;
                    _29d.publish("/dojo/io/send", [dfd]);
                }
            };
            _29d._ioWatch = function (dfd, _2c8, _2c9, _2ca) {
                var args = dfd.ioArgs.args;
                if (args.timeout) {
                    dfd.startTime = (new Date()).getTime();
                }
                _2c4.push({dfd: dfd, validCheck: _2c8, ioCheck: _2c9, resHandle: _2ca});
                if (!_2c3) {
                    _2c3 = setInterval(_2c7, 50);
                }
                if (args.sync) {
                    _2c7();
                }
            };
            var _2cb = "application/x-www-form-urlencoded";
            var _2cc = function (dfd) {
                return dfd.ioArgs.xhr.readyState;
            };
            var _2cd = function (dfd) {
                return 4 == dfd.ioArgs.xhr.readyState;
            };
            var _2ce = function (dfd) {
                var xhr = dfd.ioArgs.xhr;
                if (_29d._isDocumentOk(xhr)) {
                    dfd.callback(dfd);
                } else {
                    var err = new Error("Unable to load " + dfd.ioArgs.url + " status:" + xhr.status);
                    err.status = xhr.status;
                    err.responseText = xhr.responseText;
                    dfd.errback(err);
                }
            };
            dojo._ioAddQueryToUrl = function (_2cf) {
                if (_2cf.query.length) {
                    _2cf.url += (_2cf.url.indexOf("?") == -1 ? "?" : "&") + _2cf.query;
                    _2cf.query = null;
                }
            };
            dojo.xhr = function (_2d0, args, _2d1) {
                var dfd = _29d._ioSetArgs(args, _2be, _2c0, _2c1);
                var _2d2 = dfd.ioArgs;
                var xhr = _2d2.xhr = _29d._xhrObj(_2d2.args);
                if (!xhr) {
                    dfd.cancel();
                    return dfd;
                }
                if ("postData" in args) {
                    _2d2.query = args.postData;
                } else {
                    if ("putData" in args) {
                        _2d2.query = args.putData;
                    } else {
                        if ("rawBody" in args) {
                            _2d2.query = args.rawBody;
                        } else {
                            if ((arguments.length > 2 && !_2d1) || "POST|PUT".indexOf(_2d0.toUpperCase()) == -1) {
                                _29d._ioAddQueryToUrl(_2d2);
                            }
                        }
                    }
                }
                xhr.open(_2d0, _2d2.url, args.sync !== true, args.user || undefined, args.password || undefined);
                if (args.headers) {
                    for (var hdr in args.headers) {
                        if (hdr.toLowerCase() === "content-type" && !args.contentType) {
                            args.contentType = args.headers[hdr];
                        } else {
                            if (args.headers[hdr]) {
                                xhr.setRequestHeader(hdr, args.headers[hdr]);
                            }
                        }
                    }
                }
                xhr.setRequestHeader("Content-Type", args.contentType || _2cb);
                if (!args.headers || !("X-Requested-With" in args.headers)) {
                    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                }
                _29d._ioNotifyStart(dfd);
                if (dojo.config.debugAtAllCosts) {
                    xhr.send(_2d2.query);
                } else {
                    try {
                        xhr.send(_2d2.query);
                    } catch (e) {
                        _2d2.error = e;
                        dfd.cancel();
                    }
                }
                _29d._ioWatch(dfd, _2cc, _2cd, _2ce);
                xhr = null;
                return dfd;
            };
            dojo.xhrGet = function (args) {
                return _29d.xhr("GET", args);
            };
            dojo.rawXhrPost = dojo.xhrPost = function (args) {
                return _29d.xhr("POST", args, true);
            };
            dojo.rawXhrPut = dojo.xhrPut = function (args) {
                return _29d.xhr("PUT", args, true);
            };
            dojo.xhrDelete = function (args) {
                return _29d.xhr("DELETE", args);
            };
        })();
    }
    if (!dojo._hasResource["dojo._base.fx"]) {
        dojo._hasResource["dojo._base.fx"] = true;
        dojo.provide("dojo._base.fx");
        (function () {
            var d = dojo;
            var _2d3 = d._mixin;
            dojo._Line = function (_2d4, end) {
                this.start = _2d4;
                this.end = end;
            };
            dojo._Line.prototype.getValue = function (n) {
                return ((this.end - this.start) * n) + this.start;
            };
            dojo.Animation = function (args) {
                _2d3(this, args);
                if (d.isArray(this.curve)) {
                    this.curve = new d._Line(this.curve[0], this.curve[1]);
                }
            };
            d._Animation = d.Animation;
            d.extend(dojo.Animation, {duration: 350, repeat: 0, rate: 20, _percent: 0, _startRepeatCount: 0, _getStep: function () {
                    var _2d5 = this._percent, _2d6 = this.easing;
                    return _2d6 ? _2d6(_2d5) : _2d5;
                }, _fire: function (evt, args) {
                    var a = args || [];
                    if (this[evt]) {
                        if (d.config.debugAtAllCosts) {
                            this[evt].apply(this, a);
                        } else {
                            try {
                                this[evt].apply(this, a);
                            } catch (e) {
                            }
                        }
                    }
                    return this;
                }, play: function (_2d7, _2d8) {
                    var _2d9 = this;
                    if (_2d9._delayTimer) {
                        _2d9._clearTimer();
                    }
                    if (_2d8) {
                        _2d9._stopTimer();
                        _2d9._active = _2d9._paused = false;
                        _2d9._percent = 0;
                    } else {
                        if (_2d9._active && !_2d9._paused) {
                            return _2d9;
                        }
                    }
                    _2d9._fire("beforeBegin", [_2d9.node]);
                    var de = _2d7 || _2d9.delay, _2da = dojo.hitch(_2d9, "_play", _2d8);
                    if (de > 0) {
                        _2d9._delayTimer = setTimeout(_2da, de);
                        return _2d9;
                    }
                    _2da();
                    return _2d9;
                }, _play: function (_2db) {
                    var _2dc = this;
                    if (_2dc._delayTimer) {
                        _2dc._clearTimer();
                    }
                    _2dc._startTime = new Date().valueOf();
                    if (_2dc._paused) {
                        _2dc._startTime -= _2dc.duration * _2dc._percent;
                    }
                    _2dc._active = true;
                    _2dc._paused = false;
                    var _2dd = _2dc.curve.getValue(_2dc._getStep());
                    if (!_2dc._percent) {
                        if (!_2dc._startRepeatCount) {
                            _2dc._startRepeatCount = _2dc.repeat;
                        }
                        _2dc._fire("onBegin", [_2dd]);
                    }
                    _2dc._fire("onPlay", [_2dd]);
                    _2dc._cycle();
                    return _2dc;
                }, pause: function () {
                    var _2de = this;
                    if (_2de._delayTimer) {
                        _2de._clearTimer();
                    }
                    _2de._stopTimer();
                    if (!_2de._active) {
                        return _2de;
                    }
                    _2de._paused = true;
                    _2de._fire("onPause", [_2de.curve.getValue(_2de._getStep())]);
                    return _2de;
                }, gotoPercent: function (_2df, _2e0) {
                    var _2e1 = this;
                    _2e1._stopTimer();
                    _2e1._active = _2e1._paused = true;
                    _2e1._percent = _2df;
                    if (_2e0) {
                        _2e1.play();
                    }
                    return _2e1;
                }, stop: function (_2e2) {
                    var _2e3 = this;
                    if (_2e3._delayTimer) {
                        _2e3._clearTimer();
                    }
                    if (!_2e3._timer) {
                        return _2e3;
                    }
                    _2e3._stopTimer();
                    if (_2e2) {
                        _2e3._percent = 1;
                    }
                    _2e3._fire("onStop", [_2e3.curve.getValue(_2e3._getStep())]);
                    _2e3._active = _2e3._paused = false;
                    return _2e3;
                }, status: function () {
                    if (this._active) {
                        return this._paused ? "paused" : "playing";
                    }
                    return "stopped";
                }, _cycle: function () {
                    var _2e4 = this;
                    if (_2e4._active) {
                        var curr = new Date().valueOf();
                        var step = (curr - _2e4._startTime) / (_2e4.duration);
                        if (step >= 1) {
                            step = 1;
                        }
                        _2e4._percent = step;
                        if (_2e4.easing) {
                            step = _2e4.easing(step);
                        }
                        _2e4._fire("onAnimate", [_2e4.curve.getValue(step)]);
                        if (_2e4._percent < 1) {
                            _2e4._startTimer();
                        } else {
                            _2e4._active = false;
                            if (_2e4.repeat > 0) {
                                _2e4.repeat--;
                                _2e4.play(null, true);
                            } else {
                                if (_2e4.repeat == -1) {
                                    _2e4.play(null, true);
                                } else {
                                    if (_2e4._startRepeatCount) {
                                        _2e4.repeat = _2e4._startRepeatCount;
                                        _2e4._startRepeatCount = 0;
                                    }
                                }
                            }
                            _2e4._percent = 0;
                            _2e4._fire("onEnd", [_2e4.node]);
                            !_2e4.repeat && _2e4._stopTimer();
                        }
                    }
                    return _2e4;
                }, _clearTimer: function () {
                    clearTimeout(this._delayTimer);
                    delete this._delayTimer;
                }});
            var ctr = 0, _2e5 = null, _2e6 = {run: function () {
                }};
            d.extend(d.Animation, {_startTimer: function () {
                    if (!this._timer) {
                        this._timer = d.connect(_2e6, "run", this, "_cycle");
                        ctr++;
                    }
                    if (!_2e5) {
                        _2e5 = setInterval(d.hitch(_2e6, "run"), this.rate);
                    }
                }, _stopTimer: function () {
                    if (this._timer) {
                        d.disconnect(this._timer);
                        this._timer = null;
                        ctr--;
                    }
                    if (ctr <= 0) {
                        clearInterval(_2e5);
                        _2e5 = null;
                        ctr = 0;
                    }
                }});
            var _2e7 = d.isIE ? function (node) {
                var ns = node.style;
                if (!ns.width.length && d.style(node, "width") == "auto") {
                    ns.width = "auto";
                }
            } : function () {
            };
            dojo._fade = function (args) {
                args.node = d.byId(args.node);
                var _2e8 = _2d3({properties: {}}, args), _2e9 = (_2e8.properties.opacity = {});
                _2e9.start = !("start" in _2e8) ? function () {
                    return +d.style(_2e8.node, "opacity") || 0;
                } : _2e8.start;
                _2e9.end = _2e8.end;
                var anim = d.animateProperty(_2e8);
                d.connect(anim, "beforeBegin", d.partial(_2e7, _2e8.node));
                return anim;
            };
            dojo.fadeIn = function (args) {
                return d._fade(_2d3({end: 1}, args));
            };
            dojo.fadeOut = function (args) {
                return d._fade(_2d3({end: 0}, args));
            };
            dojo._defaultEasing = function (n) {
                return 0.5 + ((Math.sin((n + 1.5) * Math.PI)) / 2);
            };
            var _2ea = function (_2eb) {
                this._properties = _2eb;
                for (var p in _2eb) {
                    var prop = _2eb[p];
                    if (prop.start instanceof d.Color) {
                        prop.tempColor = new d.Color();
                    }
                }
            };
            _2ea.prototype.getValue = function (r) {
                var ret = {};
                for (var p in this._properties) {
                    var prop = this._properties[p], _2ec = prop.start;
                    if (_2ec instanceof d.Color) {
                        ret[p] = d.blendColors(_2ec, prop.end, r, prop.tempColor).toCss();
                    } else {
                        if (!d.isArray(_2ec)) {
                            ret[p] = ((prop.end - _2ec) * r) + _2ec + (p != "opacity" ? prop.units || "px" : 0);
                        }
                    }
                }
                return ret;
            };
            dojo.animateProperty = function (args) {
                var n = args.node = d.byId(args.node);
                if (!args.easing) {
                    args.easing = d._defaultEasing;
                }
                var anim = new d.Animation(args);
                d.connect(anim, "beforeBegin", anim, function () {
                    var pm = {};
                    for (var p in this.properties) {
                        if (p == "width" || p == "height") {
                            this.node.display = "block";
                        }
                        var prop = this.properties[p];
                        if (d.isFunction(prop)) {
                            prop = prop(n);
                        }
                        prop = pm[p] = _2d3({}, (d.isObject(prop) ? prop : {end: prop}));
                        if (d.isFunction(prop.start)) {
                            prop.start = prop.start(n);
                        }
                        if (d.isFunction(prop.end)) {
                            prop.end = prop.end(n);
                        }
                        var _2ed = (p.toLowerCase().indexOf("color") >= 0);
                        function _2ee(node, p) {
                            var v = {height: node.offsetHeight, width: node.offsetWidth}[p];
                            if (v !== undefined) {
                                return v;
                            }
                            v = d.style(node, p);
                            return (p == "opacity") ? +v : (_2ed ? v : parseFloat(v));
                        }
                        ;
                        if (!("end" in prop)) {
                            prop.end = _2ee(n, p);
                        } else {
                            if (!("start" in prop)) {
                                prop.start = _2ee(n, p);
                            }
                        }
                        if (_2ed) {
                            prop.start = new d.Color(prop.start);
                            prop.end = new d.Color(prop.end);
                        } else {
                            prop.start = (p == "opacity") ? +prop.start : parseFloat(prop.start);
                        }
                    }
                    this.curve = new _2ea(pm);
                });
                d.connect(anim, "onAnimate", d.hitch(d, "style", anim.node));
                return anim;
            };
            dojo.anim = function (node, _2ef, _2f0, _2f1, _2f2, _2f3) {
                return d.animateProperty({node: node, duration: _2f0 || d.Animation.prototype.duration, properties: _2ef, easing: _2f1, onEnd: _2f2}).play(_2f3 || 0);
            };
        })();
    }
    if (!dojo._hasResource["dojo.i18n"]) {
        dojo._hasResource["dojo.i18n"] = true;
        dojo.provide("dojo.i18n");
        dojo.getObject("i18n", true, dojo);
        dojo.i18n.getLocalization = dojo.i18n.getLocalization || function (_2f4, _2f5, _2f6) {
            _2f6 = dojo.i18n.normalizeLocale(_2f6);
            var _2f7 = _2f6.split("-");
            var _2f8 = [_2f4, "nls", _2f5].join(".");
            var _2f9 = dojo._loadedModules[_2f8];
            if (_2f9) {
                var _2fa;
                for (var i = _2f7.length; i > 0; i--) {
                    var loc = _2f7.slice(0, i).join("_");
                    if (_2f9[loc]) {
                        _2fa = _2f9[loc];
                        break;
                    }
                }
                if (!_2fa) {
                    _2fa = _2f9.ROOT;
                }
                if (_2fa) {
                    var _2fb = function () {
                    };
                    _2fb.prototype = _2fa;
                    return new _2fb();
                }
            }
            throw new Error("Bundle not found: " + _2f5 + " in " + _2f4 + " , locale=" + _2f6);
        };
        dojo.i18n.normalizeLocale = function (_2fc) {
            var _2fd = _2fc ? _2fc.toLowerCase() : dojo.locale;
            if (_2fd == "root") {
                _2fd = "ROOT";
            }
            return _2fd;
        };
        dojo.i18n._requireLocalization = function (_2fe, _2ff, _300, _301) {
            var _302 = dojo.i18n.normalizeLocale(_300);
            var _303 = [_2fe, "nls", _2ff].join(".");
            var _304 = "";
            if (_301) {
                var _305 = _301.split(",");
                for (var i = 0; i < _305.length; i++) {
                    if (_302["indexOf"](_305[i]) == 0) {
                        if (_305[i].length > _304.length) {
                            _304 = _305[i];
                        }
                    }
                }
                if (!_304) {
                    _304 = "ROOT";
                }
            }
            var _306 = _301 ? _304 : _302;
            var _307 = dojo._loadedModules[_303];
            var _308 = null;
            if (_307) {
                if (dojo.config.localizationComplete && _307._built) {
                    return;
                }
                var _309 = _306.replace(/-/g, "_");
                var _30a = _303 + "." + _309;
                _308 = dojo._loadedModules[_30a];
            }
            if (!_308) {
                _307 = dojo["provide"](_303);
                var syms = dojo._getModuleSymbols(_2fe);
                var _30b = syms.concat("nls").join("/");
                var _30c;
                dojo.i18n._searchLocalePath(_306, _301, function (loc) {
                    var _30d = loc.replace(/-/g, "_");
                    var _30e = _303 + "." + _30d;
                    var _30f = false;
                    if (!dojo._loadedModules[_30e]) {
                        dojo["provide"](_30e);
                        var _310 = [_30b];
                        if (loc != "ROOT") {
                            _310.push(loc);
                        }
                        _310.push(_2ff);
                        var _311 = _310.join("/") + ".js";
                        _30f = dojo._loadPath(_311, null, function (hash) {
                            hash = hash.root || hash;
                            var _312 = function () {
                            };
                            _312.prototype = _30c;
                            _307[_30d] = new _312();
                            for (var j in hash) {
                                _307[_30d][j] = hash[j];
                            }
                        });
                    } else {
                        _30f = true;
                    }
                    if (_30f && _307[_30d]) {
                        _30c = _307[_30d];
                    } else {
                        _307[_30d] = _30c;
                    }
                    if (_301) {
                        return true;
                    }
                });
            }
            if (_301 && _302 != _304) {
                _307[_302.replace(/-/g, "_")] = _307[_304.replace(/-/g, "_")];
            }
        };
        (function () {
            var _313 = dojo.config.extraLocale;
            if (_313) {
                if (!_313 instanceof Array) {
                    _313 = [_313];
                }
                var req = dojo.i18n._requireLocalization;
                dojo.i18n._requireLocalization = function (m, b, _314, _315) {
                    req(m, b, _314, _315);
                    if (_314) {
                        return;
                    }
                    for (var i = 0; i < _313.length; i++) {
                        req(m, b, _313[i], _315);
                    }
                };
            }
        })();
        dojo.i18n._searchLocalePath = function (_316, down, _317) {
            _316 = dojo.i18n.normalizeLocale(_316);
            var _318 = _316.split("-");
            var _319 = [];
            for (var i = _318.length; i > 0; i--) {
                _319.push(_318.slice(0, i).join("-"));
            }
            _319.push(false);
            if (down) {
                _319.reverse();
            }
            for (var j = _319.length - 1; j >= 0; j--) {
                var loc = _319[j] || "ROOT";
                var stop = _317(loc);
                if (stop) {
                    break;
                }
            }
        };
        dojo.i18n._preloadLocalizations = function (_31a, _31b) {
            function _31c(_31d) {
                _31d = dojo.i18n.normalizeLocale(_31d);
                dojo.i18n._searchLocalePath(_31d, true, function (loc) {
                    for (var i = 0; i < _31b.length; i++) {
                        if (_31b[i] == loc) {
                            dojo["require"](_31a + "_" + loc);
                            return true;
                        }
                    }
                    return false;
                });
            }
            ;
            _31c();
            var _31e = dojo.config.extraLocale || [];
            for (var i = 0; i < _31e.length; i++) {
                _31c(_31e[i]);
            }
        };
    }
    if (!dojo._hasResource["dojo._base.browser"]) {
        dojo._hasResource["dojo._base.browser"] = true;
        dojo.provide("dojo._base.browser");
        dojo.forEach(dojo.config.require, function (i) {
            dojo["require"](i);
        });
    }
    if (!dojo._hasResource["dojo._base"]) {
        dojo._hasResource["dojo._base"] = true;
        dojo.provide("dojo._base");
    }
    if (dojo.isBrowser && (document.readyState === "complete" || dojo.config.afterOnLoad)) {
        window.setTimeout(dojo._loadInit, 100);
    }
})();
/* $Id$ 
 * Copyright (c) 2011 IBM Corporation
 * Owner: Corporate Webmaster (NUS_N_NIWWW)
 */
if (!dojo._hasResource["ibmweb.config"]) {
    dojo._hasResource["ibmweb.config"] = true;
    dojo.provide("ibmweb.config");
    ibmweb.config.set = function (_1, _2) {
        if (dojo.isString(_1)) {
            dojo.setObject(_1, _2, ibmweb.config);
        } else {
            if (dojo.isArray(_1)) {
                dojo.setObject(_1.join("."), _2, ibmweb.config);
            } else {
                if (dojo.isObject(_1)) {
                    for (var _3 in _1) {
                        if (dojo.isObject(_1[_3]) && !dojo.isArray(_1[_3])) {
                            ibmweb.config[_3] = dojo.mixin(ibmweb.config[_3], _1[_3]);
                        } else {
                            ibmweb.config.set([_3], _1[_3]);
                        }
                    }
                }
            }
        }
    };
    ibmweb.config.get = function (_4) {
        if (dojo.isArray(_4)) {
            _4 = _4.join(".");
        }
        return dojo.getObject(_4, false, ibmweb.config);
    };
    ibmweb.config.parseMetaTags = function () {
        if (!!window.ibmwebConfig && dojo.isObject(window.ibmwebConfig)) {
            ibmweb.config.set(window.ibmwebConfig);
        }
        if (dojo.byId("ibm-top") && dojo.hasClass("ibm-top", "ibm-popup")) {
            ibmweb.config.dynnav.enabled = false;
            if (!!ibmweb.config.pagetitle) {
                if (!dojo.byId("ibm-title")) {
                    dojo.create("li", {id: "ibm-title"}, "ibm-unav-links");
                }
                dojo.byId("ibm-title").innerHTML = ibmweb.config.pagetitle.htmlspecialchars();
            }
        }
        var _5 = function (_6) {
            if (_6 == "true") {
                return true;
            }
            if (_6 == "false") {
                return false;
            }
            if (parseFloat(_6) == _6) {
                return parseFloat(_6);
            }
            return _6;
        };
        for (var _7 in ibmweb.meta) {
            if (_7.indexOf("ibmweb_config_") === 0) {
                var _8 = _7.substring(11).replace("_", ".");
                var _9 = ibmweb.meta[_7];
                var _a = _9.split("||");
                for (var i = 0, j = _a.length; i < j; i++) {
                    var _b = _a[i].split(":");
                    if (_b.length == 1) {
                        ibmweb.config.set(_8, _5(_b[0]));
                    } else {
                        var _c = _b.shift();
                        if (_b.length == 1) {
                            ibmweb.config.set([_8, _c], _5(_b[0]));
                        } else {
                            ibmweb.config.set([_8, _c], _b);
                        }
                    }
                }
            }
        }
    };
}
if (!dojo._hasResource["ibmweb.www.config"]) {
    dojo._hasResource["ibmweb.www.config"] = true;
    dojo.provide("ibmweb.www.config");
    dojo.mixin(ibmweb.config, {config: "www", usedSettings: "production", forced: false, dataUrl: "//1.www.s81c.com/common/js/dynamicnav/www/", dynNavBaseUrl: "https://www.ibm.com/gateway/secstate/?", annotatorServUrl: "http://connect.ibm.com/transform/public/service/common_profile/profile/shared/", imageUrl: "//1.www.s81c.com/i/v17/", timeout: 10000, eluminate: {enabled: false, CID: "50200000", cmSetClientID: {id: null, managedFirstParty: true, dataCollectionDomain: "data.coremetrics.com", cookieDomain: (document.domain.indexOf("ibm.com") !== -1) ? "ibm.com" : document.domain}}, w3_eluminate: {enabled: false, CID: "51040000", cmSetClientID: {id: null, managedFirstParty: true, dataCollectionDomain: "data.coremetrics.com", cookieDomain: (document.domain.indexOf("ibm.com") !== -1) ? "ibm.com" : document.domain}}, dynnav: {enabled: true}, lazyload: {}, signin: {enabled: true, overlay: true, formAction: "https://www-304.ibm.com/pkmslogin.form", signoutUrl: "https://www-304.ibm.com/pkmslogout?page=http://www.ibm.com/account/${cc}/${lc}/signout.html", signinUrl: "https://www.ibm.com/gss/instantprofile/InstantSignin?", registerUrl: "https://www.ibm.com/gss/instantprofile/InstantRegisterServlet?requestType=registerPart1&", codeRepository: "//1.www.s81c.com/common/v17/register/${NAME}.js"}, register: {}, footer: {enabled: true, feedbackLink: ""}, footermenu: {enabled: true}, megamenu: {enabled: true, linksonly: false, disabledLocales: ["ilhe"], maxColumns: 6, maxRows: 8, noScroll: false, minimizeByDefault: false, icons: "none", disableUniversalNav: false}, easyaccess: {enabled: false, lifetime: 43200}, merchandising: {enabled: true}, greeting: {enabled: true, signinWidget: "ibmweb.dynnav.signinWidget"}, localeselector: {enabled: false, maxitems: 12}, video: {enabled: true}, myinterests: {enabled: false}, intercountry: {enabled: true}, sbs: {enabled: true, email: true, print: true}, bitly: {login: "ibmdigital", key: "R_1ed9169df98d3b072731d88ec80d18a7", timeout: 3000}, noticechoice: {jsonUrl: "//1.www.s81c.com/common/translations"}, opinionlab: {footer: {enabled: false, type: "overlay"}, floating: {enabled: false, type: "popup", verticalFloating: true}}, backtocountry: {enabled: false, id: "ibm-backtocountry", keepfilename: true}, appmast: {enabled: false}, idm: {profiling: {expliciturl: "https://www.ibm.com/gateway/profile_id/{INPUT_profile_id}/", anonymousurl: "https://www.ibm.com/instantprofile/iwmoverlay/service/anouser", filter: "//www.ibm.com/common/v17/instantprofile/blackwhite_lists.json", profilingjs: "//www.ibm.com/common/v17/instantprofile/profiling.js"}}, subtabs: {viewtext: {all: "View all...", less: "View less..."}}});
    dojo.config.blankGif = "//1.www.s81c.com/i/c.gif";
    dojo.config.dojoBlankHtmlUrl = "//www.ibm.com/common/js/dojo/1.6/dojo/resources/blank.html";
    (function (_d) {
        _d = _d || "";
        if (_d) {
            ibmweb.config.forced = true;
        }
        var _e = document.cookie.match(/__DOJO=(\w*)/);
        if (_e) {
            _d = _e[1];
        }
        _d = _d || "production";
        ibmweb.config.usedSettings = _d;
        if (_d == "staging") {
            ibmweb.config.set({dataUrl: "//1.wwwstage.s81c.com/common/js/dynamicnav/www/", dynNavBaseUrl: "https://www-sso.toronto.ca.ibm.com/gateway/?", imageUrl: "//1.wwwstage.s81c.com/i/v17/", noticechoice: {jsonUrl: "//1.wwwstage.s81c.com/common/translations"}, signin: {formAction: "https://www-wi-sso3.toronto.ca.ibm.com:445/usrsrvc/account/userservices/ait/jsp/login.jsp?persistPage=true&PD-REFERER=none&error=&page=${page}", signoutUrl: "https://www-sso.toronto.ca.ibm.com/pkmslogout?page=http://wwwstage.ibm.com/account/${cc}/${lc}/signout.html", signinUrl: "https://wwwstage.ibm.com/gss/instantprofile/InstantSignin?", registerUrl: "https://wwwstage.ibm.com/gss/instantprofile/InstantRegisterServlet?requestType=registerPart1&", codeRepository: "//1.wwwstage.s81c.com/common/v17/register/${NAME}.js"}, idm: {profiling: {expliciturl: "https://wwwstage.ibm.com/gateway/profile_id/{INPUT_profile_id}/", anonymousurl: "https://wwwstage.ibm.com/instantprofile/iwmoverlay/service/anouser", filter: "//wwwstage.ibm.com/common/v17/instantprofile/blackwhite_lists.json", profilingjs: "//wwwstage.ibm.com/common/v17/instantprofile/profiling.js"}}});
        }
        if (_d == "wwwpreview") {
            ibmweb.config.set({dataUrl: "//1.wwwpreview.s81c.com/common/js/dynamicnav/www/", dynNavBaseUrl: "https://www-sso.toronto.ca.ibm.com/gateway/?", imageUrl: "//1.wwwpreview.s81c.com/i/v17/", noticechoice: {jsonUrl: "//1.wwwpreview.s81c.com/common/translations"}, signin: {formAction: "https://www-wi-sso3.toronto.ca.ibm.com:445/usrsrvc/account/userservices/ait/jsp/login.jsp?persistPage=true&PD-REFERER=none&error=&page=${page}", signoutUrl: "https://www-sso.toronto.ca.ibm.com/pkmslogout?page=http://wwwstage.ibm.com/account/${cc}/${lc}/signout.html", signinUrl: "https://wwwstage.ibm.com/gss/instantprofile/InstantSignin?", registerUrl: "https://wwwstage.ibm.com/gss/instantprofile/InstantRegisterServlet?requestType=registerPart1&", codeRepository: "//wwwstage.ibm.com/common/v17/register/${NAME}.source.js"}, idm: {profiling: {expliciturl: "https://wwwstage.ibm.com/gateway/profile_id/{INPUT_profile_id}/", anonymousurl: "https://wwwstage.ibm.com/instantprofile/iwmoverlay/service/anouser", filter: "//wwwstage.ibm.com/common/v17/instantprofile/blackwhite_lists.json", profilingjs: "//wwwstage.ibm.com/common/v17/instantprofile/profiling.js"}}});
        }
        if (_d == "development") {
            ibmweb.config.set({dataUrl: "//1.wwwpreview.s81c.com/common/js/dynamicnav/www/", dynNavBaseUrl: "https://www.ibm.com/gateway/secstate/?", imageUrl: "/i/v17/", annotatorServUrl: "https://iebalpha.cdtdp.toronto.ca.ibm.com:3443/transform/public/service/common_profile_test/profile/shared/", noticechoice: {jsonUrl: "//1.www.s81c.com/common/translations"}, signin: {formAction: "https://www-sso.toronto.ca.ibm.com/usrsrvc/account/userservices/ait/jsp/login.jsp?persistPage=true&PD-REFERER=none&error=&page=${page}", signoutUrl: "https://wwwbeta-sso.toronto.ca.ibm.com:444/pkmslogout?page=http://v17ecmpreview.webmaster.ibm.com/accoun/${cc}/${lc}/signout.html", signinUrl: "https://wwwtest.ibm.com/gss/instantprofile/InstantSignin?", registerUrl: "https://wwwtest.ibm.com/gss/instantprofile/InstantRegisterServlet?requestType=registerPart1&", codeRepository: "//wwwtest.ibm.com/common/v17/register/${NAME}.source.js"}, idm: {profiling: {expliciturl: "https://wwwtest.ibm.com/gateway/profile_id/{INPUT_profile_id}/", anonymousurl: "https://wwwtest.ibm.com/ibmweb/idm/instantprofile/iwmoverlay/service/anouser", filter: "//wwwtest.ibm.com/common/v17/instantprofile/blackwhite_lists.json", profilingjs: "//wwwtest.ibm.com/common/v17/instantprofile/profiling.js"}}});
        }
    })(dojo.config.ibmForceConfig);
}
if (!dojo._hasResource["ibmweb.dojoReadyForLegacyDojo"]) {
    dojo._hasResource["ibmweb.dojoReadyForLegacyDojo"] = true;
    dojo.provide("ibmweb.dojoReadyForLegacyDojo");
    (function () {
        dojo.ready = dojo.ready || dojo.addOnLoad;
    })();
}
if (!dojo._hasResource["ibmweb.dojodomain"]) {
    dojo._hasResource["ibmweb.dojodomain"] = true;
    dojo.provide("ibmweb.dojodomain");
    ibmweb.dojodomain.getDojoDomain = function () {
        var _f = /\/\/([^\/]*)\//, _10;
        if (dojo && dojo.config) {
            if (dojo.config.modulePaths && dojo.config.modulePaths.ibmweb) {
                _10 = dojo.config.modulePaths.ibmweb.match(_f);
                if (_10) {
                    return _10[0];
                } else {
                    return "//" + window.location.host + "/";
                }
            }
            if (dojo.config.baseUrl) {
                _10 = dojo.config.baseUrl.match(_f);
                if (_10) {
                    return _10[0];
                } else {
                    return "//" + window.location.host + "/";
                }
            }
        }
        return "//1.www.s81c.com/";
    };
    ibmweb.config.dojoDomain = ibmweb.dojodomain.getDojoDomain();
}
if (!dojo._hasResource["ibmweb.cookieCheck"]) {
    dojo._hasResource["ibmweb.cookieCheck"] = true;
    dojo.provide("ibmweb.cookieCheck");
    var x, str;
    var h = false;
    var cookies = document.cookie.split(";");
    for (i = 0; i < cookies.length; i++) {
        x = cookies[i].substr(0, cookies[i].indexOf("="));
        str = cookies[i].substr(cookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        var cookieCheck = x.match("CookieChecker");
        if (cookieCheck) {
            h = true;
            break;
        }
    }
    if (h == false) {
        document.cookie = "CookieChecker=set;path=/;expires=Tue, 31 Dec 19 12:00:00 UTC";
        document.cookie = "CoreID6=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT";
    }
}
if (!dojo._hasResource["ibmweb.coremetrics.eluminate"]) {
    dojo._hasResource["ibmweb.coremetrics.eluminate"] = true;
    dojo.provide("ibmweb.coremetrics.eluminate");
    ibmweb.eluminate = {downloadTypes: ["bqy", "doc", "dot", "exe", "flv", "jpg", "png", "mov", "mp3", "pdf", "pps", "ppt", "rss", "sh", "swf", "tar", "txt", "wmv", "xls", "xml", "zip", "avi", "eps", "gif", "lwp", "mas", "mp4", "pot", "prz", "rtf", "wav", "wma", "123", "odt", "ott", "sxw", "stw", "docx", "odp", "otp", "sxi", "sti", "pptx", "ods", "ots", "sxc", "stc", "xlsx"], domainList: [".ibm.com", ".lotus.com", ".lotuslive.com", ".cognos.com", ".webdialogs.com", ".jazz.net", ".servicemanagementcenter.com", ".xtify.com", ".ibmcloud.com", ".ibmdw.net", ".bluemix.net", ".smartercitiescloud.com"], create_QueryString: function () {
            var _11 = window.location.search.substring(1);
            try {
                window.QueryString = dojo.queryToObject(_11);
            } catch (e) {
                window.QueryString = {};
            }
        }, domainTest: function (_12) {
            if (_12.length > 0) {
                _12 = _12.toLowerCase();
                if (_12 == window.location.hostname.toLowerCase() || dojo.indexOf(this.domainList, _12) !== -1) {
                    return true;
                }
                for (var i = 0; i < this.domainList.length; i++) {
                    if (_12.search(this.domainList[i]) != -1) {
                        return true;
                    }
                }
            }
            return false;
        }, match: function (pth) {
            var _13 = false, _14 = pth.substring(pth.lastIndexOf(".") + 1, pth.length);
            if (dojo.indexOf(this.downloadTypes, _14) !== -1) {
                _13 = true;
            }
            return _13;
        }, pause: function (ms) {
            var _15 = new Date(), _16 = null;
            do {
                _16 = new Date();
            } while (_16 - _15 < ms);
        }, findElm: function (e, tag) {
            var elm = dojo.query(e.target || e.srcElement);
            if (typeof elm[0] === "undefined") {
                return null;
            }
            elmNode = elm[0];
            var _17 = elmNode;
            while (typeof elmNode.parentNode !== "undefined") {
                elmNode = elmNode.parentNode;
                if (elmNode == null) {
                    break;
                }
                if (typeof elmNode.tagName !== "undefined" && elmNode.tagName.toLowerCase() === tag) {
                    _17 = elmNode;
                    break;
                }
            }
            return _17;
        }, download_and_offset_tracking: function (e) {
            if (typeof e == "undefined") {
                return;
            }
            var elm = this.findElm(e, "a");
            if (typeof elm === "undefined" || elm == null) {
                return;
            }
            if ((typeof elm.tagName !== "undefined" && elm.tagName.toLowerCase() == "a") && !!elm.href) {
                this.tracking_core(e, elm, "normalClick");
            }
        }, left_click_tracking: function (e) {
            var ev = (e.target) ? e.target : ((e.srcElement) ? e.srcElement : e.delegateTarget);
            if (typeof ev !== "undefined" || ev != null) {
                if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
                    var _18 = false;
                    for (var att in ev.attributes) {
                        if (ev.attributes[att].name == "onclick" && ev.attributes[att].value.indexOf("ibmStats.event") > -1) {
                            _18 = true;
                            break;
                        }
                    }
                    if (_18 != true) {
                        this.download_and_offset_tracking(e);
                    }
                } else {
                    var _19 = (ev.getAttribute("onclick") !== null) ? (ev.getAttribute("onclick").indexOf("ibmStats.event")) : -1;
                    if (_19 === -1) {
                        this.download_and_offset_tracking(e);
                    }
                }
            }
        }, right_click_tracking: function (e) {
            if (typeof e == "undefined") {
                return;
            }
            var btn = e.which || e.button;
            if ((btn !== 1) || (navigator.userAgent.indexOf("Safari") !== -1)) {
                var elm = this.findElm(e, "a");
                if (typeof elm === "undefined" || elm == null) {
                    return;
                }
                if ((typeof elm.tagName !== "undefined" && elm.tagName.toLowerCase() == "a") && !!elm.href) {
                    this.tracking_core(e, elm, "rightClick");
                }
            }
        }, check_megamenu_element: function (el) {
            if (typeof (el) !== "undefined") {
                do {
                    if (el.id == "ibm-menu-links" || el.id == "ibm-common-menu" || el.id == "ibm-social-tools") {
                        return true;
                    }
                    el = el.parentElement || el.parentNode;
                } while (el.parentElement || el.parentNode);
            }
            return false;
        }, tracking_core: function (e, elm, _1a) {
            var _1b = elm.hostname ? (elm.hostname.split(":")[0]) : "", _1c = escape(elm.href), qry = elm.search ? elm.search.substring(elm.search.indexOf("?") + 1, elm.search.length) : "", p = dojo.queryToObject(qry), _1d = "none", _1e = elm.protocol || "", _1f = (elm.protocol == "ftp:") ? _1c.substr(8) : ((elm.protocol == "https:") ? _1c.substr(10) : _1c.substr(9)), _20 = (elm.protocol == "ftp:") ? elm.href.substr(6) : ((elm.protocol == "https:") ? elm.href.substr(8) : elm.href.substr(7)), _21 = (navigator.appVersion.indexOf("MSIE") != -1) ? elm.innerText : elm.textContent, _22 = "";
            if (_1f.indexOf("-_-") != -1) {
                _1f = _1f.replace(/-_-/g, "---");
            }
            if (typeof (window.digitalData) != "undefined" && typeof (window.digitalData.page) != "undefined") {
                if (typeof (window.digitalData.page.pageInfo) != "undefined" && typeof (window.digitalData.page.pageInfo.pageID) != "undefined") {
                    _22 = window.digitalData.page.pageInfo.pageID;
                } else {
                    if (typeof (window.digitalData.page.pageID) != "undefined") {
                        _22 = window.digitalData.page.pageID;
                    }
                }
            }
            if (typeof p.attachment !== "undefined") {
                _1d = p.attachment;
            }
            if (typeof p.FILE !== "undefined") {
                _1d = p.FILE;
            }
            if (typeof p.attachmentName !== "undefined") {
                _1d = p.attachmentName;
            }
            var _23 = _1d.toLowerCase(), _24 = elm.pathname.toLowerCase(), _25 = this.check_megamenu_element(elm);
            if (_20.length > 50) {
                _20 = _20.substring(0, 22) + "..." + _20.substring(_20.length - 25, _20.length);
            }
            var _26 = _21 + "-_-null-_-null-_-null-_-" + _1f.toLowerCase() + "-_-" + _21 + "-_-null-_--_--_--_--_--_-" + _22;
            if (_25 == false && this.domainTest(_1b)) {
                if (this.match(_24) || this.match(_23)) {
                    var ttl = "", _27 = document.all ? elm.innerText : elm.text, img = this.findElm(e, "img"), _28 = "";
                    if (img.alt) {
                        ttl = img.alt;
                    } else {
                        if (_27) {
                            ttl = _27;
                        } else {
                            if (elm.innerHTML) {
                                ttl = elm.innerHTML;
                            }
                        }
                    }
                    if (_1d == "none") {
                        _28 = _1f.toLowerCase() + "-_-" + _26;
                        if (typeof cmCreateElementTag !== "undefined") {
                            cmCreateElementTag(_20.toLowerCase(), "download", "download" + "-_-" + _28);
                        }
                    } else {
                        _28 = _23 + "-_-" + _26;
                        if (typeof cmCreateElementTag !== "undefined") {
                            cmCreateElementTag(_23, "download", "download" + "-_-" + _28);
                        }
                    }
                } else {
                    var _29 = "page click" + "-_-" + _1f + "-_-" + _21 + "-_-null-_-null-_-null-_-" + _1f.toLowerCase() + "-_-" + _21 + "-_-null-_-";
                    _29 += (typeof p.lnk !== "undefined") ? p.lnk + "-_-" : "-_-";
                    _29 += (typeof p.lm !== "undefined") ? p.lm + "-_-" : "-_-";
                    _29 += (typeof p.lot !== "undefined") ? p.lot + "-_-" : "-_-";
                    _29 += (typeof p.lsot !== "undefined") ? p.lsot + "-_-" : "-_-";
                    if (typeof p.lpg !== "undefined") {
                        _29 += p.lpg;
                    }
                    _29 += "-_-" + _22;
                    if (typeof cmCreateElementTag !== "undefined") {
                        cmCreateElementTag(_20.toLowerCase(), "page click", _29);
                    }
                }
            }
            if (_25 == false && ((_1b.length > 0) && (_1e.indexOf("http") == 0 || _1e.indexOf("mailto") == 0) && (!this.domainTest(_1b)))) {
                if (typeof cmCreateElementTag !== "undefined") {
                    cmCreateElementTag(_20.toLowerCase(), "external link", "external link" + "-_-" + _1f + "-_-" + _26);
                }
            }
        }, checkRestrictCategory: function (_2a) {
            var _2b = ["GBS", "GTS", "STG", "SWG", "CSUITE", "DW", "ESD", "IND", "MID", "MM", "PPW", "RATLE"];
            if (_2a.indexOf("-") !== -1) {
                var _2c = _2a.split("-")[0];
                for (var i = 0; i < _2b.length; i++) {
                    if (_2c.toUpperCase() === _2b[i]) {
                        return _2c;
                    }
                }
            }
            return _2a;
        }, init: function () {
            var _2d = this, _2e = ibmweb.config.eluminate;
            _2e.enabled = true;
            this.create_QueryString();
            if (typeof (window.WebAnalytics) == "undefined") {
                window.WebAnalytics = {Page: {PageIdentifier: window.location.href}};
            }
            if (typeof (window.digitalData) == "undefined") {
                window.digitalData = {};
            }
            if (typeof _2e.siteID === "undefined") {
                _2e.siteID = String(dojo.query("meta[name='IBM.WTMSite']").attr("content"));
            }
            if (_2e.siteID.length == 0) {
                _2e.siteID = String(dojo.query("meta[name='WTMSite']").attr("content"));
            }
            if (_2e.siteID.length == 0 && String(dojo.query("meta[name='IBM.WTMCategory']").attr("content")) != null) {
                if (String(dojo.query("meta[name='IBM.WTMCategory']").attr("content")).substring(0, 5) == "SOFDC") {
                    _2e.siteID = "DEVWRKS";
                } else {
                    _2e.siteID = this.checkRestrictCategory(String(dojo.query("meta[name='IBM.WTMCategory']").attr("content")));
                }
            }
            if (_2e.siteID.length == 0 && typeof digitalData.page !== "undefined") {
                if (typeof digitalData.page.site !== "undefined" && typeof digitalData.page.site.siteID !== "undefined") {
                    _2e.siteID = digitalData.page.site.siteID;
                }
                if (_2e.siteID.length == 0 && typeof digitalData.page.pageInfo !== "undefined" && typeof digitalData.page.pageInfo.ibm !== "undefined" && typeof digitalData.page.pageInfo.ibm.siteID !== "undefined") {
                    _2e.siteID = digitalData.page.pageInfo.ibm.siteID;
                }
                if (_2e.siteID.length == 0 && typeof digitalData.page.category !== "undefined" && typeof digitalData.page.category.categoryID !== "undefined") {
                    if (digitalData.page.category.categoryID.substring(0, 5) == "SOFDC") {
                        _2e.siteID = "DEVWRKS";
                    } else {
                        _2e.siteID = this.checkRestrictCategory(digitalData.page.category.categoryID);
                    }
                }
                if (_2e.siteID.length == 0 && typeof digitalData.page.category !== "undefined" && typeof digitalData.page.category.primaryCategory !== "undefined") {
                    if (digitalData.page.category.primaryCategory.substring(0, 5) == "SOFDC") {
                        _2e.siteID = "DEVWRKS";
                    } else {
                        _2e.siteID = this.checkRestrictCategory(digitalData.page.category.primaryCategory);
                    }
                }
            }
            if (window.location.href.toLowerCase().indexOf("935.ibm.com/services/") !== -1) {
                if ((window.location.pathname.toLowerCase().indexOf("/gbs/") !== -1) || (window.location.pathname.toLowerCase().indexOf("/business-consulting/") !== -1)) {
                    _2e.siteID = "GBS";
                }
            } else {
                if ((window.location.href.toLowerCase().indexOf("935.ibm.com/industries/") !== -1) || (window.location.href.toLowerCase().indexOf("06.ibm.com/industries/jp/") !== -1)) {
                    _2e.siteID = "INDUSTRIES";
                }
            }
            if (_2e.siteID.length == 0) {
                _2e.siteID = "IBMTESTWWW";
            }
            _2e.cmSetClientID.id = _2e.CID + "|" + _2e.siteID;
            if (typeof (window.cmTagQueue) == "undefined") {
                window.cmTagQueue = [];
            }
            if (_2e.siteID == "ECOM") {
                window.cmTagQueue.push(["cmSetupNormalization", "krypto-_-krypto"]);
            }
            if (_2e.siteID.substring(0, 4).toLowerCase() == "test" || _2e.siteID.substring(_2e.siteID.length - 4, _2e.siteID.length).toLowerCase() == "test") {
                window.cmTagQueue.push(["cmSetClientID", "80200000|" + _2e.siteID, false, "testdata.coremetrics.com", _2e.cmSetClientID.cookieDomain]);
            } else {
                window.cmTagQueue.push(["cmSetClientID", _2e.cmSetClientID.id, _2e.cmSetClientID.managedFirstParty, _2e.cmSetClientID.dataCollectionDomain, _2e.cmSetClientID.cookieDomain]);
            }
            window.cmTagQueue.push(["cmSetupOther", {"cm_JSFEAMasterIDSessionCookie": true}]);
            if ((_2e.siteID !== "undefined") && (_2e.siteID.toLowerCase() == "bluemix" || _2e.siteID.toLowerCase() == "cloudexchange" || _2e.siteID.toLowerCase() == "ecom")) {
                window.cmTagQueue.push(["cmSetupCookieMigration", true, true, this.domainList]);
            }
            (function () {
                var _2f = new Date().getTime();
                eval("document.write(\"<script type=text/javascript src=//libs.coremetrics.com/eluminate.js?__t=" + _2f + "></script>\");");
            })();
            dojo.addOnLoad(function () {
                if (_2e.siteID != "DWNEXT") {
                    if (_2e.siteID.toLowerCase() == "partnerworld" || _2e.siteID.toLowerCase() == "pw" || _2e.siteID.toLowerCase() == "pwtest") {
                        dojo.connect(dojo.body(), "onmousedown", function (e) {
                            if ((typeof (e.which) !== "undefined" && e.which == 1) || (typeof (e.button) !== "undefined" && e.button == 0)) {
                                _2d.left_click_tracking(e);
                            }
                        });
                    } else {
                        dojo.connect(dojo.body(), "onclick", function (e) {
                            _2d.left_click_tracking(e);
                        });
                    }
                    dojo.connect(dojo.body(), "onmousedown", function (e) {
                        if ((typeof (e.which) !== "undefined" && e.which == 3) || (typeof (e.button) !== "undefined" && e.button == 2)) {
                            _2d.right_click_tracking(e);
                        }
                    });
                    dojo.connect(dojo.body(), "onmouseup", function (e) {
                        if ((typeof (e.which) !== "undefined" && e.which == 2) || (typeof (e.button) !== "undefined" && e.button == 4)) {
                            _2d.download_and_offset_tracking(e);
                        }
                    });
                }
            });
        }};
    if (ibmweb.config.config == "www") {
        if (navigator.platform.search("AIX") < 0) {
            cmSetClientID = function () {
            };
            if (typeof (window.eluminate_enabled) !== "undefined") {
                if (!window.eluminate_enabled) {
                } else {
                    ibmweb.eluminate.init();
                }
            } else {
                ibmweb.eluminate.init();
            }
        }
    }
}
if (!dojo._hasResource["ibmweb.coremetrics.w3_eluminate"]) {
    dojo._hasResource["ibmweb.coremetrics.w3_eluminate"] = true;
    dojo.provide("ibmweb.coremetrics.w3_eluminate");
    ibmweb.w3_eluminate = {downloadTypes: ["bqy", "doc", "dot", "exe", "flv", "jpg", "png", "mov", "mp3", "pdf", "pps", "ppt", "rss", "sh", "swf", "tar", "txt", "wmv", "xls", "xml", "zip", "avi", "eps", "gif", "lwp", "mas", "mp4", "pot", "prz", "rtf", "wav", "wma", "123", "odt", "ott", "sxw", "stw", "docx", "odp", "otp", "sxi", "sti", "pptx", "ods", "ots", "sxc", "stc", "xlsx"], domainList: [".ibm.com", ".lotuslive.com", ".cognos.com", ".webdialogs.com", ".servicemanagementcenter.com", ".xtify.com", ".ibmcloud.com", ".ibmdw.net", ".bluemix.net", ".smartercitiescloud.com"], create_QueryString: function () {
            var _30 = window.location.search.substring(1);
            try {
                window.QueryString = dojo.queryToObject(_30);
            } catch (e) {
                window.QueryString = {};
            }
        }, domainTest: function (_31) {
            if (_31.length > 0) {
                _31 = _31.toLowerCase();
                if (_31 == window.location.hostname.toLowerCase() || dojo.indexOf(this.domainList, _31) !== -1) {
                    return true;
                }
                for (var i = 0; i < this.domainList.length; i++) {
                    if (_31.search(this.domainList[i]) != -1) {
                        return true;
                    }
                }
            }
            return false;
        }, match: function (pth) {
            var _32 = false, _33 = pth.substring(pth.lastIndexOf(".") + 1, pth.length);
            if (dojo.indexOf(this.downloadTypes, _33) !== -1) {
                _32 = true;
            }
            return _32;
        }, pause: function (ms) {
            var _34 = new Date(), _35 = null;
            do {
                _35 = new Date();
            } while (_35 - _34 < ms);
        }, findElm: function (e, tag) {
            var elm = dojo.query(e.target || e.srcElement);
            if (typeof elm[0] === "undefined") {
                return null;
            }
            elmNode = elm[0];
            var _36 = elmNode;
            while (typeof elmNode.parentNode !== "undefined") {
                elmNode = elmNode.parentNode;
                if (elmNode == null) {
                    break;
                }
                if (typeof elmNode.tagName !== "undefined" && elmNode.tagName.toLowerCase() === tag) {
                    _36 = elmNode;
                    break;
                }
            }
            return _36;
        }, download_and_offset_tracking: function (e) {
            if (typeof e == "undefined") {
                return;
            }
            var elm = this.findElm(e, "a");
            if (typeof elm === "undefined" || elm == null) {
                return;
            }
            if ((typeof elm.tagName !== "undefined" && elm.tagName.toLowerCase() == "a") && !!elm.href) {
                this.tracking_core(e, elm, "normalClick");
            }
        }, right_click_tracking: function (e) {
            if (typeof e == "undefined") {
                return;
            }
            var btn = e.which || e.button;
            if ((btn !== 1) || (navigator.userAgent.indexOf("Safari") !== -1)) {
                var elm = this.findElm(e, "a");
                if (typeof elm === "undefined" || elm == null) {
                    return;
                }
                if ((typeof elm.tagName !== "undefined" && elm.tagName.toLowerCase() == "a") && !!elm.href) {
                    this.tracking_core(e, elm, "rightClick");
                }
            }
        }, tracking_core: function (e, elm, _37) {
            var _38 = elm.hostname ? (elm.hostname.split(":")[0]) : "", _39 = escape(elm.href), qry = elm.search ? elm.search.substring(elm.search.indexOf("?") + 1, elm.search.length) : "", p = dojo.queryToObject(qry), _3a = "none", _3b = elm.protocol || "", _3c = (elm.protocol == "ftp:") ? _39.substr(8) : ((elm.protocol == "https:") ? _39.substr(10) : _39.substr(9)), _3d = (elm.protocol == "ftp:") ? elm.href.substr(6) : ((elm.protocol == "https:") ? elm.href.substr(8) : elm.href.substr(7)), _3e = (navigator.appVersion.indexOf("MSIE") != -1) ? elm.innerText : elm.textContent, _3f = "";
            if (_3c.indexOf("-_-") != -1) {
                _3c = _3c.replace(/-_-/g, "---");
            }
            if (typeof (window.digitalData) != "undefined" && typeof (window.digitalData.page) != "undefined") {
                if (typeof (window.digitalData.page.pageInfo) != "undefined" && typeof (window.digitalData.page.pageInfo.pageID) != "undefined") {
                    _3f = window.digitalData.page.pageInfo.pageID;
                } else {
                    if (typeof (window.digitalData.page.pageID) != "undefined") {
                        _3f = window.digitalData.page.pageID;
                    }
                }
            }
            if (typeof p.attachment !== "undefined") {
                _3a = p.attachment;
            }
            if (typeof p.FILE !== "undefined") {
                _3a = p.FILE;
            }
            if (typeof p.attachmentName !== "undefined") {
                _3a = p.attachmentName;
            }
            var _40 = _3a.toLowerCase(), _41 = elm.pathname.toLowerCase();
            if (_3d.length > 50) {
                _3d = _3d.substring(0, 22) + "..." + _3d.substring(_3d.length - 25, _3d.length);
            }
            var _42 = _3e + "-_-null-_-null-_-null-_-" + _3c.toLowerCase() + "-_-" + _3e + "-_-null-_--_--_--_--_--_-" + _3f;
            if (this.domainTest(_38)) {
                if (this.match(_41) || this.match(_40)) {
                    var ttl = "", _43 = document.all ? elm.innerText : elm.text, img = this.findElm(e, "img"), _44 = "";
                    if (img.alt) {
                        ttl = img.alt;
                    } else {
                        if (_43) {
                            ttl = _43;
                        } else {
                            if (elm.innerHTML) {
                                ttl = elm.innerHTML;
                            }
                        }
                    }
                    if (_3a == "none") {
                        _44 = _3c.toLowerCase() + "-_-" + _42;
                        if (typeof cmCreateElementTag !== "undefined") {
                            cmCreateElementTag(_3d.toLowerCase(), "download", "download" + "-_-" + _44);
                        }
                    } else {
                        _44 = _40 + "-_-" + _42;
                        if (typeof cmCreateElementTag !== "undefined") {
                            cmCreateElementTag(_40, "download", "download" + "-_-" + _44);
                        }
                    }
                } else {
                    var _45 = "page click" + "-_-" + _3c + "-_-" + _3e + "-_-null-_-null-_-null-_-" + _3c.toLowerCase() + "-_-" + _3e + "-_-null-_-";
                    _45 += (typeof p.lnk !== "undefined") ? p.lnk + "-_-" : "-_-";
                    _45 += (typeof p.lm !== "undefined") ? p.lm + "-_-" : "-_-";
                    _45 += (typeof p.lot !== "undefined") ? p.lot + "-_-" : "-_-";
                    _45 += (typeof p.lsot !== "undefined") ? p.lsot + "-_-" : "-_-";
                    if (typeof p.lpg !== "undefined") {
                        _45 += p.lpg;
                    }
                    _45 += "-_-" + _3f;
                    if (typeof cmCreateElementTag !== "undefined") {
                        cmCreateElementTag(_3d.toLowerCase(), "page click", _45);
                    }
                }
            }
            if ((_38.length > 0) && (_3b.indexOf("http") == 0 || _3b.indexOf("mailto") == 0) && (!this.domainTest(_38))) {
                if (typeof cmCreateElementTag !== "undefined") {
                    cmCreateElementTag(_3d.toLowerCase(), "external link", "external link" + "-_-" + _3c + "-_-" + _42);
                }
            }
        }, init: function () {
            var _46 = this, _47 = ibmweb.config.w3_eluminate;
            _47.enabled = true;
            this.create_QueryString();
            if (typeof (window.WebAnalytics) == "undefined") {
                window.WebAnalytics = {Page: {PageIdentifier: window.location.href}};
            }
            if (typeof (window.digitalData) == "undefined") {
                window.digitalData = {};
            }
            if (typeof _47.siteID === "undefined") {
                _47.siteID = String(dojo.query("meta[name='IBM.WTMSite']").attr("content"));
            }
            if (_47.siteID.length == 0) {
                _47.siteID = String(dojo.query("meta[name='WTMSite']").attr("content"));
            }
            if (_47.siteID.length == 0 && String(dojo.query("meta[name='IBM.WTMCategory']").attr("content")) != null) {
                _47.siteID = String(dojo.query("meta[name='IBM.WTMCategory']").attr("content"));
            }
            if (_47.siteID.length == 0 && typeof digitalData.page !== "undefined") {
                if (typeof digitalData.page.site !== "undefined" && typeof digitalData.page.site.siteID !== "undefined") {
                    _47.siteID = digitalData.page.site.siteID;
                }
                if (_47.siteID.length == 0 && typeof digitalData.page.pageInfo !== "undefined" && typeof digitalData.page.pageInfo.ibm !== "undefined" && typeof digitalData.page.pageInfo.ibm.siteID !== "undefined") {
                    _47.siteID = digitalData.page.pageInfo.ibm.siteID;
                }
                if (_47.siteID.length == 0 && typeof digitalData.page.category !== "undefined" && typeof digitalData.page.category.categoryID !== "undefined") {
                    _47.siteID = digitalData.page.category.categoryID;
                }
                if (_47.siteID.length == 0 && typeof digitalData.page.category !== "undefined" && typeof digitalData.page.category.primaryCategory !== "undefined") {
                    _47.siteID = digitalData.page.category.primaryCategory;
                }
            }
            if (_47.siteID.length == 0) {
                _47.siteID = "IBMTESTW3";
            }
            _47.cmSetClientID.id = _47.CID + "|" + _47.siteID;
            if (typeof (window.cmTagQueue) == "undefined") {
                window.cmTagQueue = [];
            }
            if (_47.siteID.substring(0, 4).toLowerCase() == "test" || _47.siteID.substring(_47.siteID.length - 4, _47.siteID.length).toLowerCase() == "test") {
                window.cmTagQueue.push(["cmSetClientID", "81040000|" + _47.siteID, false, "testdata.coremetrics.com", _47.cmSetClientID.cookieDomain]);
            } else {
                window.cmTagQueue.push(["cmSetClientID", _47.cmSetClientID.id, _47.cmSetClientID.managedFirstParty, _47.cmSetClientID.dataCollectionDomain, _47.cmSetClientID.cookieDomain]);
            }
            window.cmTagQueue.push(["cmSetupOther", {"cm_JSFEAMasterIDSessionCookie": true}]);
            if (typeof window.w3vd18 !== "undefined" && window.w3vd18 == true) {
                var _48 = "//libs.coremetrics.com/eluminate.js";
                function _49(url, _4a) {
                    if (!url || !(typeof url === "string")) {
                        return;
                    }
                    var _4b = document.createElement("script");
                    if (typeof document.attachEvent === "object") {
                        _4b.onreadystatechange = function () {
                            if (_4b.readyState === "loaded") {
                                if (_4a) {
                                    _4a();
                                }
                            }
                        };
                    } else {
                        _4b.onload = function () {
                            if (_4a) {
                                _4a();
                            }
                        };
                    }
                    _4b.src = url;
                    document.getElementsByTagName("head")[0].appendChild(_4b);
                }
                ;
                _49(_48, function () {
                });
            } else {
                (function () {
                    document.write("<script type=text/javascript src='//libs.coremetrics.com/eluminate.js'></script>");
                })();
            }
            dojo.addOnLoad(function () {
                dojo.connect(dojo.body(), "onclick", function (e) {
                    var ev = (e.target) ? e.target : ((e.srcElement) ? e.srcElement : e.delegateTarget);
                    if (typeof ev !== "undefined" || ev != null) {
                        if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
                            var _4c = false;
                            for (var att in ev.attributes) {
                                if (ev.attributes[att].name == "onclick" && ev.attributes[att].value.indexOf("ibmStats.event") > -1) {
                                    _4c = true;
                                    break;
                                }
                            }
                            if (_4c != true) {
                                _46.download_and_offset_tracking(e);
                            }
                        } else {
                            var _4d = (ev.getAttribute("onclick") !== null) ? (ev.getAttribute("onclick").indexOf("ibmStats.event")) : -1;
                            if (_4d === -1) {
                                _46.download_and_offset_tracking(e);
                            }
                        }
                    }
                });
                dojo.connect(dojo.body(), "onmousedown", function (e) {
                    if ((typeof (e.which) !== "undefined" && e.which == 3) || (typeof (e.button) !== "undefined" && e.button == 2)) {
                        _46.right_click_tracking(e);
                    }
                });
                dojo.connect(dojo.body(), "onmouseup", function (e) {
                    if ((typeof (e.which) !== "undefined" && e.which == 2) || (typeof (e.button) !== "undefined" && e.button == 4)) {
                        _46.download_and_offset_tracking(e);
                    }
                });
            });
        }};
    if (ibmweb.config.config == "w3") {
        if (navigator.platform.search("AIX") < 0) {
            cmSetClientID = function () {
            };
            if (typeof (window.w3_eluminate_enabled) !== "undefined") {
                if (!window.w3_eluminate_enabled) {
                } else {
                    ibmweb.w3_eluminate.init();
                }
            } else {
                ibmweb.w3_eluminate.init();
            }
        }
    }
}
if (!dojo._hasResource["dijit._base.manager"]) {
    dojo._hasResource["dijit._base.manager"] = true;
    dojo.provide("dijit._base.manager");
    dojo.declare("dijit.WidgetSet", null, {constructor: function () {
            this._hash = {};
            this.length = 0;
        }, add: function (_4e) {
            if (this._hash[_4e.id]) {
                throw new Error("Tried to register widget with id==" + _4e.id + " but that id is already registered");
            }
            this._hash[_4e.id] = _4e;
            this.length++;
        }, remove: function (id) {
            if (this._hash[id]) {
                delete this._hash[id];
                this.length--;
            }
        }, forEach: function (_4f, _50) {
            _50 = _50 || dojo.global;
            var i = 0, id;
            for (id in this._hash) {
                _4f.call(_50, this._hash[id], i++, this._hash);
            }
            return this;
        }, filter: function (_51, _52) {
            _52 = _52 || dojo.global;
            var res = new dijit.WidgetSet(), i = 0, id;
            for (id in this._hash) {
                var w = this._hash[id];
                if (_51.call(_52, w, i++, this._hash)) {
                    res.add(w);
                }
            }
            return res;
        }, byId: function (id) {
            return this._hash[id];
        }, byClass: function (cls) {
            var res = new dijit.WidgetSet(), id, _53;
            for (id in this._hash) {
                _53 = this._hash[id];
                if (_53.declaredClass == cls) {
                    res.add(_53);
                }
            }
            return res;
        }, toArray: function () {
            var ar = [];
            for (var id in this._hash) {
                ar.push(this._hash[id]);
            }
            return ar;
        }, map: function (_54, _55) {
            return dojo.map(this.toArray(), _54, _55);
        }, every: function (_56, _57) {
            _57 = _57 || dojo.global;
            var x = 0, i;
            for (i in this._hash) {
                if (!_56.call(_57, this._hash[i], x++, this._hash)) {
                    return false;
                }
            }
            return true;
        }, some: function (_58, _59) {
            _59 = _59 || dojo.global;
            var x = 0, i;
            for (i in this._hash) {
                if (_58.call(_59, this._hash[i], x++, this._hash)) {
                    return true;
                }
            }
            return false;
        }});
    (function () {
        dijit.registry = new dijit.WidgetSet();
        var _5a = dijit.registry._hash, _5b = dojo.attr, _5c = dojo.hasAttr, _5d = dojo.style;
        dijit.byId = function (id) {
            return typeof id == "string" ? _5a[id] : id;
        };
        var _5e = {};
        dijit.getUniqueId = function (_5f) {
            var id;
            do {
                id = _5f + "_" + (_5f in _5e ? ++_5e[_5f] : _5e[_5f] = 0);
            } while (_5a[id]);
            return dijit._scopeName == "dijit" ? id : dijit._scopeName + "_" + id;
        };
        dijit.findWidgets = function (_60) {
            var _61 = [];
            function _62(_63) {
                for (var _64 = _63.firstChild; _64; _64 = _64.nextSibling) {
                    if (_64.nodeType == 1) {
                        var _65 = _64.getAttribute("widgetId");
                        if (_65) {
                            var _66 = _5a[_65];
                            if (_66) {
                                _61.push(_66);
                            }
                        } else {
                            _62(_64);
                        }
                    }
                }
            }
            ;
            _62(_60);
            return _61;
        };
        dijit._destroyAll = function () {
            dijit._curFocus = null;
            dijit._prevFocus = null;
            dijit._activeStack = [];
            dojo.forEach(dijit.findWidgets(dojo.body()), function (_67) {
                if (!_67._destroyed) {
                    if (_67.destroyRecursive) {
                        _67.destroyRecursive();
                    } else {
                        if (_67.destroy) {
                            _67.destroy();
                        }
                    }
                }
            });
        };
        if (dojo.isIE) {
            dojo.addOnWindowUnload(function () {
                dijit._destroyAll();
            });
        }
        dijit.byNode = function (_68) {
            return _5a[_68.getAttribute("widgetId")];
        };
        dijit.getEnclosingWidget = function (_69) {
            while (_69) {
                var id = _69.getAttribute && _69.getAttribute("widgetId");
                if (id) {
                    return _5a[id];
                }
                _69 = _69.parentNode;
            }
            return null;
        };
        var _6a = (dijit._isElementShown = function (_6b) {
            var s = _5d(_6b);
            return (s.visibility != "hidden") && (s.visibility != "collapsed") && (s.display != "none") && (_5b(_6b, "type") != "hidden");
        });
        dijit.hasDefaultTabStop = function (_6c) {
            switch (_6c.nodeName.toLowerCase()) {
                case "a":
                    return _5c(_6c, "href");
                case "area":
                case "button":
                case "input":
                case "object":
                case "select":
                case "textarea":
                    return true;
                case "iframe":
                    var _6d;
                    try {
                        var _6e = _6c.contentDocument;
                        if ("designMode" in _6e && _6e.designMode == "on") {
                            return true;
                        }
                        _6d = _6e.body;
                    } catch (e1) {
                        try {
                            _6d = _6c.contentWindow.document.body;
                        } catch (e2) {
                            return false;
                        }
                    }
                    return _6d.contentEditable == "true" || (_6d.firstChild && _6d.firstChild.contentEditable == "true");
                default:
                    return _6c.contentEditable == "true";
                }
        };
        var _6f = (dijit.isTabNavigable = function (_70) {
            if (_5b(_70, "disabled")) {
                return false;
            } else {
                if (_5c(_70, "tabIndex")) {
                    return _5b(_70, "tabIndex") >= 0;
                } else {
                    return dijit.hasDefaultTabStop(_70);
                }
            }
        });
        dijit._getTabNavigable = function (_71) {
            var _72, _73, _74, _75, _76, _77, _78 = {};
            function _79(_7a) {
                return _7a && _7a.tagName.toLowerCase() == "input" && _7a.type && _7a.type.toLowerCase() == "radio" && _7a.name && _7a.name.toLowerCase();
            }
            ;
            var _7b = function (_7c) {
                dojo.query("> *", _7c).forEach(function (_7d) {
                    if ((dojo.isIE && _7d.scopeName !== "HTML") || !_6a(_7d)) {
                        return;
                    }
                    if (_6f(_7d)) {
                        var _7e = _5b(_7d, "tabIndex");
                        if (!_5c(_7d, "tabIndex") || _7e == 0) {
                            if (!_72) {
                                _72 = _7d;
                            }
                            _73 = _7d;
                        } else {
                            if (_7e > 0) {
                                if (!_74 || _7e < _75) {
                                    _75 = _7e;
                                    _74 = _7d;
                                }
                                if (!_76 || _7e >= _77) {
                                    _77 = _7e;
                                    _76 = _7d;
                                }
                            }
                        }
                        var rn = _79(_7d);
                        if (dojo.attr(_7d, "checked") && rn) {
                            _78[rn] = _7d;
                        }
                    }
                    if (_7d.nodeName.toUpperCase() != "SELECT") {
                        _7b(_7d);
                    }
                });
            };
            if (_6a(_71)) {
                _7b(_71);
            }
            function rs(_7f) {
                return _78[_79(_7f)] || _7f;
            }
            ;
            return {first: rs(_72), last: rs(_73), lowest: rs(_74), highest: rs(_76)};
        };
        dijit.getFirstInTabbingOrder = function (_80) {
            var _81 = dijit._getTabNavigable(dojo.byId(_80));
            return _81.lowest ? _81.lowest : _81.first;
        };
        dijit.getLastInTabbingOrder = function (_82) {
            var _83 = dijit._getTabNavigable(dojo.byId(_82));
            return _83.last ? _83.last : _83.highest;
        };
        dijit.defaultDuration = dojo.config["defaultDuration"] || 200;
    })();
}
if (!dojo._hasResource["dojo.Stateful"]) {
    dojo._hasResource["dojo.Stateful"] = true;
    dojo.provide("dojo.Stateful");
    dojo.declare("dojo.Stateful", null, {postscript: function (_84) {
            if (_84) {
                dojo.mixin(this, _84);
            }
        }, get: function (_85) {
            return this[_85];
        }, set: function (_86, _87) {
            if (typeof _86 === "object") {
                for (var x in _86) {
                    this.set(x, _86[x]);
                }
                return this;
            }
            var _88 = this[_86];
            this[_86] = _87;
            if (this._watchCallbacks) {
                this._watchCallbacks(_86, _88, _87);
            }
            return this;
        }, watch: function (_89, _8a) {
            var _8b = this._watchCallbacks;
            if (!_8b) {
                var _8c = this;
                _8b = this._watchCallbacks = function (_8d, _8e, _8f, _90) {
                    var _91 = function (_92) {
                        if (_92) {
                            _92 = _92.slice();
                            for (var i = 0, l = _92.length; i < l; i++) {
                                try {
                                    _92[i].call(_8c, _8d, _8e, _8f);
                                } catch (e) {
                                }
                            }
                        }
                    };
                    _91(_8b["_" + _8d]);
                    if (!_90) {
                        _91(_8b["*"]);
                    }
                };
            }
            if (!_8a && typeof _89 === "function") {
                _8a = _89;
                _89 = "*";
            } else {
                _89 = "_" + _89;
            }
            var _93 = _8b[_89];
            if (typeof _93 !== "object") {
                _93 = _8b[_89] = [];
            }
            _93.push(_8a);
            return {unwatch: function () {
                    _93.splice(dojo.indexOf(_93, _8a), 1);
                }};
        }});
}
if (!dojo._hasResource["dijit._WidgetBase"]) {
    dojo._hasResource["dijit._WidgetBase"] = true;
    dojo.provide("dijit._WidgetBase");
    (function () {
        dojo.declare("dijit._WidgetBase", dojo.Stateful, {id: "", lang: "", dir: "", "class": "", style: "", title: "", tooltip: "", baseClass: "", srcNodeRef: null, domNode: null, containerNode: null, attributeMap: {id: "", dir: "", lang: "", "class": "", style: "", title: ""}, _blankGif: (dojo.config.blankGif || dojo.moduleUrl("dojo", "resources/blank.gif")).toString(), postscript: function (_94, _95) {
                this.create(_94, _95);
            }, create: function (_96, _97) {
                this.srcNodeRef = dojo.byId(_97);
                this._connects = [];
                this._subscribes = [];
                if (this.srcNodeRef && (typeof this.srcNodeRef.id == "string")) {
                    this.id = this.srcNodeRef.id;
                }
                if (_96) {
                    this.params = _96;
                    dojo._mixin(this, _96);
                }
                this.postMixInProperties();
                if (!this.id) {
                    this.id = dijit.getUniqueId(this.declaredClass.replace(/\./g, "_"));
                }
                dijit.registry.add(this);
                this.buildRendering();
                if (this.domNode) {
                    this._applyAttributes();
                    var _98 = this.srcNodeRef;
                    if (_98 && _98.parentNode && this.domNode !== _98) {
                        _98.parentNode.replaceChild(this.domNode, _98);
                    }
                }
                if (this.domNode) {
                    this.domNode.setAttribute("widgetId", this.id);
                }
                this.postCreate();
                if (this.srcNodeRef && !this.srcNodeRef.parentNode) {
                    delete this.srcNodeRef;
                }
                this._created = true;
            }, _applyAttributes: function () {
                var _99 = function (_9a, _9b) {
                    if ((_9b.params && _9a in _9b.params) || _9b[_9a]) {
                        _9b.set(_9a, _9b[_9a]);
                    }
                };
                for (var _9c in this.attributeMap) {
                    _99(_9c, this);
                }
                dojo.forEach(this._getSetterAttributes(), function (a) {
                    if (!(a in this.attributeMap)) {
                        _99(a, this);
                    }
                }, this);
            }, _getSetterAttributes: function () {
                var _9d = this.constructor;
                if (!_9d._setterAttrs) {
                    var r = (_9d._setterAttrs = []), _9e, _9f = _9d.prototype;
                    for (var _a0 in _9f) {
                        if (dojo.isFunction(_9f[_a0]) && (_9e = _a0.match(/^_set([a-zA-Z]*)Attr$/)) && _9e[1]) {
                            r.push(_9e[1].charAt(0).toLowerCase() + _9e[1].substr(1));
                        }
                    }
                }
                return _9d._setterAttrs;
            }, postMixInProperties: function () {
            }, buildRendering: function () {
                if (!this.domNode) {
                    this.domNode = this.srcNodeRef || dojo.create("div");
                }
                if (this.baseClass) {
                    var _a1 = this.baseClass.split(" ");
                    if (!this.isLeftToRight()) {
                        _a1 = _a1.concat(dojo.map(_a1, function (_a2) {
                            return _a2 + "Rtl";
                        }));
                    }
                    dojo.addClass(this.domNode, _a1);
                }
            }, postCreate: function () {
            }, startup: function () {
                this._started = true;
            }, destroyRecursive: function (_a3) {
                this._beingDestroyed = true;
                this.destroyDescendants(_a3);
                this.destroy(_a3);
            }, destroy: function (_a4) {
                this._beingDestroyed = true;
                this.uninitialize();
                var d = dojo, dfe = d.forEach, dun = d.unsubscribe;
                dfe(this._connects, function (_a5) {
                    dfe(_a5, d.disconnect);
                });
                dfe(this._subscribes, function (_a6) {
                    dun(_a6);
                });
                dfe(this._supportingWidgets || [], function (w) {
                    if (w.destroyRecursive) {
                        w.destroyRecursive();
                    } else {
                        if (w.destroy) {
                            w.destroy();
                        }
                    }
                });
                this.destroyRendering(_a4);
                dijit.registry.remove(this.id);
                this._destroyed = true;
            }, destroyRendering: function (_a7) {
                if (this.bgIframe) {
                    this.bgIframe.destroy(_a7);
                    delete this.bgIframe;
                }
                if (this.domNode) {
                    if (_a7) {
                        dojo.removeAttr(this.domNode, "widgetId");
                    } else {
                        dojo.destroy(this.domNode);
                    }
                    delete this.domNode;
                }
                if (this.srcNodeRef) {
                    if (!_a7) {
                        dojo.destroy(this.srcNodeRef);
                    }
                    delete this.srcNodeRef;
                }
            }, destroyDescendants: function (_a8) {
                dojo.forEach(this.getChildren(), function (_a9) {
                    if (_a9.destroyRecursive) {
                        _a9.destroyRecursive(_a8);
                    }
                });
            }, uninitialize: function () {
                return false;
            }, _setClassAttr: function (_aa) {
                var _ab = this[this.attributeMap["class"] || "domNode"];
                dojo.replaceClass(_ab, _aa, this["class"]);
                this._set("class", _aa);
            }, _setStyleAttr: function (_ac) {
                var _ad = this[this.attributeMap.style || "domNode"];
                if (dojo.isObject(_ac)) {
                    dojo.style(_ad, _ac);
                } else {
                    if (_ad.style.cssText) {
                        _ad.style.cssText += "; " + _ac;
                    } else {
                        _ad.style.cssText = _ac;
                    }
                }
                this._set("style", _ac);
            }, _attrToDom: function (_ae, _af) {
                var _b0 = this.attributeMap[_ae];
                dojo.forEach(dojo.isArray(_b0) ? _b0 : [_b0], function (_b1) {
                    var _b2 = this[_b1.node || _b1 || "domNode"];
                    var _b3 = _b1.type || "attribute";
                    switch (_b3) {
                        case "attribute":
                            if (dojo.isFunction(_af)) {
                                _af = dojo.hitch(this, _af);
                            }
                            var _b4 = _b1.attribute ? _b1.attribute : (/^on[A-Z][a-zA-Z]*$/.test(_ae) ? _ae.toLowerCase() : _ae);
                            dojo.attr(_b2, _b4, _af);
                            break;
                        case "innerText":
                            _b2.innerHTML = "";
                            _b2.appendChild(dojo.doc.createTextNode(_af));
                            break;
                        case "innerHTML":
                            _b2.innerHTML = _af;
                            break;
                        case "class":
                            dojo.replaceClass(_b2, _af, this[_ae]);
                            break;
                        }
                }, this);
            }, get: function (_b5) {
                var _b6 = this._getAttrNames(_b5);
                return this[_b6.g] ? this[_b6.g]() : this[_b5];
            }, set: function (_b7, _b8) {
                if (typeof _b7 === "object") {
                    for (var x in _b7) {
                        this.set(x, _b7[x]);
                    }
                    return this;
                }
                var _b9 = this._getAttrNames(_b7);
                if (this[_b9.s]) {
                    var _ba = this[_b9.s].apply(this, Array.prototype.slice.call(arguments, 1));
                } else {
                    if (_b7 in this.attributeMap) {
                        this._attrToDom(_b7, _b8);
                    }
                    this._set(_b7, _b8);
                }
                return _ba || this;
            }, _attrPairNames: {}, _getAttrNames: function (_bb) {
                var apn = this._attrPairNames;
                if (apn[_bb]) {
                    return apn[_bb];
                }
                var uc = _bb.charAt(0).toUpperCase() + _bb.substr(1);
                return (apn[_bb] = {n: _bb + "Node", s: "_set" + uc + "Attr", g: "_get" + uc + "Attr"});
            }, _set: function (_bc, _bd) {
                var _be = this[_bc];
                this[_bc] = _bd;
                if (this._watchCallbacks && this._created && _bd !== _be) {
                    this._watchCallbacks(_bc, _be, _bd);
                }
            }, toString: function () {
                return "[Widget " + this.declaredClass + ", " + (this.id || "NO ID") + "]";
            }, getDescendants: function () {
                return this.containerNode ? dojo.query("[widgetId]", this.containerNode).map(dijit.byNode) : [];
            }, getChildren: function () {
                return this.containerNode ? dijit.findWidgets(this.containerNode) : [];
            }, connect: function (obj, _bf, _c0) {
                var _c1 = [dojo._connect(obj, _bf, this, _c0)];
                this._connects.push(_c1);
                return _c1;
            }, disconnect: function (_c2) {
                for (var i = 0; i < this._connects.length; i++) {
                    if (this._connects[i] == _c2) {
                        dojo.forEach(_c2, dojo.disconnect);
                        this._connects.splice(i, 1);
                        return;
                    }
                }
            }, subscribe: function (_c3, _c4) {
                var _c5 = dojo.subscribe(_c3, this, _c4);
                this._subscribes.push(_c5);
                return _c5;
            }, unsubscribe: function (_c6) {
                for (var i = 0; i < this._subscribes.length; i++) {
                    if (this._subscribes[i] == _c6) {
                        dojo.unsubscribe(_c6);
                        this._subscribes.splice(i, 1);
                        return;
                    }
                }
            }, isLeftToRight: function () {
                return this.dir ? (this.dir == "ltr") : dojo._isBodyLtr();
            }, placeAt: function (_c7, _c8) {
                if (_c7.declaredClass && _c7.addChild) {
                    _c7.addChild(this, _c8);
                } else {
                    dojo.place(this.domNode, _c7, _c8);
                }
                return this;
            }});
    })();
}
if (!dojo._hasResource["dojo.window"]) {
    dojo._hasResource["dojo.window"] = true;
    dojo.provide("dojo.window");
    dojo.getObject("window", true, dojo);
    dojo.window.getBox = function () {
        var _c9 = (dojo.doc.compatMode == "BackCompat") ? dojo.body() : dojo.doc.documentElement;
        var _ca = dojo._docScroll();
        return {w: _c9.clientWidth, h: _c9.clientHeight, l: _ca.x, t: _ca.y};
    };
    dojo.window.get = function (doc) {
        if (dojo.isIE && window !== document.parentWindow) {
            doc.parentWindow.execScript("document._parentWindow = window;", "Javascript");
            var win = doc._parentWindow;
            doc._parentWindow = null;
            return win;
        }
        return doc.parentWindow || doc.defaultView;
    };
    dojo.window.scrollIntoView = function (_cb, pos) {
        try {
            _cb = dojo.byId(_cb);
            var doc = _cb.ownerDocument || dojo.doc, _cc = doc.body || dojo.body(), _cd = doc.documentElement || _cc.parentNode, _ce = dojo.isIE, _cf = dojo.isWebKit;
            if ((!(dojo.isMoz || _ce || _cf || dojo.isOpera) || _cb == _cc || _cb == _cd) && (typeof _cb.scrollIntoView != "undefined")) {
                _cb.scrollIntoView(false);
                return;
            }
            var _d0 = doc.compatMode == "BackCompat", _d1 = (_ce >= 9 && _cb.ownerDocument.parentWindow.frameElement) ? ((_cd.clientHeight > 0 && _cd.clientWidth > 0 && (_cc.clientHeight == 0 || _cc.clientWidth == 0 || _cc.clientHeight > _cd.clientHeight || _cc.clientWidth > _cd.clientWidth)) ? _cd : _cc) : (_d0 ? _cc : _cd), _d2 = _cf ? _cc : _d1, _d3 = _d1.clientWidth, _d4 = _d1.clientHeight, rtl = !dojo._isBodyLtr(), _d5 = pos || dojo.position(_cb), el = _cb.parentNode, _d6 = function (el) {
                return ((_ce <= 6 || (_ce && _d0)) ? false : (dojo.style(el, "position").toLowerCase() == "fixed"));
            };
            if (_d6(_cb)) {
                return;
            }
            while (el) {
                if (el == _cc) {
                    el = _d2;
                }
                var _d7 = dojo.position(el), _d8 = _d6(el);
                if (el == _d2) {
                    _d7.w = _d3;
                    _d7.h = _d4;
                    if (_d2 == _cd && _ce && rtl) {
                        _d7.x += _d2.offsetWidth - _d7.w;
                    }
                    if (_d7.x < 0 || !_ce) {
                        _d7.x = 0;
                    }
                    if (_d7.y < 0 || !_ce) {
                        _d7.y = 0;
                    }
                } else {
                    var pb = dojo._getPadBorderExtents(el);
                    _d7.w -= pb.w;
                    _d7.h -= pb.h;
                    _d7.x += pb.l;
                    _d7.y += pb.t;
                    var _d9 = el.clientWidth, _da = _d7.w - _d9;
                    if (_d9 > 0 && _da > 0) {
                        _d7.w = _d9;
                        _d7.x += (rtl && (_ce || el.clientLeft > pb.l)) ? _da : 0;
                    }
                    _d9 = el.clientHeight;
                    _da = _d7.h - _d9;
                    if (_d9 > 0 && _da > 0) {
                        _d7.h = _d9;
                    }
                }
                if (_d8) {
                    if (_d7.y < 0) {
                        _d7.h += _d7.y;
                        _d7.y = 0;
                    }
                    if (_d7.x < 0) {
                        _d7.w += _d7.x;
                        _d7.x = 0;
                    }
                    if (_d7.y + _d7.h > _d4) {
                        _d7.h = _d4 - _d7.y;
                    }
                    if (_d7.x + _d7.w > _d3) {
                        _d7.w = _d3 - _d7.x;
                    }
                }
                var l = _d5.x - _d7.x, t = _d5.y - Math.max(_d7.y, 0), r = l + _d5.w - _d7.w, bot = t + _d5.h - _d7.h;
                if (r * l > 0) {
                    var s = Math[l < 0 ? "max" : "min"](l, r);
                    if (rtl && ((_ce == 8 && !_d0) || _ce >= 9)) {
                        s = -s;
                    }
                    _d5.x += el.scrollLeft;
                    el.scrollLeft += s;
                    _d5.x -= el.scrollLeft;
                }
                if (bot * t > 0) {
                    _d5.y += el.scrollTop;
                    el.scrollTop += Math[t < 0 ? "max" : "min"](t, bot);
                    _d5.y -= el.scrollTop;
                }
                el = (el != _d2) && !_d8 && el.parentNode;
            }
        } catch (error) {
            _cb.scrollIntoView(false);
        }
    };
}
if (!dojo._hasResource["dijit._base.focus"]) {
    dojo._hasResource["dijit._base.focus"] = true;
    dojo.provide("dijit._base.focus");
    dojo.mixin(dijit, {_curFocus: null, _prevFocus: null, isCollapsed: function () {
            return dijit.getBookmark().isCollapsed;
        }, getBookmark: function () {
            var bm, rg, tg, sel = dojo.doc.selection, cf = dijit._curFocus;
            if (dojo.global.getSelection) {
                sel = dojo.global.getSelection();
                if (sel) {
                    if (sel.isCollapsed) {
                        tg = cf ? cf.tagName : "";
                        if (tg) {
                            tg = tg.toLowerCase();
                            if (tg == "textarea" || (tg == "input" && (!cf.type || cf.type.toLowerCase() == "text"))) {
                                sel = {start: cf.selectionStart, end: cf.selectionEnd, node: cf, pRange: true};
                                return {isCollapsed: (sel.end <= sel.start), mark: sel};
                            }
                        }
                        bm = {isCollapsed: true};
                        if (sel.rangeCount) {
                            bm.mark = sel.getRangeAt(0).cloneRange();
                        }
                    } else {
                        rg = sel.getRangeAt(0);
                        bm = {isCollapsed: false, mark: rg.cloneRange()};
                    }
                }
            } else {
                if (sel) {
                    tg = cf ? cf.tagName : "";
                    tg = tg.toLowerCase();
                    if (cf && tg && (tg == "button" || tg == "textarea" || tg == "input")) {
                        if (sel.type && sel.type.toLowerCase() == "none") {
                            return {isCollapsed: true, mark: null};
                        } else {
                            rg = sel.createRange();
                            return {isCollapsed: rg.text && rg.text.length ? false : true, mark: {range: rg, pRange: true}};
                        }
                    }
                    bm = {};
                    try {
                        rg = sel.createRange();
                        bm.isCollapsed = !(sel.type == "Text" ? rg.htmlText.length : rg.length);
                    } catch (e) {
                        bm.isCollapsed = true;
                        return bm;
                    }
                    if (sel.type.toUpperCase() == "CONTROL") {
                        if (rg.length) {
                            bm.mark = [];
                            var i = 0, len = rg.length;
                            while (i < len) {
                                bm.mark.push(rg.item(i++));
                            }
                        } else {
                            bm.isCollapsed = true;
                            bm.mark = null;
                        }
                    } else {
                        bm.mark = rg.getBookmark();
                    }
                } else {
                }
            }
            return bm;
        }, moveToBookmark: function (_db) {
            var _dc = dojo.doc, _dd = _db.mark;
            if (_dd) {
                if (dojo.global.getSelection) {
                    var sel = dojo.global.getSelection();
                    if (sel && sel.removeAllRanges) {
                        if (_dd.pRange) {
                            var r = _dd;
                            var n = r.node;
                            n.selectionStart = r.start;
                            n.selectionEnd = r.end;
                        } else {
                            sel.removeAllRanges();
                            sel.addRange(_dd);
                        }
                    } else {
                    }
                } else {
                    if (_dc.selection && _dd) {
                        var rg;
                        if (_dd.pRange) {
                            rg = _dd.range;
                        } else {
                            if (dojo.isArray(_dd)) {
                                rg = _dc.body.createControlRange();
                                dojo.forEach(_dd, function (n) {
                                    rg.addElement(n);
                                });
                            } else {
                                rg = _dc.body.createTextRange();
                                rg.moveToBookmark(_dd);
                            }
                        }
                        rg.select();
                    }
                }
            }
        }, getFocus: function (_de, _df) {
            var _e0 = !dijit._curFocus || (_de && dojo.isDescendant(dijit._curFocus, _de.domNode)) ? dijit._prevFocus : dijit._curFocus;
            return {node: _e0, bookmark: (_e0 == dijit._curFocus) && dojo.withGlobal(_df || dojo.global, dijit.getBookmark), openedForWindow: _df};
        }, focus: function (_e1) {
            if (!_e1) {
                return;
            }
            var _e2 = "node" in _e1 ? _e1.node : _e1, _e3 = _e1.bookmark, _e4 = _e1.openedForWindow, _e5 = _e3 ? _e3.isCollapsed : false;
            if (_e2) {
                var _e6 = (_e2.tagName.toLowerCase() == "iframe") ? _e2.contentWindow : _e2;
                if (_e6 && _e6.focus) {
                    try {
                        _e6.focus();
                    } catch (e) {
                    }
                }
                dijit._onFocusNode(_e2);
            }
            if (_e3 && dojo.withGlobal(_e4 || dojo.global, dijit.isCollapsed) && !_e5) {
                if (_e4) {
                    _e4.focus();
                }
                try {
                    dojo.withGlobal(_e4 || dojo.global, dijit.moveToBookmark, null, [_e3]);
                } catch (e2) {
                }
            }
        }, _activeStack: [], registerIframe: function (_e7) {
            return dijit.registerWin(_e7.contentWindow, _e7);
        }, unregisterIframe: function (_e8) {
            dijit.unregisterWin(_e8);
        }, registerWin: function (_e9, _ea) {
            var _eb = function (evt) {
                dijit._justMouseDowned = true;
                setTimeout(function () {
                    dijit._justMouseDowned = false;
                }, 0);
                if (dojo.isIE && evt && evt.srcElement && evt.srcElement.parentNode == null) {
                    return;
                }
                dijit._onTouchNode(_ea || evt.target || evt.srcElement, "mouse");
            };
            var doc = dojo.isIE ? _e9.document.documentElement : _e9.document;
            if (doc) {
                if (dojo.isIE) {
                    _e9.document.body.attachEvent("onmousedown", _eb);
                    var _ec = function (evt) {
                        if (evt.srcElement.tagName.toLowerCase() != "#document" && dijit.isTabNavigable(evt.srcElement)) {
                            dijit._onFocusNode(_ea || evt.srcElement);
                        } else {
                            dijit._onTouchNode(_ea || evt.srcElement);
                        }
                    };
                    doc.attachEvent("onactivate", _ec);
                    var _ed = function (evt) {
                        dijit._onBlurNode(_ea || evt.srcElement);
                    };
                    doc.attachEvent("ondeactivate", _ed);
                    return function () {
                        _e9.document.detachEvent("onmousedown", _eb);
                        doc.detachEvent("onactivate", _ec);
                        doc.detachEvent("ondeactivate", _ed);
                        doc = null;
                    };
                } else {
                    doc.body.addEventListener("mousedown", _eb, true);
                    var _ee = function (evt) {
                        dijit._onFocusNode(_ea || evt.target);
                    };
                    doc.addEventListener("focus", _ee, true);
                    var _ef = function (evt) {
                        dijit._onBlurNode(_ea || evt.target);
                    };
                    doc.addEventListener("blur", _ef, true);
                    return function () {
                        doc.body.removeEventListener("mousedown", _eb, true);
                        doc.removeEventListener("focus", _ee, true);
                        doc.removeEventListener("blur", _ef, true);
                        doc = null;
                    };
                }
            }
        }, unregisterWin: function (_f0) {
            _f0 && _f0();
        }, _onBlurNode: function (_f1) {
            dijit._prevFocus = dijit._curFocus;
            dijit._curFocus = null;
            if (dijit._justMouseDowned) {
                return;
            }
            if (dijit._clearActiveWidgetsTimer) {
                clearTimeout(dijit._clearActiveWidgetsTimer);
            }
            dijit._clearActiveWidgetsTimer = setTimeout(function () {
                delete dijit._clearActiveWidgetsTimer;
                dijit._setStack([]);
                dijit._prevFocus = null;
            }, 100);
        }, _onTouchNode: function (_f2, by) {
            if (dijit._clearActiveWidgetsTimer) {
                clearTimeout(dijit._clearActiveWidgetsTimer);
                delete dijit._clearActiveWidgetsTimer;
            }
            var _f3 = [];
            try {
                while (_f2) {
                    var _f4 = dojo.attr(_f2, "dijitPopupParent");
                    if (_f4) {
                        _f2 = dijit.byId(_f4).domNode;
                    } else {
                        if (_f2.tagName && _f2.tagName.toLowerCase() == "body") {
                            if (_f2 === dojo.body()) {
                                break;
                            }
                            _f2 = dojo.window.get(_f2.ownerDocument).frameElement;
                        } else {
                            var id = _f2.getAttribute && _f2.getAttribute("widgetId"), _f5 = id && dijit.byId(id);
                            if (_f5 && !(by == "mouse" && _f5.get("disabled"))) {
                                _f3.unshift(id);
                            }
                            _f2 = _f2.parentNode;
                        }
                    }
                }
            } catch (e) {
            }
            dijit._setStack(_f3, by);
        }, _onFocusNode: function (_f6) {
            if (!_f6) {
                return;
            }
            if (_f6.nodeType == 9) {
                return;
            }
            dijit._onTouchNode(_f6);
            if (_f6 == dijit._curFocus) {
                return;
            }
            if (dijit._curFocus) {
                dijit._prevFocus = dijit._curFocus;
            }
            dijit._curFocus = _f6;
            dojo.publish("focusNode", [_f6]);
        }, _setStack: function (_f7, by) {
            var _f8 = dijit._activeStack;
            dijit._activeStack = _f7;
            for (var _f9 = 0; _f9 < Math.min(_f8.length, _f7.length); _f9++) {
                if (_f8[_f9] != _f7[_f9]) {
                    break;
                }
            }
            var _fa;
            for (var i = _f8.length - 1; i >= _f9; i--) {
                _fa = dijit.byId(_f8[i]);
                if (_fa) {
                    _fa._focused = false;
                    _fa.set("focused", false);
                    _fa._hasBeenBlurred = true;
                    if (_fa._onBlur) {
                        _fa._onBlur(by);
                    }
                    dojo.publish("widgetBlur", [_fa, by]);
                }
            }
            for (i = _f9; i < _f7.length; i++) {
                _fa = dijit.byId(_f7[i]);
                if (_fa) {
                    _fa._focused = true;
                    _fa.set("focused", true);
                    if (_fa._onFocus) {
                        _fa._onFocus(by);
                    }
                    dojo.publish("widgetFocus", [_fa, by]);
                }
            }
        }});
    dojo.addOnLoad(function () {
        var _fb = dijit.registerWin(window);
        if (dojo.isIE) {
            dojo.addOnWindowUnload(function () {
                dijit.unregisterWin(_fb);
                _fb = null;
            });
        }
    });
}
if (!dojo._hasResource["dojo.AdapterRegistry"]) {
    dojo._hasResource["dojo.AdapterRegistry"] = true;
    dojo.provide("dojo.AdapterRegistry");
    dojo.AdapterRegistry = function (_fc) {
        this.pairs = [];
        this.returnWrappers = _fc || false;
    };
    dojo.extend(dojo.AdapterRegistry, {register: function (_fd, _fe, _ff, _100, _101) {
            this.pairs[((_101) ? "unshift" : "push")]([_fd, _fe, _ff, _100]);
        }, match: function () {
            for (var i = 0; i < this.pairs.length; i++) {
                var pair = this.pairs[i];
                if (pair[1].apply(this, arguments)) {
                    if ((pair[3]) || (this.returnWrappers)) {
                        return pair[2];
                    } else {
                        return pair[2].apply(this, arguments);
                    }
                }
            }
            throw new Error("No match found");
        }, unregister: function (name) {
            for (var i = 0; i < this.pairs.length; i++) {
                var pair = this.pairs[i];
                if (pair[0] == name) {
                    this.pairs.splice(i, 1);
                    return true;
                }
            }
            return false;
        }});
}
if (!dojo._hasResource["dijit._base.place"]) {
    dojo._hasResource["dijit._base.place"] = true;
    dojo.provide("dijit._base.place");
    dijit.getViewport = function () {
        return dojo.window.getBox();
    };
    dijit.placeOnScreen = function (node, pos, _102, _103) {
        var _104 = dojo.map(_102, function (_105) {
            var c = {corner: _105, pos: {x: pos.x, y: pos.y}};
            if (_103) {
                c.pos.x += _105.charAt(1) == "L" ? _103.x : -_103.x;
                c.pos.y += _105.charAt(0) == "T" ? _103.y : -_103.y;
            }
            return c;
        });
        return dijit._place(node, _104);
    };
    dijit._place = function (node, _106, _107, _108) {
        var view = dojo.window.getBox();
        if (!node.parentNode || String(node.parentNode.tagName).toLowerCase() != "body") {
            dojo.body().appendChild(node);
        }
        var best = null;
        dojo.some(_106, function (_109) {
            var _10a = _109.corner;
            var pos = _109.pos;
            var _10b = 0;
            var _10c = {w: _10a.charAt(1) == "L" ? (view.l + view.w) - pos.x : pos.x - view.l, h: _10a.charAt(1) == "T" ? (view.t + view.h) - pos.y : pos.y - view.t};
            if (_107) {
                var res = _107(node, _109.aroundCorner, _10a, _10c, _108);
                _10b = typeof res == "undefined" ? 0 : res;
            }
            var _10d = node.style;
            var _10e = _10d.display;
            var _10f = _10d.visibility;
            _10d.visibility = "hidden";
            _10d.display = "";
            var mb = dojo.marginBox(node);
            _10d.display = _10e;
            _10d.visibility = _10f;
            var _110 = Math.max(view.l, _10a.charAt(1) == "L" ? pos.x : (pos.x - mb.w)), _111 = Math.max(view.t, _10a.charAt(0) == "T" ? pos.y : (pos.y - mb.h)), endX = Math.min(view.l + view.w, _10a.charAt(1) == "L" ? (_110 + mb.w) : pos.x), endY = Math.min(view.t + view.h, _10a.charAt(0) == "T" ? (_111 + mb.h) : pos.y), _112 = endX - _110, _113 = endY - _111;
            _10b += (mb.w - _112) + (mb.h - _113);
            if (best == null || _10b < best.overflow) {
                best = {corner: _10a, aroundCorner: _109.aroundCorner, x: _110, y: _111, w: _112, h: _113, overflow: _10b, spaceAvailable: _10c};
            }
            return !_10b;
        });
        if (best.overflow && _107) {
            _107(node, best.aroundCorner, best.corner, best.spaceAvailable, _108);
        }
        var l = dojo._isBodyLtr(), s = node.style;
        s.top = best.y + "px";
        s[l ? "left" : "right"] = (l ? best.x : view.w - best.x - best.w) + "px";
        return best;
    };
    dijit.placeOnScreenAroundNode = function (node, _114, _115, _116) {
        _114 = dojo.byId(_114);
        var _117 = dojo.position(_114, true);
        return dijit._placeOnScreenAroundRect(node, _117.x, _117.y, _117.w, _117.h, _115, _116);
    };
    dijit.placeOnScreenAroundRectangle = function (node, _118, _119, _11a) {
        return dijit._placeOnScreenAroundRect(node, _118.x, _118.y, _118.width, _118.height, _119, _11a);
    };
    dijit._placeOnScreenAroundRect = function (node, x, y, _11b, _11c, _11d, _11e) {
        var _11f = [];
        for (var _120 in _11d) {
            _11f.push({aroundCorner: _120, corner: _11d[_120], pos: {x: x + (_120.charAt(1) == "L" ? 0 : _11b), y: y + (_120.charAt(0) == "T" ? 0 : _11c)}});
        }
        return dijit._place(node, _11f, _11e, {w: _11b, h: _11c});
    };
    dijit.placementRegistry = new dojo.AdapterRegistry();
    dijit.placementRegistry.register("node", function (n, x) {
        return typeof x == "object" && typeof x.offsetWidth != "undefined" && typeof x.offsetHeight != "undefined";
    }, dijit.placeOnScreenAroundNode);
    dijit.placementRegistry.register("rect", function (n, x) {
        return typeof x == "object" && "x" in x && "y" in x && "width" in x && "height" in x;
    }, dijit.placeOnScreenAroundRectangle);
    dijit.placeOnScreenAroundElement = function (node, _121, _122, _123) {
        return dijit.placementRegistry.match.apply(dijit.placementRegistry, arguments);
    };
    dijit.getPopupAroundAlignment = function (_124, _125) {
        var _126 = {};
        dojo.forEach(_124, function (pos) {
            switch (pos) {
                case "after":
                    _126[_125 ? "BR" : "BL"] = _125 ? "BL" : "BR";
                    break;
                case "before":
                    _126[_125 ? "BL" : "BR"] = _125 ? "BR" : "BL";
                    break;
                case "below-alt":
                    _125 = !_125;
                case "below":
                    _126[_125 ? "BL" : "BR"] = _125 ? "TL" : "TR";
                    _126[_125 ? "BR" : "BL"] = _125 ? "TR" : "TL";
                    break;
                case "above-alt":
                    _125 = !_125;
                case "above":
                default:
                    _126[_125 ? "TL" : "TR"] = _125 ? "BL" : "BR";
                    _126[_125 ? "TR" : "TL"] = _125 ? "BR" : "BL";
                    break;
                }
        });
        return _126;
    };
}
if (!dojo._hasResource["dijit._base.window"]) {
    dojo._hasResource["dijit._base.window"] = true;
    dojo.provide("dijit._base.window");
    dijit.getDocumentWindow = function (doc) {
        return dojo.window.get(doc);
    };
}
if (!dojo._hasResource["dijit._base.popup"]) {
    dojo._hasResource["dijit._base.popup"] = true;
    dojo.provide("dijit._base.popup");
    dijit.popup = {_stack: [], _beginZIndex: 2000, _idGen: 1, _createWrapper: function (_127) {
            var _128 = _127.declaredClass ? _127._popupWrapper : (_127.parentNode && dojo.hasClass(_127.parentNode, "dijitPopup")), node = _127.domNode || _127;
            if (!_128) {
                _128 = dojo.create("div", {"class": "dijitPopup", style: {display: "none"}, role: "presentation"}, dojo.body());
                _128.appendChild(node);
                var s = node.style;
                s.display = "";
                s.visibility = "";
                s.position = "";
                s.top = "0px";
                if (_127.declaredClass) {
                    _127._popupWrapper = _128;
                    dojo.connect(_127, "destroy", function () {
                        dojo.destroy(_128);
                        delete _127._popupWrapper;
                    });
                }
            }
            return _128;
        }, moveOffScreen: function (_129) {
            var _12a = this._createWrapper(_129);
            dojo.style(_12a, {visibility: "hidden", top: "-9999px", display: ""});
        }, hide: function (_12b) {
            var _12c = this._createWrapper(_12b);
            dojo.style(_12c, "display", "none");
        }, getTopPopup: function () {
            var _12d = this._stack;
            for (var pi = _12d.length - 1; pi > 0 && _12d[pi].parent === _12d[pi - 1].widget; pi--) {
            }
            return _12d[pi];
        }, open: function (args) {
            var _12e = this._stack, _12f = args.popup, _130 = args.orient || ((args.parent ? args.parent.isLeftToRight() : dojo._isBodyLtr()) ? {"BL": "TL", "BR": "TR", "TL": "BL", "TR": "BR"} : {"BR": "TR", "BL": "TL", "TR": "BR", "TL": "BL"}), _131 = args.around, id = (args.around && args.around.id) ? (args.around.id + "_dropdown") : ("popup_" + this._idGen++);
            while (_12e.length && (!args.parent || !dojo.isDescendant(args.parent.domNode, _12e[_12e.length - 1].widget.domNode))) {
                dijit.popup.close(_12e[_12e.length - 1].widget);
            }
            var _132 = this._createWrapper(_12f);
            dojo.attr(_132, {id: id, style: {zIndex: this._beginZIndex + _12e.length}, "class": "dijitPopup " + (_12f.baseClass || _12f["class"] || "").split(" ")[0] + "Popup", dijitPopupParent: args.parent ? args.parent.id : ""});
            if (dojo.isIE || dojo.isMoz) {
                if (!_12f.bgIframe) {
                    _12f.bgIframe = new dijit.BackgroundIframe(_132);
                }
            }
            var best = _131 ? dijit.placeOnScreenAroundElement(_132, _131, _130, _12f.orient ? dojo.hitch(_12f, "orient") : null) : dijit.placeOnScreen(_132, args, _130 == "R" ? ["TR", "BR", "TL", "BL"] : ["TL", "BL", "TR", "BR"], args.padding);
            _132.style.display = "";
            _132.style.visibility = "visible";
            _12f.domNode.style.visibility = "visible";
            var _133 = [];
            _133.push(dojo.connect(_132, "onkeypress", this, function (evt) {
                if (evt.charOrCode == dojo.keys.ESCAPE && args.onCancel) {
                    dojo.stopEvent(evt);
                    args.onCancel();
                } else {
                    if (evt.charOrCode === dojo.keys.TAB) {
                        dojo.stopEvent(evt);
                        var _134 = this.getTopPopup();
                        if (_134 && _134.onCancel) {
                            _134.onCancel();
                        }
                    }
                }
            }));
            if (_12f.onCancel) {
                _133.push(dojo.connect(_12f, "onCancel", args.onCancel));
            }
            _133.push(dojo.connect(_12f, _12f.onExecute ? "onExecute" : "onChange", this, function () {
                var _135 = this.getTopPopup();
                if (_135 && _135.onExecute) {
                    _135.onExecute();
                }
            }));
            _12e.push({widget: _12f, parent: args.parent, onExecute: args.onExecute, onCancel: args.onCancel, onClose: args.onClose, handlers: _133});
            if (_12f.onOpen) {
                _12f.onOpen(best);
            }
            return best;
        }, close: function (_136) {
            var _137 = this._stack;
            while ((_136 && dojo.some(_137, function (elem) {
                return elem.widget == _136;
            })) || (!_136 && _137.length)) {
                var top = _137.pop(), _138 = top.widget, _139 = top.onClose;
                if (_138.onClose) {
                    _138.onClose();
                }
                dojo.forEach(top.handlers, dojo.disconnect);
                if (_138 && _138.domNode) {
                    this.hide(_138);
                }
                if (_139) {
                    _139();
                }
            }
        }};
    dijit._frames = new function () {
        var _13a = [];
        this.pop = function () {
            var _13b;
            if (_13a.length) {
                _13b = _13a.pop();
                _13b.style.display = "";
            } else {
                if (dojo.isIE < 9) {
                    var burl = dojo.config["dojoBlankHtmlUrl"] || (dojo.moduleUrl("dojo", "resources/blank.html") + "") || "javascript:\"\"";
                    var html = "<iframe src='" + burl + "'" + " style='position: absolute; left: 0px; top: 0px;" + "z-index: -1; filter:Alpha(Opacity=\"0\");'>";
                    _13b = dojo.doc.createElement(html);
                } else {
                    _13b = dojo.create("iframe");
                    _13b.src = "javascript:\"\"";
                    _13b.className = "dijitBackgroundIframe";
                    dojo.style(_13b, "opacity", 0.1);
                }
                _13b.tabIndex = -1;
                dijit.setWaiRole(_13b, "presentation");
            }
            return _13b;
        };
        this.push = function (_13c) {
            _13c.style.display = "none";
            _13a.push(_13c);
        };
    }();
    dijit.BackgroundIframe = function (node) {
        if (!node.id) {
            throw new Error("no id");
        }
        if (dojo.isIE || dojo.isMoz) {
            var _13d = (this.iframe = dijit._frames.pop());
            node.appendChild(_13d);
            if (dojo.isIE < 7 || dojo.isQuirks) {
                this.resize(node);
                this._conn = dojo.connect(node, "onresize", this, function () {
                    this.resize(node);
                });
            } else {
                dojo.style(_13d, {width: "100%", height: "100%"});
            }
        }
    };
    dojo.extend(dijit.BackgroundIframe, {resize: function (node) {
            if (this.iframe) {
                dojo.style(this.iframe, {width: node.offsetWidth + "px", height: node.offsetHeight + "px"});
            }
        }, destroy: function () {
            if (this._conn) {
                dojo.disconnect(this._conn);
                this._conn = null;
            }
            if (this.iframe) {
                dijit._frames.push(this.iframe);
                delete this.iframe;
            }
        }});
}
if (!dojo._hasResource["dijit._base.scroll"]) {
    dojo._hasResource["dijit._base.scroll"] = true;
    dojo.provide("dijit._base.scroll");
    dijit.scrollIntoView = function (node, pos) {
        dojo.window.scrollIntoView(node, pos);
    };
}
if (!dojo._hasResource["dojo.uacss"]) {
    dojo._hasResource["dojo.uacss"] = true;
    dojo.provide("dojo.uacss");
    (function () {
        var d = dojo, html = d.doc.documentElement, ie = d.isIE, _13e = d.isOpera, maj = Math.floor, ff = d.isFF, _13f = d.boxModel.replace(/-/, ""), _140 = {dj_ie: ie, dj_ie6: maj(ie) == 6, dj_ie7: maj(ie) == 7, dj_ie8: maj(ie) == 8, dj_ie9: maj(ie) == 9, dj_quirks: d.isQuirks, dj_iequirks: ie && d.isQuirks, dj_opera: _13e, dj_khtml: d.isKhtml, dj_webkit: d.isWebKit, dj_safari: d.isSafari, dj_chrome: d.isChrome, dj_gecko: d.isMozilla, dj_ff3: maj(ff) == 3};
        _140["dj_" + _13f] = true;
        var _141 = "";
        for (var clz in _140) {
            if (_140[clz]) {
                _141 += clz + " ";
            }
        }
        html.className = d.trim(html.className + " " + _141);
        dojo._loaders.unshift(function () {
            if (!dojo._isBodyLtr()) {
                var _142 = "dj_rtl dijitRtl " + _141.replace(/ /g, "-rtl ");
                html.className = d.trim(html.className + " " + _142);
            }
        });
    })();
}
if (!dojo._hasResource["dijit._base.sniff"]) {
    dojo._hasResource["dijit._base.sniff"] = true;
    dojo.provide("dijit._base.sniff");
}
if (!dojo._hasResource["dijit._base.typematic"]) {
    dojo._hasResource["dijit._base.typematic"] = true;
    dojo.provide("dijit._base.typematic");
    dijit.typematic = {_fireEventAndReload: function () {
            this._timer = null;
            this._callback(++this._count, this._node, this._evt);
            this._currentTimeout = Math.max(this._currentTimeout < 0 ? this._initialDelay : (this._subsequentDelay > 1 ? this._subsequentDelay : Math.round(this._currentTimeout * this._subsequentDelay)), this._minDelay);
            this._timer = setTimeout(dojo.hitch(this, "_fireEventAndReload"), this._currentTimeout);
        }, trigger: function (evt, _143, node, _144, obj, _145, _146, _147) {
            if (obj != this._obj) {
                this.stop();
                this._initialDelay = _146 || 500;
                this._subsequentDelay = _145 || 0.9;
                this._minDelay = _147 || 10;
                this._obj = obj;
                this._evt = evt;
                this._node = node;
                this._currentTimeout = -1;
                this._count = -1;
                this._callback = dojo.hitch(_143, _144);
                this._fireEventAndReload();
                this._evt = dojo.mixin({faux: true}, evt);
            }
        }, stop: function () {
            if (this._timer) {
                clearTimeout(this._timer);
                this._timer = null;
            }
            if (this._obj) {
                this._callback(-1, this._node, this._evt);
                this._obj = null;
            }
        }, addKeyListener: function (node, _148, _149, _14a, _14b, _14c, _14d) {
            if (_148.keyCode) {
                _148.charOrCode = _148.keyCode;
                dojo.deprecated("keyCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.", "", "2.0");
            } else {
                if (_148.charCode) {
                    _148.charOrCode = String.fromCharCode(_148.charCode);
                    dojo.deprecated("charCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.", "", "2.0");
                }
            }
            return [dojo.connect(node, "onkeypress", this, function (evt) {
                    if (evt.charOrCode == _148.charOrCode && (_148.ctrlKey === undefined || _148.ctrlKey == evt.ctrlKey) && (_148.altKey === undefined || _148.altKey == evt.altKey) && (_148.metaKey === undefined || _148.metaKey == (evt.metaKey || false)) && (_148.shiftKey === undefined || _148.shiftKey == evt.shiftKey)) {
                        dojo.stopEvent(evt);
                        dijit.typematic.trigger(evt, _149, node, _14a, _148, _14b, _14c, _14d);
                    } else {
                        if (dijit.typematic._obj == _148) {
                            dijit.typematic.stop();
                        }
                    }
                }), dojo.connect(node, "onkeyup", this, function (evt) {
                    if (dijit.typematic._obj == _148) {
                        dijit.typematic.stop();
                    }
                })];
        }, addMouseListener: function (node, _14e, _14f, _150, _151, _152) {
            var dc = dojo.connect;
            return [dc(node, "mousedown", this, function (evt) {
                    dojo.stopEvent(evt);
                    dijit.typematic.trigger(evt, _14e, node, _14f, node, _150, _151, _152);
                }), dc(node, "mouseup", this, function (evt) {
                    dojo.stopEvent(evt);
                    dijit.typematic.stop();
                }), dc(node, "mouseout", this, function (evt) {
                    dojo.stopEvent(evt);
                    dijit.typematic.stop();
                }), dc(node, "mousemove", this, function (evt) {
                    evt.preventDefault();
                }), dc(node, "dblclick", this, function (evt) {
                    dojo.stopEvent(evt);
                    if (dojo.isIE) {
                        dijit.typematic.trigger(evt, _14e, node, _14f, node, _150, _151, _152);
                        setTimeout(dojo.hitch(this, dijit.typematic.stop), 50);
                    }
                })];
        }, addListener: function (_153, _154, _155, _156, _157, _158, _159, _15a) {
            return this.addKeyListener(_154, _155, _156, _157, _158, _159, _15a).concat(this.addMouseListener(_153, _156, _157, _158, _159, _15a));
        }};
}
if (!dojo._hasResource["dijit._base.wai"]) {
    dojo._hasResource["dijit._base.wai"] = true;
    dojo.provide("dijit._base.wai");
    dijit.wai = {onload: function () {
            var div = dojo.create("div", {id: "a11yTestNode", style: {cssText: "border: 1px solid;" + "border-color:red green;" + "position: absolute;" + "height: 5px;" + "top: -999px;" + "background-image: url(\"" + (dojo.config.blankGif || dojo.moduleUrl("dojo", "resources/blank.gif")) + "\");"}}, dojo.body());
            var cs = dojo.getComputedStyle(div);
            if (cs) {
                var _15b = cs.backgroundImage;
                var _15c = (cs.borderTopColor == cs.borderRightColor) || (_15b != null && (_15b == "none" || _15b == "url(invalid-url:)"));
                dojo[_15c ? "addClass" : "removeClass"](dojo.body(), "dijit_a11y");
                if (dojo.isIE) {
                    div.outerHTML = "";
                } else {
                    dojo.body().removeChild(div);
                }
            }
        }};
    if (dojo.isIE || dojo.isMoz) {
        dojo._loaders.unshift(dijit.wai.onload);
    }
    dojo.mixin(dijit, {hasWaiRole: function (elem, role) {
            var _15d = this.getWaiRole(elem);
            return role ? (_15d.indexOf(role) > -1) : (_15d.length > 0);
        }, getWaiRole: function (elem) {
            return dojo.trim((dojo.attr(elem, "role") || "").replace("wairole:", ""));
        }, setWaiRole: function (elem, role) {
            dojo.attr(elem, "role", role);
        }, removeWaiRole: function (elem, role) {
            var _15e = dojo.attr(elem, "role");
            if (!_15e) {
                return;
            }
            if (role) {
                var t = dojo.trim((" " + _15e + " ").replace(" " + role + " ", " "));
                dojo.attr(elem, "role", t);
            } else {
                elem.removeAttribute("role");
            }
        }, hasWaiState: function (elem, _15f) {
            return elem.hasAttribute ? elem.hasAttribute("aria-" + _15f) : !!elem.getAttribute("aria-" + _15f);
        }, getWaiState: function (elem, _160) {
            return elem.getAttribute("aria-" + _160) || "";
        }, setWaiState: function (elem, _161, _162) {
            elem.setAttribute("aria-" + _161, _162);
        }, removeWaiState: function (elem, _163) {
            elem.removeAttribute("aria-" + _163);
        }});
}
if (!dojo._hasResource["dijit._base"]) {
    dojo._hasResource["dijit._base"] = true;
    dojo.provide("dijit._base");
}
if (!dojo._hasResource["dijit._Widget"]) {
    dojo._hasResource["dijit._Widget"] = true;
    dojo.provide("dijit._Widget");
    dojo.connect(dojo, "_connect", function (_164, _165) {
        if (_164 && dojo.isFunction(_164._onConnect)) {
            _164._onConnect(_165);
        }
    });
    dijit._connectOnUseEventHandler = function (_166) {
    };
    dijit._lastKeyDownNode = null;
    if (dojo.isIE) {
        (function () {
            var _167 = function (evt) {
                dijit._lastKeyDownNode = evt.srcElement;
            };
            dojo.doc.attachEvent("onkeydown", _167);
            dojo.addOnWindowUnload(function () {
                dojo.doc.detachEvent("onkeydown", _167);
            });
        })();
    } else {
        dojo.doc.addEventListener("keydown", function (evt) {
            dijit._lastKeyDownNode = evt.target;
        }, true);
    }
    (function () {
        dojo.declare("dijit._Widget", dijit._WidgetBase, {_deferredConnects: {onClick: "", onDblClick: "", onKeyDown: "", onKeyPress: "", onKeyUp: "", onMouseMove: "", onMouseDown: "", onMouseOut: "", onMouseOver: "", onMouseLeave: "", onMouseEnter: "", onMouseUp: ""}, onClick: dijit._connectOnUseEventHandler, onDblClick: dijit._connectOnUseEventHandler, onKeyDown: dijit._connectOnUseEventHandler, onKeyPress: dijit._connectOnUseEventHandler, onKeyUp: dijit._connectOnUseEventHandler, onMouseDown: dijit._connectOnUseEventHandler, onMouseMove: dijit._connectOnUseEventHandler, onMouseOut: dijit._connectOnUseEventHandler, onMouseOver: dijit._connectOnUseEventHandler, onMouseLeave: dijit._connectOnUseEventHandler, onMouseEnter: dijit._connectOnUseEventHandler, onMouseUp: dijit._connectOnUseEventHandler, create: function (_168, _169) {
                this._deferredConnects = dojo.clone(this._deferredConnects);
                for (var attr in this.attributeMap) {
                    delete this._deferredConnects[attr];
                }
                for (attr in this._deferredConnects) {
                    if (this[attr] !== dijit._connectOnUseEventHandler) {
                        delete this._deferredConnects[attr];
                    }
                }
                this.inherited(arguments);
                if (this.domNode) {
                    for (attr in this.params) {
                        this._onConnect(attr);
                    }
                }
            }, _onConnect: function (_16a) {
                if (_16a in this._deferredConnects) {
                    var _16b = this[this._deferredConnects[_16a] || "domNode"];
                    this.connect(_16b, _16a.toLowerCase(), _16a);
                    delete this._deferredConnects[_16a];
                }
            }, focused: false, isFocusable: function () {
                return this.focus && (dojo.style(this.domNode, "display") != "none");
            }, onFocus: function () {
            }, onBlur: function () {
            }, _onFocus: function (e) {
                this.onFocus();
            }, _onBlur: function () {
                this.onBlur();
            }, setAttribute: function (attr, _16c) {
                dojo.deprecated(this.declaredClass + "::setAttribute(attr, value) is deprecated. Use set() instead.", "", "2.0");
                this.set(attr, _16c);
            }, attr: function (name, _16d) {
                if (dojo.config.isDebug) {
                    var _16e = arguments.callee._ach || (arguments.callee._ach = {}), _16f = (arguments.callee.caller || "unknown caller").toString();
                    if (!_16e[_16f]) {
                        dojo.deprecated(this.declaredClass + "::attr() is deprecated. Use get() or set() instead, called from " + _16f, "", "2.0");
                        _16e[_16f] = true;
                    }
                }
                var args = arguments.length;
                if (args >= 2 || typeof name === "object") {
                    return this.set.apply(this, arguments);
                } else {
                    return this.get(name);
                }
            }, nodesWithKeyClick: ["input", "button"], connect: function (obj, _170, _171) {
                var d = dojo, dc = d._connect, _172 = this.inherited(arguments, [obj, _170 == "ondijitclick" ? "onclick" : _170, _171]);
                if (_170 == "ondijitclick") {
                    if (d.indexOf(this.nodesWithKeyClick, obj.nodeName.toLowerCase()) == -1) {
                        var m = d.hitch(this, _171);
                        _172.push(dc(obj, "onkeydown", this, function (e) {
                            if ((e.keyCode == d.keys.ENTER || e.keyCode == d.keys.SPACE) && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
                                dijit._lastKeyDownNode = e.target;
                                if (!("openDropDown" in this && obj == this._buttonNode)) {
                                    e.preventDefault();
                                }
                            }
                        }), dc(obj, "onkeyup", this, function (e) {
                            if ((e.keyCode == d.keys.ENTER || e.keyCode == d.keys.SPACE) && e.target == dijit._lastKeyDownNode && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
                                dijit._lastKeyDownNode = null;
                                return m(e);
                            }
                        }));
                    }
                }
                return _172;
            }, _onShow: function () {
                this.onShow();
            }, onShow: function () {
            }, onHide: function () {
            }, onClose: function () {
                return true;
            }});
    })();
}
if (!dojo._hasResource["dojo.string"]) {
    dojo._hasResource["dojo.string"] = true;
    dojo.provide("dojo.string");
    dojo.getObject("string", true, dojo);
    dojo.string.rep = function (str, num) {
        if (num <= 0 || !str) {
            return "";
        }
        var buf = [];
        for (; ; ) {
            if (num & 1) {
                buf.push(str);
            }
            if (!(num >>= 1)) {
                break;
            }
            str += str;
        }
        return buf.join("");
    };
    dojo.string.pad = function (text, size, ch, end) {
        if (!ch) {
            ch = "0";
        }
        var out = String(text), pad = dojo.string.rep(ch, Math.ceil((size - out.length) / ch.length));
        return end ? out + pad : pad + out;
    };
    dojo.string.substitute = function (_173, map, _174, _175) {
        _175 = _175 || dojo.global;
        _174 = _174 ? dojo.hitch(_175, _174) : function (v) {
            return v;
        };
        return _173.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, function (_176, key, _177) {
            var _178 = dojo.getObject(key, false, map);
            if (_177) {
                _178 = dojo.getObject(_177, false, _175).call(_175, _178, key);
            }
            return _174(_178, key).toString();
        });
    };
    dojo.string.trim = String.prototype.trim ? dojo.trim : function (str) {
        str = str.replace(/^\s+/, "");
        for (var i = str.length - 1; i >= 0; i--) {
            if (/\S/.test(str.charAt(i))) {
                str = str.substring(0, i + 1);
                break;
            }
        }
        return str;
    };
}
if (!dojo._hasResource["dojo.date.stamp"]) {
    dojo._hasResource["dojo.date.stamp"] = true;
    dojo.provide("dojo.date.stamp");
    dojo.getObject("date.stamp", true, dojo);
    dojo.date.stamp.fromISOString = function (_179, _17a) {
        if (!dojo.date.stamp._isoRegExp) {
            dojo.date.stamp._isoRegExp = /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;
        }
        var _17b = dojo.date.stamp._isoRegExp.exec(_179), _17c = null;
        if (_17b) {
            _17b.shift();
            if (_17b[1]) {
                _17b[1]--;
            }
            if (_17b[6]) {
                _17b[6] *= 1000;
            }
            if (_17a) {
                _17a = new Date(_17a);
                dojo.forEach(dojo.map(["FullYear", "Month", "Date", "Hours", "Minutes", "Seconds", "Milliseconds"], function (prop) {
                    return _17a["get" + prop]();
                }), function (_17d, _17e) {
                    _17b[_17e] = _17b[_17e] || _17d;
                });
            }
            _17c = new Date(_17b[0] || 1970, _17b[1] || 0, _17b[2] || 1, _17b[3] || 0, _17b[4] || 0, _17b[5] || 0, _17b[6] || 0);
            if (_17b[0] < 100) {
                _17c.setFullYear(_17b[0] || 1970);
            }
            var _17f = 0, _180 = _17b[7] && _17b[7].charAt(0);
            if (_180 != "Z") {
                _17f = ((_17b[8] || 0) * 60) + (Number(_17b[9]) || 0);
                if (_180 != "-") {
                    _17f *= -1;
                }
            }
            if (_180) {
                _17f -= _17c.getTimezoneOffset();
            }
            if (_17f) {
                _17c.setTime(_17c.getTime() + _17f * 60000);
            }
        }
        return _17c;
    };
    dojo.date.stamp.toISOString = function (_181, _182) {
        var _183 = function (n) {
            return (n < 10) ? "0" + n : n;
        };
        _182 = _182 || {};
        var _184 = [], _185 = _182.zulu ? "getUTC" : "get", date = "";
        if (_182.selector != "time") {
            var year = _181[_185 + "FullYear"]();
            date = ["0000".substr((year + "").length) + year, _183(_181[_185 + "Month"]() + 1), _183(_181[_185 + "Date"]())].join("-");
        }
        _184.push(date);
        if (_182.selector != "date") {
            var time = [_183(_181[_185 + "Hours"]()), _183(_181[_185 + "Minutes"]()), _183(_181[_185 + "Seconds"]())].join(":");
            var _186 = _181[_185 + "Milliseconds"]();
            if (_182.milliseconds) {
                time += "." + (_186 < 100 ? "0" : "") + _183(_186);
            }
            if (_182.zulu) {
                time += "Z";
            } else {
                if (_182.selector != "time") {
                    var _187 = _181.getTimezoneOffset();
                    var _188 = Math.abs(_187);
                    time += (_187 > 0 ? "-" : "+") + _183(Math.floor(_188 / 60)) + ":" + _183(_188 % 60);
                }
            }
            _184.push(time);
        }
        return _184.join("T");
    };
}
if (!dojo._hasResource["dojo.parser"]) {
    dojo._hasResource["dojo.parser"] = true;
    dojo.provide("dojo.parser");
    new Date("X");
    dojo.parser = new function () {
        var d = dojo;
        function _189(_18a) {
            if (d.isString(_18a)) {
                return "string";
            }
            if (typeof _18a == "number") {
                return "number";
            }
            if (typeof _18a == "boolean") {
                return "boolean";
            }
            if (d.isFunction(_18a)) {
                return "function";
            }
            if (d.isArray(_18a)) {
                return "array";
            }
            if (_18a instanceof Date) {
                return "date";
            }
            if (_18a instanceof d._Url) {
                return "url";
            }
            return "object";
        }
        ;
        function _18b(_18c, type) {
            switch (type) {
                case "string":
                    return _18c;
                case "number":
                    return _18c.length ? Number(_18c) : NaN;
                case "boolean":
                    return typeof _18c == "boolean" ? _18c : !(_18c.toLowerCase() == "false");
                case "function":
                    if (d.isFunction(_18c)) {
                        _18c = _18c.toString();
                        _18c = d.trim(_18c.substring(_18c.indexOf("{") + 1, _18c.length - 1));
                    }
                    try {
                        if (_18c === "" || _18c.search(/[^\w\.]+/i) != -1) {
                            return new Function(_18c);
                        } else {
                            return d.getObject(_18c, false) || new Function(_18c);
                        }
                    } catch (e) {
                        return new Function();
                    }
                case "array":
                    return _18c ? _18c.split(/\s*,\s*/) : [];
                case "date":
                    switch (_18c) {
                        case "":
                            return new Date("");
                        case "now":
                            return new Date();
                        default:
                            return d.date.stamp.fromISOString(_18c);
                    }
                case "url":
                    return d.baseUrl + _18c;
                default:
                    return d.fromJson(_18c);
                }
        }
        ;
        var _18d = {}, _18e = {};
        d.connect(d, "extend", function () {
            _18e = {};
        });
        function _18f(cls, _190) {
            for (var name in cls) {
                if (name.charAt(0) == "_") {
                    continue;
                }
                if (name in _18d) {
                    continue;
                }
                _190[name] = _189(cls[name]);
            }
            return _190;
        }
        ;
        function _191(_192, _193) {
            var c = _18e[_192];
            if (!c) {
                var cls = d.getObject(_192), _194 = null;
                if (!cls) {
                    return null;
                }
                if (!_193) {
                    _194 = _18f(cls.prototype, {});
                }
                c = {cls: cls, params: _194};
            } else {
                if (!_193 && !c.params) {
                    c.params = _18f(c.cls.prototype, {});
                }
            }
            return c;
        }
        ;
        this._functionFromScript = function (_195, _196) {
            var _197 = "";
            var _198 = "";
            var _199 = (_195.getAttribute(_196 + "args") || _195.getAttribute("args"));
            if (_199) {
                d.forEach(_199.split(/\s*,\s*/), function (part, idx) {
                    _197 += "var " + part + " = arguments[" + idx + "]; ";
                });
            }
            var _19a = _195.getAttribute("with");
            if (_19a && _19a.length) {
                d.forEach(_19a.split(/\s*,\s*/), function (part) {
                    _197 += "with(" + part + "){";
                    _198 += "}";
                });
            }
            return new Function(_197 + _195.innerHTML + _198);
        };
        this.instantiate = function (_19b, _19c, args) {
            var _19d = [], _19c = _19c || {};
            args = args || {};
            var _19e = (args.scope || d._scopeName) + "Type", _19f = "data-" + (args.scope || d._scopeName) + "-";
            d.forEach(_19b, function (obj) {
                if (!obj) {
                    return;
                }
                var node, type, _1a0, _1a1, _1a2, _1a3;
                if (obj.node) {
                    node = obj.node;
                    type = obj.type;
                    _1a3 = obj.fastpath;
                    _1a0 = obj.clsInfo || (type && _191(type, _1a3));
                    _1a1 = _1a0 && _1a0.cls;
                    _1a2 = obj.scripts;
                } else {
                    node = obj;
                    type = _19e in _19c ? _19c[_19e] : node.getAttribute(_19e);
                    _1a0 = type && _191(type);
                    _1a1 = _1a0 && _1a0.cls;
                    _1a2 = (_1a1 && (_1a1._noScript || _1a1.prototype._noScript) ? [] : d.query("> script[type^='dojo/']", node));
                }
                if (!_1a0) {
                    throw new Error("Could not load class '" + type);
                }
                var _1a4 = {};
                if (args.defaults) {
                    d._mixin(_1a4, args.defaults);
                }
                if (obj.inherited) {
                    d._mixin(_1a4, obj.inherited);
                }
                if (_1a3) {
                    var _1a5 = node.getAttribute(_19f + "props");
                    if (_1a5 && _1a5.length) {
                        try {
                            _1a5 = d.fromJson.call(args.propsThis, "{" + _1a5 + "}");
                            d._mixin(_1a4, _1a5);
                        } catch (e) {
                            throw new Error(e.toString() + " in data-dojo-props='" + _1a5 + "'");
                        }
                    }
                    var _1a6 = node.getAttribute(_19f + "attach-point");
                    if (_1a6) {
                        _1a4.dojoAttachPoint = _1a6;
                    }
                    var _1a7 = node.getAttribute(_19f + "attach-event");
                    if (_1a7) {
                        _1a4.dojoAttachEvent = _1a7;
                    }
                    dojo.mixin(_1a4, _19c);
                } else {
                    var _1a8 = node.attributes;
                    for (var name in _1a0.params) {
                        var item = name in _19c ? {value: _19c[name], specified: true} : _1a8.getNamedItem(name);
                        if (!item || (!item.specified && (!dojo.isIE || name.toLowerCase() != "value"))) {
                            continue;
                        }
                        var _1a9 = item.value;
                        switch (name) {
                            case "class":
                                _1a9 = "className" in _19c ? _19c.className : node.className;
                                break;
                            case "style":
                                _1a9 = "style" in _19c ? _19c.style : (node.style && node.style.cssText);
                        }
                        var _1aa = _1a0.params[name];
                        if (typeof _1a9 == "string") {
                            _1a4[name] = _18b(_1a9, _1aa);
                        } else {
                            _1a4[name] = _1a9;
                        }
                    }
                }
                var _1ab = [], _1ac = [];
                d.forEach(_1a2, function (_1ad) {
                    node.removeChild(_1ad);
                    var _1ae = (_1ad.getAttribute(_19f + "event") || _1ad.getAttribute("event")), type = _1ad.getAttribute("type"), nf = d.parser._functionFromScript(_1ad, _19f);
                    if (_1ae) {
                        if (type == "dojo/connect") {
                            _1ab.push({event: _1ae, func: nf});
                        } else {
                            _1a4[_1ae] = nf;
                        }
                    } else {
                        _1ac.push(nf);
                    }
                });
                var _1af = _1a1.markupFactory || _1a1.prototype && _1a1.prototype.markupFactory;
                var _1b0 = _1af ? _1af(_1a4, node, _1a1) : new _1a1(_1a4, node);
                _19d.push(_1b0);
                var _1b1 = (node.getAttribute(_19f + "id") || node.getAttribute("jsId"));
                if (_1b1) {
                    d.setObject(_1b1, _1b0);
                }
                d.forEach(_1ab, function (_1b2) {
                    d.connect(_1b0, _1b2.event, null, _1b2.func);
                });
                d.forEach(_1ac, function (func) {
                    func.call(_1b0);
                });
            });
            if (!_19c._started) {
                d.forEach(_19d, function (_1b3) {
                    if (!args.noStart && _1b3 && dojo.isFunction(_1b3.startup) && !_1b3._started && (!_1b3.getParent || !_1b3.getParent())) {
                        _1b3.startup();
                    }
                });
            }
            return _19d;
        };
        this.parse = function (_1b4, args) {
            var root;
            if (!args && _1b4 && _1b4.rootNode) {
                args = _1b4;
                root = args.rootNode;
            } else {
                root = _1b4;
            }
            root = root ? dojo.byId(root) : dojo.body();
            args = args || {};
            var _1b5 = (args.scope || d._scopeName) + "Type", _1b6 = "data-" + (args.scope || d._scopeName) + "-";
            function scan(_1b7, list) {
                var _1b8 = dojo.clone(_1b7.inherited);
                dojo.forEach(["dir", "lang"], function (name) {
                    var val = _1b7.node.getAttribute(name);
                    if (val) {
                        _1b8[name] = val;
                    }
                });
                var _1b9 = _1b7.clsInfo && !_1b7.clsInfo.cls.prototype._noScript ? _1b7.scripts : null;
                var _1ba = (!_1b7.clsInfo || !_1b7.clsInfo.cls.prototype.stopParser) || (args && args.template);
                for (var _1bb = _1b7.node.firstChild; _1bb; _1bb = _1bb.nextSibling) {
                    if (_1bb.nodeType == 1) {
                        var type, _1bc = _1ba && _1bb.getAttribute(_1b6 + "type");
                        if (_1bc) {
                            type = _1bc;
                        } else {
                            type = _1ba && _1bb.getAttribute(_1b5);
                        }
                        var _1bd = _1bc == type;
                        if (type) {
                            var _1be = {"type": type, fastpath: _1bd, clsInfo: _191(type, _1bd), node: _1bb, scripts: [], inherited: _1b8};
                            list.push(_1be);
                            scan(_1be, list);
                        } else {
                            if (_1b9 && _1bb.nodeName.toLowerCase() == "script") {
                                type = _1bb.getAttribute("type");
                                if (type && /^dojo\/\w/i.test(type)) {
                                    _1b9.push(_1bb);
                                }
                            } else {
                                if (_1ba) {
                                    scan({node: _1bb, inherited: _1b8}, list);
                                }
                            }
                        }
                    }
                }
            }
            ;
            var _1bf = {};
            if (args && args.inherited) {
                for (var key in args.inherited) {
                    if (args.inherited[key]) {
                        _1bf[key] = args.inherited[key];
                    }
                }
            }
            var list = [];
            scan({node: root, inherited: _1bf}, list);
            var _1c0 = args && args.template ? {template: true} : null;
            return this.instantiate(list, _1c0, args);
        };
    }();
    (function () {
        var _1c1 = function () {
            if (dojo.config.parseOnLoad) {
                dojo.parser.parse();
            }
        };
        if (dojo.getObject("dijit.wai.onload") === dojo._loaders[0]) {
            dojo._loaders.splice(1, 0, _1c1);
        } else {
            dojo._loaders.unshift(_1c1);
        }
    })();
}
if (!dojo._hasResource["dojo.cache"]) {
    dojo._hasResource["dojo.cache"] = true;
    dojo.provide("dojo.cache");
    var cache = {};
    dojo.cache = function (_1c2, url, _1c3) {
        if (typeof _1c2 == "string") {
            var _1c4 = dojo.moduleUrl(_1c2, url);
        } else {
            _1c4 = _1c2;
            _1c3 = url;
        }
        var key = _1c4.toString();
        var val = _1c3;
        if (_1c3 != undefined && !dojo.isString(_1c3)) {
            val = ("value" in _1c3 ? _1c3.value : undefined);
        }
        var _1c5 = _1c3 && _1c3.sanitize ? true : false;
        if (typeof val == "string") {
            val = cache[key] = _1c5 ? dojo.cache._sanitize(val) : val;
        } else {
            if (val === null) {
                delete cache[key];
            } else {
                if (!(key in cache)) {
                    val = dojo._getText(key);
                    cache[key] = _1c5 ? dojo.cache._sanitize(val) : val;
                }
                val = cache[key];
            }
        }
        return val;
    };
    dojo.cache._sanitize = function (val) {
        if (val) {
            val = val.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, "");
            var _1c6 = val.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
            if (_1c6) {
                val = _1c6[1];
            }
        } else {
            val = "";
        }
        return val;
    };
}
if (!dojo._hasResource["dijit._Templated"]) {
    dojo._hasResource["dijit._Templated"] = true;
    dojo.provide("dijit._Templated");
    dojo.declare("dijit._Templated", null, {templateString: null, templatePath: null, widgetsInTemplate: false, _skipNodeCache: false, _earlyTemplatedStartup: false, constructor: function () {
            this._attachPoints = [];
            this._attachEvents = [];
        }, _stringRepl: function (tmpl) {
            var _1c7 = this.declaredClass, _1c8 = this;
            return dojo.string.substitute(tmpl, this, function (_1c9, key) {
                if (key.charAt(0) == "!") {
                    _1c9 = dojo.getObject(key.substr(1), false, _1c8);
                }
                if (typeof _1c9 == "undefined") {
                    throw new Error(_1c7 + " template:" + key);
                }
                if (_1c9 == null) {
                    return "";
                }
                return key.charAt(0) == "!" ? _1c9 : _1c9.toString().replace(/"/g, "&quot;");
            }, this);
        }, buildRendering: function () {
            var _1ca = dijit._Templated.getCachedTemplate(this.templatePath, this.templateString, this._skipNodeCache);
            var node;
            if (dojo.isString(_1ca)) {
                node = dojo._toDom(this._stringRepl(_1ca));
                if (node.nodeType != 1) {
                    throw new Error("Invalid template: " + _1ca);
                }
            } else {
                node = _1ca.cloneNode(true);
            }
            this.domNode = node;
            this.inherited(arguments);
            this._attachTemplateNodes(node);
            if (this.widgetsInTemplate) {
                var cw = (this._startupWidgets = dojo.parser.parse(node, {noStart: !this._earlyTemplatedStartup, template: true, inherited: {dir: this.dir, lang: this.lang}, propsThis: this, scope: "dojo"}));
                this._supportingWidgets = dijit.findWidgets(node);
                this._attachTemplateNodes(cw, function (n, p) {
                    return n[p];
                });
            }
            this._fillContent(this.srcNodeRef);
        }, _fillContent: function (_1cb) {
            var dest = this.containerNode;
            if (_1cb && dest) {
                while (_1cb.hasChildNodes()) {
                    dest.appendChild(_1cb.firstChild);
                }
            }
        }, _attachTemplateNodes: function (_1cc, _1cd) {
            _1cd = _1cd || function (n, p) {
                return n.getAttribute(p);
            };
            var _1ce = dojo.isArray(_1cc) ? _1cc : (_1cc.all || _1cc.getElementsByTagName("*"));
            var x = dojo.isArray(_1cc) ? 0 : -1;
            for (; x < _1ce.length; x++) {
                var _1cf = (x == -1) ? _1cc : _1ce[x];
                if (this.widgetsInTemplate && (_1cd(_1cf, "dojoType") || _1cd(_1cf, "data-dojo-type"))) {
                    continue;
                }
                var _1d0 = _1cd(_1cf, "dojoAttachPoint") || _1cd(_1cf, "data-dojo-attach-point");
                if (_1d0) {
                    var _1d1, _1d2 = _1d0.split(/\s*,\s*/);
                    while ((_1d1 = _1d2.shift())) {
                        if (dojo.isArray(this[_1d1])) {
                            this[_1d1].push(_1cf);
                        } else {
                            this[_1d1] = _1cf;
                        }
                        this._attachPoints.push(_1d1);
                    }
                }
                var _1d3 = _1cd(_1cf, "dojoAttachEvent") || _1cd(_1cf, "data-dojo-attach-event");
                if (_1d3) {
                    var _1d4, _1d5 = _1d3.split(/\s*,\s*/);
                    var trim = dojo.trim;
                    while ((_1d4 = _1d5.shift())) {
                        if (_1d4) {
                            var _1d6 = null;
                            if (_1d4.indexOf(":") != -1) {
                                var _1d7 = _1d4.split(":");
                                _1d4 = trim(_1d7[0]);
                                _1d6 = trim(_1d7[1]);
                            } else {
                                _1d4 = trim(_1d4);
                            }
                            if (!_1d6) {
                                _1d6 = _1d4;
                            }
                            this._attachEvents.push(this.connect(_1cf, _1d4, _1d6));
                        }
                    }
                }
                var role = _1cd(_1cf, "waiRole");
                if (role) {
                    dijit.setWaiRole(_1cf, role);
                }
                var _1d8 = _1cd(_1cf, "waiState");
                if (_1d8) {
                    dojo.forEach(_1d8.split(/\s*,\s*/), function (_1d9) {
                        if (_1d9.indexOf("-") != -1) {
                            var pair = _1d9.split("-");
                            dijit.setWaiState(_1cf, pair[0], pair[1]);
                        }
                    });
                }
            }
        }, startup: function () {
            dojo.forEach(this._startupWidgets, function (w) {
                if (w && !w._started && w.startup) {
                    w.startup();
                }
            });
            this.inherited(arguments);
        }, destroyRendering: function () {
            dojo.forEach(this._attachPoints, function (_1da) {
                delete this[_1da];
            }, this);
            this._attachPoints = [];
            dojo.forEach(this._attachEvents, this.disconnect, this);
            this._attachEvents = [];
            this.inherited(arguments);
        }});
    dijit._Templated._templateCache = {};
    dijit._Templated.getCachedTemplate = function (_1db, _1dc, _1dd) {
        var _1de = dijit._Templated._templateCache;
        var key = _1dc || _1db;
        var _1df = _1de[key];
        if (_1df) {
            try {
                if (!_1df.ownerDocument || _1df.ownerDocument == dojo.doc) {
                    return _1df;
                }
            } catch (e) {
            }
            dojo.destroy(_1df);
        }
        if (!_1dc) {
            _1dc = dojo.cache(_1db, {sanitize: true});
        }
        _1dc = dojo.string.trim(_1dc);
        if (_1dd || _1dc.match(/\$\{([^\}]+)\}/g)) {
            return (_1de[key] = _1dc);
        } else {
            var node = dojo._toDom(_1dc);
            if (node.nodeType != 1) {
                throw new Error("Invalid template: " + _1dc);
            }
            return (_1de[key] = node);
        }
    };
    if (dojo.isIE) {
        dojo.addOnWindowUnload(function () {
            var _1e0 = dijit._Templated._templateCache;
            for (var key in _1e0) {
                var _1e1 = _1e0[key];
                if (typeof _1e1 == "object") {
                    dojo.destroy(_1e1);
                }
                delete _1e0[key];
            }
        });
    }
    dojo.extend(dijit._Widget, {dojoAttachEvent: "", dojoAttachPoint: "", waiRole: "", waiState: ""});
}
if (!dojo._hasResource["dijit._Container"]) {
    dojo._hasResource["dijit._Container"] = true;
    dojo.provide("dijit._Container");
    dojo.declare("dijit._Container", null, {isContainer: true, buildRendering: function () {
            this.inherited(arguments);
            if (!this.containerNode) {
                this.containerNode = this.domNode;
            }
        }, addChild: function (_1e2, _1e3) {
            var _1e4 = this.containerNode;
            if (_1e3 && typeof _1e3 == "number") {
                var _1e5 = this.getChildren();
                if (_1e5 && _1e5.length >= _1e3) {
                    _1e4 = _1e5[_1e3 - 1].domNode;
                    _1e3 = "after";
                }
            }
            dojo.place(_1e2.domNode, _1e4, _1e3);
            if (this._started && !_1e2._started) {
                _1e2.startup();
            }
        }, removeChild: function (_1e6) {
            if (typeof _1e6 == "number") {
                _1e6 = this.getChildren()[_1e6];
            }
            if (_1e6) {
                var node = _1e6.domNode;
                if (node && node.parentNode) {
                    node.parentNode.removeChild(node);
                }
            }
        }, hasChildren: function () {
            return this.getChildren().length > 0;
        }, destroyDescendants: function (_1e7) {
            dojo.forEach(this.getChildren(), function (_1e8) {
                _1e8.destroyRecursive(_1e7);
            });
        }, _getSiblingOfChild: function (_1e9, dir) {
            var node = _1e9.domNode, _1ea = (dir > 0 ? "nextSibling" : "previousSibling");
            do {
                node = node[_1ea];
            } while (node && (node.nodeType != 1 || !dijit.byNode(node)));
            return node && dijit.byNode(node);
        }, getIndexOfChild: function (_1eb) {
            return dojo.indexOf(this.getChildren(), _1eb);
        }, startup: function () {
            if (this._started) {
                return;
            }
            dojo.forEach(this.getChildren(), function (_1ec) {
                _1ec.startup();
            });
            this.inherited(arguments);
        }});
}
if (!dojo._hasResource["dijit._Contained"]) {
    dojo._hasResource["dijit._Contained"] = true;
    dojo.provide("dijit._Contained");
    dojo.declare("dijit._Contained", null, {getParent: function () {
            var _1ed = dijit.getEnclosingWidget(this.domNode.parentNode);
            return _1ed && _1ed.isContainer ? _1ed : null;
        }, _getSibling: function (_1ee) {
            var node = this.domNode;
            do {
                node = node[_1ee + "Sibling"];
            } while (node && node.nodeType != 1);
            return node && dijit.byNode(node);
        }, getPreviousSibling: function () {
            return this._getSibling("previous");
        }, getNextSibling: function () {
            return this._getSibling("next");
        }, getIndexInParent: function () {
            var p = this.getParent();
            if (!p || !p.getIndexOfChild) {
                return -1;
            }
            return p.getIndexOfChild(this);
        }});
}
if (!dojo._hasResource["dojo.NodeList-traverse"]) {
    dojo._hasResource["dojo.NodeList-traverse"] = true;
    dojo.provide("dojo.NodeList-traverse");
    dojo.extend(dojo.NodeList, {_buildArrayFromCallback: function (_1ef) {
            var ary = [];
            for (var i = 0; i < this.length; i++) {
                var _1f0 = _1ef.call(this[i], this[i], ary);
                if (_1f0) {
                    ary = ary.concat(_1f0);
                }
            }
            return ary;
        }, _getUniqueAsNodeList: function (_1f1) {
            var ary = [];
            for (var i = 0, node; node = _1f1[i]; i++) {
                if (node.nodeType == 1 && dojo.indexOf(ary, node) == -1) {
                    ary.push(node);
                }
            }
            return this._wrap(ary, null, this._NodeListCtor);
        }, _getUniqueNodeListWithParent: function (_1f2, _1f3) {
            var ary = this._getUniqueAsNodeList(_1f2);
            ary = (_1f3 ? dojo._filterQueryResult(ary, _1f3) : ary);
            return ary._stash(this);
        }, _getRelatedUniqueNodes: function (_1f4, _1f5) {
            return this._getUniqueNodeListWithParent(this._buildArrayFromCallback(_1f5), _1f4);
        }, children: function (_1f6) {
            return this._getRelatedUniqueNodes(_1f6, function (node, ary) {
                return dojo._toArray(node.childNodes);
            });
        }, closest: function (_1f7, root) {
            return this._getRelatedUniqueNodes(null, function (node, ary) {
                do {
                    if (dojo._filterQueryResult([node], _1f7, root).length) {
                        return node;
                    }
                } while (node != root && (node = node.parentNode) && node.nodeType == 1);
                return null;
            });
        }, parent: function (_1f8) {
            return this._getRelatedUniqueNodes(_1f8, function (node, ary) {
                return node.parentNode;
            });
        }, parents: function (_1f9) {
            return this._getRelatedUniqueNodes(_1f9, function (node, ary) {
                var pary = [];
                while (node.parentNode) {
                    node = node.parentNode;
                    pary.push(node);
                }
                return pary;
            });
        }, siblings: function (_1fa) {
            return this._getRelatedUniqueNodes(_1fa, function (node, ary) {
                var pary = [];
                var _1fb = (node.parentNode && node.parentNode.childNodes);
                for (var i = 0; i < _1fb.length; i++) {
                    if (_1fb[i] != node) {
                        pary.push(_1fb[i]);
                    }
                }
                return pary;
            });
        }, next: function (_1fc) {
            return this._getRelatedUniqueNodes(_1fc, function (node, ary) {
                var next = node.nextSibling;
                while (next && next.nodeType != 1) {
                    next = next.nextSibling;
                }
                return next;
            });
        }, nextAll: function (_1fd) {
            return this._getRelatedUniqueNodes(_1fd, function (node, ary) {
                var pary = [];
                var next = node;
                while ((next = next.nextSibling)) {
                    if (next.nodeType == 1) {
                        pary.push(next);
                    }
                }
                return pary;
            });
        }, prev: function (_1fe) {
            return this._getRelatedUniqueNodes(_1fe, function (node, ary) {
                var prev = node.previousSibling;
                while (prev && prev.nodeType != 1) {
                    prev = prev.previousSibling;
                }
                return prev;
            });
        }, prevAll: function (_1ff) {
            return this._getRelatedUniqueNodes(_1ff, function (node, ary) {
                var pary = [];
                var prev = node;
                while ((prev = prev.previousSibling)) {
                    if (prev.nodeType == 1) {
                        pary.push(prev);
                    }
                }
                return pary;
            });
        }, andSelf: function () {
            return this.concat(this._parent);
        }, first: function () {
            return this._wrap(((this[0] && [this[0]]) || []), this);
        }, last: function () {
            return this._wrap((this.length ? [this[this.length - 1]] : []), this);
        }, even: function () {
            return this.filter(function (item, i) {
                return i % 2 != 0;
            });
        }, odd: function () {
            return this.filter(function (item, i) {
                return i % 2 == 0;
            });
        }});
}
if (!dojo._hasResource["dojo.NodeList-manipulate"]) {
    dojo._hasResource["dojo.NodeList-manipulate"] = true;
    dojo.provide("dojo.NodeList-manipulate");
    (function () {
        function _200(node) {
            var text = "", ch = node.childNodes;
            for (var i = 0, n; n = ch[i]; i++) {
                if (n.nodeType != 8) {
                    if (n.nodeType == 1) {
                        text += _200(n);
                    } else {
                        text += n.nodeValue;
                    }
                }
            }
            return text;
        }
        ;
        function _201(node) {
            while (node.childNodes[0] && node.childNodes[0].nodeType == 1) {
                node = node.childNodes[0];
            }
            return node;
        }
        ;
        function _202(html, _203) {
            if (typeof html == "string") {
                html = dojo._toDom(html, (_203 && _203.ownerDocument));
                if (html.nodeType == 11) {
                    html = html.childNodes[0];
                }
            } else {
                if (html.nodeType == 1 && html.parentNode) {
                    html = html.cloneNode(false);
                }
            }
            return html;
        }
        ;
        dojo.extend(dojo.NodeList, {_placeMultiple: function (_204, _205) {
                var nl2 = typeof _204 == "string" || _204.nodeType ? dojo.query(_204) : _204;
                var _206 = [];
                for (var i = 0; i < nl2.length; i++) {
                    var _207 = nl2[i];
                    var _208 = this.length;
                    for (var j = _208 - 1, item; item = this[j]; j--) {
                        if (i > 0) {
                            item = this._cloneNode(item);
                            _206.unshift(item);
                        }
                        if (j == _208 - 1) {
                            dojo.place(item, _207, _205);
                        } else {
                            _207.parentNode.insertBefore(item, _207);
                        }
                        _207 = item;
                    }
                }
                if (_206.length) {
                    _206.unshift(0);
                    _206.unshift(this.length - 1);
                    Array.prototype.splice.apply(this, _206);
                }
                return this;
            }, innerHTML: function (_209) {
                if (arguments.length) {
                    return this.addContent(_209, "only");
                } else {
                    return this[0].innerHTML;
                }
            }, text: function (_20a) {
                if (arguments.length) {
                    for (var i = 0, node; node = this[i]; i++) {
                        if (node.nodeType == 1) {
                            dojo.empty(node);
                            node.appendChild(node.ownerDocument.createTextNode(_20a));
                        }
                    }
                    return this;
                } else {
                    var _20b = "";
                    for (i = 0; node = this[i]; i++) {
                        _20b += _200(node);
                    }
                    return _20b;
                }
            }, val: function (_20c) {
                if (arguments.length) {
                    var _20d = dojo.isArray(_20c);
                    for (var _20e = 0, node; node = this[_20e]; _20e++) {
                        var name = node.nodeName.toUpperCase();
                        var type = node.type;
                        var _20f = _20d ? _20c[_20e] : _20c;
                        if (name == "SELECT") {
                            var opts = node.options;
                            for (var i = 0; i < opts.length; i++) {
                                var opt = opts[i];
                                if (node.multiple) {
                                    opt.selected = (dojo.indexOf(_20c, opt.value) != -1);
                                } else {
                                    opt.selected = (opt.value == _20f);
                                }
                            }
                        } else {
                            if (type == "checkbox" || type == "radio") {
                                node.checked = (node.value == _20f);
                            } else {
                                node.value = _20f;
                            }
                        }
                    }
                    return this;
                } else {
                    node = this[0];
                    if (!node || node.nodeType != 1) {
                        return undefined;
                    }
                    _20c = node.value || "";
                    if (node.nodeName.toUpperCase() == "SELECT" && node.multiple) {
                        _20c = [];
                        opts = node.options;
                        for (i = 0; i < opts.length; i++) {
                            opt = opts[i];
                            if (opt.selected) {
                                _20c.push(opt.value);
                            }
                        }
                        if (!_20c.length) {
                            _20c = null;
                        }
                    }
                    return _20c;
                }
            }, append: function (_210) {
                return this.addContent(_210, "last");
            }, appendTo: function (_211) {
                return this._placeMultiple(_211, "last");
            }, prepend: function (_212) {
                return this.addContent(_212, "first");
            }, prependTo: function (_213) {
                return this._placeMultiple(_213, "first");
            }, after: function (_214) {
                return this.addContent(_214, "after");
            }, insertAfter: function (_215) {
                return this._placeMultiple(_215, "after");
            }, before: function (_216) {
                return this.addContent(_216, "before");
            }, insertBefore: function (_217) {
                return this._placeMultiple(_217, "before");
            }, remove: dojo.NodeList.prototype.orphan, wrap: function (html) {
                if (this[0]) {
                    html = _202(html, this[0]);
                    for (var i = 0, node; node = this[i]; i++) {
                        var _218 = this._cloneNode(html);
                        if (node.parentNode) {
                            node.parentNode.replaceChild(_218, node);
                        }
                        var _219 = _201(_218);
                        _219.appendChild(node);
                    }
                }
                return this;
            }, wrapAll: function (html) {
                if (this[0]) {
                    html = _202(html, this[0]);
                    this[0].parentNode.replaceChild(html, this[0]);
                    var _21a = _201(html);
                    for (var i = 0, node; node = this[i]; i++) {
                        _21a.appendChild(node);
                    }
                }
                return this;
            }, wrapInner: function (html) {
                if (this[0]) {
                    html = _202(html, this[0]);
                    for (var i = 0; i < this.length; i++) {
                        var _21b = this._cloneNode(html);
                        this._wrap(dojo._toArray(this[i].childNodes), null, this._NodeListCtor).wrapAll(_21b);
                    }
                }
                return this;
            }, replaceWith: function (_21c) {
                _21c = this._normalize(_21c, this[0]);
                for (var i = 0, node; node = this[i]; i++) {
                    this._place(_21c, node, "before", i > 0);
                    node.parentNode.removeChild(node);
                }
                return this;
            }, replaceAll: function (_21d) {
                var nl = dojo.query(_21d);
                var _21e = this._normalize(this, this[0]);
                for (var i = 0, node; node = nl[i]; i++) {
                    this._place(_21e, node, "before", i > 0);
                    node.parentNode.removeChild(node);
                }
                return this;
            }, clone: function () {
                var ary = [];
                for (var i = 0; i < this.length; i++) {
                    ary.push(this._cloneNode(this[i]));
                }
                return this._wrap(ary, this, this._NodeListCtor);
            }});
        if (!dojo.NodeList.prototype.html) {
            dojo.NodeList.prototype.html = dojo.NodeList.prototype.innerHTML;
        }
    })();
}
if (!dojo._hasResource["ibmweb.string"]) {
    dojo._hasResource["ibmweb.string"] = true;
    dojo.provide("ibmweb.string");
    ibmweb.string.normalizeSpace = function (str) {
        return str.replace(/\s+/g, " ");
    };
    String.prototype.normalizeSpace = function () {
        return ibmweb.string.normalizeSpace(this);
    };
    ibmweb.string.trim = function (str) {
        return str.replace(/^\s+/, "").replace(/\s+$/, "");
    };
    String.prototype.trim = function () {
        return ibmweb.string.trim(this);
    };
    ibmweb.string.htmlspecialchars = function (str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;");
    };
    String.prototype.htmlspecialchars = function () {
        return ibmweb.string.htmlspecialchars(this);
    };
    ibmweb.string.StringBuffer = function () {
        this.buffer = [];
    };
    ibmweb.string.StringBuffer.prototype.append = function append(_21f) {
        this.buffer.push(_21f);
        return this;
    };
    ibmweb.string.StringBuffer.prototype.toString = function toString(_220) {
        if (!this.buffer) {
            return "";
        }
        _220 = _220 || "";
        return this.buffer.join(_220);
    };
}
if (!dojo._hasResource["ibmweb.util"]) {
    dojo._hasResource["ibmweb.util"] = true;
    dojo.provide("ibmweb.util");
    ibmweb.util.__idcount = 0;
    ibmweb.util.generateId = function () {
        var nid;
        do {
            ibmweb.util.__idcount++;
            nid = "gi-" + ibmweb.util.__idcount;
        } while (document.getElementById(nid) != null);
        return nid;
    };
    ibmweb.util.getUrl = function () {
        var url = dojo.query("link[rel=canonical]").attr("href");
        if (url.length != 0) {
            return url[0];
        }
        url = location.href;
        if (url.indexOf("?") != -1) {
            var _221 = url.substr(0, url.indexOf("?"));
            var _222 = url.substr(url.indexOf("?") + 1).split("&");
            var _223 = /^(cm_re|ca|me|met|re|lnk)=/;
            var _224 = [];
            for (var i = 0, j = _222.length; i < j; i++) {
                if (!_223.test(_222[i])) {
                    _224.push(_222[i]);
                }
            }
            if (_224.length > 0) {
                url = _221 + "?" + _224.join("&");
            } else {
                url = _221;
            }
        }
        return url;
    };
    ibmweb.util.statsHelper = function (e) {
        if (typeof (ibmStats) != "undefined" && typeof (ibmStats.event) != "undefined") {
            if (!e.ibmEvLinkTitle && !e.ibmEvLinktitle) {
                var _225 = dojo.query("h1:first");
                if (_225.length > 0 && _225[0].innerHTML) {
                    dojo.mixin(e, {"ibmEvLinkTitle": _225[0].innerHTML});
                }
            }
            if (!e.ibmEvGroup) {
                e.ibmEvGroup = "null";
            }
            if (!e.ibmEvName) {
                e.ibmEvName = "null";
            }
            if (!e.ibmEvModule) {
                e.ibmEvModule = "null";
            }
            if (!e.ibmEvSection) {
                e.ibmEvSection = "null";
            }
            if (!e.ibmEvTarget) {
                e.ibmEvTarget = "null";
            }
            if (!e.ibmEvFileSize) {
                e.ibmEvFileSize = "null";
            }
            if (!e.ibmEvLinkTitle) {
                e.ibmEvLinkTitle = "null";
            }
            ibmStats.event(e);
        }
    };
    ibmweb.util.preloadImages = function (_226, _227) {
        var _228 = dojo.create("div", {style: {position: "absolute", top: "-9999px", height: "1px", overflow: "hidden"}}, dojo.body());
        var _229 = 0;
        dojo.forEach(_226, function (url) {
            var img = dojo.create("img", {src: url}, _228);
            dojo.connect(img, "onload", function () {
                _229 += 1;
                if (_229 == _226.length) {
                    if (typeof (_227) == "string") {
                        dojo.publish(_227);
                    } else {
                        _227();
                    }
                }
            });
        });
    };
    ibmweb.util.xhrGetHtml = function (_22a) {
        if (_22a.handleAs != "html") {
            return dojo.xhrGet(_22a);
        }
        _22a.handleAs = "text";
        var _22b = _22a.load;
        _22a.load = function (_22c) {
            _22c = _22c.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
            var html = dojo.create("div", {innerHTML: _22c}, null);
            _22b(html);
        };
        return dojo.xhrGet(_22a);
    };
}
if (!dojo._hasResource["ibmweb.queue"]) {
    dojo._hasResource["ibmweb.queue"] = true;
    dojo.provide("ibmweb.queue");
    ibmweb.queue._queue = [];
    ibmweb.queue._timer = null;
    ibmweb.queue._count = 0;
    ibmweb.queue._lock = false;
    ibmweb.queue.push = function (_22d, _22e) {
        ibmweb.queue._count++;
        ibmweb.queue._queue.push([ibmweb.queue._count, _22d, _22e]);
        ibmweb.queue._work();
        return ibmweb.queue._count;
    };
    ibmweb.queue.unshift = function (_22f, _230) {
        ibmweb.queue._count++;
        ibmweb.queue._queue.unshift([ibmweb.queue._count, _22f, _230]);
        ibmweb.queue._work();
        return ibmweb.queue._count;
    };
    ibmweb.queue.remove = function (_231) {
        for (var i = 0, j = ibmweb.queue._queue.length; i < j; i++) {
            if (ibmweb.queue._queue[i][0] == _231) {
                ibmweb.queue._queue.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    ibmweb.queue._work = function () {
        if (ibmweb.queue._lock) {
            return;
        }
        if (ibmweb.queue._queue.length == 0) {
            return;
        }
        ibmweb.queue._lock = true;
        for (var i = 0, j = ibmweb.queue._queue.length; i < j; i++) {
            if (ibmweb.queue._queue[i][1]()) {
                ibmweb.queue._queue[i][2]();
                ibmweb.queue._queue.splice(i, 1);
                i--;
                j = ibmweb.queue._queue.length;
            }
        }
        ibmweb.queue._lock = false;
        ibmweb.queue._timer = setTimeout(ibmweb.queue._work, 50);
    };
    ibmweb.queue.waitForElement = function (_232, _233, _234) {
        if (dojo._postLoad && typeof (_234) != "undefined" && _234 == true) {
            _233();
            return;
        }
        var done = false;
        var eid = ibmweb.queue.push(function () {
            return document.getElementById(_232) != null;
        }, function () {
            if (done) {
                return;
            }
            done = true;
            _233();
        });
        if (typeof (_234) != "undefined" && _234 == true) {
            dojo.addOnLoad(function () {
                if (done) {
                    return;
                }
                done = true;
                ibmweb.queue.remove(eid);
                _233();
            });
        }
    };
}
if (!dojo._hasResource["ibmweb.meta"]) {
    dojo._hasResource["ibmweb.meta"] = true;
    dojo.provide("ibmweb.meta");
    ibmweb.meta.isLoaded = false;
    ibmweb.meta._init = function () {
        var tags = dojo.query("head meta").forEach(function (tag, _235, _236) {
            var name = tag.httpEquiv || tag.name;
            name = name.toLowerCase().replace(/[^\w]/g, "_");
            ibmweb.meta[name] = dojo.attr(tag, "content");
        });
        this.wwCase = "";
        this.cc = "";
        this.lc = "";
        if (!!this.ibm_country) {
            this.cc = this.ibm_country.toLowerCase().trim();
            if (this.cc.indexOf(",") > -1) {
                this.cc = this.cc.substring(0, this.cc.indexOf(",")).trim();
            }
            if (this.cc == "gb") {
                this.cc = "uk";
            }
            if (this.cc == "zz") {
                this.cc = "us";
                this.wwCase = "Y";
            }
        }
        if (!!this.dc_language) {
            this.lc = this.dc_language.substring(0, 2).toLowerCase();
        }
        var _237 = document.getElementsByTagName("html")[0].lang;
        if (!!_237) {
            this.lc = this.lc || _237.substring(0, 2).toLowerCase();
            this.cc = this.cc || _237.substring(3, 5).toLowerCase();
        }
        this.lc = this.lc || "en";
        this.cc = this.cc || "us";
        this.cc = dojo.getObject("ibmweb.config.meta.cc") || this.cc;
        this.lc = dojo.getObject("ibmweb.config.meta.lc") || this.lc;
        this.cpi = this.cc + this.lc;
        if (this.cc === "us" && this.lc !== "en") {
            var _238 = {pt: "br", zh: "cn", de: "de", es: "es", fr: "fr", it: "it", ja: "jp", ko: "kr"};
            if (_238[this.lc]) {
                this.cpi = _238[this.lc] + this.lc;
            }
        }
        if (!this.dc_subject) {
            this.dc_subject = "ZZ999";
        }
        if (this.ibm_pageattributes == null) {
            this.ibm_pageattributes = "";
        }
        this.encoding = "utf8";
        this.encodingRaw = "UTF-8";
        if (this.content_type != null) {
            this.encodingRaw = this.content_type.substring(this.content_type.indexOf("=") + 1);
            this.encoding = this.encodingRaw.replace("-", "").replace("_", "").toLowerCase();
        }
        this.title = "";
        var tmp = dojo.query("title");
        if (tmp.length > 0) {
            this.title = tmp[0].innerHTML;
        }
        if (typeof (ibmwebConfigPortalFix) == "undefined") {
            if (!!window.ibmwebConfig && !!window.ibmwebConfig.noDojoLocaleOverride) {
                ibmweb.config.noDojoLocaleOverride = window.ibmwebConfig.noDojoLocaleOverride;
            }
            if (!ibmweb.config.noDojoLocaleOverride) {
                var cc = (this.cc == "uk") ? "gb" : this.cc;
                dojo.locale = dojo.config.locale = this.lc + "-" + cc;
            }
            if (ibmweb.meta._preloads.length > 0 && dojo.locale != "en-us") {
                for (var i = 0, j = ibmweb.meta._preloads.length; i < j; i++) {
                    ibmweb.meta._preloadHack(ibmweb.meta._preloads[i], ibmweb.meta._preloadLocales);
                }
            }
        }
        ibmweb.meta.isLoaded = true;
    };
    if (typeof (ibmwebConfigPortalFix) == "undefined") {
        ibmweb.meta._preloads = [];
        if (dojo._hasResource["dojo.i18n"]) {
            ibmweb.meta._preloadHack = dojo.i18n._preloadLocalizations;
            dojo.i18n._preloadLocalizations = function (_239, _23a) {
                ibmweb.meta._preloads.push(_239);
                ibmweb.meta._preloadLocales = _23a;
                ibmweb.meta._preloadHack.apply(dojo.i18n, arguments);
            };
        }
    }
    ibmweb.queue.waitForElement("ibm-top", function () {
        ibmweb.meta._init();
    }, true);
}
if (!dojo._hasResource["ibmweb.info"]) {
    dojo._hasResource["ibmweb.info"] = true;
    dojo.provide("ibmweb.info");
    ibmweb.info.isLoaded = false;
    ibmweb.info._init = function () {
        this.v11 = this.v14 = this.v15 = this.v16 = this.v17 = this.www = this.w3 = false;
        dojo.query("link[rel^=\"style\"]").forEach(function (node) {
            if (node.href.indexOf("/common/v17/") != -1 || node.href.indexOf("/common/v17e/") != -1 || node.href.indexOf("/resources/ecm/") != -1) {
                ibmweb.info.v17 = true;
            } else {
                if (node.href.indexOf("/common/v16/css/screen") != -1) {
                    ibmweb.info.v16 = true;
                } else {
                    if (node.href.indexOf("/common/v15/") != -1) {
                        ibmweb.info.v15 = true;
                    } else {
                        if (node.href.indexOf("/common/v14/") != -1) {
                            ibmweb.info.v14 = true;
                        } else {
                            if (node.href.indexOf("/data/css/v11/") != -1) {
                                ibmweb.info.v11 = true;
                            }
                        }
                    }
                }
            }
        });
        if (ibmweb.info.v16 && ibmweb.info.v17) {
            ibmweb.info.v17 = false;
        }
        if (ibmweb.config.config == "www") {
            this.www = true;
        }
        if (ibmweb.config.config == "w3") {
            this.w3 = true;
        }
        var m = "msie", ua = navigator.userAgent.toLowerCase(), v = 0;
        var mi = ua.indexOf(m);
        if (ua.indexOf("opera") == -1 && mi != -1) {
            this.isIE = true;
            v = parseFloat(ua.substring(mi + m.length).replace(/^[^0-9]+/, ""));
        } else {
            this.isIE = false;
        }
        this.ieVersion = isNaN(v) ? 0 : v;
        var ts = [];
        this.isGecko = ua.indexOf("gecko") != -1 && ua.indexOf("khtml") == -1;
        this.geckoVersion = 0;
        if (this.isGecko) {
            ts = ua.split("rv:");
            if (ts.length > 1) {
                v = parseFloat(ts[1]);
            }
            this.geckoVersion = isNaN(v) ? 0 : v;
        }
        var str = "opera";
        var si = ua.indexOf(str);
        if (si == -1) {
            this.isOldOpera = false;
        } else {
            var ver = parseFloat(ua.substring(si + str.length));
            if (ver < 9) {
                this.isOldOpera = true;
            } else {
                this.isOldOpera = false;
            }
            this.OperaVersion = parseFloat(ua.substring(ua.indexOf("version") + 8));
        }
        this.isLinux = (navigator.userAgent.indexOf("Linux") > -1);
        this.isDOM = (!!document.createElement && !!document.createTextNode && !!document.getElementById && !!document.getElementsByTagName);
        this.iDevice = /iPad|iPhone|iPod/i.test(navigator.userAgent);
        ibmweb.info.isLoaded = true;
    };
    ibmweb.queue.waitForElement("ibm-top", function () {
        ibmweb.info._init();
    }, true);
}
if (!dojo._hasResource["ibmweb.ibmcodesample"]) {
    dojo._hasResource["ibmweb.ibmcodesample"] = true;
    dojo.provide("ibmweb.ibmcodesample");
    ibmweb.ibmcodesample._init = function () {
        var _23b = [[/<br[\s|\W]*\/?>/gi, "<br />"], [/<(?!br \/)/gi, "&lt;"], [/&lt;(\/?)(\w*)/gi, function () {
                    var _23c = (arguments[1] == "") ? "" : "/", _23d = arguments[2].toLowerCase(), _23e = (_23d == "hr") ? "/" : "";
                    return "&lt;" + _23c + _23d + _23e;
                }], [/&(?!amp;|nbsp;|lt;|gt;)/gi, "&amp;"], [/(&lt;select[^&>]*(&gt;|>)|&lt;\/option[^&>]*(&gt;|>))/gi, function () {
                    if (!dojo.isIE) {
                        return arguments[0];
                    }
                    return arguments[0] + "<br />";
                }], [/\n\s*|\r\s*/gi, "<br />"], [/<br \/><br \/>/gi, "<br />"]];
        dojo.query(".ibm-alternate-code-sample pre, .ibm-alternate-code-sample code, .ibm-code-sample pre, .ibm-code-sample code").forEach(function (_23f) {
            var _240 = _23f.innerHTML;
            dojo.forEach(_23b, function (_241) {
                _240 = _240.replace(_241[0], _241[1]);
            });
            _23f.innerHTML = _240;
        });
    };
    ibmweb.queue.waitForElement("ibm-top", function () {
        ibmweb.ibmcodesample._init();
    }, true);
}
if (!dojo._hasResource["ibmweb.callback"]) {
    dojo._hasResource["ibmweb.callback"] = true;
    dojo.provide("ibmweb.callback");
    ibmweb.callback.__callbacks = {};
    ibmweb.callback.register = function (_242, _243) {
        dojo.subscribe("/ibmweb/callback/" + _242, _243);
    };
    ibmweb.callback.call = function (_244, data) {
        dojo.publish("/ibmweb/callback/" + _244, data);
    };
    ibmweb.callback.createJSONPWrapper = function () {
        var _245 = null;
        if (typeof (arguments[0]) == "function") {
            _245 = dojo.partial.apply(dojo.partial, arguments);
        } else {
            _245 = dojo.hitch.apply(dojo.hitch, arguments);
        }
        var _246 = "__tcb" + Math.round(Math.random() * 100000);
        window[_246] = _245;
        dojo.connect(null, _246, function () {
            window[_246] = null;
        });
        return _246;
    };
}
if (!dojo._hasResource["dojo.io.script"]) {
    dojo._hasResource["dojo.io.script"] = true;
    dojo.provide("dojo.io.script");
    dojo.getObject("io", true, dojo);
    (function () {
        var _247 = dojo.isIE ? "onreadystatechange" : "load", _248 = /complete|loaded/;
        dojo.io.script = {get: function (args) {
                var dfd = this._makeScriptDeferred(args);
                var _249 = dfd.ioArgs;
                dojo._ioAddQueryToUrl(_249);
                dojo._ioNotifyStart(dfd);
                if (this._canAttach(_249)) {
                    var node = this.attach(_249.id, _249.url, args.frameDoc);
                    if (!_249.jsonp && !_249.args.checkString) {
                        var _24a = dojo.connect(node, _247, function (evt) {
                            if (evt.type == "load" || _248.test(node.readyState)) {
                                dojo.disconnect(_24a);
                                _249.scriptLoaded = evt;
                            }
                        });
                    }
                }
                dojo._ioWatch(dfd, this._validCheck, this._ioCheck, this._resHandle);
                return dfd;
            }, attach: function (id, url, _24b) {
                var doc = (_24b || dojo.doc);
                var _24c = doc.createElement("script");
                _24c.type = "text/javascript";
                _24c.src = url;
                _24c.id = id;
                _24c.charset = "utf-8";
                return doc.getElementsByTagName("head")[0].appendChild(_24c);
            }, remove: function (id, _24d) {
                dojo.destroy(dojo.byId(id, _24d));
                if (this["jsonp_" + id]) {
                    delete this["jsonp_" + id];
                }
            }, _makeScriptDeferred: function (args) {
                var dfd = dojo._ioSetArgs(args, this._deferredCancel, this._deferredOk, this._deferredError);
                var _24e = dfd.ioArgs;
                _24e.id = dojo._scopeName + "IoScript" + (this._counter++);
                _24e.canDelete = false;
                _24e.jsonp = args.callbackParamName || args.jsonp;
                if (_24e.jsonp) {
                    _24e.query = _24e.query || "";
                    if (_24e.query.length > 0) {
                        _24e.query += "&";
                    }
                    _24e.query += _24e.jsonp + "=" + (args.frameDoc ? "parent." : "") + dojo._scopeName + ".io.script.jsonp_" + _24e.id + "._jsonpCallback";
                    _24e.frameDoc = args.frameDoc;
                    _24e.canDelete = true;
                    dfd._jsonpCallback = this._jsonpCallback;
                    this["jsonp_" + _24e.id] = dfd;
                }
                return dfd;
            }, _deferredCancel: function (dfd) {
                dfd.canceled = true;
                if (dfd.ioArgs.canDelete) {
                    dojo.io.script._addDeadScript(dfd.ioArgs);
                }
            }, _deferredOk: function (dfd) {
                var _24f = dfd.ioArgs;
                if (_24f.canDelete) {
                    dojo.io.script._addDeadScript(_24f);
                }
                return _24f.json || _24f.scriptLoaded || _24f;
            }, _deferredError: function (_250, dfd) {
                if (dfd.ioArgs.canDelete) {
                    if (_250.dojoType == "timeout") {
                        dojo.io.script.remove(dfd.ioArgs.id, dfd.ioArgs.frameDoc);
                    } else {
                        dojo.io.script._addDeadScript(dfd.ioArgs);
                    }
                }
                return _250;
            }, _deadScripts: [], _counter: 1, _addDeadScript: function (_251) {
                dojo.io.script._deadScripts.push({id: _251.id, frameDoc: _251.frameDoc});
                _251.frameDoc = null;
            }, _validCheck: function (dfd) {
                var _252 = dojo.io.script;
                var _253 = _252._deadScripts;
                if (_253 && _253.length > 0) {
                    for (var i = 0; i < _253.length; i++) {
                        _252.remove(_253[i].id, _253[i].frameDoc);
                        _253[i].frameDoc = null;
                    }
                    dojo.io.script._deadScripts = [];
                }
                return true;
            }, _ioCheck: function (dfd) {
                var _254 = dfd.ioArgs;
                if (_254.json || (_254.scriptLoaded && !_254.args.checkString)) {
                    return true;
                }
                var _255 = _254.args.checkString;
                if (_255 && eval("typeof(" + _255 + ") != 'undefined'")) {
                    return true;
                }
                return false;
            }, _resHandle: function (dfd) {
                if (dojo.io.script._ioCheck(dfd)) {
                    dfd.callback(dfd);
                } else {
                    dfd.errback(new Error("inconceivable dojo.io.script._resHandle error"));
                }
            }, _canAttach: function (_256) {
                return true;
            }, _jsonpCallback: function (json) {
                this.ioArgs.json = json;
            }};
    })();
}
if (!dojo._hasResource["ibmweb.data"]) {
    dojo._hasResource["ibmweb.data"] = true;
    dojo.provide("ibmweb.data");
    ibmweb.data.settings = {"url": "//www.ibm.com/common/translations/{TOKEN}/{CC}/{LC}/{ENC}.js", "cc": null, "lc": null, "enc": null};
    ibmweb.data.require = function (_257, _258, _259) {
        if (!_257) {
            return;
        }
        if (!dojo.isArray(_257)) {
            _257 = [_257];
        }
        var _25a = true;
        for (var i = 0, j = _257.length; i < j; i++) {
            _25a = _25a && ibmweb.data.exists(_257[i]);
        }
        if (!_25a) {
            var _25b = dojo.mixin(_25b, ibmweb.data.settings, _259);
            ibmweb.queue.push(function () {
                return ibmweb.meta.isLoaded;
            }, function () {
                var _25c = function (_25d) {
                    var url = _25b.url.replace("{CC}", _25b.cc ? _25b.cc : ibmweb.meta.cc).replace("{LC}", _25b.lc ? _25b.lc : ibmweb.meta.lc).replace("{TOKEN}", _25d).replace("{ENC}", _25b.enc ? _25b.enc : ibmweb.meta.encoding);
                    dojo.io.script.attach(null, url, null);
                };
                for (var i = 0, j = _257.length; i < j; i++) {
                    if (!ibmweb.data.exists(_257[i])) {
                        _25c(_257[i]);
                    }
                }
                ibmweb.queue.push(function () {
                    var _25e = true;
                    for (var i = 0, j = _257.length; i < j; i++) {
                        _25e = _25e && ibmweb.data.exists(_257[i]);
                    }
                    return _25e;
                }, function () {
                    if (typeof (_258) == "function") {
                        _258(ibmweb.data);
                    }
                });
            });
        } else {
            if (typeof (_258) == "function") {
                _258(ibmweb.data);
            }
        }
    };
    ibmweb.data.provide = function (_25f, _260) {
        ibmweb.data[_25f] = _260;
    };
    ibmweb.data.exists = function (_261) {
        return !!ibmweb.data[_261];
    };
}
if (!dojo._hasResource["dojo.fx.Toggler"]) {
    dojo._hasResource["dojo.fx.Toggler"] = true;
    dojo.provide("dojo.fx.Toggler");
    dojo.declare("dojo.fx.Toggler", null, {node: null, showFunc: dojo.fadeIn, hideFunc: dojo.fadeOut, showDuration: 200, hideDuration: 200, constructor: function (args) {
            var _262 = this;
            dojo.mixin(_262, args);
            _262.node = args.node;
            _262._showArgs = dojo.mixin({}, args);
            _262._showArgs.node = _262.node;
            _262._showArgs.duration = _262.showDuration;
            _262.showAnim = _262.showFunc(_262._showArgs);
            _262._hideArgs = dojo.mixin({}, args);
            _262._hideArgs.node = _262.node;
            _262._hideArgs.duration = _262.hideDuration;
            _262.hideAnim = _262.hideFunc(_262._hideArgs);
            dojo.connect(_262.showAnim, "beforeBegin", dojo.hitch(_262.hideAnim, "stop", true));
            dojo.connect(_262.hideAnim, "beforeBegin", dojo.hitch(_262.showAnim, "stop", true));
        }, show: function (_263) {
            return this.showAnim.play(_263 || 0);
        }, hide: function (_264) {
            return this.hideAnim.play(_264 || 0);
        }});
}
if (!dojo._hasResource["dojo.fx"]) {
    dojo._hasResource["dojo.fx"] = true;
    dojo.provide("dojo.fx");
    (function () {
        var d = dojo, _265 = {_fire: function (evt, args) {
                if (this[evt]) {
                    this[evt].apply(this, args || []);
                }
                return this;
            }};
        var _266 = function (_267) {
            this._index = -1;
            this._animations = _267 || [];
            this._current = this._onAnimateCtx = this._onEndCtx = null;
            this.duration = 0;
            d.forEach(this._animations, function (a) {
                this.duration += a.duration;
                if (a.delay) {
                    this.duration += a.delay;
                }
            }, this);
        };
        d.extend(_266, {_onAnimate: function () {
                this._fire("onAnimate", arguments);
            }, _onEnd: function () {
                d.disconnect(this._onAnimateCtx);
                d.disconnect(this._onEndCtx);
                this._onAnimateCtx = this._onEndCtx = null;
                if (this._index + 1 == this._animations.length) {
                    this._fire("onEnd");
                } else {
                    this._current = this._animations[++this._index];
                    this._onAnimateCtx = d.connect(this._current, "onAnimate", this, "_onAnimate");
                    this._onEndCtx = d.connect(this._current, "onEnd", this, "_onEnd");
                    this._current.play(0, true);
                }
            }, play: function (_268, _269) {
                if (!this._current) {
                    this._current = this._animations[this._index = 0];
                }
                if (!_269 && this._current.status() == "playing") {
                    return this;
                }
                var _26a = d.connect(this._current, "beforeBegin", this, function () {
                    this._fire("beforeBegin");
                }), _26b = d.connect(this._current, "onBegin", this, function (arg) {
                    this._fire("onBegin", arguments);
                }), _26c = d.connect(this._current, "onPlay", this, function (arg) {
                    this._fire("onPlay", arguments);
                    d.disconnect(_26a);
                    d.disconnect(_26b);
                    d.disconnect(_26c);
                });
                if (this._onAnimateCtx) {
                    d.disconnect(this._onAnimateCtx);
                }
                this._onAnimateCtx = d.connect(this._current, "onAnimate", this, "_onAnimate");
                if (this._onEndCtx) {
                    d.disconnect(this._onEndCtx);
                }
                this._onEndCtx = d.connect(this._current, "onEnd", this, "_onEnd");
                this._current.play.apply(this._current, arguments);
                return this;
            }, pause: function () {
                if (this._current) {
                    var e = d.connect(this._current, "onPause", this, function (arg) {
                        this._fire("onPause", arguments);
                        d.disconnect(e);
                    });
                    this._current.pause();
                }
                return this;
            }, gotoPercent: function (_26d, _26e) {
                this.pause();
                var _26f = this.duration * _26d;
                this._current = null;
                d.some(this._animations, function (a) {
                    if (a.duration <= _26f) {
                        this._current = a;
                        return true;
                    }
                    _26f -= a.duration;
                    return false;
                });
                if (this._current) {
                    this._current.gotoPercent(_26f / this._current.duration, _26e);
                }
                return this;
            }, stop: function (_270) {
                if (this._current) {
                    if (_270) {
                        for (; this._index + 1 < this._animations.length; ++this._index) {
                            this._animations[this._index].stop(true);
                        }
                        this._current = this._animations[this._index];
                    }
                    var e = d.connect(this._current, "onStop", this, function (arg) {
                        this._fire("onStop", arguments);
                        d.disconnect(e);
                    });
                    this._current.stop();
                }
                return this;
            }, status: function () {
                return this._current ? this._current.status() : "stopped";
            }, destroy: function () {
                if (this._onAnimateCtx) {
                    d.disconnect(this._onAnimateCtx);
                }
                if (this._onEndCtx) {
                    d.disconnect(this._onEndCtx);
                }
            }});
        d.extend(_266, _265);
        dojo.fx.chain = function (_271) {
            return new _266(_271);
        };
        var _272 = function (_273) {
            this._animations = _273 || [];
            this._connects = [];
            this._finished = 0;
            this.duration = 0;
            d.forEach(_273, function (a) {
                var _274 = a.duration;
                if (a.delay) {
                    _274 += a.delay;
                }
                if (this.duration < _274) {
                    this.duration = _274;
                }
                this._connects.push(d.connect(a, "onEnd", this, "_onEnd"));
            }, this);
            this._pseudoAnimation = new d.Animation({curve: [0, 1], duration: this.duration});
            var self = this;
            d.forEach(["beforeBegin", "onBegin", "onPlay", "onAnimate", "onPause", "onStop", "onEnd"], function (evt) {
                self._connects.push(d.connect(self._pseudoAnimation, evt, function () {
                    self._fire(evt, arguments);
                }));
            });
        };
        d.extend(_272, {_doAction: function (_275, args) {
                d.forEach(this._animations, function (a) {
                    a[_275].apply(a, args);
                });
                return this;
            }, _onEnd: function () {
                if (++this._finished > this._animations.length) {
                    this._fire("onEnd");
                }
            }, _call: function (_276, args) {
                var t = this._pseudoAnimation;
                t[_276].apply(t, args);
            }, play: function (_277, _278) {
                this._finished = 0;
                this._doAction("play", arguments);
                this._call("play", arguments);
                return this;
            }, pause: function () {
                this._doAction("pause", arguments);
                this._call("pause", arguments);
                return this;
            }, gotoPercent: function (_279, _27a) {
                var ms = this.duration * _279;
                d.forEach(this._animations, function (a) {
                    a.gotoPercent(a.duration < ms ? 1 : (ms / a.duration), _27a);
                });
                this._call("gotoPercent", arguments);
                return this;
            }, stop: function (_27b) {
                this._doAction("stop", arguments);
                this._call("stop", arguments);
                return this;
            }, status: function () {
                return this._pseudoAnimation.status();
            }, destroy: function () {
                d.forEach(this._connects, dojo.disconnect);
            }});
        d.extend(_272, _265);
        dojo.fx.combine = function (_27c) {
            return new _272(_27c);
        };
        dojo.fx.wipeIn = function (args) {
            var node = args.node = d.byId(args.node), s = node.style, o;
            var anim = d.animateProperty(d.mixin({properties: {height: {start: function () {
                            o = s.overflow;
                            s.overflow = "hidden";
                            if (s.visibility == "hidden" || s.display == "none") {
                                s.height = "1px";
                                s.display = "";
                                s.visibility = "";
                                return 1;
                            } else {
                                var _27d = d.style(node, "height");
                                return Math.max(_27d, 1);
                            }
                        }, end: function () {
                            return node.scrollHeight;
                        }}}}, args));
            d.connect(anim, "onEnd", function () {
                s.height = "auto";
                s.overflow = o;
            });
            return anim;
        };
        dojo.fx.wipeOut = function (args) {
            var node = args.node = d.byId(args.node), s = node.style, o;
            var anim = d.animateProperty(d.mixin({properties: {height: {end: 1}}}, args));
            d.connect(anim, "beforeBegin", function () {
                o = s.overflow;
                s.overflow = "hidden";
                s.display = "";
            });
            d.connect(anim, "onEnd", function () {
                s.overflow = o;
                s.height = "auto";
                s.display = "none";
            });
            return anim;
        };
        dojo.fx.slideTo = function (args) {
            var node = args.node = d.byId(args.node), top = null, left = null;
            var init = (function (n) {
                return function () {
                    var cs = d.getComputedStyle(n);
                    var pos = cs.position;
                    top = (pos == "absolute" ? n.offsetTop : parseInt(cs.top) || 0);
                    left = (pos == "absolute" ? n.offsetLeft : parseInt(cs.left) || 0);
                    if (pos != "absolute" && pos != "relative") {
                        var ret = d.position(n, true);
                        top = ret.y;
                        left = ret.x;
                        n.style.position = "absolute";
                        n.style.top = top + "px";
                        n.style.left = left + "px";
                    }
                };
            })(node);
            init();
            var anim = d.animateProperty(d.mixin({properties: {top: args.top || 0, left: args.left || 0}}, args));
            d.connect(anim, "beforeBegin", anim, init);
            return anim;
        };
    })();
}
if (!dojo._hasResource["dojo.NodeList-fx"]) {
    dojo._hasResource["dojo.NodeList-fx"] = true;
    dojo.provide("dojo.NodeList-fx");
    dojo.extend(dojo.NodeList, {_anim: function (obj, _27e, args) {
            args = args || {};
            var a = dojo.fx.combine(this.map(function (item) {
                var _27f = {node: item};
                dojo.mixin(_27f, args);
                return obj[_27e](_27f);
            }));
            return args.auto ? a.play() && this : a;
        }, wipeIn: function (args) {
            return this._anim(dojo.fx, "wipeIn", args);
        }, wipeOut: function (args) {
            return this._anim(dojo.fx, "wipeOut", args);
        }, slideTo: function (args) {
            return this._anim(dojo.fx, "slideTo", args);
        }, fadeIn: function (args) {
            return this._anim(dojo, "fadeIn", args);
        }, fadeOut: function (args) {
            return this._anim(dojo, "fadeOut", args);
        }, animateProperty: function (args) {
            return this._anim(dojo, "animateProperty", args);
        }, anim: function (_280, _281, _282, _283, _284) {
            var _285 = dojo.fx.combine(this.map(function (item) {
                return dojo.animateProperty({node: item, properties: _280, duration: _281 || 350, easing: _282});
            }));
            if (_283) {
                dojo.connect(_285, "onEnd", _283);
            }
            return _285.play(_284 || 0);
        }});
}
if (!dojo._hasResource["ibmweb.twisty"]) {
    dojo._hasResource["ibmweb.twisty"] = true;
    dojo.provide("ibmweb.twisty");
    ibmweb.twisty._duration = 200;
    ibmweb.twisty.cachetimeout = 3600 * 12 * 7;
    ibmweb.twisty.initTwisty = function (ul) {
        var li = dojo.query("> li", ul);
        if (!dojo.hasClass(ul, "ibm-twisty")) {
            return;
        }
        li.forEach(function (node) {
            if (!dojo.hasClass(node, "ibm-active")) {
                ibmweb.twisty.collapseTwisty(node);
            }
            var _286 = dojo.query("> a.ibm-twisty-trigger", node).onclick(ibmweb.twisty.toggleTwisty);
            var _287 = dojo.query("> span.ibm-twisty-head", node).onclick(ibmweb.twisty.toggleTwisty);
        });
    };
    ibmweb.twisty.expandTwisty = function (li) {
        dojo.addClass(li, "ibm-active");
        dojo.query("> a.ibm-twisty-trigger", li).removeClass("ibm-twisty-trigger-closed").query("img").attr("alt", "-");
        dojo.query("> div.ibm-twisty-body", li).style("display", "block");
    };
    ibmweb.twisty.collapseTwisty = function (li) {
        dojo.removeClass(li, "ibm-active");
        dojo.query("> a.ibm-twisty-trigger", li).addClass("ibm-twisty-trigger-closed").query("img").attr("alt", "+");
        dojo.query("> div.ibm-twisty-body", li).style("display", "none");
    };
    ibmweb.twisty.toggleTwisty = function (_288) {
        var li = this.parentNode;
        if (dojo.hasClass(li, "ibm-active")) {
            ibmweb.twisty.collapseTwisty(li);
        } else {
            ibmweb.twisty.expandTwisty(li);
        }
        dojo.stopEvent(_288);
        return false;
    };
    ibmweb.twisty.initSimpleShowHide = function (el) {
        if (!dojo.hasClass(el, "ibm-simple-show-hide")) {
            return;
        }
        var _289 = dojo.query("div.ibm-hideable", el);
        _289.wipeOut({duration: 1}).play();
        var _28a = true;
        var _28b = 0;
        var _28c = dojo.query("p.ibm-show-hide-controls", el).style("display", "block");
        if (_28c.length) {
            dojo.place("<div class=\"ibm-rule\"><hr /></div>", _28c[0], "last");
        }
        _28c.query("a").onclick(function (_28d) {
            dojo.query("a", this.parentNode).removeClass("ibm-active");
            dojo.addClass(_28d.target, "ibm-active");
            var href = _28d.target.href;
            if (href.indexOf("#show-hide") != -1) {
                if (_28a) {
                    _289.wipeIn().play();
                    _28a = false;
                } else {
                    _289.wipeOut().play();
                    _28a = true;
                    dojo.removeClass(_28d.target, "ibm-active");
                }
            } else {
                if (href.indexOf("#show") != -1) {
                    if (_28b != 1) {
                        _289.wipeIn().play();
                        _28b = 1;
                    }
                } else {
                    if (href.indexOf("#hide") != -1) {
                        if (_28b != 2) {
                            _289.wipeOut().play();
                            _28b = 2;
                        }
                    }
                }
            }
            dojo.stopEvent(_28d);
            return false;
        });
        return false;
    };
    ibmweb.twisty.initShowHide = function (el, _28e) {
        if (!dojo.hasClass(el, "ibm-show-hide")) {
            return;
        }
        if (!_28e) {
            _28e = "h2";
        }
        var _28f = dojo.query("> div.ibm-container-body, > div.ibm-columns", el);
        var _290 = dojo.query("> " + _28e, el);
        _290.forEach(function (_291, i) {
            var body = _28f[i];
            var a = dojo.query("a", _291);
            a.attr("href", "#show-hide");
            dojo.style(body, "overflow", "hidden");
            var r = 0;
            if (el.id) {
                r = ibmweb.storage.getItem("ibmweb.twisty." + ibmweb.util.getUrl() + "." + el.id);
                if (r !== "h") {
                    r = isNaN(Number(r)) ? 0 : Number(r);
                }
            }
            if (i === r) {
                a.addClass("ibm-show-active");
                if (dojo.hasClass(el, "ibm-alternate")) {
                    a.removeClass("ibm-show-active");
                    dojo.style(body, {"display": "none", "height": "1px"});
                }
            } else {
                a.removeClass("ibm-show-active");
                dojo.style(_291, "border-top", "none");
                dojo.style(body, {"display": "none", "height": "1px"});
            }
            a.onclick(function (_292) {
                dojo.stopEvent(_292);
                if (dojo.hasClass(this, "ibm-show-active")) {
                    if (_28f.length == 1 || dojo.hasClass(el, "ibm-alternate")) {
                        dojo.removeClass(this, "ibm-show-active");
                        if (dojo.hasClass(el, "ibm-alternate")) {
                            var _293 = dojo.query(this).parent().next();
                            _293.style("overflow", "hidden");
                            _293.anim({height: 1}, ibmweb.twisty._duration, null, function () {
                                _293.style("display", "none");
                                if (el.id) {
                                    ibmweb.storage.setItem("ibmweb.twisty." + ibmweb.util.getUrl() + "." + el.id, "h", ibmweb.twisty.cachetimeout);
                                }
                            });
                        }
                        var _294 = _28f[0];
                        _294.style.overflow = "hidden";
                        dojo.anim(_294, {height: 1}, ibmweb.twisty._duration, null, function () {
                            _294.style.display = "none";
                            if (el.id) {
                                ibmweb.storage.setItem("ibmweb.twisty." + ibmweb.util.getUrl() + "." + el.id, "h", ibmweb.twisty.cachetimeout);
                            }
                        });
                    }
                    return false;
                }
                var _295 = this;
                _290.forEach(function (_296, i) {
                    var body = dojo.query(_28f[i])[0];
                    var a = dojo.query("a", _296);
                    if (a[0] === _295) {
                        a.addClass("ibm-show-active");
                        dojo.style(body, {"display": "block", "overflow": "visible", "height": "auto"});
                        var _297 = body.clientHeight || body.scrollHeight;
                        dojo.style(body, {"overflow": "hidden", "height": "1px"});
                        dojo.anim(body, {height: _297}, ibmweb.twisty._duration, null, function () {
                            body.style.height = "auto";
                            var _298 = window.document.documentElement.scrollTop || window.document.body.scrollTop;
                            var top = dojo.marginBox(_296).t;
                            var mhh = dojo.position(dojo.byId("ibm-masthead")).h;
                            if (top - mhh < _298) {
                                window.scrollTo(0, dojo.marginBox(_296).t - dojo.position(dojo.byId("ibm-masthead")).h);
                            }
                            if (el.id) {
                                ibmweb.storage.setItem("ibmweb.twisty." + ibmweb.util.getUrl() + "." + el.id, i, ibmweb.twisty.cachetimeout);
                            }
                        });
                    } else {
                        a.removeClass("ibm-show-active");
                        dojo.anim(body, {height: 1}, ibmweb.twisty._duration, null, function () {
                            body.style.display = "none";
                        });
                    }
                });
                return false;
            });
        });
    };
    dojo.addOnLoad(function () {
        if (!ibmweb.info.v17) {
            return;
        }
        dojo.query("div.ibm-simple-show-hide").forEach(function (node) {
            ibmweb.twisty.initSimpleShowHide(node);
        });
        dojo.query("div.ibm-container.ibm-show-hide").forEach(function (node) {
            ibmweb.twisty.initShowHide(node);
        });
        var _299 = false;
        dojo.query("ul.ibm-twisty").forEach(function (node) {
            if (!_299) {
                (new Image()).src = "//www.ibm.com/i/v16/icons/tw_closed.gif";
                _299 = true;
            }
            ibmweb.twisty.initTwisty(node);
        });
    });
}
if (!dojo._hasResource["ibmweb.overlay"]) {
    dojo._hasResource["ibmweb.overlay"] = true;
    dojo.provide("ibmweb.overlay");
    ibmweb.overlay.show = function (_29a, _29b, _29c) {
        dojo["require"]("dijit.Dialog");
        dojo.addOnLoad(function () {
            var _29d = dijit.byId("dialog_" + _29a);
            if (!_29d) {
                dojo.byId(_29a).style.display = "block";
                _29d = new dijit.Dialog(dojo.mixin({"content": dojo.byId(_29a), "id": "dialog_" + _29a, draggable: !navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/g)}, _29c));
                dojo.connect(dijit.byId("dialog_" + _29a), "onHide", function () {
                    ibmweb.overlay.hide(_29a);
                });
            }
            _29d.show();
            ibmweb.util.statsHelper({"ibmEV": "overlay", "ibmEvAction": "show", "ibmEvGroup": "Opening overlay", "ibmEvModule": _29a});
        });
    };
    ibmweb.overlay.hide = function (_29e) {
        var _29f = dijit.byId("dialog_" + _29e);
        ibmweb.util.statsHelper({"ibmEV": "overlay", "ibmEvAction": "close", "ibmEvGroup": "Closing overlay", "ibmEvModule": _29e});
        if (_29f.open === true) {
            _29f.hide();
        }
        if (dojo.hasClass(dojo.byId(_29e), "ibm-rebuild-after-close")) {
            var _2a0 = dojo.query(".ibm-body", dojo.byId(_29e))[0], _2a1 = _2a0.innerHTML;
            _2a0.innerHTML = "";
            setTimeout(function () {
                _2a0.innerHTML = _2a1;
            }, 0);
        }
    };
    ibmweb.overlay.init = function () {
    };
}
if (!dojo._hasResource["ibmweb.storage"]) {
    dojo._hasResource["ibmweb.storage"] = true;
    dojo.provide("ibmweb.storage");
    ibmweb.storage = {getItem: function (key, _2a2) {
            if (!_2a2) {
                var _2a2 = null;
            }
            if (!this.isSupported()) {
                return null;
            }
            if (localStorage.getItem(key + "_expire") !== null) {
                var _2a3 = localStorage.getItem(key + "_expire");
                var _2a4 = new Date();
                var _2a4 = _2a4.getTime();
                if (_2a3 < _2a4) {
                    this.removeItem(key);
                    return _2a2;
                }
            }
            return localStorage.getItem(key);
        }, setItem: function (key, _2a5, _2a6) {
            if (!this.isSupported()) {
                return false;
            }
            this.removeItem(key);
            if (_2a6) {
                var time = new Date();
                var _2a7 = _2a6 * 1000;
                _2a7 += time.getTime();
                localStorage.setItem(key + "_expire", _2a7);
            }
            localStorage.setItem(key, _2a5);
            return localStorage[key];
        }, removeItem: function (key) {
            if (!this.isSupported()) {
                return false;
            }
            localStorage.removeItem(key);
            localStorage.removeItem(key + "_expire");
        }, clear: function () {
            if (!this.isSupported()) {
                return false;
            }
            localStorage.clear();
        }, isSupported: function () {
            try {
                return window.localStorage && typeof (window.localStorage) == "object";
            } catch (e) {
                return false;
            }
        }};
}
if (!dojo._hasResource["ibmweb.form"]) {
    dojo._hasResource["ibmweb.form"] = true;
    dojo.provide("ibmweb.form");
    ibmweb.form = {_loaded: false, _init: function () {
            if (ibmweb.form._loaded) {
                return;
            }
            ibmweb.form._loaded = true;
            dojo["require"]("ibmweb.ibm-form");
        }, initElement: function (elem) {
            if (elem.nodeName == "SELECT") {
                this.initSelect(elem);
            } else {
                if (elem.nodeName == "INPUT") {
                    if (elem.type.toLowerCase() == "checkbox") {
                        this.initCheckbox(elem);
                    } else {
                        if (elem.type.toLowerCase() == "radio") {
                            this.initRadio(elem);
                        }
                    }
                }
            }
        }, initRadio: function (elem) {
            var p = {srcNodeRef: elem, checked: elem.checked, disabled: elem.disabled, name: elem.name, value: elem.value};
            if (elem.id) {
                p.id = elem.id;
            }
            if (elem.title) {
                p.title = elem.title;
            }
            new dijit.form.RadioButton(p);
        }, initSelect: function (elem) {
            if (dojo.hasClass(elem, "ibm-filteringselect")) {
                return;
            }
            var p = {srcNodeRef: elem, disabled: elem.disabled, name: elem.name, maxHeight: 200};
            if (elem.id) {
                p.id = elem.id;
            }
            if (elem.title) {
                p.title = elem.title;
            }
            if (dojo.version && !(dojo.version.major === 1 && dojo.version.minor < 8)) {
                dojo.query("> option", elem).forEach(function (elem) {
                    if (dojo.attr(elem, "value") === "") {
                        dojo.attr(elem, "value", " ");
                    }
                });
            }
            if (elem.multiple) {
                p.size = elem.size;
                new dijit.form.MultiSelect(p);
            } else {
                new dijit.form.Select(p);
            }
        }, initCheckbox: function (elem) {
            var p = {srcNodeRef: elem, checked: elem.checked, disabled: elem.disabled, name: elem.name, value: elem.value};
            if (elem.id) {
                p.id = elem.id;
            }
            if (elem.title) {
                p.title = elem.title;
            }
            new dijit.form.CheckBox(p);
        }};
    dojo.addOnLoad(function () {
        if (dojo.version.major <= 1 && dojo.version.minor <= 3) {
            return;
        }
        dojo.query("input[disabled], select[disabled], textarea[disabled]").forEach(function (i) {
            if (i.id) {
                var _2a8 = dojo.query("label[for=\"" + i.id + "\"]");
                if (_2a8.length == 1) {
                    dojo.addClass(_2a8[0], "ibm-label-disabled");
                }
            }
        });
        var _2a9 = dojo.query("select.ibm-styled,select.ibm-styled-select, input[type=checkbox].ibm-styled, input[type=radio].ibm-styled, form.ibm-styled-form input[type=radio], form.ibm-styled-form input[type=checkbox], form.ibm-styled-form select");
        if (_2a9.length > 0) {
            ibmweb.form._init();
            dojo.addOnLoad(function () {
                for (var i = 0, j = _2a9.length; i < j; i++) {
                    ibmweb.form.initElement(_2a9[i]);
                }
                dojo.publish("/ibmweb/form/initialized");
            });
        }
        dojo.addOnLoad(function () {
            dojo.query("form.ibm-jump-form").forEach(function (item) {
                dojo.query("input.ibm-btn-go", item).remove();
                var _2aa = dojo.query(".dijitSelect", item);
                if (!_2aa || _2aa.length != 1) {
                    return;
                }
                var id = _2aa[0].id;
                _2aa = dijit.byId(id);
                _2aa.onChange = function (_2ab) {
                    if (_2ab) {
                        if (dojo.hasClass(item, "ibm-new-window")) {
                            window.open(_2ab);
                        } else {
                            location.href = _2ab;
                        }
                    }
                };
                dojo.style(id, "width", "100%");
            });
        });
        var tmp = dojo.query(".ibm-date-picker");
        if (tmp.length > 0) {
            dojo["require"]("dijit.form.DateTextBox");
            dojo.addOnLoad(function () {
                tmp.forEach(function (elem) {
                    var _2ac = {srcNodeRef: elem, disabled: elem.disabled, name: elem.name, id: elem.id, hasDownArrow: false, style: "width: 196px"}, lbl;
                    if (elem.name) {
                        lbl = dojo.query("label[for=\"" + elem.name + "\"] span.ibm-date-format");
                        if (lbl.length != 0) {
                            _2ac.constraints = {datePattern: lbl[0].innerHTML};
                            _2ac.serialize = function (_2ad) {
                                return dojo.date.locale.format(_2ad, {datePattern: "yyyy-MM-dd", selector: "date"});
                            };
                        }
                    }
                    if (elem.value) {
                        try {
                            var val = elem.value, _2ae = Date.parseString(val);
                            if (lbl.length != 0 && !isNaN(_2ae) && _2ae instanceof Date) {
                                val = dojo.date.locale.format(_2ae, {datePattern: lbl[0].innerHTML, selector: "date"});
                            }
                            _2ac.value = dojo.date.locale.parse(val, {datePattern: (lbl.length != 0) ? lbl[0].innerHTML : "y-M-d", selector: "date"});
                        } catch (e) {
                        }
                    }
                    var dtb = new dijit.form.DateTextBox(_2ac);
                });
            });
        }
    });
    ibmweb.form.initFilterSelect = (function () {
        var $fs = dojo.query("form.ibm-styled-form .ibm-filteringselect");
        if ($fs.length > 0) {
            ibmweb.form._init();
            dojo.ready(function () {
                $fs.forEach(function (elem, _2af) {
                    var p = {id: elem.id, srcNodeRef: elem, disabled: elem.disabled, name: elem.name, maxHeight: 200, invalidMessage: "", missingMessage: "", forceWidth: true};
                    var _2b0 = p.srcNodeRef.parentElement;
                    var _2b1 = new dijit.form.Select(p);
                    var _2b2 = dojo.create("input", {type: "text", "class": "searchinput filtering_select_readonly", value: "Select or click to filter"});
                    dojo.connect(_2b1, "openDropDown", function () {
                        _2b3();
                        var _2b4 = dojo.query("#" + _2b1.id + "_dropdown table tbody")[0];
                        if (dojo.query("#" + _2b1.id + "_searchText").length == 0) {
                            var _2b5;
                            dojo.connect(_2b2, "onkeyup", function (e) {
                                _2b5 = 1;
                                for (var i = 1; i < _2b4.children.length; i++) {
                                    _2b4.children[i].style.display = "";
                                    var _2b6 = RegExp("^" + e.currentTarget.value + "", "i");
                                    match = _2b4.children[i].children[1].innerHTML.match(_2b6);
                                    if (match && match.index === 0) {
                                        _2b4.children[i].style.display = "";
                                    } else {
                                        _2b4.children[i].style.display = "none";
                                        _2b5++;
                                    }
                                }
                                if (_2b5 == _2b4.children.length) {
                                    dojo.addClass(e.currentTarget, "filtering_select_erroricon");
                                } else {
                                    dojo.removeClass(e.currentTarget, "filtering_select_erroricon");
                                }
                                if (e.currentTarget.value.length > 0) {
                                    dojo.query("#" + _2b1.id + "_dropdown div.dijitSelectMenu")[0].style.height = "auto";
                                    dojo.query("#" + _2b1.id + "_dropdown div.dijitSelectMenu")[0].style.overflowY = "scroll";
                                } else {
                                    _2bc();
                                }
                            });
                            dojo.connect(_2b2, "onfocus", function (e) {
                                _2b2.value = "";
                                dojo.removeClass(_2b2, "filtering_select_readonly");
                                dojo.addClass(_2b2, "filtering_select_typing");
                            });
                            var td1 = dojo.create("td", {id: "test", "class": "dijitReset dijitMenuItemIconCell", role: "presentation"});
                            var td2 = dojo.create("td", {id: _2b1.id + "_text", "class": "dijitReset dijitMenuItemLabel, ibm-filter-sel", role: "presentation", dojoattachpoint: "containerNode", innerHTML: "", style: "width:100%; display: block;", colspan: "2"});
                            var td3 = dojo.create("td", {id: _2b1.id + "_accel", "class": "dijitReset dijitMenuItemAccelKey", style: "display: none"});
                            var td4 = dojo.create("td", {"class": "dijitReset dijitMenuArrowCell", role: "presentation"});
                            var _2b7 = dojo.create("img", {"class": "dijitIcon dijitMenuItemIcon", alt: "", src: "//1.w3.s81c.com/common/js/dojo/1.6/dojo/resources/blank.gif", role: "presentation"});
                            var _2b8 = dojo.create("div", {style: "visibility: hidden"});
                            var _2b9 = dojo.create("img", {"class": "dijitMenuExpand", alt: "", src: "//1.w3.s81c.com/common/js/dojo/1.6/dojo/resources/blank.gif"});
                            var _2ba = dojo.create("span", {"class": "dijitMenuExpandA11y", innerHTML: "+"});
                            dojo.place(_2b7, td1);
                            dojo.place(_2b8, td4);
                            dojo.place(_2b9, _2b8);
                            dojo.place(_2ba, _2b8);
                            var tr = dojo.create("tr", {id: _2b1.id + "_searchText", "class": "dijitReset dijitMenuItem", role: "listitem", "aria-labelledby": "test"});
                            dojo.place(td1, tr);
                            dojo.place(td2, tr);
                            dojo.place(td3, tr);
                            dojo.place(td4, tr);
                            dojo.place(_2b2, td2);
                            dojo.place(tr, _2b4, "first");
                        }
                    });
                    return _2b1;
                    function _2b3() {
                        _2b2.value = "Select or click to filter";
                        if (dojo.hasClass(_2b2, "filtering_select_typing")) {
                            dojo.removeClass(_2b2, "filtering_select_typing");
                        }
                        if (dojo.hasClass(_2b2, "filtering_select_erroricon")) {
                            dojo.removeClass(_2b2, "filtering_select_erroricon");
                        }
                        if (!dojo.hasClass(_2b2, "filtering_select_readonly")) {
                            dojo.addClass(_2b2, "filtering_select_readonly");
                        }
                        var _2bb = dojo.query("#" + _2b1.id + "_dropdown table tbody")[0];
                        for (var i = 1; i < _2bb.children.length; i++) {
                            _2bb.children[i].style.display = "";
                        }
                        _2bc();
                    }
                    ;
                    function _2bc() {
                        dojo.query("#" + _2b1.id + "_dropdown div.dijitSelectMenu")[0].style.height = "206px";
                        dojo.query("#" + _2b1.id + "_dropdown div.dijitSelectMenu")[0].style.overflowY = "scroll";
                    }
                    ;
                });
            });
        }
    });
    dojo.ready(function () {
        ibmweb.form.initFilterSelect();
    });
    Date.LZ = function (x) {
        return (x < 0 || x > 9 ? "" : "0") + x;
    };
    Date.monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    Date.monthAbbreviations = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    Date.dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    Date.dayAbbreviations = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    Date.preferAmericanFormat = true;
    if (!Date.prototype.getFullYear) {
        Date.prototype.getFullYear = function () {
            var yy = this.getYear();
            return (yy < 1900 ? yy + 1900 : yy);
        };
    }
    Date.parseString = function (val, _2bd) {
        if (typeof (_2bd) == "undefined" || _2bd == null || _2bd == "") {
            var _2be = new Array("y-M-d", "MMM d, y", "MMM d,y", "y-MMM-d", "d-MMM-y", "MMM d", "MMM-d", "d-MMM"), _2bf = new Array("M/d/y", "M-d-y", "M.d.y", "M/d", "M-d"), _2c0 = new Array("d/M/y", "d-M-y", "d.M.y", "d/M", "d-M"), _2c1 = new Array(_2be, Date.preferAmericanFormat ? _2bf : _2c0, Date.preferAmericanFormat ? _2c0 : _2bf);
            for (var i = 0; i < _2c1.length; i++) {
                var l = _2c1[i];
                for (var j = 0; j < l.length; j++) {
                    var d = Date.parseString(val, l[j]);
                    if (d != null) {
                        return d;
                    }
                }
            }
            return null;
        }
        this.isInteger = function (val) {
            for (var i = 0; i < val.length; i++) {
                if ("1234567890".indexOf(val.charAt(i)) == -1) {
                    return false;
                }
            }
            return true;
        };
        this.getInt = function (str, i, _2c2, _2c3) {
            for (var x = _2c3; x >= _2c2; x--) {
                var _2c4 = str.substring(i, i + x);
                if (_2c4.length < _2c2) {
                    return null;
                }
                if (this.isInteger(_2c4)) {
                    return _2c4;
                }
            }
            return null;
        };
        val = val + "";
        _2bd = _2bd + "";
        var _2c5 = 0, _2c6 = 0, c = "", _2c7 = "", _2c8 = "", x, y, year = new Date().getFullYear(), _2c9 = 1, date = 1, hh = 0, mm = 0, ss = 0, ampm = "";
        while (_2c6 < _2bd.length) {
            c = _2bd.charAt(_2c6);
            _2c7 = "";
            while ((_2bd.charAt(_2c6) == c) && (_2c6 < _2bd.length)) {
                _2c7 += _2bd.charAt(_2c6++);
            }
            switch (_2c7) {
                case "yyyy":
                case "yy":
                case "y":
                    if (_2c7 == "yyyy") {
                        x = 4;
                        y = 4;
                    }
                    if (_2c7 == "yy") {
                        x = 2;
                        y = 2;
                    }
                    if (_2c7 == "y") {
                        x = 2;
                        y = 4;
                    }
                    year = this.getInt(val, _2c5, x, y);
                    if (year == null) {
                        return null;
                    }
                    _2c5 += year.length;
                    if (year.length == 2) {
                        if (year > 70) {
                            year = 1900 + (year - 0);
                        } else {
                            year = 2000 + (year - 0);
                        }
                    }
                    break;
                case "MMM":
                case "NNN":
                    _2c9 = 0;
                    var _2ca = (_2c7 == "MMM" ? (Date.monthNames.concat(Date.monthAbbreviations)) : Date.monthAbbreviations);
                    for (var i = 0; i < _2ca.length; i++) {
                        var _2cb = _2ca[i];
                        if (val.substring(_2c5, _2c5 + _2cb.length).toLowerCase() == _2cb.toLowerCase()) {
                            _2c9 = (i % 12) + 1;
                            _2c5 += _2cb.length;
                            break;
                        }
                    }
                    if ((_2c9 < 1) || (_2c9 > 12)) {
                        return null;
                    }
                    break;
                case "EE":
                case "E":
                    var _2ca = (_2c7 == "EE" ? Date.dayNames : Date.dayAbbreviations);
                    for (var i = 0; i < _2ca.length; i++) {
                        var _2cc = _2ca[i];
                        if (val.substring(_2c5, _2c5 + _2cc.length).toLowerCase() == _2cc.toLowerCase()) {
                            _2c5 += _2cc.length;
                            break;
                        }
                    }
                    break;
                case "MM":
                case "M":
                    _2c9 = this.getInt(val, _2c5, _2c7.length, 2);
                    if (_2c9 == null || (_2c9 < 1) || (_2c9 > 12)) {
                        return null;
                    }
                    _2c5 += _2c9.length;
                    break;
                case "dd":
                case "d":
                    date = this.getInt(val, _2c5, _2c7.length, 2);
                    if (date == null || (date < 1) || (date > 31)) {
                        return null;
                    }
                    _2c5 += date.length;
                    break;
                case "hh":
                case "h":
                    hh = this.getInt(val, _2c5, _2c7.length, 2);
                    if (hh == null || (hh < 1) || (hh > 12)) {
                        return null;
                    }
                    _2c5 += hh.length;
                    break;
                case "HH":
                case "H":
                    hh = this.getInt(val, _2c5, _2c7.length, 2);
                    if (hh == null || (hh < 0) || (hh > 23)) {
                        return null;
                    }
                    _2c5 += hh.length;
                    break;
                case "KK":
                case "K":
                    hh = this.getInt(val, _2c5, _2c7.length, 2);
                    if (hh == null || (hh < 0) || (hh > 11)) {
                        return null;
                    }
                    _2c5 += hh.length;
                    hh++;
                    break;
                case "kk":
                case "k":
                    hh = this.getInt(val, _2c5, _2c7.length, 2);
                    if (hh == null || (hh < 1) || (hh > 24)) {
                        return null;
                    }
                    _2c5 += hh.length;
                    hh--;
                    break;
                case "mm":
                case "m":
                    mm = this.getInt(val, _2c5, _2c7.length, 2);
                    if (mm == null || (mm < 0) || (mm > 59)) {
                        return null;
                    }
                    _2c5 += mm.length;
                    break;
                case "ss":
                case "s":
                    ss = this.getInt(val, _2c5, _2c7.length, 2);
                    if (ss == null || (ss < 0) || (ss > 59)) {
                        return null;
                    }
                    _2c5 += ss.length;
                    break;
                case "a":
                    if (val.substring(_2c5, _2c5 + 2).toLowerCase() == "am") {
                        ampm = "AM";
                    } else {
                        if (val.substring(_2c5, _2c5 + 2).toLowerCase() == "pm") {
                            ampm = "PM";
                        } else {
                            return null;
                        }
                    }
                    _2c5 += 2;
                    break;
                default:
                    if (val.substring(_2c5, _2c5 + _2c7.length) != _2c7) {
                        return null;
                    } else {
                        _2c5 += _2c7.length;
                    }
                }
        }
        if (_2c5 != val.length) {
            return null;
        }
        if (_2c9 == 2) {
            if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
                if (date > 29) {
                    return null;
                }
            } else {
                if (date > 28) {
                    return null;
                }
            }
        }
        if ((_2c9 == 4) || (_2c9 == 6) || (_2c9 == 9) || (_2c9 == 11)) {
            if (date > 30) {
                return null;
            }
        }
        if (hh < 12 && ampm == "PM") {
            hh = hh - 0 + 12;
        } else {
            if (hh > 11 && ampm == "AM") {
                hh -= 12;
            }
        }
        return new Date(year, _2c9 - 1, date, hh, mm, ss);
    };
    Date.isValid = function (val, _2cd) {
        return (Date.parseString(val, _2cd) != null);
    };
    Date.prototype.isBefore = function (_2ce) {
        if (_2ce == null) {
            return false;
        }
        return (this.getTime() < _2ce.getTime());
    };
    Date.prototype.isAfter = function (_2cf) {
        if (_2cf == null) {
            return false;
        }
        return (this.getTime() > _2cf.getTime());
    };
    Date.prototype.equals = function (_2d0) {
        if (_2d0 == null) {
            return false;
        }
        return (this.getTime() == _2d0.getTime());
    };
    Date.prototype.equalsIgnoreTime = function (_2d1) {
        if (_2d1 == null) {
            return false;
        }
        var d1 = new Date(this.getTime()).clearTime(), d2 = new Date(_2d1.getTime()).clearTime();
        return (d1.getTime() == d2.getTime());
    };
    Date.prototype.format = function (_2d2) {
        _2d2 = _2d2 + "";
        var _2d3 = "", _2d4 = 0, c = "", _2d5 = "", y = this.getYear() + "", M = this.getMonth() + 1, d = this.getDate(), E = this.getDay(), H = this.getHours(), m = this.getMinutes(), s = this.getSeconds(), yyyy, yy, MMM, MM, dd, hh, h, mm, ss, ampm, HH, H, KK, K, kk, k, _2d6 = new Object();
        if (y.length < 4) {
            y = "" + (+y + 1900);
        }
        _2d6["y"] = "" + y;
        _2d6["yyyy"] = y;
        _2d6["yy"] = y.substring(2, 4);
        _2d6["M"] = M;
        _2d6["MM"] = Date.LZ(M);
        _2d6["MMM"] = Date.monthNames[M - 1];
        _2d6["NNN"] = Date.monthAbbreviations[M - 1];
        _2d6["d"] = d;
        _2d6["dd"] = Date.LZ(d);
        _2d6["E"] = Date.dayAbbreviations[E];
        _2d6["EE"] = Date.dayNames[E];
        _2d6["H"] = H;
        _2d6["HH"] = Date.LZ(H);
        if (H == 0) {
            _2d6["h"] = 12;
        } else {
            if (H > 12) {
                _2d6["h"] = H - 12;
            } else {
                _2d6["h"] = H;
            }
        }
        _2d6["hh"] = Date.LZ(_2d6["h"]);
        _2d6["K"] = _2d6["h"] - 1;
        _2d6["k"] = _2d6["H"] + 1;
        _2d6["KK"] = Date.LZ(_2d6["K"]);
        _2d6["kk"] = Date.LZ(_2d6["k"]);
        if (H > 11) {
            _2d6["a"] = "PM";
        } else {
            _2d6["a"] = "AM";
        }
        _2d6["m"] = m;
        _2d6["mm"] = Date.LZ(m);
        _2d6["s"] = s;
        _2d6["ss"] = Date.LZ(s);
        while (_2d4 < _2d2.length) {
            c = _2d2.charAt(_2d4);
            _2d5 = "";
            while ((_2d2.charAt(_2d4) == c) && (_2d4 < _2d2.length)) {
                _2d5 += _2d2.charAt(_2d4++);
            }
            if (typeof (_2d6[_2d5]) != "undefined") {
                _2d3 = _2d3 + _2d6[_2d5];
            } else {
                _2d3 = _2d3 + _2d5;
            }
        }
        return _2d3;
    };
    Date.prototype.getDayName = function () {
        return Date.dayNames[this.getDay()];
    };
    Date.prototype.getDayAbbreviation = function () {
        return Date.dayAbbreviations[this.getDay()];
    };
    Date.prototype.getMonthName = function () {
        return Date.monthNames[this.getMonth()];
    };
    Date.prototype.getMonthAbbreviation = function () {
        return Date.monthAbbreviations[this.getMonth()];
    };
    Date.prototype.clearTime = function () {
        this.setHours(0);
        this.setMinutes(0);
        this.setSeconds(0);
        this.setMilliseconds(0);
        return this;
    };
    Date.prototype.add = function (_2d7, _2d8) {
        if (typeof (_2d7) == "undefined" || _2d7 == null || typeof (_2d8) == "undefined" || _2d8 == null) {
            return this;
        }
        _2d8 = +_2d8;
        switch (_2d7) {
            case "y":
                this.setFullYear(this.getFullYear() + _2d8);
                break;
            case "M":
                this.setMonth(this.getMonth() + _2d8);
                break;
            case "d":
                this.setDate(this.getDate() + _2d8);
                break;
            case "w":
                var step = (_2d8 > 0) ? 1 : -1;
                while (_2d8 != 0) {
                    this.add("d", step);
                    while (this.getDay() == 0 || this.getDay() == 6) {
                        this.add("d", step);
                    }
                    _2d8 -= step;
                }
                break;
            case "h":
                this.setHours(this.getHours() + _2d8);
                break;
            case "m":
                this.setMinutes(this.getMinutes() + _2d8);
                break;
            case "s":
                this.setSeconds(this.getSeconds() + _2d8);
                break;
        }
        return this;
    };
}
if (!dojo._hasResource["ibmweb.stepindicator"]) {
    dojo._hasResource["ibmweb.stepindicator"] = true;
    dojo.provide("ibmweb.stepindicator");
    ibmweb.stepindicator = {indicators: {}, id_inc: 0, classnames: {indicator: "ibm-step-indicator", container: "ibm-step-container", past_step: "ibm-active-completed", present_step: "ibm-active-current", future_step: "ibm-disabled", inactive_content: "ibm-hidden-content", disable_previous: "ibm-disable-previous"}, init: function (_2d9, _2da) {
            _2d9 = _2d9 || dojo.query("body")[0];
            dojo.query("div." + this.classnames.indicator, _2d9).forEach(function (node, i) {
                if (!new ibmweb.stepindicator.StepIndicator(node, _2da)) {
                }
            });
        }, StepIndicator: function (node, _2db) {
            var that = this;
            if (typeof (node) == "string") {
                node = dojo.byId(node);
            }
            if (!node) {
                throw "Cannot build StepIndicator, node does not exist";
            }
            if (dojo.attr(node, "data-step-indicator-init")) {
                return false;
            }
            dojo.attr(node, "data-step-indicator-init", true);
            var me = this, id = dojo.attr(node, "id"), _2dc = {future_clickable: false, disable_previous: ~node.className.indexOf(ibmweb.stepindicator.classnames.disable_previous) ? true : false, content: dojo.NodeList(node).next()[0], focus_index: -1};
            if (id) {
                indicators[id] = me;
            }
            dojo.query(".ibm-hide-if-no-js", _2dc.content).forEach(function (_2dd) {
                dojo.removeClass(_2dd, "ibm-hide-if-no-js");
            });
            _2db = _2db || {};
            for (var key in _2db) {
                _2dc[key] = _2db[key];
            }
            node.setAttribute("role", "navigation");
            node.setAttribute("aria-level", "2");
            node.setAttribute("aria-label", "Step Indicator");
            var _2de = dojo.query("h2.ibm-access", node)[0];
            if (_2de) {
                node.removeChild(_2de);
            }
            var _2df = function () {
                return dojo.query("li", node);
            };
            var _2e0 = function () {
                return dojo.query("." + ibmweb.stepindicator.classnames.container, _2dc.content);
            };
            this.currentStep = function () {
                var cs = -1;
                _2df().forEach(function (node, i) {
                    if (dojo.query("." + ibmweb.stepindicator.classnames.present_step, node).length > 0) {
                        cs = i;
                    }
                });
                return cs;
            };
            this.totalSteps = function () {
                return _2df().length;
            };
            this.isOnFirst = function () {
                return me.currentStep() === 0;
            };
            this.isOnLast = function () {
                return me.currentStep() === me.totalSteps() - 1;
            };
            this.goToStep = function (_2e1) {
                var $a;
                _2df().forEach(function (_2e2, i) {
                    $a = dojo.query("a", _2e2)[0];
                    if (_2dc.disable_previous) {
                        dojo[(i !== _2e1) ? "addClass" : "removeClass"]($a, ibmweb.stepindicator.classnames.future_step);
                        dojo[(i === _2e1) ? "addClass" : "removeClass"]($a, ibmweb.stepindicator.classnames.present_step);
                    } else {
                        dojo[(i < _2e1) ? "addClass" : "removeClass"]($a, ibmweb.stepindicator.classnames.past_step);
                        dojo[(i === _2e1) ? "addClass" : "removeClass"]($a, ibmweb.stepindicator.classnames.present_step);
                        dojo[(i > _2e1) ? "addClass" : "removeClass"]($a, ibmweb.stepindicator.classnames.future_step);
                    }
                    if (i === _2e1) {
                        $a.setAttribute("aria-selected", true);
                        $a.tabIndex = 0;
                    } else {
                        $a.setAttribute("aria-selected", false);
                        $a.tabIndex = -1;
                    }
                });
                _2e0().forEach(function (_2e3, i) {
                    dojo.style(_2e3, "display", (i === _2e1) ? "block" : "none");
                    dojo.attr(_2e3, "role", (i === _2e1) ? "tabpanel" : "");
                });
                _2dc.focus_index = _2e1;
            };
            _2df().forEach(function (_2e4, i) {
                $a = dojo.query("a", _2e4)[0];
                dojo.connect($a, "onclick", function (e) {
                    var _2e5 = me.currentStep() < i;
                    if ((!_2e5 || (_2e5 && _2dc.future_clickable)) && !_2dc.disable_previous) {
                        me.goToStep(i);
                    }
                    e.preventDefault();
                });
                dojo.connect($a, "onkeypress", function (e) {
                    var key = e.keyCode || e.charCode;
                    if (key === dojo.keys.RIGHT_ARROW || key === dojo.keys.LEFT_ARROW) {
                        _2dc.focus_index = (_2dc.focus_index === -1) ? me.currentStep() : _2dc.focus_index;
                        _2dc.focus_index += (key === dojo.keys.RIGHT_ARROW) ? 1 : -1;
                        if (_2dc.focus_index === me.totalSteps()) {
                            _2dc.focus_index = me.totalSteps() - 1;
                        } else {
                            if (_2dc.focus_index < 0) {
                                _2dc.focus_index = 0;
                            }
                        }
                        _2df().forEach(function (_2e6, i) {
                            $a_focus = dojo.query("a", _2e6)[0];
                            if (_2dc.focus_index === i) {
                                dijit.focus($a_focus);
                            }
                        });
                    } else {
                        if (key === dojo.keys.SPACE && !_2dc.disable_previous) {
                            me.goToStep(_2dc.focus_index);
                            e.preventDefault();
                        }
                    }
                });
            });
            this.next = function () {
                if (!me.isOnLast()) {
                    me.goToStep(me.currentStep() + 1);
                }
            };
            this.prev = function (_2e7) {
                if (!me.isOnFirst()) {
                    me.goToStep(me.currentStep() - 1);
                }
            };
            _2e0().forEach(function (_2e8, i) {
                var _2e9 = dojo.query("[data-step=next]", _2e8);
                _2e9.forEach(function (_2ea) {
                    dojo.attr(_2ea, "role", "button");
                    dojo.connect(_2ea, "onclick", function () {
                        me.next();
                    });
                });
                var _2eb = dojo.query("[data-step=prev]", _2e8);
                _2eb.forEach(function (_2ec) {
                    dojo.attr(_2ec, "role", "button");
                    dojo.connect(_2ec, "onclick", function () {
                        me.prev();
                    });
                });
            });
            var cs = me.currentStep();
            if (cs == -1) {
                cs = 0;
            }
            me.goToStep(cs);
        }, byId: function (id) {
            return this.indicators[id] || null;
        }};
}
if (!dojo._hasResource["ibmweb.dynnav._module"]) {
    dojo._hasResource["ibmweb.dynnav._module"] = true;
    dojo.provide("ibmweb.dynnav._module");
    dojo.declare("ibmweb.dynnav._module", null, {isA_Module: true, init: function () {
            return false;
        }, onLoad: function () {
        }, onData: function (data) {
        }, onError: function () {
        }});
}
if (!dojo._hasResource["ibmweb.dynnav.mediacontroller"]) {
    dojo._hasResource["ibmweb.dynnav.mediacontroller"] = true;
    dojo.provide("ibmweb.dynnav.mediacontroller");
    dojo.declare("ibmweb.dynnav.mediacontroller", [ibmweb.dynnav._module], {_widgets: [], init: function () {
            return ibmweb.dynnav.isServiceEnabled("video");
        }, createWidgets: function (_2ed) {
            if (!_2ed) {
                _2ed = dojo.query(".ibm-media");
            }
            var self = this;
            _2ed.forEach(function (item) {
                if (dojo.hasClass(item, "ibm-media-processed")) {
                    return;
                }
                dojo.addClass(item, "ibm-media-processed");
                if (item.tagName == "A" || item.tagName == "AREA") {
                    dojo.connect(item, "onclick", function (_2ee) {
                        self._onLinkClick(_2ee, this);
                    });
                    return;
                }
                var link = dojo.query(".ibm-rss-link", item);
                if (link.length == 0) {
                    return;
                }
                link = link[0];
                var _2ef = dojo.queryToObject(link.rel);
                var _2f0, data = null;
                var _2f1 = dojo.query("img", link);
                if (_2f1.length != 0) {
                    if (_2ef.format == "ribbon") {
                        htmlBackground_arr = [];
                        _2f1.forEach(function (i) {
                            var src = dojo.attr(i, "src");
                            htmlBackground_arr.push(src);
                            dojo.destroy(i);
                        });
                        _2f1 = htmlBackground_arr;
                    } else {
                        var src = dojo.attr(_2f1[0], "src");
                        _2f1.forEach(dojo.destroy);
                        _2f1 = src;
                    }
                } else {
                    _2f1 = null;
                }
                var _2f2 = {container: item, url: link.href, options: dojo.queryToObject(link.rel), title: link.innerHTML, htmlBackground: _2f1};
                if (_2ef.loadVideoUrl) {
                    data = [{isVideo: true, url: {mp4: link.href}}];
                    if (_2ef.height) {
                        data[0].height = _2ef.height;
                    }
                    if (_2ef.width) {
                        data[0].width = _2ef.width;
                    }
                }
                switch (_2ef.format) {
                    case "video_small":
                        dojo.mixin(_2f2, {maxWidth: 300});
                        _2f0 = "videowidget";
                        data = [{height: "225", width: "300", isVideo: true, thumbnails: {}, url: {mp4: link.href}}];
                        break;
                    case "inline_small":
                        var _2f3 = 300;
                        try {
                            if (link.parentNode) {
                                var _2f4 = link.parentNode;
                                _2f3 = dojo.coords(_2f4).w;
                            }
                        } catch (e) {
                        }
                        dojo.mixin(_2f2, {maxWidth: _2f3, format: "inline_small"});
                        _2f2.options.no_hide = true;
                        _2f0 = "videowidget";
                        break;
                    case "inline_large":
                        dojo.mixin(_2f2, {maxWidth: 940, maxHeight: 332, format: "inline_large"});
                        _2f0 = "largewidget";
                        break;
                    case "inline_medium":
                        dojo.mixin(_2f2, {maxWidth: 620, maxHeight: 332, format: "inline_medium"});
                        _2f0 = "mediumwidget";
                        break;
                    case "playlist":
                        dojo.mixin(_2f2, {maxWidth: 940, maxHeight: 332, format: "playlist"});
                        _2f0 = "playlistwidget";
                        break;
                    case "inline_thumbnail":
                        dojo.mixin(_2f2, {maxWidth: 940, maxHeight: 332, format: "inline_thumbnail"});
                        _2f0 = "thumbnailwidget";
                        break;
                    case "ribbon":
                    default:
                        dojo.mixin(_2f2, {maxWidth: 940, maxHeight: 332, format: "ribbon"});
                        _2f0 = "ribbonwidget";
                        break;
                }
                _2f0 = new ext.media[_2f0](_2f2);
                dojo.empty(item);
                _2f0.placeAt(item);
                _2f0.startup(data);
                self._widgets.push(_2f0);
                dojo.publish("/ibmweb/dynnav/mediacontroller/created", _2f0);
            });
        }, onData: function () {
            var _2f5 = dojo.query(".ibm-media");
            var self = this;
            if (_2f5.length > 0) {
                dojo["require"]("ext.media._base");
                dojo.addOnLoad(dojo.hitch(this, function () {
                    this.createWidgets();
                }));
            }
        }, onError: function () {
            for (var i = 0, j = this._widgets.length; i < j; i++) {
                this._widgets[i].removeWaitingImage();
            }
        }, useNewYTPlayer: function () {
            var _2f6 = dojo.query("meta[name=__RMSBETA]");
            var _2f7 = false;
            if (_2f6 && _2f6.length > 0 && dojo.attr(_2f6[0], "value") == "newYT") {
                _2f7 = true;
            }
            var _2f8 = /[&?]rmsbeta=newyt/.test(document.location.search);
            if (dojo.cookie("__RMSBETA") == "newYT" || _2f7 || _2f8) {
                if (dojo.isIE) {
                    return dojo.isIE > 8;
                }
                return true;
            }
            return false;
        }, _onLinkClick: function (_2f9, link) {
            var _2fa = {};
            var _2fb = link.href && link.href.indexOf("youtube.com") > -1;
            if (link.rel) {
                _2fa = dojo.queryToObject(link.rel);
            }
            if (ibmweb.info.iDevice && _2fb && !this.useNewYTPlayer()) {
                return;
            }
            if (!!_2fa.format && _2fa.format == "overlay") {
                dojo.stopEvent(_2f9);
                var _2fc = {url: link.href, options: _2fa};
                var _2fd = new ext.media.overlaywidget(_2fc);
                _2fd.startup();
                return;
            }
            if (!_2fb && (!_2fa.height || !_2fa.width)) {
                return;
            }
            dojo.stopEvent(_2f9);
            var _2fd = new ext.media.overlaywidget();
            _2fd.url = link.href;
            _2fd.options = _2fa;
            var obj = {isVideo: true, url: {mp4: link.href}};
            if (_2fb) {
                obj.type = "youtube";
                obj.url = {youtube: link.href};
                if (!_2fa.height) {
                    obj.height = 360;
                }
                if (!_2fa.width) {
                    obj.width = 640;
                }
            }
            _2fd.startup([dojo.mixin({}, _2fa, obj)], true);
        }});
}
if (!dojo._hasResource["ibmweb.external.expertise"]) {
    dojo._hasResource["ibmweb.external.expertise"] = true;
    dojo.provide("ibmweb.external.expertise");
    dojo.declare("ibmweb.external.expertise", ibmweb.dynnav._module, {init: function () {
            return ibmweb.dynnav.isServiceEnabled("expertise");
        }, onData: function (data) {
            if (ibmweb.config.config == "www") {
                ibmweb.config.set({expv17css: "//1.www.s81c.com/common/v17/css/external/expertise.css"});
            } else {
                ibmweb.config.set({expv17css: "//1.w3.s81c.com/common/v17/css/external/expertise.css"});
            }
            var RE = /\,{1,}/g;
            if (ibmweb.config.siteid == "www" || ibmweb.config.siteid == "w3") {
                if (ibmweb.config.expertise.template == "col-5-1") {
                    dojo["require"]("ext.expertise.AbstractExpertiseV17Widget");
                    dojo["require"]("ext.expertise.Five1V17Widget");
                    ibmweb.queue.push(function () {
                        return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.Five1V17Widget) == "function";
                    }, function () {
                        if (!ibmweb.config.expertise.debug) {
                            dojo.doc.getElementsByTagName("head")[0].appendChild(dojo.create("link", {type: "text/css", rel: "stylesheet", href: ibmweb.config.expv17css}));
                        }
                        ibmweb.data.require("expertlocator", function (_2fe) {
                            if (RE.test(ibmweb.config.expertise.placeat)) {
                                if (ibmweb.config.expertise.expertid && ibmweb.config.expertise.displaytype == "one") {
                                    for (var i = 0; i < ibmweb.config.expertise.placeat.length; i++) {
                                        var _2ff = new ext.expertise.Five1V17Widget();
                                        _2ff.startup(i);
                                    }
                                } else {
                                    if (ibmweb.config.expertise.listid && ibmweb.config.expertise.displaytype == "multi") {
                                        for (var i = 0; i < ibmweb.config.expertise.placeat.length; i++) {
                                            var _2ff = new ext.expertise.Five1V17Widget();
                                            _2ff.startup(i);
                                        }
                                    } else {
                                        return;
                                    }
                                }
                            } else {
                                var _2ff = new ext.expertise.Five1V17Widget();
                                _2ff.startup();
                            }
                        });
                    });
                } else {
                    if (ibmweb.config.expertise.template == "col-6-1") {
                        dojo["require"]("ext.expertise.AbstractExpertiseV17Widget");
                        dojo["require"]("ext.expertise.Six1V17Widget");
                        ibmweb.queue.push(function () {
                            return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.Six1V17Widget) == "function";
                        }, function () {
                            if (!ibmweb.config.expertise.debug) {
                                dojo.doc.getElementsByTagName("head")[0].appendChild(dojo.create("link", {type: "text/css", rel: "stylesheet", href: ibmweb.config.expv17css}));
                            }
                            ibmweb.data.require("expertlocator", function (_300) {
                                if (RE.test(ibmweb.config.expertise.placeat)) {
                                    if (ibmweb.config.expertise.expertid && ibmweb.config.expertise.displaytype == "one") {
                                        for (var i = 0; i < ibmweb.config.expertise.placeat.length; i++) {
                                            var _301 = new ext.expertise.Six1V17Widget();
                                            _301.startup(i);
                                        }
                                    } else {
                                        if (ibmweb.config.expertise.listid && ibmweb.config.expertise.displaytype == "multi") {
                                            for (var i = 0; i < ibmweb.config.expertise.placeat.length; i++) {
                                                var _301 = new ext.expertise.Six1V17Widget();
                                                _301.startup(i);
                                            }
                                        } else {
                                            return;
                                        }
                                    }
                                } else {
                                    var _301 = new ext.expertise.Six1V17Widget();
                                    _301.startup();
                                }
                            });
                        });
                    } else {
                        if (ibmweb.config.expertise.template == "col-6-2") {
                            dojo["require"]("ext.expertise.AbstractExpertiseV17Widget");
                            dojo["require"]("ext.expertise.Six2V17Widget");
                            ibmweb.queue.push(function () {
                                return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.Six2V17Widget) == "function";
                            }, function () {
                                if (!ibmweb.config.expertise.debug) {
                                    dojo.doc.getElementsByTagName("head")[0].appendChild(dojo.create("link", {type: "text/css", rel: "stylesheet", href: ibmweb.config.expv17css}));
                                }
                                ibmweb.data.require("expertlocator", function (_302) {
                                    if (RE.test(ibmweb.config.expertise.placeat)) {
                                        if (ibmweb.config.expertise.expertid && ibmweb.config.expertise.displaytype == "one") {
                                            for (var i = 0; i < ibmweb.config.expertise.placeat.length; i++) {
                                                var _303 = new ext.expertise.Six2V17Widget();
                                                _303.startup(i);
                                            }
                                        } else {
                                            if (ibmweb.config.expertise.listid && ibmweb.config.expertise.displaytype == "multi") {
                                                for (var i = 0; i < ibmweb.config.expertise.placeat.length; i++) {
                                                    var _303 = new ext.expertise.Six2V17Widget();
                                                    _303.startup(i);
                                                }
                                            } else {
                                                return;
                                            }
                                        }
                                    } else {
                                        var _303 = new ext.expertise.Six2V17Widget();
                                        _303.startup();
                                    }
                                });
                            });
                        } else {
                            if (ibmweb.config.config == "www") {
                                dojo["require"]("ext.expertise.AbstractExpertiseWidget");
                                dojo["require"]("ext.expertise.WWWExpertiseWidget");
                                ibmweb.queue.push(function () {
                                    return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.WWWExpertiseWidget) == "function";
                                }, function () {
                                    var _304 = new ext.expertise.WWWExpertiseWidget();
                                    _304.startup();
                                });
                            } else {
                                if (ibmweb.config.config == "w3") {
                                    dojo["require"]("ext.expertise.AbstractExpertiseWidget");
                                    dojo["require"]("ext.expertise.W3ExpertiseWidget");
                                    ibmweb.queue.push(function () {
                                        return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.W3ExpertiseWidget) == "function";
                                    }, function () {
                                        var _305 = new ext.expertise.W3ExpertiseWidget();
                                        _305.startup();
                                    });
                                }
                            }
                        }
                    }
                }
            } else {
                if (ibmweb.config.siteid == "smarterplanet") {
                    dojo["require"]("ext.expertise.AbstractExpertiseWidget");
                    dojo["require"]("ext.expertise.ExternalExpertiseWidget");
                    ibmweb.queue.push(function () {
                        return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.ExternalExpertiseWidget) == "function";
                    }, function () {
                        var _306 = new ext.expertise.ExternalExpertiseWidget();
                        _306.startup();
                    });
                } else {
                    if (ibmweb.config.siteid == "ibm100") {
                        dojo["require"]("ext.expertise.AbstractExpertiseWidget");
                        dojo["require"]("ext.expertise.IBM100ExpertiseWidget");
                        ibmweb.queue.push(function () {
                            return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.IBM100ExpertiseWidget) == "function";
                        }, function () {
                            var _307 = new ext.expertise.IBM100ExpertiseWidget();
                            _307.startup();
                        });
                    } else {
                        if (ibmweb.config.config == "www") {
                            dojo["require"]("ext.expertise.AbstractExpertiseWidget");
                            dojo["require"]("ext.expertise.WWWExpertiseWidget");
                            ibmweb.queue.push(function () {
                                return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.WWWExpertiseWidget) == "function";
                            }, function () {
                                var _308 = new ext.expertise.WWWExpertiseWidget();
                                _308.startup();
                            });
                        } else {
                            if (ibmweb.config.config == "w3") {
                                dojo["require"]("ext.expertise.AbstractExpertiseWidget");
                                dojo["require"]("ext.expertise.W3ExpertiseWidget");
                                ibmweb.queue.push(function () {
                                    return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.W3ExpertiseWidget) == "function";
                                }, function () {
                                    var _309 = new ext.expertise.W3ExpertiseWidget();
                                    _309.startup();
                                });
                            }
                        }
                    }
                }
            }
        }});
}
if (!dojo._hasResource["ibmweb.external.noticechoice"]) {
    dojo._hasResource["ibmweb.external.noticechoice"] = true;
    dojo.provide("ibmweb.external.noticechoice");
    dojo.declare("ibmweb.external.noticechoice", [ibmweb.dynnav._module], {init: function () {
            if (!!ibmweb.meta.nc_pagedesc) {
                dojo["require"]("ext.noticechoice.nc");
                ibmweb.queue.push(function () {
                    return typeof (ext) == "object" && typeof (ext.noticechoice) == "object" && typeof (ext.noticechoice.nc.init) == "function";
                }, function () {
                    ibmweb.queue.waitForElement("ibm-top", function () {
                        ext.noticechoice.nc.init();
                    }, true);
                });
            }
            return !!ibmweb.meta.nc_questiontype && !!ibmweb.meta.nc_pagedesc;
        }});
}
if (!dojo._hasResource["ibmweb.dynnav._base-all"]) {
    dojo._hasResource["ibmweb.dynnav._base-all"] = true;
    dojo.provide("ibmweb.dynnav._base-all");
}
if (!dojo._hasResource["ibmweb.dynnav"]) {
    dojo._hasResource["ibmweb.dynnav"] = true;
    dojo.provide("ibmweb.dynnav");
    if (typeof (window.PMM) == "undefined" || window.PMM == null) {
        window.PMM = {isLoaded: false};
    }
    dojo.mixin(ibmweb.dynnav, {disabledCountries: ["xxilhe"], _modules: {}, isDOMLoaded: false, PMM: {}, isDataLoaded: false, isValid: true, _bundleCallbacks: [], _bundleParams: {}, _bundleBlock: [], init: function () {
            if (!ibmweb.meta.lc || !ibmweb.meta.cc) {
                return;
            }
            if (dojo.indexOf(this.disabledCountries, ibmweb.meta.cpi) != -1) {
                return;
            }
            dojo.io.script.get({url: ibmweb.config.dataUrl + ibmweb.meta.cpi + "-" + ibmweb.meta.encoding + ".js", checkString: "ibmweb.dynnav.__checkString", timeout: ibmweb.config.timeout, error: function (_30a, _30b) {
                    ibmweb.dynnav.dataCallback = function () {
                    };
                    ibmweb.dynnav._onError();
                    ibmweb.dynnav.isDataLoaded = true;
                }});
            if (ibmweb.meta.cc == "us") {
                if (ibmweb.meta.ibm_pageattributes.indexOf("flashlead") > -1) {
                    dojo.query("#ibm-esite-link").style("display", "none");
                }
            }
            ibmweb.config.parseMetaTags();
            var _30c = false;
            for (var key in ibmweb.config.lazyload) {
                if (ibmweb.config.get([key, "enabled"])) {
                    dojo["require"](ibmweb.config.lazyload[key]);
                    _30c = true;
                }
            }
            var _30d = function () {
                var tmp = dojo.mixin({}, ibmweb.external, ibmweb.dynnav);
                for (var key in tmp) {
                    if (key.substring(0, 1) != "_" && typeof (tmp[key].prototype) != "undefined" && !!tmp[key].prototype.isA_Module) {
                        var _30e = new tmp[key]();
                        if (_30e.init()) {
                            this._modules[key] = _30e;
                        }
                    }
                }
                this.executeBundleCall();
                dojo.addOnLoad(function () {
                    ibmweb.dynnav._initWithDOM();
                });
            };
            if (_30c) {
                dojo.addOnLoad(dojo.hitch(this, _30d));
            } else {
                _30d.call(this);
            }
        }, registerModule: function (_30f) {
            if (_30f.init()) {
                this._modules[_30f.declaredClass] = _30f;
            }
        }, isServiceEnabled: function (_310) {
            return ibmweb.config.dynnav.enabled && !!ibmweb.config.get([_310, "enabled"]);
        }, getCallback: function (_311, _312) {
            return ibmweb.callback.createJSONPWrapper(null, function () {
                var args = arguments;
                ibmweb.queue.push(function () {
                    return ibmweb.dynnav.isDataLoaded && ibmweb.dynnav.isDOMLoaded;
                }, function () {
                    try {
                        _311[_312].apply(_311, args);
                    } catch (e) {
                    }
                });
            });
        }, fetchData: function (id, _313, _314, _315) {
            ibmweb.queue.push(function () {
                return ibmweb.dynnav._bundleCallbacks.length == 0;
            }, function () {
                ibmweb.dynnav.addBundleCallback(id, _313, _314, _315);
                ibmweb.dynnav.executeBundleCall();
            });
        }, addBundleCallback: function (id, _316, _317, _318) {
            var func = this.getCallback(_316, _317);
            this._bundleCallbacks.push(id + ":" + func);
            dojo.mixin(this._bundleParams, _318);
            return func;
        }, blockBundle: function (sid) {
            this._bundleBlock[sid] = 1;
        }, releaseBundle: function (sid) {
            var i = dojo.indexOf(this._bundleBlock, sid);
            if (i != -1) {
                this._bundleBlock.splice(i, 1);
            }
        }, isBundleBlocked: function () {
            return this._bundleBlock.length != 0;
        }, executeBundleCall: function () {
            ibmweb.queue.push(function () {
                return !ibmweb.dynnav.isBundleBlocked();
            }, function () {
                var _319 = ibmweb.dynnav._bundleCallbacks.join("@");
                if (!_319) {
                    return;
                }
                var _31a = dojo.mixin({cc: ibmweb.meta.cc, lc: ibmweb.meta.lc, format: "json", ts: ((new Date).getTime())}, ibmweb.dynnav._bundleParams, {cb: _319});
                var ip = /ip=([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})/.exec(document.location.search);
                var _31b = /domain=([a-zA-Z\.\-0-9]+)/.exec(document.location.search);
                if (ip && _31b) {
                    _31a.ip = ip[1];
                    _31a.domain = _31b[1];
                }
                dojo.io.script.get({url: ibmweb.config.dynNavBaseUrl, content: _31a, timeout: ibmweb.config.timeout, error: function (_31c, _31d) {
                        var cb = dojo.getObject("args.content.cb", false, _31d);
                        if (cb) {
                            var cbs = cb.split("@");
                            for (var i = 0, j = cbs.length; i < j; i++) {
                                var _31e = cbs[i].split(":");
                                if (_31e.length == 2 && typeof (window[_31e[1]]) == "function") {
                                    window[_31e[1]].call(window);
                                    window[_31e[1]] = function () {
                                    };
                                }
                            }
                        }
                    }});
                ibmweb.dynnav._bundleParams = {};
                ibmweb.dynnav._bundleCallbacks = [];
            });
        }, _initWithDOM: function () {
            this.isDOMLoaded = true;
            this.isValid = dojo.byId("ibm-top") && dojo.byId("ibm-masthead") && dojo.byId("ibm-footer") && (dojo.byId("ibm-content") || dojo.query("div.lotusFrame")[0]);
            if (!this.isValid && ibmweb.w3) {
                this.isValid = true;
            }
            if (!this.isValid) {
                return;
            }
            for (var _31f in this._modules) {
                if (typeof (this._modules[_31f]) == "object") {
                    try {
                        this._modules[_31f].onLoad();
                    } catch (e) {
                    }
                }
            }
        }, _initWithData: function (data) {
            if (!this.isDOMLoaded) {
                dojo.addOnLoad(function () {
                    ibmweb.dynnav._initWithData(data);
                });
                return;
            }
            if (!this.isValid) {
                return;
            }
            for (var _320 in this._modules) {
                if (typeof (this._modules[_320]) == "object") {
                    try {
                        this._modules[_320].onData(data);
                    } catch (e) {
                    }
                }
            }
        }, _onError: function () {
            for (var _321 in this._modules) {
                if (typeof (this._modules[_321]) == "object") {
                    try {
                        this._modules[_321].onError();
                    } catch (e) {
                    }
                }
            }
        }, dataCallback: function (data) {
            data.isLoaded = true;
            ibmweb.dynnav.__checkString = true;
            ibmweb.dynnav.PMM = data;
            if (!window.PMM.isLoaded && !ibmweb.info.v16) {
                window.PMM = data;
            }
            ibmweb.dynnav.isDataLoaded = true;
            dojo.addOnLoad(function () {
                ibmweb.dynnav._initWithData(data);
            });
        }, isModuleLoaded: function (_322) {
            return !!ibmweb.dynnav._modules[_322];
        }, getLoadedModule: function (_323) {
            return ibmweb.dynnav._modules[_323];
        }, executeOnModule: function (_324, _325, _326) {
            if (!!ibmweb.dynnav._modules[_324] && typeof (ibmweb.dynnav._modules[_324][_325]) == "function") {
                if (!!_326) {
                    ibmweb.dynnav._modules[_324][_325].apply(ibmweb.dynnav._modules[_324], _326);
                } else {
                    ibmweb.dynnav._modules[_324][_325].apply(ibmweb.dynnav._modules[_324]);
                }
            }
        }});
    ibmCommonDynamicNavShowResults = function () {
    };
}
if (!dojo._hasResource["dojo.regexp"]) {
    dojo._hasResource["dojo.regexp"] = true;
    dojo.provide("dojo.regexp");
    dojo.getObject("regexp", true, dojo);
    dojo.regexp.escapeString = function (str, _327) {
        return str.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function (ch) {
            if (_327 && _327.indexOf(ch) != -1) {
                return ch;
            }
            return "\\" + ch;
        });
    };
    dojo.regexp.buildGroupRE = function (arr, re, _328) {
        if (!(arr instanceof Array)) {
            return re(arr);
        }
        var b = [];
        for (var i = 0; i < arr.length; i++) {
            b.push(re(arr[i]));
        }
        return dojo.regexp.group(b.join("|"), _328);
    };
    dojo.regexp.group = function (_329, _32a) {
        return "(" + (_32a ? "?:" : "") + _329 + ")";
    };
}
if (!dojo._hasResource["dojo.cookie"]) {
    dojo._hasResource["dojo.cookie"] = true;
    dojo.provide("dojo.cookie");
    dojo.cookie = function (name, _32b, _32c) {
        var c = document.cookie;
        if (arguments.length == 1) {
            var _32d = c.match(new RegExp("(?:^|; )" + dojo.regexp.escapeString(name) + "=([^;]*)"));
            return _32d ? decodeURIComponent(_32d[1]) : undefined;
        } else {
            _32c = _32c || {};
            var exp = _32c.expires;
            if (typeof exp == "number") {
                var d = new Date();
                d.setTime(d.getTime() + exp * 24 * 60 * 60 * 1000);
                exp = _32c.expires = d;
            }
            if (exp && exp.toUTCString) {
                _32c.expires = exp.toUTCString();
            }
            _32b = encodeURIComponent(_32b);
            var _32e = name + "=" + _32b, _32f;
            for (_32f in _32c) {
                _32e += "; " + _32f;
                var _330 = _32c[_32f];
                if (_330 !== true) {
                    _32e += "=" + _330;
                }
            }
            document.cookie = _32e;
        }
    };
    dojo.cookie.isSupported = function () {
        if (!("cookieEnabled" in navigator)) {
            this("__djCookieTest__", "CookiesAllowed");
            navigator.cookieEnabled = this("__djCookieTest__") == "CookiesAllowed";
            if (navigator.cookieEnabled) {
                this("__djCookieTest__", "", {expires: -1});
            }
        }
        return navigator.cookieEnabled;
    };
}
if (!dojo._hasResource["ibmweb.legacy"]) {
    dojo._hasResource["ibmweb.legacy"] = true;
    dojo.provide("ibmweb.legacy");
    if (typeof (ibmCommon) != "object") {
        ibmCommon = {};
    }
    if (typeof (ibmCommon.data) != "object") {
        ibmCommon.data = {};
    }
    ibmCommon.data.provide = ibmweb.data.provide;
    dojo.addOnLoad(function () {
        if (ibmweb.info.v17 && !document.getElementById("ibm-print-masthead") && !!dojo.byId("ibm-masthead")) {
            dojo.place("<img src=\"" + ibmweb.config.imageUrl + "t/ibm_logo_print.png\" width=\"43\" height=\"15\" id=\"ibm-print-masthead\" alt=\"IBM Print\" />", "ibm-top", "first");
        }
    });
    (function () {
        var dc = document.cookie;
        var _331 = "ibmSurvey=";
        var _332 = dc.indexOf(_331);
        var now = new Date();
        if (_332 == -1 || (_332 > 0 && dc.indexOf("; " + _331) == -1)) {
            if (window.location.href.indexOf(".ibm.com") > 0) {
                document.cookie = _331 + now.getTime().toString() + "; path=/; domain=.ibm.com";
            }
        }
    })();
    if (typeof (encodeURIComponent) != "function") {
        encodeURIComponent = escape;
    }
    if (typeof (decodeURIComponent) != "function") {
        decodeURIComponent = unescape;
    }
    dojo.addOnLoad(function () {
        if (ibmweb.meta.encoding != "utf8") {
            dojo.query("#ibm-search-form input[name=\"en\"][value=\"utf\"]").orphan();
        }
    });
    var ibmStats = ibmStats || {};
    if (!!ibmStats.event) {
        ibmStats.event = function (_333) {
            ibmweb.queue.push(function () {
                return typeof (ibmStats.loaded) != "undefined";
            }, function () {
                ibmStats.event(_333);
            });
        };
    }
    if (document.cookie.indexOf("ipcInfo=") == -1 && document.cookie.indexOf("lenovoPrefs=") != -1 && !!window && !!window.location && String(window.location.hostname).toLowerCase().indexOf("ibm.com") != -1) {
        document.cookie = "ipcInfo=" + escape("cc=;lc=") + "; path=/; domain=.ibm.com";
        if (document.cookie.indexOf("ipcInfo=") != -1) {
            if (typeof ibmCommonCookie == "undefined") {
                document.write("<scr", "ipt type=\"text/javascript\" src=\"//www.ibm.com/common/cookie/cookie.js\"></scr", "ipt>");
            }
            document.write("<scr", "ipt type=\"text/javascript\" src=\"//www.ibm.com/common/ocaiset.js\"></scr", "ipt>");
        }
    }
    dojo.addOnLoad(function () {
        dojo.cookie("cmTPSet", null, {expires: -1, domain: ".ibm.com", path: "/"});
        dojo.cookie("sauidp", null, {expires: -1, domain: ".ibm.com", path: "/"});
    });
    if (dojo.isOpera) {
        dojo.addOnLoad(function () {
            if (dojo.byId("ibm-leadspace-head")) {
                dojo.byId("ibm-leadspace-head").style.marginTop = "0px !important";
            }
        });
    }
    dojo.addOnLoad(function () {
        if (ibmweb.meta.cpi == "roro" || ibmweb.meta.cpi == "plpl" || ibmweb.meta.cpi == "rssr" || ibmweb.meta.cpi == "ilhe" || ibmweb.meta.cpi == "sksk" || ibmweb.meta.cpi == "czcs" || ibmweb.meta.cpi == "sisl") {
            var url = dojo.config.modulePaths ? dojo.config.modulePaths.ibmweb.substr(0, dojo.config.modulePaths.ibmweb.indexOf("js/dojo/")) + "v17/css/" : "/common/v17/css/";
            dojo.create("link", {type: "text/css", title: "www", rel: "stylesheet", href: url + "font-replacement.css"}, dojo.query("head")[0]);
        }
    });
    if (dojo.isIE < 7) {
        dojo.addOnLoad(function () {
            var node = dojo.byId("ibm-leadspace-body");
            if (node) {
                var _334 = dojo.style(node, "backgroundImage");
                if (_334.indexOf(".png") > -1) {
                    var _334 = _334.substr(4);
                    _334 = _334.substr(0, _334.length - 1);
                    node.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + _334 + ", sizingMethod=crop);";
                    dojo.style(node, "backgroundImage", "none");
                }
            }
        });
    }
    if (dojo.version.major <= 1 && dojo.version.minor < 4 && dojo.isIE) {
        var origAddOnLoad = dojo.addOnLoad;
        dojo.addOnLoad = function () {
            var args = arguments;
            if (document.readyState == "complete") {
                dojo.addOnLoad = origAddOnLoad;
                dojo.addOnLoad.apply(dojo, args);
            } else {
                setTimeout(function () {
                    dojo.addOnLoad.apply(dojo, args);
                }, 10);
            }
        };
    }
}
if (!dojo._hasResource["ibmweb.truste"]) {
    dojo._hasResource["ibmweb.truste"] = true;
    dojo.provide("ibmweb.truste");
    if (ibmweb.config.config === "www") {
        ibmweb.truste.enabled = function () {
        };
        ibmweb.truste.decision = function () {
        };
        var id = ibmweb.queue.push(function () {
            return typeof (truste) != "undefined";
        }, function () {
            ibmweb.truste.enabled = function () {
                return true;
            };
            ibmweb.truste.decision = function (_335, dump) {
                if (!_335) {
                    _335 = "ibm.com";
                }
                var json = truste.cma.callApi("getConsentDecision", _335);
                return dump ? json : json.consentDecision;
            };
            var json = "{\"PrivacyManagerAPI\":{\"action\":\"getConsent\",\"timestamp\":" + new Date().getTime() + "}}";
            window.top.postMessage(json, "*");
            var _336 = function () {
                dojo.publish("/ibm/truste-api/update");
            };
            if (window.addEventListener) {
                window.addEventListener("message", _336, false);
            } else {
                if (window.attachEvent) {
                    window.attachEvent("onmessage", _336);
                }
            }
        });
        dojo.addOnLoad(function () {
            var _337 = ["gb", "fr", "de", "uk", "es", "nl", "gr", "at", "hu", "lv", "lt", "pl", "se", "bg", "dk", "fi", "cz", "ee", "pt", "be", "cy", "no", "sk", "ie", "it", "ro", "si", "ch"];
            if (dojo.indexOf(_337, ibmweb.meta.cc) == -1 || typeof (ibmStats) == "undefined") {
                ibmweb.queue.remove(id);
                ibmweb.truste.enabled = function () {
                    return false;
                };
                dojo.publish("/ibm/truste-api/disabling");
            }
        });
        dojo.ready(function () {
            ibmweb.queue.push(function () {
                return (typeof (truste) !== "undefined" && truste.eu && truste.eu.iconid && dojo.byId(truste.eu.iconid) && typeof (truste.eu.clickListener) === "function");
            }, function () {
                var _338 = dojo.query("#ibm-footer > ul > li:last-child"), _339 = dojo.query(dojo.create("a")), _33a = dojo.query(dojo.create("li")).append(_339);
                _339.attr("href", "#").innerHTML("Cookie Preferences").onclick(function (e) {
                    truste.eu.clickListener();
                    e.preventDefault();
                }).onkeyup(function (e) {
                    if (e.keyCode === 13) {
                        truste.eu.clickListener();
                        e.preventDefault();
                    }
                });
                if (_338[0]) {
                    if (dojo.query("> a", _338[0])[0] && dojo.query("> a", _338[0]).innerHTML().indexOf("Feedback") !== -1) {
                        _338.before(_33a);
                    } else {
                        _338.after(_33a);
                    }
                    dojo.query("#" + truste.eu.iconid).style("display", "none");
                }
            });
        });
    }
}
if (!dojo._hasResource["ibmweb.readmore"]) {
    dojo._hasResource["ibmweb.readmore"] = true;
    dojo.provide("ibmweb.readmore");
    ibmweb.readmore.content = "";
    ibmweb.readmore.defaultLimit = 200;
    ibmweb.readmore.limit = "";
    ibmweb.readmore.init = function () {
        ibmweb.queue.push(function () {
            if (dojo.query(".ibm-readmore").length <= 0) {
                return false;
            } else {
                return true;
            }
        }, function () {
            dojo.query(".ibm-readmore").forEach(function (node, _33b) {
                if (node.tagName == "DIV") {
                    var lrm = dojo.create("p", {innerHTML: "<a href='javascript:;' class='ibm-maximize-link' style='display:inline;' aria-label='Click to Expand'>Show&nbsp;more</a>", style: {margin: "0px"}});
                    var lrl = dojo.create("p", {innerHTML: "<a href='javascript:;' class='ibm-minimize-link' style='display:inline;' aria-label='Click to Shrink'>Show&nbsp;less</a>", style: {margin: "0"}});
                } else {
                    if (node.tagName == "UL" || node.tagName == "OL") {
                        var lrm = dojo.create("li", {innerHTML: "<a href='javascript:;' class='ibm-maximize-link' style='display:inline;text-decoration:none;' aria-label='Click to Expand'>Show&nbsp;more</a>", style: {margin: "0", background: "none", listStyle: "none"}});
                        var lrl = dojo.create("li", {innerHTML: "<a href='javascript:;' class='ibm-minimize-link' style='display:inline;text-decoration:none;' aria-label='Click to Shrink'>Show&nbsp;less</a>", style: {margin: "0", background: "none", listStyle: "none"}});
                    } else {
                        var lrm = dojo.create("span", {innerHTML: "<a href='javascript:;' class='ibm-maximize-link' style='display:inline;text-decoration:none;' aria-label='Click to Expand'>Show&nbsp;more</a>", style: {margin: "0px 0px 0px 11px"}});
                        var lrl = dojo.create("span", {innerHTML: "<a href='javascript:;' class='ibm-minimize-link' style='display:inline;text-decoration:none;' aria-label='Click to Shrink'>Show&nbsp;less</a>", style: {margin: "0px 0px 0px 11px"}});
                    }
                }
                ibmweb.readmore.readLength(node);
                var _33c = node.innerHTML.trim();
                dojo.connect(lrm, "onclick", function (e) {
                    node.innerHTML = _33c;
                    lrl.innerHTML = "<a href='javascript:;' class='ibm-minimize-link' style='display:inline;text-decoration:none;' aria-label='click to Shrink'>Show&nbsp;less</a>";
                    dojo.place(lrl, node);
                });
                _33c = _33c.replace(new RegExp(">[\n\t ]+<", "g"), "><");
                _33c = _33c.replace(/<!--[\s\S]*?-->/g, "");
                var _33d = ibmweb.readmore.htmlSubstring(_33c, ibmweb.readmore.limit);
                var ind = _33c.trim().indexOf(_33d) + _33d.length;
                node.innerHTML = _33d;
                dojo.place(lrm, node);
                dojo.connect(lrl, "onclick", function (e) {
                    ibmweb.readmore.readLength(node);
                    node.innerHTML = ibmweb.readmore.htmlSubstring(_33c, ibmweb.readmore.limit);
                    lrm.innerHTML = "<a href='javascript:;' class='ibm-maximize-link' style='display:inline;text-decoration:none;' aria-label='click to Expand'>Show&nbsp;more</a>";
                    dojo.place(lrm, node);
                });
            });
        });
    };
    ibmweb.readmore.readLength = function (elem) {
        ibmweb.readmore.limit = ibmweb.readmore.defaultLimit;
        var _33e = dojo.query(".ibm-readmore-length", elem)[0];
        if (_33e.parentElement.tagName == "LI") {
            dojo.style(_33e.parentElement, "display", "none");
        } else {
            dojo.style(_33e, "display", "none");
        }
        if (typeof _33e != "undefined") {
            if (/^\d+$/.test(_33e.innerHTML)) {
                ibmweb.readmore.limit = _33e.innerHTML;
            } else {
            }
        }
    };
    ibmweb.readmore.htmlSubstring = function (s, n) {
        var m, r = /<([^>\s]*)[^>]*>/g, _33f = [], _340 = 0, _341 = "", _342 = 0;
        n = (parseInt(n) + parseInt(n.length));
        while ((m = r.exec(s)) && n) {
            _342 = 0;
            var temp = s.substring(_340, m.index).substr(0, n);
            if (temp.match(/\s/g) != null) {
                _342 = temp.match(/\s/g).length;
            }
            temp = s.substring(_340, m.index).substr(0, n);
            _341 += temp;
            n -= temp.length;
            if (n == 0 && (s.substring(_340, m.index).substr(temp.length, 1) != " " || temp.length == s.substring(_340, m.index).length)) {
                _341 = _341.replace(new RegExp("><", "g"), "> <");
                if (temp.length != s.substring(_340, m.index).length) {
                    _341 = _341.substr(0, _341.lastIndexOf(" "));
                } else {
                    _341 = _341.substr(0, _341.length);
                }
            }
            _340 = r.lastIndex;
            if (n) {
                _341 += m[0];
                if (m[1].indexOf("/") === 0) {
                    _33f.pop();
                } else {
                    if (m[1].lastIndexOf("/") !== m[1].length - 1) {
                        _33f.push(m[1]);
                    }
                }
            }
        }
        if (n != 0) {
            if (s.substr(_340, n).match(/\s/g) != null) {
                _342 = s.substr(_340, n).match(/\s/g).length;
            }
            _341 += s.replace(/\s{2,}/g, "").substr(_340, (n));
            if (s.replace(/\s{2,}/g, "").substr(_341.length, 1) != " ") {
                _341 = _341.substr(0, _341.lastIndexOf(" "));
            }
        }
        _341 += "...";
        while (_33f.length) {
            _341 += "</" + _33f.pop() + ">";
        }
        return _341;
    };
    dojo.ready(function () {
        ibmweb.readmore.init();
    });
}
if (!dojo._hasResource["ibmweb.filebrowse"]) {
    dojo._hasResource["ibmweb.filebrowse"] = true;
    dojo.provide("ibmweb.filebrowse");
    dojo.ready(function () {
        var _343 = {id: "filebrowse", init: function () {
                dojo.query("form.ibm-styled-form input[type=file].ibm-multi-file-browser, form.ibm-styled-form input[type=file].ibm-single-file-browser").forEach(function (_344) {
                    var form = _344.parentElement;
                    while (form.tagName != "FORM") {
                        form = form.parentElement;
                    }
                    if (form.className.indexOf("ibm-column-form") < 0 && form.className.indexOf("ibm-row-form") < 0) {
                        return false;
                    }
                    var span = dojo.create("span", {});
                    var _345 = dojo.create("span", {className: "ibm-filebrowser"}, span);
                    dojo.place(span, _344.parentElement, "replace");
                    var _346 = dojo.create("a", {className: "ibm-upload-link", role: "button", href: "javascript:;", innerHTML: "Browse", "aria-label": "Browse for a file..."}, _345);
                    var _347 = dojo.query(_344);
                    dojo.place(_346, _345);
                    dojo.place(_347[0], _345);
                    dojo.connect(_346, "onclick", _343.onclick);
                    dojo.connect(_344, "onchange", _343.onchange);
                    dojo.query(_344).forEach(function (node, _348) {
                        var name = dojo.attr(node, "name");
                        if (!name && dojo.hasClass(node, "ibm-single-file-browser")) {
                            dojo.attr(node, "name", "uploadFile");
                        } else {
                            if (!name && dojo.hasClass(node, "ibm-multi-file-browser")) {
                                dojo.attr(node, "name", "uploadFile[]");
                            } else {
                                if (name && dojo.hasClass(node, "ibm-multi-file-browser")) {
                                    dojo.attr(node, "name", dojo.attr(node, "name") + "[]");
                                }
                            }
                        }
                    });
                });
            }, onclick: function (e) {
                var _349 = e.currentTarget;
                if (dojo.hasClass(e.currentTarget, "ibm-delete-link")) {
                    if (dojo.query(e.currentTarget.parentElement.parentElement).children(".ibm-filebrowser").length === 1) {
                        dojo.destroy(e.currentTarget.nextSibling.nextSibling);
                        dojo.removeClass(e.currentTarget, "ibm-delete-link");
                        dojo.addClass(e.currentTarget, "ibm-upload-link");
                        e.currentTarget.innerHTML = "Browse";
                        dojo.attr(e.currentTarget, "aria-label", "Browse for a file...");
                        var _34a = dojo.query(_349.parentElement).children(".ibm-multi-file-browser")[0];
                        if (!_34a) {
                            return;
                        }
                        var _34b = dojo.query(e.currentTarget.parentElement.parentElement).children(".ibm-addlink-display")[0];
                        if (_34b) {
                            dojo.removeClass(_34b, "ibm-addlink-display");
                            dojo.addClass(_34b, "ibm-addlink");
                        }
                    } else {
                        var _34c = e.currentTarget.parentElement.nextSibling;
                        while (_34c.tagName != "SPAN") {
                            _34c = _34c.nextSibling;
                        }
                        var _34d = e.currentTarget.parentElement.parentElement;
                        dojo.destroy(e.currentTarget.parentElement);
                        var _34e = dojo.query(_34d).children(".ibm-filebrowser").last();
                        var _34f = "";
                        if (_34e) {
                            var _350 = dojo.query(_34e).children("input")[0];
                            _34f = dojo.attr(_350, "value");
                        }
                        var _351 = dojo.query(_34d).children(".ibm-addlink-display")[0];
                        dojo.attr(dojo.query(".ibm-add1-link", _351)[0], "aria-label", "Browse for another file ... Already selected " + _34f);
                        dojo.query("a", _34c)[0].focus();
                        dojo.destroy(e.currentTarget.parentElement);
                    }
                } else {
                    dojo.query("input[type=file]", _349.parentElement)[0].click();
                }
            }, onchange: function (evt) {
                var form = evt.currentTarget.parentElement;
                while (form.tagName != "FORM") {
                    form = form.parentElement;
                }
                var _352 = dojo.query(evt.currentTarget);
                var _353 = _352.val().split("\\");
                if (_353.length > 1) {
                    name = _353[_353.length - 1];
                } else {
                    name = _353[0];
                }
                if (form.className.indexOf("column-form") > 0 && name.length > 30) {
                    name = name.substring(0, 14) + "..." + name.substring((name.length - 10), name.length);
                } else {
                    if (form.className.indexOf("row-form") > 0 && name.length > 15) {
                        name = name.substring(0, 6) + "..." + name.substring((name.length - 7), name.length);
                    }
                }
                var _354 = dojo.create("span", {});
                dojo.place(_354, _352[0], "after");
                _352.next().text("(" + name + ")");
                _352.prev().text("Remove");
                _352.prev().attr("aria-label", "Remove " + _353);
                _352.prev()[0].className = "ibm-delete-link";
                if (_352[0].className.indexOf("ibm-multi-file-browser") == -1) {
                    return;
                }
                var _355 = dojo.query(_352[0].parentElement.parentElement).children(".ibm-addlink-display, .ibm-addlink")[0];
                if (!_355) {
                    var _356 = dojo.create("span", {className: "ibm-addlink-display"});
                    var _357 = dojo.create("a", {className: "ibm-add1-link", role: "button", "aria-label": "Browse for another file ... Already selected " + _353, href: "javascript:;", innerHTML: "Add more"});
                    dojo.connect(_357, "onclick", _343.createBrowse);
                    dojo.place(_357, _356);
                    dojo.place(_356, _352[0].parentElement.parentElement);
                    _357.focus();
                } else {
                    dojo.removeClass(_355, "ibm-addlink");
                    dojo.addClass(_355, "ibm-addlink-display");
                    dojo.attr(dojo.query(".ibm-add1-link", _355)[0], "aria-label", "Browse for another file ... Already selected " + _353);
                }
            }, createBrowse: function (e) {
                var form = e.currentTarget.parentElement;
                while (form.tagName != "FORM") {
                    form = form.parentElement;
                }
                var _358 = dojo.create("span", {className: "ibm-filebrowser"});
                var _359 = dojo.create("a", {className: "ibm-upload-link", role: "button", href: "javascript:;", innerHTML: "Browse", "aria-label": "Browse for a file..."});
                var _35a = dojo.create("input", {className: "ibm-multi-file-browser", type: "file", name: "uploadFile[]"});
                dojo.place(_359, _358);
                dojo.place(_35a, _358);
                var _35b = dojo.query(".ibm-filebrowser", form)[0].parentElement;
                dojo.place(_358, dojo.query(".ibm-addlink-display", _35b)[0], "before");
                dojo.connect(_359, "onclick", _343.onclick);
                dojo.connect(_35a, "onchange", _343.onchange);
                dojo.removeClass(e.currentTarget.parentElement, "ibm-addlink-display");
                dojo.addClass(e.currentTarget.parentElement, "ibm-addlink");
                _35a.click();
            }};
        _343.init();
    });
}
if (!dojo._hasResource["ibmweb.filesize"]) {
    dojo._hasResource["ibmweb.filesize"] = true;
    dojo.provide("ibmweb.filesize");
    dojo.ready(function () {
        var _35c = {youtubeLinks: [], youtubeVideoTimings: [], init: function () {
                var _35d = [".ibm-document-link", ".ibm-pdf-link", ".ibm-video-link"];
                for (var i = 0; i < _35d.length; i++) {
                    dojo.query(_35d[i]).forEach(function (node, _35e) {
                        if (dojo.query(".ibm-item-note", node).length <= 0) {
                            if (node.getAttribute("href") && node.getAttribute("href").indexOf("youtube.com") > 0) {
                                var _35f = node.getAttribute("href").substring(node.getAttribute("href").indexOf("?") + 1, node.getAttribute("href").length);
                                var _360 = dojo.queryToObject(_35f);
                                if (typeof _360["v"] !== "undefined" && _360["v"] != "") {
                                    if (/^[A-Za-z0-9_-]{8,11}$/.test(_360["v"])) {
                                        _35c.youtubeLinks.push(node);
                                    } else {
                                    }
                                } else {
                                }
                            } else {
                                try {
                                    dojo.xhr("HEAD", {url: node.getAttribute("href"), handle: function (_361, _362) {
                                            var _363 = _35c.formatSize(_362.xhr.getResponseHeader("Content-Length"));
                                            _35c.displayNote(node, _363);
                                        }});
                                } catch (e) {
                                }
                            }
                        }
                    });
                }
                if (_35c.youtubeLinks.length > 0) {
                    _35c.getYoutubeTiming();
                }
            }, displayNote: function (node, _364) {
                if ((_364 != null && _364.indexOf("0.00") < 0) && !(node.getAttribute("href") == "#" || node.getAttribute("href") == "")) {
                    var _365 = dojo.query(".ibm-item-note", node);
                    if (_365.length == 0) {
                        dojo.create("span", {className: "ibm-item-note", innerHTML: " (" + _364 + ")"}, node);
                    } else {
                        if (_365.innerHTML().indexOf(",") > 0) {
                            var cont = _365.innerHTML().split(",");
                            if (cont[0].indexOf("(") < 0) {
                                _364 = cont[0] + ", " + _364;
                            } else {
                                _364 = cont[0].replace("(", "") + ", " + _364;
                            }
                        }
                        _365.innerHTML(" (" + _364 + ")");
                    }
                }
            }, formatSize: function (_366) {
                if (_366 != null) {
                    if (_366 >= 1073741824) {
                        _366 = (_366 / 1073741824).toFixed(0) + "GB";
                    } else {
                        if (_366 >= 1048576) {
                            _366 = (_366 / 1048576).toFixed(0) + "MB";
                        } else {
                            _366 = (_366 / 1024).toFixed(0) + "KB";
                        }
                    }
                }
                return _366;
            }, getYoutubeTiming: function () {
                if (_35c.youtubeLinks.length > 0) {
                    for (var i = 0; i < _35c.youtubeLinks.length; i++) {
                        var node = _35c.youtubeLinks[i];
                        var _367 = node.getAttribute("href").substring(node.getAttribute("href").indexOf("?") + 1, node.getAttribute("href").length);
                        var _368 = dojo.queryToObject(_367);
                        if (typeof _368["v"] !== "undefined") {
                            dojo.io.script.get({url: "http://gdata.youtube.com/feeds/api/videos/" + _368["v"] + "?v=2&alt=jsonc&callback=ibmweb.filesize.youtubeFeedCallback&prettyprint=true", error: function (_369, _36a) {
                                    for (var key in _35c.youtubeLinks) {
                                        var _36b = _36a.url.substring(_36a.url.indexOf("api/videos/") + 11, _36a.url.indexOf("?v="));
                                        if (_35c.youtubeLinks[key].href.indexOf(_36b) > 0) {
                                            break;
                                        }
                                    }
                                    _35c.youtubeLinks.splice(key, 1);
                                }});
                        }
                    }
                    ibmweb.queue.push(function () {
                        if (_35c.youtubeVideoTimings.length == _35c.youtubeLinks.length) {
                            return true;
                        } else {
                            return false;
                        }
                    }, function () {
                        for (var i = 0; i < _35c.youtubeLinks.length; i++) {
                            var node = _35c.youtubeLinks[i];
                            var _36c = node.getAttribute("href").substring(node.getAttribute("href").indexOf("?") + 1, node.getAttribute("href").length);
                            var _36d = dojo.queryToObject(_36c);
                            var j = 0;
                            while (_35c.youtubeVideoTimings[j]) {
                                if (_36d["v"] == _35c.youtubeVideoTimings[j].id) {
                                    _35c.displayNote(node, _35c.youtubeVideoTimings[j].time);
                                    break;
                                }
                                j++;
                                if (j == _35c.youtubeVideoTimings.length) {
                                    j = 0;
                                }
                            }
                        }
                    });
                }
            }, youtubeFeedCallback: function (json) {
                if (typeof json.data != "undefined") {
                    var secs = json.data.duration;
                    var hr = Math.floor(secs / 3600);
                    var min = Math.floor((secs - (hr * 3600)) / 60);
                    var sec = Math.floor(secs - (hr * 3600) - (min * 60));
                    if (hr < 10) {
                        hr = "0" + hr;
                    }
                    if (min < 10) {
                        min = "0" + min;
                    }
                    if (sec < 10) {
                        sec = "0" + sec;
                    }
                    _35c.youtubeVideoTimings.push({id: json.data.id, time: hr + ":" + min + ":" + sec});
                }
            }};
        ibmweb.filesize.youtubeFeedCallback = _35c.youtubeFeedCallback;
        _35c.init();
    });
}
if (!dojo._hasResource["ibmweb._base"]) {
    dojo._hasResource["ibmweb._base"] = true;
    dojo.provide("ibmweb._base");
}
if (!dojo._hasResource["ibmweb.bitly"]) {
    dojo._hasResource["ibmweb.bitly"] = true;
    dojo.provide("ibmweb.bitly");
    dojo.declare("ibmweb.bitly", [], {url: null, onSuccess: null, onError: null, shorturl: null, rawData: null, constructor: function (_36e) {
            dojo.mixin(this, _36e);
        }, shorten: function () {
            if (!this.url) {
                this.url = location.href;
            }
            dojo.io.script.get({url: "http://api.bit.ly/v3/shorten?login=" + ibmweb.config.bitly.login + "&apiKey=" + ibmweb.config.bitly.key + "&longUrl=" + escape(this.url) + "&format=json&callback=" + ibmweb.callback.createJSONPWrapper(this, "_callback"), timeout: ibmweb.config.bitly.timeout, error: dojo.hitch(this, function (_36f, _370) {
                    this._error();
                })});
        }, _callback: function (data) {
            if (!data || !data.status_code || !data.status_code == 200) {
                this._error();
            }
            this.shorturl = data.data.url;
            this.rawData = data;
            if (this.onSuccess) {
                this.onSuccess(data.data.url);
            }
        }, _error: function () {
            this.shorturl = this.url;
            if (this.onError) {
                this.onError(this.url);
            } else {
                if (this.onSuccess) {
                    this.onSuccess(this.url);
                }
            }
        }});
}
if (!dojo._hasResource["ibmweb.sbs"]) {
    dojo._hasResource["ibmweb.sbs"] = true;
    dojo.provide("ibmweb.sbs");
    (function () {
        var _371 = {"cc": "us", "lc": "en", "encoding": "utf8", "element": "ibm-sbs-icons", "loadManually": false, init: function (_372) {
                if (document.getElementsByTagName("head").length != 1) {
                    return;
                }
                if (!!_372) {
                    if (!!_372.cc) {
                        this.cc = _372.cc;
                    }
                    if (!!_372.lc) {
                        this.lc = _372.lc;
                    }
                    if (!!_372.encoding) {
                        this.encoding = _372.encoding;
                    }
                    if (!!_372.element) {
                        this.element = _372.element;
                    }
                    if (!!_372.loadManually) {
                        this.loadManually = _372.loadManually;
                    }
                }
                if (!this.loadManually) {
                    var _373 = document.createElement("link");
                    _373.href = "//www.ibm.com/common/v16/css/sbs.css";
                    _373.rel = "stylesheet";
                    _373.type = "text/css";
                    document.getElementsByTagName("head")[0].appendChild(_373);
                    var _374 = document.createElement("script");
                    _374.src = "//www.ibm.com/common/js/sbs/" + this.cc + "/" + this.lc + "/" + this.cc + this.lc + "-" + this.encoding + ".js";
                    _374.type = "text/javascript";
                    document.getElementsByTagName("head")[0].appendChild(_374);
                }
            }, getUrl: function () {
                return location.href;
            }, render: function (data, _375) {
                if (!_375) {
                    _375 = this.element;
                }
                if (typeof (_375) == "string") {
                    _375 = document.getElementById(_375);
                }
                if (_375 == null) {
                    return;
                }
                if (_375.childNodes.length != 0) {
                    return;
                }
                var _376 = this.getUrl();
                if (document.getElementsByTagName("title").length == 0) {
                    return;
                }
                var _377 = document.getElementsByTagName("title")[0].innerHTML;
                var ul = document.createElement("ul");
                for (var i = 0, j = data.length; i < j; i++) {
                    var $i = data[i];
                    if ($i.id == "print" || $i.id == "w3-print") {
                        var li = this.getPTPLink($i);
                        if (li) {
                            ul.appendChild(li);
                        }
                        continue;
                    }
                    if ($i.id == "email" || $i.id == "w3-email") {
                        var li = this.getETPLink($i);
                        if (li) {
                            ul.appendChild(li);
                        }
                        continue;
                    }
                    if (!$i.url) {
                        continue;
                    }
                    $i.targeturl = $i.url.replace(/%\{URL\}/g, encodeURIComponent(_376)).replace(/%\{TITLE\}/g, encodeURIComponent(_377));
                    var a = this.createLink($i);
                    var li = document.createElement("li");
                    li.appendChild(a);
                    ul.appendChild(li);
                }
                _375.appendChild(ul);
                _375.onmouseover = function () {
                    _375.className += " ibm-active";
                };
                _375.onmouseout = function () {
                    _375.className = _375.className.replace(/\s+ibm-active/, "");
                };
                _375.style.display = "block";
            }, createLink: function ($i) {
                var a = dojo.create("a", {className: "ibm-share-" + $i.id, title: $i.title, innerHTML: $i.title, href: (!!$i.targeturl) ? $i.targeturl : "#", rel: $i.id, onmousedown: function () {
                        this.className += " ibm-share-active-" + this.rel;
                    }, onmouseout: function () {
                        this.className = this.className.replace(/\s+ibm-share-active-.*/, "");
                    }, onclick: function (e) {
                        ibmweb.sbs.clickHandler(e, $i);
                    }});
                if (document.getElementById("ibm-com").className.indexOf("dijit_a11y") != -1) {
                    a.innerHTML = "";
                    var img = document.createElement("img");
                    img.className = "ibm-access";
                    img.src = ibmweb.config.imageUrl + "icons/sprites-pt-all.png";
                    img.alt = $i.title;
                    a.appendChild(img);
                }
                return a;
            }, clickHandler: function () {
                return true;
            }, getPTPLink: function () {
                return null;
            }, getETPLink: function () {
                return null;
            }};
        ibmweb.sbs = _371;
    })();
    ibmweb.sbs.getUrl = ibmweb.util.getUrl;
    ibmweb.sbs.clickHandler = function (_378, data) {
        if (data.id == "ibm-dogear") {
            _378.preventDefault();
            window.open(data.targeturl, data.title, "width=600,height=550");
            return false;
        }
        if (!data.url) {
            return;
        }
        _378.preventDefault();
        var a = _378.target;
        ibmweb.util.statsHelper({"ibmEV": "external link", "ibmEvAction": a.href, "ibmEvGroup": "SBS icons", "ibmEvName": "sbs-" + a.rel});
        dojo.style(a, "cursor", "wait");
        if (dojo.hasClass(a, "clicked")) {
            return;
        }
        dojo.addClass(a, "clicked");
        if (data && data.id == "stumble") {
            var url = data.url.replace(/%\{URL\}/g, encodeURIComponent(document.location.href)).replace(/%\{TITLE\}/g, encodeURIComponent(ibmweb.meta.title));
            window.location = url;
            return true;
        }
        var b = new ibmweb.bitly({url: ibmweb.util.getUrl(), onSuccess: function (_379) {
                dojo.style(a, "cursor", "auto");
                dojo.removeClass(a, "clicked");
                var url = data.url.replace(/%\{URL\}/g, encodeURIComponent(_379)).replace(/%\{TITLE\}/g, encodeURIComponent(ibmweb.meta.title));
                setTimeout(function () {
                    window.location = url;
                }, 0);
            }});
        b.shorten();
        return true;
    };
    ibmweb.sbs.getETPLink = function (data) {
        if (ibmweb.config.sbs.email != true) {
            return null;
        }
        var a = this.createLink(data);
        dojo.connect(a, "onclick", null, function (_37a) {
            dojo.stopEvent(_37a);
            var link = _37a.target;
            ibmweb.util.statsHelper({"ibmEV": "external link", "ibmEvAction": link.href, "ibmEvGroup": "SBS icons", "ibmEvName": "sbs-email"});
            ibmweb.dynnav.executeOnModule("emailthispage", "showForm", []);
            return false;
        });
        var li = document.createElement("li");
        li.appendChild(a);
        return li;
    };
    ibmweb.sbs.getPTPLink = function (data) {
        if (ibmweb.config.sbs.print != true) {
            return null;
        }
        var a = this.createLink(data);
        dojo.connect(a, "onclick", null, function (_37b) {
            dojo.stopEvent(_37b);
            var link = _37b.target;
            ibmweb.util.statsHelper({"ibmEV": "external link", "ibmEvAction": link.href, "ibmEvGroup": "SBS icons", "ibmEvName": "sbs-print"});
            javascript:print();
            return false;
        });
        var li = document.createElement("li");
        li.appendChild(a);
        return li;
    };
    ibmweb.sbs.register = function (elem, all) {
        if (!(typeof (ibmweb.dynnav.PMM) == "object" && !!ibmweb.dynnav.PMM.footerToolData)) {
            window.setTimeout(function () {
                ibmweb.sbs.register(elem, all);
            }, 50);
            return;
        }
        if (ibmweb.dynnav.PMM.footerToolData.length == 0) {
            return false;
        }
        ibmweb.sbs.init({"cc": ibmweb.meta.cc, "lc": ibmweb.meta.lc, "encoding": ibmweb.meta.encoding, "loadManually": true, "element": null});
        if (!elem) {
            elem = ".ibm-share-this";
        }
        elem = dojo.query(elem);
        elem.forEach(function (node) {
            ibmweb.sbs.render(ibmweb.dynnav.PMM.footerToolData, node, all);
        });
    };
    dojo.addOnLoad(ibmweb.sbs.register);
}
if (!dojo._hasResource["ibmweb.ribbon"]) {
    dojo._hasResource["ibmweb.ribbon"] = true;
    dojo.provide("ibmweb.ribbon");
    dojo.provide("ibmweb.ribbonSlide");
    dojo.provide("ibmweb.ribbonItem");
    dojo.provide("ibmweb.ribbonItemAbstract");
    dojo.provide("ibmweb.ribbonLeadspace");
    dojo.declare("ibmweb.ribbon", [dijit._Widget, dijit._Templated], {columns: 3, autoscroll: false, freeScroll: false, interval: 5000, leadNoHomeInterval: 15000, _interval: null, _intervalHandlers: {resize: null, onmouseleave: null, onmouseenter: null}, rotationCount: 0, _rotationCount: 0, defaultDuration: 500, _isBeingAnimated: false, _isBegingAutoscroll: false, _isLeadSpace: false, _isLeadNoHome: false, _scrollableNodeAnimObj: null, templateString: "<div class='ibm-container-body' dojoAttachPoint='ribbonContainer'>" + "<a class='ibm-ribbon-prev' dojoAttachPoint='scrollLeftButton' role='button' href='#'></a>" + "<div class='ibm-ribbon-pane' dojoAttachPoint='scrollContainer'>" + "<div class='ibm-ribbon-section' dojoAttachPoint='scrollableNode' role='listbox'></div>" + "</div>" + "<a class='ibm-ribbon-next' dojoAttachPoint='scrollRightButton' role='button' href='#'></a>" + "<div class='ibm-ribbon-nav' dojoAttachPoint='navNode' role='toolbar'></div>" + "</div>", constructor: function (_37c) {
            this.slides = [];
            this.currentSlideIndex = 0;
            this.originalNode = null;
            this.duration = this.defaultDuration;
            this._durationCopy = this.duration;
            !!_37c && _37c.srcNodeRef && (this.originalNode = _37c.srcNodeRef);
        }, postCreate: function () {
            var self = this;
            if (self.originalNode) {
                dojo.query(".ibm-columns", this.originalNode).forEach(function (_37d, _37e) {
                    var _37f = null;
                    if (_37d.id) {
                        _37f = _37d.id;
                    }
                    dojo.query("> *", _37d).forEach(function (item, j) {
                        self.addItem(new ibmweb.ribbonItemAbstract({srcNodeRef: item}), _37e, _37f);
                    });
                });
                if (self.originalNode.id) {
                    self.domNode.id = self.originalNode.id;
                }
            }
            var _380 = this.domNode.parentNode ? dojo.hasClass(this.domNode.parentNode, "ibm-no-rotate") : true;
            if (this._isLeadSpace && !this.checkHome() && !_380) {
                this._isLeadNoHome = true;
                this.autoscroll = true;
                this.interval = this.leadNoHomeInterval;
            }
        }, startup: function () {
            if (!dojo.hasClass(this.ribbonContainer.parentNode, "ibm-ribbon-fixed")) {
                var temp = dojo.coords(this.scrollableNode).h;
                var ob = dojo.query("object", this.id);
                if (ob.length > 0) {
                    var max = 0;
                    ob.forEach(function (i) {
                        if (i.height) {
                            if (i.height > max) {
                                max = i.height;
                            }
                        }
                    });
                    if (max > temp) {
                        temp = max;
                    }
                }
                dojo.style(this.scrollContainer, "height", temp + "px");
            }
            dojo.style(this.scrollLeftButton, {marginTop: (dojo.coords(this.scrollContainer).h / 2) - 12 + "px"});
            dojo.style(this.scrollRightButton, {marginTop: "-" + ((dojo.coords(this.scrollContainer).h) / 2 + 12) + "px"});
            if (ibmweb.meta.cpi == "ilhe" && this._isLeadSpace && this._isLeadNoHome) {
                var pos = (dojo.window.getBox().w - 1050) / 2;
                dojo.style(this.scrollLeftButton, {left: "auto", right: (pos < 1 ? 1 : pos) + "px"});
                dojo.style(this.scrollRightButton, {right: "auto", left: (pos < 1 ? 1 : pos) + "px"});
            }
            dojo.addClass(this.scrollLeftButton, "ibm-disabled");
            if (this.slideCount() <= 1) {
                dojo.addClass(this.scrollRightButton, "ibm-disabled");
                dojo.query(this.navNode).orphan();
            } else {
                dojo.query(":first-child", this.navNode).addClass("ibm-active");
                dojo.query(":first-child", this.navNode)[0].tabIndex = 0;
                dojo.connect(this.scrollLeftButton, "onclick", dojo.hitch(this, this.slideLeft));
                dojo.connect(this.scrollRightButton, "onclick", dojo.hitch(this, this.slideRight));
            }
            if (this.ribbonContainer.parentNode.id != "ibm-promotion-module") {
                dojo.query("div[role=\"document\"] a, div[role=\"document\"] input, div[role=\"document\"]", this.scrollableNode).forEach(function (n) {
                    n.tabIndex = -1;
                });
                var _381 = dojo.query("div[role=\"option\"]", this.scrollableNode);
                if (_381.length > 0) {
                    dojo.query("div[role=\"document\"] a, div[role=\"document\"] input, div[role=\"document\"]", _381[0]).forEach(function (n) {
                        n.tabIndex = 0;
                    });
                }
            }
            ibmweb.queue.push(function () {
                return ibmweb.dynnav.isDataLoaded;
            }, dojo.hitch(this, function () {
                dojo.attr(this.scrollLeftButton, "title", ibmweb.dynnav.PMM.buttonData.prev);
                this.scrollLeftButton.innerHTML = ibmweb.dynnav.PMM.buttonData.prev;
                dojo.attr(this.scrollRightButton, "title", ibmweb.dynnav.PMM.buttonData.next);
                this.scrollRightButton.innerHTML = ibmweb.dynnav.PMM.buttonData.next;
            }));
            if (this.autoscroll) {
                if (!this._isLeadNoHome) {
                    var _382 = this.slides[0].domNode, _383 = dojo.clone(_382);
                    dojo.addClass(_383, "ibm-cloned");
                    dojo.removeAttr(_383, "id");
                    dojo.query("div", _383).removeAttr("id");
                    dojo.place(_383, this.scrollableNode);
                }
                var self = this;
                this._interval = setInterval(function () {
                    self.next();
                }, this.interval);
                if (!this.freeScroll) {
                    this._intervalHandlers.onmouseenter = dojo.connect(this.domNode, "onmouseenter", dojo.hitch(this, function () {
                        clearInterval(this._interval);
                    }));
                    this._intervalHandlers.onmouseleave = dojo.connect(this.domNode, "onmouseleave", dojo.hitch(this, function () {
                        clearInterval(this._interval);
                        this._interval = setInterval(function () {
                            self.next();
                        }, this.interval);
                    }));
                    this._intervalHandlers.resize = dojo.connect(window, "resize", dojo.hitch(this, function () {
                        clearInterval(this._interval);
                    }));
                }
            }
            if (ibmweb.info.iDevice) {
                var _384 = 0;
                this.domNode.ontouchstart = function (e) {
                    _384 = e.touches[0].clientX;
                };
                this.domNode.ontouchmove = function (e) {
                    e.preventDefault();
                };
                this.domNode.ontouchend = dojo.hitch(this, function (e) {
                    swipeEnd = e.changedTouches[0].clientX;
                    var diff = swipeEnd - _384;
                    if (diff < 0) {
                        this.slideRight();
                    } else {
                        if (diff > 0) {
                            this.slideLeft();
                        }
                    }
                });
            }
            dojo.forEach(this.slides, function (w) {
                if (w && !w._started && w.startup) {
                    w.startup();
                }
            });
            this.inherited(arguments);
        }, addSlide: function (_385) {
            this.slides.push(_385);
            dojo.place(_385.domNode, this.scrollableNode);
            if (!this.scrollableNode.id) {
                this.scrollableNode.id = this.ribbonContainer.id + "_scrollable";
            }
            var _386 = dojo.create("a", {href: "#", innerHTML: "Show carousel " + this.slides.length, "role": "button", "aria-controls": this.scrollableNode.id, "IbmCarouselIndex": this.slides.length - 1}, this.navNode);
            _386.tabIndex = -1;
            dojo.connect(_386, "onclick", dojo.hitch(this, function (_387) {
                if (dojo.hasClass(_387.target, "ibm-ribbon-view")) {
                    slideToIdx = dojo.attr(_387.target.parentNode, "IbmCarouselIndex") * 1;
                } else {
                    slideToIdx = dojo.attr(_387.target, "IbmCarouselIndex") * 1;
                }
                this.slideTo(slideToIdx, _387);
            }));
            dojo.connect(_386, "keypress", dojo.hitch(this, function (_388) {
                if (_388.keyCode == dojo.keys.TAB && !_388.shiftKey) {
                    _388.target.parentNode.lastChild.focus();
                }
                if (_388.keyCode == dojo.keys.TAB && _388.shiftKey) {
                    _388.target.parentNode.firstChild.focus();
                }
                if (_388.keyCode == dojo.keys.DOWN_ARROW || _388.keyCode == dojo.keys.RIGHT_ARROW) {
                    if (!!_388.target.nextSibling) {
                        dojo.stopEvent(_388);
                        _388.target.nextSibling.focus();
                    } else {
                        dojo.stopEvent(_388);
                        _388.target.parentNode.firstChild.focus();
                    }
                }
                if (_388.keyCode == dojo.keys.UP_ARROW || _388.keyCode == dojo.keys.LEFT_ARROW) {
                    if (!!_388.target.previousSibling) {
                        dojo.stopEvent(_388);
                        _388.target.previousSibling.focus();
                    } else {
                        dojo.stopEvent(_388);
                        _388.target.parentNode.lastChild.focus();
                    }
                }
                if (_388.keyCode == dojo.keys.ENTER || _388.keyCode == dojo.keys.SPACE || _388.keyCode == 0) {
                    slideToIdx = dojo.attr(_388.target, "IbmCarouselIndex") * 1;
                    this.slideTo(slideToIdx, _388);
                }
            }));
            return _385;
        }, _focusSlideContent: function (_389) {
            var _38a = dojo.query("div[role=\"document\"]", this.scrollableNode.childNodes[_389]);
            if (_38a[0]) {
                _38a[0].focus();
            }
        }, addItem: function (item, _38b, _38c) {
            if (_38b == undefined || _38b < 0 || _38b >= this.slides.length) {
                if (_38b && _38b >= this.slides.length) {
                    this.addSlide(new ibmweb.ribbonSlide({pid: _38c}));
                }
                if (!_38b && (this.slides.length == 0 || this.slides[this.slides.length - 1].getChildren().length == this.columns)) {
                    this.addSlide(new ibmweb.ribbonSlide({pid: _38c}));
                }
                _38b = this.slides.length - 1;
            }
            this.slides[_38b].addChild(item);
            return item;
        }, checkHome: function () {
            if (dojo.attr(this.ribbonContainer.parentNode, "id") == "ibm-leadspace-head" && dojo.query(".ibm-home-page").length > 0) {
                return 1;
            }
            return 0;
        }, slideTo: function (_38d, _38e, _38f) {
            var that = this;
            _38e && dojo.stopEvent(_38e);
            _38d = parseInt(_38d, 10);
            if (_38d < 0 || _38d >= this.slides.length || _38d == this.currentSlideIndex) {
                if (_38e && !this.autoscroll) {
                    this._focusSlideContent(this.currentSlideIndex);
                }
                return;
            }
            var _390 = dojo.coords(dojo.query("> *", this.scrollableNode)[0]).w;
            if (_38f && !this.checkHome() && !this._isLeadNoHome) {
                _38d = 0;
                dojo.animateProperty({node: this.scrollableNode, duration: this._durationCopy, properties: {left: _390 * (this.slideCount() - 1) * -1}, onEnd: function () {
                        if (_38e && !this.autoscroll) {
                            that._focusSlideContent(_38d);
                        }
                    }}).play();
            }
            if (this.customSeekAnimation) {
                if (this._isBeingAnimated) {
                    return;
                }
                this._isBeingAnimated = true;
                this.customSeekAnimation(_390, _38d, _38f);
                if (_38f) {
                    _38d = 0;
                }
            } else {
                if (!dojo._isBodyLtr()) {
                    dojo.style(this.scrollableNode, {right: (_390 * _38d * -1) + "px"});
                } else {
                    if (this._scrollableNodeAnimObj) {
                        this._scrollableNodeAnimObj.stop();
                    }
                    this._scrollableNodeAnimObj = dojo.animateProperty({node: this.scrollableNode, duration: this.duration, properties: {left: _390 * _38d * -1}, onEnd: function () {
                            if (_38e && !this.autoscroll) {
                                that._focusSlideContent(_38d);
                            }
                        }}).play();
                }
            }
            if (_38d == 0) {
                dojo.addClass(this.scrollLeftButton, "ibm-disabled");
            } else {
                dojo.removeClass(this.scrollLeftButton, "ibm-disabled");
            }
            if (_38d == this.slides.length - 1) {
                dojo.addClass(this.scrollRightButton, "ibm-disabled");
            } else {
                dojo.removeClass(this.scrollRightButton, "ibm-disabled");
            }
            if (this._isBegingAutoscroll && this._isLeadNoHome) {
                var _391 = ibmweb.ribbonLeadspace._widget.scrollLeftButton, _392 = ibmweb.ribbonLeadspace._widget.scrollRightButton;
                if (dojo.isIE < 7) {
                    _391.style.display = "none";
                    _392.style.display = "none";
                } else {
                    dojo.forEach([_391, _392], function (item) {
                        dojo.anim(item, {opacity: 0}, 250, null, function () {
                            item.style.display = "none";
                        });
                    });
                }
            }
            var _393 = "div[role=\"document\"] a, div[role=\"document\"] input, div[role=\"document\"]";
            if (this.ribbonContainer.parentNode.id != "ibm-promotion-module") {
                dojo.query(_393, this.scrollableNode).forEach(function (n) {
                    n.tabIndex = -1;
                });
            }
            this.currentSlideIndex = _38d;
            if (this.ribbonContainer.parentNode.id != "ibm-promotion-module") {
                dojo.query(_393, dojo.query("div[role=\"option\"]", this.scrollableNode)[_38d]).forEach(function (n) {
                    n.tabIndex = 0;
                });
            }
            var _394 = dojo.query("a.ibm-active", this.navNode);
            if (_394.length > 0) {
                _394.removeClass("ibm-active");
                _394[0].tabIndex = -1;
            }
            dojo.query("a:nth-child(" + (_38d + 1) + ")", this.navNode).addClass("ibm-active");
            dojo.query("a:nth-child(" + (_38d + 1) + ")", this.navNode)[0].tabIndex = 0;
        }, slideLeft: function (_395) {
            this.slideTo(this.currentSlideIndex - 1, _395);
        }, slideRight: function (_396) {
            this.slideTo(this.currentSlideIndex + 1, _396);
        }, slideFirst: function () {
            this.slideTo(0);
        }, slideLast: function () {
            this.slideTo(this.slides.length - 1);
        }, next: function () {
            if (this.checkHome()) {
                dojo.query(".ibm-cloned").attr("id", "ibm-lead-1");
                var _397 = dojo.query(".ibm-cloned div").attr("widgetId");
                dojo.query(".ibm-cloned div").attr("id", _397);
            }
            if (this.rotationCount > 0 && this.rotationCount == this._rotationCount) {
                this.autoscroll = false;
                this._isBegingAutoscroll = false;
                return false;
            }
            this._isBegingAutoscroll = true;
            if ((this.currentSlideIndex + 1) == this.slideCount()) {
                if (!this.checkHome()) {
                    this.duration = 1;
                }
                this._rotationCount += 1;
                this.slides.length += 1;
                this.slideTo(this.slides.length - 1, null, true);
                this.slides.length -= 1;
                if (!this.checkHome()) {
                    this.currentSlideIndex = -1;
                }
            } else {
                this.slideRight();
                if (!this.checkHome()) {
                    this.duration = this._durationCopy;
                }
            }
        }, placeAt: function (_398) {
            dojo.place(this.domNode, _398);
        }, slideCount: function () {
            return this.slides.length;
        }, setDuration: function (_399) {
            this.duration = _399;
            this._durationCopy = _399;
        }, hideNavigationDots: function () {
            dojo.query(this.navNode).style("display", "none");
            dojo.query(this.navNode).orphan();
        }, addRibbonCloseBtn: function () {
            var _39a = "Close";
            if (ibmweb.dynnav.isDataLoaded && ibmweb.config.config == "www") {
                _39a = PMM.buttonData.close;
            }
            if (dojo.byId("ibm-com").className.indexOf("dijit_a11y") != -1) {
                dojo.create("div", {className: "ibm-mm-close", innerHTML: "<span tabindex='0' aria-label='" + _39a + "' role='button' title='" + _39a + "'>&#9650;</span>"}, this.ribbonContainer, "last");
            } else {
                dojo.create("div", {className: "ibm-mm-close", innerHTML: "<span tabindex='0' aria-label='" + _39a + "' role='button' title='" + _39a + "'></span>"}, this.ribbonContainer, "last");
            }
        }});
    dojo.declare("ibmweb.ribbonSlide", [dijit._Widget, dijit._Templated, dijit._Container], {pid: null, templateString: "<div class='ibm-columns' dojoAttachPoint='containerNode' role='option'></div>", postCreate: function () {
            if (this.pid && this.pid !== "") {
                this.containerNode.id = this.pid;
            }
        }});
    dojo.declare("ibmweb.ribbonItemAbstract", [dijit._Widget], {constructor: function (_39b) {
            if (!_39b.srcNodeRef) {
                return;
            }
            if (!dojo.attr(_39b.srcNodeRef, "role")) {
                dojo.attr(_39b.srcNodeRef, "role", "document");
            }
            _39b.srcNodeRef.tabIndex = 0;
            if (!_39b.enableKeypress || _39b.enableKeypress == false) {
                dojo.connect(_39b.srcNodeRef, "keypress", this, function (e) {
                    if (e.keyCode == dojo.keys.UP_ARROW || e.keyCode == dojo.keys.LEFT_ARROW || e.keyCode == dojo.keys.DOWN_ARROW || e.keyCode == dojo.keys.RIGHT_ARROW) {
                        e && dojo.stopEvent(e);
                    }
                });
            }
            this.srcNodeRef = dojo.clone(_39b.srcNodeRef);
        }});
    dojo.declare("ibmweb.ribbonItem", [dijit._Widget, dijit._Templated, dijit._Container], {columns: 3, templateString: "<div dojoAttachPoint='containerNode' role='option'></div>", attributeMap: {type: {node: "containerNode", type: "class"}, content: {node: "containerNode", type: "innerHTML"}}, postCreate: function () {
            switch (parseInt(this.columns)) {
                case 1:
                    this.attr("class", "ibm-col-1-1");
                    break;
                case 3:
                    this.attr("class", "ibm-col-6-2");
                    break;
                case 5:
                    this.attr("class", "ibm-col-5-1");
                    break;
                case 6:
                    this.attr("class", "ibm-col-6-1");
                    break;
                default:
                    this.attr("class", "ibm-col-6-2");
                    break;
                }
        }});
    ibmweb.ribbonLeadspace = {onWindowResize: function () {
            var temp = dojo.byId("ibm-leadspace-body");
            var _39c = null;
            if (temp) {
                var id = dojo.hasAttr(temp, "widgetid") ? dojo.attr(temp, "widgetid") : null;
                if (id) {
                    _39c = dijit.byId(id);
                } else {
                    return false;
                }
            }
            var _39d = dojo.window.getBox();
            dojo.query("#ibm-leadspace-head > div.ibm-container-body > div.ibm-ribbon-pane")[0].style.width = (_39d.w > 1030 ? _39d.w : 1030) + "px";
            dojo.query("#ibm-leadspace-head > div.ibm-container-body > div.ibm-ribbon-pane > div.ibm-ribbon-section > div").forEach(function (i) {
                var _39e = _39d.w + 30;
                if (_39e < 1030) {
                    _39e = 1030;
                }
                i.style.width = _39e + "px";
            });
            dojo.query("#ibm-leadspace-head > div.ibm-container-body > div.ibm-ribbon-pane > div.ibm-ribbon-section > div > div").forEach(function (i) {
                var _39f = (_39d.w + 30 - dojo.coords(i).w) / 2;
                if ((_39d.w + 30) < 1030) {
                    _39f = (1030 - dojo.coords(i).w) / 2;
                }
                dojo.style(i, "padding", "0 " + _39f + "px");
                i.style.height = "100%";
            });
            var _3a0 = dojo.query("#ibm-leadspace-head > div.ibm-container-body > div.ibm-ribbon-pane > div.ibm-ribbon-section")[0];
            if (!_3a0.style.left || _3a0.style.left == "0px") {
            } else {
                var dim = _39d.w;
                if (dim < 1000) {
                    dim = 1000;
                }
                _3a0.style.left = "-" + ((_39c.currentSlideIndex * dim) + (_39c.currentSlideIndex * 30)) + "px";
            }
            if (ibmweb.ribbonLeadspace._widget) {
                var pos = (_39d.w - 1050) / 2;
                if (ibmweb.meta.cpi == "ilhe") {
                    ibmweb.ribbonLeadspace._widget.scrollLeftButton.style.right = (pos < 1 ? 1 : pos) + "px";
                } else {
                    ibmweb.ribbonLeadspace._widget.scrollLeftButton.style.left = (pos < 1 ? 1 : pos) + "px";
                }
                if (dojo.isIE < 8) {
                    if (ibmweb.meta.cpi == "ilhe") {
                        ibmweb.ribbonLeadspace._widget.scrollRightButton.style.left = (pos < 1 ? 5 : pos) + "px";
                    } else {
                        ibmweb.ribbonLeadspace._widget.scrollRightButton.style.right = (pos < 1 ? 5 : pos) + "px";
                    }
                } else {
                    if (ibmweb.meta.cpi == "ilhe") {
                        ibmweb.ribbonLeadspace._widget.scrollRightButton.style.left = (pos < 1 ? (-1) * (_39d.w - 988) : pos) + "px";
                    } else {
                        ibmweb.ribbonLeadspace._widget.scrollRightButton.style.right = (pos < 1 ? (-1) * (_39d.w - 988) : pos) + "px";
                    }
                }
            }
        }, arrowsToggle: {generic: function (x) {
                var _3a1 = ibmweb.ribbonLeadspace._widget.scrollLeftButton;
                var _3a2 = ibmweb.ribbonLeadspace._widget.scrollRightButton;
                switch (x) {
                    case "show":
                        if (dojo.isIE < 7) {
                            _3a1.style.display = "block";
                            _3a2.style.display = "block";
                        } else {
                            dojo.forEach([_3a1, _3a2], function (item) {
                                dojo.style(item, {opacity: "0", display: "block"});
                                dojo.anim(item, {opacity: 1}, 300, null, function () {
                                    if (ibmweb.ribbonLeadspace.arrowsToggle._stat != "show") {
                                        ibmweb.ribbonLeadspace.arrowsToggle.generic("hide");
                                    }
                                });
                            });
                        }
                        break;
                    case "hide":
                        if (dojo.isIE < 7) {
                            _3a1.style.display = "none";
                            _3a2.style.display = "none";
                        } else {
                            dojo.forEach([_3a1, _3a2], function (item) {
                                dojo.anim(item, {opacity: 0}, 250, null, function () {
                                    item.style.display = "none";
                                    if (ibmweb.ribbonLeadspace.arrowsToggle._stat != "hide") {
                                        ibmweb.ribbonLeadspace.arrowsToggle.generic("show");
                                    }
                                });
                            });
                        }
                        break;
                    }
            }, show: function () {
                this.ribbonLeadspace.arrowsToggle._stat = "show";
                this.ribbonLeadspace.arrowsToggle.generic("show");
            }, hide: function () {
                this.ribbonLeadspace.arrowsToggle._stat = "hide";
                this.ribbonLeadspace.arrowsToggle.generic("hide");
            }}, init: function () {
            var _3a3 = new ibmweb.ribbon({srcNodeRef: dojo.query("#ibm-leadspace-head.ibm-ribbon > div#ibm-leadspace-body.ibm-container-body")[0], _isLeadSpace: true, customSeekAnimation: function (_3a4, _3a5, _3a6) {
                    if (_3a6 && this._isLeadNoHome) {
                        _3a5 = 0;
                        this.currentSlideIndex = -1;
                    }
                    switch (this.currentSlideIndex) {
                        case 1:
                            var _3a7 = dojo.query("#ibm-lead-2 div.ibm-col-1-1")[0];
                            break;
                        case 2:
                            var _3a7 = dojo.query("#ibm-lead-3 div.ibm-col-1-1")[0];
                            break;
                        default:
                            var _3a7 = dojo.query("#ibm-lead-1 div.ibm-col-1-1")[0];
                    }
                    var _3a8 = {left: {start: 0, end: -2000, unit: "px"}}, _3a9 = {left: {start: -1000, end: 0, unit: "px"}};
                    if (ibmweb.meta.cpi == "ilhe") {
                        _3a8.right = _3a8.left;
                        _3a8.left = undefined;
                        _3a9.right = _3a9.left;
                        _3a9.left = undefined;
                    }
                    var _3aa = dojo.fx.chain([dojo.animateProperty({node: _3a7, properties: _3a8, duration: 950, easing: function (n) {
                                return -1 * (Math.sqrt(1 - Math.pow(n, 2)) - 1);
                            }}), dojo.animateProperty({node: _3a7, properties: _3a9, duration: 200})]), _3ab = {left: {start: (ibmweb.meta.cpi == "ilhe" ? (this.scrollableNode.style.right || 0) : (this.scrollableNode.style.left || 0)), end: _3a4 * _3a5 * -1, nit: "px"}};
                    if (ibmweb.meta.cpi == "ilhe") {
                        _3ab.right = _3ab.left;
                        _3ab.left = undefined;
                    }
                    var _3ac = dojo.animateProperty({node: this.scrollableNode, properties: _3ab, duration: 2100, easing: function (n) {
                            if (n == 0) {
                                return 0;
                            }
                            if (n == 1) {
                                return 1;
                            }
                            n = n * 2;
                            if (n < 1) {
                                return Math.pow(2, 10 * (n - 1)) / 2;
                            }
                            --n;
                            return (-1 * Math.pow(2, -10 * n) + 2) / 2;
                        }}), _3ad = dojo.fx.combine([_3aa, _3ac]);
                    if (ibmweb.meta.cpi == "ilhe" && dojo.isIE < 9) {
                        dojo.style(this.scrollableNode, {right: _3a4 * _3a5 * -1});
                        this._isBeingAnimated = false;
                    } else {
                        _3ad.play();
                    }
                    dojo.connect(_3ad, "onEnd", dojo.hitch(this, function () {
                        this._isBeingAnimated = false;
                        this._isBegingAutoscroll = false;
                        if (_3a6 && this._isLeadNoHome) {
                            this.currentSlideIndex = 0;
                        }
                    }));
                }});
            this._widget = _3a3;
            if (dojo.isIE < 8) {
                dojo.place(ibmweb.ribbonLeadspace._widget.scrollRightButton, ibmweb.ribbonLeadspace._widget.scrollLeftButton, "after");
                dojo.style(ibmweb.ribbonLeadspace._widget.scrollRightButton, {marginTop: "140px", zIndex: "1"});
            }
            dojo.connect(_3a3, "onMouseEnter", ibmweb, ibmweb.ribbonLeadspace.arrowsToggle.show);
            dojo.connect(_3a3, "onMouseLeave", ibmweb, ibmweb.ribbonLeadspace.arrowsToggle.hide);
            if (_3a3.slides.length > 1) {
                _3a3.startup();
                dojo.query("#ibm-leadspace-body div.ibm-ribbon-nav a").forEach(function (i, e) {
                    var pos = e + 1;
                    dojo.connect(i, "onclick", function () {
                        ibmweb.util.statsHelper({"ibmEV": "track", "ibmEvAction": "ibmlink", "ibmEvLinktitle": "ls" + pos, "ibmEvSection": "ls" + pos});
                        return true;
                    });
                    dojo.connect(i, "onmouseenter", function (e) {
                        e.stopPropagation();
                        ibmweb.util.statsHelper({"ibmEV": "track", "ibmEvAction": "ibmhover", "ibmEvLinktitle": "ls" + pos, "ibmEvSection": "ls" + pos});
                        return false;
                    });
                });
            }
            dojo.query("#ibm-lead-2, #ibm-lead-3").forEach(function (item) {
                item.style.display = "block";
            });
            if (_3a3.slides.length > 1) {
                dojo.query("#ibm-leadspace-head .ibm-ribbon-nav a").forEach(function (item, i) {
                    var j = i + 1;
                    var temp = dojo.query("#ibm-lead-" + j + " div.ibm-ribbon-view");
                    if (temp.length == 1) {
                        dojo.place(temp[0], item);
                        var _3ae = dojo.query("div.ibm-pagination-overlay", item)[0];
                        dojo.connect(_3ae, "onclick", function (e) {
                            _3a3.slideTo(i, e);
                        });
                        dojo.connect(item, "onmouseenter", function (e) {
                            if (_3ae.style.display == "block") {
                                return false;
                            }
                            if (dojo.isIE < 7) {
                                dojo.style(_3ae, {display: "block"});
                            } else {
                                dojo.style(_3ae, {opacity: "0", display: "block"});
                                dojo.anim(_3ae, {opacity: 1}, 300);
                            }
                            var _3af = dojo.connect(item, "onmouseleave", function () {
                                if (dojo.isIE < 7) {
                                    _3ae.style.display = "none";
                                } else {
                                    dojo.anim(_3ae, {opacity: 0}, 200, null, function () {
                                        _3ae.style.display = "none";
                                    });
                                }
                                dojo.disconnect(_3af);
                            });
                        });
                    }
                });
            } else {
                dojo.query(_3a3.navNode).orphan();
            }
            if (dojo.isIE < 8) {
                dojo.byId("ibm-leadspace-body").style.position = "static";
            }
            dojo.connect(window, "resize", ibmweb.ribbonLeadspace.onWindowResize);
            ibmweb.ribbonLeadspace.onWindowResize();
            var _3b0 = dojo.query("#ibm-leadspace-head div.ibm-ribbon-nav a");
            dojo.connect(dojo.query("#ibm-leadspace-head div.ibm-ribbon-pane")[0], "onkeypress", dojo.hitch(this, function (evt) {
                if (evt.keyCode == dojo.keys.TAB && !evt.shiftKey) {
                    if (_3b0.length > 0) {
                        dojo.query("#ibm-leadspace-head div.ibm-ribbon-nav a:first-child")[0].focus();
                    } else {
                        dojo.byId("ibm-promotion-module").focus();
                    }
                    dojo.stopEvent(evt);
                }
            }));
            if (dojo.isIE < 7) {
                dojo.query("#ibm-leadspace-body div.ibm-columns img:first-child").forEach(function (item) {
                    var _3b1 = item.width;
                    var _3b2 = item.height;
                    var src = item.src;
                    dojo.query(item).wrap("<span style=\"width:" + _3b1 + "px;height:" + _3b2 + "px;display:inline-block; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "');\"></span>");
                    item.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=0)";
                });
            }
        }};
}
if (!dojo._hasResource["ibmweb.dynnav.megamenu"]) {
    dojo._hasResource["ibmweb.dynnav.megamenu"] = true;
    dojo.provide("ibmweb.dynnav.megamenu");
    dojo.declare("ibmweb.dynnav.megamenu", ibmweb.dynnav._module, {_currentMenu: null, _mouseover: false, _slideUpTimer: null, _slideUpDuration: 600, _keepexpanded: false, _mouseleaveHandlerEnabled: true, _expandTimer: null, _slideToTimer: null, _delayedExpandTimer: null, _isExpanded: true, _itemtitle: null, _lock: false, _beingAnimated: false, _doubleClickLock: null, _waitBeforeAssignPage: null, _unicaTagsW3MenuNames: [], _unicaTagsWWWMenuNames: [], _hasFocus: [], _isMinimizingOnMouseLeaveSemaphore: false, _newDataSource: {use: true, hidden: true, isBeingAnimated: false, isSubBeingAnimated: false, hasDynTitle: false, subTabs: [], subTabsContent: [], subTabsActItem: [], subTabsActItem_idx: [], subTabsHover: [], subTabMenu: null, curSubMenu: null}, _w3SwapDesign: {secondSwitchEnabled: false, waitOnExist: null, waitOnMouseOver: null, stopClickForMoment: null, leavingItem: null, mouseOverOpenMethod: false, mouseOnMenuButton: false, currentLink: -1, profileLinks: null, newSso: null, portalLogOutLink: null, profileCustomLinks: null}, _dimensions: {basicUniversalHeight: 50, basicMarginTop: 74}, init: function () {
            if (dojo.isIE) {
                dojo.query(".lotusui30 .lotusBanner").style({position: "static"});
            }
            if (ibmweb.config.config == "w3") {
                this._dimensions.basicMarginTop = 90;
                this._w3SwapDesign.secondSwitchEnabled = !dojo.hasClass(dojo.query("#ibm-masthead")[0], "ibm-w3-masthead");
            }
            if (dojo.indexOf(ibmweb.config.megamenu.disabledLocales, ibmweb.meta.cpi) != -1) {
                ibmweb.config.megamenu.linksonly = true;
            }
            if (ibmweb.config.config == "w3") {
                if (this._w3SwapDesign.secondSwitchEnabled) {
                    dojo.query("#ibm-masthead").addClass("ibm-w3-masthead");
                } else {
                    if (!dojo.byId("ibm-profile-links")) {
                        this._w3SwapDesign.profileLinks = dojo.create("div", {id: "ibm-profile-links"}, "ibm-universal-nav", "last");
                    } else {
                        this._w3SwapDesign.profileLinks = dojo.query("[id=\"ibm-profile-links\"]")[0];
                    }
                    if (!dojo.byId("ibm-sso")) {
                        this._w3SwapDesign.newSso = dojo.create("div", {id: "ibm-sso", role: ""}, this._w3SwapDesign.profileLinks, "last");
                        dijit.setWaiRole(this._w3SwapDesign.newSso, "presentation");
                        if (dojo.query("#ibm-portal-logout-link").length == 1 || dojo.query("#ibm-profile-custom-links").length == 1) {
                            dojo.addClass(this._w3SwapDesign.newSso, "ibm-profile-links-divider");
                        }
                    } else {
                        this._w3SwapDesign.newSso = dojo.query("#ibm-sso")[0];
                    }
                }
            }
            if (ibmweb.config.megamenu.disableUniversalNav) {
                this._dimensions.basicMarginTop = 42;
                this._dimensions.basicUniversalHeight = 0;
                dojo.query("#ibm-site-title").style("display", "none");
                dojo.query("#ibm-universal-nav").style("height", "0px");
                dojo.query("#ibm-top").style("marginTop", "42px");
            }
            return ibmweb.dynnav.isServiceEnabled("megamenu") && !ibmweb.config.appmast.enabled;
        }, onLoad: function () {
            if (!dojo.byId("ibm-common-menu")) {
                var _3b3 = ibmweb.config.config == "www" ? "ibm-universal-nav" : "ibm-mast-options";
                dojo.create("div", {id: "ibm-common-menu"}, dojo.byId(_3b3), "after");
            }
            dojo.style("ibm-common-menu", "display", "none");
            if (ibmweb.config.config == "www") {
                var _3b4 = dojo.query("#ibm-unav-links");
            }
            if (ibmweb.config.config == "www" && ibmweb.config.megamenu.icons != "none") {
                if (ibmweb.config.megamenu.icons == "arrow") {
                    if (!dojo.byId("ibm-arrow-logo")) {
                        var _3b5 = dojo.create("span", {id: "ibm-arrow-logo", className: "ibm-masthead-indicator"});
                        dojo.create("img", {src: ibmweb.config.imageUrl + "t/v17_min_mast_anim_que.gif"}, _3b5);
                        dojo.place(_3b5, dojo.query("#ibm-universal-nav")[0], "first");
                    }
                } else {
                    if (!dojo.byId("ibm-search-logo")) {
                        var _3b6 = dojo.create("li", {id: "ibm-search-logo", className: "ibm-masthead-indicator"});
                        if (ibmweb.config.megamenu.icons == "text") {
                            _3b6.innerHTML = "Search";
                            dojo.addClass(_3b6, "ibm-text");
                        }
                        dojo.place(_3b6, _3b4[0], "last");
                    }
                    if (!dojo.byId("ibm-links-logo")) {
                        var _3b7 = dojo.create("li", {id: "ibm-links-logo", className: "ibm-masthead-indicator"});
                        if (ibmweb.config.megamenu.icons == "text") {
                            _3b7.innerHTML = "Links";
                            dojo.addClass(_3b7, "ibm-text");
                        }
                        dojo.place(_3b7, _3b4[0], "last");
                    }
                }
                dojo.query(".ibm-masthead-indicator").addClass("ibm-access");
            }
            if (ibmweb.config.config == "www" && dojo.query("li", _3b4[0]).length == 1) {
                if (!dojo.hasAttr(_3b4, "role")) {
                    dojo.attr(_3b4[0], "role", "");
                    dijit.setWaiRole(_3b4[0], "presentation");
                }
            }
            if (ibmweb.config.config == "w3" && ibmweb.config.megamenu.icons != "none") {
                if (ibmweb.config.megamenu.icons == "arrow") {
                    if (!dojo.byId("ibm-arrow-logo")) {
                        var _3b5 = dojo.create("span", {id: "ibm-arrow-logo", className: "ibm-masthead-indicator"});
                        dojo.create("img", {src: ibmweb.config.imageUrl + "t/w3_min_menu_open_icon.png"}, _3b5);
                        dojo.place(_3b5, dojo.query("#ibm-universal-nav")[0], "first");
                    }
                }
            }
            if (!ibmweb.config.megamenu.noScroll) {
                dojo.connect(window, "onscroll", this, "onVScrollCallback");
                dojo.connect(window, "onresize", this, "onVScrollCallback");
            } else {
                dojo.addClass("ibm-top", "ibm-no-scroll");
            }
            dojo.connect(window, "onscroll", this, "onHScrollCallback");
            dojo.connect(window, "onresize", this, function (_3b8) {
                dojo.stopEvent(_3b8);
                if (!window.pageXOffset && window.pageXOffset != 0) {
                    dojo.style(dojo.byId("ibm-masthead"), "left", "-" + document.documentElement.scrollLeft + "px");
                } else {
                    dojo.style(dojo.byId("ibm-masthead"), "left", "-" + window.pageXOffset + "px");
                }
            });
            dojo.connect(window, "blur", this, function (_3b9) {
                this.meta = this.shift = this.ctrl = this.cmmd = this.alt = false;
                dojo.publish("/ibm/dynnav/slideUp");
            });
            if (ibmweb.config.config == "w3" && ibmweb.config.megamenu.expandOnClick) {
                dojo.connect(dojo.byId("ibm-masthead"), "onclick", this, "onMouseEnter");
            } else {
                if (ibmweb.config.config == "w3" && ibmweb.config.megamenu.delay > 0) {
                    dojo.connect(dojo.byId("ibm-masthead"), "onmouseenter", this, function (_3ba) {
                        this._delayedExpandTimer = setTimeout(dojo.hitch(this, function () {
                            this.onMouseEnter(_3ba);
                        }), ibmweb.config.megamenu.delay);
                    });
                } else {
                    dojo.connect(dojo.byId("ibm-masthead"), "onmouseenter", this, "onMouseEnter");
                }
            }
            dojo.connect(dojo.byId("ibm-masthead"), "onmouseleave", this, "onMouseLeave");
            dojo.subscribe("/ibm/dynnav/slideUp", this, "_slideUp");
            dojo.subscribe("/ibm/dynnav/megamenu/slideUp", this, "_slideUp");
            dojo.subscribe("/ibm/dynnav/megamenu/slideDown", this, "_slideDown");
            dojo.subscribe("/ibm/dynnav/megamenu/expandMenu", this, "_expandMenu");
            if (ibmweb.config.megamenu.minimizeByDefault) {
                this._minimizeMenu(1);
            }
            dojo.publish("/ibmweb/dynnav/megamenu/finished");
        }, onData: function (data) {
            var ul = dojo.byId("ibm-menu-links");
            dojo.empty(ul);
            dijit.setWaiRole("ibm-menu-links", "toolbar");
            var _3bb = new ibmweb.ribbon();
            dijit.setWaiRole(_3bb.scrollableNode, "region");
            dijit.setWaiState(_3bb.scrollableNode, "label", data.accessibilityData.sitemap || "Site map");
            dojo.forEach(data.menuData, dojo.hitch(this, function (item, i) {
                var li = dojo.create("li", {}, ul);
                dijit.setWaiRole(li, "presentation");
                if (ibmweb.config.megamenu.minimizeByDefault) {
                    dojo.addClass(li, "ibm-access");
                }
                var a = dojo.create("a", {href: item.url || "#", role: "", tabIndex: (ibmweb.info.OperaVersion != 11.11) ? "-1" : "0", innerHTML: item.title.htmlspecialchars()}, li);
                dijit.setWaiRole(a, "button");
                if (ibmweb.config.megamenu.linksonly) {
                    return;
                }
                this._itemtitle = item.title.htmlspecialchars();
                if (ibmweb.config.config == "www") {
                    this._unicaTagsWWWMenuNames.push(item.title.htmlspecialchars());
                }
                if (ibmweb.config.config == "w3") {
                    this._unicaTagsW3MenuNames.push(item.title.htmlspecialchars());
                }
                if (item.child) {
                    var div = this._buildMegaMenu(item.child, i);
                    _3bb.addItem(new ibmweb.ribbonItemAbstract({srcNodeRef: div, enableKeypress: true}), i);
                    dijit.setWaiRole(div.parentNode, "dialog");
                    dijit.setWaiState(div.parentNode, "labelledby", "ibm-rib-head-" + i);
                    dojo.create("h2", {className: "ibm-access", id: "ibm-rib-head-" + i, innerHTML: item.title.htmlspecialchars()}, div.parentNode, "first");
                    childAnk = dojo.query("a", _3bb.navNode);
                    if (childAnk.length > 0 && i < childAnk.length) {
                        dojo.attr(childAnk[i], "title", item.title.htmlspecialchars());
                        childAnk[i].innerHTML = item.title.htmlspecialchars();
                    }
                    dojo.connect(a, "onblur", this, function (_3bc) {
                        dojo.stopEvent(_3bc);
                        dojo.query("#ibm-menu-links li.ibm-inactive").removeClass("ibm-inactive");
                        return false;
                    });
                    dojo.connect(a, "onfocus", this, function (_3bd) {
                        dojo.stopEvent(_3bd);
                        if (ibmweb.config.config === "www" && this._currentMenu != null) {
                            dojo.removeClass(dojo.query("#ibm-menu-links a")[this._currentMenu], "ibm-active");
                        }
                        if (dojo.byId("ibm-menu-links").className == "ibm-access") {
                            dojo.publish("/ibm/dynnav/megamenu/expandMenu");
                        }
                        var _3be = (ibmweb.config.config == "w3") ? dojo.query("#ibm-menu-links a[tabindex $='2']") : dojo.query("#ibm-menu-links a[tabindex $='0']");
                        _3be.forEach(function (i) {
                            i.tabIndex = "-1";
                        });
                        if (this._currentMenu != null) {
                            _3bb.setDuration(_3bb.defaultDuration);
                            this._currentMenu = i;
                            dojo.query("a", _3bb.scrollableNode).attr("tabIndex", "-1");
                            _3bb.slideTo(i);
                            _3bd.target.parentNode.className = "ibm-active";
                            dojo.addClass(_3bd.target, "ibm-active");
                            var _3bf = dojo.query("> div", _3bb.scrollableNode), temp = dojo.query("a", _3bf[i]);
                            if (temp.length > 0) {
                                temp.attr("tabIndex", (ibmweb.config.config == "w3") ? "2" : "0");
                            }
                        } else {
                            dojo.query("#ibm-menu-links li.ibm-inactive").removeClass("ibm-inactive");
                            _3bd.target.parentNode.className = "ibm-inactive";
                        }
                        a.tabIndex = (ibmweb.config.config == "w3") ? 2 : 0;
                        return false;
                    });
                    dojo.connect(a, "onkeypress", this, function (_3c0) {
                        if (_3c0.shiftKey && _3c0.charOrCode == dojo.keys.TAB) {
                            this._slideUp();
                        } else {
                            if (_3c0.keyCode == dojo.keys.TAB) {
                                if (this._currentMenu != null) {
                                    dojo.stopEvent(_3c0);
                                    var _3c1 = dojo.query("> div", _3bb.scrollableNode), temp = dojo.query("a", _3c1[i]);
                                    if (temp.length > 0) {
                                        temp[0].focus();
                                    }
                                    _3c0.target.className = "ibm-active";
                                } else {
                                    this._slideUp();
                                }
                            }
                        }
                        if (_3c0.keyCode == dojo.keys.LEFT_ARROW || _3c0.keyCode == dojo.keys.UP_ARROW) {
                            a.tabIndex = -1;
                            var prev = _3c0.target.parentNode.previousSibling;
                            if (prev) {
                                dojo.stopEvent(_3c0);
                                prev.firstChild.focus();
                            } else {
                                prev = _3c0.target.parentNode.parentNode.lastChild;
                                if (prev) {
                                    dojo.stopEvent(_3c0);
                                    prev.firstChild.focus();
                                }
                            }
                        }
                        if (_3c0.keyCode == dojo.keys.RIGHT_ARROW || (_3c0.keyCode == dojo.keys.DOWN_ARROW && this._currentMenu == null)) {
                            a.tabIndex = -1;
                            var next = _3c0.target.parentNode.nextSibling;
                            if (next) {
                                dojo.stopEvent(_3c0);
                                next.firstChild.focus();
                            } else {
                                next = _3c0.target.parentNode.parentNode.firstChild;
                                if (next) {
                                    dojo.stopEvent(_3c0);
                                    next.firstChild.focus();
                                }
                            }
                        }
                        if (this._isExpanded && (_3c0.keyCode == dojo.keys.ENTER || (_3c0.keyCode == dojo.keys.SPACE || _3c0.charOrCode == " "))) {
                            dojo.stopEvent(_3c0);
                            if (this._currentMenu == null) {
                                ibmweb.util.statsHelper({"ibmEV": ibmweb.config.config + " Megamenu", "ibmEvAction": "Expand menu", "ibmEvName": ((ibmweb.config.config === "w3") ? this._unicaTagsW3MenuNames[i] : this._unicaTagsWWWMenuNames[i]), "ibmEvSection": "Initial"});
                                _3bb.setDuration(1);
                                dojo.publish("/ibm/dynnav/slideUp");
                                dojo.publish("/ibm/dynnav/signin/slideUp", [_3c0]);
                                dojo.publish("/ibm/dynnav/megamenu/slideDown", [i]);
                                _3bb.slideTo(i);
                                if (typeof this._newDataSource.subTabs[i] !== "undefined") {
                                    dojo.query(this._newDataSource.subTabs[i][this._newDataSource.subTabsActItem_idx[i]]).children("a")[0].focus();
                                } else {
                                    var _3c1 = dojo.query("> div", _3bb.scrollableNode), temp = dojo.query("a", _3c1[i]);
                                    if (temp.length > 0) {
                                        temp.attr("tabIndex", "0");
                                        this._slideToTimer = setTimeout(dojo.hitch(this, function () {
                                            temp[0].focus();
                                        }), _3bb.defaultDuration + 60);
                                    }
                                }
                            } else {
                                ibmweb.util.statsHelper({"ibmEV": ibmweb.config.config + " Megamenu", "ibmEvAction": "Expand menu", "ibmEvName": ((ibmweb.config.config === "w3") ? this._unicaTagsW3MenuNames[i] : this._unicaTagsWWWMenuNames[i]), "ibmEvSection": "Secondary"});
                                _3bb.setDuration(_3bb.defaultDuration);
                                this._slideUp();
                            }
                        }
                        if (_3c0.keyCode == dojo.keys.DOWN_ARROW && this._currentMenu != null) {
                            dojo.stopEvent(_3c0);
                            var _3c1 = dojo.query("> div", _3bb.scrollableNode), temp = dojo.query("a", _3c1[i]);
                            if (temp.length > 0) {
                                temp[0].focus();
                            }
                            _3c0.target.className = "ibm-active";
                        }
                        if (_3c0.keyCode == dojo.keys.ESCAPE) {
                            if (this._currentMenu != null) {
                                dojo.stopEvent(_3c0);
                                this._slideUp();
                            } else {
                                var _3c2 = dojo.query("#q");
                                if (_3c2.length > 0) {
                                    _3c2[0].focus();
                                }
                            }
                        }
                        return false;
                    });
                    dojo.connect(a, "ondblclick", this, function (_3c3) {
                        dojo.stopEvent(_3c3);
                        if (!!this._doubleClickLock) {
                            clearTimeout(this._doubleClickLock);
                            this._doubleClickLock = null;
                        }
                        location.href = _3c3.target.href;
                    });
                    dojo.connect(a, "onclick", this, function (_3c4) {
                        dojo.stopEvent(_3c4);
                        if (!!this._doubleClickLock) {
                            return;
                        }
                        this._doubleClickLock = setTimeout(dojo.hitch(this, function () {
                            this._doubleClickLock = null;
                            if (ibmweb.config.config === "w3" && this._w3SwapDesign.mouseOverOpenMethod == true) {
                                return false;
                            }
                            _3c4.target.focus();
                            if (this._currentMenu == null) {
                                ibmweb.util.statsHelper({"ibmEV": ((ibmweb.config.config === "www") ? "www" : "w3") + " Megamenu", "ibmEvAction": "Expand menu", "ibmEvName": (ibmweb.config.config === "www") ? this._unicaTagsWWWMenuNames[i] : this._unicaTagsW3MenuNames[i], "ibmEvSection": "Initial"});
                                dojo.addClass(_3c4.target.parentNode, "ibm-active");
                                dojo.addClass(_3c4.target, "ibm-active");
                                _3bb.setDuration(1);
                                dojo.publish("/ibm/dynnav/slideUp");
                                dojo.publish("/ibm/dynnav/signin/slideUp", [_3c4]);
                                dojo.publish("/ibm/dynnav/megamenu/slideDown", [i]);
                                _3bb.slideTo(i);
                                this._hasFocus[i] == false;
                                if (typeof this._newDataSource.subTabs[i] !== "undefined") {
                                    dojo.query(this._newDataSource.subTabs[i][this._newDataSource.subTabsActItem_idx[i]]).children("a")[0].focus();
                                } else {
                                    var _3c5 = dojo.query("> div", _3bb.scrollableNode), temp = dojo.query("a", _3c5[i]);
                                    if (temp.length > 0) {
                                        temp.attr("tabIndex", "0");
                                        if (ibmweb.config.config === "www") {
                                            this._slideToTimer = setTimeout(dojo.hitch(this, function () {
                                                temp[0].focus();
                                            }), _3bb.defaultDuration + 60);
                                        }
                                    }
                                }
                            } else {
                                ibmweb.util.statsHelper({"ibmEV": ((ibmweb.config.config === "www") ? "www" : "w3") + " Megamenu", "ibmEvAction": "Expand menu", "ibmEvName": (ibmweb.config.config === "www") ? this._unicaTagsWWWMenuNames[i] : this._unicaTagsW3MenuNames[i], "ibmEvSection": "Secondary"});
                                dojo.query("#ibm-menu-links a.ibm-active").removeClass("ibm-active");
                                dojo.query("#ibm-menu-links li.ibm-active").removeClass("ibm-active");
                                dojo.addClass(_3c4.target.parentNode, "ibm-active");
                                dojo.addClass(_3c4.target, "ibm-active");
                                if (this._currentMenu == i && this._hasFocus[i] == true) {
                                    this._slideUp();
                                } else {
                                    if (this._newDataSource.use) {
                                        var id = this._newDataSource.curSubMenu;
                                        if (typeof this._newDataSource.subTabs[id] !== "undefined") {
                                            dojo.forEach(this._newDataSource.subTabs[id], dojo.hitch(this, function (_3c6, _3c7) {
                                                if (_3c7 === this._newDataSource.subTabsActItem_idx[id]) {
                                                    dojo.removeClass(_3c6, "ibm-active");
                                                }
                                                dojo.style(_3c6, "display", "none");
                                            }));
                                        }
                                        id = i;
                                        this._newDataSource.curSubMenu = i;
                                        if (typeof this._newDataSource.subTabs[id] !== "undefined") {
                                            dojo.forEach(this._newDataSource.subTabs[id], dojo.hitch(this, function (_3c8, _3c9) {
                                                dojo.style(_3c8, "display", "block");
                                                if (_3c9 === this._newDataSource.subTabsActItem_idx[id]) {
                                                    dojo.addClass(_3c8, "ibm-active");
                                                }
                                            }));
                                        }
                                    }
                                    _3bb.slideTo(i);
                                }
                            }
                            for (var j = 0; j < this._hasFocus.length; j++) {
                                this._hasFocus[j] = false;
                            }
                            this._hasFocus[i] = true;
                            return false;
                        }), 250);
                    });
                }
            }));
            _3bb.placeAt("ibm-common-menu");
            this._createSubTabs();
            _3bb.hideNavigationDots();
            _3bb.addRibbonCloseBtn();
            _3bb.startup();
            dojo.connect(_3bb.scrollableNode, "onkeypress", this, function (_3ca) {
                if (_3ca.keyCode == dojo.keys.ESCAPE) {
                    dojo.stopEvent(_3ca);
                    var k = this._newDataSource.curSubMenu;
                    if (k !== null) {
                        var l = this._newDataSource.subTabsActItem_idx[k];
                        dojo.query("a", this._newDataSource.subTabs[k][l])[0].focus();
                    } else {
                        dojo.publish("/ibm/dynnav/megamenu/slideUp");
                    }
                }
                if ((!_3ca.shiftKey && _3ca.keyCode == dojo.keys.TAB) || (_3ca.shiftKey && _3ca.keyCode == dojo.keys.TAB)) {
                    dojo.stopEvent(_3ca);
                    var _3cb, _3cc = false, _3cd = false;
                    (_3ca.target.parentNode.nodeName == "H3") ? _3cb = _3ca.target.parentNode.parentNode : _3cb = _3ca.target.parentNode.parentNode.parentNode;
                    if (dojo.hasClass(_3cb, "ibm-col-last")) {
                        _3cc = true;
                    }
                    if (dojo.hasClass(_3cb, "ibm-menu-static")) {
                        _3cd = true;
                    }
                    if (!_3ca.shiftKey && _3ca.keyCode == dojo.keys.TAB) {
                        if (_3cc) {
                            dojo.query("a", dojo.query(_3cb.parentNode).siblings(".ibm-menu-static")[0])[0].focus();
                        } else {
                            (_3cb.nextSibling && dojo.query("a", _3cb.nextSibling)[0]) ? dojo.query("a", _3cb.nextSibling)[0].focus() : dojo.query("div#ibm-common-menu span")[0].focus();
                        }
                    }
                    if (_3ca.shiftKey && _3ca.keyCode == dojo.keys.TAB) {
                        if (_3cd) {
                            var k = this._newDataSource.curSubMenu, l = this._newDataSource.subTabsActItem_idx[k];
                            dojo.query(".ibm-col-last a", this._newDataSource.subTabsContent[k][l])[0].focus();
                        } else {
                            (_3cb.previousSibling && dojo.query("a", _3cb.previousSibling)[0]) ? dojo.query("a", _3cb.previousSibling)[0].focus() : dojo.query("div#ibm-common-menu span")[0].focus();
                        }
                    }
                }
                if (_3ca.keyCode == dojo.keys.UP_ARROW || _3ca.keyCode == dojo.keys.LEFT_ARROW) {
                    var _3ce = dojo.query("> div", _3bb.scrollableNode), _3cf = dojo.query("a", _3ce[this._currentMenu])[0], curr = dojo.query("a.ibm-active", _3ce[this._currentMenu])[0];
                    if (!!curr) {
                        dojo.stopEvent(_3ca);
                        var prev = curr.parentNode.previousSibling;
                        if (prev == null) {
                            if (curr.parentNode.parentNode.nodeName == "UL") {
                                prev = curr.parentNode.parentNode.previousSibling;
                            }
                        }
                        if (prev != null && prev.firstChild != null && prev.firstChild.nodeName == "A") {
                            prev.firstChild.focus();
                        }
                    }
                }
                if (_3ca.keyCode == dojo.keys.DOWN_ARROW || _3ca.keyCode == dojo.keys.RIGHT_ARROW) {
                    var _3ce = dojo.query("> div", _3bb.scrollableNode), curr = dojo.query("a.ibm-active", _3ce[this._currentMenu])[0];
                    if (!!curr) {
                        dojo.stopEvent(_3ca);
                        var next = curr.parentNode.nextSibling;
                        if (next) {
                            if (next.nodeName == "UL") {
                                next = next.firstChild;
                            }
                            if (next && next.firstChild && next.firstChild.nodeName == "A") {
                                next.firstChild.focus();
                            }
                        }
                    }
                }
            });
            var span = dojo.query("div#ibm-common-menu div.ibm-mm-close span")[0];
            if (span) {
                dojo.connect(span, "onclick", this, function (_3d0) {
                    ibmweb.util.statsHelper({"ibmEV": ibmweb.config.config + " Megamenu", "ibmEvAction": "Arrow", "ibmEvName": "Close"});
                    dojo.publish("/ibm/dynnav/megamenu/slideUp");
                });
                dojo.connect(span, "onkeypress", this, function (_3d1) {
                    if (_3d1.keyCode == dojo.keys.ESCAPE || _3d1.keyCode == dojo.keys.ENTER || _3d1.keyCode == dojo.keys.SPACE || _3d1.charOrCode == " ") {
                        dojo.stopEvent(_3d1);
                        ibmweb.util.statsHelper({"ibmEV": ibmweb.config.config + " Megamenu", "ibmEvAction": "Arrow", "ibmEvName": "Close"});
                        dojo.publish("/ibm/dynnav/megamenu/slideUp");
                    }
                    if (_3d1.keyCode == dojo.keys.TAB) {
                        var _3d2 = dojo.query("> div", _3bb.scrollableNode), _3d3 = dojo.query("a", _3d2[this._currentMenu]);
                        if (!_3d1.shiftKey) {
                            dojo.stopEvent(_3d1);
                            _3d3[0].focus();
                        }
                        if (_3d1.shiftKey) {
                            dojo.stopEvent(_3d1);
                            var _3d4;
                            if (_3d3[_3d3.length - 1].parentNode.nodeName == "H3") {
                                _3d4 = _3d3[_3d3.length - 1].parentNode.parentNode;
                            } else {
                                _3d4 = _3d3[_3d3.length - 1].parentNode.parentNode.parentNode;
                            }
                            dojo.query("a", _3d4)[0].focus();
                        }
                    }
                    if (_3d1.keyCode == dojo.keys.UP_ARROW || _3d1.keyCode == dojo.keys.RIGHT_ARROW || _3d1.keyCode == dojo.keys.DOWN_ARROW || _3d1.keyCode == dojo.keys.LEFT_ARROW) {
                        dojo.stopEvent(_3d1);
                    }
                });
            }
            var a = dojo.query("#ibm-menu-links a");
            if (a.length > 0) {
                dojo.attr(a[0], "tabindex", (ibmweb.config.config == "w3") ? "2" : "0");
            }
            if (ibmweb.config.config == "w3") {
                dojo.attr(dojo.query("#ibm-home a")[0], "tabindex", "1");
                var _3d5 = dojo.query("#ibm-sso"), _3d6 = _3d5.next("li[role=presentation]");
                dojo.forEach(_3d5.children("a"), function (_3d7) {
                    dojo.attr(_3d7, "tabindex", "3");
                });
                dojo.forEach(_3d6.children("a"), function (_3d8) {
                    dojo.attr(_3d8, "tabindex", "3");
                });
                if (this._w3SwapDesign.secondSwitchEnabled) {
                    if (!ibmweb.config.megamenu.disableUniversalNav) {
                        this._w3SwapDesign.profileLinks = dojo.create("div", {id: "ibm-profile-links"}, "ibm-universal-nav", "last");
                        if (_3d5.length > 0) {
                            this._w3SwapDesign.newSso = dojo.create("div", {id: "ibm-sso", className: "ibm-profile-links-divider", role: "", innerHTML: _3d5[0].innerHTML}, this._w3SwapDesign.profileLinks, "last");
                            dijit.setWaiRole(this._w3SwapDesign.newSso, "presentation");
                        }
                        if (_3d6.length > 0) {
                            this._w3SwapDesign.portalLogOutLink = dojo.create("div", {id: "ibm-portal-logout-link", className: "ibm-profile-links-divider ibm-profile-links-divider--transparent", role: "", innerHTML: _3d6[0].innerHTML}, this._w3SwapDesign.profileLinks, "last");
                            dijit.setWaiRole(this._w3SwapDesign.portalLogOutLink, "presentation");
                        }
                        this._w3SwapDesign.profileCustomLinks = dojo.create("div", {className: "ibm-profile-custom-links"}, this._w3SwapDesign.profileLinks, "last");
                    }
                    if (_3d5.length > 0) {
                        dojo.destroy(_3d5[0]);
                    }
                    if (_3d6.length > 0) {
                        dojo.destroy(_3d6[0]);
                    }
                    var _3d9 = dojo.query("#ibm-mast-options ul");
                    dojo.forEach(_3d9, dojo.hitch(this, function (_3da) {
                        if (dojo.query(_3da).children().length == 0) {
                            dojo.destroy(_3da);
                            return;
                        }
                        dojo.forEach(dojo.query("li:not([id=ibm-home])", _3da), dojo.hitch(this, function (_3db) {
                            if (!ibmweb.config.megamenu.disableUniversalNav) {
                                dojo.place(dojo.query("a", _3db)[0], this._w3SwapDesign.profileCustomLinks, "last");
                            }
                            dojo.destroy(_3db);
                        }));
                    }));
                } else {
                    this._w3SwapDesign.profileLinks = dojo.query("#ibm-profile-links");
                    this._w3SwapDesign.profileCustomLinks = dojo.query("#ibm-profile-links .ibm-profile-custom-links");
                }
            }
        }, _subTabs: {_title: [], _div: [], _id: []}, _createSubTabs: function () {
            var con, _3dc, _3dd, _3de;
            if (this._subTabs._title.length == 0) {
                return;
            }
            var _3df = dojo.query("#ibm-common-menu > div"), _3e0 = null, jump = dojo.hitch(this, function (e, _3e1) {
                var li = _3e1.parentNode, _3e2 = parseInt(/(?:subTab\-\d+\-)(\d+)/g.exec(dojo.attr(li, "className"))[1]), _3e3 = null, _3e4 = null;
                this._newDataSource.subTabsHover[this._newDataSource.curSubMenu][_3e2] = true;
                setTimeout(dojo.hitch(this, function () {
                    if ((!this._newDataSource.subTabsHover[this._newDataSource.curSubMenu][_3e2]) || (dojo.hasClass(li, "ibm-active") || this._newDataSource.isSubBeingAnimated)) {
                        return false;
                    }
                    this._newDataSource.isSubBeingAnimated = true;
                    this._newDataSource.subTabsActItem[this._newDataSource.curSubMenu] = e.target.textContent;
                    this._newDataSource.subTabsActItem_idx[this._newDataSource.curSubMenu] = _3e2;
                    ibmweb.util.statsHelper({"ibmEV": ibmweb.config.config + " Megamenu", "ibmEvAction": "Mouse over", "ibmEvName": ((ibmweb.config.config === "www") ? this._unicaTagsWWWMenuNames[this._currentMenu] : this._unicaTagsW3MenuNames[this._currentMenu]) + " - " + this._newDataSource.subTabsActItem[this._newDataSource.curSubMenu], "ibmEvSection": "Subcategory Change"});
                    dojo.query("li.ibm-active", _3dc).removeClass("ibm-active");
                    dojo.addClass(li, "ibm-active");
                    dojo.forEach(this._newDataSource.subTabs[this._newDataSource.curSubMenu], dojo.hitch(this, function (_3e5, i) {
                        var _3e6 = dojo.query("a", _3e5)[0], _3e7 = this._newDataSource.subTabsContent[this._newDataSource.curSubMenu][i], disp = dojo.style(_3e7, "display");
                        if (disp == "none" && i == _3e2) {
                            _3e4 = _3e7;
                        }
                        if (disp == "block" && i != _3e2) {
                            _3e3 = _3e7;
                        }
                    }));
                    dojo.animateProperty({node: _3e3, properties: {opacity: {start: 1, end: 0}}, duration: 180, onEnd: dojo.hitch(this, function () {
                            dojo.style(_3e3, "display", "none");
                            dojo.style(_3e4, {opacity: 1, display: "block"});
                            this._newDataSource.isSubBeingAnimated = false;
                        })}).play();
                }), 200);
            });
            if (_3df.length == 1 && _3df[0].id) {
                _3e0 = _3df[0].id;
            } else {
                return false;
            }
            con = dojo.query(this._subTabs._div[0]).closest(".ibm-container-body");
            if (dojo.query(".ibm-menu-subtabs", con[0]).length == 0) {
                _3dc = dojo.create("div", {className: "ibm-menu-subtabs ibm-is-hidden"}, con[0], "first");
                _3dd = dojo.create("ul", {role: ""}, _3dc);
                dijit.setWaiRole(_3dd, "toolbar");
                dojo.attr(_3dd, "aria-label", "subtab menu list");
            }
            this._newDataSource.subTabMenu = _3dc;
            dojo.forEach(this._subTabs._title, dojo.hitch(this, function (_3e8, t) {
                if (typeof _3e8 === "undefined") {
                    return;
                }
                var _3e9 = dojo.query("#ibmweb_ribbonSlide_" + this._subTabs._div[t].id.split("ibmweb_ribbonItemAbstract_")[1]);
                if (typeof this._newDataSource.subTabs[t] === "undefined") {
                    this._newDataSource.subTabs[t] = new Array();
                    this._newDataSource.subTabsContent[t] = new Array();
                    this._newDataSource.subTabsHover[t] = new Array();
                    dojo.forEach(_3e8, dojo.hitch(this, function (_3ea, x) {
                        var _3eb = dojo.create("li", {className: "subTab-" + t + "-" + x, role: ""}, _3dd);
                        dijit.setWaiRole(_3eb, "presentation");
                        if (x == 0) {
                            if (t == 0) {
                                dojo.addClass(_3eb, "ibm-active");
                            }
                            this._newDataSource.subTabsActItem[t] = _3ea;
                            this._newDataSource.subTabsActItem_idx[t] = 0;
                        }
                        var link = dojo.create("a", {href: "#", innerHTML: _3ea, role: ""}, _3eb);
                        dijit.setWaiRole(link, "button");
                        dojo.style(_3eb, "display", "none");
                        this._newDataSource.subTabs[t][x] = _3eb;
                        this._newDataSource.subTabsContent[t][x] = dojo.query(".ibm-menu-dynamic", _3e9[0])[x];
                        this._newDataSource.subTabsHover[t][x] = false;
                        dojo.connect(link, "onfocus", this, function (_3ec) {
                            dojo.stopEvent(_3ec);
                            jump(_3ec, link);
                        });
                        dojo.connect(link, "onclick", function (_3ed) {
                            dojo.stopEvent(_3ed);
                        });
                        dojo.connect(link, "onmouseover", function (_3ee) {
                            dojo.stopEvent(_3ee);
                            link.focus();
                        });
                        dojo.connect(link, "onmouseout", this, function (_3ef) {
                            dojo.stopEvent(_3ef);
                            this._newDataSource.subTabsHover[t][x] = false;
                        });
                        dojo.connect(link, "onkeypress", this, function (_3f0) {
                            if (_3f0.keyCode == dojo.keys.ESCAPE) {
                                dojo.stopEvent(_3f0);
                                dojo.publish("/ibm/dynnav/megamenu/slideUp");
                            }
                            if (_3f0.keyCode == dojo.keys.LEFT_ARROW || _3f0.keyCode == dojo.keys.UP_ARROW) {
                                var prev = _3f0.target.parentNode.previousSibling;
                                if (dojo.indexOf(this._newDataSource.subTabs[t], prev) >= 0) {
                                    dojo.stopEvent(_3f0);
                                    prev.firstChild.focus();
                                } else {
                                    dojo.stopEvent(_3f0);
                                    var last = this._newDataSource.subTabs[t].length - 1;
                                    dojo.query(this._newDataSource.subTabs[t][last]).children("a")[0].focus();
                                }
                            }
                            if (_3f0.keyCode == dojo.keys.RIGHT_ARROW || _3f0.keyCode == dojo.keys.DOWN_ARROW) {
                                var next = _3f0.target.parentNode.nextSibling;
                                if (dojo.indexOf(this._newDataSource.subTabs[t], next) >= 0) {
                                    dojo.stopEvent(_3f0);
                                    next.firstChild.focus();
                                } else {
                                    dojo.stopEvent(_3f0);
                                    dojo.query(this._newDataSource.subTabs[t][0]).children("a")[0].focus();
                                }
                            }
                            if (_3f0.keyCode == dojo.keys.ENTER || (_3f0.keyCode == dojo.keys.SPACE || _3f0.charOrCode == " ")) {
                                dojo.stopEvent(_3f0);
                                var _3f1 = dojo.query(this._newDataSource.subTabsContent[t][x]).children()[0], ul = dojo.query(_3f1).children()[1], li = dojo.query(ul).children()[0], a = dojo.query(li).children()[0];
                                a.focus();
                            }
                        });
                    }));
                }
            }));
            dojo.forEach(dojo.query(".ibm-menu-dynamic a", con[0]), dojo.hitch(this, function (link) {
                dojo.connect(link, "onclick", dojo.hitch(this, function (_3f2) {
                    dojo.stopEvent(_3f2);
                    ibmweb.util.statsHelper({"ibmEV": ibmweb.config.config + " Megamenu", "ibmEvAction": _3f2.target.href, "ibmEvName": ((ibmweb.config.config === "www") ? this._unicaTagsWWWMenuNames[this._currentMenu] : this._unicaTagsW3MenuNames[this._currentMenu]) + " - " + this._newDataSource.subTabsActItem[this._newDataSource.curSubMenu], "ibmEvSection": "Link Clicks"});
                    this._waitBeforeAssignPage = setTimeout(dojo.hitch(this, function () {
                        clearTimeout(this._waitBeforeAssignPage);
                        location.assign(_3f2.target.href);
                    }), 800);
                }));
                dojo.connect(link, "onfocus", function (_3f3) {
                    _3f3.target.className = "ibm-active";
                });
                dojo.connect(link, "onblur", function (_3f4) {
                    _3f4.target.className = "";
                });
                dojo.connect(link, "onkeypress", dojo.hitch(this, function (_3f5) {
                    if (_3f5.keyCode == dojo.keys.ENTER) {
                        dojo.stopEvent(_3f5);
                        ibmweb.util.statsHelper({"ibmEV": ibmweb.config.config + " Megamenu", "ibmEvAction": _3f5.target.href, "ibmEvName": ((ibmweb.config.config === "www") ? this._unicaTagsWWWMenuNames[this._currentMenu] : this._unicaTagsW3MenuNames[this._currentMenu]) + " - " + this._newDataSource.subTabsActItem[this._newDataSource.curSubMenu], "ibmEvSection": "Link Clicks"});
                        this._waitBeforeAssignPage = setTimeout(dojo.hitch(this, function () {
                            clearTimeout(this._waitBeforeAssignPage);
                            location.assign(_3f5.target.href);
                        }), 800);
                    }
                }));
            }));
            dojo.forEach(dojo.query(".ibm-menu-static a", con[0]), dojo.hitch(this, function (link) {
                dojo.connect(link, "onfocus", function (_3f6) {
                    _3f6.target.className = "ibm-active";
                });
                dojo.connect(link, "onblur", function (_3f7) {
                    _3f7.target.className = "";
                });
                dojo.connect(link, "onclick", dojo.hitch(this, function (_3f8) {
                    dojo.stopEvent(_3f8);
                    ibmweb.util.statsHelper({"ibmEV": ibmweb.config.config + " Megamenu", "ibmEvAction": _3f8.target.href, "ibmEvName": ((ibmweb.config.config === "www") ? this._unicaTagsWWWMenuNames[this._currentMenu] : this._unicaTagsW3MenuNames[this._currentMenu]) + " - persistentColumn", "ibmEvSection": "Link Clicks"});
                    this._waitBeforeAssignPage = setTimeout(dojo.hitch(this, function () {
                        clearTimeout(this._waitBeforeAssignPage);
                        location.assign(_3f8.target.href);
                    }), 800);
                }));
                dojo.connect(link, "onkeypress", dojo.hitch(this, function (_3f9) {
                    if (_3f9.keyCode == dojo.keys.ENTER) {
                        dojo.stopEvent(_3f9);
                        ibmweb.util.statsHelper({"ibmEV": ibmweb.config.config + " Megamenu", "ibmEvAction": _3f9.target.href, "ibmEvName": ((ibmweb.config.config === "www") ? this._unicaTagsWWWMenuNames[this._currentMenu] : this._unicaTagsW3MenuNames[this._currentMenu]) + " - persistentColumn", "ibmEvSection": "Link Clicks"});
                        this._waitBeforeAssignPage = setTimeout(dojo.hitch(this, function () {
                            clearTimeout(this._waitBeforeAssignPage);
                            location.assign(_3f9.target.href);
                        }), 800);
                    }
                    if (!_3f9.shiftKey && _3f9.keyCode == dojo.keys.TAB) {
                        dojo.stopEvent(_3f9);
                    }
                }));
            }));
            dojo.connect(dijit.byId(_3e0), "slideTo", dojo.hitch(this, function (i) {
                if (typeof this._newDataSource.subTabs[i] !== "undefined") {
                    if (this._newDataSource.hidden) {
                        if (this._newDataSource.isBeingAnimated) {
                            return false;
                        }
                        this._newDataSource.isBeingAnimated = true;
                        dojo.animateProperty({node: _3dc, properties: {opacity: {start: 0, end: 1}, marginTop: {start: -39, end: 0}, marginBottom: {start: 20, end: 0}}, duration: 600, onBegin: function () {
                                dojo.query("#ibm-masthead .ibm-mm-close")[0].style.marginTop = "0px";
                            }, onEnd: dojo.hitch(this, function () {
                                this._newDataSource.hidden = false;
                                this._newDataSource.isBeingAnimated = false;
                                dojo.query("#ibm-masthead .ibm-mm-close")[0].style.marginTop = "-65px";
                            })}).play();
                    }
                } else {
                    if (!this._newDataSource.hidden) {
                        if (this._newDataSource.isBeingAnimated) {
                            return false;
                        }
                        this._newDataSource.isBeingAnimated = true;
                        dojo.animateProperty({node: _3dc, properties: {opacity: {start: 1, end: 0}, marginTop: {start: 0, end: -39}, marginBottom: {start: 0, end: 20}}, duration: 600, onBegin: function () {
                                dojo.query("#ibm-masthead .ibm-mm-close")[0].style.marginTop = "0px";
                            }, onEnd: dojo.hitch(this, function () {
                                this._newDataSource.hidden = true;
                                this._newDataSource.isBeingAnimated = false;
                                dojo.query("#ibm-masthead .ibm-mm-close")[0].style.marginTop = "-45px";
                            })}).play();
                    }
                }
            }));
        }, _buildMegaMenu: function (data, _3fa) {
            var id = ibmweb.util.generateId(), div = dojo.create("div", {className: "ibm-columns", id: id});
            this._subTabs._div[_3fa] = div;
            this._subTabs._id[_3fa] = id;
            if (this._newDataSource.use && data.length > 1) {
                dijit.setWaiRole(div, "group");
                dojo.attr(div, "aria-labelledby", "ibm-rib-head-" + _3fa);
                var _3fb = [], _3fc = 4, con, _3fd, _3fe, _3ff = dojo.create("div"), _400;
                dojo.forEach(data, dojo.hitch(this, function (_401, dIdx) {
                    this._newDataSource.hasDynTitle = false;
                    var dif = 1;
                    if (dojo.filter(_401.child, function (item) {
                        return item.persistentColumn;
                    }).length == 1) {
                        if (dIdx > 6) {
                            return;
                        }
                        dif = 2;
                    } else {
                        if (dIdx > 5) {
                            return;
                        }
                    }
                    if (typeof this._subTabs._title[_3fa] == "undefined") {
                        this._subTabs._title[_3fa] = new Array();
                    }
                    this._subTabs._title[_3fa][dIdx] = _401.title.htmlspecialchars();
                    var _402 = -1, _403 = dojo.create("div", {className: "ibm-col-5-4 ibm-menu-dynamic"}, _3ff);
                    if (dIdx > 0) {
                        dojo.style(_403, "display", "none");
                    }
                    dojo.forEach(_401.child, dojo.hitch(this, function (_404, x) {
                        if (_404.persistentColumn && _404.persistentColumn == "yes") {
                            _400 = dojo.create("div", {className: "ibm-col-5-1 ibm-menu-static"});
                            var _405 = dojo.create("h3", {innerHTML: _404.title.htmlspecialchars(), id: "ibm-menu-related-links-title"}, _400), _406 = dojo.create("ul", {role: "", "aria-labelledby": "ibm-menu-related-links-title"}, _400);
                            dijit.setWaiRole(_406, "menu");
                            dojo.forEach(_404.child, function (_407) {
                                var tLi = dojo.create("li", {role: ""}, _406), tA = dojo.create("a", {href: _407.url, tabindex: -1, role: "", innerHTML: _407.title.htmlspecialchars()}, tLi);
                                dijit.setWaiRole(tLi, "presentation");
                                dijit.setWaiRole(tA, "menuitem");
                            });
                        } else {
                            _402++;
                            if (_402 >= _3fc) {
                                dojo.addClass(dojo.query(".ibm-col-4-1:last-child", _403)[0], "ibm-col-last");
                                return;
                            }
                            var _408 = (x + dif == _401.child.length) ? " ibm-col-last" : "", _409 = dojo.create("div", {className: "ibm-col-4-1" + _408, role: ""}, _403), h3 = dojo.create("h3", null, _409), _40a = dojo.create("ul", {role: "menu"}, _409);
                            dijit.setWaiRole(_409, "menu");
                            dojo.attr(_409, "aria-label", "menu list");
                            dojo.attr(_40a, "aria-label", "menu list");
                            if (_404.title == "" || _404.title == " " || _404.title.length == 0) {
                                dojo.destroy(h3);
                                dojo.style(_40a, "marginTop", "26px");
                            } else {
                                if (!this._newDataSource.hasDynTitle) {
                                    this._newDataSource.hasDynTitle = true;
                                }
                                if (_404.url && _404.url.length > 0 && _404.url != " ") {
                                    dojo.create("a", {tabIndex: "-1", href: _404.url, innerHTML: _404.title.htmlspecialchars()}, h3);
                                    dojo.attr(h3, "role", "");
                                    dijit.setWaiRole(h3, "menuitem");
                                } else {
                                    dojo.attr(h3, "innerHTML", _404.title.htmlspecialchars());
                                }
                            }
                            dojo.forEach(_404.child, function (_40b, cIdx) {
                                var _40c = dojo.create("li", {role: ""}, _40a), _40d = dojo.create("a", {href: _40b.url, tabIndex: "-1", role: "", innerHTML: _40b.title.htmlspecialchars()}, _40c);
                                dijit.setWaiRole(_40c, "presentation");
                                dijit.setWaiRole(_40d, "menuitem");
                            });
                        }
                    }));
                    if (!this._newDataSource.hasDynTitle) {
                        dojo.style(_403, "paddingTop", "0px");
                    }
                }));
                if (typeof _400 !== "undefined") {
                    dojo.place(_400, _3ff);
                }
                div.innerHTML = _3ff.innerHTML;
            }
            if (!this._newDataSource.use || (this._newDataSource.use && data.length == 1)) {
                dijit.setWaiRole(div, "group");
                dojo.attr(div, "aria-labelledby", "ibm-rib-head-" + _3fa);
                var _40e = null, _40f = dojo.hitch(this, function (_410) {
                    var col = dojo.create("div", {className: "ibm-col-6-1"}, div);
                    dijit.setWaiRole(col, "menu");
                    dojo.attr(col, "aria-label", "menu list");
                    if (_410.title && _410.title.length > 0 && _410.title != " ") {
                        _40e = _410.title.htmlspecialchars();
                        co = 1;
                    }
                    if (_40e == null) {
                        _40e = this._itemtitle;
                    }
                    if (_410.url) {
                        var h3 = dojo.create("h3", {}, col), a = dojo.create("a", {innerHTML: _410.title.htmlspecialchars(), href: _410.url, tabIndex: "-1"}, h3);
                        dijit.setWaiRole(h3, "menuitem");
                        dojo.connect(a, "onfocus", this, function (_411) {
                            _411.target.className = "ibm-active";
                        });
                        dojo.connect(a, "onblur", this, function (_412) {
                            _412.target.className = "";
                        });
                        dijit.setWaiState(col, "label", _410.title.htmlspecialchars() + " menu");
                    } else {
                        if (_410.title == " ") {
                            co++;
                            dojo.create("h3", {innerHTML: _40e + " menu list " + co, className: "ibm-access"}, col);
                            dijit.setWaiState(col, "label", _40e + " menu list " + co);
                        } else {
                            dojo.create("h3", {innerHTML: _410.title.htmlspecialchars()}, col);
                            dijit.setWaiState(col, "label", _40e + " menu");
                        }
                    }
                    var ul;
                    if (_410.title == " ") {
                        ul = dojo.create("ul", _410.extraClass ? {"className": "ibm-" + _410.extraClass, style: {marginTop: ((ibmweb.config.config == "www") ? 26 : 19) + "px"}} : {style: {marginTop: ((ibmweb.config.config == "www") ? 26 : 19) + "px"}}, col);
                    } else {
                        ul = dojo.create("ul", _410.extraClass ? {"className": "ibm-" + _410.extraClass} : null, col);
                    }
                    dijit.setWaiRole(ul, "menu");
                    dojo.attr(ul, "aria-label", _40e + " menu list");
                    var _413 = (_410.child.length > ibmweb.config.megamenu.maxRows) ? ibmweb.config.megamenu.maxRows : _410.child.length;
                    for (var k = 0; k < _413; k++) {
                        var _414 = _410.child[k];
                        if (_414.url != null && _414.url != "" && _414.title.htmlspecialchars().replace(/^\s+|\s+$/g, "") != "") {
                            var li = dojo.create("li", {}, ul);
                            dijit.setWaiRole(li, "presentation");
                            var a = dojo.create("a", {innerHTML: _414.title.htmlspecialchars(), href: _414.url, tabIndex: "-1"}, li);
                            dijit.setWaiRole(a, "menuitem");
                            dojo.connect(a, "onclick", dojo.hitch(this, function (_415) {
                                dojo.stopEvent(_415);
                                ibmweb.util.statsHelper({"ibmEV": ibmweb.config.config + " Megamenu", "ibmEvAction": _415.target.href, "ibmEvName": ((ibmweb.config.config === "w3") ? this._unicaTagsW3MenuNames[this._currentMenu] : this._unicaTagsWWWMenuNames[this._currentMenu]), "ibmEvSection": "Link Clicks"});
                                this._waitBeforeAssignPage = setTimeout(dojo.hitch(this, function () {
                                    clearTimeout(this._waitBeforeAssignPage);
                                    location.assign(_415.target.href);
                                }), 800);
                            }));
                            dojo.connect(a, "onkeypress", dojo.hitch(this, function (_416) {
                                if (_416.keyCode == dojo.keys.ENTER) {
                                    dojo.stopEvent(_416);
                                    ibmweb.util.statsHelper({"ibmEV": ibmweb.config.config + " Megamenu", "ibmEvAction": _416.target.href, "ibmEvName": ((ibmweb.config.config === "w3") ? this._unicaTagsW3MenuNames[this._currentMenu] : this._unicaTagsWWWMenuNames[this._currentMenu]), "ibmEvSection": "Link Clicks"});
                                    this._waitBeforeAssignPage = setTimeout(dojo.hitch(this, function () {
                                        clearTimeout(this._waitBeforeAssignPage);
                                        location.assign(_416.target.href);
                                    }), 800);
                                }
                            }));
                            dojo.connect(a, "onfocus", this, function (_417) {
                                _417.target.className = "ibm-active";
                            });
                            dojo.connect(a, "onblur", this, function (_418) {
                                _418.target.className = "";
                            });
                        }
                    }
                }), max = (data.length > ibmweb.config.megamenu.maxColumns) ? ibmweb.config.megamenu.maxColumns : data.length;
                for (var co, i = 0; i < max; i++) {
                    if (this._newDataSource.use) {
                        var _419 = data[i].child;
                        dojo.style(div, "paddingTop", "10px");
                        dojo.forEach(_419, dojo.hitch(this, function (cd) {
                            _40f(cd);
                        }));
                    } else {
                        _40f(data[i]);
                    }
                }
            }
            return div;
        }, _slideDown: function (id) {
            if (!id && arguments[0]) {
                id = arguments[0];
            }
            if (this._animationInProgress) {
                return false;
            }
            this._animationInProgress = true;
            if (this._newDataSource.use && this._newDataSource.subTabMenu !== null) {
                if (typeof this._newDataSource.subTabs[id] === "undefined") {
                    dojo.style(this._newDataSource.subTabMenu, {marginBottom: "20px", marginTop: "-39px", opacity: 0});
                    this._newDataSource.hidden = true;
                } else {
                    dojo.addClass(this._newDataSource.subTabs[id][this._newDataSource.subTabsActItem_idx[id]], "ibm-active");
                }
            }
            dojo.query("#ibm-common-menu").style({display: "block", height: "1px", overflow: "hidden"});
            dojo.anim("ibm-common-menu", {height: 292}, 200);
            if (!ibmweb.config.megamenu.noScroll) {
                if (true) {
                    if ((ibmweb.info.isIE && ibmweb.info.ieVersion <= 6) || ibmweb.info.iDevice) {
                    } else {
                        dojo.anim("ibm-top", {marginTop: 292 + this._dimensions.basicMarginTop}, 200);
                    }
                }
            }
            dojo.animateProperty({node: dojo.query("#ibm-common-menu .ibm-ribbon-pane")[0], duration: 200, properties: {height: {start: "1", end: "292"}}, onBefore: function () {
                    if (this._newDataSource.use) {
                        dojo.query("#ibm-masthead .ibm-mm-close")[0].style.marginTop = "0px";
                    }
                }, onEnd: dojo.hitch(this, function () {
                    this._animationInProgress = false;
                    dojo.query("div#ibm-common-menu .ibm-ribbon-section a").attr("tabIndex", "-1");
                    var temp = dojo.query("div#ibm-common-menu .ibm-ribbon-section > div");
                    if (temp.length > 0) {
                        temp = dojo.query("a", temp[id]);
                    }
                    if (temp.length != 0) {
                        temp.attr("tabIndex", "0");
                    }
                    if (this._newDataSource.use) {
                        dojo.query("#ibm-masthead .ibm-mm-close")[0].style.marginTop = (typeof this._newDataSource.subTabs[id] === "undefined") ? "-45px" : "-65px";
                    }
                })}).play();
            dojo.query("#ibm-menu-links a")[id].className = "ibm-active";
            dojo.query("#ibm-menu-links li")[id].className = "ibm-active";
            dojo.query("#ibm-menu-links li.ibm-inactive").removeClass("ibm-inactive");
            this._currentMenu = id;
            if (this._newDataSource.use) {
                if (typeof this._newDataSource.subTabs[id] !== "undefined") {
                    this._newDataSource.curSubMenu = id;
                    dojo.forEach(this._newDataSource.subTabs[id], dojo.hitch(this, function (_41a) {
                        dojo.style(_41a, "display", "block");
                    }));
                }
            }
            if (!this._lock) {
                this._lock = true;
                dojo.query("#ibm-common-menu .ibm-col-6-1 ul").forEach(function (item) {
                    var h = dojo.coords(item, true).h;
                    if (item.parentNode.firstChild.className == "ibm-access") {
                        for (; h > 272; h = dojo.coords(item, true).h) {
                            dojo.destroy(item.lastChild);
                        }
                    } else {
                        for (; h > 242; h = dojo.coords(item, true).h) {
                            dojo.destroy(item.lastChild);
                        }
                    }
                });
            }
        }, _slideUp: function (evt, _41b) {
            if (this._currentMenu == null || this._animationInProgress) {
                return;
            }
            if (this._slideToTimer) {
                clearTimeout(this._slideToTimer);
                this._slideToTimer = null;
            }
            this._animationInProgress = true;
            var id = this._currentMenu;
            dojo.animateProperty({node: "ibm-common-menu", duration: 400, properties: {height: {start: "292", end: "1"}}, onEnd: dojo.hitch(this, function () {
                    dojo.query("#ibm-common-menu").style("display", "none");
                    if (this._newDataSource.use && this._newDataSource.subTabMenu !== null) {
                        dojo.style(this._newDataSource.subTabMenu, {marginBottom: "20px", marginTop: "-39px", opacity: 0});
                        this._newDataSource.hidden = true;
                    }
                    if (ibmweb.config.config === "w3") {
                        this._w3SwapDesign.currentLink = -1;
                    }
                    if (_41b) {
                        setTimeout(_41b, 1);
                    }
                })}).play();
            dojo.animateProperty({node: dojo.query("#ibm-common-menu .ibm-ribbon-pane")[0], duration: 400, properties: {height: {start: "292", end: "1"}}, onEnd: dojo.hitch(this, function () {
                    if (this._newDataSource.use) {
                        if (typeof this._newDataSource.subTabs[id] !== "undefined") {
                            dojo.forEach(this._newDataSource.subTabs[id], dojo.hitch(this, function (_41c) {
                                dojo.style(_41c, "display", "none");
                            }));
                        }
                        this._newDataSource.curSubMenu = null;
                    }
                    this._animationInProgress = false;
                    if (ibmweb.config.megamenu.minimizeByDefault) {
                        (evt && evt.target && evt.target.id === "ibm-masthead") ? this._minimizeMenu() : null;
                    }
                })}).play();
            dojo.query("#ibm-common-menu a").attr("tabIndex", "-1");
            this._currentMenu = null;
            var _41d = dojo.query("#ibm-menu-links a.ibm-active")[0];
            if (typeof _41d !== "undefined") {
                _41d.focus();
                _41d.parentNode.className = "ibm-inactive";
                dojo.removeClass(_41d, "ibm-active");
            }
            if (!((ibmweb.info.isIE && ibmweb.info.ieVersion <= 6) || ibmweb.info.iDevice)) {
                dojo.anim("ibm-top", {marginTop: (!ibmweb.config.megamenu.noScroll) ? (ibmweb.config.megamenu.minimizeByDefault && this._isMinimizingOnMouseLeaveSemaphore === true) ? 33 : this._dimensions.basicMarginTop : 0}, 370);
            }
        }, onVScrollCallback: function (_41e) {
            if (this._mouseover || this._keepexpanded || this._beingAnimated) {
                return;
            }
            var _41f = true, _420 = (this._isExpanded) ? this._dimensions.basicMarginTop : 36, _421 = (self.pageYOffset) ? self.pageYOffset : (document.documentElement && document.documentElement.scrollTop) ? document.documentElement.scrollTop : (document.body) ? document.body.scrollTop : 0;
            if ((this._isExpanded == false && _421 < _420) || (this._isExpanded == true && _421 <= _420 && _421 >= 0)) {
                _41f = false;
            }
            if (!ibmweb.config.megamenu.minimizeByDefault) {
                if (!window.pageYOffset && document.documentElement.scrollTop == 0 || (window.pageYOffset && window.pageYOffset == 0)) {
                    if (dojo.byId("ibm-menu-links").className == "ibm-access") {
                        this._expandMenu();
                    }
                } else {
                    if (dojo.byId("ibm-menu-links").className != "ibm-access" && _41f) {
                        this._minimizeMenu();
                    }
                }
            } else {
                this._minimizeMenu();
            }
        }, onHScrollCallback: function (_422) {
            dojo.stopEvent(_422);
            if (!window.pageXOffset && window.pageXOffset != 0) {
                dojo.style(dojo.byId("ibm-masthead"), "left", "-" + document.documentElement.scrollLeft + "px");
            } else {
                dojo.style(dojo.byId("ibm-masthead"), "left", "-" + window.pageXOffset + "px");
            }
        }, isTypeAheadResultDisplay: function () {
            var _423 = false;
            if (dojo.query(".typeahead-results").some(function (node) {
                return node.style.display != "none";
            })) {
                _423 = true;
            }
            return _423;
        }, isScopePopupDisplay: function () {
            var _424 = dojo.query("#ibm-scope-button_dropdown.dijitPopup");
            if (_424 && _424.length > 0 && _424[0].style.display != "none" && _424[0].style.visibility != "hidden") {
                return true;
            }
            return false;
        }, _minimizeMenu: function (_425) {
            if (this.isTypeAheadResultDisplay() || this.isScopePopupDisplay()) {
                return;
            }
            _425 = _425 || 150;
            this._slideUp();
            if ((ibmweb.info.isIE && ibmweb.info.ieVersion <= 6) || ibmweb.info.iDevice) {
                return false;
            }
            var _426 = (ibmweb.config.config == "www" ? 30 : 0), _427 = (ibmweb.config.config == "www" ? 4 : 31);
            if (dojo.byId("ibm-universal-nav").style.height != (_426 + "px")) {
                dojo.animateProperty({node: "ibm-universal-nav", properties: {height: _426}, beforeBegin: dojo.hitch(this, function () {
                        this._beingAnimated = true;
                    }), duration: _425}).play();
            }
            if (dojo.byId("ibm-mast-options").style.height != (_427 + "px")) {
                dojo.animateProperty({node: "ibm-mast-options", properties: {height: _427}, beforeBegin: dojo.hitch(this, function () {
                        if (ibmweb.config.config == "w3" && this._w3SwapDesign.profileLinks !== null) {
                            dojo.style(this._w3SwapDesign.profileLinks, "display", "none");
                        }
                    }), duration: _425}).play();
            }
            dojo.animateProperty({node: "ibm-top", properties: {marginTop: (!ibmweb.config.megamenu.noScroll) ? 33 : 0}, duration: _425, onEnd: dojo.hitch(this, function () {
                    if (ibmweb.config.megamenu.icons != "none") {
                        dojo.query(".ibm-masthead-indicator").style("display", "block").removeClass("ibm-access");
                    }
                    dojo.publish("/ibm/dynnav/megamenu/minimized");
                    this._beingAnimated = false;
                    this._isExpanded = false;
                })}).play();
            if (ibmweb.config.config == "www") {
                dojo.query("#ibm-mast-options li, #ibm-mast-options ul").addClass("ibm-access");
            }
            if (ibmweb.config.config == "w3") {
                dojo.query("#ibm-mast-options li").addClass("ibm-access");
                dojo.query("#ibm-menu-links li").addClass("ibm-access");
            }
            if (ibmweb.config.config == "www") {
                dojo.query("#ibm-menu-links, #ibm-search-module,#ibm-arrow-logo").addClass("ibm-access");
            }
            if (ibmweb.config.config == "w3") {
                if (this._w3SwapDesign.secondSwitchEnabled) {
                    dojo.query("#ibm-menu-links, #ibm-search-module,#ibm-arrow-logo").addClass("ibm-access");
                } else {
                    dojo.query("#ibm-menu-links,#ibm-arrow-logo").addClass("ibm-access");
                    dojo.style(dojo.byId("ibm-search-module"), "display", "none");
                }
            }
            dojo.style("ibm-home", "display", "block");
            if (ibmweb.config.config == "w3") {
                dojo.query("#ibm-home").removeClass("ibm-access");
            }
            dojo.addClass("ibm-home", "ibm-sm-logo");
        }, _expandMenu: function () {
            if ((ibmweb.info.isIE && ibmweb.info.ieVersion <= 6) || ibmweb.info.iDevice) {
                return false;
            }
            var _428 = (ibmweb.config.config == "www" ? 21 : 38);
            if (ibmweb.config.megamenu.icons != "none") {
                dojo.query(".ibm-masthead-indicator").style("display", "none").addClass("ibm-access");
            }
            dojo.animateProperty({node: "ibm-universal-nav", properties: {height: this._dimensions.basicUniversalHeight}, beforeBegin: dojo.hitch(this, function () {
                    this._beingAnimated = true;
                }), duration: 150}).play();
            dojo.animateProperty({node: "ibm-mast-options", properties: {height: _428}, duration: 150, onEnd: dojo.hitch(this, function () {
                    dojo.query("#ibm-mast-options li, #ibm-mast-options ul").removeClass("ibm-access");
                    dojo.query("#ibm-menu-links li").removeClass("ibm-access");
                    if (ibmweb.config.config == "www") {
                        dojo.query("#ibm-menu-links, #ibm-search-module").removeClass("ibm-access");
                    }
                    if (ibmweb.config.config == "w3") {
                        if (this._w3SwapDesign.secondSwitchEnabled) {
                            dojo.query("#ibm-menu-links,#ibm-search-module").removeClass("ibm-access");
                        } else {
                            dojo.query("#ibm-menu-links").removeClass("ibm-access");
                            dojo.style(dojo.byId("ibm-search-module"), "display", "block");
                        }
                        dojo.query("#ibm-menu-links li").removeClass("ibm-access");
                        if (this._w3SwapDesign.profileLinks !== null) {
                            dojo.style(this._w3SwapDesign.profileLinks, "display", "block");
                        }
                    }
                    dojo.removeClass("ibm-home", "ibm-sm-logo");
                    dojo.publish("/ibm/dynnav/megamenu/expanded");
                })}).play();
            dojo.animateProperty({node: "ibm-top", properties: {marginTop: (!ibmweb.config.megamenu.noScroll) ? this._dimensions.basicMarginTop : 0}, duration: 150, onEnd: dojo.hitch(this, function () {
                    this._beingAnimated = false;
                    this._isExpanded = true;
                })}).play();
        }, onMouseEnter: function (_429) {
            clearTimeout(this._slideUpTimer);
            this._expandTimer = setTimeout(dojo.hitch(this, function () {
                this._mouseleaveHandlerEnabled = true;
                this._mouseover = true;
                if (dojo.byId("ibm-menu-links").className == "ibm-access") {
                    this._expandMenu();
                }
            }), 350);
        }, onMouseLeave: function (_42a) {
            if (this._delayedExpandTimer) {
                clearTimeout(this._delayedExpandTimer);
            }
            if (this._expandTimer) {
                clearTimeout(this._expandTimer);
                this._expandTimer = null;
            }
            if (!this._mouseleaveHandlerEnabled) {
                return;
            }
            this._slideUpTimer = setTimeout(dojo.hitch(this, function () {
                if (this._currentMenu !== null) {
                    ibmweb.util.statsHelper({"ibmEV": ibmweb.config.config + " Megamenu", "ibmEvAction": "Mouse away", "ibmEvName": "Close"});
                }
                this._mouseover = false;
                this._isMinimizingOnMouseLeaveSemaphore = true;
                this._slideUp(_42a);
                this._isMinimizingOnMouseLeaveSemaphore = false;
                (!ibmweb.config.megamenu.noScroll) ? this.onVScrollCallback(_42a) : null;
            }), this._slideUpDuration);
        }, setKeepExpanded: function (_42b) {
            this._keepexpanded = !!_42b;
        }, onError: function () {
        }});
}
if (!dojo._hasResource["ibmweb.dynnav.app-megamenu"]) {
    dojo._hasResource["ibmweb.dynnav.app-megamenu"] = true;
    dojo.provide("ibmweb.dynnav.app-megamenu");
    dojo.declare("ibmweb.dynnav.app-megamenu", ibmweb.dynnav._module, {internal: {_status: false, _isAnimated: false, _i: 0, _leaveInterval: null, _firstClick: true, _actionInterval: null, _actionBuffer: null, _isMoving: false, _isMovingInterval: null}, init: function () {
            return ibmweb.config.appmast.enabled;
        }, onLoad: function () {
            var _42c = this;
            var _42d = dojo.query("div.ibm-menu-subtabs");
            var _42e = dojo.query("div.ibm-menu-subtabs a");
            var menu = dojo.byId("ibm-common-menu");
            var _42f = dojo.query("#ibm-common-menu div.ibm-mm-close span");
            var _430 = dojo.byId("ibm-masthead");
            var _431 = dojo.query("#ibm-common-menu div.ibm-container-body > div.ibm-columns");
            if (_42d.length == 1 && _431.length == _42e.length && menu && _42f.length == 1) {
                dojo.query("li:first-child", _42d[0]).addClass("ibm-active");
                var _432 = function (node, i, _433) {
                    if (_42c.internal._isAnimated) {
                        return false;
                    }
                    if (!_42c.internal._status) {
                        _42c.internal._status = true;
                        _42c.internal._isAnimated = true;
                        _42c.internal._i = i;
                        dojo.addClass(node.parentNode, "ibm-active");
                        dojo.addClass(_42d[0], "ibm-active");
                        dojo.style(menu, {display: "block"});
                        _431.forEach(function (_434, _435) {
                            dojo.style(_434, "display", _435 == i ? "block" : "none");
                        });
                        _436 = dojo.animateProperty({node: menu, duration: 600, properties: {height: {start: 1, end: 292}}, onEnd: function () {
                                _42c.internal._isAnimated = false;
                            }}).play();
                    } else {
                        if (dojo.hasClass(node.parentNode, "ibm-active")) {
                            if (!_433) {
                                dojo.publish("/ibm/app-megamenu/slideUp");
                            }
                            return false;
                        }
                        _42c.internal._isAnimated = true;
                        dojo.query("#ibm-masthead div.ibm-menu-subtabs li.ibm-active").removeClass("ibm-active");
                        dojo.addClass(node.parentNode, "ibm-active");
                        var _436 = dojo.animateProperty({node: _431[_42c.internal._i], duration: 400, properties: {opacity: {start: 1, end: 0}}, onEnd: function () {
                                dojo.style(_431[_42c.internal._i], {opacity: "1", display: "none"});
                                dojo.style(_431[i], {display: "block", opacity: "0"});
                                _436 = dojo.animateProperty({node: _431[i], duration: 300, properties: {opacity: {start: 0, end: 1}}, onEnd: function () {
                                        _42c.internal._i = i;
                                        _42c.internal._isAnimated = false;
                                        if (_42c.internal._actionBuffer instanceof Array && _42c.internal._actionBuffer[0] !== node) {
                                            _432(_42c.internal._actionBuffer[0], _42c.internal._actionBuffer[1], true);
                                            _42c.internal._actionBuffer = null;
                                        }
                                    }}).play();
                            }});
                        _436.play();
                    }
                };
                _42e.forEach(function (node, i) {
                    node.onclick = dojo.hitch(this, function (e) {
                        dojo.stopEvent(e);
                        _432(node, i, false);
                    });
                    node.onmouseenter = dojo.hitch(this, function (e) {
                        dojo.stopEvent(e);
                        if (_42c.internal._status) {
                            _42c.internal._actionBuffer = [node, i];
                            window.clearInterval(_42c.internal._actionInterval);
                            _42c.internal._actionInterval = setTimeout(function () {
                                if (!_42c.internal._isMoving && !_42c.internal._isAnimated) {
                                    _432(_42c.internal._actionBuffer[0], _42c.internal._actionBuffer[1], true);
                                    _42c.internal._actionBuffer = null;
                                }
                            }, 250);
                        } else {
                            if (_42c.internal._firstClick) {
                                if (i > 0) {
                                    dojo.query("li:first-child", _42d[0]).removeClass("ibm-active");
                                }
                                _42c.internal._firstClick = false;
                            }
                            dojo.addClass(node.parentNode, "ibm-active");
                        }
                    });
                    node.onmouseleave = dojo.hitch(this, function (e) {
                        dojo.stopEvent(e);
                        if (!_42c.internal._status) {
                            dojo.removeClass(node.parentNode, "ibm-active");
                        }
                    });
                });
                dojo.connect(dojo.doc.documentElement, "onmousemove", function (e) {
                    window.clearInterval(_42c.internal._isMovingInterval);
                    _42c.internal._isMoving = true;
                    _42c.internal._isMovingInterval = setTimeout(function () {
                        window.clearInterval(_42c.internal._isMovingInterval);
                        _42c.internal._isMoving = false;
                    }, 50);
                });
                dojo.connect(_42f[0], "onclick", function (e) {
                    dojo.stopEvent(e);
                    dojo.publish("/ibm/app-megamenu/slideUp");
                });
                dojo.subscribe("/ibm/app-megamenu/slideUp", function () {
                    _42c.internal._isAnimated = true;
                    animation = dojo.animateProperty({node: menu, duration: 600, properties: {height: {start: 292, end: 1}}, onEnd: function () {
                            _42c.internal._isAnimated = false;
                            dojo.query("#ibm-masthead div.ibm-menu-subtabs li.ibm-active").removeClass("ibm-active");
                            dojo.removeClass(_42d[0], "ibm-active");
                            _431.forEach(function (_437, _438) {
                                dojo.style(_437, "display", "none");
                            });
                            dojo.style(menu, "display", "none");
                            _42c.internal._status = false;
                        }}).play();
                });
                dojo.connect(_430, "onmouseleave", function (e) {
                    if (_42c.internal._status) {
                        _42c.internal._leaveInterval = setTimeout(function () {
                            dojo.publish("/ibm/app-megamenu/slideUp");
                        }, 800);
                    }
                });
                dojo.connect(_430, "onmouseenter", function (e) {
                    window.clearInterval(_42c.internal._leaveInterval);
                });
                this.applyAria();
            }
        }, onClick: function (e) {
        }, onData: function (data) {
            var temp = dojo.byId("ibm-home");
            if (temp) {
                var ul = dojo.create("ul", {className: "ibm-logo-subnav"}, temp);
                for (var i = 0, j = data.menuData.length; i < j; i += 1) {
                    dojo.create("li", {innerHTML: "<a href=\"" + data.menuData[i].url + "\">" + data.menuData[i].title + "</a>", className: i == 0 ? "ibm-first" : (i + 1 == j ? "ibm-last" : "")}, ul);
                }
                dojo.connect(ul, "onmouseenter", function (e) {
                    dojo.addClass(temp, "ibm-active");
                });
                dojo.connect(ul, "onmouseleave", function (e) {
                    dojo.removeClass(temp, "ibm-active");
                });
                dojo.connect(temp, "onmouseenter", function (e) {
                    dojo.addClass(temp, "ibm-active");
                });
                dojo.connect(temp, "onmouseleave", function (e) {
                    dojo.removeClass(temp, "ibm-active");
                });
            }
        }, applyAria: function () {
            var _439 = dojo.query("#ibm-common-menu div.ibm-mm-close span");
            dojo.attr(_439[0], {"tabindex": "0", "aria-label": "Close", "role": "button"});
        }, onError: function () {
        }});
}
if (!dojo._hasResource["ibmweb.dynnav.greeting"]) {
    dojo._hasResource["ibmweb.dynnav.greeting"] = true;
    dojo.provide("ibmweb.dynnav.greeting");
    dojo.declare("ibmweb.dynnav.greeting", [dijit._Widget, dijit._Templated, ibmweb.dynnav._module], {welcomeMessage: "", _signinWidget: null, _registerWidget: null, templateString: dojo.cache("ibmweb.dynnav", "templates/Greeting.html", "<span dojoAttachPoint=\"containerNode\">\n\t<p dojoAttachPoint=\"welcomeMessageNode\"></p>\n\t<span dojoAttachPoint=\"bNode\" style=\"display: none\"> <span class=\"ibm-greeting-hasp\">[</span> <span dojoAttachPoint=\"linksNode\"></span> <span class=\"ibm-greeting-hasp\">]</span> </span>\n</span>\n"), attributeMap: {welcomeMessage: {node: "welcomeMessageNode", type: "innerHTML"}, welcomeMessageId: {node: "welcomeMessageNode", type: "attribute", attribute: "id"}}, disabledCountries: [], registerLink: "#", userstate: 0, init: function () {
            if (ibmweb.meta.source != null) {
                if (ibmweb.dynnav.isServiceEnabled("greeting")) {
                    this._loadGreeting();
                }
                if (ibmweb.dynnav.isServiceEnabled("signin")) {
                    this._loadSSO();
                }
                return true;
            }
            return false;
        }, onLoad: function () {
            if (!dojo.byId("ibm-sso")) {
                dojo.create("li", {id: "ibm-sso"}, dojo.query("#ibm-mast-options ul li#ibm-geo")[0], "after");
            }
            this.placeAt("ibm-sso");
            this.startup();
        }, _loadGreeting: function () {
            ibmweb.dynnav.addBundleCallback(100, this, "showGreetingCallback");
        }, _loadSSO: function () {
            ibmweb.dynnav.addBundleCallback(109, this, "showSSOCallback");
        }, clear: function () {
            this._tempCount = null;
            dojo.style(this.bNode, "display", "none");
            dojo.empty(this.linksNode);
            dojo.empty(this.welcomeMessageNode);
        }, showGreetingCallback: function (_43a) {
            if (!_43a || _43a.results.result == "novalue") {
                return;
            }
            var _43b = _43a.results.message1;
            this.attr("welcomeMessage", _43b + " ");
            this.attr("welcomeMessageId", "ibm-welcome-msg");
            dojo.publish("/ibmweb/dynnav/greeting/welcome/finished", [_43b]);
        }, showSSOCallback: function (data) {
            if (!data) {
                return;
            }
            var _43c = data.results[0].fPathName;
            var _43d = data.results[0].regLinkName;
            var _43e = data.results[0].regLinkVal;
            _43e = _43e.replace(/\/profile\/&/, "/profile/" + ibmweb.meta.cc + "/&");
            ibmweb.dynnav.greeting.userstate = data.results[0].userstate;
            var _43f = ibmweb.dynnav.greeting.userstate;
            if (_43f != 4 && _43c) {
                var link = this.addLink({innerHTML: _43c, href: "#", tabIndex: -1, onclick: dojo.hitch(this, this._signinClicked), className: "ibm-sso-signin"});
                dijit.setWaiRole(link, "button");
                dijit.setWaiState(link, "label", _43c);
                dijit.setWaiState(link, "describedby", "ibm-welcome-msg");
                dojo.connect(link, "onkeypress", dojo.hitch(this, function (_440) {
                    if (_440.keyCode == dojo.keys.ENTER || _440.keyCode == 0 || _440.charOrCode == " ") {
                        this._signinClicked(_440);
                    }
                }));
            }
            if (_43f == 1 || _43f == 2 || _43f == 4) {
                var link = this.addLink({innerHTML: _43d, href: "#", tabIndex: -1, className: "ibm-sso-register"});
                dijit.setWaiRole(link, "button");
                dijit.setWaiState(link, "label", _43d);
                dijit.setWaiState(link, "describedby", "ibm-welcome-msg");
                if (_43f == 4) {
                    dojo.attr(link, "href", ibmweb.config.dynNavBaseUrl + _43e);
                    dojo.connect(link, "onclick", dojo.hitch(this, this._signoutClicked));
                    dojo.connect(link, "onkeypress", dojo.hitch(this, function (_441) {
                        if (_441.keyCode == dojo.keys.ENTER || _441.keyCode == 0 || _441.charOrCode == " ") {
                            this._signoutClicked(_441);
                        }
                    }));
                    dijit.setWaiState(link, "describedby", "ibm-welcome-msg");
                }
                if (_43f == 1 || _43f == 2) {
                    dojo.attr(link, "href", "#");
                    dojo.connect(link, "onclick", dojo.hitch(this, this._registerClicked));
                    dojo.connect(link, "onkeypress", dojo.hitch(this, function (_442) {
                        if (_442.keyCode == dojo.keys.ENTER || _442.keyCode == 0 || _442.charOrCode == " ") {
                            this._registerClicked(_442);
                        }
                    }));
                    this.registerLink = _43e;
                }
            }
            dojo.publish("/ibmweb/dynnav/greeting/sso/finished");
        }, _notyouClicked: function (_443) {
            dojo.stopEvent(_443);
            dojo.cookie("IBMISP", null, {expires: -1, domain: ".ibm.com", path: "/"});
            this.clear();
            this.init();
            ibmweb.dynnav.executeBundleCall();
        }, _signoutClicked: function (_444) {
            dojo.stopEvent(_444);
            window.location.href = dojo.string.substitute(ibmweb.config.signin.signoutUrl, ibmweb.meta);
            return false;
        }, _signinClicked: function (_445) {
            if (!!_445) {
                dojo.stopEvent(_445);
            }
            if (!ibmweb.config.signin.overlay) {
                location.href = ibmweb.config.signin.formAction.replace("${page}", ibmweb.util.getUrl());
                return;
            }
            if (dojo.indexOf(this.disabledCountries, ibmweb.meta.cpi) != -1 || !ibmweb.config.signin.overlay) {
                location.href = ibmweb.config.signin.formAction;
                return;
            }
            var _446 = this;
            var _447 = function () {
                ibmweb.external.signinInit({register: dojo.hitch(this, function () {
                        _446._registerClicked();
                    }), reload: dojo.hitch(this, function () {
                        _446.clear();
                        _446.init();
                        ibmweb.dynnav.executeBundleCall();
                    })});
            };
            if (!ibmweb.external.signinInit) {
                var _448 = dojo.io.script.get({url: dojo.string.substitute(ibmweb.config.signin.codeRepository, {"NAME": "signin_full"})});
                _448.then(function () {
                    _447();
                });
                return;
            }
            _447();
        }, _registerClicked: function (_449) {
            if (!!_449) {
                dojo.stopEvent(_449);
            }
            if (dojo.indexOf(this.disabledCountries, ibmweb.meta.cpi) != -1 || !ibmweb.config.signin.overlay) {
                location.href = this.registerLink;
                return;
            }
            var _44a = this;
            var _44b = function () {
                ibmweb.external.registerInit({reload: dojo.hitch(this, function () {
                        _44a.clear();
                        _44a.init();
                        ibmweb.dynnav.executeBundleCall();
                    })});
            };
            if (!ibmweb.external.registerInit) {
                var _44c = dojo.io.script.get({url: dojo.string.substitute(ibmweb.config.signin.codeRepository, {"NAME": "register_full"})});
                _44c.then(function () {
                    _44b();
                });
                return;
            }
            _44b();
            return false;
        }, _tempCount: 0, addLink: function (data, _44d) {
            if (!this._tempCount) {
                dojo.style(this.bNode, "display", "inline");
            }
            var span = dojo.create("span", {className: "ibm-sso-link"});
            if (this._tempCount) {
                dojo.query(span).addContent(" / ");
            }
            var link = dojo.create("a", data, span);
            dojo.connect(link, "onfocus", this, function (e) {
                e.target.tabIndex = 0;
                if (dojo.byId("ibm-menu-links").className == "ibm-access") {
                    dojo.publish("/ibm/dynnav/megamenu/expandMenu");
                }
            });
            dojo.place(span, this.linksNode);
            this._tempCount++;
            if (ibmweb.config.appmast.enabled) {
                dojo.addOnLoad(function () {
                    dojo.forEach(dojo.query(".ibm-greeting-hasp"), function (item, idx) {
                        item.innerHTML = (idx == 0) ? "&nbsp;|&nbsp;" : "";
                    });
                });
            }
            return link;
        }});
}
if (!dojo._hasResource["ibmweb.dynnav.myinterests"]) {
    dojo._hasResource["ibmweb.dynnav.myinterests"] = true;
    dojo.provide("ibmweb.dynnav.myinterests");
    dojo.declare("ibmweb.dynnav.myinterests", [dijit._Widget, ibmweb.dynnav._module], {init: function () {
            return ibmweb.dynnav.isServiceEnabled("myinterests");
        }, onData: function () {
            ibmweb.dynnav.addBundleCallback(104, this, "callback");
        }, callback: function (_44e) {
            if (_44e.results && _44e.results.length > 0) {
                var _44f = dojo.query("#ibm-common-menu ul.ibm-myinterest");
                if (_44f) {
                    for (var i = 0; i < _44e.results.length; i += 1) {
                        if (i > ibmweb.config.megamenu.maxRows - 1) {
                            break;
                        }
                        var li = dojo.create("li", {"role": "presentation"}, _44f[0], "last");
                        var lnk = dojo.create("a", {"href": _44e.results[i].href, innerHTML: _44e.results[i].sname.htmlspecialchars()}, li);
                    }
                }
            }
        }});
}
if (!dojo._hasResource["ibmweb.dynnav.easyaccess"]) {
    dojo._hasResource["ibmweb.dynnav.easyaccess"] = true;
    dojo.provide("ibmweb.dynnav.easyaccess");
    dojo.declare("ibmweb.dynnav.easyaccess", [ibmweb.dynnav._module], {_debugging: false, init: function () {
            if (ibmweb.dynnav.isServiceEnabled("easyaccess")) {
                if (!ibmweb.config.easyaccess.companyName) {
                    this._setPublicUrl();
                    if (ibmweb.storage.getItem("eaCompanyName") == null || ibmweb.storage.getItem("eaCompanyName") == "" || ibmweb.storage.getItem("eaCompanyName") == "--noCompany--") {
                        this._getAccountData();
                    } else {
                        dojo.addOnLoad(dojo.hitch(this, function () {
                            this.createEAConatiner();
                            this._showEasyAccessUrl();
                        }));
                    }
                }
                return true;
            }
            return false;
        }, onLoad: function () {
        }, onData: function () {
            if (ibmweb.config.easyaccess.companyName) {
                this.createEAConatiner();
                this._showPublicUrl();
            }
        }, _getAccountData: function () {
            var data = {sid: 103};
            if (location.search) {
                var _450 = dojo.queryToObject(location.search.indexOf("?") == 0 ? location.search.substr(1) : location.search);
                if (_450["remote_domain"]) {
                    _450["debugQstrIpcInfoCookie"] = _450["remote_domain"];
                }
                if (_450["debugQstrIpcInfoCookie"] || _450["debugQStrIpreqheader"]) {
                    data = dojo.mixin({debugQStrIpreqheader: _450["debugQStrIpreqheader"], debugQstrIpcInfoCookie: _450["debugQstrIpcInfoCookie"]}, data);
                    this._debugging = true;
                }
            }
            ibmweb.dynnav.addBundleCallback(103, this, "showAccountCallback", data);
        }, showAccountCallback: function (_451) {
            var _452 = this._debugging ? 10 : ibmweb.config.easyaccess.lifetime;
            if (!_451.results.companyName) {
                ibmweb.storage.setItem("eaCompanyName", "--noCompany--", _452);
                return;
            }
            ibmweb.storage.setItem("eaCompanyName", _451.results.companyName.htmlspecialchars(), _452);
            ibmweb.storage.setItem("eaSiteUrl", _451.results.siteURL, _452);
            this.createEAConatiner();
            this._showEasyAccessUrl();
        }, _showEasyAccessUrl: function () {
            var _453 = ibmweb.storage.getItem("eaCompanyName");
            var url = ibmweb.storage.getItem("eaSiteUrl");
            if (_453 == "--noCompany--") {
                return;
            }
            if (_453.indexOf("amp;") > -1) {
                _453 = _453.replace(/amp;/ig, "");
            }
            if (_453.indexOf("IBM") == -1) {
                var div = dojo.create("div", {id: "ibm-site-name"});
                var p = dojo.create("p", {}, div);
                var span = dojo.create("span", {id: "ibm-site-name-back-link"}, p);
                dojo.query(span).addContent(" [ ");
                var a = dojo.create("a", {href: url + "?cm_sp=" + ibmweb.meta.dc_type + "-_-" + ibmweb.meta.dc_subject + "-_-EAMH", innerHTML: _453, tabIndex: -1, onfocus: dojo.hitch(this, function (_454) {
                        _454.target.tabIndex = 0;
                        if (dojo.byId("ibm-menu-links").className == "ibm-access") {
                            dojo.publish("/ibm/dynnav/megamenu/expandMenu");
                        }
                    })}, span);
                dojo.query(span).addContent(" ] ");
                dojo.place(div, this._ezaccessNode, "last");
            }
            if (ibmweb.meta.ibm_pageattributes.indexOf("flashlead") != -1) {
                var el = dojo.byId("ibm-esite-link");
                if (el) {
                    var link = dojo.create("a", {title: _453, href: url, onfocus: "return false;", innerHTML: _453}, el);
                }
            }
            var el = dojo.byId("ibm-related-links");
            if (!!el) {
                var li = dojo.create("li", {}, el);
                var link = dojo.create("a", {href: url, innerHTML: _453}, li);
            }
        }, _showPublicUrl: function () {
            var div = dojo.create("div", {id: "ibm-site-name"});
            var p = dojo.create("p", {id: "ibm-site-nm-id"}, div, "first");
            p.appendChild(document.createTextNode("Easy Access: "));
            p.appendChild(document.createTextNode(ibmweb.config.easyaccess.companyName));
            var _455 = dojo.cookie("pSite");
            if (_455) {
                var span = dojo.create("span", {id: "ibm-site-name-back-link"}, div, "last");
                var a = dojo.create("a", {href: _455, innerHTML: PMM.publicLinkNameData, tabIndex: -1, onfocus: dojo.hitch(this, function (_456) {
                        _456.target.tabIndex = 0;
                        if (dojo.byId("ibm-menu-links").className == "ibm-access") {
                            dojo.publish("/ibm/dynnav/megamenu/expandMenu");
                        }
                    }), "aria-describedby": "ibm-site-nm-id"}, span);
                span.appendChild(document.createTextNode(" [ "));
                span.appendChild(a);
                span.appendChild(document.createTextNode(" ] "));
                dojo.place(div, this._ezaccessNode, "last");
            }
            dojo.place(div, this._ezaccessNode, "last");
        }, _setPublicUrl: function () {
            dojo.cookie("pSite", ibmweb.util.getUrl(), {domain: ".ibm.com", path: "/"});
        }, createEAConatiner: function () {
            if (!dojo.byId("ibm-alert")) {
                dojo.create("li", {id: "ibm-alert"}, dojo.query("#ibm-mast-options ul")[0]);
            }
            this.placeAt("ibm-alert");
        }});
}
if (!dojo._hasResource["ibmweb.dynnav.footer"]) {
    dojo._hasResource["ibmweb.dynnav.footer"] = true;
    dojo.provide("ibmweb.dynnav.footer");
    dojo.declare("ibmweb.dynnav.footer", ibmweb.dynnav._module, {init: function () {
            return ibmweb.dynnav.isServiceEnabled("footer");
        }, onData: function (data) {
            var ul = dojo.query("#ibm-footer ul");
            if (ul.length == 0) {
                return;
            }
            ul = ul[0];
            dojo.empty(ul);
            dojo.forEach(data.footerLinkData, function (item) {
                if (ibmweb.config.config == "w3" && item.link == "http://w3.ibm.com/feedback/" && ibmweb.config.footer.feedbackLink != "") {
                    item.link = ibmweb.config.footer.feedbackLink;
                }
                dojo.place("<li><a href=\"" + item.link + "\">" + item.name + "</li>", ul);
            });
            dojo.publish("/ibmweb/dynnav/footer/finished");
        }});
}
if (!dojo._hasResource["ibmweb.dynnav.footermenu"]) {
    dojo._hasResource["ibmweb.dynnav.footermenu"] = true;
    dojo.provide("ibmweb.dynnav.footermenu");
    dojo.declare("ibmweb.dynnav.footermenu", ibmweb.dynnav._module, {init: function () {
            return ibmweb.dynnav.isServiceEnabled("footermenu") && !ibmweb.config.appmast.enabled;
        }, onLoad: function () {
            dojo.empty("ibm-footer-module");
            var div = dojo.create("div", {}, "ibm-footer-module");
            dojo.style(div, {textAlign: "center"});
            dojo.create("img", {src: ibmweb.config.imageUrl + "t/loadingAnimation.gif"}, div);
            dojo.style("ibm-footer-module", "minHeight", "0px");
        }, onData: function (_457) {
            var data = _457.footerMenuData;
            if (!data || data.length == 0 || data[0].title == null) {
                this.onError();
                return;
            }
            if (!!ibmweb.dynnav.PMM.accessibilityData) {
                var h2 = dojo.create("h2", {id: "ibm-footer-res", className: "ibm-access", innerHTML: _457.accessibilityData.resources});
            }
            var div = dojo.create("div", {className: "ibm-columns"});
            var _458 = ibmweb.dynnav.PMM.accessibilityData.resources;
            for (var i = 0, j = data.length; i < j; i++) {
                if (data[i].title === null || data[i].child === null) {
                    continue;
                }
                var col = dojo.create("div", {className: "ibm-col-6-1"}, div);
                var ul, h3;
                if (data[i].title.htmlspecialchars().trim() == "") {
                    _458 = _458;
                    h3 = dojo.create("h3", {className: "ibm-access", innerHTML: _458, style: {display: "none"}}, col);
                    ul = dojo.create("ul", {style: {marginTop: (ibmweb.config.config == "www") ? "39px" : "41px"}}, col);
                } else {
                    _458 = data[i].title.htmlspecialchars();
                    h3 = dojo.create("h3", {innerHTML: _458}, col);
                    ul = dojo.create("ul", {}, col);
                }
                dijit.setWaiState(col, "label", h3.innerHTML);
                for (var k = 0, l = data[i].child.length; k < l; k++) {
                    var _459 = data[i].child[k];
                    var li = dojo.create("li", {}, ul);
                    var a = dojo.create("a", {innerHTML: _459.title.htmlspecialchars(), href: _459.url, tabIndex: "0"}, li);
                    dojo.connect(a, "onfocus", this, function (_45a) {
                        dojo.addClass(_45a.target, "ibm-active");
                        dojo.addClass(_45a.target.parentNode, "ibm-active");
                    });
                    dojo.connect(a, "onblur", this, function (_45b) {
                        dojo.removeClass(_45b.target, "ibm-active");
                        dojo.removeClass(_45b.target.parentNode, "ibm-active");
                    });
                }
                ul.firstChild.firstChild.tabIndex = 0;
            }
            dojo.empty("ibm-footer-module");
            dojo.style("ibm-footer-module", "minHeight", "150px");
            dojo.addClass("ibm-footer-module", "ibm-active");
            if (h2) {
                dojo.place(h2, "ibm-footer-module", "first");
                dijit.setWaiState(dojo.byId("ibm-footer-module"), "labelledby", h2.id);
            }
            dojo.place(div, "ibm-footer-module", "last");
            dojo.publish("/ibmweb/dynnav/footermenu/finished");
        }, onError: function () {
            dojo.empty("ibm-footer-module");
        }});
}
if (!dojo._hasResource["ibmweb.dynnav.emailthispage"]) {
    dojo._hasResource["ibmweb.dynnav.emailthispage"] = true;
    dojo.provide("ibmweb.dynnav.emailthispage");
    dojo.declare("ibmweb.dynnav.emailthispage", [ibmweb.dynnav._module], {init: function () {
            return true;
        }, onData: function (data) {
            var _45c = dojo.cookie("etpConf");
            if (!_45c) {
                return false;
            }
            dojo["require"]("dijit.Dialog");
            dojo["require"]("ibmweb.dynnav.emailthispagewidget");
            dojo.addOnLoad(function () {
                var _45d = new dijit.Dialog();
                var etp = new ibmweb.dynnav.emailthispagewidget({confirmation: true, dialog_id: _45d.id, etpConf: dojo.cookie("etpConf")});
                _45d.attr("content", etp.domNode);
                _45d.show();
            });
        }, showForm: function () {
            if (dojo.exists("ibmweb.dynnav.emailthispagewidget") && dijit.byId("emailthispagew")) {
                var _45e = dijit.byId("emailthispagew");
                _45e.destroy();
            }
            dojo["require"]("dijit.Dialog");
            dojo["require"]("ibmweb.dynnav.emailthispagewidget");
            dojo.addOnLoad(function () {
                var _45f = new dijit.Dialog();
                var etp = new ibmweb.dynnav.emailthispagewidget({dialog_id: _45f.id});
                _45f.attr("content", etp.domNode);
                etp.startup();
                _45f.show();
            });
            return false;
        }});
}
if (!dojo._hasResource["ibmweb.dynnav.sbs"]) {
    dojo._hasResource["ibmweb.dynnav.sbs"] = true;
    dojo.provide("ibmweb.dynnav.sbs");
    dojo.declare("ibmweb.dynnav.sbs", ibmweb.dynnav._module, {init: function () {
            return ibmweb.dynnav.isServiceEnabled("sbs");
        }, onData: function (_460) {
            if (ibmweb.dynnav.PMM.footerToolData.length == 0) {
                return false;
            }
            dojo.create("div", {id: "ibm-social-tools"}, "ibm-masthead", "last");
            ibmweb.sbs.register(dojo.byId("ibm-social-tools"));
            var ul = dojo.query("#ibm-social-tools ul");
            if (ul.length > 0) {
                ul = dojo.query("#ibm-social-tools ul")[0];
            }
            dojo.connect(ul.firstChild.firstChild, "onfocus", this, function (_461) {
                ul.className = "ibm-active";
            });
            dojo.query("#ibm-social-tools a").forEach(function (item) {
                dijit.setWaiRole(item, "button");
                item.tabIndex = -1;
                dojo.connect(item, "onfocus", this, function (_462) {
                    item.tabIndex = 0;
                });
            });
            ul.firstChild.firstChild.tabIndex = 0;
            dojo.connect(dojo.byId("ibm-social-tools"), "onkeypress", this, function (_463) {
                if (_463.shiftKey && _463.charOrCode == dojo.keys.TAB) {
                    ul.className = "";
                    if (_463.target != ul.firstChild.firstChild) {
                        ul.firstChild.firstChild.focus();
                        ul.firstChild.firstChild.tabIndex = -1;
                    }
                }
                if (!_463.shiftKey && _463.charOrCode == dojo.keys.TAB) {
                    ul.className = "";
                }
                if (_463.keyCode == dojo.keys.DOWN_ARROW || _463.keyCode == dojo.keys.RIGHT_ARROW) {
                    dojo.stopEvent(_463);
                    var next = _463.target.parentNode.nextSibling;
                    if (next && next.firstChild && next.firstChild.nodeName == "A") {
                        next.firstChild.focus();
                        _463.target.tabIndex = -1;
                    } else {
                        next = _463.target.parentNode.parentNode.firstChild;
                        if (next && next.firstChild && next.firstChild.nodeName == "A") {
                            next.firstChild.focus();
                            _463.target.tabIndex = -1;
                        }
                    }
                }
                if (_463.keyCode == dojo.keys.UP_ARROW || _463.keyCode == dojo.keys.LEFT_ARROW) {
                    dojo.stopEvent(_463);
                    var prev = _463.target.parentNode.previousSibling;
                    if (prev && prev.firstChild && prev.firstChild.nodeName == "A") {
                        prev.firstChild.focus();
                        _463.target.tabIndex = -1;
                    } else {
                        prev = _463.target.parentNode.parentNode.lastChild;
                        if (prev && prev.firstChild && prev.firstChild.nodeName == "A") {
                            prev.firstChild.focus();
                            _463.target.tabIndex = -1;
                        }
                    }
                }
                return false;
            });
            dojo.query("#ibm-social-tools").onmouseover(function (e) {
                dojo.stopEvent(e);
            });
            dojo.publish("/ibmweb/dynnav/sbs/finished");
        }});
}
if (!dojo._hasResource["ibmweb.dynnav.language"]) {
    dojo._hasResource["ibmweb.dynnav.language"] = true;
    dojo.provide("ibmweb.dynnav.language");
    dojo.addOnLoad(function () {
        if (!dojo.byId("ibm-language")) {
            return;
        }
        if (!ibmweb.config.language) {
            return;
        }
        dojo.query("#ibm-language a").forEach(function (link) {
            var val = link.lang || link.rel;
            if (!val) {
                return;
            }
            link.href = ibmweb.config.language[val] ? ibmweb.config.language[val] : link.href;
        });
    });
}
if (!dojo._hasResource["ibmweb.dynnav.search"]) {
    dojo._hasResource["ibmweb.dynnav.search"] = true;
    dojo.provide("ibmweb.dynnav.search");
    dojo.declare("ibmweb.dynnav.search", [ibmweb.dynnav._module], {_original_search_text: "", q: null, hasFocus: false, valueBackup: "", hoverTrick: false, init: function () {
            if (dojo.byId("ibm-search-module")) {
                return true;
            }
            return false;
        }, onLoad: function () {
            this.q = dojo.byId("q");
            if (this.q && ibmweb.config.config == "www") {
                this.q.value = dojo.query("label[for=q] span")[0].innerHTML;
                this._original_search_text = this.q.value;
                dojo.connect(this.q, "onfocus", dojo.hitch(this, function () {
                    this.hasFocus = true;
                    if (this.q.value == this._original_search_text) {
                        this.q.value = "";
                    }
                    dojo.removeAttr(this.q, "title");
                    dojo.style(this.q, "fontStyle", "normal");
                }));
                dojo.connect(this.q, "onblur", dojo.hitch(this, function () {
                    this.hasFocus = false;
                    this.q.value = this.q.value.trim() || this.valueBackup;
                    dojo.style(this.q, "fontStyle", (this.q.value == this._original_search_text) ? "italic" : "normal");
                }));
                dojo.connect(this.q, "onmouseover", dojo.hitch(this, function () {
                    if (this.hasFocus) {
                        return;
                    }
                    if (this.q.value !== this._original_search_text) {
                        return;
                    }
                    this.hoverTrick = true;
                    this.valueBackup = this.q.value;
                    dojo.attr(this.q, "title", this.valueBackup);
                    this.q.value = "";
                }));
                dojo.connect(this.q, "onmouseout", dojo.hitch(this, function () {
                    if (this.hasFocus || !this.hoverTrick) {
                        return;
                    }
                    this.hoverTrick = false;
                    dojo.removeAttr(this.q, "title");
                    if (this.q.value == "") {
                        this.q.value = this.valueBackup;
                    }
                }));
            }
            if (ibmweb.config.config == "www") {
                this._initScopedSearch();
            }
        }, onData: function (data) {
            if (ibmweb.config.config == "w3" && ibmweb.dynnav.isServiceEnabled("facestypeahead")) {
                dojo.attr(this.q, "autocomplete", "off");
                ibmweb.queue.push(function () {
                    return !!window.ibmweb.w3.SearchBar;
                }, function () {
                    new window.ibmweb.w3.SearchBar({form: "ibm-search-form"}, "q");
                });
            }
        }, _initScopedSearch: function () {
            var sn = dojo.byId("sn");
            if (!sn) {
                return;
            }
            var _464 = null;
            var key = null;
            var _465 = dojo.byId("ibm-search");
            dojo.addClass("ibm-search", "ibm-with-scoped-search");
            dojo.addClass(sn, "ibm-access");
            dojo.attr(sn, "tabIndex", "-1");
            var ul = dojo.create("ul", {id: "ibm-scoped-search", onmouseover: function () {
                    if (_464) {
                        clearTimeout(_464);
                    }
                }, onmouseout: function () {
                    clearTimeout(_464);
                    _464 = setTimeout(function () {
                        dojo.style(ul, "display", "none");
                    }, 500);
                }}, sn.parentNode);
            dojo.style(ul, "display", "none");
            dijit.setWaiRole(ul, "menu");
            var _466 = dojo.query("#sn > option");
            for (var i = 0, j = _466.length; i < j; i++) {
                var li = dojo.create("li", {}, ul);
                var a = dojo.create("a", {className: _466[i].selected ? "ibm-selected" : "", rel: _466[i].value, innerHTML: _466[i].innerHTML, href: "#"}, li);
                dijit.setWaiRole(a, "menuitem");
                _466[i].selected ? dijit.setWaiState(a, "checked", "true") : dijit.setWaiState(a, "checked", "false");
                dojo.connect(a, "onclick", dojo.hitch(this, function (_467) {
                    dojo.stopEvent(_467);
                    var link = _467.target;
                    sn.value = link.rel;
                    dojo.query(".ibm-selected", ul).forEach(function (item) {
                        dijit.setWaiState(item, "checked", "false");
                    });
                    dojo.query(".ibm-selected", ul).removeClass("ibm-selected");
                    dojo.query(".ibm-active", ul).removeClass("ibm-active");
                    dojo.addClass(link, "ibm-selected");
                    dijit.setWaiState(link, "checked", "true");
                    if (this.q.value == this._original_search_text) {
                        this.q.value = link.innerHTML;
                    }
                    this._original_search_text = link.innerHTML;
                    dojo.style(ul, "display", "none");
                    _465.focus();
                }));
                dojo.connect(a, "onblur", dojo.hitch(this, function (_468) {
                    _464 = setTimeout(function () {
                        dojo.removeClass(_468.target, "ibm-active");
                        dojo.style(ul, "display", "none");
                    }, 500);
                }));
                dojo.connect(a, "onfocus", dojo.hitch(this, function (_469) {
                    clearTimeout(_464);
                    dojo.addClass(_469.target, "ibm-active");
                    dojo.style(ul, "display", "block");
                }));
                dojo.connect(a, "onmouseover", dojo.hitch(this, function (_46a) {
                    dojo.query("a.ibm-active", ul).removeClass("ibm-active");
                    dojo.addClass(_46a.target, "ibm-active");
                }));
                dojo.connect(a, "onmouseout", dojo.hitch(this, function (_46b) {
                    dojo.removeClass(_46b.target, "ibm-active");
                    _464 = setTimeout(function () {
                    }, 100);
                }));
                if (_466[i].selected) {
                    this.q.value = this._original_search_text = _466[i].innerHTML;
                }
            }
            dojo.connect(_465, "onmouseover", dojo.hitch(this, function () {
                dojo.style(ul, "display", "block");
                if (_464) {
                    clearTimeout(_464);
                }
            }));
            dojo.connect(_465, "onmouseout", dojo.hitch(this, function () {
                _464 = setTimeout(function () {
                    dojo.style(ul, "display", "none");
                }, 500);
            }));
            dojo.connect(_465, "onfocus", dojo.hitch(this, function (_46c) {
                if (key != "EE") {
                    if (_464) {
                        clearTimeout(_464);
                    }
                    dojo.style(ul, "display", "block");
                    if (dojo.query(".ibm-selected", ul)[0]) {
                        dojo.query(".ibm-selected", ul)[0].focus();
                    }
                }
                key = null;
            }));
            dojo.connect(_465, "onblur", dojo.hitch(this, function (_46d) {
                _464 = setTimeout(function () {
                    dojo.style(ul, "display", "none");
                }, 500);
            }));
            var _466 = dojo.query("a", ul);
            dojo.connect(ul, "onkeypress", dojo.hitch(this, function (_46e) {
                if ((_46e.keyCode == 0 || _46e.charOrCode == " ") && _46e.target.nodeName == "A") {
                    dojo.stopEvent(_46e);
                    var link = _46e.target;
                    sn.value = link.rel;
                    dojo.query(".ibm-selected", ul).forEach(function (item) {
                        dijit.setWaiState(item, "checked", "false");
                    });
                    dojo.query(".ibm-selected", ul).removeClass("ibm-selected");
                    dojo.query(".ibm-active", ul).removeClass("ibm-active");
                    dojo.addClass(link, "ibm-selected");
                    dijit.setWaiState(link, "checked", "true");
                    if (this.q.value == this._original_search_text) {
                        this.q.value = link.innerHTML;
                    }
                    this._original_search_text = link.innerHTML;
                    dojo.style(ul, "display", "none");
                    _465.focus();
                }
                if (_46e.keyCode == dojo.keys.ENTER || _46e.keyCode == dojo.keys.ESCAPE || _46e.keyCode == dojo.keys.TAB) {
                    dojo.stopEvent(_46e);
                    key = "EE";
                    _465.focus();
                    dojo.style(ul, "display", "none");
                    if (_46e.keyCode == dojo.keys.ENTER) {
                        this.q.value = _46e.target.innerHTML;
                        dojo.query(".ibm-selected", ul).forEach(function (item) {
                            dijit.setWaiState(item, "checked", "false");
                        });
                        dojo.query(".ibm-selected", ul).removeClass("ibm-selected");
                        _46e.target.className = "ibm-selected";
                        dijit.setWaiState(_46e.target, "checked", "true");
                    }
                }
                if (_46e.keyCode == dojo.keys.DOWN_ARROW) {
                    dojo.stopEvent(_46e);
                    var curr = _46e.target;
                    for (i = 0; i < _466.length; i++) {
                        if (curr == _466[i] && i < (_466.length - 1)) {
                            dojo.removeClass(curr, "ibm-active");
                            dojo.addClass(_466[i + 1], "ibm-active");
                            sn.value = _466[i + 1].rel;
                            _466[i + 1].focus();
                        }
                    }
                }
                if (_46e.keyCode == dojo.keys.UP_ARROW) {
                    dojo.stopEvent(_46e);
                    var curr = _46e.target;
                    for (i = 0; i < _466.length; i++) {
                        if (curr == _466[i] && i > 0) {
                            dojo.removeClass(curr, "ibm-active");
                            dojo.addClass(_466[i - 1], "ibm-active");
                            sn.value = _466[i - 1].rel;
                            _466[i - 1].focus();
                        }
                    }
                }
            }));
        }});
}
if (!dojo._hasResource["ibmweb.dynnav.contactmodule"]) {
    dojo._hasResource["ibmweb.dynnav.contactmodule"] = true;
    dojo.provide("ibmweb.dynnav.contactmodule");
    dojo.declare("ibmweb.dynnav.contactmodule", [ibmweb.dynnav._module], {init: function () {
            if (ibmweb.meta.ibm_dynamiccm == "Y") {
                ibmweb.dynnav.addBundleCallback("206", this, "__contactboxcallback", {v: 17, wtmcategory: ibmweb.meta.ibm_wtmcategory});
                return true;
            }
            return false;
        }, __contactboxcallback: function (data) {
            if (data.results["templateString"].length != 0) {
                var temp = dojo.byId("ibm-contact-module");
                if (temp) {
                    temp.innerHTML = data.results.templateString;
                    (function () {
                        var _46f = dojo.query("#ibm-contact-module").parents("#ibm-content-sidebar");
                        if (_46f[0] && _46f.style("display") != "none") {
                            dijit.setWaiRole(_46f[0], "complementary");
                        }
                    })();
                }
            }
        }});
}
if (!dojo._hasResource["ibmweb.dynnav.merchandising"]) {
    dojo._hasResource["ibmweb.dynnav.merchandising"] = true;
    dojo.provide("ibmweb.dynnav.merchandising");
    dojo.declare("ibmweb.dynnav.merchandising", [ibmweb.dynnav._module], {init: function () {
            if (ibmweb.dynnav.isServiceEnabled("merchandising")) {
                ibmweb.dynnav.addBundleCallback("102", this, "_renderData", {industry: ibmweb.meta.ibm_industry, customersize: ibmweb.meta.ibm_customersize, specialpurpose: ibmweb.meta.ibm_specialpurpose, dc_subject: ibmweb.meta.dc_subject, currenturl: ibmweb.util.getUrl().replace(/^https?:/, ""), ctype: ibmweb.meta.dc_type, ww: ibmweb.meta.wwCase});
                return true;
            } else {
                this.createRibbonFromRelativeContentColumns();
            }
            return false;
        }, _renderData: function (_470) {
            if (!dojo.byId("ibm-merchandising-module")) {
                return;
            }
            if (_470.results.length == 0 || (_470.results.length != 0 && _470.results[0].result == "novalue")) {
                this.createRibbonFromRelativeContentColumns();
                return;
            }
            var _471 = "";
            var _472 = 3;
            if (dojo.query("#ibm-merchandising-module").parents("#ibm-related-content").length == 1) {
                _472 = 6;
            }
            var _473 = 1;
            if (dojo.query("#ibm-content-body #ibm-content-sidebar > #ibm-merchandising-module, #ibm-content-body div.ibm-columns div.ibm-col-5-1 #ibm-merchandising-module").length == 1) {
                _473 = 1;
            } else {
                if (dojo.query("#ibm-content-body div.ibm-columns div.ibm-col-6-1 #ibm-merchandising-module").length == 1) {
                    _473 = 2;
                } else {
                    if (dojo.query("#ibm-content-body div.ibm-columns div.ibm-col-6-2 #ibm-merchandising-module").length == 1) {
                        _473 = 3;
                    } else {
                        if (dojo.query("#ibm-merchandising-module").parents("#ibm-related-content").length == 1) {
                            _473 = 4;
                        } else {
                        }
                    }
                }
            }
            dojo.forEach(_470.results, function (item, i) {
                var crop = "";
                if (item.imgw == "168") {
                    crop = " ibm-mte-crop";
                }
                if (i >= _472) {
                    return;
                }
                var _474 = "ibm-forward-link";
                if (item.externalUrl == 1 || item.externalUrl == 2) {
                    _474 = "ibm-external-link";
                }
                var _475 = "";
                var _476 = "";
                if (!!item.fileExtension) {
                    switch (item.fileExtension) {
                        case "PDF":
                            _474 = "ibm-pdf-link";
                            break;
                        case "RAM":
                        case "MOV":
                        case "WMV":
                        case "SWF":
                            _474 = "ibm-video-link";
                            break;
                        case "DOC":
                        case "ODF":
                            _474 = "ibm-document-link";
                            break;
                        case "PPT":
                            _474 = "ibm-symp-presentation";
                            break;
                        case "XLS":
                            _474 = "ibm-symp-spreadsheet";
                            break;
                        default:
                            _474 = "ibm-forward-em-link";
                            break;
                    }
                    if (!!item.popUpDownloadLink && !!item.popUpDownloadText && ibmweb.meta.encoding == "utf8") {
                        var icon = item.fileExtension == "ODF" ? "ibm-forward-em-link" : "ibm-external-link";
                        _475 = "<p class=\"ibm-ind-link\"><a class=\"" + icon + "\"  href=\"" + item.popUpDownloadLink + "\">" + item.popUpDownloadText + "</a></p>";
                    }
                    if (!!item.fileSize) {
                        _476 = "<span class=\"ibm-item-note\">&nbsp(" + (item.fileExtension == "" ? "" : item.fileExtension + ", ") + item.fileSize + ")</span>";
                    }
                }
                var _477 = "";
                if (item.externalUrl == 2) {
                    _474 += " ibm-merchandising-module-leaving-ibm";
                    _477 = "http://www.ibm.com/links/?prompt=1&cc=" + ibmweb.meta.cc + "&lc=" + ibmweb.meta.lc + "&url=";
                }
                var _478 = "<input type=\"hidden\" class=\"ibm-mm-spot-id\" value=\"" + item.spotid + "\" />" + "<input type=\"hidden\" class=\"ibm-mm-weight\" value=\"" + item.weight + "\" />";
                if (_473 == 1) {
                    if (item.tid == 1) {
                        _471 += "<div class=\"ibm-container\">" + "<div class=\"ibm-container-body\">" + "<div class=\"ibm-module-image\"><img border=\"0\" src=\"" + item.imgsrc + "\" alt=\"" + item.imgalt + "\" /></div>" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _477 + item.linkurl + "\">" + item.description + "</a></p></div>" + "<ul class=\"ibm-link-list\">" + "<li><a class=\"" + _474 + "\" href=\"" + _477 + item.linkurl + "\">" + item.linktext + _476 + "</a></li>" + (_475 == "" ? "" : "<li>" + _475 + "</li>") + "</ul></div>" + _478 + "</div>";
                    } else {
                        if (item.tid == 3) {
                            _471 += "<div class=\"ibm-container\">" + "<div class=\"ibm-container-body\">" + "<div class=\"ibm-module-image\"><img border=\"0\" src=\"" + item.imgsrc + "\" alt=\"" + item.imgalt + "\" /></div>" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _477 + item.linkurl + "\">" + item.description + _476 + "</a></p></div>" + "</div>" + _478 + "</div>";
                        } else {
                            if (item.tid == 2) {
                                _471 += "<div class=\"ibm-container alternate\">" + "<div class=\"ibm-container-body\">" + "<div class=\"ibm-module-image\"><img border=\"0\" src=\"" + item.imgsrc + "\" alt=\"" + item.imgalt + "\" /></div>" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _477 + item.linkurl + "\">" + item.description + "</a></p></div>" + "<ul class=\"ibm-link-list\">" + "<li><a class=\"" + _474 + "\" href=\"" + _477 + item.linkurl + "\">" + item.linktext + _476 + "</a></li>" + (_475 == "" ? "" : "<li>" + _475 + "</li>") + "</ul></div>" + _478 + "</div>";
                            } else {
                                if (item.tid == 4) {
                                    _471 += "<div class=\"ibm-container alternate\">" + "<div class=\"ibm-container-body\">" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _477 + item.linkurl + "\">" + item.description + "</a></p></div>" + "<ul class=\"ibm-link-list\">" + "<li><a class=\"" + _474 + "\" href=\"" + _477 + item.linkurl + "\">" + item.linktext + _476 + "</a></li>" + (_475 == "" ? "" : "<li>" + _475 + "</li>") + "</ul></div>" + _478 + "</div>";
                                }
                            }
                        }
                    }
                } else {
                    if (_473 == 2) {
                        if (item.tid == 1) {
                            _471 += "<div class=\"ibm-container\">" + "<div class=\"ibm-container-body\">" + "<div class=\"ibm-module-image" + crop + "\"><img border=\"0\" src=\"" + item.imgsrc + "\" alt=\"" + item.imgalt + "\" /></div>" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _477 + item.linkurl + "\">" + item.description + "</a></p></div>" + "<ul class=\"ibm-link-list\">" + "<li><a class=\"" + _474 + "\" href=\"" + _477 + item.linkurl + "\">" + item.linktext + _476 + "</a></li>" + (_475 == "" ? "" : "<li>" + _475 + "</li>") + "</ul></div>" + _478 + "</div>";
                        } else {
                            if (item.tid == 3) {
                                _471 += "<div class=\"ibm-container\">" + "<div class=\"ibm-container-body\">" + "<div class=\"ibm-module-image" + crop + "\"><img border=\"0\" src=\"" + item.imgsrc + "\" alt=\"" + item.imgalt + "\" /></div>" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _477 + item.linkurl + "\">" + item.description + _476 + "</a></p></div>" + "</div>" + _478 + "</div>";
                            } else {
                                if (item.tid == 2 || item.tid == 4) {
                                    _471 += "<div class=\"ibm-container alternate\">" + "<div class=\"ibm-container-body\">" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _477 + item.linkurl + "\">" + item.description + "</a></p></div>" + "<ul class=\"ibm-link-list\">" + "<li><a class=\"" + _474 + "\" href=\"" + _477 + item.linkurl + "\">" + item.linktext + _476 + "</a></li>" + (_475 == "" ? "" : "<li>" + _475 + "</li>") + "</ul></div>" + _478 + "</div>";
                                }
                            }
                        }
                    } else {
                        if (_473 == 3) {
                            if (item.tid == 2) {
                                _471 += "<div class=\"ibm-container alternate ibm-portrait-module\">" + "<div class=\"ibm-container-body\">" + "<div class=\"ibm-module-image\"><img border=\"0\" src=\"" + item.imgsrc + "\" alt=\"" + item.imgalt + "\" /></div>" + "<div class=\"ibm-module-text\"><h2>" + item.title + "</h2>" + "<p><a href=\"" + _477 + item.linkurl + "\">" + item.description + "</a></p>" + "<ul class=\"ibm-link-list\">" + "<li><a class=\"" + _474 + "\" href=\"" + _477 + item.linkurl + "\">" + item.linktext + _476 + "</a></li>" + (_475 == "" ? "" : "<li>" + _475 + "</li>") + "</ul></div></div></div>" + _478 + "</div>";
                            } else {
                                if (item.tid == 3) {
                                    _471 += "<div class=\"ibm-container alternate\">" + "<div class=\"ibm-container-body\">" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _477 + item.linkurl + "\">" + item.description + _476 + "</a></p>" + "</div></div>" + _478 + "</div>";
                                } else {
                                    _471 += "<div class=\"ibm-container alternate\">" + "<div class=\"ibm-container-body\">" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _477 + item.linkurl + "\">" + item.description + "</a></p></div>" + "<ul class=\"ibm-link-list\">" + "<li><a class=\"" + _474 + "\" href=\"" + _477 + item.linkurl + "\">" + item.linktext + _476 + "</a></li>" + (_475 == "" ? "" : "<li>" + _475 + "</li>") + "</ul></div>" + _478 + "</div>";
                                }
                            }
                        } else {
                            if (_473 == 4) {
                                if (item.tid == 1) {
                                    _471 += "<div class=\"ibm-container\">" + "<div class=\"ibm-container-body\">" + "<div class=\"ibm-module-image" + crop + "\"><img border=\"0\" src=\"" + item.imgsrc + "\" alt=\"" + item.imgalt + "\" /></div>" + "<h2 class=\"ibm-third\">" + item.title + "</h2>" + "<p><a href=\"" + _477 + item.linkurl + "\">" + item.description + "</a></p>" + "<p class=\"ibm-ind-link\">" + "<a class=\"" + _474 + "\" href=\"" + _477 + item.linkurl + "\" >" + item.linktext + _476 + "</a></p>" + _475 + "</div>" + _478 + "</div>";
                                } else {
                                    if (item.tid == 3) {
                                        _471 += "<div class=\"ibm-container\">" + "<div class=\"ibm-container-body\">" + "<div class=\"ibm-module-image" + crop + "\"><img border=\"0\" src=\"" + item.imgsrc + "\" alt=\"" + item.imgalt + "\" /></div>" + "<h2 class=\"ibm-third\">" + item.title + "</h2>" + "<p><a href=\"" + _477 + item.linkurl + "\">" + item.description + _476 + "</a></p>" + "</div>" + _478 + "</div>";
                                    } else {
                                    }
                                }
                            } else {
                            }
                        }
                    }
                }
            });
            dojo.byId("ibm-merchandising-module").innerHTML = _471;
            (function () {
                var $mm = dojo.query("#ibm-merchandising-module"), _479 = null;
                if ($mm.parents("#ibm-content-sidebar")[0]) {
                    _479 = $mm.parents("#ibm-content-sidebar");
                } else {
                    if ($mm.parents("#ibm-related-content")[0]) {
                        _479 = $mm.parents("#ibm-related-content");
                    }
                }
                if (_479[0] && _479.style("display") != "none") {
                    dijit.setWaiRole(_479[0], "complementary");
                }
            })();
            if (dojo.query("#ibm-related-content div#ibm-merchandising-module").length == 1) {
                var _47a = "ibm-col-6-1";
                var _47b = 140;
                var _47c = 64;
                var temp = dojo.query("#ibm-related-content div.ibm-columns > div[class^=\"ibm-col-\"]");
                if (temp.length > 0) {
                    if (dojo.hasClass(temp[0], "ibm-col-5-1")) {
                        _47a = "ibm-col-5-1";
                        var _47b = 168;
                    } else {
                        if (dojo.hasClass(temp[0], "ibm-col-6-2")) {
                            _47a = "ibm-col-6-2";
                            var _47b = 300;
                            var _47c = null;
                        }
                    }
                }
                var re = /ibm-col-(\d*)-(\d*)/.exec(_47a);
                var _47d = re[1] / re[2];
                var _47e = dojo.byId("ibm-merchandising-module");
                dojo.query("div.ibm-container", _47e).forEach(function (i) {
                    dojo.addClass(i, _47a);
                    dojo.removeClass(i, "ibm-container");
                });
                var div = dojo.create("div", {className: "ibm-container", id: "ibm-former-merchandising"}, "ibm-related-content");
                var body = dojo.create("div", {className: "ibm-container-body"}, div);
                var _47f = dojo.create("div", {className: "ibm-columns"}, body);
                dojo.query("#ibm-related-content div[class^=\"ibm-col-\"]").forEach(function (i) {
                    dojo.place(i, _47f);
                });
                dojo.query("#ibm-related-content div.ibm-columns").forEach(function (i) {
                    var _480 = dojo.query("> *", i).length;
                    if (_480 == 0) {
                        dojo.query(i).orphan();
                    }
                });
                dojo.query(_47e).orphan();
                var _481 = dojo.query("#ibm-related-content div.ibm-columns > div");
                if (_481.length > _47d) {
                    var _482 = Math.ceil(_481.length / _47d);
                    for (var i = 1; i < _482; i += 1) {
                        var _47f = dojo.create("div", {className: "ibm-columns"}, body);
                        var len = _47d;
                        if (i + 1 == _482) {
                            len = _481.length - _47d;
                        }
                        for (var j = 0; j < len; j += 1) {
                            if (_481[j + _47d * i]) {
                                dojo.place(_481[j + _47d * i], _47f);
                            }
                        }
                    }
                    var _483 = new ibmweb.ribbon({srcNodeRef: div});
                    _483.startup();
                    dojo.style(_483.ribbonContainer, {width: "980px", margin: "0 auto", position: "relative"});
                }
            }
            var temp = dojo.query("a.ibm-merchandising-module-leaving-ibm");
            if (temp.length > 0) {
                dojo["require"]("ibmweb.leaving");
                dojo.addOnLoad(function () {
                    dojo.query("a.ibm-merchandising-module-leaving-ibm").onclick(ibmweb.leaving.clickHandler);
                });
            }
        }, createRibbonFromRelativeContentColumns: function () {
            if (dojo.query("#ibm-related-content #ibm-merchandising-module").length == 0) {
                return;
            }
            dojo.query("#ibm-related-content #ibm-merchandising-module").orphan();
            var _484 = "ibm-col-6-1", temp = dojo.query("#ibm-related-content div.ibm-columns > div[class^=\"ibm-col-\"]"), _485 = temp.closest(".ibm-columns");
            if (temp.length == 0) {
                return;
            }
            if (dojo.hasClass(temp[0], "ibm-col-5-1")) {
                _484 = "ibm-col-5-1";
            } else {
                if (dojo.hasClass(temp[0], "ibm-col-6-2")) {
                    _484 = "ibm-col-6-2";
                }
            }
            var re = /ibm-col-(\d*)-(\d*)/.exec(_484), _486 = re[1] / re[2], i = 0;
            if (temp.length <= _486) {
                return;
            }
            var _487 = dojo.create("div", {className: "ibm-container-body", id: "ibm-former-merchandising"}, "ibm-related-content"), _488;
            dojo.forEach(temp, function (item) {
                if (i == 0) {
                    _488 = dojo.create("div", {className: "ibm-columns"}, _487, "last");
                }
                dojo.place(item, _488);
                i++;
                if (i == _486) {
                    i = 0;
                }
            });
            _485.orphan();
            dojo["require"]("ibmweb.ribbon");
            var s = new ibmweb.ribbon({srcNodeRef: _487, style: {width: "980px", margin: "0pt auto", position: "relative"}});
            s.startup();
        }});
}
if (!dojo._hasResource["ibmweb.dynnav.intercountry"]) {
    dojo._hasResource["ibmweb.dynnav.intercountry"] = true;
    dojo.provide("ibmweb.dynnav.intercountry");
    dojo.declare("ibmweb.dynnav.intercountry", ibmweb.dynnav._module, {init: function () {
            if (ibmweb.dynnav.isServiceEnabled("intercountry")) {
                ibmweb.dynnav.addBundleCallback("106", this, "_compareCcLc", {});
            }
        }, _compareCcLc: function (data) {
            if (!data || !data.results) {
                return;
            }
            if (data.results.cc != ibmweb.meta.cc || data.results.lc != ibmweb.meta.lc) {
                try {
                    var _489 = ibmweb.dynnav.PMM.countryData[data.results.cc + data.results.lc].name;
                    dojo.create("a", {href: "http://www.ibm.com/" + data.results.cc + "/" + data.results.lc + "/?cm_re=masthead-_-backcountry-_-top_level", innerHTML: _489, className: "ibm-back-country"}, dojo.byId("ibm-geo"));
                } catch (e) {
                }
            }
        }});
}
if (!dojo._hasResource["dojo.io.iframe"]) {
    dojo._hasResource["dojo.io.iframe"] = true;
    dojo.provide("dojo.io.iframe");
    dojo.getObject("io", true, dojo);
    dojo.io.iframe = {create: function (_48a, _48b, uri) {
            if (window[_48a]) {
                return window[_48a];
            }
            if (window.frames[_48a]) {
                return window.frames[_48a];
            }
            var _48c = null;
            var turi = uri;
            if (!turi) {
                if (dojo.config["useXDomain"] && !dojo.config["dojoBlankHtmlUrl"]) {
                }
                turi = (dojo.config["dojoBlankHtmlUrl"] || dojo.moduleUrl("dojo", "resources/blank.html"));
            }
            var _48c = dojo.place("<iframe id=\"" + _48a + "\" name=\"" + _48a + "\" src=\"" + turi + "\" onload=\"" + _48b + "\" style=\"position: absolute; left: 1px; top: 1px; height: 1px; width: 1px; visibility: hidden\">", dojo.body());
            window[_48a] = _48c;
            return _48c;
        }, setSrc: function (_48d, src, _48e) {
            try {
                if (!_48e) {
                    if (dojo.isWebKit) {
                        _48d.location = src;
                    } else {
                        frames[_48d.name].location = src;
                    }
                } else {
                    var idoc;
                    if (dojo.isIE || dojo.isWebKit) {
                        idoc = _48d.contentWindow.document;
                    } else {
                        idoc = _48d.contentWindow;
                    }
                    if (!idoc) {
                        _48d.location = src;
                        return;
                    } else {
                        idoc.location.replace(src);
                    }
                }
            } catch (e) {
            }
        }, doc: function (_48f) {
            var doc = _48f.contentDocument || (((_48f.name) && (_48f.document) && (dojo.doc.getElementsByTagName("iframe")[_48f.name].contentWindow) && (dojo.doc.getElementsByTagName("iframe")[_48f.name].contentWindow.document))) || ((_48f.name) && (dojo.doc.frames[_48f.name]) && (dojo.doc.frames[_48f.name].document)) || null;
            return doc;
        }, send: function (args) {
            if (!this["_frame"]) {
                this._frame = this.create(this._iframeName, dojo._scopeName + ".io.iframe._iframeOnload();");
            }
            var dfd = dojo._ioSetArgs(args, function (dfd) {
                dfd.canceled = true;
                dfd.ioArgs._callNext();
            }, function (dfd) {
                var _490 = null;
                try {
                    var _491 = dfd.ioArgs;
                    var dii = dojo.io.iframe;
                    var ifd = dii.doc(dii._frame);
                    var _492 = _491.handleAs;
                    _490 = ifd;
                    if (_492 != "html") {
                        if (_492 == "xml") {
                            if (dojo.isIE < 9 || (dojo.isIE && dojo.isQuirks)) {
                                dojo.query("a", dii._frame.contentWindow.document.documentElement).orphan();
                                var _493 = (dii._frame.contentWindow.document).documentElement.innerText;
                                _493 = _493.replace(/>\s+</g, "><");
                                _493 = dojo.trim(_493);
                                var _494 = {responseText: _493};
                                _490 = dojo._contentHandlers["xml"](_494);
                            }
                        } else {
                            _490 = ifd.getElementsByTagName("textarea")[0].value;
                            if (_492 == "json") {
                                _490 = dojo.fromJson(_490);
                            } else {
                                if (_492 == "javascript") {
                                    _490 = dojo.eval(_490);
                                }
                            }
                        }
                    }
                } catch (e) {
                    _490 = e;
                } finally {
                    _491._callNext();
                }
                return _490;
            }, function (_495, dfd) {
                dfd.ioArgs._hasError = true;
                dfd.ioArgs._callNext();
                return _495;
            });
            dfd.ioArgs._callNext = function () {
                if (!this["_calledNext"]) {
                    this._calledNext = true;
                    dojo.io.iframe._currentDfd = null;
                    dojo.io.iframe._fireNextRequest();
                }
            };
            this._dfdQueue.push(dfd);
            this._fireNextRequest();
            dojo._ioWatch(dfd, function (dfd) {
                return !dfd.ioArgs["_hasError"];
            }, function (dfd) {
                return (!!dfd.ioArgs["_finished"]);
            }, function (dfd) {
                if (dfd.ioArgs._finished) {
                    dfd.callback(dfd);
                } else {
                    dfd.errback(new Error("Invalid dojo.io.iframe request state"));
                }
            });
            return dfd;
        }, _currentDfd: null, _dfdQueue: [], _iframeName: dojo._scopeName + "IoIframe", _fireNextRequest: function () {
            try {
                if ((this._currentDfd) || (this._dfdQueue.length == 0)) {
                    return;
                }
                do {
                    var dfd = this._currentDfd = this._dfdQueue.shift();
                } while (dfd && dfd.canceled && this._dfdQueue.length);
                if (!dfd || dfd.canceled) {
                    this._currentDfd = null;
                    return;
                }
                var _496 = dfd.ioArgs;
                var args = _496.args;
                _496._contentToClean = [];
                var fn = dojo.byId(args["form"]);
                var _497 = args["content"] || {};
                if (fn) {
                    if (_497) {
                        var _498 = function (name, _499) {
                            dojo.create("input", {type: "hidden", name: name, value: _499}, fn);
                            _496._contentToClean.push(name);
                        };
                        for (var x in _497) {
                            var val = _497[x];
                            if (dojo.isArray(val) && val.length > 1) {
                                var i;
                                for (i = 0; i < val.length; i++) {
                                    _498(x, val[i]);
                                }
                            } else {
                                if (!fn[x]) {
                                    _498(x, val);
                                } else {
                                    fn[x].value = val;
                                }
                            }
                        }
                    }
                    var _49a = fn.getAttributeNode("action");
                    var _49b = fn.getAttributeNode("method");
                    var _49c = fn.getAttributeNode("target");
                    if (args["url"]) {
                        _496._originalAction = _49a ? _49a.value : null;
                        if (_49a) {
                            _49a.value = args.url;
                        } else {
                            fn.setAttribute("action", args.url);
                        }
                    }
                    if (!_49b || !_49b.value) {
                        if (_49b) {
                            _49b.value = (args["method"]) ? args["method"] : "post";
                        } else {
                            fn.setAttribute("method", (args["method"]) ? args["method"] : "post");
                        }
                    }
                    _496._originalTarget = _49c ? _49c.value : null;
                    if (_49c) {
                        _49c.value = this._iframeName;
                    } else {
                        fn.setAttribute("target", this._iframeName);
                    }
                    fn.target = this._iframeName;
                    dojo._ioNotifyStart(dfd);
                    fn.submit();
                } else {
                    var _49d = args.url + (args.url.indexOf("?") > -1 ? "&" : "?") + _496.query;
                    dojo._ioNotifyStart(dfd);
                    this.setSrc(this._frame, _49d, true);
                }
            } catch (e) {
                dfd.errback(e);
            }
        }, _iframeOnload: function () {
            var dfd = this._currentDfd;
            if (!dfd) {
                this._fireNextRequest();
                return;
            }
            var _49e = dfd.ioArgs;
            var args = _49e.args;
            var _49f = dojo.byId(args.form);
            if (_49f) {
                var _4a0 = _49e._contentToClean;
                for (var i = 0; i < _4a0.length; i++) {
                    var key = _4a0[i];
                    for (var j = 0; j < _49f.childNodes.length; j++) {
                        var _4a1 = _49f.childNodes[j];
                        if (_4a1.name == key) {
                            dojo.destroy(_4a1);
                            break;
                        }
                    }
                }
                if (_49e["_originalAction"]) {
                    _49f.setAttribute("action", _49e._originalAction);
                }
                if (_49e["_originalTarget"]) {
                    _49f.setAttribute("target", _49e._originalTarget);
                    _49f.target = _49e._originalTarget;
                }
            }
            _49e._finished = true;
        }};
}
if (!dojo._hasResource["ibmweb.dynnav.ccfintercept"]) {
    dojo._hasResource["ibmweb.dynnav.ccfintercept"] = true;
    dojo.provide("ibmweb.dynnav.ccfintercept");
    ibmweb.dynnav.ccfintercept = (function () {
        var _4a2;
        var _4a3, _4a4, _4a5, end, _4a6 = false;
        Array.isArray = function (arg) {
            return Object.prototype.toString.call(arg) === "[object Array]";
        };
        ibmweb.opinionlab = ibmweb.opinionlab || {};
        function _4a7() {
            if (window.location.host.indexOf(".ibm.com") < 0) {
                return false;
            }
            if (!_4a2.intercept.survey) {
                return false;
            }
            if (!_4a2.intercept.survey.type) {
                return false;
            }
            if (!_4a2.intercept.survey.id) {
                return false;
            }
            if (!_4a2.intercept.percent) {
                return false;
            }
            if (!_4a2.intercept.invitation) {
                return false;
            }
            var _4a8 = _4a9("ccf-global-intercept");
            if (_4a8 !== null) {
                _4a8 = (new Function("return " + _4a8))();
                var _4aa = new Date(_4a8.date), _4ab = new Date(_4aa.getTime() + (_4a2.global_minimum_wait * 24 * 60 * 60 * 1000));
                return false;
            }
            var v17 = false, v16 = false;
            dojo.query("link[rel^=\"style\"]").forEach(function (node) {
                if (node.href.indexOf("/common/v17/") != -1 || node.href.indexOf("/common/v17e/") != -1) {
                    v17 = true;
                } else {
                    if (node.href.indexOf("/common/v16/css/screen") != -1) {
                        v16 = true;
                    }
                }
            });
            if (v16 && v17) {
                v17 = false;
            }
            if (!v17) {
                return false;
            }
            var _4ad = _4a9(_4a3) !== null;
            if (_4ad) {
                return false;
            }
            if (!_4ae()) {
                return false;
            }
            if ((typeof (_4a2.intercept.referrerURL) !== "undefined" && _4a2.intercept.referrerURL.length > 0) && !_4af()) {
                return false;
            }
            if ((typeof (_4a2.intercept.excludeURL) !== "undefined" && _4a2.intercept.excludeURL.length > 0) && _4b0()) {
                return false;
            }
            if (!_4b1()) {
                return false;
            }
            var _4b2 = (Math.random() * 100);
            var _4b3 = (_4b2 < _4a2.intercept.percent);
            if (!_4b3) {
                return false;
            }
            if (!_4b4()) {
                return false;
            }
            if (_4a2.intercept.survey.type == "customB") {
                if (_4b5() == false) {
                    return false;
                }
            }
            return true;
        }
        ;
        function _4b6() {
            var _4b7;
            if (_4a2.intercept.percent > 25 && !_4b8()) {
                _4b7 = _4a2.watermarkImage;
            } else {
                _4b7 = "";
            }
            return _4b7;
        }
        ;
        function _4b9() {
            var _4ba = ibmweb.config.get("opinionlab").intercept;
            if (typeof _4ba == "undefined") {
                return false;
            }
            var _4bb = (ibmweb.info.www) ? "//www.ibm.com/common/scripts/ccf/ccf-intercept-whitelist.js" : "//w3.ibm.com/w3/js/ccf/ccf-intercept-whitelist.js";
            if (typeof ibmweb.config.get("opinionlab").user_whitelist_path !== "undefined") {
                _4bb = ibmweb.config.get("opinionlab").user_whitelist_path;
            }
            _4a2 = dojo.mixin({percent_exception_flag: true, duration_exception_flag: false, whitelist_status: null, url_whitelist_path: _4bb, global_minimum_wait: 30, now: new Date(), content_limit: 400, OLcardObj: null, watermarkImage: "<div style=\"background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAYAAAAYJBvJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAALB1JREFUeNrsfQdcU+f6/wFCJoEACXvJEBAVFHChIlqtAmJV8NYusXW23uttq/56q7VaO7S3w3pbR3Fr1ap1VUVRQBGRDYqAAmGGEbIHYZP/+4Sk/5QCQQwV9Lyfz5EkJx4O5/2+z/N95muQiWH7MHy8qEOJjnZ0KNDBRUcZOtjoqEGHBB0t/kqlkoA/Jxwg6OChoxwdJeioRocMHa0AEPgiDhIcIBoJUqqWIDKNBNF8GQfJiwuQRrUEKetJguAgwSUIT5cE0QzDofwXE3x86G0YZqDEJ78/AAGCWowODjqkPQFkSIOE8v77XpaxsYsVa9b4VmIYtbWffwshOJhpeuHCbD6LZYqWEkE5gPfb4uPDQDNkpBw8EqRaDZDWngAyZEFiYG1NNAoOHgavPTZsGNe4YsXY8n4ChfHDD7MoY8c62f/2W1ghk2mF7D5jfU8iaenSYabvvz/VaP36CYUYZirXUvN/gzTsSlLZWhxEI0E6ervAkAMJdcuW0VYZGdEkLy9bCZfbAp8Fb9o0onXFCr/+AKV4zZrbrQpFG8PFhT7+zJnpjwYAKPL0dBH8tJs+3anM3d25FsPISj1KwycgqRozl6P2g/QqQYYsSCjz5o2CnxsnTcrb+vLLjzKuXlVNQEg/gdKenMyLi46+19zQ0G7l5kadeOZMiDZQYCLNU1KiqlkshrSf6qg1P19Wk5BQBa/dFy92Rvdo0gDSxNOTqTrv6+uSi2EWEv0aEtoSpB77s6OsTxJkSIIE1AzB0pKmmlwGg2YjFPKKN25M15zvD1Act2zxmrlnjz+JRjOC99pAabCyopmsWjWR6OBgrvznPwNBVaAladTTvZkhbiOfPNlOjABGROCyrqxcYXzs2EyxtzeTvX17nkrqvfYas87S0pKPYcTSVasyU778Mi9m+fKyJgQQPUqSrhIE+EeRFkntkwTRDKMVGDZ3yNBztNoVfn5M2rBhjJFTptAEKSl1fs7OLVaRkR41bHYT3cKCYOvvbxF36pTQrLFRQcewNgMdoGN8993LLS0typ2vv15SzeG0u44eTWXY2BAtXnrJIfP0aa4kOZkjMDAgHfroI64ZhjXbowdPxrC/rEDTmJiplPHjXelz5rjmZGXJXZYtG0FksWgUFxdz2zff9FLa2VEbFYoOcwcHqsLIiFiblFRvh64lycwUMTCsCREsmQ36adw5wfomqewuHOSJfofBYI/dmHz7bQBp+nRPxBtaizdsSBUJBMrguLg5fxLniFMs8/Iq/DIhYbi9uzvpp+joIoeEhDx/DBMZdzOhmkFGq90MEcrHd++Kv168uNwFw8SBy5bZzt682RPO17PZitjIyJRmgaAFXcTADT1kdEJG6uaaYisrE5uzZ+eaIW4Dquv0kiXZzUqlke877wwLDA011/6usK6udfe4cXfRH1FljYDXjCQIXLO3e+0nSdW2YiT9AcigVzdgntKiosaCiqE4OjI89++fKTAzMzs+Y8ad8txcOXznQVKS7MRXX3FH+/sbsezsjJrQBBXk5LShJWOMxHdvggSTxMXVwU/PoCBG0IIFph5orikXL+bDZ41yeUdRYWF7sUBAdsCwhiCEGXfEQUk9TCShvr4pecGCWwAsUF1RR46M7VAqDeJXrcr5JiQkK+nUKT5cE75rYWNj7IEsHiT7qaqFgCSengHSb5I6pNQNmI3GkZHeaJUR9v/735V2I0eawMN1DQuze3TtWn3mN9+UnPv++/rqiorWNz/7zCHknXdsjIyNDU9s21ZblZoq9kELFk1uo1E34hvIqEIma5Pl5ysUrq6mDC8v8zGzZ5tjzs40nw8+8CaamZF/XreOc+7bb3nOCDje6ECqoYnYiyqASaYpFM25V67wQFWZWVuTRoaHW9VnZvIYeXnV3Bs3ahNOnRKQnZxM7Dw8KCQGg5h26hSoHAWtc3IHmqT2W40ZDhaJoe3QAoAwtm6dSZ861e1+fLz0UUKC+EhUVA6XzW6EVbrwyBF/+/Hj6eMwrG7NDz/Yogkh1qFzXy9ZUp585Eg9mlQBAoiC0GV1gvlsmZPzOvgsHGNjF9H+97+pBT/+yC64fh0eLDZywQJHmpOTWWFysiTzwgXRaHT9QLQqrZBKMNABaPObNyOsjx8PZhgYNCdERt7RSJR5hw8HEsePt0JSShokEJS3JiWVaP4fMoVpYhW+9EpSy7Q8qU8lQQaVJLG4ePEVoqsrS+7mZpF/8WK9iYmJgVlo6DBDY2MjKw8Pk4rUVJEjm11Vdfkyhzlzpj2sUvTXE/lxcTUNBw8WJF++LP7lu+9EjeXlMmQf88YikMDK15YiQFIt9uwJl9XXN6f99hvf1tOTxhw1ylJOpVLi1qx5mHrpklDa2mq078MPa+L37+chIimaiPT6cKRiyL2oAgC4xa5d4UglmpCdnc1NZ81yLP3110r26dNV1jNnAoBJw8LC7LNu3BA6GhoqRu/dO9mISiXeOH5cVJOeLkLgkSA7uGWwkNRBBxKVt9HAwJCTlsZT2NmZ52dltQTt2DHq/u7dZWVJSTzH0FAHsomJke/cucyyzEwxs7iYW3TlSl2lQkH89bPPuBZo9TgivkARChsQKOSgYkYi1eA4dSrd+saNKCGa3Pr0dAlMMm39+hGkMWMcLn//fa1QLDYY+/LLjPtJSXIjGo1o5+tLlZ87VypJSqqlikRSBAzRGAQ0pGoUugBivHixV4e5uUnc3r11jqNG0U0RKKxmzrQrPX26Eg4ASkFmZtPNo0dFLIVCRjA2bnlUVNRxfscOLiLCIi80mWCF6UHFlKo5SE1/zNxBad3AAzaPiQlv4vEU8fPmJQuVSvLiu3enEalUAr+0tOHSwoWpJu7uNBDXILbBYohbuvSeaWpqFRLRRDgAIMMAJOhhoadlAJID1AJt374gkzlzfOD33Pnii4cG+/Y9cFu71tn2ww+DxFxuCwNJldzYWEH8r79KPzx8eNiDa9f4SStWZCJrSGCKHq4KVDrMZ+A1oLbgdfLBg1W/bNlSP9zfn7T6+HFvMrpfUDc3IyOT4XyhQEAB83kCmky41zwMM29CCxRZShIgw8QnJ63dSRCNitGE+zv0NVfPjJO0KpWGCOgGVGS1TDh7NgTdiDIhOjoFwMB0daWFnz07UVZS0nAxOjoDPgOgWEZGDq9CGHBFD3YSejhIVMuRedAOk0lQAwRGxcqVGeXx8SBysSkbN44EB1vWDz/UKvj8RgAIWBkp1641hC9frjJNH967pxAhixjuAUS/iQ6AwJBlZQnbGhtb4fWwqVOtrC0sOlhZWaXXoqPTNN5b+zVrfDoEgiaEpJopiN+AjwVMXsRz+Og9SJKnBYh2LEY73N+hz7l6ZuqmsaKiqSA7W2I9Z44ziGhbJJZz9+4tZycl8d3DwlS63GHmTJu8vXtLQfWIlUrSwfXra1jo4bigh4tmt9WoF2uj7O5dIX3mTCequTkRTSKrSi43KD1/vspp+nQbUGGBc+aYMZ2cyEBSf/nkk1p0TQla2VJqHy0NRUVFc15WlswuNNTJHFldXjNnWgBnYhUX1xVkZUkFSDL+snFjLQJFwwh0bVu1dQT3DL8DDsKTO856SxjSq4oZFOoGIp9IkZI4Eya4zjp0aCJJLaJ/j4y8R9dSM5rPWtUOLSSepUiCyHqbTG1VAFKDYmKikpixn31W9PD8eZ7fu++6NXd0GN05eVIoQaoNrXApUgVcZBXJevNXAIeibNwYYOTiwhTeuVNd8N//lkjc3KzCDh8er7nXu1FRtyz4fAlIPDmyXHpzwOlBxZRgfcgHGbIg6StQsm/dkl9ZvToPqZdaxEEUoAp0rXYwc8EBt97PL7dRqTRe8b//OY1GZBbOXdm6tbjowIHyZiRFQb2gla5A6ksGPpW+Ak/b03shIuJOO4NBnX/kSADc/+0DB6qFW7emIa4kB8BppIYezVwNSS3uQlI7BmqenglIwF8B0VyYyPrExIq8r74qFJqZmUUcPjxOGyjGFhakvOJiIxDZoNPB2tDFFWC1Q/gdeMHGsDA2s7SUY29p2b4oOXm6Joh3dtmyHGJcHBs4AgM9YFofYjzMpKTXDSkU40P//ncpWEeLP/nE1s7NjXwfkd47iPRajx9vZh8V5XZ03TrOODR5QWi1w7X1GKzrKkGqBoKkDgriCo4n+ttvT9BEc61CQpxnxMXNbhYK235bsiRLQ/oc3nrLvaO4WIyWbvVEtHp0ObQ0oyk/Xy7IyKgFQKzeudPe1tKyY7hAwO1obGyBIGDS77/Lb8XFtaMnb4D4TXNfSCph0iQWAASceXHnzjWJExI4sStWZMG54ZMnW9RimAkxLa2mdN26VD+kthzVFpeeAdI1YWhASOozBwmIbMry5QEgpjdNm1bwQXBwMUwcnPNZt24EPz1dfCk6Oj3l9On6899/L4DPwQJwU1sxvUkP6jffBJL27p0iYLFMH23cmK36v35+tFeTk0PGV1a+QWEyKWkXLghj3nuv3AZdD63yFqM+EsdmgUAlEazd3CiB06eTPcGPIhZXw9/RJJe3C9GfBqplvNpq6S3Go4dYTJW+PKmDTt2AX8Ty2LEF8Bp8Ff8ODHzkhR6qo4cH4fX4eJWu/zYkJMuJza4EH0IDIn3D0cPw0GEmduUKMHEFhw4VleXmNvq+957nMD8/Ewj6Pbh9W7Zn1apKNMF8NJn1yJpp6LMlg+6HERv7irmPjyW8L75xo9be05NKdXIyO7Z5Myfz8OGacKQGRndOHqZnCaIdixlwkvpMJUnj7dtC4B/wGnwV7+3d6+hiadnqXlxcCRMLVkgBm60ik/4YJoQVCY4yXX4E6ltv+YP/Y+/SpY9Lc3MbjKlUQoerq7VEKFT+GhGRvmv+/Lx1kyY9+nnVqnIkkYTo2jx3HZKp64B7KHjrrducBw9ggjAPZK4DQBAQ5WkXL0qQepEykcDRM0C6i8VI/04J8scC/ztUTIe9vWlzXp44bcmSDPf9+8nes2ZZQ46FZ0DANKqJiREBTezdU6cEILJBTFuglWLQR+kE3EaIiC7FwcHEFamXtKtXxRa2tpTpn346PDY8PNkyK6sYEV9DmGikZhptOv0VvUqmFqXSULBzZzFEZ+GewJ9hzeOJ08LDb8a/9JKnoKODIheL2yuysyEcIBuB1I9l/+MvfYnF1DwLCfK3qBtIGIJ8EM37x+fPV9xcu7Yw+Oef/UfOns1SEU2kCq7s2VN/edcuHqiCEPRAXDofkm6vLZp8Vk7OayRLS1VeRk5srGDPypWVP1dWjgGVtjMwMBVdrxqZuA1qr2yHQR8sI3id8dVX95v37MmHewGgwMxAljuaNRqaMSqY0OiXtiELSaExzQ30B5Aei7efhatiQD2u9B07QqT19c2lDx82sZycyExvb4bJiBGmcStW3Kd7e5taubvTCESioVAoxKquXKkGh5Z6UpS9maOU9et92v38LIWpqWIxgWDAmjzZTuVlffy4LWzVKkuGjQ0p8cQJQUFSkgwSiWzVEeHeJpE4f74dceVKX0NEfA2NjQ3tp0yxYTc0GMmysiCe0wb/H6QcSAxIOwSvL/AasLooOsD3FGZu9bNSMQMOEpAg5PXrA0mOjuZntmypOvH557xGsbh5ZEgIg4WAAQC5joBi6u1NB6A4DR9OYjg4GEvj4lTpfD2BBPwrkJNKHjfOmTZxohNp/ny3ksuXa+t5vA77MWMYjug6ZDqdkHr+vABc7cM6E4YkpjqirCBBLI4fX9hOo1GSDh6sVZLJRKSyjMGd3xUohmqOok43VBrqV8Vw1Y6y0i5m7jMtUtQ7SIAnmG3aNN2YyTSB9ywPD2rZ77/XUO7dKxMic9E1OJgFwBBKpR05n31WAJKFbmNDObJ1K7e9tlYO4rsnUsnYty8Uqae2Ux9/XGHt4UGBQKCUQKBk7tlTkXT4MLesrKzth2XLqopu3BC6dYb7+U6dyUe9PmTSe+95QRrB3ZMn689s384vPHWqymP6dHOQSN0BRY+P65nEYp4pSLRTDuMOHuR5TpxoChnsEPyquXy5yig5mcNpaDDgy+WE09u21SGuIJH9/nvZnevXZfz8fDla+VLQ7935GIBQkqdMcc26fFkolEgMgxYutIT8VqWxsbHL+PF0zpEjbGVuLnhlpYhICkchkKBrNVL64K8A1QWSyczOjnI3JqYGmch1DGdnI1ZgoBWcB6BkFxS0tLPZEsj9MNQvQAY0YWhQEVdNyiG8vnPwIOfEli3crvkVSZGRt6kCgbwc0RUk/w1HoskE1zgf/XfwRYAHFI7uVj7U0ULKIRBduB7kgxz66KOaH+7fH1Vx/77s17lz08H/oSl50JVYDBIPc3U1lV25Uieur+8Ynp0dRWUyKUB46+Liyh2Dg63rOJx2rlBImBQebgrm9c2IiNuQEM18ekumu+JtkCC1Wo6yDmyQDL35SaToYTdUVqqcSQGLFtl5+/sTzbOyyq9q5VfQ33prBDjK0GTypqLVCn4QiG+ARxWtfimYp9oAATIJua+GX389QcJg0CsTEjhkdfyFLxIZvrt7tyO8zr55UyZGQAMfC70Pmeeq8spjxxZYbt36kkNS0quSSZMc0jdtyoH7BB+O15tvDodc10wk4a59+22lStoolQZoqZuJVJRE7xJEu+xhUAFEL5IEJtIwKMih+uDBMnZ9vTHU0wIgYMUDQGhpaZym8ePtWVFRHhD8mogeBiQM6SKTQFIhxqPxop6cOzeVIBQ2BB89OsF+1Cgzzfeyrl4V7l61qhJJJR4yd2vBktF1z1C2aWBhQYeSB03W2/klSzL5bHaT93vvDReIxQbleXlNYyZPJo+ZMYMO3Gf32rWVlefPc8IwrHy4yhrWm5n7p7qYAPSdQaJl9AMSk337gmjqNEGYSKiprS8ubgk7e3YiAAUe/rXo6FRyWlp1PYaR++pqhwHhfnBqnfr881qxWIwJExJqQkNDMQMGg5TP5ZoYOziYpl+6JOkQiSDPVRqI1IAXsga0rwvmMuSgtCMVokr2AV4TFTUKyja/CgnJ5QiFxI3nzrlCNBfu9eySJVmy9HSB6bhxlnN37/alW1mR4DpxMTF1Z7dtq/VFEzsNScB+qpuuEuQv4f4A9b0PNpD0W90ABwGACMvK5LVoBYI7/KVDhybRkOUCYX5NSQFIEAAIZGf11dUO6gA8qSWZmQ13zp2TyxISqsJfe404ae/eyQ6zZtmK4+OrRUeO5I8SiSrQpFWBA65rrigAxPzChQjGuXPzylksSygAN1m9egIARKU+zMxoDiJR3fXIyLuae408csSf7uFBc5RK+ZVnzxazU1KEH02b9ggAgq4vHI0Os6dPWu7Wkxrw9AHBwQcSk7VrJ8LPra+8UqbBvabOxG3hQtuLkZGptw4cqAYVAxIEkcl2WIG6EnsarayovLg4VR3M6NmzmSP8/Y3BWjHLzeWovsRkmsL1kPgSIXDUoZvgD+smWGfo6WlmiFSKoq2NIJ83z4fDZJrnLF2a2IIkHpz/8PhxNzNLS0N3gYCbEhWVCECBBKfc4mJj2aNHDfXbtz+MffXVdNPS0lqkHqs1+SzG/c9JbdQiqX8q3g7Qr1n9bExgcI4R333XV0IkGkmQJQFOJOMFC1wlUinW2NSkBHP0+ObNVfbe3jQweV2QySjk8ZoLvvuuGKkCGWR+9eYk0wAEormPsrMl3JQUKcnX18x02DCzoFdfZRk6O9Ps33jDjcRi0S799BOvNjdXFS+xVxNdg268svKCAkXezZu8UpGIOOfTT4ebz5rlkPXTTxWPk5KE7mFhdpDn6jhzpnXB5ctcB4FAWIiId9KZM2JLNJlwv+qk5UZEqsFrq7r/p8hJ7dHM7Q4gW7ZsGTqSBEgpMzf3NYi/0MaOdbT7+OOg8gkT3BDjIhWuXZu6f9q0tIg1a6xUuZ2HD9fLudxGyA+5fuKE5EJMDORsNEOZgqeOnFTVjQQEqFzrDV5eDpAfWrZ9e15NXp7KWvJesMDJ1NubBUnLiYcPC5AV1GDWQ9aXqlQDqRnIKwFJQS4oUOV9mA8bZhJ89mywtKREocnAt3Fzo8BntUjK2PL5ollIdYHEgFRGsJKgwAtem/YvLtNdwlCxNkCsKyuHRLs3Qm8xErMdO2YZkslEqEuBlL2K/PwmDhLHs8PCnIzS07kB8AARuUMHtjkx0ccWEcBTn35aEXfokBjKGqHUUi1BOnrjNhCoa5BIOsBFS7CxofORYPF49Ih7LywsvsLNzWnEa685xv/yi0RcWqoAVztIEfMeQGI0bZq9sb29hfe1a3NpLBa59MKFst/eeisLclCBTM9FpBo4EwAFVCP70aPWLD7fFAFEAoFAXTGefkqQCqxLG8yhApBerRvI9KIvWjQGnFb/XbmyzsvNrX3BRx/Z+Lz8ssoL2cjnNz785JMMs6Ag6+FvvKFq1XDr1CnBqQ0bKhBAhAhAPKdeXOzaKkb7M8gr4Tx4IDEsK+O2FRTwORkZcjSRHdDkBQqcdCUtN02ZYmMXExMKRBre/xQdXSxFxNd53DgTqCF+2hzaJwRIfZdYjKSrBHF0cvrrBYaKCWz83/+Ot/jHP3xLcnIU0traprGhoRZdvwM9y3YHBibT3NzoPKWSyi0tbYEaWqhU81Bni/cqxjZv9pOyWEwjFxcWy82Npil90B5QZIUIZxpU3wPx1ZW03Ozjw3CKjV2kec8pKWn+NSoqw1MgqFNOmGCjycqHrHb21q056JpNmsju35HVjgDyp2cypEGiiIhwGfbjj7O0PxPV1bX+tGEDl1tR0fK/27dd4bP/8/PL8RYKq2lq8Q8qBjynuh44cIeq27flhRhmhuSwGVIx1B2Fhf7gUT24fbvIa+RIoxa5vPW3DRtK/dADR8Dj9cU/gb5gKHj99ZElRKJN2Pr1TgA8SGC+Exl5awJ6n5WY2GQxY4bz8Q0bKsdhWC1c17KPSU79IKl/qovpTsUMBZD0yElaLl2qvs7j3TZduNAbo9FIiadPSx4mJsrRA22Y/vLLf/QNqxMKCehhtwQiFWOI6U7soWg5tGgCgUK+cWMO/erVWvBxyMvL3ck+PhYcZJlk7d5dC22inDvJo858VOA2YJYbUCikaiQhqg8dKvrl4UPhm0eP+kICc2ROjqo7UpVAUBS3YUM+MqGb0fTI6U+fLNSTimF3kSBDtidxj9YNZFox792rLFm3LjV+9eqcMW5uTR/v3Elfsno1MXT7di/4zu/79vFJ6HtQPkBUB9V0ZX4BB2knk8l5167xyJaW1Ml79wYxV60ajiarta20VJUh7z16tBECh2Qa0uPT0YMe3oeKPQguKtF1BTU1rTeuXcNGz5lDt8vIYF9Rx440que3AwcakURqDFTnuuo5qx0AUq5l5kq6UzFDbRB6OaEEtQFV9hMjIijumzcP10hI+KcAmaOnvviCi1akmNnHmhjSv/41Gn4eWb++0sTRkTpq9mwM2j+0u7nZKubMaRTk50vFJBI3Ydeu6jGdK12hq8AJrDBIhpaUl8v2vf8+Z9ry5baf5OaOg3Oyigrp5SlTEo9Onny7zc/PPiU+vtUeSSWQIH1RiU8Ri6kZamZuv0CiAQr4CJovXarIMzVNoYaHeyna2oyvHjggLExMhLYJYsg+t+lDUA1GB41Ghp+z1q51gKRlsJw4aJWFr1zJSqitleUcOcJW7N4NwDMc1gffitoDSwYXvkF7e/OG8+e9/7BykPSgOzubSgMCnCwyM8uJ8fGiUPQnAVF10U/xVE+NdIekmfvUbnnwHSiOHy+Nf/XV1FNvvHFfnphYiQhf9TS1KuiryOZ8+eUD+AkAgQ6Ev+7YwfMYOVLVDqowN7edJxBgUBA+Sd3Eri9tGVry8+USZCqbqoNxRdnZjf+ZN68859YtVaS2XCikQO4KAp4E3TMfUhJM9Zu03LVHmUwtQTqw52T0OQoMDi/oWCxV9/gCjyccT+Kqhn5ohrt2hbi+8sow7c+hfuXziIgSiJFMRg8drquL24DqQqrGtPrAgceFv/8u4QcGDpPQ6YygRYssgDz7I5M94+pV8YFVq0oRr6mEGA9RP0G0JzZzextD2gQeiKHsXHK06lmzRngtWeImk0qVKWfOCB8nJIih/cMUZJKCC7834GlnwP0hoVJTeYmrV+eOQ7zJc/58Z/gs++pV4dH//KfaUiQSgMQDv83fYOY+MUl9YUECZJL02muukA8i1CpywjqfrhF6opRCDGNUYRgdsslsEUeAPBNndf1Kb9eGTDXYVWJbSMiD4JUr7aa++ioT+svXJSRUtyckVBADAlic1lbT7Ph4BbqubCyaTFAxJv0L8feFpHbrScVB0suAjDLa4sX+UIWv8soiq6N0x44s4pUr5Qy1eoK+JJDfAQeABD6HSewqQbqrpoN+7WDSXtqzhxe1bp1NJgIItNaaGBZmtsvJKQ76jTSpe4+AY8+ps09q2wDUxRT1V8UMNZDovRYYAAJlD8fff78YeqtCG23CvHk+ZZ6eDmL1zg8ABvByQkDNRW3mdqdiCMHBw5gffDCZevjwTNvHj5dwg4KcahMSKlUdlxFAQKUA53D18lIBUmhhYY6sljboDYL4DR9ItYn+Saqmy2Gtlpn73JBUvYME8kzkVlY0zW5QsPJBgjxISJAq6XQKhOKh7KGDSqW4rls3Gj1ZuvwJ6o8b6+oaVKtt+nSHto4Ow4yWFqvEL78s05x3HjvWdMOlS57Wbm5UyHXlClVOX5UjsDvJpAcz9y+NdJ8XM3fAQEIJDx9lfe5ceOt//hPY9q9/jaq4fl0In/uFhTGhlTf4QQ7885/lvlOnmtBsbCiPEQ8RPEG2uSwlhfsHYUXSgzBihDW/qKj5xsqVaSClLG1sCGY2NqTrMTFcIKlQvK2nwm1dZu4LIUH65EzDdJihIDVMnJzMhq9ePRoSexJ/+SWRdvNmjetLL6kSiLore2h5AmA2X7tWzV+8WFgrEBiPmjqVvmTbNvtrxsbyxgsXShJWrkyXOTpap8XHQ7eiZsQ/ZFDHA469vyEW0/IiSJCnJq5APglHjsyyDglRmZwQF9kbGZnnYWAgnnn0aKDdU5Y9qBxlCFAFyKDJwDCrsH37Ro2ZM0fVRAaSr02trckn5s5NVRQXyxAioYNiI7SsoKj7uuqZpGpnlOk1FvNcWzfwZ8DecfbvvRegaVgHqYuxkZF3iQJBQ8dLL7kZOjiYpV68KO2t7KE7Pwg47sSHDlVAiSZCkyEPOjQiw8knJiZohDrpCRxwByIicqEk0xfDxCT9Osr0aua+kCCBiTTw8WHV3b8vT7x6tZUREeH66tatKomiKk8wMmoXsdnSk0uXPgZrw7bTFG3QFVTTtMxq4vMbL44dex3KMKzUHYSAHMP2ZgbLlvk2UKn0G8eOSWxEovrpaALBAadHFdPVk6odi9E7BxnS+SS9WTSaxjRmixZhhtOm1V18552HsUZGzXM2bx4OeaRwjltTo6rAh1oVTRxGV56JcWioKg0y4dgxHlIzFtBhQAMSAJc3kkZl+/dnV6BfPQoBXJPVPkCe1K6xmBd2j+onAglkzwNARIgTlBYWtkB8xGPmTJvQmBjDpOXLs449eCAJ2rRpRC2H03F448Z6NIkG4MjSpQrAQwsbImoccPdu3VL9n66RWgDKcHWYX6l+T9FvuF+7ePu5SBj6201gYmSkKtno+NattSQ6naDZLgx4wpSYGH8jNlt0NSLiTuy77953FolqYWuRvpikHVxuy8O3347XFE6t/PZbe4alpYEBSN4u3zVWdxvSFHoNAEnV3nn7hTFznxok4GonffPNOGFVVTPUwtAYDKORU6aY3vz555qbJ06o9uWFLHqvjRtHoglsRjyBMxMdPn2ImagccEuXusnu3hXGLlmiyiJzcHcnRZ09G1jBZDIHYsfvHkjqXxrpvugSpM8gATIJ1f2MRYv8bp07p4gJC8sNWbRIZd7ePnpUwLKwaIeeHr98/TVvzwcf1EPcxKYzsafXZnPaW51Zbd06Y2x29nyWqytJ0xUavKhBZ85MezQwW8Pr3HkbB0gfQaLaXfvnn1VloFB0lZGerkQmjMycwVA9wG9yc319Z89mFt6+LUr48UfocihE5+VdeYIqKowsIrBQwLzVAE9JoZBST5/mAsigY7P/5s1jKtLT5WfVQIHCqUw+3xQ2KRggCaLtSX1hYjF6BQlktWvIpNLERLX7E2zNUbVtWwbsZacimVeuSE588QUUbYs19TbaZi4Agnnnzmv0jz6aloNh5rCztvHcuaqko3M7dlTvWbeufnNgYC74PcDf4rZ0qWtTejrv/Lx5yedWry6A30nUX8W9tgThY3/eeRuXIP0BycN5826AdxNeL16/3sopIEDVLM/w7l3uxYCA65/4+WUeWr26FBJ7IG/DpZu2EtT33w+AUtGUkye5WFSUl4jJpMNeM3DO1N6eYodANw1NkjA2VrXLpcv48Qy0nInWRUW1szozyvq8+UA/JUgNLkGewgSm83jyOwsX3p545kwI+D/ePHZsdGx0dCM1LY3ti2Eia6GwETgIuMOBh3RnjrYpO7tY+oSGWlu8/bYDJzWVVZWYyIFOv3NWrLCiEwjNxnFxCs9XXrGH7539+ut6dD0jyNK36UP/1X4CpLQbKwaXIP3xuCo7ZbAxkEcNUFQJP/PmJXkUFVVBEzxNy8qeJrJ+xAgrz3Pnwonq2tzvo6NL5QkJlcuuXvWzHTmSof3d8v+f68qZiv4r/emzyXoycwcsFvM8elx7VTcw8ZCU7MXn19/TavSSXlRE5qnJpAHW+17v5kymgQYgMKI2bbInWloSr4eGJt89eLAKao2L0XFl3z7epxERZZDr6qZOFhoAM7e0G0cZrmKeRpJ0J1HA2gAyCVzBrQ/Jxc0AxB9/DLmXlUWIWL/eUVObGx8ZecdIIFBUIK2G5H/nBkmI00C431M/IOkai2EPRoA8VwE+DVDAHAVyCmSyL8VTkFIAGfIPMMzCOCDA+i3EazTtH25HRt5mCgQStUiD9pqt4En9OzY1HCwc5LnKcdWoHjBxnXX0HenCjJUQhIOmel6ZmYXQjVHT19VqzZrRUMcDVpFXZ7CuaQBqc9ndcBCcpA4ESLT5h84964KDme1WVmRwnGkCcVadDWganJBlBDuFwxZqJ7du5QqeMFvtCSVIOdalkS7OQQZQ3fRlaNo/ECwsTNobG1uLdu26r/jpp0LtlliabV7zMYwxgPvm/i0JQ7i6eVK0WVsTobKutaPDKOPMmTrIbvf+v/8LIGzbFoTkPa1Z/btA/YBUGeBNDbW3RcU9qYMFJOTVq1VpBL998QXncV5eK5BTcNnLyGQ6YeXKUWg5U1q1gAJF27r6uvaTg2i3f3juireHNEiaxGKVyRr+0UfOb3z2mSNsdVaUmiqf/I9/sDBbW2h5RZfof8+/rtFc7VgMTlIHA0hAxRjPn28P0V3uzp1s2FUTdnmAZKRL+/aJ/IKCVA43TkVFB7dz3zrDAQBIVwmCJwwNFuKqXfNbeekSu2TNmgyz11938f/qqwna34Miqo9DQorGYlhtSP+b9/eFpP5pU8OhIkGey0RoGJDrCvkgDTxeU/GtW9KkQ4cUMz7/PKAhJaX20IwZd0d9+OEIKOK+ERPD42RnQ99VaL0tNRuYWEw59px2GBoykkS9e6Zvzbp1uRDlVe3be+9eZBuJRDn5+ee1wdHR1rDdu+b7pyIj02rT06VSdTkntJWA7kVQ3U/Xb/sH7XB/9VCTIM+VJLG4cCGCYG9vQWUyWYXR0SnQjN+CTCZRLC0pb+/cqerlCv3JOEVFze5jxlBZs2c7SdPTc/wwTAD75vbUVkJPJBXPah8MxLXu5MnHKsRPn+7guH9/MBRIPf722/tSdWba3cuXZetDQysep6erOgBk3bnTDFuNQEdGl17aSujRzMVJ6rNWN7Ww49XKlWODNm4cCe8Lrl+vz16+PFWM1EkxEjRrL13yodLphtBmAlIQv4iIKBmPJm8qIpS62mv2EyClQ5WkDlV1Y9gdBzE9cSJEbGVlAr1EoMZFuW/fg8TPPy+A81BjMyYmZgICQMuKd981gk6KABBo/7BzyRJVPojLwOSDaEgqG8NzUp+tJLFEpBQ4CLSxSl6w4JY7n88Hr2gFsnpbV6zwC9m0aQR8796hQ5X1n36agWaPUGJhYVsnFBoigMhGIS4C5Zj0QdqjDJckepAkGg4CbawCz5yZAYlG4CxTbS3288+5D8+dg3gI5jlnjm0+UjdmsMmxUFgxG63yGWgCkU6S6DlhCI/FDDaQ8HftKr77xRcP4TXkfEBuqzZQjLKyKtSzaID4iglEd8dimCiws+ZGoefSSzwWMxhBwuzCQTRAKfX0tIddvl1Xr1Zt8ZqTkCBTqlNL+ppn0g8O8pdNDXEJMkisG4jWIoZI5b/8sufsnTv9NLt6awbkqG5asKDSSSSC2hiOS+ek6hsg2irmua3NHbL5JKBCYOKtr19/BLuEQxmm5lzqlSsSBJAqM5FIBEnLmv4heiapePH2UPGTQBZZHYaRcxFBlfn7O2dlZYGvvQ3MXD9EX6Cpv64+8P2UIHpppItLkr/JmQZAgSa90LMMHGjkznzVJpAgA9RpuUTbzB3sGysPxBhysRtwqQOZBe8pEFVoLEPQz8R1F4v5024PLyJABuMgPMEXlZj+Jq2nrPY/YjE4QIYgSPQpTTEdxdv+ysEmcHGQPCuAaMdi/iic8sfx8UKDROemhjhAXmyQ9NSjrAaXIDhIejJz2bgEwUHSE0DYXQCCS5AXHCS6GukCQPBo7gsMkt4ShnAVg4NE987bOEBebJDo3O0BB8iLDRKdsRgcIC82SHAzFwfJE5NUHCA4SHqUIBU4ScVB0hNA6nGSioNEF0ktw0kqDhKcpOIg6beK6brzNi5BXnCQ9CVhCI/FvMAgwROGcJA8EUktx81cHCR9Jam4mYuDBI/F4KN3kPRGUmU4ScVB0lvCEK5icJD0GIvBVQwOkr8ApF7LiqnFzVwcJN2RVDwWg48/gaQnkoo7yvDxB0h6i8XgAMGHCiR48TY+dIIEj8XgQydIynEzFx+6QKLtScUlCD7+MqCxnhWmbsWNu9rx0RNISLgEwYcukBjgAMFHryDB8YEPXeP/CTAAf3oHi2QB+X0AAAAASUVORK5CYII=) no-repeat scroll 0px 0px transparent; height: 136px; width: 135px; z-index: 9999; position: absolute;\">&nbsp;</div>", defaults: {customVariables: {}, emailInfoLoaded: false}, intercept: dojo.mixin({interceptDisp: "pageLoad", surveyDisp: "immediate", anon: "true", anonData: {userName: "", userEmail: "", emailInfoLoaded: true}, percent: 26, start: "Jan 01 2014", stop: "Dec 31 2099", presentDelay: 3, invitation: {title: "Tell IBM what you think", content: "Would you please take 1 minute to take this survey?", yes_label: "Yes", no_label: "No thanks"}, survey: {type: "asm", id: "11320", width: 533, height: 417, metaData: ""}}, _4ba)});
            _4a3 = "ccf-" + _4a2.intercept.survey.type + ":" + _4a2.intercept.survey.id;
            dojo.io.script.get({url: _4a2.url_whitelist_path});
            setTimeout(function () {
                _4a2.whitelist_status = true;
            }, 4000);
            var _4bc = _4a2.intercept.invitation, _4bd = "entry", _4be = null;
            var _4bf = "<p style=\"padding-bottom: 3px;padding-top: 8px;\">Your feedback is anonymous</p>";
            if (_4a2.intercept.anon == "auto") {
                _4a2.intercept.anonData.emailInfoLoaded = false;
                _4f1();
            }
            var _4c0, _4c1;
            ibmweb.queue.push(function () {
                if (!_4a2.whitelist_status || !_4a2.intercept.anonData.emailInfoLoaded) {
                    return false;
                } else {
                    return true;
                }
            }, function () {
                if (!_4a7()) {
                    return false;
                } else {
                    _4a2.intercept.survey.url = _4e7();
                    if (_4a2.intercept.interceptDisp != "pageLoad") {
                        _4bd = "exit";
                    }
                    _4a4 = "{\"date\": " + new Date().getTime() + ",\"type\": \"" + _4a2.intercept.survey.type + "\",\"id\": \"" + _4a2.intercept.survey.id + "\"}";
                    ibmweb.queue.push(function () {
                        if (typeof dijit.byId("dialog_sp-intercept-overlay-invitation") != "undefined" && !dijit.byId("dialog_sp-intercept-overlay-invitation").open) {
                            return true;
                        } else {
                            return false;
                        }
                    }, function () {
                        ibmStats.event({"ibmEV": "ol survey", "ibmEvGroup": _4a2.intercept.survey.type, "ibmEvModule": _4a2.intercept.survey.id, "ibmEvAction": "intercept shown"});
                        _4a9("ccf-global-intercept", _4a4, new Date((new Date()).getTime() + (_4a2.global_minimum_wait * 24 * 60 * 60 * 1000)));
                        _4a9(_4a3, _4a4, end);
                    });
                    if (_4a2.intercept.anon == "auto") {
                        var _4c2 = _4fc();
                        if (_4c2 != "") {
                            _4bf = _4c2;
                        }
                    }
                    var html = "";
                    if (_4a2.intercept.survey.type == "comment_card") {
                        var _4c3 = "<div class=\"ibm-common-overlay\" id=\"sp-intercept-overlay-invitation\">\n\t<div class=\"ibm-head\">\n\t\t<p><a class=\"ibm-common-overlay-close\" href=\"#close\">Close [x]</a></p>\n\t</div>\n\t<div class=\"ibm-body\">\n\t\t\n\t\t{{watermark}}\n\t\t<div class=\"ibm-main\">\n\t\t\t<a class=\"ibm-access\"><!-- Accessibility anchor --></a>\n\t\t\t\n\t\t\t<div class=\"overlay-content-slide active\" data-slide=\"main\">\n\t\t\t\t<div class=\"ibm-container ibm-alternate\" style=\"\">\n\t\t\t\t\t<div class=\"ibm-container-body\">\n\t\t\t\t\t\t{{content}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"overlay-content-slide\" style=\"display: none;\" data-slide=\"about\">\n\t\t\t\t<div class=\"ibm-title\">\n\t\t\t\t\t<h2>Ongoing Web Feedback at IBM</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-container ibm-alternate\" style=\"\">\n\t\t\t\t\t<div class=\"ibm-container-body\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIBM collects opt-in feedback from IBM web users on a broad and continual basis throughout its web sites.\n\t\t\t\t\t\t\tAll feedback submitted are reviewed only by IBM employees or IBM affiliates and no feedback is shared outside\n\t\t\t\t\t\t\tof IBM for any reason. See IBM's <a href=\"http://www.ibm.com/privacy/us/en/?lnk=flg-priv-usen\" target=\"_ibm_privacy_policy\" data-action=\"close-overlay\">privacy policy</a> and <a href=\"http://www.ibm.com/legal/us/en/?lnk=flg-tous-usen\" data-action=\"close-overlay\" target=\"_ibm_tou\">terms of use</a> for further detail.\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIBM may use a third party to collect or process feedback. Any such party is also bound by the IBM policy.\n\t\t\t\t\t\t\tCurrently we use opinionlab for feedback processing.\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-external-link\" data-action=\"change-slide\" data-slide-target=\"leaving\">opinionlab</a>\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tYour input is very valuable to us and although we read every comment that is sent to IBM in an effort to continuously\n\t\t\t\t\t\t\timprove our web sites for you, we generally do not reply to comments from this system unless otherwise stated.\n\t\t\t\t\t\t\tThank you for participating in the IBM web feedback program.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-buttons-row\">\n\t\t\t\t\t<div class=\"ibm-rule\"><hr /></div>\n\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-btn-sec\" data-action=\"change-slide\" data-slide-target=\"main\">Back to Feedback</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"overlay-content-slide\" style=\"display: none;\" data-slide=\"leaving\">\n\t\t\t\t<div class=\"ibm-title\">\n\t\t\t\t\t<h2>Leaving the IBM Web Site</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-container ibm-alternate ibm-buttons-last\" style=\"\">\n\t\t\t\t\t<div class=\"ibm-container-body\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tYou are now leaving the IBM Web site. IBM makes no representations or warranties about any other Web site which\n\t\t\t\t\t\t\tyou may access through this one. When you access non-IBM Web sites, even though they might contain the IBM logo\n\t\t\t\t\t\t\tand content regarding IBM's products and services, such Web sites are independent of IBM and IBM has no control\n\t\t\t\t\t\t\tover the operation of non-IBM Web sites. In addition, a link to a non-IBM Web site does not mean that IBM endorses\n\t\t\t\t\t\t\tthat Web site or has any responsibility for the use of such Web site.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-buttons-row\">\n\t\t\t\t\t<div class=\"ibm-rule\"><hr /></div>\n\t\t\t\t\t<a href=\"//secure.opinionlab.com/about_this_system.html\" target=\"_about_opinion_lab\" class=\"ibm-btn-pri\" data-action=\"change-slide\" data-slide-target=\"main\" style=\"float: right; display: inline;\">Continue</a>\n\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-btn-sec\" data-action=\"change-slide\" data-slide-target=\"main\">Cancel</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"ibm-footer\"></div>\n</div>\n\n\n<div class=\"ibm-common-overlay\" id=\"sp-intercept-overlay-survey\" style=\"width: {{survey_width}}px;\">\n\t<div class=\"ibm-head\">\n\t\t<p><a class=\"ibm-common-overlay-close\" href=\"#close\">Close [x]</a></p>\n\t</div>\n\t<div class=\"ibm-body\">\n\t\t<div class=\"ibm-main\" style=\"padding: 0;\">\n\t\t\t<a class=\"ibm-access\"><!-- Accessibility anchor --></a>\n\t\t\t<div class=\"ibm-title\" style=\"display: none;\">\n\t\t\t\t<h2>Survey!!!</h2>\n\t\t\t</div>\n\t\t\t<div class=\"ibm-container ibm-alternate\" style=\"padding: 0;\">\n\t\t\t\t<div class=\"ibm-container-body\">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"ibm-footer\"></div>\n</div>", html = _4c3.split("{{content}}").join("<div id=\"commentCardContent\"></div>").split("{{anonymity}}").join(_4bf).split("{{watermark}}").join(_4b6());
                        var _4c4 = dojo.mixin({container: "commentCardContent", ccid: 444, type: {display: "inline", form: "inline"}, heading: _4bc.title, description: _511(_4bc.content, _4a2.content_limit)}, _4a2.intercept.survey.commentCard);
                    } else {
                        if (_4a2.intercept.survey.type == "OLcard") {
                            var _4c3 = "<div class=\"ibm-common-overlay\" id=\"sp-intercept-overlay-invitation\">\n\t<div class=\"ibm-head\">\n\t\t<p><a class=\"ibm-common-overlay-close\" href=\"#close\">Close [x]</a></p>\n\t</div>\n\t<div class=\"ibm-body\">\n\t\t\n\t\t{{watermark}}\n\t\t<div class=\"ibm-main\">\n\t\t\t<a class=\"ibm-access\"><!-- Accessibility anchor --></a>\n\t\t\t\n\t\t\t<div class=\"overlay-content-slide active\" data-slide=\"main\">\n\t\t\t\t<div class=\"ibm-title\">\n\t\t\t\t\t<h2>{{title}}</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-container ibm-alternate\" style=\"\">\n\t\t\t\t\t<div class=\"ibm-container-body\">\n\t\t\t\t\t\t<p>{{content}}</p>\n\t\t\t\t\t\n\t\t\t\t\t\t{{anonymity}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-buttons-row\" style=\"text-align: right;\">\n\t\t\t\t\t<div class=\"ibm-rule\"><hr /></div>\n\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-btn-pri\" data-action=\"opt-in\">{{yes_label}}</a>\n\t\t\t\t\t&nbsp;&nbsp;\n\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-btn-sec\" data-action=\"opt-out\">{{no_label}}</a>\n\t\t\t\t\t&nbsp;&nbsp;\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t<a href=\"javascript:;\" data-action=\"change-slide\" data-slide-target=\"about\">About feedback at IBM</a>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t\t<div class=\"overlay-content-slide\" style=\"display: none;\" data-slide=\"about\">\n\t\t\t\t<div class=\"ibm-title\">\n\t\t\t\t\t<h2>Ongoing Web Feedback at IBM</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-container ibm-alternate\" style=\"\">\n\t\t\t\t\t<div class=\"ibm-container-body\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIBM collects opt-in feedback from IBM web users on a broad and continual basis throughout it's web sites.\n\t\t\t\t\t\t\tAll feedback submitted are reviewed only by IBM employees or IBM affiliates and no feedback is shared outside\n\t\t\t\t\t\t\tof IBM for any reason. See IBM's <a href=\"http://www.ibm.com/privacy/us/en/?lnk=flg-priv-usen\" target=\"_ibm_privacy_policy\" data-action=\"close-overlay\">privacy policy</a> and <a href=\"http://www.ibm.com/legal/us/en/?lnk=flg-tous-usen\" data-action=\"close-overlay\" target=\"_ibm_tou\">terms of use</a> for further detail.\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIBM may use a third party to collect or process feedback. Any such party is also bound by the IBM policy.\n\t\t\t\t\t\t\tCurrently we use opinionlab for feedback processing.\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-external-link\" data-action=\"change-slide\" data-slide-target=\"leaving\">opinionlab</a>\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tYour input is very valuable to us and although we read every comment that is sent to IBM in an effort to continuously\n\t\t\t\t\t\t\timprove our web sites for you, we generally do not reply to comments from this system unless otherwise stated.\n\t\t\t\t\t\t\tThank you for participating in the IBM web feedback program.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-buttons-row\">\n\t\t\t\t\t<div class=\"ibm-rule\"><hr /></div>\n\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-btn-sec\" data-action=\"change-slide\" data-slide-target=\"main\">Back to Feedback</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"overlay-content-slide\" style=\"display: none;\" data-slide=\"leaving\">\n\t\t\t\t<div class=\"ibm-title\">\n\t\t\t\t\t<h2>Leaving the IBM Web Site</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-container ibm-alternate ibm-buttons-last\" style=\"\">\n\t\t\t\t\t<div class=\"ibm-container-body\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tYou are now leaving the IBM Web site. IBM makes no representations or warranties about any other Web site which\n\t\t\t\t\t\t\tyou may access through this one. When you access non-IBM Web sites, even though they might contain the IBM logo\n\t\t\t\t\t\t\tand content regarding IBM's products and services, such Web sites are independent of IBM and IBM has no control\n\t\t\t\t\t\t\tover the operation of non-IBM Web sites. In addition, a link to a non-IBM Web site does not mean that IBM endorses\n\t\t\t\t\t\t\tthat Web site or has any responsibility for the use of such Web site.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-buttons-row\">\n\t\t\t\t\t<div class=\"ibm-rule\"><hr /></div>\n\t\t\t\t\t<a href=\"//secure.opinionlab.com/about_this_system.html\" target=\"_about_opinion_lab\" class=\"ibm-btn-pri\" data-action=\"change-slide\" data-slide-target=\"main\" style=\"float: right; display: inline;\">Continue</a>\n\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-btn-sec\" data-action=\"change-slide\" data-slide-target=\"main\">Cancel</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"ibm-footer\"></div>\n</div>\n\n\n<div class=\"ibm-common-overlay\" id=\"sp-intercept-overlay-survey\" style=\"width: {{survey_width}}px;\">\n\t<div class=\"ibm-head\">\n\t\t<p><a class=\"ibm-common-overlay-close\" href=\"#close\">Close [x]</a></p>\n\t</div>\n\t<div class=\"ibm-body\">\n\t\t<div class=\"ibm-main\" style=\"padding: 0;\">\n\t\t\t<a class=\"ibm-access\"><!-- Accessibility anchor --></a>\n\t\t\t<div class=\"ibm-title\" style=\"display: none;\">\n\t\t\t\t<h2>Survey!!!</h2>\n\t\t\t</div>\n\t\t\t<div class=\"ibm-container ibm-alternate\" style=\"padding: 0;\">\n\t\t\t\t<div class=\"ibm-container-body\">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"ibm-footer\"></div>\n</div>", html = _4c3.split("{{title}}").join(_4bc.title).split("{{content}}").join(_511(_4bc.content, _4a2.content_limit)).split("{{yes_label}}").join(_4bc.yes_label).split("{{no_label}}").join(_4bc.no_label).split("{{anonymity}}").join(_4bf).split("{{watermark}}").join(_4b6());
                        } else {
                            var _4c3 = "<div class=\"ibm-common-overlay\" id=\"sp-intercept-overlay-invitation\">\n\t<div class=\"ibm-head\">\n\t\t<p><a class=\"ibm-common-overlay-close\" href=\"#close\">Close [x]</a></p>\n\t</div>\n\t<div class=\"ibm-body\">\n\t\t\n\t\t{{watermark}}\n\t\t<div class=\"ibm-main\">\n\t\t\t<a class=\"ibm-access\"><!-- Accessibility anchor --></a>\n\t\t\t\n\t\t\t<div class=\"overlay-content-slide active\" data-slide=\"main\">\n\t\t\t\t<div class=\"ibm-title\">\n\t\t\t\t\t<h2>{{title}}</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-container ibm-alternate\" style=\"\">\n\t\t\t\t\t<div class=\"ibm-container-body\">\n\t\t\t\t\t\t<p>{{content}}</p>\n\t\t\t\t\t\n\t\t\t\t\t\t{{anonymity}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-buttons-row\" style=\"text-align: right;\">\n\t\t\t\t\t<div class=\"ibm-rule\"><hr /></div>\n\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-btn-pri\" data-action=\"opt-in\">{{yes_label}}</a>\n\t\t\t\t\t&nbsp;&nbsp;\n\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-btn-sec\" data-action=\"opt-out\">{{no_label}}</a>\n\t\t\t\t\t&nbsp;&nbsp;\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t<a href=\"javascript:;\" data-action=\"change-slide\" data-slide-target=\"about\">About feedback at IBM</a>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t\t<div class=\"overlay-content-slide\" style=\"display: none;\" data-slide=\"about\">\n\t\t\t\t<div class=\"ibm-title\">\n\t\t\t\t\t<h2>Ongoing Web Feedback at IBM</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-container ibm-alternate\" style=\"\">\n\t\t\t\t\t<div class=\"ibm-container-body\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIBM collects opt-in feedback from IBM web users on a broad and continual basis throughout it's web sites.\n\t\t\t\t\t\t\tAll feedback submitted are reviewed only by IBM employees or IBM affiliates and no feedback is shared outside\n\t\t\t\t\t\t\tof IBM for any reason. See IBM's <a href=\"http://www.ibm.com/privacy/us/en/?lnk=flg-priv-usen\" target=\"_ibm_privacy_policy\" data-action=\"close-overlay\">privacy policy</a> and <a href=\"http://www.ibm.com/legal/us/en/?lnk=flg-tous-usen\" data-action=\"close-overlay\" target=\"_ibm_tou\">terms of use</a> for further detail.\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIBM may use a third party to collect or process feedback. Any such party is also bound by the IBM policy.\n\t\t\t\t\t\t\tCurrently we use opinionlab for feedback processing.\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-external-link\" data-action=\"change-slide\" data-slide-target=\"leaving\">opinionlab</a>\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tYour input is very valuable to us and although we read every comment that is sent to IBM in an effort to continuously\n\t\t\t\t\t\t\timprove our web sites for you, we generally do not reply to comments from this system unless otherwise stated.\n\t\t\t\t\t\t\tThank you for participating in the IBM web feedback program.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-buttons-row\">\n\t\t\t\t\t<div class=\"ibm-rule\"><hr /></div>\n\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-btn-sec\" data-action=\"change-slide\" data-slide-target=\"main\">Back to Feedback</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"overlay-content-slide\" style=\"display: none;\" data-slide=\"leaving\">\n\t\t\t\t<div class=\"ibm-title\">\n\t\t\t\t\t<h2>Leaving the IBM Web Site</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-container ibm-alternate ibm-buttons-last\" style=\"\">\n\t\t\t\t\t<div class=\"ibm-container-body\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tYou are now leaving the IBM Web site. IBM makes no representations or warranties about any other Web site which\n\t\t\t\t\t\t\tyou may access through this one. When you access non-IBM Web sites, even though they might contain the IBM logo\n\t\t\t\t\t\t\tand content regarding IBM's products and services, such Web sites are independent of IBM and IBM has no control\n\t\t\t\t\t\t\tover the operation of non-IBM Web sites. In addition, a link to a non-IBM Web site does not mean that IBM endorses\n\t\t\t\t\t\t\tthat Web site or has any responsibility for the use of such Web site.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-buttons-row\">\n\t\t\t\t\t<div class=\"ibm-rule\"><hr /></div>\n\t\t\t\t\t<a href=\"//secure.opinionlab.com/about_this_system.html\" target=\"_about_opinion_lab\" class=\"ibm-btn-pri\" data-action=\"change-slide\" data-slide-target=\"main\" style=\"float: right; display: inline;\">Continue</a>\n\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-btn-sec\" data-action=\"change-slide\" data-slide-target=\"main\">Cancel</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"ibm-footer\"></div>\n</div>\n\n\n<div class=\"ibm-common-overlay\" id=\"sp-intercept-overlay-survey\" style=\"width: {{survey_width}}px;\">\n\t<div class=\"ibm-head\">\n\t\t<p><a class=\"ibm-common-overlay-close\" href=\"#close\">Close [x]</a></p>\n\t</div>\n\t<div class=\"ibm-body\">\n\t\t<div class=\"ibm-main\" style=\"padding: 0;\">\n\t\t\t<a class=\"ibm-access\"><!-- Accessibility anchor --></a>\n\t\t\t<div class=\"ibm-title\" style=\"display: none;\">\n\t\t\t\t<h2>Survey!!!</h2>\n\t\t\t</div>\n\t\t\t<div class=\"ibm-container ibm-alternate\" style=\"padding: 0;\">\n\t\t\t\t<div class=\"ibm-container-body\">\n\t\t\t\t\t<iframe src=\"{{survey_url}}\" width=\"{{survey_width}}\" height=\"{{survey_height}}\" frameborder=\"0\"></iframe>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"ibm-footer\"></div>\n</div>", html = _4c3.split("{{title}}").join(_4bc.title).split("{{content}}").join(_511(_4bc.content, _4a2.content_limit)).split("{{yes_label}}").join(_4bc.yes_label).split("{{no_label}}").join(_4bc.no_label).split("{{survey_url}}").join(_4a2.intercept.survey.url).split("{{survey_width}}").join(_4a2.intercept.survey.width).split("{{survey_height}}").join(_4a2.intercept.survey.height).split("{{anonymity}}").join(_4bf).split("{{watermark}}").join(_4b6());
                        }
                    }
                    html += "<style type=\"text/javascript\">div.ibm-common-overlay div.overlay-content-slide { display: none; } div.ibm-common-overlay div.overlay-content-slide.active { display: block; }</script>";
                    try {
                        var _4c5 = html.match(/class="ibm-common-overlay" id="[^"]*"/g);
                        _4c1 = _4c5[0].substring(31, _4c5[0].length - 1);
                        _4c0 = _4c5[1].substring(31, _4c5[1].length - 1);
                        dojo.place(html, dojo.query("body")[0], "last");
                        dojo.query("[data-action]", dojo.byId(_4c1)).connect("click", function () {
                            actions = dojo.attr(this, "data-action").split(/,[\s]*/g);
                            var _4c6 = dojo.attr(this, "data-slide-target");
                            dojo.forEach(actions, function (_4c7) {
                                switch (_4c7) {
                                    case "change-slide":
                                        dojo.query("div.overlay-content-slide", dojo.byId(_4c1)).style("display", "none");
                                        dojo.query("div.overlay-content-slide[data-slide='" + _4c6 + "']", dojo.byId(_4c1)).style("display", "block");
                                        var top = Math.max(0, Math.floor((dojo.window.getBox().h - dojo.marginBox(dojo.byId("dialog_" + _4c1)).h) / 2));
                                        dojo.query("#dialog_" + _4c1).style("top", top + "px");
                                        break;
                                    case "opt-in":
                                        ibmStats.event({"ibmEV": "ol survey", "ibmEvGroup": _4a2.intercept.survey.type, "ibmEvModule": _4a2.intercept.survey.id, "ibmEvAction": "intercept yes clicked"});
                                        if (_4a2.intercept.survey.type == "OLcard") {
                                            _4a2.OLcardObj.show();
                                            ibmweb.queue.push(function () {
                                                if (typeof _4a2.OLcardObj.onPageCardVisible == "undefined") {
                                                    return false;
                                                } else {
                                                    return true;
                                                }
                                            }, function () {
                                                _4a2.OLcardObj.show();
                                                ibmweb.overlay.hide(_4c1);
                                            });
                                        } else {
                                            var _4c8 = dojo.query("input[name='anonymity']:checked", dojo.byId("anonimityForm"))[0];
                                            if (ibmweb.config.get("opinionlab").requirePrompt && typeof _4c8 === "undefined") {
                                                alert("Please select a anonymity data.");
                                                return;
                                            }
                                            if (_4a2.intercept.survey.type == "userzoom") {
                                                ibmweb.overlay.hide(_4c1);
                                                window.open(_4a2.intercept.survey.url, "_blank");
                                                return;
                                            }
                                            if (typeof _4c8 !== "undefined" && _4c8.value == "yes") {
                                                var _4c9 = _506();
                                                var _4ca = dojo.query("iframe", dojo.byId(_4c0))[0];
                                                if (_4c9 != "") {
                                                    var src = dojo.attr(_4ca, "src") + "&" + _4c9;
                                                    dojo.attr(_4ca, "src", src);
                                                }
                                            }
                                            if (_4a2.intercept.surveyDisp == "siteExit" || _4a2.intercept.surveyDisp == "pageExit") {
                                                ibmweb.overlay.hide(_4c1);
                                                _4a6 = true;
                                                _4cb(_4c0, "exit");
                                            } else {
                                                ibmweb.overlay.hide(_4c1);
                                                ibmweb.overlay.show(_4c0);
                                            }
                                        }
                                        break;
                                    case "opt-out":
                                        ibmweb.overlay.hide(_4c1);
                                        break;
                                    }
                            });
                        });
                        if (_4a2.intercept.survey.type == "comment_card") {
                            ibmweb.queue.push(function () {
                                if (dojo.byId("commentCardContent") == null) {
                                    return false;
                                } else {
                                    return true;
                                }
                            }, function () {
                                var cu = new ibmweb.opinionlab.customSurvey(_4c4);
                                cu.initSurvey();
                                _4cb(_4c1, _4bd);
                            });
                        } else {
                            _4cb(_4c1, _4bd);
                        }
                    } catch (er) {
                    }
                }
            });
        }
        ;
        function _4b1() {
            if (_4a2.intercept.interceptDisp == "pageExit" && _4a2.intercept.surveyDisp != "immediate") {
                _4a2.intercept.surveyDisp = "immediate";
            }
            if (_4a2.intercept.interceptDisp == "siteExit" && _4a2.intercept.surveyDisp != "immediate") {
                _4a2.intercept.surveyDisp = "immediate";
            }
            if (_4a2.intercept.interceptDisp == "siteExit" || _4a2.intercept.surveyDisp == "siteExit") {
                if (typeof (_4a2.intercept.exitURL) == "undefined" || _4a2.intercept.exitURL.length <= 0) {
                    return false;
                } else {
                    if (!_4cc()) {
                        return false;
                    }
                }
            }
            return true;
        }
        ;
        function _4cb(_4cd, _4ce) {
            var _4cf = _4a2.intercept.invitation, _4d0 = _4a2.intercept.survey, _4d1 = _4a2.intercept.presentDelay * 1000;
            if (_4ce == "entry") {
                setTimeout(function () {
                    ibmweb.overlay.show(_4cd);
                }, _4d1);
            } else {
                if (_4ce == "exit") {
                    _4d2(_4cd);
                }
            }
        }
        ;
        var _4d2 = function (_4d3) {
            var _4d4 = "#ibm-masthead a";
            var _4d5 = "#ibm-footer-module a";
            var _4d6 = "a.ibm-intercept-exit-survey";
            var _4d7 = false;
            var _4d3 = _4d3;
            var _4d8 = {url: ""};
            Array.prototype.diff = function (a) {
                return this.filter(function (i) {
                    return a.indexOf(i) < 0;
                });
            };
            function _4d9() {
                dojo.query(_4d4).onclick(function (evt) {
                    var _4da = evt.currentTarget.parentElement.parentElement;
                    if (evt.currentTarget.href != "" && evt.currentTarget.href.substr(0, 1) != "#" && _4da.id != "ibm-menu-links") {
                        evt.preventDefault();
                        _4d8.target = evt.currentTarget.target;
                        _4d8.url = evt.currentTarget.href;
                        _4db();
                    }
                });
                dojo.query(_4d5).onclick(function (evt) {
                    if (evt.currentTarget.href != "" && evt.currentTarget.href.substr(0, 1) != "#") {
                        evt.preventDefault();
                        _4d8.target = evt.currentTarget.target;
                        _4d8.url = evt.currentTarget.href;
                        _4db();
                    }
                });
                dojo.query(_4d6).onclick(function (evt) {
                    if (evt.currentTarget.href != "" && evt.currentTarget.href.substr(0, 1) != "#") {
                        evt.preventDefault();
                        _4d8.url = evt.currentTarget.href;
                        _4d8.target = evt.currentTarget.target;
                        _4db();
                    }
                });
                ibmweb.queue.push(function () {
                    if (dojo.query("[data-action='opt-out']", dojo.byId("sp-intercept-overlay-invitation")).length > 0) {
                        return true;
                    } else {
                        return false;
                    }
                }, function () {
                    dojo.query("[data-action='opt-out']", dojo.byId("sp-intercept-overlay-invitation")).onclick(function () {
                        _4dd();
                    });
                    dojo.query("[data-action='opt-in']", dojo.byId("sp-intercept-overlay-invitation")).onclick(function () {
                        _4d7 = true;
                    });
                });
            }
            ;
            function _4db() {
                var _4dc = _4a7();
                if (_4dc == false && !_4a6) {
                    _4d7 = false;
                    _4dd();
                } else {
                    ibmweb.overlay.show(_4d3);
                    _4de();
                    ibmweb.queue.push(function () {
                        if (typeof dijit.byId("dialog_sp-intercept-overlay-survey") != "undefined" && !dijit.byId("dialog_sp-intercept-overlay-survey").open) {
                            return true;
                        } else {
                            return false;
                        }
                    }, function () {
                        _4d7 = false;
                        _4dd();
                    });
                    ibmweb.queue.push(function () {
                        if (typeof dijit.byId("dialog_sp-intercept-overlay-invitation") != "undefined" && !dijit.byId("dialog_sp-intercept-overlay-invitation").open) {
                            return true;
                        } else {
                            return false;
                        }
                    }, function () {
                        if (_4a6) {
                            _4d7 = true;
                        }
                        _4dd();
                    });
                    _4a6 = false;
                }
            }
            ;
            function _4dd() {
                if (!_4d7) {
                    _4d7 = true;
                    _4df();
                    if (_4d8.target == "") {
                        window.location.href = _4d8.url;
                    } else {
                        window.open(_4d8.url, _4d8.target);
                    }
                }
            }
            ;
            function _4df() {
                window.onbeforeunload = null;
            }
            ;
            function _4de() {
                setTimeout(function () {
                    window.onbeforeunload = function (e) {
                        return false;
                    };
                }, 500);
            }
            ;
            dojo.ready(function () {
                setTimeout(_4d9, 2000);
            });
            return {status: "loaded"};
        };
        function _4ae() {
            if (typeof _4a2.intercept.preventCount !== "undefined") {
                if (!(!isNaN(parseFloat(_4a2.intercept.preventCount)) && isFinite(_4a2.intercept.preventCount))) {
                    return false;
                }
                var _4e0 = _4a2.intercept.preventCount;
                var _4e1 = "ccf-prevent-intercept-" + _4a2.intercept.survey.type + ":" + _4a2.intercept.survey.id;
                if (_4a9(_4e1) == null) {
                    _4a9(_4e1, 1, end);
                }
                var _4e2 = _4a9(_4e1);
                if (_4e2 < _4e0) {
                    _4e2++;
                    _4a9(_4e1, _4e2, end);
                    return false;
                }
            }
            return true;
        }
        ;
        function _4b4() {
            _4a5 = new Date(_4a2.intercept.start);
            end = new Date(_4a2.intercept.stop);
            var _4e3 = (end - _4a5) / (1000 * 60 * 60 * 24), _4e4 = 10, _4e5 = 60;
            if (isNaN(_4a5.getTime())) {
                return false;
            }
            if (isNaN(end.getTime())) {
                return false;
            }
            if (_4e3 < _4e4) {
                end = new Date(_4a5.getTime() + (_4e4 * 24 * 60 * 60 * 1000));
            }
            if (_4e3 > _4e5) {
                end = new Date(_4a5.getTime() + (_4e5 * 24 * 60 * 60 * 1000));
            }
            if (_4a2.now < _4a5) {
                return false;
            }
            if (_4a2.now > end) {
                if (!_4e6()) {
                    return false;
                } else {
                    return true;
                }
            }
            return true;
        }
        ;
        function _4e7() {
            var url = "";
            switch (_4a2.intercept.survey.type) {
                case "asm":
                    var _4e8 = _4e9();
                    _4e8 = _4e8.length > 0 ? "&" + _4e8 : _4e8;
                    url = "//survey.opinionlab.com/survey/s?s=" + _4a2.intercept.survey.id + _4e8;
                    break;
                case "efm":
                    url = "//ucdsurvey1.torolab.ibm.com/ss2/wsb.dll/s/" + _4a2.intercept.survey.id;
                    break;
                case "spss":
                    url = "//survey.opinionlab.com/survey/s?s=" + _4a2.intercept.survey.id;
                    break;
                case "OLcard":
                    ibmweb.dynnav.opinionlab().onLoad();
                    ibmweb.queue.push(function () {
                        return typeof (OOo) == "object" && OOo !== null;
                    }, function () {
                        var obj = {referrerRewrite: {replacePattern: _4a2.intercept.survey.id + "?lang=" + _4a2.intercept.survey.id}, onPageCard: {closeWithOverlay: {}}};
                        _4a2.OLcardObj = new OOo.Ocode(obj);
                    });
                    break;
                case "userzoom":
                    url = "https://s.userzoom.com/m/" + _4a2.intercept.survey.id;
                    break;
                case "sg":
                    url = "http://www.surveygizmo.com/" + _4a2.intercept.survey.id;
                    break;
                case "comment_card":
                    url = "commentCard";
                    break;
                case "customB":
                    url = _4a2.intercept.survey.url;
                    break;
            }
            if (url === null) {
            }
            return url;
        }
        ;
        function _4e9() {
            var _4ea = "";
            var _4eb = _4a2.intercept.survey.metaData;
            if (_4eb != "" && typeof _4eb != "undefined") {
                var _4ec = _4eb.split("&");
                for (var m = 0; m < _4ec.length; m++) {
                    var _4ed = _4ec[m].split("=");
                    _4ea += "opdata_" + _4ed[0] + "=" + _4ed[1] + "&";
                }
            }
            _4ea = _4ea.length > 0 ? _4ea.slice(0, -1) : _4ea;
            return _4ea;
        }
        ;
        function _4ee(data) {
            var name = (data.User.NickName.length === 0) ? data.User.CommonName : data.User.NickName;
            _4a2.intercept.anonData.userName = name;
            var _4ef = data.User.Email;
            _4a2.intercept.anonData.userEmail = _4ef;
            var _4f0 = dojo.cookie("w3ibmProfile"), hkey = _4f0.split("|")[0];
            ibmweb.storage.setItem("w3UserName_" + hkey, name);
            ibmweb.storage.setItem("w3UserEmail_" + hkey, _4ef);
            _4a2.intercept.anonData.emailInfoLoaded = true;
        }
        ;
        function _4f1() {
            var _4f2 = dojo.cookie("w3ibmProfile");
            if (_4f2) {
                var hkey = _4f2.split("|")[0], name = ibmweb.storage.getItem("w3UserName_" + hkey), _4f3 = ibmweb.storage.getItem("w3UserEmail_" + hkey);
                if (name && _4f3) {
                    _4a2.intercept.anonData.userName = name;
                    _4a2.intercept.anonData.userEmail = _4f3;
                    _4a2.intercept.anonData.emailInfoLoaded = true;
                } else {
                    var _4f4 = "//w3.ibm.com/w3restsvc/user/1.0.0/$appid/json/hkey/$hkey/callback/$callback", _4f5 = "6127839ee7627460c4189e36fc6b1b01", _4f6 = _4f4.replace("$appid", _4f5).replace("$hkey", hkey).replace("$callback", "ibmweb.dynnav.ccfintercept.setUserData");
                    dojo.io.script.get({url: _4f6});
                }
                setTimeout(function () {
                    _4a2.intercept.anonData.emailInfoLoaded = true;
                }, 4000);
            } else {
                _4a2.intercept.anonData.emailInfoLoaded = true;
            }
        }
        ;
        function _4f7() {
            var _4f8 = "";
            var _4f9 = _4a2.intercept.anonData.userName;
            var name = _4a2.intercept.anonData.userEmail;
            _4f8 = "<form class=\"ibm-row-form\" id=\"anonimityForm\"><p style=\"padding-bottom: 3px;padding-top: 15px;font-size: 11px;\">";
            var _4fa = true;
            if (ibmweb.config.get("opinionlab").requirePrompt === true) {
                _4f8 += "<label for=\"intercept-anonymity\"><span class=\"ibm-required\">*</span>May we contact you regarding your comments ?</label>";
                _4fa = false;
            } else {
                _4f8 += "<label for=\"intercept-anonymity\">May we contact you regarding your comments ?</label>";
            }
            _4f8 += "<span class=\"ibm-input-group\"><input type=\"radio\" value=\"yes\" name=\"anonymity\" id=\"intercept-anonymity-yes\"><label for=\"intercept-anonymity-yes\">Yes</label>";
            _4f8 += "<input type=\"radio\" value=\"no\" " + (_4fa ? "checked=\"checked\"" : "") + " name=\"anonymity\" id=\"intercept-anonymity-no\"><label for=\"intercept-anonymity-no\">No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If no, then your feedback will be anonymous</label></span>";
            if (_4f9 != "" && name != "") {
                var _4fb = "<div>Name: " + name + "</div><div style=\"margin-top: 5px;\">Email: " + _4f9 + "</div>";
            } else {
                var _4fb = "";
            }
            if (ibmweb.config.get("opinionlab").getUserInfo && ibmweb.config.get("opinionlab").promptUserInfo) {
                _4f8 += "<div id='intercept-anonytext-content'>" + _4fb + "</div>";
            } else {
                _4f8 += "<div id='intercept-anonytext-content'>Your feedback is anonymous</p>";
            }
            _4f8 += "</form>";
            return _4f8;
        }
        ;
        function _4fc() {
            var _4fd = "";
            var _4fe = _4a2.intercept.anonData.userName;
            var name = _4a2.intercept.anonData.userEmail;
            if (ibmweb.config.get("opinionlab").getUserInfo && ibmweb.config.get("opinionlab").promptUserInfo && _4a2.intercept.anonData.emailInfoLoaded && _4fe != "" && name != "") {
                _4fd = _4f7();
                ibmweb.queue.push(function () {
                    if (dojo.query("[name=\"anonymity\"]").length > 0) {
                        return true;
                    } else {
                        return false;
                    }
                }, function () {
                    dojo.forEach(dojo.query("[name=\"anonymity\"]"), function (node, _4ff) {
                        dojo.connect(node, "click", function (e) {
                            if (_4fe != "" && name != "") {
                                var _500 = "<div>Name: " + name + "</div><div style=\"margin-top: 5px;\">Email: " + _4fe + "</div>";
                            } else {
                                var _500 = "";
                            }
                            if (node.value == "yes" && node.checked) {
                                dojo.byId("intercept-anonytext-content").innerHTML = _500;
                                dojo.query("label[for=\"intercept-anonymity-no\"]")[0].innerHTML = "No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If no, then your feedback will be anonymous";
                            } else {
                                dojo.byId("intercept-anonytext-content").innerHTML = "Your feedback is anonymous";
                                dojo.query("label[for=\"intercept-anonymity-no\"]")[0].innerHTML = "No";
                            }
                        });
                    });
                });
            } else {
                if (ibmweb.config.get("opinionlab").getUserInfo && ibmweb.config.get("opinionlab").promptUserInfo && (ibmweb.config.get("opinionlab").requirePrompt === true || ibmweb.config.get("opinionlab").requirePrompt === false) && (_4fe == "" || name == "")) {
                    _4fd = _4f7();
                    ibmweb.queue.push(function () {
                        if (dojo.query("[name=\"anonymity\"]").length > 0) {
                            return true;
                        } else {
                            return false;
                        }
                    }, function () {
                        dojo.forEach(dojo.query("[name=\"anonymity\"]"), function (node, _501) {
                            dojo.connect(node, "click", function (e) {
                                if (node.value == "yes" && node.checked) {
                                    dojo.byId("intercept-anonytext-content").innerHTML = "";
                                    var _502 = "<div class=\"ibm-common-overlay\" id=\"intercept-anonytext-data-overlay\"> <div class=\"ibm-head\"> <p><a class=\"ibm-common-overlay-close\" href=\"#close\">Close [x]</a></p> </div> <div class=\"ibm-body\"> <div class=\"ibm-main\"> <div class=\"ibm-title ibm-subtitle\"> <h2>Feedback Information</h2> </div> <div class=\"ibm-container ibm-alternate ibm-buttons-last\"> <div class=\"ibm-container-body\"> <form action=\"#\" class=\"ibm-row-form\" enctype=\"multipart/form-data\" method=\"post\"> <p><label for=\"name\">Name:<span class=\"ibm-required\">*</span></label><span><input name=\"intercept-anonytext-data-name\" size=\"25\" value=\"\" style=\"width: 200px;\" class=\"required\" type=\"text\" /></span></p> <p><label for=\"email\">Email:<span class=\"ibm-required\">*</span></label><span><input name=\"intercept-anonytext-data-email\" size=\"25\" value=\"\" style=\"width: 200px;\" class=\"required\" type=\"text\" /></span></p><div class=\"ibm-overlay-rule\"><hr /> </div> <p class=\"ibm-first\"><input class=\"ibm-btn-arrow-sec\" name=\"intercept-anonytext-data-submit\" value=\"Save\" type=\"button\" /></p> </form> </div> </div> </div> </div> </div>";
                                    dojo.place(_502, dojo.query("body")[0], "last");
                                    ibmweb.overlay.show("intercept-anonytext-data-overlay");
                                    ibmweb.queue.push(function () {
                                        return typeof dijit.byId("dialog_intercept-anonytext-data-overlay") !== "undefined";
                                    }, function () {
                                        dojo.connect(dojo.query("[name=\"intercept-anonytext-data-submit\"]")[0], "click", function () {
                                            if (dojo.query(".ibm-error-link", dojo.query("[name=\"intercept-anonytext-data-name\"]")[0].parentElement).length > 0) {
                                                dojo.query(".ibm-error-link", dojo.query("[name=\"intercept-anonytext-data-name\"]")[0].parentElement).forEach(function (node, _503) {
                                                    dojo.destroy(node, dojo.query("[name=\"intercept-anonytext-data-name\"]")[0].parentElement);
                                                });
                                            }
                                            if (dojo.query(".ibm-error-link", dojo.query("[name=\"intercept-anonytext-data-email\"]")[0].parentElement).length > 0) {
                                                dojo.query(".ibm-error-link", dojo.query("[name=\"intercept-anonytext-data-email\"]")[0].parentElement).forEach(function (node, _504) {
                                                    dojo.destroy(node, dojo.query("[name=\"intercept-anonytext-data-email\"]")[0].parentElement);
                                                });
                                            }
                                            if (dojo.query("[name=\"intercept-anonytext-data-name\"]")[0].value === "") {
                                                dojo.place("<a title=\"Error link\" href=\"#\" class=\"ibm-error-link\">Error</a>", dojo.query("[name=\"intercept-anonytext-data-name\"]")[0].parentElement, "last");
                                                return;
                                            } else {
                                                _4a2.intercept.anonData.userName = dojo.query("[name=\"intercept-anonytext-data-name\"]")[0].value;
                                            }
                                            if (dojo.query("[name=\"intercept-anonytext-data-email\"]")[0].value === "") {
                                                dojo.place("<a title=\"Error link\" href=\"#\" class=\"ibm-error-link\">Error</a>", dojo.query("[name=\"intercept-anonytext-data-email\"]")[0].parentElement, "last");
                                                return;
                                            } else {
                                                _4a2.intercept.anonData.userEmail = dojo.query("[name=\"intercept-anonytext-data-email\"]")[0].value;
                                            }
                                            ibmweb.overlay.hide("intercept-anonytext-data-overlay");
                                        });
                                        dojo.connect(dijit.byId("dialog_intercept-anonytext-data-overlay"), "onHide", function () {
                                            if ((_4a2.intercept.anonData.userEmail == "" || _4a2.intercept.anonData.userName == "")) {
                                                dojo.attr(dojo.query("[value=\"no\"]")[0], "checked", true);
                                                dojo.byId("intercept-anonytext-content").innerHTML = "Your feedback is anonymous";
                                                dojo.query("label[for=\"intercept-anonymity-no\"]")[0].innerHTML = "No";
                                            } else {
                                                var _505 = "<div>Name: " + _4a2.intercept.anonData.userName + "</div><div style=\"margin-top: 5px;\">Email: " + _4a2.intercept.anonData.userEmail + "</div>";
                                                dojo.byId("intercept-anonytext-content").innerHTML = _505;
                                                dojo.query("label[for=\"intercept-anonymity-no\"]")[0].innerHTML = "No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If no, then your feedback will be anonymous";
                                            }
                                        });
                                    });
                                } else {
                                    dojo.byId("intercept-anonytext-content").innerHTML = "Your feedback is anonymous";
                                    dojo.query("label[for=\"intercept-anonymity-no\"]")[0].innerHTML = "No";
                                }
                            });
                        });
                    });
                }
            }
            return _4fd;
        }
        ;
        function _506() {
            var _507 = "";
            if (_4a2.intercept.anon == "auto" && _4a2.intercept.anonData.userName != "" && _4a2.intercept.anonData.userEmail != "") {
                if (_4a2.intercept.survey.type == "asm") {
                    _507 = "opdata_name=" + _4a2.intercept.anonData.userName + "&opdata_email=" + _4a2.intercept.anonData.userEmail;
                }
            }
            return _507;
        }
        ;
        function _4af() {
            var _508 = false;
            var urls = _4a2.intercept.referrerURL;
            len = urls.length, i = -1, href = document.referrer;
            while (++i < len && !_508) {
                if (_509(urls[i], href)) {
                    _508 = true;
                }
            }
            return _508;
        }
        ;
        function _4b0() {
            var _50a = false;
            var urls = _4a2.intercept.excludeURL;
            len = urls.length, i = -1, href = document.referrer;
            while (++i < len && !_50a) {
                if (_509(urls[i], href)) {
                    _50a = true;
                }
            }
            return _50a;
        }
        ;
        function _4cc() {
            var _50b = false;
            var urls = _4a2.intercept.exitURL;
            len = urls.length, i = -1, href = document.location.href;
            while (++i < len && !_50b) {
                if (_509(urls[i], href)) {
                    _50b = true;
                }
            }
            return _50b;
        }
        ;
        function _50c() {
            _4a9(_4a3, null);
            return true;
        }
        ;
        function _4a9(name, val, _50d) {
            var _50e = 0, _50f = null;
            if (typeof (_50d) != "undefined") {
                var now = new Date();
                switch (typeof (_50d)) {
                    case "string":
                        _50f = new Date(_50d);
                        _50e = Math.floor((_50f - now) / 60000);
                        break;
                    case "number":
                        _50f = new Date(new Date().getTime() + (_50d * 60000));
                        _50e = _50d * 60;
                        break;
                    case "object":
                        _50f = _50d;
                        _50e = Math.floor((_50f - now) / 60000);
                        break;
                    }
            }
            if (ibmweb.storage.isSupported()) {
                if (typeof (val) == "undefined") {
                    return sessionStorage.getItem(name) || ibmweb.storage.getItem(name);
                } else {
                    if (_50e !== 0) {
                        sessionStorage.removeItem(name);
                        if (val === null) {
                            return localStorage.removeItem(name);
                        } else {
                            localStorage.setItem(name + "_expire", _50f.getTime());
                            return localStorage.setItem(name, val);
                        }
                    } else {
                        localStorage.removeItem(name);
                        localStorage.removeItem(name + "_expire");
                        if (val === null) {
                            return sessionStorage.removeItem(name);
                        } else {
                            return sessionStorage.setItem(name, val);
                        }
                    }
                }
            } else {
                if (typeof (val) == "undefined") {
                    return dojo.cookie(name) || null;
                } else {
                    if (_50d) {
                        return dojo.cookie(name, val, {expires: _50f, path: "/"});
                    } else {
                        return dojo.cookie(name, val, {path: "/"});
                    }
                }
            }
        }
        ;
        function _4ac(_510) {
            if (_510 === null) {
                return null;
            }
            var ret = "", then = new Date(_510), now = new Date();
            if (!(now.getFullYear() == then.getFullYear() && now.getMonth() == then.getMonth() && now.getDate() == then.getDate())) {
                var y = then.getFullYear();
                var m = then.getMonth() + 1;
                var mm = (m < 10 ? "0" : "") + m;
                var d = then.getDate();
                var dd = (d < 10 ? "0" : "") + d;
                ret += mm + "/" + dd + "/" + y;
                ret += " ";
            }
            var h = then.getHours();
            var m = then.getMinutes();
            var mm = (m < 10 ? "0" : "") + m;
            var a = (h > 12) ? "pm" : "am";
            h = ((h + 11) % 12) + 1;
            ret += h + ":" + mm + a;
            return ret;
        }
        ;
        function _511(s, n) {
            var m, r = /<([^>\s]*)[^>]*>/g, _512 = [], _513 = 0, _514 = "";
            while ((m = r.exec(s)) && n) {
                var temp = s.substring(_513, m.index).substr(0, n);
                _514 += temp;
                n -= temp.length;
                _513 = r.lastIndex;
                if (n) {
                    _514 += m[0];
                    if (m[1].indexOf("/") === 0) {
                        _512.pop();
                    } else {
                        if (m[1].lastIndexOf("/") !== m[1].length - 1) {
                            _512.push(m[1]);
                        }
                    }
                }
            }
            _514 += s.substr(_513, n);
            while (_512.length) {
                _514 += "</" + _512.pop() + ">";
            }
            if (_514.length > 400) {
                _514 = _514.substring(0, _514.lastIndexOf(" ")) + "...";
            }
            return _514;
        }
        ;
        function _509(_515, url) {
            var _516 = false;
            var _517 = RegExp("^" + _515 + "$", "i");
            match = url.match(_517);
            if (match && match.index === 0) {
                _516 = true;
            }
            return _516;
        }
        ;
        function _518(_519, href) {
            var _51a = false;
            if (_519.type == "URL") {
                if (typeof _519.value === "string" && _509(_519.value, href)) {
                    _51a = true;
                    exception_for = _519["for"];
                } else {
                    for (var k = 0; k < _519.value.length; k++) {
                        if (_509(_519.value[k], href)) {
                            _51a = true;
                            exception_for = _519["for"];
                            break;
                        }
                    }
                }
            } else {
                if (_519.type == "ID") {
                    if (typeof _519.value === "string" && _509(_519.value, href)) {
                        _51a = (_4a2.intercept.survey.id == _519.value);
                        exception_for = _519["for"];
                    } else {
                        for (var k = 0; k < _519.value.length; k++) {
                            if (_509(_519.value[k], href)) {
                                _51a = (_4a2.intercept.survey.id == _519.value[k]);
                                exception_for = _519["for"];
                                break;
                            }
                        }
                    }
                }
            }
            return _51a;
        }
        ;
        function _4b8() {
            var _51b = false, href = window.location.href;
            for (var i = 0; i < _4a2.exception.data.length; i++) {
                var _51c = _4a2.exception.data[i];
                if (_51c["for"] == "percentage") {
                    if (typeof _51c.limit !== "undefined" && _51c.limit >= _4a2.intercept.percent) {
                        _51b = _518(_51c, href);
                        if (_51b) {
                            break;
                        }
                    }
                }
            }
            return _51b;
        }
        ;
        function _4e6() {
            var _51d = false, href = window.location.href;
            for (var i = 0; i < _4a2.exception.data.length; i++) {
                var _51e = _4a2.exception.data[i];
                if (_51e["for"] == "duration") {
                    _51d = _518(_51e, href);
                    if (_51d) {
                        break;
                    }
                }
            }
            return _51d;
        }
        ;
        function _4b5() {
            var _51f = false, href = _4a2.intercept.survey.url;
            for (var i = 0; i < _4a2.exception.data.length; i++) {
                var _520 = _4a2.exception.data[i];
                if (_520["for"] == "customB") {
                    _51f = _518(_520, href);
                    if (_51f) {
                        break;
                    }
                }
            }
            return _51f;
        }
        ;
        function _521(urls) {
            var _522 = false, len = urls.length, i = -1, href = window.location.href, _523 = "percentage";
            _4a2.exception = {};
            _4a2.exception.data = urls;
            _4a2.whitelist_status = true;
        }
        ;
        return {callback_whitelist: _521, initIntercept: _4b9, setUserData: _4ee, clear: _50c};
    })();
    dojo.ready(function () {
        new ibmweb.dynnav.ccfintercept.initIntercept();
    });
}
if (!dojo._hasResource["ibmweb.dynnav.opinionlab"]) {
    dojo._hasResource["ibmweb.dynnav.opinionlab"] = true;
    dojo.provide("ibmweb.dynnav.opinionlab");
    dojo.declare("ibmweb.dynnav.opinionlab", [ibmweb.dynnav._module], {init: function () {
            return ibmweb.config.opinionlab.footer.enabled || ibmweb.config.opinionlab.floating.enabled;
        }, onLoad: function () {
            var _524 = _524;
            if (typeof ibmweb.config.opinionlab.floating.verticalFloating === "undefined") {
                ibmweb.config.opinionlab.floating.verticalFloating = true;
            }
            var url = ibmweb.config.dojoDomain + "common/";
            if (dojo.query("link[href$=\"/common/v17/css/external/opinionlab.css\"]").length === 0) {
                dojo.create("link", {type: "text/css", rel: "stylesheet", title: ibmweb.info.w3 ? "w3" : "www", href: url + "v17/css/external/opinionlab.css"}, dojo.query("head")[0]);
            }
            if (typeof (OOo) != "object" || OOo === null) {
                dojo.create("script", {src: url + "js/dojo/1.6/ibmweb/external/opinionlab.js", type: "text/javascript"}, dojo.query("head")[0]);
            }
            var _524 = this;
            ibmweb.opinionlab = ibmweb.opinionlab || {};
            ibmweb.opinionlab.defaults = {customVariables: {}, emailInfoLoaded: false};
            ibmweb.opinionlab.setUserData = function (data) {
                var name = (data.User.NickName.length === 0) ? data.User.CommonName : data.User.NickName;
                ibmweb.opinionlab.defaults.customVariables.userName = name;
                var _525 = data.User.Email;
                ibmweb.opinionlab.defaults.customVariables.userEmail = _525;
                var _526 = dojo.cookie("w3ibmProfile"), hkey = _526.split("|")[0];
                ibmweb.storage.setItem("w3UserName_" + hkey, name);
                ibmweb.storage.setItem("w3UserEmail_" + hkey, _525);
                ibmweb.opinionlab.defaults.emailInfoLoaded = true;
            };
            var _527 = dojo.cookie("w3ibmProfile");
            if (_527 && ibmweb.config.get("opinionlab").getUserInfo === true) {
                var hkey = _527.split("|")[0], name = ibmweb.storage.getItem("w3UserName_" + hkey), _528 = ibmweb.storage.getItem("w3UserEmail_" + hkey);
                if (name && _528) {
                    ibmweb.opinionlab.defaults.customVariables.userName = name;
                    ibmweb.opinionlab.defaults.customVariables.userEmail = _528;
                    ibmweb.opinionlab.defaults.emailInfoLoaded = true;
                } else {
                    var _529 = "//w3.ibm.com/w3restsvc/user/1.0.0/$appid/json/hkey/$hkey/callback/$callback", _52a = "6127839ee7627460c4189e36fc6b1b01", _52b = _529.replace("$appid", _52a).replace("$hkey", hkey).replace("$callback", "ibmweb.opinionlab.setUserData");
                    dojo.io.script.get({url: _52b});
                }
                setTimeout(function () {
                    ibmweb.opinionlab.defaults.emailInfoLoaded = true;
                }, 4000);
            } else {
                ibmweb.opinionlab.defaults.emailInfoLoaded = true;
            }
            var _52c = this.getLanguage();
            ibmweb.queue.push(function () {
                return typeof (OOo) == "object" && OOo !== null;
            }, function () {
                if (_52c == "") {
                    replaceURLPattern = window.location.href;
                } else {
                    replaceURLPattern = window.location.href + "?lang=" + _52c;
                }
                if (ibmweb.config.opinionlab.footer.enabled) {
                    var _52d = dojo.query("#ibm-footer ul");
                    if (_52d.length == 1) {
                        dojo.subscribe("/ibmweb/dynnav/footer/finished", function () {
                            _524.createFooterLink();
                        });
                        _524.createFooterLink();
                        _524.oo_feedback = new OOo.Ocode({onPageCard: {closeWithOverlay: {}}, referrerRewrite: {replacePattern: replaceURLPattern}});
                    }
                }
                if (ibmweb.config.opinionlab.floating.enabled) {
                    var obj = {floating: {}, referrerRewrite: {replacePattern: replaceURLPattern}};
                    if (ibmweb.config.opinionlab.floating.type == "overlay") {
                        obj.onPageCard = {closeWithOverlay: {}};
                    }
                    if (ibmweb.config.opinionlab.floating.hide) {
                        ibmweb.config.opinionlab.floating.hide = ibmweb.config.opinionlab.floating.hide * 1000;
                        obj.disappearOnClick = true;
                    }
                    ibmweb.queue.push(function () {
                        return ibmweb.opinionlab.defaults.emailInfoLoaded && ((typeof ibmweb.config.get("opinionlab").customVariablesLoaded !== "undefined") ? ibmweb.config.get("opinionlab").customVariablesLoaded : false);
                    }, function () {
                        obj.customVariables = dojo.mixin({}, ibmweb.opinionlab.defaults.customVariables, ibmweb.config.get("opinionlab").customVariables);
                        _524.oo_floating = new OOo.Ocode(obj);
                        if (ibmweb.config.opinionlab.floating.verticalFloating) {
                            _524.verticalFeedback();
                        }
                    });
                    if (ibmweb.config.get("opinionlab").getUserInfo) {
                        setTimeout(function () {
                            ibmweb.config.get("opinionlab").customVariablesLoaded = true;
                        }, 4000);
                    } else {
                        ibmweb.config.get("opinionlab").customVariablesLoaded = true;
                    }
                    dojo.query("body").connect("onclick", function (e) {
                        if (dojo.hasClass(e.target, "oo_feedback_float")) {
                            _524.disableGrayAreaAction();
                        }
                    });
                    var olUp = dojo.query("div.olUp");
                    var _52e = dojo.query("div.oo_feedback_float");
                    if (ibmweb.config.opinionlab.floating.verticalFloating) {
                        if (olUp.length == 1 && _52e.length == 1) {
                            _524.verticalFeedback();
                        }
                    } else {
                        if (olUp.length == 1 && _52e.length == 1) {
                            var _52f = null;
                            var _530 = null;
                            var _531 = function (_532) {
                                if (_52f) {
                                    _52f.stop();
                                }
                                dojo.style(olUp[0], {display: "block", opacity: 1});
                                _52f = dojo.animateProperty({node: olUp[0], duration: _532 ? _532 : 3000, properties: {opacity: {start: 1, end: 0}}, onEnd: function () {
                                        olUp[0].style.display = "none";
                                    }}).play();
                            };
                            var _533 = function (_534) {
                                if (_52f) {
                                    _52f.stop();
                                }
                                dojo.style(olUp[0], {display: "block", opacity: 0});
                                _52f = dojo.animateProperty({node: olUp[0], duration: _534 ? _534 : 3000, properties: {opacity: {start: 0, end: 1}}}).play();
                            };
                            dojo.connect(_52e[0], "onmouseover", function (e) {
                                if ((e.target && dojo.hasClass(e.target, "olUp")) || (e.originalTarget && dojo.hasClass(e.originalTarget, "olUp"))) {
                                    return false;
                                }
                                window.clearTimeout(_530);
                                _533(600);
                            });
                            dojo.connect(_52e[0], "onmouseout", function (e) {
                                if ((e.target && dojo.hasClass(e.target, "olUp")) || (e.originalTarget && dojo.hasClass(e.originalTarget, "olUp"))) {
                                    return false;
                                }
                                _531(600);
                            });
                            dojo.style(olUp[0], {display: "block"});
                            _530 = window.setTimeout(function () {
                                _531();
                            }, 3000);
                        }
                    }
                }
            });
        }, createFooterLink: function () {
            var url = ibmweb.config.dojoDomain + "common/", _535 = dojo.query("#ibm-footer ul");
            var li = dojo.create("li", {}, _535[0]);
            var _536 = dojo.create("img", {title: "Feedback", src: ibmweb.config.imageUrl + "opinionlab/oo_icon.gif"}, li);
            var _537 = dojo.create("a", {innerHTML: "&nbsp;Feedback", href: "#"}, li);
            dojo.connect(_537, "onclick", dojo.hitch(this, function (e) {
                dojo.stopEvent(e);
                this.oo_feedback.show();
                this.disableGrayAreaAction();
            }));
        }, disableGrayAreaAction: function () {
            dojo.query(".oo_cc_wrapper > span").forEach(function (item) {
                if (item.innerHTML === "") {
                    dojo.query(item).replaceWith("<span></span>");
                }
            });
            dojo.query(".oo_cc_wrapper").style({top: 0, paddingTop: "25px", height: "100%"});
        }, getBrowserLanguage: function () {
            var _538;
            var _539 = window.navigator.userLanguage || window.navigator.language;
            var _53a = _539.split("-");
            if (typeof _53a[1] !== "undefined") {
                _538 = _53a[1].toLowerCase() + "/";
            }
            _538 += _53a[0].toLowerCase();
            return _538;
        }, getLanguage: function () {
            var page = "";
            var _53b = "";
            dojo.query("link").forEach(function (node, _53c) {
                if (node.href.indexOf("w3.css") > 0) {
                    page = "w3";
                } else {
                    if (node.href.indexOf("www.css") > 0) {
                        page = "www";
                    }
                }
            });
            if (page == "w3") {
                _53b = this.getBrowserLanguage();
            } else {
                var _53d = ["bg/bg", "cn/zh", "tw/zh", "hr/hr", "cz/cs", "dk/da", "be/nl", "nl/nl", "eg/en", "zw/en", "af/en", "ai/en", "ag/en", "aw/en", "au/en", "bs/en", "bh/en", "bd/en", "bb/en", "be/en", "bm/en", "bw/en", "vg/en", "bn/en", "cm/en", "ca/en", "ky/en", "cw/en", "cy/en", "dm/en", "et/en", "gh/en", "gd/en", "gy/en", "hk/en", "in/en", "id/en", "iq/en", "ie/en", "jm/en", "jo/en", "ke/en", "kw/en", "lb/en", "ly/en", "mw/en", "my/en", "mu/en", "ms/en", "na/en", "np/en", "nz/en", "ng/en", "om/en", "pk/en", "ph/en", "qa/en", "kn/en", "lc/en", "vc/en", "sa/en", "sc/en", "sl/en", "sg/en", "za/en", "lk/en", "sr/en", "tz/en", "th/en", "tt/en", "tc/en", "ug/en", "ae/en", "uk/en", "us/en", "vn/en", "ye/en", "zm/en", "ee/et", "fi/fi", "be/fr", "bf/fr", "cm/fr", "ca/fr", "td/fr", "cg/fr", "cd/fr", "fr/fr", "ga/fr", "ci/fr", "mg/fr", "mu/fr", "ma/fr", "ne/fr", "sn/fr", "sc/fr", "ch/fr", "tn/fr", "at/de", "de/de", "ch/de", "gr/el", "il/he", "hu/hu", "it/it", "jp/ja", "kz/kk", "kr/ko", "lv/lv", "lt/lt", "no/no", "pl/pl", "dz/fr", "br/pt", "mz/pt", "pt/pt", "ro/ro", "ru/ru", "rs/sr", "sk/sk", "si/sl", "ec/es", "ar/es", "bo/es", "cl/es", "co/es", "cr/es", "mx/es", "py/es", "pe/es", "es/es", "uy/es", "ve/es", "se/sv", "tr/tr", "ua/uk", "uz/uz", "vn/vi"];
                var _53e = false, _53b = "";
                for (var i = 0; i < _53d.length; i++) {
                    if (window.location.href.indexOf(_53d[i]) > 0) {
                        _53e = true;
                        break;
                    }
                }
                if (!_53e) {
                    var _53f;
                    if (typeof dojo.query("meta[name='DC.Language']")[0] !== "undefined") {
                        _53f = dojo.query("meta[name='DC.Language']")[0];
                        var _540 = dojo.attr(_53f, "content").split("-"), _541 = false;
                        if (_540.length < 2) {
                            if (typeof dojo.query("meta[name='IBM.Country']")[0] !== "undefined") {
                                _53f = dojo.query("meta[name='IBM.Country']")[0];
                                var _542 = dojo.attr(_53f, "content").split(",");
                                if (_542.length > 0) {
                                    for (var u = 0; u < _542.length; u++) {
                                        _53b = _542[u].toLowerCase().trim() + "/" + _540[0].toLowerCase();
                                        for (var h = 0; h < _53d.length; h++) {
                                            if (_53d[h] == _53b) {
                                                _541 = true;
                                                break;
                                            }
                                        }
                                    }
                                } else {
                                    _53b = _542[0].toLowerCase() + "/" + _540[0].toLowerCase();
                                    for (var h = 0; h < _53d.length; h++) {
                                        if (_53d[h] == _53b) {
                                            _541 = true;
                                            break;
                                        }
                                    }
                                }
                            }
                        } else {
                            _53b = _540[1].toLowerCase() + "/" + _540[0].toLowerCase();
                            for (var h = 0; h < _53d.length; h++) {
                                if (_53d[h] == _53b) {
                                    _541 = true;
                                    break;
                                }
                            }
                        }
                        if (!_541) {
                            _53b = "us/en";
                        }
                    } else {
                        if (dojo.attr(dojo.query("html")[0], "lang") !== null) {
                            var _540 = dojo.attr(dojo.query("html")[0], "lang").split("-");
                            _53b = _540[1].toLowerCase() + "/" + _540[0].toLowerCase();
                        } else {
                            if (window.navigator.language || window.navigator.userLanguage) {
                                _53b = this.getBrowserLanguage();
                            } else {
                                _53b = "us/en";
                            }
                        }
                    }
                }
            }
            return _53b;
        }, floatHeight: 100, wasRecreate: false, sbsCorection: false, upSbs: false, verticalFeedbackAnim: false, olFloatPos: function () {
            var wh = window.innerHeight || document.documentElement.clientHeight, y = (wh - this.floatHeight) / 2, _543 = dojo.query("div.oo_feedback_float");
            if (this.sbsCorection) {
                var _544 = dojo.position(dojo.byId("ibm-social-tools"), true), _545 = 6, b = _544.y + _544.h + 20;
                if (y <= b) {
                    y = b;
                }
            }
            y = parseInt(y);
            if (isNaN(y)) {
                return;
            }
            if (dojo.isIE < 8) {
                _543[0].style.cssText = "background-image: none; bottom: auto !important; height: 100px; right: 0px !important; text-indent: 0; top: " + y + "px; width: 27px;";
            } else {
                dojo.style(_543[0], {"top": y + "px", "bottom": "auto", "backgroundImage": "none", "height": "100px", "width": "27px", "textIndent": "0"});
            }
        }, verticalFeedback: function () {
            if (dojo.query("div.oo_feedback_float").length > 1) {
                dojo.query("div.oo_feedback_float").forEach(function (elm, i) {
                    if (i == 0) {
                        return;
                    }
                    dojo.destroy(elm);
                });
            }
            if (this.wasRecreate) {
                return;
            }
            this.wasRecreate = true;
            window.ol_vertical_feedback = true;
            var _546 = this, _547 = null, _548 = true, _549 = dojo.query("div.oo_feedback_float"), olUp = dojo.query("div.olUp"), _54a = function (_54b) {
                if (_547) {
                    return;
                }
                dojo.style(_54c, {height: "100px"});
                var nP = dojo.position(_549[0], true);
                _547 = dojo.animateProperty({node: _549[0], duration: _54b ? _54b : 3000, properties: {height: {start: _546.floatHeight, end: 100}, top: {start: nP.y, end: (_546.upSbs) ? nP.y - 73 : nP.y}}, onEnd: function () {
                        dojo.style(_54d, {display: "block"});
                        _547 = null;
                        if (_548) {
                            _54e(400);
                        }
                    }}).play();
            }, _54e = function (_54f) {
                if (_547) {
                    return;
                }
                dojo.style(_54d, {display: "none"});
                var nP = dojo.position(_549[0], true);
                _547 = dojo.animateProperty({node: _549[0], duration: _54f ? _54f : 3000, properties: {height: {start: 100, end: _546.floatHeight}, top: {start: nP.y, end: (_546.upSbs) ? nP.y + 73 : nP.y}}, onEnd: function () {
                        dojo.style(_54c, {height: _546.floatHeight + "px"});
                        _547 = null;
                    }}).play();
            };
            dojo.style(olUp[0], {display: "none"});
            dojo.style(_549[0], {"width": "27px", "backgroundImage": "none", "textIndent": 0});
            if (dojo.isIE < 8) {
                _549[0].style.cssText = "right:0px !important";
            }
            var _54d = dojo.create("div", {"class": "wrappedText", style: {position: "absolute", display: "none", zIndex: 50000, width: "80px", height: "auto", padding: "0px 0px 0px 0px", color: "#ffffff", fontSize: "12px", fontWeight: "bold", textIndent: 0}, innerHTML: "Feedback"}, _549[0]);
            if (typeof dojo.isIE === "undefined" || dojo.isIE >= 9) {
                dojo.style(_54d, {lineHeight: "27px", webkitTransform: "rotate(270deg)", MozTransform: "rotate(270deg)", msTransform: "rotate(270deg)", OTransform: "rotate(270deg)", transform: "rotate(270deg)"});
            }
            if (dojo.isIE < 9) {
                _54d.innerHTML = "";
                dojo.style(_54d, {backgroundImage: "url(\"" + ibmweb.config.imageUrl + "opinionlab/ol_feedback_rot_text.gif\")", left: "0px", height: "80px", width: "27px"});
            } else {
                dojo.style(_54d, {top: "27px", left: "-27px"});
            }
            var _550 = dojo.create("div", {"class": "wrappedIcon", style: {position: "absolute", zIndex: 50000, width: "27px", height: "27px", bottom: 0, backgroundImage: "url(\"" + ibmweb.config.imageUrl + "opinionlab/ol_tab_icon_white.gif\")", backgroundRepeat: "no-repeat", backgroundPosition: "center center"}}, _549[0]);
            if (typeof dojo.isIE === "undefined" || dojo.isIE >= 9) {
                dojo.style(_550, {webkitTransform: "rotate(270deg)", MozTransform: "rotate(270deg)", msTransform: "rotate(270deg)", OTransform: "rotate(270deg)", transform: "rotate(270deg)", transformOrigin: "50% 50%", webkitTransformOrigin: "50% 50%", MozTransformOrigin: "50% 50%"});
            }
            if (dojo.isIE < 9) {
                dojo.style(_550, {left: "0px"});
            }
            if (dojo.isIE < 8) {
                var _551 = dojo.create("a", {"class": "ie678maskAnchor", style: {position: "absolute", zIndex: 50001, top: "-1px", left: "-1px"}}, _549[0]);
                var _54c = dojo.create("div", {"class": "wrappedMask", style: {width: "27px", height: "27px", backgroundColor: "black"}}, _551);
            } else {
                var _54c = dojo.create("div", {"class": "wrappedMask", style: {position: "absolute", zIndex: 50001, width: "27px", height: "27px", top: "-1px", left: "-1px", backgroundColor: "black", opacity: 0.01}}, _549[0]);
            }
            if (dojo.isIE < 9) {
                dojo.style(_54c, {filter: "alpha(opacity=1)"});
            }
            dojo.connect(window, "onresize", function (e) {
                _546.olFloatPos();
            });
            if (_546.verticalFeedbackAnim) {
                dojo.connect(_54c, "onmouseover", function (e) {
                    if (!_548) {
                        return false;
                    }
                    dojo.stopEvent(e);
                    _548 = false;
                    _54a(400);
                });
                dojo.connect(_54c, "onmouseout", function (e) {
                    dojo.stopEvent(e);
                    _548 = true;
                    _54e(400);
                });
            } else {
                dojo.style(_54c, {height: "100px"});
                dojo.style(_54d, {display: "block"});
                this.floatHeight = dojo.marginBox(_549[0]).h;
                this.floatHeight += 73;
            }
            this.olFloatPos();
            dojo.subscribe("/ibmweb/dynnav/sbs/finished", function () {
                _546.sbsCorection = true;
                _546.olFloatPos();
            });
            if (!_546.sbsCorection && ibmweb.config.sbs.enabled && dojo.query("#ibm-social-tools").length == 1) {
                this.sbsCorection = true;
                _546.olFloatPos();
            }
            if (typeof _551 !== "undefined") {
                dojo.connect(_551, "onclick", dojo.hitch(this, function (e) {
                    dojo.stopEvent(e);
                    if (ibmweb.config.opinionlab.customSurvey && ibmweb.config.opinionlab.customSurvey.surveys && ibmweb.config.opinionlab.customSurvey.surveys[0].type && ibmweb.config.opinionlab.customSurvey.surveys[0].type.url && ibmweb.config.opinionlab.customSurvey.surveys[0].type.content === "IBM") {
                        if (!_546.messageInitStatus) {
                            window.attachEvent("message", function (e) {
                                _546.receiveMessage(e, _546);
                            }, false);
                            _546.messageInitStatus = true;
                        }
                        _546.openOwnUrl(ibmweb.config.opinionlab.customSurvey.surveys[0].type.url);
                    } else {
                        _546.oo_floating.options.disappearOnClick = false;
                        _546.oo_floating.show();
                        _546.disableGrayAreaAction();
                    }
                }));
            } else {
                dojo.connect(_54c, "onclick", dojo.hitch(this, function (e) {
                    dojo.stopEvent(e);
                    if (ibmweb.config.opinionlab.customSurvey && ibmweb.config.opinionlab.customSurvey.surveys && ibmweb.config.opinionlab.customSurvey.surveys[0].type && ibmweb.config.opinionlab.customSurvey.surveys[0].type.url && ibmweb.config.opinionlab.customSurvey.surveys[0].type.content === "IBM") {
                        if (!_546.messageInitStatus) {
                            if (dojo.isIE == 8) {
                                window.attachEvent("message", function (e) {
                                    _546.receiveMessage(e, _546);
                                }, false);
                            } else {
                                window.addEventListener("message", function (e) {
                                    _546.receiveMessage(e, _546);
                                }, false);
                            }
                            _546.messageInitStatus = true;
                        }
                        _546.openOwnUrl(ibmweb.config.opinionlab.customSurvey.surveys[0].type.url);
                    } else {
                        _546.oo_floating.options.disappearOnClick = false;
                        _546.oo_floating.show();
                        _546.disableGrayAreaAction();
                    }
                }));
            }
        }, openOwnUrl: function (url) {
            var _552 = (ibmweb.config.opinionlab.customSurvey.surveys[0].type.content && ibmweb.config.opinionlab.customSurvey.surveys[0].type.content.length > 0) ? ibmweb.config.opinionlab.customSurvey.surveys[0].type.content : "";
            var ID = (ibmweb.config.opinionlab.customSurvey.surveys[0].type.ID && ibmweb.config.opinionlab.customSurvey.surveys[0].type.ID.length > 0) ? ibmweb.config.opinionlab.customSurvey.surveys[0].type.ID : "";
            var _553 = this;
            var _554 = dojo.create("div", {"class": "ibm-common-overlay", id: "ol_overlay_box", "role": "alert", "aria-describedby": "comment_card_description", style: {position: "relative"}}, dojo.body()), _555 = dojo.create("div", {"id": "ol_overlay_loading", style: {display: "block", position: "absolute", width: "100%", height: "100%", top: "0px", backgroundImage: "url(" + ibmweb.config.dojoDomain + "i/v17/opinionlab/oo_loading.gif)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundColor: "#000000", opacity: ".6", filter: "alpha(opacity=50)"}}, _554), _556 = encodeURIComponent(window.location.href), _557 = function () {
                setTimeout(function () {
                    var _558 = dijit.byId("dialog_ol_overlay_box");
                    if (typeof _558 !== "undefined") {
                        _558._position();
                    }
                    dojo.style(_555, {display: "none"});
                }, 50);
                _553.hideFeedbackDetect();
                try {
                    this.contentWindow.postMessage("message", window.location.protocol + "//" + ibmweb.config.opinionlab.customSurvey.surveys[0].type.url.split("/")[2]);
                } catch (e) {
                }
            }, _559 = function () {
                var _55a = window.location.search.substr(1), data = _55a.split("&"), _55b = {};
                for (var i = 0; i < data.length; i++) {
                    var item = data[i].split("=");
                    _55b[item[0]] = item[1];
                }
                return _55b;
            }, _55c = _559(), urlQ = "";
            for (var d in _55c) {
                if (_55c.hasOwnProperty(d) && typeof _55c[d] !== "undefined") {
                    urlQ += "&" + d + "=" + encodeURIComponent(_55c[d]);
                }
            }
            if (dojo.isIE < 9) {
                dojo.style(_555, {filter: "alpha(opacity=50)"});
            }
            if (ibmweb.config.opinionlab.customSurvey && ibmweb.config.opinionlab.customSurvey.surveys && ibmweb.config.opinionlab.customSurvey.surveys[0].fake && ibmweb.config.opinionlab.customSurvey.surveys[0].fakeURL) {
                _556 = encodeURIComponent(ibmweb.config.opinionlab.customSurvey.surveys[0].fakeURL);
            }
            this.iframe = dojo.create("iframe", {src: url + ((url.search(/\?/) > -1) ? "&" : "?") + "cc=" + ibmweb.meta.cc + "&lc=" + ibmweb.meta.lc + "&content=" + _552 + "&ID=" + ID + urlQ + "&pageURL=" + encodeURIComponent(window.location.href) + "&url=" + _556, id: "OnlineOpinionIframeOwnUrl", name: "OnlineOpinion1", title: "Comment Card", style: {height: "460px"}}, _554);
            if (ibmweb.config.opinionlab.customSurvey.surveys[0].type.height && ibmweb.config.opinionlab.customSurvey.surveys[0].type.height.length > 0) {
                dojo.style(this.iframe, "height", ibmweb.config.opinionlab.customSurvey.surveys[0].type.height + "px");
            }
            if (ibmweb.config.opinionlab.customSurvey.surveys[0].type.width && ibmweb.config.opinionlab.customSurvey.surveys[0].type.width.length > 0) {
                dojo.style(_554, "width", ibmweb.config.opinionlab.customSurvey.surveys[0].type.width + "px");
                dojo.style(this.iframe, "width", ibmweb.config.opinionlab.customSurvey.surveys[0].type.width + "px");
            }
            if (this.iframe.attachEvent) {
                this.iframe.attachEvent("onload", _557);
            } else {
                this.iframe.onload = _557;
            }
            ibmweb.overlay.show("ol_overlay_box", this);
            if (typeof dijit.byId("dialog_ol_overlay_box") !== "undefined") {
                dojo.connect(dijit.byId("dialog_ol_overlay_box"), "onHide", function () {
                    _553.iframe = null;
                    if (dojo.query(".dijitDialogUnderlayWrapper").length == 1) {
                        dojo.query(".dijitDialogUnderlayWrapper")[0].style.zIndex = "949";
                    }
                    if (dojo.query(dijit.byId("dialog_ol_overlay_box").domNode).length == 1) {
                        dijit.byId("dialog_ol_overlay_box").domNode.style.zIndex = "950";
                    }
                });
                if (dojo.query(".dijitDialogUnderlayWrapper").length == 1) {
                    dojo.query(".dijitDialogUnderlayWrapper")[0].style.zIndex = "999998";
                }
                if (dojo.query(dijit.byId("dialog_ol_overlay_box").domNode).length == 1) {
                    dijit.byId("dialog_ol_overlay_box").domNode.style.zIndex = "999999";
                }
            }
        }, messageInitStatus: false, messageOLFS: false, receiveMessage: function (_55d, _55e) {
            if (_55d.data == "olfs_true") {
                _55e.messageOLFS = true;
            }
        }, hideFeedbackDetect: function () {
            var t = 3600000, _55f = this;
            if (ibmweb.config.opinionlab.floating.hide) {
                t = parseFloat(ibmweb.config.opinionlab.floating.hide);
            }
            ibmweb.opinionlab.fbPolice = setInterval(function () {
                if (_55f.iframe === null) {
                    _55f.hideFeedback(t);
                }
            }, 50);
        }, hideFeedback: function (t) {
            var _560 = this;
            clearInterval(ibmweb.opinionlab.fbPolice);
            setTimeout(function () {
                if (typeof dijit.byId("dialog_ol_overlay_box") !== "undefined") {
                    dijit.byId("dialog_ol_overlay_box").destroy();
                }
            }, 50);
            if (this.messageOLFS) {
                if (_560.oo_cc_wraper) {
                    dojo.destroy(_560.oo_cc_wraper);
                }
                dojo.style(_560.oo_floating.floatingLogo, "display", "none");
                setTimeout(function () {
                    dojo.style(_560.oo_floating.floatingLogo, "display", "block");
                }, t);
                this.messageOLFS = false;
            }
        }});
    ibmweb.opinionlab = ibmweb.opinionlab || {};
    (function () {
        ibmweb.opinionlab.CommentCard = _561;
        function _561(_562) {
            _562 = _562 || {};
            var _563 = true;
            var me = this, _564 = {}, _565 = {}, _566 = {};
            this.init = init;
            function init(_567) {
                _564 = {"ccid": "", "time1": new Date().getTime(), "time2": "", "prev": "", "referer": window.location.href, "url": window.location.href, "width": screen.width, "height": screen.height, "comment_card": "1", "thank_you": "1", "ip_address_optout": "", "custom_var": "null|undefined/undefined/undefined|iframe ", "preview_id": "", "currentURL": window.location.href, "ocodeVersion": "5.6.5", "ocodePatch": "", "customVars": _568(_566)};
                data(_567);
            }
            ;
            this.data = data;
            function data(_569) {
                if (typeof (_569) != "undefined") {
                    dojo.mixin(_564, _569);
                    return me;
                } else {
                    return _564;
                }
            }
            ;
            this.prepQuestion = _56a;
            function _56a(_56b, id) {
                _56b = parseInt(_56b, 10);
                _565[id] = _56b;
                var _56c = {};
                _56c["question" + _56b] = id;
                data(_56c);
            }
            ;
            this.prepQuestions = _56d;
            function _56d(ids) {
                var _56e = null;
                dojo.forEach(ids, function (id) {
                    _56e = _56f(_565) + 1;
                    _56a(_56e, id);
                });
                function _56f(obj) {
                    var _570 = 0;
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            _570++;
                        }
                    }
                    return _570;
                }
                ;
            }
            ;
            this.setAnswer = _571;
            function _571(id, _572) {
                var _573 = {};
                _573["answer_" + id] = _572;
                data(_573);
            }
            ;
            this.setOverallRating = _574;
            function _574(val) {
                data({"overall": val});
            }
            ;
            this.setComment = _575;
            function _575(val) {
                data({"comments": val});
            }
            ;
            this.setCustomVars = _576;
            function _576(_577) {
                dojo.mixin(_566, _577);
                var cvs = _568(_566);
                data({customVars: cvs});
                return me;
            }
            ;
            this.ol_stringify = _568;
            function _568(obj) {
                var cvs = "";
                cvs += "";
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        cvs += ",";
                        cvs += key;
                        cvs += ":";
                        switch (typeof (obj[key])) {
                            case "string":
                                cvs += "'" + obj[key] + "'";
                                break;
                            case "number":
                                cvs += obj[key];
                                break;
                            case "function":
                                cvs += "'function'";
                                break;
                            case "object":
                                if (obj[key] === null) {
                                    cvs += "null";
                                } else {
                                    if (dojo.isArray(obj[key])) {
                                        cvs += "'[Array of " + obj[key].length + " items]'";
                                    } else {
                                        if (typeof (obj[key].toString) != "undefined") {
                                            cvs += "'" + obj[key].toString() + "'";
                                        } else {
                                            cvs += "'Unknown Object'";
                                        }
                                    }
                                }
                                break;
                            }
                    }
                }
                cvs = "{" + cvs.substring(1);
                cvs += "}";
                return cvs;
            }
            ;
            this.getCustomVars = _578;
            function _578() {
                return _566;
            }
            ;
            this.setCustomVar = _579;
            function _579(key, val) {
                var obj = {};
                obj[key] = val;
                return _576(obj);
            }
            ;
            this.clearCustomVars = _57a;
            function _57a() {
                _566 = {};
                data({customVars: _568(_566)});
                return me;
            }
            ;
            this.deleteCustomVar = _57b;
            function _57b(key) {
                var val = _566[key];
                delete _566[key];
                data({customVars: _568(_566)});
                return val;
            }
            ;
            this.send = send;
            function send() {
                data({time2: new Date().getTime()});
                var url = "https://secure.opinionlab.com/rate40.asp";
                dojo.io.iframe.send({url: url, method: "POST", content: _564});
                return me;
            }
            ;
            if (_563) {
                init(_562);
            }
        }
        ;
    })();
    ibmweb.opinionlab = ibmweb.opinionlab || {};
    ibmweb.opinionlab.customSurvey = function (_57c) {
        var _57d = {config: dojo.mixin({}, {aboutFeedbackText: "About feedback at IBM", aboutFeedbackOverlayId: "oplabsurvey-about-feedback-overlay", aboutFeedbackOverlayTitle: "Ongoing Web Feedback at IBM", aboutFeedbackOverlayContent: "<p>IBM collects opt-in feedback from IBM web users on a broad and continual basis throughout it's web sites. All feedback submitted are reviewed only by IBM employees or IBM affiliates and no feedback is shared outside of IBM for any reason. See IBM's <a target=\"_blank\" href=\"http://www.ibm.com/privacy/us/en/\">privacy policy</a> and <a target=\"_blank\" href=\"http://www.ibm.com/legal/us/en/\">terms of use</a> for further detail.</p><p> IBM may use a third party to collect or process feedback. Any such party is also bound by the IBM policy. Currently we use opinionlab for feedback processing.</p><p class=\"ibm-ind-link\"><a class=\"ibm-external-link\" href=\"http://www.opinionlab.com\" target=\"_blank\">OpinionLab</a></p><p>Your input is very valuable to us and although we read every comment that is sent to IBM in an effort to continuouslyimprove our web sites for you, we generally do not reply to comments from this system unless otherwise stated. Thank you for participating in the IBM web feedback program. </p>", ccid: 0, comments: {enabled: true, placeholder: "Help us improve your IBM online experience by providing your comments here."}, container: false, customQuestions: [], customQuestionsIds: [], customVariables: {}, description: "", feedbackText: "Feedback", feedbackAnonymousText: "Your feedback is anonymous.", heading: "Rate this page", rating: {enabled: true, type: "stars"}, ratingLabels: {label5: "Yes", label1: "No"}, submitInterval: 60, submitText: "Submit", thankyouMsg: "Thank you for your feedback", trayDisplayTime: 3, trayShowOnLoad: 0, type: {display: "inline", form: "inline"}, serviceLink: {enabled: false, linkUrl: "", fullText: "", textPartOfLink: ""}, fake: false, fakeURL: ""}, _57c), elements: {}, $form: {}}, _57e = {"ccid": _57d.config.ccid, "comment_card": "1t", "currentURL": window.location.href, "customVariables": {}, "custom_var": "null|undefined/undefined/undefined|iframe ", "height": screen.height, "ip_address_optout": "", "ocodePatch": "", "ocodeVersion": "5.6.5", "prev": document.referrer, "preview_id": "", "referer": window.location.href, "thank_you": "1", "time1": new Date().getTime(), "time2": "", "url": "", "width": screen.width}, _57f = {surveyKey: "s-" + _57d.config.ccid + window.location.href, setFlag: function () {
                ibmweb.storage.setItem(_57f.surveyKey, new Date().getTime());
            }}, _580, _581 = (parseInt(ibmweb.storage.getItem("opltrn")) > 0 ? parseInt(ibmweb.storage.getItem("opltrn")) : 0);
        _57d.config.formId = "oplabsurvey-" + _57d.config.ccid + "-form";
        _57d.config.overlayLinkTrigger = "<div class=\"oplabsurvey-overlay-trigger\"><span class=\"ibm-access\">Screen reader users: Please switch to forms mode for this link.</span><a class=\"oplabsurvey-tray-tab\" href=\"#\">" + _57d.config.feedbackText + "</a></div>";
        _57d.config.submitIntervalMs = _57d.config.submitInterval * 60 * 1000;
        _57d.config.surveyOverlayId = "oplabsurvey-" + _57d.config.ccid + "-overlay";
        _57d.config.trayDisplayTimeMs = _57d.config.trayDisplayTime * 1000;
        _57d.config.trayShowOnLoadMs = _57d.config.trayShowOnLoad * 1000;
        var url = ibmweb.config.dojoDomain + "common/";
        if (dojo.query("link[href$=\"/common/v17/css/external/oplabcustomsurvey.css\"]").length === 0) {
            dojo.create("link", {type: "text/css", rel: "stylesheet", href: url + "v17/css/external/oplabcustomsurvey.css"}, dojo.query("head")[0]);
        }
        var _582 = new ibmweb.opinionlab.CommentCard({ccid: _57e.ccid});
        function _583() {
            var _584 = dojo.cookie("w3ibmProfile");
            if (_584) {
                var hkey = _584.split("|")[0], name = ibmweb.storage.getItem("w3UserName_" + hkey), _585 = ibmweb.storage.getItem("w3UserEmail_" + hkey);
                if (name && _585) {
                    ibmweb.opinionlab.defaults.customVariables.userName = name;
                    ibmweb.opinionlab.defaults.customVariables.userEmail = _585;
                    ibmweb.opinionlab.defaults.emailInfoLoaded = true;
                } else {
                    var _586 = "//w3.ibm.com/w3restsvc/user/1.0.0/$appid/json/hkey/$hkey/callback/$callback", _587 = "6127839ee7627460c4189e36fc6b1b01", _588 = _586.replace("$appid", _587).replace("$hkey", hkey).replace("$callback", "ibmweb.opinionlab.setUserData");
                    dojo.io.script.get({url: _588});
                }
            }
        }
        ;
        function _589() {
            var _58a = dojo.window.getBox().h, _58b = dojo.query("#oplabsurvey-tray"), _58c = dojo.position(_58b[0]).h, _58d = dojo.query(".oplabsurvey-tray-tab", _58b[0]), dump = _58b.style("minHeight", dojo.position(_58d[0]).h + "px"), _58e = dojo.position(_58d[0]), _58f = (_58e.h > _58e.w) ? _58e.h : _58e.w, $sbs = dojo.query("#ibm-social-tools"), _590 = 20, _591, _592, _593;
            _592 = Math.round((_58a - _58f) / 2);
            if ($sbs[0]) {
                _593 = dojo.position($sbs[0]).y + dojo.position($sbs[0]).h + _590;
                if (_592 < _593) {
                    _592 = _593;
                }
            }
            _591 = _592 - (_58c - _58f);
            if (_591 < 10) {
                _591 = 10;
            }
            _58b.style("top", Math.round(_591) + "px");
        }
        ;
        function _594() {
            dojo.query(".oplabsurvey-charcount").forEach(function (_595) {
                var _596 = dojo.query("#" + dojo.query(_595).attr("data-field")[0]), _597 = 0, _598 = dojo.query("span", _595);
                if (_596.attr("data-maxlength")[0] == null || _596.attr("data-maxlength")[0] == 0) {
                    return;
                }
                _597 = _596.attr("data-maxlength")[0];
                _596.onkeyup(function () {
                    _598.html(_597 - this.value.length);
                    if (_597 - this.value.length < 1) {
                        _598.addClass("ibm-error");
                    } else {
                        _598.removeClass("ibm-error");
                    }
                }).onkeypress(function () {
                    _598.html(_597 - this.value.length);
                    if (_597 - this.value.length < 1) {
                        _598.addClass("ibm-error");
                    } else {
                        _598.removeClass("ibm-error");
                    }
                });
            });
        }
        ;
        function _599() {
            dojo.query(_57d.$form).onsubmit(function (evt) {
                if (dojo.query("input[name='keepanony']:checked", _57d.$form[0]).length > 0 && dojo.query("input[name='keepanony']:checked", _57d.$form[0])[0].value == "yes") {
                    var _59a = false;
                } else {
                    var _59a = true;
                }
                if (dojo.query("input[name='overall']:checked", _57d.$form[0]).length == 0) {
                    dojo.stopEvent(evt);
                    alert("Please select a rating.");
                    return;
                }
                if (ibmweb.config.get("opinionlab").getUserInfo === true && ibmweb.config.get("opinionlab").promptUserInfo === true && ibmweb.config.get("opinionlab").requirePrompt === true && (typeof ibmweb.opinionlab.defaults != "undefined" && typeof ibmweb.opinionlab.defaults.customVariables != "undefined" && ibmweb.opinionlab.defaults.customVariables.userEmail != "") && dojo.query("input[name='keepanony']:checked", _57d.$form[0]).length === 0) {
                    dojo.stopEvent(evt);
                    alert("Please select a anonymity data.");
                    return;
                }
                dojo.stopEvent(evt);
                _582.setOverallRating(dojo.query("input[name='overall']:checked", _57d.$form[0]).val());
                _582.setComment(dojo.query("textarea[name='comments']", _57d.$form[0]).val());
                if (_57d.config.topicSelector) {
                    if (_57d.config.topicSelector.required && dojo.query("[name=\"" + _57d.config.topicSelector.name + "\"]")[0].value == "") {
                        dojo.stopEvent(evt);
                        alert("Please select a topic");
                        return;
                    }
                    var _59b = dojo.query("[name=\"" + _57d.config.topicSelector.name + "\"]")[0].value;
                    _582.setAnswer(_57d.config.topicSelector.name, _59b);
                }
                if (typeof _57d.config.url != "undefined" && _57d.config.url != "") {
                    _582.data({url: _57d.config.url});
                }
                _5d3();
                if (ibmweb.opinionlab.defaults && ibmweb.opinionlab.defaults.customVariables) {
                    dojo.mixin(_57e.customVariables, ibmweb.opinionlab.defaults.customVariables);
                }
                if (ibmweb.opinionlab.customVariables) {
                    dojo.mixin(_57e.customVariables, ibmweb.opinionlab.customVariables);
                }
                dojo.mixin(_57e.customVariables, _57d.config.customVariables);
                if (_59a) {
                    delete _57e.customVariables.userName;
                    delete _57e.customVariables.userEmail;
                }
                if (_57d.config.fake) {
                    _582.data({url: _57d.config.fakeURL});
                }
                _582.clearCustomVars().setCustomVars(_57e.customVariables).send();
                _57f.setFlag();
                dojo.query(_57d.$form).addClass("submitted");
                if (_57d.config.type.form === "overlay") {
                    _59c(true);
                }
                if (_57d.config.type.form === "inline") {
                    _59d(true);
                }
                if (_57d.config.type.form === "tray" || _57d.config.type.display === "tray") {
                    _59e(true);
                }
                if (dojo.query("#" + _57d.config.surveyOverlayId).length == 1) {
                    ibmweb.overlay.hide(_57d.config.surveyOverlayId, this);
                }
                if (dojo.query("#oplabsurvey-tray").length == 1 && !dojo.hasClass("oplabsurvey-tray", "minimized")) {
                    setTimeout(_5e6, 2000);
                }
                setTimeout(function () {
                    _59c(false);
                    _59d(false);
                    _59e(false);
                    dojo.query(_57d.$form).removeClass("submitted");
                }, _57d.config.submitIntervalMs);
            });
        }
        ;
        function _59f(_5a0, _5a1) {
            if (_57d.config.rating.enabled !== true) {
                return;
            }
            if (_57d.config.rating.type == "stars") {
                dojo.query("ul li", _5a0).onmouseover(function () {
                    dojo.query(this).addClass("highlighted").prevAll().addClass("highlighted");
                    dojo.query(this).nextAll().removeClass("highlighted");
                }).onclick(function (evt) {
                    dojo.stopEvent(evt);
                    var ipt = dojo.query(this).siblings().children("input");
                    if (ibmweb.info.isIE) {
                        ipt[0].checked = false;
                        ipt.removeAttr("checked");
                    } else {
                        ipt.removeAttr("checked");
                    }
                    var _5a2 = dojo.query("input", this);
                    if (ibmweb.info.isIE) {
                        _5a2[0].checked = true;
                        _5a2.attr("checked", "checked");
                    } else {
                        _5a2.attr("checked", "checked");
                    }
                    if (_5a1 == true) {
                        _5a3(dojo.query("input", this).val());
                    }
                });
                dojo.query("ul", _5a0).onmouseout(function () {
                    _5a4(dojo.query("ul", _5a0)[0]);
                });
            } else {
                if (_57d.config.rating.type == "yes-no") {
                    dojo.addClass("oplabsurvey-tray", "yes-no");
                    dojo.query("input", _5a0).onclick(function (evt) {
                        if (_5a1 == true) {
                            _5a3(dojo.query(this).val());
                        }
                    });
                }
            }
        }
        ;
        function _5a4(_5a5) {
            if (dojo.query("input:checked", _5a5).length == 0) {
                dojo.query("li", _5a5).removeClass("highlighted");
            } else {
                dojo.query("input:checked", _5a5).parent().addClass("highlighted").prevAll().addClass("highlighted");
                dojo.query("input:checked", _5a5).parent().nextAll().removeClass("highlighted");
            }
        }
        ;
        function _5a6() {
            var _5a7 = true;
            label = " May we contact you regarding your comments ?";
            var _5a8 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If no, then your feedback will be anonymous";
            if (ibmweb.opinionlab.defaults && ibmweb.opinionlab.defaults.customVariables && ibmweb.opinionlab.defaults.customVariables.userEmail != "") {
                var _5a9 = "<div>Name: " + ibmweb.opinionlab.defaults.customVariables.userName + "</div><div style=\"margin-top: 5px;\">Email: " + ibmweb.opinionlab.defaults.customVariables.userEmail + "</div>";
            } else {
                var _5a9 = "";
            }
            if (ibmweb.config.get("opinionlab").requirePrompt === true) {
                label = "<span class=\"ibm-required\">*</span>" + label;
                _5a7 = false;
            }
            showText = _5aa({omitParWrapper: false, label: label, type: "radio", name: "keepanony", value: [{label: "yes&nbsp;&nbsp;", value: "yes", checked: false}, {label: "no" + _5a8, value: "no", checked: _5a7}]});
            if (ibmweb.config.get("opinionlab").getUserInfo && ibmweb.config.get("opinionlab").promptUserInfo) {
                showText += "<div id=\"oplabsurvey-anonytext-content\">" + _5a9 + "</div>";
            } else {
                showText += "<div id=\"oplabsurvey-anonytext-content\">" + _57d.config.feedbackAnonymousText + "</div>";
            }
            return showText;
        }
        ;
        function _5ab() {
            var _5ac = "<p>" + _57d.config.feedbackAnonymousText + "</p>";
            if (ibmweb.config.get("opinionlab").getUserInfo === true && ibmweb.config.get("opinionlab").promptUserInfo === true && ibmweb.opinionlab.defaults && ibmweb.opinionlab.defaults.customVariables && ibmweb.opinionlab.defaults.customVariables.userEmail != "") {
                _5ac = _5a6();
                ibmweb.queue.push(function () {
                    if (dojo.query("[name=\"keepanony\"]").length > 0) {
                        return true;
                    } else {
                        return false;
                    }
                }, function () {
                    dojo.forEach(dojo.query("[name=\"keepanony\"]"), function (node, _5ad) {
                        dojo.connect(node, "click", function (e) {
                            if (ibmweb.opinionlab.defaults && ibmweb.opinionlab.defaults.customVariables && ibmweb.opinionlab.defaults.customVariables.userEmail != "") {
                                var _5ae = "<div>Name: " + ibmweb.opinionlab.defaults.customVariables.userName + "</div><div style=\"margin-top: 5px;\">Email: " + ibmweb.opinionlab.defaults.customVariables.userEmail + "</div>";
                            } else {
                                var _5ae = "";
                            }
                            if (node.value == "yes" && node.checked) {
                                dojo.byId("oplabsurvey-anonytext-content").innerHTML = _5ae;
                                dojo.query("label[for=\"" + dojo.query("[value=\"no\"]")[0].id + "\"]")[0].innerHTML = "no&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If no, then your feedback will be anonymous";
                            } else {
                                dojo.byId("oplabsurvey-anonytext-content").innerHTML = _57d.config.feedbackAnonymousText;
                                dojo.query("label[for=\"" + dojo.query("[value=\"no\"]")[0].id + "\"]")[0].innerHTML = "no";
                            }
                        });
                    });
                });
            } else {
                if (ibmweb.config.get("opinionlab").getUserInfo === true && ibmweb.config.get("opinionlab").promptUserInfo === true && (ibmweb.config.get("opinionlab").requirePrompt === true || ibmweb.config.get("opinionlab").requirePrompt === false) && (typeof ibmweb.opinionlab.defaults == "undefined" || typeof ibmweb.opinionlab.defaults.customVariables == "undefined" || typeof ibmweb.opinionlab.defaults.customVariables.userEmail == "undefined")) {
                    _5ac = _5a6();
                    ibmweb.queue.push(function () {
                        if (dojo.query("[name=\"keepanony\"]").length > 0) {
                            return true;
                        } else {
                            return false;
                        }
                    }, function () {
                        dojo.forEach(dojo.query("[name=\"keepanony\"]"), function (node, _5af) {
                            dojo.connect(node, "click", function (e) {
                                if (node.value == "yes" && node.checked) {
                                    dojo.byId("oplabsurvey-anonytext-content").innerHTML = "";
                                    var _5b0 = "<div class=\"ibm-common-overlay\" id=\"oplabsurvey-anonytext-data-overlay\"> <div class=\"ibm-head\"> <p><a class=\"ibm-common-overlay-close\" href=\"#close\">Close [x]</a></p> </div> <div class=\"ibm-body\"> <div class=\"ibm-main\"> <div class=\"ibm-title ibm-subtitle\"> <h2>Feedback Information</h2> </div> <div class=\"ibm-container ibm-alternate ibm-buttons-last\"> <div class=\"ibm-container-body\"> <form action=\"#\" class=\"ibm-row-form\" enctype=\"multipart/form-data\" method=\"post\"> <p><label for=\"name\">Name:<span class=\"ibm-required\">*</span></label><span><input name=\"oplabsurvey-anonytext-data-name\" size=\"25\" value=\"\" style=\"width: 200px;\" class=\"required\" type=\"text\" /></span></p> <p><label for=\"email\">Email:<span class=\"ibm-required\">*</span></label><span><input name=\"oplabsurvey-anonytext-data-email\" size=\"25\" value=\"\" style=\"width: 200px;\" class=\"required\" type=\"text\" /></span></p><div class=\"ibm-overlay-rule\"><hr /> </div> <p class=\"ibm-first\"><input class=\"ibm-btn-arrow-sec\" name=\"oplabsurvey-anonytext-data-submit\" value=\"Save\" type=\"button\" /></p> </form> </div> </div> </div> </div> </div>";
                                    dojo.place(_5b0, dojo.query("body")[0], "last");
                                    ibmweb.overlay.show("oplabsurvey-anonytext-data-overlay");
                                    ibmweb.queue.push(function () {
                                        return typeof dijit.byId("dialog_oplabsurvey-anonytext-data-overlay") !== "undefined";
                                    }, function () {
                                        dojo.connect(dojo.query("[name=\"oplabsurvey-anonytext-data-submit\"]")[0], "click", function () {
                                            if (dojo.query(".ibm-error-link", dojo.query("[name=\"oplabsurvey-anonytext-data-name\"]")[0].parentElement).length > 0) {
                                                dojo.query(".ibm-error-link", dojo.query("[name=\"oplabsurvey-anonytext-data-name\"]")[0].parentElement).forEach(function (node, _5b1) {
                                                    dojo.destroy(node, dojo.query("[name=\"oplabsurvey-anonytext-data-name\"]")[0].parentElement);
                                                });
                                            }
                                            if (dojo.query(".ibm-error-link", dojo.query("[name=\"oplabsurvey-anonytext-data-email\"]")[0].parentElement).length > 0) {
                                                dojo.query(".ibm-error-link", dojo.query("[name=\"oplabsurvey-anonytext-data-email\"]")[0].parentElement).forEach(function (node, _5b2) {
                                                    dojo.destroy(node, dojo.query("[name=\"oplabsurvey-anonytext-data-email\"]")[0].parentElement);
                                                });
                                            }
                                            if (dojo.query("[name=\"oplabsurvey-anonytext-data-name\"]")[0].value === "") {
                                                dojo.place("<a title=\"Error link\" href=\"#\" class=\"ibm-error-link\">Error</a>", dojo.query("[name=\"oplabsurvey-anonytext-data-name\"]")[0].parentElement, "last");
                                                return;
                                            } else {
                                                ibmweb.opinionlab.defaults.customVariables.userName = dojo.query("[name=\"oplabsurvey-anonytext-data-name\"]")[0].value;
                                            }
                                            if (dojo.query("[name=\"oplabsurvey-anonytext-data-email\"]")[0].value === "") {
                                                dojo.place("<a title=\"Error link\" href=\"#\" class=\"ibm-error-link\">Error</a>", dojo.query("[name=\"oplabsurvey-anonytext-data-email\"]")[0].parentElement, "last");
                                                return;
                                            } else {
                                                ibmweb.opinionlab.defaults.customVariables.userEmail = dojo.query("[name=\"oplabsurvey-anonytext-data-email\"]")[0].value;
                                            }
                                            ibmweb.overlay.hide("oplabsurvey-anonytext-data-overlay");
                                        });
                                        dojo.connect(dijit.byId("dialog_oplabsurvey-anonytext-data-overlay"), "onHide", function () {
                                            if ((typeof ibmweb.opinionlab.defaults == "undefined" || typeof ibmweb.opinionlab.defaults.customVariables == "undefined" || typeof ibmweb.opinionlab.defaults.customVariables.userEmail == "undefined")) {
                                                dojo.attr(dojo.query("[value=\"no\"]")[0], "checked", true);
                                                dojo.byId("oplabsurvey-anonytext-content").innerHTML = _57d.config.feedbackAnonymousText;
                                                dojo.query("label[for=\"" + dojo.query("[value=\"no\"]")[0].id + "\"]")[0].innerHTML = "no";
                                            } else {
                                                var _5b3 = "<div>Name: " + ibmweb.opinionlab.defaults.customVariables.userName + "</div><div style=\"margin-top: 5px;\">Email: " + ibmweb.opinionlab.defaults.customVariables.userEmail + "</div>";
                                                dojo.byId("oplabsurvey-anonytext-content").innerHTML = _5b3;
                                                dojo.query("label[for=\"" + dojo.query("[value=\"no\"]")[0].id + "\"]")[0].innerHTML = "no&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If no, then your feedback will be anonymous";
                                            }
                                        });
                                    });
                                } else {
                                    dojo.byId("oplabsurvey-anonytext-content").innerHTML = _57d.config.feedbackAnonymousText;
                                    dojo.query("label[for=\"" + dojo.query("[value=\"no\"]")[0].id + "\"]")[0].innerHTML = "no";
                                }
                            });
                        });
                    });
                }
            }
            return _5ac;
        }
        ;
        function _5b4() {
            var html = "";
            if (_57d.config.customQuestions) {
                dojo.forEach(_57d.config.customQuestions, function (_5b5) {
                    html += _5aa(_5b5);
                    _57d.config.customQuestionsIds.push(_5b5.name);
                });
                _582.prepQuestions(_57d.config.customQuestionsIds);
            }
            return html;
        }
        ;
        function _5b6() {
            var html = "";
            var _5b7 = {};
            if (_57d.config.topicSelector) {
                _57d.config.topicSelector.type = "selectlist";
                html += _5aa(_57d.config.topicSelector);
                _582.data({"topic_selection": _57d.config.topicSelector.name});
                html = html.replace("Select one", "Choose a topic for your comments");
                if (_57d.config.topicSelector.required) {
                    html = html.replace(/<select/g, "<span class=\"ibm-required\">*</span><select");
                }
            }
            return html;
        }
        ;
        function _5aa(_5b8) {
            var _5b9 = {hideLabel: false, label: "", maxlength: 0, name: "", placeholder: "", showCharCounter: false, type: "", value: ""}, html = "", _5ba = "", _5bb = _5b8.type == "textarea" && _5b8.name == "comments" ? "<div class=\"oplabsurvey-anonytext\">" + _5ab() + "</div>" : "", _5bc = "", _5bd = "<p><label for=\"$id\">$label</label><input id=\"$id\" name=\"$name\" type=\"text\" placeholder=\"$placeholder\" value=\"$value\" maxlength=\"$maxlength\" data-maxlength=\"$maxlength\" /></p>", _5be = "<p><label for=\"$id\"$hideLabel>$label</label><textarea id=\"$id\" name=\"$name\" placeholder=\"$placeholder\" cols=\"$cols\" rows=\"$rows\" maxlength=\"$maxlength\" data-maxlength=\"$maxlength\">$value</textarea></p>", _5bf = "<input id=\"$id\" name=\"$name\" value=\"$value\" type=\"radio\" $checked /><label for=\"$id\">$label</label>", _5c0 = "<input name=\"$name\" id=\"$id\" value=\"$value\" type=\"checkbox\" $checked/> <label for=\"$id\">$label</label>", _5c1 = "<option value=\"$value\">$label</option>";
            dojo.mixin(_5b9, _5b8);
            switch (_5b9.type) {
                case "text":
                    html = _5bd.replace(/\$id/g, _5b9.name + _57d.config.ccid).replace(/\$name/, _5b9.name).replace(/\$value/, _5b9.value).replace(/\$label/, _5b9.label).replace(/\$placeholder/, _5b9.placeholder);
                    if (_5b9.maxlength > 0) {
                        html = html.replace(/\$maxlength/g, _5b9.maxlength);
                    }
                    break;
                case "textarea":
                    html = _5be.replace(/\$id/g, _5b9.name + _57d.config.ccid).replace(/\$name/, _5b9.name).replace(/\$value/, _5b9.value).replace(/\$label/, _5b9.label).replace(/\$placeholder/, _5b9.placeholder);
                    if (_5b9.cols != undefined && _5b9.cols > 0) {
                        html = html.replace(/\$cols/, _5b9.cols);
                    } else {
                        html = html.replace(/\$cols/, "");
                    }
                    if (_5b9.rows != undefined && _5b9.rows > 0) {
                        html = html.replace(/\$rows/, _5b9.rows);
                    } else {
                        html = html.replace(/\$rows/, "");
                    }
                    if (_5b9.hideLabel === true) {
                        html = html.replace(/\$hideLabel/, " class=\"ibm-access\"");
                    }
                    if (_5b9.showCharCounter === true) {
                        _5ba = "<div class=\"oplabsurvey-charcount oplabsurvey-align-right\" data-field=\"" + _5b9.name + _57d.config.ccid + "\"><p>Chars left: <span>" + _5b9.maxlength + "</span></p></div>";
                    }
                    if (_5bb != "" || _5ba != "") {
                        html += "<div class=\"oplabsurvey-comment-ta-notes\">" + _5bb + _5ba + "</div><br />";
                    }
                    if (_5b9.maxlength > 0) {
                        html = html.replace(/\$maxlength/g, _5b9.maxlength);
                    }
                    break;
                case "radio":
                    dojo.forEach(_5b9.value, function (item, i) {
                        var _5c2 = item.checked ? " checked=\"checked\"" : "";
                        _5bc += _5bf.replace(/\$id/g, _5b9.name + _57d.config.ccid + i).replace(/\$name/, _5b9.name).replace(/\$value/, item.value).replace(/\$label/, item.label).replace(/\$checked/, _5c2);
                    });
                    html = "<label id=\"" + _5b9.name + _57d.config.ccid + "-group\">" + _5b9.label + "</label><span class=\"ibm-input-group ibm-radio-group\">" + _5bc + "</span>";
                    if (_5b9.omitParWrapper == true) {
                        return html;
                    } else {
                        return "<p class=\"ibm-form-elem-grp\">" + html + "</p>";
                    }
                    break;
                case "checkbox":
                    dojo.forEach(_5b9.value, function (item, i) {
                        var _5c3 = item.checked ? " checked=\"checked\"" : "";
                        _5bc += _5c0.replace(/\$id/g, _5b9.name + _57d.config.ccid + i).replace(/\$name/, _5b9.name).replace(/\$value/, item.value).replace(/\$label/, item.label).replace(/\$checked/, _5c3);
                    });
                    html = "<label id=\"" + _5b9.name + _57d.config.ccid + "-group\">" + _5b9.label + "</label><span class=\"ibm-input-group\">" + _5bc + "</span>";
                    if (_5b9.omitParWrapper == true) {
                        return html;
                    } else {
                        return "<p class=\"ibm-form-elem-grp\">" + html + "</p>";
                    }
                    break;
                case "selectlist":
                    dojo.forEach(_5b9.value, function (item) {
                        _5bc += _5c1.replace(/\$value/, item.value).replace(/\$label/, item.label);
                    });
                    html = "<p><label for=\"" + _5b9.name + "\">" + _5b9.label + "</label><select id=\"" + _5b9.name + _57d.config.ccid + "\" name=\"" + _5b9.name + "\"><option value=\"\">Select one</option>" + _5bc + "</select></p>";
                    break;
                default:
            }
            return html;
        }
        ;
        function _5c4() {
            if (_57d.config.comments.enabled === false && _57d.config.customQuestions.length == 0) {
                _57d.elements.submitButton = "";
            }
            var html = "<form class=\"oplabsurvey-form\" id=\"oplabsurvey-" + _57d.config.ccid + "-form\" action=\"https://secure.opinionlab.com/rate40.asp\" method=\"post\">" + _57d.elements.surveyHeading + _57d.elements.surveySubhead + _57d.elements.ratingField + _57d.elements.customerServiceLink + _57d.elements.topicSelector + _57d.elements.commentField + _57d.elements.customFields + _57d.elements.aboutFeedbackLink + _57d.elements.submitButton + "</form>";
            return "<div class=\"oplabsurvey-maincontent\">" + html + "</div>";
        }
        ;
        function _5c5(v, _5c6) {
            return _5c6 ? "<h2 class=\"ibm-rule\">" + v + "</h2>" : "<h2>" + v + "</h2>";
        }
        ;
        function _5c7(o) {
            var html = "<div class=\"ibm-common-overlay\" id=\"" + o.id + "\"><div class=\"ibm-head\"><p><a class=\"ibm-common-overlay-close\" href=\"#close\">Close [x]</a></p></div><div class=\"ibm-body\"><div class=\"ibm-main\"><a class=\"ibm-access\" href=\"javascript:;\"><!-- Accessibility anchor --></a><div class=\"ibm-title\"><h2>" + o.heading + "</h2></div><div class=\"ibm-container ibm-alternate\"><div class=\"ibm-container-body\">" + o.content + "</div></div></div></div></div>";
            return html;
        }
        ;
        function _5c8() {
            var _5c9 = "", i = 0;
            if (_57d.config.rating.type == "stars") {
                for (i = 1; i < 6; i++) {
                    _5c9 += "<li><input type=\"radio\" class=\"ibm-access\" value=\"" + i + "\" name=\"overall\" id=\"rating-" + _57d.config.ccid + "-stars-" + i + "\"><label title=\"Rate this " + i + " stars\" for=\"rating-" + _57d.config.ccid + "-stars-" + i + "\"></label></li>";
                }
                return "<div class=\"oplabsurvey-rating-field\" data-type=\"stars\"><ul class=\"oplabsurvey-rating-stars\">" + _5c9 + "</ul></div>";
            } else {
                if (_57d.config.rating.type == "yes-no") {
                    _5c9 = "<input type=\"radio\" value=\"5\" name=\"overall\" id=\"rating-" + _57d.config.ccid + "-yesno-5\"><label title=\"Rate this yes\" for=\"rating-" + _57d.config.ccid + "-yesno-5\">" + _57d.config.ratingLabels.label5 + "</label> <input type=\"radio\" value=\"1\" name=\"overall\" id=\"rating-" + _57d.config.ccid + "-yesno-1\"><label title=\"Rate this no\" for=\"rating-" + _57d.config.ccid + "-yesno-1\">" + _57d.config.ratingLabels.label1 + "</label>";
                    return "<div class=\"oplabsurvey-rating-field\"><p>" + _5c9 + "</p></div>";
                }
            }
            return "";
        }
        ;
        function _5ca() {
            var html = _57d.elements.surveyHeading + _57d.elements.ratingField + _57d.elements.aboutFeedbackLink;
            return "<div class=\"oplabsurvey-maincontent\">" + html + "</div>";
        }
        ;
        function _5cb(v) {
            return "<div class=\"oplabsurvey-thankyoucontent\">" + v + "</div>";
        }
        ;
        function _5cc(_5cd) {
            var html = "<div id=\"oplabsurvey-tray\" class=\"minimized\"><span class=\"oplabsurvey-tray-close\"><a class=\"ibm-cancel-link\" href=\"javascript:;\" alt=\"X\"></a></span><span class=\"ibm-access\">Screen reader users: Please switch to forms mode for this link.</span><a class=\"oplabsurvey-tray-tab\" href=\"#\">" + _57d.config.feedbackText + "</a><div class=\"ibm-columns\"><div class=\"ibm-col-";
            var _5ce = dojo.query(".ibm-liquid");
            if (_5ce.length == 1) {
                html += "4-1";
            } else {
                html += "4-1";
            }
            html += "\">" + _5cd + "</div></div></div>";
            return html;
        }
        ;
        function _5cf() {
            var _5d0 = document.getElementById(_57d.config.formId);
            _5d0.reset();
            _5d1(dojo.query(".oplabsurvey-rating-field", _5d0)[0]);
        }
        ;
        function _5d1(_5d2) {
            if (ibmweb.info.isIE) {
                dojo.forEach(dojo.query("input", _5d2), function (i) {
                    i.checked = false;
                    dojo.query(i).removeAttr("checked");
                });
            } else {
                dojo.query("input", _5d2).removeAttr("checked");
            }
            if (_57d.config.rating.type == "stars") {
                _5a4(dojo.query("ul", _5d2)[0]);
            }
        }
        ;
        function _5d3() {
            dojo.forEach(_57d.config.customQuestionsIds, function (id) {
                var _5d4 = dojo.query("[name='" + id + "']", _57d.$form[0]).attr("type")[0], _5d5 = "";
                switch (_5d4) {
                    case "radio":
                        _5d5 = dojo.query("[name='" + id + "']:checked", _57d.$form[0]).val();
                        break;
                    case "checkbox":
                        dojo.query("[name='" + id + "']:checked", _57d.$form[0]).forEach(function (item) {
                            _5d5 += ", " + dojo.query(item).val();
                        });
                        _5d5 = _5d5.substr(2);
                        break;
                    default:
                        _5d5 = dojo.query("[name='" + id + "']", _57d.$form[0]).val();
                        break;
                }
                _582.setAnswer(id, _5d5);
            });
        }
        ;
        function _5a3(_5d6) {
            if (_5d6) {
                if (_57d.config.rating.type == "stars") {
                    dojo.query(".oplabsurvey-rating-stars li input[value='" + _5d6 + "']", _57d.$form[0]).attr("checked", "checked");
                    _5a4(dojo.query(".oplabsurvey-rating-stars", _57d.$form[0])[0]);
                } else {
                    if (_57d.config.rating.type == "yes-no") {
                        dojo.query(".oplabsurvey-rating-field input[value='" + _5d6 + "']", _57d.$form[0]).attr("checked", "checked");
                    }
                }
            }
            ibmweb.overlay.show(_57d.config.surveyOverlayId, this);
            _59d(true);
            _59e(true);
            setTimeout(function () {
                dojo.query("#dialog_" + _57d.config.surveyOverlayId + " .dijitDialogCloseIcon").onclick(function () {
                    if (!dojo.hasClass(dojo.query(_57d.$form)[0], "submitted")) {
                        dojo.query("#dialog_" + _57d.config.surveyOverlayId + " form input[type='submit']")[0].click();
                    }
                });
            }, 1500);
        }
        ;
        function _59d(show) {
            if (_57d.config.container.length == 0 || dojo.query(".oplabsurvey-maincontent", _57d.config.container[0]).length == 0) {
                return;
            }
            if (show) {
                _57d.config.container.addClass("oplabsurvey-thankyou");
                if (_57d.config.type.form == "inline") {
                    _5cf();
                } else {
                    _5d1(dojo.query(".oplabsurvey-rating-field", _57d.config.container[0])[0]);
                }
            } else {
                _57d.config.container.removeClass("oplabsurvey-thankyou");
            }
        }
        ;
        function _59c(show) {
            if (dojo.query("#" + _57d.config.surveyOverlayId).length == 0) {
                return;
            }
            if (show) {
                dojo.query("#" + _57d.config.surveyOverlayId + " .ibm-container-body").addClass("oplabsurvey-thankyou");
                _5cf();
            } else {
                dojo.query("#" + _57d.config.surveyOverlayId + " .ibm-container-body").removeClass("oplabsurvey-thankyou");
            }
        }
        ;
        function _59e(show) {
            if (dojo.query("#oplabsurvey-tray").length == 0) {
                return;
            }
            if (show) {
                dojo.query("#oplabsurvey-tray").addClass("oplabsurvey-thankyou");
                if (_57d.config.type.form == "inline") {
                    _5cf();
                } else {
                    _5d1(dojo.query(".oplabsurvey-rating-field", document.getElementById("oplabsurvey-tray"))[0]);
                }
            } else {
                dojo.query("#oplabsurvey-tray").removeClass("oplabsurvey-thankyou");
            }
            _589();
        }
        ;
        function _5d7() {
            dojo.ready(function () {
                if (!dojo.byId(_57d.config.aboutFeedbackOverlayId)) {
                    _57d.elements.surveyAboutFeedbackOverlay = _5c7({id: _57d.config.aboutFeedbackOverlayId, heading: _57d.config.aboutFeedbackOverlayTitle, content: _57d.config.aboutFeedbackOverlayContent});
                    dojo.place(_57d.elements.surveyAboutFeedbackOverlay, "ibm-content-main", "last");
                }
            });
        }
        ;
        function _5d8() {
            if (_57d.config.container.length == 1) {
                _57d.$form = dojo.query("form", _57d.config.container.html(_57d.elements.surveyFormHtml + _5cb(_5c5(_57d.config.thankyouMsg, true)))[0]);
                _59f(dojo.query(".oplabsurvey-rating-field", _57d.$form[0])[0]);
                _594();
                _599();
            }
        }
        ;
        function _5d9() {
            _5da();
            _57d.config.container.html(_5ca() + _5cb(_5c5(_57d.config.thankyouMsg, true)));
            _59f(dojo.query(".oplabsurvey-rating-field", _57d.config.container[0])[0], true);
            _59f(dojo.query(".oplabsurvey-rating-field", _57d.$form[0])[0], false);
        }
        ;
        function _5da() {
            var _5db = _5c7({id: _57d.config.surveyOverlayId, heading: _57d.config.thankyouMsg, content: _57d.elements.surveyFormHtml + _5cb("<p>" + _57d.config.thankyouMsg + "</p>")});
            _57d.$form = dojo.query("form", dojo.place(_5db, "ibm-content-main", "last"));
            if (_57d.config.type.display == "link") {
                _59f(dojo.query(".oplabsurvey-rating-field", _57d.$form[0])[0]);
            }
            _594();
            _599();
        }
        ;
        function _5dc() {
            var tray = dojo.place(_5cc(_57d.elements.surveyFormHtml + _5cb(_5c5(_57d.config.thankyouMsg))), "ibm-content-main", "last"), _580;
            _57d.$form = dojo.query("form", tray);
            dojo.query(tray).addClass("inline");
            dojo.connect(dojo.query(".oplabsurvey-tray-close")[0], "onclick", function (e) {
                e.preventDefault();
                _5cf();
                _5e6();
            });
            _59f(dojo.query(".oplabsurvey-rating-field", _57d.$form[0])[0]);
            _594();
            _599();
            if (_57d.config.trayShowOnLoad == 0) {
                if (_581 < 2) {
                    _5e6();
                    _580 = setTimeout(function () {
                        _5e6();
                    }, _57d.config.trayDisplayTimeMs);
                }
            } else {
                setTimeout(function () {
                    if (_581 < 2) {
                        _5e6();
                        _580 = setTimeout(function () {
                            _5e6();
                        }, _57d.config.trayDisplayTimeMs);
                    }
                }, _57d.config.trayShowOnLoad);
            }
            dojo.query(tray).onmouseover(function () {
                clearTimeout(_580);
            });
            dojo.query("a.oplabsurvey-tray-tab", tray).onclick(function (evt) {
                dojo.stopEvent(evt);
                _5cf();
                _5e6();
            });
            (function () {
                var _5dd = setInterval(function () {
                    _589();
                }, 25);
                setTimeout(function () {
                    clearInterval(_5dd);
                }, 5000);
            })();
            dojo.subscribe("/ibmweb/dynnav/sbs/finished", function () {
                _589();
            });
        }
        ;
        function _5de() {
            _5da();
            var tray = dojo.place(_5cc(_5ca() + _5cb(_5c5(_57d.config.thankyouMsg))), "ibm-content-main", "last"), _580;
            dojo.connect(dojo.query(".oplabsurvey-tray-close")[0], "onclick", function (e) {
                e.preventDefault();
                _5cf();
                _5e6();
            });
            _59f(dojo.query(".oplabsurvey-rating-field", tray)[0], true);
            _59f(dojo.query(".oplabsurvey-rating-field", _57d.$form[0])[0], false);
            if (_581 < 2) {
                _5e6();
                _580 = setTimeout(function () {
                    _5e6();
                }, _57d.config.trayDisplayTimeMs);
                dojo.query(tray).onmouseover(function () {
                    clearTimeout(_580);
                });
            }
            dojo.query("a.oplabsurvey-tray-tab", tray).onclick(function (evt) {
                dojo.stopEvent(evt);
                _5e6();
            });
            (function () {
                var _5df = setInterval(function () {
                    _589();
                }, 25);
                setTimeout(function () {
                    clearInterval(_5df);
                }, 5000);
            })();
            dojo.subscribe("/ibmweb/dynnav/sbs/finished", function () {
                _589();
            });
        }
        ;
        function _5e0() {
            _5da();
            var trig = dojo.place(_57d.config.overlayLinkTrigger, "ibm-content-main", "last"), _5e1 = dojo.query("a.oplabsurvey-tray-tab", trig);
            _5e2(_5e1);
            _5e1.onclick(function (evt) {
                dojo.stopEvent(evt);
                _5a3();
            });
        }
        ;
        function _5e2(_5e3) {
            var wh = window.innerHeight || document.documentElement.clientHeight, y = (wh - dojo.style(_5e3[0], "height")) / 2;
            if (ibmweb.config.sbs.enabled) {
                dojo.subscribe("/ibmweb/dynnav/sbs/finished", function () {
                    var _5e4 = dojo.position(dojo.byId("ibm-social-tools"), true), _5e5 = 6, b = _5e4.y + _5e4.h + 20;
                    y = parseInt(y) + parseInt(dojo.style(_5e3[0], "width")) + 20;
                    if (y <= b) {
                        y = b;
                    }
                    y = parseInt(y);
                    if (isNaN(y)) {
                        return;
                    }
                    if (dojo.isIE < 8) {
                        _5e3.style.cssText = "position: absolute;";
                    } else {
                        dojo.style(_5e3[0], {"position": "absolute", "right": (-Math.abs(dojo.style(_5e3[0], "height") + dojo.style(_5e3[0], "width") + 1)) + "px", "top": y + "px"});
                    }
                });
            } else {
                setTimeout(function () {
                    y = parseInt(y);
                    if (isNaN(y)) {
                        return;
                    }
                    if (dojo.isIE < 8) {
                        _5e3.style.cssText = "position: absolute;";
                    } else {
                        dojo.style(_5e3[0], {"position": "absolute", "right": (-Math.abs(dojo.style(_5e3[0], "height") + dojo.style(_5e3[0], "width") + 1)) + "px", "top": y + "px"});
                    }
                }, 300);
            }
        }
        ;
        function _5e6() {
            if (dojo.query("#oplabsurvey-tray").length == 0) {
                return;
            }
            clearTimeout(_580);
            dojo.toggleClass("oplabsurvey-tray", "minimized");
        }
        ;
        function _5e7() {
            var _5e8 = ibmweb.storage.getItem(_57f.surveyKey), _5e9 = false;
            if (_5e8 !== null) {
                if ((parseInt(_5e8) + parseInt(_57d.config.submitIntervalMs)) > new Date().getTime()) {
                    _5e9 = true;
                } else {
                    ibmweb.storage.removeItem(_57f.surveyKey);
                }
            }
            return _5e9;
        }
        ;
        function _5ea() {
            ibmweb.queue.push(function () {
                return ibmweb.opinionlab.defaults && ibmweb.opinionlab.defaults.emailInfoLoaded == true;
            }, function () {
                var _5eb = _5ab();
                dojo.query(".oplabsurvey-anonytext").html(_5eb);
            });
        }
        ;
        function _5ec() {
            if (_5e7() == true) {
                dojo.query(_57d.$form).addClass("submitted");
                _59c(true);
                _59d(true);
                _59e(true);
            } else {
                _59c(false);
                _59d(false);
                _59e(false);
            }
        }
        ;
        function _5ed() {
            var _5ee = _5ab(), _5ef = ibmweb.opinionlab.defaults ? ibmweb.opinionlab.defaults.emailInfoLoaded : false, _5f0 = function () {
                var _5f1 = "<p class=\"oplabsurvey-servicelink\">", _5f2 = (typeof _57d.config.serviceLink.textPartOfLink !== "undefined") ? _57d.config.serviceLink.textPartOfLink : "", _5f3 = (typeof _57d.config.serviceLink.fullText !== "undefined") ? _57d.config.serviceLink.fullText : "", link = (typeof _57d.config.serviceLink.linkUrl !== "undefined") ? _57d.config.serviceLink.linkUrl : "";
                if (_5f2 !== "" && link !== "") {
                    var _5f4 = _5f3.search(_5f2);
                    if (_5f4 >= 0) {
                        _5f3 = _5f3.replace(_5f2, "<a href=\"" + link + "\" target=\"_blank\">" + _5f2 + "</a>");
                    }
                    _5f1 += _5f3;
                } else {
                    if (link !== "") {
                        _5f1 += "<a href=\"" + link + "\" target=\"_blank\">" + _5f3 + "</a>";
                    } else {
                        _5f1 += _5f3;
                    }
                }
                _5f1 += "</p>";
                return _5f1;
            };
            if (typeof _57d.config.container == "string") {
                _57d.config.container = dojo.query("#" + _57d.config.container);
            } else {
                _57d.config.container = dojo.query("#tempTestDiv");
            }
            _57d.elements = {surveyHeading: _57d.config.type.display == "tray" ? "<h2>" + _57d.config.heading + "</h2>" : "<h2 class=\"ibm-rule\">" + _57d.config.heading + "</h2>", surveySubhead: _57d.config.description != "" ? "<p>" + _57d.config.description + "</p>" : "", ratingField: _57d.config.rating.enabled === true ? _5c8() : "", commentField: _57d.config.comments.enabled === true ? _5aa({type: "textarea", name: "comments", label: "Comments", hideLabel: true, placeholder: _57d.config.comments.placeholder, showCharCounter: true, maxlength: 1000, cols: 10, rows: 10}) : "", customFields: _5b4(), topicSelector: _5b6(), feedbackAnonyItem: "<span class=\"oplabsurvey-anonytext\">" + _5ee + "</span>", aboutFeedbackLink: "<ul class=\"ibm-link-list oplabsurvey-about-feedback-link\"><li><a onclick=\"ibmweb.overlay.show('" + _57d.config.aboutFeedbackOverlayId + "',this);return false;\" class=\"ibm-popup-link\" href=\"#\">" + _57d.config.aboutFeedbackText + "</a></li></ul>", submitButton: "<div class=\"oplabsurvey-align-right ibm-buttons-row\"><input type=\"submit\" value=\"" + _57d.config.submitText + "\" name=\"Submit\" class=\"ibm-btn-arrow-pri\"></div>", customerServiceLink: (_57d.config.serviceLink.enabled === true) ? _5f0() : ""};
            _57d.elements.surveyFormHtml = _5c4();
            _5d7();
            dojo.ready(function () {
                if (typeof ibmweb.opinionlab.defaults === "undefined") {
                    ibmweb.opinionlab.defaults = {customVariables: {}, emailInfoLoaded: false};
                }
                ibmweb.opinionlab.setUserData = function (data) {
                    var name = (data.User.NickName.length === 0) ? data.User.CommonName : data.User.NickName;
                    ibmweb.opinionlab.defaults.customVariables.userName = name;
                    var _5f5 = data.User.Email;
                    ibmweb.opinionlab.defaults.customVariables.userEmail = _5f5;
                    var _5f6 = dojo.cookie("w3ibmProfile"), hkey = _5f6.split("|")[0];
                    ibmweb.storage.setItem("w3UserName_" + hkey, name);
                    ibmweb.storage.setItem("w3UserEmail_" + hkey, _5f5);
                    ibmweb.opinionlab.defaults.emailInfoLoaded = true;
                };
                if (ibmweb.config.get("opinionlab").getUserInfo === true) {
                    _583();
                } else {
                    ibmweb.opinionlab.defaults.emailInfoLoaded = true;
                }
                switch (_57d.config.type.display) {
                    case "inline":
                        if (_57d.config.type.form == "inline") {
                            _5d8();
                        } else {
                            if (_57d.config.type.form == "overlay") {
                                _5d9();
                            }
                        }
                        break;
                    case "tray":
                        if (ibmweb.config.config === "www") {
                            dojo.subscribe("ibm/signin/success", function () {
                                _583();
                            });
                        }
                        if (_57d.config.type.form == "overlay") {
                            if (_57d.config.trayShowOnLoadMs == 0) {
                                _5de();
                            } else {
                                setTimeout(_5de, _57d.config.trayShowOnLoadMs);
                            }
                        } else {
                            if (_57d.config.type.form == "inline") {
                                if (_57d.config.trayShowOnLoadMs == 0) {
                                    _5dc();
                                } else {
                                    setTimeout(_5dc, _57d.config.trayShowOnLoadMs);
                                }
                            }
                        }
                        ibmweb.storage.setItem("opltrn", (_581 + 1));
                        break;
                    case "link":
                        _5e0();
                        break;
                    default:
                        break;
                }
                _5ec();
                if (!_5ef) {
                    _5ea();
                }
            });
        }
        ;
        return {initSurvey: _5ed};
    };
    dojo.addOnLoad(function () {
        if (ibmweb.config.opinionlab.customSurvey && ibmweb.config.opinionlab.customSurvey.enabled === true && ibmweb.config.opinionlab.customSurvey.surveys && ibmweb.config.opinionlab.customSurvey.surveys.length > 0) {
            dojo.forEach(ibmweb.config.opinionlab.customSurvey.surveys, function (_5f7) {
                var _5f8 = new ibmweb.opinionlab.customSurvey(_5f7);
                _5f8.initSurvey();
            });
        }
    });
}
if (!dojo._hasResource["ibmweb.dynnav.aria"]) {
    dojo._hasResource["ibmweb.dynnav.aria"] = true;
    dojo.provide("ibmweb.dynnav.aria");
    dojo.declare("ibmweb.dynnav.aria", [ibmweb.dynnav._module], {enabled: true, _lock: false, init: function () {
            return true;
        }, onLoad: function () {
            dojo.attr(dojo.body(), "aria-busy", "true");
            if (!dojo.byId("ibm-com")) {
                dojo.body().id = "ibm-com";
            }
            !(dojo.query("*[role=\"main\"]").length > 0) ? dojo.query("#ibm-top > #ibm-leadspace-head, #ibm-top > #ibm-content-nav, #ibm-top > #ibm-pcon").wrapAll("<div id=\"ibm-access-cntr\"></div>") : null;
            if (dojo.byId("ibm-com").className.indexOf("dijit_a11y") != -1) {
                if (ibmweb.config.config == "www" && ibmweb.info.v17 && !document.getElementById("ibm-hcontrast-head") && !!dojo.byId("ibm-masthead")) {
                    dojo.place("<img src=\"//www.ibm.com/i/v17/_hcontrast_head.png\" width=\"100%\" height=\"100%\" id=\"ibm-hcontrast-head\">", dojo.byId("ibm-masthead"), "first");
                }
                if (ibmweb.info.v17 && !document.getElementById("ibm-hcontrast-home") && !!dojo.byId("ibm-home")) {
                    if (ibmweb.config.config == "www") {
                        dojo.place("<img src=\"//www.ibm.com/i/v17/t/ibm-logo.png\" id=\"ibm-hcontrast-home\">", dojo.query("#ibm-home a")[0], "first");
                    } else {
                        dojo.place("<img src=\"//www.ibm.com/i/v17/w3/w3_logos_sprite.png\" id=\"ibm-hcontrast-home\">", dojo.query("#ibm-home a")[0], "first");
                    }
                }
            }
            return true;
        }, onData: function (_5f9) {
            if (!_5f9) {
                return;
            }
            var _5fa = _5f9.accessibilityData;
            if (dojo.byId("ibm-masthead")) {
                !(dojo.query("*[role=\"banner\"]").length > 0) ? dijit.setWaiRole("ibm-masthead", "banner") : null;
            }
            var _5fb = dojo.query("#ibm-geo a");
            _5fb = _5fb.length > 0 ? dojo.query("#ibm-geo a")[0] : null;
            if (!!_5fb) {
                dojo.query("#ibm-geo span.ibm-access").forEach(dojo.destroy);
                dijit.setWaiRole(_5fb, "button");
                dijit.setWaiState(_5fb, "label", ibmweb.dynnav.PMM.accessibilityData.locselector + " " + _5fb.innerHTML + " " + ibmweb.dynnav.PMM.accessibilityData.linkseld);
            }
            if (!ibmweb.config.appmast.enabled) {
                var _5fc = dojo.query("#ibm-masthead #ibm-geo a, #ibm-masthead #ibm-home a, #ibm-masthead #ibm-search-module a, #ibm-masthead #ibm-search-module input");
                _5fc.forEach(function (item) {
                    dojo.connect(item, "onfocus", this, function (_5fd) {
                        if (dojo.byId("ibm-menu-links").className == "ibm-access") {
                            dojo.publish("/ibm/dynnav/megamenu/expandMenu");
                        }
                    });
                });
            }
            var home = dojo.query("#ibm-home a");
            if (home.length > 0) {
                var _5fe = home.innerHTML.toString();
                _5fe = _5fe.replace(/^\s+|\s+$/g, "");
                if (_5fe == "" && _5fe.length == 0) {
                    home.innerHTML = "IBM&reg;";
                }
                home[0].tabIndex = 0;
            }
            if (dojo.byId("ibm-mast-options")) {
                if (ibmweb.config.config == "w3") {
                    var _5ff = dojo.byId("ibm-mast-options");
                    dijit.setWaiRole(_5ff, "toolbar");
                    dojo.attr("ibm-mast-options", "aria-label", "Masthead Navigation");
                    var _600 = dojo.query("#ibm-mast-options ul");
                    _600.forEach(function (item) {
                        dijit.setWaiRole(item, "presentation");
                    });
                } else {
                    var _600 = dojo.query("#ibm-mast-options ul");
                    if (_600.length > 0) {
                        _600 = _600[0];
                        dijit.setWaiRole(_600, "toolbar");
                        dojo.attr(_600, "aria-label", "Masthead Navigation");
                    }
                }
                var _601 = dojo.query("#ibm-mast-options ul li");
                _601.forEach(function (item) {
                    dijit.setWaiRole(item, "presentation");
                });
                var optA = dojo.query("#ibm-mast-options a");
                var home = dojo.query("#ibm-home a");
                optA.forEach(function (item) {
                    dijit.setWaiRole(item, "button");
                    item.tabIndex = -1;
                    if (ibmweb.config.config == "w3") {
                        if (home.length > 0 && item != home[0]) {
                            dojo.attr(item, "aria-label", item.innerHTML);
                            (item.className != "ibm-sso-signin") ? dojo.attr(item, "aria-describedby", "ibm-user-name") : null;
                        }
                    }
                });
                if (optA.length > 0) {
                    optA[0].tabIndex = 0;
                }
                dojo.connect(dojo.byId("ibm-mast-options"), "onkeypress", this, function (_602) {
                    var _603 = dojo.query("#ibm-mast-options a");
                    if (!this._lock && (_602.keyCode == dojo.keys.RIGHT_ARROW || _602.keyCode == dojo.keys.DOWN_ARROW || _602.keyCode == dojo.keys.LEFT_ARROW || _602.keyCode == dojo.keys.UP_ARROW)) {
                        if (_603.length > 0) {
                            _603.forEach(function (item) {
                                item.tabIndex = -1;
                                dojo.connect(item, "onfocus", this, function (_604) {
                                    _603.forEach(function (i) {
                                        i.tabIndex = -1;
                                    });
                                    item.tabIndex = 0;
                                });
                            });
                        }
                        this._lock = true;
                    }
                    if (_602.keyCode == dojo.keys.RIGHT_ARROW || _602.keyCode == dojo.keys.DOWN_ARROW) {
                        dojo.stopEvent(_602);
                        var curr = _602.target;
                        if (_603.length > 0) {
                            for (var i = 0; i < _603.length; i++) {
                                if ((curr == _603[i]) && (i < (_603.length - 1))) {
                                    _603[i + 1].focus();
                                    _602.target.tabIndex = -1;
                                    break;
                                } else {
                                    if ((curr == _603[i]) && (i == (_603.length - 1))) {
                                        _603[0].focus();
                                        _602.target.tabIndex = -1;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (_602.keyCode == dojo.keys.LEFT_ARROW || _602.keyCode == dojo.keys.UP_ARROW) {
                        dojo.stopEvent(_602);
                        var curr = _602.target;
                        if (_603.length > 0) {
                            for (var i = 0; i < _603.length; i++) {
                                if ((curr == _603[i]) && (i > 0)) {
                                    _603[i - 1].focus();
                                    _602.target.tabIndex = -1;
                                    break;
                                } else {
                                    if ((curr == _603[i]) && (i == 0)) {
                                        _603[_603.length - 1].focus();
                                        _602.target.tabIndex = -1;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    return false;
                });
            }
            if (dojo.byId("ibm-universal-nav")) {
                dijit.setWaiRole("ibm-universal-nav", "navigation");
                dojo.attr("ibm-universal-nav", "aria-label", _5fa.sitemap || "Site map");
            }
            if (dojo.byId("ibm-menu-links")) {
                dojo.attr("ibm-menu-links", "aria-label", _5fa.sitemap || "Site map");
            }
            if (dojo.byId("ibm-search-module")) {
                dijit.setWaiRole("ibm-search-module", "search");
                dojo.attr("ibm-search-module", "aria-label", _5fa.ibm_search || "IBM Search");
                var _605 = dojo.query("#ibm-search-module a, #ibm-search-module input");
                _605.forEach(function (item) {
                    dojo.connect(item, "onfocus", this, function (_606) {
                        dojo.addClass(dojo.query("#ibm-search-module input#q")[0], "ibm-active");
                    });
                    dojo.connect(item, "onblur", this, function (_607) {
                        dojo.removeClass(dojo.query("#ibm-search-module input#q")[0], "ibm-active");
                    });
                });
                if (ibmweb.config.config == "w3") {
                    var _608 = dojo.query("#ibm-search-module .scopeButton");
                    if (_608.length > 0) {
                        dojo.connect(_608[0], "onkeypress", this, function (_609) {
                            if (_609.shiftKey && _609.charOrCode == dojo.keys.TAB) {
                                dojo.stopEvent(_609);
                                var _60a = dojo.query("#ibm-menu-links a");
                                if (_60a.length > 0) {
                                    _60a.forEach(function (item) {
                                        if (item.tabIndex == 0) {
                                            item.focus();
                                        }
                                    });
                                }
                            }
                        });
                    }
                }
            }
            if (dojo.byId("ibm-social-tools") && dojo.style(dojo.byId("ibm-social-tools"), "display") != "none") {
                dijit.setWaiRole(dojo.byId("ibm-social-tools"), "navigation");
                dojo.attr(dojo.byId("ibm-social-tools"), "aria-label", _5fa.tools || "Social tools");
                var _60b = dojo.query("#ibm-social-tools ul");
                if (_60b.length > 0) {
                    dijit.setWaiRole(_60b[0], "toolbar");
                }
                dojo.attr(_60b[0], "aria-label", "Social tool list");
            }
            if (dojo.byId("ibm-navigation-trail") && dojo.style(dojo.byId("ibm-navigation-trail"), "display") != "none") {
                dijit.setWaiRole(dojo.byId("ibm-navigation-trail"), "navigation");
                dojo.attr(dojo.byId("ibm-navigation-trail"), "aria-label", _5fa.bcrumb || "Bread Crumbs");
            }
            if (dojo.byId("ibm-content-nav") && dojo.style(dojo.byId("ibm-content-nav"), "display") != "none") {
                (dojo.query("divibm-content-nav #ibm-primary-tabs.ibm-dyntabs").length > 0) ? dijit.setWaiRole(dojo.byId("ibm-content-nav"), "navigation") : null;
                var _60c = dojo.query("div#ibm-content-nav #ibm-primary-tabs");
                if (_60c.length > 0) {
                    if (dojo.style(_60c[0], "display") != "none" && !(dojo.query("div#ibm-content-nav #ibm-primary-tabs.ibm-dyntabs").length > 0)) {
                        dijit.setWaiRole(dojo.byId("ibm-primary-tabs"), "navigation");
                    }
                    var _60d = dojo.query("div#ibm-content-nav #ibm-secondary-tabs");
                    if (_60d.length > 0) {
                        if (dojo.style(_60d[0], "display") != "none") {
                            if (dojo.query("div#ibm-content-nav #ibm-secondary-tabs.ibm-dyntabs").length > 0) {
                                var _60e = dojo.query("div#ibm-content-nav #ibm-primary-tabs.ibm-dyntabs .ibm-tabs li.ibm-active a");
                                if (_60e.length > 0) {
                                    dojo.attr(_60d[0], "aria-label", _60e[0].innerHTML);
                                }
                            } else {
                                dijit.setWaiRole(_60d[0], "navigation");
                                var _60e = dojo.query("div#ibm-content-nav #ibm-primary-tabs .ibm-tabs li.ibm-active a");
                                if (_60e.length > 0) {
                                    dojo.attr(_60d[0], "aria-label", _60e[0].innerHTML);
                                    if (dojo.query("ul.ibm-tabs", _60d[0])[0] && _60e.length > 0) {
                                        dojo.attr(dojo.query("ul.ibm-tabs", _60d[0])[0], "aria-label", _60e[0].innerHTML);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            var _60f = [];
            var dtl = dojo.query(".ibm-dyntabs .ibm-tabs");
            var tl = dojo.query(".ibm-tabs");
            if (dtl.length > 0) {
                tl.forEach(function (tle) {
                    var flag = false;
                    for (var i = 0; i < dtl.length; i++) {
                        if (dtl[i] == tle) {
                            flag = true;
                            break;
                        }
                    }
                    if (!flag) {
                        _60f.push(tle);
                    }
                });
            } else {
                _60f = tl;
            }
            if (_60f.length > 0) {
                for (var i = 0; i < _60f.length; i++) {
                    dijit.setWaiRole(_60f[i], "tablist");
                    if (ibmweb.config.config != "w3") {
                        dojo.attr(_60f[i].parentNode, "aria-label", dojo.attr(_60f[i].parentNode, "aria-label") || "Tab Navigation");
                        dijit.setWaiRole(_60f[i].parentNode, dijit.getWaiRole(_60f[i].parentNode) || "navigation");
                    }
                    dojo.query("li", _60f[i]).forEach(function (item) {
                        dijit.setWaiRole(item, "presentation");
                    });
                    var _610 = dojo.query("a", _60f[i]);
                    _610.forEach(function (item) {
                        dijit.setWaiRole(item, "tab");
                        dojo.attr(item, "aria-selected", "false");
                        dojo.attr(item, "aria-label", item.innerHTML);
                    });
                    dojo.query(".ibm-tabs li.ibm-active a, .ibm-tabs li.ibm-highlight-tab a ").forEach(function (item) {
                        dojo.attr(item, "aria-selected", "true");
                    });
                }
            }
            if (dojo.byId("ibm-navigation") && dojo.style(dojo.byId("ibm-navigation"), "display") != "none") {
                dijit.setWaiRole("ibm-navigation", "navigation");
                dojo.attr("ibm-navigation", "aria-label", "Primary");
                dojo.query("#ibm-navigation h2.ibm-access").style("display", "none");
            }
            if (dojo.byId("ibm-secondary-navigation") && dojo.style(dojo.byId("ibm-secondary-navigation"), "display") != "none") {
                dijit.setWaiRole("ibm-secondary-navigation", "navigation");
                dojo.attr("ibm-secondary-navigation", "aria-label", "Secondary");
            }
            (function () {
                if (dojo.byId("ibm-content-sidebar") && dojo.style(dojo.byId("ibm-content-sidebar"), "display") != "none") {
                    var n = 0;
                    (dojo.query("#ibm-content-sidebar #ibm-contact-module")[0]) ? n++ : null;
                    (dojo.query("#ibm-content-sidebar #ibm-merchandising-module")[0]) ? n++ : null;
                    if (dojo.query("#ibm-content-sidebar *").length > n) {
                        dijit.setWaiRole("ibm-content-sidebar", "complementary");
                    }
                    dojo.attr("ibm-content-sidebar", "aria-label", _5fa.sbmain || "Content sidebar");
                }
            })();
            (function () {
                if (dojo.byId("ibm-related-content") && dojo.style(dojo.byId("ibm-related-content"), "display") != "none") {
                    var n = 0;
                    (dojo.query("#ibm-related-content #ibm-merchandising-module")[0]) ? n++ : null;
                    if (dojo.query("#ibm-related-content *").length > n) {
                        dijit.setWaiRole("ibm-related-content", "complementary");
                    }
                    dojo.attr("ibm-related-content", "aria-label", _5fa.relcnt || "Related Content");
                }
            })();
            if (dojo.isOpera) {
                dojo.query("#ibm-top a").forEach(function (i) {
                    if (dojo.attr(i, "tabindex") == null) {
                        i.tabIndex = 0;
                    }
                });
            }
            if (dojo.byId("ibm-footer-module")) {
                dijit.setWaiRole("ibm-footer-module", "complementary");
            }
            if (dojo.byId("ibm-footer")) {
                !(dojo.query("*[role=\"contentinfo\"]").length > 0) ? dijit.setWaiRole("ibm-footer", "contentinfo") : null;
                dojo.attr("ibm-footer", "aria-label", _5fa.footer || "Footer");
            }
            if (!(dojo.query("*[role=\"main\"]").length > 0)) {
                (dojo.query("#ibm-access-cntr").length > 0) ? dijit.setWaiRole("ibm-access-cntr", "main") : null;
            }
            var _611 = dojo.query(".ibm-form-elem-grp");
            var _612 = 0;
            if (_611.length > 0) {
                _611.forEach(function (_613) {
                    var lbl = dojo.query(".ibm-form-grp-lbl", _613);
                    dojo.query(".ibm-input-group", _613).forEach(function (_614, i) {
                        if (dojo.hasClass(_614, "ibm-radio-group")) {
                            dijit.setWaiRole(_614, "radiogroup");
                        } else {
                            dijit.setWaiRole(_614, "group");
                        }
                        if (lbl.length > i) {
                            if (!!lbl[i].id || lbl[i].id != "") {
                                dojo.attr(_614, "aria-labelledby", lbl[i].id);
                            } else {
                                lbl[i].id = "ibm-grp-lbl_" + (_612++);
                                dojo.attr(_614, "aria-labelledby", lbl[i].id);
                            }
                        }
                    });
                });
            }
            dojo.attr(dojo.byId("ibm-com"), "aria-busy", "false");
        }});
}
if (!dojo._hasResource["ibmweb.dynnav.maxymiser"]) {
    dojo._hasResource["ibmweb.dynnav.maxymiser"] = true;
    dojo.provide("ibmweb.dynnav.maxymiser");
    dojo.declare("ibmweb.dynnav.maxymiser", [ibmweb.dynnav._module], {init: function () {
            var _615 = document.location.href.indexOf(".ibm.com/support/") == -1;
            return ibmweb.meta.cc == "us" && ibmweb.meta.lc == "en" && _615;
        }, onLoad: function () {
            dojo.create("script", {type: "text/javascript", src: "//service.maxymiser.net/cdn/ibm/js/mmcore.js"}, dojo.query("head")[0]);
        }});
}
if (!dojo._hasResource["ibmweb.dynnav._base-v17"]) {
    dojo._hasResource["ibmweb.dynnav._base-v17"] = true;
    dojo.provide("ibmweb.dynnav._base-v17");
}
if (!dojo._hasResource["ibmweb.controller"]) {
    dojo._hasResource["ibmweb.controller"] = true;
    dojo.provide("ibmweb.controller");
    (function () {
        var _616 = (function () {
            var self = "ibm_user_info";
            var data = null, _617 = false, _618 = [], _619 = typeof (ibmweb) !== "undefined" && typeof (ibmweb.config) !== "undefined" && typeof (ibmweb.config.w3UserServiceUrl) !== "undefined";
            function _61a(_61b, _61c) {
                _618.push({success: _61b, fail: _61c});
                if (!_617) {
                    _617 = true;
                    var _61d = dojo.cookie("w3ibmProfile");
                    if (_61d) {
                        var hkey = _61d.split("|")[0];
                        dojo.io.script.get({url: ibmweb.config.w3UserServiceUrl + hkey + "/callback/" + self + ".setData", timeout: ibmweb.config.w3UserServiceTimeout, error: function (er1, er2) {
                                _619 = false;
                                if (console && console.warn) {
                                }
                                dojo.forEach(_618, function (q) {
                                    q.fail();
                                });
                            }});
                    } else {
                        _619 = false;
                        dojo.forEach(_618, function (q) {
                            q.fail();
                        });
                    }
                }
            }
            ;
            var ret = function (_61e, _61f) {
                if (_619 && _61e) {
                    if (data === null) {
                        _61a(_61e, _61f);
                    } else {
                        _61e(data);
                    }
                } else {
                    _61f();
                }
                return _619;
            };
            ret.setData = function (_620) {
                data = _620;
                dojo.forEach(_618, function (q) {
                    q.success(data);
                });
            };
            return ret;
        })();
        if (ibmweb.meta.isLoaded) {
            ibmweb.dynnav.init();
        } else {
            dojo.connect(ibmweb.meta, "_init", function () {
                ibmweb.dynnav.init();
            });
        }
    })();
    dojo.addOnLoad(function () {
        var _621 = dojo.query(".v17, .nihilo, .soria, .tundra, .claro, .oneui, .lotusui, .ram"), node = dojo.body();
        if (!dojo.hasClass(node, "ibm-custom-theme")) {
            if (node.id && node.id == "ibm-com") {
                if (_621.length > 0) {
                    var _622 = node.className.toString().match(/v17|nihilo|soria|tundra|claro|oneui|lotusui|ram/g), _623 = _621[0].className.toString().match(/v17|nihilo|soria|tundra|claro|oneui|lotusui|ram/g)[0];
                    if (_622 == null) {
                        dojo.addClass(node, _623);
                    }
                    if (_623 == "nihilo" || _623 == "soria" || _623 == "tundra" || _623 == "claro" || _623 == "oneui") {
                        dojo.create("link", {rel: "stylesheet", type: "text/css", href: "//1.www.s81c.com/common/js/dojo/themes/" + _623 + ".css"}, dojo.query("head")[0], "last");
                    }
                } else {
                    dojo.addClass(node, "v17");
                }
            } else {
                if (node.id && node.id == "w3-ibm-com") {
                    if (_621.length > 0) {
                        var _622 = node.className.toString().match(/v17|nihilo|soria|tundra|claro|oneui|lotusui|ram/g), _623 = _621[0].className.toString().match(/v17|nihilo|soria|tundra|claro|oneui|lotusui|ram/g)[0];
                        if (_622) {
                            dojo.addClass(node, _623);
                        }
                        if (_623 == "nihilo" || _623 == "soria" || _623 == "tundra" || _623 == "claro" || _623 == "oneui") {
                            dojo.query("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"//1.www.s81c.com/common/js/dojo/themes/" + _623 + ".css\">");
                        }
                    } else {
                        dojo.addClass(node, "v8");
                    }
                }
            }
        }
    });
    dojo.addOnLoad(function () {
        if (!ibmweb.info.v17) {
            return;
        }
        if (dojo.query("table.ibm-alternating").length != 0 || dojo.query("table.ibm-alternating-col").length != 0 || dojo.query("table.ibm-sortable-table").length != 0) {
            dojo["require"]("ibmweb.table");
        }
        if (dojo.query("table.ibm-table-scroll")[0]) {
            dojo["require"]("ibmweb.table-scroll");
        }
    });
    dojo.addOnLoad(function () {
        if (!ibmweb.info.v17) {
            return;
        }
        if (dojo.query("div.ibm-common-overlay").length > 0) {
            dojo["require"]("ibmweb.overlay");
            dojo.addOnLoad(function () {
                ibmweb.overlay.init();
            });
        }
    });
    dojo.addOnLoad(function () {
        if (!ibmweb.info.v17) {
            return;
        }
        if (dojo.query(".ibm-leaving-prompt").length > 0) {
            dojo["require"]("ibmweb.leaving");
            dojo.addOnLoad(function () {
                ibmweb.leaving.init();
            });
        }
    });
    dojo.addOnLoad(function () {
        if (!ibmweb.info.v17) {
            return;
        }
        if (dojo.query(".ibm-tooltip, .ibm-tooltip-html").length > 0) {
            dojo["require"]("ibmweb.tooltip");
            dojo.addOnLoad(function () {
                ibmweb.tooltip.init();
            });
        }
    });
    dojo.addOnLoad(function () {
        var _624 = dojo.query(".ibm-ribbon .ibm-container-body");
        if (_624.length > 0) {
            dojo["require"]("ibmweb.ribbon");
            dojo.addOnLoad(function () {
                dojo.forEach(_624, function (item) {
                    dojo.query(item).parent().removeClass("ibm-ribbon-hidden");
                    if (dojo.hasAttr(item, "id") && item.id == "ibm-leadspace-body") {
                        ibmweb.ribbonLeadspace.init();
                    } else {
                        var s = new ibmweb.ribbon({id: dojo.hasAttr(item, "id") ? item.id : null, autoscroll: dojo.hasClass(item, "ibm-autoscroll") ? true : false, srcNodeRef: item});
                        s.startup();
                    }
                });
            });
        }
    });
    dojo.addOnLoad(function () {
        var _625 = dojo.query(".ibm-scroll");
        if (_625.length > 0) {
            dojo["require"]("ibmweb.scroll");
            dojo.addOnLoad(function () {
                dojo.forEach(_625, function (item) {
                    new ibmweb.scroll({element: item});
                });
            });
        }
    });
    dojo.addOnLoad(function () {
        var _626 = dojo.query("#ibm-primary-tabs"), _627 = dojo.query("#ibm-secondary-tabs");
        if (_626.length == 1 && _627.length == 1) {
            dojo["require"]("ibmweb.subtabs");
            dojo.addOnLoad(function () {
                ibmweb.subtabs.init();
            });
        }
    });
    dojo.addOnLoad(function () {
        var tabs = dojo.query("div.ibm-dyntabs");
        if (tabs.length > 0) {
            dojo["require"]("ibmweb.dyntabs");
            dojo.addOnLoad(function () {
                ibmweb.dyntabs.init();
            });
        }
    });
    dojo.addOnLoad(function () {
    });
    dojo.addOnLoad(function () {
        dojo.query("p.ibm-back-to-top a").onclick(function (e) {
            if (dojo.attr(this, "href") != "#ibm-content") {
                return true;
            }
            dojo.stopEvent(e);
            window.scrollTo(0, 1);
        });
        dojo.query(".ibm-tab-section.ibm-text a.ibm-anchor-down-em-link").onclick(function (e) {
            var hash = e.target.href.split("#");
            if (hash.length != 2) {
                return;
            }
            hash = hash[1];
            var elem = dojo.byId(hash);
            if (!elem) {
                return;
            }
            window.scrollTo(0, dojo.marginBox(elem).t - dojo.position(dojo.byId("ibm-masthead")).h);
            dojo.stopEvent(e);
        });
        if (dojo.version.major <= 1 && dojo.version.minor > 3) {
            var _628 = dojo.query("a[name]");
            _628.forEach(function (a) {
                if (a.className === "" && a.href === "") {
                    var ap = dojo.create("div", {className: "ibm-anchor-pointer"}, a, "before");
                    if (dojo.isIE < 8) {
                        dojo.create("a", {id: a.name}, ap);
                    } else {
                        dojo.create("a", {name: a.name}, ap);
                    }
                    dojo.query(a).orphan();
                }
            });
            if (window.location.hash !== "") {
                window.location.hash += "";
            }
        }
    });
    dojo.addOnLoad(function () {
        dojo.query("ul.ibm-portrait-module-list li h3 a, ul.ibm-portrait-module-list li h2 a").forEach(function (item) {
            var _629 = dojo.query(dojo.query(item).parents(".ibm-portrait-module-list")).at(0);
            if (!dojo.hasClass(_629[0], "ibm-no-link")) {
                var _62a = dojo.query(item).parents("li").at(0).children("img").at(0);
                if (dojo.hasClass(_629[0], "ibm-new-window")) {
                    _62a.onclick(function (e) {
                        dojo.stopEvent(e);
                        window.open(item.href);
                    });
                    _62a.style("cursor", "pointer");
                } else {
                    if (_62a.parent("a")[0]) {
                        return;
                    }
                    var _62b = dojo.query(dojo.clone(item)).attr({tabindex: "-1", role: "presentation"}), _62c = dojo.hasClass(_62b[0], "ibm-media"), _62d = dojo.hasClass(_62b[0], "ibm-leaving-prompt");
                    _62b[0].innerHTML = "";
                    _62b[0].className = "";
                    if (_62c) {
                        _62b.addClass("ibm-media");
                    }
                    if (_62d) {
                        _62b.addClass("ibm-leaving-prompt");
                    }
                    _62a.wrap(_62b[0]);
                }
            }
        });
    });
    dojo.addOnLoad(function () {
        var tmp = dojo.query(".ibm-twitter-module");
        if (tmp.length > 0) {
            dojo["require"]("ibmweb.twitter");
            dojo.addOnLoad(function () {
                dojo.forEach(tmp, function (item) {
                    var w = new ibmweb.twitter.Widget({targetNode: item});
                    w.placeAt(item);
                    w.startup();
                });
            });
        }
    });
    dojo.addOnLoad(function () {
        var tmp = dojo.query(".ibm-rss-module");
        if (tmp.length > 0) {
            dojo["require"]("ibmweb.rssmodule");
            dojo.addOnLoad(function () {
                dojo.forEach(tmp, function (item) {
                    var w = new ibmweb.rssmodule.Widget({targetNode: item});
                    w.placeAt(item);
                    w.startup();
                });
            });
        }
    });
    dojo.addOnLoad(function () {
        var _62e = dojo.query(".ibm-img-contactbox");
        if (_62e.length > 0) {
            dojo["require"]("ibmweb.www.contactmodule");
            dojo.addOnLoad(function () {
                _62e.forEach(function (box) {
                    ibmweb.www.contactmodule.init(box);
                });
            });
        }
    });
    dojo.addOnLoad(function () {
        if (dojo.query("#ibm-top").attr("class") == "ibm-popup") {
            dojo.query("html,body").style("background", "none");
        }
    });
    dojo.addOnLoad(function () {
        if (ibmweb.config.backtocountry.enabled) {
            dojo["require"]("ibmweb.backtocountry");
            dojo.addOnLoad(function () {
                ibmweb.backtocountry.init();
            });
        }
    });
    dojo.addOnLoad(function () {
        ibmweb.stepindicator.init();
    });
    dojo.addOnLoad(function () {
        var _62f = dojo.query("[class*='ibm-play-button-']");
        if (_62f.length > 0) {
            dojo.forEach(_62f, function (item) {
                var elm = dojo.query(item), con = elm.closest(".ibm-video-container"), col = elm.closest("[class*='ibm-col-']"), _630 = elm.closest(".ibm-ribbon"), rQ = dojo.query(_630), _631 = (_630.length == 1), _632 = elm.closest(".ibm-video"), fB = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"/i/v17/video-play-button-medium.png\",sizingMethod=\"crop\")", fBh = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"/i/v17/video-play-button-medium-hover.png\",sizingMethod=\"crop\")", fBd = 90, _633 = true;
                if (col.length == 0) {
                    return false;
                }
                if (dojo.hasClass(col[0], "ibm-col-6-1") || dojo.hasClass(col[0], "ibm-col-5-1")) {
                    fB = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"/i/v17/video-play-button-small.png\",sizingMethod=\"crop\")";
                    fBh = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"/i/v17/video-play-button-small-hover.png\",sizingMethod=\"crop\")";
                    fBd = 50;
                }
                if (_631) {
                    dojo.style(con[0], {marginTop: "0px"});
                    dojo.style(col[0], {overflow: "hidden"});
                    if (!dojo.hasClass(rQ[0], "ibm-alternate")) {
                        dojo.addOnLoad(function () {
                            var cols = dojo.query(".ibm-columns", rQ[0]);
                            cols.forEach(function (c) {
                                dojo.style(c, "margin", "0px");
                            });
                        });
                    }
                }
                var i, i_n = elm.next("img"), i_p = elm.prev("img");
                if (i_n.length == 1) {
                    i = i_n;
                } else {
                    if (i_p.length == 1) {
                        i = i_p;
                    } else {
                        _633 = false;
                    }
                }
                if (dojo.isIE == 6) {
                    if (_633) {
                        dojo.removeAttr(i[0], "alt");
                        dojo.style(item, {height: i[0].height + "px", top: (i[0].height - fBd) / 2 + "px", left: (i[0].width - fBd) / 2 + "px", backgroundImage: "none", cursor: "pointer", filter: fB});
                    } else {
                        if (con.length == 1) {
                            dojo.style(item, {height: con[0].height + "px", top: (con[0].height - fBd) / 2 + "px", left: (con[0].width - fBd) / 2 + "px", backgroundImage: "none", cursor: "pointer"});
                        }
                    }
                    if (_632.length == 1) {
                        dojo.connect(_632[0], "onmouseover", function () {
                            dojo.style(item, {filter: fBh});
                        });
                        dojo.connect(_632[0], "onmouseout", function () {
                            dojo.style(item, {filter: fB});
                        });
                    }
                } else {
                    dojo.addOnLoad(function () {
                        var h = (_633) ? i[0].height : 0;
                        if (h > 0) {
                            con.style("height", h + "px");
                        }
                    });
                }
            });
        }
    });
}
if (!dojo._hasResource["ibmweb.comusr"]) {
    dojo._hasResource["ibmweb.comusr"] = true;
    dojo.provide("ibmweb.comusr");
    ibmweb.comusr = (function () {
        var _634 = ["annual_sales", "company_name", "country", "employee_count", "industry", "information_level", "primary_sic", "sub_industry"], _635 = {cryptKey: "yxsdpqmouenictjarzvkbfhwlg", decode: function (_636) {
                var _637 = _636, i, _638 = "", re = /[a-z]/;
                for (i = 0; i < _637.length; i++) {
                    if (re.test(_637.charAt(i))) {
                        _638 += String.fromCharCode(_635.cryptKey.indexOf(_637.charAt(i)) + 97);
                    } else {
                        _638 += _637.charAt(i);
                    }
                }
                return decodeURIComponent(_638);
            }, encode: function (str) {
                var _639 = str.toLowerCase(), _63a = "", i, re = /[a-z]/;
                for (i = 0; i < _639.length; i++) {
                    if (re.test(_639.charAt(i))) {
                        _63a += _635.cryptKey.charAt(_639.charCodeAt(i) - 97);
                    } else {
                        _63a += _639.charAt(i);
                    }
                }
                return encodeURIComponent(_63a);
            }}, _63b = function () {
            ibmweb.util.statsHelper({ibmEV: "common user tag", ibmEvAction: user.company_name, ibmEvGroup: user.employee_count, ibmEvLinkTitle: user.industry, ibmEvModule: user.sub_industry, ibmEvName: user.primary_sic, ibmEvFileSize: user.annual_sales, ibmEvSection: "n/a", ibmEvTarget: "n/a"});
        }, _63c = _63d("ip"), _63e = false, _63f = {expireDaysBasic: 7, expireDaysDetailed: 7, key: "comusrtag", isSupported: function () {
                try {
                    return window.localStorage && typeof window.localStorage === "object" && typeof JSON !== "undefined";
                } catch (e) {
                    return false;
                }
            }, getItem: function (key) {
                var _640 = null, _641 = 0, _642 = new Date().getTime();
                if (!_63f.isSupported()) {
                    return null;
                }
                if (localStorage.getItem(key) !== null) {
                    _641 = JSON.parse(localStorage.getItem(key)).expires;
                    if (_641 !== 0 && _641 < _642) {
                        _63f.removeItem(key);
                    } else {
                        _640 = JSON.parse(localStorage.getItem(key)).value;
                    }
                }
                return _640;
            }, removeItem: function (key) {
                if (!_63f.isSupported()) {
                    return false;
                }
                localStorage.removeItem(key);
            }, setItem: function (key, _643, _644) {
                var _645 = 0, _646 = {}, _647 = new Date().getTime();
                if (!_63f.isSupported()) {
                    return false;
                }
                _63f.removeItem(key);
                if (_644) {
                    _645 = _644 * 1000;
                    _645 += _647;
                }
                _646 = {"value": _643, "expires": _645};
                localStorage.setItem(key, JSON.stringify(_646));
                return true;
            }}, user = {nodata: true};
        function _648() {
            dojo.io.script.get({url: "//www.ibm.com/webmaster/dbip/ip/" + (_63c !== "" ? "?query=" + _63c : ""), callbackParamName: "callback", load: function (data) {
                    user = {};
                    _652(data);
                    _654();
                    _63e = true;
                    dojo.ready(function () {
                        _63b();
                    });
                }, error: function () {
                }});
        }
        ;
        function _649() {
            return user;
        }
        ;
        function _64a() {
            var key, _64b = {}, _64c = _63f.getItem(_63f.key);
            if (typeof _64c === "object") {
                for (key in _64c) {
                    if (_64c.hasOwnProperty(key)) {
                        _64b[(_635.decode(key))] = _635.decode(_64c[key]);
                    }
                }
            }
            return _64b;
        }
        ;
        function _63d(name, str) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            str = str !== undefined ? str : window.location.href;
            var _64d = "[\\?&]" + name + "=([^&#]*)", _64e = new RegExp(_64d, "i"), _64f = _64e.exec(str), _650 = "";
            if (_64f !== null) {
                _650 = _64f[1];
            }
            return _650;
        }
        ;
        function _651() {
            return _63e;
        }
        ;
        function _652(data) {
            var _653;
            dojo.forEach(_634, function (key) {
                _653 = !data[key] ? "n/a" : data[key].toString();
                user[key] = _653.toLowerCase();
            });
            user.information_level = data.information_level.toLowerCase();
        }
        ;
        function _654() {
            var key, _655 = {};
            for (key in user) {
                if (user.hasOwnProperty(key)) {
                    _655[(_635.encode(key))] = _635.encode(user[key]);
                }
            }
            _63f.setItem(_63f.key, _655, 3600 * 24 * (user.information_level === "basic" ? _63f.expireDaysBasic : _63f.expireDaysDetailed));
        }
        ;
        user = _64a();
        if (_63c !== "" || !user || !user.information_level) {
            _648();
        } else {
            _63e = true;
            dojo.ready(function () {
                _63b();
            });
        }
        return {isLoaded: _651, getInfo: _649};
    })();
}
if (!dojo._hasResource["ibmweb.www.controller"]) {
    dojo._hasResource["ibmweb.www.controller"] = true;
    dojo.provide("ibmweb.www.controller");
    dojo.ready(function () {
        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^[\s\xA0]+|[\s\xA0]+$/g, "");
            };
        }
        dojo.io.script.get({url: ibmweb.config.idm.profiling.profilingjs});
    });
}
