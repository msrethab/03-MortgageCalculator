
//Populating selection field with period types

var period = [
	['Monthly', 12],
	['Bimonthly', 6],
];

for (var i = 0; i < period.length; i++){
	$('<option/>').val(period[i][1]).html(period[i][0]).appendTo('#periodSel');
}


//Defining functionality of calculation button

$(document).ready(function(){
	$('#button').on('click', function(){

	//Calling user inputs from document

	var loanBal = $('#loanBal').val();
	var loanRate = $('#loanRate').val();
	var loanTerm = $('#loanTerm').val();
	var period = $('#periodSel').val();

	//Applying appropriate formulas to calculate monthly payments

	var numPayments = loanTerm * period;
	var monthIntRate = (loanRate / 100) / period;
	var compIntRate = Math.pow((1 + monthIntRate), numPayments);
	var intQuotient = (monthIntRate * compIntRate) / (compIntRate - 1)
	var monthlyPayment = loanBal * intQuotient;

	monthlyPayment = monthlyPayment.toFixed(2);

	//Outputting the monthly payment and changing the answer field to light grey

	$('#answer').html("Your monthly payment is  $" + monthlyPayment + ".");
	$('#answer').css('background', '#ddd');
	})
});