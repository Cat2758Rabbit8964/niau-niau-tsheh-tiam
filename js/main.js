// 貓貓冊店 — 首頁角色互動
// 桌面:滑鼠移上去 / 鍵盤聚焦即顯示對話框(純 CSS)。
// 觸控:點一下角色開關對話框;點其他地方關閉。
(function () {
  var chars = document.querySelectorAll('.char');
  if (!chars.length) return;

  function closeAll(except) {
    chars.forEach(function (c) {
      if (c !== except) {
        c.classList.remove('open');
        var b = c.querySelector('.char-btn');
        if (b) b.setAttribute('aria-expanded', 'false');
      }
    });
  }

  chars.forEach(function (c) {
    var btn = c.querySelector('.char-btn');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var willOpen = !c.classList.contains('open');
      closeAll(c);
      c.classList.toggle('open', willOpen);
      btn.setAttribute('aria-expanded', String(willOpen));
    });
  });

  document.addEventListener('click', function () { closeAll(null); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll(null);
  });
})();
