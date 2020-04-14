# GBLDownloader

## What's this
PokemonGoの[Goバトルリーグランキング](https://pokemongolive.com/ja/leaderboard/)のページから，順位，ユーザ名，ランク，レート，バトル数をCSV形式でダウンロードするBookmarkletです．

## Environment

現在，macOS版のGoogle Chromeで動作を確認しています．
他のOSとWebブラウザでも使用できると思います．

## How to bookmark

Bookmarkletですので，Webブラウザのブックマークに登録してお使いください．

登録方法がわからない人は，こちらのリンク<a href="javascript:(()=>{
    let h = '.gbl-leaderboard__trainer';
    let f = (d,e) => d.querySelector(e).innerText.trim();
    let datas = document.querySelectorAll(h);
    let output = '';
    for( let data of datas ) {
        let d = f(data,h+'__rank')+',';
        d+=f(data,h+'__details__trainer__name')+',';
        d+=(f(data,h+'__details__trainer__rank').split(': '))[1]+',';
        d+=f(data,h+'__battles__rating')+',';
        d+=(f(data,h+'__battles__count').split(': '))[1];
        output+=d+'\n';
    }
    let blob = new Blob([output],{type:'text/csv'});
    let a1 = document.createElement('a');
    a1.href= URL.createObjectURL(blob);
    a1.download = 'test.csv';
    a1.click();
})();">GBL Donwloader</a>をGoogle Chromeのブックマークバーにドラッグしてください．

## How to use

まず[Goバトルリーグランキング](https://pokemongolive.com/ja/leaderboard/)をWebブラウザで表示してください．その後，Google Chromeのブックマークに登録しているGBL Downloaderを選択してください．初回のみダウンロードして良いか尋ねられるので「許可」を選択してください．その後ダウンロードのダイアログが表示されるので，好きなディレクトリにダウンロードしてください．

