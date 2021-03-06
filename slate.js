var slate = { dict: {} };

slate.start = "%";
slate.end = "%";

slate.add = (function(key, value) {
	slate.dict[key] = value;
});

slate.init = (function() {
	scripts = document.getElementsByTagName("script");

	for (var i = 0; i < scripts.length; i++) {
		if (scripts[i].type == "text/slate") {
			scripts[i].outerHTML += slate.process(scripts[i].innerHTML);
		}
	}
});

slate.process = (function(script) {
	script = script.replace(/^ +/gm, '');

	for (var key in slate.dict) {
		if (slate.dict[key] instanceof Array) {
			var con_string = slate.dict[key].slice(0, 4);
			slate.dict[key] = con_string[0] + con_string[1] + slate.dict[key].slice(4, slate.dict[key].length).join(con_string[2] + con_string[1]) + con_string[3];
		} else if (slate.dict[key] instanceof Function) {
			key = slate.dict[key]();
		}
		script = script.replace(slate.start + key + slate.end, slate.dict[key]);
	}

	return script;
});
