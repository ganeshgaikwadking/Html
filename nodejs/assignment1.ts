class Product {
  productName: string;
  productId: number;
  productPrice: number;

  acceptDetails(Prod: IProduct) {
      this.productName = Prod.productName;
      this.productId = Prod.productId;
      this.productPrice = Prod.productPrice;
  }
  print() {
      console.log("Product Id : " + this.productId);
      console.log("Product Name : " + this.productName);
      console.log("Product Price : " + this.productPrice);
  }
}

interface IProduct {
  productName: string;
  productId: number;
  productPrice: number;

}
let pr = {
  productName: 'Mobile',
  productId: 1,
  productPrice: 22000
}

var product = new Product();
product.acceptDetails(pr);
product.print();