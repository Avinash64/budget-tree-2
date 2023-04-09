user = {                            //stored in users table
    id : "id",                      //generated by database
    username : "username",          //unique
    email : "email",                //unique
    password : "hashed_password",   //hashed
    budget : "budget_id",           //matched id of row in budgets table
}

budget = {                          //stored in budgets table
    budgetId : "id",                //generated by database
    budgetPlan : [],                //list of {categoryName : percent}
    income : []                     //list of incomeItems
}

incomeItem = {
    incomeItemId : "id",
    name : "name of source",
    amount : "amount in $",
    frequency : "frequency",        // either "once", "weekly", "biweekly" "monthly", "yearly"
    createdOn : "date_created"
}