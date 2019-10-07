function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  function getTotal(){
    var exsize = parseInt(document.getElementById("size").value);
    var excrust = parseInt(document.getElementById("crust").value);
    var extop = parseInt(document.getElementById("toppings").value);
    var examt = parseInt(document.getElementById("amt").value);
    var exTotal = ((exsize + excrust + extop) * examt);
    
    
    
    var amsize = parseInt(document.getElementById("size1").value);
    var amcrust = parseInt(document.getElementById("crust1").value);
    var amtop = parseInt(document.getElementById("toppings1").value);
    var amamt = parseInt(document.getElementById("amt1").value);
    var amTotal = ((amsize + amcrust + amtop) * amamt);
    
    
    var pchickenSize = parseInt(document.getElementById("size2").value);
    var pchickenCrust = parseInt(document.getElementById("crust2").value);
    var pchickenTop = parseInt(document.getElementById("toppings2").value);
    var pchickenAmt = parseInt(document.getElementById("amt2").value);
    var pchickenTotal = ((pchickenSize + pchickenCrust + pchickenTop) * pchickenAmt);
    
    
    var sizechitika = parseInt(document.getElementById("size3").value);
    var crustchitika = parseInt(document.getElementById("crust3").value);
    var topchitika = parseInt(document.getElementById("toppings3").value);
    var amtchitika = parseInt(document.getElementById("amt3").value);
    var totalchitika = ((sizechitika + crustchitika + topchitika) * amtchitika);
    
    var sizecreamy = parseInt(document.getElementById("size4").value);
    var crustcreamy = parseInt(document.getElementById("crust4").value);
    var topcreamy = parseInt(document.getElementById("toppings4").value);
    var amtcreamy = parseInt(document.getElementById("amt4").value);
    var totalcreamy = ((sizecreamy + crustcreamy + topcreamy) * amtcreamy);
    
    
    var hawaiiSize = parseInt(document.getElementById("size5").value);
    var hawaiiCrust = parseInt(document.getElementById("crust5").value);
    var hawaiiTop = parseInt(document.getElementById("toppings5").value);
    var hawaiiAmt = parseInt(document.getElementById("amt5").value);
    var hawaiiTotal = ((hawaiiSize + hawaiiCrust + hawaiiTop) * hawaiiAmt);
    
    
    var sizemar = parseInt(document.getElementById("size6").value);
    var crustmar = parseInt(document.getElementById("crust6").value);
    var topmar = parseInt(document.getElementById("toppings6").value);
    var amtmar = parseInt(document.getElementById("amt6").value);
    var totalmar = ((sizemar + crustmar + topmar) * amtmar);
    
    
    var sizemea = parseInt(document.getElementById("size7").value);
    var crustmea = parseInt(document.getElementById("crust7").value);
    var topmea = parseInt(document.getElementById("toppings7").value);
    var amtmea = parseInt(document.getElementById("amt7").value);
    var totalmea = ((sizemea + crustmea + topmea) * amtmea);
    
    
    var amtmea = parseInt(document.getElementById("amt7").value);
    var totallocation = ((sizemea + crustmea + topmea) * amtmea);
    
    var total = exTotal + amTotal + pchickenTotal + totalchitika + totalcreamy + hawaiiTotal + totalmar + totalmea +totallocation ;
    
    alert(total);
    }



  