const Product = require('../models/product_local');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
    });
  };
  
  exports.postAddProduct = (req, res, next) => {
    const title = req.body.title; // 뷰에서 할당한 name과 동일하게 입력해야한다
    const imageURL = req.body.imageURL;
    const price = req.body.price;
    const description = req.body.description;
    // 앞단정보 받아오는걸 컨트롤러에서하고 이정보를 서비스로 넘겨준다음 이 다음 저장해주는 부분을 서비스로 옮겨주기
    const product = new Product(title, imageURL, description, price); // model에 정의한 생성자와 같은 순서로 넣어줘야함
    product.save();

    res.redirect('/');
  };

  // 모든 제품을 가져오고 뷰 랜더링
  exports.getProducts = (req, res, next) =>{
    Product.fetchAll(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Product',
        path: '/admin/products',
      });
    });
  }