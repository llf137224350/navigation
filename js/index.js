(function () {
  var date = new Date();
  document.getElementById("copyright").innerText = "©" + date.getFullYear();
  // 搜索
  document.getElementById("search").addEventListener("click", function () {
    var value = document.getElementById("input").value.trim();
    if (value) {
      window.open("https://www.baidu.com/s?wd=" + encodeURIComponent(value));
    }
  });
})();
