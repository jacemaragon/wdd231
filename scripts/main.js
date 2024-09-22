document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = Last Update: ${document.lastModified};

    const courses = [
        { code: 'WDD 131', name: 'Web Design I', completed: false },
        { code: 'CSE 121B', name: 'JavaScript Language', completed: true },
    ];

    const courseContainer = document.getElementById('courses');
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.textContent = ${course.code}: ${course.name};
        courseElement.classList.add(course.completed ? 'completed' : 'pending');
        courseContainer.appendChild(courseElement);
    });

    document.getElementById('all').addEventListener('click', () => showCourses('all'));
    document.getElementById('cse').addEventListener('click', () => showCourses('CSE'));
    document.getElementById('wdd').addEventListener('click', () => showCourses('WDD'));

    function showCourses(type) {
        courseContainer.innerHTML = '';
        const filtered = type === 'all' ? courses : courses.filter(c => c.code.includes(type));
        filtered.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.textContent = ${course.code}: ${course.name};
            courseElement.classList.add(course.completed ? 'completed' : 'pending');
            courseContainer.appendChild(courseElement);
        });
    }
});