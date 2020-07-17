import { __decorate, __metadata } from 'tslib';
import { ɵɵdefineInjectable, Injectable, EventEmitter, Input, Output, Component, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

let PhoneService = class PhoneService {
    constructor() { }
};
PhoneService.ɵprov = ɵɵdefineInjectable({ factory: function PhoneService_Factory() { return new PhoneService(); }, token: PhoneService, providedIn: "root" });
PhoneService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], PhoneService);

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

let PhoneComponent = class PhoneComponent {
    constructor() {
        this.faPlus = faPlus;
        this.faMinus = faMinus;
        this.isUniquePhone = false;
        this.separateDialCode = true;
        this.SearchCountryField = SearchCountryField;
        this.TooltipLabel = TooltipLabel;
        this.CountryISO = CountryISO;
        this.preferredCountries = [
            CountryISO.UnitedStates,
            CountryISO.UnitedKingdom,
        ];
        this.phoneForm = new FormGroup({
            phone: new FormControl(undefined, [Validators.required]),
        });
        this.isShowPlus = true;
        this.onMultiple = new EventEmitter();
        this.change = new EventEmitter();
    }
    set value(value) {
        this.phoneForm.setValue({ phone: value });
    }
    get value() {
        return 0;
    }
    changePreferredCountries() {
        this.preferredCountries = [CountryISO.India, CountryISO.Canada];
    }
    onChangeinput(event, index, phoneArray) {
        let code = this.phoneForm.controls["phone"].value.dialCode;
        let data = { event: event, index: index, code: code };
        this.change.emit(data);
        let value = [];
        phoneArray.map((item, key) => {
            if (key !== index) {
                if (item.phone === event.target.value &&
                    item.code === this.phoneForm.controls["phone"].value.dialCode) {
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
    }
    onClickMultiplePhone() {
        this.onMultiple.emit();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PhoneComponent.prototype, "value", null);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PhoneComponent.prototype, "index", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PhoneComponent.prototype, "phoneArray", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PhoneComponent.prototype, "isShowPlus", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PhoneComponent.prototype, "phoneValidationErrorMsg", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PhoneComponent.prototype, "phoneUniqueErrorMsg", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PhoneComponent.prototype, "maxLength", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PhoneComponent.prototype, "isMultiple", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], PhoneComponent.prototype, "onMultiple", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], PhoneComponent.prototype, "change", void 0);
PhoneComponent = __decorate([
    Component({
        selector: 'lib-phone',
        template: "<!--The content below is only a placeholder and can be replaced.-->\n<form #f=\"ngForm\" [formGroup]=\"phoneForm\">\n        <div>\n            <ngx-intl-tel-input\n                [value]=\"value\"\n                [cssClass]=\"'custom'\"\n                [preferredCountries]=\"preferredCountries\"\n                [enableAutoCountrySelect]=\"false\"\n                [enablePlaceholder]=\"false\"\n                [searchCountryFlag]=\"true\"\n                [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\n                [selectFirstCountry]=\"false\"\n                [selectedCountryISO]=\"CountryISO.India\"\n                [maxLength]=\"maxLength\"\n                [tooltipField]=\"TooltipLabel.Name\"\n                [phoneValidation]=\"true\"\n                [separateDialCode]=\"separateDialCode\"\n                name=\"phone\"\n                formControlName=\"phone\"\n                (input)=\"onChangeinput($event, index, phoneArray)\"\n            >\n            </ngx-intl-tel-input>\n            <span *ngIf=\"f.form.value.phone !== null && isMultiple\" class=\"add-remove\">\n                <span>\n                    <fa-icon [icon]=\"faMinus\"></fa-icon>\n                </span>\n                <span *ngIf=\"isShowPlus\" class=\"plus\">\n                    <fa-icon [icon]=\"faPlus\" (click)=\"onClickMultiplePhone()\"></fa-icon>\n                </span>\n            </span>\n            <p\n                [ngClass]=\"{\n                    control: true,\n                    'error-msg':\n                        f.form.controls['phone'].invalid && f.form.value.phone !== null\n                }\"\n                *ngIf=\"f.form.controls['phone'].invalid && f.form.value.phone !== null\"\n            >\n                <span>{{ phoneValidationErrorMsg }}</span>\n            </p>\n            <p\n                [ngClass]=\"{\n                    control: true,\n                    'error-msg': isUniquePhone\n                }\"\n                *ngIf=\"isUniquePhone\"\n            >\n                <span>{{ phoneUniqueErrorMsg }}</span>\n            </p>\n        </div>\n    </form>\n    ",
        styles: ["p.control.error-msg{color:red}span.plus{margin-left:2px}"]
    })
], PhoneComponent);

let PhoneModule = class PhoneModule {
};
PhoneModule = __decorate([
    NgModule({
        declarations: [PhoneComponent],
        imports: [],
        exports: [PhoneComponent]
    })
], PhoneModule);

/*
 * Public API Surface of phone
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PhoneComponent, PhoneModule, PhoneService };
//# sourceMappingURL=angular-weblineindia-phone-number.js.map
