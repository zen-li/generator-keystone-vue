new Vue({
    el: '#app',
    data: function () {
        return {
            message: 'Hello vue.js!',
            users: []
        }
    },

    ready: function () {
        var that = this
        superagent
            .get('/api/v1/users')
            .end(function (err, res) {
                if (!err && res.ok) {
                    that.users = res.body.data
                    console.log(JSON.stringify(that.users))
                }
            })
    }
})