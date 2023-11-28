const raw_text = `[
        {
            "id" : 1,
             "name" :"Carlos"
        },
        {
            "id" : 2,
            "name" :"Meg"
        }
]`;


const pet = "Skittles"
console.log(pet[0])//accesses the first letter of "pet"
console.log(raw_text[0])// shows as "[" it shows the entire thing just as text

const real_data = JSON.parse(raw_text); //Parse text return standard js array/objects
console.log(real_data[0].name)
