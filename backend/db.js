// const mongoose = require('mongoose');

// // const mongoURI = 'mongodb+srv://singhcharnjeet1998:gofood@cluster0.mlxm9hs.mongodb.net/gofoodsa?retryWrites=true&w=majority&appName=Cluster0';

// const mongoURI = 'mongodb+srv://singhcharnjeet1998:gofood@cluster0.mlxm9hs.mongodb.net/gofoodsa?retryWrites=true&w=majority&appName=Cluster0';

// const mongoDB = async () => {
//     try {
//         // Connect to MongoDB
//         await mongoose.connect(mongoURI, { useNewUrlParser: true });

//         console.log("Connected to MongoDB");
        
//         // Access the collection
//         const fetched_data = await mongoose.connection.db.collection('food_items');
        
//         // Fetch data from the collection
//         const data = await fetched_data.find({}).toArray();

//         console.log(data);
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error.message);
//         process.exit(1);
//     }
// };



// module.exports = mongoDB;
const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://singhcharnjeet1998:gofood@cluster0.mlxm9hs.mongodb.net/gofoodsa?retryWrites=true&w=majority&appName=Cluster0';
const mongoURI = 'mongodb+srv://singhcharnjeet1998:gofood@foodapp.wuu9n5h.mongodb.net/foodApp?retryWrites=true&w=majority&appName=FoodApp';

const connectToMongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        
        const FoodItem = mongoose.model('food_items', {
          
            name: String,

            
        });
        const FoodCategory = mongoose.model('foodCategory', {
            
            name: String,

            
           
        });

        // Fetch data from the collection
        const foodItems = await FoodItem.find({});
        console.log(foodItems);
        const foodCategory = await FoodCategory.find({});

        // Store data in a global variable if needed
        global.food_items = foodItems;
        console.log(global.food_items);
        global.foodCategory = foodCategory;
        console.log(global.food_items);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectToMongoDB;
