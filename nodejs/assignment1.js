var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.acceptDetails = function (Prod) {
        this.productName = Prod.productName;
        this.productId = Prod.productId;
        this.productPrice = Prod.productPrice;
    };
    Product.prototype.print = function () {
        console.log("Product Id : " + this.productId);
        console.log("Product Name : " + this.productName);
        console.log("Product Price : " + this.productPrice);
    };
    return Product;
}());
var p = {
    productName: 'Mobile',
    productId: 1,
    productPrice: 22000
};
var product = new Product();
product.acceptDetails(p);
product.print();
