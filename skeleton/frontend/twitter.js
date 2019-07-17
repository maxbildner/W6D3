const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./user_search');

$( () => {
  $('.follow-toggle').each( (i, el)=> {
    new FollowToggle( $(el)) ;
  } )

  $('.users-search').each((i, el) => {
    new UsersSearch($(el));
  })
})