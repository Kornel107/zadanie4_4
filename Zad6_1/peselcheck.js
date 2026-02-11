function peselcheck() {
Wzor=/^[0-9.]/;
var napis=new String(document.Form.Pesel.value);
var wagi=new String("1379137913");
znak=0;
for(suma=0; znak<10; znak++)
  suma+=napis.charAt(znak)*wagi.charAt(znak);
var control= suma%10;
if (control!= 0)
  control=10-control;
OK=(Wzor.test(document.Form.Pesel.value)==true && document.Form.Pesel.value.length==11 && napis.charAt(10)==control);
alert(OK ? "Pesel poprawny." : "B³êdny pesel.");
}