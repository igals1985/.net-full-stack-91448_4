# Component v/s Directive


## Directives 
Directives add behaviour to an existing DOM element or an existing component instance. 
<br>
One example use case for a directive would be to log a click on an element.

```typescript
import {Directive} from '@angular/core';

@Directive({
    selector: "[logOnClick]",
    hostListeners: {
        'click': 'onClick()',
    },
})
class LogOnClick {
    constructor() {}
    onClick() { console.log('Element clicked!'); }
}
```
Which would be used like so:
```html
<button logOnClick>I log when clicked!</button>
```
## Components
A component, rather than adding/modifying behaviour, 
<br>
actually creates its own view (hierarchy of DOM elements) with attached behaviour.
<br>
Components is a reusable UI component that we could use anywhere in our application. 
<br>
These basically make up the UI building blocks of our applications.

## In summary
* Write a component when you want to create a reusable set of DOM elements of UI with custom behaviour. 
* Write a directive when you want to write reusable behaviour to supplement existing DOM elements.


## Differences between Component and Directive:

1. We create **Component** with the help of **@Component** meta-data annotation while we create **Directive** with the help of 
    **@Directive** meta-data annotation.

2. **@Component** is used to create new **View(Shadow DOM)** with attached behaviour while **@Directive** is used to add behavior 
    to an existing DOM element.

3. With the help of **@Component** we can break our application into smaller components, and can do component based development
   while with the help of **@Directive** we can attach different behaviours to an existing DOM element or different 
   existing DOM element.

4. **@Component** is used to create reusable components while **@Directive** is used to create reusable behaviour.



 ## Example:
   ### @Component

    
```typescript
    import {Component} from '@angular/core';
    import {EnterDirective} from "./sample.directive";
    
    @Component({
        selector: 'sample-component',
        template: `
           <strong>Hello World</strong> form <strong>{{name}} Component</strong>!
           <br/>
           <input type="text" (enter)="enterHandler($event)" >
        `,
        directives: <any>[EnterDirective]
    })
    export class SampleComponent {
        name:string = 'Sample';
    
        enterHandler(event) {
            console.log(event);
        }
    }
```
    
   ### @Directive

    
```typescript
    import {Directive, Output} from "@angular/core";
    import {EventEmitter} from "@angular/common/src/facade/async";
    
    @Directive({
        selector: '[enter]',
        host: {
            '(keypress)': 'enterHandler($event)'
        }
    })
    export class EnterDirective {
        @Output() enter = new EventEmitter<any>();
    
        constructor() {
        }
    
        enterHandler(event) {
            if (event.keyCode == 13) {
                this.enter.emit(event);
            }
        }
    }
```


