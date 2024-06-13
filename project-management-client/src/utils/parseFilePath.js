// - /src/util/parseFilePath - parses file path and returns file name

function parseFilePath(file_path) {
    const parsed_str = file_path.split('-');
    parsed_str.shift(); // Remove the first element (which is before the first dash)
    return parsed_str.join('-').trim();
}

export default parseFilePath;
