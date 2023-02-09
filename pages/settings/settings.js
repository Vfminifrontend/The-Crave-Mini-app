const app = getApp();
Page({
  data: {
    language: "",
    content: {},
    tabBarData: []
  },
  onLoad(query) {
    // Page load
  },
  onReady() {
    // Page loading is complete
  },
  onShow() {
    // Page display
    this.setData({
      ...this.data,
      language: app.language,
      content: app.content.settings,
      tabBarData: app.tabBarData
    });
  },
  langChange(event) {
    app.setLanguage(event.detail.value);
    this.setData({
      ...this.data,
      language: app.language,
      content: app.content.settings
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
