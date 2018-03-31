import gulp from 'gulp';  // 首先是gulp，因为整个项目基于gulp构建
import gulpif from 'gulp-if';  // 在gulp语句中做语句判断的
import concat from 'gulp-concat';  // 在gulp中处理文件拼接的
import webpack from 'webpack';  // 整个打包过程是通过webpack来做的
import gulpWebpack from 'webpack-stream';  // gulp处理的都是文件流，是基于stream的，所以结合webpack-stream来处理
import named from 'vinyl-named';  // 对文件重命名做标志的
import livereload from 'gulp-livereload';  // 文件修改以后浏览器自动刷新功能
import plumber from 'gulp-plumber';  // 管道拼接，处理文件信息流的这么一个包,
import rename from 'gulp-rename';  // 对文件重命名
import uglify from 'gulp-uglify';  // 资源压缩，对js和css文件压缩
import {log,colors} from 'gulp-util';  // 在命令行工具输出的包，对log和色彩的输出
import args from './util/args';  // 对命令行解析的包

gulp.task('scripts', ()=>{
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({ // 处理常规的错误逻辑，按照gulp的处理逻辑，每个pipe遇到错误逻辑都要抛出异常，因为脚本处理文件要经过很长的流程，为了避免在某一个环节报错，抛出异常，我们需要集中处理错误，改变默认的错误处理机制。这里使用plumber去处理，
            errorHandle:function(){ // plumber默认错误的处理是结合webpack来做的，这里不用深究，知道是这么写的就可以了。

            }
        }))  
        .pipe(named()) // 对文件重新命名一下
        .pipe(gulpWebpack({
            module:{
                loaders:[{
                    test:/\.js$/,
                    loader:'babel'
                }]
            }
        }),null,(err,stats)=>{
            log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
                chuncks:false
            }))
        }) // 对js进行编译，进入webpack的功能
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename:'cp',
            extname:'.min.js'
        }))
        .pipe(uglify({
            compress:{
                properties:false
            },
            output:{
                'quote_keys':true
            }
        }))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch, livereload()))
    })