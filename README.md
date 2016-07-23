# PC Drum - Snare Drum

Module for `PC Drum`.

## Install

```bash
npm install pcdrum-snare
```

## Usage

```js
var snare = require('pcdrum-snare'),
    context = new AudioContext(),
    sn = snare(context,
              {freq: 550,
               attack: 0.001,
               decay: 0.05,
               sustain: 0,
               release: 0.1
              })
;

sn.trigger();
```

## License

See [LICENSE](LICENSE)
