import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

class AngularWeblineindiaPhoneNumberService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaPhoneNumberService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaPhoneNumberService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaPhoneNumberService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

var countrycodes = [
	{
		name: "Afghanistan",
		dial_code: "+93",
		code: "AF",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Aland Islands",
		dial_code: "+358",
		code: "AX",
		placeholder: "111111111",
		minlength: "7",
		maxlength: "10"
	},
	{
		name: "Albania",
		dial_code: "+355",
		code: "AL",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Algeria",
		dial_code: "+213",
		code: "DZ",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "AmericanSamoa",
		dial_code: "+1684",
		code: "AS",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Andorra",
		dial_code: "+376",
		code: "AD",
		placeholder: "111111",
		minlength: "6",
		maxlength: "6"
	},
	{
		name: "Angola",
		dial_code: "+244",
		code: "AO",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Anguilla",
		dial_code: "+1264",
		code: "AI",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Antarctica",
		dial_code: "+672",
		code: "AQ",
		placeholder: "111111",
		minlength: "6",
		maxlength: "6"
	},
	{
		name: "Antigua and Barbuda",
		dial_code: "+1268",
		code: "AG",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Argentina",
		dial_code: "+54",
		code: "AR",
		placeholder: "111111",
		minlength: "6",
		maxlength: "8"
	},
	{
		name: "Armenia",
		dial_code: "+374",
		code: "AM",
		placeholder: "111111",
		minlength: "6",
		maxlength: "6"
	},
	{
		name: "Aruba",
		dial_code: "+297",
		code: "AW",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Australia",
		dial_code: "+61",
		code: "AU",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Austria",
		dial_code: "+43",
		code: "AT",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "11"
	},
	{
		name: "Azerbaijan",
		dial_code: "+994",
		code: "AZ",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Bahamas",
		dial_code: "+1242",
		code: "BS",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Bahrain",
		dial_code: "+973",
		code: "BH",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Bangladesh",
		dial_code: "+880",
		code: "BD",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Barbados",
		dial_code: "+1246",
		code: "BB",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Belarus",
		dial_code: "+375",
		code: "BY",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Belgium",
		dial_code: "+32",
		code: "BE",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Belize",
		dial_code: "+501",
		code: "BZ",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Benin",
		dial_code: "+229",
		code: "BJ",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Bermuda",
		dial_code: "+1441",
		code: "BM",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Bhutan",
		dial_code: "+975",
		code: "BT",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Bolivia, Plurinational State of",
		dial_code: "+591",
		code: "BO",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Bosnia and Herzegovina",
		dial_code: "+387",
		code: "BA",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Botswana",
		dial_code: "+267",
		code: "BW",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Brazil",
		dial_code: "+55",
		code: "BR",
		placeholder: "11111111111",
		minlength: "11",
		maxlength: "11"
	},
	{
		name: "British Indian Ocean Territory",
		dial_code: "+246",
		code: "IO",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Brunei Darussalam",
		dial_code: "+673",
		code: "BN",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Bulgaria",
		dial_code: "+359",
		code: "BG",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Burkina Faso",
		dial_code: "+226",
		code: "BF",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Burundi",
		dial_code: "+257",
		code: "BI",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Cambodia",
		dial_code: "+855",
		code: "KH",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Cameroon",
		dial_code: "+237",
		code: "CM",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Canada",
		dial_code: "+1",
		code: "CA",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Cape Verde",
		dial_code: "+238",
		code: "CV",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Cayman Islands",
		dial_code: "+345",
		code: "KY",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Central African Republic",
		dial_code: "+236",
		code: "CF",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Chad",
		dial_code: "+235",
		code: "TD",
		placeholder: "111111",
		minlength: "6",
		maxlength: "6"
	},
	{
		name: "Chile",
		dial_code: "+56",
		code: "CL",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "China",
		dial_code: "+86",
		code: "CN",
		placeholder: "11111111111",
		minlength: "11",
		maxlength: "11"
	},
	{
		name: "Christmas Island",
		dial_code: "+61",
		code: "CX",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Cocos (Keeling) Islands",
		dial_code: "+61",
		code: "CC",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Colombia",
		dial_code: "+57",
		code: "CO",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Comoros",
		dial_code: "+269",
		code: "KM",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Congo",
		dial_code: "+242",
		code: "CG",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Congo, The Democratic Republic of the Congo",
		dial_code: "+243",
		code: "CD",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Cook Islands",
		dial_code: "+682",
		code: "CK",
		placeholder: "11111",
		minlength: "5",
		maxlength: "5"
	},
	{
		name: "Costa Rica",
		dial_code: "+506",
		code: "CR",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Cote d'Ivoire",
		dial_code: "+225",
		code: "CI",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Croatia",
		dial_code: "+385",
		code: "HR",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Cuba",
		dial_code: "+53",
		code: "CU",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Cyprus",
		dial_code: "+357",
		code: "CY",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Czech Republic",
		dial_code: "+420",
		code: "CZ",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Denmark",
		dial_code: "+45",
		code: "DK",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Djibouti",
		dial_code: "+253",
		code: "DJ",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Dominica",
		dial_code: "+1767",
		code: "DM",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Dominican Republic",
		dial_code: "+1849",
		code: "DO",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Ecuador",
		dial_code: "+593",
		code: "EC",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Egypt",
		dial_code: "+20",
		code: "EG",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "El Salvador",
		dial_code: "+503",
		code: "SV",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Equatorial Guinea",
		dial_code: "+240",
		code: "GQ",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Eritrea",
		dial_code: "+291",
		code: "ER",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Estonia",
		dial_code: "+372",
		code: "EE",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Ethiopia",
		dial_code: "+251",
		code: "ET",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Falkland Islands (Malvinas)",
		dial_code: "+500",
		code: "FK",
		placeholder: "11111",
		minlength: "5",
		maxlength: "5"
	},
	{
		name: "Faroe Islands",
		dial_code: "+298",
		code: "FO",
		placeholder: "11111",
		minlength: "5",
		maxlength: "5"
	},
	{
		name: "Fiji",
		dial_code: "+679",
		code: "FJ",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Finland",
		dial_code: "+358",
		code: "FI",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "11"
	},
	{
		name: "France",
		dial_code: "+33",
		code: "FR",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "French Guiana",
		dial_code: "+594",
		code: "GF",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "French Polynesia",
		dial_code: "+689",
		code: "PF",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Gabon",
		dial_code: "+241",
		code: "GA",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Gambia",
		dial_code: "+220",
		code: "GM",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Georgia",
		dial_code: "+995",
		code: "GE",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Germany",
		dial_code: "+49",
		code: "DE",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Ghana",
		dial_code: "+233",
		code: "GH",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Gibraltar",
		dial_code: "+350",
		code: "GI",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Greece",
		dial_code: "+30",
		code: "GR",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Greenland",
		dial_code: "+299",
		code: "GL",
		placeholder: "111111",
		minlength: "6",
		maxlength: "6"
	},
	{
		name: "Grenada",
		dial_code: "+1473",
		code: "GD",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Guadeloupe",
		dial_code: "+590",
		code: "GP",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Guam",
		dial_code: "+1671",
		code: "GU",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Guatemala",
		dial_code: "+502",
		code: "GT",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Guernsey",
		dial_code: "+44",
		code: "GG",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Guinea",
		dial_code: "+224",
		code: "GN",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Guinea-Bissau",
		dial_code: "+245",
		code: "GW",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Guyana",
		dial_code: "+592",
		code: "GY",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Haiti",
		dial_code: "+509",
		code: "HT",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Holy See (Vatican City State)",
		dial_code: "+379",
		code: "VA",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Honduras",
		dial_code: "+504",
		code: "HN",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Hong Kong",
		dial_code: "+852",
		code: "HK",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Hungary",
		dial_code: "+36",
		code: "HU",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Iceland",
		dial_code: "+354",
		code: "IS",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "India",
		dial_code: "+91",
		code: "IN",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Indonesia",
		dial_code: "+62",
		code: "ID",
		placeholder: "11111111111",
		minlength: "11",
		maxlength: "11"
	},
	{
		name: "Iran, Islamic Republic of Persian Gulf",
		dial_code: "+98",
		code: "IR",
		placeholder: "11111111111",
		minlength: "11",
		maxlength: "11"
	},
	{
		name: "Iraq",
		dial_code: "+964",
		code: "IQ",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Ireland",
		dial_code: "+353",
		code: "IE",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Isle of Man",
		dial_code: "+44",
		code: "IM",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Israel",
		dial_code: "+972",
		code: "IL",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Italy",
		dial_code: "+39",
		code: "IT",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Jamaica",
		dial_code: "+1876",
		code: "JM",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Japan",
		dial_code: "+81",
		code: "JP",
		placeholder: "",
		minlength: "",
		maxlength: ""
	},
	{
		name: "Jersey",
		dial_code: "+44",
		code: "JE",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Jordan",
		dial_code: "+962",
		code: "JO",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "9"
	},
	{
		name: "Kazakhstan",
		dial_code: "+7",
		code: "KZ",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "10"
	},
	{
		name: "Kenya",
		dial_code: "+254",
		code: "KE",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Kiribati",
		dial_code: "+686",
		code: "KI",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Korea, Democratic People's Republic of Korea",
		dial_code: "+850",
		code: "KP",
		placeholder: "1111",
		minlength: "4",
		maxlength: "13"
	},
	{
		name: "Korea, Republic of South Korea",
		dial_code: "+82",
		code: "KR",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "8"
	},
	{
		name: "Kuwait",
		dial_code: "+965",
		code: "KW",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Kyrgyzstan",
		dial_code: "+996",
		code: "KG",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Laos",
		dial_code: "+856",
		code: "LA",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "9"
	},
	{
		name: "Latvia",
		dial_code: "+371",
		code: "LV",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Lebanon",
		dial_code: "+961",
		code: "LB",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "8"
	},
	{
		name: "Lesotho",
		dial_code: "+266",
		code: "LS",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Liberia",
		dial_code: "+231",
		code: "LR",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "9"
	},
	{
		name: "Libyan Arab Jamahiriya",
		dial_code: "+218",
		code: "LY",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Liechtenstein",
		dial_code: "+423",
		code: "LI",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Lithuania",
		dial_code: "+370",
		code: "LT",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Luxembourg",
		dial_code: "+352",
		code: "LU",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Macao",
		dial_code: "+853",
		code: "MO",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Macedonia",
		dial_code: "+389",
		code: "MK",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Madagascar",
		dial_code: "+261",
		code: "MG",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Malawi",
		dial_code: "+265",
		code: "MW",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "9"
	},
	{
		name: "Malaysia",
		dial_code: "+60",
		code: "MY",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Maldives",
		dial_code: "+960",
		code: "MV",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Mali",
		dial_code: "+223",
		code: "ML",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Malta",
		dial_code: "+356",
		code: "MT",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Marshall Islands",
		dial_code: "+692",
		code: "MH",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Martinique",
		dial_code: "+596",
		code: "MQ",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Mauritania",
		dial_code: "+222",
		code: "MR",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Mauritius",
		dial_code: "+230",
		code: "MU",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Mayotte",
		dial_code: "+262",
		code: "YT",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Mexico",
		dial_code: "+52",
		code: "MX",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Micronesia, Federated States of Micronesia",
		dial_code: "+691",
		code: "FM",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Moldova",
		dial_code: "+373",
		code: "MD",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Monaco",
		dial_code: "+377",
		code: "MC",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Mongolia",
		dial_code: "+976",
		code: "MN",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Montenegro",
		dial_code: "+382",
		code: "ME",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Montserrat",
		dial_code: "+1664",
		code: "MS",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Morocco",
		dial_code: "+212",
		code: "MA",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Mozambique",
		dial_code: "+258",
		code: "MZ",
		placeholder: "111111111111",
		minlength: "12",
		maxlength: "12"
	},
	{
		name: "Myanmar",
		dial_code: "+95",
		code: "MM",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "10"
	},
	{
		name: "Namibia",
		dial_code: "+264",
		code: "NA",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Nauru",
		dial_code: "+674",
		code: "NR",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Nepal",
		dial_code: "+977",
		code: "NP",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Netherlands",
		dial_code: "+31",
		code: "NL",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Netherlands Antilles",
		dial_code: "+599",
		code: "AN",
		placeholder: "",
		minlength: "",
		maxlength: ""
	},
	{
		name: "New Caledonia",
		dial_code: "+687",
		code: "NC",
		placeholder: "111111",
		minlength: "6",
		maxlength: "6"
	},
	{
		name: "New Zealand",
		dial_code: "+64",
		code: "NZ",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "9"
	},
	{
		name: "Nicaragua",
		dial_code: "+505",
		code: "NI",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Niger",
		dial_code: "+227",
		code: "NE",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Nigeria",
		dial_code: "+234",
		code: "NG",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Niue",
		dial_code: "+683",
		code: "NU",
		placeholder: "1111",
		minlength: "4",
		maxlength: "4"
	},
	{
		name: "Norfolk Island",
		dial_code: "+672",
		code: "NF",
		placeholder: "111111",
		minlength: "6",
		maxlength: "6"
	},
	{
		name: "Northern Mariana Islands",
		dial_code: "+1670",
		code: "MP",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Norway",
		dial_code: "+47",
		code: "NO",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Oman",
		dial_code: "+968",
		code: "OM",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Pakistan",
		dial_code: "+92",
		code: "PK",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Palau",
		dial_code: "+680",
		code: "PW",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Palestinian Territory, Occupied",
		dial_code: "+970",
		code: "PS",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Panama",
		dial_code: "+507",
		code: "PA",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Papua New Guinea",
		dial_code: "+675",
		code: "PG",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Paraguay",
		dial_code: "+595",
		code: "PY",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Peru",
		dial_code: "+51",
		code: "PE",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Philippines",
		dial_code: "+63",
		code: "PH",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Pitcairn",
		dial_code: "+872",
		code: "PN",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Poland",
		dial_code: "+48",
		code: "PL",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Portugal",
		dial_code: "+351",
		code: "PT",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Puerto Rico",
		dial_code: "+1939",
		code: "PR",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Qatar",
		dial_code: "+974",
		code: "QA",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Romania",
		dial_code: "+40",
		code: "RO",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Russia",
		dial_code: "+7",
		code: "RU",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Rwanda",
		dial_code: "+250",
		code: "RW",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Reunion",
		dial_code: "+262",
		code: "RE",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Saint Barthelemy",
		dial_code: "+590",
		code: "BL",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Saint Helena, Ascension and Tristan Da Cunha",
		dial_code: "+290",
		code: "SH",
		placeholder: "1111",
		minlength: "4",
		maxlength: "4"
	},
	{
		name: "Saint Kitts and Nevis",
		dial_code: "+1869",
		code: "KN",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Saint Lucia",
		dial_code: "+1758",
		code: "LC",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Saint Martin",
		dial_code: "+590",
		code: "MF",
		placeholder: "111111",
		minlength: "6",
		maxlength: "6"
	},
	{
		name: "Saint Pierre and Miquelon",
		dial_code: "+508",
		code: "PM",
		placeholder: "111111",
		minlength: "6",
		maxlength: "6"
	},
	{
		name: "Saint Vincent and the Grenadines",
		dial_code: "+1784",
		code: "VC",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Samoa",
		dial_code: "+685",
		code: "WS",
		placeholder: "11111",
		minlength: "5",
		maxlength: "7"
	},
	{
		name: "San Marino",
		dial_code: "+378",
		code: "SM",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Sao Tome and Principe",
		dial_code: "+239",
		code: "ST",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Saudi Arabia",
		dial_code: "+966",
		code: "SA",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Senegal",
		dial_code: "+221",
		code: "SN",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Serbia",
		dial_code: "+381",
		code: "RS",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Seychelles",
		dial_code: "+248",
		code: "SC",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Sierra Leone",
		dial_code: "+232",
		code: "SL",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Singapore",
		dial_code: "+65",
		code: "SG",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Slovakia",
		dial_code: "+421",
		code: "SK",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Slovenia",
		dial_code: "+386",
		code: "SI",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Solomon Islands",
		dial_code: "+677",
		code: "SB",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Somalia",
		dial_code: "+252",
		code: "SO",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "9"
	},
	{
		name: "South Africa",
		dial_code: "+27",
		code: "ZA",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "South Sudan",
		dial_code: "+211",
		code: "SS",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "South Georgia and the South Sandwich Islands",
		dial_code: "+500",
		code: "GS",
		placeholder: "11111",
		minlength: "5",
		maxlength: "5"
	},
	{
		name: "Spain",
		dial_code: "+34",
		code: "ES",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Sri Lanka",
		dial_code: "+94",
		code: "LK",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Sudan",
		dial_code: "+249",
		code: "SD",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Suriname",
		dial_code: "+597",
		code: "SR",
		placeholder: "111111",
		minlength: "6",
		maxlength: "7"
	},
	{
		name: "Svalbard and Jan Mayen",
		dial_code: "+47",
		code: "SJ",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Swaziland",
		dial_code: "+268",
		code: "SZ",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Sweden",
		dial_code: "+46",
		code: "SE",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Switzerland",
		dial_code: "+41",
		code: "CH",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Syrian Arab Republic",
		dial_code: "+963",
		code: "SY",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Taiwan",
		dial_code: "+886",
		code: "TW",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Tajikistan",
		dial_code: "+992",
		code: "TJ",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Tanzania, United Republic of Tanzania",
		dial_code: "+255",
		code: "TZ",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Thailand",
		dial_code: "+66",
		code: "TH",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Timor-Leste",
		dial_code: "+670",
		code: "TL",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Togo",
		dial_code: "+228",
		code: "TG",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Tokelau",
		dial_code: "+690",
		code: "TK",
		placeholder: "11111",
		minlength: "5",
		maxlength: "5"
	},
	{
		name: "Tonga",
		dial_code: "+676",
		code: "TO",
		placeholder: "11111",
		minlength: "5",
		maxlength: "5"
	},
	{
		name: "Trinidad and Tobago",
		dial_code: "+1868",
		code: "TT",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Tunisia",
		dial_code: "+216",
		code: "TN",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Turkey",
		dial_code: "+90",
		code: "TR",
		placeholder: "11111111111",
		minlength: "11",
		maxlength: "11"
	},
	{
		name: "Turkmenistan",
		dial_code: "+993",
		code: "TM",
		placeholder: "11111111",
		minlength: "8",
		maxlength: "8"
	},
	{
		name: "Turks and Caicos Islands",
		dial_code: "+1649",
		code: "TC",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Tuvalu",
		dial_code: "+688",
		code: "TV",
		placeholder: "11111",
		minlength: "5",
		maxlength: "5"
	},
	{
		name: "Uganda",
		dial_code: "+256",
		code: "UG",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Ukraine",
		dial_code: "+380",
		code: "UA",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "United Arab Emirates",
		dial_code: "+971",
		code: "AE",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "United Kingdom",
		dial_code: "+44",
		code: "GB",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "United States",
		dial_code: "+1",
		code: "US",
		placeholder: "1111111111",
		minlength: "10",
		maxlength: "10"
	},
	{
		name: "Uruguay",
		dial_code: "+598",
		code: "UY",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Uzbekistan",
		dial_code: "+998",
		code: "UZ",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Vanuatu",
		dial_code: "+678",
		code: "VU",
		placeholder: "11111",
		minlength: "5",
		maxlength: "5"
	},
	{
		name: "Venezuela, Bolivarian Republic of Venezuela",
		dial_code: "+58",
		code: "VE",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Vietnam",
		dial_code: "+84",
		code: "VN",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Virgin Islands, British",
		dial_code: "+1284",
		code: "VG",
		placeholder: "1111111",
		minlength: "7",
		maxlength: "7"
	},
	{
		name: "Virgin Islands, U.S.",
		dial_code: "+1340",
		code: "VI",
		placeholder: "111111",
		minlength: "6",
		maxlength: "6"
	},
	{
		name: "Wallis and Futuna",
		dial_code: "+681",
		code: "WF",
		placeholder: "",
		minlength: "",
		maxlength: ""
	},
	{
		name: "Yemen",
		dial_code: "+967",
		code: "YE",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Zambia",
		dial_code: "+260",
		code: "ZM",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	},
	{
		name: "Zimbabwe",
		dial_code: "+263",
		code: "ZW",
		placeholder: "111111111",
		minlength: "9",
		maxlength: "9"
	}
];

var country = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: countrycodes
});

class AngularWeblineindiaPhoneNumberComponent {
    constructor() {
        this.disabled = false;
        this.isInvalidPhoneNumber = false;
        this.countryCode = '+91';
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.keyPress = new EventEmitter();
        this.keyDown = new EventEmitter();
        this.keyUp = new EventEmitter();
        this.countrySelected = new EventEmitter();
        this.countryData = country;
        this.selectedCountry = {};
    }
    ngOnInit() {
        this.setDefaultCountry();
    }
    setDefaultCountry() {
        this.selectedCountry = this.countryData.default.find((countries) => [this.countryCode].includes(countries.dial_code));
        // If selectedCountry is not found, default it to +91
        if (!this.selectedCountry) {
            this.selectedCountry = this.countryData.default.find((countries) => '+91'.includes(countries.dial_code));
        }
    }
    onFocus(event) {
        this.focus.emit(event);
    }
    onBlur(event) {
        this.blur.emit(event);
    }
    onKeyPress(event) {
        this.keyPress.emit(event);
    }
    onKeyDown(event) {
        this.keyDown.emit(event);
    }
    onKeyUp(event) {
        this.keyUp.emit(event);
    }
    onCountrySelected(event) {
        const countryCode = event.target.value;
        this.selectedCountry = this.countryData.default.find((country) => country.dial_code === countryCode);
        this.countrySelected.emit(this.selectedCountry);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaPhoneNumberComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AngularWeblineindiaPhoneNumberComponent, selector: "angular-weblineindia-phone-number", inputs: { name: "name", value: "value", phoneNumberInput: "phoneNumberInput", countrySelectBox: "countrySelectBox", inputBox: "inputBox", errorMessage: "errorMessage", placeholder: "placeholder", disabled: "disabled", require: "require", type: "type", isInvalidPhoneNumber: "isInvalidPhoneNumber", invalidMessage: "invalidMessage", countryCode: "countryCode" }, outputs: { focus: "focus", blur: "blur", keyPress: "keyPress", keyDown: "keyDown", keyUp: "keyUp", countrySelected: "countrySelected" }, ngImport: i0, template: "<div class=\"phoneNumberInput\">\r\n    <div class=\"countrySelectBox\">\r\n      <select\r\n        [disabled]=\"disabled\"\r\n        [(ngModel)]=\"selectedCountry.dial_code\"\r\n        (change)=\"onCountrySelected($event)\"\r\n      >\r\n        <option\r\n          *ngFor=\"let country of countryData.default\"\r\n          [value]=\"country.dial_code\"\r\n        >\r\n          {{ country.dial_code }} ({{ country.code }} - {{ country.name }})\r\n        </option>\r\n      </select>\r\n    </div>\r\n    <div>\r\n      <input\r\n        class=\"inputBox\"\r\n        [type]=\"type\"\r\n        [name]=\"name\"\r\n        [value]=\"value ? value : ''\"\r\n        [required]=\"require\"\r\n        [placeholder]=\"placeholder ? placeholder : ''\"\r\n        [disabled]=\"disabled\"\r\n        (focus)=\"onFocus($event)\"\r\n        (blur)=\"onBlur($event)\"\r\n        (keypress)=\"onKeyPress($event)\"\r\n        (keydown)=\"onKeyDown($event)\"\r\n        (keyup)=\"onKeyUp($event)\"      \r\n        (countrySelected)=\"onCountrySelected($event)\"\r\n      />\r\n      <span *ngIf=\"isInvalidPhoneNumber\"\r\n        ><p class=\"errorMessage\">{{ invalidMessage }}</p></span\r\n      >\r\n    </div>\r\n  </div>\r\n  ", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaPhoneNumberComponent, decorators: [{
            type: Component,
            args: [{ selector: 'angular-weblineindia-phone-number', template: "<div class=\"phoneNumberInput\">\r\n    <div class=\"countrySelectBox\">\r\n      <select\r\n        [disabled]=\"disabled\"\r\n        [(ngModel)]=\"selectedCountry.dial_code\"\r\n        (change)=\"onCountrySelected($event)\"\r\n      >\r\n        <option\r\n          *ngFor=\"let country of countryData.default\"\r\n          [value]=\"country.dial_code\"\r\n        >\r\n          {{ country.dial_code }} ({{ country.code }} - {{ country.name }})\r\n        </option>\r\n      </select>\r\n    </div>\r\n    <div>\r\n      <input\r\n        class=\"inputBox\"\r\n        [type]=\"type\"\r\n        [name]=\"name\"\r\n        [value]=\"value ? value : ''\"\r\n        [required]=\"require\"\r\n        [placeholder]=\"placeholder ? placeholder : ''\"\r\n        [disabled]=\"disabled\"\r\n        (focus)=\"onFocus($event)\"\r\n        (blur)=\"onBlur($event)\"\r\n        (keypress)=\"onKeyPress($event)\"\r\n        (keydown)=\"onKeyDown($event)\"\r\n        (keyup)=\"onKeyUp($event)\"      \r\n        (countrySelected)=\"onCountrySelected($event)\"\r\n      />\r\n      <span *ngIf=\"isInvalidPhoneNumber\"\r\n        ><p class=\"errorMessage\">{{ invalidMessage }}</p></span\r\n      >\r\n    </div>\r\n  </div>\r\n  " }]
        }], propDecorators: { name: [{
                type: Input
            }], value: [{
                type: Input
            }], phoneNumberInput: [{
                type: Input
            }], countrySelectBox: [{
                type: Input
            }], inputBox: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], require: [{
                type: Input
            }], type: [{
                type: Input
            }], isInvalidPhoneNumber: [{
                type: Input
            }], invalidMessage: [{
                type: Input
            }], countryCode: [{
                type: Input
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], keyPress: [{
                type: Output
            }], keyDown: [{
                type: Output
            }], keyUp: [{
                type: Output
            }], countrySelected: [{
                type: Output
            }] } });

class AngularWeblineindiaPhoneNumberModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaPhoneNumberModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaPhoneNumberModule, declarations: [AngularWeblineindiaPhoneNumberComponent], imports: [CommonModule, FormsModule, ReactiveFormsModule], exports: [AngularWeblineindiaPhoneNumberComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaPhoneNumberModule, imports: [CommonModule, FormsModule, ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaPhoneNumberModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AngularWeblineindiaPhoneNumberComponent],
                    imports: [CommonModule, FormsModule, ReactiveFormsModule],
                    exports: [AngularWeblineindiaPhoneNumberComponent],
                }]
        }] });

/*
 * Public API Surface of angular-weblineindia-phone-number
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularWeblineindiaPhoneNumberComponent, AngularWeblineindiaPhoneNumberModule, AngularWeblineindiaPhoneNumberService };
//# sourceMappingURL=angular-weblineindia-phone-number.mjs.map
