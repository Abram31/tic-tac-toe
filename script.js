const wrapper = document.querySelector('.tic-tac-toe');
const wrapperBackground = wrapper.querySelector('.backgroundWinner');
const textWinner = document.querySelector('.winnerText')

const counterCross = document.querySelector('.crossCounter')
const counterCircle = document.querySelector('.circleCounter')

const square = wrapper.getElementsByClassName('square');

const buttonResset = document.querySelector('.btn-resset');



Array.from(square).forEach((item)  => item.addEventListener('click', crossCircle)); 
buttonResset.addEventListener('dblclick', ressetLocalStorag)


// ---------------------Add classes with figure --------------------------

function crossCircle() {
    if (this.classList.contains('cross')) {
        this.classList.remove('cross');
         this.classList.add('circle');
         scoreCounterCircle(this);
        glassesСheck(circle, 'Circle', counterCircle)
        //  console.log(this.id);
        
    } else if (this.classList.contains('circle')) {
        this.classList.remove('circle')
    } 
    else {
        this.classList.add('cross')
        scoreCounterCross(this)
        glassesСheck(cross, 'Cross', counterCross)
    }
}

// -----------------------Counter of the score in one round ----------------------------
let circle = ['', '', '', '', '', '', '', '', ''];
let cross = ['', '', '', '', '', '', '', '', ''];


function scoreCounterCircle (block)  {
    circle[block.id] = block.id;
    cross[block.id] = '';
    
}
function scoreCounterCross(block) {
    cross[block.id] = block.id;
    circle[block.id] = '';

}

let circlePoint;

function glassesСheck(params, gamer, fullNumber) {
        circlePoint = params.filter((item,index) => {
        if(item) {
            return item;
        }
    })
    if (['0','1','2'].every((item => circlePoint.includes(item))) 
        || ['0', '3', '6'].every((item => circlePoint.includes(item)))  
        || ['2', '5', '8'].every((item => circlePoint.includes(item)))   
        || ['6', '7', '8'].every((item => circlePoint.includes(item)))    
        || ['0', '4', '8'].every((item => circlePoint.includes(item)))
        || ['1', '4', '7'].every((item => circlePoint.includes(item)))
        || ['3', '4', '5'].every((item => circlePoint.includes(item)))
        || ['2', '4', '6'].every((item => circlePoint.includes(item)))
        ) {
            console.log(`${gamer} выйграл эту встречу!!`)
            wrapperBackground.classList.add('activeWinner');
            textWinner.insertAdjacentHTML('afterbegin', `<span class= "winnerText-1"> ${ gamer } is Winner! </span> `)
            
            localStorage.setItem(`${gamer}`, +localStorage.getItem(`${gamer}`) + 1)
            fullNumber.textContent = '';
            fullNumber.insertAdjacentHTML('afterbegin', `${localStorage.getItem(`${gamer}`)}`)
            
            setTimeout( ()=> {
                const textWinner1 = document.querySelector('.winnerText-1')
                textWinner1.classList.add('activeWinner');

            },200)

        } else {console.log('Не прошло!');}


}
// ---------------------Resset counter in on round ---------------------------------------
buttonResset.addEventListener('click', resset);

function resset() {
    
    Array.from(square).forEach(item => item.classList.remove('cross','circle')) 
    wrapperBackground.classList.remove('activeWinner');
    textWinner.classList.remove('activeWinner');
    textWinner.removeChild(textWinner.querySelector('.winnerText-1'))
    circle = ['', '', '', '', '', '', '', '', ''];
    cross = ['', '', '', '', '', '', '', '', ''];
    
}



// ---------------------------------localStorage-----------------------------------------
if (localStorage.getItem('Circle')) {
    counterCircle.textContent = localStorage.getItem('Circle')
} 
 if (localStorage.getItem('Cross')) {
    counterCross.textContent = localStorage.getItem('Cross')
}

function ressetLocalStorag () {
    localStorage.clear();
    counterCircle.textContent = 0;
    counterCross.textContent = 0;
}

// console.log(counterCross);
// console.log(localStorage.getItem(`${'Cross'}`));