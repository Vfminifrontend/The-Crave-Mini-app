const getTabs = (cart, fav) => {
  return [
    {
      title: {
        en: "Home",
        ar: "الرئيسية"
      },
      iconSrc: "/assets/svg/home.svg",
      navigatePage: "/pages/products/products",
      note: 0
    },
    {
      title: {
        en: "Order",
        ar: "الطلب"
      },
      iconSrc: "/assets/svg/bag-plus.svg",
      navigatePage: "/pages/cart/cart",
      note: cart
    },
    {
      title: {
        en: "Fav",
        ar: "المفضل"
      },
      iconSrc: "/assets/svg/heart/empty-heart.svg",
      navigatePage: "/pages/favourites/favourites",
      note: fav
    },
    {
      title: {
        en: "Setting",
        ar: "الإعدادات"
      },
      iconSrc: "/assets/svg/setting.svg",
      navigatePage: "/pages/settings/settings",
      note: 0
    }
  ];
};
export default getTabs;
