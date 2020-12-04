const backdrop = document.querySelector('.backdrop');
const sideNav = document.querySelector('.mobile-nav');
const model = document.querySelector('.model');


function showOrHideModel(show) {
    if (show) {
        backdrop.style.height = '100vh';

        // model.style.display = 'block';
        model.classList.add('show-model');
    }
    else {
        // model.style.display = 'none';

        model.classList.remove('show-model');

        sideNav.classList.toggle('open-sidenav-menu', false);
        backdrop.style.height = '0vh';
    }
}


const planButtonsArray = Array.from(document.querySelectorAll('.choose-plan-btn'));
for (const btn of planButtonsArray) {

    btn.addEventListener('click', function (event) {
        showOrHideModel(true);
    });
}

document.querySelector('.model-panel button').addEventListener('click', function (event) {
    showOrHideModel(false);
});


/* Display sivenav bar */
document.querySelector('.menu-icon').addEventListener('click', function (event) {

    backdrop.style.height = '100vh';
    sideNav.classList.add('open-sidenav-menu');

});


/* Close model/sidenav on clicking backdrop */

backdrop.addEventListener('click', function (event) {
    showOrHideModel(false);
});