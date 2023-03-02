const app = getApp();
Page({
  data: {
    products: [],
    language: "",
    content: {},
    scrollTop: 0,
    hideTapBar: false,
    noOfItems: 0,
    tabBarData: []
  },
  onPayment(){
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
  },
  scrollHandler(event) {
    let hideTapBar;
    // hide tapbar while scrolling down
    if (event.detail.scrollTop > this.data.scrollTop && !this.data.hideTapBar) {
      hideTapBar = true;
      // show tapbar while scrolling down
    } else if (
      event.detail.scrollTop < this.data.scrollTop &&
      this.data.hideTapBar
    ) {
      hideTapBar = false;
    } else {
      hideTapBar = this.data.hideTapBar;
    }
    this.setData({
      ...this.data,
      scrollTop: event.detail.scrollTop,
      hideTapBar
    });
  },
  onLoad(query) {
    // Page load
  },
  onReady() {
    // ----Page loading is complete
  },
  async onShow() {
    // const res =await my.getStorage({
    //   key: 'token'
    // });
    // console.log("i am in cart",res.data);
    // Page display
    this.setData({
      ...this.data,
      language: app.language,
      products: [...app.bag],
      content: app.content.cart,
      tabBarData: [...app.tabBarData],
      noOfItems: app.bagNo
    });
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
  }
});
