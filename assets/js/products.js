

// CATEGORY NAVIGATIONS
$('#meats').show();
$('#seafoods').hide();
$('#spices').hide();
$('#vegetables').hide();

function setCss() {

}

$('#showMeats').click(() => {
    $('#meats').show();
    $('#seafoods').hide();
    $('#spices').hide();
    $('#vegetables').hide();

    $('#showMeats').removeClass('category_nav_action_button');
    $('#showMeats').addClass('active');

    $('#showSeafoods').removeClass('active');
    $('#showSeafoods').addClass('category_nav_action_button');

    $('#showSpices').removeClass('active');
    $('#showSpices').addClass('category_nav_action_button');

    $('#showVegetables').removeClass('active');
    $('#showVegetables').addClass('category_nav_action_button');

});
$('#showSeafoods').click(() => {
    $('#meats').hide();
    $('#seafoods').show();
    $('#spices').hide();
    $('#vegetables').hide();

    $('#showMeats').removeClass('active');
    $('#showMeats').addClass('category_nav_action_button');

    $('#showSeafoods').removeClass('category_nav_action_button');
    $('#showSeafoods').addClass('active');

    $('#showSpices').removeClass('active');
    $('#showSpices').addClass('category_nav_action_button');

    $('#showVegetables').removeClass('active');
    $('#showVegetables').addClass('category_nav_action_button');
});
$('#showSpices').click(() => {
    $('#meats').hide();
    $('#seafoods').hide();
    $('#spices').show();
    $('#vegetables').hide();

    $('#showMeats').removeClass('active');
    $('#showMeats').addClass('category_nav_action_button');

    $('#showSeafoods').removeClass('active');
    $('#showSeafoods').addClass('category_nav_action_button');

    $('#showSpices').removeClass('category_nav_action_button');
    $('#showSpices').addClass('active');

    $('#showVegetables').removeClass('active');
    $('#showVegetables').addClass('category_nav_action_button');
});
$('#showVegetables').click(() => {
    $('#meats').hide();
    $('#seafoods').hide();
    $('#spices').hide();
    $('#vegetables').show();

    $('#showMeats').removeClass('active');
    $('#showMeats').addClass('category_nav_action_button');

    $('#showSeafoods').removeClass('active');
    $('#showSeafoods').addClass('category_nav_action_button');

    $('#showSpices').removeClass('active');
    $('#showSpices').addClass('category_nav_action_button');

    $('#showVegetables').removeClass('category_nav_action_button');
    $('#showVegetables').addClass('active');
});




//CART  MODAL CONTROL
$('#cart_modal').hide();
// $('#container').hide();

$("#open_cart").click(() => {
    if (checkSession() == true) {
        $('#cart_modal').show();
        $('#container').hide();
    } else {
        swal("Open Cart", "You need to sign in to perform this action", {
            icon: "error",
            button: false,
            closeOnEsc: true
        });
    }
});

$('#close_modal').click(() => {
    $('#cart_modal').hide();
    $('#container').show();
});

// MODAL ACTIONS
$('#buy_items').click(() => {
    if (checkSession() == true) {
        $('#cart_modal').hide()
        var alerttxt = "Delivery Type: " + $('#delivery_type').val() + ", Total : $ " + $('#totalprice').val();
        swal("CART", alerttxt, {
            icon: "success",
            button: false,
            closeOnEsc: true
        });
        $('#container').show();
    } else {
        swal("Add to Cart", "You need to sign in to perform this action", {
            icon: "error",
            button: false,
            closeOnEsc: true
        });
    }
});



function addcart(product, price) {

    if (checkSession() == true)
    // if (sessionStorage.getItem('username') !== null)
    {
        var modal_items = parseInt($('#totalitems').val(), 10);
        modal_items = isNaN(modal_items) ? 0 : modal_items;
        modal_items++;
        $('#totalitems').val(modal_items);
        // var totalitems = modal_items;
        $('#totalprice').val(price * modal_items);
        // var totalprice = price * modal_items;
        let list_item = {
            product,
            price
        };

        var list = $('#append_here');
        list.append("<p> Product Name : " + list_item.product + " <br> Price : " + list_item.price + "</p > ");
        swal("Add to Cart", product + " has been added", {
            icon: "success",
            button: false,
            closeOnEsc: true
        });
    } else
    // 
    {
        swal("Add to Cart", "You need to sign in to perform this action", {
            icon: "error",
            button: false,
            closeOnEsc: true
        });

    }
}

function buyproduct(product, price) {
    if (sessionStorage.getItem('username') !== null) {
        swal("Purchase Success", product + " has been purchased for $" + price, {
            icon: "success",
            button: false,
            closeOnEsc: true
        });
    } else {
        swal("Add to Cart", "You need to sign in to perform this action", {
            icon: "error",
            button: false,
            closeOnEsc: true
        });
    }
}

function checkSession() {
    if (sessionStorage.length !== 0) {
        $('#logout').show();
        $('#myaccount').show();
        $('#open_cart').show();
        $('#btnin').hide();
        $('#btnout').hide();
        return true; // or 1
    } else {
        $('#logout').hide();
        $('#myaccount').hide();
        $('#open_cart').hide();
        $('#btnin').show();
        $('#btnout').show();
        return false; // or 0
    }
    return this;
}

checkSession();

setTimeout(() => {
    checkSession()
}, 200);



// $('#logout').click(() => {
//     $.ajax({
//         type: "POST",
//         url: "php/controller/UserController.php?logout",
//         success: function (response) {
//             swal("Logout", response, {
//                 icon: "warning",
//                 closeOnEsc: true,
//                 button: false
//             });
//             setTimeout(() => {
//                 checkSession();
//                 sessionStorage.clear();
//                 window.location.reload();
//             }, 200);
//         }
//     });
// });

$('#logout').click(() => {
    sessionStorage.clear();
    checkSession();
    sessionStorage.clear();
    window.location.reload();
});
