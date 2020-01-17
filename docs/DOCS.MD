# Form

```javascript
// ES6
import { Form } from 'brazil-mocker';

// CommonJS 
const { Form } = require('brazil-mocker');
```

### [Cnpj](#cnpj)
### [Cpf](#cpf)

# 

## Cnpj
```javascript
//random cnpj
Form.cnpj.generate();
// you can pass a custom number
// Form.cnpj.generate(111222333444);

//validate cnpj
Form.cnpj.validate('11122233344455'); // false
Form.cnpj.validate('12332112332121'); // true
```

## Cpf
```javascript
//random cnpj
Form.cpf.generate();
// you can pass a custom number
// Form.cpf.generate(111222333);

//validate cnpj
Form.cpf.validate('11122233344'); // false
Form.cpf.validate('12332112340'); // true
```