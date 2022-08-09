// Helper to change datestring to XX/XX/XXXX format
const toDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString();
};

module.exports = {
    toDate,
}