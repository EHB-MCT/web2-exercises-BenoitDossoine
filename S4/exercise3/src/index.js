import Chart from 'chart.js/auto';
import * as data from '../complexdata.json';

let spellLevels = {};
let levelsArray = [];

for (let spell in data) {
    if (data[spell].level) {
        if (spellLevels[data[spell].level]) {
            spellLevels[data[spell].level]++;
        } else {
            spellLevels[data[spell].level] = 1;
        }
    }
}

for (let level in spellLevels) {
    levelsArray.push({
        label: level,
        amount: spellLevels[level]
    });
}

levelsArray.sort((a, b) => {
    let fa = a.label.toLowerCase();
    let fb = b.label.toLowerCase();

    if (fa < fb) {
        return -1;
    } else if (fa > fb) {
        return +1;
    }
    return 0;
})

let labels = [];
let levelsData = [];
levelsArray.forEach(function (level) {
    labels.push(level.label);
    levelsData.push(level.amount);
})


let ctx = document.getElementById("ddChart").getContext('2d');

let hypeChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: `Nerdy stuff`,
            data: levelsData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});