// document.getElementById('yes').addEventListener('click', function() {
//     document.querySelector('response').style.display = 'block'
//     document.getElementById('response-text').innerHTML = 'yayyyyyyy! bunbun loves you toooo!';
//     document.getElementById('second-gif').style.display = 'block';
//     document.getElementById('response-text').style.display = 'block';
// });

const yes = document.getElementById('yes');
const omg = document.getElementById('omg')
const valPage = document.getElementById('valentine-page');
const yay = document.getElementById('yay');

yes.addEventListener('click', showYay);
omg.addEventListener('click', showYay);

function showYay(){
    valPage.style.display = 'none';
    yay.style.display = 'block';
    body.style.backgroundColor = 'white';
}   