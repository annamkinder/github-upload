var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate = function()
 {
    var floatLoanAmount, floatLoanLength, floatAnnualInterest, floatMonthlyPayment;
    
    floatLoanAmount = parseFloat($("loan_amount").value);
    
    floatLoanLength = parseFloat($("loan_length").value);
    
    floatAnnualInterest = parseFloat($("annual_interest").value/100);
    floatAnnualInterest = floatAnnualInterest/12;
    
    floatMonthlyPayment = (floatLoanAmount*floatAnnualInterest) / (1-Math.pow(1+floatAnnualInterest, -floatLoanLength));
    
    $("monthly_payment").value = floatMonthlyPayment.toFixed(2);
    
 };
 
 
 window.onload = function () 
{
    $("loan_length").value = "";
    $("monthly_payment").value = "";
    $("loan_amount").value = "";
    $("annual_interest").value = "";
    $("calc").onclick = calculate;
    $("loan_amount").focus();
};