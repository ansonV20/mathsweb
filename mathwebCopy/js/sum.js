const myInput = document.getElementById("chosenum");
let div = document.getElementById("send");
let main = document.getElementById("main");
let data = document.getElementById("data");

// let ansData = document.getElementById("data");
let display = 1;


let ms = 0;
let s = 0;
let m = 0;
let t = 0;
const displayS = document.getElementById("seconds");
const displayM = document.getElementById("minuts");

const userScore = document.getElementById("userScore");
const userQusetion = document.getElementById("userQusetion");
const userCorrect = document.getElementById("userCorrect");
const userTime = document.getElementById("userTime");
const grade = document.getElementById("grade");



function createQuestion() {
    let anscheck = []

    // 獲取用戶輸入的數字
    let number = parseInt(document.getElementById('chosenum').value);
    if (number != 0) {

        // 獲取顯示隨機數字的容器
        let container = document.getElementById("question");
        container.innerHTML = ""; // 清空容器


        // 生成相應數量的隨機數字,+
        for (let i = 1; i <= number; i++) {
            let num1 = Math.floor(Math.random() * 10)+ 1;
            let num2 = Math.floor(Math.random() * 10)+ 1;

            anscheck.push(num1 + num2);

            // 創建容器，用於包裝隨機數字和輸入框
            let numContainer = document.createElement("div");
            numContainer.className = "numbox";
            numContainer.id = "numbox"+i;
            let num1_1 = num1;
            let num2_1 = num2;
            let i2 = i;
            if (num1 < 10) {
                num1_1 = "0" + num1;
            }

            if (num2 < 10) {
                num2_1 = "0" + num2;
            }

            if (i < 10) {
                i2 = "0" + i;
            }

            // 創建數字元素
            let num = document.createElement("span");
            num.className = "num";
            num.textContent = i2 + ": " + num1_1 + "+" + num2_1;
            numContainer.appendChild(num);
            
            let inside = document.createElement("span");
            inside.className = "inside";
            inside.id = "inside"+i;

            // 文字元素
            let txt = document.createElement("span");
            txt.className = "txt";
            txt.id = "txt"+i;
            txt.textContent = "";
            inside.appendChild(txt);

            // 答案元素
            let realAns = document.createElement("span");
            realAns.className = "realAns";
            realAns.id = "realAns"+i;
            realAns.textContent = "";
            inside.appendChild(realAns);


            numContainer.appendChild(inside);

            // 創建輸入框元素
            let input = document.createElement("input");
            // input.maxLength = "6";
            // input.size = "6";
            input.className = "txtbox";
            input.id = i;
            input.type = "number";
            input.pattern = "[0-9]";
            input.placeholder = "=";
            inside.appendChild(input);

            // 將容器添加到輸出容器中
            container.appendChild(numContainer);
            console.log(anscheck)
        }


        console.log(container)
        return ans = anscheck;
    }
}

function checkAns() {
    let wrong = false;
    let ok = 0;

    for (let i = 0; i < ans.length; i++) {
        let ac = document.getElementById("numbox"+(i+1));
        let userAns = parseInt(document.getElementById(i+1).value);
        if (Number.isInteger(userAns) ==  false) {
            document.getElementById('txt'+(i+1)).innerText = "Wrong Type";
            wrong = true;
            console.log("NaN")
        } else {
            document.getElementById('txt'+(i+1)).innerText = "";
                }
    }

    for (let i = 0; i < ans.length && wrong == false; i++) {
        let ac = document.getElementById("numbox"+(i+1));
        let userAns = parseInt(document.getElementById(i+1).value);
        let rans = document.getElementById("realAns"+(i+1));
        if(userAns ===  parseInt(ans[i])) {
            document.getElementById('txt'+(i+1)).innerText = "Correct, ans is";
            document.getElementById('realAns'+(i+1)).innerText = "->";
            ok++;
            console.log("ok", ok)
        } else {
            document.getElementById('txt'+(i+1)).innerText = "Incorrect, ans is";
            document.getElementById('realAns'+(i+1)).innerText = ans[i];
            console.log("Incorrect")
        }
    }
}

function show(num) {
    if (num == 1) {
        main.style.display = "";
        div.style.display = "";
    } else {
        div.style.display = "none";
    }
}

