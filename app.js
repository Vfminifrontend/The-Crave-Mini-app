import products from "/data/product";
import getTabs from "/data/configuration/tabs";
import en from "/data/static-content/en";
import ar from "/data/static-content/ar";

App({
  products: products,
  language: "",
  content: {},
  productDetails: {},
  favourites: [],
  bag: [],
  bagNo: 0,
  favNo: 0,
  tabBarData: [],
  userInfo: null,
  onLaunch(options) {
    // Page opens for the first time
    this.setLanguage("en");
    this.initializeFavourites();
    this.getNoOfFav();
    this.initializeBag();
    this.getNoOfBag();
    this.getTabBarData();
  },
  onShow(options) {
    // Reopened by scheme from the background
  },
  setLanguage(lang) {
    (this.language = lang), (this.content = this.language == "en" ? en : ar);
  },
  initializeFavourites() {
    this.favourites = this.products.filter(item => item.favourite);
  },
  initializeBag() {
    this.bag = this.products.filter(item => item.noAddedToBag > 0);
  },
  editFavourites(product) {
    const productsCopy = [...this.products];
    const productIndex = productsCopy.findIndex(item => item.id == product.id);
    productsCopy[productIndex].favourite = !productsCopy[productIndex]
      .favourite;
    this.products = productsCopy;
    this.initializeFavourites();
    this.getNoOfFav();
    this.getTabBarData();
  },
  editBag(product, editFlag) {
    const productsCopy = [...this.products];
    const productIndex = productsCopy.findIndex(item => item.id === product.id);
    // add 1 item
    if (editFlag) {
      productsCopy[productIndex].noAddedToBag++;
    } else {
      // reduce 1 item if not 0;
      if (productsCopy[productIndex].noAddedToBag > 0) {
        productsCopy[productIndex].noAddedToBag--;
      }
    }
    this.products = productsCopy;
    this.initializeBag();
    this.getNoOfBag();
    this.getTabBarData();
  },
  getNoOfBag() {
    let sum = 0;
    this.bag.forEach(item => {
      sum = sum + item.noAddedToBag;
    });
    this.bagNo = sum;
  },
  getNoOfFav() {
    this.favNo = this.favourites.length;
  },
  getTabBarData() {
    this.tabBarData = getTabs(this.bagNo, this.favNo);
  },
  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userInfo)
        resolve(this.userInfo);
      // Call user authorization API to get user info
      my.getAuthCode({
        scopes: ['username'],
        success: (res) => {
          my.request({
            url: 'https://web.vodafone.com.eg/auth/realms/vf-realm/protocol/openid-connect/token',
            method: 'POST',
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
            },
            data: {
              grant_type: 'authorization_code',
              code: res.authCode,
              client_id: 'loginpoc',
              redirect_uri: 'https://web.vodafone.com.eg/ar/home'
            },
            dataType: 'json',
            success: (res) => {
              let decoded = jwt_decode(res.data.access_token);
              if (decoded) {
                this.userInfo = decoded
                resolve(decoded)
              };
            },
            fail: (err) => {
              reject('token api failed:' + err.data.error_description)
            }
          });
          this.userInfo = res;
          resolve(res);
        }, fail: (err) => {
          reject('get authcode failed:' + err)
        },
      });
    });
  },
});
