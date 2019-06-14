app.controller('myCtrl', function ($scope,cartService) {

    $scope.search="";
    $scope.cartItems=cartService.cartItems;
    $scope.items = cartService.getItems();
    // add the item in the list
    $scope.addToCart=function(pid){

        cartService.addToCart(pid);
        $scope.cartItems=cartService.getCartItems();
        $scope.showCart();
    }
    // delete the item from list
    $scope.removeFromCart=function(pid){
       
        cartService.removeFromCart(pid);
       // $scope.cartItems=cartService.getCartItems();
    }
    
    // increment the count of item
    $scope.plus = function (pid) {

        cartService.plus(pid);
        //$scope.countOfItems=cartService.getCountItemsList();
    }
    // decrement the count of item
    $scope.min = function (pid) {
        
        cartService.min(pid);
    }

    //calculate total cost
    $scope.getTotalCost=function(){

        return cartService.getTotalCost();
    }
   
    $scope.showDetails=function(pid){
        var item = cartService.getCartItem(pid);
        item.isShowDetails = true
    }

    $scope.hideDetails=function(pid){
        var item = cartService.getCartItem(pid);
        item.isShowDetails = false
    }
     // open the card sidebar
     $scope.showCart=function() {
    
        // $scope.cartFlag=true;
        document.getElementById("mySidenav").style.right = "0px";
        document.getElementsByClassName("sideContainer")[0].classList.add("side_hidden");
        
    }
    // close the card sidebar
    $scope.closeCart=function() {
        document.getElementById("mySidenav").style.right = "-500px";
        document.getElementsByClassName("sideContainer")[0].classList.remove("side_hidden");       
    }
});