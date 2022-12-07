

let cursor = 1;

function prev() {
    let img = document.querySelector("#img-box");
    let dir = 'album/';
    if(cursor > 1){
        cursor -= 1;
        img.src = dir + cursor + '.jpeg';
        
    }

}

function next() {
    let img = document.querySelector("#img-box");
    let dir = 'album/';

    if(cursor < 20){
        cursor += 1;
        img.src = dir + cursor + '.jpeg';

    }

}