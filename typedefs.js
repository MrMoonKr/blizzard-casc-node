

/**
 * @typedef {Object} ArchiveIndexChunk
 * @property {String} key Archive Key ( Hash of Name )
 * @property {Number} size CompressedSize
 * @property {Number} offset Archive Offset
 */

/**
 * BLTE Block
 * @typedef {Object} BLTEBlock
 * @property {Number} CompSize
 * @property {Number} DecompSize
 * @property {Number} Hash
 */

/**
 * [urlroot]/wow/cdns 표현 객체
 * @typedef {Object} CDNS
 * @property {String} Name "en", "kr", ... : region
 * @property {String} Path "tpr/wow"
 * @property {String} Hosts
 * @property {String} Servers
 * @property {String} ConfigPath "tpr/configs/data"
 */


/**
 * 
 * @typedef {Object} Versions
 * @property {String} Region region
 * @property {String} BuildConfig build file hex key
 * @property {String} CDNConfig cdn file hex key
 * @property {String} KeyRing null
 * @property {String} BuildId x
 * @property {String} VersionsName x.x.x.x
 * @property {String} ProductConfig product file hex key
 * 
 * @property {String} Product
 */


/**
 * @typedef {Object} BuildConfig
 * @property {String} root
 * @property {String} install
 * @property {String} installSize
 * @property {String} download
 * @property {String} downloadSize
 * @property {String} size
 * @property {String} sizeSize
 * @property {String} encoding
 * @property {String} encodingSize
 * @property {String} patchIndex
 * @property {String} patchIndexSize
 * @property {String} patch
 * @property {String} patchSize
 * @property {String} patchConfig
 * @property {String} buildName
 * @property {String} buildUid
 * @property {String} buildProduct
 * @property {String} buildPlaybuildInstaller
 * @property {String} buildPartialPriority
 */

/**
 * @typedef {Object} CDNConfig
 * @property {String} archives
 * @property {String} archivesIndexSize
 * @property {String} archiveGroup
 * @property {String} patchArchives
 * @property {String} patchArchivesIndexSize
 * @property {String} patchArchiveGroup
 * @property {String} fileIndex
 * @property {String} fileIndexSize
 * @property {String} patchFileIndex
 * @property {String} patchFileIndexSize
 */

/**
 * MongoDB 접속 URI 파싱 결과 저장 객체.  
 * 'mongodb-uri' 모듈 파싱 객체 대체. 타입정보 제공하지 않아서.
 * @typedef {Object} app_mongouri
 * @property {String} username
 * @property {String} password
 * @property {String} hosts
 * @property {String} ports
 * @property {String} database
 * @property {String} options
 */


/**
 * @callback app_callback 앱레벨 콜백함수 시그너쳐
 * @param {String} err 에러문자열
 * @param {Object} res 결과객체
 * @returns {void}
 */

/**
 * 연결 개체 타입 정의
 * @typedef {Object} app_connection
 * @property {String} connName 
 * @property {String} connString 
 * @property {Object} connOptions 
 */

