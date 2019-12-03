const express = require('express');
const path = require('path');
const expresshbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//  INICIALIZACIONES
const app =express();
require('./config/database');

//  SETTINGS (Configuraciones del server)
app.set('port', process.env.PORT || 3000);  //..Buscar puerto si no establece el 3000
app.set('views', path.join(__dirname, 'views'));    //..Configurar ruta de vistas
app.engine('.hbs', expresshbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//  MIDLEWARES (Funciones ejecutadas antes que lleguen al server)
app.use(express.urlencoded({    //..Recibir datos de formularios
    extended: false     //..Para no aceptar envio de archivos desde los forms
}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

//  VARIABLES GLOBALES

//  RUTAS
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));


//  ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));

//  SERVER
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'));
});