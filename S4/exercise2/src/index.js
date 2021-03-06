// import Chart from "../node_modules/chart.js/dist/chart.js";
import Chart from 'chart.js/auto';

import * as data from "./data.json";

let ctx = document.getElementById('hypeChart').getContext('2d');

let labels = [];
let hypeLevels = [];

data.courses.forEach(function (course, index) {
    labels.push(course.name);
    hypeLevels.push(course.hype);
})

let hypeChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: `Hype levels of ${data.student}`,
            data: hypeLevels,
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