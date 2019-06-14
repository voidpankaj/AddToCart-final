var app = angular.module('myApp', []);


app.service("cartService", function(){

    cartItems=[];
    countOfItems=[];
    isShowDetails=[];
    isShowOthers=[];

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

    // add the item in the list
    this.addToCart=function(item){
        
        if(cartItems.indexOf(item)==-1){
        cartItems.push({info : item,count:1,state:true});
        countOfItems.push(1);
        // isShowDetails.push(true);
        // isShowOthers.push(false);
        }else
        {
            var index = cartItems.indexOf(item);
            this.plus(index);
        }
    }
    // delete the item from list
    this.removeFromCart=function(item){
        console.log(item);
        var index = cartItems.indexOf(item);
        cartItems.splice(index,1);
        countOfItems.splice(index,1);
        isShowDetails.splice(index,1);
        isShowOthers.splice(index,1);
    }
    
    // increment the count of item
    this.plus = function (i) {

        var x=countOfItems[i];
        //alert(x);
        if(x < 10){
            countOfItems[i]=x+1;
        }else
            alert('max limit exceeded');
    }
    // decrement the count of item
    this.min = function (i) {
        
        var x=countOfItems[i];
        if(x >1){
            countOfItems[i]=x-1;
        }
    }

    //calculate total cost
    this.getTotalCost=function(){

        var x=0;
        for(var i=0; i<cartItems.length ;i++){
            x=x+(cartItems[i].price*countOfItems[i]);
        }
        return x;
    }
    
    this.setTrue=function(i){

        //alert("set true");
        isShowDetails[i]=true;
        isShowOthers[i]=false;
    }

    this.setFalse=function(i){

        isShowDetails[i]=false;
        isShowOthers[i]=true;
    }

    this.getCartItems=function(){

        return cartItems;
    }

    this.getCountItemsList=function(){

        return countOfItems;
    }

    this.getShowDetailsList=function(){

        return isShowDetails;
    }

    this.getShowOthersList=function(){

        return isShowOthers;
    }
});


<div class="sideContainer">
		<div id="mySidenav">
			<div class="sidenav">
				<div class="cartHead">
					<b>Your shopping cart</b>
					<a class="closebtn" style="color: white;" ng-click="closeCart()">&times;</a>
				</div>

				<div class="row cartItems justify-content-around " style="margin-left: 10px;" ng-repeat="x in cartItems"
					ng-mouseover="setFalse($index)" ng-mouseleave="setTrue($index)">
					<div class="col-lg-3 item"><img src={{x.value[0].image}} class="img-thumbnail"></div>
					<div class="col-lg-9" ng-show=isShowDetails[$index] style="margin-top: 13px">
						<div class="row">
							<div class="col-lg-8 item" align="center">{{x[0].title}}</div>
							<div class="col-lg-3 item">&#36; {{x.price}}&nbsp; ({{countOfItems[$index]}})</div>
						</div>
					</div>
					<!-- <div class="col-lg-9" ng-hide=isShowDetails[$index] style="margin-top: 8px">
						<div class="row">
							<div class="col-lg-8 sym " align="center">
								<button type="button" class="btn btn-secondary" ng-click=min($index)>
									-</button>
								{{countOfItems[$index]}}
								<button type="button" class="btn btn-secondary" ng-click=plus($index)>
									+</button>
							</div>
							<div class="col-lg-2 item remove" style="margin-top:8px">
								<button type="button" class="btn  btn-outline-danger" ng-click=removeFromCart(x)>
									X
								</button>
							</div>
						</div>
					</div> -->
				</div>

				<div ng-show="cartItems.length" align="center">
					<hr size="10">
				</div>
				<div ng-show="cartItems.length" align="right" style="padding: 15px">
					<h4>Total : ${{getTotalCost()}}</h4>
				</div>
				<div ng-show=(cartItems.length) align="center">
					<button type="button" class="btn btn-outline-primary">
						Proceed To Checkout
					</button>
				</div>
				<!-- when cart is empty -->
				<div ng-show=!(cartItems.length) align="center">
					<br>
					Your cart is empty!!
					<br><br>
					<button type="button" class="btn btn-outline-primary" ng-click=closeCart()>
						Continue Shopping
					</button>
				</div>
			</div>
		</div>
	</div>

