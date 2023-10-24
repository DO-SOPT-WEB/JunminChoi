let INIT_BALANCE = 0;
const HISTORY_LIST = [
    { category: "쇼핑", detail: "모던자바스크립트", money: -40500 },
    { category: "식비", detail: "워크샵 1차비용", money: -13700 },
    { category: "식비", detail: "워크샵 2차비용", money: -2800 },
    { category: "용돈", detail: "추석용돈", money: 150000 }
];
const HISTORY_spend = [
    { category: "쇼핑", detail: "모던자바스크립트", money: -40500 },
    { category: "식비", detail: "워크샵 1차비용", money: -13700 },
    { category: "식비", detail: "워크샵 2차비용", money: -2800 },
]
;const HISTORY_income = [
    { category: "용돈", detail: "추석용돈", money: 150000 }
];

const emptylist = [];
function Showlist(selection){
    INIT_BALANCE =0;
    const balanceElement = document.querySelector('.totalsum strong');
    const detailsSection = document.querySelector('.details');
    
    detailsSection.innerHTML = '';

    for (const historyItem of selection) {
        INIT_BALANCE += historyItem.money;
    
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
    
        const categoryElement = document.createElement('span');
        categoryElement.classList.add('category');
        categoryElement.textContent = historyItem.category;
    
        const detailElement = document.createElement('strong');
        detailElement.classList.add('detail');
        detailElement.textContent = historyItem.detail;
    
        const moneyElement = document.createElement('span');
        moneyElement.classList.add('money_' + (historyItem.money >= 0 ? 'plus' : 'minus'));
        moneyElement.textContent = ' ' + Math.abs(historyItem.money);
    
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('x');
        deleteButton.textContent = 'x';
    
        itemElement.appendChild(categoryElement);
        itemElement.appendChild(detailElement);
        itemElement.appendChild(moneyElement);
        itemElement.appendChild(deleteButton);
    
        detailsSection.appendChild(itemElement);
    }
    balanceElement.textContent = INIT_BALANCE;

}
Showlist(HISTORY_LIST);
/*버튼 필터링*/
const inputBox = document.getElementById("input_box");
const outputBox = document.getElementById("output_box");

function filtering(){
    if(inputBox.checked && outputBox.checked){
        Showlist(HISTORY_LIST);
    }
    else if(inputBox.checked){
        Showlist(HISTORY_income);
    }
    else if(outputBox.checked){
        Showlist(HISTORY_spend);
    }    
    else{
        Showlist(emptylist);
    }
}

inputBox.addEventListener('change', filtering);
outputBox.addEventListener('change', filtering);
