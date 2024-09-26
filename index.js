document.getElementById("search-button").addEventListener("click", function() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    if (searchInput === "intro" || searchInput === "introduction") {
        window.location.hash = "introduction";
    } else if (searchInput === "guide" || searchInput == "guidance") {
        window.location.hash = "Guidance";
    }else if (searchInput === "con" || searchInput == "contact") {
        window.location.hash = "contact-section";
    } else {
        alert("No section found for: " + searchInput);
    }
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    
    const form = event.target;
    const name = form.name.value;
    const age = form.age.value;
    const occupation = form.occupation.value;
    const issues = form.issues.value;
    const contact = form.contact.value;
    const comments = form.comments.value;
    
    const emailAddress = "anu.kaushik02@gmail.com"; 
    const ccAddress = "cc-email@example.com"; 
    const bccAddress = "bcc-email@example.com";
    const subject = "Contact Form Submission from " + name;
    const body = `Name: ${name}\nAge: ${age}\nOccupation: ${occupation}\nIssues: ${issues}\nContact Number: ${contact}\nComments: ${comments}`;
    
    window.location.href = `mailto:${emailAddress}?cc=${encodeURIComponent(ccAddress)}&bcc=${encodeURIComponent(bccAddress)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    alert("Thanks for your response, we'll contact you soon.");
    form.reset(); // Reset form fields after submission
    return false; // Prevent actual form submission
}
