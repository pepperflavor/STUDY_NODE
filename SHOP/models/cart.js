const { json } = require('body-parser');
const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports = class Cart{
    static addProduct(id, productPrice){
        // 장바구니의 내용은 계속 유지
        // 같은 제품을 추가하면 이미 담겨있다는 알람 띄워주기
        // 장바구니 수량 추가
        fs.readFile(p, (err, fileContent) =>{
            let cart = {products : [], totalPrice : 0}
            // cart가 존재하지 않으면 생성
            if(!err){
                cart = JSON.parse(fileContent)
            }
            // 장바구니 추가한 제품이 이미 장바구니에 있는지 확인
            const exsistingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const exsistingProduct = cart.products[exsistingProductIndex];
            let updatedProduct;
            // 담기한 제품이 이미 있는거라면 해당 제품 수량 +1 해주기
            if(exsistingProduct){
                updatedProduct = {...exsistingProduct};
                updatedProduct.count = updatedProduct.count + 1;
                cart.products = [...cart.products];
                cart.products[exsistingProductIndex] = updatedProduct;
            }else{
                updatedProduct = { id: id, count: 1 };
                cart.products = [...cart.products, updatedProduct]
            }
            cart.totalPrice = cart.totalPrice + parseFloat(productPrice);

            // 변경사항 저장
            fs.writeFile(p, JSON.stringify(cart), (err) =>{
                console.log(err);
            })
        })
    }
}