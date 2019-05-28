const os =  function () {
    let con = '';
    axios({
        type: 'get',
        url: './json/os.json',
        dataType: 'json'
    }).then(function (resp) {
        if (resp.status == 200) {
            con = resp.data.constants;
            console.log(con);
            return con;
        }
    }).catch(function (err) {
        console.log(err);
    })

}

export default os;