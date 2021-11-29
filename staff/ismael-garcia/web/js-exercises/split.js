function split(str, separator) {
    var parts = [];
    var part = '';
    
    if (separator === undefined) {
        parts.push(str);
    }
    else {
        for (var i = 0; i < str.length; i++) {
            if (separator === '') {
                parts.push(str[i]);
            } else {
                var characters = '';

                for (var j = 0; j < separator.length; j++) {
                    characters += (str[i + j])? str[i + j]: '';
                }

                if (separator === characters) {
                    if (part !== '') {
                        parts.push(part);
                    }
                    part = '';
                    i += (separator.length - 1);
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