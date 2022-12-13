function readmoreserv(a) {
    document.getElementById('services_card_preparations').classList.toggle('clamp');
    if (a.innerText == "Readmore") {
        a.innerText = "Readless";
    } else {
        a.innerText = "Readmore"
    }
}
function readmoredel(a) {
    document.getElementById('services_card_delivery').classList.toggle('clamp');
    if (a.innerText == "Readmore") {
        a.innerText = "Readless";
    } else {
        a.innerText = "Readmore"
    }
}



function checkSession() {
    if (sessionStorage.length !== 0) {
        $('#logout').show();
        // $('#myaccount').show();
        $('#open_cart').show();
        $('#btnin').hide();
        $('#btnout').hide();
        // return true; // or 1
    } else {
        $('#logout').hide();
        // $('#myaccount').hide();
        $('#open_cart').hide();
        $('#btnin').show();
        $('#btnout').show();
        // return false; // or 0
    }
    // return this;
}

setTimeout(() => {
    checkSession()
}, 200);



$('#logout').click(() => {
    sessionStorage.clear();
    checkSession();
    sessionStorage.clear();
    window.location.reload();
});
