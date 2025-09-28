//Step2 
let employees = 
[
    {name: "Alondra", hourlyRate: 30, hoursWorked: 50}, 
    {name: "Fabian", hourlyRate: 25, hoursWorked: 40},
    {name: "Alexis", hourlyRate: 20, hoursWorked: 60},
]; 

//Step3
function calculateBasePay(rate, hours)
{
if (hours <= 40)
{return rate * hours}
    else 
    {return rate * 40};
}

//Step4 
function calculateOvertimePay(rate, hours)
{return Math.max(hours - 40, 0) * rate * 1.5};

//Step5 
function calculateTaxes(grossPay)
{return grossPay * .85;}

//Step6
function processPayRoll(employee)
{
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + overtimePay; 
    let netPay = calculateTaxes(grossPay);
        return {
            name: employee.name, 
            basePay: basePay.toFixed(2),
            overtimePay: overtimePay.toFixed(2),
            grossPay: grossPay.toFixed(2),
            netPay: netPay.toFixed(2),
        };
}

//Step7
for (let employee of employees)
{
    console.log(processPayRoll(employee));
}
