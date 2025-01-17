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


const boxlar = document.getElementById("colors");
const calcButton = document.getElementById("calcButton");
const result = document.getElementById("result");
const tiptext = document.getElementById("tiptext");

calcButton.onclick =  function calculate(){
    var h = inputBoy.value/100;
    var m = inputKilo.value;
    var bmi = m / (h*h);
    result.innerHTML=bmi.toPrecision(3);
    // aktif classi varsa temizle
    for (let i = 0; i < boxlar.childElementCount; i++) {
        if(boxlar.children[i].classList.contains('active')){
            boxlar.children[i].classList.remove('active');
            boxlar.children[i].children[0].innerHTML = "";
        }
    }

    if(bmi < 18.5){
        boxlar.children[0].classList.add('active');
        boxlar.children[0].children[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`;
        tiptext.innerHTML = "Zayıfsınız, VKI değeriniz olması gerekenden düşük doktora başvurun.";
    }
    else if(bmi>=18.5 && bmi < 25){
        boxlar.children[1].classList.add('active');
        boxlar.children[1].children[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`;
        tiptext.innerHTML = "VKI değeriniz olması gereken aralıkta.";
    }

    else if(bmi>=25 && bmi < 30){
    boxlar.children[2].classList.add('active');
    boxlar.children[2].children[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`;
    tiptext.innerHTML = "Kilolusunuz, VKI değeriniz olması gerekenden yüksek doktora başvurun.";
}
    else if(bmi>=30 && bmi < 40){
    boxlar.children[3].classList.add('active');
    boxlar.children[3].children[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`;
    tiptext.innerHTML = "Obezsiniz, VKI değeriniz olması gerekenden çok yüksek doktora başvurun.";
}
    else if(bmi>=40){
        boxlar.children[4].classList.add('active');
        boxlar.children[4].children[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`;
        tiptext.innerHTML = "Morbid obezsiniz, VKI değeriniz olması gerekenden çok yüksek acilen doktora başvurun.";
    }



}
