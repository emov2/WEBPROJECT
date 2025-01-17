// <!-- sayfayi actigimizda menu kapanmasin diye -->


const sliderBoy = document.getElementById("boySlider");
const inputBoy = document.getElementById("boyKutu");

const sliderKilo = document.getElementById("kiloSlider");
const inputKilo = document.getElementById("kiloKutu");

const sliderYas = document.getElementById("yasSlider");
const inputYas = document.getElementById("yasKutu");

sliderBoy.oninput = function () {
    inputBoy.value = this.value;
}

inputBoy.oninput = function () {
    if (this.value >= 140 && this.value <= 210) {
        sliderBoy.value = this.value;
    }
    else if (this.value > 210) {
        this.value = 210;
        sliderBoy.value = this.value;
    }
}

sliderKilo.oninput = function () {
    inputKilo.value = this.value;
}

inputKilo.oninput = function () {
    if (this.value >= 40 && this.value <= 150) {
        sliderKilo.value = this.value;
    }
    else if (this.value > 150) {
        this.value = 150;
        sliderKilo.value = this.value;
    }
}

sliderYas.oninput = function () {
    inputYas.value = this.value;
}

inputYas.oninput = function () {
    if (this.value >= 13 && this.value <= 80) {
        sliderYas.value = this.value;
    }
    else if (this.value > 80) {
        this.value = 80;
        sliderYas.value = this.value;
    }
}



function calculate(){
    const kilo = parseInt(document.getElementById("kiloSlider").value);
    const boy = parseInt(document.getElementById("boySlider").value);
    const yas = parseInt(document.getElementById("yasSlider").value);
    const method = (document.getElementById("Mifflin").checked);
    const cinsiyet = (document.getElementById("Kadin").checked);

    if(!cinsiyet && !document.getElementById("Erkek").checked){
        alert("bir cinsiyet secin");
        return;
    }

    var actLevels = document.getElementsByName('activity');
    var actMultiplier;
    for(var i = 0; i < actLevels.length; i++){
        if(actLevels[i].checked){
            actMultiplier = parseFloat(actLevels[i].value);
        }

    }

    if(!actMultiplier){
        alert("bir aktivite seviyesi secin");
        return;
    }


    if(!document.getElementById("Mifflin").checked && !document.getElementById("Harris").checked){
        alert("bir hesap methodu secin");
        return;
    }
    if(method == 1){
        if(!cinsiyet){
            const man=5;
            let bmr = 10*kilo + 6.25*boy - 5*yas + man;
            results(bmr,actMultiplier);
        }
        else{
            const woman = 161;
            let bmr = 10*kilo + 6.25*boy - 5*yas - woman;
            results(bmr,actMultiplier);
        }
    }
    
    else{
        if(!cinsiyet){
            const man=88.362;
            let bmr = 13.397*kilo + 4.799*boy - 5.677 *yas + man;
            results(bmr,actMultiplier);
        }
        else{
            const woman = 447.593;
            let bmr = 9.247*kilo + 3.098*boy - 4.330*yas + woman;
            results(bmr,actMultiplier);
        }
    }
}

function results(bmr,activityLevel){

    document.getElementById("calorieRawp").innerHTML = bmr.toFixed(0);
    document.getElementById("calorieActivityp").innerHTML = (bmr*activityLevel).toFixed(0);
    document.getElementById("weightGainp").innerHTML = ((bmr*activityLevel)*1.1).toFixed(0);
    document.getElementById("weightMaintainp").innerHTML = ((bmr*activityLevel)*1).toFixed(0);
    document.getElementById("weightLossp").innerHTML = ((bmr*activityLevel)*0.9).toFixed(0);
}

// <!-- 1.25 for no activity -->
// <!-- 1.35 for somewhat  -->
// <!-- 1.50 for active -->
// <!-- 1.75 for much active -->

