/*
The JavaScript in this file is injected into each TiddlyWiki page that loads
*/

(function () {

	/*
	Returns true if successful, false if failed, null if not available
	*/
	var injectedSaveFile = function(path,content) {
		const fs = require("fs");
		fs.writeFileSync(path,content);
		return true;
	};

	/*
	Returns text if successful, false if failed, null if not available
	*/
	var injectedLoadFile = function(path) {
		try {
			// Just the read the file synchronously
			var xhReq = new XMLHttpRequest();
			xhReq.open("GET", "file:///" + escape(path), false);
			xhReq.send(null);
			return xhReq.responseText;
		} catch(ex) {
			return false;
		}
	};

	var injectedConvertUriToUTF8 = function(path) {
		return path;
	}

	var injectedConvertUnicodeToFileFormat = function(s) {
		return s;
	}

	window.mozillaSaveFile = injectedSaveFile;
	window.mozillaLoadFile = injectedLoadFile;
	window.convertUriToUTF8 = injectedConvertUriToUTF8;
	window.convertUnicodeToFileFormat = injectedConvertUnicodeToFileFormat;

})();
