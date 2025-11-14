// 轻量交互：导航高亮处理与可扩展的 MCP 交互占位
(function(){
  function setupNav(){
    var navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(function(a){
      a.addEventListener('click', function(){
        navLinks.forEach(function(x){x.classList.remove('active')});
        this.classList.add('active');
        // close mobile nav if open
        var nav = document.querySelector('.main-nav');
        if(nav && nav.classList.contains('open')) nav.classList.remove('open');
      });
    });

    var toggle = document.querySelector('.nav-toggle');
    if(toggle){
      toggle.addEventListener('click', function(){
        var nav = document.querySelector('.main-nav');
        if(nav) nav.classList.toggle('open');
      });
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', setupNav);
  } else {
    setupNav();
  }
})();
