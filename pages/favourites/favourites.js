const app = getApp();
Page({
  data: {
    products: [],
    language: "",
    content: {},
    scrollTop: 0,
    hideTapBar: false,
    tabBarData: [],
    noOfItems: 0
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
  editFavourites() {
    this.setData({
      ...this.data,
      products: [...app.favourites]
    });
  },
  updateTabBarData() {
    this.setData({
      ...this.data,
      noOfItems: app.favNo,
      tabBarData: [...app.tabBarData]
    })
  },
  onLoad(query) {
    // Page load
  },
  onReady() {
    // Page loading is complete
  },
  async onShow() {
    // Page display
  //   const res =await my.getStorage({
  //     key: 'token'
  //   });
  //   if(res){
  //   my.alert({
  //     content:({res})
  //   })
  // }
  
    this.setData({
      ...this.data,
      language: app.language,
      products: [...app.favourites],
      content: app.content.favourites,
      tabBarData: [...app.tabBarData],
      noOfItems: app.favNo
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
    return {
      title: "My App",
      desc: "My App description",
      path: "pages/index/index"
    };
  }
});
