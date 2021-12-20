//remove author from the specific book
db.books.updateOne(
    { _id: "978-0321349606" },
    { $pull: { authors: "Doug Lea" }
    })
//add author to the specific book
db.books.updateOne(
        { _id: "978-0321349606" },
        { $push: { authors: "Doug Lea" }
    })
//increment all books price
db.books.updateMany({}, {
    $inc: {
        price: NumberDecimal("1.1")
    }
})
