const fs = require('fs');
const path = require('path');

module.exports.galleryItems = (req, res) => {

    const dir = '/assets/images/cert';
    const files = fs.readdirSync(path.resolve(__dirname, `../../../public${dir}`));
    const t_files = fs.readdirSync(path.resolve(__dirname, `../../../public${dir}/thumbs`));
    const arr = [];

    files
        .filter( x => x.indexOf('jpg')>=0 )
        .forEach( x => {
            if (t_files.indexOf(`thumbs_${x}`) >= 0) {
                arr.push({
                    original: `${dir}/${x}`,
                    thumbnail: `${dir}/thumbs/thumbs_${x}`
                });
            }
        });

    res.json(arr);
};