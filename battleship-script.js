//TODO all by JQuery, nateraj je da radi
function openSetup() {


    //let p1_name = document.getElementById("p1_username");
   

   // if(p1_name.value!="") {
    ///alert("uspelo");
   // }

   let p1_name=document.entry.p1.value; 
   let p2_name=document.entry.p2.value;


   // trazi ovaj deo koda da bi radio ovo dole, zasto, ne znam
 


   if (p1_name=="" && p2_name=="") {
       //alert("Both players didn't enter their usernames properly");
       document.getElementById('error1').innerHTML='<font size=\'2\' color = \'red\'>Player 1 didn\'t enter an username <font>';
       document.getElementById('error2').innerHTML='<font size=\'2\' color = \'red\'>Player 2 didn\'t enter an username <font>';
   }
   else{
    if(p1_name=="") {
       
       //alert("Player 1 didn't enter a username!");
       document.getElementById('error1').innerHTML='<font size=\'2\' color = \'red\'>Player 1 didn\'t enter an username <font>';
       
       //return; 
    } 
    
    if(p2_name=="") {
       
      //alert("Player 2 didn't enter a username!");
       document.getElementById('error2').innerHTML='<font size=\'2\' color = \'red\'>Player 2 didn\'t enter an username <font>'; 
       
       //return;
    } 
      //zeza, nece da se vrati sa return nego odradi do kraja

    let regex=/^\w{3,15}$/;
    let bool1=false;
    let bool2=false;
   if(regex.test(p1_name)) {
    bool1=true;
    document.getElementById('error1').innerHTML="";
    localStorage.setItem("p1",p1_name);
   }
       
    if(regex.test(p2_name)) {
        bool2=true;
        document.getElementById('error2').innerHTML="";
        localStorage.setItem("p2",p2_name);
    }
    if(bool1&&bool2) 
    var setup=window.open("battleship-setup.html");
 

   if(!bool1) {
       if(bool2) {
           //alert("Player 1 didn't format his username correctly. Username size must be betwwen 3 and 15 characters,"+
       //"and can include uppercase and lowercase letters, numbers and _ symbol."); 
       document.getElementById('error1').innerHTML="<font size=\'2\' color = \'red\'> Player 1 didn't format his username correctly. Username size must be betwwen 3 and 15 characters," +
       "and can include uppercase and lowercase letters, numbers and _ symbol. </font>";
       if(p1_name=="") {
        document.getElementById('error1').innerHTML='<font size=\'2\' color = \'red\'>Player 1 didn\'t enter an username <font>'; 
       
        
       }
       }
       else {
       // alert("Both players didn't format their usernames. Username size must be betwwen 3 and 15 characters,"+
       // "and can include uppercase and lowercase letters, numbers and _ symbol.");
       document.getElementById('error1').innerHTML="<font size=\'2\' color = \'red\'> Player 1 didn't format his username correctly. Username size must be betwwen 3 and 15 characters," +
       "and can include uppercase and lowercase letters, numbers and _ symbol. </font>";
       document.getElementById('error2').innerHTML="<font size=\'2\' color = \'red\'> Player 2 didn't format his username correctly. Username size must be betwwen 3 and 15 characters," +
       "and can include uppercase and lowercase letters, numbers and _ symbol. </font>";
       ///////////////////////////////////////////
       if(p1_name=="") {
        document.getElementById('error1').innerHTML='<font size=\'2\' color = \'red\'>Player 1 didn\'t enter an username <font>'; 
         
       }
       if(p2_name=="") {
        document.getElementById('error2').innerHTML='<font size=\'2\' color = \'red\'>Player 2 didn\'t enter an username <font>';       
        
       }
       
       }

   }


   if(!bool2) {
    if(bool1) {
       // alert("Player 2 didn't format his username correctly. Username size must be betwwen 3 and 15 characters,"+
    //"and can include uppercase and lowercase letters, numbers and _ symbol."); 
    document.getElementById('error2').innerHTML="<font size=\'2\' color = \'red\'> Player 2 didn't format his username correctly. Username size must be betwwen 3 and 15 characters," +
    "and can include uppercase and lowercase letters, numbers and _ symbol. </font>";
    if(p2_name=="") {
        document.getElementById('error2').innerHTML='<font size=\'2\' color = \'red\'>Player 2 didn\'t enter an username <font>'; 
       
        
       }
    }
    else {
    // alert("Both players didn't format their usernames. Username size must be betwwen 3 and 15 characters,"+
    // "and can include uppercase and lowercase letters, numbers and _ symbol.");
    document.getElementById('error1').innerHTML="<font size=\'2\' color = \'red\'> Player 1 didn't format his username correctly. Username size must be betwwen 3 and 15 characters," +
    "and can include uppercase and lowercase letters, numbers and _ symbol. </font>";
    document.getElementById('error2').innerHTML="<font size=\'2\' color = \'red\'> Player 2 didn't format his username correctly. Username size must be betwwen 3 and 15 characters," +
    "and can include uppercase and lowercase letters, numbers and _ symbol. </font>";
      ///////////////////////////////////////////
      if(p1_name=="") {
        document.getElementById('error1').innerHTML='<font size=\'2\' color = \'red\'>Player 1 didn\'t enter an username <font>'; 
         
       }
       if(p2_name=="") {
        document.getElementById('error2').innerHTML='<font size=\'2\' color = \'red\'>Player 2 didn\'t enter an username <font>';       
        
       }  
    }
}
   }

}


function setPageUp() {
   
    //flag za pracenje igraca cija se tabla postavlja
    localStorage.setItem('flag', 0);

    let head=document.getElementById("head");
    let p1id=localStorage.getItem("p1");
    let p2id=localStorage.getItem("p2");
    head.innerHTML="Please, " + p1id +", arrange your ships!";

    //P1 Ships
    localStorage.setItem("p1_big", "1");
    localStorage.setItem("p1_medium", "2");
    localStorage.setItem("p1_small", "3");
    localStorage.setItem("p1_xs", "4");


    //gledam da li je zapoceta selekcija
    localStorage.setItem("running","0");
    //error bit umesto running
    //brojac polja
    localStorage.setItem("counter", "0");
    //niz odabranih polja 
    let arr = new Array(100);//najvise 100 mesta mogu cik cak da odaberem
    for (let i = 0; i<100; i++)
        arr[i] = "";
    localStorage.setItem("selected", arr); // cuvam niz kao string od 4 prazna stringa, tu cu da pamtim pozicije

    localStorage.setItem("current","0");


    //P2 Ships
    localStorage.setItem("p2_big", "1");
    localStorage.setItem("p2_medium", "2");
    localStorage.setItem("p2_small", "3");
    localStorage.setItem("p2_xs", "4");

    ///////////////////
    //stvaranje matrica

    var matrix1 = [];
for(let i=0; i<10; i++) {
    matrix1[i] = []; //new array(10)
    for(let j=0; j<10; j++) {
        matrix1[i][j] = "empty";
    }
}

var matrix2 = [];
for(let i=0; i<10; i++) {
    matrix2[i] = []; //new array(10)
    for(let j=0; j<10; j++) {
        matrix2[i][j] = "empty";
    }
}
////////////////popunjavanje i cuvanje matrice za p1, 
/*
for(let i=0; i<10; i++) {
    for(let j=0; j<10; j++) {
        matrix1[i][j] = "empty";
    }
}
*/

//P1 status
localStorage.setItem("p1A",matrix1[0]);
localStorage.setItem("p1B",matrix1[1]);
localStorage.setItem("p1C",matrix1[2]);
localStorage.setItem("p1D",matrix1[3]);
localStorage.setItem("p1E",matrix1[4]);
localStorage.setItem("p1F",matrix1[5]);
localStorage.setItem("p1G",matrix1[6]);
localStorage.setItem("p1H",matrix1[7]);
localStorage.setItem("p1I",matrix1[8]);
localStorage.setItem("p1J",matrix1[9]);



for(let i=0; i<10; i++) {
    for(let j=0; j<10; j++) {
        matrix2[i][j] = "empty";
    }
}

//P2 status
localStorage.setItem("p2A",matrix2[0]);
localStorage.setItem("p2B",matrix2[1]);
localStorage.setItem("p2C",matrix2[2]);
localStorage.setItem("p2D",matrix2[3]);
localStorage.setItem("p2E",matrix2[4]);
localStorage.setItem("p2F",matrix2[5]);
localStorage.setItem("p2G",matrix2[6]);
localStorage.setItem("p2H",matrix2[7]);
localStorage.setItem("p2I",matrix2[8]);
localStorage.setItem("p2J",matrix2[9]);



}


function resetCounters() {
    
    //proveravam running da ne bih zvao funkciju svaki put kad prelazim misem, stedim CPU vreme
    let running = localStorage.getItem('running');

    running = parseInt(running);
    if(running == 0) return;
     
    let counter = localStorage.getItem('counter');
    let current = localStorage.getItem('current');
    let selected = localStorage.getItem('selected');
  
    counter = parseInt(counter);
    current = parseInt(current);
    selected = selected.split(",");


    for(let i = 0; i<counter; i++) {
        selected[i]="";        
    }
    counter = current = 0;
    localStorage.setItem("counter", counter);
    localStorage.setItem("selected", selected);
    localStorage.setItem("current", current);      
    localStorage.setItem("running", 0);

  

}


function startSelection(input) {


    //dohvatam running, neophodan za mouseup, da ne bi cuvao pogresne podatke u end-u
    localStorage.setItem("running", "1");//ili int
    //alert("postavio running");


    
    //dohvatam broj preostalih pojedinacnih brodova
    let checkAvailableShips = [parseInt(localStorage.getItem("p1_big")), parseInt(localStorage.getItem("p1_medium")), parseInt(localStorage.getItem("p1_small")), 
    parseInt(localStorage.getItem("p1_xs"))];

    if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0) {
        localStorage.setItem("running", 0);
        let no_more_ships=document.getElementById("setupSpan");
        no_more_ships.innerHTML = '<font size=\'2\' color = \'red\'> Player 1, you have already placed all your ships <font>';
        return;
    }

    //bojim polje
    input.style.backgroundColor = "yellow";
   

    //dohvatam brojace i neophodne strukture podataka
    let counter = parseInt(localStorage.getItem("counter"));
    let selected = localStorage.getItem("selected");
    selected=selected.split(",");
    let current = parseInt(localStorage.getItem("current"));

    //dohvatam sam element

    let check = input.id;     // p1B 7
    let check_array = check.split("_");
    let row = localStorage.getItem(check_array[0]);//dohvatam vrstu iz baze kao string
    let check_row = row.split(",");//vrsta kao niz stringova
    let check_value = check_row[(parseInt(check_array[1])-1)%10];


    //proveravam da li je mesto vec zauzeto, da me izbaci odmah
    //bolje ovde, da ne prebacujem svima da budu empty posle kroz for petlju, i logicnije je da me odamh izbaci

    if(check_value!="empty") {
        //ova sva polja bi svakako trebalo da budu prazna ili 0
     
        for(let i=0;i<counter;i++) {
            selected[i]="";            
        }  
         counter=0;
        localStorage.setItem("counter", counter);
        localStorage.setItem("selected", selected);//toString
        current=0;
        localStorage.setItem("current", current);      
        localStorage.setItem("running", 0);//mogao sam string odmah
        input.style.backgroundColor="darkgreen";
        let was_selected=document.getElementById("setupSpan");
        was_selected.innerHTML='<font size=\'2\' color = \'red\'> This space has already been selected! Please, try again. <font>';
        return;
    }
    

    counter++;
    //alert(counter);
    selected[current]=input.id;//mozda treba toString ne mora pod if ali ne menja, uvek ce ovo biti 1
    if(current<3)
        current++;
    localStorage.setItem("counter", counter);
    localStorage.setItem("current", current);
    localStorage.setItem("selected",selected);


}

function selectSpace(input) {

       //dohvatam running, da ne bih dodavao polje u niz ako nije pritisnuto dugme u pocetku
       let running = parseInt(localStorage.getItem("running"));
       if(running==0) return;

       //TODO counter ce biti jednak 0 ako sam napustio tablu, jer ce resetCounters() da ga postavi tako
       let counter = parseInt(localStorage.getItem("counter"));
       //if(counter==0) return;

       //bojim polje
       input.style.backgroundColor = "yellow";

       //dohvatam brojace i neophodne strukture podataka
       
       let selected=localStorage.getItem("selected");
       selected=selected.split(",");
       let current = parseInt(localStorage.getItem("current"));
   
       //dohvatam sam element
   
       let check = input.id;
       let check_array = check.split("_");       
       let row = localStorage.getItem(check_array[0]);//dohvatam vrstu iz baze kao string
       let check_row = row.split(",");//vrsta kao niz stringova
       let check_value = check_row[(parseInt(check_array[1])-1)%10];
   
       //dohvatam broj preostalih pojedinacnih brodova
       let checkAvailableShips = [parseInt(localStorage.getItem("p1_big")), parseInt(localStorage.getItem("p1_medium")), parseInt(localStorage.getItem("p1_small")), 
       parseInt(localStorage.getItem("p1_xs"))];
   
       //proveravam da li je mesto vec zauzeto, da me izbaci odmah
       //bolje ovde, da ne prebacujem svima da budu empty posle kroz for petlju, i logicnije je da me odamh izbaci
   
       if(check_value!="empty") {

        for(let i=0; i<counter;i++) { //ne proveravam boju, nikad necu pustiti busy
            document.getElementById(selected[i]).style.backgroundColor="skyblue";
            selected[i]=""; 
        }
           counter=0;
           localStorage.setItem("counter", counter);
           localStorage.setItem("selected", selected);//toString
           current=0;
           localStorage.setItem("current", current);
           
           localStorage.setItem("running", 0);//mogao sam string odmah
           //vracam trenutno na zelenu
           input.style.backgroundColor = "darkgreen";
          
           let was_selected=document.getElementById("setupSpan");
           was_selected.innerHTML='<font size=\'2\' color = \'red\'> This space has already been selected! Please, try again. <font>';
           return;
       }
   
       //proveravam da li sam hoverovao preko previse polja
       //moze i u finalnoj metodi, samo proveravam counter

   
       //proveravam da ne predjem preko istog polja dva puta
       //OBAVEZNO OVDE

       //zapravo ne pravi razliku, ne zove dva puta za isto iz nekog razloga, ali obezbedjenje bi radilo
   
       for(let i=0;i<selected.length;i++) {
           if (selected[i]==input.id) {
               
               for(let i=0; i<counter;i++) //ne proveravam koju boju stavljam, jer nikad necu pustiti busy
               {
                document.getElementById(selected[i]).style.backgroundColor="skyblue";
                selected[i]="";  
               }
         
               counter=0;
               localStorage.setItem("counter", counter);//toString
               localStorage.setItem("selected", selected);//toString
               current=0;
               localStorage.setItem("current", current);//toString
               localStorage.setItem("running", 0);
               let already_hovered=document.getElementById("setupSpan");
               already_hovered.innerHTML='<font size=\'2\' color = \'red\'> You have already hovered over this space! <font>';
               return;
   
           }
       }
      
       counter++;    
       selected[current]=input.id;
       current++;
       localStorage.setItem("counter", counter);
       localStorage.setItem("current", current);
       localStorage.setItem("selected",selected);

}


function find_in_array(arr, str, cnt) {
    for (let i = 0; i< cnt; i++) {
        if(arr[i]==str) return true;
    }

    return false;

}

//TODO popravi oblik za lvl 4
function endSelection(input) {
   
    //ne bi trebalo da se desi, ne moze up bez prethodnog downa, ali aj za svaki slucaj
    let running=parseInt(localStorage.getItem("running"));
    if(running==0) return;


     //dohvatam brojace i neophodne strukture podataka
     let counter = parseInt(localStorage.getItem("counter"));
     let selected=localStorage.getItem("selected");
     selected=selected.split(",");
     let current = parseInt(localStorage.getItem("current"));
 
     //dohvatam sam element
 
     let check = input.id;
     let check_array = check.split("_");
     let row = localStorage.getItem(check_array[0]);//dohvatam vrstu iz baze kao string
     let check_row = row.split(",");//vrsta kao niz stringova
     let check_value = check_row[(parseInt(check_array[1])-1)%10];
 
     //dohvatam broj preostalih pojedinacnih brodova
     let checkAvailableShips = [parseInt(localStorage.getItem("p1_big")), parseInt(localStorage.getItem("p1_medium")), parseInt(localStorage.getItem("p1_small")), 
     parseInt(localStorage.getItem("p1_xs"))];


/*   NE MORA OPET, VEC CE DA PROVERI NA MOUSEOVER ZA ISTO POLJE
     if(check_value!="empty") {
         
        for(let i=0; i<=current;i++) //ne proveravam koju boju stavljam, jer nikad necu pustiti busy
            getElementById(selected[i]).style.backgroundColor="skyblue";
        counter=0;
        localStorage.setItem("counter", counter);
        for(let i=0;i<4;i++) {
            selected[i]="";            
        }
        localStorage.setItem("selected", selected);//toString
        current=0;
        localStorage.setItem("current", current);
        input.style.backgroundColor="darkgreen";
        localStorage.setItem("running", 0);//mogao sam string odmah

        let was_selected=document.getElementById("setupSpan");
        was_selected.innerHTML='<font size=\'2\' color = \'red\'> This space has already been selected! Please, try again. <font>';
        return;
    }
*/

//alert(counter);
      
    if(counter>4) {//paranoja, uvek zajedno rastu
        
        for(let i=0; i<counter;i++) {
            document.getElementById(selected[i]).style.backgroundColor="skyblue";
            selected[i]=""; 
        }
        counter=0;
        localStorage.setItem("counter", counter);//toString
        localStorage.setItem("selected", selected);//toString
        current=0;
        localStorage.setItem("current", current);//toString
        localStorage.setItem("running", 0);
        let took_too_many=document.getElementById("setupSpan");
        took_too_many.innerHTML='<font size=\'2\' color = \'red\'> You have chosen more than four spaces. No aircrat carrier is that big. <font>';
        return;
    }


    //ovde je bilo za ponavljanje, ako krenem unazad
   


    if(counter==1 && checkAvailableShips[3]==0) {
        
        //ne proveravam koju boju stavljam, jer nikad necu pustiti busy  
        input.style.backgroundColor="skyblue";
        counter=0;
        localStorage.setItem("counter", counter);//toString
        for(let i=0;i<4;i++) {
            selected[i]="";            
        }
        localStorage.setItem("selected", selected);//toString
        current=0;
        localStorage.setItem("current", current);//toString
        localStorage.setItem("running", 0);
        let no_more_dinghies=document.getElementById("setupSpan");
        no_more_dinghies.innerHTML='<font size=\'2\' color = \'red\'> You have no more dinghies to place. <font>';
        return;

    }


    
    if(counter==2 && checkAvailableShips[2]==0) {
        
        for(let i=0; i<counter;i++) {
            document.getElementById(selected[i]).style.backgroundColor="skyblue";
            selected[i]=""; 
        }
        counter=0;
        localStorage.setItem("counter", counter);//toString
        localStorage.setItem("selected", selected);//toString
        current=0;
        localStorage.setItem("current", current);//toString
        localStorage.setItem("running", 0);
        let no_more_speedboats=document.getElementById("setupSpan");
        no_more_speedboats.innerHTML='<font size=\'2\' color = \'red\'> You have no more no more speedboats to place. <font>';
        return;

    }



    
    if(counter==3 && checkAvailableShips[1]==0) {
        
        for(let i=0; i<counter;i++) {
            document.getElementById(selected[i]).style.backgroundColor="skyblue";
            selected[i]=""; 
        }         
        counter=0;
        localStorage.setItem("counter", counter);//toString
        localStorage.setItem("selected", selected);//toString
        current=0;
        localStorage.setItem("current", current);//toString
        localStorage.setItem("running", 0);
        let no_more_warships=document.getElementById("setupSpan");
        no_more_warships.innerHTML='<font size=\'2\' color = \'red\'> You have no more warships to place. <font>';
       
        return;

    }




    
    if(counter==4 && checkAvailableShips[0]==0) {
        
        for(let i=0; i<counter;i++) {
            document.getElementById(selected[i]).style.backgroundColor="skyblue";
            selected[i]=""; 
        }
        counter=0;
        localStorage.setItem("counter", counter);//toString
        localStorage.setItem("selected", selected);//toString
        current=0;
        localStorage.setItem("current", current);//toString
        localStorage.setItem("running", 0);
        let no_more_carriers=document.getElementById("setupSpan");
        no_more_carriers.innerHTML='<font size=\'2\' color = \'red\'> You have no more aircraft carriers to place. <font>';
        return;
    }

    let nizROW=["","","",""];
    let nizCOL=["","","",""];
    let niz=["","","",""];


    //moze i ovo
    //niz = selected


    for(let i=0;i<selected.length;i++) 
       niz[i]=selected[i];                
    

    //svaki element selecteda koji je upisan u N se deli na 2 dela, dobijam matricu opet
    for(let i=0;i<4;i++) { //selected.length
        if(i==4) break;
        niz[i]= niz[i].split("_"); //niz ima matricu tipa p1A,4
        nizCOL[i]=niz[i][0]; ///p1A format
        
        nizROW[i]=niz[i][1]; // 8 format, broj je
      
     }

      //////PROVERA SUSEDA

     //KOliko je popunjeno mesta, imam counter, ali moram da pratim
                    // i=i+1      i+1=i+2    i+2=i+3
    //   let flagsCOL = [false,    false ,       false];  // za p1A
    //   let flagsROW = [false,    false ,       false]; // za 7

    //   let choice = [true, true];


  

    //   for ( let i = 0;i<counter-1; i++) { //uvek ce biti 4
    //     if(nizCOL[i] == nizCOL[i+1]) flagsCOL[i] == true;
    //     if(nizROW[i] == nizROW[i+1]) flagsROW[i] == true;
    //   }


    //   for ( let i = 0;i<counter-1; i++) {
    //       if(flagsCOL[i] == false) {
    //           choice[0] = false;
    //           break;
    //       }

    //       if(flagsROW[i] == false) {
    //         choice[1] = false;
    //         break;
    //     }
    //   }
      //IF DONE CORRECTLY, ONE OF CHOICE FLAGS SHOULD REMAIN SET TO TRUE< WHILE OTHER MUST BE FALSE



     
      let cnt = 0;
      let toCheck = new Array ();

     

    //NEPOTREBNO. IF BEGIN  if(choice[0]) { ///isto im je p1A npr
  

        while(cnt<counter) {
           
            
        let c = nizCOL[cnt];//svjedno koji uzimam, ali 0 je najbolje jer uvvek postoji
        let r = nizROW[cnt];
        
        r = (parseInt(r)-1)%10;

        
            if(c.charAt(2)=='A' && r == 0) {
                let add = [];        
                if(find_in_array(selected,'p1A_2',counter)!=true)                   
                        add.push('p1A_2');                                          
                if(find_in_array(selected,'p1B_1',counter)!=true) //nzm jel sme !found
                    add.push('p1B_1');
                if(find_in_array(selected,'p1B_2',counter)!=true) //nzm jel sme !found
                    add.push('p1B_2');

                for (let i = 0; i < add.length; i++) 
                    toCheck.push(add[i]);   
            }

            if (c.charAt(2)=='A' && r ==9)  {
                let add = [];
                if(find_in_array(selected,'p1A_9',counter)!=true) //nzm jel sme !found
                    add.push('p1A_9');
                if(find_in_array(selected,'p1B_9',counter)!=true) //nzm jel sme !found
                    add.push('p1B_9');
                if(find_in_array(selected,'p1B_10',counter)!=true) //nzm jel sme !found
                    add.push('p1B_10');
                for (let i = 0; i < add.length; i++)
                    toCheck.push(add[i]);
                   
            }


            
            if (c.charAt(2)=='A' && r !=9 && r!=0)  {


                let add = [];
                //mozda treba toString posle zagrade
                if(find_in_array(selected, c+"_"+(r+2),counter)!=true) //nzm jel sme !found
                    add.push(c+"_"+(r+2));
                if(find_in_array(selected,c+"_"+(r),counter)!=true) //nzm jel sme !found
                    add.push(c+"_"+(r));
                if(find_in_array(selected, "p1B_"+(r+2),counter)!=true) //nzm jel sme !found
                    add.push("p1B_"+(r+2));
                if(find_in_array(selected, "p1B_"+(r),counter)!=true) //nzm jel sme !found
                    add.push("p1B_"+(r));
                if(find_in_array(selected,'p1B_'+(r+1),counter)!=true) //nzm jel sme !found
                    add.push('p1B_'+(r+1));//ispod
                for (let i = 0; i < add.length; i++)
                    toCheck.push(add[i]);
                    
            }


            if( c.charAt(2)=='J' && r ==0) {
                let add = [];
                if(find_in_array(selected,'p1J_2',counter)!=true) //nzm jel sme !found
                    add.push('p1J_2');
                if(find_in_array(selected,'p1I_1',counter)!=true) //nzm jel sme !found
                    add.push('p1I_1');
                if(find_in_array(selected,'p1I_2',counter)!=true) //nzm jel sme !found
                    add.push('p1I_2');
                for (let i = 0; i < add.length; i++)
                    toCheck.push(add[i]);
                    
                    
            }


            if( c.charAt(2)=='J' && r == 9) {
                let add = [];
                if(find_in_array(selected,'p1J_9',counter)!=true) //nzm jel sme !found
                    add.push('p1J_9');
                if(find_in_array(selected,'p1I_10',counter)!=true) //nzm jel sme !found
                    add.push('p1I_10');
                if(find_in_array(selected,'p1I_9',counter)!=true) //nzm jel sme !found
                    add.push('p1I_9');
                for (let i = 0; i < add.length; i++)
                    toCheck.push(add[i]);
                   
            }



               
            if (c.charAt(2)=='J' && r !=9 && r!=0)  {


                let add = [];
                //mozda treba toString posle zagrade
                if(find_in_array(selected, c+"_"+(r+2),counter)!=true) //nzm jel sme !found
                    add.push(c+"_"+(r+2));
                if(find_in_array(selected,c+"_"+(r),counter)!=true) //nzm jel sme !found
                    add.push(c+"_"+(r));
                if(find_in_array(selected, "p1I_"+(r+2),counter)!=true) //nzm jel sme !found
                    add.push("p1I_"+(r+2));
                if(find_in_array(selected, "p1I_"+(r),counter)!=true) //nzm jel sme !found
                    add.push("p1I_"+(r));
                if(find_in_array(selected,'p1I_'+(r+1),counter)!=true) //nzm jel sme !found
                    add.push('p1I_'+(r+1));//iznad
                for (let i = 0; i < add.length; i++)
                    toCheck.push(add[i]);
                   
            }


            if (c.charAt(2)!='J' && c.charAt(2)!='A' && r==0)  {

                let c_up, c_down;
                let c_up_code = c.charCodeAt(2)-1;
                c_up = 'p1' + String.fromCharCode(c_up_code);
                let c_down_code = c.charCodeAt(2)+1;
                c_down = 'p1' + String.fromCharCode(c_down_code);

                let add = [];
                //mozda treba toString posle zagrade
                if(find_in_array(selected, c_up+"_"+(r+1),counter)!=true) //nzm jel sme !found
                    add.push(c_up+"_"+(r+1));
                if(find_in_array(selected,c_down+"_"+(r+1),counter)!=true) //nzm jel sme !found
                    add.push(c_down+"_"+(r+1));
                if(find_in_array(selected, c_up+"_"+(r+2),counter)!=true) //nzm jel sme !found
                    add.push(c_up+"_"+(r+2));
                if(find_in_array(selected, c_down+"_"+(r+2),counter)!=true) //nzm jel sme !found
                    add.push(c_down+"_"+(r+2));
                if(find_in_array(selected,c+'_'+(r+2),counter)!=true) //nzm jel sme !found
                    add.push(c+'_'+(r+2));//iznad
                for (let i = 0; i < add.length; i++)
                    toCheck.push(add[i]);
                    
            }


        


            if (c.charAt(2)!='J' && c.charAt(2)!='A' && r==9)  {

                let c_up, c_down;
                let c_up_code = c.charCodeAt(2)-1;
                c_up = 'p1' +String.fromCharCode(c_up_code);
                let c_down_code = c.charCodeAt(2)+1;
                c_down = 'p1' + String.fromCharCode(c_down_code);


                let add = [];
                //mozda treba toString posle zagrade
                if(find_in_array(selected, c_up+"_"+(r+1),counter)!=true) //nzm jel sme !found
                    add.push(c_up+"_"+(r+1));
                if(find_in_array(selected,c_down+"_"+(r+1),counter)!=true) //nzm jel sme !found
                    add.push(c_down+"_"+(r+1));
                if(find_in_array(selected, c_up+"_"+(r),counter)!=true) //nzm jel sme !found
                    add.push(c_up+"_"+(r));
                if(find_in_array(selected, c_down+"_"+(r),counter)!=true) //nzm jel sme !found
                    add.push(c_down+"_"+(r));
                if(find_in_array(selected,c+'_'+(r),counter)!=true) //nzm jel sme !found
                    add.push(c+'_'+(r));//iznad
                for (let i = 0; i < add.length; i++)
                    toCheck.push(add[i]);
                   
            }






            if (c.charAt(2)!='J' && c.charAt(2)!='A' && r!=0 && r!=9)  {

                let c_up, c_down;
                let c_up_code = c.charCodeAt(2)-1;
                c_up = 'p1' +String.fromCharCode(c_up_code);
                let c_down_code = c.charCodeAt(2)+1;
                c_down = 'p1' + String.fromCharCode(c_down_code);


                let add = [];
                //mozda treba toString posle zagrade
                if(find_in_array(selected, c_up+"_"+(r+1),counter)!=true) //gore
                    add.push(c_up+"_"+(r+1));
                if(find_in_array(selected,c_down+"_"+(r+1),counter)!=true) //dole
                    add.push(c_down+"_"+(r+1));
                if(find_in_array(selected, c_up+"_"+(r),counter)!=true) //gore levo
                    add.push(c_up+"_"+(r));
                if(find_in_array(selected, c_down+"_"+(r),counter)!=true) //dole levo
                    add.push(c_down+"_"+(r));
                if(find_in_array(selected,c+'_'+(r),counter)!=true) //levo
                    add.push(c+'_'+(r));//iznad
                if(find_in_array(selected, c_up+"_"+(r+2),counter)!=true) //gore desno
                    add.push(c_up+"_"+(r+2));
                if(find_in_array(selected, c_down+"_"+(r+2),counter)!=true) //dole desno
                    add.push(c_down+"_"+(r+2));
                if(find_in_array(selected,c+'_'+(r+2),counter)!=true) //desno
                    add.push(c+'_'+(r+2));//iznad
                for (let i = 0; i < add.length; i++)
                {
                    toCheck.push(add[i]);
                   // alert(add[i]);

                }
                  
            }

            cnt++;
         

        }

        




        for (let i = 0; i<toCheck.length; i++) {
            let split = toCheck[i].split("_");
            let k = split[0];
            let v = (parseInt(split[1])-1)%10;
            let getRow = localStorage.getItem(k);
            getRow = getRow.split(",");
            if (getRow[v] == "busy") {
                for(let i=0; i<counter;i++) {
                    document.getElementById(selected[i]).style.backgroundColor="skyblue";
                    selected[i]=""; 
                }
                counter=0;
                localStorage.setItem("counter", counter);//toString
                localStorage.setItem("selected", selected);//toString
                current=0;
                localStorage.setItem("current", current);//toString
                localStorage.setItem("running", 0);
                let exited=document.getElementById("setupSpan");
                exited.innerHTML='<font size=\'2\' color = \'red\'> You positioned your ship next to another one <font>';
                return;
            }

        } 


     //ENDIF }

    



      ////////PROVERA_SUSEDA_END

     //lvl0

 //novo
        // let shape = [false, false];
        // for (let i = 0; i< counter; i++) {
        //     if(nizCOL[i]==nizCOL[i+1]) {
        //         shape[0] = true;
        //     }
        //     else shape[0] = false;
        //     if(nizROW[i]==nizROW[i+1]) {
        //         shape[1] = true;
        //     }
        //     else 
        //     shape[1] = false;
        // }

        // if(shape[0]==false && shapre[1] == false) {

        //     for(let i=0; i<counter;i++) {
        //         document.getElementById(selected[i]).style.backgroundColor="skyblue";
        //         selected[i]=""; 
        //     }
        //     counter=0;
        //     localStorage.setItem("counter", counter);//toString
        //     localStorage.setItem("selected", selected);//toString
        //     current=0;
        //     localStorage.setItem("current", current);//toString
        //     localStorage.setItem("running", 0);
        //     let exited=document.getElementById("setupSpan");
        //     exited.innerHTML='<font size=\'2\' color = \'red\'> You misshaped your boat! <font>';
        //     return;

        // }
        
//end novo


    if (counter==1) { //ubacio sam 1 polje 
        let str = selected[0];  // p1A_8    
        str = str.split("_");
        document.getElementById(selected[0]).style.backgroundColor = "darkgreen";
        let arr = localStorage.getItem(str[0]); // veliki string
        arr = arr.split(","); //niz stringova
        let ind = (parseInt(str[1])) - 1;
        arr[ind] = "busy";
        localStorage.setItem(str[0], arr);
        for(let i=0;i<selected.length;i++)
            selected[i] = "";       
        localStorage.setItem("counter", 0);
        localStorage.setItem("current", 0);
        localStorage.setItem("selected", selected);
        checkAvailableShips[3]--;    
        if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0)  
            document.getElementById('next').className='btn btn-success';
        //checkAvailableShips[i] = checkAvailableShips[i].toString();
        localStorage.setItem('p1_xs', checkAvailableShips[3]);
        localStorage.setItem("running", 0);

        let place_success=document.getElementById("setupSpan");
        place_success.innerHTML='<font size=\'2\' color = \'green\'>Dinghy successfully placed<font>';

        return;
    }

    //lvl2

    
    
    if (counter==2) {//ubaccio sam 2 polja
        if (nizCOL[0]==nizCOL[1]) {  //p1C==p1C npr, to je okej, 2 polja horizontalno
            let str = localStorage.getItem(nizCOL[0]);

            str = str.split(",");
            let i1 = (parseInt(nizROW[0])-1)%10;
            let i2 = (parseInt(nizROW[1])-1)%10;
            if((i1==0 && i2==9)||(i1==9 && i2==0)) {// izasao s mape pa krenuo s druge strane
                for(let i=0; i<counter;i++) {
                    document.getElementById(selected[i]).style.backgroundColor="skyblue";
                    selected[i]=""; 
                }
                counter=0;
                localStorage.setItem("counter", counter);//toString
                localStorage.setItem("selected", selected);//toString
                current=0;
                localStorage.setItem("current", current);//toString
                localStorage.setItem("running", 0);
                let exited=document.getElementById("setupSpan");
                exited.innerHTML='<font size=\'2\' color = \'red\'> You left the map before adding a ship <font>';
                return;
            }
            str[i1]="busy";
            str[i2]="busy";
          
            for(let i=0;i<counter; i++) {
                document.getElementById(selected[i]).style.backgroundColor="darkgreen";
            }
            checkAvailableShips[2]--;
            localStorage.setItem("p1_small", checkAvailableShips[2]);
            localStorage.setItem(nizCOL[0],str);    //ili nizCOL[1], svejendo je, posto je ista kolona
            localStorage.setItem("counter", 0);
            localStorage.setItem("current", 0);
            localStorage.setItem("selected", selected);
            localStorage.setItem("running", 0);   
            if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0)  
            document.getElementById('next').className='btn btn-success';        
            let place_success=document.getElementById("setupSpan");
            place_success.innerHTML='<font size=\'2\' color = \'green\'>Speedboat successfully placed<font>';     
            return;

        }
        else if(nizROW[0]==nizROW[1]) {
            //moze i value da se poredi kod kolona, zbog ivica
            if((nizCOL[0].charAt(2)=='A' && nizCOL[1].charAt(2)=='J')||(nizCOL[0].charAt(2)=='J' && nizCOL[1].charAt(2)=='A')) {
                for(let i=0; i<counter;i++) {
                    document.getElementById(selected[i]).style.backgroundColor="skyblue";
                    selected[i]=""; 
                }
                counter=0;
                localStorage.setItem("counter", counter);//toString
                localStorage.setItem("selected", selected);//toString
                current=0;
                localStorage.setItem("current", current);//toString
                localStorage.setItem("running", 0);
                let exited=document.getElementById("setupSpan");
                exited.innerHTML='<font size=\'2\' color = \'red\'> You left the map before adding a ship <font>';
                return;
            }

            let str1 = localStorage.getItem(nizCOL[0]);
            str1 = str1.split(",");
            let str2 = localStorage.getItem(nizCOL[1]);
            str2 = str2.split(",");
            let ind = (parseInt(nizROW[0])-1)%10; //moze i row 1, svejedno je
            str1[ind] = "busy";
            str2[ind] = "busy";
            localStorage.setItem(nizCOL[0], str1);
            localStorage.setItem(nizCOL[1], str2);
            for(let i=0;i<counter; i++) {
                document.getElementById(selected[i]).style.backgroundColor="darkgreen";
            }
            checkAvailableShips[2]--;
            localStorage.setItem("p1_small", checkAvailableShips[2]);
            localStorage.setItem("counter", 0);
            localStorage.setItem("current", 0);
            localStorage.setItem("selected", selected);
            localStorage.setItem("running", 0); 
            if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0)  
            document.getElementById('next').className='btn btn-success';  
            let place_success=document.getElementById("setupSpan");
            place_success.innerHTML='<font size=\'2\' color = \'green\'>Speedboat successfully placed<font>';
            return;         
        }


 
    }



    //lvl 3

  

    if(counter==3) {


        if ((nizCOL[0]==nizCOL[1]) && (nizCOL[1]==nizCOL[2])) {  //p1C==p1C npr, to je okej, 2 polja horizontalno
            let str = localStorage.getItem(nizCOL[0]);//svejeddno koja, moze i col[1]
            str = str.split(",");
            let i1 = (parseInt(nizROW[0])-1)%10;
            let i2 = (parseInt(nizROW[1])-1)%10;
            let i3 = (parseInt(nizROW[2])-1)%10;
          
            if((i1==1 && i3==9)||(i1==0 && i3==8) ||(i1==9 && i3==1)||(i1==8 && i3==0)) {// izasao s mape pa krenuo s druge strane
                for(let i=0; i<counter;i++) //ne proveravam koju boju stavljam, jer nikad necu pustiti busy
                    document.getElementById(selected[i]).style.backgroundColor="skyblue";
                counter=0;
                localStorage.setItem("counter", counter);//toString
                for(let i=0;i<4;i++) {
                    selected[i]="";            
                }
                localStorage.setItem("selected", selected);//toString
                current=0;
                localStorage.setItem("current", current);//toString
                localStorage.setItem("running", 0);
                let exited=document.getElementById("setupSpan");
                exited.innerHTML='<font size=\'2\' color = \'red\'> You left the map before adding a ship <font>';
                return;
            }
            str[i1]="busy";
            str[i2]="busy";
            
            str[i3]= "busy";
            for(let i=0;i<counter; i++) {
                document.getElementById(selected[i]).style.backgroundColor="darkgreen";
            }
            checkAvailableShips[1]--;
            localStorage.setItem("p1_medium", checkAvailableShips[1]);
            localStorage.setItem(nizCOL[0],str);    //ili nizCOL[1], svejendo je, posto je ista kolona
            localStorage.setItem("counter", 0);
            localStorage.setItem("current", 0);
            localStorage.setItem("selected", selected);
            localStorage.setItem("running", 0);
            if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0)  
            document.getElementById('next').className='btn btn-success';
            //localStorage.setItem("p1A",matrix1[0]);
            let place_success=document.getElementById("setupSpan");
            place_success.innerHTML='<font size=\'2\' color = \'green\'>Warship successfully placed<font>';
            return;

        } else if((nizROW[0]==nizROW[1])&&(nizROW[1]==nizROW[2])) {
            //moze i value da se poredi kod kolona, zbog ivica
            if((nizCOL[0].charAt(2)=='A' && nizCOL[2].charAt(2)=='I')||(nizCOL[0].charAt(2)=='B' && nizCOL[2].charAt(2)=='J')||(nizCOL[0].charAt(2)=='I' && nizCOL[2].charAt(2)=='A')||(nizCOL[0].charAt(2)=='J' && nizCOL[2].charAt(2)=='B')) {
            
                for(let i=0; i<counter;i++) //ne proveravam koju boju stavljam, jer nikad necu pustiti busy
                document.getElementById(selected[i]).style.backgroundColor="skyblue";
            counter=0;
            localStorage.setItem("counter", counter);//toString
            for(let i=0;i<4;i++) {
                selected[i]="";            
            }
            localStorage.setItem("selected", selected);//toString
            current=0;
            localStorage.setItem("current", current);//toString
            localStorage.setItem("running", 0);
            let exited=document.getElementById("setupSpan");
            exited.innerHTML='<font size=\'2\' color = \'red\'> You left the map before adding a ship <font>';
            return;
            }

            let str1 = localStorage.getItem(nizCOL[0]);
            str1 = str1.split(",");
            let str2 = localStorage.getItem(nizCOL[1]);
            str2 = str2.split(",");
            let str3 = localStorage.getItem(nizCOL[2]);
            str3 = str3.split(",");
            let ind = (parseInt(nizROW[0])-1)%10; //moze i row 1, svejedno je
            str1[ind] = "busy";
            str2[ind] = "busy";
            str3[ind]="busy";
            localStorage.setItem(nizCOL[0], str1);
            localStorage.setItem(nizCOL[1], str2);
            localStorage.setItem(nizCOL[2], str3);
            for(let i=0;i<counter; i++) {
               document.getElementById(selected[i]).style.backgroundColor="darkgreen";
            }
            checkAvailableShips[1]--;
            localStorage.setItem("p1_medium", checkAvailableShips[1]);
            localStorage.setItem("counter", 0);
            localStorage.setItem("current", 0);
            localStorage.setItem("selected", selected);
            localStorage.setItem("running", 0);   
            let place_success=document.getElementById("setupSpan");
            if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0)  
            document.getElementById('next').className='btn btn-success';
            place_success.innerHTML='<font size=\'2\' color = \'green\'>Warship successfully placed<font>';
            return;         
        }


    }


    //lvl4
    
    


    if(counter==4) {
        if ((nizCOL[0]==nizCOL[1])&&(nizCOL[1]==nizCOL[2])&&(nizCOL[2]==nizCOL[3])) {  //p1C==p1C npr, to je okej, 2 polja horizontalno


            let str = localStorage.getItem(nizCOL[0]);//svejeddno koja, moze i col[1]
            str = str.split(",");
            let i1 = (parseInt(nizROW[0])-1)%10;
            let i2 = (parseInt(nizROW[1])-1)%10;
            let i3 = (parseInt(nizROW[2])-1)%10;
            let i4 = (parseInt(nizROW[3])-1)%10;
            if((i1==2 && i4==9)||(i1==0 && i4==7) ||(i1==1 && i4==8)||(i1==9 && i4==2)||(i1==7 && i4==0)||(i1==8 && i4==1)) {// izasao s mape pa krenuo s druge strane
                for(let i=0; i<counter;i++) //ne proveravam koju boju stavljam, jer nikad necu pustiti busy
                    document.getElementById(selected[i]).style.backgroundColor="skyblue";
                counter=0;
                localStorage.setItem("counter", counter);//toString
                for(let i=0;i<4;i++) {                 
                    selected[i]="";            
                }
                localStorage.setItem("selected", selected);//toString
                current=0;
                localStorage.setItem("current", current);//toString
                localStorage.setItem("running", 0);
                let exited=document.getElementById("setupSpan");
                exited.innerHTML='<font size=\'2\' color = \'red\'> You left the map before adding a ship <font>';
                return;
            }
            str[i1]="busy";
            str[i2]="busy";
            str[i3]= "busy";
            str[i4]= "busy";
            for(let i=0;i<counter; i++) {
                
                document.getElementById(selected[i]).style.backgroundColor="darkgreen";
            }
            checkAvailableShips[0]--;
            localStorage.setItem("p1_big", checkAvailableShips[0]);
            localStorage.setItem(nizCOL[0],str);    //ili nizCOL[1], svejendo je, posto je ista kolona
            localStorage.setItem("counter", 0);
            localStorage.setItem("current", 0);
            localStorage.setItem("selected", selected);
            localStorage.setItem("running", 0);
            if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0)  
            document.getElementById('next').className='btn btn-success';
            //localStorage.setItem("p1A",matrix1[0]);
            let place_success=document.getElementById("setupSpan");
            place_success.innerHTML='<font size=\'2\' color = \'green\'>Aircraft Carrier successfully placed<font>';
            return;

        } else if((nizROW[0]==nizROW[1])&&(nizROW[1]==nizROW[2])) {
            //moze i value da se poredi kod kolona, zbog ivica
            if((nizCOL[0].charAt(2)=='A' && nizCOL[3].charAt(2)=='H')||(nizCOL[0].charAt(2)=='B' && nizCOL[3].charAt(2)=='I')||(nizCOL[0].charAt(2)=='C' && nizCOL[3].charAt(2)=='J')||(nizCOL[0].charAt(2)=='H' && nizCOL[3].charAt(2)=='A')||(nizCOL[0].charAt(2)=='I' && nizCOL[3].charAt(2)=='B')||(nizCOL[0].charAt(2)=='C' && nizCOL[3].charAt(2)=='J')) {
            for(let i=0; i<counter;i++) //ne proveravam koju boju stavljam, jer nikad necu pustiti busy
                document.getElementById(selected[i]).style.backgroundColor="skyblue";
            counter=0;
            localStorage.setItem("counter", counter);//toString
        
            for(let i=0;i<4;i++) {
               
                selected[i]="";            
            }
            localStorage.setItem("selected", selected);//toString
            current=0;
            localStorage.setItem("current", current);//toString
            localStorage.setItem("running", 0);
            let exited=document.getElementById("setupSpan");
            exited.innerHTML='<font size=\'2\' color = \'red\'> You left the map before adding a ship <font>';
            return;
            }

            let str1 = localStorage.getItem(nizCOL[0]);
            str1 = str1.split(",");
            let str2 = localStorage.getItem(nizCOL[1]);
            str2 = str2.split(",");
            let str3 = localStorage.getItem(nizCOL[2]);
            str3 = str3.split(",");
            let str4 = localStorage.getItem(nizCOL[3]);
            str4=str4.split(",");
            let ind = (parseInt(nizROW[0])-1)%10; //moze i row 1, svejedno je
            str1[ind] = "busy";
            str2[ind] = "busy";
            str3[ind] = "busy";
            str4[ind] = "busy";
            localStorage.setItem(nizCOL[0], str1);
            localStorage.setItem(nizCOL[1], str2);
            localStorage.setItem(nizCOL[2], str3);
            localStorage.setItem(nizCOL[3], str4);
            for(let i=0;i<counter; i++) {
                document.getElementById(selected[i]).style.backgroundColor="darkgreen";
            }
            checkAvailableShips[0]--;
            localStorage.setItem("p1_big", checkAvailableShips[0]);
            localStorage.setItem("counter", 0);
            localStorage.setItem("current", 0);
            localStorage.setItem("selected", selected);
            localStorage.setItem("running", 0);   
            if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0)  
            document.getElementById('next').className='btn btn-success';
            let place_success=document.getElementById("setupSpan");
            place_success.innerHTML='<font size=\'2\' color = \'green\'>Aircraft carrier successfully placed<font>';
            return;         
        }


    }


    //CANT FIT CRITETIA, RANDOM SHAPE

for(let i=0; i<counter;i++) 
{
    let sw = selected[i].split("_");
    let key = sw[0];
    let longstr = localStorage.getItem(key);
    longstr = longstr.split(",");
    if(longstr[(parseInt(sw[1])-1)%10]=='empty')
        document.getElementById(selected[i]).style.backgroundColor="skyblue";


}
//MENJAO

for(let i=0;i<counter;i++) {
    
    selected[i]="";   
          
}

//document.getElementById(selected[i]).style.backgroundColor="skyblue";

counter=0;
localStorage.setItem("counter", counter);//toString
localStorage.setItem("selected", selected);//toString
current=0;
localStorage.setItem("current", current);//toString
localStorage.setItem("running", 0);
let final=document.getElementById("setupSpan");
final.innerHTML='<font size=\'2\' color = \'red\'> You misshaped your boat <font>';



}



function changeSetup() {

    let flag = parseInt(localStorage.getItem('flag'));


    if(flag == 0) {
        
    let checkAvailableShips = [parseInt(localStorage.getItem("p1_big")), parseInt(localStorage.getItem("p1_medium")), parseInt(localStorage.getItem("p1_small")), 
    parseInt(localStorage.getItem("p1_xs"))];
    if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0) {
        //localStorage.setItem("running", 0); najvrv nepotrebno
        localStorage.setItem('flag',1);
        let p2id =localStorage.getItem('p2');
        document.getElementById('head').innerHTML = 'Please, ' + p2id +', arrange your ships!';
        document.getElementById('setupSpan').innerHTML = "";
        let str;
        let substitute = document.getElementById('p1A');
        str =  "<td class = 'table_style' id='p2A_1' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_2' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_3' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_4' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_5' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_6' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_7' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_8' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_9' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_10' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        substitute.innerHTML=str;

        substitute = document.getElementById('p1B');
        str =  "<td class = 'table_style' id='p2B_1' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_2' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_3' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_4' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_5' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_6' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_7' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_8' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_9' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_10' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        substitute.innerHTML=str;

        substitute = document.getElementById('p1C');
        str =  "<td class = 'table_style' id='p2C_1' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_2' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_3' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_4' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_5' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_6' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_7' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_8' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_9' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_10' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        substitute.innerHTML=str;

        substitute = document.getElementById('p1D');
        str =  "<td class = 'table_style' id='p2D_1' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_2' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_3' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_4' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_5' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_6' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_7' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_8' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_9' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_10' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        substitute.innerHTML=str;

        substitute = document.getElementById('p1E');
        str =  "<td class = 'table_style' id='p2E_1' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_2' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_3' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_4' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_5' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_6' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_7' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_8' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_9' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_10' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        substitute.innerHTML=str;
        

        substitute = document.getElementById('p1F');
        str =  "<td class = 'table_style' id='p2F_1' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_2' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_3' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_4' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_5' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_6' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_7' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_8' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_9' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_10' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        substitute.innerHTML=str;


        substitute = document.getElementById('p1G');
        str =  "<td class = 'table_style' id='p2G_1' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_2' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_3' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_4' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_5' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_6' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_7' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_8' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_9' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_10' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        substitute.innerHTML=str;



        substitute = document.getElementById('p1H');
        str =  "<td class = 'table_style' id='p2H_1' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_2' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_3' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_4' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_5' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_6' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_7' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_8' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_9' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_10' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        substitute.innerHTML=str;
        

        substitute = document.getElementById('p1I');
        str =  "<td class = 'table_style' id='p2I_1' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_2' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_3' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_4' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_5' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_6' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_7' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_8' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_9' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_10' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        substitute.innerHTML=str;



        substitute = document.getElementById('p1J');
        str =  "<td class = 'table_style' id='p2J_1' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_2' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_3' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_4' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_5' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_6' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_7' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_8' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_9' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_10' onmousedown='startSelection2(this)' onmouseover='selectSpace2(this)' onmouseup='endSelection2(this)'>&nbsp;</td>";
        substitute.innerHTML=str;
        document.getElementById('next').className = 'btn btn-danger';
       


        return;
    }
}

    if (flag == 1) {
        let checkAvailableShips = [parseInt(localStorage.getItem("p2_big")), parseInt(localStorage.getItem("p2_medium")), parseInt(localStorage.getItem("p2_small")), 
        parseInt(localStorage.getItem("p2_xs"))];
       
        if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0) {
            //localStorage.setItem("running", 0); najvrv nepotrebno
            document.getElementById('next').innerHTML = 'Proceed to game';
            document.getElementById('next').className='btn btn-success';           
            localStorage.setItem('flag',2);        
            return;
        }

        
    }

    if (flag == 2) {

        var setup = window.open("battleship-game.html");

    }

}



function startSelection2(input)   {
    

    //dohvatam running, neophodan za mouseup, da ne bi cuvao pogresne podatke u end-u
    localStorage.setItem("running", "1");//ili int
    //alert("postavio running");


    
    //dohvatam broj preostalih pojedinacnih brodova
    let checkAvailableShips = [parseInt(localStorage.getItem("p2_big")), parseInt(localStorage.getItem("p2_medium")), parseInt(localStorage.getItem("p2_small")), 
    parseInt(localStorage.getItem("p2_xs"))];

    if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0) {
        localStorage.setItem("running", 0);
        let no_more_ships=document.getElementById("setupSpan");
        no_more_ships.innerHTML = '<font size=\'2\' color = \'red\'> Player 2, you have already placed all your ships <font>';
        return;
    }

    //bojim polje
    input.style.backgroundColor = "yellow";
   

    //dohvatam brojace i neophodne strukture podataka
    let counter = parseInt(localStorage.getItem("counter"));
    let selected = localStorage.getItem("selected");
    selected=selected.split(",");
    let current = parseInt(localStorage.getItem("current"));

    //dohvatam sam element

    let check = input.id;     // p1B 7
    let check_array = check.split("_");
    let row = localStorage.getItem(check_array[0]);//dohvatam vrstu iz baze kao string
    let check_row = row.split(",");//vrsta kao niz stringova
    let check_value = check_row[(parseInt(check_array[1])-1)%10];


    //proveravam da li je mesto vec zauzeto, da me izbaci odmah
    //bolje ovde, da ne prebacujem svima da budu empty posle kroz for petlju, i logicnije je da me odamh izbaci

    if(check_value!="empty") {
        //ova sva polja bi svakako trebalo da budu prazna ili 0
     
        for(let i=0;i<counter;i++) {
            selected[i]="";            
        }  
         counter=0;
        localStorage.setItem("counter", counter);
        localStorage.setItem("selected", selected);//toString
        current=0;
        localStorage.setItem("current", current);      
        localStorage.setItem("running", 0);//mogao sam string odmah
        input.style.backgroundColor="darkgreen";
        let was_selected=document.getElementById("setupSpan");
        was_selected.innerHTML='<font size=\'2\' color = \'red\'> This space has already been selected! Please, try again. <font>';
        return;
    }
    

    counter++;
    //alert(counter);
    selected[current]=input.id;//mozda treba toString ne mora pod if ali ne menja, uvek ce ovo biti 1
    if(current<3)
        current++;
    localStorage.setItem("counter", counter);
    localStorage.setItem("current", current);
    localStorage.setItem("selected",selected);



}




function selectSpace2(input)  {

      //dohvatam running, da ne bih dodavao polje u niz ako nije pritisnuto dugme u pocetku
      let running = parseInt(localStorage.getItem("running"));
      if(running==0) return;

      //TODO counter ce biti jednak 0 ako sam napustio tablu, jer ce resetCounters() da ga postavi tako
      let counter = parseInt(localStorage.getItem("counter"));
      //if(counter==0) return;

      //bojim polje
      input.style.backgroundColor = "yellow";

      //dohvatam brojace i neophodne strukture podataka
      
      let selected=localStorage.getItem("selected");
      selected=selected.split(",");
      let current = parseInt(localStorage.getItem("current"));
  
      //dohvatam sam element
  
      let check = input.id;
      let check_array = check.split("_");       
      let row = localStorage.getItem(check_array[0]);//dohvatam vrstu iz baze kao string
      let check_row = row.split(",");//vrsta kao niz stringova
      let check_value = check_row[(parseInt(check_array[1])-1)%10];
  
      //dohvatam broj preostalih pojedinacnih brodova
      let checkAvailableShips = [parseInt(localStorage.getItem("p2_big")), parseInt(localStorage.getItem("p2_medium")), parseInt(localStorage.getItem("p2_small")), 
      parseInt(localStorage.getItem("p2_xs"))];
  
      //proveravam da li je mesto vec zauzeto, da me izbaci odmah
      //bolje ovde, da ne prebacujem svima da budu empty posle kroz for petlju, i logicnije je da me odamh izbaci
  
      if(check_value!="empty") {

       for(let i=0; i<counter;i++) { //ne proveravam boju, nikad necu pustiti busy
           document.getElementById(selected[i]).style.backgroundColor="skyblue";
           selected[i]=""; 
       }
          counter=0;
          localStorage.setItem("counter", counter);
          localStorage.setItem("selected", selected);//toString
          current=0;
          localStorage.setItem("current", current);
          
          localStorage.setItem("running", 0);//mogao sam string odmah
          //vracam trenutno na zelenu
          input.style.backgroundColor = "darkgreen";
         
          let was_selected=document.getElementById("setupSpan");
          was_selected.innerHTML='<font size=\'2\' color = \'red\'> This space has already been selected! Please, try again. <font>';
          return;
      }
  
      //proveravam da li sam hoverovao preko previse polja
      //moze i u finalnoj metodi, samo proveravam counter

  
      //proveravam da ne predjem preko istog polja dva puta
      //OBAVEZNO OVDE

      //zapravo ne pravi razliku, ne zove dva puta za isto iz nekog razloga, ali obezbedjenje bi radilo
  
      for(let i=0;i<selected.length;i++) {
          if (selected[i]==input.id) {
              
              for(let i=0; i<counter;i++) //ne proveravam koju boju stavljam, jer nikad necu pustiti busy
              {
               document.getElementById(selected[i]).style.backgroundColor="skyblue";
               selected[i]="";  
              }
        
              counter=0;
              localStorage.setItem("counter", counter);//toString
              localStorage.setItem("selected", selected);//toString
              current=0;
              localStorage.setItem("current", current);//toString
              localStorage.setItem("running", 0);
              let already_hovered=document.getElementById("setupSpan");
              already_hovered.innerHTML='<font size=\'2\' color = \'red\'> You have already hovered over this space! <font>';
              return;
  
          }
      }
     
      counter++;    
      selected[current]=input.id;
      current++;
      localStorage.setItem("counter", counter);
      localStorage.setItem("current", current);
      localStorage.setItem("selected",selected);
    

}


//TODO popravi oblik za lvl 4
function endSelection2(input) {
    //ne bi trebalo da se desi, ne moze up bez prethodnog downa, ali aj za svaki slucaj
    let running=parseInt(localStorage.getItem("running"));
    if(running==0) return;


     //dohvatam brojace i neophodne strukture podataka
     let counter = parseInt(localStorage.getItem("counter"));
     let selected=localStorage.getItem("selected");
     selected=selected.split(",");
     let current = parseInt(localStorage.getItem("current"));
 
     //dohvatam sam element
 
     let check = input.id;
     let check_array = check.split("_");
     let row = localStorage.getItem(check_array[0]);//dohvatam vrstu iz baze kao string
     let check_row = row.split(",");//vrsta kao niz stringova
     let check_value = check_row[(parseInt(check_array[1])-1)%10];
 
     //dohvatam broj preostalih pojedinacnih brodova
     let checkAvailableShips = [parseInt(localStorage.getItem("p2_big")), parseInt(localStorage.getItem("p2_medium")), parseInt(localStorage.getItem("p2_small")), 
     parseInt(localStorage.getItem("p2_xs"))];

      
    if(counter>4) {//paranoja, uvek zajedno rastu
        
        for(let i=0; i<counter;i++) {
            document.getElementById(selected[i]).style.backgroundColor="skyblue";
            selected[i]=""; 
        }
        counter=0;
        localStorage.setItem("counter", counter);//toString
        localStorage.setItem("selected", selected);//toString
        current=0;
        localStorage.setItem("current", current);//toString
        localStorage.setItem("running", 0);
        let took_too_many=document.getElementById("setupSpan");
        took_too_many.innerHTML='<font size=\'2\' color = \'red\'> You have chosen more than four spaces. No aircrat carrier is that big. <font>';
        return;
    }




    if(counter==1 && checkAvailableShips[3]==0) {
        
        //ne proveravam koju boju stavljam, jer nikad necu pustiti busy  
        input.style.backgroundColor="skyblue";
        counter=0;
        localStorage.setItem("counter", counter);//toString
        for(let i=0;i<4;i++) {
            selected[i]="";            
        }
        localStorage.setItem("selected", selected);//toString
        current=0;
        localStorage.setItem("current", current);//toString
        localStorage.setItem("running", 0);
        let no_more_dinghies=document.getElementById("setupSpan");
        no_more_dinghies.innerHTML='<font size=\'2\' color = \'red\'> You have no more dinghies to place. <font>';
        return;

    }


    
    if(counter==2 && checkAvailableShips[2]==0) {
        
        for(let i=0; i<counter;i++) {
            document.getElementById(selected[i]).style.backgroundColor="skyblue";
            selected[i]=""; 
        }
        counter=0;
        localStorage.setItem("counter", counter);//toString
        localStorage.setItem("selected", selected);//toString
        current=0;
        localStorage.setItem("current", current);//toString
        localStorage.setItem("running", 0);
        let no_more_speedboats=document.getElementById("setupSpan");
        no_more_speedboats.innerHTML='<font size=\'2\' color = \'red\'> You have no more no more speedboats to place. <font>';
        return;

    }



    
    if(counter==3 && checkAvailableShips[1]==0) {
        
        for(let i=0; i<counter;i++) {
            document.getElementById(selected[i]).style.backgroundColor="skyblue";
            selected[i]=""; 
        }         
        counter=0;
        localStorage.setItem("counter", counter);//toString
        localStorage.setItem("selected", selected);//toString
        current=0;
        localStorage.setItem("current", current);//toString
        localStorage.setItem("running", 0);
        let no_more_warships=document.getElementById("setupSpan");
        no_more_warships.innerHTML='<font size=\'2\' color = \'red\'> You have no more warships to place. <font>';
       
        return;

    }




    
    if(counter==4 && checkAvailableShips[0]==0) {
        
        for(let i=0; i<counter;i++) {
            document.getElementById(selected[i]).style.backgroundColor="skyblue";
            selected[i]=""; 
        }
        counter=0;
        localStorage.setItem("counter", counter);//toString
        localStorage.setItem("selected", selected);//toString
        current=0;
        localStorage.setItem("current", current);//toString
        localStorage.setItem("running", 0);
        let no_more_carriers=document.getElementById("setupSpan");
        no_more_carriers.innerHTML='<font size=\'2\' color = \'red\'> You have no more aircraft carriers to place. <font>';
        return;
    }

    let nizROW=["","","",""];
    let nizCOL=["","","",""];
    let niz=["","","",""];


    //moze i ovo
    //niz = selected


    for(let i=0;i<selected.length;i++) 
       niz[i]=selected[i];                
    

    //svaki element selecteda koji je upisan u N se deli na 2 dela, dobijam matricu opet
    for(let i=0;i<4;i++) { //selected.length
        if(i==4) break;
        niz[i]= niz[i].split("_"); //niz ima matricu tipa p2A,4
        nizCOL[i]=niz[i][0]; ///p2A format
        
        nizROW[i]=niz[i][1]; // 8 format, broj je
      
     }

  
     
     
      let cnt = 0;
      let toCheck = new Array ();


  

        while(cnt<counter) {
           
            
        let c = nizCOL[cnt];
        let r = nizROW[cnt];
        
        r = (parseInt(r)-1)%10;

        
            if(c.charAt(2)=='A' && r == 0) {
                let add = [];        
                if(find_in_array(selected,'p2A_2',counter)!=true)                   
                        add.push('p2A_2');                                          
                if(find_in_array(selected,'p2B_1',counter)!=true) //nzm jel sme !found
                    add.push('p2B_1');
                if(find_in_array(selected,'p2B_2',counter)!=true) //nzm jel sme !found
                    add.push('p2B_2');

                for (let i = 0; i < add.length; i++) 
                    toCheck.push(add[i]);   
            }

            if (c.charAt(2)=='A' && r ==9)  {
                let add = [];
                if(find_in_array(selected,'p2A_9',counter)!=true) //nzm jel sme !found
                    add.push('p2A_9');
                if(find_in_array(selected,'p2B_9',counter)!=true) //nzm jel sme !found
                    add.push('p2B_9');
                if(find_in_array(selected,'p2B_10',counter)!=true) //nzm jel sme !found
                    add.push('p2B_10');
                for (let i = 0; i < add.length; i++)
                    toCheck.push(add[i]);
                   
            }


            
            if (c.charAt(2)=='A' && r !=9 && r!=0)  {


                let add = [];
                //mozda treba toString posle zagrade
                if(find_in_array(selected, c+"_"+(r+2),counter)!=true) //nzm jel sme !found
                    add.push(c+"_"+(r+2));
                if(find_in_array(selected,c+"_"+(r),counter)!=true) //nzm jel sme !found
                    add.push(c+"_"+(r));
                if(find_in_array(selected, "p2B_"+(r+2),counter)!=true) //nzm jel sme !found
                    add.push("p2B_"+(r+2));
                if(find_in_array(selected, "p2B_"+(r),counter)!=true) //nzm jel sme !found
                    add.push("p2B_"+(r));
                if(find_in_array(selected,'p2B_'+(r+1),counter)!=true) //nzm jel sme !found
                    add.push('p2B_'+(r+1));//ispod
                for (let i = 0; i < add.length; i++)
                    toCheck.push(add[i]);
                    
            }


            if( c.charAt(2)=='J' && r ==0) {
                let add = [];
                if(find_in_array(selected,'p2J_2',counter)!=true) //nzm jel sme !found
                    add.push('p2J_2');
                if(find_in_array(selected,'p2I_1',counter)!=true) //nzm jel sme !found
                    add.push('p2I_1');
                if(find_in_array(selected,'p2I_2',counter)!=true) //nzm jel sme !found
                    add.push('p2I_2');
                for (let i = 0; i < add.length; i++)
                    toCheck.push(add[i]);
                    
                    
            }


            if( c.charAt(2)=='J' && r == 9) {
                let add = [];
                if(find_in_array(selected,'p2J_9',counter)!=true) //nzm jel sme !found
                    add.push('p2J_9');
                if(find_in_array(selected,'p2I_10',counter)!=true) //nzm jel sme !found
                    add.push('p2I_10');
                if(find_in_array(selected,'p2I_9',counter)!=true) //nzm jel sme !found
                    add.push('p2I_9');
                for (let i = 0; i < add.length; i++)
                    toCheck.push(add[i]);
                   
            }



               
            if (c.charAt(2)=='J' && r !=9 && r!=0)  {


                let add = [];
                //mozda treba toString posle zagrade
                if(find_in_array(selected, c+"_"+(r+2),counter)!=true) //nzm jel sme !found
                    add.push(c+"_"+(r+2));
                if(find_in_array(selected,c+"_"+(r),counter)!=true) //nzm jel sme !found
                    add.push(c+"_"+(r));
                if(find_in_array(selected, "p2I_"+(r+2),counter)!=true) //nzm jel sme !found
                    add.push("p2I_"+(r+2));
                if(find_in_array(selected, "p2I_"+(r),counter)!=true) //nzm jel sme !found
                    add.push("p2I_"+(r));
                if(find_in_array(selected,'p2I_'+(r+1),counter)!=true) //nzm jel sme !found
                    add.push('p2I_'+(r+1));//iznad
                for (let i = 0; i < add.length; i++)
                    toCheck.push(add[i]);
                   
            }


            if (c.charAt(2)!='J' && c.charAt(2)!='A' && r==0)  {

                let c_up, c_down;
                let c_up_code = c.charCodeAt(2)-1;
                c_up = 'p2' + String.fromCharCode(c_up_code);
                let c_down_code = c.charCodeAt(2)+1;
                c_down = 'p2' + String.fromCharCode(c_down_code);

                let add = [];
                //mozda treba toString posle zagrade
                if(find_in_array(selected, c_up+"_"+(r+1),counter)!=true) //nzm jel sme !found
                    add.push(c_up+"_"+(r+1));
                if(find_in_array(selected,c_down+"_"+(r+1),counter)!=true) //nzm jel sme !found
                    add.push(c_down+"_"+(r+1));
                if(find_in_array(selected, c_up+"_"+(r+2),counter)!=true) //nzm jel sme !found
                    add.push(c_up+"_"+(r+2));
                if(find_in_array(selected, c_down+"_"+(r+2),counter)!=true) //nzm jel sme !found
                    add.push(c_down+"_"+(r+2));
                if(find_in_array(selected,c+'_'+(r+2),counter)!=true) //nzm jel sme !found
                    add.push(c+'_'+(r+2));//iznad
                for (let i = 0; i < add.length; i++)
                    toCheck.push(add[i]);
                    
            }


        


            if (c.charAt(2)!='J' && c.charAt(2)!='A' && r==9)  {

                let c_up, c_down;
                let c_up_code = c.charCodeAt(2)-1;
                c_up = 'p2' +String.fromCharCode(c_up_code);
                let c_down_code = c.charCodeAt(2)+1;
                c_down = 'p2' + String.fromCharCode(c_down_code);


                let add = [];
                //mozda treba toString posle zagrade
                if(find_in_array(selected, c_up+"_"+(r+1),counter)!=true) //nzm jel sme !found
                    add.push(c_up+"_"+(r+1));
                if(find_in_array(selected,c_down+"_"+(r+1),counter)!=true) //nzm jel sme !found
                    add.push(c_down+"_"+(r+1));
                if(find_in_array(selected, c_up+"_"+(r),counter)!=true) //nzm jel sme !found
                    add.push(c_up+"_"+(r));
                if(find_in_array(selected, c_down+"_"+(r),counter)!=true) //nzm jel sme !found
                    add.push(c_down+"_"+(r));
                if(find_in_array(selected,c+'_'+(r),counter)!=true) //nzm jel sme !found
                    add.push(c+'_'+(r));//iznad
                for (let i = 0; i < add.length; i++)
                    toCheck.push(add[i]);
                   
            }






            if (c.charAt(2)!='J' && c.charAt(2)!='A' && r!=0 && r!=9)  {

                let c_up, c_down;
                let c_up_code = c.charCodeAt(2)-1;
                c_up = 'p2' +String.fromCharCode(c_up_code);
                let c_down_code = c.charCodeAt(2)+1;
                c_down = 'p2' + String.fromCharCode(c_down_code);


                let add = [];
                //mozda treba toString posle zagrade
                if(find_in_array(selected, c_up+"_"+(r+1),counter)!=true) //gore
                    add.push(c_up+"_"+(r+1));
                if(find_in_array(selected,c_down+"_"+(r+1),counter)!=true) //dole
                    add.push(c_down+"_"+(r+1));
                if(find_in_array(selected, c_up+"_"+(r),counter)!=true) //gore levo
                    add.push(c_up+"_"+(r));
                if(find_in_array(selected, c_down+"_"+(r),counter)!=true) //dole levo
                    add.push(c_down+"_"+(r));
                if(find_in_array(selected,c+'_'+(r),counter)!=true) //levo
                    add.push(c+'_'+(r));//iznad
                if(find_in_array(selected, c_up+"_"+(r+2),counter)!=true) //gore desno
                    add.push(c_up+"_"+(r+2));
                if(find_in_array(selected, c_down+"_"+(r+2),counter)!=true) //dole desno
                    add.push(c_down+"_"+(r+2));
                if(find_in_array(selected,c+'_'+(r+2),counter)!=true) //desno
                    add.push(c+'_'+(r+2));//iznad
                for (let i = 0; i < add.length; i++)
                {
                    toCheck.push(add[i]);
                   // alert(add[i]);

                }
                  
            }

            cnt++;
         

        }




        for (let i = 0; i<toCheck.length; i++) {
            let split = toCheck[i].split("_");
            let k = split[0];
            let v = (parseInt(split[1])-1)%10;
            let getRow = localStorage.getItem(k);
            getRow = getRow.split(",");
            if (getRow[v] == "busy") {
                for(let i=0; i<counter;i++) {
                    document.getElementById(selected[i]).style.backgroundColor="skyblue";
                    selected[i]=""; 
                }
                counter=0;
                localStorage.setItem("counter", counter);//toString
                localStorage.setItem("selected", selected);//toString
                current=0;
                localStorage.setItem("current", current);//toString
                localStorage.setItem("running", 0);
                let exited=document.getElementById("setupSpan");
                exited.innerHTML='<font size=\'2\' color = \'red\'> You positioned your ship next to another one <font>';
                return;
            }

        } 


     //ENDIF }]


     ///SREDI SHAPE

    



      ////////PROVERA_SUSEDA_END

     //lvl0
     ///IMAO SAM VARIJANTE CURRENT = 0,1,2,3 ili 1,2,3, 4, ne valja tako

      /*  let str = niz[0];  // p1A,8!!!!   */

    if (counter==1) { //ubacio sam 1 polje 
        let str = selected[0];  // p1A_8    
        str = str.split("_");
        document.getElementById(selected[0]).style.backgroundColor = "darkgreen";
        let arr = localStorage.getItem(str[0]); // veliki string
        arr = arr.split(","); //niz stringova
        let ind = (parseInt(str[1])) - 1;
        arr[ind] = "busy";
        localStorage.setItem(str[0], arr);
        for(let i=0;i<selected.length;i++)
            selected[i] = "";       
        localStorage.setItem("counter", 0);
        localStorage.setItem("current", 0);
        localStorage.setItem("selected", selected);
        checkAvailableShips[3]--;    
        if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0)  
        {
            document.getElementById('next').innerHTML = 'Proceed to game';
            document.getElementById('next').className='btn btn-success';           
            localStorage.setItem('flag',2);

        }
           
        //checkAvailableShips[i] = checkAvailableShips[i].toString();
        localStorage.setItem('p2_xs', checkAvailableShips[3]);
        localStorage.setItem("running", 0);

        let place_success=document.getElementById("setupSpan");
        place_success.innerHTML='<font size=\'2\' color = \'green\'>Dinghy successfully placed<font>';

        return;
    }

    //lvl2

    
    
    if (counter==2) {//ubaccio sam 2 polja
        if (nizCOL[0]==nizCOL[1]) {  //p1C==p1C npr, to je okej, 2 polja horizontalno
            let str = localStorage.getItem(nizCOL[0]);

            str = str.split(",");
            let i1 = (parseInt(nizROW[0])-1)%10;
            let i2 = (parseInt(nizROW[1])-1)%10;
            if((i1==0 && i2==9)||(i1==9 && i2==0)) {// izasao s mape pa krenuo s druge strane
                for(let i=0; i<counter;i++) {
                    document.getElementById(selected[i]).style.backgroundColor="skyblue";
                    selected[i]=""; 
                }
                counter=0;
                localStorage.setItem("counter", counter);//toString
                localStorage.setItem("selected", selected);//toString
                current=0;
                localStorage.setItem("current", current);//toString
                localStorage.setItem("running", 0);
                let exited=document.getElementById("setupSpan");
                exited.innerHTML='<font size=\'2\' color = \'red\'> You left the map before adding a ship <font>';
                return;
            }
            str[i1]="busy";
            str[i2]="busy";
          
            for(let i=0;i<counter; i++) {
                document.getElementById(selected[i]).style.backgroundColor="darkgreen";
            }
            checkAvailableShips[2]--;
            localStorage.setItem("p2_small", checkAvailableShips[2]);
            localStorage.setItem(nizCOL[0],str);    //ili nizCOL[1], svejendo je, posto je ista kolona
            localStorage.setItem("counter", 0);
            localStorage.setItem("current", 0);
            localStorage.setItem("selected", selected);
            localStorage.setItem("running", 0);   
            if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0)  
            {
            document.getElementById('next').innerHTML = 'Proceed to game';
            document.getElementById('next').className='btn btn-success';           
            localStorage.setItem('flag',2);
            }       
            let place_success=document.getElementById("setupSpan");
            place_success.innerHTML='<font size=\'2\' color = \'green\'>Speedboat successfully placed<font>';     
            return;

        }
        else if(nizROW[0]==nizROW[1]) {
            //moze i value da se poredi kod kolona, zbog ivica
            if((nizCOL[0].charAt(2)=='A' && nizCOL[1].charAt(2)=='J')||(nizCOL[0].charAt(2)=='J' && nizCOL[1].charAt(2)=='A')) {
                for(let i=0; i<counter;i++) {
                    document.getElementById(selected[i]).style.backgroundColor="skyblue";
                    selected[i]=""; 
                }
                counter=0;
                localStorage.setItem("counter", counter);//toString
                localStorage.setItem("selected", selected);//toString
                current=0;
                localStorage.setItem("current", current);//toString
                localStorage.setItem("running", 0);
                let exited=document.getElementById("setupSpan");
                exited.innerHTML='<font size=\'2\' color = \'red\'> You left the map before adding a ship <font>';
                return;
            }

            let str1 = localStorage.getItem(nizCOL[0]);
            str1 = str1.split(",");
            let str2 = localStorage.getItem(nizCOL[1]);
            str2 = str2.split(",");
            let ind = (parseInt(nizROW[0])-1)%10; //moze i row 1, svejedno je
            str1[ind] = "busy";
            str2[ind] = "busy";
            localStorage.setItem(nizCOL[0], str1);
            localStorage.setItem(nizCOL[1], str2);
            for(let i=0;i<counter; i++) {
                document.getElementById(selected[i]).style.backgroundColor="darkgreen";
            }
            checkAvailableShips[2]--;
            localStorage.setItem("p2_small", checkAvailableShips[2]);
            localStorage.setItem("counter", 0);
            localStorage.setItem("current", 0);
            localStorage.setItem("selected", selected);
            localStorage.setItem("running", 0); 
            if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0)  
           {document.getElementById('next').innerHTML = 'Proceed to game';
           document.getElementById('next').className='btn btn-success';           
           localStorage.setItem('flag',2);}
            let place_success=document.getElementById("setupSpan");
            place_success.innerHTML='<font size=\'2\' color = \'green\'>Speedboat successfully placed<font>';
            return;         
        }


 
    }



    //lvl 3

  

    if(counter==3) {


        if ((nizCOL[0]==nizCOL[1]) && (nizCOL[1]==nizCOL[2])) {  //p1C==p1C npr, to je okej, 2 polja horizontalno
            let str = localStorage.getItem(nizCOL[0]);//svejeddno koja, moze i col[1]
            str = str.split(",");
            let i1 = (parseInt(nizROW[0])-1)%10;
            let i2 = (parseInt(nizROW[1])-1)%10;
            let i3 = (parseInt(nizROW[2])-1)%10;
          
            if((i1==1 && i3==9)||(i1==0 && i3==8) ||(i1==9 && i3==1)||(i1==8 && i3==0)) {// izasao s mape pa krenuo s druge strane
                for(let i=0; i<counter;i++) //ne proveravam koju boju stavljam, jer nikad necu pustiti busy
                    document.getElementById(selected[i]).style.backgroundColor="skyblue";
                counter=0;
                localStorage.setItem("counter", counter);//toString
                for(let i=0;i<4;i++) {
                    selected[i]="";            
                }
                localStorage.setItem("selected", selected);//toString
                current=0;
                localStorage.setItem("current", current);//toString
                localStorage.setItem("running", 0);
                let exited=document.getElementById("setupSpan");
                exited.innerHTML='<font size=\'2\' color = \'red\'> You left the map before adding a ship <font>';
                return;
            }
            str[i1]="busy";
            str[i2]="busy";
            
            str[i3]= "busy";
            for(let i=0;i<counter; i++) {
                document.getElementById(selected[i]).style.backgroundColor="darkgreen";
            }
            checkAvailableShips[1]--;
            localStorage.setItem("p2_medium", checkAvailableShips[1]);
            localStorage.setItem(nizCOL[0],str);    //ili nizCOL[1], svejendo je, posto je ista kolona
            localStorage.setItem("counter", 0);
            localStorage.setItem("current", 0);
            localStorage.setItem("selected", selected);
            localStorage.setItem("running", 0);
            if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0)  
           {
            document.getElementById('next').innerHTML = 'Proceed to game';
            document.getElementById('next').className='btn btn-success';           
            localStorage.setItem('flag',2);
           }
            //localStorage.setItem("p1A",matrix1[0]);
            let place_success=document.getElementById("setupSpan");
            place_success.innerHTML='<font size=\'2\' color = \'green\'>Warship successfully placed<font>';
            return;

        } else if((nizROW[0]==nizROW[1])&&(nizROW[1]==nizROW[2])) {
            //moze i value da se poredi kod kolona, zbog ivica
            if((nizCOL[0].charAt(2)=='A' && nizCOL[2].charAt(2)=='I')||(nizCOL[0].charAt(2)=='B' && nizCOL[2].charAt(2)=='J')||(nizCOL[0].charAt(2)=='I' && nizCOL[2].charAt(2)=='A')||(nizCOL[0].charAt(2)=='J' && nizCOL[2].charAt(2)=='B')) {
            
                for(let i=0; i<counter;i++) //ne proveravam koju boju stavljam, jer nikad necu pustiti busy
                document.getElementById(selected[i]).style.backgroundColor="skyblue";
            counter=0;
            localStorage.setItem("counter", counter);//toString
            for(let i=0;i<4;i++) {
                selected[i]="";            
            }
            localStorage.setItem("selected", selected);//toString
            current=0;
            localStorage.setItem("current", current);//toString
            localStorage.setItem("running", 0);
            let exited=document.getElementById("setupSpan");
            exited.innerHTML='<font size=\'2\' color = \'red\'> You left the map before adding a ship <font>';
            return;
            }

            let str1 = localStorage.getItem(nizCOL[0]);
            str1 = str1.split(",");
            let str2 = localStorage.getItem(nizCOL[1]);
            str2 = str2.split(",");
            let str3 = localStorage.getItem(nizCOL[2]);
            str3 = str3.split(",");
            let ind = (parseInt(nizROW[0])-1)%10; //moze i row 1, svejedno je
            str1[ind] = "busy";
            str2[ind] = "busy";
            str3[ind]="busy";
            localStorage.setItem(nizCOL[0], str1);
            localStorage.setItem(nizCOL[1], str2);
            localStorage.setItem(nizCOL[2], str3);
            for(let i=0;i<counter; i++) {
               document.getElementById(selected[i]).style.backgroundColor="darkgreen";
            }
            checkAvailableShips[1]--;
            localStorage.setItem("p2_medium", checkAvailableShips[1]);
            localStorage.setItem("counter", 0);
            localStorage.setItem("current", 0);
            localStorage.setItem("selected", selected);
            localStorage.setItem("running", 0);   
            let place_success=document.getElementById("setupSpan");
            if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0)  
             {
                document.getElementById('next').innerHTML = 'Proceed to game';
                document.getElementById('next').className='btn btn-success';           
                localStorage.setItem('flag',2);
             }
            place_success.innerHTML='<font size=\'2\' color = \'green\'>Warship successfully placed<font>';
            return;         
        }


    }


    //lvl4
    
    


    if(counter==4) {
        if ((nizCOL[0]==nizCOL[1])&&(nizCOL[1]==nizCOL[2])&&(nizCOL[2]==nizCOL[3])) {  //p1C==p1C npr, to je okej, 2 polja horizontalno


            let str = localStorage.getItem(nizCOL[0]);//svejeddno koja, moze i col[1]
            str = str.split(",");
            let i1 = (parseInt(nizROW[0])-1)%10;
            let i2 = (parseInt(nizROW[1])-1)%10;
            let i3 = (parseInt(nizROW[2])-1)%10;
            let i4 = (parseInt(nizROW[3])-1)%10;
            if((i1==2 && i4==9)||(i1==0 && i4==7) ||(i1==1 && i4==8)||(i1==9 && i4==2)||(i1==7 && i4==0)||(i1==8 && i4==1)) {// izasao s mape pa krenuo s druge strane
                for(let i=0; i<counter;i++) //ne proveravam koju boju stavljam, jer nikad necu pustiti busy
                    document.getElementById(selected[i]).style.backgroundColor="skyblue";
                counter=0;
                localStorage.setItem("counter", counter);//toString
                for(let i=0;i<4;i++) {                 
                    selected[i]="";            
                }
                localStorage.setItem("selected", selected);//toString
                current=0;
                localStorage.setItem("current", current);//toString
                localStorage.setItem("running", 0);
                let exited=document.getElementById("setupSpan");
                exited.innerHTML='<font size=\'2\' color = \'red\'> You left the map before adding a ship <font>';
                return;
            }
            str[i1]="busy";
            str[i2]="busy";
            str[i3]= "busy";
            str[i4]= "busy";
            for(let i=0;i<counter; i++) {
                
                document.getElementById(selected[i]).style.backgroundColor="darkgreen";
            }
            checkAvailableShips[0]--;
            localStorage.setItem("p2_big", checkAvailableShips[0]);
            localStorage.setItem(nizCOL[0],str);    //ili nizCOL[1], svejendo je, posto je ista kolona
            localStorage.setItem("counter", 0);
            localStorage.setItem("current", 0);
            localStorage.setItem("selected", selected);
            localStorage.setItem("running", 0);
            if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0)  
           {
            document.getElementById('next').innerHTML = 'Proceed to game';
            document.getElementById('next').className='btn btn-success';           
            localStorage.setItem('flag',2);
           }
            //localStorage.setItem("p1A",matrix1[0]);
            let place_success=document.getElementById("setupSpan");
            place_success.innerHTML='<font size=\'2\' color = \'green\'>Aircraft Carrier successfully placed<font>';
            return;

        } else if((nizROW[0]==nizROW[1])&&(nizROW[1]==nizROW[2])) {
            //moze i value da se poredi kod kolona, zbog ivica
            if((nizCOL[0].charAt(2)=='A' && nizCOL[3].charAt(2)=='H')||(nizCOL[0].charAt(2)=='B' && nizCOL[3].charAt(2)=='I')||(nizCOL[0].charAt(2)=='C' && nizCOL[3].charAt(2)=='J')||(nizCOL[0].charAt(2)=='H' && nizCOL[3].charAt(2)=='A')||(nizCOL[0].charAt(2)=='I' && nizCOL[3].charAt(2)=='B')||(nizCOL[0].charAt(2)=='C' && nizCOL[3].charAt(2)=='J')) {
            for(let i=0; i<counter;i++) //ne proveravam koju boju stavljam, jer nikad necu pustiti busy
                document.getElementById(selected[i]).style.backgroundColor="skyblue";
            counter=0;
            localStorage.setItem("counter", counter);//toString
        
            for(let i=0;i<4;i++) {
               
                selected[i]="";            
            }
            localStorage.setItem("selected", selected);//toString
            current=0;
            localStorage.setItem("current", current);//toString
            localStorage.setItem("running", 0);
            let exited=document.getElementById("setupSpan");
            exited.innerHTML='<font size=\'2\' color = \'red\'> You left the map before adding a ship <font>';
            return;
            }

            let str1 = localStorage.getItem(nizCOL[0]);
            str1 = str1.split(",");
            let str2 = localStorage.getItem(nizCOL[1]);
            str2 = str2.split(",");
            let str3 = localStorage.getItem(nizCOL[2]);
            str3 = str3.split(",");
            let str4 = localStorage.getItem(nizCOL[3]);
            str4=str4.split(",");
            let ind = (parseInt(nizROW[0])-1)%10; //moze i row 1, svejedno je
            str1[ind] = "busy";
            str2[ind] = "busy";
            str3[ind] = "busy";
            str4[ind] = "busy";
            localStorage.setItem(nizCOL[0], str1);
            localStorage.setItem(nizCOL[1], str2);
            localStorage.setItem(nizCOL[2], str3);
            localStorage.setItem(nizCOL[3], str4);
            for(let i=0;i<counter; i++) {
                document.getElementById(selected[i]).style.backgroundColor="darkgreen";
            }
            checkAvailableShips[0]--;
            localStorage.setItem("p2_big", checkAvailableShips[0]);
            localStorage.setItem("counter", 0);
            localStorage.setItem("current", 0);
            localStorage.setItem("selected", selected);
            localStorage.setItem("running", 0);   
            if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0)  
            {
                document.getElementById('next').innerHTML = 'Proceed to game';
            document.getElementById('next').className='btn btn-success';           
            localStorage.setItem('flag',2);
            }
            let place_success=document.getElementById("setupSpan");
            place_success.innerHTML='<font size=\'2\' color = \'green\'>Aircraft carrier successfully placed<font>';
            return;         
        }


    }


      //CANT FIT CRITETIA, RANDOM SHAPE

for(let i=0; i<counter;i++) 
{
    let sw = selected[i].split("_");
    let key = sw[0];
    let longstr = localStorage.getItem(key);
    longstr = longstr.split(",");
    if(longstr[(parseInt(sw[1])-1)%10]=='empty')
        document.getElementById(selected[i]).style.backgroundColor="skyblue";


}
//MENJAO

for(let i=0;i<counter;i++) {
    
    selected[i]="";   
          
}

//document.getElementById(selected[i]).style.backgroundColor="skyblue";

counter=0;
localStorage.setItem("counter", counter);//toString
localStorage.setItem("selected", selected);//toString
current=0;
localStorage.setItem("current", current);//toString
localStorage.setItem("running", 0);
let final=document.getElementById("setupSpan");
final.innerHTML='<font size=\'2\' color = \'red\'> You misshaped your boat <font>';


    

}




function setGameUp()  {

   
   //if(!localStorage.getItem('turn'))// {

      //  alert('usao');
    localStorage.setItem('turn', 1);
   // }


   localStorage.setItem('globalCounter1', 20);
   localStorage.setItem('globalCounter2', 20);
    let char = 'A';

for(let i = 0; i<10; i++ ) {
    for (let j = 0; j<10 ; j++) {  
        let field = document.getElementById('p1'+char+'_'+(j+1));//polje
        let key = 'p1'+char;
        let row = localStorage.getItem(key);
        row = row.split(",");
        if(row[j]=='busy')
            field.style.backgroundColor="darkgreen";
    }
    char = char.charCodeAt(0);
    char++;
    char = String.fromCharCode(char);
}

localStorage.setItem("p1_big", "1");
localStorage.setItem("p1_medium", "2");
localStorage.setItem("p1_small", "3");
localStorage.setItem("p1_xs", "4");


localStorage.setItem("p2_big", "1");
localStorage.setItem("p2_medium", "2");
localStorage.setItem("p2_small", "3");
localStorage.setItem("p2_xs", "4");



localStorage.setItem('counter1',0);
localStorage.setItem('counter2',0);
let arr = new Array(100);
for (let i = 0; i<100; i++)
        arr[i] = "";
localStorage.setItem("selected1", arr);
localStorage.setItem("selected2", arr);

localStorage.setItem('neighbours1', 0);
localStorage.setItem('neighbours2', 0);


//localStorage.setItem('cnt1', 0);
//localStorage.setItem('cnt2', 0);



}


function hit(input)  {

    if(localStorage.getItem('globalCounter1') == '0') 
    {
        alert ('The battle is over!');
        return;
    }

    
    if(localStorage.getItem('globalCounter2') == '0') 
    {
        alert ('The battle is over!');
        return;
    }
       

 

    if(input.id.charAt(1)=='2' && localStorage.getItem('turn')=='2') //p1 gadja 2, tako da je id 2, pa ne sme id da bude 2, kao ni turn
        return;
    if(input.id.charAt(1)=='1' && localStorage.getItem('turn')=='1') 
        return;
    let check = input.id.split('_');
    let key = check[0];
    let pos = (parseInt(check[1])-1)%10;
    let row = localStorage.getItem(key);
    row = row.split(",");
    let counter1 = localStorage.getItem('counter1');
    counter1 = parseInt(counter1);
    let counter2 = localStorage.getItem('counter2');
    counter2 = parseInt(counter2);
    let turn = localStorage.getItem('turn');
    let selected1 = localStorage.getItem('selected1');
    selected1 = selected1.split(',');
    let selected2 = localStorage.getItem('selected2');
    selected2 = selected2.split(',');

    if(row[pos] == 'miss') {
       let span = document.getElementById('span');
       span.innerHTML = 'You have already attacked this position!';
       return;
    }


    if(row[pos] == 'hit') {
        let span = document.getElementById('span');
        span.innerHTML = 'You have already sunk a ship in this position!';
        return;
     }
   


    if (row[pos]=='empty') {
        input.style.backgroundColor = 'navy';
        row[pos] = 'miss';
        localStorage.setItem(key, row);
        if (turn == '1' && counter1>0){
            localStorage.setItem('counter1', counter1);
            localStorage.setItem('selected1', selected1);
        }   
        if(turn == '1' && localStorage.getItem('neighbours1') == '0') {//ovo zeza
           localStorage.setItem('counter1', 0);
           // localStorage.setItem('selected1', selected1);  //da se ne sjebu brojaci ako pogodim polje, pa promasim negde random na tabli, zbog koherencje
        }
             //selected je svakako prazant ad
        if (turn == '2' && counter2>0) {
            localStorage.setItem('counter2', counter2);
            localStorage.setItem('selected2', selected2);       
        }
        if (turn == '2' && localStorage.getItem('neighbours2') == '0') {
            localStorage.setItem('counter2', 0);
           //localStorage.setItem('selected2', selected2);
        }
        if(turn == '1') {
            localStorage.setItem('turn', 2);
            document.getElementById('head').innerHTML = localStorage.getItem('p1') + ', please end your turn!';
        } //ili input.id.charAt(1) == 2, na tu foru
            
        else {
            localStorage.setItem('turn', 1);
            document.getElementById('head').innerHTML = localStorage.getItem('p2') + ', please end your turn!';
        }
            
        return;
    }


    if (row[pos]=='busy') {
        input.style.backgroundColor = 'red';
        row[pos] = 'hit';
        localStorage.setItem(key, row);

       
            if( turn == '1') {

                selected1[counter1] = input.id;

                counter1++;

                let gcount = localStorage.getItem('globalCounter1');

       
                gcount = parseInt(gcount);
                gcount--;
                //alert(gcount);
                if(gcount == 0) {
                    alert(localStorage.getItem('p1') + 'has won');
                         
                            let victory = document.getElementById('span');
                            victory.innerHTML = 'Congratulations, ' + localStorage.getItem('p1') +', you have won';
                            let button = document.getElementById('btn_wrapper');
                            let str = "<a href='battleship-setup.html'><button href = 'battleship-setup,html' type='button' class='btn btn-success text-center' id = 'change'> Play a new game!</button></a>";
                            button.innerHTML = str;
                            localStorage.setItem('globalCounter1', gcount);
                            

                    
                            return;
                }
                  
                localStorage.setItem('globalCounter1', gcount);



                let toCheck = new Array ();      
                let separated = input.id.split('_');
                let c = separated[0];
                let r = separated[1];
              
                r = (parseInt(r)-1)%10;
    
                if(c.charAt(2)=='A' && r == 0) {
                    let add = [];        
                                   
                    add.push('p2A_2');                                                        
                    add.push('p2B_1');
                    add.push('p2B_2');
    
                    for (let i = 0; i < add.length; i++) 
                        toCheck.push(add[i]);   
                }
    
                if (c.charAt(2)=='A' && r ==9)  {
                    let add = [];
                  
                    add.push('p2A_9');                 
                    add.push('p2B_9');
                    add.push('p2B_10');
                    for (let i = 0; i < add.length; i++)
                        toCheck.push(add[i]);
                       
                }
    
    
                
                if (c.charAt(2)=='A' && r !=9 && r!=0)  {
       
                    let add = [];
                   
                    add.push(c+"_"+(r+2));
                    add.push(c+"_"+(r));
                    add.push("p2B_"+(r+2));
                    add.push("p2B_"+(r));              
                    add.push('p2B_'+(r+1));
                   for (let i = 0; i < add.length; i++)
                        toCheck.push(add[i]);
                        
                }
    
    
                if( c.charAt(2)=='J' && r ==0) {
                    let add = [];
                    add.push('p2J_2');
                    add.push('p2I_1');
                    add.push('p2I_2');
                    for (let i = 0; i < add.length; i++)
                        toCheck.push(add[i]);
                        
                        
                }
    
    
                if( c.charAt(2)=='J' && r == 9) {
                    let add = [];                
                    add.push('p2J_9');
                    add.push('p2I_10');
                    add.push('p2I_9');
                    for (let i = 0; i < add.length; i++)
                        toCheck.push(add[i]);
                       
                }
    
    
    
                   
                if (c.charAt(2)=='J' && r !=9 && r!=0)  {
    
    
                    let add = [];
                    add.push(c+"_"+(r+2));
                    add.push(c+"_"+(r));
                    add.push("p2I_"+(r+2));
                    add.push("p2I_"+(r));
                    add.push('p2I_'+(r+1));
                    for (let i = 0; i < add.length; i++)
                        toCheck.push(add[i]);
                       
                }
    
    
                if (c.charAt(2)!='J' && c.charAt(2)!='A' && r==0)  {
    
                    let c_up, c_down;
                    let c_up_code = c.charCodeAt(2)-1;
                    c_up = 'p2' + String.fromCharCode(c_up_code);
                    let c_down_code = c.charCodeAt(2)+1;
                    c_down = 'p2' + String.fromCharCode(c_down_code);
    
                    let add = [];
                    add.push(c_up+"_"+(r+1));
                    add.push(c_down+"_"+(r+1));
                    add.push(c_up+"_"+(r+2));
                    add.push(c_down+"_"+(r+2));
                    add.push(c+'_'+(r+2));
                    for (let i = 0; i < add.length; i++)
                        toCheck.push(add[i]);
                        
                }
    
    
            
    
    
                if (c.charAt(2)!='J' && c.charAt(2)!='A' && r==9)  {
    
                    let c_up, c_down;
                    let c_up_code = c.charCodeAt(2)-1;
                    c_up = 'p2' +String.fromCharCode(c_up_code);
                    let c_down_code = c.charCodeAt(2)+1;
                    c_down = 'p2' + String.fromCharCode(c_down_code);
    
    
                    let add = [];
                    add.push(c_up+"_"+(r+1));
                    add.push(c_down+"_"+(r+1));
                    add.push(c_up+"_"+(r));
                    add.push(c_down+"_"+(r));
                    add.push(c+'_'+(r));
                    for (let i = 0; i < add.length; i++)
                        toCheck.push(add[i]);
                       
                }
    

    
                if (c.charAt(2)!='J' && c.charAt(2)!='A' && r!=0 && r!=9)  {
    
                    let c_up, c_down;
                    let c_up_code = c.charCodeAt(2)-1;
                    c_up = 'p2' +String.fromCharCode(c_up_code);
                    let c_down_code = c.charCodeAt(2)+1;
                    c_down = 'p2' + String.fromCharCode(c_down_code);
    
    
                    let add = [];
                    //gore
                        add.push(c_up+"_"+(r+1));
                    //dole
                        add.push(c_down+"_"+(r+1));
                    //gore levo
                        add.push(c_up+"_"+(r));
                    //dole levo
                        add.push(c_down+"_"+(r));
                    //levo
                        add.push(c+'_'+(r));
                    //gore desno
                        add.push(c_up+"_"+(r+2));
                    //dole desno
                        add.push(c_down+"_"+(r+2));
                    //desno
                        add.push(c+'_'+(r+2));
                    for (let i = 0; i < add.length; i++)
                    {
                        toCheck.push(add[i]);
                    }
                      
                }

                    //proveravam zauzete susede
                    let cur_neighbours = 0;
                    for (let i = 0; i<toCheck.length; i++) {
                        let split = toCheck[i].split("_");
                        let k = split[0];
                        let v = (parseInt(split[1])-1)%10;
                        let getRow = localStorage.getItem(k);
                        getRow = getRow.split(",");
                        if (getRow[v] == "busy") {
                            //MOGAO SAM I DA DOHVATIM BROJ< POVECAM PA NA KRAJU VRATIM, SVEJEDNO JE
                           // let neighbours1 = localStorage.getItem('neighbours1');
                           // alert(neighbours1);
                           // neighbours1 = parseInt(neighbours1);
                            //neighbours1++;
                            cur_neighbours++;
                            //localStorage.setItem('neighbours1',neighbours1);                                      
                        }             
                    }



                    let susedi = localStorage.getItem('neighbours1');
                    susedi = parseInt(susedi);
                    susedi += cur_neighbours;
    
                    if(counter1-susedi!=1) {

                        localStorage.setItem('counter1', counter1);
                        localStorage.setItem('selected1', selected1);
                        localStorage.setItem('neighbours1', susedi);
                       // localStorage.setItem('cnt1', cnt1);
                        //ne mora
                        localStorage.setItem('turn', turn);
                        return;   

                    }

    
                    if (counter1 == 1) {

                        let num = parseInt(localStorage.getItem('p2_xs'));
                        num--;
                        if (num==0) {
                            let span = document.getElementById('span');
                            span.innerHTML = 'You have sunk all of the enemy dinghies!';
                        }
                        else {
                            let span = document.getElementById('span');
                            span.innerHTML = 'You have sunk an enemy dinghy!';
                        }


                        //NE ZNAM ZASTO  NE RADI, POPRAVITI!!!

                        // let checkAvailableShips = [parseInt(localStorage.getItem("p2_big")), parseInt(localStorage.getItem("p2_medium")), parseInt(localStorage.getItem("p2_small")), 
                        // parseInt(localStorage.getItem("p2_xs"))];
                
                
                        // if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0 ) {
                            
                        //         let victory = document.getElementById('span');
                        //         victory.innerHTML = 'Congratulations, ' + localStorage.getItem('p1') +', you have won';
                        //         return;
                            
                           
                        // }


                        localStorage.setItem('p2_xs', num);
                        for(let i = 0; i<selected1.length; i++) 
                            selected1[i] = "";
                        localStorage.setItem('counter1', 0);
                        localStorage.setItem('selected1', selected1);
                        localStorage.setItem('neighbours1', 0);
                        return;
                    }

                    
                    if (counter1 == 2) {
                        let num = parseInt(localStorage.getItem('p2_small'));
                        num--;
                        if (num==0) {
                            let span = document.getElementById('span');
                            span.innerHTML = 'You have sunk all of the enemy speedboats!';
                        }
                        else {
                            let span = document.getElementById('span');
                            span.innerHTML = 'You have sunk an enemy speedboat!';
                        }



                        // let checkAvailableShips = [parseInt(localStorage.getItem("p2_big")), parseInt(localStorage.getItem("p2_medium")), parseInt(localStorage.getItem("p2_small")), 
                        // parseInt(localStorage.getItem("p2_xs"))];
                
                
                        // if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0 ) {
                            
                        //         let victory = document.getElementById('span');
                        //         victory.innerHTML = 'Congratulations, ' + localStorage.getItem('p1') +', you have won';
                        //         return;
                            
                           
                        // }


                        localStorage.setItem('p2_small', num);
                        for(let i = 0; i<selected1.length; i++) 
                            selected1[i] = "";
                        localStorage.setItem('counter1', 0);
                        localStorage.setItem('selected1', selected1);
                        localStorage.setItem('neighbours1', 0);
                        return;
                        
                    }


                    
                    if (counter1 == 3) {
                        let num = parseInt(localStorage.getItem('p2_medium'));
                        num--;
                        if (num==0) {
                            let span = document.getElementById('span');
                            span.innerHTML = 'You have sunk all of the enemy warships!';
                        }
                        else {
                            let span = document.getElementById('span');
                            span.innerHTML = 'You have sunk an enemy warship!';
                        }


                        // let checkAvailableShips = [parseInt(localStorage.getItem("p2_big")), parseInt(localStorage.getItem("p2_medium")), parseInt(localStorage.getItem("p2_small")), 
                        // parseInt(localStorage.getItem("p2_xs"))];
                
                
                        // if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0 ) {
                            
                        //         let victory = document.getElementById('span');
                        //         victory.innerHTML = 'Congratulations, ' + localStorage.getItem('p1') +', you have won';
                        //         return;
                            
                           
                        // }


                        localStorage.setItem('p2_medium', num);
                        for(let i = 0; i<selected1.length; i++) 
                            selected1[i] = "";
                        localStorage.setItem('counter1', 0);
                        localStorage.setItem('selected1', selected1);
                        localStorage.setItem('neighbours1', 0);
                        return;
                        
                    }


                    
                    if (counter1 == 4) {                     

                        let num = parseInt(localStorage.getItem('p2_big'));
                        num--;
                        if (num==0) {
                            let span = document.getElementById('span');
                            span.innerHTML = 'You have sunk the enemy aircraft carrier!';
                        }


                        // let checkAvailableShips = [parseInt(localStorage.getItem("p2_big")), parseInt(localStorage.getItem("p2_medium")), parseInt(localStorage.getItem("p2_small")), 
                        // parseInt(localStorage.getItem("p2_xs"))];
                
                
                        // if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0 ) {
                            
                        //         let victory = document.getElementById('span');
                        //         victory.innerHTML = 'Congratulations, ' + localStorage.getItem('p1') +', you have won';
                        //         return;
                            
                           
                        // }


                        localStorage.setItem('p2_big', num);
                        for(let i = 0; i<selected1.length; i++) 
                            selected1[i] = "";
                        localStorage.setItem('counter1', 0);
                        localStorage.setItem('selected1', selected1);
                        localStorage.setItem('neighbours1', 0);
                        return;
                        
                    }
      

            }

            //else

            if (turn == '2')  {



                selected2[counter2] = input.id;
                counter2++;
      
                let gcount = localStorage.getItem('globalCounter2');

       
                gcount = parseInt(gcount);
                gcount--;
                //alert(gcount);
                if(gcount == 0) {
                    alert(localStorage.getItem('p2') + 'has won');
                         
                            let victory = document.getElementById('span');
                            victory.innerHTML = 'Congratulations, ' + localStorage.getItem('p2') +', you have won';
                            let button = document.getElementById('btn_wrapper');
                            let str = "<a href='battleship-setup.html'><button href = 'battleship-setup,html' type='button' class='btn btn-success text-center' id = 'change'> Play a new game!</button></a>";
                            button.innerHTML = str;
                            localStorage.setItem('globalCounter2', gcount);
                            return;
                }
                  
                localStorage.setItem('globalCounter2', gcount);

                let toCheck = new Array ();      
                let separated = input.id.split('_');
                let c = separated[0];
                let r = separated[1];
              
                r = (parseInt(r)-1)%10;
    
                if(c.charAt(2)=='A' && r == 0) {
                    let add = [];                                           
                    add.push('p1A_2');                                                           
                    add.push('p1B_1');               
                    add.push('p1B_2');
    
                    for (let i = 0; i < add.length; i++) 
                        toCheck.push(add[i]);   
                }
    
                if (c.charAt(2)=='A' && r ==9)  {
                    let add = [];              
                    add.push('p1A_9');                
                    add.push('p1B_9');
                    add.push('p1B_10');
                    for (let i = 0; i < add.length; i++)
                        toCheck.push(add[i]);
                       
                }
    
    
                
                if (c.charAt(2)=='A' && r !=9 && r!=0)  {
    
    
                    let add = [];
                   
                        add.push(c+"_"+(r+2));
             
                        add.push(c+"_"+(r));
                  
                        add.push("p1B_"+(r+2));
               
                        add.push("p1B_"+(r));
                 
                        add.push('p1B_'+(r+1));
                   for (let i = 0; i < add.length; i++)
                        toCheck.push(add[i]);     
                }
    
    
                if( c.charAt(2)=='J' && r ==0) {
                    let add = [];                 
                    add.push('p1J_2');               
                    add.push('p1I_1');               
                    add.push('p1I_2');
                    for (let i = 0; i < add.length; i++)
                        toCheck.push(add[i]);                    
                }
    
    
                if( c.charAt(2)=='J' && r == 9) {
                    let add = [];
                 
                        add.push('p1J_9');
           
                        add.push('p1I_10');
                  
                        add.push('p1I_9');
                    for (let i = 0; i < add.length; i++)
                        toCheck.push(add[i]);
                       
                }
    
    
    
                   
                if (c.charAt(2)=='J' && r !=9 && r!=0)  {
    
    
                    let add = [];
                
                    add.push(c+"_"+(r+2));               
                    add.push(c+"_"+(r));                   
                    add.push("p1I_"+(r+2));           
                    add.push("p1I_"+(r));                 
                    add.push('p1I_'+(r+1));
                    for (let i = 0; i < add.length; i++)
                        toCheck.push(add[i]);
                       
                }
    
    
                if (c.charAt(2)!='J' && c.charAt(2)!='A' && r==0)  {
    
                    let c_up, c_down;
                    let c_up_code = c.charCodeAt(2)-1;
                    c_up = 'p1' + String.fromCharCode(c_up_code);
                    let c_down_code = c.charCodeAt(2)+1;
                    c_down = 'p1' + String.fromCharCode(c_down_code);
    
                    let add = [];                 
                    add.push(c_up+"_"+(r+1));             
                    add.push(c_down+"_"+(r+1));  
                    add.push(c_up+"_"+(r+2));               
                    add.push(c_down+"_"+(r+2));
                    add.push(c+'_'+(r+2));
                    for (let i = 0; i < add.length; i++)
                        toCheck.push(add[i]);
                        
                }
    
    
            
    
    
                if (c.charAt(2)!='J' && c.charAt(2)!='A' && r==9)  {
    
                    let c_up, c_down;
                    let c_up_code = c.charCodeAt(2)-1;
                    c_up = 'p1' +String.fromCharCode(c_up_code);
                    let c_down_code = c.charCodeAt(2)+1;
                    c_down = 'p1' + String.fromCharCode(c_down_code);
    
    
                    let add = [];                 
                    add.push(c_up+"_"+(r+1));               
                    add.push(c_down+"_"+(r+1));
                    add.push(c_up+"_"+(r));               
                    add.push(c_down+"_"+(r));          
                    add.push(c+'_'+(r));
                    for (let i = 0; i < add.length; i++)
                        toCheck.push(add[i]);
                       
                }
    
    
    
    
    
    
                if (c.charAt(2)!='J' && c.charAt(2)!='A' && r!=0 && r!=9)  {
    
                    let c_up, c_down;
                    let c_up_code = c.charCodeAt(2)-1;
                    c_up = 'p1' +String.fromCharCode(c_up_code);
                    let c_down_code = c.charCodeAt(2)+1;
                    c_down = 'p1' + String.fromCharCode(c_down_code);
    
    
                    let add = [];

                    add.push(c_up+"_"+(r+1));       
                    add.push(c_down+"_"+(r+1));           
                    add.push(c_up+"_"+(r));
                    add.push(c_down+"_"+(r));                   
                    add.push(c+'_'+(r));                
                    add.push(c_up+"_"+(r+2));                  
                    add.push(c_down+"_"+(r+2));                  
                    add.push(c+'_'+(r+2));
                    for (let i = 0; i < add.length; i++)
                        toCheck.push(add[i]);
  
                    
                      
                }
                
                    let cur_neighbours = 0;
                    //proveravam zauzete susede
                    for (let i = 0; i<toCheck.length; i++) {
                        let split = toCheck[i].split("_");
                        let k = split[0];
                        let v = (parseInt(split[1])-1)%10;
                        let getRow = localStorage.getItem(k);
                        getRow = getRow.split(",");
                        if (getRow[v] == "busy") {
                            cur_neighbours++;                                     
                        }             
                    }


                    let susedi = localStorage.getItem('neighbours2');
                    susedi = parseInt(susedi);
                    susedi += cur_neighbours;
                  
                    if(counter2-susedi!=1) {

                        localStorage.setItem('counter2', counter2);
                        localStorage.setItem('selected2', selected2);
                        localStorage.setItem('neighbours2', susedi);              
                        //ne mora
                        localStorage.setItem('turn', turn);
                        return;   

                    }

                    if (counter2 == 1) {
                        let num = parseInt(localStorage.getItem('p1_xs'));
                        num--;
                        if (num==0) {
                            let span = document.getElementById('span');
                            span.innerHTML = 'You have sunk all of the enemy dinghies!';
                        }
                        else {
                            let span = document.getElementById('span');
                            span.innerHTML = 'You have sunk an enemy dinghy!';
                        }
                        localStorage.setItem('p1_xs', num);
                        for(let i = 0; i<selected2.length; i++) 
                            selected2[i] = "";
                        localStorage.setItem('counter2', 0);
                        localStorage.setItem('selected2', selected2);
                        localStorage.setItem('neighbours2', 0);
                        return;
                    }

                    
                    if (counter2 == 2) {
                        let num = parseInt(localStorage.getItem('p1_small'));
                        num--;
                        if (num==0) {
                            let span = document.getElementById('span');
                            span.innerHTML = 'You have sunk all of the enemy speedboats!';
                        }
                        else {
                            let span = document.getElementById('span');
                            span.innerHTML = 'You have sunk an enemy speedboat!';
                        }
                        localStorage.setItem('p1_small', num);
                        for(let i = 0; i<selected2.length; i++) 
                            selected2[i] = "";
                        localStorage.setItem('counter2', 0);
                        localStorage.setItem('selected2', selected2);
                        localStorage.setItem('neighbours2', 0);
                        return;
                        
                    }


                    
                    if (counter2 == 3) {
                        let num = parseInt(localStorage.getItem('p1_medium'));
                        num--;
                        if (num==0) {
                            let span = document.getElementById('span');
                            span.innerHTML = 'You have sunk all of the enemy warships!';
                        }
                        else {
                            let span = document.getElementById('span');
                            span.innerHTML = 'You have sunk an enemy warship!';
                        }
                        localStorage.setItem('p1_medium', num);
                        for(let i = 0; i<selected2.length; i++) 
                            selected2[i] = "";
                        localStorage.setItem('counter2', 0);
                        localStorage.setItem('selected2', selected2);
                        localStorage.setItem('neighbours2', 0);
                        return;
                        
                    }


                    
                    if (counter2 == 4) {

                        let num = parseInt(localStorage.getItem('p1_big'));
                        num--;
                        if (num==0) {
                            let span = document.getElementById('span');
                            span.innerHTML = 'You have sunk the enemy aircraft carrier!';
                        }
                        localStorage.setItem('p1_big', num);
                        for(let i = 0; i<selected2.length; i++) 
                            selected2[i] = "";
                        localStorage.setItem('counter2', 0);
                        localStorage.setItem('selected2', selected2);
                        localStorage.setItem('neighbours2', 0);
                        return;
                        
                    }

                    // let checkAvailableShips = [parseInt(localStorage.getItem("p1_big")), parseInt(localStorage.getItem("p1_medium")), parseInt(localStorage.getItem("p1_small")), 
                    // parseInt(localStorage.getItem("p1_xs"))];
            
                    // if(checkAvailableShips[0]==0 && checkAvailableShips[1]==0 && checkAvailableShips[2]==0 && checkAvailableShips[3]==0 ) {
                       
                    //         let victory = document.getElementById('span');
                    //         victory.innerHTML = 'Congratulations, ' + localStorage.getItem('p2') +', you have won';
                    //         return;
                        
                       
                    // }
            }

    }


}
//HIT MENJA IGRACA< KAD SE PROMASI
function changePlayer()  {




    let player = localStorage.getItem('turn');

    //alert(player);
    if( player == '1') {//ovo je postavljeno u hit metodi i promasaju, znaci turn je onaj koji sad igra, dakle dohvatam od prethodnog i stavljam novom
        
        
        document.getElementById('head').innerHTML = localStorage.getItem('p1')+', make your move!';
        document.getElementById('span').innerHTML = ''; 
        
        let str = "";
        let substitute = document.getElementsByClassName('p1A_hit')[0];
        
        str =  "<td class = 'table_style' id='p2A_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_10' onclick = 'hit(this)'>&nbsp;</td>";
      
        substitute.innerHTML=str;     

        substitute = document.getElementsByClassName('p1B_hit')[0];
        str =  "<td class = 'table_style' id='p2B_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;

        substitute = document.getElementsByClassName('p1C_hit')[0];
        str =  "<td class = 'table_style' id='p2C_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;

        substitute = document.getElementsByClassName('p1D_hit')[0];
        str =  "<td class = 'table_style' id='p2D_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;

        substitute = document.getElementsByClassName('p1E_hit')[0];
        str =  "<td class = 'table_style' id='p2E_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;
        

        substitute = document.getElementsByClassName('p1F_hit')[0];
        str =  "<td class = 'table_style' id='p2F_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;


        substitute = document.getElementsByClassName('p1G_hit')[0];
        str =  "<td class = 'table_style' id='p2G_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;



        substitute = document.getElementsByClassName('p1H_hit')[0];
        str =  "<td class = 'table_style' id='p2H_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;
        

        substitute = document.getElementsByClassName('p1I_hit')[0];
        str =  "<td class = 'table_style' id='p2I_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;



        substitute = document.getElementsByClassName('p1J_hit')[0];
        str =  "<td class = 'table_style' id='p2J_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;


     


        let char = 'A';
      //  let num = 0;
      //  let strnum = '1';

        for (let i = 0; i<10; i++) {
            let data = localStorage.getItem('p2'+char);
            data = data.split(',');
            for( let j = 0; j<10; j++) {
                if(data[j]=='hit') {
                    let change = document.getElementById('p2'+char+'_'+(j+1));
                    change.style.backgroundColor = 'red';
                }
                if(data[j]=='miss') {
                    let change = document.getElementById('p2'+char+'_'+(j+1));
                    change.style.backgroundColor = 'navy';
                }

            }
            char = char.charCodeAt(0);
            char++;
            char = String.fromCharCode(char);
        }

     

        substitute = document.getElementById('p1A_view');
        str =  "<td class = 'table_style' id='p1A_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_10'>&nbsp;</td>";
        substitute.innerHTML=str; 



        substitute = document.getElementById('p1B_view');
        str =  "<td class = 'table_style' id='p1B_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_10'>&nbsp;</td>";
        substitute.innerHTML=str;

        substitute = document.getElementById('p1C_view');
        str =  "<td class = 'table_style' id='p1C_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_10'>&nbsp;</td>";
        substitute.innerHTML=str;

        substitute = document.getElementById('p1D_view');
        str =  "<td class = 'table_style' id='p1D_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_10'>&nbsp;</td>";
        substitute.innerHTML=str;

        substitute = document.getElementById('p1E_view');
        str =  "<td class = 'table_style' id='p1E_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_10'>&nbsp;</td>";
        substitute.innerHTML=str;
        

        substitute = document.getElementById('p1F_view');
        str =  "<td class = 'table_style' id='p1F_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_10'>&nbsp;</td>";
        substitute.innerHTML=str;


        substitute = document.getElementById('p1G_view');
        str =  "<td class = 'table_style' id='p1G_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_10'>&nbsp;</td>";
        substitute.innerHTML=str;



        substitute = document.getElementById('p1H_view');
        str =  "<td class = 'table_style' id='p1H_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_10'>&nbsp;</td>";
        substitute.innerHTML=str;
        

        substitute = document.getElementById('p1I_view');
        str =  "<td class = 'table_style' id='p1I_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_10'>&nbsp;</td>";
        substitute.innerHTML=str;



        substitute = document.getElementById('p1J_view');
        str =  "<td class = 'table_style' id='p1J_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_10'>&nbsp;</td>";
        substitute.innerHTML=str;




            char = 'A';
        //  let num = 0;
        //  let strnum = '1';
  
          for (let i = 0; i<10; i++) {
              let data = localStorage.getItem('p1'+char);
              data = data.split(',');
              for( let j = 0; j<10; j++) {
                  if(data[j]=='hit') {
                      let change = document.getElementById('p1'+char+'_'+(j+1));
                      change.style.backgroundColor = 'red';
                  }
                  if(data[j]=='busy') {
                      let change = document.getElementById('p1'+char+'_'+(j+1));
                      change.style.backgroundColor = 'darkgreen';
                  }

                  if(data[j]=='miss') {
                    let change = document.getElementById('p1'+char+'_'+(j+1));
                    change.style.backgroundColor = 'navy';
                }
  
              }
              char = char.charCodeAt(0);
              char++;
              char = String.fromCharCode(char);
          }

       


    }
    else {


        document.getElementById('head').innerHTML = localStorage.getItem('p2')+', make your move!';
        document.getElementById('span').innerHTML = ''; 
     
        let str = "";
        let substitute = document.getElementsByClassName('p1A_hit')[0];
        
        str =  "<td class = 'table_style' id='p1A_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1A_10' onclick = 'hit(this)'>&nbsp;</td>";
       
        substitute.innerHTML=str; 
        


        
      


        substitute = document.getElementsByClassName('p1B_hit')[0];
        str =  "<td class = 'table_style' id='p1B_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1B_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;

        substitute = document.getElementsByClassName('p1C_hit')[0];
        str =  "<td class = 'table_style' id='p1C_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1C_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;

        substitute = document.getElementsByClassName('p1D_hit')[0];
        str =  "<td class = 'table_style' id='p1D_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1D_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;

        substitute = document.getElementsByClassName('p1E_hit')[0];
        str =  "<td class = 'table_style' id='p1E_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1E_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;
        

        substitute = document.getElementsByClassName('p1F_hit')[0];
        str =  "<td class = 'table_style' id='p1F_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1F_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;


        substitute = document.getElementsByClassName('p1G_hit')[0];
        str =  "<td class = 'table_style' id='p1G_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1G_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;



        substitute = document.getElementsByClassName('p1H_hit')[0];
        str =  "<td class = 'table_style' id='p1H_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1H_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;
        

        substitute = document.getElementsByClassName('p1I_hit')[0];
        str =  "<td class = 'table_style' id='p1I_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1I_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;



        substitute = document.getElementsByClassName('p1J_hit')[0];
        str =  "<td class = 'table_style' id='p1J_1' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_2' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_3' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_4' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_5' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_6' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_7' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_8' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_9' onclick = 'hit(this)'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p1J_10' onclick = 'hit(this)'>&nbsp;</td>";
        substitute.innerHTML=str;


     


        let char = 'A';
      //  let num = 0;
      //  let strnum = '1';

        for (let i = 0; i<10; i++) {
            let data = localStorage.getItem('p1'+char);
            data = data.split(',');
            for( let j = 0; j<10; j++) {
                if(data[j]=='hit') {
                    let change = document.getElementById('p1'+char+'_'+(j+1));
                    change.style.backgroundColor = 'red';
                }
                if(data[j]=='miss') {
                    let change = document.getElementById('p1'+char+'_'+(j+1));
                    change.style.backgroundColor = 'navy';
                }

            }
            char = char.charCodeAt(0);
            char++;
            char = String.fromCharCode(char);
        }

     

        str="";
        substitute = document.getElementById('p1A_view');

        str =  "<td class = 'table_style' id='p2A_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2A_10'>&nbsp;</td>";
        substitute.innerHTML=str; 



        substitute = document.getElementById('p1B_view');
        str =  "<td class = 'table_style' id='p2B_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2B_10'>&nbsp;</td>";
        substitute.innerHTML=str;

        substitute = document.getElementById('p1C_view');
        str =  "<td class = 'table_style' id='p2C_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2C_10'>&nbsp;</td>";
        substitute.innerHTML=str;

        substitute = document.getElementById('p1D_view');
        str =  "<td class = 'table_style' id='p2D_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2D_10'>&nbsp;</td>";
        substitute.innerHTML=str;

        substitute = document.getElementById('p1E_view');
        str =  "<td class = 'table_style' id='p2E_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2E_10'>&nbsp;</td>";
        substitute.innerHTML=str;
        

        substitute = document.getElementById('p1F_view');
        str =  "<td class = 'table_style' id='p2F_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2F_10'>&nbsp;</td>";
        substitute.innerHTML=str;


        substitute = document.getElementById('p1G_view');
        str =  "<td class = 'table_style' id='p2G_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2G_10'>&nbsp;</td>";
        substitute.innerHTML=str;



        substitute = document.getElementById('p1H_view');
        str =  "<td class = 'table_style' id='p2H_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2H_10'>&nbsp;</td>";
        substitute.innerHTML=str;
        

        substitute = document.getElementById('p1I_view');
        str =  "<td class = 'table_style' id='p2I_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2I_10'>&nbsp;</td>";
        substitute.innerHTML=str;



        substitute = document.getElementById('p1J_view');
        str =  "<td class = 'table_style' id='p2J_1'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_2'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_3'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_4'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_5'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_6'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_7'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_8'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_9'>&nbsp;</td>";
        str += "<td class = 'table_style' id='p2J_10'>&nbsp;</td>";
        substitute.innerHTML=str;




            char = 'A';
        //  let num = 0;
        //  let strnum = '1';
  
          for (let i = 0; i<10; i++) {
              let data = localStorage.getItem('p2'+char);
              data = data.split(',');
              for( let j = 0; j<10; j++) {
                  if(data[j]=='hit') {
                      let change = document.getElementById('p2'+char+'_'+(j+1));
                      change.style.backgroundColor = 'red';
                  }
                  if(data[j]=='busy') {
                      let change = document.getElementById('p2'+char+'_'+(j+1));
                      change.style.backgroundColor = 'darkgreen';
                  }

                   if(data[j]=='miss') {
                     let change = document.getElementById('p2'+char+'_'+(j+1));
                     change.style.backgroundColor = 'navy';
                 }
  
              }
              char = char.charCodeAt(0);
              char++;
              char = String.fromCharCode(char);
          }



    }

}




