var zipper = require("zip-local");
zipper.sync.zip("./node_modules").compress().save("./node_modules.zip");