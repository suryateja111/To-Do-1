var number =1;
$(".submit-button").click(function() {
  //  alert($(".task-input").val());
  // .value with vanilla js .val() with jQuery

  if ($(".task-input").val() != "") {

    $(".items").append("<h2 class='item-text'>" +number +".   "+$(".task-input").val() + "</h2>");
    number++;
    $(".task-input").val("");
  } else {
    alert("Add a task before submitting");
  }
});
