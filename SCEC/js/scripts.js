function myFunction() {
	var x = document.getElementById("in").value;
	var b = "";

	var x33 = document.getElementById("a33").checked;
	var x39 = document.getElementById("a39").checked;
	var x34 = document.getElementById("a34").checked;
	var x35 = document.getElementById("a35").checked;
	var x36 = document.getElementById("a36").checked;
	var x37 = document.getElementById("a37").checked;
	var x38 = document.getElementById("a38").checked;
	var x40 = document.getElementById("a40").checked;
	var x41 = document.getElementById("a41").checked;
	var x45 = document.getElementById("a45").checked;
	var x47 = document.getElementById("a47").checked;
	var x58 = document.getElementById("a58").checked;
	var x59 = document.getElementById("a59").checked;
	var x60 = document.getElementById("a60").checked;
	var x61 = document.getElementById("a61").checked;
	var x62 = document.getElementById("a62").checked;
	var x63 = document.getElementById("a63").checked;
	var x64 = document.getElementById("a64").checked;
	var x94 = document.getElementById("a94").checked;
	var x95 = document.getElementById("a95").checked;
	var x124 = document.getElementById("a124").checked;
	var x126 = document.getElementById("a126").checked;



	for (var  i = 0 ; i < x.length ; i = i + 1) 
		{
			if( (x.charAt(i) == '!')&& x33) 
				b = b + "&#38;#33;";
			else if( (x.charAt(i) == '\'')&& x39)
				b = b + "&#38;#39;";
			else if( (x.charAt(i) == '"')&& x34)
				b = b + "&#38;#34;";
			else if( (x.charAt(i) == '#')&& x35)
				b = b + "&#38;#35;";
			else if( (x.charAt(i) == '$')&& x36)
				b = b + "&#38;#36;";
			else if( (x.charAt(i) == '%')&& x37)
				b = b + "&#38;#37;";
			else if( (x.charAt(i) == '&')&& x38)
				b = b + "&#38;#38;";
			else if( (x.charAt(i) == ')')&& x41)
				b = b + "&#38;#41;";
			else if( (x.charAt(i) == '(')&& x40)
				b = b + "&#38;#40;";
			else if( (x.charAt(i) == '-')&& x45)
				b = b + "&#38;#45;";
			else if( (x.charAt(i) == '/')&& x47)
				b = b + "&#38;#47;";
			else if( (x.charAt(i) == ':')&& x58)
				b = b + "&#38;#58;";
			else if( (x.charAt(i) == ';')&& x59)
				b = b + "&#38;#59;";
			else if( (x.charAt(i) == '<')&& x60)
				b = b + "&#38;#60;";
			else if( (x.charAt(i) == '=')&& x61)
				b = b + "&#38;#61;";
			else if( (x.charAt(i) == '>')&& x62)
				b = b + "&#38;#62;";
			else if( (x.charAt(i) == '?')&& x63)
				b = b + "&#38;#63;";
			else if( (x.charAt(i) == '@')&& x64)
				b = b + "&#38;#64;";
			else if( (x.charAt(i) == '^')&& x94)
				b = b + "&#38;#94;";
			else if( (x.charAt(i) == '_')&& x95)
				b = b + "&#38;#95;";
			else if( (x.charAt(i) == '|')&& x124)
				b = b + "&#38;#124;";
			else if( (x.charAt(i) == '~')&& x126)
				b = b + "&#38;#126;";
			else
				b = b + x.charAt(i); 
		}
	document.getElementById("out").innerHTML = b;
}

	function resets(){
	document.getElementById("out").innerHTML = "" ;
	document.getElementById("in").innerHTML = "" ;
}

	function selection(){
	document.getElementById("a33").checked = true;
	document.getElementById("a34").checked = true;
	document.getElementById("a35").checked = true;
	document.getElementById("a36").checked = true;
	document.getElementById("a37").checked = true;
	document.getElementById("a38").checked = true;
	document.getElementById("a39").checked = true;
	document.getElementById("a40").checked = true;
	document.getElementById("a41").checked = true;
	document.getElementById("a45").checked = true;
	document.getElementById("a47").checked = true;
	document.getElementById("a58").checked = true;
	document.getElementById("a59").checked = true;
	document.getElementById("a60").checked = true;
	document.getElementById("a61").checked = true;
	document.getElementById("a62").checked = true;
	document.getElementById("a63").checked = true;
	document.getElementById("a64").checked = true;
	document.getElementById("a94").checked = true;
	document.getElementById("a95").checked = true;
	document.getElementById("a124").checked = true;
	document.getElementById("a126").checked = true;
}	

	function deselection(){
	document.getElementById("a33").checked = false;
	document.getElementById("a34").checked = false;
	document.getElementById("a35").checked = false;
	document.getElementById("a36").checked = false;
	document.getElementById("a37").checked = false;
	document.getElementById("a38").checked = false;
	document.getElementById("a39").checked = false;
	document.getElementById("a40").checked = false;
	document.getElementById("a41").checked = false;
	document.getElementById("a45").checked = false;
	document.getElementById("a47").checked = false;
	document.getElementById("a58").checked = false;
	document.getElementById("a59").checked = false;
	document.getElementById("a60").checked = false;
	document.getElementById("a61").checked = false;
	document.getElementById("a62").checked = false;
	document.getElementById("a63").checked = false;
	document.getElementById("a64").checked = false;
	document.getElementById("a94").checked = false;
	document.getElementById("a95").checked = false;
	document.getElementById("a124").checked = false;
	document.getElementById("a126").checked = false;
	}







