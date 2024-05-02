import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as country from './countrycodes.json';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class AngularWeblineindiaPhoneNumberComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13ZWJsaW5laW5kaWEtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItd2VibGluZWluZGlhLXBob25lLW51bWJlci9zcmMvbGliL2FuZ3VsYXItd2VibGluZWluZGlhLXBob25lLW51bWJlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdlYmxpbmVpbmRpYS1waG9uZS1udW1iZXIvc3JjL2xpYi9hbmd1bGFyLXdlYmxpbmVpbmRpYS1waG9uZS1udW1iZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEtBQUssT0FBTyxNQUFNLHFCQUFxQixDQUFDOzs7O0FBTy9DLE1BQU0sT0FBTyx1Q0FBdUM7SUFMcEQ7UUFhVyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLHlCQUFvQixHQUFZLEtBQUssQ0FBQztRQUV0QyxnQkFBVyxHQUFXLEtBQUssQ0FBQztRQUUzQixVQUFLLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDckQsU0FBSSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3BELGFBQVEsR0FDaEIsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDMUIsWUFBTyxHQUNmLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQzFCLFVBQUssR0FDYixJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUMxQixvQkFBZSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXpFLGdCQUFXLEdBQVEsT0FBTyxDQUFDO1FBQzNCLG9CQUFlLEdBQVEsRUFBRSxDQUFDO0tBOEMzQjtJQTVDQyxRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBYyxFQUFFLEVBQUUsQ0FDdEUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FDakQsQ0FBQztRQUVGLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQWMsRUFBRSxFQUFFLENBQ3RFLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUNwQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFVO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFvQjtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQW9CO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBb0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQVU7UUFDMUIsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2xELENBQUMsT0FBWSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLFdBQVcsQ0FDcEQsQ0FBQztRQUNGLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDOytHQXZFVSx1Q0FBdUM7bUdBQXZDLHVDQUF1Qyw0akJDUnBELDZzQ0FvQ0U7OzRGRDVCVyx1Q0FBdUM7a0JBTG5ELFNBQVM7K0JBQ0UsbUNBQW1DOzhCQUtwQyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLG9CQUFvQjtzQkFBNUIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBRUksS0FBSztzQkFBZCxNQUFNO2dCQUNHLElBQUk7c0JBQWIsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNO2dCQUVHLE9BQU87c0JBQWhCLE1BQU07Z0JBRUcsS0FBSztzQkFBZCxNQUFNO2dCQUVHLGVBQWU7c0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBjb3VudHJ5IGZyb20gJy4vY291bnRyeWNvZGVzLmpzb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhbmd1bGFyLXdlYmxpbmVpbmRpYS1waG9uZS1udW1iZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmd1bGFyLXdlYmxpbmVpbmRpYS1waG9uZS1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyV2VibGluZWluZGlhUGhvbmVOdW1iZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG5hbWUhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmFsdWUhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGhvbmVOdW1iZXJJbnB1dCE6IHN0cmluZztcclxuICBASW5wdXQoKSBjb3VudHJ5U2VsZWN0Qm94ITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGlucHV0Qm94ITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZSE6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciE6IHN0cmluZztcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlcXVpcmUhOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHR5cGUhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXNJbnZhbGlkUGhvbmVOdW1iZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpbnZhbGlkTWVzc2FnZSE6IHN0cmluZztcclxuICBASW5wdXQoKSBjb3VudHJ5Q29kZTogc3RyaW5nID0gJys5MSc7XHJcblxyXG4gIEBPdXRwdXQoKSBmb2N1czogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGtleVByZXNzOiBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4gPVxyXG4gICAgbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBrZXlEb3duOiBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4gPVxyXG4gICAgbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBrZXlVcDogRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+ID1cclxuICAgIG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgY291bnRyeVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIGNvdW50cnlEYXRhOiBhbnkgPSBjb3VudHJ5O1xyXG4gIHNlbGVjdGVkQ291bnRyeTogYW55ID0ge307XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXREZWZhdWx0Q291bnRyeSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGVmYXVsdENvdW50cnkoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ291bnRyeSA9IHRoaXMuY291bnRyeURhdGEuZGVmYXVsdC5maW5kKChjb3VudHJpZXM6IGFueSkgPT5cclxuICAgICAgW3RoaXMuY291bnRyeUNvZGVdLmluY2x1ZGVzKGNvdW50cmllcy5kaWFsX2NvZGUpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIElmIHNlbGVjdGVkQ291bnRyeSBpcyBub3QgZm91bmQsIGRlZmF1bHQgaXQgdG8gKzkxXHJcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWRDb3VudHJ5KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID0gdGhpcy5jb3VudHJ5RGF0YS5kZWZhdWx0LmZpbmQoKGNvdW50cmllczogYW55KSA9PlxyXG4gICAgICAgICcrOTEnLmluY2x1ZGVzKGNvdW50cmllcy5kaWFsX2NvZGUpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlQcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgdGhpcy5rZXlQcmVzcy5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgdGhpcy5rZXlEb3duLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgdGhpcy5rZXlVcC5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uQ291bnRyeVNlbGVjdGVkKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvdW50cnlDb2RlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZWxlY3RlZENvdW50cnkgPSB0aGlzLmNvdW50cnlEYXRhLmRlZmF1bHQuZmluZChcclxuICAgICAgKGNvdW50cnk6IGFueSkgPT4gY291bnRyeS5kaWFsX2NvZGUgPT09IGNvdW50cnlDb2RlXHJcbiAgICApO1xyXG4gICAgdGhpcy5jb3VudHJ5U2VsZWN0ZWQuZW1pdCh0aGlzLnNlbGVjdGVkQ291bnRyeSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwaG9uZU51bWJlcklucHV0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY291bnRyeVNlbGVjdEJveFwiPlxyXG4gICAgICA8c2VsZWN0XHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkQ291bnRyeS5kaWFsX2NvZGVcIlxyXG4gICAgICAgIChjaGFuZ2UpPVwib25Db3VudHJ5U2VsZWN0ZWQoJGV2ZW50KVwiXHJcbiAgICAgID5cclxuICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY291bnRyeSBvZiBjb3VudHJ5RGF0YS5kZWZhdWx0XCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJjb3VudHJ5LmRpYWxfY29kZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3sgY291bnRyeS5kaWFsX2NvZGUgfX0gKHt7IGNvdW50cnkuY29kZSB9fSAtIHt7IGNvdW50cnkubmFtZSB9fSlcclxuICAgICAgICA8L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzPVwiaW5wdXRCb3hcIlxyXG4gICAgICAgIFt0eXBlXT1cInR5cGVcIlxyXG4gICAgICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJ2YWx1ZSA/IHZhbHVlIDogJydcIlxyXG4gICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlXCJcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIgPyBwbGFjZWhvbGRlciA6ICcnXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxyXG4gICAgICAgIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcclxuICAgICAgICAoa2V5cHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQpXCJcclxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXHJcbiAgICAgICAgKGtleXVwKT1cIm9uS2V5VXAoJGV2ZW50KVwiICAgICAgXHJcbiAgICAgICAgKGNvdW50cnlTZWxlY3RlZCk9XCJvbkNvdW50cnlTZWxlY3RlZCgkZXZlbnQpXCJcclxuICAgICAgLz5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJpc0ludmFsaWRQaG9uZU51bWJlclwiXHJcbiAgICAgICAgPjxwIGNsYXNzPVwiZXJyb3JNZXNzYWdlXCI+e3sgaW52YWxpZE1lc3NhZ2UgfX08L3A+PC9zcGFuXHJcbiAgICAgID5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICJdfQ==