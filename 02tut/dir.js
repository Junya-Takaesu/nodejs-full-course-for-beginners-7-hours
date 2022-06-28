const fs = require('fs');

if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
      if(err) throw err;
      console.log('ディレクトリを作成しました');
    });
}

if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
      if(err) throw err;
      console.log('ディレクトリを削除しました');
    });
}

