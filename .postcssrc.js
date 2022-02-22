//.postcssrc.js는 번들러를 통해서 변환하는 용도의 파일이다. 
//가져오기, 내보내기

//ESM  - 브라우저 용
//Common JS  - node js환경 용

//import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer')


// export {
//   plugins: [
//     autoprefixer
//   ]
// }
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}

