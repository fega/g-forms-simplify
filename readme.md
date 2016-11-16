# Google forms Simplify

Simplify google forms markup to easily be embed it in a webpage with your own style, right now it only supports text and e-mail inputs

## install

`$ npm install --g g-forms-simplify`

## Usage

## input:
```bash
$ g-forms-simplify -f "1FAIpQLSfKcGSBRWFEkhkZRMqDH9aFCIgsGR1a0R3LkZFA6ssNPx5tpw"
```
### output:
```html
<form action="https://docs.google.com/forms/d/e/1FAIpQLSfkdFR2sq8L-V-a_x3Ms6JAd-ol6jdm7AqOrRMy3Cp_g3Wz2Q/formResponse" method="" target="hidden_iframe" onsubmit="submitted=true">
	<input type="email" value="" name="emailAddress" autocomplete="email" required="required" placeholder=""/>
	<input type="text" value="" name="entry.1666362602" autocomplete="off" required="undefined" placeholder=""/>
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
