$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8080/dw_exam/api/list.php",
        method: 'GET',
        success: function (data) {
            var furniture = JSON.parse(data);
            var contentHTML = '';
            furniture.forEach(element => {
                contentHTML += `<div class="w3-quarter">
                <img src="${element.avatar}" style="width:100%" ">
                <h3>${element.name}</h3>
                <p>${element.price}</p>
            </div>`;
            })
            var list = document.getElementById("content");
            list.innerHTML += contentHTML;
        },
        error: function () {
            alert('Must handle error.');
        }
    });
});