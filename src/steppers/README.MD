# exo_material

## Steppers Example

```typescript
...
// Import your library
import { ExoStepperComponent } from 'exo_material';

@NgModule({
  declarations: [
    AppComponent,
    ExoStepperComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  private urls: Array<string> = [];
  private componentName = 'Steppers';
  constructor() {
      // Each step is a Component made in your project and de name "step1" is a route to this component 
    this.urls.push('step1');
    this.urls.push('step2');
    this.urls.push('step3');
   }
}
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in your component html -->
<h1>
  {{title}}
</h1>
<exo-stepper elements={{urls.length}} size="100%" color="yellow" urls={{urls}}></exo-stepper>
```