var salaireBrut = document.querySelector("#sb");
var nbreEnfant = document.querySelector("#ne");
var salaireNet = document.querySelector("#sn");

var ro = document.querySelector("#ro");

function salaireNetFunction(){
    var sbValue = salaireBrut.value;
    var sn = sbValue;
    var temp = 0;
    var enfants = nbreEnfant.value;
    var ae = ((sbValue*2)/100);
    var rp = ((sbValue*6)/100);
    var vps = ((sbValue*2)/100);

    if (sbValue > 50000) {
        if (sbValue <= 130000) {
            temp = ((sbValue - 50000) * 10 ) / 100;
        }
        else if (sbValue <= 280000) {
            temp = 8000 + (((sbValue - 130000) * 15 ) / 100);
        }
        else if (sbValue <= 530000) {
            temp = 30500 + (((sbValue - 280000) * 20 ) / 100);
        }
        else{
            temp = 80500 + (((sbValue - 530000) * 20 ) / 100);
        }
    }

    if(enfants > 1){
        switch (enfants) {
            case 2:
                temp = temp - ((temp*5)/100);
                break;
            case 3:
                temp = temp - ((temp*10)/100);
                break;
            case 4:
                temp = temp - ((temp*15)/100);
                break;
            case 5:
                temp = temp - ((temp*20)/100);
                break;
            default:
                temp = temp - ((temp*23)/100);
                break;
        }
    }
    
    sn = sbValue - ae - vps - rp - temp;

    //mise à jour des données d'impôts.
    document.querySelector(".ipts").innerHTML = temp;
    document.querySelector(".ae").innerHTML = ae;
    document.querySelector(".vps").innerHTML = vps;
    document.querySelector(".rp").innerHTML = rp;

    salaireNet.value = sn;
}

ro.addEventListener("click", ()=>{
    document.querySelector(".ipts").innerHTML = 0;
    document.querySelector(".ae").innerHTML = 0;
    document.querySelector(".vps").innerHTML = 0;
    document.querySelector(".rp").innerHTML = 0;
})