## Cars

#### POST - _localhost:3000/cars_
+ Request (application/json)

    + Body

            {
              "brand": "Toyota",
              "model": "Corolla",
              "spec": "Sedan",
              "year": 2015,
              "fuel": "Gasoline",
              "km": 80000,
              "color": "Silver",
              "fipe": 35000,
              "description": "Well-maintained car in good condition."
            }

+ Response 201 (application/json)

    + Body

            {
            	"id": 1,
            	"brand": "Toyota",
            	"model": "Corolla",
            	"spec": "Sedan",
            	"year": 2015,
            	"fuel": "Gasoline",
            	"km": 80000,
            	"color": "Silver",
            	"fipe": 35000,
            	"description": "Well-maintained car in good condition.",
            	"created_at": "2024-04-19T03:17:17.119Z"
            }
           
#### GET - _localhost:3000/cars_
+ Request (application/json)

+ Response 200 (application/json)

    + Body

            
            [
            	{
            		"id": 1,
            		"brand": "Toyota",
            		"model": "Corolla",
            		"spec": "Sedan",
            		"year": 2015,
            		"fuel": "Gasoline",
            		"km": 80000,
            		"color": "Silver",
            		"fipe": 35000,
            		"description": "Well-maintained car in good condition.",
            		"created_at": "2024-04-19T03:17:17.119Z"
            	}
            ]
            
#### PUT - _localhost:3000/cars/:id_
+ Request (application/json)
    + Body

            {
              "brand": "Toyota",
              "model": "Corolla",
              "spec": "Sedan",
              "year": 2015,
              "fuel": "Gasoline",
              "km": 80000,
              "color": "Silver",
              "fipe": 35000,
              "description": "Well-maintained car in a very good condition."
            }

+ Response 200 (application/json)

    + Body

            {
            	"id": 1,
            	"brand": "Toyota",
            	"model": "Corolla",
            	"spec": "Sedan",
            	"year": 2015,
            	"fuel": "Gasoline",
            	"km": 80000,
            	"color": "Silver",
            	"fipe": 35000,
            	"description": "Well-maintained car in a very good condition.",
            	"created_at": "2024-04-19T03:17:17.119Z"
            }
            
#### GET - _localhost:3000/cars/:id_
+ Request (application/json)
+ Response 200 (application/json)

    + Body

            {
            	"id": 1,
            	"brand": "Toyota",
            	"model": "Corolla",
            	"spec": "Sedan",
            	"year": 2015,
            	"fuel": "Gasoline",
            	"km": 80000,
            	"color": "Silver",
            	"fipe": 35000,
            	"description": "Well-maintained car in a very good condition.",
            	"created_at": "2024-04-19T03:17:17.119Z"
            }
        	    
#### DELETE - _localhost:3000/cars/:id_
+ Request (nobody)
+ Response 204 (no-content)
