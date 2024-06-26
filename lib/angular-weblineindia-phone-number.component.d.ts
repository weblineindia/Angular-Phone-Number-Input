import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AngularWeblineindiaPhoneNumberComponent {
    name: string;
    value: string;
    phoneNumberInput: string;
    countrySelectBox: string;
    inputBox: string;
    errorMessage: string;
    placeholder: string;
    disabled: boolean;
    require: boolean;
    type: string;
    isInvalidPhoneNumber: boolean;
    invalidMessage: string;
    countryCode: string;
    focus: EventEmitter<void>;
    blur: EventEmitter<void>;
    keyPress: EventEmitter<KeyboardEvent>;
    keyDown: EventEmitter<KeyboardEvent>;
    keyUp: EventEmitter<KeyboardEvent>;
    countrySelected: EventEmitter<void>;
    countryData: any;
    selectedCountry: any;
    ngOnInit(): void;
    setDefaultCountry(): void;
    onFocus(event: any): void;
    onBlur(event: any): void;
    onKeyPress(event: KeyboardEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    onKeyUp(event: KeyboardEvent): void;
    onCountrySelected(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AngularWeblineindiaPhoneNumberComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AngularWeblineindiaPhoneNumberComponent, "angular-weblineindia-phone-number", never, { "name": { "alias": "name"; "required": false; }; "value": { "alias": "value"; "required": false; }; "phoneNumberInput": { "alias": "phoneNumberInput"; "required": false; }; "countrySelectBox": { "alias": "countrySelectBox"; "required": false; }; "inputBox": { "alias": "inputBox"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "require": { "alias": "require"; "required": false; }; "type": { "alias": "type"; "required": false; }; "isInvalidPhoneNumber": { "alias": "isInvalidPhoneNumber"; "required": false; }; "invalidMessage": { "alias": "invalidMessage"; "required": false; }; "countryCode": { "alias": "countryCode"; "required": false; }; }, { "focus": "focus"; "blur": "blur"; "keyPress": "keyPress"; "keyDown": "keyDown"; "keyUp": "keyUp"; "countrySelected": "countrySelected"; }, never, never, false, never>;
}
