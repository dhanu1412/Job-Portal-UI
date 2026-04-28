const jobs = [
    { title: "Full Stack Developer", company: "Meta", location: "Remote", type: "Full-time", salary: "$120k - $150k", category: "Engineering" },
    { title: "Frontend Engineer", company: "Google", location: "Bangalore", type: "Hybrid", salary: "$100k - $130k", category: "Engineering" },
    { title: "Product Designer", company: "Airbnb", location: "Coimbatore", type: "Remote", salary: "$90k - $110k", category: "Design" },
    { title: "Software Engineer", company: "Amazon", location: "Chennai", type: "Full-time", salary: "$115k - $140k", category: "Engineering" },
    { title: "Data Analyst", company: "Spotify", location: "Remote", type: "Full-time", salary: "$95k - $120k", category: "Data" },
    { title: "Marketing Manager", company: "Netflix", location: "Mumbai", type: "Full-time", salary: "$110k - $135k", category: "Marketing" },
    { title: "Cloud Architect", company: "Microsoft", location: "Hyderabad", type: "Hybrid", salary: "$140k - $180k", category: "Engineering" },
    { title: "UX Researcher", company: "Apple", location: "California", type: "Full-time", salary: "$110k - $145k", category: "Design" },
    { title: "Financial Analyst", company: "Goldman Sachs", location: "New York", type: "Full-time", salary: "$105k - $130k", category: "Finance" },
    { title: "Biomedical Engineer", company: "Siemens Healthineers", location: "Coimbatore", type: "Full-time", salary: "$80k - $100k", category: "Healthcare" },
    { title: "Cybersecurity Specialist", company: "CrowdStrike", location: "Remote", type: "Contract", salary: "$130k - $160k", category: "Security" },
    { title: "Content Strategist", company: "Adobe", location: "San Jose", type: "Full-time", salary: "$85k - $115k", category: "Marketing" }
];
function displayJobs(data) {
    const grid = document.getElementById('jobGrid');
    grid.innerHTML = data.map(job => `
        <div class="job-card">
            <h3>${job.title}</h3>
            <p class="company">${job.company}</p>
            <div class="tags">
                <span class="tag">${job.location}</span>
                <span class="tag">${job.type}</span>
                <span class="tag">${job.salary}</span>
            </div>
            <button class="apply-btn" onclick="openModal('${job.title}')">Apply Now</button>
        </div>
    `).join('');
    document.getElementById('jobCount').innerText = `Found ${data.length} listings`;
}

function filterJobs() {
    const val = document.getElementById('searchInput').value.toLowerCase();
    const filtered = jobs.filter(j => 
        j.title.toLowerCase().includes(val) || j.company.toLowerCase().includes(val)
    );
    displayJobs(filtered);
}

function openModal(title) {
    document.getElementById('jobTitleLabel').innerText = title;
    document.getElementById('applyModal').style.display = "block";
}

function closeModal() {
    document.getElementById('applyModal').style.display = "none";
}

window.onclick = (event) => {
    if (event.target == document.getElementById('applyModal')) closeModal();
}

displayJobs(jobs);