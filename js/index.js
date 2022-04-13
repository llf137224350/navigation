(function () {
  var urls = [];
  /**
   * 存储数据到storage
   * @param key 存储的键
   * @param value 存储的值
   */
  function setStorageSync(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * 从storage中读取数据
   * @param key 存储的键
   */
  function getStorageSync(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  function initUrls() {
    urls = getStorageSync("urls") || [];
    var navBar = document.getElementById("nav-bar");
    if (urls.length) {
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < urls.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("class", "nav-bar-item");
        var a = document.createElement("a");
        a.setAttribute("href", urls[i].url);
        a.setAttribute("target", "_blank");
        a.innerText = urls[i].title;
        li.appendChild(a);
        fragment.appendChild(li);
      }
      navBar.innerHTML = "";
      navBar.appendChild(fragment);
    }
  }
  function init() {
    var date = new Date();
    document.getElementById("copyright").innerText = "©" + date.getFullYear();
    initUrls();
  }

  // 搜索
  function search() {
    var input = document.getElementById("input");
    var value = input.value.trim();
    if (value) {
      input.value = "";
      window.open("https://www.baidu.com/s?wd=" + encodeURIComponent(value));
    }
  }
  // 点击搜索
  document.getElementById("search").addEventListener("click", search);
  // 回车
  document.getElementById("input").addEventListener("keydown", function (e) {
    var theEvent = e || window.event;
    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if (code == 13) {
      //回车执行查询
      search();
    }
  });

  // 自定义
  var edit = document.getElementById("edit");
  var mask = document.getElementById("mask");
  var wrapper = document.getElementById("wrapper");
  var add = document.getElementById("add");

  edit.addEventListener("click", function () {
    // mask
    if (mask.classList.contains("fadeIn")) {
      mask.classList.remove("fadeIn");
      mask.classList.add("fadeOut");
      setTimeout(function () {
        mask.style.display = "none";
      }, 500);
    } else {
      mask.classList.remove("fadeOut");
      mask.style.display = "block";
      mask.classList.add("fadeIn");
    }
    // wrapper
    if (wrapper.classList.contains("slideInRight")) {
      wrapper.classList.remove("slideInRight");
      wrapper.classList.add("slideOutRight");
      setTimeout(function () {
        wrapper.style.display = "none";
      }, 500);
    } else {
      wrapper.classList.remove("slideOutRight");
      wrapper.style.display = "block";
      wrapper.classList.add("slideInRight");
      setTimeout(function () {
        document.getElementById("title").focus();
      }, 500);
    }
  });

  mask.addEventListener("click", function () {
    edit.click();
  });

  add.addEventListener("click", function () {
    var title = document.getElementById("title");
    var url = document.getElementById("url");
    var titleValue = title.value.trim();
    var urlValue = url.value.trim();
    if (!titleValue) {
      alert("标题不能为空！");
      title.focus();
      return;
    }
    if (!urlValue) {
      alert("网址不能为空！");
      title.focus();
      return;
    }
    urls.push({ title: titleValue, url: urlValue });
    title.value = "";
    url.value = "";
    setStorageSync("urls", urls);
    initUrls();
    edit.click();
  });

  init();
})();
