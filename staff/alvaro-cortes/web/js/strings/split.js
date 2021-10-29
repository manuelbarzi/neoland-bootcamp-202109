function split(str, pattern) {
    let parts = "";
    let part = "";
    if (pattern === undefined) {
        parts += str;
    }
    else {
        for (let i = 0; i < str.length; i++) {
            if (pattern === "") parts += str[i];
            else {
                let characters = "";

                for (let j = 0; j < pattern.length; j++) {
                    characters += (str[i + j])? str[i + j]: "";
                }

                if (pattern === characters) {
                    if(part !== "") {
                        parts += part;
                    }
                    part = "";
                    i += (pattern.length - 1);
                }
                else {
                    part += characters[0];
                    if (i === str.length - 1) parts += part;
                }
            }
        }
    }
    return parts;
}