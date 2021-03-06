
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;
var date = [1899,
    1902,
    1903,
    1904,
    1905,
    1906,
    1907,
    1908,
    1909,
    1910,
    1911,
    1912,
    1913,
    1914,
    1915,
    1916,
    1917,
    1918,
    1919,
    1920,
    1921,
    1922,
    1923,
    1924,
    1925,
    1926,
    1927,
    1928,
    1929,
    1930,
    1931,
    1932,
    1933,
    1934,
    1935,
    1936,
    1937,
    1938,
    1939,
    1940,
    1941,
    1942,
    1943,
    1944,
    1945,
    1946,
    1947,
    1948,
    1949,
    1950,
    1951,
    1952,
    1953,
    1954,
    1955,
    1956,
    1957,
    1958,
    1959,
    1960,
    1961,
    1962,
    1963,
    1964,
    1965,
    1966,
    1967,
    1968,
    1969,
    1970,
    1971,
    1972,
    1973,
    1974,
    1975,
    1976,
    1977,
    1978,
    1979,
    1980,
    1981,
    1982,
    1983,
    1984,
    1985,
    1986,
    1987,
    1988,
    1989,
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019
    ];

var data1 = [0.095,
    0.095,
    1.964,
    2.088,
    2.297,
    17.111,
    16.84,
    22.731,
    20.837,
    18.749,
    27.846,
    9.787,
    10.758,
    15.107,
    16.089,
    17.965,
    19.852,
    21.042,
    24.256,
    26.769,
    25.289,
    26.634,
    32.152,
    35.094,
    33.221,
    29.59,
    33.526,
    34.108,
    35.804,
    37.908,
    40.241,
    38.585,
    42.194,
    49.254,
    57.597,
    64.955,
    60.491,
    55.303,
    67.113,
    86.047,
    107.518,
    113.741,
    97.179,
    97.769,
    50.347,
    31.259,
    33.553,
    23.836,
    59.272,
    78.582,
    101.617,
    127.987,
    133.784,
    160.878,
    190.521,
    215.824,
    255.785,
    524.617,
    720.152,
    778.979,
    550.959,
    439.342,
    435.518,
    435.704,
    474.681,
    521.459,
    432.224,
    467.806,
    575.945,
    770.167,
    874.016,
    928.894,
    965.647,
    985.085,
    1142.102,
    1190.965,
    1304.403,
    1455.258,
    1487.113,
    1458.887,
    1442.782,
    1570.468,
    1655.81,
    1802.317,
    1951.773,
    2052.242,
    2191.053,
    2347.763,
    2386.885,
    2420.789,
    2538.03,
    2653.192,
    2835.795,
    3010.242,
    3265.057,
    3408.347,
    3414.549,
    3265.903,
    3258.135,
    3349.295,
    3426.144,
    3782.439,
    4452.31,
    5125.894,
    5771.168,
    6377.748,
    6861.751,
    7375.19,
    7758.812,
    8500.543,
    9388.199,
    9633.899,
    9796.527,
    9820.36,
    9683.201,
    9552.517,
    9750.726,
    9956.569,
    10174.681
    ];

var data2=[
    1850.909,
1953.614,
2018.421,
2069.946,
2258.613,
2282.759,
2431.145,
2554.215,
2887.833,
2779.288,
2890.654,
3032.156,
3087.264,
3233.403,
3498.266,
3173.996,
3130.389,
3378.662,
3533.556,
3483.435,
3019.921,
3513.395,
3083.123,
3234.231,
3670.605,
3682.986,
3709.804,
3642.2,
3978.374,
3959.653,
4252.19,
3919.399,
3502.982,
3157.845,
3324.972,
3616.315,
3794.457,
4168.554,
4456.655,
4193.546,
4435.793,
4847.084,
4955.476,
4935.659,
5018.865,
5101.04,
4240.829,
4629.673,
5125.894,
5396.503,
5239.276,
5998.35,
6373.785,
6460.163,
6641.785,
6784.944,
7437.038,
7917.91,
8179.34,
8412.113,
8848.509,
9334.894,
9356.003,
9687.509,
10236.031,
10769.609,
11269.289,
11793.838,
12171.497,
12835.996,
13691.842,
14826.863,
15425.831,
16142.605,
17000.713,
16925.872,
16902.973,
17799.76,
18287.936,
18958.832,
19464.238,
19369.452,
18841.367,
18700.965,
18876.275,
19426.234,
20116.824,
20401.695,
21062.704,
21865.971,
22193.362,
22697.612,
23169.529,
22444.951,
22682.603,
22843.788,
23332.159,
24050.844,
24191.148,
24112.119,
24431.051,
25119.042,
25332.203,
25911.186,
27176.184,
28470.451,
29410.889,
30374.554,
31293.862,
31946.034,
31464.2,
33131.911,
34209.583,
34760.008,
34987.264,
35244.868,
35209.447,
35220.412,
35696.349,
36419.712,
36441.388
]

option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: '????????????????????????????????????????????? (??????????????? ???)',
        padding: [5,5,40,5],
        borderRadius: 5, // ????????????????????????????????????
borderRadius: [5, 5, 0, 0] //????????????????????????????????????????????????
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['??????', '??????'],
        top:'30px'
    },
    grid: {
        top:'60px',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        type: 'value',
        boundaryGap: false
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
        start: 0,
        end: 10
    }],
    series: [
        {
            name: '??????',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: data1
        },
        {
            name: '??????',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: data2
        }
    ]
};

option && myChart.setOption(option);
