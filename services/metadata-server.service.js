const MetadataService = require("@steedos/service-metadata-server");
const path = require('path');

module.exports = {
    name: "metadata-server",
    namespace: "steedos",
		mixins: [MetadataService],
}