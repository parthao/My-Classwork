function all(valx, valy, resId, errorId, act) {
    var fromtxtx = document.getElementById(valx);
    var fromtxty = document.getElementById(valy);
    var fromtxtres = document.getElementById(resId);
    var errText = document.getElementById(errorId);

    if (fromtxtx.value != "" && fromtxty.value != "") {
        errText.innerHTML = ("");
        if (act == 'add11') 
        {
            fromtxtres.innerHTML = parseInt(fromtxtx.value) + parseInt(fromtxty.value);
        }
        if (act == 'sub11') 
        {
            fromtxtres.innerHTML = parseInt(fromtxtx.value) - parseInt(fromtxty.value);
        }
        if (act == 'mul11') 
        {
            fromtxtres.innerHTML = parseInt(fromtxtx.value) * parseInt(fromtxty.value);
        }

    }
    else {
        errText.innerHTML = ("Please Enter Both the values");
        fromtxtx.value = "";
        fromtxty.value = "";
        fromtxtres.innerHTML = "";
    }

}