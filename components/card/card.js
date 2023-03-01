const app = getApp();
Component({
  mixins: [],
  data: {
    currentProduct: null
  },
  props: {
    cardIcons: true,
    bagSize: false,
    isContainColors: true,
    onClick: null,
    onUpdateTabBar: null,
    lang: "",
  },
  methods: {
    navigateToProductDetails() {
      app.productDetails = this.data.currentProduct || this.props.product;
      // Clear cached state
      this.setData({
        ...this.data,
        currentProduct: null
      });
      my.navigateTo({
        url: "/pages/product-details/product-details"
      });
    },
    editFavourites() {
      // const productToBeConsidered =
      //   this.data.currentProduct || this.props.product;
      // app.editFavourites(productToBeConsidered);
      // if(this.props.onUpdateTabBar) {
      //   this.props.onUpdateTabBar();
      // }
      // if (!this.props.onClick) {
      //   this.setData({
      //     ...this.data,
      //     currentProduct: {
      //       ...productToBeConsidered,
      //       favourite: !productToBeConsidered.favourite
      //     }
      //   });
      // } else {
      //   return this.props.onClick();
      // }
      app.getUserInfo().then((res) => {
        my.alert({ content: "Msisdn is: " + res.msisdn })
      }).catch((err) => {
        my.alert({ content: "Error is: " + err })
      })
    },
    editBag() {
      my.tradePay({
        tradeNO: '201711152100110410533667792', // get the tradeNo from the server first
        success: (res) => {
          if (res.resultCode === "9000") {
            my.alert({ content: "payment suceeded" })
          }
          else {
            my.alert({ content: "payment failed " + res.resultCode })
          }
        },
        fail: (res) => {
          my.alert({
            content: JSON.stringify(res),
          });
        }
      });
      // const productToBeConsidered =
      //   this.data.currentProduct || this.props.product;
      // app.editBag(productToBeConsidered, true);
      // if (this.props.onUpdateTabBar) {
      //   this.props.onUpdateTabBar();
      // }
      // this.setData({
      //   ...this.data,
      //   product: {
      //     ...productToBeConsidered,
      //     noAddedToBag: productToBeConsidered.noAddedToBag++
      //   }
      // });
      // my.confirm({
      //   title: app.content.addToBagAlert.title,
      //   content: app.content.addToBagAlert.content,
      //   confirmButtonText: app.content.addToBagAlert.confirmButtonText,
      //   cancelButtonText: app.content.addToBagAlert.cancelButtonText,
      //   complete: result => {
      //     if (result.confirm) {
      //       my.redirectTo({
      //         url: "/pages/cart/cart"
      //       });
      //     }
      //   }
      // });
    }
  }
});
