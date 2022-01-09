

const CASCLocal         = require( './blizzard-casc-local' );

const installPath       = 'H:/myGames/World of Warcraft';

const openInstall = async ( intallPaht ) => {

    const casc              = new CASCLocal( installPath );
    await casc.init();
}

openInstall( installPath );