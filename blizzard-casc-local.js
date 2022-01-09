
const path  = require( 'path' );
const fs    = require( 'fs' );
const fsp   = require( 'fs' ).promises;


class VersionConfig
{
    /**
     * 
     * @param {string} data 
     */
    constructor( data )
    {
        const lines     = data.split( /\r?\n/ );

        // 칼럼헤더

        const headers   = lines.shift().split('|');
        const fields    = new Array( headers.length );
        for ( let i = 0 ; i < headers.length ; ++i )
        {
            fields[i]   = headers[i].split('!')[0].replace( ' ', '' );
        }

        // 레코드

        const records = [] ;
        for ( const record of lines )
        {
            if ( record.trim().length === 0 || record.startsWith( '#' ) ) // 주석, 공란
            {
                continue;
            }

            let node = {};
            const recordFields = record.split( '|' );
            for ( let i=0, n=recordFields.length ; i < n ; ++i )
            {
                node[fields[i]] = recordFields[i]; 
            }

            console.log( node );
            records.push( node );
        }

        this.records = records ;
    }


}

class CASCLocal
{

    constructor( installPath )
    {
        this.installPath = installPath ;
    }

    async init()
    {
        const buildInfo = path.join( this.installPath, '.build.info' );
        const buildData = await fsp.readFile( buildInfo, 'utf8' );
        const config    = new VersionConfig( buildData );
    }
}


module.exports = CASCLocal ;