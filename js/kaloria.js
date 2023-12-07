function kaloria() {
    if (document.getElementById("kal_ferfi").checked){
        if ((document.getElementById("kal_kor").value > 10) & (document.getElementById("kal_kor").value < 19)){
            let szorzo = 17.5;
            let kal = szorzo * document.getElementById("kal_suly").value + 651;

            document.getElementById("szam").innerHTML = `A napi energiaszükségleted: ${kal}`
        }

        else if ((document.getElementById("kal_kor").value > 18) & (document.getElementById("kal_kor").value < 31)){
            let szorzo = 15.3;
            let kal = szorzo * document.getElementById("kal_suly").value + 679;

            document.getElementById("szam").innerHTML = `A napi energiaszükségleted: ${kal}`
        }

        else {
            let szorzo = 11.6;
            let kal = szorzo * document.getElementById("kal_suly").value + 879;

            document.getElementById("szam").innerHTML = `A napi energiaszükségleted: ${kal}`
        }

    }
    else if (document.getElementById("kal_no").checked){
        if ((document.getElementById("kal_kor").value > 10) & (document.getElementById("kal_kor").value < 19)){
            let szorzo = 12.2;
            let kal = szorzo * document.getElementById("kal_suly").value + 746;

            document.getElementById("szam").innerHTML = `A napi energiaszükségleted: ${kal}`
        }

        else if ((document.getElementById("kal_kor").value > 18) & (document.getElementById("kal_kor").value < 31)){
            let szorzo = 14.7;
            let kal = szorzo * document.getElementById("kal_suly").value + 496;

            document.getElementById("szam").innerHTML = `A napi energiaszükségleted: ${kal}`
        }

        else {
            let szorzo = 8.7;
            let kal = szorzo * document.getElementById("kal_suly").value + 829;

            document.getElementById("szam").innerHTML = `A napi energiaszükségleted: ${kal}`
        }
    }
    else {
        document.getElementById("szam").innerHTML = "Nem adtál meg minden szükséges értéket!";
    }
    
}