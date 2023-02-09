Component({
  mixins: [],
  data: {
	  
  },
  props: {
    category:{},
    onTap: null,
    closeIcon: false,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onTap (e) { 
      if (this.props.onTap)
       return this.props.onTap(this.props)
    },
  }
});