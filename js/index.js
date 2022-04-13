(function () {
  var date = new Date();
  document.getElementById("copyright").innerText = "©" + date.getFullYear();
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
})();
