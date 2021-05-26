// save button to add value of input to local.set storage
// local strage.get text area
// display date /moment
//conditionally render colors for past present future 
$("#currentDay").text(moment().format("MMM Do,YYYY, hh"))

$(".save-button").on("click",function() {
    var divid = $(this).parent().attr("id")
    var textvalue = $(this).siblings(".textValue").val()
    localStorage.setItem(divid,textvalue)
})

$("#9 .textValue").val(localStorage.getItem("9"))