import "./import-jquery.js";
import icons from "./assets/img/*.png";

$(() => {
  var liste = [];
  function getter() {
    //  ı can use pure ajax or axios , fetch
    $.getJSON("data.json", function (data) {
      $.each(data, (key, value) => {
        liste.push([value.ad, value.url, value.id, value.price]);
      });
    });
  }
  getter();

  //

  var i = 0;

  setInterval(() => {
    console.log(i);
    if (i < 8) {
      üret(i);
    }

    i += 1;
  }, 10000);

  function üret(i) {
    console.log(liste[i][1]);
    $(".meal").append(`<img src='${icons[liste[i][1]]}' id='${liste[i][2]}'> `);
    $(".content").append(`<p id='${liste[i][0]}'>${liste[i][0]}</p>`);

    $(".price").append(
      `<p id='${liste[i][0]}'>${liste[i][3]}</p> <img src="${icons["pricetag"]}" id="price${i}">`
    );

    setInterval(() => {
      $(`.meal > #${liste[i][2]}`).remove();
      $(`.content> #${liste[i][0]}`).remove();
      $(`.price> #${liste[i][0]}`).remove();
      $(`.price> #price${i}`).remove();
    }, 12000);
  }

  //if not started audio
  window.addEventListener("mousemove", () => {
    document.getElementById("v").play();
  });
});
