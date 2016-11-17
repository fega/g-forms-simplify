# Google forms Simplify
[![Coverage Status](https://coveralls.io/repos/github/fega/g-forms-simplify/badge.svg?branch=master)](https://coveralls.io/github/fega/g-forms-simplify?branch=master)
[![Build Status](https://travis-ci.org/fega/g-forms-simplify.svg?branch=master)](https://travis-ci.org/fega/g-forms-simplify)
[![npm version](https://badge.fury.io/js/g-forms-simplify.svg)](https://badge.fury.io/js/g-forms-simplify)

Simplify the google forms markup to easily embed it in a webpage with your own style.

#### Currently supports
* text input
* email input
* number input
* textarea
* personalized thanks page

## install

`$ npm install -g g-forms-simplify`

## Usage

## input:
```bash
$ g-forms-simplify -f "1FAIpQLSfKcGSBRWFEkhkZRMqDH9aFCIgsGR1a0R3LkZFA6ssNPx5tpw"
```
### output:
```html
<form action="https://docs.google.com/forms/d/e/1FAIpQLSfKcGSBRWFEkhkZRMqDH9aFCIgsGR1a0R3LkZFA6ssNPx5tpw/formResponse" method="POST">
    <p>
        <label for="g-form-input-">Tu direcci�n de correo electr�nico</label>
        <input id="g-form-input-" type="email" name="emailAddress" autocomplete="email" required />
    </p>
    <p>
        <label for="g-form-input-1">Texto</label>
        <input id="g-form-input-1" type="text" name="entry.1542505023" autocomplete="off" />
    </p>
    <p>
        <label for="g-form-input-2">Parrafo</label>
        <textarea id="g-form-input-2" name="entry.2048127791"></textarea>
    </p>
    <p>

        <input id="g-form-input-3" type="hidden" value="2016" name="entry.1654277772_year" />
    </p>
    <p>

        <input id="g-form-input-4" type="hidden" value="1" name="fvv" />
    </p>
    <p>

        <input id="g-form-input-5" type="hidden" value="[,," -8042869601822691385 "]
" name="draftResponse" />
    </p>
    <p>

        <input id="g-form-input-6" type="hidden" value="0" name="pageHistory" />
    </p>
    <p>

        <input id="g-form-input-7" type="hidden" value="-8042869601822691385" name="fbzx" />
    </p>
    <input type="submit" name="submit" value="Send">
</form>

```
## CLI options

### '-f, --form (URL || ID)'
the url to be simplified.

### '-d --destiny (URL)'
The page that is displayed after submit the form

## License

MIT © [Fabian Gutierrez](http://fabiangutierrez.co)
