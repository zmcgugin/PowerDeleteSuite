javascript: (function () {
  window.bookmarkver = "1.4";
  var isReddit =
    document.location.hostname.split(".").slice(-2).join(".") === "reddit.com";
  var isOverview = document.location.href.match(/\/overview\b/);
  if (isReddit && isOverview) {
    var cachBustUrl = `?${new Date().getDate()}`;
    var cachBustUrl = 'https://raw.githubusercontent.com/zmcgugin/PowerDeleteSuite/master/powerdeletesuite.js?' + (new Date().getDate());
    // var cachBustUrl = "https://raw.githubusercontent.com/saandman/PowerDeleteSuite/master/powerdeletesuite.js?" + (new Date().getDate());
    fetch(cachBustUrl)
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        var script = document.createElement("script");
        script.id = "pd-script";
        script.innerHTML = data;
        document.getElementsByTagName("head")[0].appendChild(script);
      })
      .catch(function () {
        alert("Error retrieving PowerDeleteSuite from github");
      });
  } else if (
    confirm(
      "This script can only be run from your own user profile on reddit. Would you like to go there now?"
    )
  ) {
    document.location = "https://old.reddit.com/u/me/overview";
  } else {
    alert("Please go to your reddit profile before running this script");
  }
})();
