
function init_overlay(overlay_id, media_class) {
	var OVERLAY = document.getElementById(overlay_id);
	var MEDIA = document.getElementsByClassName(media_class);

	function create_overlay(overlay_dom) {
		let backdrop = document.createElement("div");
		let overlay = document.createElement("div");
		backdrop.setAttribute('class', "width-100 height-100 bg-black-60 pos-absolute");
		overlay.setAttribute('class', "overlay-content center-center");
		backdrop.addEventListener('click', function() {
			OVERLAY.style.display = "none";
		})

		overlay_dom.appendChild(backdrop);
		overlay_dom.appendChild(overlay);
	}

	function generate_overlay(overlay, content_dom) {
		for(let i = 0; i < overlay.childNodes.length; i++) {
			overlay.removeChild(overlay.childNodes[i]);
		}

		let content = content_dom.cloneNode(true);
		content.setAttribute('class', "width-max-100 height-max-100");
		overlay.appendChild(content);
	}

	function media_click_handler(e) {
		e.preventDefault();
		OVERLAY.style.display= "block";
		generate_overlay(OVERLAY.childNodes[1], this);
	}

	create_overlay(OVERLAY);
	for(let i = 0; i < MEDIA.length; i++) {
		MEDIA[i].addEventListener('click', media_click_handler);
	}
}