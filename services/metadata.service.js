const MetadataService = require("@steedos/service-metadata");
const path = require('path');

module.exports = {
    name: "metadata",
    namespace: "steedos",
    mixins: [MetadataService],
}