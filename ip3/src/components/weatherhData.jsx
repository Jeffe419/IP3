import React from "react";

import * as ReactBootStrap from "react-bootstrap";
import './weather.js';

function WeatherhData() {
  return (
<div id="map">
  <p id="demo">A Paragraph.</p>
  <button type="button" onclick="myFunction()">
    Try it
  </button>
  <p>This example links to "myScript.js".</p>
  <p>(myFunction is stored in "myScript.js")</p>
  <script src="weather.js"></script>
</div>


  );
}

export default WeatherhData;
