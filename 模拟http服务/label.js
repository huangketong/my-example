var http = require('http');
var url = require('url');

http.createServer(function(req, res) {

    var query = url.parse(req.url, true).query;
    var callback = query.callback || "callback";
    var data = {
        errcode: 0,
        msg: "查询成功",
        recordsFiltered: "24",
        // recordsTotal: "24",
        status: 0,
        hasCreate: false,
        total: {
            'company_total': 1000, //公司
            'person_total': 10000, //个人
            'supplement_company_total': 10000, //补充公司
            'supplement_person_total': 10000, //补充个人
            'total': 1000, //总计
        },
        "data": [
            {
            "id": "465",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "46",
            "tag_name": "你好",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "400",
            "tag_name": "你好",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "461",
            "tag_name": "金柚",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "465",
            "tag_name": "金柚",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "46",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "400",
            "tag_name": "网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "461",
            "tag_name": "网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "465",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "46",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "400",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "461",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "465",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "46",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "400",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "461",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "465",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "46",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "400",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "461",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "465",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "46",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "400",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        },{
            "id": "461",
            "tag_name": "金柚网",
            "set_time": "2016-11-20 17:23:23",
            "last_time": "2016-11-20 17:23:23",
            "tag_visit": "100"
        }
        ]
    };

    res.writeHead(200, {
        'Context-Type': 'application/x-www-form-urlencode',
        'Access-Control-Allow-Origin': '*'
    });
    //res.end(callback+'('+JSON.stringify(data)+')');
    res.end(JSON.stringify(data));
}).listen(3007, function() {
    console.log('server is runing...');
});
