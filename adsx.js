
//simpan ke dalam file adsx.js

const DIRECTLINK_ADS = "https://stereosuspension.com/bb120q87k?key=321334c3d6953e68e01852e8de133755";

var scripts = [
	"https://stereosuspension.com/da/75/6b/da756b6a74cc75f3f1cc3621de946aff.js",//popunder js
	"https://stereosuspension.com/1c68e32d7bbb512efd6265517e373805/invoke.js",//banner js
];

for (index = 0; index < scripts.length; ++index) {
    var script = document.createElement('script');
    script.src = scripts[index];
    script.type='text/javascript';
    var done = false;
    script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            done = true;
            //promptForUserEntries();
        }
    };  
    document.getElementsByTagName("body")[0].appendChild(script);
}
