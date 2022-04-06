// 使用腾讯云开发的数据库
const app = cloudbase.init({
	env: "xiaomi-answer-2goch6zbbc11614e"
});

app.auth().getLoginState().then(() => {
	console.log("登录云开发成功！");
});


new Vue({
	el: '#mainapp',
	data: {
		page:1,
		score:0,
		questions:[],
		questionPoint:0,
		nowQuestion:{
			question:"这是问题问题问题问题问题问题题问题问题问题问题",
			options:[
				"你好啊",
				"你好啊",
				"你好啊",
				"刘海屏刘海屏刘海屏刘"
			]
		},
		
		show:false
	},
	
	filters: {
	    optionSrc: function (index) {
			return './img/选项'+0+'@3x_1.png'
	    }
	},
 
	methods: {
		// 选择选项（判断/换题）
		pickOption:function(index){
			if(index == this.nowQuestion.answer)
				this.score++
			if(this.questionPoint<this.questions.length)
				this.nowQuestion = this.questions[this.questionPoint++]
			else
				this.changePage()
		},
		
		// 设置首题，切换到答题页面
		toAnswerPage:function(){
			this.show = !this.show
			/*
			app.callFunction({
				name: "XMA-GetQuestions"
			})
			.then((res) => {
				this.questions = res.result.questions
				this.nowQuestion = this.questions[this.questionPoint++]
				this.changePage()
			});
			*/
		},
		
		
		changePage:function(){
			this.page++;
		}
		
	}
})