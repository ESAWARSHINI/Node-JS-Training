/**Description: Given an array of transactions, identify transactions that are above $5000, occurred in 2023, and belong to the 'Business' category. Transform this filtered
array into an array of strings formatted as "Transaction [id]: $[amount] on [date]".**/
//Data:
const transactions = [
    { id: 'T1', category: 'Personal', amount: 3000, date: '2023-01-15' },
    { id: 'T2', category: 'Business', amount: 6500, date: '2023-02-20' },
    { id: 'T3', category: 'Business', amount: 4500, date: '2023-03-05' },
    // more transactions...
    ];
    //Expected Output:
    
    ["Transaction T2: $6500 on 2023-02-20"]
    
    console.log(transactions.filter((obj)=>obj.category=="Business" && obj.amount>=5000 && obj.date.slice(0,4)=="2023")
                .map((obje)=> `Transaction ${obje.id} : $${obje.amount} on ${obje.date}`));
    
    
      /**Description: Calculate the total salary expenditure for each department from an array of departments, each with an array of employees.**/
    //Data:
    const departments = [
    { name: 'Engineering', employees: [{ salary: 80000 }, { salary: 90000 }] },
    { name: 'Marketing', employees: [{ salary: 60000 }, { salary: 65000 }] },
    // more departments...
    ];
    //Expected Output:
    [{ "Engineering": 170000 }, { "Marketing": 125000 }]
    
    const totalSalary = departments.map(department => ({
      [department.name]: department.employees.reduce((total, employee) => total + employee.salary, 0)
    }));
    
    console.log(totalSalaryExpenditure);
    
    /**Description: Sort an array of weather data objects in descending order of temperature and restructure the data into an object with dates as keys and temperatures as
    values.**/
    //Data:
    const weatherData = [
    { date: '2023-03-01', temperature: 16 },
    { date: '2023-03-02', temperature: 20 },
    { date: '2023-03-03', temperature: 18 },
    // more data...
    ];
    
    //Expected Output:
    
    { "2023-03-02": 20, "2023-03-03": 18, "2023-03-01": 16 }
    
    const data = weatherData.toSorted((a, b) => b.temperature - a.temperature);
    
    
    var obj={};
    for(var ind of data){
        obj[ind.date]=ind.temperature;
    }
    console.log(obj);
    
    /**Description: From an array of products, find products in the 'Electronics' category with more than 50 reviews and a rating of at least 4.0. Calculate the average price of
    these products.**/
    //Data:
    const products = [
    { category: 'Electronics', price: 199.99, reviews: 120, rating: 4.5 },
    { category: 'Electronics', price: 89.99, reviews: 80, rating: 3.9 },
    { category: 'Home', price: 49.99, reviews: 30, rating: 4.2 },
    // more products...
    ];
    //Expected Output:
    199.99 // Assuming only one product meets the criteria
    
    var pri=0;
    products.filter((obj)=>obj.category=="Electronics" && obj.reviews>50 && obj.rating>=4.0).map((obj1)=> pri+=obj1.price);
    console.log(pri/avg.length);
    
    
    /**Description: Merge two arrays of objects based on a common key ( userId ) to create a new array of objects that includes each user's name and their corresponding
    order details.**/
    //Data:
    const users = [
    { userId: 'U1', name: 'Alice' },
    { userId: 'U2', name: 'Bob' },
    // more users...
    ];
    const orders = [
    { userId: 'U1', orderDetails: 'Order 1 Details' },
    { userId: 'U2', orderDetails: 'Order 2 Details' },
    // more orders...
    ];
    
    //Expected Output:
    [
    { name: 'Alice', orderDetails: 'Order 1 Details' },
    { name: 'Bob', orderDetails: 'Order 2 Details' }
    ]
    
    var arr=[];
    for(var obj1 of users){
        for( var obj2 of orders){
            if(obj1.userId==obj2.userId){
                arr.push({"name":obj1.name,"orderDetails":obj2.orderDetails});
            }
        }
    }
    console.log(arr);
    