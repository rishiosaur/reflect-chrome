function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
}
function cleanDomain(urls) {
    // check to see if urls exist
    if (urls[0] == undefined) {
        // return empty if not
        return "";
    }
    else {
        // regex match for url
        const activeURL = urls[0].match(/^[\w]+:\/{2}([\w\.:-]+)/);
        // no matching sites, return empty
        if (activeURL == null) {
            return "";
        }
        else {
            // strip www.
            return activeURL[1].replace("www.", "");
        }
    }
}
