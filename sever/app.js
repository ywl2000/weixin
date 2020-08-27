//引入Express模块
const express = require('express');

//引入CORS模块

const cors = require('cors');

//引入MySQL模块

const mysql = require('mysql');

//引入body-parser模块
const bodyParser = require('body-parser');

//创建MySQL连接池
const pool = mysql.createPool({
    //数据库服务器地址
    host: '127.0.0.1',
    //数据库用户名
    user: 'root',
    //数据库用户密码
    password: '',
    //数据库服务器端口号
    port: 3306,
    //数据库名称
    database: 'xzqa',
    //编码方式
    charset: 'utf8',
    //连接限制
    connectionLimit: 15
});



//创建Express实例
const server = express();

//将CORS作为Server的中间件使用
server.use(cors({
    origin: ['http://127.0.0.1:8080', 'http://49.234.220.36:3000',
        'http://localhost:8080', 'http://192.168.13.49:8080', 'http://172.88.5.143:8080']
}));

//将bodyParser作为Server中间件使用
server.use(bodyParser.urlencoded({
    extended: false
}));


//获取所有文章分类信息的API
server.get('/category', (req, res) => {
    //SQL查询语句
    let sql = 'SELECT id,category_name FROM xzqa_category';
    //执行SQL查询语句
    pool.query(sql, (err, results) => {
        if (err) throw err;
        //响应到客户端的信息
        res.send({ message: '查询成功', code: 1, results: results });
    });
});

//获取特定分类下的文章数据
server.get('/articles', (req, res) => {
    //获取客户端URL地址栏的参数
    let cid = req.query.cid;
    //获取当前的页码
    let page = req.query.page;
    //声明变量用于存储每页显示的记录数
    let pagesize = 20;
    //分页实质上利用了SELECT语句的LIMIT子句
    //其标准计算公式为 (页码-1) * 每页显示记录数
    //所以现在必须通过上述公式计算出 offset参数值    
    let offset = (page - 1) * pagesize;
    //获取总记录数的操作        
    let sql = 'SELECT COUNT(id) AS count FROM xzqa_article WHERE category_id=?';
    pool.query(sql, [cid], (err, result) => {
        if (err) throw err;
        //获取出总记录数
        //因为聚合函数只有一个返回结果,所以result[0]将返回该结果
        //而结果是一个对象,包含有count的属性(count属性实质是SQL语名中字段的别名)
        let rowCount = result[0].count;

        //声明变量pagecount用于存储计算出来总页数
        let pagecount = Math.ceil(rowCount / pagesize);
        //以获取到的参数为条件在文章数据表中进行查找操作    
        sql = 'SELECT id,subject,description,image FROM xzqa_article WHERE category_id = ? LIMIT ' + offset + ',' + pagesize;
        pool.query(sql, [cid], (err, results) => {
            if (err) throw err;
            res.send({ message: '查询成功', code: 1, articles: results, pagecount: pagecount });
        });

    });

});


// 获取指定文章详细信息的接口
server.get('/view', (req, res) => {
    //获取地址栏中的id参数
    let id = req.query.id;
    //以id为条件进行文章相关信息的查找操作(一会儿还要进行调整)
    let sql = 'SELECT a.id,subject,content,nickname,avatar,article_number,created_at FROM xzqa_article AS a INNER JOIN xzqa_author AS u ON author_id = u.id WHERE a.id=?';
    pool.query(sql, [id], (err, results) => {
        if (err) throw err;
        res.send({ message: '查询成功', code: 1, results: results[0] });
    });
});

//用户注册的接口
server.post('/register', (req, res) => {
    //获取用户提交的用户名等信息
    let username = req.body.username;
    //以用户名为条件进行查找操作,如果用户存在,则产生合法的错误信息
    //如果用户不存在,则将用户的相关信息写入数据表 -- xzqa_author  
    let sql = 'SELECT COUNT(id) AS count FROM xzqa_author WHERE username=?';
    pool.query(sql, [username], (err, results) => {
        if (err) throw err;
        //此时代表用户已经存在     
        if (results[0].count) {
            res.send({ message: '注册失败', code: 0 });
        } else {
            //获取密码信息
            let password = req.body.password;
            //完成数据写入操作
            let sql = 'INSERT INTO xzqa_author(username,password) VALUES(?,MD5(?))';
            pool.query(sql, [username, password], (err, results) => {
                if (err) throw err;
                res.send({ message: '注册成功', code: 1 });
            });
        }
    })

});


// 用户登录接口
server.post('/login', (req, res) => {
    //获取用户名和密码信息
    let username = req.body.username;
    let password = req.body.password;
    //以用户名和密码为条件进行查找，如果找到，则代表用户登录成功;否则代表登录失败
    let sql = 'SELECT id,username,avatar FROM xzqa_author WHERE username=? AND password=MD5(?)';
    pool.query(sql, [username, password], (err, results) => {
        if (err) throw err;
        if (results.length == 1) {
            res.send({ message: '登录成功', code: 1, results: results[0] });
        } else {
            res.send({ message: '登录失败', code: 0 });
        }
    });
});





//指定服务器的监听端口号
server.listen(3000);