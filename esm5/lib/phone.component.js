import { __decorate, __metadata } from "tslib";
import { CountryISO } from "./enums/country-iso.enum";
import { SearchCountryField } from "./enums/search-country-field.enum";
import { TooltipLabel } from "./enums/tooltip-label.enum";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
var PhoneComponent = /** @class */ (function () {
    function PhoneComponent() {
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
    return PhoneComponent;
}());
export { PhoneComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci13ZWJsaW5laW5kaWEtcGhvbmUtbnVtYmVyLyIsInNvdXJjZXMiOlsibGliL3Bob25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFNcEU7SUFBQTtRQUNDLFdBQU0sR0FBUSxNQUFNLENBQUM7UUFDckIsWUFBTyxHQUFRLE9BQU8sQ0FBQztRQUN2QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsdUJBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDeEMsaUJBQVksR0FBRyxZQUFZLENBQUM7UUFDNUIsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUN4Qix1QkFBa0IsR0FBaUI7WUFDbEMsVUFBVSxDQUFDLFlBQVk7WUFDdkIsVUFBVSxDQUFDLGFBQWE7U0FDeEIsQ0FBQztRQUNGLGNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUN6QixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hELENBQUMsQ0FBQztRQWFNLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFNMUIsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQThCL0QsQ0FBQztJQS9DQSxzQkFBSSxpQ0FBSzthQUlUO1lBQ0MsT0FBTyxDQUFDLENBQUM7UUFDVixDQUFDO2FBTkQsVUFBVSxLQUFVO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFpQkQsaURBQXdCLEdBQXhCO1FBQ0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELHNDQUFhLEdBQWIsVUFBYyxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVU7UUFBdEMsaUJBb0JDO1FBbkJBLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDM0QsSUFBSSxJQUFJLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsR0FBRztZQUN4QixJQUFJLEdBQUcsS0FBSyxLQUFLLEVBQUU7Z0JBQ2xCLElBQ0MsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ2pDLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDNUQ7b0JBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3ZCO2FBQ0Q7UUFDRixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDMUI7YUFBTTtZQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1NBQzNCO0lBQ0YsQ0FBQztJQUNELDZDQUFvQixHQUFwQjtRQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQTdDRDtRQURDLEtBQUssRUFBRTs7OytDQUdQO0lBTVE7UUFBUixLQUFLLEVBQUU7a0NBQVEsTUFBTTtpREFBQztJQUNkO1FBQVIsS0FBSyxFQUFFOztzREFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7a0NBQWEsT0FBTztzREFBUTtJQUMzQjtRQUFSLEtBQUssRUFBRTtrQ0FBMEIsTUFBTTttRUFBQztJQUNoQztRQUFSLEtBQUssRUFBRTtrQ0FBc0IsTUFBTTsrREFBQztJQUM1QjtRQUFSLEtBQUssRUFBRTtrQ0FBWSxNQUFNO3FEQUFDO0lBQ2xCO1FBQVIsS0FBSyxFQUFFO2tDQUFhLE9BQU87c0RBQUM7SUFFbkI7UUFBVCxNQUFNLEVBQUU7a0NBQWEsWUFBWTtzREFBZ0M7SUFDeEQ7UUFBVCxNQUFNLEVBQUU7a0NBQVMsWUFBWTtrREFBZ0M7SUFuQ2xELGNBQWM7UUFMMUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIscW9FQUFxQzs7U0FFdEMsQ0FBQztPQUNXLGNBQWMsQ0FpRTFCO0lBQUQscUJBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQWpFWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ291bnRyeUlTTyB9IGZyb20gXCIuL2VudW1zL2NvdW50cnktaXNvLmVudW1cIjtcbmltcG9ydCB7IFNlYXJjaENvdW50cnlGaWVsZCB9IGZyb20gXCIuL2VudW1zL3NlYXJjaC1jb3VudHJ5LWZpZWxkLmVudW1cIjtcbmltcG9ydCB7IFRvb2x0aXBMYWJlbCB9IGZyb20gXCIuL2VudW1zL3Rvb2x0aXAtbGFiZWwuZW51bVwiO1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBmYVBsdXMsIGZhTWludXMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcGhvbmUnLFxuICB0ZW1wbGF0ZVVybDogXCIuL3Bob25lLmNvbXBvbmVudC5odG1sXCIsXG5cdHN0eWxlVXJsczogW1wiLi9waG9uZS5jb21wb25lbnQuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBQaG9uZUNvbXBvbmVudCAge1xuXHRmYVBsdXM6IGFueSA9IGZhUGx1cztcblx0ZmFNaW51czogYW55ID0gZmFNaW51cztcblx0aXNVbmlxdWVQaG9uZTogQm9vbGVhbiA9IGZhbHNlO1xuXG5cdHNlcGFyYXRlRGlhbENvZGUgPSB0cnVlO1xuXHRTZWFyY2hDb3VudHJ5RmllbGQgPSBTZWFyY2hDb3VudHJ5RmllbGQ7XG5cdFRvb2x0aXBMYWJlbCA9IFRvb2x0aXBMYWJlbDtcblx0Q291bnRyeUlTTyA9IENvdW50cnlJU087XG5cdHByZWZlcnJlZENvdW50cmllczogQ291bnRyeUlTT1tdID0gW1xuXHRcdENvdW50cnlJU08uVW5pdGVkU3RhdGVzLFxuXHRcdENvdW50cnlJU08uVW5pdGVkS2luZ2RvbSxcblx0XTtcblx0cGhvbmVGb3JtID0gbmV3IEZvcm1Hcm91cCh7XG5cdFx0cGhvbmU6IG5ldyBGb3JtQ29udHJvbCh1bmRlZmluZWQsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXG5cdH0pO1xuXG5cdEBJbnB1dCgpXG5cdHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5waG9uZUZvcm0uc2V0VmFsdWUoeyBwaG9uZTogdmFsdWUgfSk7XG5cdH1cblxuXHRnZXQgdmFsdWUoKTogYW55IHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdEBJbnB1dCgpIGluZGV4OiBOdW1iZXI7XG5cdEBJbnB1dCgpIHBob25lQXJyYXk6IGFueTtcblx0QElucHV0KCkgaXNTaG93UGx1czogQm9vbGVhbiA9IHRydWU7XG5cdEBJbnB1dCgpIHBob25lVmFsaWRhdGlvbkVycm9yTXNnOiBTdHJpbmc7XG5cdEBJbnB1dCgpIHBob25lVW5pcXVlRXJyb3JNc2c6IFN0cmluZztcblx0QElucHV0KCkgbWF4TGVuZ3RoOiBOdW1iZXI7XG5cdEBJbnB1dCgpIGlzTXVsdGlwbGU6IEJvb2xlYW47XG5cblx0QE91dHB1dCgpIG9uTXVsdGlwbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblx0Y2hhbmdlUHJlZmVycmVkQ291bnRyaWVzKCkge1xuXHRcdHRoaXMucHJlZmVycmVkQ291bnRyaWVzID0gW0NvdW50cnlJU08uSW5kaWEsIENvdW50cnlJU08uQ2FuYWRhXTtcblx0fVxuXHRvbkNoYW5nZWlucHV0KGV2ZW50LCBpbmRleCwgcGhvbmVBcnJheSkge1xuXHRcdGxldCBjb2RlID0gdGhpcy5waG9uZUZvcm0uY29udHJvbHNbXCJwaG9uZVwiXS52YWx1ZS5kaWFsQ29kZTtcblx0XHRsZXQgZGF0YSA9IHsgZXZlbnQ6IGV2ZW50LCBpbmRleDogaW5kZXgsIGNvZGU6IGNvZGUgfTtcblx0XHR0aGlzLmNoYW5nZS5lbWl0KGRhdGEpO1xuXHRcdGxldCB2YWx1ZSA9IFtdO1xuXHRcdHBob25lQXJyYXkubWFwKChpdGVtLCBrZXkpID0+IHtcblx0XHRcdGlmIChrZXkgIT09IGluZGV4KSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRpdGVtLnBob25lID09PSBldmVudC50YXJnZXQudmFsdWUgJiZcblx0XHRcdFx0XHRpdGVtLmNvZGUgPT09IHRoaXMucGhvbmVGb3JtLmNvbnRyb2xzW1wicGhvbmVcIl0udmFsdWUuZGlhbENvZGVcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0dmFsdWUucHVzaChpdGVtLnBob25lKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLmlzVW5pcXVlUGhvbmUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmlzVW5pcXVlUGhvbmUgPSBmYWxzZTtcblx0XHR9XG5cdH1cblx0b25DbGlja011bHRpcGxlUGhvbmUoKSB7XG5cdFx0dGhpcy5vbk11bHRpcGxlLmVtaXQoKTtcblx0fVxuXG59XG4iXX0=