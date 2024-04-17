const url = 'https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6f40aa3a77msh07dae7c946a4c45p1b62aejsn2140ec81c9b3',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        const apiData = document.getElementById('api-data');
        apiData.textContent = result;
    } catch (error) {
        console.error(error);
    }
}

// Function to add student info dynamically
function addStudentInfo() {
    const studentInfo = document.getElementById('student-info');
    studentInfo.textContent = 'Student ID: 200555897 - Parveen Kaur';
}

// Add event listener for when the page loads
window.addEventListener('load', () => {
    addStudentInfo();
    fetchData();
});
