import jwt_decode from "jwt-decode";
const app = getApp();
Page({
  data: {
    products: [],
    language: "",
    content: {},
    filtered: [],
    scrollTop: 0,
    hideTapBar: false,
    chosenCategories: [],
    tabBarData: [],
    userinfo: ""
  },
  updateTabBarData() {
    this.setData({
      ...this.data,
      tabBarData: [...app.tabBarData]
    });
  },
  initFilterCategory(e) {
    if (!this.data.chosenCategories.includes(e.category)) {
      my.showLoading();
      setTimeout(() => {
        my.hideLoading();
        const newCategories = [...this.data.chosenCategories, e.category];
        this.setData({
          ...this.data,
          filtered: app.products.filter(item => {
            return newCategories.every(element => {
              return item.categories.includes(element);
            });
          }),
          chosenCategories: [...newCategories]
        });
      }, 400);
    }
    // this.setData({
    //   ...this.data,
    //   userinfo:'something binded'

    //  });
  },
  deleteAndResetChosenCategory(e) {
    const newCategories = this.data.chosenCategories.filter(item => {
      return item != e.category;
    });
    this.setData({
      ...this.data,
      filtered: app.products.filter(item => {
        return newCategories.every(element => {
          return item.categories.includes(element);
        });
      }),
      chosenCategories: [...newCategories]
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
    // Page loading is complete
  },
  async onShow() {
    this.setData({
      ...this.data,
      hideTapBar: false,
      products: app.products,
      filtered: app.products,
      language: app.language,
      content: app.content.products,
      scrollTop: 0,
      chosenCategories: [],
      tabBarData: app.tabBarData,
    });
    // app.getUserInfo().then((res) => {
    //   this.setData({
    //     ...this.data,
    //     userinfo: res.msisdn

    //   });
    // }).catch((err) => {
    //   my.alert({ content: err })
    // })
    // my.showLoading();
    my.getAuthCode({
      scopes: ['username'],
      success: (res) => {
        //my.alert({ content: 'authcode is: ' + res.authCode });
        this.$batchedUpdates(() => {
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
              //my.hideLoading();
              //my.alert({ content: 'token success: ' + res.data.access_token });
              let decoded = jwt_decode(res.data.access_token);
              if (decoded) {
                this.setData({
                  ...this.data,
                  userinfo: decoded.msisdn

                });
                my.alert({ content: 'Login Success ! Welcome :' + decoded.msisdn});
              };

            },

            fail: (res) => {
              // my.hideLoading();
              // let token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzQjEwblo5OWtVbEY0UDVzYzVKNXR2amY2MFpkc08tbFFZN19yWjI1UjdBIn0.eyJleHAiOjE2NzQ3NDE3NTAsImlhdCI6MTY3NDczOTk1MCwianRpIjoiMDg4MWUwYmItZjM4MC00ZTI3LTg1NGYtNWRlZWU3OGMxMWZhIiwiaXNzIjoiaHR0cHM6Ly93ZWIudm9kYWZvbmUuY29tLmVnL2F1dGgvcmVhbG1zL3ZmLXJlYWxtIiwic3ViIjoiZjpkMmMxYmZlMC04MWQyLTQ1YTMtYTdlZC0zMzA1OGI2MDM3MjA6MTAwMjQ2NTg5NiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxvZ2lucG9jIiwic2Vzc2lvbl9zdGF0ZSI6ImI1ZGU1YTk1LTNlZTAtNGQ0MS1iZDRiLTQxNDYyNDU3N2M1NiIsInNjb3BlIjoidXNlcm5hbWUiLCJzaWQiOiJiNWRlNWE5NS0zZWUwLTRkNDEtYmQ0Yi00MTQ2MjQ1NzdjNTYiLCJtc2lzZG4iOiIxMDAyNDY1ODk2In0.wWOH6HOcHkfsiOSoKvOwx-OsfFlSgCGHw-YjXVF_IlE1ovN66SCIOTEdCi_wxtjeTOvSzIKkPAL9CtDW08W3i3yZwWjqqXwwEz_GGydh1DGqBmk1GaX3xMW_G0cAJOF1K-m5pJP5Dkoor6_GBxwG8uxNscLpGUkevGHipTioHQp31-jFKtTkqyIp5zP4krwDbApjlPAz0GoQSh-5nBxh68dSmm7J122i5ylOo4sRZEEvykySM79LEkcLETjEv6sLwHcyDeZaOR5vSnyzXxseBxgHPFsl2tvPM5-OQttf8N8caiYB7htezXUnNsZ7Is-W_OoV7xayGjGI4NosmTS6Qg'
              // let decoded = jwt_decode(token);
              // this.setData({
                //   ...this.data,
                //   userinfo: decoded.msisdn
                
                // });
                my.alert({ content: '/token api failed: ' + res.data.error_description });
                
              }
            })
          });
        },
        fail: (res) => {
          // my.hideLoading();
          // let token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzQjEwblo5OWtVbEY0UDVzYzVKNXR2amY2MFpkc08tbFFZN19yWjI1UjdBIn0.eyJleHAiOjE2NzQ3NDE3NTAsImlhdCI6MTY3NDczOTk1MCwianRpIjoiMDg4MWUwYmItZjM4MC00ZTI3LTg1NGYtNWRlZWU3OGMxMWZhIiwiaXNzIjoiaHR0cHM6Ly93ZWIudm9kYWZvbmUuY29tLmVnL2F1dGgvcmVhbG1zL3ZmLXJlYWxtIiwic3ViIjoiZjpkMmMxYmZlMC04MWQyLTQ1YTMtYTdlZC0zMzA1OGI2MDM3MjA6MTAwMjQ2NTg5NiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxvZ2lucG9jIiwic2Vzc2lvbl9zdGF0ZSI6ImI1ZGU1YTk1LTNlZTAtNGQ0MS1iZDRiLTQxNDYyNDU3N2M1NiIsInNjb3BlIjoidXNlcm5hbWUiLCJzaWQiOiJiNWRlNWE5NS0zZWUwLTRkNDEtYmQ0Yi00MTQ2MjQ1NzdjNTYiLCJtc2lzZG4iOiIxMDAyNDY1ODk2In0.wWOH6HOcHkfsiOSoKvOwx-OsfFlSgCGHw-YjXVF_IlE1ovN66SCIOTEdCi_wxtjeTOvSzIKkPAL9CtDW08W3i3yZwWjqqXwwEz_GGydh1DGqBmk1GaX3xMW_G0cAJOF1K-m5pJP5Dkoor6_GBxwG8uxNscLpGUkevGHipTioHQp31-jFKtTkqyIp5zP4krwDbApjlPAz0GoQSh-5nBxh68dSmm7J122i5ylOo4sRZEEvykySM79LEkcLETjEv6sLwHcyDeZaOR5vSnyzXxseBxgHPFsl2tvPM5-OQttf8N8caiYB7htezXUnNsZ7Is-W_OoV7xayGjGI4NosmTS6Qg'
          // let decoded = jwt_decode(token);
          // this.setData({
            //   ...this.data,
            //   userinfo: decoded.msisdn
            
            // });
            
            my.alert({content: "fail can't get auhcode"});
          },
    });


    // Page display

    // my.setStorage({
    //   key: 'token',
    //   data: decoded,
    // });





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
