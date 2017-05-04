
window.onload = function() {
  //alert("window loaded");
  document.querySelector('form').onsubmit = function() {
    var name = $("#emailId").val();
    if (name) {
      return true;
    } else {
      alert("no email found");
      return false;
    }
  };
};
