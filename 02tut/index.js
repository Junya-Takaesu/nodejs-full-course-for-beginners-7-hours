const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'), data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nよろしくお願いしマス');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8')
        console.log(newData);
    } catch (err) {
        console.log(err);
    }
}

fileOps();

console.log('Hello...');

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'お目にかかれて光栄です', (err) => {
//     if(err) throw err;
//     console.log('書き込みが完了');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n同じく', (err) => {
//         if(err) throw err;
//         console.log('追記が完了');

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//             if(err) throw err;
//             console.log('名前変更完了');
//         })
//     })
// })

// process.on('uncaughtException', err => {
//     console.log(`There was an aucaught error: ${err}`)
//     process.exit(1)
// })