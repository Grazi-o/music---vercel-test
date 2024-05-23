let m1 = document.getElementById("m1");

/* Música 1 */
function play_m1(){
    m1.play();

}

function pause_m1(){
    m1.pause();

}

function avancar_m1(){
    m1.currentTime += 15;

}

function voltar_m1(){
    m1.currentTime -= 15;

}
/* Música 1 */


/* Música 2 */
function play_m2(){
    m2.play();

}

function pause_m2(){
    m2.pause();

}

function avancar_m2(){
    m2.currentTime += 15;

}

function voltar_m2(){
    m2.currentTime -= 15;

}
/* Música 2 */


/* Música 3 */
function play_m3(){
    m3.play();

}

function pause_m3(){
    m3.pause();

}

function avancar_m3(){
    m3.currentTime += 15;

}

function voltar_m3(){
    m3.currentTime -= 15;

}
/* Música 3 */





/*  VOLUME  */
function volume_ma(){
    if (m1.volume < 0.9) {
        m1.volume += 0.1;
    } else {
        m1.volume = 1;
    }
    if (m2.volume < 0.9) {
        m2.volume += 0.1;
    } else {
        m2.volume = 1;
    }
    if (m3.volume < 0.9) {
        m3.volume += 0.1;
    } else {
        m3.volume = 1;
    }

} 
function volume_me(){
    if (m1.volume > 0.1) {
        m1.volume -= 0.1;
    } else {
        m1.volume = 0;
    }
    if (m2.volume > 0.1) {
        m2.volume -= 0.1;
    } else {
        m2.volume = 0;
    }
    if (m3.volume > 0.1) {
        m3.volume -= 0.1;
    } else {
        m3.volume = 0;
    }


} 
