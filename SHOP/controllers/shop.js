const Product = require('../models/product_local');
const Cart = require('../models/cart')


exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Product',
      path: '/products',
    });
  });
};

exports.getProduct = (req, res, next) =>{
  const productId = req.params.productId;
  Product.findById(productId, product => {
    res.render('shop/product-detail', {
      product: product, 
      pageTitle : product.title, 
      path: '/products' }); // detail 페이지에서 product.title 이런식으로 상품 속성에 엑세스 하고 있기 때문에 product가 무엇인지 설정해줘야한다
      // 그리고 경로를 설정해줘야 함!! navigation.ejs에서 경로를 구분하는 부분을 보면 products가 활성화되었는지 확인하는 부분이 있다.
      // 상품의 상세 화면이니까 products로 해도 ㄱㅊ함
  })
  // res.redirect('/') 이미 요청을 클라이언트로 보냈는데 다시 요청을 보내는 구문이 있어서 오류가 터짐
}

exports.getIndex = (req, res, next) =>{
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
}

exports.getCart = (req, res, next) =>{
  res.render('shop/cart', {
    path: '/cart',
    pageTitle : 'Your cart'
  })
};

exports.addCart = (req, res, next) =>{
  const productId = req.body.productId;
  // product 파일에서 갖고온 product
  Product.findById(productId, (product) =>{
    Cart.addProduct(productId, product.price)
  })
  res.redirect('/cart');
}

exports.getOrders = (req, res, next) =>{
  res.render('shop/orders', {
    path: '/orders',
    pageTitle : 'Your orders'
  })
};

exports.getCheckout = (req, res, next) =>{
  res.render('shop/checkout', {
    path : '/checkout', // 라우트에 등록한 경로
    pageTitle: 'Checkout'
  })
}