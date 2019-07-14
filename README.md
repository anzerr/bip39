
### `Intro`
[Bitcoin BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki): Mnemonic code for generating deterministic keys

#### `Install`
``` bash
npm install --save git+https://git@github.com/anzerr/<?>.git
```

### `Example`
``` javascript
const bip = require('bip39');

let mnemonic = bip.entropy.toMnemonic('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF').join(' ');
console.log(mnemonic); // zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo wrong
console.log(bip.mnemonic.toEntropy(mnemonic)); // ffffffffffffffffffffffffffffffff
```