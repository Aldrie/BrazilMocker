# Form

```javascript
// ES6
import { Form } from 'brazil-mocker';

// CommonJS 
const { Form } = require('brazil-mocker');
```

[Cnpj](#cnpj)

[Cpf](#cpf)

[FirstName](#firstname)

[LastName](#lastname)

[FullName](#fullname)

[PhoneNumber](#phonenumber)

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
//random cpf
Form.cpf.generate();
// you can pass a custom number
// Form.cpf.generate(111222333);

//validate cpf
Form.cpf.validate('11122233344'); // false
Form.cpf.validate('12332112340'); // true
```

# Names
## [Live Example](https://codesandbox.io/s/eloquent-kilby-ilwyh?fontsize=14&hidenavigation=1&theme=dark)

## FirstName
```javascript
Form.names.firstName.generate(gender, captalize);
```

|      Name | Type    | Value             | Default |
|:----------|:--------|------------------:|--------:|
| gender    | string  | 'male' / 'female' | random  |
| captalize | boolean | true / false      | true    |

## LastName
```javascript
Form.names.lastName.generate(captalize);
```

|      Name | Type    | Value             | Default |
|:----------|:--------|------------------:|--------:|
| captalize | boolean | true / false      | true    |

## FullName
```javascript
Form.names.fullName.generate(gender, captalize, abbreviation);
```

|      Name | Type    | Value                | Default |
|:----------|:--------|---------------------:|--------:|
| gender       | string  | 'male' / 'female' | random  |
| captalize    | boolean | true / false      | true    |
| abbreviation | boolean | true / false      | true    |

## PhoneNumber
```javascript
Form.contact.phoneNumber.generate(withPrefix, format);
```

|      Name  | Type    | Value        | Default |
|:-----------|:--------|-------------:|--------:|
| withPrefix | boolean | true / false | false   |
| format     | boolean | true / false | false   |