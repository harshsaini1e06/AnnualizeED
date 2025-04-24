function generateReport() {
    // Show the report section
    document.getElementById('reportSection').style.display = 'block';

    // Get form data
    const formData = new FormData(document.getElementById('reportForm'));
    const enrollmentData = [
        parseInt(formData.get('enrollmentYear1')),
        parseInt(formData.get('enrollmentYear2')),
        parseInt(formData.get('enrollmentYear3'))
    ];
    const gradRateData = [
        parseInt(formData.get('gradRateYear1')),
        parseInt(formData.get('gradRateYear2')),
        parseInt(formData.get('gradRateYear3'))
    ];
    const gpaData = [
        parseFloat(formData.get('gpaYear1')),
        parseFloat(formData.get('gpaYear2')),
        parseFloat(formData.get('gpaYear3'))
    ];
    const financialData = [
        parseInt(formData.get('revenue')),
        parseInt(formData.get('expenses')),
        parseInt(formData.get('scholarships')),
        parseInt(formData.get('researchFunding')),
        parseInt(formData.get('campusMaintenance'))
    ];

    // Enrollment Chart
    new Chart(document.getElementById('enrollmentChart'), {
        type: 'line',
        data: {
            labels: ["Year 1", "Year 2", "Year 3"],
            datasets: [{
                label: 'Enrollment Numbers',
                data: enrollmentData,
                borderColor: '#4CAF50',
                fill: false,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Student Enrollment Numbers'
                }
            }
        }
    });

    // Graduation Chart
    new Chart(document.getElementById('graduationChart'), {
        type: 'bar',
        data: {
            labels: ["Year 1", "Year 2", "Year 3"],
            datasets: [{
                label: 'Graduation Rates (%)',
                data: gradRateData,
                backgroundColor: '#2196F3'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Graduation Rates'
                }
            }
        }
    });

    // Academic Performance Chart
    new Chart(document.getElementById('academicPerformanceChart'), {
        type: 'bar',
        data: {
            labels: ["Year 1", "Year 2", "Year 3"],
            datasets: [{
                label: 'Average GPA',
                data: gpaData,
                backgroundColor: '#FF9800'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Academic Performance (Average GPA)'
                }
            }
        }
    });

    // Financial Data Chart
    new Chart(document.getElementById('financialChart'), {
        type: 'pie',
        data: {
            labels: ["Total Revenue", "Total Expenses", "Scholarships", "Research Funding", "Campus Maintenance"],
            datasets: [{
                label: 'Financial Data',
                data: financialData,
                backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#FF5722']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Financial Statements'
                }
            }
        }
    });
}
