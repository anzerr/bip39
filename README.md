
### `Intro`
[Bitcoin BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki): Mnemonic code for generating deterministic keys

#### `Install`
``` bash
npm install --save git+https://github.com/anzerr/bip39.git
npm install --save @anzerr/bip39
```

### `Example`
``` javascript
const bip = require('bip39');

let mnemonic = bip.entropy.toMnemonic('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF').join(' ');
console.log(mnemonic); // zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo wrong
console.log(bip.mnemonic.toEntropy(mnemonic)); // ffffffffffffffffffffffffffffffff
```