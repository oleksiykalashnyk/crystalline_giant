let
    data = [],
    activeData = [];

const divApp = document.querySelector('#app');

const reset = () => {
    data = [
        {name: "Flying", status: 0},
        {name: "First strike", status: 0},
        {name: "Deathtouch", status: 0},
        {name: "Hexproof", status: 0},
        {name: "Lifelink", status: 0},
        {name: "Menace", status: 0},
        {name: "Reach", status: 0},
        {name: "Trample", status: 0},
        {name: "Vigilance", status: 0},
        {name: "+1/+1", status: 0}
    ];
    activeData = [];
    renderApp();
    document.querySelector('#buttonFun').disabled = false;
}


const renderApp = () => {
    divApp.innerHTML = ``;
    activeData.forEach(e => {
        if(e.status === 1){
            divApp.innerHTML += `<h4>${e.name}</h4>`;
        }
    })
}


const randomNum = () => {
    const nonActiveSkills = data.filter(data => (data.status === 0) ? data.name : 0);
    let randomNumInArray;
    if(nonActiveSkills.length > 1){
        randomNumInArray = Math.floor(Math.random() * nonActiveSkills.length);
        data.forEach(e => {
            if (e.name === nonActiveSkills[randomNumInArray].name){
                e.status = 1;
                activeData.push(e);
            }
        });
        renderApp();
    }else{
        document.querySelector('#buttonFun').disabled = true;
        renderApp();
    }

}

reset();




