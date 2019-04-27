$(function () {
    axios({
        type:'get',
        url:'./json/os.json',
        dataType: 'json'
    }).then ( function (resp) {
        if (resp.status == 200){
            const con = resp.data.constants;
            console.log(con);
        }
    }).catch (function (err) {
        console.log(err);
    })
})