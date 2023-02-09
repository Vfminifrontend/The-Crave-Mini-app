const app = getApp();
Page({
  data: {
    lang: "",
    content: {},
    product: {}
  },
  onLoad(query) {
    // Page load
  },
  editFavourites() {
    app.editFavourites(this.data.product);
    this.setData({
      ...this.data,
      product: {
        ...this.data.product,
        favourite: !this.data.product.favourite
      }
    });
    app.productDetails = { ...this.data.product };
  },
  goToBag() {
    my.navigateTo({
      url: "/pages/cart/cart"
    });
  },
  editBag(event) {
    const editFlag =
      event.currentTarget.id == "plus" || event.target.id == "add";
    app.editBag(this.data.product, editFlag);
    this.setData({
      ...this.data,
      product: {
        ...this.data.product,
        noAddedToBag: editFlag
          ? this.data.product.noAddedToBag + 1
          : this.data.product.noAddedToBag - 1
      }
    });
    app.productDetails = { ...this.data.product };
  },
  onReady() {
    // Page loading is complete
  },
  onShow() {
    // Page display
    this.setData({
      ...this.data,
      lang: app.language,
      content: app.content.productDetails,
      product: app.productDetails
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
