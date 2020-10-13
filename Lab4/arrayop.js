db.countries.insert({
    country_id: 86,
    name: "India",
    capital_city: "New Delhi",
    cities: ["Bangalore", "Pune", "Udupi", "Hyderabad", "Mangalore", "Indore", "Ahmedabad"],
    population: 1350000000
});
db.countries.find();

db.countries.update({}, {$push: {cities: "Kolkatta"}})

db.countries.update({}, {$pop: {cities: 1}})

db.countries.update({}, {$pull: {cities: "Chennai"}})

db.countries.update({}, {$addToSet: {cities: "Mumbai"}})

db.countries.update({}, {$set: {"cities.0": "Bengaluru"}})