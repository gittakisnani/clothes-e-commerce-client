import { SortsType } from "../types/types";

const CATEGORIES = ['T-Shirt', 'Sweatshirt', 'Dress', 'Pants and skirt', 'Swimsuit', 'Stuff & Accessories'];
const TYPE_FILTERS = ['Basic', 'Pattern', 'Hoodie', 'Zipper', 'Oversize']
const COLORS = {
    black: '#000000',
    white: '#ffffff',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    yellow: '#ffff00',
    brown: '#a52a2a',
    grey: '#808080',
    multicolor: ''
} 

const SIZES = ['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '6xl']

const SORTS: SortsType[] = ['Most Popular', 'Newest', 'Price [Low - High]', 'Price [High - Low]' ]

const DETAILS = ['Regular fit', 'Ribbed cuffs and hem', 'Pullover with hood', 'Supports the Better Cotton Initiative', '77% cotton, 23% recycled polyester fleece', 'Imported', 'Warm and cozy', 'Product color: White', 'Kangaroo pocket', 'Product code: HU1522']

const COUNTRIES = [
	{ 'AD': {'name': 'ANDORRA','code': '376'} },
	{ 'AE': {'name': 'UNITED ARAB EMIRATES','code': '971'} },
	{ 'AF': {'name': 'AFGHANISTAN','code': '93'} },
	{ 'AG': {'name': 'ANTIGUA AND BARBUDA','code': '1268'} },
	{ 'AI': {'name': 'ANGUILLA','code': '1264'} },
	{ 'AL': {'name': 'ALBANIA','code': '355'} },
	{ 'AM': {'name': 'ARMENIA','code': '374'} },
	{ 'AN': {'name': 'NETHERLANDS ANTILLES','code': '599'} },
	{ 'AO': {'name': 'ANGOLA','code': '244'} },
	{ 'AQ': {'name': 'ANTARCTICA','code': '672'} },
	{ 'AR': {'name': 'ARGENTINA','code': '54'} },
	{ 'AS': {'name': 'AMERICAN SAMOA','code': '1684'} },
	{ 'AT': {'name': 'AUSTRIA','code': '43'} },
	{ 'AU': {'name': 'AUSTRALIA','code': '61'} },
	{ 'AW': {'name': 'ARUBA','code': '297'} },
	{ 'AZ': {'name': 'AZERBAIJAN','code': '994'} },
	{ 'BA': {'name': 'BOSNIA AND HERZEGOVINA','code': '387'} },
	{ 'BB': {'name': 'BARBADOS','code': '1246'} },
	{ 'BD': {'name': 'BANGLADESH','code': '880'} },
	{ 'BE': {'name': 'BELGIUM','code': '32'} },
	{ 'BF': {'name': 'BURKINA FASO','code': '226'} },
	{ 'BG': {'name': 'BULGARIA','code': '359'} },
	{ 'BH': {'name': 'BAHRAIN','code': '973'} },
	{ 'BI': {'name': 'BURUNDI','code': '257'} },
	{ 'BJ': {'name': 'BENIN','code': '229'} },
	{ 'BL': {'name': 'SAINT BARTHELEMY','code': '590'} },
	{ 'BM': {'name': 'BERMUDA','code': '1441'} },
	{ 'BN': {'name': 'BRUNEI DARUSSALAM','code': '673'} },
	{ 'BO': {'name': 'BOLIVIA','code': '591'} },
	{ 'BR': {'name': 'BRAZIL','code': '55'} },
	{ 'BS': {'name': 'BAHAMAS','code': '1242'} },
	{ 'BT': {'name': 'BHUTAN','code': '975'} },
	{ 'BW': {'name': 'BOTSWANA','code': '267'} },
	{ 'BY': {'name': 'BELARUS','code': '375'} },
	{ 'BZ': {'name': 'BELIZE','code': '501'} },
	{ 'CA': {'name': 'CANADA','code': '1'} },
	{ 'CC': {'name': 'COCOS (KEELING) ISLANDS','code': '61'} },
	{ 'CD': {'name': 'CONGO, THE DEMOCRATIC REPUBLIC OF THE','code': '243'} },
	{ 'CF': {'name': 'CENTRAL AFRICAN REPUBLIC','code': '236'} },
	{ 'CG': {'name': 'CONGO','code': '242'} },
	{ 'CH': {'name': 'SWITZERLAND','code': '41'} },
	{ 'CI': {'name': 'COTE D IVOIRE','code': '225'} },
	{ 'CK': {'name': 'COOK ISLANDS','code': '682'} },
	{ 'CL': {'name': 'CHILE','code': '56'} },
	{ 'CM': {'name': 'CAMEROON','code': '237'} },
	{ 'CN': {'name': 'CHINA','code': '86'} },
	{ 'CO': {'name': 'COLOMBIA','code': '57'} },
	{ 'CR': {'name': 'COSTA RICA','code': '506'} },
	{ 'CU': {'name': 'CUBA','code': '53'} },
	{ 'CV': {'name': 'CAPE VERDE','code': '238'} },
	{ 'CX': {'name': 'CHRISTMAS ISLAND','code': '61'} },
	{ 'CY': {'name': 'CYPRUS','code': '357'} },
	{ 'CZ': {'name': 'CZECH REPUBLIC','code': '420'} },
	{ 'DE': {'name': 'GERMANY','code': '49'} },
	{ 'DJ': {'name': 'DJIBOUTI','code': '253'} },
	{ 'DK': {'name': 'DENMARK','code': '45'} },
	{ 'DM': {'name': 'DOMINICA','code': '1767'} },
	{ 'DO': {'name': 'DOMINICAN REPUBLIC','code': '1809'} },
	{ 'DZ': {'name': 'ALGERIA','code': '213'} },
	{ 'EC': {'name': 'ECUADOR','code': '593'} },
	{ 'EE': {'name': 'ESTONIA','code': '372'} },
	{ 'EG': {'name': 'EGYPT','code': '20'} },
	{ 'ER': {'name': 'ERITREA','code': '291'} },
	{ 'ES': {'name': 'SPAIN','code': '34'} },
	{ 'ET': {'name': 'ETHIOPIA','code': '251'} },
	{ 'FI': {'name': 'FINLAND','code': '358'} },
	{ 'FJ': {'name': 'FIJI','code': '679'} },
	{ 'FK': {'name': 'FALKLAND ISLANDS (MALVINAS)','code': '500'} },
	{ 'FM': {'name': 'MICRONESIA, FEDERATED STATES OF','code': '691'} },
	{ 'FO': {'name': 'FAROE ISLANDS','code': '298'} },
	{ 'FR': {'name': 'FRANCE','code': '33'} },
	{ 'GA': {'name': 'GABON','code': '241'} },
	{ 'GB': {'name': 'UNITED KINGDOM','code': '44'} },
	{ 'GD': {'name': 'GRENADA','code': '1473'} },
	{ 'GE': {'name': 'GEORGIA','code': '995'} },
	{ 'GH': {'name': 'GHANA','code': '233'} },
	{ 'GI': {'name': 'GIBRALTAR','code': '350'} },
	{ 'GL': {'name': 'GREENLAND','code': '299'} },
	{ 'GM': {'name': 'GAMBIA','code': '220'} },
	{ 'GN': {'name': 'GUINEA','code': '224'} },
	{ 'GQ': {'name': 'EQUATORIAL GUINEA','code': '240'} },
	{ 'GR': {'name': 'GREECE','code': '30'} },
	{ 'GT': {'name': 'GUATEMALA','code': '502'} },
	{ 'GU': {'name': 'GUAM','code': '1671'} },
	{ 'GW': {'name': 'GUINEA-BISSAU','code': '245'} },
	{ 'GY': {'name': 'GUYANA','code': '592'} },
	{ 'HK': {'name': 'HONG KONG','code': '852'} },
	{ 'HN': {'name': 'HONDURAS','code': '504'} },
	{ 'HR': {'name': 'CROATIA','code': '385'} },
	{ 'HT': {'name': 'HAITI','code': '509'} },
	{ 'HU': {'name': 'HUNGARY','code': '36'} },
	{ 'ID': {'name': 'INDONESIA','code': '62'} },
	{ 'IE': {'name': 'IRELAND','code': '353'} },
	{ 'IL': {'name': 'ISRAEL','code': '972'} },
	{ 'IM': {'name': 'ISLE OF MAN','code': '44'} },
	{ 'IN': {'name': 'INDIA','code': '91'} },
	{ 'IQ': {'name': 'IRAQ','code': '964'} },
	{ 'IR': {'name': 'IRAN, ISLAMIC REPUBLIC OF','code': '98'} },
	{ 'IS': {'name': 'ICELAND','code': '354'} },
	{ 'IT': {'name': 'ITALY','code': '39'} },
	{ 'JM': {'name': 'JAMAICA','code': '1876'} },
	{ 'JO': {'name': 'JORDAN','code': '962'} },
	{ 'JP': {'name': 'JAPAN','code': '81'} },
	{ 'KE': {'name': 'KENYA','code': '254'} },
	{ 'KG': {'name': 'KYRGYZSTAN','code': '996'} },
	{ 'KH': {'name': 'CAMBODIA','code': '855'} },
	{ 'KI': {'name': 'KIRIBATI','code': '686'} },
	{ 'KM': {'name': 'COMOROS','code': '269'} },
	{ 'KN': {'name': 'SAINT KITTS AND NEVIS','code': '1869'} },
	{ 'KP': {'name': 'KOREA DEMOCRATIC PEOPLES REPUBLIC OF','code': '850'} },
	{ 'KR': {'name': 'KOREA REPUBLIC OF','code': '82'} },
	{ 'KW': {'name': 'KUWAIT','code': '965'} },
	{ 'KY': {'name': 'CAYMAN ISLANDS','code': '1345'} },
	{ 'KZ': {'name': 'KAZAKSTAN','code': '7'} },
	{ 'LA': {'name': 'LAO PEOPLES DEMOCRATIC REPUBLIC','code': '856'} },
	{ 'LB': {'name': 'LEBANON','code': '961'} },
	{ 'LC': {'name': 'SAINT LUCIA','code': '1758'} },
	{ 'LI': {'name': 'LIECHTENSTEIN','code': '423'} },
	{ 'LK': {'name': 'SRI LANKA','code': '94'} },
	{ 'LR': {'name': 'LIBERIA','code': '231'} },
	{ 'LS': {'name': 'LESOTHO','code': '266'} },
	{ 'LT': {'name': 'LITHUANIA','code': '370'} },
	{ 'LU': {'name': 'LUXEMBOURG','code': '352'} },
	{ 'LV': {'name': 'LATVIA','code': '371'} },
	{ 'LY': {'name': 'LIBYAN ARAB JAMAHIRIYA','code': '218'} },
	{ 'MA': {'name': 'MOROCCO','code': '212'} },
	{ 'MC': {'name': 'MONACO','code': '377'} },
	{ 'MD': {'name': 'MOLDOVA, REPUBLIC OF','code': '373'} },
	{ 'ME': {'name': 'MONTENEGRO','code': '382'} },
	{ 'MF': {'name': 'SAINT MARTIN','code': '1599'} },
	{ 'MG': {'name': 'MADAGASCAR','code': '261'} },
	{ 'MH': {'name': 'MARSHALL ISLANDS','code': '692'} },
	{ 'MK': {'name': 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF','code': '389'} },
	{ 'ML': {'name': 'MALI','code': '223'} },
	{ 'MM': {'name': 'MYANMAR','code': '95'} },
	{ 'MN': {'name': 'MONGOLIA','code': '976'} },
	{ 'MO': {'name': 'MACAU','code': '853'} },
	{ 'MP': {'name': 'NORTHERN MARIANA ISLANDS','code': '1670'} },
	{ 'MR': {'name': 'MAURITANIA','code': '222'} },
	{ 'MS': {'name': 'MONTSERRAT','code': '1664'} },
	{ 'MT': {'name': 'MALTA','code': '356'} },
	{ 'MU': {'name': 'MAURITIUS','code': '230'} },
	{ 'MV': {'name': 'MALDIVES','code': '960'} },
	{ 'MW': {'name': 'MALAWI','code': '265'} },
	{ 'MX': {'name': 'MEXICO','code': '52'} },
	{ 'MY': {'name': 'MALAYSIA','code': '60'} },
	{ 'MZ': {'name': 'MOZAMBIQUE','code': '258'} },
	{ 'NA': {'name': 'NAMIBIA','code': '264'} },
	{ 'NC': {'name': 'NEW CALEDONIA','code': '687'} },
	{ 'NE': {'name': 'NIGER','code': '227'} },
	{ 'NG': {'name': 'NIGERIA','code': '234'} },
	{ 'NI': {'name': 'NICARAGUA','code': '505'} },
	{ 'NL': {'name': 'NETHERLANDS','code': '31'} },
	{ 'NO': {'name': 'NORWAY','code': '47'} },
	{ 'NP': {'name': 'NEPAL','code': '977'} },
	{ 'NR': {'name': 'NAURU','code': '674'} },
	{ 'NU': {'name': 'NIUE','code': '683'} },
	{ 'NZ': {'name': 'NEW ZEALAND','code': '64'} },
	{ 'OM': {'name': 'OMAN','code': '968'} },
	{ 'PA': {'name': 'PANAMA','code': '507'} },
	{ 'PE': {'name': 'PERU','code': '51'} },
	{ 'PF': {'name': 'FRENCH POLYNESIA','code': '689'} },
	{ 'PG': {'name': 'PAPUA NEW GUINEA','code': '675'} },
	{ 'PH': {'name': 'PHILIPPINES','code': '63'} },
	{ 'PK': {'name': 'PAKISTAN','code': '92'} },
	{ 'PL': {'name': 'POLAND','code': '48'} },
	{ 'PM': {'name': 'SAINT PIERRE AND MIQUELON','code': '508'} },
	{ 'PN': {'name': 'PITCAIRN','code': '870'} },
	{ 'PR': {'name': 'PUERTO RICO','code': '1'} },
	{ 'PT': {'name': 'PORTUGAL','code': '351'} },
	{ 'PW': {'name': 'PALAU','code': '680'} },
	{ 'PY': {'name': 'PARAGUAY','code': '595'} },
	{ 'QA': {'name': 'QATAR','code': '974'} },
	{ 'RO': {'name': 'ROMANIA','code': '40'} },
	{ 'RS': {'name': 'SERBIA','code': '381'} },
	{ 'RU': {'name': 'RUSSIAN FEDERATION','code': '7'} },
	{ 'RW': {'name': 'RWANDA','code': '250'} },
	{ 'SA': {'name': 'SAUDI ARABIA','code': '966'} },
	{ 'SB': {'name': 'SOLOMON ISLANDS','code': '677'} },
	{ 'SC': {'name': 'SEYCHELLES','code': '248'} },
	{ 'SD': {'name': 'SUDAN','code': '249'} },
	{ 'SE': {'name': 'SWEDEN','code': '46'} },
	{ 'SG': {'name': 'SINGAPORE','code': '65'} },
	{ 'SH': {'name': 'SAINT HELENA','code': '290'} },
	{ 'SI': {'name': 'SLOVENIA','code': '386'} },
	{ 'SK': {'name': 'SLOVAKIA','code': '421'} },
	{ 'SL': {'name': 'SIERRA LEONE','code': '232'} },
	{ 'SM': {'name': 'SAN MARINO','code': '378'} },
	{ 'SN': {'name': 'SENEGAL','code': '221'} },
	{ 'SO': {'name': 'SOMALIA','code': '252'} },
	{ 'SR': {'name': 'SURINAME','code': '597'} },
	{ 'ST': {'name': 'SAO TOME AND PRINCIPE','code': '239'} },
	{ 'SV': {'name': 'EL SALVADOR','code': '503'} },
	{ 'SY': {'name': 'SYRIAN ARAB REPUBLIC','code': '963'} },
	{ 'SZ': {'name': 'SWAZILAND','code': '268'} },
	{ 'TC': {'name': 'TURKS AND CAICOS ISLANDS','code': '1649'} },
	{ 'TD': {'name': 'CHAD','code': '235'} },
	{ 'TG': {'name': 'TOGO','code': '228'} },
	{ 'TH': {'name': 'THAILAND','code': '66'} },
	{ 'TJ': {'name': 'TAJIKISTAN','code': '992'} },
	{ 'TK': {'name': 'TOKELAU','code': '690'} },
	{ 'TL': {'name': 'TIMOR-LESTE','code': '670'} },
	{ 'TM': {'name': 'TURKMENISTAN','code': '993'} },
	{ 'TN': {'name': 'TUNISIA','code': '216'} },
	{ 'TO': {'name': 'TONGA','code': '676'} },
	{ 'TR': {'name': 'TURKEY','code': '90'} },
	{ 'TT': {'name': 'TRINIDAD AND TOBAGO','code': '1868'} },
	{ 'TV': {'name': 'TUVALU','code': '688'} },
	{ 'TW': {'name': 'TAIWAN, PROVINCE OF CHINA','code': '886'} },
	{ 'TZ': {'name': 'TANZANIA, UNITED REPUBLIC OF','code': '255'} },
	{ 'UA': {'name': 'UKRAINE','code': '380'} },
	{ 'UG': {'name': 'UGANDA','code': '256'} },
	{ 'US': {'name': 'UNITED STATES','code': '1'} },
	{ 'UY': {'name': 'URUGUAY','code': '598'} },
	{ 'UZ': {'name': 'UZBEKISTAN','code': '998'} },
	{ 'VA': {'name': 'HOLY SEE (VATICAN CITY STATE)','code': '39'} },
	{ 'VC': {'name': 'SAINT VINCENT AND THE GRENADINES','code': '1784'} },
	{ 'VE': {'name': 'VENEZUELA','code': '58'} },
	{ 'VG': {'name': 'VIRGIN ISLANDS, BRITISH','code': '1284'} },
	{ 'VI': {'name': 'VIRGIN ISLANDS, U.S.','code': '1340'} },
	{ 'VN': {'name': 'VIET NAM','code': '84'} },
	{ 'VU': {'name': 'VANUATU','code': '678'} },
	{ 'WF': {'name': 'WALLIS AND FUTUNA','code': '681'} },
	{ 'WS': {'name': 'SAMOA','code': '685'} },
	{ 'XK': {'name': 'KOSOVO','code': '381'} },
	{ 'YE': {'name': 'YEMEN','code': '967'} },
	{ 'YT': {'name': 'MAYOTTE','code': '262'} },
	{ 'ZA': {'name': 'SOUTH AFRICA','code': '27'} },
	{ 'ZM': {'name': 'ZAMBIA','code': '260'} },
	{ 'ZW': {'name': 'ZIMBABWE','code': '263'} }
]

const LANGUAGES = {
    "ab":{
        "name":"Abkhaz",
        "nativeName":"аҧсуа"
    },
    "aa":{
        "name":"Afar",
        "nativeName":"Afaraf"
    },
    "af":{
        "name":"Afrikaans",
        "nativeName":"Afrikaans"
    },
    "ak":{
        "name":"Akan",
        "nativeName":"Akan"
    },
    "sq":{
        "name":"Albanian",
        "nativeName":"Shqip"
    },
    "am":{
        "name":"Amharic",
        "nativeName":"አማርኛ"
    },
    "ar":{
        "name":"Arabic",
        "nativeName":"العربية"
    },
    "an":{
        "name":"Aragonese",
        "nativeName":"Aragonés"
    },
    "hy":{
        "name":"Armenian",
        "nativeName":"Հայերեն"
    },
    "as":{
        "name":"Assamese",
        "nativeName":"অসমীয়া"
    },
    "av":{
        "name":"Avaric",
        "nativeName":"авар мацӀ, магӀарул мацӀ"
    },
    "ae":{
        "name":"Avestan",
        "nativeName":"avesta"
    },
    "ay":{
        "name":"Aymara",
        "nativeName":"aymar aru"
    },
    "az":{
        "name":"Azerbaijani",
        "nativeName":"azərbaycan dili"
    },
    "bm":{
        "name":"Bambara",
        "nativeName":"bamanankan"
    },
    "ba":{
        "name":"Bashkir",
        "nativeName":"башҡорт теле"
    },
    "eu":{
        "name":"Basque",
        "nativeName":"euskara, euskera"
    },
    "be":{
        "name":"Belarusian",
        "nativeName":"Беларуская"
    },
    "bn":{
        "name":"Bengali",
        "nativeName":"বাংলা"
    },
    "bh":{
        "name":"Bihari",
        "nativeName":"भोजपुरी"
    },
    "bi":{
        "name":"Bislama",
        "nativeName":"Bislama"
    },
    "bs":{
        "name":"Bosnian",
        "nativeName":"bosanski jezik"
    },
    "br":{
        "name":"Breton",
        "nativeName":"brezhoneg"
    },
    "bg":{
        "name":"Bulgarian",
        "nativeName":"български език"
    },
    "my":{
        "name":"Burmese",
        "nativeName":"ဗမာစာ"
    },
    "ca":{
        "name":"Catalan; Valencian",
        "nativeName":"Català"
    },
    "ch":{
        "name":"Chamorro",
        "nativeName":"Chamoru"
    },
    "ce":{
        "name":"Chechen",
        "nativeName":"нохчийн мотт"
    },
    "ny":{
        "name":"Chichewa; Chewa; Nyanja",
        "nativeName":"chiCheŵa, chinyanja"
    },
    "zh":{
        "name":"Chinese",
        "nativeName":"中文 (Zhōngwén), 汉语, 漢語"
    },
    "cv":{
        "name":"Chuvash",
        "nativeName":"чӑваш чӗлхи"
    },
    "kw":{
        "name":"Cornish",
        "nativeName":"Kernewek"
    },
    "co":{
        "name":"Corsican",
        "nativeName":"corsu, lingua corsa"
    },
    "cr":{
        "name":"Cree",
        "nativeName":"ᓀᐦᐃᔭᐍᐏᐣ"
    },
    "hr":{
        "name":"Croatian",
        "nativeName":"hrvatski"
    },
    "cs":{
        "name":"Czech",
        "nativeName":"česky, čeština"
    },
    "da":{
        "name":"Danish",
        "nativeName":"dansk"
    },
    "dv":{
        "name":"Divehi; Dhivehi; Maldivian;",
        "nativeName":"ދިވެހި"
    },
    "nl":{
        "name":"Dutch",
        "nativeName":"Nederlands, Vlaams"
    },
    "en":{
        "name":"English",
        "nativeName":"English"
    },
    "eo":{
        "name":"Esperanto",
        "nativeName":"Esperanto"
    },
    "et":{
        "name":"Estonian",
        "nativeName":"eesti, eesti keel"
    },
    "ee":{
        "name":"Ewe",
        "nativeName":"Eʋegbe"
    },
    "fo":{
        "name":"Faroese",
        "nativeName":"føroyskt"
    },
    "fj":{
        "name":"Fijian",
        "nativeName":"vosa Vakaviti"
    },
    "fi":{
        "name":"Finnish",
        "nativeName":"suomi, suomen kieli"
    },
    "fr":{
        "name":"French",
        "nativeName":"français, langue française"
    },
    "ff":{
        "name":"Fula; Fulah; Pulaar; Pular",
        "nativeName":"Fulfulde, Pulaar, Pular"
    },
    "gl":{
        "name":"Galician",
        "nativeName":"Galego"
    },
    "ka":{
        "name":"Georgian",
        "nativeName":"ქართული"
    },
    "de":{
        "name":"German",
        "nativeName":"Deutsch"
    },
    "el":{
        "name":"Greek, Modern",
        "nativeName":"Ελληνικά"
    },
    "gn":{
        "name":"Guaraní",
        "nativeName":"Avañeẽ"
    },
    "gu":{
        "name":"Gujarati",
        "nativeName":"ગુજરાતી"
    },
    "ht":{
        "name":"Haitian; Haitian Creole",
        "nativeName":"Kreyòl ayisyen"
    },
    "ha":{
        "name":"Hausa",
        "nativeName":"Hausa, هَوُسَ"
    },
    "he":{
        "name":"Hebrew",
        "nativeName":"עברית"
    },
    "iw":{
        "name":"Hebrew",
        "nativeName":"עברית"
    },
    "hz":{
        "name":"Herero",
        "nativeName":"Otjiherero"
    },
    "hi":{
        "name":"Hindi",
        "nativeName":"हिन्दी, हिंदी"
    },
    "ho":{
        "name":"Hiri Motu",
        "nativeName":"Hiri Motu"
    },
    "hu":{
        "name":"Hungarian",
        "nativeName":"Magyar"
    },
    "ia":{
        "name":"Interlingua",
        "nativeName":"Interlingua"
    },
    "id":{
        "name":"Indonesian",
        "nativeName":"Bahasa Indonesia"
    },
    "ie":{
        "name":"Interlingue",
        "nativeName":"Originally called Occidental; then Interlingue after WWII"
    },
    "ga":{
        "name":"Irish",
        "nativeName":"Gaeilge"
    },
    "ig":{
        "name":"Igbo",
        "nativeName":"Asụsụ Igbo"
    },
    "ik":{
        "name":"Inupiaq",
        "nativeName":"Iñupiaq, Iñupiatun"
    },
    "io":{
        "name":"Ido",
        "nativeName":"Ido"
    },
    "is":{
        "name":"Icelandic",
        "nativeName":"Íslenska"
    },
    "it":{
        "name":"Italian",
        "nativeName":"Italiano"
    },
    "iu":{
        "name":"Inuktitut",
        "nativeName":"ᐃᓄᒃᑎᑐᑦ"
    },
    "ja":{
        "name":"Japanese",
        "nativeName":"日本語 (にほんご／にっぽんご)"
    },
    "jv":{
        "name":"Javanese",
        "nativeName":"basa Jawa"
    },
    "kl":{
        "name":"Kalaallisut, Greenlandic",
        "nativeName":"kalaallisut, kalaallit oqaasii"
    },
    "kn":{
        "name":"Kannada",
        "nativeName":"ಕನ್ನಡ"
    },
    "kr":{
        "name":"Kanuri",
        "nativeName":"Kanuri"
    },
    "ks":{
        "name":"Kashmiri",
        "nativeName":"कश्मीरी, كشميري‎"
    },
    "kk":{
        "name":"Kazakh",
        "nativeName":"Қазақ тілі"
    },
    "km":{
        "name":"Khmer",
        "nativeName":"ភាសាខ្មែរ"
    },
    "ki":{
        "name":"Kikuyu, Gikuyu",
        "nativeName":"Gĩkũyũ"
    },
    "rw":{
        "name":"Kinyarwanda",
        "nativeName":"Ikinyarwanda"
    },
    "ky":{
        "name":"Kirghiz, Kyrgyz",
        "nativeName":"кыргыз тили"
    },
    "kv":{
        "name":"Komi",
        "nativeName":"коми кыв"
    },
    "kg":{
        "name":"Kongo",
        "nativeName":"KiKongo"
    },
    "ko":{
        "name":"Korean",
        "nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"
    },
    "ku":{
        "name":"Kurdish",
        "nativeName":"Kurdî, كوردی‎"
    },
    "kj":{
        "name":"Kwanyama, Kuanyama",
        "nativeName":"Kuanyama"
    },
    "la":{
        "name":"Latin",
        "nativeName":"latine, lingua latina"
    },
    "lb":{
        "name":"Luxembourgish, Letzeburgesch",
        "nativeName":"Lëtzebuergesch"
    },
    "lg":{
        "name":"Luganda",
        "nativeName":"Luganda"
    },
    "li":{
        "name":"Limburgish, Limburgan, Limburger",
        "nativeName":"Limburgs"
    },
    "ln":{
        "name":"Lingala",
        "nativeName":"Lingála"
    },
    "lo":{
        "name":"Lao",
        "nativeName":"ພາສາລາວ"
    },
    "lt":{
        "name":"Lithuanian",
        "nativeName":"lietuvių kalba"
    },
    "lu":{
        "name":"Luba-Katanga",
        "nativeName":""
    },
    "lv":{
        "name":"Latvian",
        "nativeName":"latviešu valoda"
    },
    "gv":{
        "name":"Manx",
        "nativeName":"Gaelg, Gailck"
    },
    "mk":{
        "name":"Macedonian",
        "nativeName":"македонски јазик"
    },
    "mg":{
        "name":"Malagasy",
        "nativeName":"Malagasy fiteny"
    },
    "ms":{
        "name":"Malay",
        "nativeName":"bahasa Melayu, بهاس ملايو‎"
    },
    "ml":{
        "name":"Malayalam",
        "nativeName":"മലയാളം"
    },
    "mt":{
        "name":"Maltese",
        "nativeName":"Malti"
    },
    "mi":{
        "name":"Māori",
        "nativeName":"te reo Māori"
    },
    "mr":{
        "name":"Marathi (Marāṭhī)",
        "nativeName":"मराठी"
    },
    "mh":{
        "name":"Marshallese",
        "nativeName":"Kajin M̧ajeļ"
    },
    "mn":{
        "name":"Mongolian",
        "nativeName":"монгол"
    },
    "na":{
        "name":"Nauru",
        "nativeName":"Ekakairũ Naoero"
    },
    "nv":{
        "name":"Navajo, Navaho",
        "nativeName":"Diné bizaad, Dinékʼehǰí"
    },
    "nb":{
        "name":"Norwegian Bokmål",
        "nativeName":"Norsk bokmål"
    },
    "nd":{
        "name":"North Ndebele",
        "nativeName":"isiNdebele"
    },
    "ne":{
        "name":"Nepali",
        "nativeName":"नेपाली"
    },
    "ng":{
        "name":"Ndonga",
        "nativeName":"Owambo"
    },
    "nn":{
        "name":"Norwegian Nynorsk",
        "nativeName":"Norsk nynorsk"
    },
    "no":{
        "name":"Norwegian",
        "nativeName":"Norsk"
    },
    "ii":{
        "name":"Nuosu",
        "nativeName":"ꆈꌠ꒿ Nuosuhxop"
    },
    "nr":{
        "name":"South Ndebele",
        "nativeName":"isiNdebele"
    },
    "oc":{
        "name":"Occitan",
        "nativeName":"Occitan"
    },
    "oj":{
        "name":"Ojibwe, Ojibwa",
        "nativeName":"ᐊᓂᔑᓈᐯᒧᐎᓐ"
    },
    "cu":{
        "name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
        "nativeName":"ѩзыкъ словѣньскъ"
    },
    "om":{
        "name":"Oromo",
        "nativeName":"Afaan Oromoo"
    },
    "or":{
        "name":"Oriya",
        "nativeName":"ଓଡ଼ିଆ"
    },
    "os":{
        "name":"Ossetian, Ossetic",
        "nativeName":"ирон æвзаг"
    },
    "pa":{
        "name":"Panjabi, Punjabi",
        "nativeName":"ਪੰਜਾਬੀ, پنجابی‎"
    },
    "pi":{
        "name":"Pāli",
        "nativeName":"पाऴि"
    },
    "fa":{
        "name":"Persian",
        "nativeName":"فارسی"
    },
    "pl":{
        "name":"Polish",
        "nativeName":"polski"
    },
    "ps":{
        "name":"Pashto, Pushto",
        "nativeName":"پښتو"
    },
    "pt":{
        "name":"Portuguese",
        "nativeName":"Português"
    },
    "qu":{
        "name":"Quechua",
        "nativeName":"Runa Simi, Kichwa"
    },
    "rm":{
        "name":"Romansh",
        "nativeName":"rumantsch grischun"
    },
    "rn":{
        "name":"Kirundi",
        "nativeName":"kiRundi"
    },
    "ro":{
        "name":"Romanian, Moldavian, Moldovan",
        "nativeName":"română"
    },
    "ru":{
        "name":"Russian",
        "nativeName":"русский язык"
    },
    "sa":{
        "name":"Sanskrit (Saṁskṛta)",
        "nativeName":"संस्कृतम्"
    },
    "sc":{
        "name":"Sardinian",
        "nativeName":"sardu"
    },
    "sd":{
        "name":"Sindhi",
        "nativeName":"सिन्धी, سنڌي، سندھی‎"
    },
    "se":{
        "name":"Northern Sami",
        "nativeName":"Davvisámegiella"
    },
    "sm":{
        "name":"Samoan",
        "nativeName":"gagana faa Samoa"
    },
    "sg":{
        "name":"Sango",
        "nativeName":"yângâ tî sängö"
    },
    "sr":{
        "name":"Serbian",
        "nativeName":"српски језик"
    },
    "gd":{
        "name":"Scottish Gaelic; Gaelic",
        "nativeName":"Gàidhlig"
    },
    "sn":{
        "name":"Shona",
        "nativeName":"chiShona"
    },
    "si":{
        "name":"Sinhala, Sinhalese",
        "nativeName":"සිංහල"
    },
    "sk":{
        "name":"Slovak",
        "nativeName":"slovenčina"
    },
    "sl":{
        "name":"Slovene",
        "nativeName":"slovenščina"
    },
    "so":{
        "name":"Somali",
        "nativeName":"Soomaaliga, af Soomaali"
    },
    "st":{
        "name":"Southern Sotho",
        "nativeName":"Sesotho"
    },
    "es":{
        "name":"Spanish; Castilian",
        "nativeName":"español, castellano"
    },
    "su":{
        "name":"Sundanese",
        "nativeName":"Basa Sunda"
    },
    "sw":{
        "name":"Swahili",
        "nativeName":"Kiswahili"
    },
    "ss":{
        "name":"Swati",
        "nativeName":"SiSwati"
    },
    "sv":{
        "name":"Swedish",
        "nativeName":"svenska"
    },
    "ta":{
        "name":"Tamil",
        "nativeName":"தமிழ்"
    },
    "te":{
        "name":"Telugu",
        "nativeName":"తెలుగు"
    },
    "tg":{
        "name":"Tajik",
        "nativeName":"тоҷикӣ, toğikī, تاجیکی‎"
    },
    "th":{
        "name":"Thai",
        "nativeName":"ไทย"
    },
    "ti":{
        "name":"Tigrinya",
        "nativeName":"ትግርኛ"
    },
    "bo":{
        "name":"Tibetan Standard, Tibetan, Central",
        "nativeName":"བོད་ཡིག"
    },
    "tk":{
        "name":"Turkmen",
        "nativeName":"Türkmen, Түркмен"
    },
    "tl":{
        "name":"Tagalog",
        "nativeName":"Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"
    },
    "tn":{
        "name":"Tswana",
        "nativeName":"Setswana"
    },
    "to":{
        "name":"Tonga (Tonga Islands)",
        "nativeName":"faka Tonga"
    },
    "tr":{
        "name":"Turkish",
        "nativeName":"Türkçe"
    },
    "ts":{
        "name":"Tsonga",
        "nativeName":"Xitsonga"
    },
    "tt":{
        "name":"Tatar",
        "nativeName":"татарча, tatarça, تاتارچا‎"
    },
    "tw":{
        "name":"Twi",
        "nativeName":"Twi"
    },
    "ty":{
        "name":"Tahitian",
        "nativeName":"Reo Tahiti"
    },
    "ug":{
        "name":"Uighur, Uyghur",
        "nativeName":"Uyƣurqə, ئۇيغۇرچە‎"
    },
    "uk":{
        "name":"Ukrainian",
        "nativeName":"українська"
    },
    "ur":{
        "name":"Urdu",
        "nativeName":"اردو"
    },
    "uz":{
        "name":"Uzbek",
        "nativeName":"zbek, Ўзбек, أۇزبېك‎"
    },
    "ve":{
        "name":"Venda",
        "nativeName":"Tshivenḓa"
    },
    "vi":{
        "name":"Vietnamese",
        "nativeName":"Tiếng Việt"
    },
    "vo":{
        "name":"Volapük",
        "nativeName":"Volapük"
    },
    "wa":{
        "name":"Walloon",
        "nativeName":"Walon"
    },
    "cy":{
        "name":"Welsh",
        "nativeName":"Cymraeg"
    },
    "wo":{
        "name":"Wolof",
        "nativeName":"Wollof"
    },
    "fy":{
        "name":"Western Frisian",
        "nativeName":"Frysk"
    },
    "xh":{
        "name":"Xhosa",
        "nativeName":"isiXhosa"
    },
    "yi":{
        "name":"Yiddish",
        "nativeName":"ייִדיש"
    },
    "yo":{
        "name":"Yoruba",
        "nativeName":"Yorùbá"
    },
    "za":{
        "name":"Zhuang, Chuang",
        "nativeName":"Saɯ cueŋƅ, Saw cuengh"
    }
}

export {
    CATEGORIES,
    TYPE_FILTERS,
    COLORS,
    SIZES,
    SORTS,
    DETAILS,
    COUNTRIES,
    LANGUAGES
}