// save button to add value of input to local.set storage
// local strage.get text area
// display date /moment
//conditionally render colors for past present future 
$("#currentDay").text(moment().format("MMM Do,YYYY, hh"))
var currentTime = moment().hours()
$(".save-button").on("click",function() {
    var divid = $(this).parent().attr("id")
    var textvalue = $(this).siblings(".textValue").val()
    localStorage.setItem(divid,textvalue)
})

$("#9 .textValue").val(localStorage.getItem("9"))
$("#10 .textValue").val(localStorage.getItem("10"))
$("#11 .textValue").val(localStorage.getItem("11"))
$("#12 .textValue").val(localStorage.getItem("12"))
$("#13 .textValue").val(localStorage.getItem("13"))
$("#14 .textValue").val(localStorage.getItem("14"))
$("#15 .textValue").val(localStorage.getItem("15"))
$("#16 .textValue").val(localStorage.getItem("16"))
$("#17 .textValue").val(localStorage.getItem("17"))

function styleUpdate() {
    $(".time-block").each(function(){
      var divTime = $(this).attr("id")
      if(divTime < currentTime) {
          $(this).addClass("past")
      }
      else if (divTime == currentTime) {
          $(this).removeClass("past")
          $(this).addClass("present")
      }
      else if (divTime > currentTime) {
          $(this).removeClass("past present")
          $(this).addClass("future")
      }
    })
}
styleUpdate()