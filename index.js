var celdas = "";
var myInput;
var transito1 = 0;
var transito2 = 1;
//--------------------------------------------------------------------
function Run(){
	StartOver();
	myInput = document.getElementById("numeroDigitado").value;
	Interval = setInterval(roll,500);
};
function roll() {
	if(myInput <= transito2	){
	clearInterval(Interval);
	}else{
	celdas = celdas + " " + transito1 + " " + transito2;
	transito1 = transito1+transito2;
	transito2 = transito2+transito1;
	document.getElementById("divMostrar").innerHTML = celdas;
	};
}
function StartOver() {
	celdas = " 0 ";
	document.getElementById("divMostrar").innerHTML = "";
	transito1 = 1;
	transito2 = 1;
}
//--------------------------------------------------------------------
const HTMLdeHeader = () => {
	return `Sucesion de Fibonacci`;
};
const HTMLdeMain = () => {
	return `
	<h3>Hasta que numero?</h3>
	<input type="number" id="numeroDigitado" autofocus>
	<button onClick="Run();">Mostrar</button>
	<div id="divMostrar" class="divMostrar"></div>
`;
};
const HTMLdeFooter = () => {
	return `Written By Deaf-Web-Admin`;
};
//--------------------------------------------------------------------
const Header = () => {
	document.querySelector("Header").innerHTML = HTMLdeHeader();
};
const Main = () => {
	document.querySelector("main").innerHTML = HTMLdeMain();
};
const Footer = () => {
	document.querySelector("Footer").innerHTML = HTMLdeFooter();
};
//--------------------------------------------------------------------
Header();
Main();
Footer();