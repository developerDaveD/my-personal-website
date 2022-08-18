(function(app) {
	app.homepage = function() {
	setCopyrightDate();
	};

	function setCopyrightDate() {
        const date = new Date();
        document.getElementById('copyrightYear').innerText = date.getFullYear();
        }
})(window.app = window.app || {});


