import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CartFilled(props) {
  const navigate = useNavigate();
  const [checkAll, setCheckAll] = useState(false);
  const [totalPrices, setTotalPrices] = useState(0);
  const [totalDeliver, setTotalDeliver] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [orderTotalQuantity, setOrderTotalQuantity] = useState(0);

  const products = props.products;
  const setCartProducts = props.setProducts;

  const checkedArr = [];
  for (let i in products) {
    if (products[i].checkIn === 1) {
      checkedArr.push(products[i].productId);
    }
  }

  useEffect(() => {
    setTotalQuantity(products.length);
  }, [products.length]);

  const pushChecked = event => {
    if (checkedArr.includes(Number(event.target.id))) {
      const rest = checkedArr.filter(item => item !== Number(event.target.id));

      const newString = (checked => {
        if (checked.length === 0) return '';

        let string = '';
        for (let i in checked) {
          string += `productId=${checked[i]}&`;
        }
        string = string.slice(0, -1);
        return string;
      })(rest);

      fetch(`http://3.35.54.156:3000/cart/check?${newString}`, {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('TOKEN'),
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(response => response.json())
        .then(json => {
          setCartProducts(json.cart);
        });
    } else {
      const addition = [...checkedArr, Number(event.target.id)];

      const newString = (checked => {
        if (checked.length === 0) return '';

        let string = '';
        for (let i in checked) {
          string += `productId=${checked[i]}&`;
        }
        string = string.slice(0, -1);
        return string;
      })(addition);

      fetch(`http://3.35.54.156:3000/cart/check?${newString}`, {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('TOKEN'),
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(response => response.json())
        .then(json => {
          setCartProducts(json.cart);
        });
    }
  };

  const checkEvery = () => {
    if (checkedArr.length !== products.length) {
      const newArr = products.map(product => String(product.productId));

      const newString = (checked => {
        if (checked.length === 0) return '';

        let string = '';
        for (let i in checked) {
          string += `productId=${checked[i]}&`;
        }
        string = string.slice(0, -1);
        return string;
      })(newArr);

      fetch(`http://3.35.54.156:3000/cart/check?${newString}`, {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('TOKEN'),
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(response => response.json())
        .then(json => {
          setCartProducts(json.cart);
        });
    } else {
      fetch(`http://3.35.54.156:3000/cart/check`, {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('TOKEN'),
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(response => response.json())
        .then(json => {
          setCartProducts(json.cart);
        });
    }
  };

  useEffect(() => {
    checkedArr.length === products.length
      ? setCheckAll(true)
      : setCheckAll(false);
  }, [checkedArr]);

  useEffect(() => {
    let totalProducts = 0;
    let totalDeliver = 0;
    let orderTotalQuantity = 0;
    let totalPrice = 0;

    const productArr = [];
    const deliverArr = [];
    const quantityArr = [];
    for (let i in products) {
      if (checkedArr.includes(products[i].productId)) {
        productArr.push(products[i].price);
        deliverArr.push(products[i].deliveryfee);
        quantityArr.push(products[i].quantity);
      }
    }

    for (let i in productArr) {
      totalProducts += productArr[i];
    }

    for (let i in deliverArr) {
      totalDeliver += deliverArr[i];
    }

    for (let i in quantityArr) {
      orderTotalQuantity += quantityArr[i];
    }

    totalPrice = totalProducts + totalDeliver;

    setTotalPrices(totalProducts);
    setTotalDeliver(totalDeliver);
    setOrderTotalQuantity(orderTotalQuantity);
    setTotal(totalPrice);
  }, [checkedArr]);

  const orderInCart = () => {
    if (checkedArr.length === 0) {
      alert('????????? ????????? ????????????.');
    } else {
      navigate('/order');
    }
  };

  const deleteThis = event => {
    fetch(`http://3.35.54.156:3000/cart?productId=${Number(event.target.id)}`, {
      method: 'DELETE',
      headers: {
        authorization: localStorage.getItem('TOKEN'),
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        setCartProducts(json.cart);
      });
  };

  const deleteChosen = event => {
    const newString = (checked => {
      if (checked.length === 0) return '';

      let string = '';
      for (let i in checked) {
        string += `productId=${checked[i]}&`;
      }
      string = string.slice(0, -1);
      return string;
    })(checkedArr);

    fetch(`http://3.35.54.156:3000/cart?${newString}`, {
      method: 'DELETE',
      headers: {
        authorization: localStorage.getItem('TOKEN'),
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        setCartProducts(json.cart);
      });
  };

  const plusCount = event => {
    let quantityForRequest = 0;
    for (let i in products) {
      if (products[i].productId === Number(event.target.id)) {
        quantityForRequest = products[i].quantity;
      }
    }

    fetch(
      `http://3.35.54.156:3000/cart?productId=${Number(
        event.target.id
      )}&quantity=${quantityForRequest + 1}`,
      {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('TOKEN'),
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          productId: Number(event.target.id),
          quantity: quantityForRequest + 1,
        }),
      }
    )
      .then(response => response.json())
      .then(json => setCartProducts(json.cart));
  };

  const minusCount = event => {
    let quantityForRequest = 0;
    for (let i in products) {
      if (products[i].productId === Number(event.target.id)) {
        quantityForRequest = products[i].quantity;
      }
    }

    fetch(
      `http://3.35.54.156:3000/cart?productId=${Number(
        event.target.id
      )}&quantity=${quantityForRequest - 1}`,
      {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('TOKEN'),
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
      .then(response => response.json())
      .then(json => setCartProducts(json.cart));
  };

  return (
    <div className="cartContentsBox">
      <div className="titleBox">
        <h1 className="title">????????????</h1>
        <div className="count">{totalQuantity}</div>
      </div>
      <div className="cartProductBox">
        <div className="cartProductMenu">
          <div className="information">
            <input
              className="checkAll"
              type="checkbox"
              checked={checkAll}
              onChange={checkEvery}
            />
            <p>????????????</p>
          </div>
          <div className="number">??????</div>
          <div className="price">????????????</div>
          <div className="deliver">?????? ??????</div>
        </div>
        <div className="cartProductContents">
          {products.map(products => (
            <div
              className="productBox"
              id={products.productId}
              key={products.productId}
            >
              <div className="productInfo">
                <input
                  className="checkThis"
                  type="checkbox"
                  checked={products.checkIn}
                  onChange={pushChecked}
                  id={products.productId}
                />
                <img
                  className="productImg "
                  src={products.thumbnailUrl}
                  alt={products.productId}
                />
                <div className="productName">{products.name}</div>
                <div className="deleteBtnBox">
                  <img
                    className="deleteBtn"
                    src="/images/close.png"
                    alt="delete"
                    onClick={deleteThis}
                    id={products.productId}
                  />
                </div>
              </div>
              <div className="productNumber">
                <div className="countOfThis">
                  <div
                    className="countMinusBtn"
                    onClick={minusCount}
                    id={products.productId}
                  >
                    -
                  </div>
                  <div type="number" className="thisQuantity">
                    {products.quantity}
                  </div>
                  <div
                    className="countPlusBtn"
                    onClick={plusCount}
                    id={products.productId}
                  >
                    +
                  </div>
                </div>
              </div>
              <div className="orderPrice">
                <div className="productPrice">
                  {products.price.toLocaleString()}???
                </div>
                <div className="buyDirectly">????????????</div>
              </div>
              <div className="productDeliver">
                <div className="priceOfDeliver">
                  {products.deliveryfee === 0
                    ? '0'
                    : products.deliveryfee.toLocaleString}
                  ???
                </div>
                <div className="typeOfDeliver">??????</div>
              </div>
            </div>
          ))}
        </div>
        <div className="buttonBar">
          <div className="buttonBox">
            <div className="deleteChosen" onClick={deleteChosen}>
              ???????????? ??????
            </div>
            <div className="deleteSoldOut">???????????? ??????</div>
          </div>
          <p>?????????????????? ?????? ??? ??????????????? ???????????? ????????? ??? ????????????.</p>
        </div>
      </div>
      <div className="calculateBox">
        <div className="calculateAmountBox">
          <p>??? ?????? ?????? {orderTotalQuantity}???</p>
        </div>
        <div className="calculatePriceBox">
          <div className="priceTotalProduct">
            <div className="price">{totalPrices.toLocaleString()}???</div>
            <div className="textInPrice">????????????</div>
          </div>
          <div className="plus">+</div>
          <div className="priceTotalDeliver">
            <div className="price">{totalDeliver.toLocaleString()}???</div>
            <div className="textInPrice">?????????</div>
          </div>
          <div className="equal">=</div>
          <div className="priceTotal">
            <div className="price">{total.toLocaleString()}???</div>
            <div className="textInPrice">??? ????????????</div>
          </div>
        </div>
      </div>
      <div className="orderBtnBox">
        <div className="orderBtnInnerBox">
          <div className="order" onClick={orderInCart}>
            ????????????
          </div>
          <div className="naverPay">N Pay ????????????</div>
        </div>
      </div>
      <div className="keepShopping">
        <a href="pleatsmama.com/shop_cart">?????? ????????????</a>
      </div>
      <div className="wishListBox">
        <div className="wishListTitle">
          <p>???????????????</p>
          <div className="seeMore">?????????</div>
        </div>
        <div className="wishListContents">
          <p>?????????????????? ????????????.</p>
        </div>
      </div>
    </div>
  );
}

export default CartFilled;
