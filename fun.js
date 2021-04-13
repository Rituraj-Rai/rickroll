document.querySelector("button").addEventListener("click", function () {
  rickroll();
  const count = document.createElement("div");
  count.innerHTML = "<h2>CountDown..</h2>";
  const num = document.createElement("h2");
  count.append(num);
  let i = 11;
  const id = setInterval(() => {
    i--;
    num.innerText = i.toString();
    if (i < 0) {
      num.innerText = "Your Internet seems to be slow..Wait...";
      clearInterval(id);
    }
  }, 1000);
  document.getElementsByClassName("container")[0].append(count);
});
