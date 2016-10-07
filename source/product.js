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

/*productModule.saveProducts({name: "Milk", type: "Whole Milk", brand: "Neilson Dairy", quantity: 100, unit: "Pack"});
productModule.saveProducts({name: "Milk", type: "Partly Skimmed Milks", brand: "Beatrice Foods", quantity: 120, unit: "Pack"});
productModule.saveProducts({name: "Milk", type: "Skim Milk", brand: "Crown Dairy", quantity: 40, unit: "Pack"});
productModule.saveProducts({name: "Milk", type: "Skim Milk", brand: "Crown Dairy", quantity: 132.086, unit: "Gallon"});
productModule.saveProducts({name: "Milk", type: "Chocolate Milk", brand: "Lactel", quantity: 65, unit: "Pack"});
productModule.saveProducts({name: "Milk", type: "Organic Milk", brand: "Natrel", quantity: 79, unit: "Pack"});
productModule.saveProducts({name: "Milk", type: "Organic Milk", brand: "Natrel", quantity: 31.7006, unit: "Gallon"});
productModule.saveProducts({name: "Milk", type: "Buttermilk", brand: "Dairyland", quantity: 81, unit: "Pack"});
productModule.saveProducts({name: "Milk", type: "Unpasteurized Milk", brand: "Parmalat", quantity: 170, unit: "Pack"});
productModule.saveProducts({name: "Milk", type: "Unpasteurized Milk", brand: "Natrel", quantity: 79.2516, unit: "Gallon"});
productModule.saveProducts({name: "Milk", type: "Filtered Milk", brand: "Kawartha Dairy", quantity: 38, unit: "Pack"});
productModule.saveProducts({name: "Milk", type: "Filtered Milk", brand: "Kawartha Dairy", quantity: 52.8344, unit: "Gallon"});
productModule.saveProducts({name: "Milk", type: "Lactose-Free Milk", brand: "Ultima Foods", quantity: 91, unit: "Pack"});
productModule.saveProducts({name: "Milk", type: "Organic Milk", brand: "Amalgamated Dairies", quantity: 54, unit: "Pack"});
productModule.saveProducts({name: "Milk", type: "Organic Milk", brand: "Amalgamated Dairies", quantity: 44.9092, unit: "Gallon"});
productModule.saveProducts({name: "Milk", type: "Chocolate Milk", brand: "Gay Lea", quantity: 100, unit: "Pack"});
productModule.saveProducts({name: "Milk", type: "Chocolate Milk", brand: "Gay Lea", quantity: 184.92, unit: "Gallon"});

productModule.saveProducts({name: "Chocolate", type: "Milk Chocolate", brand: "Natrel", quantity: 90, unit: "Pack"});
productModule.saveProducts({name: "Chocolate", type: "Sweet Chocolate", brand: "Parmalat", quantity: 129, unit: "Pack"});
productModule.saveProducts({name: "Chocolate", type: "Dark Chocolate", brand: "Kawartha Dairy", quantity: 108, unit: "Pack"});
*/
//productModule.getProducts();

//productModule.printProducts();

module.exports = productModule;

