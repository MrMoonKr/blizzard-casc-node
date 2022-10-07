

//const CASCLocal         = require( './blizzard-casc-local' );
const CASCLocal         = require( './src/casc-source-local' );

const installPath       = 'F:/myGames/World of Warcraft';

const openInstall = async ( intallPaht ) => {

    //const casc          = new CASCLocal( installPath );
    //await casc.init();

    let casc            = new CASCLocal( installPath ) ;
    await casc.init();
    await casc.load( 0 );
}

openInstall( installPath );