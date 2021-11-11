function openViewer(url) {
  noScroll.on();
  const $viewer = $("#viewer");
  const $menu = window.$menu;
  $viewer.find("iframe").attr("src", url);
  $viewer.addClass("open");
  $menu._hide();
}

function closeViewer() {
  noScroll.off();
  const $viewer = $("#viewer");
  $viewer.removeClass("open");
  $viewer.find("iframe").attr("src", "blank.html");
}

$(function () {
  $("a.iframe").click((evt) => {
    evt.preventDefault();
    const $target = $(evt.currentTarget);
    openViewer($target.attr("href"));
    return false;
  });

  $("a.close-viewer").click(closeViewer);
});
