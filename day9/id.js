var x = document.getElementById("id1");
// x.type = "checkbox";
//  x.disabled = 'true';
// x.readOnly = 'true';
// x.id2 = "check";


var containerDiv = document.getElementById('container');

var label = document.createElement('label');
label.id = "lblFirstName";
label.innerHTML = "Welcome";

containerDiv.appendChild(label);