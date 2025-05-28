const quentionaire = function(t, e, s, n) {
    t.SMCX = t.SMCX || [];
    if (!e.getElementById(n)) {
      var o = e.getElementsByTagName(s);
      var a = o[o.length - 1];
      var c = e.createElement(s);
      c.type = "text/javascript";
      c.async = true;
      c.id = n;
      c.src = "https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd7p9TFgOIm003bmwZQxT3gZPx5UQYkN0Xj_2Bf3cxcPOr8.js";
      a.parentNode.insertBefore(c, a);
    }
  };

  // Wait for DOM to load
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('seeQ').addEventListener('click', function(event) {
      event.preventDefault();
      // Call quentionaire with proper params
      quentionaire(window, document, "script", "smcx-sdk");
    });
  });
