module.exports = db => {
    const funds = [
      {
        "name": "Jabair",
        "age": 32,
        "occupation": "Software-Developer",
        "birthday": "November 6 1989",
        "houseStatus": "Rent",
        "rentCost": 1000,
        "yearlyNetIncome": 1000000,
        "requestedLoanAmount": 500000,
        "approvedLoan": 200000,
      },
      {
        "name": "Franchesko",
        "age": 32,
        "occupation": "Software-Developer",
        "birthday": "July 9 1995",
        "houseStatus": "Rent",
        "rentCost": 1000,
        "yearlyNetIncome": 1000000,
        "requestedLoanAmount": 500000,
        "approvedLoan": 200000,
      },
      {
        "name": "Matt",
        "age": 32,
        "occupation": "Software-Developer",
        "birthday": "July 9 1995",
        "houseStatus": "Rent",
        "rentCost": 1000,
        "yearlyNetIncome": 1000000,
        "requestedLoanAmount": 500000,
        "approvedLoan": 200000,
      },
      {
        "name": "Lee",
        "age": 32,
        "occupation": "Software-Developer",
        "birthday": "July 9 1995",
        "houseStatus": "Rent",
        "rentCost": 1000,
        "yearlyNetIncome": 1000000,
        "requestedLoanAmount": 500000,
        "approvedLoan": 200000,
      },
      {
        "name": "Megan",
        "age": 32,
        "occupation": "Software-Developer",
        "birthday": "July 9 1995",
        "houseStatus": "Rent",
        "rentCost": 1000,
        "yearlyNetIncome": 1000000,
        "requestedLoanAmount": 500000,
        "approvedLoan": 200000,
      },
      {
        "name": "Evan",
        "age": 32,
        "occupation": "Software-Developer",
        "birthday": "July 9 1995",
        "houseStatus": "Rent",
        "rentCost": 1000,
        "yearlyNetIncome": 1000000,
        "requestedLoanAmount": 500000,
        "approvedLoan": 200000,
      },
      {
        "name": "Cody",
        "age": 32,
        "occupation": "Software-Developer",
        "birthday": "July 9 1995",
        "houseStatus": "Rent",
        "rentCost": 1000,
        "yearlyNetIncome": 1000000,
        "requestedLoanAmount": 500000,
        "approvedLoan": 200000,
      },
      {
        "name": "Omaid",
        "age": 32,
        "occupation": "Software-Developer",
        "birthday": "July 9 1995",
        "houseStatus": "Rent",
        "rentCost": 1000,
        "yearlyNetIncome": 1000000,
        "requestedLoanAmount": 500000,
        "approvedLoan": 200000,
      },

    ]
  
    funds.forEach(fund => db.funds.insert(fund))
  }
  