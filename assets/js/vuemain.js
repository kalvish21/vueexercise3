new Vue({
  el: '#exercise',
  data: {
    value: 0,
    duration: 5
  },
  computed: {
    result: function() {
      return this.value >= 37 ? 'Greater' : 'Less';
    }
  },
  watch: {
    value: function(val) {
      vm = this;
      setTimeout(function() {
        vm.value = 0;
      }, this.duration * 1000)
    }
  }
});
