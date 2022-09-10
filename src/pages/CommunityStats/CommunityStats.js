import {useEffect} from "react"
import Chart from 'chart.js/auto';

const CommunityStats = () => {

    useEffect(() => {

        //Event Charts
        const eventsChartCtx = document.getElementById('eventsChart');
        const eventsChart = new Chart(eventsChartCtx, {
            type: 'bar',
            data: {
                labels: ['August 12','August 13','August 14','August 15','August 16','August 17','August 18','August 19','August 20','August 21','August 22','August 23','August 24','August 25','August 26','August 27','August 28','August 29','August 30','August 31','September 1','September 2','September 3','September 4','September 5','September 6','September 7','September 8','September 9','September 10'],
                datasets: [{
                    label: 'nestings',
                    data: [23,39,27,16,22,54,35,26,20,14,18,13,11,25,18,15,14,28,95,47,13,14,6,9,10,16,13,14,8,1],
                    backgroundColor: document.documentElement.classList.contains('dark') ? '#0ea5e9' : '#38bdf8',
                    borderColor: document.documentElement.classList.contains('dark') ? '#0ea5e9' : '#38bdf8',
                },
                {
                    label: 'unnestings',
                    data: [31,30,24,20,17,26,17,25,21,7,14,7,4,21,26,12,9,12,117,30,11,25,5,15,9,21,18,20,13,5],
                    backgroundColor: document.documentElement.classList.contains('dark') ? '#ec4899' : '#f472b6',
                    borderColor: document.documentElement.classList.contains('dark') ? '#ec4899' : '#f472b6',
                }]
            },
            options: {
                layout: {
                    padding: {
                        top: 50
                    }
                },
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor: document.documentElement.classList.contains('dark') ? '#1e293b' : '#0f172a',
                        bodyAlign: 'left',
                        bodyFont: {
                            size: 14,
                            weight: 600
                        },
                        bodySpacing: 3,
                        caretPadding: 10,
                        caretSize: 6,
                        callbacks: {
                            title: function(context) {
                                return '';
                            },
                            label: function(context) {
                                return `${context.label} - ${context.formattedValue} ${context.dataset.label}`;
                            }
                        },
                        cornerRadius: 8,
                        displayColors: false,
                        enabled: true,
                        padding: 18,
                        position: 'nearest',
                        yAlign: 'bottom'
                    }
                },
                scales: {
                    x: {
                        afterFit: function(scale) {
                            scale.height = 50
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        },
                        ticks: {
                            color: document.documentElement.classList.contains('dark') ? '#94a4b8' : '#94a4b8',
                            font: {
                                size: 14,
                                weight: 500
                            },
                            maxTicksLimit: window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '') == 'xs' ? 5 : 10,
                            maxRotation: 0,
                            minRotation: 0,
                            padding: 10,
                        },
                        stacked: true,
                    },
                    y: {
                        afterFit: function(scale) {
                            scale.width = 70
                        },
                        grid: {
                            color: document.documentElement.classList.contains('dark') ? '#334155' : '#e2e8f0',
                            borderDash: [5],
                            borderDashOffset: 0.0,
                            display: true,
                            drawBorder: false,
                            tickLength: 10,
                            tickWidth: 0,
                            drawTicks: true,
                        },
                        suggestedMin: 0,
                        ticks: {
                            color: '#94a4b8',
                            font: {
                                size: 14,
                                weight: 500
                            },
                            padding: 30,
                            precision: 0,
                            maxTicksLimit: 6,
                        },
                        stacked: true,
                    }
                }
            }
        });

        //Nesting Chart
        const nestingChartCtx = document.getElementById('nestingChart');
        const nestingChart = new Chart(nestingChartCtx, {
            type: 'line',
            data: {
                labels: ['August 12','August 13','August 14','August 15','August 16','August 17','August 18','August 19','August 20','August 21','August 22','August 23','August 24','August 25','August 26','August 27','August 28','August 29','August 30','August 31','September 1','September 2','September 3','September 4','September 5','September 6','September 7','September 8','September 9','September 10'],
                datasets: [{
                    data: [9469,9468,9471,9474,9474,9483,9515,9524,9521,9524,9530,9536,9542,9551,9549,9546,9546,9555,9573,9556,9566,9560,9554,9551,9548,9548,9542,9537,9531,9527],
                    backgroundColor: document.documentElement.classList.contains('dark') ? '#0ea5e9' : '#38bdf8',
                    borderColor: document.documentElement.classList.contains('dark') ? '#0ea5e9' : '#38bdf8',
                }]
            },
            options: {
                elements: {
                    line: {
                        tension: 0.05,
                        fill: false,
                        borderWidth: 3,
                    },
                    point: {
                        radius: 0,
                        hitRadius: 50
                    }
                },
                layout: {
                    padding: {
                        top: 50
                    }
                },
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor: document.documentElement.classList.contains('dark') ? '#1e293b' : '#0f172a',
                        bodyAlign: 'left',
                        bodyFont: {
                            size: 14,
                            weight: 600
                        },
                        bodySpacing: 3,
                        caretPadding: 10,
                        caretSize: 6,
                        callbacks: {
                            title: function(context) {
                                return '';
                            },
                            label: function(context) {
                                return `${context.label} - ${context.formattedValue} nested`;
                            }
                        },
                        cornerRadius: 8,
                        displayColors: false,
                        enabled: true,
                        padding: 18,
                        position: 'nearest',
                        yAlign: 'bottom'
                    }
                },
                scales: {
                    x: {
                        afterFit: function(scale) {
                            scale.height = 50
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        },
                        ticks: {
                            color: document.documentElement.classList.contains('dark') ? '#94a4b8' : '#94a4b8',
                            font: {
                                size: 14,
                                weight: 500
                            },
                            maxTicksLimit: window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '') == 'xs' ? 5 : 10,
                            maxRotation: 0,
                            minRotation: 0,
                            padding: 10,
                        },
                        stacked: false,
                    },
                    y: {
                        afterFit: function(scale) {
                            scale.width = 70
                        },
                        grid: {
                            color: document.documentElement.classList.contains('dark') ? '#334155' : '#e2e8f0',
                            borderDash: [5],
                            borderDashOffset: 0.0,
                            display: true,
                            drawBorder: false,
                            tickLength: 10,
                            tickWidth: 0,
                            drawTicks: true,
                        },
                        suggestedMin: 9524,
                        suggestedMax: 9524,
                        ticks: {
                            callback: function(value, index, values) {
                                return value.toLocaleString();
                            },
                            color: '#94a4b8',
                            font: {
                                size: 14,
                                weight: 500
                            },
                            padding: 23,
                            precision: 0,
                            stepSize: 40,
                            maxTicksLimit: 6,
                        },
                        stacked: false,
                    }
                }
            }
        });

        //OwnerChart
        const ownerChartCtx = document.getElementById('ownerChart');
    const ownerChart = new Chart(ownerChartCtx, {
        type: 'line',
        data: {
            labels: ['August 12','August 13','August 14','August 15','August 16','August 17','August 18','August 19','August 20','August 21','August 22','August 23','August 24','August 25','August 26','August 27','August 28','August 29','August 30','August 31','September 1','September 2','September 3','September 4','September 5','September 6','September 7','September 8','September 9','September 10'],
            datasets: [{
                data: [6581,6573,6575,6576,6578,6572,6571,6574,6574,6573,6572,6573,6569,6564,6559,6560,6557,6557,6556,6560,6566,6565,6565,6568,6571,6574,6573,6572,6570,6568],
                backgroundColor: document.documentElement.classList.contains('dark') ? '#0ea5e9' : '#38bdf8',
                borderColor: document.documentElement.classList.contains('dark') ? '#0ea5e9' : '#38bdf8',
            }]
        },
        options: {
            elements: {
                line: {
                    tension: 0.05,
                    fill: false,
                    borderWidth: 3,
                },
                point: {
                    radius: 0,
                    hitRadius: 50
                }
            },
            layout: {
                padding: {
                    top: 50
                }
            },
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    backgroundColor: document.documentElement.classList.contains('dark') ? '#1e293b' : '#0f172a',
                    bodyAlign: 'left',
                    bodyFont: {
                        size: 14,
                        weight: 600
                    },
                    bodySpacing: 3,
                    caretPadding: 10,
                    caretSize: 6,
                    callbacks: {
                        title: function(context) {
                            return '';
                        },
                        label: function(context) {
                            return `${context.label} - ${context.formattedValue} owners`;
                        }
                    },
                    cornerRadius: 8,
                    displayColors: false,
                    enabled: true,
                    padding: 18,
                    position: 'nearest',
                    yAlign: 'bottom'
                }
            },
            scales: {
                x: {
                    afterFit: function(scale) {
                        scale.height = 50
                    },
                    grid: {
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        color: document.documentElement.classList.contains('dark') ? '#94a4b8' : '#94a4b8',
                        font: {
                            size: 14,
                            weight: 500
                        },
                        maxTicksLimit: window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '') == 'xs' ? 5 : 10,
                        maxRotation: 0,
                        minRotation: 0,
                        padding: 10,
                    },
                    stacked: false,
                },
                y: {
                    afterFit: function(scale) {
                        scale.width = 70
                    },
                    grid: {
                        color: document.documentElement.classList.contains('dark') ? '#334155' : '#e2e8f0',
                        borderDash: [5],
                        borderDashOffset: 0.0,
                        display: true,
                        drawBorder: false,
                        tickLength: 10,
                        tickWidth: 0,
                        drawTicks: true,
                    },
                    suggestedMin: 6569,
                    suggestedMax: 6569,
                    ticks: {
                        callback: function(value, index, values) {
                            return value.toLocaleString();
                        },
                        color: '#94a4b8',
                        font: {
                            size: 14,
                            weight: 500
                        },
                        padding: 23,
                        precision: 0,
                        stepSize: 40,
                        maxTicksLimit: 6,
                    },
                    stacked: false,
                }
            }
        }
    });

    //Odditites Chart
    const odditiesOwnerChartCtx = document.getElementById('odditiesOwnerChart');
    const odditiesOwnerChart = new Chart(odditiesOwnerChartCtx, {
        type: 'line',
        data: {
            labels: ['August 12','August 13','August 14','August 15','August 16','August 17','August 18','August 19','August 20','August 21','August 22','August 23','August 24','August 25','August 26','August 27','August 28','August 29','August 30','August 31','September 1','September 2','September 3','September 4','September 5','September 6','September 7','September 8','September 9','September 10'],
            datasets: [{
                data: [6187,6186,6188,6188,6190,6189,6170,6158,6145,6137,6131,6114,6101,6083,6076,6080,6083,6084,6089,6115,6112,6111,6156,6158,6156,6158,6157,6155,6149,6146],
                backgroundColor: document.documentElement.classList.contains('dark') ? '#0ea5e9' : '#38bdf8',
                borderColor: document.documentElement.classList.contains('dark') ? '#0ea5e9' : '#38bdf8',
            }]
        },
        options: {
            elements: {
                line: {
                    tension: 0.05,
                    fill: false,
                    borderWidth: 3,
                },
                point: {
                    radius: 0,
                    hitRadius: 50
                }
            },
            layout: {
                padding: {
                    top: 50
                }
            },
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    backgroundColor: document.documentElement.classList.contains('dark') ? '#1e293b' : '#0f172a',
                    bodyAlign: 'left',
                    bodyFont: {
                        size: 14,
                        weight: 600
                    },
                    bodySpacing: 3,
                    caretPadding: 10,
                    caretSize: 6,
                    callbacks: {
                        title: function(context) {
                            return '';
                        },
                        label: function(context) {
                            return `${context.label} - ${context.formattedValue} owners`;
                        }
                    },
                    cornerRadius: 8,
                    displayColors: false,
                    enabled: true,
                    padding: 18,
                    position: 'nearest',
                    yAlign: 'bottom'
                }
            },
            scales: {
                x: {
                    afterFit: function(scale) {
                        scale.height = 50
                    },
                    grid: {
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        color: document.documentElement.classList.contains('dark') ? '#94a4b8' : '#94a4b8',
                        font: {
                            size: 14,
                            weight: 500
                        },
                        maxTicksLimit: window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '') == 'xs' ? 5 : 10,
                        maxRotation: 0,
                        minRotation: 0,
                        padding: 10,
                    },
                    stacked: false,
                },
                y: {
                    afterFit: function(scale) {
                        scale.width = 70
                    },
                    grid: {
                        color: document.documentElement.classList.contains('dark') ? '#334155' : '#e2e8f0',
                        borderDash: [5],
                        borderDashOffset: 0.0,
                        display: true,
                        drawBorder: false,
                        tickLength: 10,
                        tickWidth: 0,
                        drawTicks: true,
                    },
                    suggestedMin: 6146,
                    suggestedMax: 6146,
                    ticks: {
                        callback: function(value, index, values) {
                            return value.toLocaleString();
                        },
                        color: '#94a4b8',
                        font: {
                            size: 14,
                            weight: 500
                        },
                        padding: 23,
                        precision: 0,
                        stepSize: 40,
                        maxTicksLimit: 6,
                    },
                    stacked: false,
                }
            }
        }
    });

    },[])

    return (
        <div  className="w-full px-4 py-10 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
    <div className="text-center">
        <p className="mt-1 text-4xl font-extrabold text-slate-900 dark:text-slate-50 sm:text-5xl sm:tracking-tight lg:text-6xl">Community Stats</p>
        <p className="max-w-xl mt-5 mx-auto text-xl text-slate-500 dark:text-slate-400">Stats and data about the Moonbirds nesting ecosystem and community. Updated daily.</p>
    </div>

    <div className="pt-10 lg:pt-20">
        <dl className="grid grid-cols-1 gap-5 md:gap-6 md:grid-cols-3">
            <div className="px-4 py-5 dark:bg-slate-800 dark:bg-opacity-30 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden sm:p-6">
    <dt className="text-sm font-semibold text-slate-500 truncate">Total Nested</dt>
    <dd className="mt-1 text-3xl font-semibold text-slate-900 dark:text-slate-200 flex items-baseline">
        9,524
        <p className="ml-2 flex items-baseline text-sm font-semibold text-red-500 dark:text-red-400 ">
        <svg className="self-center flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
    </svg>
        <span className="sr-only"> Decreased by </span>
    7
</p>
    </dd>
</div>

            <div className="px-4 py-5 dark:bg-slate-800 dark:bg-opacity-30 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden sm:p-6">
    <dt className="text-sm font-semibold text-slate-500 truncate">Percentage Nested</dt>
    <dd className="mt-1 text-3xl font-semibold text-slate-900 dark:text-slate-200 flex items-baseline">
        95.24%
        <p className="ml-2 flex items-baseline text-sm font-semibold text-red-500 dark:text-red-400 ">
        <svg className="self-center flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
    </svg>
        <span className="sr-only"> Decreased by </span>
    0.1%
</p>
    </dd>
</div>

            <div className="px-4 py-5 dark:bg-slate-800 dark:bg-opacity-30 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden sm:p-6">
    <dt className="text-sm font-semibold text-slate-500 truncate">Avg. Nesting Period</dt>
    <dd className="mt-1 text-3xl font-semibold text-slate-900 dark:text-slate-200 flex items-baseline">
        118 days
        
    </dd>
</div>

            <div className="px-4 py-5 dark:bg-slate-800 dark:bg-opacity-30 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden sm:p-6">
    <dt className="text-sm font-semibold text-slate-500 truncate">Moonbirds Holders</dt>
    <dd className="mt-1 text-3xl font-semibold text-slate-900 dark:text-slate-200 flex items-baseline">
        6,569
        <p className="ml-2 flex items-baseline text-sm font-semibold text-red-500 dark:text-red-400 ">
        <svg className="self-center flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
    </svg>
        <span className="sr-only"> Decreased by </span>
    1
</p>
    </dd>
</div>

            <div className="px-4 py-5 dark:bg-slate-800 dark:bg-opacity-30 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden sm:p-6">
    <dt className="text-sm font-semibold text-slate-500 truncate">Unique Moonbirds Holders</dt>
    <dd className="mt-1 text-3xl font-semibold text-slate-900 dark:text-slate-200 flex items-baseline">
        65.69%
        <p className="ml-2 flex items-baseline text-sm font-semibold text-slate-500 ">
    0%
</p>
    </dd>
</div>

            <div className="px-4 py-5 dark:bg-slate-800 dark:bg-opacity-30 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden sm:p-6">
    <dt className="text-sm font-semibold text-slate-500 truncate">Avg. Moonbirds Per Wallet</dt>
    <dd className="mt-1 text-3xl font-semibold text-slate-900 dark:text-slate-200 flex items-baseline">
        1.5
        <p className="ml-2 flex items-baseline text-sm font-semibold text-slate-500 ">
    0
</p>
    </dd>
</div>

            <div className="px-4 py-5 dark:bg-slate-800 dark:bg-opacity-30 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden sm:p-6">
    <dt className="text-sm font-semibold text-slate-500 truncate">Oddities Holders</dt>
    <dd className="mt-1 text-3xl font-semibold text-slate-900 dark:text-slate-200 flex items-baseline">
        6,146
        <p className="ml-2 flex items-baseline text-sm font-semibold text-red-500 dark:text-red-400 ">
        <svg className="self-center flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
    </svg>
        <span className="sr-only"> Decreased by </span>
    3
</p>
    </dd>
</div>

            <div className="px-4 py-5 dark:bg-slate-800 dark:bg-opacity-30 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden sm:p-6">
    <dt className="text-sm font-semibold text-slate-500 truncate">Unique Oddities Holders</dt>
    <dd className="mt-1 text-3xl font-semibold text-slate-900 dark:text-slate-200 flex items-baseline">
        61.46%
        <p className="ml-2 flex items-baseline text-sm font-semibold text-slate-500 ">
    0%
</p>
    </dd>
</div>

            <div className="px-4 py-5 dark:bg-slate-800 dark:bg-opacity-30 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden sm:p-6">
    <dt className="text-sm font-semibold text-slate-500 truncate">Avg. Oddities Per Wallet</dt>
    <dd className="mt-1 text-3xl font-semibold text-slate-900 dark:text-slate-200 flex items-baseline">
        1.6
        <p className="ml-2 flex items-baseline text-sm font-semibold text-slate-500 ">
    0
</p>
    </dd>
</div>

            <div className="px-4 py-5 dark:bg-slate-800 dark:bg-opacity-30 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden sm:p-6">
    <dt className="text-sm font-semibold text-slate-500 truncate">Floor Price</dt>
    <dd className="mt-1 text-3xl font-semibold text-slate-900 dark:text-slate-200 flex items-baseline">
        Ξ10.10
        <p className="ml-2 flex items-baseline text-sm font-semibold text-red-500 dark:text-red-400 ">
        <svg className="self-center flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
    </svg>
        <span className="sr-only"> Decreased by </span>
    Ξ 0.58
</p>
    </dd>
</div>

            <div className="px-4 py-5 dark:bg-slate-800 dark:bg-opacity-30 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden sm:p-6">
    <dt className="text-sm font-semibold text-slate-500 truncate">24Hr Sales</dt>
    <dd className="mt-1 text-3xl font-semibold text-slate-900 dark:text-slate-200 flex items-baseline">
        8
        <p className="ml-2 flex items-baseline text-sm font-semibold text-green-500 dark:text-green-400 ">
        <svg className="self-center flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
    </svg>
        <span className="sr-only"> Increased by </span>
    2
</p>
    </dd>
</div>

            <div className="px-4 py-5 dark:bg-slate-800 dark:bg-opacity-30 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden sm:p-6">
    <dt className="text-sm font-semibold text-slate-500 truncate">24Hr Volume</dt>
    <dd className="mt-1 text-3xl font-semibold text-slate-900 dark:text-slate-200 flex items-baseline">
        Ξ88.39
        <p className="ml-2 flex items-baseline text-sm font-semibold text-green-500 dark:text-green-400 ">
        <svg className="self-center flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
    </svg>
        <span className="sr-only"> Increased by </span>
    Ξ 18
</p>
    </dd>
</div>
        </dl>
    </div>

    <div className="mt-5 lg:mt-6">
        <div className="px-4 py-5 border rounded-lg max-h-96 bg-slate-50 dark:bg-slate-800 dark:bg-opacity-30 bg-opacity-70 border-slate-200 dark:border-slate-700 sm:p-6">
            <p className="text-2xl font-semibold truncate text-slate-900 dark:text-slate-500">Nesting</p>
            <canvas id="nestingChart" width="916" height="318" className="mb-4" style={{display: "block", boxSizing: "border-box", height: "318px", width: "916px"}}></canvas>

        </div>
    </div>

    <div className="mt-5 lg:mt-6">
        <div className="px-4 py-5 border rounded-lg max-h-96 bg-slate-50 dark:bg-slate-800 dark:bg-opacity-30 bg-opacity-70 border-slate-200 dark:border-slate-700 sm:p-6">
            <p className="text-2xl font-semibold truncate text-slate-900 dark:text-slate-500">Unique Moonbird Holders</p>
            <canvas id="ownerChart" width="916" height="318" className="mb-4" style={{display: "block", boxSizing: "border-box", height: "318px", width: "916px"}}></canvas>
        </div>
    </div>

    <div className="mt-5 lg:mt-6">
        <div className="px-4 py-5 border rounded-lg max-h-96 bg-slate-50 dark:bg-slate-800 dark:bg-opacity-30 bg-opacity-70 border-slate-200 dark:border-slate-700 sm:p-6">
            <p className="text-2xl font-semibold truncate text-slate-900 dark:text-slate-500">Unique Oddities Holders</p>
            <canvas id="odditiesOwnerChart" width="916" height="318" className="mb-4" style={{display: "block", boxSizing: "border-box", height: "318px", width: "916px"}}></canvas>

        </div>
    </div>

    <div className="mt-5 lg:mt-6">
        <div className="px-4 py-5 border rounded-lg max-h-96 bg-slate-50 dark:bg-slate-800 dark:bg-opacity-30 bg-opacity-70 border-slate-200 dark:border-slate-700 sm:p-6">
            <p className="text-2xl font-semibold truncate text-slate-900 dark:text-slate-500">Events</p>
            <canvas id="eventsChart" width="916" height="318" className="mb-4" style={{display: "block", boxSizing: "border-box", height: "318px", width: "916px"}}></canvas>
        </div>
    </div>
</div>
    )
}

export default CommunityStats