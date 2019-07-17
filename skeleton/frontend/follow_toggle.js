const APIUtil = require("./api_util.js");


class FollowToggle {

  constructor($el, options) {
    this.$el = $($el);
    this.userId = this.$el.data("user-id") || options.userId;
    this.followState = (this.$el.data("initial-follow-state") ||
      options.followState);
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.html("Follow!")
    } else {
      this.$el.html("Unfollow!")
    }
    this.$el.removeProp("disabled")
  }

  handleClick() {
    this.$el.on('click', (e)=> {
      this.$el.prop("disabled", true)
      e.preventDefault();
      if (this.followState === "followed") {
        APIUtil.unfollowUser(this.userId)
          .then( () => {
            this.followState = "unfollowed"
            this.render()
          });
      } else {
        APIUtil.followUser(this.userId)
          .then( () => {
            this.followState = "followed"
            this.render()
          });
      }
    });
  }
}

module.exports = FollowToggle;