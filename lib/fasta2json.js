/*************************************************************/
/* 
/* fasta2json.js v0.1.1
/* Converts fasta file/string to a json object.
/* 
/* Read reference at http://github.com/jmjuanes/fasta2json
/* 
/*************************************************************/

//Import dependencies
var fs = require('fs');

//fasta2json class
var fasta2json = new function()
{
	//Version
	this.version = '0.1.1';
	
	//Line break string
	this.line_break = '\n';
	
	//Nucleotides per line in the fasta output
	this.nucleotides_x_line = 50;
	
	//Read fasta file
	this.ReadFasta = function(file)
	{
		//Read from file
		var data = fs.readFileSync(file, 'utf8');
		
		//Parse the file
		return fasta2json.ParseFasta(data);
	};
	
	//Parse fasta string
	this.ParseFasta = function(str)
	{
		//Generates the new json
		var fasta = [];
		
		//Split
		var seqs = str.split('>');
		
		//Loop starting on 1, because the first element of seqs is null
		for(var i = 1; i < seqs.length; i++)
		{
			//Replace the \r
			seqs[i] = seqs[i].replace(/\r/g, '');
			
			//New element
			var seq = {};
			
			//Split the file content
			var fas = seqs[i].split(this.line_break);
			
			//Save the head
			seq.head = fas[0];
			
			//Sequences
			seq.seq = '';
			
			//Push the sequences
			for(var j = 1; j < fas.length; j++)
			{
				//Add
				seq.seq = seq.seq + fas[j];
			}
			
			//Push
			fasta.push(seq);
		}
		
		//Return the fasta
		return fasta;
	};
	
	//Generates a string from an fasta json
	this.Export = function(json)
	{
		//Generates an string with the fasta from the JSON
		var fasta = '';
		
		//Loop
		for(var i = 0; i < json.length; i++)
		{
			//Add the header
			fasta = fasta + '>' + json[i].head + this.line_break;
			
			//Add the sequence in blocks
			for(var j = 0; j < json[i].seq.length; j = j + this.nucleotides_x_line)
			{
				//Get the min value
				var minv = Math.min(j + this.nucleotides_x_line, json[i].seq.line_ength);
				
				//Add
				fasta = fasta + json[i].seq.substring(j, minv) + this.line_break;
			}
		}
		
		//Return the fasta string
		return fasta;
	};
	
	//Generates a fasta file from object
	this.ExportToFile = function(json, file)
	{
		//Get the string
		var fasta = this.Export(json);
		
		//Save the file
		fs.writeFile(file, fasta, function(err){ if(err) return console.log(err); });
	};
};


//Check for exports
if (typeof module === "object" && module.exports)
{
	//Export module
	module.exports = fasta2json;
}
