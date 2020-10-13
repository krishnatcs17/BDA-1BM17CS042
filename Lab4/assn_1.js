use Lab4;
db.books.find({});
db.books.save({_id:2, Category:"Business Intelligence", Bookname:"Fundamentals of Business Analytics", Author:"Seema acharya", qty: 55 , price: 500, rol:30, pages: 250})
db.books.save({_id:3, Category:"Analytics", Bookname:"Competing of analytics", Author:"Thomas davenport", qty: 8 , price: 150, rol:20, pages: 150});
db.books.save({_id:4, Category:"Visualization", Bookname:"Visualizing data", Author:"Ben Fry", qty: 12 , price: 325, rol: 6, pages: 450});
db.books.save({_id:5, Category:"Web Mining", Bookname:"Learning R", Author:"Richard", qty: 18 , price: 850, rol: 10, pages: 120});

db.books.mapReduce(
    function() {
        if(this.pages > 300)
            var key = "Big books";
        else 
            var key = "Small books";
        var value = this.pages;
        
        emit(key, value);
    },
    function (key, values) {
        return values.length;
    },
    {
        out: "Book_Records",
    }
);
db.Book_Records.find({});
