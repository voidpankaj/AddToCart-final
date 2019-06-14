var app = angular.module('myApp', []);


app.service("cartService", function(){

    cartItems=[];

    this.getItems=function()
    {
       return items = [{
            image : 'images/im1.jpeg', pid : '1', title : 'CARTA', price : 13,
            content : "The U.S. construction industry: labor shortages and implications."
         },
         {
            image : 'images/im2.jpeg', pid : '2', title : 'OFF-WHITE X”', price : 23,
            content : "Project management within the construction United States."
         },
         {
            image : 'images/im3.jpeg', pid : '3', title : 'OLLIE',price : 34,
            content : "The modular construction of the purpose built apartments."
         },
         {
            image : 'images/im4.jpeg', pid : '4', title : 'DAMN',price : 32,
            content : "The shortage of the constructions skills and the alternatives of recruitment."
         },
        //  {
        //     image : 'images/im5.jpeg', pid : '5', title : 'BODEGA',price : 51,
        //     content : "Barriers to construction contractors that want to implement sustainable construction."
        //  },
        //  {
        //     image : 'images/im6.jpeg', pid : '6', title : 'JUICERO',price : 57,
        //     content : "The construction industry: the adoption and development of safety culture."
        // }
        //  {
        //     image : 'images/im7.jpeg', pid : '7', title : 'BRANDLESS',price : 41,
        //     content : "Direct property and its role within investment funds"},
        //  {
        //     image : 'images/im8.jpeg', pid : '8', title : 'Wizard of Oz Dorothy',price : 47,
        //     content : "Waste management in the construction industry."}
        ];
    }
    this.getItem=function(pid){
        for(var i=0;i<items.length;i++){
            if(items[i].pid==pid)
                return items[i];
        }
        return {};
    }

    this.getCartItem=function(pid){
        for(var i=0;i<cartItems.length;i++){
            if(cartItems[i].pid==pid)
                return cartItems[i];
        }
        return {};
    }

    this.itemInCart=function(pid){
        for(var i=0;i<cartItems.length;i++){
            if(cartItems[i].pid==pid)
                return true
        }
        return false;
    }

    this.getIndexOfCartItems=function(pid)
    {
        for(var i=0;i<cartItems.length;i++){
            if(cartItems[i].pid==pid)
                return i;
        }
        return -1;
    }
    // add the item in the list
    this.addToCart=function(pid){
        var item = this.getItem(pid);
        if(item !== {}){
            if(!this.itemInCart(item.pid)){
                item.quantity = 1;
                cartItems.push(item);
            }
            else{
                this.plus(pid);
            }
        }else
        {
            alert("Not found");
        }
    }
    // delete the item from list
    this.removeFromCart=function(pid){
        var index=this.getIndexOfCartItems(pid);
       // debugger
        if(index!=-1)
        {
            cartItems.splice(index,1);
        }
        else
            alert('item not found');
    }
    // increment the count of item
    this.plus = function (pid) {
        var item = this.getCartItem(pid)
        if(item == {}){alert("not found"); return;}
        if(item.quantity < 10){
            item.quantity=item.quantity+1;
        }else
            alert('max limit exceeded');
    }
    // decrement the count of item
    this.min = function (pid) {

        var item = this.getCartItem(pid);
        if(item == {}){alert("not found"); return;}
        if(item.quantity > 1)
            item.quantity=item.quantity-1;
    }

    //calculate total cost
    this.getTotalCost=function(){

        var x=0;
        for(var i=0; i<cartItems.length ;i++){
            x=x+(cartItems[i].price*cartItems[i].quantity);
        }
        return x;
    }
    
    this.getCartItems=function(){

        return cartItems;
    }

});

