if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;


if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../node_modules/mini-ali-ui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/title/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/container/index?hash=0d7632df0f27097a47744e0a9dbf35728c63f710');
require('../../node_modules/mini-ali-ui/es/loading/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/list/index?hash=e1617a0257fb9de746f60d50b03404ad924976c9');
require('../../node_modules/mini-ali-ui/es/list/auto-size-img/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/list/list-item/index?hash=a5465b8c889360e3f854461d3ac41cf414aec633');
require('../../node_modules/mini-ali-ui/es/swipe-action/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/products/components/top-categories/top-categories?hash=784beea788fe0d8025c54bdb37d434bcf2d3ef3a');
require('../../components/rating/rating?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/card/card?hash=5ef5642781fd0ffd72aeb8eed0a7d6340ebb788d');
require('../../node_modules/mini-ali-ui/es/flex/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/flex/flex-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tabBar/tabBar?hash=b445bf8bbf83ea53976f2017bdb667e3dea5a21b');
require('../../pages/products/products?hash=27b076d47203ee37f77cbe036b3938f39c175cb8');
require('../../pages/favourites/favourites?hash=284f88495def703fab6162b826ddd70041b63932');
require('../../pages/cart/cart?hash=284f88495def703fab6162b826ddd70041b63932');
require('../../pages/product-details/product-details?hash=893f9b64436345ef0effa471fdc5cb2d912a77e4');
require('../../pages/settings/settings?hash=25e7895be93fef5840fc6cdb7664f2182ad7b3dc');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}