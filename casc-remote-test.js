

//const CASCLocal         = require( './blizzard-casc-local' );
//const CASCLocal         = require( './src/casc-source-local' );
const CASCRemote        = require( './src/casc-source-remote' );

const installPath       = 'F:/myGames/World of Warcraft';

const openInstall = async ( installPath ) => {

    //const casc          = new CASCLocal( installPath );
    //await casc.init();

    //let casc            = new CASCLocal( installPath ) ;
    let casc            = new CASCRemote( 'kr' );
    await casc.init();
    await casc.load( 0 );
}

openInstall( installPath );