
    var wage=document.getElementById("Wage");
    var hiring=document.getElementById("Hiring");
    const comment=document.getElementById("Comment");
    const question=document.getElementById("Question");
    // console.log(wage);
    hiring.addEventListener("change",function(){
        if(hiring.checked)
    wage.style.display="unset";

    // if(!hiring.checked)
    // wage.style.display="none";
});

comment.addEventListener("change", function(){
    if(comment.checked) {
        wage.style.display="none";
    }

});

question.addEventListener("change", function(){
    if(question.checked) {
        wage.style.display="none";
    }

});
