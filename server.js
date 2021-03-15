//#region Imports and Constants
const express = require( "express" );
const bodyParser = require( "body-parser" );
const morgan = require( "morgan" );
const mongoose = require( "mongoose" );
const ejs = require( "ejs" );
const engine = require( "ejs-mate" );
const fileUpload = require( "express-fileupload" );
//require( 'readline' );

module.exports.PROJECT_ROOT_DIR = __dirname;
const BASE_DIR = __dirname;
const STATIC_DIR = BASE_DIR + "/public";

const PORT = 8090; //const PORT = process.env.port || 8090
//#endregion

//#region Database Connection
//const connectionString = "mongo://root:123456@ds263988.mlab.com:63988/pinterest";mongoose.connect( connectionString, function ( err ) { if ( err ) console.log( err ); else console.log( err ); } )
//#endregion

const appEx = express();

module.exports = class Server {
    static app = appEx;
    static rootDir = BASE_DIR;
    static main = ( function ( app = appEx ) {
        //#region Middleware
        app.use( fileUpload() );
        /** Directory to store static files */
        app.use( express.static( STATIC_DIR ) );

        app.use( express.static( "wwwroot" ) );
        app.use( express.static( "static" ) );
        app.use( "static", express.static( "public" ) );
        app.engine( "ejs", engine );
        app.set( "view engine", "ejs" );
        app.use( bodyParser.json() );
        app.use(
            bodyParser.urlencoded( {
                extended: true,
            } ),
        );
        app.use( morgan( "dev" ) );
        //#endregion

        //#region Routes
        require( "./routes/main" )( app );
        require( "./routes/pins" )( app );
        require( "./routes/del" )( app );
        //let x = require( "./routes/PinController" );new x( app );

        app.listen( 8090, function ( err ) {
            if ( err ) {
                console.log( err );
            } else {
                console.log(
                    "Connected to port " + PORT + "\n",
                    "\bOpen http://localhost:" + PORT.toString() + "/ or http://127.0.0.1:" + PORT.toString() + "/ on browser",
                );
            }
        } );

        //console.log( "" );

        setTimeout( function () {
            /*process.exit();*/
        }, 12345678 );
    } )();
};
