const JOSM_IMPORT_LISTEN_ADDRESS = 'http://127.0.0.1:8111/import';

const BYTES_FOR_NODE = 8;
const IMPORT_ENABLED = true;

const SELF_URL = document.location.origin;

// If the web api works not at server's root, you many need something like:
// const API_URL = SELF_URL + '/borders-api';
const API_URL = SELF_URL;


function getServer(endpoint, base_url) {
    var url = base_url ? base_url : API_URL;
    if (endpoint)
        url += '/' + endpoint;
    return url;
}
