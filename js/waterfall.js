// 先等图片都加载完成
// 再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
   * 内容JSON
   */
  var demoContent = [
    {
      demo_link: 'https://gaohaoyang.github.io/pics/animation/reactNativeAnimation.html',
      img_link: 'https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pics/demos/animationInReactNative.png',
      title: 'Slide: Animations in React Native',
      core_tech: 'Slide',
      description: 'A presentation about animations in React Native.',
    },
    {
      demo_link: 'https://gaohaoyang.github.io/threeJourney/23-rose/',
      img_link: 'https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pics/3d_rose.gif',
      code_link: 'https://github.com/Gaohaoyang/threeJourney/tree/main/src/23-rose',
      title: 'Three.js render 3D Rose',
      core_tech: 'Three.js WebGL',
      description: 'On the 5th anniversary, I use Three.js to render a rose for my wife.',
    },
    {
      demo_link: 'https://gaohaoyang.github.io/demos/#/FerrisWheel',
      img_link: 'https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pics/demos/ferrisWheel.gif',
      code_link: 'https://github.com/Gaohaoyang/demos/tree/main/src/FerrisWheel',
      title: 'Ferris Wheel',
      core_tech: 'anime.js',
      description:
        'A Ferris Wheel animation with anime.js. You can change the speed and direction. See blog <a href="https://gaohaoyang.github.io/2022/10/15/ferris-wheel/">here</a>.',
    },
    {
      demo_link: 'https://gaohaoyang.github.io/lottie-test/',
      img_link: 'https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pics/demos/lottieDemo.gif',
      code_link: 'https://github.com/Gaohaoyang/lottie-test',
      title: 'Lottie Demo',
      core_tech: 'lottie animation',
      description: 'Lottie Demo and animation controller',
    },
    {
      demo_link:
        'https://market.m.taobao.com/app/tmall-wireless/rax-life-progress/pages/index?wh_weex=true#/life',
      img_link: 'https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pics/demos/lifeProgress.png',
      // code_link: 'https://github.com/Gaohaoyang/threeJourney/tree/main/src/23-rose',
      title: 'Life Progress Calculator',
      core_tech: 'weex',
      description: 'Early attempts on weex',
    },
    {
      demo_link: 'https://codepen.io/haoyang/pen/jrvrQq',
      img_link: 'https://ooo.0o0.ooo/2016/11/24/5836d81f48cd2.png',
      code_link: 'https://codepen.io/haoyang/pen/jrvrQq',
      title: 'Fisher-Yates 洗牌算法动画',
      core_tech: 'JavaScript',
      description:
        'Fisher-Yates 洗牌算法动画。算法详情见 <a href ="https://gaohaoyang.github.io/2016/10/16/shuffle-algorithm/">这里</a>。',
    },
    {
      demo_link: 'http://gaohaoyang.github.io/test/headerTransition/',
      img_link: 'https://ooo.0o0.ooo/2016/06/20/5768c1597d1fe.png',
      code_link: 'https://github.com/Gaohaoyang/test/tree/master/headerTransition',
      title: 'Header Transition 渐变动画',
      core_tech: 'jQuery BootStrap CSS3',
      description:
        '花费不到半小时帮师兄做了一个简单的 CSS3 动画效果，当页面滚动到指定距离时，header 区的背景色由透明变为蓝色。仿照了网站 <a href ="https://quorrajs.org/">https://quorrajs.org/</a> 的 Header 区动画效果。',
    },
    {
      demo_link: 'http://gaohaoyang.github.io/mask-fade-out/',
      img_link: 'http://7q5cdt.com1.z0.glb.clouddn.com/demo-fade-out.png',
      code_link: 'https://github.com/Gaohaoyang/mask-fade-out',
      title: '遮罩层按指定路径缩小消失',
      core_tech: 'jQuery CSS',
      description: '使用 animate 方法，做到兼容 IE8。曾在联想服务官网上线3个月。',
    },
    {
      demo_link: 'http://gaohaoyang.github.io/ToDo-WebApp/',
      img_link: 'http://7q5cdt.com1.z0.glb.clouddn.com/blog-todoWebApp.png',
      code_link: 'https://github.com/Gaohaoyang/ToDo-WebApp',
      title: '百度前端学院 task0004 ToDo 应用(移动端)',
      core_tech: 'JavaScript LocalStorage requireJS Sass Gulp XSS',
      description: '在任务三中，做了一个 PC 端的 ToDo 应用。任务四是将它优化，以适应移动端设备。',
    },
    {
      demo_link: 'http://gaohaoyang.github.io/baidu-ife-practice/task0003/',
      img_link: 'http://7q5cdt.com1.z0.glb.clouddn.com/demo-todo.png',
      code_link: 'https://github.com/Gaohaoyang/baidu-ife-practice/tree/master/task0003',
      title: '百度前端学院 task0003 ToDo 应用',
      core_tech: 'JavaScript LocalStorage',
      description:
        '任务三，ToDo 单页应用，主要使用了 LocalStorage 存储数据，使用 JSON 模拟了 3 张数据表。',
    },
    {
      demo_link: 'http://gaohaoyang.github.io/ife/task/task0002/work/Gaohaoyang/task0002_5.html',
      img_link: 'http://7q5cdt.com1.z0.glb.clouddn.com/demo-drag.png',
      code_link: 'https://github.com/Gaohaoyang/ife/tree/master/task/task0002/work/Gaohaoyang',
      title: '拖拽交互',
      core_tech: 'JavaScript',
      description: '对鼠标事件应用，以及判断定位的方法等。',
    },
    {
      demo_link: 'http://gaohaoyang.github.io/ife/task/task0002/work/Gaohaoyang/task0002_4.html',
      img_link: 'http://ww2.sinaimg.cn/large/7011d6cfjw1f3ba2krzs0j207005y0sv.jpg',
      code_link: 'https://github.com/Gaohaoyang/ife/tree/master/task/task0002/work/Gaohaoyang',
      title: '输入框即时提示',
      core_tech: 'JavaScript',
      description: '对input监听，使用正在表达式高亮匹配，实现输入联想效果。',
    },
    {
      demo_link: 'http://gaohaoyang.github.io/ife/task/task0002/work/Gaohaoyang/task0002_3.html',
      img_link: 'http://ww2.sinaimg.cn/large/7011d6cfjw1f3ba04okoqj20eq093wh1.jpg',
      code_link: 'https://github.com/Gaohaoyang/ife/tree/master/task/task0002/work/Gaohaoyang',
      title: '轮播图',
      core_tech: 'JavaScript',
      description: '变速运动，运动终止条件的应用。',
    },
    {
      demo_link: 'http://gaohaoyang.github.io/ife/task/task0002/work/Gaohaoyang/task0002_2.html',
      img_link: 'http://ww4.sinaimg.cn/large/7011d6cfjw1f3b9w6xpz5j20ae02pgm3.jpg',
      code_link: 'https://github.com/Gaohaoyang/ife/tree/master/task/task0002/work/Gaohaoyang',
      title: '倒计时',
      core_tech: 'JavaScript',
      description: 'setInterval()，Date 对象的学习和使用。',
    },
    {
      demo_link: 'http://gaohaoyang.github.io/ife/task/task0002/work/Gaohaoyang/task0002_1.html',
      img_link: 'http://ww3.sinaimg.cn/large/7011d6cfjw1f3b9tmyuh2j20au0aaaar.jpg',
      code_link: 'https://github.com/Gaohaoyang/ife/tree/master/task/task0002/work/Gaohaoyang',
      title: '处理兴趣爱好列表',
      core_tech: 'JavaScript',
      description: '对JavaScript正则表达式和字符串的练习。',
    },
    {
      demo_link: 'http://gaohaoyang.github.io/ife/task/task0002/work/Gaohaoyang/index.html',
      img_link: 'http://7q5cdt.com1.z0.glb.clouddn.com/demo-demo-index.png',
      code_link: 'https://github.com/Gaohaoyang/ife/tree/master/task/task0002/work/Gaohaoyang',
      title: '百度前端学院 task0002 展示主页',
      core_tech: 'HTML CSS',
      description:
        '任务二的展示主页，里面包含五个小 demo。还有一篇相关的<a href="http://gaohaoyang.github.io/2015/04/22/baidu-ife-2-javascript/" target="_blank">日志。</a>',
    },
    {
      demo_link: 'http://gaohaoyang.github.io/ife/task/task0001/work/Gaohaoyang/index.html',
      img_link: 'http://7q5cdt.com1.z0.glb.clouddn.com/Demo-blog-ife.jpg',
      code_link: 'https://github.com/Gaohaoyang/ife/tree/master/task/task0001/work/Gaohaoyang',
      title: '百度前端学院 task0001 个人博客',
      core_tech: 'HTML CSS',
      description:
        '完成百度前端学院的任务。深刻的理解了BFC、浮动、inline-block间距，多列布局等技术。还有一篇相关的<a href="http://gaohaoyang.github.io/2015/04/15/baidu-ife-1/" target="_blank">日志。</a>',
    },
    {
      demo_link: 'http://gaohaoyang.github.io/ghost-button-css3/',
      img_link: 'http://7q5cdt.com1.z0.glb.clouddn.com/DemoGhost-Button.png',
      code_link: 'https://github.com/Gaohaoyang/ghost-button-css3',
      title: 'Ghost Button 幽灵按钮',
      core_tech: 'CSS3',
      description: '使用 CSS3 中的旋转、缩放、过渡、动画等效果，制作出很酷的按钮效果。',
    },
    {
      demo_link: 'http://gaohaoyang.github.io/shadow-demo-css3',
      img_link: 'http://7q5cdt.com1.z0.glb.clouddn.com/Demoshadow.png',
      code_link: 'https://github.com/Gaohaoyang/shadow-demo-css3',
      title: 'CSS3 阴影特效',
      core_tech: 'CSS3',
      description: 'CSS3 中的阴影、旋转等效果，制作出曲边阴影和翘边阴影。',
    },
    {
      demo_link: 'http://gaohaoyang.github.io/learning-AngularJS/2-3-bookstore-add-sth-by-myself/',
      img_link: 'http://7q5cdt.com1.z0.glb.clouddn.com/DemoAngularJS.png',
      code_link:
        'https://github.com/Gaohaoyang/learning-AngularJS/tree/master/2-3-bookstore-add-sth-by-myself',
      title: 'AngularJS 结合动画效果',
      core_tech: 'AngularJS CSS3',
      description: '使用 AngularJS 中的 ngAnimate 加 CSS3里面的一些旋转效果，做出页面切换的效果。',
    },
    {
      demo_link: 'http://gaohaoyang.github.io/learning-AngularJS/2-4-UiRouterPractice',
      img_link: 'http://ww2.sinaimg.cn/large/7011d6cfjw1f3b8zumfqij20q40nh76x.jpg',
      code_link:
        'https://github.com/Gaohaoyang/learning-AngularJS/tree/master/2-4-UiRouterPractice',
      title: 'AngularJS UI-router 练习',
      core_tech: 'AngularJS UI-router',
      description:
        'UI-router 作为 AngularJS 中路由的扩充，实现了多级路由的效果。使得前端界面跳转更加方便。',
    },
    {
      demo_link: 'http://gaohaoyang.github.io/test/bootstrap-zhihu/',
      img_link: 'http://7q5cdt.com1.z0.glb.clouddn.com/teach-girlfriend-html-CopyZhihu.jpg',
      code_link: 'https://github.com/Gaohaoyang/test/tree/master/bootstrap-zhihu',
      title: '仿知乎页面',
      core_tech: 'HTML BootStrap',
      description: '使用BootStrap仿照知乎做了一个静态页面。',
    },
  ]

  contentInit(demoContent) //内容初始化
  initGrid()
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  var htmlArr = [];
  for (var i = 0; i < content.length; i++) {
      htmlArr.push('<div class="grid-item">')
      htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
      if(content[i].img_link) {
        htmlArr.push('<img src="'+content[i].img_link+'" style="width: 100%">')
      }
      htmlArr.push('</a>')
      htmlArr.push('<h3 class="demo-title">')
      htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
      htmlArr.push('</h3>')
      if (content[i].core_tech) {
        htmlArr.push('<p>Main tech：'+content[i].core_tech+'</p>')
      }
      htmlArr.push('<p>'+content[i].description)
      if (content[i].code_link) {
        htmlArr.push('<a href="'+content[i].code_link+'"> Source code <i class="fa fa-code" aria-hidden="true"></i></a>')
      }
      htmlArr.push('</p>')
      htmlArr.push('</div>')
  }
  var htmlStr = htmlArr.join('')
  // var htmlStr = ''
  // for (var i = 0; i < content.length; i++) {
  //   htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>主要技术：' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '       <a href="' + content[i].code_link + '">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>' + '   </p>' + '</div>'

  //   // htmlStr += `
  //   //   <div class="grid-item">
  //   //     <a class="a-img" href="${content[i].demo_link}">
  //   //     <img src="${content[i].img_link}">
  //   // `
  // }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var grid = document.querySelector('.grid');
  var msnry = new Masonry(grid, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    // percentPosition: true,
    isFitWidth: true,
    gutter: 20
  })

  imagesLoaded(grid).on('progress', throttle(function() {
    // layout Masonry after each image loads
      msnry.layout();
  }, 1600, {
    leading: false,
    trailing: true,
  }));
}

function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
      previous = options.leading === false ? 0 : new Date().getTime();
      timeout = null;
      func.apply(context, args);
      if (!timeout) context = args = null;
  };

  var throttled = function() {
      var now = new Date().getTime();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
          if (timeout) {
              clearTimeout(timeout);
              timeout = null;
          }
          previous = now;
          func.apply(context, args);
          if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
      }
  };
  return throttled;
}
