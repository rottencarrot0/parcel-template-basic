module.exports = {  //node js의 내보내기 방식
  presets: ['@babel/preset-env'],
  plugin: [
    ['@babel/plugin-transform-runtime']
  ]
}
//앞으로 작성하는 모든 js 파일은 babel을 통해서 ES5의 문법으로 변경되어 브라우저에서 동작할 것이다.
