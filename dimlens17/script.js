var data = {
	site: {
		name: "DIM_LENS",
		version: "2.0.17",
		title: "DIM_LENS <2017> - 仰望天空的钉子瞳孔中所映照的世界"
	},
	c: [{
		id: "anime",
		title: "ANIME"
	}, {
		id: "design",
		title: "DESIGN"
	}]
}

var vm = new Vue({
	el: "#dimlens17",
	data: data
})

document.title = data.site.title;