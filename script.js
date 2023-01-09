function switchToggle() {
    const bodyElement = document.querySelector('#body');
    const switchButton = document.querySelector('#switch');
    const profileImage = document.querySelector('#profile > img');

    switchButton.addEventListener('click', function(e) {
        e.stopPropagation()
        bodyElement.classList.toggle('light-mode');

        if(bodyElement.classList.contains('light-mode')) {
            // setar imagem do light mode
            
            profileImage.setAttribute('src', './assets/darthVader.jpg');
        } else {
            // setar imagem do dark mode
    
            profileImage.setAttribute('src', './assets/start-troopers.webp');
        };

    });

};

switchToggle()