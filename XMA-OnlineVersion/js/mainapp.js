/* 初始化腾讯云开发
const wxapp = cloudbase.init({
	env: "xiaomi-answer-2goch6zbbc11614e"
});
*/

// 图片预加载列表
initImgUrl = [
	'./img/bag/back.png',
	'./img/bag/bag-post.png',
	'./img/bag/icon-card.png',
	'./img/bag/icon-jl.png',
	'./img/bag/subscribe.png',
	'./img/draw/accpt.png',
	'./img/draw/share.png',
	'./img/draw/window.png',
	'./img/draw/tip2.png',
	'./img/draw/talk.png',
	'./img/draw/button.png',
	'./img/exam/o(0).png',
	'./img/exam/o(1).png',
	'./img/exam/o(2).png',
	'./img/exam/q(1).png',
	'./img/exam/q(2).png',
	'./img/exam/q(3).png',
	'./img/exam/q(4).png',
	'./img/exam/q(5).png',
	'./img/exam/q(6).png',
	'./img/exam/s1.png',
	'./img/exam/s2.png',
	'./img/exam/s3.png',
	'./img/exam/s4.png',
	'./img/exam/s5.png',
	'./img/exam/s6.png',
	'./img/home/home-post.png',
	'./img/home/home-start.png',
	'./img/home/home-tobag.png',
	'./img/home/play.png',
	'./img/submit/background.png',
	'./img/submit/submit.png',
	'./img/summary/draw.png',
	'./img/summary/pop.png',
	'./img/summary/tip.png',
	'./img/summary/show(0).png',
	'./img/summary/show(1).png',
	'./img/summary/show(2).png',
	'./img/summary/show(3).png',
	'./img/summary/show(4).png',
	'./img/summary/show(5).png',
	'./img/summary/show(6).png',
	'./img/summary/saved(0).png',
	'./img/summary/saved(1).png',
	'./img/summary/saved(2).png',
	'./img/summary/saved(3).png',
	'./img/summary/saved(4).png',
	'./img/summary/saved(5).png',
	'./img/summary/saved(6).png',
	'./img/Background.png',
	'./img/ShareIcon.png',
	'./img/DialogClose.png',
	'./img/Dialog_Draw_Win.png',
	'./img/Dialog_Draw_Lose.png',
	'./img/Dialog_Draw_New.png',
	'./img/Dailog_Draw_ShowMore.png',
	'./img/Dailog_Draw_Accept2.png',
]
/* 已注释 获取分享信息格式
function GetAppShareData(score){
	let main_url = 'https://s1.mi.com/m/images/202108101839/saved_'+score+'.png'
	let mini_url = "https://s1.mi.com/m/images/202108101839/post_h5.png"
	return {
	  poster: {
		poster: {
		  img_url: main_url
		}
	  },
	  cx_v3: {
		wechat_friend: {
		  title: '寻找年度锦鲤，赢新品全家桶',
		  img_url: 'https://s1.mi.com/m/images/202108101839/post_miniApp.png',
		  share_url: '/pages/webview/index?noLoginRequired=1&url=https%3A%2F%2Fm.mi.com%2Ft%2FfCPDTN'
		},
		wechat_moments: {
		  img_url: main_url
		}
	  }
	}
}
*/
// 导入背景音乐
var bgM = document.getElementById("bgM")

// Vue 入口
const mainapp = new Vue({
	el: "#mainapp",
	data: {
		// Main
		page: 0,
		silence: false,
		
		// user
		islogin:true,
		xmid:'',
		xmname:'',
		xmface:'',
		cardBag:[],
		isJL:false,
		canPlay:true,
		isEnd:false,
		maxScore:0,
		accept:true,

		// Page Exam
		questionPoint: 0,
		questions: [],
		nowQuestion: {},
		nowChoosed: -1,
		nowAnswer: -1,
		score: 0,
		
		// Pop
		showSubmit:false,
		showDailogJL:false,
		showDailogDraw:false,
		showMask:false,
		showLoading:false,
		showMiniDailog:false,
		showShare:false,
		showTalk:false,
		miniDailog:"",
		prize:"",
		download:true,
		
		// submit
		jlfaces1:[],
		jlfaces2:[],
		jlface:'',
		jlname:'',
		jlnum:'',
		paper:"亲爱的米粉您好，请仔细阅读下述内容：<br /><br />本次「新品全家桶」中包含 Cyber Dog  四足仿生机器人（众测资格），该产品的操控对使用者年龄、身体状态、专业技术能力等有一定限制。出于安全考量，小米社区制定了一套标准的信息填报流程以判断用户是否满足使用条件。如您最后中奖，需配合此流程进行实名认证、信息填报，如符合要求，即可获得该产品众测资格；如不符合， 或您主动选择不进入填报流程，该产品将自动<b>替换成价值9999元的“九号卡丁车Pro兰博基尼汽车定制版”</b>，具体发放方式参见活动规则。其他奖品正常发放不受影响。 <br /><br /><b>如您通过页面点击「同意」即表示同意上述全部约定内容，接受本活动规则的约束。</b>如您对该同意书及活动规则有任何异议的，您可以选择忽略该同意书，此种情况下如果您最后中奖的， Cyber Dog  四足仿生机器人（众测资格）将自动替换成价值9999元的“九号卡丁车Pro兰博基尼汽车定制版”，具体发放方式参见活动规则。其他奖品正常发放不受影响。</br></br></br><p style='color:#808080;font-size:70%;'>注：如不同意可关闭弹窗，再次点击“前去抽奖”领取答题奖励与锦鲤抽奖资格（奖品将根据知情同意书详情进行调整）</p>",
		about:"<h2>「寻年度锦鲤，赢新品全家桶」活动规则</h2></br></br><h3>【活动时间】</h3><b>*2021 年 8 月 12 日 10:00—2021 年 8 月 15 日 22:00</b></br></br><h3>【参与方式】</h3>1、在「雷军」微信公众号 回复关键词“小米发布会”，或通过点击「小米lite」小程序、「小米商城APP」 进入活动页面，即可参与。</br>2、依据答题正确率可获得专属米粉认证海报1个（具体海报样式随机发放），无论答题正确率是否为100%，您均可于答题后通过点击“前去抽奖”，随机获得小米商城智能券一份，具体金额、使用期限、使用范围以抽奖时页面显示为准。</br>*3、答题正确率100%的用户，点确认同意知情同意书后，还可获得锦鲤抽奖资格，如最终中奖可以获得发布会全家桶礼包一份。</br>*4、活动期间内，每个用户（同一小米ID）每天可参与一次，海报、智能券可重复获得，锦鲤的中奖率不会叠加。</br></br><h3>【奖品种类及数量】</h3>1、专属米粉认证海报1个（数量不限，答题后均可获得，非实体海报）</br>2、小米商城随机智能券1份<b>（具体细则见「奖品发放流程及使用规则」）：</b></br>5元智能券（满100元可用）- 60000张</br>10元智能券（满200元可用）- 60000张</br>30元智能券（满600元可用）- 60000张</br>50元智能券（满1000元可用）- 60000张</br>100元智能券（满2000元可用）- 60000张</br>以上为预估发放数量，具体以实际参与答题活动的人数为准。</br>3、锦鲤大奖—发布会全家桶礼包1份<b>（每个产品默认为一件，产品颜色、型号随机，不可选择，奖品价值以小米官网为准，配件不包含在全家桶内）</b>所含商品：Xiaomi MIX4/小米平板 5 /小米电视6 55″ OLED/小米电视大师 77″ OLED/Cyber Dog 仿生四足机器人（众测资格）或九号卡丁车Pro兰博基尼汽车定制版（二者之一）/Xiaomi Sound 高保真智能音箱/小米一指连伴侣（工程版）</br></br><h3>【奖品发放流程及使用规则】</h3><b>一、小米商城智能券发放流程及使用规则</b></br>1、智能券将在抽奖时实时发放至用户登录的小米ID中，中奖用户可直接前往“小米商城/小米lite - 我的 - 智能券”处查看<b>有效期</b>并使用。</br>2、本活动智能券只能用于领取账户，不可转赠，不包邮，不支持提现。智能券可用于单件商品的付款，也可用于购物车合并下单付款，具体可用产品以智能券显示信息为准，同一订单仅限使用一张智能券，抵减应支付的金额，不能抵减运费，如使用智能券的订单发生退货，只退回实际支付金额，智能券部分不开具发票。</br>3、订单如有取消、拒收、退货等情形，则智能券同时作废，不可再次使用。</br></br><b>二、发布会全家桶礼包发放流程及使用规则</b></br><b>1、开奖时间：</b>锦鲤大奖将由系统随机抽取，8月16日上午9:00开奖，用户可进入小程序获知中奖结果，中奖结果也将在 @小米公司 官方微博，和「雷军」公众号菜单栏中公示。</br><b>2、领奖流程：</b>锦鲤大奖的中奖者，需重新进入活动小程序填写自己的联系方式和收货信息。工作人员将会在填写信息后7天内与中奖者联系，如有疑问，可在「雷军」公众号后台留言或致电小米官方客服。</br><b>3、填写信息：</b>锦鲤大奖的中奖者需在结果公示后7天内准确、如实填写信息，并满足上述领奖流程要求，如审核过程中，发现中奖者存在以下行为：提供的信息为虚假信息；提供的信息非本人信息；逾期未填写、提交；我们将视为中奖者自动放弃奖品，不予补发。由此产生的后果由您自行承担。</br>4、实物奖品（Cyber Dog四足仿生机器人除外），将于产品开售后45个工作日内寄出。Cyber Dog 四足仿生机器人出于安全因素考虑，需中奖者在获得抽奖资格时便确认同意「知情同意书」内容，并于中奖后根据工作人员引导进入小米社区官方信息填报流程以判断用户是否满足众测条件，如符合，将于该产品开售后45个工作日内寄出，如不符合，或中奖者主动选择不进入填报流程，该产品将自动被替换为九号卡丁车Pro兰博基尼汽车定制版，于填报流程结束后45个工作日内寄出。</br>5、Cyber Dog 四足仿生机器人的众测资格审核和产品使用要求：以小米社区官方流程为准。</br>6、锦鲤大奖中奖者不得将全家桶礼包中的<b>「Cyber Dog四足仿生机器人或九号卡丁车Pro兰博基尼汽车定制版」</b>改装或非法转卖，如出现上述情况，我们有权在未经通知中奖者的情况下做出以下处理：收回中奖者的中奖资格；要求中奖者返还已发放的奖品；此做法导致中奖者、小米集团或第三方机构的名誉、财产损失或者人身安全损失由中奖者自身承担；对此小米保留采取法律诉讼的权利。</br></br><h3>【其他事项】</h3>1、凡以任何方式参加本次活动的，即表示自愿接受本活动规则的约束。</br>2、本活动仅限中国大陆地区小米ID可参与（港澳台地区除外）。</br>3、本活动奖项一经确认，除非出现小米官方售后范围内的产品质量问题，不接受退换。</br>4、活动主办方不承担因网络传输原因导致的信息错误或延误等责任。</br>5、登录网站所产生的流量费用及参与活动产生的其他费用和开支，由您自行承担；拨打客服电话，话费需自理。</br>6、为保证活动公平，若发现有参与者使用任何不正当手段参加活动，活动主办方有权在不事先通知的前提下取消其活动参与及获奖资格，包括但不限于以下情况：任何不正当及恶意刷奖行为；不遵守本活动规则参与活动；影响活动正常有序进行。</br></br>"
	},
	watch: {
		xmid(val, oldVal){
			// 获得小米账号后登录
			const that = this
			/*
			wxapp.callFunction({
				name: "XMA-Login",
				data: { 
					xmid: that.xmid,
					xmname: that.xmname,
					xmface: that.xmface
				}
			})
			.then((res) => {
				that.ShowMiniDailog("登录成功")
				that.cardBag = res.result.result.data.cardBag
				that.isJL = res.result.result.data.isJL
				that.maxScore = parseInt(res.result.result.data.maxScore)
				// 判断是否跨天
				let lastDraw = new Date(res.result.result.data.lastDraw)
//TODO 如果抽过一次
				that.canPlay = (lastDraw.setHours(0, 0, 0, 0) != new Date().setHours(0, 0, 0, 0))
//TODO 如果活动截止

				if(res.result.active_end){
					that.isEnd=true
					that.showMask = true
					that.showDailogJL = true
					// if(!that.jlfaces1)that.ChangeUsers()
				}
			});
			*/
		   that.ShowMiniDailog("登录成功")
		}
	},
	methods:{
		PickOption:function(index){
			// 选择选项（判断/换题）
			const that = this
			
			// 播放点击音频
			if(!this.silence){
				let clickM = new Audio()
				clickM.src = "./audio/click.wav"
				clickM.play()
			}
			
			// 防止连击
			if(that.nowChoosed != -1)return;
			
			that.nowChoosed = index
			that.nowAnswer = that.nowQuestion.answer
			
			// 题目判断
			if(index == that.nowQuestion.answer)
				that.score++
				
			// 换题/换页
			if(that.questionPoint<that.questions.length)
				setTimeout(() =>{
					that.nowQuestion = that.questions[that.questionPoint++]
					that.nowChoosed = -1
					that.nowAnswer = -1
				},1000)
			else{
				// 延迟页面跳转
				setTimeout(() =>{
					that.page = 2
				},1000);
			}
		},
		
		ToAnswerPage:function(){
			// 切换到答题页面
			const that = this
			// 播放音频
			if(!this.silence){
				let clickM = new Audio()
				clickM.src = "./audio/click.wav"
				clickM.play()
			}
			
			if(that.isEnd){
				that.ShowMiniDailog("活动已结束")
				return
			}
			
			/* 已注释 活动结束判断
			if(new Date() - new Date("2021-08-15T22:00:00.0") > 0){
				that.ShowMiniDailogLong("活动已结束，请于16日（明天）上午9点后进入小程序/商城，查看中奖结果")
				return
			}
			*/
			
			if(!that.canPlay){
				that.ShowMiniDailog("今天已经玩过咯")
				that.score = that.maxScore
				that.page = 2
				that.showTalk = true
				that.prize = "今天已经玩过咯"
				return
			}
			
			/* 已注释 如果未登录无法开始游戏，会自动进入登录流程
			if(isLogin()){
				if(that.xmid){
					that.page = 1
				}else{
					that.ShowMiniDailog("等待登录")
					// 超时重置
					that.GetUserIndex()
				}
			}else{
				// 如果没登陆则登录
				that.ShowMiniDailog("请先登录")
				doLogin()
			}
			*/
		   if(that.xmid)
				that.page = 1
		},
		
		ToCardBag:function(turn){
			const that = this
			if(turn){
				/* 已注释 如果未登录无法进入卡包
				if(isLogin()){
					if(that.xmid){
						this.page=-3
						setTimeout(() =>{
							this.page=-1
						},300);
					}else{
						that.ShowMiniDailog("等待登录")
						that.GetUserIndex()
					}
				}else{
					// 如果没登陆则登录
					that.ShowMiniDailog("请先登录")
					doLogin()
				}
				*/
				this.page=-1
			}else{
				if(that.prize){
					that.page=2
				}else{
					that.page = 0
				}
				
			}
		},
	
		DoDraw:function(){
			// 抽奖入口
			const that = this
			if(that.prize){
				that.ShowMiniDailog("今天已经抽过奖咯")
				return
			}
			
			// 已修改 抽奖判定逻辑
			if(that.score == 6&&that.maxScore != 6){
				that.maxScore = 6
				that.showMask = true
				that.showSubmit = true
			}

			that.Draw()
		},
		
		Draw:function(){
			// 抽奖逻辑
			const that = this
			that.showMask = false
			that.showSubmit = false
			that.ShowLoading(true)
			/* 已注释 抽奖部分
			wxapp.callFunction({
				name: "XMA-Draw",
				data: {
					xmid:that.xmid,
					score:that.score,
					accept:that.accept
				}
			}).then((res) => {
				that.ShowLoading(false)
				if(res.result){
					that.showMask = true
					that.showDailogDraw = true
					if(res.result == 401){
						setTimeout(() =>{
						    that.prize = "今天的机会已用完"
						},400);
					}else{
						setTimeout(() =>{
							that.prize = res.result
							if(that.cardBag){
								that.cardBag.push(that.prize)
							}else{
								that.cardBag = [that.prize]
							}
						},400);
					}
				}else{
					that.ShowMiniDailog("今天已经抽过奖咯")
				}
			}).catch(function(ex){
				that.ShowLoading(false)
				that.showMask = true
				that.showDailogDraw = true
				setTimeout(() =>{
				    that.prize = "机会已用完，去奖池看看"
				},400);
			})
			*/
			setTimeout(() =>{
				that.ShowLoading(false)
				that.showMask = true
				that.showDailogDraw = true
				that.prize = "演示用卡券"
				if(that.cardBag){
					that.cardBag.push("演示用卡券")
				}else{
					that.cardBag = ["演示用卡券"]
				}
			},400);
		},
		
		/**
		 * 页面路由相关
		 */
		HideDrawDailog:function(){
			this.showMask = false
			this.showDailogDraw = false
			this.showTalk = true
		},
		
		HideSubmitDailog:function(){
			this.accept = false
			this.showSubmit = false
			this.showMask = false
		},
		
		HideDrawJL:function(){
			this.showDailogJL = false
			this.showMask = false
		},
		
		HideShare:function(){
			this.showShare = false
		},
		
		ShowUsers:function(){
			if(this.isJL){
				this.HideDrawJL()
				this.GoBee()
			}else{
				this.HideDrawJL()
				this.page = -2
			}
		},
		
		ShowDrawDailog:function(){
			// 跳转回抽奖页面时展示对应页面
			this.showMask = true
			this.showDailogDraw = true
		},
		
		ShowDraw:function(){
			// 关闭抽奖窗口
			this.page = -1
			this.ShowMiniDailog("已领取到我的奖品")
			this.showMask = false
			this.showDailogDraw = false
		},
		
		ShowAbout:function(){
			this.page = -4
		},
		
		ShowJL:function(){
			if(this.isEnd){
				that.showMask = true
				that.showDailogJL = true
			}
		},

		Coupon: function() {
			goCoupon()
		},
		
		/**
		 * 页面自定义提示控件
		 */
		ShowMiniDailog:function(message){
			// 迷你标题弹窗
			if(this.showMiniDailog){
				if(this.miniDailog == message)return;
				else{
					this.showMiniDailog = false
					this.miniDailog = message
					this.showMiniDailog = true
					setTimeout(() =>{
					    this.showMiniDailog = false
					},800);
				}
			}else{
				this.miniDailog = message
				this.showMiniDailog = true
				setTimeout(() =>{
				    this.showMiniDailog = false
				},800);
			}
		},
		
		ShowMiniDailogLong:function(message){
			// 迷你标题弹窗（长时间）
			if(this.showMiniDailog){
				if(this.miniDailog == message)return;
				else{
					this.showMiniDailog = false
					this.miniDailog = message
					this.showMiniDailog = true
					setTimeout(() =>{
					    this.showMiniDailog = false
					},3000);
				}
			}else{
				this.miniDailog = message
				this.showMiniDailog = true
				setTimeout(() =>{
				    this.showMiniDailog = false
				},3000);
			}
		},
		
		ShowLoading:function(trun){
			// 带 Mask 的 Loading 界面
			this.showLoading=trun
			this.showMask=trun
		},
		
		Music:function(trun){
			// 音乐播放 / 停止
			if(trun){
				this.silence = true
				bgM.pause()
			}else{
				this.silence = false
				bgM.play()
			}
		},
		
		ShareMsg: function(){
			// 已注释 主动分享
			// 流程为 -》 判断平台 -》 调用分享接口
			/*
			let self = this
			if(platform.isMiniprogram) {
				wx.miniProgram.postMessage({
					data: {
					  shareTitle: '寻找年度锦鲤，赢新品全家桶', //最多两行文字显示超出会隐藏
					  sharePath: '/pages/webview/index?noLoginRequired=1&url=https%3A%2F%2Fm.mi.com%2Ft%2FfCPDTN',
					  shareImageSrc: 'https://s1.mi.com/m/images/202108101839/post_miniApp.png'
					}
				})
				self.showShare = true
			}else if(platform.isApp || platform.isIOSApp){
				shareOpenApp(GetAppShareData(self.score))
			}else if(platform.isWeixin){
				self.showShare = true
				let url = 'https://s1.mi.com/m/images/202108101839/saved_'+self.score+'.png'
				wx.updateAppMessageShareData({
					title: "寻找年度锦鲤，赢新品全家桶", 
					desc: "答题瓜分百万好礼", 
					link: location.href,
					imgUrl: url,
					success: function(){
					  self.showShare = true
					},
					cancel: function(){
					  this.ShowMiniDailog("分享失败")
					}
				})
			}else{
				this.ShowMiniDailog("该平台不支持主动分享")
				return
			}
			*/
			this.ShowMiniDailog("已分享分享")
		},
		
		GetUserIndex: function() {
			// 获取用户的小米账号信息
			let self = this
			// 已删除 换取小米账号部分
			// 流程为 判断平台 -》 请求 -》 跳转 -》 返回拿取
			// self.xmface = json.data.user.icon
			// self.xmname = json.data.user.userName
			self.xmname = "我爱小米"
		},
		
		DownLoadImg:function(){		
			// 已删去保存页面逻辑
			// 流程为 判断平台 -》 网页直接保存 / 商城内调用保存接口
			this.ShowMiniDailog("保存图片成功")
		},
		
		GoBee:function(){
			// 已删去跳转页面逻辑
			this.ShowMiniDailog("即将前往问卷系统")
		}
	}
})

	/*
	 * LoadingAdd 开屏加载进度更新
	 * @param 进度（累加值）
	 */
	let loadingStart = document.getElementById("loading-start").getElementsByTagName("span")[0];
	var loadingState = 0

	function LoadingAdd(state) {
		loadingStart.innerHTML = (loadingState += state) + '%';
	}

	/*
	 * InitComplete 预加载完成后调用
	 */
	function InitComplete() {
		document.getElementById("loading-start").style.display = "none"
		document.getElementById("mainapp").style.display = "inherit"
	}

	/*
	 * InitApp 初始化应用（图片预加载、题库预加载）
	 */
	function InitApp() {
		let step = 0;
		// 图片预加载
		initImgUrl.forEach((item, index) => {
			const image = new Image();
			image.src = item;
			image.onload = () => {
				LoadingAdd(parseInt(60 / initImgUrl.length));
				if (index === (initImgUrl.length - 1)) {
					if (step++ == 2) InitComplete();
				}
			}
		})
		
		/* 抽取题库
		wxapp.callFunction({
			name: "XMA-GetQuestions"
		}).then((res) => {
			mainapp.questions = res.result.questions;
			mainapp.nowQuestion = mainapp.questions[mainapp.questionPoint++];
			LoadingAdd(parseInt(20));
			// 这里应该用异步，懒得改了，目前是手动异步
			if (step++ == 2) InitComplete();
		});
		*/
		// 抽取题库本地版
		mainapp.questions = [
			{
				question:"小米MIX 4采用的后盖材质是？",
				options:[
					"小猩猩钢化玻璃",
					"一体化轻量陶瓷",
					"钛合金",
				],
				answer:1
			},
			{
				question:"小米平板 5 Pro采用的骁龙870处理器不符合以下哪个描述？",
				options:[
					"超强性能、超级冷静",
					"无短板的天选之子",
					"平平无奇",
				],
				answer:2
			},
			{
				question:"雷军在这场发布会唱了Are you ok吗？",
				options:[
					"唱了",
					"没唱"
				],
				answer:0
			},
			{
				question:"小米探索极致科技，做全面屏时代的开创者是哪一年？",
				options:[
					"错误答案",
					"正确答案",
					"错误答案",
				],
				answer:1
			},
			{
				question:"小米新品CyberDog 仿生四足机器人拥有哪项技能？",
				options:[
					"错误答案",
					"错误答案",
					"正确答案",
				],
				answer:2
			},
			{
				question:"为什么小米MIX 4超广角不会产生画面畸变？",
				options:[
					"采用自由曲面镜片",
					"支持外接矫正镜头",
					"MIX 4就没有超广角啊",
				],
				answer:0
			}
		];
		mainapp.nowQuestion = mainapp.questions[mainapp.questionPoint++];
		LoadingAdd(parseInt(20));
		// 这里应该用异步，懒得改了，目前是手动异步
		if (step++ == 2) InitComplete();

		// 已注释 活动结束时间判断，活动结束后自动加载参与成员名单
		// if(new Date() - new Date("2021-08-15T22:00:00.0") > 0){
		if(false){
			wxapp.callFunction({
				name: "XMA-GetJLs"
			}).then((res) => {
				mainapp.jlface = res.result.jlface
				mainapp.jlname = res.result.jlname
				mainapp.jlfaces1 = res.result.jlfaces1
				mainapp.jlfaces2 = res.result.jlfaces2
				mainapp.jlnum = res.result.jlnum
				LoadingAdd(parseInt(20))
				// 这里应该用异步，懒得改了，目前是手动异步
				if (step++ == 2) InitComplete();
			});
		} else {
			LoadingAdd(parseInt(20))
			if (step++ == 2) InitComplete();
		}
		
		// 模拟完成登录
		mainapp.xmid = 123456789
		mainapp.isLogin = true

		/* 已注释 登录原入口
		setTimeout(() =>{
			if(isLogin())mainapp.GetUserIndex()
		},500);
		*/

		// 已删除 注册小米统计SDK
	}
	InitApp();

	/*
	function GetWeSdkSignature(){
		// 获取微信js-sdk权限配置信息
		// 已删除 小米方配置信息
		fetchJsonp(``, {
			jsonpCallback: 'callback',
			jsonpCallbackFunction: 'callback'
		}).then(function(res){
			return res.json()
		}).then(function(json){
			if(json.code !== 0){
				console.log(json.msg)
			return
		}
		wx.config({
			// 已删除 详见微信文档
		})
			wx.ready(function() {
			document.getElementById('bgM').play();
		});
		}).catch(function(ex){
			console.error(ex);
		})
	}
	*/

	/**
	 * 音乐自动播放组件
	 */
	function autoPlayAudio(){
		// if(platform.isWeixin || platform.isMiniprogram){
		if(false){
			// GetWeSdkSignature()
			document.addEventListener('DOMContentLoaded', function () {
				function audioAutoPlay() {
					bgM.play()
					document.addEventListener("WeixinJSBridgeReady", function () {
						bgM.play();
					}, false);
				}
				audioAutoPlay();
			});
			// 创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
			document.addEventListener("touchstart", function(e) {
				if (bgM.paused && !mainapp.silence){
					bgM.paused = false;
					bgM.play();
				}
			}, false);
		}else{
			document.addEventListener("touchstart", function(e) {
				if (bgM.paused && !mainapp.silence){
					bgM.paused = false;
					bgM.play();
				}
			}, false);
		}
	}
	autoPlayAudio()

	// 轮询播放背景音乐
	var timer = setInterval(function() {
		if (bgM.paused && !mainapp.silence){
			bgM.paused = false;
			bgM.play();
		}
		if(!bgM.paused)clearInterval(timer)
	}, 200)