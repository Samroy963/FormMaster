function Clicky(){
    var table = document.getElementById("table");
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("male").checked ? "Male" :
                 document.getElementById("female").checked ? "Female" : "".value;
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;
    var row = table.insertRow();
    row.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${gender}</td>
    <td>${course}</td>
    <td>${email}</td>                        
    <td><button  onclick="remove(event)" style="background-color: red;">Delete</button></td>
    `;
}


function remove(event)
{
  var del = event.target.closest("tr");
  if (del) del.remove();
}