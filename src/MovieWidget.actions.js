import $ from 'jquery';
const MOVIE_APP_ID = '895133d772824668d2270c54f158889c';

export function changeName(name) {
  return { type: 'changeName', value: name };
}

function movieInfo(data) {
  return { type: 'movie_info', payload: data };
}

export function getMovie(query) {

  return function(dispatch) {
    console.log('query', query);
    $.ajax({
      url: 'https://api.themoviedb.org/3/search/movie',
      data: {
        query: query,
        api_key: MOVIE_APP_ID
      }
    })
    .then(data => dispatch(movieInfo(data)));
  }
}

//https://api.themoviedb.org/3/search/movie?api_key=895133d772824668d2270c54f158889c&language=en-US&query=citizen&page=1&include_adult=false
