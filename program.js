window.addEventListener('load', watermarkF());

//programWatermarkSadrzaj => proJS
//let programWatermarkSadrzaj = document.querySelector('.programWatermarkSadrzaj');
//programWatermarkSadrzaj.addEventListener('load', watermarkF());

function watermarkF(){

    let proJS = document.createElement('div');
    document.body.appendChild(proJS);

    proJS.style.width = '70%';
    proJS.style.margin = '0 auto 0 auto';

    //a.target.removeEventListener(a.type, arguments.callee);
    let txtProJS = document.createElement('p');
    proJS.appendChild(txtProJS);
    txtProJS.textContent = 'Watermark tehnike | JavaScript';
    txtProJS.style.fontWeight = 'bold'; 
    //proJS.textContent = 'Watermark tehnike | JavaScript'; 
    
    //proJS.textContent = 'Watermark techniques | JavaScript'; 
    let opisA = document.createElement('p');

    /*
    let jezikSR = document.createElement('p');
    jezikSR.textContent = 'SR';
    proJS.appendChild(jezikSR);

    let jezikEN = document.createElement('p');
    jezikEN.textContent = 'EN';
    proJS.appendChild(jezikEN);
    */

    opisA.textContent = 'Prikaz menija za dodavanje watermarka: ';
    //opisA.textContent = 'Show watermark insertion menu: ';
    proJS.appendChild(opisA);

    //let meniA = document.createElement('class');
    let slikawA = document.createElement('img');
    let divSlikawA = document.createElement('div');
    proJS.appendChild(divSlikawA);

    divSlikawA.appendChild(slikawA);

    slikawA.src = 'ico/meniA.png';
    slikawA.style.padding = '0.5em';
    slikawA.style.border = '2px';
    slikawA.style.color = 'rgb(47, 38, 173)';
    slikawA.style.width = '2em';
    slikawA.style.borderRadius = '10px';
    slikawA.style.margin = '0 auto 0 auto';

    slikawA.addEventListener('mouseover', () => {
        slikawA.style.borderStyle = 'dotted';
    });

    slikawA.addEventListener('mouseout', () => {
        slikawA.style.borderStyle = 'dashed';
    });

    slikawAsl = new Image();

    //slikaAf()
    function slikaAf(a){

        a.target.removeEventListener(a.type, arguments.callee);

        /*divA */
        let divA = document.createElement('div');
        proJS.appendChild(divA);

        let wA = document.createElement('p');
        wA.textContent = 'Unesite originalnu sliku: ';
        //wA.textContent = 'Insert the original image: ';
        divA.appendChild(wA);

        let ulazA = document.createElement('input');
        ulazA.type = 'file';
        divA.appendChild(ulazA);

        let whrA = document.createElement('hr');
        whrA.width = 300;
        divA.appendChild(whrA);

        //let
        let wKanvasA = document.createElement('canvas');
        divA.appendChild(wKanvasA);

        //let
        let ctxWkanvasA = wKanvasA.getContext('2d');
    
        ulazA.addEventListener('change', function(){
            
            if(this.files && this.files[0]){

                slikawAsl.src = URL.createObjectURL(this.files[0]);

                slikawAsl.addEventListener('load', function(){

                    if(slikawAsl.width >= 1920){

                        wKanvasA.width = slikawAsl.width;
                        wKanvasA.height = slikawAsl.height;

                    } else {

                        wKanvasA.width = slikawAsl.width;
                        wKanvasA.height = slikawAsl.height;

                    }

                    //ctxWkanvasA.clearRect(0, 0, wKanvasA.width, wKanvasA.height);
                    ctxWkanvasA.drawImage(slikawAsl, 0, 0, wKanvasA.width, wKanvasA.height);

                    //Novo 7.10.2022. Pet.
                    //Prikaz podataka o slici
                    let whrWrez = document.createElement('hr');
                    whrWrez.width = 300;
                    divA.appendChild(whrWrez);

                    let wPod = document.createElement('p');
                    wPod.textContent = 'Osnovni podaci o slici:';
                    wPod.style.fontWeight = 'bold';
                    divA.appendChild(wPod);

                    let wRez = document.createElement('p');
                    wRez.textContent = 'Rezolucija ulazne slike: '
                    divA.appendChild(wRez);

                    let inpWrez = document.createElement('input');
                    inpWrez.value = `${wKanvasA.width} x ${wKanvasA.height} px`;
                    divA.appendChild(inpWrez);

                    let txtWbrPx = document.createElement('p');
                    txtWbrPx.textContent = 'Broj piksela ulazne slike: ';
                    divA.appendChild(txtWbrPx);

                    let inpWbrPx = document.createElement('input');
                    inpWbrPx.value = Number(wKanvasA.width * wKanvasA.height);
                    divA.appendChild(inpWbrPx);

                    /////////////////////////////

                    //Novo
                    let wA3 = document.createElement('p');
                    wA3.textContent = 'Vrednosti piksela ulazne slike: ';
                    //wA3.textContent = 'Input image pixel values: ';
                    divA.appendChild(wA3);

                    //let
                    pikseliWA = document.createElement('textarea');
                    pikseliWA.style.border = '2px dotted rgb(47, 38, 173)';
                    pikseliWA.style.borderRadius = '10px';
                    divA.appendChild(pikseliWA);

                    let whrA6 = document.createElement('hr');
                    whrA.width = 300;
                    divA.appendChild(whrA6); 

                    let pikseliWApikseli = ctxWkanvasA.getImageData(0, 0, wKanvasA.width, wKanvasA.height);
                    //console.log(pikseliWApikseli.data);

                    //Globalni niz - bez let
                    pikseliWAniz = new Array();

                    for(let i = 0; i < pikseliWApikseli.data.length; i++){
                        pikseliWAniz.push(pikseliWApikseli.data[i]);
                    };

                    pikseliWA.value = pikseliWAniz; 

                    let txtWbrPxWA = document.createElement('p');
                    txtWbrPxWA.textContent = 'Ukupno piksela: ';
                    divA.appendChild(txtWbrPxWA);

                    let wBrPxWA = document.createElement('input');
                    wBrPxWA.value = Number(pikseliWAniz.length / 4);
                    divA.appendChild(wBrPxWA);

                    //a
                    let wA4 = document.createElement('p');
                    //Novo | 14.3.2022. : test 512
                    wA4.textContent = 'Vrednosti prvih 512 piksela ulazne slike: ';
                    //wA4.textContent = 'Values the first 512 pixels of the input image: ';
                    divA.appendChild(wA4);

                    //let
                    pikseliWA512 = document.createElement('textarea');
                    pikseliWA512.style.border = '2px dotted rgb(47, 38, 173)';
                    pikseliWA512.style.borderRadius = '10px';
                    divA.appendChild(pikseliWA512);

                    let whrA7 = document.createElement('hr');
                    whrA7.width = 300;
                    divA.appendChild(whrA7); 

                    let pikseliWApikseli512 = ctxWkanvasA.getImageData(0, 0, wKanvasA.width, wKanvasA.height);
                    
                    //Globalni niz - bez let
                    pikseliWAniz512 = new Array();

                    //Novi test: 1024 umesto 256 => PSNR(1024) = 42dB PSNR(256) = 56
                    //Novi test #2 128 PSNR(128) = 61.77 dB
                    //Novi test #3 64 PSNR(64) = 66.55 dB
                    
                    //Novooo: 15.5.2022. | Test 64 => 512
                    for(let i = 0; i < 512; i++){
                        pikseliWAniz512.push(pikseliWApikseli512.data[i]);
                    };

                    pikseliWA512.value = pikseliWAniz512; 

                    let txtPikseliWAn = document.createElement('p');
                    txtPikseliWAn.textContent = 'Broj elemenata (piksela) ulaznog signala: ';
                    //txtPikseliWAn.textContent = 'Number of input signal elements (pixels): ';
                    divA.append(txtPikseliWAn);

                    let inpPikseliWAn = document.createElement('input');
                    inpPikseliWAn.value = pikseliWAniz512.length;
                    divA.appendChild(inpPikseliWAn);

                    let whrA1 = document.createElement('hr');
                    whrA1.width = 300;
                    divA.appendChild(whrA1);

                    //console.log(pikseliWAniz64);

                    //////////
                    /////////
                    //Aca 2.4.4 24.3.2022. Čet. | Test #1

                    let btnWnovaSlika = document.createElement('button');
                    divA.appendChild(btnWnovaSlika);
            
                    btnWnovaSlika.textContent = 'Nova slika';
                    //btnWnovaSlika.textContent = 'New image';
            
                    btnWnovaSlika.addEventListener('click', () => {
            
                        ulazA.value = '';
                        pikseliWA.value = '';
                        pikseliWA64.value = '';
                        ctxWkanvasA.clearRect(0, 0, wKanvasA.width, wKanvasA.height);
            
                        pkA.value = '';
            
                    });
            
                     /*divA */

                    //Obrisan veliki deo koda
                    //Novo 15.5.2022. 
                    /* => divBPSK */
                    let divBPSK = document.createElement('div');
                    proJS.appendChild(divBPSK);

                    let txtBPSKa = document.createElement('p');
                    txtBPSKa.textContent = ' Ulazni signal (za BPSK): ';
                    //txtBPSKa.textContent = ' Input signal (for BPSK): ';
                    divBPSK.appendChild(txtBPSKa);

                    let BPSKinpS = document.createElement('textarea');
                    BPSKinpS.value = pikseliWAniz512;
                    divBPSK.appendChild(BPSKinpS); 

                    let canvasBPSKa = document.createElement('canvas');
                    divBPSK.appendChild(canvasBPSKa);
        
                    const ctxBPSKa = canvasBPSKa.getContext('2d');
                    const BPSKaGraf = new Chart(ctxBPSKa, {
                    type: 'bar',
                    data: {
                        labels: pikseliWAniz512,
                        datasets: [{
                            label: 'Ulazni signal (za BPSK)',
                            data: pikseliWAniz512,
                            backgroundColor: [
                               'rgba(47, 38, 173, 1)',
                               'rgba(47, 38, 173, 1)',
                               'rgba(47, 38, 173, 1)'
                            ],
                            borderColor: [
                                'black'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        }
                    }
                    });

                    //BPSKaGraf.width = 500;

                    let txtBPSKaRZ = document.createElement('p');
                    txtBPSKaRZ.textContent = 'Pretvaranje niza ulaznog signala (za BPSK) u RZ niz: ';
                    //txtBPSKaRZ.textContent = 'Convert input signal (for BPSK) array to RZ array: ';
                    divBPSK.appendChild(txtBPSKaRZ);

                    let BPSKaRZ = document.createElement('textarea');
                    divBPSK.appendChild(BPSKaRZ);

                    BPSKaRZarray = new Array();
                    BPSKaRZarray = pikseliWAniz512.map(a => {

                        if(a > 0){
                            return 1;
                        } else if (a <= 0){
                            return 0;
                        }

                    });

                    BPSKaRZ.value = BPSKaRZarray;

                    let canvasBPSKaRZ = document.createElement('canvas');
                    divBPSK.appendChild(canvasBPSKaRZ);
        
                    const ctxBPSKaRZ = canvasBPSKaRZ.getContext('2d');
                    const BPSKaRZgraf = new Chart(ctxBPSKaRZ, {
                    type: 'bar',
                    data: {
                        labels: BPSKaRZarray,
                        datasets: [{
                            label: 'Ulazni signal (za BPSK) | RZ niz',
                            data: BPSKaRZarray,
                            backgroundColor: [
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)'
                            ],
                            borderColor: [
                                'black'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        }
                    }
                    });

                    let txtBPSKaNRZ = document.createElement('p');
                    txtBPSKaNRZ.textContent = 'Pretvaranje RZ niza u NRZ niz: ';
                    //txtBPSKaNRZ.textContent = 'Convert RZ array to NRZ array: ';
                    divBPSK.appendChild(txtBPSKaNRZ);

                    let BPSKaNRZ = document.createElement('textarea');
                    divBPSK.appendChild(BPSKaNRZ);
                    
                    BPSKaNRZarray = new Array();
                    BPSKaNRZarray = BPSKaRZarray.map(a => {

                        if(a > 0){
                            return 1;
                        } else if(a <=0){
                            return -1;
                        }
                    
                    });

                    BPSKaNRZ.value = BPSKaNRZarray;

                    let canvasBPSKaNRZ = document.createElement('canvas');
                    divBPSK.appendChild(canvasBPSKaNRZ);
        
                    const ctxBPSKaNRZ = canvasBPSKaNRZ.getContext('2d');
                    const BPSKaNRZgraf = new Chart(ctxBPSKaNRZ, {
                    type: 'bar',
                    data: {
                        labels: BPSKaNRZarray,
                        datasets: [{
                            label: 'Ulazni signal (za BPSK) | NRZ niz',
                            data: BPSKaNRZarray,
                            backgroundColor: [
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)'
                            ],
                            borderColor: [
                                'black'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        }
                    }
                    });

                    //Generisanje nosioca
                    let txtNosilac = document.createElement('p');
                    txtNosilac.textContent = 'Generisanje signala nosioca: ';
                    divBPSK.appendChild(txtNosilac);

                    let nosilacV = document.createElement('textarea');
                    divBPSK.appendChild(nosilacV);
                    
                    f = 5;
                    T = 1;
                    t = 0.05;
                    TT = 180; 
                    nn = (2 * Math.PI) / TT;
                    tta = new Array();
                    tt = new Array();

                    //f
                    let txtNosilac_f = document.createElement('p');
                    txtNosilac_f.textContent = 'Frekvencija nosioca: ';

                    divBPSK.appendChild(txtNosilac_f);

                    let inpNosilac_f = document.createElement('input');
                    inpNosilac_f.value = f;
                    divBPSK.appendChild(inpNosilac_f);

                    let hrNosilac_f = document.createElement('hr');
                    hrNosilac_f.width = 300;
                    divBPSK.appendChild(hrNosilac_f);

                    //T
                    let txtNosilac_TT = document.createElement('p');
                    txtNosilac_TT.textContent = 'Period: ';

                    divBPSK.appendChild(txtNosilac_TT);

                    let inpNosilac_TT = document.createElement('input');
                    inpNosilac_TT.value = TT;
                    divBPSK.appendChild(inpNosilac_TT);

                    let hrNosilac_TT = document.createElement('hr');
                    hrNosilac_TT.width = 300;
                    divBPSK.appendChild(hrNosilac_TT);

                    //phase
                    let txtNosilac_PI = document.createElement('p');
                    txtNosilac_PI.textContent = 'Faza [0, 2 Pi]: ';

                    divBPSK.appendChild(txtNosilac_PI);

                    let inpNosilac_PI = document.createElement('input');
                    inpNosilac_PI.value = `[0, 2Pi]`;
                    divBPSK.appendChild(inpNosilac_PI);

                    let hrNosilac_PI = document.createElement('hr');
                    hrNosilac_PI.width = 300;
                    divBPSK.appendChild(hrNosilac_PI);

                    //dt
                    let txtNosilac_dt = document.createElement('p');
                    txtNosilac_dt.textContent = 'Delta_t: ';

                    divBPSK.appendChild(txtNosilac_dt);

                    let inpNosilac_dt = document.createElement('input');
                    inpNosilac_dt.value = nn;
                    divBPSK.appendChild(inpNosilac_dt);

                    let hrNosilac_dt = document.createElement('hr');
                    hrNosilac_dt.width = 300;
                    divBPSK.appendChild(hrNosilac_dt);

                    for(let i = 0; i < TT; i+= nn){
                        tta.push(i);
                    }

                    console.log('tta: ', tta);

                    tt = tta.slice(1, 256 * 2 + 1);
                    console.log('tt: ', tt);

                    //dt
                    let txtNosilac_t = document.createElement('p');
                    txtNosilac_t.textContent = 'Vrednosti parametra t: ';
                    divBPSK.appendChild(txtNosilac_t);
                    
                    let hrNosilac_t = document.createElement('hr');
                    hrNosilac_t.width = 300;
                    divBPSK.appendChild(hrNosilac_t);
                    
                    let nosilac_t_d_v= document.createElement('textarea');
                    nosilac_t_d_v.value = tt;
                    divBPSK.appendChild(nosilac_t_d_v);

                    let hrNosilac_tA = document.createElement('hr');
                    hrNosilac_tA.width = 300;
                    divBPSK.appendChild(hrNosilac_tA);
                    
                    let txtNosilac_t_d = document.createElement('p');
                    txtNosilac_t_d.textContent = 'Broj vrednosti parametra t: ';
                    divBPSK.appendChild(txtNosilac_t_d);

                    let inpNosilac_t_d = document.createElement('input');
                    inpNosilac_t_d.value = tt.length;
                    divBPSK.appendChild(inpNosilac_t_d);

                    let hrNosilac_tA2 = document.createElement('hr');
                    hrNosilac_tA2.width = 300;
                    divBPSK.appendChild(hrNosilac_tA2);

                    nosilac = new Array();
                    nosilac = BPSKaNRZarray.map((x, y) => {

                        //return x * Math.sqrt(2/TT) * Math.cos(2 * Math.PI * f * tt[y]);
                        return x * Math.cos(2 * Math.PI * f * tt[y]);

                    });

                    nosilacV.value = nosilac;
                    console.log('nosilac: ', nosilac);

                    let canvasNosilac = document.createElement('canvas');
                    divBPSK.appendChild(canvasNosilac);
        
                    const ctxNosilac = canvasNosilac.getContext('2d');
                    const nosilacGraf = new Chart(ctxNosilac, {
                    type: 'bar',
                    data: {
                        labels: nosilac,
                        datasets: [{
                            label: 'Nosilac za BPSK modulaciju',
                            data: nosilac,
                            backgroundColor: [
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)'
                            ],
                            borderColor: [
                                'black'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        }
                    }
                    });

                    //BPSK signala
                    let txtBPSKmod= document.createElement('p');
                    txtBPSKmod.textContent = 'BPSK modulacija ulaznog signala:  ';
                    //txtBPSKmod.textContent = 'BPSK modulation of input signal:  ';
                    divBPSK.appendChild(txtBPSKmod);

                    let BPSKmodV = document.createElement('textarea');
                    divBPSK.appendChild(BPSKmodV);

                    BPSKmod = new Array();
                    BPSKmod = BPSKaNRZarray.map((a, b) => a * nosilac[b]);
                    BPSKmodV.value = BPSKmod;

                    console.log('BPSKmod: ', BPSKmod);

                    let canvasBPSKmod = document.createElement('canvas');
                    divBPSK.appendChild(canvasBPSKmod);
        
                    const ctxBPSKmod = canvasBPSKmod.getContext('2d');
                    const BPSKmodGraf = new Chart(ctxBPSKmod, {
                    type: 'bar',
                    data: {
                        labels: BPSKmod,
                        datasets: [{
                            label: 'BPSK modulisani (ulazni) signal',
                            data: BPSKmod,
                            backgroundColor: [
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)' 
                            ],
                            borderColor: [
                                'black'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        }
                    }
                    });
                    
                    canvasBPSKmod.style.width = 500;
                    canvasBPSKmod.style.height = 500;

                    //FHSS kod za širenje
                    let txtFHSSkod = document.createElement('p');
                    txtFHSSkod.textContent = 'FHSS kod: ';
                    //txtFHSSkod.textContent = 'FHSS code: ';
                    divBPSK.appendChild(txtFHSSkod);

                    let FHSSkodV = document.createElement('textarea');
                    divBPSK.appendChild(FHSSkodV);

                    //Kod za širenje
                    ///f1
                    const cA = (x) => {
                        return Math.cos(2 * (Math.PI / 8) * x * f)
                    };

                    //f2
                    const cB = (x) => {
                        return Math.cos(2 * (Math.PI / 17) * x * f)
                    };

                    //f3
                    const cC = (x) => {
                        return Math.cos(2 * (Math.PI / 35) * x * f)
                    };

                    //f4
                    const cD = (x) => {
                        return Math.cos(2 * (Math.PI / 89) * x * f)
                    };

                    let cAn = new Array();
                    let cBn = new Array();
                    let cCn = new Array();
                    let cDn = new Array();

                    //cAn
                    //16 => 64
                    for(let i = 0; i < (64 / 4) * 8; i++){
                        cAn.push(cA(i));
                    }

                    //cBn
                    for(let i = 0; i < (64 / 4) * 8; i++){
                        cBn.push(cB(i));
                    }

                    //cCn
                    for(let i = 0; i < (64 / 4) * 8; i++){
                        cCn.push(cC(i));
                    }

                    //cDn
                    for(let i = 0; i < (64 / 4) * 8; i++){
                        cDn.push(cD(i));
                    }

                    console.log('cAn: ', cAn);
                    console.log('cBn: ', cBn);
                    console.log('cCn: ', cCn);
                    console.log('cDn: ', cDn);

                    let FHSSkod = new Array();
                    FHSSkod = [].concat(cAn, cBn, cCn, cDn);

                    FHSSkodV.value = FHSSkod;
                    console.log('FHSS kod: ', FHSSkod);

                    let canvasFHSSkod = document.createElement('canvas');
                    divBPSK.appendChild(canvasFHSSkod);
        
                    const ctxFHSSkod = canvasFHSSkod.getContext('2d');
                    const FHSSkodGraf = new Chart(ctxFHSSkod, {
                    type: 'bar',
                    data: {
                        labels: FHSSkod,
                        datasets: [{
                            label: 'FHSS kod',
                            data: FHSSkod,
                            backgroundColor: [
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)' 
                            ],
                            borderColor: [
                                'black'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        }
                    }
                    });

                    //BPSK modulacija sa FHSS širenjem spektra
                    let txtBPSK_FHSS = document.createElement('p');
                    txtBPSK_FHSS.textContent = 'BPSK modulisani (ulazni) signal sa FHSS proširenim spektrom: ';
                    //txtBPSK_FHSS.textContent = 'BPSK modulated (input) signal with FHSS spread spectrum: ';
                    divBPSK.appendChild(txtBPSK_FHSS);

                    let BPSK_FHSSv = document.createElement('textarea');
                    divBPSK.appendChild(BPSK_FHSSv);

                    BPSK_FHSS = new Array();
                    BPSK_FHSS = BPSKmod.map((x, y) => {
                        return x * FHSSkod[y];
                    });

                    BPSK_FHSSv.value = BPSK_FHSS;

                    let canvasBPSK_FHSS = document.createElement('canvas');
                    divBPSK.appendChild(canvasBPSK_FHSS);
        
                    const ctxBPSK_FHSS = canvasBPSK_FHSS.getContext('2d');
                    const BPSK_FHSSgraf = new Chart(ctxBPSK_FHSS, {
                    type: 'bar',
                    data: {
                        labels: BPSK_FHSS,
                        datasets: [{
                            label: 'BPSK sa FHSS proširenim spektrom',
                            data: BPSK_FHSS,
                            backgroundColor: [
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)',
                                'rgba(47, 38, 173, 1)' 
                            ],
                            borderColor: [
                                'black'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        }
                    }
                    });

                    console.log('BPSK_FHSS: ', BPSK_FHSS);

                    /* <= divBPSK */

                    /*divA3 */
                    let divA3 = document.createElement('div');
                    proJS.appendChild(divA3);
                    
                    let wA2 = document.createElement('p');
                    wA2.textContent = 'Dodavanje watermarka: ';
                    //wA2.textContent = 'Watermark insertion: ';
                    divA3.appendChild(wA2);
                        
                    let btnWdodavanje = document.createElement('button');
                    btnWdodavanje.textContent = 'Dodavanje';
                    //btnWdodavanje.textContent = 'Insert';
                    divA3.appendChild(btnWdodavanje); 
                    
                    btnWdodavanje.addEventListener('click', () => {
                    
                        let dodavanjeT = document.createElement('p');
                        dodavanjeT.textContent = 'Slika sa dodatim (umetnutim) watermarkom: ';
                        //dodavanjeT.textContent = 'Image with watermark inserted: ';
                        divA3.appendChild(dodavanjeT); 
                        
                        //let
                        wKanvasA1 = document.querySelector('canvas');
                        divA3.appendChild(wKanvasA1);
            
                        if(slikawAsl.width >= 1920){
            
                            wKanvasA1.width = slikawAsl.width;
                            wKanvasA1.height = slikawAsl.height;
            
                        } else {
            
                            wKanvasA1.width = slikawAsl.width;
                            wKanvasA1.height = slikawAsl.height;
            
                        }
                        
                        sirina = slikawAsl.width;
                        visina = slikawAsl.height;
            
                        //console.log('Širina i visina su: ', sirina, visina);
                        //let
                        ctxWkanvasA1 = wKanvasA1.getContext('2d');
                        //console.log('Broj piksela ulazne slike je: ', pikseliWAniz.length);
            
                        slikaSaWatermarkomNiz = new Array();
            
                        slikaSaWatermarkomNizA1 = new Array();

                        //Novooo: 15.5.2022. 
                        //64 => 512
                        for(let i = 512; i < pikseliWAniz.length; i++){
                            slikaSaWatermarkomNizA1.push(pikseliWAniz[i]);
                        }

                        //Novoooo: proracunNizA => noviNizProracun
                        //console.log('Prvih 64 elemenata niza nakon proračuna nad pikselima: ', noviNizProracun);
                        //console.log('Elementi slike bez prvih 64 vrednosti piksela: ', slikaSaWatermarkomNizA1);
                        
                        //Novoooooo | 15.5.2022. 
                        noviNizProracun = pikseliWAniz512.map((x, y) => x - BPSK_FHSS[y]);
                        console.log('NoviNizProračun | 15.5.2022. : ', noviNizProracun);
                        
                        slikaSaWatermarkomNiz = [].concat(noviNizProracun, slikaSaWatermarkomNizA1);
                        slikaSaWatermarkomNizA = slikaSaWatermarkomNiz.slice(0, 4 * sirina * visina);

                        //console.log('Novi, sveobuhvatni niz slike sa umetnutim watermarkom: ', slikaSaWatermarkomNiz);
            
                        slikaSaWatermarkomNizU8C = new Uint8ClampedArray(slikaSaWatermarkomNizA);
                        //console.log('slikaSaWatermarkomNizU8C: ', slikaSaWatermarkomNizU8C);
            
                        slikaWslikaApodaci = new ImageData(slikaSaWatermarkomNizU8C, sirina, visina);
                        ctxWkanvasA1.putImageData(slikaWslikaApodaci, 0, 0);
            
                    });
                    
                    let btnWnoviUnos = document.createElement('button');
                    btnWnoviUnos.textContent = 'Novi unos';
                    //btnWnoviUnos.textContent = 'New input';
                    divA3.appendChild(btnWnoviUnos);
                    
                    btnWnoviUnos.addEventListener('click', () => {
                        window.location.reload(true);
                    });
            
                    /*divA3 */
                    let whrA4a = document.createElement('hr');
                    whrA4a.width = 300;
                    proJS.appendChild(whrA4a);
            
                    /*divA4 */
                    divA4 = document.createElement('div');
                    proJS.appendChild(divA4);
            
                    let wA6 = document.createElement('p');
                    wA6.textContent = 'Izvlačenje watermarka: ';
                    //wA6.textContent = 'Watermark extraction: ';
                    divA4.appendChild(wA6);

                    //let
                    let btnWizdvajanje = document.createElement('button');
                    btnWizdvajanje.textContent = 'Izvlačenje';
                    //btnWizdvajanje.textContent = 'Extract';
                    divA4.appendChild(btnWizdvajanje);

                    btnWizdvajanje.addEventListener('click', () => {
                        
                        //let
                        let divA4a = document.createElement('div');
                        divA4.appendChild(divA4a);

                        let txtWiz = document.createElement('p');
                        txtWiz.textContent = 'Vrednosti watermarka: ';
                        //txtWiz.textContent = 'Watermark value: ';
                        divA4a.appendChild(txtWiz);

                        let txtaWizdvajanje = document.createElement('textarea');
                        divA4a.appendChild(txtaWizdvajanje);

                        let wIzvlacenjeA = ctxWkanvasA1.getImageData(0, 0, wKanvasA1.width, wKanvasA1.height);
                        console.log('vIzvlacenjeNizA: ', wIzvlacenjeA);
                        let wWatermark = wIzvlacenjeA.data;

                        txtaWizdvajanje.value = wWatermark;

                    });

                    /*divA4 */
            
                    let whrA5 = document.createElement('hr');
                    whrA5.width = 300;
                    proJS.appendChild(whrA5);
            
                    /*divA5 */
                    divA5 = document.createElement('div');
                    proJS.appendChild(divA5);
                    
                    let wA7 = document.createElement('p');
                    wA7.textContent = 'Parametri za poređenje watermarka: ';
                    //wA7.textContent = 'Watermark comparasion parameters: ';
                    divA5.appendChild(wA7);
                    
                    let wA7a = document.createElement('p');
                    wA7a.style.fontWeight = 'bold';
                    wA7a.textContent = 'PSNR i SSIM ';
                    //wA7a.textContent = 'PSNR and SSIM ';
                    divA5.appendChild(wA7a);
                    /*divA5 */
            
                    let whrA6_ = document.createElement('hr');
                    whrA6_.width = 300;
                    proJS.appendChild(whrA6_);
            
                     /*divA6 */
                     //Izvlačenje watermarka
                    /*divA6 */
            
                    /*divA7 */
                    //Parametri za poređenje watermarka
                    divA6a = document.createElement('div');
                    proJS.appendChild(divA6a);
            
                    let btnWpodaci = document.createElement('button');
                    btnWpodaci.textContent = 'Podaci';
                    //btnWpodaci.textContent = 'Data';
                    divA6a.appendChild(btnWpodaci);
            
                    divA7 = document.createElement('div');
                    proJS.appendChild(divA7);
            
                    btnWpodaci.addEventListener('click', () => {
                        
                        //wtPSNR - ***********
                        let wtPSNR = document.createElement('p');
                        wtPSNR.textContent = 'Podaci o parametru PSNR: ';
                        //wtPSNR.textContent = 'PSNR parameter data: ';
                        wtPSNR.style.fontWeight = 'bold';
                        divA7.appendChild(wtPSNR);
            
                        let whrA6a1 = document.createElement('hr');
                        whrA6a1.width = 300;
                        divA7.appendChild(whrA6a1);
            
                        //dimSlika
                        dimSlika = slikawAsl.width * slikawAsl.height;
                        console.log('Širina slike: ', slikawAsl.width);
                        console.log('Visina slike: ', slikawAsl.height);
                        console.log('Dimenzija slika: ', dimSlika);
            
                        let wDimSlika = document.createElement('p');
                        wDimSlika.textContent = 'Dimenzije slike u pikselima: ';
                        //wDimSlika.textContent = 'Image dimensions in pixels: ';
                        divA7.appendChild(wDimSlika);
            
                        let inpDimSlika = document.createElement('input');
                        inpDimSlika.value = `${slikawAsl.width} x ${slikawAsl.height}`;
                        divA7.appendChild(inpDimSlika);
            
                        /*
                        let whrA6b = document.createElement('hr');
                        whrA6b.width = 300;
                        divA7.appendChild(whrA6b);
                        */
            
                        //S1
                        S1 = pikseliWAniz.reduce((a, b) => a + b, 0);
                        //console.log('S1 = ', S1);
            
                        let wS1 = document.createElement('p');
                        wS1.textContent = 'Zbir svih piksela ulazne slike: ';
                        //wS1.textContent = 'Sum of all pixels of the input image: ';
                        divA7.appendChild(wS1);
            
                        let inpS1 = document.createElement('input');
                        inpS1.value = S1;
                        divA7.appendChild(inpS1);
            
                        /*
                        let whrA7 = document.createElement('hr');
                        whrA7.width = 300;
                        divA7.appendChild(whrA7);
                        */
            
                        //S2
                        S2 = slikaSaWatermarkomNiz.reduce((a, b) => a + b, 0);
                        //console.log('S2 = ', S2);
            
                        let wS2 = document.createElement('p');
                        wS2.textContent = 'Zbir svih piksela slike sa watermarkom: ';
                        //wS2.textContent = 'Sum of all pixels of the watermarked image: ';
                        divA7.appendChild(wS2);
            
                        let inpS2 = document.createElement('input');
                        inpS2.value = S2;
                        divA7.appendChild(inpS2);
            
                        /*
                        let whrA8 = document.createElement('hr');
                        whrA8.width = 300;
                        divA7.appendChild(whrA8);
                        */
            
                        //srKvGr
                        srednjaKvadratnaGreska = (S1 - S2)**2 / dimSlika;
                        //console.log('Srednja kvadratna greška je: ', srednjaKvadratnaGreska);
            
                        //Novooo | Nova formula ta proračun srednje kvadratne greške | 10.3.2022. 
                        srKvGrNiz = new Array();
                        srKvGrNiz = pikseliWAniz.map((a, b) => (a - slikaSaWatermarkomNiz[b])**2);
                        srKvGrVr = srKvGrNiz.reduce((a, b) => a + b, 0);
                        srednjaKvadratnaGreskaA = srKvGrVr / dimSlika;
            
                        console.log('srKvGrNiz: ', srKvGrNiz);
                        console.log('srKvGrVr: ', srKvGrVr);
                        console.log('srednjaKvadratnaGreska: ', srednjaKvadratnaGreska);
                        console.log('srednjaKvadratnaGreskaA: ', srednjaKvadratnaGreskaA);
            
                        let wSrKvVr = document.createElement('p');
                        wSrKvVr.textContent = 'Srednja kvadratna greška: ';
                        //wSrKvVr.textContent = 'Mean square error - MSE: ';
                        divA7.appendChild(wSrKvVr);
            
                        let inpSrKv = document.createElement('input');
                        inpSrKv.value = srednjaKvadratnaGreska;
                        divA7.appendChild(inpSrKv);
            
                        /*
                        let whrA8a = document.createElement('hr');
                        whrA8a.width = 300;
                        divA7.appendChild(whrA8a);
                        */
            
                        //PSNR
                        PSNRv1 = 10 * Math.log10(255**2/ srednjaKvadratnaGreska);
                        PSNR = 10 * Math.log10(255**2/ srednjaKvadratnaGreskaA);
            
                        console.log('PSNRv1 = ', PSNRv1);
                        console.log('PSNR = ', PSNR);
            
                        let wPSNR = document.createElement('p');
                        wPSNR.textContent = 'Odnos signal-šum tj. PSNR: ';
                        //wPSNR.textContent = 'Peak Signal to Noise Ratio - PSNR: ';
                        divA7.appendChild(wPSNR);
            
                        let inpPSNR = document.createElement('input');
                        inpPSNR.value = PSNR;
                        divA7.appendChild(inpPSNR);
            
                        let whrA9 = document.createElement('hr');
                        whrA9.width = 300;
                        divA7.appendChild(whrA9);
                        
                        //wtSSIM - **********
                        let wtSSIM = document.createElement('p');
                        wtSSIM.textContent = 'Podaci o parametru SSIM: ';
                        //wtSSIM.textContent = 'SSIM parameter data: ';
                        wtSSIM.style.fontWeight = 'bold';
                        divA7.appendChild(wtSSIM);
            
                        let whrA10 = document.createElement('hr');
                        whrA10.width = 300;
                        divA7.appendChild(whrA10);
            
                        //luminentnost (osvetljaj/osvetljenost)
                        //luminentnost - x
                        
                        let Nx = pikseliWAniz.length;
            
                        let wNx = document.createElement('p');
                        wNx.textContent = 'Broj piksela originalne slike: ';
                        //wNx.textContent = 'The number of pixels in the original image: ';
                        divA7.appendChild(wNx);
            
                        let inpNx = document.createElement('input');
                        inpNx.value = Nx;
                        divA7.appendChild(inpNx);
            
                        /*
                        let whrA11 = document.createElement('hr');
                        whrA11.width = 300;
                        divA7.appendChild(whrA11);
                        */
            
                        //sumx
                        let sumx = pikseliWAniz.reduce((a, b) => a + b, 0);
            
                        let wsumx = document.createElement('p');
                        wsumx.textContent = 'Zbir piksela originalne slike: ';
                        //wsumx.textContent = 'Pixel sum of the original image: ';
                        divA7.appendChild(wsumx);
            
                        let inpSumx = document.createElement('input');
                        inpSumx.value = sumx;
                        divA7.appendChild(inpSumx);
            
                        //mix
                        let mix = (1 / Nx) * sumx; 
                        //console.log('Nx = ', Nx);
                        //console.log('sumx = ', sumx);
                        //console.log('mix = ', mix);
            
                        let wmix = document.createElement('p');
                        wmix.textContent = 'Osvetljenost (luminentost) originalne slike - mi(x): ';
                        //wmix.textContent = 'Original image luminence - mi(x): ';
                        divA7.appendChild(wmix);
            
                        let inpWmix = document.createElement('input');
                        inpWmix.value = mix;
                        divA7.appendChild(inpWmix);
            
                        //luminentnost - y
                        //Ny
                        let Ny = slikaSaWatermarkomNiz.length;
            
                        let wNy = document.createElement('p');
                        wNy.textContent = 'Broj piksela slike sa watermarkom: ';
                        //wNy.textContent = 'The number of pixels in the watermarked image: ';
                        divA7.appendChild(wNy);
            
                        let inpNy = document.createElement('input');
                        inpNy.value = Ny;
                        divA7.appendChild(inpNy);
            
                        //sumy
                        let sumy = slikaSaWatermarkomNiz.reduce((a, b) => a + b, 0);
            
                        let wsumy = document.createElement('p');
                        wsumy.textContent = 'Zbir svih piksela slike sa watermarkom: ';
                        //wsumy.textContent = 'The sum of all pixels of the watermarked image: ';
                        divA7.appendChild(wsumy);
            
                        let inpWsumy = document.createElement('input');
                        inpWsumy.value = sumy;
                        divA7.appendChild(inpWsumy);
            
                        //miy
                        let miy = (1 / Ny) * sumy;
                        //console.log('Ny = ', Ny);
                        //console.log('sumy = ', sumy);
                        //console.log('miy = ', miy);
            
                        let wmiy = document.createElement('p');
                        wmiy.textContent = 'Osvetljenost (luminentnost) slike sa watermarkom - mi(y): ';
                        //wmiy.textContent = 'Watermarked image luminence - mi(y): ';
                        divA7.appendChild(wmiy);
            
                        let inpWmiy = document.createElement('input');
                        inpWmiy.value = miy;
                        divA7.appendChild(inpWmiy);
            
                        //kontrast
                        //x
                        let sigmaxNiz = new Array();
            
                        sigmaxNiz = pikseliWAniz.map((a) => (a - mix)**2);
                        let sumaSigmaxNiz = sigmaxNiz.reduce((a, b) => a + b, 0);
            
                        //sigmax
                        let sigmax = Math.sqrt((1/(Nx - 1)) * sumaSigmaxNiz);
                        //console.log('Niz sigma(x): ', sigmaxNiz);
                        //console.log('Suma sigma(x) niz: ', sumaSigmaxNiz);
                        //console.log('sigma(x) = ', sigmax);
            
                        let wsigmax = document.createElement('p');
                        wsigmax.textContent = 'Kontrast originalne slike - sigma(x): ';
                        //wsigmax.textContent = 'Original image contrast - sigma(x): ';
                        divA7.appendChild(wsigmax);
            
                        let inpSigmax = document.createElement('input');
                        inpSigmax.value = sigmax;
                        divA7.appendChild(inpSigmax);
            
                        let C1, K1, L;

                        K1 = 1;
                        L = 255;
                        C1 = (K1 * L)**2;
                        console.log('C1 = ', C1);

                        //y
                        let sigmayNiz = new Array();
            
                        sigmayNiz = slikaSaWatermarkomNiz.map((a) => (a - miy)**2);
                        let sumaSigmayNiz = sigmayNiz.reduce((a, b) => a + b, 0);
            
                        //sigmay
                        let sigmay = Math.sqrt((1/(Ny - 1)) * sumaSigmayNiz);
                        //console.log('Niz sigma(y): ', sigmayNiz);
                        //console.log('Suma sigma(y) niz: ', sumaSigmayNiz);
                        //console.log('sigma(y) = ', sigmay);
            
                        let wsigmay = document.createElement('p');
                        wsigmay.textContent = 'Kontrast slike sa watermarkom - sigma(y): ';
                        //wsigmay.textContent = 'Watermarked image contrast - sigma(y): ';
                        divA7.appendChild(wsigmay);
            
                        let inpSigmay = document.createElement('input');
                        inpSigmay.value = sigmay;
                        divA7.appendChild(inpSigmay);
            
                        let C2, K2;
                        K2 = 2;
                        C2 = (K2 * L)**2;
                        console.log('C2 = ', C2);

                        //struktura
            
                        //funkcija za poređenje luminentnosti (osvetljenosti)
            
                        //funkcija za poređenje kontrasta
            
                        //funkcija za poređenje strukture
            
                        //standardna devijacija
                        //console.log('Nx = ', Nx);
                        //console.log('Ny = ', Ny);
                        xNiz = pikseliWAniz.map(a => a - mix, 0);
                        yNiz = slikaSaWatermarkomNiz.map(a => a - miy, 0);
            
                        //console.log('xNiz: ', xNiz);
                        //console.log('yNiz: ', yNiz);
            
                        let sumaXYniz = xNiz.map((a, b) => a * yNiz[b]);
                        //console.log('sumaXYniz: ', sumaXYniz); 
                        sumaXY = sumaXYniz.reduce((a, b) => a + b, 0);
                        //console.log('sumaXY = ', sumaXY);
            
                        //let sumaXY = sumaSigmaxNiz * sumaSigmayNiz;
            
                        //sigmaxy
                        let sigmaxy = (1/(Nx - 1)) * sumaXY;
                        //console.log('sigmaxy = ', sigmaxy);
            
                        let wsigmaxy = document.createElement('p');
                        wsigmaxy.textContent = 'Standardna devijacija datih slika - sigma(xy): ';
                        //wsigmaxy.textContent = 'Standard deviation of given images - sigma(xy): ';
                        divA7.appendChild(wsigmaxy);
            
                        let inpSigmaxy = document.createElement('input');
                        inpSigmaxy.value = sigmaxy;
                        divA7.appendChild(inpSigmaxy);
            
                        //SSIM
                        let SSIM = ((2 * mix * miy + C1) * (2 * sigmaxy + C2)) / ((mix**2 + miy**2 + C1) * (sigmax**2 + sigmay**2 + C2));
                        //console.log('SSIM = ', SSIM);
            
                        let wSSIM = document.createElement('p');
                        wSSIM.textContent = 'Indeks strukturalne sličnosti tj. SSIM: ';
                        //wSSIM.textContent = 'Structural Similarity Index - SSIM: ';
                        divA7.appendChild(wSSIM);
            
                        let inpSSIM = document.createElement('input');
                        inpSSIM.value = SSIM;
                        divA7.appendChild(inpSSIM);
            
                    });
            
                    /*divA7 */
                    

                    /////////
                    /////////

                });

            }

        });


    }
    
    slikawA.addEventListener('click', slikaAf);

}