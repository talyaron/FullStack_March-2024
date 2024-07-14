import express from 'express';
import bodyParser from 'body-parser';
import cartRoutes from './routes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/cart', cartRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});