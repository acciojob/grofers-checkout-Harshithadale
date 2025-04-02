const getSumBtn = document.createElement("button")
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const getSum = () => {
//Add your code here
	let sum = 0
	const prices = document.querySelectorAll(".price")
	prices.forEach((item)=>{
			sum += parseInt(item.textContent)
	})
	const lastRow = document.createElement("tr")
	const data = document.createElement("td")
	const table = document.querySelector("table")
	data.textContent = `Total : ${sum}`;
	lastRow.appendChild(data)
	table.appendChild(lastRow)
};
getSumBtn.addEventListener("click", getSum);

