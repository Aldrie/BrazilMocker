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

[Uuid](#uuid)

[Id](#uuid)

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
### generate
|      Name    | Type    | Value            | Default |
|:-------------|:--------|-----------------:|--------:|
| customNumber | string  | 11 digits number | null    |

### validate
|      Name  | Type    | Value  | Default |
|:-----------|:--------|-------:|--------:|
| cnpj       | string  |a cnpj  | null    |

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

### generate
|      Name    | Type    | Value          | Default|
|:-------------|:--------|---------------:|-------:|
| customNumber | string  | 9 digits number| null   |

### validate
|      Name | Type    | Value | Default|
|:----------|:--------|------:|-------:|
| cpf       | string  |a cpf  | null   |

# Names
[--- Live Example ---](https://codesandbox.io/s/eloquent-kilby-ilwyh?fontsize=14&hidenavigation=1&theme=dark)

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
//generate random valid number
Form.contact.phoneNumber.generate(withPrefix, format);

//validate a number
Form.contact.phoneNumber.validate(number);
```
### generate
|      Name  | Type    | Value        | Default |
|:-----------|:--------|-------------:|--------:|
| withPrefix | boolean | true / false | false   |
| format     | boolean | true / false | false   |

### validate
|      Name  | Type    | Value        | Default |
|:-----------|:--------|-------------:|--------:|
| number     | string  |a phone number| null    |

## Uuid
```javascript
//generate a uuid
Form.uuid.generate();
```

## Id
```javascript
//generate a id
Form.id.generate();
//* my own random id system
```