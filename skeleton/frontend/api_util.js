const APIUtil = {
  followUser: id => {
    return $.ajax({
      dataType: "json",
      method: "POST",
      url: `/users/${id}/follow`
    });
  },

  unfollowUser: id => {
    return $.ajax({
      dataType: "json",
      method: "DELETE",
      url: `/users/${id}/follow`
    });
  },

  searchUser: queryVal => {
    return $.ajax({
      dataType: "json",
      method: "GET",
      data: {query: queryVal},
      url: `/users/search`,
    });
  }

}

module.exports = APIUtil;


