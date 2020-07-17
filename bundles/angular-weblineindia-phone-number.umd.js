(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@fortawesome/free-solid-svg-icons')) :
    typeof define === 'function' && define.amd ? define('angular-weblineindia-phone-number', ['exports', '@angular/core', '@angular/forms', '@fortawesome/free-solid-svg-icons'], factory) :
    (global = global || self, factory(global['angular-weblineindia-phone-number'] = {}, global.ng.core, global.ng.forms, global.freeSolidSvgIcons));
}(this, (function (exports, core, forms, freeSolidSvgIcons) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var PhoneService = /** @class */ (function () {
        function PhoneService() {
        }
        PhoneService.ɵprov = core.ɵɵdefineInjectable({ factory: function PhoneService_Factory() { return new PhoneService(); }, token: PhoneService, providedIn: "root" });
        PhoneService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [])
        ], PhoneService);
        return PhoneService;
    }());

    var CountryISO;
    (function (CountryISO) {
        CountryISO["Afghanistan"] = "af";
        CountryISO["Albania"] = "al";
        CountryISO["Algeria"] = "dz";
        CountryISO["AmericanSamoa"] = "as";
        CountryISO["Andorra"] = "ad";
        CountryISO["Angola"] = "ao";
        CountryISO["Anguilla"] = "ai";
        CountryISO["AntiguaAndBarbuda"] = "ag";
        CountryISO["Argentina"] = "ar";
        CountryISO["Armenia"] = "am";
        CountryISO["Aruba"] = "aw";
        CountryISO["Australia"] = "au";
        CountryISO["Austria"] = "at";
        CountryISO["Azerbaijan"] = "az";
        CountryISO["Bahamas"] = "bs";
        CountryISO["Bahrain"] = "bh";
        CountryISO["Bangladesh"] = "bd";
        CountryISO["Barbados"] = "bb";
        CountryISO["Belarus"] = "by";
        CountryISO["Belgium"] = "be";
        CountryISO["Belize"] = "bz";
        CountryISO["Benin"] = "bj";
        CountryISO["Bermuda"] = "bm";
        CountryISO["Bhutan"] = "bt";
        CountryISO["Bolivia"] = "bo";
        CountryISO["BosniaAndHerzegovina"] = "ba";
        CountryISO["Botswana"] = "bw";
        CountryISO["Brazil"] = "br";
        CountryISO["BritishIndianOceanTerritory"] = "io";
        CountryISO["BritishVirginIslands"] = "vg";
        CountryISO["Brunei"] = "bn";
        CountryISO["Bulgaria"] = "bg";
        CountryISO["BurkinaFaso"] = "bf";
        CountryISO["Burundi"] = "bi";
        CountryISO["Cambodia"] = "kh";
        CountryISO["Cameroon"] = "cm";
        CountryISO["Canada"] = "ca";
        CountryISO["CapeVerde"] = "cv";
        CountryISO["CaribbeanNetherlands"] = "bq";
        CountryISO["CaymanIslands"] = "ky";
        CountryISO["CentralAfricanRepublic"] = "cf";
        CountryISO["Chad"] = "td";
        CountryISO["Chile"] = "cl";
        CountryISO["China"] = "cn";
        CountryISO["ChristmasIsland"] = "cx";
        CountryISO["Cocos"] = "cc";
        CountryISO["Colombia"] = "co";
        CountryISO["Comoros"] = "km";
        CountryISO["CongoDRCJamhuriYaKidemokrasiaYaKongo"] = "cd";
        CountryISO["CongoRepublicCongoBrazzaville"] = "cg";
        CountryISO["CookIslands"] = "ck";
        CountryISO["CostaRica"] = "cr";
        CountryISO["C\u00F4teDIvoire"] = "ci";
        CountryISO["Croatia"] = "hr";
        CountryISO["Cuba"] = "cu";
        CountryISO["Cura\u00E7ao"] = "cw";
        CountryISO["Cyprus"] = "cy";
        CountryISO["CzechRepublic"] = "cz";
        CountryISO["Denmark"] = "dk";
        CountryISO["Djibouti"] = "dj";
        CountryISO["Dominica"] = "dm";
        CountryISO["DominicanRepublic"] = "do";
        CountryISO["Ecuador"] = "ec";
        CountryISO["Egypt"] = "eg";
        CountryISO["ElSalvador"] = "sv";
        CountryISO["EquatorialGuinea"] = "gq";
        CountryISO["Eritrea"] = "er";
        CountryISO["Estonia"] = "ee";
        CountryISO["Ethiopia"] = "et";
        CountryISO["FalklandIslands"] = "fk";
        CountryISO["FaroeIslands"] = "fo";
        CountryISO["Fiji"] = "fj";
        CountryISO["Finland"] = "fi";
        CountryISO["France"] = "fr";
        CountryISO["FrenchGuiana"] = "gf";
        CountryISO["FrenchPolynesia"] = "pf";
        CountryISO["Gabon"] = "ga";
        CountryISO["Gambia"] = "gm";
        CountryISO["Georgia"] = "ge";
        CountryISO["Germany"] = "de";
        CountryISO["Ghana"] = "gh";
        CountryISO["Gibraltar"] = "gi";
        CountryISO["Greece"] = "gr";
        CountryISO["Greenland"] = "gl";
        CountryISO["Grenada"] = "gd";
        CountryISO["Guadeloupe"] = "gp";
        CountryISO["Guam"] = "gu";
        CountryISO["Guatemala"] = "gt";
        CountryISO["Guernsey"] = "gg";
        CountryISO["Guinea"] = "gn";
        CountryISO["GuineaBissau"] = "gw";
        CountryISO["Guyana"] = "gy";
        CountryISO["Haiti"] = "ht";
        CountryISO["Honduras"] = "hn";
        CountryISO["HongKong"] = "hk";
        CountryISO["Hungary"] = "hu";
        CountryISO["Iceland"] = "is";
        CountryISO["India"] = "in";
        CountryISO["Indonesia"] = "id";
        CountryISO["Iran"] = "ir";
        CountryISO["Iraq"] = "iq";
        CountryISO["Ireland"] = "ie";
        CountryISO["IsleOfMan"] = "im";
        CountryISO["Israel"] = "il";
        CountryISO["Italy"] = "it";
        CountryISO["Jamaica"] = "jm";
        CountryISO["Japan"] = "jp";
        CountryISO["Jersey"] = "je";
        CountryISO["Jordan"] = "jo";
        CountryISO["Kazakhstan"] = "kz";
        CountryISO["Kenya"] = "ke";
        CountryISO["Kiribati"] = "ki";
        CountryISO["Kosovo"] = "xk";
        CountryISO["Kuwait"] = "kw";
        CountryISO["Kyrgyzstan"] = "kg";
        CountryISO["Laos"] = "la";
        CountryISO["Latvia"] = "lv";
        CountryISO["Lebanon"] = "lb";
        CountryISO["Lesotho"] = "ls";
        CountryISO["Liberia"] = "lr";
        CountryISO["Libya"] = "ly";
        CountryISO["Liechtenstein"] = "li";
        CountryISO["Lithuania"] = "lt";
        CountryISO["Luxembourg"] = "lu";
        CountryISO["Macau"] = "mo";
        CountryISO["Macedonia"] = "mk";
        CountryISO["Madagascar"] = "mg";
        CountryISO["Malawi"] = "mw";
        CountryISO["Malaysia"] = "my";
        CountryISO["Maldives"] = "mv";
        CountryISO["Mali"] = "ml";
        CountryISO["Malta"] = "mt";
        CountryISO["MarshallIslands"] = "mh";
        CountryISO["Martinique"] = "mq";
        CountryISO["Mauritania"] = "mr";
        CountryISO["Mauritius"] = "mu";
        CountryISO["Mayotte"] = "yt";
        CountryISO["Mexico"] = "mx";
        CountryISO["Micronesia"] = "fm";
        CountryISO["Moldova"] = "md";
        CountryISO["Monaco"] = "mc";
        CountryISO["Mongolia"] = "mn";
        CountryISO["Montenegro"] = "me";
        CountryISO["Montserrat"] = "ms";
        CountryISO["Morocco"] = "ma";
        CountryISO["Mozambique"] = "mz";
        CountryISO["Myanmar"] = "mm";
        CountryISO["Namibia"] = "na";
        CountryISO["Nauru"] = "nr";
        CountryISO["Nepal"] = "np";
        CountryISO["Netherlands"] = "nl";
        CountryISO["NewCaledonia"] = "nc";
        CountryISO["NewZealand"] = "nz";
        CountryISO["Nicaragua"] = "ni";
        CountryISO["Niger"] = "ne";
        CountryISO["Nigeria"] = "ng";
        CountryISO["Niue"] = "nu";
        CountryISO["NorfolkIsland"] = "nf";
        CountryISO["NorthKorea"] = "kp";
        CountryISO["NorthernMarianaIslands"] = "mp";
        CountryISO["Norway"] = "no";
        CountryISO["Oman"] = "om";
        CountryISO["Pakistan"] = "pk";
        CountryISO["Palau"] = "pw";
        CountryISO["Palestine"] = "ps";
        CountryISO["Panama"] = "pa";
        CountryISO["PapuaNewGuinea"] = "pg";
        CountryISO["Paraguay"] = "py";
        CountryISO["Peru"] = "pe";
        CountryISO["Philippines"] = "ph";
        CountryISO["Poland"] = "pl";
        CountryISO["Portugal"] = "pt";
        CountryISO["PuertoRico"] = "pr";
        CountryISO["Qatar"] = "qa";
        CountryISO["R\u00E9union"] = "re";
        CountryISO["Romania"] = "ro";
        CountryISO["Russia"] = "ru";
        CountryISO["Rwanda"] = "rw";
        CountryISO["SaintBarth\u00E9lemy"] = "bl";
        CountryISO["SaintHelena"] = "sh";
        CountryISO["SaintKittsAndNevis"] = "kn";
        CountryISO["SaintLucia"] = "lc";
        CountryISO["SaintMartin"] = "mf";
        CountryISO["SaintPierreAndMiquelon"] = "pm";
        CountryISO["SaintVincentAndTheGrenadines"] = "vc";
        CountryISO["Samoa"] = "ws";
        CountryISO["SanMarino"] = "sm";
        CountryISO["S\u00E3oTom\u00E9AndPr\u00EDncipe"] = "st";
        CountryISO["SaudiArabia"] = "sa";
        CountryISO["Senegal"] = "sn";
        CountryISO["Serbia"] = "rs";
        CountryISO["Seychelles"] = "sc";
        CountryISO["SierraLeone"] = "sl";
        CountryISO["Singapore"] = "sg";
        CountryISO["SintMaarten"] = "sx";
        CountryISO["Slovakia"] = "sk";
        CountryISO["Slovenia"] = "si";
        CountryISO["SolomonIslands"] = "sb";
        CountryISO["Somalia"] = "so";
        CountryISO["SouthAfrica"] = "za";
        CountryISO["SouthKorea"] = "kr";
        CountryISO["SouthSudan"] = "ss";
        CountryISO["Spain"] = "es";
        CountryISO["SriLanka"] = "lk";
        CountryISO["Sudan"] = "sd";
        CountryISO["Suriname"] = "sr";
        CountryISO["SvalbardAndJanMayen"] = "sj";
        CountryISO["Swaziland"] = "sz";
        CountryISO["Sweden"] = "se";
        CountryISO["Switzerland"] = "ch";
        CountryISO["Syria"] = "sy";
        CountryISO["Taiwan"] = "tw";
        CountryISO["Tajikistan"] = "tj";
        CountryISO["Tanzania"] = "tz";
        CountryISO["Thailand"] = "th";
        CountryISO["TimorLeste"] = "tl";
        CountryISO["Togo"] = "tg";
        CountryISO["Tokelau"] = "tk";
        CountryISO["Tonga"] = "to";
        CountryISO["TrinidadAndTobago"] = "tt";
        CountryISO["Tunisia"] = "tn";
        CountryISO["Turkey"] = "tr";
        CountryISO["Turkmenistan"] = "tm";
        CountryISO["TurksAndCaicosIslands"] = "tc";
        CountryISO["Tuvalu"] = "tv";
        CountryISO["USVirginIslands"] = "vi";
        CountryISO["Uganda"] = "ug";
        CountryISO["Ukraine"] = "ua";
        CountryISO["UnitedArabEmirates"] = "ae";
        CountryISO["UnitedKingdom"] = "gb";
        CountryISO["UnitedStates"] = "us";
        CountryISO["Uruguay"] = "uy";
        CountryISO["Uzbekistan"] = "uz";
        CountryISO["Vanuatu"] = "vu";
        CountryISO["VaticanCity"] = "va";
        CountryISO["Venezuela"] = "ve";
        CountryISO["Vietnam"] = "vn";
        CountryISO["WallisAndFutuna"] = "wf";
        CountryISO["WesternSahara"] = "eh";
        CountryISO["Yemen"] = "ye";
        CountryISO["Zambia"] = "zm";
        CountryISO["Zimbabwe"] = "zw";
        CountryISO["\u00C5landIslands"] = "ax";
    })(CountryISO || (CountryISO = {}));

    var SearchCountryField;
    (function (SearchCountryField) {
        SearchCountryField["DialCode"] = "dialCode";
        SearchCountryField["Iso2"] = "iso2";
        SearchCountryField["Name"] = "name";
        SearchCountryField["All"] = "all";
    })(SearchCountryField || (SearchCountryField = {}));

    var TooltipLabel;
    (function (TooltipLabel) {
        TooltipLabel["Name"] = "name";
        TooltipLabel["Iso2"] = "iso2";
    })(TooltipLabel || (TooltipLabel = {}));

    var PhoneComponent = /** @class */ (function () {
        function PhoneComponent() {
            this.faPlus = freeSolidSvgIcons.faPlus;
            this.faMinus = freeSolidSvgIcons.faMinus;
            this.isUniquePhone = false;
            this.separateDialCode = true;
            this.SearchCountryField = SearchCountryField;
            this.TooltipLabel = TooltipLabel;
            this.CountryISO = CountryISO;
            this.preferredCountries = [
                CountryISO.UnitedStates,
                CountryISO.UnitedKingdom,
            ];
            this.phoneForm = new forms.FormGroup({
                phone: new forms.FormControl(undefined, [forms.Validators.required]),
            });
            this.isShowPlus = true;
            this.onMultiple = new core.EventEmitter();
            this.change = new core.EventEmitter();
        }
        Object.defineProperty(PhoneComponent.prototype, "value", {
            get: function () {
                return 0;
            },
            set: function (value) {
                this.phoneForm.setValue({ phone: value });
            },
            enumerable: true,
            configurable: true
        });
        PhoneComponent.prototype.changePreferredCountries = function () {
            this.preferredCountries = [CountryISO.India, CountryISO.Canada];
        };
        PhoneComponent.prototype.onChangeinput = function (event, index, phoneArray) {
            var _this = this;
            var code = this.phoneForm.controls["phone"].value.dialCode;
            var data = { event: event, index: index, code: code };
            this.change.emit(data);
            var value = [];
            phoneArray.map(function (item, key) {
                if (key !== index) {
                    if (item.phone === event.target.value &&
                        item.code === _this.phoneForm.controls["phone"].value.dialCode) {
                        value.push(item.phone);
                    }
                }
            });
            if (value.length > 0) {
                this.isUniquePhone = true;
            }
            else {
                this.isUniquePhone = false;
            }
        };
        PhoneComponent.prototype.onClickMultiplePhone = function () {
            this.onMultiple.emit();
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], PhoneComponent.prototype, "value", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], PhoneComponent.prototype, "index", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], PhoneComponent.prototype, "phoneArray", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], PhoneComponent.prototype, "isShowPlus", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PhoneComponent.prototype, "phoneValidationErrorMsg", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PhoneComponent.prototype, "phoneUniqueErrorMsg", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], PhoneComponent.prototype, "maxLength", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], PhoneComponent.prototype, "isMultiple", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], PhoneComponent.prototype, "onMultiple", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], PhoneComponent.prototype, "change", void 0);
        PhoneComponent = __decorate([
            core.Component({
                selector: 'lib-phone',
                template: "<!--The content below is only a placeholder and can be replaced.-->\n<form #f=\"ngForm\" [formGroup]=\"phoneForm\">\n        <div>\n            <ngx-intl-tel-input\n                [value]=\"value\"\n                [cssClass]=\"'custom'\"\n                [preferredCountries]=\"preferredCountries\"\n                [enableAutoCountrySelect]=\"false\"\n                [enablePlaceholder]=\"false\"\n                [searchCountryFlag]=\"true\"\n                [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\n                [selectFirstCountry]=\"false\"\n                [selectedCountryISO]=\"CountryISO.India\"\n                [maxLength]=\"maxLength\"\n                [tooltipField]=\"TooltipLabel.Name\"\n                [phoneValidation]=\"true\"\n                [separateDialCode]=\"separateDialCode\"\n                name=\"phone\"\n                formControlName=\"phone\"\n                (input)=\"onChangeinput($event, index, phoneArray)\"\n            >\n            </ngx-intl-tel-input>\n            <span *ngIf=\"f.form.value.phone !== null && isMultiple\" class=\"add-remove\">\n                <span>\n                    <fa-icon [icon]=\"faMinus\"></fa-icon>\n                </span>\n                <span *ngIf=\"isShowPlus\" class=\"plus\">\n                    <fa-icon [icon]=\"faPlus\" (click)=\"onClickMultiplePhone()\"></fa-icon>\n                </span>\n            </span>\n            <p\n                [ngClass]=\"{\n                    control: true,\n                    'error-msg':\n                        f.form.controls['phone'].invalid && f.form.value.phone !== null\n                }\"\n                *ngIf=\"f.form.controls['phone'].invalid && f.form.value.phone !== null\"\n            >\n                <span>{{ phoneValidationErrorMsg }}</span>\n            </p>\n            <p\n                [ngClass]=\"{\n                    control: true,\n                    'error-msg': isUniquePhone\n                }\"\n                *ngIf=\"isUniquePhone\"\n            >\n                <span>{{ phoneUniqueErrorMsg }}</span>\n            </p>\n        </div>\n    </form>\n    ",
                styles: ["p.control.error-msg{color:red}span.plus{margin-left:2px}"]
            })
        ], PhoneComponent);
        return PhoneComponent;
    }());

    var PhoneModule = /** @class */ (function () {
        function PhoneModule() {
        }
        PhoneModule = __decorate([
            core.NgModule({
                declarations: [PhoneComponent],
                imports: [],
                exports: [PhoneComponent]
            })
        ], PhoneModule);
        return PhoneModule;
    }());

    exports.PhoneComponent = PhoneComponent;
    exports.PhoneModule = PhoneModule;
    exports.PhoneService = PhoneService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-weblineindia-phone-number.umd.js.map
