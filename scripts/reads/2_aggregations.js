//count books with the given minimum total pages
db.books.count({total_pages: {$gte: 432}})
//group by and count by total pages
db.books.aggregate([
  {
    $group:
        {
          _id: "$total_pages",
          count: {
            $sum:1
          }
        }
  }
])
//count how many books each author has written
db.books.aggregate([
  {
    $unwind: "$authors"
  },
  {
    $group: {
          _id: "$authors",
          count: {
            $sum: 1
          }
        }
  }
])
//get titles by keyword
db.books.aggregate([
  {
    $unwind: "$keywords"
  },
  {
    $group: {
      _id: "$keywords",
      titles: {$push: "$title"}
    }
  },
  {
    $project: {
      _id: 0,
      keyword: "$_id",
      titles: "$titles"
    }
  }
])
//get total count, minimum total pages and maximum total pages by keyword
db.books.aggregate([
  {
    $unwind: "$keywords"
  },
  {
    $group: {
      _id: "$keywords",
      min_total_pages: {
        $min: "$total_pages"
      },
      max_total_pages: {
        $max: "$total_pages"
      },
      books_count: {
        $count: {}
      }
    }
  },
  {
    $project: {
      _id: 0,
      _keyword: "$_id",
      "books count: ": "$books_count",
      "minimum total pages": "$min_total_pages",
      "maximum total pages": "$max_total_pages"
    }
  }
])