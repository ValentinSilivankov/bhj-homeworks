let counterDead = document.getElementById('dead').innerHTML;
let counterLost = document.getElementById('lost').innerHTML;

getHole = index => document.getElementById(`hole${index}`);

for ( holeIndex = 1; holeIndex < 10; holeIndex++ ) {
    let hole = getHole(holeIndex);
    hole.addEventListener( 'click', function() {
        if ( hole.classList.contains( 'hole_has-mole')){
            counterDead++;
            dead.textContent = counterDead;
        } else {
            counterLost++;
            lost.textContent = counterLost;
        }

        if (counterDead == 10) {
            alert ('Победа!!!');
            next()
        }
        else if (counterLost == 5){
            alert("Вы ПРОИГРАЛИ!!!");
            next()
        }
    });

    function next(){
        counterDead = 0;
        counterLost = 0;
        dead.textContent = counterDead;
        lost.textContent = counterLost;
    }
}