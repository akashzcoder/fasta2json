Release notes v0.1.0

# fasta2json

Converts fasta file/string to a json object.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]


## Installation

You can install **fasta2json** using NPM or Bower:

- [npm](http://npmjs.org/): `npm install fasta2json`
- [Bower](http://bower.io): `bower install fasta2json`


## Reference

### fasta2json.ReadFasta(path)

Read a FASTA file and returns and JSON object.

```
var json = fasta2json.ReadFasta('file.fasta');
```


### fasta2json.ParseFasta(string)

Returns a JSON object from a string containing a fasta file.

```
//Fasta in string format
var fasta_str = '>seq1\nACCTAAGCTTAGCCAAAGTCCAGAACCACAGT';

//Get the JSON
var json = fasta2json.ParseFasta(fasta_str);

/* Output:
json = [{ "head": "seq1", "seq": "ACCTAAGCTTAGCCAAAGTCCAGAACCACAGT"} ] 
*/

```

### fasta2json.Export(json)

Returns a string with the fasta format from an JSON object.

```
//JSON object
var json = [
{ "head": "seq1", "seq": "ACCTAAGCTTAGCCAAAGTCCAGAACCACAGT"}
{ "head": "seq2", "seq": "AACTTTGGTTAAACACATGGATCCAGTTTGAC"}
];

//Get a string
var string = fasta2json.Export(json);

/* Output:
string = '>seq1\nACCTAAGCTTAGCCAAAGTCCAGAACCACAGT\n>seq2\nAACTTTGGTTAAACACATGGATCCAGTTTGAC\n'
*/
```

### fasta2json.ExportToFile(json, file)

Generates a fasta file from the json object.

```
fasta2json.ExportToFile(json, 'new.fasta');
```


## License

**fasta2json** is under the [MIT](LICENSE) license.




[npm-image]: https://img.shields.io/npm/v/fasta2json.svg
[npm-url]: https://npmjs.org/package/fasta2json
[downloads-image]: https://img.shields.io/npm/dm/fasta2json.svg
[downloads-url]: https://npmjs.org/package/fasta2json