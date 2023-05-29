var getPromo = $("#get-promo");
var showPromo = $("#show-div");

showPromo.hide();
getPromo.click(function(event) {
    event.preventDefault();
    showPromo.show();
    getPromo.hide();
});

console.log("helllo");