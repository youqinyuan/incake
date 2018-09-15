require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"cookie":"libs/jquery.cookie",
		"toast": "module/toast",
		"template": "libs/template-web",
		"url": "module/url",
		"header":"module/header",
		"footer":"module/footer",
		"tab":"module/tab",
		"carousel":"module/carousel",
		"reg":"module/reg",
		"table":"module/table"
	},
	shim: {
		toast:{
			deps:["jquery"]
		},
		header:{
			deps:["jquery"]
		},
		footer:{
			deps:["jquery"]
		},
		tab:{
			deps:["jquery"]
		},
		carousel:{
			deps:["jquery"]
		},
		reg:{
			deps:["jquery"]
		},
		cookie:{
			deps:["jquery"]
		},
		table:{
			deps:["jquery"]
		}
	}
})