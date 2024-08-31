'use strict';

/**IDEAS TO BE ADDED
 * COMPUTER
 * UNDO AND ALLOW UNDO OPTION
 * SOUND 
 * LOGIN AND HENCE PLAY WITH OTHERS
 * r u sure u want to reset game
 */


//QUERY SELECTORS
let box=document.querySelectorAll(".b");
let player=document.querySelector(".player");
let tut=document.querySelector(".tut");
let over=document.querySelector(".overlay");
let tutor=document.querySelectorAll(".tutor");
let t1=document.querySelector(".t1");
let t2=document.querySelector(".t2");
let t3=document.querySelector(".t3");
let ba=document.querySelectorAll(".ba");
let bb=document.querySelectorAll(".bb");
let bc=document.querySelectorAll(".bc");
let closebtn1=document.querySelector(".close-modal1");
let closebtn2=document.querySelector(".close-modal2");
let newG=document.querySelector(".new");
let slide2=document.querySelector(".slide2");
let winner=document.querySelector(".winner");
let congoHead=document.querySelector(".congo-head");
let wins=document.querySelector(".wins");

//VARIABLES
let turn=1;
let blocked=0;
let blocked1=false;
let blocked2=false;
let blocked3=false;
let p=1;
let q=1;
let r=1;

const patterns=[
    //horizontle
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //vertical
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagonal
    [0,4,8],
    [2,4,6]
]


//FUNCTIONS
const showWinner=function(){
    winner.classList.remove("hidden");
    over.classList.remove("hidden");
    if(turn)congoHead.textContent=`Congratulations you won!!!`;
    else congoHead.textContent=`You lost!, Better luck next time`;
}
const comp=function(){
    if (blocked==3) return;
    const f=generateTurn();
    console.log(f);
    if(f<9)pressedA(ba[f]);
    else if(f<18)pressedB(bb[f-9]);
    else pressedC(bc[f-18]);
}
const pressedA=function(bx){
    if(blocked1){
        p=0;
        return;
    }
    bx.innerText='X';
    bx.disabled=true;
    for(let j=0;j<patterns.length;j++){
        let p1=ba[patterns[j][0]].innerText;
        let p2=ba[patterns[j][1]].innerText;
        let p3=ba[patterns[j][2]].innerText;
        if(p1!==""&&p2!==""&&p3!==""&&p1==p2&&p2==p3){
            blocked1=true;
            blocked++;
            for(let d=0;d<ba.length;d++){
                ba[d].classList.add("band");
            }
            if(blocked==3){
                for(let k=0;k<box.length;k++){
                    box[k].disabled=true;
                }
                showWinner();
            }
            break;
        }
    }
    turn=!turn;
}
const pressedB=function(bx){
    if(blocked2){
        q=0;
        return;
    }
    bx.innerText='X';
    bx.disabled=true;
    for(let j=0;j<patterns.length;j++){
        let p1=bb[patterns[j][0]].innerText;
        let p2=bb[patterns[j][1]].innerText;
        let p3=bb[patterns[j][2]].innerText;
        if(p1!==""&&p2!==""&&p3!==""&&p1==p2&&p2==p3){
            blocked2=true;
            blocked++;
            for(let d=0;d<bb.length;d++){
                bb[d].classList.add("band");
            }
            if(blocked==3){
                for(let k=0;k<box.length;k++){
                    box[k].disabled=true;
                }
                showWinner();
            }
            break;
        }
    }
    turn=!turn;
}
const pressedC=function(bx){
    if(blocked3){
        r=0;
        return;
    }
    bx.innerText='X';
    bx.disabled=true;
    for(let j=0;j<patterns.length;j++){
        let p1=bc[patterns[j][0]].innerText;
        let p2=bc[patterns[j][1]].innerText;
        let p3=bc[patterns[j][2]].innerText;
        if(p1!==""&&p2!==""&&p3!==""&&p1==p2&&p2==p3){
            blocked3=true;
            blocked++;
            for(let d=0;d<bc.length;d++){
                bc[d].classList.add("band");
            }
            if(blocked==3){
                for(let k=0;k<box.length;k++){
                    box[k].disabled=true;
                }
                showWinner();
            }
            break;
        }
    }
    turn=!turn;
}
const generateTurn=function(){
    if (blocked==3) return;
    while(true){
        let f = Math.trunc(Math.random() * 27) ;
        if((f<9&&!blocked1)||(f>=9&&f<18&&!blocked2)||(f>=18&&f<27&&!blocked3))return f;
    }
}

//DOM MANIPULATION
for (let i = 0; i < ba.length; i++) {
    ba[i].addEventListener('click', function() {
        pressedA(ba[i]);
        if(p)comp();
        if(blocked==3)showWinner();
    });
}
for (let i = 0; i < bb.length; i++) {
    bb[i].addEventListener('click', function() {
        pressedB(bb[i]);
        if(q)comp();
        if(blocked==3)showWinner();
    });
}
for (let i = 0; i < bc.length; i++) {
    bc[i].addEventListener('click', function() {
        pressedC(bc[i]);
        if(r)comp();
        if(blocked==3)showWinner();
    });
}
tut.addEventListener('click',()=>{
    over.classList.remove("hidden");
    tutor[0].classList.remove("hidden");
})
slide2.addEventListener('click',()=>{
    tutor[0].classList.add("hidden");
    tutor[1].classList.remove("hidden");
})
over.addEventListener('click',()=>{
    for(let i=0;i<tutor.length;i++){
        if(!tutor[i].classList.contains("hidden")){
            tutor[i].classList.add("hidden");
            over.classList.add("hidden");
        }
    }
});
document.addEventListener('keydown',(e)=>{
    for(let i=0;i<tutor.length;i++){
        if(e.key=='Escape'&&!tutor[i].classList.contains("hidden")){
            tutor[i].classList.add("hidden");
            over.classList.add("hidden");
        }
    }
});
closebtn1.addEventListener('click',()=>{
    for(let i=0;i<tutor.length;i++){
        if(!tutor[i].classList.contains("hidden")){
            tutor[i].classList.add("hidden");
            over.classList.add("hidden");
        }
    }
});
closebtn2.addEventListener('click',()=>{
    for(let i=0;i<tutor.length;i++){
        if(!tutor[i].classList.contains("hidden")){
            tutor[i].classList.add("hidden");
            over.classList.add("hidden");
        }
    }
});
newG.addEventListener('click',()=>{
    blocked=0;
    blocked1=false;
    blocked2=false;
    blocked3=false;
    for(let p=0;p<box.length;p++){
        box[p].innerText="";
        box[p].disabled=false;
        box[p].classList.remove("band");
    }
});
wins.addEventListener('click',()=>{
    winner.classList.add("hidden");
    over.classList.add("hidden");
});

