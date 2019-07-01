
var correct = 0;
var incorrect = 0;
var timer ;
var counter = 5;
var questions = [
    
    {
        question: "What PowerPuff Girl is pink ?",
        arr: ["Blossom", "Buttercup", "Bubbles"],
       correctAns :"Blossom"
    },
    {
        question: "What PowerPuff Girl is green ?",
        arr: ["Blossom", "Buttercup", "Bubbles"],
        correctAns :"Buttercup"
    }, 
    {
        question: "What PowerPuff Girl is blue ?",
        arr: ["Blossom", "Buttercup", "Bubbles"],
        correctAns : "Bubbles"
    } 
    ]

    var showResults=function(){
        clearInterval(timer)
        alert (
            "Time is over"
        )
     //show results
    }


$("#start").on("click", function(e){
$("#start").remove()
timer=setInterval(function(){
    counter --;
    if (counter===0){
 
 showResults();
 

    }
    $(".timer").text(counter)


},1000 )


for( var i =0; i< questions.length; i++){
    $("#quiz").append("<h2> "+questions[i].question +"</h2>")
    for ( var t = 0; t< questions[i].arr.length; t++){
        $("#quiz").append("<input type='radio' name= question"+i+ "value="+ questions[i].arr[t] +">"+ questions[i].arr[t] )

    }
}
$("#quiz").append("<button class='submit'> Submit </button>")
 })
$(document).on("click", ".submit", function(e){

})
