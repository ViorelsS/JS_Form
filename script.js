const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(e);

    const request = new XMLHttpRequest();

    request.open('post', 'login.php');

    request.onload = function () {
        console.log(request.responseText);
    };

    request.send(new FormData(myForm));
});
