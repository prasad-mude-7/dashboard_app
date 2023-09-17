const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7000;

app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://mudeprasad:prasad7@cluster0.cckyz.mongodb.net/myFirstDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const customer_detail = new mongoose.Schema({
  name: String,
  mobile: Number,
  email:String
});


const Item = mongoose.model('customers', customer_detail);

console.log(";;;;",Item);

app.use(express.json());



// Create a new item
// app.post('/customers', async (req, res) => {
//   try {
//     const item = new Item(req.body);
//     await item.save();
//     res.status(201).json(item);
//   } catch (error) {
//     res.status(400).json({ error: 'Could not create item.' });
//   }
// });

// Get all items
app.get('/customers', async (req, res) => {
  const items = await Item.find();
  return res.status(200).json({data:items});
});

// delete customer
app.delete('/delete/:id', async (req, res) => {
    try {
      const itemId = req.params.id;
      const deletedItem = await Item.findByIdAndDelete(itemId);
  
      if (!deletedItem) {
        return res.status(404).json({ error: 'Item not found.' });
      }
  
      return res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Could not delete item.' });
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
