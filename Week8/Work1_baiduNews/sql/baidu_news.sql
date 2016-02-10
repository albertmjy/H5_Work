create database baidu_news;
use baidu_news;

create table recommand(
	news_id int not null auto_increment,
    news_img varchar(600),
	news_title varchar(100) not null,
    news_content text,
    news_date date not null,
    news_label varchar(20),
    primary key(news_id)
)default charset='utf8';

-- init news data
insert into recommand values( null, 
"http://t12.baidu.com/it/u=http://www.wudage.com/uploads/allimg/160201/10-160201152410.jpg&fm=36,
http://t10.baidu.com/it/u=http://www.wudage.com/uploads/allimg/160201/10-160201152418.jpg&fm=36,
http://t10.baidu.com/it/u=http://www.wudage.com/uploads/allimg/160201/10-160201152418-50.jpg&fm=36"
, "标题不记得了", "", "2015-09-10", "中文");
insert into recommand values(null, 
"http://t10.baidu.com/it/u=http://imgcache.yicai.com/uppics/slides/2016/02/635899652069750380.jpg&fm=36",
"为什么说维基百科的存在是一个奇迹？", "借用此前看到的一句话：维基百科的存在本身就是一种奇迹。", "2016-01-01", "维基百科");
insert into recommand values(null, 
"http://t12.baidu.com/it/u=http://inews.gtimg.com/newsapp_bt/0/164880981/1000&fm=36",
"电动车骗补生意值几十亿 补贴不出特斯拉", "除了家电下乡、新能源汽车补贴外，在全民医疗的补贴中，类似的骗补案例也比比皆是。", "2016-01-26", "特斯拉");
insert into recommand values( null, 
"http://t11.baidu.com/it/u=http://img4.jiemian.com/101/original/20160201/145433424519540100_a580x330.jpg&fm=36,
http://t11.baidu.com/it/u=http://img2.jiemian.com/101/original/20160201/145433441517279900_a580xH.jpg&fm=36,
http://t12.baidu.com/it/u=http://img1.jiemian.com/101/original/20160201/145433442895493200_a580xH.jpg&fm=36"
, "“不靠谱”项目的真相", "", "2016-01-26", "创投");

create table news(
	news_id int not null auto_increment,
    news_img varchar(600),
	news_title varchar(100) not null,
    news_content text,
    news_date date not null,
    news_label varchar(20),
    primary key(news_id)
)default charset='utf8';

-- init news data
insert into news values( null, 
"http://g.hiphotos.baidu.com/news/w%3D638/sign=f2533cee59df8db1bc2e7f673123dddb/a686c9177f3e6709670e78893cc79f3df8dc55bd.jpg,
http://h.hiphotos.baidu.com/news/w%3D638/sign=0c104784d262853592e0d122a8ef76f2/574e9258d109b3de0bc2d91ecbbf6c81800a4c42.jpg,
http://e.hiphotos.baidu.com/news/w%3D638/sign=a2772768be389b5038ffe351bd34e5f1/48540923dd54564e06fed94fb4de9c82d1584f28.jpg"
, "粉丝剧是IP变现另一风口？给中国的2.5次元算一笔账", "", "2015-09-10", "中文");
insert into news values(null, 
"http://e.hiphotos.baidu.com/news/crop%3D0%2C27%2C639%2C384%3Bw%3D638/sign=3bb2441f222dd42a4b465beb3e0b7787/a08b87d6277f9e2feb900c7e1830e924b899f31b.jpg",
"为什么说维基百科的存在是一个奇迹？", "借用此前看到的一句话：维基百科的存在本身就是一种奇迹。", "2016-01-01", "维基百科");
insert into news values(null, 
"http://b.hiphotos.baidu.com/news/crop%3D0%2C2%2C800%2C480%3Bw%3D638/sign=90c11b6cc15c1038303194828f21bf21/810a19d8bc3eb1354a6baccda11ea8d3fd1f4413.jpg",
"电动车骗补生意值几十亿 补贴不出特斯拉", "除了家电下乡、新能源汽车补贴外，在全民医疗的补贴中，类似的骗补案例也比比皆是。", "2016-01-26", "特斯拉");
insert into news values( null, 
"http://f.hiphotos.baidu.com/news/crop%3D0%2C1%2C580%2C348%3Bw%3D638/sign=7afb8e288d82b90129e299734ebd8546/0d338744ebf81a4ce40849c6d02a6059252da683.jpg,
http://d.hiphotos.baidu.com/news/w%3D638/sign=7c6e811b45a7d933bfa8e770954ad194/f703738da9773912c0c63e6eff198618377ae2d9.jpg,
http://b.hiphotos.baidu.com/news/w%3D638/sign=85363e0a34fa828bd1239ee0c51f41cd/fd039245d688d43fbe9c2bfd7a1ed21b0ef43b83.jpg"
, "“不靠谱”项目的真相", "", "2016-01-26", "创投");

create table local_news(
	news_id int not null auto_increment,
    news_img varchar(600),
	news_title varchar(100) not null,
    news_content text,
    news_date date not null,
    news_label varchar(20),
    primary key(news_id)
)default charset='utf8';

-- init value
insert into local_news values(null, 
"http://t11.baidu.com/it/u=http://img1.cache.netease.com/3g/2016/1/26/20160126160727742ba.jpg&fm=36",
"北京卫计委:对号贩子\"零容忍\"", "如果市民和患者发现有医疗机构的不法分子内外勾结、扰乱医疗秩序的，可随时向公安机关或卫生计生部门...", "2016-01-25", "网易要闻");
insert into local_news values(null, 
"http://t10.baidu.com/it/u=http://img2.cache.netease.com/cnews/2016/1/25/201601251228269ef6c.png&fm=36",
"传百年银行大楼被拆只剩残墙 回应:修缮非拆除", "近日有网友发微博称，位于汉口路50号、具有百年历史的银行大楼被拆得只剩下一道“残壁”。...", "2016-01-24", "银行");
insert into local_news values(null, "",
"外滩源：科技+文化=创新", "在外滩源这个上海城市地标，不断挥洒上海的文化魅力。...", "2016-01-23", "上海景点");
insert into local_news values(null, "",
"传百年银行大楼被拆只剩残墙 回应:修缮非拆除", "近日有网友发微博称，位于汉口路50号、具有百年历史的银行大楼被拆得只剩下一道“残壁”。...", "2016-01-24", "银行");

create table image(
	news_id int not null auto_increment,
    news_img varchar(500) not null,
    news_title varchar(100) not null,
    news_like int not null,
    primary key(news_id)
)default charset='utf8';

insert into image values(null, 
"http://timg01.baidu-img.cn/timg?tc&size=b686_386&sec=0&quality=100&cut_x=42&cut_y=0&cut_h=0&cut_w=686&di=1ef34d43b920a9232b83430ea8c5364f&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fnews%2Fcrop%253D0%252C89%252C772%252C386%2Fsign%3D11e673e1b38f8c54f79c9f6f071901cd%2F7acb0a46f21fbe09d5d4761b6c600c338744ad33.jpg",
"马上就列装啦？量产型歼20战机试飞画面曝光", 117);
insert into image values(null, 
"http://timg01.baidu-img.cn/timg?tc&size=b668_376&sec=0&quality=100&cut_x=41&cut_y=0&cut_h=0&cut_w=668&di=b8568811108d700904c27a2792b4b07c&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fnews%2Fcrop%253D0%252C9%252C752%252C376%2Fsign%3D9216b2c5858ba61ecba1926f7c04bb33%2Fd058ccbf6c81800a3afb3d01b63533fa828b47a6.jpg",
"维密天使情人节大片 演绎红色\“火辣激情夜\”", 200);
insert into image values(null, 
"http://timg01.baidu-img.cn/timg?tc&size=b760_428&sec=0&quality=100&cut_x=47&cut_y=0&cut_h=0&cut_w=760&di=92d5773a245e202322034dfe1eb4674b&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fnews%2Fcrop%253D15%252C28%252C856%252C428%2Fsign%3D933fd030def9d72a032b4a5de91b1d18%2Fdbb44aed2e738bd43a6f063ea68b87d6277ff977.jpg",
"刘嘉玲穿红裙大秀美背 与张学", 67);

create table entertainment(
	news_id int not null auto_increment,
    news_img varchar(600),
	news_title varchar(100) not null,
    news_content text,
    news_date date not null,
    news_label varchar(20),
    primary key(news_id)
)default charset='utf8';

-- init value
insert into entertainment values(null, 
"http://t12.baidu.com/it/u=http://img4.cache.netease.com/3g/2016/1/27/2016012702410809c19.jpg&fm=36",
"未分手?吴昕删博事件变罗生门", "也有大V爆料称两人根本没分手，而是为了突破吴昕经纪公司“不许公布恋情”的规定而导演的一出闹剧。", "2016-01-25", "无锡");
insert into entertainment values(null, 
"http://t12.baidu.com/it/u=http://img6.cache.netease.com/3g/2016/1/26/20160126105724f9e05.png&fm=36",
"黎明郭富城或合体江苏春晚", "记者从江苏卫视获悉，近年电影新作不断的黎明，将首次大胆跨界，携导演处女作亮相江苏春晚。", "2016-01-24", "郭富城");
 