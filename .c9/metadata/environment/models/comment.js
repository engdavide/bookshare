{"filter":false,"title":"comment.js","tooltip":"/models/comment.js","undoManager":{"mark":63,"position":63,"stack":[[{"start":{"row":0,"column":0},"end":{"row":15,"column":52},"action":"insert","lines":["var mongoose = require(\"mongoose\");","","","var bookSchema =  new mongoose.Schema({","    name: String,","    description: String,","    img: String","    comments: [","        {","            type: mongoose.Schema.Types.ObjectId,","            ref: \"Comment\"","        }","    ]","});","","module.exports = mongoose.model(\"Book\", bookSchema);"],"id":1}],[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"remove","lines":["k"],"id":2},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"remove","lines":["o"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"remove","lines":["o"]},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"remove","lines":["b"]}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["c"],"id":3},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["o"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["m"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["m"]},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["e"]},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["n"]},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["t"]}],[{"start":{"row":4,"column":4},"end":{"row":12,"column":5},"action":"remove","lines":["name: String,","    description: String,","    img: String","    comments: [","        {","            type: mongoose.Schema.Types.ObjectId,","            ref: \"Comment\"","        }","    ]"],"id":4},{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["t"]},{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["e"]},{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["x"]},{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["t"]},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":[":"]}],[{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":[" "],"id":5},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["s"]},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["t"]}],[{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"remove","lines":["t"],"id":6},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"remove","lines":["s"]}],[{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["S"],"id":7},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["t"]},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["r"]},{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["i"]},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["n"]},{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["g"]},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":[","]}],[{"start":{"row":4,"column":17},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"insert","lines":["    "]},{"start":{"row":5,"column":4},"end":{"row":5,"column":5},"action":"insert","lines":["A"]},{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"insert","lines":["u"]}],[{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"remove","lines":["u"],"id":9},{"start":{"row":5,"column":4},"end":{"row":5,"column":5},"action":"remove","lines":["A"]}],[{"start":{"row":5,"column":4},"end":{"row":5,"column":5},"action":"insert","lines":["a"],"id":10},{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"insert","lines":["t"]},{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"insert","lines":["u"]},{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":["t"]}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"remove","lines":["t"],"id":11},{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"remove","lines":["u"]},{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"remove","lines":["t"]}],[{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"insert","lines":["u"],"id":12},{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"insert","lines":["t"]},{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":["h"]},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["o"]},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["r"]},{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":[":"]}],[{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"insert","lines":[" "],"id":13},{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":["S"]},{"start":{"row":5,"column":13},"end":{"row":5,"column":14},"action":"insert","lines":["t"]},{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"insert","lines":["r"]},{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"insert","lines":["i"]},{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"insert","lines":["n"]},{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["g"]},{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":[","]}],[{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"remove","lines":[","],"id":14}],[{"start":{"row":8,"column":36},"end":{"row":8,"column":37},"action":"remove","lines":["k"],"id":15},{"start":{"row":8,"column":35},"end":{"row":8,"column":36},"action":"remove","lines":["o"]},{"start":{"row":8,"column":34},"end":{"row":8,"column":35},"action":"remove","lines":["o"]},{"start":{"row":8,"column":33},"end":{"row":8,"column":34},"action":"remove","lines":["B"]}],[{"start":{"row":8,"column":33},"end":{"row":8,"column":34},"action":"insert","lines":["C"],"id":16},{"start":{"row":8,"column":34},"end":{"row":8,"column":35},"action":"insert","lines":["o"]},{"start":{"row":8,"column":35},"end":{"row":8,"column":36},"action":"insert","lines":["m"]},{"start":{"row":8,"column":36},"end":{"row":8,"column":37},"action":"insert","lines":["m"]},{"start":{"row":8,"column":37},"end":{"row":8,"column":38},"action":"insert","lines":["e"]},{"start":{"row":8,"column":38},"end":{"row":8,"column":39},"action":"insert","lines":["n"]},{"start":{"row":8,"column":39},"end":{"row":8,"column":40},"action":"insert","lines":["t"]}],[{"start":{"row":8,"column":46},"end":{"row":8,"column":47},"action":"remove","lines":["k"],"id":17},{"start":{"row":8,"column":45},"end":{"row":8,"column":46},"action":"remove","lines":["o"]},{"start":{"row":8,"column":44},"end":{"row":8,"column":45},"action":"remove","lines":["o"]},{"start":{"row":8,"column":43},"end":{"row":8,"column":44},"action":"remove","lines":["b"]}],[{"start":{"row":8,"column":43},"end":{"row":8,"column":44},"action":"insert","lines":["c"],"id":18},{"start":{"row":8,"column":44},"end":{"row":8,"column":45},"action":"insert","lines":["o"]},{"start":{"row":8,"column":45},"end":{"row":8,"column":46},"action":"insert","lines":["m"]},{"start":{"row":8,"column":46},"end":{"row":8,"column":47},"action":"insert","lines":["m"]},{"start":{"row":8,"column":47},"end":{"row":8,"column":48},"action":"insert","lines":["e"]},{"start":{"row":8,"column":48},"end":{"row":8,"column":49},"action":"insert","lines":["n"]},{"start":{"row":8,"column":49},"end":{"row":8,"column":50},"action":"insert","lines":["t"]}],[{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":["{"],"id":19}],[{"start":{"row":5,"column":13},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":20},{"start":{"row":6,"column":0},"end":{"row":6,"column":8},"action":"insert","lines":["        "]},{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["i"]},{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["d"]},{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["/"]}],[{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"remove","lines":["/"],"id":21}],[{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":[":"],"id":22}],[{"start":{"row":6,"column":11},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":23},{"start":{"row":7,"column":0},"end":{"row":7,"column":8},"action":"insert","lines":["        "]},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["u"]},{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["s"]},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["e"]},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["r"]},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["n"]},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["a"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["m"]},{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["e"]},{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":[":"]}],[{"start":{"row":7,"column":17},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":24},{"start":{"row":8,"column":0},"end":{"row":8,"column":8},"action":"insert","lines":["        "]},{"start":{"row":8,"column":8},"end":{"row":8,"column":9},"action":"insert","lines":["r"]},{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":["e"]},{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"insert","lines":["f"]},{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"insert","lines":[":"]}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"remove","lines":["S"],"id":25},{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"remove","lines":["t"]},{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"remove","lines":["r"]},{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"remove","lines":["i"]},{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"remove","lines":["n"]},{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"remove","lines":["g"]}],[{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"remove","lines":[":"],"id":26}],[{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"insert","lines":[":"],"id":27}],[{"start":{"row":8,"column":12},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":28},{"start":{"row":9,"column":0},"end":{"row":9,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":9,"column":4},"end":{"row":9,"column":8},"action":"remove","lines":["    "],"id":29}],[{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"insert","lines":["}"],"id":30}],[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":[" "],"id":31},{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":["{"]}],[{"start":{"row":6,"column":13},"end":{"row":8,"column":9},"action":"insert","lines":["","            ","        }"],"id":32}],[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["m"],"id":33}],[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"remove","lines":["m"],"id":34}],[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["t"],"id":35},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["y"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["p"]},{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["e"]},{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":[":"]},{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":["m"]},{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["o"]},{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"insert","lines":["n"]},{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["g"]},{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"insert","lines":["o"]}],[{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"remove","lines":["o"],"id":36},{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"remove","lines":["g"]},{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"remove","lines":["n"]},{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"remove","lines":["o"]},{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"remove","lines":["m"]}],[{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":[" "],"id":37},{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["m"]},{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"insert","lines":["o"]},{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["n"]},{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"insert","lines":["g"]},{"start":{"row":7,"column":22},"end":{"row":7,"column":23},"action":"insert","lines":["o"]},{"start":{"row":7,"column":23},"end":{"row":7,"column":24},"action":"insert","lines":["o"]},{"start":{"row":7,"column":24},"end":{"row":7,"column":25},"action":"insert","lines":["s"]},{"start":{"row":7,"column":25},"end":{"row":7,"column":26},"action":"insert","lines":["e"]},{"start":{"row":7,"column":26},"end":{"row":7,"column":27},"action":"insert","lines":["."]},{"start":{"row":7,"column":27},"end":{"row":7,"column":28},"action":"insert","lines":["S"]},{"start":{"row":7,"column":28},"end":{"row":7,"column":29},"action":"insert","lines":["c"]},{"start":{"row":7,"column":29},"end":{"row":7,"column":30},"action":"insert","lines":["h"]},{"start":{"row":7,"column":30},"end":{"row":7,"column":31},"action":"insert","lines":["e"]},{"start":{"row":7,"column":31},"end":{"row":7,"column":32},"action":"insert","lines":["m"]},{"start":{"row":7,"column":32},"end":{"row":7,"column":33},"action":"insert","lines":["a"]}],[{"start":{"row":7,"column":33},"end":{"row":7,"column":34},"action":"insert","lines":["."],"id":38},{"start":{"row":7,"column":34},"end":{"row":7,"column":35},"action":"insert","lines":["t"]},{"start":{"row":7,"column":35},"end":{"row":7,"column":36},"action":"insert","lines":["y"]},{"start":{"row":7,"column":36},"end":{"row":7,"column":37},"action":"insert","lines":["p"]},{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"insert","lines":["e"]},{"start":{"row":7,"column":38},"end":{"row":7,"column":39},"action":"insert","lines":["s"]},{"start":{"row":7,"column":39},"end":{"row":7,"column":40},"action":"insert","lines":["."]}],[{"start":{"row":7,"column":39},"end":{"row":7,"column":40},"action":"remove","lines":["."],"id":39},{"start":{"row":7,"column":38},"end":{"row":7,"column":39},"action":"remove","lines":["s"]},{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"remove","lines":["e"]},{"start":{"row":7,"column":36},"end":{"row":7,"column":37},"action":"remove","lines":["p"]},{"start":{"row":7,"column":35},"end":{"row":7,"column":36},"action":"remove","lines":["y"]},{"start":{"row":7,"column":34},"end":{"row":7,"column":35},"action":"remove","lines":["t"]}],[{"start":{"row":7,"column":34},"end":{"row":7,"column":35},"action":"insert","lines":["T"],"id":40},{"start":{"row":7,"column":35},"end":{"row":7,"column":36},"action":"insert","lines":["y"]},{"start":{"row":7,"column":36},"end":{"row":7,"column":37},"action":"insert","lines":["p"]},{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"insert","lines":["e"]},{"start":{"row":7,"column":38},"end":{"row":7,"column":39},"action":"insert","lines":["s"]},{"start":{"row":7,"column":39},"end":{"row":7,"column":40},"action":"insert","lines":["."]},{"start":{"row":7,"column":40},"end":{"row":7,"column":41},"action":"insert","lines":["O"]}],[{"start":{"row":7,"column":41},"end":{"row":7,"column":42},"action":"insert","lines":["b"],"id":41},{"start":{"row":7,"column":42},"end":{"row":7,"column":43},"action":"insert","lines":["j"]},{"start":{"row":7,"column":43},"end":{"row":7,"column":44},"action":"insert","lines":["e"]},{"start":{"row":7,"column":44},"end":{"row":7,"column":45},"action":"insert","lines":["c"]},{"start":{"row":7,"column":45},"end":{"row":7,"column":46},"action":"insert","lines":["t"]},{"start":{"row":7,"column":46},"end":{"row":7,"column":47},"action":"insert","lines":["d"]}],[{"start":{"row":7,"column":46},"end":{"row":7,"column":47},"action":"remove","lines":["d"],"id":42}],[{"start":{"row":7,"column":46},"end":{"row":7,"column":47},"action":"insert","lines":["I"],"id":43},{"start":{"row":7,"column":47},"end":{"row":7,"column":48},"action":"insert","lines":["d"]},{"start":{"row":7,"column":48},"end":{"row":7,"column":49},"action":"insert","lines":[","]}],[{"start":{"row":7,"column":49},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":44},{"start":{"row":8,"column":0},"end":{"row":8,"column":12},"action":"insert","lines":["            "]},{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["r"]},{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["e"]},{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["f"]},{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":[":"]}],[{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":[" "],"id":45}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":19},"action":"insert","lines":["\"\""],"id":46}],[{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["U"],"id":47},{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"insert","lines":["s"]},{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"insert","lines":["e"]},{"start":{"row":8,"column":21},"end":{"row":8,"column":22},"action":"insert","lines":["r"]}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":12},"action":"remove","lines":["        ref:"],"id":48},{"start":{"row":10,"column":17},"end":{"row":11,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":35},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":49},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["v"]},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["a"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":[" "],"id":50}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["u"],"id":51}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"remove","lines":["u"],"id":52}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["U"],"id":53},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["s"]},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["e"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":12},"action":"insert","lines":["    "],"id":54}],[{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["="],"id":55}],[{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":[" "],"id":56},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["r"]},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["e"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["q"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["u"]},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["i"]},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["r"]},{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":23},"action":"insert","lines":["()"],"id":57}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["/"],"id":58}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"remove","lines":["/"],"id":59}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":24},"action":"insert","lines":["\"\""],"id":60}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["."],"id":61},{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["."]},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["/"]},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["m"]},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["o"]},{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["d"]},{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["e"]},{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":["l"]},{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"insert","lines":["s"]},{"start":{"row":2,"column":32},"end":{"row":2,"column":33},"action":"insert","lines":["/"]},{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":["u"]},{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":["s"]},{"start":{"row":2,"column":35},"end":{"row":2,"column":36},"action":"insert","lines":["e"]},{"start":{"row":2,"column":36},"end":{"row":2,"column":37},"action":"insert","lines":["r"]}],[{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":[" "],"id":62},{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"insert","lines":["S"]},{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"insert","lines":["t"]},{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"insert","lines":["r"]},{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"insert","lines":["i"]},{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"insert","lines":["n"]},{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"insert","lines":["g"]}],[{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":[","],"id":63}],[{"start":{"row":2,"column":39},"end":{"row":2,"column":40},"action":"insert","lines":[";"],"id":64}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":0},"end":{"row":14,"column":3},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1541079237199,"hash":"a760951d1ca1642b5729fd655c5ae77f58dd971f"}