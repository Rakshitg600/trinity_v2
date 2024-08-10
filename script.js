'use strict';


/**IDEAS TO BE ADDED
 * BLUR
 * COMPUTER
 * UNDO AND ALLOW UNDO OPTION
 * SOUND 
 * LOGIN AND HENCE PLAY WITH OTHERS
 * r u sure u want to reset game
 */


//VARIABLES
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

let turnO=1;
let blocked=0;
let blocked1=false;
let blocked2=false;
let blocked3=false;

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

const pressedA=function(bx){
    if(blocked1)return;
    bx.innerText='X';
    bx.disabled=true;
    if(turnO){
        player.textContent=`Player 2`;
    }
    else player.textContent=`Player 1`;
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
                //showWinner();
                console.log(`winner is ${turnO}`);
            }
            //blur the blocked table
            break;
        }
    }
    turnO=!turnO;
}
const pressedB=function(bx){
    if(blocked2)return;
    bx.innerText='X';
    bx.disabled=true;
    if(turnO){
        player.textContent=`Player 2`;
    }
    else player.textContent=`Player 1`;
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
                //showWinner();
                console.log(`winner is ${turnO}`);
            }
            //blur the blocked table
            break;
        }
    }
    turnO=!turnO;
}
const pressedC=function(bx){
    if(blocked3)return;
    bx.innerText='X';
    bx.disabled=true;
    if(turnO){
        player.textContent=`Player 2`;
    }
    else player.textContent=`Player 1`;
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
                //showWinner();
                console.log(`winner is ${turnO}`);
            }
            //blur the blocked table
            break;
        }
    }
    turnO=!turnO;
}


//DOM MANIPULATION
for (let i = 0; i < ba.length; i++) {
    ba[i].addEventListener('click', function() {
        pressedA(ba[i]);
    });
}
for (let i = 0; i < bb.length; i++) {
    bb[i].addEventListener('click', function() {
        pressedB(bb[i]);
    });
}
for (let i = 0; i < bc.length; i++) {
    bc[i].addEventListener('click', function() {
        pressedC(bc[i]);
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
    console.log("hello");
    turnO=!turnO;
    if(turnO){
        player.textContent=`Player 1`;
    }
    else player.textContent=`Player 2`;
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

