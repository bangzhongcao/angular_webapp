var gulp = require('gulp');
// 引入gulp-load-plugins 可以不用声明引入gulp-concat了 直接用$引用
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {
	srcPath:'src/',
	devPath:'build/',
	prdPath:'dist/'
};
// 第三方依赖包
gulp.task('lib',function(){
	gulp.src('bower_components/**/*.js')
	.pipe(gulp.dest(app.devPath + 'vendor'))
	.pipe(gulp.dest(app.prdPath + 'vendor'))
	.pipe($.connect.reload());
});
// html
gulp.task('html',function(){
	gulp.src(app.srcPath + '**/*.html')
	.pipe(gulp.dest(app.devPath))
	.pipe(gulp.dest(app.prdPath))
	.pipe($.connect.reload());
});
// json
gulp.task('json',function(){
	gulp.src(app.srcPath + 'data/**/*.json')
	.pipe(gulp.dest(app.devPath + 'data'))
	.pipe(gulp.dest(app.prdPath + 'data'))
	.pipe($.connect.reload());
});
// less 
gulp.task('less',function(){
	gulp.src(app.srcPath + 'style/index.less')
	.pipe($.less())//less文件转换成css文件
	.pipe(gulp.dest(app.devPath + 'css'))
	.pipe($.cssmin())
	.pipe(gulp.dest(app.prdPath + 'css'))
	.pipe($.connect.reload());
});
// js
gulp.task('js',function(){
	gulp.src(app.srcPath + 'script/**/*.js')
	.pipe($.concat('index.js'))//合并成index.js文件
	.pipe(gulp.dest(app.devPath + 'js'))
	.pipe($.uglify())//js文件压缩
	.pipe(gulp.dest(app.prdPath + 'js'))
	.pipe($.connect.reload());
});
// image
gulp.task('image',function(){
	gulp.src(app.srcPath + 'image/**/*')
	.pipe(gulp.dest(app.devPath + 'image'))
	.pipe($.imagemin())
	.pipe(gulp.dest(app.prdPath + 'image'))
	//刷新页面 IE8以下不生效
	.pipe($.connect.reload());
});
// 综合命令
gulp.task('build',['image','js','less','lib','html','json']);
// 清除文件
gulp.task('clean',function(){
	gulp.src([app.devPath,app.prdPath])
	.pipe($.clean());
});
// 服务器 自动打开服务器
gulp.task('serve',['build'],function(){
	$.connect.server({
		root:[app.devPath],//服务器路径读取
		livereload:true,//自动刷新浏览器
		port:1234
	});
	//打开页面
	open('http://localhost:1234');
	//watch 监听 修改文件自动执行相应的任务 第一个参数是监听的内容
	// 第二个参数是任务 一旦参数变化，执行对应的任务
	gulp.watch('bower_components/**/*',['lib']);
	gulp.watch(app.srcPath + '**/*.html',['html']);
	gulp.watch(app.srcPath + 'data/**/*.json',['json']);
	gulp.watch(app.srcPath + 'style/**/*.less',['less']);
	gulp.watch(app.srcPath + 'script/**/*.js',['js']);
	gulp.watch(app.srcPath + 'image/**/*',['image']);
});

// gulp 的默认任务 输入gulp就执行default任务
gulp.task('default',['serve']);