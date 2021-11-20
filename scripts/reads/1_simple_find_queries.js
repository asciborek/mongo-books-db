//find by id
db.books.find({_id: "978-1449373320"})
//find all with desceding sort by total_pages
db.books.find().sort({total_pages: -1})
//find by open price range
db.books.find({price: {$gt: 20, $lt: 40}})
//find by open price range and minimum total pages
db.books.find({$and: [{price: {$gt: 20, $lt: 40}}, {total_pages: {$gt: 403}}]})
//fined by total pages with mininium total pages or containing given keyword
db.books.find({$or: [{total_pages: {$gte: 432}}, {keywords: {$in: ["Kotlin"]}}]})

