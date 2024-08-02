document.addEventListener("DOMContentLoaded", function () {
    const ctxOccupancy = document.getElementById('occupancyChart').getContext('2d');
    const ctxRoomTypes = document.getElementById('roomTypesChart').getContext('2d');

    const occupancyChart = new Chart(ctxOccupancy, {
        type: 'bar',
        data: {
            labels: ['Occupied', 'Vacant', 'Under Maintenance'],
            datasets: [{
                label: 'Occupancy Rates',
                data: [65, 25, 10],
                backgroundColor: ['#007bff', '#28a745', '#dc3545']
            }]
        }
    });

    const roomTypesChart = new Chart(ctxRoomTypes, {
        type: 'pie',
        data: {
            labels: ['Single', 'Double', 'Suite'],
            datasets: [{
                label: 'Room Types',
                data: [50, 30, 20],
                backgroundColor: ['#ffc107', '#17a2b8', '#6c757d']
            }]
        }
    });

    // Mock data for Room Management
    const roomData = [
        { room: '101', resident: 'John Doe', status: 'Occupied', amenities: 'WiFi, TV' },
        { room: '102', resident: 'Jane Smith', status: 'Vacant', amenities: 'WiFi, TV, Fridge' },
        { room: '103', resident: 'Jack Brown', status: 'Under Maintenance', amenities: 'WiFi, TV' }
    ];

    const roomTableBody = document.getElementById('roomTable').getElementsByTagName('tbody')[0];
    roomData.forEach(room => {
        const row = roomTableBody.insertRow();
        row.insertCell(0).innerText = room.room;
        row.insertCell(1).innerText = room.resident;
        row.insertCell(2).innerText = room.status;
        row.insertCell(3).innerText = room.amenities;
    });

    // Mock data for Maintenance Requests
    const maintenanceData = [
        { room: '101', request: 'Fix TV', status: 'Pending', notes: 'TV not working' },
        { room: '103', request: 'Plumbing', status: 'Ongoing', notes: 'Leaky faucet' }
    ];

    const maintenanceTableBody = document.getElementById('maintenanceTable').getElementsByTagName('tbody')[0];
    maintenanceData.forEach(request => {
        const row = maintenanceTableBody.insertRow();
        row.insertCell(0).innerText = request.room;
        row.insertCell(1).innerText = request.request;
        row.insertCell(2).innerText = request.status;
        row.insertCell(3).innerText = request.notes;
    });

    // Mock data for Alerts & Notifications
    const alertsData = [
        'Upcoming room inspection in Room 102',
        'Maintenance deadline for Room 103',
        'Urgent request from Room 101'
    ];

    const alertsList = document.getElementById('alertsList');
    alertsData.forEach(alert => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerText = alert;
        alertsList.appendChild(li);
    });

    // Theme Switcher
    const themeSwitcher = document.getElementById('theme-switcher');
    themeSwitcher.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
    });

    // Set theme on load
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(savedTheme);
});
