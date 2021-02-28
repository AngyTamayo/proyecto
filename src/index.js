const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

app.use((req, res, next)=>{
    next();
});

const usuario = require('./routes/usuario');
app.use("/usuario",usuario);

const servicio = require('./routes/servicio');
app.use("/servicio",servicio);

const reserva = require('./routes/reserva');
app.use("/reserva",reserva);

const producto = require('./routes/producto');
app.use("/producto",producto);

const pqr = require('./routes/pqr');
app.use("/pqr",pqr);

const inventario = require('./routes/inventario');
app.use("/inventario",inventario);

const compra = require('./routes/compra');
app.use("/compra",compra);

const comidas = require('./routes/comidas');
app.use("/comidas",comidas);

const distribuidores = require('./routes/distribuidores');
app.use("/distribuidores",distribuidores);

const empleado = require('./routes/empleado');
app.use("/empleado",empleado);




app.listen(PORT, () => {
    console.log("localhost:" + PORT);
})