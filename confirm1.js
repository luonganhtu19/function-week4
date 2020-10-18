function checkConfirm(answer){
    if (answer){
        answer="Me too, i love you!!";
    }else {
        answer="So sad, bye bye :(";
    }
    return answer;
}
function unit1() {
    let confirmAnswer=confirm("Do you like me")
    let result=checkConfirm(confirmAnswer);
    document.getElementById("output1").innerHTML=result;
}