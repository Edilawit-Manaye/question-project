// const btns= document.querySelectorAll(".question-btn");
// btns.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         const question=e.currentTarget.parentElement.parentElement
//         question.classList.toggle("show-text")
//     })

    
    
// })
const questions=document.querySelectorAll(".question")
questions.forEach(function(question){
    btns=question.querySelector(".question-btn")
    btns.addEventListener("click",function(){
        questions.forEach(function(type){
            if (type!==question){
                type.classList.remove("show-text")
            }

        })

        question.classList.toggle("show-text")




    })



})
















