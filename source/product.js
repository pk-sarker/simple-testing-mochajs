/**
 * Created by pijus on 2016-10-06.
 */

var productList = [];

var productModule = {
	getProducts: function(){
		return productList
	},
	saveProducts: function (product) {
		if(typeof product === "object" && product.constructor === Object){
			productList.push(product);
		}
		if(typeof product === "object" && product.constructor === Array){
			productList = productList.concat(product);
		}
	},
	
	getProductsByElement: function(element, value){
		var products = [];
		productList.map(function (product) {
			if(product[element]===value){
				products.push(product);
			}
		});
		return products;
	},
	resetProductList: function () {
		productList = [];
	},
	sortProducts: function(order, element){
		
	},
	printProducts: function () {
		productList.map(function (product, i) {
			console.log(i+". "+product.name+" | "+product.quantity+" "+product.unit+" | "+ product.type+" | "+product.brand);
		});
	}
};

module.exports = productModule;

