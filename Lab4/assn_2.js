db.googleplaystoredata.aggregate([
    {
        $group: {
            _id: "$Category",
            TotalReviews: {$sum: "$Reviews"},
            AverageRating: { $avg: "$Reviews" }
        }
    }
])
    