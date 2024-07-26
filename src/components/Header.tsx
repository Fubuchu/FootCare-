<reference path="tsfiles/jquery.d.ts" />
<reference path="tsfiles/ej.web.all.d.ts" />

import React from "react";

module SplitButtonComponent {
  $(function () {
    var button = new ej.SplitButton($("#dropdownButton"), {
      size: "large",
      showRoundedCorner: true,
      buttonMode: ej.ButtonMode.Dropdown,
      targetID: "menu",
    });
  });
}

export default Headers;
