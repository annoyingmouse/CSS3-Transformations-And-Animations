new Vue({
    el: "#app",
    data: {
        width: 10,
        height: 18,
        d: 25,
        num: 9,
        matrices: {
            0: [
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ],
            1: [
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
            ],
            2: [
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ],
            3: [
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ],
            4: [
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
            ],
            5: [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ],
            6: [
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ],
            7: [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
            ],
            8: [
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ],
            9: [
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },
    computed: {
        gridTemplate: function () {
            return {
                height: (this.height * this.d) + ((this.height - 1) * 3) + "px",
                width: (this.width * this.d) + ((this.width - 1) * 3) + "px",
                gridColumns: _.fill(Array(this.width), "1fr").join(" "),
                gridRows: _.fill(Array(this.height), "1fr").join(" "),
                gridTemplateColumns: _.fill(Array(this.width), "1fr").join(" "),
                gridTemplateRows: _.fill(Array(this.height), "1fr").join(" "),
            }
        },
    },
    methods: {
        shouldPlace: function (x, y) {
            if (y > 3 && y < 8 && x > 3 && x < 8) {
                return false
            }
            if (y > 10 && y < 16 && x > 3 && x < 8) {
                return false
            }
            return true
        },
        getStyle: function (x, y) {
            return {
                gridColumn: x,
                gridRow: y,
                width: this.d + "px",
                height: this.d + "px",
                margin: "1px"
            }
        },
        getStatus: function (x, y) {
            var place = false;
            _.forEach(this.matrices[this.num], function (row, rowIndex) {
                _.forEach(row, function (cell, cellIndex) {
                    if (cell && rowIndex + 1 === y && cellIndex + 1 === x) {
                        place = true;
                    }
                })
            })
            return place;
        },
        updateNum: function () {
            var temp = this.num - 1
            if (temp < 0) {
                this.num = 9;
            } else {
                this.num -= 1;
            }
            console.log(this.num);
        }
    },
    mounted: function () {
        setInterval(this.updateNum, 2000);
    }
});