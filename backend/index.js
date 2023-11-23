import express from "express"
import bodyParser from "body-parser"
import books from "./routers/books.js"
import loans from "./routers/loans.js"
import plans from "./routers/plans.js"
import users from "./routers/users.js"
import mongoose from "mongoose"

mongoose.connect("mongodb+srv://hoangdinhhung20012003:hust20210399@cluster1.ixp6j2h.mongodb.net/").then(()=>console.log("Thanh cong")).catch(()=>console.log("That bai"));
const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/books', books);
app.use('/loans', loans);
app.use('/plans', plans);
app.use('/users', users);


app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});