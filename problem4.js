let INIT_BALANCE = 0;
let HISTORY_LIST = [
  { category: "쇼핑", detail: "모던자바스크립트", money: -40500 },
  { category: "식비", detail: "워크샵 1차비용", money: -13700 },
  { category: "식비", detail: "워크샵 2차비용", money: -2800 },
  { category: "용돈", detail: "추석용돈", money: 150000 },
];
let HISTORY_spend = [
  { category: "쇼핑", detail: "모던자바스크립트", money: -40500 },
  { category: "식비", detail: "워크샵 1차비용", money: -13700 },
  { category: "식비", detail: "워크샵 2차비용", money: -2800 },
];
let HISTORY_income = [
  { category: "용돈", detail: "추석용돈", money: 150000 },
];

const CATEGORIES = {
  '수입': ['용돈', '알바비', '환불액'],
  '지출': ['여행비', '식사비', '교통비']
};

const emptylist = [];
function Showlist(selection) {
  INIT_BALANCE = 0;
  const balanceElement = document.querySelector(".totalsum strong");
  const detailsSection = document.querySelector(".details");
  let AllInputadd = document.querySelector(".incomevalue");
  let AllOutputadd = document.querySelector(".outcomevalue");
  let AllInput = 0 ;
  let AllOutput = 0 ;
  detailsSection.innerHTML = "";

  for (const historyItem of selection) {
//------------- 초기값 업데이드
    INIT_BALANCE += historyItem.money;

    const itemElement = document.createElement("div");
    itemElement.classList.add("item");

    const categoryElement = document.createElement("span");
    categoryElement.classList.add("category");  
    categoryElement.textContent = historyItem.category;

    const detailElement = document.createElement("strong");
    detailElement.classList.add("detail");
    detailElement.textContent = historyItem.detail;

    const moneyElement = document.createElement("span");
    moneyElement.classList.add(
      "money_" + (historyItem.money >= 0 ? "plus" : "minus")
    );
    moneyElement.textContent = " " + Math.abs(historyItem.money);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("x");
    deleteButton.textContent = "x";
          
    if(historyItem.money>0){
      AllInput += historyItem.money;
    }
    else{
      AllOutput += Math.abs(historyItem.money);
    }
//                        click관련된 함수 
    deleteButton.onclick=function(){
      detailsSection.removeChild(itemElement);
      INIT_BALANCE -= historyItem.money;
      balanceElement.textContent = INIT_BALANCE;
      
      if(historyItem.money>0){
        AllInput -= historyItem.money;
        AllInputadd.textContent ="총 수입 "+AllInput;
      }
      else{
        AllOutput -= Math.abs(historyItem.money);
        AllOutputadd.textContent ="총 지출 "+AllOutput;
      }
      
    };

    itemElement.appendChild(categoryElement);
    itemElement.appendChild(detailElement);
    itemElement.appendChild(moneyElement);
    itemElement.appendChild(deleteButton);
    detailsSection.appendChild(itemElement);
  }
  balanceElement.textContent = INIT_BALANCE;
  AllInputadd.textContent ="총 수입 "+AllInput;
  AllOutputadd.textContent ="총 지출 "+AllOutput;


}
Showlist(HISTORY_LIST);

const inputBox = document.getElementById("input_box");
const outputBox = document.getElementById("output_box");

function filtering() {
  if (inputBox.checked && outputBox.checked) {
    Showlist(HISTORY_LIST);
  } else if (inputBox.checked) {
    Showlist(HISTORY_income);
  } else if (outputBox.checked) {
    Showlist(HISTORY_spend);
  } else {
    Showlist(emptylist);
  }
}

inputBox.addEventListener("change", filtering);
outputBox.addEventListener("change", filtering);


var modal = document.getElementById('entryModal');
var showModalBtn = document.getElementById('showModalBtn');
var closeBtn = document.getElementsByClassName('close')[0];
var addEntryBtn = document.getElementById('addEntry');
var incomeBtn = document.getElementById('incomeBtn');
var expenseBtn = document.getElementById('expenseBtn');
var typeSelect = document.getElementById('typeSelect');
var amountInput = document.getElementById('amountInput');
var descriptionInput = document.getElementById('descriptionInput');

var currentType = '';  // '수입' 또는 '지출'

showModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

incomeBtn.addEventListener('click', function() {
  currentType = '수입';
});

expenseBtn.addEventListener('click', function() {
  currentType = '지출';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// 모달 바깥쪽 클릭 시 모달 닫기
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});



addEntryBtn.addEventListener('click', function() {
  // 수입/지출, 종류, 금액, 내용 값을 가져옵니다.
  const type = currentType;
  const category = typeSelect.value;
  const detail = descriptionInput.value;
  let money = parseFloat(amountInput.value);
  if((money == 0)||isNaN(money)){
    return;
  
  };

  // 지출일 경우 음수로 변환
  if (type === '지출') {
    money = -money;
  }

  // 생성된 항목을 HISTORY_LIST에 push
  const newEntry = { category, detail, money };
  HISTORY_LIST.push(newEntry);

  // 필요한 경우, HISTORY_income 또는 HISTORY_spend에도 추가
  if (money > 0) {
    HISTORY_income.push(newEntry);
  } else {
    HISTORY_spend.push(newEntry);
  }

  // 모달을 닫고, 업데이트된 목록을 다시 표시
  alert("저장완료");
  Showlist(HISTORY_LIST);
  
  // 입력 필드 초기화
  currentType = '';
  descriptionInput.value = '';
  amountInput.value = '';
});


function updateCategoryOptions(type) {
  // typeSelect의 현재 옵션을 모두 제거합니다.
  while (typeSelect.firstChild) {
    typeSelect.removeChild(typeSelect.firstChild);
  }

  // 선택된 타입에 따라 적절한 카테고리 옵션들을 추가합니다.
  CATEGORIES[type].forEach(category => {
    const optionElement = document.createElement('option');
    optionElement.value = category;
    optionElement.textContent = category;
    typeSelect.appendChild(optionElement);
  });
}

incomeBtn.addEventListener('click', function() {
  currentType = '수입';
  updateCategoryOptions(currentType);
});

expenseBtn.addEventListener('click', function() {
  currentType = '지출';
  updateCategoryOptions(currentType);
});