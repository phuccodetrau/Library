import express from "express"
import bodyParser from "body-parser"
import books from "./routers/books"
import loans from "./routers/loans"
import plans from "./routers/plans"
import users from "./routers/users"

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