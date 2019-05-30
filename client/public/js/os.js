const os = function os() {
    let con = '';
    axios({
        type: 'get',
        url: './json/os.json',
        dataType: 'json'
    }).then(function (resp) {
        console.log(resp);
        if (resp.status == 200) {
            con = resp.data.constants;
            return con;
        }
    }).catch(function (err) {
        console.log(err);
    })
}
export default os;