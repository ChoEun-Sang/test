// import axios from 'axios'

// //비동기 함수 생성!
// export async function request (inputText) {
//   const {data} = await axios({
//     url: `https://omdbapi.com/?apikey=7035c60c&s=${inputText}`,
//     method: 'GET'
//   })
//   // console.log(data.Search)
//   return data.Search
// }

// //화면에 출력 함수
// export function renderMovies(ulEl, movies) {
//   ulEl.innerHTML = ''
//   movies.forEach(function (movie) {
//     const liEl = document.createElement('li')
//     liEl.textContent = movie .Title
//     ulEl.append(liEl)
//   })
// }
