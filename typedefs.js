

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
 * @property {String} Name region
 * @property {String} Path
 * @property {String} Hosts
 * @property {String} Servers
 * @property {String} ConfigPath
 */


/**
 * 
 * @typedef {Object} Versions
 * @property {String} Region
 * @property {String} BuildConfig
 * @property {String} CDNConfig
 * @property {String} KeyRing
 * @property {String} BuildId
 * @property {String} VersionName
 * @property {String} ProductConfig
 * 
 * @property {String} Product
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

