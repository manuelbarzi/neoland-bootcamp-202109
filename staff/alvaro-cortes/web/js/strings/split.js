function split(str, pattern) {
    let parts = [];
    let part = "";
    if (pattern === undefined) {
        parts.push(str);
    }
    else {
        for (let i = 0; i < str.length; i++) {
            if (pattern === "") parts.push(str[i]);
            else {
                let characters = "";

                for (let j = 0; j < pattern.length; j++) {
                    characters += (str[i + j])? str[i + j]: "";
                }

                if (pattern === characters) {
                    if(part !== "") {
                        parts.push(part);
                    }
                    part = "";
                    i += (pattern.length - 1);
                }
                else {
                    part += characters[0];
                    if (i === str.length - 1) parts.push(part);
                }
            }
        }
    }
    return parts;
}