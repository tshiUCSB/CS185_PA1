function init_scroll_top(percent) {
	SCROLL_BUTTON = undefined;
	SCROLL_LENGTH = undefined;

	function calc_scroll_length() {
		window_height = window.innerHeight;
		doc_height = Math.max(document.body.scrollHeight,
			document.body.offsetHeight, 
			document.body.clientHeight,
			document.documentElement.scrollHeight,
			document.documentElement.offsetHeight,
			document.documentElement.clientHeight);

		return doc_height - window_height;
	}

	function scroll_button_click_handler(e) {
		window.scroll(0, 0);
	}

	function create_scroll_button() {
		SCROLL_BUTTON = document.createElement("button");
		SCROLL_BUTTON.innerHTML = "Back to Top";
		SCROLL_BUTTON.setAttribute('id', "scroll-button");
		SCROLL_BUTTON.setAttribute('class', "horiz-center pos-fixed bottom-24px");
	
		SCROLL_BUTTON.addEventListener('click', scroll_button_click_handler);
		document.documentElement.appendChild(SCROLL_BUTTON);
	}

	function remove_scroll_button() {
		SCROLL_BUTTON.remove();
		SCROLL_BUTTON = undefined;
	}

	function scroll_handler(e) {
		let scroll_percent = window.pageYOffset / SCROLL_LENGTH * 100;
		if (scroll_percent > percent && !SCROLL_BUTTON) {
			create_scroll_button();
		}
		else if (scroll_percent <= percent && SCROLL_BUTTON) {
			remove_scroll_button();
		}
	}

	function window_resize_handler(e) {
		SCROLL_LENGTH = calc_scroll_length();
	}

	SCROLL_LENGTH = calc_scroll_length();
	window.addEventListener('scroll', scroll_handler);
	window.addEventListener('resize', window_resize_handler);
}

