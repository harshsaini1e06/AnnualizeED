// Chart: Student Enrollment Numbers
const enrollmentChart = new Chart(document.getElementById('enrollmentChart'), {
    type: 'line',
    data: {
        labels: ["2021", "2022", "2023"],
        datasets: [
            {
                label: 'Total Enrollment',
                data: [5200, 5400, 5600],
                borderColor: '#4CAF50',
                fill: false,
            },
            {
                label: 'Undergraduate Enrollment',
                data: [4000, 4100, 4200],
                borderColor: '#2196F3',
                fill: false,
            },
            {
                label: 'Graduate Enrollment',
                data: [1200, 1300, 1400],
                borderColor: '#FF9800',
                fill: false,
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Student Enrollment Numbers (2021-2023)'
            }
        }
    }
});

// Chart: Academic Performance Data
const academicPerformanceChart = new Chart(document.getElementById('academicPerformanceChart'), {
    type: 'bar',
    data: {
        labels: ["2021", "2022", "2023"],
        datasets: [
            {
                label: 'Average GPA',
                data: [3.2, 3.3, 3.4],
                backgroundColor: '#4CAF50',
            },
            {
                label: 'SAT Average',
                data: [1250, 1270, 1285],
                backgroundColor: '#2196F3',
            },
            {
                label: 'ACT Average',
                data: [27, 28, 28.5],
                backgroundColor: '#FF9800',
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Academic Performance Data (2021-2023)'
            }
        }
    }
});

// Chart: Financial Statements
const financialChart = new Chart(document.getElementById('financialChart'), {
    type: 'pie',
    data: {
        labels: ["Total Revenue", "Total Expenses", "Scholarships & Financial Aid", "Research Funding", "Campus Maintenance"],
        datasets: [
            {
                label: 'Financial Data (in Thousands)',
                data: [50000, 47000, 6000, 2900, 3200],
                backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#FF5722'],
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Financial Statements (2023)'
            }
        }
    }
});
