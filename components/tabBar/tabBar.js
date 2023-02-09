Component({
  props: {
    lang: "",
    tabs: [],
    activeTab: 2,
    customStyle: ""
  },
  methods: {
    handleTabClick(event) {
      if (event.currentTarget.id !== this.props.activeTab) {
        my.redirectTo({
          url: `${this.props.tabs[event.currentTarget.id].navigatePage}`
        });
      }
    }
  }
});
