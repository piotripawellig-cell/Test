var haslo ="kołacz";
haslo = haslo.toUpperCase();
var haslo1 =""
var dlugosc= haslo.length;
var litery = new Array(35);
var miss=0;
var no = new Audio("img/no.wav");
var yes = new Audio("img/yes.wav");
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

for(i=0;i<dlugosc;i++)
{
    if(haslo.charAt(i)==" ")haslo1=haslo1+" ";
    else haslo1=haslo1+"-";
}
function wyp_haslo()
{
    document.getElementById("plansza").innerHTML=haslo1;
    
}
function ok(){
    var haslo = document.getElementById("txt").value;
    document.getElementById("txt").value ="";
}
function start(){
    var trescdiv="";
    for(i=0;i<=34;i++)
    {
        var emelent ="lit"+i;
        trescdiv += '<div class="litera" id="'+emelent+'" onclick="sprawdz('+i+')">'+litery[i]+'</div>';
        if ((i+1)%7==0)trescdiv=trescdiv+'<div style="clear:both;"></div>'
    }
    
    wyp_haslo();
    document.getElementById("alfabet").innerHTML=trescdiv;
String.prototype.ustawZnak= function(miejsce,znak)
    {
    if(miejsce>this.length-1)return this.toString();
    else return this.substr(0,miejsce)+znak+this.substr(miejsce+1)
    }
}
window.onload = start;
function restart() {
    yes.play()
    document.getElementById("menu").style.display="none";
    document.getElementById("pojemnik").style.display="block";
    haslo1 = "";
    miss = 0;

    for (i = 0; i < dlugosc; i++) {
        if (haslo.charAt(i) == " ")
            haslo1 = haslo1 + " ";
        else
            haslo1 = haslo1 + "-";
    }

    document.getElementById("szubienica").innerHTML = '<img src="img/s0.jpg" alt="szubienica"/>';
    wyp_haslo();
    start();
}

function sprawdz(nr){
    var trafiona = false;
    for(i=0;i<dlugosc;i++){
        if(haslo.charAt(i)==litery[nr]){
            haslo1 = haslo1.ustawZnak(i,litery[nr]);
            trafiona = true;
        }
        
    }
    
    if(trafiona==true){
        yes.play()
        var emelent ="lit"+nr;
        document.getElementById(emelent).style.background="#003300";
        document.getElementById(emelent).style.color="#00C000";
        document.getElementById(emelent).style.border="3px solid #00C000";
        document.getElementById(emelent).style.cursor="default";
        
        
        wyp_haslo();
    }
    else{
        no.play()
        var emelent ="lit"+nr;
        document.getElementById(emelent).style.background="#330000";
        document.getElementById(emelent).style.color="#C00000";
        document.getElementById(emelent).style.border="3px solid #C00000";
        document.getElementById(emelent).style.cursor="default";
        document.getElementById(emelent).setAttribute("onclick",";");
        miss++
        var obraz ="img/s"+miss+".jpg"
        document.getElementById("szubienica").innerHTML='<img src="'+obraz+'"alt ="szubienica"/>'
        
    }
    //wygrana
    if(haslo==haslo1){
        var ekran= 'Wygrana!' + '<br/>' + 'Hasło:' + haslo + '<br/><br/>' + '<span class="reset" onclick="restart()">Jeszcze Raz</span>';
        document.getElementById("alfabet").innerHTML=ekran;
    }
    //przegrana
    if(miss==9){
        var ekran= 'Przegrana!' + '<br/>' + 'Hasło:' + haslo + '<br/><br/>' + '<span class="reset" onclick="restart()" id ="spon">Jeszcze Raz</span>';
        document.getElementById("alfabet").innerHTML=ekran;
        document.getElementById("spon").style.color="#C00000";
        document.getElementById("spon").style.borderColor="#C00000";
    }
    
}