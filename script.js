let currenLnaguage = 'ka';


let resources = {
    en: {
        UserName: 'User name',
        Login: 'Login'
    },
    ka: {
        UserName: 'მომხმარებლის სახელი',
        Login: 'შესვლა'
    }
}


function switchLanguage(){
    let newLanguage = currenLnaguage == 'ka' ? 'en' : 'ka';

    applyResources(newLanguage);

    currenLnaguage = newLanguage;
}


function applyResources(lang){
    let button = document.getElementById('btnLogin');

    button.value = resources[lang].Login;


    let languageButton = document.getElementById('btnLanguage');
    languageButton.textContent = lang;
}