function onClickBtn(){
    var val = document.querySelector('#number').value;

    var form = new FormData();
    form.append('number', val);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/hello.php', true);
    xhr.onload = function(e) {
        console.log(this.status);
        if (this.status == 200) {
            var result = this.response;
            var msg = document.querySelector('#msg');
            msg.textContent = result;
            console.log("aa");
        }
    };
    xhr.send(form);
}