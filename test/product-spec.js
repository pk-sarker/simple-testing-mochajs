'use strict';
var expect = require('chai').expect;

describe('Product module loader', function() {
	it('should exist', function() {
		var productModule = require('../source/product.js');
		expect(productModule).to.not.be.undefined;
	});
});

describe('Product module initialization', function() {
	it('product list should empty', function() {
		var productModule = require('../source/product.js');
		expect(productModule.getProducts().length).equal(0);
	});
});


describe('Add Products', function() {
	it('save new product', function() {
		var productModule = require('../source/product.js');
		productModule.saveProducts({name: "Milk", type: "Whole Milk", brand: "Neilson Dairy", quantity: 100, unit: "Pack"});
		productModule.saveProducts({name: "Milk", type: "Partly Skimmed Milks", brand: "Beatrice Foods", quantity: 120, unit: "Pack"});
		
		expect(productModule.getProducts().length).equal(2);
		
		productModule.saveProducts([
			{name: "Chocolate", type: "Milk Chocolate", brand: "Natrel", quantity: 90, unit: "Pack"},
			{name: "Candy", type: "Gummy & Chewy", brand: "Beatrice Foods", quantity: 108, unit: "Pack"},
			{name: "Candy", type: "Rock Candy", brand: "Ultima Foods", quantity: 108, unit: "Pack"}
			]);
		expect(productModule.getProducts().length).equal(5);
	});
});

describe('Get Products', function() {
	
	before(function () {
		var productModule = require('../source/product.js');
		productModule.resetProductList();
		productModule.saveProducts([
			{name: "Milk", type: "Whole Milk", brand: "Neilson Dairy", quantity: 100, unit: "Pack"},
			{name: "Milk", type: "Partly Skimmed Milks", brand: "Beatrice Foods", quantity: 120, unit: "Pack"},
			{name: "Milk", type: "Skim Milk", brand: "Crown Dairy", quantity: 40, unit: "Pack"},
			{name: "Chocolate", type: "Milk Chocolate", brand: "Natrel", quantity: 67, unit: "Pack"},
			{name: "Milk", type: "Skim Milk", brand: "Crown Dairy", quantity: 132.086, unit: "Gallon"},
			{name: "Milk", type: "Chocolate Milk", brand: "Lactel", quantity: 65, unit: "Pack"},
			{name: "Candy", type: "Jelly Beans", brand: "Gay Lea", quantity: 34, unit: "Pack"},
			{name: "Milk", type: "Organic Milk", brand: "Natrel", quantity: 79, unit: "Pack"},
			{name: "Milk", type: "Organic Milk", brand: "Natrel", quantity: 31.7006, unit: "Gallon"},
			{name: "Milk", type: "Buttermilk", brand: "Dairyland", quantity: 81, unit: "Pack"},
			{name: "Chocolate", type: "Milk Chocolate", brand: "Dairyland", quantity: 57, unit: "Pack"},
			{name: "Milk", type: "Unpasteurized Milk", brand: "Parmalat", quantity: 170, unit: "Pack"},
			{name: "Milk", type: "Unpasteurized Milk", brand: "Natrel", quantity: 79.2516, unit: "Gallon"},
			{name: "Candy", type: "Rock Candy", brand: "Ultima Foods", quantity: 97, unit: "Pack"},
			{name: "Milk", type: "Filtered Milk", brand: "Kawartha Dairy", quantity: 38, unit: "Pack"},
			{name: "Milk", type: "Filtered Milk", brand: "Kawartha Dairy", quantity: 52.8344, unit: "Gallon"},
			{name: "Milk", type: "Lactose-Free Milk", brand: "Ultima Foods", quantity: 91, unit: "Pack"},
			{name: "Chocolate", type: "Milk Chocolate", brand: "Natrel", quantity: 99, unit: "Pack"},
			{name: "Milk", type: "Organic Milk", brand: "Amalgamated Dairies", quantity: 54, unit: "Pack"},
			{name: "Milk", type: "Organic Milk", brand: "Amalgamated Dairies", quantity: 44.9092, unit: "Gallon"},
			{name: "Candy", type: "Jelly Beans", brand: "Kawartha Dairy", quantity: 45, unit: "Pack"},
			{name: "Milk", type: "Chocolate Milk", brand: "Gay Lea", quantity: 100, unit: "Pack"},
			{name: "Milk", type: "Chocolate Milk", brand: "Gay Lea", quantity: 184.92, unit: "Gallon"},
			{name: "Chocolate", type: "Milk Chocolate", brand: "Natrel", quantity: 90, unit: "Pack"},
			{name: "Chocolate", type: "Dark Chocolate", brand: "Kawartha Dairy", quantity: 108, unit: "Pack"},
			{name: "Candy", type: "Lollipops and Suckers", brand: "Crown Dairy", quantity: 108, unit: "Pack"},
			{name: "Candy", type: "Jelly Beans", brand: "Gay Lea", quantity: 108, unit: "Pack"},
			{name: "Candy", type: "Gummy & Chewy", brand: "Beatrice Foods", quantity: 108, unit: "Pack"},
			{name: "Chocolate", type: "Sweet Chocolate", brand: "Parmalat", quantity: 129, unit: "Pack"},
			{name: "Candy", type: "Rock Candy", brand: "Ultima Foods", quantity: 108, unit: "Pack"}
			]);
		
			
	});
	
	
	it('get all products', function () {
		var productModule = require('../source/product.js');
		expect(productModule.getProducts().length).equal(30);
	});
	
	it('get products by name', function () {
		var productModule = require('../source/product.js');
		expect(productModule.getProductsByElement("name", "Milk").length).equal(17);
		expect(productModule.getProductsByElement("name", "Chocolate").length).equal(6);
		expect(productModule.getProductsByElement("name", "Candy").length).equal(7);
	});
	
	it('get products by type', function () {
		var productModule = require('../source/product.js');
		
		expect(productModule.getProductsByElement("type", "Chocolate Milk").length).equal(3);
		expect(productModule.getProductsByElement("type", "Organic Milk").length).equal(4);
		expect(productModule.getProductsByElement("type", "Sweet Chocolate").length).equal(1);
	});
	
	it('get products by brand', function () {
		var productModule = require('../source/product.js');
		expect(productModule.getProductsByElement("brand", "Ultima Foods").length).equal(3);
		expect(productModule.getProductsByElement("brand", "Neilson Dairy").length).equal(1);
		expect(productModule.getProductsByElement("brand", "Gay Lea").length).equal(4);
		expect(productModule.getProductsByElement("brand", "Kawartha Dairy").length).equal(4);
		
	});
	
});