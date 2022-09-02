import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  title:{type:String,required:true},
  disc:{type:String},
  color:{type:String},
  border:{type:String},
  id:{type:String},
  menu:{type:Boolean},
  check:{type:Boolean},
  user:{type:mongoose.SchemaTypes.ObjectId},
});

const Todo = mongoose.model('Todo', TodoSchema);

export default Todo;