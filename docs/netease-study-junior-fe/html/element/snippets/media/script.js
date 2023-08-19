window.onload = function () {
  var aside = document.querySelector('aside') // 侧边栏
  var section = document.querySelector('section') // 内容
  window.onresize = function () {
    responsive();
  };
  function responsive() { // 响应式布局
    console.log('responsive', document.body.clientWidth);
    if (document.body.clientWidth > 500) { // 宽度大于500px
      aside.className = ''
      section.className = ''
    } else {
      aside.className = 'aside-horizontal'
      section.className = 'section-horizontal'
    }
  }
};