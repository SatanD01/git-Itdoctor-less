window.onload = function (){
    var click = this.document.querySelector("h1");
    var change = this.document.querySelector('h1');

    click.addEventListener('click', function () {
        change.style.color = 'red';
    })
}//changed