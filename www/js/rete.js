function calcolorete(){
 document.getElementById('pinserimento').style.display="none";
document.getElementById('risultati').style.display="block";
var distcont=document.getElementById('digiucont').value;
var spess=document.getElementById('spesspav').value;
var kwinkler=document.getElementById('coeffreaz').value;
var rck=document.getElementById('Rck').value;
var caricou=document.getElementById('uniformi').value;
var sottofondo=document.getElementById('sotto').value;
var alert=document.getElementById('alert');
if (sottofondo=="polietilene"){
var ksott=4;}
if (sottofondo=="planare"){
var ksott=5.5;}
if (sottofondo=="disassato"){
var ksott=8;}
areaf=Math.round(((ksott*distcont*(24*spess))/4400)*100)/100;
areaferro.innerHTML= "l area del ferro d'armatura sar&agrave; pari a: <span style='font:bold 20px arial; color:#ff2200;'> "+areaf+" mm </span>";
if (areaf<=1.635){
ferromezzeria.innerHTML="che corrisponde a una rete <span style='font:bold 20px arial;color:#ff2200;'> &Phi; 6 maglia 200 X 200</span><br /><br />ATTENZIONE: siccome sar&agrave; transitata dagli operatori, necessiter&agrave; almeno un &Phi; 8 per evitare deformazioni e disordini nella rete  ";
}

 if (areaf >1.635 && areaf<=2.185){
ferromezzeria.innerHTML="che corrisponde a una rete <span style='font:bold 20px arial;color:#ff2200;'>&Phi; 6 maglia 150 X 150</span> <br /><br />ATTENZIONE: siccome sar&agrave; transitata dagli operatori, necessiter&agrave; almeno un &Phi; 8 per evitare deformazioni e disordini nella rete   ";
} 

 if (areaf>2.185 && areaf<=2.91){
ferromezzeria.innerHTML="che corrisponde a una rete <span style='font:bold 20px arial;color:#ff2200;'>&Phi; 6 maglia 100 X 100</span> <br>o in alternativa una rete <span style='font:bold 20px arial; color:#ff2200;'> &Phi; 8 maglia 200 X 200 </span><br /><br />ATTENZIONE: siccome sar&agrave; transitata dagli operatori, necessiter&agrave; almeno un &Phi; 8 per evitare deformazioni e disordini nella rete   ";
}
if (areaf>2.91 && areaf <= 4.165){
ferromezzeria.innerHTML="che corrisponde a una rete <span style='font:bold 20px arial;color:#ff2200;'>&Phi; 8 maglia 150 X 150</span>  ";
}

if (areaf>4.165){
ferromezzeria.innerHTML="che corrisponde a una rete <span style='font:bold 20px arial; color:#ff2200;'> &Phi; 8 maglia 100 X 100 </span>  ";
}
if (spess<16){
alert.innerHTML="<span style='color:#990000;'>Attenzione: con uno spessore inferiore a 16 cm ridurre il pi&ugrave; possibile le sovrapposizioni</span>";}
modelast=5700*Math.sqrt(rck);
coslam1=(kwinkler*3)*100;
coslam2=((Math.pow(spess,3))*modelast);
coslam3=coslam1/coslam2;
lambda=Math.pow(coslam3,(1/4));
coeffm=0.1682*caricou/Math.pow(lambda,2);
cosigma=100*Math.pow(spess,2)/6;
coeffsigma=(coeffm/cosigma)/100;

minf=coeffsigma*(100*(spess/6));
coefafi=0.897*(spess-2)*220;
afix=(minf/coefafi)*2;
afi=Math.round(afix*100)/100;
sigmafondo.innerHTML="Quando sussistano incertezze sulla portanza del supporto si interviene con una armatura statica che per i dati immessi risulta essere di <span style='font:bold 20px arial;color:#ff2200'>"+afi+" mm</span>";
if (afi<=1.635){
ferrofondo.innerHTML="che corrisponde a una rete <span style='font:bold 20px arial;color:#ff2200;'> &Phi; 6 maglia 200 X 200</span>  ";
}

 if (afi >1.635 && afi<=2.185){
ferrofondo.innerHTML="che corrisponde a una rete <span style='font:bold 20px arial;color:#ff2200;'>&Phi; 6 maglia 150 X 150</span>  ";
} 

 if (afi>2.185 && afi<=2.91){
ferrofondo.innerHTML="che corrisponde a una rete <span style='font:bold 20px arial;color:#ff2200;'>&Phi; 6 maglia 100 X 100</span> <br>o in alternativa una rete <span style='font:bold 20px arial; color:#ff2200;'>&#157; 8 maglia 200 X 200</span> ";
}
if (afi>2.91 && afi <= 4.165){
ferrofondo.innerHTML="che corrisponde a una rete <span style='font:bold 20px arial;color:#ff2200;'>&Phi; 8 maglia 150 X 150</span>  ";
}

if (afi>4.165){
ferrofondo.innerHTML="che corrisponde a una rete <span style='font:bold 20px arial; color:#ff2200;'> &Phi; 8 maglia 100 X 100 </span>  ";
}







 }

function init(){
document.getElementById('intro').style.display="block";
document.getElementById('risultati').style.display="none";
document.getElementById('pinserimento').style.display="none";
}
function fineintro(){
document.getElementById('intro').style.display="none";
document.getElementById('pinserimento').style.display="block";
}
function esci(){
 navigator.app.exitApp();
}
function ripeti(){
window.location="index.html";
}
function gocalcolo(){
 window.location = "retemezzeria.html";

} 
