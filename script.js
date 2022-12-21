
const hideAnswer = document.querySelector(".answer");
const showAnswer = document.querySelector(".arrow" );

hideAnswer.style.display= 'none';
showAnswer.addEventListener('click', function(){

    showAnswer.style.transform = 'rotate(180deg)';
    if(hideAnswer.style.display === 'none'){
        hideAnswer.style.display = 'block';
    }
    else{
    hideAnswer.style.display = 'none'
    showAnswer.style.transform = 'none';

 
    }
});

// // ---------------------------------------------------------------------2

// const hideAnswerB = document.querySelector("#answer2");
// const showAnswerB = document.querySelector("#arrow2" );

// hideAnswerB.style.display= 'none';
// showAnswerB.addEventListener('click', function(){

//     showAnswerB.style.transform = 'rotate(180deg)';
//     if(hideAnswerB.style.display === 'none'){
//         hideAnswerB.style.display = 'block';
//     }
//     else{
//     hideAnswerB.style.display = 'none'
//     showAnswerB.style.transform = 'none';

 
//     }
// });
// // ------------------------------------------------------------3
// const hideAnswer3 = document.querySelector("#answer3");
// const showAnswer3 = document.querySelector("#arrow3" );

// hideAnswer3.style.display= 'none';
// showAnswer3.addEventListener('click', function(){

//     showAnswer3.style.transform = 'rotate(180deg)';
//     if(hideAnswer3.style.display === 'none'){
//         hideAnswer3.style.display = 'block';
//     }
//     else{
//     hideAnswer3.style.display = 'none'
//     showAnswer3.style.transform = 'none';

 
//     }
// });
// // -----------------------------------------------------------------4
// const hideAnswer4 = document.querySelector("#answer4");
// const showAnswer4 = document.querySelector("#arrow4" );

// hideAnswer4.style.display= 'none';
// showAnswer4.addEventListener('click', function(){

//     showAnswer4.style.transform = 'rotate(180deg)';
//     if(hideAnswer4.style.display === 'none'){
//         hideAnswer4.style.display = 'block';
//     }
//     else{
//     hideAnswer4.style.display = 'none'
//     showAnswer4.style.transform = 'none';

 
//     }
// });
// // ------------------------------------------------------------------5
// const hideAnswer5 = document.querySelector("#answer5");
// const showAnswer5 = document.querySelector("#arrow5" );

// hideAnswer5.style.display= 'none';
// showAnswer5.addEventListener('click', function(){

//     showAnswer5.style.transform = 'rotate(180deg)';
//     if(hideAnswer5.style.display === 'none'){
//         hideAnswer5.style.display = 'block';
//     }
//     else{
//     hideAnswer5.style.display = 'none'
//     showAnswer5.style.transform = 'none';

 
//     }
// });



