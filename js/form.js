$(document).ready(function () {
    const inputProductCode = $('input[name = product_code]');
    const inputName = $('input[name = name]');
    const inputPrice = $('input[name = price]');
    const inputAvatar = $('input[name = avatar]');
    $('form[name=add-form]').submit(function (event){
        event.preventDefault();
        let data = {
            product_code: inputProductCode.val(),
            name: inputName.val(),
            price: inputPrice.val(),
            avatar: inputAvatar.val(),
        }
        $.ajax({
            url: "http://localhost:8080/dw_exam/api/process-form.php",
            method: 'POST',
            data: JSON.stringify(data),
            success: function (responseData){
                alert(responseData.message);
            },
            error: function (){

            }
        });
    });
});