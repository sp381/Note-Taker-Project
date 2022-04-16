const util = require('util');
const fs = require('fs');
const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);

function Save() {
    write(); {
        return writeNote('./db/db.json', JSON.stringify(note));
    };

    read(); {
        return readNote('db/db.json', 'utf8');
    }

    retrieveNotes(); {
        return this.read().then(notes => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        });
    };    
};