var data = {
	site: {
		name: "DIM_LENS",
		version: "2.0.17",
		title: "DIM_LENS <2017> - 仰望天空的钉子瞳孔中所映照的世界"
	},
	c: [{
		id: "designpaint",
		title: "DESIGN & PAINT",
		bgStyle: { backgroundImage: 'url("img/anime.jpg")' }
	}, {
		id: "code",
		title: "CODE",
		bgStyle: { backgroundImage: 'url("img/anime.jpg")' }
	}, {
		id: "anime",
		title: "ANIME",
		bgStyle: { backgroundImage: 'url("img/anime.jpg")' },
		slides: [
			// {
			// 	mode: "cover",
			// 	bgStyle: { backgroundImage: 'url("img/anime-slide-1.jpg")' },
			// 	desc: "《百合熊岚》。几原晶彦一部并不完美，但是观看体验较好的百合动画。"
			// },
			{
				mode: "capture",
				bgStyle: { backgroundImage: 'url("img/anime-slide-2.png")' },
				desc: "GarageBand。这是一个截图小图展示的示例。"
			}
		],
		termDesc: {
			default: "这是默认的提示语。\n尝试多行。",
			q: [{
				title: "关于示例问题？",
				desc: "这是问题回答的正文。"
			}, {
				title: "关于示例问题？",
				desc: "这是问题回答的正文。"
			}]
		}
	}, {
		id: "ddd",
		title: "DDD",
		bgStyle: { backgroundImage: 'url("img/anime.jpg")' }
	}],
	view: {
		currentCate: "anime",
		currentSlide: 0
	}
}

var vm = new Vue({
	el: "#dimlens17",
	data: data,
	computed: {
		currentCateI: function() {
			for (i in this.c) {
				if (this.c[i].id == this.view.currentCate) { return parseInt(i) };
			}
		}
	}
})