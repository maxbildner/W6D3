const APIUtil = require("./api_util.js");
const FollowToggle = require('./follow_toggle');




class UsersSearch {
    constructor($el) {
      this.$el = $el
      this.$ul = $el.find(".users-result")
      this.$input = $el.find(".search-input")
      this.handleInput();
      this.renderResults = this.renderResults.bind(this)
    }

  handleInput() {
    this.$input.on("input", () => {
      APIUtil.searchUser(this.$input.val()).then( (results) => {
        this.renderResults(results) })
    })
  }

  renderResults(results) {
    this.$ul.empty() 
    results.forEach( (user)=> {
      let $li = $(`<li> ${user.username} </li> `)
      let $button = $("<button class='follow-toggle'></button>")
      $li.append($button)
      this.$ul.append($li)
      new FollowToggle($button, {"userId": user.id, "followState": user.followed ? "followed" : "unfollowed"})
    });
  }

}

module.exports = UsersSearch;