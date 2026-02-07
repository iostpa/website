function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

function getTime() {
    const d = new Date();
    let h = addZero(d.getUTCHours() + 2);
    let m = addZero(d.getUTCMinutes());
    let s = addZero(d.getUTCSeconds());
    const element = document.getElementById("time").innerHTML = `It is currently ${h}:${m}:${s} for me.`;
}

setInterval(getTime(), 100);
