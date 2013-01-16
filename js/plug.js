var plug = function() {
	var _this = this;
	_this.init = function() {

	}
	_this.init();
}

function Renderable(_this) {
	_this.renderable = true;
	_this.template = "";
	_this.render = function() {
	}
}

function Blog(context) {
	var _this = this;
	Renderable(_this);
	_this.data = {
		title: "blog title",
		description: "blog description",
		feedlink: "feed link"
	}
}
	
function PostItem(context) {
	var _this = this;
	Renderable(_this);
	_this.context = context;
	_this.data = {
		url: "post url"
		title: "post title",
		body: "post body",
		author: "post author",
		author_name: "post author name",
		author_email: "post author email",
		author_url: "post author url",
		item_number: 0,
		archieve_filename: "",
		perma_link_url: "",
		control: ""
	}
	_this.template = "";
	_this.init = function() {
		_this.data.title = jQuery(".entry-title", context).html();
		_this.data.body = jQuery(".post-body", context).html();
		console.log("article init");
	}
	_this.init();
}

function PostItemContainer(context) {
	var _this = this;
	Renderable(_this);
	_this.data = [];
	_this.init = function() {
		jQuery(".post.hentry", context).each(function() {
			_this.data.push(new PostItem(this));
		});
	}
	_this.init();
}


jQuery(document).ready(function() {
	alert("document is ready.");
	jQuery("body").removeClass("loading");


	var article_list_container = new PostItemContainer(document);
	console.log(article_list_container);
});