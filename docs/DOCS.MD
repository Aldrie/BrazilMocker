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

[Email](#email)

[Uuid](#uuid)

[Id](#uuid)

[Image](#image)

# Company

```javascript
// ES6
import { Company } from 'brazil-mocker';

// CommonJS 
const { Company } = require('brazil-mocker');
```

[Company Name](#company-name)

[Color](#color)

[Logo](#logo)

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


## Email
```javascript
//generate random email
Form.contact.email.generate(customName,customDomain);

//validate a email
Form.contact.email.validate(email);
```
### generate
|      Name        | Type   | Value    | Default|
|:-----------------|:-------|---------:|-------:|
| customName       | string | a string | null   |
| customDomain     | string | a string | null   |

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

## Image
```javascript
//generate a random image
Form.image.generate(); //returns a base64 image

//generate a custom image
Form.image.generate(
	text,
	width,
	height,
	fontSize,
	fontFamily,
	backgroundColor,
	textColor,
	textAlign,
);
```
| Name            | Type   |                                     Value |          Default |
|-----------------|--------|------------------------------------------:|-----------------:|
| text            | string |                                    a text |           random |
| width           | number |                                  x pixels |              300 |
| height          | number |                                  y pixels |              300 |
| fontSize        | number |                       font size in pixels |               60 |
| fontFamily      | string |                        a font family name |            Arial |
| backgroundColor | string |                                   a color |           random |
| textColor       | string |                                   a color | a contrast color |
| textAlign       | string | 'start', 'end', 'left', 'right', 'center' |         'center' |

# 

## Company Name
```javascript
//generate a company name
Company.name.generate();

//generate a custom category company name
Company.name.generate('tech');
```

## Color
```javascript
//generate a random color
Company.color.generate(colorType);
```

### generate
|      Name    | Type   | Value         | Default|
|:-------------|:-------|--------------:|-------:|
| colorType    | string | color notation| 'hex'  |

## Logo
```javascript
//generate a random logo
Company.logo.generate(); //returns a base64 image

//generate a custom logo
Company.logo.generate(
	text,
	width,
	height,
	fontSize,
	fontFamily,
	backgroundGradient,
	textColor,
	textAlign,
);
```
| Name               | Type         |                                     Value |          Default |
|--------------------|--------------|------------------------------------------:|-----------------:|
| text               | string       |                                    a text |           random |
| width              | number       |                                  x pixels |              300 |
| height             | number       |                                  y pixels |              300 |
| fontSize           | number       |                       font size in pixels |               60 |
| fontFamily         | string       |                        a font family name |            Arial |
| backgroundGradient | string array |                            [color, color] |           random |
| textColor          | string       |                                   a color | a contrast color |
| textAlign          | string       | 'start', 'end', 'left', 'right', 'center' |         'center' |