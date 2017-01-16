# exo-material

## Installation

To install this library, run:

```bash
$ npm install exo-material --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install exo-material
```

and then from your Angular `AppModule`:

```typescript
...
// Import your library
import { ExoCoreModule } from 'exo-material';

@NgModule({
  declarations: [
    AppComponent,
    ExoStepperComponent,
    ExoCoreModule.forRoot()
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

```


## Components

### Steppers
Module Steppers -> [Steppers](https://github.com/ExOLever/exo-material/tree/master/src/steppers)

## License

MIT © [Rafael Montaño](rafael@exo.works.es)
