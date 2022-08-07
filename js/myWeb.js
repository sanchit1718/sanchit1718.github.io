// $(document).ready(function($) {


// $("input[name='type']").click(function() {
// if($("#Hiring").is(":checked") ) {
//     $("#Wage").show();
// } else {
//     $("#Wage").hide();
// }

// });
// });

// $(document).ready(function($) {

//     Moved inside $(document).ready()
//     $("input[name='type']").click(function() {
//       if ($("#Hiring").is(":checked")) {
//         $("#Wage").show();
//       } else {
//         $("#Wage").hide();
//       }
//     });


// });
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
