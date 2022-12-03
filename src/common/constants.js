export const RECOMMENDATION_CATEGORIES = [{ title: 'RECOMMENDED\n COLUMN', detail: 'オススメ' },
{ title: 'RECOMMENDED\n DIET', detail: 'ダイエット' }
    , { title: 'RECOMMENDED\n BEAUTY', detail: '美容' }
    , { title: 'RECOMMENDED\n HEALTH', detail: '健康' }
]

export const RECOMMENDATION_ITEMS = [
    { title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…', recommendations: '#魚料理  #和食  #DHA', time: '2021.05.17   23:25', src: './images/column-1.jpg' },
    { title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…', recommendations: '#魚料理  #和食  #DHA', time: '2021.05.17   23:25', src: './images/column-2.jpg' },
    { title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…', recommendations: '#魚料理  #和食  #DHA', time: '2021.05.17   23:25', src: './images/column-3.jpg' },
    { title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…', recommendations: '#魚料理  #和食  #DHA', time: '2021.05.17   23:25', src: './images/column-4.jpg' },
    { title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…', recommendations: '#魚料理  #和食  #DHA', time: '2021.05.17   23:25', src: './images/column-5.jpg' },
    { title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…', recommendations: '#魚料理  #和食  #DHA', time: '2021.05.17   23:25', src: './images/column-6.jpg' },
    { title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…', recommendations: '#魚料理  #和食  #DHA', time: '2021.05.17   23:25', src: './images/column-7.jpg' },
    { title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…', recommendations: '#魚料理  #和食  #DHA', time: '2021.05.17   23:25', src: './images/column-8.jpg' }
]

export const MEAL_CATEGORY = [{ text: 'morning', type: 'big_meal', src: './images/top-page-icons/knife.png' },
{ text: 'lunch', type: 'big_meal', src: './images/top-page-icons/knife.png' }
    , { text: 'dinner', type: 'big_meal', src: './images/top-page-icons/knife.png' }
    , { text: 'snack', type: 'snack', src: './images/top-page-icons/cup.png' }
]

export const MEAL_HISTORY = [{ text: '05.21.Morning', type: 'big_meal', src: './images/m01.jpg' },
{ text: '05.21.Lunch', type: 'big_meal', src: './images/l03.jpg' }
    , { text: '05.21.Dinner', type: 'big_meal', src: './images/d01.jpg' }
    , { text: '05.21.Snack', type: 'snack', src: './images/l01.jpg' }
    , { text: '05.20.Morning', type: 'snack', src: './images/l01.jpg' }
    , { text: '05.20.Lunch', type: 'snack', src: './images/l02.jpg' }
    , { text: '05.20.Dinner', type: 'snack', src: './images/d02.jpg' }
    , { text: '05.21.Snack', type: 'snack', src: './images/s01.jpg' }
]

export const EXCERCISE_RECORD = new Array(100).fill({ name: '家事全般（立位・軽い', time: 10, calories: 26 });


export const DIARY_RECORDS = new Array(100).fill({
    time: {
        date: '2021.05.21',
        time: '23:25'
    }, title: '私の日記の記録が一部表示されます。',
    body: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスストテキストテキストテキスストテキストテキストテキストトテキストテキストストテキストテキストテキストテキストトテキストテキスト'
});

export const GRAPH_INFO_BUTTONS = [{ id: 1, displayText: '日' }, { id: 2, displayText: '週' }, { id: 3, displayText: '月' }, { id: 4, displayText: '年' }]

export const ROUTE = {
    COLUMN_PAGE: 'COLUMN_PAGE',
    TOP_PAGE: 'TOP_PAGE',
    RECORD_PAGE: 'RECORD_PAGE',
}