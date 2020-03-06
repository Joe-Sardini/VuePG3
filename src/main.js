import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {
    quotes: []
  },
  methods: {
    AddQuote(quote) {
      this.quotes.push(quote);
      this.$emit('quotesWasUpdated', quotes);
    },
    RemoveQuote(index) {
      delete this.quotes[index];
      this.$emit('quotesWasUpdated', quotes);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
