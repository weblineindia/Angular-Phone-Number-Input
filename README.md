# Angular - Phone Number Component

A Angular based Phone Number component used to specify an input field where the user can enter data.

## Table of contents

- [Browser Support](#browser-support)
- [Demo](#demo)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Available Props](#available-props)
- [Methods](#methods)
- [Want to Contribute?](#want-to-contribute)
- [Collection of Components](#collection-of-components)
- [Changelog](#changelog)
- [License](#license)
- [Keywords](#Keywords)

## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 83.0 ✔                                                                                   | 77.0 ✔                                                                                      | 13.1.1 ✔                                                                                 | 83.0 ✔                                                                             | 11.9 ✔                                                                                                                       |

## Demo

[![](phone-numbers.gif)](https://github.com/weblineindia/AngularJS-Phone-Number/phone-numbers.gif)

## Getting started

Install the npm package:

```bash
npm install angular-weblineindia-phone-number
#OR
yarn add angular-weblineindia-phone-number
```

## Usage

Use the `<angular-weblineindia-phone-number>` component:

Add in app.module.ts file

```
import { AppComponent } from './app.component';
import { AngularWeblineindiaPhoneNumberModule } from 'angular-weblineindia-phone-number';

@NgModule({
  imports: [
    AngularWeblineindiaPhoneNumberModule,
  ],
})
export class AppModule {}

```

Add in app.component.ts file

```typescript
export class AppComponent {
  constructor() {}
  // based on event you can manage isInvalidPhoneNumber and invalidMessage
  isInvalidPhoneNumber: boolean = false;
  invalidMessage: string = "";

  onCountrySelected(event: any): void {
    console.log("onCountrySelected: ", event);
  }

  onFocusHandler(event: any): void {
    console.log("onFocusHandler: ", event.target.value);
  }
  onBlurHandler(event: any): void {
    console.log("onBlurHandler: ", event.target.value);
  }
  onChangeHandler(event: any): void {
    console.log("onChangeHandler: ", event.target.value);
  }
  onKeyPressHandler(event: any): void {
    console.log("onKeyPressHandler: ", event.target.value);
  }
  onKeyDownHandler(event: any): void {
    console.log("onKeyDownHandler: ", event.target.value);
  }
  onKeyUpHandler(event: any): void {
    console.log("onKeyUpHandler: ", event.target.value);
  }
}
```

Add in app.component.css file

```
::ng-deep .phoneNumberInput {
  display: flex;
}

::ng-deep .countrySelectBox {
  margin-right: 5px;
}

::ng-deep .inputBox {
  margin-left: 5px;
}

::ng-deep .errorMessage {
  color: RED;
  margin: 0;
}

::ng-deep .mainDiv {
  display: flex;
}
```

Add in app.component.html file

```html
<angular-weblineindia-phone-number name="'text'" value="'initalValue'" phoneNumberInput="phoneNumberInput" countrySelectBox="countrySelectBox" inputBox="inputBox" errorMessage="errorMessage" placeholder="'Add placeholder'" [countryCode]="'+1784'" [disabled]="false" [require]="true" [isInvalidPhoneNumber]="isInvalidPhoneNumber" [invalidMessage]="invalidMessage" (focus)="onFocusHandler($event)" (blur)="onBlurHandler($event)" (keyPress)="onKeyPressHandler($event)" (keyDown)="onKeyDownHandler($event)" (keyUp)="onKeyUpHandler($event)" (countrySelected)="onCountrySelected($event)"></angular-weblineindia-phone-number>
```

## Available Props

| Prop                 | Type    | default | Description                                     |
| -------------------- | ------- | ------- | ----------------------------------------------- |
| name                 | String  |         | Name for the input                              |
| value                | String  |         | value for the input                             |
| phoneNumberInput     | String  |         | CSS class applied for phone number input.       |
| countrySelectBox     | String  |         | CSS class applied for selection input.          |
| inputBox             | String  |         | CSS class applied for input.                    |
| errorMessage         | String  |         | CSS class applied for error message.            |
| placeholder          | String  |         | The input field will get this placeholder text  |
| countryCode          | String  | +91     | Country code which user provided by default     |
| disabled             | boolean | false   | If true, disables the input field.              |
| require              | boolean |         | If true, makes the input field mandatory.       |
| isInvalidPhoneNumber | boolean | false   | Indicates if the password is invalid            |
| invalidMessage       | String  |         | Message to display when the password is invalid |

## Methods

| Name            | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| focus           | Gets triggered when the autocomplete input field receives focus. |
| blur            | Gets triggered when the autocomplete input field loses focus.    |
| KeyPress        | Gets triggered when a key gets pressed.                          |
| KeyDown         | Gets triggered when a key gets down.                             |
| KeyUp           | Gets triggered when a key gets up.                               |
| countrySelected | Gets trigged when change the country code from dropdown.         |

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

---

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/software-development-resources.html)

---

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT](LICENSE)

[mit]: https://github.com/weblineindia/AngularJS-Phone-Number/blob/master/LICENSE

## Keywords

angular-weblineindia-phone-number, phonenumber, input, angular, angular-component, phonenumber-component, phone-number-input
