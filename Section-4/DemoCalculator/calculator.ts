//Type aliases
type InvestmentData  = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
}

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
}

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
    const {initialAmount, annualContribution, expectedReturn, duration} = data;

    if (initialAmount < 0) {
        return 'Initial investment amount cant be in negative.';
    }

    if (duration <= 0) {
        return 'Provide a valid duration.';
    }

    if (expectedReturn < 0) {
        return 'Expected return must be atleast 0';
    }

    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    
    const annualResults: InvestmentResult[] = [];

    for (let i = 0; i < duration; i++) {
        //expected return will be 0.08 - for 8% (8/100)
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;

        annualResults.push({
            year: `Year ${i+1}`,
            totalAmount: total,
            totalContributions,
            totalInterestEarned
        });
    }
    return annualResults;
}

function printResults(results: CalculationResult) {
    if (typeof results === 'string') {
        console.log('result');
        //To stop execution 
        return;
    }

    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        //To omit everything after the decimal
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('--------------------------');
    }
}

const investmentData: InvestmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
}

const results = calculateInvestment(investmentData);

printResults(results);